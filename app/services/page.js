import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import ContactCTA from '@/components/ContactCTA'
import { services } from '@/data/services'

export const metadata = {
    title: 'Consultancy Services | Dr. Sumaya Advisory',
    description: 'Expert consultancy in academic leadership, NAAC accreditation, research grants, women empowerment, and educational governance for institutions across India.',
}

export default function ServicesPage() {
    return (
        <><section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white dark:bg-academic-blue-950 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50 dark:bg-academic-blue-900/30 skew-x-6 origin-top-left transition-colors duration-300"></div>
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="Strategic Consultancy"
                    subtitle="Comprehensive advisory services engineered to elevate academic institutions and research organizations."
                />
            </div>
        </section><section className="pb-16 md:pb-24 bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="container-custom space-y-16 md:space-y-24">
                    {services.map((service, index) => (
                        <div key={service.id} className="relative slide-in-bottom">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                                {/* Service Header & Visual */}
                                <div className="lg:col-span-5 lg:sticky lg:top-32">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-academic-gold-500 rounded-[2.5rem] -rotate-2 scale-[1.02] opacity-10 blur-xl group-hover:rotate-0 transition-transform duration-700"></div>
                                        <Card className="aspect-square flex flex-col items-center justify-center text-center p-12 border-slate-100 dark:border-academic-blue-800 group-hover:border-academic-gold-300 transition-colors">
                                            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                                            <h3 className="text-3xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 mb-4">
                                                {service.title}
                                            </h3>
                                            <div className="inline-block px-4 py-2 bg-academic-gold-500/10 text-academic-gold-700 dark:text-academic-gold-300 text-xs font-bold rounded-full uppercase tracking-widest">
                                                {service.category}
                                            </div>
                                        </Card>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="lg:col-span-7 space-y-10">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-[1px] bg-academic-gold-500"></div>
                                            <span className="text-academic-gold-600 dark:text-academic-gold-400 font-bold text-xs uppercase tracking-widest">Service Overview</span>
                                        </div>
                                        <p className="text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.servicesIncluded.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-academic-blue-900/50 rounded-2xl border border-slate-100 dark:border-academic-blue-800 hover:border-academic-gold-200 dark:hover:border-academic-gold-500/50 transition-all group">
                                                <div className="w-8 h-8 rounded-full bg-white dark:bg-academic-blue-800 flex items-center justify-center text-academic-gold-600 dark:text-academic-gold-400 group-hover:bg-academic-gold-500 group-hover:text-white transition-colors">
                                                    <span className="text-xs">✓</span>
                                                </div>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {service.subsections && (
                                        <div className="space-y-8">
                                            {service.subsections.map((sub, subIdx) => (
                                                <div key={subIdx} className="space-y-4">
                                                    <h4 className="text-lg font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50">{sub.heading}</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                                        {sub.items.map((item, itemIdx) => (
                                                            <li key={itemIdx} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                                                <span className="text-academic-gold-500 mt-1">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 glass-gold dark:bg-academic-gold-400/10 rounded-3xl border border-academic-gold-200/50 dark:border-academic-gold-500/30 transition-colors duration-300">
                                            <h4 className="text-sm font-bold text-academic-gold-700 dark:text-academic-gold-300 uppercase tracking-widest mb-3">Institutional Impact</h4>
                                            <p className="text-slate-600 dark:text-slate-300 font-medium italic">&quot;{service.outcome}&quot;</p>
                                        </div>
                                        <div className="p-8 bg-academic-blue-900 dark:bg-academic-blue-950 rounded-3xl text-white transform hover:scale-[1.02] transition-all duration-300">
                                            <h4 className="text-sm font-bold text-academic-gold-400 uppercase tracking-widest mb-3 text-opacity-100">Who can partner?</h4>
                                            <p className="text-white/80 text-sm leading-relaxed">{service.targetAudience}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {index !== services.length - 1 && (
                                <div className="mt-24 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-academic-blue-800 to-transparent"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section><section className="py-24 bg-academic-blue-950 dark:bg-black text-white relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 right-0 w-96 h-96 bg-academic-gold-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <SectionTitle
                            title="Why Choose The North Star?"
                            subtitle="Providing a 360-degree approach to institutional growth and leadership excellence."
                            light={true}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
                            {[
                                { icon: '🎯', title: 'Proven Results', desc: '27+ awards and NAAC A Grade achievements across institutions.' },
                                { icon: '🤝', title: 'Hands-on Mentorship', desc: 'Direct guidance from experienced academic leaders.' },
                                { icon: '🌟', title: 'Visionary Strategy', desc: 'Designing futures for modern educational landscapes.' }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-4">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h4 className="text-xl font-serif font-bold text-white">{item.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section><ContactCTA />
        </>
    )
}

