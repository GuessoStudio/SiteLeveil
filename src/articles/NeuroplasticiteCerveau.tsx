// src/articles/NeuroplasticiteCerveau.tsx
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SmartImg from "../components/SmartImg";

const meta = {
  slug: "neuroplasticite-cerveau",
  title: "La neuroplasticité : votre cerveau peut changer",
  excerpt:
    "Explorez les dernières découvertes sur la capacité du cerveau à se réorganiser tout au long de la vie.",
  category: "Neurosciences",
  readTime: 12,
  date: "2024-01-12",
  author: "L'Éveil",
  image:
    "/images/articles/neuroplasticite-cover.jpg",
  tags: ["neuroplasticité", "cerveau", "neurosciences", "apprentissage"],
};

export default function NeuroplasticiteCerveau() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "";
  const url = `${site}/blog/${meta.slug}`;
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.category)}`;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.excerpt}
        image={og}
        type="article"
        path={`/blog/${meta.slug}`}
        datePublished={meta.date}
        dateModified={meta.date}
        authorName={meta.author}
        tags={meta.tags}
      />
      
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Retour au blog */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-2"
            >
              ← Retour au blog
            </Link>
          </div>

          {/* Header de l'article */}
          <header className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {meta.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                {meta.title}
              </h1>
              
              <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400 mb-8">
                <div className="flex items-center gap-2">
                  <span>Par {meta.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{new Date(meta.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{meta.readTime} min de lecture</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-12">
                <SmartImg
                  src={meta.image}
                  alt={meta.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="max-w-4xl mx-auto prose prose-lg prose-neutral dark:prose-invert">
            
            <h2>Qu'est-ce que la neuroplasticité ?</h2>
            <p>
              La neuroplasticité, également appelée plasticité cérébrale, désigne la capacité extraordinaire 
              de notre cerveau à se modifier, s'adapter et se réorganiser tout au long de notre vie. 
              Contrairement à ce que l'on pensait autrefois, le cerveau n'est pas une structure figée 
              après l'enfance, mais un organe dynamique capable de changements profonds.
            </p>

            <p>
              Cette découverte révolutionnaire en neurosciences a transformé notre compréhension du 
              potentiel humain. Elle signifie que nous pouvons littéralement remodeler notre cerveau 
              par nos expériences, nos apprentissages et nos habitudes, quel que soit notre âge.
            </p>

            <h2>Les mécanismes de la plasticité cérébrale</h2>
            
            <h3>Formation de nouvelles connexions synaptiques</h3>
            <p>
              Chaque fois que nous apprenons quelque chose de nouveau, notre cerveau forme de nouvelles 
              connexions entre les neurones, appelées synapses. Ces connexions se renforcent avec la 
              répétition et peuvent créer de nouveaux circuits neurologiques durables.
            </p>

            <h3>Neurogenèse : la naissance de nouveaux neurones</h3>
            <p>
              Longtemps, on a cru que nous naissions avec un nombre fixe de neurones. Aujourd'hui, 
              nous savons que le cerveau adulte peut générer de nouveaux neurones, particulièrement 
              dans l'hippocampe, une région cruciale pour la mémoire et l'apprentissage.
            </p>

            <h3>Réorganisation corticale</h3>
            <p>
              Le cerveau peut réallouer des zones entières à de nouvelles fonctions. Par exemple, 
              chez les personnes aveugles, les régions visuelles peuvent être recrutées pour améliorer 
              l'audition ou le toucher.
            </p>

            <h2>Facteurs qui favorisent la neuroplasticité</h2>

            <h3>L'apprentissage actif</h3>
            <p>
              Apprendre de nouvelles compétences, langues ou instruments stimule la formation de 
              nouvelles connexions. Plus l'apprentissage est actif et engageant, plus l'effet 
              est prononcé.
            </p>

            <h3>L'exercice physique</h3>
            <p>
              L'activité physique régulière augmente la production de facteurs de croissance 
              neurotropes (BDNF), qui favorisent la croissance et la survie des neurones.
            </p>

            <h3>La méditation et la pleine conscience</h3>
            <p>
              Les pratiques contemplatives peuvent modifier la structure et la fonction de régions 
              cérébrales impliquées dans l'attention, la régulation émotionnelle et la conscience 
              de soi.
            </p>

            <h3>Le sommeil de qualité</h3>
            <p>
              Pendant le sommeil, le cerveau consolide les apprentissages de la journée et élimine 
              les déchets métaboliques. Un sommeil insuffisant compromet la plasticité cérébrale.
            </p>

            <h3>La stimulation sociale</h3>
            <p>
              Les interactions sociales riches stimulent de multiples régions cérébrales et favorisent 
              le développement de nouvelles connexions neurologiques.
            </p>

            <h2>Applications pratiques dans votre vie</h2>

            <h3>Développement de nouvelles habitudes</h3>
            <p>
              Comprendre la neuroplasticité peut vous aider à développer de meilleures habitudes. 
              Chaque répétition renforce les circuits neurologiques associés, rendant progressivement 
              le nouveau comportement plus automatique.
            </p>

            <h3>Récupération après un traumatisme</h3>
            <p>
              La neuroplasticité offre de l'espoir pour la récupération après des blessures 
              cérébrales ou des traumatismes psychologiques. Le cerveau peut développer de 
              nouvelles voies pour compenser les zones endommagées.
            </p>

            <h3>Amélioration des performances cognitives</h3>
            <p>
              En comprenant comment stimuler votre neuroplasticité, vous pouvez améliorer votre 
              mémoire, votre attention, votre créativité et vos capacités d'apprentissage.
            </p>

            <h2>Stratégies pour optimiser votre neuroplasticité</h2>

            <h3>Sortez de votre zone de confort</h3>
            <p>
              Challengez-vous régulièrement avec de nouvelles activités. Apprenez un instrument, 
              une langue étrangère, ou essayez un nouveau sport. La nouveauté stimule la formation 
              de nouvelles connexions.
            </p>

            <h3>Pratiquez la variété</h3>
            <p>
              Alternez entre différents types d'apprentissages et d'activités. Cette variété 
              maintient le cerveau flexible et adaptable.
            </p>

            <h3>Cultivez la curiosité</h3>
            <p>
              Maintenez une attitude de curiosité et d'ouverture. Posez des questions, explorez 
              de nouveaux sujets, et cherchez à comprendre plutôt qu'à simplement mémoriser.
            </p>

            <h3>Intégrez l'exercice physique</h3>
            <p>
              Incluez une activité physique régulière dans votre routine. Même 30 minutes de 
              marche quotidienne peuvent favoriser la neuroplasticité.
            </p>

            <h2>L'avenir de la recherche en neuroplasticité</h2>
            <p>
              La recherche en neuroplasticité continue d'évoluer rapidement. Les scientifiques 
              explorent de nouvelles façons de stimuler la plasticité cérébrale, de la stimulation 
              magnétique transcranienne aux interfaces cerveau-ordinateur.
            </p>

            <p>
              Ces avancées ouvrent de nouvelles perspectives pour traiter les troubles neurologiques, 
              améliorer l'apprentissage et potentiellement même ralentir le vieillissement cognitif.
            </p>

            <h2>Conclusion</h2>
            <p>
              La neuroplasticité nous enseigne que notre cerveau n'est pas notre destin. Nous avons 
              le pouvoir de façonner activement notre architecture neurale par nos choix et nos 
              actions quotidiennes.
            </p>

            <p>
              Cette connaissance est à la fois libératrice et responsabilisante. Elle nous rappelle 
              que nous sommes les architectes de notre propre esprit, capables de construire les 
              circuits neurologiques qui soutiendront nos objectifs et nos aspirations.
            </p>

            <p>
              Commencez dès aujourd'hui : choisissez un nouveau défi, sortez de votre routine, 
              et donnez à votre cerveau les stimuli dont il a besoin pour continuer à grandir 
              et s'épanouir. Votre cerveau vous en remerciera par une amélioration de vos 
              capacités cognitives et de votre bien-être général.
            </p>

          </article>

          {/* Tags */}
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