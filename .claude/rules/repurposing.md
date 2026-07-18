# Repurposing Réseaux Sociaux — L'Éveil Mental
# Chargé par article.md Phase 5.3 — ne pas inclure dans CLAUDE.md

---

## RÈGLES GÉNÉRALES (tous canaux)

### Ton & voix
- Ton : professeur/expert — jamais coach motivationnel
- Structure : fait scientifique → mécanisme → implication pratique
- Toujours ancré dans une étude ou un mécanisme réel
- Jamais de promesses floues ("transforme ta vie", "deviens meilleur")
- Tutoiement sur les réseaux (vs vouvoiement sur le blog)
- Accents français corrects partout — zéro faute

### Contenu
- Chaque post doit contenir AU MOINS 1 stat choc ou fait contre-intuitif de l'article
- Toujours citer la source (auteur, institution, année) — jamais le DOI sur les réseaux
- Ne jamais dire "études montrent que" sans nommer l'étude
- CTA vers l'article en fin de post (lien en bio pour IG, commentaire épinglé pour FB, lien direct pour X)

### Emojis autorisés
- Instagram : 🧠 💾 uniquement
- TikTok : aucun — ton direct, pas d'emojis dans le script
- Facebook : ❌ → pour les corrections de mythes uniquement
- X : emojis de couleur pour les listes (🔵 🟣 🟢 🔴 🟡) — pas d'emojis motivationnels

---

## 1. INSTAGRAM — CARROUSEL 5 SLIDES

### Format
- 5 slides exactement
- Taille : 1080×1350 px (portrait 4:5)
- Maximum 30 mots par slide
- Une seule idée par slide

### Structure obligatoire
```
Slide 1 — Accroche (stat choc ou affirmation contre-intuitive)
Slide 2 — Explication / mécanisme principal
Slide 3 — Mythe déconstruit ou paradoxe
Slide 4 — Solution / leviers pratiques
Slide 5 — CTA (chiffres clés + "Lien en bio" + leveilmental.fr)
```

### Workflow de production validé (ChatGPT Image) — 4 étapes

⚠️ NE PAS utiliser Canva ou HTML seul — le workflow ChatGPT Image produit
un résultat professionnel en 2 passes par slide (fond → overlay texte).

**Étape A — Claude génère (automatique)**
1. 1 prompt global contexte (brand + style pilier + 5 descriptions de fond)
2. 5 prompts texte overlay (un par slide)
3. Caption + 5 hashtags (cap Instagram 2026)

**Étape B — Utilisateur génère les 5 fonds (ChatGPT Image)**
→ Coller le prompt global contexte UNE SEULE FOIS au début d'une session ChatGPT Image
→ ChatGPT génère les 5 fonds en séquence — même session, même cohérence visuelle

**Étape C — Utilisateur ajoute le texte overlay (ChatGPT Image)**
→ Pour chaque slide : uploader le fond généré + coller le prompt overlay correspondant
→ ChatGPT Image ajoute badge, numéro, headline, encadrés, source, footer

**Étape D — Export et post**
→ Télécharger chaque slide finalisée → poster le carrousel avec caption + hashtags

---

### Prompt global contexte — structure type

Le prompt global contexte se compose de :
1. **Intro brand** (identique pour tous les articles)
2. **Règles communes** (identiques pour tous les articles)
3. **5 descriptions de fond** spécifiques à l'article (thème + couleurs dominantes)

**Style des fonds selon le pilier éditorial :**

| Pilier | Style fond | Tons dominants |
|--------|-----------|----------------|
| Neurosciences | dark sci-fi scientific visualization | violet froid + or/teal |
| Psychologie | dark emotional abstract art | violet + rouge/ambre chaud |
| Relations Humaines | dark human connection art | indigo + cyan doux |
| Développement Personnel | dark conceptual illustration | violet + or/émeraude |

**Template intro brand (à adapter selon pilier) :**
```
You are creating background images for Instagram carousel slides about
[sujet article]. Brand: L'Éveil Mental (French neuroscience blog)

Rules for ALL images:
- Very dark background (deep violet #0F0B2E or near-black)
- Main glowing element centered or bottom-centered
- Top 60% of image must stay very dark (white text will overlay there)
- Cinematic atmospheric lighting
- No text, no letters, no UI, no watermark
- Portrait format 4:5 ratio, 1080x1350px
- Style: [style pilier selon tableau ci-dessus]

Slide 1
[Description visuelle du fond — élément thématique unique, position bottom]

Slide 2
[Description visuelle du fond]

Slide 3
[Description visuelle du fond]

Slide 4
[Description visuelle du fond]

Slide 5
[Description visuelle du fond]
```

---

### Prompt texte overlay — structure type

Pour chaque slide, le prompt overlay doit spécifier :
```
Add text overlay on this dark background image.
Top-left: small pill badge purple #7C6FF7, white text → [PILIER] • LEVEILMENTAL.FR
Top-right: number "[0N]" in #7C6FF7, bold large
Eyebrow: "[label section]" small purple uppercase
[Contenu principal : stat géante / headline / cards / questions selon slide]
Source italic tiny purple: "[Auteur, Institution, Année]"
Bottom bar: dark #1E1750 full width, "leveilmental.fr" centered white
```

**Hiérarchie typographique obligatoire dans les overlays :**
- Stat choc / accent : #7C6FF7 ou #ff6b6b (erreur), 80-90px bold
- Headline principale : #FFFFFF bold large
- Sous-texte / descriptions : #A8A3C7 lavender medium
- Encadrés : fond #1E1750, bordure gauche #7C6FF7
- Source : purple italic tiny

---

### Charte visuelle (invariante)
```
Fond : image AI unique par article (portrait 4:5, très sombre)
Couleur accent : #7C6FF7 (violet L'Éveil)
Couleur titres : #FFFFFF (blanc pur)
Couleur sous-texte : #A8A3C7 (gris lavande)
Couleur erreur/mythe : #ff6b6b (rouge-rose)
Encadrés : fond #1E1750, bordure gauche 3px #7C6FF7
Badge haut gauche : pill arrondi #7C6FF7 "[PILIER] • LEVEILMENTAL.FR"
Numéro slide : coin haut droit, #7C6FF7, bold large
Logo bas : barre #1E1750, "leveilmental.fr" centré blanc
```

### Sortie attendue de Claude (Phase 5.3)
Livrer en bloc unique :
1. **Prompt global contexte** (intro brand + règles + 5 descriptions de fond)
2. **5 prompts texte overlay** numérotés (Slide 1 à 5)
3. **Caption** + 5 hashtags (cap Instagram 2026)

### Caption Instagram
```
Structure :
- Ligne 1 : accroche stat choc (reprendre slide 1)
- Lignes 2-3 : contexte (pourquoi c'est important)
- Corps : 3-4 points clés avec → comme puce
- Avant-dernière ligne : CTA "Article complet → lien en bio"
- Dernière ligne : "Sauvegarde ce post pour t'en souvenir. 💾"
- Hashtags : 5 MAX (cap Instagram 2026) — privilégier le niche au volume
  Ex. : 2 broad + 2 niche + 1 brandé (#leveilmental)
```

⚠️ MAJ 2026 — nombre de hashtags par plateforme :
- Instagram / Reels : 5 max (plafond imposé par la plateforme)
- TikTok : 3 à 5 (mélange broad + niche, le niche performe mieux)
- YouTube Shorts : 3 à 5 dans la DESCRIPTION (jamais le titre), #Shorts inclus
- Facebook : aucun hashtag
- Le « dump de 30 hashtags » est mort : peu, mais pertinents.

---

## 2. TIKTOK / REELS — SCRIPT 60 SECONDES

### Format
- Durée cible : 55-65 secondes (ni plus, ni moins)
- Script découpé en blocs chrono : [0-3s] [3-45s] [45-60s]
- Ton : direct, parlé — pas de jargon sans explication immédiate
- Accroches parlées — pas d'intro longue, pas de "bonjour tout le monde"

### Structure obligatoire
```
[0-3s]   ACCROCHE — stat choc ou question contre-intuitive
          Ex : "La dopamine n'est pas l'hormone du bonheur."
          But : stopper le scroll dans les 3 premières secondes

[3-45s]  CONTENU — 3 points clés maximum
          Point 1 : mécanisme principal (10-12 sec)
          Point 2 : mythe déconstruit ou surprise scientifique (10-12 sec)
          Point 3 : implication pratique concrète (10-12 sec)
          Chaque point : 1 phrase de fait + 1 phrase d'exemple quotidien

[45-60s] CTA FINAL
          "L'article complet avec les études est sur leveilmental.fr"
          "Lien dans la bio."
          Option : "Commente [MOT] si tu veux que je t'envoie le résumé."
```

### Règles TikTok
- Jamais de "voici" ou "dans cette vidéo je vais vous expliquer"
- Commencer direct avec la stat ou la question
- Chaque transition entre les points : pause 0,5s + changement de ton
- Citer 1 étude max (auteur, institution, année) — pas de DOI
- Script livré prêt à lire à voix haute (ponctuation = respiration)

### Sortie attendue
Script complet avec timestamps + indication des pauses/emphases :
```
[0-3s]   [ACCROCHE — dire avec conviction]
         "Texte exact..."

[3-15s]  [POINT 1 — ton pédagogique]
         "Texte exact..."

[15-28s] [POINT 2 — ton surpris/révélateur]
         "Texte exact..."

[28-42s] [POINT 3 — ton pratique]
         "Texte exact..."

[42-55s] [CTA — ton direct]
         "Texte exact..."
```

---

## 3. FACEBOOK — POST ÉDUCATIF

### Format
- 600-800 mots
- Paragraphes courts (2-3 lignes max)
- Séparateurs : — — — entre les sections

### Structure obligatoire
```
Lignes 1-2 : Accroche forte (doit donner envie de cliquer "Voir plus")
             → Question ou affirmation contre-intuitive
             → JAMAIS commencer par "Saviez-vous que"

— — —

Corps : Explication du mécanisme principal + étude sourcée (3-5 points développés)

— — —

Section erreurs/mythes : format ❌ / → pour chaque erreur corrigée

— — —

CTA : "→ Lien en commentaire épinglé"
```

### Règles Facebook
- ⚠️ JAMAIS de lien externe dans le post — uniquement en commentaire épinglé
- Image : utiliser la cover de l'article (cohérence blog ↔ réseaux)
- Pas de hashtags sur Facebook

### Commentaire épinglé
```
📖 Article complet ici → [URL article]
[Résumé en 1 ligne percutante reprenant les chiffres clés]
```

---

## 4. X (TWITTER) — THREAD 8 TWEETS

### Format
- 8 tweets exactement
- Chaque tweet : 250 caractères idéalement (280 max)
- Sauts de ligne entre chaque idée (lisibilité mobile)
- Jamais de jargon technique sans explication immédiate

### Structure obligatoire
```
Tweet 1 : Accroche stat choc + "Thread ↓"
          JAMAIS commencer par "Thread :" — commencer par la stat choc

Tweet 2 : Premier mécanisme principal expliqué en 1-2 phrases simples

Tweet 3 : Étude principale citée
          Format : (Auteur, Institution, Année) + résultat clé en 1 ligne

Tweet 4 : Preuves supplémentaires
          Format : liste numérotée, 1 preuve par ligne

Tweet 5 : Récapitulatif intermédiaire
          Format : "En résumé jusqu'ici :" + liste numérotée des N points
                   établis dans les tweets 2-4
                   (chiffre + emoji couleur + 1 ligne max par point)
          But : ancrer les mécanismes avant la transition vers les solutions
                — tweets les plus sauvegardés sur les threads éducatifs
          Terminer par une ligne de transition : "[suite] est encore plus
          contre-intuitif ↓" ou équivalent

Tweet 6 : Mécanisme complémentaire + transition vers les solutions pratiques

Tweet 7 : Leviers pratiques
          Format : liste numérotée avec chiffres (3-5 leviers max)

Tweet 8 : CTA avec lien direct vers l'article
          Optionnel : 1-2 hashtags pertinents si thématique claire
```

### Règles X
- Sources : (Auteur, année) — jamais de DOI, jamais de n=
- INTERDIT : notations statistiques brutes (r=, d=, p<, β=, IC95%) — toujours traduire en langage courant
  Ex : ❌ "r = −0,28" → ✅ "les managers qui écoutent ont des équipes moins épuisées"
  Ex : ❌ "d = 0,85" → ✅ "être bien écouté satisfait plus que recevoir un conseil"
- Lien article uniquement dans le tweet 8
- Pas de hashtags dans les tweets 1-7
- Emojis de couleur autorisés pour les listes : 🔵 🟣 🟢 🔴 🟡
- ⚠️ LIMITE STRICTE : chaque tweet doit faire MAX 220 caractères (marge de sécurité pour compte gratuit)
  Compter mentalement avant de valider : titre + emojis + sauts de ligne = caractères réels
  Tweet 5 (récap) : maximum 4 bullets de 45 chars chacun + titre + transition = ~240 chars total
  Tweet 7 (techniques) : liste courte uniquement — noms des techniques SANS description inline

---

## 5. YOUTUBE SHORTS — TITRE + DESCRIPTION

Le Short réutilise le MP4 vertical (même fichier que TikTok/Reels). Pas de
nouveau montage : seuls le titre, la description et les hashtags changent.

### Format
- **Titre** : 40-70 caractères, le mot-clé/hook en premier. Pas de hashtag dans
  le titre (YouTube les ignore là). Curiosité ou bénéfice clair.
- **Description** : 2-4 phrases. Résumé du mécanisme + 1 chercheur cité
  (auteur, institution), puis le lien article en clair.
- **Hashtags** : 3 à 5 DANS la description, `#Shorts` inclus (les 3 premiers
  s'affichent au-dessus du titre). Jamais de DOI.

### Structure obligatoire
```
Titre : [hook/mot-clé d'abord] — ex: "Ton anxiété n'est PAS ton amygdale"

Description :
[1-2 phrases : le fait + le mécanisme, vulgarisé]
[1 phrase : chercheur + institution]
Article complet : https://leveilmental.fr
#Shorts #[broad] #[niche] #[niche]
```

### Règles YouTube Shorts
- Lien article EN CLAIR dans la description (contrairement à Facebook).
- Le titre est searchable : y mettre le terme que les gens tapent.
- Ton identique aux autres canaux (professeur, tutoiement, sourcé).
- **Langue de la vidéo : Français** (à sélectionner à l'upload).

### Tags YouTube (champ « Tags », séparés par des virgules)
Impact faible sur la visibilité, mais rattachent la chaîne à sa thématique.
Socle À REMETTRE SUR CHAQUE VIDÉO :
```
neurosciences, psychologie, santé mentale, cerveau, neurosciences appliquées, vulgarisation scientifique, développement personnel, bien-être mental, L'Éveil Mental, leveilmental
```
Puis ajouter 5-10 tags spécifiques au sujet de la vidéo (ex. burn-out :
burnout, burn-out, épuisement professionnel, cortisol, stress chronique,
cortex cingulaire, brouillard mental, stress au travail).

---

## PROMPT IMAGE POUR CARROUSEL

Quand les 5 slides sont finalisées en texte, générer le prompt Canva/ChatGPT Image :

```
"Crée un carrousel Instagram de 5 slides au format 1080×1350 px.
Charte visuelle :
- Fond : dégradé #0F0B2E → #1A1145
- Titres : #FFFFFF, Inter Bold 38px
- Accent : #7C6FF7, Inter Regular 21px
- Sous-texte source : Inter Light Italic 14px, #7C6FF7
- Badge haut gauche : pill #7C6FF7, texte blanc "NEUROSCIENCES • LEVEILMENTAL.FR" 12px
- Numéro slide haut droit : #7C6FF7, 32px bold
- Barre logo bas : #1E1750, "leveilmental.fr" centré blanc 16px
- Marges : 60px latérales, 80px haut/bas

Slide 1 : [texte exact]
Slide 2 : [texte exact]
Slide 3 : [texte exact]
Slide 4 : [texte exact]
Slide 5 : [texte exact]"
```

---

## CHECKLIST AVANT LIVRAISON

- [ ] Instagram : 5 slides texte + textes alt + caption + 5 hashtags + prompt image
- [ ] TikTok : script complet avec timestamps + pauses (55-65 sec)
- [ ] Facebook : post 600-800 mots formaté + commentaire épinglé + indication image (cover article)
- [ ] X : 8 tweets formatés avec sauts de ligne + lien dans tweet 8
- [ ] YouTube Shorts : titre (mot-clé d'abord) + description + 3-5 hashtags (#Shorts) + lien
- [ ] Aucune faute d'accent
- [ ] Au moins 1 étude citée par canal (auteur, institution, année)
- [ ] Aucun DOI sur les réseaux
- [ ] CTA adapté par canal (lien en bio / commentaire épinglé / lien direct)
