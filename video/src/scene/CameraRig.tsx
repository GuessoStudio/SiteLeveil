import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import type { CameraMove } from "../data/script";

// Caméra virtuelle : scale/translate du cadre selon le mouvement du plan.
// Tout est frame-driven (déterministe). Toujours un minimum de vie (jamais figé).
export const CameraRig: React.FC<{
  camera: CameraMove;
  durationInFrames: number;
  children: React.ReactNode;
}> = ({ camera, durationInFrames, children }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });

  let scale = 1;
  let tx = 0;
  let ty = 0;

  switch (camera) {
    case "drift": {
      // Ken Burns lent : léger zoom + dérive horizontale
      scale = interpolate(p, [0, 1], [1.02, 1.08]);
      tx = interpolate(p, [0, 1], [-1.5, 1.5]);
      break;
    }
    case "zoom-in": {
      scale = interpolate(p, [0, 1], [1.0, 1.12]);
      break;
    }
    case "zoom-out": {
      scale = interpolate(p, [0, 1], [1.12, 1.0]);
      break;
    }
    case "punch-head": {
      // zoom rapide vers la tête au début (premiers ~12 frames), puis tenue
      const punch = interpolate(frame, [0, 12], [1.0, 1.16], {
        extrapolateRight: "clamp",
      });
      scale = punch;
      ty = interpolate(frame, [0, 12], [0, 7], { extrapolateRight: "clamp" });
      break;
    }
    case "static": {
      // jamais 100% figé : micro-respiration de cadre
      scale = 1.01 + 0.006 * Math.sin((frame / 30) * Math.PI);
      break;
    }
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
