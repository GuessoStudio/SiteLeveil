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
4. ~~Ajouter une image de couverture à `surmonter-rejet-social`~~ — **erreur de l'audit**, l'image existe (vérifié le 10 août 2026)
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
- [x] ~~Réécrire le paragraphe jargon situé juste après le Quick Answer (TrkB, cascade de signalisation, MAPK/ERK, PI3K/Akt, apoptose) : 1 terme technique par paragraphe maximum, définition en une phrase simple, analogie obligatoire~~ (fait — TrkB est désormais expliqué par une analogie clé/serrure, MAPK/ERK, PI3K/Akt et apoptose retirés)
- [x] ~~Auditer le reste de l'article avec la même grille (22 % des phrases dépassent 30 mots, le pire score du corpus)~~ (fait — 7 % des phrases dépassent 30 mots, contre 22 % avant)
- C'est le meilleur rapport effort/gain du site : la page capte déjà l'audience, elle la perd à la lecture

**`neuroplasticite-cerveau`** — 836 impressions (24 % du site) pour 3 clics, position 40,2, CTR 0,4 % :
- [~] Quick Answer et « À retenir » ajoutés ; **il manque encore 2 StatBlocks sur 3** → `release.md` lot 2
- [x] ~~Ajouter un H2 dédié "Neuroplasticité et apprentissage : comment le cerveau apprend-il et retient-il mieux ?"~~ (fait)
- [x] ~~Réviser title et meta description pour y faire apparaître "apprentissage" (le SERP concurrent cadre systématiquement sur cette entité, le H1 actuel parle de "reprogrammer son cerveau après 25 ans")~~ (fait)
- [x] ~~Renforcer le sourcing (1 seul lien DOI actuellement) + ajouter un chercheur spécifique apprentissage/mémoire~~ (fait — 3 liens DOI)
- [x] ~~Corriger le `wordCount` du schema (annonce 3500, réalité ~2762)~~ (fait — 2900)
- [ ] Ne pas retravailler le maillage interne — déjà solide (12 liens entrants)

### Phase 2 — Gisement n°2 et finitions (2-3 semaines)

**`biais-cognitifs-liste-psychologie`** — 393 impressions, position 22,1, CTR 1,3 % :
- [x] ~~Retitrer pour faire apparaître "définition" avant "liste" (title + H1 + meta)~~ (fait)
- [x] ~~Repositionner la définition existante dans les 50-80 premiers mots visibles~~ (fait)
- [x] ~~Étoffer chaque item de 68 à 150-200 mots (définition → mécanisme → exemple → contre-mesure)~~ (fait)
- [x] ~~Ajouter institution + pays pour Kahneman, Tversky, Fischhoff, Dunning-Kruger~~ (fait)
- [x] ~~Ajouter la dissonance cognitive comme 13e biais~~ (fait)
- [x] ~~Ajouter un bloc "articles connexes" structuré + obtenir les 5-7 liens entrants identifiés depuis les articles du cluster~~ (fait)

#### ✅ FAIT — `surmonter-rejet-social` (10 août 2026, commit 5a622d4)

Page déjà position 8,9 / CTR 4,6 %, donc consolidation et non sauvetage. Mais le fact-check a trouvé bien plus qu'un manque de blocs.

**Correction factuelle majeure.** L'article répétait, en intro, en FAQ et dans l'encadré de synthèse, que le rejet active « exactement les mêmes zones cérébrales que la douleur physique » et que le cerveau « ne fait aucune distinction » entre être frappé et être rejeté. Cette affirmation repose sur Eisenberger (UCLA, *Science*, 2003), étude fondatrice mais menée sur **13 participants**. En 2020, Mwilambwe-Tshilobo & Spreng (McGill) ont réanalysé **53 études / 1 817 participants** : aucune activation fiable du cortex cingulaire antérieur dorsal, moins d'une étude sur sept y trouvant un pic. Ce qui ressort de façon fiable, ce sont les régions de la rumination.

L'article ne bascule pas dans l'inverse pour autant : le mécanisme partagé reste établi au niveau **comportemental et pharmacologique** (DeWall et al., 2010 : trois semaines de paracétamol font baisser la douleur sociale rapportée, un placebo non). C'est cet argument qui remplace la localisation cérébrale contestée.

Le bloc « statistique hero » annonçait un vague « l'ostracisme au travail est fréquent / de nombreux employés », sans chiffre ni source vérifiable. Remplacé par Zadro, Williams & Richardson (2004).

**Template V2 appliqué** : Quick Answer ajouté, 3 StatBlocks sourcés là où il n'y en avait **aucun**, « À retenir » promu en H2 et rectifié, 4 H2 sur 6 reformulés en questions directes, signal de fraîcheur, dates ISO 8601, 9 sources numérotées avec DOI contre 6 sans aucun lien.

**Deux incohérences que l'audit n'avait pas vues** : `wordCount` annonçait 4200 pour 2616 mots réels (corrigé à 2600), `readingTime` 14 min pour ~12 min réelles. Même famille d'erreur que neuroplasticité (3500 annoncés / 2762 réels) — à vérifier systématiquement sur les autres articles.

**Erreur de l'audit corrigée** : l'image de couverture n'était pas absente, `rejet-social-cover.webp` existe et répond en 200.

**Reste ouvert, décision éditoriale** : à 2 616 mots l'article est court pour son sujet et sa position. L'étoffer est un chantier séparé, non entrepris. complet

### Phase 3 — Dette de contenu généralisée (1 mois)
- [x] ~~Auditer les ~15-20 autres articles pour détecter d'autres survivants pré-Template V2~~ (fait le 11 août 2026 — 26/37 conformes, 11 non conformes dont 9 sans Quick Answer ; suite dans `release.md`)
- [ ] Renforcer le sourcing de `resilience-psychologique-developper` (2 chercheurs seulement)
- [ ] Lier les 4 pages "plancher" depuis leurs voisines de cluster
- [~] Dates ISO 8601 : **fait, 37/37**. `jobTitle` : **encore incohérent**, 19 articles au tiret contre 17 à la virgule → `release.md` lot 4

#### ✅ FAIT — `mindset-de-croissance-psychologie-dweck` (corrigé le 9 août 2026)

Quatre erreurs de sourçage corrigées, toutes vérifiées indépendamment :

1. **Moser (2011)** : l'article affirmait que des travaux ultérieurs avaient *confirmé* le résultat EEG. C'était l'inverse. Janssen et al. (2021), *Back to the drawing board?*, ne retrouvent plus la différence après correction du chevauchement stimulus-réponse. Passage réécrit en « piste, pas preuve », nuance reprise dans « À retenir », étude ajoutée en source.
2. **Wang et al.** : titre cité faux (« college students » au lieu d'« adolescent »).
3. **Goran & Jiang** : prénoms inventés (Laila et Yong au lieu de Rahma F. et Xu), titre faux, affiliation Temple University jamais vérifiée et donc retirée.
4. **Vulgarisation** : plus aucune phrase au-dessus de 30 mots (la plus longue en faisait 45), `d=0,05` traduit en langage courant, « théories implicites », ERN et Pe expliqués ou retirés, méta-analyse définie à sa première apparition.

Alertes du fact-check externe écartées après vérification : le β=0,66 signalé n'existait pas dans l'article, et le DOI Goran & Jiang est valide.

### Phase 3 bis — Choix des sujets (à appliquer dès le prochain article)
Plusieurs articles rankent excellemment sur des termes sans volume (`routine-matinale` position 5,6 pour 28 impressions, `methode-acr` 5,3 pour 12, `confiance-en-soi` 5,9 pour 30). Le problème est en amont de l'écriture.
- [ ] Valider le volume de recherche du mot-clé principal **avant** de rédiger
- [ ] Ne pas retravailler les articles concernés : ils font leur travail, c'est la cible qui était mal choisie

### Phase 4 — Renforcement autorité / GEO (continu)
- [ ] Ajouter la chaîne YouTube au `sameAs` du schema Person/Organization
- [ ] Envisager d'embarquer les Shorts vidéo existants sur les articles correspondants
- [ ] Automatiser la génération de `llms.txt` depuis `blog-articles.ts`
- [ ] Resserrer les réponses FAQ trop longues (jusqu'à 93 mots) vers la cible 40-60 mots

### ✅ Vérification d'indexation faite le 10 août 2026

**Phase 0 déployée le 3 août 2026** (`e666caf`), indexation demandée manuellement le 4 août. Résultat mesuré via l'API d'inspection d'URL :

| URL | État au 3 août | État au 10 août |
|---|---|---|
| `/contact/` | Explorée, non indexée | ✅ **Submitted and indexed** |
| `/calculateur-sommeil/` | Découverte, non indexée | ✅ **Submitted and indexed** |
| `/test-personnalite-big-five/` | indexée | ✅ reste indexée |
| `/neuro-journal/` | — | ✅ indexée |
| `/hydromind/privacy-policy/` | indexée malgré noindex | ⏳ toujours indexée |

**La Phase 0 a produit l'effet attendu.** Les deux pages bloquées sont passées à l'index en moins d'une semaine.

Le cas `hydromind` n'est pas un défaut : le `noindex` est correctement servi en production (vérifié en HTTP) et l'URL ne figure plus dans le sitemap. Google ne l'a simplement **pas recrawlée depuis le 20 mai 2026**. Elle sortira au prochain passage. Pour accélérer : demander l'indexation de cette URL dans Search Console, ce qui déclenche un recrawl qui verra le `noindex`.

**Canonical : rien à corriger.** Le composant SEO rend `rel=canonical` dans le `<body>` et non le `<head>`, ce qui aurait pu être un problème. Vérification faite : Google détecte le bon canonical sur toutes les pages testées (`google_canonical` = `user_canonical`). Googlebot exécute le JS et react-helmet-async injecte la balise dans le `<head>` au rendu. Ne pas y consacrer d'effort.

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
- [x] ~~Comprendre pourquoi la page d'accueil a 100% de rebond~~ → **question close le 7 août 2026, voir ci-dessous**

#### ✅ Page d'accueil : le 100 % de rebond n'est pas un problème technique

Diagnostic mené au navigateur réel (agent-browser, desktop 1440px et iPhone 14) :

| Mesure | Desktop | Mobile |
|---|---|---|
| TTFB | 12,5 ms | 8,6 ms |
| FCP / LCP | 844 ms | 628 ms |
| **CLS** | **0** | **0** |

**Trois hypothèses écartées par la mesure** : le CLS est nul (aucun décalage de mise en page), les performances sont excellentes, et GA4 fonctionne parfaitement (requête `page_view` en 204, `seg=1` observé sur les envois suivants). Le rendu mobile est impeccable, capture à l'appui.

**Conclusion : sur 4 sessions organiques, 100 % de rebond et 0 % d'engagement relèvent du bruit statistique.** Quatre visiteurs ne constituent pas un signal. Ne pas y consacrer d'effort supplémentaire tant que le volume n'a pas augmenté.

#### ✅ Découverte annexe : l'hydratation React était cassée (corrigé le 9 août 2026, commit 5cc0b39)

Le seul vrai défaut trouvé, sans lien avec le rebond. React jetait le HTML pré-généré pour refaire le rendu côté client (`#423`) sur la quasi-totalité du site : le bénéfice du SSG sur la peinture initiale était annulé.

| Page | Avant | Après |
|---|---|---|
| Accueil desktop | 24 (#418 ×22, #423 ×2) | **0** |
| Accueil mobile | 65 (#418 ×60, #423 ×5) | **0** |
| `/blog/` | 28 | **0** |
| `/a-propos/` | 14 | **0** |
| Article | 1 | **0** |

Également vérifiés à 0 : `/ressources/`, `/contact/`, `/methodologie/`, `/calculateur-sommeil/`.

**Trois causes, dont deux relèvent du même piège : modifier le HTML APRÈS le rendu React.**

1. **Marqueur `ssg:title`** (toutes les pages). `SEO.tsx` le rendait en premier enfant de son fragment ; `onPageRendered` le recopiait dans le `<title>` puis **le supprimait du HTML**. React attendait un `<meta>` là où le HTML servi commençait par un `<link>`. Le `<title>` se reconstruit désormais depuis `og:title`, qui reste en place. Les 62 titres et descriptions générés sont inchangés, vérifié par comparaison avant/après.
2. **`<style>` inline du hero** (accueil). `beasties`, qui produit le CSS critique au SSG, absorbait cet élément dans le `<head>`. Les 51 règles sont passées dans `src/index.css`, en fin de fichier donc après `@layer utilities` : même priorité qu'avant.
3. **Slash final du lien de nav actif** (`/blog/`, `/a-propos/`, `/ressources/`, `/contact/`, `/methodologie/`). `Header.tsx` comparait `location.pathname` à la lettre : au pré-rendu react-router voit `/a-propos`, le navigateur reçoit `/a-propos/` de Netlify. Le `<div>` conditionnel de la barre active n'existait donc que côté client. Effet de bord positif : `aria-current="page"` est enfin présent dès le HTML pré-rendu, il en était absent.

La piste « ça dépend du viewport » suivie jusqu'ici était **trompeuse** : le volume d'erreurs variait avec la largeur, mais aucune des trois causes n'était liée au viewport. C'était un artefact du nombre d'éléments rendus.

**Règle à retenir** : ne jamais retirer du HTML une balise présente dans l'arbre React, et ne mettre aucun `<style>` inline dans un composant. Le CSS va dans `index.css`, beasties en inline le critique tout seul.

**Méthode de diagnostic réutilisable** : `npm run dev` ne reproduit rien (Vite y sert une SPA client sans SSR). Deux approches ont fonctionné, via Chrome piloté en CDP : (a) `npx vite-react-ssg build --mode development` pour obtenir les messages React en clair — attention, le flag `--outDir` est ignoré et `dist` est écrasé ; (b) plus rapide et sans rebuild, comparer la séquence de balises du HTML servi à celle du DOM après hydratation — le premier écart désigne le composant fautif.
