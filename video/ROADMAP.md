# Roadmap — Moteur vidéo Le Petit Éveillé

Backlog des choses à faire / idées. Mise à jour au fil de l'eau.
État du moteur : 7 moteurs visuels (~37 FX) + IconPop (13 icônes) + moteur SFX +
voix off. Pipeline « 1 JSON → 1 MP4 » opérationnel.

---

## 🔴 Maintenant (bloqué sur toi)

- [ ] **Produire les 9 SFX** sur ElevenLabs (prompts fournis) → déposer dans
      `public/sfx/` → me dire « active les sons » (je remplis le registre).
- [ ] Pour chaque nouvelle vidéo : générer la **voix off** ElevenLabs → `public/`.

## 🟠 Prochain (quand tu veux)

- [ ] **Première vraie vidéo complète** de bout en bout (script bien rythmé :
      positions/poses/icônes variées + voix + FX + SFX) pour valider le pipeline.
- [ ] Activer les SFX dans `src/data/sfxRegistry.ts` (null → chemins).
- [ ] Décliner sur un vrai article du blog (réutiliser l'angle scientifique).

## 🟡 Plus tard — FX Tier 3 (sur mesure, à coder à la demande)

À ne coder QUE quand un script précis en a besoin (pas d'avance) :
- [ ] `bias_distortion` (déformation lentille — perception faussée)
- [ ] `decision_fork` (deux faisceaux — choix / dilemme)
- [ ] `anchoring_weight` (sphère qui tombe — biais d'ancrage)
- [ ] `rejection_crack` (verre fissuré — rejet social)
- [ ] `comfort_zone` (bulle + fissure — sortir de sa zone)
- [ ] `breaking_wall` (mur qui éclate — surmonter un blocage)
- [ ] `energy_battery` (jauge — ressources mentales)
- [ ] `level_up` (flash vertical + burst — palier franchi)
- [ ] `compound_stack` (blocs empilés — effet cumulé)

## 💡 Idées moteur (optionnel, à valider avant)

- [ ] **Glisse animée entre positions** : le perso entre dans le cadre (walkA/walkB)
      au lieu d'un cut sec — plus vivant.
- [ ] **Intro/outro de marque** : logo L'Éveil Mental 0,5s en ouverture/fermeture.
- [ ] **Anti-monotonie auto** : si pose/position non variées sur 3+ plans, varier
      automatiquement (ou warning au build).
- [ ] **Affiner l'icône `brain`** : lit un peu « accolades », pourrait être plus
      organique (deux lobes bombés).
- [ ] **Bed musical** : champ `music` (en plus de `audio` voix et `ambience` drone).
- [ ] **Sous-titres burn-in** : explorer `@remotion/captions` pour, un jour, se
      passer de CapCut (karaoké rendu directement).
- [ ] **Lint de script** : avertir si même pose/position/émotion répétée trop
      longtemps, ou si durée totale ≠ longueur du mp3 voix.

## 🧠 Idées contenu / production

- [ ] **Banque de hooks** (3 premières sec) réutilisables par pilier.
- [ ] **Calendrier éditorial** + production par batch (5 vidéos d'un coup).
- [ ] Tester 2 hooks différents sur un même sujet (A/B rétention).
- [ ] Réutiliser les FAQ des articles comme scripts de vidéos courtes.

---

## ✅ Fait (historique)

- Moteur Remotion isolé, pipeline JSON → MP4 (P0–P4).
- Dynamisme : caméra amplifiée, texte pop, fond Dark Premium, flash de transition.
- 6 moteurs FX : ZoneGlow, EmitField, RadialWave, SineWave, NodeGraph, Transition.
- Palette d'accent par pilier.
- Moteur SFX synchronisé (inerte tant qu'aucun fichier).
- Tier 2 : PsychoFx (8 effets) + cognitive_overload.
- IconPop : 13 icônes line-art on-brand.
