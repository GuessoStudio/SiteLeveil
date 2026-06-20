import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Texte géant centré dans le tiers supérieur (hors zone morte TikTok du bas, où
// iront les sous-titres CapCut). Le keyword « pop » avec un ressort + halo accent.
export const KeywordText: React.FC<{
  keyword?: string;
  subtitle?: string;
  accent: string;
}> = ({ keyword, subtitle, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 14, mass: 0.6 }, durationInFrames: 18 });
  const kwScale = interpolate(pop, [0, 1], [0.7, 1]);
  const kwOpacity = interpolate(pop, [0, 1], [0, 1]);
  const subOpacity = interpolate(frame, [6, 16], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        top: "9%",
        left: 0,
        right: 0,
        padding: "0 7%",
        textAlign: "center",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {keyword ? (
        <div
          style={{
            color: "#fff",
            fontWeight: 900,
            fontSize: 104,
            lineHeight: 1.02,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            transform: `scale(${kwScale})`,
            opacity: kwOpacity,
            textShadow: `0 0 38px ${accent}, 0 0 14px ${accent}, 0 4px 26px rgba(0,0,0,.55)`,
          }}
        >
          {keyword}
        </div>
      ) : null}
      {subtitle ? (
        <div
          style={{
            marginTop: keyword ? 26 : 0,
            color: "#EDEBFA",
            fontWeight: 600,
            fontSize: 46,
            lineHeight: 1.25,
            opacity: subOpacity,
            textShadow: "0 2px 16px rgba(0,0,0,.7)",
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </div>
  );
};
