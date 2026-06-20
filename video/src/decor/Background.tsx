import React from "react";
import { AbsoluteFill } from "remotion";

// Décor repris 1:1 du lab : gradient nuit + halo teinté + sol lumineux + pool +
// vignette. La teinte (tint) vient du mode courant.
export const Background: React.FC<{ tint: string }> = ({ tint }) => {
  return (
    <>
      <AbsoluteFill
        style={{
          background: "linear-gradient(180deg,#140d36 0%, #1b1248 52%, #0a0720 100%)",
        }}
      />
      {/* glow-bg teinté */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 60% 42% at 50% 40%, ${tint}, transparent 62%)`,
          opacity: 0.3,
        }}
      />
      {/* sol lumineux */}
      <div
        style={{
          position: "absolute",
          left: "-12%",
          right: "-12%",
          top: "76.5%",
          height: 0,
          borderTop: `2px solid ${tint}`,
          opacity: 0.55,
          boxShadow: `0 0 26px 7px ${tint}`,
        }}
      />
      {/* pool de lumière au sol */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "76.5%",
          width: "64%",
          height: "11%",
          transform: "translate(-50%,-46%)",
          background: `radial-gradient(ellipse at center, ${tint}, transparent 68%)`,
          filter: "blur(7px)",
          opacity: 0.55,
        }}
      />
    </>
  );
};

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(ellipse 75% 60% at 50% 44%, transparent 55%, rgba(4,2,14,.65) 100%)",
    }}
  />
);
