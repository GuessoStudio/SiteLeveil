import { useEffect } from 'react';

/**
 * Hook pour charger Google Analytics de manière différée
 * Améliore les performances en ne chargeant GA qu'après l'interaction utilisateur
 */
export const useDeferredAnalytics = (measurementId: string) => {
    useEffect(() => {
        let loaded = false;

        const loadGoogleAnalytics = () => {
            if (loaded) return;
            loaded = true;

            // Créer le script gtag.js
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
            document.head.appendChild(script);

            // Initialiser le dataLayer
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                window.dataLayer.push(args);
            }
            (window as any).gtag = gtag;
            gtag('js', new Date());
            gtag('config', measurementId);
        };

        // Charger après 3 secondes OU à la première interaction
        const timeout = setTimeout(loadGoogleAnalytics, 3000);

        const events = ['mousedown', 'touchstart', 'scroll', 'keydown'];
        const handleInteraction = () => {
            clearTimeout(timeout);
            loadGoogleAnalytics();
            events.forEach(event => window.removeEventListener(event, handleInteraction));
        };

        events.forEach(event => window.addEventListener(event, handleInteraction, { passive: true }));

        return () => {
            clearTimeout(timeout);
            events.forEach(event => window.removeEventListener(event, handleInteraction));
        };
    }, [measurementId]);
};

// Déclarer window.dataLayer pour TypeScript
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}
