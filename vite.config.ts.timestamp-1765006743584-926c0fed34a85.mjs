// vite.config.ts
import { defineConfig } from "file:///C:/Users/user/Documents/SiteLeveil/project/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/Documents/SiteLeveil/project/node_modules/@vitejs/plugin-react/dist/index.js";
import { VitePWA } from "file:///C:/Users/user/Documents/SiteLeveil/project/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendors React
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Autres vendors
          "vendor-ui": ["framer-motion", "lucide-react"]
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "L'\xC9veil \u2013 Psychologie & D\xE9veloppement Personnel",
        short_name: "L'\xC9veil",
        description: "Articles, outils et ressources pour votre bien-\xEAtre mental, bas\xE9s sur la science.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        theme_color: "#6366f1",
        background_color: "#fafaf9",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"],
        navigateFallback: "index.html",
        navigateFallbackDenylist: [
          /^\/og(?:$|[\/?])/,
          // ← match /og, /og/ et /og?...
          /\/assets\//,
          /\/images\//,
          /\/icons?\//,
          /\/manifest\.json(?:\?.*)?$/,
          /\/robots\.txt(?:\?.*)?$/,
          /\/sitemap\.xml(?:\?.*)?$/,
          /\.[^/]+$/
        ],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        runtimeCaching: [
          // ⚠️ NE JAMAIS cacher /og : on veut laisser l’Edge Function répondre
          {
            urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith("/og"),
            handler: "NetworkOnly"
          },
          {
            urlPattern: /^https:\/\/images\.pexels\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "pexels-images",
              expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: { cacheName: "google-fonts-styles" }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: { maxEntries: 30, maxAgeSeconds: 365 * 24 * 60 * 60 }
            }
          },
          {
            urlPattern: ({ request, sameOrigin }) => sameOrigin && request.destination === "image",
            handler: "StaleWhileRevalidate",
            options: { cacheName: "same-origin-images" }
          }
        ]
      }
    })
    // <- fin VitePWA
  ]
  // <- fin plugins
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFxTaXRlTGV2ZWlsXFxcXHByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHVzZXJcXFxcRG9jdW1lbnRzXFxcXFNpdGVMZXZlaWxcXFxccHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdXNlci9Eb2N1bWVudHMvU2l0ZUxldmVpbC9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgIC8vIFZlbmRvcnMgUmVhY3RcclxuICAgICAgICAgICd2ZW5kb3ItcmVhY3QnOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXHJcbiAgICAgICAgICAvLyBBdXRyZXMgdmVuZG9yc1xyXG4gICAgICAgICAgJ3ZlbmRvci11aSc6IFsnZnJhbWVyLW1vdGlvbicsICdsdWNpZGUtcmVhY3QnXSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDYwMFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLmljbycsICdhcHBsZS10b3VjaC1pY29uLnBuZycsICdtYXNrLWljb24uc3ZnJ10sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogXCJMJ1x1MDBDOXZlaWwgXHUyMDEzIFBzeWNob2xvZ2llICYgRFx1MDBFOXZlbG9wcGVtZW50IFBlcnNvbm5lbFwiLFxyXG4gICAgICAgIHNob3J0X25hbWU6IFwiTCdcdTAwQzl2ZWlsXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkFydGljbGVzLCBvdXRpbHMgZXQgcmVzc291cmNlcyBwb3VyIHZvdHJlIGJpZW4tXHUwMEVBdHJlIG1lbnRhbCwgYmFzXHUwMEU5cyBzdXIgbGEgc2NpZW5jZS5cIixcclxuICAgICAgICBzdGFydF91cmw6ICcvJyxcclxuICAgICAgICBzY29wZTogJy8nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyM2MzY2ZjEnLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjZmFmYWY5JyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAgeyBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLCBzaXplczogJzE5MngxOTInLCB0eXBlOiAnaW1hZ2UvcG5nJyB9LFxyXG4gICAgICAgICAgeyBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLCBzaXplczogJzUxMng1MTInLCB0eXBlOiAnaW1hZ2UvcG5nJyB9LFxyXG4gICAgICAgICAgeyBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLCBzaXplczogJzUxMng1MTInLCB0eXBlOiAnaW1hZ2UvcG5nJywgcHVycG9zZTogJ2FueSBtYXNrYWJsZScgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgd29ya2JveDoge1xyXG4gICAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3MsaHRtbCxpY28scG5nLHN2Zyx3ZWJwLHdvZmYyfSddLFxyXG5cclxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnaW5kZXguaHRtbCcsXHJcbiAgICAgICAgbmF2aWdhdGVGYWxsYmFja0RlbnlsaXN0OiBbXHJcbiAgICAgICAgICAvXlxcL29nKD86JHxbXFwvP10pLywgICAvLyBcdTIxOTAgbWF0Y2ggL29nLCAvb2cvIGV0IC9vZz8uLi5cclxuICAgICAgICAgIC9cXC9hc3NldHNcXC8vLFxyXG4gICAgICAgICAgL1xcL2ltYWdlc1xcLy8sXHJcbiAgICAgICAgICAvXFwvaWNvbnM/XFwvLyxcclxuICAgICAgICAgIC9cXC9tYW5pZmVzdFxcLmpzb24oPzpcXD8uKik/JC8sXHJcbiAgICAgICAgICAvXFwvcm9ib3RzXFwudHh0KD86XFw/LiopPyQvLFxyXG4gICAgICAgICAgL1xcL3NpdGVtYXBcXC54bWwoPzpcXD8uKik/JC8sXHJcbiAgICAgICAgICAvXFwuW14vXSskLyxcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXM6IHRydWUsXHJcbiAgICAgICAgY2xpZW50c0NsYWltOiB0cnVlLFxyXG5cclxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xyXG4gICAgICAgICAgLy8gXHUyNkEwXHVGRTBGIE5FIEpBTUFJUyBjYWNoZXIgL29nIDogb24gdmV1dCBsYWlzc2VyIGxcdTIwMTlFZGdlIEZ1bmN0aW9uIHJcdTAwRTlwb25kcmVcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsUGF0dGVybjogKHsgdXJsLCBzYW1lT3JpZ2luIH0pID0+IHNhbWVPcmlnaW4gJiYgdXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9vZycpLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAnTmV0d29ya09ubHknLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvaW1hZ2VzXFwucGV4ZWxzXFwuY29tXFwvLiovaSxcclxuICAgICAgICAgICAgaGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAncGV4ZWxzLWltYWdlcycsXHJcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjogeyBtYXhFbnRyaWVzOiA2MCwgbWF4QWdlU2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcclxuICAgICAgICAgICAgaGFuZGxlcjogJ1N0YWxlV2hpbGVSZXZhbGlkYXRlJyxcclxuICAgICAgICAgICAgb3B0aW9uczogeyBjYWNoZU5hbWU6ICdnb29nbGUtZm9udHMtc3R5bGVzJyB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsUGF0dGVybjogL15odHRwczpcXC9cXC9mb250c1xcLmdzdGF0aWNcXC5jb21cXC8uKi9pLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdnb29nbGUtZm9udHMtd2ViZm9udHMnLFxyXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHsgbWF4RW50cmllczogMzAsIG1heEFnZVNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsUGF0dGVybjogKHsgcmVxdWVzdCwgc2FtZU9yaWdpbiB9KSA9PiBzYW1lT3JpZ2luICYmIHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdpbWFnZScsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICdTdGFsZVdoaWxlUmV2YWxpZGF0ZScsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHsgY2FjaGVOYW1lOiAnc2FtZS1vcmlnaW4taW1hZ2VzJyB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG5cclxuICAgIH0pLCAgIC8vIDwtIGZpbiBWaXRlUFdBXHJcbiAgXSwgICAgICAvLyA8LSBmaW4gcGx1Z2luc1xyXG59KSAgICAgICAgLy8gPC0gZmluIGRlZmluZUNvbmZpZ1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVMsb0JBQW9CO0FBQ3pWLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixnQkFBZ0IsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUE7QUFBQSxVQUV6RCxhQUFhLENBQUMsaUJBQWlCLGNBQWM7QUFBQSxRQUMvQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsd0JBQXdCLGVBQWU7QUFBQSxNQUN0RSxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUNFO0FBQUEsUUFDRixXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixPQUFPO0FBQUEsVUFDTCxFQUFFLEtBQUssbUJBQW1CLE9BQU8sV0FBVyxNQUFNLFlBQVk7QUFBQSxVQUM5RCxFQUFFLEtBQUssbUJBQW1CLE9BQU8sV0FBVyxNQUFNLFlBQVk7QUFBQSxVQUM5RCxFQUFFLEtBQUssbUJBQW1CLE9BQU8sV0FBVyxNQUFNLGFBQWEsU0FBUyxlQUFlO0FBQUEsUUFDekY7QUFBQSxNQUNGO0FBQUEsTUFFQSxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsMkNBQTJDO0FBQUEsUUFFMUQsa0JBQWtCO0FBQUEsUUFDbEIsMEJBQTBCO0FBQUEsVUFDeEI7QUFBQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFFQSx1QkFBdUI7QUFBQSxRQUN2QixjQUFjO0FBQUEsUUFFZCxnQkFBZ0I7QUFBQTtBQUFBLFVBRWQ7QUFBQSxZQUNFLFlBQVksQ0FBQyxFQUFFLEtBQUssV0FBVyxNQUFNLGNBQWMsSUFBSSxTQUFTLFdBQVcsS0FBSztBQUFBLFlBQ2hGLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFFQTtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWSxFQUFFLFlBQVksSUFBSSxlQUFlLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFBQSxZQUNqRTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxTQUFTLEVBQUUsV0FBVyxzQkFBc0I7QUFBQSxVQUM5QztBQUFBLFVBQ0E7QUFBQSxZQUNFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxjQUNYLFlBQVksRUFBRSxZQUFZLElBQUksZUFBZSxNQUFNLEtBQUssS0FBSyxHQUFHO0FBQUEsWUFDbEU7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsWUFBWSxDQUFDLEVBQUUsU0FBUyxXQUFXLE1BQU0sY0FBYyxRQUFRLGdCQUFnQjtBQUFBLFlBQy9FLFNBQVM7QUFBQSxZQUNULFNBQVMsRUFBRSxXQUFXLHFCQUFxQjtBQUFBLFVBQzdDO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUVGLENBQUM7QUFBQTtBQUFBLEVBQ0g7QUFBQTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
