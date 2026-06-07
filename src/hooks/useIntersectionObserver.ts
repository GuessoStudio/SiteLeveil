import { useEffect, useRef, useState } from 'react'

/**
 * Révèle un élément au scroll.
 *
 * Déclenche EN AVANCE : `rootMargin` étend la zone de détection de 200px sous le
 * viewport, donc l'animation démarre avant que l'élément n'entre à l'écran. Couplé
 * à `threshold: 0` (le moindre pixel suffit), l'élément a fini son fondu au moment
 * où tu arrives dessus — au lieu d'apparaître en retard une fois déjà visible.
 *
 * @param threshold  fraction de l'élément visible requise (0 = dès le 1er pixel)
 * @param rootMargin marge CSS "top right bottom left" ; bottom positif = avance
 */
export function useInView(threshold = 0, rootMargin = '0px 0px 280px 0px') {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold, rootMargin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, inView }
}
