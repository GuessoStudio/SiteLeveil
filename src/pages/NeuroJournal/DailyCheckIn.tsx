
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useNeuroJournal } from '../../hooks/useNeuroJournal';
import MoodSlider from '../../components/neuro-journal/inputs/MoodSlider';
import SleepInput from '../../components/neuro-journal/inputs/SleepInput';
import EnergyInput from '../../components/neuro-journal/inputs/EnergyInput';

import TagInput from '../../components/neuro-journal/inputs/TagInput';

const TOTAL_STEPS = 6;

const DailyCheckIn = () => {
    const navigate = useNavigate();
    const { addEntry, stats } = useNeuroJournal();
    const [step, setStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    // Form Stats
    const [mood, setMood] = useState(6);
    const [sleepHours, setSleepHours] = useState(7);
    const [sleepQuality, setSleepQuality] = useState(3);
    const [energyPhysical, setEnergyPhysical] = useState(6);
    const [energyMental, setEnergyMental] = useState(6);
    const [anxietyLevel, setAnxietyLevel] = useState(3);
    const [positiveTags, setPositiveTags] = useState<string[]>([]);
    const [negativeTags, setNegativeTags] = useState<string[]>([]);
    const [notes, setNotes] = useState("");

    // Predefined Tags
    const POSITIVE_TAGS = ['Sport', 'Lecture', 'Méditation', 'Amis', 'Soleil', 'Productivité', 'Famille', 'Nature'];
    const NEGATIVE_TAGS = ['Stress', 'Maladie', 'Conflit', 'Fatigue', 'Doute', 'Ennui', 'Bruit', 'Écrans'];

    // Derived state for animation or streak feedback
    const [showConfetti, setShowConfetti] = useState(false);

    const handleNext = () => {
        if (step < TOTAL_STEPS) {
            setStep(step + 1);
        } else {
            handleComplete();
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate(-1);
        }
    };

    const handleComplete = () => {
        addEntry({
            date: new Date().toISOString(),
            mood,
            sleepHours,
            sleepQuality,
            energyPhysical,
            energyMental,
            anxietyLevel,
            positiveTags,
            negativeTags,
            notes
        });

        setIsComplete(true);
        setTimeout(() => setShowConfetti(true), 500); // Simulate animation trigger
    };

    // Render Success Screen
    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4 animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Check-in terminé !
                </h2>

                <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 w-full max-w-sm">
                    <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Série actuelle</p>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                        {stats.streak} Jours
                    </div>
                    {stats.streak >= 3 && (
                        <p className="text-sm text-orange-600 mt-2 font-medium">🔥 VOUS ÊTES EN FEU !</p>
                    )}
                </div>

                <button
                    onClick={() => navigate('/neuro-journal/dashboard')}
                    className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all w-full md:w-auto"
                >
                    Retour au Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-0 max-w-2xl mx-auto px-4 py-6">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-neutral-800 h-1.5 rounded-full mb-8">
                <div
                    className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                />
            </div>

            {/* Questions Header */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {step === 1 && "Comment te sens-tu ?"}
                    {step === 2 && "Comment as-tu dormi ?"}
                    {step === 3 && "Niveau d'énergie ?"}
                    {step === 4 && "Niveau d'anxiété ?"}
                    {step === 5 && "Facteurs d'influence"}
                    {step === 6 && "Notes du jour"}
                </h2>
            </div>

            {/* Content */}
            <div className="w-full">
                {step === 1 && (
                    <MoodSlider value={mood} onChange={setMood} />
                )}
                {step === 2 && (
                    <SleepInput
                        hours={sleepHours}
                        quality={sleepQuality}
                        onHoursChange={setSleepHours}
                        onQualityChange={setSleepQuality}
                    />
                )}
                {step === 3 && (
                    <EnergyInput
                        physical={energyPhysical}
                        mental={energyMental}
                        onPhysicalChange={setEnergyPhysical}
                        onMentalChange={setEnergyMental}
                    />
                )}
                {step === 4 && (
                    <div className="space-y-6">
                        <MoodSlider
                            value={anxietyLevel}
                            onChange={(val) => setAnxietyLevel(val)}
                            reversed={true}
                        />
                        <p className="text-center text-sm text-gray-500">1 = Zen, 10 = Panique</p>
                    </div>
                )}
                {step === 5 && (
                    <div className="space-y-8 px-4">
                        <TagInput
                            label="Qu'est-ce qui a aidé ?"
                            predefinedTags={POSITIVE_TAGS}
                            selectedTags={positiveTags}
                            onChange={setPositiveTags}
                        />
                        <div className="border-t border-gray-100 dark:border-neutral-700" />
                        <TagInput
                            label="Qu'est-ce qui a pesé ?"
                            predefinedTags={NEGATIVE_TAGS}
                            selectedTags={negativeTags}
                            onChange={setNegativeTags}
                        />
                    </div>
                )}
                {step === 6 && (
                    <div className="px-6">
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Journaling libre... (Optionnel)"
                            className="w-full h-48 p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 border-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                    </div>
                )}
            </div>

            {/* Footer Nav - Inline */}
            <div className="mt-12 flex items-center justify-between pb-8">
                <button
                    onClick={handleBack}
                    className="bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 p-4 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={handleNext}
                    className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"
                >
                    {step === TOTAL_STEPS ? 'Terminer' : 'Suivant'}
                    {step !== TOTAL_STEPS && <ArrowRight className="w-5 h-5" />}
                </button>
            </div>
        </div>
    );
};

export default DailyCheckIn;
