// src/components/calculator/SleepForm.tsx

import React, { useState } from 'react';
import { validateWakeTime, validateAge, validateSleepDuration } from '../../utils/sleepCalculator';

export type SleepChallenge =
    | 'difficulty_falling_asleep'
    | 'waking_up_at_night'
    | 'waking_too_early'
    | 'not_rested'
    | 'none';

export interface SleepFormData {
    sleepChallenge: SleepChallenge;
    wakeTime: string;
    desiredHours: number;
    age?: number;
    chronotype?: 'morning' | 'neutral' | 'night';
}

interface SleepFormProps {
    onSubmit: (data: SleepFormData) => void;
    onFormStart?: () => void;
}

const SleepForm: React.FC<SleepFormProps> = ({ onSubmit, onFormStart }) => {
    const [formData, setFormData] = useState<SleepFormData>({
        sleepChallenge: 'difficulty_falling_asleep',
        wakeTime: '',
        desiredHours: 8,
        age: undefined,
        chronotype: 'neutral',
    });

    const [errors, setErrors] = useState<{
        wakeTime?: string;
        age?: string;
        desiredHours?: string;
    }>({});

    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const challenges = [
        { id: 'difficulty_falling_asleep', emoji: '😰', label: 'S\'endormir', desc: 'Je mets > 30min' },
        { id: 'waking_up_at_night', emoji: '😴', label: 'Rester endormi', desc: 'Réve ils nocturnes' },
        { id: 'waking_too_early', emoji: '⏰', label: 'Réveils trop tôt', desc: '5h du matin...' },
        { id: 'not_rested', emoji: '😫', label: 'Pas reposé', desc: 'Fatigué au réveil' },
        { id: 'none', emoji: '✅', label: 'Aucun', desc: 'Je veux optimiser' },
    ];

    const handleChallengeSelect = (challenge: SleepChallenge) => {
        setFormData({ ...formData, sleepChallenge: challenge });
        if (!touched.sleepChallenge && onFormStart) {
            onFormStart();
        }
        setTouched({ ...touched, sleepChallenge: true });
    };

    const handleWakeTimeChange = (value: string) => {
        setFormData({ ...formData, wakeTime: value });
        setTouched({ ...touched, wakeTime: true });

        if (value) {
            const validation = validateWakeTime(value);
            if (!validation.valid) {
                setErrors({ ...errors, wakeTime: validation.error });
            } else {
                const { wakeTime, ...rest } = errors;
                setErrors(rest);
            }
        }
    };

    const handleAgeChange = (value: string) => {
        const age = value ? parseInt(value) : undefined;
        setFormData({ ...formData, age });
        setTouched({ ...touched, age: true });

        if (age) {
            const validation = validateAge(age);
            if (!validation.valid) {
                setErrors({ ...errors, age: validation.error });
            } else {
                const { age: ageError, ...rest } = errors;
                setErrors(rest);
            }
        }
    };

    const handleDurationChange = (hours: number) => {
        setFormData({ ...formData, desiredHours: hours });
        setTouched({ ...touched, desiredHours: true });

        const validation = validateSleepDuration(hours);
        if (validation.warning) {
            setErrors({ ...errors, desiredHours: validation.warning });
        } else {
            const { desiredHours, ...rest } = errors;
            setErrors(rest);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Final validation
        const wakeTimeValidation = validateWakeTime(formData.wakeTime);
        const ageValidation = formData.age ? validateAge(formData.age) : { valid: true };

        if (!wakeTimeValidation.valid || !ageValidation.valid) {
            setErrors({
                wakeTime: wakeTimeValidation.error,
                age: ageValidation.error,
            });
            return;
        }

        onSubmit(formData);
    };

    const getDurationFeedback = (hours: number) => {
        if (hours < 7) return { text: '⚠️ Moins que recommandé', color: 'text-orange-600' };
        if (hours >= 7 && hours <= 9) return { text: '✅ Idéal pour la plupart', color: 'text-green-600' };
        if (hours > 9) return { text: '💤 Tu es un gros dormeur !', color: 'text-blue-600' };
        return { text: '', color: '' };
    };

    const feedback = getDurationFeedback(formData.desiredHours);
    const isFormValid = formData.wakeTime && Object.keys(errors).length === 0;

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Question 0: Sleep Challenge */}
            <div className="space-y-4">
                <label className="block text-lg font-semibold text-neutral-900 dark:text-white">
                    D'abord, quel est ton plus grand défi avec le sommeil ?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {challenges.map((challenge) => (
                        <button
                            key={challenge.id}
                            type="button"
                            onClick={() => handleChallengeSelect(challenge.id as SleepChallenge)}
                            className={`p-4 rounded-xl border-2 transition-all text-left ${formData.sleepChallenge === challenge.id
                                    ? 'border-sleep-primary bg-sleep-primary/10 shadow-md'
                                    : 'border-neutral-200 dark:border-neutral-700 hover:border-sleep-light'
                                }`}
                        >
                            <div className="text-3xl mb-2">{challenge.emoji}</div>
                            <div className="font-semibold text-neutral-900 dark:text-white mb-1">
                                {challenge.label}
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                {challenge.desc}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Question 1: Wake Time */}
            <div className="space-y-2">
                <label htmlFor="wakeTime" className="block text-lg font-semibold text-neutral-900 dark:text-white">
                    À quelle heure te réveilles-tu demain matin ?
                </label>
                <input
                    id="wakeTime"
                    type="time"
                    value={formData.wakeTime}
                    onChange={(e) => handleWakeTimeChange(e.target.value)}
                    className="w-full px-4 py-3 text-lg border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-sleep-primary focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    required
                />
                {errors.wakeTime && touched.wakeTime && (
                    <p className="text-sm text-red-600 dark:text-red-400">{errors.wakeTime}</p>
                )}
            </div>

            {/* Question 2: Sleep Duration */}
            <div className="space-y-3">
                <label className="block text-lg font-semibold text-neutral-900 dark:text-white">
                    Combien d'heures veux-tu dormir ?
                </label>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    💡 Recommandé : 7-9h pour les adultes
                </p>

                {/* Slider */}
                <div className="space-y-2">
                    <input
                        type="range"
                        min="5"
                        max="10"
                        step="0.5"
                        value={formData.desiredHours}
                        onChange={(e) => handleDurationChange(parseFloat(e.target.value))}
                        className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-sleep-primary"
                    />
                    <div className="flex justify-between text-sm text-neutral-500">
                        <span>5h</span>
                        <span className={`text-2xl font-bold ${feedback.color}`}>
                            {formData.desiredHours}h
                        </span>
                        <span>10h</span>
                    </div>
                    {feedback.text && (
                        <p className={`text-sm font-medium ${feedback.color}`}>{feedback.text}</p>
                    )}
                </div>
            </div>

            {/* Question 3: Age (Optional) */}
            <div className="space-y-2">
                <label htmlFor="age" className="block text-lg font-semibold text-neutral-900 dark:text-white">
                    Quel âge as-tu ? <span className="text-sm font-normal text-neutral-500">(optionnel mais recommandé)</span>
                </label>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Ça aide à ajuster les cycles selon ton âge
                </p>
                <input
                    id="age"
                    type="number"
                    min="13"
                    max="100"
                    value={formData.age || ''}
                    onChange={(e) => handleAgeChange(e.target.value)}
                    placeholder="Ex: 32"
                    className="w-full px-4 py-3 text-lg border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-sleep-primary focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                />
                {errors.age && touched.age && (
                    <p className="text-sm text-red-600 dark:text-red-400">{errors.age}</p>
                )}
            </div>

            {/* Question 4: Chronotype (Optional) */}
            <div className="space-y-3">
                <label className="block text-lg font-semibold text-neutral-900 dark:text-white">
                    Tu es plutôt... <span className="text-sm font-normal text-neutral-500">(optionnel)</span>
                </label>
                <div className="flex gap-3">
                    {[
                        { value: 'morning', emoji: '🌅', label: 'Lève-tôt' },
                        { value: 'neutral', emoji: '⚖️', label: 'Entre les deux' },
                        { value: 'night', emoji: '🌙', label: 'Couche-tard' },
                    ].map((type) => (
                        <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, chronotype: type.value as any })}
                            className={`flex-1 p-4 rounded-xl border-2 transition-all ${formData.chronotype === type.value
                                    ? 'border-sleep-accent bg-sleep-accent/10'
                                    : 'border-neutral-200 dark:border-neutral-700 hover:border-sleep-light'
                                }`}
                        >
                            <div className="text-2xl mb-1">{type.emoji}</div>
                            <div className="text-sm font-medium text-neutral-900 dark:text-white">{type.label}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={!isFormValid}
                className="w-full px-8 py-4 bg-gradient-to-r from-sleep-primary to-sleep-light hover:from-sleep-primary/90 hover:to-sleep-light/90 disabled:from-neutral-300 disabled:to-neutral-400 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:transform-none"
            >
                🎯 CALCULER MON HEURE IDÉALE
            </button>

            {errors.desiredHours && (
                <p className="text-sm text-center text-orange-600 dark:text-orange-400">
                    {errors.desiredHours}
                </p>
            )}
        </form>
    );
};

export default SleepForm;
