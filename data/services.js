export const services = [
    {
        id: 1,
        title: "Academic Leadership & Institutional Development",
        category: "Core / Flagship",
        icon: "🎓",
        description: "Comprehensive guidance for institutions seeking to enhance their academic standing, achieve autonomous status, and build sustainable excellence frameworks.",
        targetAudience: "Colleges, autonomous institutions, minority institutions, universities, school trusts",
        servicesIncluded: [
            "Autonomous status guidance",
            "NAAC / AQAR / IQAC mentoring",
            "Academic restructuring & curriculum frameworks",
            "Principal & senior leadership mentoring",
            "Faculty development systems",
            "Institutional vision & 5-year strategic planning"
        ],
        outcome: "Stronger institutions, compliant systems, academic excellence",
        featured: true
    },
    {
        id: 2,
        title: "Accreditation, Quality & Governance Advisory",
        category: "High-Credibility",
        icon: "✓",
        description: "Expert support for institutions preparing for accreditation reviews, ensuring regulatory compliance and governance excellence.",
        targetAudience: "Institutions preparing for accreditation or review",
        servicesIncluded: [
            "NAAC peer-review readiness",
            "Internal academic audits (non-financial)",
            "Governance & compliance advisory",
            "Board of Studies & Academic Council structuring",
            "Policy documentation guidance"
        ],
        outcome: "Regulatory confidence and governance clarity",
        featured: true
    },
    {
        id: 3,
        title: "Research, Grants & Academic Growth Support",
        category: "Research Excellence",
        icon: "🔬",
        description: "Strategic mentoring for building robust research ecosystems, securing competitive funding, and fostering innovation culture.",
        targetAudience: "Colleges, research departments, faculty teams",
        servicesIncluded: [
            "DBT / UGC / Government grant mentoring",
            "Research ecosystem development",
            "Proposal review & improvement",
            "Faculty research capacity building",
            "Innovation & patent guidance (advisory level)"
        ],
        outcome: "Improved funding success and research culture",
        featured: true
    },
    {
        id: 4,
        title: "Women Leadership & Community Development Advisory",
        category: "Social Impact",
        icon: "👥",
        description: "Empowering organizations to design and implement transformative women-focused programs with measurable community impact.",
        targetAudience: "NGOs, trusts, women-focused institutions, CSR teams",
        servicesIncluded: [
            "Women empowerment program design",
            "SHG & livelihood model advisory",
            "Community education frameworks",
            "NGO governance & sustainability guidance",
            "Social impact measurement mentoring"
        ],
        outcome: "Scalable, meaningful community transformation",
        featured: false
    },
    {
        id: 5,
        title: "Policy, Ethics & Educational Governance Mentorship",
        category: "Elite Advisory",
        icon: "⚖️",
        description: "High-level advisory for governing bodies seeking to strengthen institutional stability, ethical leadership, and policy frameworks.",
        targetAudience: "Governing councils, management boards, policy bodies",
        servicesIncluded: [
            "Education policy advisory",
            "Governance best-practice frameworks",
            "Ethical leadership mentoring",
            "Conflict resolution & institutional stability guidance",
            "Advisory for minority & rural education institutions"
        ],
        outcome: "Stable leadership and ethical institutional growth",
        featured: false
    },
    {
        id: 6,
        title: "Talks, Keynotes & Strategic Facilitation",
        category: "Visibility + Influence",
        icon: "🎤",
        description: "Inspiring and credible presentations for conferences, leadership forums, and strategic institutional events.",
        targetAudience: "Institutions, conferences, leadership forums",
        servicesIncluded: [
            "Keynote addresses",
            "Leadership workshops",
            "Faculty orientation programs",
            "Women leadership summits",
            "Strategic retreats facilitation"
        ],
        outcome: "Inspiration backed by credibility and experience",
        featured: false
    },
    {
        id: 7,
        title: "Institution Establishment & Sustainability Services",
        category: "Public Sector / Flagship",
        icon: "🏛️",
        description: "End-to-end support for establishing new Schools, Colleges, Universities and Skill Development Centres — from feasibility to proposal preparation for public sectors, regulatory approval and long-term sustainability.",
        targetAudience: "Trusts, management bodies, government & public sector institutions, CSR-backed education initiatives",
        servicesIncluded: [
            "Feasibility studies & market research",
            "DPR & government/CSR proposal preparation",
            "Statutory approvals, affiliation & accreditation readiness",
            "Campus & infrastructure planning",
            "SOPs, admissions, HR & ERP setup",
            "Curriculum design & faculty development",
            "Branding, website & admission campaigns",
            "Multi-campus expansion & performance monitoring"
        ],
        outcome: "New institutions established with governance strategy and sustained growth built in",
        featured: true,
        subsections: [
            {
                heading: "Establishment of Institutions of Excellence with Governance Strategies Following the Parameters",
                items: [
                    "End-to-end support for establishing Schools, Colleges, Universities, Skill Development Centres and Educational Institutions",
                    "Feasibility Studies & Market Research",
                    "Institutional Vision, Mission & Strategic Planning",
                    "Academic Planning & Programme Design",
                    "Governance Structure Development",
                    "Operational Blueprint & Institutional Framework"
                ]
            },
            {
                heading: "Proposal Preparation & Government Liaison",
                items: [
                    "DPR (Detailed Project Report) Preparation",
                    "Project Proposal Development",
                    "CSR Funding Proposals",
                    "Government Grant & Scheme Proposal Preparation",
                    "Public Sector Tender Documentation",
                    "Documentation for Regulatory Bodies",
                    "Investor & Funding Pitch Deck Preparation"
                ]
            },
            {
                heading: "Regulatory & Compliance Support",
                items: [
                    "Guidance for Statutory Approvals",
                    "University Affiliation Support",
                    "Accreditation Readiness",
                    "Policy Documentation",
                    "Compliance Framework Development",
                    "Quality Assurance Systems"
                ]
            },
            {
                heading: "Infrastructure Planning",
                items: [
                    "Campus Planning Support",
                    "Facility Requirement Planning",
                    "Laboratory & Learning Space Planning",
                    "Smart Campus Strategy",
                    "Technology Integration Roadmap"
                ]
            },
            {
                heading: "Operational Setup",
                items: [
                    "SOP Development",
                    "Administrative Process Design",
                    "Admission Management Framework",
                    "HR Policies & Recruitment Support",
                    "ERP & Digital System Implementation",
                    "Financial Planning & Budget Framework"
                ]
            },
            {
                heading: "Academic Excellence",
                items: [
                    "Curriculum Development",
                    "Outcome-Based Education Framework",
                    "Faculty Recruitment Support",
                    "Faculty Development Programmes",
                    "Academic Audit & Quality Improvement"
                ]
            },
            {
                heading: "Branding & Market Positioning",
                items: [
                    "Institution Branding Strategy",
                    "Name, Identity & Brand Guidelines",
                    "Website Development",
                    "Digital Marketing",
                    "Student Admission Campaigns",
                    "Media & Public Relations"
                ]
            },
            {
                heading: "Sustainability & Growth",
                items: [
                    "Long-term Institutional Development Strategy",
                    "Revenue Diversification Models",
                    "Industry & International Collaborations",
                    "Research & Innovation Ecosystem",
                    "Ranking & Accreditation Strategy",
                    "Institutional Performance Monitoring",
                    "Expansion & Multi-campus Planning"
                ]
            }
        ]
    }
]

export const getServiceById = (id) => {
    return services.find(service => service.id === id)
}

export const getFeaturedServices = () => {
    return services.filter(service => service.featured)
}
