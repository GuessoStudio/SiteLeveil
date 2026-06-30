import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import { resolveScenes } from "./data/script";
import type { Script } from "./data/script";
import { Scene } from "./scene/Scene";
import { SafeZoneGuide } from "./scene/SafeZoneGuide";
import { SFX_FILES, SFX_VOLUME, type SfxKey } from "./data/sfxRegistry";

// Composition pilotée par le JSON : résout les plans (héritage + défauts),
// les enchaîne en Series, et cale l'audio (mp3 ElevenLabs) à l'offset 0.
// Les props SONT le script (le fichier JSON passé via --props).
export const Video: React.FC<Script> = (script) => {
  const scenes = resolveScenes(script);
  const ambienceFile = script.ambience ? SFX_FILES[script.ambience as SfxKey] : null;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0720" }}>
      {script.audio ? <Audio src={staticFile(script.audio)} volume={script.audioVolume ?? 1} /> : null}
      {ambienceFile ? (
        <Audio src={staticFile(ambienceFile)} loop volume={script.ambienceVolume ?? SFX_VOLUME[script.ambience as SfxKey] ?? 0.22} />
      ) : null}
      <Series>
        {scenes.map((scene, i) => (
          <Series.Sequence key={i} durationInFrames={scene.durationInFrames}>
            <Scene scene={scene} sfxVolume={script.sfxVolume} />
          </Series.Sequence>
        ))}
      </Series>
      {script.guides ? <SafeZoneGuide /> : null}
    </AbsoluteFill>
  );
};
