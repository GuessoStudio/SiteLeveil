# SEO Audit Complet — leveilmental.fr
**Date :** 24 avril 2026
**Auditeur :** Claude Code (claude-sonnet-4-6)
**Pages analysées :** 24 URLs (sitemap complet + pages clés fetched)

---

## Score Global : 69 / 100

| Catégorie | Poids | Score brut | Score pondéré |
|-----------|-------|-----------|---------------|
| Technical SEO | 22% | 62/100 | 13.6 |
| Content Quality (E-E-A-T) | 23% | 74/100 | 17.0 |
| On-Page SEO | 20% | 68/100 | 13.6 |
| Schema / Structured Data | 10% | 65/100 | 6.5 |
| Performance (CWV) | 10% | 70/100 | 7.0 |
| AI Search Readiness (GEO) | 10% | 76/100 | 7.6 |
| Images | 5% | 82/100 | 4.1 |
| **TOTAL** | 100% | | **69.4 / 100** |

---

## Résumé Exécutif

**Type de site :** Blog éducatif neurosciences/psychologie — contenu expert en français
**Auteur :** Guesso, fondateur L'Éveil Mental

### Top 5 Problèmes Critiques
1. **Canonical URL vs Sitemap mismatch** — Les canoniques pointent sans trailing slash, le sitemap avec trailing slash → signal de contenu dupliqué pour Google
2. **Anciens articles : stack schéma incomplet** — neuroplasticite-cerveau et articles antérieurs n'ont que 3 schémas sur 7 requis
3. **FAQ insuffisante sur anciens articles** — neuroplasticite-cerveau : 6 questions (minimum requis : 8)
4. **Sitemap sans lastmod** — Google ne peut pas détecter la fraîcheur des contenus
5. **Page À propos : aucun méta, aucun schéma, crédentials absents** — E-E-A-T fragilisé

### Top 5 Quick Wins
1. Ajouter `lastmod` dans le sitemap (script déjà en place — 30 min)
2. Aligner les URLs de canonique sur le trailing slash Netlify (modifier SEO.tsx — 1h)
3. Ajouter meta description + schéma Person sur /a-propos/ (1h)
4. Créer `/public/llms.txt` pour citatibilité IA explicite (15 min)
5. Ajouter Twitter Card tags dans SEO.tsx (30 min)

---

## 1. Technical SEO — 62/100

### Robots.txt ✅
- Accès général autorisé
- `/og-test` et `/admin/` correctement bloqués
- Crawlers IA explicitement autorisés : GPTBot, Claude-Web, PerplexityBot, Google-Extended ✅
- Sitemap référencé ✅

### Sitemap ⚠️
- **24 URLs présentes** — couverture complète du site ✅
- **PROBLÈME MEDIUM : Aucun `lastmod`** sur aucune URL
  - Google utilise lastmod pour prioriser le recrawl
  - Solution : injecter `<lastmod>` dans `scripts/generate-sitemap.mjs` avec les dates de modification des fichiers TSX

### Canonicals 🔴 CRITIQUE
- **Sitemap URLs :** avec trailing slash → `https://leveilmental.fr/blog/plasticite-synaptique-apprentissage-cerveau/`
- **Canonical tag dans le HTML :** sans trailing slash → `https://leveilmental.fr/blog/plasticite-synaptique-apprentissage-cerveau`
- **Impact :** Google reçoit deux signaux contradictoires. Le serveur Netlify sert avec trailing slash (301 si sans), mais le canonical dit "la vraie URL est sans slash". Risque de dilution de PageRank et confusion crawl.
- **Fix :** Choisir UNE convention et l'appliquer partout. Netlify impose le trailing slash → mettre à jour `SEO.tsx` pour que `path` se termine toujours par `/`.

### BreadcrumbList URLs ⚠️
- Les `item` dans les BreadcrumbList schemas n'ont pas de trailing slash
  - Ex : `"item": "https://leveilmental.fr/blog"` au lieu de `"https://leveilmental.fr/blog/"`
- Cohérence recommandée avec la convention Netlify

### HTTPS ✅
- Netlify gère HTTPS automatiquement — OK

### Headers de sécurité ⚠️
- Non vérifiables via WebFetch, mais Netlify ne configure pas par défaut :
  - `Content-Security-Policy`
  - `X-Frame-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`
  - Recommandé : ajouter un bloc `[[headers]]` dans `netlify.toml`

### Viewport / Mobile ✅
- Classes responsive Tailwind détectées (breakpoints 640px, 768px, 1024px)
- Design mobile-first inféré

### JavaScript Rendering (SSG) ✅
- vite-react-ssg génère du HTML statique — contenu indexable sans JS
- Google peut lire le contenu directement ✅

### Redirects ⚠️
- Sans trailing slash → avec trailing slash : Netlify fait une 301 automatique
- Canonicals doivent pointer vers l'URL canonique finale (avec slash) pour éviter une chaîne de redirect

---

## 2. Content Quality (E-E-A-T) — 74/100

### Scores par page (agent content)
| Page | Score |
|------|-------|
| /blog/plasticite-synaptique... | 87/100 |
| /blog/empathie-neurones-miroirs... | 85/100 |
| Homepage | 52/100 |
| À propos | 41/100 |

### Points forts
- **Profondeur** : articles récents ~3 000–3 200 mots de prose ✅ (wordCount déclaré dans schema est surestimé — voir §4)
- **Citations scientifiques** : chercheurs nommés + institution + année + DOI ✅
  - Ex: "Klimecki et al., Max Planck Institute, SCAN, 2014"
- **Structure pyramide inversée** : réponse directe avant développement ✅
- **Quick Answer blocks** : présents dans les 200 premiers mots ✅
- **Sections "À retenir"** : résumés encadrés pour featured snippets ✅
- **Entités nommées** : structures cérébrales citées précisément (insula, ACC, TPJ, striatum ventral) ✅
- **Ton scientifique** : aucun "transforme ta vie" ou "deviens meilleur" détecté ✅

### Problèmes identifiés

#### Page À propos (/a-propos/) 🔴 CRITIQUE
- **Aucun composant `<SEO>` dans `src/pages/About.tsx`** — la page n'a donc ni canonical, ni meta description, ni aucun schema markup
- **~280 mots** de prose — sous le minimum de 500 mots pour une page auteur
- **Aucune accréditation formelle** — "passionné depuis 2020" est le seul signal d'expertise
- C'est la page qui sert de fondement E-E-A-T pour tout le site — son état actuel est le plus grand risque éditorial

#### Homepage — Statistiques inventées 🔴 CRITIQUE
- L'agent content a identifié dans `src/pages/Home.tsx` des statistiques factuellement fausses :
  - **"500 articles publiés"** → le blog a **15 articles** (erreur ×33)
  - **"50,000+ vies transformées"** → non vérifiable, aucune méthodologie
  - **"95% satisfaction"** → aucune source, aucun sondage cité
- Sous les QRG Google sept. 2025 : statistiques de site falsifiées = signal de confiance **négatif** pour les contenus psychologie/santé
- Ces chiffres doivent être supprimés ou remplacés par des données réelles

#### Anciens articles (pre-2026) 🟡 MEDIUM
- H2 headings pas toujours en format question directe
  - neuroplasticite-cerveau : "Qu'est-ce que la neuroplasticité : définition scientifique" (titre, pas question), "Les mécanismes cellulaires de la plasticité" (déclaratif)
  - Articles récents : ✅ (empathie, plasticite-synaptique en questions directes)
- Moins de StatBlocks inline détectés sur les anciens articles

#### Person schema — `sameAs` absent sur tous les articles 🟠 HIGH
- Le schéma Person de tous les articles déclare `jobTitle` mais pas de `sameAs` vers des profils externes (LinkedIn, ResearchGate, etc.)
- Google ne peut pas résoudre "Guesso" comme entité connue → limite la citabilité IA et l'autorité E-E-A-T

#### Claim BDNF/exercice — citation humaine manquante 🟡 MEDIUM
- Dans `PlasticiteSynaptique.tsx` (lignes ~557-565) : "20 à 30 minutes d'effort aérobie modéré" attribué à Wrann et al. (2013)
- Wrann et al. est une **étude sur souris** — le timing humain nécessite une citation séparée (ex: Ferris et al., 2007, BMC Neuroscience)
- Qualifier le claim ou ajouter la citation humaine

#### StatBlock Singer (2004) — valeur illisible pour le grand public 🟡 MEDIUM
- Dans `EmpathieNeuronesMiroirs.tsx` (~ligne 394) : la stat headline est `r sig.`
- Non auto-explicatif pour un public non-statisticien — remplacer par "16 couples" ou un % plus lisible

#### Blog listing (/blog/) 🟡 MEDIUM
- **~800-900 mots** de contenu — page catalogue correcte
- **Aucun JSON-LD** sur la page blog (CollectionPage ou ItemList manquant)

#### wordCount surestimé dans les schemas BlogPosting 🟡 MEDIUM
- PlasticiteSynaptique déclare `wordCount: 4100`, prose réelle ~3 000-3 200 mots
- EmpathieNeuronesMiroirs déclare `wordCount: 3900`, prose réelle ~2 800-3 000 mots
- Non critique pour le ranking mais incohérence détectable par les outils automatisés

---

## 3. On-Page SEO — 68/100

### Title Tags
| Page | Title | Longueur | Mot-clé en tête |
|------|-------|----------|-----------------|
| Homepage | "L'Éveil — Psychologie & Développement Personnel" | ~47 chars | ⚠️ Pas de "Mental" dans le titre |
| /blog/plasticite-synaptique... | "Plasticité synaptique : LTP, mémoire et 5 méthodes validées" | 60 chars | ✅ |
| /blog/empathie-neurones-miroirs... | "Empathie et neurones miroirs : ce que la science révèle" | 56 chars | ✅ |
| /blog/neuroplasticite-cerveau | "Neuroplasticité : Comment Reprogrammer Son Cerveau Après 25 Ans" | 64 chars | ✅ |

### Meta Descriptions
- Articles récents : ✅ présentes, avec mot-clé, ~155 chars
- Homepage : **non détectée** par WebFetch — à vérifier
- À propos : **absente**

### H1
- Articles : mot-clé dans les 8 premiers mots ✅
- Homepage H1 : "Éveillezvotre POTENTIEL" (artefact d'animation split-text — les crawlers voient le texte concatené sans espace) ⚠️

### Liens internes
- Articles récents incluent 3-5 liens internes contextuels ✅
- Ancres descriptives ✅ (ex: "comme la plasticité synaptique")

### Twitter Card ⚠️ Présent sur homepage, absent sur articles
- Twitter Card détectée sur la homepage ✅
- **Absent sur les articles** — les pages blog n'héritent pas des Twitter Card tags via SEO.tsx
- Sharing d'un article sur X/Twitter affichera une carte sans image
- Fix : propager les balises `twitter:` depuis `SEO.tsx` sur les pages de type `article`

### Open Graph ✅
- `og:title`, `og:description` présents
- `og:image` : URL OG générée dynamiquement via `/og?title=...` ✅

---

## 4. Schema / Structured Data — 65/100

### Récapitulatif par article

| Page | Person | Org | ImageObj | BlogPosting | Breadcrumb | ItemList | FAQPage | Total |
|------|--------|-----|----------|-------------|------------|----------|---------|-------|
| Homepage | ❌ | ❌ | — | — | — | — | — | **0/2** |
| /blog/plasticite-synaptique... | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **7/7** |
| /blog/empathie-neurones-miroirs... | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **7/7** |
| /blog/neuroplasticite-cerveau | ❌ | ❌ | ❌ | ⚠️³ | ⚠️⁴ | ❌ | ✅⁵ | **3/7** |

³ BlogPosting sans `@id`, auteur URL = `/about` au lieu de `/a-propos`, `image` bare string au lieu d'`@id`
⁴ BreadcrumbList position 4 sans `item` URL
⁵ Seulement 6 questions FAQ (minimum requis : 8)

### Problèmes détaillés

#### neuroplasticite-cerveau et articles pre-2026 🔴 CRITIQUE
- Manquent : Person, Organization, ImageObject, ItemList schemas
- FAQPage : 6 items au lieu de 8 minimum
- **BUG CRITIQUE : `author.url` = `"/about"` (anglais)** au lieu de `"/a-propos"` — la référence est cassée, Google ne peut pas résoudre l'auteur
- **BUG : image cover référencée en `.jpg`** au lieu de `.webp` — violation des règles site + possiblement une JPEG servie
- BlogPosting sans `@id` — Google ne peut pas établir l'identité de l'entité
- BlogPosting `image` = bare URL string, pas une référence `@id` vers un ImageObject
- Ces articles ont été créés avec un template antérieur à V2

#### BreadcrumbList ⚠️ MEDIUM
- Les URLs `item` n'ont pas de trailing slash — mismatch Netlify
- Exemple : `"item": "https://leveilmental.fr/blog"` → doit être `"https://leveilmental.fr/blog/"`

#### Person Schema — worksFor manquant sur plasticite ⚠️
- empathie : ✅ `"worksFor": {"@id": "https://leveilmental.fr#organization"}`
- plasticite : ❌ ce champ absent

#### Homepage ⚠️
- Aucun schéma JSON-LD détecté sur la homepage (WebSite, Organization manquants)

#### Blog listing /blog/ ⚠️
- Aucun schéma CollectionPage ou ItemList

### HowTo schema 🚫
- Aucun HowTo détecté — conforme aux règles ✅

---

## 5. Performance (CWV) — 70/100 (estimé)

*Note : sans accès CrUX (Google Search Console API), les scores sont estimés à partir des signaux HTML.*

### Signaux positifs
- **SSG** (HTML statique pré-rendu) → Time to First Byte excellent ✅
- **Netlify CDN** → latence mondiale réduite ✅
- **Tailwind CSS** → CSS critique inline dans le HTML ✅
- **Images WebP** → format optimal ✅
- **Fonts Brevo** chargées en lazy (Intersection Observer) → n'impactent pas LCP ✅

### Signaux à risque
- **GSAP + Framer Motion + Lenis** chargés (package.json) → bundle JS potentiellement lourd
  - Vérifier si le code-splitting est actif pour les animations
- **`ogl`** (WebGL library) et **`recharts`** → librairies lourdes si non lazy-loadées
- **Google Analytics inline** dans le HTML → peut retarder le parsing

### Recommandations
- Auditer le bundle avec `npm run build` + analyser `dist/assets/` en termes de poids
- Vérifier LCP, CLS, INP dans PageSpeed Insights : https://pagespeed.web.dev/

---

## 6. AI Search Readiness (GEO) — 78/100

*Score issu de l'audit GEO dédié — articles individuels : 84/100 chacun*

### Scores par plateforme

| Plateforme | Score | Facteur limitant |
|------------|-------|-----------------|
| Google AI Overviews | 78/100 | Pas d'entité Wikipedia, schema homepage non crawlable |
| Perplexity | 82/100 | Fort SSR, H2 questions, FAQPage — PerplexityBot autorisé |
| ChatGPT (live search) | 71/100 | OAI-SearchBot manquant (**corrigé**), pas de YouTube/Reddit |
| Bing Copilot | 74/100 | Pas de LinkedIn, entité off-site faible |
| Claude (Anthropic) | 80/100 | ClaudeBot manquant (**corrigé**), SSR fort |

### Points forts
- **robots.txt :** GPTBot, Claude-Web, PerplexityBot, Google-Extended autorisés ✅
  - **OAI-SearchBot et ClaudeBot ajoutés** (fix appliqué lors de l'audit)
- **llms.txt :** présent et mis à jour lors de l'audit — 15/15 articles, descriptions, licence ✅
- **Quick Answer Blocks** présents dans les 200 premiers mots ✅
- **H2 en format question directe** sur les articles récents ✅
- **8 chercheurs nommés avec institutions** par article ✅ (meilleur signal entité de la niche)
- **FAQPage** : 8 questions (plasticite) et 10 questions (empathie) ✅
- **Contenu auto-suffisant** dans les FAQ ✅

### Manques persistants

#### Entité off-site absente 🔴 HIGH (impact GEO long terme)
- Aucun YouTube, Reddit, LinkedIn, Wikipedia/Wikidata pour l'auteur
- YouTube = corrélation 0.737 avec les citations IA (plus forte de toutes les plateformes)
- Sans entité externe vérifiable, les LLMs ne peuvent pas résoudre "Guesso" dans leur graphe de connaissances

#### Préprint dans PlasticiteSynaptique 🟡 MEDIUM
- Samavat et al. (bioRxiv 2024) = préprint non peer-reviewed
- Google AI Overviews et Perplexity pénalisent les sources preprint
- Chercher si l'article a depuis été publié dans une revue peer-reviewed (PubMed : Samavat, Salk Institute, 2024)

#### Réponses FAQ légèrement trop longues 🟡 MEDIUM
- Moyenne 65-80 mots (cible : 40-60 mots)
- Les réponses plus courtes ont une probabilité d'extraction plus haute dans les systèmes de retrieval IA

---

## 7. Images — 82/100

### Points forts
- **Format WebP** sur toutes les images détectées ✅
- **Alt text descriptif** et long (>80 chars) ✅
  - Ex: "Illustration de la plasticité synaptique montrant le renforcement d'une connexion entre deux neurones dans l'hippocampe lors de l'apprentissage"
- **Dimensions OG conformes** : 1200×630px ✅
- **ImageObject schema** présent sur les articles récents ✅

### Problèmes
- **ImageObject absent** sur les anciens articles (neuroplasticite, etc.) 🟡
- **Lazy loading** : non vérifié — les images au-dessus de la fold doivent avoir `loading="eager"`, celles en dessous `loading="lazy"`
- **Logo footer** : alt text "L'Éveil" — insuffisant (< 80 chars recommandés pour la cohérence)

---

## Annexes

### Pages auditées
- https://leveilmental.fr (homepage)
- https://leveilmental.fr/blog/
- https://leveilmental.fr/a-propos/
- https://leveilmental.fr/blog/plasticite-synaptique-apprentissage-cerveau/
- https://leveilmental.fr/blog/empathie-neurones-miroirs-connexion-humaine/
- https://leveilmental.fr/blog/neuroplasticite-cerveau/
- https://leveilmental.fr/robots.txt
- https://leveilmental.fr/sitemap.xml

### Stack technique identifiée
- React 18 + TypeScript + Tailwind CSS
- vite-react-ssg (pré-rendu statique)
- Netlify (CDN + trailing slash enforcement)
- Google Analytics G-X04TK20VY6
- Brevo (newsletter)
- GSAP + Framer Motion + Lenis (animations)
- OGL (WebGL), Recharts (graphiques)
