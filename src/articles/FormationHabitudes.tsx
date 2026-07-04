// src/articles/FormationHabitudes.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 19 juin 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "formation-habitudes-cerveau-neurosciences",
  title: "Formation des habitudes dans le cerveau : ce que disent les neurosciences",
  description: "Formation des habitudes dans le cerveau : le circuit du striatum, le mythe des 21 jours, la vraie durée (66 jours) et 3 leviers validés pour les changer.",
  cover: "/images/articles/formation-habitudes-cerveau-neurosciences-cover",
  datePublished: "2026-06-19T08:00:00+01:00",
  dateModified: "2026-06-19T08:00:00+01:00",
  tags: ["formation des habitudes", "habitudes cerveau", "striatum", "ganglions de la base", "boucle de l'habitude", "neurosciences", "changer une habitude", "développement personnel"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Développement Personnel",
  readingTime: "14 min",
  version: "1.0",
  verifiedDate: "Juin 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Comment se forment les habitudes dans le cerveau ?",
    answer: "Une habitude se forme quand une action répétée dans un contexte stable, suivie d'une récompense, finit par être encodée dans le striatum, une structure profonde du cerveau. Le contrôle passe progressivement du cortex préfrontal (décision consciente) au striatum (automatisme). L'action devient alors déclenchée par le contexte, sans effort de volonté."
  },
  {
    question: "Combien de temps faut-il vraiment pour former une habitude ?",
    answer: "En moyenne 66 jours, selon la seule étude humaine de référence (Lally, University College London, 2010). Mais la plage réelle va de 18 à 254 jours selon la complexité du comportement et la régularité. Boire un verre d'eau le matin s'automatise vite ; courir 30 minutes prend beaucoup plus longtemps."
  },
  {
    question: "Le mythe des 21 jours est-il vrai ?",
    answer: "Non. Le chiffre de 21 jours ne repose sur aucune donnée scientifique. Il vient d'une observation du chirurgien Maxwell Maltz dans les années 1960 sur le temps d'adaptation à une amputation, déformée ensuite. La seule étude publiée donne une moyenne de 66 jours, avec une forte variabilité individuelle."
  },
  {
    question: "Quelle partie du cerveau contrôle les habitudes ?",
    answer: "Le striatum, situé dans les ganglions de la base, au cœur du cerveau. Au début d'un apprentissage, c'est le striatum dorsomédial (orienté vers le but) qui agit. Une fois l'habitude automatisée, le contrôle migre vers le striatum dorsolatéral, qui exécute la séquence sans intervention consciente."
  },
  {
    question: "Pourquoi est-il si difficile de changer une mauvaise habitude ?",
    answer: "Parce qu'une habitude installée n'est plus une décision : c'est une réponse automatique déclenchée par le contexte, encodée dans le striatum. La volonté agit depuis le cortex préfrontal, qui est mis en retrait une fois l'automatisme formé. Vouloir « décider » d'arrêter ne suffit pas, car la décision n'est plus aux commandes."
  },
  {
    question: "Comment changer une habitude efficacement selon les neurosciences ?",
    answer: "En agissant sur le comportement, pas sur la motivation. Trois leviers validés : modifier le contexte qui déclenche l'habitude, empiler la nouvelle action sur un signal stable déjà présent, et ajouter de la friction (rendre la mauvaise habitude plus difficile). La psychologue Wendy Wood (USC) montre que le contexte pèse plus que la volonté."
  },
  {
    question: "Qu'est-ce que la boucle de l'habitude (signal, routine, récompense) ?",
    answer: "C'est le schéma en trois temps qui décrit le fonctionnement d'une habitude : un signal (le déclencheur), une routine (l'action), une récompense (le bénéfice). Popularisé par le journaliste Charles Duhigg, ce modèle simplifie des mécanismes cérébraux réels impliquant le striatum et la dopamine, molécule de l'anticipation."
  },
  {
    question: "Pourquoi changer d'environnement aide-t-il à rompre une mauvaise habitude ?",
    answer: "Parce que les habitudes sont des associations contexte-réponse : c'est le lieu, l'heure ou la situation qui déclenche l'action automatique. Quand l'environnement change (déménagement, nouveau travail), les signaux habituels disparaissent. L'habitude perd son déclencheur. Wendy Wood a mesuré cet effet chez des étudiants changeant d'université."
  }
];

// ==================== COMPOSANT ====================

export default function FormationHabitudes() {
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
    caption: "Illustration conceptuelle de la formation des habitudes dans le cerveau : sillon lumineux se creusant par passages répétés dans un paysage neuronal abstrait, métaphore de l'habitude qui se grave, fond sombre indigo profond"
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
      name: "Formation des habitudes",
      description: "Processus neurobiologique par lequel un comportement répété dans un contexte stable est encodé dans le striatum et automatisé, avec un transfert du contrôle du cortex préfrontal vers le striatum dorsolatéral"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 2600
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
    name: "3 leviers pour changer une habitude selon les neurosciences",
    description: "Leviers validés par la psychologie et les neurosciences du comportement pour modifier une habitude en agissant sur le comportement plutôt que sur la volonté",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Agir sur le contexte plutôt que sur la volonté",
        description: "Les habitudes sont des associations contexte-réponse. Modifier l'environnement qui déclenche l'habitude est plus efficace que la motivation seule (Wendy Wood, USC, 2024)."
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Empiler la nouvelle habitude sur un signal stable",
        description: "Accrocher une nouvelle action à un déclencheur déjà présent dans la routine quotidienne donne au cerveau un signal fiable pour l'automatiser."
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ajouter de la friction à la mauvaise habitude",
        description: "Rendre la réponse habituelle plus difficile à exécuter (étapes supplémentaires, éloignement du signal) suffit souvent à interrompre l'automatisme."
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
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Formation des habitudes</li>
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
          Formation des habitudes dans le cerveau : ce que disent les neurosciences
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2005-2024
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> La formation des habitudes dans le cerveau repose sur le striatum, une structure profonde. À force de répéter une action dans un contexte stable, le contrôle passe du cortex préfrontal (décision consciente) au striatum (automatisme). L'habitude devient alors déclenchée par le contexte, sans volonté. Compter 66 jours en moyenne, pas 21.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Lally P. et al., <em>European Journal of Social Psychology</em>, 2010 ; Tricomi E. et al., <em>European Journal of Neuroscience</em>, 2009 ; Wood W., <em>Current Directions in Psychological Science</em>, 2024.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">66<br/>jours</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                Former une nouvelle habitude prend en moyenne 66 jours, mais la plage réelle s'étend de 18 à 254 jours selon la complexité du comportement et la régularité de la pratique. Le mythe des 21 jours ne correspond à aucune donnée publiée. Bonne nouvelle : manquer un jour ne rompt pas la formation, l'automatisation reprend ensuite.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Lally P., van Jaarsveld C.H.M., Potts H.W.W., Wardle J., University College London, <em>European Journal of Social Psychology</em>, 2010 (DOI : 10.1002/ejsp.674)
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration conceptuelle de la formation des habitudes dans le cerveau : sillon lumineux se creusant par passages répétés de lumière dans un paysage neuronal abstrait, métaphore de l'habitude qui se grave, fond sombre indigo profond"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu as déjà décidé, un dimanche soir, de changer une habitude. Te coucher plus tôt, arrêter de checker ton téléphone au réveil, te remettre au sport. Et trois semaines plus tard, te voilà revenu exactement au point de départ.
          </p>
          <p>
            Ce n'est pas un manque de volonté. C'est de la biologie. La <strong>formation des habitudes</strong> dans le cerveau suit un mécanisme précis, qui explique pourquoi tes bonnes résolutions s'effondrent et, surtout, comment t'y prendre autrement.
          </p>
          <p>
            Aucun des articles les mieux classés en français sur ce sujet ne va au-delà de la fameuse « boucle de l'habitude » et du chiffre de « 66 jours ». Ils ratent l'essentiel : ce qui se passe réellement dans ton striatum, pourquoi ta volonté n'est plus aux commandes une fois l'habitude installée, et pourquoi changer ton environnement marche mieux que serrer les dents. Cet article part des neurosciences pour arriver à des leviers concrets.
          </p>

          {/* H2 — Comment se forment */}
          <h2>Comment se forment les habitudes dans le cerveau ?</h2>
          <p>
            Une habitude est une action devenue automatique à force de répétition. Le cerveau la construit pour économiser de l'énergie : une fois un comportement appris, il n'a plus besoin de « réfléchir » pour l'exécuter. Voici les deux briques de base.
          </p>

          <h3>La boucle de l'habitude : signal, routine, récompense</h3>
          <p>
            Le modèle le plus connu décrit l'habitude en trois temps. Un <strong>signal</strong> (le déclencheur : une heure, un lieu, une émotion), une <strong>routine</strong> (l'action elle-même) et une <strong>récompense</strong> (le bénéfice ressenti). Exemple concret : tu t'assois à ton bureau (signal), tu ouvres les réseaux sociaux (routine), tu ressens une petite distraction agréable (récompense).
          </p>
          <p>
            Ce schéma a été popularisé par Charles Duhigg, journaliste américain, dans son livre <em>Le pouvoir des habitudes</em> (2012). Attention : Duhigg n'est pas un chercheur, il vulgarise des travaux scientifiques. La boucle est une simplification utile, mais le vrai moteur est ailleurs, dans une molécule et une structure cérébrale.
          </p>
          <p>
            La récompense agit via la <strong>dopamine</strong>, souvent appelée à tort « molécule du plaisir ». En réalité, c'est surtout la molécule de l'anticipation : elle marque ce qui vaut la peine d'être répété et pousse à recommencer. C'est elle qui « grave » la boucle. Pour comprendre comment cette boucle dopaminergique se renforce, l'article sur <Link to="/blog/neuro-dopamine-routine/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">la dopamine naturelle et ses protocoles d'activation</Link> détaille le mécanisme.
          </p>

          <h3>Les ganglions de la base, pilote automatique du cerveau</h3>
          <p>
            Sous ton cortex, au cœur du cerveau, se trouve un ensemble de structures appelé les <strong>ganglions de la base</strong>. Imagine-les comme le pilote automatique d'un avion : une fois la trajectoire programmée, ils prennent les commandes pour libérer le pilote (toi) des tâches répétitives.
          </p>
          <p>
            Au centre de ce système se trouve le <strong>striatum</strong>. C'est la structure clé de l'habitude. Quand tu répètes une action, le striatum enregistre progressivement la séquence complète. Au début, chaque geste demande de l'attention. Après des dizaines de répétitions, le striatum exécute l'ensemble comme un seul bloc, sans que tu aies à y penser, exactement comme conduire sur un trajet connu en pensant à autre chose.
          </p>

          {/* H2 — Que se passe-t-il */}
          <h2>Que se passe-t-il dans le cerveau quand une habitude se forme ?</h2>
          <p>
            C'est ici que les articles classiques s'arrêtent et que les neurosciences deviennent vraiment éclairantes. La formation d'une habitude n'est pas un simple « renforcement » : c'est un transfert de contrôle d'une zone du cerveau à une autre.
          </p>

          <h3>Du striatum dorsomédial au dorsolatéral, le transfert clé</h3>
          <p>
            Le striatum n'est pas uniforme. Il a deux parties qui jouent des rôles opposés dans l'habitude.
          </p>
          <p>
            Le <strong>striatum dorsomédial</strong> gère les actions orientées vers un but. C'est lui qui agit quand tu apprends quelque chose de nouveau et que tu réfléchis encore à chaque étape (« je fais ça pour obtenir tel résultat »). Le <strong>striatum dorsolatéral</strong>, lui, encode l'automatisme final : l'action déclenchée par le contexte, sans calcul conscient du résultat.
          </p>
          <p>
            Selon le modèle dominant en neurosciences, former une habitude correspond précisément à ce glissement : le contrôle passe du dorsomédial (volontaire) au dorsolatéral (automatique). Une étude par imagerie cérébrale d'Elizabeth Tricomi et de ses collègues (California Institute of Technology) l'a montré chez l'humain : plus l'entraînement se prolonge, plus l'activité se déplace vers le putamen postérieur, la partie « automatique » du striatum.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Avant<br/>→ arrière</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  En IRMf chez l'humain, un entraînement prolongé rend le comportement insensible à la baisse de valeur de la récompense, signe d'une habitude. En parallèle, l'activité se déplace vers le putamen postérieur (l'arrière du striatum). Ce glissement de l'avant vers l'arrière du striatum est le marqueur neurologique du passage de l'action volontaire à l'automatisme.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Tricomi E., Balleine B.W., O'Doherty J.P., California Institute of Technology, <em>European Journal of Neuroscience</em>, 2009 (DOI : 10.1111/j.1460-9568.2009.06796.x)
                </p>
              </div>
            </div>
          </div>

          <h3>Le task bracketing : le cerveau encapsule la séquence</h3>
          <p>
            Comment le striatum sait-il où commence et où finit une habitude ? Par un mécanisme appelé <strong>task bracketing</strong>, qu'on peut traduire par « mise entre parenthèses de la tâche ».
          </p>
          <p>
            La neuroscientifique Ann Graybiel (Massachusetts Institute of Technology) a décrit ce phénomène : le striatum dorsolatéral émet un signal fort au tout début d'une séquence habituelle et un autre à la toute fin, comme des parenthèses qui encadrent le bloc entier. Entre les deux, l'action se déroule en pilote automatique. Ces travaux fondateurs ont d'abord été menés sur modèle animal, et sont cohérents avec ce qu'on observe en imagerie humaine.
          </p>
          <p>
            Concrètement, c'est pourquoi une fois que tu as commencé un enchaînement (ouvrir le frigo, prendre le paquet, t'asseoir devant l'écran), la suite se déclenche presque toute seule jusqu'au bout. Le cerveau a encapsulé la séquence en une seule unité.
          </p>

          <h3>Pourquoi le cortex préfrontal se met en retrait</h3>
          <p>
            Le <strong>cortex préfrontal</strong>, la zone située derrière ton front, est ton centre de décision consciente et de volonté. Au début d'un apprentissage, il travaille beaucoup : il planifie, surveille, corrige. C'est fatigant, et c'est normal.
          </p>
          <p>
            Mais à mesure que l'habitude se forme, le cortex préfrontal se met en retrait, sans s'éteindre complètement, et laisse le striatum prendre le relais. Cet encodage repose sur la <Link to="/blog/plasticite-synaptique-apprentissage-cerveau/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">plasticité synaptique, le mécanisme par lequel les connexions entre neurones se renforcent par la répétition</Link>. C'est exactement ce qui rend une habitude si difficile à déloger : ta volonté, logée dans le préfrontal, n'est tout simplement plus aux commandes. C'est aussi pourquoi la <Link to="/blog/procrastination-cerveau-agir-neurosciences/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">procrastination résiste à la simple décision de s'y mettre</Link> : décider ne suffit pas quand l'automatisme a pris le pouvoir.
          </p>

          {/* H2 — Combien de temps */}
          <h2>Combien de temps faut-il vraiment pour former une habitude ?</h2>
          <p>
            C'est la question que tout le monde pose, et la réponse populaire est fausse. Voici ce que dit la seule étude humaine sérieuse sur le sujet.
          </p>

          <h3>Le mythe des 21 jours</h3>
          <p>
            Tu as sûrement entendu qu'il faut 21 jours pour ancrer une habitude. Ce chiffre ne repose sur aucune donnée scientifique.
          </p>
          <p>
            Il vient d'une observation du chirurgien esthétique Maxwell Maltz, dans les années 1960. Il avait noté que ses patients mettaient « environ 21 jours » à s'habituer à un changement physique (un nez modifié, un membre amputé). Cette remarque clinique, sortie de son contexte, s'est transformée en règle universelle reprise par toute l'industrie du développement personnel. Mais ce n'est pas une mesure de la formation d'habitude.
          </p>

          <h3>La vraie donnée : 66 jours en moyenne (18 à 254 en réalité)</h3>
          <p>
            La référence scientifique, c'est l'étude de Philippa Lally (University College London, Royaume-Uni) publiée en 2010. Pendant 12 semaines, 96 volontaires ont adopté un nouveau comportement quotidien (boire un verre d'eau au déjeuner, faire quelques minutes d'exercice) et noté chaque jour à quel point l'action leur semblait automatique. 82 d'entre eux ont fourni assez de données pour tracer la courbe d'automatisation.
          </p>
          <p>
            Résultat : il faut en moyenne 66 jours pour qu'un comportement devienne automatique. Mais surtout, la fourchette observée va de 18 à 254 jours selon les personnes et la difficulté du comportement. Une action simple s'ancre vite ; une habitude exigeante peut demander des mois. Le chiffre unique n'existe pas.
          </p>

          <h3>Manquer un jour ne casse pas tout</h3>
          <p>
            Voici le détail le plus rassurant de l'étude, et le plus souvent oublié. Sauter une journée n'a pas compromis la formation de l'habitude chez les participants.
          </p>
          <p>
            Autrement dit : la logique du « tout ou rien », où une seule entorse ruinerait des semaines d'efforts, est fausse. Ce qui compte, c'est la régularité globale sur la durée, pas la perfection quotidienne. Rater un jour, puis reprendre, ne réinitialise pas le compteur. C'est la répétition cumulée qui grave la séquence dans le striatum.
          </p>

          {/* H2 — Comment changer */}
          <h2>Comment changer une habitude selon les neurosciences (3 leviers) ?</h2>
          <p>
            Si la volonté ne suffit pas, par quoi la remplacer ? Par une action directe sur le comportement et son environnement. Voici trois leviers validés, du plus accessible au plus tactique.
          </p>

          <h3>1. Agir sur le contexte, pas sur la volonté</h3>
          <p>
            C'est le levier le plus puissant et le plus ignoré. La psychologue <strong>Wendy Wood</strong> (University of Southern California, États-Unis) a montré que les habitudes ne sont pas des intentions, mais des associations entre un contexte et une réponse. C'est le lieu, l'heure ou la situation qui déclenche l'action, pas ta décision.
          </p>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Contexte<br/>&gt; volonté</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Les habitudes se forment quand on répète une action récompensée dans un contexte stable. Une fois formées, elles s'activent par la simple perception du contexte, sans passer par la motivation. Conséquence pratique : changer ses intentions a un effet limité sur les comportements habituels. Agir sur le contexte, la friction et la récompense fonctionne mieux que la volonté seule.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Wood W., University of Southern California, <em>Current Directions in Psychological Science</em>, 2024 (DOI : 10.1177/09637214241246480)
                </p>
              </div>
            </div>
          </div>

          <p>
            En pratique : pour arrêter de grignoter devant la télé, ne range pas les biscuits « à portée du canapé ». Pour rompre une mauvaise habitude tenace, le changement d'environnement est l'arme la plus efficace. Wood l'a observé chez des étudiants changeant d'université : leurs anciennes habitudes, privées de leurs signaux familiers, se sont effondrées d'elles-mêmes. C'est pourquoi un déménagement ou un nouveau travail est une fenêtre idéale pour repartir à neuf.
          </p>

          <h3>2. Empiler la nouvelle habitude sur un signal stable</h3>
          <p>
            Puisque c'est le contexte qui déclenche l'action, autant utiliser un signal déjà solide. Le principe : accrocher la nouvelle habitude à un repère fixe et quotidien que tu ne sautes jamais.
          </p>
          <p>
            La formule est simple : « Après [habitude déjà installée], je fais [nouvelle habitude]. » Par exemple : « Après avoir lancé la machine à café, je fais deux minutes d'étirements. » Le café, déjà automatique, sert de déclencheur fiable. Cette logique de plan précis rejoint celle des plans « si/alors » détaillée dans l'article sur <Link to="/blog/objectifs-smart-methode-neurosciences/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">les objectifs SMART décryptés par les neurosciences</Link>. Le moment le plus propice pour ces ancrages est le matin, quand la routine est la plus stable, comme l'explique l'article sur <Link to="/blog/routine-matinale-scientifique-cerveau/" className="text-amber-600 dark:text-amber-400 underline underline-offset-2">la routine matinale et les 90 premières minutes</Link>.
          </p>

          <h3>3. Ajouter de la friction à la mauvaise habitude</h3>
          <p>
            Pour casser une habitude, rends-la simplement plus difficile à exécuter. Chaque étape supplémentaire entre le signal et l'action affaiblit l'automatisme.
          </p>
          <p>
            Exemples : mets ton téléphone dans une autre pièce pour ne pas le consulter au lit, désinstalle l'application qui te happe, débranche la console et range la manette dans un placard. À l'inverse, pour une bonne habitude, réduis la friction : prépare tes affaires de sport la veille. Le cerveau suit toujours le chemin le plus facile. En modifiant l'effort requis, tu changes le comportement sans avoir à livrer une bataille de volonté.
          </p>

          {/* Encadré protocole pratique */}
          <div className="not-prose my-6 bg-amber-50 dark:bg-amber-950/30 p-5 rounded-lg border-l-4 border-amber-500">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-3">Protocole en 4 étapes</p>
            <ol className="space-y-2 text-sm text-amber-900 dark:text-amber-100 list-decimal list-inside">
              <li><strong>Repère le signal :</strong> quel contexte déclenche l'habitude à changer ? (lieu, heure, émotion)</li>
              <li><strong>Agis sur l'environnement :</strong> supprime le signal de la mauvaise habitude, ou ajoute de la friction.</li>
              <li><strong>Empile la nouvelle :</strong> « Après [repère quotidien stable], je fais [nouvelle action]. »</li>
              <li><strong>Tiens dans la durée :</strong> vise la régularité sur 2 à 3 mois, pas la perfection. Un jour manqué ne casse rien.</li>
            </ol>
          </div>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>✅ <strong>Le siège des habitudes :</strong> le striatum, dans les ganglions de la base. À force de répétition, le contrôle passe du cortex préfrontal (volonté) au striatum (automatisme).</li>
              <li>✅ <strong>Le transfert clé :</strong> l'activité glisse du striatum dorsomédial (action volontaire) vers le dorsolatéral et le putamen postérieur (automatisme), visible en IRMf (Tricomi, 2009).</li>
              <li>✅ <strong>La vraie durée :</strong> 66 jours en moyenne, mais de 18 à 254 jours selon le comportement. Le « 21 jours » est un mythe. Un jour manqué ne casse rien.</li>
              <li>🔑 <strong>Pour changer :</strong> agis sur le contexte, pas sur la volonté. Les habitudes sont des associations contexte-réponse (Wendy Wood, 2024).</li>
              <li>🔑 <strong>3 leviers :</strong> modifier l'environnement, empiler sur un signal stable, ajouter de la friction à la mauvaise habitude.</li>
              <li>⚠️ <strong>L'erreur classique :</strong> compter sur la motivation. Une fois l'habitude installée, la volonté n'est plus aux commandes.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur la formation des habitudes</h2>
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
            <p className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">Fiche Changer une Habitude : le protocole en 4 étapes</p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">
              Une fiche A4 à imprimer : repérer le signal, agir sur le contexte, empiler sur un déclencheur stable, ajouter de la friction. Le tout fondé sur le circuit du striatum, en une page.
            </p>
            <a
              href="/Downloads/formation-habitudes-cerveau-neurosciences-guide.pdf"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la fiche habitude (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Lally P., van Jaarsveld C.H.M., Potts H.W.W., Wardle J. — <em>How are habits formed: Modelling habit formation in the real world</em> — University College London — <em>European Journal of Social Psychology</em>, vol. 40(6), 2010 — DOI : <a href="https://doi.org/10.1002/ejsp.674" className="underline" target="_blank" rel="noopener noreferrer">10.1002/ejsp.674</a>
            </li>
            <li>
              [2] Tricomi E., Balleine B.W., O'Doherty J.P. — <em>A specific role for posterior dorsolateral striatum in human habit learning</em> — California Institute of Technology — <em>European Journal of Neuroscience</em>, vol. 29(11), 2009 — DOI : <a href="https://doi.org/10.1111/j.1460-9568.2009.06796.x" className="underline" target="_blank" rel="noopener noreferrer">10.1111/j.1460-9568.2009.06796.x</a>
            </li>
            <li>
              [3] Wood W. — <em>Habits, Goals, and Effective Behavior Change</em> — University of Southern California — <em>Current Directions in Psychological Science</em>, 2024 — DOI : <a href="https://doi.org/10.1177/09637214241246480" className="underline" target="_blank" rel="noopener noreferrer">10.1177/09637214241246480</a>
            </li>
            <li>
              [4] Graybiel A.M. — <em>Habits, Rituals, and the Evaluative Brain</em> — Massachusetts Institute of Technology — <em>Annual Review of Neuroscience</em>, vol. 31, 2008 — DOI : <a href="https://doi.org/10.1146/annurev.neuro.29.051605.112851" className="underline" target="_blank" rel="noopener noreferrer">10.1146/annurev.neuro.29.051605.112851</a>
            </li>
            <li>
              [5] Wood W., Tam L., Guerrero Witt M. — <em>Changing circumstances, disrupting habits</em> — <em>Journal of Personality and Social Psychology</em>, vol. 88(6), 2005 — DOI : <a href="https://doi.org/10.1037/0022-3514.88.6.918" className="underline" target="_blank" rel="noopener noreferrer">10.1037/0022-3514.88.6.918</a>
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
