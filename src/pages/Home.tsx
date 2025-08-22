import React from 'react'
import { Link } from 'react-router-dom'
import DailyQuote from '../components/DailyQuote'
import ResumeReading from '../components/ResumeReading'
import Newsletter from '../components/Newsletter'
import SmartImg from '../components/SmartImg'
import { ArrowRight, BookOpen, Brain, Heart, Users, TrendingUp, Star } from 'lucide-react'
import SEO from '../components/SEO'

// Import seulement les animations texte qui marchent
import SplitText from '../components/ui/text-animations/SplitText/SplitText'
import CountUp from '../components/ui/text-animations/CountUp/CountUp'  
import BlurText from '../components/ui/text-animations/BlurText/BlurText'

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
      
      {/* Hero Section avec votre magnifique image de fond + animations texte */}
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              {/* Titre principal avec SplitText */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                <SplitText 
                  text="Éveillez votre"
                  delay={100}
                  className="text-white"
                />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-200">
                  <SplitText 
                    text="potentiel"
                    delay={600}
                  />
                </span>
              </h1>
              
              {/* Sous-titre avec BlurText */}
              <div className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
                <BlurText 
                  text="Psychologie, neurosciences et développement personnel fondés sur la science pour transformer votre vie"
                  delay={1200}
                  className="text-white/95"
                />
              </div>
            </div>

            {/* Boutons avec hover amélioré */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 
                           text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 
                           flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl
                           transform hover:-translate-y-2 hover:scale-105 focus-ring backdrop-blur-sm"
              >
                Découvrir les articles <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="#newsletter"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white 
                           px-8 py-4 rounded-lg font-semibold transition-all duration-300
                           border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl
                           transform hover:-translate-y-2 hover:scale-105 focus-ring"
              >
                Recevoir le guide gratuit
              </a>
            </div>

            {/* Stats avec CountUp */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                             hover:bg-white/15 transition-all duration-500 hover:scale-105
                             animate-in fade-in"
                  style={{ animationDelay: `${1.5 + index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  
                  <div className="text-2xl font-bold text-white">
                    <CountUp 
                      from={0} 
                      to={stat.value} 
                      duration={2500}
                      delay={1800 + (index * 300)}
                      className="text-white"
                    />
                    {stat.value >= 1000 ? "+" : "%"}
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
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <Link
                  to={`/blog?cat=${encodeURIComponent(category.title)}`}
                  className="group bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all
                             duration-500 transform hover:-translate-y-4 hover:scale-105 border border-neutral-100 dark:border-neutral-700
                             focus-ring block hover:bg-gradient-to-br hover:from-white hover:to-neutral-50
                             dark:hover:from-neutral-800 dark:hover:to-neutral-750"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    <category.icon className="w-8 h-8 text-white relative z-10" />
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] 
                                    transition-transform duration-700 skew-x-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {category.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden">        
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
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <article className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-b-none" style={{ aspectRatio: '3/2' }}>
                    <SmartImg
                      src={article.image}
                      alt={article.title}
                      width={1200}
                      height={800}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-amber-400 fill-current drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                      <span>{article.readTime} min de lecture</span>
                    </div>

                    <Link
                      to={`/article/${article.slug}`}
                      aria-label={`Lire l'article : ${article.title}`}
                      className="inline-flex items-center gap-1 font-medium text-indigo-600 hover:text-indigo-700
                                 dark:text-indigo-400 dark:hover:text-indigo-300 rounded-lg px-2 py-1 focus-ring
                                 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300"
                    >
                      Lire l'article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="text-center animate-in fade-in duration-700" style={{ animationDelay: '1.4s' }}>
            <Link
              to="/blog"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold
                         transition-all duration-300 inline-flex items-center gap-2 focus-ring
                         hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Voir tous les articles <ArrowRight className="w-4 h-4" />
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