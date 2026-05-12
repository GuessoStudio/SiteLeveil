import type { RouteRecord } from 'vite-react-ssg'
import React, { Suspense } from 'react'
import App from './App'
import { articles } from './data/blog-articles'

// Pages critiques — chargées immédiatement (above-the-fold ou navigation principale)
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

// Pages secondaires — lazy-loadées (réduisent le bundle initial)
const HabitTracker = React.lazy(() => import('./pages/HabitTracker'))
const OGTest = React.lazy(() => import('./pages/OGTest'))
const EmailDashboard = React.lazy(() => import('./pages/EmailDashboard'))
const BigFiveTest = React.lazy(() => import('./pages/BigFiveTest'))
const SleepCalculator = React.lazy(() => import('./pages/SleepCalculator'))
const HydroMindPrivacy = React.lazy(() => import('./pages/HydroMindPrivacy'))
const MerciInscription = React.lazy(() => import('./pages/MerciInscription'))
const StressZeroLanding = React.lazy(() => import('./pages/StressZeroLanding'))
const NeuroJournalLanding = React.lazy(() => import('./pages/NeuroJournalLanding'))
const NeuroJournalLayout = React.lazy(() => import('./pages/NeuroJournal/NeuroJournalLayout'))
const Onboarding = React.lazy(() => import('./pages/NeuroJournal/Onboarding'))
const Dashboard = React.lazy(() => import('./pages/NeuroJournal/Dashboard'))
const DailyCheckIn = React.lazy(() => import('./pages/NeuroJournal/DailyCheckIn'))

const Fallback = () => <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900" />

export const routes: RouteRecord[] = [
  {
    // App est le layout racine : fournit Header, Footer et tous les providers.
    // ViteReactSSG injecte un router autour, pas besoin de BrowserRouter dans App.
    path: '/',
    element: <App />,
    children: [
      // Pages principales
      { index: true, element: <Home /> },
      { path: 'blog', element: <Blog /> },
      {
        path: 'blog/:slug',
        element: <Article />,
        // getStaticPaths indique à vite-react-ssg les URLs concrètes à pré-rendre
        getStaticPaths: () => articles.map(a => `/blog/${a.slug}`),
      },
      { path: 'a-propos', element: <About /> },
      { path: 'ressources', element: <Resources /> },
      { path: 'contact', element: <Contact /> },
      { path: 'legal', element: <Legal /> },

      // Outils & landing pages — lazy-loadées
      { path: 'stress-zero', element: <Suspense fallback={<Fallback />}><StressZeroLanding /></Suspense> },
      { path: 'calculateur-sommeil', element: <Suspense fallback={<Fallback />}><SleepCalculator /></Suspense> },
      { path: 'hydromind/privacy-policy', element: <Suspense fallback={<Fallback />}><HydroMindPrivacy /></Suspense> },
      { path: 'test-personnalite-big-five', element: <Suspense fallback={<Fallback />}><BigFiveTest /></Suspense> },
      { path: 'habit-tracker', element: <Suspense fallback={<Fallback />}><HabitTracker /></Suspense> },
      { path: 'merci-inscription', element: <Suspense fallback={<Fallback />}><MerciInscription /></Suspense> },

      // Pages admin/dev — exclues du pré-rendu via ssgOptions.includedRoutes
      { path: 'og-test', element: <Suspense fallback={<Fallback />}><OGTest /></Suspense> },
      { path: 'admin/emails', element: <Suspense fallback={<Fallback />}><EmailDashboard /></Suspense> },

      // NeuroJournal : landing page (index) + sous-routes de l'application
      {
        path: 'neuro-journal',
        children: [
          { index: true, element: <Suspense fallback={<Fallback />}><NeuroJournalLanding /></Suspense> },
          {
            // Layout pathless : s'applique uniquement aux sous-routes dashboard/checkin
            element: (
              <Suspense fallback={<Fallback />}>
                <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen">
                  <NeuroJournalLayout />
                </div>
              </Suspense>
            ),
            children: [
              { path: 'onboarding', element: <Suspense fallback={<Fallback />}><Onboarding /></Suspense> },
              { path: 'dashboard', element: <Suspense fallback={<Fallback />}><Dashboard /></Suspense> },
              { path: 'checkin', element: <Suspense fallback={<Fallback />}><DailyCheckIn /></Suspense> },
            ],
          },
        ],
      },

      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
]
