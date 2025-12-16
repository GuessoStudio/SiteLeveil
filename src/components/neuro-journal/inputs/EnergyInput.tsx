
import React from 'react';
import { Battery, Zap } from 'lucide-react';

interface EnergyInputProps {
    physical: number;
    mental: number;
    onPhysicalChange: (val: number) => void;
    onMentalChange: (val: number) => void;
}

const EnergyInput = ({ physical, mental, onPhysicalChange, onMentalChange }: EnergyInputProps) => {
    return (
        <div className="space-y-4 animate-fadeIn">
            {/* Physical Energy */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Battery className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">Énergie Physique</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{physical}/10</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={physical}
                    onChange={(e) => onPhysicalChange(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500 dark:bg-neutral-700"
                />
            </div>

            {/* Mental Energy */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">Énergie Mentale</span>
                    </div>
                    <span className="text-lg font-bold text-yellow-600">{mental}/10</span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={mental}
                    onChange={(e) => onMentalChange(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500 dark:bg-neutral-700"
                />
            </div>
        </div>
    );
};

export default EnergyInput;
