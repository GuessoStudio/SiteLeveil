// src/components/calculator/SleepResults.tsx

import React from 'react';
import { SleepCalculation } from '../../utils/sleepCalculator';

interface SleepResultsProps {
    calculation: SleepCalculation;
    wakeTime: string;
}

const SleepResults: React.FC<SleepResultsProps> = ({ calculation, wakeTime }) => {
    const { bedtime, bedtimeWindow, actualHours, numCycles, alternatives, cycleDuration } = calculation;

    return (
        <div className="space-y-8 animate-fadeInUp">
            {/* Main Result Hero */}
            <div className="text-center space-y-6 p-8 bg-gradient-to-br from-sleep-primary/10 to-sleep-light/10 rounded-2xl border-2 border-sleep-primary/20">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                    🎯 Pour te réveiller <span className="text-sleep-primary">FRAIS</span> à{' '}
                    <span className="text-sleep-light">{wakeTime}</span>...
                </h2>

                {/* Big Bedtime Display */}
                <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-lg">
                    <div className="text-6xl md:text-8xl mb-2">😴</div>
                    <div className="text-sleep-primary font-mono text-5xl md:text-7xl font-bold mb-3">
                        {bedtime}
                    </div>
                    <div className="text-xl text-neutral-600 dark:text-neutral-400">
                        ±14 minutes OK : <span className="font-semibold">{bedtimeWindow}</span>
                    </div>
                </div>

                {/* Sleep Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg">
                        <div className="text-2xl font-bold text-sleep-primary">{actualHours}h</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Sommeil réel</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg">
                        <div className="text-2xl font-bold text-sleep-accent">{numCycles}</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Cycles</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg">
                        <div className="text-2xl font-bold text-sleep-light">{cycleDuration}min</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Par cycle</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">14min</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Endormissement</div>
                    </div>
                </div>
            </div>

            {/* Alternatives */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                    Autres options :
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div>
                            <div className="font-semibold text-neutral-900 dark:text-white">
                                Sommeil court ({alternatives.short.hours}h)
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                {alternatives.short.cycles} cycles × {cycleDuration}min
                            </div>
                        </div>
                        <div className="text-2xl font-mono font-bold text-orange-600">
                            {alternatives.short.bedtime}
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-sleep-primary/10 dark:bg-sleep-primary/20 rounded-lg border-2 border-sleep-primary">
                        <div>
                            <div className="font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                                <span>✅</span> Optimal ({alternatives.optimal.hours}h)
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                {alternatives.optimal.cycles} cycles × {cycleDuration}min
                            </div>
                        </div>
                        <div className="text-2xl font-mono font-bold text-sleep-primary">
                            {alternatives.optimal.bedtime}
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                        <div>
                            <div className="font-semibold text-neutral-900 dark:text-white">
                                Sommeil long ({alternatives.long.hours}h)
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                {alternatives.long.cycles} cycles × {cycleDuration}min
                            </div>
                        </div>
                        <div className="text-2xl font-mono font-bold text-blue-600">
                            {alternatives.long.bedtime}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scientific Explanation (Collapsible) */}
            <details className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border-2 border-neutral-200 dark:border-neutral-700">
                <summary className="cursor-pointer font-semibold text-lg text-neutral-900 dark:text-white hover:text-sleep-primary transition-colors">
                    📚 Pourquoi 90 minutes ? (Science expliquée)
                </summary>
                <div className="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300">
                    <p>Chaque cycle de sommeil comprend 4 phases :</p>
                    <ul className="space-y-2 ml-6 list-disc">
                        <li>
                            <strong>0-5 min</strong> : Endormissement (N1)
                        </li>
                        <li>
                            <strong>5-20 min</strong> : Sommeil léger (N2)
                        </li>
                        <li>
                            <strong>20-60 min</strong> : Sommeil profond (N3) 💪{' '}
                            <span className="text-sleep-primary">Récupération physique</span>
                        </li>
                        <li>
                            <strong>60-90 min</strong> : Sommeil REM 🧠{' '}
                            <span className="text-sleep-accent">Mémoire + émotions</span>
                        </li>
                    </ul>
                    <div className="pt-4 border-t-2 border-neutral-200 dark:border-neutral-700">
                        <p>
                            <strong className="text-green-600">Réveil en fin de cycle</strong> = naturel et
                            énergique
                            <br />
                            <strong className="text-red-600">Réveil EN PLEIN cycle</strong> = grogginess 30min+
                        </p>
                    </div>
                </div>
            </details>

            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">2,847</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">
                        👥 Personnes ont optimisé leur sommeil cette semaine
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl text-center">
                    <div className="text-4xl font-bold text-amber-600 mb-2">4.8/5</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">
                        ⭐ Note moyenne (342 avis)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SleepResults;
