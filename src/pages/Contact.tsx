import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
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
  const { addNotification } = useNotifications()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (remplacer par vraie API)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      addNotification({
        type: 'success',
        title: 'Message envoyé !',
        message: 'Nous vous répondrons dans les 24h.'
      })
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Erreur',
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
      description: "Réponse sous 24h-48h"
    },
    
  ]



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

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Une question, une suggestion ou besoin d'aide ? Notre équipe est là pour vous accompagner
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-900 dark:text-white"
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
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-900 dark:text-white"
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
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-900 dark:text-white"
                >
                   <option value="">Sélectionnez un sujet</option>
  <option value="question">Question générale</option>
  <option value="article">Idée d'article ou de contenu</option>
  <option value="partenariat">Partenariat ou collaboration</option>
  <option value="feedback">Retour sur le site ou les ressources</option>
  <option value="autre">Autre</option>
</select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-900 dark:text-white resize-none"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Informations de contact
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-neutral-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Questions fréquentes
              </h2>
              
              <div className="space-y-4">
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact