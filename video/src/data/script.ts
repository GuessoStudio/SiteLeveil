import type { PoseName } from "./petit-eveille";
import type { EmotionName, ModeName } from "./emotions";
import { resolveAccent } from "./palette";

export type CameraMove = "drift" | "zoom-in" | "zoom-out" | "punch-head" | "static";
export type Position = "left" | "center" | "right";
export type Burst = boolean | "head" | "torso";

// Ce qu'on écrit dans le JSON : tout est optionnel sauf duration.
export type SceneInput = {
  duration: number; // secondes (requis)
  keyword?: string;
  keywordFx?: string;   // effet ponctuel sur le mot-clé : "glitch" | "shake"
  subtitle?: string;    // source du texte parlé (karaoké CapCut) — plus rendu à l'écran
  pose?: PoseName;
  emotion?: EmotionName;
  mode?: ModeName;
  position?: Position;
  camera?: CameraMove;
  fx?: string;          // effet continu (collant)
  transition?: string;  // rupture ponctuelle en début de plan
  sfx?: string;         // bruitage forcé ("none" coupe, sinon une clé du registre)
  icon?: string;        // icône pop au-dessus de la tête (clé du jeu d'icônes)
  bubbleText?: string;
  accent?: string;
  burst?: Burst;
};

export type ScriptDefaults = {
  pose: PoseName;
  emotion: EmotionName;
  mode: ModeName;
  position: Position;
  camera: CameraMove;
  fx: string;
  accent: string;
  burst: Burst;
};

export type Script = {
  fps: number;
  width: number;
  height: number;
  audio?: string;       // voix off (public/)
  audioVolume?: number; // gain de la voix off (défaut 1 ; >1 = amplifie)
  sfxVolume?: Record<string, number>; // override LOCAL du volume d'un SFX (clé → 0..1), juste pour ce script
  ambience?: string;    // nappe d'ambiance globale (clé du registre SFX, ex: "dark_drone")
  ambienceVolume?: number; // volume de l'ambiance pour ce script (défaut : SFX_VOLUME de la clé)
  guides?: boolean;     // affiche les repères caption-safe + zones TikTok (preview uniquement)
  defaults: ScriptDefaults;
  scenes: SceneInput[];
};

// État résolu d'un plan, prêt à rendre.
export type ResolvedScene = {
  durationInFrames: number;
  from: number; // frame de départ dans la timeline globale
  keyword?: string;
  keywordFx?: string;
  subtitle?: string;
  bubbleText?: string;
  burst: Burst;
  transition?: string;
  sfx?: string;
  icon?: string;
  pose: PoseName;
  emotion: EmotionName;
  mode: ModeName;
  position: Position;
  camera: CameraMove;
  fx: string;
  accent: string;
};

// Champs « collants » (état visuel) : héritent du plan précédent s'ils ne sont
// pas redéfinis. Les autres (keyword, subtitle, bubbleText, burst) sont
// ponctuels : ils se réinitialisent à chaque plan.
const STICKY = ["pose", "emotion", "mode", "position", "camera", "fx", "accent"] as const;

export function resolveScenes(script: Script): ResolvedScene[] {
  const fps = script.fps;
  let sticky: ScriptDefaults = { ...script.defaults };
  let from = 0;
  const out: ResolvedScene[] = [];

  for (const s of script.scenes) {
    for (const k of STICKY) {
      const v = (s as Record<string, unknown>)[k];
      if (v !== undefined) (sticky as Record<string, unknown>)[k] = v;
    }
    const durationInFrames = Math.round(s.duration * fps);
    out.push({
      durationInFrames,
      from,
      keyword: s.keyword,
      keywordFx: s.keywordFx, // ponctuel : ne se propage pas
      subtitle: s.subtitle,
      bubbleText: s.bubbleText,
      burst: s.burst ?? false,
      transition: s.transition, // ponctuel : ne se propage pas
      sfx: s.sfx,               // ponctuel
      icon: s.icon,             // ponctuel
      pose: sticky.pose,
      emotion: sticky.emotion,
      mode: sticky.mode,
      position: sticky.position,
      camera: sticky.camera,
      fx: sticky.fx,
      accent: resolveAccent(sticky.accent),
    });
    from += durationInFrames;
  }
  return out;
}

export const totalDurationInFrames = (script: Script): number =>
  script.scenes.reduce((acc, s) => acc + Math.round(s.duration * script.fps), 0);
