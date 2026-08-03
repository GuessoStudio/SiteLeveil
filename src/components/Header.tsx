// Point 4 : Header amélioré avec micro-interactions
// Remplace ton components/Header.tsx existant

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Search } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import SearchOverlay from './SearchOverlay'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'À propos', href: '/a-propos/' },
    { name: 'Ressources', href: '/ressources/' },
    { name: 'Contact', href: '/contact/' }
  ]

  // Détection du scroll pour animer le header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Skip link pour l'accessibilité */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50
                   px-3 py-2 bg-indigo-600 text-white rounded-md transition-all duration-300
                   focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Aller au contenu principal
      </a>

      <header className={`sticky top-0 z-50 transition-all duration-500 ease-out
                         ${isScrolled
          ? 'bg-sand-50/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-lg border-b border-neutral-200/50 dark:border-neutral-700/50'
          : 'bg-sand-50/90 dark:bg-neutral-900/90 backdrop-blur-sm border-b border-neutral-200/30 dark:border-neutral-700/30'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo avec animation */}
            <Link
              to="/"
              className="flex items-center space-x-3 rounded-xl focus-ring group transition-all duration-300
                         hover:scale-105 active:scale-95"
              aria-label="Aller à l'accueil"
            >
              <div className="relative overflow-hidden rounded-full">
                <img
                  src="/images/logo.webp"
                  alt="L'Éveil"
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-full transition-transform duration-300
                             group-hover:scale-110 group-active:scale-95"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                -translate-x-full group-hover:translate-x-full
                                transition-transform duration-700 ease-out rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-sand-900 dark:text-sand-50
                               transition-all duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                L'Éveil
              </span>
            </Link>

            {/* Desktop Navigation avec animations */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative px-4 py-2 rounded-lg focus-ring text-sm font-medium 
                               transition-all duration-300 transform hover:scale-105 active:scale-95
                               hover:-translate-y-0.5 group overflow-hidden
                               ${active
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                      }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Barre de progression active */}
                    {active && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 
                                      w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full
                                      animate-in scale-in duration-300"></div>
                    )}

                    {/* Effet hover subtil */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </Link>
                )
              })}

              {/* Special Link: Mon Espace (Neuro-Journal) */}
              <Link
                to="/neuro-journal/dashboard"
                className="ml-4 px-4 py-2 rounded-full bg-indigo-600 text-white font-medium text-sm
                             hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg
                             flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Mon Espace</span>
              </Link>
            </nav>

            {/* Actions avec micro-animations */}
            <div className="flex items-center space-x-2">

              {/* Search Button avec animation */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-3 rounded-lg focus-ring text-neutral-600 dark:text-neutral-300
                           hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300
                           hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transform hover:scale-110 active:scale-90
                           hover:rotate-12 group"
                aria-label="Rechercher"
              >
                <Search className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </button>

              {/* Theme Toggle avec animation */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-lg focus-ring text-neutral-600 dark:text-neutral-300
                           hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300
                           hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transform hover:scale-110 active:scale-90
                           group relative overflow-hidden"
                aria-label="Changer de thème"
              >
                <div className="relative z-10">
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                  ) : (
                    <Moon className="w-5 h-5 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                  )}
                </div>

                {/* Effet de background au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0
                                dark:from-blue-400/0 dark:via-blue-400/10 dark:to-blue-400/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </button>

              {/* Mobile Menu Button avec animation */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg focus-ring text-neutral-600 dark:text-neutral-300 
                           hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300
                           hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transform hover:scale-110 active:scale-90
                           group relative"
                aria-label="Ouvrir le menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`absolute inset-0 transition-all duration-300 transform
                                   ${isMenuOpen ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 transform
                                 ${isMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation avec animations stagger */}
          <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden
                          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 border-t border-neutral-200 dark:border-neutral-700">
              <nav id="mobile-nav" className="flex flex-col space-y-1">
                {navigation.map((item, index) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`px-3 py-3 rounded-lg focus-ring text-sm font-medium 
                                 transition-all duration-300 transform hover:scale-[1.02] active:scale-95
                                 hover:translate-x-2 group relative overflow-hidden
                                 animate-in slide-in-from-left duration-400
                                 ${active
                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                        }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {active && <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse"></div>}
                        {item.name}
                      </span>

                      {/* Effet slide au hover */}
                      <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600 dark:bg-indigo-400
                                      transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300
                                      origin-bottom rounded-full"></div>
                    </Link>
                  )
                })}

                {/* Mobile Special Link */}
                <Link
                  to="/neuro-journal/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-bold text-indigo-600 dark:text-indigo-400 
                                 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40
                                 transition-all duration-300 transform active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    🔹 Mon Espace (Journal)
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

export default Header