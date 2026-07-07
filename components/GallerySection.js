'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { gallery } from '@/data/gallery'

export default function GallerySection() {
    return (
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-academic-blue-900/30 transition-colors duration-300">
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
                <div className="columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                    {gallery.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className="relative break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-academic-blue-800 group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-academic-blue-950/0 group-hover:bg-academic-blue-950/10 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
