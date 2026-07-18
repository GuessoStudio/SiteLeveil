# Vidéo : BDNF (entraîner son cerveau, pas le motiver)

## Fiche

- **Sujet** : Ton cerveau ne change pas par la volonté, mais par le bon signal. Le BDNF, protéine qui renforce les connexions neuronales, répond à la répétition (bouger, apprendre, dormir), pas à l'intention. Métaphore du jardin mental.
- **Pilier** : Neurosciences
- **Article lié** : /blog/bdnf-augmenter-naturellement-neurosciences
- **Accent principal** : arc bleu (science/BDNF) → vert (jardin mental, croissance, répétition) → rouge bref (le mythe « répond à l'intention ») → violet (recâblage, CTA)
- **Objectif** : vulgariser le BDNF + autorité (Cotman à l'écran) + rétention (CTA « garde cette vidéo ») + trafic article

## Fichiers

- Script JSON : `src/data/scripts/bdnf.json`
- Voix off : `public/BDNF.mp3` (33,4 s, remasterisée -15,4 LUFS)
- Rendu : `out/bdnf.mp4`
- Couverture : `out/bdnf-cover.png` (`src/data/covers/bdnf.cover.json`)
- Commandes : `npm run render:bdnf` · `npm run cover:bdnf` · `npm run words:bdnf`

## Specs

- Durée : 33,4 s · Plans : 12 · Format : 1080×1920 @30fps
- Hook (0–4s) : « Ton cerveau ne change pas parce que tu le veux. »
- CTA final : « Garde cette vidéo si tu veux entraîner ton cerveau, pas seulement le motiver. » (CTA sauvegarde, pas commentaire)
- Crédit E-E-A-T à l'écran : Carl Cotman · UC Irvine (lien exercice → BDNF)

## Statut

- [x] Script écrit (corrigé : Cotman nommé, BDNF défini avant le sigle, phrase « excuses » dé-coachifiée)
- [x] Voix off remasterisée (-15,4 LUFS) + durées calées (débit très continu : 5 respirations, blocs longs subdivisés par clause)
- [x] FX / icônes / crédit calés (arc de couleur narratif)
- [x] Rendu MP4 (voix + ambiance + SFX)
- [x] Couverture générée (« PAS TA VOLONTÉ »)
- [ ] Karaoké frame-perfect : `npm run words:bdnf` en local (Whisper) — actuellement repli proportionnel
- [ ] Publié

## ⚠️ Ce qui manque / à améliorer

- **Karaoké frame-perfect** : `npm run words:bdnf` en local. Important ici car le débit est très continu (peu de silences), donc le repli proportionnel est moins précis que sur les autres vidéos. Le passage Whisper recalera chaque mot.
- **Niveau voix/ambiance** : voix -15,4 LUFS, ambienceVolume 1,1 (comme résilience validée). À confirmer à l'oreille.
- **tape_stop** placé sur le plan « PAS L'INTENTION » (rupture) — silencieux tant que `public/sfx/tape-stop.mp3` n'est pas déposé.

## 🔁 Prochaine itération

- Frame-perfect karaoké + valider mix → publiable.
- Repurposing (carrousel IG, thread X, Short YouTube) depuis l'article BDNF.
