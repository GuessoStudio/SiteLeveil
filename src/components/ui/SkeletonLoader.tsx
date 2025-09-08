// ================================
// ÉTAPE 8 : src/components/ui/SkeletonLoader.tsx
// ================================

import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular' | 'card'
  lines?: number
  height?: string
  width?: string
  animated?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  lines = 1,
  height,
  width,
  animated = true
}) => {
  const baseClasses = `${animated ? 'animate-pulse' : ''} bg-neutral-200 dark:bg-neutral-700`

  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4 rounded'
      case 'rectangular':
        return 'rounded-lg'
      case 'circular':
        return 'rounded-full aspect-square'
      case 'card':
        return 'h-48 rounded-xl'
      default:
        return 'h-4 rounded'
    }
  }

  const style = React.useMemo(() => ({
    ...(height && { height }),
    ...(width && { width })
  }), [height, width])

  // Pour plusieurs lignes de texte
  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={{
              ...style,
              width: index === lines - 1 ? '75%' : '100%' // Dernière ligne plus courte
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={style}
    />
  )
}

// ================================
// COMPOSANTS SPÉCIALISÉS
// ================================

// Skeleton pour une carte de blog
export const BlogCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-soft">
    <Skeleton variant="rectangular" height="200px" className="mb-4" />
    <Skeleton variant="text" width="100px" className="mb-2" />
    <Skeleton variant="text" lines={2} className="mb-4" />
    <div className="flex items-center space-x-3">
      <Skeleton variant="circular" width="32px" height="32px" />
      <Skeleton variant="text" width="120px" />
    </div>
  </div>
)

// Skeleton pour une page complète
export const PageSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <Skeleton variant="text" width="300px" height="32px" className="mx-auto mb-4" />
      <Skeleton variant="text" width="500px" height="20px" className="mx-auto" />
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  </div>
)

// Skeleton pour un article
export const ArticleSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <Skeleton variant="text" width="80%" height="40px" className="mb-4" />
    <Skeleton variant="text" width="60%" height="20px" className="mb-8" />
    <Skeleton variant="rectangular" height="300px" className="mb-8" />
    <div className="space-y-4">
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="text" lines={4} />
      <Skeleton variant="text" lines={2} />
    </div>
  </div>
)