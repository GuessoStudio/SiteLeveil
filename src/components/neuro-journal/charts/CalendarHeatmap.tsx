
import React from 'react';
import { NeuroJournalEntry } from '../../../hooks/useNeuroJournal';

interface CalendarHeatmapProps {
    entries: NeuroJournalEntry[];
}

const CalendarHeatmap = ({ entries }: CalendarHeatmapProps) => {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const startDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay(); // 0 = Sun

    // Adjust for Monday start (0 = Mon, 6 = Sun)
    const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

    const getDayColor = (day: number) => {
        const dateStr = new Date(today.getFullYear(), today.getMonth(), day).toDateString();
        const entry = entries.find(e => new Date(e.date).toDateString() === dateStr);

        if (!entry) return 'bg-gray-100 dark:bg-neutral-700';

        if (entry.mood >= 8) return 'bg-green-500';
        if (entry.mood >= 6) return 'bg-lime-400';
        if (entry.mood >= 4) return 'bg-yellow-400';
        if (entry.mood >= 3) return 'bg-orange-400';
        return 'bg-red-500';
    };

    return (
        <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700 animate-fadeIn">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex justify-between">
                <span>Vue Mensuelle</span>
                <span className="text-gray-400 font-normal text-xs">{today.toLocaleDateString('fr-FR', { month: 'long' })}</span>
            </h3>

            <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400 mb-2">
                <div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div><div>D</div>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {/* Empty slots for start of month */}
                {Array.from({ length: adjustedStartDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}

                {/* Days */}
                {Array.from({ length: daysInMonth }).map((_, i) => (
                    <div
                        key={i + 1}
                        className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${getDayColor(i + 1)} ${getDayColor(i + 1).includes('gray') ? 'text-gray-400' : 'text-white font-bold'}`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarHeatmap;
