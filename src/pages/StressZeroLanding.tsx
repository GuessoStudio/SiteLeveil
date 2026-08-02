import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
// import { useDeferredAnalytics } from '../hooks/useDeferredAnalytics'; // Disabled due to mobile crash
import { Link } from 'react-router-dom';

const StressZeroLanding = () => {
    // Charger Google Analytics de manière différée -> Désactivé pour debug mobile
    // useDeferredAnalytics('G-X04TK20VY6');

    // Schema.org JSON-LD Data for Book
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Book",
            "name": "Stress Zéro, Finances héros",
            "author": {
                "@type": "Person",
                "name": "Guesso"
            },
            "publisher": {
                "@type": "Organization",
                "name": "L'Éveil"
            },
            "description": "Méthode testée 30 jours pour retrouver la sérénité financière sans culpabilisation",
            "offers": {
                "@type": "Offer",
                "price": "5.99",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://bit.ly/StressZeroLivre"
            },
            "category": "Self-Help, Personal Finance",
            "inLanguage": "fr-FR"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Stress Zéro, Finances héros - Retrouvez la Sérénité Financière en 30 Jours | L'Éveil</title>
                <meta name="description" content="67% des Français perdent le sommeil à cause de l'argent. Méthode testée 30 jours pour retrouver la sérénité financière. Sans culpabilisation." />
                <meta name="keywords" content="stress financier, anxiété argent, insomnie financière, gérer son budget, inflation 2025, bien-être financier" />
                <link rel="canonical" href="https://leveilmental.fr/stress-zero/" />

                {/* Preconnect to external domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://formspree.io" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

                {/* Open Graph */}
                <meta property="og:title" content="Stress Zéro, Finances héros - Retrouvez la Sérénité Financière" />
                <meta property="og:description" content="67% des Français perdent le sommeil à cause de l'argent. Découvrez la méthode qui rend vos nuits sereines en 30 jours." />
                <meta property="og:image" content="https://leveilmental.fr/stress-zero/og-cover.webp" />
                <meta property="og:url" content="https://leveilmental.fr/stress-zero/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Stress Zéro, Finances héros" />
                <meta name="twitter:description" content="67% des Français perdent le sommeil à cause de l'argent. Méthode testée 30 jours." />
                <meta name="twitter:image" content="https://leveilmental.fr/stress-zero/og-cover.webp" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <div className="bg-gradient-to-b from-[#1a3a4a] via-[#2C5F7C] to-[#5a9ec4] min-h-screen">

                {/* HERO SECTION */}
                <section className="pt-24 pb-32 text-white">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <img
                            src="/images/resources/Cover.webp"
                            alt="Couverture livre Stress Zéro Finances héros"
                            className="mx-auto max-w-sm rounded-2xl shadow-2xl mb-12 hover:scale-105 transition-transform duration-300"
                            width="350"
                            height="525"
                            decoding="async"
                            fetchPriority="high"
                        />
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                            67% des Français se réveillent la nuit à cause de l'argent. Et vous ?
                        </h1>
                        <p className="text-xl md:text-2xl mb-10 opacity-95">
                            Découvrez la méthode qui rend vos nuits sereines en 30 jours
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://bit.ly/StressZeroLivre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#F4A261] hover:bg-[#e89350] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            >
                                Voir le livre sur Amazon →
                            </a>
                            <a
                                href="#lead-magnet"
                                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg rounded-xl transition-all"
                            >
                                Test gratuit ↓
                            </a>
                        </div>
                    </div>
                </section>

                {/* LEAD MAGNET SECTION */}
                <section id="lead-magnet" className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="text-center mb-8">
                            <span className="inline-block px-6 py-2 bg-[#F4A261] text-white font-bold text-sm uppercase rounded-full mb-4">
                                🎁 RESSOURCES GRATUITES
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Testez avant d'acheter
                            </h2>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Test Stress-O-Mètre (évaluez votre niveau)",
                                "Planning anti-stress 7 jours",
                                "Protocole SOS 10 minutes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg">
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <form
                            action="https://formspree.io/f/xnjabyaa"
                            method="POST"
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="prenom"
                                placeholder="Votre prénom"
                                required
                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[#2C5F7C] focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                required
                                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[#2C5F7C] focus:outline-none transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-[#F4A261] hover:bg-[#e89350] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                Recevoir les ressources gratuites
                            </button>
                            <p className="text-sm text-gray-500 text-center italic">
                                Vos données restent privées. Zéro spam.
                            </p>
                        </form>
                    </div>
                </section>

                {/* EXCERPT SECTION */}
                <section className="py-20 bg-[#F8F9FA]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-12">Extrait du livre</h2>
                        <blockquote className="bg-white p-8 md:p-12 rounded-2xl border-l-8 border-[#F4A261] shadow-sm">
                            <p className="text-xl md:text-2xl font-serif italic text-gray-700 mb-4">
                                3h du matin. Encore.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Vous ouvrez les yeux dans le noir. Votre cerveau s'allume comme un ordinateur en surchauffe.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                Facture EDF. Découvert bancaire. Comment je vais payer le loyer ?
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                Si vous vous reconnaissez, ce livre a été écrit pour vous.
                            </p>
                        </blockquote>
                        <div className="text-center mt-8">
                            <a
                                href="https://bit.ly/StressZeroLivre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2C5F7C] hover:text-[#F4A261] font-semibold text-lg transition-colors"
                            >
                                Lire la suite sur Amazon →
                            </a>
                        </div>
                    </div>
                </section>

                {/* BENEFITS SECTION */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            Ce que vous allez découvrir
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { emoji: "😴", title: "DORMEZ ENFIN", desc: "Protocole SOS 10 minutes pour calmer l'anxiété nocturne" },
                                { emoji: "💡", title: "VOYEZ CLAIR", desc: "Méthode 4 Enveloppes pour comprendre votre argent" },
                                { emoji: "🎯", title: "AGISSEZ", desc: "30 jours d'actions concrètes sans culpabilisation" }
                            ].map((item, i) => (
                                <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="text-5xl mb-4">{item.emoji}</div>
                                    <h3 className="text-xl font-bold text-[#2C5F7C] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS SECTION */}
                <section className="py-20 bg-[#F8F9FA]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-3xl font-bold text-center mb-12">Ils ont retrouvé la sérénité</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { quote: "Mon stress est passé de 9/10 à 4/10 en 3 semaines. Je dors enfin.", author: "Julie, 32 ans" },
                                { quote: "J'ai économisé 180€ le premier mois juste en appliquant la Détox Express.", author: "Marc, 28 ans" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                                    <p className="text-lg italic text-gray-700 mb-6">
                                        &ldquo;{item.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C5F7C] to-[#F4A261] flex items-center justify-center text-white font-bold text-lg">
                                            {item.author[0]}
                                        </div>
                                        <p className="font-semibold text-gray-900">{item.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MAIN CTA SECTION */}
                <section className="py-24 bg-[#2C5F7C] text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt(e) à retrouver vos nuits ?</h2>
                        <div className="inline-block px-6 py-2 bg-[#F4A261] rounded-full font-bold text-sm uppercase mb-6 animate-bounce">
                            OFFRE LIMITÉE
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-3xl line-through opacity-70">19,99€</span>
                            <span className="text-6xl font-extrabold text-[#F4A261]">5,99€</span>
                        </div>
                        <p className="text-xl mb-10 font-semibold">
                            ⚠️ Promo lancement 5 jours seulement
                        </p>
                        <a
                            href="https://bit.ly/StressZeroLivre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-12 py-5 bg-white text-[#2C5F7C] hover:bg-[#F8F9FA] font-bold text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all"
                        >
                            Découvrir le livre sur Amazon →
                        </a>
                    </div>
                </section>

                {/* BONUS SECTION */}
                <section className="py-20 bg-[#F5EDE2]/50">
                    <div className="container mx-auto px-4 max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Vous avez acheté le livre ?</h2>
                        <p className="text-xl text-gray-600 mb-10">Accédez aux outils exclusifs :</p>

                        <ul className="space-y-4 mb-10 text-left max-w-xl mx-auto">
                            {[
                                { icon: "📊", text: "Templates Excel Budget Vivant" },
                                { icon: "📝", text: "Scripts négociation banque/fournisseurs" },
                                { icon: "✅", text: "Checklists imprimables" },
                                { icon: "🎯", text: "Planner 2026 objectifs SMART" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                    <span className="text-3xl">{item.icon}</span>
                                    <span className="text-lg">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://www.notion.so/STRESS-Z-RO-VOS-RESSOURCES-GRATUITES-275ba8ca10ce817f8564e82c97df0cae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-[#2C5F7C] hover:bg-[#1a3a4a] text-white font-bold text-lg rounded-xl transition-all"
                        >
                            Accéder aux bonus →
                        </a>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="py-12 bg-[#2A2A2A] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-lg font-semibold mb-4">© 2025 L'Éveil • Stress Zéro®</p>
                        <div className="flex justify-center gap-6 mb-6">
                            <a href="https://instagram.com/leveil.officiel" className="hover:text-[#F4A261] transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://tiktok.com/@leveil_mental" className="hover:text-[#F4A261] transition-colors" target="_blank" rel="noopener noreferrer">TikTok</a>
                            <a href="https://www.facebook.com/profile.php?id=61572902135677" className="hover:text-[#F4A261] transition-colors" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                        <div className="flex justify-center gap-4 text-sm opacity-70">
                            <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
                            <span>•</span>
                            <Link to="/politique-confidentialite" className="hover:underline">Politique de confidentialité</Link>
                            <span>•</span>
                            <Link to="/contact/" className="hover:underline">Contact</Link>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
};

export default StressZeroLanding;
