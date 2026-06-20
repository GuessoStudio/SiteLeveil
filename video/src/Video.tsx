import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import { resolveScenes } from "./data/script";
import type { Script } from "./data/script";
import { Scene } from "./scene/Scene";

// Composition pilotée par le JSON : résout les plans (héritage + défauts),
// les enchaîne en Series, et cale l'audio (mp3 ElevenLabs) à l'offset 0.
// Les props SONT le script (le fichier JSON passé via --props).
export const Video: React.FC<Script> = (script) => {
  const scenes = resolveScenes(script);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0720" }}>
      {script.audio ? <Audio src={staticFile(script.audio)} /> : null}
      <Series>
        {scenes.map((scene, i) => (
          <Series.Sequence key={i} durationInFrames={scene.durationInFrames}>
            <Scene scene={scene} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
