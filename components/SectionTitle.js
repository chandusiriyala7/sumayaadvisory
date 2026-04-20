export default function SectionTitle({ title, subtitle, centered = true, light = false }) {
    return (
        <div className={`mb-10 md:mb-16 ${centered ? 'text-center' : ''} slide-in-bottom`}>
            <div className={`inline-flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 ${centered ? 'justify-center' : ''}`}>
                <div className={`w-8 md:w-12 h-[1px] ${light ? 'bg-academic-gold-500/30' : 'bg-academic-gold-500/50'}`}></div>
                <span className={`font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase ${light ? 'text-academic-gold-400' : 'text-academic-gold-600'}`}>The North Star</span>
                <div className={`w-8 md:w-12 h-[1px] ${light ? 'bg-academic-gold-500/30' : 'bg-academic-gold-500/50'}`}></div>
            </div>
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight ${light ? 'text-white' : 'text-academic-blue-900'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed ${light ? 'text-white/70' : 'text-slate-500'}`}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}
