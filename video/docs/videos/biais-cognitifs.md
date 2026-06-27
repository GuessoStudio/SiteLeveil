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
- [ ] Sous-titres CapCut
- [ ] Publié

## ✅ Ce qui marche

- Première vidéo qui exploite TOUT : positions G/D/centre, 8 poses, 9 icônes pop,
  FX des 3 sprints, transitions, SFX + ambiance.
- Arc de couleur narratif (piège orange → danger rouge → éveil violet) : le sens
  passe par la couleur.
- Exemple concret de l'ancrage (200→120, vaut 80) très lisible.
- La question « ET SI J'AVAIS TORT ? » en plan violet = pic save-worthy.

## ⚠️ Ce qui manque / à améliorer

- **Sync voix/plans** : voix ~29 s vs vidéo 32 s. Les ~3 s d'écart tombent sur
  le plan CTA final (souhaitable). Si un mot tombe à côté de son plan, ajuster
  les `duration` plan par plan et re-rendre.
- **Autorité E-E-A-T** : aucun chercheur nommé. Optionnel mais fort : citer
  Kahneman / Tversky (ancrage) et Peter Wason (biais de confirmation).
- **Sous-titres karaoké** (CapCut) à poser.
- Vérifier le mix final une fois la voix ajoutée (ambiance sous la voix).
- P5 `tunnel_vision` : le masque est centré alors que le perso est à gauche →
  léger déséquilibre. Acceptable, à surveiller si gênant.

## 📊 Performance (après publication)

- Vues : · Rétention moy. : · Likes : · Partages : · Clics bio :
- Apprentissage :

## 🔁 Prochaine itération

- Ajouter la voix + caler les durées + sous-titres → version publiable.
- Décliner le même format sur les 10 autres biais (série).
