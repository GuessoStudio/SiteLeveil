import React from "react";
import { AbsoluteFill } from "remotion";
import { Background, Vignette } from "./decor/Background";
import { Reflection } from "./decor/Reflection";
import { PetitEveille } from "./character/PetitEveille";
import { resolveAccent } from "./data/palette";
import { MODES } from "./data/emotions";
import type { PoseName } from "./data/petit-eveille";
import type { EmotionName, ModeName } from "./data/emotions";

// Couverture statique (miniature TikTok 1080x1920). Même look « dark premium »
// que la vidéo : décor + Le Petit Éveillé + titre accrocheur + marque.
// Rendre avec `remotion still src/Root.tsx Cover out/<slug>-cover.png --props=...`
export type CoverProps = {
  eyebrow?: string; // petit label au-dessus du titre (couleur accent)
  title: string; // titre principal ; "\n" = saut de ligne
  accent: string; // clé de palette ou hex
  pose: PoseName;
  emotion: EmotionName;
  mode: ModeName;
  badge?: string; // pastille pilier en haut
  brand?: string; // marque en bas (défaut leveilmental.fr)
  characterHeightPct?: number; // taille du perso (défaut 40 ; vidéo = 25)
  characterTopPct?: number; // position verticale du perso (défaut 40)
  badgeTopPct?: number; // position de la pastille (défaut 5.5)
  titleTopPct?: number; // position du bloc titre (défaut 11)
  floorTopPct?: number; // position du sol (défaut LAYOUT.floorTopPct)
};

export const Cover: React.FC<CoverProps> = ({
  eyebrow,
  title,
  accent,
  pose,
  emotion,
  mode,
  badge = "PSYCHOLOGIE",
  brand = "leveilmental.fr",
  // Défauts standard des couvertures : contenu descendu (tiers haut libre pour
  // éviter le crop UI des réseaux), perso plus grand calé sur un sol abaissé.
  characterHeightPct = 36,
  characterTopPct = 40,
  badgeTopPct = 17,
  titleTopPct = 22,
  floorTopPct = 71,
}) => {
  const acc = resolveAccent(accent);
  const tint = MODES[mode].tint;
  const lines = title.split("\n");

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0720", fontFamily: "Inter, system-ui, sans-serif" }}>
      <Background tint={tint} floorTopPct={floorTopPct} />
      <Reflection pose={pose} tint={tint} heightPct={characterHeightPct} topPct={characterTopPct} />
      <PetitEveille frame={0} fps={30} pose={pose} emotion={emotion} mode={mode} heightPct={characterHeightPct} topPct={characterTopPct} />
      <Vignette />

      {/* Pastille pilier */}
      <div
        style={{
          position: "absolute",
          top: `${badgeTopPct}%`,
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 22px",
          borderRadius: 999,
          background: acc,
          color: "#0a0720",
          fontWeight: 800,
          fontSize: 26,
          letterSpacing: "0.12em",
        }}
      >
        {badge}
      </div>

      {/* Titre */}
      <div style={{ position: "absolute", top: `${titleTopPct}%`, left: 0, right: 0, padding: "0 6%", textAlign: "center" }}>
        {eyebrow ? (
          <div
            style={{
              color: acc,
              fontWeight: 800,
              fontSize: 44,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 12,
              textShadow: `0 0 24px ${acc}`,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        {lines.map((ln, i) => (
          <div
            key={i}
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: 116,
              lineHeight: 1.0,
              letterSpacing: "0.005em",
              textTransform: "uppercase",
              textShadow: `0 0 54px ${acc}, 0 0 20px ${acc}, 0 4px 26px rgba(0,0,0,.8)`,
            }}
          >
            {ln}
          </div>
        ))}
      </div>

      {/* Marque */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#EDEBFA",
          fontWeight: 700,
          fontSize: 36,
          letterSpacing: "0.08em",
          textShadow: "0 2px 16px rgba(0,0,0,.85)",
        }}
      >
        {brand}
      </div>
    </AbsoluteFill>
  );
};
