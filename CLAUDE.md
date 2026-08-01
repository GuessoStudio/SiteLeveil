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

## ⚠️ Règle submodules Git
Ne jamais cloner de repo externe (`claude-blog`, `claude-seo`, etc.) directement dans le projet avec `git clone` — ça crée un submodule implicite sans `.gitmodules`, ce qui casse les builds Netlify silencieusement.

Procédure correcte pour intégrer un repo externe :
1. Copier uniquement les fichiers nécessaires manuellement dans le projet
2. Ou `git clone` hors du dossier projet, puis copier les fichiers

## 🎬 Les vidéos ne sont plus ici
Le moteur de vidéos verticales **Le Petit Éveillé** (Remotion, TikTok/Reels/
Shorts) a été extrait le 2026-08-01 dans son propre dépôt :

- GitHub : `GuessoStudio/PetitEveille` (privé)
- Local : `OneDrive/Documents/DEV/PetitEveille`

**Ce dépôt-ci ne contient plus que le site.** Toute demande vidéo (script,
rendu, statistiques, pack réseaux) se traite dans l'autre dépôt, qui a son
propre `CLAUDE.md`. Ne pas recréer de dossier `video/` ici.

*Pourquoi la séparation : aucun code partagé, et les voix off ajoutaient
~570 Mo par an à un dépôt que Netlify clone à chaque déploiement.*

## Ne pas lire sauf si demandé
node_modules/ .git/ dist/ claude-seo/ claude-blog/
Pour règles articles → .claude/rules/articles.md
Pour specs 24 articles → docs/strategie-seo-v2.md
Pour audit SEO → docs/audit-seo.md
