const ambassadorMeetingAlt =
    'Dr. Sumaya with the then Indian Ambassador to Saudi Arabia, Mr. Farooq Abdullah, and his son Mr. Shahjehan, then Education Minister of Puducherry'

export const gallery = [
    ...Array.from({ length: 27 }, (_, i) => ({
        id: i + 1,
        src: `/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`,
        alt: `Dr. Sumaya — recognition and institutional moment ${i + 1}`,
    })),
    ...Array.from({ length: 5 }, (_, i) => ({
        id: 28 + i,
        src: `/gallery/gallery-${28 + i}.jpg`,
        alt: ambassadorMeetingAlt,
    })),
]
