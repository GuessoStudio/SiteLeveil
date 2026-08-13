# Release — travaux planifiés

Fichier de file d'attente : ce qui est décidé mais pas encore fait.
Une fois un lot livré, le déplacer vers `docs/audit-seo.md` avec le hash de commit.

---

## ✅ Lot 0 — FAIT le 12 août 2026 (commit `c9428b6`)

Quatre articles livrent désormais leur lead magnet **contre email**, via `EmailCaptureModal` : `bdnf-augmenter-naturellement-neurosciences`, `biais-cognitifs-liste-psychologie`, `formation-habitudes-cerveau-neurosciences`, `influence-sociale-conformisme`.

BDNF a demandé un traitement à part : son CTA ne proposait aucun guide, il renvoyait vers `/ressources/`. Il livre maintenant le guide BDNF directement, ce qui supprime une étape sur l'article le plus lu du site.

Vérifié après build : zéro erreur d'hydratation sur les quatre pages, et le formulaire Brevo absent du HTML pré-rendu tant que la modale est fermée.

### ✅ Liste cible vérifiée le 12 août 2026

`EmailCaptureModal` poste vers le formulaire Brevo `sibforms.com` et non vers la fonction Netlify — il fallait donc s'assurer qu'il écrit dans la bonne liste. **C'est le cas** : le formulaire « bnf » est rattaché à **Newsletter L'Éveil Mental - #6**, celle-là même qui déclenche l'automatisation de bienvenue (confirmé par son compteur de 4 contacts, identique au total du CRM).

Les deux parcours convergent donc :

- **page d'accueil** → fonction Netlify → API Brevo → liste #6 → email de bienvenue
- **article** → modale → formulaire Brevo → liste #6 → email de bienvenue

Refactoriser la modale vers `/.netlify/functions/subscribe` n'apporterait plus qu'un gain cosmétique (supprimer l'ouverture d'un onglet `_blank`). Non prioritaire.

### ⚠️ Un point resté ouvert

**`surmonter-rejet-social` n'a aucun lead magnet.** L'article était dans la cible (6 clics, 149 impressions) mais aucun PDF ne lui correspond dans `Downloads/` ni `resources/`. Il faudrait en créer un avant de pouvoir fermer cet article.

### Reste à décider plus tard

Les 15 autres articles conservent leur téléchargement libre. Mesurer d'abord `generate_lead` par article sur deux à trois semaines : si le gate ne convertit pas sur BDNF, la page la plus lue du site, c'est le lead magnet lui-même qu'il faudra revoir, pas le mécanisme.

---

## 📌 Contexte d'origine du lot 0

**Décidé le 12 août 2026. Approche mixte retenue. Priorité la plus haute du fichier : c'est la moitié de l'objectif du site.**

### Le constat

Le site poursuit deux buts, le trafic **et** la newsletter. Le second n'a presque aucun moyen d'être atteint :

- **19 articles sur 37** proposent leur lead magnet en **téléchargement direct**, par un simple `<a href="/Downloads/....pdf">`. Le lecteur prend le guide et repart, sans laisser d'email.
- **Aucun des 37 articles** n'intègre de formulaire d'inscription (`NewsletterSection` n'est monté que sur la page d'accueil).
- Le composant qui capture les emails, `EmailCaptureModal`, existe et **fonctionne** — mais il n'est branché que sur `/ressources/` et `/test-personnalite-big-five/`, deux pages qui totalisent **98 impressions sur 90 jours**.

Autrement dit : là où le trafic arrive, on offre le cadeau sans rien demander ; là où on demande l'email, il n'y a personne.

Chiffre qui résume tout : **dernier inscrit le 7 mai 2026**. Trois mois sans la moindre inscription. Brevo a fini par désactiver automatiquement la clé API pour inutilisation le 7 août, ce qui a cassé en prime le formulaire de la page d'accueil. Le bug n'était que le symptôme.

### Ce qui a été décidé

**Approche mixte.** Demander l'email uniquement sur les articles à fort trafic, laisser l'accès libre ailleurs. Cela permet de mesurer l'effet du gate avant de généraliser, plutôt que de l'imposer partout d'un coup.

Articles concernés, choisis sur les impressions réelles (90 j) :

| Article | Clics | Impressions |
|---|---|---|
| `bdnf-augmenter-naturellement-neurosciences` | 39 | 551 |
| `biais-cognitifs-liste-psychologie` | 7 | 489 |
| `surmonter-rejet-social` | 6 | 149 |
| `formation-habitudes-cerveau-neurosciences` | 5 | 182 |
| `influence-sociale-conformisme` | 5 | 94 |

### Mise en œuvre

Remplacer le `<a href>` direct par l'ouverture d'`EmailCaptureModal`, en lui passant le PDF via sa prop `resourceFile` — le composant gère déjà l'enchaînement téléchargement puis redirection vers `/merci-inscription/`.

Le tracking `generate_lead` étant en place depuis le 11 août (commit `1a243c0`), l'effet sera mesurable article par article dans GA4.

⚠️ **Prérequis avant de livrer ce lot** : la capture d'email doit fonctionner. Voir le lot 0 bis.

### Point de mesure

Deux à trois semaines après la livraison, comparer le nombre de `generate_lead` par article. Si le gate ne convertit pas sur BDNF — la page la plus lue du site — c'est le lead magnet lui-même qu'il faudra revoir, pas le mécanisme.

---

## ✉️ Lot 0 ter — Reprendre le design de l'email de bienvenue

**Décidé le 12 août 2026.**

L'automatisation active (#2) envoie un email au HTML volontairement sobre : texte, un bouton doré, un pied de page. Fonctionnel, mais sans identité.

L'**Automatisation #1**, désactivée le 12 août parce qu'inopérante, contenait un email **nettement mieux conçu** : logo L'ÉVEIL en en-tête, visuel de cerveau, bouton, et une rangée d'icônes sociales (Facebook, X, Instagram, TikTok). Elle n'a jamais rien envoyé en 123 jours à cause de deux défauts :

- **aucun expéditeur défini** (le champ était vide, bordé de rouge)
- `{{contact.FIRSTNAME}}` au lieu de `{{contact.PRENOM}}`, l'attribut réellement rempli par `netlify/functions/subscribe.ts`

Elle pointait en outre vers le guide BDNF, pas vers les 21 déclencheurs.

### À faire

Récupérer le design de #1 dans le message de #2, en corrigeant :

1. `{{contact.FIRSTNAME}}` → `{{contact.PRENOM}}`
2. lien BDNF → `https://leveilmental.fr/resources/21-declencheurs-mentaux-pour-reussir.pdf`
3. expéditeur : `Guesso <contact@leveilmental.fr>`

Puis supprimer définitivement l'Automatisation #1 pour ne pas la réactiver par mégarde.

### Ce qu'il ne faut pas en attendre

Un email plus riche **n'améliore pas mécaniquement la délivrabilité** — un message très chargé en images avec peu de texte peut même desservir. Le gain réel est ailleurs : une identité visuelle reconnaissable augmente l'engagement (ouvertures, clics, réponses), et c'est **l'engagement** qui construit la réputation d'expéditeur. C'est un pari sur la marque, pas un correctif technique.

---

## 🔴 Lot 0 bis — Débloquer Brevo (prérequis, action manuelle)

**Constaté le 12 août 2026.**

Deux verrous se sont succédé sur la fonction `/.netlify/functions/subscribe` :

1. **Clé API désactivée** — Brevo l'a coupée automatiquement le 7 août après trois mois sans utilisation. ✅ Réactivée par Guesso le 12 août.
2. **Restriction par IP autorisée** — Brevo répond alors :
   `We have detected you are using an unrecognised IP address 3.141.43.194`

⚠️ **Ne pas ajouter cette IP à la liste blanche.** Les fonctions Netlify tournent sur AWS Lambda, dont les IP changent à chaque invocation. Autoriser une IP fixe fonctionnerait quelques minutes puis casserait au prochain appel.

**Correctif** : désactiver entièrement la restriction d'IP sur https://app.brevo.com/security/authorised_ips

**Vérification** :

```bash
curl -s -X POST "https://leveilmental.fr/.netlify/functions/subscribe" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","prenom":"Test"}'
# attendu : {"success":true}
```

À surveiller : la clé se désactivera de nouveau après trois mois d'inactivité. Le lot 0 est justement ce qui doit empêcher ce scénario de se reproduire.

---

## 🔧 Lot 1 — Correctif de masse : `wordCount` et `readingTime`

**Décidé le 11 août 2026. Priorité haute : meilleur rapport effort/gain restant.**

### Le problème

Un audit du corpus (37 articles) a montré que `wordCount`, envoyé à Google dans le schema `BlogPosting`, est faux sur **15 articles**, et `readingTime` sur **14**. Ce ne sont pas des arrondis : certains articles annoncent le double de leur longueur réelle.

Déclarer une longueur fausse dans les données structurées est un signal de qualité négatif. Deux articles ont déjà été corrigés à la main (`neuroplasticite-cerveau` : 3500 → 2762 ; `surmonter-rejet-social` : 4200 → 2616), ce qui a révélé que le problème était systémique et non ponctuel.

### Écarts de `wordCount` (≥ 15 %)

| Article | Déclaré | Réel | Écart |
|---|---|---|---|
| attention-fragmentee-concentration-numerique | 3 100 | 1 593 | **+95 %** |
| procrastination-cerveau-agir-neurosciences | 3 200 | 1 875 | +71 % |
| rumination-mentale-pensees-obsessionnelles | 2 800 | 1 676 | +67 % |
| lumiere-naturelle-cerveau-sommeil-sante-mentale | 3 600 | 2 332 | +54 % |
| syndrome-imposteur-solutions | 2 400 | 1 599 | +50 % |
| methode-acr-repondre-aux-bonnes-nouvelles | 2 100 | 1 485 | +41 % |
| bdnf-augmenter-naturellement-neurosciences | 3 800 | 2 886 | +32 % |
| sommeil-reparateur-7-strategies-validees | 3 500 | **4 849** | −28 % |
| systeme-limbique-cerveau-emotionnel | 3 900 | 3 198 | +22 % |
| regulation-emotionnelle-techniques-psychologie | 2 800 | **3 584** | −22 % |
| plasticite-synaptique-apprentissage-cerveau | 4 100 | 3 385 | +21 % |
| cortisol-stress-chronique-cerveau-memoire | 4 200 | 3 503 | +20 % |
| neuro-dopamine-routine | 4 500 | 3 797 | +19 % |
| burn-out-signaux-neurobiologiques-recuperation | 3 000 | 2 565 | +17 % |
| routine-matinale-scientifique-cerveau | 2 500 | **2 996** | −17 % |

Noter les trois écarts **négatifs** : ces articles sont plus longs qu'annoncé. Le correctif doit donc recalculer, pas simplement réduire.

### Écarts de `readingTime` (≥ 3 min, base 220 mots/min)

| Article | Annoncé | Réel |
|---|---|---|
| sommeil-reparateur-7-strategies-validees | 14 min | **~22 min** |
| guide-communication-interpersonnelle | 14 min | ~8 min |
| attention-fragmentee-concentration-numerique | 12 min | ~7 min |
| ecoute-active-technique-carl-rogers | 13 min | ~17 min |
| neurotransmetteurs-humeur-cerveau | 16 min | ~20 min |
| procrastination-cerveau-agir-neurosciences | 13 min | ~9 min |
| regulation-emotionnelle-techniques-psychologie | 12 min | ~16 min |
| resilience-psychologique-developper | 14 min | ~10 min |
| influence-sociale-conformisme | 13 min | ~10 min |
| lumiere-naturelle-cerveau-sommeil-sante-mentale | 14 min | ~11 min |
| methode-acr-repondre-aux-bonnes-nouvelles | 10 min | ~7 min |
| pensee-critique-developper | 13 min | ~10 min |
| rumination-mentale-pensees-obsessionnelles | 11 min | ~8 min |
| syndrome-imposteur-solutions | 10 min | ~7 min |

### Marche à suivre

1. Compter les mots réels depuis `dist/blog/<slug>/index.html`, entre `<h1` et « Sources scientifiques », scripts et styles retirés.
2. Réécrire `wordCount` (arrondi à la centaine) et `readingTime` dans chaque TSX.
3. ⚠️ Lire **et** écrire avec `newline=""` en Python : sinon les CRLF deviennent des LF et le diff devient illisible.
4. `npm run build`, vérifier que les 62 titres sont inchangés, puis commit.

Envisager d'en faire un garde-fou `npm run validate:wordcount` en `prebuild`, pour que la dérive ne revienne pas.

---

## 📝 Lot 2 — Deux articles à compléter, pas plus

**Décidé le 11 août 2026.**

### `neuroplasticite-cerveau` — 1 080 impressions / 90 j, position 42,1

Il ne manque que **2 StatBlocks** (1 sur 3 présents). Tout le reste du Template V2 est en place depuis la Phase 1. C'est l'article le plus vu du site après BDNF : le moindre gain de CTR y pèse lourd.

### `neuro-dopamine-routine` — 88 impressions, **position 15,7**

Template V2 absent en totalité : pas de Quick Answer, 0 StatBlock, pas de section « À retenir », aucun DOI dans les sources. Position 15,7 signifie bas de page 2, donc à portée de la page 1 : c'est là que la mise en conformité peut faire basculer.

---

## 🚫 Lot 3 — Ce qu'on ne fait PAS (décision explicite)

**Ne pas retravailler ces 7 articles**, malgré leur non-conformité au Template V2 :

| Article | Impressions 90 j |
|---|---|
| guide-communication-interpersonnelle | 80 |
| procrastination-cerveau-agir-neurosciences | 38 |
| rumination-mentale-pensees-obsessionnelles | 30 |
| attention-fragmentee-concentration-numerique | 12 |
| syndrome-imposteur-solutions | 8 |
| sommeil-reparateur-7-strategies-validees | 4 |
| confiance-en-soi-durable | 3 |
| methode-acr-repondre-aux-bonnes-nouvelles | 3 |
| lumiere-naturelle-cerveau-sommeil-sante-mentale | 2 |

**Pourquoi c'est écrit ici** : ces articles apparaîtront en rouge à chaque nouvel audit de conformité, et la tentation sera de les « corriger ». Ce serait l'erreur que la Phase 3 bis de `docs/audit-seo.md` met précisément en garde de commettre : soigner des pages bien classées sur des termes que personne ne cherche. Le problème est en amont, dans le choix du sujet, pas dans la mise en forme.

Ils redeviennent prioritaires **uniquement** si leurs impressions décollent.

---

## ⚠️ Lot 4 — Correctifs techniques ciblés

**Découverts le 11 août 2026 en balayant la roadmap. Petits, rapides, mais deux d'entre eux sont des fuites SEO réelles.**

### 4.1 — Routes applicatives crawlables et indexables 🔴 CONFIRMÉ EN PRODUCTION

> **Mise à jour du 11 août, export GSC Performances** : ce n'est plus une hypothèse. `/neuro-journal/onboarding` enregistre **3 impressions à la position 6,67** sur les 3 derniers mois. Google a déjà indexé une route applicative et la fait remonter en page 1. À traiter en premier.

`/neuro-journal/onboarding` et `/neuro-journal/dashboard` sont liés **depuis le HTML pré-rendu** de `/ressources/` (champ `webAppUrl`, `src/pages/Resources.tsx:45`). Or ces routes :

- répondent **HTTP 200** en production,
- servent `<meta name="robots" content="index,follow">`,
- ne sont **pas** bloquées dans `robots.txt`,
- sont exclues du pré-rendu (`ssgOptions.includedRoutes`), donc renvoient la coquille SPA avec le title générique.

Google peut donc suivre ces liens et indexer des pages d'application vides. Vérifié aujourd'hui : `/neuro-journal/dashboard` est encore **« URL is unknown to Google »**. La fenêtre est ouverte, autant fermer avant qu'il ne la découvre.

Correctif : passer ces routes en `noindex` (le composant SEO accepte la prop `noindex` depuis la Phase 0), ou les retirer de `robots.txt`, ou supprimer le lien public. Le plus propre est le `noindex`, la page restant accessible aux utilisateurs.

### 4.2 — Le lien vers `/calculateur-sommeil/` est absent du HTML de `/ressources/` 🟠

Confirmé en production : **0 occurrence** de `calculateur-sommeil` dans `/ressources/`. Le lien n'existe que côté JS. La page est bien indexée par ailleurs, mais elle ne reçoit aucun jus de lien depuis la page qui devrait la porter.

Second défaut sur la même ligne : `src/pages/Resources.tsx:366` déclare `webAppUrl: "/calculateur-sommeil"` **sans slash final** → 301 même une fois rendu côté client. `npm run validate:links` ne l'attrape pas, car il ne contrôle que les props `to=` et pas les champs de données.

Correctif : rendre le lien dans le HTML statique, ajouter le slash final, et **étendre `validate-links.mjs` aux champs `webAppUrl`/`downloadUrl`** pour que le garde-fou couvre ce cas.

### 4.3 — `llms.txt` : 1 article manquant 🟢

36 des 37 articles y figurent. Il manque `dissonance-cognitive-definition-exemples`, publié pendant cette session. À régénérer — voir aussi le lot 5, qui propose de l'automatiser pour de bon.

### 4.4 — `jobTitle` incohérent dans le schema Person 🟢

19 articles déclarent `"Fondateur — L'Éveil Mental"` (tiret long) contre 17 en `"Fondateur, L'Éveil Mental"` (virgule), et 1 sans `jobTitle`. La règle projet proscrit le tiret long : harmoniser sur la **virgule** partout.

---

## 💰 Lot 4 bis — Réécrire les titres des pages déjà en page 1

**Identifié le 11 août 2026 dans l'export GSC Performances. Meilleur rapport effort/gain découvert à ce jour, devant le Lot 1.**

Cinq pages sont **déjà en page 1** de Google et ne récoltent **aucun clic** :

| Page | Position | Impressions | Clics |
|---|---|---|---|
| `mindset-de-croissance-psychologie-dweck` | **8,2** | 65 | 0 |
| `communication-non-violente-cnv` | **7,9** | 55 | 0 |
| `rumination-mentale-pensees-obsessionnelles` | **6,6** | 36 | 0 |
| `plasticite-synaptique-apprentissage-cerveau` | **9,2** | 24 | 0 |
| `resoudre-un-conflit-methodes-psychologie` | **9,1** | 22 | 0 |

Environ **240 impressions en page 1 sans un seul clic**. Ce n'est pas un problème de classement, donc ni le contenu ni le maillage ne sont en cause : c'est l'extrait affiché dans le SERP qui n'accroche pas. Le travail porte uniquement sur le `title` et la `description` du `meta`, sans toucher au corps de l'article.

À comparer avec ce qui marche : `bdnf` obtient **7,08 % de CTR** à la position 13,1, et `influence-sociale-conformisme` **5,32 %** à la position 9,6. Un CTR de 5 % sur ces 240 impressions représenterait une douzaine de clics, soit +13 % de trafic pour quelques heures de travail.

⚠️ Ne pas toucher au corps de ces articles, et surtout pas à `rumination-mentale` ni aux autres du Lot 3 : le Lot 3 dit de ne pas les **retravailler éditorialement**, ce qui reste vrai. Réécrire un title n'est pas la même chose et se justifie ici par la position déjà acquise.

---

## 🤖 Lot 5 — GEO et autorité (Phase 4 de l'audit)

**Non urgent, mais c'est le socle de la citabilité par les IA.**

- **80 réponses FAQ sur 309 (26 %) dépassent 60 mots**, la cible étant 40-60. La plus longue fait **122 mots** (`confiance-en-soi-durable`). Les plus concernés : `empathie-neurones-miroirs` (10), `confiance-en-soi-durable` (8), `sommeil-reparateur` (8), `systeme-limbique` (8). Une réponse trop longue est moins extractible en citation.
- **Chaîne YouTube absente du `sameAs`** des schemas Person et Organization (`src/components/SEO.tsx`) : aucune mention de YouTube dans tout le code. Signal d'autorité gratuit.
- **Automatiser `llms.txt`** depuis `src/data/blog-articles.ts`, en `prebuild`. Supprime définitivement la dérive du lot 4.3.
- **Envisager d'embarquer les Shorts** sur les articles correspondants (le moteur vidéo vit dans le dépôt `PetitEveille`).

---

## 🔒 Lot 6 — Non bloquant (Phase 5)

- CSP : migrer `unsafe-inline` / `unsafe-eval` vers des nonces (`netlify.toml`). Aucun impact SEO, uniquement du durcissement.

---

## 🗑️ Ménage

`ACTION-PLAN.md` et `FULL-AUDIT-REPORT.md` datent du **24 avril 2026** et sont périmés : leurs points « critiques » (URL auteur en `/about`, cover en `.jpg` sur neuroplasticité) sont résolus depuis. Ils entrent en conflit avec `docs/audit-seo.md`, seule source à jour. À archiver ou supprimer pour éviter qu'un futur audit reparte de données fausses.

---

## 🧰 Méthode d'audit (réutilisable)

Le script qui a produit ces tableaux croise ce que chaque TSX **déclare** avec ce que le HTML pré-rendu **contient** : `C:\Users\sofie\AppData\Local\Temp\claude\...\scratchpad\audit_corpus.py` (session `a320b979`). À rapatrier dans `scripts/` s'il doit resservir.

⚠️ **Piège rencontré, à ne pas répéter.** La première version détectait les StatBlocks par leur couleur (`bg-teal-50`, `bg-indigo-50`) et annonçait 13 articles non conformes. Faux : les StatBlocks utilisent aussi rose, sky, violet. La signature fiable est **`text-3xl font-black`**, conformément à `.claude/rules/template-v2.md`. Même piège pour le Quick Answer, à chercher sur « Réponse rapide » **ou** « En bref ».

Vérifier un détecteur sur un article connu conforme avant de tirer la moindre conclusion d'un audit automatique.

---

## 📈 Lecture de l'export GSC Performances du 11 août 2026

À relire avant toute décision fondée sur la « position moyenne » : elle est trompeuse sur ce site.

### La position moyenne s'est effondrée de 7 à 40 — et c'est un effet de structure

| | Impressions | Position moyenne | CTR |
|---|---|---|---|
| Avec `neuroplasticite-cerveau` | 3 982 | **22,2** | 2,39 % |
| **Sans** `neuroplasticite-cerveau` | 2 890 | **14,8** | **3,18 %** |

Cette seule page pèse **27 % des impressions du site à la position 41,9**. Elle tire la moyenne de 14,8 à 22,2. Le reste du site se porte bien. **Ne jamais conclure à une régression à partir de la position moyenne globale sans avoir retiré cette page.**

### La requête qui concentre le problème

`neuroplasticite apprentissage` : **1 008 impressions, 0 clic, position 43,6**. Soit **25 % de toutes les impressions du site**, pour zéro retour.

Réalisme nécessaire : la position 43 est en page 5. Aucun Quick Answer Block ne fait passer de la page 5 à la page 1. La refonte du 5 août se mesure le 19 ; si l'aiguille ne bouge pas, il faudra admettre que ce mot-clé demande autre chose (autorité, liens entrants, ou un contenu nettement supérieur aux concurrents installés) et arbitrer entre investir lourdement ou viser des requêtes plus accessibles.

### Appareils

| | Clics | Impressions | CTR | Position |
|---|---|---|---|---|
| Ordinateur | 45 | 2 726 | 1,65 % | 27,7 |
| Mobile | 43 | 1 092 | **3,94 %** | **11,0** |
| Tablette | 7 | 44 | 15,91 % | 8,57 |

Le mobile convertit **2,4 fois mieux** que le desktop. L'écart de position vient encore de la requête neuroplasticité, majoritairement desktop.

### Piste internationale, non exploitée

Les États-Unis pèsent **336 impressions pour 1 clic**, le Canada 148 pour 1. Des requêtes allemandes remontent sur BDNF (`bdnf erhöhen`, position 91), ainsi que `protein bdnf` (38 impressions, position 38,8) et `brain derived neurotrophic factor` (4 impressions, position 52,8). Le sujet BDNF attire hors francophonie sans que rien ne soit prévu pour ces visiteurs. À creuser un jour, pas maintenant.

### Le paradoxe des biais cognitifs, chiffré

Requêtes précises en **position 2** : `biais de confirmation`, `effet dunning kruger`, `distorsion cognitive`, `aversion à la perte`, `biais cognitif def`, `les différents biais cognitifs`. Mais le terme générique `biais cognitifs` est en **position 61** avec 54 impressions, et `biais cognitif` en position 41 avec 52 impressions. La refonte de la Phase 2 vise exactement cet écart : à mesurer vers le 20-25 août.

---

## ⏰ Échéance de mesure — 19 août 2026

Effet de la Phase 1, déployée le 5 août. Ne rien retravailler avant.

| Page | Métrique | Point de départ |
|---|---|---|
| bdnf-augmenter-naturellement-neurosciences | taux de rebond | 69 % (GA4) |
| neuroplasticite-cerveau | position | 40,2 → **42,1 au 11 août** |
| neuroplasticite-cerveau | CTR | 0,4 % |

BDNF n'a eu aucun changement de title ni de structure : l'effet attendu porte sur le comportement de lecture, pas sur la position. Neuroplasticité a changé de title, H1 et meta : l'effet attendu est sur la position et le CTR, avec 4 à 8 semaines de délai habituel depuis la page 4. À deux semaines, on cherche une tendance, pas un verdict.

---

## 📊 État du corpus au 11 août 2026

- 37 articles analysés
- **26 pleinement conformes** au Template V2
- 11 non conformes, dont 9 **sans Quick Answer Block**

L'audit initial (`docs/audit-seo.md`) annonçait 2 survivants pré-Template V2. Il y en a en réalité 9. La dette est plus large qu'estimé, mais concentrée sur des pages à faible trafic — d'où le Lot 3.
