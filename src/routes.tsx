import type { ComponentType } from 'react'
import type { RouteRecord } from 'vite-react-ssg'
import App from './App'
import { articles } from './data/blog-articles'

// Home reste en import statique : c'est la page d'entrée principale et l'élément
// LCP critique — on ne veut pas de chunk dynamique sur le premier rendu.
import Home from './pages/Home'

// NeuroJournalLayout : shell léger des sous-routes app, gardé eager (petit).
import NeuroJournalLayout from './pages/NeuroJournal/NeuroJournalLayout'

// Toutes les autres pages sont chargées en lazy (code-splitting par route).
// Avant : routes.tsx importait statiquement les ~20 pages → toutes dans app-*.js
// (chargé sur la home). Les pages lourdes (neuro-journal → recharts + jspdf,
// big-five, landing pages) gonflaient le bundle initial inutilement.
// React Router résout `lazy` avant le rendu ; en SSG, renderToPipeableStream +
// onAllReady attend la résolution → HTML pré-rendu complet (SEO intact).
const lazyPage = (
  importer: () => Promise<{ default: ComponentType }>,
) => async () => ({ Component: (await importer()).default })

export const routes: RouteRecord[] = [
  {
    // App est le layout racine : fournit Header, Footer et tous les providers.
    // ViteReactSSG injecte un router autour, pas besoin de BrowserRouter dans App.
    path: '/',
    element: <App />,
    children: [
      // Pages principales
      { index: true, element: <Home /> },
      { path: 'blog', lazy: lazyPage(() => import('./pages/Blog')) },
      {
        path: 'blog/:slug',
        lazy: lazyPage(() => import('./pages/Article')),
        // getStaticPaths indique à vite-react-ssg les URLs concrètes à pré-rendre
        getStaticPaths: () => articles.map(a => `/blog/${a.slug}`),
      },
      { path: 'a-propos', lazy: lazyPage(() => import('./pages/About')) },
      { path: 'ressources', lazy: lazyPage(() => import('./pages/Resources')) },
      { path: 'contact', lazy: lazyPage(() => import('./pages/Contact')) },
      { path: 'legal', lazy: lazyPage(() => import('./pages/Legal')) },

      // Outils & landing pages
      { path: 'stress-zero', lazy: lazyPage(() => import('./pages/StressZeroLanding')) },
      { path: 'calculateur-sommeil', lazy: lazyPage(() => import('./pages/SleepCalculator')) },
      { path: 'hydromind/privacy-policy', lazy: lazyPage(() => import('./pages/HydroMindPrivacy')) },
      { path: 'hydromind/delete-account', lazy: lazyPage(() => import('./pages/HydroMindDeleteAccount')) },
      { path: 'test-personnalite-big-five', lazy: lazyPage(() => import('./pages/BigFiveTest')) },
      { path: 'habit-tracker', lazy: lazyPage(() => import('./pages/HabitTracker')) },
      { path: 'merci-inscription', lazy: lazyPage(() => import('./pages/MerciInscription')) },

      // Pages admin/dev — exclues du pré-rendu via ssgOptions.includedRoutes
      { path: 'og-test', lazy: lazyPage(() => import('./pages/OGTest')) },
      { path: 'admin/emails', lazy: lazyPage(() => import('./pages/EmailDashboard')) },

      // NeuroJournal : landing page (index) + sous-routes de l'application
      {
        path: 'neuro-journal',
        children: [
          { index: true, lazy: lazyPage(() => import('./pages/NeuroJournalLanding')) },
          {
            // Layout pathless : s'applique uniquement aux sous-routes dashboard/checkin
            element: (
              <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen">
                <NeuroJournalLayout />
              </div>
            ),
            children: [
              { path: 'onboarding', lazy: lazyPage(() => import('./pages/NeuroJournal/Onboarding')) },
              { path: 'dashboard', lazy: lazyPage(() => import('./pages/NeuroJournal/Dashboard')) },
              { path: 'checkin', lazy: lazyPage(() => import('./pages/NeuroJournal/DailyCheckIn')) },
            ],
          },
        ],
      },

      // 404
      { path: '*', lazy: lazyPage(() => import('./pages/NotFound')) },
    ],
  },
]
