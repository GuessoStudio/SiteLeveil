# Vidéo : La résilience (flexibilité biologique, pas armure)

## Fiche

- **Sujet** : Être résilient, ce n'est pas être insensible. C'est la vitesse à laquelle le système nerveux revient à l'équilibre. Mythe cassé : « ce qui ne te tue pas » ne rend pas toujours plus fort (courbe en U de Seery : trop d'adversité sensibilise au danger). Leviers : nommer l'émotion (amygdale), lien social fiable, mouvement.
- **Pilier** : Psychologie / Neurosciences
- **Accent principal** : arc narratif bleu (intrigue/science) → rose (émotion) → cyan (retour au calme) → violet (vraie nature) → rouge (mythe + sensibilisation) → vert (solutions) → violet (CTA)
- **Objectif** : myth-bust anti-hype + autorité (Seery, Lieberman, Coan à l'écran) + engagement (commentaire REBOND) + trafic protocole

## Fichiers

- Script JSON : `src/data/scripts/resilience.json`
- Voix off : `public/Résilience.mp3` (40,78 s)
- Rendu : `out/resilience.mp4` (~15,7 Mo)
- Couverture : `out/resilience-cover.png` (`src/data/covers/resilience.cover.json`)
- Commandes : `npm run render:resilience` · `npm run cover:resilience` · `npm run words:resilience`

## Specs

- Durée : 40,78 s · Plans : 12 · Format : 1080×1920 @30fps
- Hook (0–4s) : « La personne la plus résiliente que tu connais ressent la peur autant que toi. »
- CTA final : « Commente REBOND, je t'envoie le protocole pour récupérer. »
- Crédits E-E-A-T à l'écran : Mark Seery (Université de Buffalo, courbe en U), Matthew Lieberman (UCLA, amygdale), James Coan (Univ. de Virginie, lien social)

## Statut

- [x] Script écrit (version 40s validée, corrigée : chercheurs nommés + courbe en U explicite)
- [x] Voix off intégrée + durées calées sur les silences (détection -35 dB / 0,28 s)
- [x] FX / icônes / crédits calés (arc de couleur narratif)
- [x] SplitScreen ARMURE (rouge, le mythe) vs FLEXIBILITÉ (violet, la vérité)
- [x] Rendu MP4 (voix + ambiance + SFX)
- [x] Couverture générée (« PAS UNE ARMURE »)
- [x] Karaoké natif (mode proportionnel — passer en frame-perfect avec `npm run words:resilience` en local)
- [ ] Publié

## ✅ Ce qui marche

- **Hook contre-intuitif** : « le résilient ressent la peur autant que toi » installe le vrai mécanisme (vitesse de récupération, pas insensibilité).
- **Myth-bust rigoureux** : la courbe en U de Seery est nommée, donc plus attaquable en commentaire (« un peu solidifie, trop fragilise »).
- **3 chercheurs à l'écran sans coût voix** : Seery, Lieberman, Coan via le champ `credit`.
- **Arc de couleur narratif** : rouge réservé au mythe + à la sensibilisation, vert pour les solutions.
- **tape_stop** placé sur le plan « LE MYTHE » (rupture) — silencieux tant que `public/sfx/tape-stop.mp3` n'est pas déposé.

## ⚠️ Ce qui manque / à améliorer

- **Karaoké frame-perfect** : lancer `npm run words:resilience` en local (Whisper) → cale chaque mot au frame près. Actuellement en repli proportionnel (déjà correct car plans calés sur les pauses).
- **Niveau voix** : `audioVolume` 2,6 = point de départ (volumedetect indispo dans ce build). À valider à l'oreille sous l'ambiance.
- **Plans denses** : le plan 10 (5,3 s) porte deux idées (réentraînement + amygdale). Si le débit réel décale, découper en local après le passage Whisper.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Commentaires (REBOND) : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Frame-perfect karaoké + valider niveau voix → publiable.
- Décliner en repurposing (carrousel IG, thread X, Short YouTube) depuis le script.
