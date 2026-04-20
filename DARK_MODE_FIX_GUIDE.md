# 🌓 Dark Mode Fix Guide

## Pages That Need Dark Mode Updates

The following pages need dark mode classes added:
1. `app/research/page.js`
2. `app/services/page.js`
3. `app/social-impact/page.js`

## Quick Fix Pattern

For each page, apply these changes:

### 1. Add 'use client' Directive (Top of file)
```javascript
'use client'
```

### 2. Import Framer Motion
```javascript
import { motion } from 'framer-motion'
import { pageTransition } from '@/lib/animations'
```

### 3. Wrap Return with Motion
```javascript
export default function PageName() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* existing content */}
    </motion.div>
  )
}
```

### 4. Add Dark Mode Classes

Replace all instances of these patterns:

#### Background Colors
- `bg-white` → `bg-white dark:bg-academic-blue-950`
- `bg-slate-50` → `bg-slate-50 dark:bg-academic-blue-900/30`
- `bg-slate-100` → `bg-slate-100 dark:bg-academic-blue-800`
- `bg-slate-900` → `bg-slate-900 dark:bg-black`
- `bg-slate-950` → `bg-slate-950 dark:bg-black`

#### Text Colors
- `text-academic-blue-900` → `text-academic-blue-900 dark:text-academic-blue-50`
- `text-academic-blue-950` → `text-academic-blue-950 dark:text-academic-blue-50`
- `text-slate-500` → `text-slate-500 dark:text-slate-400`
- `text-slate-600` → `text-slate-600 dark:text-slate-300`
- `text-slate-700` → `text-slate-700 dark:text-slate-300`
- `text-academic-gold-600` → `text-academic-gold-600 dark:text-academic-gold-400`
- `text-academic-gold-700` → `text-academic-gold-700 dark:text-academic-gold-300`

#### Border Colors
- `border-slate-100` → `border-slate-100 dark:border-academic-blue-800`
- `border-slate-200` → `border-slate-200 dark:border-academic-blue-800`
- `border-academic-gold-200` → `border-academic-gold-200 dark:border-academic-gold-500/50`

#### Add Transitions
Add to all `<section>` tags:
```
transition-colors duration-300
```

## Automated Fix Script

Run this command to automatically add dark mode classes:

```bash
# For research page
sed -i '' 's/bg-white"/bg-white dark:bg-academic-blue-950 transition-colors duration-300"/g' app/research/page.js
sed -i '' 's/bg-slate-50"/bg-slate-50 dark:bg-academic-blue-900\/30 transition-colors duration-300"/g' app/research/page.js
sed -i '' 's/text-academic-blue-900/text-academic-blue-900 dark:text-academic-blue-50/g' app/research/page.js
sed -i '' 's/text-academic-blue-950/text-academic-blue-950 dark:text-academic-blue-50/g' app/research/page.js
sed -i '' 's/text-slate-500/text-slate-500 dark:text-slate-400/g' app/research/page.js
sed -i '' 's/text-slate-600/text-slate-600 dark:text-slate-300/g' app/research/page.js
sed -i '' 's/border-slate-100/border-slate-100 dark:border-academic-blue-800/g' app/research/page.js
sed -i '' 's/border-slate-200/border-slate-200 dark:border-academic-blue-800/g' app/research/page.js

# For services page  
sed -i '' 's/bg-white"/bg-white dark:bg-academic-blue-950 transition-colors duration-300"/g' app/services/page.js
sed -i '' 's/bg-slate-50"/bg-slate-50 dark:bg-academic-blue-900\/30 transition-colors duration-300"/g' app/services/page.js
sed -i '' 's/text-academic-blue-900/text-academic-blue-900 dark:text-academic-blue-50/g' app/services/page.js
sed -i '' 's/text-academic-blue-950/text-academic-blue-950 dark:text-academic-blue-50/g' app/services/page.js
sed -i '' 's/text-slate-500/text-slate-500 dark:text-slate-400/g' app/services/page.js
sed -i '' 's/text-slate-600/text-slate-600 dark:text-slate-300/g' app/services/page.js
sed -i '' 's/border-slate-100/border-slate-100 dark:border-academic-blue-800/g' app/services/page.js

# For social-impact page
sed -i '' 's/bg-white"/bg-white dark:bg-academic-blue-950 transition-colors duration-300"/g' app/social-impact/page.js
sed -i '' 's/bg-slate-50"/bg-slate-50 dark:bg-academic-blue-900\/30 transition-colors duration-300"/g' app/social-impact/page.js
sed -i '' 's/bg-slate-900/bg-slate-900 dark:bg-black/g' app/social-impact/page.js
sed -i '' 's/text-academic-blue-900/text-academic-blue-900 dark:text-academic-blue-50/g' app/social-impact/page.js
sed -i '' 's/text-academic-blue-950/text-academic-blue-950 dark:text-academic-blue-50/g' app/social-impact/page.js
sed -i '' 's/text-slate-500/text-slate-500 dark:text-slate-400/g' app/social-impact/page.js
sed -i '' 's/text-slate-600/text-slate-600 dark:text-slate-300/g' app/social-impact/page.js
sed -i '' 's/border-slate-100/border-slate-100 dark:border-academic-blue-800/g' app/social-impact/page.js
```

## Manual Verification Checklist

After applying fixes, verify:

- [ ] All sections have `transition-colors duration-300`
- [ ] All white backgrounds have dark mode alternatives
- [ ] All text colors are readable in dark mode
- [ ] All borders are visible in dark mode
- [ ] Hover states work in both modes
- [ ] Images have proper overlays in dark mode
- [ ] Forms and inputs are styled for dark mode

## Testing

1. Start dev server: `npm run dev`
2. Toggle theme using navbar button
3. Navigate to each page
4. Verify all elements are visible and styled correctly
5. Test hover states and interactions

## Common Issues & Solutions

### Issue: Text not visible in dark mode
**Solution**: Add `dark:text-slate-100` or `dark:text-academic-blue-50`

### Issue: Cards blend into background
**Solution**: Add `dark:bg-academic-blue-900/50` and `dark:border-academic-blue-800`

### Issue: Buttons not visible
**Solution**: Update button classes in globals.css (already done)

### Issue: Images too bright in dark mode
**Solution**: Add overlay: `dark:from-academic-blue-950/80`

## Quick Reference

### Most Common Dark Mode Classes
```
Backgrounds:
- dark:bg-academic-blue-950 (main bg)
- dark:bg-academic-blue-900 (cards)
- dark:bg-academic-blue-900/50 (semi-transparent)
- dark:bg-academic-blue-800 (borders)

Text:
- dark:text-academic-blue-50 (headings)
- dark:text-slate-300 (body)
- dark:text-slate-400 (muted)
- dark:text-academic-gold-400 (accent)

Borders:
- dark:border-academic-blue-800
- dark:border-academic-gold-500/50
```

## Result

After applying these changes, all pages will have:
✅ Proper dark mode support
✅ Smooth theme transitions
✅ Readable text in both modes
✅ Consistent styling across the site
✅ Professional appearance in dark mode
