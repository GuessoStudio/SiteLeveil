// src/articles/MethodeAcrRepondreAuxBonnesNouvelles.tsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "methode-acr-repondre-aux-bonnes-nouvelles",
  title: "La méthode ACR : répondre aux bonnes nouvelles pour renforcer les relations",
  description: "Découvrez comment la réponse active-constructive (ACR) transforme votre façon de célébrer les bonnes nouvelles et renforce durablement vos liens interpersonnels.",
  cover: "/images/articles/methode-acr-repondre-aux-bonnes-nouvelles-cover",
  datePublished: "2025-08-30T08:00:00+01:00",
  dateModified: "2025-08-30T08:00:00+01:00",
  category: "Relations Humaines",
  readingTime: "6 min",
  date: "2025-08-30",
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  tags: ["relations humaines", "communication", "ACR", "capitalisation", "Gottman", "couples"],
  version: "1.0",
  verifiedDate: "Août 2025"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que la méthode ACR (réponse active-constructive) ?",
    answer: "La réponse active-constructive (ACR) est un style de réaction aux bonnes nouvelles caractérisé par un enthousiasme authentique, des questions ouvertes, le reflet des émotions ressenties et une projection vers l'avenir. Identifié par Shelly Gable (Université de Rochester), c'est le seul style qui améliore simultanément le bien-être du partenaire et la qualité du lien relationnel."
  },
  {
    question: "Pourquoi la façon dont on réagit aux bonnes nouvelles est-elle si importante ?",
    answer: "Les études de Shelly Gable montrent que la capitalisation — partager une bonne nouvelle et recevoir une réponse appropriée — multiplie les bénéfices émotionnels de l'événement et renforce durablement le lien. Cette dynamique influence la satisfaction relationnelle parfois davantage que le soutien dans les moments difficiles."
  },
  {
    question: "Quels sont les 4 styles de réponse aux bonnes nouvelles selon la recherche ?",
    answer: "Les chercheurs identifient 4 styles : active-constructive (enthousiasme + questions ouvertes), passive-constructive (réaction brève et polie), active-destructive (souligner les risques) et passive-destructive (ignorer ou changer de sujet). Seul le style active-constructive améliore durablement la qualité relationnelle."
  },
  {
    question: "Comment appliquer la méthode ACR concrètement au quotidien ?",
    answer: "La méthode ACR se décompose en 4 étapes : 1) célébration explicite avec des formulations directes ('C'est formidable !'), 2) questions ouvertes pour explorer l'expérience ('Qu'est-ce qui t'a le plus marqué ?'), 3) reflet émotionnel pour valider l'état ressenti, et 4) projection future pour ancrer la célébration dans une perspective positive."
  },
  {
    question: "Quelle est la différence entre la réponse active-destructive et passive-destructive ?",
    answer: "La réponse active-destructive consiste à réagir en soulignant les risques ou en minimisant l'événement ('Attention, tu vas être surchargé'). La réponse passive-destructive consiste à ignorer la bonne nouvelle ou à détourner vers ses propres préoccupations. Les deux érodent progressivement la connexion relationnelle, même quand elles sont bien intentionnées."
  },
  {
    question: "Qu'est-ce que la théorie des bids de connexion de Gottman ?",
    answer: "Les 'bids' sont les micro-offres de lien émises en permanence : un regard, un message partagé, le partage d'une bonne nouvelle. Face à ces sollicitations, on peut 'tourner vers' (engagement positif), 'détourner' (ignorer) ou 'aller contre' (rejeter). Les couples durables tournent vers ces offres dans 86 % des cas, contre 33 % chez ceux qui divorcent."
  },
  {
    question: "L'ACR fonctionne-t-elle dans les relations professionnelles ?",
    answer: "Oui. En management, l'ACR transforme la reconnaissance d'une victoire d'équipe en opportunité d'apprentissage organisationnel. Célébrer le succès puis questionner le processus qui l'a produit favorise la motivation individuelle et le développement des compétences collectives, créant un cercle vertueux de partage et d'apprentissage."
  },
  {
    question: "Quelles sont les erreurs les plus courantes à éviter quand on réagit à une bonne nouvelle ?",
    answer: "Les trois erreurs principales sont : la minimisation préventive (souligner immédiatement les risques), la brièveté excessive (réaction trop courte qui signale un désintérêt), et le recentrage sur soi (ramener la conversation à ses propres expériences avant d'avoir pleinement célébré la réussite de l'autre)."
  }
];

export default function MethodeAcrRepondreAuxBonnesNouvelles() {
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
    caption: "Illustration de la méthode ACR montrant deux personnes en train de célébrer une bonne nouvelle, renforçant leur lien relationnel"
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
      name: "Réponse active-constructive et capitalisation relationnelle",
      description: "Mécanismes psychologiques de la capitalisation, styles de réponse aux bonnes nouvelles, théorie des bids de connexion de Gottman"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 1500
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
    name: "4 étapes de la méthode ACR pour renforcer les relations",
    description: "Les composantes de la réponse active-constructive validées par les recherches de Shelly Gable",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Célébration explicite",
        description: "Exprimer clairement et authentiquement sa joie avec des formulations directes ('C'est merveilleux !')"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Question ouverte",
        description: "Explorer l'expérience en profondeur avec des questions invitant au développement ('Qu'est-ce qui t'a le plus enthousiasmé ?')"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Reflet émotionnel",
        description: "Reconnaître et valider l'état émotionnel observable ('Vous devez être très fier de ce résultat')"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projection future",
        description: "Ancrer la célébration dans une perspective d'avenir ('Comment comptez-vous marquer cette réussite ?')"
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
      
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              to="/blog/"
              className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-2"
            >
              ← Retour au blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {meta.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                {meta.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-600 dark:text-neutral-400 mb-8">
                <span>Par {meta.author.name}</span>
                <span>{new Date(meta.date).toLocaleDateString('fr-FR')}</span>
                <span>{meta.readingTime} de lecture</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-12">
                <img
  src="/images/articles/methode-acr-repondre-aux-bonnes-nouvelles-og-1200x630.webp"
  alt={meta.title}
  width="1600"
  height="900" 
  className="w-full h-auto rounded-2xl"
  loading="eager"
  decoding="async"
                />
              </div>
            </div>
          </header>

          <article className="max-w-4xl mx-auto prose prose-lg prose-neutral dark:prose-invert">
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl mb-8 not-prose">
              <h2 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Points clés à retenir</h2>
              <ul className="space-y-2 text-indigo-800 dark:text-indigo-200">
                <li>• La façon dont vous réagissez aux bonnes nouvelles compte autant que votre soutien dans les moments difficiles</li>
                <li>• La réponse active-constructive (ACR) renforce significativement l'intimité et la confiance mutuelle</li>
                <li>• Les couples qui "tournent vers" les offres de connexion restent ensemble dans 86 % des cas contre 33 %</li>
                <li>• La méthode ACR se décompose en 4 étapes : célébrer, questionner, refléter, projeter</li>
              </ul>
            </div>

            <h2>L'importance méconnue de célébrer ensemble</h2>
            
            <p>
              Nous apprenons naturellement à soutenir nos proches dans l'adversité, mais peu d'entre nous maîtrisent l'art de célébrer leurs succès. Cette lacune représente pourtant une opportunité manquée considérable pour nos relations.
            </p>

            <p>
              La recherche en psychologie sociale révèle que partager une bonne nouvelle — un processus appelé "capitalisation" — et recevoir une réponse appropriée multiplie les bénéfices émotionnels pour la personne et renforce durablement le lien relationnel.
            </p>

            <p>
              Selon les études menées par Shelly Gable à l'Université de Rochester, cette dynamique influence profondément la satisfaction relationnelle, parfois davantage que notre capacité à traverser ensemble les moments difficiles. Pour les moments de désaccord, la <Link to="/blog/communication-non-violente-cnv/" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">communication non violente (CNV)</Link> offre un cadre complémentaire structuré en 4 étapes pour exprimer ses besoins sans créer de défense. La méthode ACR est l'une des 7 compétences de notre <Link to="/blog/guide-communication-interpersonnelle/" className="text-emerald-700 dark:text-emerald-400 underline hover:no-underline">guide de la communication interpersonnelle</Link>.
            </p>

            <h2>Les quatre styles de réponse aux bonnes nouvelles</h2>

            <p>
              Face à une bonne nouvelle, quatre réactions sont possibles. Chacune génère des conséquences radicalement différentes sur la relation.
            </p>

            <div className="my-8 not-prose">
              <img
                src="/images/articles/methode-acr-repondre-aux-bonnes-nouvelles-diagram-4-styles-1200x675.webp"
                alt="Diagramme des 4 styles de réponse aux bonnes nouvelles"
                width="1200"
                height="675"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3>Active-Constructive (ACR)</h3>
            <p>
              Réponse enthousiaste avec questions ouvertes, reflet d'émotion et projection vers l'avenir. 
              <strong> Exemple :</strong> "C'est formidable ! Qu'est-ce qui vous a le plus marqué dans cette expérience ? Vous devez être très fier de ce résultat."
            </p>

            <h3>Passive-Constructive</h3>
            <p>
              Réaction polie mais brève, sans engagement émotionnel profond. 
              <strong> Exemple :</strong> "C'est bien." suivi d'un changement de sujet rapide.
            </p>

            <h3>Active-Destructive</h3>
            <p>
              Souligner immédiatement les risques, minimiser l'événement ou exprimer des inquiétudes. 
              <strong> Exemple :</strong> "Attention, cela va vous surcharger de travail" ou "J'espère que vous pourrez gérer la pression."
            </p>

            <h3>Passive-Destructive</h3>
            <p>
              Ignorer l'information ou détourner la conversation vers ses propres préoccupations. 
              <strong> Exemple :</strong> "Ah bon... Au fait, moi j'ai eu une journée difficile."
            </p>

            <p>
              Les recherches contrôlées démontrent que seul le style active-constructive améliore simultanément le bien-être du partenaire et la qualité du lien relationnel. Les trois autres styles, même bien intentionnés, peuvent éroder progressivement la connexion.
            </p>

            <h2>Les fondements scientifiques de l'ACR</h2>

            <p>
              Les études longitudinales menées par l'équipe de Gable révèlent que capitaliser sur les bonnes nouvelles augmente l'affect positif, l'intimité, la satisfaction relationnelle et la confiance, produisant des bénéfices qui dépassent largement ceux de l'événement initial.
            </p>

            <p>
              La réactivité perçue du partenaire — se sentir compris, validé et soutenu — constitue un déterminant central de l'intimité selon les modèles théoriques établis en psychologie des relations. L'ACR représente une manifestation concrète et mesurable de cette réactivité.
            </p>

            <p>
              Dans le célèbre laboratoire de John Gottman, les observations de milliers de couples révèlent une différence frappante : les couples durables "tournent vers" les offres de connexion 86 % du temps, contre seulement 33 % chez ceux qui divorcent. Cette statistique souligne l'impact cumulatif des micro-interactions quotidiennes sur la stabilité relationnelle.
            </p>

            <h2>La méthode ACR en quatre étapes</h2>

            <p>
              La réponse active-constructive peut se décomposer en quatre composantes complémentaires, chacune contribuant à amplifier l'effet positif de la bonne nouvelle.
            </p>

            <h3>1. Célébration explicite</h3>
            <p>
              Exprimez clairement et authentiquement votre joie. Utilisez des formulations directes : "C'est merveilleux !", "Je suis vraiment heureux pour vous" ou "Quelle excellente nouvelle !". L'intensité de votre réaction doit correspondre à l'importance de l'événement pour la personne.
            </p>

            <h3>2. Question ouverte</h3>
            <p>
              Explorez l'expérience en profondeur avec des questions qui invitent au développement : "Qu'est-ce qui vous a le plus enthousiasmé dans ce moment ?", "Comment avez-vous ressenti cette nouvelle ?" ou "Quel aspect de cette réussite vous rend le plus fier ?".
            </p>

            <h3>3. Reflet émotionnel</h3>
            <p>
              Reconnaissez et validez l'état émotionnel observable : "Vous devez être très fier de ce résultat", "Je vois que cela vous touche profondément" ou "Votre sourire dit tout sur ce que cela représente pour vous".
            </p>

            <h3>4. Projection future</h3>
            <p>
              Ancrez la célébration dans une perspective d'avenir : "Comment comptez-vous marquer cette réussite ?", "Quelles perspectives cela ouvre-t-il pour vous ?" ou "Avec qui d'autre avez-vous hâte de partager cette nouvelle ?".
            </p>

            <h2>Application pratique immédiate</h2>

            <p>
              Pour intégrer l'ACR dans vos relations, commencez par identifier les micro-opportunités quotidiennes. Une promotion, un compliment reçu, un projet personnel accompli, ou même une simple satisfaction du moment peuvent devenir des occasions de connexion.
            </p>

            <p>
              Lors de votre prochaine interaction sociale, appliquez consciemment les quatre étapes en restant authentique dans votre enthousiasme. Observez ensuite comment cette approche modifie la dynamique de la conversation et la connexion ressentie avec la personne.
            </p>

            <p>
              L'efficacité de l'ACR réside dans sa simplicité : elle ne nécessite ni formation complexe ni ressources particulières, simplement une intention délibérée de célébrer authentiquement les succès d'autrui.
            </p>

            <h2>Les écueils à éviter</h2>

            <h3>La minimisation préventive</h3>
            <p>
              Résistez à l'impulsion de souligner immédiatement les risques ou les défis potentiels. Cette tendance, souvent motivée par un désir de protection, peut involontairement diminuer la joie du moment. Réservez l'analyse critique pour un échange ultérieur si nécessaire.
            </p>

            <h3>La brièveté excessive</h3>
            <p>
              Une réaction trop concise peut être interprétée comme un désintérêt ou une indisponibilité émotionnelle. Enrichissez votre réponse avec au moins une question ouverte qui démontre votre engagement dans l'échange.
            </p>

            <h3>Le recentrage sur soi</h3>
            <p>
              Évitez de ramener immédiatement la conversation à vos propres expériences similaires. Cette tendance naturelle peut détourner l'attention de la personne qui partage. Maintenez d'abord le focus sur son vécu avant d'établir des liens avec le vôtre.
            </p>

            <h2>ACR et théorie des "bids" de connexion</h2>

            <p>
              La théorie des "bids" développée par Gottman éclaire le mécanisme sous-jacent de l'ACR. Ces "bids" représentent les micro-offres de lien que nous émettons constamment : un regard cherchant l'attention, un message partagé, une plaisanterie, ou le partage d'une bonne nouvelle.
            </p>

            <div className="my-8 not-prose">
              <img
                src="/images/articles/methode-acr-repondre-aux-bonnes-nouvelles-diagram-bids-1200x675.webp"
                alt="Diagramme des bids de connexion selon Gottman"
                width="1200"
                height="675"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p>
              Face à ces sollicitations, trois réactions sont possibles : "tourner vers" (engagement positif), "détourner" (ignorance ou report), ou "aller contre" (rejet ou hostilité). L'ACR constitue une façon exemplaire de "tourner vers" ces offres de connexion.
            </p>

            <p>
              Les couples satisfaisants accumulent ces petits "dépôts" dans leur "compte émotionnel" relationnel par ces réponses positives répétées. Le ratio observé de 5:1 entre interactions positives et négatives chez les couples durables illustre l'importance cruciale de ces micro-moments de connexion.
            </p>

            <h2>Extensions en contexte professionnel</h2>

            <p>
              En management, l'ACR transforme la reconnaissance d'une victoire d'équipe en opportunité d'apprentissage organisationnel. Célébrer le succès puis questionner le processus qui l'a produit favorise à la fois la motivation individuelle et le développement des compétences collectives.
            </p>

            <p>
              Cette approche génère un cercle vertueux : les employés se sentent valorisés, partagent plus volontiers leurs réussites, et l'organisation apprend plus efficacement de ses succès pour les reproduire.
            </p>

            <p>
              Dans les relations amicales, remplacer un simple "Bravo !" par "Qu'est-ce qui a rendu ce projet si spécial pour toi ?" transforme un échange superficiel en moment d'approfondissement relationnel authentique.
            </p>

            <h2>Questions pour l'auto-évaluation</h2>

            <p>
              Pour développer votre compétence en ACR, interrogez-vous régulièrement sur ces dimensions :
            </p>

            <p>
              <strong>Attention spontanée :</strong> Lorsque quelqu'un me partage une bonne nouvelle, vers quoi se dirige naturellement mon attention ? Vers la célébration, l'analyse des risques, ou mes propres expériences ?
            </p>

            <p>
              <strong>Résistances internes :</strong> Quelles peurs ou réticences me poussent parfois à minimiser les succès d'autrui ? Jalousie inconsciente, prudence excessive, ou inconfort face aux émotions positives intenses ?
            </p>

            <p>
              <strong>Réactivité perçue :</strong> Sur une échelle de 0 à 10, comment mes proches évalueraient-ils ma réactivité émotionnelle et ma disponibilité pour leurs moments de joie ?
            </p>

            <p>
              <strong>Ritualisation :</strong> Quel rituel de célébration simple pourrais-je instaurer dans mes relations importantes ? Un message hebdomadaire de reconnaissance, un moment dédié aux bonnes nouvelles familiales ?
            </p>

            <h2>Perspectives et limites de l'approche</h2>

            <p>
              Bien que l'ACR soit une compétence relationnelle puissante et scientifiquement validée, son application requiert nuance et authenticité. Un enthousiasme forcé ou mécanique peut être contre-productif et créer une distance émotionnelle paradoxale.
            </p>

            <p>
              Certaines situations nécessitent un équilibre délicat : face à une bonne nouvelle qui pourrait avoir des conséquences problématiques pour la personne ou son entourage, l'art consiste à célébrer d'abord puis à introduire progressivement les considérations pratiques nécessaires.
            </p>

            <p>
              De plus, les différences culturelles dans l'expression émotionnelle doivent être prises en compte. L'intensité appropriée de la réponse ACR varie selon les contextes culturels et les personnalités individuelles.
            </p>

            <h2>Conclusion</h2>

            <p>
              La méthode ACR révèle une vérité fondamentale sur les relations humaines : notre façon de réagir aux bonnes nouvelles façonne profondément la qualité de nos liens interpersonnels. Cette découverte scientifique offre un levier d'action concret pour améliorer nos relations les plus importantes.
            </p>

            <p>
              En choisissant consciemment de faire grandir la joie de l'autre, nous enrichissons simultanément le lien qui nous unit et créons un environnement relationnel plus nourrissant pour tous les participants.
            </p>

            <p>
              Cette approche, soutenue par des décennies de recherche rigoureuse, transforme les micro-moments quotidiens en opportunités de connexion authentique. L'invitation est simple : commencez modestement, pratiquez régulièrement, et observez l'évolution progressive de vos relations les plus significatives.
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
              Ces informations sont fournies à des fins éducatives et ne remplacent pas un accompagnement psychologique ou relationnel personnalisé.
            </p>

          </article>

          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}