'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from './Card'
import { getFeaturedServices, services as allServices } from '@/data/services'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ServicesGrid({ showAll = false }) {
    const services = showAll ? allServices : getFeaturedServices()

    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {services.map((service) => (
                <motion.div key={service.id} variants={staggerItem}>
                    <Card className="flex flex-col h-full border border-slate-100 dark:border-academic-blue-800 hover:border-academic-gold-300 dark:hover:border-academic-gold-500/50 transition-all duration-500 rounded-3xl p-8 relative overflow-hidden group">
                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-academic-gold-500/10 dark:from-academic-gold-400/20 to-transparent rounded-bl-3xl"></div>

                        <motion.div 
                            className="text-5xl mb-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {service.icon}
                        </motion.div>
                        <h3 className="text-2xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 mb-3 relative z-10 group-hover:text-academic-gold-600 dark:group-hover:text-academic-gold-400 transition-colors">
                            {service.title}
                        </h3>
                        <div className="inline-block mb-3">
                            <span className="text-xs px-3 py-1 bg-academic-gold-500/20 dark:bg-academic-gold-400/20 text-academic-gold-800 dark:text-academic-gold-300 font-semibold rounded-full">
                                {service.category}
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed font-light">
                            {service.description}
                        </p>
                        <div className="pt-4 border-t border-academic-blue-200 dark:border-academic-blue-800">
                            <div className="highlight-box mb-4 dark:bg-academic-blue-800/30 dark:border-academic-gold-500/30">
                                <p className="text-xs font-semibold text-academic-blue-800 dark:text-academic-blue-200 mb-1">
                                    🤝 Who can partner?
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {service.targetAudience}
                                </p>
                            </div>
                            <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <Link
                                    href="/services"
                                    className="text-academic-blue-700 dark:text-academic-gold-400 hover:text-academic-blue-900 dark:hover:text-academic-gold-300 font-semibold text-sm inline-flex items-center"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
}
