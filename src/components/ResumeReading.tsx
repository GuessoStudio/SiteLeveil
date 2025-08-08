import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Clock } from 'lucide-react'
import { useReading } from '../contexts/ReadingContext'

const ResumeReading = () => {
  const { currentReading } = useReading()

  if (!currentReading || currentReading.percentage >= 90) {
    return null
  }

  return (
    <div className="resume-reading rounded-2xl p-6 mb-8 max-w-md mx-auto shadow-lg">
      <div className="flex items-center gap-4 text-white">
        <div className="p-3 bg-white/20 rounded-full">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-semibold mb-1">Reprendre la lecture</h3>
          <p className="text-sm opacity-90 mb-2 line-clamp-1">{currentReading.title}</p>
          <div className="flex items-center gap-2 text-xs opacity-75">
            <Clock className="w-3 h-3" />
            <span>Lu à {Math.round(currentReading.percentage)}%</span>
          </div>
        </div>
        <Link
          to={`/article/${currentReading.articleId}`}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Continuer
        </Link>
      </div>
      
      {/* Barre de progression */}
      <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-white h-full transition-all duration-300 rounded-full"
          style={{ width: `${currentReading.percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ResumeReading