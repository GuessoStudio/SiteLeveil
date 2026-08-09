import React from 'react'
import { Mail, Clock, Heart, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      {/* La page n'avait aucune balise SEO : elle servait le title, la description
          et le canonical génériques du template à Google. */}
      <SEO
        title="Contact"
        description="Une question sur la psychologie ou les neurosciences ? Écrivez à Guesso, fondateur de L'Éveil Mental. Chaque email est lu personnellement, réponse sous 24-48h."
        path="/contact/"
        type="website"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-sand-900 dark:text-sand-50 mb-4">
            Contactez-moi
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Une question sur la psychologie ou les neurosciences ? Envie d'échanger sur votre parcours de développement personnel ? Je suis là pour vous accompagner.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Bloc Email Principal */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Écrivez-moi directement
            </h2>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
              La manière la plus simple et rapide de me joindre. Je lis personnellement chaque email et réponds sous 24-48h.
            </p>
            <a
              href="mailto:contact@leveilmental.fr?subject=Contact depuis leveilmental.fr"
              className="inline-flex items-center gap-3 bg-sand-50 text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-6 h-6" />
              contact@leveilmental.fr
            </a>
            <p className="text-indigo-200 text-sm mt-6">
              Cliquez pour ouvrir votre application email
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-sand-50 dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
              <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-50 mb-2">
                Délai de réponse
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Je réponds personnellement à chaque message sous 24 à 48 heures maximum (hors week-ends).
              </p>
            </div>

            <div className="bg-sand-50 dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
              <Heart className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-50 mb-2">
                Mon approche
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Échange bienveillant et sans jugement. Chaque question mérite une réponse réfléchie et personnalisée.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-sand-900 dark:text-sand-50 mb-6">
              Questions fréquentes
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sand-900 dark:text-sand-50 mb-2">
                  💬 Puis-je vous poser une question personnelle ?
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Absolument ! Je réponds à toutes les questions sur la psychologie, les neurosciences et le développement personnel.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sand-900 dark:text-sand-50 mb-2">
                  📚 Proposez-vous du coaching personnalisé ?
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Pour l'instant, je me concentre sur les ressources gratuites et les articles. Contactez-moi pour en discuter si vous avez un projet spécifique.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sand-900 dark:text-sand-50 mb-2">
                  🤝 Vous êtes ouvert aux partenariats ?
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Oui, si le projet est aligné avec la mission de L'Éveil (science, authenticité, bienveillance). Écrivez-moi pour qu'on en parle.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sand-900 dark:text-sand-50 mb-2">
                  🔧 J'ai un problème technique sur le site
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Envoyez-moi un email avec une capture d'écran et une description du problème. Je corrige rapidement.
                </p>
              </div>
            </div>
          </div>

          {/* CTA vers ressources */}
          <div className="text-center mt-12">
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              En attendant ma réponse, explorez nos ressources gratuites
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog/"
                className="inline-flex items-center gap-2 bg-sand-50 dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-sand-900 dark:text-sand-50 px-6 py-3 rounded-lg font-semibold transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                Lire les articles
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/ressources/"
                className="inline-flex items-center gap-2 bg-sand-50 dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-sand-900 dark:text-sand-50 px-6 py-3 rounded-lg font-semibold transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                Télécharger les guides
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact