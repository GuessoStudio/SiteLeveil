# Audit SEO complet — leveilmental.fr
Réalisé le 1er août 2026 · Données : Search Console (90j), GA4 (90j), URL Inspection, crawl technique, analyse de 36 articles, JSON-LD, clustering.
**Chiffres de trafic corrigés le 4 août 2026** — voir l'encadré méthodologique ci-dessous.

## Score de santé global : 61/100

Site jeune mais en croissance nette (3 399 impressions / 88 clics / 90j, CTR 2,59 %, 119 sessions organiques GA4), aucun problème d'indexation, base technique globalement saine. Les impressions passent d'environ 20 à 80-100 par jour à partir du 8 juillet 2026. Le vrai enjeu n'est pas technique mais éditorial : une partie du corpus (les 2 articles les plus anciens, dont le plus gros potentiel de trafic) date d'avant l'adoption stricte du Template V2 et n'a pas les blocs GEO/E-E-A-T qui font le reste du site.

> ### ⚠️ Piège méthodologique — ne pas refaire cette erreur
> La première version de cet audit annonçait **946 impressions et 1 clic**. C'était faux : ces chiffres venaient d'une requête API avec la dimension `query`, or **Google anonymise les requêtes rares** et supprime purement et simplement ces lignes de la réponse. 87 des 88 clics du site proviennent de requêtes que Google refuse de nommer.
>
> | Méthode | Clics | Impressions |
> |---|---|---|
> | Sans dimension `query` (vrais totaux) | **88** | **3 399** |
> | Avec dimension `query` | 1 | 1 138 |
>
> **Règle : pour les totaux du site, interroger l'API sans la dimension `query`** (par `date` ou `page`). La dimension `query` ne sert qu'à analyser les mots-clés nommés, jamais à mesurer le volume réel.

---

## Top 5 problèmes critiques

1. **Soft-404 site-wide** — toute URL invalide renvoie HTTP 200 avec le contenu de la homepage (`public/_redirects` ligne 13 : `/* /index.html 200`). Risque d'indexation de milliers d'URLs erronées comme doublons de la home.
2. **Régression trailing-slash sur 3 liens du footer** (`Footer.tsx`) — `/contact`, `/habit-tracker`, `/test-personnalite-big-five` sans `/` final → 301 sur *toutes* les pages du site. C'est exactement le bug qui avait déjà généré une vague de "pages avec redirection" en Search Console.
3. **`/test-personnalite-big-five/` sert 0 JSON-LD et des meta génériques** — la page utilise `<Helmet>` brut au lieu du composant `SEO.tsx`, donc son contenu SEO n'est jamais sérialisé au SSG (même bug déjà corrigé pour les articles, non appliqué ici). Page à fort potentiel (outil interactif) invisible pour Google.
4. **`neuroplasticite-cerveau` (836 impressions, position 40,2, CTR 0,4 %) et `surmonter-rejet-social` (position 8,9) n'ont ni Quick Answer Block, ni StatBlocks, ni section "À retenir"** — les 2 articles pré-Template V2, confirmés indépendamment par 3 audits différents (contenu, GEO, technique).
5. **`llms.txt` obsolète** — 15 articles sur 36 absents, dont `biais-cognitifs-liste-psychologie` (grosse page en impressions).

## Top 5 quick wins

1. Corriger les 3 liens footer (5 min, `Footer.tsx`)
2. `_redirects` : `200` → `404` sur la règle catch-all (5 min)
3. Régénérer `llms.txt` avec les 15 articles manquants
4. Ajouter une image de couverture à `surmonter-rejet-social` (actuellement 0 image — violation directe de la règle WebP + alt 80 car.)
5. Retitrer `biais-cognitifs-liste-psychologie` pour faire apparaître "définition" avant "liste" (fix SXO à fort effet, ~15 min)

---

## 1. Recherche & performance (Search Console + GA4, 90 jours)

- **3 399 impressions, 88 clics, CTR 2,59 %, position moyenne 19,5**, 48 pages actives
- GA4 : 119 sessions organiques, 105 utilisateurs
- Tendance nettement haussière depuis le 8 juillet 2026 (20 → 80-100 impressions/jour)
- Sitemap propre, 0 erreur/warning, 46 URLs. Le "0 indexé" affiché par le rapport Sitemaps de GSC est un faux négatif — 6 pages clés vérifiées via l'API d'inspection sont bien "Submitted and indexed"

### Répartition réelle par page (dimension `page`, 90 jours)

| Page | Clics | Impr. | CTR | Position |
|---|---|---|---|---|
| `bdnf-augmenter-naturellement-neurosciences` | **38** | 549 | 6,9 % | 11,7 |
| `surmonter-rejet-social` | 6 | 130 | 4,6 % | 8,9 |
| `biais-cognitifs-liste-psychologie` | 5 | **393** | 1,3 % | 22,1 |
| `formation-habitudes-cerveau-neurosciences` | 5 | 159 | 3,1 % | 6,8 |
| `influence-sociale-conformisme` | 4 | 79 | 5,1 % | 9,9 |
| `neuroplasticite-cerveau` | 3 | **836** | **0,4 %** | **40,2** |
| `neurotransmetteurs-humeur-cerveau` | 3 | 196 | 1,5 % | 13,8 |
| `meditation-effets-cerveau` | 3 | 51 | 5,9 % | 16,8 |

**BDNF porte le site à lui seul** : 38 des 88 clics, soit 43 % du total. C'est aussi la page au taux de rebond le plus élevé (69 % selon GA4) et celle qui contient le passage le plus jargonneux (voir section 4) — le levier le plus rentable du site.

**Trois pages concentrent 51 % des impressions** : neuroplasticité (836), BDNF (549), biais cognitifs (393).

**Opportunité n°1, confirmée** : `neuroplasticite-cerveau` — 836 impressions (24 % du site) pour 3 clics, position 40,2, CTR 0,4 %. Le plus gros écart du site entre visibilité et captation. La requête `"neuroplasticite apprentissage"` pèse à elle seule 801 impressions avec 0 clic.

**Gisement n°2** : `biais-cognitifs-liste-psychologie` — 393 impressions, position 22,1, CTR 1,3 %. Les variantes précises rankent en position 2 (dissonance cognitive, biais de confirmation) mais le terme générique large reste en position 37-59.

**`surmonter-rejet-social` est moins critique qu'estimé initialement** : au niveau page elle est à **position 8,9 avec 4,6 % de CTR**, donc déjà en page 1. Le "position 14,5" de la première version venait de la vue par requête, biaisée par l'anonymisation.

### Signal à exploiter : bien classé, mais sur des termes sans volume

Plusieurs articles occupent d'excellentes positions pour très peu d'impressions : `routine-matinale-scientifique-cerveau` (position 5,6 / 28 impressions), `methode-acr-repondre-aux-bonnes-nouvelles` (5,3 / 12), `confiance-en-soi-durable` (5,9 / 30), `cortisol-stress-chronique-cerveau-memoire` (5,9 / 48). Ce n'est pas un problème de qualité mais de **choix de sujet** : ces pages gagnent des mots-clés que personne ne cherche. À corriger en amont pour les prochains articles (valider le volume de recherche avant d'écrire), pas en retravaillant ces pages.

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

**`neuroplasticite-cerveau` vs "neuroplasticite apprentissage"** : le SERP concurrent cadre systématiquement autour de l'entité "apprentissage" (pédagogie, mnémotechniques, apprentissage moteur). Le H1 actuel ("reprogrammer son cerveau après 25 ans") est un angle développement personnel adulte — le mot "apprentissage" apparaît 25 fois dans le corps mais jamais dans le title/H1/meta/Quick Answer. **Mismatch d'angle à plus fort enjeu que le Cas 1 vu le volume (836 impressions, 24 % du site).**

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

> **Repriorisée le 4 août 2026** après correction des chiffres de trafic. Trois changements : BDNF passe en Phase 1 (elle génère 43 % des clics du site), biais cognitifs remonte devant rejet social (393 impressions contre 130), et rejet social redescend en Phase 2 (déjà en position 8,9, donc pas un cas bloqué).

### ✅ Phase 0 — Corrections techniques rapides — FAIT, déployé le 3 août 2026
- [x] `_redirects` : catch-all en `404` + whitelist des routes applicatives non pré-rendues
- [x] Corriger les liens sans trailing slash — 26 liens dans 15 fichiers (pas 3 : la cause racine était la liste de routes incomplète de `validate-links.mjs`)
- [x] Migrer `BigFiveTest.tsx` vers le composant `SEO.tsx`
- [x] Corriger le `BreadcrumbList` auto-référentiel de la home
- [x] Régénérer `llms.txt` avec les 15 articles manquants
- [x] **Hors périmètre initial** : 9 autres pages servaient aussi le title générique (`<Helmet>` brut non sérialisé au SSG) — toutes migrées, `noindex` réellement appliqué sur `legal`, `merci-inscription` et les 2 pages HydroMind, retrait d'un schema `HowTo` interdit et de 2 `aggregateRating` inventés

### Phase 1 — Les 2 leviers à plus fort rendement (1-2 semaines)

**`bdnf-augmenter-naturellement-neurosciences`** — 43 % des clics du site (38/88), CTR 6,9 %, mais 69 % de rebond :
- [ ] Réécrire le paragraphe jargon situé juste après le Quick Answer (TrkB, cascade de signalisation, MAPK/ERK, PI3K/Akt, apoptose) : 1 terme technique par paragraphe maximum, définition en une phrase simple, analogie obligatoire
- [ ] Auditer le reste de l'article avec la même grille (22 % des phrases dépassent 30 mots, le pire score du corpus)
- C'est le meilleur rapport effort/gain du site : la page capte déjà l'audience, elle la perd à la lecture

**`neuroplasticite-cerveau`** — 836 impressions (24 % du site) pour 3 clics, position 40,2, CTR 0,4 % :
- [ ] Ajouter Quick Answer Block avec "apprentissage" dans les 50 premiers mots + 3 StatBlocks + "À retenir"
- [ ] Ajouter un H2 dédié "Neuroplasticité et apprentissage : comment le cerveau apprend-il et retient-il mieux ?"
- [ ] Réviser title et meta description pour y faire apparaître "apprentissage" (le SERP concurrent cadre systématiquement sur cette entité, le H1 actuel parle de "reprogrammer son cerveau après 25 ans")
- [ ] Renforcer le sourcing (1 seul lien DOI actuellement) + ajouter un chercheur spécifique apprentissage/mémoire
- [ ] Corriger le `wordCount` du schema (annonce 3500, réalité ~2762)
- [ ] Ne pas retravailler le maillage interne — déjà solide (12 liens entrants)

### Phase 2 — Gisement n°2 et finitions (2-3 semaines)

**`biais-cognitifs-liste-psychologie`** — 393 impressions, position 22,1, CTR 1,3 % :
- [ ] Retitrer pour faire apparaître "définition" avant "liste" (title + H1 + meta)
- [ ] Repositionner la définition existante dans les 50-80 premiers mots visibles
- [ ] Étoffer chaque item de 68 à 150-200 mots (définition → mécanisme → exemple → contre-mesure)
- [ ] Ajouter institution + pays pour Kahneman, Tversky, Fischhoff, Dunning-Kruger
- [ ] Ajouter la dissonance cognitive comme 13e biais
- [ ] Ajouter un bloc "articles connexes" structuré + obtenir les 5-7 liens entrants identifiés depuis les articles du cluster

**`surmonter-rejet-social`** — déjà position 8,9 / CTR 4,6 %, donc consolidation et non sauvetage :
- [ ] Ajouter Quick Answer Block + 3 StatBlocks + section "À retenir" (Template V2 complet)
- [ ] Créer et intégrer une image de couverture (actuellement absente)
- [ ] Corriger dates JSON-LD en ISO 8601 complet

### Phase 3 — Dette de contenu généralisée (1 mois)
- [ ] Auditer les ~15-20 autres articles pour détecter d'autres survivants pré-Template V2
- [ ] Renforcer le sourcing de `resilience-psychologique-developper` (2 chercheurs seulement)
- [ ] Lier les 4 pages "plancher" depuis leurs voisines de cluster
- [ ] Harmoniser `jobTitle` (virgule, pas tiret) et dates ISO 8601 sur tout le corpus

#### 🔧 À FAIRE — `mindset-de-croissance-psychologie-dweck` (identifié le 7 août 2026)

**1. Corriger le titre de la source [6]** — priorité, c'est le seul point de crédibilité.
Le titre cité ne correspond pas à l'étude réellement publiée :

- ❌ actuel : *"The influence of growth mindset on psychological well-being among **college students**: The mediating roles of grit and **academic** engagement"*
- ✅ réel : *"The relationship between growth mindset and **adolescent** psychological well-being: the parallel mediating roles of grit and **learning** engagement"*

Le corps de l'article dit correctement "1 142 adolescents", mais la bibliographie parle d'étudiants. DOI `10.1186/s40359-025-03609-9` valide. Vérifier au passage le volume/pages annoncés (`13, 467`), non confirmés.

**1 bis. Corriger aussi la source [7] Goran & Jiang** — trois erreurs, repérées le 7 août :
- Initiales fausses : "Goran L., Jiang Y." → les auteurs réels sont **Rahma F. Goran** et **Xu Jiang**
- Titre faux : *"Growth mindset, stress, and life satisfaction: A moderated mediation model"* → le vrai titre est *"From growth mindsets to life satisfaction: Examining the role of cognitive reappraisal and stressful life events"*
- L'affiliation "Temple University" citée dans la FAQ n'est **pas vérifiée**

Le DOI et le fond (l'effet s'atténue sous stress) sont corrects, seule la référence est mal rédigée.

**2. Vulgarisation façon BDNF** — sur 43 paragraphes du corps :
- 10 contiennent une phrase de plus de 30 mots
- 14 contiennent du jargon non expliqué : ERN, Pe, méta-analyse, biais de publication, médiation modérée, grit, réévaluation cognitive
- 32 tirets longs à remplacer

**3. Nuance à ajouter sur Moser (2011)** — le résultat sur l'onde Pe serait contesté par Janssen et al. (2021), qui ne retrouvent plus la différence après correction du chevauchement stimulus-réponse. **Non vérifié à ce jour** : vérifier avant d'écrire quoi que ce soit.

**Alertes de fact-check écartées après vérification** (ne pas y revenir) : le β=0,66 signalé n'existe pas dans l'article, et le DOI Goran & Jiang `10.3390/healthcare13222985` est valide (*Healthcare* 2025, 13, 2985, Rahma F. Goran et Xu Jiang). La mention "Illinois avant Columbia" est déjà présente ligne 315.

### Phase 3 bis — Choix des sujets (à appliquer dès le prochain article)
Plusieurs articles rankent excellemment sur des termes sans volume (`routine-matinale` position 5,6 pour 28 impressions, `methode-acr` 5,3 pour 12, `confiance-en-soi` 5,9 pour 30). Le problème est en amont de l'écriture.
- [ ] Valider le volume de recherche du mot-clé principal **avant** de rédiger
- [ ] Ne pas retravailler les articles concernés : ils font leur travail, c'est la cible qui était mal choisie

### Phase 4 — Renforcement autorité / GEO (continu)
- [ ] Ajouter la chaîne YouTube au `sameAs` du schema Person/Organization
- [ ] Envisager d'embarquer les Shorts vidéo existants sur les articles correspondants
- [ ] Automatiser la génération de `llms.txt` depuis `blog-articles.ts`
- [ ] Resserrer les réponses FAQ trop longues (jusqu'à 93 mots) vers la cible 40-60 mots

### ⏰ Suivi en cours — vérification d'indexation entre le 8 et le 11 août 2026

**Phase 0 déployée le 3 août 2026** (merge `fix/seo-phase-0` → `main`, commit `e666caf`).
**Indexation demandée manuellement dans Search Console le 4 août 2026** pour 4 URLs.

Compter 4 à 7 jours de recrawl, puis vérifier via l'API d'inspection d'URL (statut quasi en direct, contrairement au rapport "Indexation des pages" qui a 2-3 jours de retard) :

```bash
SCRIPTS="/c/Users/sofie/.claude/plugins/cache/agricidaniel-seo/claude-seo/1.9.6/scripts"
py "$SCRIPTS/gsc_inspect.py" --batch urls.txt --site-url "https://leveilmental.fr/" --json
```

⚠️ La propriété est de type **préfixe URL** (`https://leveilmental.fr/`), pas `sc-domain:`.

| URL | État avant correction | Attendu |
|---|---|---|
| `/contact/` | Explorée, non indexée | passe indexée |
| `/calculateur-sommeil/` | Découverte, non indexée | passe indexée |
| `/test-personnalite-big-five/` | indexée, titre générique | titre corrigé |
| `/neuro-journal/` | — | indexée |
| `/hydromind/privacy-policy/` | indexée malgré `noindex` demandé | sort de l'index |
| Rapport "Page avec redirection" | 8 pages (3 → 8 depuis mai) | cesse de grimper |

**Ne pas chercher à ramener "Page avec redirection" à zéro** : une URL sans slash final redirigera toujours vers la version avec slash, c'est le comportement normal. Le rapport est informatif, les versions canoniques sont bien indexées. Relancer la validation GSC échouera (c'est ce qui s'est produit le 25/07). Ce qui compte est qu'aucun lien interne n'y pointe plus, désormais garanti par `npm run validate:links`.

**Si `/contact/` et `/calculateur-sommeil/` sont toujours non indexées après le 11 août**, le titre générique n'était pas la seule cause : creuser côté qualité de contenu (pages jugées trop pauvres pour mériter l'index).

### ⏰ Second point de mesure — vers le 19 août 2026 (effet de la Phase 1)

Les deux articles de la Phase 1 ont été retravaillés et déployés le **5 août 2026**. Laisser environ deux semaines avant de conclure quoi que ce soit.

| Page | Métrique à surveiller | Point de départ | Où regarder |
|---|---|---|---|
| `bdnf-augmenter-naturellement-neurosciences` | taux de rebond | **69 %** | GA4 |
| | temps d'engagement | 31 % engagement | GA4 |
| `neuroplasticite-cerveau` | position moyenne | **40,2** | Search Console |
| | CTR | **0,4 %** | Search Console |
| | clics | 3 sur 90 j | Search Console |

**Attention aux fausses conclusions :**
- BDNF n'a **pas** de changement de title ni de structure : aucun effet attendu sur la position ou les impressions. Le seul signal pertinent est le comportement du lecteur (rebond, engagement) dans GA4.
- Neuroplasticité a changé de title, de H1 et de meta : l'effet attendu est sur la position et le CTR. Un repositionnement depuis la page 4 prend souvent 4 à 8 semaines, donc à deux semaines on cherche une **tendance**, pas un résultat final.
- Indexation redemandée le 5 août pour `neuroplasticite-cerveau` uniquement (BDNF n'en avait pas besoin, ses signaux de classement n'ont pas bougé).

### Phase 5 — Non bloquant
- [ ] CSP : migrer `unsafe-inline`/`unsafe-eval` vers des nonces
- [ ] Vérifier le rendu SSR du lien vers `/calculateur-sommeil/` sur `/ressources/`
- [ ] Comprendre pourquoi la page d'accueil a 100% de rebond sur son trafic organique
