// src/pages/Resources.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Download, BookOpen, Video, Smartphone, Filter, Search, Star, Clock, Users, Brain } from 'lucide-react'
import EmailCaptureModal from '../components/EmailCaptureModal'

const Resources = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [searchTerm, setSearchTerm] = useState('')

  // État pour le modal
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedResource, setSelectedResource] = useState<any>(null)

  const categories = ['Tous', 'E-books', 'Guides', 'Outils', 'Applications']

  const resources = [
    {
      id: 0, // Nouveau ID
      title: "Test de Personnalité Big Five (OCEAN)",
      description: "Découvrez votre profil psychologique complet avec ce test scientifique interactif. 30 questions pour mieux vous connaître.",
      category: "Outils",
      type: "Test Interactif",
      users: "Nouveau",
      rating: 5.0,
      image: "/images/resources/big-five-cover.webp",
      free: true,
      isWebApp: true,
      webAppUrl: "/test-personnalite-big-five",
      featured: true
    },
    {
      id: 1,
      title: "21 Déclencheurs Mentaux pour Réussir",
      description: "Guide complet des biais cognitifs et techniques de persuasion basés sur la psychologie comportementale.",
      category: "E-books",
      type: "PDF",
      pages: 28,
      downloads: 2500,
      rating: 4.8,
      image: "/images/resources/21-déclencheurs-mentaux-pour-réussir.webp",
      featured: true,
      free: true,
      downloadUrl: "/resources/21-declencheurs-mentaux-pour-reussir.pdf"
    },
    {
      id: 2,
      title: "Tracker d'Habitudes Scientifique",
      description: "Application web pour suivre vos habitudes avec des insights basés sur la recherche comportementale.",
      category: "Applications",
      type: "Web App",
      users: "5K+",
      rating: 4.6,
      image: "/images/resources/habit-tracker-cover.webp",
      free: true,
      isWebApp: true,
      webAppUrl: "/habit-tracker"
    },
    {
      id: 3,
      title: "RESET MENTAL EXPRESS",
      description: "Protocole neuroscientifique de 5 minutes pour apaiser ton cerveau saturé. 3 étapes simples basées sur la recherche.",
      category: "Guides",
      type: "PDF",
      pages: 6,
      downloads: 100,
      rating: 4.6,
      image: "/images/resources/reset-mental-express.webp",
      featured: true,
      free: true,
      downloadUrl: "/resources/reset-mental-express.pdf"
    }
  ]

  const getIcon = (category: string) => {
    switch (category) {
      case 'E-books': return BookOpen
      case 'Guides': return BookOpen
      case 'Vidéos': return Video
      case 'Applications': return Smartphone
      case 'Outils': return Brain
      default: return BookOpen
    }
  }

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'Tous' || resource.category === activeFilter
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Fonction pour gérer le clic sur télécharger
  const handleDownloadClick = (resource: any) => {
    // Si c'est une web app, rediriger directement
    if (resource.isWebApp && resource.webAppUrl) {
      navigate(resource.webAppUrl)
      return
    }

    // Sinon, ouvrir le modal de capture d'email
    setSelectedResource(resource)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen py-20">
      {/* SEO et Header similaires au code original... */}

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Ressources L'Éveil
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            E-books, guides pratiques, outils et méditations pour accélérer votre développement personnel
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Rechercher une ressource..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-neutral-500 self-center" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${activeFilter === category
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Resource */}
        {activeFilter === 'Tous' && resources.find(r => r.featured && r.id === 1) && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span>Ressource vedette</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    21 Déclencheurs Mentaux pour Réussir
                  </h2>
                  <p className="text-lg text-indigo-100 mb-6">
                    Découvrez les biais cognitifs et techniques de persuasion
                    utilisés par les experts en psychologie comportementale.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-indigo-100 mb-6">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>28 pages</span>
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
                  <button
                    onClick={() => handleDownloadClick(resources[1])}
                    className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Télécharger gratuitement
                  </button>
                </div>
                <div className="w-full md:w-64 h-48 bg-white/10 rounded-xl overflow-hidden">
                  <img
                    src={resources[1].image}
                    alt={resources[1].title}
                    className="w-full h-full object-cover"
                  />
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
              <div
                key={resource.id}
                className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
                  {resource.image ? (
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-neutral-300 dark:text-neutral-600" />
                    </div>
                  )}
                  {resource.featured && (
                    <div className="absolute top-3 right-3">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {resource.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{resource.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                    {resource.pages && (
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{resource.pages} pages</span>
                      </div>
                    )}
                    {resource.users && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{resource.users}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadClick(resource)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {resource.isWebApp ? (
                      <>
                        <Smartphone className="w-5 h-5" />
                        Accéder à l'outil
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        Télécharger gratuitement
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-neutral-500 dark:text-neutral-400">
              Aucune ressource ne correspond à votre recherche
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

      {/* Modal de capture d'email */}
      <EmailCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        resourceTitle={selectedResource?.title || ''}
        resourceFile={selectedResource?.downloadUrl || ''}
        onSuccess={(email) => {
          console.log('Email capturé:', email)
          // Vous pouvez ajouter ici un tracking ou une notification
        }}
      />
    </div>
  )
}

export default Resources
