'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle'
import { profile } from '@/data/profile'
import { pageTransition } from '@/lib/animations'

export default function ContactPage() {
    const [formState, setFormState] = useState('idle')
    const phoneHref = profile.contact.phone.replace(/[^\d+]/g, '')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormState('submitting')
        
        const form = e.currentTarget
        const formData = new FormData(form)
        
        // Simulate form submission (you can replace this with actual API call)
        try {
            // For now, we'll still use mailto as fallback, but with better UX
            const subject = formData.get('subject')
            const body = [
                `Name: ${formData.get('name')}`,
                `Email: ${formData.get('email')}`,
                `Inquiry: ${subject}`,
                '',
                formData.get('message'),
            ].join('\n')

            window.location.href = `mailto:${profile.contact.email}?subject=${encodeURIComponent(`The North Star inquiry: ${subject}`)}&body=${encodeURIComponent(body)}`
            
            setTimeout(() => {
                setFormState('success')
                form.reset()
                setTimeout(() => setFormState('idle'), 3000)
            }, 500)
        } catch {
            setFormState('error')
            setTimeout(() => setFormState('idle'), 3000)
        }
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-academic-blue-900/30 -skew-x-12 origin-top-right transition-colors duration-300"></div>
                <div className="container-custom relative z-10">
                    <SectionTitle
                        title="Global Connectivity"
                        subtitle="Initiate a dialogue for academic collaboration, strategic advisory, or social impact partnerships."
                    />
                </div>
            </section>

            <section className="pb-16 md:pb-32 bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <motion.div 
                            className="lg:col-span-5 space-y-12"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>
                                <h3 className="text-xs font-black text-academic-gold-600 dark:text-academic-gold-400 uppercase tracking-[0.4em] mb-8">Executive Channels</h3>
                                <div className="space-y-6 md:space-y-8">
                                    <motion.a 
                                        href={`mailto:${profile.contact.email}`} 
                                        className="group block focus:outline-none"
                                        whileHover={{ scale: 1.02, y: -4 }}
                                    >
                                        <div className="p-6 md:p-8 bg-slate-50 dark:bg-academic-blue-900/50 rounded-[2rem] border border-slate-100 dark:border-academic-blue-800 group-hover:bg-academic-blue-950 dark:group-hover:bg-academic-blue-900 group-hover:border-academic-blue-900 dark:group-hover:border-academic-gold-500/50 transition-all duration-500">
                                            <div className="text-academic-gold-500 dark:text-academic-gold-400 text-[10px] md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-widest">Inquiries</div>
                                            <div className="text-lg md:text-xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 group-hover:text-white transition-colors">
                                                {profile.contact.email}
                                            </div>
                                        </div>
                                    </motion.a>
                                    <motion.a 
                                        href={`tel:${phoneHref}`} 
                                        className="group block focus:outline-none"
                                        whileHover={{ scale: 1.02, y: -4 }}
                                    >
                                        <div className="p-6 md:p-8 bg-white dark:bg-academic-blue-900/30 rounded-[2rem] border border-slate-200 dark:border-academic-blue-800 group-hover:bg-academic-gold-500 dark:group-hover:bg-academic-gold-400 transition-all duration-500">
                                            <div className="text-academic-blue-900/40 dark:text-academic-gold-400/60 text-[10px] md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-widest group-hover:text-black/50 dark:group-hover:text-black/70">Tele-Advisory</div>
                                            <div className="text-lg md:text-xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 group-hover:text-academic-blue-950 transition-colors">
                                                {profile.contact.phone}
                                            </div>
                                        </div>
                                    </motion.a>
                                </div>
                            </div>

                            <motion.div 
                                className="p-12 bg-academic-blue-950 dark:bg-black rounded-[3rem] text-white relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <div className="text-4xl opacity-20 italic font-serif">NS</div>
                                </div>
                                <h4 className="text-sm font-bold text-academic-gold-400 uppercase tracking-widest mb-6">Strategic HQ</h4>
                                <div className="text-xl font-serif font-light leading-relaxed mb-8 opacity-80">
                                    The North Star Advisory,<br />
                                    {profile.contact.address.line1},<br />
                                    {profile.contact.address.line2},<br />
                                    {profile.contact.address.line3}
                                </div>
                                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Operating hours</span>
                                    <span className="text-sm font-bold text-academic-gold-500 dark:text-academic-gold-400">09:00 — 18:00 IST</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="lg:col-span-7"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white dark:bg-academic-blue-900/50 p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-slate-100 dark:border-academic-blue-800 shadow-2xl relative transition-colors duration-300">
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-academic-blue-950 dark:text-academic-blue-50 mb-3 md:mb-4 transition-colors duration-300">Direct Message</h3>
                                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 md:mb-12 font-light transition-colors duration-300">Confidential and priority handling for all advisory requests.</p>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full bg-slate-50 dark:bg-academic-blue-900 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 dark:focus:ring-academic-gold-400 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium text-slate-900 dark:text-slate-100"
                                                placeholder="Dr. John Smith"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full bg-slate-50 dark:bg-academic-blue-900 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 dark:focus:ring-academic-gold-400 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium text-slate-900 dark:text-slate-100"
                                                placeholder="john@research.org"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Subject of Inquiry</label>
                                        <select name="subject" className="w-full bg-slate-50 dark:bg-academic-blue-900 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 dark:focus:ring-academic-gold-400 transition-all font-medium text-slate-600 dark:text-slate-300">
                                            <option>Academic Collaboration</option>
                                            <option>Strategic Advisory</option>
                                            <option>Social Impact Proposal</option>
                                            <option>Media Inquiry</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Detailed Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows="5"
                                            className="w-full bg-slate-50 dark:bg-academic-blue-900 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 dark:focus:ring-academic-gold-400 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium resize-none text-slate-900 dark:text-slate-100"
                                            placeholder="How can we assist you?"
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className={`w-full py-6 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all duration-500 shadow-lg ${
                                            formState === 'success' 
                                                ? 'bg-green-500 text-white' 
                                                : formState === 'error'
                                                ? 'bg-red-500 text-white'
                                                : formState === 'submitting'
                                                ? 'bg-slate-400 text-white cursor-not-allowed'
                                                : 'bg-academic-blue-950 dark:bg-academic-gold-500 text-white dark:text-academic-blue-950 hover:bg-academic-blue-900 dark:hover:bg-academic-gold-400'
                                        }`}
                                        whileHover={formState === 'idle' ? { scale: 1.02, y: -2 } : {}}
                                        whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                                    >
                                        {formState === 'idle' && 'Submit Inquiry'}
                                        {formState === 'submitting' && 'Submitting...'}
                                        {formState === 'success' && '✓ Message Sent Successfully'}
                                        {formState === 'error' && '✗ Please Try Again'}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
