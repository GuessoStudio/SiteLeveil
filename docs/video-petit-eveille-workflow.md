# Le Petit Éveillé — Workflow Vidéo TikTok

> Document de cadrage. Référence pour la production de vidéos animées
> mettant en scène la mascotte Le Petit Éveillé.
> Style cible : type **Humain Penseur** (@humain.penseur), adapté à L'Éveil Mental.
> Piliers : neurosciences, développement personnel, psychologie.

---

## 1. Décisions actées (15 juin 2026)

| Sujet | Décision | Implication production |
|-------|----------|------------------------|
| **Casting** | **Solo** pour le moment. **Duo** prévu plus tard (un Éveillé qui explique + un qui réagit). | Construire le système de poses pour 1 perso, mais penser l'architecture pour dupliquer un 2ᵉ perso sans tout refaire. |
| **Animation** | **Poses qui s'enchaînent** (style Humain Penseur). PAS de mouvement fluide continu. | Le perso reste planté sur le sol et change de pose/émotion aux moments clés du script. Pose = état figé + petite transition douce. |
| **Voix off** | **Pas encore décidée.** Piste privilégiée : **clonage de la voix de Guesso** (ElevenLabs ou équivalent). | Concevoir le timeline pour qu'il puisse être piloté soit par voix réelle, soit par TTS. La voix arrive en post (CapCut) dans un 1er temps. |

---

## 2. Référence visuelle : pourquoi ça marche

Format Humain Penseur décortiqué :

- Les personnages **ne bougent quasiment pas**. Ils changent de **pose fixe** aux moments forts.
- Le vrai effet vient de :
  1. **La scène** : fond bleu nuit dégradé + un « sol » (ligne d'horizon) + vignette sombre sur les bords = théâtre, profondeur.
  2. **Gros titre blanc bold** en haut qui annonce le thème.
  3. **Voix off + sous-titres** qui portent le contenu.
  4. **Le timing** : la pose change pile quand la voix dit un truc fort.
- Conclusion : **90 % de l'effet = mise en scène + voix + montage. 10 % = animation.**

### Avantage unique du Petit Éveillé

Le mascot n'a pas de visage classique : **son esprit est visible** (spirales tête/torse, halo, bulles).
Ses émotions se montrent autrement, ce qui est parfait pour un compte neurosciences.
Aucun compte concurrent ne peut copier cette signature.

---

## 3. Vocabulaire d'émotions du Petit Éveillé

Le mascot n'a pas de visage. Ses émotions passent donc par une combinaison de
**canaux d'expression** déjà présents dans le SVG master. C'est sa signature :
son mental est littéralement visible, ce qu'aucun concurrent ne peut copier.

### 3.1 Les canaux d'expression (les « curseurs » disponibles)

| Canal | ID(s) SVG | Plage de jeu |
|-------|-----------|--------------|
| Vitesse spirale tête | `head-spiral` | lente ↔ rapide (et arrêt) |
| Vitesse spirale torse | `torso-spiral` | lente ↔ rapide (et arrêt) |
| Sens de rotation | `head-spiral` / `torso-spiral` | horaire ↔ antihoraire (inversion = bascule mentale) |
| Intensité halo tête | `head-glow` | éteint → faible → fort → pulse |
| Intensité halo torse | `torso-glow` | éteint → faible → fort → pulse |
| Bulles tête | `bubbles-head` | nombre, vitesse de montée, ordre/chaos |
| Bulles torse | `bubbles-torso` | nombre, montée |
| Respiration | `#character` (breathe) | ample/lente ↔ courte/rapide ↔ figée |
| Inclinaison du corps (lean) | `#character` | avant (insistance) ↔ arrière (recul) ↔ tilt latéral |
| Rebond / tremblement | `#character` | bounce (joie) / shake (peur, colère, surcharge) |
| Échelle globale | `#character` | léger zoom (emphase) ↔ recroquevillement |
| Bras | `left-arm` / `right-arm` | voir §3.4 (poses) |
| Mode global | classe sur `#petit-eveille` | `mode-emotions` / `mode-neuro` / `mode-eveil` |

> Une émotion = une **recette** combinant plusieurs curseurs. Exemple : la peur =
> spirales rapides + halo qui clignote + shake + lean arrière + respiration courte.

### 3.2 États cognitifs (cœur du contenu neurosciences)

| État | Recette (combinaison de canaux) |
|------|----------------------------------|
| Réflexion intense | spirale tête rapide + bulles qui montent en ordre + lean avant léger |
| Concentration / focus | spirale tête régulière + halo tête stable et fort + bulles rares + corps figé |
| Curiosité | spirale tête qui accélère doucement + halo qui monte + tilt de tête |
| Doute / incertitude | spirale tête qui ralentit puis repart + 1-2 bulles hésitantes + lean arrière léger |
| Confusion / perte | bulles désordonnées et nombreuses au-dessus de la tête + spirale irrégulière |
| Surcharge mentale (overwhelm) | spirales très rapides + bulles en excès + léger shake + halo saturé |
| Révélation / insight (« aha ») | halo tête qui pulse fort d'un coup + spirale qui s'emballe une seconde + petit bounce |
| Compréhension / clic mental | spirale tête qui se stabilise net + 1 pulse de halo + retour au calme |
| Rumination (boucle obsessionnelle) | spirale tête qui tourne en boucle serrée + mêmes bulles qui remontent en cycle |
| Distraction / attention fragmentée | spirale tête qui change de sens par à-coups + bulles éparses qui partent sur les côtés |
| Mémorisation / encodage | bulles tête qui descendent vers le torse (transfert) + halo torse qui monte |

### 3.3 États émotionnels et énergétiques

| État | Recette |
|------|---------|
| Calme / sérénité | spirales lentes + respiration ample et lente + halos doux |
| Joie / enthousiasme | bounce léger + halos vifs + spirales rapides + lean avant |
| Émotion / tendresse (cœur) | `mode-emotions` : spirale torse s'allume + halo torse qui pulse doucement |
| Empathie / connexion | halo torse stable et chaud + lean avant léger (vers l'autre/le spectateur) |
| Stress / anxiété | spirales rapides irrégulières + respiration courte + micro-shake |
| Peur / alerte | halo qui clignote + shake + lean arrière + spirales emballées |
| Tristesse / abattement | spirales très lentes + halos faibles + lean avant + épaules basses + échelle réduite |
| Colère / frustration | shake sec + halo rouge/saturé + spirale torse rapide + lean avant marqué |
| Fierté / confiance | corps redressé + halos forts et stables + respiration ample + bras ouverts |
| Honte / repli (syndrome imposteur) | recroquevillement (scale ↓) + halos faibles + bras croisés + lean arrière |
| Soulagement | longue respiration + halos qui redescendent en douceur + relâchement du lean |
| Fatigue / épuisement | spirales qui ralentissent jusqu'à presque s'arrêter + halos vacillants + lean avant lourd |
| Énergie / réveil | spirales qui accélèrent depuis l'arrêt + halos qui montent + petit bounce |
| Endormissement / sommeil | spirales qui s'arrêtent + halos qui s'éteignent + respiration très lente |
| Éveil complet (signature) | `mode-eveil` : tête + torse allumés, spirales synchronisées, halos pleins |

### 3.4 États narratifs et gestuels (storytelling face caméra)

| Intention | Recette (surtout bras + lean, voir poses §3.5) |
|-----------|------------------------------------------------|
| Salutation / accueil | entrée depuis le bord + un bras qui se lève |
| Présentation (montre un élément) | pose `point` vers le titre ou un visuel + halo stable |
| Questionnement (interpelle le spectateur) | pose `shrug` + bulles tête + tilt |
| Affirmation / insistance | lean avant + pose `point` vers le spectateur + halo qui pulse sur le mot clé |
| Négation / correction de mythe | shake horizontal léger + bras croisés (`mode-emotions` off) |
| Approbation / validation | petit bounce + halo qui pulse + bras ouverts |
| Conclusion / synthèse | retour `idle` + `mode-eveil` + respiration ample |
| Sortie de scène | pose `point`/`open` puis glisse vers le bord |

### 3.5 Poses corporelles à construire (vocabulaire cible)

- **idle** : planté, bras le long du corps, respiration (état actuel)
- **point** : un bras qui pointe (vers le titre, vers le spectateur, vers l'autre perso)
- **open** : bras ouverts (révélation, accueil)
- **think** : un bras replié vers la tête (réflexion)
- **shrug** : épaules haussées (doute, « je sais pas »)
- **lean** : corps penché en avant (insistance) ou en arrière (recul/surprise)
- **enter / exit** : glisse depuis le bord (entrée/sortie de scène)

> Chaque pose = position figée des `#left-arm` / `#right-arm` (+ léger lean du `#character`).
> Transition douce entre poses (~0,3 s) plutôt qu'animation continue.

---

## 4. La scène : se différencier de Humain Penseur

**Le risque réel** : fond bleu nuit + sol + gros titre blanc = c'est LE format
Humain Penseur. Reproduit tel quel, on passe pour un clone.

**Le bon constat** : ce format est un *genre* (comme « fond vert » au cinéma),
pas une propriété. Des dizaines de comptes l'utilisent. Ce qui distingue, ce
n'est pas d'éviter le format (il marche, il est prouvé, lisible sur mobile),
c'est de **l'habiter avec une identité forte**. Et l'identité, on l'a déjà.

### Ce qui nous rend reconnaissables (à exploiter)

| Levier | Humain Penseur | Le Petit Éveillé |
|--------|----------------|------------------|
| Personnage | bonhomme blanc plat, opaque | mascotte **lumineuse** (spirales + halos) |
| Couleur | bleu/gris générique | **violet L'Éveil `#7C6FF7` sur `#0F0B2E`** (notre charte) |
| Le « sol » | simple ligne grise | horizon violet qui **réagit à l'état mental** |
| Le mental | montré par le visage (`!?`) | montré par les spirales = **invisible chez les autres** |

### Recommandations concrètes pour la scène (à valider en Phase 2)

1. **S'approprier la couleur** : fond dégradé `#0F0B2E → #1A1145` (notre charte
   réseaux), accents `#7C6FF7`. On *possède* le violet, on ne fait pas du bleu Humain Penseur.
2. **Le sol lumineux** : pas une ligne grise plate, mais un horizon qui **émet une
   lueur violette**. Comme le perso est lumineux, il projette un **reflet / halo au
   sol** sous ses pieds. Humain Penseur ne peut pas faire ça (perso opaque). C'est
   notre signature gratuite.
3. **Fond réactif à l'état** : la teinte ambiante glisse selon le mode
   (`mode-neuro` = froid violet/teal, `mode-emotions` = chaud rouge/ambre,
   `mode-eveil` = équilibré). Le décor *raconte* l'émotion avec le perso.
4. **Champ de particules / bulles ambiantes** en fond très discret, qui s'animent
   doucement (réseau neuronal lointain). Donne de la profondeur sans distraire.
5. **Vignette + profondeur** : coins assombris pour concentrer l'œil au centre,
   comme la réf, mais en violet.
6. **Typo de marque** pour les titres (police L'Éveil, pas l'Helvetica bold générique).

> Verdict : on garde la *structure* (fond sombre + sol + titre + voix off) parce
> qu'elle est efficace et lisible, mais le **perso lumineux + le violet de marque +
> le sol qui réagit** suffisent largement à ne pas ressembler à un clone.
> La ressemblance de format est même un atout : on surfe sur un code que l'audience
> connaît déjà, avec une patte qui nous est propre.

---

## 5. Workflow cible

```
Article blog  →  Claude Code génère (Phase 5.3 du /article) :
   • le script TikTok timestampé (déjà le cas — voir repurposing.md §2)
   • LA COUCHE SCÈNE : pour chaque bloc, [titre] + [pose] + [émotion] + [mode]
        ↓
La "scène" HTML joue le script (perso + poses + titres) en plein écran 1080×1920
        ↓
OBS enregistre l'écran (ou plus tard : rendu headless 1 commande)
        ↓
CapCut : voix off (voix clonée) + sous-titres + musique
        ↓
TikTok
```

**Valeur clé** : un seul prompt sort le script ET la mise en scène animée.

---

## 6. Intégration au workflow article → script (les balises cue)

### 6.1 Où ça se branche dans le process existant

Le script TikTok est déjà produit en **Phase 5.3 du `/article`**
(`/.claude/commands/article.md`, étape 5.3 point 2), en suivant
`.claude/rules/repurposing.md` §2. Format actuel, timestampé :

```
[0-3s]   ACCROCHE
[3-45s]  CONTENU (3 points)
[45-60s] CTA FINAL
```

La couche scène **ne remplace rien** : elle **ajoute** à chaque bloc déjà existant
une ligne de mise en scène. Le texte voix off reste tel quel.

### 6.2 Format des balises cue (brouillon, à figer en Phase 3)

Chaque bloc du script reçoit une ligne `>> scene:` juste sous le texte :

```
[0-3s]   [ACCROCHE — dire avec conviction]
         "La dopamine n'est pas l'hormone du bonheur."
         >> scene: titre="LA DOPAMINE" | pose=point | emotion=reveal | mode=neuro

[3-15s]  [POINT 1 — ton pédagogique]
         "C'est l'hormone de la motivation, pas de la récompense..."
         >> scene: pose=think | emotion=focus | mode=neuro

[15-28s] [POINT 2 — ton surpris/révélateur]
         "Ton cerveau en produit AVANT la récompense, pas après."
         >> scene: pose=open | emotion=insight | mode=neuro

[28-42s] [POINT 3 — ton pratique]
         "Donc la motivation vient de l'action, pas l'inverse."
         >> scene: pose=point | emotion=affirmation | mode=eveil

[42-55s] [CTA — ton direct]
         "L'article complet est sur leveilmental.fr. Lien en bio."
         >> scene: pose=open | emotion=calme | mode=eveil
```

Vocabulaire autorisé dans les balises :
- `titre=` : texte du gros titre à l'écran (optionnel, surtout sur l'accroche)
- `pose=` : une des poses du §3.5 (`idle`, `point`, `open`, `think`, `shrug`, `lean`, `enter`, `exit`)
- `emotion=` : un état des §3.2 / §3.3 / §3.4 (`focus`, `reveal`, `insight`, `confusion`, `calme`, `affirmation`…)
- `mode=` : `emotions` / `neuro` / `eveil`

### 6.3 Comment l'expliquer à Claude Code (instruction à ajouter au /article)

Une fois le système de poses construit (Phase 1) et le format figé, ajouter ceci
à `repurposing.md` §2 (TikTok) et à l'étape 5.3 du `/article` :

> Après avoir écrit le script TikTok timestampé, ajouter sous chaque bloc une ligne
> `>> scene:` qui met en scène Le Petit Éveillé. Régler `pose`, `emotion` et `mode`
> selon le ton du bloc (réflexion → `think/focus/neuro`, révélation → `open/insight`,
> émotion humaine → `mode=emotions`, conclusion → `mode=eveil`). Mettre un `titre=`
> uniquement sur l'accroche et les transitions fortes. Se référer au vocabulaire
> complet dans `docs/video-petit-eveille-workflow.md` §3.

> ⚠️ À FAIRE quand Phases 1-3 validées : reporter le format cue définitif dans
> `repurposing.md` §2 et dans l'étape 5.3 du `/article`, pour que la génération
> soit automatique à chaque nouvel article.

---

## 6 bis. Backlog poses & émotions (à faire plus tard)

Validé sur le principe, à implémenter quand le besoin se confirmera en montant
de vraies vidéos (ne pas sur-construire avant) :

**Poses ciblées par pilier**
- [ ] **Pointer vers sa propre tête** (neurosciences) : le perso désigne sa
      spirale-cognition. Signature unique, idéal quand on parle du cerveau.
- [ ] **Main sur le plexus / le cœur** (psychologie) : le bras se pose sur la
      spirale du torse. Lien direct avec « émotions = spirale du ventre ».
- [ ] **Facepalm (main sur le front)** : « l'erreur que tout le monde fait ».

**Émotions — améliorer plutôt qu'ajouter**
- [ ] **Zoom de spirale** : la spirale qui se resserre (concentration) ou se
      déploie (idée qui s'ouvre), en plus de la rotation. Le geste le plus *neuro*.
- [ ] **Inversion du sens de rotation** sur un mot clé = « changer d'avis ».
- [ ] **Curiosité** : spirale qui accélère doucement depuis le calme + halo qui
      monte (état d'accroche de début de vidéo).

> Implémentation poses : ajouter l'angle/le tracé dans `tools/petit-eveille/generate-poses.mjs`
> (pour tête/cœur/facepalm il faudra des bras pliés à 2 segments, donc une
> capsule supplémentaire « avant-bras » dans le générateur).
> Le zoom de spirale = une keyframe `scale` combinée à la rotation sur `#head-spiral`.

---

## 7. Roadmap de construction (ordre logique)

> Le goulot d'étranglement n'est PAS le choix OBS vs Remotion.
> C'est que le mascot ne sait faire qu'une seule chose (idle).
> On construit dans cet ordre :

1. **Phase 1 — Système de poses + émotions**
   Donner à Éveillé son vocabulaire (bras articulés, lean, états spirales/halo/bulles).
   Livrable : HTML de test avec boutons pour déclencher chaque pose/émotion.

2. **Phase 2 — La scène (le théâtre)**
   Fond violet/bleu nuit dégradé + sol (ligne d'horizon) + vignette + slot titre + zone sous-titres.
   Format vertical 1080×1920 (9:16 TikTok).

3. **Phase 3 — Timeline piloté par script**
   Lecteur JS qui lit les balises de cue → enchaîne poses + titres + émotions dans le temps.
   Définir le format de balises exact (voir §6).

4. **Phase 4 — Rendu**
   - Court terme : **OBS** (source navigateur, record écran 1080×1920) sous Windows.
   - Long terme : **Remotion** (React/TS, stack maison) → rendu MP4 en une commande, automatisable.

5. **Phase 5 — Duo** (plus tard)
   Dupliquer un 2ᵉ Éveillé, gérer positions gauche/droite et dialogue.

6. **Phase 6 — Voix**
   Clonage voix Guesso (ElevenLabs ou équivalent) → synchro avec le timeline.

---

## 8. Contraintes techniques

- **OS** : Windows (OBS natif, source « Navigateur » locale).
- **Base** : `public/petit-eveille-statique.html` (SVG master inline, déjà structuré pour l'animation : IDs uniques, groupes `head-group`/`torso-group`/`arms-group`/`legs-group`, 3 modes CSS, démo d'animation).
- **Pas de `<use>`, pas de duplication** : chaque élément animable indépendamment (déjà le cas).
- Format vidéo final : **1080×1920, 9:16**.

---

## 9. État d'avancement

- [x] SVG master du personnage (statique + 3 modes + démo anim) — `public/petit-eveille-statique.html`
- [x] Décisions de cadrage (ce document)
- [~] Phase 1 — Système de poses + émotions — **banc d'essai livré, en attente de validation** : `public/petit-eveille-poses.html`
      (8 poses, 13 émotions, 3 modes, bulles, entrée/sortie ; 3 canaux qui se combinent)
      v4 (solution finale) : le corps est une **silhouette unifiée** par pose, obtenue par
      **fusion booléenne** (tête + torse + bras + jambes). Plus aucun trait superposé aux
      articulations — le problème des bras est réglé par construction. Spirales/halos/bulles
      posés par-dessus. Passage de pose = cut net (style Humain Penseur). Lean = inclinaison.
      Générateur reproductible : `tools/petit-eveille/generate-poses.mjs` (dép. dev `polygon-clipping`).
      8 poses : idle, pointer, ouvrir, réfléchir, hausser, pencher, bras croisés, saluer.
      Historique des tentatives (rotation d'un bras figé, tracés dessinés, capsules+cache)
      → toutes recalées : un monoligne creux ne supporte pas des pièces séparées qui se
      chevauchent. La fusion est la seule voie propre en code.
- [~] Phase 2 — La scène — **banc d'essai livré, en attente de validation** : `public/petit-eveille-scene.html`
      Décor TikTok 9:16 : fond violet nuit (charte `#140d36→#0a0720`), sol lumineux +
      halo au sol sous les pieds (perso lumineux = signature), reflet, particules
      d'ambiance, vignette, teinte réactive au mode (neuro froid / émotions chaud /
      éveil équilibré), emplacements titre + sous-titre éditables. Réutilise le
      personnage (silhouette + spirales + poses + émotions) du fichier poses.
      Build reproductible : `tools/petit-eveille/build-scene.mjs`.
      Inclut un **lecteur de démo** : 3 mini-scripts auto-joués (neuro / psycho / dév perso)
      qui enchaînent titre + pose + émotion + mode dans le temps — amorce concrète de la Phase 3.
- [ ] Phase 3 — Timeline piloté par script
- [ ] Phase 4 — Rendu (OBS puis Remotion)
- [ ] Phase 5 — Duo
- [ ] Phase 6 — Voix clonée
