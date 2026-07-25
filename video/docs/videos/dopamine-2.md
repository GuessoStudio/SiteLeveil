# Vidéo : Dopamine #2 — hook chiffre/corps (labo 14 jours #3)

## Fiche

- **Sujet** : identique à `dopamine-schultz` (la dopamine signale l'anticipation
  de la récompense, pas le plaisir lui-même) — Wolfram Schultz, Université de Cambridge
- **Pilier** : Neurosciences
- **Article lié** : /blog/neuro-dopamine-routine
- **Test** : labo 14 jours, vidéo #3 (`mesure-14-jours.md` §4) — hypothèse
  unique : *un hook chiffre/corps dès la 1ʳᵉ seconde débloque la distribution YouTube*
  (la rétention de l'original est déjà bonne à 27 %, on ne touche qu'à la distribution)
- **Seuil de réussite** : vues YouTube ≥ 600
- **Fiche originale de référence** : [dopamine-schultz.md](dopamine-schultz.md)

## Fichiers

- Script JSON : `src/data/scripts/dopamine-2.json`
- Voix off : `public/dopamine-2.mp3` (uploadée sous `DOPAMINE #2.wav`, masterisée -20,61 → -15,55 LUFS, 37,09 s)
- Rendu : `out/dopamine-2.mp4`
- Couverture : `out/dopamine-2-cover.png` (props : `src/data/covers/dopamine-2.cover.json`)
- Commandes : `npm run render:dopamine2` · `npm run cover:dopamine2` · `npm run words:dopamine2`

## Specs

- Durée réelle : 37,09 s (voix off) · Plans : 13 (contre 11 dans l'original)
  · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect`, seuil -26dB/d=0.2, avec
  répartition proportionnelle sur le segment L3/L4 à pause ambiguë). Somme
  des `duration` = 37,10 s (écart 0,01 s négligeable).
- Hook (0–3s) : « Ton cerveau libère de la dopamine en 100 millisecondes. »
  (chiffre réel de la latence de décharge phasique de dopamine dans les
  études de type Schultz — pas un chiffre importé d'ailleurs, ancré dans
  l'étude déjà citée plus loin dans le script)
- CTA final : identique à l'original — « L'article complet est sur leveilmental.fr. »

## Ce qui a changé vs l'original (et pourquoi)

- **2 plans ajoutés en tête** (hook chiffre/corps + phrase de bascule) —
  c'est la variable testée.
- **Un mot changé dans le reste du script** : « l'hormone du manque » →
  « l'hormone de l'anticipation du plaisir ». Sort techniquement du
  "tout le reste constant", mais c'est une correction de justesse
  scientifique (pas stylistique) : le script raconte l'expérience de Schultz
  où la dopamine monte *avant* la récompense (anticipation), et se termine
  sur « c'est l'attente d'une récompense » — « manque » empruntait au cadre
  de Berridge (wanting/liking, cité en roadmap §9) sans le nommer, alors que
  « anticipation » colle à l'étude réellement racontée. Décision prise avec
  l'utilisateur avant enregistrement de la voix off.
- **Tout le reste** (plans 5 à 13 : texte, pose, émotion, accent, FX, icône,
  transition, crédit) est **strictement identique** à `dopamine-schultz.json`.

## Statut

- [x] Script écrit et validé (1 seul chercheur nommé : Wolfram Schultz · Université de Cambridge)
- [x] Voix off reçue + masterisée (-20,61 → -15,55 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (Whisper local, `npm run words:dopamine2`)
- [x] Rendu MP4 (`npm run render:dopamine2`)
- [x] Couverture générée (`npm run cover:dopamine2`)
- [x] Sous-titres vérifiés
- [x] Pack réseaux (FB/IG/TikTok/YouTube)
- [x] Publié (2026-07-22 — FB 12h32 · YT ~13h30 · IG 18h29 · TikTok ~20h00)
- [x] Relevé +18-19h dans `mesure-14-jours.md` §6 (2026-07-23 09h00)
- [ ] Relevés +72h / +7j dans `mesure-14-jours.md` §6

## ⚠️ Notes

- Fichier original uploadé sous le nom `DOPAMINE #2.wav` (le `#` peut poser
  problème dans certains contextes shell) — la version masterisée est
  sauvegardée sous `dopamine-2.mp3`, nom sans caractère spécial.
- **Point de vigilance TikTok** (`mesure-14-jours.md` §7) : décrochage à
  0:01 confirmé pour la **3ᵉ fois consécutive** (`bdnf2`,
  `intestin-cerveau-2`, `dopamine-2`), toujours avec le même trio
  d'ouverture `punch-head`+`flash_reverse`+`shake`. Pattern désormais établi,
  pas seulement surveillé.

## ✅ Verdict — relevé +18-19h (2026-07-23)

**❌ Hypothèse infirmée sur le critère testé.** Vues YouTube = 269 (seuil
600, médiane du sujet 328) — la distribution ne s'est pas débloquée. Nuance :
rétention YT = 37,8 %, très au-dessus du seuil fort (20 %) — le hook
chiffre/corps reste un bon outil de rétention, mais pas un levier de
distribution. TikTok : engagement 9,2 % (> baseline 6,6 %) et +1 abonné,
mais 3ᵉ décrochage consécutif à 0:01. FB/IG : rétention en retrait par
rapport à `intestin-cerveau-2`, plus proche de `bdnf2`. Détail complet dans
`mesure-14-jours.md` §6-7 (entrée 2026-07-23).

## 🔁 Prochaine itération

- Relevés +72h / +7j à faire dans `mesure-14-jours.md` §6.
- Ne plus utiliser le hook chiffre/corps comme stratégie de *distribution* —
  garder comme outil de *rétention* uniquement.
