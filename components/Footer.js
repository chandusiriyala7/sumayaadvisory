import Link from 'next/link'
import { profile } from '@/data/profile'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const phoneHref = profile.contact.phone.replace(/[^\d+]/g, '')

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/research', label: 'Research' },
        { href: '/social-impact', label: 'Social Impact' },
        { href: '/awards', label: 'Awards' },
        { href: '/contact', label: 'Contact' },
    ]

    const actionLinks = [
        { href: `mailto:${profile.contact.email}`, label: 'Email' },
        { href: `tel:${phoneHref}`, label: 'Call' },
    ]

    return (
        <footer className="bg-academic-blue-950 text-white relative overflow-hidden pt-12 md:pt-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-academic-gold-500 via-academic-blue-900 to-academic-gold-500"></div>
            <div className="container-custom pt-28 md:pt-36 lg:pt-40 pb-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    <div className="lg:col-span-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/5">
                            <div className="max-w-xl">
                                <h3 className="text-4xl font-serif font-bold text-academic-gold-400 mb-6">
                                    The North Star
                                </h3>
                                <p className="text-xl text-white/60 font-light leading-relaxed">
                                    Pioneering excellence in higher education and societal transformation through strategic advisory and academic leadership.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {actionLinks.map((action) => (
                                    <a key={action.label} href={action.href} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-academic-gold-500 hover:text-academic-blue-950 transition-all">
                                        {action.label}
                                    </a>
                                ))}
                                <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-academic-gold-500 hover:text-academic-blue-950 transition-all">
                                    Consult
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-academic-gold-500 mb-8">Navigation</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {quickLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-academic-gold-500 mb-8">Connect</h4>
                        <div className="space-y-6">
                            <a href={`mailto:${profile.contact.email}`} className="block group">
                                <div className="text-[10px] font-bold text-white/20 uppercase mb-1">Electronic Mail</div>
                                <div className="text-sm font-serif group-hover:text-academic-gold-400 transition-colors">{profile.contact.email}</div>
                            </a>
                            <a href={`tel:${phoneHref}`} className="block group">
                                <div className="text-[10px] font-bold text-white/20 uppercase mb-1">Executive Line</div>
                                <div className="text-sm font-serif group-hover:text-academic-gold-400 transition-colors">{profile.contact.phone}</div>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-academic-gold-500 mb-8">HQ</h4>
                        <div className="text-white/40 text-sm font-medium leading-loose uppercase tracking-tighter">
                            Educational District,<br />
                            Ramanathapuram,<br />
                            Tamil Nadu, India.
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                        © {currentYear} The North Star Global Advisory
                    </p>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                        <span>Excellence</span>
                        <span>Integrity</span>
                        <span>Innovation</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-academic-gold-500/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
        </footer>
    )
}
