// src/articles/RoutineMatinaleScientifique.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 17 mai 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "routine-matinale-scientifique-cerveau",
  title: "Routine matinale : ce que la neurologie dit des 90 premières minutes",
  description: "Routine matinale scientifique : CAR, lumière circadienne, BDNF. Ce que la neurologie dit des 90 premières minutes après le réveil. Guide 2026 avec sources.",
  cover: "/images/articles/routine-matinale-scientifique-cerveau-cover",
  datePublished: "2026-05-17T08:00:00+01:00",
  dateModified: "2026-05-17T08:00:00+01:00",
  tags: ["routine matinale", "neurosciences", "cortisol awakening response", "cerveau", "développement personnel", "horloge circadienne", "CAR"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Développement Personnel",
  readingTime: "13 min",
  version: "1.0",
  verifiedDate: "Mai 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Quelle est la meilleure routine matinale selon la science ?",
    answer: "La science ne prescrit pas une liste universelle. Elle identifie une fenêtre biologique critique dans les 90 premières minutes après le réveil, pilotée par la Cortisol Awakening Response. Les pratiques les mieux documentées : lumière naturelle dans les 15 premières minutes, hydratation immédiate, mouvement physique léger, café différé de 90 minutes, intention cognitive avant les notifications."
  },
  {
    question: "Qu'est-ce que la Cortisol Awakening Response (CAR) ?",
    answer: "La CAR est une élévation naturelle et programmée du cortisol dans les 30 à 45 premières minutes après le réveil. Elle représente une hausse de 50 à 150% au-dessus du niveau basal. Ce n'est pas du stress : c'est le mécanisme par lequel l'organisme prépare ses ressources cognitives, métaboliques et immunitaires pour la journée à venir, orchestré par le noyau suprachiasmatique."
  },
  {
    question: "Pourquoi regarder son téléphone le matin est-il nocif pour le cerveau ?",
    answer: "Consulter les réseaux sociaux ou les emails dans les premières minutes active l'amygdale (la zone de détection des menaces) avant que la CAR ait terminé son travail de préparation cognitive. Le cerveau se retrouve en mode réactif avant d'avoir établi son mode exécutif. Le résultat est une attention fragmentée et une concentration réduite pendant les heures suivantes."
  },
  {
    question: "Faut-il se lever tôt pour avoir une bonne routine matinale ?",
    answer: "Non. L'heure de réveil dépend du chronotype biologique, déterminé en partie génétiquement. Ce qui compte n'est pas l'heure absolue, mais la cohérence : se lever à la même heure chaque jour stabilise la CAR et l'horloge circadienne. Un réveil tardif avec une routine cohérente surpasse un réveil précoce chaotique."
  },
  {
    question: "Quel est le protocole matinal d'Andrew Huberman et est-il validé scientifiquement ?",
    answer: "Andrew Huberman (Stanford University) recommande la lumière naturelle dans les 30 premières minutes, différer le café, et de l'exercice matinal. Ces conseils sont globalement cohérents avec la littérature scientifique sur la CAR et les rythmes circadiens. Huberman est un vulgarisateur sérieux mais pas l'auteur des études qu'il cite : toujours vérifier les sources primaires."
  },
  {
    question: "Pourquoi faut-il différer son café de 90 minutes après le réveil ?",
    answer: "La caféine bloque les récepteurs de l'adénosine, la molécule de pression de sommeil. Au réveil, la CAR produit naturellement de l'énergie via le cortisol. Boire du café immédiatement superpose deux stimulants et crée une tolérance plus rapide. Attendre 90 minutes laisse la CAR accomplir son pic naturel avant l'intervention de la caféine."
  },
  {
    question: "Comment l'exercice matinal améliore-t-il la concentration dans la journée ?",
    answer: "L'exercice aérobie déclenche la sécrétion de BDNF (Brain-Derived Neurotrophic Factor), une protéine qui renforce les connexions entre neurones dans le cortex préfrontal. Cette zone contrôle l'attention, la décision et la régulation émotionnelle. L'effet cognitif dure plusieurs heures après l'effort. 10 à 20 minutes de mouvement suffisent pour déclencher ce mécanisme."
  },
  {
    question: "Combien de temps faut-il pour qu'une routine matinale devienne automatique ?",
    answer: "Les travaux de Phillippa Lally (University College London) montrent que l'automatisation d'un comportement prend en moyenne 66 jours, avec une plage de 18 à 254 jours selon la complexité et les différences individuelles. Les trois premières semaines sont les plus difficiles : la résistance diminue progressivement ensuite. Commencer par une seule pratique est plus efficace que tout changer d'un coup."
  }
];

// ==================== COMPOSANT ====================

export default function RoutineMatinaleScientifique() {
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
    height: 630,
    caption: "Illustration conceptuelle de la routine matinale et de la Cortisol Awakening Response : silhouette humaine baignée de lumière dorée au réveil, horloge circadienne abstraite en arrière-plan, fond sombre indigo profond"
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
      name: "Cortisol Awakening Response",
      description: "Mécanisme neurobiologique produisant une élévation programmée du cortisol de 50 à 150% dans les 30 à 45 premières minutes après le réveil, orchestré par le noyau suprachiasmatique"
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
      { "@type": "ListItem", position: 3, name: "Développement Personnel", item: `${site}/blog/?category=developpement-personnel` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "5 pratiques matinales validées par la neurobiologie",
    description: "Pratiques documentées par la recherche en neurosciences pour optimiser la Cortisol Awakening Response et les 90 premières minutes après le réveil",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Lumière naturelle dans les 15 premières minutes",
        description: "L'exposition à la lumière du jour active les cellules ipRGC de la rétine, connectées au noyau suprachiasmatique, pour synchroniser l'horloge biologique et amplifier la CAR."
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hydratation immédiate",
        description: "Après 7 à 9 heures sans eau, une légère déshydratation réduit le volume sanguin. Boire 300 à 500 ml dès le réveil soutient le transport du cortisol et la vigilance cognitive."
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mouvement physique minimal",
        description: "10 à 20 minutes d'activité aérobie légère augmentent la sécrétion de BDNF, une protéine qui renforce les connexions du cortex préfrontal et améliore la concentration dans les heures suivantes."
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Différer le café de 90 minutes",
        description: "Attendre 90 minutes après le réveil laisse la CAR produire son pic naturel. La caféine intervient ensuite au bon moment, prolongeant la vigilance sans interférer avec le mécanisme naturel."
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Une seule intention cognitive avant les notifications",
        description: "Fixer une tâche prioritaire avant d'ouvrir emails ou réseaux sociaux active le cortex préfrontal en mode proactif plutôt qu'en mode réactif, préservant les ressources cognitives de la matinée."
      }
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
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Routine matinale scientifique</li>
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
          Routine matinale : ce que la neurologie dit des 90 premières minutes
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2023-2025
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> Dans les 30 à 45 minutes après le réveil, le cortisol monte naturellement de 50 à 150%. Ce mécanisme biologique, appelé CAR (Cortisol Awakening Response), prépare les ressources cognitives de la journée. Cinq pratiques documentées permettent de l'optimiser : lumière naturelle, hydratation, mouvement, café différé, intention cognitive avant les notifications.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Stalder T., Oster H. et al., <em>Endocrine Reviews</em>, 2025 ; <em>Communications Psychology</em>, Nature Publishing Group, 2025 (n=58).
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">+50<br/>à<br/>+150%</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                La Cortisol Awakening Response produit une élévation programmée du cortisol de 50 à 150% dans les 30 à 45 premières minutes après le réveil. Ce pic est orchestré par le noyau suprachiasmatique, l'horloge biologique centrale du cerveau. Une CAR aplatie est associée au burnout et aux troubles de l'axe hypothalamo-hypophyso-surrénalien.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Stalder T., Oster H., Abelson J.L. et al., Université de Siegen / Université de Lübeck, <em>Endocrine Reviews</em>, vol. 46(1), févr. 2025 (en ligne août 2024) — DOI : 10.1210/endrev/bnae024
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle de la routine matinale et de la Cortisol Awakening Response : silhouette humaine baignée de lumière dorée au réveil, horloge circadienne abstraite en arrière-plan représentant le noyau suprachiasmatique, fond sombre indigo profond"
            className="w-full h-auto object-cover"
            width={1200}
            height={630}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu as déjà remarqué que certains matins tu es opérationnel en dix minutes, et d'autres fois tu mets des heures à vraiment démarrer ? Ce n'est pas une question de volonté. C'est de la biologie.
          </p>
          <p>
            Les <strong>90 premières minutes après le réveil</strong> constituent une fenêtre neurobiologique distincte du reste de la journée. Pendant cette période, ton cerveau traverse une cascade de mécanismes programmés, pilotés par ton horloge biologique interne. Ce que tu fais pendant cette fenêtre influence directement ta vigilance, ta concentration et ta capacité de décision pendant les 4 à 6 heures suivantes.
          </p>
          <p>
            Aucun des cinq premiers résultats Google sur ce sujet ne couvre ce mécanisme. La plupart proposent des listes de conseils sans expliquer le pourquoi biologique. Cet article part des neurosciences pour arriver aux pratiques.
          </p>

          {/* H2 — CAR */}
          <h2>Qu'est-ce que la CAR et pourquoi pilote-t-elle votre journée ?</h2>

          <h3>Le pic de cortisol au réveil : +50 à +150% en 30 minutes</h3>
          <p>
            Tu as déjà entendu que le cortisol est "l'hormone du stress". C'est exact, mais incomplet. Le cortisol est aussi l'hormone de la mobilisation énergétique. Et chaque matin, ton corps déclenche une élévation programmée de cette hormone, qu'on appelle la <strong>CAR</strong> (Cortisol Awakening Response, ou réponse cortisolique au réveil).
          </p>
          <p>
            Dans les 30 à 45 premières minutes après que tu ouvres les yeux, le taux de cortisol dans ton sang monte de 50 à 150% au-dessus de son niveau de base. Puis il redescend progressivement sur plusieurs heures.
          </p>
          <p>
            Concrètement : imagine que ton cerveau démarre un moteur chaque matin. La CAR est le préchauffage. Elle prépare tes ressources cognitives, métaboliques et immunitaires avant que tu aies à les mobiliser. Sans cette montée, tu fonctionnes comme une voiture démarrée à froid et poussée immédiatement à fond.
          </p>

          <h3>Le noyau suprachiasmatique : l'horloge interne qui orchestre tout</h3>
          <p>
            Mais qui déclenche la CAR ? Une minuscule structure dans ton cerveau : le <strong>noyau suprachiasmatique</strong> (NSC). C'est un groupe d'environ 20 000 neurones situé juste au-dessus du croisement des nerfs optiques, derrière les yeux.
          </p>
          <p>
            Russell Foster (University of Oxford, Royaume-Uni), chercheur en chronobiologie, le décrit comme le synchroniseur central de toutes les horloges de l'organisme sur un cycle de 24 heures. C'est lui qui donne le signal de démarrage de la CAR, environ 30 minutes avant l'heure habituelle de ton réveil.
          </p>
          <p>
            Cette précision est importante : le NSC <em>anticipe</em> ton réveil. Il ne réagit pas à l'éveil, il le prépare. C'est pourquoi se lever à la même heure chaque jour renforce la CAR : le NSC apprend l'heure et optimise son signal.
          </p>
          <p>
            Une étude de 2025 de l'Université de Bristol apporte une nuance importante. Klaas et al. (Proceedings of the Royal Society B, N=201) ont mesuré le cortisol en continu avant et après le réveil, grâce à un système de microdialyse automatisé. Résultat : la montée du cortisol ne s'accélère pas au moment précis de l'éveil. Elle commence en réalité dans les premières heures du matin, pilotée par le rythme circadien, avant même que tu te réveilles. Ce que l'on appelle "CAR" serait donc la fin d'une montée circadienne nocturne, et non une réponse déclenchée par l'éveil lui-même. Cette nuance ne change pas les pratiques recommandées dans cet article. Elle change le cadrage : la montée cortisolique matinale est un mécanisme circadien de fond, et ton réveil s'inscrit dans cette vague plutôt qu'il ne la déclenche. Ce qui renforce encore davantage l'importance de la régularité des horaires de sommeil.
          </p>

          <h3>Pourquoi la CAR n'est pas du stress</h3>
          <p>
            Beaucoup de gens évitent tout ce qui touche au cortisol, comme s'il était toujours néfaste. C'est une confusion fréquente. Il existe deux types d'élévation du cortisol.
          </p>
          <p>
            La CAR est une élévation <em>adaptative</em> : programmée, limitée dans le temps, et bénéfique. Elle mobilise l'énergie, affûte l'attention et prépare le système immunitaire. Le stress chronique, lui, produit une élévation <em>réactive</em> et prolongée, qui finit par endommager le cerveau, notamment l'hippocampe (la zone de la mémoire). Pour aller plus loin sur cette distinction, l'article sur <Link to="/blog/cortisol-stress-chronique-cerveau-memoire/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">les effets du cortisol chronique sur le cerveau et la mémoire</Link> couvre les mécanismes précis.
          </p>
          <p>
            En résumé : la montée du cortisol au réveil est un signal de santé, pas un signal d'alarme.
          </p>

          {/* H2 — 90 premières minutes */}
          <h2>Comment les 90 premières minutes reprogramment-elles le cerveau ?</h2>

          <h3>La lumière matinale et les cellules ipRGC</h3>
          <p>
            Tu as peut-être entendu que la lumière du matin est importante. Voici le mécanisme précis.
          </p>
          <p>
            Ta rétine contient un type spécial de cellules : les <strong>cellules ipRGC</strong> (cellules ganglionnaires rétiniennes photosensibles intrinsèquement). Ce sont des capteurs de lumière directement connectés au noyau suprachiasmatique. Elles ne servent pas à voir des images. Elles servent à <em>calibrer l'heure biologique</em>.
          </p>
          <p>
            Quand la lumière naturelle atteint ces cellules le matin, elles envoient un signal au NSC : "il fait jour, synchronise l'horloge". Ce signal amplifie la CAR, accélère la dégradation de la mélatonine (l'hormone du sommeil) et déclenche la montée de la vigilance cognitive.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">7j<br/>n=58</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Suivi de 58 adultes pendant 7 jours en vie réelle : une exposition lumineuse diurne plus intense et moins fragmentée est associée à de meilleures performances de mémoire de travail, de vigilance et de recherche visuelle. Les couchers plus précoces amplifient l'effet. L'intensité lumineuse compte autant que la durée d'exposition.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  <em>Communications Psychology</em> (Nature Publishing Group), déc. 2025 — DOI : 10.1038/s44271-025-00373-9
                </p>
              </div>
            </div>
          </div>

          <p>
            En pratique : sortir dehors, ou s'asseoir face à une fenêtre ouverte dans les 15 premières minutes après le réveil. Même par temps nuageux, la lumière naturelle extérieure atteint 10 000 lux. La lumière intérieure plafonne à 200-500 lux. La différence est biologiquement significative pour les cellules ipRGC.
          </p>

          <h3>Pourquoi le téléphone au réveil court-circuite ce mécanisme</h3>
          <p>
            Tu consultes ton téléphone dans les premières minutes après le réveil ? Voici ce qui se passe dans ton cerveau à ce moment précis.
          </p>
          <p>
            Les notifications sociales, les emails et les actualités activent ton <strong>amygdale</strong> (une petite structure en forme d'amande au centre du cerveau, qui détecte les menaces). L'amygdale déclenche une réponse de stress réactif : montée d'adrénaline et de cortisol "d'alarme", avant que la CAR adaptative ait terminé son travail de préparation.
          </p>
          <p>
            Résultat : ton cortex préfrontal, la zone de décision et de concentration, se retrouve en mode réactif avant d'avoir établi son mode exécutif. Tu passes la matinée à répondre au monde extérieur au lieu de travailler sur ce qui compte. L'<Link to="/blog/attention-fragmentee-concentration-numerique/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">attention fragmentée par les écrans numériques</Link> commence souvent dès les premières secondes du réveil.
          </p>
          <p>
            La règle : pas d'écran pendant les 30 premières minutes. Pas parce que c'est une bonne habitude en général. Parce que le mécanisme biologique de préparation cognitive n'a pas encore terminé son cycle.
          </p>

          <h3>L'exercice matinal, le BDNF et le cortex préfrontal</h3>
          <p>
            Tu as peut-être remarqué que tu penses plus clairement après une marche ou un footing matinal. Il y a un mécanisme précis derrière cette observation.
          </p>
          <p>
            L'exercice aérobie déclenche la sécrétion de <strong>BDNF</strong> (Brain-Derived Neurotrophic Factor, ou facteur neurotrophique dérivé du cerveau). C'est une protéine qui agit comme un engrais pour les neurones : elle renforce les connexions entre cellules nerveuses, notamment dans le cortex préfrontal, la zone du cerveau qui contrôle l'attention, la prise de décision et la régulation émotionnelle.
          </p>
          <p>
            Cet effet cognitif dure plusieurs heures après l'effort. Pour comprendre les 8 façons d'augmenter naturellement le BDNF, l'article sur <Link to="/blog/bdnf-augmenter-naturellement-neurosciences/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">le BDNF et la neurogenèse</Link> détaille les protocoles validés.
          </p>
          <p>
            Bonne nouvelle : l'effet ne nécessite pas une séance intense. 10 à 20 minutes de marche rapide, de vélo ou de yoga dynamique suffisent à déclencher une sécrétion mesurable de BDNF. L'intensité modérée est aussi efficace que l'intensité élevée pour cet effet cognitif spécifique.
          </p>

          {/* H2 — Ce qui sabote */}
          <h2>Qu'est-ce qui sabote votre CAR sans que vous le sachiez ?</h2>

          <h3>L'exercice intense le soir réduit la CAR du lendemain</h3>
          <p>
            Voici un résultat contre-intuitif que les articles sur la routine matinale n'abordent jamais.
          </p>
          <p>
            Un entraînement très intense en soirée produit une forte élévation du cortisol pendant l'effort. Mais le lendemain matin, la CAR est significativement réduite. Le corps semble avoir mobilisé une partie de sa réserve de signal cortisol la veille au soir.
          </p>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">CAR<br/>réduite</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Un exercice intense en soirée (à environ 87% de la fréquence cardiaque maximale) entraîne le lendemain matin une CAR significativement réduite. Autrement dit : s'épuiser intensément le soir aplatit le pic de cortisol naturel du réveil, avec un impact direct sur la vigilance cognitive de la matinée suivante.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  <em>European Journal of Applied Physiology</em>, mai 2023 — DOI : 10.1007/s00421-023-05132-4
                </p>
              </div>
            </div>
          </div>

          <p>
            Ce n'est pas une raison d'arrêter le sport le soir. C'est une raison de calibrer l'intensité. Les séances légères à modérées le soir n'ont pas cet effet. Si tu constates que tu es particulièrement lent le matin après un entraînement nocturne poussé, ce mécanisme en est probablement la cause.
          </p>

          <h3>Le café immédiat au réveil : le paradoxe de l'adénosine</h3>
          <p>
            C'est l'un des conseils les moins populaires, et l'un des mieux fondés biologiquement.
          </p>
          <p>
            Pendant ton sommeil, une molécule s'accumule dans ton cerveau : l'<strong>adénosine</strong>. C'est le signal chimique de la pression de sommeil. Plus elle s'accumule, plus tu as envie de dormir. Au réveil, cette pression est à son maximum.
          </p>
          <p>
            La caféine fonctionne en <em>bloquant</em> les récepteurs de l'adénosine. Elle ne supprime pas la fatigue : elle empêche ton cerveau de la détecter, temporairement. Quand l'effet se dissipe, l'adénosine bloquée se libère d'un coup, ce qui produit le crash d'après-café que beaucoup connaissent.
          </p>
          <p>
            Si tu bois du café immédiatement au réveil, tu superposes deux stimulants : la CAR qui monte naturellement, et la caféine. Le résultat est une tolérance qui s'installe plus vite. En attendant 90 minutes, tu laisses la CAR accomplir son pic naturel, puis tu utilises la caféine là où elle est vraiment utile : quand le cortisol naturel commence à redescendre.
          </p>

          <h3>Le manque de sommeil aplatit la CAR</h3>
          <p>
            C'est le facteur le plus simple et le plus souvent ignoré dans les discussions sur la routine matinale. La CAR n'est pas indépendante de la nuit qui précède.
          </p>
          <p>
            Une nuit courte ou fragmentée réduit directement l'amplitude de la CAR du lendemain. Le pic est moins élevé, plus court, et moins efficace pour préparer les ressources cognitives. Une <Link to="/blog/sommeil-reparateur-7-strategies-validees/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">qualité de sommeil réparateur</Link> est donc la première chose à corriger avant toute routine matinale.
          </p>
          <p>
            Une routine matinale impeccable ne compensera jamais un sommeil structurellement insuffisant. L'ordre des priorités : d'abord le sommeil, ensuite la routine.
          </p>

          {/* H2 — Les 5 pratiques */}
          <h2>Quelles sont les 5 pratiques matinales validées par la neurobiologie ?</h2>
          <p>
            Ces cinq pratiques sont directement dérivées des mécanismes décrits ci-dessus. Chacune peut être adoptée seule. Ensemble, elles forment une fenêtre de 30 à 45 minutes qui optimise la CAR et prépare le cortex préfrontal pour la journée.
          </p>

          <h3>1. Lumière naturelle dans les 15 premières minutes</h3>
          <p>
            Sortir dehors, ouvrir les volets en grand ou s'asseoir face à une fenêtre dans les 15 premières minutes après le réveil. Par temps couvert, la lumière extérieure reste biologiquement supérieure à la lumière intérieure.
          </p>
          <p>
            Si tu vis dans un endroit sans lumière naturelle suffisante (hiver nordique, appartement sombre), une lampe de luminothérapie à 10 000 lux pendant 20 minutes produit un effet comparable. L'essentiel : les cellules ipRGC de ta rétine ont besoin d'un signal lumineux fort pour démarrer la synchronisation circadienne.
          </p>

          <h3>2. Hydratation immédiate</h3>
          <p>
            Après 7 à 9 heures sans eau, tu es légèrement déshydraté au réveil. Cette déshydratation réduit le volume sanguin, ce qui ralentit le transport du cortisol dans l'organisme et peut atténuer l'efficacité de la CAR.
          </p>
          <p>
            Boire 300 à 500 ml d'eau dès le réveil, avant le café et avant le téléphone. C'est la pratique avec le meilleur rapport effort/bénéfice de toute la liste.
          </p>

          <h3>3. Mouvement physique, même 10 minutes</h3>
          <p>
            Pas besoin d'une séance complète. 10 à 20 minutes de marche rapide, de mobilité articulaire ou de vélo léger suffisent à déclencher une sécrétion mesurable de BDNF et à activer le cortex préfrontal.
          </p>
          <p>
            L'exercice matinal a aussi un avantage pratique : il est moins susceptible d'être annulé par les imprévus de la journée que l'exercice planifié le soir. Sur le lien entre mouvement et dopamine, l'article sur <Link to="/blog/neuro-dopamine-routine/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">la dopamine naturelle et les protocoles d'activation</Link> couvre les mécanismes de renforcement motivationnel.
          </p>

          <h3>4. Différer le café de 90 minutes</h3>
          <p>
            C'est le conseil le moins populaire et le mieux fondé biologiquement.
          </p>
          <p>
            Attendre 90 minutes après le réveil avant de boire du café laisse à la CAR le temps de produire son pic naturel. La caféine intervient ensuite, au moment où le cortisol commence à redescendre, prolongeant la fenêtre de vigilance sans interférer avec le mécanisme naturel.
          </p>
          <p>
            Si l'idée de 90 minutes semble difficile à tenir, commence par 30 minutes. L'effet est partiel mais réel. L'important est de ne pas consommer de caféine dans les 30 premières minutes suivant le réveil.
          </p>

          <h3>5. Une seule intention cognitive avant les notifications</h3>
          <p>
            Avant d'ouvrir ton téléphone, ton email ou tes réseaux sociaux : note une seule phrase. "Aujourd'hui, la priorité est [X]."
          </p>
          <p>
            Ce geste active le cortex préfrontal en mode <em>proactif</em> plutôt qu'en mode <em>réactif</em>. Au lieu de laisser le monde extérieur définir ton agenda cognitif, tu le définis toi-même. Les ressources d'attention disponibles pendant la matinée sont alors orientées vers ta priorité, au lieu d'être dispersées dans les demandes entrantes. Pour formuler cette priorité de façon vraiment efficace, l'article sur <Link to="/blog/objectifs-smart-methode-neurosciences/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">les objectifs SMART décryptés par les neurosciences</Link> explique pourquoi un but précis active mieux le cerveau qu'une intention vague.
          </p>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>✅ <strong>La CAR :</strong> dans les 30 à 45 minutes après le réveil, le cortisol monte de 50 à 150%. Ce pic biologique prépare les ressources cognitives de la journée. Ce n'est pas du stress, c'est de la préparation adaptative.</li>
              <li>✅ <strong>Le NSC :</strong> le noyau suprachiasmatique (20 000 neurones derrière les yeux) orchestre la CAR. Se lever à la même heure chaque jour renforce ce signal d'anticipation.</li>
              <li>✅ <strong>Lumière et cognition :</strong> une exposition lumineuse intense le matin améliore la mémoire de travail et la vigilance sur la journée (n=58, Communications Psychology 2025).</li>
              <li>⚠️ <strong>Exercice intense le soir :</strong> il réduit la CAR du lendemain matin. L'intensité et le moment de l'entraînement comptent tous les deux.</li>
              <li>⚠️ <strong>Café immédiat :</strong> superposer caféine et CAR crée une tolérance plus rapide. Différer de 90 minutes est biologiquement justifié.</li>
              <li>🔑 <strong>Priorité absolue :</strong> le sommeil. Une CAR optimale est impossible sans une nuit réparatrice. La routine matinale est un amplificateur, pas un substitut.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur la routine matinale scientifique</h2>
          <div className="not-prose">
            {faqData.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">{item.question}</h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA Lead Magnet */}
          <div className="not-prose my-10 bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800 text-center">
            <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">Ressource gratuite</p>
            <p className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">Protocole matinal 30 min : fiche de référence</p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">
              Une fiche A5 à imprimer avec les 5 pratiques, les minutages précis et les mécanismes biologiques en un coup d'oeil. À coller sur ton miroir ou ta table de nuit.
            </p>
            <a
              href="/downloads/routine-matinale-scientifique-cerveau-guide.pdf"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la fiche protocole (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Stalder T., Oster H., Abelson J.L., Huthsteiner K., Klucken T., Clow A. — <em>The Cortisol Awakening Response: Regulation and Functional Significance</em> — <em>Endocrine Reviews</em>, vol. 46(1), févr. 2025 (en ligne août 2024) — DOI : <a href="https://doi.org/10.1210/endrev/bnae024" className="underline" target="_blank" rel="noopener noreferrer">10.1210/endrev/bnae024</a>
            </li>
            <li>
              [2] <em>Daytime light exposure and associations with cognitive performance: a 7-day real-world study</em> — <em>Communications Psychology</em> (Nature Publishing Group), déc. 2025 — DOI : <a href="https://doi.org/10.1038/s44271-025-00373-9" className="underline" target="_blank" rel="noopener noreferrer">10.1038/s44271-025-00373-9</a>
            </li>
            <li>
              [3] <em>Effect of evening high-intensity interval exercise on the cortisol awakening response</em> — <em>European Journal of Applied Physiology</em>, mai 2023 — DOI : <a href="https://doi.org/10.1007/s00421-023-05132-4" className="underline" target="_blank" rel="noopener noreferrer">10.1007/s00421-023-05132-4</a>
            </li>
            <li>
              [4] Foster R.G. — <em>Sleep, circadian rhythms and health</em> — Sleep and Circadian Neuroscience Institute, University of Oxford — <em>Interface Focus</em>, 2020 — DOI : <a href="https://doi.org/10.1098/rsfs.2019.0098" className="underline" target="_blank" rel="noopener noreferrer">10.1098/rsfs.2019.0098</a>
            </li>
            <li>
              [5] Lally P. et al. — <em>How are habits formed: Modelling habit formation in the real world</em> — University College London — <em>European Journal of Social Psychology</em>, 2010 — DOI : <a href="https://doi.org/10.1002/ejsp.674" className="underline" target="_blank" rel="noopener noreferrer">10.1002/ejsp.674</a>
            </li>
            <li>
              [6] Klaas V.C. et al. — <em>The cortisol awakening response is not a response to awakening</em> — University of Bristol — <em>Proceedings of the Royal Society B</em>, janv. 2025 — N=201
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
