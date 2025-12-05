import React, { useState } from 'react'
import { Mail, Gift, CheckCircle, ArrowRight } from 'lucide-react'
import EmailCaptureModal from './EmailCaptureModal'

const Newsletter = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section id="newsletter" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-indigo-100 mb-6">
                <Gift className="w-5 h-5" />
                <span className="font-medium">Cadeau de bienvenue</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Rejoignez notre communauté d'esprits curieux
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Une newsletter hebdomadaire + votre guide gratuit "21 déclencheurs mentaux pour réussir" immédiatement
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  readOnly
                  onClick={() => setShowModal(true)}
                />
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Recevoir le guide
                </button>
              </div>
              <p className="text-indigo-200 text-sm mt-4">
                ✓ Gratuit • ✓ Pas de spam • ✓ Désabonnement facilement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: Mail,
                  title: "Articles exclusifs",
                  desc: "Nos meilleurs articles en avant-première"
                },
                {
                  icon: Gift,
                  title: "Guide gratuit",
                  desc: "Guide PDF : 21 déclencheurs mentaux"
                },
                {
                  icon: CheckCircle,
                  title: "Conseils pratiques",
                  desc: "Des conseils simples et actionnables"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 text-white">
                  <benefit.icon className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-indigo-100 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EmailCaptureModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        resourceTitle="21 Déclencheurs Mentaux pour Réussir"
       resourceFile="/resources/21-declencheurs-mentaux-pour-reussir.pdf"
      />
    </>
  )
}

export default Newsletter