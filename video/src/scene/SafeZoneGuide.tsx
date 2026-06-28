import React from "react";
import { AbsoluteFill } from "remotion";
import { LAYOUT } from "../data/layout";

// Repère visuel NON destiné au rendu final : montre où déposer le karaoké CapCut
// et quelles zones l'UI TikTok recouvre. Activé via "guides": true dans le JSON.
// À laisser à false pour la version publiable.
export const SafeZoneGuide: React.FC = () => {
  const { topPct, bottomPct } = LAYOUT.captionSafe;
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Bande caption-safe (karaoké) */}
      <div
        style={{
          position: "absolute",
          left: "6%",
          right: "6%",
          top: `${topPct}%`,
          height: `${bottomPct - topPct}%`,
          border: "2px dashed #34D399",
          background: "rgba(52,211,153,0.12)",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#34D399",
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: "0.08em",
        }}
      >
        ZONE SOUS-TITRES (CAPCUT)
      </div>

      {/* UI TikTok — colonne de boutons à droite */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "55%",
          width: "16%",
          height: "33%",
          background: "rgba(255,68,68,0.16)",
          border: "1px solid rgba(255,68,68,0.5)",
        }}
      />
      {/* UI TikTok — pseudo / légende / son en bas */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "16%",
          background: "rgba(255,68,68,0.16)",
          border: "1px solid rgba(255,68,68,0.5)",
        }}
      />
    </AbsoluteFill>
  );
};
