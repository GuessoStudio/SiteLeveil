import React, { createContext, useContext, useState, useEffect } from 'react'

interface ReadingProgress {
  articleId: string
  position: number
  percentage: number
  timestamp: number
  title: string
}

interface ReadingContextType {
  currentReading: ReadingProgress | null
  saveProgress: (articleId: string, position: number, percentage: number, title: string) => void
  getProgress: (articleId: string) => ReadingProgress | null
  clearProgress: (articleId: string) => void
  getAllProgress: () => ReadingProgress[]
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined)

export const useReading = () => {
  const context = useContext(ReadingContext)
  if (context === undefined) {
    throw new Error('useReading must be used within a ReadingProvider')
  }
  return context
}

export const ReadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentReading, setCurrentReading] = useState<ReadingProgress | null>(null)

  const saveProgress = (articleId: string, position: number, percentage: number, title: string) => {
    const progressData: ReadingProgress = {
      articleId,
      position,
      percentage,
      timestamp: Date.now(),
      title
    }
    
    localStorage.setItem(`reading_${articleId}`, JSON.stringify(progressData))
    
    // Mettre à jour la lecture courante si c'est la plus récente
    const allProgress = getAllProgress()
    const mostRecent = allProgress.sort((a, b) => b.timestamp - a.timestamp)[0]
    if (mostRecent && mostRecent.articleId === articleId) {
      setCurrentReading(progressData)
    }
  }

  const getProgress = (articleId: string): ReadingProgress | null => {
    const saved = localStorage.getItem(`reading_${articleId}`)
    return saved ? JSON.parse(saved) : null
  }

  const clearProgress = (articleId: string) => {
    localStorage.removeItem(`reading_${articleId}`)
    if (currentReading?.articleId === articleId) {
      setCurrentReading(null)
    }
  }

  const getAllProgress = (): ReadingProgress[] => {
    const progress: ReadingProgress[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('reading_')) {
        const data = localStorage.getItem(key)
        if (data) {
          try {
            progress.push(JSON.parse(data))
          } catch (e) {
            console.error('Error parsing reading progress:', e)
          }
        }
      }
    }
    return progress.sort((a, b) => b.timestamp - a.timestamp)
  }

  useEffect(() => {
    // Charger la lecture la plus récente au démarrage
    const allProgress = getAllProgress()
    if (allProgress.length > 0) {
      const mostRecent = allProgress[0]
      // Seulement si la lecture est récente (moins de 7 jours) et pas terminée
      const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000)
      if (mostRecent.timestamp > weekAgo && mostRecent.percentage < 90) {
        setCurrentReading(mostRecent)
      }
    }
  }, [])

  return (
    <ReadingContext.Provider value={{
      currentReading,
      saveProgress,
      getProgress,
      clearProgress,
      getAllProgress
    }}>
      {children}
    </ReadingContext.Provider>
  )
}