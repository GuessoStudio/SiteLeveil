import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startBrainEngine } from "./brainEngine.js";

const ROTATING_WORDS = ["POTENTIEL", "CERVEAU", "CONSCIENCE", "CLARTÉ", "LIBERTÉ"];
const LONGEST_WORD = ROTATING_WORDS.reduce((a, b) => (a.length > b.length ? a : b));

export default function HeroEveilWorker() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  // Reste false jusqu'au 1er changement de mot. Permet de rendre le premier mot
  // (candidat LCP) visible dès le HTML pré-rendu via initial={false}, au lieu de
  // l'animer depuis opacity:0 après l'hydratation React (LCP mobile ~4,3s).
  const [hasRotated, setHasRotated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches === true) setPrefersReducedMotion(true);
    const handler = (e) => setPrefersReducedMotion(e.matches === true);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHasRotated(true);
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // ── Canvas engine ─────────────────────────────────────────────────────────
  // Ref persistants (survivent aux re-renders)
  const workerRef = useRef(null);
  const offscreenTransferred = useRef(false);

  // Lifecycle worker — lancé une seule fois à l'unmount
  useEffect(() => {
    return () => {
      if (workerRef.current) {
        workerRef.current.postMessage({ type: "destroy" });
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  // Canvas effect — se re-exécute si isMobile/prefersReducedMotion changent
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const hasOffscreen = typeof canvas.transferControlToOffscreen === "function";

    // ── FALLBACK main thread (Safari < 17, navigateurs sans OffscreenCanvas) ──
    if (!hasOffscreen) {
      const engine = startBrainEngine(canvas, { isMobile, prefersReducedMotion });
      const onResize = () => engine.resize();
      const onMouseMove = (e) => engine.setMouse(e.clientX, e.clientY);
      const onMouseLeave = () => engine.clearMouse();
      const onVisibility = () => engine.pauseIfHidden();
      window.addEventListener("resize", onResize);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("visibilitychange", onVisibility);
      return () => {
        engine.destroy();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }

    // ── WORKER path (OffscreenCanvas) ────────────────────────────────────────
    if (!offscreenTransferred.current) {
      // Premier montage : transférer le canvas au worker
      offscreenTransferred.current = true;
      const dpr = isMobile
        ? Math.min(window.devicePixelRatio || 1, 1)
        : Math.min(window.devicePixelRatio || 1, 2);
      // Force la taille d'affichage = taille viewport (1:1 avec le backing store du worker).
      // Sans ça, `absolute inset-0` étire le canvas à la boîte parente → cerveau tronqué/décalé.
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const offscreen = canvas.transferControlToOffscreen();
      const worker = new Worker(
        new URL("./brain.worker.js", import.meta.url),
        { type: "module" }
      );
      workerRef.current = worker;
      worker.postMessage(
        { type: "init", canvas: offscreen, width: window.innerWidth, height: window.innerHeight, dpr, isMobile, prefersReducedMotion },
        [offscreen]
      );

      // Démarrage différé — charge l'image sur le main thread, transfère l'ImageBitmap.
      // new Image() + createImageBitmap(img) est fiable même sur les SVG sans width/height.
      const requestIdle = window.requestIdleCallback || ((cb) => window.setTimeout(() => cb(), 200));
      const doStart = () => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = async () => {
          if (!workerRef.current) return;
          try {
            // drawImage sur canvas explicite fonctionne même si naturalWidth=0
            // (SVG sans attributs width/height — seulement viewBox)
            const tmp = document.createElement("canvas");
            tmp.width = 400; tmp.height = 400;
            tmp.getContext("2d").drawImage(img, 0, 0, 400, 400);
            const bitmap = await createImageBitmap(tmp);
            workerRef.current.postMessage({ type: "brain", bitmap }, [bitmap]);
          } catch {
            // Fallback : le worker fetch lui-même l'image
            workerRef.current?.postMessage({ type: "start" });
          }
        };
        img.onerror = () => workerRef.current?.postMessage({ type: "start" });
        img.src = "/brain-cerebral.svg";
      };
      const onLoad = () => requestIdle(doStart, { timeout: 1500 });
      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad, { once: true });
    } else {
      // Re-render suivant : juste mettre à jour la config dans le worker
      workerRef.current?.postMessage({ type: "config", isMobile, prefersReducedMotion });
    }

    // Proxies événements → worker (re-attachés à chaque run)
    const dprNow = () => isMobile
      ? Math.min(window.devicePixelRatio || 1, 1)
      : Math.min(window.devicePixelRatio || 1, 2);
    const onResize = () => {
      if (canvas) {
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
      }
      workerRef.current?.postMessage({ type: "resize", width: window.innerWidth, height: window.innerHeight, dpr: dprNow() });
    };
    const onMouseMove = (e) => workerRef.current?.postMessage({ type: "mouse", x: e.clientX, y: e.clientY });
    const onMouseLeave = () => workerRef.current?.postMessage({ type: "mouseout" });
    const onVisibility = () => workerRef.current?.postMessage({ type: "visibility", state: document.visibilityState });
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [prefersReducedMotion, isMobile]);

  return (
    <div
      className="relative w-full overflow-hidden font-body hero-root"
      style={{ backgroundColor: "#0d0500" }}
    >
      {/* dangerouslySetInnerHTML : evite que React n'echappe les quotes (') en
          &#x27; dans le contenu du <style>. Un <style> est un "raw text element"
          (les entites n'y sont pas decodees), donc l'echappement casserait le CSS
          cote parsing critique (Beasties/postcss au build SSG). */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-display { font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif; }
        .font-body { font-family: 'Outfit', system-ui, -apple-system, 'Segoe UI', sans-serif; }
        .ts-soft { text-shadow: 0 1px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5); }
        .ts-strong { text-shadow: 0 2px 12px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.6); }
        .btn-primary { box-shadow: 0 4px 28px -8px rgba(201, 149, 58, 0.6); }
        .btn-primary:hover { box-shadow: 0 8px 40px -8px rgba(201, 149, 58, 0.95); }
        .focus-ring:focus { outline: none; }
        .focus-ring:focus-visible {
          outline: 3px solid #C9953A;
          outline-offset: 4px;
        }

        /* Layout responsive en CSS (pas en JS) : le pre-rendu SSG et le client
           rendent le meme HTML, le bon layout est choisi par le viewport reel.
           Evite la bascule desktop->mobile a l'hydratation (cause du CLS).
           Breakpoint mobile = <1024px (base) ; desktop = >=1024px (.lg). */
        .hero-root { height: 100svh; min-height: 600px; }
        .hero-overlay { background: radial-gradient(ellipse 80% 50% at 50% 32%, transparent 0%, rgba(13,5,0,0.5) 100%); }
        .hero-inner { align-items: flex-end; justify-content: center; padding-left: clamp(1.5rem,6vw,2rem); padding-right: clamp(1.5rem,6vw,2rem); padding-bottom: 4rem; padding-top: 58vh; }
        .hero-text { max-width: calc(100vw - 3rem); text-align: center; }
        .hero-wordwrap { display: flex; justify-content: center; }
        .hero-word { display: inline-block; }
        .hero-rotating { right: 0; text-align: center; }
        .hero-para { margin-left: auto; margin-right: auto; }
        .hero-btns { align-items: center; justify-content: center; }
        .hero-scroll { display: none; }
        @media (min-width: 1024px) {
          .hero-root { height: 100vh; min-height: 100vh; }
          .hero-overlay { background: radial-gradient(ellipse 70% 60% at 78% 50%, transparent 0%, rgba(13,5,0,0.5) 100%); }
          .hero-inner { align-items: center; justify-content: flex-start; padding-left: clamp(1.5rem,6vw,8rem); padding-right: clamp(1.5rem,8vw,10rem); padding-bottom: 0; padding-top: 0; }
          .hero-text { max-width: min(50rem, calc(100vw - 3rem)); text-align: left; }
          .hero-wordwrap { display: block; }
          .hero-word { display: block; }
          .hero-rotating { right: auto; text-align: left; }
          .hero-para { margin-left: 0; margin-right: 0; }
          .hero-btns { align-items: stretch; justify-content: flex-start; }
          .hero-scroll { display: flex; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; }
        }
      ` }} />

      <div className="absolute inset-0 z-0" style={{ backgroundColor: "#0d0500" }} />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1]"
        style={{ pointerEvents: "none" }}
      />

      <div className="absolute inset-0 z-10 pointer-events-none hero-overlay" />

      <div className="relative z-20 h-full flex hero-inner">
        <div className="w-full hero-text">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-md mb-5 lg:mb-10 ts-soft"
          >
            <BrainCircuit className="w-4 h-4 text-amber-300" />
            <span className="text-amber-100 text-xs tracking-[0.18em] uppercase font-medium">
              Neurosciences & Performance
            </span>
          </motion.div>

          <motion.h1
            // initial={false} : visible des le pre-rendu, pas de re-animation a
            // l'hydratation (sinon le texte LCP attend hydratation + delay).
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="font-display italic font-light text-white leading-[1.05] ts-strong"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6.25rem)" }}
          >
            Éveillez votre
          </motion.h1>

          <motion.div
            // Conteneur du mot rotatif : initial={false} sinon il repasse a
            // opacity:0 a l'hydratation et masque le mot (candidat above-the-fold).
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-2 mb-4 lg:mb-8 hero-wordwrap"
          >
            <div
              className="relative hero-word"
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
                  initial={
                    !hasRotated
                      ? false
                      : prefersReducedMotion
                        ? { opacity: 0 }
                        : { y: "100%", opacity: 0 }
                  }
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
                  // .hero-rotating gere le centrage responsive : sur mobile le
                  // conteneur a la largeur du mot le plus long, on etire le span
                  // (right:0) + text-center pour centrer les mots courts.
                  className="absolute font-black tracking-wide whitespace-nowrap hero-rotating"
                  style={{
                    color: "#C9953A",
                    fontFamily: "Outfit, sans-serif",
                    left: 0,
                    top: "0.05em",
                    lineHeight: 1.1,
                    fontSize: "clamp(2.5rem, 6vw, 7rem)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.85), 0 0 30px rgba(0,0,0,0.6)",
                  }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            // Element LCP mobile : initial={false} pour qu'il se peigne des le CSS
            // (sinon re-animation a l'hydratation + delay 1.1s => LCP ~4,2s).
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-white/85 max-w-xl leading-relaxed mb-4 font-light ts-soft hero-para"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.375rem)" }}
          >
            Comprenez comment votre cerveau fonctionne.
            <br />
            Transformez votre vie avec la science.
          </motion.p>

          <motion.p
            // Texte critique above-the-fold : visible des le pre-rendu.
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-sm italic mb-8 lg:mb-14 font-display tracking-wide ts-soft"
            style={{ color: "rgba(254, 243, 199, 0.65)" }}
          >
            Rejoignez les esprits curieux qui reprennent le contrôle.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 hero-btns"
          >
            <button
              onClick={() => navigate("/blog")}
              className="btn-primary focus-ring group rounded-full px-8 py-3 font-semibold text-sm tracking-wide transition-all duration-300"
              style={{ backgroundColor: "#C9953A", color: "#0d0500" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#D4A24A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C9953A"; }}
            >
              Découvrir les articles{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
              className="focus-ring rounded-full px-8 py-3 font-medium text-sm tracking-wide transition-all duration-300 ts-soft text-white bg-black/20 backdrop-blur-sm hover:bg-black/30"
              style={{ border: "1.5px solid rgba(201, 149, 58, 0.5)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201, 149, 58, 0.8)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201, 149, 58, 0.5)"; }}
            >
              Recevoir le guide gratuit
            </button>
          </motion.div>
        </div>
      </div>

      {/* Toujours rendu, masque en mobile via CSS (.hero-scroll) pour eviter
          un re-render JS a l'hydratation. Element absolu = aucun impact CLS. */}
      <ScrollIndicator prefersReducedMotion={prefersReducedMotion} />
    </div>
  );
}

function ScrollIndicator({ prefersReducedMotion }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 100) setVisible(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute bottom-20 left-1/2 z-30 pointer-events-none hero-scroll flex-col items-center gap-3"
      style={{ transform: "translateX(-50%)", opacity: visible ? 0.85 : 0, transition: "opacity 0.5s ease" }}
      aria-hidden="true"
    >
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

      <div style={{ position: "relative", width: "1px", height: "48px" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(201, 149, 58, 0.3)" }} />
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
          transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, times: [0, 0.1, 0.6, 1] }}
        />
      </div>
    </div>
  );
}
