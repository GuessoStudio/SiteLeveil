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
  noindex?: boolean;
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
  noindex = false,
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
      // Forme canonique par identifiant de chaine, donnee par YouTube : sans
      // accent et stable meme si le handle @Léveil-Mental-Fr change un jour.
      "https://www.youtube.com/channel/UCY4QemAG2QM2NsiofwgKjIQ",
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
  // Jamais sur la home : un BreadcrumbList à 2 niveaux dont le niveau 2 pointe
  // vers la home elle-même est auto-référentiel et invalide pour Google.
  // La page racine n'a pas besoin de fil d'Ariane.
  const breadcrumbLd =
    !hasCustomJsonLd && !isHome
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
    {/* ⚠️ Ne JAMAIS ajouter ici une balise que le build retire ensuite du HTML.
        Un marqueur <meta name="ssg:title"> vivait à cet emplacement et était
        supprimé par onPageRendered (vite.config.ts) après le rendu React. Le HTML
        servi n'avait donc plus le 1er enfant que React attendait → « Expected server
        HTML to contain a matching <meta> in <div> » → hydratation en échec, et la
        racine entière repassait en rendu client sur TOUTES les pages du site.
        Le <title> du SSG se reconstruit désormais depuis og:title, qui reste en place. */}
    <link rel="canonical" href={url} />
    {/* robots hors Helmet : rendu dans Helmet, la balise n'était pas sérialisée
        au SSG, donc un noindex demandé par une page n'atteignait jamais Google. */}
    <meta name="robots" content={noindex ? "noindex,follow" : "index,follow"} />
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