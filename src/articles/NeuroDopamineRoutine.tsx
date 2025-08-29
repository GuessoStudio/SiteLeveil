// src/articles/NeuroDopamineRoutine.tsx
import { Link } from "react-router-dom";
import SmartImg from "../components/SmartImg";
import SEO from "../components/SEO";

const meta = {
  slug: "neuro-dopamine-routine",
  title: "Dopamine intelligente : 7 micro-actions pour relancer ta motivation",
  description: "Utilise la dopamine à ton avantage avec 7 micro-actions simples et efficaces basées sur les neurosciences.",
  cover: "/images/articles/dopamine-cover.jpg",
  datePublished: "2025-08-13",
  dateModified: "2025-08-13",
  tags: ["neurosciences", "motivation", "habitudes"],
  author: { name: "Guesso" },
  category: "Psychologie",
  readingTime: "6 min",
};

export default function NeuroDopamineRoutine() {
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
          <section>
            <h2>TL;DR</h2>
            <ul>
              <li>La dopamine guide l'élan vers l'action (pas juste le "plaisir").</li>
              <li>Crée des boucles courtes : intention → action → feedback.</li>
              <li>Teste 7 micro-actions plus bas.</li>
            </ul>
          </section>

          <p className="lead">
            Tu connais cette sensation : tu veux te mettre au sport, apprendre une nouvelle compétence ou enfin ranger ton bureau, mais la motivation n'est jamais au rendez-vous. Le problème ne vient pas de ta volonté, mais de la façon dont tu utilises ta dopamine.
          </p>

          <h2>Comprendre la dopamine : au-delà du plaisir</h2>
          
          <p>
            La dopamine n'est pas la "molécule du plaisir" comme on l'entend souvent. Les recherches de Wolfram Schultz ont montré qu'elle fonctionne plutôt comme un système de prédiction et de motivation. Elle se libère principalement dans l'anticipation d'une récompense, pas pendant celle-ci.
          </p>

          <p>
            Cette nuance change tout : au lieu d'attendre passivement la motivation, tu peux créer les conditions neurochimiques pour qu'elle apparaisse.
          </p>

          <h2>Le problème des récompenses modernes</h2>

          <p>
            Notre environnement numérique exploite nos circuits dopaminergiques de façon intensive. Notifications, likes, vidéos courtes : chaque stimulus déclenche une petite libération de dopamine sans effort de notre part.
          </p>

          <p>
            Résultat : notre seuil de stimulation augmente. Les activités utiles mais moins immédiatement gratifiantes (exercice, lecture, travail concentré) semblent fades en comparaison.
          </p>

          <h2>Les 7 micro-actions pour optimiser ta dopamine</h2>

          <div className="not-prose my-8 bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
              Stratégies basées sur les neurosciences
            </h3>
            <p className="text-indigo-800 dark:text-indigo-200 text-sm">
              Ces techniques exploitent les mécanismes naturels de la dopamine pour créer une motivation durable.
            </p>
          </div>

          <h3>1. La règle des 2 minutes</h3>
          <p>
            Commence toujours par une version de 2 minutes de ton objectif. Veux-tu lire plus ? Lis une page. Faire du sport ? Fais 10 pompes. Cette micro-action déclenche la dopamine de l'accomplissement sans résistance psychologique.
          </p>

          <h3>2. Le "dopamine fasting" ciblé</h3>
          <p>
            Avant une tâche importante, évite pendant 1-2 heures les stimulations intenses : réseaux sociaux, vidéos, musique énergisante. Cette privation temporaire rend l'activité cible plus attrayante neurochimiquement.
          </p>

          <h3>3. La célébration micro</h3>
          <p>
            Après chaque petite victoire, prends 10 secondes pour reconnaître consciemment ton succès. Dis-toi "c'est fait" ou fais un petit geste de victoire. Cette reconnaissance renforce le circuit dopaminergique de l'accomplissement.
          </p>

          <h3>4. La randomisation des récompenses</h3>
          <p>
            Ne te récompense pas systématiquement après chaque effort, mais de façon imprévisible. Les recherches montrent que l'incertitude de la récompense maintient l'engagement plus longtemps qu'une gratification constante.
          </p>

          <h3>5. Le "bundling" de plaisir</h3>
          <p>
            Associe une activité que tu dois faire avec quelque chose que tu aimes. Écoute ton podcast préféré seulement pendant le ménage, ou bois ton café spécial uniquement en travaillant sur ce projet important.
          </p>

          <h3>6. La visualisation du processus</h3>
          <p>
            Plutôt que d'imaginer le résultat final, visualise-toi en train de faire l'action. Les études d'imagerie cérébrale montrent que cette technique active les mêmes circuits dopaminergiques que l'action réelle.
          </p>

          <h3>7. L'environnement frictionné</h3>
          <p>
            Rends les mauvaises habitudes plus difficiles et les bonnes plus faciles. Place ton téléphone dans une autre pièce, prépare tes vêtements de sport la veille. Chaque friction supprimée libère de l'énergie cognitive pour la motivation.
          </p>

          <h2>Comprendre les cycles dopaminergiques</h2>

          <p>
            La dopamine fonctionne par cycles. Après une libération, suit naturellement une baisse temporaire. C'est normal et prévisible, pas un échec personnel. Anticiper ces moments permet de ne pas abandonner au premier coup de moins bien.
          </p>

          <p>
            Les recherches d'Anna Lembke montrent que ces baisses temporaires renforcent en fait la sensibilité du système à long terme, comme un muscle qui se renforce après l'effort.
          </p>

          <h2>Applications pratiques pour différents objectifs</h2>

          <h3>Pour l'exercice physique</h3>
          <p>
            Commence par 5 minutes de marche, célèbre cette action, puis augmente progressivement. Associe l'exercice à une playlist que tu n'écoutes qu'à ce moment-là.
          </p>

          <h3>Pour l'apprentissage</h3>
          <p>
            Étudie par blocs de 25 minutes avec des pauses imprévisibles (parfois 5 min, parfois 10). Récompense-toi de façon aléatoire après certaines sessions d'étude.
          </p>

          <h3>Pour la créativité</h3>
          <p>
            Pratique un "dopamine fasting" de 30 minutes avant tes sessions créatives. Évite toute stimulation externe pour que ton cerveau trouve de l'intérêt dans l'activité créative elle-même.
          </p>

          <div className="not-prose my-8 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">Suivez vos progrès scientifiquement</h3>
            <p className="mb-4">
              Utilisez notre Habit Tracker pour mesurer l'efficacité de ces techniques sur vos habitudes quotidiennes.
            </p>
            <Link 
              to="/habit-tracker" 
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Commencer le tracking
            </Link>
          </div>

          <h2>Ce qu'il faut retenir</h2>
          
          <p>
            La motivation n'est pas un trait de personnalité fixe mais un système neurochimique que tu peux influencer. En comprenant comment fonctionne la dopamine, tu passes d'une approche passive ("j'attends d'être motivé") à une approche active ("je crée les conditions de ma motivation").
          </p>

          <p>
            Ces 7 micro-actions ne demandent aucun équipement spécial ni changement radical de vie. Elles exploitent simplement les mécanismes que ton cerveau utilise déjà, mais de façon plus consciente et stratégique.
          </p>

          <h2>Questions fréquentes</h2>
          
          <div className="not-prose space-y-4">
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Combien de temps faut-il pour voir des effets ?
              </summary>
              <p className="mt-2 text-sm">
                Les premiers effets peuvent être ressentis dès la première application, mais l'adaptation neurochimique complète prend généralement 2-3 semaines de pratique régulière.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Le "dopamine fasting" est-il dangereux ?
              </summary>
              <p className="mt-2 text-sm">
                Non, il s'agit simplement d'éviter temporairement les stimulations intenses (réseaux sociaux, vidéos). C'est une pause, pas une privation totale de plaisir ou d'activité.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Ces techniques marchent-elles pour tous les types d'objectifs ?
              </summary>
              <p className="mt-2 text-sm">
                Elles sont particulièrement efficaces pour les habitudes quotidiennes et les projets à moyen terme. Pour les objectifs très long terme, il faut les combiner avec d'autres stratégies de persistence.
              </p>
            </details>
            
            <details className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Que faire si je n'arrive pas à maintenir ces nouvelles habitudes ?
              </summary>
              <p className="mt-2 text-sm">
                Commence par une seule technique à la fois. La règle des 2 minutes est souvent la plus accessible. Une fois qu'elle devient automatique, ajoute progressivement les autres.
              </p>
            </details>
          </div>

          <div className="not-prose my-12 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Approfondissez vos connaissances</h3>
            <p className="mb-4">
              Découvrez d'autres stratégies basées sur les neurosciences pour optimiser votre quotidien.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Tous les articles
              </Link>
              <span>•</span>
              <Link to="/resources" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Ressources gratuites
              </Link>
              <span>•</span>
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