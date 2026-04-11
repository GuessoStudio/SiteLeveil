# L'Éveil Mental — leveilmental.fr

## Stack
React + TypeScript + Tailwind + Vite + Netlify
Build: `npm run build` | Dev: `npm run dev`
Test build: `npm run build && npm run preview`

## Règles non-négociables
- Mettre à jour `src/data/blog-articles.ts` à chaque article
- Utiliser ArticleTemplate_V2.tsx pour tout nouvel article
- JAMAIS HowTo schema (déprécié Google sept. 2023)
- URLs en français : /a-propos /ressources /blog
- Images : WebP uniquement + alt text 80 chars min
- Commits : `feat:` `fix:` `chore:` en français

## Fichiers clés
- Articles : `src/articles/`
- Template : `ArticleTemplate_V2.tsx`
- Métadonnées blog : `src/data/blog-articles.ts`
- SEO component : `src/components/SEO.tsx`
- Statiques : `public/`

## Contexte éditorial
Site neurosciences/psychologie FR. Solo. Auteur : Guesso.
Ton : professeur scientifique — jamais coach motivationnel.
Structure : fait scientifique → mécanisme → application.
Chercheurs nommés + institution. Ex: "Gazzaley (UCSF)".

## Ne pas lire sauf si demandé
node_modules/ .git/ dist/ claude-seo/ claude-blog/
Pour règles articles → .claude/rules/articles.md
Pour specs 24 articles → docs/articles-specs.md
Pour audit SEO → docs/audit-seo.md
