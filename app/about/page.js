import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import ContactCTA from '@/components/ContactCTA'
import { profile } from '@/data/profile'

export const metadata = {
    title: 'About Dr. Sumaya | Academic Leadership Expert',
    description: '37+ years of experience transforming institutions, securing ₹5 Cr+ in grants, and empowering 20,000+ families through education and community development.',
}

export default function AboutPage() {
    return (
        <><section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-6 origin-top-right"></div>
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="A Legacy of Excellence"
                    subtitle="Driven by a passion for academic leadership and transformative social impact."
                />
            </div>
        </section><section className="pb-16 md:pb-24 bg-white relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Profile Gallery/Card */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-academic-gold-500 rounded-[3rem] rotate-3 scale-[1.02] opacity-20 blur-2xl group-hover:rotate-6 transition-transform duration-1000"></div>
                                <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100">
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                                        <Image
                                            src="/images/sumaya-3.png"
                                            alt="Dr. Sumaya"
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-academic-blue-900/60 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 right-8 text-white">
                                            <p className="text-academic-gold-400 font-bold tracking-widest text-xs uppercase mb-2">Principal & Consultant</p>
                                            <h3 className="text-3xl font-serif font-bold">{profile.name}</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Credentials */}
                                <div className="absolute -bottom-6 -right-6 glass-gold p-6 rounded-2xl shadow-xl border border-white scale-in delay-300">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-academic-blue-900 leading-none mb-1">37+</div>
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Years in<br />Education</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Story Content */}
                        <div className="lg:col-span-7 space-y-16">
                            <div className="slide-in-right">
                                <h3 className="text-3xl font-serif font-bold text-academic-blue-900 mb-6 flex items-center">
                                    <span className="w-12 h-[1px] bg-academic-gold-500 mr-4"></span>
                                    Professional Journey
                                </h3>
                                <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                                    <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-academic-gold-500 first-letter:mr-3 first-letter:float-left">
                                        {profile.summary}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-academic-gold-200 transition-colors group">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-academic-gold-500 group-hover:text-white transition-colors">
                                        <span className="text-lg">🎓</span>
                                    </div>
                                    <h4 className="text-xl font-serif font-bold text-academic-blue-900 mb-4">Qualifications</h4>
                                    <ul className="space-y-4">
                                        {profile.qualifications.map((qual, i) => (
                                            <li key={i} className="text-sm text-slate-600 font-medium leading-snug flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-academic-gold-500 rounded-full mt-1.5 shrink-0"></span>
                                                {qual}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-8 bg-academic-blue-900 rounded-3xl border border-white/10 hover:border-academic-gold-500 transition-all text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <h4 className="text-xl font-serif font-bold text-white mb-6 relative z-10">Core Expertise</h4>
                                    <div className="space-y-3 relative z-10">
                                        {profile.expertise.map((area, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                                                <span className="text-academic-gold-400 text-sm">★</span>
                                                <span className="text-sm font-medium opacity-90">{area}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03]"></div>
                <div className="container-custom relative z-10 text-center">
                    <SectionTitle
                        title="Global Presence"
                        subtitle="Representing Indian academic excellence on the international stage through strategic collaborations."
                    />

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        {profile.internationalCollaborations.map((country, index) => (
                            <div
                                key={index}
                                className="px-8 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-slate-200 hover:border-academic-gold-400 hover:shadow-xl hover:shadow-academic-blue-900/5 transition-all duration-500 group"
                            >
                                <span className="text-slate-700 font-bold group-hover:text-academic-blue-900 transition-colors">{country}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section><ContactCTA />
        </>
    )
}

