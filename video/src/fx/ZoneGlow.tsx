import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

// Moteur ZoneGlow : halo lumineux ciblé sur une zone du perso (tête/torse/full/
// bas), pulsé et frame-driven. Couvre brain_highlight_*, brain_transfer,
// tribal_glow, gratitude_glow, identity_shift. Ancres en % du cadre (cf. emit.ts).
type Zone = "head" | "torso" | "full" | "bottom";
const ZONES: Record<Zone, [number, number]> = {
  head: [50, 56.5],
  torso: [50, 64],
  full: [50, 60.5],
  bottom: [50, 82],
};

type GlowConf = {
  zone: Zone;
  migrateTo?: Zone;     // halo qui se déplace (brain_transfer)
  pulse: boolean;
  rise?: boolean;       // monte du bas (gratitude)
  colorCycle?: boolean; // cycle blanc→accent→blanc (identity_shift)
  color?: string;       // couleur fixe (sinon = accent)
  radius: number;       // % largeur du halo
};

export const ZONE_GLOW: Record<string, GlowConf> = {
  brain_highlight_head: { zone: "head", pulse: true, radius: 34 },
  brain_highlight_torso: { zone: "torso", pulse: true, radius: 34 },
  brain_transfer: { zone: "head", migrateTo: "torso", pulse: true, radius: 32 },
  tribal_glow: { zone: "full", pulse: false, color: "#FFB454", radius: 52 },
  gratitude_glow: { zone: "bottom", pulse: false, rise: true, color: "#FFC36B", radius: 60 },
  identity_shift: { zone: "full", pulse: true, colorCycle: true, radius: 46 },
};

export const ZoneGlow: React.FC<{
  fx: string;
  accent: string;
  durationInFrames: number;
}> = ({ fx, accent, durationInFrames }) => {
  const frame = useCurrentFrame();
  const conf = ZONE_GLOW[fx];
  if (!conf) return null;

  const p = interpolate(frame, [0, durationInFrames], [0, 1], { extrapolateRight: "clamp" });

  // position : zone fixe ou migration head→torso
  const a = ZONES[conf.zone];
  const b = conf.migrateTo ? ZONES[conf.migrateTo] : a;
  const x = a[0] + (b[0] - a[0]) * p;
  const y = a[1] + (b[1] - a[1]) * p;

  // intensité : pulse doux ou entrée en fondu
  const pulse = conf.pulse ? 0.5 + 0.5 * Math.sin((frame / 18) * Math.PI) : 1;
  const intro = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  // gratitude : monte du bas (le halo s'élève sur la scène)
  const riseY = conf.rise ? interpolate(p, [0, 1], [10, -4]) : 0;
  const opacity = (0.28 + 0.22 * pulse) * intro;

  // couleur : fixe, accent, ou cycle blanc↔accent (identity_shift)
  let color = conf.color ?? accent;
  if (conf.colorCycle) {
    const c = 0.5 + 0.5 * Math.sin((frame / 14) * Math.PI);
    color = c > 0.5 ? accent : "#FFFFFF";
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y + riseY}%`,
        width: `${conf.radius}%`,
        height: `${conf.radius}%`,
        transform: "translate(-50%,-50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
        filter: "blur(8px)",
        opacity,
        mixBlendMode: "screen",
        pointerEvents: "none",
      }}
    />
  );
};
