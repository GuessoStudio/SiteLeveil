import React from "react";
import { random, useCurrentFrame, useVideoConfig } from "remotion";

// Moteur EmitField : pool déterministe de particules émises depuis une ancre du
// perso, voyageant selon une direction. Couvre dopamine, mélatonine, adrénaline,
// flow, rumination, hippocampus. Tout en % du cadre → indépendant de la résolution.
type Origin = "head" | "torso" | "top" | "bottom" | "center";
type Direction = "up" | "down" | "radial" | "converge" | "orbit";
type Shape = "dot" | "molecule" | "shard";
type Speed = "slow" | "medium" | "fast";

const ORIGINS: Record<Origin, [number, number]> = {
  head: [50, 56.5],
  torso: [50, 64],
  top: [50, 4],
  bottom: [50, 92],
  center: [50, 60],
};

const SPEED_DUR: Record<Speed, [number, number]> = {
  slow: [2.2, 3.6],
  medium: [1.2, 2.2],
  fast: [0.5, 1.0],
};

type FieldConf = {
  origin: Origin;
  direction: Direction;
  speed: Speed;
  shape: Shape;
  color?: string;       // sinon = accent
  gravity: number;      // 0 → 1, attraction vers le bas
  count: number;
  size: [number, number];
  distPct: [number, number];
  glow: number;
  jitter?: number;      // gigue horizontale nerveuse (direction "up")
};

export const EMIT_FIELD: Record<string, FieldConf> = {
  dopamine_molecules: { origin: "head", direction: "up", speed: "medium", shape: "molecule", gravity: 0.25, count: 24, size: [6, 11], distPct: [16, 32], glow: 11, jitter: 3 },
  melatonin_rain: { origin: "top", direction: "down", speed: "slow", shape: "dot", color: "#9DB4FF", gravity: 0.5, count: 28, size: [4, 7], distPct: [60, 90], glow: 11 },
  adrenaline_burst: { origin: "torso", direction: "radial", speed: "fast", shape: "shard", color: "#FFC247", gravity: 0.1, count: 22, size: [4, 9], distPct: [22, 40], glow: 10 },
  flow_state: { origin: "center", direction: "converge", speed: "fast", shape: "shard", gravity: 0, count: 20, size: [3, 7], distPct: [30, 55], glow: 8 },
  rumination_loop: { origin: "head", direction: "orbit", speed: "medium", shape: "dot", gravity: 0, count: 14, size: [3, 6], distPct: [10, 16], glow: 7 },
  hippocampus_replay: { origin: "head", direction: "converge", speed: "slow", shape: "molecule", gravity: 0, count: 16, size: [4, 8], distPct: [24, 44], glow: 8 },
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const EmitField: React.FC<{
  fx: string;
  accent: string;
  durationInFrames: number;
}> = ({ fx, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const conf = EMIT_FIELD[fx];
  if (!conf) return null;

  const color = conf.color ?? accent;
  const [ox, oy] = ORIGINS[conf.origin];
  const [durMin, durMax] = SPEED_DUR[conf.speed];

  return (
    <>
      {new Array(conf.count).fill(0).map((_, i) => {
        const r = (k: number) => random(`${fx}-${i}-${k}`);
        const size = lerp(conf.size[0], conf.size[1], r(2));
        const dist = lerp(conf.distPct[0], conf.distPct[1], r(1));
        const dur = lerp(durMin, durMax, r(3));
        const lifeFrames = dur * fps;
        const birth = r(4) * lifeFrames;
        const local = (((frame - birth) % lifeFrames) + lifeFrames) % lifeFrames;
        const t = local / lifeFrames;

        // trajectoire selon la direction
        let dx = 0;
        let dy = 0;
        if (conf.direction === "up") {
          // gigue de base + oscillation nerveuse frame-driven (agitation neuronale)
          dx = (r(5) - 0.5) * 8 + (conf.jitter ?? 0) * Math.sin(frame / 5 + i);
          dy = -dist * t;
        } else if (conf.direction === "down") {
          dx = (r(5) - 0.5) * 40;
          dy = dist * t;
        } else if (conf.direction === "radial") {
          const a = r(0) * Math.PI * 2;
          dx = Math.cos(a) * dist * t;
          dy = Math.sin(a) * dist * t;
        } else if (conf.direction === "converge") {
          // part de loin, arrive sur l'ancre (1-t)
          const a = r(0) * Math.PI * 2;
          dx = Math.cos(a) * dist * (1 - t);
          dy = Math.sin(a) * dist * (1 - t);
        } else if (conf.direction === "orbit") {
          // tourne en boucle fermée autour de l'ancre (ne s'échappe jamais)
          const a = r(0) * Math.PI * 2 + t * Math.PI * 2;
          const rad = dist * (0.7 + 0.3 * r(6));
          dx = Math.cos(a) * rad;
          dy = Math.sin(a) * rad * 0.6;
        }
        // gravité : terme parabolique qui accélère vers le bas
        dy += conf.gravity * dist * t * t;

        // opacité : montée rapide puis fondu
        const opacity = t < 0.15 ? lerp(0, 0.95, t / 0.15) : lerp(0.95, 0, (t - 0.15) / 0.85);

        // forme
        const shapeStyle: React.CSSProperties =
          conf.shape === "shard"
            ? { width: size * 0.5, height: size * 2, borderRadius: size, transform: `translate(-50%,-50%) rotate(${(r(7) * 360).toFixed(0)}deg)` }
            : conf.shape === "molecule"
              ? { width: size, height: size, borderRadius: "50%", border: `1.5px solid ${color}`, background: "transparent", boxShadow: `0 0 ${conf.glow}px ${color}, inset 0 0 ${size / 2}px ${color}` }
              : { width: size, height: size, borderRadius: "50%" };

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${ox + dx}%`,
              top: `${oy + dy}%`,
              background: conf.shape === "molecule" ? "transparent" : color,
              boxShadow: conf.shape === "molecule" ? undefined : `0 0 ${conf.glow}px ${color}`,
              opacity,
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
              ...shapeStyle,
            }}
          />
        );
      })}
    </>
  );
};
