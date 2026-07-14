const ambassadorMeetingAlt =
    'Dr. Sumaya with the then Indian Ambassador to Saudi Arabia, Mr. Farooq Abdullah, and his son Mr. Shahjehan, then Education Minister of Puducherry'

export const gallery = [
    ...Array.from({ length: 27 }, (_, i) => ({
        id: i + 1,
        src: `/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Dr. Sumaya — recognition and institutional moment ${i + 1}`,
    })),
    { id: 28, src: '/gallery/gallery-28-v2.jpg', alt: ambassadorMeetingAlt },
    { id: 29, src: '/gallery/gallery-29.jpg', alt: ambassadorMeetingAlt },
    { id: 30, src: '/gallery/gallery-30.jpg', alt: ambassadorMeetingAlt },
    { id: 31, src: '/gallery/gallery-31.jpg', alt: ambassadorMeetingAlt },
    { id: 32, src: '/gallery/gallery-32.jpg', alt: ambassadorMeetingAlt },
]
