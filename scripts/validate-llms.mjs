// Usage : npm run validate:llms
//
// Garde-fou anti-dérive de public/llms.txt.
//
// Pourquoi un validateur et non un générateur : les descriptions de llms.txt
// sont écrites à la main et nettement plus riches que les excerpts de
// blog-articles.ts (« Mécanismes de la neuroplasticité, périodes critiques et
// 7 stratégies validées — Neurosciences, 12 min »). Les régénérer
// automatiquement appauvrirait le fichier. On vérifie donc seulement qu'aucun
// article n'a été oublié, et on laisse la rédaction à l'humain.
//
// Le fichier avait dérivé : dissonance-cognitive, publié le 9 août 2026, y
// manquait encore le 11 — soit deux jours d'invisibilité pour les crawlers IA
// qui s'appuient dessus (GPTBot, ClaudeBot, PerplexityBot, tous autorisés dans
// robots.txt).

import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const LLMS = path.join(ROOT, "public", "llms.txt");
const SOURCES = [
  path.join(ROOT, "src", "articles"),
  path.join(ROOT, "src", "pages", "Blog"),
];

if (!fs.existsSync(LLMS)) {
  console.log("❌ validate:llms — public/llms.txt introuvable.");
  process.exit(1);
}

const contenu = fs.readFileSync(LLMS, "utf-8");

/** Slugs déclarés par les composants d'article (source de vérité). */
const slugs = new Map();
for (const dir of SOURCES) {
  if (!fs.existsSync(dir)) continue;
  for (const nom of fs.readdirSync(dir)) {
    if (!nom.endsWith(".tsx") || /_BACKUP\./.test(nom)) continue;
    const src = fs.readFileSync(path.join(dir, nom), "utf-8");
    const m = src.match(/slug:\s*"([^"]+)"/);
    if (m) slugs.set(m[1], nom);
  }
}

const manquants = [...slugs.entries()].filter(([slug]) => !contenu.includes(slug));

if (manquants.length === 0) {
  console.log(`✅ validate:llms — ${slugs.size}/${slugs.size} articles référencés dans llms.txt.`);
  process.exit(0);
}

console.log(
  `❌ validate:llms — ${manquants.length} article(s) absent(s) de public/llms.txt :\n`
);
for (const [slug, fichier] of manquants) {
  console.log(`   ${slug}`);
  console.log(`     déclaré dans src/.../${fichier}`);
}
console.log(
  `\n⛔ Ajouter une entrée dans la section « ## Articles » de public/llms.txt,` +
  `\n   au format :` +
  `\n     - Titre court : https://leveilmental.fr/blog/<slug>/` +
  `\n       > Résumé en une ligne — Catégorie, X min` +
  `\n\n   Ce fichier est lu par GPTBot, ClaudeBot et PerplexityBot, tous` +
  `\n   explicitement autorisés dans robots.txt. Un article absent leur est` +
  `\n   invisible.`
);
process.exit(1);
