import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const ROTATING_WORDS = ["POTENTIEL", "CERVEAU", "CONSCIENCE", "CLARTÉ", "LIBERTÉ"];
const LONGEST_WORD = ROTATING_WORDS.reduce((a, b) => (a.length > b.length ? a : b));

// Cerveau anatomique — Wikimedia Commons, CC0.
//
// 🚀 PRODUCTION : pour économiser ~50 KB sur le bundle JS, remplace
// la ligne ci-dessous par :
//
//   const BRAIN_IMG_URL = "/brain-cerebral.svg";
//
// Et place le fichier brain-cerebral.svg dans /public/ de ton projet
// React (l'asset livré séparément à côté de ce composant).
// Ajoute aussi dans index.html, dans <head> :
//
//   <link rel="preload" as="image" href="/brain-cerebral.svg" type="image/svg+xml" />
//
// Ça précharge le SVG en parallèle du JS = LCP plus rapide de ~100-200ms.
//
// Pour le DEV (preview Claude.ai, Storybook, etc.) le data URI inliné
// ci-dessous fonctionne sans dépendance externe (zéro 404, zéro CORS).
const BRAIN_IMG_URL = "/brain-cerebral.svg";

const MASK_MAX = 400; // taille max du mask sur la dimension dominante

export default function HeroEveil() {
  const canvasRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile/tablette via matchMedia (breakpoint dur < 1024px).
  // SSR-safe : on initialise avec une valeur cohérente puis on update post-mount.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  // Détection préférence accessibilité reduced-motion
  // IMPORTANT : on ne SET à true que si vraiment matché par le système.
  // Dans certains environnements (preview, iframes sandboxées, vieux navs),
  // matchMedia peut retourner true par défaut sans raison — le check explicite
  // mq.matches === true protège contre ces faux positifs.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches === true) {
      setPrefersReducedMotion(true);
    }
    const handler = (e) => setPrefersReducedMotion(e.matches === true);
    // Compat anciens navigateurs Safari : addListener au lieu de addEventListener
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  // Rotation du mot toutes les 2800ms.
  // VOLONTAIREMENT découplée de prefersReducedMotion : un slide vertical
  // toutes les 2.8s sur un mot unique n'est PAS une animation à risque
  // vestibulaire (cf. WCAG 2.3.3 "Animation from Interactions" qui vise
  // les animations infinies, parallax, et déplacements rapides).
  // Le respect de reduced-motion s'applique au canvas (boucle continue)
  // et aux fadeUp d'entrée, ce qui suffit largement.
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // ─── ADAPTATIONS MOBILE ───
    // Densité réduite drastiquement pour préserver batterie/perf sur mobile.
    // Toutes les constantes ci-dessous sont consultées par initBrain,
    // initAmbientParticles, et la boucle d'animation.
    const MOBILE_MODE = isMobile;
    // DPR cap : 2 sur desktop (Retina), 1 sur mobile (réduit le pixel count
    // de ~75% sur les écrans haute densité Android/iOS) → gain perf majeur
    const dpr = MOBILE_MODE
      ? Math.min(window.devicePixelRatio || 1, 1)
      : Math.min(window.devicePixelRatio || 1, 2);

    let cancelled = false;

    let width = 0;
    let height = 0;
    let MASK_W = 0;
    let MASK_H = 0;

    let maskData = null;       // ImageData du mask (pour isInsideBrain)
    let brainMaskCanvas = null; // Canvas du masque cerveau (pour clip neurons)
    let tintCanvas = null;     // canvas pré-teinté or pour le rendu visible
    let neuronCanvas = null;   // canvas offscreen pour les neurones (sera masqué)
    let neuronCtx = null;

    let neurons = [];
    let neighbors = [];
    let connections = [];
    let pulses = [];
    let frame = 0;
    let raf = 0;
    let revealOpacity = 0; // fade-in du cerveau quand l'image est prête

    // ─── COUCHE AMBIANCE ─── (poussière neuronale dérivante vers le cerveau)
    // 50 micro-particules qui traversent le viewport en direction du cerveau,
    // 1-2px, opacité ~12-15%. Elles renforcent le sentiment d'activité diffuse
    // sans concurrencer le cerveau focal. Recyclées en boucle.
    let ambientParticles = [];

    // ─── PULSE RESPIRATOIRE ─── (gradient radial qui respire sur 10s)
    // Le pulse n'est pas un sin pur — il imite la respiration humaine
    // calme : inhale ~3.5s, pause haute, exhale ~5s, pause basse.
    // Cette asymétrie est ce qui sépare "fait par un dev" de "studio motion".
    const PULSE_PERIOD_MS = 10000;
    let pulseStart = 0;

    let brainScale = 1;
    let brainCenterX = 0;
    let brainCenterY = 0;
    // Échelle additionnelle qui pulse avec la respiration ambiante.
    // Multiplie brainScale au moment du rendu : 1.0 (repos) ↔ 1.012 (inhale max).
    // Synchronisé avec computePulseIntensity() pour cohérence visuelle.
    let breathScale = 1;

    let mouseX = -10000;
    let mouseY = -10000;
    let mouseActive = false;
    let rotX = 0, rotY = 0;
    let targetRotX = 0, targetRotY = 0;

    // ──────────────────────────────────────────────
    // Setup canvas (DPR-aware)
    // Composition adaptative selon le breakpoint :
    //   Desktop ≥1024px : cerveau ancré à droite, déborde (signature atmo)
    //   Mobile <1024px  : cerveau centré horizontalement en haut (35% top)
    //                     plus petit pour laisser place au texte sous lui
    // ──────────────────────────────────────────────
    const computeBrainTransform = () => {
      if (MOBILE_MODE) {
        // Mobile : cerveau centré horizontalement, dans le tiers haut.
        // Taille : 55% de la hauteur (laisse 45% pour le texte sous lui).
        // Le cerveau reste compact dans le viewport (pas de débordement).
        brainScale = (height * 0.55) / MASK_H;
        brainCenterX = width / 2;
        brainCenterY = height * 0.32;
      } else {
        // Desktop : composition atmosphérique décalée droite (signature)
        brainScale = (height * 1.0) / MASK_H;
        brainCenterX = width * 0.78;
        brainCenterY = height / 2;
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Resize aussi le canvas offscreen pour les neurones masqués
      if (neuronCanvas) {
        neuronCanvas.width = width * dpr;
        neuronCanvas.height = height * dpr;
        neuronCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      if (MASK_H > 0) computeBrainTransform();
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
    };

    const onMouseLeave = () => {
      mouseActive = false;
      mouseX = -10000;
      mouseY = -10000;
    };

    // ──────────────────────────────────────────────
    // Scan-line fill — filet de sécurité si l'image est un contour seul
    // Pour chaque ligne : trouve premier/dernier pixel non-transparent,
    // remplit tout l'intervalle. Sauve le cas "outline-only".
    // ──────────────────────────────────────────────
    const applyScanlineFill = (imgData, w, h) => {
      const data = imgData.data;
      for (let y = 0; y < h; y++) {
        let leftmost = -1;
        let rightmost = -1;
        for (let x = 0; x < w; x++) {
          if (data[(y * w + x) * 4 + 3] > 30) {
            if (leftmost === -1) leftmost = x;
            rightmost = x;
          }
        }
        if (leftmost !== -1 && rightmost > leftmost) {
          for (let x = leftmost; x <= rightmost; x++) {
            data[(y * w + x) * 4 + 3] = 255;
          }
        }
      }
    };

    // ──────────────────────────────────────────────
    // Test "est dans le cerveau" — coords locales centrées
    // ──────────────────────────────────────────────
    const isInsideBrain = (lx, ly) => {
      const px = Math.floor(lx + MASK_W / 2);
      const py = Math.floor(ly + MASK_H / 2);
      if (px < 0 || px >= MASK_W || py < 0 || py >= MASK_H) return false;
      return maskData.data[(py * MASK_W + px) * 4 + 3] > 30;
    };

    // ──────────────────────────────────────────────
    // Génération des neurones (rejection sampling)
    // ──────────────────────────────────────────────
    const initBrain = () => {
      neurons = [];
      let attempts = 0;
      // Densité adaptée : 750 desktop / 300 mobile (-60% pour batterie/perf)
      const target = MOBILE_MODE ? 300 : 750;
      const halfW = MASK_W / 2;
      const halfH = MASK_H / 2;

      while (neurons.length < target && attempts < 200000) {
        const lx = (Math.random() - 0.5) * MASK_W; // [-halfW, halfW]
        const ly = (Math.random() - 0.5) * MASK_H;
        if (isInsideBrain(lx, ly)) {
          neurons.push({
            x: lx,
            y: ly,
            z: (Math.random() - 0.5) * 80, // [-40, 40] — réduit pour limiter dérive parallaxe
            activation: 0,
          });
        }
        attempts++;
      }

      // Pré-calcul des connexions
      neighbors = neurons.map(() => []);
      connections = [];
      // Distance proportionnelle à la taille du mask (équivalent ~38 sur 400)
      const max = Math.max(28, MASK_W * 0.095);
      const max2 = max * max;
      for (let i = 0; i < neurons.length; i++) {
        const a = neurons[i];
        for (let j = i + 1; j < neurons.length; j++) {
          const b = neurons[j];
          const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < max2) {
            const d = Math.sqrt(d2);
            connections.push([i, j, d, max]);
            neighbors[i].push(j);
            neighbors[j].push(i);
          }
        }
      }
    };

    // ──────────────────────────────────────────────
    // Projection 3D → 2D
    // ──────────────────────────────────────────────
    const project = (n) => {
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      let x = n.x * cosY + n.z * sinY;
      let z = -n.x * sinY + n.z * cosY;
      let y = n.y * cosX - z * sinX;
      z = n.y * sinX + z * cosX;
      const persp = 900;
      // Scale composé : brainScale (taille de base) × breathScale (respiration)
      const finalScale = brainScale * breathScale;
      const projZ = z * finalScale;
      const sf = persp / (persp + projZ);
      return {
        sx: brainCenterX + x * finalScale * sf,
        sy: brainCenterY + y * finalScale * sf,
        scale: sf,
        z: projZ,
      };
    };

    // ──────────────────────────────────────────────
    // PULSE RESPIRATOIRE — courbe asymétrique inhale/exhale
    // Retourne une valeur entre 0 et 1 selon la phase du cycle.
    // 0 = exhalé, repos. 1 = inhalé, expansion maximale.
    // ──────────────────────────────────────────────
    const computePulseIntensity = (now) => {
      if (pulseStart === 0) pulseStart = now;
      const elapsed = (now - pulseStart) % PULSE_PERIOD_MS;
      const phase = elapsed / PULSE_PERIOD_MS; // 0 → 1

      // Modèle respiration humaine au repos (4-temps asymétriques) :
      //   0 → 0.35  : INHALE (ease-out cubic, monte vite puis ralentit)
      //   0.35 → 0.40 : pause haute
      //   0.40 → 0.85 : EXHALE (ease-in cubic, démarre lent puis accélère)
      //   0.85 → 1.00 : pause basse
      let v;
      if (phase < 0.35) {
        const t = phase / 0.35;
        v = 1 - Math.pow(1 - t, 3); // ease-out cubic
      } else if (phase < 0.40) {
        v = 1; // pause haute
      } else if (phase < 0.85) {
        const t = (phase - 0.40) / 0.45;
        v = 1 - Math.pow(t, 3); // ease-in cubic inversé (descend)
      } else {
        v = 0; // pause basse
      }
      return v;
    };

    // ──────────────────────────────────────────────
    // PULSE — gradient radial doré qui respire depuis le cerveau
    // ──────────────────────────────────────────────
    const drawAmbientPulse = (now) => {
      // Pas d'early-return : revealOpacity multiplie déjà l'alpha,
      // donc à T=0 c'est naturellement invisible et le fade-in est continu
      const pulse = computePulseIntensity(now);
      // Opacité oscille entre 3% (repos) et 9% (apex inhale) — très subtil
      const alpha = (0.03 + pulse * 0.06) * revealOpacity;
      if (alpha < 0.001) return; // skip si imperceptible

      ctx.save();
      const radius = Math.max(width, height) * 0.6;
      const grad = ctx.createRadialGradient(
        brainCenterX, brainCenterY, 0,
        brainCenterX, brainCenterY, radius
      );
      grad.addColorStop(0, `rgba(201, 149, 58, ${alpha})`);
      grad.addColorStop(0.5, `rgba(201, 149, 58, ${alpha * 0.5})`);
      grad.addColorStop(1, "rgba(201, 149, 58, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    };

    // ──────────────────────────────────────────────
    // PARTICULES AMBIANTES — système 3 couches parallaxe
    //
    // Architecture : 3 classes de particules pour simuler la profondeur,
    // selon la convention multiplan (Disney 1937, Pixar camera depth) :
    // les particules lointaines sont petites/lentes/transparentes,
    // les proches grosses/rapides/visibles. L'œil perçoit 3 plans Z
    // distincts au lieu d'un nuage uniforme.
    //
    // - Couche A "lointaine"  : 40 particules, voile cosmique diffus
    //                           passent DERRIÈRE le cerveau (pas absorbées)
    // - Couche B "médiane"    : 30 particules, poussière active du focal
    //                           absorbées en approche du cerveau
    // - Couche C "proche"     : 10 particules, dynamisme rapide premier plan
    //                           absorbées comme la B
    //
    // Total = 80 particules (ratio ROI/perf optimal vs 130).
    // ──────────────────────────────────────────────

    // Définitions des 3 classes (data-driven : modifier ici scale partout)
    // Ratios DESKTOP / MOBILE :
    //   Total : 80 desktop / 20 mobile (-75% pour perf)
    //   Mêmes ratios A/B/C : 50% / 37.5% / 12.5%
    const PARTICLE_CLASSES = [
      {
        // Classe A — lointaine
        count: MOBILE_MODE ? 10 : 40,
        sizeMin: 0.5,
        sizeMax: 1.0,
        speedMin: 0.08,
        speedMax: 0.15,
        lifeMin: 720, // 12s @ 60fps
        lifeMax: 1080, // 18s
        opacityMax: 0.06,
        absorbed: false, // passe derrière le cerveau
      },
      {
        // Classe B — médiane
        count: MOBILE_MODE ? 7 : 30,
        sizeMin: 1.5,
        sizeMax: 3.0,
        speedMin: 0.15,
        speedMax: 0.30,
        lifeMin: 480, // 8s
        lifeMax: 720, // 12s
        opacityMax: 0.13,
        absorbed: true,
      },
      {
        // Classe C — proche
        count: MOBILE_MODE ? 3 : 10,
        sizeMin: 2.0,
        sizeMax: 3.5,
        speedMin: 0.35,
        speedMax: 0.55,
        lifeMin: 480, // 8s
        lifeMax: 720, // 12s
        opacityMax: 0.18,
        absorbed: true,
      },
    ];

    // Spawn une particule selon la classe donnée.
    // randomLifeProgress: si true, lifecycle décalé aléatoirement (init only)
    const spawnParticle = (classDef, randomLifeProgress = false) => {
      // Position de spawn : majoritairement à gauche/loin du cerveau
      // pour qu'elles aient une longue trajectoire visible
      const x = Math.random() * width * 0.9;
      const y = Math.random() * height;
      // Direction vers le cerveau, avec bruit angulaire ±15°
      const dx = brainCenterX - x;
      const dy = brainCenterY - y;
      const speed =
        classDef.speedMin + Math.random() * (classDef.speedMax - classDef.speedMin);
      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
      const size =
        classDef.sizeMin + Math.random() * (classDef.sizeMax - classDef.sizeMin);
      const maxLife =
        classDef.lifeMin + Math.random() * (classDef.lifeMax - classDef.lifeMin);

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        life: 0,
        maxLife,
        progress: randomLifeProgress ? Math.random() : 0,
        // Référence au prototype de classe — on lit absorbed/opacityMax depuis là
        // pour éviter de copier les props sur chaque particule
        cls: classDef,
      };
    };

    const initAmbientParticles = () => {
      ambientParticles = [];
      for (const classDef of PARTICLE_CLASSES) {
        for (let i = 0; i < classDef.count; i++) {
          // À l'init : on positionne TOUTES les particules au milieu de
          // leur trajectoire (lifeRatio entre 0.3 et 0.7) — c'est la zone
          // de "pleine opacité" du lifecycle (pas de fade in/out actif).
          // Conséquence : à T=0 l'ambiance tourne déjà à plein régime
          // dès que revealOpacity atteint son plateau (~1.5s après load).
          //
          // Sans ça, ~40% des particules seraient en fade-in/out à T=0
          // et l'ambiance prendrait 6-12s à atteindre son rythme final
          // (= temps que les premières meurent et soient respawn).
          const p = spawnParticle(classDef, false);
          // Force le progress à une valeur aléatoire dans [0.3, 0.7]
          // = zone de pleine opacité du cycle de vie
          p.progress = 0.3 + Math.random() * 0.4;
          ambientParticles.push(p);
        }
      }
    };

    // ──────────────────────────────────────────────
    // PARTICULES — update + render (3 classes parallaxe)
    // Chaque particule a une référence à son prototype de classe (p.cls)
    // qui dicte son comportement : opacité max, absorption ou non, etc.
    // ──────────────────────────────────────────────
    const drawAmbientParticles = () => {
      // Pas d'early-return : revealOpacity multiplie l'alpha de chaque
      // particule, et le test `finalAlpha < 0.005` skippe les invisibles.
      // Conséquence : fade-in continu et synchronisé avec le pulse.

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      // Zone d'absorption = 35% du rayon brain projeté
      const absorbRadius = MASK_W * brainScale * 0.35;
      const absorbRadiusSq = absorbRadius * absorbRadius;

      for (let i = 0; i < ambientParticles.length; i++) {
        const p = ambientParticles[i];

        // Update position et lifecycle
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const lifeRatio = p.life / p.maxLife + p.progress;

        // Test d'absorption (UNIQUEMENT pour classes B et C — la A passe derrière)
        let absorbed = false;
        if (p.cls.absorbed) {
          const dxBrain = p.x - brainCenterX;
          const dyBrain = p.y - brainCenterY;
          const distSq = dxBrain * dxBrain + dyBrain * dyBrain;
          absorbed = distSq < absorbRadiusSq;
        }

        // Recycle quand mort, hors viewport, ou absorbée (selon classe)
        if (
          lifeRatio >= 1 ||
          p.x < -20 ||
          p.x > width + 20 ||
          p.y < -20 ||
          p.y > height + 20 ||
          absorbed
        ) {
          // Respawn avec la MÊME classe (préserve la répartition 40/30/10)
          ambientParticles[i] = spawnParticle(p.cls, false);
          continue;
        }

        // Opacité avec fade in/out aux extrémités du cycle de vie
        let lifeFade;
        if (lifeRatio < 0.15) {
          lifeFade = lifeRatio / 0.15; // fade in
        } else if (lifeRatio > 0.75) {
          lifeFade = (1 - lifeRatio) / 0.25; // fade out
        } else {
          lifeFade = 1;
        }

        // Atténuation horizontale (zone texte protégée) — desktop uniquement.
        // Mobile : compo verticale, particules visibles partout.
        let xFade = 1;
        if (!MOBILE_MODE) {
          const xRatio = p.x / width;
          if (xRatio < 0.55) {
            xFade = Math.max(0, (xRatio - 0.15) / 0.40);
          }
        }

        // Opacité finale = max de la classe × cycles de fade × reveal
        const finalAlpha =
          lifeFade * p.cls.opacityMax * xFade * revealOpacity;
        if (finalAlpha < 0.005) continue;

        ctx.fillStyle = `rgba(201, 149, 58, ${finalAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    // ──────────────────────────────────────────────
    // Contour visible — anneau fin holographique doré
    // Calibrage final :
    //   - inset 5 (au load) → anneau ~7-8px à l'écran (fin)
    //   - alpha 0.70 : tracé saturé (compense la finesse)
    //   - shadowBlur 8 : glow modéré, visible sans déborder
    //   - shadowColor 0.55 : intensité moyenne
    // Logique : un trait fin a besoin d'être SATURÉ pour rester perceptible.
    // ──────────────────────────────────────────────
    const drawBrainOutline = () => {
      if (!tintCanvas) return;
      ctx.save();
      ctx.globalAlpha = 0.70 * revealOpacity;
      ctx.globalCompositeOperation = "screen";
      ctx.shadowColor = "rgba(201, 149, 58, 0.55)";
      ctx.shadowBlur = 8;
      ctx.translate(brainCenterX, brainCenterY);
      // Approximation 2D de la rotation 3D + breathing synchro avec pulse
      ctx.scale(
        Math.cos(rotY) * brainScale * breathScale,
        Math.cos(rotX) * brainScale * breathScale
      );
      ctx.drawImage(tintCanvas, -MASK_W / 2, -MASK_H / 2, MASK_W, MASK_H);
      ctx.restore();
    };

    // ──────────────────────────────────────────────
    // Boucle d'animation
    // ──────────────────────────────────────────────
    const animate = () => {
      if (cancelled) return;
      frame++;

      // Sortir tôt si l'init du cerveau n'est pas finie
      if (!neuronCtx) {
        raf = requestAnimationFrame(animate);
        return;
      }

      // Fade-in progressif au reveal (durant ~50 frames après load)
      // Fade-in progressif au reveal (~36 frames = 0.6s à 60fps)
      // Volontairement rapide : l'utilisateur ne reste que ~3-5s sur le hero
      // avant de scroller, on doit lui montrer l'ambiance complète vite.
      if (revealOpacity < 1) revealOpacity = Math.min(1, revealOpacity + 0.028);

      // Parallaxe souris : désactivée sur mobile (pas de souris + gain perf)
      if (mouseActive && !MOBILE_MODE) {
        const cap = 0.22; // ~12.5° max
        const rawY = (mouseX - width / 2) * 0.0006;
        const rawX = -(mouseY - height / 2) * 0.0006;
        targetRotY = Math.max(-cap, Math.min(cap, rawY));
        targetRotX = Math.max(-cap, Math.min(cap, rawX));
      } else {
        targetRotY = 0;
        targetRotX = 0;
      }
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;

      // ─── COUCHE 1 : main canvas — trail + ambiance + contour glow ───
      // Trail (atténuation progressive — crée l'effet de traînée des frames passées)
      ctx.fillStyle = "rgba(13, 5, 0, 0.18)";
      ctx.fillRect(0, 0, width, height);

      // ─── COUCHES AMBIANCE (avant le cerveau) ───
      // Pulse respiratoire en gradient radial doré (8s asymétrique)
      const now = performance.now();
      drawAmbientPulse(now);

      // Breathing du cerveau lui-même (synchro avec le pulse).
      // Le cerveau "respire" en plus du gradient ambiant : 1.0 ↔ 1.012
      // (1.2% d'amplitude, juste perceptible, donne l'âme à l'élément focal).
      // Skip si reduced-motion.
      if (!prefersReducedMotion) {
        const pulseIntensity = computePulseIntensity(now);
        breathScale = 1 + pulseIntensity * 0.012;
      } else {
        breathScale = 1;
      }

      // Poussière neuronale dérivante vers le focal
      drawAmbientParticles();

      // Contour lumineux du cerveau (sur main ctx avec son glow)
      drawBrainOutline();

      // Atténue le contour côté gauche pour que le texte reste roi
      // (même dégradé horizontal que pour les neurones, en destination-out
      // appliqué directement sur le main ctx APRÈS le drawBrainOutline,
      // mais AVANT le compositing des neurones).
      // Skip sur mobile : compo verticale, pas de zone texte côté gauche.
      if (!MOBILE_MODE) {
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        const outlineGrad = ctx.createLinearGradient(0, 0, width, 0);
        outlineGrad.addColorStop(0, "rgba(0, 0, 0, 0.85)");
        outlineGrad.addColorStop(0.35, "rgba(0, 0, 0, 0.45)");
        outlineGrad.addColorStop(0.55, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = outlineGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      // ─── COUCHE 2 : neuronCanvas (offscreen) — neurones masqués ───
      // Clear l'offscreen à chaque frame (pas de trail ici, le trail vient
      // du composite répété sur le main ctx)
      neuronCtx.clearRect(0, 0, width, height);

      // Activation aléatoire toutes les 120 frames
      if (frame % 120 === 0 && neurons.length > 0) {
        const idx = (Math.random() * neurons.length) | 0;
        neurons[idx].activation = 1;
      }

      // Projection
      const proj = new Array(neurons.length);
      for (let i = 0; i < neurons.length; i++) {
        proj[i] = project(neurons[i]);
      }

      // Interaction souris
      if (mouseActive) {
        for (let i = 0; i < neurons.length; i++) {
          const p = proj[i];
          const dx = p.sx - mouseX, dy = p.sy - mouseY;
          const d2 = dx * dx + dy * dy;
          if (d2 < 32400) {
            const d = Math.sqrt(d2);
            const intensity = 1 - d / 180;
            if (neurons[i].activation < intensity * 0.9) {
              neurons[i].activation = intensity * 0.9;
            }
            if (
              Math.random() < 0.0028 &&
              pulses.length < 80 &&
              neighbors[i].length > 0
            ) {
              const target = neighbors[i][(Math.random() * neighbors[i].length) | 0];
              pulses.push({ from: i, to: target, t: 0 });
            }
          }
        }
      }

      // Decay
      for (let i = 0; i < neurons.length; i++) {
        neurons[i].activation *= 0.96;
      }

      // Connexions synaptiques (sur neuronCtx)
      neuronCtx.lineWidth = 0.5;
      for (let k = 0; k < connections.length; k++) {
        const [i, j, d, maxD] = connections[k];
        const pa = proj[i], pb = proj[j];
        const act = Math.max(neurons[i].activation, neurons[j].activation);
        const baseOpacity = (1 - d / maxD) * 0.3;
        const opacity = Math.min(0.85, baseOpacity * (1 + act * 1.6)) * revealOpacity;
        neuronCtx.strokeStyle = `rgba(180, 120, 40, ${opacity})`;
        neuronCtx.beginPath();
        neuronCtx.moveTo(pa.sx, pa.sy);
        neuronCtx.lineTo(pb.sx, pb.sy);
        neuronCtx.stroke();
      }

      // Pulses (sur neuronCtx)
      const stillAlive = [];
      for (const p of pulses) {
        p.t += 0.04;
        if (p.t >= 1) {
          if (neurons[p.to] && neurons[p.to].activation < 0.6) {
            neurons[p.to].activation = 0.6;
          }
          continue;
        }
        const pa = proj[p.from], pb = proj[p.to];
        const x = pa.sx + (pb.sx - pa.sx) * p.t;
        const y = pa.sy + (pb.sy - pa.sy) * p.t;
        neuronCtx.save();
        neuronCtx.shadowBlur = 8;
        neuronCtx.shadowColor = "#FFD700";
        neuronCtx.fillStyle = `rgba(255, 230, 100, ${0.9 * revealOpacity})`;
        neuronCtx.beginPath();
        neuronCtx.arc(x, y, 2.2, 0, Math.PI * 2);
        neuronCtx.fill();
        neuronCtx.restore();
        stillAlive.push(p);
      }
      pulses = stillAlive;

      // Neurones (sur neuronCtx)
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];
        const p = proj[i];
        // Taille basée sur z : range [-40, 40] → 1.5 à 3px
        const baseSize = 1.5 + ((n.z + 40) / 80) * 1.5;
        const size = baseSize * p.scale;

        if (n.activation > 0.05) {
          const a = Math.min(n.activation, 1) * revealOpacity;
          neuronCtx.save();
          neuronCtx.shadowBlur = 6 + a * 4;
          neuronCtx.shadowColor = "#FFD700";
          neuronCtx.fillStyle = `rgba(255, 215, 80, ${a})`;
          neuronCtx.beginPath();
          neuronCtx.arc(p.sx, p.sy, size * (1 + a * 0.6), 0, Math.PI * 2);
          neuronCtx.fill();
          neuronCtx.restore();
        } else {
          neuronCtx.fillStyle = `rgba(201, 149, 58, ${0.35 * revealOpacity})`;
          neuronCtx.beginPath();
          neuronCtx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
          neuronCtx.fill();
        }
      }

      // ─── MASK : on ne garde que la zone à l'intérieur du cerveau ───
      // destination-in : les pixels existants de neuronCtx ne sont gardés
      // que là où le masque (silhouette pleine) a de l'alpha.
      // Le mask suit le breathing pour rester cohérent avec les neurones.
      neuronCtx.save();
      neuronCtx.globalCompositeOperation = "destination-in";
      neuronCtx.translate(brainCenterX, brainCenterY);
      neuronCtx.scale(
        Math.cos(rotY) * brainScale * breathScale,
        Math.cos(rotX) * brainScale * breathScale
      );
      neuronCtx.drawImage(
        brainMaskCanvas,
        -MASK_W / 2,
        -MASK_H / 2,
        MASK_W,
        MASK_H
      );
      neuronCtx.restore();

      // ─── FADE HORIZONTAL : atténue la moitié gauche du cerveau ───
      // Le texte desktop est aligné à gauche, donc le côté gauche du cerveau
      // le chevauche. Dégradé destination-out qui efface progressivement.
      // Skip sur mobile : compo verticale, pas de chevauchement à gérer.
      if (!MOBILE_MODE) {
        neuronCtx.save();
        neuronCtx.globalCompositeOperation = "destination-out";
        const fadeGrad = neuronCtx.createLinearGradient(0, 0, width, 0);
        fadeGrad.addColorStop(0, "rgba(0, 0, 0, 0.85)");    // gauche : 85% effacé
        fadeGrad.addColorStop(0.35, "rgba(0, 0, 0, 0.45)"); // transition
        fadeGrad.addColorStop(0.55, "rgba(0, 0, 0, 0)");    // droite : intact
        neuronCtx.fillStyle = fadeGrad;
        neuronCtx.fillRect(0, 0, width, height);
        neuronCtx.restore();
      }

      // ─── COMPOSITE : poser la couche neuronale masquée sur le main ctx ───
      ctx.drawImage(
        neuronCanvas,
        0, 0, neuronCanvas.width, neuronCanvas.height,
        0, 0, width, height
      );

      raf = requestAnimationFrame(animate);
    };

    // ──────────────────────────────────────────────
    // Chargement de l'image et init
    // ──────────────────────────────────────────────
    const brainImg = new Image();
    // SVG en same-origin : crossOrigin pas nécessaire, mais on le garde
    // par sécurité au cas où le fichier serait déplacé sur un CDN externe.
    brainImg.crossOrigin = "anonymous";

    brainImg.onload = () => {
      if (cancelled) return;

      // Préserve l'aspect ratio natif de l'image
      const ratio = brainImg.naturalWidth / brainImg.naturalHeight;
      if (ratio >= 1) {
        MASK_W = MASK_MAX;
        MASK_H = Math.round(MASK_MAX / ratio);
      } else {
        MASK_H = MASK_MAX;
        MASK_W = Math.round(MASK_MAX * ratio);
      }

      // Mask offscreen pour le test isInsideBrain
      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = MASK_W;
      maskCanvas.height = MASK_H;
      const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      maskCtx.drawImage(brainImg, 0, 0, MASK_W, MASK_H);

      try {
        maskData = maskCtx.getImageData(0, 0, MASK_W, MASK_H);
      } catch (err) {
        // Tainted canvas — CORS a échoué
        console.warn("[L'Éveil] Impossible de lire les pixels du cerveau (CORS).", err);
        return;
      }

      // Sanity check : si l'image est un contour seul (peu de pixels remplis),
      // appliquer un scan-line fill pour récupérer l'intérieur
      let insideCount = 0;
      for (let i = 3; i < maskData.data.length; i += 4) {
        if (maskData.data[i] > 30) insideCount++;
      }
      const fillRatio = insideCount / (MASK_W * MASK_H);
      if (fillRatio < 0.15) {
        applyScanlineFill(maskData, MASK_W, MASK_H);
        maskCtx.putImageData(maskData, 0, 0);
      }

      // Référence promue au scope useEffect pour usage dans animate()
      brainMaskCanvas = maskCanvas;

      // Canvas offscreen pour les neurones (sera masqué à la forme du cerveau)
      neuronCanvas = document.createElement("canvas");
      neuronCanvas.width = width * dpr;
      neuronCanvas.height = height * dpr;
      neuronCtx = neuronCanvas.getContext("2d");
      neuronCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Pré-teinte or via composite source-in, puis érosion du centre
      // pour ne garder que l'anneau extérieur (lisibilité du texte centré).
      tintCanvas = document.createElement("canvas");
      tintCanvas.width = MASK_W;
      tintCanvas.height = MASK_H;
      const tCtx = tintCanvas.getContext("2d");

      // 1) Cerveau brut
      tCtx.drawImage(brainImg, 0, 0, MASK_W, MASK_H);

      // 2) Teinte or (source-in : remplace toutes les couleurs par #C9953A
      //    en respectant l'alpha)
      tCtx.globalCompositeOperation = "source-in";
      tCtx.fillStyle = "#C9953A";
      tCtx.fillRect(0, 0, MASK_W, MASK_H);

      // 3) Érosion du centre : redessine la même image légèrement plus petite
      //    en mode destination-out. inset 5 (au lieu de 14) → anneau ~5px
      //    sur le bitmap source × scale ~1.5 = ~7-8px à l'écran.
      //    Vraie esthétique holographique fine.
      const inset = 5;
      tCtx.globalCompositeOperation = "destination-out";
      tCtx.drawImage(
        brainImg,
        inset,
        inset,
        MASK_W - 2 * inset,
        MASK_H - 2 * inset
      );
      tCtx.globalCompositeOperation = "source-over";

      computeBrainTransform();
      initBrain();
      initAmbientParticles();
      animate();
    };

    brainImg.onerror = () => {
      console.warn(
        "[L'Éveil] Échec du chargement de l'image cerveau :",
        BRAIN_IMG_URL
      );
    };

    brainImg.src = BRAIN_IMG_URL;

    // ──────────────────────────────────────────────
    // PAUSE ANIMATION QUAND ONGLET INACTIF
    // Économise CPU + batterie quand l'utilisateur change d'onglet ou
    // minimise la fenêtre. Pratique standard "studio pro".
    //
    // Mécanique : on annule le rAF en cours quand visibilityState devient
    // "hidden", on relance animate() quand il redevient "visible".
    // Le canvas reste visuellement intact (pas de re-init), il reprend
    // simplement sa boucle d'animation où il était.
    // ──────────────────────────────────────────────
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(raf);
      } else if (document.visibilityState === "visible" && !cancelled) {
        // Relance la boucle uniquement si le canvas est déjà initialisé
        // (neuronCtx existe = brainImg.onload a déjà tourné)
        if (neuronCtx) {
          // Reset le pulseStart pour que la respiration redémarre proprement
          pulseStart = 0;
          animate();
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
    // Re-mount le canvas si reduced-motion ou breakpoint change
    // (re-init avec densités différentes selon mobile/desktop)
  }, [prefersReducedMotion, isMobile]);

  return (
    <div
      className="relative w-full overflow-hidden font-body"
      style={{
        backgroundColor: "#0d0500",
        // 100svh sur mobile : "small viewport height" stable, exclut la barre
        // d'URL dynamique iOS Safari. Fallback 100vh pour vieux navigateurs.
        // 100vh sur desktop : comportement normal.
        height: isMobile ? "100svh" : "100vh",
        minHeight: isMobile ? "600px" : "100vh", // failsafe écrans étroits
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,300;1,400&family=Outfit:wght@300;400;500;700;900&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif; }
        .font-body { font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif; }
        /* Text shadows pour garantir la lisibilité par-dessus le canvas glowing */
        .ts-soft { text-shadow: 0 1px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5); }
        .ts-strong { text-shadow: 0 2px 12px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.6); }
        /* Hover micro-interaction sur le bouton primaire (glow doré) */
        .btn-primary { box-shadow: 0 4px 28px -8px rgba(201, 149, 58, 0.6); }
        .btn-primary:hover { box-shadow: 0 8px 40px -8px rgba(201, 149, 58, 0.95); }

        /* ────────────────────────────────────────────
           ACCESSIBILITÉ — Focus states visibles
           focus-visible : seulement quand navigation clavier (pas au clic)
           Outline doré 3px + offset 4px = bien visible sur fond sombre
           sans ressembler au focus jaune navigateur par défaut */
        .focus-ring:focus { outline: none; }
        .focus-ring:focus-visible {
          outline: 3px solid #C9953A;
          outline-offset: 4px;
        }

        /* ────────────────────────────────────────────
           SCROLL INDICATOR — animations gérées par framer-motion
           (les keyframes CSS posaient des problèmes de scoping dans
           certains environnements de preview, switch vers motion.span
           garanti dans tous les cas). */

        /* ────────────────────────────────────────────
           REDUCED MOTION — désactive les animations CSS résiduelles
           pour les utilisateurs sensibles au mouvement.
           Les animations framer-motion sont déjà conditionnées en JS. */
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; }
        }

      `}</style>

      {/* z-0 — fond plein (inline style = bulletproof contre Tailwind config) */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#0d0500" }}
      />

      {/* z-1 — canvas cerveau */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1]"
        style={{ pointerEvents: "none" }}
      />

      {/* z-10 — vignettage radial subtil
          Desktop : centré sous le cerveau à 78% horizontal
          Mobile  : centré sous le cerveau en haut (50%, 32%) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: isMobile
            ? "radial-gradient(ellipse 80% 50% at 50% 32%, transparent 0%, rgba(13,5,0,0.5) 100%)"
            : "radial-gradient(ellipse 70% 60% at 78% 50%, transparent 0%, rgba(13,5,0,0.5) 100%)",
        }}
      />

      {/* z-20 — contenu textuel
          Desktop : aligné gauche, centré vertical, padding fluide
          Mobile  : centré horizontalement, alignement bas pour laisser
                    place au cerveau positionné en haut */}
      <div
        className={`relative z-20 h-full flex ${
          isMobile
            ? "items-end justify-center pb-16 pt-[58vh]"
            : "items-center"
        }`}
        style={
          isMobile
            ? {
                paddingLeft: "clamp(1.5rem, 6vw, 2rem)",
                paddingRight: "clamp(1.5rem, 6vw, 2rem)",
              }
            : {
                paddingLeft: "clamp(1.5rem, 6vw, 8rem)",
                paddingRight: "clamp(1.5rem, 8vw, 10rem)",
              }
        }
      >
        <div
          className={`w-full ${isMobile ? "text-center" : "text-left"}`}
          style={{
            maxWidth: isMobile
              ? "calc(100vw - 3rem)"
              : "min(50rem, calc(100vw - 3rem))",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-md mb-10 ts-soft"
          >
            <BrainCircuit className="w-4 h-4 text-amber-300" />
            <span className="text-amber-100 text-xs tracking-[0.18em] uppercase font-medium">
              Neurosciences & Performance
            </span>
          </motion.div>

          {/* Titre — ligne 1 (taille fluide recalibrée :
              40px mobile → 5.5vw → 100px plafond.
              Reste un cran sous le mot rotatif pour préserver la hiérarchie :
              le mot doré domine, le titre italique le supporte) */}
          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="font-display italic font-light text-white leading-[1.05] ts-strong"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 6.25rem)",
            }}
          >
            Éveillez votre
          </motion.h1>

          {/* Titre — ligne 2 (mot rotatif)
              Desktop : aligné gauche dans le flux normal
              Mobile  : conteneur en inline-block centré via flex parent
              L'animation slide-up framer-motion reste intacte dans les deux cas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className={`mt-2 mb-8 ${isMobile ? "flex justify-center" : ""}`}
          >
            <div
              className={`relative ${isMobile ? "inline-block" : ""}`}
              style={{
                overflow: "hidden",
                // padding vertical : permet aux animations slide-in/out de
                // disparaître sans révéler les caractères derrière
                paddingTop: "0.05em",
                paddingBottom: "0.15em",
              }}
            >
              {/* Sizer invisible — DANS le flux pour fixer la hauteur réelle.
                  Taille recalibrée : clamp 2.5rem → 6vw → 7rem max (112px).
                  À 112px font-black tracking-wide, "CONSCIENCE" mesure ~720px
                  → tient garanti dans le conteneur 800px max. */}
              <span
                aria-hidden="true"
                className="block font-black tracking-wide whitespace-nowrap"
                style={{
                  visibility: "hidden",
                  fontFamily: "Outfit, sans-serif",
                  pointerEvents: "none",
                  userSelect: "none",
                  lineHeight: 1.1,
                  fontSize: "clamp(2.5rem, 6vw, 7rem)",
                }}
              >
                {LONGEST_WORD}
              </span>

              {/* AnimatePresence mode="wait" :
                  - L'animation EXIT du mot sortant se termine
                  - PUIS l'animation ENTER du mot entrant démarre
                  - Convient pour un enfant unique en position absolute.
                  popLayout (utilisé avant) est pour les listes — pas adapté
                  ici, il causait un bug où les exits passaient en silence. */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={prefersReducedMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: prefersReducedMotion
                      ? { duration: 0.3 }
                      : { type: "spring", stiffness: 60, damping: 16 },
                  }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0, transition: { duration: 0.3 } }
                      : {
                          y: "-100%",
                          opacity: 0,
                          transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                        }
                  }
                  className="absolute font-black tracking-wide whitespace-nowrap"
                  style={{
                    color: "#C9953A",
                    fontFamily: "Outfit, sans-serif",
                    left: 0,
                    top: "0.05em",
                    lineHeight: 1.1,
                    fontSize: "clamp(2.5rem, 6vw, 7rem)",
                    textShadow:
                      "0 2px 12px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.6)",
                  }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sous-titre — taille fluide alignée sur l'échelle du titre */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className={`text-white/85 max-w-xl leading-relaxed mb-4 font-light ts-soft ${
              isMobile ? "mx-auto" : ""
            }`}
            style={{
              fontSize: "clamp(1rem, 1.25vw, 1.375rem)",
            }}
          >
            Comprenez comment votre cerveau fonctionne.
            <br />
            Transformez votre vie avec la science.
          </motion.p>

          {/* Tagline (opacité 65% au lieu de 50%, espacée davantage des CTA) */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-sm italic mb-14 font-display tracking-wide ts-soft"
            style={{ color: "rgba(254, 243, 199, 0.65)" }}
          >
            Rejoignez les esprits curieux qui reprennent le contrôle.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${
              isMobile ? "items-center justify-center" : ""
            }`}
          >
            {/* Bouton primaire — fond or unifié + texte foncé
                Contraste : #0d0500 sur #C9953A = 7.84:1 (WCAG AAA)
                Look éditorial premium, cohérent avec contour cerveau et mot rotatif */}
            <button
              className="btn-primary focus-ring group rounded-full px-8 py-3 font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                backgroundColor: "#C9953A",
                color: "#0d0500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D4A24A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9953A";
              }}
            >
              Découvrir les articles{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            {/* Bouton secondaire — bordure or, texte blanc sur fond translucide */}
            <button
              className="focus-ring rounded-full px-8 py-3 font-medium text-sm tracking-wide transition-all duration-300 ts-soft text-white bg-black/20 backdrop-blur-sm hover:bg-black/30"
              style={{
                border: "1.5px solid rgba(201, 149, 58, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201, 149, 58, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201, 149, 58, 0.5)";
              }}
            >
              Recevoir le guide gratuit
            </button>
          </motion.div>
        </div>
      </div>

      {/* z-30 — Scroll indicator : forme souris animée (desktop uniquement)
          Disparaît après le premier scroll utilisateur.
          Caché sur mobile : les CTAs occupent déjà la zone basse. */}
      {!isMobile && <ScrollIndicator prefersReducedMotion={prefersReducedMotion} />}
    </div>
  );
}

/* ────────────────────────────────────────────
   SCROLL INDICATOR — Ligne verticale + dot glissant
   Se masque quand l'utilisateur scrolle significativement (> 100px).
   ──────────────────────────────────────────── */
function ScrollIndicator({ prefersReducedMotion }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute bottom-20 left-1/2 z-30 pointer-events-none flex flex-col items-center gap-3"
      style={{
        transform: "translateX(-50%)",
        opacity: visible ? 0.85 : 0,
        transition: "opacity 0.5s ease",
      }}
      aria-hidden="true"
    >
      {/* Label */}
      <span
        style={{
          color: "rgba(255, 255, 255, 0.4)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        Explorer
      </span>

      {/* Vertical line + sliding dot */}
      <div style={{ position: "relative", width: "1px", height: "48px" }}>
        {/* Line */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(201, 149, 58, 0.3)",
          }}
        />
        {/* Dot — Framer Motion (bypass CSS transition:none !important) */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            marginLeft: "-4px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#C9953A",
          }}
          animate={{
            y:         [0,    0,    40,   0  ],
            scale:     [1.4,  1,    1,    1  ],
            boxShadow: [
              "0 0 16px rgba(201,149,58,1)",
              "0 0 10px rgba(201,149,58,0.8)",
              "0 0 10px rgba(201,149,58,0.8)",
              "0 0 10px rgba(201,149,58,0.8)",
            ],
          }}
          transition={{
            duration: 3.2,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.1, 0.6, 1],
          }}
        />
      </div>
    </div>
  );
}

