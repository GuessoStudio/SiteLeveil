# Vidéo : La dépression n'est pas un simple manque de sérotonine

## Fiche

- **Sujet** : La théorie du « déséquilibre chimique » (dépression = manque de sérotonine) n'a jamais été prouvée — Moncrieff et al., 2022, *Molecular Psychiatry* (revue-parapluie)
- **Pilier** : Neurosciences
- **Article lié** : /blog/neurotransmetteurs-humeur (à écrire)
- **Accent principal** : arc bleu neuro (le mythe) → rouge stress (la remise en cause + l'alerte sécurité) → violet eveil (la vraie explication)
- **Objectif** : Top 6 éditorial #1 (roadmap-editoriale.md §5) — autorité E-E-A-T + amorce trafic article
- **Série** : LE MYTHE

## Fichiers

- Script JSON : `src/data/scripts/depression-serotonine.json`
- Voix off : `public/Depression-Serotonine.mp3` (masterisée -15,6 LUFS, 40,05 s)
- Rendu : `out/depression-serotonine.mp4`
- Couverture : `out/depression-serotonine-cover.png` (props : `src/data/covers/depression-serotonine.cover.json`)
- Commandes : `npm run render:depression` · `npm run cover:depression` · `npm run words:depression`

## Specs

- Durée réelle : 40,05 s (voix off) · Plans : 12 · Format : 1080×1920 @30fps
- Calage : 8 premiers plans posés sur les silences réels détectés (`silencedetect`
  adaptatif, seuil -26dB) ; les 4 derniers (énumération + ligne sécurité + clôture)
  répartis proportionnellement sur le temps restant (14,12 s). Somme des `duration` =
  40,06 s (écart 0,01 s négligeable).
- Hook (0–3s) : « La dépression n'est pas un simple manque de sérotonine. »
- CTA final : « L'article complet, sources incluses, est sur leveilmental.fr. »

## Statut

- [x] Script écrit (garde-fous santé mentale appliqués — voir ci-dessous)
- [x] Voix off reçue + masterisée (-28,18 → -15,6 LUFS, GUIDE.md §4.1)
- [x] Durées recalées sur le mp3 réel (silencedetect adaptatif, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (Whisper local, `npm run words:depression`) — 138 mots
      détectés, 131 alignés sur le texte du script via 107 ancres exactes (langue
      détectée fr @ 100%)
- [x] Rendu MP4 (`npm run render:depression`) — `out/depression-serotonine.mp4`, 15,1 Mo
- [x] Couverture générée (`npm run cover:depression`) — `out/depression-serotonine-cover.png`
- [ ] Visionnage complet + vérification sous-titres (relire chaque mot affiché à
      l'écran, en particulier les 4 plans recalés par proportion — 9 à 12)
- [ ] Relecture tierce du script (recommandée, sujet santé mentale)
- [ ] Publié

## ⚠️ Garde-fous santé mentale appliqués (roadmap-editoriale.md §6)

Sujet sensible — chaque garde-fou obligatoire est ancré dans une scène précise, pas seulement dans l'intention :

- **Message = « c'est plus complexe », jamais « les traitements ne servent à rien »** :
  plans 7–8, formulation quasi verbatim de la roadmap (« Ça ne veut pas dire que les
  traitements ne marchent pas. » / « Ça veut dire que l'histoire du simple déséquilibre
  chimique est trop simple. »).
- **Jamais suggérer d'arrêter un traitement** : ne se contente pas d'éviter le sujet —
  le plan 10 l'adresse explicitement et positivement (« Si tu suis un traitement, n'y
  touche jamais sans en parler à ton médecin. »), avec un traitement visuel volontairement
  sobre (`camera:"static"`, pas de `fx`) pour ne pas diluer le message dans le rythme.
- **1 seul chercheur nommé** (règle #3 de production) : Joanna Moncrieff, University
  College London — citée sans notation statistique brute, conformément au ton éditorial
  du site (`.claude/rules/articles.md`).
- **Pas de chiffre non vérifiable** : évite d'annoncer un nombre précis d'études
  analysées (non confirmable avec certitude) ; préfère « des décennies de recherches »,
  défendable et suffisant pour l'autorité scientifique sans risquer une fausse précision.

## ✅ Ce qui marche (a priori — à confirmer après montage)

- Respecte le gabarit Top 6 : hook oral repris verbatim de la roadmap dans les 3
  premières secondes, structure « X, pas Y ».
- Progression couleur cohérente avec la grammaire du moteur (bleu fait → rouge tension/
  alerte → violet résolution).
- Le plan 9 (« un orchestre, pas un chef ») vulgarise la vraie complexité multifactorielle
  (stress, sommeil, inflammation, gènes, environnement) sans jargon ni chiffre brut.

## ⚠️ Ce qui manque / à améliorer

- Calage des 4 derniers plans (9-12) fait par répartition proportionnelle, pas par
  pointage exact des silences (énumération à virgules + ligne sécurité rendent le
  découpage automatique ambigu). Le karaoké Whisper (mot à mot) corrigera la précision
  d'affichage indépendamment de ces `duration` de plan — voir GUIDE.md §4.3 point 4.
- Pas encore de brouillon pour l'article `/blog/neurotransmetteurs-humeur` (le lien
  CTA final pointe vers le site, pas vers un article spécifique tant qu'il n'existe pas).
- Relecture tierce du script toujours recommandée avant publication, vu la sensibilité
  du sujet (santé mentale) — même si les garde-fous de la roadmap sont appliqués.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Enregistrer + masteriser la voix off, recaler les durées (GUIDE.md §4), rendre,
  publier. Mesurer à 72 h (roadmap-editoriale.md §8) : si ça dépasse la médiane,
  enchaîner sur le #2 du Top 6 (rejet social / Eisenberger) sous 7 jours.
