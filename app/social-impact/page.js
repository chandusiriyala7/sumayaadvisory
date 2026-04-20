import SectionTitle from '@/components/SectionTitle'
import ContactCTA from '@/components/ContactCTA'

export const metadata = {
    title: 'Social Impact & Community Development | Dr. Sumaya',
    description: 'Leading women empowerment initiatives, 888 Self-Help Groups, 20,000+ families empowered, and disaster relief efforts across Tamil Nadu.',
}

export default function SocialImpactPage() {
    return (
        <><section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white dark:bg-academic-blue-950 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-2/5 h-full bg-slate-50 dark:bg-academic-blue-900/30 skew-x-12 origin-top-left transition-colors duration-300"></div>
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="Societal Transformation"
                    subtitle="Bridging institutional excellence with grassroots empowerment to build a more equitable future."
                />
            </div>
        </section><section className="pb-16 md:pb-24 bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Impact Cards */}
                        {[
                            { icon: '👥', val: '20k+', title: 'Families Empowered', desc: 'Through strategic livelihood initiatives.', bgClass: 'bg-academic-blue-950 dark:bg-black' },
                            { icon: '🤝', val: '888', title: 'Self-Help Groups', desc: 'Active financial clusters across Tamil Nadu.', bgClass: 'bg-academic-gold-600 dark:bg-academic-gold-500' },
                            { icon: '🏠', val: '2k', title: 'Homes Restored', desc: 'Post-disaster rehabilitation projects.', bgClass: 'bg-academic-blue-700 dark:bg-academic-blue-800' }
                        ].map((stat, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-[2.5rem]">
                                <div className={`p-10 md:p-12 h-full ${stat.bgClass} text-white transition-all duration-700 group-hover:scale-105`}>
                                    <div className="text-4xl md:text-5xl mb-4 md:mb-6 opacity-30 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 group-hover:-translate-y-1">
                                        {stat.icon}
                                    </div>
                                    <div className="text-5xl md:text-6xl font-serif font-bold mb-3 md:mb-4">{stat.val}</div>
                                    <h4 className="text-sm md:text-lg font-bold tracking-widest uppercase mb-3 md:mb-4 opacity-70">{stat.title}</h4>
                                    <p className="text-xs md:text-sm opacity-50 font-medium leading-relaxed">{stat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section><section className="py-16 md:py-24 bg-slate-900 dark:bg-black text-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-academic-blue-900/40 to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-12">
                            <SectionTitle
                                title="Seethakathi NGO Leadership"
                                subtitle="Directing large-scale women development organizations since 2002."
                                light={true}
                            />
                        </div>
                        <div className="lg:col-span-5 space-y-8">
                            <div className="p-8 md:p-10 bg-white/5 backdrop-blur-lg rounded-[2rem] md:rounded-[2.5rem] border border-white/10 hover:border-academic-gold-500/50 transition-colors">
                                <h4 className="text-2xl md:text-3xl font-serif font-bold text-academic-gold-400 mb-6 md:mb-8 italic leading-snug">
                                    &quot;When you empower a woman, you shape a civilization.&quot;
                                </h4>
                                <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                                    Our mission focuses on the intersection of financial literacy, micro-enterprise, and individual dignity to uplift coastal and rural communities.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {[
                                    { icon: '💼', title: 'Livelihood Programs', desc: 'Food processing & artisan crafts trade.' },
                                    { icon: '📚', title: 'Educational Access', desc: 'Adult literacy & girls scholarship funds.' },
                                    { icon: '🌍', title: 'Civic Advocacy', desc: 'Advocating for minority women rights.' },
                                    { icon: '⚓', title: 'Coastal Resilience', desc: 'Special support for fishing communities.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 md:p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-colors">
                                        <div className="text-2xl md:text-3xl mb-4">{item.icon}</div>
                                        <h5 className="text-lg font-serif font-bold mb-2">{item.title}</h5>
                                        <p className="text-[10px] md:text-xs text-white/40 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section><section className="py-16 md:py-24 bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50 dark:bg-academic-blue-900/50 border border-slate-100 dark:border-academic-blue-800 p-10 md:p-16 relative overflow-hidden transition-colors duration-300">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-academic-blue-900/5 dark:bg-academic-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                            <div className="md:col-span-4 text-center md:text-left">
                                <div className="text-5xl md:text-7xl mb-4 md:mb-6">🌊</div>
                                <h4 className="text-3xl md:text-4xl font-serif font-bold text-academic-blue-950 dark:text-academic-blue-50 mb-4 leading-tight">
                                    2004 Tsunami Rehabilitation
                                </h4>
                                <div className="inline-block px-4 py-1 bg-academic-blue-100 dark:bg-academic-blue-800 text-academic-blue-700 dark:text-academic-blue-200 text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors duration-300">
                                    Crisis Management
                                </div>
                            </div>
                            <div className="md:col-span-8 space-y-6">
                                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                    Leading the Ramanathapuram district relief efforts, coordinating with state agencies to restore dignity and safety to coastal families.
                                </p>
                                <div className="p-6 md:p-8 glass-gold dark:bg-academic-gold-400/10 rounded-[2rem] md:rounded-3xl border border-academic-gold-200 dark:border-academic-gold-500/30 transition-colors duration-300">
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 mb-2">2,000 Homes</div>
                                    <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-300">Complete construction and relocation project finalized in 2006, creating sustainable habitats for displaced communities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><ContactCTA />
        </>
    )
}
