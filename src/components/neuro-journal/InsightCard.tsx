
import React from 'react';
import { Lightbulb, Info, AlertCircle } from 'lucide-react';
import { Insight } from '../../lib/neuro-insights';

interface InsightCardProps {
    insight: Insight;
}

const InsightCard = ({ insight }: InsightCardProps) => {
    const getStyles = () => {
        switch (insight.type) {
            case 'positive':
                return {
                    bg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
                    icon: Lightbulb,
                    textColor: 'text-white',
                    iconColor: 'text-yellow-300'
                };
            case 'warning':
                return {
                    bg: 'bg-gradient-to-br from-orange-400 to-red-500',
                    icon: AlertCircle,
                    textColor: 'text-white',
                    iconColor: 'text-white'
                };
            default:
                return {
                    bg: 'bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700',
                    icon: Info,
                    textColor: 'text-gray-900 dark:text-gray-100',
                    iconColor: 'text-indigo-500'
                };
        }
    };

    const styles = getStyles();
    const Icon = styles.icon;

    return (
        <div className={`rounded-xl p-5 shadow-sm ${styles.bg} transition-all duration-300 transform hover:scale-[1.02] animate-fadeIn`}>
            <div className="flex gap-4">
                <div className={`p-2 bg-white/20 rounded-lg backdrop-blur-sm self-start shrink-0`}>
                    <Icon className={`w-6 h-6 ${styles.iconColor}`} />
                </div>
                <div>
                    <h4 className={`font-bold font-display text-lg mb-1 ${styles.textColor}`}>
                        {insight.title}
                    </h4>
                    <p className={`text-sm opacity-90 leading-relaxed ${styles.textColor}`}>
                        {insight.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InsightCard;
