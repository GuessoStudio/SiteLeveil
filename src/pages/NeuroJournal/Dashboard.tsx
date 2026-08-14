import React, { useMemo } from 'react';
import { Plus, Download } from 'lucide-react';
import { useNeuroJournal } from '../../hooks/useNeuroJournal';
import { Link } from 'react-router-dom';
import { generateInsights } from '../../lib/neuro-insights';
import { generatePDFReport } from '../../lib/pdf-generator';
import InsightCard from '../../components/neuro-journal/InsightCard';
import WeeklyChart from '../../components/neuro-journal/charts/WeeklyChart';
import CalendarHeatmap from '../../components/neuro-journal/charts/CalendarHeatmap';
import SEO from '../../components/SEO';

const Dashboard = () => {
    const { stats, entries, favorites, readingProgress } = useNeuroJournal();

    // Memoize insights calculation
    const insights = useMemo(() => generateInsights(entries), [entries]);

    const handleExport = () => {
        generatePDFReport(entries, stats, insights);
    };

    const [activeTab, setActiveTab] = React.useState<'journal' | 'profile'>('journal');

    return (
        <div className="space-y-6 animate-fadeIn pb-20">
            {/* Page applicative : utile aux visiteurs, sans interet pour la recherche.
                Elle est liee depuis le Footer, donc presente dans le HTML pre-rendu
                des 57 pages — Google l'avait deja indexee. */}
            <SEO title="Neuro-Journal — tableau de bord" path="/neuro-journal/dashboard/" noindex />
            {/* Header Dates & Tabs */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Mon Espace</h2>
                        <p className="text-sm text-gray-500 dark:text-neutral-400">
                            {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleExport}
                            title="Exporter mon rapport"
                            className="bg-white dark:bg-neutral-800 p-2 rounded-full shadow-sm border border-gray-100 dark:border-neutral-700 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-neutral-700 transition-colors"
                        >
                            <Download className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex p-1 bg-gray-100 dark:bg-neutral-800 rounded-xl">
                    <button
                        onClick={() => setActiveTab('journal')}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'journal'
                            ? 'bg-white dark:bg-neutral-700 shadow-sm text-indigo-600 dark:text-white'
                            : 'text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300'
                            }`}
                    >
                        Journal
                    </button>
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${activeTab === 'profile'
                            ? 'bg-white dark:bg-neutral-700 shadow-sm text-indigo-600 dark:text-white'
                            : 'text-gray-500 dark:text-neutral-400 hover:text-gray-700 dark:hover:text-neutral-300'
                            }`}
                    >
                        Mon Profil
                    </button>
                </div>
            </div>

            {activeTab === 'journal' ? (
                <>
                    {/* Action Card: Check-in */}
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-indigo-100 dark:border-neutral-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Plus className="w-32 h-32 text-indigo-600" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                        Check-in Quotidien
                                    </h3>
                                    <p className="text-gray-500 dark:text-neutral-400 text-sm mb-6 max-w-[80%]">
                                        Prenez 30 secondes pour noter votre état mental et physique.
                                    </p>
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-xl border border-orange-100 dark:border-orange-800 flex items-center gap-2">
                                    <span className="text-lg">🔥</span>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold text-orange-600 dark:text-orange-400 leading-none">{stats.streak}</span>
                                        <span className="text-[10px] font-medium text-orange-600/70 dark:text-orange-400/70 uppercase tracking-wide">Jours</span>
                                    </div>
                                </div>
                            </div>

                            <Link to="/neuro-journal/checkin/" className="block w-full sm:w-auto">
                                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-colors w-full">
                                    Ajouter une entrée
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* --- INSIGHTS SECTION (New Phase 3) --- */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            ⚡ Insights IA
                            <span className="text-xs font-normal text-gray-500 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full">Bêta</span>
                        </h3>

                        <div className="space-y-3">
                            {insights.length > 0 ? (
                                insights.map(insight => (
                                    <InsightCard key={insight.id} insight={insight} />
                                ))
                            ) : (
                                <div className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-xl text-center text-sm text-gray-500">
                                    Pas assez de données pour l'analyse.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* --- CHARTS SECTION (New Phase 4) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <WeeklyChart entries={entries} />
                        <CalendarHeatmap entries={entries} />
                    </div>

                    {/* Stats Summary (MVP Skeleton) */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-gray-100 dark:border-neutral-700">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Entrées</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalEntries}</p>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl border border-gray-100 dark:border-neutral-700">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Moyenne</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">--</p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-8 animate-fadeIn">
                        {/* Section Intro */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mon Profil & Outils</h3>
                            <p className="text-gray-500 dark:text-neutral-400 max-w-sm mx-auto">
                                Retrouvez ici vos résultats de tests et vos outils de suivi personnels.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1: Big Five */}
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-gray-100 dark:border-neutral-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">🧠</span>
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Profil Cognitif (Big Five)</h4>
                                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6 flex-1">
                                    Comprendre votre personnalité grâce au modèle scientifique OCEAN.
                                </p>

                                {/* Simulated "No Result" state */}
                                <div className="w-full bg-gray-50 dark:bg-neutral-900/50 rounded-xl p-4 border border-dashed border-gray-300 dark:border-neutral-700">
                                    <p className="text-xs text-gray-600 dark:text-neutral-300 mb-3">Test non passé</p>
                                    <Link to="/test-personnalite-big-five/" className="block">
                                        <button className="w-full py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-600 rounded-lg text-sm font-semibold hover:border-indigo-500 hover:text-indigo-600 transition-colors">
                                            Passer le test
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Card 2: Habit Tracker */}
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-gray-100 dark:border-neutral-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">📅</span>
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tracker d'Habitudes</h4>
                                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6 flex-1">
                                    Suivez et ancrez vos nouvelles habitudes positives au quotidien.
                                </p>

                                <div className="w-full bg-gray-50 dark:bg-neutral-900/50 rounded-xl p-4 border border-dashed border-gray-300 dark:border-neutral-700">
                                    <p className="text-xs text-gray-600 dark:text-neutral-300 mb-3">Outil disponible</p>
                                    <Link to="/habit-tracker/" className="block">
                                        <button className="w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                                            Ouvrir le Tracker
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Section Favorites (Mock) */}
                        <div className="pt-8 border-t border-gray-100 dark:border-neutral-800">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📚 Mes Lectures Favorites</h3>
                            <div className="space-y-3">
                                {favorites.length > 0 ? (
                                    favorites.map((item) => (
                                        <Link
                                            key={`${item.type}-${item.id}`}
                                            to={item.url}
                                            className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl border border-gray-100 dark:border-neutral-700 hover:border-indigo-100 dark:hover:border-neutral-600 transition-colors group relative"
                                        >
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.type === 'article'
                                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                                }`}>
                                                <span className="text-xl">
                                                    {item.type === 'article' ? '📝' : '📖'}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-1">
                                                    {item.title}
                                                </h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <p className="text-xs text-gray-500 dark:text-neutral-400 capitalize">
                                                        {item.type} • Ajouté le {new Date(item.addedAt).toLocaleDateString()}
                                                    </p>
                                                    {/* Reading Progress Indicator */}
                                                    {readingProgress[item.url.split('/').pop() || ''] > 0 && (
                                                        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
                                                            <div className="w-12 h-1 bg-gray-200 dark:bg-neutral-600 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-indigo-600 rounded-full"
                                                                    style={{ width: `${readingProgress[item.url.split('/').pop() || '']}  %` }}
                                                                />
                                                            </div>
                                                            <span className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400">
                                                                {readingProgress[item.url.split('/').pop() || '']}%
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Remove Button logic could be added here, but complex inside Link. 
                                                For now we rely on the page itself to toggle off. 
                                            */}
                                        </Link>
                                    ))
                                ) : (
                                    /* Empty State for Favorites */
                                    <div className="p-8 text-center bg-gray-50 dark:bg-neutral-900/50 rounded-xl border border-dashed border-gray-200 dark:border-neutral-700">
                                        <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <span className="text-xl grayscale opacity-50">📚</span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                            Aucune lecture favorite
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-neutral-400 mb-4">
                                            Ajoutez des articles en favoris via le Blog.
                                        </p>
                                        <Link to="/blog/">
                                            <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:underline">
                                                Explorer le Blog &rarr;
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
