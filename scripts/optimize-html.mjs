import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist/index.html');

try {
    let html = fs.readFileSync(distPath, 'utf-8');

    console.log('🔄 Optimizing dist/index.html...');

    // 1. Rendre le CSS principal asynchrone
    // Regex pour trouver le lien CSS généré par Vite
    const linkRegex = /<link rel="stylesheet" crossorigin href="\/assets\/index-[^"]+\.css">/;
    const match = html.match(linkRegex);

    if (match) {
        const originalLink = match[0];
        // Transformation en chargement asynchrone standard
        // On ajoute aussi <noscript> pour le fallback
        const asyncLink = originalLink.replace('rel="stylesheet"', 'rel="stylesheet" media="print" onload="this.media=\'all\'"');
        const noscriptLink = `<noscript>${originalLink}</noscript>`;

        html = html.replace(originalLink, `${asyncLink}${noscriptLink}`);
        console.log('✅ Main CSS made asynchronous.');
    } else {
        console.warn('⚠️ Main CSS link not found. It might be already inlined or naming changed.');
    }

    // 2. Vérifier fetchpriority (optionnel, mais pour être sûr)
    if (!html.includes('fetchpriority="high"')) {
        html = html.replace('loading="eager"', 'loading="eager" fetchpriority="high"');
        console.log('✅ Added fetchpriority="high" to LCP image.');
    }

    fs.writeFileSync(distPath, html);
    console.log('🚀 HTML Optimization complete.');

} catch (e) {
    console.error('❌ Error optimizing HTML:', e);
    process.exit(1);
}
