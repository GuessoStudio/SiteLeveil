# Vidéo : BDNF #2 — test hook émotionnel (labo 14 jours #1)

> ⚠️ Fiche reconstruite le 2026-07-24 après une perte de données locale
> (bascule involontaire de branche git ayant effacé les fichiers non commités).
> Le contenu ci-dessous est reconstitué à partir de l'historique de
> conversation ; les champs numériques (durées, résultats) sont fiables, les
> détails de formulation des notes de production sont reconstitués de mémoire.

## Fiche

- **Sujet** : identique à `bdnf` (le BDNF se renforce par la répétition, pas
  par la volonté) — Carl Cotman, Université de Californie à Irvine
- **Pilier** : Neurosciences
- **Test** : labo 14 jours, vidéo #1 (`mesure-14-jours.md` §4) — hypothèse
  unique : *un hook plus émotionnel élargit la portée sans perdre la rétention*
- **Seuil de réussite** : rétention YT ≥ 18 % **et** vues > médiane (328)
- **Fiche originale de référence** : [bdnf.md](bdnf.md)

## Fichiers

- Script JSON : `src/data/scripts/bdnf2.json` *(à reconstruire — voir note ci-dessous)*
- Voix off : `public/BDNF2.mp3` (uploadée sous `BDNF2.wav`, masterisée, 39,09 s)
- Rendu : `out/bdnf2.mp4` (existant, intact)
- Couverture : `out/bdnf2-cover.png` (props : `src/data/covers/bdnf2.cover.json`,
  eyebrow corrigé le 2026-07-24 : « BDNF · test #2 » → « BDNF »)
- Commandes : `npm run render:bdnf2` · `npm run cover:bdnf2` · `npm run words:bdnf2`

## Specs

- Durée réelle : 39,09 s (voix off) · Plans : 13 · Format : 1080×1920 @30fps
- Hook (nouveau, 2 plans) : « Tu as essayé de changer. Encore et encore. Et
  rien n'a tenu. » / « Ce n'est pas parce que tu ne le veux pas assez. »
- Corps (plans 3-13) : strictement identique à `bdnf.json` (scènes 3 à 13),
  seul le hook diffère de l'original. Texte complet dans [SCRIPTS.md §9](SCRIPTS.md).
- CTA final : identique à l'original.

## Statut

- [x] Script écrit (hook seul modifié vs `bdnf`)
- [x] Voix off reçue + masterisée
- [x] Durées calées sur le mp3 réel
- [x] Karaoké frame-perfect
- [x] Rendu MP4
- [x] Couverture générée
- [x] Publié (2026-07-20 — FB 12h30 · YT ~13h30 · IG 18h31 · TikTok ~20h00)
- [x] Relevé +15-20h dans `mesure-14-jours.md` §6 (2026-07-21)
- [ ] Relevés +72h / +7j dans `mesure-14-jours.md` §6

## ✅ Verdict — relevé +15-20h (2026-07-21)

**✅ Hypothèse confirmée.** Rétention YouTube 32,5 % (près du double du
seuil, et de l'original `bdnf` à 18 %) et vues 346 > médiane 328. Le hook
émotionnel (vulnérabilité/frustration avant le mécanisme) est le plus gros
écart de rétention observé sur le catalogue à cette date. TikTok : premier
décrochage repéré à 0:01 (deviendra un pattern confirmé sur les vidéos
suivantes). Facebook : signal encourageant (218 vues vs baseline 2-10).
Instagram : canal structurellement faible, sans changement. Détail complet
dans `mesure-14-jours.md` §6-7.

## 🔁 Prochaine itération

- Le hook émotionnel (reproduire sur les prochains scripts labo et roadmap).
- Script JSON exact (poses/caméras/FX plan par plan) à reconstruire si un
  nouveau rendu est nécessaire — le rendu `out/bdnf2.mp4` déjà publié reste
  disponible et n'a pas besoin d'être refait dans l'immédiat.
