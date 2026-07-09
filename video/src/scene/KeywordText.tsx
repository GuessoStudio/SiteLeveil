import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Mot-clé géant en haut de l'écran (la « claque » visuelle). Le texte parlé est
// porté par le karaoké CapCut au centre/bas → KeywordText ne rend PLUS de
// sous-titre explicatif (évite la surcharge : 1 couche = 1 job).
//
// Animation par défaut : pop spring + le mot s'allume dans sa couleur d'accent
// puis vire au blanc (glow d'accent conservé). keywordFx ajoute un effet
// ponctuel optionnel par plan : "glitch" (cerveau qui bug) ou "shake" (stress).
export const KeywordText: React.FC<{
  keyword?: string;
  accent: string;
  keywordFx?: string;
}> = ({ keyword, accent, keywordFx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 10, mass: 0.5, stiffness: 280 }, durationInFrames: 14 });
  const kwScale = interpolate(pop, [0, 1], [0, 1]);

  // Flash de couleur : le mot naît dans son accent puis devient blanc (~0,3 s).
  const igniteFrames = Math.round(fps * 0.3);
  const toWhite = interpolate(frame, [0, igniteFrames], [0, 1], { extrapolateRight: "clamp" });
  const kwColor = toWhite < 1 ? accent : "#fff";

  // Effets ponctuels.
  const GLITCH_X = [0, -8, 6, -4, 7, -3, 9, -5, 4, -6, 3, -2, 1, 0];
  const GLITCH_OP = [1, 0.35, 1, 0.65, 1, 0.5, 1, 0.8, 1, 1, 1, 1, 1, 1];
  let offsetX = 0;
  let opacity = frame < 1 ? 0 : 1;
  let chromatic = "";
  if (keywordFx === "glitch" && frame < GLITCH_X.length) {
    offsetX = GLITCH_X[frame];
    opacity = GLITCH_OP[frame];
    chromatic = `-3px 0 0 #ff2d55, 3px 0 0 #00e5ff, `; // aberration chromatique
  } else if (keywordFx === "shake") {
    const amp = interpolate(frame, [0, 12], [14, 0], { extrapolateRight: "clamp" });
    offsetX = Math.sin(frame * 1.7) * amp;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "12%",
        left: 0,
        right: 0,
        padding: "0 7%",
        textAlign: "center",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {keyword ? (
        <div
          style={{
            color: kwColor,
            fontWeight: 900,
            fontSize: 104,
            lineHeight: 1.02,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            transform: `translateX(${offsetX.toFixed(1)}px) scale(${kwScale.toFixed(3)})`,
            opacity,
            textShadow: `${chromatic}0 0 48px ${accent}, 0 0 18px ${accent}, 0 0 6px ${accent}, 0 4px 26px rgba(0,0,0,.7)`,
          }}
        >
          {keyword}
        </div>
      ) : null}
    </div>
  );
};
