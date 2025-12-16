import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import { ReadingProvider } from './contexts/ReadingContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { PageTransition } from './components/ui/animations/PageTransition'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
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

// Neuro-Journal Imports
import NeuroJournalLayout from './pages/NeuroJournal/NeuroJournalLayout'
import Onboarding from './pages/NeuroJournal/Onboarding'
import Dashboard from './pages/NeuroJournal/Dashboard'
import DailyCheckIn from './pages/NeuroJournal/DailyCheckIn'
import NeuroJournalLanding from './pages/NeuroJournalLanding'
const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Home />} />

        {/* Landing Page SEO */}
        <Route path="/neuro-journal" element={<NeuroJournalLanding />} />

        {/* Blog & Content */}
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/blog" element={<Blog />} />
        {/* ... other routes ... */}

        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/test-personnalite-big-five" element={<BigFiveTest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />
        <Route path="/og-test" element={<OGTest />} />
        <Route path="/admin/emails" element={<EmailDashboard />} />

        {/* Neuro Journal Routes (App) */}
        <Route path="/neuro-journal/*" element={
          <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen">
            {/* Note: NeuroJournal has its own Layout inside */}
            <Routes>
              <Route element={<NeuroJournalLayout />}>
                <Route index element={<Onboarding />} />
                <Route path="onboarding" element={<Onboarding />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="checkin" element={<DailyCheckIn />} />
              </Route>
            </Routes>
          </div>
        } />
      </Routes>
    </PageTransition>
  )
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ReadingProvider>
          <NotificationProvider>
            <Router>
              <ScrollToTop />
              <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
                <Header />
                <main id="main">
                  <AnimatedRoutes />
                </main>
                <Footer />
              </div>
            </Router>
          </NotificationProvider>
        </ReadingProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App