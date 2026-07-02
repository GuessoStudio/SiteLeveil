import { Composition, registerRoot, Still } from "remotion";
import { Smoke } from "./Smoke";
import { Demo1 } from "./Demo1";
import { Video } from "./Video";
import { Cover } from "./Cover";
import type { CoverProps } from "./Cover";
import { Banner } from "./Banner";
import type { BannerProps } from "./Banner";
import type { Script } from "./data/script";
import { totalDurationInFrames } from "./data/script";
import habitudes from "./data/scripts/habitudes.json";

const defaultScript = habitudes as Script;

const defaultCover: CoverProps = {
  eyebrow: "Ton anxiété",
  title: "CE N'EST PAS\nL'AMYGDALE",
  accent: "neuro",
  pose: "point",
  emotion: "insight",
  mode: "neuro",
  badge: "PSYCHOLOGIE",
  brand: "leveilmental.fr",
};

const defaultBanner: BannerProps = {
  title: "L'ÉVEIL\nMENTAL",
  tagline: "Neurosciences appliquées",
  accent: "eveil",
  pose: "open",
  emotion: "eveil",
  mode: "eveil",
  brand: "leveilmental.fr",
};

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
      {/* Couverture / miniature TikTok (still). --props=<slug>.cover.json */}
      <Still
        id="Cover"
        component={Cover}
        defaultProps={defaultCover}
        width={1080}
        height={1920}
      />
      {/* Bannière de chaîne YouTube (still 2560x1440). --props=banner.json */}
      <Still
        id="Banner"
        component={Banner}
        defaultProps={defaultBanner}
        width={2560}
        height={1440}
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
