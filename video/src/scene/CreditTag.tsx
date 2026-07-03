import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

// Crédit chercheur (E-E-A-T) : petite pastille « SOURCE · Nom · Institution »
// dans l'espace libre entre le mot-clé et la tête. Champ "credit" d'un plan.
export const CreditTag: React.FC<{ credit: string; accent: string }> = ({ credit, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 15, mass: 0.6 }, durationInFrames: 12 });
  const opacity = frame < 2 ? 0 : 1;

  return (
    <div style={{ position: "absolute", top: "30%", left: 0, right: 0, textAlign: "center" }}>
      <div
        style={{
          display: "inline-block",
          padding: "10px 24px",
          borderRadius: 999,
          background: "rgba(10,7,32,0.74)",
          border: `1.5px solid ${accent}`,
          color: "#EDEBFA",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: "0.01em",
          opacity,
          transform: `translateY(${((1 - pop) * 12).toFixed(1)}px)`,
          boxShadow: `0 0 22px ${accent}55, 0 4px 18px rgba(0,0,0,.5)`,
          maxWidth: "86%",
        }}
      >
        <span style={{ color: accent, fontWeight: 800, letterSpacing: "0.08em", marginRight: 10 }}>SOURCE</span>
        {credit}
      </div>
    </div>
  );
};
