'use client'

import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import { profile } from '@/data/profile'
import { services } from '@/data/services'

export default function ContactPage() {
    const [formState, setFormState] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormState('submitting')
        setTimeout(() => setFormState('success'), 1500)
    }

    return (
        <><section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 origin-top-right"></div>
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="Global Connectivity"
                    subtitle="Initiate a dialogue for academic collaboration, strategic advisory, or social impact partnerships."
                />
            </div>
        </section><section className="pb-16 md:pb-32 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h3 className="text-xs font-black text-academic-gold-600 uppercase tracking-[0.4em] mb-8">Executive Channels</h3>
                                <div className="space-y-6 md:space-y-8">
                                    <a href="mailto:contact@thenorthstar.com" className="group block focus:outline-none">
                                        <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group-hover:bg-academic-blue-950 group-hover:border-academic-blue-900 transition-all duration-500">
                                            <div className="text-academic-gold-500 text-[10px] md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-widest">Inquiries</div>
                                            <div className="text-lg md:text-xl font-serif font-bold text-academic-blue-900 group-hover:text-white transition-colors">
                                                contact@thenorthstar.com
                                            </div>
                                        </div>
                                    </a>
                                    <a href="tel:+914567220235" className="group block focus:outline-none">
                                        <div className="p-6 md:p-8 bg-white rounded-[2rem] border border-slate-200 group-hover:bg-academic-gold-500 transition-all duration-500">
                                            <div className="text-academic-blue-900/40 text-[10px] md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-widest group-hover:text-black/50">Tele-Advisory</div>
                                            <div className="text-lg md:text-xl font-serif font-bold text-academic-blue-900 group-hover:text-academic-blue-950 transition-colors">
                                                +91 4567 220 235
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="p-12 bg-academic-blue-950 rounded-[3rem] text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8">
                                    <div className="text-4xl opacity-20 italic font-serif">NS</div>
                                </div>
                                <h4 className="text-sm font-bold text-academic-gold-400 uppercase tracking-widest mb-6">Strategic HQ</h4>
                                <div className="text-xl font-serif font-light leading-relaxed mb-8 opacity-80">
                                    The North Star Advisory,<br />
                                    Educational District,<br />
                                    Ramanathapuram - 623 504,<br />
                                    Tamil Nadu, India.
                                </div>
                                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Operating hours</span>
                                    <span className="text-sm font-bold text-academic-gold-500">09:00 — 18:00 IST</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-2xl relative">
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-academic-blue-950 mb-3 md:mb-4">Direct Message</h3>
                                <p className="text-sm md:text-base text-slate-500 mb-8 md:mb-12 font-light">Confidential and priority handling for all advisory requests.</p>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 transition-all placeholder:text-slate-300 font-medium"
                                                placeholder="Dr. John Smith"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 transition-all placeholder:text-slate-300 font-medium"
                                                placeholder="john@research.org"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject of Inquiry</label>
                                        <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 transition-all font-medium text-slate-600">
                                            <option>Academic Collaboration</option>
                                            <option>Strategic Advisory</option>
                                            <option>Social Impact Proposal</option>
                                            <option>Media Inquiry</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Detailed Message</label>
                                        <textarea
                                            required
                                            rows="5"
                                            className="w-full bg-slate-50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-academic-gold-500 transition-all placeholder:text-slate-300 font-medium resize-none"
                                            placeholder="How can we assist you?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className={`w-full py-6 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all duration-500 shadow-lg ${formState === 'success' ? 'bg-green-500 text-white' : 'bg-academic-blue-950 text-white hover:bg-academic-blue-900'
                                            }`}
                                    >
                                        {formState === 'idle' && 'Transmit Message'}
                                        {formState === 'submitting' && 'Connecting...'}
                                        {formState === 'success' && 'Message Delivered Successfully'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}
