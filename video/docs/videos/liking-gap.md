# Vidéo : Le liking gap — tu plais plus que tu ne le crois

## Fiche

- **Sujet** : après une conversation, on sous-estime systématiquement
  l'impression positive qu'on a laissée — Erica Boothby, Cornell
- **Pilier** : Psychologie sociale
- **Article lié** : *(à écrire)*
- **Série** : LE PIÈGE
- **Famille de hook testée** : **Scène concrète (storytelling)** — 2ᵉ vidéo
  de la famille (`hooks-protocole.md` §3). Rotation post-labo #2.

## Fichiers

- Script JSON : `src/data/scripts/liking-gap.json`
- Voix off : `public/liking-gap.wav` (source `le liking gap.wav`, masterisée
  -16,82 → **-14,53 LUFS**, TP -1,45 dB, 48 kHz mono, **31,36 s**)
- Rendu : `out/liking-gap.mp4` *(à faire)*
- Couverture : `out/liking-gap-cover.png` (props : `src/data/covers/liking-gap.cover.json`)
- Commandes : `npm run render:liking` · `npm run cover:liking` · `npm run words:liking`

> ⚠️ **Format WAV, pas MP3** — l'encodeur MP3 disponible sur la machine
> (`mp3_mf`, via le ffmpeg embarqué par CapCut) produit des fichiers de
> 0 octet. Le WAV normalisé remplit le même rôle : Remotion et Whisper le
> lisent tous les deux nativement. Pour repasser en MP3, installer un
> ffmpeg complet (`winget install Gyan.FFmpeg`) et réencoder.

## Specs

- Durée réelle : **31,36 s** (voix off) · Plans : **13** · 1080×1920 @30fps
- Calage : 20 silences internes détectés (`silencedetect`, -25 dB / d=0.15).
  Les 21 segments de parole correspondent **exactement** aux 8 lignes du
  script — mapping vérifié ligne par ligne, aucune interpolation.
  Coupes placées au milieu de chaque silence. Somme = 31,36 s (exact).
- Recette d'ouverture : `zoom-in` + `static_noise` + `glitch` — **identique**
  aux 5 vidéos précédentes. La famille de hook reste la seule variable.

## ⚠️ Calibrage : la règle des 100 mots doit être révisée

| | Mots | Débit mesuré | Durée |
|---|---:|---:|---:|
| `attention-fragmentee` | 100 | 201 mots/min | 29,86 s |
| `liking-gap` | 96 | **184 mots/min** | **31,36 s** |

Moins de mots, **plus** de durée. Le débit varie de ~9 % d'un
enregistrement à l'autre, ce que la règle d'origine (« ~195 mots/min »)
ne prévoyait pas.

**Correction à appliquer** : viser **85-90 mots** pour tenir sous 30 s de
façon fiable, pas 90-100. À 184 mots/min, 90 mots = 29,3 s.

Cette vidéo dépasse donc les 30 s de 1,4 s. Non corrigé volontairement :
l'acquis du labo (§8.2) porte sur un écart de ~6 s (35 s → 29 s), pas sur
un seuil net à 30,00 s. Accélérer la voix de 5 % pour 1,4 s aurait modifié
le débit de l'auteur pour un gain non démontré.

## Le hook (famille Scène concrète)

> « Tu sors d'une conversation. Ton cerveau repasse tout : "J'ai trop
> parlé. J'étais gênant." »

- **Scène concrète** : on ouvre sur une situation vécue, pas sur une
  affirmation scientifique. C'est la famille adossée au seul acquis du
  labo qui la concerne (test #7 : la scène vécue bat l'affirmation
  scientifique sur l'engagement TikTok).
- **Boucle ouverte** : le hook installe le doute, jamais la réponse. Le
  nom du phénomène n'arrive qu'au plan 9, le mécanisme au plan 10.

## Corrections apportées au JSON proposé

Le JSON envoyé (8 plans) a été refait. Cinq écarts :

1. **CTA d'engagement retiré** — « Commente LIKING pour recevoir
   l'analyse » figurait dans le dernier sous-titre. Le labo a tranché
   0/2 sur ce levier (tests #4 et #8, `mesure-14-jours.md` §8.3). Le
   texte n'était en plus pas dans l'enregistrement : le sous-titre aurait
   affiché des mots absents de la voix off.
2. **Durées recalées** — les 8 plans faisaient 32,0 s en valeurs rondes
   (4.0 / 3.5 / 4.5…), sans rapport avec le mp3 réel. Décalage cumulé
   garanti sur les sous-titres.
3. **Anti-diaporama** — 8 plans sur 8 en `position: center`, 7 sur 8 en
   `camera: cine`. Repassé à 13 plans avec alternance
   center/left/right et 4 caméras différentes.
4. **Recette d'ouverture rétablie** — le JSON partait sur `cine` +
   `flash_reverse`. Casser la constante visuelle rendait la comparaison
   entre familles de hook ininterprétable (6ᵉ vidéo consécutive).
5. **`emotion: "fierte"` sur la chute** — remplacé par `calme`. La chute
   est un recadrage doux (« il l'était peut-être surtout pour toi »), pas
   un moment de fierté. Registre coach vs professeur.

Conservé du JSON proposé : le `split` sur la double mesure (bonne idée,
déplacé sur le plan qui porte la seconde moitié de la comparaison), les
icônes `eye` / `brain` / `clock`, et `rumination_loop` sur la boucle
mentale — repris deux fois volontairement (plans 2 et 10), même FX pour
le même état mental.

## Statut

- [x] Script écrit et validé (1 seule chercheuse : Erica Boothby · Cornell)
- [x] Voix off reçue + masterisée (-16,82 → -14,53 LUFS)
- [x] Durées calées sur l'audio réel (silencedetect)
- [ ] Karaoké frame-perfect (`npm run words:liking`)
- [ ] Rendu MP4 (`npm run render:liking`)
- [ ] Couverture générée (`npm run cover:liking`)
- [ ] Sous-titres vérifiés
- [ ] Pack réseaux (FB/IG/TikTok/YouTube)
- [ ] Publié — **Instagram à 12:00** (2ᵉ des 4-6 pubs du test d'horaire)
- [ ] Relevés dans `mesure-14-jours.md` §6 — famille **Scène concrète**

## ⚠️ Notes

- **Exactitude scientifique** : deux formulations ont été corrigées avant
  enregistrement. « Cette personne est repartie en t'appréciant plus »
  transformait un effet moyen en certitude individuelle → remplacé par
  « tu laisses **souvent** une meilleure impression ». Et « tu compares
  tes doutes à leur politesse » inversait le résultat : il suggérait que
  la chaleur de l'autre n'est que de la politesse, alors que l'étude dit
  que l'appréciation est réelle et mal perçue. Reformulé en autocritique
  bruyante / signaux positifs mal remarqués.
- La persistance « plusieurs mois » vient du volet colocataires de
  l'étude (Boothby, Cooney, Sandstrom & Clark, *Psychological Science*,
  2018), pas du volet inconnus en laboratoire.
- **Pas de CTA d'engagement** : application du bilan §8.2.

## 🔁 Prochaine itération

- Budget de mots ramené à **85-90** sur le prochain script.
- Rotation hooks : Scène concrète à 2/4.
- Relevé +72 h / +7 j — toujours jamais fait sur aucune vidéo.
