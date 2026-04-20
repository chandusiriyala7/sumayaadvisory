'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'

export default function SectionTitle({ title, subtitle, centered = true, light = false }) {
    return (
        <AnimatedSection animation="fadeUp" className={`mb-10 md:mb-16 ${centered ? 'text-center' : ''}`}>
            <motion.div 
                className={`inline-flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 ${centered ? 'justify-center' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className={`w-8 md:w-12 h-[1px] ${light ? 'bg-academic-gold-400/50 dark:bg-academic-gold-400/30' : 'bg-academic-gold-500/50 dark:bg-academic-gold-400/50'}`}
                    initial={{ width: 0 }}
                    animate={{ width: '2rem' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
                <span className={`font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase ${light ? 'text-academic-gold-400' : 'text-academic-gold-600 dark:text-academic-gold-400'}`}>
                    The North Star
                </span>
                <motion.div 
                    className={`w-8 md:w-12 h-[1px] ${light ? 'bg-academic-gold-400/50 dark:bg-academic-gold-400/30' : 'bg-academic-gold-500/50 dark:bg-academic-gold-400/50'}`}
                    initial={{ width: 0 }}
                    animate={{ width: '2rem' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </motion.div>
            <motion.h2 
                className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight ${light ? 'text-white' : 'text-academic-blue-900 dark:text-academic-blue-50'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p 
                    className={`text-base md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} font-light leading-relaxed ${light ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </AnimatedSection>
    )
}
