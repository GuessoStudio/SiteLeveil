import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  tags?: string[];
  category?: string; // ✅ NEW
  isHome?: boolean;
  jsonLd?: any[];
};

const SITE_NAME = "L'Éveil";
const DEFAULT_DESC =
  "Psychologie, neurosciences et développement personnel fondés sur la science.";

const RAW_BASE_URL = import.meta.env.VITE_SITE_URL || "https://leveilmental.fr";
const BASE_URL = RAW_BASE_URL.replace(/\/$/, ""); // ✅ no trailing slash

function cleanPath(path?: string) {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function toAbsoluteUrl(input?: string) {
  if (!input) return undefined;
  if (input.startsWith("http://") || input.startsWith("https://")) return input;
  const p = input.startsWith("/") ? input : `/${input}`;
  return `${BASE_URL}${p}`;
}

// Générateur d'image OG automatique
function generateOGImage(title: string, category?: string): string {
  const baseUrl = "https://og-image.vercel.app";

  const categoryConfig: Record<string, { bg: string; color: string }> = {
    Psychologie: { bg: "ec4899", color: "white" },
    Neurosciences: { bg: "3b82f6", color: "white" },
    "Développement Personnel": { bg: "10b981", color: "white" },
    "Relations Humaines": { bg: "8b5cf6", color: "white" },
  };

  const config = categoryConfig[category || ""] || { bg: "6366f1", color: "white" };

  const encodedTitle = encodeURIComponent(title);
  const encodedSubtitle = encodeURIComponent(
    category ? `${category} • ${SITE_NAME}` : SITE_NAME
  );

  return `${baseUrl}/${encodedTitle}.png?theme=light&md=1&fontSize=72px&text=${encodedSubtitle}&bg=${config.bg}&color=${config.color}`;
}

export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = "/",
  image,
  type = "website",
  datePublished,
  dateModified,
  authorName,
  tags,
  category,
  isHome = false,
  jsonLd,
}: SEOProps) {
  const safePath = cleanPath(path);
  const url = `${BASE_URL}${safePath}`;

  // ✅ Auto-switch : si jsonLd est fourni, la page "prend la main"
  const hasCustomJsonLd = Array.isArray(jsonLd) && jsonLd.length > 0;

  // OG image : utilise l'image fournie OU génère automatiquement
  const ogImage =
    toAbsoluteUrl(image) ||
    generateOGImage(
      title,
      category || tags?.[0] || (type === "article" ? "Article" : undefined)
    );

  // Default schemas (filet de sécurité)
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.webp`,
  };

  // ✅ Default Article schema (uniquement si pas de jsonLd custom)
  const articleLd =
    type === "article" && !hasCustomJsonLd
      ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        image: [ogImage],
        author: authorName ? [{ "@type": "Person", name: authorName }] : undefined,
        datePublished,
        dateModified: dateModified || datePublished,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: tags?.join(", "),
        articleSection: category,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/images/logo.webp`,
          },
        },
      }
      : null;

  // ✅ Default Breadcrumb (uniquement si pas de jsonLd custom)
  const breadcrumbLd =
    !hasCustomJsonLd
      ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
          ...(type === "article"
            ? [
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${BASE_URL}/blog`,
              },
              { "@type": "ListItem", position: 3, name: title, item: url },
            ]
            : [{ "@type": "ListItem", position: 2, name: title, item: url }]),
        ],
      }
      : null;

  return (
    <>
    {/* Canonical — rendu statique hors Helmet (même raison que JSON-LD :
        react-helmet-async n'est pas sérialisé avec vite-react-ssg / dual HelmetProvider)
        Sans cette balise dans le HTML statique → GSC "Page en double sans canonique" */}
    {/* eslint-disable-next-line react/no-unknown-property */}
    <link rel="canonical" href={url} />

    {/* Schemas JSON-LD injectés directement dans le DOM pour la sérialisation SSG
        (react-helmet-async n'est pas sérialisé en statique avec vite-react-ssg) */}
    {hasCustomJsonLd && jsonLd!.filter(Boolean).map((obj, i) => (
      <script
        key={`ld-static-${i}`}
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
      />
    ))}
    <Helmet prioritizeSeoTags>
      <title>{isHome ? title : `${title} • ${SITE_NAME}`}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={isHome ? "website" : type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${title} - ${SITE_NAME}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} - ${SITE_NAME}`} />

      {/* Article specific */}
      {type === "article" && (
        <>
          {datePublished && <meta property="article:published_time" content={datePublished} />}
          {dateModified && <meta property="article:modified_time" content={dateModified} />}
          {authorName && <meta property="article:author" content={authorName} />}
          {tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Default JSON-LD (filet de sécurité) */}
      {breadcrumbLd && <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>}
      {isHome && (
        <>
          <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
          <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
        </>
      )}
      {articleLd && <script type="application/ld+json">{JSON.stringify(articleLd)}</script>}

      {/* Custom JSON-LD : rendu uniquement via dangerouslySetInnerHTML (hors Helmet)
          pour éviter les doublons — les scripts statiques sont déjà dans le HTML SSG */}
    </Helmet>
    </>
  );
}