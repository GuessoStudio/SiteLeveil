// src/components/SmartImg.tsx - Version WebP optimisée
import React from 'react'

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding' | 'fetchPriority'> & {
  width: number
  height: number
  priority?: boolean
  /** Chemin de l'image sans extension - auto-détection WebP/JPEG */
  src: string
  /** Tailles responsives */
  sizes?: string
}

export default function SmartImg({ 
  className = '', 
  priority = false, 
  src,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  alt,
  ...rest 
}: Props) {
  // Retirer l'extension si présente
  const basePath = src.replace(/\.[^/.]+$/, "")
  
  return (
    <picture>
      {/* WebP pour navigateurs modernes (94% support) */}
      <source
        srcSet={`${basePath}.webp`}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback JPEG pour anciens navigateurs (6%) */}
      <img
        {...rest}
        src={`${basePath}.jpg`}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-auto ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
      />
    </picture>
  )
}