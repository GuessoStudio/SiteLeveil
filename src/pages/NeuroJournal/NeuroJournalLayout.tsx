import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';

const NeuroJournalLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
            {/* Simple Top Bar for the 'App' feel */}
            <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
                <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/ressources" className="p-2 -ml-2 text-gray-500 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>

                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1.5 rounded-lg">
                            <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">Neuro-Journal</span>
                    </div>

                    <div className="w-10" /> {/* Spacer for centering */}
                </div>
            </header>

            <main className="pt-20 pb-24 max-w-md mx-auto px-4 min-h-screen relative">
                <Outlet />
            </main>
        </div>
    );
};

export default NeuroJournalLayout;
