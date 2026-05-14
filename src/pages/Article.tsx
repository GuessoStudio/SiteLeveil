// src/pages/Article.tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams, Link } from "react-router-dom";
import { articlesBySlug } from "../content/index";
import { useNeuroJournal } from "../hooks/useNeuroJournal";
import { Heart } from "lucide-react";
import { ReadingProgressBar } from "../components/ui/animations/ReadingProgressBar";

export default function Article() {
  const { slug } = useParams();
  // Safe access to articlesBySlug
  const Component = slug && (articlesBySlug as any)[slug] ? (articlesBySlug as any)[slug] : null;

  const { saveReadingProgress, readingProgress, toggleFavorite, isFavorite } = useNeuroJournal();

  // Find article metadata
  const [currentArticle, setCurrentArticle] = React.useState<any>(null);

  useEffect(() => {
    // Dynamic import to avoid circular dependency issues if any, or just cleaner separation
    import('../data/blog-articles').then(module => {
      const found = module.articles.find(a => a.slug === slug);
      setCurrentArticle(found || null);
    });
  }, [slug]);

  const isFav = currentArticle ? isFavorite(currentArticle.id, 'article') : false;

  useEffect(() => {
    if (!slug) return;

    // Restore scroll position
    const savedProgress = readingProgress[slug];
    if (savedProgress && savedProgress > 0) {
      // Delay slightly to ensure content is loaded
      setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScroll = (savedProgress / 100) * scrollHeight;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }, 500);
    }

    // Track scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Save progress if changed meaningfully (throttle to nearest integer)
      if (docHeight > 0) {
        // Use a timeout to debounce saving
        const progress = Math.min(100, Math.max(0, Math.round(scrollPercent)));
        saveReadingProgress(slug, progress);
      }
    };

    // Throttle scroll event
    let timeoutId: any = null;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 1000); // Save every 1 second max
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [slug]); // Depend on slug ONLY to re-run on page change (hook functions are stable context usually, preventing infinite loop carefully)


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

  return (
    <>
      <ReadingProgressBar />
      <Component />
      {/* Guard SSR : createPortal requiert document.body (browser uniquement) */}
      {typeof document !== 'undefined' && currentArticle && ReactDOM.createPortal(
        <button
          onClick={() => toggleFavorite({
            id: currentArticle.id,
            title: currentArticle.title,
            type: 'article',
            url: `/blog/${currentArticle.slug}`,
            image: currentArticle.image
          })}
          className={`fixed right-6 z-[9999] p-4 rounded-full shadow-lg transition-all transform hover:scale-110 ${isFav
            ? "bg-white text-red-500 border-2 border-red-500"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.5rem)' }}
          title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
          aria-label="Toggle Favorite"
        >
          <Heart
            className={`w-6 h-6 transition-colors ${isFav ? "fill-current" : ""}`}
          />
        </button>,
        document.body
      )}
    </>
  );
}
