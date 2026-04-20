'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from './Card'
import { getFeaturedAwards } from '@/data/awards'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function AwardsHighlight() {
    const featuredAwards = getFeaturedAwards().slice(0, 6)

    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {featuredAwards.map((award) => (
                <motion.div key={award.id} variants={staggerItem}>
                    <Card className="relative border border-slate-100 dark:border-academic-blue-800 hover:border-academic-gold-300 dark:hover:border-academic-gold-500/50 transition-all duration-500 rounded-3xl p-8 group h-full">
                        {/* Shine effect */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-academic-gold-500/10 dark:via-academic-gold-400/20 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 1 }}
                        />

                        <div className="flex items-start justify-between mb-3 relative z-10">
                            <motion.span 
                                className="text-4xl"
                                whileHover={{ scale: 1.2, rotate: 15 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                🏆
                            </motion.span>
                            <span className="px-3 py-1 glass-gold dark:bg-academic-gold-400/20 text-academic-gold-700 dark:text-academic-gold-300 text-xs font-bold rounded-full">
                                {award.year}
                            </span>
                        </div>
                        <h4 className="text-lg font-semibold text-academic-blue-900 dark:text-academic-blue-50 mb-2 relative z-10 group-hover:text-academic-gold-600 dark:group-hover:text-academic-gold-400 transition-colors">
                            {award.title}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            {award.awardedBy}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            {award.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-academic-blue-800">
                            <span className="inline-block px-3 py-1 bg-academic-blue-50 dark:bg-academic-blue-800/50 text-academic-blue-800 dark:text-academic-blue-200 text-xs font-bold rounded-full uppercase tracking-wider">
                                {award.category} Award
                            </span>
                        </div>
                    </Card>
                </motion.div>
            ))}

            <motion.div variants={staggerItem}>
                <Card className="flex items-center justify-center border-2 border-dashed border-academic-gold-400 dark:border-academic-gold-500/50 hover:border-solid hover:bg-academic-gold-50/30 dark:hover:bg-academic-gold-500/10 transition-all duration-500 rounded-3xl p-8 md:col-start-1 lg:col-start-2 h-full">
                    <div className="text-center">
                        <motion.div 
                            className="text-5xl mb-3"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            ✨
                        </motion.div>
                        <p className="text-academic-blue-900 dark:text-academic-blue-50 font-bold text-xl mb-2 highlight-text">27+ Awards</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">State, National & International</p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/awards"
                                className="text-academic-blue-700 dark:text-academic-gold-400 hover:text-academic-blue-900 dark:hover:text-academic-gold-300 font-semibold text-sm inline-flex items-center group"
                            >
                                View All Awards
                                <motion.svg 
                                    className="w-4 h-4 ml-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </Link>
                        </motion.div>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
}
