import React from "react";
import { random, useCurrentFrame, useVideoConfig } from "remotion";
import { EMIT } from "../data/emit";
import type { ModeName } from "../data/emotions";

// Particules d'émanation déterministes : un pool fixe de particules, chacune en
// boucle continue (naissance décalée). Position/opacité = fonctions de la frame.
// Émanent de la tête (neuro) / du torse (émotions) / des deux (éveil).
export const Particles: React.FC<{ mode: ModeName }> = ({ mode }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const conf = EMIT[mode];

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  return (
    <>
      {new Array(conf.count).fill(0).map((_, i) => {
        const r = (k: number) => random(`${mode}-${i}-${k}`);
        const src = conf.src[i % conf.src.length];
        const angle = lerp(conf.angleDeg[0], conf.angleDeg[1], r(0)) * (Math.PI / 180);
        const dist = lerp(conf.distPct[0], conf.distPct[1], r(1));
        const size = lerp(conf.size[0], conf.size[1], r(2));
        const dur = lerp(conf.durSec[0], conf.durSec[1], r(3));
        const lifeFrames = dur * fps;
        const birth = r(4) * lifeFrames; // décalage de naissance
        const jitterX = (r(5) - 0.5) * 4;

        const local = (((frame - birth) % lifeFrames) + lifeFrames) % lifeFrames;
        const t = local / lifeFrames;

        // opacité : 0 → .95 (15%) → 0
        const opacity = t < 0.15 ? lerp(0, 0.95, t / 0.15) : lerp(0.95, 0, (t - 0.15) / 0.85);
        const dx = Math.cos(angle) * dist * t;
        const dy = Math.sin(angle) * dist * t;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${src[0] + jitterX + dx}%`,
              top: `${src[1] + dy}%`,
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
