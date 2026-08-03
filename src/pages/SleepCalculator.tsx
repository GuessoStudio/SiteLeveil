// src/pages/SleepCalculator.tsx

import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { calculateBedtime, SleepCalculation } from '../utils/sleepCalculator';
import { useGA4Sleep } from '../hooks/useGA4Sleep';
import SleepForm, { SleepFormData } from '../components/calculator/SleepForm';
import SleepResults from '../components/calculator/SleepResults';
import PersonalizedAdvice from '../components/calculator/PersonalizedAdvice';
import LeadMagnet from '../components/calculator/LeadMagnet';
import ShareButtons from '../components/calculator/ShareButtons';

const SleepCalculator: React.FC = () => {
    const [calculation, setCalculation] = useState<SleepCalculation | null>(null);
    const [formData, setFormData] = useState<SleepFormData | null>(null);
    const [showResults, setShowResults] = useState(false);

    const ga = useGA4Sleep();

    // Track page view on mount
    useEffect(() => {
        ga.trackPageView();
    }, []);

    const handleFormSubmit = (data: SleepFormData) => {
        // Calculate bedtime
        const result = calculateBedtime(data.wakeTime, data.desiredHours, data.age);

        // Store results
        setCalculation(result);
        setFormData(data);
        setShowResults(true);

        // Track calculation event
        ga.trackCalculation({
            bedtime: result.bedtime,
            wakeTime: data.wakeTime,
            duration: result.actualHours,
            age: data.age,
            numCycles: result.numCycles,
        });

        // Scroll to results
        setTimeout(() => {
            document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handleFormStart = () => {
        ga.trackFormStart();
    };

    const handleLeadSuccess = () => {
        if (formData) {
            ga.trackLead(formData.sleepChallenge);
        }
    };

    const handleShare = (platform: string) => {
        ga.trackShare(platform);
    };

    const handleRecalculate = () => {
        setShowResults(false);
        setCalculation(null);
        setFormData(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Composant SEO et non <Helmet> brut : Helmet n'est pas sérialisé
                pendant le build SSG, la page servait donc le title, la description
                et le canonical génériques du template, sans aucun JSON-LD. */}
            <SEO
                title="Calculateur de sommeil : votre heure de coucher idéale"
                description="Découvre ton heure de coucher optimale basée sur les cycles de sommeil de 90 min. Calcul gratuit personnalisé. Résultats instantanés."
                path="/calculateur-sommeil/"
                image="/images/og-default.webp"
                type="website"
                category="Neurosciences"
                jsonLd={[
                    {
                        '@context': 'https://schema.org',
                        '@type': 'WebApplication',
                        name: 'Calculateur de Sommeil',
                        description: 'Calcule ton heure de coucher idéale basée sur les cycles de sommeil',
                        url: 'https://leveilmental.fr/calculateur-sommeil/',
                        applicationCategory: 'HealthApplication',
                        // Pas d'aggregateRating : le site ne collecte aucun avis
                        // utilisateur. Publier une note inventée expose à une action
                        // manuelle Google (avis non sourcés / auto-attribués).
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'EUR',
                        },
                    },
                    {
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://leveilmental.fr' },
                            { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://leveilmental.fr/ressources/' },
                            { '@type': 'ListItem', position: 3, name: 'Calculateur de sommeil', item: 'https://leveilmental.fr/calculateur-sommeil/' },
                        ],
                    },
                ]}
            />

            <div className="min-h-screen bg-gradient-to-b from-sleep-bg to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12 animate-fadeInUp">
                        <div className="text-6xl mb-4">🌙</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            À Quelle Heure Te Coucher pour Te Réveiller{' '}
                            <span className="text-sleep-primary">FRAIS</span> ?
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Basé sur les cycles de sommeil de 90 minutes • Résultats personnalisés instantanés •
                            100% gratuit
                        </p>
                    </header>

                    {/* Form Section */}
                    {!showResults && (
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
                            <SleepForm onSubmit={handleFormSubmit} onFormStart={handleFormStart} />
                        </div>
                    )}

                    {/* Results Section */}
                    {showResults && calculation && formData && (
                        <div id="results" className="space-y-8">
                            {/* Results Display */}
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl">
                                <SleepResults calculation={calculation} wakeTime={formData.wakeTime} />
                            </div>

                            {/* Personalized Advice */}
                            <PersonalizedAdvice
                                challenge={formData.sleepChallenge}
                                bedtime={calculation.bedtime}
                            />

                            {/* Share Buttons */}
                            <ShareButtons
                                bedtime={calculation.bedtime}
                                wakeTime={formData.wakeTime}
                                onShare={handleShare}
                            />

                            {/* Lead Magnet */}
                            <LeadMagnet
                                calculationData={{
                                    bedtime: calculation.bedtime,
                                    wakeTime: formData.wakeTime,
                                    sleepChallenge: formData.sleepChallenge,
                                    age: formData.age,
                                    numCycles: calculation.numCycles,
                                    actualHours: calculation.actualHours,
                                }}
                                onSuccess={handleLeadSuccess}
                            />

                            {/* Recalculate Button */}
                            <div className="text-center pt-8">
                                <button
                                    onClick={handleRecalculate}
                                    className="px-8 py-4 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white font-semibold rounded-xl transition-colors"
                                >
                                    🔄 Calculer pour quelqu'un d'autre
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Footer Note */}
                    {!showResults && (
                        <div className="mt-12 text-center">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                💡 <strong>Note</strong> : Ce calculateur est basé sur les recherches de{' '}
                                <a
                                    href="https://fr.wikipedia.org/wiki/Nathaniel_Kleitman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sleep-primary hover:underline"
                                >
                                    Nathaniel Kleitman
                                </a>{' '}
                                (1963) et les recommandations de la National Sleep Foundation.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SleepCalculator;
