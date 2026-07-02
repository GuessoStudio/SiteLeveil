import React from "react";
import { AbsoluteFill } from "remotion";
import { PetitEveille } from "./character/PetitEveille";
import { resolveAccent } from "./data/palette";
import { MODES } from "./data/emotions";
import type { PoseName } from "./data/petit-eveille";
import type { EmotionName, ModeName } from "./data/emotions";

// Bannière de chaîne YouTube (2560x1440). Tout le contenu utile (perso + texte)
// tient dans la ZONE DE SÉCURITÉ centrale 1235x338 (~26–74% en X, ~38–62% en Y),
// la seule garantie de s'afficher sur tous les appareils (mobile, desktop, TV).
export type BannerProps = {
  title: string; // ex "L'ÉVEIL\nMENTAL" ("\n" = saut de ligne)
  tagline: string;
  accent: string;
  pose: PoseName;
  emotion: EmotionName;
  mode: ModeName;
  brand?: string;
};

export const Banner: React.FC<BannerProps> = ({
  title,
  tagline,
  accent,
  pose,
  emotion,
  mode,
  brand = "leveilmental.fr",
}) => {
  const acc = resolveAccent(accent);
  const tint = MODES[mode].tint;
  const lines = title.split("\n");

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0720", fontFamily: "Inter, system-ui, sans-serif", overflow: "hidden" }}>
      {/* fond dégradé + halo d'accent centré */}
      <AbsoluteFill style={{ background: "linear-gradient(180deg,#0a0814 0%,#100c2a 50%,#060412 100%)" }} />
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 42% 62% at 50% 50%, ${tint}, transparent 62%)`, opacity: 0.55 }} />

      {/* Le Petit Éveillé, à gauche dans la zone de sécurité */}
      <AbsoluteFill style={{ transform: "translateX(-20%)" }}>
        <PetitEveille frame={0} fps={30} pose={pose} emotion={emotion} mode={mode} heightPct={22} topPct={39} />
      </AbsoluteFill>

      {/* Texte, à droite dans la zone de sécurité */}
      <div style={{ position: "absolute", left: "48%", top: "50%", transform: "translateY(-50%)", width: "25%" }}>
        {lines.map((ln, i) => (
          <div
            key={i}
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: 104,
              lineHeight: 1.0,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              textShadow: `0 0 50px ${acc}, 0 0 18px ${acc}, 0 4px 20px rgba(0,0,0,.7)`,
            }}
          >
            {ln}
          </div>
        ))}
        <div style={{ color: acc, fontWeight: 700, fontSize: 42, marginTop: 22, letterSpacing: "0.03em" }}>{tagline}</div>
        <div style={{ color: "#A8A3C7", fontWeight: 600, fontSize: 32, marginTop: 12, letterSpacing: "0.06em" }}>{brand}</div>
      </div>
    </AbsoluteFill>
  );
};
