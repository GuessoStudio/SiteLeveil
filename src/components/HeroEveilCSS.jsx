/**
 * HeroEveilCSS — version CSS/SVG du hero (remplace le Canvas 2D)
 *
 * Toutes les animations tournent sur le compositor thread GPU (transform + opacity).
 * Zéro boucle rAF sur le main thread → TBT canvas = 0ms.
 *
 * Pour revenir à la version canvas originale, changer dans Home.tsx :
 *   import HeroEveil from '../components/HeroEveilCSS'
 * → import HeroEveil from '../components/HeroEveil'
 */

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ─── Données statiques (seeded LCG — identiques serveur/client, SSG-safe) ───────

/** LCG pseudo-random — zéro Math.random() au module-level = pas de mismatch hydration */
function makeLCG(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

/**
 * 52 neurones distribués dans l'ellipse du cerveau.
 * Cerveau SVG viewBox 0 0 1200 1200 — ellipse approx : cx=555 cy=595 rx=400 ry=380.
 * On restreint à 0.82× l'ellipse pour rester bien dans la silhouette.
 */
function buildNeurons(count = 52, seed = 42) {
  const rng = makeLCG(seed);
  const cx = 555, cy = 595, rx = 400, ry = 380, limit = 0.82;
  const out = [];
  let tries = 0;
  while (out.length < count && tries < 40000) {
    tries++;
    const x = 80 + rng() * 1040;
    const y = 130 + rng() * 940;
    const dx = (x - cx) / rx;
    const dy = (y - cy) / ry;
    if (dx * dx + dy * dy < limit * limit) {
      out.push({ x: Math.round(x), y: Math.round(y) });
    }
  }
  return out;
}

/**
 * Connexions entre neurones voisins (distance < maxDist en unités SVG).
 * Limité à 40 connexions pour ne pas surcharger visuellement.
 */
function buildConnections(neurons, maxDist = 140, seed = 77, max = 40) {
  const rng = makeLCG(seed);
  const md2 = maxDist * maxDist;
  const out = [];
  for (let i = 0; i < neurons.length && out.length < max; i++) {
    for (let j = i + 1; j < neurons.length && out.length < max; j++) {
      const dx = neurons[i].x - neurons[j].x;
      const dy = neurons[i].y - neurons[j].y;
      if (dx * dx + dy * dy < md2 && rng() < 0.45) {
        out.push([i, j]);
      }
    }
  }
  return out;
}

/** 24 particules ambiantes — trajectoires et timings déterministes */
function buildParticles(count = 24, seed = 13) {
  const rng = makeLCG(seed);
  return Array.from({ length: count }, () => ({
    x: rng() * 88,                         // % viewport width, côté gauche
    y: rng() * 100,                         // % viewport height
    dx: `${8 + rng() * 18}vw`,             // dérive vers la droite (cerveau)
    dy: `${(rng() - 0.5) * 8}vh`,
    dur: 4 + rng() * 7,                    // 4–11 s
    delay: -(rng() * 9),                   // délai négatif = déjà en transit au départ
    size: 1 + rng() * 1.8,                 // 1–2.8 px
    opacity: 0.4 + rng() * 0.4,           // 0.4–0.8
  }));
}

const NEURONS     = buildNeurons();
const CONNECTIONS = buildConnections(NEURONS);
const PARTICLES   = buildParticles();

const ROTATING_WORDS = ["POTENTIEL", "CERVEAU", "CONSCIENCE", "CLARTÉ", "LIBERTÉ"];
const LONGEST_WORD   = ROTATING_WORDS.reduce((a, b) => (a.length > b.length ? a : b));

// ─── CSS animations (inline <style>) ─────────────────────────────────────────

const STYLES = `
  .hcss-font-display { font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif; }
  .hcss-font-body    { font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif; }
  .hcss-ts-soft   { text-shadow: 0 1px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5); }
  .hcss-ts-strong { text-shadow: 0 2px 12px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.6); }
  .hcss-btn-primary { box-shadow: 0 4px 28px -8px rgba(201,149,58,0.6); }
  .hcss-btn-primary:hover { box-shadow: 0 8px 40px -8px rgba(201,149,58,0.95); }
  .hcss-focus:focus { outline: none; }
  .hcss-focus:focus-visible { outline: 3px solid #C9953A; outline-offset: 4px; }

  /* Respiration cerveau — 10 s, même courbe asymétrique que le canvas original */
  @keyframes hcss-breathe {
    0%,100% { transform: scale(1.000); }
    35%,40% { transform: scale(1.012); }
    85%     { transform: scale(1.000); }
  }

  /* Glow cerveau — synchro avec la respiration */
  @keyframes hcss-glow {
    0%,100% { filter: drop-shadow(0 0 20px rgba(201,149,58,0.40)) drop-shadow(0 0 55px rgba(201,149,58,0.18)); }
    35%,40% { filter: drop-shadow(0 0 32px rgba(201,149,58,0.65)) drop-shadow(0 0 80px rgba(201,149,58,0.30)); }
    85%     { filter: drop-shadow(0 0 20px rgba(201,149,58,0.40)) drop-shadow(0 0 55px rgba(201,149,58,0.18)); }
  }

  /* Neurones — pulse lumineux */
  @keyframes hcss-neuron {
    0%,100% { opacity: 0.30; transform: scale(0.75); }
    50%     { opacity: 1.00; transform: scale(1.45); }
  }

  /* Pulse radial ambiant (gradient doré depuis le centre cerveau) */
  @keyframes hcss-pulse {
    0%,100% { opacity: 0.04; transform: scale(1.00); }
    35%,40% { opacity: 0.12; transform: scale(1.06); }
    85%     { opacity: 0.04; transform: scale(1.00); }
  }

  /* Signal le long d'une connexion (stroke-dashoffset sur pathLength=1) */
  @keyframes hcss-signal {
    0%   { stroke-dashoffset:  1.6; opacity: 0;   }
    8%   { stroke-dashoffset:  1.2; opacity: 0.9; }
    92%  { stroke-dashoffset: -0.2; opacity: 0.9; }
    100% { stroke-dashoffset: -0.6; opacity: 0;   }
  }

  /* Particules ambiantes */
  @keyframes hcss-float {
    0%   { opacity: 0;   transform: translate(0,0) scale(0.4); }
    12%  { opacity: var(--hcss-pop); transform: translate(calc(var(--hcss-dx)*0.12), calc(var(--hcss-dy)*0.12)) scale(1); }
    88%  { opacity: calc(var(--hcss-pop)*0.5); }
    100% { opacity: 0;   transform: translate(var(--hcss-dx), var(--hcss-dy)) scale(0.3); }
  }

  /* Reduced-motion : tout à l'arrêt */
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
`;

// ─── Composant principal ──────────────────────────────────────────────────────

export default function HeroEveil() {
  const navigate   = useNavigate();
  const brainRef   = useRef(null);   // pour la parallaxe souris (CSS vars)
  const [wordIndex, setWordIndex]               = useState(0);
  const [prefersReducedMotion, setPrefRM]       = useState(false);
  const [isMobile, setIsMobile]                 = useState(false);

  // Détection mobile/tablette (breakpoint dur < 1024px)
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const h = (e) => setIsMobile(e.matches);
    mq.addEventListener ? mq.addEventListener("change", h) : mq.addListener(h);
    return () => mq.removeEventListener ? mq.removeEventListener("change", h) : mq.removeListener(h);
  }, []);

  // Préférence reduced-motion
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches === true) setPrefRM(true);
    const h = (e) => setPrefRM(e.matches === true);
    mq.addEventListener ? mq.addEventListener("change", h) : mq.addListener(h);
    return () => mq.removeEventListener ? mq.removeEventListener("change", h) : mq.removeListener(h);
  }, []);

  // Rotation du mot toutes les 2800 ms
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length), 2800);
    return () => clearInterval(id);
  }, []);

  /**
   * Parallaxe souris — lit l'event puis écrit 2 CSS custom properties sur brainRef.
   * PAS de requestAnimationFrame : aucune boucle, ~0.2ms/event sur main thread.
   * Les navigateurs ne déclenchent pas mousemove à 60fps — ~16ms de garde naturelle.
   */
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;
    const handle = (e) => {
      const rx = -(e.clientY - window.innerHeight / 2) * 0.00022;
      const ry =  (e.clientX - window.innerWidth  * 0.78) * 0.00022;
      brainRef.current?.style.setProperty("--hcss-rx", `${rx}rad`);
      brainRef.current?.style.setProperty("--hcss-ry", `${ry}rad`);
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, [isMobile, prefersReducedMotion]);

  // ─── Dimensions cerveau (même logique que le canvas original) ───────────────
  // Desktop : cerveau ancré à droite, height = 100vh, center à 78% viewport width
  // Mobile  : cerveau centré horizontalement, height = 55svh, top = 32%
  const brainSize   = isMobile ? "min(55svh, 88vw)" : "100vh";
  const brainLeft   = isMobile ? "50%"              : "calc(78vw - 50vh)";
  const brainTop    = isMobile ? "32%"              : "50%";
  const brainTranslate = isMobile ? "translate(-50%, -50%)" : "translateY(-50%)";

  return (
    <div
      className="relative w-full overflow-hidden hcss-font-body"
      style={{
        backgroundColor: "#0d0500",
        height: isMobile ? "100svh" : "100vh",
        minHeight: isMobile ? "600px" : "100vh",
      }}
    >
      <style>{STYLES}</style>

      {/* ── L0 : fond ───────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "#0d0500" }} />

      {/* ── L1 : cerveau CSS (remplace le canvas) ───────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
      >
        {/* Pulse radial ambiant (gradient doré depuis le centre cerveau) */}
        <div
          style={{
            position:     "absolute",
            left:         brainLeft,
            top:          brainTop,
            width:        brainSize,
            height:       brainSize,
            transform:    brainTranslate,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position:     "absolute",
              inset:        "-25%",
              borderRadius: "50%",
              background:   "radial-gradient(circle at 50% 50%, rgba(201,149,58,0.28) 0%, transparent 62%)",
              animation:    "hcss-pulse 10s ease-in-out infinite",
            }}
          />
        </div>

        {/* Conteneur parallaxe + cerveau + réseau neural */}
        <div
          ref={brainRef}
          style={{
            position:   "absolute",
            left:       brainLeft,
            top:        brainTop,
            width:      brainSize,
            height:     brainSize,
            transform:  `${brainTranslate} perspective(900px) rotateX(var(--hcss-rx,0rad)) rotateY(var(--hcss-ry,0rad))`,
            transition: "transform 0.12s ease-out",
            willChange: "transform",
          }}
        >
          {/* Image cerveau avec respiration + glow */}
          <img
            src="/brain-cerebral.svg"
            alt=""
            draggable={false}
            style={{
              display:    "block",
              width:      "100%",
              height:     "100%",
              objectFit:  "contain",
              animation:  "hcss-breathe 10s ease-in-out infinite, hcss-glow 10s ease-in-out infinite",
              opacity:    0.90,
            }}
          />

          {/* Réseau neural SVG — masqué à la silhouette du cerveau */}
          <div
            style={{
              position:            "absolute",
              inset:               0,
              maskImage:           "url('/brain-cerebral.svg')",
              maskSize:            "100% 100%",
              maskRepeat:          "no-repeat",
              WebkitMaskImage:     "url('/brain-cerebral.svg')",
              WebkitMaskSize:      "100% 100%",
              WebkitMaskRepeat:    "no-repeat",
            }}
          >
            <svg
              viewBox="0 0 1200 1200"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
              aria-hidden="true"
            >
              {/* Connexions statiques (fond discret) */}
              {CONNECTIONS.map(([a, b], i) => (
                <line
                  key={`cs-${i}`}
                  x1={NEURONS[a].x} y1={NEURONS[a].y}
                  x2={NEURONS[b].x} y2={NEURONS[b].y}
                  stroke="rgba(201,149,58,0.18)"
                  strokeWidth="1"
                />
              ))}

              {/* Connexions animées (signal voyageur) — 1 connexion sur 3 */}
              {CONNECTIONS.filter((_, i) => i % 3 === 0).map(([a, b], i) => (
                <line
                  key={`ca-${i}`}
                  x1={NEURONS[a].x} y1={NEURONS[a].y}
                  x2={NEURONS[b].x} y2={NEURONS[b].y}
                  pathLength={1}
                  stroke="rgba(232,184,109,0.80)"
                  strokeWidth="1.6"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  style={{
                    animation: `hcss-signal ${2.8 + (i % 4) * 0.5}s linear infinite`,
                    animationDelay: `${-(i * 0.65) % 3.5}s`,
                  }}
                />
              ))}

              {/* Neurones */}
              {NEURONS.map((n, i) => (
                <circle
                  key={`n-${i}`}
                  cx={n.x}
                  cy={n.y}
                  r={3.5 + (i % 3) * 0.8}   // légère variation de taille
                  fill="#e8b46a"
                  style={{
                    transformBox:    "fill-box",
                    transformOrigin: "center",
                    filter:          "drop-shadow(0 0 3px rgba(232,180,106,0.85))",
                    animation:       `hcss-neuron ${2.4 + (i % 5) * 0.38}s ease-in-out infinite`,
                    animationDelay:  `${-(i * 0.29) % 2.8}s`,
                  }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Particules ambiantes (hors parallaxe — flottent dans tout le viewport) */}
        {PARTICLES.map((p, i) => (
          <div
            key={`p-${i}`}
            style={{
              position:         "absolute",
              left:             `${p.x}%`,
              top:              `${p.y}%`,
              width:            `${p.size}px`,
              height:           `${p.size}px`,
              borderRadius:     "50%",
              background:       "rgba(201,149,58,0.7)",
              pointerEvents:    "none",
              willChange:       "transform, opacity",
              "--hcss-dx":      p.dx,
              "--hcss-dy":      p.dy,
              "--hcss-pop":     p.opacity,
              animation:        `hcss-float ${p.dur}s ease-in-out infinite`,
              animationDelay:   `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── L2 : vignettage radial (identique à l'original) ─────────────────── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: isMobile
            ? "radial-gradient(ellipse 80% 50% at 50% 32%, transparent 0%, rgba(13,5,0,0.5) 100%)"
            : "radial-gradient(ellipse 70% 60% at 78% 50%, transparent 0%, rgba(13,5,0,0.5) 100%)",
        }}
      />

      {/* ── L3 : contenu textuel (identique à l'original) ───────────────────── */}
      <div
        className={`relative z-20 h-full flex ${
          isMobile ? "items-end justify-center pb-16 pt-[58vh]" : "items-center"
        }`}
        style={
          isMobile
            ? { paddingLeft: "clamp(1.5rem,6vw,2rem)", paddingRight: "clamp(1.5rem,6vw,2rem)" }
            : { paddingLeft: "clamp(1.5rem,6vw,8rem)", paddingRight: "clamp(1.5rem,8vw,10rem)" }
        }
      >
        <div
          className={`w-full ${isMobile ? "text-center" : "text-left"}`}
          style={{
            maxWidth: isMobile ? "calc(100vw - 3rem)" : "min(50rem, calc(100vw - 3rem))",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-md mb-5 lg:mb-10 hcss-ts-soft"
          >
            <BrainCircuit className="w-4 h-4 text-amber-300" />
            <span className="text-amber-100 text-xs tracking-[0.18em] uppercase font-medium">
              Neurosciences & Performance
            </span>
          </motion.div>

          {/* H1 ligne 1 */}
          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="hcss-font-display italic font-light text-white leading-[1.05] hcss-ts-strong"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6.25rem)" }}
          >
            Éveillez votre
          </motion.h1>

          {/* Mot rotatif */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className={`mt-2 mb-4 lg:mb-8 ${isMobile ? "flex justify-center" : ""}`}
          >
            <div
              className={`relative ${isMobile ? "inline-block" : ""}`}
              style={{ overflow: "hidden", paddingTop: "0.05em", paddingBottom: "0.15em" }}
            >
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
                      : { y: "-100%", opacity: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
                  }
                  className="absolute font-black tracking-wide whitespace-nowrap"
                  style={{
                    color:      "#C9953A",
                    fontFamily: "Outfit, sans-serif",
                    left:       0,
                    top:        "0.05em",
                    lineHeight: 1.1,
                    fontSize:   "clamp(2.5rem, 6vw, 7rem)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.6)",
                  }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sous-titre */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className={`text-white/85 max-w-xl leading-relaxed mb-4 font-light hcss-ts-soft ${isMobile ? "mx-auto" : ""}`}
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.375rem)" }}
          >
            Comprenez comment votre cerveau fonctionne.
            <br />
            Transformez votre vie avec la science.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-sm italic mb-8 lg:mb-14 hcss-font-display tracking-wide hcss-ts-soft"
            style={{ color: "rgba(254,243,199,0.65)" }}
          >
            Rejoignez les esprits curieux qui reprennent le contrôle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isMobile ? "items-center justify-center" : ""}`}
          >
            <button
              onClick={() => navigate("/blog")}
              className="hcss-btn-primary hcss-focus group rounded-full px-8 py-3 font-semibold text-sm tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9953A", color: "#0d0500" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#D4A24A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C9953A"; }}
            >
              Découvrir les articles{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
              className="hcss-focus rounded-full px-8 py-3 font-medium text-sm tracking-wide transition-all duration-300 hcss-ts-soft text-white bg-black/20 backdrop-blur-sm hover:bg-black/30"
              style={{ border: "1.5px solid rgba(201,149,58,0.5)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,149,58,0.8)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,149,58,0.5)"; }}
            >
              Recevoir le guide gratuit
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator (identique à l'original) ───────────────────────── */}
      {!isMobile && <HeroCSSScrollIndicator prefersReducedMotion={prefersReducedMotion} />}
    </div>
  );
}

// ─── Scroll Indicator (copie exacte de HeroEveil.jsx) ────────────────────────

function HeroCSSScrollIndicator({ prefersReducedMotion }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 100) setVisible(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute bottom-20 left-1/2 z-30 pointer-events-none flex flex-col items-center gap-3"
      style={{
        transform:  "translateX(-50%)",
        opacity:    visible ? 0.85 : 0,
        transition: "opacity 0.5s ease",
      }}
      aria-hidden="true"
    >
      <span
        style={{
          color:         "rgba(255,255,255,0.4)",
          fontSize:      "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          fontWeight:    500,
        }}
      >
        Explorer
      </span>
      <div style={{ position: "relative", width: "1px", height: "48px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(201,149,58,0.3)" }} />
        <motion.div
          style={{
            position:        "absolute",
            top:             0,
            left:            "50%",
            marginLeft:      "-4px",
            width:           "8px",
            height:          "8px",
            borderRadius:    "50%",
            backgroundColor: "#C9953A",
          }}
          animate={{
            y:         [0, 0, 40, 0],
            scale:     [1.4, 1, 1, 1],
            boxShadow: [
              "0 0 16px rgba(201,149,58,1)",
              "0 0 10px rgba(201,149,58,0.8)",
              "0 0 10px rgba(201,149,58,0.8)",
              "0 0 10px rgba(201,149,58,0.8)",
            ],
          }}
          transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, times: [0, 0.1, 0.6, 1] }}
        />
      </div>
    </div>
  );
}
