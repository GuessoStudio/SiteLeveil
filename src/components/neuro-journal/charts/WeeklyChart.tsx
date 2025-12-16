
import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { NeuroJournalEntry } from '../../../hooks/useNeuroJournal';

interface WeeklyChartProps {
    entries: NeuroJournalEntry[];
}

const WeeklyChart = ({ entries }: WeeklyChartProps) => {
    // Process data: get last 7 days, fill missing days with null or previous
    const processData = () => {
        const last7Days = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toLocaleDateString('fr-FR', { weekday: 'short' });

            // Find entry for this day
            const found = entries.find(e =>
                new Date(e.date).toDateString() === d.toDateString()
            );

            last7Days.push({
                name: dateStr,
                mood: found ? found.mood : null,
                energy: found ? found.energyPhysical : null
            });
        }
        return last7Days;
    };

    const data = processData();

    if (entries.length < 2) {
        return (
            <div className="h-48 flex items-center justify-center bg-gray-50 dark:bg-neutral-800 rounded-xl border border-gray-100 dark:border-neutral-700">
                <p className="text-sm text-gray-500">
                    Graphique en attente de données (2+ jours)
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700 animate-fadeIn">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">
                Tendance de la semaine
            </h3>
            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 10 }}
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                        />
                        <YAxis
                            hide
                            domain={[0, 10]}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="mood"
                            stroke="#4F46E5"
                            fillOpacity={1}
                            fill="url(#colorMood)"
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyChart;
