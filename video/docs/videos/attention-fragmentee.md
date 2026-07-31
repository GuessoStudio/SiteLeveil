# Vidéo : Attention fragmentée — 23 minutes pour revenir

## Fiche

- **Sujet** : après une interruption, il faut environ 23 minutes pour
  revenir à la tâche d'origine — Gloria Mark, UC Irvine
- **Pilier** : Développement personnel / Neurosciences
- **Article lié** : /blog/attention-fragmentee-concentration-numerique
- **Série** : LE PIÈGE
- **Famille de hook testée** : **Identity Call** — 1ʳᵉ vidéo de la rotation
  (`hooks-protocole.md` §3). Jamais testée auparavant.

## Fichiers

- Script JSON : `src/data/scripts/attention-fragmentee.json`
- Voix off : `public/attention-fragmentee.mp3` (uploadée sous `attention-fragmentee.wav`, masterisée -18,12 → -14,84 LUFS, 29,86 s)
- Rendu : `out/attention-fragmentee.mp4` *(à faire)*
- Couverture : `out/attention-fragmentee-cover.png` (props : `src/data/covers/attention-fragmentee.cover.json`)
- Commandes : `npm run render:attention` · `npm run cover:attention` · `npm run words:attention`

## Specs

- Durée réelle : **29,86 s** (voix off) · Plans : 12 · Format : 1080×1920 @30fps
- **Sous les 30 s** — cible tenue (règle des 90 mots, `mesure-14-jours.md` §8.2)
- Calage : silences réels détectés (`silencedetect`, seuil -25dB/d=0.15).
  12 pauses détectées, scènes calées dessus. Les deux dernières lignes
  (« C'est ton environnement. » / CTA) ont été réparties proportionnellement
  au nombre de mots faute de pause nette entre elles.
  Somme des `duration` = 29,86 s (exact).
- Recette d'ouverture : `zoom-in` + `static_noise` + `glitch` — **identique**
  à `procrastination-2`, `rejet-social-2`, `effet-projecteur-2`,
  `pensee-critique-2`. Volontaire : la recette visuelle reste constante
  pour que la **famille de hook** soit la seule variable testée.

## Calibrage (nouveau process)

- Script livré : **100 mots** → durée estimée ~30,8 s (à 195 mots/min)
- Durée réelle enregistrée : **29,86 s** → débit effectif ~201 mots/min
- Écart de projection : ~1 s. La règle des 90-100 mots est validée sur ce
  premier essai.

## Le hook (famille Identity Call)

> « Tu réponds « deux secondes » à un message ? Tu perds souvent bien plus
> que deux secondes. »

- **Identity Call** : nomme un comportement précis pour que le spectateur
  se reconnaisse immédiatement, plutôt que d'annoncer un fait.
- **Boucle ouverte** (hypothèse `hooks-protocole.md` §1) : le hook dit
  qu'on perd plus, jamais combien. Le chiffre n'arrive qu'au 4ᵉ plan.

## Ce que l'utilisateur a ajouté au script proposé

La ligne finale **« Le vrai problème, ce n'est pas ton cerveau. C'est ton
environnement. »** ne figurait pas dans la version initiale. Elle
transforme la vidéo d'un constat chiffré en recadrage, et prépare le
sujet Wendy Wood du pipeline (« change ton environnement, pas ta
volonté »). Conservée telle quelle.

Corrections appliquées à la version utilisateur avant enregistrement :
- **Institution rétablie** (« à l'université de Californie à Irvine ») —
  elle avait été retirée, alors que les 20 vidéos du catalogue la
  mentionnent sans exception (règle E-E-A-T).
- « Et le chiffre est violent » retiré — registre créateur plutôt que
  professeur.
- Longueur ramenée de 116 à 100 mots pour tenir sous 30 s.

## Statut

- [x] Script écrit et validé (1 seule chercheuse nommée : Gloria Mark · UC Irvine)
- [x] Voix off reçue + masterisée (-18,12 → -14,84 LUFS, GUIDE.md §4.1)
- [x] Durées calées sur le mp3 réel (silencedetect, GUIDE.md §4.2)
- [x] Karaoké frame-perfect (Whisper local, `npm run words:attention`)
- [x] Rendu MP4 (`npm run render:attention`)
- [x] Couverture générée (`npm run cover:attention`)
- [x] Sous-titres vérifiés
- [x] Pack réseaux (FB/IG/TikTok/YouTube)
- [x] **Publié le 2026-07-30** (IG 12:00 · FB 12:33 · TikTok + YT)
- [x] Relevés dans `mesure-14-jours.md` §6 — famille **Identity Call**
      consignée pour la rotation

## Résultats (+20 h, relevé 2026-07-31)

| Réseau | Vues | Rétention | Interactions | Abonnés |
|---|---:|---:|---|---:|
| YouTube | 694 | 40,7 % (0:12) | 316 vues engagées, 6 likes | +1 |
| TikTok | 263 | 34,9 % · **73 % à 0:01** | 22 likes, 2 saves (9,1 %) | 0 |
| Instagram | **134** | **44,9 %** view rate · 8,03 s | 2 likes | 0 |
| Facebook | 242 | 4 s moy. | 2 | 0 |

**Ce qu'on retient :**

- 🟢 **Facebook est ressorti de la coupure du 24/07** (242 vues,
  recommandations 90,6 %). Résolution spontanée en 5 jours, sans action.
- 🟢 **Meilleur score Instagram du catalogue** (44,9 % de view rate contre
  ~26 % habituels, durée moyenne doublée). ⚠️ **Cause indéterminée** :
  l'horaire (12:00 au lieu de 18:30) et la famille de hook ont changé
  ensemble. Confond assumé — ne pas attribuer.
- 🟠 TikTok à 73 % à 0:01 (2ᵉ du catalogue) et 34,9 % de rétention (3ᵉ).
  Encourageant, mais **n=1** : rien à conclure avant 4 vidéos Identity Call.
- 🟡 YouTube au milieu de tableau (7ᵉ/10 en rétention).
- ⚠️ Recherche YouTube à 0,7 % (contre 2,5 % sur `pensee-critique-2`) —
  contredit l'idée qu'un titre en forme de requête attire la recherche.

## ⚠️ Notes

- **Exactitude scientifique** : les 23 minutes correspondent au temps
  avant *retour à la tâche interrompue*, pas à un temps de concentration
  perdu. C'est la lecture erronée la plus fréquente de cette étude — le
  script la corrige explicitement (« Pas 23 minutes de pause »). La
  méthodologie de Gloria Mark reposait sur l'observation minutée de
  travailleurs.
- **Pas de CTA d'engagement** : application du bilan §8.2 (0/2 sur les
  tests #4 et #8).

## 🔁 Prochaine itération

- **Instagram** : refaire 4 à 6 publications à 12:00 en changeant *rien
  d'autre*, pour savoir si le bond de view rate vient de l'horaire.
- **Rotation hooks** : 3 vidéos Identity Call restantes avant tout bilan
  de famille (`hooks-protocole.md` §4).
- Relevé +72 h / +7 j — jamais fait sur aucune vidéo du labo.
