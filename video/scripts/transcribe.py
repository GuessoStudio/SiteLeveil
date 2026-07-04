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

Chaque mot : { "w": "mot", "start": 1.234, "end": 1.567 }  (secondes, absolues).
"""
import argparse
import json
import os
import sys


def eprint(*a):
    print(*a, file=sys.stderr)


def transcribe(audio_path, model_name, lang):
    try:
        from faster_whisper import WhisperModel
    except ImportError:
        eprint("[erreur] faster-whisper absent. Installe-le :")
        eprint("         pip install -r video/requirements.txt")
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


def inject_into_script(script_path, words):
    with open(script_path, "r", encoding="utf-8") as f:
        data = json.load(f)
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
    args = p.parse_args()

    words = transcribe(args.audio, args.model, args.lang)

    if args.script:
        inject_into_script(args.script, words)
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
