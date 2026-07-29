# Vidéo : Pensée critique — format quiz (labo 14 jours #8)

## Fiche

- **Sujet** : identique à `pensee-critique` (l'intelligence ne protège pas
  du biais de confirmation) — Dan Kahan, Université de Yale
- **Pilier** : Psychologie / Neurosciences
- **Test** : labo 14 jours, vidéo #8 — dernier test du labo (`mesure-14-jours.md`
  §4) — hypothèse unique : *un mini-quiz augmente les commentaires et la
  complétion*
- **Seuil de réussite** : commentaires > médiane sur ≥ 2 réseaux
- **Fiche originale de référence** : [pensee-critique.md](pensee-critique.md)
  — meilleur performer du catalogue (1 383 vues YT, 22 % rétention, +9 abonnés)

## Fichiers

- Script JSON : `src/data/scripts/pensee-critique-2.json`
- Voix off : `public/pensee-critique-2.mp3` (uploadée sous `pensee-critique-2.wav`, masterisée -18,60 → -15,05 LUFS, 43,44 s)
- Rendu : `out/pensee-critique-2.mp4` *(à faire)*
- Couverture : `out/pensee-critique-2-cover.png` (props : `src/data/covers/pensee-critique-2.cover.json`)
- Commandes : `npm run render:pensee2` · `npm run cover:pensee2` · `npm run words:pensee2`

## Specs

- Durée réelle : 43,44 s (voix off) · Plans : 12 (contre 11 dans l'original)
  · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect`, seuil -25dB/d=0.15),
  durées distribuées proportionnellement au nombre de mots par plan.
  Somme des `duration` = 43,44 s (exact).
- Hook (0–5,16s, 2 plans) : « Petit test : plus tu es intelligent, moins
  tu tombes dans les fake news. Vrai ou faux ? Faux. » — vrai mécanisme de
  quiz (question fermée avec réponse immédiate), au lieu de l'affirmation
  directe de l'original (« Être intelligent ne te protège pas... »).
- CTA final : identique à l'original — « Commente BIAIS pour recevoir la
  méthode. » — déjà un CTA-commentaire, renforcé ici par le quiz en
  ouverture (deux points d'appel au commentaire sur la même vidéo).

## Ce qui a changé vs l'original (et pourquoi)

- **Accroche réécrite en format quiz** (2 plans) — c'est la variable
  testée. Deux versions candidates ont été comparées avant de choisir
  celle-ci : une qui demandait de commenter la réponse avant la révélation
  (rejetée : casse le rythme, révèle la réponse 0,5s après avoir demandé
  de commenter) et une qui retirait la citation de Dan Kahan (rejetée :
  supprime le chercheur nommé, requis pour l'E-E-A-T, et réécrit trop de
  contenu pour un test de format isolé).
- **Reformulations mineures de flux** sur 2 plans (l'explication QI et la
  transition vérité/biais) pour supprimer une redondance introduite par le
  premier jet du hook (« pas la protection du QI » dit deux fois de suite)
  — changement de forme, pas de fond, contenu scientifique identique.
- **Tout le reste** (plans 5 à 12 : biais de confirmation, Dan Kahan, CTA
  final) est **strictement identique** à `pensee-critique.json`.

## Statut

- [x] Script écrit et validé (1 seul chercheur nommé : Dan Kahan · Université de Yale)
- [x] Voix off reçue + masterisée (-18,60 → -15,05 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (Whisper local, `npm run words:pensee2`)
- [x] Rendu MP4 (`npm run render:pensee2`)
- [x] Couverture générée (`npm run cover:pensee2`)
- [x] Pack réseaux (FB/IG/TikTok/YouTube)
- [x] Publié (2026-07-28 — FB 12h30 · YT ~13h30 · TikTok 18h00 · IG 18h31)
- [x] Relevé +19-20h dans `mesure-14-jours.md` §6 (2026-07-29)
- [ ] Relevés +72h / +7j dans `mesure-14-jours.md` §6

## ✅ Verdict — relevé +19-20h (2026-07-29)

**❌ Hypothèse infirmée sans ambiguïté.** **0 commentaire sur les 4
réseaux**, malgré deux appels explicites (quiz en ouverture + « Commente
BIAIS » en clôture). La médiane historique des commentaires étant à 0, le
seuil n'est franchi nulle part.

Le reste de la vidéo est pourtant solide : YouTube 436 vues, **45,4 % de
rétention** (4ᵉ du labo), +3 abonnés ; TikTok 261 vues, engagement 8,4 %,
69 % restants à 0:01 ; Instagram 122 vues, 26,5 % de view rate. **C'est
un échec du mécanisme d'engagement, pas du contenu.**

Signal secondaire notable : **2,5 % du trafic YouTube vient de la
recherche** — le plus haut du catalogue. Le format question semble mieux
matcher des requêtes réelles ; à creuser côté titres SEO.

Ce test clôt le labo 14 jours (8/8). Bilan complet dans
`mesure-14-jours.md` §8.

## ⚠️ Notes

- Fichier original uploadé sous le nom `pensee-critique-2.wav` — la
  version masterisée est sauvegardée sous `pensee-critique-2.mp3`.
- **Dernier test du labo 14 jours** — une fois mesuré, bilan complet des
  8 tests et décision sur `proposition-hook-par-plateforme.md`.

## 🔁 Prochaine itération

- Karaoké, rendu, couverture, pack réseaux, publication. Vérifier en
  priorité les commentaires (seuil du test) sur au moins 2 réseaux.
