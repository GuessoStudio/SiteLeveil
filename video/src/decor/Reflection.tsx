import React from "react";
import { POSE_PATHS, VIEWBOX } from "../data/petit-eveille";
import type { PoseName } from "../data/petit-eveille";

// Reflet au sol : silhouette miroir teintée, floue et très transparente
// (lab : fill var(--tint), scaleY(-1), opacity .14, blur 4). Suit la pose.
export const Reflection: React.FC<{ pose: PoseName; tint: string; heightPct?: number }> = ({
  pose,
  tint,
  heightPct = 30,
}) => (
  <svg
    viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
    style={{
      position: "absolute",
      left: "50%",
      top: "50.6%",
      height: `${heightPct}%`,
      width: "auto",
      transform: "translateX(-50%) scaleY(-1)",
      transformOrigin: "50% 82%",
      opacity: 0.14,
      filter: "blur(4px)",
    }}
    aria-hidden="true"
  >
    <path d={POSE_PATHS[pose]} fill={tint} stroke="none" />
  </svg>
);
