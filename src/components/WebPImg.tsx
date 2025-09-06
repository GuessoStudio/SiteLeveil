// src/components/WebPImg.tsx - Version simplifiée SANS fallback .jpg
import React from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  priority?: boolean
}

export default function WebPImg({ 
  src, 
  alt, 
  priority = false, 
  loading,
  className,
  ...rest 
}: Props) {
  // Ajoute .webp si pas d'extension
  const webpSrc = src.endsWith('.webp') ? src : `${src}.webp`
  
  return (
    <img
      {...rest}
      src={webpSrc}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : loading || 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
    />
  )
}

// Usage : <WebPImg src="/images/hero-bg" alt="" priority />