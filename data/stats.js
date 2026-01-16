export const stats = [
    {
        id: 1,
        value: "37+",
        label: "Years Experience",
        description: "In higher education leadership and academic administration",
        icon: "📅"
    },
    {
        id: 2,
        value: "2000+",
        label: "Students Annually",
        description: "Women students empowered through quality education",
        icon: "🎓"
    },
    {
        id: 3,
        value: "20,000+",
        label: "Families Empowered",
        description: "Through women empowerment and community development initiatives",
        icon: "👨‍👩‍👧‍👦"
    },
    {
        id: 4,
        value: "42",
        label: "Research Publications",
        description: "In prestigious national and international journals",
        icon: "📚"
    },
    {
        id: 5,
        value: "2",
        label: "Patents",
        description: "Innovative food technology patents granted",
        icon: "💡"
    },
    {
        id: 6,
        value: "₹5 Cr+",
        label: "Grants Secured",
        description: "Competitive research and development funding",
        icon: "💰"
    },
    {
        id: 7,
        value: "27+",
        label: "Awards",
        description: "State, national, and international recognitions",
        icon: "🏆"
    },
    {
        id: 8,
        value: "7",
        label: "Ph.D. Scholars",
        description: "Guided to successful doctoral completion",
        icon: "🎯"
    }
]

export const getHighlightStats = () => {
    return stats.slice(0, 4)
}
