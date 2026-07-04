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

const SITE_NAME = "L'Éveil Mental";
const TWITTER_HANDLE = "@leveilmental";
const DEFAULT_DESC =
  "Psychologie, neurosciences et développement personnel fondés sur la science.";

const RAW_BASE_URL = import.meta.env.VITE_SITE_URL || "https://leveilmental.fr";
const BASE_URL = RAW_BASE_URL.replace(/\/$/, ""); // ✅ no trailing slash

function cleanPath(path?: string) {
  if (!path) return "/";
  const p = path.startsWith("/") ? path : `/${path}`;
  // Ajoute le trailing slash pour correspondre au comportement Netlify (dirStyle nested).
  // Netlify sert /blog/slug/ (200) depuis dist/blog/slug/index.html.
  // Sans trailing slash dans le canonical → mismatch → GSC "doublon sans canonique" + "erreur redirect".
  if (p === "/") return p;
  return p.endsWith("/") ? p : `${p}/`;
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
  const pageTitle = isHome ? title : `${title} • ${SITE_NAME}`;

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
    sameAs: [
      "https://www.instagram.com/leveil.officiel/",
      "https://www.facebook.com/profile.php?id=61572902135677",
      "https://x.com/leveilmental",
      "https://www.tiktok.com/@leveil_mental",
    ],
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
                item: `${BASE_URL}/blog/`,
              },
              { "@type": "ListItem", position: 3, name: title, item: url },
            ]
            : [{ "@type": "ListItem", position: 2, name: title, item: url }]),
        ],
      }
      : null;

  return (
    <>
    {/* Balises rendues hors Helmet — sérialisées correctement par vite-react-ssg.
        react-helmet-async ne propage pas les bonnes props pendant le build SSG. */}
    {/* Marqueur title pour le SSG : <title> ne peut pas être rendu dans le body,
        onPageRendered (vite.config.ts) recopie ce contenu dans le <title> du head
        puis retire le marqueur. Sans ça, toutes les pages servent le title du template. */}
    <meta name="ssg:title" content={pageTitle} />
    <link rel="canonical" href={url} />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:type" content={isHome ? "website" : type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={`${title} - ${SITE_NAME}`} />
    <meta property="og:locale" content="fr_FR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={TWITTER_HANDLE} />
    <meta name="twitter:creator" content={TWITTER_HANDLE} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:image:alt" content={`${title} - ${SITE_NAME}`} />

    {/* Schemas JSON-LD injectés directement dans le DOM pour la sérialisation SSG */}
    {hasCustomJsonLd && jsonLd!.filter(Boolean).map((obj, i) => (
      <script
        key={`ld-static-${i}`}
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
      />
    ))}

    {/* Schemas filet de sécurité — hors Helmet pour sérialisation SSG.
        Uniquement actifs quand aucun jsonLd custom n'est passé (homepage, pages simples). */}
    {breadcrumbLd && (
      // eslint-disable-next-line react/no-danger
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    )}
    {isHome && (
      <>
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </>
    )}
    {articleLd && (
      // eslint-disable-next-line react/no-danger
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    )}
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />


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

      {/* Schemas filet de sécurité rendus hors Helmet (voir plus haut) pour la sérialisation SSG */}

      {/* Custom JSON-LD : rendu uniquement via dangerouslySetInnerHTML (hors Helmet)
          pour éviter les doublons — les scripts statiques sont déjà dans le HTML SSG */}
    </Helmet>
    </>
  );
}