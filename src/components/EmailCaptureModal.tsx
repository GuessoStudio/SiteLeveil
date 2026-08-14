import React from 'react'
import { X } from 'lucide-react'
import { trackLead } from '../lib/analytics'

/**
 * Modale de capture d'email avant livraison d'un lead magnet.
 *
 * ⚠️ Le balisage n'utilise plus les classes `sib-*` de Brevo. Elles étaient
 * copiées du formulaire hébergé, mais leur feuille de style
 * (https://sibforms.com/forms/end-form/build/sib-styles.css) ne s'applique
 * jamais sur le site : vérifié le 12 août 2026, le style calculé de
 * `.sib-hide-loader-icon` valait `display:block` au lieu de `none`. Résultat,
 * le bouton s'affichait comme un carré bleu avec le spinner de chargement
 * apparent, et les champs sans aucune mise en forme. Sur les 4 articles à fort
 * trafic qui ouvrent cette modale, c'était directement de la conversion perdue.
 *
 * Le formulaire est donc habillé avec le design system du site (Tailwind,
 * compatible thème sombre). Ce qui doit rester intact pour que Brevo continue
 * de recevoir les inscriptions :
 *   - l'URL `action` (formulaire « bnf », rattaché à la liste #6)
 *   - les noms de champs `EMAIL` et `PRENOM`
 *   - les champs cachés `email_address_check` (anti-spam), `locale`, `html_type`
 */

interface EmailCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle?: string
  resourceFile?: string
  onSuccess?: (email: string) => void
}

const BDNF_PDF = 'https://leveilmental.fr/downloads/bdnf-guide-scientifique-leveilmental.pdf'

// Formulaire « bnf » → liste « Newsletter L'Éveil Mental - #6 », celle qui
// déclenche l'automatisation de bienvenue. Ne pas changer sans vérifier la liste.
const BREVO_ACTION =
  'https://0764bcde.sibforms.com/serve/MUIFACGVBDTe_S8OQSTD1PkL5uV9wX8LmfJYLbCEv4_lBylWBBrMO51gqYB9fPS6rf5TP2RTQeTUBvhmMJ1ZoUxfOD9z__lFHogoB5vfJgFWDBIK6415y5nVBSM6y72WkTsi_j-_gQ7DZp14QCWzK6HJoPBj3-sdQ9SDSOywoieCpS3i3Gy2hDfC48U-_aRC_Albn2rufaNPsFZEqw=='

const champ =
  'w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 ' +
  'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white ' +
  'placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ' +
  'focus:outline-none focus:ring-2 focus:ring-amber-500 transition'

const BrevoForm = ({ resourceFile }: { resourceFile?: string }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // 1. Déclencher le téléchargement du PDF (ressource ciblée, ou guide BDNF)
    const pdfUrl = resourceFile || BDNF_PDF
    if (pdfUrl) {
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = pdfUrl.split('/').pop() || 'download.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    // 2. Soumettre à Brevo dans un nouvel onglet
    form.target = '_blank'
    form.submit()
    form.target = ''

    // 3. Mesurer PUIS rediriger. L'ordre compte : la redirection détruit la
    //    page, donc on laisse à GA4 le temps d'envoyer l'événement. `trackLead`
    //    rappelle au plus tard après son timeout, la redirection a donc lieu
    //    même si gtag.js n'est pas encore chargé.
    trackLead(
      'modal_lead_magnet',
      { form_name: 'modal_brevo', resource: pdfUrl.split('/').pop() || 'inconnu' },
      () => { window.location.href = '/merci-inscription/' },
    )
  }

  return (
    <form
      method="POST"
      action={BREVO_ACTION}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="EMAIL-modal"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
        >
          Email
        </label>
        <input
          id="EMAIL-modal"
          name="EMAIL"
          type="email"
          required
          autoComplete="email"
          placeholder="votre@email.com"
          className={champ}
        />
      </div>

      <div>
        <label
          htmlFor="PRENOM-modal"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
        >
          Prénom
        </label>
        <input
          id="PRENOM-modal"
          name="PRENOM"
          type="text"
          required
          maxLength={200}
          autoComplete="given-name"
          placeholder="Votre prénom"
          className={champ}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl font-semibold text-white
                   bg-[#C9953A] hover:bg-[#E8B84B] transition-colors duration-200
                   flex items-center justify-center gap-2"
      >
        {resourceFile ? 'Télécharger gratuitement' : "Je rejoins L'Éveil Mental"}
      </button>

      <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
        Pas de spam. Désabonnement en 1 clic.
      </p>

      {/* Champs attendus par Brevo — ne pas retirer.
          `email_address_check` est son piège à robots : il doit rester vide. */}
      <input type="text" name="email_address_check" defaultValue="" className="hidden" readOnly />
      <input type="hidden" name="locale" value="fr" />
      <input type="hidden" name="html_type" value="simple" />
    </form>
  )
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ isOpen, onClose, resourceFile }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slideUp">
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pb-8">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Rejoindre L'Éveil Mental
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            Reçois chaque semaine un article scientifique sur les neurosciences et la psychologie.
          </p>

          <BrevoForm resourceFile={resourceFile} />
        </div>
      </div>
    </div>
  )
}

export default EmailCaptureModal
