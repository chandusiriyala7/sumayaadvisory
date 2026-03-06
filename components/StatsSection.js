import { stats } from '@/data/stats'

export default function StatsSection() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
                <div
                    key={stat.id}
                    className={`text-center p-8 glass border-slate-100 hover:border-academic-gold-300 transition-all duration-500 rounded-3xl group ${index % 2 === 0 ? 'bg-gradient-to-br from-white to-academic-blue-50/30' : 'bg-white'}`}
                >
                    <div className={`text-4xl mb-3 scale-in delay-${index + 2}00`}>
                        {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-serif font-bold text-academic-blue-900 mb-2 group-hover:text-academic-gold-600 transition-colors">
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
