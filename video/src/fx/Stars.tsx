import React from "react";
import { AbsoluteFill, random, useCurrentFrame, useVideoConfig } from "remotion";

// Étoiles d'ambiance, discrètes (lab : 22, opacité ~.2-.28). Positions/tailles
// déterministes via random(seed) ; scintillement frame-driven. Teintées au mode.
const COUNT = 22;

export const Stars: React.FC<{ tint: string }> = ({ tint }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      {new Array(COUNT).fill(0).map((_, i) => {
        const r = (k: number) => random(`star-${i}-${k}`);
        const left = r(0) * 100;
        const top = r(1) * 72; // surtout dans le ciel (haut du cadre)
        const size = 1 + r(2) * 2.4;
        const dur = 4 + r(3) * 5;
        const phase = r(4);
        const t = (((frame / fps) % dur) / dur + phase) % 1;
        // float : opacité 0 → .28 (25%) → .2 (75%) → 0
        let opacity: number;
        if (t < 0.25) opacity = (t / 0.25) * 0.28;
        else if (t < 0.75) opacity = 0.28 + ((t - 0.25) / 0.5) * (0.2 - 0.28);
        else opacity = 0.2 * (1 - (t - 0.75) / 0.25);
        const y = 8 - t * 22;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: tint,
              opacity,
              transform: `translateY(${y}px)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
