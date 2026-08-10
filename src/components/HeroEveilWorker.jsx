import { useRef, useEffect, useState } from "react";
import { BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startBrainEngine } from "./brainEngine.js";

const ROTATING_WORDS = ["POTENTIEL", "CERVEAU", "CONSCIENCE", "CLARTÉ", "LIBERTÉ"];
const LONGEST_WORD = ROTATING_WORDS.reduce((a, b) => (a.length > b.length ? a : b));

export default function HeroEveilWorker() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  // prevIndex reste null jusqu'au 1er changement de mot : le mot entrant est alors
  // rendu SANS animation, donc visible dès le HTML pré-rendu (candidat LCP). Après
  // la 1re rotation, prevIndex pilote la couche sortante (slide CSS en 2 couches).
  const [prevIndex, setPrevIndex] = useState(null);
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
      setWordIndex((i) => {
        setPrevIndex(i);
        return (i + 1) % ROTATING_WORDS.length;
      });
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Retire la couche sortante du DOM ~0.65s apres son apparition (duree de
  // l'animation heroWordOut). Filet de securite : si l'animation CSS ne se
  // termine pas (onglet en arriere-plan, throttling navigateur), le mot
  // precedent ne reste pas superpose en permanence au mot courant.
  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => setPrevIndex(null), 650);
    return () => clearTimeout(t);
  }, [prevIndex, wordIndex]);

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

    // Pause de l'animation quand le hero n'est pas affichable, pour deux raisons :
    //  - onglet en arriere-plan (visibilitychange)
    //  - hero scrolle hors de l'ecran (IntersectionObserver)
    // Sans ca, le canvas plein ecran continue de tourner (rAF + compositing) pendant
    // tout le scroll de la page => saccades meme dans les sections du bas.
    let pageVisible = document.visibilityState === "visible";
    let heroInView = true;
    const syncRunState = () => workerRef.current?.postMessage({
      type: "visibility",
      state: pageVisible && heroInView ? "visible" : "hidden",
    });
    const onVisibility = () => { pageVisible = document.visibilityState === "visible"; syncRunState(); };

    const io = new IntersectionObserver(
      ([entry]) => { heroInView = entry.isIntersecting; syncRunState(); },
      { threshold: 0 }
    );
    io.observe(canvas);

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
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
      {/* Le CSS du hero vit dans src/index.css (section HERO).
          Ne PAS le remettre en <style> inline ici : beasties (critical CSS,
          lance par vite-react-ssg au SSG) absorbe les <style> du body dans le
          <head>. Le HTML servi perdait donc l'element que React attend a cet
          endroit -> "Expected server HTML to contain a matching <style> in
          <div>" -> hydratation en echec et bascule de la racine en rendu
          client. Depuis index.css, beasties inline le critique dans le <head>
          sans rien retirer de l'arbre React. */}

      <div className="absolute inset-0 z-0" style={{ backgroundColor: "#0d0500" }} />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1]"
        style={{ pointerEvents: "none" }}
      />

      <div className="absolute inset-0 z-10 pointer-events-none hero-overlay" />

      <div className="relative z-20 h-full flex hero-inner">
        <div className="w-full hero-text">
          <div
            className="hero-anim-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-md mb-5 lg:mb-10 ts-soft"
          >
            <BrainCircuit className="w-4 h-4 text-amber-300" />
            <span className="text-amber-100 text-xs tracking-[0.18em] uppercase font-medium">
              Neurosciences & Performance
            </span>
          </div>

          {/* Pas d'animation : peint dès le pré-rendu (chemin LCP). */}
          <h1
            className="font-display italic font-light text-white leading-[1.05] ts-strong"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 6.25rem)" }}
          >
            Éveillez votre
          </h1>

          <div className="mt-2 mb-4 lg:mb-8 hero-wordwrap">
            <div
              className="relative hero-word"
              style={{ overflow: "hidden", paddingTop: "0.05em", paddingBottom: "0.15em" }}
            >
              {/* Spacer invisible : fixe la hauteur/largeur sur le mot le plus long */}
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

              {/* Couche sortante : n'existe qu'après la 1re rotation (slide vers le haut).
                  Jamais rendue en reduced-motion : sans animation (animation:none),
                  elle resterait opaque et superposee au mot courant => illisible. */}
              {prevIndex !== null && !prefersReducedMotion && (
                <span
                  key={`out-${prevIndex}`}
                  aria-hidden="true"
                  className="absolute font-black tracking-wide whitespace-nowrap hero-rotating hero-word-out"
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
                  {ROTATING_WORDS[prevIndex]}
                </span>
              )}

              {/* Couche entrante. Au 1er rendu (prevIndex null) : aucune animation
                  → mot visible immédiatement (candidat LCP). Ensuite : slide montant.
                  .hero-rotating gère le centrage responsive (mobile centré, desktop gauche). */}
              <span
                key={`in-${wordIndex}`}
                className={`absolute font-black tracking-wide whitespace-nowrap hero-rotating ${prevIndex !== null ? "hero-word-in" : ""}`}
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
              </span>
            </div>
          </div>

          {/* Élément LCP mobile : peint dès le pré-rendu, aucune animation. */}
          <p
            className="text-white/85 max-w-xl leading-relaxed mb-4 font-light ts-soft hero-para"
            style={{ fontSize: "clamp(1rem, 1.25vw, 1.375rem)" }}
          >
            Comprenez comment votre cerveau fonctionne.
            <br />
            Transformez votre vie avec la science.
          </p>

          {/* Texte critique above-the-fold : visible dès le pré-rendu. */}
          <p
            className="text-sm italic mb-8 lg:mb-14 font-display tracking-wide ts-soft"
            style={{ color: "rgba(254, 243, 199, 0.65)" }}
          >
            Rejoignez les esprits curieux qui reprennent le contrôle.
          </p>

          <div
            className="hero-anim-btns flex flex-col sm:flex-row gap-3 sm:gap-4 hero-btns"
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
          </div>
        </div>
      </div>

      {/* Toujours rendu, masque en mobile via CSS (.hero-scroll) pour eviter
          un re-render JS a l'hydratation. Element absolu = aucun impact CLS. */}
      <ScrollIndicator />
    </div>
  );
}

function ScrollIndicator() {
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
        <div
          className="hero-scroll-dot"
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
        />
      </div>
    </div>
  );
}
