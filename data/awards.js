export const awards = [
    {
        id: 1,
        year: 2023,
        title: "Bharat Excellence Award",
        awardedBy: "Friendship Forum, New Delhi",
        category: "National",
        description: "Recognizing extraordinary achievements and efforts in promoting educational cooperation and development at a national level",
        featured: true
    },
    {
        id: 2,
        year: 2023,
        title: "Academic Leadership Award",
        awardedBy: "Madurai Management Association (affiliated to AIMA)",
        category: "National",
        description: "For distinguished leadership and innovation in higher education management",
        featured: true
    },
    {
        id: 3,
        year: 2022,
        title: "Pre-Eminent Administrator International Award",
        awardedBy: "Chennai Teachers' Council",
        category: "International",
        description: "Recognizing excellence in academic administration and institutional governance with a global outlook",
        featured: true
    },
    {
        id: 4,
        year: 2019,
        title: "Moulana Abul Kalam Azad National Education Award",
        awardedBy: "National Education Foundation",
        category: "National",
        description: "Honouring lifelong outstanding services in the field of education, particularly for minority communities",
        featured: true
    },
    {
        id: 5,
        year: 2019,
        title: "Lifetime Achievement Award in Education",
        awardedBy: "Radian IAS Academy, Tamil Nadu",
        category: "State",
        description: "For decades-long dedication and impactful contributions to the education sector",
        featured: true
    },
    {
        id: 6,
        year: 2017,
        title: "Dr. Radhakrishnan Outstanding Educator Award",
        awardedBy: "Educational Excellence Foundation",
        category: "National",
        description: "Recognizing exceptional contributions to education and academic leadership",
        featured: false
    },
    {
        id: 7,
        year: 2012,
        title: "Chief Minister's Best Woman Social Worker Award",
        awardedBy: "Government of Tamil Nadu",
        category: "State",
        description: "Prestigious honour with gold medal and citation for outstanding contribution to women's welfare and community development",
        featured: true
    },
    {
        id: 8,
        year: 2011,
        title: "National Award of Excellence in Higher Education",
        awardedBy: "National Commission for Minority Educational Institutions (NCMEI), Government of India",
        category: "National",
        description: "For exceptional service and leadership in the field of minority education and higher learning",
        featured: true
    },
    {
        id: 9,
        year: 2011,
        title: "Best Principal Award",
        awardedBy: "International Institute of Education & Management, New Delhi",
        category: "National",
        description: "For exemplary performance as the head of an academic institution",
        featured: false
    },
    {
        id: 10,
        year: 2006,
        title: "Innovative Teacher Award – Science",
        awardedBy: "State Education Board",
        category: "State",
        description: "Recognizing innovative teaching methodologies in science education",
        featured: false
    },
    {
        id: 11,
        year: 2004,
        title: "Best Muslim Woman Scientist Award",
        awardedBy: "National Science Forum",
        category: "National",
        description: "Honouring contributions to scientific research and education",
        featured: false
    },
    {
        id: 12,
        year: 2001,
        title: "Rashtriya Rattan Award",
        awardedBy: "National Integration Council",
        category: "National",
        description: "For national service and contribution to society",
        featured: false
    },
    {
        id: 13,
        year: 1979,
        title: "Presidency Guide Award",
        awardedBy: "President of India",
        category: "National",
        description: "Awarded during youth for exemplary leadership and service",
        featured: false
    }
]

export const getFeaturedAwards = () => {
    return awards.filter(award => award.featured).sort((a, b) => b.year - a.year)
}

export const getAwardsByCategory = (category) => {
    return awards.filter(award => award.category === category).sort((a, b) => b.year - a.year)
}

export const getAllAwards = () => {
    return awards.sort((a, b) => b.year - a.year)
}
