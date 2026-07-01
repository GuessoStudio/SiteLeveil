# Vidéo : Le burn-out, ce n'est pas le cortisol

## Fiche

- **Sujet** : Le vrai signal du burn-out n'est pas le cortisol mais un défaut d'habituation du cortex cingulaire antérieur (réseau de régulation saturé)
- **Pilier** : Psychologie / Neurosciences
- **Article lié** : (article burn-out à venir)
- **Accent principal** : arc bleu (science) → rouge (dysfonction) → violet (récupération)
- **Objectif** : autorité E-E-A-T (Regensburg Burnout Project) + trafic article

## Fichiers

- Script JSON : `src/data/scripts/burnout.json`
- Voix off : `public/Burn-out.mp3` (~51,2 s)
- Rendu : `out/burnout.mp4`
- Couverture : `out/burnout-cover.png` (props `src/data/covers/burnout.cover.json`)
- Commandes : `npm run render:burnout` · `npm run cover:burnout`

## Specs

- Durée : ~51,7 s · Plans : 13 · Format : 1080×1920 @30fps
- Hook (0–3s) : « Le burn-out, ce n'est pas juste une histoire d'hormones de stress. »
- CTA final : « Article complet sur leveilmental.fr »

## Statut

- [x] Script écrit (validé : Regensburg Burnout Project, cortex cingulaire)
- [x] Voix off intégrée + durées calées (silencedetect)
- [x] FX / icônes calés (toute la palette)
- [x] Rendu MP4 (voix + ambiance + SFX)
- [x] Couverture générée
- [ ] Sous-titres karaoké CapCut (tiers bas, zone caption-safe)
- [ ] Publié

## ✅ Ce qui marche

- Contraste narratif fort : bleu « le cerveau des témoins s'apaise » vs rouge
  « eux, ça s'emballe » (le cœur scientifique du sujet, en 2 plans).
- Autorité : cortex cingulaire antérieur nommé + Regensburg Burnout Project.
- Myth-bust save-worthy : « pas le cortisol » (contre-intuitif).
- Arc violet sur la récupération (sortir du stress, puis reconstruire).

## ⚠️ Ce qui manque / à améliorer

- **Niveau voix** ×2,5 = point de départ (volumedetect indispo). À valider/ajuster.
- **Synchro mot-clé ↔ phrase** : durées calées sur estimation + silences ; si un
  plan décroche, ajuster sa `duration` et re-rendre.
- **Sous-titres karaoké CapCut** dans le tiers bas.
- Une seule étude → garder le ton hédgé (déjà le cas dans le script).

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Valider synchro + niveau voix, poser le karaoké → publiable.
- Écrire l'article de fond burn-out (cortisol, habituation, cortex cingulaire) et lier.
