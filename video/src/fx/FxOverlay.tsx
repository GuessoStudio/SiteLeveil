import React from "react";
import { ZoneGlow, ZONE_GLOW } from "./ZoneGlow";
import { EmitField, EMIT_FIELD } from "./EmitField";
import { RadialWave, RADIAL_WAVE } from "./RadialWave";

// Dispatcher des effets CONTINUS (champ "fx", collant). Aiguille vers le bon
// moteur paramétré selon le nom du fx. Point d'extension : brancher ici les
// futurs moteurs (SineWave, NodeGraph).
export const FxOverlay: React.FC<{
  fx: string;
  accent: string;
  durationInFrames: number;
}> = ({ fx, accent, durationInFrames }) => {
  if (!fx || fx === "none") return null;

  if (fx in ZONE_GLOW) {
    return <ZoneGlow fx={fx} accent={accent} durationInFrames={durationInFrames} />;
  }
  if (fx in EMIT_FIELD) {
    return <EmitField fx={fx} accent={accent} durationInFrames={durationInFrames} />;
  }
  if (fx in RADIAL_WAVE) {
    return <RadialWave fx={fx} accent={accent} durationInFrames={durationInFrames} />;
  }

  // moteurs à venir : SineWave, NodeGraph
  return null;
};
