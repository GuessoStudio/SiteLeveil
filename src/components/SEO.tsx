import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authorName?: string
  tags?: string[]
  isHome?: boolean
}

const SITE_NAME = "L'Éveil"
const DEFAULT_DESC =
  "Psychologie, neurosciences et développement personnel fondés sur la science."
const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://siteleveil.netlify.app'
const DEFAULT_IMAGE = '/images/og-default.jpg' // place ce fichier dans /public/images (1200x630)

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  authorName,
  tags,
  isHome = false,
}: SEOProps) {
  const url = `${BASE_URL}${path}`
  const imgUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`

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

  const articleLd =
    type === 'article'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          image: [imgUrl],
          author: authorName ? [{ '@type': 'Person', name: authorName }] : undefined,
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          keywords: tags?.join(', '),
        }
      : null

  return (
    <Helmet prioritizeSeoTags>
      <title>{`${title} · ${SITE_NAME}`}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={isHome ? 'website' : type} />
      <meta property="og:title" content={`${title} · ${SITE_NAME}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} · ${SITE_NAME}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${imgUrl}?v=2`} />
      {/* Article meta */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {tags?.map((t) => <meta property="article:tag" content={t} key={t} />)}

      {/* JSON-LD */}
      {isHome && (
        <>
          <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
          <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
        </>
      )}
      {articleLd && <script type="application/ld+json">{JSON.stringify(articleLd)}</script>}
    </Helmet>
  )
}
