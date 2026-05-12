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

### NOTATION STATISTIQUE — INTERDIT dans le corps de l'article

Les notations brutes (r=, d=, p<, β=, IC95%, F=, η²) sont incompréhensibles pour le grand public.
TOUJOURS traduire en langage courant AVANT de mentionner le chiffre (ou ne pas mentionner le chiffre du tout).

❌ "une corrélation de r = −0,28 (p < 0,001)"
✅ "les managers qui écoutent ont des équipes nettement moins épuisées — un lien confirmé sur 3 858 personnes"

❌ "un effet de taille d = 0,85"
✅ "l'effet est fort : être bien écouté améliore davantage le sentiment d'autonomie que recevoir un conseil"

❌ "F(1, 120) = 8,540, p = 0,004"
✅ "le résultat est statistiquement robuste — testé sur 122 participants en situation réelle"

RÈGLE : la conclusion en français d'abord, le chiffre brut entre parenthèses SEULEMENT si indispensable.
Si le chiffre n'apporte rien à la compréhension → ne pas l'écrire.

### MENTIONS DE CHERCHEURS — accessibles à tous

Nommer le chercheur et l'institution est obligatoire pour l'E-E-A-T, MAIS chaque mention
doit être suivie d'un contexte qui aide le lecteur à comprendre pourquoi ça compte.

❌ "Itzchakov et al. (2025) ont montré (d = 0,85, p < 0,001)..."
✅ "Le psychologue Guy Itzchakov (Université de Haïfa, Israël) a montré dans une étude de 2025
   que les personnes qui se sentent vraiment écoutées se sentent deux fois plus autonomes dans
   leurs décisions — un effet aussi fort que celui d'une thérapie courte."

Format attendu : Prénom Nom (Institution, Pays) + ce que ça veut dire concrètement.
L'institution est une preuve de sérieux — pas de la déco. Expliquer brièvement pourquoi on cite ce labo.

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
  cover: "/images/articles/[slug]-cover",  // sans extension — .webp ajouté dynamiquement
  datePublished: "YYYY-MM-DDT08:00:00+01:00",
  dateModified: "YYYY-MM-DDT08:00:00+01:00",
  tags: ["tag1", "tag2", "tag3", "tag4"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos"
  },
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
Bloc JSX inline — PAS un composant React importé.
Copier depuis `src/articles/PlasticiteSynaptique.tsx`. Pattern exact dans `.claude/rules/template-v2.md` section 3.
Classes : `bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500`

Contenu attendu :
- Label "Réponse rapide" en uppercase
- `**En bref :**` + réponse directe 40-60 mots
- `**Sources :**` Chercheur, Institution, Année

### StatBlock (minimum 3 par article)
Bloc JSX inline — PAS un composant React importé.
Copier depuis `src/articles/PlasticiteSynaptique.tsx`. Pattern exact dans `.claude/rules/template-v2.md` section 4.
Couleurs : teal (`bg-teal-50`) juste après le QuickAnswer / indigo (`bg-indigo-50`) dans le corps.

Contenu attendu :
- Stat en `text-3xl font-black`
- Description de la statistique
- Source complète : Auteur et al., Institution, *Journal*, Année — DOI

### H2 en questions directes (OBLIGATOIRE)
✅ "Comment le cortisol détruit-il le cerveau ?"
✅ "Quels sont les effets du stress chronique sur la mémoire ?"
❌ "Effets du cortisol"
❌ "Le stress et le cerveau"

## 4. 7 SCHEMAS JSON-LD (obligatoire sur chaque article)

Props réelles du composant `src/components/SEO.tsx` :
```tsx
<SEO
  title={meta.title}
  description={meta.description}
  image={og}
  type="article"
  path={`/blog/${meta.slug}`}
  datePublished={meta.datePublished}
  dateModified={meta.dateModified}
  authorName={meta.author?.name}
  tags={meta.tags}
  jsonLd={[schemaPerson, schemaOrganization, schemaImage, schemaBlogPosting, schemaBreadcrumb, schemaItemList, schemaFAQ]}
/>
```

Ordre des 7 schemas : Person + Organization + ImageObject + BlogPosting + BreadcrumbList + ItemList + FAQPage.
Code exact de chaque schema → `.claude/rules/template-v2.md` section 7.

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
- /blog/confiance-en-soi-durable
- /blog/surmonter-rejet-social
- /blog/bdnf-augmenter-naturellement-neurosciences
- /blog/systeme-limbique-cerveau-emotionnel
- /blog/plasticite-synaptique-apprentissage-cerveau

## 8. SIGNAL DE FRAÎCHEUR (GEO)

Ajouter dans le header de chaque article :
```tsx
<div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
  Version {meta.version} — {meta.verifiedDate} | Sources vérifiées {période}
</div>
```

## 9. IMAGE DE COUVERTURE — GÉNÉRATION DE PROMPTS

### Principe
Pour chaque article, générer **3 concepts** avec prompt complet.
Le style visuel s'adapte au pilier éditorial de l'article.

### Style par pilier

| Pilier | Style |
|--------|-------|
| Neurosciences | `scientific visualization` |
| Psychologie | `emotional abstract art` |
| Relations Humaines | `human connection art` |
| Développement Personnel | `conceptual illustration` |

### Contrainte commune (à inclure dans tous les prompts)

```
high quality digital illustration, cinematic lighting,
no photograph, no text, no labels, no watermark,
16:9 landscape, 1200x630px
```

### Format de sortie

Produire 3 concepts distincts, chacun avec :
- **Concept X** : [angle narratif en 1 phrase]
- **Prompt complet** : [description visuelle + style pilier + contrainte commune]

Exemple pour un article Neurosciences sur la mémoire :

```
Concept 1 : Neurones en réseau illuminés représentant la consolidation mémorielle
Prompt : Abstract network of bioluminescent neurons forming interconnected webs,
synaptic connections glowing in blue and gold, dark background with subtle depth,
scientific visualization, high quality digital illustration, cinematic lighting,
no photograph, no text, no labels, no watermark, 16:9 landscape, 1200x630px

Concept 2 : Hippocampe stylisé comme carte topographique lumineuse
Prompt : Stylized hippocampus rendered as a topographic light map,
warm amber and teal gradient, flowing neural pathways suggesting memory encoding,
scientific visualization, high quality digital illustration, cinematic lighting,
no photograph, no text, no labels, no watermark, 16:9 landscape, 1200x630px

Concept 3 : Fragment de souvenir visuel abstrait dans une sphère cristalline
Prompt : Crystalline sphere containing fragmented abstract memories as light shards,
deep violet and electric blue tones, sense of preservation and fragility,
scientific visualization, high quality digital illustration, cinematic lighting,
no photograph, no text, no labels, no watermark, 16:9 landscape, 1200x630px
```

### Règle de livraison

- Toujours 3 concepts par article — jamais moins
- Chaque concept doit proposer un angle visuel différent (macro, métaphore, abstrait)
- Le prompt doit être en anglais (meilleurs résultats sur les générateurs d'images)
- Déposer l'image retenue dans `/public/images/articles/[slug]-cover.webp`

---

## 10. VALIDATION OBLIGATOIRE AVANT TOUT DÉPLOIEMENT

Après avoir généré un nouvel article, lancer :

```bash
npm run validate:article [slug-du-nouvel-article]
```

Toutes les vérifications doivent afficher ✅ avant de commit.
Ne jamais déployer un article avec un ❌.

Le script vérifie automatiquement :
- Trailing slash dans la variable `url`
- Slug enregistré dans `src/content/index.ts`
- Slug présent dans `ARTICLE_SLUGS` de `vite.config.ts`
- Au moins 2 liens internes depuis d'autres articles

---

## 11. CHECKLIST AVANT LIVRAISON

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
- [ ] Images WebP uniquement — pas de .jpg/.png dans les articles
- [ ] `loading="eager"` sur la cover, `loading="lazy"` sur toutes les autres `<img>`
- [ ] Dynamic import via `React.lazy()` dans `src/content/index.ts` — jamais import statique
- [ ] 7 schemas JSON-LD via composant SEO (voir template-v2.md)
- [ ] Fil d'Ariane 4 niveaux + BreadcrumbList schema
- [ ] Image WebP présente dans `/public/images/articles/[slug]-cover.webp`
- [ ] Image WebP + alt text 80 chars minimum dans le TSX
- [ ] dateModified = date du jour (format ISO 8601 avec timezone)
- [ ] Meta description 150-160 chars avec KW principal
- [ ] Composant enregistré dans `src/content/index.ts` (objet `articlesBySlug`)
- [ ] Entrée ajoutée dans `src/data/blog-articles.ts`
- [ ] Slug ajouté dans `scripts/generate-sitemap.mjs` tableau `articles[]`
- [ ] Slug ajouté dans `vite.config.ts` tableau `ARTICLE_SLUGS` (sans /blog/) → sinon HTML vide pour Google
- [ ] Build vérifié : `npm run build` sans erreur

**GEO**
- [ ] Réponses H2 immédiates (pyramide inversée)
- [ ] Format "Top N" ou "X étapes/piliers" si applicable
- [ ] Contenu auto-suffisant (extractable sans clic)
