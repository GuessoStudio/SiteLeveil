import React from "react";
import { Audio, staticFile } from "remotion";
import {
  FX_SFX,
  SFX_FILES,
  SFX_LOOP,
  SFX_VOLUME,
  TRANSITION_SFX,
  type SfxKey,
} from "../data/sfxRegistry";

// Joue les bruitages d'un plan, calés au début de la séquence (donc sync au
// millième près sur l'apparition du fx/transition). Inerte si le son n'a pas
// encore de fichier (SFX_FILES[key] === null) → aucun risque de casser le rendu.
// Résolution : "none" coupe tout ; sinon auto-mapping transition + fx, plus un
// éventuel son explicite du JSON ajouté par-dessus.
export const SfxPlayer: React.FC<{
  transition?: string;
  fx?: string;
  sfx?: string;
  volumeOverride?: Record<string, number>; // baisse/monte un SFX juste pour ce script
}> = ({ transition, fx, sfx, volumeOverride }) => {
  if (sfx === "none") return null;

  const keys = new Set<SfxKey>();
  if (transition && TRANSITION_SFX[transition]) keys.add(TRANSITION_SFX[transition]);
  if (fx && FX_SFX[fx]) keys.add(FX_SFX[fx]);
  if (sfx && sfx in SFX_FILES) keys.add(sfx as SfxKey);

  return (
    <>
      {[...keys].map((k) => {
        const file = SFX_FILES[k];
        if (!file) return null; // pas de fichier → on ignore
        return (
          <Audio
            key={k}
            src={staticFile(file)}
            volume={volumeOverride?.[k] ?? SFX_VOLUME[k] ?? 0.6}
            loop={SFX_LOOP[k] ?? false}
          />
        );
      })}
    </>
  );
};
