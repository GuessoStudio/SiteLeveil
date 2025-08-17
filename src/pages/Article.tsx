// src/pages/Article.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { articlesBySlug } from "../content/index";

export default function Article() {
  const { slug } = useParams();
  const Component = slug ? (articlesBySlug as any)[slug] : null;

  if (!Component) {
    return (
      <main className="container mx-auto px-4 py-12">
        <p className="mb-6">Article introuvable.</p>
        <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          ← Retour au blog
        </Link>
      </main>
    );
  }
  return <Component />;
}
