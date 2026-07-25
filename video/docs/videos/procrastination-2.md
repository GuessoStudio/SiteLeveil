# Vidéo : Procrastination — réécriture de l'accroche (labo 14 jours #5)

## Fiche

- **Sujet** : identique à `procrastination` (la procrastination est un problème
  de régulation émotionnelle, pas de gestion du temps) — Tim Pychyl, Université Carleton
- **Pilier** : Psychologie
- **Article lié** : /blog/procrastination-cerveau-agir-neurosciences
- **Test** : labo 14 jours, vidéo #5 (`mesure-14-jours.md` §4) — hypothèse
  unique : *réécrire uniquement les 3 premières secondes fait passer la
  rétention YT de 8,5 % à > 15 %*
- **Seuil de réussite** : rétention YT ≥ 15 %
- **Fiche originale de référence** : [procrastination.md](procrastination.md)

## Fichiers

- Script JSON : `src/data/scripts/procrastination-2.json`
- Voix off : `public/procrastination-2.mp3` (uploadée sous `Procrastination2.wav`, masterisée -18,49 → -14,94 LUFS, 28,92 s)
- Rendu : `out/procrastination-2.mp4`
- Couverture : `out/procrastination-2-cover.png` (props : `src/data/covers/procrastination-2.cover.json`)
- Commandes : `npm run render:procrastination2` · `npm run cover:procrastination2` · `npm run words:procrastination2`

## Specs

- Durée réelle : 28,92 s (voix off) · Plans : 9 (contre 7 dans l'original)
  · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect`, seuil -25dB/d=0.15).
  16 pauses détectées mappées séquentiellement sur la ponctuation du texte
  (2 pauses attendues non détectées : la virgule rapide après « stresse, »
  et le deux-points de « Sa conclusion : », trop courtes/naturelles pour
  franchir le seuil). Somme des `duration` = 28,92 s (exact).
- Hook (0–5,67s) : « Tu repousses encore à demain. Et encore. Ce n'est pas
  de la paresse. » — 3 plans courts (au lieu d'1 plan dans l'original) pour
  varier caméra/FX sur chaque respiration et créer une tension (négation
  sans révéler la vraie cause avant l'intervention de Tim Pychyl).
- CTA final : identique à l'original — « L'article complet est sur leveilmental.fr. »

## Ce qui a changé vs l'original (et pourquoi)

- **3 plans réécrits en tête** (accroche) — c'est la seule variable testée.
  L'original révélait tout en une phrase (« Tu ne procrastines pas par
  paresse. Tu fuis une émotion. ») sans tension. La nouvelle accroche nie
  sans révéler (« ce n'est pas de la paresse » → alors quoi ?), en reprenant
  le procédé de répétition courte qui a le mieux marché à ce jour
  (`bdnf2` : « Encore et encore. » → 32,5 % de rétention).
- **Recette d'ouverture changée** : `camera:"zoom-in"` + `transition:"static_noise"`
  + `keywordFx:"glitch"` au lieu du trio `punch-head`+`flash_reverse`+`shake`
  utilisé sur `bdnf2`/`intestin-cerveau-2`/`dopamine-2`. Décision prise après
  le relevé `dopamine-2` (2026-07-23, `mesure-14-jours.md` §7) : ce trio est
  désormais un pattern confirmé 3/3 de décrochage TikTok à 0:01 — premier
  script à s'en écarter, comme annoncé dans la décision.
- **Tout le reste** (plans 4 à 9 : texte, pose, émotion, accent, FX, icône,
  transition, crédit, split) est **strictement identique** à
  `procrastination.json` (scènes 2 à 7), seules les durées ont été recalées
  sur la nouvelle voix off.

## Statut

- [x] Script écrit et validé (1 seul chercheur nommé : Tim Pychyl · Université Carleton)
- [x] Voix off reçue + masterisée (-18,49 → -14,94 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (Whisper local, `npm run words:procrastination2`)
- [x] Rendu MP4 (`npm run render:procrastination2`)
- [x] Couverture générée (`npm run cover:procrastination2`)
- [ ] Sous-titres vérifiés
- [ ] Pack réseaux (FB/IG/TikTok/YouTube)
- [ ] Publié
- [ ] Relevés +24h / +72h / +7j dans `mesure-14-jours.md` §6

## ⚠️ Notes

- Fichier original uploadé sous le nom `Procrastination2.wav` — la version
  masterisée est sauvegardée sous `procrastination-2.mp3`.
- **Cover** : l'eyebrow ne doit jamais contenir « test » ou un numéro de
  test — c'est un texte public, rendu visible sur la miniature. Erreur
  détectée le 2026-07-24 sur `bdnf2`, `intestin-cerveau-2` et `dopamine-2`
  (eyebrow du type « BDNF · test #2 »), corrigée dans les 3 fichiers
  `*.cover.json`. Voir `mesure-14-jours.md` §7 pour le détail.
- **2026-07-24** : rendu local (karaoké + MP4 + couverture) effectué par
  l'utilisateur, confirmé présent dans `out/`.

## 🔁 Prochaine itération

- Sous-titres, pack réseaux, publication. Comparer la rétention YouTube au
  seuil de 15 % et à l'original (8,5 %) dans `mesure-14-jours.md` §6-7.
  Surveiller aussi si le changement de recipe d'ouverture TikTok influence
  (ou pas) le décrochage à 0:01 — 1ᵉʳ point de données sur la nouvelle
  recette. Cadence labo = 4 vidéos/semaine (§3).
