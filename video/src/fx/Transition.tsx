import React from "react";
import { AbsoluteFill, interpolate, random, useCurrentFrame } from "remotion";

// Moteur Transition : ruptures plein écran jouées en DÉBUT de scène (canal
// "transition", ponctuel). flash_reverse, blackout, color_shift, static_noise.
// zoom_smash est géré par le CameraRig (mouvement caméra), pas ici → null.
export const Transition: React.FC<{ transition?: string; accent: string }> = ({
  transition,
  accent,
}) => {
  const frame = useCurrentFrame();
  if (!transition || transition === "none" || transition === "zoom_smash") return null;

  switch (transition) {
    case "flash_reverse": {
      // flash blanc franc puis disparition rapide (3-4 frames)
      if (frame > 4) return null;
      const opacity = interpolate(frame, [0, 1, 4], [1, 0.85, 0], { extrapolateRight: "clamp" });
      return <AbsoluteFill style={{ backgroundColor: "#FFFFFF", opacity }} />;
    }
    case "blackout": {
      if (frame > 8) return null;
      const opacity = interpolate(frame, [0, 6, 8], [1, 1, 0], { extrapolateRight: "clamp" });
      return <AbsoluteFill style={{ backgroundColor: "#000000", opacity }} />;
    }
    case "color_shift": {
      if (frame > 8) return null;
      const opacity = interpolate(frame, [0, 2, 8], [0, 0.65, 0], { extrapolateRight: "clamp" });
      return (
        <AbsoluteFill style={{ backgroundColor: accent, opacity, mixBlendMode: "screen" }} />
      );
    }
    case "static_noise": {
      // bandes horizontales qui « buggent » (TV cassée), 5 frames
      if (frame > 5) return null;
      const opacity = interpolate(frame, [0, 4, 5], [0.5, 0.4, 0], { extrapolateRight: "clamp" });
      const offset = random(`noise-${frame}`) * 4;
      return (
        <AbsoluteFill
          style={{
            opacity,
            background: `repeating-linear-gradient(0deg, rgba(255,255,255,.5) 0px, rgba(0,0,0,.5) ${1 + offset}px, transparent ${2 + offset}px, transparent 4px)`,
            mixBlendMode: "screen",
          }}
        />
      );
    }
    default:
      return null;
  }
};
