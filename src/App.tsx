import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import { ReadingProvider } from './contexts/ReadingContext'
import { NotificationProvider } from './contexts/NotificationContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ReadingProvider>
          <NotificationProvider>
            <Router>
              <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/article/:slug" element={<Article />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/legal" element={<Legal />} />
                  </Routes>
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
