---
description: Créer un article complet et publié pour L'Éveil Mental.
Déclenche le workflow complet : recherche → brief → rédaction →
validation SEO/GEO → TSX → intégration. Utiliser pour tout nouvel
article du blog leveilmental.fr.
---

# Workflow Création Article L'Éveil Mental

## IMPORTANT — Lire avant tout
1. Lire `.claude/rules/articles.md` en entier
2. Lire `.claude/rules/template-v2.md` pour les patterns JSX exacts
3. Lire la spec de l'article dans `docs/strategie-seo-v2.md` (section 3)
4. Ne PAS commencer à rédiger avant d'avoir validé la spec

## PHASE 1 — Recherche et Brief (ne pas sauter)

### Étape 1.1 — Analyser la concurrence

ACTION MANUELLE REQUISE (2 minutes) :
Dans Perplexity Pro, copier-coller ce prompt :

"Analyse les 5 premiers résultats Google.fr pour
'[MOT-CLÉ PRINCIPAL]'. Pour chaque résultat note :
titre H1, H2 principaux, présence FAQ, études citées.
Identifie ce qu'aucun ne couvre correctement.
Trouve ensuite 3 études PubMed récentes sur [SUJET]
avec statistiques précises utilisables comme StatBlock."

Coller le résultat dans Claude Code avec :
"Voici l'analyse concurrence : [résultat Perplexity]
Continue avec l'étape 1.2 — génère le brief."

Si Perplexity non disponible :
Claude Code fait une analyse approximative
depuis ses connaissances — moins précis.

### Étape 1.2 — Générer le brief
/blog brief "[TOPIC]"
Valider que le brief inclut :
- Mot-clé principal + volume + KD
- Featured snippet ciblé
- 8 questions FAQ minimum
- 3 StatBlocks avec sources

### Étape 1.3 — Valider avant de continuer
Confirmer avec l'utilisateur que le brief est correct.
NE PAS passer à la Phase 2 sans validation.

## PHASE 2 — Rédaction

### Étape 2.1 — Écrire l'article
/blog write "[TOPIC]"

Vérifier pendant la rédaction :
- Quick Answer Block présent dans les 200 premiers mots ✓
- H2 formulés en questions directes ✓
- Chercheurs nommés + institutions ✓
- Minimum 3 StatBlocks avec sources complètes ✓
- Signal fraîcheur "Version 1.0 — [Mois Année]" ✓

### Étape 2.2 — Fact-check automatique
/blog factcheck [fichier généré]
Corriger toute statistique non vérifiable.

### Étape 2.3 — Fact-check scientifique externe
⚠️ ACTION MANUELLE REQUISE — Perplexity Pro

Copier ce prompt dans Perplexity Pro :

"Vérifie la rigueur scientifique de cet article
sur [SUJET]. Pour chaque étude citée, vérifie :
1. Le journal exact de publication
2. L'année exacte
3. Si les données sont issues d'études animales
   ou humaines
4. Si les chiffres cités sont dans les bonnes
   proportions
5. Si les attributions chercheurs/institutions
   sont correctes
Signale toute erreur ou approximation."

Coller le texte de l'article + attendre le rapport.
Corriger TOUTES les erreurs signalées avant
de passer à la Phase 3.

⚠️ RÈGLES ABSOLUES :
- Jamais présenter des données animales
  comme humaines sans précision
- Toujours indiquer le vrai journal de publication
- Les hypothèses (Medical Hypotheses) doivent
  être présentées comme telles
- Vérifier chaque attribution chercheur/étude

## PHASE 3 — Validation SEO + GEO

### Étape 3.1 — Score SEO
/blog seo-check [fichier généré]
Score minimum acceptable : 75/100
Si inférieur → corriger les points signalés avant de continuer.

### Étape 3.2 — Score GEO (citations IA)
/blog geo [fichier généré]
Vérifier : Quick Answer extractable, FAQ auto-suffisante,
entity mapping complet.

### Étape 3.3 — Schema markup
/blog schema [fichier généré]
Valider le stack 7 schemas : Person + Organization + ImageObject +
BlogPosting + BreadcrumbList + ItemList + FAQPage.

## PHASE 4 — Conversion TSX

### Étape 4.1 — Convertir en TSX
Prendre le dernier article publié comme modèle de référence
(ex. `src/articles/PlasticiteSynaptique.tsx` ou `src/articles/SystemeLimbique.tsx`).
`ArticleTemplate_V2.tsx` n'existe pas — toujours partir d'un article existant.

Structure du fichier TSX à produire :
src/articles/[NomArticle].tsx

Intégrer dans l'ordre :
1. `import SEO from "../components/SEO"` (seul import de composant externe)
2. Quick Answer Block inline (div JSX avec classes `bg-emerald-50`, pas un composant importé)
   dans les 200 premiers mots
3. Minimum 3 StatBlocks inline (div JSX avec classes `bg-teal-50`, pas un composant importé)
4. Stack 7 JSON-LD via prop `jsonLd` du composant SEO (Person, Organization, ImageObject,
   BlogPosting, BreadcrumbList, ItemList, FAQPage)
5. Signal fraîcheur dans le header (`Version {meta.version} — {meta.verifiedDate}`)
6. Section FAQ avec minimum 8 questions en HTML visible
7. Liens internes contextuels (vérifier que les slugs existent)

⚠️ QuickAnswer et StatBlock ne sont PAS des composants React à importer.
Ce sont des blocs JSX inline copiés depuis un article existant.

⚠️ CRITIQUE — Enregistrer le composant dans `src/content/index.ts` :
```typescript
import [NomArticle] from "../articles/[NomArticle]";
// Ajouter dans l'objet articlesBySlug :
"[slug]": [NomArticle],
```
Sans cette étape, l'article affiche "Article introuvable" même si
le fichier TSX et blog-articles.ts sont corrects.

### Étape 4.2 — Ajouter le slug dans vite.config.ts

⚠️ CRITIQUE — Sans cette étape, la page n'est pas pré-rendue en HTML statique.
Google reçoit une page vide → canonical non détecté → erreur GSC
"Page en double sans URL canonique".

Dans `vite.config.ts`, tableau `ARTICLE_SLUGS`, ajouter :
```typescript
const ARTICLE_SLUGS = [
  // ... slugs existants ...
  '[slug]',  // ← ajouter ici (sans /blog/)
]
```

### Étape 4.3 — Générer et placer l'image de couverture

**Étape 4.3a — Générer 3 concepts de prompt**
Suivre la section 9 de `.claude/rules/articles.md` :
- Identifier le pilier (Neurosciences / Psychologie / Relations Humaines / Développement Personnel)
- Produire 3 concepts distincts (macro / métaphore / abstrait) avec prompt complet en anglais
- Inclure le style pilier + contrainte commune (16:9, 1200x630px, no text, no watermark)

Puis choisir 1 concept et générer l'image via `/seo-image-gen` ou Canva.

**Étape 4.3b — Placer l'image**
```
/public/images/articles/[slug]-cover.webp
```
Dimensions : 1200×630 px minimum. Format : WebP uniquement.
Alt text dans le TSX : minimum 80 caractères, descriptif.

⚠️ Sans cette image, la couverture est brisée et l'OG tag renvoie une 404.

### Étape 4.4 — Mettre à jour les métadonnées
Ajouter l'entrée dans `src/data/blog-articles.ts` :
```typescript
{
  id: [prochain id],
  title: "[titre exact]",
  excerpt: "[meta description]",
  category: "[catégorie]",
  readTime: [X],
  date: "[YYYY-MM-DD]",
  image: "/images/articles/[slug]-cover",
  slug: "[slug-exact]",
  featured: false
}
```

### Étape 4.5 — Vérifier les liens internes
Pour chaque lien interne dans l'article, vérifier que le slug
existe dans `src/data/blog-articles.ts`.
Si absent → remplacer par un lien existant.

### Étape 4.6 — Vérifier le build
```bash
npm run build
```
Corriger toute erreur TypeScript ou import manquant avant de continuer.
Ne pas committer un article qui ne compile pas.

## PHASE 5 — Livraison

### Étape 5.0 — Mettre à jour le sitemap
⚠️ NE PAS modifier `public/sitemap.xml` directement — il est écrasé à chaque
build par le script `prebuild`.

Ajouter le slug dans `scripts/generate-sitemap.mjs`, tableau `articles[]` :

```js
const articles = [
  // ... articles existants ...
  "/blog/[slug]"  // ← ajouter ici
];
```

`public/sitemap.xml` et `dist/sitemap.xml` sont régénérés automatiquement
au prochain `npm run build`.

### Étape 5.1 — Demander l'indexation Google
⚠️ ACTION MANUELLE REQUISE — Google Search Console
1. Aller sur search.google.com/search-console
2. Coller l'URL : https://leveilmental.fr/blog/[slug]
3. Cliquer "Demander une indexation"
4. Vérifier : Fils d'Ariane ✅ + FAQ ✅ détectés

Sans cette étape, Google peut mettre 2-4 semaines
à indexer l'article au lieu de 24-48h.

### Étape 5.2 — Lead Magnet

Choisir le format le plus pertinent selon l'article :
- Liste de techniques → Checklist PDF 1 page
- Protocole étape par étape → Guide PDF 1 page
- Données et statistiques → Infographie
- Sujet complexe → Mini e-book 3-5 pages

Générer le contenu complet :
- Titre accrocheur
- Structure complète
- Contenu scientifique condensé
- Nom fichier : [slug]-checklist.pdf ou [slug]-guide.pdf

Ajouter l'entrée dans `src/pages/Resources.tsx` :
```typescript
{
  id: [prochain id],
  title: "[titre lead magnet]",
  description: "[description courte]",
  category: "Guides",
  type: "PDF",
  pages: [X],
  rating: 5.0,
  image: "/images/resources/[slug]-cover.webp",
  free: true,
  downloadUrl: "/downloads/[slug]-checklist.pdf"
}
```

⚠️ ACTIONS MANUELLES REQUISES :
a) Mettre en forme sur Canva avec template L'Éveil
b) Placer le PDF dans /public/downloads/
c) Vérifier que le CTA est présent dans l'article TSX

### Étape 5.3 — Repurposing réseaux sociaux

/blog repurpose [fichier généré]

Générer dans l'ordre :
1. Instagram — carrousel 5 slides
   Slide 1 : accroche + stat choc
   Slides 2-4 : une méthode clé par slide
   Slide 5 : CTA → "Lien en bio"

2. TikTok/Reels — script 60 secondes
   Format : accroche 3 sec + contenu + CTA final

3. Facebook — post éducatif 600-800 mots
   Format : stat choc → 3-5 points développés →
   CTA commentaire ("écris BDNF en commentaire
   pour recevoir le guide")
   ⚠️ Ne pas mettre de lien externe dans le post Facebook

4. Twitter/X — thread 8 tweets
   Tweet 1 : stat choc
   Tweets 2-7 : une idée par tweet
   Tweet 8 : lien article

### Étape 5.4 — Résumé de livraison
Produire un résumé avec :
- Fichier créé : `src/articles/[NomArticle].tsx`
- Slug : `/blog/[slug]`
- Score SEO : X/100
- Score GEO : [résultat]
- Checklist complète (tous les points cochés)
- Points d'attention éventuels

### Étape 5.5 — Commit message
feat: ajouter article "[titre court]"

Slug : /blog/[slug]
Catégorie : [catégorie]
KW principal : [mot-clé] ([volume]/mois, KD [score])
Score SEO : X/100
Composants : QuickAnswer, [N]x StatBlock, FAQ [N]Q
Liens internes : [N] liens vers articles existants
Mettre à jour blog-articles.ts ✓


## Usage
/project:article "cortisol stress chronique mémoire"
/project:article "ocytocine lien social neurosciences"
/project:article "microbiome intestin cerveau axe gut-brain"

## Erreurs fréquentes à éviter
- ❌ Commencer à rédiger sans valider le brief
- ❌ Oublier de mettre à jour blog-articles.ts
- ❌ Oublier d'ajouter le composant dans src/content/index.ts (objet `articlesBySlug`) → page blanche
- ❌ Lier vers un slug qui n'existe pas
- ❌ FAQ avec moins de 8 questions
- ❌ StatBlock sans source complète (Auteur, Institution, Année)
- ❌ H2 sans format question
- ❌ Oublier le Quick Answer Block dans les 200 premiers mots
- ❌ Modifier public/sitemap.xml directement (écrasé au prochain build)
- ❌ Oublier d'ajouter le slug dans ARTICLE_SLUGS (vite.config.ts) → HTML vide pour Google → erreur GSC "page en double sans canonique"
