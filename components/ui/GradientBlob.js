'use client'

import { motion } from 'framer-motion'

export default function GradientBlob({ className = '', delay = 0 }) {
    return (
        <motion.div
            className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
            animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
                rotate: [0, 90, 0],
            }}
            transition={{
                duration: 20,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    )
}
