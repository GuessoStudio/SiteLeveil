// ================================
// ÉTAPE 6 : src/components/animations/RevealOnScroll.tsx
// ================================

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from 'hooks/useScrollReveal'

interface RevealOnScrollProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  triggerOnce?: boolean
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = '',
  triggerOnce = true
}) => {
  const { ref, isVisible, isMounted } = useScrollReveal({ 
    delay,
    triggerOnce,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  // Fonction pour obtenir l'état initial selon la direction
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

  // Fonction pour obtenir l'état d'animation
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
            ease: [0.34, 1.56, 0.64, 1] // Ease plus élastique pour scale
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