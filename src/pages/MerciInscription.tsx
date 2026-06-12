import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Download, ArrowRight } from 'lucide-react'

const MerciInscription = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center">

        {/* Icône succès */}
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>

        {/* Message principal */}
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          Bienvenue dans la communauté !
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-3">
          Merci pour ton inscription à L'Éveil Mental.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 mb-10">
          Vérifie ta boîte email — un message de confirmation t'a été envoyé.
          Si tu ne le vois pas dans 2 minutes, regarde dans les spams.
        </p>

        {/* CTA Guide BDNF */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg mb-6 text-left border border-indigo-100 dark:border-neutral-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center flex-shrink-0">
              <Download className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="font-semibold text-neutral-900 dark:text-white mb-1">
                En attendant, télécharge le guide BDNF
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                Comment booster naturellement ton BDNF — le facteur de croissance neuronal — en 7 habitudes validées par la recherche.
              </p>
              <Link
                to="/blog/bdnf-augmenter-naturellement-neurosciences/"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline"
              >
                Lire l'article complet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Blog */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg mb-8 text-left border border-purple-100 dark:border-neutral-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="font-semibold text-neutral-900 dark:text-white mb-1">
                Explore nos articles
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                Neurosciences, psychologie, habitudes — tous les articles sont gratuits et sourcés scientifiquement.
              </p>
              <Link
                to="/blog/"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium text-sm hover:underline"
              >
                Voir tous les articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Retour accueil */}
        <Link
          to="/"
          className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

export default MerciInscription
