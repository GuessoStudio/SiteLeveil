---
description: Créer un article complet et publié pour L'Éveil Mental.
Déclenche le workflow complet : recherche → brief → rédaction →
validation SEO/GEO → TSX → intégration. Utiliser pour tout nouvel
article du blog leveilmental.fr.
---

# Workflow Création Article L'Éveil Mental

## IMPORTANT — Lire avant tout
1. Lire `.claude/rules/articles.md` en entier
2. Lire la spec de l'article dans `docs/articles-specs.md`
3. Ne PAS commencer à rédiger avant d'avoir validé la spec

## PHASE 1 — Recherche et Brief (ne pas sauter)

### Étape 1.1 — Analyser la concurrence
Rechercher sur Google.fr : "[mot-clé principal]"
Pour les 5 premiers résultats, noter :
- H1 exact
- Structure H2 (tous les titres)
- Présence/absence : FAQ, études citées, données chiffrées,
  applications pratiques
- Ce qu'aucun des 5 ne couvre correctement

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
Valider le triple stack : Article + ItemList + FAQPage.

## PHASE 4 — Conversion TSX

### Étape 4.1 — Convertir en TSX
Utiliser OBLIGATOIREMENT `ArticleTemplate_V2.tsx` comme base.

Structure du fichier TSX à produire :
src/articles/[NomArticle].tsx

Intégrer dans l'ordre :
1. Import SEO V2 avec props : category, authorUrl, jsonLd
2. Composant QuickAnswer dans les 200 premiers mots
3. Minimum 3 composants StatBlock avec source
4. Triple JSON-LD via prop jsonLd
5. Signal fraîcheur dans le header
6. Section FAQ avec minimum 8 questions en HTML visible
7. Liens internes contextuels (vérifier que les slugs existent)

### Étape 4.2 — Mettre à jour les métadonnées
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

### Étape 4.3 — Vérifier les liens internes
Pour chaque lien interne dans l'article, vérifier que le slug
existe dans `src/data/blog-articles.ts`.
Si absent → remplacer par un lien existant.

## PHASE 5 — Livraison

### Étape 5.0 — Mettre à jour le sitemap
Ajouter l'URL de l'article dans `public/sitemap.xml` :

```xml
<url>
  <loc>https://leveilmental.fr/blog/[slug]</loc>
  <lastmod>[YYYY-MM-DD]</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

Insérer dans l'ordre lastmod décroissant (article le plus récent en premier).

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
feat(blog): ajouter article "[titre court]"

Slug : /blog/[slug]
Catégorie : [catégorie]
KW principal : [mot-clé] ([volume]/mois, KD [score])
Score SEO : X/100
Composants : QuickAnswer, [N]x StatBlock, FAQ [N]Q
Liens internes : [N] liens vers articles existants
Mettre à jour blog-articles.ts ✓


## Usage
/project:article "BDNF augmenter naturellement neurosciences"
/project:article "système limbique cerveau émotionnel"
/project:article "plasticité synaptique apprentissage"

## Erreurs fréquentes à éviter
- ❌ Commencer à rédiger sans valider le brief
- ❌ Oublier de mettre à jour blog-articles.ts
- ❌ Lier vers un slug qui n'existe pas
- ❌ FAQ avec moins de 8 questions
- ❌ StatBlock sans source complète (Auteur, Institution, Année)
- ❌ H2 sans format question
- ❌ Oublier le Quick Answer Block dans les 200 premiers mots
