// ================================
// ÉTAPE 5 : src/hooks/useScrollReveal.ts
// ================================

import { useEffect, useRef, useState, useCallback } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Vérifier les préférences d'animation
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Vérifier si l'utilisateur préfère moins d'animations
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      if (delay > 0) {
        setTimeout(() => setIsVisible(true), delay)
      } else {
        setIsVisible(true)
      }
      
      // Arrêter d'observer si triggerOnce est true
      if (triggerOnce && ref.current) {
        observer?.unobserve(ref.current)
      }
    } else if (!triggerOnce) {
      setIsVisible(false)
    }
  }, [delay, triggerOnce])

  const [observer, setObserver] = useState<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!isMounted || reducedMotion) {
      setIsVisible(true) // Pas d'animation si reduced motion
      return
    }

    const element = ref.current
    if (!element) return

    const obs = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    })

    obs.observe(element)
    setObserver(obs)

    return () => obs.disconnect()
  }, [isMounted, reducedMotion, threshold, rootMargin, handleIntersection])

  return { 
    ref, 
    isVisible: reducedMotion ? true : isVisible,
    isMounted
  }
}