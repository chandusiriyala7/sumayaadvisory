import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import ContactCTA from '@/components/ContactCTA'

export const metadata = {
    title: 'Social Impact & Community Development | Dr. Sumaya',
    description: 'Leading women empowerment initiatives, 888 Self-Help Groups, 20,000+ families empowered, and disaster relief efforts across Tamil Nadu.',
}

export default function SocialImpactPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-academic-blue-50/50 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Social Impact & Community Development"
                        subtitle="Transforming lives through education, empowerment, and sustainable development"
                    />
                </div>
            </section>

            {/* Impact Stats */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center bg-gradient-to-br from-academic-blue-900 to-academic-blue-800 text-white">
                            <div className="text-4xl mb-3">👥</div>
                            <div className="text-4xl font-bold text-white mb-2">20,000+</div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                                Families Empowered
                            </h4>
                            <p className="text-academic-blue-100 text-sm">
                                Through education, self-help groups, and livelihood initiatives
                            </p>
                        </Card>

                        <Card className="text-center bg-gradient-to-br from-academic-gold-600 to-academic-gold-500 text-white">
                            <div className="text-4xl mb-3">🤝</div>
                            <div className="text-4xl font-bold text-white mb-2">888</div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                                Self-Help Groups
                            </h4>
                            <p className="text-white/90 text-sm">
                                Comprising 18,850 women across rural coastal communities
                            </p>
                        </Card>

                        <Card className="text-center bg-gradient-to-br from-academic-blue-700 to-academic-blue-600 text-white">
                            <div className="text-4xl mb-3">🏠</div>
                            <div className="text-4xl font-bold text-white mb-2">2,000</div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                                Homes Rebuilt
                            </h4>
                            <p className="text-academic-blue-100 text-sm">
                                Post-2004 tsunami disaster relief and rehabilitation
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Seethakathi NGO */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Seethakathi NGO Leadership"
                        subtitle="Director, Women's Development Organization (Since 2002)"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <Card>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-4">
                                Mission & Vision
                            </h4>
                            <p className="text-gray-700 mb-4">
                                Leading a non-governmental organization focused on empowering underprivileged
                                women through education and entrepreneurship across rural coastal communities
                                of Tamil Nadu.
                            </p>
                            <p className="text-gray-600 italic">
                                "When you educate a man, you change a life; when you educate a woman,
                                you shape a community."
                            </p>
                        </Card>

                        <Card className="bg-academic-blue-50">
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-4">
                                Key Achievements
                            </h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-3 mt-1">✓</span>
                                    <span>Established 888 women Self-Help Groups (18,850 members)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-3 mt-1">✓</span>
                                    <span>Skill development workshops and micro-enterprise training</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-3 mt-1">✓</span>
                                    <span>Income-generating initiatives (food processing, artisan crafts)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-academic-gold-500 mr-3 mt-1">✓</span>
                                    <span>Financial independence for thousands of rural women</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-white">
                            <div className="text-3xl mb-3">💼</div>
                            <h5 className="font-semibold text-academic-blue-900 mb-2">
                                Livelihood Programs
                            </h5>
                            <p className="text-sm text-gray-700">
                                Food processing, artisan crafts, small-scale trade, and entrepreneurship training
                            </p>
                        </Card>

                        <Card className="bg-white">
                            <div className="text-3xl mb-3">📚</div>
                            <h5 className="font-semibold text-academic-blue-900 mb-2">
                                Education Initiatives
                            </h5>
                            <p className="text-sm text-gray-700">
                                Adult literacy, girls' education support, and skill development programs
                            </p>
                        </Card>

                        <Card className="bg-white">
                            <div className="text-3xl mb-3">💪</div>
                            <h5 className="font-semibold text-academic-blue-900 mb-2">
                                Empowerment Focus
                            </h5>
                            <p className="text-sm text-gray-700">
                                Building self-confidence, financial independence, and community leadership
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Disaster Relief */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Disaster Relief & Rehabilitation"
                        subtitle="Leading large-scale community recovery efforts"
                    />

                    <Card className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                                <div className="text-5xl mb-4">🌊</div>
                                <h4 className="text-2xl font-serif font-semibold text-academic-blue-900 mb-2">
                                    2004 Tsunami Relief
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Ramanathapuram District, Tamil Nadu
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <p className="text-gray-700 mb-4">
                                    Coordinated large-scale disaster relief efforts in the aftermath of the
                                    2004 Indian Ocean tsunami, collaborating with the Emergency Tsunami Relief
                                    Project (Government of Tamil Nadu) and local authorities to rebuild affected
                                    coastal communities.
                                </p>

                                <div className="bg-academic-blue-50 p-4 rounded-lg mb-4">
                                    <h5 className="font-semibold text-academic-blue-900 mb-2">
                                        Major Achievement:
                                    </h5>
                                    <p className="text-gray-700">
                                        Facilitated construction of <strong>2,000 homes</strong> (2006) for displaced
                                        families, providing safe housing and restoring hope for coastal communities.
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600">
                                    This massive rehabilitation project showcased exceptional ability to mobilize
                                    resources and drive community projects during crises, making lasting impact
                                    on thousands of lives.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Leadership Roles */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Women's Welfare Leadership"
                        subtitle="Leading multiple organizations for women's rights and empowerment"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-white">
                            <h4 className="text-lg font-serif font-semibold text-academic-blue-900 mb-3">
                                Honorary Secretary
                            </h4>
                            <p className="text-sm text-gray-700 mb-2">
                                Ramanathapuram District Muslim Women Aid Society
                            </p>
                            <p className="text-xs text-gray-600">
                                Supporting women's education, healthcare, and financial aid at district level
                            </p>
                        </Card>

                        <Card className="bg-white">
                            <h4 className="text-lg font-serif font-semibold text-academic-blue-900 mb-3">
                                General Secretary
                            </h4>
                            <p className="text-sm text-gray-700 mb-2">
                                Federation of Muslim Women Aid Societies of Tamil Nadu
                            </p>
                            <p className="text-xs text-gray-600">
                                Coordinating statewide initiatives and advocating for minority women's rights
                            </p>
                        </Card>

                        <Card className="bg-white">
                            <h4 className="text-lg font-serif font-semibold text-academic-blue-900 mb-3">
                                Secretary
                            </h4>
                            <p className="text-sm text-gray-700 mb-2">
                                Association of Muslim Professionals (Ramanathapuram Chapter)
                            </p>
                            <p className="text-xs text-gray-600">
                                Bridging professional community with social causes and youth mentorship
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Impact Philosophy */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Card className="max-w-3xl mx-auto bg-gradient-to-br from-academic-gold-50 to-academic-blue-50 border-2 border-academic-gold-200">
                        <div className="text-center">
                            <div className="text-5xl mb-4">💫</div>
                            <h4 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-4">
                                Social Impact Philosophy
                            </h4>
                            <p className="text-lg text-gray-700 mb-4 italic">
                                "When you educate a man, you change a life; when you educate a woman,
                                you shape a community"
                            </p>
                            <p className="text-gray-600">
                                This guiding principle underlies all community engagement work, ensuring
                                that educational mission and NGO activities align with broader social
                                development goals: poverty alleviation, gender equity, health and nutrition,
                                and sustainable livelihoods.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Contact CTA */}
            <ContactCTA />
        </>
    )
}
