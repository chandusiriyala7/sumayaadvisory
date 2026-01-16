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
        <>
            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-academic-blue-50/50 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="About Dr. Sumaya"
                        subtitle="A Visionary Leader in Academic Excellence and Social Impact"
                    />
                </div>
            </section>

            {/* Profile Summary */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <div className="relative w-full aspect-square max-w-sm mx-auto mb-6">
                                    <Image
                                        src="/images/sumaya.png"
                                        alt="Dr. Sumaya"
                                        width={400}
                                        height={400}
                                        className="rounded-xl shadow-lg object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-serif font-bold text-academic-blue-950 mb-2">
                                        {profile.name}, {profile.title}
                                    </h3>
                                    <p className="text-academic-blue-700 font-medium mb-1">
                                        {profile.position}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {profile.institution}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {profile.institutionDetails}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-4">
                                    Professional Summary
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {profile.summary}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-4">
                                    Academic Qualifications
                                </h3>
                                <ul className="space-y-3">
                                    {profile.qualifications.map((qual, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-academic-gold-500 mr-3 mt-1">🎓</span>
                                            <span className="text-gray-700">{qual}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-4">
                                    Areas of Expertise
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {profile.expertise.map((area, index) => (
                                        <div key={index} className="flex items-center p-3 bg-academic-blue-50 rounded-lg">
                                            <span className="text-academic-blue-700 mr-2">✓</span>
                                            <span className="text-gray-800 text-sm font-medium">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Experience */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Leadership & Administrative Experience"
                        subtitle="Transforming institutions and building sustainable excellence"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                Institutional Transformation
                            </h4>
                            <p className="text-gray-700 mb-4">
                                Since 1994, transformed TBAK College from a fledgling institution into a thriving
                                autonomous college serving 2,000+ women students annually. Achieved autonomous status
                                in 2005 and NAAC &apos;A&apos; Grade accreditation (CGPA 3.16/4.0) in 2019.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• First Muslim minority women&apos;s institution to achieve autonomous status</li>
                                <li>• Established 4 research centres across disciplines</li>
                                <li>• 50% graduate placement rate in reputed companies</li>
                            </ul>
                        </Card>

                        <Card>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                Resource Mobilization
                            </h4>
                            <p className="text-gray-700 mb-4">
                                Secured ₹5 Crore+ in competitive grants including the prestigious DBT Star College
                                Scheme (₹1 Crore, 2023) – the only college in Madurai region with this recognition.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• 4 UGC-sponsored major research projects</li>
                                <li>• DBT, DST, and state agency funding</li>
                                <li>• Infrastructure and community program grants</li>
                            </ul>
                        </Card>

                        <Card>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                Academic Innovation
                            </h4>
                            <p className="text-gray-700 mb-4">
                                Pioneered curriculum reforms, established new departments, and introduced
                                industry-relevant programs aligned with UGC and TANSCHE guidelines.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Innovative PG program in ERP Systems</li>
                                <li>• Curriculum design for TNPSC examinations</li>
                                <li>• Career-oriented add-on programs</li>
                            </ul>
                        </Card>

                        <Card>
                            <h4 className="text-xl font-serif font-semibold text-academic-blue-900 mb-3">
                                Professional Service
                            </h4>
                            <p className="text-gray-700 mb-4">
                                NAAC Peer Team Member since 2004, UGC Committee Member, and advisor to multiple
                                government bodies and academic councils.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Convener, PG Home Science Board (TANSCHE)</li>
                                <li>• Tamil Nadu Food Safety Advisory Committee</li>
                                <li>• Regional Coordinator, MGNCRE (MoE, Govt. of India)</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* International Collaborations */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionTitle
                        title="International Collaborations"
                        subtitle="Representing India globally and forging academic partnerships"
                    />

                    <div className="flex flex-wrap justify-center gap-4">
                        {profile.internationalCollaborations.map((country, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-gradient-to-r from-academic-blue-50 to-academic-gold-50/30 border border-academic-blue-200 rounded-full"
                            >
                                <span className="text-academic-blue-800 font-medium">{country}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
                        Delivered invited talks, presented research, and forged academic collaborations
                        across continents, representing India&apos;s excellence in education and research.
                    </p>
                </div>
            </section>

            {/* Contact CTA */}
            <ContactCTA />
        </>
    )
}
