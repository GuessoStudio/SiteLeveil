// Valide un script JSON (et sa cover) contre les registres réels du moteur.
// Usage : node scripts/validate-script.mjs liking-gap
//
// Existe parce qu'une valeur invalide ne casse pas au bundle : elle casse en
// plein rendu, après plusieurs minutes (MODES[scene.mode].tint → undefined).
// Ici on échoue en 200 ms.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");

// --- registres extraits de la source, jamais recopiés à la main -------------
const between = (src, start, end) => src.slice(src.indexOf(start), src.indexOf(end, src.indexOf(start)));
const unionKeys = (src, typeName) => {
  const m = src.match(new RegExp(`export type ${typeName}\\s*=([^;]+);`));
  return m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
};
const recordKeys = (src, marker) =>
  [...between(src, marker, "\n};").matchAll(/^\s{2}"?([A-Za-z_][\w]*)"?\s*:/gm)].map((x) => x[1]);

const emotionsTs = read("src/data/emotions.ts");
const petitTs = read("src/data/petit-eveille.ts");
const scriptTs = read("src/data/script.ts");
const paletteTs = read("src/data/palette.ts");
const iconsTs = read("src/data/icons.ts");

const REG = {
  mode: unionKeys(emotionsTs, "ModeName"),
  emotion: unionKeys(emotionsTs, "EmotionName"),
  pose: unionKeys(petitTs, "PoseName"),
  camera: unionKeys(scriptTs, "CameraMove"),
  position: unionKeys(scriptTs, "Position"),
  accent: recordKeys(paletteTs, "PALETTE"),
  icon: recordKeys(iconsTs, "ICONS"),
};

// fx et transition sont dispersés sur plusieurs fichiers → on récolte les clés
// de chaque table de config du dossier fx/.
const fxKeys = new Set();
for (const f of fs.readdirSync(path.join(ROOT, "src/fx"))) {
  const src = read(`src/fx/${f}`);
  for (const m of src.matchAll(/^\s{2}([a-z][a-z0-9_]*)\s*:\s*\{/gm)) fxKeys.add(m[1]);
  for (const m of src.matchAll(/(?:case\s+)?"([a-z][a-z0-9_]*)"/g)) fxKeys.add(m[1]);
}
REG.fx = [...fxKeys];
REG.transition = [...fxKeys];
REG.keywordFx = ["glitch", "shake"];

// --- validation -------------------------------------------------------------
const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/validate-script.mjs <slug>");
  process.exit(2);
}

const errors = [];
const check = (where, field, value) => {
  if (value === undefined || value === null) return;
  const allowed = REG[field];
  if (allowed && allowed.length && !allowed.includes(value)) {
    errors.push(`${where} — ${field}: "${value}" inconnu. Valides : ${allowed.join(", ")}`);
  }
};

const scriptPath = `src/data/scripts/${slug}.json`;
const script = JSON.parse(read(scriptPath));

for (const [k, v] of Object.entries(script.defaults ?? {})) check("defaults", k, v);

script.scenes.forEach((s, i) => {
  const where = `plan ${i + 1}`;
  for (const k of ["mode", "emotion", "pose", "camera", "position", "accent", "icon", "fx", "transition", "keywordFx"]) {
    check(where, k, s[k]);
  }
  if (typeof s.duration !== "number" || s.duration <= 0) errors.push(`${where} — duration invalide : ${s.duration}`);
  if (s.burst !== undefined && ![true, false, "head", "torso"].includes(s.burst)) {
    errors.push(`${where} — burst: "${s.burst}" invalide (true|false|head|torso)`);
  }
  if (s.subtitle && /\b(commente|partage cette|abonne-toi)\b/i.test(s.subtitle)) {
    errors.push(`${where} — CTA d'engagement détecté dans le sous-titre (acquis labo : 0/2)`);
  }
});

const total = script.scenes.reduce((a, s) => a + s.duration, 0);

const coverPath = `src/data/covers/${slug}.cover.json`;
if (fs.existsSync(path.join(ROOT, coverPath))) {
  const cover = JSON.parse(read(coverPath));
  for (const k of ["mode", "emotion", "pose", "accent"]) check("cover", k, cover[k]);
  if (/\btest\b/i.test(cover.eyebrow ?? "")) errors.push(`cover — "test" visible dans l'eyebrow (public)`);
}

console.log(`${slug} — ${script.scenes.length} plans, somme ${total.toFixed(2)} s, audio "${script.audio}"`);
if (script.words) console.log(`words : ${script.words.length} mots datés`);

if (errors.length) {
  console.error(`\n${errors.length} erreur(s) :`);
  for (const e of errors) console.error("  ✗ " + e);
  process.exit(1);
}
console.log("✓ toutes les valeurs existent dans les registres du moteur");
