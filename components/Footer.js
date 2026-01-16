import Link from 'next/link'
import { profile } from '@/data/profile'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/research', label: 'Research' },
        { href: '/social-impact', label: 'Social Impact' },
        { href: '/awards', label: 'Awards' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <footer className="bg-academic-blue-950 text-white">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-serif font-bold text-white mb-4">
                            Dr. Sumaya Advisory
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Academic Leadership & Institutional Excellence Consultancy
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            37+ years of experience in higher education leadership, research excellence,
                            and community development. Serving universities, colleges, and institutions
                            across India and internationally.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-academic-gold-500 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <span className="text-academic-gold-500 mr-2">📞</span>
                                <div>
                                    <a
                                        href={`tel:${profile.contact.phone}`}
                                        className="text-gray-300 hover:text-academic-gold-500 transition-colors block"
                                    >
                                        {profile.contact.phone}
                                    </a>
                                    <a
                                        href={`tel:${profile.contact.landline}`}
                                        className="text-gray-300 hover:text-academic-gold-500 transition-colors block"
                                    >
                                        {profile.contact.landline}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-academic-gold-500 mr-2">✉️</span>
                                <a
                                    href={`mailto:${profile.contact.email}`}
                                    className="text-gray-300 hover:text-academic-gold-500 transition-colors"
                                >
                                    {profile.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="text-academic-gold-500 mr-2">📍</span>
                                <div className="text-gray-300">
                                    <p>{profile.contact.address.line1}</p>
                                    <p>{profile.contact.address.line2}</p>
                                    <p>{profile.contact.address.line3}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Dr. Sumaya Advisory. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>NAAC Peer Team Member</span>
                            <span>•</span>
                            <span>UGC Committee Member</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
