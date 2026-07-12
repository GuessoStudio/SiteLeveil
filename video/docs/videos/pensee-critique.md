# Vidéo : Pensée critique (biais de confirmation)

## Fiche

- **Sujet** : Être intelligent ne protège pas des fausses informations — ce qui protège, c'est la capacité à s'arrêter avant de juger. Biais de confirmation : le cerveau croit plus vite ce qui va dans son sens, rejette plus vite ce qui le contredit. Kahan : l'intelligence sert souvent à justifier les croyances, pas à les vérifier. Méthode en 3 temps avant de partager/réagir/juger.
- **Pilier** : Psychologie / Neurosciences
- **Accent principal** : arc bleu (mécanisme neuro) → rose (confusion) → orange (confirmation/dopamine) → rouge (rejet/dialogue de sourds) → bleu (science) → violet (pensée critique + méthode + CTA)
- **Objectif** : myth-bust (QI ≠ protection) + autorité (Kahan à l'écran) + méthode actionnable (3 étapes) + engagement (commentaire BIAIS)

## Fichiers

- Script JSON : `src/data/scripts/pensee-critique.json`
- Voix off : `public/pensee-critique.mp3` (32,0 s, remasterisée -16 LUFS)
- Rendu : `out/pensee-critique.mp4`
- Couverture : `out/pensee-critique-cover.png` (`src/data/covers/pensee-critique.cover.json`)
- Commandes : `npm run render:pensee` · `npm run cover:pensee` · `npm run words:pensee`

## Specs

- Durée : 32,0 s · Plans : 11 · Format : 1080×1920 @30fps
- Hook (0–2,7s) : « Être intelligent ne te protège pas des fausses informations. »
- CTA final : « Commente BIAIS pour recevoir la méthode. »
- Crédit E-E-A-T à l'écran : Dan Kahan · Université de Yale

## Retouches appliquées (relecture du script fourni)

1. **Position variée** plan par plan (center/right/left en alternance sur S1-S7) au lieu de tout en `center` — respecte la règle anti-diaporama.
2. **Liste "1. Partager / 2. Réagir / 3. Juger" unifiée** sous l'accent `growth` (vert = pratique dans la grammaire de couleur) au lieu de 3 couleurs différentes (social/emotions/stress) qui brouillaient la lecture "c'est UNE méthode".
3. **Hook en `camera: punch-head`** (au lieu de `cine`) pour matcher la signature visuelle des hooks des 2 dernières vidéos (résilience, bdnf).

Point laissé tel quel (pas une erreur, un choix à juger à l'écran) : les deux `split` consécutifs (biais de confirmation / le refus) sont conservés — diptyque volontaire sur les deux faces du même biais.

## Méthode de calage audio (nouvelle : seuil adaptatif)

Contrairement aux vidéos précédentes (seuil de silence deviné à tâtons), cette fois : mesure de `input_thresh` via `loudnorm` sur la voix masterisée (-26,3 dB), injecté directement dans `silencedetect`. 12 pauses réelles détectées, scènes calées dessus (avec quelques pauses traitées comme internes à une scène plutôt que comme coupure, notamment dans S2/S3/S5 qui ont leur propre ponctuation interne).

## Statut

- [x] Script corrigé (3 retouches appliquées)
- [x] Voix off remasterisée (-16 LUFS) + durées calées sur silences réels (seuil adaptatif)
- [x] FX / icônes / crédit calés
- [x] Rendu MP4 (voix + ambiance)
- [x] Couverture générée (« TON QI NE TE PROTÈGE PAS »)
- [ ] Karaoké frame-perfect : `npm run words:pensee` en local (Whisper) — actuellement repli proportionnel
- [ ] Publié

## ⚠️ Ce qui manque / à améliorer

- **Karaoké frame-perfect** : `npm run words:pensee` en local. Important ici : S3 (21 mots en 3,0s ≈ 7 mots/s) est un calage serré basé sur estimation proportionnelle faute de pause détectée nette à cet endroit — à vérifier après Whisper, possible à redécouper si le débit réel ne correspond pas.
- **tape_stop** non utilisé sur cette vidéo (pas de rupture "mais attention" isolée comme sur intestin-cerveau/résilience/bdnf) — les transitions `zoom_smash`/`color_shift` existantes suffisent au rythme.

## 🔁 Prochaine itération

- Frame-perfect karaoké + valider mix → publiable.
- Repurposing (carrousel IG, thread X, Short YouTube).
