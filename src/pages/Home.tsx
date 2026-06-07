import { Link } from 'react-router-dom'
import DailyQuote from '../components/DailyQuote'
import ResumeReading from '../components/ResumeReading'
import NewsletterSection from '../components/sections/NewsletterSection'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import HeroEveil from '../components/HeroEveilWorker'
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
  const card1             = useInView()
  const card2             = useInView()
  const card3             = useInView()
  const newsletterSection = useInView()

  return (
    <div className="min-h-screen">
      <SEO
        isHome
        title="L'Éveil Mental | Neurosciences, Psychologie & Développement Personnel"
        description="Neurosciences et psychologie appliquées : articles scientifiques, outils pratiques et protocoles validés pour comprendre votre cerveau et transformer votre vie. Sources peer-reviewed."
        path="/"
        image="/images/og-default.jpg"
      />

      {/* Hero — pas de fade-in, premier élément visible */}
      <div className="hero-section relative">
        <HeroEveil />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0d0500] pointer-events-none z-10" />
      </div>

      {/* Citation du jour */}
      <section
        ref={quoteSection.ref}
        className={`quote-section relative z-20 overflow-hidden -mt-28 sm:-mt-32 pt-12 pb-8 sm:pt-16 sm:pb-10 bg-sand-50 dark:bg-gradient-to-b dark:from-[#0d0500] dark:to-neutral-900 transition-all duration-300 delay-200 ${
          quoteSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Ancre visuelle au-dessus de la card */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9953A]/60" />
              <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-[#C9953A]/70">
                Pensée du jour
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9953A]/60" />
            </div>
          </div>
          <DailyQuote />
        </div>
      </section>

      {/* Reprendre la lecture */}
      <section
        ref={resumeSection.ref}
        className={`py-8 bg-sand-50 dark:bg-neutral-900 transition-all duration-300 delay-100 ${
          resumeSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <ResumeReading />
        </div>
      </section>

      {/* ThemeCards */}
      <div
        ref={themeSection.ref}
        className={`transition-all duration-300 delay-100 ${
          themeSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <ThemeCards />
      </div>

      {/* Articles à la une */}
      <section className="py-12 md:py-20 bg-white dark:bg-neutral-800 relative overflow-hidden">
        {/* Lignes décoratives */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C9953A]/20 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#7C3AED]/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">

          <div
            ref={articlesHeader.ref}
            className={`text-center mb-16 transition-all duration-300 delay-100 ${
              articlesHeader.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
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
            <div
              ref={card1.ref}
              className={`transition-all duration-300 delay-[0ms] ${card1.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            >
              <ArticleCard article={featuredArticles[0]} variant="featured" />
            </div>
            <div
              ref={card2.ref}
              className={`transition-all duration-300 delay-[80ms] ${card2.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            >
              <ArticleCard article={featuredArticles[1]} variant="featured" />
            </div>
            <div
              ref={card3.ref}
              className={`transition-all duration-300 delay-[160ms] ${card3.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            >
              <ArticleCard article={featuredArticles[2]} variant="featured" />
            </div>
          </div>

          <div
            ref={articlesButton.ref}
            className={`text-center transition-all duration-300 delay-100 ${
              articlesButton.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
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
        className={`transition-all duration-300 delay-100 ${
          newsletterSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <NewsletterSection />
      </div>

    </div>
  )
}

export default Home
