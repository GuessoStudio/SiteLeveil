import React from 'react'
import { X } from 'lucide-react'

interface EmailCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle?: string
  resourceFile?: string
  onSuccess?: (email: string) => void
}

const BDNF_PDF = 'https://leveilmental.fr/downloads/bdnf-guide-scientifique-leveilmental.pdf'

interface BrevoFormProps {
  resourceFile?: string
}

const BrevoForm = ({ resourceFile }: BrevoFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // 1. Déclencher le téléchargement PDF (ressource spécifique ou guide BDNF par défaut)
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

    // 3. Rediriger vers la page de remerciement
    window.location.href = '/merci-inscription/'
  }

  return (
    <div className="sib-form" style={{ textAlign: 'center', backgroundColor: '#eff2f7' }}>
      <div id="sib-form-container-modal" className="sib-form-container">
        <div
          className="sib-container--large sib-container--vertical"
          style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', maxWidth: '540px', borderRadius: '3px', borderWidth: '1px', borderColor: '#C0CCD9', borderStyle: 'solid', margin: '0 auto' }}
        >
          <form
            id="sib-form-modal"
            method="POST"
            action="https://0764bcde.sibforms.com/serve/MUIFACGVBDTe_S8OQSTD1PkL5uV9wX8LmfJYLbCEv4_lBylWBBrMO51gqYB9fPS6rf5TP2RTQeTUBvhmMJ1ZoUxfOD9z__lFHogoB5vfJgFWDBIK6415y5nVBSM6y72WkTsi_j-_gQ7DZp14QCWzK6HJoPBj3-sdQ9SDSOywoieCpS3i3Gy2hDfC48U-_aRC_Albn2rufaNPsFZEqw=="
            onSubmit={handleSubmit}
          >
            <div style={{ padding: '16px 0' }}>
              <div className="sib-form-block" style={{ fontSize: '32px', textAlign: 'left', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent' }}>
                <p>Rejoindre L'Éveil Mental</p>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div className="sib-form-block" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent' }}>
                <div className="sib-text-form-block">
                  <p>Reçois chaque semaine un article scientifique sur neurosciences et psychologie</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <label
                      className="entry__label"
                      style={{ fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858' }}
                      htmlFor="EMAIL-modal"
                      data-required="*"
                    >
                      Veuillez renseigner votre adresse email pour vous inscrire
                    </label>
                    <div className="entry__field">
                      <input className="input" type="text" id="EMAIL-modal" name="EMAIL" autoComplete="off" placeholder="EMAIL" data-required="true" required />
                    </div>
                  </div>
                  <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }} />
                  <label className="entry__specification" style={{ fontSize: '12px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#8390A4' }}>
                    Veuillez renseigner votre adresse email pour vous inscrire. Ex. : abc@xyz.com
                  </label>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <label
                      className="entry__label"
                      style={{ fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: '#3c4858' }}
                      htmlFor="PRENOM-modal"
                      data-required="*"
                    >
                      Entrez votre PRENOM
                    </label>
                    <div className="entry__field">
                      <input className="input" maxLength={200} type="text" id="PRENOM-modal" name="PRENOM" autoComplete="off" placeholder="PRENOM" data-required="true" required />
                    </div>
                  </div>
                  <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }} />
                  <label className="entry__specification" style={{ fontSize: '12px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#8390A4' }}>
                    Personnalisez ce texte d'aide facultatif avant de publier votre formulaire.
                  </label>
                </div>
              </div>
            </div>

            <div style={{ padding: '16px 0' }}>
              <div className="sib-form-block" style={{ textAlign: 'center' }}>
                <button
                  className="sib-form-block__button sib-form-block__button-with-loader"
                  style={{ fontSize: '16px', textAlign: 'center', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: '#FFFFFF', backgroundColor: '#4f46e5', borderRadius: '3px', border: 'none' }}
                  form="sib-form-modal"
                  type="submit"
                >
                  <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  {resourceFile ? 'Télécharger gratuitement' : "Je rejoins L'Éveil Mental"}
                </button>
              </div>
            </div>

            <input type="text" name="email_address_check" value="" className="input--hidden" readOnly />
            <input type="hidden" name="locale" value="fr" />
            <input type="hidden" name="html_type" value="simple" />
          </form>
        </div>
      </div>
    </div>
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
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-2 pb-4">
          <BrevoForm resourceFile={resourceFile} />
        </div>
      </div>
    </div>
  )
}

export default EmailCaptureModal
