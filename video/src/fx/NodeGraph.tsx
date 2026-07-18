import React from "react";
import { AbsoluteFill, interpolate, random, useCurrentFrame, useVideoConfig } from "remotion";

// Moteur NodeGraph : nœuds qui apparaissent et se relient progressivement.
// Modes : branch (arbre qui pousse), mesh (réseau interconnecté), chain (maillons
// en séquence). Couvre synapse_fire, neuroplasticity, social_network, habit_chain,
// trust_bridge. SVG en px composition → tracé net et aspect correct.
type Mode = "branch" | "mesh" | "chain";
type Anchor = "head" | "around" | "center";

const ANCHORS: Record<Anchor, [number, number]> = {
  head: [0.5, 0.565],
  around: [0.5, 0.58],
  center: [0.5, 0.6],
};

type GraphConf = {
  mode: Mode;
  anchor: Anchor;
  nodeCount: number;
  spreadPct: number; // % largeur
  buildSec: number;  // durée de construction
  color?: string;    // sinon = accent
  flat?: boolean;    // chain horizontal (trust_bridge)
  flicker?: boolean; // arcs électriques (synapse_fire)
};

export const NODE_GRAPH: Record<string, GraphConf> = {
  synapse_fire: { mode: "mesh", anchor: "head", nodeCount: 7, spreadPct: 22, buildSec: 1.0, flicker: true },
  neuroplasticity: { mode: "branch", anchor: "head", nodeCount: 11, spreadPct: 30, buildSec: 2.2 },
  social_network: { mode: "mesh", anchor: "around", nodeCount: 9, spreadPct: 32, buildSec: 2.0 },
  habit_chain: { mode: "chain", anchor: "around", nodeCount: 6, spreadPct: 30, buildSec: 1.8 },
  trust_bridge: { mode: "chain", anchor: "center", nodeCount: 5, spreadPct: 34, buildSec: 1.6, flat: true },
};

type Node = { x: number; y: number; parent: number | null };

export const NodeGraph: React.FC<{
  fx: string;
  accent: string;
  durationInFrames: number;
}> = ({ fx, accent, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const conf = NODE_GRAPH[fx];
  if (!conf) return null;

  const color = conf.color ?? accent;
  const [ax, ay] = ANCHORS[conf.anchor];
  const cx = ax * width;
  const cy = ay * height;
  const spread = (conf.spreadPct / 100) * width;
  const N = conf.nodeCount;
  const r = (i: number, k: number) => random(`${fx}-${i}-${k}`);

  // positions + parenté selon le mode
  const nodes: Node[] = [];
  for (let i = 0; i < N; i++) {
    if (conf.mode === "chain") {
      const f = N === 1 ? 0 : i / (N - 1);
      const x = cx + interpolate(f, [0, 1], [-spread, spread]);
      const bump = conf.flat ? 0 : Math.sin(Math.PI * f) * spread * 0.45;
      nodes.push({ x, y: cy - bump, parent: i === 0 ? null : i - 1 });
    } else if (conf.mode === "branch") {
      if (i === 0) {
        nodes.push({ x: cx, y: cy, parent: null });
      } else {
        const parent = Math.floor((i - 1) / 2);
        const p = nodes[parent];
        const ang = (-Math.PI / 2) + (r(i, 0) - 0.5) * 1.8; // biais vers le haut
        const len = spread * (0.4 + r(i, 1) * 0.5);
        nodes.push({ x: p.x + Math.cos(ang) * len, y: p.y + Math.sin(ang) * len, parent });
      }
    } else {
      // mesh : positions autour de l'ancre, reliées au plus proche déjà placé
      if (i === 0) {
        nodes.push({ x: cx, y: cy, parent: null });
      } else {
        const ang = r(i, 0) * Math.PI * 2;
        const len = spread * (0.35 + r(i, 1) * 0.65);
        const x = cx + Math.cos(ang) * len;
        const y = cy + Math.sin(ang) * len * 0.8;
        let best = 0;
        let bestD = Infinity;
        for (let j = 0; j < i; j++) {
          const d = (nodes[j].x - x) ** 2 + (nodes[j].y - y) ** 2;
          if (d < bestD) { bestD = d; best = j; }
        }
        nodes.push({ x, y, parent: best });
      }
    }
  }

  const buildFrames = Math.min(durationInFrames * 0.6, conf.buildSec * fps);
  const nodeSize = Math.max(4, width * 0.007);

  return (
    <AbsoluteFill style={{ mixBlendMode: "screen", pointerEvents: "none" }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        {/* arêtes : grandissent du parent vers l'enfant à mesure qu'il apparaît */}
        {nodes.map((n, i) => {
          if (n.parent === null) return null;
          const p = nodes[n.parent];
          const appearAt = (i / N) * buildFrames;
          const prog = interpolate(frame, [appearAt, appearAt + 0.3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          if (prog <= 0) return null;
          const ex = p.x + (n.x - p.x) * prog;
          const ey = p.y + (n.y - p.y) * prog;
          const flick = conf.flicker ? (random(`f-${i}-${Math.floor(frame / 3)}`) > 0.4 ? 1 : 0.35) : 1;
          return (
            <line
              key={`e-${i}`}
              x1={p.x} y1={p.y} x2={ex} y2={ey}
              stroke={color}
              strokeWidth={conf.flicker ? 2 : 2.5}
              opacity={0.6 * prog * flick}
              style={{ filter: `drop-shadow(0 0 5px ${color})` }}
            />
          );
        })}
        {/* nœuds : apparaissent en décalé puis pulsent doucement */}
        {nodes.map((n, i) => {
          const appearAt = (i / N) * buildFrames;
          const prog = interpolate(frame, [appearAt, appearAt + 0.25 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          if (prog <= 0) return null;
          const pulse = 0.6 + 0.4 * Math.sin(frame / 14 + i);
          return (
            <circle
              key={`n-${i}`}
              cx={n.x} cy={n.y}
              r={nodeSize * (0.7 + 0.3 * prog)}
              fill={color}
              opacity={0.85 * prog * pulse}
              style={{ filter: `drop-shadow(0 0 6px ${color})` }}
            />
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
