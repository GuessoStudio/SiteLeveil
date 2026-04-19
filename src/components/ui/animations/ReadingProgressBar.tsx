import { useEffect, useState } from 'react';

/**
 * ReadingProgressBar
 *
 * Barre de progression de lecture affichée en haut de l'écran.
 * Purement CSS (transform: scaleX) pour une excellente performance (GPU).
 */
export function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScrollCompletion = () => {
      // Hauteur totale scrollable
      const scrollProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setReadingProgress(Number((scrollProgress / scrollHeight).toFixed(4)));
      }
    };

    window.addEventListener('scroll', updateScrollCompletion, { passive: true });
    updateScrollCompletion();

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[60] bg-gold-200/20 origin-left pointer-events-none hidden md:block" // Cachée sur mobile par défaut, affichée en MD
    >
      <div 
        className="h-full bg-gradient-to-r from-indigo-500 to-gold-500 will-change-transform"
        style={{ 
          transform: `scaleX(${readingProgress})`,
          transformOrigin: 'left',
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
}
