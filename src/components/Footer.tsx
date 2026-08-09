import { Link } from 'react-router-dom'
import { Mail, Instagram, Facebook, Heart, ArrowUp } from 'lucide-react'
import { SocialTooltip } from '@/components/ui/SocialTooltip'

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9a8.17 8.17 0 004.78 1.52V7.07a4.85 4.85 0 01-1.01-.38z" />
  </svg>
)

const socialItems = [
  { href: 'https://www.instagram.com/leveil.officiel/', ariaLabel: 'Instagram', tooltip: 'Instagram', icon: <Instagram size={20} />, color: '#E1306C' },
  { href: 'https://www.facebook.com/profile.php?id=61572902135677', ariaLabel: 'Facebook', tooltip: 'Facebook', icon: <Facebook size={20} />, color: '#1877F2' },
  { href: 'https://x.com/leveilmental', ariaLabel: 'X / Twitter', tooltip: 'X', icon: <XIcon />, color: '#000000' },
  { href: 'https://www.tiktok.com/@leveil_mental', ariaLabel: 'TikTok', tooltip: 'TikTok', icon: <TikTokIcon />, color: '#010101' },
  { href: 'mailto:contact@leveilmental.fr', ariaLabel: 'Email', tooltip: 'Email', icon: <Mail size={20} />, color: '#C9953A' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-sand-100 dark:bg-neutral-900 text-sand-900 dark:text-white relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">

          {/* Logo + Description + Réseaux */}
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
                    width="48"
                    height="48"
                    className="w-12 h-12 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:brightness-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Shimmer logo principal */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full" />
                </div>
                <span className="text-2xl font-bold transition-all duration-300 group-hover:text-[#C9953A] group-hover:scale-105">
                  L'Éveil
                </span>
              </Link>
            </div>

            <p className="text-sand-700 dark:text-neutral-300 mb-6 leading-relaxed max-w-md hover:text-neutral-100 transition-colors duration-300">
              Psychologie, neurosciences et développement personnel fondés sur la science.
              Transformez votre vie grâce à des contenus rigoureusement documentés.
            </p>

            <SocialTooltip items={socialItems} className="justify-start" />
          </div>

          {/* Nos Solutions */}
          <div className="group/col">
            <h3 className="text-sand-900 dark:text-white font-semibold mb-6 text-lg relative">
              Nos Solutions
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#C9953A] group-hover/col:w-full transition-all duration-500" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Neuro-Journal', href: '/neuro-journal/onboarding' },
                { name: 'Livre Stress Zéro', href: '/stress-zero/' },
                { name: 'Test Big Five', href: '/test-personnalite-big-five/' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sand-700 dark:text-gray-400 hover:text-[#C9953A] transition-colors flex items-center gap-2 group/link w-fit py-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-neutral-600 group-hover/link:bg-[#C9953A] transition-all group-hover/link:w-4 duration-200 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="group/col">
            <h3 className="text-sand-900 dark:text-white font-semibold mb-6 text-lg relative">
              Navigation
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#C9953A] group-hover/col:w-full transition-all duration-500" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Blog', href: '/blog/' },
                { name: 'À propos', href: '/a-propos/' },
                { name: 'Ressources', href: '/ressources/' },
                { name: 'Contact', href: '/contact/' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sand-700 dark:text-gray-400 hover:text-[#C9953A] transition-colors flex items-center gap-2 group/link w-fit py-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-neutral-600 group-hover/link:bg-[#C9953A] transition-all group-hover/link:w-4 duration-200 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="group/col">
            <h3 className="text-sand-900 dark:text-white font-semibold mb-6 text-lg relative">
              Légal
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#C9953A] group-hover/col:w-full transition-all duration-500" />
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Mentions légales', href: '/legal/#mentions' },
                { name: 'Confidentialité', href: '/legal/#privacy' },
                { name: 'Cookies', href: '/legal/#cookies' },
                { name: 'CGU', href: '/legal/#terms' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sand-700 dark:text-gray-400 hover:text-[#C9953A] transition-colors flex items-center gap-2 group/link w-fit py-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-neutral-600 group-hover/link:bg-[#C9953A] transition-all group-hover/link:w-4 duration-200 flex-shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-neutral-800 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sand-600 dark:text-neutral-400 text-sm group hover:text-neutral-200 transition-colors duration-300">
              <img
                src="/images/logo-footer.webp"
                alt="Logo L'Éveil"
                width="20"
                height="20"
                className="w-5 h-5 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:brightness-125"
                loading="lazy"
                decoding="async"
              />
              <span className="group-hover:text-neutral-100 transition-colors duration-300">
                © 2026 L'Éveil. Tous droits réservés.
              </span>
            </div>

            {/* Guesso Studio */}
            <div className="flex items-center gap-2 text-sand-600 dark:text-neutral-400 text-sm">
              <span>Propulsé par:</span>
              <a
                href="https://guesso-studio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:text-neutral-200 focus-ring rounded-lg"
                aria-label="Visiter Guesso Studio"
              >
                <img
                  src="/images/guesso-logo.webp"
                  alt="Guesso Studio"
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:brightness-110"
                  loading="lazy"
                  decoding="async"
                />
                <span className="font-medium group-hover:text-[#C9953A] transition-colors duration-300">
                  Guesso Studio
                </span>
              </a>
            </div>

            {/* Fait avec amour */}
            <div className="flex items-center gap-2 text-sand-600 dark:text-neutral-400 text-sm group hover:text-red-300 transition-colors duration-300">
              <span>Fait avec</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse transition-all duration-300 group-hover:scale-150 group-hover:text-red-400" />
              <span>en France</span>
            </div>

            {/* Scroll Top */}
            <button
              onClick={scrollToTop}
              className="group p-3 rounded-full bg-[#C9953A]/80 hover:bg-[#E8B84B] transition-all duration-300 transform hover:scale-125 hover:-translate-y-3 focus-ring relative overflow-hidden shadow-lg hover:shadow-[#C9953A]/50 border-2 border-[#C9953A]/30 hover:border-[#E8B84B]"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1" />
              <div className="absolute inset-0 rounded-full border-2 border-[#E8B84B] scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Barre décorative bas */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C9953A] via-[#E8B84B] to-[#7C3AED] opacity-80" />
    </footer>
  )
}

export default Footer
