
import React, { useState } from 'react';

interface MoodSliderProps {
    value: number;
    onChange: (value: number) => void;
    reversed?: boolean;
}

const MoodSlider = ({ value, onChange, reversed = false }: MoodSliderProps) => {
    // Emojis mapping based on score (1-10)
    const getEmoji = (score: number) => {
        if (reversed) {
            if (score <= 2) return '😌'; // Zen
            if (score <= 4) return '🙂';
            if (score <= 6) return '😐';
            if (score <= 8) return '😰';
            return '😱'; // Panic
        }
        if (score <= 2) return '😫';
        if (score <= 4) return '😟';
        if (score <= 6) return '😐';
        if (score <= 8) return '🙂';
        return '😄';
    };

    const getLabel = (score: number) => {
        if (reversed) {
            if (score <= 2) return 'Zen';
            if (score <= 4) return 'Calme';
            if (score <= 6) return 'Moyen';
            if (score <= 8) return 'Anxieux';
            return 'Panique';
        }
        if (score <= 2) return 'Très mauvais';
        if (score <= 4) return 'Mauvais';
        if (score <= 6) return 'Moyen';
        if (score <= 8) return 'Bien';
        return 'Excellent';
    };

    const getColor = (score: number) => {
        // Tailwind classes logic or dynamic HSL
        if (reversed) {
            if (score <= 2) return 'bg-green-500';
            if (score <= 4) return 'bg-lime-500';
            if (score <= 6) return 'bg-yellow-400';
            if (score <= 8) return 'bg-orange-500';
            return 'bg-red-500';
        }
        if (score <= 2) return 'bg-red-500';
        if (score <= 4) return 'bg-orange-500';
        if (score <= 6) return 'bg-yellow-400';
        if (score <= 8) return 'bg-lime-500';
        return 'bg-green-500';
    }

    return (
        <div className="space-y-6 text-center animate-fadeIn">
            <div className="relative">
                <div className="text-6xl mb-2 transition-transform duration-300 transform hover:scale-110 cursor-grab active:cursor-grabbing">
                    {getEmoji(value)}
                </div>
                <p className="text-lg font-bold text-gray-700 dark:text-gray-200">
                    {getLabel(value)}
                </p>
                <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-2">
                    {value}<span className="text-xl text-gray-400">/10</span>
                </p>
            </div>

            <div className="px-4">
                <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:bg-neutral-700"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>1</span>
                    <span>10</span>
                </div>
            </div>
        </div>
    );
};

export default MoodSlider;
