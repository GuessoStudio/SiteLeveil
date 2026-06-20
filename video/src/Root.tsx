import { Composition, registerRoot } from "remotion";
import { Smoke } from "./Smoke";
import { Demo1 } from "./Demo1";
import { Video } from "./Video";
import type { Script } from "./data/script";
import { totalDurationInFrames } from "./data/script";
import habitudes from "./data/scripts/habitudes.json";

const defaultScript = habitudes as Script;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Smoke-test P0 : composition triviale d'1 s pour valider Chromium + ffmpeg */}
      <Composition
        id="Smoke"
        component={Smoke}
        durationInFrames={30}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* P1 : perso frame-driven (neuro + insight) sur le décor complet */}
      <Composition
        id="Demo1"
        component={Demo1}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* Composition principale pilotée par JSON (--props=<script>.json) */}
      <Composition
        id="Habitudes"
        component={Video}
        defaultProps={defaultScript}
        calculateMetadata={({ props }) => {
          const s = props as Script;
          return {
            durationInFrames: totalDurationInFrames(s),
            fps: s.fps,
            width: s.width,
            height: s.height,
          };
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
