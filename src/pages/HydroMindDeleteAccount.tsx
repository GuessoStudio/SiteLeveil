// src/pages/HydroMindDeleteAccount.tsx

import React from 'react';
import SEO from '../components/SEO';

const HydroMindDeleteAccount: React.FC = () => {
    return (
        <>
            {/* Composant SEO et non <Helmet> brut : Helmet n'est pas sérialisé
                pendant le build SSG, donc le noindex demandé ici n'atteignait
                jamais Google. */}
            <SEO
                title="Suppression de compte HydroMind"
                description="Comment supprimer votre compte HydroMind et toutes vos données personnelles. Deux méthodes disponibles : via l'application ou par email."
                path="/hydromind/delete-account/"
                type="website"
                noindex
            />

            <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <div className="text-6xl mb-4">🗑️</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            Suppression de compte HydroMind
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400">
                            HydroMind — L'Éveil Mental
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                            Dernière mise à jour : 3 juin 2026
                        </p>
                    </header>

                    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
                        {/* Introduction */}
                        <section>
                            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                Vous pouvez supprimer votre compte <strong>HydroMind</strong> à tout moment. La
                                suppression est <strong>définitive et immédiate</strong> : toutes vos données
                                personnelles sont effacées de nos serveurs. Cette page explique comment procéder.
                            </p>
                        </section>

                        {/* Méthode 1 — Via l'app */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">📱</span>
                                Méthode 1 — Via l'application
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                La suppression directement depuis l'app est la méthode la plus rapide. La suppression
                                est effective immédiatement.
                            </p>
                            <ol className="space-y-3 ml-6 list-none">
                                {[
                                    'Ouvrez l\'application HydroMind sur votre appareil',
                                    'Appuyez sur l\'icône de profil en bas à droite',
                                    'Allez dans Paramètres (icône engrenage)',
                                    'Faites défiler jusqu\'à la section "Compte"',
                                    'Appuyez sur "Supprimer mon compte"',
                                    'Confirmez la suppression en appuyant sur "Oui, supprimer définitivement"',
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center justify-center mt-0.5">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-5 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                                <p className="text-sm text-amber-800 dark:text-amber-300">
                                    <strong>Attention :</strong> Cette action est irréversible. Toutes vos données
                                    seront supprimées immédiatement et ne pourront pas être récupérées.
                                </p>
                            </div>
                        </section>

                        {/* Méthode 2 — Par email */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">📧</span>
                                Méthode 2 — Par email
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                Si vous ne pouvez pas accéder à l'application, envoyez-nous un email depuis
                                l'adresse associée à votre compte HydroMind.
                            </p>
                            <ol className="space-y-3 ml-6 list-none">
                                {[
                                    <>
                                        Envoyez un email à{' '}
                                        <a
                                            href="mailto:leveilmental@gmail.com?subject=Suppression%20de%20compte%20HydroMind"
                                            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                                        >
                                            leveilmental@gmail.com
                                        </a>
                                    </>,
                                    <>Objet : <strong>Suppression de compte HydroMind</strong></>,
                                    <>Corps du message : indiquez l'adresse email de votre compte et votre demande de suppression</>,
                                    <>Nous traiterons votre demande sous <strong>72 heures maximum</strong></>,
                                    <>Vous recevrez une confirmation par email une fois votre compte supprimé</>,
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center justify-center mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-5">
                                <a
                                    href="mailto:leveilmental@gmail.com?subject=Suppression%20de%20compte%20HydroMind"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                                >
                                    <span>✉️</span>
                                    Envoyer la demande par email
                                </a>
                            </div>
                        </section>

                        {/* Données supprimées */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">🗂️</span>
                                Données supprimées
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                Lors de la suppression de votre compte, les données suivantes sont
                                <strong> définitivement effacées</strong> de nos serveurs (Google Firebase) :
                            </p>
                            <ul className="space-y-3 ml-6">
                                {[
                                    { label: 'Identité & Compte', detail: 'Adresse email, nom d\'utilisateur' },
                                    { label: 'Données Physiologiques', detail: 'Âge, poids, sexe' },
                                    { label: 'Historique d\'hydratation', detail: 'Tous les enregistrements de consommation d\'eau' },
                                    { label: 'Brain Score & Statistiques', detail: 'Historique des scores et graphiques de progression' },
                                    { label: 'Paramètres & Préférences', detail: 'Notifications, objectifs personnalisés, heure de réveil/coucher' },
                                    { label: 'Données de session', detail: 'Tokens d\'authentification et données de connexion' },
                                ].map((item, i) => (
                                    <li key={i} className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        <strong className="text-neutral-900 dark:text-white">{item.label} :</strong>{' '}
                                        {item.detail}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                                <p className="text-sm text-emerald-800 dark:text-emerald-300">
                                    <strong>Aucune donnée résiduelle :</strong> Nous ne conservons aucune donnée après
                                    suppression du compte. Nous ne vendons ni ne partageons vos données à des tiers.
                                </p>
                            </div>
                        </section>

                        {/* Délai de suppression */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">⏱️</span>
                                Délai de suppression
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <p className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-1">
                                        Via l'application
                                    </p>
                                    <p className="text-2xl font-black text-blue-600 dark:text-blue-400">Immédiat</p>
                                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                        Suppression effective dès confirmation dans l'app
                                    </p>
                                </div>
                                <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <p className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-1">
                                        Par email
                                    </p>
                                    <p className="text-2xl font-black text-blue-600 dark:text-blue-400">72h max</p>
                                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                        Traitement de votre demande sous 72 heures
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">💬</span>
                                Besoin d'aide ?
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                Pour toute question sur la suppression de votre compte ou vos droits RGPD,
                                contactez-nous :
                            </p>
                            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <p className="text-neutral-900 dark:text-white font-semibold">
                                    📧 Email :{' '}
                                    <a
                                        href="mailto:leveilmental@gmail.com"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        leveilmental@gmail.com
                                    </a>
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                                    Délai de réponse : sous 72 heures maximum
                                </p>
                            </div>
                        </section>

                        {/* Footer */}
                        <section className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
                                Conforme RGPD (UE 2016/679) — Droit à l'effacement (Article 17)
                                <br />
                                Édité par L'Éveil Mental —{' '}
                                <a
                                    href="https://leveilmental.fr"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    leveilmental.fr
                                </a>
                                {' '}|{' '}
                                <a
                                    href="/hydromind/privacy-policy/"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Politique de confidentialité
                                </a>
                            </p>
                        </section>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a
                            href="/hydromind/privacy-policy/"
                            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center"
                        >
                            Politique de confidentialité
                        </a>
                        <a
                            href="/"
                            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-center"
                        >
                            ← Retour au site
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HydroMindDeleteAccount;
