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
  "audio": "mon-sujet.mp3",            // optionnel (voix off, public/)
  "ambience": "dark_drone",            // optionnel (nappe globale, clé SFX)
  "defaults": {                         // valeurs de départ
    "pose": "idle", "emotion": "calme", "mode": "eveil",
    "position": "center", "camera": "drift", "fx": "none",
    "accent": "eveil", "burst": false
  },
  "scenes": [
    { "duration": 3, "keyword": "...", "subtitle": "...",
      "pose": "point", "emotion": "insight", "mode": "neuro",
      "position": "left", "camera": "punch-head",
      "fx": "dopamine_molecules", "transition": "flash_reverse",
      "accent": "dopamine" }
    // ... un objet par plan ; seul "duration" est requis
  ]
}
```

**Héritage** : les champs d'état (`pose`, `emotion`, `mode`, `position`,
`camera`, `fx`, `accent`) sont *collants* — non redéfinis, ils gardent la
valeur du plan précédent. Les champs ponctuels (`keyword`, `subtitle`,
`bubbleText`, `burst`, `transition`, `sfx`) se réinitialisent à chaque plan.
Un plan minimal = `{ "duration": 4, "subtitle": "..." }`.

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

### Effets `fx` (continu) — 6 moteurs

- **ZoneGlow** : `brain_highlight_head` `brain_highlight_torso` `brain_transfer`
  `tribal_glow` `gratitude_glow` `identity_shift`
- **EmitField** : `dopamine_molecules` `melatonin_rain` `adrenaline_burst`
  `flow_state` `rumination_loop` `hippocampus_replay`
- **RadialWave** : `cortisol_spike` `empathy_pulse` `influence_ripple`
- **SineWave** : `brainwave_alpha` `brainwave_beta` `brainwave_gamma` `serotonin_flow`
- **NodeGraph** : `synapse_fire` `neuroplasticity` `social_network`
  `habit_chain` `trust_bridge`

### Transitions `transition` (ponctuel)

`flash_reverse` `blackout` `color_shift` `static_noise` `zoom_smash`

### Accents `accent` — palette par pilier (ou hex)

`neuro` `dopamine` `stress` `sommeil` `eveil` `emotions` `social` `growth`

### Son `sfx` / `ambience`

`transition` et `fx` déclenchent un bruitage automatiquement (sync à la frame).
`"sfx": "none"` coupe un plan ; `"sfx": "spark_trigger"` en force un. Voir
`public/sfx/README.txt` : le moteur reste silencieux tant qu'aucun fichier
n'est déposé.

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
