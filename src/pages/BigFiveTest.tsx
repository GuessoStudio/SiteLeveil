import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, RotateCcw, Check, Brain, Activity, Heart, Users, Shield } from 'lucide-react';
import { QUESTIONS, INTERPRETATIONS, type Question, type Trait } from '../data/bigFiveQuestions';

// Configurations
const ANIMATION_DURATION = 0.5;

// Composant : Radar Chart SVG simple
const RadarChart = ({ scores }: { scores: Record<Trait, number> }) => {
    const size = 300;
    const center = size / 2;
    const radius = 120;
    const traits: Trait[] = ['Ouverture', 'Conscience', 'Extraversion', 'Agréabilité', 'Névrosisme'];

    // Calcul des points du polygone
    const points = traits.map((trait, i) => {
        const angle = (Math.PI * 2 * i) / traits.length - Math.PI / 2;
        // Score est sur 100, on normalise sur 0-1
        const value = (scores[trait] || 0) / 100;
        const x = center + Math.cos(angle) * (radius * value);
        const y = center + Math.sin(angle) * (radius * value);
        return `${x},${y}`;
    }).join(' ');

    // Grille de fond (pentagones concentriques)
    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

    return (
        <div className="relative w-full max-w-[300px] mx-auto aspect-square">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
                {/* Grille */}
                {gridLevels.map((level, i) => (
                    <polygon
                        key={i}
                        points={traits.map((_, j) => {
                            const angle = (Math.PI * 2 * j) / traits.length - Math.PI / 2;
                            const x = center + Math.cos(angle) * (radius * level);
                            const y = center + Math.sin(angle) * (radius * level);
                            return `${x},${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity={0.1}
                        className="text-neutral-900 dark:text-white"
                    />
                ))}

                {/* Axes */}
                {traits.map((trait, i) => {
                    const angle = (Math.PI * 2 * i) / traits.length - Math.PI / 2;
                    const x = center + Math.cos(angle) * radius;
                    const y = center + Math.sin(angle) * radius;
                    return (
                        <line
                            key={`axis-${i}`}
                            x1={center}
                            y1={center}
                            x2={x}
                            y2={y}
                            stroke="currentColor"
                            strokeOpacity={0.1}
                            className="text-neutral-900 dark:text-white"
                        />
                    );
                })}

                {/* Zone de score */}
                <motion.polygon
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    points={points}
                    fill="rgba(234, 179, 8, 0.5)" // Yellow-500 avec opacité
                    stroke="rgb(234, 179, 8)"
                    strokeWidth="2"
                />

                {/* Labels */}
                {traits.map((trait, i) => {
                    const angle = (Math.PI * 2 * i) / traits.length - Math.PI / 2;
                    // Position légèrement à l'extérieur
                    const x = center + Math.cos(angle) * (radius + 25);
                    const y = center + Math.sin(angle) * (radius + 20);

                    return (
                        <text
                            key={`label-${i}`}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-[10px] sm:text-xs font-medium fill-current text-neutral-600 dark:text-neutral-400 uppercase tracking-wider"
                        >
                            {trait.substring(0, 3)}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};

export default function BigFiveTest() {
    const [step, setStep] = useState<'intro' | 'test' | 'calculating' | 'results'>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    // Réinitialiser
    const resetTest = () => {
        setStep('intro');
        setCurrentQuestionIndex(0);
        setAnswers({});
        window.scrollTo(0, 0);
    };

    // Gérer la réponse
    const handleAnswer = (value: number) => {
        const newAnswers = { ...answers, [QUESTIONS[currentQuestionIndex].id]: value };
        setAnswers(newAnswers);

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 250);
        } else {
            setStep('calculating');
            setTimeout(() => setStep('results'), 2000);
        }
    };

    // Calcul des résultats
    const results = useMemo(() => {
        if (step !== 'results') return null;

        const traitScores: Record<Trait, number> = {
            'Ouverture': 0,
            'Conscience': 0,
            'Extraversion': 0,
            'Agréabilité': 0,
            'Névrosisme': 0
        };

        const traitCounts: Record<Trait, number> = {
            'Ouverture': 0,
            'Conscience': 0,
            'Extraversion': 0,
            'Agréabilité': 0,
            'Névrosisme': 0
        };

        QUESTIONS.forEach(q => {
            const value = answers[q.id] || 3; // Par défaut neutre si manquant (ne devrait pas arriver)
            // Si inversé : 1->5, 2->4, 3->3, 4->2, 5->1  =>  6 - value
            const score = q.reversed ? (6 - value) : value;

            traitScores[q.trait] += score;
            traitCounts[q.trait] += 1;
        });

        // Normaliser sur 100
        // Score min par question = 1, max = 5.
        // Pour N questions, min = N, max = 5N.
        // (Total - Min) / (Max - Min) * 100
        const finalScores: Record<Trait, number> = {} as any;

        (Object.keys(traitScores) as Trait[]).forEach(trait => {
            const raw = traitScores[trait];
            const count = traitCounts[trait];
            const min = count * 1;
            const max = count * 5;

            finalScores[trait] = Math.round(((raw - min) / (max - min)) * 100);
        });

        return finalScores;
    }, [step, answers]);

    // Icônes par trait
    const TraitIcons: Record<Trait, any> = {
        'Ouverture': Brain,
        'Conscience': Shield,
        'Extraversion': Activity,
        'Agréabilité': Heart,
        'Névrosisme': Users // Ou un autre symbole approprié
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-sand-50 dark:bg-neutral-900 transition-colors duration-300">
            <Helmet>
                <title>Test de Personnalité Big Five | L'Éveil</title>
                <meta name="description" content="Découvrez votre profil psychologique complet avec notre test scientifique basé sur le modèle des Big Five (OCEAN)." />
            </Helmet>

            <div className="max-w-3xl mx-auto">

                {/* ÉTAPE 1 : INTRO */}
                {step === 'intro' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-8"
                    >
                        <div className="inline-block p-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 mb-4">
                            <Brain className="w-12 h-12" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-sand-50">
                            Test de Personnalité <span className="text-yellow-600 dark:text-yellow-400">Big Five</span>
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                            Le modèle des Big Five est la référence scientifique en psychologie.
                            Découvrez vos 5 traits majeurs : Ouverture, Conscienciosité, Extraversion, Agréabilité et Névrosisme.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto py-8">
                            {[
                                { icon: Activity, title: "Rapide", desc: "30 questions (~3 min)" },
                                { icon: Shield, title: "Scientifique", desc: "Basé sur l'IPIP-NEO" },
                                { icon: Brain, title: "Détaillé", desc: "Analyse complète" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700">
                                    <item.icon className="w-6 h-6 text-yellow-500 mb-2" />
                                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setStep('test')}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-full hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
                        >
                            Commencer le test
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {/* ÉTAPE 2 : TEST */}
                {step === 'test' && (
                    <div className="max-w-2xl mx-auto">
                        {/* Progress Bar */}
                        <div className="mb-8 relative h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-yellow-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestionIndex) / QUESTIONS.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="mb-4 text-center text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                            Question {currentQuestionIndex + 1} / {QUESTIONS.length}
                        </div>

                        <div className="min-h-[200px] flex items-center justify-center mb-8">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={currentQuestionIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-2xl md:text-3xl font-medium text-center text-neutral-900 dark:text-sand-50"
                                >
                                    {QUESTIONS[currentQuestionIndex].text}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { val: 1, label: "Pas du tout d'accord" },
                                { val: 2, label: "Plutôt pas d'accord" },
                                { val: 3, label: "Neutre" },
                                { val: 4, label: "Plutôt d'accord" },
                                { val: 5, label: "Tout à fait d'accord" }
                            ].map((option) => (
                                <button
                                    key={option.val}
                                    onClick={() => handleAnswer(option.val)}
                                    className="w-full text-left px-6 py-4 rounded-xl border-2 border-neutral-100 dark:border-neutral-800 hover:border-yellow-500 dark:hover:border-yellow-500 bg-white dark:bg-neutral-800 hover:bg-yellow-50 dark:hover:bg-neutral-700/50 transition-all duration-200 group flex items-center justify-between"
                                >
                                    <span className="font-medium text-neutral-700 dark:text-neutral-200 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors">
                                        {option.label}
                                    </span>
                                    <div className="w-5 h-5 rounded-full border-2 border-neutral-300 dark:border-neutral-600 group-hover:border-yellow-500 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* ÉTAPE 3 : CALCUL */}
                {step === 'calculating' && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="mb-8"
                        >
                            <Brain className="w-16 h-16 text-yellow-500" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Analyse de vos réponses...</h2>
                        <p className="text-neutral-500">Construction de votre profil psychologique.</p>
                    </div>
                )}

                {/* ÉTAPE 4 : RÉSULTATS */}
                {step === 'results' && results && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-12"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-sand-50 mb-4">
                                Votre Profil <span className="text-yellow-600 dark:text-yellow-400">Big Five</span>
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-300">
                                Voici l'analyse détaillée de votre personnalité
                            </p>
                        </div>

                        {/* Graphique Radar */}
                        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-sm border border-neutral-100 dark:border-neutral-700 flex flex-col items-center">
                            <RadarChart scores={results} />
                        </div>

                        {/* Cartes détaillées */}
                        <div className="space-y-8">
                            {(Object.keys(results) as Trait[]).map((trait, index) => {
                                const score = results[trait];
                                const info = INTERPRETATIONS[trait];
                                const Icon = TraitIcons[trait];
                                const isHigh = score >= 50;

                                return (
                                    <motion.div
                                        key={trait}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 dark:border-neutral-700 overflow-hidden relative"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                            {/* Score Circle */}
                                            <div className="flex-shrink-0 flex flex-col items-center justify-center w-24">
                                                <div className="relative w-20 h-20 flex items-center justify-center">
                                                    <svg className="w-full h-full transform -rotate-90">
                                                        <circle
                                                            cx="40" cy="40" r="36"
                                                            stroke="currentColor" strokeWidth="6"
                                                            fill="none"
                                                            className="text-neutral-100 dark:text-neutral-700"
                                                        />
                                                        <motion.circle
                                                            cx="40" cy="40" r="36"
                                                            stroke="currentColor" strokeWidth="6"
                                                            fill="none"
                                                            strokeDasharray={2 * Math.PI * 36}
                                                            initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                                                            animate={{ strokeDashoffset: 2 * Math.PI * 36 * (1 - score / 100) }}
                                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                                            className={isHigh ? "text-yellow-500" : "text-neutral-400 dark:text-neutral-500"}
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-xl font-bold text-neutral-900 dark:text-white">{score}%</span>
                                                    </div>
                                                </div>
                                                <span className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-500">{isHigh ? 'Élevé' : 'Bas'}</span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <Icon className="w-6 h-6 text-yellow-500" />
                                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{info.title}</h3>
                                                </div>

                                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                                                    {isHigh ? info.high : info.low}
                                                </p>

                                                <div className="bg-sand-50 dark:bg-neutral-900/50 rounded-lg p-4 border-l-4 border-yellow-500">
                                                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1 uppercase tracking-wider flex items-center gap-2">
                                                        <Check className="w-4 h-4" /> Analyse
                                                    </h4>
                                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                                                        {/* Ici on pourrait ajouter des conseils dynamiques si on avait plus de données */}
                                                        Ce score indique une tendance {isHigh ? 'marquée' : 'modérée'} pour ce trait.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Restart */}
                        <div className="text-center py-12">
                            <button
                                onClick={resetTest}
                                className="inline-flex items-center text-neutral-500 dark:text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium transition-colors"
                            >
                                <RotateCcw className="w-4 h-4 mr-2" />
                                Recommencer le test
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
