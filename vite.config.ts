import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

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
  },
  resolve: {
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
