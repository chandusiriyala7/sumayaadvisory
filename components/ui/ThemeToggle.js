'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-xl bg-academic-blue-100 dark:bg-academic-blue-800 animate-pulse" />
        )
    }

    const isDark = theme === 'dark'

    return (
        <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-academic-blue-50 to-academic-blue-100 dark:from-academic-blue-900 dark:to-academic-blue-800 border border-academic-blue-200 dark:border-academic-blue-700 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-academic-gold-500 focus:ring-offset-2 dark:focus:ring-offset-academic-blue-950 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            {/* Background glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-academic-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
            />

            {/* Icon container */}
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="moon"
                            initial={{ scale: 0, rotate: -90, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0, rotate: 90, opacity: 0 }}
                            transition={{ 
                                duration: 0.4,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                            className="absolute"
                        >
                            {/* Moon Icon */}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-academic-gold-400"
                            >
                                <path
                                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                {/* Stars around moon */}
                                <motion.circle
                                    cx="18"
                                    cy="6"
                                    r="1"
                                    fill="currentColor"
                                    animate={{ 
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.circle
                                    cx="22"
                                    cy="10"
                                    r="0.8"
                                    fill="currentColor"
                                    animate={{ 
                                        scale: [1, 1.3, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                />
                            </svg>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ scale: 0, rotate: 90, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            exit={{ scale: 0, rotate: -90, opacity: 0 }}
                            transition={{ 
                                duration: 0.4,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                            className="absolute"
                        >
                            {/* Sun Icon */}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-academic-gold-600"
                            >
                                {/* Sun rays */}
                                <g>
                                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                                        <motion.line
                                            key={angle}
                                            x1="12"
                                            y1="1"
                                            x2="12"
                                            y2="3"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            style={{
                                                transformOrigin: '12px 12px',
                                                transform: `rotate(${angle}deg)`
                                            }}
                                            animate={{
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.1
                                            }}
                                        />
                                    ))}
                                </g>
                                {/* Sun center */}
                                <motion.circle
                                    cx="12"
                                    cy="12"
                                    r="5"
                                    fill="currentColor"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Shimmer effect on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                    translateX: ['100%', '-100%']
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                }}
            />
        </motion.button>
    )
}
