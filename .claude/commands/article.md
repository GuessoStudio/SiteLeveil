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

ACTION MANUELLE REQUISE (2 minutes).

Donner ce prompt à l'utilisateur, lui demander de le coller dans Perplexity Pro,
puis attendre qu'il colle le résultat ici avant de continuer :

```
Analyse les 5 premiers résultats Google.fr pour '[MOT-CLÉ PRINCIPAL]'.
Pour chaque résultat note : titre H1, H2 principaux, présence FAQ, études citées.
Identifie ce qu'aucun ne couvre correctement.
Trouve ensuite 3 études PubMed récentes (2020-2025) sur [SUJET]
avec statistiques précises utilisables comme StatBlock.
```

⛔ STOP — Poser cette question à l'utilisateur avant toute analyse :
"Perplexity Pro est-il disponible ?
- Oui → colle le prompt ci-dessus et reviens avec le résultat.
- Non → je fais une analyse approximative depuis mes connaissances (moins précis)."

Ne jamais décider seul de sauter cette étape.
Ne passer à l'étape 1.2 qu'après avoir reçu la réponse de l'utilisateur.

### Étape 1.2 — Générer le brief

Générer le brief directement avec ce format exact (ne pas appeler de sous-commande) :

```
BRIEF — [Titre article]

Slug : [slug-exact]
Titre H1 : [titre complet avec KW dans les 8 premiers mots]
KW principal : [mot-clé] ([volume]/mois, KD [score])
KW secondaires : [liste]
Featured Snippet cible : [question exacte]
Catégorie : [Neurosciences | Psychologie | Relations Humaines | Développement Personnel]
Mots cibles : [nombre] | Lecture estimée : [X min]

Angle différenciateur vs concurrence :
[Ce que les autres ne couvrent pas — issu de l'analyse Perplexity ou approximation]

3 StatBlocks requis :
1. [Stat exacte] — Source : Auteur et al., Institution, Journal, Année
2. [Stat exacte] — Source : Auteur et al., Institution, Journal, Année
3. [Stat exacte] — Source : Auteur et al., Institution, Journal, Année

8 questions FAQ :
1. [Question longue traîne]
2. ...
8. [Question longue traîne]

Liens internes (slugs vérifiés dans src/data/blog-articles.ts) :
- /blog/[slug-existant] ✅
- /blog/[slug-existant] ✅
- /blog/[slug-existant] ✅

Structure H2/H3 proposée :
[Arborescence complète]
```

### Étape 1.3 — Valider avant de continuer

Présenter le brief à l'utilisateur et poser explicitement ces questions :
- "Le slug te convient ?"
- "Les 3 stats sont-elles correctes ou tu as d'autres sources ?"
- "Des H2 à modifier ?"

⛔ STOP — Ne pas passer à la Phase 2 sans confirmation explicite de l'utilisateur.
Une réponse "oui" ou "go" suffit comme validation.

## PHASE 2 — Rédaction

### Étape 2.1 — Écrire l'article

Rédiger directement le TSX complet (ne pas appeler de sous-commande).
Partir du dernier article existant comme modèle
(ex. `src/articles/MindsetDeCroissance.tsx`).

Vérifier pendant la rédaction :
- Quick Answer Block présent dans les 200 premiers mots ✓
- H2 formulés en questions directes ✓
- Chercheurs nommés + institutions ✓
- Minimum 3 StatBlocks avec sources complètes ✓
- Signal fraîcheur "Version 1.0 — [Mois Année]" ✓

### Étape 2.2 — Fact-check automatique

Relire l'article et vérifier manuellement chaque statistique :
- La stat est-elle attribuée à un auteur + institution + année ?
- Le journal de publication est-il nommé ?
- La donnée est-elle issue d'une étude humaine (pas animale) ? Si animale → le préciser.
- L'ordre de grandeur est-il plausible (pas de chiffre inventé) ?

Corriger toute statistique douteuse avant de continuer.

### Étape 2.3 — Fact-check scientifique externe

ACTION MANUELLE REQUISE — Perplexity Pro.

Donner ce prompt à l'utilisateur avec le texte complet de l'article :

```
Vérifie la rigueur scientifique de cet article sur [SUJET].
Pour chaque étude citée, vérifie :
1. Le journal exact de publication
2. L'année exacte
3. Si les données sont issues d'études animales ou humaines
4. Si les chiffres cités sont dans les bonnes proportions
5. Si les attributions chercheurs/institutions sont correctes
Signale toute erreur ou approximation.

[COLLER LE TEXTE DE L'ARTICLE ICI]
```

⛔ STOP — Attendre que l'utilisateur colle le retour Perplexity ici.
Ne pas passer à la Phase 3 avant d'avoir reçu le rapport et corrigé TOUTES les erreurs signalées.

Règles absolues :
- Jamais présenter des données animales comme humaines sans précision
- Toujours indiquer le vrai journal de publication
- Les hypothèses (Medical Hypotheses) doivent être présentées comme telles
- Vérifier chaque attribution chercheur/étude

## PHASE 3 — Validation SEO + GEO

### Étape 3.1 — Score SEO

Vérifier manuellement chaque point de cette checklist et donner un score /100 :

| Critère | Points | Vérifié |
|---------|--------|---------|
| KW principal dans H1 (8 premiers mots) | 15 | |
| KW dans les 50 premiers mots de l'intro | 10 | |
| Meta description 150-160 chars avec KW | 10 | |
| H2 tous formulés en questions directes | 10 | |
| Minimum 3 StatBlocks avec sources | 10 | |
| Quick Answer Block dans les 200 premiers mots | 15 | |
| FAQ 8 questions minimum | 10 | |
| Minimum 3 liens internes (slugs vérifiés) | 10 | |
| Signal fraîcheur présent | 5 | |
| Alt text image 80 chars minimum | 5 | |

Score minimum acceptable : 75/100.
Si inférieur → corriger les points manquants avant de continuer.

### Étape 3.2 — Score GEO (citations IA)

Vérifier manuellement :
- Quick Answer Block : réponse auto-suffisante sans cliquer ? (oui/non)
- FAQ : chaque réponse fait 40-60 mots et se comprend sans contexte ? (oui/non)
- Entity mapping : 2-3 chercheurs nommés avec prénom + institution + pays ? (oui/non)
- Format "Top N" ou "X étapes" présent dans au moins un H2 ? (oui/non)

### Étape 3.3 — Schemas JSON-LD

Vérifier que les 7 schemas sont présents dans le bon ordre dans jsonLd :
Person + Organization + ImageObject + BlogPosting + BreadcrumbList + ItemList + FAQPage

Vérifier que schemaItemList.numberOfItems correspond au nombre réel d'items.
Vérifier que schemaFAQ.mainEntity contient au moins 8 questions.

## PHASE 4 — Conversion TSX

### Étape 4.1 — Convertir en TSX

Prendre le dernier article publié comme modèle de référence
(ex. `src/articles/MindsetDeCroissance.tsx`).
`ArticleTemplate_V2.tsx` n'existe pas — toujours partir d'un article existant.

Structure du fichier TSX à produire :
src/articles/[NomArticle].tsx

Intégrer dans l'ordre :
1. `import SEO from "../components/SEO"` (seul import de composant externe)
2. Quick Answer Block inline (div JSX avec classes `bg-emerald-50`, pas un composant importé)
   dans les 200 premiers mots
3. Minimum 3 StatBlocks inline (div JSX avec classes `bg-teal-50`/`bg-indigo-50`, pas un composant importé)
4. Stack 7 JSON-LD via prop `jsonLd` du composant SEO (Person, Organization, ImageObject,
   BlogPosting, BreadcrumbList, ItemList, FAQPage)
5. Signal fraîcheur dans le header (`Version {meta.version} — {meta.verifiedDate}`)
6. Section FAQ avec minimum 8 questions en HTML visible
7. Liens internes contextuels (vérifier que les slugs existent dans blog-articles.ts)

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

Présenter les 3 concepts à l'utilisateur et lui demander lequel retenir.

**Étape 4.3b — Placer l'image**
```
/public/images/articles/[slug]-cover.webp
```
Dimensions : 1200×630 px minimum. Format : WebP uniquement.
Alt text dans le TSX : minimum 80 caractères, descriptif.

⛔ STOP — Demander à l'utilisateur : "L'image est-elle placée dans
/public/images/articles/[slug]-cover.webp ?"
Ne pas passer à l'étape 4.4 tant que l'utilisateur ne confirme pas.
Sans cette image, la couverture est brisée et l'OG tag renvoie une 404.

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

### Étape 4.5 — Liens internes SORTANTS (depuis le nouvel article)

Pour chaque lien interne dans l'article, vérifier que le slug
existe dans `src/data/blog-articles.ts`.
Si absent → remplacer par un lien existant.

⚠️ TRAILING SLASH OBLIGATOIRE — écrire tous les liens internes AVEC slash final :
`to="/blog/slug/"` (et `/a-propos/`, `/ressources/`, `/blog/`).
Un lien sans slash déclenche un 301 Netlify → Googlebot le classe
« Page avec redirection ». Le garde-fou `validate:links` (étape 4.6) bloque le
build si un lien sans slash subsiste, mais l'écrire correct dès le départ évite l'aller-retour.

### Étape 4.5 bis — Liens internes ENTRANTS (CRITIQUE pour l'indexation)

⚠️ C'EST L'ÉTAPE LA PLUS OUBLIÉE — et la cause n°1 des pages
« Explorée, actuellement non indexée » dans la GSC.

Les liens SORTANTS (4.5) ne suffisent pas : sans liens ENTRANTS, le nouvel
article est orphelin. Google le voit dans le sitemap mais n'y arrive par aucun
chemin de navigation → il ne l'indexe pas.

Action : ajouter **au minimum 3 liens contextuels** vers le nouvel article,
depuis 3 articles existants **différents et thématiquement proches**.
- Ancre descriptive (jamais « cliquez ici »), insérée dans une phrase du corps.
- Slug cible AVEC slash final : `to="/blog/[nouveau-slug]/"`.
- Style de lien identique à ceux déjà présents dans l'article source.
- Privilégier la réciprocité (un article que le nouveau cite déjà en retour).

Vérification chiffrée avant de continuer :
```bash
grep -rl 'to="/blog/[nouveau-slug]/"' src/articles/ | grep -v [NomNouvelArticle] | wc -l
# doit afficher 3 ou plus
```

### Étape 4.6 — Valider puis vérifier le build

D'ABORD lancer le validateur d'article (vérifie trailing slash du canonical,
enregistrement dans content/index.ts + vite.config.ts, ET les 3 liens entrants) :
```bash
npm run validate:article [slug-du-nouvel-article]
```
Toutes les lignes doivent afficher ✅. Un ❌ sur « Liens internes : X/3 » signifie
que l'étape 4.5 bis n'a pas été faite → l'article sera orphelin. Corriger avant de continuer.

Puis le garde-fou global des liens (bloque tout lien interne sans slash dans src/) :
```bash
npm run validate:links
```

Enfin le build (son `prebuild` relance `validate:links` automatiquement) :
```bash
npm run build
```
Corriger toute erreur TypeScript ou import manquant avant de continuer.
Ne jamais committer un article qui échoue `validate:article`, `validate:links` ou le build.

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

ACTION MANUELLE REQUISE — Google Search Console.
Informer l'utilisateur de faire ces étapes manuellement :

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
  downloadUrl: "/Downloads/[slug]-checklist.pdf"
}
```

⚠️ CASSE — le dossier réel est `public/Downloads/` (D majuscule). Le CDN Netlify
sert actuellement les deux casses (testé : `/downloads/` et `/Downloads/` renvoient
le même PDF), donc ce n'est pas un bug bloquant aujourd'hui. Mais par hygiène et
au cas où la config CDN changerait, aligner `downloadUrl` ET le CTA de l'article TSX
sur la casse réelle du dossier : `/Downloads/`.

Informer l'utilisateur des actions manuelles restantes :
a) Mettre en forme sur Canva avec template L'Éveil
b) Placer le PDF dans /public/Downloads/ (D majuscule)
c) Vérifier que le CTA dans l'article TSX pointe vers la bonne URL (casse `/Downloads/`)

### Étape 5.3 — Repurposing réseaux sociaux

Suivre `.claude/rules/repurposing.md` pour les specs complètes de chaque canal.

Générer dans l'ordre :
1. Instagram — texte 5 slides + 5 prompts fond AI + 5 prompts overlay + caption + 12 hashtags
   ⚠️ Workflow validé : ChatGPT Image (fond AI → overlay texte) — voir repurposing.md section 1
2. TikTok/Reels — script 60 secondes avec timestamps
3. Facebook — post éducatif 600-800 mots + commentaire épinglé
4. Twitter/X — thread 8 tweets (Tweet 5 = récapitulatif intermédiaire)

Checklist livraison : `.claude/rules/repurposing.md` section CHECKLIST

### Étape 5.4 — Résumé de livraison

Produire un résumé avec :
- Fichier créé : `src/articles/[NomArticle].tsx`
- Slug : `/blog/[slug]`
- Score SEO : X/100
- Score GEO : [résultat]
- Checklist complète (tous les points cochés)
- Points d'attention éventuels

### Étape 5.5 — Commit message

```
feat: ajouter article "[titre court]"

Slug : /blog/[slug]
Catégorie : [catégorie]
KW principal : [mot-clé] ([volume]/mois, KD [score])
Score SEO : X/100
Composants : QuickAnswer, [N]x StatBlock, FAQ [N]Q
Liens internes : [N] liens vers articles existants
Mettre à jour blog-articles.ts ✓
```

### Étape 5.6 — Push et vérification déploiement

⛔ ACTION MANUELLE REQUISE — Demander confirmation avant de pusher.

Dire à l'utilisateur : "Tout est prêt. Je lance `git push origin main` pour
déployer sur Netlify — confirme et je pousse."

Attendre la confirmation explicite avant de lancer le push.

⚠️ CRITIQUE — Sans le push, Netlify ne déploie pas.
Google voit le fallback SPA (HTML sans schemas) → Rich Results Test = "Aucun élément détecté".

Après le push (2-3 min) :
1. Vérifier le build Netlify dans le dashboard
2. Retester sur search.google.com/test/rich-results avec l'URL de l'article
   → Résultat attendu : Articles ✅ + Fils d'Ariane ✅ + FAQ ✅
3. Si GSC "Cette URL ne peut pas être optimisée" → normal, délai 3-7 jours


## Usage
/project:article "cortisol stress chronique mémoire"
/project:article "ocytocine lien social neurosciences"
/project:article "microbiome intestin cerveau axe gut-brain"

## Erreurs fréquentes à éviter
- ❌ Décider seul que Perplexity n'est pas disponible et sauter l'étape 1.1
- ❌ Passer à la Phase 3 sans attendre le retour fact-check Perplexity (étape 2.3)
- ❌ Continuer après 4.3 sans confirmation que l'image est placée
- ❌ Pusher sans confirmation explicite de l'utilisateur (étape 5.6)
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
- ❌ Oublier les 3 liens ENTRANTS depuis d'autres articles (étape 4.5 bis) → article orphelin → GSC "Explorée, actuellement non indexée"
- ❌ Écrire un lien interne sans trailing slash (`to="/blog/slug"`) → 301 Netlify → GSC "Page avec redirection"
- ❌ Sauter `npm run validate:article [slug]` avant commit (il détecte justement l'orphelin et les liens sans slash)
- ❌ Écrire `downloadUrl` avec une casse différente du dossier réel `/Downloads/` (Netlify tolère les deux aujourd'hui, mais rester cohérent par hygiène)
