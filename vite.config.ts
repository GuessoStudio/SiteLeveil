import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
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

  navigateFallback: 'index.html',
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
})        // <- fin defineConfig
