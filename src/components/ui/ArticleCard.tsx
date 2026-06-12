import { Link } from 'react-router-dom'
import { Star, Clock, User, Heart, ArrowRight } from 'lucide-react'
import { TiltCard } from './animations/TiltCard'
import { MagicCard } from './MagicCard'
import type { ArticleData } from '../../data/blog-articles'

interface ArticleCardProps {
  article: ArticleData
  variant?: 'featured' | 'standard'
  isFavorite?: boolean
  onFavoriteToggle?: (article: ArticleData) => void
}

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    'Neurosciences':           'bg-[#C9953A]/15 text-[#C9953A]',
    'Psychologie':             'bg-[#7C3AED]/15 text-[#7C3AED]',
    'Relations Humaines':      'bg-[#10B981]/15 text-[#10B981]',
    'Développement Personnel': 'bg-[#0EA5E9]/15 text-[#0EA5E9]',
  }
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors[category] ?? colors['Neurosciences']}`}>
      {category}
    </span>
  )
}

function FeaturedCard({ article }: { article: ArticleData }) {
  return (
    <TiltCard maxRotation={3} scale={1.03}>
      <MagicCard gradientColor="#C9953A" gradientSize={250} className="rounded-2xl h-full">
        <Link
          to={`/blog/${article.slug}/`}
          aria-label={`Lire l'article : ${article.title}`}
          className="group block h-full"
        >
          <article className="bg-sand-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col relative">

            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={`${article.image}-800.webp`}
                srcSet={`${article.image}-400.webp 400w, ${article.image}-800.webp 800w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                alt={article.title}
                width="600"
                height="338"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badge À la une */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-current" />
                À la une
              </div>

              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12 pointer-events-none" />
            </div>

            {/* Contenu */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <CategoryBadge category={article.category} />
                <span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime} min
                </span>
              </div>

              <h3 className="text-xl font-bold text-sand-900 dark:text-sand-50 mb-3 line-clamp-2
                             transition-colors duration-300 group-hover:text-[#C9953A]">
                {article.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 flex-1">
                {article.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#C9953A] group-hover:text-[#E8B84B] transition-colors duration-300">
                Lire l'article
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Barre dorée bas */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C9953A] group-hover:w-full transition-all duration-500 ease-out" />
          </article>
        </Link>
      </MagicCard>
    </TiltCard>
  )
}

function StandardCard({ article, isFavorite = false, onFavoriteToggle }: {
  article: ArticleData
  isFavorite?: boolean
  onFavoriteToggle?: (article: ArticleData) => void
}) {
  return (
    <MagicCard gradientColor="#C9953A" gradientSize={200} className="rounded-xl h-full">
      <div className="group relative bg-sand-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg
                      hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">

        {/* Image */}
        <Link to={`/blog/${article.slug}/`} className="block relative overflow-hidden shrink-0">
          <img
            src={`${article.image}-800.webp`}
            srcSet={`${article.image}-400.webp 400w, ${article.image}-800.webp 800w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            alt={article.title}
            width="400"
            height="240"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          {article.featured && (
            <div className="absolute top-4 left-4 flex items-center gap-1 bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
              <Star className="w-3 h-3 fill-current" />
              À la une
            </div>
          )}
        </Link>

        {/* Bouton favori */}
        {onFavoriteToggle && (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onFavoriteToggle(article)
            }}
            className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm
                       hover:bg-white dark:hover:bg-black/70 transition-all shadow-sm"
            aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'text-red-500 fill-red-500' : 'text-neutral-600 dark:text-neutral-300 hover:text-red-500'}`} />
          </button>
        )}

        {/* Contenu */}
        <div className="p-6 flex flex-col flex-1">
          <Link to={`/blog/${article.slug}/`} className="flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <CategoryBadge category={article.category} />
              <span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime} min
              </span>
            </div>

            <h3 className="text-xl font-bold text-sand-900 dark:text-sand-50 mb-3 line-clamp-2
                           transition-colors duration-300 group-hover:text-[#C9953A]">
              {article.title}
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 flex-1">
              {article.excerpt}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Guesso
              </span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
          </Link>
        </div>
      </div>
    </MagicCard>
  )
}

export function ArticleCard({ article, variant = 'standard', isFavorite, onFavoriteToggle }: ArticleCardProps) {
  if (variant === 'featured') return <FeaturedCard article={article} />
  return <StandardCard article={article} isFavorite={isFavorite} onFavoriteToggle={onFavoriteToggle} />
}
