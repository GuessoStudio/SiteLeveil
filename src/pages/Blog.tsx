import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { ArticleCard } from '../components/ui/ArticleCard'
import { useSearchParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Fuse from 'fuse.js'
import { useNeuroJournal } from '../hooks/useNeuroJournal'
import { useInView } from '../hooks/useIntersectionObserver'
import { articles } from '../data/blog-articles'

const Blog = () => {
  const navigate = useNavigate()
  const { toggleFavorite, isFavorite } = useNeuroJournal();

  const handleNewsletterClick = () => {
    navigate('/')
  }
  const cv0 = useInView()
  const cv1 = useInView()
  const cv2 = useInView()
  const cv3 = useInView()
  const cv4 = useInView()
  const cv5 = useInView()
  const cardViews = [cv0, cv1, cv2, cv3, cv4, cv5]

  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")

  // Initialiser activeFilter depuis l'URL ou "Tous" par défaut
  const [activeFilter, setActiveFilter] = useState(() => {
    return searchParams.get('category') || "Tous"
  })

  const getCategoryColors = (category: string) => {
    switch (category) {
      case 'Psychologie':
        return {
          active: 'bg-[#7C3AED] text-white',
          hover: 'hover:border-[#7C3AED]/60 hover:text-[#7C3AED] dark:hover:text-[#7C3AED]'
        }
      case 'Neurosciences':
        return {
          active: 'bg-[#C9953A] text-white',
          hover: 'hover:border-[#C9953A]/60 hover:text-[#C9953A] dark:hover:text-[#C9953A]'
        }
      case 'Relations Humaines':
        return {
          active: 'bg-[#10B981] text-white',
          hover: 'hover:border-[#10B981]/60 hover:text-[#10B981] dark:hover:text-[#10B981]'
        }
      case 'Développement Personnel':
        return {
          active: 'bg-[#0EA5E9] text-white',
          hover: 'hover:border-[#0EA5E9]/60 hover:text-[#0EA5E9] dark:hover:text-[#0EA5E9]'
        }
      default: // Tous
        return {
          active: 'bg-[#C9953A] text-white',
          hover: 'hover:border-[#C9953A]/60 hover:text-[#C9953A] dark:hover:text-[#C9953A]'
        }
    }
  }

  // Synchroniser l'URL quand le filtre change
  const updateFilter = (category: string) => {
    setActiveFilter(category)
    if (category === "Tous") {
      searchParams.delete('category')
    } else {
      searchParams.set('category', category)
    }
    setSearchParams(searchParams)
  }

  // Articles avec tous vos articles récents
  // Imported from ../data/blog-articles.ts

  const categories = ["Tous", "Psychologie", "Neurosciences", "Développement Personnel", "Relations Humaines"]

  // Filtrage des articles basé sur la catégorie et la recherche
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filtrage par catégorie (garde votre logique existante)
    if (activeFilter !== "Tous") {
      filtered = filtered.filter(article => article.category === activeFilter);
    }

    // NOUVELLE logique de recherche intelligente
    if (searchQuery.trim()) {
      const fuse = new Fuse(filtered, {
        keys: [
          { name: 'title', weight: 0.5 },
          { name: 'excerpt', weight: 0.3 },
          { name: 'category', weight: 0.2 },
        ],
        threshold: 0.3, // Plus tolérant aux fautes de frappe
        ignoreLocation: true,
        minMatchCharLength: 2
      })

      const results = fuse.search(searchQuery.trim())
      filtered = results.map(result => result.item)
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen py-8 bg-sand-50 dark:bg-neutral-900">
      <SEO
        title="Blog"
        description="Nos articles sur la psychologie, les neurosciences et le développement personnel."
        path="/blog"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sand-900 dark:text-sand-50 mb-4">
            Blog L'Éveil
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Explorez la psychologie, les neurosciences et le développement personnel fondés sur la science
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="mb-6">
            {/* Search - maintenant pleine largeur */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-sand-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sand-900 dark:text-sand-50"
              />
            </div>
          </div>

          {/* Categories - MAINTENANT FONCTIONNELS AVEC URL SYNC */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const colors = getCategoryColors(category);
              return (
                <button
                  key={category}
                  onClick={() => updateFilter(category)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                  activeFilter === category
                    ? colors.active + " shadow-md border-transparent"
                    : "bg-transparent border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 " + colors.hover
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Indicateur du nombre de résultats */}
          {(activeFilter !== "Tous" || searchQuery.trim()) && (
            <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
              {activeFilter !== "Tous" && ` dans "${activeFilter}"`}
              {searchQuery.trim() && ` pour "${searchQuery}"`}
            </div>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => {
              const isFav = isFavorite(article.id, 'article')
              const view = cardViews[index]
              return (
                <div
                  key={article.id}
                  ref={view?.ref}
                  className={`transition-all duration-700 ${!view || view.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={index < 6 ? { transitionDelay: `${index * 75}ms` } : undefined}
                >
                  <ArticleCard
                    article={article}
                    variant="standard"
                    isFavorite={isFav}
                    onFavoriteToggle={() => toggleFavorite({
                      id: article.id,
                      title: article.title,
                      type: 'article',
                      url: `/blog/${article.slug}`,
                      image: article.image
                    })}
                  />
                </div>
              )
            })
          ) : (
            // Message quand aucun article n'est trouvé
            <div className="col-span-full text-center py-12">
              <div className="text-neutral-400 dark:text-neutral-500 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Aucun article trouvé</h3>
                <p>
                  {searchQuery.trim()
                    ? `Aucun résultat pour "${searchQuery}" ${activeFilter !== "Tous" ? `dans "${activeFilter}"` : ""}`
                    : `Aucun article dans la catégorie "${activeFilter}"`
                  }
                </p>
              </div>
              <button
                onClick={() => {
                  updateFilter("Tous");
                  setSearchQuery("");
                }}
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Voir tous les articles
              </button>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#C9953A] to-[#7C3AED] rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ne manquez aucun article
            </h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Recevez les derniers articles sur la psychologie et les neurosciences
              directement dans votre boîte mail.
            </p>
            <button
              onClick={handleNewsletterClick}
              className="inline-flex items-center bg-sand-50 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Recevoir le guide gratuit + newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog