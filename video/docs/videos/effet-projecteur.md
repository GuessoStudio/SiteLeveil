# Vidéo : Personne ne te regarde autant que tu le crois

## Fiche

- **Sujet** : L'effet de projecteur — on surestime à quel point les autres
  remarquent nos erreurs/apparence — Gilovich, Medvec & Savitsky, 2000
- **Pilier** : Psychologie sociale
- **Article lié** : *(à écrire)*
- **Accent principal** : social (le piège) → emotions/stress (le doute, l'estimation) → eveil (la révélation) → social (la réalité rassurante)
- **Objectif** : Top 6 éditorial #5 (roadmap-editoriale.md §5) — autorité E-E-A-T
- **Série** : LE PIÈGE

## Fichiers

- Script JSON : `src/data/scripts/effet-projecteur.json`
- Voix off : `public/effet de projecteur.mp3` (masterisée -13,17 → -14,35 LUFS, 33,62 s)
- Rendu : `out/effet-projecteur.mp4`
- Couverture : `out/effet-projecteur-cover.png` (props : `src/data/covers/effet-projecteur.cover.json`)
- Commandes : `npm run render:projecteur` · `npm run cover:projecteur` · `npm run words:projecteur`

## Specs

- Durée réelle : 33,62 s (voix off) · Plans : 8 · Format : 1080×1920 @30fps
- Calage : silences réels détectés (`silencedetect` fin, seuil -25dB/d=0.2 — la
  voix contient beaucoup de pauses courtes internes aux phrases, virgules et
  points d'interrogation). Somme des `duration` = 33,63 s (écart 0,01 s négligeable).
- Hook (0–3s) : « Personne ne te regarde autant que tu le crois. »
- CTA final : « L'article complet est sur leveilmental.fr. Commente PROJECTEUR
  pour recevoir le résumé. » — **CTA-commentaire à mot unique**, la 1ʳᵉ des 5
  vidéos du Top 6 à l'utiliser (budget roadmap §4.4 : ~1×/semaine max).

## Origine du script

Scènes rédigées par l'utilisateur, revues avant production. Correction appliquée
suite à la revue (accord donné, CTA gardé tel quel) :
- **`position` variée** plan par plan (était `"center"` sur les 8 plans — même
  point que `procrastination`). Nouvelle séquence : center → center → left →
  right → center → left → right → center.

Points forts conservés tels quels : `spotlight_pressure` et `conformity_wave`,
les deux FX que `catalogue.md` §8 listait comme inexploités pour « psychologie
sociale : conformité, pression du regard » — utilisés ici pour la première fois.
Le `split` ESTIMATION/RÉALITÉ et `rumination_loop` sur « en boucle » sont aussi
des choix justes, gardés sans modification.

## Statut

- [x] Script écrit et revu (1 seul chercheur nommé : Thomas Gilovich · Université Cornell)
- [x] Voix off reçue (`effet de projecteur.wav`, renommée proprement par
      l'utilisateur avant upload) + masterisée (-13,17 → -14,35 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect fin, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (`words` présent dans le JSON)
- [x] Rendu MP4 (`out/effet-projecteur.mp4` confirmé sur disque)
- [x] Couverture générée (`out/effet-projecteur-cover.png` confirmé sur disque)
- [ ] Sous-titres vérifiés (karaoké natif) — à visionner avant publication
- [x] Ressource « résumé » prête à envoyer aux commentaires PROJECTEUR
- [x] Pack réseaux (FB/IG/TikTok/YouTube)
- [x] Publié (2026-07-18 — FB 12h30 · IG 18h31 · TikTok 20h00 · YT heure non capturée)
- [x] Relevé +7j dans `mesure-14-jours.md` §6 (2026-07-25)

## 📊 Baseline — relevé +7j (2026-07-25)

Cette vidéo sert de **référence** pour le test labo #6 : la comparaison se
fait contre `effet-projecteur-2` (la « suite »), pas de verdict sur cette
seule vidéo. Chiffres de référence : 688 vues YT (×2,1 médiane), 44,6 %
rétention YT, +1 abonné cumulé sur 7j (tous réseaux confondus), courbes de
vues plates dès 24-48h. Signal notable : meilleure rétention TikTok du
labo (42,3 %) et seule vidéo à ne pas montrer le décrochage sévère à 0:01
(74 % restants à 0:01, contre 40-64 % ailleurs). Détail complet dans
`mesure-14-jours.md` §6-7.

## 🔁 Suite du test labo #6

Voir [effet-projecteur-2.md](effet-projecteur-2.md) — la vidéo « suite »
reste à écrire/publier pour pouvoir comparer à cette baseline et statuer
sur l'hypothèse (+3 abonnés cumulés et tenue à 72h).

## ⚠️ Notes

- **Pic audio à +1,20 dBTP à l'upload — vrai clipping** (pas juste une limite,
  contrairement aux vidéos précédentes). Le mastering limite le pic final à
  -1,75 dBTP mais ne peut pas réparer une saturation déjà présente dans le
  signal d'origine. À vérifier à l'écoute du rendu ; si un plan sonne écrêté,
  seul un ré-enregistrement de ce passage corrige vraiment le problème.
- Plans 3 (« L'expérience », 6,68 s) et 4 (« L'estimation », 6,28 s) sont
  nettement plus longs que la moyenne du script — cohérent avec le nombre de
  mots (19 et 21) mais plus long que les plans habituels des autres vidéos
  (souvent 3-5 s). Pas modifié sans consigne explicite ; à surveiller au montage
  pour le rythme.
- Premier fichier uploadé (`PERSONNE NE TE REGARDE AUTANT QUE TU LE CROis.wav`)
  supprimé par l'utilisateur puis remplacé par `effet de projecteur.wav` — aucun
  résidu, le script référence uniquement le fichier final.

## 🔁 Prochaine itération

- Préparer la ressource "résumé" avant publication (condition du CTA-commentaire).
- Karaoké, rendu, couverture, pack réseaux — idéalement un mercredi. Respecter la
  cadence 2-3 vidéos/semaine (roadmap-editoriale.md §4 point 7) : 4 vidéos
  (#1-#4) sont déjà prêtes ou publiées, ne pas accélérer sans mesure de la #1.
