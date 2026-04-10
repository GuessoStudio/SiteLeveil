import fs from 'fs';
import path from 'path';

function findHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const distDir = path.resolve('dist');
const htmlFiles = findHtmlFiles(distDir);

console.log(`🔄 Optimizing ${htmlFiles.length} HTML file(s)...`);

let totalOptimized = 0;

for (const filePath of htmlFiles) {
  try {
    let html = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    // 1. Rendre le CSS principal asynchrone
    const linkRegex = /<link rel="stylesheet" crossorigin href="\/assets\/[^"]+\.css">/;
    const match = html.match(linkRegex);
    if (match) {
      const originalLink = match[0];
      const asyncLink = originalLink.replace('rel="stylesheet"', 'rel="stylesheet" media="print" onload="this.media=\'all\'"');
      const noscriptLink = `<noscript>${originalLink}</noscript>`;
      html = html.replace(originalLink, `${asyncLink}${noscriptLink}`);
      changed = true;
    }

    // 2. fetchpriority sur l'image LCP
    if (!html.includes('fetchpriority="high"') && html.includes('loading="eager"')) {
      html = html.replace('loading="eager"', 'loading="eager" fetchpriority="high"');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, html);
      totalOptimized++;
    }
  } catch (e) {
    console.error(`❌ Error optimizing ${filePath}:`, e);
    process.exit(1);
  }
}

console.log(`✅ Optimized ${totalOptimized}/${htmlFiles.length} HTML file(s).`);
console.log('🚀 HTML Optimization complete.');
