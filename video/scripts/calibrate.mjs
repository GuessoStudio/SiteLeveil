// Calage automatique des plans sur la voix off.
//
//   npm run v calibrate <slug>
//
// Entrées :
//   out/<slug>.calibration.json       ← produit par `npm run v master <slug>`
//   src/data/scripts/<slug>.txt       ← le texte parlé, UNE LIGNE PAR PLAN
//   out/<slug>.words.json             ← optionnel, `npm run v transcribe <slug>`
//
// Sortie :
//   out/<slug>.draft.json             ← squelette des plans (duration + subtitle)
//
// DEUX MODES
//
// • EXACT (si les mots datés de Whisper sont là) : on aligne le texte sur la
//   transcription, on lit l'heure réelle du dernier mot de chaque ligne, et on
//   coupe au milieu du silence qui suit. Aucune estimation.
//
// • PROPORTIONNEL (repli) : on répartit les mots sur les segments au prorata du
//   temps de parole. ⚠️ Suppose un débit constant. Testé sur liking-gap : faux
//   sur 6 plans/13, parce qu'une phrase appuyée (« J'ai trop parlé ») prend
//   1,6 s pour 3 mots là où le débit moyen en donnerait 6. À vérifier à la main.
//
// La direction artistique (pose, couleur, FX, mot-clé) reste à ajouter à la
// main : aucune machine ne sait qu'il faut passer en violet au retournement.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const slug = process.argv[2];

if (!slug) {
  console.error("usage: npm run v calibrate <slug>");
  process.exit(2);
}

const calPath = path.join(ROOT, "out", `${slug}.calibration.json`);
const txtPath = path.join(ROOT, "src", "data", "scripts", `${slug}.txt`);

for (const [p, hint] of [
  [calPath, `lancer d'abord : npm run v master ${slug}`],
  [txtPath, `créer le texte parlé, une ligne par plan`],
]) {
  if (!fs.existsSync(p)) {
    console.error(`Manquant : ${path.relative(ROOT, p)}\n→ ${hint}`);
    process.exit(1);
  }
}

const cal = JSON.parse(fs.readFileSync(calPath, "utf8"));
const lines = fs
  .readFileSync(txtPath, "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter(Boolean);

// --- mots : un token compte s'il contient au moins une lettre ou un chiffre --
const isWord = (t) => /[0-9A-Za-zÀ-ÿ]/.test(t);
const tokensOf = (s) => s.split(/\s+/).filter(Boolean);
const lineWordCounts = lines.map((l) => tokensOf(l).filter(isWord).length);
const N = lineWordCounts.reduce((a, b) => a + b, 0);

// --- segments de parole ------------------------------------------------------
const seg = cal.speech.filter(([a, b]) => b - a > 0.05); // on jette les résidus
const segDur = seg.map(([a, b]) => b - a);
const T = segDur.reduce((a, b) => a + b, 0);

// mots cumulés attendus à la fin de chaque segment (prorata du temps de parole)
let acc = 0;
const cumWords = segDur.map((d) => {
  acc += d;
  return Math.round((acc / T) * N);
});

// --- mode exact : alignement du texte sur les mots datés de Whisper ---------
const norm = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
const wordsPath = path.join(ROOT, "out", `${slug}.words.json`);
let asr = null;
if (fs.existsSync(wordsPath)) {
  const raw = JSON.parse(fs.readFileSync(wordsPath, "utf8"));
  asr = (raw.words ?? raw).filter((w) => norm(w.w));
}

// Alignement glouton : pour chaque mot du texte, on cherche le même mot dans la
// transcription un peu plus loin. Les mots non retrouvés restent sans ancre et
// héritent de l'ancre suivante.
function alignEnds() {
  const refTokens = lines.flatMap((l) => tokensOf(l).filter(isWord));
  const ends = new Array(refTokens.length).fill(null);
  let j = 0;
  let anchors = 0;
  for (let i = 0; i < refTokens.length; i++) {
    const target = norm(refTokens[i]);
    for (let k = j; k < Math.min(asr.length, j + 6); k++) {
      if (norm(asr[k].w) === target) {
        ends[i] = asr[k].end;
        j = k + 1;
        anchors++;
        break;
      }
    }
  }
  // trous : on prend l'ancre suivante disponible
  for (let i = ends.length - 2; i >= 0; i--) if (ends[i] === null) ends[i] = ends[i + 1];
  return { ends, anchors, total: refTokens.length };
}

const aligned = asr ? alignEnds() : null;
const exact = aligned && aligned.anchors / aligned.total > 0.6;

console.log(`${slug} — ${lines.length} lignes, ${N} mots, ${seg.length} segments, ${cal.duration.toFixed(2)} s`);
console.log(`débit : ${((N / cal.duration) * 60).toFixed(0)} mots/min (${(N / T).toFixed(2)} mots/s de parole nette)`);
console.log(
  exact
    ? `mode  : EXACT (${aligned.anchors}/${aligned.total} mots ancrés sur Whisper)\n`
    : `mode  : PROPORTIONNEL ⚠️ approximatif — lancer \`npm run v transcribe ${slug}\` pour le mode exact\n`
);

// --- fin de chaque ligne → coupe --------------------------------------------
const scenes = [];
const warnings = [];
let cursorWords = 0;
let cursorSeg = -1;
let cursorTime = 0;

lines.forEach((line, i) => {
  cursorWords += lineWordCounts[i];
  const isLast = i === lines.length - 1;

  let s;
  if (exact) {
    // Heure de fin réelle du dernier mot de la ligne. On prend le DERNIER
    // segment déjà commencé à cet instant : si le mot finit à l'intérieur d'un
    // segment c'est celui-là, et s'il finit dans un silence (cas fréquent, le
    // mot déborde légèrement) c'est le segment qui vient de se terminer — pas
    // le suivant.
    const t = aligned.ends[cursorWords - 1];
    s = -1;
    for (let k = cursorSeg + 1; k < seg.length; k++) {
      if (seg[k][0] <= t + 0.02) s = k;
      else break;
    }
  } else {
    s = cumWords.findIndex((c, k) => k > cursorSeg && c >= cursorWords);
  }
  if (s === -1) s = seg.length - 1;
  if (s <= cursorSeg) {
    s = Math.min(cursorSeg + 1, seg.length - 1);
    warnings.push(`ligne ${i + 1} : deux lignes tombent dans le même segment, coupe forcée`);
  }

  const cut = isLast ? cal.duration : (seg[s][1] + (seg[s + 1]?.[0] ?? seg[s][1])) / 2;
  const duration = +(cut - cursorTime).toFixed(2);

  scenes.push({ duration, keyword: "", subtitle: line });
  console.log(
    `  plan ${String(i + 1).padStart(2)}  seg ${String(cursorSeg + 2).padStart(2)}-${String(s + 1).padEnd(2)}  ` +
      `${String(lineWordCounts[i]).padStart(2)} mots  ${duration.toFixed(2).padStart(5)} s   ${line.slice(0, 52)}`
  );

  cursorSeg = s;
  cursorTime = cut;
});

// --- l'arrondi peut faire dériver de quelques centièmes : on corrige la fin ---
const sum = +scenes.reduce((a, s) => a + s.duration, 0).toFixed(2);
if (sum !== +cal.duration.toFixed(2)) {
  const last = scenes[scenes.length - 1];
  last.duration = +(last.duration + (cal.duration - sum)).toFixed(2);
}

const draft = {
  fps: 30,
  width: 1080,
  height: 1920,
  audio: `${slug}.mp3`,
  audioVolume: 1,
  ambience: "dark_drone",
  ambienceVolume: 1.1,
  karaoke: true,
  defaults: { pose: "idle", emotion: "calme", mode: "neuro", position: "center", camera: "cine", fx: "none", accent: "neuro", burst: false },
  scenes,
};

const outPath = path.join(ROOT, "out", `${slug}.draft.json`);
fs.writeFileSync(outPath, JSON.stringify(draft, null, 2) + "\n");

const total = scenes.reduce((a, s) => a + s.duration, 0);
console.log(`\nsomme : ${total.toFixed(2)} s  (audio ${cal.duration.toFixed(2)} s)`);
if (warnings.length) {
  console.log("\n⚠ " + warnings.join("\n⚠ "));
  console.log("→ regrouper ces lignes, ou marquer une vraie pause à l'enregistrement.");
}
console.log(`\ndraft : out/${slug}.draft.json — ajouter la direction artistique, puis copier dans src/data/scripts/`);
