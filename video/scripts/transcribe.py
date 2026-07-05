#!/usr/bin/env python3
"""
transcribe.py — Voix off (MP3) -> timestamps au mot, pour un karaoke frame-perfect.

Utilise faster-whisper (local, gratuit, CPU). Aucune ffmpeg systeme requise
(PyAV embarque le decodage), aucun PyTorch (CTranslate2).

  pip install -r video/requirements.txt        # une fois
  python scripts/transcribe.py public/Meditation.mp3 --script src/data/scripts/meditation.json

Le premier lancement telecharge le modele depuis HuggingFace (~460 Mo pour
"small"). A LANCER SUR TA MACHINE : dans la session Claude web, huggingface.co
est bloque par la politique reseau (403) -> le modele ne peut pas s'y telecharger.

Modes de sortie (dans l'ordre de priorite) :
  --script <script.json>   injecte les timings dans le champ "words" du script
                           (c'est ce que le moteur karaoke lit ; workflow --props)
  --out <fichier.json>     ecrit { "audio", "words": [...] } dans un fichier
  (aucun)                  imprime le JSON des mots sur la sortie standard

ALIGNEMENT FORCE (par defaut avec --script) : Whisper *transcrit* ce qu'il entend
et se trompe parfois (mots, ponctuation, chiffres). Comme le texte EXACT est deja
dans les "subtitle" du script, on garde le texte du script et on n'emprunte a
Whisper QUE les timings. Resultat : mots corrects + calage au frame. Desactivable
avec --no-align (texte brut de Whisper).

Chaque mot : { "w": "mot", "start": 1.234, "end": 1.567 }  (secondes, absolues).
"""
import argparse
import difflib
import json
import os
import re
import sys


def eprint(*a):
    print(*a, file=sys.stderr)


_WORD_RE = re.compile(r"[0-9A-Za-zÀ-ÿ]+")


def _norm(token):
    """Forme comparable : minuscules, sans ponctuation ni espaces (accents gardés)."""
    return "".join(_WORD_RE.findall(token.lower()))


def transcribe(audio_path, model_name, lang):
    try:
        from faster_whisper import WhisperModel
    except ImportError as e:
        msg = str(e)
        if "faster_whisper" in msg and "No module named" in msg:
            eprint("[erreur] faster-whisper n'est pas installé pour ce Python. Installe-le :")
            eprint("         py -m pip install -r requirements.txt   (depuis le dossier video)")
        else:
            # Paquet présent mais une dépendance native ne charge pas
            # (DLL bloquée par Windows Defender/SmartScreen, ou wheel incompatible).
            eprint("[erreur] faster-whisper est installé mais une dépendance native ne se charge pas :")
            eprint(f"         {msg}")
            eprint("         Piste : DLL bloquée par Windows (Defender/SmartScreen), ou Python trop récent.")
        sys.exit(2)

    if not os.path.isfile(audio_path):
        eprint(f"[erreur] fichier audio introuvable : {audio_path}")
        sys.exit(2)

    eprint(f"[1/3] chargement du modele « {model_name} » (CPU int8)…")
    eprint("      (1er run : telechargement HuggingFace ; ensuite mis en cache)")
    try:
        model = WhisperModel(model_name, device="cpu", compute_type="int8")
    except Exception as e:  # noqa: BLE001
        msg = str(e)
        if "403" in msg or "Forbidden" in msg or "ConnectionError" in msg or "ProxyError" in msg:
            eprint("[erreur] telechargement du modele bloque (huggingface.co inaccessible).")
            eprint("         -> Lance ce script sur TA machine, pas dans la session Claude web.")
        else:
            eprint(f"[erreur] chargement du modele : {e}")
        sys.exit(3)

    eprint(f"[2/3] transcription de {audio_path} (langue={lang}, timestamps au mot)…")
    segments, info = model.transcribe(
        audio_path,
        language=lang,
        word_timestamps=True,
        vad_filter=True,  # coupe les longs silences -> timings plus propres
    )

    words = []
    for seg in segments:
        for w in seg.words or []:
            token = w.word.strip()
            if not token:
                continue
            words.append({
                "w": token,
                "start": round(float(w.start), 3),
                "end": round(float(w.end), 3),
            })

    eprint(f"[3/3] {len(words)} mots datés sur {info.duration:.1f}s "
           f"(langue détectée : {info.language} @ {info.language_probability:.0%})")
    return words


def extract_ref_tokens(script_data):
    """Texte EXACT : tous les mots des `subtitle`, dans l'ordre des plans."""
    toks = []
    for s in script_data.get("scenes", []):
        sub = s.get("subtitle")
        if not sub:
            continue
        for w in sub.split():
            w = w.strip()
            if w:
                toks.append(w)
    return toks


def align_to_reference(asr_words, ref_tokens):
    """Aligne le texte EXACT (ref_tokens) sur les timings Whisper (asr_words).

    On repère les mots identiques (ancres) et on emprunte leur timing ; les mots
    intermédiaires (là où Whisper s'est trompé) sont répartis dans l'intervalle
    entre deux ancres. Retour : (words_alignés, nb_ancres) ou (None, 0) si aucune
    ancre (dans ce cas on garde les timings bruts).
    """
    ref_norm = [_norm(t) for t in ref_tokens]
    asr_norm = [_norm(w["w"]) for w in asr_words]

    sm = difflib.SequenceMatcher(a=ref_norm, b=asr_norm, autojunk=False)
    anchor = {}  # index ref -> (start, end)
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == "equal":
            for k in range(i2 - i1):
                anchor[i1 + k] = (asr_words[j1 + k]["start"], asr_words[j1 + k]["end"])

    if not anchor:
        return None, 0

    keys = sorted(anchor)
    n = len(ref_tokens)
    EDGE = 0.30  # durée nominale d'un mot hors couverture Whisper (bords)
    out = []
    for i in range(n):
        if i in anchor:
            st, en = anchor[i]
        else:
            prev = max((k for k in keys if k < i), default=None)
            nxt = min((k for k in keys if k > i), default=None)
            if prev is None:              # avant la 1re ancre
                a_st = anchor[nxt][0]
                st = max(0.0, a_st - EDGE * (nxt - i))
                en = max(0.0, a_st - EDGE * (nxt - i - 1))
            elif nxt is None:             # après la dernière ancre
                p_end = anchor[prev][1]
                st = p_end + EDGE * (i - prev - 1)
                en = p_end + EDGE * (i - prev)
            else:                         # entre deux ancres : répartition régulière
                p_end = anchor[prev][1]
                q_start = anchor[nxt][0]
                seg = max(0.0, q_start - p_end) / (nxt - prev)
                j = i - prev - 1
                st = p_end + seg * j
                en = p_end + seg * (j + 1)
        out.append({"w": ref_tokens[i], "start": round(max(0.0, st), 3), "end": round(max(0.0, en), 3)})

    # garantit des temps non décroissants
    for i in range(1, len(out)):
        if out[i]["start"] < out[i - 1]["start"]:
            out[i]["start"] = out[i - 1]["start"]
        if out[i]["end"] < out[i]["start"]:
            out[i]["end"] = out[i]["start"]

    return out, len(anchor)


def inject_into_script(script_path, words, align):
    with open(script_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    if align:
        ref = extract_ref_tokens(data)
        if not ref:
            eprint("[align] aucun \"subtitle\" dans le script — timings Whisper bruts conservés.")
        else:
            aligned, n_anchor = align_to_reference(words, ref)
            if aligned is None:
                eprint("[align] aucun point d'accroche entre script et audio — timings bruts conservés.")
            else:
                eprint(f"[align] texte du script ({len(ref)} mots) calé sur Whisper "
                       f"via {n_anchor} ancres exactes → ponctuation/chiffres corrigés.")
                words = aligned

    data["words"] = words
    with open(script_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")
    eprint(f"[ok] champ \"words\" ({len(words)} mots) injecté dans {script_path}")


def main():
    p = argparse.ArgumentParser(description="MP3 -> timestamps au mot (faster-whisper).")
    p.add_argument("audio", help="chemin du MP3 (ex: public/Meditation.mp3)")
    p.add_argument("--model", default="small",
                   help="tiny | base | small (défaut) | medium | large-v3")
    p.add_argument("--lang", default="fr", help="langue (défaut: fr)")
    p.add_argument("--script", help="script JSON dans lequel injecter le champ \"words\"")
    p.add_argument("--out", help="écrit { audio, words } dans ce fichier JSON")
    p.add_argument("--no-align", action="store_true",
                   help="ne pas caler le texte du script : garder le texte brut de Whisper")
    args = p.parse_args()

    words = transcribe(args.audio, args.model, args.lang)

    if args.script:
        inject_into_script(args.script, words, align=not args.no_align)
    elif args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            json.dump({"audio": os.path.basename(args.audio), "words": words},
                      f, indent=2, ensure_ascii=False)
            f.write("\n")
        eprint(f"[ok] écrit dans {args.out}")
    else:
        json.dump(words, sys.stdout, indent=2, ensure_ascii=False)
        print()


if __name__ == "__main__":
    main()
