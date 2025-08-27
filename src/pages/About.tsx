import React from 'react'
import { Heart, Users, BookOpen, Award, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Science & Evidence",
      description: "Tous nos contenus sont basés sur des recherches scientifiques rigoureuses et des études peer-reviewed."
    },
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Nous croyons en une approche empathique et non-jugeante du développement personnel."
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Rendre la psychologie et les neurosciences accessibles à tous, sans jargon complexe."
    },
    {
      icon: Target,
      title: "Pratique",
      description: "Des conseils concrets et applicables immédiatement dans votre quotidien."
    }
  ]

  const stats = [
    { number: "500+", label: "Articles publiés" },
    { number: "10,000+", label: "Lecteurs mensuels" },
    { number: "50+", label: "Études citées" },
    { number: "95%", label: "Satisfaction lecteurs" }
  ]

  const team = [
    {
      name: "Dr. Sarah Martin",
      role: "Psychologue clinicienne",
      description: "Spécialisée en thérapies cognitivo-comportementales et neurosciences appliquées.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Marc Dubois",
      role: "Coach en développement personnel",
      description: "Expert en motivation et performance, formateur certifié en PNL.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/public/images/L'éveil .jpg" 
              alt="L'Éveil" 
              className="w-24 h-24 mx-auto rounded-full shadow-lg mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              À propos de L'Éveil
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Notre mission est de démocratiser l'accès aux connaissances en psychologie, 
              neurosciences et développement personnel pour aider chacun à révéler son potentiel.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
                Dans un monde où l'information sur le bien-être mental est souvent complexe ou commercialisée, 
                L'Éveil se positionne comme une source fiable et accessible. Nous traduisons les dernières 
                découvertes scientifiques en conseils pratiques que vous pouvez appliquer dès aujourd'hui.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    Éducation scientifique
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Vulgariser les recherches en psychologie et neurosciences pour les rendre 
                    compréhensibles et applicables par tous.
                  </p>
                </div>
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                  <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    Transformation personnelle
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Accompagner chaque lecteur dans son parcours de développement personnel 
                    avec des outils concrets et éprouvés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Les principes qui guident notre approche et notre création de contenu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="bg-neutral-900 dark:bg-neutral-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                L'Éveil en chiffres
              </h2>
              <p className="text-xl text-neutral-300">
                L'impact de notre communauté grandissante
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Des experts passionnés dédiés à votre développement personnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
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
              Rejoignez notre communauté
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Plus de 10 000 personnes nous font déjà confiance pour leur développement personnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Découvrir nos articles
              </a>
              <a
                href="/#newsletter"
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-indigo-500"
              >
                S'abonner à la newsletter
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About