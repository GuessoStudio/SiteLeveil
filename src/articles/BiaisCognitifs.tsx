// src/articles/BiaisCognitifs.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 5 août 2026 (13e biais, items étoffés, institutions)

import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import EmailCaptureModal from "../components/EmailCaptureModal";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "biais-cognitifs-liste-psychologie",
  title: "Biais cognitif : définition, liste des 13 plus courants et comment les contrer",
  description: "Biais cognitif : définition, les 13 plus courants avec leur origine expérimentale (Kahneman, Tversky, Wason) et les stratégies validées pour les réduire.",
  cover: "/images/articles/biais-cognitifs-liste-psychologie-cover",
  datePublished: "2026-06-22T08:00:00+01:00",
  dateModified: "2026-08-05T11:00:00+02:00",
  tags: ["biais cognitifs", "biais de confirmation", "heuristiques", "Système 1 Système 2", "Kahneman", "psychologie cognitive", "prise de décision", "débiaisage"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Psychologie",
  readingTime: "15 min",
  version: "2.0",
  verifiedDate: "Août 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce qu'un biais cognitif ?",
    answer: "Un biais cognitif est une erreur systématique de jugement, produite par les raccourcis mentaux que le cerveau utilise pour décider vite. Ce n'est pas une erreur aléatoire ni un manque d'intelligence : c'est une déformation prévisible et répétée du raisonnement, partagée par tous les humains, même les experts."
  },
  {
    question: "Quels sont les principaux biais cognitifs ?",
    answer: "Les plus courants sont le biais de confirmation, l'ancrage, les heuristiques de disponibilité et de représentativité, l'aversion à la perte, l'effet de cadrage, l'excès de confiance, l'effet de halo, le biais des survivants, le biais rétrospectif, l'effet Dunning-Kruger, le biais d'optimisme et la dissonance cognitive. La plupart découlent du même mécanisme rapide."
  },
  {
    question: "Quelle est la différence entre un biais cognitif et une distorsion cognitive ?",
    answer: "Un biais cognitif est une erreur de raisonnement partagée par tout le monde, étudiée en psychologie de la décision. Une distorsion cognitive est une pensée déformée à connotation clinique, étudiée en thérapie cognitive (dépression, anxiété). Les deux se ressemblent, mais relèvent de champs et d'usages différents."
  },
  {
    question: "Pourquoi notre cerveau produit-il des biais cognitifs ?",
    answer: "Parce que penser coûte de l'énergie. Le cerveau privilégie des raccourcis, appelés heuristiques, qui donnent une réponse rapide et souvent correcte. Ces raccourcis sont efficaces au quotidien, mais ils produisent des erreurs prévisibles dans certaines situations, surtout face à l'incertitude ou aux probabilités."
  },
  {
    question: "Qu'est-ce que le biais de confirmation ?",
    answer: "Le biais de confirmation est la tendance à chercher, retenir et interpréter les informations qui confirment ce qu'on croit déjà, en ignorant celles qui le contredisent. Décrit par Peter Wason en 1960, c'est l'un des biais les plus puissants : il renforce nos opinions et nous rend aveugles aux preuves contraires."
  },
  {
    question: "Peut-on se débarrasser de ses biais cognitifs ?",
    answer: "On ne les supprime pas, mais on peut les réduire. Une méta-analyse de 2025 (Nature Human Behaviour) sur près de 11 000 participants montre qu'une formation au débiaisage produit une amélioration réelle mais modeste. Connaître un biais ne suffit pas : il faut des stratégies concrètes appliquées au moment de décider."
  },
  {
    question: "Quelle est la différence entre le Système 1 et le Système 2 ?",
    answer: "Concept popularisé par Daniel Kahneman, le Système 1 est le mode de pensée rapide, automatique et intuitif, source de la plupart des biais. Le Système 2 est le mode lent, analytique et coûteux en effort. Les biais surgissent quand le Système 1 répond sans que le Système 2 vérifie."
  },
  {
    question: "Quel est le biais cognitif le plus courant ?",
    answer: "Le biais de confirmation est souvent considéré comme le plus répandu et le plus influent, car il agit dans presque toutes nos décisions et opinions. L'ancrage et l'heuristique de disponibilité sont également omniprésents. Ces trois biais touchent aussi bien la vie quotidienne que les décisions d'experts."
  }
];

// ==================== COMPOSANT ====================

export default function BiaisCognitifs() {
  // Capture d'email avant livraison du lead magnet. useState(false) est
  // deterministe : meme valeur au rendu SSG et au premier rendu client, donc
  // pas de mismatch d'hydratation.
  const [leadModalOpen, setLeadModalOpen] = useState(false);
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
    height: 675,
    caption: "Illustration conceptuelle des biais cognitifs : cerveau stylisé traversé de raccourcis lumineux déformant des trajectoires de pensée, métaphore des erreurs systématiques de jugement, fond sombre violet"
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
      name: "Biais cognitif",
      description: "Erreur systématique et prévisible de jugement produite par les heuristiques du traitement rapide (Système 1), formalisée par les travaux de Tversky et Kahneman"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 3900
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
    name: "Les 13 biais cognitifs les plus courants",
    description: "Liste des 13 biais cognitifs les plus répandus avec leur origine expérimentale et leur mécanisme",
    numberOfItems: 13,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Biais de confirmation", description: "Tendance à privilégier les informations qui confirment ses croyances (Peter Wason, 1960)." },
      { "@type": "ListItem", position: 2, name: "Ancrage", description: "Une première valeur arbitraire influence de façon disproportionnée l'estimation finale (Tversky & Kahneman, 1974)." },
      { "@type": "ListItem", position: 3, name: "Heuristique de disponibilité", description: "Estimer la fréquence d'un événement par la facilité avec laquelle des exemples viennent à l'esprit (Tversky & Kahneman, 1974)." },
      { "@type": "ListItem", position: 4, name: "Heuristique de représentativité", description: "Juger une probabilité par la ressemblance à un prototype, en ignorant les taux de base (Tversky & Kahneman, 1974)." },
      { "@type": "ListItem", position: 5, name: "Aversion à la perte", description: "Une perte fait plus mal qu'un gain équivalent ne fait plaisir (Kahneman & Tversky, 1979)." },
      { "@type": "ListItem", position: 6, name: "Effet de cadrage", description: "La façon de présenter une option, en gains ou en pertes, change la décision (Tversky & Kahneman, 1981)." },
      { "@type": "ListItem", position: 7, name: "Excès de confiance", description: "Surestimer la justesse de ses propres jugements (Fischhoff, Slovic & Lichtenstein, 1977)." },
      { "@type": "ListItem", position: 8, name: "Effet de halo", description: "Une impression globale positive déteint sur le jugement de traits précis (Edward Thorndike, 1920)." },
      { "@type": "ListItem", position: 9, name: "Biais des survivants", description: "Ne regarder que les cas qui ont réussi en ignorant ceux qui ont échoué (Abraham Wald, 1943)." },
      { "@type": "ListItem", position: 10, name: "Biais rétrospectif", description: "Croire après coup qu'on avait prévu un événement (Baruch Fischhoff, 1975)." },
      { "@type": "ListItem", position: 11, name: "Effet Dunning-Kruger", description: "Les moins compétents surestiment leur niveau, faute de pouvoir mesurer leur incompétence (Dunning & Kruger, 1999)." },
      { "@type": "ListItem", position: 12, name: "Biais d'optimisme", description: "Se croire moins exposé que les autres aux événements négatifs (Neil Weinstein, 1980)." },
      { "@type": "ListItem", position: 13, name: "Dissonance cognitive", description: "Ajuster ses croyances plutôt que son comportement quand les deux se contredisent (Leon Festinger, 1957)." }
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
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Biais cognitifs</li>
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
          Biais cognitif : définition, liste des 13 plus courants et comment les contrer
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 1974-2025
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> Un biais cognitif est une erreur systématique et prévisible de jugement, produite par les raccourcis mentaux du cerveau (les heuristiques). Les 13 plus courants, du biais de confirmation à la dissonance cognitive, découlent presque tous du même mécanisme rapide décrit par Kahneman. On ne les supprime pas, mais on peut les réduire.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Tversky &amp; Kahneman, <em>Science</em>, 1974 ; De Martino et al., <em>Science</em>, 2006 ; Swaryandini et al., <em>Nature Human Behaviour</em>, 2025.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">3<br/>raccourcis</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                Trois raccourcis mentaux (représentativité, disponibilité et ancrage) suffisent à produire des erreurs de jugement systématiques et prévisibles face à l'incertitude. La conclusion clé de l'article fondateur n'est pas que les gens « raisonnent mal », mais qu'ils utilisent des raccourcis stables qui biaisent leurs estimations de façon reproductible.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Tversky A. &amp; Kahneman D., <em>Judgment under Uncertainty: Heuristics and Biases</em>, <em>Science</em>, vol. 185(4157), 1974 (DOI : 10.1126/science.185.4157.1124)
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle des biais cognitifs : cerveau stylisé traversé de raccourcis lumineux qui déforment des trajectoires de pensée, métaphore des erreurs systématiques de jugement, fond sombre violet"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu te crois rationnel. Tu pèses le pour et le contre, tu décides en fonction des faits. Et pourtant, ton cerveau te trompe en permanence, de façon prévisible, sans que tu t'en rendes compte.
          </p>
          <p>
            Ce ne sont pas des erreurs d'inattention. Ce sont des <strong>biais cognitifs</strong> : des déformations systématiques du jugement, partagées par tous les humains, y compris les experts. Il en existe plus de deux cents répertoriés. La plupart des listes en ligne les alignent côte à côte comme s'ils étaient indépendants. Ils ne le sont pas.
          </p>
          <p>
            Cet article fait ce qu'aucune liste française ne fait : donner pour chacun des 13 biais les plus courants son origine expérimentale précise (qui l'a découvert, quand), expliquer le mécanisme cérébral commun qui les produit, et montrer, preuves à l'appui, qu'on peut les réduire.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce qu'un biais cognitif ?</h2>
          <p>
            Un biais cognitif est une erreur systématique de jugement, produite par les raccourcis que le cerveau utilise pour décider vite. Le mot important est « systématique » : ce n'est pas une erreur au hasard, c'est une déformation prévisible, qui se répète dans les mêmes conditions chez presque tout le monde.
          </p>

          <h3>Définition et Système 1 / Système 2</h3>
          <p>
            Pour comprendre les biais, il faut connaître une distinction popularisée par le psychologue <strong>Daniel Kahneman</strong>, prix Nobel d'économie. Notre pensée fonctionne sur deux modes.
          </p>
          <p>
            Le <strong>Système 1</strong> est rapide, automatique, intuitif. C'est lui qui te fait freiner d'urgence ou reconnaître un visage sans effort. Le <strong>Système 2</strong> est lent, analytique, coûteux en énergie. C'est lui qui calcule 17 × 24 ou relit un contrat. Les biais cognitifs naissent presque tous du Système 1 : il répond vite, et le Système 2, paresseux, ne vérifie pas. C'est pourquoi un biais n'est pas un signe de bêtise : c'est le prix de la rapidité.
          </p>
          <p>
            Attention à ne pas confondre. Un biais cognitif (erreur de raisonnement partagée par tous) n'est pas une distorsion cognitive au sens clinique (pensée déformée étudiée en thérapie, comme dans la dépression). Ce sont deux notions voisines mais distinctes. Pour les pensées déformées à répétition, l'article sur <Link to="/blog/regulation-emotionnelle-techniques-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">la régulation émotionnelle et la réévaluation cognitive</Link> couvre le versant clinique.
          </p>

          <h3>Pourquoi le cerveau en produit : les heuristiques, des raccourcis utiles</h3>
          <p>
            Pourquoi un cerveau évolué garderait-il des mécanismes qui produisent des erreurs ? Parce que, la plupart du temps, ces raccourcis fonctionnent.
          </p>
          <p>
            Une <strong>heuristique</strong> est une règle mentale approximative qui donne une réponse rapide et souvent correcte. Estimer la dangerosité d'un quartier à son apparence, juger une personne à sa poignée de main : ces raccourcis nous ont permis de survivre dans un monde où décider vite valait mieux que décider parfaitement. Le biais, c'est le revers : quand le raccourci s'applique à une situation où il ne marche plus, il produit une erreur prévisible. Heuristique et biais sont les deux faces d'une même pièce.
          </p>

          {/* H2 — Cerveau */}
          <h2>Que se passe-t-il dans le cerveau lors d'un biais ?</h2>
          <p>
            Les biais ne sont pas qu'une affaire de logique : ils ont une signature dans le cerveau, où l'émotion et l'analyse se disputent la décision.
          </p>

          <h3>Amygdale et cortex préfrontal, l'émotion contre l'analyse</h3>
          <p>
            En 2006, Benedetto De Martino et son équipe (University College London) ont scanné le cerveau de participants confrontés à l'<strong>effet de cadrage</strong> : la même option, présentée comme un gain ou comme une perte, change la décision. Leur découverte est devenue une référence.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Émotion<br/>vs raison</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Quand les participants suivaient l'effet de cadrage (donc le biais), l'activité de l'amygdale, le centre des émotions, était plus forte. À l'inverse, les personnes qui résistaient au biais montraient plus d'activité dans le cortex préfrontal, le centre de l'analyse. Le biais n'est pas qu'une idée abstraite : il a une signature cérébrale, où l'émotion prend le pas sur le raisonnement.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  De Martino B., Kumaran D., Seymour B., Dolan R.J., University College London, <em>Science</em>, vol. 313(5787), 2006 (DOI : 10.1126/science.1128356)
                </p>
              </div>
            </div>
          </div>

          <p>
            C'est aussi pourquoi le stress et l'anxiété renforcent les biais : ils amplifient le poids de l'amygdale dans la décision. Pour comprendre cette structure, l'article sur <Link to="/blog/systeme-limbique-cerveau-emotionnel/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">le système limbique et le cerveau émotionnel</Link> détaille son rôle. Nos jugements ne sont pas seulement déformés de l'intérieur : la présence d'un groupe pèse aussi lourd, comme le montre le mécanisme du <Link to="/blog/influence-sociale-conformisme/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">conformisme et de l'influence sociale</Link>.
          </p>

          <h3>Les biais touchent même l'apprentissage le plus simple</h3>
          <p>
            On pourrait croire que les biais ne concernent que les décisions complexes. C'est faux, et c'est récent.
          </p>
          <p>
            Dans une synthèse de 2022, les chercheurs Stefano Palminteri et Maël Lebreton ont réuni des résultats montrant que des biais comme l'optimisme et la confirmation apparaissent dès l'apprentissage par essai-erreur le plus élémentaire, et qu'on les retrouve aussi bien chez l'humain que chez l'animal. Autrement dit, certains biais ne sont pas des défauts de raisonnement « de haut niveau » : ils sont gravés dans la façon même dont le cerveau apprend. Voilà pourquoi ils sont si difficiles à éliminer.
          </p>

          {/* H2 — Les 13 biais */}
          <h2>Quels sont les 13 biais cognitifs les plus courants ?</h2>
          <p>
            Voici les 13 biais les plus répandus. Pour chacun : d'où il vient et sur quelle expérience il repose, ce qu'il produit concrètement dans la vie quotidienne, et comment le repérer chez soi. Ils sont classés du plus universel au plus spécifique.
          </p>

          <h3>1. Le biais de confirmation (Wason, 1960)</h3>
          <p>
            C'est la tendance à chercher et à retenir ce qui confirme nos croyances, tout en écartant ce qui les contredit. Le psychologue Peter Wason (University College London, Royaume-Uni) l'a mis en évidence en 1960 avec une expérience restée célèbre. Il présentait la suite 2, 4, 6 et demandait de deviner la règle. Presque tous les participants testaient uniquement des suites validant leur hypothèse. Très peu essayaient de la contredire, alors que c'était le seul moyen de trouver la bonne réponse.
          </p>

          <p>
            Au quotidien, ça donne ceci : vous pensez qu'un collègue est désorganisé, et vous ne remarquez plus que ses oublis. Ses réussites passent inaperçues ou sont mises sur le compte de la chance. Le biais se nourrit tout seul. Pour le contrer, inversez la question : au lieu de chercher ce qui vous donne raison, cherchez délibérément ce qui pourrait vous donner tort.
          </p>


          <h3>2. L'ancrage (Tversky et Kahneman, 1974)</h3>
          <p>
            Une première valeur, même absurde, influence toutes nos estimations suivantes. Amos Tversky et Daniel Kahneman (Hebrew University of Jerusalem, Israël) l'ont démontré en 1974 dans une expérience troublante. Ils faisaient tourner une roue truquée devant les participants, puis leur demandaient d'estimer le pourcentage de pays africains membres de l'ONU. Ceux qui avaient vu un grand nombre donnaient des estimations bien plus élevées. Un chiffre tiré au hasard, sans rapport avec la question, suffisait à déplacer leur jugement.
          </p>

          <p>
            Vous le vivez à chaque solde : un article affiché à 200 euros puis barré à 120 paraît une bonne affaire, même si l'objet en vaut 80. Le 200 sert d'ancre, et tout se juge par rapport à lui. Même chose en négociation salariale, où le premier chiffre énoncé cadre toute la discussion. Pour le contrer, fixez votre propre référence avant d'entrer dans l'échange, et notez-la par écrit.
          </p>


          <h3>3. L'heuristique de disponibilité (Tversky et Kahneman, 1974)</h3>
          <p>
            Nous estimons la fréquence d'un événement à la facilité avec laquelle des exemples nous viennent en tête. Plus un souvenir est accessible, plus l'événement paraît probable. Tversky et Kahneman ont montré que ce raccourci trompe systématiquement, parce que la mémoire ne classe pas les faits selon leur fréquence réelle, mais selon leur charge émotionnelle et leur récence.
          </p>

          <p>
            D'où ce phénomène bien connu : après un reportage sur un crash aérien, on surestime le danger de l'avion, alors qu'il reste bien plus sûr que la voiture. Les accidents de la route tuent infiniment plus, mais ils ne font pas la une. Même mécanisme quand un fait divers vous fait surestimer la criminalité de votre quartier. Pour le contrer, cherchez les chiffres réels avant de vous fier à l'exemple qui vous a marqué.
          </p>


          <h3>4. L'heuristique de représentativité (Tversky et Kahneman, 1974)</h3>
          <p>
            Nous jugeons la probabilité d'une chose à sa ressemblance avec un portrait-type, en oubliant les statistiques de base. Le cerveau compare au stéréotype et néglige les nombres. Tversky et Kahneman l'ont illustré avec un cas devenu classique en psychologie : la description d'un homme timide, ordonné et attaché au détail.
          </p>

          <p>
            Demandez si cet homme est plutôt bibliothécaire ou agriculteur : la majorité répond bibliothécaire, parce que la description colle au stéréotype. Or les agriculteurs sont bien plus nombreux dans la population. Même en collant mal au portrait, ils restent statistiquement plus probables. C'est le même mécanisme qui fait juger un candidat sur son allure plutôt que sur son parcours. Pour le contrer, posez-vous d'abord la question du nombre, avant même de regarder le portrait.
          </p>


          <h3>5. L'aversion à la perte (Kahneman et Tversky, 1979)</h3>
          <p>
            Perdre 50 euros fait plus mal que gagner 50 euros ne fait plaisir. L'écart est net : la douleur d'une perte pèse environ deux fois plus lourd que le plaisir d'un gain équivalent. Daniel Kahneman (Princeton University, États-Unis) et Amos Tversky (Stanford University, États-Unis) en ont fait le cœur de leur théorie des perspectives, publiée en 1979. Ces travaux ont valu à Kahneman le prix Nobel d'économie en 2002.
          </p>

          <p>
            Concrètement, c'est ce qui vous fait garder une action qui chute, pour ne pas acter la perte. Ou conserver un abonnement dont vous ne vous servez plus, parce que vous avez déjà payé. Ou rester dans un projet qui échoue, au motif que vous y avez consacré deux ans. Pour le contrer, raisonnez sur la situation présente : si vous découvriez cette option aujourd'hui, sans aucun historique, la choisiriez-vous ?
          </p>


          <h3>6. L'effet de cadrage (Tversky et Kahneman, 1981)</h3>
          <p>
            La façon de présenter une information change la décision, même quand le contenu est rigoureusement identique. Formuler en gains ou en pertes suffit à inverser un choix. Tversky et Kahneman l'ont démontré en 1981 avec un problème de santé publique : selon que le même programme était décrit en vies sauvées ou en vies perdues, les participants basculaient d'une option à l'autre.
          </p>

          <p>
            Vous le croisez chaque semaine au supermarché : un yaourt « 90 % sans matière grasse » se vend mieux que le même « 10 % de matière grasse ». Un traitement « efficace dans 70 % des cas » rassure davantage qu'un traitement qui « échoue dans 30 % des cas ». Pour le contrer, reformulez l'information dans l'autre sens avant de trancher. Si votre décision change, c'est le cadrage qui décidait à votre place.
          </p>


          <h3>7. L'excès de confiance (Fischhoff, Slovic et Lichtenstein, 1977)</h3>
          <p>
            Nous surestimons la justesse de nos jugements et la précision de nos connaissances. Baruch Fischhoff (Carnegie Mellon University, États-Unis) et Paul Slovic (University of Oregon, États-Unis) l'ont mesuré en 1977 en demandant aux participants d'évaluer leur propre certitude. Quand ces derniers se déclaraient sûrs à 100 %, ils se trompaient encore dans une proportion notable des cas.
          </p>

          <p>
            Le plus troublant est que l'expertise ne protège pas. Elle aggrave souvent le phénomène, parce que le spécialiste a de bonnes raisons de se croire fiable. Vous le voyez chez le professionnel qui tranche en trente secondes, et chez vous quand vous estimez qu'une tâche prendra deux heures alors qu'elle en prendra six. Pour le contrer, ne demandez pas « suis-je sûr ? » mais « sur quoi repose exactement ma certitude ? ».
          </p>


          <h3>8. L'effet de halo (Thorndike, 1920)</h3>
          <p>
            Une impression d'ensemble déteint sur le jugement de traits précis et pourtant indépendants. Le psychologue Edward Thorndike (Columbia University, États-Unis) l'a décrit en 1920 en observant des officiers qui notaient leurs soldats. Ceux qu'ils trouvaient beaux ou bien bâtis étaient aussi jugés plus intelligents, plus loyaux et plus compétents, sans aucune raison objective de l'être.
          </p>

          <p>
            Un siècle plus tard, le mécanisme est intact. On prête plus de compétence à une personne séduisante, plus d'honnêteté à qui parle avec assurance, plus de sérieux à un document bien mis en page. En entretien d'embauche, une poignée de main ferme peut colorer l'évaluation entière. Pour le contrer, évaluez chaque critère séparément et par écrit, avant de vous faire une opinion globale. L'ordre compte : l'impression d'ensemble contamine les détails, jamais l'inverse.
          </p>


          <h3>9. Le biais des survivants (Wald, 1943)</h3>
          <p>
            Nous ne regardons que les cas ayant franchi une sélection, en oubliant ceux qui ont disparu. Le statisticien Abraham Wald (Columbia University, États-Unis) l'a illustré en 1943, pendant la Seconde Guerre mondiale. L'armée américaine voulait blinder les zones les plus criblées d'impacts sur les bombardiers revenus. Wald démontra l'inverse : il fallait blinder les zones intactes. Les avions touchés à ces endroits-là n'étaient jamais rentrés.
          </p>

          <p>
            C'est sans doute le biais le plus coûteux dans la vie professionnelle. On étudie les start-ups qui ont réussi pour en tirer des recettes, en ignorant les milliers qui ont appliqué les mêmes recettes et ont échoué. On lit les biographies de milliardaires ayant quitté l'université, jamais celles de ceux qui sont partis sans rien construire. Pour le contrer, demandez-vous systématiquement qui manque à l'échantillon.
          </p>


          <h3>10. Le biais rétrospectif (Fischhoff, 1975)</h3>
          <p>
            Une fois le résultat connu, il paraît évident, et l'on croit sincèrement l'avoir toujours su. Baruch Fischhoff (Carnegie Mellon University, États-Unis) l'a démontré en 1975 : interrogés après un événement, les participants se souvenaient d'avoir annoncé des probabilités bien plus élevées qu'ils ne l'avaient réellement fait avant.
          </p>

          <p>
            Le score d'un match paraît logique une fois connu, alors qu'il était incertain la veille. Une crise économique semble annoncée dès qu'elle est passée. Ce biais est toxique pour une raison précise : il vous empêche d'apprendre de vos erreurs. Si vous croyez avoir su, vous ne cherchez pas ce qui vous a échappé. Pour le contrer, notez vos prédictions par écrit, avec leur date, avant de connaître l'issue. Relisez-les ensuite sans les arranger.
          </p>


          <h3>11. L'effet Dunning-Kruger (Dunning et Kruger, 1999)</h3>
          <p>
            Les personnes les moins compétentes dans un domaine surestiment leur niveau, parce qu'il leur manque justement les compétences permettant d'évaluer leur incompétence. David Dunning et Justin Kruger (Cornell University, États-Unis) l'ont établi en 1999 : les participants situés dans le quart inférieur d'un test se croyaient au-dessus de la moyenne.
          </p>

          <p>
            À l'inverse, les plus compétents se sous-estiment, parce qu'ils mesurent l'étendue de ce qu'ils ignorent. Vous le reconnaîtrez chez le débutant catégorique après une heure de lecture, et chez l'expert qui multiplie les nuances. C'est le miroir du <Link to="/blog/syndrome-imposteur-solutions/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">syndrome de l'imposteur</Link>. Une précision honnête : l'ampleur réelle de cet effet est débattue, une partie du phénomène s'expliquant par des artefacts statistiques. Pour le contrer, cherchez le retour de plus compétents que vous.
          </p>


          <h3>12. Le biais d'optimisme (Weinstein, 1980)</h3>
          <p>
            Nous nous croyons moins exposés que les autres aux événements négatifs, et plus susceptibles de vivre les positifs. Neil Weinstein (Rutgers University, États-Unis) l'a mesuré en 1980 : la majorité des étudiants interrogés estimaient courir moins de risques que leurs camarades de divorcer, de tomber malades ou d'être licenciés. Statistiquement impossible, puisqu'ils ne peuvent pas tous être en dessous de la moyenne.
          </p>

          <p>
            C'est ce qui fait dire que les retards de chantier n'arrivent qu'aux autres, ou sous-estimer de moitié le temps nécessaire à un projet. Ce biais a une utilité réelle : il soutient la motivation et protège du découragement. Il devient dangereux dès qu'il s'agit de planifier ou d'évaluer un risque. Pour le contrer, appuyez vos prévisions sur des cas comparables documentés, jamais sur votre ressenti du moment.
          </p>

          <h3>13. La dissonance cognitive (Festinger, 1957)</h3>
          <p>
            C'est l'inconfort ressenti quand nos actes contredisent nos convictions. Pour faire cesser cette tension, le cerveau ne change presque jamais le comportement : il ajuste la croyance. Leon Festinger (Stanford University, États-Unis) a formalisé cette théorie en 1957, après avoir observé un groupe annonçant la fin du monde. Quand la date prévue passa sans catastrophe, ses membres ne renoncèrent pas : ils conclurent que leur foi avait sauvé la planète.
          </p>

          <p>
            Le mécanisme opère en permanence à petite échelle, au point de mériter <Link to="/blog/dissonance-cognitive-definition-exemples/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">son propre article détaillé</Link>. Un fumeur informé des risques se persuade qu'il fume moins que les autres. Quelqu'un qui vient d'acheter une voiture chère lui découvre soudain toutes les qualités. Plus l'engagement a coûté cher, plus la justification est vigoureuse. Pour le contrer, méfiez-vous des raisons qui apparaissent après la décision et jamais avant. Ce sont rarement des raisons : ce sont des réparations.
          </p>


          {/* H2 — Réduire */}
          <h2>Peut-on réduire ses biais cognitifs ?</h2>
          <p>
            Bonne nouvelle et mauvaise nouvelle. Connaître un biais ne suffit pas à s'en protéger, mais des stratégies concrètes fonctionnent.
          </p>

          <h3>Pourquoi ils résistent, même à l'expertise</h3>
          <p>
            Les biais ne disparaissent pas avec le diplôme. Médecins, juges, investisseurs : tous y sont soumis, parfois davantage à cause de leur excès de confiance. La raison est mécanique : le biais vient du Système 1, automatique, qui agit avant que le Système 2 ait le temps de réfléchir. C'est aussi ce qui rend la <Link to="/blog/procrastination-cerveau-agir-neurosciences/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">prise de décision difficile face à une tâche complexe</Link> : le cerveau préfère la réponse facile et immédiate.
          </p>

          <h3>La bonne nouvelle : ils sont réductibles</h3>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">10&nbsp;941<br/>sujets</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Une méta-analyse de 2025 portant sur 41 études et 10 941 participants montre qu'une formation au débiaisage réduit réellement la probabilité de commettre un biais. L'effet est statistiquement solide, mais modeste, et mesuré surtout en contexte éducatif : son transfert aux décisions du quotidien reste à confirmer. La formation aide, sans rendre personne parfaitement rationnel.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Swaryandini G. et al., <em>Systematic review and meta-analysis of educational approaches to reduce cognitive biases</em>, <em>Nature Human Behaviour</em>, 2025 (DOI : 10.1038/s41562-025-02253-y)
                </p>
              </div>
            </div>
          </div>

          <h3>4 stratégies de débiaisage validées</h3>
          <p>
            Voici quatre leviers concrets, dérivés de la recherche, pour limiter l'emprise des biais sur tes décisions importantes.
          </p>
          <ul>
            <li><strong>Cherche la preuve contraire :</strong> avant de trancher, demande-toi activement « qu'est-ce qui me donnerait tort ? ». C'est l'antidote direct au biais de confirmation.</li>
            <li><strong>Ralentis et active le Système 2 :</strong> pour les décisions qui comptent, impose-toi un délai. Le biais vit dans la réponse rapide ; l'analyse le désamorce.</li>
            <li><strong>Reformule l'option :</strong> présente le choix dans l'autre sens (gain et perte) pour neutraliser l'effet de cadrage.</li>
            <li><strong>Reviens aux chiffres réels :</strong> contre la disponibilité et la représentativité, cherche les fréquences de base plutôt que l'exemple marquant.</li>
          </ul>

          {/* Encadré protocole pratique */}
          <div className="not-prose my-6 bg-violet-50 dark:bg-violet-950/30 p-5 rounded-lg border-l-4 border-violet-500">
            <p className="text-xs font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wide mb-3">Le réflexe anti-biais en 4 questions</p>
            <ol className="space-y-2 text-sm text-violet-900 dark:text-violet-100 list-decimal list-inside">
              <li><strong>Qu'est-ce qui me donnerait tort ?</strong> (biais de confirmation)</li>
              <li><strong>Sur quoi repose vraiment ma certitude ?</strong> (excès de confiance)</li>
              <li><strong>Et si je formulais le choix dans l'autre sens ?</strong> (cadrage)</li>
              <li><strong>Quels sont les chiffres réels, pas l'exemple qui me marque ?</strong> (disponibilité)</li>
            </ol>
          </div>

          <p>
            Ces réflexes ne servent pas qu'à déjouer les biais : ils forment le socle de la <Link to="/blog/pensee-critique-developper/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">pensée critique</Link>, l'art d'évaluer une information avant d'y croire.
          </p>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>✅ <strong>Définition :</strong> un biais cognitif est une erreur de jugement systématique et prévisible, produite par les raccourcis mentaux (heuristiques), pas par un manque d'intelligence.</li>
              <li>✅ <strong>Le mécanisme commun :</strong> la plupart des biais viennent du Système 1, rapide et automatique, que le Système 2 analytique ne corrige pas (Kahneman).</li>
              <li>✅ <strong>Une signature cérébrale :</strong> l'amygdale (émotion) pousse au biais, le cortex préfrontal (analyse) y résiste (De Martino, 2006).</li>
              <li>🔑 <strong>Les 12 plus courants :</strong> confirmation, ancrage, disponibilité, représentativité, aversion à la perte, cadrage, excès de confiance, halo, survivants, rétrospectif, Dunning-Kruger, optimisme.</li>
              <li>🔑 <strong>On peut les réduire :</strong> la formation au débiaisage a un effet réel mais modeste (méta-analyse 2025, près de 11 000 sujets). Le réflexe clé : chercher ce qui pourrait te donner tort.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur les biais cognitifs</h2>
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
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">Fiche des 13 biais cognitifs + le réflexe anti-biais</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 13 biais avec leur définition et leur origine, plus les 4 questions du réflexe anti-biais à se poser avant toute décision importante.
            </p>
            <button
              type="button"
              onClick={() => setLeadModalOpen(true)}
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la fiche biais cognitifs (PDF gratuit)
            </button>
          </div>

          <EmailCaptureModal
            isOpen={leadModalOpen}
            onClose={() => setLeadModalOpen(false)}
            resourceFile="/Downloads/biais-cognitifs-liste-psychologie-guide.pdf"
          />

          {/* Bloc articles connexes — cluster "biais cognitifs et jugement" */}
          <div className="not-prose my-12 p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Continuer sur le raisonnement et le jugement
            </h3>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              Les biais ne s'expliquent pas seuls. Voici les articles qui en éclairent les prolongements.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog/pensee-critique-developper/" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">Développer sa pensée critique</Link>
                <span className="text-neutral-500 dark:text-neutral-400"> — la discipline qui permet de repérer ses propres raccourcis avant qu'ils ne décident à votre place.</span>
              </li>
              <li>
                <Link to="/blog/influence-sociale-conformisme/" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">Influence sociale et conformisme</Link>
                <span className="text-neutral-500 dark:text-neutral-400"> — quand le biais ne vient plus de vous, mais du groupe qui vous entoure.</span>
              </li>
              <li>
                <Link to="/blog/syndrome-imposteur-solutions/" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">Le syndrome de l'imposteur</Link>
                <span className="text-neutral-500 dark:text-neutral-400"> — le miroir de l'effet Dunning-Kruger : douter d'autant plus qu'on est compétent.</span>
              </li>
              <li>
                <Link to="/blog/mindset-de-croissance-psychologie-dweck/" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">L'état d'esprit de croissance</Link>
                <span className="text-neutral-500 dark:text-neutral-400"> — comment une croyance sur soi oriente la lecture de chaque échec.</span>
              </li>
              <li>
                <Link to="/blog/rumination-mentale-pensees-obsessionnelles/" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">La rumination mentale</Link>
                <span className="text-neutral-500 dark:text-neutral-400"> — ce que devient le biais de confirmation quand il tourne en boucle sur soi-même.</span>
              </li>
            </ul>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Tversky A. &amp; Kahneman D. — <em>Judgment under Uncertainty: Heuristics and Biases</em> — <em>Science</em>, vol. 185(4157), 1974 — DOI : <a href="https://doi.org/10.1126/science.185.4157.1124" className="underline" target="_blank" rel="noopener noreferrer">10.1126/science.185.4157.1124</a>
            </li>
            <li>
              [2] De Martino B., Kumaran D., Seymour B., Dolan R.J. — <em>Frames, Biases, and Rational Decision-Making in the Human Brain</em> — University College London — <em>Science</em>, vol. 313(5787), 2006 — DOI : <a href="https://doi.org/10.1126/science.1128356" className="underline" target="_blank" rel="noopener noreferrer">10.1126/science.1128356</a>
            </li>
            <li>
              [3] Swaryandini G. et al. — <em>Systematic review and meta-analysis of educational approaches to reduce cognitive biases among students</em> — <em>Nature Human Behaviour</em>, 2025 — DOI : <a href="https://doi.org/10.1038/s41562-025-02253-y" className="underline" target="_blank" rel="noopener noreferrer">10.1038/s41562-025-02253-y</a>
            </li>
            <li>
              [4] Palminteri S. &amp; Lebreton M. — <em>The computational roots of positivity and confirmation biases in reinforcement learning</em> — <em>Trends in Cognitive Sciences</em>, vol. 26(7), 2022 — DOI : <a href="https://doi.org/10.1016/j.tics.2022.04.005" className="underline" target="_blank" rel="noopener noreferrer">10.1016/j.tics.2022.04.005</a>
            </li>
            <li>
              [5] Kahneman D. &amp; Tversky A. — <em>Prospect Theory: An Analysis of Decision under Risk</em> — <em>Econometrica</em>, vol. 47(2), 1979 — DOI : <a href="https://doi.org/10.2307/1914185" className="underline" target="_blank" rel="noopener noreferrer">10.2307/1914185</a>
            </li>
            <li>
              [6] Festinger L. — <em>A Theory of Cognitive Dissonance</em> — Stanford University Press, 1957.
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
