import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const Background: React.FC<{ tint: string }> = ({ tint }) => {
  const frame = useCurrentFrame();
  const glowPulse = 0.35 + 0.08 * Math.sin((frame / 40) * Math.PI);

  return (
    <>
      <AbsoluteFill
        style={{
          background: "linear-gradient(180deg, #0a0814 0%, #100c2a 48%, #060412 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 55% 38% at 50% 42%, ${tint}, transparent 58%)`,
          opacity: glowPulse,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-12%",
          right: "-12%",
          top: "76.5%",
          height: 0,
          borderTop: `2px solid ${tint}`,
          opacity: 0.65,
          boxShadow: `0 0 32px 10px ${tint}`,
        }}
      />
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
          opacity: 0.6,
        }}
      />
    </>
  );
};

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(ellipse 70% 55% at 50% 44%, transparent 48%, rgba(2,1,8,.78) 100%)",
    }}
  />
);
