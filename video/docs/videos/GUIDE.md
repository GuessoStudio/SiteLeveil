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

1. Durée exacte du mp3 (parseur frames).
2. Détecter les silences :
   `npx remotion ffmpeg -i public/<Nom>.mp3 -af silencedetect=noise=-38dB:d=0.35 -f null -`
3. Chaque **fin de silence** = début d'une phrase → `duration` = intervalle
   entre deux pauses. Le keyword change ainsi PILE sur une pause.
4. Si tu fournis une **timeline en frames**, convertir en secondes (frames ÷ 30).
5. La somme des `duration` ≈ durée mp3 (un léger dépassement = hold CTA final).

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

- `audioVolume` : gain voix (démarrer ~2,5, ajuster à l'oreille).
- `ambienceVolume` : nappe (0,7 calme → 1,0 présent).
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
