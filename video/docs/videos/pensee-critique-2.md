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
- [ ] Karaoké frame-perfect (Whisper local, `npm run words:pensee2`)
- [ ] Rendu MP4 (`npm run render:pensee2`)
- [ ] Couverture générée (`npm run cover:pensee2`)
- [ ] Sous-titres vérifiés
- [ ] Pack réseaux (FB/IG/TikTok/YouTube)
- [ ] Publié
- [ ] Relevés +24h / +72h / +7j dans `mesure-14-jours.md` §6 — vérifier
      spécifiquement les **commentaires** sur ≥ 2 réseaux (seuil = médiane)

## ⚠️ Notes

- Fichier original uploadé sous le nom `pensee-critique-2.wav` — la
  version masterisée est sauvegardée sous `pensee-critique-2.mp3`.
- **Dernier test du labo 14 jours** — une fois mesuré, bilan complet des
  8 tests et décision sur `proposition-hook-par-plateforme.md`.

## 🔁 Prochaine itération

- Karaoké, rendu, couverture, pack réseaux, publication. Vérifier en
  priorité les commentaires (seuil du test) sur au moins 2 réseaux.
