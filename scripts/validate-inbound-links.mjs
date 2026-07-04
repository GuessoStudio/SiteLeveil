// Usage : npm run validate:inbound
//
// Garde-fou anti-orphelin. Fait échouer le build si un article de blog reçoit
// moins de MIN_INBOUND liens entrants depuis d'AUTRES articles.
//
// Pourquoi : un article sans liens entrants est orphelin. Google le voit dans le
// sitemap mais n'y arrive par aucun chemin de navigation → « Explorée, actuellement
// non indexée » (GSC). validate-article.ts vérifie déjà ce point PAR slug, mais
// seulement quand on le lance à la main. Ici on couvre TOUS les articles à chaque
// build (prebuild), pour qu'aucun orphelin ne parte en prod.
//
// Compte uniquement les liens depuis src/articles/ (cohérent avec validate-article.ts).

import * as fs from "fs";
import * as path from "path";

const MIN_INBOUND = 3;
const ARTICLES_DIR = path.join(process.cwd(), "src/articles");

const files = fs
  .readdirSync(ARTICLES_DIR)
  .filter((f) => f.endsWith(".tsx"));

// slug -> fichier
const bySlug = new Map();
const contentByFile = new Map();
for (const f of files) {
  const content = fs.readFileSync(path.join(ARTICLES_DIR, f), "utf8");
  contentByFile.set(f, content);
  const m = content.match(/slug:\s*["']([^"']+)["']/);
  if (m) bySlug.set(m[1], f);
}

const failures = [];
for (const [slug, selfFile] of bySlug) {
  // un lien entrant = /blog/{slug}/ ou /blog/{slug}" dans un AUTRE fichier article
  const inbound = [];
  for (const f of files) {
    if (f === selfFile) continue;
    const c = contentByFile.get(f);
    if (c.includes(`/blog/${slug}/`) || c.includes(`/blog/${slug}"`)) inbound.push(f);
  }
  if (inbound.length < MIN_INBOUND) {
    failures.push({ slug, count: inbound.length, sources: inbound });
  }
}

if (failures.length === 0) {
  console.log(`✅ validate:inbound — tous les articles ont ≥ ${MIN_INBOUND} liens entrants.`);
  process.exit(0);
}

console.log(
  `❌ validate:inbound — ${failures.length} article(s) sous le seuil de ${MIN_INBOUND} liens entrants :\n`,
);
for (const f of failures) {
  console.log(`   ${f.slug} : ${f.count}/${MIN_INBOUND}`);
  console.log(`     lié depuis : ${f.sources.length ? f.sources.join(", ") : "AUCUN (orphelin)"}`);
}
console.log(
  `\n⛔ Ajouter des liens contextuels vers ces articles depuis d'autres articles` +
  `\n   (voir workflow /article étape 4.5 bis). Sinon : « Explorée, non indexée » en GSC.`,
);
process.exit(1);
