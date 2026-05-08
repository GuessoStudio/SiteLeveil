import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Search, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { articles } from '../data/blog-articles'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const CATEGORY_STYLES: Record<string, string> = {
  'Neurosciences':          'bg-[#C9953A]/15 text-[#C9953A]',
  'Psychologie':            'bg-[#7C3AED]/15 text-[#7C3AED]',
  'Relations Humaines':     'bg-emerald-500/15 text-emerald-400',
  'Développement Personnel':'bg-sky-500/15 text-sky-400',
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim().length >= 2
    ? articles.filter(a => {
        const q = query.toLowerCase()
        return (
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
        )
      }).slice(0, 7)
    : []

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-1/2 z-[101] w-full max-w-2xl px-4"
            style={{ transform: 'translateX(-50%)' }}
          >
            <div className="bg-neutral-900 border border-[#C9953A]/25 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden">

              {/* Barre de recherche */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-800">
                <Search className="w-5 h-5 text-[#C9953A]/60 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Rechercher un article, un thème..."
                  className="flex-1 bg-transparent text-neutral-100 placeholder:text-neutral-500 text-base outline-none"
                />
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
                  aria-label="Fermer la recherche"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Résultats */}
              {query.trim().length >= 2 ? (
                <div className="max-h-[420px] overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="px-5 py-10 text-center text-neutral-500 text-sm">
                      Aucun article trouvé pour <span className="text-neutral-300">"{query}"</span>
                    </p>
                  ) : (
                    <ul>
                      {results.map(article => (
                        <li key={article.id}>
                          <Link
                            to={`/blog/${article.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-4 px-5 py-4 hover:bg-neutral-800/60 transition-colors group border-b border-neutral-800/40 last:border-0"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-neutral-100 text-sm font-medium group-hover:text-[#C9953A] transition-colors leading-snug mb-1.5 truncate">
                                {article.title}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${CATEGORY_STYLES[article.category] ?? 'bg-neutral-700 text-neutral-300'}`}>
                                  {article.category}
                                </span>
                                <span className="text-xs text-neutral-500">{article.readTime} min</span>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#C9953A] group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <p className="px-5 py-8 text-center text-neutral-500 text-sm">
                  Tapez au moins 2 caractères…
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
