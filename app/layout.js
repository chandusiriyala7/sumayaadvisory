import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Dr. Sumaya Advisory | Academic Leadership & Institutional Excellence',
    description: '37+ years of experience in higher education leadership, research excellence, and community development. Expert consultancy for universities, colleges, and institutions.',
    keywords: 'academic leadership, institutional development, NAAC accreditation, higher education consultancy, research grants, women empowerment',
    authors: [{ name: 'Dr. Sumaya' }],
    openGraph: {
        title: 'Dr. Sumaya Advisory | Academic Leadership Consultancy',
        description: 'Expert consultancy for academic institutions seeking excellence, accreditation, and sustainable growth.',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
