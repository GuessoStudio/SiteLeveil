# Vidéo : Effet de vérité illusoire — mini-test en ouverture (labo 14 jours #4)

## Fiche

- **Sujet** : la répétition d'une information augmente la confiance qu'elle
  est vraie, même fausse et même chez ceux qui connaissent la bonne réponse
  — Lisa Fazio, Université Vanderbilt
- **Pilier** : Psychologie
- **Article lié** : *(aucun article dédié — prolonge l'angle `pensee-critique`)*
- **Test** : labo 14 jours, vidéo #4 (`mesure-14-jours.md` §4) — hypothèse
  unique : *commencer par un mini-test augmente rétention et partages*
- **Seuil de réussite** : partages TikTok ≥ 2 **et** rétention ≥ 20 %
- **Série** : LE PIÈGE

## Fichiers

- Script JSON : `src/data/scripts/verite-illusoire.json`
- Voix off : `public/verite-illusoire.mp3` (uploadée sous `effet de vérité illusoire.wav`, masterisée -14,94 → -15,45 LUFS, 35,37 s)
- Rendu : `out/verite-illusoire.mp4`
- Couverture : `out/verite-illusoire-cover.png` (props : `src/data/covers/verite-illusoire.cover.json`)
- Commandes : `npm run render:verite` · `npm run cover:verite` · `npm run words:verite`

## Specs

- Durée réelle : 35,37 s (voix off) · Plans : 12 · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect`, seuil -25dB/d=0.2, avec
  répartition proportionnelle sur les segments L1/L2 à pause ambiguë). Somme
  des `duration` = 35,38 s (écart 0,01 s négligeable).
- Hook (0–4s) : mini-test « Vrai ou faux : le mur de Chine se voit depuis
  l'espace ? » — nouveau format, pas de chiffre/corps classique, teste la
  formule "Mistake Warning"/quiz plutôt que "Contrarian Claim"
- CTA final : « Partage cette vidéo à quelqu'un qui répète encore ce mythe. »
  — vise directement la métrique testée (partages)

## Statut

- [x] Script écrit (1 seule chercheuse nommée : Lisa Fazio · Université Vanderbilt)
- [x] Voix off reçue + masterisée (-14,94 → -15,45 LUFS, GUIDE.md §4.1 — pic
      d'origine légèrement écrêté à 0,23 dBTP, corrigé par le mastering)
- [x] Durées calées sur le mp3 réel (silencedetect, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (Whisper local, `npm run words:verite`)
- [x] Rendu MP4 (`npm run render:verite`)
- [x] Couverture générée (`npm run cover:verite`)
- [x] Sous-titres vérifiés
- [x] Pack réseaux (FB/IG/TikTok/YouTube)
- [x] Publié (2026-07-23 — FB 13h31 · YT ~13h30 · IG 18h31 · TikTok ~20h00)
- [x] Relevé +18h dans `mesure-14-jours.md` §6 (2026-07-24)
- [ ] Relevés +72h / +7j dans `mesure-14-jours.md` §6

## ⚠️ Notes

- **Point de vigilance TikTok** (`mesure-14-jours.md` §7) : les 2 dernières
  vidéos test ont montré un décrochage à 0:01 sur TikTok, avec le même
  ouverture `punch-head` + `flash_reverse` + `keywordFx:"shake"`. Cette vidéo
  reprend le même trio d'ouverture — si le décrochage se reproduit une 3ᵉ
  fois, ce sera un signal fort qu'il faut retravailler le recipe hook pour
  TikTok spécifiquement (voir la piste notée dans `mesure-14-jours.md` §7).
- Fait de nouveauté : premier script du catalogue à utiliser un format
  question/mini-test en ouverture plutôt qu'une affirmation contre-intuitive.

## ✅ Verdict — relevé +18h (2026-07-24)

**❌ Hypothèse infirmée sur le critère strict (TikTok).** Rétention TikTok
23,75 % (seuil 20 % ✅) mais **0 partage TikTok** (seuil 2 ❌) malgré le CTA
dédié. Nuance importante : **1 200 vues YouTube** (2ᵉ meilleur score du
labo, ×3,7 la médiane) et YouTube signale explicitement plus de partages
que d'habitude sur ce Short — le mécanisme testé (mini-test → partage)
semble avoir fonctionné, mais sur YouTube plutôt que TikTok. TikTok : 4ᵉ
décrochage consécutif à 0:01 (pattern maintenant confirmé 4/4). Instagram :
40 vues, canal structurellement faible confirmé. Détail complet dans
`mesure-14-jours.md` §6-7 (entrée 2026-07-24).

## 🔁 Prochaine itération

- Relevés +72h / +7j à faire dans `mesure-14-jours.md` §6.
- Le format mini-test/question en ouverture est à retenir pour le test #8
  du labo (format quiz), vu son excellent résultat YouTube.
- Le pattern TikTok 0:01 étant confirmé 4/4, `procrastination-2` (test #5)
  utilise déjà une nouvelle recette d'ouverture — premier point de données
  à surveiller à sa publication.
