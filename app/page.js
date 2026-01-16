import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import StatsSection from '@/components/StatsSection'
import AwardsHighlight from '@/components/AwardsHighlight'
import ContactCTA from '@/components/ContactCTA'
import SectionTitle from '@/components/SectionTitle'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Consultancy Services"
                        subtitle="Comprehensive advisory services for academic institutions, research organizations, and community development initiatives"
                    />
                    <ServicesGrid />
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/50 to-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Impact & Achievements"
                        subtitle="Decades of measurable impact in education, research, and community development"
                    />
                    <StatsSection />
                </div>
            </section>

            {/* Awards Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionTitle
                        title="Recognition & Awards"
                        subtitle="27+ state, national, and international honors recognizing excellence in education and social service"
                    />
                    <AwardsHighlight />
                </div>
            </section>

            {/* Contact CTA */}
            <ContactCTA />
        </>
    )
}
