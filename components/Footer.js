'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const phoneHref = profile.contact.phone.replace(/[^\d+]/g, '')

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/research', label: 'Research' },
        { href: '/social-impact', label: 'Social Impact' },
        { href: '/awards', label: 'Awards' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <footer className="bg-academic-blue-950 dark:bg-black text-white relative overflow-hidden pt-12 md:pt-0 transition-colors duration-300">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-academic-gold-500 via-academic-blue-900 to-academic-gold-500"></div>
            
            {/* Animated background blob */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-academic-gold-500/5 dark:bg-academic-gold-400/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>

            <div className="container-custom pt-28 md:pt-36 lg:pt-40 pb-12 relative z-10">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="lg:col-span-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/5">
                            <div className="max-w-xl">
                                <motion.h3 
                                    className="text-4xl font-serif font-bold text-academic-gold-400 mb-6"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    The North Star
                                </motion.h3>
                                <p className="text-xl text-white/60 font-light leading-relaxed">
                                    Pioneering excellence in higher education and societal transformation through strategic advisory and academic leadership.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 md:gap-4">
                                <motion.a 
                                    key="email"
                                    href={`mailto:${profile.contact.email}`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 md:px-6 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-academic-gold-500 hover:text-academic-blue-950 hover:border-academic-gold-500 transition-all"
                                >
                                    Email
                                </motion.a>
                                <motion.a 
                                    key="call"
                                    href={`tel:${phoneHref}`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 md:px-6 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-academic-gold-500 hover:text-academic-blue-950 hover:border-academic-gold-500 transition-all"
                                >
                                    Call
                                </motion.a>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/contact" className="px-5 md:px-6 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-academic-gold-500 hover:text-academic-blue-950 hover:border-academic-gold-500 transition-all inline-block">
                                        Consult
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-academic-gold-500 dark:text-academic-gold-400 mb-8">Navigation</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {quickLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest block"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-academic-gold-500 dark:text-academic-gold-400 mb-8">Connect</h4>
                        <div className="space-y-6">
                            <motion.a 
                                href={`mailto:${profile.contact.email}`} 
                                className="block group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="text-[10px] font-bold text-white/20 uppercase mb-1">Electronic Mail</div>
                                <div className="text-sm font-serif group-hover:text-academic-gold-400 transition-colors">{profile.contact.email}</div>
                            </motion.a>
                            <motion.a 
                                href={`tel:${phoneHref}`} 
                                className="block group"
                                whileHover={{ x: 5 }}
                            >
                                <div className="text-[10px] font-bold text-white/20 uppercase mb-1">Executive Line</div>
                                <div className="text-sm font-serif group-hover:text-academic-gold-400 transition-colors">{profile.contact.phone}</div>
                            </motion.a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-academic-gold-500 dark:text-academic-gold-400 mb-8">HQ</h4>
                        <div className="text-white/40 text-sm font-medium leading-loose uppercase tracking-tighter">
                            Benson Town,<br />
                            Bangalore,<br />
                            Karnataka, India.
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                        © {currentYear} The North Star Global Advisory
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                        <motion.span whileHover={{ color: 'rgba(212, 175, 55, 0.8)' }}>Excellence</motion.span>
                        <motion.span whileHover={{ color: 'rgba(212, 175, 55, 0.8)' }}>Integrity</motion.span>
                        <motion.span whileHover={{ color: 'rgba(212, 175, 55, 0.8)' }}>Innovation</motion.span>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
