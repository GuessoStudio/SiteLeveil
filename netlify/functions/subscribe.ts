import type { Handler, HandlerEvent } from '@netlify/functions'

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) }
  }

  let email: string, prenom: string
  try {
    const body = JSON.parse(event.body || '{}')
    email = (body.email || '').trim()
    prenom = (body.prenom || '').trim()
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'JSON invalide' }) }
  }

  if (!email || !prenom) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email et prénom requis' }) }
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = parseInt(process.env.BREVO_LIST_ID || '6')

  if (!apiKey) {
    console.error('BREVO_API_KEY manquant')
    return { statusCode: 500, body: JSON.stringify({ error: 'Configuration serveur manquante' }) }
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: { PRENOM: prenom },
        listIds: [listId],
        updateEnabled: true,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: (data as any).message || 'Erreur Brevo' }),
      }
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error('Erreur subscribe:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Erreur réseau' }) }
  }
}
