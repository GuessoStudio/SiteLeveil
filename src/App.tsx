import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import { ReadingProvider } from './contexts/ReadingContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { PageTransition } from './components/ui/animations/PageTransition'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useLenis } from './hooks/useLenis'

// App est le layout racine. ViteReactSSG (vite-react-ssg) injecte le router
// en amont — pas besoin de BrowserRouter ici.
function App() {
  useLenis();
  
  return (
    <HelmetProvider>
    <ThemeProvider>
      <ReadingProvider>
        <NotificationProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
            <Header />
            <main id="main">
              <PageTransition>
                <Outlet />
              </PageTransition>
            </main>
            <Footer />
          </div>
        </NotificationProvider>
      </ReadingProvider>
    </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
