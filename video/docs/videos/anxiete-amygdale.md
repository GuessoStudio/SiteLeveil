# Vidéo : Ton anxiété, ce n'est pas juste l'amygdale

## Fiche

- **Sujet** : Anxiété = pas l'amygdale seule, mais la régulation amygdale / cortex préfrontal, et un 2e circuit (BNST) pour la menace floue/anticipée
- **Pilier** : Psychologie (neurosciences appliquées)
- **Article lié** : (à relier — article anxiété à venir)
- **Accent principal** : arc bleu (science) → rouge (alarme) → violet (solution)
- **Objectif** : autorité E-E-A-T (BNST + Michael Davis, Emory) + trafic article

## Fichiers

- Script JSON : `src/data/scripts/anxiete-amygdale.json`
- Voix off : (à venir — `public/anxiete-amygdale.mp3`)
- Rendu : `out/anxiete-amygdale.mp4`
- Commande : `npm run render:anxiete`

## Specs

- Durée : ~42 s (placeholder) · Plans : 9 · Format : 1080×1920 @30fps
- Hook (0–3s) : « Ton anxiété, ce n'est pas ton amygdale qui panique. C'est plus subtil. »
- CTA final : « Est-ce un danger maintenant, ou une anticipation ? → leveilmental.fr »

## Statut

- [x] Script écrit (validé scientifiquement : amygdale/BNST/PFC)
- [ ] Voix off générée
- [x] FX / icônes calés (heart, eye, link, bolt, brain, clock, lightbulb, target)
- [x] Rendu MP4 (preview silencieuse)
- [x] SFX actifs (cortisol_spike/empathy_pulse → battement ; synapse → spark)
- [ ] Sous-titres karaoké CapCut (tiers bas, zone caption-safe)
- [ ] Publié

## ✅ Ce qui marche

- Point save-worthy fort : le **BNST** nommé + **Michael Davis (Emory)** = autorité
  rare sur TikTok.
- Distinction peur présente (amygdale) vs anticipation floue (BNST) = insight
  contre-intuitif, scientifiquement exact.
- Grammaire couleur : rouge sur les beats d'alarme/tension, violet sur la sortie.
- Battement (sub_pulse) sous les plans d'alarme = tension ressentie.

## ⚠️ Ce qui manque / à améliorer

- **Voix off** à enregistrer puis ajouter (`"audio": "anxiete-amygdale.mp3"` +
  `audioVolume` à calibrer). Recaler ensuite chaque `duration` sur le mp3.
- **Sous-titres karaoké CapCut** dans le tiers bas (cf. README, zone caption-safe).
- Arbitrage validé : on garde le sigle « BNST » à l'oral (autorité). Si trop
  technique au montage, repli « un second réseau d'alerte ».
- Vérifier que « LE BNST » (punch-head + zoom_smash) reste bien dans la zone.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Ajouter la voix + recaler les durées + karaoké → version publiable.
- Écrire l'article de fond « anxiété : amygdale, cortex préfrontal, BNST » et lier.
