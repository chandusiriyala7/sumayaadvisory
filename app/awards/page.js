import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import ContactCTA from '@/components/ContactCTA'
import { getAllAwards, getAwardsByCategory } from '@/data/awards'

export const metadata = {
    title: 'Awards & Recognition | Dr. Sumaya',
    description: '27+ state, national, and international awards including Chief Minister\'s Best Woman Social Worker Award and National Award of Excellence in Higher Education.',
}

export default function AwardsPage() {
    const allAwards = getAllAwards()
    const nationalAwards = getAwardsByCategory('National')
    const stateAwards = getAwardsByCategory('State')
    const internationalAwards = getAwardsByCategory('International')

    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-academic-blue-50/50 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Awards & Recognition"
                        subtitle="27+ honors celebrating excellence in education, research, and social service"
                    />
                </div>
            </section>

            {/* Highlights */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-8 text-center">
                        Featured Awards
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <Card className="bg-gradient-to-br from-academic-gold-500 to-academic-gold-600 text-white">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-5xl">🏆</span>
                                <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                                    2012
                                </span>
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-white mb-3">
                                Chief Minister's Best Woman Social Worker Award
                            </h4>
                            <p className="text-sm text-white/90 mb-2">
                                Government of Tamil Nadu
                            </p>
                            <p className="text-white/80 text-sm">
                                Prestigious honour with gold medal and citation for outstanding contribution
                                to women's welfare and community development in the state.
                            </p>
                        </Card>

                        <Card className="bg-gradient-to-br from-academic-blue-900 to-academic-blue-800 text-white">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-5xl">🎖️</span>
                                <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                                    2011
                                </span>
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-white mb-3">
                                National Award of Excellence in Higher Education
                            </h4>
                            <p className="text-sm text-white/90 mb-2">
                                National Commission for Minority Educational Institutions (NCMEI), Govt. of India
                            </p>
                            <p className="text-white/80 text-sm">
                                For exceptional service and leadership in the field of minority education
                                and higher learning.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* National Awards */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-8">
                        National Awards ({nationalAwards.length})
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nationalAwards.map((award) => (
                            <Card key={award.id}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-3xl">🏅</span>
                                    <span className="px-3 py-1 bg-academic-blue-100 text-academic-blue-700 text-xs font-semibold rounded-full">
                                        {award.year}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold text-academic-blue-900 mb-2">
                                    {award.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    {award.awardedBy}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {award.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* State Awards */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-8">
                        State Awards ({stateAwards.length})
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stateAwards.map((award) => (
                            <Card key={award.id}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-3xl">⭐</span>
                                    <span className="px-3 py-1 bg-academic-gold-100 text-academic-gold-700 text-xs font-semibold rounded-full">
                                        {award.year}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold text-academic-blue-900 mb-2">
                                    {award.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    {award.awardedBy}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {award.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* International Awards */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/30 to-white">
                <div className="container-custom">
                    <h3 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-8">
                        International Awards ({internationalAwards.length})
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {internationalAwards.map((award) => (
                            <Card key={award.id}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-3xl">🌍</span>
                                    <span className="px-3 py-1 bg-academic-blue-100 text-academic-blue-700 text-xs font-semibold rounded-full">
                                        {award.year}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold text-academic-blue-900 mb-2">
                                    {award.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    {award.awardedBy}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {award.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Summary */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Card className="max-w-3xl mx-auto bg-gradient-to-br from-academic-blue-50 to-academic-gold-50/30">
                        <div className="text-center">
                            <div className="text-5xl mb-4">✨</div>
                            <h4 className="text-2xl font-serif font-semibold text-academic-blue-950 mb-4">
                                Four Decades of Excellence
                            </h4>
                            <p className="text-gray-700 mb-4">
                                From the Presidency Guide Award (1979) from the President of India during youth,
                                to recent recognitions like the Bharat Excellence Award (2023) and Academic
                                Leadership Award (2023), these honors span over four decades of consistent
                                excellence and dedication.
                            </p>
                            <p className="text-gray-600 text-sm">
                                Each award represents not just personal achievement, but the collective impact
                                on thousands of students, institutions, and communities across India and beyond.
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
