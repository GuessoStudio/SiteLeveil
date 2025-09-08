import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import { ReadingProvider } from './contexts/ReadingContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { PageTransition } from './components/ui/animations/PageTransition'  // ← Chemin adapté
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

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/blog" element={<Blog />} />                    
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />  
        <Route path="/og-test" element={<OGTest />} />
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