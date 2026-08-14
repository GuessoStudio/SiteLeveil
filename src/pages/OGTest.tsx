import React, { useState } from 'react'
import SEO from '../components/SEO'

const OGTest = () => {
  const [title, setTitle] = useState("Dopamine intelligente : 7 micro-actions pour relancer ta motivation")
  const [category, setCategory] = useState("Psychologie")

  const categories = ["Psychologie", "Neurosciences", "Développement Personnel", "Relations Humaines"]

  // Génération de l'URL OG pour prévisualisation
  const generateOGUrl = (title: string, category: string) => {
    const baseUrl = 'https://og-image.vercel.app'
    const encodedTitle = encodeURIComponent(title)
    const encodedSubtitle = encodeURIComponent(`${category} • L'Éveil`)
    
    const categoryColors: { [key: string]: string } = {
      'Psychologie': 'ec4899',
      'Neurosciences': '3b82f6', 
      'Développement Personnel': '10b981',
      'Relations Humaines': '8b5cf6'
    }
    
    const bgColor = categoryColors[category] || '6366f1'
    
    return `${baseUrl}/${encodedTitle}.png?theme=light&md=1&fontSize=72px&text=${encodedSubtitle}&bg=${bgColor}&color=white`
  }

  const ogUrl = generateOGUrl(title, category)

  return (
    <>
      <SEO
        title={`Test OG: ${title}`}
        tags={[category]}
        type="article"
        path="/og-test"
      />
      
      <div className="min-h-screen py-8 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              🧪 Test des Images Open Graph
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Testez la génération automatique d'images OG pour vos articles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Formulaire de test */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                Paramètres
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Titre de l'article
                  </label>
                  <textarea
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-700 dark:text-white"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  URL générée :
                </h3>
                <code className="text-xs text-neutral-600 dark:text-neutral-400 break-all block">
                  {ogUrl}
                </code>
                <a
                  href={ogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm mt-2 inline-block"
                >
                  🔗 Ouvrir dans un nouvel onglet
                </a>
              </div>
            </div>

            {/* Prévisualisation */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                Prévisualisation
              </h2>
              
              <div className="border border-neutral-200 dark:border-neutral-600 rounded-lg overflow-hidden">
                <img
                  src={ogUrl}
                  alt="Prévisualisation OG"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/images/og-default.webp'
                  }}
                />
              </div>

              <div className="mt-4 text-xs text-neutral-600 dark:text-neutral-400">
                <p>• Dimensions : 1200x630px</p>
                <p>• Titre : {title.length}/60 caractères {title.length > 60 ? '⚠️' : '✅'}</p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              📋 Comment ça marche
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Les images OG sont générées automatiquement pour tous vos articles</li>
              <li>• Chaque catégorie a sa propre couleur</li>
              <li>• Pas besoin de créer d'images manuellement</li>
              <li>• Compatible Facebook, Twitter, LinkedIn, etc.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default OGTest