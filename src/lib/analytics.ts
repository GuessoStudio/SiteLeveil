/**
 * Mesure des inscriptions newsletter dans GA4.
 *
 * Pourquoi ce fichier : jusqu'au 11 août 2026, aucune inscription n'était
 * mesurée. Les formulaires envoyaient bien vers Brevo et la fonction Netlify,
 * mais GA4 ne voyait rien. Impossible de savoir quel article amène des inscrits,
 * donc impossible d'arbitrer entre deux sujets ou deux formats.
 *
 * `generate_lead` est l'événement recommandé par Google pour une soumission de
 * formulaire de contact ou d'inscription. Il doit être marqué comme
 * « événement clé » dans l'interface GA4 pour compter comme conversion.
 *
 * ⚠️ Le `gtag()` d'index.html est défini AVANT le chargement de gtag.js : il
 * empile les appels dans `dataLayer`, qui sont rejoués une fois le script
 * chargé. Appeler cette fonction tôt est donc sans risque.
 */

type LeadSource = 'newsletter_section' | 'modal_lead_magnet'

type Gtag = (command: string, event: string, params?: Record<string, unknown>) => void

function getGtag(): Gtag | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as unknown as { gtag?: Gtag }).gtag
}

/**
 * Émet `generate_lead`. `onDone` est rappelé quand GA4 a pris l'événement, ou
 * au bout de `timeoutMs` si gtag ne répond pas — utile quand l'appelant
 * enchaîne sur une navigation qui détruirait la page avant l'envoi.
 */
export function trackLead(
  source: LeadSource,
  params: Record<string, unknown> = {},
  onDone?: () => void,
  timeoutMs = 600,
): void {
  const gtag = getGtag()

  if (!gtag) {
    onDone?.()
    return
  }

  let done = false
  const finish = () => {
    if (done) return
    done = true
    onDone?.()
  }

  try {
    gtag('event', 'generate_lead', {
      lead_source: source,
      ...params,
      // event_callback n'est honoré qu'une fois gtag.js chargé ; le timeout
      // ci-dessous sert de filet quand il ne l'est pas encore.
      event_callback: onDone ? finish : undefined,
      event_timeout: timeoutMs,
    })
  } catch {
    finish()
    return
  }

  if (onDone) window.setTimeout(finish, timeoutMs)
}
