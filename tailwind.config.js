/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        sand: {
          50: '#F5EDE2',   // Beige très clair - fonds mode clair
          100: '#E8D9C4',  // Beige clair - cartes mode clair
          200: '#D4C4B0',  // Beige moyen - texte mode sombre
          300: '#C0B09C',  // Beige
          400: '#A89984',  // Beige grisé - métadonnées
          500: '#8B7869',  // Marron clair
          600: '#6F5F52',  // Marron moyen
          700: '#5A4A42',  // Marron foncé - texte mode clair
          800: '#453832',  // Marron très foncé
          900: '#2D2520',  // Marron presque noir - titres mode clair
        },
        gold: {
          300: '#F4C47E',  // Doré clair - glow effects
          400: '#E8A85E',  // Doré lumineux - CTA mode sombre
          500: '#D4974E',  // Doré - CTA mode clair
          600: '#B8804A',  // Doré foncé - hover
          700: '#9C6A3E',  // Doré très foncé
        },
        // ✨ NOUVEAU : Couleurs pour chaque catégorie
        neurosciences: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#5b56f0",
          700: "#4f46e5",
        },
        psychologie: {
          50: "#fdf2f8",
          100: "#fce7f3",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
        },
        developpement: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        relations: {
          50: "#faf5ff",
          100: "#f3e8ff",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        // Sleep Calculator Theme
        sleep: {
          primary: "#2B7A8F",  // Teal dark
          light: "#32B8C6",    // Teal light
          accent: "#E8A638",   // Gold
          bg: "#F5EDE2",       // Beige warm
          dark: "#0F2D3D",     // Navy dark
        },
      },
      // ✨ NOUVEAU : Gradients personnalisés
      backgroundImage: {
        "gradient-neurosciences": "var(--gradient-neurosciences)",
        "gradient-neurosciences-soft": "var(--gradient-neurosciences-soft)",
        "gradient-neurosciences-hover": "var(--gradient-neurosciences-hover)",
        "gradient-psychologie": "var(--gradient-psychologie)",
        "gradient-psychologie-soft": "var(--gradient-psychologie-soft)",
        "gradient-psychologie-hover": "var(--gradient-psychologie-hover)",
        "gradient-developpement": "var(--gradient-developpement)",
        "gradient-developpement-soft": "var(--gradient-developpement-soft)",
        "gradient-developpement-hover": "var(--gradient-developpement-hover)",
        "gradient-relations": "var(--gradient-relations)",
        "gradient-relations-soft": "var(--gradient-relations-soft)",
        "gradient-relations-hover": "var(--gradient-relations-hover)",
      },
      // ✨ NOUVEAU : Box shadows personnalisées
      boxShadow: {
        "soft": "var(--shadow-soft)",
        "medium": "var(--shadow-medium)",
        "strong": "var(--shadow-strong)",
        "glow": "var(--shadow-glow)",
        "glow-neurosciences": "0 0 30px rgba(99, 102, 241, 0.3)",
        "glow-psychologie": "0 0 30px rgba(236, 72, 153, 0.3)",
        "glow-developpement": "0 0 30px rgba(16, 185, 129, 0.3)",
        "glow-relations": "0 0 30px rgba(139, 92, 246, 0.3)",
      },
      animation: {
        // TES ANIMATIONS EXISTANTES (gardées)
        "fadeInUp": "fadeInUp 0.6s ease-out",
        pulse: "pulse 2s infinite",
        "fade-in": "fadeIn 0.8s ease-out both",
        "slide-in-bottom-4": "slideInBottom4 0.7s ease-out both",
        "slide-in-bottom-8": "slideInBottom8 0.9s ease-out both",
        particle: "particle var(--p-duration,8s) linear infinite",
        // ✨ NOUVEAU : Animations pour les cartes
        "card-hover": "cardHover 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        // TES KEYFRAMES EXISTANTES (gardées)
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideInBottom4: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInBottom8: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        particle: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0.6" },
          "50%": { opacity: "1" },
          "100%": {
            transform: "translateY(-120px) translateX(40px)",
            opacity: "0",
          },
        },
        // ✨ NOUVEAU : Keyframes pour les nouveaux effets
        cardHover: {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(-8px) scale(1.02)" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      // ✨ NOUVEAU : Transitions personnalisées
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-soft": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      // ✨ NOUVEAU : Backdrop blur pour glassmorphism
      backdropBlur: {
        "xs": "2px",
        "sm": "4px",
        "md": "8px",
        "lg": "16px",
        "xl": "24px",
        "2xl": "40px",
      },
    },
  },
  plugins: [
    animate, // TON PLUGIN EXISTANT (gardé)
    // ✨ NOUVEAU : Plugin personnalisé pour les classes utilitaires
    function ({ addUtilities }) {
      const newUtilities = {
        // Classes glassmorphism
        '.glass-card': {
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--glass-shadow)',
          backdropFilter: 'var(--glass-backdrop)',
          '-webkit-backdrop-filter': 'var(--glass-backdrop)',
          borderRadius: '1rem',
        },
        '.glass-card-soft': {
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
        },
        // Classes pour texte gradient
        '.text-gradient': {
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        // Classes d'animation
        '.enhanced-transition': {
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.enhanced-transition-fast': {
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};