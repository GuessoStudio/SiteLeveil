import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  borderColor?: string
}

export function MagicCard({
  children,
  className = '',
  gradientSize = 200,
  gradientColor = '#C9953A',
  borderColor = 'rgba(255,255,255,0.08)',
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  return (
    <motion.div
      className={`relative h-full ${className}`}
      style={{
        border: '2px solid transparent',
        background: useMotionTemplate`
          linear-gradient(transparent 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, ${borderColor} 100%) border-box
        `,
      }}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
      onPointerLeave={() => {
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
      }}
    >
      {children}
    </motion.div>
  )
}
