'use client'

import { motion, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { stats } from '@/data/stats'
import { staggerContainer, staggerItem } from '@/lib/animations'

function AnimatedStat({ value, inView }) {
    const [displayValue, setDisplayValue] = useState('0')

    useEffect(() => {
        if (!inView) return

        const numericValue = parseInt(value.replace(/\D/g, ''))
        const suffix = value.replace(/[0-9]/g, '')

        if (numericValue) {
            const controls = animate(0, numericValue, {
                duration: 2,
                onUpdate: (v) => setDisplayValue(Math.floor(v) + suffix),
            })
            return controls.stop
        } else {
            setDisplayValue(value)
        }
    }, [value, inView])

    return <span>{displayValue}</span>
}

export default function StatsSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <motion.div 
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.id}
                    variants={staggerItem}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`text-center p-8 glass dark:bg-academic-blue-900/50 border border-slate-100 dark:border-academic-blue-800 hover:border-academic-gold-300 dark:hover:border-academic-gold-500/50 transition-all duration-500 rounded-3xl group relative overflow-hidden ${
                        index % 2 === 0 
                            ? 'bg-gradient-to-br from-white to-academic-blue-50/30 dark:from-academic-blue-900/50 dark:to-academic-blue-800/30' 
                            : 'bg-white dark:bg-academic-blue-900/50'
                    }`}
                >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-academic-gold-500/0 to-academic-gold-500/0 group-hover:from-academic-gold-500/10 group-hover:to-academic-gold-500/5 transition-all duration-500 rounded-3xl" />
                    
                    <motion.div 
                        className="text-4xl mb-3 relative z-10"
                        animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                            delay: index * 0.5
                        }}
                    >
                        {stat.icon}
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 mb-2 group-hover:text-academic-gold-600 dark:group-hover:text-academic-gold-400 transition-colors relative z-10">
                        <AnimatedStat value={stat.value} inView={inView} />
                    </div>
                    <div className="text-sm md:text-base font-semibold text-academic-blue-700 dark:text-academic-blue-300 mb-2 relative z-10">
                        {stat.label}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                        {stat.description}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
