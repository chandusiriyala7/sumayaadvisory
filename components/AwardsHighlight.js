import Link from 'next/link'
import Card from './Card'
import { getFeaturedAwards } from '@/data/awards'

export default function AwardsHighlight() {
    const featuredAwards = getFeaturedAwards().slice(0, 6)
    const delayClasses = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAwards.map((award, index) => (
                <Card
                    key={award.id}
                    className={`relative glass border-slate-100 hover:border-academic-gold-300 transition-all duration-500 rounded-3xl p-8 group ${delayClasses[index]}`}
                >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <div className="flex items-start justify-between mb-3 relative z-10">
                        <span className={`text-4xl scale-in ${delayClasses[(index + 2) % delayClasses.length]}`}>🏆</span>
                        <span className="px-3 py-1 glass-gold text-academic-gold-700 text-xs font-bold rounded-full">
                            {award.year}
                        </span>
                    </div>
                    <h4 className="text-lg font-semibold text-academic-blue-900 mb-2 relative z-10">
                        {award.title}
                    </h4>
                    <p className="text-sm text-gray-700 mb-2 font-medium">
                        {award.awardedBy}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        {award.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="inline-block px-3 py-1 bg-academic-blue-50 text-academic-blue-800 text-xs font-bold rounded-full uppercase tracking-wider">
                            {award.category} Award
                        </span>
                    </div>
                </Card>
            ))}

            <Card className="flex items-center justify-center glass border-2 border-dashed border-academic-gold-400 hover:border-solid hover:bg-academic-gold-50/30 transition-all duration-500 rounded-3xl p-8">
                <div className="text-center">
                    <div className="text-5xl mb-3 animate-pulse">✨</div>
                    <p className="text-academic-blue-900 font-bold text-xl mb-2 highlight-text">27+ Awards</p>
                    <p className="text-sm text-gray-600 mb-3">State, National & International</p>
                    <Link
                        href="/awards"
                        className="text-academic-blue-700 hover:text-academic-blue-900 font-semibold text-sm inline-flex items-center group"
                    >
                        View All Awards
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </Card>
        </div>
    )
}
