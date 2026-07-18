# Vidéo : Tu ne procrastines pas par paresse

## Fiche

- **Sujet** : La procrastination est un problème de régulation émotionnelle, pas de
  gestion du temps — Pychyl & Sirois (Université Carleton)
- **Pilier** : Psychologie
- **Article lié** : /blog/procrastination-cerveau-agir-neurosciences
- **Accent principal** : neuro (le mécanisme) → emotions/stress (le déclencheur et
  l'illusion) → dopamine (le soulagement immédiat) → eveil (clôture/marque)
- **Objectif** : Top 6 éditorial #4 (roadmap-editoriale.md §5) — autorité E-E-A-T + trafic article
- **Série** : CE QUE TON CERVEAU APPREND

## Fichiers

- Script JSON : `src/data/scripts/procrastination.json`
- Voix off : `public/Procrastination.mp3` (masterisée -18,66 → -15,44 LUFS, 27,09 s)
- Rendu : `out/procrastination.mp4`
- Couverture : `out/procrastination-cover.png` (props : `src/data/covers/procrastination.cover.json`)
- Commandes : `npm run render:procrastination` · `npm run cover:procrastination` · `npm run words:procrastination`

## Specs

- Durée réelle : 27,09 s (voix off) · Plans : 7 · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect` adaptatif, 2 passes — seuil
  standard -26dB puis passe fine -24dB/d=0.15 pour capter les pauses courtes du
  plan 3 en particulier). Somme des `duration` = 27,10 s (écart 0,01 s négligeable).
- Hook (0–3s) : « Tu ne procrastines pas par paresse. Tu fuis une émotion. »
- CTA final : « L'article complet est sur leveilmental.fr. »

## Origine du script

Scènes initialement rédigées par l'utilisateur, revues avant production. Deux
corrections appliquées suite à la revue (accord donné) :
- **`position` variée** plan par plan (était `"center"` sur les 7 plans — violait
  le principe anti-diaporama de `roadmap-editoriale.md` §4.6). Nouvelle séquence :
  center → left → center → right → left → right → center.
- **Mot-clé du plan 1** changé de `"PAS PAR PARESSE"` à `"TU FUIS UNE ÉMOTION"` —
  3ᵉ vidéo sur 4 qui aurait commencé par « PAS », contraire à `roadmap-editoriale.md` §4.5.

Points forts conservés tels quels : le `split` (« GÈRE TON TEMPS » vs « RÉGULE
L'ÉMOTION »), `ego_depletion` sur le plan « L'illusion » (fatigue décisionnelle —
usage exact prévu par `catalogue.md` §8), et l'accent `dopamine` sur le plan
« Soulagement » (grammaire couleur récompense).

## Statut

- [x] Script écrit et revu (1 seul chercheur nommé : Tim Pychyl · Université Carleton)
- [x] Voix off reçue (`Procratination.wav`, nom original avec coquille — conservé
      tel quel en `public/`, sans effet puisque non référencé par le script) +
      masterisée en `Procrastination.mp3` (-18,66 → -15,44 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect adaptatif, GUIDE.md §4.2)
- [ ] Karaoké frame-perfect (Whisper local, `npm run words:procrastination` — à
      lancer en local, pas dans Claude web, voir GUIDE.md §10)
- [ ] Rendu MP4 (`npm run render:procrastination`)
- [ ] Couverture générée (`npm run cover:procrastination`)
- [ ] Sous-titres vérifiés (karaoké natif)
- [ ] Pack réseaux (FB/IG/TikTok/YouTube)
- [ ] Publié

## ⚠️ Notes

- Pic audio à 0,03 dBTP à l'upload (quasi-clipping, même motif que sur les
  vidéos précédentes) — corrigé par le mastering, pic final -1,75 dBTP.
- Plan 6 (« L'illusion », 5,70 s pour 11 mots ≈ 1,9 mot/s) et plan 7 (CTA, 2,59 s
  pour 5 mots ≈ 1,9 mot/s) sont sur un rythme plus lent que la moyenne du script —
  à vérifier à l'écoute du rendu, la détection de silence était plus éparse sur
  cette portion (moins de pauses nettes que sur les vidéos précédentes).
- `sfx` non utilisé dans ce script (pas de `tape_stop` ni de rupture manuelle) —
  cohérent, aucun plan ne joue le rôle de « pivot choc » nécessitant cet effet.

## 🔁 Prochaine itération

- Karaoké, rendu, couverture, pack réseaux, publication — idéalement un mercredi
  (meilleur jour tous réseaux). Respecter la cadence 2-3 vidéos/semaine
  (roadmap-editoriale.md §4 point 7) : 4 scripts sont maintenant prêts d'avance
  (#1 publiée, #2/#3/#4 en attente de rendu) — ne pas tout publier d'un coup.
