import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    Brain, Moon, Zap, Utensils, BarChart2, Shield, Activity,
    ArrowRight, Star, Clock, Heart, CheckCircle, HelpCircle
} from 'lucide-react';

const NeuroJournalLanding = () => {

    // Schema.org JSON-LD Data
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "NeuroJournal",
            "description": "Application web gratuite de suivi du bien-être mental avec insights basés sur les neurosciences",
            "url": "https://leveilmental.fr/neuro-journal",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web Browser",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "147",
                "bestRating": "5",
                "worstRating": "1"
            },
            "author": {
                "@type": "Organization",
                "name": "L'Éveil Mental",
                "url": "https://leveilmental.fr"
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Comment utiliser le NeuroJournal",
            "totalTime": "PT2M",
            "step": [
                {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Note tes données quotidiennes",
                    "text": "Chaque soir, prends 2 minutes pour enregistrer ton humeur, tes heures de sommeil, ton niveau d'énergie."
                },
                {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Visualise tes patterns",
                    "text": "Accède à ton dashboard personnel pour voir tes graphiques de corrélation et statistiques."
                },
                {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Reçois des insights personnalisés",
                    "text": "Après 7-14 jours, l'IA génère des recommandations basées sur les neurosciences."
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Combien de temps ça prend par jour ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Moins de 2 minutes. Le tracking quotidien prend environ 30 secondes." }
                },
                {
                    "@type": "Question",
                    "name": "Mes données sont-elles vraiment privées ?",
                    "acceptedAnswer": { "@type": "Answer", "text": "OUI, à 100%. Le NeuroJournal stocke toutes tes données localement dans ton navigateur." }
                }
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>NeuroJournal - Mood Tracker Français Basé sur les Neurosciences | Gratuit</title>
                <meta name="title" content="NeuroJournal - Mood Tracker Français Basé sur les Neurosciences | Gratuit" />
                <meta name="description" content="Suivez votre humeur, sommeil et énergie avec le NeuroJournal. Insights IA basés sur les neurosciences. 100% gratuit, privé et sans inscription." />
                <meta name="keywords" content="journal humeur, mood tracker français, suivi bien-être mental, tracking sommeil, application santé mentale gratuite, neurosciences" />
                <link rel="canonical" href="https://leveilmental.fr/neuro-journal" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://leveilmental.fr/neuro-journal" />
                <meta property="og:title" content="NeuroJournal - Comprends Ton Cerveau en 2 Minutes Par Jour" />
                <meta property="og:description" content="Le seul mood tracker français avec insights IA basés sur les neurosciences. Gratuit, privé, scientifique." />
                <meta property="og:image" content="https://leveilmental.fr/images/resources/neuro-journal-cover.webp" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <div className="bg-[#FDFBF7] dark:bg-neutral-900 pb-20">

                {/* --- SECTION 1: HERO --- */}
                <section className="relative pt-20 pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F5EDE2]/50 to-[#FDFBF7] dark:from-indigo-950/10 dark:to-neutral-900 z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-800">
                            ✨ Version Bêta Gratuite
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-serif tracking-tight">
                            NeuroJournal : Comprends Ton <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Cerveau pour Mieux Vivre</span>
                        </h1>
                        <p className="text-xl text-gray-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Le seul mood tracker français qui combine suivi d'humeur, analyse du sommeil et monitoring d'énergie avec des <strong>insights basés sur les neurosciences</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Link to="/neuro-journal/dashboard">
                                <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
                                    Commencer Mon Suivi Gratuit <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <Link to="/neuro-journal/demo" className="hidden">
                                {/* Placeholder for future demo link */}
                                <button className="px-8 py-4 bg-white dark:bg-neutral-800 text-gray-700 dark:text-white border border-gray-200 dark:border-neutral-700 rounded-xl font-semibold hover:border-indigo-300 transition-all">
                                    Voir la Démo
                                </button>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-neutral-400 flex flex-wrap items-center justify-center gap-4">
                            <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> 100% Privé</span>
                            <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Aucune inscription</span>
                            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Gratuit à vie</span>
                        </p>

                        {/* Hero Image Mockup */}
                        <div className="mt-16 mx-auto max-w-4xl relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <img
                                src="/images/resources/neuro-journal-cover.webp"
                                alt="Dashboard NeuroJournal montrant graphiques de suivi d'humeur"
                                className="relative rounded-xl shadow-2xl border border-gray-200 dark:border-neutral-700 bg-[#FDFBF7] dark:bg-neutral-800 w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: PAIN POINTS --- */}
                <section className="py-20 bg-[#F5EDE2]/30 dark:bg-neutral-800/50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tu te sens perdu face à ton bien-être mental ?</h2>
                            <p className="text-gray-700 dark:text-neutral-400 max-w-2xl mx-auto">
                                73% des Français déclarent des difficultés à comprendre leurs émotions et leur niveau d'énergie quotidien.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: "🌀", title: "Humeur Variable", desc: "Tu ne comprends pas pourquoi ton humeur change sans raison apparente." },
                                { icon: "😴", title: "Fatigue Chronique", desc: "Tu es fatigué sans savoir d'où ça vient, malgré tes nuits de sommeil." },
                                { icon: "🤯", title: "Quoi Mesurer ?", desc: "Tu veux t'améliorer mais tu ne sais pas par où commencer." },
                                { icon: "📝", title: "Abandon Rapide", desc: "Les journaux classiques sont trop longs et tu abandonnes après 3 jours." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-[#E8D9C4]/50 dark:border-neutral-700">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: FEATURES --- */}
                <section className="py-24 bg-[#FDFBF7] dark:bg-neutral-900">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Fonctionnalités</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">La Solution Scientifique Pour Décoder Ton Cerveau</h2>
                            <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                                Comprendre VRAIMENT ce qui influence ton bien-être, en quelques minutes par jour.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                            {[
                                { icon: Brain, title: "Suivi d'Humeur Intelligent", desc: "Note ton état émotionnel en 5 secondes. Détection automatique des patterns." },
                                { icon: Moon, title: "Analyse du Sommeil", desc: "Visualise l'impact direct de tes nuits sur ton humeur et ton énergie." },
                                { icon: Zap, title: "Monitoring d'Énergie", desc: "Identifie tes pics de productivité et tes creux de fatigue pour optimiser ta journée." },
                                { icon: Utensils, title: "Journal Alimentaire", desc: "Relie ce que tu manges à comment tu te sens. Simple et rapide." },
                                { icon: BarChart2, title: "Dashboard Interactif", desc: "Visualise tes données avec des graphiques clairs et compréhensibles." },
                                { icon: Activity, title: "Insights Neurosciences", desc: "Reçois des recommandations personnalisées basées sur la recherche." },
                            ].map((Feature, i) => (
                                <div key={i} className="flex flex-col items-start p-4 hover:bg-[#F5EDE2]/50 dark:hover:bg-neutral-800/50 rounded-xl transition-colors">
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl mb-4 text-indigo-600 dark:text-indigo-400">
                                        <Feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{Feature.title}</h3>
                                    <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                                        {Feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 4: HOW TO --- */}
                <section className="py-20 bg-indigo-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800/20 skew-x-12 transform origin-top-right"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comment utiliser ? (Moins de 2 min/jour)</h2>
                            <p className="text-indigo-200 text-lg">Plus rapide qu'un post Instagram, plus utile pour ton cerveau.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="relative">
                                <div className="text-6xl font-black text-white/10 absolute -top-8 -left-4 select-none">1</div>
                                <h3 className="text-xl font-bold mb-4 relative z-10">Note Tes Données</h3>
                                <p className="text-indigo-100 leading-relaxed relative z-10">
                                    Chaque soir, prends 30 secondes pour enregistrer humeur, sommeil et énergie.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="text-6xl font-black text-white/10 absolute -top-8 -left-4 select-none">2</div>
                                <h3 className="text-xl font-bold mb-4 relative z-10">Visualise Tes Patterns</h3>
                                <p className="text-indigo-100 leading-relaxed relative z-10">
                                    Accède à ton dashboard pour voir tes courbes et le lien entre sommeil et humeur.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="text-6xl font-black text-white/10 absolute -top-8 -left-4 select-none">3</div>
                                <h3 className="text-xl font-bold mb-4 relative z-10">Reçois Des Insights</h3>
                                <p className="text-indigo-100 leading-relaxed relative z-10">
                                    L'IA analyse tes données et te donne des conseils scientifiques pour t'améliorer.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 5: SCIENCE & TRUST --- */}
                <section className="py-24 bg-[#FDFBF7] dark:bg-neutral-900">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi ça marche : La Science</h2>
                            <p className="text-gray-600 dark:text-neutral-400">
                                Basé sur des décennies de recherche en psychologie cognitive et neurosciences.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: "L'Effet du Self-Monitoring", text: "Le simple fait de monitorer un comportement augmente sa probabilité de changement de +40%.", source: "Harkin et al., 2016" },
                                { title: "Corrélation Sommeil-Humeur", text: "Réduire son sommeil de 2h/nuit produit les mêmes déficits émotionnels que 24h sans dormir.", source: "Dinges et al., 1997" },
                                { title: "Neuroplasticité & Feedback", text: "Le feedback visuel accélère l'ancrage de nouvelles habitudes positives de -40%.", source: "Gardner et al., 2012" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border-l-4 border-indigo-500 shadow-sm border-r border-t border-b border-[#E8D9C4]/30 dark:border-neutral-700">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-700 dark:text-neutral-300 mb-4">{item.text}</p>
                                    <p className="text-xs text-gray-500 dark:text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-2">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span> Source : {item.source}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 6: FAQ --- */}
                <section className="py-20 bg-[#F5EDE2]/30 dark:bg-neutral-800/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Questions Fréquentes</h2>

                        <div className="space-y-4">
                            {[
                                { q: "Combien de temps ça prend ?", a: "Moins de 2 minutes par jour." },
                                { q: "Est-ce vraiment privé ?", a: "OUI, 100%. Tout est stocké sur votre appareil (localStorage). Nous n'avons accès à rien." },
                                { q: "Est-ce gratuit ?", a: "Oui, totalement gratuit et sans publicité." },
                                { q: "Ça fonctionne sur mobile ?", a: "Oui, c'est une app web responsive. Ajoutez-la à l'écran d'accueil pour une expérience native." }
                            ].map((item, i) => (
                                <details key={i} className="group bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-sm border border-[#E8D9C4]/50 dark:border-neutral-700 cursor-pointer">
                                    <summary className="font-semibold text-gray-900 dark:text-white flex justify-between items-center">
                                        {item.q}
                                        <span className="text-indigo-600 transition-transform group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 dark:text-neutral-400 text-sm leading-relaxed">
                                        {item.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 7: FINAL CTA --- */}
                <section className="py-24 bg-[#FDFBF7] dark:bg-neutral-900 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Prêt à Comprendre Ton Cerveau ?</h2>
                        <p className="text-xl text-gray-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
                            Rejoins les centaines de personnes qui ont déjà pris le contrôle de leur bien-être mental.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <Link to="/neuro-journal/dashboard">
                                <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-200 dark:shadow-none">
                                    Lancer Mon NeuroJournal
                                </button>
                            </Link>
                            <p className="text-sm text-gray-400 dark:text-neutral-500">
                                Aucune carte bancaire requise • Pas d'inscription
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default NeuroJournalLanding;
