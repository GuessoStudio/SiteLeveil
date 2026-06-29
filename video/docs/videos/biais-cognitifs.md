# Vidéo : Ton cerveau a un bug (biais cognitifs)

## Fiche

- **Sujet** : Ancrage + biais de confirmation ; la question qui casse le piège
- **Pilier** : Psychologie
- **Article lié** : (les 12 biais — à relier)
- **Accent principal** : arc bleu(neuro) → orange(dopamine) → rouge(stress) → bleu → violet(eveil)
- **Objectif** : hook viral + autorité + trafic article (12 biais)

## Fichiers

- Script JSON : `src/data/scripts/biais-cognitifs.json`
- Voix off : `public/biais-cognitifs.mp3` (~29 s — ElevenLabs FR)
- Rendu : `out/biais-cognitifs.mp4`
- Commande : `npm run render:biais`

## Specs

- Durée : 32 s · Plans : 9 · Format : 1080×1920 @30fps
- Hook (0–3s) : « TON CERVEAU A UN BUG » (punch-head + flash_reverse + brain icon)
- CTA final : « LIEN EN BIO — Les 12 biais les plus dangereux → leveilmental.fr »

## Statut

- [x] Script écrit
- [x] Voix off générée (mp3 calé via champ `audio` du JSON)
- [x] FX / icônes calés (toute la palette + 9 icônes)
- [x] Rendu MP4 (avec voix + ambiance + SFX)
- [x] SFX actifs (transitions + ambiance)
- [x] Mix audio réglé (voix ×3,7 ; impact_heavy/whoosh_clean baissés base ; spark local)
- [x] Mot-clé sans sous-titre + flash couleur + glitch (BUG) / shake (BIAIS)
- [x] Zone caption-safe + perso remonté/réduit + caméra ancrée au sol
- [ ] Sous-titres karaoké CapCut (zone du tiers bas)
- [ ] Publié

## ✅ Ce qui marche

- Première vidéo qui exploite TOUT : positions G/D/centre, 8 poses, 9 icônes pop,
  FX des 3 sprints, transitions, SFX + ambiance.
- Arc de couleur narratif (piège orange → danger rouge → éveil violet) : le sens
  passe par la couleur.
- Exemple concret de l'ancrage (200→120, vaut 80) très lisible.
- La question « ET SI J'AVAIS TORT ? » en plan violet = pic save-worthy.

## ⚠️ Ce qui manque / à améliorer

- **Sous-titres karaoké CapCut** : seule étape restante avant publication.
  Importer `out/biais-cognitifs.mp4`, sous-titres auto (sync sur la voix),
  style karaoké mot-à-mot, **placés dans le tiers bas (zone caption-safe ~64-77%)**.
  Couleurs : blanc + mot actif violet `#7C6FF7`, contour noir + ombre légère.
  Police gratuite (Montserrat/Inter Bold, sans couronne Pro).
- **Sync voix/plans** : voix ~29 s vs vidéo 32 s. Les ~3 s d'écart tombent sur
  le plan CTA final (souhaitable).
- **Autorité E-E-A-T** : aucun chercheur nommé. Optionnel mais fort : citer
  Kahneman / Tversky (ancrage) et Peter Wason (biais de confirmation).
- P5 `tunnel_vision` : le masque est centré alors que le perso est à gauche →
  léger déséquilibre. Acceptable, à surveiller si gênant.

## 🧱 Acquis moteur (réutilisables par toutes les vidéos)

- `audioVolume` (gain voix) + `sfxVolume` (override SFX par script).
- `keywordFx` : `glitch` | `shake` ; mot-clé qui s'allume en couleur puis blanc.
- `src/data/layout.ts` : repères verticaux centralisés + bande caption-safe.
- `guides: true` dans le JSON : repère studio (zone sous-titres + UI TikTok),
  invisible en prod.
- Caméra ancrée au sol : les zooms gardent les pieds plantés.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Ajouter la voix + caler les durées + sous-titres → version publiable.
- Décliner le même format sur les 10 autres biais (série).
