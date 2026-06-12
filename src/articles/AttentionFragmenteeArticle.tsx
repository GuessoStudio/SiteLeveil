// src/articles/AttentionFragmenteeArticle.tsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const meta = {
  slug: "attention-fragmentee-concentration-numerique",
  title: "Attention fragmentée : restaurer sa concentration profonde à l'ère numérique",
  description: "Découvrez les mécanismes neuroscientifiques de l'attention fragmentée et 8 stratégies scientifiquement validées pour retrouver une concentration profonde face aux distractions numériques.",
  cover: "/images/articles/attention-fragmentee-cover-1200x630",
  datePublished: "2025-08-28T08:00:00+01:00",
  dateModified: "2025-08-28T08:00:00+01:00",
  tags: ["attention", "concentration", "neurosciences", "distractions numériques"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Neurosciences",
  readingTime: "12 min",
  version: "1.0",
  verifiedDate: "Août 2025"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "L'attention fragmentée est-elle réversible à l'âge adulte ?",
    answer: "Oui, grâce à la neuroplasticité. Klingberg (Karolinska Institute, 2010) démontre que l'entraînement attentionnel modifie la connectivité préfrontale même chez les adultes. Les améliorations sont mesurables après 6 à 8 semaines de pratique structurée comme la méditation shamatha."
  },
  {
    question: "Combien de temps par jour faut-il s'entraîner pour restaurer sa concentration ?",
    answer: "Amishi Jha (University of Miami) recommande 12 à 20 minutes d'entraînement direct par jour — méditation focalisée ou exercices cognitifs — plus l'application des stratégies environnementales. L'effet cumulatif est plus important que la durée des sessions individuelles."
  },
  {
    question: "Les enfants sont-ils plus affectés par l'attention fragmentée que les adultes ?",
    answer: "Oui. Le cortex préfrontal, siège du contrôle attentionnel, ne mature qu'à 25 ans. Les enfants sont donc particulièrement vulnérables aux effets des distractions numériques sur le développement cognitif, avec des risques plus durables sur la plasticité préfrontale."
  },
  {
    question: "Peut-on complètement éliminer les distractions numériques pour améliorer sa concentration ?",
    answer: "L'objectif n'est pas l'élimination complète mais le contrôle conscient. Il s'agit de développer la capacité de choisir quand être connecté — via des créneaux fixes de consultation — plutôt que de subir des interruptions constantes qui fragmentent le focus cognitif."
  },
  {
    question: "Qu'est-ce que l'effet de résidu attentionnel et comment l'éviter ?",
    answer: "Sophie Leroy (University of Washington) a identifié ce phénomène : quand on change de tâche, une partie de l'attention reste 'collée' à la tâche précédente. Pour l'éviter, terminer chaque tâche par une note de clôture avant de passer à la suivante réduit ce résidu cognitif."
  },
  {
    question: "Comment les notifications dopaminergiques fragmentent-elles l'attention ?",
    answer: "Robert Sapolsky (Stanford) explique que les notifications activent le système dopaminergique par renforcement intermittent — comme les machines à sous. Chaque 'ping' déclenche une anticipation dopaminergique qui interrompt le focus, car le cerveau anticipe une récompense variable."
  },
  {
    question: "Quelle est la durée optimale d'une session de concentration profonde ?",
    answer: "Cal Newport (Georgetown) recommande de progresser graduellement : 15 minutes la première semaine, jusqu'à 90 minutes après 8 semaines d'entraînement. La recherche indique que 90 minutes correspond à un cycle ultradian naturel de concentration soutenue."
  },
  {
    question: "La marche en nature améliore-t-elle réellement la concentration ?",
    answer: "Oui. Rachel et Stephen Kaplan (University of Michigan) ont validé la Théorie de la Restauration Attentionnelle : 50 minutes de marche en nature améliorent l'attention sélective de 20 % et réduisent la rumination de 16 %, permettant aux circuits attentionnels épuisés de se régénérer."
  }
];

export default function AttentionFragmenteeArticle() {
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
    jobTitle: "Fondateur — L'Éveil Mental",
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
    caption: "Représentation scientifique de l'attention fragmentée et des réseaux neuronaux affectés par les distractions numériques"
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
      name: "Attention fragmentée",
      description: "Incapacité à maintenir un focus cognitif soutenu résultant d'interruptions fréquentes, impliquant le cortex préfrontal dorsolatéral, le réseau du mode par défaut et les circuits dopaminergiques"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 3100
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
    name: "8 stratégies neuroscientifiques pour restaurer l'attention profonde",
    description: "Interventions validées par la recherche cognitive pour contrer la fragmentation attentionnelle et retrouver une concentration soutenue à l'ère numérique",
    numberOfItems: 8,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Entraînement attentionnel par méditation (ATT)", description: "12 minutes quotidiennes de méditation shamatha augmentent la capacité de working memory de 30 % et réduisent l'esprit vagabond de 22 % après 8 semaines (Jha, University of Miami)" },
      { "@type": "ListItem", position: 2, name: "Protocole de concentration progressive (DCP)", description: "Augmentation graduelle des durées de focus sans distraction de 10 à 90 minutes sur 8 semaines, développé par Cal Newport (Georgetown)" },
      { "@type": "ListItem", position: 3, name: "Architecture cognitive de l'environnement", description: "Modifier l'environnement physique et numérique pour réduire les décisions attentionnelles involontaires : bureau épuré, téléphone hors de portée, applications bloquées" },
      { "@type": "ListItem", position: 4, name: "Batching temporel stratégique", description: "Regrouper les tâches similaires en blocs dédiés pour minimiser le coût cognitif des changements de tâche, réduisant le cortisol de 23 % comparé à la surveillance continue" },
      { "@type": "ListItem", position: 5, name: "Restauration attentionnelle par la nature (ART)", description: "50 minutes de marche en nature améliorent l'attention sélective de 20 % et réduisent la rumination de 16 % (Kaplan, University of Michigan)" },
      { "@type": "ListItem", position: 6, name: "Optimisation circadienne de l'attention", description: "Aligner les tâches cognitives complexes sur les pics attentionnels circadiens (9h-11h) identifiés par Russell Foster (Oxford)" },
      { "@type": "ListItem", position: 7, name: "Protocole de désintoxication dopaminergique", description: "Périodes structurées sans stimulations numériques pour restaurer la sensibilité du système de récompense, proposées par Anna Lembke (Stanford)" },
      { "@type": "ListItem", position: 8, name: "Entraînement de la flexibilité cognitive", description: "Exercices de task switching contrôlé pour développer le contrôle exécutif sur l'attention plutôt que de subir les distractions (Klingberg, Karolinska Institute)" }
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
            <Link to="/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">
              Accueil
            </Link> 
            <span className="mx-2 text-neutral-400" aria-hidden>›</span> 
            <Link to="/blog/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">
              Blog
            </Link> 
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
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
            <span>par Guesso</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <span>{meta.readingTime} de lecture</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <time dateTime={meta.datePublished}>
              {new Date(meta.datePublished).toLocaleDateString("fr-FR", { 
                day: "2-digit", 
                month: "2-digit", 
                year: "numeric" 
              })}
            </time>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <div className="flex gap-1">
              {meta.tags.map((tag, i) => (
                <span key={tag} className="text-indigo-600 dark:text-indigo-400">
                  #{tag}{i < meta.tags.length - 1 && " "}
                </span>
              ))}
            </div>
          </div>

          {/* Image de couverture */}
          {meta.cover && (
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
  src="/images/articles/attention-fragmentee-cover-1200x630.webp"
  alt={meta.title}
  width="1600"
  height="900" 
  className="w-full h-auto rounded-2xl"
  loading="eager"
  decoding="async"
/>
            </div>
          )}
        </header>

        <div className="mt-10">
          <p className="lead">
            Un cadre consulte ses emails toutes les 6 minutes. Un étudiant change d'application 300 fois par jour. Notre cerveau, conçu pour une attention soutenue, navigue désormais dans un océan de distractions. Cette fragmentation attentionnelle n'est pas qu'un inconfort moderne : elle restructure littéralement nos circuits neuronaux.
          </p>

          <h2>Attention fragmentée : définition neuroscientifique</h2>
          
          <p>
            L'attention fragmentée désigne l'incapacité à maintenir un focus cognitif soutenu sur une tâche unique, résultant d'interruptions fréquentes et de changements de tâches rapides. Adam Gazzaley (UCSF) la définit comme un "déficit d'interférence" où les processus descendants de contrôle attentionnel sont débordés par les stimuli concurrents.
          </p>

          <p>
            Contrairement aux théories populaires, ce phénomène ne résulte pas d'une "diminution" générale de l'attention, mais d'un détournement chronique des ressources attentionnelles vers des stimuli non-pertinents pour nos objectifs actuels.
          </p>

          <h3>Attention sélective vs attention fragmentée</h3>
          
          <p>
            Michael Posner (University of Oregon) distingue l'attention sélective normale - capacité adaptative à filtrer l'information - de l'attention fragmentée pathologique où ce filtrage devient dysfonctionnel face à la surcharge informationnelle moderne.
          </p>

          <h2>Architecture neuronale de l'attention : les découvertes récentes</h2>

          <h3>Les trois réseaux attentionnels de Posner</h3>
          
          <p>
            La recherche de Michael Posner et Steven Petersen a révolutionné notre compréhension en identifiant trois réseaux attentionnels distincts, chacun avec ses substrats neurologiques spécifiques :
          </p>

          <ul>
            <li><strong>Réseau d'alerte</strong> : locus coeruleus et cortex frontal, maintient la vigilance</li>
            <li><strong>Réseau d'orientation</strong> : cortex pariétal supérieur, dirige l'attention spatiale</li>
            <li><strong>Réseau exécutif</strong> : cortex cingulaire antérieur, résout les conflits attentionnels</li>
          </ul>

          <h3>Le réseau en mode par défaut et la distraction</h3>
          
          <p>
            Marcus Raichle (Washington University) a découvert que le réseau du mode par défaut (DMN) s'active quand l'attention dérive. Chez les individus à attention fragmentée, ce réseau montre une hyperconnectivité avec les régions responsables du traitement des distractions externes.
          </p>

          <h3>Neuroplasticité et adaptation aux distractions</h3>
          
          <p>
            Merzenich et Nahum (2013) ont documenté comment l'exposition chronique aux distractions numériques modifie la connectivité dans le cortex préfrontal dorsolatéral, réduisant progressivement notre capacité de contrôle top-down.
          </p>

          <h2>Le coût neurobiologique du multitasking</h2>

          <h3>Mythe du multitasking efficient</h3>
          
          <p>
            Earl Miller (MIT) a définitivement établi que le cerveau ne peut pas traiter simultanément deux tâches cognitives complexes. Ce que nous appelons "multitasking" est en réalité un "task switching" rapide qui génère un coût métabolique et temporel mesurable.
          </p>

          <h3>L'effet de résidu attentionnel</h3>
          
          <p>
            Sophie Leroy (University of Washington) a identifié "l'attention residual" : quand nous changeons de tâche, une partie de notre attention reste "collée" à la tâche précédente. Ce phénomène explique pourquoi les transitions fréquentes épuisent cognitivement.
          </p>

          <h3>Impact sur la mémoire de travail</h3>
          
          <p>
            Alan Baddeley's research shows that frequent interruptions saturate working memory capacity (limited to 7±2 items), creating a cognitive bottleneck that impairs complex reasoning and learning consolidation.
          </p>

          <h2>Distractions numériques : l'épidémie cognitive du 21ème siècle</h2>

          <h3>L'économie de l'attention et l'ingénierie persuasive</h3>
          
          <p>
            B.J. Fogg (Stanford) a documenté comment les interfaces numériques exploitent nos vulnérabilités attentionnelles par des "hook patterns" : notifications variables, récompenses intermittentes, et boucles de feedback conçues pour capter et maintenir l'attention.
          </p>

          <h3>Dopamine et addiction aux notifications</h3>
          
          <p>
            Robert Sapolsky (Stanford) explique comment les notifications activent le système dopaminergique par renforcement intermittent - le même mécanisme que les machines à sous. Chaque "ping" déclenche une anticipation dopaminergique qui interrompt le focus.
          </p>

          <h3>Phénomène de "continuous partial attention"</h3>
          
          <p>
            Linda Stone a défini ce état où nous maintenons une surveillance périphérique constante des flux d'information, empêchant l'entrée en "deep focus" nécessaire pour les tâches cognitives complexes.
          </p>

          <h2>Les 8 stratégies neuroscientifiques pour restaurer l'attention profonde</h2>

          <div className="not-prose my-8 bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
              Interventions validées par la recherche cognitive
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
              Ces stratégies exploitent les mécanismes naturels de plasticité attentionnelle pour restaurer la capacité de concentration profonde.
            </p>
          </div>

          <h3>1. Entraînement attentionnel par méditation (ATT)</h3>
          
          <p>
            Amishi Jha (University of Miami) a validé l'Attention Training Therapy : 12 minutes quotidiennes de méditation focalisée augmentent la capacité de working memory de 30% et réduisent l'esprit vagabond de 22% après 8 semaines.
          </p>

          <p>
            <strong>Application pratique :</strong> Pratiquez la méditation shamatha 12 minutes par jour : focus sur un objet unique (respiration), détection des distractions, redirection douce de l'attention. Progressez de 5 à 20 minutes sur 8 semaines.
          </p>

          <h3>2. Protocole de concentration progressive (DCP)</h3>
          
          <p>
            Cal Newport (Georgetown) a développé le "Deep Concentration Protocol" : augmentation graduelle des durées de focus sans distraction. L'entraînement débute à 10 minutes et progresse vers 90 minutes de concentration continue.
          </p>

          <p>
            <strong>Application pratique :</strong> Semaine 1 : 15 min sans interruption. Semaine 2 : 25 min. Semaine 4 : 45 min. Semaine 8 : 90 min. Utilisez un timer et résistez à toute distraction pendant la durée fixée.
          </p>

          <h3>3. Architecture cognitive de l'environnement</h3>
          
          <p>
            Richard Thaler's "choice architecture" appliquée à l'attention : modifier l'environnement pour réduire les décisions attentionnelles. Chaque stimulus visible consomme des ressources cognitives limitées.
          </p>

          <p>
            <strong>Application pratique :</strong> Créez un "bunker cognitif" : bureau sans distractions visuelles, téléphone dans une autre pièce, applications bloquées par des outils comme Cold Turkey, signalétique visuelle de votre état de concentration.
          </p>

          <h3>4. Batching temporel stratégique</h3>
          
          <p>
            Francesco Cirillo's research shows that grouping similar tasks minimizes the cognitive switching cost. Processing emails in dedicated blocks reduces cortisol by 23% compared to continuous monitoring.
          </p>

          <p>
            <strong>Application pratique :</strong> Consultez emails/messages à 3 créneaux fixes : 9h (10 min), 14h (10 min), 17h (15 min). En dehors, mode avion complet. Cette structure réduit l'anticipation anxieuse des notifications.
          </p>

          <h3>5. Restauration attentionnelle par la nature (ART)</h3>
          
          <p>
            Rachel et Stephen Kaplan (University of Michigan) ont validé la Théorie de la Restauration Attentionnelle : 50 minutes de marche en nature améliorent l'attention sélective de 20% et réduisent la rumination de 16%.
          </p>

          <p>
            <strong>Application pratique :</strong> Intégrez 20 minutes d'exposition naturelle quotidienne : marche en parc, observation d'arbres depuis une fenêtre, ou visionnage de documentaires nature si l'accès extérieur est limité.
          </p>

          <h3>6. Optimisation circadienne de l'attention</h3>
          
          <p>
            Russell Foster (Oxford) a identifié les variations circadiennes de l'attention : pic matinal entre 9h-11h, plateau après-midi 14h-16h, déclin après 17h. Aligner les tâches cognitives sur ces rythmes optimise la performance.
          </p>

          <p>
            <strong>Application pratique :</strong> Tâches complexes le matin (9h-11h), tâches administratives l'après-midi (14h-16h), activités créatives en fin de journée (17h-19h). Évitez le travail cognitif après 20h.
          </p>

          <h3>7. Protocole de désintoxication dopaminergique</h3>
          
          <p>
            Anna Lembke (Stanford) propose des "dopamine fasts" structurés pour restaurer la sensibilité du système de récompense surchargé par les stimulations numériques continues.
          </p>

          <p>
            <strong>Application pratique :</strong> 1 heure quotidienne sans stimulations artificielles (réseaux sociaux, news, divertissements). 1 jour complet par semaine. Remplacez par des activités "slow reward" : lecture, conversation, marche.
          </p>

          <h3>8. Entraînement de la flexibilité cognitive</h3>
          
          <p>
            Torkel Klingberg (Karolinska Institute) a développé des exercices spécifiques pour améliorer la "cognitive flexibility" : capacité à passer consciemment d'une tâche à l'autre quand nécessaire, versus subir des distractions involontaires.
          </p>

          <p>
            <strong>Application pratique :</strong> Pratiquez des exercices de "task switching" contrôlé : alternez volontairement entre 2 activités (lecture/calcul) toutes les 5 minutes pendant 20 minutes. Développe le contrôle exécutif sur l'attention.
          </p>

          <h2>Mesures objectives des améliorations attentionnelles</h2>

          <h3>Tests neuropsychologiques validés</h3>
          
          <p>
            Le Attention Network Test (ANT) de Posner mesure l'efficience des trois réseaux attentionnels. Le Sustained Attention to Response Test (SART) évalue la capacité de maintien attentionnel. Ces outils permettent de quantifier objectivement les progrès.
          </p>

          <h3>Biomarqueurs physiologiques</h3>
          
          <p>
            La variabilité de la fréquence cardiaque (HRV) corrèle avec le contrôle attentionnel. Les améliorations sont mesurables par des dispositifs portables après 4-6 semaines d'entraînement systématique.
          </p>

          <h2>Applications spécialisées par contexte</h2>

          <h3>Attention au travail : l'open space toxique</h3>
          
          <p>
            Gloria Mark (UC Irvine) a documenté qu'un employé en open space est interrompu toutes les 11 minutes et nécessite 25 minutes pour retrouver sa concentration initiale. L'architecture des espaces de travail influence directement la performance cognitive.
          </p>

          <h3>Attention académique : l'épidémie de distraction estudiantine</h3>
          
          <p>
            Larry Rosen (Cal State) montre que les étudiants perdent leur concentration après 19 secondes en moyenne lors d'études avec accès numérique. L'impact sur l'apprentissage profond et la mémorisation est dramatique.
          </p>

          <h3>Attention créative : le paradoxe du focus et de la défocalisation</h3>
          
          <p>
            John Kounios (Drexel University) révèle que la créativité nécessite une alternance entre focus concentré et défocalisation contrôlée. Les insights créatifs émergent souvent lors de "mind-wandering" dirigé, distinct de la distraction passive.
          </p>

          <h2>Perspectives futures : vers une "écologie attentionnelle"</h2>
          
          <p>
            Matthew Crawford (University of Virginia) prône le développement d'une "écologie attentionnelle" : environnements sociaux et technologiques conçus pour soutenir plutôt que fragmenter l'attention humaine.
          </p>

          <p>
            L'émergence de technologies "attention-aware" utilisant l'IA pour détecter et préserver les états de concentration profonde représente une voie prometteuse pour réconcilier technologie et focus cognitif.
          </p>

          <div className="not-prose my-8 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">Développez votre superpouvoir attentionnel</h3>
            <p className="mb-4">
              Utilisez notre Habit Tracker pour implémenter ces 8 stratégies et mesurer objectivement l'amélioration de votre concentration.
            </p>
            <Link 
              to="/habit-tracker" 
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Démarrer l'entraînement
            </Link>
          </div>

          <h2>Questions fréquentes</h2>
          
          <div className="not-prose space-y-4">
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                L'attention fragmentée est-elle réversible à l'âge adulte ?
              </summary>
              <p className="mt-2 text-sm">
                Oui, grâce à la neuroplasticité. Klingberg (2010) démontre que l'entraînement attentionnel modifie la connectivité préfrontale même chez les adultes. Les améliorations sont mesurables après 6-8 semaines de pratique structurée.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Combien de temps par jour faut-il s'entraîner ?
              </summary>
              <p className="mt-2 text-sm">
                15-20 minutes d'entraînement direct (méditation, exercices cognitifs) plus l'application des stratégies environnementales. L'effet cumulatif est plus important que la durée des sessions individuelles.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Les enfants sont-ils plus affectés par l'attention fragmentée ?
              </summary>
              <p className="mt-2 text-sm">
                Le cortex préfrontal, siège du contrôle attentionnel, ne mature qu'à 25 ans. Les enfants sont donc particulièrement vulnérables aux effets des distractions numériques sur le développement cognitif.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Peut-on complètement éliminer les distractions numériques ?
              </summary>
              <p className="mt-2 text-sm">
                L'objectif n'est pas l'élimination complète mais le contrôle conscient. Il s'agit de développer la capacité de choisir quand être connecté plutôt que de subir des interruptions constantes.
              </p>
            </details>
          </div>

          <div className="not-prose my-12 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Optimisez vos performances cognitives</h3>
            <p className="mb-4">
              Découvrez comment d'autres aspects des neurosciences peuvent améliorer votre quotidien et votre bien-être mental.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/blog/neuroplasticite-cerveau/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Neuroplasticité et apprentissage
              </Link>
              <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
              <Link to="/blog/neuro-dopamine-routine/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Optimiser la dopamine
              </Link>
              <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
              <Link to="/blog/rumination-mentale-pensees-obsessionnelles/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Maîtriser la rumination
              </Link>
              <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
              <Link to="/#newsletter" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Newsletter neurosciences
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}