import React from 'react'
import { Search, Filter, Clock, User } from 'lucide-react'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Comment surmonter le rejet social",
      excerpt: "Découvrez les mécanismes psychologiques du rejet et les stratégies pour développer votre résilience émotionnelle.",
      category: "Psychologie",
      readTime: 8,
      date: "2024-01-15",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "neuroplasticite-cerveau"
    },
    {
      id: 3,
      title: "Construire une confiance en soi durable",
      excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
      category: "Développement Personnel",
      readTime: 10,
      date: "2024-01-10",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      slug: "confiance-en-soi-durable"
    }
  ]

  const categories = ["Tous", "Psychologie", "Neurosciences", "Développement Personnel", "Bien-être"]

  return (
    <div className="min-h-screen py-8">
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
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-900 dark:text-white"
              />
            </div>
            
            {/* Filter Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors text-neutral-900 dark:text-white">
              <Filter className="w-5 h-5" />
              Filtres
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "Tous"
                    ? "bg-indigo-600 text-white"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                {article.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      À la une
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>L'Éveil</span>
                    </div>
                  </div>
                  <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                </div>
                
                <a
                  href={`/article/${article.slug}`}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                >
                  Lire l'article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Charger plus d'articles
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog