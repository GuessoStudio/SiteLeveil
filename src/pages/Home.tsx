import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DailyQuote from '../components/DailyQuote'
import ResumeReading from '../components/ResumeReading'
import NewsletterSection from '../components/sections/NewsletterSection'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import HeroEveil from '../components/HeroEveil'
import ThemeCards from '../components/sections/ThemeCards'
import { ArticleCard } from '../components/ui/ArticleCard'
import { articles } from '../data/blog-articles'

/* ========================================
   COMPOSANTS UTILITAIRES
======================================== */

// Compteur animé avec ease-out
function Counter({ 
  to, 
  duration = 1000, 
  prefix = '', 
  suffix = '' 
}: {
  to: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [value, setValue] = React.useState(0)
  const startTimeRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    let animationFrame = 0

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }
      
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      
      setValue(Math.round(eased * to))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [to, duration])

  return <span>{prefix}{value.toLocaleString()}{suffix}</span>
}

// Particules d'arrière-plan CSS uniquement
function ParticlesBackground({ count = 24 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, index) => ({
        left: `${(index * 37) % 100}%`,
        bottom: `${(index * 23) % 100}%`,
        duration: `${6 + (index % 5)}s`,
        opacity: 0.85 - (index % 4) * 0.15,
        delay: `${(index % 8) * 0.3}s`
      })),
    [count]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <div
          key={index}
          style={{ 
            left: particle.left, 
            bottom: particle.bottom, 
            animationDuration: particle.duration,
            animationDelay: particle.delay,
            opacity: particle.opacity
          }}
          className="absolute h-1 w-1 rounded-full bg-amber-300/60 animate-particle"
        />
      ))}
    </div>
  )
}


const FEATURED_SLUGS = ['neuro-dopamine-routine', 'communication-non-violente-cnv', 'syndrome-imposteur-solutions']
const featuredArticles = FEATURED_SLUGS.map(slug => articles.find(a => a.slug === slug)).filter(Boolean) as typeof articles

/* ========================================
   COMPOSANT PRINCIPAL
======================================== */

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Metadata */}
      <SEO
        isHome
        title="Psychologie, Neurosciences & Développement Personnel"
        description="Articles quotidiens, outils et ressources pour comprendre l'esprit humain et transformer votre vie."
        path="/"
        image="/images/og-default.jpg"
      />

      {/* Hero Section */}
      <div className="hero-section">
        <HeroEveil />
      </div>

      {/* Citation du jour */}
      <section className="quote-section relative overflow-visible py-8 sm:py-12 bg-sand-50 dark:bg-[#0d0500]">
        <div className="container mx-auto px-4">
          <DailyQuote />
        </div>
      </section>

      {/* Reprendre la lecture */}
      <section className="py-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <ResumeReading />
        </div>
      </section>


      <ThemeCards />

      {/* Articles à la une */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden">
        {/* Lignes décoratives d'arrière-plan */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-sand-900 dark:text-sand-50 mb-4">
              Articles à la une
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Les articles les plus lus pour commencer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>

          {/* Bouton voir tous les articles */}
          <div className="text-center animate-in fade-in duration-700" style={{ animationDelay: '1000ms' }}>
            <Link
              to="/blog"
              className="group bg-gold-500 hover:bg-gold-600 text-sand-900 dark:bg-gold-400 dark:hover:bg-gold-300e px-8 py-3 rounded-lg font-semibold
                         transition-all duration-300 inline-flex items-center gap-2 focus-ring
                         hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl
                         hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
                         relative overflow-hidden"
            >
              <span className="relative z-10">Voir tous les articles</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-700 skew-x-12" />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}

export default Home
