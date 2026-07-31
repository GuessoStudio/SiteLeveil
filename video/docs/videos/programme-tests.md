# Programme de tests — séquence corrigée

> Écrit le 2026-07-31, après une recherche approfondie qui a invalidé le
> protocole de `labo-7-jours-psycho-sociale.md` (suspendu le même jour).
>
> **Ce document décrit un plan, pas des résultats.**

---

## Ce qui a été corrigé

Deux affirmations que j'avais écrites et qui ne tenaient pas :

**« TikTok sert un quota fixe. »** Conclusion causale sans fondement.
Aucune documentation TikTok ne décrit de palier à 200-300 vues. Corrigé
dans `INDEX.md`.

**« Les titres en groupe nominal expliquent le succès de Humain
Penseur. »** Biais du survivant : l'analyse ne portait que sur ses
66 meilleures vidéos. Si tout son catalogue utilise ce format, il ne peut
pas expliquer l'écart entre 12 M et 257 K vues.

## Le fait qui réoriente tout

Sur `attention-fragmentee`, la part de trafic **« Pour toi » est de
99,2 %**.

Une publication exclue des recommandations afficherait une part proche de
zéro. **Les vidéos sont donc bien recommandées** — servies à peu de
monde, mais recommandées.

L'hypothèse d'une restriction d'éligibilité perd donc beaucoup de force.
Le scénario cohérent avec les chiffres devient : lot initial réduit,
complétion de 10,1 % insuffisante pour déclencher l'élargissement.
**Le levier se déplace du sujet vers la durée.**

⚠️ Un seul point de mesure. À confirmer sur 2-3 vidéos.

---

## Étape 0 — Vérification, 10 minutes, à faire avant tout

| À vérifier | Où |
|---|---|
| Restrictions du compte | TikTok Studio → **Account check** |
| Éligibilité « Pour toi » | détail analytique de chaque publication |
| Part de trafic « Pour toi » | sur 2-3 vidéos, pour confirmer les 99,2 % |

Coût nul. Si une restriction existe, tout test de contenu est masqué et
le reste du programme n'a aucun sens. Si rien n'apparaît, on passe au
test 1.

---

## Test 1 — La durée (priorité haute)

**Hypothèse** : à 28-35 s, la majorité des spectateurs n'atteint jamais la
conclusion. Une version de 12-18 s, une seule idée, monterait la
complétion et déclencherait un élargissement de diffusion.

**Design** : 10 paires, soit 20 vidéos. Dans chaque paire, une vidéo
courte (12-18 s) et une longue (28-35 s). **Ordre tiré au sort** dans
chaque paire — sans randomisation, une amélioration progressive de la
production serait confondue avec l'effet de durée.

⚠️ **Écart assumé avec le protocole recommandé.** La méthode idéale
utiliserait le *même* sujet en deux versions. On ne le fait pas : la
coupure des recommandations Facebook du 24/07 est survenue pendant une
série de versions #2, et le risque de démotion pour contenu répétitif ne
vaut pas le gain de contrôle. On apparie donc des sujets **différents**,
appariés sur le pilier et la famille de hook. Contrôle plus faible,
assumé.

**Constant dans les deux versions** : même première image, même famille
de hook, même personnage, même densité visuelle, pas de CTA.

**Un changement à appliquer aux deux** : placer le crédit chercheur
**après** la scène-problème, jamais avant. Aujourd'hui il arrive au plan
5 sur 13. Aucune donnée ne montre qu'il aide la rétention, et il coûte
des secondes au moment où le spectateur décide de rester.

### Seuils de décision, fixés d'avance

Adopter le format court **seulement si les trois conditions sont réunies** :

- complétion médiane **≥ 20 %** (contre 10,1 %)
- vues médianes **+30 %** minimum
- temps moyen regardé qui ne baisse pas de plus de 10 %

La troisième condition est la garde-fou : une complétion qui monte
uniquement parce que la vidéo est plus courte n'est pas un progrès.

---

## Test 2 — Affectif contre cognitif (après le test 1)

**Design** : 12 paires, soit 24 vidéos. Une affective, une cognitive,
ordre tiré au sort, durée retenue au test 1, tout le reste identique.

**Décision** : test des signes. 10 victoires sur 12 → p ≈ 0,039. Exiger
en plus un avantage médian de **+30 %** sur les vues à 7 jours, sans
baisse de la conversion en abonnés.

Comparer les **médianes**, jamais les moyennes : une seule vidéo à
10 000 vues fausserait tout.

### Pourquoi il passe en second

La littérature ne soutient pas l'hypothèse. L'étude la plus proche
(#EduTok, *Health Education Journal*, 2024, 400 vidéos) se contredit :
résumé annonçant une portée supérieure pour la santé mentale, tableau
donnant 6 230 vues médianes contre 23 450, non significatif (p = 0,08).

---

## Ce que ça coûte

| | Vidéos | Durée à 5/semaine |
|---|---:|---|
| Étape 0 | 0 | 10 minutes |
| Test 1 | 20 | 4 semaines |
| Test 2 | 24 | 5 semaines |

**Neuf semaines au total.** C'est long, et c'est le prix d'une réponse
qui tienne. Le protocole précédent promettait une réponse en 7 jours ;
il n'aurait rien prouvé.

Le pipeline ne contient que 11 sujets. **Il faut en écrire une trentaine
avant de lancer le test 2.** Les 7 sujets de
`labo-7-jours-psycho-sociale.md` restent valables et sourcés.

---

## Un point de différenciation à ne pas jeter

Aucun compte francophone de plus de 100 K abonnés ne nomme
systématiquement un chercheur et son institution dans chaque format
court. Ils s'appuient sur l'autorité du rôle — psychologue,
vulgarisateur — pas sur la citation académique.

C'est donc réellement distinctif. Aucune donnée ne prouve que ça améliore
la rétention, mais rien ne prouve non plus que ça la dégrade. **La
question n'est pas de le supprimer, c'est de le placer au bon endroit** :
après le problème, jamais avant.

---

## Journal

*(à remplir — une ligne par paire)*

| Test | Paire | Slug A | Slug B | Gagnant | Écart vues | Complétion A/B |
|---|---|---|---|---|---|---|
| | | | | | | |
