import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from './providers/ThemeProvider'

export const metadata = {
    title: 'The North Star | Academic Leadership & Institutional Excellence',
    description: '37+ years of experience in higher education leadership, research excellence, and community development. Expert consultancy for universities, colleges, and institutions.',
    keywords: 'academic leadership, institutional development, NAAC accreditation, higher education consultancy, research grants, women empowerment',
    authors: [{ name: 'Dr. Sumaya' }],
    openGraph: {
        title: 'The North Star | Academic Leadership Consultancy',
        description: 'Expert consultancy for academic institutions seeking excellence, accreditation, and sustainable growth.',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            </head>
            <body className="transition-colors duration-300">
                <ThemeProvider>
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
