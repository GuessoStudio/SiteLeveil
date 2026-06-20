import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { EMIT } from "../data/emit";
import type { ModeName } from "../data/emotions";
import type { Burst as BurstSpec } from "../data/script";

// Éclat ponctuel en début de plan (accent) : un anneau de points qui jaillit de
// la tête ou du torse, puis s'estompe. Déterministe.
const RAYS = 14;
const DURATION = 22; // frames

export const Burst: React.FC<{ burst: BurstSpec; mode: ModeName }> = ({ burst, mode }) => {
  const frame = useCurrentFrame();
  if (!burst || frame > DURATION) return null;

  const conf = EMIT[mode];
  const origin = burst === "torso" ? [50, 64] : [50, 56.5];
  const p = interpolate(frame, [0, DURATION], [0, 1], { extrapolateRight: "clamp" });
  const radius = interpolate(p, [0, 1], [0, 22]); // % hauteur
  const opacity = interpolate(p, [0, 0.25, 1], [0, 0.95, 0]);
  const size = interpolate(p, [0, 1], [6, 2]);

  return (
    <>
      {new Array(RAYS).fill(0).map((_, i) => {
        const a = (i / RAYS) * Math.PI * 2;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${origin[0] + Math.cos(a) * radius}%`,
              top: `${origin[1] + Math.sin(a) * radius}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: conf.color,
              boxShadow: `0 0 ${conf.glow}px ${conf.color}`,
              opacity,
              transform: "translate(-50%,-50%)",
            }}
          />
        );
      })}
    </>
  );
};
