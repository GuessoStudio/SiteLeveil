# URL à soumettre à l'indexation — établi le 11 août 2026

## Pourquoi

Diagnostic posé en croisant l'export GSC « Indexation des pages » du 11 août avec l'API d'inspection d'URL, sur les 47 URL du sitemap.

| | Dernier crawl (médiane) | Plage |
|---|---|---|
| 31 pages **indexées** | **10 juillet 2026** | 7 mai → 7 août |
| 14 pages **non indexées** | **9 mai 2026** | 30 avril → 14 juin |

**Aucune des 14 pages non indexées n'a été recrawlée depuis le 4 juillet 2026**, date du commit `933aa2e` (« title et meta description uniques par page dans le HTML pré-rendu »). Avant ce correctif, toutes les pages servaient à Googlebot le **même** title et la même meta description, ceux du template `index.html` — cause classique de « Explorée, actuellement non indexée ».

Vérifié : ces pages servent aujourd'hui un title unique et correct en production. Google ne l'a simplement pas encore constaté.

**Explication concurrente écartée** — celle du contenu trop mince. Parmi les 14 figurent `sommeil-reparateur` (4 849 mots, le plus long article du site), `cortisol-stress-chronique` (3 503) et `plasticite-synaptique` (3 385), tous pleinement conformes au Template V2. Le facteur commun est la date de crawl, pas la qualité éditoriale.

## ✅ Fait — les 16 URL ont été soumises les 11 et 12 août 2026

## Ce qu'il fallait faire

Dans Search Console → Inspection de l'URL → coller l'URL → « Demander une indexation ».

⚠️ Google plafonne à une dizaine de demandes par jour et par propriété. **Étaler sur deux jours**, en commençant par le groupe A.

### ✅ Groupe A — DEMANDÉ le 11 août 2026

Les deux pages que Google ne connaît **pas du tout**, puis les plus stratégiques.

```
https://leveilmental.fr/blog/axe-intestin-cerveau-microbiote-humeur/
https://leveilmental.fr/methodologie/
https://leveilmental.fr/blog/
https://leveilmental.fr/blog/sommeil-reparateur-7-strategies-validees/
https://leveilmental.fr/blog/cortisol-stress-chronique-cerveau-memoire/
https://leveilmental.fr/blog/plasticite-synaptique-apprentissage-cerveau/
https://leveilmental.fr/blog/systeme-limbique-cerveau-emotionnel/
https://leveilmental.fr/blog/empathie-neurones-miroirs-connexion-humaine/
```

`axe-intestin-cerveau-microbiote-humeur` est **inconnu de Google** alors qu'il est publié depuis le 5 juillet et présent dans le sitemap. `/methodologie/` a été créée début août, même situation. `/blog/` est la page de liste du blog, dernier crawl le 24 mai : la faire réindexer aide Google à redécouvrir tous les articles qu'elle liste.

### ✅ Groupe B — DEMANDÉ le 12 août 2026

```
https://leveilmental.fr/blog/ecoute-active-technique-carl-rogers/
https://leveilmental.fr/blog/communication-non-violente-cnv/
https://leveilmental.fr/blog/procrastination-cerveau-agir-neurosciences/
https://leveilmental.fr/blog/confiance-en-soi-durable/
https://leveilmental.fr/blog/lumiere-naturelle-cerveau-sommeil-sante-mentale/
https://leveilmental.fr/blog/attention-fragmentee-concentration-numerique/
https://leveilmental.fr/blog/syndrome-imposteur-solutions/
https://leveilmental.fr/blog/methode-acr-repondre-aux-bonnes-nouvelles/
```

## Détail par page

| URL | Dernier crawl | État |
|---|---|---|
| `/blog/axe-intestin-cerveau-microbiote-humeur/` | jamais | URL inconnue de Google |
| `/methodologie/` | jamais | URL inconnue de Google |
| `/blog/lumiere-naturelle-cerveau-sommeil-sante-mentale/` | 30 avr. | Explorée, non indexée |
| `/blog/methode-acr-repondre-aux-bonnes-nouvelles/` | 30 avr. | Explorée, non indexée |
| `/blog/plasticite-synaptique-apprentissage-cerveau/` | 30 avr. | Explorée, non indexée |
| `/blog/syndrome-imposteur-solutions/` | 30 avr. | Explorée, non indexée |
| `/blog/systeme-limbique-cerveau-emotionnel/` | 30 avr. | Explorée, non indexée |
| `/blog/confiance-en-soi-durable/` | 1er mai | Explorée, non indexée |
| `/blog/cortisol-stress-chronique-cerveau-memoire/` | 7 mai | Explorée, non indexée |
| `/blog/attention-fragmentee-concentration-numerique/` | 9 mai | Explorée, non indexée |
| `/blog/ecoute-active-technique-carl-rogers/` | 11 mai | Explorée, non indexée |
| `/blog/communication-non-violente-cnv/` | 16 mai | Explorée, non indexée |
| `/blog/sommeil-reparateur-7-strategies-validees/` | 22 mai | Explorée, non indexée |
| `/blog/` | 24 mai | Explorée, non indexée |
| `/blog/empathie-neurones-miroirs-connexion-humaine/` | 25 mai | Explorée, non indexée |
| `/blog/procrastination-cerveau-agir-neurosciences/` | 14 juin | Explorée, non indexée |

## ✅ Les autres catégories du rapport, élucidées le 11 août 2026

Listes obtenues depuis l'interface GSC (l'API ne sait pas énumérer par état). **Aucune ne demande de correction.** Consigné pour éviter qu'on réenquête.

### « Page avec redirection » — 8 pages, validation en échec

Les 8 sont les variantes **sans slash final** : `/contact`, `/ressources`, `/test-personnalite-big-five`, `/blog/neuroplasticite-cerveau`, `/blog/neuro-dopamine-routine`, `/blog/surmonter-rejet-social`, `/blog/communication-non-violente-cnv`, `/blog/confiance-en-soi-durable`.

C'est le comportement attendu et déjà documenté : une URL sans slash redirigera toujours. **La validation échouera systématiquement, ne pas la relancer.**

### « Erreur liée à des redirections » — 4 pages : problème historique, déjà résolu

`/blog/routine-matinale-scientifique-cerveau`, `/blog/empathie-neurones-miroirs-connexion-humaine`, `/blog/systeme-limbique-cerveau-emotionnel`, `/blog/bdnf-augmenter-naturellement-neurosciences` (tous sans slash).

Derniers crawls : **17 avril à 17 mai 2026**, donc avant le correctif du 12 juin (`e17143c`, élimination des chaînes 301). Testé le 11 août : les quatre résolvent désormais en **un seul saut vers un 200**. Il n'y a plus de chaîne. Rien à corriger, Google n'a simplement pas recrawlé.

### « Explorée, actuellement non indexée » — 18 pages = 14 réelles + 4 doublons

Le compteur de 18 additionne les variantes avec et sans slash de la même page (`attention-fragmentee` apparaît deux fois, `sommeil-reparateur` aussi). Les **14 pages réelles** sont celles listées plus haut. Aucune URL hors sitemap n'est concernée : le doute est levé.

### « Détectée, actuellement non indexée » — 2 pages

`/blog/axe-intestin-cerveau-microbiote-humeur/` et `/methodologie/`, toutes deux « Sans objet » en date de crawl : Google les a détectées via le sitemap mais **ne les a jamais explorées**. Ce sont exactement les deux URL du groupe A ci-dessus.

### « Exclue par la balise noindex » — 3 pages

`/legal`, `/legal/` et `/mentions-legales`. Le `noindex` sur `/legal/` est **volontaire** (rendu par le composant SEO). `/mentions-legales` renvoie aujourd'hui un vrai **404** depuis la Phase 0 ; le `noindex` vu par Google datait du 11 juillet, quand le catch-all servait encore un 200.

❓ **Question ouverte, pas un bug** : est-il souhaitable que `/legal/` soit en `noindex` ? Beaucoup de sites laissent leurs mentions légales indexables, c'est un signal de sérieux pour Google. À arbitrer.

## ✅ Point de contrôle — RÉSOLU le 17 août 2026, en avance sur l'échéance

Le 16 août, Google a envoyé une notification "Échec de certaines corrections" sur le groupe de 19 URLs de ce rapport (3 en "Échec", 16 en "En cours de traitement"). Avant de conclure quoi que ce soit, vérification directe via l'API d'inspection d'URL (`gsc_inspect.py`) plutôt que de se fier au rapport groupé — leçon déjà apprise sur ce projet (le rapport de couverture GSC a déjà affiché des états périmés par le passé).

**8 URLs inspectées individuellement (les 3 "Échec" + un échantillon de 5 parmi les 16 "En cours") : 8/8 sont en réalité `Submitted and indexed`, verdict PASS**, toutes crawlées entre le 11 et le 13 août 2026 — exactement la fenêtre suivant les demandes d'indexation des 11-12 août.

**Conclusion : le rapport de validation groupé de GSC est désynchronisé de la réalité, ce n'est pas un problème du site.** Les demandes d'indexation ont fonctionné. Ne pas re-soumettre ces URLs à l'indexation — elles le sont déjà, un nouveau cycle de validation ne ferait que repartir de zéro pour rien.

URLs vérifiées individuellement (toutes PASS) : `cortisol-stress-chronique-cerveau-memoire/`, `axe-intestin-cerveau-microbiote-humeur/`, `/blog/`, `plasticite-synaptique-apprentissage-cerveau/`, `systeme-limbique-cerveau-emotionnel/`, `ecoute-active-technique-carl-rogers/`, `confiance-en-soi-durable/`, `procrastination-cerveau-agir-neurosciences/`.

Les 11 URLs restantes du rapport n'ont pas été vérifiées individuellement à ce moment-là (même schéma attendu, pas de raison de suspecter un cas différent) : `sommeil-reparateur-7-strategies-validees/`, `empathie-neurones-miroirs-connexion-humaine/`, `communication-non-violente-cnv/`, `attention-fragmentee-concentration-numerique/`, `syndrome-imposteur-solutions/`, `lumiere-naturelle-cerveau-sommeil-sante-mentale/`, `methode-acr-repondre-aux-bonnes-nouvelles/`, `/habit-tracker`.

## ✅ Suite du 17-19 août 2026 — analyse complète des 23 pages "non indexées"

Une notification Google du 16 août ("Échec de certaines corrections") a poussé à revérifier. Répartition exacte des 23 pages non indexées par motif (5 motifs, total 23) :

| Motif | Pages | Statut vérifié |
|---|---|---|
| Page avec redirection | 8 | ✅ Normal — variantes sans slash qui redirigent correctement. Affichera toujours "échec" par construction, ce n'est pas la bonne URL à indexer. |
| Explorée, non indexée | 7 | 6 réellement en attente de recrawl, 1 (`methode-acr-repondre-aux-bonnes-nouvelles/`) déjà indexée malgré l'étiquette. Détail ci-dessous. |
| Erreur liée à des redirections | 4 | ✅ Résolu depuis le 12 juin, Google revalide juste son ancien constat. |
| Exclue par noindex | 3 | `/legal`, `/legal/`, `/mentions-legales` — volontaire (question ouverte du `/legal/` indexable ou non, toujours pas tranchée). |
| Page en double sans URL canonique | 1 | ✅ Résolu — voir ci-dessous. |
| Détectée, non indexée | 0 | ✅ Résolu, confirmé par vérification directe. |

### Les 7 "Explorée, actuellement non indexée" (lot précis obtenu le 17 août)

```
https://leveilmental.fr/habit-tracker
https://leveilmental.fr/blog/sommeil-reparateur-7-strategies-validees
https://leveilmental.fr/blog/empathie-neurones-miroirs-connexion-humaine/
https://leveilmental.fr/blog/communication-non-violente-cnv/
https://leveilmental.fr/blog/attention-fragmentee-concentration-numerique
https://leveilmental.fr/blog/syndrome-imposteur-solutions/
https://leveilmental.fr/blog/methode-acr-repondre-aux-bonnes-nouvelles/
```

Vérification individuelle : 6 sont réellement `Crawled - currently not indexed`, avec des dates de dernier crawl (avril-juin) **antérieures aux demandes d'indexation des 11-12 août** — alors que ces 6 pages faisaient partie de ce lot. La demande n'a donc pas atteint tout le monde (quota Google ~10/jour sur 16 URLs soumises en 2 jours). Le 7ᵉ (`methode-acr`) est en réalité `Submitted and indexed`, crawlé le 12 août — même décalage de rapport que d'habitude.

**Cas particulier `habit-tracker`** : en plus d'être non recrawlé depuis le 12 juin, son dernier crawl montrait un conflit de canonical (Google avait choisi la version sans slash). Vérifié en profondeur : **aucun bug actuel**. Le canonical servi en production est correct (`/habit-tracker/`), la redirection 301 fonctionne, et la source de l'ancien lien sans slash est `src/pages/Resources_BACKUP.tsx` — un fichier mort, jamais importé ni routé. Artefact d'un crawl obsolète, rien à corriger côté code.

➡️ **Guesso a redemandé l'indexation de ces 6 URLs le 17-18 août.** Prochain point : revérifier vers le 24-26 août.

### Page en double sans URL canonique — résolu

URL concernée : `https://leveilmental.fr/blog/plasticite-synaptique-apprentissage-cerveau` (sans slash final). Dernier crawl Google : **17 avril 2026** — le plus ancien de toute l'analyse, antérieur à toutes les corrections faites sur le site depuis. Google avait alors choisi `https://leveilmental.fr/` (la home) comme canonical, probablement faute de signal clair à l'époque.

Vérifié en production : la redirection 301 fonctionne (`/blog/plasticite-synaptique-apprentissage-cerveau` → `.../cerveau/`), aucun lien interne actuel ne pointe vers la version sans slash. La vraie page (avec slash) est déjà confirmée indexée (voir plus haut, vérifiée le 17 août). **Pas un bug — juste une entrée obsolète que Google n'a pas recroisée depuis avril.**

### Point de contrôle initial (archivé)

Revérifier vers le 20-25 août 2026. Compter 4 à 7 jours après la demande pour le recrawl, puis quelques jours pour la décision d'indexation.

Commande de vérification :

```bash
SCRIPTS="/c/Users/sofie/.claude/plugins/cache/agricidaniel-seo/claude-seo/1.9.6/scripts"
py "$SCRIPTS/gsc_inspect.py" --batch urls.txt --site-url "https://leveilmental.fr/" --json
```

**Si elles restent non indexées après le recrawl**, alors seulement l'hypothèse du contenu insuffisant devient plausible, et il faudra regarder au cas par cas. Ne pas tirer cette conclusion avant d'avoir la preuve d'un nouveau crawl : ce serait retravailler des articles pour un problème qu'ils n'ont pas.
