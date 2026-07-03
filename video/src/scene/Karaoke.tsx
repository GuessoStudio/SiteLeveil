import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { LAYOUT } from "../data/layout";

// Karaoké natif : affiche le `subtitle` du plan dans la bande caption-safe, par
// groupes de 3-4 mots, et illumine le mot actif dans la COULEUR D'ACCENT du plan
// (+ contour blanc pour la lisibilité). Timing proportionnel à la longueur des
// mots sur la durée du plan (les plans étant déjà calés sur les pauses, l'erreur
// reste dans un petit groupe → invisible). Style « surlignage » : tout le groupe
// visible en blanc atténué, mot actif en avant.
const MAX_PER_CHUNK = 4;

export const Karaoke: React.FC<{ subtitle: string; accent: string; durationInFrames: number }> = ({
  subtitle,
  accent,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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

  // groupe (chunk) contenant le mot actif
  const chunkIdx = Math.floor(active / MAX_PER_CHUNK);
  const from = chunkIdx * MAX_PER_CHUNK;
  const chunk = words.slice(from, from + MAX_PER_CHUNK);

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
