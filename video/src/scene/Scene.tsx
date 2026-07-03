import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Background, Vignette } from "../decor/Background";
import { Reflection } from "../decor/Reflection";
import { PetitEveille } from "../character/PetitEveille";
import { CameraRig } from "./CameraRig";
import { KeywordText } from "./KeywordText";
import { CreditTag } from "./CreditTag";
import { SplitScreen } from "../fx/SplitScreen";
import { Stars } from "../fx/Stars";
import { Particles } from "../fx/Particles";
import { Burst } from "../fx/Burst";
import { SceneFlash } from "../fx/SceneFlash";
import { FxOverlay } from "../fx/FxOverlay";
import { IconPop } from "../fx/IconPop";
import { DigitalTimer } from "../fx/DigitalTimer";
import { Transition } from "../fx/Transition";
import { SfxPlayer } from "../audio/SfxPlayer";
import { MODES } from "../data/emotions";
import type { Position, ResolvedScene } from "../data/script";

const POSITION_OFFSET: Record<Position, string> = {
  left: "translateX(-16%)",
  center: "translateX(0%)",
  right: "translateX(16%)",
};

export const Scene: React.FC<{ scene: ResolvedScene; sfxVolume?: Record<string, number>; globalTotal?: number }> = ({ scene, sfxVolume, globalTotal }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const tint = MODES[scene.mode].tint;

  return (
    <AbsoluteFill>
      {/* décor + perso : soumis à la caméra */}
      <CameraRig
        camera={scene.camera}
        transition={scene.transition}
        durationInFrames={scene.durationInFrames}
        globalFrom={scene.from}
        globalTotal={globalTotal}
      >
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
          <FxOverlay fx={scene.fx} accent={scene.accent} durationInFrames={scene.durationInFrames} />
          <IconPop icon={scene.icon} accent={scene.accent} />
          {scene.timer ? <DigitalTimer accent={scene.accent} /> : null}
          <Burst burst={scene.burst} mode={scene.mode} />
        </AbsoluteFill>
        <Vignette />
      </CameraRig>

      {scene.split ? <SplitScreen left={scene.split.left} right={scene.split.right} /> : null}
      <KeywordText keyword={scene.keyword} accent={scene.accent} keywordFx={scene.keywordFx} />
      {scene.credit ? <CreditTag credit={scene.credit} accent={scene.accent} /> : null}
      <SceneFlash accent={scene.accent} />
      <Transition transition={scene.transition} accent={scene.accent} />
      <SfxPlayer transition={scene.transition} fx={scene.fx} sfx={scene.sfx} volumeOverride={sfxVolume} />
    </AbsoluteFill>
  );
};
