import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

// Moteur RadialWave : anneaux concentriques qui jaillissent d'une ancre et
// pulsent sur un rythme (sonar). Couvre cortisol_spike (alarme), empathy_pulse,
// influence_ripple. Anneaux nés en décalé → flux continu.
type Origin = "head" | "torso" | "center";
type Rhythm = "heartbeat" | "steady" | "slow";

const ORIGINS: Record<Origin, [number, number]> = {
  head: [50, 56.5],
  torso: [50, 64],
  center: [50, 60],
};

const RHYTHM_SEC: Record<Rhythm, number> = {
  heartbeat: 0.9,
  steady: 1.6,
  slow: 2.6,
};

type WaveConf = {
  origin: Origin;
  rhythm: Rhythm;
  color?: string;     // sinon = accent
  ringCount: number;
  maxRadius: number;  // % largeur du cadre
  intensity: number;  // opacité de base
};

export const RADIAL_WAVE: Record<string, WaveConf> = {
  cortisol_spike: { origin: "torso", rhythm: "heartbeat", color: "#FF4444", ringCount: 3, maxRadius: 46, intensity: 0.7 },
  empathy_pulse: { origin: "torso", rhythm: "steady", ringCount: 3, maxRadius: 52, intensity: 0.5 },
  influence_ripple: { origin: "center", rhythm: "steady", ringCount: 4, maxRadius: 64, intensity: 0.5 },
};

export const RadialWave: React.FC<{
  fx: string;
  accent: string;
  durationInFrames: number;
}> = ({ fx, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const conf = RADIAL_WAVE[fx];
  if (!conf) return null;

  const color = conf.color ?? accent;
  const [ox, oy] = ORIGINS[conf.origin];
  const periodFrames = RHYTHM_SEC[conf.rhythm] * fps;

  return (
    <>
      {new Array(conf.ringCount).fill(0).map((_, k) => {
        // chaque anneau décalé d'une fraction de période
        const offset = (k / conf.ringCount) * periodFrames;
        const local = ((frame + offset) % periodFrames) / periodFrames; // 0→1
        const radius = local * conf.maxRadius;
        // attaque rapide pour le heartbeat, fondu en s'élargissant
        const fade = conf.rhythm === "heartbeat"
          ? Math.max(0, 1 - local) ** 1.5
          : 1 - local;
        const opacity = conf.intensity * fade;
        const thickness = conf.rhythm === "heartbeat" ? 4 : 2.5;

        return (
          <div
            key={k}
            style={{
              position: "absolute",
              left: `${ox}%`,
              top: `${oy}%`,
              width: `${radius * 2}%`,
              height: `${radius * 2}%`,
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              border: `${thickness}px solid ${color}`,
              boxShadow: `0 0 16px ${color}`,
              opacity,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </>
  );
};
