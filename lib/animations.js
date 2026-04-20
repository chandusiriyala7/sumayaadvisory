// Framer Motion animation variants - Optimized for performance

// Shared easing function
const easeOut = [0.25, 0.4, 0.25, 1]

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.4,
            ease: easeOut,
        }
    },
}

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.4,
        }
    },
}

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
            duration: 0.3,
            ease: easeOut,
        }
    },
}

export const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.4,
            ease: easeOut,
        }
    },
}

export const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.4,
            ease: easeOut,
        }
    },
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        }
    },
}

export const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        }
    },
}

export const hoverLift = {
    rest: { y: 0, scale: 1 },
    hover: { 
        y: -6, 
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        }
    },
}

export const pageTransition = {
    initial: { opacity: 0, y: 10 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        }
    },
    exit: { 
        opacity: 0,
        transition: {
            duration: 0.2,
        }
    },
}

