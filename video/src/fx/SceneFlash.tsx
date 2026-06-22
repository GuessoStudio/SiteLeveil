import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const FLASH_DURATION = 6;

export const SceneFlash: React.FC<{ accent: string }> = ({ accent }) => {
  const frame = useCurrentFrame();
  if (frame >= FLASH_DURATION) return null;

  const opacity = interpolate(frame, [0, 1, FLASH_DURATION], [0.9, 0.7, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 45%, ${accent}, transparent 70%)`,
        opacity,
        mixBlendMode: "screen",
      }}
    />
  );
};
