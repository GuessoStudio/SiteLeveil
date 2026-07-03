# Catalogue du moteur — Le Petit Éveillé

Inventaire complet de tout ce qui est disponible pour produire une vidéo.
Tout se pilote depuis un script JSON (`src/data/scripts/<slug>.json`).
Doc de schéma : `README.md`. Ce fichier = la liste exhaustive des valeurs.

---

## 1. Poses (10) — champ `pose` (collant)
`idle` · `point` · `open` · `think` · `shrug` · `cross` · `wave` · `lean` · `walkA` · `walkB`

## 2. Émotions (13) — champ `emotion` (collant)
`calme` · `reflexion` · `focus` · `insight` · `confusion` · `surcharge` · `joie` · `peur` · `tristesse` · `fierte` · `fatigue` · `sommeil` · `eveil`
> Pilotent spin des spirales, glow, mouvement du corps (bounce/shake/breathe).

## 3. Modes (3) — champ `mode` (collant) — teinte + spirale allumée
`neuro` (tête, bleu) · `emotions` (torse, rose) · `eveil` (les deux, violet)

## 4. Accents / couleurs (8) — champ `accent` (collant) — hex OU clé
`neuro` #6c7bff · `dopamine` #FF8A3D · `stress` #FF4444 · `sommeil` #4ECDC4 · `eveil` #9b7cff · `emotions` #ff6b9d · `social` #5BC0EB · `growth` #A3E635
> Grammaire narrative : bleu=science/fait, orange=récompense, rouge=danger/stress, violet=éveil/solution, cyan=calme, vert=pratique.

## 5. Caméras (6) — champ `camera` (collant)
`drift` (Ken Burns) · `zoom-in` · `zoom-out` · `punch-head` (hook) · `static` · `cine` (zoom lent CONTINU piloté par le frame global — look studio, perso calme)
> Toutes ancrées au sol (les zooms ne sortent jamais le perso de la zone).

## 6. Transitions (5) — champ `transition` (ponctuel) — rupture en début de plan
`flash_reverse` · `blackout` · `color_shift` · `static_noise` · `zoom_smash`

## 7. Effets keyword (2) — champ `keywordFx` (ponctuel)
`glitch` (jitter + aberration chromatique) · `shake` (tremblement)
> Par défaut le mot-clé fait un pop + s'allume dans sa couleur puis vire au blanc.

## 8. Effets continus `fx` (33, collant) — 6 moteurs

**ZoneGlow (6)** — illumine une zone du cerveau/corps
`brain_highlight_head` · `brain_highlight_torso` · `brain_transfer` · `gratitude_glow` · `identity_shift` · `tribal_glow`

**EmitField (7)** — champ de particules émises
`dopamine_molecules` · `melatonin_rain` · `adrenaline_burst` · `flow_state` · `rumination_loop` · `hippocampus_replay` · `cognitive_overload`

**RadialWave (3)** — onde radiale (battement)
`cortisol_spike` · `empathy_pulse` · `influence_ripple`

**SineWave (4)** — onde sinusoïdale (ondes cérébrales)
`brainwave_alpha` · `brainwave_beta` · `brainwave_gamma` · `serotonin_flow`

**NodeGraph (5)** — réseau de nœuds (synapses, réseaux)
`synapse_fire` · `neuroplasticity` · `social_network` · `habit_chain` · `trust_bridge`

**PsychoFx (8)** — effets psychologiques
`attention_spotlight` · `goal_beacon` · `momentum_trail` · `reset_breath` · `tunnel_vision` · `conformity_wave` · `ego_depletion` · `spotlight_pressure`

## 9. Icônes (13) — champ `icon` (ponctuel) — pop au-dessus de la tête
`brain` · `bolt` · `spiral` · `eye` · `clock` · `target` · `lightbulb` · `heart` · `users` · `link` · `flame` · `leaf` · `moon`

## 10. SFX / sons (9) — `public/sfx/` — champ `sfx` (ponctuel, "none" coupe)
`impact_heavy` · `whoosh_clean` · `whoosh_soft` · `glitch` · `sub_pulse` (boucle) · `spark_trigger` · `space_suction` · `shimmer` · `dark_drone` (boucle, ambiance)
> Auto-mapping : une `transition` et un `fx` déclenchent un son automatiquement.
> `ambience` = nappe globale (ex. `dark_drone`).

## 11. Burst — champ `burst` (ponctuel)
`false` · `true` · `"head"` · `"torso"` (éclat de particules d'accent)

## 12. Timer — champ `timer: true` (ponctuel)
Chronomètre néon MM:SS qui défile 00:00 → 10:00 puis se fige net (DigitalTimer).

## 12b. Crédit chercheur — champ `credit: "Nom · Institution"` (ponctuel)
Pastille « SOURCE · Nom · Institution » entre le mot-clé et la tête (E-E-A-T).

## 12c. SplitScreen — champ `split: { "left": "...", "right": "..." }` (ponctuel)
Écran divisé pour comparaisons (rouge à gauche vs violet à droite + « VS »).

---

## 13. Champs du script JSON

**Haut niveau :** `fps` · `width` · `height` · `audio` (voix off) · `audioVolume` (gain voix) · `ambience` · `ambienceVolume` · `sfxVolume` (override par SFX) · `guides` (repères caption-safe studio) · `defaults` · `scenes`

**Par plan :** `duration` (s, requis) · `keyword` · `keywordFx` · `subtitle` (source karaoké, non affiché) · `pose` · `emotion` · `mode` · `position` (left/center/right) · `camera` · `fx` · `transition` · `sfx` · `icon` · `timer` · `credit` · `split` · `bubbleText` · `accent` · `burst`

---

## 14. Composants (React/Remotion)

**Compositions :** `Video` (vidéo pilotée JSON) · `Cover` (miniature 1080×1920) · `Banner` (bannière YouTube 2560×1440) · `Smoke`/`Demo1` (tests)
**Scène :** `Scene` · `CameraRig` · `KeywordText` · `SafeZoneGuide`
**Perso :** `PetitEveille` · `Reflection` · `anim`
**Décor :** `Background` + `Vignette` · `Stars`
**FX :** `FxOverlay` (dispatcher) + `ZoneGlow` · `EmitField` · `RadialWave` · `SineWave` · `NodeGraph` · `PsychoFx` · `Particles` · `Burst` · `SceneFlash` · `Transition` · `IconPop` · `DigitalTimer`
**Audio :** `SfxPlayer`
**Données :** `layout` (repères verticaux + caption-safe) · `palette` · `icons` · `emotions` · `petit-eveille` (poses) · `sfxRegistry` · `script`

---

## 15. Contrôles audio (par script)
- `audioVolume` : gain voix off (>1 amplifie).
- `ambienceVolume` : volume de la nappe d'ambiance.
- `sfxVolume` : override local du volume d'un SFX (ex. `{ "impact_heavy": 0.3 }`).
- Base globale : `src/data/sfxRegistry.ts` (`SFX_VOLUME`).

## 16. Mise en page
- `src/data/layout.ts` : source unique des positions verticales (perso, sol, reflet) + bande **caption-safe** (64–77%) pour le karaoké CapCut.
- Couvertures : layout descendu par défaut (tiers haut libre, anti-crop réseaux).

## 17. Commandes (package.json)
- `studio` : éditeur/preview
- `render:biais` · `render:anxiete` · `render:burnout` · `render:meditation` : rendus vidéo
- `cover:anxiete` · `cover:burnout` · `cover:meditation` : couvertures
- `banner` : bannière YouTube
- `smoke` / `ensure` : diagnostic Chromium/ffmpeg
