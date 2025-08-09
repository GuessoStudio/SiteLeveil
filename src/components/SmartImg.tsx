import React from 'react'

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding' | 'fetchPriority'> & {
  /** Dimensions réelles ou approximatives pour éviter les sauts de mise en page */
  width: number
  height: number
  /** true = image au-dessus de la ligne de flottaison (hero) : on la charge en priorité */
  priority?: boolean
}

export default function SmartImg({ className = '', priority = false, ...rest }: Props) {
  return (
    <img
      {...rest}
      className={`w-full h-auto ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
    />
  )
}
