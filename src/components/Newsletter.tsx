import React, { useState } from 'react'
import { Mail, Gift, CheckCircle, ArrowRight } from 'lucide-react'
import { useNotifications } from '../contexts/NotificationContext'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { addNotification } = useNotifications()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulation d'inscription (remplacer par vraie API)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubscribed(true)
      addNotification({
        type: 'success',
        title: 'Inscription réussie !',
        message: 'Vous recevrez bientôt votre guide gratuit par email.'
      })
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Erreur',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <section id="newsletter" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Merci pour votre inscription !
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Vous recevrez bientôt votre guide "21 déclencheurs mentaux pour réussir" 
              ainsi que nos meilleurs contenus directement dans votre boîte mail.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                En attendant, explorez nos articles
              </h3>
              <p className="text-indigo-100 mb-4">
                Découvrez dès maintenant nos contenus sur la psychologie et le développement personnel
              </p>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Voir les articles <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-indigo-100 mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-medium">Cadeau de bienvenue</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Rejoignez 10 000+ lecteurs passionnés
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Recevez chaque semaine nos meilleurs conseils en psychologie et développement personnel, 
              plus votre guide gratuit "21 déclencheurs mentaux pour réussir"
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Recevoir le guide
                  </>
                )}
              </button>
            </form>
            <p className="text-indigo-200 text-sm mt-4">
              ✓ Gratuit • ✓ Pas de spam • ✓ Désabonnement en 1 clic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Mail,
                title: "Articles exclusifs",
                desc: "Recevez en avant-première nos dernières découvertes"
              },
              {
                icon: Gift,
                title: "Guide gratuit",
                desc: "21 déclencheurs mentaux utilisés par les experts"
              },
              {
                icon: CheckCircle,
                title: "Conseils pratiques",
                desc: "Des techniques applicables immédiatement"
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
  )
}

export default Newsletter