// src/articles/AxeIntestinCerveau.tsx
// Article optimisé SEO 2026 avec schemas JSON-LD complets
// Optimisé pour : Featured Snippets, Rich Results, E-E-A-T, GEO
// Auteur : Guesso | L'Éveil Mental
// Dernière mise à jour : 5 juillet 2026

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

// ==================== MÉTADONNÉES ====================

const meta = {
  slug: "axe-intestin-cerveau-microbiote-humeur",
  title: "Axe intestin-cerveau : comment votre microbiote influence votre humeur",
  description: "Axe intestin-cerveau : les 4 voies de communication microbiote-cerveau, ce que prouvent vraiment les études humaines et 5 leviers pour le soutenir. Guide 2026.",
  cover: "/images/articles/axe-intestin-cerveau-microbiote-humeur-cover",
  datePublished: "2026-07-05T08:00:00+01:00",
  dateModified: "2026-07-05T08:00:00+01:00",
  tags: ["axe intestin cerveau", "microbiote humeur", "microbiome anxiété", "sérotonine intestin", "nerf vague", "gut brain axis", "neurosciences", "microbiote dépression"],
  author: {
    "@type": "Person",
    "name": "Guesso",
    "url": "https://leveilmental.fr/a-propos/"
  },
  category: "Neurosciences",
  readingTime: "14 min",
  version: "1.0",
  verifiedDate: "Juillet 2026"
};

// ==================== FAQ DATA ====================

const faqData = [
  {
    question: "Qu'est-ce que l'axe intestin-cerveau exactement ?",
    answer: "L'axe intestin-cerveau est le système de communication permanent entre votre intestin, les bactéries qui y vivent (le microbiote) et votre cerveau. Cette communication va dans les deux sens et emprunte plusieurs voies : le nerf vague, les hormones du stress, le système immunitaire et des molécules fabriquées par les bactéries. Le cerveau agit sur l'intestin, et l'intestin renvoie des signaux au cerveau."
  },
  {
    question: "Comment le nerf vague relie-t-il l'intestin au cerveau ?",
    answer: "Le nerf vague est le plus long nerf du système nerveux autonome : il descend du tronc cérébral jusqu'au ventre. Il fonctionne comme un câble à double sens, mais environ 80 % de ses fibres remontent de l'intestin vers le cerveau. Il transmet en permanence des informations sur l'état digestif, ce qui influence l'humeur et la vigilance, souvent sans que l'on s'en aperçoive."
  },
  {
    question: "Pourquoi dit-on que l'intestin est le \"deuxième cerveau\" ?",
    answer: "Parce que la paroi de l'intestin contient environ 100 millions de neurones, autant que dans la moelle épinière. Ce réseau, appelé système nerveux entérique, peut gérer seul la digestion, sans ordre du cerveau. Le neuroscientifique Michael Gershon (Columbia University, États-Unis) a popularisé cette image. Attention : ce \"deuxième cerveau\" ne pense pas, il coordonne la digestion."
  },
  {
    question: "Le microbiote peut-il vraiment causer la dépression ?",
    answer: "Pas de façon prouvée chez l'humain. On observe des différences de microbiote entre personnes déprimées et non déprimées, mais ce sont des corrélations, pas une preuve de cause. La dépression pourrait modifier le microbiote autant que l'inverse. Le microbiote est un facteur qui module l'humeur parmi beaucoup d'autres, il ne l'explique pas à lui seul."
  },
  {
    question: "Quelle est la différence entre microbiote et microbiome ?",
    answer: "Le microbiote désigne l'ensemble des micro-organismes qui vivent dans l'intestin : bactéries, virus, champignons. Le microbiome désigne l'ensemble de leurs gènes et de leur activité. En pratique, les deux mots sont souvent utilisés comme synonymes. Un probiotique, lui, est une bactérie vivante ajoutée volontairement, par exemple via un complément ou un aliment fermenté."
  },
  {
    question: "Quels aliments soutiennent l'axe intestin-cerveau ?",
    answer: "Les aliments riches en fibres nourrissent les bonnes bactéries : légumes, fruits, légumineuses, céréales complètes. Les aliments fermentés apportent des bactéries vivantes : yaourt, kéfir, choucroute, kimchi. La diversité compte plus qu'un aliment miracle : plus l'alimentation est variée, plus le microbiote est varié. Ce sont des leviers de soutien, pas un traitement médical."
  },
  {
    question: "Les probiotiques améliorent-ils l'humeur ?",
    answer: "Les résultats sont mitigés. Certaines études sur des \"psychobiotiques\" montrent une légère baisse du stress ou de l'anxiété, d'autres ne trouvent rien. L'effet dépend de la souche exacte, de la dose et de la personne. Aucun probiotique n'est aujourd'hui validé comme traitement de l'anxiété ou de la dépression. Ils peuvent aider certaines personnes, sans garantie."
  },
  {
    question: "Combien de temps faut-il pour modifier son microbiote ?",
    answer: "Les premiers changements de composition apparaissent en 24 à 72 heures après un changement d'alimentation. Mais ces changements rapides sont fragiles et reviennent en arrière si l'on reprend ses vieilles habitudes. Une transformation stable demande des semaines à des mois de régularité. Le microbiote ressemble à un jardin : il se cultive dans la durée, pas en un jour."
  }
];

// ==================== COMPOSANT ====================

export default function AxeIntestinCerveau() {
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
    caption: "Illustration scientifique d'une connexion lumineuse entre un intestin stylisé et un cerveau sur fond sombre, symbolisant l'axe intestin-cerveau et l'influence du microbiote sur l'humeur"
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
      name: "Axe intestin-cerveau",
      description: "Communication bidirectionnelle entre le microbiote intestinal et le cerveau via le nerf vague, l'axe HPA, le système immunitaire et les métabolites microbiens, et ses effets sur l'humeur"
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: meta.tags.join(", "),
    inLanguage: "fr-FR",
    articleSection: meta.category,
    wordCount: 2500
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
    name: "5 leviers pour soutenir son axe intestin-cerveau",
    description: "Cinq leviers de soutien fondés sur les mécanismes du microbiote intestinal, sans promesse thérapeutique",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Diversifier son alimentation", description: "Multiplier les fibres (légumes, fruits, légumineuses) et les aliments fermentés nourrit un microbiote plus varié." },
      { "@type": "ListItem", position: 2, name: "Réduire le stress chronique", description: "Le stress prolongé, via l'axe HPA et le cortisol, perturbe la paroi intestinale et la composition du microbiote." },
      { "@type": "ListItem", position: 3, name: "Prioriser le sommeil", description: "Le microbiote suit un rythme circadien : un sommeil régulier soutient son équilibre, et inversement." },
      { "@type": "ListItem", position: 4, name: "Bouger régulièrement", description: "L'activité physique modérée est associée à un microbiote plus diversifié et à une meilleure barrière intestinale." },
      { "@type": "ListItem", position: 5, name: "Limiter les perturbateurs du microbiote", description: "Antibiotiques non nécessaires, excès d'ultra-transformés et d'alcool appauvrissent la diversité bactérienne." }
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
            <li><Link to="/blog/?category=neurosciences" className="hover:underline">Neurosciences</Link></li>
            <li className="mx-1">›</li>
            <li className="text-neutral-700 dark:text-neutral-300 truncate max-w-[200px]">Axe intestin-cerveau</li>
          </ol>
        </nav>

        {/* Badge catégorie */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Neurosciences
          </span>
          <span className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs px-3 py-1 rounded-full">
            {meta.readingTime} de lecture
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 leading-tight mb-3">
          Axe intestin-cerveau : comment votre microbiote influence votre humeur
        </h1>

        {/* Signal fraîcheur */}
        <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 mb-6">
          Version {meta.version} — {meta.verifiedDate} | Sources vérifiées 2015-2025
        </div>

        {/* QUICK ANSWER BLOCK */}
        <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-lg border-l-4 border-emerald-500">
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">Réponse rapide</p>
          <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
            <strong>En bref :</strong> L'axe intestin-cerveau est la communication permanente, dans les deux sens, entre votre microbiote intestinal et votre cerveau. Elle passe par au moins quatre voies : le nerf vague, l'axe du stress (cortisol), le système immunitaire et des molécules fabriquées par les bactéries. Ce dialogue module l'humeur, mais chez l'humain il n'a pas encore été démontré qu'un microbiote donné cause à lui seul un état mental précis.
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2">
            <strong>Sources :</strong> Zhuang et al., <em>Gut Microbes</em>, 2024 ; Lee et al., <em>Pharmacological Research</em>, 2025 ; Yano et al., <em>Cell</em>, 2015.
          </p>
        </div>

        {/* StatBlock 1 — teal */}
        <div className="not-prose my-6 bg-teal-50 dark:bg-teal-950/30 p-5 rounded-lg border border-teal-200 dark:border-teal-800">
          <div className="flex items-start gap-4">
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 leading-none">4<br/>voies</div>
            <div>
              <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
                En 2024, l'équipe de Zhuang et ses collègues a synthétisé, dans la revue <em>Gut Microbes</em>, tout ce que la recherche récente sait de l'axe microbiote-intestin-cerveau. Leur conclusion : ce n'est pas un seul canal, mais un réseau. Quatre grandes voies reviennent : le nerf vague (la voie nerveuse), l'axe du stress et ses hormones (la voie hormonale), le système immunitaire (la voie inflammatoire) et les molécules fabriquées par les bactéries (la voie chimique). Comprendre ces voies séparément, c'est ce qui manque à la plupart des articles grand public.
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                Zhuang L., Zhang Z., Cai G. — <em>Microbiota-gut-brain axis: interplay between microbiota, barrier function and lymphatic system</em>, <em>Gut Microbes</em>, 2024 — DOI : 10.1080/19490976.2024.2387800
              </p>
            </div>
          </div>
        </div>

        {/* Image de couverture */}
        <div className="my-8 rounded-xl overflow-hidden">
          <img
            src={`${meta.cover}.webp`}
            alt="Illustration scientifique d'une connexion lumineuse reliant un intestin stylisé à un cerveau sur fond sombre, représentant l'axe intestin-cerveau et l'influence du microbiote sur l'humeur"
            className="w-full h-auto object-cover"
            width={1200}
            height={675}
            loading="eager"
          />
        </div>

        {/* Corps de l'article */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          <p>
            Tu as déjà eu « la boule au ventre » avant un examen, ou « l'estomac noué » après une mauvaise nouvelle ? Ce n'est pas une image. C'est l'<strong>axe intestin-cerveau</strong> au travail : une ligne de communication directe entre ton ventre et ta tête. Depuis une quinzaine d'années, la recherche a découvert que les bactéries de ton intestin, ton <strong>microbiote</strong>, participent aussi à cette conversation, et qu'elles influencent ton <strong>humeur</strong>.
          </p>
          <p>
            Le sujet est devenu à la mode, et c'est là que le bât blesse. On lit partout que « guérir son intestin guérit son cerveau », ou que tel probiotique « soigne l'anxiété ». La réalité scientifique est plus prudente, et bien plus intéressante. Le lien est réel, mais il module l'humeur, il ne la commande pas.
          </p>
          <p>
            Cet article fait ce que la plupart des pages françaises évitent : détailler les vraies voies de communication entre le microbiote et le cerveau, puis séparer ce qui est prouvé chez l'humain de ce qui vient d'études sur l'animal. Objectif : que tu ressortes en sachant quoi croire, et quoi faire.
          </p>

          {/* H2 — Définition */}
          <h2>Qu'est-ce que l'axe intestin-cerveau ?</h2>
          <p>
            L'axe intestin-cerveau est le système de communication permanent entre trois acteurs : ton intestin, les bactéries qui y vivent (le microbiote) et ton cerveau. La communication va dans les deux sens. Ton cerveau parle à ton ventre (le stress coupe l'appétit), et ton ventre répond à ton cerveau (une digestion difficile plombe l'humeur).
          </p>

          <h3>Un dialogue permanent entre intestin et cerveau</h3>
          <p>
            Imagine une autoroute à double sens qui relie ton ventre à ta tête. Les messages circulent en continu, jour et nuit, sans que tu en aies conscience. Ton intestin héberge environ 100 millions de neurones, autant que dans la moelle épinière. Ce réseau, le système nerveux entérique, est si autonome que le neuroscientifique Michael Gershon (Columbia University, États-Unis) l'a surnommé le « deuxième cerveau ». Attention : ce deuxième cerveau ne réfléchit pas, il pilote la digestion tout seul, et il envoie des signaux vers le haut.
          </p>
          <p>
            Concrètement, c'est pourquoi une émotion forte se ressent d'abord dans le ventre. Le trac avant de parler en public, la nausée après un choc : ton intestin réagit avant même que tu aies mis des mots sur ce que tu ressens. Ces réactions partent des mêmes circuits que ceux décrits dans l'article sur le <Link to="/blog/systeme-limbique-cerveau-emotionnel/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">système limbique, le cerveau émotionnel</Link>.
          </p>

          <h3>Les 4 voies de communication entre microbiote et cerveau</h3>
          <p>
            Le point clé, celui que presque personne n'explique clairement, c'est qu'il n'existe pas un seul canal, mais plusieurs. Le microbiote parle au cerveau par quatre voies principales, comme quatre lignes téléphoniques différentes. La voie nerveuse (le nerf vague), la voie hormonale (l'axe du stress), la voie inflammatoire (le système immunitaire) et la voie chimique (les molécules fabriquées par les bactéries). On les détaille une par une dans la partie suivante, car c'est là que se joue l'effet sur l'humeur.
          </p>

          {/* Encadré distinction */}
          <div className="not-prose my-6 bg-violet-50 dark:bg-violet-950/30 p-5 rounded-lg border-l-4 border-violet-500">
            <p className="text-xs font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wide mb-3">Microbiote, microbiome, probiotique : ne pas confondre</p>
            <ul className="space-y-2 text-sm text-violet-900 dark:text-violet-100">
              <li><strong>Microbiote :</strong> l'ensemble des micro-organismes vivant dans ton intestin (bactéries, virus, champignons). Des milliers de milliards d'habitants.</li>
              <li><strong>Microbiome :</strong> l'ensemble de leurs gènes et de leur activité. Dans l'usage courant, on emploie souvent les deux mots comme synonymes.</li>
              <li><strong>Probiotique :</strong> une bactérie vivante ajoutée volontairement, via un complément ou un aliment fermenté (yaourt, kéfir). C'est un apport, pas ton microbiote entier.</li>
            </ul>
          </div>

          {/* H2 — Comment influence humeur */}
          <h2>Comment le microbiote influence-t-il l'humeur ?</h2>
          <p>
            Voici les quatre voies en détail. L'idée générale à garder en tête : chacune est plausible et documentée, mais la plupart des mécanismes précis ont d'abord été démontrés chez l'animal. Chez l'humain, on observe surtout des liens, pas encore des preuves de cause.
          </p>

          <h3>Le nerf vague, voie nerveuse directe</h3>
          <p>
            Le nerf vague est le plus long nerf de ton corps : il descend du tronc cérébral jusqu'à l'abdomen. C'est le câble physique qui relie le ventre au cerveau. Fait surprenant : environ 80 % de ses fibres remontent de l'intestin vers le cerveau, et non l'inverse. Autrement dit, ton ventre informe ton cerveau bien plus qu'il ne reçoit d'ordres.
          </p>
          <p>
            Les bactéries peuvent stimuler ce nerf et modifier des comportements liés à l'anxiété. C'est ce qu'ont montré les travaux de l'équipe de John Cryan et Timothy Dinan (APC Microbiome, University College Cork, Irlande), l'un des laboratoires de référence mondiaux sur ce sujet. En donnant une bactérie précise à des souris, les chercheurs ont observé moins de comportements anxieux, effet qui disparaissait quand on coupait le nerf vague. Point crucial de rigueur : cette expérience a été faite sur des souris, pas sur des humains. Elle prouve le mécanisme, pas encore son ampleur chez toi.
          </p>

          <h3>L'axe HPA et le cortisol : le stress agit aussi sur l'intestin</h3>
          <p>
            L'axe HPA (hypothalamo-hypophyso-surrénalien) est le circuit du stress de ton corps. Quand tu es sous pression, il libère du cortisol, l'hormone du stress. Ce cortisol ne fait pas qu'accélérer ton cœur : il modifie aussi la paroi de ton intestin et la composition de ton microbiote. C'est un dialogue à double sens : le stress abîme l'intestin, et un intestin perturbé renforce la réaction de stress.
          </p>
          <p>
            C'est exactement pour cela qu'une période de stress intense se traduit souvent par des troubles digestifs. Ce lien entre l'hormone du stress et le reste du corps est développé dans l'article sur le <Link to="/blog/cortisol-stress-chronique-cerveau-memoire/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">cortisol et le stress chronique</Link>. Soutenir son intestin passe donc aussi, en amont, par la gestion du stress.
          </p>

          <h3>Les métabolites microbiens : la voie chimique</h3>
          <p>
            Tes bactéries sont de véritables petites usines chimiques. En digérant les fibres, elles fabriquent des molécules appelées acides gras à chaîne courte (comme le butyrate), qui nourrissent les cellules de l'intestin et agissent sur l'inflammation. Elles participent aussi à la production de messagers chimiques du cerveau, les neurotransmetteurs.
          </p>

          {/* StatBlock 2 — indigo (Yano, murin) */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">90-95 %</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  On répète partout que « 90 à 95 % de la sérotonine est produite dans l'intestin ». C'est vrai, mais il faut préciser deux choses. D'abord, il s'agit de la sérotonine du corps (digestion, transit), pas directement de celle qui circule dans le cerveau. Ensuite, la preuve que les bactéries pilotent cette production vient d'une étude sur des souris, menée par Elaine Hsiao et Jessica Yano (California Institute of Technology, États-Unis). Le mécanisme est réel et important, mais il n'a pas été démontré à l'identique chez l'humain.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Yano J.M. et al., California Institute of Technology, <em>Indigenous bacteria from the gut microbiota regulate host serotonin biosynthesis</em>, <em>Cell</em>, 2015 (étude sur modèle murin) — DOI : 10.1016/j.cell.2015.02.047
                </p>
              </div>
            </div>
          </div>

          <p>
            La nuance est capitale. La sérotonine de l'intestin ne traverse pas directement la barrière qui protège le cerveau. Dire « mon microbiote fabrique ma sérotonine cérébrale, donc mon bonheur » est un raccourci faux. Le microbiote influence plutôt les ingrédients et les signaux, un peu comme un fournisseur influence une cuisine sans tenir lui-même la poêle. Ces messagers chimiques et leur rôle sur l'humeur sont détaillés dans l'article sur les <Link to="/blog/neurotransmetteurs-humeur-cerveau/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">neurotransmetteurs qui contrôlent l'humeur</Link>.
          </p>

          <h3>Immunité et inflammation : quand l'intestin module le cerveau</h3>
          <p>
            L'intestin est un site majeur de l'immunité : une grande partie de tes défenses (une approximation souvent citée parle d'environ 70 %) y est concentrée. Quand la paroi intestinale est fragilisée, elle laisse passer des molécules qui déclenchent une inflammation de bas grade, un feu qui couve en permanence. Or cette inflammation peut atteindre le cerveau et peser sur l'humeur. C'est l'une des pistes les plus étudiées pour expliquer le lien entre intestin et dépression.
          </p>

          {/* StatBlock 3 — indigo (Lee 2025, corrélations) */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">4<br/>troubles</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  Une revue de 2025 publiée dans <em>Pharmacological Research</em> (Lee, Han et Shin) fait le point sur les liens entre microbiote et santé mentale. Des différences de microbiote sont associées à l'anxiété, à la dépression, à la schizophrénie et aux troubles neurocognitifs. Mais les auteurs insistent sur un mot : ce sont des associations, des corrélations observées, pas des preuves qu'un microbiote donné cause la maladie. La prudence n'efface pas le lien, elle le remet à sa juste place.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  Lee Y., Han S., Shin J. — <em>Microbiota-gut-brain axis and its role in neuropsychiatric disorders</em>, <em>Pharmacological Research</em>, 2025 — DOI : 10.1016/j.phrs.2025.107749
                </p>
              </div>
            </div>
          </div>

          {/* H2 — Études humain */}
          <h2>Que montrent vraiment les études chez l'humain ?</h2>
          <p>
            C'est la section la plus importante, et la plus souvent bâclée ailleurs. Il faut distinguer trois niveaux de preuve, du plus solide au plus fragile, pour ne pas confondre une piste prometteuse avec une certitude.
          </p>

          <h3>Preuves animales solides, causalité humaine prudente</h3>
          <p>
            La plupart des mécanismes spectaculaires (bactérie qui calme l'anxiété, sérotonine pilotée par le microbiote) ont été démontrés chez la souris. Ces preuves sont solides pour comprendre « comment ça pourrait marcher ». Mais une souris de laboratoire n'est pas un humain : elle vit dans un environnement contrôlé, mange la même chose, et son cerveau est bien plus simple. Transposer directement à l'humain serait une erreur.
          </p>

          {/* StatBlock 4 — indigo (recommandations 2023, limites) */}
          <div className="not-prose my-6 bg-indigo-50 dark:bg-indigo-950/30 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 leading-none">2023</div>
              <div>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                  En 2023, des recommandations méthodologiques publiées dans <em>Microbiome Research Reports</em> ont fait un constat gênant mais honnête : chez l'humain, les liens entre microbiote et traits mentaux sont souvent inconstants d'une étude à l'autre. La raison ? De nombreux facteurs de confusion (alimentation, âge, médicaments, mode de vie) brouillent les résultats. Les auteurs appellent à des méthodes plus strictes avant de conclure à une véritable cause.
                </p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                  <em>Methodological recommendations for human microbiota-gut-brain axis research</em> — <em>Microbiome Research Reports</em>, 2023
                </p>
              </div>
            </div>
          </div>

          <h3>Ce que les essais cliniques montrent réellement</h3>
          <p>
            Il existe quand même des études chez l'humain. L'une des plus connues, menée par Kirsten Tillisch (University of California, Los Angeles, États-Unis), a montré qu'un produit laitier fermenté consommé pendant quatre semaines modifiait l'activité de certaines régions cérébrales liées aux émotions, mesurée à l'IRM fonctionnelle. C'est une vraie preuve chez l'humain que l'alimentation peut toucher le cerveau. Mais l'effet était modeste, sur un petit groupe, et il ne s'agissait pas de « guérir » quoi que ce soit.
          </p>
          <p>
            Le message honnête est donc double. Oui, agir sur l'intestin peut influencer le cerveau chez l'humain. Non, aucun régime ni probiotique n'est aujourd'hui validé comme traitement d'un trouble mental. La méditation, le sommeil ou l'exercice ont des preuves d'effet bien plus solides sur l'humeur, comme le montrent les <Link to="/blog/sommeil-reparateur-7-strategies-validees/" className="text-violet-600 dark:text-violet-400 underline underline-offset-2">stratégies pour un sommeil réparateur</Link>.
          </p>

          <h3>Pourquoi les effets varient selon les personnes</h3>
          <p>
            Voici le point que presque aucun article ne mentionne, et qui explique pourquoi « les probiotiques » donnent des résultats si contradictoires. Ton microbiote est aussi unique que ton empreinte digitale. Deux personnes qui prennent le même probiotique n'ont pas la même flore de départ, donc pas la même réponse.
          </p>
          <p>
            S'ajoute la question de la souche exacte. « Probiotique » ne veut rien dire de précis : c'est comme dire « un médicament » sans préciser lequel. Une souche peut agir, une autre non, à dose et durée égales. Résultat : un même complément soulage une personne et ne fait rien à une autre. Ce n'est pas de la malchance, c'est de la biologie individuelle. Tant que la recherche ne saura pas cibler la bonne souche pour la bonne personne, la prudence reste de mise.
          </p>

          {/* H2 — Comment soutenir */}
          <h2>Comment soutenir son axe intestin-cerveau ?</h2>
          <p>
            Bonne nouvelle : sans attendre que la science tranche tout, quelques leviers simples soutiennent un microbiote varié et un intestin en bon état. Ce sont des leviers de soutien du bien-être, pas des traitements. En cas de trouble digestif ou psychologique, ils s'ajoutent à un suivi médical, ils ne le remplacent pas.
          </p>
          <ol>
            <li><strong>Diversifier son alimentation avec fibres et aliments fermentés.</strong> Les fibres (légumes, fruits, légumineuses, céréales complètes) nourrissent les bonnes bactéries ; les fermentés (yaourt, kéfir, choucroute, kimchi) en apportent des vivantes. La diversité de l'assiette fait la diversité du microbiote.</li>
            <li><strong>Réduire le stress chronique.</strong> Le cortisol perturbe la paroi intestinale et la flore. Respiration, marche, pauses régulières : tout ce qui abaisse le stress soutient aussi l'intestin.</li>
            <li><strong>Prioriser le sommeil.</strong> Le microbiote suit un rythme jour-nuit. Un sommeil régulier le stabilise, et un bon microbiote favorise en retour un meilleur sommeil.</li>
            <li><strong>Bouger régulièrement.</strong> Une activité physique modérée est associée à un microbiote plus varié et à une meilleure barrière intestinale. Pas besoin de performance : la régularité prime.</li>
            <li><strong>Limiter les perturbateurs du microbiote.</strong> Antibiotiques non nécessaires, excès d'aliments ultra-transformés et d'alcool appauvrissent la diversité bactérienne. Les réduire, c'est déjà protéger sa flore.</li>
          </ol>

          {/* H2 — À retenir */}
          <h2>Ce qu'il faut retenir</h2>
          <div className="not-prose my-6 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce que l'on sait</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200 mb-4">
              <li>✅ L'axe intestin-cerveau est réel : intestin, microbiote et cerveau communiquent en permanence, dans les deux sens.</li>
              <li>✅ Cette communication passe par 4 voies : nerf vague, axe du stress (cortisol), système immunitaire et molécules bactériennes.</li>
              <li>✅ Agir sur l'intestin (alimentation, stress, sommeil) peut influencer le cerveau et le bien-être.</li>
            </ul>
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-2">Ce que l'on ne sait pas encore</p>
            <ul className="space-y-2 text-sm text-neutral-800 dark:text-neutral-200">
              <li>⚠️ Chez l'humain, on observe des corrélations, pas la preuve qu'un microbiote cause à lui seul un trouble mental.</li>
              <li>⚠️ Beaucoup de mécanismes précis viennent d'études sur la souris, à confirmer chez l'humain.</li>
              <li>⚠️ Aucun probiotique n'est validé comme traitement : l'effet dépend de la souche, de la dose et de la personne.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2>Questions fréquentes sur l'axe intestin-cerveau</h2>
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
            <p className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-2">Checklist : soutenir son axe intestin-cerveau</p>
            <p className="text-sm text-violet-700 dark:text-violet-300 mb-4">
              Une fiche A4 à imprimer : les 4 voies de communication expliquées simplement, les 5 leviers du quotidien et les aliments qui nourrissent un microbiote varié.
            </p>
            <a
              href="/Downloads/axe-intestin-cerveau-microbiote-humeur-checklist.pdf"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Télécharger la checklist intestin-cerveau (PDF gratuit)
            </a>
          </div>

          {/* Sources scientifiques */}
          <h2>Sources scientifiques</h2>
          <ol className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>
              [1] Zhuang L., Zhang Z., Cai G. — <em>Microbiota-gut-brain axis: interplay between microbiota, barrier function and lymphatic system</em> — <em>Gut Microbes</em>, vol. 16(1), 2024 — DOI : <a href="https://doi.org/10.1080/19490976.2024.2387800" className="underline" target="_blank" rel="noopener noreferrer">10.1080/19490976.2024.2387800</a>
            </li>
            <li>
              [2] Lee Y., Han S., Shin J. — <em>Microbiota-gut-brain axis and its role in neuropsychiatric disorders</em> — <em>Pharmacological Research</em>, 2025 — DOI : <a href="https://doi.org/10.1016/j.phrs.2025.107749" className="underline" target="_blank" rel="noopener noreferrer">10.1016/j.phrs.2025.107749</a>
            </li>
            <li>
              [3] Yano J.M., Yu K., Donaldson G.P. et al. — <em>Indigenous bacteria from the gut microbiota regulate host serotonin biosynthesis</em> (étude sur modèle murin) — <em>Cell</em>, vol. 161(2), 2015 — DOI : <a href="https://doi.org/10.1016/j.cell.2015.02.047" className="underline" target="_blank" rel="noopener noreferrer">10.1016/j.cell.2015.02.047</a>
            </li>
            <li>
              [4] Bravo J.A., Forsythe P., Chew M.V. et al. — <em>Ingestion of Lactobacillus strain regulates emotional behavior and central GABA receptor expression in a mouse via the vagus nerve</em> (étude sur modèle murin) — <em>PNAS</em>, vol. 108(38), 2011 — DOI : <a href="https://doi.org/10.1073/pnas.1102999108" className="underline" target="_blank" rel="noopener noreferrer">10.1073/pnas.1102999108</a>
            </li>
            <li>
              [5] Tillisch K., Labus J., Kilpatrick L. et al. — <em>Consumption of fermented milk product with probiotic modulates brain activity</em> — <em>Gastroenterology</em>, vol. 144(7), 2013 — DOI : <a href="https://doi.org/10.1053/j.gastro.2013.02.043" className="underline" target="_blank" rel="noopener noreferrer">10.1053/j.gastro.2013.02.043</a>
            </li>
            <li>
              [6] <em>Methodological recommendations for human microbiota-gut-brain axis research</em> — <em>Microbiome Research Reports</em>, 2023
            </li>
          </ol>

        </div>
      </article>
    </>
  );
}
