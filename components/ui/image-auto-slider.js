import { gallery } from '@/data/gallery'

const images = gallery.map((item) => item.src)
const duplicatedImages = [...images, ...images]

export const ImageAutoSlider = () => {
    return (
        <>
            <style>{`
                @keyframes scroll-right {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .infinite-scroll {
                    animation: scroll-right 30s linear infinite;
                }
                .scroll-container {
                    mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
                    -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
                }
                .image-item {
                    transition: transform 0.3s ease, filter 0.3s ease;
                }
                .image-item:hover {
                    transform: scale(1.05);
                    filter: brightness(1.1);
                }
            `}</style>

            <div className="scroll-container w-full">
                <div className="infinite-scroll flex gap-6 w-max">
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-academic-blue-800"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={src}
                                alt={`Gallery image ${(index % images.length) + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
