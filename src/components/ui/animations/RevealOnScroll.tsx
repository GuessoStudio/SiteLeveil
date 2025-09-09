// ================================
// RÉVEAL ON SCROLL - VERSION CORRIGÉE COMPLÈTE
// src/components/ui/animations/RevealOnScroll.tsx
// ================================

import React from 'react'
import { motion } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  triggerOnce?: boolean
}

// ✅ HOOK DÉFINI AVANT LE COMPOSANT
const useScrollRevealLocal = (options: any = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options

  const [isVisible, setIsVisible] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
    
    // Vérifier les préférences d'animation
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  React.useEffect(() => {
    if (!isMounted || reducedMotion) {
      setIsVisible(true) // Pas d'animation si reduced motion
      return
    }

    const element = ref.current
    if (!element) return

    const obs = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        if (delay > 0) {
          setTimeout(() => setIsVisible(true), delay)
        } else {
          setIsVisible(true)
        }
        
        if (triggerOnce) {
          obs.unobserve(element)
        }
      } else if (!triggerOnce) {
        setIsVisible(false)
      }
    }, { threshold, rootMargin })

    obs.observe(element)
    return () => obs.disconnect()
  }, [isMounted, reducedMotion, threshold, rootMargin, triggerOnce, delay])

  return { 
    ref, 
    isVisible: reducedMotion ? true : isVisible, 
    isMounted 
  }
}

// ✅ COMPOSANT PRINCIPAL
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = '',
  triggerOnce = true
}) => {
  // ✅ UTILISATION DU HOOK LOCAL
  const { ref, isVisible, isMounted } = useScrollRevealLocal({ 
    delay,
    triggerOnce,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance }
      case 'down':
        return { opacity: 0, y: -distance }
      case 'left':
        return { opacity: 0, x: distance }
      case 'right':
        return { opacity: 0, x: -distance }
      case 'scale':
        return { opacity: 0, scale: 0.9 }
      case 'fade':
      default:
        return { opacity: 0 }
    }
  }

  const getAnimateState = () => {
    const baseTransition = {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94]
    }

    switch (direction) {
      case 'up':
      case 'down':
        return { 
          opacity: 1, 
          y: 0,
          transition: baseTransition
        }
      case 'left':
      case 'right':
        return { 
          opacity: 1, 
          x: 0,
          transition: baseTransition
        }
      case 'scale':
        return { 
          opacity: 1, 
          scale: 1,
          transition: {
            ...baseTransition,
            ease: [0.34, 1.56, 0.64, 1]
          }
        }
      case 'fade':
      default:
        return { 
          opacity: 1,
          transition: baseTransition
        }
    }
  }

  // Pas d'animation si pas encore monté (évite le flash)
  if (!isMounted) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isVisible ? getAnimateState() : getInitialState()}
      className={className}
      style={{
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </motion.div>
  )
}