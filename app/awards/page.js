'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactCTA from '@/components/ContactCTA'
import { getAllAwards } from '@/data/awards'
import { gallery } from '@/data/gallery'
import { pageTransition } from '@/lib/animations'

export default function AwardsPage() {
    const allAwards = getAllAwards()
    const featuredAwards = allAwards.filter((award) => award.featured).slice(0, 2)
    const categories = ['International', 'National', 'State'].map((category) => ({
        title: `${category} Recognition`,
        awards: allAwards.filter((award) => award.category === category),
    })).filter((category) => category.awards.length > 0)

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-slate-950 dark:bg-black text-white transition-colors duration-300">
                <div className="absolute inset-0 bg-[url('/images/pattern-gold.svg')] opacity-5 dark:opacity-[0.03]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-academic-blue-900/20 dark:from-academic-blue-950/40 to-transparent"></div>
                <div className="container-custom relative z-10">
                    <motion.div 
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 bg-academic-gold-500 dark:bg-academic-gold-400 text-academic-blue-950 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6 md:mb-8">
                            Distinguished Recognition
                        </div>
                        <h1 className="text-4xl md:text-8xl font-serif font-bold mb-6 md:mb-8 leading-tight text-white">
                            Hall of <span className="text-academic-gold-400">Excellence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8 md:mb-12 border-l-2 border-academic-gold-500/30 dark:border-academic-gold-400/30 pl-6 md:pl-8">
                            A legacy of contribution across science, education, and humanitarian service recognized by state, national, and international bodies.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white dark:bg-academic-blue-950 relative transition-colors duration-300">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <motion.div 
                            className="lg:col-span-4 lg:sticky lg:top-32 h-fit"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 mb-6 transition-colors duration-300">
                                Featured Recognition
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 transition-colors duration-300">
                                Highlighting the most significant milestones in a career dedicated to excellence and societal progress.
                            </p>
                            <div className="w-24 h-1 bg-academic-gold-500 dark:bg-academic-gold-400"></div>
                        </motion.div>
                        <div className="lg:col-span-8 space-y-8 md:space-y-12">
                            {featuredAwards.map((award, index) => (
                                <motion.div 
                                    key={award.id} 
                                    className="group relative p-8 md:p-12 bg-slate-50 dark:bg-academic-blue-900/50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 dark:border-academic-blue-800 hover:bg-academic-blue-950 dark:hover:bg-academic-blue-900 hover:text-white transition-all duration-700"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                                        <div>
                                            <div className="text-academic-gold-500 dark:text-academic-gold-400 font-bold mb-1 md:mb-2 tracking-widest">{award.year}</div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-white dark:text-academic-blue-50 transition-colors">{award.title}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 group-hover:text-white/60 font-light transition-colors">{award.description}</p>
                                            <p className="text-xs font-bold text-academic-gold-500 dark:text-academic-gold-400 uppercase tracking-widest mt-6">{award.awardedBy}</p>
                                        </div>
                                        <div className="text-6xl grayscale group-hover:grayscale-0 transition-all opacity-20 group-hover:opacity-100">🏆</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-slate-50 dark:bg-academic-blue-900/30 transition-colors duration-300">
                <div className="container-custom">
                    <div className="space-y-16">
                        {categories.map((cat, catIndex) => (
                            <motion.div 
                                key={cat.title} 
                                className="space-y-8"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200 dark:border-academic-blue-800 pb-5">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-academic-gold-600 dark:text-academic-gold-400 mb-3">
                                            {cat.awards.length} {cat.awards.length === 1 ? 'honour' : 'honours'}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 transition-colors duration-300">
                                            {cat.title}
                                        </h3>
                                    </div>
                                    <div className="hidden sm:block w-24 h-1 bg-academic-gold-500 dark:bg-academic-gold-400"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {cat.awards.map((award, awardIndex) => (
                                        <motion.div 
                                            key={award.id} 
                                            className="bg-white dark:bg-academic-blue-900/50 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-academic-blue-800 hover:border-academic-gold-300 dark:hover:border-academic-gold-500/50 hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: awardIndex * 0.05 }}
                                            whileHover={{ y: -8 }}
                                        >
                                            <div className="flex items-start justify-between gap-6 mb-5">
                                                <div className="text-3xl opacity-30 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110">🏆</div>
                                                <span className="shrink-0 text-xs font-black text-slate-300 dark:text-slate-600 group-hover:text-academic-gold-500 dark:group-hover:text-academic-gold-400 transition-colors">{award.year}</span>
                                            </div>
                                            <h4 className="text-xl font-serif font-bold text-academic-blue-950 dark:text-academic-blue-50 group-hover:text-academic-gold-600 dark:group-hover:text-academic-gold-400 transition-colors uppercase tracking-tight leading-snug mb-3">
                                                {award.title}
                                            </h4>
                                            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-5">{award.awardedBy}</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow transition-colors duration-300">{award.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white dark:bg-academic-blue-950 relative transition-colors duration-300">
                <div className="container-custom">
                    <motion.div 
                        className="max-w-4xl mx-auto p-10 md:p-20 bg-slate-50 dark:bg-academic-blue-900/50 rounded-[3rem] md:rounded-[4rem] border border-slate-100 dark:border-academic-blue-800 shadow-xl relative overflow-hidden group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-academic-gold-500/5 dark:bg-academic-gold-400/10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-academic-gold-500/10 dark:group-hover:bg-academic-gold-400/20 transition-colors duration-1000"></div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl md:text-4xl font-serif font-bold text-academic-blue-950 dark:text-academic-blue-50 mb-6 md:mb-8 transition-colors duration-300">
                                Accreditations & <span className="text-academic-gold-500 dark:text-academic-gold-400">Memberships</span>
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                {[
                                    "UGC Accredited Supervisor",
                                    "Board of Studies Member",
                                    "NAAC Core Committee",
                                    "Nutrition Society of India",
                                    "Indian Science Congress"
                                ].map((label, i) => (
                                    <motion.div
                                        key={i}
                                        className="px-8 py-3 bg-white dark:bg-academic-blue-900 text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-widest rounded-full border border-slate-200 dark:border-academic-blue-800 shadow-sm hover:border-academic-gold-400 dark:hover:border-academic-gold-500 hover:text-academic-blue-900 dark:hover:text-academic-gold-400 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {label}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-academic-blue-900/30 transition-colors duration-300">
                <div className="container-custom">
                    <motion.div
                        className="max-w-3xl mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-academic-gold-600 dark:text-academic-gold-400 mb-3">
                            In Frame
                        </p>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 transition-colors duration-300">
                            The Legacy Lens
                        </h2>
                    </motion.div>
                    <div className="columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                        {gallery.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-academic-blue-800 group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-academic-blue-950/0 group-hover:bg-academic-blue-950/10 transition-colors duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
        </motion.div>
    )
}
