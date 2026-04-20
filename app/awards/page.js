import ContactCTA from '@/components/ContactCTA'
import { getAllAwards } from '@/data/awards'

export const metadata = {
    title: 'Awards & Recognition | Dr. Sumaya',
    description: '27+ state, national, and international awards including Chief Minister\'s Best Woman Social Worker Award and National Award of Excellence in Higher Education.',
}

export default function AwardsPage() {
    const allAwards = getAllAwards()
    const featuredAwards = allAwards.filter((award) => award.featured).slice(0, 2)
    const categories = ['International', 'National', 'State'].map((category) => ({
        title: `${category} Recognition`,
        awards: allAwards.filter((award) => award.category === category),
    })).filter((category) => category.awards.length > 0)

    return (
        <><section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[url('/images/pattern-gold.svg')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-academic-blue-900/20 to-transparent"></div>
            <div className="container-custom relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1 bg-academic-gold-500 text-academic-blue-950 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6 md:mb-8">
                        Distinguished Recognition
                    </div>
                    <h1 className="text-4xl md:text-8xl font-serif font-bold mb-6 md:mb-8 leading-tight text-white">
                        Hall of <span className="text-academic-gold-400">Excellence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8 md:mb-12 border-l-2 border-academic-gold-500/30 pl-6 md:pl-8">
                        A legacy of contribution across science, education, and humanitarian service recognized by state, national, and international bodies.
                    </p>
                </div>
            </div>
        </section><section className="py-16 md:py-24 bg-white relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-blue-900 mb-6">
                                Featured Recognition
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-8">
                                Highlighting the most significant milestones in a career dedicated to excellence and societal progress.
                            </p>
                            <div className="w-24 h-1 bg-academic-gold-500"></div>
                        </div>
                        <div className="lg:col-span-8 space-y-8 md:space-y-12">
                            {featuredAwards.map((award) => (
                                <div key={award.id} className="group relative p-8 md:p-12 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 hover:bg-academic-blue-950 hover:text-white transition-all duration-700">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                                        <div>
                                            <div className="text-academic-gold-500 font-bold mb-1 md:mb-2 tracking-widest">{award.year}</div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-white transition-colors">{award.title}</h3>
                                            <p className="text-slate-500 group-hover:text-white/60 font-light">{award.description}</p>
                                            <p className="text-xs font-bold text-academic-gold-500 uppercase tracking-widest mt-6">{award.awardedBy}</p>
                                        </div>
                                        <div className="text-6xl grayscale group-hover:grayscale-0 transition-all opacity-20 group-hover:opacity-100">🏆</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section><section className="py-16 md:py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="space-y-16">
                        {categories.map((cat) => (
                            <div key={cat.title} className="space-y-8">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200 pb-5">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-academic-gold-600 mb-3">
                                            {cat.awards.length} {cat.awards.length === 1 ? 'honour' : 'honours'}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-academic-blue-900">
                                            {cat.title}
                                        </h3>
                                    </div>
                                    <div className="hidden sm:block w-24 h-1 bg-academic-gold-500"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {cat.awards.map((award) => (
                                        <div key={award.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-academic-gold-300 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                            <div className="flex items-start justify-between gap-6 mb-5">
                                                <div className="text-3xl opacity-30 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110">🏆</div>
                                                <span className="shrink-0 text-xs font-black text-slate-300 group-hover:text-academic-gold-500 transition-colors">{award.year}</span>
                                            </div>
                                            <h4 className="text-xl font-serif font-bold text-academic-blue-950 group-hover:text-academic-gold-600 transition-colors uppercase tracking-tight leading-snug mb-3">
                                                {award.title}
                                            </h4>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">{award.awardedBy}</p>
                                            <p className="text-sm text-slate-500 leading-relaxed flex-grow">{award.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section><section className="py-16 md:py-24 bg-white relative">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto p-10 md:p-20 bg-slate-50 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-academic-gold-500/5 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-academic-gold-500/10 transition-colors duration-1000"></div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl md:text-4xl font-serif font-bold text-academic-blue-950 mb-6 md:mb-8">
                                Accreditations & <span className="text-academic-gold-500">Memberships</span>
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                {[
                                    "UGC Accredited Supervisor",
                                    "Board of Studies Member",
                                    "NAAC Core Committee",
                                    "Nutrition Society of India",
                                    "Indian Science Congress"
                                ].map((label, i) => (
                                    <div
                                        key={i}
                                        className="px-8 py-3 bg-white text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-full border border-slate-200 shadow-sm hover:border-academic-gold-400 hover:text-academic-blue-900 transition-all duration-300"
                                    >
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactCTA />
        </>
    )
}
