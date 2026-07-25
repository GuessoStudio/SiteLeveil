# Vidéo : Rejet social — nouveau hook en scène concrète (labo 14 jours #7)

## Fiche

- **Sujet** : identique à `rejet-social` (le rejet social active les mêmes
  zones cérébrales qu'une douleur physique) — Naomi Eisenberger, UCLA
- **Pilier** : Psychologie sociale
- **Test** : labo 14 jours, vidéo #7 (`mesure-14-jours.md` §4) — hypothèse
  unique : *le problème est créatif, pas scientifique — une scène concrète
  en ouverture fait passer l'engagement TikTok de 1,6 % à > 5 %*
- **Seuil de réussite** : engagement TikTok ≥ 5 %
- **Fiche originale de référence** : [rejet-social.md](rejet-social.md)

## Fichiers

- Script JSON : `src/data/scripts/rejet-social-2.json`
- Voix off : `public/rejet-social-2.mp3` (uploadée sous `rejet-social-2.wav`, masterisée -16,42 → -14,51 LUFS, 35,74 s)
- Rendu : `out/rejet-social-2.mp4` *(à faire)*
- Couverture : `out/rejet-social-2-cover.png` (props : `src/data/covers/rejet-social-2.cover.json`)
- Commandes : `npm run render:rejet2` · `npm run cover:rejet2` · `npm run words:rejet2`

## Specs

- Durée réelle : 35,74 s (voix off) · Plans : 14 (contre 11 dans l'original)
  · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect`, seuil -25dB/d=0.15),
  hook calé sur les pauses réelles, corps redistribué proportionnellement
  aux durées originales (`rejet-social.json`). Somme des `duration` = 35,74 s (exact).
- Hook (0–6,04s, 3 plans) : « Ton message reste sur « vu ». Depuis trois
  heures. Tu rafraîchis encore. » — scène concrète et vécue (rejet
  numérique du "vu" sans réponse) au lieu de l'affirmation scientifique
  abstraite de l'original (« Le rejet social allume les mêmes zones... »).
- CTA final : identique à l'original — « L'article complet est sur leveilmental.fr. »

## Ce qui a changé vs l'original (et pourquoi)

- **3 plans réécrits en tête** (accroche) — c'est la seule variable testée.
  L'original ouvrait directement sur la démonstration scientifique. Le
  sujet est déjà validé (683 vues YT, 17 % rétention) mais l'engagement
  TikTok est en bas du classement (1,6 %) — l'hypothèse est que le problème
  est l'accroche, pas le contenu. La nouvelle accroche remplace
  l'affirmation par une scène vécue et immédiatement reconnaissable.
- **Recette d'ouverture** : `camera:"zoom-in"` + `transition:"static_noise"`
  + `keywordFx:"glitch"` (pas le trio `punch-head`+`flash_reverse`+`shake`)
  — continuité avec `procrastination-2`, pour ne pas réintroduire la
  variable TikTok suspecte pendant qu'on isole son effet.
- **Tout le reste** (plans 4 à 14 : texte, pose, émotion, accent, FX, icône,
  transition, crédit) est **strictement identique** à `rejet-social.json`
  (scènes 1 à 11), seules les durées ont été recalées sur la nouvelle voix off.

## Statut

- [x] Script écrit et validé (1 seule chercheuse nommée : Naomi Eisenberger · UCLA)
- [x] Voix off reçue + masterisée (-16,42 → -14,51 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect, GUIDE.md §4.2)
- [ ] Karaoké frame-perfect (Whisper local, `npm run words:rejet2`)
- [ ] Rendu MP4 (`npm run render:rejet2`)
- [ ] Couverture générée (`npm run cover:rejet2`)
- [ ] Sous-titres vérifiés
- [ ] Pack réseaux (FB/IG/TikTok/YouTube)
- [ ] Publié
- [ ] Relevés +24h / +72h / +7j dans `mesure-14-jours.md` §6 — vérifier
      spécifiquement l'**engagement TikTok** (seuil ≥5 %)

## ⚠️ Notes

- Fichier original uploadé sous le nom `rejet-social-2.wav` — la version
  masterisée est sauvegardée sous `rejet-social-2.mp3`.

## 🔁 Prochaine itération

- Karaoké, rendu, couverture, pack réseaux, publication. Vérifier en
  priorité l'engagement TikTok (seuil du test). Cadence labo = 4
  vidéos/semaine (`mesure-14-jours.md` §3) — 7ᵉ vidéo test sur 8, dernière
  ligne droite du labo.
