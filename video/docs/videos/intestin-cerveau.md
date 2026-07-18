# Vidéo : L'axe intestin-cerveau (microbiote & humeur)

## Fiche

- **Sujet** : Ton intestin (« deuxième cerveau », 100 M de neurones) communique avec ta tête via le nerf vague. Mythe déconstruit : le microbiote n'est pas la cause directe de l'humeur / dépression, le lien est bidirectionnel.
- **Pilier** : Neurosciences / Psychologie
- **Article lié** : /blog/axe-intestin-cerveau-microbiote-humeur
- **Accent principal** : arc narratif cyan (sérotonine) → bleu (science) → violet (connexion) → rouge (alarme mythe) → vert (action)
- **Objectif** : myth-bust anti-hype + autorité (Gershon) + engagement (commentaire VENTRE) + trafic article

## Fichiers

- Script JSON : `src/data/scripts/intestin-cerveau.json`
- Voix off : `public/intestin-cerveau.mp3` (34,8 s)
- Rendu : `out/intestin-cerveau.mp4` (~15,8 Mo)
- Couverture : `out/intestin-cerveau-cover.png` (`src/data/covers/intestin-cerveau.cover.json`)
- Commandes : `npm run render:intestin` · `npm run cover:intestin` · `npm run words:intestin`

## Specs

- Durée : 34,8 s · Plans : 15 · Format : 1080×1920 @30fps
- Hook (0–3s) : « 90% de la sérotonine de ton corps est fabriquée dans ton ventre. Pas dans ta tête. »
- CTA final : « Commente VENTRE, je t'envoie les 5 gestes. »
- Crédit E-E-A-T à l'écran : Michael Gershon · Columbia University (plan « deuxième cerveau »)

## Statut

- [x] Script écrit (aligné article microbiote)
- [x] Voix off intégrée + durées calées sur les silences (détection -35 dB / 0,28 s)
- [x] FX / icônes calés (arc de couleur narratif)
- [x] Rendu MP4 (voix + ambiance + SFX)
- [x] Couverture générée
- [x] Karaoké natif (mode proportionnel — passer en frame-perfect avec `npm run words:intestin` en local)
- [ ] Publié

## ✅ Ce qui marche

- **Hook chiffre choc** correctement cadré : « 90% dans le ventre, pas dans ta tête » installe le mythe pour mieux le corriger (la sérotonine intestinale ne pilote pas l'humeur).
- **Mécanisme concret** : 100 M de neurones + nerf vague (fx `brain_transfer` = le halo migre tête↔torse, littéralement la voie vague).
- **Autorité à l'écran sans coût voix** : crédit Gershon (Columbia) sur le plan « deuxième cerveau », il a inventé le terme ET le chiffre.
- **Arc de couleur narratif** : la teinte raconte l'histoire (science → mythe rouge → action verte).
- **CTA engagement** : « Commente VENTRE » vise le commentaire (signal algo #1 devant les likes).

## ⚠️ Ce qui manque / à améliorer

- **Karaoké frame-perfect** : lancer `npm run words:intestin` en local (Whisper) → cale chaque mot au frame près. Actuellement en repli proportionnel (déjà correct car plans calés sur les pauses).
- **Niveau voix** : `audioVolume` 2,6 = point de départ (volumedetect indispo dans ce build). À valider à l'oreille sous l'ambiance.
- **Boucle** : le dernier plan (vert) ne reboucle pas visuellement sur le premier (cyan). Optionnel pour le rewatch.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Commentaires (VENTRE) : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Frame-perfect karaoké + valider niveau voix → publiable.
- Décliner en repurposing (carrousel IG, thread X, Short YouTube) depuis l'article.
