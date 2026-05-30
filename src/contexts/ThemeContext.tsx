import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Important : state initial DÉTERMINISTE ('light') pour correspondre au rendu serveur SSG.
  // Si on lisait localStorage/matchMedia ici, le 1er rendu client différerait du HTML serveur
  // → erreur d'hydratation React (#418/#423/#425). La vraie préférence est appliquée au montage.
  // Le flash visuel est évité par le script inline dans index.html (pose la classe avant React).
  const [theme, setTheme] = useState<Theme>('light')

  // La classe <html> est déjà posée par le script inline d'index.html. On ne réapplique
  // donc rien tant que le state React n'a pas changé après détection, sinon on repasserait
  // brièvement en 'light' (flash) avant la synchro.
  const skipApply = useRef(true)

  // Au montage uniquement : détecte la préférence réelle et synchronise le state React.
  useEffect(() => {
    let detected: Theme = 'light'
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved === 'light' || saved === 'dark') {
      detected = saved
    } else if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      detected = 'dark'
    } else {
      const hour = new Date().getHours()
      detected = (hour >= 18 || hour <= 6) ? 'dark' : 'light'
    }
    setTheme(detected)
  }, [])

  // Applique la classe + persiste, mais saute la toute première exécution (state encore
  // sur la valeur par défaut 'light' = celle du serveur, déjà reflétée par le script inline).
  useEffect(() => {
    if (skipApply.current) {
      skipApply.current = false
      return
    }
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}