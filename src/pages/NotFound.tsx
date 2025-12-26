import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, ArrowLeft, BookOpen, Layout } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#F5EDE2] dark:bg-neutral-900 transition-colors duration-300">
            <Helmet>
                <title>404 - Page introuvable | L'Éveil Mental</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl w-full text-center"
            >
                {/* Icône animée */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: "backOut" }}
                    className="relative inline-block mb-8"
                >
                    <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
                    <div className="relative bg-white dark:bg-neutral-800 p-8 rounded-full shadow-xl border border-indigo-100 dark:border-neutral-700">
                        <Brain className="w-16 h-16 md:w-20 md:h-20 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                    </div>
                </motion.div>

                {/* Message */}
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
                    Oups ! <br />
                    <span className="text-indigo-600 dark:text-indigo-400">404</span>
                </h1>

                <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-md mx-auto leading-relaxed">
                    Cette page s'est égarée dans les méandres du cerveau... 🧠
                    <br />
                    <span className="text-sm italic opacity-70">Peut-être qu'elle est en train de se reposer ?</span>
                </p>

                {/* Liens de redirection */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all w-full sm:w-auto overflow-hidden text-center justify-center"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Accueil
                    </Link>

                    <Link
                        to="/blog"
                        className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl font-bold shadow-md border border-neutral-100 dark:border-neutral-700 hover:scale-105 transition-all w-full sm:w-auto text-center justify-center"
                    >
                        <BookOpen className="w-5 h-5 text-indigo-500" />
                        Blog
                    </Link>

                    <Link
                        to="/ressources"
                        className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl font-bold shadow-md border border-neutral-100 dark:border-neutral-700 hover:scale-105 transition-all w-full sm:w-auto text-center justify-center"
                    >
                        <Layout className="w-5 h-5 text-indigo-500" />
                        Ressources
                    </Link>
                </div>

                {/* Petite touche discrète */}
                <p className="mt-16 text-xs text-neutral-400 dark:text-neutral-500">
                    L'Éveil Mental • Exploration Intérieure
                </p>
            </motion.div>
        </div>
    );
};

export default NotFound;
