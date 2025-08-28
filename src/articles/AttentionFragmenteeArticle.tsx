// src/articles/AttentionFragmenteeArticle.tsx
import { Link } from "react-router-dom";
import SmartImg from "../components/SmartImg";
import SEO from "../components/SEO";

const meta = {
  slug: "attention-fragmentee-concentration-numerique",
  title: "Attention fragmentée : comprendre et protéger sa concentration à l'ère numérique",
  description: "Découvrez les mécanismes neuroscientifiques de l'attention fragmentée et 5 stratégies validées scientifiquement pour améliorer votre concentration face aux distractions numériques.",
  cover: "/images/articles/attention-fragmentee-cover-1200x630.jpg",
  datePublished: "2025-08-28",
  dateModified: "2025-08-28",
  tags: ["attention", "concentration", "neurosciences", "distractions numériques", "productivité"],
  author: { name: "Guesso" },
  category: "Neurosciences",
  readingTime: "8 min",
};

export default function AttentionFragmenteeArticle() {
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
        <nav aria-label="Fil d'Ariane" className="not-prose text-sm mb-4">
          <Link to="/">Accueil</Link> <span aria-hidden>›</span> <Link to="/blog">Blog</Link> <span aria-hidden>›</span>
          <span aria-current="page">{meta.title}</span>
        </nav>

        <header className="not-prose">
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">{meta.title}</h1>
          <p className="mt-2 text-sm opacity-80">
            <time dateTime={meta.datePublished}>
              {new Date(meta.datePublished).toLocaleDateString("fr-FR", { 
                day:"2-digit", month:"long", year:"numeric" 
              })}
            </time>
            {" · "}{meta.readingTime}{" · "}
            {meta.tags.map((t,i)=> <span key={t}>#{t}{i<meta.tags.length-1?" ":""}</span>)}
          </p>
          
          <div className="mt-6">
            <SmartImg 
              src={meta.cover} 
              alt={`Image de couverture : ${meta.title}`} 
              width={1200} 
              height={630}
              priority 
              style={{ width:"100%", height:"auto", borderRadius:"1rem" }} 
            />
          </div>
        </header>

        <div className="mt-10">
          <p className="lead">
            Nous vivons dans une époque où les sollicitations numériques sont omniprésentes. Entre notifications, emails, réseaux sociaux et applications diverses, notre cerveau navigue constamment entre différentes sources d'information. Cette réalité moderne soulève une question importante : comment notre attention s'adapte-t-elle à ce flux continu de distractions ?
          </p>

          <h2>Qu'est-ce que l'attention fragmentée ?</h2>
          <p>
            L'attention fragmentée désigne la tendance à diviser notre concentration entre plusieurs tâches ou stimuli de façon rapide et répétée, réduisant notre capacité à maintenir un focus prolongé sur une activité unique.
          </p>
          
          <p>
            Ce phénomène diffère de l'attention sélective normale, qui nous permet de nous concentrer sur des éléments pertinents tout en filtrant les distractions. Dans l'attention fragmentée, le processus de filtrage devient défaillant face à la multiplicité des sollicitations.
          </p>

          <h2>Les mécanismes cérébraux de l'attention</h2>
          
          <h3>Les réseaux attentionnels du cerveau</h3>
          <p>
            La recherche en neurosciences distingue trois réseaux attentionnels principaux (Posner & Petersen, 1990) :
          </p>
          <ul>
            <li><strong>Réseau d'alerte</strong> : maintient un état de vigilance</li>
            <li><strong>Réseau d'orientation</strong> : dirige l'attention vers des stimuli spécifiques</li>
            <li><strong>Réseau exécutif</strong> : résout les conflits entre stimuli concurrents</li>
          </ul>
          
          <p>
            Le cortex préfrontal joue un rôle central dans le contrôle exécutif de l'attention, particulièrement pour maintenir la concentration sur une tâche face aux distractions.
          </p>

          <div className="not-prose my-8">
            <SmartImg 
              src="/images/articles/reseaux-attentionnels-cerveau.jpg" 
              alt="Schéma des trois réseaux attentionnels du cerveau"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-neutral-500 text-center mt-2">
              Les trois réseaux attentionnels identifiés par les neurosciences cognitives
            </p>
          </div>

          <h3>Dopamine et recherche de nouveauté</h3>
          <p>
            Le système dopaminergique influence notre tendance à chercher de nouvelles informations. Chaque nouvelle notification ou stimulus peut déclencher une libération de dopamine, créant un cycle de recherche compulsive de nouveauté qui peut interférer avec la concentration soutenue.
          </p>

          <h2>Les effets des distractions numériques sur le cerveau</h2>
          
          <h3>Coût cognitif du changement de tâche</h3>
          <p>
            La recherche sur le "task switching" montre que passer d'une tâche à une autre implique un coût cognitif. Monsell (2003) démontre que ce changement nécessite une reconfiguration mentale qui consomme du temps et de l'énergie cognitive.
          </p>

          <h3>Mythe du multitâche efficace</h3>
          <p>
            Contrairement aux croyances populaires, le cerveau ne peut pas réellement effectuer deux tâches cognitives complexes simultanément. Ce que nous appelons "multitâche" est en réalité un passage rapide d'une tâche à l'autre.
          </p>
          
          <p>
            Une méta-analyse de Salvucci & Taatgen (2008) confirme que cette alternance réduit l'efficacité et augmente les erreurs, particulièrement pour des tâches nécessitant de la concentration.
          </p>

          <h3>Impact sur la mémoire de travail</h3>
          <p>
            Les interruptions fréquentes peuvent saturer la mémoire de travail, cette capacité limitée à maintenir et manipuler des informations temporairement. Ceci affecte notre capacité à traiter l'information de façon approfondie.
          </p>

          <h2>Neurosciences appliquées : 5 stratégies pour renforcer l'attention</h2>

          <div className="not-prose my-8 bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
              Stratégies scientifiquement validées
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
              Ces 5 techniques s'appuient sur des recherches en neurosciences cognitives et peuvent être appliquées immédiatement dans votre quotidien.
            </p>
          </div>

          <h3>1. La technique Pomodoro adaptée</h3>
          <p>
            Plutôt que des sessions arbitraires, utilisez des blocs de 25 minutes basés sur les cycles naturels d'attention. Cette durée correspond approximativement aux limites de la concentration soutenue pour la plupart des individus.
          </p>
          <p>
            <strong>Application pratique :</strong> Choisissez une tâche unique, éliminez les distractions visibles, et travaillez 25 minutes avant une pause de 5 minutes.
          </p>

          <h3>2. Entraînement de l'attention sélective</h3>
          <p>
            Des exercices spécifiques peuvent améliorer le contrôle attentionnel. La recherche de Tang & Posner (2009) montre que même de courts entraînements peuvent modifier l'activité des réseaux attentionnels.
          </p>
          <p>
            <strong>Application pratique :</strong> Pratiquez la méditation de pleine attention 10 minutes par jour, en vous concentrant sur votre respiration et en ramenant doucement votre attention quand elle dérive.
          </p>

          <h3>3. Aménagement de l'environnement cognitif</h3>
          <p>
            L'architecture de choix influence nos comportements attentionnels. Modifier l'environnement physique et numérique peut réduire la charge cognitive des décisions d'attention.
          </p>
          <p><strong>Application pratique :</strong></p>
          <ul>
            <li>Désactivez les notifications non essentielles</li>
            <li>Utilisez des applications de blocage pendant le travail concentré</li>
            <li>Aménagez un espace de travail visuellement épuré</li>
          </ul>

          <h3>4. Récupération attentionnelle par la nature</h3>
          <p>
            La Théorie de la Restauration Attentionnelle (Kaplan, 1995) suggère que certains environnements naturels peuvent restaurer les capacités attentionnelles fatiguées.
          </p>
          <p>
            <strong>Application pratique :</strong> Intégrez des pauses de 10-15 minutes dans des espaces verts ou regardez des images de nature si l'accès à l'extérieur est limité.
          </p>

          <h3>5. Gestion stratégique des interruptions</h3>
          <p>
            Plutôt que de subir les interruptions, planifiez-les. Créez des moments dédiés à la consultation des messages et réseaux sociaux.
          </p>
          <p>
            <strong>Application pratique :</strong> Consultez emails et notifications à des heures fixes (ex: 9h, 14h, 17h) plutôt qu'en continu.
          </p>

          <h2>Ce que nous dit la recherche récente</h2>

          <h3>Plasticité attentionnelle</h3>
          <p>
            Des études récentes montrent que l'attention peut être entraînée. Klingberg (2010) démontre que des exercices répétés peuvent améliorer la capacité de concentration, même chez les adultes.
          </p>

          <h3>Variabilité individuelle</h3>
          <p>
            La recherche révèle d'importantes différences individuelles dans la sensibilité aux distractions. Certaines personnes maintiennent mieux leur concentration que d'autres face aux interruptions (Forster & Lavie, 2008).
          </p>

          <h3>Impact du sommeil</h3>
          <p>
            Le manque de sommeil affecte significativement les capacités attentionnelles. Une étude de Lim & Dinges (2010) montre que même une privation modérée de sommeil réduit la vigilance et augmente les erreurs d'attention.
          </p>

          <h2>Construire une attention résiliente</h2>
          <p>
            L'attention n'est pas une ressource fixe mais une capacité qui peut être développée par un entraînement approprié. La clé réside dans la compréhension de nos limites cognitives et l'adaptation de nos stratégies en conséquence.
          </p>
          
          <p>
            La technologie n'est pas intrinsèquement négative pour l'attention, mais son usage doit être conscient et stratégique. Apprendre à naviguer intelligemment dans l'environnement numérique moderne devient une compétence essentielle du 21e siècle.
          </p>

          <div className="not-prose my-8 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">Testez votre attention dès maintenant</h3>
            <p className="mb-4">
              Utilisez notre Habit Tracker pour suivre vos sessions de concentration et mesurer vos progrès.
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
                L'attention fragmentée est-elle un problème récent ?
              </summary>
              <p className="mt-2 text-sm">
                Le phénomène d'attention divisée a toujours existé, mais l'intensité et la fréquence des distractions numériques créent de nouveaux défis pour notre système attentionnel.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Peut-on réellement améliorer sa concentration ?
              </summary>
              <p className="mt-2 text-sm">
                Oui, la recherche montre que l'attention peut être entraînée grâce à la plasticité cérébrale. Les améliorations sont mesurables après quelques semaines de pratique régulière.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Le multitâche est-il toujours inefficace ?
              </summary>
              <p className="mt-2 text-sm">
                Pour des tâches automatisées ou simples, le multitâche peut être acceptable. Cependant, pour des activités complexes nécessitant de la réflexion, la concentration unique reste plus efficace.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Combien de temps faut-il pour voir des améliorations ?
              </summary>
              <p className="mt-2 text-sm">
                Les premières améliorations dans le contrôle attentionnel peuvent être observées après 2-3 semaines d'entraînement régulier de 10-15 minutes par jour.
              </p>
            </details>
          </div>

          <div className="not-prose my-12 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Continuez votre apprentissage</h3>
            <p className="mb-4">
              Approfondissez vos connaissances en neurosciences appliquées avec nos autres articles.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Voir tous les articles
              </Link>
              <span>·</span>
              <Link to="/resources" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Ressources gratuites
              </Link>
              <span>·</span>
              <Link to="/#newsletter" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}