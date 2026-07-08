# Manna Church Website

Modern, responsive website built with Astro, React, Tailwind CSS, and Sanity CMS for church directory management.

## Tech Stack

- **Astro 5.x** - Static site generator
- **React 19** - UI components
- **Tailwind CSS 4** - Styling
- **Sanity CMS** - Content management
- **TypeScript** - Type safety

## Project Structure

```
manna-church-site/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── LocationCard.tsx
│   │   ├── LocationSearch.tsx
│   │   ├── ThreeThings.tsx
│   │   └── MannaApp.tsx
│   ├── layouts/
│   │   └── Layout.astro     # Base layout
│   ├── lib/
│   │   └── sanity.ts        # Sanity client config
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── sites/
│   │       └── [slug].astro # Dynamic site pages
│   └── styles/
│       └── global.css       # Global styles + Tailwind
├── public/                  # Static assets
├── astro.config.mjs
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root:

```env
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
```

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Pages

### Homepage (`/`)
- Hero section with location search
- Location cards (8 total in 2 rows)
- "We Do Three Things" section
- Manna App section

### Single Site Page (`/sites/[slug]`)
- Site-specific hero
- Service times
- Contact information
- What to expect section
- Location map

## Components

### `Hero`
Main hero section with background image, logo, title, and subtitle.

**Props:**
- `title`: string
- `subtitle`: string
- `backgroundImage?`: string
- `logo?`: string

### `LocationCard`
Card component for displaying church locations.

**Props:**
- `name`: string
- `type`: string
- `city`: string
- `state`: string
- `image`: string
- `onViewSite?`: () => void

### `LocationSearch`
Search bar for filtering locations.

**Props:**
- `onSearch?`: (query: string) => void

### `ThreeThings`
Section displaying three key pillars/values.

**Props:**
- `title`: string
- `description`: string
- `cards`: Array<{eyebrow, title, body}>

### `MannaApp`
App promotion section with features list.

**Props:**
- `title`: string
- `subtitle`: string
- `features`: string[]
- `mockupImage?`: string

## Sanity CMS Setup

### 1. Create Sanity Project

```bash
npm create sanity@latest
```

Follow the prompts to create a new project.

### 2. Add Schemas

See `sanity-schemas.md` for complete schema definitions. You'll need:

- **Location Schema** - For church locations
- **Site Content Schema** - For homepage content

### 3. Deploy Studio

```bash
cd your-sanity-studio
sanity deploy
```

### 4. Update Environment Variables

Add your Sanity project ID and dataset to `.env`

## Connecting Sanity to Astro

Example of fetching data in an Astro page:

```astro
---
import { sanityClient } from '../lib/sanity';

const homeContent = await sanityClient.fetch(`
  *[_type == "siteContent"][0] {
    heroTitle,
    heroSubtitle,
    "heroBackgroundImage": heroBackgroundImage.asset->url,
    threeThings,
    appSection
  }
`);
---
```

## Styling

### Brand Colors

Defined in `src/styles/global.css`:

- **Orange**: `#f37321`
- **Orange Dark**: `#e78342`
- **Black**: `#222222`
- **Gray Dark**: `#2e2e2e`

### Fonts

- **Archivo** - Main font (100-900 weights)
- **Archivo Narrow** - Labels and eyebrows
- **Inter** - Large numbers (900 weight)

## Deployment

### Build for Production

```bash
npm run build
```

The site will be built to `dist/`

### Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Deploy to Netlify

```bash
netlify deploy --prod
```

## Next Steps

- [ ] Set up Sanity Studio and add content
- [ ] Implement location search functionality
- [ ] Add Google Maps integration for single site pages
- [ ] Set up form handling for contact forms
- [ ] Add SEO meta tags
- [ ] Implement analytics
- [ ] Add accessibility improvements
- [ ] Create 404 page

## Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Sanity Documentation](https://www.sanity.io/docs)
