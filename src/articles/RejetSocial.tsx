// src/articles/RejetSocial.tsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const meta = {
  slug: "surmonter-rejet-social",
  title: "Comment surmonter le rejet social : guide scientifique de résilience émotionnelle",
  description: "Découvrez les mécanismes neuropsychologiques du rejet social et 6 stratégies validées scientifiquement pour développer votre résilience émotionnelle.",
  cover: "/images/articles/rejet-social-cover.jpg",
  datePublished: "2024-01-15",
  dateModified: "2024-01-15",
  tags: ["rejet social", "résilience", "psychologie", "estime de soi"],
  author: { name: "Guesso" },
  category: "Psychologie",
  readingTime: "8 min",
};

export default function RejetSocial() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "";
  const url = `${site}/blog/${meta.slug}`;
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;

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
      />
      
      <article className="prose prose-neutral dark:prose-invert mx-auto px-4 sm:px-6 lg:px-8">
        <header className="not-prose mb-12">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="text-sm mb-6">
            <Link to="/" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">
              Accueil
            </Link> 
            <span className="mx-2 text-neutral-400" aria-hidden>›</span> 
            <Link to="/blog" className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400">
              Blog
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
          
          {/* Sous-titre/Description */}
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            {meta.description}
          </p>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            <span>par Guesso</span>
            <span>•</span>
            <span>{meta.readingTime} de lecture</span>
            <span>•</span>
            <time dateTime={meta.datePublished}>
              {new Date(meta.datePublished).toLocaleDateString("fr-FR", { 
                day: "2-digit", 
                month: "2-digit", 
                year: "numeric" 
              })}
            </time>
            <span>•</span>
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
  src="/images/articles/rejet-social-cover.webp"
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
            "Tu n'es pas assez bien", "Tu ne corresponds pas à nos attentes", "Nous avons choisi quelqu'un d'autre". Ces mots résonnent en nous avec une intensité particulière car le rejet social active les mêmes circuits neuraux que la douleur physique. Comprendre cette réalité neurobiologique est la première étape pour développer une véritable résilience émotionnelle.
          </p>

          <h2>La neurobiologie du rejet social</h2>
          
          <p>
            Les recherches pionnières de Naomi Eisenberger à l'UCLA ont révolutionné notre compréhension du rejet. Grâce à l'imagerie par résonance magnétique, elle a démontré que l'exclusion sociale active le cortex cingulaire antérieur et l'insula droite, les mêmes régions qui s'activent lors d'une douleur physique.
          </p>

          <p>
            Cette découverte explique pourquoi nous décrivons intuitivement le rejet avec des métaphores physiques : "avoir le cœur brisé", "recevoir un coup", "être anéanti". Notre cerveau traite littéralement l'exclusion sociale comme une blessure corporelle.
          </p>

          <h3>Le système d'alarme évolutionnaire</h3>
          
          <p>
            Cette sensibilité au rejet n'est pas un défaut de design mais un avantage évolutionnaire. Pour nos ancêtres chasseurs-cueilleurs, l'exclusion du groupe signifiait souvent la mort. Le cerveau a donc développé un système d'alarme hypervigilant aux signaux de rejet pour assurer notre survie sociale.
          </p>

          <p>
            Roy Baumeister et Mark Leary ont formalisé cette nécessité dans leur théorie du "besoin d'appartenance", identifiant l'acceptation sociale comme un besoin psychologique fondamental, au même niveau que la nourriture ou le sommeil.
          </p>

          <h2>Les mécanismes psychologiques du rejet</h2>

          <h3>La spirale de rumination</h3>
          
          <p>
            Après un rejet, notre cerveau entre souvent dans un cycle de rumination destructeur. Susan Nolen-Hoeksema a montré que cette tendance à ressasser amplifie la détresse émotionnelle et maintient les émotions négatives bien au-delà de l'événement déclencheur.
          </p>

          <p>
            Ces ruminations suivent généralement trois schémas : l'autoaccusation ("C'est de ma faute"), la généralisation excessive ("Je ne plais à personne"), et la catastrophisation ("Je ne m'en remettrai jamais").
          </p>

          <h3>L'impact sur l'estime de soi</h3>
          
          <p>
            Le rejet menace directement notre sentiment de valeur personnelle. Selon la théorie de la sociomètre développée par Mark Leary, l'estime de soi fonctionne comme un indicateur interne de notre statut social. Chaque rejet fait chuter cet indicateur, déclenchant des émotions négatives pour nous motiver à réparer nos relations sociales.
          </p>

          <h2>Les 6 stratégies scientifiques pour développer sa résilience</h2>

          <div className="not-prose my-8 bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
              Stratégies validées empiriquement
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
              Ces techniques s'appuient sur des décennies de recherche en psychologie clinique et neurosciences sociales.
            </p>
          </div>

          <h3>1. La restructuration cognitive basée sur l'évidence</h3>
          
          <p>
            Développée par Aaron Beck, cette technique consiste à identifier et challenger les pensées automatiques négatives qui suivent le rejet. Au lieu d'accepter passivement des pensées comme "Je suis nul", examinez les preuves factuelles.
          </p>

          <p>
            <strong>Application pratique :</strong> Après un rejet, notez vos pensées automatiques, puis listez les preuves pour et contre. Souvent, vous découvrirez que vos conclusions initiales manquent de fondement objectif.
          </p>

          <h3>2. La distanciation psychologique temporelle</h3>
          
          <p>
            Les recherches d'Ethan Kross montrent que se projeter mentalement dans le futur réduit l'intensité émotionnelle du rejet présent. Cette technique exploite notre capacité naturelle à relativiser avec le temps.
          </p>

          <p>
            <strong>Application pratique :</strong> Demandez-vous : "Comment je me sentirai par rapport à cette situation dans 6 mois ?" ou "Quelle importance aura ce rejet dans ma vie globale ?" Cette projection temporelle active les régions préfrontales responsables de la régulation émotionnelle.
          </p>

          <h3>3. La cultivation de relations de soutien multiples</h3>
          
          <p>
            Avoir un réseau social diversifié protège contre l'impact d'un rejet spécifique. La recherche montre que les personnes avec des relations de qualité dans différents domaines (famille, amis, collègues) récupèrent plus rapidement des expériences de rejet.
          </p>

          <p>
            <strong>Application pratique :</strong> Investissez consciemment dans au moins 3-4 relations significatives dans différents contextes. Cette diversification offre un filet de sécurité émotionnel.
          </p>

          <h3>4. L'exposition graduelle contrôlée</h3>
          
          <p>
            Inspirée des thérapies d'exposition pour les phobies, cette approche consiste à s'exposer volontairement à de petits rejets pour désensibiliser progressivement votre système nerveux. Jia Jiang a popularisé cette méthode avec ses "100 jours de rejet".
          </p>

          <p>
            <strong>Application pratique :</strong> Commencez par des demandes à faible enjeu susceptibles d'être refusées : demander un rabais dans un magasin, proposer une idée en réunion, inviter quelqu'un. Cette pratique réduit l'anticipation anxieuse du rejet.
          </p>

          <h3>5. Le renforcement de l'identité multidimensionnelle</h3>
          
          <p>
            Les recherches de Claude Steele sur l'affirmation de soi montrent que rappeler ses valeurs et accomplissements dans différents domaines protège l'estime de soi face au rejet dans un domaine spécifique.
          </p>

          <p>
            <strong>Application pratique :</strong> Maintenez une liste écrite de vos forces, accomplissements et valeurs dans différents domaines (professionnel, personnel, créatif, relationnel). Consultez-la après un rejet pour réactiver votre sentiment de valeur globale.
          </p>

          <h3>6. La pratique de l'autocompassion</h3>
          
          <p>
            Kristin Neff a démontré que l'autocompassion - se traiter avec la même bienveillance qu'on traiterait un ami dans la détresse - améliore significativement la résilience émotionnelle et réduit les ruminations post-rejet.
          </p>

          <p>
            <strong>Application pratique :</strong> Après un rejet, pratiquez le dialogue intérieur compassionnel : "Ce rejet est douloureux et c'est normal de souffrir. Je ne suis pas seul à vivre cela. Comment puis-je prendre soin de moi maintenant ?"
          </p>

          <h2>Quand le rejet devient pathologique</h2>
          
          <p>
            Si la sensibilité au rejet interfère significativement avec votre fonctionnement quotidien, il peut s'agir d'un trouble de la personnalité évitante ou d'une dysrégulation émotionnelle plus profonde nécessitant un accompagnement professionnel.
          </p>

          <p>
            Signes d'alerte : évitement systématique des situations sociales, anticipation constante du rejet, isolation progressive, ou détresse émotionnelle disproportionnée par rapport à la situation.
          </p>

          <h2>Transformer le rejet en croissance</h2>
          
          <p>
            Le paradoxe du rejet est qu'il peut devenir un catalyseur de développement personnel. Les recherches sur la croissance post-traumatique montrent que les expériences difficiles, lorsqu'elles sont traitées constructivement, peuvent renforcer la résilience, clarifier les valeurs et approfondir les relations authentiques.
          </p>

          <p>
            Chaque rejet contient des informations potentiellement précieuses : sur les attentes d'autrui, sur nos propres besoins, sur les dynamiques relationnelles. L'enjeu n'est pas d'éviter le rejet - impossible dans une vie sociale active - mais de développer les outils pour le traverser avec grâce.
          </p>

          <div className="not-prose my-8 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">Renforcez votre résilience quotidiennement</h3>
            <p className="mb-4">
              Utilisez notre Habit Tracker pour suivre vos pratiques de développement de la résilience émotionnelle.
            </p>
            <Link 
              to="/habit-tracker" 
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Commencer le suivi
            </Link>
          </div>

          <h2>Questions fréquentes</h2>
          
          <div className="not-prose space-y-4">
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Pourquoi le rejet fait-il si mal physiquement ?
              </summary>
              <p className="mt-2 text-sm">
                Le rejet active les mêmes circuits neuraux que la douleur physique (cortex cingulaire antérieur et insula). C'est un mécanisme évolutionnaire qui signalait à nos ancêtres le danger de l'exclusion sociale.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Combien de temps faut-il pour récupérer d'un rejet ?
              </summary>
              <p className="mt-2 text-sm">
                Cela dépend de l'importance de la relation et de vos stratégies de coping. Avec les bonnes techniques, l'intensité émotionnelle diminue généralement en 2-3 semaines, bien que l'apprentissage puisse durer plusieurs mois.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Comment savoir si ma sensibilité au rejet est normale ?
              </summary>
              <p className="mt-2 text-sm">
                Une sensibilité excessive se manifeste par l'évitement systématique de situations sociales, l'anticipation constante du rejet, ou une détresse disproportionnée. Si ces symptômes interfèrent avec votre quotidien, consultez un professionnel.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                L'autocompassion ne rend-elle pas plus faible ?
              </summary>
              <p className="mt-2 text-sm">
                Au contraire, les recherches montrent que l'autocompassion améliore la résilience et la motivation. Elle permet de récupérer plus vite des échecs et d'apprendre de ses erreurs sans s'autodétruire.
              </p>
            </details>
          </div>

          <div className="not-prose my-12 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Développez votre intelligence émotionnelle</h3>
            <p className="mb-4">
              Approfondissez vos connaissances en psychologie des émotions avec nos autres ressources.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Tous les articles
              </Link>
              <span>•</span>
              <Link to="/resources" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Guides gratuits
              </Link>
              <span>•</span>
              <Link to="/#newsletter" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Newsletter psychologie
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}