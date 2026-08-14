// src/articles/NeurotransmetteurHumeur.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 25 avril 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "neurotransmetteurs-humeur-cerveau",
  title: "7 Neurotransmetteurs Qui Contrôlent Votre Humeur : Ce que la Science Dit Vraiment",
  description: "Dopamine, sérotonine, GABA : les 7 neurotransmetteurs qui régulent votre humeur expliqués avec les études PubMed 2022-2024. Mythe du déséquilibre chimique déconstruit.",
  cover: "/images/articles/neurotransmetteurs-humeur-cerveau-cover",
  datePublished: "2026-04-25T08:00:00+01:00",
  dateModified: "2026-04-25T08:00:00+01:00",
  tags: ["neurotransmetteurs", "humeur", "sérotonine", "dopamine", "GABA", "neurosciences", "cerveau"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Neurosciences",
  readingTime: "18 min",
  version: "1.0",
  verifiedDate: "Avril 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Quel est le vrai rôle de la sérotonine dans l'humeur ?",
    answer: "La sérotonine est un stabilisateur de l'humeur, pas une \"hormone du bonheur.\" Elle régule les cycles veille-sommeil, l'appétit, la tolérance à la douleur et l'impulsivité. Environ 90 % de la sérotonine du corps est produite dans l'intestin. La sérotonine cérébrale, produite dans les noyaux du raphé, agit sur la régulation émotionnelle. Son absence provoque irritabilité et instabilité, pas simplement une baisse de bonheur."
  },
  {
    question: "Pourquoi dit-on que la dopamine est le neurotransmetteur du plaisir — est-ce vrai ?",
    answer: "Non, c'est inexact. La dopamine est le neurotransmetteur de l'anticipation et de la motivation. Schott et al. (Université de Magdebourg, 2008) ont montré que le pic de dopamine survient avant l'obtention d'une récompense, pas au moment de la ressentir. Le plaisir ressenti lui-même implique principalement les circuits opioïdes endogènes. La confusion vient d'une simplification excessive dans la vulgarisation des années 1990-2000."
  },
  {
    question: "Le \"déséquilibre chimique\" explique-t-il vraiment la dépression ?",
    answer: "Non. L'umbrella review de Moncrieff et al. (UCL, Molecular Psychiatry, 2022) — la méta-analyse la plus exhaustive sur la sérotonine et la dépression — n'a trouvé aucun lien cohérent entre activité sérotoninergique réduite et dépression. La dépression est probablement un trouble complexe impliquant neuroplasticité, inflammation et facteurs psychosociaux, pas un simple manque de molécules."
  },
  {
    question: "Quelle est la différence entre un neurotransmetteur et une hormone ?",
    answer: "Un neurotransmetteur est libéré par un neurone et agit localement sur le neurone voisin, en quelques millisecondes, au niveau d'une synapse. Une hormone est sécrétée par une glande et voyage dans le sang pour agir sur des organes éloignés, en quelques minutes à quelques heures. Certaines molécules jouent les deux rôles : la dopamine et la noradrénaline sont neurotransmetteurs dans le cerveau et hormones dans d'autres organes."
  },
  {
    question: "Comment le GABA réduit-il l'anxiété concrètement ?",
    answer: "Le GABA se fixe sur les récepteurs GABA-A des neurones, ouvrant des canaux à chlorure. L'entrée du chlorure hyperpolarise le neurone, le rendant moins susceptible de s'activer. Le niveau d'excitation global du cerveau diminue. C'est ce mécanisme que les benzodiazépines amplifient. Kaur et al. (PGIMER, 2024) ont confirmé que la downregulation du GABA est causalement liée à l'anxiété, dans des études humaines et animales."
  },
  {
    question: "Pourquoi les antidépresseurs prennent-ils des semaines avant d'agir ?",
    answer: "Les ISRS modifient la sérotonine en quelques heures, mais l'effet clinique sur l'humeur n'apparaît qu'après 2 à 6 semaines. Ce délai prouve que leur action passe par d'autres processus : neuroplasticité (augmentation du BDNF), désensibilisation des autorécepteurs et effets anti-inflammatoires. La sérotonine seule ne peut pas expliquer ce décalage. (Belge & Sabbe, Frontiers in Psychiatry, 2020)"
  },
  {
    question: "Le sport augmente-t-il vraiment les neurotransmetteurs ?",
    answer: "Oui, avec des preuves solides. L'exercice aérobie augmente le tryptophane libre (précurseur de la sérotonine), active les circuits dopaminergiques de récompense et stimule la production de BDNF dans l'hippocampe. Ces effets ont été mesurés chez l'humain. Les bénéfices sur l'humeur apparaissent après 20 à 30 minutes d'effort modéré et durent plusieurs heures."
  },
  {
    question: "Comment les neurotransmetteurs interagissent-ils entre eux ?",
    answer: "Les neurotransmetteurs s'influencent mutuellement en permanence. La sérotonine module la dopamine via des projections sur l'aire tegmentale ventrale. Le GABA et le glutamate forment un équilibre inhibition/excitation fondamental. La noradrénaline amplifie les effets du cortisol en stress. Ces interactions expliquent pourquoi les modèles simplifiés \"une molécule = un état d'humeur\" sont insuffisants : l'humeur est le résultat d'un équilibre dynamique entre plusieurs systèmes."
  },
  {
    question: "Peut-on avoir un déficit de dopamine sans maladie neurologique ?",
    answer: "Oui. Un manque de stimulation (ennui chronique, absence d'objectifs), un sommeil insuffisant, une alimentation carencée en précurseurs (tyrosine, phénylalanine) ou un stress chronique peuvent réduire l'efficacité du système dopaminergique sans maladie diagnostiquée. Perte de motivation, difficulté à trouver du plaisir anticipatoire et procrastination sont des signaux fonctionnels possibles. Un médecin peut évaluer ce type de symptômes."
  },
  {
    question: "Quelle alimentation favorise la production de sérotonine ?",
    answer: "Les aliments riches en tryptophane — œufs, dinde, graines de courge, chocolat noir — fournissent le précurseur de la sérotonine. Condition cruciale : les associer à des glucides complexes (riz complet, patate douce). Les glucides stimulent l'insuline, qui redirige les acides aminés concurrents vers les muscles et libère le passage du tryptophane vers le cerveau. Sans glucides, l'effet reste limité."
  }
];

// ==================== COMPOSANT ====================

export default function NeurotransmetteurHumeur() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
  const url = `${site}/blog/${meta.slug}/`;
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;

  // ==================== SCHEMAS JSON-LD ====================

  const coverImageUrl = `${site}${meta.cover}.webp`;

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
    caption: "Visualisation abstraite des 7 neurotransmetteurs de l'humeur comme noeuds lumineux dans un réseau synaptique cérébral, illustration scientifique"
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
      name: "Neurotransmetteurs et régulation de l'humeur",
      description: "Mécanismes neurochimiques de la sérotonine, dopamine, GABA, noradrénaline, endorphines, acétylcholine et glutamate dans la régulation des états émotionnels"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 4400
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog/` },
      { "@type": "ListItem", position: 3, name: "Neurosciences", item: `${site}/blog/?category=neurosciences` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "6 leviers prouvés pour moduler les neurotransmetteurs naturellement",
    description: "Stratégies scientifiquement validées pour moduler sérotonine, dopamine et GABA sans médicaments",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Exercice physique aérobie",
        description: "Augmente simultanément sérotonine, dopamine et BDNF. Effets mesurés chez l'humain après 20-30 minutes d'effort modéré."
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Exposition à la lumière matinale",
        description: "Synchronise l'horloge circadienne, stimule la sérotonine et synchronise la production de mélatonine le soir. 30 premières minutes du réveil, en extérieur."
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Alimentation riche en tryptophane et glucides complexes",
        description: "Le tryptophane (précurseur de la sérotonine) passe mieux la barrière hémato-encéphalique en présence de glucides complexes."
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Sommeil profond",
        description: "Restaure la sensibilité des récepteurs noradrénergiques et préserve l'équilibre GABA/glutamate. 7-9 heures recommandées."
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Méditation de pleine conscience",
        description: "8 semaines de pratique augmentent le GABA dans le cortex cingulaire antérieur et réduisent le volume de l'amygdale (Lazar, Harvard, 2005)."
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Apprentissage actif et nouveauté",
        description: "Active les circuits dopaminergiques anticipatoires. La nouveauté libère davantage de dopamine que la répétition de tâches maîtrisées."
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

      <article className="prose prose-neutral dark:prose-invert mx-auto px-4 sm:px-6 lg:px-8">

        <header className="not-prose mb-12">

          {/* Fil d'Ariane 4 niveaux */}
          <nav aria-label="Fil d'Ariane" className="text-sm mb-6">
            <Link to="/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">Accueil</Link>
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
            <Link to="/blog/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">Blog</Link>
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
            <Link to="/blog/?category=neurosciences" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">Neurosciences</Link>
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
            <span aria-current="page" className="text-neutral-700 dark:text-neutral-300 truncate max-w-[180px] sm:max-w-none">{meta.title}</span>
          </nav>

          {/* Badges */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
              Neurosciences
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300">
              Humeur
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
            {meta.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
            {meta.description}
          </p>

          {/* Signal fraîcheur */}
          <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
            Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2022-2024
          </div>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            <span>par {meta.author.name}</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <span>{meta.readingTime} de lecture</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <time dateTime={meta.datePublished}>
              {new Date(meta.datePublished).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
            </time>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <div className="flex gap-1 flex-wrap">
              {meta.tags.map((tag, i) => (
                <span key={tag} className="text-indigo-600 dark:text-indigo-400">
                  #{tag}{i < meta.tags.length - 1 && " "}
                </span>
              ))}
            </div>
          </div>

          {/* Image de couverture */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={`${meta.cover}.webp`}
              alt="Visualisation abstraite des 7 neurotransmetteurs de l'humeur représentés comme des noeuds lumineux dans un réseau synaptique cérébral sur fond sombre"
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </header>

        <div className="mt-10">

          {/* QUICK ANSWER BLOCK — dans les 200 premiers mots */}
          <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
              <strong>En bref :</strong> Les 7 neurotransmetteurs clés de l'humeur sont la sérotonine (stabilisatrice, non "hormone du bonheur"), la dopamine (motivation/anticipation, non plaisir), le GABA (frein de l'anxiété), la noradrénaline (vigilance), les endorphines, l'acétylcholine et le glutamate. Aucune étude rigoureuse ne valide le "déséquilibre chimique" comme cause directe de la dépression.
            </p>
            <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
              <strong>Sources :</strong> Moncrieff et al., <em>Molecular Psychiatry</em>, 2022 ; Schott et al., <em>Journal of Neuroscience</em>, 2008 ; Kaur et al., <em>Biochemical and Biophysical Research Communications</em>, 2024.
            </p>
          </div>

          {/* StatBlock 1 — TEAL — juste après le QuickAnswer */}
          <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">~40 NT</div>
              <div>
                <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                  neurotransmetteurs distincts identifiés dans le cerveau humain — chacun se fixe sur des récepteurs spécifiques dans des zones précises pour produire des effets précis sur humeur, motivation, anxiété et cognition.
                </p>
                <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                  Purves et al., Duke University, <em>Neuroscience</em>, 6e éd., 2018
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <p className="lead">
            Tu as déjà ressenti une vague d'euphorie après une séance de sport ? Ou une anxiété qui monte sans raison apparente, un soir de semaine ? Ces états ne sont pas mystérieux. Derrière chaque variation d'humeur, les neurotransmetteurs jouent un rôle précis et mesurable.
          </p>

          <p>
            Pourtant, la plupart des articles sur les neurotransmetteurs et l'humeur répètent les mêmes erreurs : dopamine = plaisir, sérotonine = bonheur, dépression = déséquilibre chimique. Ces raccourcis sont contredits par les données scientifiques actuelles.
          </p>

          <p>
            En 2022, une équipe du University College London dirigée par Joanna Moncrieff a publié dans <em>Molecular Psychiatry</em> la méta-analyse la plus complète jamais réalisée sur la sérotonine et la dépression. Résultat : aucun lien cohérent entre activité sérotoninergique réduite et dépression. Ce sont des décennies de vulgarisation simplifiée qui s'effondrent.
          </p>

          <p>
            Dans cet article, tu vas comprendre ce que font vraiment ces 7 molécules — et pourquoi la réalité est plus fascinante que les mythes.{" "}
            <Link to="/blog/systeme-limbique-cerveau-emotionnel/" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              Les mécanismes du système limbique qui orchestrent ces signaux chimiques
            </Link>{" "}
            offrent un éclairage complémentaire indispensable.
          </p>

          {/* Points clés */}
          <div className="not-prose my-8 bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <p className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-3">Points clés</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="text-indigo-500 font-bold mt-0.5">•</span>
                <span>La sérotonine stabilise l'humeur et régule le sommeil. Elle n'est pas "l'hormone du bonheur."</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="text-indigo-500 font-bold mt-0.5">•</span>
                <span>La dopamine gère l'anticipation et la motivation, pas le plaisir ressenti en lui-même (Schott et al., 2008).</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="text-indigo-500 font-bold mt-0.5">•</span>
                <span>Le mythe du "déséquilibre chimique" n'est pas validé par les grandes méta-analyses (Moncrieff et al., UCL, 2022).</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="text-indigo-500 font-bold mt-0.5">•</span>
                <span>6 leviers naturels documentés permettent de moduler ces neurotransmetteurs efficacement.</span>
              </li>
            </ul>
          </div>

          {/* ====================================================== */}
          {/* SECTION 1 — DÉFINITION */}
          {/* ====================================================== */}

          <h2 id="definition-neurotransmetteurs">Qu'est-ce qu'un neurotransmetteur ?</h2>

          <p>
            Le cerveau humain utilise environ 40 neurotransmetteurs distincts pour coordonner humeur, motivation, anxiété et cognition. C'est une chimie d'une précision remarquable : chaque molécule se lie à un type de récepteur spécifique, dans une zone précise du cerveau, pour produire un effet précis. La même molécule peut produire des effets opposés selon le récepteur qu'elle active.
          </p>

          <h3>Messager chimique vs hormone : une distinction critique</h3>

          <p>
            Un neurotransmetteur — du latin <em>neuro</em> (nerf) et du français <em>transmetteur</em> — est une molécule libérée par un neurone qui agit sur le neurone voisin. L'effet est local et rapide : quelques millisecondes, dans un espace de quelques nanomètres. C'est une communication de précision, neurone à neurone.
          </p>

          <p>
            Une hormone, elle, est sécrétée par une glande (le pancréas, la thyroïde, les glandes surrénales) et voyage dans le sang pour atteindre des organes éloignés. Son effet est plus lent et plus diffus, sur plusieurs minutes à plusieurs heures.
          </p>

          <p>
            La confusion vient du fait que certaines molécules jouent les deux rôles. La dopamine est neurotransmetteur dans le cerveau — mais aussi hormone dans les reins, où elle régule la pression artérielle. Ce double rôle crée des approximations dans la vulgarisation : on parle d'"hormone de la dopamine" alors que c'est avant tout un neurotransmetteur.
          </p>

          <h3>Comment un neurotransmetteur agit-il sur l'humeur ?</h3>

          <p>
            Voici ce qui se passe concrètement. Ton neurone libère des molécules dans la fente synaptique — l'espace minuscule entre deux neurones. Ces molécules se fixent sur des récepteurs du neurone voisin, comme une clé dans une serrure. Si la clé correspond, le signal passe et le neurone s'active. Si le récepteur est absent ou bloqué, rien ne se produit.
          </p>

          <p>
            C'est pourquoi deux personnes peuvent avoir des "niveaux de sérotonine" identiques mais des humeurs très différentes. Ce qui compte, c'est aussi la densité des récepteurs, leur sensibilité, et les interactions entre plusieurs molécules en même temps. L'humeur n'est pas le résultat d'un seul neurotransmetteur. C'est un équilibre dynamique entre plusieurs systèmes en interaction permanente.
          </p>

          {/* ====================================================== */}
          {/* SECTION 2 — MYTHE DÉSÉQUILIBRE CHIMIQUE */}
          {/* ====================================================== */}

          <h2 id="mythe-desequilibre-chimique">Le mythe du "déséquilibre chimique" : ce que la science dit vraiment</h2>

          <p>
            En juillet 2022, Joanna Moncrieff et ses collègues du University College London (UCL) ont publié dans <em>Molecular Psychiatry</em>{" "}
            <a href="https://doi.org/10.1038/s41380-022-01661-0" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              l'umbrella review
            </a>{" "}
            la plus exhaustive jamais réalisée sur la sérotonine et la dépression. La méta-analyse inclut la plus grande étude jamais conduite sur les transporteurs de sérotonine (SERT), avec 1845 participants.
          </p>

          {/* StatBlock 2 — INDIGO */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">n&nbsp;=&nbsp;1845</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Aucune corrélation cohérente entre activité sérotoninergique réduite et dépression — résultat de la plus grande méta-analyse sur les transporteurs de sérotonine (SERT). Ni les études sur le tryptophane, ni les méta-analyses des récepteurs 5-HT n'ont établi de lien clair.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Moncrieff, Cooper, Stockmann et al., University College London, <em>Molecular Psychiatry</em>, Juillet 2022 — DOI : 10.1038/s41380-022-01661-0
                </p>
              </div>
            </div>
          </div>

          <h3>Origine du mythe — la théorie monoaminergique des années 1960</h3>

          <p>
            Dans les années 1960, des chercheurs ont remarqué que certains médicaments qui augmentaient les monoamines — un groupe qui inclut la sérotonine, la dopamine et la noradrénaline — amélioraient l'humeur chez certains patients. De là est née la théorie monoaminergique de la dépression : la dépression serait causée par un manque de ces molécules.
          </p>

          <p>
            C'était une hypothèse de travail, pas une conclusion établie. Mais les laboratoires pharmaceutiques l'ont traduite en message marketing : "la dépression est un déséquilibre chimique, nos antidépresseurs le corrigent." Ce message s'est installé dans la culture populaire pendant 50 ans, transmis par des millions de brochures médicales et de campagnes publicitaires.
          </p>

          <h3>L'umbrella review de 2022 qui change tout</h3>

          <p>
            L'umbrella review de Moncrieff a examiné systématiquement 6 domaines de recherche : niveaux de sérotonine dans le sang et l'urine, études sur les récepteurs 5-HT1A et 5-HT1B, études sur le transporteur SERT, études de déplétion du tryptophane (le précurseur de la sérotonine), études d'imagerie et études génétiques. Sur aucun de ces fronts, la revue n'a trouvé de preuve cohérente que des personnes dépressives ont une activité sérotoninergique réduite.
          </p>

          <p>
            La conclusion des auteurs est directe : l'hypothèse sérotoninergique de la dépression n'est pas étayée par les données actuelles. Ce résultat ne signifie pas que les antidépresseurs (ISRS) ne fonctionnent pas — les essais cliniques montrent qu'ils ont un effet mesurable. Cela signifie que leur mécanisme d'action réel est probablement plus complexe que la simple "correction d'un déficit." Le cerveau n'est pas une balance chimique à rééquilibrer.
          </p>

          <h3>Les 3 failles du modèle monoaminergique</h3>

          <p>
            <strong>Faille 1 : la déplétion du tryptophane ne cause pas de dépression chez les sujets sains.</strong> Si la dépression était due à un manque de sérotonine, réduire artificiellement le tryptophane devrait déclencher une dépression chez n'importe qui. Ce n'est pas ce que montrent les études : chez des individus sans antécédents, la déplétion produit des effets mineurs ou nuls.{" "}
            <a href="https://doi.org/10.3389/fpsyt.2020.00218" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              (Belge &amp; Sabbe, <em>Frontiers in Psychiatry</em>, 2020)
            </a>
          </p>

          <p>
            <strong>Faille 2 : les ISRS modifient la sérotonine en quelques heures, mais l'effet clinique arrive après 2 à 6 semaines.</strong> Ce délai suggère que l'action passe par d'autres processus : neuroplasticité, modulation des récepteurs, effets anti-inflammatoires.{" "}
            <a href="https://doi.org/10.3389/fpsyt.2020.00218" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              (Belge &amp; Sabbe, <em>Frontiers in Psychiatry</em>, 2020)
            </a>
          </p>

          <p>
            <strong>Faille 3 : certains antidépresseurs efficaces n'agissent pas sur la sérotonine.</strong> La tianeptine réduit la recapture de la sérotonine (à l'inverse des ISRS) tout en étant efficace contre la dépression. La kétamine agit sur le glutamate, pas la sérotonine, et produit des effets antidépresseurs en quelques heures. Ces exemples rendent le modèle "sérotonine = humeur" difficilement défendable.{" "}
            <a href="https://doi.org/10.3389/fpsyt.2020.00218" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              (Belge &amp; Sabbe, <em>Frontiers in Psychiatry</em>, 2020)
            </a>
          </p>

          {/* ====================================================== */}
          {/* SECTION 3 — LES 7 NEUROTRANSMETTEURS */}
          {/* ====================================================== */}

          <h2 id="7-neurotransmetteurs-humeur">Quels sont les 7 neurotransmetteurs qui régulent votre humeur ?</h2>

          <p>
            Les 7 neurotransmetteurs clés de l'humeur sont : la sérotonine (stabilisateur, non hormone du bonheur), la dopamine (anticipation, non plaisir), le GABA (frein de l'anxiété), la noradrénaline (vigilance), les endorphines (analgésie), l'acétylcholine (mémoire) et le glutamate (apprentissage). Chacun remplit un rôle distinct et ne peut pas être résumé à une émotion unique.
          </p>

          <p>
            Ces 7 molécules ont été sélectionnées sur la base des preuves scientifiques les plus solides concernant leur rôle dans la régulation des états émotionnels. Pour chacune, voici le mécanisme réel, les idées reçues à corriger, et un exemple concret du quotidien.
          </p>

          <h3>1. Sérotonine — stabilisateur de l'humeur (pas "hormone du bonheur")</h3>

          <p>
            La sérotonine (5-HT) est souvent surnommée "hormone du bonheur" — une étiquette inexacte. Son rôle réel est la stabilisation des états émotionnels, la régulation du sommeil, de l'appétit et de la perception de la douleur. Elle ne provoque pas directement une sensation de bonheur.
          </p>

          <p>
            Un fait peu connu : environ 90 % de la sérotonine du corps est produite dans l'intestin, non dans le cerveau. Cette sérotonine intestinale ne traverse pas la barrière hémato-encéphalique — la membrane protectrice qui sépare le sang du cerveau. Elle régule la motilité digestive, pas l'humeur. C'est la sérotonine cérébrale, produite dans les noyaux du raphé du tronc cérébral, qui agit sur les états émotionnels. Ce dialogue permanent entre le ventre et la tête est détaillé dans l'article sur l'<Link to="/blog/axe-intestin-cerveau-microbiote-humeur/" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">axe intestin-cerveau et son influence sur l'humeur</Link>.
          </p>

          <p>
            Quand l'activité sérotoninergique est perturbée, ce sont des troubles du sommeil, de l'impulsivité ou une irritabilité qui apparaissent. Pas une simple "baisse de bonheur." C'est pourquoi certains états anxieux s'accompagnent d'une dysrégulation sérotoninergique : la sérotonine joue sur l'intensité des réactions émotionnelles, pas sur leur valence positive ou négative.
          </p>

          <h3>2. Dopamine — anticipation et motivation (pas plaisir)</h3>

          {/* StatBlock 3 — INDIGO */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">r&nbsp;=&nbsp;0,748</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Corrélation (p = 0,004) entre activation du striatum ventral et libération de dopamine lors de l'ANTICIPATION d'une récompense — pas lors de sa réception. La dopamine code le désir et la motivation, pas le plaisir ressenti. Étude n = 11 participants sains (double session PET ¹¹C-raclopride + IRMf).
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Schott BH, Minuzzi L, Krebs RM, et al., Leibniz Institute for Neurobiology, Magdeburg, <em>Journal of Neuroscience</em>, 2008 — DOI : 10.1523/JNEUROSCI.2058-08.2008
                </p>
              </div>
            </div>
          </div>

          <p>
            La dopamine est systématiquement présentée comme "le neurotransmetteur du plaisir." C'est une erreur documentée. En 2008, Björn Schott et son équipe du Leibniz Institute for Neurobiology (Magdeburg, Allemagne) ont mesuré, sur 11 participants sains, l'activation du striatum ventral et la libération de dopamine pendant des tâches de récompense. Le pic de dopamine survient lors de l'anticipation d'une récompense, pas lors de sa réception.
          </p>

          <p>
            C'est pourquoi le défilement compulsif sur les réseaux sociaux est si difficile à arrêter. Ton cerveau anticipe en permanence une nouvelle récompense (un like, une information intéressante, une surprise). C'est la dopamine qui alimente cette anticipation. Le plaisir ressenti lui-même implique d'autres circuits, notamment les opioïdes endogènes.{" "}
            <Link to="/blog/neuro-dopamine-routine/" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              Le rôle de la dopamine dans les routines et les habitudes
            </Link>{" "}
            est développé en détail dans notre article dédié.
          </p>

          <h3>3. GABA — frein principal de l'anxiété</h3>

          <p>
            Le GABA (acide gamma-aminobutyrique) est le principal neurotransmetteur inhibiteur du cerveau. Une molécule inhibitrice est une molécule qui réduit l'activité des neurones — à l'inverse d'une molécule excitatrice qui l'augmente. Le GABA fonctionne comme un frein : il calme l'activité neuronale pour éviter une hyperexcitation.
          </p>

          {/* StatBlock 4 — INDIGO */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Causal</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  La diminution de l'activité GABA aggrave l'anxiété de façon causale. Les modulateurs GABA-A (benzodiazépines) restent l'approche pharmacologique la mieux validée pour l'anxiété aiguë. Ces résultats combinent études humaines et données animales.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Kaur, Kumar &amp; Medhi, PGIMER Chandigarh, <em>Biochemical and Biophysical Research Communications</em>, 2024 — DOI : 10.1016/j.bbrc.2024.150040
                </p>
              </div>
            </div>
          </div>

          <p>
            Imagine le cerveau comme une salle remplie de personnes qui parlent toutes en même temps. Le GABA est le présentateur qui demande le silence : il permet aux signaux pertinents d'émerger du bruit. Quand l'activité GABA est insuffisante, le cerveau reste dans un état d'excitation chronique — ce que l'on ressent comme de l'anxiété, de l'agitation ou de l'insomnie.
          </p>

          <p>
            Précision importante : les données sur la causalité GABA-anxiété combinent études humaines et études animales. Les mécanismes moléculaires précis ont souvent été caractérisés sur modèles murins avant validation humaine partielle. Les conclusions restent solides sur le principe, mais les détails mécanistiques exactement transposables à l'humain restent à affiner.
          </p>

          <h3>4. Noradrénaline — vigilance et éveil</h3>

          {/* StatBlock 5 — INDIGO */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">~15 000/hémis.</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  neurones par hémisphère dans le locus coeruleus (~30 000 bilatéral) — mais ils projettent sur l'intégralité du cortex cérébral et contrôlent l'état d'éveil global. Stress chronique : hypersécrétion CRF, dérèglement LC, vulnérabilité au PTSD. Mécanismes moléculaires issus d'études murines avec données humaines partielles.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Ross JA, Van Bockstaele EJ, Drexel University, Philadelphia, <em>Frontiers in Psychiatry</em>, 2021 — DOI : 10.3389/fpsyt.2020.601519
                </p>
              </div>
            </div>
          </div>

          <p>
            La noradrénaline — aussi appelée norépinéphrine — est libérée principalement par une structure minuscule du tronc cérébral : le locus coeruleus (LC). Littéralement "point bleu" en latin, car cette zone est légèrement pigmentée. Il ne contient qu'environ 15 000 neurones par hémisphère (soit ~30 000 au total) sur les 86 milliards que compte le cerveau humain — et pourtant le LC projette ses connexions sur l'ensemble du cortex. (Ross &amp; Van Bockstaele, Drexel University, 2021)
          </p>

          <p>
            Son rôle : régler l'état d'éveil et de vigilance. En situation de stress ou de danger, le LC augmente la libération de noradrénaline, redirigeant l'attention vers la menace perçue. C'est utile en urgence. Mais en stress chronique, cette hyperactivation permanente épuise les ressources et contribue aux troubles anxieux et au PTSD.
          </p>

          <h3>5. Endorphines — analgésie et euphorie transitoire</h3>

          <p>
            Les endorphines sont des peptides opioïdes endogènes — c'est-à-dire des molécules produites par ton propre cerveau qui se fixent sur les mêmes récepteurs que la morphine. "Endorphine" est la contraction de "endogène" (produit par le corps) et "morphine" (la molécule externe de référence).
          </p>

          <p>
            Elles sont libérées lors d'efforts physiques intenses, de rires prolongés, de douleur aiguë ou d'expériences émotionnelles fortes. Leur action principale : inhiber la transmission de la douleur et produire une sensation d'euphorie transitoire — le fameux "runner's high" ressenti après une course longue distance.
          </p>

          <p>
            Précision scientifique : contrairement à une idée répandue, les endorphines ne traversent pas facilement la barrière hémato-encéphalique. Le "runner's high" implique aussi des cannabinoïdes endogènes — notamment l'anandamide — qui eux traversent cette barrière plus facilement. La neurobiologie de l'euphorie à l'effort est plus complexe qu'une simple "montée d'endorphines."
          </p>

          <h3>6. Acétylcholine — mémoire et attention soutenue</h3>

          <p>
            L'acétylcholine (ACh) est le premier neurotransmetteur jamais découvert, en 1921, par Otto Loewi (Université de Graz, Autriche) — une découverte qui lui vaudra le Prix Nobel en 1936. Dans le cerveau, elle joue un rôle central dans deux fonctions : l'attention soutenue et la consolidation de la mémoire.
          </p>

          <p>
            Quand tu dois maintenir ton attention sur une tâche pendant une heure malgré les distractions, c'est le système cholinergique qui travaille. La dégénérescence de ce système est d'ailleurs l'une des signatures biologiques de la maladie d'Alzheimer : les neurones qui produisent l'acétylcholine dans le noyau basal de Meynert sont parmi les premiers touchés, ce qui explique les troubles de mémoire précoces dans cette maladie.
          </p>

          <h3>7. Glutamate — apprentissage et excitation neuronale</h3>

          <p>
            Le glutamate est le principal neurotransmetteur excitateur du cerveau. Là où le GABA freine, le glutamate accélère. Il agit sur des récepteurs NMDA et AMPA — les mêmes récepteurs qui sont au cœur de la plasticité synaptique et de la mémorisation. Sans glutamate, aucune potentialisation à long terme (LTP) n'est possible, et donc aucun apprentissage durable.
          </p>

          <p>
            C'est aussi la molécule impliquée dans le mécanisme d'action de la kétamine, un anesthésiant devenu antidépresseur d'urgence. En bloquant partiellement les récepteurs NMDA du glutamate, la kétamine produit des effets antidépresseurs en quelques heures — là où les ISRS prennent plusieurs semaines. Ce constat a relancé l'intérêt pour les théories non-sérotoninergiques de la dépression.
          </p>

          <p>
            L'excès de glutamate, à l'inverse, est neurotoxique. C'est l'excitotoxicité : trop de stimulation des récepteurs NMDA entraîne une entrée massive de calcium dans les neurones, qui peut les tuer. Ce mécanisme est impliqué dans certaines lésions cérébrales post-traumatiques.{" "}
            <Link to="/blog/plasticite-synaptique-apprentissage-cerveau/" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              Les mécanismes de plasticité synaptique qui dépendent du glutamate
            </Link>{" "}
            sont détaillés dans notre article sur la LTP et la LTD.
          </p>

          {/* ====================================================== */}
          {/* SECTION 4 — INTERACTIONS */}
          {/* ====================================================== */}

          <h2 id="interactions-neurotransmetteurs">Comment les neurotransmetteurs interagissent-ils entre eux ?</h2>

          <p>
            Les neurotransmetteurs ne fonctionnent jamais seuls. Le cerveau est un réseau d'interactions permanentes — et c'est précisément pourquoi les modèles simplifiés ("dopamine = plaisir", "sérotonine = bonheur") sont insuffisants pour expliquer des états aussi complexes que l'humeur. Comprendre ces interactions, c'est comprendre pourquoi les leviers naturels fonctionnent souvent mieux qu'une approche ciblant une seule molécule.
          </p>

          <h3>Le couple dopamine-sérotonine : pas d'opposition simple</h3>

          <p>
            Une erreur fréquente dans la vulgarisation consiste à présenter dopamine et sérotonine comme deux forces opposées : quand l'une monte, l'autre descend. C'est faux.
          </p>

          <p>
            Ces deux systèmes interagissent de façon bidirectionnelle et dépendante du contexte. Les neurones sérotoninergiques des noyaux du raphé projettent sur les neurones dopaminergiques de l'aire tegmentale ventrale (ATV), modulant leur activité. Mais l'effet n'est pas uniforme : selon le type de récepteur sérotoninergique impliqué (5-HT1A vs 5-HT2A), la sérotonine peut soit augmenter, soit réduire la libération de dopamine.
          </p>

          <p>
            En pratique : une activité physique intense augmente simultanément sérotonine et dopamine. Ce n'est pas une contradiction. C'est la preuve que ces systèmes sont complémentaires, pas antagonistes.
          </p>

          <h3>GABA et glutamate : le duo excitation-inhibition</h3>

          <p>
            Le GABA et le glutamate forment le couple le plus fondamental du cerveau. Le glutamate excite : il augmente la probabilité qu'un neurone s'active. Le GABA inhibe : il réduit cette probabilité.
          </p>

          <p>
            L'équilibre entre les deux détermine le "niveau de bruit de fond" du cerveau. Un déséquilibre vers l'excitation (trop de glutamate, pas assez de GABA) est associé à l'anxiété, à certaines formes d'épilepsie, et aux états de surmenage cognitif. Un déséquilibre vers l'inhibition produit sédation et troubles de mémoire — c'est l'effet des benzodiazépines à fortes doses.
          </p>

          <h3>Noradrénaline et cortisol : l'axe stress-vigilance</h3>

          <p>
            La noradrénaline et le cortisol — une hormone stéroïde libérée par les glandes surrénales — forment l'axe central de la réponse au stress. Lors d'une situation menaçante, le cortisol amplifie la sensibilité des récepteurs adrénergiques, rendant le système noradrénergique encore plus réactif.
          </p>

          <p>
            En stress chronique, cette boucle d'amplification devient problématique. Le locus coeruleus reste hyperactivé, libérant en permanence de la noradrénaline. Cette hyperactivation est l'une des signatures neurobiologiques du PTSD et de certains troubles anxieux chroniques.
          </p>

          {/* ====================================================== */}
          {/* SECTION 5 — 6 LEVIERS */}
          {/* ====================================================== */}

          <h2 id="leviers-naturels-neurotransmetteurs">Quels leviers naturels permettent de moduler vos neurotransmetteurs ?</h2>

          <p>
            Ces 6 leviers sont sélectionnés sur la base de preuves mesurées chez l'humain, pas uniquement sur des modèles animaux. Chacun agit sur plusieurs systèmes de neurotransmetteurs simultanément — ce qui les rend plus efficaces qu'une approche ciblant une seule molécule.
          </p>

          <h3>1. Exercice physique aérobie — élévation sérotonine + BDNF simultanés</h3>

          <p>
            L'exercice aérobie modéré (30 minutes, 3 fois par semaine) est le levier le mieux documenté pour augmenter simultanément la sérotonine, la dopamine et le BDNF — le BDNF étant le facteur de croissance qui nourrit les connexions neuronales. Ces effets ont été mesurés chez l'humain, pas seulement dans des modèles animaux.
          </p>

          <p>
            Le mécanisme implique une augmentation du tryptophane libre dans le plasma (précurseur de la sérotonine), une activation des circuits dopaminergiques de récompense, et une production de BDNF dans l'hippocampe. Ces trois effets combinés améliorent l'humeur, la motivation et la capacité d'apprentissage.{" "}
            <Link to="/blog/bdnf-augmenter-naturellement-neurosciences/" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              Ce mécanisme BDNF est détaillé dans notre article sur l'augmentation naturelle du BDNF
            </Link>.
          </p>

          <h3>2. Exposition à la lumière matinale — synchronisation sérotonine/mélatonine</h3>

          <p>
            La lumière matinale (dans les 30 premières minutes après le réveil, en extérieur) synchronise l'horloge biologique circadienne. Ce processus est piloté par les cellules ganglionnaires à mélanopsine de la rétine, qui projettent sur le noyau suprachiasmatique de l'hypothalamus — l'horloge biologique centrale du cerveau.
          </p>

          <p>
            Ce signal lumineux stimule la production de sérotonine dans les noyaux du raphé, et synchronise la production de mélatonine le soir. La mélatonine est directement synthétisée à partir de la sérotonine. Un manque de lumière matinale dérègle ce cycle et contribue aux états dépressifs saisonniers (Seasonal Affective Disorder, SAD).
          </p>

          <h3>3. Alimentation riche en tryptophane — précurseur sérotonine (conditions strictes)</h3>

          <p>
            Le tryptophane est l'acide aminé précurseur de la sérotonine. On le trouve dans les oeufs, la dinde, les graines de courge, le chocolat noir, les légumineuses. Mais une précision importante est souvent omise : le tryptophane seul ne suffit pas à augmenter la sérotonine cérébrale.
          </p>

          <p>
            Pour traverser la barrière hémato-encéphalique, le tryptophane entre en compétition avec d'autres acides aminés aromatiques. La consommation de glucides réduit indirectement cette compétition, en stimulant l'insuline — qui oriente les acides aminés concurrents vers les muscles, laissant davantage de tryptophane disponible pour le cerveau. Une alimentation riche en tryptophane ET en glucides complexes optimise donc ce passage.
          </p>

          <h3>4. Sommeil profond — restauration noradrénaline + GABA nocturne</h3>

          <p>
            Pendant le sommeil profond (ondes lentes, stade N3), le locus coeruleus s'arrête pratiquement de fonctionner. C'est la seule période où les neurones noradrénergiques se reposent pleinement. Cette pause est essentielle pour restaurer la sensibilité des récepteurs adrénergiques.
          </p>

          <p>
            En parallèle, le GABA orchestre le sommeil profond et consolide les souvenirs. Une nuit de sommeil insuffisant perturbe immédiatement l'équilibre noradrénergique du lendemain, augmentant la réactivité émotionnelle et l'anxiété.
          </p>

          <h3>5. Méditation et pleine conscience — modulation amygdale + GABA documentée</h3>

          <p>
            La pratique régulière de la méditation de pleine conscience (8 semaines minimum, 20 minutes par jour) a été associée à des modifications mesurables en neuroimagerie : réduction du volume de l'amygdale, augmentation du GABA dans le cortex cingulaire antérieur, et amélioration de la connectivité entre cortex préfrontal et système limbique.
          </p>

          <p>
            Sara Lazar (Harvard Medical School) a montré dès 2005 que des méditants réguliers présentent une épaisseur corticale supérieure dans les zones d'attention et de régulation émotionnelle (<em>NeuroReport</em>, 2005). L'augmentation du GABA dans le cortex cingulaire antérieur, elle, a été documentée par Streeter et al. (Boston University, <em>Journal of Alternative and Complementary Medicine</em>, 2010) : une séance de yoga de 60 minutes suffit à augmenter le GABA de 27 % dans ces régions, un effet comparable à celui des anxiolytiques légers à long terme. Ces modifications de la connectivité fronto-limbique se superposent aux circuits mobilisés par{" "}
            <Link to="/blog/empathie-neurones-miroirs-connexion-humaine/" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
              l'empathie et les neurones miroirs — qui font appel aux mêmes systèmes sérotoninergiques
            </Link>.
          </p>

          <h3>6. Apprentissage actif et nouveauté — libération dopamine anticipatoire</h3>

          <p>
            Chaque fois que tu apprends quelque chose de nouveau — une langue, un instrument, un concept scientifique — ton cerveau libère de la dopamine en anticipation de la maîtrise. Ce n'est pas le plaisir d'avoir appris qui libère la dopamine : c'est l'anticipation du progrès.
          </p>

          <p>
            Ce mécanisme explique pourquoi les personnes qui s'engagent dans des apprentissages nouveaux réguliers rapportent une motivation et un bien-être plus élevés. La nouveauté active les circuits dopaminergiques bien plus que la répétition de tâches déjà maîtrisées.
          </p>

          {/* ====================================================== */}
          {/* SECTION 6 — À RETENIR */}
          {/* ====================================================== */}

          <h2 id="a-retenir">À retenir</h2>

          <div className="not-prose my-8 bg-neutral-50 dark:bg-neutral-900/60 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <p className="text-sm font-bold text-neutral-700 dark:text-neutral-200 mb-4">Les 7 neurotransmetteurs de l'humeur — résumé structuré</p>

            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">Ce qu'ils sont</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Les neurotransmetteurs sont des molécules chimiques qui transmettent les signaux entre neurones au niveau des synapses. Ils agissent localement, en quelques millisecondes, sur des récepteurs spécifiques. L'humeur est le résultat d'un équilibre dynamique entre plusieurs systèmes — pas d'une seule molécule.
            </p>

            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">Les 7 neurotransmetteurs clés</p>
            <ol className="space-y-1 mb-4">
              {[
                ["Sérotonine", "stabilisation de l'humeur, sommeil, appétit. Produite à 90 % dans l'intestin. Pas \"l'hormone du bonheur.\""],
                ["Dopamine", "anticipation, motivation, apprentissage. Pas le plaisir ressenti."],
                ["GABA", "inhibition de l'anxiété, frein neuronal. Insuffisance = agitation chronique."],
                ["Noradrénaline", "vigilance, réponse au stress. Hyperactivation chronique = PTSD."],
                ["Endorphines", "analgésie, euphorie transitoire. Libérées lors de l'effort et du rire."],
                ["Acétylcholine", "attention soutenue, consolidation mémorielle. Déficitaire dans Alzheimer."],
                ["Glutamate", "apprentissage (LTP), excitation neuronale. Excès = neurotoxicité."]
              ].map(([name, desc], i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="font-black text-indigo-600 dark:text-indigo-400 min-w-[1.5rem]">{i + 1}.</span>
                  <span><strong>{name}</strong> : {desc}</span>
                </li>
              ))}
            </ol>

            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">Ce que la science réfute</p>
            <ul className="space-y-1 mb-4">
              {[
                "Le \"déséquilibre chimique\" comme cause directe de la dépression n'est pas validé (Moncrieff et al., UCL, 2022).",
                "Dopamine ne signifie pas plaisir — c'est une molécule de l'anticipation (Schott et al., 2008).",
                "Sérotonine ne signifie pas bonheur — c'est un stabilisateur de l'humeur.",
                "\"Quand dopamine monte, sérotonine descend\" — faux. Ces systèmes sont complémentaires."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="text-rose-500 font-bold mt-0.5">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">6 leviers naturels documentés</p>
            <ol className="space-y-1">
              {[
                "Exercice aérobie (30 min, 3×/semaine)",
                "Lumière matinale (30 premières minutes du réveil, en extérieur)",
                "Tryptophane + glucides complexes",
                "Sommeil profond (7-9 h)",
                "Méditation (20 min/jour, 8 semaines minimum)",
                "Apprentissage actif et nouveauté"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <span className="font-black text-emerald-600 dark:text-emerald-400 min-w-[1.5rem]">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA checklist PDF */}
          <div className="not-prose my-10 bg-violet-50 dark:bg-violet-950/40 rounded-xl p-8 border border-violet-100 dark:border-violet-800">
            <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wide mb-2">Ressource gratuite</p>
            <h3 className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">
              Télécharge la checklist gratuite : 7 Neurotransmetteurs de l'Humeur
            </h3>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Les 7 molécules qui régulent tes états émotionnels, leurs leviers naturels et le mythe du déséquilibre chimique — condensés en une checklist PDF d'une page.
            </p>
            <a
              href="/Downloads/neurotransmetteurs-humeur-checklist.pdf"
              download
              className="inline-flex items-center px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Télécharger la checklist PDF →
            </a>
          </div>

          {/* ====================================================== */}
          {/* FAQ */}
          {/* ====================================================== */}

          <h2 id="faq">Questions fréquentes sur les neurotransmetteurs et l'humeur</h2>

          <div className="not-prose space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5">
                <p className="font-semibold text-neutral-900 dark:text-white mb-2 text-sm">
                  {item.question}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* ====================================================== */}
          {/* CTA NEWSLETTER */}
          {/* ====================================================== */}

          <div className="not-prose my-12 bg-indigo-50 dark:bg-indigo-950/30 p-8 rounded-xl border border-indigo-200 dark:border-indigo-800 text-center">
            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2">Neurosciences chaque semaine</p>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
              Recevez les découvertes neuroscientifiques récentes directement dans votre boîte mail
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Analyses rigoureuses, études récentes, applications pratiques. Zéro promesses floues.
            </p>
            <a
              href="https://leveilmental.fr/ressources/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Accéder aux ressources gratuites
            </a>
          </div>

          {/* ====================================================== */}
          {/* SOURCES */}
          {/* ====================================================== */}

          <h2 id="sources">Sources scientifiques</h2>

          <ol className="text-sm space-y-3 text-neutral-600 dark:text-neutral-400">
            <li>
              Moncrieff J, Cooper RE, Stockmann T, et al. (2022). The serotonin theory of depression: a systematic umbrella review of the evidence. <em>Molecular Psychiatry</em>.{" "}
              <a href="https://doi.org/10.1038/s41380-022-01661-0" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
                DOI : 10.1038/s41380-022-01661-0
              </a>
            </li>
            <li>
              Schott BH, Minuzzi L, Krebs RM, et al. (2008). Mesolimbic functional magnetic resonance imaging activations during reward anticipation correlate with reward-related ventral striatal dopamine release. <em>Journal of Neuroscience</em>, 28(52):14311-14319.{" "}
              <a href="https://doi.org/10.1523/JNEUROSCI.2058-08.2008" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
                DOI : 10.1523/JNEUROSCI.2058-08.2008
              </a>
            </li>
            <li>
              Kaur H, Kumar B, Medhi B. (2024). GABA and anxiety: molecular mechanisms and therapeutic implications. <em>Biochemical and Biophysical Research Communications</em>.{" "}
              <a href="https://doi.org/10.1016/j.bbrc.2024.150040" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
                DOI : 10.1016/j.bbrc.2024.150040
              </a>
            </li>
            <li>
              Ross JA, Van Bockstaele EJ. (2021). The Locus Coeruleus-Norepinephrine System in Stress and Arousal: Unraveling Historical, Current, and Future Perspectives. <em>Frontiers in Psychiatry</em>, 11:601519.{" "}
              <a href="https://doi.org/10.3389/fpsyt.2020.601519" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
                DOI : 10.3389/fpsyt.2020.601519
              </a>
            </li>
            <li>
              Belge JB, Sabbe BG. (2020). The monoaminergic theory of depression revisited: new horizons. <em>Frontiers in Psychiatry</em>, 11:218.{" "}
              <a href="https://doi.org/10.3389/fpsyt.2020.00218" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
                DOI : 10.3389/fpsyt.2020.00218
              </a>
            </li>
            <li>
              Riechers RG, Mullet N, Rasmussen A. (2025). Where do "chemical imbalance" beliefs come from? Evaluating the impact of different sources. <em>Frontiers in Psychology</em>, 15:1469913.{" "}
              <a href="https://doi.org/10.3389/fpsyg.2024.1469913" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
                DOI : 10.3389/fpsyg.2024.1469913
              </a>
            </li>
            <li>
              Streeter CC, Whitfield TH, Owen L, et al. (2010). Effects of Yoga Versus Walking on Mood, Anxiety, and Brain GABA Levels: A Randomized Controlled MRS Study. <em>Journal of Alternative and Complementary Medicine</em>, 16(11):1145-1152.{" "}
              <a href="https://doi.org/10.1089/acm.2010.0007" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
                DOI : 10.1089/acm.2010.0007
              </a>
            </li>
            <li>
              Purves D, Augustine GJ, Fitzpatrick D, et al. (2018). <em>Neuroscience</em>, 6th edition. Duke University / Sinauer Associates.
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
