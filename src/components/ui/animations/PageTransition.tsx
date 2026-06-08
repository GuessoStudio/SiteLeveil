import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

/**
 * Transition de page en CSS (remplace framer-motion pour sortir le chunk
 * framer du chemin critique de la home).
 *
 * Hydratation : le serveur SSG rend `<div class="w-full">` (aucune animation).
 * Le 1er rendu client doit produire EXACTEMENT le même markup, sinon mismatch
 * (#418/#423/#425). On lit donc un ref `mounted` (qui ne déclenche PAS de
 * re-render) : au 1er rendu il vaut false → pas de classe d'anim → identique au
 * serveur, et aucun flash sur la page d'atterrissage. À chaque navigation,
 * `useLocation` provoque un re-render avec mounted=true ; le `key={pathname}`
 * remonte le div, la classe `.page-transition` est appliquée et l'animation
 * rejoue (cf. @keyframes pageIn dans index.css).
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
  }, [])

  return (
    <div
      key={location.pathname}
      className={mounted.current ? 'page-transition w-full' : 'w-full'}
    >
      {children}
    </div>
  )
}
