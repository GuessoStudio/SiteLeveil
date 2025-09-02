import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { useNotifications } from '../contexts/NotificationContext'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const { addNotification } = useNotifications()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Veuillez saisir votre nom'
    if (!formData.email.trim()) return 'Veuillez saisir votre email'
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Email invalide'
    if (!formData.subject.trim()) return 'Veuillez saisir un sujet'
    if (!formData.message.trim()) return 'Veuillez saisir votre message'
    if (formData.message.length < 10) return 'Le message doit contenir au moins 10 caractères'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      // VRAIE SOUMISSION NETLIFY FORMS
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'name': formData.name,
          'email': formData.email,
          'subject': formData.subject,
          'message': formData.message
        }).toString()
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        addNotification({
          type: 'success',
          title: 'Message envoyé !',
          message: 'Nous vous répondrons dans les 24h.'
        })
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Erreur envoi contact:', error)
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
      addNotification({
        type: 'error',
        title: 'Erreur d\'envoi',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@leveil.fr",
      description: "Réponse sous 24h-48h",
      link: "mailto:contact@leveil.fr"
    }
  ]

  // Page de confirmation
  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Message envoyé avec succès !
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              Merci pour votre message. Notre équipe vous répondra dans les 24h.
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                En attendant notre réponse :
              </h3>
              <ul className="text-neutral-600 dark:text-neutral-300 space-y-3">
                <li>• <a href="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">Parcourez nos articles</a></li>
                <li>• <a href="/resources" className="text-indigo-600 dark:text-indigo-400 hover:underline">Découvrez nos ressources gratuites</a></li>
                <li>• <a href="/#newsletter" className="text-indigo-600 dark:text-indigo-400 hover:underline">Rejoignez la newsletter</a></li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Lire nos articles
              </a>
              <a
                href="/resources"
                className="bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                Voir les ressources
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Formulaire principal
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Une question, une suggestion ou besoin d'aide ? Nous sommes là pour vous accompagner dans votre développement personnel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Nos coordonnées
            </h2>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                  <info.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  <a 
                    href={info.link}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    {info.value}
                  </a>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}

            {/* FAQ rapide */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-2xl">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                Questions fréquentes
              </h3>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                <li>• <strong>Délai de réponse :</strong> 24h en moyenne</li>
                <li>• <strong>Conseils personnalisés :</strong> Nous proposons du coaching sur mesure</li>
                <li>• <strong>Ressources gratuites :</strong> Découvrez notre bibliothèque d'outils</li>
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Envoyez-nous un message
            </h2>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="Question générale">Question générale</option>
                  <option value="Demande de coaching">Demande de coaching</option>
                  <option value="Partenariat">Partenariat</option>
                  <option value="Problème technique">Problème technique</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-neutral-700 dark:text-white transition-colors resize-none"
                  placeholder="Décrivez votre demande en détail..."
                />
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                  {formData.message.length}/1000 caractères (minimum 10)
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </button>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact