import { Navigate } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'
import App from './App'
import { articles } from './data/blog-articles'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import HabitTracker from './pages/HabitTracker'
import OGTest from './pages/OGTest'
import EmailDashboard from './pages/EmailDashboard'
import BigFiveTest from './pages/BigFiveTest'
import SleepCalculator from './pages/SleepCalculator'
import HydroMindPrivacy from './pages/HydroMindPrivacy'
import MerciInscription from './pages/MerciInscription'
import NotFound from './pages/NotFound'
import NeuroJournalLanding from './pages/NeuroJournalLanding'
import StressZeroLanding from './pages/StressZeroLanding'
import NeuroJournalLayout from './pages/NeuroJournal/NeuroJournalLayout'
import Onboarding from './pages/NeuroJournal/Onboarding'
import Dashboard from './pages/NeuroJournal/Dashboard'
import DailyCheckIn from './pages/NeuroJournal/DailyCheckIn'

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

      // Outils & landing pages
      { path: 'stress-zero/', element: <StressZeroLanding /> },
      { path: 'calculateur-sommeil/', element: <SleepCalculator /> },
      { path: 'hydromind/privacy-policy/', element: <HydroMindPrivacy /> },
      { path: 'test-personnalite-big-five', element: <BigFiveTest /> },
      { path: 'habit-tracker', element: <HabitTracker /> },
      { path: 'merci-inscription', element: <MerciInscription /> },

      // Pages admin/dev — exclues du pré-rendu via ssgOptions.includedRoutes
      { path: 'og-test', element: <OGTest /> },
      { path: 'admin/emails', element: <EmailDashboard /> },

      // Redirections pour anciennes URLs
      { path: 'about', element: <Navigate to="/a-propos" replace /> },
      { path: 'resources', element: <Navigate to="/ressources" replace /> },

      // NeuroJournal : landing page (index) + sous-routes de l'application
      {
        path: 'neuro-journal',
        children: [
          { index: true, element: <NeuroJournalLanding /> },
          {
            // Layout pathless : s'applique uniquement aux sous-routes dashboard/checkin
            element: (
              <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen">
                <NeuroJournalLayout />
              </div>
            ),
            children: [
              { path: 'onboarding', element: <Onboarding /> },
              { path: 'dashboard', element: <Dashboard /> },
              { path: 'checkin', element: <DailyCheckIn /> },
            ],
          },
        ],
      },

      // 404
      { path: '*', element: <NotFound /> },
    ],
  },
]
