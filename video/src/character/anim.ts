// Transformations frame-driven : remplacent les @keyframes CSS du lab par des
// fonctions pures de la frame → rendu déterministe, zéro scintillement.
// Les courbes ease-in-out 0/50/100 du CSS sont approchées par un cosinus :
//   v(t) = a + (b - a) * (0.5 - 0.5*cos(2π t))   (t=0→a, t=0.5→b, t=1→a)
import type { BodyAnim, EmotionSpec, GlowAnim } from "../data/emotions";

const TAU = Math.PI * 2;

// phase normalisée [0,1) sur une période de durSec
const phase = (frame: number, fps: number, durSec: number) =>
  ((frame / fps) % durSec) / durSec;

// oscillation ease-in-out entre a (t=0,1) et b (t=0.5)
const osc = (t: number, a: number, b: number) => a + (b - a) * (0.5 - 0.5 * Math.cos(TAU * t));

// rotation linéaire continue (spin-cw / spin-ccw)
export function spinDeg(frame: number, fps: number, durSec: number, dir: 1 | -1): number {
  return (((frame / fps) % durSec) / durSec) * 360 * dir;
}

// wobble : 0 → +24 → 0 → -24 → 0  ≈ 24*sin(2π t)
export function wobbleDeg(frame: number, fps: number, durSec: number): number {
  return 24 * Math.sin(TAU * phase(frame, fps, durSec));
}

// échelle d'un halo (glow-pulse 1↔2.2, glow-soft 1↔1.55, glow-flicker 1↔0.4)
export function glowScale(frame: number, fps: number, glow: GlowAnim): number {
  const peak = glow.type === "pulse" ? 2.2 : glow.type === "soft" ? 1.55 : 0.4;
  return osc(phase(frame, fps, glow.durSec), 1, peak);
}

// transform du groupe #body (respiration / shake / bounce), origine 200,360
export function bodyTransform(frame: number, fps: number, body: BodyAnim): string {
  const t = phase(frame, fps, body.durSec);
  switch (body.type) {
    case "breathe":
      return `scale(${osc(t, 1, 1.045).toFixed(4)})`;
    case "breathe-ample":
      return `scale(${osc(t, 1, 1.065).toFixed(4)})`;
    case "breathe-low":
      return `translateY(9px) scale(${osc(t, 0.94, 0.955).toFixed(4)})`;
    case "shake":
      return `translateX(${(-5 * Math.sin(TAU * t)).toFixed(2)}px)`;
    case "bounce":
      return `translateY(${osc(t, 0, -16).toFixed(2)}px)`;
  }
}

// transform du groupe #character : drift idle (jamais figé) + lean optionnel
export function characterTransform(frame: number, fps: number, leanDeg: number): string {
  // léger balancement horizontal permanent (±6px sur ~5s)
  const driftX = 6 * Math.sin(TAU * phase(frame, fps, 5));
  return `translateX(${driftX.toFixed(2)}px) rotate(${leanDeg}deg)`;
}

// raccourci : transform de rotation d'une spirale selon l'émotion
export function spiralTransform(
  frame: number,
  fps: number,
  spin: NonNullable<EmotionSpec["headSpiral"]>
): string {
  const deg =
    spin.type === "wobble"
      ? wobbleDeg(frame, fps, spin.durSec)
      : spinDeg(frame, fps, spin.durSec, spin.dir);
  return `rotate(${deg.toFixed(2)}deg)`;
}
