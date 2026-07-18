# Vidéo : Le rejet allume les mêmes zones qu'une brûlure

## Fiche

- **Sujet** : Le rejet social active le cortex cingulaire antérieur, la même zone
  impliquée dans la douleur physique — Eisenberger, Lieberman & Williams, 2003, *Science*
- **Pilier** : Psychologie sociale
- **Article lié** : /blog/surmonter-rejet-social
- **Accent principal** : arc rouge stress (la menace/l'exclusion) → violet eveil (la révélation + la réassurance)
- **Objectif** : Top 6 éditorial #2 (roadmap-editoriale.md §5) — autorité E-E-A-T + trafic article
- **Série** : LE PIÈGE

## Fichiers

- Script JSON : `src/data/scripts/rejet-social.json`
- Voix off : `public/le rejet.mp3` (masterisée -15,85 → -14 LUFS, 35,32 s)
- Rendu : `out/rejet-social.mp4`
- Couverture : `out/rejet-social-cover.png` (props : `src/data/covers/rejet-social.cover.json`)
- Commandes : `npm run render:rejet` · `npm run cover:rejet` · `npm run words:rejet`

## Specs

- Durée réelle : 35,32 s (voix off) · Plans : 11 · Format : 1080×1920 @30fps
- Calage : 6 premiers plans posés sur les silences réels détectés (`silencedetect`
  adaptatif, seuil -26dB) ; plans 5-6 (crédit chercheuse) partagent un même segment
  audio réparti au prorata du nombre de mots ; plans 7-11 calés sur le temps restant
  (répartition proportionnelle au nombre de mots — mêmes limites que pour la #1, le
  karaoké Whisper corrigera la précision mot-à-mot). Somme des `duration` = 35,32 s (exact).
- Hook (0–3s) : « Le rejet social allume les mêmes zones cérébrales qu'une brûlure. »
- CTA final : « L'article complet est sur leveilmental.fr. »

## Statut

- [x] Script écrit (1 seule chercheuse nommée : Naomi Eisenberger · UCLA)
- [x] Voix off reçue + masterisée (-27,86 → -15,85 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect adaptatif, GUIDE.md §4.2)
- [ ] Karaoké frame-perfect (Whisper local, `npm run words:rejet` — à lancer en
      local, pas dans Claude web, voir GUIDE.md §10)
- [ ] Rendu MP4 (`npm run render:rejet`)
- [ ] Couverture générée (`npm run cover:rejet`)
- [ ] Sous-titres vérifiés (karaoké natif — pas de CapCut nécessaire)
- [ ] Pack réseaux (FB/IG/TikTok/YouTube)
- [ ] Publié

## ⚠️ Notes

- Nom de fichier audio avec espace (`le rejet.mp3`) : conservé tel quel (upload
  original) — les commandes npm le passent entre guillemets. Ça fonctionne, mais
  pour les prochaines vidéos préférer un nom sans espace (convention du repo :
  `Nom-Sujet.mp3`) pour éviter tout risque avec des outils qui ne quotent pas
  correctement les chemins.
- Sujet moins sensible que la #1 (pas de risque santé mentale direct type
  traitement/médication), donc pas de garde-fou dédié requis — mais rester factuel
  sur la nuance scientifique : l'étude originale (Eisenberger et al., 2003) porte sur
  un chevauchement des réseaux de la *composante affective/détresse* de la douleur,
  pas une identité biologique totale entre douleur physique et douleur sociale (débat
  encore actif dans la littérature ultérieure). Le script reste dans les limites de
  ce que l'étude soutient : « la même zone s'activait », pas « c'est exactement la
  même douleur ».

## 🔁 Prochaine itération

- Enregistrer/valider le karaoké, rendre, publier (idéalement un mercredi — meilleur
  jour tous réseaux, roadmap-editoriale.md §1). Respecter la cadence 2-3 vidéos/semaine
  (§4 point 7) : ne pas publier le lendemain de la #1 sauf si sa mesure à 24h le justifie.
