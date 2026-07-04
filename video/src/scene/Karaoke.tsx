import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { LAYOUT } from "../data/layout";
import type { WordTiming } from "../data/script";

// Karaoké natif : illumine le mot parlé dans la COULEUR D'ACCENT du plan
// (+ contour noir pour la lisibilité), par groupes de 3-4 mots dans la bande
// caption-safe.
//
// Deux modes de calage :
//  1. FRAME-PERFECT — si `words` est fourni (timestamps au mot produits par
//     scripts/transcribe.py). On garde les mots dont le temps tombe dans la
//     fenêtre absolue du plan et on surligne selon le vrai temps parlé.
//  2. PROPORTIONNEL (repli) — sinon, on répartit les mots du `subtitle`
//     proportionnellement à leur longueur sur la durée du plan (les plans étant
//     calés sur les pauses, l'erreur reste dans un petit groupe).
const MAX_PER_CHUNK = 4;

export const Karaoke: React.FC<{
  subtitle?: string;
  accent: string;
  durationInFrames: number;
  words?: WordTiming[];
  sceneFrom?: number;
}> = ({ subtitle, accent, durationInFrames, words, sceneFrom }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Choix du mode : timings au mot si dispo ET si des mots tombent dans ce plan ---
  const timed = resolveTimed(words, sceneFrom ?? 0, durationInFrames, fps, frame);
  const proportional = timed ? null : resolveProportional(subtitle, durationInFrames, frame);

  const resolved = timed ?? proportional;
  if (!resolved || resolved.words.length === 0) return null;
  const { words: displayWords, active } = resolved;

  // groupe (chunk) contenant le mot actif
  const chunkIdx = Math.floor(active / MAX_PER_CHUNK);
  const from = chunkIdx * MAX_PER_CHUNK;
  const chunk = displayWords.slice(from, from + MAX_PER_CHUNK);

  const appear = spring({ frame, fps, config: { damping: 18 }, durationInFrames: 8 });

  return (
    <div
      style={{
        position: "absolute",
        top: `${(LAYOUT.captionSafe.topPct + LAYOUT.captionSafe.bottomPct) / 2 - 4}%`,
        left: 0,
        right: 0,
        padding: "0 7%",
        textAlign: "center",
        fontFamily: "Inter, 'Helvetica Neue', Arial, system-ui, sans-serif",
        opacity: appear,
      }}
    >
      <p style={{ margin: 0, lineHeight: 1.3, fontSize: 56, fontWeight: 800, display: "flex", flexWrap: "wrap", justifyContent: "center", columnGap: "0.18em", rowGap: "0.15em" }}>
        {chunk.map((w, i) => {
          const isActive = from + i === active;
          return (
            <span
              key={i}
              style={{
                color: isActive ? accent : "#FFFFFF",
                opacity: isActive ? 1 : 0.55,
                transform: isActive ? "scale(1.08)" : "scale(1)",
                textShadow: isActive
                  ? `0 0 18px ${accent}, -2px 0 0 #000, 2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 0 3px 12px rgba(0,0,0,.9)`
                  : "-2px 0 0 #000, 2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 0 3px 12px rgba(0,0,0,.9)",
              }}
            >
              {w}
            </span>
          );
        })}
      </p>
    </div>
  );
};

type Resolved = { words: string[]; active: number };

// Mode frame-perfect : mots dont la fenêtre temporelle recoupe le plan courant.
function resolveTimed(
  words: WordTiming[] | undefined,
  sceneFrom: number,
  durationInFrames: number,
  fps: number,
  frame: number,
): Resolved | null {
  if (!words || words.length === 0) return null;

  const sceneStart = sceneFrom;
  const sceneEnd = sceneFrom + durationInFrames;

  // mots parlés pendant ce plan (chevauchement de la fenêtre)
  const inScene = words
    .map((w) => ({ w: w.w, startF: Math.round(w.start * fps), endF: Math.round(w.end * fps) }))
    .filter((w) => w.endF > sceneStart && w.startF < sceneEnd);

  if (inScene.length === 0) return null;

  const absFrame = sceneFrom + frame; // useCurrentFrame est relatif au plan (Series.Sequence)

  // mot actif = dernier mot déjà commencé ; dans un silence, on garde le précédent
  let active = 0;
  for (let i = 0; i < inScene.length; i++) {
    if (inScene[i].startF <= absFrame) active = i;
    else break;
  }

  return { words: inScene.map((w) => w.w), active };
}

// Mode proportionnel (repli) : répartition par longueur de mot sur la durée du plan.
function resolveProportional(
  subtitle: string | undefined,
  durationInFrames: number,
  frame: number,
): Resolved | null {
  if (!subtitle) return null;
  const words = subtitle.trim().replace(/\s+/g, " ").split(" ").filter(Boolean);
  if (words.length === 0) return null;

  // poids = longueur alphabétique (min 3) → un mot long reste affiché plus longtemps
  const weights = words.map((w) => Math.max(3, w.replace(/[^0-9A-Za-zÀ-ÿ]/g, "").length));
  const total = weights.reduce((a, b) => a + b, 0);
  const spans: Array<[number, number]> = [];
  let acc = 0;
  for (const w of weights) {
    const start = acc / total;
    acc += w;
    spans.push([start, acc / total]);
  }

  const t = Math.min(0.999, Math.max(0, frame / durationInFrames));
  let active = spans.findIndex(([s, e]) => t >= s && t < e);
  if (active < 0) active = words.length - 1;

  return { words, active };
}
