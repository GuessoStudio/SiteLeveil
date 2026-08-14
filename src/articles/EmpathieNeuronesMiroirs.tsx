// src/articles/EmpathieNeuronesMiroirs.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 19 avril 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "empathie-neurones-miroirs-connexion-humaine",
  title: "Empathie et neurones miroirs : ce que la science révèle",
  description: "Les neurones miroirs expliquent-ils vraiment l'empathie ? Circuits réels, fatigue empathique et 4 méthodes validées pour se connecter sans s'épuiser.",
  cover: "/images/articles/empathie-neurones-miroirs-connexion-humaine-cover",
  datePublished: "2026-04-19T08:00:00+01:00",
  dateModified: "2026-04-19T16:00:00+01:00",
  tags: ["empathie", "neurones miroirs", "connexion humaine", "insula", "compassion", "neurosciences"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Relations Humaines",
  readingTime: "14 min",
  version: "1.0",
  verifiedDate: "Avril 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Que sont exactement les neurones miroirs et pourquoi ont-ils été découverts ?",
    answer: "Les neurones miroirs sont des cellules cérébrales qui s'activent à la fois quand un individu effectue une action et quand il observe cette même action chez un autre. Ils ont été découverts par hasard en 1992 à l'Université de Parme, en Italie, par Giacomo Rizzolatti et son équipe, dans le cortex prémoteur de macaques. Leur nom vient de cette propriété de 'refléter' l'action d'autrui dans le cerveau de l'observateur."
  },
  {
    question: "A-t-on trouvé des neurones miroirs chez l'être humain ?",
    answer: "Pas directement. Aucun neurone miroir n'a jamais été observé par électrode unitaire chez l'humain — une mesure qui nécessiterait une chirurgie cérébrale invasive. Les preuves humaines reposent sur des techniques indirectes : IRMf (imagerie cérébrale), TMS (stimulation magnétique) et EEG. Ces méthodes montrent des zones cérébrales actives lors de l'observation d'actions, mais ne permettent pas de distinguer des cellules individuelles. Le lien entre ces activations et les neurones miroirs reste une inférence, pas une observation directe."
  },
  {
    question: "Quelle est la différence entre empathie affective et empathie cognitive ?",
    answer: "L'empathie affective est la capacité à ressentir émotionnellement ce que ressent l'autre — une résonance automatique, viscérale. Elle implique l'insula antérieure et le cortex cingulaire antérieur. L'empathie cognitive est la capacité à comprendre intellectuellement la perspective d'autrui, sans nécessairement le ressentir. Elle recrute le cortex préfrontal médian et la jonction temporo-pariétale. Ces deux formes sont dissociables : on peut avoir l'une sans l'autre, et elles ont des usages différents selon les situations."
  },
  {
    question: "Quelles zones du cerveau sont impliquées dans l'empathie ?",
    answer: "L'empathie n'est pas localisée dans une seule zone. L'insula antérieure et le cortex cingulaire antérieur (ACC) traitent la résonance émotionnelle avec la douleur ou la détresse d'autrui. Le cortex préfrontal médian et la jonction temporo-pariétale (TPJ) gèrent la perspective cognitive. L'amygdale module la réactivité émotionnelle. Ces régions forment un réseau distribué, pas un seul 'centre de l'empathie'. C'est la méta-analyse de Lamm, Decety et Singer (NeuroImage, 2011) qui a le mieux cartographié cette organisation."
  },
  {
    question: "Pourquoi l'empathie peut-elle mener au burnout ?",
    answer: "L'empathie affective non régulée amplifie la souffrance de l'observateur. Klimecki et al. (Max Planck Institute, 2014) ont montré en IRMf que l'entraînement à 'ressentir la douleur d'autrui' augmentait l'affect négatif et suractivait l'insula et l'ACC — les circuits de la souffrance. Les soignants, enseignants et travailleurs sociaux sont particulièrement exposés à cette fatigue empathique. La solution n'est pas de moins ressentir, mais de transformer l'empathie en compassion — un état biologiquement distinct."
  },
  {
    question: "Quelle est la différence entre empathie et compassion au niveau cérébral ?",
    answer: "L'empathie affective active l'insula et l'ACC — les circuits de la souffrance. La compassion active le striatum ventral et le gyrus frontal inférieur — les circuits de l'affiliation et de la récompense. Ce sont des réseaux non-chevauchants. Klimecki et al. (SCAN, 2014) ont démontré que l'entraînement à la compassion inversait la détresse empathique et augmentait l'affect positif, sans supprimer la sensibilité à la souffrance d'autrui. La compassion permet d'être présent sans être submergé."
  },
  {
    question: "Comment l'ocytocine influence-t-elle notre capacité à ressentir de l'empathie ?",
    answer: "L'ocytocine — souvent appelée 'hormone du lien' — facilite spécifiquement l'empathie affective. Geng et al. (Beijing Normal University, Frontiers in Neuroscience, 2018) ont montré sur 40 adultes que l'ocytocine intranasale augmentait significativement les scores d'empathie émotionnelle, en réduisant la réactivité de l'amygdale. Cet effet est spécifique à la voie affective : l'empathie cognitive (compréhension intellectuelle) n'était pas modifiée. Le contact physique, le regard mutuel et les récits partagés stimulent la production endogène d'ocytocine."
  },
  {
    question: "Peut-on développer son empathie à l'âge adulte ?",
    answer: "Oui. Le cerveau adulte conserve la plasticité nécessaire pour modifier les circuits empathiques. Klimecki et al. (2014) ont mesuré des changements d'activation cérébrale après seulement quelques semaines d'entraînement à la compassion. La méditation de bienveillance (loving-kindness), la lecture de fiction narrative et les pratiques de synchronie corporelle (contact visuel prolongé, jeu d'impro) ont tous montré des effets mesurables sur la capacité empathique, y compris chez des adultes sans formation préalable."
  },
  {
    question: "Pourquoi certaines personnes semblent-elles moins empathiques que d'autres ?",
    answer: "Plusieurs facteurs modulent la capacité empathique. Génétiquement, des variations dans les récepteurs de l'ocytocine influencent la sensibilité sociale. Environnementalement, un stress chronique élevé réduit la disponibilité des ressources attentionnelles nécessaires à la prise de perspective. Le manque de sommeil altère la lecture des expressions émotionnelles. Enfin, certaines conditions neurologiques — comme les troubles du spectre autistique — affectent préférentiellement l'empathie cognitive, sans nécessairement réduire la résonance affective."
  },
  {
    question: "Comment pratiquer la compassion sans s'épuiser émotionnellement ?",
    answer: "La compassion efficace repose sur une 'distance compassionnelle' : être pleinement présent à la souffrance d'autrui tout en maintenant une stabilité émotionnelle. Concrètement : pratiquer 10 minutes de méditation de bienveillance (loving-kindness) chaque matin, reformuler mentalement 'je ressens ta douleur' en 'je veux que tu ailles mieux', et créer des rituels de décompression après les interactions intenses. Klimecki et al. (2014) ont montré que 2 à 4 semaines de cette pratique suffisent à modifier les activations cérébrales mesurées en IRMf."
  }
];

// ==================== COMPOSANT ====================

export default function EmpathieNeuronesMiroirs() {
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
    caption: "Illustration de deux silhouettes humaines dont les cerveaux s'illuminent en miroir, symbolisant la résonance empathique et la connexion humaine selon les neurosciences"
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
      name: "Empathie et neurones miroirs",
      description: "Mécanismes neuraux de l'empathie — insula antérieure, cortex cingulaire antérieur, jonction temporo-pariétale, ocytocine, fatigue empathique et compassion"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 3600
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
    name: "Comment développer l'empathie sans s'épuiser : 4 leviers validés",
    description: "Méthodes scientifiquement validées pour renforcer la capacité empathique tout en évitant la fatigue émotionnelle",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "La méditation de bienveillance (Loving-Kindness)",
        description: "Entraîne les circuits de la compassion (striatum ventral) plutôt que la résonance douloureuse brute — Klimecki et al., Max Planck Institute, SCAN, 2014"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "La synchronie corporelle et le contact visuel",
        description: "Le regard mutuel prolongé et le contact physique stimulent la production endogène d'ocytocine, facilitant l'empathie affective — Geng et al., Frontiers in Neuroscience, 2018"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Les récits partagés — activation narrative de l'insula",
        description: "Écouter ou lire des récits à la première personne active l'insula antérieure — les mêmes circuits que l'expérience directe — renforçant la résonance empathique"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "La distance compassionnelle — moduler par le cortex préfrontal",
        description: "Reformuler mentalement 'je ressens ta douleur' en 'je veux que tu ailles mieux' active le cortex préfrontal et réduit la surcharge de l'insula"
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
            <Link to="/blog/?category=relations-humaines" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">Relations Humaines</Link>
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
            <span aria-current="page" className="text-neutral-700 dark:text-neutral-300 truncate max-w-[180px] sm:max-w-none">{meta.title}</span>
          </nav>

          {/* Badges */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
              Relations Humaines
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300">
              Neurosciences
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
            Version {meta.version} — {meta.verifiedDate} | Sources vérifiées Avril 2026
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
                <span key={tag} className="text-rose-600 dark:text-rose-400">
                  #{tag}{i < meta.tags.length - 1 && " "}
                </span>
              ))}
            </div>
          </div>

          {/* Image de couverture */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={`${meta.cover}.webp`}
              alt="Illustration de deux silhouettes humaines dont les cerveaux s'illuminent en miroir, symbolisant la résonance empathique et la connexion humaine selon les neurosciences"
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
              <strong>En bref :</strong> Les neurones miroirs — découverts chez le macaque par Rizzolatti (Parme, 1996) — s'activent lors de l'observation d'une action. Chez l'humain, l'empathie implique surtout l'insula antérieure et le cortex cingulaire antérieur, pas directement les neurones miroirs. Trop d'empathie sans régulation mène au burnout : la compassion en est l'antidote biologique prouvé.
            </p>
            <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
              <strong>Sources :</strong> Gallese et al., <em>Brain</em>, 1996 ; Singer et al., <em>Science</em>, 2004 ; Klimecki et al., <em>SCAN</em>, 2014.
            </p>
          </div>

          {/* StatBlock découverte neurones miroirs — données ANIMALES */}
          <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">1992</div>
              <div>
                <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                  Année de la découverte accidentelle des neurones miroirs chez le macaque rhésus, dans le cortex prémoteur ventral (zone F5) — des neurones qui s'activaient aussi bien lors d'une action que lors de son observation chez un congénère. Données animales uniquement.
                </p>
                <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                  Gallese, Fadiga, Fogassi & Rizzolatti, University of Parma, <em>Brain</em>, 1996 — DOI : 10.1093/brain/119.2.593
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <p className="lead">
            Tu as déjà senti la gorge se serrer en regardant quelqu'un pleurer dans un film ? Ou frémi devant une scène de chute, comme si c'était ton genou qui heurtait le sol ? Ces réactions ne sont pas de la sensiblerie — elles révèlent un mécanisme cérébral réel, documenté depuis trente ans par les neurosciences.
          </p>

          <p>
            Depuis les années 1990, un terme a envahi les magazines et les conférences TED : les <em>neurones miroirs</em>. On les a présentés comme la clé de l'empathie humaine, du langage, de la culture entière. Mais la réalité scientifique est plus nuancée — et plus intéressante.
          </p>

          <p>
            Dans cet article, tu vas comprendre ce que les neurones miroirs font vraiment, pourquoi leur rôle dans l'empathie humaine a été largement surestimé, et quels sont les véritables circuits cérébraux de la connexion humaine. Tu découvriras aussi un paradoxe surprenant : trop d'empathie peut épuiser, et la compassion — un état biologiquement distinct — est l'antidote prouvé par l'IRMf. Avec, à la fin, 4 leviers pratiques pour développer ta capacité de connexion sans te vider.
          </p>

          {/* Section 1 */}
          <h2 id="que-sont-les-neurones-miroirs">Que sont les neurones miroirs — et le mythe qui les entoure ?</h2>

          <p>
            Tout commence à Parme, en Italie, au début des années 1990. Le neuroscientifique Giacomo Rizzolatti et son équipe étudient le cerveau de macaques rhésus — des singes proches de nous sur le plan évolutif. Ils enregistrent l'activité électrique de neurones dans une zone appelée cortex prémoteur ventral, ou zone F5. Ces neurones s'activent normalement quand le singe saisit un objet.
          </p>

          <p>
            Un jour, par hasard, un chercheur attrape lui-même un objet devant le singe. Le résultat est inattendu : les mêmes neurones du singe s'activent — alors que l'animal n'a pas bougé. Le singe <em>observe</em> une action, et son cerveau la rejoue comme s'il la faisait lui-même.
          </p>

          <p>
            Rizzolatti baptise ces cellules "neurones miroirs". L'article fondateur est publié dans <em>Brain</em> en 1996. La découverte fait l'effet d'une bombe scientifique.
          </p>

          <h3>La surestimation médiatique : comment un fait animal est devenu une théorie universelle</h3>

          <p>
            Dans les années 2000, plusieurs chercheurs — dont Vilayanur Ramachandran (University of California San Diego) — ont extrapolé la découverte chez le macaque à toute la psychologie humaine : empathie, imitation, langage, autisme, culture. Ramachandran a même appelé les neurones miroirs les "neurones de la civilisation".
          </p>

          <p>
            Le problème ? Aucun neurone miroir n'a jamais été observé directement chez l'humain par électrode unitaire. Cette technique — qui permet de mesurer l'activité d'un seul neurone — nécessite une chirurgie cérébrale très invasive, réservée à des cas de chirurgie de l'épilepsie. Les rares données humaines obtenues ainsi n'ont montré que des cellules qui s'activaient lors de l'observation <em>et</em> de l'exécution d'actions — pas nécessairement des neurones miroirs au sens strict.
          </p>

          <p>
            Ce que les études humaines ont réellement montré, c'est l'activation de <em>zones cérébrales</em> en IRMf lors de l'observation d'actions. Ces zones correspondent à celles actives lors de l'exécution, ce qui est cohérent avec l'existence de circuits miroirs. Mais l'IRMf mesure le débit sanguin dans des régions entières, pas l'activité de neurones individuels. L'existence de neurones miroirs chez l'humain reste une hypothèse plausible — pas un fait démontré.
          </p>

          <h3>Ce que cela change pour la compréhension de l'empathie</h3>

          <p>
            Tout. Si les neurones miroirs ne sont pas directement observés chez l'humain, ils ne peuvent pas être "la" base de l'empathie humaine. Les circuits de l'empathie sont en réalité beaucoup plus complexes — et impliquent des régions que les neurones miroirs (moteurs) n'atteignent pas directement.
          </p>

          <p>
            C'est ce que les études d'IRMf humaine ont progressivement cartographié, à partir de 2004. Et les circuits qu'elles révèlent sont fascinants.
          </p>

          {/* Section 2 */}
          <h2 id="vrais-circuits-empathie">Comment le cerveau humain ressent-il vraiment la douleur d'autrui ?</h2>

          <p>
            En 2004, la neuroscientifique Tania Singer (University College London) publie dans <em>Science</em> une étude qui va transformer la compréhension de l'empathie. Elle recrute 16 couples et place chaque partenaire dans un scanner IRMf. L'un reçoit une légère stimulation électrique douloureuse. L'autre observe son partenaire recevoir cette stimulation.
          </p>

          <p>
            La question est simple : quelles zones du cerveau s'activent chez le partenaire qui <em>observe</em> la douleur, sans la subir lui-même ?
          </p>

          <h3>L'insula et l'ACC : les circuits de la résonance émotionnelle</h3>

          <p>
            Le résultat de Singer est précis. Quand tu ressens ta propre douleur, deux systèmes s'activent : un système affectif (qui traite la détresse émotionnelle) et un système sensoriel (qui localise et quantifie la sensation physique). L'insula postérieure et le cortex somatosensoriel S1/S2 s'occupent de la partie sensorielle.
          </p>

          <p>
            Quand tu <em>observes</em> la douleur d'autrui, seul le système affectif s'active : l'insula antérieure — une petite région enfouie dans le sillon latéral du cerveau, impliquée dans la conscience de l'état intérieur — et le cortex cingulaire antérieur (ACC). Tu ne ressens pas la douleur à l'endroit précis du corps de l'autre, mais tu en partages la dimension émotionnelle.
          </p>

          {/* StatBlock Singer 2004 */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">r&nbsp;sig.</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  L'activation de l'insula antérieure lors de l'observation de la douleur d'autrui corrèle significativement avec le score de trait d'empathie mesuré par questionnaire — plus une personne se déclare empathique, plus son insula s'active face à la souffrance d'un proche. Données humaines (fMRI), n = 16 couples.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Singer, Seymour, O'Doherty, Kaube, Dolan & Frith, University College London, <em>Science</em>, 2004 — DOI : 10.1126/science.1093535
                </p>
              </div>
            </div>
          </div>

          <p>
            Ce résultat est important pour deux raisons. Premièrement, il montre que l'empathie affective a une base neurologique mesurable et corrélée à la personnalité. Deuxièmement, il dissocie clairement "ressentir pour soi" (système sensoriel + affectif) de "ressentir pour autrui" (système affectif seulement). Ce n'est pas une simulation complète de l'expérience d'autrui — c'est une résonance partielle et ciblée.
          </p>

          <h3>Le cortex préfrontal et la TPJ : l'empathie cognitive</h3>

          <p>
            L'empathie ne se limite pas à ressentir. Il y a aussi la capacité à <em>comprendre</em> intellectuellement ce que vit une autre personne, sans nécessairement le ressentir. C'est l'empathie cognitive — et elle implique des circuits très différents.
          </p>

          <p>
            En 2011, Claus Lamm (University of Vienna), Jean Decety (University of Chicago) et Tania Singer (Max Planck Institute, Leipzig) publient dans <em>NeuroImage</em> une méta-analyse de 32 études IRMf sur l'empathie pour la douleur. C'est à ce jour la synthèse la plus rigoureuse sur le sujet.
          </p>

          <p>
            Leur conclusion est claire : l'insula antérieure et le cortex cingulaire médian (aMCC) sont des circuits <em>partagés</em> — actifs aussi bien lors de la douleur directe que lors de l'empathie affective. En revanche, l'empathie <em>cognitive</em> — comprendre la perspective d'autrui par raisonnement — recrute principalement le cortex préfrontal médian et la jonction temporo-pariétale (TPJ). Ces régions ne s'activent pas lors de la douleur directe.
          </p>

          <p>
            Concrètement : quand tu imagines ce que ressent un ami qui traverse un divorce, tu actives ton TPJ et ton cortex préfrontal. Quand tu vois cet ami fondre en larmes devant toi, c'est ton insula et ton ACC qui s'allument. Ces deux formes d'empathie coexistent — mais elles peuvent être dissociées, et chacune a des usages différents selon les situations.
          </p>

          <p>
            Pour mieux comprendre pourquoi ces circuits émotionnels jouent un rôle aussi central, tu peux lire notre article sur <Link to="/blog/systeme-limbique-cerveau-emotionnel/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">le système limbique et ses circuits émotionnels</Link>. L'empathie est l'une des 7 compétences de notre <Link to="/blog/guide-communication-interpersonnelle/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">guide de la communication interpersonnelle</Link>.
          </p>

          <h3>L'ocytocine : le neuromodulateur de la connexion affective</h3>

          <p>
            Un troisième acteur mérite d'être nommé : l'ocytocine. Cette molécule — produite dans l'hypothalamus et libérée dans le cerveau comme dans le sang — est souvent appelée "hormone du lien". Son rôle dans l'empathie est plus spécifique que son surnom ne le suggère.
          </p>

          <p>
            En 2018, Yiying Geng et son équipe de Beijing Normal University ont administré de l'ocytocine intranasale (24 unités internationales) à 40 adultes dans un protocole en double aveugle contre placebo. Résultat : les scores d'empathie <em>affective</em> augmentaient significativement, associés à une réduction de l'activation de l'amygdale droite — comme si l'ocytocine "calmait" la vigilance anxieuse pour libérer des ressources vers la connexion.
          </p>

          <p>
            <strong>Limite importante :</strong> l'échantillon était composé uniquement d'adultes chinois (n=40). Les effets de l'ocytocine sur l'empathie peuvent varier selon les contextes culturels et les relations préexistantes entre les participants. Cette étude ne peut donc pas être généralisée directement à d'autres populations sans réplication.
          </p>

          {/* StatBlock Geng 2018 — ocytocine et empathie affective */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">24&nbsp;UI</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Dose d'ocytocine intranasale (24 unités internationales, double aveugle contre placebo) suffisant à augmenter significativement les scores d'empathie affective et à réduire l'activation de l'amygdale droite — sans modifier l'empathie cognitive. Données humaines, n = 40. ⚠️ Population uniquement chinoise.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Geng, Zhao, Song & Ma, Beijing Normal University, <em>Frontiers in Neuroscience</em>, 2018 — DOI : 10.3389/fnins.2018.00512
                </p>
              </div>
            </div>
          </div>

          <p>
            Ce qui est en revanche établi dans plusieurs cultures, c'est que certains comportements stimulent la production endogène d'ocytocine : le contact physique bienveillant, le regard mutuel prolongé, le partage de récits personnels, et la synchronie rythmique (chanter ensemble, marcher au même pas).
          </p>

          {/* Section 3 */}
          <h2 id="paradoxe-fatigue-empathique">Pourquoi trop d'empathie peut-il épuiser ? Le paradoxe de la fatigue empathique</h2>

          <p>
            Tu as peut-être déjà ressenti cela après une journée à écouter les problèmes de tout le monde : un sentiment de vide, d'épuisement émotionnel, comme si tu avais tout donné sans rien recevoir. Ce n'est pas de la faiblesse. C'est de la biologie.
          </p>

          <p>
            En 2014, Olga Klimecki (Max Planck Institute for Human Cognitive and Brain Sciences, Leipzig) publie dans <em>Social Cognitive and Affective Neuroscience</em> une étude qui va mettre des mots — et des images IRMf — sur ce phénomène.
          </p>

          <h3>L'empathie non régulée amplifie la souffrance</h3>

          <p>
            Klimecki recrute 60 participants et les soumet à deux entraînements consécutifs. D'abord, un entraînement à l'empathie : apprendre à "se mettre à la place de l'autre", à ressentir ce qu'il ressent, à laisser sa douleur résonner en soi. Ensuite, un entraînement à la compassion : maintenir une bienveillance active envers l'autre tout en conservant une stabilité émotionnelle.
          </p>

          <p>
            Les deux groupes regardent des vidéos de personnes en souffrance, avant et après chaque entraînement, dans un scanner IRMf.
          </p>

          <p>
            Résultat de l'entraînement à l'empathie : les participants rapportent plus d'affect négatif, et leurs cerveaux montrent une activation accrue de l'insula et du cortex cingulaire médian — les mêmes circuits que la souffrance directe. En d'autres termes : entraîner l'empathie brute <em>augmente</em> la souffrance de l'observateur. C'est le mécanisme biologique de la fatigue empathique.
          </p>

          {/* StatBlock Klimecki 2014 */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">↑ ↓</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Entraînement compassion vs empathie brute : la compassion inversait l'affect négatif (↑ affect positif, ↑ striatum ventral) tandis que l'empathie non régulée l'amplifiait (↑ insula, ↑ aMCC). Les deux états activent des réseaux cérébraux non-chevauchants. Données humaines (fMRI longitudinal), n = 60, protocole ReSource.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Klimecki, Leiberg, Ricard & Singer, Max Planck Institute for Human Cognitive and Brain Sciences, <em>Social Cognitive and Affective Neuroscience</em>, 2014 — DOI : 10.1093/scan/nst060
                </p>
              </div>
            </div>
          </div>

          <h3>La compassion comme antidote biologique — circuits opposés prouvés</h3>

          <p>
            Voici le résultat le plus surprenant de l'étude Klimecki. Après l'entraînement à la compassion — qui consiste à développer une bienveillance active ("je veux que tu ailles mieux") plutôt qu'une résonance passive ("je ressens ta douleur") — l'affect négatif était inversé. Les participants rapportaient davantage d'affect positif, et leurs cerveaux montraient une activation du striatum ventral, du cortex cingulaire antérieur prégénual (pgACC) et du cortex orbitofrontal médian. Ces régions sont associées à l'affiliation, à la récompense et à la motivation prosociale.
          </p>

          <p>
            La compassion ne supprimait pas la sensibilité à la souffrance d'autrui. Elle la transformait en élan d'aide — biologiquement distinct, émotionnellement soutenable.
          </p>

          <p>
            Ce résultat est particulièrement pertinent pour les soignants, les enseignants, les parents, et tous ceux dont le travail implique un contact régulier avec la souffrance humaine. Il ne s'agit pas de "moins ressentir", mais de ressentir différemment — avec un outil cérébral différent.
          </p>

          <p>
            Les personnes qui ont vécu le rejet ou l'exclusion sociale savent à quel point ces circuits peuvent être activés de façon douloureuse : notre article sur <Link to="/blog/surmonter-rejet-social/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">surmonter le rejet social et ses mécanismes neuroscientifiques</Link> explore ces circuits en détail.
          </p>

          {/* Section 4 */}
          <h2 id="leviers-developper-empathie">Comment développer l'empathie sans s'épuiser ? Les 4 leviers validés</h2>

          <p>
            La bonne nouvelle : les circuits empathiques sont plastiques. Ils peuvent être renforcés, réorientés, ou protégés du surmenage — à condition d'utiliser les bons leviers. Voici les quatre mieux documentés par la recherche.
          </p>

          <h3>1. La méditation de bienveillance (Loving-Kindness)</h3>

          <p>
            La méditation Loving-Kindness — ou <em>metta</em> en pali — consiste à générer mentalement des vœux de bien-être d'abord pour soi-même, puis pour des proches, puis pour des inconnus, puis pour des personnes difficiles. Ce n'est pas une visualisation passive : c'est une pratique active qui entraîne les circuits de la compassion, pas ceux de la résonance douloureuse.
          </p>

          <p>
            Dans le protocole ReSource (Klimecki et al., 2014), même quelques semaines de pratique suffisaient à modifier les activations cérébrales mesurées en IRMf. Le protocole de base : 10 à 15 minutes par jour, de préférence le matin, en commençant par répéter mentalement des phrases du type "Puisse-je être heureux, puisse-je être en bonne santé, puisse-je être en paix" — puis en étendant progressivement ces vœux à d'autres personnes.
          </p>

          <p>
            La clé : l'intention de bienveillance, pas la tentative de ressentir la douleur de l'autre.
          </p>

          <h3>2. La synchronie corporelle et le contact visuel</h3>

          <p>
            Le cerveau social est profondément sensible aux signaux corporels. Le regard mutuel prolongé (2 à 3 secondes sans détourner les yeux), le contact physique bienveillant (une main sur l'épaule, une accolade), et la synchronie rythmique (marcher au même pas, respirer ensemble) stimulent la production endogène d'ocytocine.
          </p>

          <p>
            Cette ocytocine endogène — produite par ton propre hypothalamus — facilite l'empathie affective en réduisant la vigilance de l'amygdale et en augmentant la sensibilité aux signaux émotionnels d'autrui. C'est un levier accessible immédiatement, sans aucun dispositif.
          </p>

          <p>
            Application pratique : lors d'une conversation difficile, maintenir un contact visuel doux (pas fixe), adopter une posture ouverte (épaules relâchées, corps orienté vers l'autre), et ajuster ton rythme de parole au sien. Ces comportements signalent la sécurité relationnelle et activent les circuits d'affiliation des deux côtés. La <Link to="/blog/communication-non-violente-cnv/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">communication non violente</Link> s'appuie sur ces mêmes mécanismes empathiques pour structurer l'expression des besoins. Et si tu veux aller plus loin dans la posture réceptive elle-même, les <Link to="/blog/ecoute-active-technique-carl-rogers/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">5 techniques d'écoute active de Carl Rogers</Link> offrent un cadre scientifiquement validé pour créer ces conditions de synchronie.
          </p>

          <h3>3. Les récits partagés — activation narrative de l'insula</h3>

          <p>
            Écouter un récit à la première personne — une histoire vraie racontée par quelqu'un — active l'insula antérieure de l'auditeur, les mêmes circuits que l'expérience directe. Ce phénomène, appelé "couplage neural", a été documenté par Uri Hasson et son équipe (Princeton Neuroscience Institute) dans une étude publiée dans le <em>Proceedings of the National Academy of Sciences</em> en 2010 : le cerveau du locuteur et celui de l'auditeur se synchronisent progressivement au fil du récit.
          </p>

          <p>
            Application pratique : dans une relation intime ou professionnelle, favoriser les récits à la première personne plutôt que les échanges d'opinions. "Comment tu as vécu ce moment ?" plutôt que "Qu'est-ce que tu en penses ?". La narration active la résonance ; l'argumentation la court-circuite.
          </p>

          <p>
            Pour approfondir comment répondre aux récits partagés de façon à renforcer les liens, notre article sur <Link to="/blog/methode-acr-repondre-aux-bonnes-nouvelles/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">la méthode ACR pour répondre aux bonnes nouvelles</Link> propose un protocole précis.
          </p>

          <h3>4. La "distance compassionnelle" — moduler par le cortex préfrontal</h3>

          <p>
            Le cortex préfrontal — la partie frontale du cerveau, siège du raisonnement et de la régulation émotionnelle — peut moduler l'intensité de la résonance empathique. C'est lui qui permet à un chirurgien d'opérer calmement sans être paralysé par la douleur du patient, ou à un thérapeute d'accueillir la détresse d'un client sans la absorber.
          </p>

          <p>
            La technique, appelée "réévaluation cognitive", consiste à reformuler mentalement l'expérience empathique : passer de "je ressens ta douleur" à "je vois que tu souffres et je veux t'aider". Cette reformulation subtile active le cortex préfrontal, réduit l'activation de l'insula, et oriente l'énergie vers l'action plutôt que la résonance passive.
          </p>

          <p>
            Pour les personnes dont le travail implique une exposition régulière à la souffrance d'autrui, les rituels de décompression sont également essentiels : noter en fin de journée les émotions résiduelles, créer une transition physique (se changer, marcher dehors), et préserver des plages de récupération. Le <Link to="/blog/sommeil-reparateur-7-strategies-validees/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">sommeil réparateur</Link> joue ici un rôle de premier plan : il consolide la régulation émotionnelle et restaure la capacité de résonance du lendemain.
          </p>

          <p>
            La <Link to="/blog/neuroplasticite-cerveau/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">neuroplasticité du cerveau adulte</Link> garantit que ces quatre leviers peuvent modifier durablement les circuits empathiques — même après 30, 40 ou 50 ans. L'empathie n'agit d'ailleurs jamais seule : elle est l'une des sept compétences de l'<Link to="/blog/intelligence-sociale-competences-relationnelles/" className="text-rose-700 dark:text-rose-400 underline hover:no-underline">intelligence sociale</Link>, aux côtés de l'écoute et du décodage des intentions d'autrui.
          </p>

          {/* À retenir */}
          <h2 id="a-retenir">À retenir</h2>

          <div className="not-prose my-8 bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide mb-4">Résumé — Points essentiels</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">→</span>
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Les <strong>neurones miroirs</strong> ont été découverts chez le macaque (Rizzolatti, Parme, 1996). Aucun n'a été observé directement chez l'humain par électrode unitaire — leur rôle dans l'empathie humaine reste une inférence, pas un fait établi.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">→</span>
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Les <strong>vrais circuits de l'empathie humaine</strong> : insula antérieure + ACC pour l'empathie affective (résonance émotionnelle) ; cortex préfrontal médian + TPJ pour l'empathie cognitive (prise de perspective).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">→</span>
                <span className="text-sm text-neutral-700 dark:text-neutral-300">L'<strong>ocytocine</strong> facilite spécifiquement l'empathie affective en réduisant la réactivité de l'amygdale. Elle est stimulée par le contact physique, le regard mutuel et les récits partagés.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">→</span>
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Le <strong>paradoxe de l'empathie</strong> : trop d'empathie non régulée amplifie la souffrance et mène au burnout. La compassion — biologiquement distincte (striatum ventral, circuits d'affiliation) — est l'antidote prouvé en IRMf.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">→</span>
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Les <strong>4 leviers pratiques</strong> : méditation Loving-Kindness, synchronie corporelle, récits à la première personne, distance compassionnelle via le cortex préfrontal.</span>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 id="faq">Questions fréquentes sur l'empathie et les neurones miroirs</h2>

          <div className="not-prose space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                <div className="bg-neutral-50 dark:bg-neutral-800/50 px-5 py-4">
                  <p className="font-semibold text-neutral-900 dark:text-white text-sm leading-snug">
                    {item.question}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Newsletter */}
          <div className="not-prose my-12 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-8 rounded-xl border border-rose-200 dark:border-rose-800 text-center">
            <p className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide mb-2">Chaque semaine</p>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
              Une découverte en neurosciences. Une application concrète. Directement dans ta boîte mail.
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Rejoins les lecteurs de L'Éveil Mental — aucun jargon, aucune promesse creuse, uniquement ce que la science dit vraiment.
            </p>
            <a
              href="/#newsletter"
              className="inline-flex items-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              S'abonner gratuitement
            </a>
          </div>

          {/* Sources */}
          <h2 id="sources">Sources scientifiques</h2>

          <div className="not-prose">
            <ol className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex gap-3">
                <span className="font-bold text-neutral-400 min-w-[1.5rem]">1.</span>
                <span>Gallese, V., Fadiga, L., Fogassi, L., & Rizzolatti, G. (1996). Action recognition in the premotor cortex. <em>Brain</em>, 119(2), 593–609. <a href="https://doi.org/10.1093/brain/119.2.593" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline">DOI : 10.1093/brain/119.2.593</a> — <strong>⚠️ Données animales (macaques rhésus)</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-neutral-400 min-w-[1.5rem]">2.</span>
                <span>Singer, T., Seymour, B., O'Doherty, J., Kaube, H., Dolan, R.J., & Frith, C.D. (2004). Empathy for pain involves the affective but not sensory components of pain. <em>Science</em>, 303(5661), 1157–1162. <a href="https://doi.org/10.1126/science.1093535" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline">DOI : 10.1126/science.1093535</a> — Données humaines, n = 16 couples</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-neutral-400 min-w-[1.5rem]">3.</span>
                <span>Lamm, C., Decety, J., & Singer, T. (2011). Meta-analytic evidence for common and distinct neural networks associated with directly experienced pain and empathy for pain. <em>NeuroImage</em>, 54(3), 2492–2502. <a href="https://doi.org/10.1016/j.neuroimage.2010.10.014" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline">DOI : 10.1016/j.neuroimage.2010.10.014</a> — Méta-analyse 32 études fMRI humaines</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-neutral-400 min-w-[1.5rem]">4.</span>
                <span>Geng, Y., Zhao, W., Song, J., & Ma, X. (2018). Oxytocin Enhancement of Emotional Empathy: Generalization Across Cultures and Effects on Amygdala Activity. <em>Frontiers in Neuroscience</em>, 12, 512. <a href="https://doi.org/10.3389/fnins.2018.00512" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline">DOI : 10.3389/fnins.2018.00512</a> — Données humaines, n = 40 <strong>⚠️ Population uniquement chinoise — limite de généralisation</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-neutral-400 min-w-[1.5rem]">5.</span>
                <span>Klimecki, O.M., Leiberg, S., Ricard, M., & Singer, T. (2014). Differential pattern of functional brain plasticity after compassion and empathy training. <em>Social Cognitive and Affective Neuroscience</em>, 9(6), 873–879. <a href="https://doi.org/10.1093/scan/nst060" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline">DOI : 10.1093/scan/nst060</a> — Données humaines, fMRI longitudinal, n = 60</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-neutral-400 min-w-[1.5rem]">6.</span>
                <span>Hasson, U., Nir, Y., Levy, I., Fuhrmann, G., & Malach, R. (2004). Intersubject synchronization of cortical activity during natural vision. <em>Science</em>, 303(5664), 1634–1640. Puis : Stephens, G.J., Silbert, L.J., & Hasson, U. (2010). Speaker–listener neural coupling underlies successful communication. <em>Proceedings of the National Academy of Sciences</em>, 107(32), 14425–14430. <a href="https://doi.org/10.1073/pnas.1002051107" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline">DOI : 10.1073/pnas.1002051107</a> — Données humaines, fMRI, couplage neural locuteur–auditeur</span>
              </li>
            </ol>
          </div>

        </div>
      </article>
    </>
  );
}
