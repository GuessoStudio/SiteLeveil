# Vidéo : Sérotonine (intestin) #2 — test durée <30s (labo 14 jours #2)

> ⚠️ Fiche reconstruite le 2026-07-24 après une perte de données locale
> (bascule involontaire de branche git ayant effacé les fichiers non commités).
> Le contenu ci-dessous est reconstitué à partir de l'historique de
> conversation ; les champs numériques (durées, résultats) sont fiables. Le
> texte narré exact des 8 plans n'a pas pu être retrouvé — voir note.

## Fiche

- **Sujet** : identique à `intestin-cerveau` (axe intestin-cerveau, le mythe
  du microbiote), restructuré et raccourci sous 30 s
- **Pilier** : Neuro / Psycho
- **Test** : labo 14 jours, vidéo #2 (`mesure-14-jours.md` §4) — hypothèse
  unique : *réduire la durée (< 30 s) fait passer la rétention YT au-dessus de 20 %*
- **Seuil de réussite** : rétention YT ≥ 20 %
- **Fiche originale de référence** : [intestin-cerveau.md](intestin-cerveau.md)

## Fichiers

- Script JSON : `src/data/scripts/intestin-cerveau-2.json` *(à reconstruire — voir note ci-dessous)*
- Voix off : `public/intestin-cerveau-2.mp3` (uploadée sous `intestin-cerveau 2.wav`, masterisée, 29,36 s)
- Rendu : `out/intestin-cerveau-2.mp4` (existant, intact)
- Couverture : `out/intestin-cerveau-2-cover.png` (props :
  `src/data/covers/intestin-cerveau-2.cover.json`, eyebrow corrigé le
  2026-07-24 : « Microbiote · test #2 » → « Microbiote »)
- Commandes : `npm run render:intestin2` · `npm run cover:intestin2` · `npm run words:intestin2`

## Specs

- Durée réelle : 29,36 s (voix off) · Plans : 8 (contre 15 dans l'original)
  · Format : 1080×1920 @30fps
- Restructuration 15→8 plans : la durée elle-même est la variable testée
  (contrairement aux autres tests labo qui ne touchent qu'au hook), donc les
  positions ont été redistribuées, pas simplement conservées de l'original.
- CTA final : identique dans l'esprit à l'original (renvoi article).

## Statut

- [x] Script écrit et restructuré
- [x] Voix off reçue + masterisée
- [x] Durées calées sur le mp3 réel (objectif <30s atteint : 29,36s)
- [x] Karaoké frame-perfect
- [x] Rendu MP4
- [x] Couverture générée
- [x] Publié (2026-07-21 — FB 12h30 · YT ~13h30 · IG 18h31 · TikTok ~20h00)
- [x] Relevé +16-20h dans `mesure-14-jours.md` §6 (2026-07-22)
- [ ] Relevés +72h / +7j dans `mesure-14-jours.md` §6

## ✅ Verdict — relevé +16-20h (2026-07-22)

**✅✅ Hypothèse confirmée — meilleur résultat du catalogue à cette date,
tous critères confondus.** Rétention YouTube ~45 % (bien au-dessus du seuil
20 % et de l'original à 17 %), 1 408 vues (médiane 328), +6 abonnés.
Facebook : 20,4 % de rétention, pile le seuil fort. Instagram : ×9 les vues
de `bdnf2`. TikTok : 2ᵉ décrochage consécutif à 0:01 (confirme le pattern
amorcé sur `bdnf2`). Détail complet dans `mesure-14-jours.md` §6-7.

## 🔁 Prochaine itération

- Couper sous 30s semble un levier de rétention encore plus fort que le
  hook émotionnel — à combiner sur les prochains scripts si pertinent.
- Script JSON exact (texte narré, poses/caméras/FX plan par plan) à
  reconstruire si un nouveau rendu est nécessaire — le texte peut être
  retranscrit depuis les sous-titres karaoké de `out/intestin-cerveau-2.mp4`
  déjà publié. Le rendu lui-même reste disponible et n'a pas besoin d'être
  refait dans l'immédiat.
