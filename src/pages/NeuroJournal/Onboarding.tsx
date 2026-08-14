import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Moon, Battery, ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

const Onboarding = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/neuro-journal/dashboard/');
    };

    return (
        <div className="flex flex-col h-full min-h-[80vh] justify-between py-6">
            {/* Page applicative : utile aux visiteurs, sans interet pour la recherche.
                Elle est liee depuis le Footer, donc presente dans le HTML pre-rendu
                des 57 pages — Google l'avait deja indexee. */}
            <SEO title="Neuro-Journal — démarrage" path="/neuro-journal/onboarding/" noindex />
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mb-2">
                        <Brain className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Bienvenue sur votre<br />Neuro-Journal
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-neutral-400">
                        Suivez votre bien-être mental avec la science des neurosciences.
                    </p>
                </div>

                <div className="space-y-6 bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700">
                    <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Comprendre l'interaction entre :</h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                😃
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white">Votre Humeur</p>
                                <p className="text-sm text-gray-500">Fluctuations émotionnelles</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white">Votre Sommeil</p>
                                <p className="text-sm text-gray-500">Qualité et durée réparatrice</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                <Battery className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white">Votre Énergie</p>
                                <p className="text-sm text-gray-500">Niveaux physiques et mentaux</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-neutral-800/50 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                        <strong>100% Confidentiel :</strong> Vos données sont stockées uniquement sur cet appareil. Aucune donnée n'est envoyée sur un serveur.
                    </p>
                </div>
            </div>

            <div className="mt-8">
                <button
                    onClick={handleStart}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2 group"
                >
                    Commencer mon suivi
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
