// src/articles/NeuroDopamineRoutine.tsx
import { Link } from "react-router-dom";
import SmartImg from "../components/SmartImg";
import SEO from "../components/SEO";

const meta = {
  slug: "neuro-dopamine-routine",
  title: "Dopamine intelligente : 7 micro-actions pour relancer ta motivation",
  description: "Utilise la dopamine à ton avantage avec 7 micro-actions simples et efficaces.",
  cover: "/images/articles/dopamine-cover-1200x630.jpg",
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
  
  // 👉 On passera une OG-image auto à l’étape suivante
  const og = `${site}/og?title=${encodeURIComponent(meta.title)}&tag=${encodeURIComponent(meta.tags[0])}`;

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        image={og}
        type="article"
        url={url}
        datePublished={meta.datePublished}
        dateModified={meta.dateModified}
      />
      <article id="contenu" className="prose prose-neutral dark:prose-invert mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d’Ariane" className="not-prose text-sm mb-4">
          <Link to="/">Accueil</Link> <span aria-hidden>›</span> <Link to="/blog">Blog</Link> <span aria-hidden>›</span>{" "}
          <span aria-current="page">{meta.title}</span>
        </nav>

        <header className="not-prose">
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">{meta.title}</h1>
          <p className="mt-2 text-sm opacity-80">
            <time dateTime={meta.datePublished}>{new Date(meta.datePublished).toLocaleDateString("fr-FR", { day:"2-digit", month:"long", year:"numeric" })}</time>
            {" · "}{meta.readingTime}{" · "}
            {meta.tags.map((t,i)=> <span key={t}>#{t}{i<meta.tags.length-1?" ":""}</span>)}
          </p>
          <div className="mt-6">
            <SmartImg src={meta.cover} alt={`Image de couverture : ${meta.title}`} width={1200} height={630}
              fetchPriority="high" loading="eager" decoding="sync" style={{ width:"100%", height:"auto", borderRadius:"1rem" }} />
          </div>
        </header>

        <section className="mt-10">
          <h2>TL;DR</h2>
          <ul>
            <li>La dopamine guide l’élan vers l’action (pas juste le “plaisir”).</li>
            <li>Crée des boucles courtes : intention → action → feedback.</li>
            <li>Teste 7 micro-actions plus bas.</li>
          </ul>
        </section>

        {/* … ton contenu … */}
      </article>
    </>
  );
}
