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

- [ ] Les 8 tests du labo sont mesurés et tranchés (`mesure-14-jours.md` §4/§7)
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

### Checklist Sandcastles (au bilan du labo)

- [ ] Vérifier les permissions OAuth exactes demandées par l'outil avant
      toute connexion à un compte réel
- [ ] Tester en lecture seule sur un compte si possible avant d'envisager
      un remplacement du process manuel de `mesure-14-jours.md` §5
- [ ] Comparer les chiffres qu'il remonte à un relevé manuel existant pour
      vérifier la fiabilité avant de lui faire confiance seul
