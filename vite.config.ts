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
  'regulation-emotionnelle-techniques-psychologie',
  'resoudre-un-conflit-methodes-psychologie',
  'objectifs-smart-methode-neurosciences',
  'formation-habitudes-cerveau-neurosciences',
  'concentration-profonde-deep-work-neurosciences',
  'biais-cognitifs-liste-psychologie',
  'anxiete-mecanismes-neurologiques-solutions-scientifiques',
  'burn-out-signaux-neurobiologiques-recuperation',
]

export default defineConfig(({ isSsrBuild }) => ({
  ssgOptions: {
    mock: true,
    dirStyle: 'nested',
    // Critical CSS : vite-react-ssg lance `beasties` pendant le SSG (vrai DOM
    // pré-rendu) pour inliner le CSS critique dans le <head> et basculer le bundle
    // CSS (~150KB) en chargement asynchrone. Supprime le render-blocking qui
    // plombait FCP/LCP mobile.
    //   preload:'media' : <link rel=stylesheet media=print onload=this.media='all'>
    //     + <noscript> de secours. Pattern non-bloquant éprouvé (la stratégie 'swap'
    //     laissait rel=stylesheet => restait render-blocking).
    //   pruneSource:false : le CSS chargé en async reste complet
    //   inlineFonts/preloadFonts:false : on gère le preload des polices nous-mêmes
    //     (onPageRendered ci-dessous, home only)
    beastiesOptions: {
      preload: 'media',
      pruneSource: false,
      inlineFonts: false,
      preloadFonts: false,
      logLevel: 'silent',
    },
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
    // Outfit servent surtout sur la page d'accueil (hero + DailyQuote) ; les
    // précharger globalement gaspillerait du transfert sur chaque article. Ici
    // on les injecte au rendu SSG de la home seule → corrige le CLS de font-swap
    // sans pénaliser les autres pages. Polices self-hostées (same-origin), donc
    // le preload matche toujours le fichier réellement chargé (cf. src/index.css).
    onPageRendered(route: string, html: string) {
      if (route !== '/' && route !== '') return html
      const preloads =
        '<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/cormorant-garamond-italic.woff2">' +
        '<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/outfit-variable.woff2">'
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
        // Fonction (et non objet) : la forme objet `{ 'vendor-motion': ['framer-motion'] }`
        // laissait Rollup ranger `react/jsx-runtime` (importé par framer) dans
        // vendor-motion. Comme TOUT le JSX de l'app importe le jsx-runtime, le chunk
        // framer (117 KB) devenait une dépendance eager de CHAQUE page → preload inutile
        // qui bloquait l'hydratation/LCP.
        //
        // Règle : on ne force en chunks nommés QUE les fondations eager (React + son
        // écosystème, icônes). framer-motion / recharts / d3 ne sont PAS listés : ils
        // ne sont importés que par des pages lazy, donc Rollup les place tout seul dans
        // des chunks async (chargés à la demande), jamais en eager sur la home.
        // Ne jamais router un gros lib lazy dans un chunk nommé : si une fondation
        // partagée (jsx-runtime, react-is…) y atterrit, elle traîne tout le lib en eager.
        manualChunks: isSsrBuild ? undefined : (id) => {
          if (!id.includes('node_modules')) return
          if (/[\\/]react[\\/]/.test(id) || id.includes('react/jsx-runtime') ||
              /[\\/]react-dom[\\/]/.test(id) || /[\\/]scheduler[\\/]/.test(id) ||
              id.includes('react-router') || /[\\/]react-is[\\/]/.test(id) ||
              id.includes('react-helmet')) return 'vendor-react'
          if (id.includes('lucide-react')) return 'vendor-icons'
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
