# Protocole de mesure & d'expérimentation — 14 jours

> Carnet de labo (document vivant). La roadmap dit *quoi tester et pourquoi* ;
> ce fichier enregistre *ce qu'on a mesuré et décidé*.
> Stratégie de fond → [roadmap-editoriale.md](roadmap-editoriale.md).
>
> Baseline figée le **2026-07-19** (exports Metricool 30 j + YouTube Studio
> 2026-06-20 → 2026-07-18). Les CSV sources vivent hors du repo (Bureau) ;
> les chiffres de référence sont recopiés ici pour ne pas les perdre.

---

## 1. Snapshot 30 jours (baseline au 2026-07-19)

### Cockpit

| Réseau | Abonnés | Vues 30 j | Meilleur contenu | Signal dominant |
|---|---:|---:|---|---|
| YouTube | 18 | 4 949 | QI/pensée critique | Acquisition (QI = 50 % des abonnés) |
| TikTok | 43 | ~3 300 | BDNF | Engagement régulier, portée plate |
| Instagram | 9 | ~1 120 | Dépression | Découverte, ~0 conversion |
| Facebook | 9 | portée 2-10 | — | Canal sans audience |

**Constante inter-réseaux :** forte découverte, conversion en abonnés quasi
nulle partout sauf YouTube.

### Scoreboard croisé par sujet

`ret` = rétention YouTube (durée moy. vue ÷ durée vidéo) · `eng` = engagement
TikTok (interactions ÷ vues) · `watch`/`save` = Instagram Reels.

| Sujet | YT vues | YT ret | YT abo | TT vues | TT eng | IG vues | IG watch | IG save | Verdict |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| **BDNF** | 571 | 18 % | +1 | 290 | 10,7 % | 136 | 7,2 s | 6 | 🟢 Territoire n°1 |
| **Dopamine** | 328 | 27 % | +2 | 302 | 6,6 % | 138 | 3,8 s | 0 | 🟢 Gagnant caché |
| **QI / biais** | 1 383 | 22 % | +9 | 302 | 5,3 % | 36 | 5,0 s | 0 | 🟢 Moteur abonnés |
| **Dépression** | 115 | 24 % | 0 | 292 | 3,8 % | 193 | 5,2 s | 0 | 🟢 Qualité, mal distribué |
| Sérotonine intestin | 1 119 | 17 % | +3 | 281 | 4,6 % | 130 | 5,3 s | 0 | 🟢 Transversal |
| Effet projecteur | — | — | — | 237 | 10,5 % | 118 | 4,3 s | 1 | 🟡 Prometteur (24 h) |
| Rejet social | 683 | 17 % | +3 | 253 | 1,6 % | 135 | 5,4 s | 0 | 🟡 Sujet OK, créatif KO |
| Résilience | 150 | 17 % | +1 | 263 | 7,2 % | 3 | — | 0 | 🟡 Flop IG isolé |
| Procrastination | 341 | 8,5 % | 0 | 256 | 5,5 % | 48 | 6,0 s | 0 | 🟠 Titre OK, ouverture KO |
| Méditation | 108 | 13 % | 0 | 244 | 2,5 % | 141 | 2,7 s | 0 | 🟠 Hook faible |
| Anxiété | 143 | 8,7 % | 0 | 251 | 1,2 % | 25 | 11,2 s | 0 | 🔴 À retravailler |
| Burn-out | 7 | — | 0 | 259 | 3,1 % | 16 | 4,7 s | 0 | 🔴 Insuffisant |

### Meilleures heures (TikTok — seul réseau avec historique fiable)

Pics : **mercredi et jeudi**, créneaux **10-12 h** et **18 h**. Publication
actuelle ~18 h (bon), mais le pic **10-12 h mercredi/jeudi est inexploité**.
IG/YouTube : historique Metricool trop court → utiliser ce motif comme proxy.

### ⚠️ Limites de la donnée (à garder en tête)

- Compte Metricool connecté le 18/07 → **timelines d'abonnés et de portée de
  compte** ne démarrent qu'à la connexion.
- **Rétention / temps de visionnage TikTok : absents** de Metricool.
- **Attribution d'abonnés par vidéo** : fiable seulement sur YouTube (Studio).
- Facebook : portée 2-10, à ignorer tant qu'il n'y a pas d'audience.

---

## 2. Seuils de décision (calés sur les médianes de la baseline)

| Métrique | 🔴 Échec | 🟡 Moyen | 🟢 Fort |
|---|---|---|---|
| Rétention YouTube | < 12 % | 12-20 % | ≥ 20 % |
| Vues YouTube (7 j) | < 150 | 150-600 | ≥ 600 |
| Engagement TikTok | < 3 % | 3-7 % | ≥ 7 % |
| Vues Instagram (7 j) | < 60 | 60-150 | ≥ 150 |
| Sauvegardes IG | 0 | 1-2 | ≥ 3 |
| Abonnés/vidéo (YT) | 0 | +1-2 | ≥ +3 |

**Règle de décision (roadmap §8) :** si un sujet dépasse nettement la médiane
**ET** génère partages/saves/abonnés → suite publiée sous 7 jours.

---

## 3. Cadre du test

- **Objectif principal :** portée + abonnés + apprentissage algorithmique.
  **Secondaire :** 1 seul CTA ressource/semaine max.
- **Cadence :** 8 vidéos en 14 jours = **4/semaine pendant le labo**, puis
  retour à 2-3/semaine en régime établi.
- **Règle d'or :** 1 seule hypothèse principale testée par vidéo. Tout le reste
  constant.
- **Relevés à fenêtres fixes :** +24 h, +72 h, +7 j (à l'heure exacte, pas en
  jours calendaires).

---

## 4. Les 8 vidéos test (répartition 50/25/25)

### 50 % — exploiter les gagnants

| # | Sujet | Hypothèse unique | Seuil de réussite |
|---|---|---|---|
| 1 | BDNF #2 | Un hook plus émotionnel élargit la portée sans perdre la rétention | Rétention YT ≥ 18 % **et** vues > médiane — **✅ CONFIRMÉ** (publié 2026-07-20, relevé +20h : rétention YT 32,5%, vues 346 > médiane 328). Détail §6-7 |
| 2 | Sérotonine (angle intestin) | Réduire la durée (< 30 s) fait passer la rétention YT au-dessus de 20 % | Rétention YT ≥ 20 % — **✅✅ CONFIRMÉ** (publié 2026-07-21, relevé +18h : rétention YT ~45%, 1 408 vues > médiane 328, +6 abonnés — meilleur résultat du catalogue). Détail §6-7 |
| 3 | Dopamine #2 | Un hook chiffre/corps dès la 1ʳᵉ seconde débloque la distribution YT | Vues YT ≥ 600 (rétention déjà à 27 %) — **❌ ÉCHEC sur le critère testé** (publié 2026-07-22, relevé +18-19h : 269 vues < seuil 600 et < médiane 328 ; rétention YT 37,8 %, très au-dessus du seuil fort 20 %). Détail §6-7 |
| 4 | Effet de vérité illusoire (Fazio) | Commencer par un mini-test augmente rétention **et** partages | Partages TikTok ≥ 2 **et** rétention ≥ 20 % — **❌ ÉCHEC sur le critère strict** (publié 2026-07-23, relevé +18h : rétention TikTok 23,75% ✅ mais 0 partage TikTok ❌). Nuance : 1 200 vues YT (2ᵉ meilleur score du labo) et YouTube signale plus de partages que d'habitude — l'effet s'est manifesté sur YouTube, pas TikTok. Détail §6-7 |

### 25 % — développer les prometteurs

| # | Sujet | Hypothèse unique | Seuil de réussite |
|---|---|---|---|
| 5 | Procrastination (ré-écriture) | Réécrire **uniquement les 3 premières secondes** fait passer la rétention de 8,5 % à > 15 % | Rétention YT ≥ 15 % — **✅✅✅ CONFIRMÉ, meilleur résultat du labo** (publié 2026-07-24, relevé +19-20h : rétention YT 58,8%, 1 200 vues, +5 abonnés). Détail §6-7 |
| 6 | Effet projecteur (suite) | Le sujet tient au-delà de 72 h et convertit en abonnés | +3 abo cumulés **et** tenue à 72 h — **❌ ÉCHEC** (publié 2026-07-18, relevé +7j le 2026-07-25 : +1 abonné cumulé seulement, courbes de vues plates dès 24-48h sur les 4 réseaux). Détail §6-7 |

### 25 % — tester un format

| # | Sujet | Hypothèse unique | Seuil de réussite |
|---|---|---|---|
| 7 | Rejet social (nouveau hook/scène concrète) | Le problème est créatif : une scène concrète fait passer l'engagement TikTok de 1,6 % à > 5 % | Engagement TikTok ≥ 5 % — ✅ script + voix off calée (`rejet-social-2`, 35,74 s, 14 plans), karaoké/rendu restants. Continue la nouvelle recette d'ouverture TikTok (`zoom-in`+`static_noise`+`glitch`). Voir [rejet-social-2.md](rejet-social-2.md) |
| 8 | Format quiz / expérience mentale (sujet validé) | Un mini-quiz augmente commentaires et complétion | Commentaires > médiane sur ≥ 2 réseaux |

---

## 5. Fiche de mesure (template — dupliquer par vidéo)

Remplir 3 fois : +24 h, +72 h, +7 j.

| Champ | +24 h | +72 h | +7 j | Source |
|---|---|---|---|---|
| Vues | | | | Metricool (4 réseaux) |
| Portée | | | | Metricool (IG/FB) · ⚠️ TikTok = app native |
| Durée moy. vue / rétention | | | | YT Studio · IG Metricool · ⚠️ TikTok = app native |
| Interactions | | | | Metricool |
| Commentaires | | | | Metricool |
| Partages | | | | Metricool |
| Sauvegardes | | | | IG Metricool (TikTok n'en a pas) |
| Abonnés générés | | | | ⚠️ YT Studio seul fiable · IG/TikTok = app native |
| Visites profil | | | | ⚠️ App native (Metricool ne l'expose pas) |
| **Verdict vs seuil** | | | | 🔴 / 🟡 / 🟢 |

**Contrainte opérationnelle :** Metricool ne donne **ni la rétention TikTok, ni
l'attribution d'abonnés par vidéo sur IG/TikTok, ni les visites de profil**. Ces
3 champs se relèvent **à la main dans l'app native** (TikTok Studio / Instagram
Insights). YouTube est le seul entièrement automatisable via Studio.

---

## 6. Journal des relevés

> À compléter au fil de l'eau. Une entrée par vidéo × fenêtre.

### BDNF #2 (`bdnf2`) — relevé ~+15-20h (2026-07-21 09h00, publié 2026-07-20)

Publication : FB 12h30 · YT ~13h30 · IG 18h31 · TikTok ~20h00. Courbes déjà
plates sur les 4 réseaux (croissance arrêtée après quelques heures) → lecture
fiable même avant le cap exact des 24h.

| Réseau | Vues | Rétention | Interactions | Abonnés | Note |
|---|---:|---:|---|---:|---|
| YouTube | 346 (méd. 328) | **32,5 %** (13s/40s) | — | +2 | ✅ dépasse le seuil fort (20%) et la médiane |
| TikTok | 241 | 21,8 % (8,52s/39s) | 17 likes, 4 saves, 0 com/partage — engagement 7,0-8,7% (fort) | +2 | ⚠️ « la plupart ont arrêté à 0:01 » — décrochage immédiat malgré bonne moyenne (distribution bimodale) |
| Facebook | 218 (spect. 200) | 10,3 % (4s/39s) | 3 réactions, 1 sauvegarde, 0 com/partage | 0 | 🟢 très au-dessus de la baseline habituelle (portée 2-10) ; 80,9% de la portée hors abonnés (recommandations) |
| Instagram | 13 (couv. 12) | 12,8 % (5s/39s) | 1 like, 0 com/partage/save | 0 | 🔴 conforme au pattern IG historique (canal faible, ~0 conversion) |

---

### Sérotonine (intestin) #2 (`intestin-cerveau-2`) — relevé ~+16-20h (2026-07-22 08h55, publié 2026-07-21)

Publication : FB 12h30 · YT ~13h30 · IG 18h31 · TikTok ~20h00. Correction :
le relevé initial avait mal attribué les stats TikTok (269 vues/9,9s) à
YouTube — les deux plateformes étaient présentes dans les captures et se
ressemblent visuellement. YouTube est bien à 1 408 vues (aucune ambiguïté,
pas de double lecture).

| Réseau | Vues | Rétention | Interactions | Abonnés | Note |
|---|---:|---:|---|---:|---|
| YouTube | **1 408** (méd. 328) | **~45%** (13s/29s) | — | **+6** | ✅✅ meilleur score de rétention ET de vues du catalogue à ce jour (#1/10 récents) |
| TikTok | 269 | 34,1% (9,9s/29s) | 12 likes, 6 saves, 0 com/partage — engagement ~6,7% (moyen-fort) | +1 | ⚠️ **« la plupart ont arrêté à 0:01 » — 2ᵉ vidéo consécutive avec ce même décrochage immédiat** (déjà vu sur `bdnf2`). Pattern à investiguer, pas juste un incident isolé. 99,6% du trafic vient du flux "Pour toi" |
| Facebook | 241 | 20,4% (6s/29s) | 3 réactions, 1 commentaire | 0 | 🟢 pile le seuil fort ; 93% portée hors abonnés |
| Instagram | 120 | ~15,3% (4,5s/29s estimé) | 2 likes | +1 | 🟢 ×9 les vues IG de `bdnf2` (13→120) |

---

### Dopamine #2 (`dopamine-2`) — relevé ~+18-19h (2026-07-23 09h00, publié 2026-07-22)

Publication : FB 12h32 · YT ~13h30 · IG 18h29 · TikTok ~20h00. Courbe YouTube
déjà plate (croissance arrêtée après ~4h, stable jusqu'à 18h17) → lecture
fiable malgré la fenêtre encore sous les 24h strictes.

| Réseau | Vues | Rétention | Interactions | Abonnés | Note |
|---|---:|---:|---|---:|---|
| YouTube | 269 (méd. 328, seuil test 600) | **37,8 %** (14s/37,09s) | 81 vues engagées | — | ❌ sous le seuil de réussite (600) **et** sous la propre médiane du sujet (328) — malgré une rétention forte (seuil fort ≥20 % largement dépassé). La distribution ne s'est pas débloquée : 73,2 % des spectateurs ont balayé sans regarder, 98,9 % du trafic vient du flux Shorts (identique à d'habitude, pas d'effet hook mesurable sur la découverte) |
| TikTok | 271 | 22,5 % (8,35s/37,09s) | 22 likes, 3 saves, 0 com/partage — engagement 9,2 % (fort, > baseline 6,6 %) | +1 | ⚠️⚠️ **« la plupart ont arrêté à 0:01 » — 3ᵉ vidéo consécutive avec ce même décrochage immédiat** (`bdnf2`, `intestin-cerveau-2`, `dopamine-2`). Rétention à 0:02 = 54 %, à 0:04 = 38 %. Malgré ça, engagement et abonnement au-dessus de la baseline chez ceux qui restent |
| Facebook | 163 (spect. 142) | 10,8 % (4s/37,09s) | 1 réaction | 0 | 🟠 la majorité a arrêté à 0:07 — rétention proche de `bdnf2` (10,3 %), pas de confirmation du bon score d'`intestin-cerveau-2` (20,4 %) |
| Instagram | 123 (couv. 117) | 10,8 % (4s/37,09s) | 2 likes, 1 save | 0 | 🟠 dans la fourchette basse observée (`bdnf2` 12,8 %), pas de progression comme sur `intestin-cerveau-2` |

---

### Effet de vérité illusoire (`verite-illusoire`) — relevé ~+18h (2026-07-24, publié 2026-07-23)

Publication : FB 13h31 · YT ~13h30 · IG 18h31 · TikTok ~20h00.

| Réseau | Vues | Rétention | Interactions | Abonnés | Note |
|---|---:|---:|---|---:|---|
| YouTube | **1 200** (méd. 328, ×3,7) | **42,3 %** (15s/35,37s) | 581 vues engagées | **+3** | 🟢🟢 2ᵉ meilleur score de vues du catalogue (derrière `intestin-cerveau-2`), et **YouTube signale explicitement plus de partages que d'habitude** sur ce Short — 43,5 % ont continué à regarder vs 26,8 % sur `dopamine-2` |
| TikTok | 249 | 23,75 % (8,4s/35,37s) | 14 likes, 1 save, **0 partage**, 0 commentaire | 0 | ⚠️⚠️⚠️ **« arrêté à 0:01 » — 4ᵉ vidéo consécutive avec ce même décrochage** (`bdnf2`, `intestin-cerveau-2`, `dopamine-2`, `verite-illusoire`). Détail de la courbe : 64 % restants à 0:01, 50 % à 0:02, 44 % à 0:03 — le décrochage est réel mais un peu moins brutal que sur `dopamine-2` (54 % à 0:02). **0 partage TikTok** malgré le CTA dédié (« partage à quelqu'un qui répète encore ce mythe ») |
| Facebook | 216 (spect. 202) | 17,0 % (6s/35,37s) | 2 réactions, 0 partage | 0 | 🟡 entre `bdnf2` (10,3 %) et `intestin-cerveau-2` (20,4 %), sous le seuil fort |
| Instagram | 40 (couv. 31) | 17,0 % (6s/35,37s) | 0 interaction | 0 | 🔴 nettement sous les lectures précédentes (120-163 vues) — canal faible confirmé, aucune traction sur ce format non plus |

---

### Procrastination (`procrastination-2`) — relevé ~+19-20h (2026-07-25, publié 2026-07-24)

Publication : FB 12h27 · YT ~13h · IG 18h25 · TikTok ~20h00 (heures non confirmées explicitement, déduites des captures).

| Réseau | Vues | Rétention | Interactions | Abonnés | Note |
|---|---:|---:|---|---:|---|
| YouTube | **1 200** (méd. 328, +598 vs habitude) | **58,8 %** (17s/28,92s) | 327 vues engagées | **+5** | 🟢🟢🟢 **meilleur score de rétention de tout le labo** (devant `intestin-cerveau-2` 45%), 2× les vues habituelles, engagement spectateurs 25,1%/74,9% |
| TikTok | 253 | 22,5 % (6,52s/28,92s) | 25 likes, 5 saves, 0 com/partage — engagement 11,9 % (bien > baseline 5,5 %) | 0 | ⚠️⚠️⚠️⚠️⚠️ **« arrêté à 0:01 » — 5ᵉ vidéo consécutive**, ET **1ʳᵉ avec la nouvelle recette d'ouverture** (`zoom-in`+`static_noise`+`glitch`). Magnitude quasi identique à `dopamine-2` (54% restants à 0:02 dans les deux cas) — la nouvelle recette n'a rien changé au pattern |
| Facebook | 19 (spect. 7) | ~52 % (15s/28,92s) — échantillon trop petit pour être fiable | 1 réaction | 0 | 🟡 N trop faible (19 vues) pour tirer une conclusion |
| Instagram | 62 (couv. 56) | ~12 % (3,44s/28,92s estimé) | 0 interaction | 0 | 🟡 meilleur nombre de vues IG du labo à ce jour, mais toujours 0 interaction |

---

## 7. Décisions

> ⚠️ **Au bilan final** : statuer sur la proposition « hook différencié par
> plateforme » — [proposition-hook-par-plateforme.md](proposition-hook-par-plateforme.md).
> Volontairement mise en attente pour ne pas casser la variable contrôlée du
> labo en cours de route.

> Ce qu'on décide à partir des relevés (suite validée, sujet abandonné, format
> retenu). Daté.

### 2026-07-21 — BDNF #2 : hypothèse validée sur YouTube

**Verdict test #1** (hook plus émotionnel élargit la portée sans perdre la
rétention) : seuil de réussite = rétention YT ≥ 18 % **et** vues > médiane.
Résultat : **rétention 32,5 %** (près du double du seuil, et de l'original
`bdnf` à 18 %) **et vues 346 > médiane 328**. **✅ Hypothèse confirmée sur le
critère qui la définissait (YouTube).**

- **À reproduire** : le hook émotionnel (vulnérabilité/frustration avant le
  mécanisme) sur les prochains scripts labo et roadmap — c'est le plus gros
  écart de rétention observé à ce jour sur le catalogue.
- **À surveiller** : le décrochage TikTok à 0:01 (repéré sur cette vidéo,
  à confirmer si récurrent) — l'ouverture `punch-head` + `flash_reverse` +
  `keywordFx:"shake"` est peut-être trop abrupte pour ce public précis,
  malgré une bonne moyenne de visionnage chez ceux qui restent. Pas de
  changement de recette avant d'avoir 2-3 points de données de plus (TikTok
  n'a pas de mesure de rétention native fiable dans Metricool — relevé manuel
  uniquement, cf. §5).
- **Facebook** : signal encourageant (218 vues vs baseline 2-10) mais un seul
  point de données — à confirmer avant de considérer FB comme un canal viable.
- **Instagram** : aucun changement de diagnostic, reste le canal structurellement
  faible du compte quel que soit le contenu.
- **Prochaine action** : `intestin-cerveau-2` est déjà rendu (`out/intestin-cerveau-2.mp4`,
  rendu le 2026-07-20) et prêt à publier — les courbes de `bdnf2` étant déjà
  stabilisées, rien n'empêche de le publier le 2026-07-21 sans attendre le
  cap strict des 24h.

### 2026-07-22 — Sérotonine (intestin) #2 : hypothèse confirmée, meilleur résultat à ce jour

**Verdict test #2** (réduire la durée sous 30s fait passer la rétention YT
au-dessus de 20%) : seuil = rétention YT ≥ 20%. Résultat : **~45% de
rétention** (ou 34% en lecture précoce, les deux bien au-dessus du seuil et
de l'original à 17%) **et 1 408 vues** (méd. 328), **+6 abonnés**. **✅✅
Meilleure vidéo du catalogue à ce jour, tous critères confondus.**

- **À reproduire** : couper sous 30s semble un levier de rétention encore
  plus fort que le hook émotionnel de `bdnf2` — combiner les deux effets
  (déjà fait naturellement sur `dopamine-2`, à vérifier) sur les prochains
  scripts.
- **Facebook** : 20,4% de rétention, pile le seuil fort, confirme (2e point
  de données) que ce canal répond bien quand la portée vient des
  recommandations (93% hors abonnés, comme sur `bdnf2`).
- **Instagram** : progression nette en vues (×9 vs `bdnf2`) mais rétention
  encore sous le seuil fort — pas de changement de diagnostic structurel,
  juste à observer si la tendance se confirme.
- **⚠️ TikTok — pattern confirmé, pas un incident isolé** : « la plupart ont
  arrêté à 0:01 » sur `bdnf2` **et** `intestin-cerveau-2`, 2 vidéos
  consécutives, 2 hooks différents en contenu mais **le même traitement
  d'ouverture** (`camera:"punch-head"` + `transition:"flash_reverse"` +
  `keywordFx:"shake"`). Ce n'est plus une hypothèse à surveiller — c'est
  suffisamment répété pour tester une variante du recipe hook sur TikTok
  spécifiquement (ex. retirer le `flash_reverse` ou le `shake` simultané,
  garder seulement le `punch-head`) sur la prochaine vidéo test.
- **Prochaine action** : `dopamine-2` est déjà rendu (`out/dopamine-2.mp4`,
  rendu le 2026-07-21) et prêt à publier — les 3 réseaux capturés montrent
  des courbes stabilisées, rien n'empêche de publier le 2026-07-22.

### 2026-07-23 — Dopamine #2 : hypothèse infirmée (distribution), rétention non concernée

**Verdict test #3** (un hook chiffre/corps débloque la distribution YouTube) :
seuil = vues YT ≥ 600. Résultat : **269 vues**, sous le seuil **et** sous la
médiane du sujet lui-même (328, mesurée sur l'original `dopamine-schultz`).
**❌ Hypothèse infirmée sur le critère qui la définissait.** Nuance
importante : la rétention reste excellente (37,8 %, 3ᵉ meilleur score du
catalogue derrière `intestin-cerveau-2` et `bdnf2`) — le hook chiffre/corps
ne dégrade rien chez les gens qui cliquent, il ne fait simplement pas cliquer
plus de monde. Le problème testé ici est un problème de **découverte**, pas
de **contenu** : 98,9 % du trafic vient du flux Shorts standard, aucun signal
d'un boost algorithmique déclenché par ce type de hook.

- **À ne pas reproduire comme stratégie de distribution** : chiffre/corps en
  ouverture est un bon outil de rétention (cohérent avec `bdnf2` et
  `intestin-cerveau-2`, qui utilisaient aussi des hooks travaillés) mais ne
  doit plus être présenté comme un levier de vues — c'est un levier de
  rétention parmi d'autres, pas un mécanisme de distribution à part.
- **Facebook / Instagram** : les deux retombent dans la fourchette basse
  déjà vue sur `bdnf2` (~10-13 %) après le pic d'`intestin-cerveau-2`
  (15-20 %) — pas de tendance haussière confirmée, probablement plus lié à
  la durée <30s d'`intestin-cerveau-2` (variable non isolée sur ce test-ci,
  `dopamine-2` fait 37 s) qu'au hook lui-même.
- **🚨 TikTok — pattern confirmé 3/3** : « arrêté à 0:01 » sur `bdnf2`,
  `intestin-cerveau-2` **et** `dopamine-2` — 3 vidéos consécutives, 3 hooks
  de contenu différents, **le même trio d'ouverture** (`camera:"punch-head"`
  + `transition:"flash_reverse"` + `keywordFx:"shake"`). Ce n'est plus une
  hypothèse à tester, c'est un motif établi. La recommandation notée le
  2026-07-22 (retirer le `flash_reverse` ou le `shake` simultané, garder
  seulement le `punch-head`) devient une action à planifier, pas juste une
  piste. `verite-illusoire` est déjà rendue avec ce même trio et sera
  publiée telle quelle comme 4ᵉ point de données (décision prise pour ne
  pas casser la variable contrôlée du test #4 en cours) ; le changement de
  recette démarre au prochain script (test #5).
- **Prochaine action labo** : test #3 clôt la moitié « exploiter les
  gagnants » (tests 1-3 mesurés, test 4 en attente de relevé). Passage aux
  tests 25 % « développer les prometteurs » (procrastination, effet
  projecteur) après le relevé de `verite-illusoire`.

### 2026-07-24 — Correction : le mot « test » fuitait sur les miniatures publiques

En préparant `procrastination-2` (test #5), découverte que les fichiers
`src/data/covers/bdnf2.cover.json`, `intestin-cerveau-2.cover.json` et
`dopamine-2.cover.json` avaient un champ `eyebrow` du type « BDNF · test #2 »
— **ce champ est rendu visuellement en gros sur la miniature publique**
(composant `Cover.tsx`, texte glow au-dessus du titre), pas juste une note
interne. Les 3 fichiers ont été corrigés (eyebrow ramené au label propre :
« BDNF », « Microbiote », « Dopamine »), mais **les vignettes déjà publiées
pour `bdnf2`, `intestin-cerveau-2` et `dopamine-2` ont potentiellement été
rendues et uploadées avec le texte « test #N » visible** — déjà en ligne
depuis trop longtemps pour justifier un reupload (décision utilisateur du
2026-07-24 : pas grave, on corrige juste pour la suite).
`procrastination-2` et les scripts suivants utilisent déjà le format corrigé.

### 2026-07-24 — Effet de vérité illusoire : hypothèse infirmée sur TikTok (0 partage), mais meilleure distribution YouTube du labo

**Verdict test #4** (commencer par un mini-test augmente rétention et
partages) : seuil = partages TikTok ≥ 2 **et** rétention ≥ 20 %. Résultat :
rétention TikTok 23,75 % ✅ (au-dessus du seuil), mais **0 partage TikTok**
❌ — malgré un CTA dédié qui demandait explicitement de partager. **Sur le
critère strict défini (les deux conditions ensemble, sur TikTok), l'hypothèse
n'est pas confirmée.**

Nuance qui change la lecture : **YouTube signale explicitement « davantage
de spectateurs ont partagé ce Short » que d'habitude**, avec 1 200 vues
(×3,7 la médiane, 2ᵉ meilleur score du catalogue) et 42,3 % de rétention
(2ᵉ meilleur score aussi). Le mécanisme testé — un mini-test/question en
ouverture qui pousse au partage — semble avoir fonctionné, mais **sur
YouTube plutôt que sur TikTok**, la plateforme qui n'était pas celle
définie dans le critère de succès.

- **À reproduire** : le format mini-test/question en ouverture est un très
  bon levier de distribution YouTube (2ᵉ meilleur résultat du labo) — à
  garder pour les prochains tests de la catégorie « tester un format »
  (test #8 prévoit justement un format quiz).
- **À ne pas généraliser à TikTok** : ni la rétention (23,75 %, correcte
  mais pas exceptionnelle) ni surtout les partages (0) n'y confirment
  l'hypothèse — le CTA de partage ciblé n'a pas fonctionné sur cette
  plateforme précise.
- **🚨🚨 TikTok — pattern confirmé 4/4** : « arrêté à 0:01 » sur `bdnf2`,
  `intestin-cerveau-2`, `dopamine-2` **et** `verite-illusoire` — 4 vidéos
  consécutives, 4 hooks de contenu différents, toujours le même trio
  d'ouverture (`punch-head`+`flash_reverse`+`shake`). La magnitude varie
  légèrement (64 % restants à 0:01 ici, contre ~54 % à 0:02 sur
  `dopamine-2`) mais le motif reste identique sur 4/4 lectures. Le prochain
  script (`procrastination-2`, test #5) est déjà construit avec une
  nouvelle recette d'ouverture (`zoom-in`+`static_noise`+`glitch`) —
  premier point de données sur le changement à surveiller à sa publication.
- **Instagram** : 40 vues, nettement sous les lectures précédentes
  (120-163) — pas de rupture de diagnostic, ce canal reste structurellement
  faible.
- **Prochaine action** : publier et relever `procrastination-2` (test #5,
  seuil rétention YT ≥ 15 %). C'est aussi le 1ᵉʳ test de la catégorie 25 %
  « développer les prometteurs ». Ensuite, test #6 (effet projecteur, suite)
  nécessite d'abord de publier l'`effet-projecteur` original (jamais encore
  publié, seulement rendu) avant de pouvoir mesurer une tenue à 72h.

### 2026-07-25 — Procrastination : hypothèse confirmée, meilleur résultat retention YT du labo — et signal fort sur le pattern TikTok

**Verdict test #5** (réécrire l'accroche fait passer la rétention YT de
8,5 % à > 15 %) : seuil = rétention YT ≥ 15 %. Résultat : **58,8 %**, très
largement au-dessus du seuil et **le meilleur score de rétention YouTube de
tout le labo à ce jour** (devant `intestin-cerveau-2` à ~45 %). Vues YT
1 200, 2× la performance habituelle, +5 abonnés. **✅✅✅ Hypothèse
confirmée de façon décisive.**

- **À reproduire** : la technique de tension narrative (négation sans
  révéler la cause avant l'intervention d'un chercheur nommé) — déjà vue
  sur `bdnf2` — est maintenant confirmée 2/2 comme le levier de rétention
  le plus fiable du catalogue. À généraliser sur les prochains scripts,
  labo et roadmap.
- **🚨 Signal important sur le pattern TikTok** : `procrastination-2` est
  la 1ʳᵉ vidéo avec la nouvelle recette d'ouverture (`zoom-in`+
  `static_noise`+`glitch`, décidée le 2026-07-23 pour remplacer le trio
  `punch-head`+`flash_reverse`+`shake`). Résultat : **le décrochage à
  0:01 est toujours là**, avec une magnitude quasi identique à
  `dopamine-2` (54 % restants à 0:02 dans les deux cas, ancienne ET
  nouvelle recette). **Conclusion révisée** : le trio d'ouverture n'était
  probablement pas la vraie cause du pattern — c'est plus probablement un
  comportement structurel de l'audience TikTok de ce compte sur ce format
  de vidéo (durée, rythme, ton), pas un problème de recipe visuelle
  spécifique. Ne pas continuer à changer la recette d'ouverture sur cette
  seule base ; si le sujet reste à creuser, il faudra une hypothèse
  différente (ex. durée totale, densité de coupes, personnage lui-même).
- **Facebook** : 19 vues seulement, échantillon trop petit pour être
  interprété.
- **Instagram** : 62 vues, meilleur chiffre IG du labo, mais 0 interaction
  — pas de changement de diagnostic sur ce canal.
### 2026-07-25 — Effet projecteur : hypothèse infirmée, mais 1ʳᵉ vidéo labo sans décrochage TikTok à 0:01

**Verdict test #6** (le sujet tient au-delà de 72h et convertit en
abonnés) : seuil = +3 abonnés cumulés **et** tenue à 72h. Résultat : **+1
abonné cumulé** (YouTube seul, 0 sur les 3 autres réseaux) sur 7 jours
complets — largement sous le seuil. Les 4 courbes de vues s'aplatissent
dans les 24-48 premières heures, sans signe de tenue prolongée
particulière par rapport aux autres vidéos du labo. **❌ Hypothèse
infirmée sur les deux critères.**

- **Signal positif à noter** : `effet-projecteur` obtient la **meilleure
  rétention TikTok du labo à ce jour (42,3 %)**, et surtout **c'est la
  1ʳᵉ vidéo du labo à ne pas montrer le décrochage sévère à 0:01** — 74 %
  de l'audience reste au-delà de la première seconde, contre 40-64 % sur
  les 5 autres vidéos testées. Combiné à l'observation faite sur
  `procrastination-2` (le changement de recipe d'ouverture n'a rien changé
  au pattern), ça renforce l'idée que le décrochage est lié au **contenu
  ou au rythme narratif** plutôt qu'à un choix de caméra/transition
  spécifique — `effet-projecteur` a un rythme plus posé (33,62s, 8 plans,
  contre des scripts plus denses ailleurs). Hypothèse à creuser plus tard,
  pas dans le cadre du labo actuel.
- **YouTube** : 688 vues (×2,1 la médiane), bon résultat mais courbe plate
  après 48h, cohérent avec le reste du catalogue (rien d'exceptionnel côté
  longévité).
- **Prochaine action** : relever `rejet-social-2` (test #7, publié le
  2026-07-25 sur TikTok ~20h30, autres réseaux à confirmer) — c'est le
  dernier test avant le bilan du labo (test #8 restant).

### Effet projecteur (`effet-projecteur`) — relevé +7j (2026-07-25, publié 2026-07-18)

⚠️ Correction : ce test avait été noté comme publié le 2026-07-25 par
erreur — les captures confirment une publication le 2026-07-18 sur les 4
réseaux. Le relevé ci-dessous est donc à +7 jours, pas +72h.

Publication : FB 18/07 12h30 · TikTok 18/07 20h00 · IG 18/07 18h31 · YT 18/07 (heure non capturée).

| Réseau | Vues | Rétention | Interactions | Abonnés | Note |
|---|---:|---:|---|---:|---|
| YouTube | 688 (méd. 328, ×2,1) | 44,6 % (15s/33,62s) | 235 vues engagées | +1 | 🟢 bon score, mais plus aucune croissance après 48h (0 vue sur les dernières 48h au moment du relevé) |
| TikTok | 264 | **42,3 %** (14,21s/33,62s) | 25 likes, 1 com, 6 saves, 0 partage — engagement 12,1 % | 0 | 🟢🟢 **meilleure rétention TikTok du labo à ce jour**, et **74 % restants à 0:01** — 1ʳᵉ vidéo labo à ne PAS montrer le décrochage sévère observé sur les 5 autres |
| Facebook | 237 (spect. 224) | 11,9 % (4s/33,62s) | 5 interactions | 0 | 🟠 fourchette basse habituelle, 86,3% de la portée hors abonnés |
| Instagram | 120 (couv. 119) | 14,9 % (5s/33,62s) | 2 (1 like, 1 save) | 0 | 🟡 correct pour ce canal |
