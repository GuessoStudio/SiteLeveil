import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

// Moteur SineWave : ondes sinusoïdales tracées en SVG, recalculées par frame.
// Couvre les ondes cérébrales alpha/beta/gamma + serotonin_flow. Le viewBox suit
// la composition (px) → tracé net, aspect correct, indépendant de la résolution.
type Frequency = "low" | "med" | "high" | "ultra";

const FREQ: Record<Frequency, number> = {
  low: 1.4,
  med: 3,
  high: 6,
  ultra: 10,
};

type WaveConf = {
  frequency: Frequency;
  amplitude: number; // % hauteur
  speed: number;     // vitesse de défilement
  count: number;     // ondes empilées
  color?: string;    // sinon = accent
  flash?: boolean;   // flash bref (gamma = insight)
};

export const SINE_WAVE: Record<string, WaveConf> = {
  brainwave_alpha: { frequency: "low", amplitude: 9, speed: 2, count: 2, color: "#4ECDC4" },
  brainwave_beta: { frequency: "high", amplitude: 4, speed: 6, count: 3, color: "#6c7bff" },
  brainwave_gamma: { frequency: "ultra", amplitude: 4, speed: 9, count: 3, color: "#FFD36B", flash: true },
  serotonin_flow: { frequency: "low", amplitude: 7, speed: 1.6, count: 3, color: "#7FE6C4" },
};

export const SineWave: React.FC<{
  fx: string;
  accent: string;
  durationInFrames: number;
}> = ({ fx, accent }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const conf = SINE_WAVE[fx];
  if (!conf) return null;

  const color = conf.color ?? accent;
  const freq = FREQ[conf.frequency];
  const ampPx = (conf.amplitude / 100) * height;
  const midY = height * 0.58; // centré sur le perso
  const SAMPLES = 60;

  // construit le path d'une onde décalée verticalement et en phase
  const buildPath = (rowOffset: number, phase: number): string => {
    let d = "";
    for (let s = 0; s <= SAMPLES; s++) {
      const x = (s / SAMPLES) * width;
      const y =
        midY + rowOffset +
        Math.sin((s / SAMPLES) * Math.PI * 2 * freq + (frame * conf.speed) / 10 + phase) * ampPx;
      d += `${s === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    return d;
  };

  const intro = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp" });
  const flash = conf.flash ? 0.5 + 0.5 * Math.sin((frame / 4) * Math.PI) : 1;
  const baseOpacity = 0.5 * intro * (conf.flash ? 0.6 + 0.4 * flash : 1);

  return (
    <AbsoluteFill style={{ mixBlendMode: "screen", pointerEvents: "none" }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        {new Array(conf.count).fill(0).map((_, k) => {
          const rowOffset = (k - (conf.count - 1) / 2) * ampPx * 1.6;
          const opacity = baseOpacity * (1 - k * 0.18);
          return (
            <path
              key={k}
              d={buildPath(rowOffset, k * 0.8)}
              fill="none"
              stroke={color}
              strokeWidth={conf.frequency === "ultra" ? 2 : 3}
              strokeLinecap="round"
              opacity={opacity}
              style={{ filter: `drop-shadow(0 0 6px ${color})` }}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
