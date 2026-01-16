export default function Card({ children, className = '', hover = true }) {
    const baseClasses = 'bg-white rounded-lg p-6 shadow-sm border border-gray-200'
    const hoverClasses = hover ? 'hover:shadow-md transition-shadow duration-300' : ''

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`}>
            {children}
        </div>
    )
}
