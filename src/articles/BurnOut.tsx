// src/articles/BurnOut.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 1 juillet 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "burn-out-signaux-neurobiologiques-recuperation",
  title: "Burn-out : les signaux neurobiologiques dans le cerveau et 7 étapes de récupération",
  description: "Burn-out et cerveau : profil fronto-limbique, mythe du cortisol toujours élevé, réversibilité partielle et 7 étapes de récupération. Guide 2026 avec sources.",
  cover: "/images/articles/burn-out-signaux-neurobiologiques-recuperation-cover",
  datePublished: "2026-07-01T08:00:00+01:00",
  dateModified: "2026-07-01T08:00:00+01:00",
  tags: ["burn-out", "épuisement professionnel", "burnout cerveau", "cortisol burnout", "récupération burn-out", "cortex préfrontal", "neurosciences", "santé mentale travail"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Psychologie",
  readingTime: "10 min",
  version: "1.0",
  verifiedDate: "Juillet 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Quels sont les signes du burn-out dans le cerveau ?",
    answer: "Le burn-out laisse des signaux neurobiologiques plutôt qu'un signe unique : altérations du cortex préfrontal dorsolatéral et ventromédian, hypertrophie de l'amygdale, couplage affaibli entre l'amygdale et le cortex cingulaire, et connectivité frontale réduite. Ces signaux varient selon les personnes et ne constituent pas un diagnostic à eux seuls."
  },
  {
    question: "Le burn-out est-il visible à l'imagerie cérébrale ?",
    answer: "Pas comme un diagnostic direct. Les études d'IRM et d'EEG montrent des tendances de groupe, comme une perte de matière grise préfrontale ou une connectivité frontale réduite, mais ces marqueurs se chevauchent avec ceux d'autres états. Le burn-out reste un diagnostic clinique basé sur les symptômes et le contexte professionnel, pas sur un scanner."
  },
  {
    question: "Quelle est la différence entre burn-out, stress et dépression ?",
    answer: "Le stress est une réponse ponctuelle à une contrainte. Le burn-out est un état d'épuisement lié spécifiquement au travail, avec cynisme et perte d'efficacité (définition OMS). La dépression est un trouble plus global qui touche tous les domaines de la vie. Les trois se chevauchent mais ne sont pas identiques, et leur prise en charge diffère."
  },
  {
    question: "Le cortisol est-il toujours élevé en cas de burn-out ?",
    answer: "Non, c'est un mythe fréquent. Les études récentes, dont le Regensburg Burnout Project (2024), ne trouvent pas de cortisol systématiquement élevé chez les personnes en burn-out. La réponse hormonale au stress est hétérogène : elle varie selon le stade, la durée d'exposition et les individus. Le burn-out ne se réduit pas à « trop de cortisol »."
  },
  {
    question: "Le cerveau récupère-t-il après un burn-out ?",
    answer: "Oui, au moins partiellement. La revue MRI de 2025 identifie des indices de réversibilité des altérations fronto-limbiques après des interventions comme la pleine conscience, l'exercice, la TCC ou le neurofeedback. La récupération est réelle mais incomplète et variable selon les personnes et la durée de l'exposition au stress."
  },
  {
    question: "Combien de temps faut-il pour récupérer d'un burn-out ?",
    answer: "Il n'y a pas de délai unique. En général, l'amélioration subjective apparaît en quelques semaines à quelques mois, la récupération fonctionnelle (concentration, mémoire) prend plus de temps, et la normalisation des marqueurs biologiques peut demander plusieurs mois. La variabilité individuelle est élevée et dépend de la sortie effective de l'exposition."
  },
  {
    question: "Quels sont les symptômes cognitifs du burn-out ?",
    answer: "Les plus fréquents sont les difficultés de concentration, les oublis, la lenteur de traitement de l'information, la difficulté à prendre des décisions et la fatigue mentale rapide. Ces symptômes reflètent la surcharge des circuits de contrôle préfrontal et disparaissent en grande partie avec la récupération, ce qui est rassurant."
  },
  {
    question: "Comment savoir si je suis en train de faire un burn-out ?",
    answer: "Les signaux d'alerte associent un épuisement persistant qui ne passe pas avec le repos, une distance ou un cynisme croissant envers le travail, et une baisse du sentiment d'efficacité. S'y ajoutent souvent des troubles du sommeil et des difficultés cognitives. Si ces signes durent plusieurs semaines, consulter un professionnel est la bonne démarche."
  }
];

// ==================== COMPOSANT ====================

export default function BurnOut() {
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
    caption: "Illustration émotionnelle du burn-out : cerveau stylisé aux circuits préfrontaux affaiblis et surchargés sur fond sombre, représentant l'épuisement professionnel et ses signaux neurobiologiques"
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
      name: "Burn-out et cerveau",
      description: "Signaux neurobiologiques du burn-out incluant le profil fronto-limbique, la réponse HPA hétérogène et la réversibilité partielle documentée en imagerie"
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
      { "@type": "ListItem", position: 3, name: "Psychologie", item: `${site}/blog/?category=psychologie` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7 étapes de récupération neurobiologique après un burn-out",
    description: "Les 7 étapes d'un parcours de récupération après un burn-out, du retrait de l'exposition au retour progressif au travail",
    numberOfItems: 7,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Sortir de l'exposition chronique", description: "Le préalable non négociable : réduire ou stopper la source de stress professionnel pour laisser les circuits de stress se calmer." },
      { "@type": "ListItem", position: 2, name: "Restaurer le sommeil", description: "Le sommeil régulier restaure la connectivité préfrontale et abaisse la réactivité de l'amygdale, deux mécanismes clés de la récupération." },
      { "@type": "ListItem", position: 3, name: "Réactiver le corps par l'exercice aérobie", description: "L'activité aérobie augmente le BDNF et favorise la neuroplasticité, soutenant la restauration des circuits préfrontaux." },
      { "@type": "ListItem", position: 4, name: "Réduire la charge cognitive", description: "Alléger les décisions et le multitâche laisse au cortex préfrontal surchargé le temps de récupérer sa capacité de contrôle." },
      { "@type": "ListItem", position: 5, name: "TCC et accompagnement structuré", description: "La thérapie cognitivo-comportementale fait partie des interventions associées à une réversibilité des altérations fronto-limbiques." },
      { "@type": "ListItem", position: 6, name: "Reconstruire la régulation émotionnelle", description: "Réapprendre à réguler ses émotions renforce le contrôle préfrontal sur les réponses de menace affaiblies par l'épuisement." },
      { "@type": "ListItem", position: 7, name: "Retour progressif au travail", description: "Un retour graduel, adapté à la charge réelle, prévient la rechute en évitant de replonger dans l'exposition chronique." }
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
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Burn-out</li>
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
          Burn-out : les signaux neurobiologiques dans le cerveau et 7 étapes de récupération
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2024-2025
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> Le burn-out laisse dans le cerveau des signaux neurobiologiques (altérations du cortex préfrontal, hypertrophie de l'amygdale, connectivité frontale réduite) plutôt qu'un signe unique. Contrairement au mythe, le cortisol n'est pas toujours élevé. Bonne nouvelle : ces altérations sont partiellement réversibles, et la récupération suit un parcours en 7 étapes.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Chmiel &amp; Kurpas, <em>Int. J. Molecular Sciences</em>, 2025 ; Regensburg Burnout Project, <em>Psychoneuroendocrinology</em>, 2024 ; Afek et al., <em>Frontiers in Human Neuroscience</em>, 2025.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">17<br/>études</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                Une revue de 2025 passe en revue 17 études d'imagerie cérébrale sur le burn-out, portant sur environ 1 365 personnes. Elle décrit un profil fronto-limbique perturbé (perte de matière grise dans le cortex préfrontal, augmentation du volume de l'amygdale) et, surtout, des indices de réversibilité partielle après pleine conscience, exercice, TCC ou neurofeedback. Le cerveau épuisé n'est pas un cerveau cassé pour toujours.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Chmiel J. &amp; Kurpas D., <em>Burnout and the Brain: A Mechanistic Review of MRI Studies</em>, <em>International Journal of Molecular Sciences</em>, vol. 26(17), 2025 — DOI : 10.3390/ijms26178379
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration émotionnelle du burn-out : cerveau stylisé aux circuits préfrontaux affaiblis et surchargés sur fond sombre violet, représentant l'épuisement professionnel et ses signaux neurobiologiques"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu te réveilles déjà fatigué. La moindre tâche te coûte un effort disproportionné. Tu oublies des choses, tu n'arrives plus à te concentrer, et l'idée même du travail te remplit d'un mélange de lassitude et de cynisme. Ce n'est pas de la paresse. C'est peut-être un <strong>burn-out</strong>, et il laisse des traces mesurables dans le cerveau.
          </p>
          <p>
            Mais attention aux raccourcis. On lit partout que le burn-out, c'est « le cerveau qui s'épuise » ou « l'amygdale en alarme permanente ». La réalité scientifique est plus nuancée, et cette nuance est une bonne nouvelle : les signaux neurobiologiques du burn-out sont réels, variables d'une personne à l'autre, et surtout partiellement réversibles.
          </p>
          <p>
            Cet article fait ce que peu d'articles francophones font : distinguer les vrais marqueurs cérébraux des mythes (comme le « cortisol toujours élevé »), et proposer un parcours de récupération en 7 étapes fondé sur les données, sans promesse de guérison miracle.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce que le burn-out selon les neurosciences ?</h2>
          <p>
            Avant de parler du cerveau, il faut être précis sur ce qu'est le burn-out, car la confusion commence là.
          </p>

          <h3>Un phénomène occupationnel, pas une « fatigue du cerveau »</h3>
          <p>
            L'Organisation mondiale de la santé définit le burn-out comme un <strong>syndrome lié au travail</strong>, résultant d'un stress professionnel chronique mal géré. Il se caractérise par trois dimensions : un épuisement profond, une distance mentale ou un cynisme envers le travail, et une baisse du sentiment d'efficacité professionnelle.
          </p>
          <p>
            Le point important : le burn-out n'est pas une maladie du cerveau au sens strict, mais un état d'épuisement lié au travail avec des effets mesurables sur les circuits de stress et de contrôle. Cette distinction change tout. On ne « répare » pas un cerveau abîmé, on aide un système temporairement surchargé à retrouver son équilibre.
          </p>

          <h3>Burn-out, stress et dépression : trois choses différentes</h3>
          <p>
            Ces trois états se chevauchent mais ne sont pas identiques. Le <strong>stress</strong> est une réponse ponctuelle à une contrainte, utile et réversible. Le <strong>burn-out</strong> est un épuisement spécifiquement lié au travail. La <strong>dépression</strong> est un trouble plus global, qui touche tous les domaines de la vie, pas seulement la sphère professionnelle.
          </p>
          <p>
            Confondre les trois mène à de mauvaises prises en charge. Un burn-out se résout souvent en changeant le rapport au travail ; une dépression nécessite une approche clinique différente. Le <Link to="/blog/cortisol-stress-chronique-cerveau-memoire/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">stress chronique et ses effets sur le cerveau</Link> sont un terrain commun aux trois, mais chacun a sa trajectoire propre.
          </p>

          {/* H2 — Signaux */}
          <h2>Quels signaux neurobiologiques le burn-out laisse-t-il dans le cerveau ?</h2>
          <p>
            Les études d'imagerie et d'électrophysiologie révèlent plusieurs signaux, mais aucun n'est un « diagnostic visible » à lui seul. Ce sont des tendances de groupe, pas un scanner qui dirait « burn-out ».
          </p>

          <h3>Les symptômes cognitifs concrets</h3>
          <p>
            Commençons par ce que tu ressens. Les symptômes cognitifs du burn-out sont les plus tangibles : difficultés de concentration, oublis, lenteur à traiter l'information, difficulté à décider, fatigue mentale rapide. Tu relis trois fois le même e-mail sans le comprendre. Tu cherches tes mots. Tu te sens « au ralenti ».
          </p>
          <p>
            Ces symptômes ne sont pas imaginaires : ils reflètent la surcharge des circuits de contrôle du cortex préfrontal, la région à l'avant du cerveau qui gère la concentration, la planification et la décision. Bonne nouvelle : ces symptômes cognitifs récupèrent en grande partie avec le repos et la prise en charge. Reste un obstacle : le biais d'optimisme, qui figure parmi les <Link to="/blog/biais-cognitifs-liste-psychologie/" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">biais cognitifs les plus répandus</Link>, nous fait croire que l'épuisement n'arrive qu'aux autres, jusqu'au moment où il est trop tard.
          </p>

          <h3>Le profil fronto-limbique perturbé</h3>
          <p>
            Le signal cérébral central du burn-out n'est pas une structure unique, c'est un <strong>profil fronto-limbique perturbé</strong>. Concrètement, cela concerne plusieurs régions qui travaillent ensemble : le cortex préfrontal dorsolatéral (le contrôle exécutif), le cortex préfrontal ventromédian (la régulation émotionnelle), le cortex cingulaire antérieur (la détection des conflits), et l'amygdale (le détecteur de menace).
          </p>
          <p>
            La revue MRI de 2025 décrit une perte de matière grise dans les zones préfrontales et, de façon contre-intuitive, une augmentation du volume de l'amygdale, surtout chez les femmes. Le couplage entre l'amygdale et le cortex cingulaire est affaibli, tandis que les zones frontales montrent une hyper-activation compensatoire, comme un moteur qui force pour maintenir le régime. À noter : selon cette même revue, et contrairement au stress chronique classique, le volume de l'hippocampe (la structure de la mémoire) reste globalement préservé dans le burn-out. C'est une nuance qui compte, et qui montre pourquoi il ne faut pas tout mettre dans le même sac.
          </p>

          <h3>Le mythe du « cortisol toujours élevé »</h3>
          <p>
            Voici l'erreur la plus répandue. On répète que le burn-out, c'est « trop de cortisol », l'hormone du stress. Les données récentes disent le contraire.
          </p>

          {/* StatBlock 2 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">Aucune<br/>différence</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  En comparant 55 personnes en burn-out à 61 témoins soumis à un stress en laboratoire, les chercheurs de l'Université de Regensburg (Allemagne) ne trouvent aucune différence de cortisol moyen ni de réponse neuronale globale. La particularité observée est ailleurs : face au stress répété, les témoins s'habituent (leur cortex cingulaire s'active moins la deuxième fois), tandis que le groupe burn-out montre le pattern inverse. Le burn-out n'est pas « trop de cortisol », c'est une capacité d'adaptation altérée.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Bärtl C. et al., <em>Neural and cortisol responses to acute psychosocial stress in work-related burnout: The Regensburg Burnout Project</em>, <em>Psychoneuroendocrinology</em>, vol. 161, 2024 — DOI : 10.1016/j.psyneuen.2023.106926
                </p>
              </div>
            </div>
          </div>

          <p>
            La réponse hormonale au stress dans le burn-out est <strong>hétérogène</strong> : elle varie selon le stade, la durée d'exposition et les individus. Certaines personnes montrent un cortisol matinal aplati, d'autres un profil normal. Réduire le burn-out à « trop de cortisol » est faux et empêche de comprendre ce qui se passe vraiment.
          </p>

          <h3>La connectivité frontale réduite</h3>

          {/* StatBlock 3 — indigo */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">98<br/>cerveaux</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  En comparant l'activité électrique cérébrale de 49 personnes en burn-out à celle de 49 témoins sains, une étude EEG de 2025 montre une réduction significative de la connectivité dans les régions frontales et médianes, dans une bande de fréquence précise (alpha3, 11-13 Hz), surtout à droite. Traduction : les zones de contrôle du cerveau communiquent moins bien entre elles, ce qui correspond au sentiment de « déconnexion » et de fatigue mentale.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Afek N. et al., <em>Functional connectivity in burnout syndrome: a resting-state EEG study</em>, <em>Frontiers in Human Neuroscience</em>, 2025 — DOI : 10.3389/fnhum.2025.1481760
                </p>
              </div>
            </div>
          </div>

          <p>
            Ces trois angles (imagerie structurelle, hormones, électrophysiologie) convergent vers la même idée : le burn-out affaiblit le contrôle exécutif du cerveau, sans se résumer à une seule cause. La <Link to="/blog/rumination-mentale-pensees-obsessionnelles/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">rumination mentale</Link>, fréquente dans le burn-out, aggrave cette surcharge en maintenant le cerveau en boucle sur les préoccupations.
          </p>

          {/* Encadré distinction */}
          <div className="not-prose my-6 bg-violet-50 dark:bg-violet-950/30 p-5 rounded-lg border-l-4 border-violet-500">
            <p className="text-xs font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wide mb-3">Ce que le cerveau montre, et ce qu'il ne montre pas</p>
            <ul className="space-y-2 text-sm text-violet-900 dark:text-violet-100">
              <li><strong>Ce que le cerveau montre :</strong> des tendances de groupe (contrôle préfrontal affaibli, connectivité frontale réduite, adaptation au stress altérée).</li>
              <li><strong>Ce que le cerveau ne permet pas :</strong> diagnostiquer un burn-out à partir d'un seul scanner. Les marqueurs se chevauchent avec le stress chronique et la dépression.</li>
              <li><strong>Le diagnostic reste clinique :</strong> il repose sur les symptômes, leur durée et le contexte professionnel, évalués par un professionnel.</li>
            </ul>
          </div>

          {/* H2 — Récupération */}
          <h2>Le cerveau récupère-t-il après un burn-out ?</h2>
          <p>
            C'est la question qui compte le plus, et la réponse est encourageante, à condition de rester honnête sur les délais.
          </p>

          <h3>La réversibilité partielle documentée</h3>
          <p>
            La revue MRI de 2025 ne se contente pas de décrire les dégâts : elle relève des indices de <strong>réversibilité partielle</strong> des altérations fronto-limbiques après plusieurs types d'interventions, comme la pleine conscience, l'exercice physique, la thérapie cognitivo-comportementale ou le neurofeedback. Le cerveau garde sa capacité à se réorganiser, grâce à la neuroplasticité.
          </p>
          <p>
            « Partielle » est le mot juste. La récupération est réelle mais rarement totale, et elle dépend de la durée de l'exposition au stress. Plus on sort tôt de la situation, plus la récupération est complète.
          </p>

          <h3>À quoi s'attendre : les délais réalistes</h3>
          <p>
            Un point essentiel, souvent oublié : les différents niveaux de récupération ne progressent pas au même rythme. La <strong>récupération subjective</strong> (se sentir moins épuisé) apparaît généralement en premier, en quelques semaines à quelques mois. La <strong>récupération fonctionnelle</strong> (retrouver sa concentration, sa mémoire) prend plus de temps. La <strong>récupération biologique</strong> (normalisation des marqueurs cérébraux et hormonaux) peut demander plusieurs mois.
          </p>
          <p>
            C'est pourquoi on peut « se sentir mieux » tout en étant encore vulnérable. Reprendre trop vite, avant la récupération fonctionnelle, est la principale cause de rechute. La patience n'est pas une option, c'est une partie du traitement. Cette capacité à récupérer et à se reconstruire après l'épreuve est au cœur de la <Link to="/blog/resilience-psychologique-developper/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">résilience psychologique</Link>.
          </p>

          {/* H2 — 7 étapes */}
          <h2>Quelles sont les 7 étapes de récupération neurobiologique ?</h2>
          <p>
            Voici un parcours en 7 étapes, dans un ordre logique. Ce n'est pas une promesse de guérison rapide, mais une trame fondée sur les mécanismes cérébraux et les interventions validées.
          </p>

          <h3>1. Sortir de l'exposition chronique</h3>
          <p>
            C'est le préalable non négociable. Tant que la source de stress professionnel continue, aucune récupération durable n'est possible : le cerveau reste en mode alerte. Cela peut passer par un arrêt de travail, un aménagement du poste ou un changement plus profond. Sans cette étape, les six suivantes n'ont qu'un effet limité.
          </p>

          <h3>2. Restaurer le sommeil</h3>
          <p>
            Le sommeil est le premier réparateur du cerveau. Il restaure la connectivité préfrontale et abaisse la réactivité de l'amygdale, exactement les deux mécanismes perturbés par le burn-out. Retrouver un sommeil régulier est souvent la première victoire concrète. Les leviers sont détaillés dans l'article sur <Link to="/blog/sommeil-reparateur-7-strategies-validees/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">le sommeil réparateur</Link>.
          </p>

          <h3>3. Réactiver le corps par l'exercice aérobie</h3>
          <p>
            L'activité aérobie modérée (marche rapide, vélo, natation) augmente le BDNF, une protéine qui favorise la neuroplasticité et soutient la restauration des circuits préfrontaux. Inutile de viser la performance : l'objectif est de réactiver le corps en douceur, pas d'ajouter une nouvelle source de stress. 20 à 30 minutes plusieurs fois par semaine suffisent pour amorcer l'effet.
          </p>

          <h3>4. Réduire la charge cognitive</h3>
          <p>
            Le cortex préfrontal surchargé a besoin de répit. Réduire le nombre de décisions quotidiennes, éviter le multitâche, simplifier son environnement : autant de façons de laisser au cerveau le temps de récupérer sa capacité de contrôle. Pendant cette phase, se sentir incapable de gérer ce qu'on gérait avant est normal, ce n'est pas un recul.
          </p>

          <h3>5. TCC et accompagnement structuré</h3>
          <p>
            La thérapie cognitivo-comportementale fait partie des interventions associées à une réversibilité des altérations fronto-limbiques. Au-delà des symptômes, elle aide à identifier ce qui, dans le rapport au travail, a mené à l'épuisement, pour éviter la rechute. Un accompagnement structuré (psychologue, médecin du travail) est souvent nécessaire, le burn-out se gère rarement seul.
          </p>

          <h3>6. Reconstruire la régulation émotionnelle</h3>
          <p>
            Le burn-out affaiblit le contrôle préfrontal sur les émotions. Réapprendre à réguler ses émotions renforce ce contrôle et réduit la réactivité au stress. Les techniques validées, de la réévaluation cognitive à la pleine conscience, sont présentées dans l'article sur <Link to="/blog/regulation-emotionnelle-techniques-psychologie/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">la régulation émotionnelle</Link>. C'est aussi une façon d'apaiser le <Link to="/blog/systeme-limbique-cerveau-emotionnel/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">cerveau émotionnel</Link> maintenu en tension.
          </p>

          <h3>7. Retour progressif au travail</h3>
          <p>
            La dernière étape est la plus délicate. Un retour graduel, adapté à la charge réelle et non à la charge d'avant, prévient la rechute. Reprendre à plein régime dès qu'on se sent « mieux » est le piège classique : la récupération fonctionnelle n'est pas encore complète. Un retour par paliers, avec des ajustements du poste, protège les circuits en cours de restauration.
          </p>

          {/* H2 — À retenir */}
          <h2>À retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>✅ <strong>Le burn-out est occupationnel :</strong> c'est un épuisement lié au travail (définition OMS), pas une « maladie du cerveau », même s'il a des effets mesurables sur les circuits de stress.</li>
              <li>✅ <strong>Pas de signe unique :</strong> le cerveau montre un profil fronto-limbique perturbé (préfrontal affaibli, volume de l'amygdale augmenté, connectivité frontale réduite), variable selon les personnes.</li>
              <li>✅ <strong>Le cortisol n'est pas toujours élevé :</strong> la réponse hormonale est hétérogène. Le vrai marqueur est une capacité d'adaptation au stress altérée (Regensburg, 2024).</li>
              <li>🔑 <strong>La récupération est partielle mais réelle :</strong> les altérations fronto-limbiques sont réversibles après pleine conscience, exercice, TCC ou neurofeedback (revue MRI 2025).</li>
              <li>🔑 <strong>7 étapes :</strong> sortir de l'exposition, restaurer le sommeil, réactiver le corps, réduire la charge cognitive, TCC, régulation émotionnelle, retour progressif.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur le burn-out et le cerveau</h2>
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
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">Guide : les 7 étapes de récupération après un burn-out</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 7 étapes de récupération avec leur mécanisme cérébral, les signaux d'alerte et les délais réalistes à chaque phase.
            </p>
            <a
              href="/Downloads/burn-out-signaux-neurobiologiques-recuperation-guide.pdf"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger le guide burn-out (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Chmiel J. &amp; Kurpas D. — <em>Burnout and the Brain: A Mechanistic Review of Magnetic Resonance Imaging (MRI) Studies</em> — <em>International Journal of Molecular Sciences</em>, vol. 26(17), 2025 — DOI : <a href="https://doi.org/10.3390/ijms26178379" className="underline" target="_blank" rel="noopener noreferrer">10.3390/ijms26178379</a>
            </li>
            <li>
              [2] Bärtl C. et al. — <em>Neural and cortisol responses to acute psychosocial stress in work-related burnout: The Regensburg Burnout Project</em> — <em>Psychoneuroendocrinology</em>, vol. 161, 2024 — DOI : <a href="https://doi.org/10.1016/j.psyneuen.2023.106926" className="underline" target="_blank" rel="noopener noreferrer">10.1016/j.psyneuen.2023.106926</a>
            </li>
            <li>
              [3] Afek N., Harmatiuk D., Gawłowska M. et al. — <em>Functional connectivity in burnout syndrome: a resting-state EEG study</em> — <em>Frontiers in Human Neuroscience</em>, 2025 — DOI : <a href="https://doi.org/10.3389/fnhum.2025.1481760" className="underline" target="_blank" rel="noopener noreferrer">10.3389/fnhum.2025.1481760</a>
            </li>
            <li>
              [4] Organisation mondiale de la santé — <em>Burn-out, un « phénomène lié au travail » (CIM-11)</em> — 2019/2022 — <a href="https://www.who.int/fr/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases" className="underline" target="_blank" rel="noopener noreferrer">who.int</a>
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
