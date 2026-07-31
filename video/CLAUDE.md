# Le Petit Éveillé — moteur vidéo (Remotion)

Vidéos verticales 1080×1920 pour TikTok / Reels / Shorts / Facebook.
Auteur : Guesso. Solo. Cadence visée : 4 à 7 vidéos par semaine.

## Toutes les commandes passent par un runner unique

```bash
npm run v                     # aide
npm run v list                # toutes les vidéos, plans, durées, état
npm run v master     <slug>   # mastering -14 LUFS + relevé des silences
npm run v transcribe <slug>   # mots datés Whisper (AVANT calibrate)
npm run v calibrate  <slug>   # durées des plans → out/<slug>.draft.json
npm run v check      <slug>   # validation contre les registres du moteur
npm run v words      <slug>   # karaoké frame-perfect
npm run v render     <slug>   # MP4
npm run v cover      <slug>   # miniature
npm run v all        <slug>   # check + words + render + cover
```

**Ne plus ajouter d'entrées `render:x` / `cover:x` / `words:x` dans
`package.json`.** Les 81 existantes sont historiques et restent valables.

⚠️ `words`, `render` et `cover` doivent tourner **sur la machine de
l'utilisateur** (Whisper local, Chromium). Pas dans la session.

## Ordre de production d'une vidéo

1. Écrire le script (voir règles ci-dessous) → validation par l'utilisateur
2. L'utilisateur enregistre et dépose le WAV dans `public/`
3. `npm run v master <slug>` puis `v transcribe` puis `v calibrate`
4. Reprendre `out/<slug>.draft.json`, ajouter la direction artistique
   (poses, couleurs, FX, mots-clés, icônes), écrire
   `src/data/scripts/<slug>.json` + `src/data/covers/<slug>.cover.json`
5. Fiche dans `docs/videos/<slug>.md`, ligne dans `INDEX.md`
6. `npm run v all <slug>` côté utilisateur
7. Pack réseaux (4 plateformes), publication, puis relevés à +20 h

## Règles non négociables (issues du labo 14 jours, terminé 2026-07-29)

- **Aucun CTA d'engagement** (« commente MOT », « partage ») : testé 2 fois,
  zéro engagement généré. Le validateur le refuse.
- **≈ 85-90 mots** pour tenir sous 30 s. Le débit mesuré varie de 184 à
  201 mots/min selon la prise — ne pas viser 100 mots.
- **Un seul chercheur nommé par vidéo, avec son institution** (champ
  `credit`). Les 21 vidéos du catalogue le font sans exception.
- **Tension narrative en ouverture** : le hook pose le problème, jamais la
  réponse.
- **Anti-diaporama** : varier `position` et `camera` d'un plan à l'autre.
- **Jamais « test » dans l'`eyebrow` d'une couverture** — c'est public.
- Ton professeur scientifique, jamais coach motivationnel.

## Pièges déjà rencontrés

- `mode` n'accepte que **neuro | emotions | eveil**. Les autres couleurs
  (`social`, `stress`, `growth`…) sont des **accents**, pas des modes. Une
  valeur invalide ne casse pas au bundle, elle casse en plein rendu après
  plusieurs minutes. → toujours `npm run v check <slug>` avant de rendre.
- ffmpeg **est déjà là**, livré par Remotion
  (`node_modules/@remotion/compositor-*/ffmpeg.exe`). Ne jamais demander
  d'installer quoi que ce soit.
- La détection des silences se fait sur le **WAV source**, jamais sur le MP3 :
  l'encodage fait disparaître des micro-pauses.
- Whisper cale les sous-titres au temps absolu : des durées de plans fausses
  ne décalent pas le texte, elles décalent **l'image**.

## Où lire quoi

| Besoin | Fichier |
|---|---|
| Pipeline A→Z, mastering, calage | `docs/videos/GUIDE.md` |
| Vocabulaire du moteur (poses, FX, SFX, icônes) | `docs/videos/catalogue.md` |
| Toutes les vidéos, dates, perfs | `docs/videos/INDEX.md` |
| Résultats mesurés, ce qui marche | `docs/videos/mesure-14-jours.md` §8 |
| Rotation des familles de hook | `docs/videos/hooks-protocole.md` |
| Sujets à venir | `docs/videos/roadmap-editoriale.md` |
| Textes parlés de toutes les vidéos | `docs/videos/SCRIPTS.md` |
| Horaires de publication par réseau | `docs/videos/horaires-publication.md` |
| Décisions en attente | `docs/videos/proposition-hook-par-plateforme.md` |

Le site web (`leveilmental.fr`, React/Vite) est un projet **séparé**, à la
racine du dépôt. Ses règles sont dans le `CLAUDE.md` racine et
`.claude/rules/`. Ne pas les mélanger.
