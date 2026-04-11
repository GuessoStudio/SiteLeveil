// src/components/EmailCaptureModal.tsx
import React, { useState } from 'react'
import { X, Download, Mail } from 'lucide-react'
import { sendEmailToServices } from '../utils/emailServices'

interface EmailCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle: string
  resourceFile: string
  onSuccess?: (email: string) => void
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  isOpen,
  onClose,
  resourceTitle,
  resourceFile,
  onSuccess
}) => {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!email.trim()) {
      setError('Veuillez entrer votre adresse email')
      return
    }

    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide')
      return
    }

    setIsLoading(true)

    try {
      // Sauvegarder l'email localement
      const emails = JSON.parse(localStorage.getItem('captured-emails') || '[]')
      const newEntry = {
        email: email.trim(),
        resource: resourceTitle,
        date: new Date().toISOString(),
        downloaded: false
      }
      
      emails.push(newEntry)
      localStorage.setItem('captured-emails', JSON.stringify(emails))

      // Envoyer à Formspree (newsletter)
      await sendEmailToServices(email.trim(), resourceTitle)

      // Marquer comme téléchargé et déclencher le téléchargement
      setSuccess(true)
      
      // Attendre 500ms pour montrer le succès
      setTimeout(() => {
        // Déclencher le téléchargement
        const link = document.createElement('a')
        link.href = resourceFile
        link.download = resourceFile.split('/').pop() || 'download.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Callback
        if (onSuccess) {
          onSuccess(email)
        }

        // Fermer le modal après 1 seconde
        setTimeout(() => {
          onClose()
          setEmail('')
          setSuccess(false)
        }, 1000)
      }, 500)

    } catch (err) {
      console.error('Erreur lors de la capture:', err)
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 text-white">
            <div className="bg-white/20 p-3 rounded-full">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Téléchargement gratuit</h3>
              <p className="text-sm text-white/80">Recevez aussi nos ressources exclusives</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {!success ? (
            <>
              <div className="mb-6">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                  {resourceTitle}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Entrez votre email pour télécharger cette ressource gratuitement et recevoir nos conseils exclusifs en développement personnel.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label 
                    htmlFor="email-capture" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      id="email-capture"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full pl-11 pr-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400"
                      disabled={isLoading}
                      autoFocus
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                      {error}
                    </p>
                  )}
                </div>

                <label className="flex items-start gap-3 text-xs text-neutral-600 dark:text-neutral-400 mb-4">
  <input
    type="checkbox"
    checked={consent}
    onChange={(e) => setConsent(e.target.checked)}
    className="mt-0.5"
    required
  />
  <span>
    J'accepte de recevoir des emails de leveilmental.fr concernant le développement personnel. 
    Je peux me désinscrire à tout moment. 
    <a href="/legal" className="text-indigo-600 hover:underline">
      Politique de confidentialité
    </a>
  </span>
</label> 

                <button
                  type="submit"
                  disabled={isLoading || !consent}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Préparation...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Télécharger gratuitement</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                  🔒 Vos données sont sécurisées. Pas de spam, désinscription à tout moment.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Téléchargement en cours...
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Votre ressource va se télécharger automatiquement
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailCaptureModal
