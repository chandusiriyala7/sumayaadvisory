'use client'

import { motion } from 'framer-motion'
import { ImageAutoSlider } from '@/components/ui/image-auto-slider'

export default function GallerySection() {
    return (
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-academic-blue-900/30 transition-colors duration-300 overflow-hidden">
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-academic-gold-600 dark:text-academic-gold-400 mb-3">
                        In Frame
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-academic-blue-900 dark:text-academic-blue-50 transition-colors duration-300">
                        The Legacy Lens
                    </h2>
                </motion.div>
            </div>
            <ImageAutoSlider />
        </section>
    )
}
