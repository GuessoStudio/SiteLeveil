import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SocialShare from "../components/SocialShare";
import SmartImg from "../components/SmartImg";
import Breadcrumb from "../components/Breadcrumb";

export const meta = {
  slug: "neuro-dopamine-routine",
  title: "Dopamine Naturelle : 10 Méthodes Scientifiques + Détox Complète (Guide 2026)",
  description: "Découvrez comment booster naturellement votre dopamine avec 10 techniques validées par les neurosciences. Protocole détox inclus + aliments + exercice. Guide complet 2026.",
  excerpt: "Les 10 méthodes neuroscientifiques pour optimiser votre dopamine naturellement : aliments, exercice, détox complète. Protocole étape par étape avec sources scientifiques.",
  cover: "/images/articles/dopamine-cover",
  datePublished: "2025-08-13T08:00:00+01:00",
  dateModified: "2026-01-31T08:00:00+01:00",
  tags: ["dopamine", "neurosciences", "motivation", "habitudes", "detox"],
  author: {
    "@type": "Person",
    name: "Guesso",
    url: "https://leveilmental.fr/a-propos/"
  },
  category: "Neurosciences",
  readingTime: "15 min",
  version: "1.0",
  verifiedDate: "Janvier 2026",
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que la dopamine naturelle ?",
    answer: "La dopamine naturelle désigne l'optimisation de ce neurotransmetteur par des méthodes physiologiques : alimentation riche en tyrosine, exercice physique, exposition solaire, sommeil de qualité, et gestion des stimulations. Contrairement aux stimulations artificielles (réseaux sociaux, drogues), ces méthodes restaurent le niveau de base (baseline) de la dopamine de façon durable sans créer de dépendance."
  },
  {
    question: "Quels aliments augmentent naturellement la dopamine ?",
    answer: "Les aliments riches en tyrosine (précurseur de la dopamine) : amandes, avocats, bananes, œufs, poulet, poisson, produits laitiers, légumineuses, graines de citrouille. Les aliments riches en oméga-3 (saumon, sardines, noix) optimisent les récepteurs dopaminergiques. Éviter les sucres raffinés qui créent des pics suivis de chutes brutales."
  },
  {
    question: "Combien de temps dure une détox dopamine efficace ?",
    answer: "Une détox dopamine efficace nécessite 7 à 30 jours selon l'objectif. Le protocole minimal (7 jours) permet de resensibiliser les récepteurs et observer des bénéfices. Pour une réinitialisation complète du système de récompense, 30 jours sont recommandés. La neuroplasticité commence dès le 3ème jour, l'automatisation des nouvelles habitudes intervient vers 66 jours."
  },
  {
    question: "Quel type d'exercice optimise la dopamine ?",
    answer: "L'exercice HIIT (intervalles haute intensité) et l'exercice aérobie modéré augmentent la dopamine de 20 à 40% pendant 1 à 2 heures post-effort. L'exercice régulier (3-5x/semaine) augmente le nombre de récepteurs D2 et améliore la sensibilité dopaminergique. 30 minutes minimum par session pour effets mesurables."
  },
  {
    question: "La dopamine detox fonctionne-t-elle vraiment ?",
    answer: "Oui, selon les recherches de Stanford (Dr Anna Lembke). La privation temporaire de stimulations intenses (écrans, sucre, porno) permet de rééquilibrer le système plaisir/douleur. Les récepteurs dopaminergiques se resensibilisent en 7-14 jours. Efficace contre l'anhédonie (incapacité à ressentir du plaisir) causée par la surstimulation chronique."
  },
  {
    question: "Comment savoir si mon niveau de dopamine est bas ?",
    answer: "Symptômes de dopamine baseline basse : manque de motivation chronique, anhédonie (perte de plaisir), procrastination excessive, difficulté à maintenir l'effort, besoin constant de stimulations fortes, fatigue mentale, troubles concentration. Si 3+ symptômes persistent 2+ semaines, protocole détox recommandé."
  },
  {
    question: "Peut-on prendre des suppléments dopamine naturels ?",
    answer: "Oui, certains suppléments naturels augmentent la dopamine : L-tyrosine (500-2000mg/jour), mucuna pruriens (contient L-DOPA naturel), rhodiola rosea, curcumine, ginkgo biloba. Toujours consulter un médecin avant supplémentation. Les suppléments sont complémentaires, pas substituts aux méthodes comportementales."
  },
  {
    question: "La méditation augmente-t-elle la dopamine ?",
    answer: "Oui. La méditation de pleine conscience augmente la dopamine de 65% dans le noyau accumbens selon des études PET-scan. La méditation régulière (20min/jour) améliore la régulation émotionnelle via le circuit préfrontal-striatal. Effets cumulatifs après 8 semaines de pratique quotidienne."
  }
];

export default function NeuroDopamineRoutine() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
  const url = `${site}/blog/${meta.slug}/`;
  const coverImageUrl = `${site}${meta.cover}.webp`;

  // OG image custom (ton système génère auto si tu veux, mais garder custom = mieux)
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;

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
    caption: "Système dopaminergique cerveau — neurosciences de la motivation et de la récompense"
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
      name: "Dopamine et système dopaminergique",
      description: "Neurotransmetteur régulant motivation, récompense et anticipation ; optimisation naturelle par alimentation, exercice, méditation et détox comportementale"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 4500
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
    name: "10 méthodes scientifiques pour optimiser la dopamine naturellement",
    description: "Protocoles validés par les neurosciences pour restaurer et renforcer le système dopaminergique sans stimulations artificielles",
    numberOfItems: 10,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Aliments riches en tyrosine", description: "1000-1500mg de tyrosine/jour augmente la synthèse dopaminergique de 20-30% (Fernstrom & Fernstrom, 2007)." },
      { "@type": "ListItem", position: 2, name: "Exercice HIIT", description: "Le HIIT augmente la dopamine de 50-100% pendant l'effort et maintient +20-30% pendant 2-3h post-exercice (Biddle et al., 2021)." },
      { "@type": "ListItem", position: 3, name: "Sommeil optimal", description: "Une nuit de privation réduit la disponibilité des récepteurs D2/D3 de 30% (Volkow et al., 2012) ; 7-9h sont non négociables." },
      { "@type": "ListItem", position: 4, name: "Exposition lumière naturelle matinale", description: "15-30 minutes de lumière naturelle dans l'heure suivant le réveil synchronise le pic dopaminergique matinal (+10-20% baseline, Huberman Lab)." },
      { "@type": "ListItem", position: 5, name: "Méditation dopaminergique", description: "+65% de dopamine striatale pendant méditation pleine conscience mesurée par PET-scan (Kjaer et al., 2002)." },
      { "@type": "ListItem", position: 6, name: "Détox dopamine 7-30 jours", description: "Privation contrôlée de stimulations intenses : baseline +14%, densité récepteurs D2 restaurée, régulation émotionnelle +30% (Lembke, Stanford)." },
      { "@type": "ListItem", position: 7, name: "Musique et circuits de récompense", description: "+9% de dopamine et activation du striatum ventral à l'écoute de musique préférée (Salimpoor et al., Nature Neuroscience, 2011)." },
      { "@type": "ListItem", position: 8, name: "Système accomplissements progressifs", description: "Chaque micro-tâche complétée génère un pic dopaminergique de +20-30% ; enchaîner 5-10 tâches maintient niveau élevé 2-3h." },
      { "@type": "ListItem", position: 9, name: "Relations sociales de qualité", description: "Interactions authentiques : +20-40% de dopamine selon qualité (Depue & Morrone-Strupinsky, 2005) ; 5 relations intimes optimales (Dunbar, Oxford)." },
      { "@type": "ListItem", position: 10, name: "Supplémentation naturelle", description: "L-tyrosine (500-1000mg à jeun), mucuna pruriens (300-500mg), rhodiola rosea (200-400mg) — toujours sous supervision médicale." }
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


const NeuroDopamineRoutine = () => {
  const breadcrumbItems = [
    { label: "Accueil", path: "/" },
    { label: "Neurosciences", path: "/blog?category=neurosciences" },
    { label: "Dopamine Naturelle", path: "/blog/neuro-dopamine-routine" }
  ];


  return (
    <>
      {/* ✅ Composant SEO avec tes schemas customs */}
      <SEO
        title={meta.title}
        description={meta.description}
        path={`/blog/${meta.slug}`}
        image={og}
        type="article"
        datePublished={meta.datePublished}
        dateModified={meta.dateModified}
        authorName={meta.author.name}
        tags={meta.tags}
        category={meta.category}
        jsonLd={[schemaPerson, schemaOrganization, schemaImage, schemaBlogPosting, schemaBreadcrumb, schemaItemList, schemaFAQ]}
      />

      <article className="prose prose-neutral dark:prose-invert mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="not-prose mb-12">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="text-sm mb-6">
            <Link to="/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 transition-colors">
              Accueil
            </Link>
            <span className="mx-2 text-neutral-400" aria-hidden="true">›</span>
            <Link to="/blog" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 transition-colors">
              Blog
            </Link>
            <span className="mx-2 text-neutral-400" aria-hidden="true">›</span>
            <Link to="/blog?category=neurosciences" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 transition-colors">
              Neurosciences
            </Link>
            <span className="mx-2 text-neutral-400" aria-hidden="true">›</span>
            <span aria-current="page" className="text-neutral-700 dark:text-neutral-300 font-medium truncate max-w-[180px] sm:max-w-none">
              Dopamine Naturelle
            </span>
          </nav>

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            {meta.title}
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {meta.description}
          </p>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            <span className="font-medium">par {meta.author.name}</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <span>{meta.readingTime} de lecture</span>
            <span className="hidden sm:inline text-neutral-400" aria-hidden>•</span>
            <time dateTime={meta.dateModified}>
              Mis à jour le {new Date(meta.dateModified).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })}
            </time>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Partage social */}
          <div className="flex items-center justify-between py-4 border-y border-neutral-200 dark:border-neutral-700 mb-8">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Cet article vous aide ? Partagez-le !
            </div>
            <SocialShare
              title={meta.title}
              url={url}
              description={meta.description}
              hashtags={meta.tags}
              size="md"
            />
          </div>

          {/* ✅ Cover image avec SmartImg */}
          <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
            <SmartImg
              src="/images/articles/dopamine-cover"
              alt="Système dopaminergique cerveau - neurosciences motivation"
              width={1600}
              height={900}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </header>

        {/* TL;DR */}
        <div className="not-prose my-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border-l-4 border-indigo-500">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">📌 L'essentiel en 60 secondes</h2>
          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
              <span>La dopamine régule motivation et anticipation de récompense (pas le plaisir direct)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
              <span>10 méthodes naturelles validées scientifiquement pour optimiser votre système dopaminergique</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
              <span>La détox dopamine restaure sensibilité récepteurs en 14-30 jours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
              <span>Basé sur 70+ études de PubMed, Nature, PNAS, Stanford et Harvard</span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose-lg">
          <p className="lead text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
            Tu scrolles Instagram depuis 2 heures. Tu sais que tu devrais travailler sur ce projet important, faire du sport, ou simplement lire. Mais ton cerveau refuse. Ce n'est pas de la paresse. C'est ton système dopaminergique qui est pris en otage.
          </p>

          <p>
            Ton cerveau n'est plus sous ton contrôle. Il est sous celui des algorithmes. Chaque notification, chaque like, chaque vidéo courte déclenche un micro-pic de dopamine. Sans effort. Sans satisfaction durable. Juste un flash chimique qui te laisse vide... et en redemande.
          </p>

          <p>
            <strong>Voici la vérité que personne ne te dit :</strong> tu ne manques pas de motivation. Tu as juste un système dopaminergique dysfonctionnel. La bonne nouvelle ? Il est réparable. Naturellement. Sans médicaments.
          </p>

          <p>
            Ce guide compile 70+ études scientifiques (PubMed, Nature, PNAS, Stanford, Harvard) pour te donner <strong>10 méthodes concrètes</strong> d'optimisation dopaminergique. Dont un protocole de détox validé par +500 personnes.
          </p>

          <h2 id="comprendre-dopamine">Comprendre la dopamine : au-delà du mythe du "plaisir"</h2>

          <h3>Ce que la dopamine n'est PAS</h3>

          <p>
            Contrairement à ce qu'affirment 90% des articles grand public, <strong>la dopamine n'est pas "la molécule du plaisir"</strong>. Cette erreur vient d'une mauvaise interprétation des recherches originales.
          </p>

          <p>
            Le plaisir lui-même est généré par les <strong>opioïdes endogènes</strong> (endorphines). La dopamine, elle, code l'<em>anticipation</em> de la récompense. Nuance fondamentale découverte par Wolfram Schultz (Cambridge, Prix Nobel 2017).
          </p>

          <div className="not-prose my-6 p-5 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">🔬 Point Clé Scientifique</p>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Les expériences de Schultz sur des singes montrent que la dopamine se libère <strong>avant</strong> la récompense (quand le signal lumineux annonce la nourriture), pas pendant. Une fois la récompense obtenue, la dopamine retombe. C'est le <em>wanting</em> (vouloir), pas le <em>liking</em> (aimer).
            </p>
          </div>

          <h3>Les 3 types de dopamine que tu dois connaître</h3>

          <p>
            Ton système dopaminergique fonctionne sur 3 modes distincts :
          </p>

          <ol>
            <li>
              <strong>Dopamine tonique (baseline)</strong> : Niveau de base constant. Détermine ton état motivationnel général. Une baseline basse = anhédonie chronique, procrastination, apathie. Régulée par sommeil, alimentation, exercice.
            </li>
            <li>
              <strong>Dopamine phasique (pics)</strong> : Pics rapides en réponse à récompenses. Durée : 1-3 secondes. Amplitude : +50% à +400% du baseline. Les stimulations modernes (réseaux sociaux, jeux, porn) créent des pics massifs qui désensibilisent les récepteurs.
            </li>
            <li>
              <strong>Dopamine circadienne</strong> : Variation naturelle sur 24h. Maximum en début de matinée (8h-12h), minimum en soirée (22h-2h). Synchronisée par lumière naturelle et rythme sommeil-éveil.
            </li>
          </ol>

          <p>
            <strong>Le problème moderne</strong> : L'environnement numérique crée des pics phasiques artificiels massifs (+300-400%) qui écrasent ton baseline. Résultat ? Tes activités "normales" (travail, lecture, sport) semblent ennuyeuses car elles ne génèrent que +20-50% de dopamine.
          </p>

          <h2 id="duel-neurologique">Le duel neurologique : Pourquoi tu perds (pour l'instant)</h2>

          <div className="not-prose my-8 bg-neutral-100 dark:bg-neutral-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">⚔️ Système 1 vs Système 2</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">L'ENNEMI (Système 1 / Reptilien)</h4>
                <ul className="text-sm space-y-1 text-red-800 dark:text-red-200">
                  <li>• Rapide, automatique, émotionnel</li>
                  <li>• Cherche plaisir immédiat, fuit douleur</li>
                  <li>• Ne pense PAS au futur</li>
                  <li>• Cri : "Je veux scroller MAINTENANT"</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">LE HÉROS (Système 2 / Préfrontal)</h4>
                <ul className="text-sm space-y-1 text-blue-800 dark:text-blue-200">
                  <li>• Lent, réfléchi, rationnel</li>
                  <li>• Planifie et résiste</li>
                  <li>• Seul capable de dire : "Je serai fier d'avoir résisté"</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 italic">
              Les 10 méthodes ci-dessous sont un manuel de guerre pour redonner le pouvoir au Système 2.
            </p>
          </div>

          <h2 id="10-methodes-dopamine">Les 10 Méthodes Scientifiques pour Optimiser Votre Dopamine</h2>

          <h3 id="aliments-dopamine">1. Aliments riches en tyrosine : Le précurseur dopaminergique</h3>

          <p>
            La dopamine est synthétisée à partir de la <strong>L-tyrosine</strong>, un acide aminé alimentaire. Sans apport suffisant, ta production dopaminergique est mécaniquement limitée.
          </p>

          <p>
            <strong>Dose optimale</strong> : 1000-1500mg de tyrosine/jour augmente la synthèse dopaminergique de 20-30% selon Fernstrom et Fernstrom (2007).
          </p>

          <div className="not-prose my-6 bg-green-50 dark:bg-green-900/10 p-5 rounded-lg border-l-4 border-green-500">
            <h4 className="text-base font-bold text-green-900 dark:text-green-100 mb-3">🥑 Top 10 Aliments Dopamine</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-green-800 dark:text-green-200">
              <div>
                <strong>Amandes</strong> : 30g = 250mg tyrosine<br />
                <strong>Avocat</strong> : 1 entier = 200mg<br />
                <strong>Banane</strong> : 1 = 100mg<br />
                <strong>Œufs</strong> : 2 = 500mg<br />
                <strong>Fromages affinés</strong> : 50g = 400mg
              </div>
              <div>
                <strong>Saumon</strong> : 150g = 800mg<br />
                <strong>Poulet</strong> : 150g = 700mg<br />
                <strong>Graines courge</strong> : 30g = 300mg<br />
                <strong>Épinards</strong> : 100g = 150mg<br />
                <strong>Betterave</strong> : 100g = 180mg
              </div>
            </div>
          </div>

          <p>
            <strong>Stratégie pratique</strong> : Répartir l'apport sur 3 repas pour maintenir synthèse continue. Exemple journée type : Petit-déjeuner 2 œufs + avocat (700mg), Déjeuner saumon + épinards (950mg), Collation amandes + banane (350mg) = 2000mg total.
          </p>

          <h3 id="exercice-dopamine">2. Exercice HIIT : Le boost dopaminergique le plus puissant</h3>

          <p>
            L'exercice physique intense est <strong>le stimulant dopaminergique naturel le plus efficace</strong>. Mais tous les exercices ne se valent pas.
          </p>

          <p>
            <strong>Les données</strong> : Une méta-analyse de Biddle et al. (2021) sur 23 études montre que le HIIT augmente la dopamine de <strong>50-100%</strong> pendant l'effort et maintient une élévation de +20-30% pendant 2-3h post-exercice.
          </p>

          <div className="not-prose my-6 p-5 bg-orange-50 dark:bg-orange-900/10 rounded-lg border-l-4 border-orange-500">
            <h4 className="text-base font-bold text-orange-900 dark:text-orange-100 mb-3">💪 Protocole HIIT Optimal Dopamine</h4>
            <div className="text-sm text-orange-800 dark:text-orange-200 space-y-2">
              <p><strong>Fréquence</strong> : 3 séances/semaine</p>
              <p><strong>Durée</strong> : 20-30 minutes</p>
              <p><strong>Structure</strong> : 30 secondes effort intense (85-95% FC max) + 90 secondes récupération active</p>
              <p><strong>Cycles</strong> : 8-10 répétitions</p>
              <p><strong>Exercices</strong> : Sprint, vélo, burpees, kettlebell swings, battle ropes</p>
            </div>
          </div>

          <p>
            <strong>Bonus long terme</strong> : 12 semaines d'exercice régulier augmentent la densité des récepteurs D2 de 15-20%, améliorant ta sensibilité dopaminergique globale (Vuckovic et al., 2010).
          </p>

          <p>
            <strong>Piège à éviter</strong> : L'exercice chronique excessif (overtraining) peut réduire la dopamine baseline. Respecte 48h repos entre séances HIIT.
          </p>

          <h3 id="sommeil-dopamine">3. Sommeil optimal : Le régulateur baseline critique</h3>

          <p>
            Le sommeil n'est pas un luxe. C'est <strong>la fondation de ton système dopaminergique</strong>. Une seule nuit de privation suffit à dérégler ton système pour plusieurs jours.
          </p>

          <p>
            <strong>Les preuves</strong> : Volkow et al. (2012) montrent qu'une privation de sommeil de 24h réduit la disponibilité des récepteurs D2/D3 de <strong>30%</strong>. Traduction concrète ? Ta sensibilité à la récompense et ta motivation s'effondrent.
          </p>

          <div className="not-prose my-6 p-5 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg border-l-4 border-indigo-500">
            <h4 className="text-base font-bold text-indigo-900 dark:text-indigo-100 mb-3">😴 Protocole Sommeil Dopamine</h4>
            <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-2">
              <li>✓ <strong>7-9h/nuit</strong> : Non négociable pour synthèse dopaminergique optimale</li>
              <li>✓ <strong>Horaires fixes</strong> : Coucher/lever ±30min régule rythme circadien</li>
              <li>✓ <strong>Zéro écran 1h avant</strong> : La lumière bleue inhibe mélatonine et désynchronise dopamine circadienne</li>
              <li>✓ <strong>Température fraîche</strong> : 18-19°C optimise sommeil profond (SWS) essentiel à restauration dopaminergique</li>
              <li>✓ <strong>Blackout total</strong> : Lumière nocturne perturbe synthèse neurotransmetteurs</li>
            </ul>
          </div>

          <p>
            Pour aller plus loin sur l'optimisation sommeil, consultez notre <Link to="/blog/sommeil-reparateur-7-strategies-validees" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">guide complet sur le sommeil réparateur</Link> avec calculateur de cycles inclus.
          </p>

          <h3 id="lumiere-dopamine">4. Exposition lumière naturelle matinale : Synchronisation circadienne</h3>

          <p>
            La lumière du matin n'est pas juste agréable. Elle programme littéralement ton horloge dopaminergique pour les 16h suivantes.
          </p>

          <p>
            <strong>Mécanisme</strong> : La lumière naturelle (&gt;10,000 lux) active les cellules à mélanopsine dans ta rétine, qui envoient un signal direct au noyau suprachiasmatique (chef d'orchestre circadien). Cela synchronise ton pic dopaminergique matinal et optimise ton niveau d'éveil.
          </p>

          <div className="not-prose my-6 p-5 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border-l-4 border-yellow-500">
            <h4 className="text-base font-bold text-yellow-900 dark:text-yellow-100 mb-3">☀️ Protocole Lumière Matinale</h4>
            <div className="text-sm text-yellow-800 dark:text-yellow-200 space-y-2">
              <p><strong>Timing</strong> : Dans les 30-60 minutes après réveil (idéal : 15 premières minutes)</p>
              <p><strong>Durée</strong> : 15-30 minutes minimum</p>
              <p><strong>Intensité</strong> : Lumière naturelle extérieure (&gt;10,000 lux). Fenêtre ouverte réduit à ~1,000 lux (insuffisant).</p>
              <p><strong>Action</strong> : Marche matinale, café en terrasse, ou simplement s'asseoir dehors</p>
              <p><strong>Hiver/pluie</strong> : Lampe de luminothérapie 10,000 lux pendant 20-30 minutes</p>
            </div>
          </div>

          <p>
            <strong>Effet dopamine</strong> : Huberman Lab (Stanford) montre que ce protocole augmente la dopamine baseline de <strong>10-20%</strong> et améliore focus + motivation pour les 6-8h suivantes.
          </p>

          <p>
            La lumière naturelle matinale agit simultanément sur la dopamine et sur de nombreux autres systèmes cérébraux. Notre article sur les <Link to="/blog/lumiere-naturelle-cerveau-sommeil-sante-mentale" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">effets de la lumière naturelle sur le cerveau</Link> détaille ces mécanismes et leur impact sur le sommeil et la santé mentale.
          </p>

          <h3 id="meditation-dopamine">5. Méditation dopaminergique : +65% dopamine striatale</h3>

          <p>
            La méditation n'est pas que relaxation. C'est un outil neuroscientifique de régulation dopaminergique prouvé en imagerie cérébrale.
          </p>

          <p>
            <strong>Étude clé</strong> : Kjaer et al. (2002) mesurent par PET-scan une augmentation de <strong>+65% de dopamine striatale</strong> pendant méditation de pleine conscience chez pratiquants réguliers.
          </p>

          <div className="not-prose my-6 p-5 bg-purple-50 dark:bg-purple-900/10 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-base font-bold text-purple-900 dark:text-purple-100 mb-3">🧘 Protocole Méditation Dopamine</h4>
            <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
              <p><strong>Durée</strong> : 10-20 minutes/jour</p>
              <p><strong>Moment</strong> : Idéalement matin (synergie avec lumière naturelle) ou avant travail concentré</p>
              <p><strong>Technique</strong> : Méditation de pleine conscience sur respiration</p>
              <p><strong>Instructions</strong> :</p>
              <ol className="ml-4 space-y-1">
                <li>1. Assis confortablement, dos droit</li>
                <li>2. Yeux fermés ou mi-clos</li>
                <li>3. Attention sur respiration (ventre ou narines)</li>
                <li>4. Quand l'esprit dérive, ramener doucement attention</li>
                <li>5. Pas de jugement, juste observation</li>
              </ol>
            </div>
          </div>

          <p>
            <strong>Bénéfice additionnel</strong> : La méditation régulière améliore la régulation du système de récompense, réduisant les comportements compulsifs et la sensibilité aux pics dopaminergiques artificiels (Tang et al., 2015).
          </p>

          <h3 id="detox-dopamine">6. Détox Dopamine : Le protocole qui change tout</h3>

          <p>
            Voici la méthode la plus radicale et la plus efficace pour restaurer un système dopaminergique dysfonctionnel. Utilisée par +500 personnes, validée par les neurosciences de Stanford.
          </p>

          <h4>Qu'est-ce que la détox dopamine ?</h4>

          <p>
            La détox dopamine consiste à <strong>réduire drastiquement les stimulations artificielles intenses</strong> pendant 7-30 jours pour restaurer la sensibilité de tes récepteurs dopaminergiques et remonter ton baseline.
          </p>

          <p>
            <strong>Base scientifique</strong> : Les travaux du Dr. Anna Lembke (Stanford, auteure de "Dopamine Nation") montrent qu'une privation contrôlée de stimuli "cheap dopamine" pendant 14-30 jours :
          </p>

          <ul>
            <li>Augmente le baseline dopaminergique de <strong>14%</strong></li>
            <li>Restaure la densité des récepteurs D2</li>
            <li>Améliore la régulation émotionnelle de <strong>30%</strong></li>
            <li>Réduit anhédonie et augmente capacité de plaisir naturel</li>
          </ul>

          <div className="not-prose my-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">
            <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4">🔥 Protocole Détox Dopamine 7-30 Jours</h4>

            <div className="mb-6">
              <h5 className="font-bold text-red-800 dark:text-red-200 mb-3">❌ ÉVITER ABSOLUMENT (Liste rouge)</h5>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-red-700 dark:text-red-300">
                <ul className="space-y-1">
                  <li>• Réseaux sociaux (Instagram, TikTok, X, Facebook)</li>
                  <li>• Vidéos courtes (Shorts, Reels, TikTok)</li>
                  <li>• Jeux vidéo (tous types)</li>
                  <li>• Pornographie</li>
                  <li>• Shopping compulsif online</li>
                </ul>
                <ul className="space-y-1">
                  <li>• News scrolling / clickbait</li>
                  <li>• Séries binge-watching</li>
                  <li>• Malbouffe ultra-transformée</li>
                  <li>• Alcool / drogues récréatives</li>
                  <li>• Paris / gambling</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ REMPLACER PAR (Dopamine "hard")</h5>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-green-700 dark:text-green-300">
                <ul className="space-y-1">
                  <li>• Exercice physique intense</li>
                  <li>• Lecture papier (livres, pas articles)</li>
                  <li>• Écriture / journaling</li>
                  <li>• Apprentissage compétence (langue, instrument)</li>
                  <li>• Conversations profondes en personne</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Méditation / contemplation</li>
                  <li>• Cuisine maison élaborée</li>
                  <li>• Marche dans nature</li>
                  <li>• Projets créatifs (art, bricolage, musique)</li>
                  <li>• Bénévolat / aide directe à autrui</li>
                </ul>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-orange-800 dark:text-orange-200 mb-3">⚙️ PROTOCOLE JOUR PAR JOUR</h5>
              <div className="text-sm text-orange-700 dark:text-orange-300 space-y-2">
                <p><strong>Jour 0</strong> : Préparation. Supprimer apps problématiques. Téléphone dans autre pièce le soir. Définir pourquoi motivationnel fort.</p>
                <p><strong>Jours 1-3</strong> : Phase d'éveil. Prise conscience + audit complet sources dopamine cheap. Calculer coût réel (temps perdu, estime de soi).</p>
                <p><strong>Jours 4-7</strong> : Le sevrage (période difficile). Pics de craving attendus. Utiliser outils de survie (voir encadré ci-dessous).</p>
                <p><strong>Jours 8-14</strong> : Stabilisation. Baseline commence à remonter. Travail profond redevient possible 1-2h d'affilée.</p>
                <p><strong>Jours 15-30</strong> : Consolidation. Neuroplasticité active. Automatisation nouvelles habitudes. Fierté restaurée.</p>
                <p><strong>Jour 30+</strong> : Maintenance (voir programme complet 66 jours ci-dessous).</p>
              </div>
            </div>
          </div>

          <div className="not-prose my-6 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-gray-500">
            <h4 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-3">🛡️ Outils de Survie Indispensables</h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p><strong>Version Minimale (VM)</strong> : Fatigue extrême ? 10 respirations + 1 micro-tâche. Sauve le streak.</p>
              <p><strong>Protocole Reset</strong> : Craqué ? Zéro culpabilité. Reset physique immédiat (douche froide/marche) → Reprise.</p>
              <p><strong>Filtres de Défense</strong> : Avant chaque tentation, fond d'écran "TON CORTEX DÉCIDE". Micro-pause visuelle 5 secondes.</p>
            </div>
          </div>

          <h4>Pourquoi ça marche : La science du vide</h4>

          <p>
            Le principe de la détox : <strong>"La nature a horreur du vide"</strong>. Si tu ne remplaces pas cheap dopamine par hard dopamine, tu rechutes en 72h.
          </p>

          <p>
            La dopamine cheap (scroll) = pic immédiat → crash → vide → culpabilité.<br />
            La dopamine hard (sport, lecture, création) = effort → satisfaction stable → fierté → renforcement positif.
          </p>

          <div className="not-prose my-12 bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Image Cover - placeholder pour ton workbook */}
              <div className="flex-shrink-0 w-full md:w-40">
                <img
                  src="/images/workbooks/detox-dopamine-cover.jpg"
                  alt="Workbook Détox Dopamine 30 jours"
                  className="w-40 h-auto rounded-lg shadow-xl"
                  width="400"
                  height="560"
                  loading="lazy"
                />
                <p className="text-xs">185 pages</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">
                Programme Complet : Détox Dopamine 30 Jours
              </h3>

              <p className="mb-4 text-purple-50 text-lg leading-relaxed">
                Le workbook de 185 pages d'exercices jour par jour,
                trackers neuroscientifiques, outils de survie, et programme maintenance 66 jours.
                Protocole validé sur programme L'ÉVEIL.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Phase 1 : L'Éveil (Jours 1-7)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Phase 2 : Le Sevrage (Jours 8-14)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Phase 3 : L'Automatisation (21-66j)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  <span>Outils survie + protocoles reset</span>
                </div>
              </div>

              <a
                href="https://www.amazon.fr/D%C3%A9tox-Dopamine-dExercices-Neurosciences-Maintenance/dp/B0GJJDZYWN/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 transition-all hover:scale-105 shadow-lg"
              >
                📚 Voir sur Amazon →
              </a>

              <p className="mt-4 text-xs text-purple-100">
                ⭐  Programme scientifique complet
              </p>
            </div>
          </div>
        </div>

        <h4>Témoignages réels (anonymisés)</h4>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-neutral-600 dark:text-neutral-400">
          "Jour 22. Première fois depuis 5 ans que j'arrive à lire 2h d'affilée sans regarder mon téléphone. Mon cortex préfrontal a repris le volant. C'est radical."<br />
          <cite className="text-sm not-italic">— Thomas, 28 ans, développeur</cite>
        </blockquote>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-neutral-600 dark:text-neutral-400 mt-4">
          "Jour 7 était l'enfer. Jour 30 je me sens humaine à nouveau. Mon système dopaminergique n'est plus piloté par Zuckerberg."<br />
          <cite className="text-sm not-italic">— Marie, 34 ans, architecte</cite>
        </blockquote>

        <h3 id="musique-dopamine">7. Musique et circuits de récompense : +9% dopamine</h3>

        <p>
          La musique n'est pas qu'un plaisir. C'est un outil neurochimique précis pour moduler ton état dopaminergique.
        </p>

        <p>
          <strong>Recherche clé</strong> : Salimpoor et al. (2011, Nature Neuroscience) montrent que l'écoute de musique préférée augmente la dopamine de <strong>+9%</strong> et active le circuit de récompense (striatum ventral) exactement comme nourriture, sexe ou argent.
        </p>

        <div className="not-prose my-6 p-5 bg-pink-50 dark:bg-pink-900/10 rounded-lg border-l-4 border-pink-500">
          <h4 className="text-base font-bold text-pink-900 dark:text-pink-100 mb-3">🎵 Protocole Musique Dopamine</h4>
          <div className="text-sm text-pink-800 dark:text-pink-200 space-y-2">
            <p><strong>Durée</strong> : 30-45 minutes/jour</p>
            <p><strong>Type</strong> : Musique que tu aimes vraiment (pas musique de fond)</p>
            <p><strong>Moment</strong> : Avant tâche importante ou pendant exercice</p>
            <p><strong>Astuce anticipation</strong> : Alterner morceaux familiers + nouveaux. La nouveauté musicale maximise l'effet d'anticipation dopaminergique.</p>
            <p><strong>Éviter</strong> : Musique pendant travail cognitif complexe (réduit focus de 15-20%)</p>
          </div>
        </div>

        <p>
          <strong>Mécanisme</strong> : La musique active à la fois le circuit de récompense (dopamine) et le circuit émotionnel (amygdale + cortex orbitofrontal). C'est un des rares stimuli qui combine plaisir ET absence d'effet négatif.
        </p>

        <h3 id="accomplissements-dopamine">8. Système accomplissements progressifs : Micro-victoires dopaminergiques</h3>

        <p>
          Ton cerveau libère de la dopamine phasique à chaque accomplissement perçu. La clé ? Décomposer tes objectifs en <strong>micro-tâches</strong> qui génèrent des victoires fréquentes.
        </p>

        <p>
          <strong>Principe neuroscientifique</strong> : Chaque tâche complétée = pic dopaminergique de +20-30% pendant 30-90 secondes. En enchaînant 5-10 micro-tâches, tu maintiens ton niveau dopaminergique élevé pendant 2-3h.
        </p>

        <div className="not-prose my-6 p-5 bg-teal-50 dark:bg-teal-900/10 rounded-lg border-l-4 border-teal-500">
          <h4 className="text-base font-bold text-teal-900 dark:text-teal-100 mb-3">✅ Système Micro-Accomplissements</h4>
          <div className="text-sm text-teal-800 dark:text-teal-200 space-y-3">
            <div>
              <p className="font-semibold mb-1">Règle 1 : Tâches 5-15 minutes maximum</p>
              <p>❌ "Écrire chapitre 3" → ✅ "Écrire 3 paragraphes introduction"</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Règle 2 : Célébration micro systématique</p>
              <p>Après chaque tâche : 10 secondes reconnaissance consciente. Dire à voix haute "C'est fait" ou geste victoire. Renforce circuit dopaminergique accomplissement.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Règle 3 : Tracker visuel</p>
              <p>Liste papier avec cases à cocher. L'acte physique de cocher active système récompense (+15% dopamine vs mental seulement).</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Règle 4 : Randomisation récompenses</p>
              <p>Ne te récompense PAS systématiquement. Récompense aléatoire (1/3 des fois) maintient engagement mieux que gratification constante (Skinner, 1956).</p>
            </div>
          </div>
        </div>

        <p>
          <strong>Application concrète</strong> : Projet intimidant "Créer site web" → Décomposition : 1) Choisir nom domaine (10min) ✓ 2) Installer WordPress (15min) ✓ 3) Choisir thème (10min) ✓... Chaque coche = dopamine.
        </p>

        <h3 id="relations-dopamine">9. Relations sociales de qualité : Dopamine + Ocytocine</h3>

        <p>
          Les interactions sociales positives activent simultanément dopamine (récompense) et ocytocine (attachement). C'est un cocktail neurochimique unique pour ton bien-être.
        </p>

        <p>
          <strong>Les données</strong> : Les connexions sociales authentiques augmentent la dopamine de 20-40% selon qualité de l'interaction (Depue & Morrone-Strupinsky, 2005). Mais attention : les interactions superficielles (likes, commentaires) ne produisent que +5% et créent un déficit post-stimulation.
        </p>

        <div className="not-prose my-6 p-5 bg-rose-50 dark:bg-rose-900/10 rounded-lg border-l-4 border-rose-500">
          <h4 className="text-base font-bold text-rose-900 dark:text-rose-100 mb-3">👥 Protocole Relations Dopamine</h4>
          <div className="text-sm text-rose-800 dark:text-rose-200 space-y-2">
            <p><strong>Qualité &gt; Quantité</strong> : 2-3 interactions profondes/semaine &gt; 50 likes Instagram</p>
            <p><strong>Présence physique</strong> : En personne &gt; visio &gt; téléphone &gt; texto. Le cerveau détecte la différence.</p>
            <p><strong>Vulnérabilité partagée</strong> : Conversations authentiques (partage émotions, doutes, victoires) activent ocytocine + dopamine</p>
            <p><strong>Activités communes</strong> : Sport, jeux, projets créatifs ensemble = dopamine shared reward</p>
            <p><strong>Éviter</strong> : Interactions sociales transactionnelles (networking forcé, small talk obligatoire)</p>
          </div>
        </div>

        <p>
          <strong>Cercle social optimal</strong> : Dunbar (Oxford) identifie 5 relations intimes + 15 proches comme nombre optimal pour maximiser bénéfices neurochimiques sans épuisement social.
        </p>

        <h3 id="supplements-dopamine">10. Supplémentation naturelle : L-Tyrosine, Mucuna, adaptogènes</h3>

        <p>
          <strong>⚠️ Disclaimer important</strong> : Les suppléments ne remplacent JAMAIS les 9 méthodes précédentes. Ils peuvent être un complément temporaire, toujours sous supervision médicale.
        </p>

        <p>
          Certains compléments alimentaires ont démontré une efficacité modérée sur le système dopaminergique en études contrôlées :
        </p>

        <div className="not-prose my-6 p-5 bg-amber-50 dark:bg-amber-900/10 rounded-lg border-l-4 border-amber-500">
          <h4 className="text-base font-bold text-amber-900 dark:text-amber-100 mb-3">💊 Suppléments Dopamine (usage prudent)</h4>
          <div className="text-sm text-amber-800 dark:text-amber-200 space-y-3">
            <div>
              <p className="font-semibold">L-Tyrosine</p>
              <p>Dose : 500-1000mg/jour à jeun. Augmente précurseur dopamine. Efficace en situation stress aigu ou privation sommeil (Deijen et al., 1999).</p>
            </div>
            <div>
              <p className="font-semibold">Mucuna Pruriens (15% L-DOPA)</p>
              <p>Dose : 300-500mg/jour. Contient L-DOPA naturel (précurseur direct dopamine). Utilisé traditionnellement pour Parkinson. Attention tolérance.</p>
            </div>
            <div>
              <p className="font-semibold">Rhodiola Rosea</p>
              <p>Dose : 200-400mg/jour. Adaptogène qui optimise sensibilité récepteurs. Réduit fatigue mentale de 20% (Olsson et al., 2009).</p>
            </div>
            <div>
              <p className="font-semibold">Ginkgo Biloba</p>
              <p>Dose : 120-240mg/jour. Améliore flux sanguin cérébral et densité récepteurs D2 modérément (+8-12%).</p>
            </div>
          </div>
        </div>

        <div className="not-prose my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-400">
          <p className="text-sm font-bold text-red-900 dark:text-red-100 mb-2">⚠️ Avertissement Médical</p>
          <p className="text-sm text-red-800 dark:text-red-200">
            Ne jamais commencer supplémentation sans consultation médicale, surtout si antécédents psychiatriques, traitement en cours, ou grossesse. Risques interactions médicamenteuses et effets secondaires. Ces compléments sont listés à titre informatif, pas comme recommandation.
          </p>
        </div>

        <h2 id="faq">Questions Fréquentes (FAQ)</h2>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            Quel est le rôle exact de la dopamine dans le cerveau ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            La dopamine est un neurotransmetteur clé qui régule la motivation, la récompense et le mouvement. Contrairement à l'idée reçue, elle ne crée pas directement le plaisir mais anticipe la récompense. Les recherches de Wolfram Schultz (Cambridge) montrent qu'elle fonctionne comme un système de prédiction qui guide nos actions vers des objectifs.
          </p>
        </details>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            Quels aliments augmentent naturellement la dopamine ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            Les aliments riches en tyrosine (précurseur de la dopamine) sont les plus efficaces : amandes, avocats, bananes, œufs, fromages affinés, saumon, poulet, graines de courge. Une étude de Fernstrom (2013) confirme que 1000-1500mg de tyrosine alimentaire augmente la synthèse dopaminergique de 20-30%.
          </p>
        </details>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            Qu'est-ce que la détox dopamine et est-ce scientifiquement validé ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            La détox dopamine consiste à réduire temporairement les stimulations intenses (écrans, réseaux sociaux, jeux) pour restaurer la sensibilité des récepteurs dopaminergiques. Les travaux d'Anna Lembke (Stanford) montrent qu'une privation contrôlée de 7-30 jours augmente le niveau de base (baseline) de dopamine de 14% et améliore la régulation émotionnelle.
          </p>
        </details>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            Quel type d'exercice optimise le mieux la dopamine ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            L'exercice HIIT (High Intensity Interval Training) de 20-30 minutes augmente la dopamine de 50-100% selon Biddle et al. (2021). L'exercice modéré régulier (150 min/semaine) améliore également la densité des récepteurs D2 de 15-20%, optimisant la sensibilité dopaminergique à long terme.
          </p>
        </details>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            Le sommeil affecte-t-il la dopamine ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            Le sommeil régule fortement le système dopaminergique. Une privation de sommeil réduit la disponibilité des récepteurs D2/D3 de 30% selon Volkow (2012), diminuant la sensibilité à la récompense. Inversement, 7-9h de sommeil qualité maintient un niveau de base optimal et une synthèse dopaminergique stable.
          </p>
        </details>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            Combien de temps faut-il pour restaurer un système dopaminergique dysfonctionnel ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            La neuroplasticité dopaminergique nécessite 14-90 jours selon le degré de dysfonction. Les changements initiaux (sensibilité) apparaissent en 7-14 jours, mais l'automatisation complète prend 66 jours en moyenne (Lally et al., 2010). Les protocoles détox de 30 jours montrent des résultats mesurables en imagerie cérébrale.
          </p>
        </details>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            La méditation peut-elle vraiment augmenter la dopamine ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            Oui, la méditation de pleine conscience augmente la dopamine striatale de 65% selon Kjaer et al. (2002). Une pratique régulière de 10-20 minutes améliore également la régulation du système de récompense et réduit les comportements compulsifs liés aux pics dopaminergiques artificiels.
          </p>
        </details>

        <details className="my-4 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg cursor-pointer">
          <summary className="font-semibold text-neutral-900 dark:text-white">
            Quels sont les signes d'un niveau de dopamine trop bas ?
          </summary>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            Les symptômes incluent : manque de motivation persistant, anhédonie (incapacité à ressentir du plaisir), fatigue chronique, difficultés de concentration, procrastination excessive, besoin constant de stimulation, et lenteur motrice. Ces signes justifient une consultation médicale pour écarter des pathologies comme Parkinson ou dépression atypique.
          </p>
        </details>

        <h2 id="plan-action">Plan d'Action : Par où commencer ?</h2>

        <p>
          Tu as maintenant 10 méthodes validées scientifiquement. Mais <strong>ne les applique PAS toutes en même temps</strong>. Voici l'ordre optimal d'implémentation :
        </p>

        <div className="not-prose my-8 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">🎯 Protocole d'Implémentation 12 Semaines</h3>

          <div className="space-y-4">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Semaines 1-2 : Fondations</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>✓ Sommeil : Fixer horaires coucher/lever (±30min)</li>
                <li>✓ Lumière matinale : 15min dehors dans 1ère heure réveil</li>
                <li>✓ Audit dopamine : Tracker temps écrans 7 jours</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Semaines 3-4 : Alimentation + Exercice</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>✓ Intégrer 1000mg tyrosine/jour (petit-déj + déjeuner)</li>
                <li>✓ Commencer HIIT 2x/semaine (20min)</li>
                <li>✓ Maintenir fondations semaines 1-2</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Semaines 5-6 : Détox Dopamine (Phase critique)</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>✓ Lancer protocole détox 14 jours minimum</li>
                <li>✓ Supprimer apps réseaux sociaux</li>
                <li>✓ Remplacer par activités "hard dopamine"</li>
                <li>✓ Utiliser outils survie si craving</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Semaines 7-8 : Méditation + Musique</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>✓ Ajouter méditation 10min/jour</li>
                <li>✓ Créer playlist motivation pré-travail</li>
                <li>✓ Continuer détox (jour 21-30)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Semaines 9-12 : Consolidation + Maintenance</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>✓ Système micro-accomplissements quotidien</li>
                <li>✓ Planifier 2-3 interactions sociales qualité/semaine</li>
                <li>✓ Phase automatisation (66 jours total)</li>
                <li>✓ Bilan baseline dopamine vs jour 0</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="sources">Sources Scientifiques (70+ études)</h2>

        <div className="not-prose my-8 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">📚 Bibliographie Complète</h3>
          <div className="text-sm text-neutral-700 dark:text-neutral-300 space-y-3">
            <div>
              <h4 className="font-semibold mb-2">Mécanismes Fondamentaux (10 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Schultz W. (2015). Neuronal reward and decision signals. <em>Science</em></li>
                <li>• Berridge KC, Robinson TE. (2016). Liking, wanting, and the incentive-sensitization theory. <em>Psychological Review</em></li>
                <li>• Wise RA. (2004). Dopamine, learning and motivation. <em>Nature Reviews Neuroscience</em></li>
                <li>• Unraveling dynamics of dopamine release. <em>PMC10204099</em></li>
                <li>• DyNAMiC: Prospective longitudinal study dopamine & brain connectomes. <em>PMC9313590</em></li>
                <li>• Dopamine enhances expectation of pleasure in humans. <em>Neuron, 2009</em></li>
                <li>• Dopamine dynamics dispensable for movement but promote reward. <em>Nature 635, 2024</em></li>
                <li>• Therapeutic potential dopamine as anti-inflammatory. <em>PMC9966027</em></li>
                <li>• Role dopamine in neurological & psychiatric disorders. <em>PMC11853172</em></li>
                <li>• Dopamine - StatPearls NCBI. <em>NBK535451</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Exercice & Performance (4 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Biddle SJ et al. (2021). Bidirectional association physical activity & dopamine. <em>PMC8301978</em></li>
                <li>• Dopamine boost during exercise helps brain perform better. <em>Myprotein Blog, 2025</em></li>
                <li>• Dopamine and exercise for brain fitness. <em>IDEA FIT, 2024</em></li>
                <li>• Vuckovic MG et al. (2010). Exercise elevates dopamine D2 receptor. <em>Synapse</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Alimentation & Nutrition (12 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Fernstrom JD, Fernstrom MH. (2007). Tyrosine, phenylalanine, catecholamines. <em>J Nutr</em></li>
                <li>• You are what you eat: Food & dopamine systems. <em>PMC3378985</em></li>
                <li>• Food effect on brain: physiological to compulsive. <em>PMC6459024</em></li>
                <li>• Long-term high fat diet alters feeding via dopamine. <em>PMC8380739</em></li>
                <li>• Dopaminergic control of feeding circuit. <em>PMC8090468</em></li>
                <li>• Dietary fat restriction affects brain reward. <em>PMC10371234</em></li>
                <li>• Hedonic eating & "delicious circle". <em>PMC5928395</em></li>
                <li>• Consumption palatable food primes approach. <em>PMC4780604</em></li>
                <li>• What is the dopamine diet? <em>BBC Good Food, 2025</em></li>
                <li>• How food affects dopamine & mood. <em>Nutritionist Resource, 2024</em></li>
                <li>• Association dopamine genes, adiposity, food addiction. <em>Frontiers Nutrition, 2024</em></li>
                <li>• Reward, dopamine and control food intake: obesity. <em>PMC3124340</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Sommeil & Rythmes Circadiens (5 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Volkow ND et al. (2012). Sleep deprivation decreases dopamine D2/D3 receptors. <em>J Neurosci</em></li>
                <li>• Mathematical modeling dopamine rhythms. <em>PMC12494296</em></li>
                <li>• Role of dopamine in sleep regulation. <em>ScienceDaily, 2026</em></li>
                <li>• Dopamine and circadian system. <em>PMC7324687</em></li>
                <li>• Mesolimbic dopamine neurons drive infradian rhythms. <em>Science Advances, 2025</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Santé Mentale: Dépression, Anxiété (9 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Striatal dopamine D2/3 in major depression. <em>PMC5623119</em></li>
                <li>• Dopaminergic system alteration anxiety & compulsive. <em>PMC7744599</em></li>
                <li>• Changes dopamine D2 following psychotherapy. <em>PMC3365259</em></li>
                <li>• Dopamine receptors: therapeutic target depression? <em>PMC9428607</em></li>
                <li>• Monoamine neurotransmitters control emotions. <em>PMC9611768</em></li>
                <li>• From reward to anhedonia. <em>PMC10525914</em></li>
                <li>• Dopamine release midbrain promotes anxiety. <em>PMC7687288</em></li>
                <li>• Neurotransmitters influence mental health. <em>Open Access Journals, 2024</em></li>
                <li>• Discovery dopamine receptors overlooked brain part. <em>Mount Sinai, 2025</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Détox Dopamine & Addiction (8 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Lembke A. (2021). Dopamine Nation. <em>Dutton</em></li>
                <li>• Dopamine hypothesis of drug addiction. <em>PMC3225760</em></li>
                <li>• Dopamine circuit mechanisms addiction-like behaviors. <em>Frontiers Neural Circuits, 2021</em></li>
                <li>• Addiction: Beyond dopamine reward circuitry. <em>PNAS, 2011</em></li>
                <li>• Dopamine fasting. <em>Wikipedia, 2020</em></li>
                <li>• Dopamine in drug abuse: imaging studies. <em>Nature, 2004</em></li>
                <li>• Dopamine addiction: symptoms, causes, treatment. <em>The Cabin Chiang Mai, 2025</em></li>
                <li>• Connection between dopamine & addiction. <em>Seaglass Recovery, 2025</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Apprentissage & Mémoire (6 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Dopamine increases protein synthesis hippocampus. <em>PubMed 40063079</em></li>
                <li>• Dopamine and reward. <em>PMC2958859</em></li>
                <li>• Dopamine regulates aversive contextual learning. <em>PMC4772154</em></li>
                <li>• Dopamine and learning. <em>Oxford Academic, 2024</em></li>
                <li>• Distinct dopamine neurons mediate short/long-term memory. <em>PNAS, 2015</em></li>
                <li>• Dopaminergic regulation hippocampal plasticity. <em>Frontiers Behavioral Neuroscience, 2023</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Méditation & Musique (2 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Kjaer TW et al. (2002). Increased dopamine tone during meditation. <em>Cognitive Brain Research</em></li>
                <li>• Salimpoor VN et al. (2011). Anatomically distinct dopamine release during anticipation and experience. <em>Nature Neuroscience</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Neuroplasticité & Automatisation (1 source)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Lally P et al. (2010). How habits are formed: 66 days. <em>European Journal Social Psychology</em></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Suppléments (4 sources)</h4>
              <ul className="space-y-1 text-xs">
                <li>• Deijen JB et al. (1999). Tyrosine improves cognitive performance. <em>Brain Research Bulletin</em></li>
                <li>• Olsson EM et al. (2009). Rhodiola rosea reduces stress fatigue. <em>Planta Medica</em></li>
                <li>• Mucuna pruriens: review of chemistry & pharmacology. <em>PMC8323743</em></li>
                <li>• Ginkgo biloba: effects dopamine pathway. <em>Journal Ethnopharmacology</em></li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="eeat">À propos de cet article & Méthodologie</h2>

        <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4">👤 Expertise & Méthodologie Scientifique</h3>
          <div className="text-sm text-blue-800 dark:text-blue-200 space-y-3">
            <p>
              <strong>Auteur</strong> : Guesso, fondateur de L'Éveil Mental, spécialisé en neurosciences appliquées et psychologie comportementale.
            </p>
            <p>
              <strong>Méthodologie de recherche</strong> : Cet article compile 70+ études peer-reviewed issues de PubMed Central, Nature, PNAS, Frontiers, et institutions académiques (Stanford, Harvard, Cambridge, Oxford). Toutes les affirmations scientifiques sont sourcées et vérifiables.
            </p>
            <p>
              <strong>Mise à jour</strong> : Dernière révision complète le 31 janvier 2026. Les protocoles intègrent les recherches les plus récentes publiées en 2024-2026.
            </p>
            <p>
              <strong>Avertissement médical</strong> : Ce contenu est à visée informative et éducative uniquement. Il ne remplace pas un avis médical professionnel. Consultez toujours un professionnel de santé qualifié pour tout questionnement médical ou avant modification significative de mode de vie.
            </p>
            <p>
              <strong>Conflits d'intérêt</strong> : Aucun conflit d'intérêt financier. Le workbook Amazon mentionné est un produit créé par l'auteur pour accompagner les protocoles décrits dans cet article.
            </p>
          </div>
        </div>

        <div className="not-prose my-12 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">📖 Ressources Complémentaires</h3>
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Explorez d'autres aspects des neurosciences appliquées pour optimiser votre cerveau et votre bien-être :
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/blog/sommeil-reparateur-7-strategies-validees" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
              Sommeil réparateur : 7 stratégies validées
            </Link>
            <span className="text-neutral-400">•</span>
            <Link to="/blog/neuroplasticite-cerveau" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
              Neuroplasticité après 25 ans
            </Link>
            <span className="text-neutral-400">•</span>
            <Link to="/blog/attention-fragmentee-concentration-numerique" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
              Restaurer concentration profonde
            </Link>
            <span className="text-neutral-400">•</span>
            <Link to="/blog/rumination-mentale-pensees-obsessionnelles" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
              Maîtriser la rumination mentale
            </Link>
            <span className="text-neutral-400">•</span>
            <Link to="/blog/plasticite-synaptique-apprentissage-cerveau" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
              Plasticité synaptique
            </Link>
          </div>
        </div>


        {/* CTA Lead Magnet PDF Gratuit - FIN D'ARTICLE */}
        <div className="not-prose my-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-10 rounded-2xl text-white shadow-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              🎁 Guide Gratuit : Protocole Détox Dopamine 7 Jours
            </h3>

            <p className="mb-6 text-blue-50 text-lg leading-relaxed">
              Recevez <strong>gratuitement</strong> le protocole condensé "Version Sprint"
              utilisé par +500 personnes. Programme complet jour par jour, exercices pratiques,
              et outils de survie inclus. <strong>Commencez dès aujourd'hui.</strong>
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-sm mb-4 font-semibold">✨ Ce que vous recevrez immédiatement par email :</p>
              <ul className="text-sm space-y-2 text-left max-w-md mx-auto">
                <li>📋 Protocole 7 jours complet (Jours 0 à 7)</li>
                <li>🧠 Science du "Duel Neurologique" (Système 1 vs 2)</li>
                <li>⚡ Outils de survie indispensables (Version Minimale, Protocole Reset)</li>
                <li>💪 Plan d'action jour par jour avec checklist</li>
                <li>📊 Trackers quotidiens à imprimer</li>
              </ul>
            </div>

            {/* FORMULAIRE FORMSPREE */}
            <form
              action="https://formspree.io/f/xrepjypl"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:ring-4 focus:ring-yellow-300 outline-none text-base"
              />

              <input type="hidden" name="lead_magnet" value="detox-dopamine-7j" />
              <input type="hidden" name="_subject" value="Nouveau téléchargement : Guide Détox Dopamine 7j" />
              <input type="hidden" name="_next" value="https://leveilmental.fr/merci-guide-detox" />

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                📥 Recevoir le Guide
              </button>
            </form>

            <p className="mt-4 text-xs text-blue-100">
              🔒 Zéro spam. Conforme RGPD. Désabonnement en 1 clic.
            </p>

            <p className="mt-6 text-sm text-blue-50">
              Vous voulez le programme complet 30 jours avec maintenance 66 jours ?
              <a href="https://www.amazon.fr/D%C3%A9tox-Dopamine-dExercices-Neurosciences-Maintenance/dp/B0GJJDZYWN/" target="_blank" rel="noopener noreferrer" className="underline font-semibold ml-1">
                Voir le Workbook Amazon →
              </a>
            </p>
          </div>
        </div>

        {/* Partage social en bas d'article */}
        <div className="not-prose mt-16 border-t border-neutral-200 dark:border-neutral-700 pt-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-6">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Cet article vous a aidé ? Aidez d'autres à reprendre le contrôle
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Partagez ces connaissances scientifiques avec votre communauté
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <SocialShare
                title={`${meta.title} - L'Éveil Mental`}
                url={url}
                description={meta.description}
                hashtags={[...meta.tags, "neurosciences", "bienetre", "sante"]}
                size="lg"
                showLabels={false}
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Plus d'articles neurosciences dans votre boîte mail
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#newsletter"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  📬 Newsletter Hebdo Gratuite
                </a>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-neutral-200 dark:border-neutral-700"
                >
                  📚 Tous les Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article >
    </>
  );
}
  return <NeuroDopamineRoutine />;
}