import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const meta = {
  slug: "surmonter-rejet-social",
  title: "Comment surmonter le rejet social",
  excerpt:
    "Découvrez les mécanismes psychologiques du rejet et les stratégies pour développer votre résilience émotionnelle.",
  category: "Psychologie",
  readTime: 8,
  date: "2024-01-15",
  author: "L'Éveil",
  image:
    "/images/articles/rejet-social-cover.jpg",
  tags: ["rejet social", "résilience", "psychologie", "estime de soi"],
};

const contentHTML = `
  <h2>Introduction</h2>
  <p>Le rejet social est l'une des expériences les plus douloureuses que nous puissions vivre...
  (ton contenu identique ici)
  </p>

  <h2>Les mécanismes psychologiques du rejet</h2>
  <p>Comprendre pourquoi le rejet nous affecte autant est la première étape...</p>

  <h3>L'impact neurologique</h3>
  <p>Quand nous sommes rejetés, notre cortex cingulaire antérieur s'active...</p>

  <h2>Stratégies pour développer la résilience</h2>
  <p>Heureusement, il existe des techniques éprouvées...</p>

  <h3>1. La restructuration cognitive</h3>
  <p>Apprenez à identifier et challenger vos pensées automatiques négatives...</p>

  <h3>2. Le développement de l'estime de soi</h3>
  <p>Une estime de soi solide agit comme un bouclier protecteur...</p>

  <h3>3. L'exposition graduelle</h3>
  <p>Comme pour toute phobie, l'exposition contrôlée au rejet peut réduire sa charge émotionnelle...</p>

  <h2>Conclusion</h2>
  <p>Surmonter le rejet social est un processus qui demande du temps et de la patience...</p>
`;

export default function RejetSocial() {
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
        path={`/blog/${meta.slug}`}           // canonical vers la bonne URL
        datePublished={meta.date}             // ton champ 'date' sert de datePublished
        dateModified={meta.date}              // même valeur pour l’instant
        authorName={meta.author}
        tags={meta.tags}
      />
      
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Retour au blog */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              aria-label="Retour au blog"
            >
              ← Retour au blog
            </Link>
          </div>

          {/* Article */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="mb-4">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                  {meta.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                {meta.title}
              </h1>

              <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                {meta.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                <div>L'Éveil</div>
                <div>{meta.readTime} min de lecture</div>
                <div>{new Date(meta.date).toLocaleDateString("fr-FR")}</div>
              </div>
            </header>

            <div className="mb-12">
              <img
                src={meta.image}
                alt={meta.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div
              id="contenu"
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: contentHTML }}
            />

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Tags</h3>
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
          </article>
        </div>
      </div>
    </>
  );
}
