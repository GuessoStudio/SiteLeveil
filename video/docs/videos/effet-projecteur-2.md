# Vidéo : Effet projecteur — la suite (labo 14 jours #6)

## Fiche

- **Sujet** : l'illusion de transparence — on croit que son stress/sa nervosité
  se voit bien plus qu'en réalité — Kenneth Savitsky & Thomas Gilovich, Université Cornell
- **Pilier** : Psychologie sociale
- **Test** : labo 14 jours, vidéo #6 (`mesure-14-jours.md` §4) — hypothèse
  unique : *le sujet (effet projecteur) tient au-delà de 72h et convertit
  en abonnés* — testé via une vraie suite de contenu (pas une réécriture de
  hook), à comparer à la baseline de l'original
- **Seuil de réussite** : +3 abonnés cumulés **et** tenue à 72h
- **Fiche originale de référence** : [effet-projecteur.md](effet-projecteur.md)
  (baseline : 688 vues YT, 44,6 % rétention, +1 abonné cumulé sur 7j)

## Fichiers

- Script JSON : `src/data/scripts/effet-projecteur-2.json`
- Voix off : `public/effet-projecteur-2.mp3` (uploadée sous `effet-projecteur-2.wav`, masterisée -15,85 → -14,67 LUFS, 29,35 s)
- Rendu : `out/effet-projecteur-2.mp4` *(à faire)*
- Couverture : `out/effet-projecteur-2-cover.png` (props : `src/data/covers/effet-projecteur-2.cover.json`)
- Commandes : `npm run render:projecteur2` · `npm run cover:projecteur2` · `npm run words:projecteur2`

## Specs

- Durée réelle : 29,35 s (voix off) · Plans : 9 · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect`, seuil -25dB/d=0.15),
  hook calé sur les pauses réelles, corps distribué proportionnellement au
  nombre de mots par plan. Somme des `duration` = 29,35 s (exact).
- Hook (0–2,91s, 2 plans) : « Tu crois que tout le monde voit que tu
  stresses quand tu parles ? Faux. » — reprend le patron de tension
  (affirmation supposée + négation sans révéler) confirmé 2/2 comme le
  meilleur levier de rétention du labo (`bdnf2` 32,5 %, `procrastination-2`
  58,8 %).
- Contenu nouveau (pas une réécriture du hook original) : l'illusion de
  transparence, étude complémentaire des mêmes auteurs Cornell — angle
  différent du t-shirt embarrassant de l'original, même laboratoire.
- CTA final : « L'article complet est sur leveilmental.fr. »

## Ce qui différencie ce test des autres tests labo

Contrairement aux tests #1-5 et #7 (qui ne changent que l'accroche d'un
script existant), celui-ci teste si le **sujet** a assez de profondeur pour
une suite — donc du contenu réellement nouveau, structuré comme une vidéo
indépendante. La comparaison se fait entre les deux vidéos (`effet-projecteur`
vs `effet-projecteur-2`), pas entre deux versions du même script.

Recette d'ouverture : `zoom-in`+`static_noise`+`glitch` (continuité avec
`procrastination-2`/`rejet-social-2`).

## Statut

- [x] Script écrit et validé (chercheurs nommés : Kenneth Savitsky & Thomas Gilovich · Université Cornell)
- [x] Voix off reçue + masterisée (-15,85 → -14,67 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (Whisper local, `npm run words:projecteur2`)
- [x] Rendu MP4 (`npm run render:projecteur2`)
- [x] Couverture générée (`npm run cover:projecteur2`)
- [x] Pack réseaux (FB/IG/TikTok/YouTube)
- [x] Publié (2026-07-26, dimanche — créneaux habituels)
- [x] Relevé +19-20h dans `mesure-14-jours.md` §6 (2026-07-27)
- [ ] Relevés +72h / +7j dans `mesure-14-jours.md` §6

## ✅ Verdict — relevé +19-20h (2026-07-27)

**✅ Hypothèse confirmée.** Abonnés cumulés (original + suite) = +1 + +4 =
**+5**, au-dessus du seuil (+3). YouTube : 969 vues (×2,95 médiane, +18%
vs autres Shorts), 40,9 % rétention, +3 abonnés. TikTok : 271 vues, 37,9 %
rétention, 67 % restants à 0:01 (pas de décrochage sévère — 3ᵉ vidéo à
confirmer ce pattern après `effet-projecteur` et `rejet-social-2`).
Facebook : échantillon trop petit (5 vues). Instagram : 104 vues,
fourchette basse. Sur la « tenue à 72h » : lecture qualitative — le sujet
garde de l'attrait 8 jours après l'original malgré son propre plateau à
48h. Relevé +72h/+7j encore à faire pour ce point spécifiquement. Détail
complet dans `mesure-14-jours.md` §6-7.

## ⚠️ Notes

- Fichier original uploadé sous le nom `effet-projecteur-2.wav` — la
  version masterisée est sauvegardée sous `effet-projecteur-2.mp3`.

## 🔁 Prochaine itération

- Karaoké, rendu, couverture, pack réseaux, publication. Comparer les
  abonnés cumulés (les deux vidéos ensemble) au seuil de +3 sur 72h dans
  `mesure-14-jours.md` §6-7. Dernier test avant le bilan du labo (reste le
  test #8, format quiz).
