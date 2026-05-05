# Plan d'Action SEO — leveilmental.fr
**Généré le :** 24 avril 2026
**Score actuel :** 69/100 | **Objectif :** 85/100

---

## 🔴 CRITIQUE — Bloquer/Pénaliser (Fix immédiat)

### C0 — neuroplasticite-cerveau : auteur URL cassée + cover JPEG
**Fichier :** `src/articles/NeuroplasticiteCerveau.tsx`
**Problèmes identifiés par l'audit schema :**
1. `author.url` = `"https://leveilmental.fr/about"` (slug anglais) → doit être `"https://leveilmental.fr/a-propos"`
   - Google ne peut pas résoudre l'entité auteur → E-E-A-T cassé sur cet article
2. `cover` référencé en `.jpg` → doit être `.webp` (règle site non-négociable)
   - Vérifier aussi que le fichier image physique `/public/images/articles/neuroplasticite-cover.webp` existe

**Fix immédiat (sans migration V2 complète) :**
```tsx
// Corriger l'URL auteur dans le BlogPosting schema
"author": {
  "@type": "Person",
  "url": "https://leveilmental.fr/a-propos"  // ← était /about
}
// Corriger le cover dans meta
cover: "/images/articles/neuroplasticite-cover",  // sans extension
```
**Effort :** 20 min

### C1 — About page : ajouter le composant SEO
**Fichier :** `src/pages/About.tsx`
**Problème :** Aucun `<SEO>` importé ou appelé — la page n'a ni canonical, ni meta description, ni schema. C'est la page E-E-A-T principale du site.
**Fix :**
```tsx
import SEO from "../components/SEO";
// Dans le composant :
const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site}/a-propos#person`,
  name: "Guesso",
  url: `${site}/a-propos`,
  jobTitle: "Fondateur — L'Éveil Mental",
  worksFor: { "@id": `${site}#organization` }
};
<SEO
  title="À propos de Guesso — L'Éveil Mental"
  description="Guesso, fondateur de L'Éveil Mental — site de neurosciences et psychologie appliquée en français. Découvrez la démarche éditoriale basée sur les études scientifiques."
  path="/a-propos/"
  type="website"
  jsonLd={[schemaPerson]}
/>
```
**Effort :** 1h (+ enrichir la bio à 500 mots minimum)

### C3 — Canonical URL : aligner sur le trailing slash Netlify
**Fichier :** `src/components/SEO.tsx`
**Problème :** Les canonical tags génèrent des URLs sans trailing slash (`/blog/slug`) alors que Netlify sert avec trailing slash (`/blog/slug/`). Le sitemap utilise le trailing slash. Google reçoit des signaux contradictoires.
**Fix :**
```tsx
// Dans SEO.tsx, s'assurer que path se termine toujours par "/"
const canonicalUrl = `${site}${path.endsWith('/') ? path : path + '/'}`;
```
Aussi mettre à jour les `@id` dans les schemas JSON-LD (BlogPosting, BreadcrumbList) pour utiliser le trailing slash.

**Impact :** Résout le signal de contenu dupliqué, consolide le PageRank.
**Effort :** 1h

---

## 🟠 HIGH — Impact rankings significatif (Fix < 7 jours)

### H1 — Ajouter lastmod dans le sitemap
**Fichier :** `scripts/generate-sitemap.mjs`
**Problème :** Aucune date `<lastmod>` dans le sitemap — Google ne peut pas détecter les mises à jour.
**Fix :** Lire la date de modification de chaque fichier TSX correspondant et l'injecter :
```js
import { statSync } from 'fs';
const lastmod = statSync(`src/articles/MonArticle.tsx`).mtime.toISOString().split('T')[0];
// → <lastmod>2026-04-24</lastmod>
```
**Impact :** Recrawl prioritaire des contenus récents, meilleure fraîcheur perçue.
**Effort :** 2h

### H2 — Compléter les schemas des anciens articles (3 articles minimum)
**Fichiers :** `src/articles/NeuroplasticiteCerveau.tsx` + autres articles pré-V2
**Problème :** neuroplasticite-cerveau n'a que 3/7 schemas. Manquent : Person, Organization, ImageObject, ItemList.
**Fix :** Appliquer le template V2 complet (`.claude/rules/template-v2.md`) à chaque ancien article.
**Articles concernés :** neuroplasticite-cerveau, confiance-en-soi-durable, surmonter-rejet-social, neuro-dopamine-routine, rumination-mentale, attention-fragmentee, procrastination-cerveau, methode-acr, syndrome-imposteur, sommeil-reparateur, lumiere-naturelle, bdnf-augmenter, systeme-limbique
**Impact :** Rich Results éligibles (breadcrumbs, FAQ, article carousel).
**Effort :** 30-45 min/article × 13 articles

### H3 — Porter les FAQ des anciens articles à 8 questions minimum
**Fichier :** `src/articles/NeuroplasticiteCerveau.tsx` et autres
**Problème :** neuroplasticite-cerveau : 6 FAQ (minimum = 8). Autres anciens articles probablement similaires.
**Fix :** Ajouter 2+ questions longue traîne par article, conformes au format du template V2.
**Effort :** 1h/article

### H4 — Page À propos : meta + schema + crédentials
**Fichier :** `src/pages/APropos.tsx` (ou équivalent)
**Problème :**
- Aucune meta description
- Aucun schéma Person/Organization
- Crédentials "passionné depuis 2020" — insuffisant pour E-E-A-T
**Fix :**
1. Ajouter meta description 150-160 chars
2. Injecter schéma Person complet (même que les articles)
3. Enrichir la bio : formation suivie, sources de référence, approche méthodologique, années de publication, nombre d'articles, sources utilisées (PubMed, Nature, etc.)
**Impact :** Signal E-E-A-T direct. Google évalue la page À propos pour juger l'autorité de l'auteur.
**Effort :** 2h

### H5 — Ajouter `sameAs` dans le schéma Person (tous les articles)
**Fichier :** `.claude/rules/template-v2.md` + tous les TSX articles
**Problème :** Google ne peut pas résoudre "Guesso" comme entité vérifiable — limite la citabilité IA et l'E-E-A-T.
**Fix :** Créer d'abord un profil public (LinkedIn minimum), puis ajouter dans schemaPerson :
```tsx
sameAs: [
  "https://www.linkedin.com/in/guesso-leveilmental",
  // Ajouter d'autres profils publics si disponibles
]
```
Mettre à jour le template-v2.md et régénérer les articles (ou centraliser dans SEO.tsx).
**Effort :** 30 min (après création profil LinkedIn)

### H6 — Ajouter Twitter Card tags dans SEO.tsx
**Fichier :** `src/components/SEO.tsx`
**Problème :** Aucun tag `twitter:` détecté. Partage sur X sans image ni description structurée.
**Fix :**
```tsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
<meta name="twitter:site" content="@leveilmental" />
```
**Effort :** 30 min

---

## 🟡 MEDIUM — Optimisation (Fix < 1 mois)

### M1 — Corriger le StatBlock Singer dans EmpathieNeuronesMiroirs.tsx
**Fichier :** `src/articles/EmpathieNeuronesMiroirs.tsx` (~ligne 394)
**Problème :** Stat headline = `r sig.` — non lisible pour le grand public.
**Fix :** Remplacer par "16 couples" (taille de l'échantillon) ou un % d'activation, et déplacer la notation statistique dans la description.
**Effort :** 10 min

### M2 — Corriger la citation BDNF/exercice dans PlasticiteSynaptique.tsx
**Fichier :** `src/articles/PlasticiteSynaptique.tsx` (~lignes 557-565)
**Problème :** "20 à 30 minutes d'effort aérobie" attribué à Wrann et al. (2013) — étude sur souris.
**Fix :** Ajouter citation humaine : Ferris et al., 2007, *BMC Neuroscience* ou qualifier par "selon les protocoles humains complémentaires".
**Effort :** 20 min

### ✅ FAIT — robots.txt : OAI-SearchBot et ClaudeBot ajoutés
*Appliqué directement pendant l'audit.*

### ✅ FAIT — llms.txt : 15/15 articles + licence
*Appliqué directement pendant l'audit.*

### M3 — Vérifier publication peer-review du préprint Samavat (PlasticiteSynaptique)
**Fichier :** `src/articles/PlasticiteSynaptique.tsx`
**Problème :** StatBlock "50% synaptic storage capacity" cite Samavat et al., bioRxiv 2024 (préprint). Google AIO et Perplexity pénalisent les sources preprint.
**Fix :** Chercher sur PubMed si l'article a été publié (recherche : "Samavat" + "Salk Institute" + "synaptic capacity" + 2024-2025). Si oui, mettre à jour le DOI. Sinon, ajouter "(préprint, soumis à évaluation)" dans la source.
**Effort :** 15 min
**Fichier à créer :** `public/llms.txt`
**Contenu suggéré :**
```
# L'Éveil Mental — leveilmental.fr
# Site éducatif neurosciences & psychologie appliquée — français

> L'Éveil Mental est un site francophone d'éducation aux neurosciences et à la psychologie,
> fondé par Guesso. Chaque article suit la structure : fait scientifique → mécanisme → application.
> Sources : études peer-reviewed avec DOI. Aucun conseil médical.

## Sections
- /blog/ : 15 articles de fond (3 500–4 100 mots) avec citations DOI
- /a-propos/ : présentation de l'auteur et de la démarche
- /ressources/ : outils pratiques (Neuro-Journal, test Big Five, calculateur sommeil)

## Contact
- Email : [email]
- Auteur : Guesso
```
**Impact :** Citabilité IA améliorée (ChatGPT, Perplexity, Claude).
**Effort :** 15 min

### M2 — Aligner les BreadcrumbList URLs avec trailing slash
**Fichier :** `src/components/SEO.tsx` ou chaque article TSX
**Problème :** `"item": "https://leveilmental.fr/blog"` → doit être `"https://leveilmental.fr/blog/"`
**Fix :** S'assurer que les URLs dans schemaBreadcrumb.itemListElement.item se terminent par `/`.
**Effort :** 30 min

### M3 — Ajouter worksFor dans Person schema sur tous les articles
**Problème :** L'article plasticite-synaptique (et possiblement d'autres) n'a pas `worksFor` dans le schéma Person.
**Fix :** Vérifier et uniformiser la fonction de génération du schemaPerson dans chaque TSX (ou centraliser dans SEO.tsx).
**Effort :** 30 min + build test

### M4 — Ajouter schéma sur la homepage
**Fichier :** `src/pages/Home.tsx` (ou équivalent)
**Schémas à ajouter :** WebSite (avec SearchAction si applicable) + Organization
**Effort :** 1h

### M5 — Ajouter schéma CollectionPage sur /blog/
**Fichier :** `src/pages/Blog.tsx`
**Schema à ajouter :** ItemList ou CollectionPage listant les articles
**Effort :** 1h

### M6 — Corriger les H2 des anciens articles en format question directe
**Ex. à corriger dans neuroplasticite-cerveau :**
- ❌ "Qu'est-ce que la neuroplasticité : définition scientifique"
- ✅ "Qu'est-ce que la neuroplasticité ?"
- ❌ "Les mécanismes cellulaires de la plasticité"
- ✅ "Quels sont les mécanismes cellulaires de la plasticité ?"
**Effort :** 30 min/article

### M7 — Headers de sécurité Netlify
**Fichier à modifier/créer :** `netlify.toml`
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
```
**Impact :** Signaux confiance + potentiel impact léger ranking.
**Effort :** 30 min

### M8 — Corriger H1 homepage pour les crawlers
**Problème :** L'animation split-text concatène "Éveillez" + "votre" + "POTENTIEL" sans espace pour les crawlers → "ÉveillezvotrePOTENTIEL".
**Fix :** Utiliser `aria-label` ou un H1 caché `sr-only` avec le texte complet, et un H1 visuel pour l'animation.
**Effort :** 30 min

---

## 🔵 LOW — Nice to have (Backlog)

### L1 — Audit bundle JS (GSAP, Framer Motion, OGL, Recharts)
Vérifier que ces librairies sont importées uniquement là où utilisées, avec dynamic import si possible.
`npm run build` puis analyser la taille des chunks dans `dist/assets/`.

### L2 — Lazy loading explicite sur les images articles
Vérifier que `loading="lazy"` est sur les images body et `loading="eager"` sur le cover (above fold).

### L3 — Homogénéiser le wordCount dans les BlogPosting schemas
Le `wordCount` est actuellement codé en dur (ex: 4100). Le rendre dynamique ou le vérifier manuellement.

### L4 — Test PageSpeed Insights
Lancer un audit PageSpeed sur la homepage et les articles :
https://pagespeed.web.dev/report?url=https://leveilmental.fr
https://pagespeed.web.dev/report?url=https://leveilmental.fr/blog/plasticite-synaptique-apprentissage-cerveau/

### L5 — Vérifier Rich Results Test après chaque fix schema
https://search.google.com/test/rich-results

---

## Roadmap suggérée

### Semaine 1 (Critiques — confiance et E-E-A-T)
- [ ] C0 : neuroplasticite author URL `/about` → `/a-propos` (20 min)
- [ ] C1 : Supprimer stats inventées homepage (15 min)
- [ ] C2 : SEO component sur About page (1h)
- [ ] C3 : Canonical trailing slash dans SEO.tsx (1h)
- [ ] H6 : Twitter Card propagation sur articles (30 min)
- [ ] M3 : llms.txt (15 min)
- [ ] M9 : Security headers netlify.toml (30 min)

### Semaine 2
- [ ] H1 : lastmod dans le sitemap (2h)
- [ ] H4 : Enrichir bio About page (2h)
- [ ] H5 : sameAs dans Person schema (30 min + création profil LinkedIn)
- [ ] M4 : BreadcrumbList trailing slash (30 min)
- [ ] M6 : Schema homepage WebSite + Organization (1h)
- [ ] M7 : Schema blog/ CollectionPage (1h)
- [ ] M10 : H1 homepage crawlers (30 min)
- [ ] M1 : StatBlock Singer fix (10 min)
- [ ] M2 : Citation BDNF/exercice fix (20 min)

### Semaines 3-6 (Refonte anciens articles — par batch)
- [ ] H2 + H3 : 3 articles/semaine — schema V2 + FAQ 8 questions
- Prioriser les articles avec le plus de trafic organique (voir GSC)

### Score estimé après toutes les fixes : 85-88 / 100

---

## Déjà appliqué pendant l'audit
- ✅ `public/robots.txt` : OAI-SearchBot + ClaudeBot ajoutés
- ✅ `public/llms.txt` : mis à jour avec 15/15 articles + descriptions + section licence
