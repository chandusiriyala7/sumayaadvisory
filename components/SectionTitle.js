export default function SectionTitle({ title, subtitle, centered = true }) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-academic-blue-950 mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={`mt-4 w-24 h-1 bg-academic-gold-500 ${centered ? 'mx-auto' : ''}`}></div>
        </div>
    )
}
