// ================================
// ÉTAPE 3 : src/components/animations/PageTransition.tsx
// ================================

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()

  // Variants définis DANS le composant
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.99
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.55, 0.055, 0.675, 0.19]
      }
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        
        initial="initial"
        animate="enter"
        exit="exit"
        className="w-full"
        style={{
          willChange: 'transform, opacity'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}