import React from "react";
import { LAYOUT } from "../data/layout";
import { COLORS, HEAD_SPIRAL, PIVOT, POSE_PATHS, TORSO_SPIRAL, VIEWBOX } from "../data/petit-eveille";
import type { PoseName } from "../data/petit-eveille";
import { EMOTIONS, MODES } from "../data/emotions";
import type { EmotionName, ModeName } from "../data/emotions";
import { bodyTransform, characterTransform, glowScale, spiralTransform } from "./anim";

type Props = {
  frame: number;
  fps: number;
  pose: PoseName;
  emotion: EmotionName;
  mode: ModeName;
  /** hauteur du perso en % de la hauteur du cadre (défaut : LAYOUT.characterHeightPct) */
  heightPct?: number;
};

// view-box transform helper (origine en coordonnées viewBox, comme dans le lab)
const vb = (x: number, y: number, transform: string): React.CSSProperties => ({
  transformBox: "view-box",
  transformOrigin: `${x}px ${y}px`,
  transform,
});

export const PetitEveille: React.FC<Props> = ({ frame, fps, pose, emotion, mode, heightPct = LAYOUT.characterHeightPct }) => {
  const emo = EMOTIONS[emotion];
  const m = MODES[mode];
  const lean = pose === "lean" ? -6 : 0;

  const headSpiralT = emo.headSpiral ? spiralTransform(frame, fps, emo.headSpiral) : "rotate(0deg)";
  const torsoSpiralT = emo.torsoSpiral ? spiralTransform(frame, fps, emo.torsoSpiral) : "rotate(0deg)";
  const headGlowS = emo.headGlow ? glowScale(frame, fps, emo.headGlow) : 1;
  const torsoGlowS = emo.torsoGlow ? glowScale(frame, fps, emo.torsoGlow) : 1;
  const bodyT = emo.body ? bodyTransform(frame, fps, emo.body) : "none";

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
      style={{
        position: "absolute",
        left: "50%",
        top: `${LAYOUT.characterTopPct}%`,
        height: `${heightPct}%`,
        width: "auto",
        transform: "translateX(-50%)",
        overflow: "visible",
      }}
      role="img"
      aria-label="Le Petit Éveillé"
    >
      <defs>
        <radialGradient id="halo">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip-head-spiral">
          <circle cx={PIVOT.head.x} cy={PIVOT.head.y} r="84" />
        </clipPath>
        <clipPath id="clip-torso-spiral">
          <rect x="133" y="240" width="134" height="185" rx="40" />
        </clipPath>
      </defs>

      <g style={vb(PIVOT.character.x, PIVOT.character.y, characterTransform(frame, fps, lean))}>
        <g style={vb(PIVOT.body.x, PIVOT.body.y, bodyT)}>
          <path
            d={POSE_PATHS[pose]}
            fill={COLORS.silhouetteFill}
            stroke={COLORS.stroke}
            strokeWidth={COLORS.strokeWidth}
            strokeLinejoin="round"
          />

          {/* torse */}
          <g clipPath="url(#clip-torso-spiral)">
            <path
              d={TORSO_SPIRAL}
              fill="none"
              stroke={COLORS.spiralStroke}
              strokeWidth={COLORS.spiralWidth}
              strokeLinecap="round"
              opacity={m.torsoSpiral}
              style={vb(PIVOT.torso.x, PIVOT.torso.y, torsoSpiralT)}
            />
          </g>
          <circle
            cx={PIVOT.torso.x}
            cy={PIVOT.torso.y}
            r="20"
            fill="url(#halo)"
            opacity={m.torsoGlow}
            style={vb(PIVOT.torso.x, PIVOT.torso.y, `scale(${torsoGlowS.toFixed(4)})`)}
          />
          <circle cx={PIVOT.torso.x} cy={PIVOT.torso.y} r="8" fill="#FFFFFF" opacity={m.torsoSpiral} />

          {/* tête */}
          <g clipPath="url(#clip-head-spiral)">
            <path
              d={HEAD_SPIRAL}
              fill="none"
              stroke={COLORS.spiralStroke}
              strokeWidth={COLORS.spiralWidth}
              strokeLinecap="round"
              opacity={m.headSpiral}
              style={vb(PIVOT.head.x, PIVOT.head.y, headSpiralT)}
            />
          </g>
          <circle
            cx={PIVOT.head.x}
            cy={PIVOT.head.y}
            r="24"
            fill="url(#halo)"
            opacity={m.headGlow}
            style={vb(PIVOT.head.x, PIVOT.head.y, `scale(${headGlowS.toFixed(4)})`)}
          />
          <circle cx={PIVOT.head.x} cy={PIVOT.head.y} r="8" fill="#FFFFFF" opacity={m.headSpiral} />
        </g>
      </g>
    </svg>
  );
};
