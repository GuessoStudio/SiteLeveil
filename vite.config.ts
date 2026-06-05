import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'url'

// Slugs des articles — doit rester synchronisé avec src/data/blog-articles.ts
const ARTICLE_SLUGS = [
  'surmonter-rejet-social',
  'neuroplasticite-cerveau',
  'confiance-en-soi-durable',
  'neuro-dopamine-routine',
  'attention-fragmentee-concentration-numerique',
  'rumination-mentale-pensees-obsessionnelles',
  'procrastination-cerveau-agir-neurosciences',
  'methode-acr-repondre-aux-bonnes-nouvelles',
  'syndrome-imposteur-solutions',
  'sommeil-reparateur-7-strategies-validees',
  'lumiere-naturelle-cerveau-sommeil-sante-mentale',
  'bdnf-augmenter-naturellement-neurosciences',
  'systeme-limbique-cerveau-emotionnel',
  'plasticite-synaptique-apprentissage-cerveau',
  'empathie-neurones-miroirs-connexion-humaine',
  'neurotransmetteurs-humeur-cerveau',
  'cortisol-stress-chronique-cerveau-memoire',
  'communication-non-violente-cnv',
  'ecoute-active-technique-carl-rogers',
  'mindset-de-croissance-psychologie-dweck',
  'routine-matinale-scientifique-cerveau',
]

export default defineConfig(({ isSsrBuild }) => ({
  ssgOptions: {
    mock: true,
    dirStyle: 'nested',
    includedRoutes(paths: string[]) {
      const EXCLUDE = ['/og-test', '/habit-tracker']
      const EXCLUDE_PREFIX = [
        '/admin',
        '/neuro-journal/onboarding',
        '/neuro-journal/dashboard',
        '/neuro-journal/checkin',
      ]
      return paths
        .flatMap(p =>
          p.includes(':slug')
            ? ARTICLE_SLUGS.map(s => `/blog/${s}`)
            : [p]
        )
        .filter(
          p =>
            !EXCLUDE.includes(p) &&
            !EXCLUDE_PREFIX.some(x => p.startsWith(x)) &&
            !p.includes(':') &&
            !p.includes('*')
        )
    },
    // Preload des polices du hero UNIQUEMENT sur la home. Cormorant Garamond +
    // Outfit ne servent que sur la page d'accueil (hero + DailyQuote) ; les
    // précharger globalement gaspillerait 71 Ko sur chaque article. Ici on les
    // injecte au rendu SSG de la home seule → corrige le CLS de font-swap sans
    // pénaliser les autres pages. Sous-ensemble latin ; si Google fait tourner
    // ces URLs v21/v15, le navigateur ignore le preload (dégradation propre).
    onPageRendered(route: string, html: string) {
      if (route !== '/' && route !== '') return html
      const preloads =
        '<link rel="preload" as="font" type="font/woff2" crossorigin href="https://fonts.gstatic.com/s/cormorantgaramond/v21/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSqn7B6D.woff2">' +
        '<link rel="preload" as="font" type="font/woff2" crossorigin href="https://fonts.gstatic.com/s/outfit/v15/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2">'
      return html.replace('</head>', preloads + '</head>')
    },
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    dedupe: ['react', 'react-dom', 'react-helmet-async'],
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: isSsrBuild ? undefined : {
          // Core React (always needed)
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Icons (lightweight, used everywhere)
          'vendor-icons': ['lucide-react'],
          // Animation library (only loaded by pages using motion)
          'vendor-motion': ['framer-motion'],
          // Chart library (only used in Neuro-Journal)
          'vendor-charts': ['recharts'],
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script-defer',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: "L'Éveil – Psychologie & Développement Personnel",
        short_name: "L'Éveil",
        description:
          "Articles, outils et ressources pour votre bien-être mental, basés sur la science.",
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#6366f1',
        background_color: '#fafaf9',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],

        navigateFallback: null,
        navigateFallbackDenylist: [
          /^\/og(?:$|[\/?])/,   // ← match /og, /og/ et /og?...
          /\/assets\//,
          /\/images\//,
          /\/icons?\//,
          /\/manifest\.json(?:\?.*)?$/,
          /\/robots\.txt(?:\?.*)?$/,
          /\/sitemap\.xml(?:\?.*)?$/,
          /\.[^/]+$/,
        ],

        cleanupOutdatedCaches: true,
        clientsClaim: true,

        runtimeCaching: [
          // ⚠️ NE JAMAIS cacher /og : on veut laisser l’Edge Function répondre
          {
            urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith('/og'),
            handler: 'NetworkOnly',
          },

          {
            urlPattern: /^https:\/\/images\.pexels\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pexels-images',
              expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-styles' },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 365 * 24 * 60 * 60 },
            },
          },
          {
            urlPattern: ({ request, sameOrigin }) => sameOrigin && request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'same-origin-images' },
          },
        ],
      },

    }),   // <- fin VitePWA
  ],      // <- fin plugins
}))       // <- fin defineConfig
