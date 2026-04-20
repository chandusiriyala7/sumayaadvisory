export default function Loading() {
    return (
        <div className="min-h-screen bg-white dark:bg-academic-blue-950 flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 border-4 border-academic-gold-200 dark:border-academic-gold-900 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-academic-gold-500 dark:border-academic-gold-400 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Loading...</p>
            </div>
        </div>
    )
}
