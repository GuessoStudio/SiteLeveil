// src/hooks/useGA4Sleep.ts

/**
 * Google Analytics 4 Hook for Sleep Calculator
 * Measurement ID: G-X04TK20VY6
 */

import { useEffect } from 'react';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

const GA4_MEASUREMENT_ID = 'G-X04TK20VY6';

export const useGA4Sleep = () => {

    useEffect(() => {
        // Load GA4 if not already present
        if (!window.gtag) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
                window.dataLayer!.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', GA4_MEASUREMENT_ID);

            console.log(`[GA4] Initialized: ${GA4_MEASUREMENT_ID}`);
        }
    }, []);

    const trackEvent = (eventName: string, params?: Record<string, any>) => {
        if (window.gtag) {
            window.gtag('event', eventName, params);
            console.log(`[GA4] ${eventName}`, params);
        } else {
            console.warn('[GA4] gtag not loaded yet');
        }
    };

    return {
        /**
         * Track page view - Call on component mount
         */
        trackPageView: () => {
            if (window.gtag) {
                window.gtag('event', 'page_view', {
                    page_title: 'Calculateur de Sommeil',
                    page_path: '/calculateur-sommeil/',
                });
                console.log('[GA4] page_view tracked');
            }
        },

        /**
         * Track sleep calculation completion
         */
        trackCalculation: (data: {
            bedtime: string;
            wakeTime: string;
            duration: number;
            age?: number;
            numCycles: number;
        }) => {
            trackEvent('sleep_calculation_complete', {
                bedtime: data.bedtime,
                wake_time: data.wakeTime,
                sleep_duration: data.duration,
                age_range: data.age ? getAgeRange(data.age) : 'not_specified',
                num_cycles: data.numCycles,
            });
        },

        /**
         * Track lead captured - CONVERSION EVENT
         */
        trackLead: (challenge: string) => {
            trackEvent('sleep_lead_captured', {
                sleep_challenge: challenge,
                value: 10,
                currency: 'EUR',
            });
        },

        /**
         * Track social share
         */
        trackShare: (platform: string) => {
            trackEvent('sleep_share', {
                method: platform,
            });
        },

        /**
         * Track form started
         */
        trackFormStart: () => {
            trackEvent('sleep_form_started');
        },

        /**
         * Track form abandoned
         */
        trackFormAbandoned: (step: string) => {
            trackEvent('sleep_form_abandoned', {
                form_step: step
            });
        }
    };
};

/**
 * Get age range for analytics grouping
 */
function getAgeRange(age: number): string {
    if (age < 18) return '13-17';
    if (age < 30) return '18-29';
    if (age < 50) return '30-49';
    if (age < 65) return '50-64';
    return '65+';
}
