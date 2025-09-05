// src/pages/Blog.tsx
import React, { useState, useMemo, useEffect } from 'react'
import { Search, Filter, Clock, User } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import Fuse from 'fuse.js'

const Blog = () => {
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
          active: 'bg-rose-600 text-white', 
          hover: 'hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-900/20 dark:hover:text-rose-400' 
        };
      case 'Neurosciences':
        return { 
          active: 'bg-indigo-600 text-white', 
          hover: 'hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400' 
        };
      case 'Relations Humaines':
        return { 
          active: 'bg-purple-600 text-white', 
          hover: 'hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/20 dark:hover:text-purple-400' 
        };
      case 'Développement Personnel':
        return { 
          active: 'bg-green-600 text-white', 
          hover: 'hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900/20 dark:hover:text-green-400' 
        };
      default:
        return { 
          active: 'bg-indigo-600 text-white', 
          hover: 'hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400' 
        };
    }
  };

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
  const articles = [
    {
      id: 1,
      title: "Comment surmonter le rejet social",
      excerpt: "Découvrez les mécanismes psychologiques du rejet et les stratégies pour développer votre résilience émotionnelle.",
      category: "Psychologie",
      readTime: 8,
      date: "2024-01-15",
      image: "/images/articles/rejet-social-cover",
      slug: "surmonter-rejet-social",
      featured: true
    },
    {
      id: 2,
      title: "Neuroplasticité : comment reprogrammer son cerveau après 25 ans",
      excerpt: "Découvrez les mécanismes scientifiques de la neuroplasticité et 7 stratégies concrètes pour optimiser la plasticité de votre cerveau.",
      category: "Neurosciences",
      readTime: 12,
      date: "2024-01-12",
      image: "/images/articles/neuroplasticite-cover",
      slug: "neuroplasticite-cerveau"
    },
    {
      id: 3,
      title: "Construire une confiance en soi durable",
      excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
      category: "Développement Personnel",
      readTime: 10,
      date: "2024-01-10",
      image: "/images/articles/confiance-soi-cover",
      slug: "confiance-en-soi-durable"
    },
    {
      id: 4,
      title: "Dopamine intelligente : 7 micro-actions pour relancer ta motivation",
      excerpt: "Utilise la dopamine à ton avantage avec 7 micro-actions simples et efficaces.",
      category: "Psychologie",
      readTime: 6,
      date: "2025-08-13",
      image: "/images/articles/dopamine-cover",
      slug: "neuro-dopamine-routine"
    },
    {
      id: 5,
      title: "Attention fragmentée : restaurer sa concentration profonde à l'ère numérique",
      excerpt: "Découvrez les mécanismes neuroscientifiques de l'attention fragmentée et 8 stratégies scientifiquement validées.",
      category: "Neurosciences",
      readTime: 12,
      date: "2025-08-28",
      image: "/images/articles/attention-fragmentee-cover-1200x630",
      slug: "attention-fragmentee-concentration-numerique"
    },
    {
      id: 6,
      title: "Rumination mentale : comprendre et libérer son esprit des pensées obsessionnelles",
      excerpt: "Découvrez les mécanismes neuroscientifiques de la rumination et 7 stratégies validées scientifiquement.",
      category: "Psychologie",
      readTime: 11,
      date: "2025-08-29",
      image: "/images/articles/rumination-cover",
      slug: "rumination-mentale-pensees-obsessionnelles"
    },
    {
      id: 7,
      title: "Procrastination : comprendre les mécanismes cérébraux pour enfin passer à l'action",
      excerpt: "Découvrez les bases neuroscientifiques de la procrastination et 8 stratégies validées scientifiquement.",
      category: "Psychologie",
      readTime: 13,
      date: "2025-08-30",
      image: "/images/articles/procrastination-brain-conflict",
      slug: "procrastination-cerveau-agir-neurosciences"
    },
    {
     id: 8,
      title: "La méthode ACR : répondre aux bonnes nouvelles pour renforcer les relations",
      excerpt: "Découvrez comment la réponse active-constructive (ACR) transforme votre façon de célébrer les bonnes nouvelles et renforce durablement vos liens interpersonnels.",
      category: "Relations Humaines",
      readTime: 10,
      date: "2025-08-30",
      image: "/images/articles/methode-acr-repondre-aux-bonnes-nouvelles-og-1200x630" ,
      slug: "methode-acr-repondre-aux-bonnes-nouvelles"
    }
  ]

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
        { name: 'title', weight: 0.4 },
        { name: 'excerpt', weight: 0.3 },
        { name: 'category', weight: 0.2 },
        { name: 'tags', weight: 0.1 } // Si vous avez des tags
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
  <div className="mb-6">
    {/* Search - maintenant pleine largeur */}
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Rechercher un article..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-900 dark:text-white"
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
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
          activeFilter === category
            ? colors.active + " shadow-md"
            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 " + colors.hover
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
            filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                <img
  src={`${article.image}.webp`}
  alt={article.title}
  width="400"
  height="240"
  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
  loading="lazy"
  decoding="async"
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
    : article.category === 'Relations Humaines'
    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
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
              Recevoir le guide gratuit + newsletter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog