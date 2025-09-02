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
      },
      animation: {
        "fadeInUp": "fadeInUp 0.6s ease-out",
        pulse: "pulse 2s infinite",
        "fade-in": "fadeIn 0.8s ease-out both",
        "slide-in-bottom-4": "slideInBottom4 0.7s ease-out both",
        "slide-in-bottom-8": "slideInBottom8 0.9s ease-out both",
        particle: "particle var(--p-duration,8s) linear infinite",
      },
      keyframes: {
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
      },
    },
  },
  plugins: [animate],
};
