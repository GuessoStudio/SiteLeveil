# Vidéo : 21 jours pour une habitude, c'est faux (version courte)

## Fiche

- **Sujet** : Le mythe des 21 jours ; la vraie durée (66 j, UCL) ; le striatum ;
  changer le contexte (Wendy Wood)
- **Pilier** : Neurosciences / Développement personnel
- **Article lié** : (à relier — habitudes / striatum)
- **Accent principal** : neuro (bleu) → eveil (violet) en fin
- **Objectif** : hook viral + autorité scientifique

## Fichiers

- Script JSON : `src/data/scripts/habitudes-court.json`
- Voix off : `public/habitudes-court.mp3` ✅ (ElevenLabs, ~31s)
- Rendu : `out/habitudes-court.mp4`
- Commande : `npm run render:court`

## Specs

- Durée : 30 s · Plans : 7 · Format : 1080×1920 @30fps
- Hook (0–3s) : « 21 JOURS ? Ce chiffre est faux. » (punch-head + flash_reverse)
- CTA final : « LIEN EN BIO — Article complet sur leveilmental.fr »

## Statut

- [x] Script écrit
- [x] Voix off générée
- [x] FX / icônes calés (FX oui, icônes non)
- [x] Rendu MP4
- [ ] SFX activés (en attente des fichiers son)
- [ ] Sous-titres CapCut
- [ ] Publié

## ✅ Ce qui marche

- Hiérarchie du texte (mot géant en haut, hors zone morte).
- Angle scientifique crédible (66 j UCL, striatum, cortex préfrontal, Wendy Wood).
- `brain_highlight_head` puis `brain_transfer` illustrent bien « le contrôle passe
  au striatum » — l'effet pédagogique fonctionne.
- Transitions (flash, zoom_smash, color_shift) cassent la monotonie.
- CTA clair.

## ⚠️ Ce qui manque / à améliorer

- **SFX absents** : pas encore de battement de cœur / whoosh / impact (en attente).
  → gros levier de rétention manquant.
- **Pas d'icônes** : ajouter `clock` (66 jours), `brain`/`spiral` (striatum),
  `link` ou `leaf` (habitude). Ancre le propos.
- **Positions peu variées** : surtout centre. Alterner left/right par plan pour
  simuler des changements d'axe.
- **Poses peu variées** : ré-exploiter think/cross/open/wave plus franchement.
- **Sous-titres karaoké** non posés (CapCut) — obligatoire pour ce format.
- Caler précisément la somme des durées (30s) sur le mp3 réel (~31s) : léger écart.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Refaire une passe une fois les SFX dispo + ajouter 2–3 icônes + varier positions.
- C'est la vidéo idéale pour valider le pipeline complet bout en bout.
