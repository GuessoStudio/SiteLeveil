# Le Petit Éveillé — Moteur vidéo (Remotion)

Pipeline : **un script JSON → un MP4 9:16 publiable**, en une commande.
Isolé du site (ce dossier a son propre `package.json`/`node_modules` ; il
n'affecte pas le build Netlify).

## Faire une nouvelle vidéo (≈ workflow cible)

1. **Écrire le script** : copier `src/data/scripts/habitudes-court.json` en
   `src/data/scripts/<sujet>.json` et adapter les plans (voir schéma plus bas).
2. **Voix off** : générer le mp3 sur ElevenLabs (FR), le déposer dans
   `public/<sujet>.mp3`, et mettre `"audio": "<sujet>.mp3"` en haut du JSON.
   Caler la somme des `duration` sur la longueur du mp3.
3. **Prévisualiser** : `npm run studio` (scrub la timeline, zéro scintillement).
4. **Rendre** : `npm run render -- src/Root.tsx Habitudes out/<sujet>.mp4 --props=src/data/scripts/<sujet>.json`
   (ou ajouter un script dédié dans `package.json`).
5. **Finaliser** : importer le MP4 dans CapCut → sous-titres karaoké + musique → publier.

## Schéma JSON

```jsonc
{
  "fps": 30, "width": 1080, "height": 1920,
  "audio": "mon-sujet.mp3",            // optionnel (public/)
  "defaults": {                         // valeurs de départ
    "pose": "idle", "emotion": "calme", "mode": "eveil",
    "position": "center", "camera": "drift", "fx": "none",
    "accent": "#7C6FF7", "burst": false
  },
  "scenes": [
    { "duration": 3, "keyword": "...", "subtitle": "...",
      "pose": "point", "emotion": "insight", "mode": "neuro",
      "position": "left", "camera": "punch-head", "burst": "head",
      "accent": "#6c7bff" }
    // ... un objet par plan ; seul "duration" est requis
  ]
}
```

**Héritage** : les champs d'état (`pose`, `emotion`, `mode`, `position`,
`camera`, `fx`, `accent`) sont *collants* — non redéfinis, ils gardent la
valeur du plan précédent. Les champs ponctuels (`keyword`, `subtitle`,
`bubbleText`, `burst`) se réinitialisent à chaque plan. Un plan minimal =
`{ "duration": 4, "subtitle": "..." }`.

### Vocabulaire

- **pose** : `idle point open think shrug cross wave lean walkA walkB`
- **emotion** : `calme reflexion focus insight confusion surcharge joie peur
  tristesse fierte fatigue sommeil eveil`
- **mode** (teinte + spirale allumée) : `neuro` (tête, bleu) ·
  `emotions` (torse, rose) · `eveil` (les deux, violet)
- **position** : `left center right`
- **camera** : `drift` (Ken Burns) · `zoom-in` · `zoom-out` ·
  `punch-head` (hook) · `static`
- **burst** : `false | true | "head" | "torso"` (éclat d'accent)

## Source du personnage

Le perso vient du lab `public/petit-eveille-poses.html` (source de vérité des
poses). Les données sont snapshot-copiées par :

```
node scripts/extract-character.mjs   # régénère src/data/petit-eveille.ts
```

Les émotions/modes sont dans `src/data/emotions.ts` (transcrits du CSS du lab,
exprimés en frame-driven dans `src/character/anim.ts`).

## Scripts

- `npm run studio` — éditeur Remotion (preview)
- `npm run render` — rend `habitudes.json` → `out/habitudes.mp4` (60 s)
- `npm run render:court` — rend `habitudes-court.json` → `out/habitudes-court.mp4` (30 s)
- `npm run smoke` — render test 1 s (diag Chromium/ffmpeg)
