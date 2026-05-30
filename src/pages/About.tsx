import React from 'react'
import { Heart, Users, BookOpen, Award, Target, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'

const About = () => {
    const navigate = useNavigate()
    const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr"

    const schemaPerson = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${site}/a-propos/#person`,
      name: "Guesso",
      url: `${site}/a-propos/`,
      image: `${site}/images/guesso-silhouette.webp`,
      jobTitle: "Fondateur — L'Éveil Mental",
      description: "Fondateur de L'Éveil Mental, média francophone de vulgarisation en neurosciences et psychologie. Traduit les études peer-reviewed en applications pratiques, sans jargon ni promesses miracles.",
      knowsAbout: [
        "Neurosciences",
        "Psychologie",
        "Neuroplasticité",
        "Développement personnel",
        "Sciences cognitives"
      ],
      worksFor: { "@id": `${site}#organization` },
      sameAs: [
        "https://www.instagram.com/leveil.officiel/",
        "https://www.facebook.com/profile.php?id=61572902135677",
        "https://x.com/leveilmental",
        "https://www.tiktok.com/@leveil_mental"
      ]
    }
  
  const handleNewsletterClick = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('newsletter')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 500)
  }

  const values = [
    {
      icon: Lightbulb,
      title: "Science & Rigueur",
      description: "Tous mes contenus sont basés sur des recherches scientifiques rigoureuses et des études peer-reviewed. Pas de pseudoscience."
    },
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Je crois en une approche empathique et sans jugement du développement personnel. Chacun avance à son rythme."
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Rendre la psychologie et les neurosciences accessibles à tous, sans jargon complexe ni élitisme intellectuel."
    },
    {
      icon: Target,
      title: "Pratique",
      description: "Des conseils concrets et applicables immédiatement dans votre quotidien. La théorie sans action ne sert à rien."
    }
  ]

  
  const team = [
    {
      name: "Guesso", 
    role: "Fondateur de L'Éveil", 
    description: "Passionné par la psychologie et les neurosciences depuis 2020, j'ai créé L'Éveil Mental pour partager ce qui m'a aidé à mieux comprendre mon propre fonctionnement. Ma méthode est systématique : partir d'un fait scientifique établi, expliquer le mécanisme neurologique concerné, puis en tirer une application pratique concrète. Chaque article s'appuie sur des études peer-reviewed citées avec leur auteur, leur institution et leur année, et nomme explicitement les chercheurs et les structures cérébrales en jeu. Pas de pseudoscience, pas de promesses miracles, pas de jargon laissé sans explication.",
    image: "/images/guesso-silhouette.webp" 
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <SEO
        title="À propos de Guesso — L'Éveil Mental"
        description="Guesso, fondateur de L'Éveil Mental — neurosciences et psychologie appliquées en français. Contenus basés sur des études peer-reviewed, sans jargon ni promesses miracles."
        path="/a-propos"
        type="website"
        jsonLd={[schemaPerson]}
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <img 
  src="/images/logo.webp"
  alt="L'Éveil"
  width="96"
  height="96"  
  className="w-24 h-24 mx-auto rounded-full shadow-lg mb-8"
  loading="lazy"
  decoding="async"
/>
            <h1 className="text-4xl md:text-5xl font-bold text-sand-900 dark:text-sand-50 mb-6">
              À propos de L'Éveil
            </h1>
            <p className="text-lg text-sand-700 dark:text-neutral-300 mb-8 leading-relaxed">
  L'Éveil est né de ma passion pour comprendre l'esprit humain. Mon objectif est simple : 
  traduire les découvertes fascinantes de la psychologie et des neurosciences en conseils 
  pratiques que vous pouvez utiliser pour améliorer votre vie quotidienne.
</p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sand-900 dark:text-sand-50 mb-6">
  Ma Mission
</h2>
<p className="text-lg text-sand-700 dark:text-neutral-300 mb-8 leading-relaxed">
  Dans un monde saturé d'informations contradictoires sur le bien-être mental, je veux créer une source fiable et accessible. Ma mission : traduire les dernières découvertes en psychologie et neurosciences en conseils pratiques que vous pouvez appliquer dès aujourd'hui, sans jargon ni promesses miracles.
</p>
<div className="grid md:grid-cols-2 gap-8 text-left">
  <div className="bg-sand-50  dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
    <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
    <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-50 mb-3">
      Éducation scientifique
    </h3>
    <p className="text-neutral-600 dark:text-neutral-300">
      Vulgariser les recherches en psychologie et neurosciences pour les rendre compréhensibles par tous, sans simplification excessive.
    </p>
  </div>
  <div className="bg-sand-50  dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
    <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
    <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-50 mb-3">
      Accompagnement authentique
    </h3>
    <p className="text-neutral-600 dark:text-neutral-300">
      Vous accompagner dans votre parcours de développement personnel avec des outils concrets, testés et honnêtes.
    </p>
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sand-900 dark:text-sand-50 mb-4">
  Mes Valeurs
</h2>
<p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
  Les principes qui guident ma création de contenu
</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      

       {/* Team */}
<section className="mb-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-sand-900 dark:text-sand-50 mb-4">
      Qui suis-je ?
    </h2>
    <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
      L'histoire derrière L'Éveil Mental
    </p>
  </div>

          <div className="flex justify-center max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-sand-50  dark:bg-neutral-800 rounded-2xl p-8 shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  width="96"
                  height="96"
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl font-semibold text-sand-900 dark:text-sand-50 mb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
<section className="text-center">
  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Prêt(e) à éveiller votre potentiel ?
    </h2>
    <p className="text-xl mb-8 text-indigo-100">
      Des outils concrets pour comprendre votre psychologie et transformer votre quotidien
    </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-sand-50  text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Découvrir nos articles
                </a>
                <button
  onClick={handleNewsletterClick}
  className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-indigo-500"
>
  S'abonner à la newsletter
</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About