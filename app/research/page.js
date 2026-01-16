import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import ContactCTA from '@/components/ContactCTA'

export const metadata = {
    title: 'Research & Publications | Dr. Sumaya',
    description: '42 research publications, 2 patents in food technology, ₹5 Cr+ grants secured, and 7 Ph.D. scholars guided to completion.',
}

export default function ResearchPage() {
    const researchHighlights = [
        {
            title: "Research Publications",
            value: "42",
            description: "Published in prestigious national and international journals",
            icon: "📚"
        },
        {
            title: "Patents Granted",
            value: "2",
            description: "Innovative food technology patents by Indian Intellectual Property Office",
            icon: "💡"
        },
        {
            title: "UGC Projects",
            value: "4",
            description: "Major research projects as Principal Investigator",
            icon: "🔬"
        },
        {
            title: "Grants Secured",
            value: "₹5 Cr+",
            description: "Competitive funding from UGC, DBT, DST, and state agencies",
            icon: "💰"
        }
    ]

    const patents = [
        {
            title: "Nutrient-Rich Seaweed Chocolate Composition",
            patentNo: "346611",
            grantedDate: "11-Sep-2020",
            description: "A novel health-benefit food product combining the nutritional value of marine algae with chocolate, creating a functional food with enhanced nutritional properties."
        },
        {
            title: "Palm Sugar Processing Machine",
            patentNo: "428675",
            grantedDate: "11-Apr-2023",
            description: "An innovative device to efficiently produce palm sugar, improving traditional practices for rural entrepreneurs and adding value to local resources."
        }
    ]

    const researchAreas = [
        "Food Science & Nutrition",
        "Street Food Safety & Nutrition Analysis",
        "Marine Algae Therapeutic Applications",
        "Food Toxins in Coastal Diets",
        "Palm Sugar Production Techniques",
        "Community Health & Nutrition",
        "Food Technology Innovation",
        "Nutritional Biochemistry"
    ]

    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-academic-blue-50/50 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Research & Publications"
                        subtitle="Advancing knowledge in Food Science, Nutrition, and Community Health"
                    />
                </div>
            </section>

            {/* Research Highlights */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {researchHighlights.map((item, index) => (
                            <Card key={index} className="text-center">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <div className="text-3xl font-bold text-academic-blue-900 mb-2">
                                    {item.value}
                                </div>
                                <h4 className="text-lg font-semibold text-academic-blue-700 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patents */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Patents & Innovation"
                        subtitle="Applied research that benefits society and rural entrepreneurs"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {patents.map((patent, index) => (
                            <Card key={index}>
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-4xl">🏅</span>
                                    <span className="px-3 py-1 bg-academic-gold-500/10 text-academic-gold-700 text-xs font-semibold rounded-full">
                                        Patent No. {patent.patentNo}
                                    </span>
                                </div>
                                <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                    {patent.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Granted: {patent.grantedDate}
                                </p>
                                <p className="text-gray-700">
                                    {patent.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Research Areas"
                        subtitle="Specialized expertise across multiple domains"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {researchAreas.map((area, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gradient-to-br from-academic-blue-50 to-white border border-academic-blue-200 rounded-lg hover:shadow-md transition-shadow"
                            >
                                <span className="text-academic-blue-800 font-medium text-sm">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctoral Mentorship */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Doctoral Mentorship & Academic Guidance"
                        subtitle="Building the next generation of researchers and academics"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <div className="text-4xl mb-4">🎓</div>
                            <div className="text-3xl font-bold text-academic-blue-900 mb-2">7</div>
                            <h4 className="text-lg font-semibold text-academic-blue-700 mb-2">
                                Ph.D. Scholars
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Guided to successful doctoral completion as accredited research supervisor
                            </p>
                        </Card>

                        <Card>
                            <div className="text-4xl mb-4">📖</div>
                            <div className="text-3xl font-bold text-academic-blue-900 mb-2">12</div>
                            <h4 className="text-lg font-semibold text-academic-blue-700 mb-2">
                                M.Phil. Scholars
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Mentored to M.Phil. completion in Food Science and Nutrition
                            </p>
                        </Card>

                        <Card>
                            <div className="text-4xl mb-4">🔍</div>
                            <h4 className="text-lg font-semibold text-academic-blue-700 mb-2">
                                External Examiner
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Served as doctoral committee member and Ph.D. viva voce examiner at Avinashilingam University, Periyar University, and MS University
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Funding Success */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Research Funding & Grants"
                        subtitle="Proven track record in securing competitive research funding"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-gradient-to-br from-academic-blue-900 to-academic-blue-800 text-white">
                            <h4 className="text-2xl font-serif font-semibold text-white mb-4">
                                DBT Star College Scheme
                            </h4>
                            <div className="text-3xl font-bold text-academic-gold-400 mb-2">₹1 Crore</div>
                            <p className="text-academic-blue-100 mb-3">
                                Awarded in 2023 – The only college in Madurai region with this prestigious recognition
                            </p>
                            <p className="text-sm text-academic-blue-200">
                                To strengthen science education infrastructure and research capabilities
                            </p>
                        </Card>

                        <Card>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-4">
                                Major Research Projects
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-2">•</span>
                                    <span>Food toxins in coastal diets analysis</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-2">•</span>
                                    <span>Nutritional analysis of seaweed varieties</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-2">•</span>
                                    <span>Palm sugar production techniques optimization</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-2">•</span>
                                    <span>Street food enterprise trends and safety</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <ContactCTA />
        </>
    )
}
