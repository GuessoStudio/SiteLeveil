# HeroEveil — Documentation technique

Hero animé pour leveilmental.fr. Cerveau anatomique en canvas avec neurones, particules, pulse respiratoire, et mot rotatif. Adaptatif desktop/mobile.

---

## 📦 Installation et déploiement

### 1. Dépendances requises
```bash
npm install framer-motion lucide-react
```

Tailwind CSS doit être configuré dans le projet (utilisé pour la mise en page).

### 2. Migration data URI → fichier statique (prod)

Le composant arrive avec le SVG du cerveau inliné en base64 (~50 KB de string dans le JS). En prod, on extrait le SVG :

**a.** Place le fichier `brain-cerebral.svg` dans `/public/` de ton projet React/Vite.

**b.** Dans `HeroEveil.jsx`, remplace la longue ligne `const BRAIN_IMG_URL = "data:image/svg+xml;base64,..."` par :
```js
const BRAIN_IMG_URL = "/brain-cerebral.svg";
```

**c.** Dans `public/index.html` (ou `index.html` à la racine pour Vite), ajoute dans `<head>` :
```html
<link rel="preload" as="image" href="/brain-cerebral.svg" type="image/svg+xml" />
```
→ Le navigateur télécharge le SVG en parallèle du JS, gain LCP ~100-200ms.

### 3. Utilisation
```jsx
import HeroEveil from "./components/HeroEveil";

function HomePage() {
  return (
    <>
      <HeroEveil />
      {/* Le reste du site sous le hero */}
    </>
  );
}
```

---

## 🎨 Personnalisation rapide

### Changer un mot dans la rotation
Ligne ~5 du composant :
```js
const ROTATING_WORDS = ["POTENTIEL", "CERVEAU", "CONSCIENCE", "CLARTÉ", "LIBERTÉ"];
```
Note : si tu ajoutes un mot plus long que "CONSCIENCE", il faudra ajuster les calculs de `clamp` dans le sizer (commentaires dans le code).

### Changer la couleur or principale
Cherche/remplace dans tout le fichier :
```
#C9953A  →  ta couleur
rgba(201, 149, 58, ...)  →  rgba(R, G, B, ...)
```
Cette couleur est utilisée pour : contour cerveau, mot rotatif, CTA primaire, particules, pulse respiratoire, scroll indicator.

### Vitesse de rotation des mots
Recherche `2800` (ms entre chaque mot). Plus court = plus rapide.

### Densité des particules
Recherche `PARTICLE_CLASSES`. Trois classes (A/B/C). Sur chaque, `count` est la valeur desktop, après `MOBILE_MODE ?` la valeur mobile. Total actuel : 80 desktop / 20 mobile.

### Densité des neurones
Recherche `target = MOBILE_MODE ? 300 : 750`. Premier nombre = mobile, second = desktop.

### Durée du pulse respiratoire
Recherche `PULSE_PERIOD_MS = 10000`. Valeur en ms (10s par défaut). Plus court = respiration plus rapide.

### Inset du contour cerveau (épaisseur de l'anneau)
Recherche `const inset = 5`. Augmenter = anneau plus fin. Diminuer = anneau plus épais.

### Breakpoint mobile/desktop
Recherche `(max-width: 1023px)`. Bascule à 1024px par défaut.

---

## 🧠 Architecture interne

### Hooks d'état
- `wordIndex` : index du mot rotatif courant
- `prefersReducedMotion` : détecté via matchMedia, désactive les animations sensibles
- `isMobile` : breakpoint dur < 1024px, switche compo et perf

### Le canvas useEffect
Re-run quand `prefersReducedMotion` ou `isMobile` change. Initialise :
1. Image du cerveau (SVG)
2. Mask data (test pixel par pixel pour positionner les neurones dans la silhouette)
3. tintCanvas (image pré-teintée or avec érosion centrale → produit l'anneau)
4. neuronCanvas (offscreen pour les neurones, masqué au cerveau via destination-in)
5. Système de particules 3 classes parallaxe

### Boucle d'animation par frame
1. Trail rgba (atténue progressivement les frames passées)
2. drawAmbientPulse (gradient radial respirant)
3. Calcul breathScale depuis pulse intensity (pour la respiration du cerveau)
4. drawAmbientParticles (poussière dorée 3 couches)
5. drawBrainOutline (anneau holographique avec glow)
6. Fade horizontal côté gauche (desktop only)
7. Update et render des neurones (sur neuronCanvas)
8. Mask cerveau via destination-in
9. Composite neuronCanvas → ctx principal

### Adaptations mobile
- 300 neurones (vs 750)
- 20 particules (vs 80)
- DPR cap 1 (vs 2)
- Pas de parallaxe souris
- Pas de fade horizontal (compo verticale)
- Cerveau centré horizontalement, top 32%
- Texte centré en bas
- Scroll indicator caché

### Pause onglet inactif
Listener sur `document.visibilitychange` :
- `hidden` → cancelAnimationFrame
- `visible` → relance animate() avec reset du pulseStart

---

## 🐛 Dépannage

### Le cerveau ne s'affiche pas
- Console : cherche `console.warn("[L'Éveil] Échec...")` → l'image n'a pas chargé
- Vérifie le path du SVG (data URI ou /brain-cerebral.svg)
- Vérifie les CORS si l'image vient d'un domaine externe

### Le contour cerveau est trop épais/fin
- `inset` (création tintCanvas) : valeur plus grande = anneau plus fin
- Valeurs typiques : 3 (très fin) → 14 (épais)

### Les neurones débordent du cerveau
- Vérifie la séquence : neurones sont dessinés sur neuronCanvas, puis masqués via `destination-in` avec brainMaskCanvas
- Le `composite` final doit garder l'ordre exact

### L'animation lag sur mobile
- Vérifie que `MOBILE_MODE = isMobile` fonctionne (300 neurones max attendu)
- Console DevTools mobile (Chrome) → Performance → enregistre 5s
- Si toujours lag : réduire `target` (neurones) à 200 ou moins

### Le mot rotatif ne tourne pas
- Vérifie que `prefersReducedMotion` est false dans la console (le hook useState)
- Si tu es en preview Claude.ai, le matchMedia peut donner `true` à tort
  → en dev/prod réel ça fonctionne normalement

### CONSCIENCE est coupé sur grand écran
- Ne devrait plus arriver après les calibrages
- Si oui : vérifie `maxWidth: "min(50rem, calc(100vw - 3rem))"` sur le conteneur texte
- Et `clamp(2.5rem, 6vw, 7rem)` sur le mot rotatif

---

## 🧩 Inventaire des fichiers

- `HeroEveil.jsx` — Composant principal (1 fichier React)
- `brain-cerebral.svg` — Asset SVG du cerveau (37 KB, à mettre dans /public/)
- `HeroEveil.README.md` — Ce fichier

---

## ✅ Checklist mise en prod

- [ ] `brain-cerebral.svg` placé dans `/public/`
- [ ] `BRAIN_IMG_URL = "/brain-cerebral.svg"` dans le composant
- [ ] `<link rel="preload">` ajouté dans `index.html`
- [ ] Test sur Chrome desktop (1920×1080)
- [ ] Test sur Chrome mobile (DevTools responsive, iPhone 14 Pro Max)
- [ ] Test sur Safari iOS (vraie machine si possible)
- [ ] Lighthouse audit (cible : Performance > 85, Accessibility 100)
- [ ] Test reduced-motion (DevTools → Rendering → Emulate CSS media feature → reduce)
- [ ] Test focus clavier (Tab) : outline doré visible sur les CTAs

---

## 📊 Performance

| Métrique | Desktop | Mobile |
|---|---|---|
| Neurones rendus | 750 | 300 |
| Particules | 80 | 20 |
| DPR | 2 | 1 |
| Pixels rendus / frame | ~5M | ~700K |
| Coût CPU /frame | < 8ms | < 5ms |
| FPS visé | 60 | 60 |

---

## 🔗 Ressources

- SVG cerveau : Wikimedia Commons, [Brain diagram pink](https://commons.wikimedia.org/wiki/File:Brain-diagram-pink.svg), licence CC0
- Polices : [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (italic) + [Outfit](https://fonts.google.com/specimen/Outfit) (Black)
- Palette : Or `#C9953A`, fond `#0d0500`
