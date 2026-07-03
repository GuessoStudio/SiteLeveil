# Vidéo : Méditation, le vrai changement

## Fiche

- **Sujet** : La méditation ne « reprogramme » pas le cerveau ; effets ciblés (attention, conscience du corps/insula, régulation émotionnelle). Régularité > durée.
- **Pilier** : Développement personnel / Neurosciences
- **Article lié** : déjà créé (à relier au bon slug)
- **Accent principal** : arc bleu (science) → cyan (effets ciblés) → violet (éveil) → vert (pratique)
- **Objectif** : myth-bust anti-hype + autorité + trafic article

## Fichiers

- Script JSON : `src/data/scripts/meditation.json`
- Voix off : `public/Méditation.mp3` (~38,3 s)
- Rendu : `out/meditation.mp4`
- Couverture : `out/meditation-cover.png` (`src/data/covers/meditation.cover.json`)
- Commandes : `npm run render:meditation` · `npm run cover:meditation`

## Specs

- Durée : ~40,9 s (voix 38,3 s + hold CTA) · Plans : 18 · Format : 1080×1920 @30fps
- Hook (0–3s) : « La méditation ne reprogramme PAS ton cerveau. »
- CTA final : « Article complet sur leveilmental.fr »

## Statut

- [x] Script écrit (aligné Tang, Hölzel & Posner, Nature Reviews Neuroscience 2015)
- [x] Voix off intégrée + durées calées (silences)
- [x] FX / icônes calés (palette calme)
- [x] Rendu MP4 (voix + ambiance + SFX)
- [x] Couverture générée
- [ ] Sous-titres karaoké CapCut (tiers bas, zone caption-safe)
- [ ] Publié

## ✅ Ce qui marche

- Anti-hype : « effets ciblés, pas un cerveau boosté partout » = consensus réel.
- Énumérations en cadence rapide (structure/fonction/stress, attention/corps/émotions).
- Palette calme cohérente (pas de rouge alarme sauf le plan « stress »).
- Fin non-promesse (« ton mental change avant que tu le remarques »).

## ⚠️ Ce qui manque / à améliorer

- **Niveau voix** ×2,5 = point de départ. À valider.
- **Synchro mot-clé ↔ phrase** : 18 plans calés sur estimation + silences ; si un
  plan décroche, ajuster sa `duration`. Cadence rapide → surveiller l'énumération.
- **E-E-A-T** : la voix ne nomme pas les chercheurs (Tang/Hölzel/Posner) ; c'est
  l'article qui porte l'autorité. Option future : les nommer à l'écran.
- **Sous-titres karaoké CapCut** dans le tiers bas.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Valider synchro + niveau voix, poser le karaoké → publiable.
- Relier à l'article méditation existant.
