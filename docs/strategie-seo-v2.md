# STRATEGIE CONTENU 4 PILIERS — L'EVEIL MENTAL
## Version 2.0 — Mars 2026 (mise à jour complète)

> **Contexte :** Document mis à jour intégrant (1) la stratégie initiale de décembre 2025, (2) les améliorations GEO du template ArticleTemplate_V2 (mars 2026), et (3) les meilleures pratiques SEO/GEO 2026 validées par données réelles.

---

## SOMMAIRE

1. [Ce qui a changé depuis décembre 2025](#1-ce-qui-a-changé)
2. [Architecture 4 piliers — état réel](#2-architecture-4-piliers)
3. [Les 24 articles : specs complètes mises à jour](#3-les-24-articles)
4. [Template de création — ArticleTemplate V2 (GEO-ready)](#4-template-v2)
5. [Prompt maître pour Claude (rédaction article)](#5-prompt-maître)
6. [Checklist SEO+GEO avant publication](#6-checklist)
7. [Maillage interne — matrice complète](#7-maillage)
8. [Calendrier éditorial avril–septembre 2026](#8-calendrier)
9. [KPIs & tracking GEO](#9-kpis)

---

## 1. CE QUI A CHANGÉ DEPUIS DÉCEMBRE 2025

### Nouveautés SEO/GEO critiques (mars 2026)

| Signal | Décembre 2025 | Mars 2026 | Impact |
|--------|--------------|-----------|--------|
| GEO (citations IA) | Optionnel | **Obligatoire** | 74% des citations viennent de pages structurées "Top N" |
| Quick Answer Block | Absent | **Dans les 200 premiers mots** | Requis pour extraction IA |
| JSON-LD | Article + FAQ | **Triple stack : Article + ItemList + FAQPage** | +1.8x citations vs schema seul |
| FAQ | 4 questions | **8 questions minimum** | Seuil minimum pour featured snippets |
| Fraîcheur | Mise à jour mensuelle | **Signal "Version" + date vérification** | Contenu non rafraîchi perd citations après ~14 jours |
| llms.txt | Absent | **Fichier /public/llms.txt** | Balise pour crawlers IA (GPTBot, ClaudeBot, PerplexityBot) |
| Entity mapping | Implicite | **Explicite** : chercheurs nommés + structures cérébrales | Signal E-E-A-T renforcé |
| StatBlock | Absent | **Bloc JSX inline avec source** | Factual density > keyword density |

### Workflow de production — résultats conversation mars 2026

- **Template V1 → V2** : 7 améliorations GEO intégrées
- **Temps de production** : 3–4h → ~1h15 par article (gain de 65%)
- **Cadence cible** : 4–5 articles/semaine possible vs 1–2 avant
- **Phase 2 en attente** : skill Claude Code `.claude/commands/article.md` + specs 24 articles

---

## 2. ARCHITECTURE 4 PILIERS — ÉTAT RÉEL (mars 2026)

```
L'ÉVEIL MENTAL — leveilmental.fr
│
├── PILIER 1 : Neurosciences & Cerveau
│   ✅ Neuroplasticité          ✅ Attention fragmentée
│   ✅ Dopamine (mis à jour)    ✅ Sommeil réparateur
│   ✅ Lumière naturelle        ✅ BDNF
│   ✅ Système Limbique         ✅ Plasticité Synaptique
│   ❌ A1, A2, A6 à créer
│
├── PILIER 2 : Psychologie & Émotions
│   ✅ Rejet social (optimisé)  ✅ Rumination mentale
│   ✅ Syndrome imposteur       ✅ Procrastination
│   ❌ B1, B2, B3, B4, B5, B6 à créer
│
├── PILIER 3 : Relations & Communication
│   ✅ Méthode ACR              ❌ C1-C6 à créer (PILIER LE PLUS EN RETARD)
│
└── PILIER 4 : Développement Personnel & Action
    ✅ Confiance en soi         ❌ D1-D6 à créer
```

**Score actuel : 14/35 contenus publiés** (4 pages piliers + articles satellites)
**Priorité immédiate : Pilier 3 (relations) — 1 article sur 7 seulement**

> ⚠️ Notes de cohérence : A3 (BDNF), A4 (Système Limbique) et A5 (Plasticité Synaptique)
> sont déjà publiés — ces slots sont libres pour 3 nouveaux sujets dans le Pilier 1.

---

## 3. LES 24 ARTICLES — SPECS COMPLÈTES MISES À JOUR

> Format par article : Titre | KW principal (volume/KD) | Featured Snippet cible | Maillage interne | Priorité

---

### PILIER 1 : NEUROSCIENCES & CERVEAU (6 articles)

#### A1 — Neurotransmetteurs & Humeur
- **Titre :** "7 Neurotransmetteurs Qui Contrôlent Votre Humeur (Guide Complet 2026)"
- **KW principal :** `neurotransmetteurs humeur` (210/mois, KD 15)
- **KW secondaires :** dopamine sérotonine, neurotransmetteurs cerveau, équilibre chimique cerveau
- **Featured Snippet :** "Quels neurotransmetteurs influencent l'humeur ?"
- **StatBlock requis :** "La sérotonine régule l'humeur dans 90% des cas de dépression légère (Jiang et al., 2019)"
- **Liens sortants :** → A2 (cortisol), → Dopamine (article existant)
- **Mots :** 2200 | **Priorité :** Haute

#### A2 — Cortisol & Stress Chronique
- **Titre :** "Cortisol : comment le stress chronique détruit le cerveau (et 6 solutions)"
- **KW principal :** `cortisol stress cerveau` (480/mois, KD 18)
- **KW secondaires :** cortisol élevé effets, réduire cortisol naturellement, stress chronique neurosciences
- **Featured Snippet :** "Quels sont les effets du cortisol élevé sur le cerveau ?"
- **StatBlock requis :** "Le stress chronique réduit le volume de l'hippocampe de 10-20% (McEwen, 2018)"
- **Liens sortants :** → A1 (neurotransmetteurs), → Sommeil (article existant)
- **Mots :** 2400 | **Priorité :** Haute

#### A3 — BDNF & Neurogenèse
- **Statut :** ✅ Publié → `bdnf-augmenter-naturellement-neurosciences` — slot libre pour nouveau sujet

#### A4 — Système Limbique & Émotions
- **Statut :** ✅ Publié → `systeme-limbique-cerveau-emotionnel` — slot libre pour nouveau sujet

#### A5 — Plasticité Synaptique & Apprentissage
- **Statut :** ✅ Publié → `plasticite-synaptique-apprentissage-cerveau` — slot libre pour nouveau sujet

#### A6 — Microbiome Intestinal & Cerveau
- **Titre :** "Axe intestin-cerveau : comment vos bactéries contrôlent votre humeur"
- **KW principal :** `axe intestin cerveau` (390/mois, KD 20)
- **KW secondaires :** microbiome humeur anxiété, sérotonine intestin, gut brain connection français
- **Featured Snippet :** "Comment l'intestin influence-t-il le cerveau et l'humeur ?"
- **StatBlock requis :** "95% de la sérotonine est produite dans l'intestin (Yano et al., 2015)"
- **Liens sortants :** → A1 (neurotransmetteurs), → A2 (cortisol)
- **Mots :** 2200 | **Priorité :** Haute (tendance montante)

---

### PILIER 2 : PSYCHOLOGIE & ÉMOTIONS (6 articles)

#### B1 — Régulation Émotionnelle
- **Titre :** "Régulation émotionnelle : 8 techniques validées par la psychologie (2026)"
- **KW principal :** `régulation émotionnelle techniques` (520/mois, KD 22)
- **KW secondaires :** gérer ses émotions psychologie, régulation émotionnelle TCC, intelligence émotionnelle
- **Featured Snippet :** "Quelles sont les meilleures techniques de régulation émotionnelle ?"
- **StatBlock requis :** "La réévaluation cognitive réduit l'intensité émotionnelle de 40% (Gross, 2015)"
- **Liens sortants :** → Rejet social (existant), → Système Limbique (existant)
- **Mots :** 2500 | **Priorité :** Haute

#### B2 — Biais Cognitifs
- **Titre :** "12 Biais Cognitifs qui sabotent vos décisions (+ comment les contrer)"
- **KW principal :** `biais cognitifs liste` (890/mois, KD 28)
- **KW secondaires :** biais confirmation, heuristiques décision, psychologie biais cognitifs
- **Featured Snippet :** "Quels sont les principaux biais cognitifs ?" (format liste — très adapté GEO)
- **Format GEO :** Listicle — 74.2% des citations IA viennent de ce format
- **Liens sortants :** → B3 (pensée critique), → Syndrome imposteur (existant)
- **Mots :** 2800 | **Priorité :** Haute (format parfait GEO)

#### B3 — Pensée Critique & Décisions
- **Titre :** "Pensée critique : développer son jugement selon la psychologie cognitive"
- **KW principal :** `pensée critique développer` (340/mois, KD 19)
- **KW secondaires :** esprit critique psychologie, désinformation cerveau, raisonnement logique
- **Liens sortants :** → B2 (biais cognitifs), → B4 (mindset)
- **Mots :** 2000 | **Priorité :** Moyenne

#### B4 — Mindset de Croissance
- **Titre :** "Mindset de croissance : la psychologie de Carol Dweck expliquée"
- **KW principal :** `mindset de croissance` (1200/mois, KD 31)
- **KW secondaires :** growth mindset français, Carol Dweck cerveau, fixed mindset différence
- **Featured Snippet :** "Qu'est-ce que le mindset de croissance selon Dweck ?"
- **StatBlock requis :** "Les élèves avec mindset de croissance progressent 2x plus vite (Dweck & Yeager, 2019)"
- **Liens sortants :** → Confiance en soi (existant), → B1 (régulation émotionnelle)
- **Mots :** 2200 | **Priorité :** Haute (volume élevé)

#### B5 — Anxiété : Mécanismes & Solutions
- **Titre :** "Anxiété : mécanismes neurologiques et 10 solutions scientifiques"
- **KW principal :** `anxiété neurosciences` (640/mois, KD 24)
- **KW secondaires :** gérer anxiété cerveau, amygdale anxiété, thérapie anxiété TCC
- **Featured Snippet :** "Comment le cerveau génère-t-il l'anxiété ?"
- **StatBlock requis :** "L'anxiété touche 1 Français sur 5 selon l'INSERM (2024)"
- **Liens sortants :** → Système Limbique (existant), → B1 (régulation émotionnelle), → Rumination (existant)
- **Mots :** 2600 | **Priorité :** Haute (YMYL — fort trafic)

#### B6 — Burn-out : Reconnaître & Récupérer
- **Titre :** "Burn-out : les signaux neurobiologiques et 7 étapes de récupération"
- **KW principal :** `burnout signes cerveau` (580/mois, KD 21)
- **KW secondaires :** épuisement professionnel neurosciences, récupérer burnout, cortisol burnout
- **StatBlock requis :** "Le burn-out réduit le volume du cortex préfrontal de 14% (Savic, 2015)"
- **Liens sortants :** → A2 (cortisol), → B1 (régulation émotionnelle), → Sommeil (existant)
- **Mots :** 2400 | **Priorité :** Haute

---

### PILIER 3 : RELATIONS & COMMUNICATION (6 articles)

> Pilier le plus en retard — priorité absolue pour établir l'autorité thématique

#### C1 — Communication Non-Violente (CNV)
- **Titre :** "Communication Non-Violente : les 4 étapes OSBD (Guide complet + exemples)"
- **KW principal :** `communication non violente` (1900/mois, KD 32)
- **KW secondaires :** CNV Marshall Rosenberg, communication bienveillante, OSBD exemples
- **Featured Snippet :** "Quelles sont les 4 étapes de la communication non violente ?"
- **Format GEO :** Listicle numéroté — format idéal pour ce type de question
- **StatBlock requis :** "La CNV réduit les conflits de couple de 37% en 8 semaines (Wacker & Dziobek, 2018)"
- **Liens sortants :** → ACR (existant), → C2 (écoute active)
- **Mots :** 2800 | **Priorité :** URGENT (volume le plus élevé du pilier)

#### C2 — Écoute Active
- **Titre :** "Écoute active : technique Carl Rogers et 5 niveaux d'écoute (psychologie)"
- **KW principal :** `écoute active technique` (780/mois, KD 26)
- **KW secondaires :** écoute empathique Rogers, comment mieux écouter, niveaux écoute
- **Featured Snippet :** "Comment pratiquer l'écoute active selon Carl Rogers ?"
- **Liens sortants :** → C1 (CNV), → C3 (empathie)
- **Mots :** 2000 | **Priorité :** Haute

#### C3 — Empathie & Neurosciences
- **Titre :** "Empathie : neurones miroirs et science de la connexion humaine"
- **KW principal :** `empathie neurones miroirs` (420/mois, KD 18)
- **KW secondaires :** développer empathie, Giacomo Rizzolatti découverte, empathie affective cognitive
- **Featured Snippet :** "Que sont les neurones miroirs et leur lien avec l'empathie ?"
- **StatBlock requis :** "Les neurones miroirs activent les mêmes régions que lors d'une action observée (Rizzolatti, 1996)"
- **Liens sortants :** → C2 (écoute active), → Système Limbique (existant)
- **Mots :** 2000 | **Priorité :** Moyenne

#### C4 — Conflits : Résolution Scientifique
- **Titre :** "Résolution de conflits : 6 méthodes validées par la psychologie sociale"
- **KW principal :** `résoudre un conflit technique` (560/mois, KD 22)
- **KW secondaires :** gestion conflit psychologie, désamorcer tension relationnelle, négociation
- **Liens sortants :** → C1 (CNV), → C2 (écoute active), → B1 (régulation émotionnelle)
- **Mots :** 2200 | **Priorité :** Moyenne

#### C5 — Influence Sociale & Conformisme
- **Titre :** "Influence sociale : Asch, Milgram et les mécanismes de la pression sociale"
- **KW principal :** `influence sociale conformisme` (340/mois, KD 17)
- **KW secondaires :** expérience Asch conformisme, pression sociale neurosciences, manipulation influence
- **Featured Snippet :** "Qu'est-ce que le conformisme social selon Asch ?"
- **Liens sortants :** → B2 (biais cognitifs), → C4 (conflits)
- **Mots :** 2000 | **Priorité :** Normale

#### C6 — Intelligence Sociale
- **Titre :** "Intelligence sociale : 7 compétences relationnelles clés (Daniel Goleman)"
- **KW principal :** `intelligence sociale compétences` (490/mois, KD 23)
- **KW secondaires :** Daniel Goleman intelligence émotionnelle sociale, soft skills psychologie
- **Liens sortants :** → C2 (écoute active), → C3 (empathie), → D4 (focus)
- **Mots :** 2200 | **Priorité :** Moyenne

---

### PILIER 4 : DÉVELOPPEMENT PERSONNEL & ACTION (6 articles)

#### D1 — Habitudes : Formation Neurologique
- **Titre :** "Habitudes : comment le cerveau les forme (et les change) selon les neurosciences"
- **KW principal :** `formation habitudes cerveau` (620/mois, KD 24)
- **KW secondaires :** boucle habitude ganglions de la base, changer habitude neurosciences, Charles Duhigg
- **Featured Snippet :** "Comment se forment les habitudes dans le cerveau ?"
- **StatBlock requis :** "Une habitude se consolide en 21 à 66 jours selon Phillippa Lally (UCL, 2010)"
- **Liens sortants :** → Procrastination (existant), → D2 (routines)
- **Mots :** 2400 | **Priorité :** Haute

#### D2 — Routines Matinales Scientifiques
- **Titre :** "Routine matinale : ce que la neurologie dit des 90 premières minutes (2026)"
- **KW principal :** `routine matinale scientifique` (1400/mois, KD 35)
- **KW secondaires :** morning routine cerveau, Huberman protocole matin, cortisol matin
- **Featured Snippet :** "Quelle est la meilleure routine matinale selon la science ?"
- **StatBlock requis :** "Les 30 premières minutes post-réveil sont critiques pour le cortisol (Cortisol Awakening Response)"
- **Liens sortants :** → D1 (habitudes), → Sommeil (existant), → A2 (cortisol)
- **Mots :** 2500 | **Priorité :** Haute (fort volume)

#### D3 — Objectifs : Méthode SMART & OKR
- **Titre :** "Fixer des objectifs : SMART, OKR et neurosciences de la motivation"
- **KW principal :** `objectifs SMART méthode` (1100/mois, KD 30)
- **KW secondaires :** méthode SMART exemples, OKR développement personnel, motivation objectifs
- **Featured Snippet :** "Comment définir un objectif SMART ?"
- **Format GEO :** Template téléchargeable → fort engagement + lead capture
- **Liens sortants :** → Procrastination (existant), → D1 (habitudes)
- **Mots :** 2200 | **Priorité :** Haute

#### D4 — Focus & Concentration Profonde
- **Titre :** "Concentration profonde : Deep Work et neurosciences du focus (Cal Newport)"
- **KW principal :** `concentration profonde technique` (430/mois, KD 19)
- **KW secondaires :** deep work Cal Newport français, focus neurosciences, mode diffus focalisé
- **Featured Snippet :** "Comment développer une concentration profonde ?"
- **StatBlock requis :** "Le cerveau met 23 min pour se refocaliser après une interruption (Gloria Mark, UCI)"
- **Liens sortants :** → Attention fragmentée (existant), → Procrastination (existant)
- **Mots :** 2200 | **Priorité :** Moyenne

#### D5 — Résilience Psychologique
- **Titre :** "Résilience : les 5 piliers neurobiologiques pour rebondir après l'adversité"
- **KW principal :** `résilience psychologique développer` (720/mois, KD 25)
- **KW secondaires :** résilience neurosciences, Boris Cyrulnik résilience, post-traumatic growth
- **Featured Snippet :** "Comment développer sa résilience psychologique ?"
- **StatBlock requis :** "La résilience repose sur la plasticité du cortex préfrontal (Davidson, 2012)"
- **Liens sortants :** → B5 (anxiété), → B6 (burn-out), → Syndrome imposteur (existant)
- **Mots :** 2400 | **Priorité :** Haute

#### D6 — Méditation & Cerveau
- **Titre :** "Méditation et cerveau : ce que l'IRMf révèle (+ protocole 8 semaines)"
- **KW principal :** `méditation effets cerveau` (860/mois, KD 27)
- **KW secondaires :** MBSR neurosciences, méditation pleine conscience IRMf, Jon Kabat-Zinn
- **Featured Snippet :** "Quels sont les effets prouvés de la méditation sur le cerveau ?"
- **StatBlock requis :** "8 semaines de MBSR augmentent la densité de matière grise de 5% (Hölzel et al., 2011)"
- **Liens sortants :** → Attention fragmentée (existant), → B1 (régulation émotionnelle)
- **Mots :** 2600 | **Priorité :** Haute (volume + autorité scientifique élevée)

---

## 4. TEMPLATE V2 — STRUCTURE GEO-READY

> Basé sur `src/articles/PlasticiteSynaptique.tsx` (source de vérité).
> QuickAnswer et StatBlock sont des **blocs JSX inline** — voir `.claude/rules/template-v2.md`.

### Structure d'un article optimisé mars 2026

```
[Header]
├── Fil d'Ariane (4 niveaux : Accueil > Catégorie > Sous-catégorie > Article)
├── Badge catégorie + Tag pilier
├── H1 (mot-clé principal dans les 8 premiers mots)
├── Description enrichie (reprend meta.description)
└── Métadonnées : auteur | lecture | date | VERSION + date vérification

[QUICK ANSWER BLOCK — dans les 200 premiers mots] ← CRITIQUE GEO
"En bref : [réponse directe à la question principale en 40-60 mots]
Sources : [Chercheur, Institution, Année]"

[Image de couverture WebP + alt text détaillé 80 chars min]

[Corps de l'article]
├── Intro (150-200 mots) — mot-clé dans les 50 premiers mots
├── H2 : Définition scientifique (question directe)
│   └── H3 : Mécanisme spécifique (avec StatBlock JSX inline sourcé)
├── H2 : [Question directe — ex: "Comment X affecte-t-il le cerveau ?"]
│   ├── H3 : Mécanisme 1 (chercheur nommé + institution)
│   ├── H3 : Mécanisme 2
│   └── H3 : Mécanisme 3
├── H2 : Les N [stratégies/solutions/techniques] validées
│   ├── H3 : 1. Stratégie 1 (application pratique incluse)
│   └── H3 : N. Stratégie N
├── H2 : "À retenir" (encadré résumé — featured snippet)
│
[SECTION FAQ — 8 questions minimum] ← CRITIQUE GEO
├── Q1 : Question conversationnelle longue traîne
└── Q8 : [Réponses 40-60 mots chacune]

[Liens internes contextuels : 3-5 minimum]
[CTA newsletter/lead magnet]
[Sources scientifiques numérotées]
```

### JSON-LD — 7 schemas (triple stack minimum)

```
Person + Organization + ImageObject + BlogPosting + BreadcrumbList + ItemList + FAQPage
```

Voir `.claude/rules/template-v2.md` pour le code exact de chaque schema.

### Signal de fraîcheur (dans le header de chaque article)

```tsx
<div className="text-xs text-neutral-500 mt-2">
  Version 1.0 — {meta.verifiedDate} | Sources vérifiées {période}
</div>
```

---

## 5. PROMPT MAÎTRE POUR CLAUDE (rédaction article)

> Copiez ce prompt dans une nouvelle conversation Claude pour créer chaque article

```
Tu es un rédacteur expert en neurosciences et psychologie pour le site leveilmental.fr.
Ton positionnement : professeur scientifique — jamais coach motivationnel, jamais vague.
Structure : fait scientifique → mécanisme neurologique → application pratique concrète.
Langue : français, registre éducatif accessible mais rigoureux.

ARTICLE À RÉDIGER :
- Titre : [TITRE DE L'ARTICLE]
- Mot-clé principal : [KW PRINCIPAL]
- Mots-clés secondaires : [KW SECONDAIRES]
- Mots cibles : [NOMBRE]
- Liens internes obligatoires : [ARTICLES À LIER]

RÈGLES ABSOLUES :
1. Quick Answer Block dans les 200 premiers mots (réponse directe en 40-60 mots avec source)
2. Nommer les chercheurs ET leurs institutions (ex: "Adam Gazzaley (UCSF)")
3. Minimum 3 StatBlocks avec format : "Stat — Source complète (Auteur, Institution, Année)"
4. H2 en questions directes (ex: "Comment le cortisol détruit-il le cerveau ?")
5. Section FAQ : 8 questions minimum, réponses 40-60 mots chacune
6. Section "À retenir" (encadré résumé final)
7. 3 applications pratiques concrètes minimum
8. Signal fraîcheur : "Version 1.0 — [Mois Année] | Sources vérifiées [Période]"
9. Format de sortie : markdown pur (converti ensuite en TSX)
10. Jamais de promesses floues, jamais de "transforme ta vie"

SOURCES PRIORITAIRES : PubMed, INSERM, études citées dans Nature/Science/Neuron
```

---

## 6. CHECKLIST SEO+GEO AVANT PUBLICATION

### OBLIGATOIRE (bloquer si manquant)

**Contenu**
- [ ] Quick Answer Block dans les 200 premiers mots
- [ ] Mot-clé principal dans le titre H1 (8 premiers mots)
- [ ] Mot-clé principal dans les 50 premiers mots de l'intro
- [ ] Signal de fraîcheur (Version + date vérification)
- [ ] Min. 3 StatBlocks avec sources complètes
- [ ] Chercheurs nommés + institutions (entity mapping)
- [ ] Min. 8 questions FAQ (réponses 40-60 mots)
- [ ] Section "À retenir" (encadré résumé)
- [ ] Min. 3 liens internes contextuels

**Technique**
- [ ] 7 schemas JSON-LD : Person + Organization + ImageObject + BlogPosting + BreadcrumbList + ItemList + FAQPage
- [ ] Fil d'Ariane 4 niveaux + BreadcrumbList schema
- [ ] Image WebP + alt text descriptif (80 chars min.)
- [ ] Canonical tag correct
- [ ] dateModified mis à jour
- [ ] Meta description 150-160 chars avec KW principal
- [ ] Composant enregistré dans `src/content/index.ts` (objet `articlesBySlug`)
- [ ] Entrée ajoutée dans `src/data/blog-articles.ts`
- [ ] Slug ajouté dans `scripts/generate-sitemap.mjs`

**GEO**
- [ ] Contenu lisible sans clic (auto-suffisant pour extraction IA)
- [ ] Réponses H2 immédiates (structure pyramide inversée)
- [ ] Format "Top N" ou "X étapes" (74% des citations IA)
- [ ] Aucun GPTBot/ClaudeBot bloqué dans robots.txt
- [ ] llms.txt présent en /public/

### RECOMMANDÉ

- [ ] Tableau comparatif (si article "X vs Y")
- [ ] Image infographie (alt text 100 chars)
- [ ] Boutons partage social
- [ ] CTA lead magnet contextualisé

---

## 7. MAILLAGE INTERNE — MATRICE COMPLÈTE

### Liens obligatoires par pilier

```
PILIER 1 (Neurosciences) → vers :
  A1 Neurotransmetteurs ←→ A2 Cortisol ←→ A6 Microbiome
  BDNF (existant) → Neuroplasticité (existant)
  Système Limbique (existant) ←→ B1 Régulation émotionnelle

PILIER 2 (Psychologie) → vers :
  B2 Biais cognitifs ←→ B3 Pensée critique
  B4 Mindset → Confiance en soi (existant)
  B5 Anxiété → Rumination (existant) + Système Limbique (existant)
  B6 Burn-out → A2 Cortisol + Sommeil (existant)

PILIER 3 (Relations) → vers :
  C1 CNV ←→ C2 Écoute active ←→ C3 Empathie
  C4 Conflits → C1 CNV + C2 Écoute
  C5 Influence → B2 Biais cognitifs
  C6 Intelligence sociale → C2 + C3

PILIER 4 (Dev Perso) → vers :
  D1 Habitudes → Procrastination (existant)
  D2 Routines → Sommeil (existant) + A2 Cortisol
  D3 Objectifs → D1 Habitudes
  D4 Focus → Attention fragmentée (existant)
  D5 Résilience → B5 Anxiété + B6 Burn-out
  D6 Méditation → Attention fragmentée (existant) + B1
```

### Pages Piliers (à créer — priorité après les 24 articles)

| Page pilier | KW | Volume | Structure |
|---|---|---|---|
| Guide Neurosciences | `neurosciences cerveau` | 2100/mois | Hub vers A1-A6 + existants |
| Guide Psychologie | `psychologie appliquée` | 1800/mois | Hub vers B1-B6 + existants |
| Guide Relations | `communication interpersonnelle` | 1400/mois | Hub vers C1-C6 |
| Guide Dev Perso | `développement personnel scientifique` | 3200/mois | Hub vers D1-D6 + existants |

---

## 8. CALENDRIER ÉDITORIAL AVRIL–SEPTEMBRE 2026

> Cadence cible : 1 article/semaine (7h/semaine disponibles)
> Priorité : Pilier 3 (retard critique) + articles forte intention GEO

### Avril 2026 — Rattraper le Pilier 3

| Semaine | Article | Pilier | Priorité |
|---------|---------|--------|----------|
| S1 (31 mars-6 avril) | C1 — Communication Non-Violente | Relations | URGENT |
| S2 (7-13 avril) | B4 — Mindset de croissance | Psychologie | Haute |
| S3 (14-20 avril) | D2 — Routine matinale scientifique | Dev Perso | Haute |
| S4 (21-27 avril) | C2 — Écoute active | Relations | Haute |

### Mai 2026 — Consolider Pilier 1 & 2

| Semaine | Article | Pilier | Priorité |
|---------|---------|--------|----------|
| S1 | A6 — Microbiome & cerveau | Neurosciences | Haute |
| S2 | B5 — Anxiété | Psychologie | Haute |
| S3 | A1 — Neurotransmetteurs | Neurosciences | Haute |
| S4 | D6 — Méditation & cerveau | Dev Perso | Haute |

### Juin 2026 — Expansion

| Semaine | Article | Pilier |
|---------|---------|--------|
| S1 | A2 — Cortisol & stress | Neurosciences |
| S2 | B1 — Régulation émotionnelle | Psychologie |
| S3 | D1 — Habitudes cerveau | Dev Perso |
| S4 | C3 — Empathie & neurones miroirs | Relations |

### Juillet–Août 2026 — Montée en régime

| Mois | Articles | Objectif |
|------|----------|----------|
| Juillet | B2 Biais cognitifs + B6 Burn-out + D3 Objectifs + C4 Conflits | 4 articles |
| Août | D5 Résilience + B3 Pensée critique + C5 Influence sociale + B6 Burn-out | 4 articles |

### Septembre 2026 — Finalisation + Pages Piliers

| Semaine | Contenu |
|---------|---------|
| S1-S2 | D4 Focus + C6 Intelligence sociale + A6 Microbiome (si pas fait) + D3 Objectifs |
| S3-S4 | **4 Pages Piliers** (hubs thématiques 2500-3000 mots) |

### Bilan calendrier

| Période | Nouveaux articles | Total site |
|---------|-------------------|------------|
| Avril 2026 (état actuel) | 14 articles publiés | 14 |
| Fin juin 2026 | +12 articles | 26 |
| Fin septembre 2026 | +12 articles + 4 pages piliers | 42 |
| Objectif fin 2026 | Mises à jour + contenu additionnel | 50+ |

---

## 9. KPIS & TRACKING GEO

### Métriques SEO traditionnelles (Google Search Console)

| KPI | Cible fin Q2 2026 | Cible fin Q4 2026 |
|-----|-------------------|-------------------|
| Trafic organique/mois | 5 000-10 000 | 50 000-100 000 |
| Articles en top 10 | 5 | 30 |
| Featured Snippets obtenus | 3 | 20 |
| CTR moyen | >2% | >3.5% |
| Backlinks DR20+ | 10 | 50 |

### Métriques GEO (nouvelles — mars 2026)

| KPI | Comment mesurer | Cible |
|-----|-----------------|-------|
| Citations ChatGPT | Requêtes manuelles hebdo sur topics couverts | 5 citations/semaine |
| Citations Perplexity | Idem + tracking GA4 AI referral | 10 citations/semaine |
| AI-referred traffic | GA4 : source contenant "perplexity/chatgpt/claude" | 200 sessions/mois |
| Brand mentions IA | Alertes Google "L'Éveil Mental" | 10/mois |

### Requêtes GA4 pour tracker le trafic IA

```
Dans GA4 → Reports → Acquisition → Source/Medium
Filtrer par source contenant :
- perplexity.ai
- chat.openai.com
- claude.ai
- gemini.google.com
- copilot.microsoft.com
```
