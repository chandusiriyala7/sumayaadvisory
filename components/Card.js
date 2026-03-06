export default function Card({ children, className = '', hover = true }) {
    const hasCustomBg = className.includes('bg-')
    const baseClasses = `${hasCustomBg ? '' : 'glass'} rounded-[2rem] p-8 transition-all duration-500`
    const hoverClasses = hover ? 'hover:shadow-2xl hover:shadow-academic-blue-900/10 hover:-translate-y-2' : ''

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`}>
            {children}
        </div>
    )
}
