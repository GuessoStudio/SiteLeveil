import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ACCENTS } from "../data/palette";

// Écran divisé pour les comparaisons (mythe vs réalité, réaction auto vs pause,
// avant vs après). Deux panneaux dans une bande centrale + « VS ». Un léger
// voile assombrit le décor pour focaliser. Champ "split": { left, right }.
export const SplitScreen: React.FC<{ left: string; right: string }> = ({ left, right }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const grow = spring({ frame, fps, config: { damping: 16, mass: 0.7 }, durationInFrames: 14 });
  const vs = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 9, stiffness: 200 }, durationInFrames: 14 });

  const BAND_TOP = 33;
  const BAND_H = 36;

  const panel = (label: string, tint: string, side: "left" | "right") => (
    <div
      style={{
        position: "absolute",
        top: `${BAND_TOP}%`,
        height: `${BAND_H}%`,
        [side]: "3.5%",
        width: "44%",
        background: `linear-gradient(${side === "left" ? "135deg" : "225deg"}, ${tint}3a, ${tint}12)`,
        border: `2.5px solid ${tint}`,
        borderRadius: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 3%",
        opacity: grow,
        transform: `translateX(${(side === "left" ? -1 : 1) * (1 - grow) * 40}px)`,
        boxShadow: `0 0 40px ${tint}44, inset 0 0 30px ${tint}22`,
      }}
    >
      <span
        style={{
          color: "#fff",
          fontFamily: "Inter, system-ui, sans-serif",
          fontWeight: 900,
          fontSize: 56,
          lineHeight: 1.05,
          textAlign: "center",
          textTransform: "uppercase",
          textShadow: `0 0 24px ${tint}, 0 2px 12px rgba(0,0,0,.6)`,
        }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* voile pour focaliser */}
      <AbsoluteFill style={{ background: "rgba(4,2,12,0.42)", opacity: grow }} />
      {panel(left, ACCENTS.stress, "left")}
      {panel(right, ACCENTS.eveil, "right")}
      {/* badge VS central */}
      <div
        style={{
          position: "absolute",
          top: `${BAND_TOP + BAND_H / 2}%`,
          left: "50%",
          transform: `translate(-50%,-50%) scale(${vs.toFixed(3)})`,
          width: 92,
          height: 92,
          borderRadius: "50%",
          background: "#0a0720",
          border: "3px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontWeight: 900,
          fontSize: 40,
          boxShadow: "0 0 30px rgba(255,255,255,.5)",
        }}
      >
        VS
      </div>
    </AbsoluteFill>
  );
};
