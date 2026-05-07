---
description: Patterns JSX exacts pour la création d'articles — extraits de PlasticiteSynaptique.tsx
---

# Template V2 — Patterns JSX Exacts

> ⚠️ SOURCE DE VÉRITÉ : `src/articles/PlasticiteSynaptique.tsx`
> Si écart entre ce fichier et le TSX → **le TSX gagne**.
> Mettre à jour ce fichier à chaque évolution de pattern.

---

## 1. Imports obligatoires

```tsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
```

Aucun autre import de composant. QuickAnswer et StatBlock sont des blocs JSX inline.

---

## 2. Objet `meta` (en tête de fichier)

```tsx
const meta = {
  slug: "mot-cle-principal-secondaire",
  title: "Titre H1 avec mot-clé dans les 8 premiers mots",
  description: "150-160 chars avec mot-clé principal",
  cover: "/images/articles/[slug]-cover",  // sans extension — .webp ajouté dynamiquement
  datePublished: "YYYY-MM-DDT08:00:00+01:00",
  dateModified: "YYYY-MM-DDT08:00:00+01:00",
  tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos"
  },
  category: "Neurosciences",  // ou Psychologie | Relations Humaines | Développement Personnel
  readingTime: "14 min",
  version: "1.0",
  verifiedDate: "Avril 2026"
};
```

---

## 3. Bloc QuickAnswer (JSX inline)

À placer dans les 200 premiers mots, après l'image de couverture.
Couleur : **emerald** (verte). Jamais de composant importé — copier ce bloc tel quel.

```tsx
{/* QUICK ANSWER BLOCK — dans les 200 premiers mots */}
<div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
  <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
    <strong>En bref :</strong> [Réponse directe à la question principale en 40-60 mots]
  </p>
  <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
    <strong>Sources :</strong> Auteur, Journal, Année ; Auteur2, Journal2, Année2.
  </p>
</div>
```

---

## 4. Bloc StatBlock (JSX inline)

Minimum 3 par article. Jamais de composant importé — copier ce bloc tel quel.

### StatBlock placé juste après le QuickAnswer → couleur teal

```tsx
{/* StatBlock [description courte] */}
<div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
  <div className="flex items-start gap-4">
    <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">150M</div>
    <div>
      <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
        [Description de la statistique — contexte et signification]
      </p>
      <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
        Auteur et al., Institution, <em>Journal</em>, Mois Année — DOI : xx.xxxx/xxxxx
      </p>
    </div>
  </div>
</div>
```

### StatBlocks dans le corps de l'article → couleur indigo

```tsx
{/* StatBlock [description courte] */}
<div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
  <div className="flex items-start gap-4">
    <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">r&nbsp;=&nbsp;−0,32</div>
    <div>
      <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
        [Description de la statistique — contexte et signification]
      </p>
      <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
        Auteur et al., Institution, <em>Journal</em>, Mois Année — DOI : xx.xxxx/xxxxx
      </p>
    </div>
  </div>
</div>
```

---

## 5. Props du composant SEO

```tsx
<SEO
  title={meta.title}
  description={meta.description}
  image={og}                          // og = URL générée dynamiquement (voir section 7)
  type="article"
  path={`/blog/${meta.slug}`}
  datePublished={meta.datePublished}
  dateModified={meta.dateModified}
  authorName={meta.author?.name}
  tags={meta.tags}
  jsonLd={[schemaPerson, schemaOrganization, schemaImage, schemaBlogPosting, schemaBreadcrumb, schemaItemList, schemaFAQ]}
/>
```

---

## 6. Variables calculées (début du composant)

```tsx
export default function [NomArticle]() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
  const url = `${site}/blog/${meta.slug}/`;
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;
  const coverImageUrl = `${site}${meta.cover}.webp`;
  // ... schemas JSON-LD ...
}
```

---

## 7. Stack JSON-LD complet (7 schemas)

### Schema 1 — Person

```tsx
const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site}/a-propos#person`,
  name: "Guesso",
  url: `${site}/a-propos`,
  jobTitle: "Fondateur — L'Éveil Mental",
  worksFor: { "@id": `${site}#organization` }
};
```

### Schema 2 — Organization

```tsx
const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site}#organization`,
  name: "L'Éveil Mental",
  url: site,
  logo: {
    "@type": "ImageObject",
    url: `${site}/images/logo.webp`,
    width: 600,
    height: 150
  }
};
```

### Schema 3 — ImageObject

```tsx
const schemaImage = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${url}#primaryimage`,
  url: coverImageUrl,
  width: 1200,
  height: 630,
  caption: "[Description de l'image de couverture — 80 chars min]"
};
```

### Schema 4 — BlogPosting

```tsx
const schemaBlogPosting = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${url}#article`,
  headline: meta.title,
  description: meta.description,
  image: { "@id": `${url}#primaryimage` },
  datePublished: meta.datePublished,
  dateModified: meta.dateModified,
  author: { "@id": `${site}/a-propos#person` },
  publisher: { "@id": `${site}#organization` },
  about: {
    "@type": "DefinedTerm",
    name: "[Sujet principal de l'article]",
    description: "[Description du sujet — termes techniques principaux]"
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  keywords: meta.tags.join(", "),
  inLanguage: "fr-FR",
  articleSection: meta.category,
  wordCount: 4100  // ← ajuster selon le vrai nombre de mots
};
```

### Schema 5 — BreadcrumbList

```tsx
const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: site },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog` },
    { "@type": "ListItem", position: 3, name: meta.category, item: `${site}/blog?category=${meta.category.toLowerCase()}` },
    { "@type": "ListItem", position: 4, name: meta.title, item: url }
  ]
};
```

### Schema 6 — ItemList

```tsx
const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "[N] [pratiques/méthodes/stratégies] pour [sujet]",
  description: "[Description de la liste]",
  numberOfItems: N,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "[Nom de la stratégie 1]",
      description: "[Description courte avec source]"
    },
    // ... répéter pour chaque item
  ]
};
```

### Schema 7 — FAQPage

```tsx
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
};
```

Le tableau `faqData` est défini en haut du fichier (avant le composant) :

```tsx
const faqData = [
  {
    question: "Question conversationnelle longue traîne ?",
    answer: "Réponse auto-suffisante de 40-60 mots, sans référence au contexte de l'article."
  },
  // ... 8 questions minimum
];
```

---

## 8. Ordre d'appel jsonLd (ne pas modifier)

```tsx
jsonLd={[schemaPerson, schemaOrganization, schemaImage, schemaBlogPosting, schemaBreadcrumb, schemaItemList, schemaFAQ]}
```

7 schemas, dans cet ordre exact.

---

## 9. Enregistrement dans src/content/index.ts

```typescript
// 1. Ajouter l'import en haut
import [NomArticle] from "../articles/[NomArticle]";

// 2. Ajouter dans l'objet articlesBySlug
export const articlesBySlug: Record<string, FC> = {
  // ... entrées existantes ...
  "[slug-exact]": [NomArticle],
};
```

Sans cette étape → page "Article introuvable" même si le TSX et blog-articles.ts sont corrects.
