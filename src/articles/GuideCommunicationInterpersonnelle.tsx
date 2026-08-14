// src/articles/GuideCommunicationInterpersonnelle.tsx
// PAGE PILIER (hub) — cluster Relations Humaines
// Optimisé pour : autorité thématique, maillage hub-and-spoke, GEO
// Schema : CollectionPage + ItemList (7 articles) — PAS BlogPosting
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 10 juillet 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "guide-communication-interpersonnelle",
  title: "Communication interpersonnelle : le guide complet (neurosciences et psychologie)",
  description: "Communication interpersonnelle : le guide complet pour améliorer ses relations. Écoute, empathie, CNV, gestion des conflits et intelligence sociale, expliqués par la science.",
  cover: "/images/articles/guide-communication-interpersonnelle-cover",
  datePublished: "2026-07-10T08:00:00+01:00",
  dateModified: "2026-07-10T08:00:00+01:00",
  tags: ["communication interpersonnelle", "relations humaines", "compétences relationnelles", "écoute active", "empathie", "communication non violente", "intelligence sociale", "gestion des conflits"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Relations Humaines",
  readingTime: "7 min",
  version: "1.0",
  verifiedDate: "Juillet 2026"
};

// ==================== SPOKES DU CLUSTER ====================

const spokes = [
  { slug: "ecoute-active-technique-carl-rogers", name: "Écoute active (Carl Rogers)" },
  { slug: "empathie-neurones-miroirs-connexion-humaine", name: "Empathie et neurones miroirs" },
  { slug: "communication-non-violente-cnv", name: "Communication Non-Violente (CNV)" },
  { slug: "methode-acr-repondre-aux-bonnes-nouvelles", name: "Méthode ACR : répondre aux bonnes nouvelles" },
  { slug: "resoudre-un-conflit-methodes-psychologie", name: "Résoudre un conflit" },
  { slug: "influence-sociale-conformisme", name: "Influence sociale et conformisme" },
  { slug: "intelligence-sociale-competences-relationnelles", name: "Intelligence sociale (Goleman)" }
];

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que la communication interpersonnelle ?",
    answer: "La communication interpersonnelle est l'ensemble des échanges verbaux et non-verbaux entre deux personnes ou plus. Elle ne se limite pas aux mots : le ton, le regard, la posture et la capacité à écouter en font partie. C'est une compétence relationnelle qui se travaille, pas un trait de caractère figé, et elle repose sur des mécanismes cérébraux aujourd'hui bien documentés."
  },
  {
    question: "Comment améliorer sa communication interpersonnelle ?",
    answer: "En travaillant des compétences précises plutôt qu'en visant un vague « mieux communiquer ». Les plus utiles : l'écoute active (reformuler avant de répondre), l'empathie, l'expression sans reproche (CNV) et la régulation de ses émotions en cas de tension. Chacune se développe séparément, par la pratique répétée en situation réelle, à tout âge."
  },
  {
    question: "Quelles sont les compétences de communication les plus importantes ?",
    answer: "Sept compétences reviennent dans la recherche : l'écoute active, l'empathie, la communication non violente, la réponse aux bonnes nouvelles, la résolution de conflits, la lucidité face à la pression du groupe et l'intelligence sociale. Elles se répartissent en trois familles : comprendre l'autre, s'exprimer sans blesser, et gérer les tensions."
  },
  {
    question: "Quelle est la différence entre écoute active et empathie ?",
    answer: "L'empathie est une capacité : ressentir ou comprendre l'état émotionnel d'autrui. L'écoute active est un ensemble de techniques (reformulation, silence, questions ouvertes) qui créent les conditions pour que cette empathie s'exprime. On peut pratiquer l'écoute active sans empathie profonde, et être empathique sans maîtriser les techniques d'écoute."
  },
  {
    question: "Comment mieux communiquer en cas de conflit ?",
    answer: "D'abord en attendant que le cerveau redevienne disponible : lors d'un conflit, le stress inhibe le cortex préfrontal pendant plusieurs minutes. Ensuite en reformulant le point de vue de l'autre avant d'exposer le sien, et en séparant les faits de leur interprétation. La communication non violente et l'écoute active sont les deux outils les plus efficaces ici."
  },
  {
    question: "La communication interpersonnelle, ça s'apprend ?",
    answer: "Oui. Ce sont des habitudes relationnelles, pas un don inné. Le cerveau social garde sa plasticité à tout âge : chaque fois qu'on écoute vraiment ou qu'on cherche à comprendre l'autre, on renforce les circuits concernés. Personne ne devient parfait, mais chacun peut progresser nettement avec quelques réflexes bien choisis."
  },
  {
    question: "Communication verbale ou non-verbale : qu'est-ce qui compte le plus ?",
    answer: "Les deux comptent, mais le non-verbal (ton, posture, regard, synchronie) porte une grande part du message émotionnel. On peut dire « je t'écoute » d'un ton distrait et transmettre l'inverse. La cohérence entre ce qu'on dit et ce que montre le corps est souvent plus déterminante que le choix exact des mots."
  },
  {
    question: "Par quel article commencer pour progresser ?",
    answer: "Le meilleur point de départ est l'écoute active : c'est la compétence qui débloque toutes les autres, car sans écoute de qualité, l'empathie et la résolution de conflits restent théoriques. Ensuite, l'article sur la communication non violente donne un cadre concret pour s'exprimer. L'intelligence sociale offre enfin la vue d'ensemble."
  }
];

// ==================== COMPOSANT ====================

export default function GuideCommunicationInterpersonnelle() {
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
    caption: "Illustration conceptuelle de la communication interpersonnelle : plusieurs silhouettes humaines reliées par des faisceaux de lumière formant un réseau d'échanges, symbolisant l'écoute, l'empathie et le lien social, sur fond violet sombre"
  };

  const schemaCollectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url: url,
    name: meta.title,
    description: meta.description,
    inLanguage: "fr-FR",
    dateModified: meta.dateModified,
    datePublished: meta.datePublished,
    isPartOf: { "@id": `${site}#organization` },
    author: { "@id": `${site}/a-propos/#person` },
    primaryImageOfPage: { "@id": `${url}#primaryimage` },
    about: {
      "@type": "DefinedTerm",
      name: "Communication interpersonnelle",
      description: "Ensemble des compétences relationnelles verbales et non-verbales (écoute, empathie, expression, gestion des conflits, intelligence sociale) fondées sur les neurosciences et la psychologie"
    },
    mainEntity: { "@id": `${url}#itemlist` }
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog/` },
      { "@type": "ListItem", position: 3, name: "Relations Humaines", item: `${site}/blog/?category=relations-humaines` },
      { "@type": "ListItem", position: 4, name: "Guide de la communication interpersonnelle", item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name: "Les 7 compétences de la communication interpersonnelle",
    description: "Les 7 articles du guide de la communication interpersonnelle de L'Éveil Mental",
    numberOfItems: spokes.length,
    itemListElement: spokes.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site}/blog/${s.slug}/`,
      name: s.name
    }))
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
        type="website"
        path={`/blog/${meta.slug}`}
        tags={meta.tags}
        category={meta.category}
        jsonLd={[schemaPerson, schemaOrganization, schemaImage, schemaCollectionPage, schemaBreadcrumb, schemaItemList, schemaFAQ]}
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
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Guide communication interpersonnelle</li>
          </ol>
        </nav>

        {/* Badge catégorie */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Guide · Relations Humaines
          </span>
          <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs px-3 py-1 rounded-full">
            {meta.readingTime} de lecture
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 leading-tight mb-3">
          Communication interpersonnelle : le guide complet (neurosciences et psychologie)
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Guide pilier : 7 compétences, 7 articles sources
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> La communication interpersonnelle regroupe toutes les compétences qui rendent nos échanges fluides et nos relations solides. Elle se travaille et repose sur trois briques : comprendre l'autre (écoute, empathie), s'exprimer sans blesser (communication non violente) et gérer les tensions (conflits, pression du groupe). Ce guide réunit les 7 compétences clés, chacune fondée sur les neurosciences et la psychologie, et renvoie vers l'article complet correspondant.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Le socle commun :</strong> le « cerveau social », un réseau câblé pour le lien (cortex préfrontal médian, jonction temporo-pariétale, neurones miroirs).
          </p>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle de la communication interpersonnelle : plusieurs silhouettes humaines reliées par des faisceaux de lumière formant un réseau d'échanges, symbolisant l'écoute, l'empathie et le lien social, sur fond violet sombre"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            On peut être brillant, cultivé, compétent, et pourtant se sentir seul ou mal compris. Ce qui fait la différence dans nos vies, ce n'est pas seulement ce qu'on sait, c'est la qualité de nos échanges. La <strong>communication interpersonnelle</strong> est précisément cette capacité à créer du lien, à se faire comprendre et à comprendre l'autre.
          </p>
          <p>
            Bonne nouvelle : ce n'est pas un don réservé aux extravertis, c'est un ensemble de compétences qui se travaillent, à tout âge. Ce guide est le point d'entrée du site sur le sujet. Il ne remplace pas les articles détaillés : il les relie, en montrant comment chaque compétence s'emboîte dans les autres, et vers quel article aller pour approfondir.
          </p>
          <p>
            Sept compétences, trois familles, un socle commun dans le cerveau. Voici la carte complète.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce que la communication interpersonnelle ?</h2>
          <p>
            La communication interpersonnelle, c'est l'ensemble des échanges, verbaux et non-verbaux, entre deux personnes ou plus. Elle ne se réduit pas aux mots : le ton, le regard, la posture et surtout la capacité à écouter en font partie intégrante. Une phrase juste dite d'un ton méprisant communique du mépris, pas la phrase.
          </p>
          <p>
            Toutes ces compétences partagent un même socle biologique : le « cerveau social ». Le neuroscientifique Matthew Lieberman (UCLA) a montré que notre cerveau est câblé par défaut pour penser aux autres. Comprendre autrui mobilise un réseau dédié, du cortex préfrontal médian à la jonction temporo-pariétale. Autrement dit, nous sommes faits pour le lien, et ce lien s'entretient comme un muscle.
          </p>
          <p>
            Pour s'y retrouver, on peut ranger les compétences relationnelles en trois familles : <strong>comprendre l'autre</strong>, <strong>s'exprimer sans blesser</strong>, et <strong>gérer les tensions</strong>. Ajoutons une compétence qui les chapeaute toutes, l'intelligence sociale. Voyons-les une à une.
          </p>

          {/* H2 — Comprendre l'autre */}
          <h2>Comprendre l'autre : écouter et ressentir</h2>
          <p>
            Tout commence par la réception. Avant de bien parler, il faut savoir écouter et percevoir ce que vit l'autre. Deux compétences forment cette première famille.
          </p>

          <h3>1. L'écoute active</h3>
          <p>
            C'est la compétence fondatrice, celle qui débloque toutes les autres. L'écoute active, formalisée par le psychologue Carl Rogers, repose sur des techniques concrètes : reformuler ce qu'on a compris, laisser des silences, poser des questions ouvertes. Des études par imagerie montrent qu'une écoute de qualité synchronise littéralement les cerveaux de deux interlocuteurs. Sans elle, l'empathie et la résolution de conflits restent des intentions sans effet.
          </p>
          <p>
            <Link to="/blog/ecoute-active-technique-carl-rogers/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium">Lire l'article complet : Écoute active, les 5 techniques de Carl Rogers →</Link>
          </p>

          <h3>2. L'empathie</h3>
          <p>
            L'empathie est la capacité à ressentir ou comprendre l'état émotionnel d'autrui. On la relie souvent aux neurones miroirs, mais la réalité est plus nuancée : c'est un réseau cérébral entier qui s'active, et l'empathie peut même fatiguer si on ne la régule pas. Comprendre ses mécanismes permet de se connecter sincèrement sans s'épuiser, un équilibre essentiel pour ceux qui aident les autres.
          </p>
          <p>
            <Link to="/blog/empathie-neurones-miroirs-connexion-humaine/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium">Lire l'article complet : Empathie et neurones miroirs →</Link>
          </p>

          {/* H2 — S'exprimer */}
          <h2>S'exprimer sans blesser</h2>
          <p>
            Comprendre ne suffit pas : encore faut-il savoir se dire, y compris dans le désaccord, sans abîmer la relation. Deux compétences structurent l'expression.
          </p>

          <h3>3. La Communication Non-Violente (CNV)</h3>
          <p>
            Développée par Marshall Rosenberg, la CNV propose un cadre en quatre étapes (observation, sentiment, besoin, demande) pour exprimer ce qui compte pour soi sans reproche ni jugement. L'idée n'est pas d'être « gentil » à tout prix, mais de remplacer l'accusation (« tu ne m'écoutes jamais ») par une demande claire reliée à un besoin. Des travaux récents documentent son effet sur l'empathie et l'apaisement des tensions.
          </p>
          <p>
            <Link to="/blog/communication-non-violente-cnv/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium">Lire l'article complet : Communication Non-Violente, les 4 étapes OSBD →</Link>
          </p>

          <h3>4. Répondre aux bonnes nouvelles (la méthode ACR)</h3>
          <p>
            On croit que les relations se jouent dans les épreuves. La recherche montre le contraire : la façon dont on réagit aux <em>bonnes</em> nouvelles de l'autre pèse énormément. La réponse active-constructive (ACR) consiste à accueillir la joie de l'autre avec un intérêt sincère plutôt qu'un « ah, cool » distrait. C'est un levier discret mais puissant pour renforcer les liens.
          </p>
          <p>
            <Link to="/blog/methode-acr-repondre-aux-bonnes-nouvelles/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium">Lire l'article complet : La méthode ACR →</Link>
          </p>

          {/* H2 — Gérer les tensions */}
          <h2>Gérer les tensions et la pression du groupe</h2>
          <p>
            Même avec les meilleures intentions, les frictions arrivent, et le groupe exerce sur nous une pression qu'on sous-estime. Deux compétences aident à garder le cap.
          </p>

          <h3>5. Résoudre un conflit</h3>
          <p>
            Lors d'un conflit, le cerveau libère du cortisol en moins de deux minutes, ce qui met le cortex préfrontal hors service : on parle, mais on n'est plus en état de raisonner. La première clé est donc le timing. Ensuite viennent des méthodes validées : reformuler avant de répondre, séparer les faits de leur interprétation, désamorcer les comportements toxiques identifiés par la recherche.
          </p>
          <p>
            <Link to="/blog/resoudre-un-conflit-methodes-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium">Lire l'article complet : Résoudre un conflit, 6 méthodes validées →</Link>
          </p>

          <h3>6. L'influence sociale et le conformisme</h3>
          <p>
            Communiquer, c'est aussi résister à la pression du groupe quand il le faut. Les expériences d'Asch ont montré qu'environ trois personnes sur quatre cèdent au moins une fois à un groupe qui a manifestement tort. Comprendre ce mécanisme, et le distinguer de l'obéissance à l'autorité, aide à garder son cap sans se couper des autres.
          </p>
          <p>
            <Link to="/blog/influence-sociale-conformisme/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium">Lire l'article complet : Influence sociale et conformisme (Asch, Milgram) →</Link>
          </p>

          {/* H2 — Intelligence sociale */}
          <h2>La compétence qui chapeaute tout : l'intelligence sociale</h2>
          <p>
            Au-dessus des six précédentes se trouve une compétence de synthèse : l'intelligence sociale. Popularisée par Daniel Goleman, c'est l'art de comprendre les situations sociales et d'agir avec justesse dans la relation. Elle combine la lecture des signaux, l'accordage, le décodage du contexte et l'influence bienveillante. C'est elle qui transforme des techniques isolées en aisance relationnelle réelle.
          </p>
          <p>
            <Link to="/blog/intelligence-sociale-competences-relationnelles/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium">Lire l'article complet : Intelligence sociale, les 7 compétences clés →</Link>
          </p>

          {/* H2 — Tableau de synthèse */}
          <h2>Tableau de synthèse des 7 compétences</h2>
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-violet-100 dark:bg-violet-900/40">
                  <th className="text-left p-2 font-semibold text-violet-800 dark:text-violet-200 border border-violet-200 dark:border-violet-700">Compétence</th>
                  <th className="text-left p-2 font-semibold text-violet-800 dark:text-violet-200 border border-violet-200 dark:border-violet-700">À quoi ça sert</th>
                  <th className="text-left p-2 font-semibold text-violet-800 dark:text-violet-200 border border-violet-200 dark:border-violet-700">Famille</th>
                </tr>
              </thead>
              <tbody className="text-neutral-700 dark:text-neutral-300">
                <tr><td className="p-2 border border-violet-100 dark:border-violet-800 font-medium">Écoute active</td><td className="p-2 border border-violet-100 dark:border-violet-800">Faire sentir à l'autre qu'il est vraiment entendu</td><td className="p-2 border border-violet-100 dark:border-violet-800">Comprendre</td></tr>
                <tr><td className="p-2 border border-violet-100 dark:border-violet-800 font-medium">Empathie</td><td className="p-2 border border-violet-100 dark:border-violet-800">Ressentir et comprendre l'état de l'autre</td><td className="p-2 border border-violet-100 dark:border-violet-800">Comprendre</td></tr>
                <tr><td className="p-2 border border-violet-100 dark:border-violet-800 font-medium">Communication Non-Violente</td><td className="p-2 border border-violet-100 dark:border-violet-800">Exprimer un besoin sans reproche</td><td className="p-2 border border-violet-100 dark:border-violet-800">S'exprimer</td></tr>
                <tr><td className="p-2 border border-violet-100 dark:border-violet-800 font-medium">Méthode ACR</td><td className="p-2 border border-violet-100 dark:border-violet-800">Renforcer le lien via les bonnes nouvelles</td><td className="p-2 border border-violet-100 dark:border-violet-800">S'exprimer</td></tr>
                <tr><td className="p-2 border border-violet-100 dark:border-violet-800 font-medium">Résolution de conflit</td><td className="p-2 border border-violet-100 dark:border-violet-800">Sortir d'une tension sans l'aggraver</td><td className="p-2 border border-violet-100 dark:border-violet-800">Gérer les tensions</td></tr>
                <tr><td className="p-2 border border-violet-100 dark:border-violet-800 font-medium">Influence sociale</td><td className="p-2 border border-violet-100 dark:border-violet-800">Garder son cap face au groupe</td><td className="p-2 border border-violet-100 dark:border-violet-800">Gérer les tensions</td></tr>
                <tr><td className="p-2 border border-violet-100 dark:border-violet-800 font-medium">Intelligence sociale</td><td className="p-2 border border-violet-100 dark:border-violet-800">Orchestrer toutes les compétences avec justesse</td><td className="p-2 border border-violet-100 dark:border-violet-800">Synthèse</td></tr>
              </tbody>
            </table>
          </div>

          {/* H2 — Par où commencer */}
          <h2>Par où commencer ? Le parcours conseillé</h2>
          <p>
            Inutile de tout travailler d'un coup. Voici un ordre de lecture qui suit une logique d'apprentissage, de la base vers la synthèse :
          </p>
          <ol>
            <li><strong>Commence par l'écoute active.</strong> C'est le socle : sans elle, rien ne tient. La <Link to="/blog/ecoute-active-technique-carl-rogers/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">reformulation miroir</Link> est le premier réflexe à installer.</li>
            <li><strong>Ajoute l'expression, avec la CNV.</strong> Une fois que tu écoutes mieux, apprends à te dire sans blesser grâce aux <Link to="/blog/communication-non-violente-cnv/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">4 étapes de la CNV</Link>.</li>
            <li><strong>Outille-toi pour les tensions.</strong> Quand un désaccord monte, les méthodes de <Link to="/blog/resoudre-un-conflit-methodes-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">résolution de conflit</Link> évitent que ça dérape.</li>
            <li><strong>Prends de la hauteur avec l'intelligence sociale.</strong> Enfin, l'<Link to="/blog/intelligence-sociale-competences-relationnelles/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">intelligence sociale</Link> relie tout et t'aide à ajuster ton comportement au contexte.</li>
          </ol>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>✅ La communication interpersonnelle est un ensemble de compétences qui se travaillent, pas un trait de caractère.</li>
              <li>✅ Elle repose sur trois familles : comprendre l'autre, s'exprimer sans blesser, gérer les tensions.</li>
              <li>✅ Toutes partagent un socle : le cerveau social, câblé pour le lien et plastique à tout âge.</li>
              <li>🔑 Par où commencer : l'écoute active, la compétence qui débloque toutes les autres.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur la communication interpersonnelle</h2>
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
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">La carte des 7 compétences relationnelles</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 7 compétences de la communication interpersonnelle, leur utilité, et le premier réflexe à installer pour chacune. La carte complète de ce guide.
            </p>
            <a
              href="/Downloads/guide-communication-interpersonnelle-carte.pdf"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la carte des 7 compétences (PDF gratuit)
            </a>
          </div>

        </div>
      </article>
    </>
  );
}
