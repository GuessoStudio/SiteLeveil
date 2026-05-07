// Usage : npm run validate:article <slug>
// Ex    : npm run validate:article neurotransmetteurs-humeur-cerveau

import * as fs from "fs";
import * as path from "path";

const slug = process.argv[2];

if (!slug) {
  console.error("Usage : npm run validate:article <slug>");
  process.exit(1);
}

const ROOT = process.cwd();
let hasError = false;

function check(label: string, ok: boolean, fix: string) {
  if (ok) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label}`);
    console.log(`   → ${fix}`);
    hasError = true;
  }
}

// ── Trouver le fichier TSX par slug ─────────────────────────────────────────
const articlesDir = path.join(ROOT, "src/articles");
const tsxFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith(".tsx"));

const articleFile = tsxFiles.find(f => {
  const content = fs.readFileSync(path.join(articlesDir, f), "utf-8");
  return content.includes(`slug: "${slug}"`);
});

if (!articleFile) {
  console.error(`\n❌ Fichier TSX introuvable pour le slug "${slug}" dans src/articles/`);
  console.error(`   → Vérifier que meta.slug: "${slug}" est bien présent dans le fichier`);
  process.exit(1);
}

const articleContent = fs.readFileSync(path.join(articlesDir, articleFile), "utf-8");
console.log(`\nArticle détecté : src/articles/${articleFile}`);
console.log(`Slug             : ${slug}\n`);

// ── 1. TRAILING SLASH ────────────────────────────────────────────────────────
const urlMatch = articleContent.match(/const url\s*=\s*`[^`]+`/);
const urlLine = urlMatch ? urlMatch[0] : "";
const hasTrailingSlash = /\/`$/.test(urlLine);
check(
  "Trailing slash dans url",
  hasTrailingSlash,
  `Dans ${articleFile}, corriger :\n` +
  `     const url = \`\${site}/blog/\${meta.slug}\`\n` +
  `   →             \`\${site}/blog/\${meta.slug}/\``
);

// ── 2. CONTENT/INDEX.TS ──────────────────────────────────────────────────────
const indexContent = fs.readFileSync(path.join(ROOT, "src/content/index.ts"), "utf-8");
const inIndex = indexContent.includes(`"${slug}"`);
check(
  `Slug enregistré dans src/content/index.ts`,
  inIndex,
  `Ajouter dans articlesBySlug :\n` +
  `     import [NomComposant] from "../articles/[NomComposant]";\n` +
  `     "${slug}": [NomComposant],`
);

// ── 3. VITE.CONFIG.TS ────────────────────────────────────────────────────────
const viteContent = fs.readFileSync(path.join(ROOT, "vite.config.ts"), "utf-8");
const inVite = viteContent.includes(`'${slug}'`) || viteContent.includes(`"${slug}"`);
check(
  `Slug présent dans ARTICLE_SLUGS (vite.config.ts)`,
  inVite,
  `Dans vite.config.ts, ajouter au tableau ARTICLE_SLUGS :\n     '${slug}',`
);

// ── 4. LIENS INTERNES (min 2 autres articles) ────────────────────────────────
const linkTarget = `/blog/${slug}`;
const linkers = tsxFiles
  .filter(f => f !== articleFile)
  .filter(f => {
    const content = fs.readFileSync(path.join(articlesDir, f), "utf-8");
    return content.includes(linkTarget);
  });

check(
  `Liens internes : ${linkers.length}/2 article(s) pointent vers /blog/${slug}`,
  linkers.length >= 2,
  `Ajouter un lien contextuel vers /blog/${slug} dans ${2 - linkers.length} article(s) existant(s)\n` +
  `   Actuellement lié depuis : ${linkers.length > 0 ? linkers.join(", ") : "aucun"}`
);

// ── Résultat final ────────────────────────────────────────────────────────────
console.log("");
if (hasError) {
  console.log("⛔  Validation échouée — corriger les erreurs ci-dessus avant de déployer.");
  process.exit(1);
} else {
  console.log("✅  Toutes les vérifications passent — article prêt à déployer.");
}
