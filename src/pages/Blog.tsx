// src/pages/Blog.tsx
import React, { useState, useMemo } from 'react'
import { Search, Filter, Clock, User } from 'lucide-react'
import SmartImg from '../components/SmartImg'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Blog = () => {
  // État pour le filtre actif
  const [activeFilter, setActiveFilter] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")

  const articles = [
    {
      id: 1,
      title: "Comment surmonter le rejet social",
      excerpt: "Découvrez les mécanismes psychologiques du rejet et les stratégies pour développer votre résilience émotionnelle.",
      category: "Psychologie",
      readTime: 8,
      date: "2024-01-15",
      image: "/images/articles/rejet-social-thumb.jpg",
      slug: "surmonter-rejet-social",
      featured: true
    },
    {
      id: 2,
      title: "La neuroplasticité : votre cerveau peut changer",
      excerpt: "Explorez les dernières découvertes sur la capacité du cerveau à se réorganiser tout au long de la vie.",
      category: "Neurosciences",
      readTime: 12,
      date: "2024-01-12",
      image: "/images/articles/neuroplasticite-thumb.jpg",
      slug: "neuroplasticite-cerveau"
    },
    {
      id: 3,
      title: "Construire une confiance en soi durable",
      excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
      category: "Développement Personnel",
      readTime: 10,
      date: "2024-01-10",
      image: "/images/articles/confiance-soi-thumb.jpg",
      slug: "confiance-en-soi-durable"
    },
    {
      id: 4,
      title: "Dopamine intelligente : 7 micro-actions pour relancer ta motivation",
      excerpt: "Utilise la dopamine à ton avantage avec 7 micro-actions simples et efficaces.",
      category: "Psychologie",
      readTime: 6,
      date: "2025-08-13",
      image: "/images/articles/dopamine-thumb.jpg",
      slug: "neuro-dopamine-routine"
    },
    {
      id: 5,
      title: "Attention fragmentée : restaurer sa concentration profonde à l'ère numérique",
      excerpt: "Découvrez les mécanismes neuroscientifiques de l'attention fragmentée et 8 stratégies scientifiquement validées.",
      category: "Neurosciences",
      readTime: 12,
      date: "2025-08-28",
      image: "/images/articles/attention-fragmentee-cover-1200x630.jpg",
      slug: "attention-fragmentee-concentration-numerique"
    },
    {
      id: 6,
      title: "Rumination mentale : comprendre et libérer son esprit des pensées obsessionnelles",
      excerpt: "Découvrez les mécanismes neuroscientifiques de la rumination et 7 stratégies validées scientifiquement.",
      category: "Psychologie",
      readTime: 11,
      date: "2025-08-29",
      image: "/images/articles/rumination-cover.jpg",
      slug: "rumination-mentale-pensees-obsessionnelles"
    },
    {
      id: 7,
      title:  "Procrastination : comprendre les mécanismes cérébraux pour enfin passer à l'action",
      excerpt: "Découvrez les bases neuroscientifiques de la procrastination et 8 stratégies validées scientifiquement pour surmonter l'évitement comportemental et retrouver la motivation.",
      category: "Psychologie",
      readTime: 13,
      date: "2025-08-24",
      image: "/images/articles/procrastination-brain-conflict.jpg",
      slug: "procrastination-cerveau-agir-neurosciences",
    }
  ]

  const categories = ["Tous", "Psychologie", "Neurosciences", "Développement Personnel", "Bien-être"]

  // Filtrage des articles basé sur la catégorie et la recherche
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filtrage par catégorie
    if (activeFilter !== "Tous") {
      filtered = filtered.filter(article => article.category === activeFilter);
    }

    // Filtrage par recherche
    if (searchQuery.trim()) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen py-8">
      <SEO
        title="Blog"
        description="Nos articles sur la psychologie, les neurosciences et le développement personnel."
        path="/blog"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Blog L'Éveil
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Découvrez nos articles sur la psychologie, les neurosciences et le développement personnel
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-900 dark:text-white"
              />
            </div>
            
            {/* Filter Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-neutral-900 dark:text-white">
              <Filter className="w-5 h-5" />
              Filtres
            </button>
          </div>

          {/* Categories - MAINTENANT FONCTIONNELS */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeFilter === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {category}
              </button>
            ))}
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
            filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <SmartImg
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.featured && (
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      À la une
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        article.category === 'Psychologie' 
                          ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'
                          : article.category === 'Neurosciences'
                          ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                          : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      }`}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime} min
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Guesso
                    </div>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))
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
                  setActiveFilter("Tous");
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
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ne manquez aucun article
            </h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Recevez nos derniers articles sur la psychologie et les neurosciences 
              directement dans votre boîte mail.
            </p>
            <Link
              to="/#newsletter"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              S'abonner à la newsletter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog