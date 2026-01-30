// src/pages/HydroMindPrivacy.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const HydroMindPrivacy: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Politique de Confidentialité - HydroMind | L'Éveil</title>
                <meta
                    name="description"
                    content="Politique de confidentialité de l'application HydroMind. Découvrez comment nous protégeons vos données personnelles conformément au RGPD."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://leveilmental.fr/hydromind/privacy-policy/" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <div className="text-6xl mb-4">💧</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                            Politique de Confidentialité
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400">
                            HydroMind - L'Éveil
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                            Dernière mise à jour : 30 janvier 2026
                        </p>
                    </header>

                    {/* Content */}
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
                        {/* Introduction */}
                        <section>
                            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                Bienvenue sur <strong>HydroMind</strong>, une application développée par{' '}
                                <strong>L'Éveil</strong>. Nous prenons votre vie privée très au sérieux. Cette
                                politique décrit comment nous traitons vos données.
                            </p>
                        </section>

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">📋</span>
                                1. Données Collectées
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                Pour fonctionner et vous fournir un "Brain Score" précis, HydroMind collecte les
                                données suivantes :
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Identité & Compte :</strong>{' '}
                                    Adresse email, Nom (pour l'authentification et la personnalisation).
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Données Physiologiques :
                                    </strong>{' '}
                                    Âge, Poids, Sexe (données nécessaires au calcul scientifique de votre besoin
                                    hydrique quotidien).
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Données d'Activité :</strong>{' '}
                                    Historique de consommation d'eau, heure de réveil/coucher.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Préférences Techniques :
                                    </strong>{' '}
                                    Choix de notifications, paramètres de l'application.
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">🎯</span>
                                2. Utilisation des Données
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                Vos données sont utilisées exclusivement pour :
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Calculer votre objectif :
                                    </strong>{' '}
                                    Définir votre besoin en eau personnalisé selon les standards scientifiques.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Suivre votre progression :
                                    </strong>{' '}
                                    Générer vos statistiques et votre score d'hydratation (Brain Score).
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Vous notifier :</strong>{' '}
                                    Envoyer des rappels intelligents d'hydratation (uniquement si vous avez activé
                                    cette option).
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Améliorer l'application :
                                    </strong>{' '}
                                    Analyse anonymisée des crashs ou bugs pour la maintenance technique.
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">🔒</span>
                                3. Stockage et Sécurité
                            </h2>
                            <ul className="space-y-3 ml-6">
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Hébergement :</strong> Vos
                                    données sont stockées de manière sécurisée sur <strong>Google Firebase</strong>{' '}
                                    (Google Cloud Platform - serveurs situés dans l'Union Européenne), leader mondial
                                    de l'infrastructure mobile.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Chiffrement :</strong> Toutes
                                    les données sont chiffrées lors de leur transfert (protocole HTTPS/SSL) et
                                    lorsqu'elles sont stockées (chiffrement au repos).
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Accès :</strong> Seule
                                    l'équipe technique de L'Éveil a accès à la base de données pour la maintenance.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Durée de conservation :
                                    </strong>{' '}
                                    Vos données sont conservées tant que votre compte est actif, plus 30 jours après
                                    suppression définitive (pour permettre une éventuelle restauration de compte).
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">🚫</span>
                                4. Partage des Données
                            </h2>
                            <ul className="space-y-3 ml-6">
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Zéro Publicité :</strong> Nous
                                    ne diffusons aucune publicité ciblée.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Zéro Revente :</strong> Nous
                                    ne vendons, ne louons et ne partageons JAMAIS vos données personnelles à des tiers,
                                    des courtiers de données ou des partenaires commerciaux.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Zéro Cookie/Tracker Tiers :
                                    </strong>{' '}
                                    Nous n'utilisons aucun cookie de tracking ou outil analytique tiers qui
                                    collecterait vos données.
                                </li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">⚖️</span>
                                5. Vos Droits (RGPD & CCPA)
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                Vous disposez d'un contrôle total sur vos données :
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Droit d'accès et de rectification :
                                    </strong>{' '}
                                    Vous pouvez modifier vos données de profil (Poids, Objectif) directement dans
                                    l'application à tout moment.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Droit à l'oubli (Suppression) :
                                    </strong>{' '}
                                    Vous pouvez supprimer définitivement votre compte et toutes les données associées
                                    via le menu : <em>Profil &gt; Paramètres &gt; Supprimer mon compte</em>. Cette
                                    action est irréversible et immédiate.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Droit à la portabilité (Export des données) :
                                    </strong>{' '}
                                    Vous pouvez demander une copie complète de vos données au format JSON en contactant{' '}
                                    <a
                                        href="mailto:leveilmental@gmail.com"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        leveilmental@gmail.com
                                    </a>
                                    . Nous vous fournirons le fichier sous 30 jours maximum.
                                </li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">👶</span>
                                6. Âge Minimum et Protection des Mineurs
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                                HydroMind est destinée aux personnes âgées de <strong>13 ans et plus</strong>{' '}
                                conformément aux conditions d'utilisation de l'App Store (Apple) et du Google Play
                                Store.
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Moins de 13 ans :</strong> Si
                                    vous avez moins de 13 ans, vous ne devez pas utiliser cette application.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Parents/Tuteurs :</strong> Si
                                    vous êtes parent ou tuteur légal et découvrez que votre enfant de moins de 13 ans
                                    utilise l'application, contactez-nous immédiatement à{' '}
                                    <a
                                        href="mailto:leveilmental@gmail.com"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        leveilmental@gmail.com
                                    </a>{' '}
                                    pour que nous supprimions son compte.
                                </li>
                                <li className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">
                                        Consentement parental :
                                    </strong>{' '}
                                    Pour les utilisateurs entre 13 et 18 ans, nous recommandons l'accord d'un parent ou
                                    tuteur.
                                </li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">📧</span>
                                7. Contact
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                Pour toute question concernant cette politique, vos données, ou pour exercer vos droits
                                RGPD, vous pouvez nous contacter à :
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
                                    Délai de réponse : Sous 72 heures maximum
                                </p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                                <span className="text-3xl">📝</span>
                                8. Modifications
                            </h2>
                            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                Nous nous réservons le droit de modifier cette politique. En cas de changement majeur
                                impactant vos droits, nous vous notifierons par email ou via une notification dans
                                l'application au moins <strong>30 jours avant</strong> l'entrée en vigueur des
                                modifications. Votre utilisation continue de l'application après notification constitue
                                votre acceptation des nouvelles conditions.
                            </p>
                        </section>

                        {/* Footer */}
                        <section className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
                                Document juridiquement valide - Conforme RGPD (UE 2016/679) et CCPA (Californie)
                                <br />
                                Édité par L'Éveil -{' '}
                                <a
                                    href="https://leveilmental.fr"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    leveilmental.fr
                                </a>
                            </p>
                        </section>
                    </div>

                    {/* Back to Home */}
                    <div className="text-center mt-8">
                        <a
                            href="https://leveilmental.fr"
                            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            ← Retour au site
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HydroMindPrivacy;
