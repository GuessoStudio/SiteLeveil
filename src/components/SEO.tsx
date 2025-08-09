import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string
  description?: string
  image?: string
  url?: string
}
export default function SEO({
  title = "L'Éveil — Psychologie, neurosciences & motivation",
  description = "Articles et ressources fondés sur la science pour élever ton esprit.",
  image = "/og.jpg",
  url = typeof window !== 'undefined' ? window.location.href : "https://siteleveil.netlify.app"
}: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
