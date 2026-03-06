import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import ContactCTA from '@/components/ContactCTA'
import { getAllAwards, getAwardsByCategory } from '@/data/awards'

export const metadata = {
    title: 'Awards & Recognition | Dr. Sumaya',
    description: '27+ state, national, and international awards including Chief Minister\'s Best Woman Social Worker Award and National Award of Excellence in Higher Education.',
}

export default function AwardsPage() {
    const categories = [
        {
            title: "Academic Excellence",
            awards: [
                { title: "Best Teacher Award", year: "2023", org: "Tamil Nadu State Government" },
                { title: "Distinguished Alumna", year: "2021", org: "Avinashilingam University" },
                { title: "Young Scientist Award", year: "2015", org: "National Nutrition Society" }
            ]
        },
        {
            title: "Social Impact",
            awards: [
                { title: "Vocational Excellence", year: "2022", org: "Rotary International" },
                { title: "Community Leadership", year: "2019", org: "District Administration" },
                { title: "Women Empowerment Icon", year: "2018", org: "NGO Federation" }
            ]
        }
    ]

    return (
        <><section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[url('/images/pattern-gold.png')] opacity-5"></div>
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
                            {[
                                { title: "DBT Star Status", val: "2023", desc: "Highest recognition for science education infrastructure in the region.", icon: "⭐" },
                                { title: "State Best Teacher", val: "2019", desc: "Awarded for exceptional contribution to higher education and student mentorship.", icon: "🏅" }
                            ].map((feat, idx) => (
                                <div key={idx} className="group relative p-8 md:p-12 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 hover:bg-academic-blue-950 hover:text-white transition-all duration-700">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                                        <div>
                                            <div className="text-academic-gold-500 font-bold mb-1 md:mb-2 tracking-widest">{feat.val}</div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-white transition-colors">{feat.title}</h3>
                                            <p className="text-slate-500 group-hover:text-white/60 font-light">{feat.desc}</p>
                                        </div>
                                        <div className="text-6xl grayscale group-hover:grayscale-0 transition-all opacity-20 group-hover:opacity-100">{feat.icon}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section><section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="space-y-8">
                                <h3 className="text-2xl font-serif font-bold text-academic-blue-900 inline-block border-b-2 border-academic-gold-500 pb-2">
                                    {cat.title}
                                </h3>
                                <div className="space-y-4">
                                    {cat.awards.map((award, aIdx) => (
                                        <div key={aIdx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-academic-blue-950 group-hover:text-academic-gold-600 transition-colors uppercase tracking-tight">{award.title}</h4>
                                                <span className="text-xs font-black text-slate-300 group-hover:text-academic-gold-400 transition-colors">{award.year}</span>
                                            </div>
                                            <p className="text-xs font-medium text-slate-400">{award.org}</p>
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
