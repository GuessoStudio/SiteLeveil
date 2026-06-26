// Registre SFX — Le Petit Éveillé.
// Les fichiers vivent dans public/sfx/ (staticFile lit depuis public/).
//
// ⚠️ ACTIVATION : chaque son vaut `null` par défaut → le moteur reste SILENCIEUX
// et les rendus marchent sans aucun fichier. Pour activer un son, dépose le mp3
// dans public/sfx/ puis remplace le `null` par son chemin (ex: "sfx/impact.mp3").
// Tu peux les activer un par un, au fil de tes trouvailles (freesound, etc.).

export type SfxKey =
  | "impact_heavy"
  | "whoosh_clean"
  | "whoosh_soft"
  | "glitch"
  | "sub_pulse"
  | "spark_trigger"
  | "space_suction"
  | "shimmer"
  | "dark_drone";

// null = pas encore de fichier → son ignoré. Mets le chemin pour activer.
export const SFX_FILES: Record<SfxKey, string | null> = {
  impact_heavy: null,   // ex: "sfx/impact-heavy.mp3"  — zoom_smash, blackout, adrénaline
  whoosh_clean: null,   // ex: "sfx/whoosh-clean.mp3"  — flash_reverse
  whoosh_soft: null,    // ex: "sfx/whoosh-soft.mp3"   — color_shift
  glitch: null,         // ex: "sfx/glitch.mp3"        — static_noise
  sub_pulse: null,      // ex: "sfx/sub-pulse.mp3"     — cortisol/empathie (BOUCLE = battement)
  spark_trigger: null,  // ex: "sfx/spark.mp3"         — synapses, neuroplasticité, gamma
  space_suction: null,  // ex: "sfx/suction.mp3"       — flow_state
  shimmer: null,        // ex: "sfx/shimmer.mp3"       — dopamine
  dark_drone: null,     // ex: "sfx/dark-drone.mp3"    — nappe d'ambiance globale (BOUCLE)
};

// Volume par son (0 → 1).
export const SFX_VOLUME: Record<SfxKey, number> = {
  impact_heavy: 0.8,
  whoosh_clean: 0.55,
  whoosh_soft: 0.4,
  glitch: 0.5,
  sub_pulse: 0.6,
  spark_trigger: 0.45,
  space_suction: 0.6,
  shimmer: 0.4,
  dark_drone: 0.22,
};

// Sons qui bouclent pendant tout le plan (rythme cardiaque, nappe). Les autres
// sont des one-shots joués au début du plan.
export const SFX_LOOP: Partial<Record<SfxKey, boolean>> = {
  sub_pulse: true,
  dark_drone: true,
};

// Auto-mapping : une transition déclenche ce son (au début du plan).
export const TRANSITION_SFX: Record<string, SfxKey> = {
  zoom_smash: "impact_heavy",
  flash_reverse: "whoosh_clean",
  color_shift: "whoosh_soft",
  blackout: "impact_heavy",
  static_noise: "glitch",
};

// Auto-mapping : un fx continu déclenche ce son (au début du plan).
export const FX_SFX: Record<string, SfxKey> = {
  cortisol_spike: "sub_pulse",
  empathy_pulse: "sub_pulse",
  synapse_fire: "spark_trigger",
  neuroplasticity: "spark_trigger",
  brainwave_gamma: "spark_trigger",
  flow_state: "space_suction",
  adrenaline_burst: "impact_heavy",
  dopamine_molecules: "shimmer",
};
