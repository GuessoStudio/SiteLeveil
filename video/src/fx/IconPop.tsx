import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { LAYOUT } from "../data/layout";
import { ICONS, ICON_VIEWBOX } from "../data/icons";

// Position verticale de la tête, dérivée du layout (centre tête ≈ 19,6% du viewBox
// 400x720). Ainsi l'icône reste calée sur la tête même si on bouge le perso.
const HEAD_CENTER_PCT = LAYOUT.characterTopPct + 0.196 * LAYOUT.characterHeightPct;
const ICON_CENTER_PCT = HEAD_CENTER_PCT - 13; // remontée dans l'espace libre (~30%)
const CONNECTOR_TOP_PCT = ICON_CENTER_PCT + 3; // sous l'icône
const CONNECTOR_HEIGHT_PCT = HEAD_CENTER_PCT - 3 - CONNECTOR_TOP_PCT; // jusqu'au haut de la tête

// Moteur IconPop : une icône line-art surgit au-dessus de la tête, reliée par un
// fil de synapse, traitée Dark Premium (trait blanc + lueur d'accent). L'icône
// est une extension du perso (pas une icône volante). Champ JSON ponctuel "icon".
export const IconPop: React.FC<{ icon?: string; accent: string }> = ({ icon, accent }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (!icon || !(icon in ICONS)) return null;

  // pop ressort (scale 0 → léger dépassement → 1)
  const pop = spring({ frame, fps, config: { damping: 11, mass: 0.6, stiffness: 220 }, durationInFrames: 16 });
  const scale = interpolate(pop, [0, 1], [0, 1]);
  // flottement doux une fois posée
  const floatY = 4 * Math.sin((frame / fps) * 1.4);
  // fil connecteur : se trace après l'apparition de l'icône
  const lineGrow = spring({ frame: Math.max(0, frame - 4), fps, config: { damping: 16 }, durationInFrames: 12 });

  const iconSize = "11%"; // % largeur du cadre

  return (
    <>
      {/* fil de synapse icône → tête */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: `${CONNECTOR_TOP_PCT}%`,
          width: 2,
          height: `${CONNECTOR_HEIGHT_PCT}%`,
          transform: `translateX(-50%) scaleY(${lineGrow.toFixed(3)})`,
          transformOrigin: "top",
          background: `linear-gradient(180deg, ${accent}, transparent)`,
          boxShadow: `0 0 6px ${accent}`,
          opacity: 0.8,
        }}
      />
      {/* icône + halo */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: `${ICON_CENTER_PCT}%`,
          width: iconSize,
          aspectRatio: "1 / 1",
          transform: `translate(-50%, calc(-50% + ${floatY.toFixed(1)}px)) scale(${scale.toFixed(3)})`,
        }}
      >
        {/* halo d'accent derrière */}
        <div
          style={{
            position: "absolute",
            inset: "-30%",
            background: `radial-gradient(circle, ${accent} 0%, transparent 68%)`,
            opacity: 0.35,
            filter: "blur(4px)",
          }}
        />
        {/* icône line-art */}
        <svg
          viewBox={ICON_VIEWBOX}
          width="100%"
          height="100%"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "relative", filter: `drop-shadow(0 0 7px ${accent})` }}
          dangerouslySetInnerHTML={{ __html: ICONS[icon] }}
        />
      </div>
    </>
  );
};
