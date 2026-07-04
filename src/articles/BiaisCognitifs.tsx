// src/articles/BiaisCognitifs.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 22 juin 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "biais-cognitifs-liste-psychologie",
  title: "Biais cognitifs : la liste des 12 plus courants (et comment les contrer)",
  description: "Biais cognitifs : la liste des 12 plus courants, leur origine expérimentale (Kahneman, Tversky, Wason), le mécanisme Système 1 et comment les réduire.",
  cover: "/images/articles/biais-cognitifs-liste-psychologie-cover",
  datePublished: "2026-06-22T08:00:00+01:00",
  dateModified: "2026-06-22T08:00:00+01:00",
  tags: ["biais cognitifs", "biais de confirmation", "heuristiques", "Système 1 Système 2", "Kahneman", "psychologie cognitive", "prise de décision", "débiaisage"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Psychologie",
  readingTime: "15 min",
  version: "1.0",
  verifiedDate: "Juin 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce qu'un biais cognitif ?",
    answer: "Un biais cognitif est une erreur systématique de jugement, produite par les raccourcis mentaux que le cerveau utilise pour décider vite. Ce n'est pas une erreur aléatoire ni un manque d'intelligence : c'est une déformation prévisible et répétée du raisonnement, partagée par tous les humains, même les experts."
  },
  {
    question: "Quels sont les principaux biais cognitifs ?",
    answer: "Les plus courants sont le biais de confirmation, l'ancrage, les heuristiques de disponibilité et de représentativité, l'aversion à la perte, l'effet de cadrage, l'excès de confiance, l'effet de halo, le biais des survivants, le biais rétrospectif, l'effet Dunning-Kruger et le biais d'optimisme. La plupart découlent du même mécanisme rapide."
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
    wordCount: 2850
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
    name: "Les 12 biais cognitifs les plus courants",
    description: "Liste des 12 biais cognitifs les plus répandus avec leur origine expérimentale et leur mécanisme",
    numberOfItems: 12,
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
      { "@type": "ListItem", position: 12, name: "Biais d'optimisme", description: "Se croire moins exposé que les autres aux événements négatifs (Neil Weinstein, 1980)." }
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
          Biais cognitifs : la liste des 12 plus courants (et comment les contrer)
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 1974-2025
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> Un biais cognitif est une erreur systématique et prévisible de jugement, produite par les raccourcis mentaux du cerveau (les heuristiques). Les 12 plus courants, du biais de confirmation à l'effet Dunning-Kruger, découlent presque tous du même mécanisme rapide décrit par Kahneman. On ne les supprime pas, mais on peut les réduire.
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
            Cet article fait ce qu'aucune liste française ne fait : donner pour chacun des 12 biais les plus courants son origine expérimentale précise (qui l'a découvert, quand), expliquer le mécanisme cérébral commun qui les produit, et montrer, preuves à l'appui, qu'on peut les réduire.
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
            C'est aussi pourquoi le stress et l'anxiété renforcent les biais : ils amplifient le poids de l'amygdale dans la décision. Pour comprendre cette structure, l'article sur <Link to="/blog/systeme-limbique-cerveau-emotionnel/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">le système limbique et le cerveau émotionnel</Link> détaille son rôle.
          </p>

          <h3>Les biais touchent même l'apprentissage le plus simple</h3>
          <p>
            On pourrait croire que les biais ne concernent que les décisions complexes. C'est faux, et c'est récent.
          </p>
          <p>
            Dans une synthèse de 2022, les chercheurs Stefano Palminteri et Maël Lebreton ont réuni des résultats montrant que des biais comme l'optimisme et la confirmation apparaissent dès l'apprentissage par essai-erreur le plus élémentaire, et qu'on les retrouve aussi bien chez l'humain que chez l'animal. Autrement dit, certains biais ne sont pas des défauts de raisonnement « de haut niveau » : ils sont gravés dans la façon même dont le cerveau apprend. Voilà pourquoi ils sont si difficiles à éliminer.
          </p>

          {/* H2 — Les 12 biais */}
          <h2>Quels sont les 12 biais cognitifs les plus courants ?</h2>
          <p>
            Voici les 12 biais les plus répandus, chacun avec son origine expérimentale, un exemple concret et un moyen de le repérer. Ils sont classés du plus universel au plus spécifique.
          </p>

          <h3>1. Le biais de confirmation (Wason, 1960)</h3>
          <p>
            C'est la tendance à chercher et retenir les informations qui confirment ce qu'on croit déjà, en ignorant celles qui le contredisent. Formalisé par le psychologue Peter Wason en 1960. Exemple : tu penses qu'un collègue est désorganisé, et tu ne remarques que ses oublis, jamais ses réussites. Pour le contrer : cherche activement ce qui pourrait te donner tort.
          </p>

          <h3>2. L'ancrage (Tversky &amp; Kahneman, 1974)</h3>
          <p>
            Une première valeur, même arbitraire, influence de façon disproportionnée notre estimation finale. Exemple : un article affiché à 200 euros puis soldé à 120 paraît une affaire, parce que 200 sert d'ancre, même si l'objet en vaut 80. Pour le contrer : avant de négocier ou d'estimer, fixe ta propre référence d'abord.
          </p>

          <h3>3. L'heuristique de disponibilité (Tversky &amp; Kahneman, 1974)</h3>
          <p>
            On estime la fréquence d'un événement par la facilité avec laquelle des exemples nous viennent à l'esprit. Exemple : après un reportage sur un crash, on surestime le danger de l'avion, alors qu'il est plus sûr que la voiture. Pour le contrer : cherche les vrais chiffres, pas l'exemple le plus marquant.
          </p>

          <h3>4. L'heuristique de représentativité (Tversky &amp; Kahneman, 1974)</h3>
          <p>
            On juge la probabilité d'une chose par sa ressemblance à un prototype, en oubliant les statistiques de base. Exemple : décrit comme timide et méticuleux, quelqu'un sera jugé « bibliothécaire » plutôt qu'« agriculteur », alors que les agriculteurs sont bien plus nombreux. Pour le contrer : reviens toujours aux fréquences réelles.
          </p>

          <h3>5. L'aversion à la perte (Kahneman &amp; Tversky, 1979)</h3>
          <p>
            Une perte fait psychologiquement plus mal qu'un gain équivalent ne fait plaisir. Issu de la théorie des perspectives. Exemple : on garde une action qui chute pour ne pas « acter » la perte, ou un abonnement inutile pour ne pas « perdre » ce qu'on a payé. Pour le contrer : raisonne sur la situation présente, pas sur ce que tu as déjà engagé.
          </p>

          <h3>6. L'effet de cadrage (Tversky &amp; Kahneman, 1981)</h3>
          <p>
            La façon de présenter une option, en gains ou en pertes, change la décision, même si l'information est identique. Exemple : un yaourt « 90 % sans matière grasse » séduit plus que « 10 % de matière grasse ». C'est le biais étudié par De Martino dans le cerveau. Pour le contrer : reformule l'option dans l'autre sens et compare.
          </p>

          <h3>7. L'excès de confiance (Fischhoff, Slovic &amp; Lichtenstein, 1977)</h3>
          <p>
            On surestime la justesse de ses propres jugements et la précision de ses connaissances. Exemple : se dire « sûr à 90 % » d'une réponse qui s'avère fausse une fois sur deux. Ce biais touche fortement les experts. Pour le contrer : demande-toi sur quoi repose réellement ta certitude, et envisage l'erreur.
          </p>

          <h3>8. L'effet de halo (Thorndike, 1920)</h3>
          <p>
            Une impression globale, souvent liée à l'apparence, déteint sur le jugement de traits précis. Décrit par Edward Thorndike chez des officiers évaluant leurs soldats. Exemple : on prête plus de compétence et d'honnêteté à une personne séduisante. Pour le contrer : évalue chaque critère séparément, sans te laisser guider par l'impression d'ensemble.
          </p>

          <h3>9. Le biais des survivants (Wald, 1943)</h3>
          <p>
            On ne regarde que les cas qui ont « survécu » à une sélection, en ignorant ceux qui ont échoué. Illustré par le statisticien Abraham Wald, qui conseilla de blinder les avions là où les appareils revenus n'étaient pas touchés, car ceux touchés à ces endroits ne revenaient pas. Exemple : étudier seulement les start-ups qui ont réussi. Pour le contrer : cherche les cas absents, ceux qui ont disparu.
          </p>

          <h3>10. Le biais rétrospectif (Fischhoff, 1975)</h3>
          <p>
            Après coup, on croit qu'on « avait toujours su » qu'un événement arriverait. Décrit par Baruch Fischhoff. Exemple : une fois le résultat d'un match connu, il paraît évident, alors qu'il était incertain avant. Ce biais nous empêche d'apprendre de nos erreurs. Pour le contrer : note tes prédictions avant l'événement, et relis-les après.
          </p>

          <h3>11. L'effet Dunning-Kruger (Dunning &amp; Kruger, 1999)</h3>
          <p>
            Les personnes les moins compétentes dans un domaine surestiment leur niveau, car il leur manque justement les compétences pour mesurer leur incompétence. Exemple : un débutant sûr de lui après une heure sur un sujet complexe. À l'inverse, les experts doutent davantage. C'est un cousin de l'<Link to="/blog/syndrome-imposteur-solutions/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">opposé du syndrome de l'imposteur</Link>. Pour le contrer : cherche le feedback de plus compétents que toi.
          </p>

          <h3>12. Le biais d'optimisme (Weinstein, 1980)</h3>
          <p>
            On se croit moins exposé que les autres aux événements négatifs (maladie, accident, divorce) et plus susceptible de vivre des événements positifs. Décrit par Neil Weinstein. Exemple : « les retards de chantier, ça n'arrive qu'aux autres ». Utile pour la motivation, dangereux pour la planification. Pour le contrer : base tes prévisions sur des cas comparables réels, pas sur ton ressenti.
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
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">Fiche des 12 biais cognitifs + le réflexe anti-biais</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 12 biais avec leur définition et leur origine, plus les 4 questions du réflexe anti-biais à se poser avant toute décision importante.
            </p>
            <a
              href="/Downloads/biais-cognitifs-liste-psychologie-guide.pdf"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la fiche biais cognitifs (PDF gratuit)
            </a>
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
          </ol>

        </div>
      </article>
    </>
  );
}
