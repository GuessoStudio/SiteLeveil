import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DailyQuote from '../components/DailyQuote'
import ResumeReading from '../components/ResumeReading'
import Newsletter from '../components/Newsletter'
import SmartImg from '../components/SmartImg'
import { ArrowRight, BookOpen, Brain, Heart, Users, TrendingUp, Star } from 'lucide-react'
import SEO from '../components/SEO'

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

// Particules discrètes pour les sections
function DiscreteParticles({ count = 15 }: { count?: number }) {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-indigo-400/20 rounded-full animate-pulse"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 17) % 100}%`,
            animationDelay: `${(index % 4) * 0.5}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        />
      )),
    [count]
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
    image: "/images/articles/rejet-social-cover.jpg",
    slug: "surmonter-rejet-social"
  },
  {
    id: 2,
    title: "La neuroplasticité : votre cerveau peut changer",
    excerpt: "Explorez les dernières découvertes sur la capacité du cerveau à se réorganiser tout au long de la vie.",
    category: "Neurosciences",
    readTime: 12,
    image: "/images/articles/neuroplasticite-cover.jpg",
    slug: "neuroplasticite-cerveau"
  },
  {
    id: 3,
    title: "Construire une confiance en soi durable",
    excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
    category: "Développement Personnel",
    readTime: 10,
    image: "/images/articles/confiance-soi-cover.jpg",
    slug: "confiance-en-soi-durable"
  },
  {
    id: 4,
    title: "Dopamine intelligente : 7 micro-actions pour relancer ta motivation",
    excerpt: "Utilise la dopamine à ton avantage avec 7 micro-actions simples et efficaces.",
    category: "Psychologie",
    readTime: 6,
    image: "/images/articles/dopamine-cover.jpg",
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
      <section className="relative py-12 sm:py-16 md:py-20 min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        {/* Background Image avec overlay */}
        <div className="absolute inset-0 z-0">
          <SmartImg
  src="/images/hero-bg.jpg"
  alt=""
  width={1600}
  height={900}
  priority={true}
  className="w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-black/35 dark:bg-black/45" />
        </div>

        {/* Particules animées */}
        <ParticlesBackground count={24} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Titre principal animé */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg text-white px-2">
                <span className="inline-block">
                  {['É','v','e','i','l','l','e','z',' ','v','o','t','r','e'].map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500"
                      style={{ 
                        animationDelay: `${50 + index * 60}ms`, 
                        animationFillMode: 'both' 
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
                <br className="block sm:hidden" />
                <span className="inline-block gradient-text-fallback">
                  {['p','o','t','e','n','t','i','e','l'].map((letter, index) => (
                    <span
                      key={index + 14}
                      className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500"
                      style={{ 
                        animationDelay: `${50 + (index + 14) * 60}ms`, 
                        animationFillMode: 'both' 
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>

              {/* Sous-titre */}
              <p
                className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md max-w-3xl mx-auto"
                style={{ animationDelay: '2000ms', animationFillMode: 'both' }}
              >
                Psychologie, neurosciences et développement personnel fondés 
                sur la science pour transformer votre vie
              </p>
            </div>

            {/* Boutons d'action */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: '2500ms', animationFillMode: 'both' }}
            >
              <Link
                to="/blog"
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 
                           text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 
                           flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl
                           transform hover:-translate-y-2 hover:scale-105 focus-ring backdrop-blur-sm
                           relative overflow-hidden"
                aria-label="Découvrir les articles du blog"
              >
                <span className="relative z-10">Découvrir les articles</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-700 skew-x-12" />
              </Link>

              <a
                href="#newsletter"
                className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white 
                           px-8 py-4 rounded-lg font-semibold transition-all duration-300
                           border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl
                           transform hover:-translate-y-2 hover:scale-105 focus-ring
                           relative overflow-hidden"
                aria-label="Recevoir le guide gratuit par email"
              >
                <span className="relative z-10">Recevoir le guide gratuit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-700 skew-x-12" />
              </a>
            </div>

            {/* Statistiques animées */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                             hover:bg-white/15 transition-all duration-500 hover:scale-105
                             animate-in slide-in-from-bottom-8 duration-700"
                  style={{ 
                    animationDelay: `${3000 + index * 200}ms`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300 animate-pulse" />
                  <div className="text-2xl font-bold text-white">
                    <Counter 
                      to={stat.value} 
                      duration={1100 + index * 150} 
                      suffix={stat.suffix} 
                    />
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation du jour */}
      <section className="py-12 bg-white dark:bg-neutral-900">
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


{/* Domaines d'expertise */}
<section className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
  {/* Particules d'arrière-plan discrètes */}
  <div className="absolute inset-0">
    <DiscreteParticles count={15} />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16 animate-in fade-in duration-700">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
        Explorez nos domaines d'expertise
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        Des contenus scientifiquement fondés pour votre développement personnel et professionnel
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {CATEGORIES.map((category, index) => (
        <div 
          key={index}
          className="animate-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: `${200 + index * 150}ms` }}
        >
          <Link
            to={`/blog?category=${encodeURIComponent(category.title)}`}
            className="group bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all
                       duration-500 transform hover:-translate-y-4 hover:scale-105 border border-neutral-100 dark:border-neutral-700
                       focus-ring block hover:bg-gradient-to-br hover:from-white hover:to-neutral-50
                       dark:hover:from-neutral-800 dark:hover:to-neutral-750 relative overflow-hidden"
            aria-label={`Voir tous les articles de ${category.title}`}
          >
            {/* Icône avec gradient */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
              <category.icon className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                              -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-700 skew-x-12" />
            </div>
            
            {/* Titre avec effet au hover */}
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
              {category.title}
            </h3>
            
            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
              {category.description}
            </p>
            
            {/* Barre de progression au hover */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 
                            group-hover:w-full transition-all duration-500" />
                            
            {/* Badge "Voir articles" qui apparaît au hover */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                Voir articles
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    
    {/* Message informatif */}
    <div className="text-center mt-12 animate-in fade-in duration-700" style={{ animationDelay: '800ms' }}>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Cliquez sur une catégorie pour voir tous les articles correspondants
      </p>
    </div>
  </div>
</section>

      {/* Articles à la une */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden">
        {/* Lignes décoratives d'arrière-plan */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Articles à la une
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Nos contenus les plus populaires pour commencer votre transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {FEATURED_ARTICLES.map((article, index) => (
              <article
                key={article.id}
                className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative animate-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                {/* Image de couverture */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  <SmartImg
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={267}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                    {article.excerpt}
                  </p>

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

                {/* Barre de progression au hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 
                                group-hover:w-full transition-all duration-700" />
              </article>
            ))}
          </div>

          {/* Bouton voir tous les articles */}
          <div className="text-center animate-in fade-in duration-700" style={{ animationDelay: '1000ms' }}>
            <Link
              to="/blog"
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold
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