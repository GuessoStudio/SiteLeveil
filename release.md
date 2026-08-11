# Release — travaux planifiés

Fichier de file d'attente : ce qui est décidé mais pas encore fait.
Une fois un lot livré, le déplacer vers `docs/audit-seo.md` avec le hash de commit.

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

## 🧰 Méthode d'audit (réutilisable)

Le script qui a produit ces tableaux croise ce que chaque TSX **déclare** avec ce que le HTML pré-rendu **contient** : `C:\Users\sofie\AppData\Local\Temp\claude\...\scratchpad\audit_corpus.py` (session `a320b979`). À rapatrier dans `scripts/` s'il doit resservir.

⚠️ **Piège rencontré, à ne pas répéter.** La première version détectait les StatBlocks par leur couleur (`bg-teal-50`, `bg-indigo-50`) et annonçait 13 articles non conformes. Faux : les StatBlocks utilisent aussi rose, sky, violet. La signature fiable est **`text-3xl font-black`**, conformément à `.claude/rules/template-v2.md`. Même piège pour le Quick Answer, à chercher sur « Réponse rapide » **ou** « En bref ».

Vérifier un détecteur sur un article connu conforme avant de tirer la moindre conclusion d'un audit automatique.

---

## 📊 État du corpus au 11 août 2026

- 37 articles analysés
- **26 pleinement conformes** au Template V2
- 11 non conformes, dont 9 **sans Quick Answer Block**

L'audit initial (`docs/audit-seo.md`) annonçait 2 survivants pré-Template V2. Il y en a en réalité 9. La dette est plus large qu'estimé, mais concentrée sur des pages à faible trafic — d'où le Lot 3.
