
import { useState, useEffect } from 'react';

export interface NeuroJournalEntry {
    id: string;
    date: string; // ISO string
    mood: number; // 1-10
    sleepHours: number;
    sleepQuality: number; // 1-5
    energyPhysical: number; // 1-10
    energyMental: number; // 1-10
    anxietyLevel: number; // 1-10
    positiveTags: string[];
    negativeTags: string[];
    notes: string;
}

export interface UserStats {
    streak: number;
    totalEntries: number;
    lastCheckIn: string | null;
}

const STORAGE_KEY = 'neuro_journal_data';
const STATS_KEY = 'neuro_journal_stats';

export interface FavoriteItem {
    id: string | number;
    title: string;
    type: 'article' | 'tool' | 'ebook';
    url: string; // Internal path
    image?: string;
    addedAt: string; // ISO date
}

export const useNeuroJournal = () => {
    const [entries, setEntries] = useState<NeuroJournalEntry[]>([]);
    const [stats, setStats] = useState<UserStats>({
        streak: 0,
        totalEntries: 0,
        lastCheckIn: null,
    });
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    // Load data on mount
    useEffect(() => {
        const savedEntries = localStorage.getItem(STORAGE_KEY);
        const savedStats = localStorage.getItem(STATS_KEY);
        const savedFavorites = localStorage.getItem('neuro_journal_favorites');

        if (savedEntries) {
            setEntries(JSON.parse(savedEntries));
        }
        if (savedStats) {
            setStats(JSON.parse(savedStats));
        }
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    // Save entry
    const addEntry = (entry: Omit<NeuroJournalEntry, 'id'>) => {
        const newEntry: NeuroJournalEntry = {
            ...entry,
            id: crypto.randomUUID(),
        };

        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));

        // Update stats
        const today = new Date().toDateString();
        const lastDate = stats.lastCheckIn ? new Date(stats.lastCheckIn).toDateString() : null;

        let newStreak = stats.streak;

        if (lastDate !== today) {
            // Simple streak logic: if last check-in was yesterday, increment. 
            // If it was today, do nothing. If older, reset to 1.
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastDate === yesterday.toDateString()) {
                newStreak += 1;
            } else if (lastDate === null) {
                newStreak = 1;
            } else {
                // Check if broken streak (more than 1 day gap) is handled here?
                // For MVP simplification: if not yesterday and not today, reset to 1.
                newStreak = 1;
            }
        }

        const newStats = {
            streak: newStreak,
            totalEntries: stats.totalEntries + 1,
            lastCheckIn: new Date().toISOString(),
        };

        setStats(newStats);
        localStorage.setItem(STATS_KEY, JSON.stringify(newStats));
    };

    // Favorites Logic
    const toggleFavorite = (item: Omit<FavoriteItem, 'addedAt'>) => {
        const createFavorite = (inputItem: Omit<FavoriteItem, 'addedAt'>): FavoriteItem => ({
            ...inputItem,
            addedAt: new Date().toISOString()
        });

        const existingIndex = favorites.findIndex(f => f.id === item.id && f.type === item.type);
        let updatedFavorites;

        if (existingIndex >= 0) {
            // Remove
            updatedFavorites = favorites.filter((_, index) => index !== existingIndex);
        } else {
            // Add
            updatedFavorites = [createFavorite(item), ...favorites];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem('neuro_journal_favorites', JSON.stringify(updatedFavorites));
    };

    const isFavorite = (id: string | number, type: string) => {
        return favorites.some(f => f.id === id && f.type === type);
    };

    const getEntryByDate = (date: string) => {
        return entries.find(e => new Date(e.date).toDateString() === new Date(date).toDateString());
    }

    // Reading Progress Logic
    const [readingProgress, setReadingProgress] = useState<Record<string, number>>({});

    useEffect(() => {
        const savedProgress = localStorage.getItem('neuro_journal_reading_progress');
        if (savedProgress) {
            setReadingProgress(JSON.parse(savedProgress));
        }
    }, []);

    const saveReadingProgress = (slug: string, progress: number) => {
        const newProgress = { ...readingProgress, [slug]: progress };
        setReadingProgress(newProgress);
        localStorage.setItem('neuro_journal_reading_progress', JSON.stringify(newProgress));
    };

    const clearData = () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer TOUTES vos données ? Cette action est irréversible.')) {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(STATS_KEY);
            localStorage.removeItem('neuro_journal_favorites');
            localStorage.removeItem('neuro_journal_reading_progress');
            setEntries([]);
            setStats({ streak: 0, totalEntries: 0, lastCheckIn: null });
            setFavorites([]);
            setReadingProgress({});
        }
    };

    return {
        entries,
        stats,
        favorites,
        readingProgress,
        addEntry,
        toggleFavorite,
        isFavorite,
        getEntryByDate,
        saveReadingProgress,
        clearData
    };
};
