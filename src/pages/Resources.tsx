import React, { useState } from 'react'
import { Download, BookOpen, Video, Smartphone, Filter, Search, Star, Clock, Users } from 'lucide-react'

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['Tous', 'E-books', 'Guides', 'Outils', 'Vidéos', 'Applications']

  const resources = [
    {
      id: 1,
      title: "21 Déclencheurs Mentaux pour Réussir",
      description: "Guide complet des biais cognitifs et techniques de persuasion basés sur la psychologie comportementale.",
      category: "E-books",
      type: "PDF",
      pages: 45,
      downloads: 2500,
      rating: 4.8,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
      free: true
    },
    {
      id: 2,
      title: "Carnet de Gratitude Quotidienne",
      description: "Template structuré pour développer une pratique de gratitude scientifiquement prouvée pour le bien-être.",
      category: "Outils",
      type: "PDF",
      pages: 30,
      downloads: 1800,
      rating: 4.9,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      free: true
    },
    {
      id: 3,
      title: "Méditation Guidée : Gestion du Stress",
      description: "Séance audio de 20 minutes basée sur la pleine conscience pour réduire l'anxiété et le stress quotidien.",
      category: "Vidéos",
      type: "Audio",
      duration: "20 min",
      downloads: 3200,
      rating: 4.7,
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=400",
      free: true
    },
    {
      id: 4,
      title: "Tracker d'Habitudes Scientifique",
      description: "Application web pour suivre vos habitudes avec des insights basés sur la recherche comportementale.",
      category: "Applications",
      type: "Web App",
      users: "5K+",
      rating: 4.6,
      image: "/images/habit-tracker-cover.jpg",
      free: true,  
    },
    {
      id: 5,
      title: "Guide de la Communication Non-Violente",
      description: "Techniques pratiques pour améliorer vos relations interpersonnelles et résoudre les conflits.",
      category: "Guides",
      type: "PDF",
      pages: 35,
      downloads: 1500,
      rating: 4.8,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      free: true
    },
    {
      id: 6,
      title: "Masterclass : Neuroplasticité et Apprentissage",
      description: "Série de 5 vidéos sur comment optimiser votre cerveau pour l'apprentissage et la mémorisation.",
      category: "Vidéos",
      type: "Vidéo",
      duration: "2h30",
      downloads: 950,
      rating: 4.9,
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=400",
      free: false,
      price: "29.99€"
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeFilter === 'Tous' || resource.category === activeFilter
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getIcon = (category: string) => {
    switch (category) {
      case 'E-books': return BookOpen
      case 'Guides': return BookOpen
      case 'Outils': return Download
      case 'Vidéos': return Video
      case 'Applications': return Smartphone
      default: return BookOpen
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Ressources L'Éveil
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            E-books, guides pratiques, outils et applications pour accélérer votre développement personnel
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
                placeholder="Rechercher une ressource..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-indigo-600 text-white"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Resource */}
        {activeFilter === 'Tous' && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-indigo-100 font-medium">Ressource vedette</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    21 Déclencheurs Mentaux pour Réussir
                  </h2>
                  <p className="text-indigo-100 mb-6 leading-relaxed">
                    Notre guide le plus populaire ! Découvrez les biais cognitifs et techniques de persuasion 
                    utilisés par les experts en psychologie comportementale.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-indigo-100 mb-6">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>45 pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>2500+ téléchargements</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>4.8/5</span>
                    </div>
                  </div>
                  <a 
  href="/resources/21 declencheurs mentaux pour reprogrammer ton cerveau.pdf"
  download
  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-block"
>
  Télécharger gratuitement
</a>
                </div>
                <div className="w-full md:w-64 h-48 bg-white/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => {
            const IconComponent = getIcon(resource.category)
            return (
              <div key={resource.id} className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {resource.category}
                    </span>
                  </div>
                  {resource.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  )}
                  {!resource.free && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {resource.price}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{resource.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <div className="flex items-center gap-4">
                      {resource.pages && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{resource.pages} pages</span>
                        </div>
                      )}
                      {resource.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                      )}
                      {resource.users && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{resource.users} utilisateurs</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  
                  </div>
                  
{/* ←←← BLOC COMPLET À COPIER-COLLER ↓↓↓ */}
{resource.id === 4 ? (
  <a href="/habit-tracker" className="w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
  >
    <Smartphone className="w-4 h-4" />
    Lancer l'app
  </a>
) : (
  <button className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
    resource.free 
      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
      : "bg-green-600 hover:bg-green-700 text-white"
  }`}>
    <Download className="w-4 h-4" />
    {resource.free ? "Télécharger gratuitement" : `Acheter ${resource.price}`}
  </button>
)}
{/* ←←← FIN DU BLOC ↑↑↑ */}


                
              </div>
            )
          })}
        </div>

        {/* No results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
              Aucune ressource trouvée
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Essayez de modifier vos critères de recherche ou de filtrage.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Contactez-nous pour suggérer de nouvelles ressources ou poser vos questions
            </p>
            <a
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources