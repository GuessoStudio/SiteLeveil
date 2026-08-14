// src/articles/IntelligenceSociale.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 9 juillet 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "intelligence-sociale-competences-relationnelles",
  title: "Intelligence sociale : 7 compétences relationnelles clés (Daniel Goleman)",
  description: "Intelligence sociale : les 7 compétences relationnelles clés du cadre de Daniel Goleman, ce que le cerveau social valide vraiment et comment les développer.",
  cover: "/images/articles/intelligence-sociale-competences-relationnelles-cover",
  datePublished: "2026-07-09T08:00:00+01:00",
  dateModified: "2026-07-09T08:00:00+01:00",
  tags: ["intelligence sociale", "compétences relationnelles", "Daniel Goleman", "cerveau social", "théorie de l'esprit", "relations humaines", "intelligence émotionnelle", "soft skills"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Relations Humaines",
  readingTime: "10 min",
  version: "1.0",
  verifiedDate: "Juillet 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que l'intelligence sociale exactement ?",
    answer: "L'intelligence sociale est la capacité à comprendre les autres et à agir avec justesse dans une relation. Le psychologue Edward Thorndike l'a définie dès 1920 comme l'art de comprendre les gens et de bien se conduire avec eux. Ce n'est pas être sympa : c'est lire les signaux sociaux, s'y adapter et créer une interaction constructive."
  },
  {
    question: "Quelle est la différence entre intelligence sociale et intelligence émotionnelle ?",
    answer: "L'intelligence émotionnelle concerne surtout ce qui se passe en toi : reconnaître et gérer tes propres émotions. L'intelligence sociale concerne ce qui se passe entre toi et les autres : décoder autrui et ajuster ton comportement. Les deux se recoupent, mais l'une regarde vers l'intérieur, l'autre vers la relation."
  },
  {
    question: "Quelles sont les 7 compétences de l'intelligence sociale selon Daniel Goleman ?",
    answer: "Inspirées du cadre de Goleman et de la recherche relationnelle : la conscience sociale, l'accordage (écouter vraiment), l'exactitude empathique, la cognition sociale (décoder le contexte), la synchronie non-verbale, la présentation de soi et l'influence positive. Goleman les répartit en deux familles : la conscience sociale et l'aisance sociale."
  },
  {
    question: "L'intelligence sociale peut-elle se développer à l'âge adulte ?",
    answer: "Oui, en partie. Les compétences relationnelles sont des comportements qui s'entraînent, comme l'écoute ou la lecture des émotions. Une part de nos aptitudes sociales reste liée au tempérament et à l'histoire de vie, mais le cerveau social garde sa plasticité. On progresse surtout par la pratique répétée en situation réelle, pas par la théorie seule."
  },
  {
    question: "Comment mesure-t-on l'intelligence sociale ?",
    answer: "Par des questionnaires et des tests de décodage social, comme reconnaître une émotion sur un visage ou deviner l'intention d'autrui. Ces outils restent débattus : ils captent une partie du phénomène, pas tout. C'est l'une des raisons pour lesquelles le cadre de Goleman doit être vu comme un modèle utile, pas comme une mesure neurobiologique définitive."
  },
  {
    question: "Quelle partie du cerveau gère l'intelligence sociale ?",
    answer: "Pas une seule zone, mais un réseau appelé cerveau social. Deux régions y sont centrales : le cortex préfrontal médian, à l'avant du cerveau, et la jonction temporo-pariétale, sur le côté. La chercheuse Rebecca Saxe (MIT) a montré que cette dernière s'active de façon particulièrement marquée quand on réfléchit à ce que pense autrui, comme l'un des nœuds clés du réseau."
  },
  {
    question: "Pourquoi l'intelligence sociale est-elle importante au travail ?",
    answer: "Parce que la plupart des métiers reposent sur la coopération. Les compétences socio-émotionnelles, comme lire une équipe ou désamorcer une tension, sont largement considérées comme un atout pour le leadership et le travail collectif. Elles comptent souvent autant que les compétences techniques dès qu'un poste implique de travailler avec d'autres."
  },
  {
    question: "Intelligence sociale et manipulation : quelle différence ?",
    answer: "La manipulation utilise la lecture d'autrui pour l'influencer à son détriment. L'intelligence sociale, telle que la décrit Goleman, inclut la sollicitude : le souci réel de l'autre. La compétence de décodage est la même, mais l'intention diffère. Sans cette dimension éthique, on parle d'habileté sociale, pas d'intelligence sociale au sens plein."
  }
];

// ==================== COMPOSANT ====================

export default function IntelligenceSociale() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
  const url = `${site}/blog/${meta.slug}/`;
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;
  const coverImageUrl = `${site}${meta.cover}.webp`;

  // ==================== SCHEMAS JSON-LD ====================

  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site}/a-propos/#person`,
    name: "Guesso",
    url: `${site}/a-propos/`,
    jobTitle: "Fondateur, L'Éveil Mental",
    worksFor: { "@id": `${site}#organization` }
  };

  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site}#organization`,
    name: "L'Éveil Mental",
    sameAs: [
      "https://www.instagram.com/leveil.officiel/",
      "https://www.facebook.com/profile.php?id=61572902135677",
      "https://x.com/leveilmental",
      "https://www.tiktok.com/@leveil_mental",
      "https://www.youtube.com/channel/UCY4QemAG2QM2NsiofwgKjIQ"
    ],
    url: site,
    logo: {
      "@type": "ImageObject",
      url: `${site}/images/logo.webp`,
      width: 600,
      height: 150
    }
  };

  const schemaImage = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${url}#primaryimage`,
    url: coverImageUrl,
    width: 1200,
    height: 675,
    caption: "Illustration conceptuelle de l'intelligence sociale : plusieurs silhouettes humaines reliées par des fils lumineux autour d'un cerveau central, symbolisant le cerveau social et les compétences relationnelles, sur fond sombre profond"
  };

  const schemaBlogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: meta.title,
    description: meta.description,
    image: { "@id": `${url}#primaryimage` },
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: { "@id": `${site}/a-propos/#person` },
    publisher: { "@id": `${site}#organization` },
    about: {
      "@type": "DefinedTerm",
      name: "Intelligence sociale",
      description: "Capacité à comprendre autrui et à agir avec justesse dans les relations, popularisée par Daniel Goleman, reposant sur le cerveau social (cortex préfrontal médian, jonction temporo-pariétale) et des compétences relationnelles entraînables"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 2500
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog/` },
      { "@type": "ListItem", position: 3, name: "Relations Humaines", item: `${site}/blog/?category=relations-humaines` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 compétences relationnelles de l'intelligence sociale",
    description: "Sept compétences inspirées du cadre de Daniel Goleman et de la recherche sur les relations, présentées comme des comportements entraînables",
    numberOfItems: 7,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "La conscience sociale", description: "Repérer l'état émotionnel d'autrui à partir de son visage, de son ton et de sa posture." },
      { "@type": "ListItem", position: 2, name: "L'accordage", description: "Écouter avec une attention pleine et se rendre réellement présent à l'autre." },
      { "@type": "ListItem", position: 3, name: "L'exactitude empathique", description: "Comprendre correctement ce que l'autre pense et ressent, au-delà des mots." },
      { "@type": "ListItem", position: 4, name: "La cognition sociale", description: "Décoder les règles implicites et le contexte d'une situation pour s'y adapter." },
      { "@type": "ListItem", position: 5, name: "La synchronie non-verbale", description: "Coordonner son langage corporel, son rythme et sa posture avec l'interlocuteur." },
      { "@type": "ListItem", position: 6, name: "La présentation de soi", description: "Se montrer de façon adaptée et authentique, en soignant la première impression." },
      { "@type": "ListItem", position: 7, name: "L'influence positive et la sollicitude", description: "Orienter une interaction vers un résultat constructif, avec un souci réel de l'autre." }
    ]
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  // ==================== RENDU ====================

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        image={og}
        type="article"
        path={`/blog/${meta.slug}`}
        datePublished={meta.datePublished}
        dateModified={meta.dateModified}
        authorName={meta.author?.name}
        tags={meta.tags}
        jsonLd={[schemaPerson, schemaOrganization, schemaImage, schemaBlogPosting, schemaBreadcrumb, schemaItemList, schemaFAQ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane" className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
          <ol className="flex flex-wrap gap-1 items-center">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li className="mx-1">›</li>
            <li><Link to="/blog/" className="hover:underline">Blog</Link></li>
            <li className="mx-1">›</li>
            <li><Link to="/blog/?category=relations-humaines" className="hover:underline">Relations Humaines</Link></li>
            <li className="mx-1">›</li>
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Intelligence sociale</li>
          </ol>
        </nav>

        {/* Badge catégorie */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Relations Humaines
          </span>
          <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs px-3 py-1 rounded-full">
            {meta.readingTime} de lecture
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 leading-tight mb-3">
          Intelligence sociale : 7 compétences relationnelles clés (Daniel Goleman)
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 1993-2013
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> L'intelligence sociale est la capacité à comprendre les autres et à agir avec justesse dans une relation. Popularisée par Daniel Goleman en 2006, elle repose sur le cerveau social (cortex préfrontal médian, jonction temporo-pariétale) et se décline en 7 compétences entraînables : conscience sociale, accordage, exactitude empathique, cognition sociale, synchronie, présentation de soi et influence positive. Ce n'est ni de l'intelligence émotionnelle, ni de la manipulation.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Goleman D., <em>Social Intelligence</em>, 2006 ; Saxe R. &amp; Kanwisher N., <em>NeuroImage</em>, 2003 ; Holt-Lunstad J. et al., <em>PLoS Medicine</em>, 2010.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">+50%</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                La psychologue Julianne Holt-Lunstad (Brigham Young University, États-Unis) a réuni les données de plus de 300 000 personnes suivies pendant des années. Résultat : celles qui entretiennent des relations sociales de qualité s'en sortent nettement mieux sur la durée du suivi, avec une survie associée supérieure d'environ 50 %. C'est une association robuste, pas une garantie individuelle : l'isolement social apparaît comme un facteur de risque majeur pour la santé, d'une ampleur comparable à d'autres grands comportements de santé. Savoir tisser des liens n'est donc pas un simple luxe social.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Holt-Lunstad J., Smith T.B. &amp; Layton J.B., <em>Social Relationships and Mortality Risk</em>, <em>PLoS Medicine</em>, 2010 — DOI : 10.1371/journal.pmed.1000316
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle de l'intelligence sociale : plusieurs silhouettes humaines reliées par des fils lumineux autour d'un cerveau central lumineux, symbolisant le cerveau social et les compétences relationnelles, sur fond sombre profond"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu connais sûrement quelqu'un qui entre dans une pièce et met tout le monde à l'aise en trente secondes. Et peut-être quelqu'un de brillant, diplômé, très compétent, qui pourtant se fâche avec la moitié de ses collègues. La différence entre les deux porte un nom : l'<strong>intelligence sociale</strong>. C'est la capacité à comprendre les autres et à agir avec justesse dans une relation.
          </p>
          <p>
            On la confond souvent avec le fait d'être sympathique, ou avec l'intelligence émotionnelle. C'est plus précis que ça, et surtout, ça se travaille. Depuis les années 1920, les chercheurs tentent de la définir. Le psychologue Daniel Goleman l'a popularisée en 2006 comme un ensemble de compétences relationnelles concrètes et observables.
          </p>
          <p>
            Cet article fait ce que la plupart des pages françaises évitent : séparer clairement l'intelligence sociale de l'intelligence émotionnelle, montrer ce que le cerveau fait vraiment quand tu décodes quelqu'un, puis en tirer 7 compétences à développer. Sans slogan, et sans confondre une théorie populaire avec une preuve neurobiologique. L'intelligence sociale est la compétence qui chapeaute notre <Link to="/blog/guide-communication-interpersonnelle/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">guide de la communication interpersonnelle</Link>.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce que l'intelligence sociale ?</h2>
          <p>
            L'intelligence sociale est la capacité à comprendre autrui et à se conduire habilement dans les relations. C'est le psychologue américain Edward Thorndike (Columbia University, États-Unis) qui a posé le terme dès 1920, en le décrivant comme l'art de comprendre les gens et d'agir sagement avec eux. Presque un siècle plus tard, l'idée tient toujours.
          </p>

          <h3>Intelligence sociale ou intelligence émotionnelle : quelle différence ?</h3>
          <p>
            C'est la confusion la plus fréquente, et la première à lever. L'intelligence émotionnelle regarde surtout vers l'intérieur : reconnaître, comprendre et gérer tes propres émotions. L'intelligence sociale, elle, regarde vers la relation : décoder l'autre et ajuster ton comportement pour que l'échange fonctionne.
          </p>
          <p>
            Une image simple : l'intelligence émotionnelle, c'est ce qui se passe en toi. L'intelligence sociale, c'est ce qui se passe entre toi et l'autre. Tu peux très bien gérer ton stress (émotionnel) et rester maladroit en réunion (social), ou l'inverse. Les deux se recoupent, mais ce ne sont pas les mêmes muscles.
          </p>

          <h3>Le modèle de Daniel Goleman : un cadre, pas une mesure du cerveau</h3>
          <p>
            En 2006, Daniel Goleman, psychologue et ancien journaliste scientifique au <em>New York Times</em>, publie <em>Social Intelligence</em>. Il y range les compétences sociales en deux grandes familles : la <strong>conscience sociale</strong> (ce que je perçois de l'autre) et l'<strong>aisance sociale</strong> (ce que je fais de cette perception dans l'interaction).
          </p>
          <p>
            Un point d'honnêteté, tout de suite. Le cadre de Goleman est utile pour organiser les idées, mais c'est une synthèse grand public, pas une mesure validée en laboratoire. Il faut donc le lire comme une carte pratique, et vérifier ce que les neurosciences confirment vraiment. C'est justement ce qu'on va faire.
          </p>

          {/* H2 — Le cerveau */}
          <h2>Comment le cerveau fabrique-t-il l'intelligence sociale ?</h2>
          <p>
            Comprendre autrui n'a rien de magique : c'est un travail cérébral, réalisé par un ensemble de zones qu'on appelle le cerveau social. Voyons ses deux piliers, puis ce qui, dans tout ça, s'entraîne réellement.
          </p>

          <h3>Le cerveau social : nous sommes câblés pour les autres</h3>
          <p>
            Le neuroscientifique Matthew Lieberman (University of California, Los Angeles, États-Unis) a montré une chose surprenante : dès que ton cerveau est au repos, il se remet spontanément à penser aux autres, à ce qu'ils veulent, ressentent ou pensent. Comme si penser social était son réglage par défaut. C'est pour ça qu'après une réunion tendue, tu continues à ressasser qui a dit quoi, sans le décider.
          </p>
          <p>
            Ce câblage a des limites. Le psychologue britannique Robin Dunbar (aujourd'hui professeur à l'University of Oxford, Royaume-Uni) a comparé la taille du cerveau et la taille des groupes chez de nombreux primates. Il en tire une idée célèbre : en moyenne, nous ne gérons qu'un nombre limité de relations vraiment stables. C'est une estimation théorique, pas un plafond gravé à l'identique dans chaque cerveau. L'intelligence sociale, ce n'est donc pas connaître un maximum de gens, c'est bien gérer ce cercle limité.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">~150</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  C'est le fameux nombre de Dunbar : une estimation théorique d'environ 150 relations stables qu'un humain gère en moyenne, selon les travaux du psychologue Robin Dunbar (aujourd'hui à l'University of Oxford). Ce repère relie la taille du cortex, la partie pensante du cerveau, à notre capacité à suivre un réseau social. Ce n'est pas un plafond biologique identique pour tous, mais un ordre de grandeur. La leçon pour toi : l'intelligence sociale se joue dans la qualité de quelques dizaines de liens, pas dans une collection de contacts.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Dunbar R.I.M., <em>Coevolution of neocortical size, group size and language in humans</em>, <em>Behavioral and Brain Sciences</em>, 1993 — DOI : 10.1017/S0140525X00032325
                </p>
              </div>
            </div>
          </div>

          <h3>Décoder autrui : la « théorie de l'esprit »</h3>
          <p>
            Quand tu devines qu'un ami dit « ça va » alors que ça ne va pas, tu utilises ce que les chercheurs appellent la théorie de l'esprit : la capacité à te représenter ce qui se passe dans la tête de quelqu'un d'autre. C'est le cœur du décodage social, et un réseau cérébral bien identifié s'en charge, avec une région pivot.
          </p>
          <p>
            La chercheuse Rebecca Saxe (Massachusetts Institute of Technology, États-Unis) a mis en évidence le rôle particulier de la jonction temporo-pariétale, une région située sur le côté du crâne, juste au-dessus de l'oreille. Cette zone s'active de façon particulièrement marquée quand on réfléchit aux pensées et aux intentions d'autrui. Ce n'est pas la seule région impliquée : c'est l'un des nœuds centraux d'un réseau plus large. À l'avant du cerveau, le cortex préfrontal médian complète ce travail en intégrant qui est l'autre et le contexte.
          </p>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Nœud<br/>clé</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  En 2003, Rebecca Saxe et Nancy Kanwisher (MIT) ont montré par imagerie cérébrale que la jonction temporo-pariétale droite s'active bien davantage quand on pense à ce que pense autrui que pour de simples informations physiques ou factuelles. Comprendre les autres n'est donc pas un vague talent : le cerveau mobilise un réseau identifiable, dont cette région est l'un des nœuds centraux, chaque fois qu'on tente de deviner une intention.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Saxe R. &amp; Kanwisher N., <em>People thinking about thinking people: the role of the temporo-parietal junction in « theory of mind »</em>, <em>NeuroImage</em>, 2003 — DOI : 10.1016/S1053-8119(03)00230-1
                </p>
              </div>
            </div>
          </div>

          <p>
            À côté de ce circuit du raisonnement, un système plus rapide entre en jeu quand tu ressens presque instantanément l'émotion d'autrui, en partie grâce aux neurones miroirs. C'est un mécanisme distinct, détaillé dans l'article sur l'<Link to="/blog/empathie-neurones-miroirs-connexion-humaine/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">empathie et les neurones miroirs</Link>. Retiens l'idée : le cerveau social combine un décodage réfléchi et un ressenti immédiat.
          </p>

          <h3>Ce qui s'entraîne, et ce qui reste incertain</h3>
          <p>
            Bonne nouvelle : ces circuits gardent leur plasticité, c'est-à-dire leur capacité à se renforcer avec l'usage. Chaque fois que tu écoutes vraiment ou que tu cherches à comprendre le point de vue d'un autre, tu sollicites ce réseau, un peu comme un muscle. Les compétences relationnelles, elles, se travaillent clairement.
          </p>
          <p>
            La prudence porte sur le reste. Une partie de nos aptitudes sociales dépend du tempérament et de l'histoire de vie, et les tests qui mesurent l'intelligence sociale sont encore débattus. On peut donc progresser, sans transformer sa personnalité du jour au lendemain. C'est un entraînement, pas un interrupteur.
          </p>

          {/* H2 — 7 compétences */}
          <h2>Quelles sont les 7 compétences de l'intelligence sociale ?</h2>
          <p>
            Voici sept compétences relationnelles, inspirées du cadre de Goleman et de la littérature sur les relations. Chacune est un comportement concret, qui se pratique. Elles se répartissent entre la conscience sociale (les quatre premières, percevoir) et l'aisance sociale (les trois dernières, agir).
          </p>
          <ol>
            <li>
              <strong>La conscience sociale.</strong> Repérer l'état émotionnel de l'autre à partir de son visage, de son ton et de sa posture. Exemple : tu sens qu'un collègue est contrarié avant même qu'il ait dit un mot. Pour l'entraîner, prends l'habitude de te demander, dans une conversation : « qu'est-ce que cette personne ressent, là, maintenant ? ».
            </li>
            <li>
              <strong>L'accordage.</strong> Écouter avec une attention pleine et se rendre vraiment présent, au lieu de préparer sa réponse. Écouter de cette façon demande une <Link to="/blog/concentration-profonde-deep-work-neurosciences/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">attention soutenue</Link> qui se cultive. C'est le cœur de l'<Link to="/blog/ecoute-active-technique-carl-rogers/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">écoute active de Carl Rogers</Link>. Exemple concret : ranger son téléphone et reformuler ce que l'autre vient de dire avant de répondre.
            </li>
            <li>
              <strong>L'exactitude empathique.</strong> Comprendre correctement ce que l'autre pense et ressent, pas seulement en avoir une vague impression. C'est la théorie de l'esprit en action. Exemple : deviner qu'un « je gère » un peu sec cache en réalité de la fatigue, et adapter ta demande en conséquence.
            </li>
            <li>
              <strong>La cognition sociale.</strong> Décoder les règles implicites d'une situation : les codes, le contexte, ce qui se fait ou non. Exemple : tu n'utilises pas le même ton pour blaguer entre amis et pour intervenir en réunion. L'entraînement passe par l'observation : repère comment les personnes à l'aise ajustent leur registre selon le lieu.
            </li>
            <li>
              <strong>La synchronie non-verbale.</strong> Coordonner son langage corporel, son rythme et sa posture avec l'interlocuteur, sans le singer. Exemple : hocher la tête, se pencher légèrement, ralentir son débit quand l'autre est ému. Cette coordination discrète signale, au niveau du corps, « je suis avec toi ».
            </li>
            <li>
              <strong>La présentation de soi.</strong> Se montrer de façon adaptée et authentique, en soignant la première impression sans jouer un personnage. Exemple : un regard franc, un sourire sincère et une poignée de main assurée en arrivant à un entretien. L'idée n'est pas de tricher, mais de ne pas laisser une timidité masquer qui tu es vraiment.
            </li>
            <li>
              <strong>L'influence positive et la sollicitude.</strong> Orienter une interaction vers un résultat constructif, avec un souci réel de l'autre. C'est ce qui permet de <Link to="/blog/resoudre-un-conflit-methodes-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">désamorcer un conflit</Link> sans écraser personne, et cela suppose d'abord de savoir <Link to="/blog/regulation-emotionnelle-techniques-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">réguler ses propres émotions</Link>. C'est souvent cette compétence, plus que la technique pure, qui distingue un bon leadership et un travail d'équipe qui fonctionne.
            </li>
          </ol>
          <p>
            Ces sept compétences se cumulent : aucune n'est magique isolément, mais ensemble elles rendent une relation fluide. Inutile de toutes les travailler en même temps. Choisis-en une, celle qui te manque le plus, et exerce-la pendant quelques semaines dans tes échanges réels.
          </p>

          {/* H2 — Manipulation */}
          <h2>L'intelligence sociale, est-ce de la manipulation ?</h2>
          <p>
            C'est la question piège, et elle mérite une réponse nette. Lire finement les autres peut servir à les aider comme à les exploiter. La compétence de décodage est la même. Ce qui change, c'est l'intention.
          </p>
          <p>
            La manipulation utilise la lecture d'autrui pour l'influencer à son détriment. L'intelligence sociale, telle que Goleman la décrit, inclut au contraire la <strong>sollicitude</strong> : le souci sincère du bien de l'autre. Sans cette dimension éthique, on ne parle plus d'intelligence sociale, mais d'habileté sociale au service de soi seul. Une personne socialement intelligente cherche des interactions où les deux côtés sortent gagnants, pas où l'un se fait avoir. À l'échelle d'un groupe entier, cette influence prend une autre forme, celle de la <Link to="/blog/influence-sociale-conformisme/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">pression sociale et du conformisme</Link>.
          </p>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce que l'on sait</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200 mb-4">
              <li>✅ L'intelligence sociale est la capacité à comprendre autrui et à agir avec justesse en relation, distincte de l'intelligence émotionnelle.</li>
              <li>✅ Elle repose sur un réseau, le cerveau social : cortex préfrontal médian et jonction temporo-pariétale (Saxe, MIT).</li>
              <li>✅ Elle se décline en 7 compétences entraînables, de la conscience sociale à l'influence positive.</li>
            </ul>
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce qu'il faut nuancer</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>⚠️ Le cadre de Goleman est une synthèse grand public utile, pas une mesure neurobiologique validée.</li>
              <li>⚠️ Une part de nos aptitudes sociales reste liée au tempérament : on progresse, on ne se réinvente pas d'un coup.</li>
              <li>⚠️ La même compétence de décodage peut servir la sollicitude ou la manipulation : c'est l'intention qui fait l'intelligence sociale.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur l'intelligence sociale</h2>
          <div className="not-prose">
            {faqData.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">{item.question}</h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA Lead Magnet */}
          <div className="not-prose my-10 bg-violet-50 dark:bg-violet-950/30 p-6 rounded-xl border border-violet-200 dark:border-violet-800 text-center">
            <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-2">Ressource gratuite</p>
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">Checklist : les 7 compétences de l'intelligence sociale</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 7 compétences relationnelles, le mécanisme cérébral de chacune et un exercice concret par compétence pour muscler ton intelligence sociale au quotidien.
            </p>
            <a
              href="/Downloads/intelligence-sociale-competences-relationnelles-checklist.pdf"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la checklist intelligence sociale (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Thorndike E.L. — <em>Intelligence and its uses</em> — <em>Harper's Magazine</em>, 1920 (origine du concept d'intelligence sociale)
            </li>
            <li>
              [2] Goleman D. — <em>Social Intelligence: The New Science of Human Relationships</em> — Bantam Books, 2006
            </li>
            <li>
              [3] Holt-Lunstad J., Smith T.B. &amp; Layton J.B. — <em>Social Relationships and Mortality Risk: A Meta-analytic Review</em> — <em>PLoS Medicine</em>, vol. 7(7), 2010 — DOI : <a href="https://doi.org/10.1371/journal.pmed.1000316" className="underline" target="_blank" rel="noopener noreferrer">10.1371/journal.pmed.1000316</a>
            </li>
            <li>
              [4] Dunbar R.I.M. — <em>Coevolution of neocortical size, group size and language in humans</em> — <em>Behavioral and Brain Sciences</em>, vol. 16(4), 1993 — DOI : <a href="https://doi.org/10.1017/S0140525X00032325" className="underline" target="_blank" rel="noopener noreferrer">10.1017/S0140525X00032325</a>
            </li>
            <li>
              [5] Saxe R. &amp; Kanwisher N. — <em>People thinking about thinking people: the role of the temporo-parietal junction in « theory of mind »</em> — <em>NeuroImage</em>, vol. 19(4), 2003 — DOI : <a href="https://doi.org/10.1016/S1053-8119(03)00230-1" className="underline" target="_blank" rel="noopener noreferrer">10.1016/S1053-8119(03)00230-1</a>
            </li>
            <li>
              [6] Lieberman M.D. — <em>Social: Why Our Brains Are Wired to Connect</em> — Crown Publishers, 2013
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
