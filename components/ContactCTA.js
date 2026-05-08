'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import GradientBlob from './ui/GradientBlob'

export default function ContactCTA() {
    return (
        <section className="relative bg-gradient-to-r from-academic-blue-900 via-academic-blue-800 to-academic-blue-900 dark:from-academic-blue-950 dark:via-academic-blue-900 dark:to-academic-blue-950 text-white overflow-hidden">
            {/* Animated Decorative Blobs */}
            <GradientBlob className="top-0 right-0 w-96 h-96 bg-academic-gold-500/20 dark:bg-academic-gold-400/10" delay={0} />
            <GradientBlob className="bottom-0 left-0 w-96 h-96 bg-academic-blue-500/30 dark:bg-academic-blue-400/20" delay={2} />

            <div className="container-custom py-16 md:py-20 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div 
                        className="inline-block px-4 py-2 glass-gold dark:bg-academic-gold-400/20 rounded-full mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-academic-gold-700 dark:text-academic-gold-300 font-semibold text-sm">
                            🚀 Let&apos;s Get Started
                        </span>
                    </motion.div>

                    <motion.h2 
                        className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Ready to Transform Your Institution?
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg text-academic-blue-100 dark:text-academic-blue-200 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Let&apos;s discuss how my <span className="highlight-text text-white bg-academic-gold-500/30 dark:bg-academic-gold-400/30">37+ years of expertise</span> can help your institution achieve academic excellence,
                        secure accreditation, or build sustainable community impact programs.
                    </motion.p>
                    
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/contact" className="btn-accent inline-block">
                                Request Consultation
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-10 py-4 bg-white/5 border border-white/25 text-white rounded-full font-bold shadow-lg shadow-black/10 backdrop-blur-md hover:bg-academic-gold-500 hover:border-academic-gold-400 hover:text-academic-blue-950 hover:shadow-academic-gold-500/20 transition-all mt-[25px] mb-[25px]"
                            >
                                Explore Services
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
