export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner animé */}
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-neutral-200 dark:border-neutral-700 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-600 rounded-full animate-spin border-t-transparent"></div>
                </div>

                {/* Texte optionnel */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 animate-pulse">
                    Chargement...
                </p>
            </div>
        </div>
    )
}
