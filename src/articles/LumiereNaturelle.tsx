// src/articles/LumiereNaturelle.tsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SocialShare from "../components/SocialShare";

export const meta = {
  slug: "lumiere-naturelle-cerveau-sommeil-sante-mentale",
  title: "Lumière naturelle : effets sur le cerveau, le sommeil et la santé mentale",
  description: "Découvrez comment la lumière naturelle influence le cerveau, régule le sommeil et améliore l'humeur, avec 7 stratégies pratiques validées scientifiquement.",
  excerpt: "90% de notre temps passé en intérieur dérègle notre horloge biologique. Explorez les mécanismes neuroscientifiques de la lumière et 7 stratégies pour retrouver un équilibre naturel.",
  cover: "/images/articles/lumiere-naturelle-cover",
  datePublished: "2025-09-08T08:00:00+01:00",
  dateModified: "2025-09-08T08:00:00+01:00",
  tags: ["lumière naturelle", "rythmes circadiens", "neurosciences", "chronobiologie", "dépression saisonnière"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Neurosciences",
  readingTime: "9 min",
  version: "1.0",
  verifiedDate: "Septembre 2025"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Combien de temps faut-il pour ressentir les effets de la lumière naturelle ?",
    answer: "Les premiers effets apparaissent dès 3-5 jours : meilleur réveil et endormissement. Les bénéfices complets sur l'humeur et l'énergie se manifestent après 2-3 semaines de pratique régulière d'exposition matinale d'au moins 15 minutes."
  },
  {
    question: "La luminothérapie artificielle remplace-t-elle le soleil ?",
    answer: "Partiellement. La luminothérapie (10 000 lux) synchronise efficacement l'horloge biologique mais ne produit pas de vitamine D. Elle complète mais ne remplace jamais totalement l'exposition solaire naturelle pour l'ensemble des bénéfices biologiques."
  },
  {
    question: "Peut-on avoir trop de lumière le matin ?",
    answer: "Très difficile avec la lumière naturelle. Le soleil délivre jusqu'à 100 000 lux sans danger. Attention cependant à la luminothérapie artificielle : ne pas dépasser 1h à 10 000 lux pour éviter maux de tête et agitation selon les recommandations cliniques."
  },
  {
    question: "Comment gérer le travail en open space sombre ?",
    answer: "Stratégies compensatoires : pauses lumière toutes les 2h, lampe de bureau 5000K, maximiser l'exposition pendant trajet et pause déjeuner. Négocier si possible un poste près d'une fenêtre, ce qui améliore aussi la qualité du sommeil de 46 minutes selon Boubekri et al. (2014)."
  },
  {
    question: "La lumière bleue des écrans est-elle toujours nocive ?",
    answer: "Non, cela dépend du moment. La lumière bleue est bénéfique le matin pour synchroniser l'horloge biologique via les cellules ipRGC. Elle devient problématique après 19h car elle bloque la production de mélatonine et retarde l'endormissement."
  },
  {
    question: "Qu'est-ce que la dépression saisonnière et comment la lumière l'affecte-t-elle ?",
    answer: "Le Trouble Affectif Saisonnier (TAS) touche 10-15% des Français entre octobre et mars. Il résulte d'une réduction d'exposition à la lumière qui perturbe la sérotonine et la mélatonine. La luminothérapie à 10 000 lux réduit les symptômes de 60% (Lewy et al., 2006)."
  },
  {
    question: "Quelle est la différence entre lux et lumens pour choisir une lampe de luminothérapie ?",
    answer: "Les lumens mesurent le flux lumineux total émis par une source. Les lux mesurent l'intensité lumineuse reçue à une distance donnée. Pour la luminothérapie, c'est le lux qui compte : 10 000 lux à 30-50 cm d'utilisation est le standard clinique recommandé."
  },
  {
    question: "Comment les cellules ipRGC régulent-elles l'horloge biologique ?",
    answer: "Les cellules ganglionnaires intrinsèquement photosensibles (ipRGC), découvertes par David Berson (Université Brown, 2002), détectent la lumière bleue à 480 nm et envoient des signaux directs au noyau suprachiasmatique (SCN) de l'hypothalamus, qui synchronise tous les rythmes biologiques sur 24h."
  }
];

export default function LumiereNaturelle() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
  const url = `${site}/blog/${meta.slug}/`;
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;
  const coverImageUrl = `${site}${meta.cover}.webp`;

  // ==================== SCHEMAS JSON-LD (7 schemas V2) ====================

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
    caption: "Lumière naturelle matinale — rayons du soleil traversant une fenêtre, symbolisant l'énergie circadienne et la régulation de l'horloge biologique"
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
      name: "Chronobiologie et lumière naturelle",
      description: "Effets de la lumière naturelle sur le noyau suprachiasmatique, la mélatonine, le cortisol et les rythmes circadiens"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 2300
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog/` },
      { "@type": "ListItem", position: 3, name: meta.category, item: `${site}/blog/?category=${meta.category.toLowerCase()}` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 stratégies scientifiques pour optimiser la lumière naturelle",
    description: "Protocoles validés par les neurosciences et la chronobiologie pour synchroniser l'horloge biologique grâce à la lumière",
    numberOfItems: 7,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "L'exposition matinale programmée", description: "15-30 minutes dans l'heure suivant le réveil pour resynchroniser l'horloge biologique via les cellules ipRGC (Berson, Brown University, 2002)" },
      { "@type": "ListItem", position: 2, name: "L'aménagement luminocentriste", description: "Repositionner bureau, miroirs et couleurs de l'habitat pour maximiser la lumière naturelle reçue tout au long de la journée" },
      { "@type": "ListItem", position: 3, name: "La chronothérapie lumineuse avancée", description: "Adapter le timing et l'intensité de l'exposition lumineuse selon le chronotype et les objectifs (réveil, jet-lag, dépression saisonnière)" },
      { "@type": "ListItem", position: 4, name: "Les micro-expositions dynamiques", description: "Répartir le budget lumineux sur la journée avec trois créneaux : matin, midi et début de soirée pour maintenir la vigilance" },
      { "@type": "ListItem", position: 5, name: "La luminothérapie technologique intelligente", description: "Lampes 10 000 lux, réveils lumineux, ampoules circadiennes — solutions technologiques pour compenser le manque de lumière naturelle" },
      { "@type": "ListItem", position: 6, name: "L'écologie lumineuse nocturne", description: "Protocole sunset numérique : réduction progressive de la lumière bleue à partir de 19h pour favoriser la production de mélatonine" },
      { "@type": "ListItem", position: 7, name: "La mesure et l'optimisation continue", description: "Utiliser luxmètre smartphone, montres connectées et journal circadien pour quantifier et optimiser l'exposition lumineuse quotidienne" }
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
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="text-sm mb-6">
            <Link to="/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
              Accueil
            </Link> 
            <span className="mx-2 text-neutral-400" aria-hidden="true">›</span> 
            <Link to="/blog/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
              Blog
            </Link> 
            <span className="mx-2 text-neutral-400" aria-hidden="true">›</span>
            <span aria-current="page" className="text-neutral-700 dark:text-neutral-300 truncate max-w-[180px] sm:max-w-none">
              {meta.title}
            </span>
          </nav>

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
            {meta.title}
          </h1>
          
          {/* Sous-titre/Description */}
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {meta.description}
          </p>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            <span>par {meta.author.name}</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <span>{meta.readingTime} de lecture</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <time dateTime={meta.datePublished}>
              {new Date(meta.datePublished).toLocaleDateString("fr-FR", { 
                day: "numeric", 
                month: "long", 
                year: "numeric" 
              })}
            </time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {meta.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>

          {/* Image de couverture */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8">
            <img
              src={meta.cover}
              alt="Lumière naturelle - Personne profitant des premiers rayons du soleil, symbole d'énergie et de vitalité"
              width="1600"
              height="900" 
              className="w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Boutons de partage */}
          <div className="not-prose">
            <SocialShare 
              url={url}
              title={meta.title}
              description={meta.description}
              hashtags={meta.tags}
            />
          </div>
        </header>

        <div className="mt-10">
          {/* TL;DR Section */}
          <div className="not-prose mb-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-center mb-6 text-neutral-900 dark:text-white">
              ☀️ TL;DR - Ce que tu vas apprendre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400">✅</span>
                <span><strong>Pourquoi</strong> 90% en intérieur dérègle ton cerveau (mécanismes cachés)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400">✅</span>
                <span><strong>Comment</strong> la lumière synchronise ton horloge biologique (chronobiologie)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400">✅</span>
                <span><strong>7 stratégies</strong> scientifiques pour optimiser ta luminothérapie</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400">✅</span>
                <span><strong>Programme</strong> de transformation sur 6 semaines</span>
              </div>
            </div>
            <div className="text-center mt-4 text-neutral-600 dark:text-neutral-400">
              <em>Temps de lecture : 14 minutes | Impact immédiat garanti</em>
            </div>
          </div>

          {/* Introduction engageante avec hook */}
          <p className="lead">
            <strong>Laisse-moi te raconter l'histoire de Sarah.</strong> Développeuse de 32 ans en télétravail, elle passait ses journées dans son appartement parisien peu lumineux. "Je me sens tout le temps fatiguée", se plaignait-elle. Jusqu'au jour où un médecin lui révéla une vérité troublante : <strong>tu passes 90% de ton temps en intérieur, mais sais-tu que ton cerveau a besoin de lumière naturelle pour fonctionner ?</strong>
          </p>

          <p>
            Cette exposition massive à un environnement artificiel dérègle profondément notre biologie. Pourtant, selon l'<a href="https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health" target="_blank" rel="noopener noreferrer">Organisation Mondiale de la Santé</a> (2022), nous vivons déconnectés de notre environnement lumineux naturel.
          </p>

          <p>
            Dans cet article, nous explorerons la science de la lumière sur le cerveau. Tu repartiras avec 7 stratégies validées pour reconnecter ton système nerveux aux rythmes naturels.
          </p>

          <img
            src="/images/articles/lumiere-naturelle-cover.webp"
            alt="Lumière naturelle - Personne profitant des premiers rayons du soleil, symbole d'énergie et de vitalité"
            className="rounded-xl shadow-lg max-w-full h-auto my-8"
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 -mt-4 mb-8">
            <em>La reconquête de notre nature photosensible : quand la science éclaire le chemin</em>
          </p>

          <h2>Qu'est-ce que la lumière pour ton cerveau ?</h2>

          <p>
            La lumière n'est pas qu'un simple éclairage. C'est un <strong>signal biologique fondamental</strong> qui pilote ton horloge interne, tes hormones et ton humeur. 
          </p>

          <p>
            Imagine ton cerveau comme une centrale de contrôle ultra-sophistiquée. Chaque photon qui atteint tes yeux transporte des informations cruciales : l'heure qu'il est, la saison, l'intensité de l'activité à maintenir. Cette information voyage jusqu'à ton hypothalamus, véritable chef d'orchestre de tes rythmes biologiques.
          </p>

          <div className="not-prose my-6 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border-l-4 border-amber-500">
            <p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">À retenir :</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">La lumière = carburant de ton horloge biologique, pas simple éclairage passif.</p>
          </div>

          <blockquote>
            <p>"La lumière est la drogue la plus puissante qui agit sur le cerveau humain." - Dr. Russell Foster, Université d'Oxford</p>
          </blockquote>

          <h2>Les mécanismes secrets de la chronobiologie</h2>

          <p>
            Comprendre comment la lumière agit sur ton cerveau change ta perception de l'éclairage. Voici les découvertes récentes qui révolutionnent notre rapport à la luminosité.
          </p>

          <h3>L'architecture de ton horloge biologique</h3>

          <p>
            Au cœur de ton cerveau, le <strong>noyau suprachiasmatique</strong> (SCN) de l'hypothalamus agit comme un métronome biologique. Cette structure de 20 000 neurones synchronise tous tes rythmes sur 24 heures :
          </p>

          <ul>
            <li><strong>Température corporelle</strong> : Fluctue de 1-2°C selon l'heure</li>
            <li><strong>Sécrétion hormonale</strong> : Cortisol, mélatonine, hormone de croissance</li>
            <li><strong>Vigilance cognitive</strong> : Pics de performance et creux de fatigue</li>
            <li><strong>Métabolisme</strong> : Digestion, glycémie, synthèse protéique</li>
          </ul>

          <img
            src="/images/articles/horloge-circadienne-cerveau.webp"
            alt="Schéma de l'horloge circadienne - Noyau suprachiasmatique et rythmes biologiques sur 24 heures"
            className="rounded-xl shadow-lg max-w-full h-auto my-8"
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 -mt-4 mb-8">
            <em>Le noyau suprachiasmatique : le métronome de tes 37 000 milliards de cellules</em>
          </p>

          <p>
            Ce chef d'orchestre ne peut fonctionner qu'avec un signal temporel externe : la lumière. Sans elle, ton horloge dérive et perd la synchronisation avec l'environnement.
          </p>

          <h3>La découverte révolutionnaire : les cellules ipRGC</h3>

          <p>
            En 2002, <strong>David Berson</strong> (Université Brown) a découvert un troisième type de photorécepteur dans l'œil. Contrairement aux cônes et bâtonnets qui servent à la vision, les cellules ganglionnaires intrinsèquement photosensibles (ipRGC) détectent exclusivement la lumière pour réguler l'horloge biologique.
          </p>

          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 -mt-4 mb-8">
            <em>Les cellules ipRGC : les détecteurs temporels cachés de tes yeux</em>
          </p>

          <p>
            Ces cellules sont particulièrement sensibles à la lumière bleue (480 nanomètres). Elles envoient des signaux directs au SCN via le tractus rétino-hypothalamique. C'est pourquoi l'exposition matinale à la lumière bleue naturelle "remet à l'heure" ton horloge interne.
          </p>

          <p>
            <strong>Métaphore simple :</strong> Tes yeux possèdent des capteurs temporels invisibles qui synchronisent ton cerveau sur l'heure planétaire.
          </p>

          <h3>Le ballet neurochimique de la lumière</h3>

          <p>
            Quand la lumière atteint tes ipRGC, elle déclenche une cascade de réactions neurochimiques précises :
          </p>

          <ul>
            <li><strong>6h-10h :</strong> Suppression progressive de la mélatonine (-90%)</li>
            <li><strong>10h-16h :</strong> Pic de cortisol (+300%) et de sérotonine (+150%)</li>
            <li><strong>16h-20h :</strong> Diminution graduelle du cortisol</li>
            <li><strong>20h-6h :</strong> Production massive de mélatonine (×10)</li>
          </ul>

          <p>
            Cette orchestration hormonale influence directement ton <Link to="/blog/neuro-dopamine-routine/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">système de motivation dopaminergique</Link>. Une exposition lumineuse optimale booste ta dopamine diurne et améliore ton <Link to="/blog/sommeil-reparateur-7-strategies-validees/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">sommeil réparateur</Link> nocturne. C'est pourquoi l'exposition au soleil dès le réveil est le pilier d'une <Link to="/blog/routine-matinale-scientifique-cerveau/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">routine matinale validée par les neurosciences</Link>.
          </p>

          <div className="not-prose my-6 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border-l-4 border-amber-500">
            <p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">À retenir :</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Tes hormones dansent sur le rythme de la lumière. Maîtriser l'éclairage = maîtriser ton énergie.</p>
          </div>

          <h2>Quand la lumière fait défaut : les conséquences cachées</h2>

          <p>
            <em>Revenons à Sarah.</em> Sa vie en appartement sombre déclenchait des mécanismes destructeurs qu'elle ignorait complètement.
          </p>

          <h3>Désynchronisation circadienne massive</h3>

          <p>
            <strong>En intérieur standard</strong>, l'intensité lumineuse oscille entre 100-500 lux. À l'extérieur, même par temps nuageux, elle atteint 10 000 lux. Cette différence de 1 à 50 dérègle profondément tes rythmes.
          </p>

          <p>
            Le SCN, privé de son signal de synchronisation, commence à "free-run" (fonctionner en roue libre). Résultat ? Décalage progressif de tous tes rythmes biologiques. C'est comme vivre en permanence avec un mini jet-lag.
          </p>

          <p>
            Cette désynchronisation ressemble aux mécanismes que nous explorons dans notre <Link to="/blog/rumination-mentale-pensees-obsessionnelles/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">article sur la rumination mentale</Link>. Le manque de lumière amplifie l'anxiété et les pensées négatives en soirée.
          </p>

          <h3>Le sabotage hormonal silencieux</h3>

          <p>
            Vivre en sous-exposition lumineuse déclenche une cascade hormonale toxique :
          </p>

          <ul>
            <li><strong>Mélatonine diurne persistante</strong> → Somnolence et brouillard mental</li>
            <li><strong>Cortisol aplati</strong> → Manque d'énergie matinale</li>
            <li><strong>Sérotonine réduite</strong> → Baisse d'humeur et irritabilité</li>
            <li><strong>Vitamine D effondrée</strong> → Immunité affaiblie et inflammation</li>
          </ul>

          <p>
            La production de vitamine D, synthétisée uniquement sous UVB solaires, chute drastiquement. En France, 80% de la population présente une insuffisance en vitamine D en hiver selon l'<a href="https://www.anses.fr/fr/content/vitamine-d" target="_blank" rel="noopener noreferrer">ANSES</a> (2022).
          </p>

          <p>
            <strong>Témoignage troublant :</strong> Les employés de bureaux sans fenêtre présentent 2x plus de dépressions que ceux exposés à la lumière naturelle (étude Harvard 2018).
          </p>

          <h3>Troubles cognitifs et émotionnels</h3>

          <p>
            Le manque de lumière altère drastiquement tes performances mentales. L'hippocampe, centre de la mémoire, voit son activité réduite de 30% en privation lumineuse chronique.
          </p>

          <p>
            L'amygdale devient hyperactive (+40%), expliquant l'irritabilité et l'<Link to="/blog/attention-fragmentee-concentration-numerique/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">attention fragmentée</Link> caractéristiques du manque de lumière.
          </p>

          <p>
            De plus, la fatigue cognitive favorise la <Link to="/blog/procrastination-cerveau-agir-neurosciences/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">procrastination</Link>. Ton cortex préfrontal affaibli peine à maintenir l'effort soutenu.
          </p>

          <h3>La dépression saisonnière : quand l'hiver s'installe dans le cerveau</h3>

          <p>
            Entre octobre et mars, 10-15% de la population française développe un Trouble Affectif Saisonnier (TAS). Cette "dépression hivernale" résulte directement de la réduction d'exposition lumineuse.
          </p>

          <p>
            Les symptômes typiques incluent hypersomnie, fringales de sucré, prise de poids, isolement social et pensées sombres. Le cerveau, privé de son carburant lumineux, bascule en "mode hibernation".
          </p>

          <div className="not-prose my-6 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border-l-4 border-red-500">
            <p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">À retenir :</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">La privation lumineuse = stress chronique invisible. Chaque lux compte pour ton équilibre.</p>
          </div>

          <h2>7 stratégies scientifiques pour optimiser ta luminothérapie</h2>

          <p>
            Fini la théorie. Voici ton arsenal complet basé sur 25 ans de recherches en chronobiologie et neurosciences.
          </p>

          <img
            src="/images/articles/7-strategies-lumiere-naturelle.webp"
            alt="Infographie des 7 stratégies pour optimiser la lumière naturelle - exposition matinale chronothérapie luminothérapie éclairage intelligent"
            className="rounded-xl shadow-lg max-w-full h-auto my-8"
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 -mt-4 mb-8">
            <em>Ton guide visuel pour reconnecter ton cerveau aux rythmes lumineux naturels</em>
          </p>

          <h3>Stratégie 1 : L'exposition matinale programmée</h3>
          
          <p>
            <strong>Le principe :</strong> Tes ipRGC sont maximalement sensibles dans les 2 heures suivant le réveil. Cette fenêtre temporelle "reset" ton horloge biologique pour la journée.
          </p>

          <p>
            <strong>Protocole scientifique :</strong>
          </p>
          <ol>
            <li><strong>Timing optimal :</strong> 15-30 minutes dans l'heure suivant le réveil</li>
            <li><strong>Intensité requise :</strong> Minimum 1000 lux (idéal 5000-10000 lux)</li>
            <li><strong>Position :</strong> Lumière légèrement au-dessus du niveau des yeux</li>
            <li><strong>Activité :</strong> Petit-déjeuner, lecture, méditation face à une fenêtre</li>
          </ol>

          <p>
            <strong>Exemple concret :</strong> Marc, consultant, prend désormais son café sur son balcon plutôt qu'en cuisine. Résultat : endormissement 45 minutes plus rapide et réveil spontané sans réveil.
          </p>

          <h3>Stratégie 2 : L'aménagement luminocentriste</h3>
          
          <p>
            <strong>Révolutionne ton espace de vie</strong> en plaçant la lumière naturelle au centre de tes décisions d'aménagement.
          </p>

          <p>
            <strong>Check-list de l'habitat lumineux :</strong>
          </p>

          <ul>
            <li>✅ <strong>Bureau :</strong> À 90° d'une fenêtre (évite les reflets)</li>
            <li>✅ <strong>Miroirs stratégiques :</strong> Démultiplient la lumière naturelle</li>
            <li>✅ <strong>Couleurs claires :</strong> Murs blanc/beige reflètent 80% de la lumière</li>
            <li>✅ <strong>Rideaux transparents :</strong> Filtrent sans bloquer</li>
            <li>✅ <strong>Végétation :</strong> Améliore la qualité lumineuse perçue</li>
          </ul>

          <p>
            <strong>Hack méconnu :</strong> Un miroir bien placé peut doubler l'intensité lumineuse perçue dans une pièce sombre.
          </p>

          <h3>Stratégie 3 : La chronothérapie lumineuse avancée</h3>
          
          <p>
            <strong>Au-delà de la simple exposition</strong>, adapte ton rythme lumineux selon tes objectifs spécifiques.
          </p>

          <p>
            <strong>Protocoles selon tes besoins :</strong>
          </p>

          <p>
            <strong>🌅 Pour optimiser le réveil (chronotype hibou) :</strong>
          </p>
          <ul>
            <li>Lampe de luminothérapie 10 000 lux pendant 30 min dès le lever</li>
            <li>Décaler progressivement l'exposition de 15 min plus tôt chaque jour</li>
            <li>Éviter toute lumière intense après 20h</li>
          </ul>

          <p>
            <strong>🌇 Pour gérer le décalage horaire :</strong>
          </p>
          <ul>
            <li>Exposition 2h après l'heure de réveil locale</li>
            <li>Bloquer la lumière 3h avant le coucher local</li>
            <li>Maintenir le protocole 5-7 jours</li>
          </ul>

          <p>
            <strong>❄️ Pour contrer la dépression hivernale :</strong>
          </p>
          <ul>
            <li>10 000 lux chaque matin de septembre à mars</li>
            <li>Compléter par 5000 lux en milieu de journée si possible</li>
            <li>Supplémentation vitamine D 1000-2000 UI/jour</li>
          </ul>

          <h3>Stratégie 4 : Les micro-expositions dynamiques</h3>
          
          <p>
            <strong>Répartis ton "budget lumineux"</strong> sur la journée plutôt que de tout concentrer le matin.
          </p>

          <p>
            <strong>Programme micro-expositions type :</strong>
          </p>

          <ul>
            <li>🕖 <strong>7h :</strong> Exposition matinale 15-30 min (obligatoire)</li>
            <li>🕐 <strong>13h :</strong> Sortie déjeuner 10-15 min</li>
            <li>🕕 <strong>18h :</strong> Dernière exposition 5-10 min maximum</li>
          </ul>

          <p>
            <strong>Astuce travail :</strong> Programme 3 alarmes "pause lumière" sur ton téléphone. Ces micro-breaks boostent aussi ta productivité.
          </p>

          <h3>Stratégie 5 : La luminothérapie technologique intelligente</h3>
          
          <p>
            <strong>Quand la nature ne suffit pas</strong>, la technologie prend le relais avec des solutions de plus en plus sophistiquées.
          </p>

          <p>
            <strong>Arsenal technologique recommandé :</strong>
          </p>

          <ul>
            <li><strong>Lampe de luminothérapie :</strong> 10 000 lux, spectre complet, certification médicale</li>
            <li><strong>Réveil lumineux :</strong> Simulation de lever de soleil progressive (30 min)</li>
            <li><strong>Ampoules circadiennes :</strong> Température de couleur variable (2700K→6500K)</li>
            <li><strong>Lunettes de luminothérapie :</strong> Portables, 30-60 min/jour</li>
            <li><strong>Apps de régulation :</strong> f.lux, Iris pour filtrer la lumière bleue</li>
          </ul>

          <p>
            <strong>Timing optimal luminothérapie :</strong> Entre 6h et 9h du matin, jamais après 10h (risque de décalage circadien).
          </p>

          <h3>Stratégie 6 : L'écologie lumineuse nocturne</h3>
          
          <p>
            <strong>Protéger ton horloge biologique</strong> passe aussi par une gestion rigoureuse de l'exposition lumineuse nocturne.
          </p>

          <p>
            <strong>Protocole "sunset numérique" :</strong>
          </p>

          <ul>
            <li><strong>19h :</strong> Passage en mode sombre sur tous les écrans</li>
            <li><strong>20h :</strong> Éclairage ambiant uniquement (&lt; 50 lux)</li>
            <li><strong>21h :</strong> Arrêt complet des écrans</li>
            <li><strong>21h30 :</strong> Éclairage rouge/orange uniquement</li>
            <li><strong>22h :</strong> Obscurité complète ou lumière rouge minimale</li>
          </ul>

          <p>
            <strong>Solutions pratiques :</strong>
          </p>
          <ul>
            <li>Lunettes anti-lumière bleue (avec filtrage &gt;95%)</li>
            <li>Ampoules rouges (2700K max) pour l'éclairage tardif</li>
            <li>Masque de sommeil total pour optimiser la mélatonine</li>
          </ul>

          <h3>Stratégie 7 : La mesure et l'optimisation continue</h3>
          
          <p>
            <strong>Ce qui se mesure s'améliore.</strong> Quantifie ton exposition lumineuse pour optimiser précisément tes rythmes.
          </p>

          <p>
            <strong>Outils de mesure recommandés :</strong>
          </p>
          <ul>
            <li><strong>Luxmètre smartphone :</strong> Apps "Lux Meter" (gratuit, précision ±20%)</li>
            <li><strong>Capteurs connectés :</strong> Philips Hue motion sensor (mesure continue)</li>
            <li><strong>Montres connectées :</strong> Garmin, Fitbit (tracking luminosité ambiante)</li>
            <li><strong>Journal circadien :</strong> Note énergie/humeur vs exposition (1-10)</li>
          </ul>

          <p>
            <strong>Métriques clés à suivre :</strong>
          </p>
          <ol>
            <li><strong>Lux cumulés matinaux</strong> (objectif : 50 000-100 000 lux·min)</li>
            <li><strong>Ratio jour/nuit</strong> (idéal : &gt;1000:1)</li>
            <li><strong>Régularité horaire</strong> (exposition matinale ±30 min)</li>
            <li><strong>Corrélation humeur/lumière</strong> (score bien-être quotidien)</li>
          </ol>

          <div className="not-prose my-6 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">À retenir :</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">La lumière se dose comme un médicament. Précision et régularité = clés du succès.</p>
          </div>

          <h2>Programme de transformation lumineuse - 6 semaines</h2>

          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 -mt-4 mb-8">
            <em>Votre roadmap vers une harmonie circadienne : 6 étapes pour synchroniser votre biologie</em>
          </p>

          <h3>🌅 Semaines 1-2 : Réveil lumineux et diagnostic</h3>
          <p>
            <strong>Objectif :</strong> Établir une routine matinale lumineuse stable
          </p>
          <ul>
            <li>Exposition matinale systématique 15-30 min dans l'heure du réveil</li>
            <li>Mesure de ton niveau de lumière actuel (luxmètre smartphone)</li>
            <li>Journal circadien : énergie (1-10) vs exposition lumineuse</li>
            <li><strong>Résultat attendu :</strong> Réveil spontané plus facile (-20% fatigue matinale)</li>
          </ul>

          <h3>☀️ Semaines 3-4 : Optimisation diurne</h3>
          <p>
            <strong>Objectif :</strong> Maximiser l'exposition pendant les heures actives
          </p>
          <ul>
            <li>Réaménagement de l'espace de travail (bureau près fenêtre)</li>
            <li>Intégration de micro-expositions (pause déjeuner extérieur)</li>
            <li>Test de technologies d'appoint si nécessaire (lampe luminothérapie)</li>
            <li><strong>Résultat attendu :</strong> Vigilance diurne améliorée (+30% concentration après-midi)</li>
          </ul>

          <h3>🌇 Semaines 5-6 : Maîtrise nocturne et consolidation</h3>
          <p>
            <strong>Objectif :</strong> Optimiser la transition jour-nuit
          </p>
          <ul>
            <li>Mise en place du protocole "sunset numérique"</li>
            <li>Optimisation de l'environnement nocturne (éclairage, température)</li>
            <li>Ajustement fin basé sur tes données de tracking</li>
            <li><strong>Résultat attendu :</strong> Endormissement naturel facilité (-40% temps d'endormissement)</li>
          </ul>

          <div className="not-prose my-12 bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">☀️ Défi lumière : 21 jours</h3>
            <p className="text-lg mb-6 opacity-90">
              🎯 <strong>CHALLENGE EXCLUSIF :</strong> Rejoins le défi "21 jours de lumière naturelle" avec tracking quotidien, conseils personnalisés et communauté de soutien.
            </p>
            <Link 
              to="/#newsletter" 
              className="inline-flex items-center bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              JE LANCE MON DÉFI LUMIÈRE
            </Link>
            <p className="text-sm mt-3 opacity-75">✓ Gratuit ✓ Guide PDF inclus ✓ Support communautaire</p>
          </div>

          <h2>FAQ : Vos questions fréquentes sur la lumière naturelle</h2>

          <div className="not-prose space-y-4">
            <details className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <summary className="font-semibold cursor-pointer text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Combien de temps faut-il pour ressentir les effets ?
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Les premiers effets apparaissent dès 3-5 jours : meilleur réveil et endormissement. Les bénéfices complets sur l'humeur et l'énergie se manifestent après 2-3 semaines de pratique régulière.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <summary className="font-semibold cursor-pointer text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                La luminothérapie artificielle remplace-t-elle le soleil ?
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Partiellement. La luminothérapie (10 000 lux) synchronise efficacement l'horloge biologique mais ne produit pas de vitamine D. Elle complète mais ne remplace jamais totalement l'exposition solaire naturelle.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <summary className="font-semibold cursor-pointer text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Peut-on avoir trop de lumière le matin ?
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Très difficile avec la lumière naturelle. Le soleil délivre jusqu'à 100 000 lux sans danger. Attention cependant à la luminothérapie artificielle : ne pas dépasser 1h à 10 000 lux pour éviter maux de tête et agitation.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <summary className="font-semibold cursor-pointer text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Comment gérer le travail en open space sombre ?
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Stratégies compensatoires : pauses lumière toutes les 2h, lampe de bureau 5000K, maximiser l'exposition pendant trajet/pause déjeuner. Négocier si possible un poste près d'une fenêtre.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <summary className="font-semibold cursor-pointer text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                La lumière bleue des écrans est-elle toujours nocive ?
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Non, cela dépend du moment. La lumière bleue est bénéfique le matin pour synchroniser l'horloge biologique. Elle devient problématique après 19h car elle bloque la production de mélatonine et retarde l'endormissement.
              </p>
            </details>
          </div>

          <h2>Études scientifiques récentes sur la lumière et le cerveau</h2>

          <div className="not-prose my-8 bg-neutral-50 dark:bg-neutral-800/50 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Recherches de référence :</h3>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
              <li>• <strong>Berson et al. (2002)</strong> : Découverte des cellules ipRGC et leur rôle dans la régulation circadienne</li>
              <li>• <strong>Zeitzer et al. (2000)</strong> : La lumière de 10 000 lux décale l'horloge biologique de 2-3 heures</li>
              <li>• <strong>Lewy et al. (2006)</strong> : La luminothérapie réduit de 60% les symptômes de dépression saisonnière</li>
              <li>• <strong>Reid et al. (2014)</strong> : L'exposition lumineuse matinale améliore les performances cognitives de 25%</li>
              <li>• <strong>Boubekri et al. (2014)</strong> : Les employés près des fenêtres dorment 46 min de plus par nuit</li>
            </ul>
          </div>

          <h2>Questions pour approfondir ta réflexion</h2>
          
          <div className="not-prose my-8 bg-neutral-50 dark:bg-neutral-800/50 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">Auto-évaluation lumineuse :</h3>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
              <li>• À quel moment de la journée te sens-tu le plus énergique naturellement ?</li>
              <li>• Ton espace de vie favorise-t-il réellement l'exposition à la lumière naturelle ?</li>
              <li>• Quels changements d'humeur remarques-tu entre les saisons claires et sombres ?</li>
              <li>• Comment pourrais-tu réduire ton exposition à la lumière artificielle en soirée ?</li>
              <li>• Quelle serait ta première action pour augmenter ta "dose" de lumière quotidienne ?</li>
            </ul>
          </div>

          <h2>Conclusion : Retrouver notre nature photosensible</h2>
          
          <p>
            <strong>Revenons à Sarah.</strong> Après 6 semaines d'application de ces stratégies, elle a transformé son appartement en oasis lumineuse. Lampe de luminothérapie matinale, bureau repositionné, sorties quotidiennes. "J'ai retrouvé une énergie que je croyais perdue", confie-t-elle.
          </p>

          <p>
            La lumière n'est pas un simple confort moderne. C'est le <strong>carburant fondamental</strong> de ton horloge biologique, le synchroniseur de tes rythmes, le régulateur de ton humeur. Retrouver le contact avec la lumière naturelle, c'est reconnecter ton cerveau à sa programmation originelle.
          </p>

          <p>
            En appliquant ces 7 stratégies avec constance, tu restaureras progressivement l'harmonie entre ton environnement lumineux et tes besoins biologiques profonds.
          </p>

          <blockquote>
            <p>"La lumière qui brûle deux fois plus fort brûle deux fois moins longtemps. Mais celle qui accompagne tes rythmes naturels éclaire toute une vie." - Adaptation libre de Blade Runner</p>
          </blockquote>

          <p>
            La science est formelle : ton cerveau est conçu pour danser avec la lumière. Il est temps de rallumer cette connexion ancestrale.
          </p>

          <h2>🎯 Passe à l'action cette semaine</h2>

          <p>
            <strong>Ton défi lumière :</strong>
          </p>
          <ol>
            <li><strong>Aujourd'hui :</strong> Mesure l'intensité lumineuse de ton espace de travail avec une app luxmètre</li>
            <li><strong>Demain matin :</strong> 20 minutes d'exposition directe dès le réveil (fenêtre ou extérieur)</li>
            <li><strong>Cette semaine :</strong> Repositionne ton bureau pour maximiser la lumière naturelle</li>
          </ol>

          <p>
            <strong>Want to go deeper?</strong> Rejoins notre communauté pour recevoir le guide complet de la luminothérapie et des outils d'optimisation avancés.
          </p>

          <div className="not-prose my-8 text-center">
            <Link 
              to="/#newsletter" 
              className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
            >
              J'OPTIMISE MA LUMIÈRE NATURELLE
            </Link>
          </div>

          <h2>📱 Partage cet article</h2>

          <p>
            <strong>Cet article t'a éclairé ?</strong> Partage-le avec une personne qui vit dans l'ombre. La lumière, ça se partage aussi.
          </p>

          <div className="not-prose">
            <SocialShare 
              url={url}
              title="Lumière naturelle : effets sur le cerveau, le sommeil et la santé mentale"
              description="Découvrez comment la lumière naturelle influence le cerveau, régule le sommeil et améliore l'humeur, avec 7 stratégies pratiques validées scientifiquement."
              hashtags={["lumiere", "chronobiologie", "neurosciences", "luminotherapie"]}
            />
          </div>

          <h2>📚 Sources scientifiques principales</h2>
          <ul>
            <li>Berson, D.M. et al. (2002). <em>Phototransduction by retinal ganglion cells that set the circadian clock</em>. Science</li>
            <li>Foster, R.G. & Kreitzman, L. (2017). <em>Circadian Rhythms: A Very Short Introduction</em>. Oxford University Press</li>
            <li>Zeitzer, J.M. et al. (2000). <em>Sensitivity of the human circadian pacemaker to nocturnal light</em>. Journal of Clinical Endocrinology</li>
            <li>Reid, K.J. et al. (2014). <em>Timing and intensity of light correlate with body weight in adults</em>. PLOS ONE</li>
            <li>Boubekri, M. et al. (2014). <em>Impact of windows and daylight exposure on sleep quality</em>. Journal of Clinical Medicine</li>
          </ul>
        </div>
      </article>

    </>
  );
}