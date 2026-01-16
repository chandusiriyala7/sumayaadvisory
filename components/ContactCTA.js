import Link from 'next/link'

export default function ContactCTA() {
    return (
        <section className="relative bg-gradient-to-r from-academic-blue-900 to-academic-blue-800 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-academic-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-academic-blue-500/20 rounded-full blur-3xl"></div>

            <div className="container-custom py-16 md:py-20 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block px-4 py-2 glass-gold rounded-full mb-4 scale-in">
                        <span className="text-academic-gold-700 font-semibold text-sm">
                            🚀 Let&apos;s Get Started
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 fade-in-up">
                        Ready to Transform Your Institution?
                    </h2>
                    <p className="text-lg text-academic-blue-100 mb-8 fade-in-up delay-200 leading-relaxed">
                        Let&apos;s discuss how my <span className="highlight-text text-white bg-academic-gold-500/30">37+ years of expertise</span> can help your institution achieve academic excellence,
                        secure accreditation, or build sustainable community impact programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-400">
                        <Link href="/contact" className="btn-accent hover-lift">
                            Request Consultation
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-3 glass border-2 border-white/30 text-white rounded-md font-semibold hover:bg-white hover:text-academic-blue-900 transition-all hover-lift"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
