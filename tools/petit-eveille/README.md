# Outils Le Petit Éveillé

Outils de DÉVELOPPEMENT pour la mascotte (hors build du site).

## `generate-poses.mjs`

Génère les silhouettes du personnage par **fusion booléenne** (union de
primitives : tête + torse + bras + jambes). Une silhouette = un seul contour,
donc aucun trait superposé aux articulations — c'est la solution au problème
des bras (voir `docs/video-petit-eveille-workflow.md`).

### Pourquoi cette approche

Le perso est un monoligne *creux* (contour blanc, intérieur sombre). Des pièces
séparées qui se chevauchent (épaule, aisselle) montrent deux contours croisés.
La fusion les réunit en une silhouette unique : le problème disparaît par
construction. Contrepartie : le passage d'une pose à l'autre est un *cut* net
(pas un bras qui pivote en continu) — exactement le style « Humain Penseur ».

### Régénérer / ajouter une pose

```bash
# dépendance DEV uniquement (NE PAS ajouter aux dépendances du site)
npm i polygon-clipping

# produit les tracés des 8 poses
node tools/petit-eveille/generate-poses.mjs > pose-paths.json
```

1. Pour ajouter une pose : ajouter une entrée `nom: [angleBrasGauche, angleBrasDroit]`
   dans l'objet `POSES` du script (0 = horizontal vers l'intérieur, 90 = le long
   du corps, 270 = vers le haut).
2. Régénérer le JSON.
3. Copier le tracé voulu dans l'objet `POSE_PATHS` de
   `public/petit-eveille-poses.html`, et ajouter un bouton `data-pose="nom"`.

Les proportions du corps (tailles tête / torse / bras / jambes) se règlent dans
l'objet `BODY` du script.

> Les spirales, halos et bulles ne sont PAS dans la silhouette : ils sont posés
> par-dessus dans le HTML (inchangés selon les poses).

## `build-scene.mjs`

Génère `public/petit-eveille-scene.html` (la scène TikTok 9:16) en réutilisant
le personnage de `public/petit-eveille-poses.html` (CSS émotions/poses, tracés
des silhouettes, spirales) et en l'habillant d'un décor : fond violet nuit, sol
lumineux + halo au sol, reflet, particules, vignette, teinte réactive au mode,
emplacements titre + sous-titre éditables.

```bash
node tools/petit-eveille/build-scene.mjs
```

> `petit-eveille-poses.html` est la source de vérité du personnage (le « labo »).
> Après toute évolution du perso, relancer ce script pour mettre la scène à jour.

