// ================================
// RÉVEAL ON SCROLL - VERSION OPTIMISÉE (SSG & PERF)
// src/components/ui/animations/RevealOnScroll.tsx
// ================================

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  triggerOnce?: boolean
  staggerChildren?: number
  rootMargin?: string
}

export function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30, // Distance réduite pour moins de Layout Shift
  className = '',
  triggerOnce = true,
  staggerChildren = 0,
  rootMargin = "-50px"
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Custom hook pour reduced motion + SSG
  const [reducedMotion, setReducedMotion] = useState(false)
  const isServer = typeof window === 'undefined'
  
  useEffect(() => {
    if (isServer) return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [isServer])

  const isInView = useInView(ref, { once: triggerOnce, margin: rootMargin as any })

  // Si on est côté serveur ou reduced motion, pas d'animation
  // Le retour direct d'une div évite les problèmes d'hydratation
  if (isServer || reducedMotion) {
    return <div className={className}>{children}</div>
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: direction === 'scale' ? 0.95 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as any, // Cubic bezier élégant (Apple-like)
        ...(staggerChildren > 0 && { staggerChildren })
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{
        // Optimisation perf: on évite "will-change: transform" en continu 
        // car framer-motion le gère dynamiquement pendant l'animation
      }}
      aria-hidden={!isInView}
    >
      {children}
    </motion.div>
  )
}