import React from "react";
import { ZoneGlow, ZONE_GLOW } from "./ZoneGlow";
import { EmitField, EMIT_FIELD } from "./EmitField";
import { RadialWave, RADIAL_WAVE } from "./RadialWave";
import { SineWave, SINE_WAVE } from "./SineWave";
import { NodeGraph, NODE_GRAPH } from "./NodeGraph";
import { PsychoFx, PSYCHO_FX } from "./PsychoFx";

// Dispatcher des effets CONTINUS (champ "fx", collant). Aiguille vers le bon
// moteur paramétré selon le nom du fx. Les 6 moteurs génériques sont branchés ici.
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
  if (fx in SINE_WAVE) {
    return <SineWave fx={fx} accent={accent} durationInFrames={durationInFrames} />;
  }
  if (fx in NODE_GRAPH) {
    return <NodeGraph fx={fx} accent={accent} durationInFrames={durationInFrames} />;
  }
  if (PSYCHO_FX.has(fx)) {
    return <PsychoFx fx={fx} accent={accent} durationInFrames={durationInFrames} />;
  }

  return null;
};
