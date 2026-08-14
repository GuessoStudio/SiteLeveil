import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

// Define meta outside component for static reference if needed, but utilized inside for dynamic values
const meta = {
    slug: "surmonter-rejet-social",
    title: "Rejet social : ce que les neurosciences révèlent sur la douleur sociale (et comment reprogrammer le cerveau)",
    description: "Le rejet social fait-il vraiment mal comme une blessure ? Ce que montrent les neurosciences en 2026, ce que la recherche récente nuance, et 7 stratégies validées pour mieux réguler la douleur sociale.",
    cover: "/images/articles/rejet-social-cover.webp",
    datePublished: "2024-01-15T08:00:00+01:00",
    dateModified: "2026-08-10T08:00:00+02:00",
    tags: ["rejet social", "neurosciences", "amygdale", "neuroplasticité"],
    author: { name: "Guesso" },
    category: "Neurosciences",
    readingTime: "12 min",
    version: "2.0",
    verifiedDate: "Août 2026",
};

// FAQ Data extracted for cleanliness
const faqData = [
    {
        question: "Le rejet social est-il vraiment comparable à la douleur physique ?",
        answer: "En partie. Un antidouleur courant, le paracétamol, réduit la douleur du rejet : DeWall et son équipe l'ont montré en 2010 sur trois semaines. Il existe donc bien un mécanisme commun. En revanche, l'idée que le cerveau activerait exactement les mêmes zones vient d'une étude de 2003 sur 13 personnes, que la réanalyse de 53 études publiée en 2020 ne confirme pas."
    },
    {
        question: "Combien de temps faut-il pour se remettre d'un rejet social ?",
        answer: "La neuroplasticité permet des changements progressifs avec pratique régulière selon les protocoles validés (MBSR, TCC intensive). Les résultats varient selon l'intensité de la pratique, la sévérité du rejet vécu, et les ressources personnelles. La récupération est un processus individuel qui nécessite généralement plusieurs mois."
    },
    {
        question: "Pourquoi certaines personnes sont-elles plus sensibles au rejet ?",
        answer: "La sensibilité au rejet dépend de plusieurs facteurs : attachement insécure dans l'enfance, rejets passés répétés, tempérament introverti, et prédisposition génétique. Les personnes sensibles au rejet montrent une hyperactivité amygdalienne lors d'exclusion sociale."
    },
    {
        question: "Quelle est la différence entre rejet social et isolement choisi ?",
        answer: "Le rejet social est une exclusion subie et non désirée qui active les circuits de la menace. L'isolement choisi (solitude volontaire) n'active pas ces circuits et peut même être bénéfique. La clé est le contrôle perçu : choisir vs subir."
    },
    {
        question: "Le rejet social peut-il causer des dommages cérébraux permanents ?",
        answer: "Le rejet chronique est associé à des modifications structurelles cérébrales, mais ces changements ne sont pas permanents. La neuroplasticité permet une récupération avec interventions appropriées (TCC, méditation, EMDR). Le cerveau conserve sa capacité de régénération."
    },
    {
        question: "Quelles sont les thérapies les plus efficaces contre le rejet social ?",
        answer: "Les approches souvent utilisées incluent la thérapie cognitivo-comportementale (TCC), des interventions basées sur la pleine conscience, l'autocompassion, et, en cas d'événements vécus comme traumatiques, des prises en charge spécifiques (selon un professionnel). Le choix dépend du contexte, de la sévérité et de l'historique de la personne."
    },
    {
        question: "Le rejet sur les réseaux sociaux a-t-il le même impact ?",
        answer: "Oui. Les études montrent que le rejet virtuel (exclusion d'un groupe WhatsApp, être ignoré sur Instagram) active les mêmes circuits cérébraux que le rejet en personne. L'absence d'indices non-verbaux amplifie même parfois l'impact car le cerveau comble les vides avec des projections négatives."
    },
    {
        question: "Peut-on devenir complètement insensible au rejet ?",
        answer: "Non, et ce n'est pas souhaitable. Le rejet social active un système d'alerte évolutif essentiel. L'objectif n'est pas l'insensibilité mais la régulation : réduire l'hyperréactivité amygdalienne tout en maintenant une sensibilité sociale adaptative. Les approches thérapeutiques permettent cette régulation."
    }
];

export default function RejetSocial() {
    const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://leveilmental.fr";
    const url = `${site}/blog/${meta.slug}/`;
    const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;
    const coverImageUrl = `${site}${meta.cover}`;

    // ==================== SCHEMAS JSON-LD (7 schemas V2) ====================

    // 1. Person
    const schemaPerson = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${site}/a-propos/#person`,
        name: "Guesso",
        url: `${site}/a-propos/`,
        jobTitle: "Fondateur, L'Éveil Mental",
        worksFor: { "@id": `${site}#organization` }
    };

    // 2. Organization
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

    // 3. ImageObject
    const schemaImage = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: coverImageUrl,
        width: 1200,
        height: 630,
        caption: "Illustration neuroscientifique du rejet social — activation de l'amygdale et des circuits de la douleur sociale dans le cerveau humain"
    };

    // 4. BlogPosting
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
            name: "Rejet social",
            description: "Expérience d'exclusion sociale activant les circuits cérébraux de la douleur physique — amygdale, insula antérieure et cortex cingulaire antérieur"
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: meta.tags.join(", "),
        inLanguage: "fr-FR",
        articleSection: meta.category,
        wordCount: 2600
    };

    // 5. BreadcrumbList (4 niveaux)
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

    // 6. ItemList (7 stratégies)
    const schemaItemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "7 stratégies neuroscientifiques pour surmonter le rejet social",
        description: "Techniques validées par les neurosciences pour réguler la douleur sociale et reprogrammer l'amygdale",
        numberOfItems: 7,
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "L'étiquetage émotionnel (Affect Labeling)", description: "Mettre des mots précis sur ses émotions réduit l'activité de l'amygdale et active le cortex préfrontal ventrolatéral (Lieberman, UCLA)" },
            { "@type": "ListItem", position: 2, name: "La restructuration cognitive (TCC)", description: "Technique d'Aaron Beck qui combat les pensées automatiques négatives en forçant le cerveau rationnel à examiner les preuves contraires" },
            { "@type": "ListItem", position: 3, name: "La distanciation temporelle", description: "Se projeter dans le futur ('Comment je verrai ça dans 10 ans ?') réduit l'activation des circuits de douleur sociale (Kross, Michigan)" },
            { "@type": "ListItem", position: 4, name: "L'autocompassion (Self-Compassion)", description: "Se traiter avec bienveillance active le système ocytocique d'apaisement, contrairement à l'autocritique qui active le cortisol (Neff, UT Austin)" },
            { "@type": "ListItem", position: 5, name: "Diversifier ses investissements sociaux", description: "La complexité de soi (plusieurs rôles sociaux) protège contre la dépression liée au rejet selon Patricia Linville (Yale)" },
            { "@type": "ListItem", position: 6, name: "L'affirmation de ses valeurs", description: "Écrire 15 minutes sur ses valeurs fondamentales avant un stress social réduit significativement l'élévation du cortisol" },
            { "@type": "ListItem", position: 7, name: "L'exposition graduelle", description: "S'exposer volontairement à de petits rejets progressifs désensibilise l'amygdale par extinction de la peur (protocole Jia Jiang)" }
        ]
    };

    // 7. FAQPage
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
            {/* SEO Component */}
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

            <article className="prose prose-neutral dark:prose-invert mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">

                {/* ============================================ */}
                {/* HEADER SECTION */}
                {/* ============================================ */}
                <header className="not-prose mb-12">

                    {/* Fil d'Ariane */}
                    <nav aria-label="Fil d'Ariane" className="text-sm mb-6 flex items-center flex-wrap gap-2">
                        <Link to="/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                            Accueil
                        </Link>
                        <span className="text-neutral-400" aria-hidden>›</span>
                        <Link to="/blog/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                            Blog
                        </Link>
                        <span className="text-neutral-400" aria-hidden>›</span>
                        <span aria-current="page" className="text-neutral-700 dark:text-neutral-300 font-medium truncate max-w-[200px] sm:max-w-none">
                            Rejet social
                        </span>
                    </nav>

                    {/* H1 unique */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight tracking-tight">
                        Rejet social : ce que les neurosciences révèlent sur la douleur sociale
                        <span className="block text-xl sm:text-2xl mt-3 font-normal text-neutral-600 dark:text-neutral-400">
                            (et comment reprogrammer le cerveau)
                        </span>
                    </h1>

                    {/* Sous-titre / Chapô */}
                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed max-w-3xl border-l-4 border-rose-500 pl-6 italic">
                        Les mécanismes cérébraux du rejet social expliqués par les neurosciences, et 7 stratégies issues d'approches validées pour reprogrammer votre amygdale et retrouver la sérénité sociale.
                    </p>

                    {/* Métadonnées */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">G</div>
                            <span className="font-medium text-neutral-900 dark:text-neutral-200">{meta.author.name}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{meta.readingTime} de lecture</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <time dateTime={meta.datePublished}>
                            Publié le {new Date(meta.datePublished).toLocaleDateString('fr-FR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                        {meta.dateModified !== meta.datePublished && (
                            <>
                                <span className="hidden sm:inline">•</span>
                                <time dateTime={meta.dateModified} className="text-rose-600 dark:text-rose-400">
                                    Maj le {new Date(meta.dateModified).toLocaleDateString('fr-FR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </>
                        )}
                    </div>

                    {/* Tags visuels */}
                    <div className="flex flex-wrap gap-2">
                        {meta.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full text-xs font-medium border border-rose-100 dark:border-rose-900/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors cursor-default"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    {/* Signal de fraîcheur (GEO) */}
                    <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-6">
                        Version {meta.version} — {meta.verifiedDate} | Sources vérifiées août 2026
                    </div>
                </header>

                {/* QUICK ANSWER BLOCK — dans les 200 premiers mots */}
                <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
                    <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
                        <strong>En bref :</strong> le rejet social provoque une souffrance réelle et mesurable,
                        pas une simple contrariété. Un antidouleur courant réduit d'ailleurs cette souffrance,
                        preuve d'un mécanisme partagé avec la douleur physique. En revanche, l'idée répandue que
                        le cerveau activerait « exactement les mêmes zones » est aujourd'hui contestée : la plus
                        grande analyse disponible ne retrouve pas ce résultat.
                    </p>
                    <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
                        <strong>Sources :</strong> Eisenberger, UCLA, <em>Science</em>, 2003 ; DeWall et al., <em>Psychological Science</em>, 2010 ;
                        Mwilambwe-Tshilobo &amp; Spreng, <em>NeuroImage</em>, 2020.
                    </p>
                </div>

                {/* StatBlock — la méta-analyse qui nuance le consensus */}
                <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">1&nbsp;817</div>
                        <div>
                            <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                                participants, répartis sur 53 études, ont été réanalysés ensemble en 2020. Résultat :
                                aucune activation fiable de la zone cérébrale de la douleur physique lors d'une exclusion sociale.
                                Moins d'une étude sur sept y trouvait un pic d'activité.
                            </p>
                            <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                                Mwilambwe-Tshilobo L. &amp; Spreng R.N., McGill University, <em>NeuroImage</em>, 2020 — DOI : 10.1016/j.neuroimage.2020.117666
                            </p>
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* STATISTIQUE HERO VISUELLE (ULTRA SAFE) */}
                {/* ============================================ */}
                <div className="not-prose my-12 relative overflow-hidden rounded-3xl shadow-xl transform hover:scale-[1.01] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-pink-700"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.png')]"></div> {/* Texture noise optionnelle */}
                    <div className="relative p-8 md:p-12 text-white text-center">
                        <div className="text-2xl md:text-4xl font-bold mb-6 font-serif tracking-wide">
                            Être exclu par un ordinateur suffit à faire mal
                        </div>
                        <p className="text-lg md:text-xl mb-6 font-light max-w-2xl mx-auto opacity-90">
                            Des participants à qui on avait dit clairement qu'ils jouaient contre une machine,
                            et non contre des humains, ont quand même vu chuter leur sentiment d'appartenance,
                            de contrôle et leur estime de soi. Le cerveau réagit avant de raisonner.
                        </p>
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wider uppercase">
                            Zadro, Williams &amp; Richardson, 2004
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* INTRODUCTION */}
                {/* ============================================ */}
                <p className="lead text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-8">
                    Ce regard détourné dans l'open space. Cette invitation de groupe dont vous êtes exclu.
                    Ces messages laissés sans réponse. Le rejet social n'est pas "juste dans votre tête" :
                    c'est une <strong className="font-semibold text-rose-600 dark:text-rose-400">réponse biologique mesurable</strong>,
                    que le corps traite comme une véritable blessure.
                </p>

                <p>
                    La preuve la plus frappante ne vient pas d'un scanner, mais d'une boîte de médicaments.
                    En 2010, une équipe menée par <strong>Nathan DeWall</strong> (University of Kentucky, États-Unis)
                    a donné du paracétamol à des volontaires pendant trois semaines. Un simple antidouleur,
                    celui qu'on prend pour un mal de tête. Chaque soir, ils notaient à quel point ils s'étaient
                    sentis blessés dans leurs relations. Chez ceux qui prenaient le médicament, cette souffrance
                    a diminué. Pas chez ceux qui recevaient un placebo.
                </p>

                <p>
                    Autrement dit : la douleur du rejet répond à un antidouleur. Il y a donc bien quelque chose
                    de commun entre les deux souffrances.
                </p>

                <p>
                    Reste une nuance que la plupart des articles sur le sujet passent sous silence, et elle est
                    importante. On lit partout que le rejet activerait <em>exactement</em> les mêmes zones du
                    cerveau qu'une brûlure. Cette idée vient d'une étude de 2003 devenue célèbre. Elle portait
                    sur <strong>13 personnes</strong>. En 2020, deux chercheurs de l'université McGill ont
                    rassemblé 53 études sur la question, soit 1 817 participants, et n'ont pas retrouvé ce
                    résultat. Le mécanisme partagé existe, mais sa localisation précise dans le cerveau reste
                    une question ouverte.
                </p>

                <p>
                    Cet article part de ce que la recherche établit vraiment, puis présente
                    <strong> 7 stratégies issues d'approches validées</strong> pour mieux réguler cette douleur.
                    Les résultats varient selon les personnes et l'intensité de la pratique.
                </p>

                {/* ============================================ */}
                {/* TABLE DES MATIÈRES */}
                {/* ============================================ */}
                <nav className="not-prose my-12 bg-neutral-50 dark:bg-neutral-800/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-4">
                        <span className="text-2xl">📑</span> Dans cet article
                    </h2>
                    <ol className="space-y-4">
                        {[
                            { id: "#definition", title: "Qu'est-ce que le rejet social : définition neuroscientifique" },
                            { id: "#mecanismes", title: "Que se passe-t-il dans le cerveau lors d'un rejet ?" },
                            { id: "#types", title: "Quelles sont les différentes formes de rejet social ?" },
                            { id: "#consequences", title: "Quelles conséquences le rejet a-t-il sur la santé ?" },
                            { id: "#strategies", title: "Les 7 stratégies issues d'approches validées" },
                            { id: "#neuroplasticite", title: "Peut-on se reconstruire après un rejet ?" },
                            { id: "#faq", title: "Questions fréquentes" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 group">
                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-bold mt-0.5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                    {idx + 1}
                                </span>
                                <a href={item.id} className="text-neutral-600 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 font-medium transition-colors underline-offset-2 decoration-rose-200 hover:underline">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* ============================================ */}
                {/* DÉFINITION ZÉRO JARGON */}
                {/* ============================================ */}
                <div className="not-prose my-10 bg-blue-50 dark:bg-blue-950/20 p-6 md:p-8 rounded-2xl border-l-8 border-blue-500 shadow-sm">
                    <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                        💡 En résumé (définition simple)
                    </h3>
                    <p className="text-blue-900 dark:text-blue-100 font-medium leading-relaxed mb-4">
                        Le rejet social, c'est quand votre cerveau interprète une exclusion sociale
                        comme une <strong>menace vitale</strong>. Il active alors les <strong>mêmes
                            circuits cérébraux que la douleur physique</strong> — ce qui explique pourquoi
                        "ça fait si mal".
                    </p>
                    <div className="flex items-center gap-3 bg-white/50 dark:bg-black/20 p-4 rounded-xl">
                        <span className="text-2xl">🧠</span>
                        <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold m-0">
                            La bonne nouvelle ? Ces circuits peuvent être <em>reconditionnés</em> grâce
                            à la neuroplasticité. Votre cerveau peut apprendre à réagir différemment.
                        </p>
                    </div>
                </div>

                {/* ============================================ */}
                {/* H2 #1 : DÉFINITION SCIENTIFIQUE */}
                {/* ============================================ */}
                <h2 id="definition" className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="text-rose-600">1.</span> Qu'est-ce que le rejet social ?
                </h2>

                <p>
                    Le rejet social, c'est l'expérience d'être exclu, ignoré ou mis à l'écart par un groupe.
                    Le cerveau le traite comme une menace pour la survie, pas comme une simple contrariété.
                    Et cette souffrance se mesure.
                </p>

                <p>
                    La démonstration la plus nette tient en une expérience simple. En 2010, l'équipe de
                    <strong> Nathan DeWall</strong> (University of Kentucky, États-Unis) a donné du paracétamol
                    à des volontaires pendant trois semaines. Leur sentiment d'être blessé dans leurs relations
                    a baissé. Le groupe placebo n'a rien vu changer. Un antidouleur ordinaire agit donc sur
                    la douleur sociale.
                </p>

                <p>
                    L'origine de cette idée remonte à 2003 et aux travaux de <strong>Naomi Eisenberger</strong>
                    et <strong>Matthew Lieberman</strong> (UCLA), publiés dans <em>Science</em>. Leur scanner
                    montrait que l'exclusion allumait les régions associées à la douleur physique. Prudence
                    toutefois : ils avaient étudié 13 personnes, et une réanalyse de 53 études parue en 2020
                    n'a pas confirmé ce point précis (voir plus bas).
                </p>

                <h3>Le besoin d'appartenance : un impératif évolutif</h3>

                <p>
                    <strong>Nathan DeWall</strong> (University of Kentucky) explique que le besoin d'appartenance
                    est aussi fondamental à la nature humaine que le besoin de nourriture et d'eau. Ce n'est pas
                    une faiblesse psychologique — c'est un <em>système d'alerte évolutif</em>.
                </p>

                <p>
                    Il y a 200 000 ans, être exclu du groupe signifiait une mort quasi certaine : pas de protection
                    contre les prédateurs, pas d'accès aux ressources, impossibilité de se reproduire. Notre cerveau
                    a donc développé un <strong>système d'alarme hypersensible</strong> au rejet social.
                    Problème : ce système fonctionne toujours aujourd'hui avec la même intensité, alors que
                    l'exclusion sociale moderne ne menace plus notre survie physique immédiate.
                </p>

                <div className="not-prose my-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl border-l-4 border-neutral-400 dark:border-neutral-600 shadow-sm">
                    <p className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                        🔍 Concrètement dans votre vie :
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                        Quand vous êtes ignoré dans une conversation de groupe, votre amygdale réagit
                        <em>exactement</em> comme si vous étiez physiquement menacé. Votre rythme cardiaque
                        s'accélère, votre cortisol monte en flèche, et votre système immunitaire se prépare
                        à combattre... une menace qui n'existe pas physiquement. C'est pourquoi un simple
                        "vu" sans réponse peut vous angoisser pendant des heures.
                    </p>
                </div>

                <h3>Distinction : rejet réel vs rejet perçu</h3>

                <p>
                    Il existe une différence cruciale entre le <strong>rejet réel</strong> (exclusion
                    délibérée observable) et le <strong>rejet perçu</strong> (interprétation subjective
                    d'une situation ambiguë). Les personnes ayant vécu des rejets répétés développent
                    un <em>biais cognitif de sensibilité au rejet</em> : elles interprètent des signaux
                    neutres comme hostiles.
                </p>

                <p>
                    Par exemple, si un collègue ne vous dit pas bonjour le matin, une personne sensible
                    au rejet interprétera immédiatement : "Il m'en veut, je l'ai vexé". En réalité,
                    il était peut-être simplement préoccupé ou n'a pas remarqué votre présence.
                    Cette hypervigilance est maintenue par l'<strong>amygdale en état d'alerte permanent</strong>.
                </p>

                {/* ============================================ */}
                {/* H2 #2 : MÉCANISMES NEUROSCIENTIFIQUES */}
                {/* ============================================ */}
                <h2 id="mecanismes" className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="text-rose-600">2.</span> Que se passe-t-il dans le cerveau lors d'un rejet ?
                </h2>

                <p>
                    Le rejet social active un <strong>circuit neuronal complexe</strong> impliquant l'amygdale
                    (détection de menace), le cortex préfrontal (régulation émotionnelle), l'insula antérieure
                    (perception de la douleur sociale), et l'hypothalamus (réponse au stress). Une exposition
                    chronique au rejet reconfigure ces circuits de manière durable mais réversible.
                </p>

                <p>
                    Comprendre ces mécanismes n'est pas de la simple curiosité scientifique — c'est la clé
                    pour identifier <em>où agir</em> thérapeutiquement. Chaque région cérébrale impliquée
                    peut être ciblée par des interventions spécifiques.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-700">
                        <div className="text-3xl mb-3">🚨</div>
                        <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Amygdale</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Le détecteur de fumée. Elle s'allume instantanément pour signaler "DANGER" lors d'un rejet.</p>
                    </div>
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-700">
                        <div className="text-3xl mb-3">🛑</div>
                        <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Cortex Préfrontal</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Le frein. Il devrait calmer l'amygdale, mais est souvent désactivé lors d'un stress social intense.</p>
                    </div>
                </div>

                <h3>L'amygdale en hypervigilance chronique</h3>

                <p>
                    L'amygdale est le <strong>système d'alerte du cerveau</strong>. Située dans le lobe temporal,
                    cette structure en forme d'amande (d'où son nom) évalue en permanence les stimuli sociaux
                    pour détecter les menaces potentielles. Lors d'un rejet social, l'amygdale s'active
                    immédiatement et massivement.
                </p>

                <p>
                    <strong>Magnus Tillfors</strong> et son équipe (2001) ont utilisé la tomographie par émission
                    de positons (TEP) pour observer le cerveau de personnes souffrant d'anxiété sociale.
                    Résultat : lors d'une <strong>prise de parole publique stressante</strong>, leur amygdale
                    montrait une suractivation significativement plus élevée que les sujets témoins.
                    Bien que cette étude porte sur l'anxiété sociale plutôt que le rejet interpersonnel direct,
                    elle illustre l'<strong>hyperréactivité amygdalienne aux menaces sociales</strong>.
                </p>

                <p>
                    Des études chez l'animal suggèrent que certains circuits cérébraux impliquant l'aire
                    tegmentale ventrale et l'amygdale basolatérale jouent un rôle dans la réponse au stress social.
                    Cette activité peut devenir <em>exagérée</em> en cas d'exposition chronique, maintenant
                    l'amygdale dans un état d'hypervigilance permanente après des rejets répétés.
                </p>

                <h3>Le cortex préfrontal dysfonctionnel</h3>

                <p>
                    Le <strong>cortex préfrontal médian</strong>, situé juste derrière votre front, est
                    responsable de la régulation émotionnelle et de l'évaluation objective des situations sociales.
                    C'est lui qui devrait dire à l'amygdale : "Stop, pas de danger réel ici".
                </p>

                <p>
                    Problème : lors d'un rejet social, cette région montre une <strong>activation réduite</strong>.
                    Les travaux d'<strong>Eisenberger</strong> (2003) démontrent que le cortex préfrontal médian
                    s'active lors de l'anticipation de résultats sociaux. Quand on anticipe des réponses négatives,
                    cette zone déclenche un <em>stress anticipatoire</em> — même en l'absence de menace réelle.
                </p>

                <h3>La "douleur sociale" : ce qui est établi et ce qui ne l'est pas</h3>

                <p>
                    C'est le point le plus mal expliqué du sujet, et il mérite qu'on prenne le temps.
                    En 2003, <strong>Naomi Eisenberger</strong> (UCLA, États-Unis) a fait jouer des volontaires
                    à un jeu de balle virtuel appelé Cyberball. Au bout d'un moment, les autres joueurs cessaient
                    de leur envoyer la balle. Pendant ce temps, un scanner enregistrait leur activité cérébrale.
                </p>

                <p>
                    Les zones qui s'allumaient étaient celles qu'on associe à la douleur physique. D'où la formule
                    devenue célèbre : le rejet ferait littéralement mal. Le hic, c'est que l'étude portait
                    sur <strong>13 personnes</strong>, ce qui est très peu.
                </p>

                <p>
                    En 2020, deux chercheurs de l'université McGill (Canada) ont voulu vérifier. Ils ont rassemblé
                    53 études utilisant ce même jeu et réanalysé l'ensemble d'un coup. Le résultat n'a pas tenu :
                    la fameuse zone de la douleur ne ressort pas de façon fiable. Ce qui ressort, ce sont plutôt
                    les régions que le cerveau mobilise quand on rumine et qu'on repense à soi.
                </p>

                <p>
                    Que faut-il en conclure ? Que la souffrance est réelle, ça personne ne le conteste.
                    Mais l'image du cerveau qui confondrait un rejet et une brûlure est une simplification.
                    Ce qui se joue ressemble davantage à une machine à ressasser qui s'emballe.
                </p>

                <p>
                    Plus troublant encore : des études suggèrent que l'<em>acétaminophène</em>
                    (Tylenol), un simple antidouleur, pourrait réduire non seulement la douleur physique mais aussi
                    la <strong>douleur émotionnelle du rejet social</strong> en modulant l'activité de l'insula.
                    Ces résultats sont à interpréter avec prudence et nécessitent davantage de recherches pour
                    être pleinement confirmés. Le cerveau utiliserait des neurotransmetteurs similaires pour
                    les deux types de douleur.
                </p>

                {/* DISCLAIMER TYLENOL */}
                <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500">
                    <p className="text-sm text-amber-900 dark:text-amber-200 flex gap-3">
                        <span className="text-2xl mt-1">⚠️</span>
                        <span>
                            <strong>Note médicale importante :</strong> Cette information est fournie à
                            titre scientifique uniquement. N'utilisez jamais d'antalgiques pour gérer une
                            souffrance émotionnelle sans avis médical. La douleur sociale nécessite une
                            prise en charge psychologique, pas médicamenteuse.
                        </span>
                    </p>
                </div>

                {/* StatBlock — l'essai paracétamol */}
                <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">3&nbsp;sem.</div>
                        <div>
                            <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                                de paracétamol quotidien ont suffi à faire baisser la douleur sociale rapportée chaque soir
                                par les participants. Le groupe placebo, lui, n'a rien vu changer. C'est l'argument le plus
                                solide en faveur d'un mécanisme commun aux deux douleurs.
                            </p>
                            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                                DeWall C.N. et al., University of Kentucky, <em>Psychological Science</em>, 21(7), 2010 — DOI : 10.1177/0956797610374741
                            </p>
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* H2 #3 : LES DIFFÉRENTES FORMES DE REJET */}
                {/* ============================================ */}
                <h2 id="types" className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="text-rose-600">3.</span> Quelles sont les différentes formes de rejet social ?
                </h2>

                <p>
                    Le rejet ne se manifeste pas toujours par une rupture éclatante ou un licenciement brutal.
                    Les psychologues sociaux distinguent généralement deux grandes catégories :
                </p>

                <ul className="list-disc pl-6 space-y-4">
                    <li>
                        <strong>Le rejet explicite :</strong> Il est clair et verbalisé. Une rupture amoureuse, un refus de candidature, une moquerie directe.
                        Bien que brutal, il a l'avantage d'être "clair" pour le cerveau, permettant d'entamer le processus de deuil.
                    </li>
                    <li>
                        <strong>Le rejet implicite (Ostracisme) :</strong> C'est le "traitement silencieux". Être ignoré, exclu des conversations, "oublié" dans les invitations.
                        Les recherches de <strong>Kipling Williams</strong> montrent que l'ostracisme est souvent <em>plus</em> douloureux que le rejet explicite car il menace notre sentiment d'existence même ("Suis-je invisible ?").
                    </li>
                </ul>

                {/* ============================================ */}
                {/* H2 #4 : CONSÉQUENCES SUR LE CERVEAU ET LE CORPS */}
                {/* ============================================ */}
                <h2 id="consequences" className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="text-rose-600">4.</span> Quelles conséquences le rejet a-t-il sur la santé ?
                </h2>

                <p>
                    Au-delà de la douleur immédiate, le rejet social déclenche une
                    <strong>cascade physiologique</strong> destinée à gérer la crise.
                </p>

                {/* StatBlock — mortalité et isolement durable */}
                <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">+29&nbsp;%</div>
                        <div>
                            <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                                de risque de mourir plus tôt chez les personnes socialement isolées. Le chiffre vient
                                du regroupement de 70 études. Attention à ce qu'il dit exactement : il porte sur
                                l'isolement installé dans la durée, pas sur un rejet ponctuel. C'est l'enjeu du rejet
                                répété, celui qui finit par couper des autres.
                            </p>
                            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                                Holt-Lunstad J. et al., Brigham Young University, <em>Perspectives on Psychological Science</em>, 10(2), 2015 — DOI : 10.1177/1745691614568352
                            </p>
                        </div>
                    </div>
                </div>

                <h3>La cascade hormonale et l'inflammation</h3>

                <p>
                    <strong>George Slavich</strong> et <strong>Michael Irwin</strong> (2014) ont documenté
                    le lien entre stress social et inflammation. Lors d'un rejet, l'hypothalamus active
                    l'axe hypothalamo-hypophyso-surrénalien (HHS), provoquant une libération massive de
                    <strong>cortisol</strong>, l'hormone du stress.
                </p>

                <p>
                    Le cortisol chroniquement élevé a trois effets délétères :
                </p>

                <ul className="list-disc pl-6 space-y-2 marker:text-rose-500">
                    <li><strong>Inflammation cérébrale</strong> : augmentation des cytokines pro-inflammatoires
                        (IL-6, TNF-alpha) qui perturbent les connexions neuronales</li>
                    <li><strong>Modifications structurelles</strong> : le rejet chronique est associé à des
                        changements dans l'hippocampe et d'autres régions impliquées dans la régulation émotionnelle</li>
                    <li><strong>Affaiblissement immunitaire</strong> : paradoxalement, le cortisol chronique
                        supprime la réponse immunitaire normale tout en maintenant l'inflammation cérébrale</li>
                </ul>

                <p>
                    Psychologiquement, cela se traduit souvent par la "spirale de rumination" décrite par Susan Nolen-Hoeksema :
                    ressasser l'événement en boucle, ce qui maintient le cortisol élevé et empêche la guérison.
                </p>


                {/* ============================================ */}
                {/* H2 #5 : LES 7 STRATÉGIES SCIENTIFIQUES */}
                {/* ============================================ */}
                <h2 id="strategies" className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="text-rose-600">5.</span> Les 7 stratégies issues d'approches validées
                </h2>

                <p className="mb-8">
                    La neuroplasticité est votre meilleure alliée : votre cerveau peut apprendre à mieux réguler la douleur sociale.
                    Voici 7 approches validées pour calmer l'amygdale et réengager le cortex préfrontal.
                </p>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">1. L'étiquetage émotionnel ("Affect Labeling")</h3>
                        <p>
                            <strong>La science :</strong> Matthew Lieberman a démontré que le simple fait de mettre des mots sur ses émotions ("Je me sens rejeté et en colère")
                            diminue l'activité de l'amygdale et augmente celle du cortex préfrontal ventrolatéral.
                        </p>
                        <p><strong>Action :</strong> Ne dites pas "ça va". Écrivez ou dites exactement ce que vous ressentez. Soyez précis. "Je ressens de l'humiliation dans ma poitrine".</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">2. La restructuration cognitive (TCC)</h3>
                        <p>
                            <strong>La science :</strong> Développée par Aaron Beck, cette technique combat les pensées automatiques ("Je suis nul").
                            Elle force le cerveau rationnel à examiner les preuves, calmant ainsi le système d'alarme émotionnel.
                        </p>
                        <p><strong>Action :</strong> Notez la pensée "Je suis nul" et cherchez 3 preuves concrètes du contraire dans votre passé.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">3. La distanciation temporelle</h3>
                        <p>
                            <strong>La science :</strong> Ethan Kross a montré que se projeter dans le futur ("Comment je verrai ça dans 10 ans ?") réduit l'activation de la douleur sociale.
                        </p>
                        <p><strong>Action :</strong> Imaginez-vous dans 1 an. Ce rejet aura-t-il encore la même importance ? Probablement pas.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">4. L'autocompassion (Self-Compassion)</h3>
                        <p>
                            <strong>La science :</strong> Kristin Neff a prouvé que se traiter avec bienveillance active le système ocytocique (apaisement),
                            contrairement à l'autocritique qui active le système de menace (cortisol).
                        </p>
                        <p><strong>Action :</strong> Parlez-vous comme à un ami cher. "C'est difficile en ce moment, c'est normal d'avoir mal, mais je suis là pour toi."</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">5. Diversifier ses "investissements sociaux"</h3>
                        <p>
                            <strong>La science :</strong> Comme en finance, ne mettez pas tout votre "capital estime de soi" sur une seule relation.
                            Patricia Linville a montré que la "complexité de soi" (avoir plusieurs rôles : ami, sportif, collègue...) protège de la dépression.
                        </p>
                        <p><strong>Action :</strong> Si vous êtes rejeté au travail, investissez plus de temps dans votre club de sport ou votre famille cette semaine.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">6. L'affirmation de ses valeurs</h3>
                        <p>
                            <strong>La science :</strong> Une étude célèbre a montré que passer 15 minutes à écrire sur ses valeurs fondamentales avant un stress social
                            réduit significativement l'élévation du cortisol.
                        </p>
                        <p><strong>Action :</strong> Listez vos 3 valeurs principales (honnêteté, créativité, courage...) et écrivez pourquoi elles sont importantes pour vous.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">7. L'exposition graduelle (Jia Jiang)</h3>
                        <p>
                            <strong>La science :</strong> S'exposer volontairement à de petits rejets désensibilise l'amygdale (extinction de la peur).
                        </p>
                        <p><strong>Action :</strong> Demandez des choses simples et respectueuses, dans des contextes appropriés (ex: "Un café gratuit ?") pour vous habituer à entendre "Non". <em className="text-sm block mt-1 opacity-70">Attention : ne vous mettez pas en danger et maintenez une approche respectueuse.</em></p>
                    </div>
                </div>

                {/* ============================================ */}
                {/* H2 #6 : NEUROPLASTICITÉ ET CROISSANCE (Celle d'avant "Transformer le rejet") */}
                {/* ============================================ */}
                <h2 id="neuroplasticite" className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="text-rose-600">6.</span> Peut-on se reconstruire après un rejet ?
                </h2>

                <p>
                    Le paradoxe du rejet est qu'il peut devenir un catalyseur de développement personnel.
                    Les recherches sur la <strong>croissance post-traumatique</strong> montrent que les expériences difficiles,
                    lorsqu'elles sont traitées constructivement (avec les stratégies ci-dessus), peuvent renforcer la résilience "câblée" dans le cerveau.
                </p>

                <p>
                    Chaque fois que vous calmez votre amygdale consciemment après un rejet, vous renforcez les connexions synaptiques
                    entre votre cortex préfrontal et vos centres émotionnels. Vous devenez littéralement <strong>plus robuste neurologiquement</strong>.
                    L'enjeu n'est pas d'éviter le rejet (impossible) mais de développer un cerveau capable de le naviguer avec grâce.
                </p>

                {/* ============================================ */}
                {/* ENCADRÉ "À RETENIR" */}
                {/* ============================================ */}
                <div className="not-prose my-16 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-8 rounded-2xl border-l-4 border-rose-500 shadow-sm">
                    <h2 className="text-xl font-bold text-rose-900 dark:text-rose-100 mb-6 flex items-center gap-2">
                        💡 À retenir
                    </h2>
                    <ul className="space-y-4 text-rose-800 dark:text-rose-200">
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-800 flex items-center justify-center text-rose-700 dark:text-rose-100 font-bold text-xs mt-0.5">✓</span>
                            <span><strong>La douleur du rejet répond à un antidouleur</strong> : trois semaines de
                                paracétamol la font baisser, un placebo non (DeWall et al., 2010). Le mécanisme
                                partagé avec la douleur physique est donc réel</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-800 flex items-center justify-center text-rose-700 dark:text-rose-100 font-bold text-xs mt-0.5">✓</span>
                            <span><strong>L'amygdale reste en hypervigilance chronique</strong> après rejets répétés,
                                avec une hyperactivité mesurée dans plusieurs études sur l'anxiété sociale</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-800 flex items-center justify-center text-rose-700 dark:text-rose-100 font-bold text-xs mt-0.5">✓</span>
                            <span><strong>Le cerveau réagit avant de raisonner</strong> : savoir qu'on est exclu
                                par une machine, et non par des humains, n'empêche pas la chute du sentiment
                                d'appartenance et de l'estime de soi (Zadro, Williams et Richardson, 2004)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-200 dark:bg-rose-800 flex items-center justify-center text-rose-700 dark:text-rose-100 font-bold text-xs mt-0.5">✓</span>
                            <span><strong>La neuroplasticité permet de reconditionner ces circuits</strong>
                                selon les protocoles validés (TCC, méditation, EMDR) avec pratique régulière</span>
                        </li>
                    </ul>
                </div>

                {/* ============================================ */}
                {/* BOUTONS DE PARTAGE SOCIAL */}
                {/* ============================================ */}
                <div className="not-prose my-16 text-center border-t border-b border-neutral-100 dark:border-neutral-800 py-12">
                    <h3 className="text-xl font-bold mb-8 text-neutral-900 dark:text-white">
                        Cet article vous a aidé ? Partagez-le 💫
                    </h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(meta.title)}&url=${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 bg-[#1DA1F2] text-white px-6 py-3 rounded-xl hover:bg-[#1a91da] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/30"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            Twitter
                        </a>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-xl hover:bg-[#006399] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-700/30"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-xl hover:bg-[#166fe5] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            Facebook
                        </a>
                    </div>
                </div>

                {/* ============================================ */}
                {/* SOURCES SCIENTIFIQUES */}
                {/* ============================================ */}
                <section className="not-prose my-12 bg-neutral-100 dark:bg-neutral-900 p-8 rounded-2xl">
                    <h2 className="text-xl font-bold mb-6 text-neutral-900 dark:text-neutral-200 flex items-center gap-2">
                        📚 Sources scientifiques
                    </h2>
                    <ul className="text-sm space-y-4 text-neutral-600 dark:text-neutral-400">
                        {[
                            "[1] Eisenberger, N.I., Lieberman, M.D., Williams, K.D. (2003). Does Rejection Hurt? An fMRI Study of Social Exclusion. Science, 302(5643), 290-292. DOI : 10.1126/science.1089134 — étude fondatrice, 13 participants.",
                            "[2] Mwilambwe-Tshilobo, L., Spreng, R.N. (2020). Social exclusion reliably engages the default network: A meta-analysis of Cyberball. NeuroImage, 227, 117666. DOI : 10.1016/j.neuroimage.2020.117666 — 53 études, 1 817 participants ; ne retrouve pas l'activation du cortex cingulaire antérieur dorsal.",
                            "[3] DeWall, C.N., MacDonald, G., Webster, G.D., et al. (2010). Acetaminophen reduces social pain: Behavioral and neural evidence. Psychological Science, 21(7), 931-937. DOI : 10.1177/0956797610374741",
                            "[4] Zadro, L., Williams, K.D., Richardson, R. (2004). How low can you go? Ostracism by a computer is sufficient to lower self-reported levels of belonging, control, self-esteem, and meaningful existence. Journal of Experimental Social Psychology, 40(4), 560-567. DOI : 10.1016/j.jesp.2003.10.006",
                            "[5] Williams, K.D. (2007). Ostracism. Annual Review of Psychology, 58, 425-452. DOI : 10.1146/annurev.psych.58.110405.085641",
                            "[6] Holt-Lunstad, J., Smith, T.B., Baker, M., Harris, T., Stephenson, D. (2015). Loneliness and Social Isolation as Risk Factors for Mortality: A Meta-Analytic Review. Perspectives on Psychological Science, 10(2), 227-237. DOI : 10.1177/1745691614568352 — 70 études.",
                            "[7] Slavich, G.M., Irwin, M.R. (2014). From Stress to Inflammation and Major Depressive Disorder: A Social Signal Transduction Theory of Depression. Psychological Bulletin, 140(3), 774-815. DOI : 10.1037/a0035302",
                            "[8] Lieberman, M.D., et al. (2007). Putting feelings into words: affect labeling disrupts amygdala activity in response to affective stimuli. Psychological Science, 18(5), 421-428. DOI : 10.1111/j.1467-9280.2007.01916.x",
                            "[9] Tillfors, M., Furmark, T., Marteinsdottir, I., et al. (2001). Cerebral blood flow in subjects with social phobia during stressful speaking tasks. Psychiatry Research: Neuroimaging, 106(2), 85-97. DOI : 10.1016/S0925-4927(00)00089-4"
                        ].map((source, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="text-neutral-400 select-none">•</span>
                                <span>{source}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ============================================ */}
                {/* FAQ - SCHEMA OPTIMIZÉ */}
                {/* ============================================ */}
                <section id="faq" className="not-prose my-16">
                    <h2 className="text-3xl font-bold mb-10 text-center text-neutral-900 dark:text-white">
                        Questions fréquentes <span className="text-rose-600">sur le rejet social</span>
                    </h2>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqData.map((item, index) => (
                            <details
                                key={index}
                                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm group transition-all duration-300 open:shadow-md"
                            >
                                <summary className="font-bold text-lg cursor-pointer text-neutral-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors list-none flex items-center justify-between">
                                    <span>{item.question}</span>
                                    <span className="bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full p-1 transition-transform group-open:rotate-180">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                </summary>
                                <div className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-700 pt-4">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================ */}
                {/* AUTEUR BOX (E-E-A-T) */}
                {/* ============================================ */}
                <section className="not-prose my-16 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-3xl border border-indigo-100 dark:border-indigo-900/30">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                        <div className="bg-indigo-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-3xl shadow-lg shadow-indigo-200 dark:shadow-none flex-shrink-0">
                            G
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">
                                À propos de l'auteur
                            </h3>
                            <p className="text-indigo-800 dark:text-indigo-200 mb-4 leading-relaxed max-w-2xl">
                                <strong>Guesso</strong> — Fondateur de L'Éveil Mental, passionné par les neurosciences
                                et la psychologie scientifique. Tous les articles sont rédigés dans un objectif éducatif,
                                basés sur des recherches peer-reviewed et des sources scientifiques vérifiables.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <Link to="/a-propos/" className="px-4 py-2 bg-white dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors border border-indigo-200 dark:border-indigo-800">
                                    En savoir plus
                                </Link>
                                <Link to="/contact/" className="px-4 py-2 bg-transparent text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-semibold hover:bg-indigo-100/50 transition-colors border border-transparent hover:border-indigo-200">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articles connexes */}
                <div className="not-prose my-12 p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                        📚 Approfondissez Vos Connaissances
                    </h3>
                    <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        Explorez nos autres ressources scientifiques sur les relations sociales et la communication.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Link to="/blog/methode-acr-repondre-aux-bonnes-nouvelles/" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">
                            Méthode ACR : renforcer les liens
                        </Link>
                        <span className="text-neutral-400">•</span>
                        <Link to="/blog/empathie-neurones-miroirs-connexion-humaine/" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">
                            Neurones miroirs et empathie
                        </Link>
                        <span className="text-neutral-400">•</span>
                        <Link to="/blog/influence-sociale-conformisme/" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">
                            Influence sociale et conformisme
                        </Link>
                    </div>
                </div>

                {/* ============================================ */}
                {/* CTA FINAL */}
                {/* ============================================ */}
                <div className="not-prose mt-20 mb-12 bg-gray-900 dark:bg-black text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-4xl font-bold mb-6">
                            Ne laissez plus le rejet dicter vos émotions
                        </h3>
                        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                            Rejoignez la newsletter L'Éveil Mental. Recevez chaque semaine nos outils pratiques et insights neuroscientifiques
                            pour transformer votre cerveau et retrouver la sérénité.
                        </p>
                        {/* ACTION PLACEHOLDER - TO BE REPLACED BY USER */}
                        <form action="YOUR_MAILCHIMP_URL_HERE" method="post" target="_blank" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre email..."
                                className="flex-1 px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-rose-500/30"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-rose-600 px-8 py-4 rounded-xl font-bold text-white hover:bg-rose-500 transition-colors shadow-lg shadow-rose-900/20 whitespace-nowrap"
                            >
                                Rejoindre
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-6">
                            100% gratuit. Désabonnement en 1 clic. Pas de spam.
                        </p>
                    </div>
                </div>

            </article>
        </>
    );
}
