import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DailyQuote from '../components/DailyQuote'
import ResumeReading from '../components/ResumeReading'
import Newsletter from '../components/Newsletter'
import { ArrowRight, BookOpen, Brain, Heart, Users, TrendingUp, Star } from 'lucide-react'
import SEO from '../components/SEO'
import { TiltCard } from '../components/ui/animations/TiltCard'
import HeroEveil from '../components/HeroEveil'
import ThemeCards from '../components/sections/ThemeCards'

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


/* ========================================
   DONNÉES STATIQUES
======================================== */

const FEATURED_ARTICLES = [
  {
    id: 1,
    title: "Comment surmonter le rejet social",
    excerpt: "Découvrez les mécanismes psychologiques du rejet et les stratégies pour développer votre résilience émotionnelle.",
    category: "Psychologie",
    readTime: 8,
    image: "/images/articles/rejet-social-cover",
    slug: "surmonter-rejet-social"
  },
  {
    id: 2,
    title: "La neuroplasticité : votre cerveau peut changer",
    excerpt: "Explorez les dernières découvertes sur la capacité du cerveau à se réorganiser tout au long de la vie.",
    category: "Neurosciences",
    readTime: 12,
    image: "/images/articles/neuroplasticite-cover",
    slug: "neuroplasticite-cerveau"
  },
  {
    id: 3,
    title: "Construire une confiance en soi durable",
    excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
    category: "Développement Personnel",
    readTime: 10,
    image: "/images/articles/confiance-soi-cover",
    slug: "confiance-en-soi-durable"
  },
  {
    id: 4,
    title: "Dopamine intelligente : 7 micro-actions pour relancer ta motivation",
    excerpt: "Utilise la dopamine à ton avantage avec 7 micro-actions simples et efficaces.",
    category: "Psychologie",
    readTime: 6,
    image: "/images/articles/dopamine-cover",
    slug: "neuro-dopamine-routine"
  }
]
const STATS = [
  { icon: Users, value: 10000, label: "Lecteurs actifs", suffix: "+" },
  { icon: BookOpen, value: 500, label: "Articles publiés", suffix: "" },
  { icon: TrendingUp, value: 95, label: "Satisfaction", suffix: "%" },
  { icon: Heart, value: 50000, label: "Vies transformées", suffix: "+" }
]
const CATEGORIES = [
  {
    icon: Brain,
    title: "Neurosciences",
    description: "Découvrez comment votre cerveau fonctionne et comment l'optimiser",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Heart,
    title: "Psychologie",
    description: "Comprenez vos émotions et développez votre intelligence émotionnelle",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: TrendingUp,
    title: "Développement Personnel",
    description: "Techniques pratiques pour votre croissance personnelle et professionnelle",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Relations Humaines",
    description: "Améliorez vos relations et votre communication interpersonnelle",
    color: "from-purple-500 to-violet-600"
  }
]

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
            {FEATURED_ARTICLES.map((article, index) => (
              <TiltCard key={article.id} maxRotation={3} scale={1.03}>
                <article
                  className="group bg-sand-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative animate-in slide-in-from-bottom-8 duration-700 h-full"
                  style={{ animationDelay: `${300 + index * 200}ms` }}
                >
                  {/* Image de couverture */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                    <img
        src={`${article.image}.webp`}   
        alt={article.title}
        width="400"
        height="300"
        className="w-full h-48 object-cover"
        loading="lazy"
        decoding="async"
      />
                    
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge catégorie */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                    
                    {/* Étoile featured */}
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-amber-400 fill-current drop-shadow-lg animate-pulse" />
                    </div>
                    
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    -translate-x-full group-hover:translate-x-full 
                                    transition-transform duration-1000 skew-x-12" />
                  </div>

                  {/* Contenu de l'article */}
                  <div className="p-6 flex flex-col justify-between" style={{ height: 'calc(100% - 12rem)' }}>
                    <div>
                      <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-50 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3 group-hover:text-sand-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                        {article.excerpt}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                        <span className="group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                          {article.readTime} min de lecture
                        </span>
                      </div>

                      <Link
                        to={`/blog/${article.slug}`}
                        aria-label={`Lire l'article : ${article.title}`}
                        className="inline-flex items-center gap-1 font-medium text-indigo-600 hover:text-indigo-700
                                  dark:text-indigo-400 dark:hover:text-indigo-300 rounded-lg px-2 py-1 focus-ring
                                  hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300
                                  group-hover:translate-x-1"
                      >
                        Lire l'article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                  {/* Barre de progression au hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 
                                  group-hover:w-full transition-all duration-700" />
                </article>
              </TiltCard>
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

      {/* Newsletter */}
      <section id="newsletter">
        <Newsletter />
      </section>
    </div>
  )
}

export default Home
