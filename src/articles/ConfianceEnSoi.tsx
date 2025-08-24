import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const meta = {
  slug: "confiance-en-soi-durable",
  title: "Construire une confiance en soi durable",
  excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
  category: "Développement Personnel",
  readTime: 10,
  date: "2024-01-20",
  author: "L'Éveil",
  image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tags: ["confiance en soi", "estime de soi", "développement personnel"],
};

export default function ConfianceEnSoi() {
  const site = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "";
  const url = `${site}/blog/${meta.slug}`;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.excerpt}
        type="article"
        path={`/blog/${meta.slug}`}
        datePublished={meta.date}
        dateModified={meta.date}
        authorName={meta.author}
        tags={meta.tags}
      />
      
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/blog" className="text-indigo-600 hover:underline">
              ← Retour au blog
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
              <p className="text-gray-600 mb-4">{meta.excerpt}</p>
              <div className="text-sm text-gray-500">
                {meta.readTime} min de lecture • {new Date(meta.date).toLocaleDateString('fr-FR')}
              </div>
            </header>

            <div className="prose max-w-none">
              <p>Contenu de l'article à venir...</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}