// Génère des variantes responsive (400w + 800w) des covers d'articles.
//
// Les covers sont stockées en ~1500px de large mais affichées en ~400px dans les
// cartes (Home/Blog) => gaspillage de bande passante (flag PSI "Améliorer l'affichage
// des images"). Ce script crée <name>-400.webp et <name>-800.webp pour permettre un
// srcset dans ArticleCard.
//
// ROBUSTESSE BUILD : si sharp échoue (ex. binaire natif indispo sur l'env CI), le
// script log un warning et sort en code 0 — les variantes déjà committées dans git
// prennent le relais, le build n'est jamais cassé (cf. règle Netlify dans CLAUDE.md).
//
// Idempotent : une variante n'est régénérée que si elle manque ou est plus ancienne
// que sa source.

import fs from 'fs';
import path from 'path';

const WIDTHS = [400, 800];
const dir = path.resolve('public/images/articles');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.warn('⚠️  sharp indisponible, génération des variantes ignorée (variantes committées utilisées).');
  process.exit(0);
}

// Sources = covers .webp, en excluant les variantes déjà générées (-400/-800).
const sources = fs
  .readdirSync(dir)
  .filter(f => f.endsWith('.webp') && !/-(400|800)\.webp$/.test(f));

let created = 0;
let skipped = 0;

for (const file of sources) {
  const src = path.join(dir, file);
  const base = file.replace(/\.webp$/, '');

  let meta;
  try {
    meta = await sharp(src).metadata();
  } catch (e) {
    console.warn(`⚠️  illisible, ignoré : ${file}`);
    continue;
  }

  const srcMtime = fs.statSync(src).mtimeMs;

  for (const w of WIDTHS) {
    // On génère TOUJOURS les deux variantes (même si la source est plus petite que
    // la cible) pour qu'aucune entrée du srcset ne pointe vers un fichier manquant
    // (404). `withoutEnlargement` empêche tout agrandissement au-delà de la source.
    const outName = `${base}-${w}.webp`;
    const out = path.join(dir, outName);

    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= srcMtime) {
      skipped++;
      continue;
    }

    try {
      await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(out);
      created++;
    } catch (e) {
      console.warn(`⚠️  échec génération ${outName}: ${e.message}`);
    }
  }
}

console.log(`🖼️  Variantes images : ${created} créée(s), ${skipped} à jour.`);
