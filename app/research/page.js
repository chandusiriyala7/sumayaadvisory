import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import ContactCTA from '@/components/ContactCTA'

export const metadata = {
    title: 'Research & Publications | Dr. Sumaya',
    description: '42 research publications, 2 patents in food technology, ₹5 Cr+ grants secured, and 7 Ph.D. scholars guided to completion.',
}

export default function ResearchPage() {
    const researchHighlights = [
        { title: "Publications", value: "42", desc: "Peer-reviewed international journals", icon: "📚" },
        { title: "Patents", value: "2", desc: "Granted for Food Technology innovation", icon: "💡" },
        { title: "UGC Projects", value: "4", desc: "Major research as Principal Investigator", icon: "🔬" },
        { title: "Grants", value: "₹5 Cr+", desc: "Competitive funding secured", icon: "💰" }
    ]

    const patents = [
        {
            title: "Nutrient-Rich Seaweed Chocolate Composition",
            no: "346611",
            date: "11-Sep-2020",
            desc: "A novel functional food product combining marine algae nutrition with chocolate."
        },
        {
            title: "Palm Sugar Processing Machine",
            no: "428675",
            date: "11-Apr-2023",
            desc: "Innovative device optimizing palm sugar production for rural entrepreneurs."
        }
    ]

    return (
        <><section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-white dark:bg-academic-blue-950 transition-colors duration-300">
            <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 dark:bg-academic-blue-900/30 -skew-x-12 origin-top-right transition-colors duration-300"></div>
            <div className="container-custom relative z-10">
                <SectionTitle
                    title="Intellectual Footprint"
                    subtitle="Advancing the frontiers of Food Science and Nutrition through rigorous inquiry and innovative patent-grade research."
                />
            </div>
        </section><section className="pb-16 md:pb-24 bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {researchHighlights.map((item, idx) => (
                            <div key={idx} className="group relative">
                                <div className="absolute inset-0 bg-academic-blue-900 rounded-[2rem] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                <div className="p-6 md:p-10 border-b-2 border-slate-100 dark:border-academic-blue-800 group-hover:border-academic-gold-500 transition-all duration-700 text-center">
                                    <div className="text-3xl md:text-4xl mb-4 md:mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                                    <div className="text-3xl md:text-5xl font-serif font-bold text-academic-blue-950 dark:text-academic-blue-50 mb-2 md:mb-4 tracking-tight">{item.value}</div>
                                    <h4 className="text-[10px] md:text-sm font-bold text-academic-gold-600 dark:text-academic-gold-400 uppercase tracking-widest mb-1 md:mb-2">{item.title}</h4>
                                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section><section className="py-24 bg-slate-50 dark:bg-academic-blue-900/30 relative transition-colors duration-300">
                <div className="container-custom relative z-10">
                    <SectionTitle
                        title="Patents & Innovation"
                        subtitle="Translating lab-scale discoveries into real-world impact for society."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        {patents.map((patent, idx) => (
                            <div key={idx} className="group flex flex-col h-full">
                                <div className="flex-1 bg-white dark:bg-academic-blue-900/50 p-12 rounded-[3rem] border border-slate-200 dark:border-academic-blue-800 shadow-sm group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8">
                                        <div className="text-5xl opacity-10 group-hover:opacity-20 transition-opacity">🏅</div>
                                    </div>
                                    <div className="inline-block px-4 py-1 bg-academic-gold-500/10 text-academic-gold-700 dark:text-academic-gold-300 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                                        Patent No. {patent.no}
                                    </div>
                                    <h4 className="text-2xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 mb-6 leading-tight group-hover:text-academic-gold-600 dark:group-hover:text-academic-gold-400 transition-colors">
                                        {patent.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8">
                                        {patent.desc}
                                    </p>
                                    <div className="pt-8 border-t border-slate-100 dark:border-academic-blue-800 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Granted State</span>
                                        <span className="text-sm font-bold text-academic-blue-900 dark:text-academic-blue-50">{patent.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section><section className="py-16 md:py-24 bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50">
                                Doctoral Mentorship
                            </h3>
                            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                Curating the next generation of researchers with a focus on high-impact publications and socially relevant research methodologies.
                            </p>
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div className="p-6 md:p-8 bg-academic-blue-950 dark:bg-black rounded-[2rem] md:rounded-3xl text-white transition-colors duration-300">
                                    <div className="text-3xl md:text-4xl font-bold text-academic-gold-400 mb-1 md:mb-2">07</div>
                                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">Ph.D. Scholars Guided</div>
                                </div>
                                <div className="p-6 md:p-8 bg-slate-50 dark:bg-academic-blue-900/50 rounded-[2rem] md:rounded-3xl border border-slate-100 dark:border-academic-blue-800 transition-colors duration-300">
                                    <div className="text-3xl md:text-4xl font-bold text-academic-blue-900 dark:text-academic-blue-50 mb-1 md:mb-2">12</div>
                                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">M.Phil. Mentorships</div>
                                </div>
                            </div>
                        </div>
                        <Card className="bg-academic-blue-900/95 dark:bg-academic-blue-950/95 backdrop-blur-xl border border-white/10 dark:border-academic-gold-500/20 text-white p-8 md:p-12 relative overflow-hidden group transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-academic-gold-500/10 blur-[80px] rounded-full"></div>
                            <h4 className="text-sm font-bold text-academic-gold-400 uppercase tracking-widest mb-8">Competitive Funding</h4>
                            <div className="space-y-12">
                                <div>
                                    <div className="text-5xl font-serif font-bold mb-4">₹5 Cr+</div>
                                    <p className="text-white/70 text-sm">Total research and infrastructure grants secured from UGC, DBT, and DST.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-academic-gold-500/50 transition-colors">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-academic-gold-400">Exclusive recognition</span>
                                        <span className="text-[10px] font-bold px-2 py-1 bg-academic-gold-500 dark:bg-academic-gold-400 text-academic-blue-950 rounded">2023</span>
                                    </div>
                                    <h5 className="text-xl font-serif font-bold mb-2">DBT Star College Scheme</h5>
                                    <p className="text-xs text-white/60">The only college in Madurai region rewarded with ₹1 Crore for science excellence.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section><ContactCTA />
        </>
    )
}

