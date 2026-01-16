import Link from 'next/link'
import Card from './Card'
import { getFeaturedServices } from '@/data/services'

export default function ServicesGrid({ showAll = false }) {
    const services = showAll
        ? require('@/data/services').services
        : getFeaturedServices()

    const delayClasses = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600']

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Card
                    key={service.id}
                    className={`flex flex-col h-full glass-dark hover-lift fade-in-up relative overflow-hidden group ${delayClasses[index % delayClasses.length]}`}
                >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-academic-gold-500/10 to-transparent rounded-bl-3xl"></div>

                    <div className={`text-5xl mb-4 scale-in ${delayClasses[(index + 2) % delayClasses.length]}`}>
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-academic-blue-900 mb-2 relative z-10">
                        {service.title}
                    </h3>
                    <div className="inline-block mb-3">
                        <span className="text-xs px-3 py-1 bg-academic-gold-500/20 text-academic-gold-800 font-semibold rounded-full">
                            {service.category}
                        </span>
                    </div>
                    <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
                        {service.description}
                    </p>
                    <div className="pt-4 border-t border-academic-blue-200">
                        <div className="highlight-box mb-4">
                            <p className="text-xs font-semibold text-academic-blue-800 mb-1">
                                👥 Target Audience:
                            </p>
                            <p className="text-sm text-gray-700">
                                {service.targetAudience}
                            </p>
                        </div>
                        <Link
                            href="/services"
                            className="text-academic-blue-700 hover:text-academic-blue-900 font-semibold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform"
                        >
                            Learn More
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    )
}
