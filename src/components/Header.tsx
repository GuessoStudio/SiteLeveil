import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Search } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

<a
  href="#main"
  className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50
             px-3 py-2 bg-indigo-600 text-white rounded-md"
>
  Aller au contenu principal
</a>


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rounded-xl focus-ring"
            aria-label="Aller à l’accueil"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">É</span>
            </div>
            <span className="text-xl font-bold text-neutral-900 dark:text-white">
              L'Éveil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`px-3 py-2 rounded-lg focus-ring text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button
              className="p-2 rounded-lg focus-ring text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg focus-ring text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Changer de thème"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg focus-ring text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-nav" className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-700">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`px-3 py-2 rounded-lg focus-ring text-sm font-medium transition-colors duration-200 ${
                      active
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
