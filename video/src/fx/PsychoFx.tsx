import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Moteur PsychoFx : effets psychologiques en overlays plein écran auto-suffisants
// (masques, veils, balayages). Tier 2 — variantes légères qui n'ont pas besoin de
// particules. tunnel_vision, attention_spotlight, spotlight_pressure, ego_depletion,
// reset_breath, conformity_wave, goal_beacon, momentum_trail.
export const PSYCHO_FX = new Set([
  "tunnel_vision",
  "attention_spotlight",
  "spotlight_pressure",
  "ego_depletion",
  "reset_breath",
  "conformity_wave",
  "goal_beacon",
  "momentum_trail",
]);

export const PsychoFx: React.FC<{
  fx: string;
  accent: string;
  durationInFrames: number;
}> = ({ fx, accent, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], { extrapolateRight: "clamp" });
  const intro = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  switch (fx) {
    case "tunnel_vision": {
      // le champ de vision se resserre (biais de focus / vision en tunnel)
      const clear = interpolate(p, [0, 1], [68, 26]);
      return (
        <AbsoluteFill
          style={{
            background: `radial-gradient(circle at 50% 56%, transparent ${clear - 12}%, rgba(0,0,0,.88) ${clear}%)`,
            opacity: intro,
          }}
        />
      );
    }

    case "attention_spotlight": {
      // un seul point éclairé, le reste sombre ; le spot se déplace lentement
      const hx = 50 + 22 * Math.sin((frame / fps) * 0.8);
      const hy = 54 + 8 * Math.cos((frame / fps) * 0.6);
      return (
        <AbsoluteFill
          style={{
            background: `radial-gradient(circle at ${hx}% ${hy}%, transparent 12%, rgba(0,0,0,.82) 30%)`,
            opacity: intro,
          }}
        />
      );
    }

    case "spotlight_pressure": {
      // projecteur dur et froid d'en haut (pression sociale, jugement)
      return (
        <AbsoluteFill style={{ opacity: intro }}>
          <AbsoluteFill style={{ background: "rgba(2,2,10,.55)" }} />
          <AbsoluteFill
            style={{
              background:
                "radial-gradient(ellipse 26% 40% at 50% 40%, rgba(214,224,255,.5) 0%, transparent 60%)",
              mixBlendMode: "screen",
            }}
          />
        </AbsoluteFill>
      );
    }

    case "ego_depletion": {
      // l'énergie se vide : un voile sombre monte du bas sur le plan
      const veil = interpolate(p, [0, 1], [0, 0.5]);
      const rise = interpolate(p, [0, 1], [100, 38]);
      return (
        <AbsoluteFill
          style={{
            background: `linear-gradient(0deg, rgba(2,1,8,.85) ${rise - 30}%, transparent ${rise + 10}%)`,
            opacity: veil * 1.6,
          }}
        />
      );
    }

    case "reset_breath": {
      // respiration : lueur douce qui enfle puis reflue sur ~4 s (cohérence)
      const t = ((frame / fps) % 4) / 4;
      const breath = 0.5 - 0.5 * Math.cos(t * Math.PI * 2);
      return (
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 70% 55% at 50% 56%, ${accent}, transparent 62%)`,
            opacity: (0.08 + 0.18 * breath) * intro,
            mixBlendMode: "screen",
          }}
        />
      );
    }

    case "conformity_wave": {
      // une vague de couleur balaie l'écran (effet de groupe), en boucle
      const sweep = (((frame / fps) % 2.4) / 2.4) * 130 - 15;
      return (
        <AbsoluteFill
          style={{
            background: `linear-gradient(90deg, transparent ${sweep - 14}%, ${accent} ${sweep}%, transparent ${sweep + 14}%)`,
            opacity: 0.35 * intro,
            mixBlendMode: "screen",
          }}
        />
      );
    }

    case "goal_beacon": {
      // phare en haut (objectif, cap) qui pulse + halo descendant doux
      const pulse = 0.6 + 0.4 * Math.sin((frame / 12) * Math.PI);
      return (
        <AbsoluteFill style={{ opacity: intro, mixBlendMode: "screen" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "12%",
              width: "9%",
              height: "5%",
              transform: "translate(-50%,-50%)",
              background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
              opacity: pulse,
              filter: "blur(2px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "12%",
              width: "44%",
              height: "40%",
              transform: "translateX(-50%)",
              background: `linear-gradient(180deg, ${accent}, transparent 75%)`,
              opacity: 0.16 * pulse,
              clipPath: "polygon(38% 0, 62% 0, 100% 100%, 0 100%)",
            }}
          />
        </AbsoluteFill>
      );
    }

    case "momentum_trail": {
      // traînée de comète derrière le perso, de plus en plus longue (élan).
      // Ancrée à hauteur du torse (~63%) pour passer DERRIÈRE le corps, pas en
      // travers de la tête (tête ≈ 56,5%).
      const len = interpolate(p, [0, 1], [6, 46]);
      const trailY = "63%";
      return (
        <AbsoluteFill style={{ opacity: intro, mixBlendMode: "screen" }}>
          <div
            style={{
              position: "absolute",
              left: `${50 - len}%`,
              top: trailY,
              width: `${len}%`,
              height: "3%",
              transform: "translateY(-50%)",
              background: `linear-gradient(90deg, transparent, ${accent})`,
              filter: "blur(4px)",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: trailY,
              width: "4%",
              height: "4%",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 18px ${accent}`,
            }}
          />
        </AbsoluteFill>
      );
    }

    default:
      return null;
  }
};
