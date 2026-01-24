// src/components/calculator/PersonalizedAdvice.tsx

import React from 'react';
import { SleepChallenge } from './SleepForm';

interface PersonalizedAdviceProps {
    challenge: SleepChallenge;
    bedtime: string;
}

const PersonalizedAdvice: React.FC<PersonalizedAdviceProps> = ({ challenge, bedtime }) => {
    const adviceMap = {
        difficulty_falling_asleep: {
            icon: '😰',
            title: 'Conseil pour toi (difficulté à t\'endormir)',
            tips: [
                {
                    emoji: '🧘',
                    text: `Technique 4-7-8 à ${calculatePreBedtime(bedtime, 15)} : Inspire 4s, retiens 7s, expire 8s (×4)`,
                },
                {
                    emoji: '📵',
                    text: `Coupe écrans 1h avant (${calculatePreBedtime(bedtime, 60)} dernier check)`,
                },
                {
                    emoji: '🌡️',
                    text: 'Baisse température chambre à 18-19°C',
                },
                {
                    emoji: '📖',
                    text: 'Lis 10-15 pages (livre papier, pas écran)',
                },
            ],
        },
        waking_up_at_night: {
            icon: '😴',
            title: 'Conseil pour toi (réveils nocturnes)',
            tips: [
                {
                    emoji: '💧',
                    text: `Évite de boire 2h avant coucher (après ${calculatePreBedtime(bedtime, 120)})`,
                },
                {
                    emoji: '☕',
                    text: 'Coupe caféine après 14:00',
                },
                {
                    emoji: '😌',
                    text: 'Si réveil > 20min : Lève-toi, activité calme, retourne au lit',
                },
                {
                    emoji: '🎧',
                    text: 'Bruit blanc toute la nuit (app gratuite)',
                },
            ],
        },
        waking_too_early: {
            icon: '⏰',
            title: 'Conseil pour toi (réveils trop tôt)',
            tips: [
                {
                    emoji: '🌙',
                    text: 'Occultation totale (rideau blackout)',
                },
                {
                    emoji: '🔇',
                    text: 'Bouchons d\'oreilles ou bruit blanc',
                },
                {
                    emoji: '☕',
                    text: 'Limite caféine à 1 café avant midi',
                },
                {
                    emoji: '😴',
                    text: 'Ne te lève PAS même si réveillé - reste au lit',
                },
            ],
        },
        not_rested: {
            icon: '😫',
            title: 'Conseil pour toi (pas reposé au réveil)',
            tips: [
                {
                    emoji: '☀️',
                    text: 'Lumière forte immédiate au réveil (ouvre rideaux)',
                },
                {
                    emoji: '💧',
                    text: 'Verre d\'eau grand format dès le réveil',
                },
                {
                    emoji: '🏃',
                    text: '5min de mouvement léger au réveil (étirements)',
                },
                {
                    emoji: '🌡️',
                    text: 'Douche froide 30 secondes (ou visage eau froide)',
                },
            ],
        },
        none: {
            icon: '✅',
            title: 'Optimise encore plus avec ces tips',
            tips: [
                {
                    emoji: '🧘',
                    text: `Routine fixe : couche-toi à ${bedtime} TOUS les jours (weekend compris)`,
                },
                {
                    emoji: '📊',
                    text: 'Track ton sommeil (app gratuite) pour ajuster',
                },
                {
                    emoji: '🏃',
                    text: 'Activité physique quotidienne (mais pas après 20h)',
                },
                {
                    emoji: '🌡️',
                    text: 'Chambre fraîche (18-19°C) et sombre',
                },
            ],
        },
    };

    const advice = adviceMap[challenge];

    return (
        <div className="bg-gradient-to-br from-sleep-accent/10 to-amber-100/50 dark:from-sleep-accent/20 dark:to-amber-900/20 rounded-2xl p-6 md:p-8 border-2 border-sleep-accent/30">
            <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{advice.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                    {advice.title}
                </h3>
            </div>

            <div className="space-y-4">
                {advice.tips.map((tip, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-2xl flex-shrink-0">{tip.emoji}</div>
                        <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">{tip.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-white dark:bg-neutral-800 rounded-lg border-l-4 border-sleep-accent">
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    💡 <strong>Pro tip</strong> : Applique 1 conseil cette semaine, puis ajoute-en 1 autre
                    chaque semaine. Changement progressif = changement durable.
                </p>
            </div>
        </div>
    );
};

/**
 * Calculate time X minutes before bedtime
 */
function calculatePreBedtime(bedtime: string, minutesBefore: number): string {
    const [h, m] = bedtime.split(':').map(Number);
    let totalMinutes = h * 60 + m - minutesBefore;

    // Handle going to previous day
    if (totalMinutes < 0) totalMinutes += 1440; // 24h

    const newHour = Math.floor(totalMinutes / 60);
    const newMin = totalMinutes % 60;

    return `${String(newHour).padStart(2, '0')}:${String(newMin).padStart(2, '0')}`;
}

export default PersonalizedAdvice;
