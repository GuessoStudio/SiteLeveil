// Runner unique — remplace les 3 entrées npm par vidéo.
//
//   npm run v master     <slug> [-- --in "source.wav"]   mastering + silences
//   npm run v transcribe <slug>                          mots datés (calage exact)
//   npm run v calibrate  <slug>                          durées des plans
//   npm run v check      <slug>                          validation
//   npm run v words      <slug>                          karaoké (Whisper local)
//   npm run v render     <slug>                          MP4
//   npm run v cover      <slug>                          miniature
//   npm run v all        <slug>                          check + words + render + cover
//   npm run v list                                       scripts disponibles

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCRIPTS = path.join(ROOT, "src", "data", "scripts");
const COVERS = path.join(ROOT, "src", "data", "covers");

const [cmd, slug, ...rest] = process.argv.slice(2);

const usage = () => {
  console.log(fs.readFileSync(new URL(import.meta.url), "utf8").split("\n").slice(2, 11).map((l) => l.replace(/^\/\/ ?/, "")).join("\n"));
};

// shell:true est nécessaire sous Windows pour les .cmd (npx, py), mais il casse
// sur les chemins contenant des espaces ("C:\Program Files\nodejs\node.exe").
// On ne l'active donc que pour les commandes qui en ont besoin.
const sh = (bin, args, { shell = false } = {}) => {
  const r = spawnSync(bin, args, { stdio: "inherit", shell });
  if (r.status !== 0) process.exit(r.status ?? 1);
};
const node = (script, args = []) => sh(process.execPath, [path.join(ROOT, "scripts", script), ...args]);
const remotion = (args) => sh("npx", ["remotion", ...args], { shell: process.platform === "win32" });

const scriptPath = (s) => path.join(SCRIPTS, `${s}.json`);
const needScript = (s) => {
  if (!fs.existsSync(scriptPath(s))) {
    console.error(`Script introuvable : src/data/scripts/${s}.json`);
    console.error(`Disponibles : ${fs.readdirSync(SCRIPTS).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, "")).join(", ")}`);
    process.exit(1);
  }
};

if (!cmd || cmd === "help") {
  usage();
  process.exit(0);
}

if (cmd === "list") {
  for (const f of fs.readdirSync(SCRIPTS).filter((f) => f.endsWith(".json")).sort()) {
    const s = f.replace(/\.json$/, "");
    const j = JSON.parse(fs.readFileSync(path.join(SCRIPTS, f), "utf8"));
    const total = (j.scenes ?? []).reduce((a, x) => a + x.duration, 0);
    const flags = [j.words ? "karaoké" : "", fs.existsSync(path.join(COVERS, `${s}.cover.json`)) ? "cover" : ""].filter(Boolean).join(" · ");
    console.log(`${s.padEnd(26)} ${String((j.scenes ?? []).length).padStart(2)} plans  ${total.toFixed(2).padStart(6)} s   ${flags}`);
  }
  process.exit(0);
}

if (!slug) {
  console.error(`"${cmd}" attend un slug.\n`);
  usage();
  process.exit(2);
}

switch (cmd) {
  case "master":
    node("master.mjs", [slug, ...rest]);
    break;

  case "transcribe":
    // Whisper en amont, sans script : sert au calage exact de `calibrate`.
    sh("py", [path.join(ROOT, "scripts", "transcribe.py"), `public/${slug}.mp3`, "--out", `out/${slug}.words.json`, "--no-align"], { shell: process.platform === "win32" });
    break;

  case "calibrate":
    node("calibrate.mjs", [slug]);
    break;

  case "check":
    needScript(slug);
    node("validate-script.mjs", [slug]);
    break;

  case "words": {
    needScript(slug);
    // le nom du fichier audio vit dans le script, pas dans la commande
    const { audio } = JSON.parse(fs.readFileSync(scriptPath(slug), "utf8"));
    if (!audio) {
      console.error(`Le script ${slug}.json n'a pas de champ "audio".`);
      process.exit(1);
    }
    sh("py", [path.join(ROOT, "scripts", "transcribe.py"), `public/${audio}`, "--script", `src/data/scripts/${slug}.json`], { shell: process.platform === "win32" });
    break;
  }

  case "render":
    needScript(slug);
    node("validate-script.mjs", [slug]);
    remotion(["render", "src/Root.tsx", "Habitudes", `out/${slug}.mp4`, `--props=src/data/scripts/${slug}.json`, ...rest]);
    break;

  case "cover":
    needScript(slug);
    node("validate-script.mjs", [slug]);
    remotion(["still", "src/Root.tsx", "Cover", `out/${slug}-cover.png`, `--props=src/data/covers/${slug}.cover.json`, ...rest]);
    break;

  case "all":
    needScript(slug);
    node("validate-script.mjs", [slug]);
    node("v.mjs", ["words", slug]);
    node("v.mjs", ["render", slug]);
    node("v.mjs", ["cover", slug]);
    break;

  default:
    console.error(`Commande inconnue : "${cmd}"\n`);
    usage();
    process.exit(2);
}
