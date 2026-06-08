import { useRef } from 'react'
import type { CSSProperties } from 'react'

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  borderColor?: string
}

// Bordure dégradée qui suit le curseur — version CSS (variables --mx/--my mises
// à jour directement sur l'élément, sans re-render). Remplace framer-motion
// (useMotionTemplate) pour sortir le chunk framer du chemin critique. Effet
// strictement desktop (survol souris) : aucun coût sur mobile.
export function MagicCard({
  children,
  className = '',
  gradientSize = 200,
  gradientColor = '#C9953A',
  borderColor = 'rgba(255,255,255,0.08)',
}: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const handlePointerLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', `-${gradientSize}px`)
    el.style.setProperty('--my', `-${gradientSize}px`)
  }

  const style = {
    border: '2px solid transparent',
    '--mx': `-${gradientSize}px`,
    '--my': `-${gradientSize}px`,
    background: `linear-gradient(transparent 0 0) padding-box, radial-gradient(${gradientSize}px circle at var(--mx) var(--my), ${gradientColor}, ${borderColor} 100%) border-box`,
  } as CSSProperties

  return (
    <div
      ref={ref}
      className={`relative h-full ${className}`}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  )
}
