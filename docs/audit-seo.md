# Audit SEO complet — leveilmental.fr
Réalisé le 1er août 2026 · Données : Search Console (90j), GA4 (90j), URL Inspection, crawl technique, analyse de 36 articles, JSON-LD, clustering.

## Score de santé global : 61/100

Site jeune (946 impressions / 1 clic / 90j, 119 sessions organiques), aucun problème d'indexation, base technique globalement saine. Le vrai enjeu n'est pas technique mais éditorial : une partie du corpus (les 2 articles les plus anciens, dont le plus gros potentiel de trafic) date d'avant l'adoption stricte du Template V2 et n'a pas les blocs GEO/E-E-A-T qui font le reste du site.

---

## Top 5 problèmes critiques

1. **Soft-404 site-wide** — toute URL invalide renvoie HTTP 200 avec le contenu de la homepage (`public/_redirects` ligne 13 : `/* /index.html 200`). Risque d'indexation de milliers d'URLs erronées comme doublons de la home.
2. **Régression trailing-slash sur 3 liens du footer** (`Footer.tsx`) — `/contact`, `/habit-tracker`, `/test-personnalite-big-five` sans `/` final → 301 sur *toutes* les pages du site. C'est exactement le bug qui avait déjà généré une vague de "pages avec redirection" en Search Console.
3. **`/test-personnalite-big-five/` sert 0 JSON-LD et des meta génériques** — la page utilise `<Helmet>` brut au lieu du composant `SEO.tsx`, donc son contenu SEO n'est jamais sérialisé au SSG (même bug déjà corrigé pour les articles, non appliqué ici). Page à fort potentiel (outil interactif) invisible pour Google.
4. **`neuroplasticite-cerveau` (625 impressions, position 42) et `surmonter-rejet-social` (position 14,5) n'ont ni Quick Answer Block, ni StatBlocks, ni section "À retenir"** — les 2 articles pré-Template V2, confirmés indépendamment par 3 audits différents (contenu, GEO, technique).
5. **`llms.txt` obsolète** — 15 articles sur 36 absents, dont `biais-cognitifs-liste-psychologie` (grosse page en impressions).

## Top 5 quick wins

1. Corriger les 3 liens footer (5 min, `Footer.tsx`)
2. `_redirects` : `200` → `404` sur la règle catch-all (5 min)
3. Régénérer `llms.txt` avec les 15 articles manquants
4. Ajouter une image de couverture à `surmonter-rejet-social` (actuellement 0 image — violation directe de la règle WebP + alt 80 car.)
5. Retitrer `biais-cognitifs-liste-psychologie` pour faire apparaître "définition" avant "liste" (fix SXO à fort effet, ~15 min)

---

## 1. Recherche & performance (Search Console + GA4, 90 jours)

- 946 impressions, 1 clic, CTR moyen 0,11%, 114 requêtes distinctes
- GA4 : 119 sessions organiques, 105 utilisateurs
- Sitemap propre, 0 erreur/warning, 46 URLs. Le "0 indexé" affiché par le rapport Sitemaps de GSC est un faux négatif — 6 pages clés vérifiées via l'API d'inspection sont bien "Submitted and indexed"

**Opportunité n°1 par volume** : *"neuroplasticite apprentissage"* — 625 impressions (66% du total du site), position 42, sur `/blog/neuroplasticite-cerveau/`.

**Quick win position 11-20** : *"rejet social"* — position 14,5, 10 impressions, sur `/blog/surmonter-rejet-social/`. Seul quick win avec un volume qui vaut le coup (terme générique, pas de longue traîne).

**Anomalie** : `biais-cognitifs-liste-psychologie` capte des impressions sur ~20 variantes de "biais cognitif" — les variantes précises rankent en position 2 (dissonance cognitive, biais de confirmation) mais le terme générique large est en position 37-59.

**Qualité du trafic (GA4)** : meilleure page trafic = BDNF (42 sessions, 69% rebond) ; meilleur engagement = régulation émotionnelle (83,3%, seulement 6 sessions) ; **page d'accueil à 100% de rebond / 0% d'engagement** sur ses 4 sessions organiques — anormal, à creuser.

---

## 2. Audit technique

| # | Sévérité | Problème | Fichier | Fix |
|---|----------|----------|---------|-----|
| 1 | Critique | Soft-404 : toute URL invalide → HTTP 200 + contenu homepage | `public/_redirects` (L13), `netlify.toml` | `/* /index.html 200` → `/* /index.html 404` + composant 404 React avec `noindex` |
| 2 | Élevé | 3 liens footer sans trailing slash → 301 sur toutes les pages | `src/components/Footer.tsx` (L~91, ~118) | Ajouter `/` à `/test-personnalite-big-five`, `/contact`, `/habit-tracker` |
| 3 | Élevé | `llms.txt` incomplet (15/36 articles manquants, dont biais-cognitifs) | `public/llms.txt` | Régénérer depuis `src/data/blog-articles.ts`, idéalement automatiser |
| 4 | Moyen | CSP `unsafe-inline`/`unsafe-eval` sur `script-src` | `netlify.toml` (L32-40) | Migrer vers nonces (non bloquant, à traiter après le reste) |
| 5 | Moyen | `/calculateur-sommeil/` peu maillé, lien potentiellement JS-only sur `/ressources/` | `src/pages/Resources.tsx` | Vérifier que le lien est bien dans le HTML statique SSG, pas seulement injecté par JS |
| 6 | Faible | robots.txt, redirections HTTP→HTTPS/www, titres/meta de base | — | RAS, rien à corriger |

Bon point : les crawlers IA prioritaires (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) sont explicitement autorisés dans robots.txt, cohérent avec l'objectif GEO du site.

---

## 3. Audit schema JSON-LD

Méthode : HTML statique réel (curl, sans JS) sur 8 pages, comparaison avec la règle interne des 7 schemas (Person, Organization, ImageObject, BlogPosting, BreadcrumbList, ItemList, FAQPage). **Aucun HowTo détecté nulle part** — conforme.

| Page | Statut |
|---|---|
| `/` (accueil) | ⚠️ Organization incomplet, **BreadcrumbList invalide** (2 niveaux auto-référentiels) |
| `neuroplasticite-cerveau` | ✅ 7 schemas valides |
| `biais-cognitifs-liste-psychologie` | ✅ 7 schemas valides |
| `surmonter-rejet-social` | ⚠️ valide mais dates non-ISO 8601 complètes |
| `bdnf-augmenter-naturellement-neurosciences` | ✅ 7 schemas valides |
| `resilience-psychologique-developper` | ✅ 7 schemas valides |
| `/test-personnalite-big-five/` | ❌ **0 JSON-LD, 0 meta spécifique** (cf. audit technique #3) |
| `/a-propos/` | ⚠️ Person riche mais Organization référencée jamais définie sur la page |

**Erreurs à corriger** :
1. Migrer `src/pages/BigFiveTest.tsx` vers le composant `SEO.tsx` (garder le schema `Quiz` existant, valide)
2. Retirer ou corriger le `BreadcrumbList` auto-référentiel de la home (`src/components/SEO.tsx` L146-167, filet de sécurité `breadcrumbLd`)
3. Harmoniser l'entité `Organization` (`@id: https://leveilmental.fr#organization`) sur toutes les pages qui la référencent, notamment `/` et `/a-propos/`
4. Dates ISO 8601 complètes sur `surmonter-rejet-social`
5. `jobTitle` du Person incohérent (tiret long vs virgule selon les pages) — harmoniser en virgule (règle "pas de tiret long")

Note : les 5 `FAQPage` ne génèreront pas de rich result Google (restriction santé/gouvernemental depuis août 2023) mais restent utiles pour la citation IA — ne pas les retirer.

---

## 4. Audit contenu / E-E-A-T

Score qualité contenu estimé par page (méthode : structure Template V2, sourcing, vulgarisation, profondeur) :

| Page | Score | Constat principal |
|---|---|---|
| `formation-habitudes-cerveau-neurosciences` | 82/100 | Meilleure page du site — référence à suivre |
| `resilience-psychologique-developper` | 76/100 | Bonne structure, sourcing un peu court (2 chercheurs) |
| `bdnf-augmenter-naturellement-neurosciences` | 74/100 | Excellent E-E-A-T mais **jargon non vulgarisé juste après le Quick Answer** (TrkB, MAPK/ERK, PI3K/Akt, apoptose sans définition ni analogie) — cause probable du 69% de rebond sur la page la plus visitée |
| `biais-cognitifs-liste-psychologie` | 68/100 | Structure complète mais **68 mots/biais en moyenne** (trop thin pour un head term), chercheurs cités sans institution (sauf 1/10), "dissonance cognitive" absente de la liste |
| `surmonter-rejet-social` | 55/100 | Pas de Quick Answer/StatBlock/À retenir, **0 image**, maillage au minimum strict |
| `neuroplasticite-cerveau` | 52/100 | Pas de Quick Answer/StatBlock/À retenir, sourcing quasi inexistant (1 seul lien DOI), `wordCount` schema désynchronisé du contenu réel |

**Tendance claire** : la qualité progresse nettement depuis l'adoption stricte du Template V2 (tous les articles 2026 ont Quick Answer + StatBlocks + À retenir). Les 2 articles de 2024/2025 sont une dette de migration pure, pas un problème d'écriture.

---

## 5. Search experience (pourquoi les termes génériques ne rankent pas)

**`biais-cognitifs-liste-psychologie` vs "biais cognitif"** : le SERP est dominé par des pages glossaire/encyclopédiques (Wikipédia, fiches terminologiques). Le H1 actuel ("liste des 12 plus courants et comment les contrer") signale un listicle-solution, pas une définition-référence. Le contenu de définition existe déjà dans la page mais n'est pas visible au niveau title/H1/snippet. **Fix ciblé sur l'en-tête, pas une réécriture complète.**

**`neuroplasticite-cerveau` vs "neuroplasticite apprentissage"** : le SERP concurrent cadre systématiquement autour de l'entité "apprentissage" (pédagogie, mnémotechniques, apprentissage moteur). Le H1 actuel ("reprogrammer son cerveau après 25 ans") est un angle développement personnel adulte — le mot "apprentissage" apparaît 25 fois dans le corps mais jamais dans le title/H1/meta/Quick Answer. **Mismatch d'angle à plus fort enjeu que le Cas 1 vu le volume (625 impressions).**

Confirmation croisée avec l'audit clustering : le maillage interne de `neuroplasticite-cerveau` est déjà excellent (12 liens entrants, bloc "articles connexes" structuré) — **le maillage n'est pas le facteur limitant ici**, contrairement à l'hypothèse de départ. Le problème est le framing éditorial + le sourcing faible.

---

## 6. Clustering & maillage interne (36 articles)

8 clusters thématiques identifiés sous les 4 piliers déclarés (Neuroplasticité/BDNF, Stress/cortisol, Émotions/limbique, Cognition/attention, Biais cognitifs, Communication, Estime de soi, Sommeil). Aucune page orpheline. Maillage globalement émergent (par accident de contenu) plutôt qu'architecturé, sauf un exemple réussi : `guide-communication-interpersonnelle` a un vrai bloc hub structuré.

**`biais-cognitifs-liste-psychologie` est réellement sous-liée** : 5 liens entrants seulement, aucun bloc "articles connexes" en fin d'article. C'est cohérent avec son mauvais ranking générique — Google n'y voit pas de signal d'autorité topique consolidée.

Liens à ajouter vers cette page depuis : `objectifs-smart-methode-neurosciences` (biais de planification), `rumination-mentale-pensees-obsessionnelles` (biais de confirmation), `resoudre-un-conflit-methodes-psychologie` (biais d'attribution hostile), `anxiete-mecanismes-neurologiques-solutions-scientifiques` (catastrophisation), `burn-out-signaux-neurobiologiques-recuperation` (biais d'optimisme).

4 pages au plancher (3 liens entrants, toutes publiées fin juin/juillet 2026) : `meditation-effets-cerveau`, `axe-intestin-cerveau-microbiote-humeur`, `resilience-psychologique-developper`, `pensee-critique-developper` — normal pour du contenu récent, à renforcer dans le temps.

---

## 7. GEO / citabilité IA — Score : 63/100

- **robots.txt** : excellent, tous les crawlers IA prioritaires autorisés
- **llms.txt** : présent et bien formé mais 15/36 articles absents (cf. audit technique)
- **Accessibilité technique** : excellente — HTML entièrement pré-rendu (SSG), aucun besoin de JS pour les crawlers IA
- **Citabilité au niveau passage** : 2 des 4 pages testées (neuroplasticite-cerveau, surmonter-rejet-social) n'ont pas de Quick Answer Block — confirme le diagnostic contenu
- **Signaux de marque off-site quasi nuls** : aucune chaîne YouTube dans le `sameAs` du schema Person/Organization, alors que la mention YouTube est le signal le plus corrélé aux citations IA (corrélation ~0,737 selon le framework GEO) — le site a pourtant un pipeline vidéo actif (`video/`) non exploité comme signal d'entité

---

## Roadmap priorisée

### Phase 0 — Corrections techniques rapides (cette semaine, ~2h de travail)
- [ ] `_redirects` : `200` → `404` sur la règle catch-all + composant 404 React avec noindex
- [ ] Corriger les 3 liens du footer (`/contact/`, `/habit-tracker/`, `/test-personnalite-big-five/`)
- [ ] Migrer `BigFiveTest.tsx` vers le composant `SEO.tsx`
- [ ] Corriger le `BreadcrumbList` invalide de la home
- [ ] Régénérer `llms.txt` avec les 15 articles manquants

### Phase 1 — Les 2 pages prioritaires (1-2 semaines)
**`surmonter-rejet-social`** (quick win position 14,5) :
- [ ] Ajouter Quick Answer Block + 3 StatBlocks + section "À retenir" (Template V2 complet)
- [ ] Créer et intégrer une image de couverture (actuellement absente)
- [ ] Corriger dates JSON-LD en ISO 8601 complet

**`neuroplasticite-cerveau`** (625 impressions, position 42, plus gros potentiel) :
- [ ] Ajouter Quick Answer Block avec "apprentissage" dans les 50 premiers mots + 3 StatBlocks + "À retenir"
- [ ] Ajouter un H2 dédié "Neuroplasticité et apprentissage : comment le cerveau apprend-il et retient-il mieux ?"
- [ ] Renforcer le sourcing (1 seul lien DOI actuellement) + ajouter un chercheur spécifique apprentissage/mémoire
- [ ] Réviser meta description pour y faire apparaître "apprentissage"
- [ ] Corriger le `wordCount` du schema (annonce 3500, réalité ~2762)
- [ ] Ne pas retravailler le maillage interne — déjà solide (12 liens entrants)

### Phase 2 — `biais-cognitifs-liste-psychologie` (2-3 semaines)
- [ ] Retitrer pour faire apparaître "définition" avant "liste" (title + H1 + meta)
- [ ] Repositionner la définition existante dans les 50-80 premiers mots visibles
- [ ] Étoffer chaque item de 68 à 150-200 mots (définition → mécanisme → exemple → contre-mesure)
- [ ] Ajouter institution + pays pour Kahneman, Tversky, Fischhoff, Dunning-Kruger
- [ ] Ajouter la dissonance cognitive comme 13e biais
- [ ] Ajouter un bloc "articles connexes" structuré + obtenir les 5-7 liens entrants identifiés depuis les articles du cluster

### Phase 3 — Dette de contenu généralisée (1 mois)
- [ ] Auditer les ~15-20 autres articles pour détecter d'autres survivants pré-Template V2
- [ ] Réécrire le passage jargon de `bdnf-augmenter-naturellement-neurosciences` (TrkB/MAPK/PI3K/apoptose) — cause probable du 69% de rebond
- [ ] Renforcer le sourcing de `resilience-psychologique-developper` (2 chercheurs seulement)
- [ ] Lier les 4 pages "plancher" depuis leurs voisines de cluster
- [ ] Harmoniser `jobTitle` (virgule, pas tiret) et dates ISO 8601 sur tout le corpus

### Phase 4 — Renforcement autorité / GEO (continu)
- [ ] Ajouter la chaîne YouTube au `sameAs` du schema Person/Organization
- [ ] Envisager d'embarquer les Shorts vidéo existants sur les articles correspondants
- [ ] Automatiser la génération de `llms.txt` depuis `blog-articles.ts`
- [ ] Resserrer les réponses FAQ trop longues (jusqu'à 93 mots) vers la cible 40-60 mots

### Phase 5 — Non bloquant
- [ ] CSP : migrer `unsafe-inline`/`unsafe-eval` vers des nonces
- [ ] Vérifier le rendu SSR du lien vers `/calculateur-sommeil/` sur `/ressources/`
- [ ] Comprendre pourquoi la page d'accueil a 100% de rebond sur son trafic organique
