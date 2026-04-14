# Règles Articles L'Éveil Mental
# Chargé à la demande — ne pas inclure dans CLAUDE.md

## 1. IDENTITÉ ÉDITORIALE
Auteur : Guesso, fondateur L'Éveil Mental (leveilmental.fr)
Positionnement : autorité francophone en neurosciences appliquées
Ton : professeur scientifique — jamais coach motivationnel, jamais vague
Langue : français, registre éducatif accessible mais rigoureux
Structure systématique : fait scientifique → mécanisme neurologique → application pratique

INTERDIT :
- "transforme ta vie", "deviens la meilleure version de toi-même"
- Promesses floues sans base scientifique
- Études non citées (toujours : Auteur, Institution, Année)
- HowTo schema (déprécié Google septembre 2023)

## NIVEAU DE VULGARISATION — RÈGLE ABSOLUE

Cible : grand public francophone, 18-45 ans, sans formation scientifique.
Niveau visé : Bac général, curieux, non-expert.

RÈGLES CONCRÈTES :
- Chaque terme technique introduit pour la première fois doit être immédiatement défini en 1 phrase simple
  Ex : "L'amygdale — une petite structure en forme d'amande au centre du cerveau —"
- Maximum 1 terme technique par paragraphe
- Après chaque mécanisme scientifique : 1 exemple concret du quotidien obligatoire
  Ex : "C'est pourquoi tu sursautes avant même de réaliser qu'un bruit t'a fait peur"
- Analogies obligatoires pour les concepts abstraits
  Ex : "L'amygdale fonctionne comme une alarme incendie — elle réagit avant que tu aies le temps de réfléchir"
- Phrases courtes : maximum 2 lignes par phrase
- Jamais de jargon sans explication :
  ❌ "connectivité fonctionnelle fronto-limbique"
  ✅ "la connexion entre la partie émotionnelle et la partie rationnelle du cerveau"
- Toujours partir du vécu avant la science :
  "Tu as déjà ressenti X ? Voici pourquoi..."

TEST MENTAL avant de publier :
"Est-ce que ma mère sans formation scientifique comprendrait ce paragraphe ?"
Si non → réécrire.

## 2. STRUCTURE OBLIGATOIRE DE CHAQUE ARTICLE

### 2.1 Métadonnées (objet meta en haut du TSX)
```typescript
const meta = {
  slug: "mot-cle-principal-secondaire",
  title: "Titre H1 : mot-clé dans les 8 premiers mots",
  description: "150-160 chars avec mot-clé principal",
  cover: "/images/articles/[slug]-cover",
  datePublished: "YYYY-MM-DD",
  dateModified: "YYYY-MM-DD",
  tags: ["tag1", "tag2", "tag3", "tag4"],
  author: { name: "Guesso", url: "https://leveilmental.fr/a-propos" },
  category: "Neurosciences | Psychologie | Relations Humaines | Développement Personnel",
  readingTime: "X min",
  version: "1.0",
  verifiedDate: "Mois Année"
}
```

### 2.2 Ordre des sections dans l'article

1. **Fil d'Ariane** (4 niveaux : Accueil > Catégorie > Sous-catégorie > Article)
2. **Badge catégorie** + tag pilier
3. **H1** (mot-clé principal dans les 8 premiers mots)
4. **Signal fraîcheur** : "Version 1.0 — Mois Année | Sources vérifiées Période"
5. **QUICK ANSWER BLOCK** ← CRITIQUE GEO — dans les 200 premiers mots
6. **Image cover** WebP + alt text 80 chars minimum
7. **Intro** 150-200 mots (mot-clé dans les 50 premiers mots)
8. **Corps** (voir 2.3)
9. **Section "À retenir"** (encadré résumé)
10. **FAQ** (8 questions minimum)
11. **Liens internes contextuels** (3-5 minimum)
12. **CTA newsletter/lead magnet**
13. **Sources scientifiques** numérotées avec liens PubMed/DOI

### 2.3 Structure du corps
H2 : Définition scientifique (question directe)
H3 : Mécanisme 1 + StatBlock sourcé
H3 : Mécanisme 2
H2 : Comment X affecte-t-il Y ? (question directe)
H3 : Mécanisme A (chercheur nommé + institution)
H3 : Mécanisme B
H3 : Mécanisme C
H2 : Les N [stratégies/solutions/techniques] validées
H3 : 1. Stratégie (application pratique incluse)
H3 : 2. Stratégie
...
H3 : N. Stratégie
H2 : À retenir (encadré résumé — featured snippet)

## 3. COMPOSANTS OBLIGATOIRES

### QuickAnswer (dans les 200 premiers mots — CRITIQUE)
```tsx
<QuickAnswer>
  **En bref :** [Réponse directe à la question principale en 40-60 mots]
  **Sources :** Chercheur, Institution, Année
</QuickAnswer>
```

### StatBlock (minimum 3 par article)
```tsx
<StatBlock
  stat="[Chiffre ou pourcentage exact]"
  description="[Contexte de la statistique]"
  source="Auteur et al., Institution, Année"
/>
```

### H2 en questions directes (OBLIGATOIRE)
✅ "Comment le cortisol détruit-il le cerveau ?"
✅ "Quels sont les effets du stress chronique sur la mémoire ?"
❌ "Effets du cortisol"
❌ "Le stress et le cerveau"

## 4. TRIPLE JSON-LD (obligatoire sur chaque article)

Le composant SEO V2 gère le triple stack automatiquement si tu passes :
- `category` → génère BreadcrumbList 4 niveaux
- `jsonLd={[schemaArticle, schemaItemList, schemaFAQ]}` → triple stack
- `authorUrl="/a-propos"` → E-E-A-T signal

Vérifier via Google Rich Results Test après publication.

## 5. FAQ — 8 QUESTIONS MINIMUM

Format obligatoire :
Q : [Question conversationnelle longue traîne]
R : [Réponse 40-60 mots — auto-suffisante sans contexte]

Les questions doivent correspondre aux vraies requêtes Google :
- "Comment [faire X] ?"
- "Pourquoi [phénomène] ?"
- "Quelle est la différence entre X et Y ?"
- "Est-ce que [affirmation] ?"
- "Combien de temps [processus] ?"

## 6. ENTITY MAPPING (E-E-A-T + GEO)

Chaque article doit nommer explicitement :
- 2-3 chercheurs avec prénom + institution + pays
  Ex : "Adam Gazzaley (University of California, San Francisco)"
- 2-3 structures cérébrales concernées
  Ex : cortex préfrontal, hippocampe, amygdale
- 1-2 études publiées avec revue
  Ex : "publiée dans Nature Neuroscience (2022)"

## 7. LIENS INTERNES

Minimum 3, maximum 5. Uniquement contextuels (jamais en liste).
Ancres descriptives — jamais "cliquez ici".

Articles existants disponibles pour lier :
- /blog/neuroplasticite-cerveau
- /blog/neuro-dopamine-routine
- /blog/attention-fragmentee-concentration-numerique
- /blog/rumination-mentale-pensees-obsessionnelles
- /blog/procrastination-cerveau-agir-neurosciences
- /blog/methode-acr-repondre-aux-bonnes-nouvelles
- /blog/syndrome-imposteur-solutions
- /blog/sommeil-reparateur-7-strategies-validees
- /blog/lumiere-naturelle-cerveau-sommeil-sante-mentale

## 8. SIGNAL DE FRAÎCHEUR (GEO)

Ajouter dans le header de chaque article :
```tsx
<div className="text-xs text-neutral-500 mt-2">
  Version 1.0 — {mois} {année} | Sources vérifiées {période}
</div>
```

## 9. CHECKLIST AVANT LIVRAISON

**Contenu**
- [ ] Quick Answer Block dans les 200 premiers mots
- [ ] Mot-clé principal dans H1 (8 premiers mots)
- [ ] Mot-clé dans les 50 premiers mots de l'intro
- [ ] Signal fraîcheur présent
- [ ] Minimum 3 StatBlocks avec sources complètes
- [ ] Chercheurs nommés + institutions (entity mapping)
- [ ] Minimum 8 questions FAQ (réponses 40-60 mots)
- [ ] Section "À retenir" présente
- [ ] Minimum 3 liens internes contextuels

**Technique**
- [ ] Triple JSON-LD via SEO V2
- [ ] Fil d'Ariane 4 niveaux + BreadcrumbList schema
- [ ] Image WebP + alt text 80 chars minimum
- [ ] dateModified = date du jour
- [ ] Meta description 150-160 chars avec KW principal
- [ ] blog-articles.ts mis à jour avec slug + métadonnées

**GEO**
- [ ] Réponses H2 immédiates (pyramide inversée)
- [ ] Format "Top N" ou "X étapes/piliers" si applicable
- [ ] Contenu auto-suffisant (extractable sans clic)
