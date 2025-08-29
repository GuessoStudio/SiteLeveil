// src/articles/NeuroplasticiteCerveau.tsx
import { Link } from "react-router-dom";
import SmartImg from "../components/SmartImg";
import SEO from "../components/SEO";

const meta = {
  slug: "neuroplasticite-cerveau",
  title: "Neuroplasticité : comment reprogrammer son cerveau après 25 ans",
  description: "Découvrez les mécanismes scientifiques de la neuroplasticité et 7 stratégies concrètes pour optimiser la plasticité de votre cerveau à tout âge.",
  cover: "/images/articles/neuroplasticite-cover.jpg",
  datePublished: "2024-01-12",
  dateModified: "2024-01-12",
  tags: ["neuroplasticité", "cerveau", "neurosciences", "apprentissage"],
  author: { name: "Guesso" },
  category: "Neurosciences",
  readingTime: "12 min",
};

export default function NeuroplasticiteCerveau() {
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
              <SmartImg 
                src={meta.cover} 
                alt={`Image de couverture : ${meta.title}`} 
                width={1200} 
                height={630}
                priority 
                className="w-full h-auto"
              />
            </div>
          )}
        </header>

        <div className="mt-10">
          <p className="lead">
            "Après 25 ans, le cerveau ne change plus." Cette croyance, longtemps répandue en neurosciences, s'est révélée être l'une des plus grandes erreurs scientifiques du 20ème siècle. Aujourd'hui, nous savons que votre cerveau conserve une capacité d'adaptation remarquable jusqu'à un âge très avancé.
          </p>

          <h2>Qu'est-ce que la neuroplasticité : définition scientifique</h2>
          
          <p>
            La neuroplasticité, ou plasticité cérébrale, désigne la capacité du système nerveux à modifier ses connexions et sa structure en réponse à l'expérience et à l'apprentissage. Cette propriété fondamentale s'exprime à plusieurs niveaux : synaptique, structural et fonctionnel.
          </p>

          <p>
            Le terme a été introduit par Jerzy Konorski en 1948, mais ce n'est qu'avec les avancées de l'imagerie cérébrale dans les années 1990 que nous avons pu observer ces changements chez l'humain vivant.
          </p>

          <h3>Les trois types de plasticité cérébrale</h3>
          
          <p>
            La recherche distingue trois mécanismes principaux de neuroplasticité, chacun opérant à des échelles temporelles différentes :
          </p>

          <ul>
            <li><strong>Plasticité synaptique</strong> : modification de la force des connexions entre neurones (minutes à heures)</li>
            <li><strong>Plasticité structurelle</strong> : croissance ou rétraction des dendrites et axones (jours à semaines)</li>
            <li><strong>Neurogenèse</strong> : formation de nouveaux neurones dans certaines régions (semaines à mois)</li>
          </ul>

          <h2>Les découvertes révolutionnaires en neuroplasticité</h2>

          <h3>L'étude des chauffeurs de taxi londoniens</h3>
          
          <p>
            En 2000, Eleanor Maguire et son équipe de l'University College London ont publié une étude marquante sur les chauffeurs de taxi. Après des années à naviguer dans les rues complexes de Londres, ces chauffeurs développaient un hippocampe postérieur significativement plus volumineux que la moyenne.
          </p>

          <p>
            Cette étude a démontré que l'apprentissage intensif pouvait modifier physiquement la structure du cerveau adulte, révolutionnant notre compréhension de la plasticité cérébrale.
          </p>

          <h3>La neurogenèse adulte confirmée</h3>
          
          <p>
            Elizabeth Gould à Princeton et Fred Gage au Salk Institute ont confirmé dans les années 1990 que le cerveau adulte pouvait générer de nouveaux neurones, principalement dans l'hippocampe. Cette découverte contredisait le dogme établi depuis Santiago Ramón y Cajal.
          </p>

          <p>
            Bien que le débat continue sur l'étendue de la neurogenèse adulte chez l'humain, les preuves convergent vers une capacité de régénération neuronale limitée mais réelle.
          </p>

          <h2>Mécanismes cellulaires et moléculaires</h2>

          <h3>Le rôle du BDNF (Brain-Derived Neurotrophic Factor)</h3>
          
          <p>
            Le BDNF est souvent appelé "l'engrais du cerveau" pour son rôle crucial dans la croissance, la survie et la différenciation des neurones. Cette protéine favorise la formation de nouvelles synapses et renforce les connexions existantes.
          </p>

          <p>
            L'exercice physique, l'apprentissage et certaines pratiques comme la méditation augmentent naturellement la production de BDNF, optimisant ainsi la neuroplasticité.
          </p>

          <h3>La potentialisation et dépression à long terme</h3>
          
          <p>
            Découverte par Tim Bliss et Terje Lømo en 1973, la potentialisation à long terme (LTP) est le mécanisme par lequel les connexions synaptiques se renforcent de façon durable suite à une stimulation répétée.
          </p>

          <p>
            Ce mécanisme, résumé par la phrase de Donald Hebb "les neurones qui s'activent ensemble se connectent ensemble", constitue la base cellulaire de l'apprentissage et de la mémoire.
          </p>

          <h2>Les 7 stratégies scientifiquement validées pour optimiser votre neuroplasticité</h2>

          <div className="not-prose my-8 bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
              Techniques basées sur la recherche neuroscientifique
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
              Ces stratégies exploitent les mécanismes naturels de plasticité cérébrale pour maximiser votre potentiel d'adaptation et d'apprentissage.
            </p>
          </div>

          <h3>1. L'apprentissage moteur complexe</h3>
          
          <p>
            L'acquisition de nouvelles habiletés motrices (jonglage, instrument de musique, sport technique) stimule massivement la neuroplasticité. Les études montrent des changements structurels mesurables après seulement 3 mois d'entraînement.
          </p>

          <p>
            <strong>Application pratique :</strong> Choisissez une activité motrice qui vous challenge mais reste accessible. La complexité progressive est clé : commencez simple et augmentez graduellement la difficulté.
          </p>

          <h3>2. L'exercice aérobie à intensité modérée</h3>
          
          <p>
            L'exercice cardiovasculaire augmente la production de BDNF, améliore la vascularisation cérébrale et favorise la neurogenèse hippocampique. Les effets sont optimaux avec 150 minutes d'activité modérée par semaine.
          </p>

          <p>
            <strong>Application pratique :</strong> Intégrez 30 minutes de marche rapide, course légère ou vélo 5 fois par semaine. L'intensité doit permettre de tenir une conversation tout en étant légèrement essoufflé.
          </p>

          <h3>3. La méditation de pleine conscience</h3>
          
          <p>
            Sara Lazar (Harvard) a démontré que 8 semaines de méditation quotidienne modifient l'épaisseur corticale dans les régions associées à l'attention et la conscience interoceptive. Les changements sont visibles dès 30 minutes de pratique quotidienne.
          </p>

          <p>
            <strong>Application pratique :</strong> Commencez par 10 minutes quotidiennes de méditation focalisée sur la respiration. Utilisez des applications comme Headspace ou Calm pour vous guider initialement.
          </p>

          <h3>4. L'apprentissage d'une langue étrangère</h3>
          
          <p>
            Le bilinguisme modifie la structure cérébrale, notamment dans les régions frontoparietales impliquées dans le contrôle exécutif. Ces changements offrent une protection contre le déclin cognitif lié à l'âge.
          </p>

          <p>
            <strong>Application pratique :</strong> Utilisez des méthodes d'immersion comme Duolingo combinées à la conversation active. L'exposition quotidienne, même brève, est plus efficace que des sessions longues mais espacées.
          </p>

          <h3>5. Le sommeil optimisé pour la consolidation</h3>
          
          <p>
            Pendant le sommeil lent profond, le cerveau consolide les apprentissages et élimine les déchets métaboliques. La privation de sommeil bloque les mécanismes de plasticité synaptique et réduit la production de BDNF.
          </p>

          <p>
            <strong>Application pratique :</strong> Visez 7-9 heures de sommeil avec une routine régulière. Évitez les écrans 2 heures avant le coucher et maintenez une température fraîche (18-19°C) dans la chambre.
          </p>

          <h3>6. La nutrition pour la neuroplasticité</h3>
          
          <p>
            Certains nutriments favorisent spécifiquement la plasticité cérébrale : oméga-3 (DHA), flavonoïdes, curcumine et magnésium. Ces molécules modulent l'inflammation et soutiennent la croissance neuronale.
          </p>

          <p>
            <strong>Application pratique :</strong> Intégrez poissons gras (2-3 fois/semaine), myrtilles, curcuma et légumes verts feuillus. Considérez une supplémentation en DHA (1g/jour) si votre consommation de poisson est limitée.
          </p>

          <h3>7. La stimulation cognitive progressive</h3>
          
          <p>
            Les tâches cognitives qui challengent vos limites actuelles stimulent la formation de nouvelles connexions. L'effet est maximal quand la difficulté s'adapte progressivement à vos capacités croissantes.
          </p>

          <p>
            <strong>Application pratique :</strong> Alternez entre différents types de défis : puzzles logiques, jeux de stratégie, lecture analytique. Augmentez la complexité dès que les tâches deviennent automatiques.
          </p>

          <h2>Périodes critiques vs périodes sensibles</h2>
          
          <p>
            La distinction entre périodes critiques (fenêtres temporelles fermées) et périodes sensibles (plasticité réduite mais persistante) est cruciale. Contrairement aux périodes critiques du développement, la plasticité adulte reste accessible mais nécessite des stimuli plus intenses et répétés.
          </p>

          <p>
            Michael Merzenich a montré que même des capacités considérées comme "perdues" après certains âges peuvent être partiellement récupérées par un entraînement adapté et intensif.
          </p>

          <h2>Applications thérapeutiques de la neuroplasticité</h2>

          <h3>Récupération post-AVC</h3>
          
          <p>
            La thérapie par contrainte induite, développée par Edward Taub, exploite la neuroplasticité pour restaurer les fonctions motrices après un accident vasculaire cérébral. En forçant l'utilisation du membre affecté, on stimule la réorganisation des aires motrices.
          </p>

          <h3>Traitement des troubles psychiatriques</h3>
          
          <p>
            La thérapie cognitive-comportementale modifie les patterns d'activation cérébrale dans la dépression et l'anxiété. Ces changements fonctionnels s'accompagnent de modifications structurelles dans les régions préfrontales et limbiques.
          </p>

          <h2>Limites et idées fausses sur la neuroplasticité</h2>
          
          <p>
            La neuroplasticité n'est pas illimitée. Certaines fonctions restent largement déterminées par la génétique et le développement précoce. De plus, tous les changements cérébraux ne sont pas bénéfiques : la plasticité peut aussi sous-tendre des conditions pathologiques comme la douleur chronique.
          </p>

          <p>
            L'idée que "nous n'utilisons que 10% de notre cerveau" reste un mythe. En réalité, nous utilisons la quasi-totalité de notre cerveau, mais la neuroplasticité permet d'optimiser son fonctionnement et ses connexions.
          </p>

          <div className="not-prose my-8 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">Entraînez votre neuroplasticité quotidiennement</h3>
            <p className="mb-4">
              Utilisez notre Habit Tracker pour suivre vos pratiques d'optimisation cérébrale et mesurer vos progrès.
            </p>
            <Link 
              to="/habit-tracker" 
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Démarrer le suivi
            </Link>
          </div>

          <h2>Perspectives futures de la recherche</h2>
          
          <p>
            Les nouvelles technologies comme l'optogénétique et les interfaces cerveau-machine ouvrent des perspectives révolutionnaires pour stimuler sélectivement la neuroplasticité. La stimulation magnétique transcranienne (TMS) permet déjà de moduler l'excitabilité de régions cérébrales spécifiques.
          </p>

          <p>
            L'intelligence artificielle aide également à identifier les patterns d'activation optimaux pour l'apprentissage, ouvrant la voie à des protocoles d'entraînement personnalisés et plus efficaces.
          </p>

          <h2>Questions fréquentes</h2>
          
          <div className="not-prose space-y-4">
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                À partir de quel âge la neuroplasticité diminue-t-elle ?
              </summary>
              <p className="mt-2 text-sm">
                La plasticité décline progressivement avec l'âge mais ne disparaît jamais complètement. Elle reste significative jusqu'à 70-80 ans, particulièrement si elle est stimulée par l'apprentissage et l'exercice physique.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Combien de temps faut-il pour voir des changements cérébraux ?
              </summary>
              <p className="mt-2 text-sm">
                Les changements synaptiques commencent en minutes, mais les modifications structurales mesurables par imagerie prennent généralement 2-3 mois d'entraînement régulier.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Peut-on vraiment créer de nouveaux neurones à l'âge adulte ?
              </summary>
              <p className="mt-2 text-sm">
                La neurogenèse adulte existe chez l'humain, principalement dans l'hippocampe, mais son ampleur est débattue. Elle reste limitée comparée aux changements de connectivité entre neurones existants.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Les "jeux cérébraux" améliorent-ils vraiment le cerveau ?
              </summary>
              <p className="mt-2 text-sm">
                Les jeux cérébraux peuvent améliorer les capacités spécifiques qu'ils entraînent, mais le transfert vers d'autres domaines cognitifs reste limité. Les activités physiques et l'apprentissage de compétences réelles sont plus efficaces.
              </p>
            </details>
          </div>

          <div className="not-prose my-12 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Approfondissez vos connaissances en neurosciences</h3>
            <p className="mb-4">
              Explorez d'autres aspects fascinants du fonctionnement cérébral avec nos ressources spécialisées.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Articles neurosciences
              </Link>
              <span>•</span>
              <Link to="/resources" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Guides d'optimisation cérébrale
              </Link>
              <span>•</span>
              <Link to="/#newsletter" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Newsletter recherche
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}