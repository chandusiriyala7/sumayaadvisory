export const gallery = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `Dr. Sumaya — recognition and institutional moment ${i + 1}`,
}))
