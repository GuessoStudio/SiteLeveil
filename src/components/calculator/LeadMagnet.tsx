// src/components/calculator/LeadMagnet.tsx

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { sendToFormspree } from '../../utils/emailServices';

interface LeadMagnetProps {
    calculationData: {
        bedtime: string;
        wakeTime: string;
        sleepChallenge: string;
        age?: number;
        numCycles: number;
        actualHours: number;
    };
    onSuccess?: () => void;
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({ calculationData, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Adresse email invalide');
            return;
        }

        if (!consent) {
            setError('Tu dois accepter de recevoir les emails');
            return;
        }

        setIsLoading(true);

        try {
            // Send to Formspree with calculator data
            const response = await fetch('https://formspree.io/f/xojerwda', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    bedtime: calculationData.bedtime,
                    wakeTime: calculationData.wakeTime,
                    sleepChallenge: calculationData.sleepChallenge,
                    age: calculationData.age,
                    numCycles: calculationData.numCycles,
                    actualHours: calculationData.actualHours,
                    source: 'calculateur_sommeil',
                    timestamp: new Date().toISOString(),
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                console.log('✅ Lead captured successfully');

                if (onSuccess) {
                    onSuccess();
                }
            } else {
                throw new Error('Erreur Formspree');
            }
        } catch (err) {
            console.error('Error submitting email:', err);
            setError('Erreur technique. Réessaie dans 1 minute.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center border-2 border-green-500/30 animate-fadeInUp">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-3">
                    Merci ! C'est envoyé 🎉
                </h3>
                <p className="text-lg text neutral-700 dark:text-neutral-300 mb-4">
                    Tu recevras ton guide <strong>"3 Techniques pour T'endormir &lt; 10 Minutes"</strong> dans les 2
                    prochaines minutes.
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    📧 Check tes spams si besoin
                </p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-sleep-accent to-amber-500 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🎁</div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        BONUS : 3 Techniques pour T'endormir en &lt; 10 Minutes
                    </h3>
                    <p className="text-white/90 text-sm">
                        Méthodes validées scientifiquement
                    </p>
                </div>
            </div>

            <p className="text-white/95 text-lg mb-6">
                Reçois par email notre guide gratuit avec les techniques qui fonctionnent vraiment
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ton@email.com"
                        required
                        className="w-full pl-12 pr-4 py-4 text-lg border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400"
                    />
                </div>

                <label className="flex items-start gap-3 text-white/90 text-sm cursor-pointer">
                    <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 accent-white"
                        required
                    />
                    <span>
                        J'accepte de recevoir des emails de leveilmental.fr. Désinscription en 1 clic.
                    </span>
                </label>

                {error && (
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 border-2 border-red-500 rounded-lg">
                        <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading || !consent}
                    className="w-full px-8 py-4 bg-white hover:bg-neutral-100 disabled:bg-neutral-300 disabled:cursor-not-allowed text-sleep-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:transform-none"
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-sleep-primary/30 border-t-sleep-primary rounded-full animate-spin" />
                            Envoi...
                        </span>
                    ) : (
                        '💌 ENVOIE-MOI LE GUIDE GRATUIT'
                    )}
                </button>

                <p className="text-center text-sm text-white/80">
                    🔒 Pas de spam. Désinscription en 1 clic.
                </p>
            </form>
        </div>
    );
};

export default LeadMagnet;
