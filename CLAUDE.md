# L'Éveil Mental — leveilmental.fr

## Stack
React + TypeScript + Tailwind + Vite + Netlify
Build: `npm run build` | Dev: `npm run dev`
Test build: `npm run build && npm run preview`

## Règles non-négociables
- Mettre à jour `src/data/blog-articles.ts` à chaque article
- Partir du dernier article existant comme modèle (ex: `src/articles/PlasticiteSynaptique.tsx`)
- JAMAIS HowTo schema (déprécié Google sept. 2023)
- URLs en français : /a-propos /ressources /blog
- Images : WebP uniquement + alt text 80 chars min
- Commits : `feat:` `fix:` `chore:` en français

## Fichiers clés
- Articles : `src/articles/`
- Modèle de référence : `src/articles/PlasticiteSynaptique.tsx`
- Patterns JSX exacts : `.claude/rules/template-v2.md`
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
Pour specs 24 articles → docs/strategie-seo-v2.md
Pour audit SEO → docs/audit-seo.md
