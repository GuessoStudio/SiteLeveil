import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { LAYOUT } from "../data/layout";
import type { CameraMove } from "../data/script";

export const CameraRig: React.FC<{
  camera: CameraMove;
  transition?: string;
  durationInFrames: number;
  globalFrom?: number;   // frame de début du plan dans la timeline globale
  globalTotal?: number;  // durée totale de la vidéo en frames
  children: React.ReactNode;
}> = ({ camera, transition, durationInFrames, globalFrom = 0, globalTotal = 1, children }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });

  let scale = 1;
  let tx = 0;
  let ty = 0;

  switch (camera) {
    case "cine": {
      // Zoom lent CONTINU piloté par le frame global → ne se réinitialise pas à
      // chaque plan. Le perso reste calme, la caméra « lourde » avance sans à-coup
      // pendant que les titres flashent au-dessus (look grand studio).
      const g = globalFrom + frame;
      scale = interpolate(g, [0, globalTotal], [1.04, 1.16]);
      tx = 0.9 * Math.sin(g / 130);
      ty = -0.6 * Math.sin(g / 170);
      break;
    }
    case "drift": {
      scale = interpolate(p, [0, 1], [1.03, 1.14]);
      tx = interpolate(p, [0, 1], [-2.5, 2.5]);
      ty = interpolate(p, [0, 1], [0.5, -0.5]);
      break;
    }
    case "zoom-in": {
      scale = interpolate(p, [0, 1], [1.0, 1.2]);
      ty = interpolate(p, [0, 1], [0, -1.5]);
      break;
    }
    case "zoom-out": {
      scale = interpolate(p, [0, 1], [1.2, 1.02]);
      break;
    }
    case "punch-head": {
      // Zoom ancré au sol (cf. transformOrigin) → les pieds restent plantés et le
      // perso grandit vers le HAUT. Pas de push vers le bas (sinon il entrait dans
      // la bande sous-titres). Amplitude réduite pour rester dans le cadre.
      const punch = interpolate(frame, [0, 8], [1.0, 1.18], {
        extrapolateRight: "clamp",
      });
      const settle = frame > 8
        ? 0.04 * Math.exp(-(frame - 8) / 12) * Math.sin((frame - 8) * 0.6)
        : 0;
      scale = punch + settle;
      tx = settle * 8;
      break;
    }
    case "static": {
      scale = 1.02 + 0.012 * Math.sin((frame / 30) * Math.PI);
      tx = 0.4 * Math.sin((frame / 45) * Math.PI);
      break;
    }
  }

  // zoom_smash (canal transition) : démarre zoomé et se résorbe vite — « coup de
  // poing » de révélation, ajouté par-dessus le mouvement de base. Amplitude
  // réduite (0,25) pour ne pas projeter le perso hors de sa zone au démarrage.
  if (transition === "zoom_smash") {
    scale += 0.25 * Math.exp(-frame / 3);
  }

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${scale.toFixed(4)}) translate(${tx.toFixed(2)}%, ${ty.toFixed(2)}%)`,
        // Point d'ancrage du zoom = ligne de sol → pieds plantés, le perso grandit
        // vers le haut et ne descend jamais dans la bande sous-titres.
        transformOrigin: `50% ${LAYOUT.floorTopPct}%`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
