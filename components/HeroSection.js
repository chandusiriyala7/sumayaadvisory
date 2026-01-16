'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { profile } from '@/data/profile'

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        '/images/sumaya-2.png',
        '/images/sumaya-3.png'
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <section className="relative bg-gradient-to-br from-white via-academic-blue-50/30 to-white pt-32 pb-20 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-academic-gold-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-academic-blue-500/5 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 slide-in-left">
                        <div className="inline-block px-4 py-2 glass-gold rounded-full shimmer">
                            <span className="text-academic-gold-700 font-medium text-sm">
                                ✨ {profile.tagline}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-academic-blue-950 leading-tight">
                            {profile.heroTitle}
                        </h1>

                        <p className="text-xl md:text-2xl text-academic-blue-800 font-medium">
                            {profile.heroSubtitle}
                        </p>

                        <div className="glass-dark rounded-xl p-6 space-y-3">
                            {profile.heroCredentials.map((credential, index) => (
                                <div key={index} className={`flex items-center space-x-3 fade-in delay-${index}00`}>
                                    <span className="w-2 h-2 bg-academic-gold-500 rounded-full flex-shrink-0"></span>
                                    <span className="text-gray-800 font-medium">{credential}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact" className="btn-primary hover-lift">
                                Request Consultation
                            </Link>
                            <Link href="/services" className="btn-secondary hover-lift">
                                View Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Stacked Card Carousel */}
                    <div className="relative slide-in-right">
                        <div className="relative w-full max-w-md mx-auto" style={{ paddingBottom: '100%' }}>
                            {/* Stacked cards effect */}
                            {images.map((image, index) => {
                                const isActive = index === currentImage
                                const isPrev = index === (currentImage - 1 + images.length) % images.length
                                const isNext = index === (currentImage + 1) % images.length

                                let zIndex = 1
                                let scale = 0.85
                                let translateY = 40
                                let translateX = 0
                                let opacity = 0.3
                                let rotate = 0

                                if (isActive) {
                                    zIndex = 30
                                    scale = 1
                                    translateY = 0
                                    opacity = 1
                                } else if (isPrev) {
                                    zIndex = 20
                                    scale = 0.92
                                    translateY = 15
                                    translateX = -15
                                    opacity = 0.6
                                    rotate = -3
                                } else if (isNext) {
                                    zIndex = 10
                                    scale = 0.92
                                    translateY = 15
                                    translateX = 15
                                    opacity = 0.6
                                    rotate = 3
                                }

                                return (
                                    <div
                                        key={index}
                                        className="absolute inset-0 transition-all duration-700 ease-out"
                                        style={{
                                            zIndex,
                                            transform: `scale(${scale}) translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg)`,
                                            opacity
                                        }}
                                    >
                                        <div className="relative w-full h-full glass rounded-2xl shadow-2xl overflow-hidden border-4 border-white/50 hover-glow">
                                            <Image
                                                src={image}
                                                alt={`Dr. Sumaya - Photo ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 500px"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-academic-blue-900/20 to-transparent"></div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass-gold px-6 py-3 rounded-xl shadow-lg scale-in z-40">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-academic-blue-900">37+</div>
                                    <div className="text-xs text-gray-700 font-medium">Years Experience</div>
                                </div>
                            </div>

                            {/* Navigation dots */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage
                                                ? 'bg-academic-gold-500 w-8'
                                                : 'bg-academic-blue-300 hover:bg-academic-blue-400'
                                            }`}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
