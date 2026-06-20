// Les 13 émotions + 3 modes, transcrits 1:1 depuis le CSS du lab
// (public/petit-eveille-scene.html, blocs ÉMOTIONS et MODES).
// Les @keyframes CSS deviennent ici des paramètres que PetitEveille.tsx
// transforme en valeurs frame-driven (interpolate/sin), pour un rendu
// déterministe sans scintillement.

export type SpinAnim = { type: "spin"; durSec: number; dir: 1 | -1 };
export type WobbleAnim = { type: "wobble"; durSec: number };
export type GlowAnim = { type: "pulse" | "soft" | "flicker"; durSec: number };
export type BodyAnim = {
  type: "breathe" | "breathe-ample" | "breathe-low" | "shake" | "bounce";
  durSec: number;
};

export type EmotionSpec = {
  headSpiral?: SpinAnim | WobbleAnim;
  torsoSpiral?: SpinAnim;
  headGlow?: GlowAnim;
  torsoGlow?: GlowAnim;
  body?: BodyAnim;
};

export type EmotionName =
  | "calme"
  | "reflexion"
  | "focus"
  | "insight"
  | "confusion"
  | "surcharge"
  | "joie"
  | "peur"
  | "tristesse"
  | "fierte"
  | "fatigue"
  | "sommeil"
  | "eveil";

const cw = (durSec: number): SpinAnim => ({ type: "spin", durSec, dir: 1 });
const ccw = (durSec: number): SpinAnim => ({ type: "spin", durSec, dir: -1 });

export const EMOTIONS: Record<EmotionName, EmotionSpec> = {
  calme: { headSpiral: cw(60), torsoSpiral: ccw(70), body: { type: "breathe-ample", durSec: 7 } },
  reflexion: { headSpiral: cw(7), body: { type: "breathe", durSec: 5 } },
  focus: { headSpiral: cw(10), headGlow: { type: "soft", durSec: 4 }, body: { type: "breathe", durSec: 6 } },
  insight: { headSpiral: cw(4), headGlow: { type: "pulse", durSec: 1.1 }, body: { type: "bounce", durSec: 1.1 } },
  confusion: { headSpiral: { type: "wobble", durSec: 2.6 } },
  surcharge: {
    headSpiral: cw(2.4),
    torsoSpiral: ccw(2.7),
    headGlow: { type: "pulse", durSec: 1.2 },
    body: { type: "shake", durSec: 0.26 },
  },
  joie: { headSpiral: cw(6), torsoSpiral: ccw(6), body: { type: "bounce", durSec: 1.5 } },
  peur: { headGlow: { type: "flicker", durSec: 0.5 }, body: { type: "shake", durSec: 0.18 } },
  tristesse: { headSpiral: cw(50), torsoSpiral: ccw(55), body: { type: "breathe-low", durSec: 8 } },
  fierte: {
    headGlow: { type: "soft", durSec: 5 },
    torsoGlow: { type: "soft", durSec: 5 },
    body: { type: "breathe-ample", durSec: 6 },
  },
  fatigue: { headSpiral: cw(40), headGlow: { type: "flicker", durSec: 2.6 }, body: { type: "breathe-low", durSec: 7 } },
  sommeil: {
    headSpiral: cw(120),
    torsoSpiral: ccw(130),
    headGlow: { type: "flicker", durSec: 4 },
    torsoGlow: { type: "flicker", durSec: 4.4 },
    body: { type: "breathe-low", durSec: 9 },
  },
  eveil: {
    headSpiral: cw(12),
    torsoSpiral: ccw(12),
    headGlow: { type: "soft", durSec: 4.5 },
    torsoGlow: { type: "soft", durSec: 4.5 },
    body: { type: "breathe", durSec: 5 },
  },
};

export type ModeName = "neuro" | "emotions" | "eveil";

// Opacités des spirales/halos + teinte de scène (var --tint du lab).
export const MODES: Record<
  ModeName,
  { headSpiral: number; headGlow: number; torsoSpiral: number; torsoGlow: number; tint: string }
> = {
  neuro: { headSpiral: 1, headGlow: 0.9, torsoSpiral: 0.15, torsoGlow: 0.1, tint: "#6c7bff" },
  emotions: { headSpiral: 0.15, headGlow: 0.1, torsoSpiral: 1, torsoGlow: 0.9, tint: "#ff6b9d" },
  eveil: { headSpiral: 1, headGlow: 0.9, torsoSpiral: 1, torsoGlow: 0.9, tint: "#9b7cff" },
};
