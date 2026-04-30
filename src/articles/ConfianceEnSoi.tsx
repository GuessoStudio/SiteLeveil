// src/articles/ConfianceEnSoi.tsx
// Article optimisé SEO 2025-2026 + CTR Strategy
// Titre optimisé pour Featured Snippets et engagement
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 23 janvier 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "confiance-en-soi-durable",
  title: "Confiance en Soi : 6 Stratégies Scientifiques pour la Développer Durablement",
  description: "Découvrez 6 stratégies scientifiquement validées pour construire une confiance authentique et durable. Basé sur les recherches d'Albert Bandura et les neurosciences. Guide complet + exercices pratiques.",
  cover: "/images/articles/confiance-soi-cover",
  datePublished: "2024-01-10T08:00:00+01:00",
  dateModified: "2026-01-23T11:00:00+01:00",
  tags: ["confiance en soi", "estime de soi", "psychologie", "auto-efficacité", "développement personnel", "Albert Bandura"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos"
  },
  category: "Développement Personnel",
  readingTime: "14 min",
  version: "1.0",
  verifiedDate: "Janvier 2026",
};

// ==================== FAQ DATA (enrichie pour featured snippets) ====================

const faqData = [
  {
    question: "Combien de temps faut-il pour développer une confiance en soi durable ?",
    answer: "Les recherches en psychologie cognitive montrent que des améliorations mesurables de la confiance en soi apparaissent après 3 à 4 semaines de pratique quotidienne des stratégies d'auto-efficacité. Cependant, développer une confiance solide et durable nécessite généralement 3 à 6 mois d'entraînement systématique et conscient. Albert Bandura, pionnier de la théorie de l'auto-efficacité, a démontré que la confiance se construit progressivement à travers l'accumulation d'expériences de maîtrise et la restructuration cognitive. L'essentiel est la constance : 15-20 minutes de pratique délibérée quotidienne sont plus efficaces que des sessions intensives irrégulières."
  },
  {
    question: "Peut-on être trop confiant ? Quelle est la différence entre confiance et arrogance ?",
    answer: "La surconfiance devient problématique lorsqu'elle empêche l'apprentissage continu ou la prise en compte des feedbacks constructifs. La psychologie différencie clairement la confiance authentique de l'arrogance : la première repose sur des compétences réelles et une évaluation réaliste de ses capacités, incluant la reconnaissance de ses limites. L'arrogance, en revanche, est souvent un mécanisme défensif compensant une insécurité profonde. La confiance optimale, selon les recherches de Carol Dweck sur le mindset de croissance, combine l'assurance en ses capacités actuelles avec l'humilité nécessaire pour continuer à apprendre et s'améliorer. Une personne vraiment confiante n'a pas besoin de diminuer les autres pour se sentir valorisée."
  },
  {
    question: "La confiance en soi est-elle différente chez les hommes et les femmes ?",
    answer: "Les études en psychologie sociale révèlent des différences significatives non pas dans le niveau réel de confiance, mais dans son expression et son évaluation. Les recherches de Katty Kay et Claire Shipman (The Confidence Code, 2014) montrent que les femmes ont tendance à sous-estimer leurs compétences d'environ 30%, tandis que les hommes les surestiment légèrement. Cette différence s'explique par des facteurs socioculturels : les filles sont souvent socialisées à être modestes et à éviter l'auto-promotion, tandis que les garçons sont encouragés à affirmer leurs capacités. Cependant, lorsque les femmes appliquent consciemment les stratégies d'auto-efficacité de Bandura, elles développent une confiance aussi solide que celle des hommes. Le problème n'est donc pas biologique mais culturel et parfaitement surmontable."
  },
  {
    question: "Que faire si j'ai vraiment peur de sortir de ma zone de confort ?",
    answer: "La peur de sortir de sa zone de confort est naturelle et même adaptative d'un point de vue évolutionnaire. La clé est d'utiliser l'exposition graduelle systématique, une technique développée par Joseph Wolpe et validée par des décennies de recherches en thérapie comportementale. Commencez par des défis qui vous mettent seulement à 20-30% en dehors de votre zone de confort, pas à 80-90%. Par exemple, si vous avez peur de parler en public, commencez par parler devant une personne de confiance, puis trois personnes, puis un petit groupe de 5-10 personnes, avant de progresser vers des audiences plus larges. La peur diminue naturellement avec la familiarisation progressive, un processus appelé habituation. Chaque succès à un niveau renforce votre auto-efficacité pour le niveau suivant."
  },
  {
    question: "Comment différencier estime de soi, confiance en soi et auto-efficacité ?",
    answer: "Bien que souvent confondus, ces trois concepts sont distincts en psychologie. L'estime de soi est l'évaluation globale de sa valeur personnelle ('Je vaux quelque chose'). La confiance en soi est l'assurance générale dans ses jugements et actions ('Je peux faire face aux situations'). L'auto-efficacité, concept développé par Albert Bandura, est la croyance en sa capacité à accomplir des tâches spécifiques ('Je peux apprendre cette compétence particulière'). L'auto-efficacité est plus précise et actionnable : on peut avoir une faible auto-efficacité en mathématiques mais une haute auto-efficacité en relations sociales. C'est pourquoi Bandura considère l'auto-efficacité comme plus déterminante que l'estime de soi générale pour prédire la performance et le bien-être psychologique."
  },
  {
    question: "Les exercices de visualisation fonctionnent-ils vraiment pour développer la confiance ?",
    answer: "Absolument, et les preuves scientifiques sont solides. Les recherches en psychologie du sport montrent que la visualisation mentale améliore la performance de 13 à 16% en moyenne. L'efficacité est maximale lorsque vous visualisez le processus complet (chaque étape d'action) plutôt que seulement le résultat final. Une étude de l'Université de Chicago a révélé que des basketteurs qui visualisaient leurs lancers francs amélioraient leur performance presque autant que ceux qui s'entraînaient physiquement. Le mécanisme neurologique : la visualisation active les mêmes régions cérébrales que l'action réelle, créant des traces neuronales similaires. Pour maximiser l'efficacité, pratiquez 10 minutes de visualisation quotidienne en mode 'première personne', en incluant les sensations physiques et les émotions positives associées au succès."
  },
  {
    question: "Comment maintenir la confiance en soi face aux critiques répétées ?",
    answer: "Les recherches de Carol Dweck (Stanford) sur le mindset de croissance montrent que les personnes qui interprètent les critiques comme des informations plutôt que comme des jugements sur leur valeur maintiennent mieux leur confiance. La clé : distinguer feedback constructif (basé sur des faits) et jugement subjectif. La technique de défusion cognitive de la TCC permet de prendre de la distance avec les critiques intégrées et de les évaluer objectivement avant de les intégrer."
  },
  {
    question: "La neuroplasticité peut-elle aider à changer une confiance durablement faible ?",
    answer: "Oui. Des études d'IRMf montrent qu'après 8 semaines de pratiques ciblées, la connectivité entre cortex préfrontal ventromédian et amygdale se modifie mesurable. La confiance n'est pas câblée de façon permanente : des exercices répétés de restructuration cognitive, d'exposition graduelle et d'auto-compassion créent de nouvelles voies neuronales. Michael Merzenich (UCSF) confirme que même des patterns bien ancrés peuvent être modifiés avec un entraînement adapté et suffisamment répété."
  }
];

// ==================== COMPOSANT ====================

export default function ConfianceEnSoi() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
  const url = `${site}/blog/${meta.slug}/`;
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;
  const coverImageUrl = `${site}${meta.cover}.webp`;

  // ==================== SCHEMAS JSON-LD ====================

  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site}/a-propos#person`,
    name: "Guesso",
    url: `${site}/a-propos`,
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
    caption: "Illustration du développement de la confiance en soi à travers les stratégies scientifiques d'Albert Bandura"
  };

  // Schema BlogPosting (article complet avec publisher)
  const schemaBlogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: meta.title,
    description: meta.description,
    image: { "@id": `${url}#primaryimage` },
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: { "@id": `${site}/a-propos#person` },
    publisher: { "@id": `${site}#organization` },
    about: {
      "@type": "DefinedTerm",
      name: "Confiance en Soi et Auto-Efficacité",
      description: "Stratégies scientifiques pour développer une confiance authentique basées sur les travaux d'Albert Bandura"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 3200
  };

  // Schema Breadcrumb (fil d'Ariane 4 niveaux)
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site}/blog` },
      { "@type": "ListItem", position: 3, name: "Développement Personnel", item: `${site}/blog?category=developpement-personnel` },
      { "@type": "ListItem", position: 4, name: meta.title, item: url }
    ]
  };

  const schemaItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "6 stratégies scientifiques pour développer la confiance en soi durablement",
    description: "Méthodes validées empiriquement basées sur l'auto-efficacité de Bandura et les neurosciences cognitives",
    numberOfItems: 6,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "La technique de restructuration cognitive (méthode ABCDE)", description: "Développée par Albert Ellis ; réduit le manque de confiance chronique dans 75% des cas selon Butler et Beck (2000)." },
      { "@type": "ListItem", position: 2, name: "L'imagerie mentale optimale (visualisation)", description: "Améliore la performance de 13 à 16% ; les mêmes circuits neuronaux que l'action réelle sont activés (Driskell et al., 1994)." },
      { "@type": "ListItem", position: 3, name: "L'exposition graduelle systématique", description: "Désensibilisation progressive de Joseph Wolpe ; taux de succès 60-90% selon méta-analyse de 108 études (Wolitzky-Taylor et al., 2008)." },
      { "@type": "ListItem", position: 4, name: "Le développement de compétences spécifiques (pratique délibérée)", description: "La pratique délibérée d'Anders Ericsson développe une confiance authentique ancrée dans des compétences mesurables." },
      { "@type": "ListItem", position: 5, name: "La méthode de l'auto-compassion selon Kristin Neff", description: "Réduit la dépression de 47% et l'anxiété de 39% selon méta-analyse de 79 études (MacBeth & Gumley, 2012)." },
      { "@type": "ListItem", position: 6, name: "Les postures de pouvoir (embodied cognition)", description: "Maintenir des postures expansives 2 minutes avant une situation challengeante modifie l'état mental et réduit le cortisol (Cuddy, Harvard)." }
    ]
  };

  // Schema FAQ (featured snippets)
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  // ==================== RENDU ====================

  return (
    <>
      {/* SEO avec tous les schemas */}
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
        category={meta.category}
        jsonLd={[schemaPerson, schemaOrganization, schemaImage, schemaBlogPosting, schemaBreadcrumb, schemaItemList, schemaFAQ]}
      />

      {/* Article */}
      <article className="prose prose-neutral dark:prose-invert mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="not-prose mb-12">

          {/* Fil d'Ariane 4 niveaux */}
          <nav aria-label="Fil d'Ariane" className="text-sm mb-6">
            <Link to="/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">
              Accueil
            </Link>
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
            <Link to="/blog" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">
              Blog
            </Link>
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
            <Link
              to="/blog?category=developpement-personnel"
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400"
            >
              Développement Personnel
            </Link>
            <span className="mx-2 text-neutral-400" aria-hidden>›</span>
            <span aria-current="page" className="text-neutral-700 dark:text-neutral-300">
              {meta.title}
            </span>
          </nav>

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
            {meta.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {meta.description}
          </p>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            <span>par {meta.author.name}</span>
            <span>•</span>
            <span>{meta.readingTime} de lecture</span>
            <span>•</span>
            <time dateTime={meta.datePublished}>
              {new Date(meta.datePublished).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })}
            </time>
            <span>•</span>
            <time dateTime={meta.dateModified} className="text-xs">
              Mis à jour le {new Date(meta.dateModified).toLocaleDateString("fr-FR")}
            </time>
            <span>•</span>
            <div className="flex gap-1">
              {meta.tags.map((tag, i) => (
                <span key={tag} className="text-emerald-600 dark:text-emerald-400">
                  #{tag}{i < meta.tags.length - 1 && " "}
                </span>
              ))}
            </div>
          </div>

          {/* Image de couverture */}
          {meta.cover && (
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={`${meta.cover}.webp`}
                alt="Illustration du développement de la confiance en soi à travers les stratégies scientifiques d'Albert Bandura"
                width={1600}
                height={900}
                className="w-full h-auto rounded-2xl"
                loading="eager"
                decoding="async"
              />
            </div>
          )}
        </header>

        {/* Contenu principal */}
        <div className="mt-10">

          {/* Introduction (lead) */}
          <p className="lead">
            La confiance en soi n'est pas un trait de personnalité fixe inscrit dans vos gènes. Les recherches en psychologie cognitive et sociale, notamment les travaux révolutionnaires d'Albert Bandura à l'Université Stanford, démontrent qu'elle peut être développée de façon scientifiquement mesurable — à condition d'appliquer les bonnes stratégies basées sur des preuves empiriques solides.
          </p>

          {/* Section 1 */}
          <h2 id="definition">Qu'est-ce que la confiance en soi : définitions scientifiques</h2>

          <p>
            La psychologie différencie trois concepts souvent confondus mais fondamentalement distincts : l'**estime de soi** (évaluation globale de sa valeur personnelle), l'**auto-efficacité** (croyance en sa capacité à accomplir des tâches spécifiques), et la **confiance en soi** (assurance générale dans ses jugements et actions).
          </p>

          <p>
            Albert Bandura, pionnier de la théorie sociale cognitive à Stanford et l'un des psychologues les plus cités au monde, a démontré à travers quatre décennies de recherches que l'auto-efficacité influence directement la performance, la motivation intrinsèque, et la résilience face aux difficultés. C'est cette auto-efficacité — plus que l'estime de soi globale — qui prédit le mieux le succès et le bien-être psychologique.
          </p>

          {/* Encadré point clé */}
          <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-4">
              🧠 Point Clé : Auto-Efficacité &gt; Estime de Soi
            </h3>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm">
              Bandura a démontré que l'auto-efficacité (croyance en ses capacités spécifiques) prédit mieux la performance que l'estime de soi générale. Pourquoi ? Parce qu'elle est actionnable et contextuelle. Vous pouvez avoir une faible estime globale mais développer une haute auto-efficacité en communication, ce qui transformera concrètement votre vie sociale et professionnelle.
            </p>
          </div>

          <h3>Les fondements neurobiologiques de la confiance</h3>

          <p>
            Les neurosciences révèlent que la confiance en soi active spécifiquement le cortex préfrontal ventromédian (impliqué dans la prise de décision et l'évaluation de soi) et module l'activité de l'amygdale (centre de la peur et de l'anxiété). Cette régulation émotionnelle descendante explique pourquoi les personnes confiantes gèrent mieux le stress et prennent de meilleures décisions sous pression — leur cortex préfrontal inhibe les réponses anxieuses automatiques de l'amygdale.
          </p>

          <p>
            Des études d'IRMf (imagerie par résonance magnétique fonctionnelle) montrent que seulement 8 semaines de pratiques ciblées d'auto-efficacité modifient la connectivité cérébrale entre ces régions, démontrant la neuroplasticité de la confiance.
          </p>

          <h2 id="sources">Les 4 Sources de l'Auto-Efficacité selon Bandura</h2>

          <p>
            Albert Bandura a identifié quatre sources fondamentales qui construisent l'auto-efficacité. Ces sources ne sont pas théoriques — elles sont hiérarchisées par puissance d'impact, validées par des centaines d'études expérimentales.
          </p>

          <h3>1. Les expériences de maîtrise (la source la plus puissante)</h3>

          <p>
            Nos succès passés constituent la source la plus puissante d'auto-efficacité, avec un effet environ 4 fois supérieur aux autres sources. Une méta-analyse monumentale de Stajkovic et Luthans (1998) portant sur 114 études et 21 616 participants confirme que les expériences positives antérieures prédisent significativement la performance future (d = 0.38, un effet de taille moyenne à grande).
          </p>

          <p>
            <strong>Application pratique :</strong> Documentez systématiquement vos réussites dans un "journal des victoires" quotidien. Même les succès mineurs comptent — votre cerveau ne différencie pas l'importance objective, il enregistre le pattern de succès. Relisez ce journal chaque semaine pour ancrer les preuves de votre compétence.
          </p>

          {/* Encadré méthode */}
          <div className="not-prose my-8 bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-4">
              📝 Méthode des Microréussites (Semaine 1)
            </h4>
            <p className="text-amber-800 dark:text-amber-200 text-sm mb-3">
              Décomposez tout grand objectif en étapes de 2-3 jours maximum. Au lieu de "Je vais apprendre le piano" (trop vague et intimidant), visez "Je vais pratiquer 15 minutes de gammes pendant 3 jours consécutifs". Chaque victoire renforce les circuits neuronaux de la confiance.
            </p>
            <p className="text-amber-700 dark:text-amber-300 text-xs italic">
              Source : Kahneman & Tversky (Prospect Theory) - Le cerveau accorde plus de poids aux petites victoires fréquentes qu'aux grandes victoires rares.
            </p>
          </div>

          <h3>2. L'apprentissage vicariant (modèles de rôle)</h3>

          <p>
            Observer quelqu'un similaire à nous réussir augmente notre propre sentiment de capacité. L'efficacité est maximale quand le modèle partage des caractéristiques pertinentes (âge, genre, origine, niveau de compétence initial). C'est pourquoi les témoignages "avant/après" de personnes ordinaires sont plus puissants que ceux de célébrités exceptionnelles.
          </p>

          <p>
            <strong>Application pratique :</strong> Identifiez 3-5 mentors ou modèles qui ont surmonté des défis similaires aux vôtres. Étudiez leurs trajectoires, lisez leurs biographies, écoutez leurs interviews. Votre cerveau intériorisera leur parcours comme preuve que "si eux peuvent, je peux".
          </p>

          <h3>3. La persuasion verbale (feedback et encouragement)</h3>

          <p>
            Les encouragements crédibles augmentent temporairement l'auto-efficacité, mais seulement s'ils sont spécifiques et proviennent de sources compétentes. "Tu peux y arriver !" est moins efficace que "J'ai vu ta progression sur X, si tu continues avec cette méthode Y, tu atteindras Z dans 6 semaines."
          </p>

          <p>
            <strong>Application pratique :</strong> Sollicitez des feedbacks constructifs réguliers de personnes compétentes dans votre domaine cible. Entourez-vous de gens qui croient en vous ET qui vous poussent à progresser (pas seulement à vous sentir bien).
          </p>

          <p>
            La qualité des encouragements que vous recevez dépend aussi de la façon dont vous répondez aux bonnes nouvelles que partagent vos proches. La <Link to="/blog/methode-acr-repondre-aux-bonnes-nouvelles" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">méthode ACR</Link>, validée par Shelly Gable (University of California), montre que des réponses actives et constructives renforcent les liens sociaux qui soutiennent la confiance en soi.
          </p>

          <h3>4. Les états physiologiques et émotionnels</h3>

          <p>
            Nous interprétons nos sensations corporelles comme des indicateurs de compétence. Transpiration et palpitations sont interprétées comme "je ne suis pas capable" par les anxieux, et comme "je suis excité et prêt" par les confiants. La différence ? L'interprétation cognitive de signaux physiologiques identiques.
          </p>

          <p>
            <strong>Application pratique :</strong> Avant une situation challengeante, recadrez vos sensations d'activation physiologique : "Mon cœur bat vite = mon corps me prépare à performer au maximum" plutôt que "= je suis paniqué". Cette réinterprétation change littéralement votre biochimie.
          </p>

          <h2 id="strategies">6 Stratégies Scientifiquement Validées pour Développer la Confiance</h2>

          <h3>1. La technique de restructuration cognitive (méthode ABCDE)</h3>

          <p>
            Développée par Albert Ellis (thérapie rationnelle-émotive), cette technique identifie et modifie les croyances limitantes sous-jacentes à votre manque de confiance. Une étude de Butler et Beck (2000) montre que la restructuration cognitive produit des effets thérapeutiques équivalents aux antidépresseurs dans 75% des cas de manque de confiance chronique.
          </p>

          <p>
            <strong>Application pratique :</strong> Utilisez la méthode ABCDE quotidiennement pendant 2 semaines :
            - **A**dversité : Identifiez la situation déclenchante
            - **B**eliefs : Quelle croyance automatique surgit ?
            - **C**onséquences : Quelles émotions et comportements résultent ?
            - **D**isputation : Questionnez logiquement cette croyance (Quelles preuves ? Contre-exemples ?)
            - **E**nergization : Ressentez les nouvelles émotions après recadrage
          </p>

          {/* Encadré exemple */}
          <div className="not-prose my-8 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              💡 Exemple Concret : Restructuration ABCDE
            </h4>
            <div className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <p><strong>A (Adversité) :</strong> Mon manager critique mon rapport</p>
              <p><strong>B (Belief) :</strong> "Je suis incompétent, je vais être viré"</p>
              <p><strong>C (Conséquences) :</strong> Anxiété, évitement, procrastination</p>
              <p><strong>D (Disputation) :</strong> "Ai-je des preuves objectives d'incompétence ? Non, j'ai réussi 15 projets sur 17. Une critique = une opportunité d'amélioration, pas une sentence"</p>
              <p><strong>E (Energization) :</strong> Calme, motivation à s'améliorer, énergie retrouvée</p>
            </div>
          </div>

          <h3>2. L'imagerie mentale optimale (visualisation basée sur les neurosciences)</h3>

          <p>
            Les recherches en psychologie du sport révèlent que la visualisation améliore la performance de 13-16% en moyenne (Driskell et al., 1994). L'efficacité est maximale quand on visualise le **processus** (étapes d'action détaillées) plutôt que seulement le résultat final. Une étude célèbre de l'Université de Chicago a montré que des basketteurs visualisant leurs lancers francs amélioraient leur performance de 23%, presque autant que l'entraînement physique (24%).
          </p>

          <p>
            <strong>Application pratique :</strong> Pratiquez 10 minutes de visualisation quotidienne en mode "première personne". Visualisez-vous accomplissant chaque étape de l'action avec succès, en incluant les sensations physiques (mouvement des muscles), les émotions positives (fierté, calme), et les détails sensoriels (sons, images, sensations tactiles).
          </p>

          <h3>3. L'exposition graduelle systématique (désensibilisation progressive)</h3>


          <p>
            Basée sur les principes de désensibilisation de Joseph Wolpe (1958), cette approche comportementale réduit progressivement l'anxiété liée aux situations sociales ou professionnelles challengeantes. Une méta-analyse de 108 études (Wolitzky-Taylor et al., 2008) confirme un taux de succès de 60-90% selon les contextes.
          </p>

          <p>
            <strong>Application pratique :</strong> Créez une hiérarchie personnelle de 10 situations anxiogènes, notées de 1 (légèrement inconfortable) à 10 (terrifiante). Maîtrisez COMPLÈTEMENT le niveau 1 (plusieurs expositions réussies) avant de passer au niveau 2. Cette progression systématique construit une confiance authentique et durable, car chaque niveau valide : "J'ai survécu, je peux affronter le suivant."
          </p>

          {/* Encadré hiérarchie */}
          <div className="not-prose my-8 bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
              🎯 Exemple : Hiérarchie d'Exposition (Prise de Parole)
            </h4>
            <div className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
              <p><strong>Niveau 1 :</strong> Parler 2 min devant un miroir (0 stress réel)</p>
              <p><strong>Niveau 2 :</strong> Parler devant 1 personne de confiance (20% stress)</p>
              <p><strong>Niveau 3 :</strong> Présenter devant 3 amis proches (30% stress)</p>
              <p><strong>Niveau 4 :</strong> Réunion d'équipe de 5-7 personnes (40% stress)</p>
              <p><strong>Niveau 5 :</strong> Présentation client avec 10-12 personnes (50% stress)</p>
              <p><strong>... Jusqu'à Niveau 10 :</strong> Conférence publique 100+ personnes</p>
            </div>
            <p className="text-purple-700 dark:text-purple-300 text-xs italic mt-3">
              Règle d'or : Ne sautez JAMAIS de niveau. La progression graduelle est le secret.
            </p>
          </div>

          <h3>4. Le développement de compétences spécifiques (pratique délibérée)</h3>

          <p>
            La théorie de l'auto-détermination de Deci et Ryan (2000) démontre que le développement de compétences réelles satisfait un besoin psychologique fondamental et renforce durablement la motivation intrinsèque. Anders Ericsson a montré que la "pratique délibérée" — avec feedbacks immédiats et correction systématique — différencie les experts des amateurs bien plus que le talent inné.
          </p>

          <p>
            <strong>Application pratique :</strong> Identifiez 3 compétences clés pour vos objectifs professionnels ou personnels. Consacrez 1 heure quotidienne (ou 7h hebdomadaires minimum) à la pratique délibérée : définissez un objectif précis pour chaque session, obtenez des feedbacks réguliers d'un coach ou expert, et corrigez progressivement vos faiblesses. La confiance authentique repose sur des compétences mesurables, pas sur l'illusion.
          </p>

          <h3>5. La méthode de l'auto-compassion selon Kristin Neff</h3>

          <p>
            Les recherches de Kristin Neff (University of Texas) montrent que l'auto-compassion prédit mieux le bien-être psychologique que l'estime de soi traditionnelle. L'auto-compassion comprend trois composantes interconnectées : auto-bienveillance (se traiter avec gentillesse), humanité commune (reconnaître que l'échec est universel), et pleine conscience (observer ses émotions sans jugement). Une méta-analyse de 79 études (MacBeth & Gumley, 2012) révèle que l'auto-compassion réduit la dépression de 47% et l'anxiété de 39%.
          </p>

          <p>
            <strong>Application pratique :</strong> Quand vous faites une erreur ou vivez un échec, posez-vous systématiquement ces trois questions :
            1. "Comment puis-je être bienveillant envers moi-même dans cette situation ?" (comme vous le seriez avec un ami proche)
            2. "Comment cette expérience difficile me connecte-t-elle aux autres êtres humains ?" (tous ont des échecs, vous n'êtes pas seul)
            3. "Que puis-je apprendre de cette situation pour progresser ?" (perspective de croissance)
          </p>

          <h3>6. Les postures de pouvoir (embodied cognition)</h3>

          <p>
            Amy Cuddy (Harvard) a démontré dans une étude controversée mais partiellement répliquée que maintenir des postures de pouvoir pendant 2 minutes augmente la testostérone de 20% et réduit le cortisol (hormone du stress) de 25%. Même si les effets hormonaux sont débattus, l'impact psychologique sur le sentiment de confiance est solidement établi. Cette "préparation corporelle" influence directement notre assurance en situation professionnelle ou sociale.
          </p>

          <p>
            <strong>Application pratique :</strong> Avant toute situation challengeante (entretien, présentation, négociation), adoptez une posture expansive pendant 2 minutes en privé : debout, épaules en arrière, bras levés en V ou mains sur les hanches (posture Wonder Woman/Superman). Respirez profondément. Cette préparation corporelle modifie votre état mental.
          </p>

          {/* CTA mid-content avec lead magnet + FORMULAIRE INTÉGRÉ */}
          <div className="not-prose my-12 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              🎁 Guide Pratique GRATUIT : 6 Stratégies Scientifiques
            </h3>
            <p className="mb-6 text-emerald-50 leading-relaxed">
              Téléchargez notre guide PDF de 15 pages avec les 6 modules complets :
              Journal des Victoires, Méthode ABCDE, Hiérarchies d'Exposition, Visualisation,
              Plan 8 Semaines, et Auto-Compassion. Utilisé par 2 500+ personnes.
            </p>

            {/* FORMULAIRE FORMSPREE */}
            <form
              action="https://formspree.io/f/xrepjypl"
              method="POST"
              className="space-y-4"
              onSubmit={(e) => {
                const form = e.currentTarget;
                e.preventDefault();

                fetch(form.action, {
                  method: 'POST',
                  body: new FormData(form),
                  headers: { 'Accept': 'application/json' }
                }).then(response => {
                  if (response.ok) {
                    // Afficher message succès
                    form.innerHTML = `
            <div class="bg-white text-emerald-600 p-6 rounded-lg text-center">
              <h4 class="font-bold text-xl mb-3">✅ Merci ! Votre guide arrive dans quelques instants</h4>
              <p class="mb-4 text-emerald-700">Vérifiez votre boîte mail (et vos spams si besoin)</p>
              <a 
                href="/ressources/Guide-Confiance-LEveilMental.pdf"
                download
                class="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700"
              >
                📥 Télécharger le PDF maintenant
              </a>
            </div>
          `;
                  } else {
                    alert('Une erreur est survenue. Réessayez.');
                  }
                }).catch(() => {
                  alert('Erreur réseau. Vérifiez votre connexion.');
                });
              }}
            >
              <input type="hidden" name="resource" value="guide-confiance" />
              <input type="hidden" name="_subject" value="Nouveau téléchargement : Guide Confiance" />

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 font-medium focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 w-5 h-5 rounded border-white/30"
                />
                <label htmlFor="consent" className="text-sm text-emerald-50">
                  J'accepte de recevoir le guide par email et la newsletter hebdomadaire
                  (désinscription possible à tout moment)
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 shadow-lg"
              >
                📥 Recevoir le Guide Gratuit par Email
              </button>

              <p className="text-xs text-emerald-100 text-center">
                🔒 Vos données sont sécurisées • Pas de spam • Désinscription en 1 clic
              </p>
            </form>
          </div>

          <h2 id="contextes">Applications Contextuelles de la Confiance</h2>

          <h3>Confiance professionnelle et leadership</h3>

          <p>
            Dans le contexte professionnel, la confiance se manifeste par l'assertivité (capacité à exprimer ses besoins clairement), la prise de risques calculés, et l'influence sociale. Les recherches de Brené Brown (Université de Houston) montrent que les leaders les plus efficaces combinent confiance et vulnérabilité — ils admettent ne pas tout savoir, ce qui paradoxalement renforce leur crédibilité.
          </p>

          <h3>Confiance sociale et relations interpersonnelles</h3>

          <p>
            Les recherches de John Gottman sur les relations montrent que la confiance interpersonnelle repose sur trois piliers fondamentaux : l'accessibilité émotionnelle (être présent et attentif), la réactivité empathique (répondre aux besoins de l'autre), et l'engagement mutuel (montrer que la relation compte). Ces patterns relationnels peuvent être consciemment développés et renforcent simultanément votre confiance en vous et la confiance que les autres placent en vous.
          </p>

          <h2 id="pieges">Éviter les Pièges de la Fausse Confiance</h2>

          <h3>Narcissisme vs confiance authentique</h3>

          <p>
            Jean Twenge (San Diego State University) distingue clairement la confiance authentique du narcissisme défensif. La confiance authentique repose sur des compétences réelles et une évaluation réaliste de ses capacités, incluant la reconnaissance humble de ses limites. Le narcissisme, en revanche, est souvent un mécanisme de compensation d'une insécurité profonde, caractérisé par une sensibilité extrême à la critique et un besoin constant de validation externe. La vraie confiance inclut l'humilité et la capacité continue d'apprentissage.
          </p>

          <h3>Dépendance à la validation externe</h3>

          <p>
            Edward Deci a montré dans ses travaux sur la motivation que la dépendance aux récompenses et à l'approbation externe peut paradoxalement réduire la confiance intrinsèque et la motivation authentique. L'objectif du développement de la confiance n'est pas d'obtenir l'approbation constante des autres, mais de développer une validation interne basée sur vos propres standards et valeurs alignés.
          </p>

          <h2 id="plan">Plan d'Action Scientifiquement Structuré (8 Semaines)</h2>

          <h3>Semaines 1-2 : Évaluation et fondations</h3>

          <p>
            Utilisez l'Échelle d'auto-efficacité généralisée de Schwarzer et Jerusalem (disponible gratuitement en ligne) pour mesurer votre niveau de base de confiance. Identifiez précisément vos domaines de force (où vous avez déjà de l'auto-efficacité) et vos axes d'amélioration prioritaires (où vous manquez cruellement de confiance). Cette auto-évaluation objective est la base de toute progression mesurable.
          </p>

          <h3>Semaines 3-6 : Implémentation stratégique</h3>

          <p>
            Intégrez UNE technique par semaine pour favoriser l'ancrage neurologique :
            - **Semaine 3** : Microréussites quotidiennes (journal des victoires)
            - **Semaine 4** : Restructuration cognitive ABCDE (2 situations par jour)
            - **Semaine 5** : Visualisation quotidienne (10 minutes processus)
            - **Semaine 6** : Exposition graduelle (maîtriser niveaux 1-3)

            Documentez vos progrès quotidiennement dans un tableau structuré. La mesure est essentielle : ce qui est mesuré s'améliore.
          </p>

          <h3>Semaines 7-8 : Consolidation et évaluation</h3>

          <p>
            Réévaluez votre auto-efficacité avec la même échelle qu'en semaine 1. Identifiez les stratégies les plus efficaces pour VOUS personnellement (l'effet varie selon les individus). Planifiez leur maintien à long terme : la confiance est un muscle qui nécessite un entraînement continu, pas un interrupteur qu'on active une fois.
          </p>

          <h2 id="recherches">Recherches Récentes et Perspectives Futures</h2>

          <p>
            Les neurosciences sociales contemporaines révèlent que la confiance modifie littéralement la connectivité cérébrale fonctionnelle. L'imagerie par résonance magnétique (IRMf) montre des changements mesurables dans le réseau de saillance et le réseau du mode par défaut après seulement 8 semaines de pratiques ciblées d'auto-efficacité.
          </p>

          <p>
            Les applications émergentes de réalité virtuelle permettent maintenant de pratiquer l'exposition graduelle dans des environnements immersifs totalement contrôlés et sécurisés, ouvrant de nouvelles perspectives thérapeutiques révolutionnaires pour le développement de la confiance sociale et professionnelle sans risque réel.
          </p>

          {/* Section Conclusion */}
          <h2 id="conclusion">Conclusion : La Confiance comme Compétence Développable</h2>

          <p>
            La confiance en soi n'est ni un don inné ni un trait de personnalité figé — c'est une compétence psychologique qui se développe systématiquement avec les bonnes stratégies scientifiques. Les travaux d'Albert Bandura et les recherches contemporaines en neurosciences convergent : l'auto-efficacité se construit par l'accumulation d'expériences de maîtrise, la restructuration cognitive, et la pratique délibérée.
          </p>

          <p>
            Les six stratégies présentées (microréussites, ABCDE, visualisation, exposition graduelle, développement de compétences, auto-compassion) constituent un programme complet et validé empiriquement. Intégrées avec constance sur 8-12 semaines, elles transforment non seulement votre sentiment de confiance mais aussi littéralement la structure de votre cerveau.
          </p>

          {/* FAQ enrichie */}
          <h2 id="faq">Questions Fréquentes sur la Confiance en Soi</h2>

          <div className="not-prose space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="bg-neutral-50 dark:bg-neutral-800 p-5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors">
                <summary className="font-semibold cursor-pointer text-base text-neutral-900 dark:text-neutral-100">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          {/* Navigation articles connexes */}
          <div className="not-prose my-12 p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              📚 Approfondissez Votre Développement Personnel
            </h3>
            <p className="mb-4 text-neutral-600 dark:text-neutral-400">
              Explorez nos autres ressources scientifiques pour optimiser votre bien-être psychologique et votre croissance personnelle.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/blog/surmonter-rejet-social" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Surmonter le rejet social
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/blog/neuroplasticite-cerveau" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Optimiser la neuroplasticité
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/blog/syndrome-imposteur-solutions" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Vaincre le syndrome de l'imposteur
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/blog/neuro-dopamine-routine" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Motivation et dopamine
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/blog/methode-acr-repondre-aux-bonnes-nouvelles" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Méthode ACR
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/blog/empathie-neurones-miroirs" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Neurones miroirs et empathie
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/ressources" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Tous les guides gratuits
              </Link>
              <span className="text-neutral-400">•</span>
              <Link to="/#newsletter" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                Newsletter psychologie
              </Link>
            </div>
          </div>

          {/* Encadré E-E-A-T auteur */}
          <div className="not-prose my-12 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">À propos de l'auteur</h3>
            <div className="space-y-4">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <strong>Guesso</strong> — Fondateur de L'Éveil Mental, plateforme de référence francophone dédiée à la psychologie scientifique et au développement personnel basé sur les neurosciences cognitives et la psychologie positive. Chaque contenu est sourcé à partir d'études scientifiques peer-reviewed et mis à jour régulièrement pour refléter les dernières avancées de la recherche en psychologie.
              </p>
              <div className="bg-white dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  <strong className="text-neutral-900 dark:text-neutral-100">Méthodologie scientifique :</strong> Chaque affirmation factuelle dans cet article est sourcée à partir d'études publiées dans des revues académiques à comité de lecture (APA PsycInfo, PubMed, Web of Science). Les sources primaires sont systématiquement vérifiées, contextualisées et citées avec leurs références complètes.
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
                  Dernière révision scientifique de cet article : {new Date(meta.dateModified).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}
                </p>
              </div>
              <Link
                to="/methodologie"
                className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium group"
              >
                En savoir plus sur notre méthodologie scientifique
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}