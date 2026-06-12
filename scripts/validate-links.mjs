// Usage : npm run validate:links
//
// Garde-fou global anti-régression SEO.
// Scanne TOUT src/ et refuse les liens internes sans trailing slash vers
// /blog, /blog/{slug}, /a-propos, /ressources.
//
// Pourquoi : les pages sont servies en SSG depuis dist/<path>/index.html.
// Un lien sans slash final déclenche un 301 Netlify (→ /path/). Googlebot suit
// le lien interne, reçoit la redirection, et classe l'URL en "Page avec
// redirection" / "Explorée, non indexée" dans la Search Console.
//
// Couvre les deux formes de lien du projet :
//   - JSX littéral   : to="/blog/slug"   href="/a-propos"
//   - tableaux nav    : { href: '/blog' } (Header.tsx, Footer.tsx)

import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

// Routes internes concernées par le trailing slash (familles indexables).
// Un chemin est fautif s'il matche l'une d'elles SANS slash final.
const OFFENDING = /^\/(?:blog|a-propos|ressources)(?:\/[a-z0-9-]+)?$/;

// Capture la valeur de to="...", href="...", href:'...' (simple/double quote).
const LINK_ATTR = /\b(?:to|href)\s*[=:]\s*["']([^"']+)["']/g;

// Liens construits en template literal : to={`/blog/${slug}`} (cartes, recherche).
// On ne vise QUE to=/href= (pas path={…}, normalisé par SEO.tsx cleanPath()).
// Fautif si le template ne se termine pas par "/" juste avant le backtick fermant.
const LINK_TEMPLATE = /\b(?:to|href)=\{`(\/(?:blog|a-propos|ressources)[^`]*?)`\}/g;

/** @returns liste de fichiers .tsx/.ts sous src/ */
function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) out.push(full);
  }
  return out;
}

/** Sépare le chemin de sa query/hash éventuelle. */
function splitPath(value) {
  const i = value.search(/[?#]/);
  return i < 0 ? [value, ""] : [value.slice(0, i), value.slice(i)];
}

const offenders = [];

for (const file of walk(SRC)) {
  const lines = fs.readFileSync(file, "utf-8").split("\n");
  lines.forEach((line, idx) => {
    for (const m of line.matchAll(LINK_ATTR)) {
      const raw = m[1];
      if (!raw.startsWith("/") || raw.startsWith("//")) continue; // externes / protocole
      const [pathname, suffix] = splitPath(raw);
      if (OFFENDING.test(pathname)) {
        const fixed = `${pathname}/${suffix}`;
        offenders.push({
          file: path.relative(ROOT, file),
          line: idx + 1,
          raw,
          fixed,
        });
      }
    }
    // Template literals : fautif si pas de "/" avant le backtick fermant.
    for (const m of line.matchAll(LINK_TEMPLATE)) {
      const inner = m[1];
      const [pathPart] = splitPath(inner);
      if (!pathPart.endsWith("/")) {
        offenders.push({
          file: path.relative(ROOT, file),
          line: idx + 1,
          raw: `\`${inner}\``,
          fixed: `\`${pathPart}/${inner.slice(pathPart.length)}\``,
        });
      }
    }
  });
}

if (offenders.length === 0) {
  console.log("✅ validate:links — 0 lien interne sans trailing slash.");
  process.exit(0);
}

console.log(`❌ validate:links — ${offenders.length} lien(s) interne(s) sans trailing slash :\n`);
for (const o of offenders) {
  console.log(`   ${o.file}:${o.line}`);
  console.log(`     "${o.raw}"  →  "${o.fixed}"`);
}
console.log(
  `\n⛔ Chaque lien ci-dessus provoque un 301 Netlify et nourrit les erreurs` +
  `\n   "Page avec redirection" de la Search Console. Ajouter le slash final.`
);
process.exit(1);
