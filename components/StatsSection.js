import { stats } from '@/data/stats'

export default function StatsSection() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
                <div
                    key={stat.id}
                    className={`text-center p-6 glass-dark rounded-xl border-2 border-academic-blue-100 hover:border-academic-gold-500 transition-all duration-300 hover-lift scale-in delay-${index}00`}
                >
                    <div className={`text-4xl mb-3 scale-in delay-${index + 2}00`}>
                        {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-academic-blue-900 mb-2 highlight-text">
                        {stat.value}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-academic-blue-700 mb-2">
                        {stat.label}
                    </div>
                    <div className="text-xs text-gray-600 leading-relaxed">
                        {stat.description}
                    </div>
                </div>
            ))}
        </div>
    )
}
