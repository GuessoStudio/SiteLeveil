// Usage : npm run validate:links
//
// Garde-fou global anti-régression SEO.
// Scanne TOUT src/ et refuse les liens internes sans trailing slash vers les
// routes pré-rendues en SSG (voir ROUTES ci-dessous).
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

// Routes pré-rendues en SSG : servies depuis dist/<path>/index.html, donc un
// lien sans slash final déclenche un 301 Netlify.
//
// ⚠️ Cette liste DOIT rester alignée sur src/routes.tsx. Toute route qui y est
// ajoutée et qui est pré-rendue (= absente des exclusions de
// vite.config.ts → ssgOptions.includedRoutes) doit être ajoutée ici, sinon le
// garde-fou passe au vert alors que des 301 se glissent dans le site.
const ROUTES = [
  "blog",
  "a-propos",
  "ressources",
  "contact",
  "legal",
  "stress-zero",
  "calculateur-sommeil",
  "test-personnalite-big-five",
  "merci-inscription",
  "habit-tracker",
  "hydromind",
];

// Routes applicatives NON pré-rendues : servies par le fallback SPA de
// public/_redirects (200), elles ne déclenchent aucun 301. On ne les flague pas.
const CLIENT_ONLY = /^\/(?:neuro-journal\/|admin\/|og-test$)/;

// Un chemin est fautif s'il matche une route ci-dessus SANS slash final.
const OFFENDING = new RegExp(
  `^\\/(?:${ROUTES.join("|")})(?:\\/[a-z0-9-]+)?$`
);

// Capture la valeur de to="...", href="...", href:'...' (simple/double quote).
const LINK_ATTR = /\b(?:to|href)\s*[=:]\s*["']([^"']+)["']/g;

// Liens construits en template literal : to={`/blog/${slug}`} (cartes, recherche).
// On ne vise QUE to=/href= (pas path={…}, normalisé par SEO.tsx cleanPath()).
// Fautif si le template ne se termine pas par "/" juste avant le backtick fermant.
const LINK_TEMPLATE = new RegExp(
  "\\b(?:to|href)=\\{`(\\/(?:" + ROUTES.join("|") + ")[^`]*?)`\\}",
  "g"
);

// Fichiers de sauvegarde non routés (code mort) : hors périmètre du garde-fou.
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
      if (CLIENT_ONLY.test(pathname)) continue; // fallback SPA : pas de 301
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
