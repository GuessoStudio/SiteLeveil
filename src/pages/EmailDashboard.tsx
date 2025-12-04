// src/pages/EmailDashboard.tsx
import React, { useState, useEffect } from 'react'
import { Download, Mail, Trash2, Calendar, FileText, Search } from 'lucide-react'

interface CapturedEmail {
  email: string
  resource: string
  date: string
  downloaded: boolean
}

const EmailDashboard = () => {
  const [isAuth, setIsAuth] = useState(false)
const [password, setPassword] = useState('')
  const [emails, setEmails] = useState<CapturedEmail[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredEmails, setFilteredEmails] = useState<CapturedEmail[]>([])
  const handleAuth = () => {
    
    if (password === 'So.191190.Leveil') {
      setIsAuth(true)
      sessionStorage.setItem('email-dashboard-auth', 'true')
    } else {
      alert('Mot de passe incorrect')
    }
  }

  useEffect(() => {
    const auth = sessionStorage.getItem('email-dashboard-auth')
    if (auth === 'true') setIsAuth(true)
  }, [])

  useEffect(() => {
    loadEmails()
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filtered = emails.filter(entry =>
        entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.resource.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredEmails(filtered)
    } else {
      setFilteredEmails(emails)
    }
  }, [searchTerm, emails])

  const loadEmails = () => {
    const stored = localStorage.getItem('captured-emails')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setEmails(parsed)
        setFilteredEmails(parsed)
      } catch (err) {
        console.error('Erreur de chargement:', err)
      }
    }
  }

  const exportToCSV = () => {
    const headers = ['Email', 'Ressource', 'Date', 'Téléchargé']
    const rows = emails.map(entry => [
      entry.email,
      entry.resource,
      new Date(entry.date).toLocaleString('fr-FR'),
      entry.downloaded ? 'Oui' : 'Non'
    ])

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `emails-captures-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  const exportEmailList = () => {
    const emailList = [...new Set(emails.map(e => e.email))].join('\n')
    const blob = new Blob([emailList], { type: 'text/plain' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `liste-emails-${new Date().toISOString().split('T')[0]}.txt`
    link.click()
  }

  const clearAll = () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer tous les emails capturés ?')) {
      localStorage.removeItem('captured-emails')
      setEmails([])
      setFilteredEmails([])
    }
  }

  const uniqueEmails = new Set(emails.map(e => e.email))
  const totalDownloads = emails.length

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Accès protégé
          </h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAuth()}
            placeholder="Mot de passe"
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg mb-4 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
            autoFocus
          />
          <button
            onClick={handleAuth}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Se connecter
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Dashboard Emails
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Gérez les emails capturés via les téléchargements de ressources
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-neutral-600 dark:text-neutral-400">Emails uniques</span>
              <Mail className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white">
              {uniqueEmails.size}
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-neutral-600 dark:text-neutral-400">Total téléchargements</span>
              <Download className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white">
              {totalDownloads}
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-neutral-600 dark:text-neutral-400">Taux de conversion</span>
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white">
              {uniqueEmails.size > 0 ? ((totalDownloads / uniqueEmails.size) * 100).toFixed(0) : 0}%
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={exportToCSV}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Exporter CSV
          </button>
          <button
            onClick={exportEmailList}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Exporter liste emails
          </button>
          <button
            onClick={clearAll}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Tout supprimer
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Rechercher par email ou ressource..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 dark:bg-neutral-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                    Ressource
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900 dark:text-white">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-700">
                {filteredEmails.length > 0 ? (
                  filteredEmails.map((entry, index) => (
                    <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-neutral-900 dark:text-white font-medium">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                        {entry.resource}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                        {new Date(entry.date).toLocaleString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-neutral-500 dark:text-neutral-400">
                      {searchTerm ? 'Aucun résultat trouvé' : 'Aucun email capturé pour le moment'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>💡 Conseil:</strong> Les emails sont stockés localement dans votre navigateur. 
            Exportez-les régulièrement pour ne pas les perdre. Pour une solution professionnelle, 
            intégrez un service comme EmailJS, Mailchimp ou votre propre backend.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmailDashboard
