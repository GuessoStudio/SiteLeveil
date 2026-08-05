// src/pages/Methodologie.tsx
// Page méthodologie éditoriale — signal E-E-A-T.
// Le contenu reflète les règles réellement appliquées (.claude/rules/articles.md)
// et l'encadré "Méthodologie scientifique" présent en bas de chaque article.

import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Search, RefreshCw, AlertTriangle, Users, FileText } from 'lucide-react'
import SEO from '../components/SEO'

const Methodologie = () => {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr"

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site },
      { "@type": "ListItem", position: 2, name: "Méthodologie", item: `${site}/methodologie/` }
    ]
  }

  const schemaWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site}/methodologie/`,
    name: "Méthodologie éditoriale",
    description: "Comment les articles de L'Éveil Mental sont documentés, sourcés, vulgarisés et mis à jour.",
    publisher: { "@id": `${site}#organization` },
    inLanguage: "fr-FR"
  }

  const principes = [
    {
      icon: Search,
      titre: "Chaque affirmation est sourcée",
      texte: "Les faits scientifiques avancés proviennent d'études publiées dans des revues à comité de lecture. Les sources sont citées avec leur auteur, leur institution et leur année, et un lien DOI ou PubMed quand il est disponible."
    },
    {
      icon: Users,
      titre: "Les chercheurs sont nommés",
      texte: "Aucune formule du type « des études montrent que ». Chaque travail cité est attribué à des chercheurs identifiés, avec leur laboratoire et leur pays, pour que vous puissiez remonter à la source."
    },
    {
      icon: BookOpen,
      titre: "La vulgarisation prime sur le jargon",
      texte: "Chaque terme technique est défini en langage courant dès sa première apparition, et accompagné d'une analogie ou d'un exemple du quotidien. Un article incompréhensible sans formation scientifique est un article raté."
    },
    {
      icon: AlertTriangle,
      titre: "Les limites sont dites",
      texte: "Quand un résultat provient d'études animales, quand un effet est modeste, ou quand la recherche reste préliminaire, c'est écrit noir sur blanc dans l'article, pas relégué en note de bas de page."
    },
    {
      icon: RefreshCw,
      titre: "Les articles sont mis à jour",
      texte: "Chaque article porte un numéro de version et une date de dernière vérification des sources. Quand la recherche évolue ou qu'une erreur est repérée, l'article est corrigé et sa date de modification actualisée."
    },
    {
      icon: FileText,
      titre: "Structure constante",
      texte: "Fait scientifique, puis mécanisme cérébral, puis application concrète. Chaque article commence par une réponse directe à la question posée, pour que l'essentiel soit lisible en moins d'une minute."
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <SEO
        title="Méthodologie éditoriale"
        description="Comment les articles de L'Éveil Mental sont documentés : sources peer-reviewed, chercheurs nommés, limites assumées et mises à jour datées."
        path="/methodologie/"
        type="website"
        jsonLd={[schemaWebPage, schemaBreadcrumb]}
      />

      <div className="container mx-auto px-4 max-w-3xl">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Méthodologie éditoriale
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            L'Éveil Mental publie des contenus de neurosciences et de psychologie destinés au grand public.
            Voici comment ils sont documentés, écrits et tenus à jour.
          </p>
        </div>

        <div className="space-y-6 mb-14">
          {principes.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.titre}
                className="flex gap-5 p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {p.titre}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {p.texte}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="p-6 bg-amber-50 dark:bg-amber-950/30 rounded-xl border-l-4 border-amber-500 mb-14">
          <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">
            Ce que ce site n'est pas
          </h2>
          <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
            L'Éveil Mental ne délivre aucun conseil médical et ne remplace pas l'avis d'un professionnel de santé.
            Les contenus publiés ont une vocation informative et éducative. En cas de trouble psychologique ou
            neurologique, consultez un médecin ou un psychologue.
          </p>
        </div>

        <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
            Une erreur, une source contestable ?
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Les corrections sont bienvenues et traitées sérieusement. Si une affirmation vous paraît inexacte
            ou mal sourcée, signalez-la : l'article sera vérifié et corrigé si nécessaire.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/contact/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
              Signaler une erreur
            </Link>
            <Link to="/a-propos/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
              Qui écrit ces articles
            </Link>
            <Link to="/blog/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
              Lire les articles
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Methodologie
