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
import { useInView } from '../hooks/useIntersectionObserver'

const Home = () => {
  const featuredArticles = articles.filter(a => a.featured).slice(0, 3)

  const quoteSection      = useInView()
  const resumeSection     = useInView()
  const themeSection      = useInView()
  const articlesHeader    = useInView()
  const articlesButton    = useInView()
  const newsletterSection = useInView()

  return (
    <div className="min-h-screen">
      <SEO
        isHome
        title="Psychologie, Neurosciences & Développement Personnel"
        description="Articles quotidiens, outils et ressources pour comprendre l'esprit humain et transformer votre vie."
        path="/"
        image="/images/og-default.jpg"
      />

      {/* Hero — pas de fade-in, premier élément visible */}
      <div className="hero-section">
        <HeroEveil />
      </div>

      {/* Citation du jour */}
      <section
        ref={quoteSection.ref}
        className={`quote-section relative overflow-visible py-8 sm:py-12 bg-sand-50 dark:bg-neutral-900 transition-all duration-700 delay-100 ${
          quoteSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <DailyQuote />
        </div>
      </section>

      {/* Reprendre la lecture */}
      <section
        ref={resumeSection.ref}
        className={`py-8 bg-white dark:bg-neutral-800 transition-all duration-700 delay-100 ${
          resumeSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <ResumeReading />
        </div>
      </section>

      {/* ThemeCards */}
      <div
        ref={themeSection.ref}
        className={`transition-all duration-700 delay-100 ${
          themeSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ThemeCards />
      </div>

      {/* Articles à la une */}
      <section className="py-20 bg-white dark:bg-neutral-800 relative overflow-hidden">
        {/* Lignes décoratives */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">

          <div
            ref={articlesHeader.ref}
            className={`text-center mb-16 transition-all duration-700 delay-100 ${
              articlesHeader.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
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

          <div
            ref={articlesButton.ref}
            className={`text-center transition-all duration-700 delay-100 ${
              articlesButton.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/blog"
              className="group bg-gold-500 hover:bg-[#7C3AED] dark:hover:bg-[#7C3AED] text-sand-900 dark:bg-gold-400 px-8 py-3 rounded-lg font-semibold
                         transition-all duration-300 inline-flex items-center gap-2 focus-ring
                         hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl
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
      <div
        ref={newsletterSection.ref}
        className={`transition-all duration-700 delay-100 ${
          newsletterSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <NewsletterSection />
      </div>

    </div>
  )
}

export default Home
