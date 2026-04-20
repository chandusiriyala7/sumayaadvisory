'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ui/ThemeToggle'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/research', label: 'Research' },
        { href: '/social-impact', label: 'Social Impact' },
        { href: '/awards', label: 'Awards' },
        { href: '/contact', label: 'Contact' },
    ]

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/'
        }
        return pathname.startsWith(href)
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/80 dark:bg-academic-blue-950/80 backdrop-blur-xl shadow-lg dark:shadow-academic-blue-900/20'
                    : 'bg-white/95 dark:bg-academic-blue-950/95 backdrop-blur-sm'
            }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                            <Image
                                src="/images/north-star-logo.png"
                                alt="The North Star"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 32px, 40px"
                            />
                        </div>
                        <div className="text-base md:text-lg font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 leading-tight transition-colors whitespace-nowrap">
                            The North Star
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                                    isActive(link.href)
                                        ? 'text-academic-blue-900 dark:text-academic-gold-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-academic-blue-900 dark:hover:text-academic-gold-400'
                                }`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-academic-blue-50 dark:bg-academic-blue-800/50 rounded-md -z-10"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <ThemeToggle />
                        <Link href="/contact" className="inline-block px-4 py-2 bg-academic-blue-900 dark:bg-academic-gold-500 text-white dark:text-academic-blue-950 text-xs font-semibold rounded-full hover:bg-academic-blue-800 dark:hover:bg-academic-gold-400 transition-all shadow-md hover:scale-105">
                            Request Consultation
                        </Link>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex lg:hidden items-center space-x-3">
                        <ThemeToggle />
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-academic-blue-800"
                            aria-label="Toggle menu"
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden border-t border-gray-200 dark:border-academic-blue-800"
                        >
                            <div className="py-4 flex flex-col space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-4 py-2.5 rounded-md text-xs font-medium transition-colors ${
                                                isActive(link.href)
                                                    ? 'text-academic-blue-900 dark:text-academic-gold-400 bg-academic-blue-50 dark:bg-academic-blue-800/50'
                                                    : 'text-gray-700 dark:text-gray-300 hover:text-academic-blue-900 dark:hover:text-academic-gold-400 hover:bg-gray-50 dark:hover:bg-academic-blue-800/30'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="pt-2"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-center px-4 py-2.5 bg-academic-blue-900 dark:bg-academic-gold-500 text-white dark:text-academic-blue-950 text-xs font-semibold rounded-full hover:bg-academic-blue-800 dark:hover:bg-academic-gold-400 transition-all shadow-md"
                                    >
                                        Request Consultation
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}
