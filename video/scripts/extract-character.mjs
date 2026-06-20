// Extraction one-shot : copie le perso validé (POSE_PATHS + spirales) depuis
// la source de vérité (public/petit-eveille-poses.html) vers src/data/petit-eveille.ts.
// Rejouer si le perso évolue dans le lab :  node scripts/extract-character.mjs
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const lab = readFileSync(resolve(root, "public/petit-eveille-poses.html"), "utf8");

const posesJson = lab.match(/var POSE_PATHS = (\{[\s\S]*?\});/)[1];
const poses = JSON.parse(posesJson);
const headSpiral = lab.match(/id="head-spiral" d="([^"]+)"/)[1];
const torsoSpiral = lab.match(/id="torso-spiral" d="([^"]+)"/)[1];

const ts = `// AUTO-GÉNÉRÉ par video/scripts/extract-character.mjs — NE PAS ÉDITER À LA MAIN.
// Source de vérité : public/petit-eveille-poses.html (le « labo »).
// Rejouer après toute évolution du perso :  node scripts/extract-character.mjs

export const VIEWBOX = { width: 400, height: 720 } as const;

// Pivots (espace viewBox) repris du lab.
export const PIVOT = {
  head: { x: 200, y: 141 },
  torso: { x: 200, y: 328 },
  body: { x: 200, y: 360 },
  character: { x: 200, y: 440 },
} as const;

export const COLORS = {
  silhouetteFill: "#0D0B1E",
  stroke: "#FFFFFF",
  strokeWidth: 11,
  spiralStroke: "#FFFFFF",
  spiralWidth: 6,
} as const;

export type PoseName =
${Object.keys(poses).map((k) => `  | "${k}"`).join("\n")};

export const POSE_PATHS: Record<PoseName, string> = ${JSON.stringify(poses, null, 2)} as const;

export const HEAD_SPIRAL = ${JSON.stringify(headSpiral)};
export const TORSO_SPIRAL = ${JSON.stringify(torsoSpiral)};
`;

mkdirSync(resolve(here, "../src/data"), { recursive: true });
writeFileSync(resolve(here, "../src/data/petit-eveille.ts"), ts);
console.log(
  `petit-eveille.ts généré : ${Object.keys(poses).length} poses, spirales tête (${headSpiral.length} chars) + torse (${torsoSpiral.length} chars).`
);
