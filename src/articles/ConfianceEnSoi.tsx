// src/articles/ConfianceSoi.tsx
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SmartImg from "../components/SmartImg";

const meta = {
  slug: "confiance-en-soi-durable",
  title: "Construire une confiance en soi durable",
  excerpt:
    "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
  category: "Développement Personnel",
  readTime: 10,
  date: "2024-01-10",
  author: "L'Éveil",
  image:
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tags: ["confiance en soi", "estime de soi", "développement personnel", "psychologie"],
};

export default function ConfianceSoi() {
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
                <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
            
            <h2>Comprendre la confiance en soi : au-delà des idées reçues</h2>
            <p>
              La confiance en soi est souvent mal comprise. Il ne s'agit pas d'un trait de 
              personnalité fixe avec lequel on naît, mais plutôt d'une compétence qui peut 
              être développée et renforcée tout au long de la vie.
            </p>

            <p>
              La recherche en psychologie nous montre que la confiance en soi authentique 
              repose sur des bases solides : la connaissance de soi, l'acceptation de ses 
              forces et faiblesses, et le développement progressif de compétences réelles.
            </p>

            <h2>Les fondements scientifiques de l'estime de soi</h2>

            <h3>La théorie de l'auto-efficacité d'Albert Bandura</h3>
            <p>
              Le psychologue Albert Bandura a démontré que notre sentiment d'efficacité 
              personnelle influence directement notre comportement, nos émotions et notre 
              motivation. Plus nous croyons en notre capacité à accomplir une tâche, 
              plus nous avons de chances de réussir.
            </p>

            <h3>Les sources de l'auto-efficacité</h3>
            <p>
              Bandura identifie quatre sources principales de l'auto-efficacité :
            </p>
            <ul>
              <li><strong>Les expériences de maîtrise</strong> : nos succès passés</li>
              <li><strong>L'apprentissage social</strong> : observer les réussites d'autrui</li>
              <li><strong>La persuasion verbale</strong> : les encouragements reçus</li>
              <li><strong>Les états physiologiques</strong> : notre état physique et émotionnel</li>
            </ul>

            <h3>Le rôle des neurotransmetteurs</h3>
            <p>
              La confiance en soi est aussi liée à la chimie de notre cerveau. La sérotonine 
              favorise une humeur positive et la confiance, tandis que la dopamine nous motive 
              à poursuivre nos objectifs. L'exercice physique, la méditation et une alimentation 
              équilibrée peuvent naturellement optimiser ces neurotransmetteurs.
            </p>

            <h2>Les obstacles à la confiance en soi</h2>

            <h3>Le syndrome de l'imposteur</h3>
            <p>
              Près de 70% des personnes expérimentent le syndrome de l'imposteur à un moment 
              donné. Ce phénomène se caractérise par la peur d'être "démasqué" malgré des 
              compétences réelles et des accomplissements objectifs.
            </p>

            <h3>Le perfectionnisme toxique</h3>
            <p>
              Le perfectionnisme peut devenir un ennemi de la confiance en soi. Il crée des 
              standards irréalistes qui mènent inévitablement à la déception et au sentiment 
              d'échec.
            </p>

            <h3>Les biais cognitifs limitants</h3>
            <p>
              Notre cerveau peut nous jouer des tours avec des biais comme :
            </p>
            <ul>
              <li>Le biais de confirmation négatif</li>
              <li>La généralisation excessive</li>
              <li>La personnalisation excessive</li>
              <li>La prédiction catastrophique</li>
            </ul>

            <h2>Techniques pratiques pour développer une confiance durable</h2>

            <h3>1. La technique des petites victoires</h3>
            <p>
              Commencez par vous fixer des objectifs petits mais réalisables. Chaque victoire, 
              même mineure, renforce votre sentiment d'efficacité personnelle. L'accumulation 
              de ces succès crée un momentum puissant.
            </p>

            <h3>2. La restructuration cognitive</h3>
            <p>
              Apprenez à identifier et challenger vos pensées négatives automatiques. 
              Remplacez "Je ne suis pas capable" par "Je peux apprendre à le faire" ou 
              "Je vais m'améliorer avec la pratique".
            </p>

            <h3>3. La visualisation positive</h3>
            <p>
              Pratiquez la visualisation de vos succès futurs. Cette technique, utilisée 
              par les athlètes de haut niveau, programme votre cerveau à anticiper le succès 
              plutôt que l'échec.
            </p>

            <h3>4. Le développement de compétences réelles</h3>
            <p>
              La vraie confiance se construit sur des fondations solides. Investissez dans 
              l'acquisition de compétences concrètes qui vous rapprochent de vos objectifs.
            </p>

            <h3>5. La pratique de l'auto-compassion</h3>
            <p>
              Traitez-vous avec la même bienveillance que vous offririez à un bon ami. 
              L'auto-critique excessive érode la confiance, tandis que l'auto-compassion 
              la nourrit.
            </p>

            <h2>Le plan d'action en 30 jours</h2>

            <h3>Semaine 1 : Auto-évaluation et prise de conscience</h3>
            <ul>
              <li>Identifiez vos forces et vos domaines d'amélioration</li>
              <li>Tenez un journal de vos pensées automatiques</li>
              <li>Définissez 3 objectifs spécifiques et mesurables</li>
            </ul>

            <h3>Semaine 2 : Mise en action</h3>
            <ul>
              <li>Commencez par le plus petit objectif</li>
              <li>Pratiquez la restructuration cognitive quotidiennement</li>
              <li>Célébrez chaque petit progrès</li>
            </ul>

            <h3>Semaine 3 : Consolidation</h3>
            <ul>
              <li>Augmentez progressivement la difficulté de vos défis</li>
              <li>Demandez des feedbacks constructifs</li>
              <li>Pratiquez la visualisation 10 minutes par jour</li>
            </ul>

            <h3>Semaine 4 : Intégration</h3>
            <ul>
              <li>Évaluez vos progrès objectivement</li>
              <li>Ajustez votre plan d'action</li>
              <li>Définissez vos prochains objectifs</li>
            </ul>

            <h2>L'importance de l'environnement social</h2>
            <p>
              Votre environnement joue un rôle crucial dans le développement de votre confiance. 
              Entourez-vous de personnes qui vous soutiennent et vous encouragent. Limitez le 
              temps passé avec ceux qui vous dévalorisent ou vous découragent.
            </p>

            <h3>Construire un réseau de soutien</h3>
            <ul>
              <li>Rejoignez des groupes partageant vos intérêts</li>
              <li>Trouvez un mentor dans votre domaine</li>
              <li>Cultivez des amitiés authentiques</li>
              <li>Considérez l'accompagnement professionnel si nécessaire</li>
            </ul>

            <h2>Maintenir sa confiance face aux échecs</h2>
            <p>
              L'échec fait partie intégrante de la vie et de l'apprentissage. La différence 
              entre les personnes confiantes et les autres réside dans leur capacité à voir 
              l'échec comme une opportunité d'apprentissage plutôt que comme une confirmation 
              de leur incompétence.
            </p>

            <h3>La résilience : rebondir après un échec</h3>
            <ul>
              <li>Analysez objectivement ce qui s'est passé</li>
              <li>Identifiez les leçons apprises</li>
              <li>Ajustez votre approche</li>
              <li>Recommencez avec ces nouvelles informations</li>
            </ul>

            <h2>La confiance en soi dans différents domaines de vie</h2>

            <h3>Au travail</h3>
            <p>
              Développez votre expertise, prenez des initiatives mesurées, et n'hésitez pas 
              à partager vos idées. La confiance professionnelle se construit par l'action 
              et les résultats.
            </p>

            <h3>Dans les relations</h3>
            <p>
              La confiance en soi améliore la qualité de nos relations. Elle nous permet 
              d'exprimer nos besoins, de poser des limites saines et d'être authentiques 
              avec les autres.
            </p>

            <h3>Dans les défis personnels</h3>
            <p>
              Que ce soit apprendre une nouvelle compétence, changer de carrière ou surmonter 
              une peur, la confiance en soi vous donne le courage de sortir de votre zone 
              de confort.
            </p>

            <h2>Erreurs à éviter</h2>

            <h3>Chercher la validation externe constante</h3>
            <p>
              Une confiance basée uniquement sur l'approbation des autres est fragile. 
              Développez votre capacité à vous auto-évaluer objectivement.
            </p>

            <h3>Comparer constamment avec les autres</h3>
            <p>
              Les comparaisons sont le vol de la joie. Concentrez-vous sur votre propre 
              parcours et vos progrès personnels.
            </p>

            <h3>Vouloir tout maîtriser immédiatement</h3>
            <p>
              La confiance se développe progressivement. Soyez patient avec vous-même et 
              célébrez les petites victoires en chemin.
            </p>

            <h2>Conclusion : Votre voyage vers une confiance authentique</h2>
            <p>
              Construire une confiance en soi durable est un processus continu, pas une 
              destination finale. C'est un investissement dans votre bien-être et votre 
              capacité à créer la vie que vous désirez.
            </p>

            <p>
              Rappelez-vous que la vraie confiance ne vient pas de l'absence de peur, 
              mais de votre capacité à agir malgré la peur. Elle se nourrit de vos 
              expériences, de vos apprentissages et de votre volonté de grandir.
            </p>

            <p>
              Commencez dès aujourd'hui : identifiez un domaine où vous aimeriez développer 
              votre confiance, fixez-vous un petit objectif réalisable, et passez à l'action. 
              Votre futur moi vous en remerciera.
            </p>

            <p>
              La confiance en soi n'est pas un luxe, c'est une nécessité pour une vie 
              épanouie. Vous avez tous les outils pour la développer - il ne reste plus 
              qu'à commencer le travail.
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