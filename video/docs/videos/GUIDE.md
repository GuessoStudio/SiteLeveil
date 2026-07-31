# Guide de production — Le Petit Éveillé

Le mode d'emploi complet du studio vidéo. Pour la liste exhaustive des valeurs
(poses, fx, sfx…) voir [`catalogue.md`](catalogue.md). Pour le schéma JSON voir
[`../../README.md`](../../README.md).

---

## 1. Le pipeline en une image

```
Idée (article du blog)
  → Validation scientifique (chercheur + institution nommés)
  → Script JSON (plans + keywords + fx)
  → Voix off (mp3 dans public/)
  → Calage synchro (durées sur les silences / timeline frames)
  → Rendu MP4 (npm run render:<slug>)
  → Couverture (npm run cover:<slug>)
  → Pack réseaux (captions + hashtags + tags + horaires)
  → Karaoké CapCut (tiers bas)
  → Publication
```

Objectif : **un script JSON + un mp3 → une vidéo publiable.**

---

## 2. Créer une vidéo de zéro (checklist)

1. **Script texte** validé scientifiquement (1 chercheur + institution = E-E-A-T).
2. **Créer** `src/data/scripts/<slug>.json` (copier un existant, ex. `meditation.json`).
   - Découper la narration en plans, 1 `keyword` d'impact par plan.
   - `subtitle` = la phrase parlée (sert de source au karaoké, non affichée).
3. **Voix off** : enregistrer, déposer le mp3 dans `public/<Nom>.mp3`, mettre
   `"audio": "<Nom>.mp3"`.
4. **Caler la synchro** (voir §4).
5. **Ajouter** un script dans `package.json` : `"render:<slug>"` et `"cover:<slug>"`.
6. **Rendre** : `npm run render:<slug>` → `out/<slug>.mp4`.
7. **Couverture** : `src/data/covers/<slug>.cover.json` + `npm run cover:<slug>`.
8. **Fiche** : copier `_TEMPLATE.md` → `docs/videos/<slug>.md`, mettre à jour `INDEX.md`.
9. **Pack réseaux** + **karaoké CapCut** + **publier** aux bonnes heures.

---

## 3. Anatomie d'un plan (annoté)

```jsonc
{
  "duration": 3.0,             // secondes (× fps = frames)
  "keyword": "NE REPROGRAMME PAS", // mot géant en haut (la « claque »)
  "keywordFx": "shake",        // glitch | shake (optionnel)
  "subtitle": "La méditation…", // texte parlé → source karaoké (non affiché)
  "pose": "idle",              // posture (collant)
  "emotion": "insight",        // état (collant)
  "mode": "neuro",             // teinte + spirale (collant)
  "accent": "neuro",           // couleur (collant)
  "camera": "cine",            // mouvement caméra (collant)
  "transition": "flash_reverse", // rupture en début de plan (ponctuel)
  "fx": "brain_highlight_head",  // effet continu (collant)
  "icon": "brain",             // icône au-dessus de la tête (ponctuel)
  "timer": true,               // chronomètre néon (ponctuel)
  "burst": "head",             // éclat de particules (ponctuel)
  "position": "center"         // left | center | right (collant)
}
```
> **Collant** = hérite du plan précédent si non redéfini. **Ponctuel** = remis à zéro.
> Un plan minimal = `{ "duration": 4, "keyword": "..." }`.

---

## 4. Caler la synchro voix ↔ plans (déterministe)

### 4.1 Mastering (avant tout calage)

Les prises brutes varient énormément en niveau (vu en pratique : -19 LUFS à -55 LUFS
selon le micro/la voix). Toujours mesurer et normaliser AVANT de détecter les silences.

**Une seule commande fait tout** (mastering + relevé des silences) :

```bash
npm run master <slug>
# si le WAV n'a pas le nom du slug :
npm run master <slug> -- --in "le liking gap.wav"
```

Elle produit `public/<slug>.mp3` masterisé, affiche les segments de parole avec
les coupes conseillées, et écrit `out/<slug>.calibration.json`.

> **ffmpeg est déjà là.** Le script utilise le binaire livré par Remotion
> (`node_modules/@remotion/compositor-*/ffmpeg.exe`), celui que `npx remotion
> ffmpeg` appelle. Build réduit mais complet pour nos besoins : `loudnorm`,
> `silencedetect`, `atrim`, `atempo`, `libmp3lame`. **Rien à installer**, ni
> `winget`, ni `ffmpeg-static`.

Réglages appliqués : **-14 LUFS**, **TP -2 dB** (et non -1,5 : l'encodage MP3
ajoute ~1,7 dB de dépassement inter-échantillon, à -1,5 le fichier final sort
à +0,2 dB et peut saturer), 48 kHz mono 64 kb/s.

<details><summary>Équivalent manuel (si besoin de sortir du script)</summary>

```bash
# 1. Mesurer le niveau brut
npx remotion ffmpeg -i public/<Nom>.mp3 -af loudnorm=print_format=json -f null - 2>&1 | grep -iE "input_i|input_tp|input_thresh"

# 2. Masteriser (2e passe avec les valeurs mesurées injectées)
npx remotion ffmpeg -y -i public/<Nom>.wav -af loudnorm=I=-14:TP=-2:LRA=11:measured_I=...:measured_TP=...:measured_LRA=...:measured_thresh=...:offset=...:linear=true -ar 48000 -ac 1 -c:a libmp3lame -b:a 64k public/<Nom>.mp3
```
</details>

Avec une voix masterisée à -14 LUFS, `audioVolume` reste à **1.0** dans le script
(plus besoin de deviner un gain 2,5–3,7 sur une voix mal nivelée).

### 4.2 Détection de silence adaptative (pas un seuil fixe)

> Fait automatiquement par `npm run master`. Cette section documente la méthode
> sous-jacente. ⚠️ La détection tourne sur le **WAV source**, jamais sur le MP3 :
> l'encodage avec perte lisse les micro-pauses et fait fusionner des segments
> (constaté sur `liking-gap` : la pause de 0,150 s à 8,35 s disparaît du MP3).

Un seuil fixe (`-38dB`) ne marche pas sur toutes les voix. Mesurer le seuil réel
du fichier masterisé via `loudnorm` (`input_thresh`), puis l'utiliser :

```bash
npx remotion ffmpeg -i public/<Nom>.mp3 -af loudnorm=print_format=json -f null - 2>&1 | grep input_thresh
# exemple de sortie : "input_thresh" : "-26.3"

npx remotion ffmpeg -i public/<Nom>.mp3 -af silencedetect=noise=-26dB:d=0.25 -f null - 2>&1 | grep -iE "silence_start|silence_end"
```

(Cette méthode adaptative — mesurer `input_thresh` puis l'injecter dans
`silencedetect` — vient du skill officiel `remotion-dev/skills`, installé dans
`video/.agents/skills/remotion-best-practices/rules/silence-detection.md`.)

### 4.3 Construire les plans

1. Chaque **fin de silence** = début d'une phrase → `duration` = intervalle
   entre deux pauses. Le keyword change ainsi PILE sur une pause.
2. Un texte dense/rapide génère souvent PLUS de pauses que de scènes voulues :
   certaines sont internes à une phrase (après une virgule, un point) — les
   traiter comme des respirations, pas des coupures de plan. Vérifier avec le
   nombre de mots attendu par scène (mots ÷ durée ≈ 3-5 mots/s en français).
3. La somme des `duration` doit égaler la durée exacte du mp3 masterisé.
4. Un premier calage approximatif suffit : le passage Whisper (§10) corrige
   le karaoké au mot près après coup, sans changer les `duration` de plan.

---

## 5. Recettes (patterns qui marchent)

- **Hook rétention** : plan 1 `camera:"punch-head"` ou `cine`, `transition:"flash_reverse"`,
  `burst:"head"`, `keywordFx:"shake"` ou `glitch`.
- **Look grand studio** : `camera:"cine"` sur TOUS les plans (zoom continu),
  `position:"center"` partout (perso calme), les titres flashent au-dessus.
- **Énumération** : 3 plans courts (1,5–2 s) même pose/position, seul le keyword
  + fx + icône changent (ex. `1. …` `2. …` `3. …`).
- **Récit / prise de conscience** : plans longs (3–5 s) pour laisser respirer.
- **Grammaire couleur** : rouge sur le danger/stress, violet sur la solution/éveil.
- **Autorité E-E-A-T** : nommer le chercheur dans la voix + (à venir) lower-third.
- **Battement de tension** : `fx:"cortisol_spike"` ou `empathy_pulse` → son `sub_pulse`.
- **Timer** : `"timer": true` sur un plan « X min » (retire l'icône de ce plan).

---

## 6. Contrôles audio

- `audioVolume` : **1.0** si la voix a été masterisée à -14 LUFS (§4.1, cas standard).
  Ne pas gonfler ce champ pour compenser une voix mal nivelée : masteriser d'abord.
- `ambienceVolume` : nappe (0,7 calme → 1,1 présent — 1,1 est le réglage validé
  sur les dernières vidéos).
- `sfxVolume` : baisser un son juste pour cette vidéo, ex. `{ "impact_heavy": 0.3 }`.

---

## 7. À créer ensuite (feuille de route)

### Tier 1 — FAIT ✅
- [x] **Lower-third « crédit chercheur »** — champ `credit: "Nom · Institution"`.
      Ex. `"credit": "Tang, Hölzel & Posner · Nature Reviews Neuroscience"`.
- [x] **SplitScreen** — champ `split: { "left": "...", "right": "..." }`.
      Ex. `"split": { "left": "Mythe", "right": "Réalité" }`.

### Tier 2 — productivité / autonomie
- [x] **Karaoké intégré** — flag `"karaoke": true` (haut niveau du script). Sous-titres
      depuis les `subtitle`, mot actif en couleur d'accent, dans la bande caption-safe.
      Fin de CapCut.
      **Deux modes de calage** :
      - *Proportionnel* (par défaut) : répartition par longueur de mot sur la durée du
        plan. Les plans étant calés sur les pauses, l'erreur reste dans un groupe de 3-4 mots.
      - *Frame-perfect* (recommandé) : ajoute un champ `words` au script via
        `scripts/transcribe.py` (Whisper local). Voir §10 ci-dessous.
- [x] **Karaoké frame-perfect (Whisper local)** — cf. §10.
- [ ] **`render:all`** : batch de tous les scripts en une commande.
- [ ] **Avatar / photo de profil** (800×800) : composition `Avatar` (tête + spirale).

### Tier 3 — richesse visuelle
- [ ] **Animation cerveau minimaliste** dédiée (contour + zones qui pulsent).
- [ ] **Exploiter les FX inutilisés** via des sujets ciblés (voir §8).
- [ ] **Nouvelles icônes** à la demande (respiration, sommeil, horloge circadienne…).

---

## 8. FX encore inexploités → sujets idéaux

| FX / effet | Sujet de vidéo qui l'exploite |
|---|---|
| `conformity_wave`, `spotlight_pressure` | Psychologie sociale : conformité, pression du regard |
| `ego_depletion` | Volonté / fatigue décisionnelle |
| `trust_bridge` | Confiance, lien social, ocytocine |
| `melatonin_rain` | Sommeil, lumière, rythme circadien |
| `tribal_glow` | Appartenance, biais de groupe |
| `influence_ripple` | Influence sociale, persuasion |
| `habit_chain` | Habitudes, boucles comportementales |
| `hippocampus_replay` | Mémoire, consolidation, sommeil |

---

## 9. Fichiers de référence
- `catalogue.md` : toutes les valeurs disponibles.
- `README.md` : schéma JSON + vocabulaire.
- `horaires-publication.md` : heures de publication par réseau.
- `INDEX.md` : état de chaque vidéo.
- `_TEMPLATE.md` : gabarit de fiche vidéo.

---

## 10. Karaoké frame-perfect — Whisper local (`scripts/transcribe.py`)

Le calage proportionnel (§7) suffit la plupart du temps, mais pour un karaoké **au
frame près**, on récupère les vrais temps de chaque mot avec Whisper en local
(gratuit, pas de compte, pas de clé API).

### Installation (une fois)
```bash
cd video
pip install -r requirements.txt      # faster-whisper (embarque PyAV, tourne sur CPU)
```

### Générer les timings et les injecter dans le script
```bash
python scripts/transcribe.py public/Méditation.mp3 --script src/data/scripts/meditation.json
```
Ça remplit le champ `words` du script (`{ "w", "start", "end" }` en secondes).
Ensuite, rendu normal : `npm run render:meditation`. Le moteur détecte `words` et
surligne chaque mot **sur son vrai temps parlé** (repli automatique sur le
proportionnel si `words` est absent). Le flag `"karaoke": true` reste requis.

**Alignement forcé (par défaut)** : Whisper *transcrit* ce qu'il entend et se
trompe parfois (chiffres, ponctuation, casse — ex. « 18 » au lieu de « 10 »).
Comme le texte EXACT est déjà dans tes `subtitle`, le script garde **ton texte**
et n'emprunte à Whisper **que les timings**. Tu obtiens donc des sous-titres
corrects ET calés au frame. Pour désactiver et garder le texte brut de Whisper :
`--no-align`.

Options : `--model small` (défaut ; `tiny`/`base` plus rapides, `medium`/`large-v3`
plus précis mais plus lents), `--lang fr`, `--out fichier.json` (au lieu d'injecter),
`--no-align` (texte brut Whisper).

### ⚠️ À lancer sur ta machine, pas dans la session Claude web
Le premier run télécharge le modèle depuis **huggingface.co**, **bloqué par la
politique réseau** de l'environnement Claude (erreur 403). En local (Mac/PC), aucun
filtrage : le modèle se télécharge une fois puis reste en cache.
