import React, { useState } from 'react'
import SEO from '../components/SEO'
import { Shield, Eye, Cookie, FileText } from 'lucide-react'

const Legal = () => {
  const [activeSection, setActiveSection] = useState('mentions')

  const sections = [
    { id: 'mentions', title: 'Mentions légales', icon: FileText },
    { id: 'privacy', title: 'Vie privée', icon: Shield },
    { id: 'cookies', title: 'Cookies', icon: Cookie }
  ]

  return (
    <>
    {/* Composant SEO et non <Helmet> brut : Helmet n'est pas sérialisé pendant
        le build SSG, donc le noindex demandé ici n'atteignait jamais Google. */}
    <SEO
      title="Mentions légales et politique de confidentialité"
      description="Mentions légales, politique de confidentialité, cookies et conditions générales d'utilisation du site L'Éveil Mental."
      path="/legal/"
      type="website"
      noindex
    />
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Informations légales
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Transparence totale sur ce projet personnel
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
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
                  {/* Éditeur */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Éditeur du site
                    </h3>
                    <div className="space-y-2">
                      <p><strong>Nom :</strong> Guesso</p>
                      <p><strong>Nature :</strong> Site personnel / Blog éducatif</p>
                      <p><strong>Email :</strong> <a href="mailto:contact@leveilmental.fr" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact@leveilmental.fr</a></p>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 italic">
                      L'Éveil Mental est un projet personnel dédié au partage de connaissances en psychologie et neurosciences.
                    </p>
                  </div>

                  {/* Hébergement */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Hébergement
                    </h3>
                    <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
                    <p><strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</p>
                    <p className="mt-2">
                      <strong>Site :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">www.netlify.com</a>
                    </p>
                  </div>

                  {/* Propriété intellectuelle */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Propriété intellectuelle
                    </h3>
                    <p>
                      L'ensemble des contenus de ce site (textes, images, logo, ressources PDF) est la propriété de l'éditeur, sauf mention contraire explicite.
                    </p>
                    <p className="mt-3">
                      <strong>Vous pouvez :</strong>
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Lire et consulter les articles gratuitement</li>
                      <li>Télécharger les ressources pour usage personnel</li>
                      <li>Partager les liens sur vos réseaux sociaux</li>
                    </ul>
                    <p className="mt-3">
                      <strong>Vous ne pouvez pas :</strong>
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Reproduire ou redistribuer le contenu sans autorisation</li>
                      <li>Utiliser le contenu à des fins commerciales</li>
                      <li>Modifier les ressources téléchargeables</li>
                    </ul>
                  </div>

                  {/* Crédits */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Crédits
                    </h3>
                    <p><strong>Développement & Contenu :</strong> Guesso</p>
                    <p><strong>Visuels :</strong> Midjourney, Canva</p>
                    <p><strong>Technologies :</strong> React, TypeScript, Tailwind CSS, Netlify</p>
                  </div>
                </div>
              </div>
            )}

            {/* Vie privée */}
            {activeSection === 'privacy' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  Politique de confidentialité
                </h2>
                
                <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                  {/* Engagement */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-600">
                    <p className="font-medium text-green-800 dark:text-green-300">
                      💚 Je respecte votre vie privée. Ce site collecte le strict minimum de données et ne vend rien à personne.
                    </p>
                  </div>

                  {/* Collecte */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Quelles données sont collectées ?
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-indigo-600 pl-4">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                          1. Adresses email (avec votre consentement)
                        </h4>
                        <p>
                          Collectées uniquement quand vous téléchargez une ressource gratuite (guide PDF) ou vous inscrivez à la newsletter.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                          <strong>Stockage :</strong> localStorage de votre navigateur (vos données restent chez vous).
                        </p>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                          2. Préférences de navigation
                        </h4>
                        <p>
                          Mode sombre/clair, ressources téléchargées - stockées localement dans votre navigateur uniquement.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                          <strong>Important :</strong> Ces données ne quittent JAMAIS votre appareil.
                        </p>
                      </div>

                      <div className="border-l-4 border-amber-600 pl-4">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                          3. Statistiques anonymes (Netlify)
                        </h4>
                        <p>
                          L'hébergeur collecte des stats de visite anonymes (pages vues, pays, navigateur).
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                          <strong>Utilisation :</strong> Améliorer les performances du site. Aucune donnée personnelle identifiable.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Utilisation */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Comment sont utilisées vos données ?
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span><strong>Emails :</strong> Uniquement pour vous envoyer le guide PDF demandé. Pas de spam, pas de vente à des tiers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span><strong>Préférences :</strong> Améliorer votre expérience (se souvenir de vos téléchargements).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span><strong>Stats :</strong> Comprendre quels articles intéressent le plus.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Vos droits RGPD */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Vos droits (RGPD)
                    </h3>
                    <p className="mb-4">
                      Conformément au RGPD, vous pouvez à tout moment :
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3">
                        <p className="font-semibold text-sm">✅ Accéder à vos données</p>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3">
                        <p className="font-semibold text-sm">✏️ Corriger vos informations</p>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3">
                        <p className="font-semibold text-sm">🗑️ Supprimer vos données</p>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3">
                        <p className="font-semibold text-sm">🚫 Vous opposer au traitement</p>
                      </div>
                    </div>
                    <p className="mt-4">
                      <strong>Pour exercer ces droits :</strong> Envoyez un email à{' '}
                      <a href="mailto:contact@leveil.fr" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        contact@leveil.fr
                      </a>{' '}
                      avec l'objet "RGPD". Je réponds sous 48h.
                    </p>
                  </div>

                  {/* Disclaimer médical */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border-l-4 border-amber-600">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">
                      ⚠️ Avertissement important
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      Les informations de ce site sont fournies à titre éducatif uniquement. Elles ne remplacent pas un avis médical ou psychologique professionnel. Consultez toujours un professionnel de santé qualifié pour des questions spécifiques.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Cookies */}
            {activeSection === 'cookies' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  Cookies & localStorage
                </h2>
                
                <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                  {/* Explication simple */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                      🍪 Pas de cookies tiers, juste du localStorage
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200">
                      Ce site n'utilise PAS de cookies de tracking. Toutes vos préférences sont stockées localement dans votre navigateur via le localStorage (une technologie similaire mais plus respectueuse).
                    </p>
                  </div>

                  {/* Ce qui est stocké */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Qu'est-ce qui est stocké dans votre navigateur ?
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                          📧 Emails capturés
                        </h4>
                        <p className="text-sm">
                          Quand vous téléchargez une ressource, votre email est stocké localement pour éviter de vous redemander. Visible uniquement dans votre navigateur.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                          🌙 Préférence mode sombre/clair
                        </h4>
                        <p className="text-sm">
                          Votre choix de thème est sauvegardé pour la prochaine visite.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                          📥 Liste de téléchargements
                        </h4>
                        <p className="text-sm">
                          Garde la trace des ressources déjà téléchargées pour éviter les doublons.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gestion */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Comment effacer ces données ?
                    </h3>
                    <p className="mb-3">
                      Vous pouvez vider le localStorage à tout moment via les paramètres de votre navigateur :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Chrome/Edge :</strong> Paramètres → Confidentialité → Effacer les données de navigation → Cocher "Cookies et autres données de sites"</li>
                      <li><strong>Firefox :</strong> Paramètres → Vie privée → Effacer l'historique récent → Cookies</li>
                      <li><strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de sites web</li>
                    </ul>
                  </div>

                  {/* Netlify Analytics */}
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Statistiques de visite (Netlify)
                    </h3>
                    <p>
                      L'hébergeur Netlify collecte des statistiques anonymes de visite (nombre de visiteurs, pages vues, pays). Ces données sont agrégées et ne permettent pas de vous identifier personnellement.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Last updated */}
          <div className="text-center mt-8 text-sm text-neutral-500 dark:text-neutral-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Legal