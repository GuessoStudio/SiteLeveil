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

Émotions exprimées SANS visage, via les éléments déjà présents dans le SVG master :

| État / émotion | Comment on le montre |
|----------------|----------------------|
| Réflexion intense | spirale tête tourne plus vite + bulles qui montent (`bubbles-head`) |
| Calme / apaisé | spirale lente + respiration ample (`#character` breathe) |
| Surprise / révélation | halo (`head-glow`) qui pulse fort d'un coup |
| Confusion | bulles désordonnées au-dessus de la tête |
| Émotion / cœur | `mode-emotions` : spirale torse s'allume (`torso-spiral` + `torso-glow`) |
| Concentration mentale | `mode-neuro` : spirale tête dominante |
| Éveil complet | `mode-eveil` : tête + torse allumés |

### Poses corporelles à construire (vocabulaire cible)

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

## 4. Workflow cible

```
Article blog  →  Claude Code génère :
   • le script TikTok (déjà le cas)
   • les balises de scène : [titre] + [pose] + [émotion] + [timing]
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

### Format des balises de cue (brouillon, à figer en Phase 3)

```
[TITRE] La tendresse
[00:00] pose:idle      | mode:eveil     | "Texte voix off..."
[00:03] pose:point     | emotion:reveal | "Le moment fort..."
[00:08] pose:think     | mode:neuro     | "La partie scientifique..."
[00:15] pose:open      | mode:emotions  | "La conclusion..."
```

---

## 5. Roadmap de construction (ordre logique)

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
   Définir le format de balises exact (voir §4).

4. **Phase 4 — Rendu**
   - Court terme : **OBS** (source navigateur, record écran 1080×1920) sous Windows.
   - Long terme : **Remotion** (React/TS, stack maison) → rendu MP4 en une commande, automatisable.

5. **Phase 5 — Duo** (plus tard)
   Dupliquer un 2ᵉ Éveillé, gérer positions gauche/droite et dialogue.

6. **Phase 6 — Voix**
   Clonage voix Guesso (ElevenLabs ou équivalent) → synchro avec le timeline.

---

## 6. Contraintes techniques

- **OS** : Windows (OBS natif, source « Navigateur » locale).
- **Base** : `public/petit-eveille-statique.html` (SVG master inline, déjà structuré pour l'animation : IDs uniques, groupes `head-group`/`torso-group`/`arms-group`/`legs-group`, 3 modes CSS, démo d'animation).
- **Pas de `<use>`, pas de duplication** : chaque élément animable indépendamment (déjà le cas).
- Format vidéo final : **1080×1920, 9:16**.

---

## 7. État d'avancement

- [x] SVG master du personnage (statique + 3 modes + démo anim) — `public/petit-eveille-statique.html`
- [x] Décisions de cadrage (ce document)
- [ ] Phase 1 — Système de poses + émotions
- [ ] Phase 2 — La scène
- [ ] Phase 3 — Timeline piloté par script
- [ ] Phase 4 — Rendu (OBS puis Remotion)
- [ ] Phase 5 — Duo
- [ ] Phase 6 — Voix clonée
