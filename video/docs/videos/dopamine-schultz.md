# Vidéo : La dopamine n'est pas l'hormone du plaisir

## Fiche

- **Sujet** : La dopamine ne signale pas la récompense mais l'anticipation de la
  récompense (erreur de prédiction de récompense) — Schultz, Dayan & Montague, 1997, *Science*
- **Pilier** : Neurosciences
- **Article lié** : /blog/neuro-dopamine-routine
- **Accent principal** : arc bleu neuro (le mythe + l'expérience) → violet eveil (la révélation) → orange dopamine (les déclencheurs du quotidien, grammaire couleur « récompense »)
- **Objectif** : Top 6 éditorial #3 (roadmap-editoriale.md §5) — autorité E-E-A-T + trafic article
- **Série** : LE MYTHE

## Fichiers

- Script JSON : `src/data/scripts/dopamine-schultz.json`
- Voix off : `public/dopamine, Wolfram Schultz.mp3` (masterisée -19,14 → -16,44 LUFS, 35,00 s)
- Rendu : `out/dopamine-schultz.mp4`
- Couverture : `out/dopamine-schultz-cover.png` (props : `src/data/covers/dopamine-schultz.cover.json`)
- Commandes : `npm run render:dopamine` · `npm run cover:dopamine` · `npm run words:dopamine`

## Specs

- Durée réelle : 35,00 s (voix off) · Plans : 11 · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect` adaptatif, seuil -27dB) pour les
  8 premiers plans (avec 2 segments partagés entre plans consécutifs répartis au
  prorata du nombre de mots : plans 1-2, et l'intérieur du plan 4) ; plans 9-11 sur
  le temps restant réparti au prorata du nombre de mots. Somme des `duration` =
  35,00 s (exact).
- Hook (0–3s) : « La dopamine n'est pas l'hormone du plaisir. »
- CTA final : « L'article complet est sur leveilmental.fr. »
- Fichier audio original avait un léger dépassement de pic (0,13 dBTP, quasi-clipping)
  — corrigé par le mastering (TP=-1.5 cible), pic final -1,83 dBTP.

## Statut

- [x] Script écrit (1 seul chercheur nommé : Wolfram Schultz · Université de Cambridge)
- [x] Voix off reçue + masterisée (-19,14 → -16,44 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect adaptatif, GUIDE.md §4.2)
- [ ] Karaoké frame-perfect (Whisper local, `npm run words:dopamine` — à lancer en
      local, pas dans Claude web, voir GUIDE.md §10)
- [ ] Rendu MP4 (`npm run render:dopamine`)
- [ ] Couverture générée (`npm run cover:dopamine`)
- [ ] Sous-titres vérifiés (karaoké natif)
- [ ] Pack réseaux (FB/IG/TikTok/YouTube)
- [ ] Publié

## ⚠️ Notes

- `sfx: "tape_stop"` utilisé sur le plan du twist (« Mais avant ») pour cohérence
  narrative, mais **sans effet pour l'instant** : `tape_stop` reste `null` dans
  `sfxRegistry.ts` (seul SFX encore manquant, voir `video/ROADMAP.md`).
- Nom de fichier avec virgule et espace (`dopamine, Wolfram Schultz.mp3`) : conservé
  tel quel, entre guillemets dans les commandes npm. Fonctionne, mais un nom sans
  espace/virgule (convention `Nom-Sujet.mp3`) reste préférable pour les prochains uploads.
- Accent `dopamine` (orange) utilisé sur les plans 8-9 pour les déclencheurs du
  quotidien (like, notification, mail) — cohérent avec la grammaire couleur du
  moteur (orange = récompense), pas une entorse à la palette LE MYTHE (bleu→violet).

## 🔁 Prochaine itération

- Karaoké, rendu, couverture, pack réseaux, publication — idéalement un mercredi
  (meilleur jour tous réseaux). Respecter la cadence 2-3 vidéos/semaine
  (roadmap-editoriale.md §4 point 7).
