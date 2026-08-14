// src/articles/PenseeCritique.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 10 juillet 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "pensee-critique-developper",
  title: "Pensée critique : développer son jugement selon la psychologie cognitive",
  description: "Pensée critique : comment développer son jugement selon la psychologie cognitive, pourquoi notre raisonnement est biaisé et ce qui aide vraiment à mieux penser.",
  cover: "/images/articles/pensee-critique-developper-cover",
  datePublished: "2026-07-10T08:00:00+01:00",
  dateModified: "2026-07-10T08:00:00+01:00",
  tags: ["pensée critique", "esprit critique", "psychologie cognitive", "raisonnement", "biais de confirmation", "désinformation", "fake news", "rationalité"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Psychologie",
  readingTime: "9 min",
  version: "1.0",
  verifiedDate: "Juillet 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que la pensée critique exactement ?",
    answer: "La pensée critique est la capacité à évaluer une information, un argument ou une croyance de façon rigoureuse, avant d'y adhérer. Ce n'est pas du simple scepticisme ni une attitude de méfiance permanente : c'est une compétence de jugement qui consiste à chercher les preuves, à repérer les failles de raisonnement et à suspendre son avis quand il le faut."
  },
  {
    question: "Quelle est la différence entre pensée critique et intelligence ?",
    answer: "Le QI mesure une puissance de traitement ; la pensée critique mesure si on l'utilise bien. Le psychologue Keith Stanovich a montré que des personnes très intelligentes peuvent raisonner de façon irrationnelle, un phénomène qu'il nomme dysrationalité. Autrement dit, on peut être brillant et tomber quand même dans ses biais. Les deux ne se recouvrent pas."
  },
  {
    question: "Comment développer sa pensée critique au quotidien ?",
    answer: "Par de petits réflexes répétés plutôt que par des astuces miracles. Le plus efficace : avant de croire ou de partager, se demander « est-ce vrai, et comment je le sais ? ». S'y ajoutent chercher activement les avis contraires, argumenter la position adverse, séparer la source de l'affirmation et traquer ce qui pourrait vous donner tort."
  },
  {
    question: "Pourquoi croit-on aux fake news ?",
    answer: "Moins par idéologie qu'on ne le croit. Les travaux de Gordon Pennycook montrent que la croyance aux fausses informations est surtout liée à une pensée peu réflexive, à la réceptivité à des formules creuses et à la surestimation de ses connaissances. La pensée analytique, elle, aide à mieux distinguer le vrai du faux, quel que soit le camp politique."
  },
  {
    question: "Qu'est-ce que le biais de confirmation ?",
    answer: "C'est la tendance à chercher, retenir et interpréter les informations qui confirment ce que l'on croit déjà, en ignorant le reste. Mis en évidence par Peter Wason dans les années 1960, il explique pourquoi une discussion tourne souvent en dialogue de sourds : chacun raisonne pour avoir raison, pas pour tester son idée. C'est l'obstacle numéro un de la pensée critique."
  },
  {
    question: "Peut-on penser de façon parfaitement objective ?",
    answer: "Non, et le prétendre serait déjà un manque de rigueur. Selon la théorie argumentative de Hugo Mercier et Dan Sperber, notre raisonnement a évolué pour défendre nos idées, pas pour être neutre. La bonne nouvelle : ce que l'individu fait mal seul, un groupe qui confronte des arguments le fait souvent mieux. L'objectivité doit beaucoup à la confrontation des points de vue."
  },
  {
    question: "La pensée critique s'apprend-elle à tout âge ?",
    answer: "Oui. Ce sont des habitudes de raisonnement, pas un talent inné. Elles se travaillent par la pratique, à tout âge, comme le suggèrent les recherches sur la pensée activement ouverte. Personne ne devient parfaitement rationnel, mais chacun peut réduire ses erreurs de jugement en installant quelques réflexes et en s'exposant à des avis différents des siens."
  },
  {
    question: "Pourquoi débattre améliore-t-il le raisonnement ?",
    answer: "Parce que seul, on raisonne en avocat de ses propres idées. Mais quand on doit défendre une position devant quelqu'un qui n'est pas d'accord, et évaluer ses contre-arguments, la qualité du jugement s'améliore. Mercier et Sperber ont montré que le raisonnement est d'abord un outil social : il fonctionne mieux dans la confrontation d'arguments que dans l'isolement."
  }
];

// ==================== COMPOSANT ====================

export default function PenseeCritique() {
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
    caption: "Illustration conceptuelle de la pensée critique : une loupe lumineuse survolant un tourbillon de particules d'information et séparant quelques signaux vrais d'un flou de bruit, symbolisant le discernement et le jugement, sur fond violet sombre"
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
      name: "Pensée critique",
      description: "Compétence de jugement permettant d'évaluer rigoureusement une information ou un argument, étudiée par la psychologie cognitive (raisonnement, biais de confirmation, résistance à la désinformation)"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 2200
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog/` },
      { "@type": "ListItem", position: 3, name: "Psychologie", item: `${site}/blog/?category=psychologie` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "6 leviers pour développer sa pensée critique",
    description: "Six habitudes de raisonnement fondées sur la psychologie cognitive (Pennycook, Mercier & Sperber, Stanovich) pour mieux juger, détecter le faux et résister à ses biais",
    numberOfItems: 6,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Le réflexe d'exactitude", description: "Avant de croire ou de partager, se demander « est-ce vrai, et comment je le sais ? »." },
      { "@type": "ListItem", position: 2, name: "La pensée activement ouverte", description: "Chercher volontairement les avis et les preuves qui contredisent le sien." },
      { "@type": "ListItem", position: 3, name: "Argumenter la position adverse", description: "Se forcer à défendre le point de vue opposé pour en tester la solidité." },
      { "@type": "ListItem", position: 4, name: "Séparer la source et l'affirmation", description: "Juger le contenu d'un message, tout en vérifiant la fiabilité de celui qui le diffuse." },
      { "@type": "ListItem", position: 5, name: "La pause avant de partager", description: "Ralentir : une émotion forte, comme l'indignation, est un signal d'alerte, pas une preuve." },
      { "@type": "ListItem", position: 6, name: "Chercher ce qui pourrait te donner tort", description: "Traquer activement les contre-exemples, l'antidote direct au biais de confirmation." }
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
            <li><Link to="/blog/?category=psychologie" className="hover:underline">Psychologie</Link></li>
            <li className="mx-1">›</li>
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Pensée critique</li>
          </ol>
        </nav>

        {/* Badge catégorie */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Psychologie
          </span>
          <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs px-3 py-1 rounded-full">
            {meta.readingTime} de lecture
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 leading-tight mb-3">
          Pensée critique : développer son jugement selon la psychologie cognitive
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2011-2020
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> La pensée critique est la capacité à évaluer une information ou un argument de façon rigoureuse, avant d'y adhérer. Ce n'est ni du simple scepticisme, ni une question de QI : c'est une compétence de jugement qui se développe. Elle recouvre trois choses distinctes : raisonner mieux, détecter le faux et résister à ses propres biais. Le levier le plus efficace tient en un réflexe : se demander « est-ce vrai, et comment je le sais ? ».
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Pennycook &amp; Rand, <em>Journal of Personality</em>, 2020 ; Mercier &amp; Sperber, <em>Behavioral and Brain Sciences</em>, 2011.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">Réfléchir<br/>aide</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                Le psychologue Gordon Pennycook (University of Regina, Canada), spécialiste de la désinformation, a étudié plus de 1 600 personnes pour comprendre qui croit aux fausses informations. Résultat : ce n'est pas le niveau d'intelligence qui protège le mieux, mais une pensée analytique, l'habitude de réfléchir avant de juger. À l'inverse, la tendance à gober des formules creuses et à surestimer ses connaissances va de pair avec une plus grande crédulité. Prendre le temps de réfléchir est associé à un meilleur discernement du vrai et du faux.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Pennycook G. &amp; Rand D.G., <em>Who falls for fake news? The roles of bullshit receptivity, overclaiming, familiarity, and analytic thinking</em>, <em>Journal of Personality</em>, 2020 — DOI : 10.1111/jopy.12476
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle de la pensée critique : une loupe lumineuse survolant un tourbillon de particules d'information et séparant quelques signaux vrais d'un flou de bruit, symbolisant le discernement et le jugement, sur fond violet sombre"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu as déjà partagé un article indigné avant de vérifier, pour découvrir ensuite qu'il était faux ? Ou changé d'avis dans une discussion, non parce qu'on t'a convaincu, mais parce que tu voulais avoir le dernier mot ? Ces situations ont un point commun : elles mettent à l'épreuve ta <strong>pensée critique</strong>, cette capacité à évaluer une information avant d'y croire.
          </p>
          <p>
            On la présente souvent comme une simple attitude sceptique, ou une liste d'astuces à appliquer. La psychologie cognitive dit autre chose : la pensée critique est une vraie compétence de jugement, qu'on peut mesurer et <strong>développer</strong>. Et surtout, elle ne se résume ni à être intelligent, ni à passer en « mode réflexion ».
          </p>
          <p>
            Cet article fait ce que les pages de conseils évitent : définir la pensée critique comme une compétence mesurable, expliquer pourquoi notre raisonnement est biaisé par défaut, et donner 6 leviers concrets pour mieux penser. Sans promettre qu'une astuce suffit à devenir lucide.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce que la pensée critique ?</h2>
          <p>
            La pensée critique, c'est la capacité à évaluer une information, un argument ou une croyance de façon rigoureuse, au lieu de l'accepter (ou de la rejeter) par réflexe. Elle suppose de chercher les preuves, de repérer les failles d'un raisonnement, et d'accepter de suspendre son jugement tant qu'on n'a pas assez d'éléments. Ce n'est pas de la méfiance permanente : c'est de la rigueur.
          </p>

          <h3>Pensée critique n'est pas le QI</h3>
          <p>
            C'est le premier malentendu à lever. Être intelligent ne protège pas des erreurs de jugement. Le psychologue Keith Stanovich (University of Toronto, Canada) a forgé un mot pour ce décalage : la <strong>dysrationalité</strong>, soit l'incapacité à penser rationnellement malgré une intelligence suffisante. On peut avoir un QI élevé et tomber en plein dans ses biais.
          </p>
          <p>
            L'image utile : le QI, c'est la puissance du moteur ; la pensée critique, c'est la qualité de la conduite. Un moteur puissant mal conduit finit dans le fossé. C'est pourquoi des experts brillants défendent parfois des idées fausses avec une belle assurance : leur intelligence sert à mieux justifier leurs erreurs, pas à les corriger. C'est le mécanisme de la <Link to="/blog/dissonance-cognitive-definition-exemples/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">dissonance cognitive</Link> : quand l'acte est posé, le raisonnement se met à son service au lieu de l'examiner.
          </p>

          <h3>Trois choses distinctes : raisonner mieux, détecter le faux, résister à ses biais</h3>
          <p>
            La pensée critique n'est pas une compétence unique, mais trois capacités qui ne vont pas toujours ensemble. <strong>Raisonner mieux</strong> (suivre une logique cohérente), <strong>détecter le faux</strong> (repérer une information erronée ou une source douteuse) et <strong>résister à ses propres biais</strong> (la plus difficile).
          </p>
          <p>
            Concrètement, tu peux être excellent en logique et te faire quand même piéger par une fausse info qui flatte tes opinions. Séparer ces trois niveaux évite la fausse promesse d'une astuce unique. On les travaille séparément, un peu comme on entraîne des muscles différents.
          </p>

          {/* H2 — Pourquoi biaisé */}
          <h2>Pourquoi notre raisonnement est-il biaisé par défaut ?</h2>
          <p>
            La bonne nouvelle, c'est que nos erreurs de jugement ne sont pas aléatoires : elles suivent des schémas connus. La mauvaise, c'est qu'elles sont le réglage par défaut du cerveau. Voyons les deux plus importants.
          </p>

          <h3>Le biais de confirmation : raisonner pour avoir raison</h3>
          <p>
            C'est l'obstacle numéro un. Le <strong>biais de confirmation</strong>, mis en évidence par le psychologue Peter Wason (University College London) dans les années 1960, est notre tendance à chercher et à retenir ce qui confirme ce que l'on croit déjà, en ignorant le reste. C'est ce qui transforme un débat en dialogue de sourds : chacun collectionne les arguments de son camp.
          </p>
          <p>
            On oppose souvent une pensée rapide et intuitive à une pensée lente et réfléchie, une métaphore popularisée par Daniel Kahneman. Elle est utile pour comprendre d'où viennent les biais, mais attention : la pensée critique ne se résume pas à « passer en mode lent ». C'est une porte d'entrée, pas une explication complète. Ce mécanisme rejoint l'ensemble des <Link to="/blog/biais-cognitifs-liste-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">biais cognitifs qui déforment nos décisions</Link>.
          </p>

          <h3>La théorie argumentative : seul on dérape, à plusieurs on s'ajuste</h3>
          <p>
            Et si le raisonnement n'était pas fait pour trouver la vérité tout seul ? C'est la thèse des chercheurs français Hugo Mercier et Dan Sperber. Selon leur <strong>théorie argumentative</strong>, le raisonnement a évolué d'abord pour convaincre les autres et évaluer leurs arguments, pas pour être objectif dans son coin.
          </p>
          <p>
            Cela explique un paradoxe : seul, on raisonne comme un avocat de ses propres idées, avec tous nos biais. Mais placé face à quelqu'un qui n'est pas d'accord, on devient un bien meilleur juge des arguments. C'est pour ça qu'expliquer une idée à voix haute, ou la confronter, révèle souvent ses faiblesses qu'on ne voyait pas seul.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">À<br/>plusieurs</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Les chercheurs Hugo Mercier et Dan Sperber ont proposé une idée qui a marqué la psychologie du raisonnement : nous raisonnons d'abord pour argumenter, pas pour être neutres. C'est pourquoi une personne seule défend surtout ses convictions, alors qu'un groupe qui confronte des arguments contradictoires aboutit souvent à de meilleures conclusions. L'objectivité doit beaucoup à la confrontation des points de vue.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Mercier H. &amp; Sperber D., <em>Why do humans reason? Arguments for an argumentative theory</em>, <em>Behavioral and Brain Sciences</em>, 2011 — DOI : 10.1017/S0140525X10000968
                </p>
              </div>
            </div>
          </div>

          {/* H2 — Fake news */}
          <h2>Pourquoi croit-on aux fake news ? La croyance ne se réduit pas à l'idéologie</h2>
          <p>
            On imagine souvent que si les gens croient aux fausses informations, c'est par aveuglement politique. La recherche nuance fortement cette idée : la croyance aux fake news ne se réduit pas à l'idéologie. Le camp politique joue parfois un rôle, mais il est loin de tout expliquer ; la façon de penser pèse au moins autant.
          </p>
          <p>
            Les travaux de Gordon Pennycook (University of Regina, Canada) montrent que la croyance aux fake news est surtout liée à une pensée peu réflexive : on partage sans s'arrêter pour vérifier. Elle est aussi associée à la réceptivité à des formules qui sonnent profondes mais ne veulent rien dire, et à la tendance à surestimer ce qu'on sait. L'émotion et la simple familiarité jouent aussi, mais le lien n'est pas mécanique : ressentir quelque chose fort n'empêche pas de réfléchir.
          </p>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Un<br/>rappel</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Dans une étude sur plus de 1 700 adultes, l'équipe de Gordon Pennycook a testé une intervention minuscule : rappeler simplement aux gens de penser à l'exactitude avant de partager. Ce petit coup de pouce a suffi à améliorer la qualité de ce qui était partagé et à réduire la diffusion de fausses informations. La leçon est encourageante : il ne faut pas devenir un expert, juste réactiver le réflexe de se demander « est-ce vrai ? ».
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Pennycook G. et al., <em>Fighting COVID-19 Misinformation on Social Media: Experimental Evidence for a Scalable Accuracy-Nudge Intervention</em>, <em>Psychological Science</em>, 2020 — DOI : 10.1177/0956797620939054
                </p>
              </div>
            </div>
          </div>

          <p>
            Cette fragilité est amplifiée par notre environnement numérique, où l'information défile trop vite pour être examinée. C'est le même terrain que celui de l'<Link to="/blog/attention-fragmentee-concentration-numerique/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">attention fragmentée à l'ère des écrans</Link> : moins on a d'attention disponible, plus on partage en pilote automatique.
          </p>

          {/* H2 — 6 leviers */}
          <h2>Comment développer sa pensée critique ? Les 6 leviers</h2>
          <p>
            Voici six habitudes de raisonnement, tirées de la psychologie cognitive. Ce sont des réflexes à installer, pas des recettes magiques. Inutile de tout appliquer d'un coup : commence par une seule, celle qui te parle le plus.
          </p>
          <ol>
            <li><strong>Le réflexe d'exactitude.</strong> Avant de croire ou de partager, pose-toi une question simple : « est-ce vrai, et comment je le sais ? ». On l'a vu, ce petit rappel suffit à réduire nettement le partage de fausses infos.</li>
            <li><strong>La pensée activement ouverte.</strong> Cherche volontairement les avis et les preuves qui te contredisent, au lieu d'attendre qu'ils viennent à toi. C'est inconfortable, mais c'est le cœur d'un jugement solide, aux antipodes du <Link to="/blog/influence-sociale-conformisme/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">conformisme et de la pression du groupe</Link>.</li>
            <li><strong>Argumenter la position adverse.</strong> Force-toi à défendre le point de vue opposé au tien, sincèrement. Si tu n'y arrives pas, c'est que tu ne l'as pas encore compris. Cette technique exploite directement le fait qu'on juge mieux les arguments quand on les confronte.</li>
            <li><strong>Séparer la source et l'affirmation.</strong> Une info peut être vraie même venant d'une source douteuse, et fausse venant d'une source fiable. Évalue les deux : le contenu du message, et le sérieux de celui qui le diffuse. Ne confonds pas « je l'aime bien » avec « il a raison ».</li>
            <li><strong>La pause avant de partager.</strong> Une émotion forte, surtout l'indignation, est un signal d'alerte, pas une preuve. Plus un contenu te fait réagir vite, plus il mérite une vérification lente. Le doute passager face à une bonne nouvelle trop belle est un allié.</li>
            <li><strong>Chercher ce qui pourrait te donner tort.</strong> C'est l'antidote direct au biais de confirmation. Au lieu d'accumuler ce qui te conforte, demande-toi activement : « qu'est-ce qui prouverait que je me trompe ? ». Cette seule question change la façon de s'informer.</li>
          </ol>
          <p>
            Ces six leviers se renforcent mutuellement, et ils se cultivent dans la durée. Ils rejoignent d'ailleurs un état d'esprit plus large, celui du <Link to="/blog/mindset-de-croissance-psychologie-dweck/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">mindset de croissance</Link> : accepter de se tromper, non comme un échec, mais comme une information utile pour ajuster son jugement.
          </p>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce que l'on sait</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200 mb-4">
              <li>✅ La pensée critique est une compétence de jugement mesurable, distincte du QI (Stanovich).</li>
              <li>✅ Elle recouvre trois capacités : raisonner mieux, détecter le faux, résister à ses biais.</li>
              <li>✅ Un simple réflexe d'exactitude réduit le partage de fausses infos (Pennycook).</li>
            </ul>
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce qu'il faut nuancer</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>⚠️ « Passer au Système 2 » est une métaphore utile, pas une définition complète de la pensée critique.</li>
              <li>⚠️ Croire aux fake news ne se réduit pas à l'idéologie : la façon de penser compte davantage.</li>
              <li>⚠️ Personne n'est parfaitement objectif seul : le débat et la confrontation d'arguments aident (Mercier & Sperber).</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur la pensée critique</h2>
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
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">Checklist : penser plus clairement en 6 leviers</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 6 leviers de la pensée critique, le mécanisme cognitif de chacun et une question-clé à se poser avant de croire ou de partager.
            </p>
            <a
              href="/Downloads/pensee-critique-developper-checklist.pdf"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la checklist pensée critique (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Pennycook G. &amp; Rand D.G. — <em>Who falls for fake news? The roles of bullshit receptivity, overclaiming, familiarity, and analytic thinking</em> — <em>Journal of Personality</em>, vol. 88(2), 2020 — DOI : <a href="https://doi.org/10.1111/jopy.12476" className="underline" target="_blank" rel="noopener noreferrer">10.1111/jopy.12476</a>
            </li>
            <li>
              [2] Pennycook G., McPhetres J., Zhang Y., Lu J.G. &amp; Rand D.G. — <em>Fighting COVID-19 Misinformation on Social Media: Experimental Evidence for a Scalable Accuracy-Nudge Intervention</em> — <em>Psychological Science</em>, vol. 31(7), 2020 — DOI : <a href="https://doi.org/10.1177/0956797620939054" className="underline" target="_blank" rel="noopener noreferrer">10.1177/0956797620939054</a>
            </li>
            <li>
              [3] Mercier H. &amp; Sperber D. — <em>Why do humans reason? Arguments for an argumentative theory</em> — <em>Behavioral and Brain Sciences</em>, vol. 34(2), 2011 — DOI : <a href="https://doi.org/10.1017/S0140525X10000968" className="underline" target="_blank" rel="noopener noreferrer">10.1017/S0140525X10000968</a>
            </li>
            <li>
              [4] Stanovich K.E. — <em>What Intelligence Tests Miss: The Psychology of Rational Thought</em> — Yale University Press, 2009 (concept de dysrationalité)
            </li>
            <li>
              [5] Wason P.C. — <em>On the failure to eliminate hypotheses in a conceptual task</em> — <em>Quarterly Journal of Experimental Psychology</em>, 1960 (biais de confirmation)
            </li>
            <li>
              [6] Kahneman D. — <em>Thinking, Fast and Slow</em> — Farrar, Straus and Giroux, 2011 (systèmes 1 et 2, présentés ici comme métaphore)
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
