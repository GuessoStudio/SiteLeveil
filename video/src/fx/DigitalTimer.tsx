import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { LAYOUT } from "../data/layout";

// Chronomètre numérique néon (MM:SS). Défile à toute vitesse de 00:00 à 10:00
// en ~1,2 s puis SE FIGE NET sur 10:00 (dopamine visuelle « mets-toi-z-y »).
// Activé par le champ "timer": true d'un plan. Placé au-dessus de la tête.
export const DigitalTimer: React.FC<{ accent: string }> = ({ accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scrollFrames = Math.round(fps * 1.2);
  const totalSec = interpolate(frame, [0, scrollFrames], [0, 600], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mm = Math.floor(totalSec / 60);
  const ss = Math.floor(totalSec % 60);
  const label = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;

  // léger « settle » quand ça se fige (petit pop à l'arrêt)
  const frozen = frame >= scrollFrames;
  const pop = frozen ? 1 + 0.06 * Math.exp(-(frame - scrollFrames) / 4) : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: `${LAYOUT.characterTopPct - 9}%`,
        left: 0,
        right: 0,
        textAlign: "center",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontFamily: "'Courier New', ui-monospace, monospace",
          fontWeight: 300,
          fontSize: 96,
          letterSpacing: "0.1em",
          color: "#fff",
          transform: `scale(${pop.toFixed(3)})`,
          textShadow: `0 0 26px ${accent}, 0 0 10px ${accent}, 0 0 3px #fff`,
        }}
      >
        {label}
      </span>
    </div>
  );
};
