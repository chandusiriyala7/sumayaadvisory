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
        <>
            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-academic-blue-50/50 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Consultancy Services"
                        subtitle="Comprehensive advisory services tailored for academic institutions, research organizations, and community development initiatives"
                    />
                </div>
            </section>

            {/* Services Detail */}
            <section className="section-padding bg-white">
                <div className="container-custom space-y-16">
                    {services.map((service, index) => (
                        <div key={service.id} className={index !== 0 ? 'pt-16 border-t border-gray-200' : ''}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Service Header */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-24">
                                        <div className="text-5xl mb-4">{service.icon}</div>
                                        <h3 className="text-2xl font-serif font-bold text-academic-blue-950 mb-3">
                                            {service.title}
                                        </h3>
                                        <span className="inline-block px-4 py-2 bg-academic-gold-500/10 text-academic-gold-700 text-sm font-semibold rounded-full">
                                            {service.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="lg:col-span-2 space-y-6">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <Card className="bg-academic-blue-50/50">
                                        <h4 className="text-lg font-semibold text-academic-blue-900 mb-3">
                                            Who This Is For
                                        </h4>
                                        <p className="text-gray-700">
                                            {service.targetAudience}
                                        </p>
                                    </Card>

                                    <div>
                                        <h4 className="text-lg font-semibold text-academic-blue-900 mb-4">
                                            Services Included
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {service.servicesIncluded.map((item, idx) => (
                                                <div key={idx} className="flex items-start p-3 bg-white border border-gray-200 rounded-lg">
                                                    <span className="text-academic-gold-500 mr-3 mt-0.5">✓</span>
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Card className="bg-gradient-to-r from-academic-blue-900 to-academic-blue-800 text-white">
                                        <h4 className="text-lg font-semibold text-white mb-2">
                                            Expected Outcome
                                        </h4>
                                        <p className="text-academic-blue-100">
                                            {service.outcome}
                                        </p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Why Choose Dr. Sumaya Advisory"
                        subtitle="Proven expertise backed by decades of measurable impact"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <div className="text-4xl mb-4">🎯</div>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                Proven Track Record
                            </h4>
                            <p className="text-gray-700">
                                37+ years of transforming institutions, securing ₹5 Cr+ in grants,
                                and achieving NAAC &apos;A&apos; Grade accreditation.
                            </p>
                        </Card>

                        <Card>
                            <div className="text-4xl mb-4">🤝</div>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                Hands-On Experience
                            </h4>
                            <p className="text-gray-700">
                                Not just theory – practical insights from successfully leading an
                                autonomous institution and mentoring hundreds of faculty members.
                            </p>
                        </Card>

                        <Card>
                            <div className="text-4xl mb-4">🌟</div>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                Holistic Approach
                            </h4>
                            <p className="text-gray-700">
                                Combining academic excellence with social impact, ensuring sustainable
                                growth and meaningful community transformation.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <ContactCTA />
        </>
    )
}
