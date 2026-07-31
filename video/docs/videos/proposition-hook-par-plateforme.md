# Proposition en attente : hook différencié par plateforme

> ⚠️ **Document reconstitué le 2026-07-24** après une perte de données locale
> (bascule involontaire de branche git ayant effacé les fichiers non commités).
> Ceci est un résumé structurel de la proposition originale, reconstitué à
> partir de l'historique de conversation — **pas le texte source verbatim**.
> Si la précision exacte du document original compte, le plus fiable est de
> le re-coller depuis sa source d'origine plutôt que de se fier à ce résumé.

## D'où ça vient

Proposition externe partagée par l'utilisateur (titre indicatif), portant sur
une stratégie de **hook différencié par plateforme** : au lieu d'utiliser la
même accroche/ouverture pour TikTok, Instagram, Facebook et YouTube Shorts,
adapter l'accroche à ce qui fait scroller-stopper sur chaque plateforme
spécifiquement, tout en gardant le même fond éditorial (« une idée, quatre
emballages »).

## Pourquoi attendre la fin du labo

1. **Méthodologie du labo 14 jours** : la règle d'or du labo en cours est
   « 1 seule hypothèse principale testée par vidéo, tout le reste constant »
   (`mesure-14-jours.md` §3). Adopter un hook différencié par plateforme
   maintenant casserait cette variable contrôlée sur tous les tests restants
   — impossible de savoir si un résultat vient du hook testé ou de la
   différenciation plateforme.
2. **Coût de production** : produire un hook distinct par plateforme
   multiplie le travail de script/voix off/montage par 4 pour chaque vidéo,
   ce qui n'est pas soutenable à la cadence actuelle du labo (4 vidéos/semaine).

## Contenu résumé de la proposition

- **Signaux de visibilité** par plateforme (ce qui fait qu'un algorithme
  pousse une vidéo) — différents entre TikTok (complétion + partages),
  Instagram (saves + partages en DM), Facebook (temps de visionnage +
  commentaires), YouTube Shorts (retour dans le flux Shorts + recherche).
- **Structure temporelle suggérée** : découpage 0-2s / 2-7s / 7-25s / 25-34s
  / 34-38s avec un rôle différent à chaque tranche selon la plateforme
  (accroche pure, promesse, contenu, relance, CTA).
- **Playbooks par plateforme** : recommandations spécifiques pour
  TikTok, Instagram, Facebook, YouTube Shorts (formulation de hook, rythme,
  longueur de CTA).
- **Exemple « une idée, quatre emballages »** : démonstration d'un même
  sujet reformulé en 4 accroches différentes selon la plateforme cible.
- **Plan sur 4 semaines** pour tester progressivement la différenciation
  sans perturber la mesure en cours.
- **Tableau de données à relever** pour évaluer si la différenciation
  apporte un gain mesurable (par rapport au hook unique actuel).
- **Sources citées** dans le document original, avec une réserve explicite
  de l'utilisateur/de la proposition sur le fait que certaines URLs sources
  n'étaient pas vérifiées au moment du partage.

## Ce qui peut être adopté dès maintenant (sans casser le labo)

Éléments jugés à faible risque car ils ne touchent pas la variable
« hook »/ouverture testée dans le labo :

- Instagram : style de CTA plus direct (« enregistre/envoie à quelqu'un »)
- Facebook : légendes plus conversationnelles, terminant par une vraie
  question (déjà appliqué depuis sur les posts FB de ce projet)
- YouTube : titres orientés termes de recherche réels
- Doubler la mise sur les thèmes confirmés gagnants (microbiote, BDNF) en
  série, plutôt que de disperser sur des sujets non testés

Ces éléments n'ont pas encore été formalisés dans `.claude/rules/repurposing.md`
— à faire si jugé pertinent après validation informelle.

## Checklist de décision (au bilan du labo)

- [x] ~~Les 8 tests du labo sont mesurés et tranchés~~ → **fait le 2026-07-29**,
      bilan complet en `mesure-14-jours.md` §8. ⚠️ Deux résultats fragilisent
      cette proposition : le hook pilote la rétention mais **pas** la
      distribution (test #3), et les CTA d'engagement ne produisent **aucun**
      engagement (0/2, tests #4 et #8).
- [ ] Comparer le gain potentiel de la différenciation par plateforme au
      coût de production (×4 sur le hook)
- [ ] Décider : adopter intégralement / adopter partiellement (items « dès
      maintenant » seulement) / ne pas adopter
- [ ] Si adopté : définir un nouveau protocole de test dédié avant
      généralisation (ne pas basculer tous les scripts d'un coup)

---

## Outil en attente : Sandcastles MCP (analytics natives dans Claude)

**D'où ça vient** : repéré le 2026-07-26 dans une vidéo de démo (JB Roy,
TikTok/Instagram), recherché ensuite pour vérification.

**Ce que c'est** : MCP (`sandcastles-ai/sandcastles`, GitHub, ~4 200 ⭐,
licence MIT) qui donne à Claude un accès direct aux analytics natives
Instagram, TikTok et YouTube Shorts — analyse de vidéo, formats les plus
performants, suggestions de prochaine vidéo, récap de chaîne. Détail :
[Sandcastles MCP for Claude (Hypd)](https://www.stayhypd.com/blog/sandcastles-mcp-claude).

**Pourquoi c'est potentiellement pertinent ici** : `mesure-14-jours.md` §5
note explicitement que Metricool ne donne ni la rétention TikTok, ni
l'attribution d'abonnés par vidéo sur IG/TikTok, ni les visites de profil —
ces 3 champs sont relevés à la main via captures d'écran à chaque mesure.
Si Sandcastles lit vraiment ces données nativement, ça supprimerait cette
étape manuelle pour tous les relevés futurs.

**Pourquoi attendre la fin du labo** : même raisonnement que la
proposition ci-dessus — introduire un nouvel outil de mesure en cours de
labo risque de rendre les relevés incomparables entre le début et la fin
du protocole (méthode de collecte différente = donnée différente).
Vérification de sécurité aussi à faire avant de connecter un compte réel :
permissions OAuth demandées, ce que l'outil peut faire au-delà de la
lecture (poster, modifier), pas trouvées dans la recherche du 2026-07-26.

**Décision écartée dans le même lot** : Blotato (outil de publication
automatique multi-plateformes, ~29$/mois, par Sabrina Ramonov) — écarté
plus fermement, pas juste différé, car il retire le contrôle manuel par
plateforme (FB sans lien, IG 5 hashtags, TikTok sans emoji) qui est au
cœur du process actuel. À reconsidérer seulement si le temps de
publication manuelle devient un vrai goulot d'étranglement.

### ❌ Sandcastles — DÉCISION : ÉCARTÉ (2026-07-29)

Recherche approfondie menée le 2026-07-29. Conclusion : **ne pas adopter.**

**Ce que c'est réellement** : [sandcastles.ai](https://www.sandcastles.ai/)
est un **SaaS payant de recherche de contenu viral et d'écriture de
scripts** (analyser les vidéos des autres, extraire hooks/formats/
transcriptions, générer des scripts « avec des frameworks éprouvés »).
Ce n'est pas un outil d'analytics de ses propres comptes : la connexion
de comptes est optionnelle et secondaire (3 chaînes sur le plan Pro,
rafraîchies toutes les 12 h).

**Prix** : Pro 39 $/mois (annuel, MCP inclus) · Visionary 79 $ · Titan
399 $. Essai gratuit 7 jours. ≈ 430 €/an.

**⚠️ La source d'origine était trompeuse.** La vidéo de découverte
(JB Roy, TikTok) montrait `github.com/sandcastles-ai/sandcastles` avec
« ★ 4 200 · 6 skills · MIT », donnant l'impression d'un projet
open-source gratuit. Vérification faite, **ce dépôt n'existe pas**. Trois
projets homonymes existent :

| Nom | Nature | Rapport réseaux sociaux |
|---|---|---|
| sandcastles.ai | SaaS payant 39 $/mois (le vrai produit) | ✅ |
| [mattpocock/sandcastle](https://github.com/mattpocock/sandcastle) | TypeScript, agents de code en sandbox, 7,1 k ⭐ MIT | ❌ aucun |
| [gizmax/Sandcastle](https://github.com/gizmax/Sandcastle) | Python, orchestrateur d'agents IA | ❌ aucun |

**Pourquoi c'est écarté** (3 raisons, par ordre d'importance) :

1. **Ça ne résout pas le point de friction.** Le besoin était la rétention
   TikTok + l'attribution d'abonnés, absentes de Metricool (test API du
   2026-07-28, champs `null`). Aucune source ne confirme que Sandcastles
   les fournit — et la limite est côté API TikTok, qu'aucun tiers ne peut
   contourner.
2. **La proposition de valeur va contre le positionnement.** « Remixer les
   outliers viraux des top channels » est l'inverse de la ligne éditoriale
   (chercheur nommé, institution citée, mythes déconstruits, ton
   professeur).
3. **Le labo a déjà produit mieux.** 14 jours de tests ont donné une
   connaissance de l'audience réelle (tension narrative à 58,8 % de
   rétention, inutilité des CTA d'engagement, quota fixe TikTok) qu'aucun
   classement générique de hooks n'aurait fournie.

**Si réexamen un jour** : 7 jours d'essai gratuit, à n'engager que si le
besoin devient la *recherche concurrentielle* (et non l'analytics propre).

### ❌ Blotato — DÉCISION : ÉCARTÉ (2026-07-26, confirmé)

Voir plus haut. Auto-publication multi-plateformes ~29 $/mois : retire le
contrôle manuel par plateforme (FB sans lien, IG 5 hashtags, TikTok sans
emoji) qui est au cœur du process. À reconsidérer seulement si le temps
de publication devient un vrai goulot.

---

## Revue d'outils « aide à l'écriture de script » (2026-07-29)

Recherche demandée : un outil peut-il aider à écrire les scripts Reels/Shorts ?
**Réponse : non, rien à acheter ni à installer.** Détail ci-dessous.

### ❌ Analyseurs de script avant publication

[Contextify](https://contextify.ca/short-form-video-analyzer) (gratuit,
2 analyses/jour) · [Tikalyzer](https://tikalyzer.com/script-analyzer) ·
[HookScan](https://hookscan.com/) · [ViralMint](https://viralmint.net/tools/hook-analysis/).
Contextify note sur 5 axes : hook 30 %, clarté 25 %, rythme 20 %,
sauvegarde 15 %, SEO 10 %.

**Écartés, 3 raisons :**
1. **Anglais uniquement** — aucun ne confirme le support du français.
2. Contextify analyse un **fichier vidéo**, pas un texte → n'aide pas en
   amont de l'enregistrement.
3. Entraînés sur des patterns viraux génériques : la formule maison
   (tension narrative + chercheur nommé) y serait probablement mal notée
   alors qu'elle produit le record du catalogue (58,8 % sur
   `procrastination-2`).

### 🟡 Prompteurs avec estimation de durée

[teleprompteur.fr](https://www.teleprompteur.fr/) (français, estime la
durée selon la vitesse) · [ToolAct](https://toolact.com/fr/teleprompter) ·
Scripted.video. Catégorie réellement utile, mais rendue superflue par la
règle de calibrage ci-dessous.

### ✅ CE QUI EST RETENU — règle de calibrage maison

Le vrai besoin était : **connaître la durée avant d'enregistrer**, pour
tenir le seuil des 30 s (validé par le test labo #2 : passer sous 30 s
double la rétention). Jusqu'ici la durée n'était connue qu'après upload
du WAV — trop tard (`pensee-critique-2` : 43 s découverts après coup).

Débit mesuré sur les enregistrements réels :

| Vidéo | Mots | Durée | Débit |
|---|---:|---:|---:|
| procrastination-2 | ~88 | 28,92 s | 183 mots/min |
| effet-projecteur-2 | ~105 | 29,35 s | 215 mots/min |
| pensee-critique-2 | ~150 | 43,44 s | 207 mots/min |

**→ Règle : ~195 mots/minute, soit ≈ 90 mots pour 28 secondes.**
**Au-delà de 100 mots, le script dépassera 30 s.**

**Application** : à partir du 2026-07-29, chaque script livré est
accompagné de son compte de mots et de sa durée estimée. Aucun outil
externe nécessaire.

### 🔵 Piste ouverte (hors script) — MCP YouTube Analytics

Trouvé pendant la même recherche, sans rapport avec l'écriture :
[pauling-ai/youtube-mcp-server](https://github.com/pauling-ai/youtube-mcp-server)
(MIT) et [dogfrogfog/youtube-analytics-mcp](https://github.com/dogfrogfog/youtube-analytics-mcp)
exposent l'**API YouTube Analytics** — dont les **courbes de rétention
d'audience**, sources de trafic, abonnés gagnés : exactement ce qui est
capturé à la main aujourd'hui, sur le seul canal qui convertit.

Avantage clé de sécurité : identifiants **Google Cloud personnels**, tout
tourne en local, aucune donnée chez un tiers (l'inverse de Sandcastles).

⚠️ **Deux réserves avant d'y toucher** :
1. 13 ⭐ / 17 forks — projet quasi non audité, alors qu'il recevrait un
   accès OAuth propriétaire à la chaîne.
2. Pas en lecture seule : inclut upload, suppression, miniatures,
   commentaires.
   **Parade** : le projet Google Cloud étant créé par l'utilisateur, il
   suffit de n'activer que **YouTube Analytics API** (scope
   `yt-analytics.readonly`) sans les scopes d'écriture de la Data API —
   le MCP devient alors physiquement incapable de publier ou supprimer.

**Statut : à tester quand une heure est disponible.** Chantier technique
(projet Google Cloud + OAuth + install Python), pas prioritaire.

### ❌ TikTok — aucune solution, définitif

Les MCP TikTok trouvés (viral.app, SociaVault) lisent des **profils
publics** (stats, transcriptions, vidéos récentes), pas la rétention
privée d'un compte. Cohérent avec le test API Metricool du 2026-07-28 :
**TikTok n'expose pas la rétention via API.** Aucun outil ne peut la
fabriquer. La capture manuelle TikTok Studio reste la seule voie.

### Test Metricool API fait le 2026-07-28 (avant même Sandcastles)

En préparant le relevé de `pensee-critique-2`, test direct des champs
Metricool listés comme disponibles pour la rétention TikTok/Instagram, sur
`effet-projecteur-2` et `rejet-social-2` (déjà publiées, chiffres connus
par capture manuelle) :

- **Fonctionne** (chiffres cohérents avec les captures manuelles) :
  Instagram vues + durée moyenne de vue + `reelsViewRate` (% ayant regardé
  plus de 3s — nouvelle métrique, jamais suivie avant) ; Facebook vues +
  durée moyenne de vue ; TikTok vues/likes/commentaires/partages bruts.
- **Ne fonctionne pas** (champ listé dans l'API mais retourne `null`) :
  TikTok `fullVideoWatchedRate`, temps de visionnage, sources de trafic
  (Pour toi/Following/recherche) ; Instagram `retention` (%moyen regardé,
  distinct de `reelsViewRate`). YouTube : tous les champs vidéo marqués
  « Deprecated » côté API Metricool, Studio reste seul fiable.

**Conclusion** : Metricool réduit un peu la charge de capture manuelle
(IG/FB) mais ne remplace pas les captures TikTok (rétention + sources) ni
YouTube Studio. Si Sandcastles promet la rétention TikTok native, il
faudra vérifier que lui y arrive là où l'API Metricool standard échoue —
sinon le gain est plus limité que prévu.
