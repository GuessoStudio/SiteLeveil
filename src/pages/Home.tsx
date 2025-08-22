import React from 'react'
import { Link } from 'react-router-dom'
import DailyQuote from '../components/DailyQuote'
import ResumeReading from '../components/ResumeReading'
import Newsletter from '../components/Newsletter'
import SmartImg from '../components/SmartImg'
import { ArrowRight, BookOpen, Brain, Heart, Users, TrendingUp, Star } from 'lucide-react'
import SEO from '../components/SEO'

const Home = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Comment surmonter le rejet social",
      excerpt: "Découvrez les mécanismes psychologiques du rejet et les stratégies pour développer votre résilience émotionnelle.",
      category: "Psychologie",
      readTime: 8,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      slug: "surmonter-rejet-social"
    },
    {
      id: 2,
      title: "La neuroplasticité : votre cerveau peut changer",
      excerpt: "Explorez les dernières découvertes sur la capacité du cerveau à se réorganiser tout au long de la vie.",
      category: "Neurosciences",
      readTime: 12,
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200",
      slug: "neuroplasticite-cerveau"
    },
    {
      id: 3,
      title: "Construire une confiance en soi durable",
      excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
      category: "Développement Personnel",
      readTime: 10,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      slug: "confiance-en-soi-durable"
    }
  ]

  const stats = [
    { icon: Users, value: 10000, label: "Lecteurs actifs" },
    { icon: BookOpen, value: 500, label: "Articles publiés" },
    { icon: TrendingUp, value: 95, label: "Satisfaction" },
    { icon: Heart, value: 50000, label: "Vies transformées" }
  ]

  const categories = [
    { icon: Brain,  title: "Neurosciences",             description: "Découvrez comment votre cerveau fonctionne et comment l'optimiser", color: "from-blue-500 to-indigo-600" },
    { icon: Heart,  title: "Psychologie",               description: "Comprenez vos émotions et développez votre intelligence émotionnelle", color: "from-pink-500 to-rose-600" },
    { icon: TrendingUp, title: "Développement Personnel", description: "Techniques pratiques pour votre croissance personnelle et professionnelle", color: "from-green-500 to-emerald-600" },
    { icon: Users,  title: "Relations Humaines",        description: "Améliorez vos relations et votre communication interpersonnelle", color: "from-purple-500 to-violet-600" }
  ]

  return (
    <div className="min-h-screen">
      <SEO
       isHome
  title="Psychologie, Neurosciences & Développement Personnel"
  description="Articles quotidiens, outils et ressources pour comprendre l'esprit humain et transformer votre vie."
  path="/"
  image="/images/og-default.jpg"
/>
      
      {/* Hero Section avec votre magnifique image de fond + animations CSS */}
      <section className="relative py-20 min-h-[80vh] flex items-center overflow-hidden">
        {/* Image de fond existante */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
        </div>
        
        {/* Particules CSS flottantes */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              {/* Titre principal avec animation CSS lettre par lettre */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                <span className="inline-block text-white">
                  {['É', 'v', 'e', 'i', 'l', 'l', 'e', 'z', ' ', 'v', 'o', 't', 'r', 'e'].map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700"
                      style={{
                        animationDelay: `${100 + index * 100}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-200">
                  {['p', 'o', 't', 'e', 'n', 't', 'i', 'e', 'l'].map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-in fade-in slide-in-from-bottom-8 duration-1000"
                      style={{
                        animationDelay: `${600 + index * 150}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>
              
              {/* Sous-titre avec animation flou progressif */}
              <div className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
                <div 
                  className="animate-in fade-in duration-1000"
                  style={{ 
                    animationDelay: '2000ms',
                    animationFillMode: 'both'
                  }}
                >
                  Psychologie, neurosciences et développement personnel fondés sur la science pour transformer votre vie
                </div>
              </div>
            </div>

            {/* Boutons avec hover amélioré */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ 
                animationDelay: '2500ms',
                animationFillMode: 'both'
              }}
            >
              <Link
                to="/blog"
                className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 
                           text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 
                           flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl
                           transform hover:-translate-y-2 hover:scale-105 focus-ring backdrop-blur-sm
                           relative overflow-hidden"
              >
                <span className="relative z-10">Découvrir les articles</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] 
                                transition-transform duration-700 skew-x-12" />
              </Link>

              <a
                href="#newsletter"
                className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white 
                           px-8 py-4 rounded-lg font-semibold transition-all duration-300
                           border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl
                           transform hover:-translate-y-2 hover:scale-105 focus-ring
                           relative overflow-hidden"
              >
                <span className="relative z-10">Recevoir le guide gratuit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] 
                                transition-transform duration-700 skew-x-12" />
              </a>
            </div>

            {/* Stats avec compteurs CSS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
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
                    {stat.value >= 1000 ? `${stat.value.toLocaleString()}+` : `${stat.value}%`}
                  </div>
                  
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Quote */}
      <section className="py-12 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <DailyQuote />
        </div>
      </section>

      {/* Resume Reading */}
      <section className="py-8 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <ResumeReading />
        </div>
      </section>

      {/* Categories avec animations CSS */}
      <section className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
        {/* Particules de fond */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
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
            {categories.map((category, index) => (
              <div 
                key={index}
                className="animate-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <Link
                  to={`/blog?cat=${encodeURIComponent(category.title)}`}
                  className="group bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all
                             duration-500 transform hover:-translate-y-4 hover:scale-105 border border-neutral-100 dark:border-neutral-700
                             focus-ring block hover:bg-gradient-to-br hover:from-white hover:to-neutral-50
                             dark:hover:from-neutral-800 dark:hover:to-neutral-750 relative overflow-hidden"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    <category.icon className="w-8 h-8 text-white relative z-10" />
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] 
                                    transition-transform duration-700 skew-x-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {category.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                    {category.description}
                  </p>
                  {/* Barre de progression décorative */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 
                                  group-hover:w-full transition-all duration-500" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden">
        {/* Effet de faisceau CSS */}
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
            {featuredArticles.map((article, index) => (
              <div
                key={article.id}
                className="animate-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <article className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative">
                  <div className="relative overflow-hidden rounded-b-none" style={{ aspectRatio: '3/2' }}>
                    <SmartImg
                      src={article.image}
                      alt={article.title}
                      width={1200}
                      height={800}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay graduel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-amber-400 fill-current drop-shadow-lg animate-pulse" />
                    </div>
                    
                    {/* Effet de brillance diagonal */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] 
                                    transition-transform duration-1000 skew-x-12" />
                  </div>

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
                      to={`/article/${article.slug}`}
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

                  {/* Barre de progression en bas */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 
                                  group-hover:w-full transition-all duration-700" />
                </article>
              </div>
            ))}
          </div>

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
                              translate-x-[-100%] group-hover:translate-x-[100%] 
                              transition-transform duration-700 skew-x-12" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter (ancre pour le CTA) */}
      <section id="newsletter">
        <Newsletter />
      </section>
    </div>
  )
}

export default Home