import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Instagram, Facebook, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const [emailHovered, setEmailHovered] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-sand-100 dark:bg-neutral-900 text-sand-900 dark:text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
          <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">

          {/* Section Logo et Description */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-6 group">
              <Link
                to="/"
                className="flex items-center space-x-3 transition-all duration-300 focus-ring rounded-lg w-fit hover:scale-110 hover:rotate-1"
              >
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src="/images/logo-footer.webp"
                    alt="Logo L'Éveil"
                    className="w-12 h-12 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full"></div>
                </div>
                <span className="text-2xl font-bold transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-105">
                  L'Éveil
                </span>
              </Link>
            </div>

            <p className="text-sand-700 dark:text-neutral-300 mb-6 leading-relaxed max-w-md hover:text-neutral-100 transition-colors duration-300">
              Psychologie, neurosciences et développement personnel fondés sur la science.
              Transformez votre vie grâce à des contenus rigoureusement documentés.
            </p>

            {/* Réseaux Sociaux */}
            <div className="flex space-x-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/leveil.officiel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous suivre sur Instagram"
                className="group p-3 rounded-full bg-neutral-800/50 hover:bg-pink-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 focus-ring relative overflow-hidden hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-pink-400/30 rounded-full scale-0 group-hover:scale-200 group-active:scale-150 transition-transform duration-500"></div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61572902135677"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous suivre sur Facebook"
                className="group p-3 rounded-full bg-neutral-800/50 hover:bg-blue-700 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 focus-ring relative overflow-hidden hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Facebook className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-500/30 rounded-full scale-0 group-hover:scale-200 group-active:scale-150 transition-transform duration-500"></div>
              </a>

              {/* Email */}
              <button
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
                onClick={() => window.location.href = 'mailto:leveilmental@gmail.com'}
                aria-label="Nous envoyer un email"
                className="group p-3 rounded-full bg-neutral-800/50 hover:bg-green-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 focus-ring relative overflow-hidden hover:shadow-lg hover:shadow-green-500/25"
              >
                <Mail className={`w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 ${emailHovered ? 'animate-bounce' : ''}`} />
                <div className="absolute inset-0 bg-green-400/30 rounded-full scale-0 group-hover:scale-200 group-active:scale-150 transition-transform duration-500"></div>
              </button>
            </div>
          </div>

          {/* Nos Solutions */}
          <div className="group">
            <h3 className="text-sand-900 dark:text-white font-semibold mb-6 text-lg relative">
              Nos Solutions
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-indigo-500 group-hover:w-full transition-all duration-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Neuro-Journal', href: '/neuro-journal/onboarding' },
                { name: 'Livre Stress Zéro', href: '/stress-zero' },
                { name: 'Test Big Five', href: '/test-personnalite-big-five' }
              ].map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group text-sand-700 dark:text-neutral-300 hover:text-indigo-400 transition-all duration-300 flex items-center gap-3 hover:translate-x-4 transform animate-in slide-in-from-left duration-400"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-1 bg-indigo-500 group-hover:w-full transition-all duration-500"></div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="group">
            <h3 className="text-sand-900 dark:text-white font-semibold mb-6 text-lg relative">
              Navigation
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gold-600 group-hover:w-full transition-all duration-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Blog', href: '/blog' },
                { name: 'À propos', href: '/a-propos' },
                { name: 'Ressources', href: '/ressources' },
                { name: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group text-sand-700 dark:text-neutral-300 hover:text-gold-600 transition-all duration-300 flex items-center gap-3 hover:translate-x-4 transform animate-in slide-in-from-left duration-400"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gold-600 rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gold-600 group-hover:w-full transition-all duration-500"></div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="group">
            <h3 className="text-sand-900 dark:text-white font-semibold mb-6 text-lg relative">
              Légal
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-indigo-400 group-hover:w-full transition-all duration-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Mentions légales', href: '/legal#mentions' },
                { name: 'Confidentialité', href: '/legal#privacy' },
                { name: 'Cookies', href: '/legal#cookies' },
                { name: 'CGU', href: '/legal#terms' }
              ].map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group text-sand-700 dark:text-neutral-300 hover:text-indigo-400 transition-all duration-300 flex items-center gap-3 hover:translate-x-4 transform animate-in slide-in-from-left duration-400"
                    style={{ animationDelay: `${(index + 5) * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-1 bg-indigo-400 group-hover:w-full transition-all duration-500"></div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section Bas de page */}
        <div className="border-t border-neutral-800 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sand-600 dark:text-neutral-400 text-sm group hover:text-neutral-200 transition-colors duration-300">
              <img
                src="/images/logo-footer.webp"
                alt="Logo L'Éveil"
                className="w-5 h-5 rounded-full transition-all duration-500 group-hover:rotate-180 group-hover:scale-125 group-hover:brightness-125"
              />
              <span className="group-hover:text-neutral-100 transition-colors duration-300">
                © 2024 L'Éveil. Tous droits réservés.
              </span>
            </div>

            {/* Guesso Studio */}
            <div className="flex items-center gap-2 text-sand-600 dark:text-neutral-400 text-sm group">
              <span>Propulsé par:</span>
              <a
                href="https://guesso-studio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:text-neutral-200 focus-ring rounded-lg"
                aria-label="Visiter Guesso Studio"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/images/guesso-logo.webp"
                    alt="Guesso Studio"
                    className="w-10 h-10 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-lg"></div>
                </div>
                <span className="font-medium group-hover:text-blue-400 transition-colors duration-300">
                  Guesso Studio
                </span>
              </a>
            </div>

            {/* Fait avec amour */}
            <div className="flex items-center gap-2 text-sand-600 dark:text-neutral-400 text-sm group hover:text-red-300 transition-colors duration-300">
              <span>Fait avec</span>
              <Heart className="w-5 h-5 text-red-500 transition-all duration-300 group-hover:scale-150 group-hover:text-red-400 animate-pulse group-hover:animate-bounce" style={{ animationDuration: '1s' }} />
              <span>en France</span>
            </div>

            {/* Scroll Top */}
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-full bg-indigo-600/80 hover:bg-indigo-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-3 focus-ring relative overflow-hidden shadow-lg hover:shadow-indigo-500/50 border-2 border-indigo-400/30 hover:border-indigo-300"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-6 h-6 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-sand-900 dark:text-white" />
              <div className="absolute inset-0 bg-indigo-300/30 rounded-full scale-0 group-hover:scale-200 group-active:scale-150 transition-transform duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-indigo-300 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-100 group-hover:border-indigo-200 transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Dégradé final */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-indigo-500 to-purple-600 opacity-80"></div>
    </footer>
  )
}

export default Footer