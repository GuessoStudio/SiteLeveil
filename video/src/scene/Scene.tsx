import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Background, Vignette } from "../decor/Background";
import { Reflection } from "../decor/Reflection";
import { PetitEveille } from "../character/PetitEveille";
import { CameraRig } from "./CameraRig";
import { KeywordText } from "./KeywordText";
import { Stars } from "../fx/Stars";
import { Particles } from "../fx/Particles";
import { Burst } from "../fx/Burst";
import { SceneFlash } from "../fx/SceneFlash";
import { MODES } from "../data/emotions";
import type { Position, ResolvedScene } from "../data/script";

const POSITION_OFFSET: Record<Position, string> = {
  left: "translateX(-16%)",
  center: "translateX(0%)",
  right: "translateX(16%)",
};

export const Scene: React.FC<{ scene: ResolvedScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const tint = MODES[scene.mode].tint;

  return (
    <AbsoluteFill>
      {/* décor + perso : soumis à la caméra */}
      <CameraRig camera={scene.camera} durationInFrames={scene.durationInFrames}>
        <Background tint={tint} />
        <Stars tint={tint} />
        <AbsoluteFill style={{ transform: POSITION_OFFSET[scene.position] }}>
          <Reflection pose={scene.pose} tint={tint} />
          <PetitEveille
            frame={frame}
            fps={fps}
            pose={scene.pose}
            emotion={scene.emotion}
            mode={scene.mode}
          />
          <Particles mode={scene.mode} />
          <Burst burst={scene.burst} mode={scene.mode} />
        </AbsoluteFill>
        <Vignette />
      </CameraRig>

      <KeywordText keyword={scene.keyword} subtitle={scene.subtitle} accent={scene.accent} />
      <SceneFlash accent={scene.accent} />
    </AbsoluteFill>
  );
};
