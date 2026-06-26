import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import type { CameraMove } from "../data/script";

export const CameraRig: React.FC<{
  camera: CameraMove;
  transition?: string;
  durationInFrames: number;
  children: React.ReactNode;
}> = ({ camera, transition, durationInFrames, children }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });

  let scale = 1;
  let tx = 0;
  let ty = 0;

  switch (camera) {
    case "drift": {
      scale = interpolate(p, [0, 1], [1.03, 1.14]);
      tx = interpolate(p, [0, 1], [-2.5, 2.5]);
      ty = interpolate(p, [0, 1], [0.5, -0.5]);
      break;
    }
    case "zoom-in": {
      scale = interpolate(p, [0, 1], [1.0, 1.2]);
      ty = interpolate(p, [0, 1], [0, -1.5]);
      break;
    }
    case "zoom-out": {
      scale = interpolate(p, [0, 1], [1.2, 1.02]);
      break;
    }
    case "punch-head": {
      const punch = interpolate(frame, [0, 8], [1.0, 1.28], {
        extrapolateRight: "clamp",
      });
      const settle = frame > 8
        ? 0.04 * Math.exp(-(frame - 8) / 12) * Math.sin((frame - 8) * 0.6)
        : 0;
      scale = punch + settle;
      ty = interpolate(frame, [0, 8], [0, 10], { extrapolateRight: "clamp" });
      tx = settle * 8;
      break;
    }
    case "static": {
      scale = 1.02 + 0.012 * Math.sin((frame / 30) * Math.PI);
      tx = 0.4 * Math.sin((frame / 45) * Math.PI);
      break;
    }
  }

  // zoom_smash (canal transition) : démarre zoomé (140%) et se résorbe vite —
  // « coup de poing » de révélation, ajouté par-dessus le mouvement de base.
  if (transition === "zoom_smash") {
    scale += 0.4 * Math.exp(-frame / 3);
  }

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${scale.toFixed(4)}) translate(${tx.toFixed(2)}%, ${ty.toFixed(2)}%)`,
        transformOrigin: "50% 42%",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
