// src/utils/emailServices.ts

/**
 * Helper pour intégrer différents services d'emailing
 * Tous ces services ont des plans gratuits suffisants pour démarrer
 */

// ============================================
// CONFIGURATION - Mettez vos clés ici
// ============================================

const CONFIG = {
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY'
  },
  formspree: {
    endpoint: 'https://formspree.io/f/xojerwda', // Sleep Calculator Form ID
    newsletterEndpoint: 'https://formspree.io/f/xpqovloz' // ← Créer sur formspree.io : "Newsletter L'Éveil Mental"
  },
  googleSheets: {
    scriptUrl: 'YOUR_GOOGLE_APPS_SCRIPT_URL'
  }
}

// ============================================
// EMAILJS (200 emails/mois gratuit)
// ============================================

export const sendToEmailJS = async (
  email: string,
  resourceTitle: string
): Promise<boolean> => {
  // Fonction désactivée pour l'instant - à activer quand vous configurerez EmailJS
  console.log('EmailJS non configuré')
  return true

  /* try {
    const emailjs = await import('@emailjs/browser')
    
    const response = await emailjs.default.send(
      CONFIG.emailjs.serviceId,
      CONFIG.emailjs.templateId,
      {
        user_email: email,
        resource_name: resourceTitle,
        date: new Date().toLocaleDateString('fr-FR'),
        time: new Date().toLocaleTimeString('fr-FR')
      },
      CONFIG.emailjs.publicKey
    )
    
    console.log('✅ EmailJS success:', response)
    return true
  } catch (error) {
    console.error('❌ EmailJS error:', error)
    return false
  } */
}
// ============================================
// FORMSPREE (50 soumissions/mois gratuit)
// ============================================

export const sendToFormspree = async (
  email: string,
  resourceTitle: string
): Promise<boolean> => {
  try {
    const response = await fetch(CONFIG.formspree.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        resource: resourceTitle,
        date: new Date().toISOString(),
        source: 'leveilmental.fr'
      })
    })

    if (response.ok) {
      console.log('✅ Formspree success')
      return true
    }

    throw new Error('Formspree response not OK')
  } catch (error) {
    console.error('❌ Formspree error:', error)
    return false
  }
}

// ============================================
// GOOGLE SHEETS (Gratuit illimité)
// ============================================

export const sendToGoogleSheets = async (
  email: string,
  resourceTitle: string
): Promise<boolean> => {
  try {
    const response = await fetch(CONFIG.googleSheets.scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Important pour Google Apps Script
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        resource: resourceTitle,
        timestamp: new Date().toISOString()
      })
    })

    // Note: no-cors mode ne permet pas de lire la réponse
    // On assume que c'est OK si pas d'erreur
    console.log('✅ Google Sheets sent')
    return true
  } catch (error) {
    console.error('❌ Google Sheets error:', error)
    return false
  }
}

// ============================================
// NEWSLETTER FORMSPREE
// ============================================

export const sendNewsletterToFormspree = async (
  email: string,
  resourceTitle: string
): Promise<boolean> => {
  try {
    const response = await fetch(CONFIG.formspree.newsletterEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        resource: resourceTitle,
        date: new Date().toISOString(),
        source: 'leveilmental.fr'
      })
    })

    if (response.ok) {
      console.log('✅ Newsletter Formspree success')
      return true
    }

    throw new Error('Formspree response not OK')
  } catch (error) {
    console.error('❌ Newsletter Formspree error:', error)
    return false
  }
}

// ============================================
// FONCTION PRINCIPALE - À UTILISER DANS LE MODAL
// ============================================

export const sendEmailToServices = async (
  email: string,
  resourceTitle: string
): Promise<void> => {
  // Ne pas bloquer le téléchargement si un service échoue
  const promises: Array<Promise<boolean>> = [
    sendNewsletterToFormspree(email, resourceTitle),
  ]

  await Promise.allSettled(promises)
}

// ============================================
// UTILITAIRES D'EXPORT
// ============================================

export interface CapturedEmail {
  email: string
  resource: string
  date: string
  downloaded: boolean
}

/**
 * Exporter les emails au format Mailchimp CSV
 */
export const exportForMailchimp = (emails: CapturedEmail[]): string => {
  // Format Mailchimp: Email Address, First Name, Last Name, Tags
  const uniqueEmails = new Map<string, CapturedEmail>()

  emails.forEach(entry => {
    if (!uniqueEmails.has(entry.email)) {
      uniqueEmails.set(entry.email, entry)
    }
  })

  const headers = ['Email Address', 'First Name', 'Last Name', 'Tags']
  const rows = Array.from(uniqueEmails.values()).map(entry => [
    entry.email,
    '', // First Name - à remplir manuellement ou via formulaire étendu
    '', // Last Name
    `ressource-${entry.resource.toLowerCase().replace(/\s+/g, '-')}`
  ])

  return [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n')
}

/**
 * Exporter les emails au format Sendinblue CSV
 */
export const exportForSendinblue = (emails: CapturedEmail[]): string => {
  // Format Sendinblue: EMAIL, PRENOM, NOM, TAGS
  const uniqueEmails = new Map<string, CapturedEmail>()

  emails.forEach(entry => {
    if (!uniqueEmails.has(entry.email)) {
      uniqueEmails.set(entry.email, entry)
    }
  })

  const headers = ['EMAIL', 'PRENOM', 'NOM', 'RESOURCE', 'DATE_INSCRIPTION']
  const rows = Array.from(uniqueEmails.values()).map(entry => [
    entry.email,
    '', // PRENOM
    '', // NOM
    entry.resource,
    new Date(entry.date).toLocaleDateString('fr-FR')
  ])

  return [
    headers.join(';'), // Sendinblue utilise ; comme séparateur
    ...rows.map(row => row.map(cell => `"${cell}"`).join(';'))
  ].join('\n')
}

/**
 * Télécharger un fichier
 */
export const downloadFile = (content: string, filename: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href)
}

// ============================================
// WEBHOOK POUR ZAPIER / MAKE (Gratuit)
// ============================================

export const sendToWebhook = async (
  webhookUrl: string,
  email: string,
  resourceTitle: string
): Promise<boolean> => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        resource: resourceTitle,
        timestamp: new Date().toISOString(),
        source: 'leveilmental.fr'
      })
    })

    if (response.ok) {
      console.log('✅ Webhook success')
      return true
    }

    throw new Error('Webhook response not OK')
  } catch (error) {
    console.error('❌ Webhook error:', error)
    return false
  }
}

// ============================================
// VALIDATION
// ============================================

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email.toLowerCase())
}

export const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase()
}

// ============================================
// STATISTIQUES
// ============================================

export const getEmailStats = (emails: CapturedEmail[]) => {
  const uniqueEmails = new Set(emails.map(e => e.email))
  const resourceCounts = new Map<string, number>()

  emails.forEach(entry => {
    const count = resourceCounts.get(entry.resource) || 0
    resourceCounts.set(entry.resource, count + 1)
  })

  const mostPopularResource = Array.from(resourceCounts.entries())
    .sort((a, b) => b[1] - a[1])[0]

  return {
    totalCaptures: emails.length,
    uniqueEmails: uniqueEmails.size,
    conversionRate: uniqueEmails.size > 0
      ? ((emails.length / uniqueEmails.size) * 100).toFixed(1)
      : '0',
    mostPopularResource: mostPopularResource
      ? { name: mostPopularResource[0], downloads: mostPopularResource[1] }
      : null,
    capturesPerDay: (emails.length / 30).toFixed(1), // Moyenne sur 30 jours
    resourceDistribution: Object.fromEntries(resourceCounts)
  }
}
