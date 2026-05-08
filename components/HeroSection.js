'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useTransform, animate } from 'framer-motion'
import { profile } from '@/data/profile'
import GradientBlob from './ui/GradientBlob'

function AnimatedCounter({ value, duration = 2 }) {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        const controls = animate(0, parseInt(value), {
            duration,
            onUpdate: (v) => setDisplayValue(Math.floor(v)),
        })
        return controls.stop
    }, [value, duration])

    return <span>{displayValue}+</span>
}

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    
    // Single professional image without name tag
    const heroImage = '/images/sumaya-3.png'

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left - rect.width / 2,
            y: e.clientY - rect.top - rect.height / 2,
        })
    }

    return (
        <section className="relative bg-white dark:bg-academic-blue-950 pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center transition-colors duration-300">
            {/* Animated Background Blobs */}
            <GradientBlob className="top-0 right-0 w-96 h-96 bg-academic-gold-500/20 dark:bg-academic-gold-400/10" delay={0} />
            <GradientBlob className="bottom-0 left-0 w-96 h-96 bg-academic-blue-500/20 dark:bg-academic-blue-400/10" delay={2} />
            <GradientBlob className="top-1/2 left-1/2 w-96 h-96 bg-academic-gold-400/10 dark:bg-academic-gold-500/5" delay={4} />

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-academic-blue-50/30 dark:bg-academic-blue-900/20 -skew-x-12 transform origin-top-right transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-academic-blue-50/50 dark:from-academic-blue-900/30 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                        <motion.div 
                            className="inline-flex items-center space-x-2 px-4 py-2 glass-gold rounded-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                        >
                            <motion.span 
                                className="w-2 h-2 bg-academic-gold-500 dark:bg-academic-gold-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-academic-gold-700 dark:text-academic-gold-400 font-semibold text-sm uppercase tracking-widest">
                                {profile.tagline}
                            </span>
                        </motion.div>

                        <motion.h1 
                            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 leading-[1.2] md:leading-[1.1]"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                        >
                            The <span className="gradient-text">North Star</span> for Institutional Excellence
                        </motion.h1>

                        <motion.p 
                            className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-xl font-light leading-relaxed"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {profile.heroSubtitle}. Empowering academic leadership through decades of proven expertise and visionary strategy.
                        </motion.p>

                        <motion.div 
                            className="hero-buttons-spacing flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/contact" className="btn-primary text-base md:text-lg font-bold inline-block">
                                    Request Consultation
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/services" className="btn-secondary text-base md:text-lg font-bold inline-block my-[25px]">
                                    Explore Services
                                </Link>
                            </motion.div>
                        </motion.div>
               
                        <motion.div 
                            className="hero-stats-spacing grid grid-cols-2 gap-6 md:gap-8 border-t border-slate-200 dark:border-academic-blue-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-academic-blue-900 dark:text-academic-gold-400">
                                    <AnimatedCounter value="37" />
                                </div>
                                <div className="text-[10px] md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Years Experience</div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-academic-blue-900 dark:text-academic-gold-400">
                                    <AnimatedCounter value="27" />
                                </div>
                                <div className="text-[10px] md:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Awards Won</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Single Professional Image */}
                    <motion.div 
                        className="relative h-[600px] hidden lg:block"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Main Professional Image */}
                            <motion.div 
                                className="relative w-[450px] h-[550px] z-20"
                                style={{
                                    rotateX: useTransform(() => mousePosition.y / 30),
                                    rotateY: useTransform(() => mousePosition.x / 30),
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-academic-blue-900 dark:bg-academic-gold-500/20 rounded-[2rem] transform rotate-3 translate-x-4 translate-y-4"
                                    animate={{ rotate: [3, 5, 3] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-white dark:border-academic-blue-800 shadow-2xl">
                                    <Image
                                        src={heroImage}
                                        alt="The North Star - Academic Leadership"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 450px"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-academic-blue-900/40 dark:from-academic-blue-950/60 to-transparent"></div>
                                </div>

                                {/* Floating Info Card */}
                                <motion.div 
                                    className="absolute -bottom-8 -left-8 glass-dark p-6 rounded-2xl shadow-xl border border-white/20 dark:border-academic-gold-500/20 z-30"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <motion.div 
                                            className="w-12 h-12 bg-gradient-to-br from-academic-gold-400 to-academic-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                        >
                                            ★
                                        </motion.div>
                                        <div>
                                            <div className="text-sm font-bold text-academic-blue-950 dark:text-academic-blue-50 uppercase tracking-tighter">Premium Advisory</div>
                                            <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Excellence in Leadership</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Mobile Only Image */}
                    <motion.div 
                        className="lg:hidden relative h-[400px] w-full"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-academic-blue-800 shadow-xl">
                            <Image
                                src={heroImage}
                                alt="The North Star - Academic Leadership"
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                                quality={85}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
