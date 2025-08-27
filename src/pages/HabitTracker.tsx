// src/pages/HabitTracker.tsx
import React from 'react'
import { Plus, Trash2, Download, Upload, ChevronLeft, ChevronRight, Calendar as CalendarIcon, BarChart2, Flame, Trophy, X } from 'lucide-react'
import SEO from '../components/SEO'

interface Habit {
  id: string
  name: string
  color: string
}

interface HabitData {
  habits: Habit[]
  completions: Record<string, Set<string>>
}

const COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e',
  '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'
]

const HabitTracker = () => {
  const [data, setData] = React.useState<HabitData>({ habits: [], completions: {} })
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [selected, setSelected] = React.useState<Habit | null>(null)
  const [showAdd, setShowAdd] = React.useState(false)
  const [newHabitName, setNewHabitName] = React.useState('')
  const [newHabitColor, setNewHabitColor] = React.useState(COLORS[0])
  const [showImport, setShowImport] = React.useState(false)
  const [editingColorId, setEditingColorId] = React.useState<string | null>(null)

  // Load data from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('habit-tracker-data')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Convert completion arrays back to Sets
        const completions: Record<string, Set<string>> = {}
        for (const [habitId, dates] of Object.entries(parsed.completions || {})) {
          completions[habitId] = new Set(dates as string[])
        }
        setData({ habits: parsed.habits || [], completions })
      } catch (err) {
        console.error('Failed to load data:', err)
      }
    }
  }, [])

  // Save data to localStorage when it changes
  React.useEffect(() => {
    const toSave = {
      habits: data.habits,
      completions: Object.fromEntries(
        Object.entries(data.completions).map(([k, v]) => [k, Array.from(v)])
      )
    }
    localStorage.setItem('habit-tracker-data', JSON.stringify(toSave))
  }, [data])

  const addHabit = () => {
    if (!newHabitName.trim()) return
    const newHabit = {
      id: Date.now().toString(),
      name: newHabitName.trim(),
      color: newHabitColor
    }
    setData(prev => ({ ...prev, habits: [...prev.habits, newHabit] }))
    setNewHabitName('')
    setNewHabitColor(COLORS[(data.habits.length + 1) % COLORS.length]) // Couleur suivante pour le prochain
    setShowAdd(false)
  }

  const changeHabitColor = (habitId: string, newColor: string) => {
    setData(prev => ({
      ...prev,
      habits: prev.habits.map(h => h.id === habitId ? { ...h, color: newColor } : h)
    }))
  }

  const removeHabit = (habitId: string) => {
    if (!confirm('Supprimer définitivement cette habitude ?')) return
    setData(prev => {
      const newCompletions = { ...prev.completions }
      delete newCompletions[habitId]
      return {
        habits: prev.habits.filter(h => h.id !== habitId),
        completions: newCompletions
      }
    })
    if (selected?.id === habitId) setSelected(null)
  }

  const toggleCompletion = (habitId: string, date: string) => {
    setData(prev => {
      const newCompletions = { ...prev.completions }
      if (!newCompletions[habitId]) newCompletions[habitId] = new Set()
      
      if (newCompletions[habitId].has(date)) {
        newCompletions[habitId].delete(date)
      } else {
        newCompletions[habitId].add(date)
      }
      
      return { ...prev, completions: newCompletions }
    })
  }

  const exportData = () => {
    const toExport = {
      habits: data.habits,
      completions: Object.fromEntries(
        Object.entries(data.completions).map(([k, v]) => [k, Array.from(v)])
      )
    }
    const blob = new Blob([JSON.stringify(toExport, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `habits-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const onImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target?.result as string)
        
        // Validation robuste de la structure
        if (!imported || typeof imported !== 'object') {
          throw new Error('Le fichier ne contient pas un objet JSON valide')
        }
        
        if (!Array.isArray(imported.habits)) {
          throw new Error('La propriété "habits" doit être un tableau')
        }
        
        if (!imported.completions || typeof imported.completions !== 'object') {
          throw new Error('La propriété "completions" doit être un objet')
        }
        
        // Validation de chaque habitude
        for (const habit of imported.habits) {
          if (!habit.id || typeof habit.id !== 'string') {
            throw new Error('Chaque habitude doit avoir un "id" valide')
          }
          if (!habit.name || typeof habit.name !== 'string') {
            throw new Error('Chaque habitude doit avoir un "name" valide')
          }
          if (!habit.color || typeof habit.color !== 'string') {
            throw new Error('Chaque habitude doit avoir une "color" valide')
          }
        }
        
        // Validation des completions
        for (const [habitId, completionsSet] of Object.entries(imported.completions)) {
          if (!imported.habits.some((h: any) => h.id === habitId)) {
            console.warn(`Habitude "${habitId}" dans completions mais pas dans habits - nettoyage automatique`)
            delete imported.completions[habitId]
          }
          // Convertir les dates en Set si nécessaire
          if (Array.isArray(completionsSet)) {
            imported.completions[habitId] = new Set(completionsSet)
          } else if (completionsSet instanceof Set) {
            // Déjà un Set, parfait
          } else {
            throw new Error(`Les completions pour "${habitId}" doivent être un Array ou Set`)
          }
        }
        
        setData(imported)
        setShowImport(false)
        e.target.value = '' // reset
        console.log('✅ Import réussi:', imported.habits.length, 'habitudes importées')
        
      } catch (err) {
        console.error('❌ Import failed:', err)
        alert(`Erreur d'import: ${err instanceof Error ? err.message : 'Fichier invalide'}`)
      }
    }
    reader.readAsText(file)
  }

  // Calculate stats for selected habit
  const stats = React.useMemo(() => {
    if (!selected) return { current: 0, best: 0, last7: 0, completionRate: 0 }
    
    const completions = data.completions[selected.id] || new Set()
    const today = new Date()
    const todayKey = today.toISOString().slice(0, 10)
    
    // Current streak
    let current = 0
    let streakDate = new Date(today)
    while (true) {
      const key = streakDate.toISOString().slice(0, 10)
      if (completions.has(key)) {
        current++
        streakDate.setDate(streakDate.getDate() - 1)
      } else {
        break
      }
    }
    
    // Best streak (simplified)
    let best = 0
    let temp = 0
    const sortedDates = Array.from(completions).sort()
    for (let i = 0; i < sortedDates.length; i++) {
      if (i === 0) {
        temp = 1
      } else {
        const prev = new Date(sortedDates[i - 1])
        const curr = new Date(sortedDates[i])
        const diff = (curr.getTime() - prev.getTime()) / (24 * 60 * 60 * 1000)
        if (diff === 1) {
          temp++
        } else {
          best = Math.max(best, temp)
          temp = 1
        }
      }
    }
    best = Math.max(best, temp)
    
    // Last 7 days
    let last7 = 0
    for (let i = 0; i < 7; i++) {
      const last7Date = new Date(today)
      last7Date.setDate(today.getDate() - i)
      const key = last7Date.toISOString().slice(0, 10)
      if (completions.has(key)) last7++
    }
    
    // Current month completion rate
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    let monthDays = 0
    let monthCompleted = 0
    const monthDate = new Date(monthStart)
    while (monthDate <= monthEnd && monthDate <= today) {
      monthDays++
      const key = monthDate.toISOString().slice(0, 10)
      if (completions.has(key)) monthCompleted++
      monthDate.setDate(monthDate.getDate() + 1)
    }
    const completionRate = monthDays > 0 ? Math.round((monthCompleted / monthDays) * 100) : 0
    
    return { current, best, last7, completionRate }
  }, [selected, data.completions])

  // Get start of week (Monday)
  const getStartOfWeek = (date: Date) => {
    const d = new Date(date)
    const day = d.getDay()
    const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Monday
    d.setDate(diff)
    d.setHours(0, 0, 0, 0)
    return d
  }

  const startOfWeek = getStartOfWeek(currentDate)
  const today = new Date()

  const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ]

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7))
    setCurrentDate(newDate)
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <SEO
        title="Habit Tracker - Suivi d'Habitudes Scientifique"
        description="Suivez vos habitudes avec des insights basés sur la recherche comportementale. Calendrier, stats de progression et export des données."
        path="/habit-tracker"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Habit Tracker
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Suivez vos habitudes avec des insights basés sur la recherche comportementale
            </p>
          </header>

          {/* Actions bar */}
          <div className="flex justify-between items-center mb-8 gap-4">
            <button
              onClick={() => setShowAdd(!showAdd)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              aria-label="Ajouter une nouvelle habitude"
            >
              <Plus className="w-4 h-4" />
              Ajouter
            </button>
            
            <div className="flex gap-2">
              <button 
                onClick={exportData}
                className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
              <button 
                onClick={() => setShowImport(true)}
                className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Import
              </button>
            </div>
          </div>

          <main className="grid lg:grid-cols-3 gap-8">
            {/* Left sidebar - Habits list */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Mes habitudes</h2>
              
              {/* Add habit form */}
              {showAdd && (
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <input
                    type="text"
                    value={newHabitName}
                    onChange={(e) => setNewHabitName(e.target.value)}
                    placeholder="Nom de l'habitude (ex: Méditer 10min)"
                    className="w-full px-3 py-2 mb-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                    onKeyPress={(e) => e.key === 'Enter' && addHabit()}
                    autoFocus
                  />
                  
                  {/* Sélecteur de couleur */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-2">Choisir une couleur :</label>
                    <div className="flex gap-2 flex-wrap">
                      {COLORS.map(color => (
                        <button
                          key={color}
                          onClick={() => setNewHabitColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${
                            newHabitColor === color 
                              ? 'border-neutral-800 dark:border-neutral-200 scale-110' 
                              : 'border-neutral-300 dark:border-neutral-600'
                          }`}
                          style={{ backgroundColor: color }}
                          aria-label={`Couleur ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={addHabit}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Créer
                    </button>
                    <button
                      onClick={() => {
                        setShowAdd(false)
                        setNewHabitName('')
                        setNewHabitColor(COLORS[0])
                      }}
                      className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              )}

              {/* Habits list */}
              <div className="space-y-2">
                {data.habits.map(habit => (
                  <div
                    key={habit.id}
                    className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      selected?.id === habit.id
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30'
                        : 'border-transparent bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                    }`}
                    onClick={() => setSelected(habit)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: habit.color }} />
                        <span className="font-medium">{habit.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {/* Bouton changement couleur */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            setEditingColorId(editingColorId === habit.id ? null : habit.id)
                          }}
                          className="p-1 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded relative"
                          aria-label={`Changer la couleur de l'habitude "${habit.name}"`}
                        >
                          🎨
                        </button>
                        
                        {/* Menu couleurs */}
                        {editingColorId === habit.id && (
                          <div className="absolute right-0 top-8 z-10 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-lg p-2 shadow-lg">
                            <div className="grid grid-cols-4 gap-1">
                              {COLORS.map(color => (
                                <button
                                  key={color}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    changeHabitColor(habit.id, color)
                                    setEditingColorId(null)
                                  }}
                                  className={`w-6 h-6 rounded-full border transition-all ${
                                    habit.color === color 
                                      ? 'border-neutral-800 dark:border-neutral-200 scale-110' 
                                      : 'border-neutral-300 dark:border-neutral-600 hover:scale-105'
                                  }`}
                                  style={{ backgroundColor: color }}
                                  aria-label={`Changer vers la couleur ${color}`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Bouton suppression */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            removeHabit(habit.id)
                          }}
                          className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                          aria-label={`Supprimer l'habitude "${habit.name}"`}
                        >
                          <Trash2 className="w-4 h-4"/>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {data.habits.length === 0 && (
                  <div className="text-center py-8 text-neutral-500">
                    <p className="mb-2">Aucune habitude pour le moment</p>
                    <p className="text-sm">Cliquez sur "Ajouter" pour commencer</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Calendar and stats */}
            <div className="lg:col-span-2 space-y-6">
              {selected ? (
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full" style={{ backgroundColor: selected.color }} />
                      {selected.name}
                    </h3>
                  </div>

                  {/* Week navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button 
                      onClick={() => navigateWeek('prev')}
                      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="text-lg font-semibold">
                      {monthNames[startOfWeek.getMonth()]} {startOfWeek.getFullYear()}
                    </div>
                    <button 
                      onClick={() => navigateWeek('next')}
                      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Week header */}
                  <div className="grid grid-cols-8 gap-2 mb-2">
                    <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 p-2"></div>
                    {weekDays.map(day => (
                      <div key={day} className="text-sm font-medium text-neutral-500 dark:text-neutral-400 text-center p-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-8 gap-2">
                      <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300 flex items-center">
                        {selected.name}
                      </div>
                      {Array.from({ length: 7 }).map((_, colIdx) => {
                        const d = new Date(startOfWeek)
                        d.setDate(startOfWeek.getDate() + colIdx)
                        const isToday = d.toDateString() === today.toDateString()
                        const dateKey = d.toISOString().slice(0, 10)
                        const isDone = data.completions[selected.id]?.has(dateKey)
                        const dayName = d.toLocaleDateString('fr-FR', { weekday: 'long' })
                        const dayNumber = d.getDate()
                        const monthName = d.toLocaleDateString('fr-FR', { month: 'long' })
                        
                        return (
                          <button
                            key={colIdx}
                            onClick={() => toggleCompletion(selected.id, dateKey)}
                            className={`
                              w-8 h-8 rounded-lg border-2 transition-all duration-200 flex items-center justify-center text-sm font-semibold
                              ${isDone 
                                ? `border-transparent text-white shadow-md` 
                                : `border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500`
                              }
                              ${isToday ? 'ring-2 ring-indigo-400 ring-offset-2 dark:ring-offset-neutral-800' : ''}
                            `}
                            style={{ backgroundColor: isDone ? selected.color : 'transparent' }}
                            aria-label={`${dayName} ${dayNumber} ${monthName} - ${isDone ? 'Accompli' : 'Non accompli'} pour l'habitude ${selected.name}`}
                          >
                            {d.getDate()}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-12 shadow-lg text-center">
                  <CalendarIcon className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    Sélectionnez une habitude
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Choisissez une habitude dans la liste pour voir son calendrier et ses statistiques
                  </p>
                </div>
              )}

              {/* Stats cards */}
              {selected && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow flex items-center gap-3">
                    <Flame className="w-6 h-6 text-orange-500"/>
                    <div>
                      <div className="text-xs text-neutral-500">Série actuelle</div>
                      <div className="text-xl font-semibold">{stats.current}</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-yellow-500"/>
                    <div>
                      <div className="text-xs text-neutral-500">Meilleure série</div>
                      <div className="text-xl font-semibold">{stats.best}</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow flex items-center gap-3">
                    <BarChart2 className="w-6 h-6 text-blue-500"/>
                    <div>
                      <div className="text-xs text-neutral-500">7 derniers jours</div>
                      <div className="text-xl font-semibold">{stats.last7}/7</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow flex items-center gap-3">
                    <CalendarIcon className="w-6 h-6 text-indigo-500"/>
                    <div>
                      <div className="text-xs text-neutral-500">Taux du mois</div>
                      <div className="text-xl font-semibold">{stats.completionRate}%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Weekly bars (last 4 weeks) */}
              {selected && (
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">Tendance (4 dernières semaines)</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {Array.from({ length: 4 }).map((_, idx) => {
                      const end = new Date()
                      end.setDate(end.getDate() - idx * 7)
                      const start = new Date(end)
                      start.setDate(end.getDate() - 6)
                      let count = 0
                      for (let d = 0; d < 7; d++) {
                        const cur = new Date(start)
                        cur.setDate(start.getDate() + d)
                        const k = cur.toISOString().slice(0,10)
                        if (data.completions[selected.id]?.has(k)) count++
                      }
                      const height = Math.round((count / 7) * 100)
                      return (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <div className="w-full h-28 bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden flex items-end">
                            <div 
                              className="w-full transition-all duration-500" 
                              style={{ 
                                height: `${height}%`, 
                                backgroundColor: selected.color,
                                opacity: 0.8
                              }} 
                            />
                          </div>
                          <div className="text-xs text-neutral-500">{count}/7</div>
                        </div>
                      )
                    }).reverse()}
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Import modal */}
      {showImport && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Importer des données</h3>
              <button 
                onClick={() => setShowImport(false)} 
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
              >
                <X className="w-4 h-4"/>
              </button>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
              Sélectionnez un fichier <code>.json</code> exporté depuis ce tracker.
            </p>
            <input 
              type="file" 
              accept="application/json" 
              onChange={onImportFile} 
              className="w-full p-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-neutral-50 dark:bg-neutral-700" 
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default HabitTracker