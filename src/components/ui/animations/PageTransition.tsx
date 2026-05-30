import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()

  // Le serveur SSG rend le wrapper a l'etat "animate" (opacity:1, transform:none).
  // Si le 1er render client appliquait l'animation d'entree (initial opacity:0), le style
  // serialise differerait du HTML serveur -> mismatch d'hydratation (#418/#423/#425) sur tout
  // l'arbre de page. On desactive donc l'animation d'entree au 1er render (hydrated=false,
  // identique au serveur), puis on l'active pour les navigations client suivantes.
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={hydrated ? { opacity: 0, y: 20, scale: 0.99 } : false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
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