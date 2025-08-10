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
    { icon: Users, value: "10,000+", label: "Lecteurs actifs" },
    { icon: BookOpen, value: "500+", label: "Articles publiés" },
    { icon: TrendingUp, value: "95%", label: "Satisfaction" },
    { icon: Heart, value: "50,000+", label: "Vies transformées" }
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
      title="Psychologie, Neurosciences & Développement Personnel"
      description="Articles quotidiens, outils et ressources pour comprendre l'esprit humain et transformer votre vie."
      path="/"
      isHome
      image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto rounded-full shadow-lg mb-6 bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">É</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                Éveillez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">potentiel</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                Psychologie, neurosciences et développement personnel fondés sur la science pour transformer votre vie
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/blog"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold
                           transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl
                           transform hover:-translate-y-1 focus-ring"
              >
                Découvrir les articles <ArrowRight className="w-5 h-5" />
              </Link>

              {/* ancre interne → on garde <a>, mais avec focus-ring */}
              <a
                href="#newsletter"
                className="bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700
                           text-neutral-900 dark:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300
                           border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus-ring"
              >
                Recevoir le guide gratuit
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
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

      {/* Categories */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Explorez nos domaines d'expertise
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Des contenus scientifiquement fondés pour votre développement personnel et professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/blog?cat=${encodeURIComponent(category.title)}`}
                className="group bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all
                           duration-300 transform hover:-translate-y-2 border border-neutral-100 dark:border-neutral-700
                           focus-ring block"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Articles à la une
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Nos contenus les plus populaires pour commencer votre transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-b-none" style={{ aspectRatio: '3/2' }}>
                  <SmartImg
                    src={article.image}
                    alt={article.title}
                    width={1200}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
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
                    aria-label={`Lire l’article : ${article.title}`}
                    className="inline-flex items-center gap-1 font-medium text-indigo-600 hover:text-indigo-700
                               dark:text-indigo-400 dark:hover:text-indigo-300 rounded-lg px-2 py-1 focus-ring"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold
                         transition-colors inline-flex items-center gap-2 focus-ring"
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
