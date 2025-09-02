import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  datePublished?: string
  dateModified?: string
  authorName?: string
  tags?: string[]
  isHome?: boolean
}

const SITE_NAME = "L'Éveil"
const DEFAULT_DESC = "Psychologie, neurosciences et développement personnel fondés sur la science."
const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://siteleveil.netlify.app'

// Générateur d'image OG automatique
function generateOGImage(title: string, category?: string): string {
  const baseUrl = 'https://og-image.vercel.app'
  
  // Couleurs par catégorie
  const categoryConfig: { [key: string]: { bg: string; color: string } } = {
    'Psychologie': { bg: 'ec4899', color: 'white' },
    'Neurosciences': { bg: '3b82f6', color: 'white' },
    'Développement Personnel': { bg: '10b981', color: 'white' },
    'Relations Humaines': { bg: '8b5cf6', color: 'white' },
  }
  
  const config = categoryConfig[category || ''] || { bg: '6366f1', color: 'white' }
  
  // Encodage pour URL
  const encodedTitle = encodeURIComponent(title)
  const encodedSubtitle = category ? encodeURIComponent(`${category} • L'Éveil`) : encodeURIComponent("L'Éveil")
  
  return `${baseUrl}/${encodedTitle}.png?theme=light&md=1&fontSize=72px&text=${encodedSubtitle}&bg=${config.bg}&color=${config.color}`
}

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '/',
  image,
  type = 'website',
  datePublished,
  dateModified,
  authorName,
  tags,
  isHome = false,
}: SEOProps) {
  const url = `${BASE_URL}${path}`
  
  // Image OG : utilise l'image fournie OU génère automatiquement
  let ogImage: string
  
  if (image && image.startsWith('http')) {
    ogImage = image
  } else if (image && image.startsWith('/')) {
    ogImage = `${BASE_URL}${image}`
  } else {
    // Génération automatique basée sur le titre et les tags
    const category = tags?.[0] || (type === 'article' ? 'Article' : '')
    ogImage = generateOGImage(title, category)
  }

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.ico`,
  }

  const articleLd = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [ogImage],
    author: authorName ? [{ '@type': 'Person', name: authorName }] : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: tags?.join(', '),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.ico`
      }
    }
  } : null

  return (
    <Helmet prioritizeSeoTags>
      <title>{isHome ? title : `${title} • ${SITE_NAME}`}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={isHome ? 'website' : type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - ${SITE_NAME}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - ${SITE_NAME}`} />

      {/* Article specific */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={datePublished} />
          {dateModified && <meta property="article:modified_time" content={dateModified} />}
          {authorName && <meta property="article:author" content={authorName} />}
          {tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* JSON-LD Schema */}
      {isHome && (
        <>
          <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
          <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
        </>
      )}
      
      {articleLd && (
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
      )}
    </Helmet>
  )
}