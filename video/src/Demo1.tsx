import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Background, Vignette } from "./decor/Background";
import { Reflection } from "./decor/Reflection";
import { PetitEveille } from "./character/PetitEveille";
import { MODES } from "./data/emotions";

// P1 — validation : le perso en mode neuro + émotion insight, frame-driven.
// (spin tête 4s + halo qui pulse + bounce du corps, sur le décor complet.)
export const Demo1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const tint = MODES.neuro.tint;

  return (
    <AbsoluteFill>
      <Background tint={tint} />
      <Reflection pose="point" tint={tint} />
      <PetitEveille frame={frame} fps={fps} pose="point" emotion="insight" mode="neuro" />
      <Vignette />
    </AbsoluteFill>
  );
};
