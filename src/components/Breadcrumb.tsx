// src/components/Breadcrumb.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    path: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav
            aria-label="Fil d'Ariane"
            className="mb-4 sm:mb-6"
        >
            <ol className="flex flex-wrap items-center gap-2 text-sm">
                {/* Accueil avec icône */}
                <li className="flex items-center">
                    <Link
                        to="/"
                        className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
                        aria-label="Retour à l'accueil"
                    >
                        <Home className="w-4 h-4" aria-hidden="true" />
                        <span className="hidden sm:inline">Accueil</span>
                    </Link>
                </li>

                {/* Items intermédiaires et final */}
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.path} className="flex items-center gap-2">
                            <ChevronRight
                                className="w-4 h-4 text-neutral-400 flex-shrink-0"
                                aria-hidden="true"
                            />

                            {isLast ? (
                                // Dernier item : non cliquable, style actif
                                <span
                                    className="text-neutral-900 dark:text-neutral-100 font-medium truncate max-w-[200px] sm:max-w-none"
                                    aria-current="page"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                // Items intermédiaires : cliquables
                                <Link
                                    to={item.path}
                                    className="text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;