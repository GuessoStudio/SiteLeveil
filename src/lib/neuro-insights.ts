
import { NeuroJournalEntry } from '../hooks/useNeuroJournal';

export interface Insight {
    id: string;
    type: 'positive' | 'warning' | 'neutral';
    title: string;
    description: string;
    icon: string;
    score?: number; // Relevance score
}

// Helper: Calculate average mood for a subset of entries
const calculateAvgMood = (entries: NeuroJournalEntry[]) => {
    if (entries.length === 0) return 0;
    return entries.reduce((acc, e) => acc + e.mood, 0) / entries.length;
};

export const generateInsights = (entries: NeuroJournalEntry[]): Insight[] => {
    const insights: Insight[] = [];

    if (entries.length < 3) {
        return [{
            id: 'welcome',
            type: 'neutral',
            title: 'Collecte de données',
            description: 'Continuez à utiliser le journal pendant quelques jours pour débloquer vos premières analyses IA.',
            icon: '🔄'
        }];
    }

    // 1. Sleep Duration Correlation
    const goodSleepEntries = entries.filter(e => e.sleepHours >= 7.5);
    const badSleepEntries = entries.filter(e => e.sleepHours < 6.5);

    if (goodSleepEntries.length > 0 && badSleepEntries.length > 0) {
        const avgMoodGoodSleep = calculateAvgMood(goodSleepEntries);
        const avgMoodBadSleep = calculateAvgMood(badSleepEntries);
        const diff = avgMoodGoodSleep - avgMoodBadSleep;

        if (diff > 1) {
            insights.push({
                id: 'sleep-impact',
                type: 'positive',
                title: 'Le sommeil est votre super-pouvoir',
                description: `Votre humeur est ${((diff / avgMoodBadSleep) * 100).toFixed(0)}% meilleure quand vous dormez plus de 7h30.`,
                icon: '🛌',
                score: diff
            });
        }
    }

    // 2. Best Time/Day Analysis (Simplified)
    // (Could be expanded to check weekends vs weekdays)

    // 3. Energy vs Mood
    const highEnergyEntries = entries.filter(e => e.energyPhysical >= 7);
    if (highEnergyEntries.length > 2) {
        const avgMoodHighEnergy = calculateAvgMood(highEnergyEntries);
        const globalAvg = calculateAvgMood(entries);

        if (avgMoodHighEnergy > globalAvg + 1) {
            insights.push({
                id: 'energy-mood',
                type: 'positive',
                title: 'Bouger vous fait du bien',
                description: 'Vos pics d\'énergie physique correspondent à vos meilleurs moments de moral.',
                icon: '⚡',
                score: avgMoodHighEnergy - globalAvg
            });
        }
    }

    // 4. Warning Signs (Low Mood Streak)
    const recentEntries = entries.slice(0, 3); // Assuming sorted by date descending elsewhere, but let's be safe
    if (recentEntries.every(e => e.mood <= 4)) {
        insights.push({
            id: 'low-mood-streak',
            type: 'warning',
            title: 'Passage à vide ?',
            description: 'Cela fait 3 jours que votre moral est bas. Prenez un moment pour vous aujourd\'hui.',
            icon: '❤️',
            score: 10
        });
    }

    return insights.sort((a, b) => (b.score || 0) - (a.score || 0));
};
