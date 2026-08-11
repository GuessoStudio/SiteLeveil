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

## Ce qu'il faut faire

Dans Search Console → Inspection de l'URL → coller l'URL → « Demander une indexation ».

⚠️ Google plafonne à une dizaine de demandes par jour et par propriété. **Étaler sur deux jours**, en commençant par le groupe A.

### Groupe A — priorité (jour 1)

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

### Groupe B — jour 2

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

## Point de contrôle

**Revérifier vers le 20-25 août 2026.** Compter 4 à 7 jours après la demande pour le recrawl, puis quelques jours pour la décision d'indexation.

Commande de vérification :

```bash
SCRIPTS="/c/Users/sofie/.claude/plugins/cache/agricidaniel-seo/claude-seo/1.9.6/scripts"
py "$SCRIPTS/gsc_inspect.py" --batch urls.txt --site-url "https://leveilmental.fr/" --json
```

**Si elles restent non indexées après le recrawl**, alors seulement l'hypothèse du contenu insuffisant devient plausible, et il faudra regarder au cas par cas. Ne pas tirer cette conclusion avant d'avoir la preuve d'un nouveau crawl : ce serait retravailler des articles pour un problème qu'ils n'ont pas.
