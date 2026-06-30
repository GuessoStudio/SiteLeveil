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
  "audioVolume": 2,                    // optionnel (gain voix, défaut 1 ; >1 amplifie)
  "ambience": "dark_drone",            // optionnel (nappe globale, clé SFX)
  "ambienceVolume": 0.7,               // optionnel (volume ambiance ce script ; défaut = SFX_VOLUME)
  "sfxVolume": { "impact_heavy": 0.3 }, // optionnel (override volume d'un SFX, ce script)
  "guides": false,                     // optionnel (repère caption-safe studio, cf. plus bas)
  "defaults": {                         // valeurs de départ
    "pose": "idle", "emotion": "calme", "mode": "eveil",
    "position": "center", "camera": "drift", "fx": "none",
    "accent": "eveil", "burst": false
  },
  "scenes": [
    { "duration": 3, "keyword": "...", "keywordFx": "glitch", "subtitle": "...",
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
valeur du plan précédent. Les champs ponctuels (`keyword`, `keywordFx`,
`subtitle`, `bubbleText`, `burst`, `transition`, `sfx`) se réinitialisent à
chaque plan. Un plan minimal = `{ "duration": 4, "keyword": "..." }`.

⚠️ `subtitle` n'est **plus affiché** à l'écran : il sert de **source de texte**
pour le karaoké CapCut (le mot-clé géant reste, lui, à l'écran). Voir la zone
caption-safe plus bas.

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
- **keywordFx** : `glitch` (jitter + aberration chromatique, ex. « BUG ») ·
  `shake` (tremblement, stress/danger). Par défaut le mot-clé fait juste un pop +
  s'allume dans sa couleur d'accent puis vire au blanc.

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

### Niveaux audio

- `audioVolume` (top-level) : gain de la voix off. Défaut `1`. `>1` amplifie
  (ex. `3.7` si la voix est faible sous l'ambiance). Attention à la saturation.
- `sfxVolume` (top-level) : override **local** du volume d'un SFX, juste pour ce
  script — ex. `{ "spark_trigger": 0.28 }`. Ne touche pas les autres vidéos.
  Pour baisser un SFX **partout**, éditer `src/data/sfxRegistry.ts` (`SFX_VOLUME`).
- `ambienceVolume` (top-level) : volume de la nappe d'ambiance pour ce script.
  Défaut = la valeur `SFX_VOLUME` de la clé (`dark_drone` = 0,52). À caler une
  fois la voix ajoutée (l'ambiance doit rester **sous** la voix).

## Mise en page & zone sous-titres (caption-safe)

Tous les repères verticaux (perso, sol, reflet, bande sous-titres) sont
centralisés dans **`src/data/layout.ts`** — une seule source de vérité.

```
~9–25%   mot-clé géant (keyword)
~38–63%  Le Petit Éveillé + sol à 60%
64–77%   BANDE CAPTION-SAFE → karaoké CapCut (aucun élément moteur ici)
~82–100% UI TikTok (pseudo, légende, boutons) — hors-jeu
```

- Les zooms caméra sont **ancrés au sol** : les pieds restent plantés, le perso
  grandit vers le haut → il n'entre jamais dans la bande sous-titres.
- `"guides": true` dans le JSON affiche un **repère studio** (bande sous-titres
  verte + zones UI TikTok rouges). À laisser `false` pour la version publiable.
- **Karaoké CapCut** : importer le MP4, sous-titres auto (sync voix), style
  mot-à-mot dans le tiers bas. Blanc + mot actif violet `#7C6FF7`, contour noir.
  Police gratuite (Montserrat/Inter Bold). La source texte = champ `subtitle`.

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
