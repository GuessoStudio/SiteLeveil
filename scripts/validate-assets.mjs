// Usage : npm run validate:assets
//
// Garde-fou anti-404 sur les images déclarées dans le code.
//
// Pourquoi : une image OG cassée ne casse aucun build, ne lève aucune erreur
// TypeScript et ne se voit pas en naviguant sur le site. Elle ne se manifeste
// qu'au moment du partage sur Facebook, LinkedIn ou X — où le lien s'affiche
// alors sans visuel, ce qui écrase le taux de clic.
//
// Deux 404 ont vécu des mois sans alerte, découverts le 14 août 2026 :
//   - src/pages/Home.tsx        image="/images/og-default.jpg"     → le fichier
//     est un .webp ; tout partage de la PAGE D'ACCUEIL était sans image
//   - src/pages/StressZeroLanding.tsx  image="/stress-zero/og-cover.webp"
//     → l'image est en réalité dans /images/
//
// Ce script résout chaque chemin déclaré contre public/ et échoue s'il manque.

import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const PUBLIC = path.join(ROOT, "public");

// image="/..." (prop du composant SEO), image: "/..." (src/data/blog-articles.ts)
// et cover: "/..." (meta des articles).
//
// Convention du projet : `cover` et `image:` s'écrivent SANS extension, ".webp"
// est ajouté au rendu (voir .claude/rules/template-v2.md). On accepte donc les
// deux formes partout : le chemin littéral, ou le même chemin suffixé ".webp".
// Un chemin en ".jpg" qui n'existe pas échoue quand même — il n'a ni fichier
// littéral, ni équivalent ".jpg.webp".
const IMAGE_ATTR = /\bimage\s*[=:]\s*["'](\/[^"']+)["']/g;
const COVER_ATTR = /\bcover:\s*["'](\/[^"']+)["']/g;

const IGNORED_FILE = /_BACKUP\.(tsx?|jsx?)$/;

/** @returns liste de fichiers .tsx/.ts sous src/ */
function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(tsx?|jsx?)$/.test(entry.name) && !IGNORED_FILE.test(entry.name))
      out.push(full);
  }
  return out;
}

/** Un chemin est valide si le fichier existe sous public/, extension incluse ou déduite. */
function resolves(urlPath) {
  const clean = urlPath.split(/[?#]/)[0];
  return [clean, `${clean}.webp`].some((c) =>
    fs.existsSync(path.join(PUBLIC, c))
  );
}

const offenders = [];

for (const file of walk(SRC)) {
  const lines = fs.readFileSync(file, "utf-8").split("\n");
  lines.forEach((line, idx) => {
    for (const [re, kind] of [
      [IMAGE_ATTR, "image"],
      [COVER_ATTR, "cover"],
    ]) {
      for (const m of line.matchAll(re)) {
        const raw = m[1];
        // Les URLs générées dynamiquement (/og?title=…) ne sont pas des fichiers.
        if (raw.startsWith("/og?") || raw.startsWith("//")) continue;
        if (resolves(raw)) continue;
        offenders.push({
          file: path.relative(ROOT, file),
          line: idx + 1,
          raw,
          kind,
        });
      }
    }
  });
}

if (offenders.length === 0) {
  console.log("✅ validate:assets — toutes les images déclarées existent dans public/.");
  process.exit(0);
}

console.log(`❌ validate:assets — ${offenders.length} image(s) déclarée(s) mais absente(s) de public/ :\n`);
for (const o of offenders) {
  console.log(`   ${o.file}:${o.line}  (${o.kind})`);
  console.log(`     "${o.raw}"  →  aucun fichier correspondant sous public/`);
}
console.log(
  `\n⛔ Une image OG en 404 ne casse rien au build, mais tout partage social de` +
  `\n   la page s'affiche sans visuel. Corriger le chemin ou déposer le fichier.`
);
process.exit(1);
