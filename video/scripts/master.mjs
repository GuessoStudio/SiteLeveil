// Mastering voix off + relevé des silences, en une commande.
//
//   npm run master liking-gap
//   npm run master liking-gap -- --in "le liking gap.wav"
//
// 1. loudnorm deux passes vers -14 LUFS (norme des plateformes)
// 2. export MP3 48 kHz mono 64 kb/s (même profil que tout le catalogue)
// 3. silencedetect → segments de parole, pour caler les durées des plans
//
// Utilise le ffmpeg déjà livré par Remotion (@remotion/compositor-*), le même
// que `npx remotion ffmpeg`. Rien à installer : il est là depuis le début.
// Ce build est réduit mais contient tout ce dont la chaîne a besoin :
// loudnorm, silencedetect, atrim, atempo et libmp3lame.

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");

// Le paquet compositor est suffixé par plateforme (win32-x64-msvc,
// darwin-arm64, linux-x64-gnu…) : on le retrouve sans le nommer en dur.
const compositorDir = path.join(ROOT, "node_modules", "@remotion");
const ffmpeg = fs
  .readdirSync(compositorDir)
  .filter((d) => d.startsWith("compositor-"))
  .map((d) => [path.join(compositorDir, d, "ffmpeg.exe"), path.join(compositorDir, d, "ffmpeg")])
  .flat()
  .find((p) => fs.existsSync(p));

if (!ffmpeg) {
  console.error("ffmpeg introuvable dans node_modules/@remotion/compositor-*. Lancer `npm install`.");
  process.exit(1);
}

const TARGET = { I: -14, TP: -2, LRA: 11 };
// TP visé à -2 dB et non -1.5 : l'encodage MP3 ajoute un dépassement
// inter-échantillon de ~1,7 dB. Avec -1.5 le fichier final sort à +0,2 dB.

const NOISE_DB = -25;
const MIN_SILENCE = 0.15;

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith("--"));
const inFlag = args.indexOf("--in");
const explicitIn = inFlag !== -1 ? args[inFlag + 1] : null;

if (!slug) {
  console.error('usage: npm run master <slug> [-- --in "fichier source.wav"]');
  process.exit(2);
}

// ffmpeg écrit ses mesures et ses logs sur stderr, jamais sur stdout :
// on concatène les deux flux.
const probe = (a) => {
  const r = spawnSync(ffmpeg, ["-hide_banner", ...a], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  return (r.stdout ?? "") + (r.stderr ?? "");
};
const run = (a) => {
  const r = spawnSync(ffmpeg, ["-hide_banner", ...a], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  if (r.status !== 0) {
    console.error((r.stderr ?? "").split("\n").slice(-12).join("\n"));
    process.exit(1);
  }
  return (r.stdout ?? "") + (r.stderr ?? "");
};

// --- résolution du fichier source -------------------------------------------
const candidates = explicitIn
  ? [explicitIn]
  : [`${slug}.wav`, `${slug}.mp3`, slug.replace(/-/g, " ") + ".wav"];
const src = candidates.map((c) => path.join(PUBLIC, c)).find((p) => fs.existsSync(p));

if (!src) {
  console.error(`Aucune source trouvée dans public/ pour "${slug}".`);
  console.error(`Cherché : ${candidates.join(", ")}`);
  const wavs = fs.readdirSync(PUBLIC).filter((f) => /\.(wav|mp3)$/i.test(f));
  console.error(`\nFichiers disponibles :\n  ${wavs.join("\n  ")}`);
  process.exit(1);
}

const dest = path.join(PUBLIC, `${slug}.mp3`);
console.log(`source : ${path.basename(src)}`);

// --- passe 1 : mesure --------------------------------------------------------
const pass1 = probe(["-i", src, "-af", `loudnorm=I=${TARGET.I}:TP=${TARGET.TP}:LRA=${TARGET.LRA}:print_format=json`, "-f", "null", "-"]);
const json = pass1.slice(pass1.lastIndexOf("{"), pass1.lastIndexOf("}") + 1);
const m = JSON.parse(json);
console.log(`mesure : ${m.input_i} LUFS, TP ${m.input_tp} dB, LRA ${m.input_lra}`);

// --- passe 2 : normalisation + export ---------------------------------------
const filter =
  `loudnorm=I=${TARGET.I}:TP=${TARGET.TP}:LRA=${TARGET.LRA}` +
  `:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}` +
  `:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`;

run(["-y", "-i", src, "-af", filter, "-c:a", "libmp3lame", "-ar", "48000", "-ac", "1", "-b:a", "64k", dest]);

// --- contrôle ----------------------------------------------------------------
const check = probe(["-i", dest, "-af", `loudnorm=I=${TARGET.I}:TP=${TARGET.TP}:LRA=${TARGET.LRA}:print_format=json`, "-f", "null", "-"]);
const c = JSON.parse(check.slice(check.lastIndexOf("{"), check.lastIndexOf("}") + 1));
const durMatch = probe(["-i", dest]).match(/Duration: (\d+):(\d+):([\d.]+)/);
const duration = durMatch ? +durMatch[1] * 3600 + +durMatch[2] * 60 + +durMatch[3] : 0;

console.log(`\n✓ ${path.basename(dest)} — ${duration.toFixed(2)} s, ${c.input_i} LUFS, TP ${c.input_tp} dB`);

// --- silences → segments de parole -------------------------------------------
// Détection sur la SOURCE, pas sur le MP3 : l'encodage avec perte lisse les
// micro-pauses et fait fusionner des segments qui devraient rester séparés
// (constaté sur liking-gap : la pause de 0,150 s à 8,35 s disparaît).
const sil = probe(["-i", src, "-af", `silencedetect=noise=${NOISE_DB}dB:d=${MIN_SILENCE}`, "-f", "null", "-"]);
const starts = [...sil.matchAll(/silence_start: ([\d.]+)/g)].map((x) => +x[1]);
const ends = [...sil.matchAll(/silence_end: ([\d.]+)/g)].map((x) => +x[1]);

const speech = [];
let cursor = 0;
for (let i = 0; i < starts.length; i++) {
  if (starts[i] > cursor + 0.01) speech.push([cursor, starts[i]]);
  cursor = ends[i] ?? duration;
}
if (cursor < duration - 0.01) speech.push([cursor, duration]);

console.log(`\n${speech.length} segments de parole (${starts.length} silences ≥ ${MIN_SILENCE}s à ${NOISE_DB} dB) :\n`);
console.log("  #   début     fin      durée    coupe conseillée");
speech.forEach(([a, b], i) => {
  const next = speech[i + 1];
  const cut = next ? ((b + next[0]) / 2).toFixed(3) : duration.toFixed(3);
  console.log(
    `  ${String(i + 1).padStart(2)}  ${a.toFixed(3).padStart(7)}  ${b.toFixed(3).padStart(7)}  ${(b - a).toFixed(3).padStart(7)}  ${cut.padStart(7)}`
  );
});

const report = { slug, source: path.basename(src), duration, lufs: +c.input_i, truePeak: +c.input_tp, speech, cuts: speech.map(([, b], i) => (speech[i + 1] ? (b + speech[i + 1][0]) / 2 : duration)) };
fs.mkdirSync(path.join(ROOT, "out"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "out", `${slug}.calibration.json`), JSON.stringify(report, null, 2) + "\n");
console.log(`\nrapport : out/${slug}.calibration.json`);
