import { useState } from 'react'
import { Gift, Mail, CheckCircle, Loader2 } from 'lucide-react'
import { trackLead } from '../../lib/analytics'

type Status = 'idle' | 'loading' | 'success' | 'error'

const BENEFITS = [
  { icon: Mail,         title: 'Articles exclusifs',  desc: 'Nos meilleurs articles en avant-première' },
  { icon: Gift,         title: 'Guide gratuit',        desc: 'Guide PDF : 21 déclencheurs mentaux' },
  { icon: CheckCircle,  title: 'Conseils pratiques',   desc: 'Des conseils simples et actionnables' },
]

export default function NewsletterSection() {
  const [email, setEmail]   = useState('')
  const [prenom, setPrenom] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, prenom }),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      // Inscription réellement confirmée par la fonction Netlify. Pas de
      // navigation derrière, donc pas besoin d'attendre le callback GA4.
      trackLead('newsletter_section', { form_name: 'section_newsletter' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-20 bg-sand-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30
                            text-amber-700 dark:text-amber-400 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Cadeau de bienvenue</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Rejoignez notre communauté d'esprits curieux
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              Une newsletter hebdomadaire + votre guide gratuit
              «&nbsp;21 déclencheurs mentaux pour réussir&nbsp;» immédiatement
            </p>
          </div>

          {/* Card formulaire */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 md:p-10 mb-10 max-w-xl mx-auto">
            {status === 'success' ? (
              <div className="text-center py-6">
                <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                  Bienvenue&nbsp;!
                </p>
                <p className="text-neutral-500 dark:text-neutral-400">
                  Vérifie ta boîte mail&nbsp;📬
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="nl-prenom" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Prénom
                  </label>
                  <input
                    id="nl-prenom"
                    type="text"
                    required
                    placeholder="Votre prénom"
                    value={prenom}
                    onChange={e => setPrenom(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700
                               bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white
                               placeholder:text-neutral-400 dark:placeholder:text-neutral-500
                               focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="nl-email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Email
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700
                               bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white
                               placeholder:text-neutral-400 dark:placeholder:text-neutral-500
                               focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    Une erreur est survenue, réessaie.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-xl font-semibold text-white
                             bg-[#C9953A] hover:bg-[#E8B84B] transition-colors duration-200
                             disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Inscription…
                    </>
                  ) : (
                    'Je rejoins L\'Éveil Mental'
                  )}
                </button>

                <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
                  Pas de spam. Désabonnement en 1 clic.
                </p>
              </form>
            )}
          </div>

          {/* Bénéfices */}
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white text-sm mb-1">{title}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
