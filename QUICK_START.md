# 🚀 Quick Start Guide

## Running Your Premium Website

### 1. Start the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌓 Theme Switching

### For Users
- Click the **sun/moon toggle** in the navbar (top right)
- Theme preference is automatically saved
- System preference is detected on first visit

### For Developers
The theme system uses `next-themes`:
```javascript
import { useTheme } from 'next-themes'

const { theme, setTheme } = useTheme()
// theme: 'light' | 'dark' | 'system'
```

---

## ✨ Using Animations

### Animated Section Component
Wrap any content for scroll-triggered animations:

```javascript
import AnimatedSection from '@/components/ui/AnimatedSection'

<AnimatedSection animation="fadeUp" delay={0.2}>
  <YourContent />
</AnimatedSection>
```

**Available animations:**
- `fadeUp` - Fade in from bottom (default)
- `fadeDown` - Fade in from top
- `fadeLeft` - Slide in from left
- `fadeRight` - Slide in from right
- `scale` - Scale up with fade
- `fade` - Simple fade in

### Framer Motion Directly
```javascript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <YourContent />
</motion.div>
```

### Using Animation Variants
```javascript
import { fadeInUp, staggerContainer } from '@/lib/animations'

<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={fadeInUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🎨 Dark Mode Styling

### Using Tailwind Classes
```javascript
<div className="bg-white dark:bg-academic-blue-950 text-gray-900 dark:text-gray-100">
  Content adapts to theme
</div>
```

### Using CSS Variables
```css
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
}
```

**Available CSS variables:**
- `--bg-primary` - Main background
- `--bg-secondary` - Secondary background
- `--bg-tertiary` - Tertiary background
- `--text-primary` - Primary text
- `--text-secondary` - Secondary text
- `--text-muted` - Muted text
- `--border-color` - Border color
- `--card-bg` - Card background
- `--color-accent` - Accent color

---

## 🎯 Premium Components

### Gradient Blobs
Animated background effects:
```javascript
import GradientBlob from '@/components/ui/GradientBlob'

<GradientBlob 
  className="top-0 right-0 w-96 h-96 bg-academic-gold-500/20" 
  delay={0} 
/>
```

### Theme Toggle
Already integrated in Navbar, but can be used anywhere:
```javascript
import ThemeToggle from '@/components/ui/ThemeToggle'

<ThemeToggle />
```

### Premium Card
Enhanced card with spotlight effect:
```javascript
import Card from '@/components/Card'

<Card hover={true} className="p-8">
  <YourContent />
</Card>
```

---

## 🎨 Custom Styling

### Gradient Text
```javascript
<span className="gradient-text">
  Premium Text
</span>
```

### Glassmorphism
```javascript
<div className="glass dark:bg-academic-blue-900/50">
  Glass effect content
</div>
```

### Glow Effects
```javascript
<div className="glow-gold">
  Glowing element
</div>
```

### Gradient Borders
```javascript
<div className="gradient-border">
  Content with animated gradient border
</div>
```

---

## 📱 Responsive Design

All components are fully responsive. Use Tailwind breakpoints:

```javascript
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive text
</div>
```

**Breakpoints:**
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+
- `2xl:` - 1536px+

---

## ⚡ Performance Tips

### 1. Lazy Load Heavy Animations
```javascript
import { useInView } from 'react-intersection-observer'

const [ref, inView] = useInView({ triggerOnce: true })

<div ref={ref}>
  {inView && <HeavyAnimation />}
</div>
```

### 2. Optimize Images
Always use Next.js Image component:
```javascript
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

### 3. Reduce Motion Support
Animations automatically respect user preferences. To manually check:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

---

## 🎨 Color Palette

### Academic Blue
- `academic-blue-50` to `academic-blue-950`
- Primary brand color
- Use for backgrounds, text, borders

### Academic Gold
- `academic-gold-50` to `academic-gold-900`
- Accent color
- Use for highlights, CTAs, important elements

### Usage Examples
```javascript
// Light mode
<div className="bg-academic-blue-50 text-academic-blue-900">

// Dark mode
<div className="dark:bg-academic-blue-950 dark:text-academic-blue-50">

// Accent
<span className="text-academic-gold-500 dark:text-academic-gold-400">
```

---

## 🔧 Customization

### Adding New Animations
Edit `lib/animations.js`:
```javascript
export const myCustomAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  },
}
```

### Adding New Theme Colors
Edit `app/globals.css`:
```css
:root {
  --my-custom-color: #hexcode;
}

.dark {
  --my-custom-color: #hexcode;
}
```

### Adding New Tailwind Animations
Edit `tailwind.config.js`:
```javascript
animation: {
  'my-animation': 'myKeyframes 2s ease-in-out infinite',
},
keyframes: {
  myKeyframes: {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
  },
}
```

---

## 🐛 Troubleshooting

### Theme Not Switching
1. Check if `ThemeProvider` wraps your app in `layout.js`
2. Verify `suppressHydrationWarning` is on `<html>` tag
3. Clear browser cache and localStorage

### Animations Not Working
1. Ensure `framer-motion` is installed
2. Check if component is wrapped in motion component
3. Verify viewport detection with `useInView`

### Dark Mode Styles Not Applying
1. Check Tailwind config has `darkMode: 'class'`
2. Verify `dark:` prefix on classes
3. Ensure CSS variables are defined for both themes

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [next-themes Docs](https://github.com/pacocoursey/next-themes)

---

## 🎉 You're All Set!

Your premium consultation website is ready to impress visitors with:
- ✨ Smooth animations
- 🌓 Beautiful dark/light modes
- 💎 Premium visual effects
- 📱 Perfect responsiveness
- ⚡ Optimized performance

**Happy coding!** 🚀
