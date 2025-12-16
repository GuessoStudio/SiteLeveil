
import React from 'react';
import { Moon, Star } from 'lucide-react';

interface SleepInputProps {
    hours: number;
    quality: number; // 1-5
    onHoursChange: (val: number) => void;
    onQualityChange: (val: number) => void;
}

const SleepInput = ({ hours, quality, onHoursChange, onQualityChange }: SleepInputProps) => {
    return (
        <div className="space-y-6 animate-fadeIn">
            {/* Hours Selector */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                        <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Durée du sommeil</h3>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <button
                        onClick={() => onHoursChange(Math.max(0, hours - 0.5))}
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-neutral-700 flex items-center justify-center text-xl font-bold hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
                    >
                        -
                    </button>

                    <div className="text-center">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">{hours}</span>
                        <span className="text-sm text-gray-500 ml-1">h</span>
                    </div>

                    <button
                        onClick={() => onHoursChange(Math.min(24, hours + 0.5))}
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-neutral-700 flex items-center justify-center text-xl font-bold hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Quality Selector */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Qualité du réveil</h3>
                <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => onQualityChange(star)}
                            className="p-2 transition-transform hover:scale-110 focus:outline-none"
                        >
                            <Star
                                className={`w-8 h-8 ${star <= quality ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-neutral-600'}`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SleepInput;
