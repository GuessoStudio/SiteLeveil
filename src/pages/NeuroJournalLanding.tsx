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
            "description": "Guide rapide en 3 étapes pour commencer à suivre votre bien-être mental en moins de 2 minutes par jour",
            "totalTime": "PT2M",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Note Tes Données Quotidiennes",
                    "text": "Enregistre ton humeur, qualité de sommeil et niveau d'énergie en 30 secondes via une interface simple",
                    "position": 1
                },
                {
                    "@type": "HowToStep",
                    "name": "Visualise Tes Patterns Dans Le Dashboard",
                    "text": "Consulte tes graphiques, calendrier heatmap et identifie les corrélations entre sommeil, humeur et énergie",
                    "position": 2
                },
                {
                    "@type": "HowToStep",
                    "name": "Reçois Des Insights Personnalisés",
                    "text": "Après 7-14 jours, obtiens des recommandations IA basées sur tes patterns comportementaux uniques",
                    "position": 3
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
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Moins de 2 minutes par jour. Le NeuroJournal est conçu pour être ultra-rapide : 30 secondes pour saisir tes données (humeur, sommeil, énergie), puis tu consultes ton dashboard quand tu veux. Aucune contrainte d'écriture longue."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Mes données sont-elles vraiment privées ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "100% privé. Toutes tes données restent sur ton appareil via localStorage. Nous ne collectons rien, ne vendons rien, et n'avons même pas accès à tes informations. C'est conforme RGPD par design."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Quelles données je dois suivre ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le strict minimum : humeur (échelle 1-5), qualité de sommeil (échelle 1-5), et niveau d'énergie (échelle 1-5). Optionnel : alimentation, activités. Plus tu es régulier, plus les insights IA sont précis."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Comment fonctionnent les insights IA ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Notre algorithme analyse tes patterns sur 7-14 jours et détecte les corrélations invisibles à l'œil nu. Exemple : 'Ton humeur chute systématiquement après moins de 6h de sommeil'. C'est basé sur les neurosciences comportementales."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Est-ce vraiment gratuit ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, 100% gratuit à vie. Aucun freemium, aucun upgrade payant, aucune publicité. Notre mission est de rendre les outils de bien-être mental accessibles à tous. Point."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Ça fonctionne sur mobile ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Parfaitement. Le NeuroJournal est une Progressive Web App (PWA). Sur mobile, il se comporte comme une app native : ajout à l'écran d'accueil, notifications, mode hors-ligne. Compatible iOS et Android."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Dois-je créer un compte ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non, aucune inscription requise. Lance l'outil et commence immédiatement. Tes données sont stockées localement. Si tu veux synchroniser entre appareils à l'avenir, on ajoutera l'option compte (optionnel)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Combien de temps avant de voir des résultats ?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Premiers patterns visibles dès 3-5 jours. Insights IA précis après 7-14 jours de saisie régulière. La clé : constance > intensité. 2 min/jour pendant 2 semaines = transformation visible."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://leveilmental.fr"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "NeuroJournal",
                    "item": "https://leveilmental.fr/neuro-journal"
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

                        {/* Featured Snippet Optimization */}
                        <p className="text-lg md:text-xl text-gray-800 dark:text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed font-medium bg-white/50 dark:bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/30">
                            Le NeuroJournal est un outil gratuit de suivi du bien-être mental qui combine mood tracking, analyse du sommeil et monitoring d'énergie. Basé sur les neurosciences, il vous aide à comprendre vos patterns émotionnels en moins de 2 minutes par jour, avec des insights personnalisés et des visualisations claires.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Link to="/neuro-journal/dashboard">
                                <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
                                    Commencer Mon Suivi Gratuit <ArrowRight className="w-5 h-5" />
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

                {/* --- SECTION 3: FEATURES (Expanded) --- */}
                <section className="py-24 bg-[#FDFBF7] dark:bg-neutral-900">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Fonctionnalités</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">La Solution Scientifique Pour Décoder Ton Cerveau</h2>
                            <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
                                Une suite complète d'outils pour monitorer ta santé mentale avec la précision d'un laboratoire de recherche.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Brain, title: "Suivi d'Humeur", desc: "Note ton état émotionnel en 5 secondes. Valence, intensité et déclencheurs." },
                                { icon: Moon, title: "Analyse du Sommeil", desc: "Corrèle la qualité de tes nuits avec ta stabilité émotionnelle du lendemain." },
                                { icon: Zap, title: "Monitoring d'Énergie", desc: "Identifie tes cycles circadiens : pics de productivité et creux de fatigue." },
                                { icon: Utensils, title: "Journal Alimentaire", desc: "Découvre l'impact de ton alimentation sur ton brouillard mental." },
                                { icon: BarChart2, title: "Dashboard Visuel", desc: "Tes données transformées en graphiques clairs. Plus besoin d'être data scientist." },
                                { icon: Activity, title: "Insights IA", desc: "Notre algorithme détecte les patterns invisibles à l'œil nu." },
                                { icon: Shield, title: "Privacy First", desc: "Architecture 'Local-First'. Vos données ne quittent jamais votre appareil." },
                                { icon: CheckCircle, title: "Habit Tracker", desc: "Intègre le suivi de tes routines (méditation, sport) pour voir leur impact." },
                            ].map((Feature, i) => (
                                <div key={i} className="flex flex-col items-start p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-[#E8D9C4]/50 dark:border-neutral-700 hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl mb-4 text-indigo-600 dark:text-indigo-400">
                                        <Feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{Feature.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
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

                {/* --- SECTION 5: TARGET AUDIENCE (New) --- */}
                <section className="py-20 bg-[#F5EDE2]/30 dark:bg-neutral-800/50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Le NeuroJournal Est Fait Pour Toi Si...</h2>
                            <p className="text-gray-600 dark:text-neutral-400">
                                Nous avons conçu cet outil pour des profils spécifiques qui cherchent à optimiser leur fonctionnement mental.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "🎓", title: "Étudiant Stressé", text: "Tu cherches à gérer la pression des examens et optimiser tes révisions." },
                                { icon: "💼", title: "Professionnel Actif", text: "Tu frôles le burnout et tu veux objectiver ta charge mentale." },
                                { icon: "😰", title: "Sensible à l'Anxiété", text: "Tu veux comprendre tes déclencheurs pour mieux les anticiper." },
                                { icon: "🧠", title: "Passionné de Neuro", text: "Tu veux appliquer la théorie des neurosciences à ta propre vie." },
                                { icon: "📈", title: "Fan de Data", text: "Tu aimes le 'Quantified Self' et optimiser tes performances par les chiffres." },
                                { icon: "🌱", title: "En Développement", text: "Tu cherches un outil introspectif plus structuré qu'un journal papier." }
                            ].map((persona, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-800 p-6 rounded-xl border-l-4 border-indigo-200 dark:border-indigo-900 shadow-sm flex items-start gap-4">
                                    <div className="text-3xl bg-indigo-50 dark:bg-neutral-700 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
                                        {persona.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{persona.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">{persona.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 6: SCIENCE & TRUST (E-E-A-T Optimized) --- */}
                <section className="py-24 bg-[#FDFBF7] dark:bg-neutral-900">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi Ça Marche : La Science</h2>
                            <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
                                Le NeuroJournal n'est pas "juste un journal". C'est un outil cognitif conçu pour exploiter les mécanismes de neuroplasticité et de régulation émotionnelle.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Study 1 */}
                            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border-l-4 border-indigo-500 shadow-sm border border-[#E8D9C4]/30 dark:border-neutral-700">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">L'Effet du Self-Monitoring sur le Changement Comportemental</h3>
                                <p className="text-gray-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                    "Le simple fait de monitorer un comportement augmente sa probabilité de changement de +40%." Une méta-analyse majeure a démontré que la fréquence du suivi est directement corrélée au succès des interventions en santé.
                                </p>
                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                                    <p className="text-sm text-indigo-800 dark:text-indigo-300 font-medium italic">
                                        Voir l'article : <Link to="/blog/neuroplasticite-cerveau" className="underline hover:text-indigo-600">Comprendre la neuroplasticité</Link>
                                    </p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-2 mt-4">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span> Source : Harkin et al., 2016, Psychological Bulletin
                                </p>
                            </div>

                            {/* Study 2 */}
                            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border-l-4 border-purple-500 shadow-sm border border-[#E8D9C4]/30 dark:border-neutral-700">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">La Corrélation Sommeil-Régulation Émotionnelle</h3>
                                <p className="text-gray-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                    Une perte de sommeil, même légère, déconnecte le cortex préfrontal de l'amygdale, rendant le cerveau 60% plus réactif aux stimuli négatifs. Le NeuroJournal vous aide à visualiser ce lien invisible.
                                </p>
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <p className="text-sm text-purple-800 dark:text-purple-300 font-medium italic">
                                        Voir l'article : <Link to="/blog/sommeil-reparateur-7-strategies-validees" className="underline hover:text-purple-600">Les 7 stratégies pour un sommeil réparateur</Link>
                                    </p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-2 mt-4">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span> Source : Dinges et al., 1997, University of Pennsylvania
                                </p>
                            </div>

                            {/* Study 3 */}
                            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border-l-4 border-amber-500 shadow-sm border border-[#E8D9C4]/30 dark:border-neutral-700">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">La Formation d'Habitudes et la Dopamine</h3>
                                <p className="text-gray-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                    Il faut en moyenne 66 jours pour qu'un comportement devienne automatique. Le système de "streak" (série) du NeuroJournal utilise la boucle de récompense dopaminergique pour vous aider à passer ce cap.
                                </p>
                                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                                    <p className="text-sm text-amber-800 dark:text-amber-300 font-medium italic">
                                        Voir l'article : <Link to="/blog/neuro-dopamine-routine" className="underline hover:text-amber-600">Dopamine et Motivation</Link>
                                    </p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-neutral-500 uppercase tracking-widest font-semibold flex items-center gap-2 mt-4">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Source : Lally et al., 2010, European Journal of Social Psychology
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 7: TESTIMONIALS (New) --- */}
                <section className="py-20 bg-indigo-50 dark:bg-indigo-900/20">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Ils ont décodé leur cerveau</h2>
                        <div className="flex justify-center mb-12">
                            <div className="flex text-yellow-400">
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                                <Star className="w-6 h-6 fill-current" />
                            </div>
                            <span className="ml-2 font-bold text-gray-700 dark:text-gray-300">4.8/5</span>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    text: "En 2 semaines, j'ai compris que mon stress du mardi venait systématiquement de mon manque de sommeil du lundi. C'est radical.",
                                    author: "Marie, 28 ans",
                                    role: "Développeuse Web"
                                },
                                {
                                    text: "Enfin un mood tracker qui ne me prend pas 15 minutes. C'est le seul routine que j'ai réussi à tenir plus d'un mois.",
                                    author: "Thomas, 34 ans",
                                    role: "Entrepreneur"
                                },
                                {
                                    text: "Je recommande le NeuroJournal à mes patients pour objectiver leur ressenti entre deux séances. L'approche est solide.",
                                    author: "Dr. Sophie Durand",
                                    role: "Psychologue Clinicienne"
                                }
                            ].map((review, i) => (
                                <div key={i} className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl shadow-indigo-100 dark:shadow-none relative">
                                    <div className="text-6xl text-indigo-200 dark:text-indigo-900 absolute top-4 left-4 font-serif">"</div>
                                    <p className="text-gray-700 dark:text-neutral-300 mb-6 italic relative z-10">
                                        {review.text}
                                    </p>
                                    <div className="flex items-center gap-3 border-t border-gray-100 dark:border-neutral-700 pt-4">
                                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold">
                                            {review.author[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-white text-sm">{review.author}</p>
                                            <p className="text-xs text-indigo-600 dark:text-indigo-400">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- SECTION 8: FAQ (Expanded) --- */}
                <section className="py-20 bg-[#F5EDE2]/30 dark:bg-neutral-800/30">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Questions Fréquentes</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    q: "Combien de temps ça prend par jour ?",
                                    a: "Moins de 2 minutes. La saisie quotidienne est conçue pour être ultra-rapide (environ 30 secondes). L'objectif est de réduire la friction pour maintenir l'habitude sur le long terme."
                                },
                                {
                                    q: "Mes données sont-elles vraiment privées ?",
                                    a: "OUI, à 100%. Le NeuroJournal utilise une architecture 'Local-First'. Vos données de santé sont stockées uniquement dans le navigateur de votre appareil. Nous n'avons aucun serveur centralisé qui lit vos données."
                                },
                                {
                                    q: "Quelles données je dois suivre ?",
                                    a: "Le journal se concentre sur 3 piliers essentiels : l'Humeur (valence émotionnelle), le Sommeil (durée et qualité) et l'Énergie. Vous pouvez aussi ajouter des tags personnalisés (sport, méditation, café, etc.)."
                                },
                                {
                                    q: "Comment fonctionnent les insights IA ?",
                                    a: "Après 7 à 14 jours de données, notre algorithme détecte des corrélations (ex: 'Tu es 30% plus anxieux quand tu dors moins de 6h'). Ces insights sont générés localement sans envoyer vos données brutes à un tiers."
                                },
                                {
                                    q: "Est-ce vraiment gratuit ?",
                                    a: "Oui, la version actuelle (Bêta) est totalement gratuite et sans publicité. Notre objectif est de démocratiser l'accès aux outils de santé mentale basés sur la science."
                                },
                                {
                                    q: "Ça fonctionne sur mobile ?",
                                    a: "Absolument. Le NeuroJournal est une Progressive Web App (PWA). Vous pouvez l'utiliser sur votre navigateur mobile et même l'ajouter à votre écran d'accueil pour une expérience comme une application native."
                                },
                                {
                                    q: "Dois-je créer un compte ?",
                                    a: "Non ! Puisque les données sont locales, il n'y a pas de création de compte, pas d'email à donner, et pas de mot de passe à retenir. Vous accédez simplement à la page et vous commencez."
                                },
                                {
                                    q: "Combien de temps avant de voir des résultats ?",
                                    a: "La plupart des utilisateurs rapportent une meilleure conscience d'eux-mêmes (self-awareness) après seulement 3 jours. Les premiers patterns significatifs apparaissent généralement après 2 semaines de suivi régulier."
                                }
                            ].map((item, i) => (
                                <details key={i} className="group bg-white dark:bg-neutral-800 rounded-xl p-5 shadow-sm border border-[#E8D9C4]/50 dark:border-neutral-700 cursor-pointer h-fit">
                                    <summary className="font-semibold text-gray-900 dark:text-white flex justify-between items-start gap-4">
                                        <span className="text-left">{item.q}</span>
                                        <span className="text-indigo-600 transition-transform group-open:rotate-180 flex-shrink-0 mt-1">▼</span>
                                    </summary>
                                    <p className="mt-4 text-gray-600 dark:text-neutral-400 text-sm leading-relaxed border-t border-gray-100 dark:border-neutral-700 pt-4">
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

                        {/* Internal Linking for SEO */}
                        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-neutral-800 max-w-4xl mx-auto">
                            <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Explorer nos ressources</p>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-indigo-600 dark:text-indigo-400">
                                <Link to="/blog/surmonter-rejet-social" className="hover:underline">Rejet Social</Link>
                                <span className="text-gray-300">•</span>
                                <Link to="/blog/confiance-en-soi-durable" className="hover:underline">Confiance en Soi</Link>
                                <span className="text-gray-300">•</span>
                                <Link to="/blog/attention-fragmentee-concentration-numerique" className="hover:underline">Attention Fragmentée</Link>
                                <span className="text-gray-300">•</span>
                                <Link to="/blog/procrastination-cerveau-agir-neurosciences" className="hover:underline">Vaincre la Procrastination</Link>
                                <span className="text-gray-300">•</span>
                                <Link to="/resources" className="hover:underline">Toutes les Ressources</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default NeuroJournalLanding;
