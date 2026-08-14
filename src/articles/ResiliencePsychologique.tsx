// src/articles/ResiliencePsychologique.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 7 juillet 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "resilience-psychologique-developper",
  title: "Résilience psychologique : les 5 piliers neurobiologiques pour rebondir",
  description: "Résilience psychologique : comment la développer avec un vrai cadre neurobiologique. Circuit préfrontal-amygdale, récupération du cortisol et 5 piliers validés.",
  cover: "/images/articles/resilience-psychologique-developper-cover",
  datePublished: "2026-07-07T08:00:00+01:00",
  dateModified: "2026-07-07T08:00:00+01:00",
  tags: ["résilience psychologique", "développer résilience", "résilience neurosciences", "Boris Cyrulnik", "croissance post-traumatique", "cortex préfrontal", "développement personnel", "cerveau résilient"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Développement Personnel",
  readingTime: "9 min",
  version: "1.0",
  verifiedDate: "Juillet 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que la résilience psychologique exactement ?",
    answer: "La résilience psychologique est la capacité à récupérer, à se réguler et à s'adapter après une épreuve. Ce n'est pas une force innée ni l'absence de souffrance : une personne résiliente réagit au stress, mais son cerveau revient plus vite à l'équilibre. C'est un processus dynamique, qui met en jeu le cortex préfrontal, l'amygdale et l'hippocampe, et qui s'entraîne."
  },
  {
    question: "La résilience est-elle innée ou peut-on la développer ?",
    answer: "On peut la développer. Une partie repose sur le tempérament et l'histoire de vie, mais les recherches de Richard Davidson (University of Wisconsin-Madison) montrent que les circuits de la résilience sont plastiques : ils se renforcent avec l'entraînement. Le contrôle cognitif, la régulation émotionnelle et le soutien social se travaillent, comme un muscle, à tout âge."
  },
  {
    question: "Combien de temps faut-il pour devenir plus résilient ?",
    answer: "Il n'existe pas de délai garanti. Les changements de fonctionnement du cerveau (attention, régulation) apparaissent souvent en quelques semaines de pratique régulière, avant tout changement de structure. La résilience se construit dans la durée, par répétition. Ce qui compte n'est pas la vitesse, mais la régularité des habitudes qui soutiennent la récupération."
  },
  {
    question: "Quelle est la différence entre résilience et résistance au stress ?",
    answer: "La résistance, c'est encaisser sans broncher, parfois en niant l'émotion. La résilience, c'est autre chose : ressentir le choc, puis récupérer et s'adapter. Une personne résiliente n'est pas insensible, elle revient plus vite à l'équilibre. La science mesure d'ailleurs la résilience par la vitesse de retour au calme, pas par l'absence de réaction."
  },
  {
    question: "Le cerveau d'une personne résiliente est-il vraiment différent ?",
    answer: "En partie. Chez des adultes résilients, la recherche observe un hippocampe plus robuste, une meilleure régulation des régions émotionnelles par le cortex préfrontal et une amygdale qui s'habitue mieux au stress répété. Mais ce sont des différences de fonctionnement en réseau, pas un simple « plus de préfrontal égale plus de résilience »."
  },
  {
    question: "Peut-on être résilient et souffrir en même temps ?",
    answer: "Oui, et c'est essentiel à comprendre. La résilience n'est pas l'absence de douleur. Une personne résiliente peut pleurer, avoir peur, traverser une réponse physiologique intense au stress. Ce qui la caractérise, c'est sa capacité à réguler cette réaction et à se relever, pas le fait de ne rien ressentir. Souffrir n'est pas un échec de résilience."
  },
  {
    question: "Qu'est-ce que la croissance post-traumatique ?",
    answer: "La croissance post-traumatique désigne les changements positifs que certaines personnes rapportent après une épreuve : nouvelles priorités, liens plus profonds, sens retrouvé. Le neuropsychiatre Boris Cyrulnik a popularisé cette idée en France. Attention : ce n'est pas automatique ni universel, et cela ne justifie jamais la souffrance. C'est une possibilité, pas une obligation."
  },
  {
    question: "Quels exercices renforcent la résilience au quotidien ?",
    answer: "Cinq leviers reviennent dans la recherche : le recadrage cognitif (réinterpréter une situation), la régulation émotionnelle (nommer et apaiser ses émotions), le soutien social (des liens de qualité), l'activité physique (qui soutient la plasticité) et la recherche de sens. Ce sont des leviers d'entraînement, pas des remèdes miracles, et ils se cumulent dans la durée."
  }
];

// ==================== COMPOSANT ====================

export default function ResiliencePsychologique() {
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
    caption: "Illustration conceptuelle d'une silhouette humaine qui se redresse face à une tempête stylisée, un cerveau lumineux au centre symbolisant la résilience psychologique et la plasticité du cortex préfrontal"
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
      name: "Résilience psychologique",
      description: "Processus neurobiologique de récupération et d'adaptation après l'adversité, impliquant le cortex préfrontal, l'amygdale et l'hippocampe, et les leviers pour le développer"
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
      { "@type": "ListItem", position: 3, name: "Développement Personnel", item: `${site}/blog/?category=developpement-personnel` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "5 piliers pour développer sa résilience psychologique",
    description: "Cinq leviers d'entraînement fondés sur les mécanismes neurobiologiques de la résilience, sans promesse thérapeutique",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Muscler le contrôle cognitif", description: "Le recadrage, réinterpréter une situation, active le cortex préfrontal qui apaise l'amygdale." },
      { "@type": "ListItem", position: 2, name: "Réguler ses émotions", description: "Nommer et moduler une émotion renforce le dialogue entre cortex préfrontal et amygdale." },
      { "@type": "ListItem", position: 3, name: "Cultiver le lien social", description: "Le soutien social de qualité est l'un des facteurs de protection les mieux validés face au stress." },
      { "@type": "ListItem", position: 4, name: "Bouger pour la plasticité", description: "L'activité physique régulière soutient le BDNF et l'hippocampe, clés de l'adaptation du cerveau." },
      { "@type": "ListItem", position: 5, name: "Donner du sens", description: "Réinterpréter l'épreuve et retrouver un sens soutient la récupération, sans en faire une promesse universelle." }
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
            <li><Link to="/blog/?category=developpement-personnel" className="hover:underline">Développement Personnel</Link></li>
            <li className="mx-1">›</li>
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Résilience psychologique</li>
          </ol>
        </nav>

        {/* Badge catégorie */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Développement Personnel
          </span>
          <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs px-3 py-1 rounded-full">
            {meta.readingTime} de lecture
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 leading-tight mb-3">
          Résilience psychologique : les 5 piliers neurobiologiques pour rebondir
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2012-2024
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> La résilience psychologique est la capacité à récupérer et à s'adapter après une épreuve. Ce n'est ni une force innée, ni l'absence de souffrance : c'est un processus qui met en jeu le cortex préfrontal, l'amygdale et l'hippocampe, et qui s'entraîne. On la développe avec 5 leviers : le contrôle cognitif, la régulation émotionnelle, le lien social, l'activité physique et la recherche de sens.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Davidson &amp; McEwen, <em>Nature Neuroscience</em>, 2012 ; <em>The Resilient Emotional Brain</em>, <em>Biological Psychiatry: CNNI</em>, 2020.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">Ça<br/>s'entraîne</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                Le neuroscientifique Richard Davidson (University of Wisconsin-Madison, États-Unis), l'un des pionniers de l'étude des émotions au cerveau, a montré avec Bruce McEwen (Rockefeller University) que les circuits de la résilience sont plastiques. Autrement dit, ils se modifient avec l'entraînement et l'environnement. La résilience n'est donc pas un trait figé qu'on aurait ou non à la naissance : c'est une compétence que le cerveau peut renforcer, à tout âge.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Davidson R.J. &amp; McEwen B.S., <em>Social influences on neuroplasticity: stress and interventions to promote well-being</em>, <em>Nature Neuroscience</em>, 2012 — DOI : 10.1038/nn.3093
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle d'une silhouette humaine qui se redresse face à une tempête stylisée, un cerveau lumineux au centre représentant la résilience psychologique et la plasticité du cortex préfrontal"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu as déjà vu deux personnes traverser la même épreuve, un deuil, un licenciement, une rupture, et t'étonner que l'une s'effondre durablement quand l'autre finit par se relever ? Cette capacité à rebondir porte un nom : la <strong>résilience psychologique</strong>. Et contrairement à ce qu'on lit partout, ce n'est ni une force de caractère réservée à quelques élus, ni le fait de « ne rien ressentir ».
          </p>
          <p>
            Sur internet, la résilience se résume souvent à une liste de conseils : « pense positif », « entoure-toi », « accepte le changement ». Ces conseils ne sont pas faux, mais ils ratent l'essentiel : ce qui se passe réellement dans le cerveau. Or c'est là que tout se joue.
          </p>
          <p>
            Cet article fait ce que la plupart des pages françaises évitent : expliquer la résilience comme un processus concret et mesurable dans le cerveau, puis en tirer 5 leviers pour la développer. Sans slogan, et sans promettre l'invulnérabilité.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce que la résilience psychologique ?</h2>
          <p>
            La résilience psychologique est la capacité à récupérer, à se réguler et à s'adapter après une adversité. Le mot vient de la physique : la résilience, c'est la capacité d'un matériau à reprendre sa forme après un choc. Chez l'humain, c'est la même idée, appliquée au psychisme.
          </p>

          <h3>Un processus dynamique, pas un trait figé</h3>
          <p>
            La première erreur est de voir la résilience comme une qualité qu'on posséderait ou non, une fois pour toutes. La recherche dit l'inverse : c'est un processus qui varie selon les moments, les domaines de vie et l'entraînement. On peut être résilient au travail et fragile dans sa vie amoureuse, résilient à 40 ans après l'avoir peu été à 20.
          </p>
          <p>
            Le neuropsychiatre Boris Cyrulnik (France), qui a popularisé le mot en français à partir de son propre parcours, insiste sur cette idée : la résilience se construit, souvent grâce aux liens et au sens, jamais dans l'isolement. Concrètement, cela veut dire que ton niveau actuel n'est pas une fatalité, c'est un point de départ.
          </p>

          <h3>Résilience n'est pas absence de souffrance</h3>
          <p>
            Voici le malentendu le plus répandu, et le plus toxique. Être résilient ne veut pas dire ne pas souffrir. Une personne résiliente peut pleurer, avoir peur, vivre une réaction de stress intense. Ce qui la distingue, ce n'est pas l'absence de réaction, c'est la <strong>récupération</strong> : sa capacité à revenir à l'équilibre et à s'adapter ensuite.
          </p>
          <p>
            L'image utile : deux personnes reçoivent le même coup. La résilience ne se mesure pas à qui encaisse sans broncher, mais à qui se relève et retrouve son fonctionnement. C'est pourquoi confondre résilience et « force mentale » qui ne flanche jamais est une impasse. La vraie résilience passe par le fait de ressentir, puis de réguler.
          </p>

          {/* H2 — Mécanismes */}
          <h2>Que se passe-t-il dans le cerveau d'une personne résiliente ?</h2>
          <p>
            La résilience n'est pas magique : elle repose sur trois structures cérébrales qui travaillent ensemble. Le cortex préfrontal (à l'avant du cerveau, siège de la réflexion), l'amygdale (le détecteur d'alerte, gros comme une amande) et l'hippocampe (la mémoire). Voyons comment leur dialogue fait la différence.
          </p>

          <h3>Le duo cortex préfrontal-amygdale</h3>
          <p>
            Quand une menace surgit, l'amygdale déclenche l'alarme : cœur qui s'emballe, muscles tendus. Le cortex préfrontal, lui, joue le rôle de frein rationnel : il peut calmer l'amygdale en réévaluant la situation. Chez les personnes qui récupèrent le mieux, ce frein est plus efficace et se remet en marche plus vite après le pic de stress.
          </p>
          <p>
            C'est exactement le circuit décrit dans l'article sur le <Link to="/blog/regulation-emotionnelle-techniques-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">rôle de la régulation émotionnelle</Link>. La bonne nouvelle, on l'a vu avec Davidson : ce dialogue préfrontal-amygdale s'entraîne. Chaque fois que tu réévalues une situation au lieu de subir la panique, tu renforces ce frein, un peu comme un muscle qu'on sollicite.
          </p>

          <h3>L'hippocampe et la mémoire du stress</h3>
          <p>
            L'hippocampe, la structure de la mémoire, est particulièrement sensible au stress. Un stress chronique et non régulé peut l'abîmer, comme le détaille l'article sur le <Link to="/blog/cortisol-stress-chronique-cerveau-memoire/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">cortisol et le stress chronique</Link>. À l'inverse, chez les personnes résilientes, l'hippocampe semble mieux protégé.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">3<br/>zones</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Une revue de 2020 parue dans <em>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</em> a synthétisé le cerveau des adultes restés solides malgré une enfance difficile. Trois constats reviennent : un hippocampe plus robuste, une meilleure mise en sourdine des régions émotionnelles par le cortex préfrontal, et une amygdale qui s'habitue mieux au stress répété. La résilience se lit donc dans un réseau de trois zones, pas dans une seule.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  <em>The Resilient Emotional Brain: A Scoping Review of the Medial Prefrontal Cortex, Amygdala, and Hippocampus in Resilient Adults Exposed to Childhood Maltreatment</em>, <em>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</em>, 2020
                </p>
              </div>
            </div>
          </div>

          <h3>Le cortisol et la vitesse de récupération</h3>
          <p>
            Le cortisol est l'hormone du stress. Longtemps, on a cru que les gens résilients en produisaient simplement moins. La réalité est plus fine, et plus intéressante : ce qui compte, c'est la vitesse à laquelle le cortisol redescend une fois la menace passée.
          </p>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Retour<br/>au calme</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  En 2024, une étude de neuroimagerie a soumis des volontaires à un stress de laboratoire (le Montreal Imaging Stress Task, une tâche conçue pour stresser sous IRM). Les personnes les moins résilientes voyaient leur cortisol grimper et rester haut ; les plus résilientes le voyaient redescendre plus vite vers l'équilibre. La résilience se reflète donc davantage dans la vitesse de retour à l'équilibre après un stress que dans l'absence de réponse au stress elle-même.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  <em>Neural Mechanisms Underlying the Impact of Psychological Resilience on Psychosocial Stress Responses</em>, étude de neuroimagerie humaine (Montreal Imaging Stress Task), 2024
                </p>
              </div>
            </div>
          </div>

          <p>
            Cette nuance change tout. Une personne résiliente n'est pas un roc insensible : son système d'alerte s'active bel et bien. Simplement, il revient plus vite au repos. C'est rassurant, car la vitesse de récupération, elle, se travaille avec les leviers qui suivent.
          </p>

          {/* H2 — 5 piliers */}
          <h2>Comment développer sa résilience psychologique ? Les 5 piliers</h2>
          <p>
            Voici cinq leviers d'entraînement, chacun relié à un mécanisme cérébral vu plus haut. Ce sont des leviers de renforcement, pas des remèdes miracles. En cas de détresse importante, ils s'ajoutent à un accompagnement professionnel, ils ne le remplacent pas.
          </p>
          <ol>
            <li><strong>Muscler le contrôle cognitif (le recadrage).</strong> Réinterpréter une situation (« cet échec m'apprend quelque chose » plutôt que « je suis nul ») active le cortex préfrontal, qui calme l'amygdale. Plus tu t'entraînes à réévaluer, plus ce frein devient rapide.</li>
            <li><strong>Réguler ses émotions.</strong> Nommer une émotion (« là, je ressens de la peur ») réduit déjà son intensité. C'est le socle des techniques détaillées dans l'article sur la régulation émotionnelle : tu apprends à ressentir sans te laisser submerger.</li>
            <li><strong>Cultiver le lien social.</strong> Le soutien social de qualité est l'un des facteurs de protection les mieux validés face au stress. Ce n'est pas le nombre de contacts qui compte, mais la présence de liens fiables. L'ocytocine, l'hormone du lien, joue ici un rôle de soutien, en atténuant la réaction de stress.</li>
            <li><strong>Bouger pour la plasticité.</strong> L'activité physique régulière soutient la production de BDNF, une protéine qui entretient les neurones, et protège l'hippocampe. Pas besoin de performance : de la marche rapide régulière suffit à soutenir le terrain de la résilience.</li>
            <li><strong>Donner du sens.</strong> Retrouver un sens après une épreuve, ce que Boris Cyrulnik relie à la croissance post-traumatique, soutient la récupération. Attention : ce n'est ni automatique ni obligatoire, et cela ne justifie jamais la souffrance. C'est une possibilité, pas une injonction.</li>
          </ol>
          <p>
            Ces cinq piliers se cumulent. Aucun n'est magique isolément, mais ensemble ils entretiennent les circuits de la récupération. C'est aussi pourquoi ils recoupent les stratégies utiles face à l'<Link to="/blog/anxiete-mecanismes-neurologiques-solutions-scientifiques/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">anxiété</Link> et au <Link to="/blog/burn-out-signaux-neurobiologiques-recuperation/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">burn-out</Link> : dans les trois cas, on travaille la capacité du cerveau à revenir à l'équilibre.
          </p>

          {/* H2 — Ce que la résilience n'est pas */}
          <h2>Ce que la résilience n'est pas</h2>
          <p>
            Pour finir de casser les idées reçues, voici trois choses que la résilience n'est pas. Les garder en tête protège des promesses excessives et de la culpabilité inutile.
          </p>

          <h3>Ni un slogan</h3>
          <p>
            « Ce qui ne te tue pas te rend plus fort » est une formule, pas une science. Certaines épreuves fragilisent durablement, et c'est normal. La résilience n'est pas une injonction à transformer chaque malheur en leçon. La présenter ainsi ajoute de la pression à des personnes déjà en souffrance.
          </p>

          <h3>Ni une invulnérabilité</h3>
          <p>
            Une personne résiliente n'est pas blindée. Elle a des limites, des jours sans, des blessures. Croire qu'être résilient signifie « ne jamais craquer » est faux et dangereux, car cela pousse à ignorer les signaux d'alerte. Le syndrome de l'imposteur, par exemple, touche aussi des personnes très solides par ailleurs, comme le montre l'article sur le <Link to="/blog/syndrome-imposteur-solutions/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">syndrome de l'imposteur</Link>.
          </p>

          <h3>Ni l'absence de réaction</h3>
          <p>
            On l'a vu avec le cortisol : le cerveau résilient réagit au stress, il revient simplement plus vite au calme. Une personne qui ne ressent « rien » n'est pas plus résiliente, elle est peut-être en train de refouler. La régulation saine passe par le fait de reconnaître l'émotion, pas de la nier.
          </p>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce que l'on sait</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200 mb-4">
              <li>✅ La résilience est un processus de récupération et d'adaptation, pas un trait figé ni l'absence de souffrance.</li>
              <li>✅ Elle repose sur un réseau : cortex préfrontal, amygdale, hippocampe, et sur la vitesse de retour à l'équilibre.</li>
              <li>✅ Elle s'entraîne (Davidson) avec 5 leviers : contrôle cognitif, régulation émotionnelle, lien social, activité physique, sens.</li>
            </ul>
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce que l'on ne sait pas encore</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>⚠️ Pas de relation simple « plus de préfrontal = plus de résilience » : ce sont des réseaux, pas une cause unique.</li>
              <li>⚠️ Aucun délai garanti pour « devenir résilient » : la régularité compte plus que la vitesse.</li>
              <li>⚠️ La croissance post-traumatique existe, mais elle n'est ni automatique ni universelle.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur la résilience psychologique</h2>
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
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">Checklist : renforcer sa résilience en 5 piliers</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 5 leviers d'entraînement, le mécanisme cérébral de chacun et un exercice concret par pilier pour muscler ta récupération.
            </p>
            <a
              href="/Downloads/resilience-psychologique-developper-checklist.pdf"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la checklist résilience (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Davidson R.J. &amp; McEwen B.S. — <em>Social influences on neuroplasticity: stress and interventions to promote well-being</em> — <em>Nature Neuroscience</em>, vol. 15(5), 2012 — DOI : <a href="https://doi.org/10.1038/nn.3093" className="underline" target="_blank" rel="noopener noreferrer">10.1038/nn.3093</a>
            </li>
            <li>
              [2] <em>The Resilient Emotional Brain: A Scoping Review of the Medial Prefrontal Cortex, Amygdala, and Hippocampus in Resilient Adults Exposed to Childhood Maltreatment</em> — <em>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</em>, 2020
            </li>
            <li>
              [3] Southwick S.M. &amp; Charney D.S. — <em>Resilience: The Science of Mastering Life's Greatest Challenges</em> — Cambridge University Press (éditions 2012 et 2023)
            </li>
            <li>
              [4] <em>Neural Mechanisms Underlying the Impact of Psychological Resilience on Psychosocial Stress Responses</em> — étude de neuroimagerie humaine (Montreal Imaging Stress Task), 2024
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
