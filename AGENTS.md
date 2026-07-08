# Manna Church Website - Project Memory

## Project Overview

**Live Site:** https://new26.manna.church
**Sanity Studio:** https://new26.manna.church/studio (also deployed at https://manna-church.sanity.studio)
**GitHub Repo:** https://github.com/shawnmorgan/manna-church-site
**Tech Stack:** Astro 7 + React 19 + Sanity CMS v3 + Tailwind CSS 4

## Current Status: ✅ Phase 1 Complete

### Completed Features

1. **Homepage Fully Built & Deployed**
   - Hero section with animated floating image collage (12 randomized images)
   - Location search with 22+ church locations (grid layout: 1 col mobile, 2 col tablet, 4 col desktop)
   - Video section with Military Highway story
   - Three Things section (Love God, Love Each Other, Love The World) with scroll effects
   - Manna App section with iPhone mockup
   - Footer with links and branding

2. **Sanity CMS Integration**
   - Project ID: `0o0tjt6s`
   - Dataset: `production`
   - All content programmatically imported via scripts
   - Schemas: `siteContent`, `location`, `siteSettings`
   - All images and video uploaded to Sanity (100+ assets)
   - Hero collage images: 12+ images in gallery field with batch upload

3. **Mobile & Tablet Responsive Design**
   - Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
   - All components fully responsive with custom useMediaQuery hooks
   - Hero: Scaled typography, hide/reduce images on smaller screens
   - ThreeThings: Vertical stacking on mobile/tablet, disabled sticky effects
   - Locations: Responsive grid system
   - MannaApp: Stacked layout with scaled iPhone mockup
   - Footer: Vertical link columns on mobile/tablet

4. **Interactive Features**
   - Hero images: Hover effects (scale 105%, brightness boost, orange glow, enhanced shadow)
   - Hero images: Click animation (scale down 95%, 200ms feedback)
   - Hero images: Z-index lift on hover for prominence
   - Hero images: Randomize on every page load using random seed

5. **Studio Deployment**
   - Built into `/dist/studio` during build process
   - Accessible at `/studio` path on live site
   - Media Library added to sidebar for image management
   - Grid layout for hero collage images (batch upload enabled)

## Technical Architecture

### File Structure
```
manna-church-site/
├── src/
│   ├── components/
│   │   ├── Hero.tsx                 # Hero with floating images
│   │   ├── LocationSearch.tsx       # Location grid with search
│   │   ├── LocationCard.tsx         # Individual location cards
│   │   ├── VideoSection.tsx         # Video with overlay text
│   │   ├── ThreeThings.tsx          # Sticky scroll cards
│   │   ├── MannaApp.tsx             # App download section
│   │   └── Footer.tsx               # Footer with links
│   ├── pages/
│   │   └── index.astro              # Homepage
│   ├── lib/
│   │   └── sanity.ts                # Sanity client config
│   └── data/
│       └── locations.json           # Fallback location data
├── studio/
│   ├── schemaTypes/
│   │   ├── siteContent.ts           # Homepage content schema
│   │   ├── location.ts              # Location schema
│   │   └── siteSettings.ts          # Site settings schema
│   ├── structure.ts                 # Studio sidebar structure
│   └── sanity.config.ts             # Studio configuration
├── scripts/
│   ├── import-to-sanity.js          # Import homepage + locations
│   ├── upload-assets-to-sanity.js   # Upload hero images, logo, video
│   └── upload-collage-images.js     # Upload 12 hero collage images
├── public/assets/
│   ├── images/
│   │   ├── collage/                 # Hero collage images (fallback)
│   │   └── locations/               # Location images (fallback)
│   ├── videos/
│   │   └── homepage-video.mp4       # Military Highway video
│   └── icons/
│       ├── logo.svg
│       ├── ellipse-1.svg
│       └── ellipse-2.svg
├── package.json                     # Build scripts include studio build
├── vercel.json                      # /studio path rewrites
└── CLAUDE.md                        # This file
```

### Build Process
```bash
npm run build
# 1. Builds Sanity Studio (cd studio && npm install && npm run build)
# 2. Builds Astro site (astro build)
# 3. Copies studio/dist/* to dist/studio/
```

### Environment Variables

**Root `.env`:**
```env
PUBLIC_SANITY_PROJECT_ID=0o0tjt6s
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=[See .env file - not committed to repo]
```

**Studio `.env`:**
```env
SANITY_STUDIO_PROJECT_ID=0o0tjt6s
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PREVIEW_URL=https://new26.manna.church
```

**Deploy Token:** Stored securely in Vercel environment variables (not in repo)

## Issues Encountered & Resolved

### 1. Hero Images Not Randomizing
**Problem:** Images appeared in same order on every page load
**Cause:** `useMemo` was caching based on `content` which doesn't change between loads
**Fix:** Added `randomSeed` state (random on mount) to `useMemo` dependencies
**Location:** `src/components/Hero.tsx:113`

### 2. Location Cards in Weird Format
**Problem:** Cards were individually centered using flex-based row system
**Cause:** Using `flexWrap: 'wrap'` with individual row mapping
**Fix:** Switched to CSS Grid with proper column definitions
**Location:** `src/components/LocationSearch.tsx:217-243`

### 3. Sanity Studio Deployment Failures
**Problem:** Multiple auth errors when trying to deploy studio
**Cause:** Viewer token doesn't have `deployStudio` permission
**Fix:** User created deploy token with proper permissions
**Location:** Used `SANITY_AUTH_TOKEN` environment variable

### 4. Path Issues with Spaces
**Problem:** Shell commands failing with "No such file or directory"
**Cause:** Folder name "Manna Church" has space, not properly escaped
**Fix:** Always use full quoted paths in commands
**Example:** `cd "/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site"`

### 5. Studio Not Accessible at /studio
**Problem:** 404 error at new26.manna.church/studio
**Cause:** Studio only deployed to manna-church.sanity.studio
**Fix:** Modified build process to copy studio to dist/studio, added vercel.json rewrites
**Status:** ⏳ Awaiting deployment verification

### 6. Build Error - Missing Visual Editing Package
**Problem:** Build failed due to missing `@sanity/visual-editing` export
**Cause:** Package installed but API changed
**Fix:** Temporarily disabled VisualEditing component
**Location:** `src/components/VisualEditing.tsx:2`

## Known Warnings (Non-Breaking)

1. **Hydration Mismatch (Hero Images)**
   - Expected behavior: Images randomize on each load (different server vs client render)
   - Not a bug, just React warning about intentional mismatch

2. **Sanity v4 Upgrade Warning**
   - Local: v3.99.0
   - Runtime: v4.22.0 (auto-updated on sanity.studio)
   - Required: Node 20+ for v4
   - Current: Node 22.12.0 ✓
   - Action: Can upgrade when ready

3. **Astro Request Headers Warning**
   - `Astro.request.headers` used on prerendered page
   - Not impacting functionality
   - Can be addressed if server rendering is needed

## Content Details

### Homepage Sections (in Sanity: `homepage` document)

1. **Hero Section**
   - `heroTitle`: "One Church, Multiple Locations"
   - `heroSubtitle`: Mission statement
   - `heroBackgroundImage`: Main background
   - `heroLogo`: Manna Church logo SVG
   - `heroCollageImages`: Array of 12+ images (randomized on load)

2. **Video Section**
   - `videoUrl`: Military Highway video file
   - `videoText`: Description text below video

3. **Three Things Section**
   - `threeThingsTitle`: "We Do Three Things"
   - `threeThingsDescription`: Subtitle
   - `threeThingsCards[]`: Array of 3 cards (eyebrow, title, body, icon)

4. **Manna App Section**
   - `appTitle`: "Manna On the Move"
   - `appSubtitle`: Description
   - `appFeatures[]`: Array of 4 features
   - `appMockupImage`: iPhone mockup (hardcoded in component)
   - `appStoreUrl`: Apple App Store URL
   - `playStoreUrl`: Google Play Store URL

### Locations (22 total)

**Major Locations:**
- Fayetteville Central (NC) - City Site
- Sanford (NC) - City Site
- High Point (NC) - City Site
- Niceville (FL) - City Site
- Colonial Heights (VA) - City Site
- Fort Cavazos (TX) - Micro Site
- Jacksonville (NC) - Neighborhood Site
- Spring Lake (NC) - Micro Site

**All locations have:**
- Name, slug, type (City Site, Neighborhood Site, Micro Site)
- City, state, address
- Featured image
- Service times, pastor info, contact details

## Next Phase: Micro-Site Pages & Directory

### Tasks to Complete

1. **Validate Sanity Studio Works at /studio**
   - User needs to verify: https://new26.manna.church/studio
   - Test content editing
   - Test image uploads
   - Verify changes reflect on live site

2. **Build Individual Location Pages**
   - Create dynamic route: `src/pages/[slug].astro`
   - Design location page template
   - Include: hero image, service times, pastor info, map, contact
   - Connect to Sanity location data

3. **Verify Site Directory Accuracy**
   - Review all 22 locations for correct information
   - Update any outdated details
   - Ensure service times are current
   - Verify addresses and contact info

4. **Additional Pages (if needed)**
   - About page
   - Contact page
   - Other micro-site specific pages

## Development Commands

```bash
# Start dev servers
npm run dev                    # Astro dev server (localhost:4321)
cd studio && npm run dev       # Sanity Studio (localhost:3333)

# Build for production
npm run build                  # Builds both Astro + Studio

# Deploy Studio (if needed)
cd studio && npx sanity deploy

# Import content (one-time setup)
node scripts/import-to-sanity.js
node scripts/upload-assets-to-sanity.js
node scripts/upload-collage-images.js
```

## Git Workflow

```bash
git status
git add .
git commit -m "Descriptive message"
git push origin main
```

**Recent Commits:**
- `164cc11` - Configure Studio to be accessible at /studio path
- `2a97f21` - Add comprehensive mobile/tablet responsive design and interactive features
- `465bdd8` - Configure Sanity Studio hostname for deployment
- `8ca2025` - Complete Sanity CMS integration with all content and assets

## Important Notes

1. **Image Randomization:** Hero collage images shuffle on every page load (by design)
2. **Studio Access:** Users can edit at either `/studio` on main site OR `manna-church.sanity.studio`
3. **Content Updates:** Changes in Sanity appear immediately on live site (no rebuild needed)
4. **Responsive Testing:** Always test on mobile (375px), tablet (768px), and desktop (1440px)
5. **Dev Server Caching:** If Sanity changes don't appear locally, restart dev server or hard refresh

## Contact & Resources

- **Sanity Dashboard:** https://www.sanity.io/manage/personal/project/0o0tjt6s
- **Vercel Dashboard:** (Check user's Vercel account for deployment logs)
- **Astro Docs:** https://docs.astro.build
- **Sanity Docs:** https://www.sanity.io/docs

---

**Last Updated:** 2026-07-08
**Phase Status:** Phase 1 Complete ✓ | Phase 2 Ready to Start (pending Studio validation)
