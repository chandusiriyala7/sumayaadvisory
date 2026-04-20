'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import StatsSection from '@/components/StatsSection'
import AwardsHighlight from '@/components/AwardsHighlight'
import ContactCTA from '@/components/ContactCTA'
import SectionTitle from '@/components/SectionTitle'
import { pageTransition } from '@/lib/animations'

export default function Home() {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <section className="section-padding bg-white dark:bg-academic-blue-950 transition-colors duration-300">
                <div className="container-custom">
                    <SectionTitle
                        title="Consultancy Services"
                        subtitle="Comprehensive advisory services for academic institutions, research organizations, and community development initiatives"
                    />
                    <ServicesGrid />
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-gradient-to-br from-academic-blue-50/50 to-white dark:from-academic-blue-900/30 dark:to-academic-blue-950 transition-colors duration-300">
                <div className="container-custom">
                    <SectionTitle
                        title="Impact & Achievements"
                        subtitle="Decades of measurable impact in education, research, and community development"
                    />
                    <StatsSection />
                </div>
            </section>

            {/* Awards Section */}
            <section className="section-padding bg-white dark:bg-academic-blue-950 transition-colors duration-300">
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
        </motion.div>
    )
}
