# Manna Church - Sanity Studio

Enhanced content management studio with Presentation mode for visual editing.

## Features

- **Visual Editing** - Click-to-edit interface with live preview
- **Presentation Mode** - See changes in real-time on your actual website
- **Organized Schemas** - Grouped fields with helpful descriptions
- **Custom Desk Structure** - Clean, organized content hierarchy
- **Singleton Documents** - Homepage and settings as single documents

## First-Time Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.template` to `.env`:

```bash
cp .env.template .env
```

Then edit `.env` and add your Sanity project credentials:

```env
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PREVIEW_URL=http://localhost:4321
```

### 3. Create Sanity Project

If you don't have a Sanity project yet:

1. Go to https://www.sanity.io/manage
2. Click "Create New Project"
3. Copy the Project ID
4. Create a dataset called "production"
5. Add these values to your `.env` file

### 4. Deploy Studio

```bash
npm run deploy
```

This will deploy your studio to `https://your-project.sanity.studio`

## Development

Run the studio locally:

```bash
npm run dev
```

The studio will be available at `http://localhost:3333`

## Content Types

### Homepage (Singleton)
- Hero section content
- Three Things section
- App section

### Locations
- Church location details
- Service times
- Contact information
- Images

### Site Settings (Singleton)
- Global site settings
- Social media links
- Footer content

## Presentation Mode

The studio includes Presentation mode for visual editing:

1. Make sure your Astro site is running (`npm run dev` in parent directory)
2. In the Studio, select a document (Homepage or Location)
3. Click the "Presentation" tab
4. Click elements on the preview to edit them directly

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy studio to Sanity cloud

## Adding Content

1. **Homepage**: Click "Homepage" in sidebar
2. **Locations**: Click "Locations" > "Create new"
3. **Settings**: Click "Site Settings" in sidebar

All fields include helpful descriptions to guide content entry.
