import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import DailyQuote from '../components/DailyQuote'
import ResumeReading from '../components/ResumeReading'
import Newsletter from '../components/Newsletter'
import { ArrowRight, BookOpen, Brain, Heart, Users, TrendingUp, Star } from 'lucide-react'
import SEO from '../components/SEO'
import { RevealOnScroll } from '../components/ui/animations/RevealOnScroll'

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
/*
const STATS = [
  { icon: Users, value: 10000, label: "Lecteurs actifs", suffix: "+" },
  { icon: BookOpen, value: 500, label: "Articles publiés", suffix: "" },
  { icon: TrendingUp, value: 95, label: "Satisfaction", suffix: "%" },
  { icon: Heart, value: 50000, label: "Vies transformées", suffix: "+" }
]
*/
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
          <img
  src="/images/hero-bg.webp"
  alt=""
  width="1600"
  height="900"
  className="w-full h-full object-cover"
  loading="eager"
  decoding="async"
  fetchPriority="high"
/>
          <div className="absolute inset-0 bg-black/35 dark:bg-black/45" />
        </div>

        {/* Particules animées */}
        <ParticlesBackground count={24} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Titre principal animé */}
            <div className="mb-8">
              <RevealOnScroll direction="down" delay={0}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg px-2 flex justify-center items-center flex-wrap gap-3">
  
  {/* PARTIE 1 : "Éveillez votre" (Blanc simple) */}
  <span className="inline-block text-white font-normal">
    {['É','v','e','i','l','l','e','z',' ','v','o','t','r','e'].map((letter, index) => (
      <span
        key={index}
        className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500"
        style={{ animationDelay: `${50 + index * 40}ms`, animationFillMode: 'both' }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ))}
  </span>

  {/* PARTIE 2 : "POTENTIEL" (Avec Glow Intense & Majuscules) */}
  <span className="inline-block relative">
    {/* L'aura lumineuse derrière */}
    <span className="absolute inset-0 blur-md bg-yellow-500/50 animate-pulse"></span>
    
    {/* Le texte par dessus */}
    <span className="relative text-yellow-100 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] uppercase tracking-widest font-extrabold">
      {['P','o','t','e','n','t','i','e','l'].map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-500"
          // On ajoute un délai plus long (14 lettres avant * 40ms) pour qu'il apparaisse après le début de la phrase
          style={{ animationDelay: `${50 + (14 + index) * 40}ms`, animationFillMode: 'both' }}
        >
          {letter}
        </span>
      ))}
    </span>
  </span>

</h1>
</RevealOnScroll>

              {/* Sous-titre */}
              <p
                className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md max-w-3xl mx-auto"
                style={{ animationDelay: '2000ms', animationFillMode: 'both' }}
              >
                Comprenez votre psychologie pour arrêter de subir. 
                Une transformation fondée sur la science.
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

            {/* Preuve sociale discrète */}
            <p className="text-base md:text-lg text-white/90 text-center max-w-2xl mx-auto mt-12 font-light tracking-wide">
  Une communauté grandissante d'esprits en quête de clarté.
</p>
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


{/* Point 2 CORRIGÉ : Domaines d'expertise - Interactions tactiles optimisées */}
<section className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
  {/* Background patterns géométriques - responsive */}
  <div className="absolute inset-0 opacity-20 md:opacity-30">
    <div className="absolute top-10 left-4 md:left-10 w-16 md:w-32 h-16 md:h-32 border border-indigo-200/20 dark:border-indigo-400/10 rounded-full animate-pulse"></div>
    <div className="absolute top-32 md:top-40 right-4 md:right-20 w-12 md:w-24 h-12 md:h-24 border border-purple-200/20 dark:border-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-20 left-1/4 w-8 md:w-16 h-8 md:h-16 border border-emerald-200/20 dark:border-emerald-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-32 md:bottom-40 right-1/3 w-10 md:w-20 h-10 md:h-20 border border-pink-200/20 dark:border-pink-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
  </div>

  {/* Particules - réduites sur mobile */}
  <div className="absolute inset-0">
    <div className="hidden md:block">
      <DiscreteParticles count={20} />
    </div>
    <div className="block md:hidden">
      <DiscreteParticles count={8} />
    </div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-12 md:mb-16 animate-in fade-in duration-700">
      <RevealOnScroll direction="down" delay={100}>
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
    Explorez nos domaines d'expertise
  </h2>
</RevealOnScroll>
      <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        Des contenus scientifiquement fondés pour votre développement personnel et professionnel
      </p>
    </div>

    {/* Grid responsive optimisé */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      
      {/* NEUROSCIENCES - Interactions tactiles optimisées */}
<RevealOnScroll direction="up" delay={200}>
  <Link
    to="/blog?category=Neurosciences"
    className="group block enhanced-transition"
    aria-label="Voir tous les articles de Neurosciences"
  >
          <div className="relative bg-gradient-neurosciences-soft 
                          glass-card-soft p-6 md:p-8 rounded-2xl shadow-category card-glow-neurosciences
                          transform transition-all duration-300 ease-out
                          focus-ring overflow-hidden border border-white/10
                          touch-manipulation
                          
                          hover:bg-gradient-neurosciences-hover hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] md:hover:scale-105
                          
                          active:bg-gradient-neurosciences-hover active:scale-95 active:shadow-lg
                          md:active:scale-100">
            
            {/* Background gradient overlay - Desktop hover + Mobile active */}
            <div className="absolute inset-0 bg-gradient-neurosciences opacity-0 
                            md:group-hover:opacity-10 group-active:opacity-15
                            transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Pattern géométrique - Responsive opacity */}
            <div className="absolute top-4 right-4 opacity-10 
                            md:group-hover:opacity-20 group-active:opacity-25
                            transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-current">
                <path d="M20 8 L32 20 L20 32 L8 20 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-400"/>
                <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-500"/>
              </svg>
            </div>
            
            {/* Icône avec feedback tactile */}
            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-neurosciences rounded-xl 
                              flex items-center justify-center shadow-glow-neurosciences
                              transition-all duration-300 relative overflow-hidden
                              
                              md:group-hover:animate-glow-pulse md:group-hover:scale-110
                              group-active:scale-110 group-active:shadow-glow-neurosciences">
                <Brain className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg relative z-10 
                                 transition-transform duration-200
                                 group-active:scale-110" />
                
                {/* Effet ripple au touch - Mobile only */}
                <div className="absolute inset-0 bg-white/30 rounded-xl scale-0 
                                group-active:scale-150 md:group-active:scale-0
                                transition-transform duration-300 ease-out"></div>
              </div>
              
              {/* Particules flottantes - Desktop only */}
              <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.2s' }}></div>
              <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.4s' }}></div>
            </div>

            {/* Contenu avec feedback tactile */}
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-3 
                             transition-all duration-300
                             md:group-hover:text-gradient-neurosciences 
                             group-active:text-indigo-600 dark:group-active:text-indigo-400
                             transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                Neurosciences
              </h3>
              <p className="text-sm md:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                           transition-colors duration-300
                           md:group-hover:text-neutral-700 dark:md:group-hover:text-neutral-200
                           group-active:text-neutral-700 dark:group-active:text-neutral-200">
                Découvrez comment votre cerveau fonctionne et comment l'optimiser
              </p>
            </div>

            {/* Barre de progression - Responsive */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-neurosciences 
                            transition-all duration-500 ease-out
                            md:group-hover:w-full group-active:w-full"></div>

            {/* Effet de brillance - Adapté mobile */}
            <div className="absolute inset-0 opacity-0 
                            md:group-hover:opacity-20 group-active:opacity-10
                            bg-gradient-to-r from-transparent via-white to-transparent
                            transform -skew-x-12 translate-x-full 
                            md:group-hover:translate-x-0 group-active:translate-x-0
                            transition-transform duration-500 ease-out pointer-events-none"></div>
            
            {/* Badge tactile responsive */}
            <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 
                            transition-all duration-300 transform translate-y-2
                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                            group-active:opacity-100 group-active:translate-y-0">
              <div className="bg-gradient-neurosciences text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                <span className="hidden sm:inline">Voir articles</span>
                <span className="sm:hidden">Voir</span>
              </div>
            </div>
          </div>
        </Link>
      </RevealOnScroll>

      {/* PSYCHOLOGIE - Interactions tactiles optimisées */}
<RevealOnScroll direction="up" delay={300}>
  <Link
    to="/blog?category=Psychologie"
    className="group block enhanced-transition"
    aria-label="Voir tous les articles de Psychologie"
  >
          <div className="relative bg-gradient-psychologie-soft 
                          glass-card-soft p-6 md:p-8 rounded-2xl shadow-category card-glow-psychologie
                          transform transition-all duration-300 ease-out
                          focus-ring overflow-hidden border border-white/10
                          touch-manipulation
                          
                          hover:bg-gradient-psychologie-hover hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] md:hover:scale-105
                          
                          active:bg-gradient-psychologie-hover active:scale-95 active:shadow-lg
                          md:active:scale-100">
            
            <div className="absolute inset-0 bg-gradient-psychologie opacity-0 
                            md:group-hover:opacity-10 group-active:opacity-15
                            transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Pattern coeur stylisé */}
            <div className="absolute top-4 right-4 opacity-10 
                            md:group-hover:opacity-20 group-active:opacity-25
                            transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-pink-400">
                <path d="M20 32 C15 27, 8 20, 8 14 C8 10, 12 8, 16 10 C18 11, 20 13, 20 13 C20 13, 22 11, 24 10 C28 8, 32 10, 32 14 C32 20, 25 27, 20 32 Z" 
                      stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-psychologie rounded-xl 
                              flex items-center justify-center shadow-glow-psychologie
                              transition-all duration-300 relative overflow-hidden
                              
                              md:group-hover:animate-glow-pulse md:group-hover:scale-110
                              group-active:scale-110 group-active:shadow-glow-psychologie">
                <Heart className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg relative z-10 
                                 transition-transform duration-200
                                 group-active:scale-110 md:group-hover:animate-pulse" />
                
                <div className="absolute inset-0 bg-white/30 rounded-xl scale-0 
                                group-active:scale-150 md:group-active:scale-0
                                transition-transform duration-300 ease-out"></div>
              </div>
              
              <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.1s' }}></div>
              <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-rose-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.3s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-3 
                             transition-all duration-300
                             md:group-hover:text-gradient-psychologie 
                             group-active:text-pink-600 dark:group-active:text-pink-400
                             transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                Psychologie
              </h3>
              <p className="text-sm md:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                           transition-colors duration-300
                           md:group-hover:text-neutral-700 dark:md:group-hover:text-neutral-200
                           group-active:text-neutral-700 dark:group-active:text-neutral-200">
                Comprenez vos émotions et développez votre intelligence émotionnelle
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-psychologie 
                            transition-all duration-500 ease-out
                            md:group-hover:w-full group-active:w-full"></div>

            <div className="absolute inset-0 opacity-0 
                            md:group-hover:opacity-20 group-active:opacity-10
                            bg-gradient-to-r from-transparent via-white to-transparent
                            transform -skew-x-12 translate-x-full 
                            md:group-hover:translate-x-0 group-active:translate-x-0
                            transition-transform duration-500 ease-out pointer-events-none"></div>
            
            <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 
                            transition-all duration-300 transform translate-y-2
                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                            group-active:opacity-100 group-active:translate-y-0">
              <div className="bg-gradient-psychologie text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                <span className="hidden sm:inline">Voir articles</span>
                <span className="sm:hidden">Voir</span>
              </div>
            </div>
          </div>
        </Link>
      </RevealOnScroll>

      {/* DÉVELOPPEMENT PERSONNEL - Interactions tactiles optimisées */}
<RevealOnScroll direction="up" delay={400}>
  <Link
    to="/blog?category=Développement Personnel"
    className="group block enhanced-transition"
    aria-label="Voir tous les articles de Développement Personnel"
  >
          <div className="relative bg-gradient-developpement-soft 
                          glass-card-soft p-6 md:p-8 rounded-2xl shadow-category card-glow-developpement
                          transform transition-all duration-300 ease-out
                          focus-ring overflow-hidden border border-white/10
                          touch-manipulation
                          
                          hover:bg-gradient-developpement-hover hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] md:hover:scale-105
                          
                          active:bg-gradient-developpement-hover active:scale-95 active:shadow-lg
                          md:active:scale-100">
            
            <div className="absolute inset-0 bg-gradient-developpement opacity-0 
                            md:group-hover:opacity-10 group-active:opacity-15
                            transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Pattern croissance */}
            <div className="absolute top-4 right-4 opacity-10 
                            md:group-hover:opacity-20 group-active:opacity-25
                            transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-emerald-400">
                <path d="M8 32 L16 24 L24 28 L32 8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="8" r="3" fill="currentColor"/>
                <circle cx="24" cy="28" r="2" fill="currentColor"/>
                <circle cx="16" cy="24" r="2" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-developpement rounded-xl 
                              flex items-center justify-center shadow-glow-developpement
                              transition-all duration-300 relative overflow-hidden
                              
                              md:group-hover:animate-glow-pulse md:group-hover:scale-110
                              group-active:scale-110 group-active:shadow-glow-developpement">
                <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg relative z-10 
                                     transition-transform duration-200
                                     group-active:scale-110" />
                
                <div className="absolute inset-0 bg-white/30 rounded-xl scale-0 
                                group-active:scale-150 md:group-active:scale-0
                                transition-transform duration-300 ease-out"></div>
              </div>
              
              <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.2s' }}></div>
              <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.4s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-3 
                             transition-all duration-300
                             md:group-hover:text-gradient-developpement 
                             group-active:text-emerald-600 dark:group-active:text-emerald-400
                             transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                Développement Personnel
              </h3>
              <p className="text-sm md:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                           transition-colors duration-300
                           md:group-hover:text-neutral-700 dark:md:group-hover:text-neutral-200
                           group-active:text-neutral-700 dark:group-active:text-neutral-200">
                Techniques pratiques pour votre croissance personnelle et professionnelle
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-developpement 
                            transition-all duration-500 ease-out
                            md:group-hover:w-full group-active:w-full"></div>

            <div className="absolute inset-0 opacity-0 
                            md:group-hover:opacity-20 group-active:opacity-10
                            bg-gradient-to-r from-transparent via-white to-transparent
                            transform -skew-x-12 translate-x-full 
                            md:group-hover:translate-x-0 group-active:translate-x-0
                            transition-transform duration-500 ease-out pointer-events-none"></div>
            
            <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 
                            transition-all duration-300 transform translate-y-2
                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                            group-active:opacity-100 group-active:translate-y-0">
              <div className="bg-gradient-developpement text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                <span className="hidden sm:inline">Voir articles</span>
                <span className="sm:hidden">Voir</span>
              </div>
            </div>
          </div>
        </Link>
      </RevealOnScroll>

      {/* RELATIONS HUMAINES - Interactions tactiles optimisées */}
<RevealOnScroll direction="up" delay={500}>
  <Link
    to="/blog?category=Relations Humaines"
    className="group block enhanced-transition"
    aria-label="Voir tous les articles de Relations Humaines"
  >
          <div className="relative bg-gradient-relations-soft 
                          glass-card-soft p-6 md:p-8 rounded-2xl shadow-category card-glow-relations
                          transform transition-all duration-300 ease-out
                          focus-ring overflow-hidden border border-white/10
                          touch-manipulation
                          
                          hover:bg-gradient-relations-hover hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] md:hover:scale-105
                          
                          active:bg-gradient-relations-hover active:scale-95 active:shadow-lg
                          md:active:scale-100">
            
            <div className="absolute inset-0 bg-gradient-relations opacity-0 
                            md:group-hover:opacity-10 group-active:opacity-15
                            transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Pattern connexions */}
            <div className="absolute top-4 right-4 opacity-10 
                            md:group-hover:opacity-20 group-active:opacity-25
                            transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-400">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="28" cy="12" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="20" cy="28" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M16 12 L24 12 M16 15 L17 25 M24 15 L23 25" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            
            <div className="relative z-10 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-relations rounded-xl 
                              flex items-center justify-center shadow-glow-relations
                              transition-all duration-300 relative overflow-hidden
                              
                              md:group-hover:animate-glow-pulse md:group-hover:scale-110
                              group-active:scale-110 group-active:shadow-glow-relations">
                <Users className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg relative z-10 
                                 transition-transform duration-200
                                 group-active:scale-110" />
                
                <div className="absolute inset-0 bg-white/30 rounded-xl scale-0 
                                group-active:scale-150 md:group-active:scale-0
                                transition-transform duration-300 ease-out"></div>
              </div>
              
              <div className="hidden md:block absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.1s' }}></div>
              <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-violet-400 rounded-full 
                              opacity-0 group-hover:opacity-60 group-hover:animate-float transition-all duration-500"
                   style={{ animationDelay: '0.3s' }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-3 
                             transition-all duration-300
                             md:group-hover:text-gradient-relations 
                             group-active:text-purple-600 dark:group-active:text-purple-400
                             transform md:group-hover:translate-x-1 group-active:translate-x-0.5">
                Relations Humaines
              </h3>
              <p className="text-sm md:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300
                           transition-colors duration-300
                           md:group-hover:text-neutral-700 dark:md:group-hover:text-neutral-200
                           group-active:text-neutral-700 dark:group-active:text-neutral-200">
                Améliorez vos relations et votre communication interpersonnelle
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-relations 
                            transition-all duration-500 ease-out
                            md:group-hover:w-full group-active:w-full"></div>

            <div className="absolute inset-0 opacity-0 
                            md:group-hover:opacity-20 group-active:opacity-10
                            bg-gradient-to-r from-transparent via-white to-transparent
                            transform -skew-x-12 translate-x-full 
                            md:group-hover:translate-x-0 group-active:translate-x-0
                            transition-transform duration-500 ease-out pointer-events-none"></div>
            
            <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 
                            transition-all duration-300 transform translate-y-2
                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                            group-active:opacity-100 group-active:translate-y-0">
              <div className="bg-gradient-relations text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                <span className="hidden sm:inline">Voir articles</span>
                <span className="sm:hidden">Voir</span>
              </div>
            </div>
          </div>
        </Link>
      </RevealOnScroll>

    </div>
    
    {/* Message informatif - responsive */}
    <div className="text-center mt-8 md:mt-12 animate-in fade-in duration-700" style={{ animationDelay: '800ms' }}>
      <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
        <span className="hidden sm:inline">Cliquez sur une catégorie pour voir tous les articles correspondants</span>
        <span className="sm:hidden">Touchez une catégorie pour voir les articles</span>
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