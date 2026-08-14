// src/articles/ConcentrationProfonde.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 20 juin 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "concentration-profonde-deep-work-neurosciences",
  title: "Concentration profonde : ce que les neurosciences révèlent sur le deep work",
  description: "Concentration profonde : le mécanisme cérébral DMN/DAN du deep work, le mythe des 23 minutes, l'attention résiduelle et 4 leviers validés pour retrouver le focus.",
  cover: "/images/articles/concentration-profonde-deep-work-neurosciences-cover",
  datePublished: "2026-06-20T08:00:00+01:00",
  dateModified: "2026-06-20T08:00:00+01:00",
  tags: ["concentration profonde", "deep work", "focus", "attention", "neurosciences", "mode par défaut", "multitâche", "développement personnel"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Développement Personnel",
  readingTime: "10 min",
  version: "1.0",
  verifiedDate: "Juin 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que la concentration profonde (deep work) ?",
    answer: "La concentration profonde, ou deep work, est un état de travail sans distraction où l'attention est entièrement dédiée à une tâche exigeante. Le terme a été popularisé par l'informaticien Cal Newport. Sur le plan cérébral, cet état repose sur une forte opposition entre le réseau attentionnel et le réseau du mode par défaut, responsable du vagabondage mental."
  },
  {
    question: "Comment développer une concentration profonde ?",
    answer: "En agissant sur l'environnement, pas sur la seule volonté. Quatre leviers validés : protéger des blocs de travail sans interruption, couper les sources de distraction internes et externes, terminer ou noter une tâche avant d'en changer, et entraîner son attention par la pratique régulière. La régularité installe l'état de concentration comme une habitude."
  },
  {
    question: "Combien de temps le cerveau peut-il rester concentré ?",
    answer: "Il n'y a pas de durée maximale fixe : l'attention soutenue fluctue naturellement par vagues. Mais en conditions réelles, la durée moyenne d'attention sur un écran avant de basculer ailleurs s'est effondrée, passant de 2 minutes 30 en 2004 à environ 47 secondes en 2023, selon les données longitudinales de Gloria Mark (UC Irvine)."
  },
  {
    question: "Le multitâche existe-t-il vraiment ?",
    answer: "Non, pas pour les tâches qui demandent de l'attention. Le cerveau ne traite pas deux tâches exigeantes en parallèle : il bascule rapidement de l'une à l'autre. Chaque bascule a un coût. Ce qu'on appelle multitâche est en réalité une commutation de tâches qui dégrade la performance et augmente les erreurs et la fatigue."
  },
  {
    question: "Faut-il vraiment 23 minutes pour se reconcentrer après une interruption ?",
    answer: "Ce chiffre de 23 minutes circule partout, mais il n'est pas tiré d'un article scientifique clairement identifiable. Ce que la recherche établit (Mark, CHI 2008) : le travail interrompu est exécuté plus vite, mais au prix de plus de stress, de frustration et d'effort. Le coût de l'interruption est réel, mais le chiffre exact varie."
  },
  {
    question: "Qu'est-ce que l'attention résiduelle ?",
    answer: "C'est le phénomène, décrit par Sophie Leroy, où une partie de l'attention reste bloquée sur une tâche précédente quand on passe à une nouvelle. Résultat : tu travailles sur la tâche B avec une capacité mentale réduite, parce qu'une part reste accaparée par la tâche A. C'est le vrai coût caché du changement de tâche."
  },
  {
    question: "Quelle partie du cerveau gère la concentration ?",
    answer: "La concentration profonde repose sur le réseau attentionnel dorsal, soutenu par le cortex préfrontal. Pour rester concentré, ce réseau doit fonctionner en opposition avec le réseau du mode par défaut, actif lors du vagabondage mental. Plus ces deux réseaux sont en opposition, plus l'attention est stable (Kelly et al., 2008)."
  },
  {
    question: "Comment limiter les interruptions pour mieux se concentrer ?",
    answer: "En agissant sur les deux types d'interruptions. Les externes : couper les notifications, fermer les onglets, isoler son espace. Les internes, souvent les plus fréquentes : noter l'idée parasite pour la traiter plus tard plutôt que d'y céder. Gloria Mark a montré qu'une grande partie des interruptions vient de nous-mêmes, pas de l'environnement."
  }
];

// ==================== COMPOSANT ====================

export default function ConcentrationProfonde() {
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
    height: 630,
    caption: "Illustration conceptuelle de la concentration profonde : particules de lumière dispersées se rassemblant en une sphère lumineuse concentrée, métaphore de l'attention fragmentée devenant un focus profond, fond sombre indigo"
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
      name: "Concentration profonde",
      description: "État de travail sans distraction reposant sur l'opposition entre le réseau attentionnel dorsal et le réseau du mode par défaut, popularisé sous le terme deep work par Cal Newport"
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
    name: "4 leviers pour développer une concentration profonde",
    description: "Leviers validés par la recherche en sciences cognitives et en neurosciences de l'attention pour restaurer un état de concentration profonde",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Protéger des blocs de deep work",
        description: "Réserver des plages de temps dédiées à une seule tâche exigeante, sans interruption, comme le recommande Cal Newport."
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Couper les interruptions internes et externes",
        description: "Supprimer les notifications et isoler son espace, mais aussi noter les pensées parasites plutôt que d'y céder, car une grande partie des interruptions vient de soi."
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Finir ou parquer une tâche avant d'en changer",
        description: "Terminer une tâche ou noter précisément où on en est limite l'attention résiduelle qui dégrade la tâche suivante (Sophie Leroy, 2009)."
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Entraîner son attention",
        description: "La concentration soutenue se renforce par la pratique régulière, qui consolide l'opposition entre réseau attentionnel et réseau du mode par défaut."
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
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Concentration profonde</li>
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
          Concentration profonde : ce que les neurosciences révèlent sur le deep work
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2008-2024
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> La concentration profonde (deep work) est un état de focus sans distraction. Dans le cerveau, elle repose sur l'opposition entre le réseau attentionnel et le réseau du mode par défaut, responsable du vagabondage mental. Le multitâche n'existe pas : le cerveau bascule, et chaque bascule laisse une trace qui dégrade la performance.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Mark G., UC Irvine, <em>CHI</em>, 2008 ; Leroy S., <em>Organizational Behavior and Human Decision Processes</em>, 2009 ; Kelly A.M.C. et al., <em>NeuroImage</em>, 2008.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">47<br/>sec</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                La durée moyenne d'attention sur un écran avant de basculer ailleurs est tombée de 2 minutes 30 en 2004 à environ 47 secondes en 2023, selon les données longitudinales synthétisées par Gloria Mark dans son livre Attention Span. Dans son étude en laboratoire, le travail interrompu était exécuté aussi vite, mais au prix de plus de stress, de frustration et d'effort.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Évolution de la durée d'attention : Gloria Mark, University of California Irvine, <em>Attention Span</em> (2023, synthèse de ses données longitudinales). Coût du travail interrompu : Mark G., Gudith D., Klocke U., <em>CHI 2008</em> (DOI : 10.1145/1357054.1357072)
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle de la concentration profonde et du deep work : particules de lumière dispersées se rassemblant en une sphère lumineuse concentrée, métaphore de l'attention fragmentée devenant un focus profond, fond sombre indigo"
            className="w-full h-auto object-cover"
            width={1200}
            height={630}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu t'assois pour travailler sur quelque chose d'important. Cinq minutes plus tard, tu vérifies ton téléphone, tu ouvres un onglet, tu réponds à un message. Et tu te demandes pourquoi tu n'avances jamais sur ce qui compte vraiment.
          </p>
          <p>
            Ce n'est pas un défaut de caractère. C'est une question de mécanique cérébrale. La <strong>concentration profonde</strong> obéit à des règles précises, et la plupart des conseils que tu as lus (méthode Pomodoro, bloquer son agenda) passent à côté de l'essentiel : ce qui se passe réellement dans ton cerveau quand tu te concentres, et pourquoi il décroche.
          </p>
          <p>
            Les articles les mieux classés en français sur ce sujet répètent tous « deep work » et « 23 minutes pour se reconcentrer » sans jamais citer une seule étude vérifiable. Cet article part des neurosciences, corrige au passage un mythe tenace, et arrive à des leviers concrets.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce que la concentration profonde (deep work) ?</h2>
          <p>
            La concentration profonde désigne un état de travail entièrement dédié à une tâche exigeante, sans distraction. C'est le contraire du travail superficiel, fait de mails, de réunions et de notifications, où l'attention saute en permanence d'un objet à l'autre.
          </p>

          <h3>La définition de Cal Newport</h3>
          <p>
            Le terme <strong>deep work</strong> a été popularisé par Cal Newport, professeur d'informatique à Georgetown University (États-Unis), dans son livre du même nom (2016). Attention : Newport est un universitaire et un auteur, pas un neuroscientifique. Sa définition est utile, mais elle décrit un comportement, pas un mécanisme cérébral.
          </p>
          <p>
            Il définit le deep work comme une activité menée dans un état de concentration sans distraction qui pousse tes capacités cognitives à leur limite. L'idée clé : ce type de travail crée de la valeur difficile à reproduire, et il devient de plus en plus rare. Pour comprendre pourquoi il est si rare aujourd'hui, il faut regarder ce qui est arrivé à notre attention.
          </p>

          <h3>Pourquoi elle est devenue rare : 47 secondes d'attention</h3>
          <p>
            La chercheuse Gloria Mark (University of California, Irvine) suit depuis vingt ans la durée d'attention des travailleurs en conditions réelles. Le résultat est vertigineux : en 2004, on restait en moyenne 2 minutes 30 sur un écran avant de basculer ailleurs. En 2023, cette durée est tombée à environ 47 secondes.
          </p>
          <p>
            Imagine un muscle qu'on n'entraîne plus jamais à tenir un effort long : il s'atrophie. Notre attention soutenue subit le même sort, sollicitée en permanence par des stimulations courtes. C'est aussi le cœur du problème de l'<Link to="/blog/attention-fragmentee-concentration-numerique/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">attention fragmentée à l'ère numérique</Link>, qui détaille comment les écrans morcellent notre capacité de focus.
          </p>

          {/* H2 — Cerveau */}
          <h2>Que se passe-t-il dans le cerveau quand tu te concentres ?</h2>
          <p>
            La concentration profonde n'est pas qu'une affaire de volonté. C'est un équilibre entre deux grands réseaux du cerveau, qui doivent fonctionner en opposition.
          </p>

          <h3>DMN contre DAN, les deux réseaux en opposition</h3>
          <p>
            Ton cerveau possède un <strong>réseau attentionnel dorsal</strong> (souvent abrégé DAN), qui s'active quand tu diriges ton attention vers une tâche extérieure. Il a aussi un <strong>réseau du mode par défaut</strong> (DMN), qui s'allume quand tu ne fais rien de précis : rêverie, pensées sur toi-même, vagabondage mental.
          </p>
          <p>
            Ces deux réseaux fonctionnent comme une bascule : quand l'un monte, l'autre descend. Pour rester concentré, ton réseau attentionnel doit dominer et maintenir le réseau du mode par défaut en retrait. Plus cette opposition (les chercheurs parlent d'anticorrélation) est marquée, plus ton attention est stable.
          </p>
          <p>
            Une précision honnête : les neuroscientifiques mesurent ici l'attention soutenue et l'organisation des réseaux cérébraux, pas « le deep work » au sens de Newport, qui reste un terme comportemental. Mais le mécanisme de fond est bien celui qui rend la concentration profonde possible.
          </p>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">DMN<br/>vs DAN</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  En imagerie cérébrale, plus l'opposition entre le réseau du mode par défaut et le réseau attentionnel est forte, plus la performance attentionnelle est stable et régulière. Quand le réseau du mode par défaut reprend la main (vagabondage, notification, pensée parasite), cette opposition s'effondre et la concentration soutenue devient biologiquement difficile, pas seulement pénible.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Kelly A.M.C., Uddin L.Q., Biswal B.B., Castellanos F.X., Milham M.P., New York University, <em>NeuroImage</em>, 2008 (DOI : 10.1016/j.neuroimage.2007.08.008) ; confirmé par Seeburger et al., 2024 (DOI : 10.3758/s13415-024-01156-1)
                </p>
              </div>
            </div>
          </div>

          <h3>Pourquoi la concentration décroche toute seule</h3>
          <p>
            Tu as déjà remarqué que ton attention finit par lâcher même sans interruption extérieure ? Ce n'est pas un manque de discipline. L'attention soutenue fluctue naturellement, par vagues.
          </p>
          <p>
            Une étude de 2024 (Seeburger et ses collègues, Georgia Tech) a montré que ces fluctuations de la concentration sont liées à des variations de l'activité du réseau du mode par défaut au cours du temps. Autrement dit, ton cerveau alterne spontanément entre des moments où il tient bien la tâche et des moments où il dérive. Comprendre cela change tout : décrocher de temps en temps est normal, l'enjeu est de revenir vite, pas de ne jamais lâcher.
          </p>

          {/* H2 — Multitâche */}
          <h2>Pourquoi le multitâche détruit-il la concentration ?</h2>
          <p>
            Le mot multitâche est trompeur. Il laisse croire qu'on peut mener deux choses de front. Pour des tâches qui demandent de l'attention, c'est faux, et le coût est plus élevé qu'on ne le pense.
          </p>

          <h3>Le mythe du multitâche : le cerveau bascule, il ne partage pas</h3>
          <p>
            Quand tu crois faire deux choses à la fois (écrire un mail en suivant une réunion), ton cerveau ne traite pas les deux en parallèle. Il bascule très vite de l'une à l'autre, comme un projecteur qui ne peut éclairer qu'un point à la fois.
          </p>
          <p>
            Chaque bascule a un coût : un petit temps de réengagement, et une hausse du risque d'erreur. Multiplie ces micro-coûts par les centaines de fois où tu changes de tâche dans une journée, et tu obtiens une perte de performance massive. C'est l'un des mécanismes qui nourrit aussi la <Link to="/blog/procrastination-cerveau-agir-neurosciences/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">procrastination, quand le cerveau fuit la tâche difficile</Link> vers des sollicitations plus faciles.
          </p>

          <h3>Le vrai statut des « 23 minutes »</h3>
          <p>
            Tu as forcément croisé cette affirmation : « il faut 23 minutes pour se reconcentrer après une interruption ». Elle est partout. Et pourtant, elle n'est tirée d'aucun article scientifique clairement identifiable.
          </p>
          <p>
            Ce chiffre circule via des interviews et des conférences, pas via un résultat publié et vérifiable. Ce que la recherche établit réellement, c'est l'étude de Gloria Mark et de ses collègues (2008) : après une interruption, les gens terminent leur tâche aussi vite, parfois plus vite, mais au prix de plus de stress, de frustration et d'effort. Le coût de l'interruption est donc bien réel, mais il se paie en tension mentale, pas forcément en un nombre fixe de minutes. Être précis sur ce point, c'est respecter le lecteur plutôt que de relayer un chiffre joliment rond.
          </p>

          <h3>L'attention résiduelle, le coût caché du changement de tâche</h3>
          <p>
            Voici le mécanisme le plus important, et le plus absent des articles français. Il a été décrit par la psychologue <strong>Sophie Leroy</strong> (alors à University of Minnesota) en 2009 : l'attention résiduelle.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Attention<br/>résiduelle</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Quand tu passes d'une tâche A à une tâche B, une partie de ton attention reste accrochée à la tâche A, surtout si tu ne l'as pas terminée. Tu travailles alors sur B avec une capacité mentale réduite. Ce résidu n'est pas une impression : il dégrade objectivement la performance sur la nouvelle tâche, indépendamment de ta motivation.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Sophie Leroy, University of Minnesota, <em>Organizational Behavior and Human Decision Processes</em>, vol. 109(2), 2009 (DOI : 10.1016/j.obhdp.2009.04.002)
                </p>
              </div>
            </div>
          </div>

          <p>
            Concrètement : si tu interromps ton rapport pour répondre à un message, puis que tu y reviens, une partie de ta tête est encore sur le message. C'est pourquoi terminer (ou au moins noter précisément où tu en es) avant de changer de tâche change radicalement ta qualité de concentration.
          </p>

          {/* H2 — 4 leviers */}
          <h2>Comment développer une concentration profonde (4 leviers) ?</h2>
          <p>
            Puisque la concentration profonde est un mécanisme cérébral, on agit dessus par l'environnement et l'entraînement, pas par la seule volonté. Voici quatre leviers validés.
          </p>

          <h3>1. Protéger des blocs de deep work</h3>
          <p>
            Réserve des plages de temps dédiées à une seule tâche exigeante, sans interruption. L'idée n'est pas de travailler plus, mais de créer des fenêtres où ton réseau attentionnel peut s'installer durablement.
          </p>
          <p>
            Commence modestement : un bloc de 45 à 90 minutes suffit. Le matin est souvent le meilleur moment, quand l'esprit est le plus disponible, comme le détaille l'article sur <Link to="/blog/routine-matinale-scientifique-cerveau/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">la routine matinale et les 90 premières minutes</Link>.
          </p>

          <h3>2. Couper les interruptions internes ET externes</h3>
          <p>
            Les interruptions externes sont les plus visibles : notifications, onglets, collègues. Coupe-les. Mets ton téléphone dans une autre pièce, ferme ta messagerie. Chaque notification est conçue pour déclencher une petite décharge de curiosité, un mécanisme proche de celui décrit dans l'article sur <Link to="/blog/neuro-dopamine-routine/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">la dopamine et la boucle de l'anticipation</Link>.
          </p>
          <p>
            Mais le plus contre-intuitif, c'est que la majorité des interruptions viennent de toi. Gloria Mark a montré qu'on s'auto-interrompt très souvent, presque autant que l'environnement nous interrompt. La parade : quand une pensée parasite surgit (« il faut que je pense à... »), note-la sur un papier pour la traiter plus tard, au lieu d'y céder sur le moment.
          </p>

          <h3>3. Finir ou parquer une tâche avant d'en changer</h3>
          <p>
            C'est l'application directe de l'attention résiduelle. Évite de laisser des tâches à moitié faites en suspens dans ta tête. Si tu dois absolument t'interrompre, prends dix secondes pour noter exactement où tu en es et quelle est la prochaine action.
          </p>
          <p>
            Ce simple geste libère ton attention de la tâche précédente et te permet d'arriver sur la suivante l'esprit dégagé. C'est l'inverse du multitâche : un seul objet d'attention à la fois, proprement clôturé avant le suivant.
          </p>

          <h3>4. Entraîner ton attention</h3>
          <p>
            La concentration soutenue est comme un muscle : elle se renforce par la pratique. Plus tu t'entraînes à ramener ton attention sur une tâche quand elle dérive, plus l'opposition entre tes réseaux cérébraux se consolide.
          </p>
          <p>
            La clé est la régularité. Répété chaque jour, le fait de protéger un bloc de concentration finit par devenir automatique : c'est exactement le principe de <Link to="/blog/formation-habitudes-cerveau-neurosciences/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">la formation des habitudes dans le cerveau</Link>. Au début, tenir 45 minutes demande un effort ; après quelques semaines, c'est ton nouveau réflexe.
          </p>

          {/* Encadré protocole pratique */}
          <div className="not-prose my-6 bg-amber-50 dark:bg-amber-950/30 p-5 rounded-lg border-l-4 border-amber-500">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-3">Protocole en 4 étapes</p>
            <ol className="space-y-2 text-sm text-amber-900 dark:text-amber-100 list-decimal list-inside">
              <li><strong>Choisis une seule tâche :</strong> la plus importante, pas la plus urgente.</li>
              <li><strong>Crée le vide :</strong> téléphone dans une autre pièce, notifications coupées, un seul onglet.</li>
              <li><strong>Lance un bloc de 45 à 90 min :</strong> quand une pensée parasite surgit, note-la et reviens.</li>
              <li><strong>Clôture proprement :</strong> avant de t'arrêter, note la prochaine action pour éviter l'attention résiduelle.</li>
            </ol>
          </div>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>✅ <strong>Le mécanisme :</strong> la concentration profonde repose sur l'opposition entre le réseau attentionnel et le réseau du mode par défaut. Plus l'opposition est forte, plus l'attention est stable (Kelly, 2008).</li>
              <li>✅ <strong>Le multitâche n'existe pas :</strong> le cerveau bascule au lieu de partager. Chaque bascule coûte en temps, en erreurs et en stress.</li>
              <li>🔑 <strong>L'attention résiduelle :</strong> changer de tâche laisse une partie de l'esprit sur la précédente. Finir ou noter où on en est avant de switcher protège la concentration (Leroy, 2009).</li>
              <li>⚠️ <strong>Le mythe des 23 minutes :</strong> ce chiffre n'a pas de source publiée claire. Le vrai coût de l'interruption se paie surtout en stress et en effort.</li>
              <li>⚠️ <strong>Les interruptions internes :</strong> on s'auto-interrompt presque autant que l'environnement nous interrompt. Noter la pensée parasite plutôt que d'y céder.</li>
              <li>🔑 <strong>Pour progresser :</strong> protéger des blocs, couper les distractions, clôturer avant de changer, et entraîner l'attention par la régularité.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur la concentration profonde</h2>
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
            <p className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">Fiche Deep Work : le protocole de concentration en 4 étapes</p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">
              Une fiche A4 à imprimer : choisir la bonne tâche, créer le vide, tenir un bloc de focus, clôturer sans attention résiduelle. Le tout fondé sur le mécanisme DMN/DAN, en une page.
            </p>
            <a
              href="/Downloads/concentration-profonde-deep-work-neurosciences-guide.pdf"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la fiche concentration (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Mark G., Gudith D., Klocke U. — <em>The cost of interrupted work: more speed and stress</em> — University of California Irvine / Humboldt University — <em>Proceedings of CHI 2008</em> — DOI : <a href="https://doi.org/10.1145/1357054.1357072" className="underline" target="_blank" rel="noopener noreferrer">10.1145/1357054.1357072</a>
            </li>
            <li>
              [2] Mark G. — <em>Attention Span: A Groundbreaking Way to Restore Balance, Happiness and Productivity</em> — University of California Irvine — Hanover Square Press, 2023
            </li>
            <li>
              [3] Leroy S. — <em>Why is it so hard to do my work? The challenge of attention residue when switching between work tasks</em> — University of Minnesota — <em>Organizational Behavior and Human Decision Processes</em>, vol. 109(2), 2009 — DOI : <a href="https://doi.org/10.1016/j.obhdp.2009.04.002" className="underline" target="_blank" rel="noopener noreferrer">10.1016/j.obhdp.2009.04.002</a>
            </li>
            <li>
              [4] Kelly A.M.C., Uddin L.Q., Biswal B.B., Castellanos F.X., Milham M.P. — <em>Competition between functional brain networks mediates behavioral variability</em> — New York University — <em>NeuroImage</em>, vol. 39(1), 2008 — DOI : <a href="https://doi.org/10.1016/j.neuroimage.2007.08.008" className="underline" target="_blank" rel="noopener noreferrer">10.1016/j.neuroimage.2007.08.008</a>
            </li>
            <li>
              [5] Seeburger D.T., Xu N., Ma M., Larson S., Godwin C., Keilholz S.D., Schumacher E.H. — <em>Time-varying functional connectivity predicts fluctuations in sustained attention in a serial tapping task</em> — Georgia Institute of Technology — <em>Cognitive, Affective, &amp; Behavioral Neuroscience</em>, 2024 — DOI : <a href="https://doi.org/10.3758/s13415-024-01156-1" className="underline" target="_blank" rel="noopener noreferrer">10.3758/s13415-024-01156-1</a>
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
