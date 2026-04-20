'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Card({ children, className = '', hover = true }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const hasCustomBg = className.includes('bg-')
    const baseClasses = `${hasCustomBg ? '' : 'glass dark:bg-academic-blue-900/50'} rounded-[2rem] p-8 transition-all duration-500 relative overflow-hidden`

    const handleMouseMove = (e) => {
        if (!hover) return
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <motion.div
            className={`${baseClasses} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={hover ? { 
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
            } : {}}
            style={{
                boxShadow: isHovered && hover
                    ? '0 30px 60px -12px rgba(212, 175, 55, 0.25)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            }}
        >
            {/* Gradient spotlight effect on hover */}
            {hover && isHovered && (
                <motion.div
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    animate={{ opacity: isHovered ? 0.1 : 0 }}
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.4), transparent 40%)`,
                    }}
                />
            )}
            
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Gradient border on hover */}
            {hover && (
                <motion.div
                    className="absolute inset-0 rounded-[2rem] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), transparent, rgba(212, 175, 55, 0.3))',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                />
            )}
        </motion.div>
    )
}
