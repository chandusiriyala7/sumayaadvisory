'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { profile } from '@/data/profile'

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        '/images/image.png',
        '/images/image copy.png',
        '/images/image copy 2.png',
        '/images/image copy 3.png'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <section className="relative bg-white pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-academic-blue-50/30 -skew-x-12 transform origin-top-right"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-academic-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-academic-blue-50/50 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 slide-in-left">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 glass-gold rounded-full shimmer">
                            <span className="w-2 h-2 bg-academic-gold-500 rounded-full animate-pulse"></span>
                            <span className="text-academic-gold-700 font-semibold text-sm uppercase tracking-widest">
                                {profile.tagline}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-academic-blue-900 leading-[1.1]">
                            The <span className="text-academic-gold-500 underline decoration-academic-gold-200 underline-offset-8">North Star</span> for Institutional Excellence
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 max-w-xl font-light leading-relaxed">
                            {profile.heroSubtitle}. Empowering academic leadership through decades of proven expertise and visionary strategy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <Link href="/contact" className="btn-primary hover-lift text-lg font-bold">
                                Request Consultation
                            </Link>
                            <Link href="/services" className="btn-secondary hover-lift text-lg font-bold">
                                Our Services
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-200">
                            <div>
                                <div className="text-3xl font-bold text-academic-blue-900">37+</div>
                                <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-academic-blue-900">27+</div>
                                <div className="text-sm text-slate-500 font-medium">Prestigious Awards</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-academic-blue-900">5Cr+</div>
                                <div className="text-sm text-slate-500 font-medium">Research Grants</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Premium Image Stack */}
                    <div className="relative h-[600px] slide-in-right hidden lg:block">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Main Active Image */}
                            <div className="relative w-[450px] h-[550px] z-20 transition-all duration-1000 ease-in-out transform hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-academic-blue-900 rounded-[2rem] transform rotate-3 translate-x-4 translate-y-4"></div>
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                                    <Image
                                        src={images[currentImage]}
                                        alt="The North Star Logo/Context"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-academic-blue-900/40 to-transparent"></div>
                                </div>

                                {/* Floating Info Card */}
                                <div className="absolute -bottom-8 -left-8 glass-dark p-6 rounded-2xl shadow-xl border border-white/20 scale-in z-30">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-academic-gold-500 rounded-full flex items-center justify-center text-white font-bold">★</div>
                                        <div>
                                            <div className="text-sm font-bold text-academic-blue-950 uppercase tracking-tighter">Premium Advisory</div>
                                            <div className="text-xs text-slate-600 font-medium">Excellence in Leadership</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Image Stack */}
                            <div className="absolute top-10 right-0 w-48 h-64 z-10 opacity-40 blur-[1px] transition-all duration-1000">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                                    <Image
                                        src={images[(currentImage + 1) % images.length]}
                                        alt="Context"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-0 w-48 h-64 z-10 opacity-40 blur-[1px] transition-all duration-1000">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                                    <Image
                                        src={images[(currentImage + 2) % images.length]}
                                        alt="Context"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImage(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${currentImage === i ? 'bg-academic-gold-500 w-12' : 'bg-slate-300 w-4'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile Only Slider */}
                    <div className="lg:hidden relative h-[400px] w-full">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                            <Image
                                src={images[currentImage]}
                                alt="Context"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {images.map((_, i) => (
                                <div key={i} className={`w-2 h-2 rounded-full ${currentImage === i ? 'bg-academic-gold-500' : 'bg-white/50'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

