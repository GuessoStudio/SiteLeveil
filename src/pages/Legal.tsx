import React, { useState } from 'react'
import { Shield, Eye, Cookie, FileText, ChevronDown, ChevronUp } from 'lucide-react'

const Legal = () => {
  const [activeSection, setActiveSection] = useState('mentions')

  const sections = [
    { id: 'mentions', title: 'Mentions légales', icon: FileText },
    { id: 'privacy', title: 'Politique de confidentialité', icon: Shield },
    { id: 'cookies', title: 'Politique des cookies', icon: Cookie },
    { id: 'terms', title: 'Conditions d\'utilisation', icon: Eye }
  ]

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? '' : sectionId)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Informations légales
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Transparence et conformité RGPD pour votre tranquillité d'esprit
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-4 rounded-lg text-left transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-neutral-700'
                }`}
              >
                <section.icon className="w-6 h-6 mb-2" />
                <h3 className="font-semibold text-sm">{section.title}</h3>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
            {/* Mentions légales */}
            {activeSection === 'mentions' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  Mentions légales
                </h2>
                
                <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Éditeur du site</h3>
                    <p><strong>Nom :</strong> L'Éveil</p>
                    <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                    <p><strong>Adresse :</strong> 123 Rue de la Psychologie, 75001 Paris, France</p>
                    <p><strong>Email :</strong> contact@leveil.fr</p>
                    <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Directeur de publication</h3>
                    <p>Dr. Sarah Martin</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Hébergement</h3>
                    <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
                    <p><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Propriété intellectuelle</h3>
                    <p>
                      L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                      et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                      les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Politique de confidentialité */}
            {activeSection === 'privacy' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  Politique de confidentialité
                </h2>
                
                <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Collecte des données</h3>
                    <p>
                      Nous collectons uniquement les données nécessaires au fonctionnement de nos services :
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Adresse email pour la newsletter (avec consentement explicite)</li>
                      <li>Données de navigation anonymisées pour améliorer l'expérience utilisateur</li>
                      <li>Préférences de lecture sauvegardées localement sur votre appareil</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Utilisation des données</h3>
                    <p>Vos données sont utilisées exclusivement pour :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>L'envoi de notre newsletter (désabonnement possible à tout moment)</li>
                      <li>L'amélioration de nos contenus et services</li>
                      <li>La sauvegarde de vos préférences de lecture</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Vos droits RGPD</h3>
                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Droit d'accès à vos données personnelles</li>
                      <li>Droit de rectification de vos données</li>
                      <li>Droit à l'effacement de vos données</li>
                      <li>Droit à la portabilité de vos données</li>
                      <li>Droit d'opposition au traitement</li>
                    </ul>
                    <p className="mt-3">
                      Pour exercer ces droits, contactez-nous à : <strong>privacy@leveil.fr</strong>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Conservation des données</h3>
                    <p>
                      Nous conservons vos données uniquement le temps nécessaire aux finalités pour lesquelles 
                      elles ont été collectées, et dans le respect des obligations légales.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Politique des cookies */}
            {activeSection === 'cookies' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  Politique des cookies
                </h2>
                
                <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Qu'est-ce qu'un cookie ?</h3>
                    <p>
                      Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site web. 
                      Il permet de mémoriser des informations relatives à votre navigation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Types de cookies utilisés</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Cookies essentiels</h4>
                        <p className="text-green-700 dark:text-green-400 text-sm">
                          Nécessaires au fonctionnement du site (préférences de thème, position de lecture). 
                          Ces cookies ne nécessitent pas votre consentement.
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Cookies analytiques</h4>
                        <p className="text-blue-700 dark:text-blue-400 text-sm">
                          Google Analytics pour comprendre l'utilisation du site (données anonymisées). 
                          Soumis à votre consentement.
                        </p>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Cookies de préférences</h4>
                        <p className="text-purple-700 dark:text-purple-400 text-sm">
                          Sauvegarde de vos préférences (mode sombre, progression de lecture). 
                          Stockés localement sur votre appareil.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Gestion des cookies</h3>
                    <p>
                      Vous pouvez à tout moment modifier vos préférences de cookies via les paramètres de votre navigateur 
                      ou en utilisant notre centre de préférences.
                    </p>
                    <button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Gérer mes préférences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Conditions d'utilisation */}
            {activeSection === 'terms' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  Conditions d'utilisation
                </h2>
                
                <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Acceptation des conditions</h3>
                    <p>
                      En accédant et en utilisant ce site web, vous acceptez d'être lié par les présentes conditions 
                      d'utilisation et toutes les lois et réglementations applicables.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Utilisation du contenu</h3>
                    <p>Le contenu de ce site est fourni à des fins éducatives et informatives. Vous pouvez :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Lire et consulter les articles gratuitement</li>
                      <li>Télécharger les ressources gratuites pour usage personnel</li>
                      <li>Partager les liens vers nos articles sur les réseaux sociaux</li>
                    </ul>
                    
                    <p className="mt-3">Vous ne pouvez pas :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Reproduire ou redistribuer le contenu sans autorisation</li>
                      <li>Utiliser le contenu à des fins commerciales sans accord préalable</li>
                      <li>Modifier ou altérer le contenu original</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Limitation de responsabilité</h3>
                    <p>
                      Les informations contenues sur ce site sont fournies à titre informatif uniquement. 
                      Elles ne remplacent pas un avis médical ou psychologique professionnel. 
                      Consultez toujours un professionnel de santé qualifié pour des questions spécifiques.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Modifications</h3>
                    <p>
                      Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. 
                      Les modifications prendront effet dès leur publication sur cette page.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Contact</h3>
                    <p>
                      Pour toute question concernant ces conditions d'utilisation, 
                      contactez-nous à : <strong>legal@leveil.fr</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Last updated */}
          <div className="text-center mt-8 text-sm text-neutral-500 dark:text-neutral-400">
            Dernière mise à jour : 15 janvier 2024
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal