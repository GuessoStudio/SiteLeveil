import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const KeywordText: React.FC<{
  keyword?: string;
  subtitle?: string;
  accent: string;
}> = ({ keyword, subtitle, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 10, mass: 0.5, stiffness: 280 }, durationInFrames: 14 });
  const kwScale = interpolate(pop, [0, 1], [0, 1]);
  const kwOpacity = frame < 1 ? 0 : 1;

  const subPop = spring({ frame: Math.max(0, frame - 4), fps, config: { damping: 14, mass: 0.6, stiffness: 200 }, durationInFrames: 12 });
  const subScale = interpolate(subPop, [0, 1], [0.6, 1]);
  const subTy = interpolate(subPop, [0, 1], [18, 0]);
  const subOpacity = frame < 4 ? 0 : interpolate(subPop, [0, 0.3], [0, 1], { extrapolateRight: "clamp" });

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
            transform: `scale(${kwScale.toFixed(3)})`,
            opacity: kwOpacity,
            textShadow: `0 0 48px ${accent}, 0 0 18px ${accent}, 0 0 6px ${accent}, 0 4px 26px rgba(0,0,0,.7)`,
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
            transform: `scale(${subScale.toFixed(3)}) translateY(${subTy.toFixed(1)}px)`,
            opacity: subOpacity,
            textShadow: "0 2px 20px rgba(0,0,0,.85)",
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </div>
  );
};
