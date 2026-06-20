import type { ModeName } from "./emotions";

// Config d'émission des particules par mode (reprise du lab build-scene.mjs).
// Origines en % du cadre : tête ~56.5%, torse ~64% (x = 50%).
// angle en degrés, dist en % de la hauteur, dur en secondes.
export type EmitConf = {
  color: string;
  src: [number, number][];
  size: [number, number];
  durSec: [number, number];
  distPct: [number, number];
  angleDeg: [number, number];
  glow: number;
  count: number; // taille du pool déterministe
};

export const EMIT: Record<ModeName, EmitConf> = {
  neuro: {
    color: "#8fb0ff",
    src: [[50, 56.5]],
    size: [2, 4],
    durSec: [0.6, 1.1],
    distPct: [6, 13],
    angleDeg: [0, 360],
    glow: 7,
    count: 16,
  },
  emotions: {
    color: "#ff93c4",
    src: [[50, 64]],
    size: [3, 6],
    durSec: [2.2, 3.4],
    distPct: [10, 20],
    angleDeg: [248, 292],
    glow: 9,
    count: 14,
  },
  eveil: {
    color: "#b9a3ff",
    src: [
      [50, 56.5],
      [50, 64],
    ],
    size: [2, 5],
    durSec: [1.4, 2.6],
    distPct: [12, 26],
    angleDeg: [0, 360],
    glow: 8,
    count: 16,
  },
};
