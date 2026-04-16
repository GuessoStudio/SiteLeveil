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
| StatBlock | Absent | **Composant dédié avec source** | Factual density > keyword density |

### Workflow de production — résultats conversation mars 2026

- **Template V1 → V2** : 7 améliorations GEO intégrées
- **Composants créés** : `QuickAnswer.tsx`, `StatBlock.tsx`, `SEO.tsx` V2
- **Temps de production** : 3–4h → ~1h15 par article (gain de 65%)
- **Cadence cible** : 4–5 articles/semaine possible vs 1–2 avant
- **Phase 2 en attente** : skill Claude Code `.claude/skills/article-leveil.md` + JSON specs 24 articles

---

## 2. ARCHITECTURE 4 PILIERS — ÉTAT RÉEL (mars 2026)

```
L'ÉVEIL MENTAL — leveilmental.fr
│
├── PILIER 1 : Neurosciences & Cerveau
│   ✅ Neuroplasticité          ✅ Attention fragmentée
│   ✅ Dopamine (mis à jour)    ✅ Sommeil réparateur
│   ✅ Lumière naturelle         ❌ 6 articles à créer
│
├── PILIER 2 : Psychologie & Émotions
│   ✅ Rejet social (optimisé)  ✅ Rumination mentale
│   ✅ Syndrome imposteur       ✅ Procrastination
│   ❌ 6 articles à créer
│
├── PILIER 3 : Relations & Communication
│   ✅ Méthode ACR              ❌ 6 articles à créer (PILIER LE PLUS EN RETARD)
│
└── PILIER 4 : Développement Personnel & Action
    ✅ Confiance en soi         ❌ 6 articles à créer
```

**Score actuel : 11/35 contenus publiés** (4 pages piliers + 24 articles satellites)
**Priorité immédiate : Pilier 3 (relations) — 1 article sur 7 seulement**

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
- **Liens sortants :** → A3 (cortisol), → Dopamine (article existant)
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
- **Titre :** "BDNF : la molécule qui regenere votre cerveau (Guide scientifique)"
- **KW principal :** `BDNF cerveau` (320/mois, KD 12)
- **KW secondaires :** augmenter BDNF naturellement, facteur neurotrophique, neurogenèse adulte
- **Featured Snippet :** "Comment augmenter le BDNF naturellement ?"
- **StatBlock requis :** "30 min d'exercice aérobique augmente le BDNF de 32% (Hillman et al., 2020)"
- **Liens sortants :** → Neuroplasticité (article existant), → A2 (cortisol)
- **Mots :** 2000 | **Priorité :** Moyenne
- **Note :** Article BDNF déjà publié (`bdnf-augmenter-naturellement-neurosciences`) — ce slot est à remplacer ou marquer comme fait

#### A4 — Système Limbique & Émotions
- **Titre :** "Système limbique : comprendre le cerveau émotionnel (+ contrôle)"
- **KW principal :** `système limbique émotions` (260/mois, KD 14)
- **KW secondaires :** amygdale cerveau, cerveau émotionnel rationnel, régulation émotionnelle neurosciences
- **Featured Snippet :** "Qu'est-ce que le système limbique et son rôle ?"
- **Liens sortants :** → B1 (régulation émotionnelle), → Rejet social (article existant)
- **Mots :** 2000 | **Priorité :** Moyenne
- **Note :** Article Système Limbique déjà publié (`systeme-limbique-cerveau-emotionnel`) — idem

#### A5 — Plasticité Synaptique & Apprentissage
- **Titre :** "Plasticité synaptique : comment le cerveau apprend vraiment (neurosciences)"
- **KW principal :** `plasticité synaptique apprentissage` (180/mois, KD 11)
- **KW secondaires :** LTP mémoire, synapse neurones, comment apprendre plus vite cerveau
- **Featured Snippet :** "Comment fonctionne la plasticité synaptique ?"
- **Liens sortants :** → Neuroplasticité (article existant), → A3 (BDNF)
- **Mots :** 1800 | **Priorité :** Normale
- **Note :** Article Plasticité Synaptique déjà publié (`plasticite-synaptique-apprentissage-cerveau`) — idem

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
- **Liens sortants :** → Rejet social (existant), → A4 (système limbique)
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
- **Liens sortants :** → A4 (système limbique), → B1 (régulation émotionnelle), → Rumination (existant)
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
- **Liens sortants :** → C2 (écoute active), → A4 (système limbique)
- **Mots :** 2000 | **Priorité :** Moyenne

#### C4 — Conflits : Résolution Scientifique
- **Titre :** "Résolution de conflits : 6 méthodes validées par la psychologie sociale"
- **KW principal :** `résoudre un conflit technique` (560/mois, KD 22)
- **KW secondaires :** gestion conflit psychologie, désamorcer tension relationnelle, négociation
- **Liens sortants :** → C1 (CNV), → C2 (écoute active), → B1 (régulation émotionnelle)
- **Mots :** 2200 | **Priorité :** Moyenne

#### C5 — Influence Sociale & Conformisme
<!-- TODO : spec C5 manquante — à compléter -->

#### C6 — [À définir]
<!-- TODO : spec C6 manquante — à compléter -->

---

### PILIER 4 : DÉVELOPPEMENT PERSONNEL & ACTION (6 articles)

<!-- TODO : specs D1–D6 manquantes — à compléter -->

---

## 4. TEMPLATE DE CRÉATION — ArticleTemplate V2 (GEO-ready)

<!-- TODO : section manquante — à compléter -->

---

## 5. PROMPT MAÎTRE POUR CLAUDE (rédaction article)

<!-- TODO : section manquante — à compléter -->

---

## 6. CHECKLIST SEO+GEO AVANT PUBLICATION

<!-- TODO : section manquante — à compléter -->

---

## 7. MAILLAGE INTERNE — MATRICE COMPLÈTE

<!-- TODO : section manquante — à compléter -->

---

## 8. CALENDRIER ÉDITORIAL AVRIL–SEPTEMBRE 2026

<!-- TODO : section manquante — à compléter -->

---

## 9. KPIS & TRACKING GEO

<!-- TODO : section manquante — à compléter -->
