# Manna Church - Complete Setup Guide

This guide will walk you through setting up the entire system: Sanity Studio with visual editing + Astro website + Vercel deployment.

## 🎯 What You're Getting

- **Enhanced Sanity Studio** with Framer/Webflow-like editing experience
- **Visual Editing** with click-to-edit overlays and live preview
- **Organized Content** with helpful field descriptions and grouping
- **Production-Ready** Astro site ready for Vercel deployment

## Step 1: Create Sanity Project

### 1.1 Sign Up for Sanity

1. Go to https://www.sanity.io
2. Click "Get started" and create an account
3. Verify your email

### 1.2 Create New Project

1. Go to https://www.sanity.io/manage
2. Click "Create project"
3. Enter project name: **Manna Church**
4. Select a plan (Free plan is fine to start)
5. Click "Create project"
6. Copy your **Project ID** (you'll need this soon)

### 1.3 Create Dataset

1. In your project dashboard, click "Datasets"
2. Click "Create dataset"
3. Name it: `production`
4. Set visibility to "Public" (no authentication required for reads)
5. Click "Create"

### 1.4 Create API Token

1. In your project dashboard, click "API" tab
2. Click "Add API token"
3. Name: `Preview Token`
4. Permissions: **Viewer**
5. Click "Create"
6. Copy the token (you won't see it again!)

## Step 2: Configure Studio Environment

### 2.1 Set Up Studio `.env`

```bash
cd studio
cp .env.template .env
```

Edit `studio/.env` and add your values:

```env
SANITY_STUDIO_PROJECT_ID=your-project-id-from-step-1.2
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PREVIEW_URL=http://localhost:4321
```

### 2.2 Install Studio Dependencies

```bash
npm install
```

### 2.3 Test Studio Locally

```bash
npm run dev
```

The studio should open at http://localhost:3333

## Step 3: Configure Astro Site

### 3.1 Set Up Astro `.env`

```bash
# From project root
cp .env.example .env
```

Edit `.env` and add your values:

```env
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-viewer-token-from-step-1.4
```

## Step 4: Deploy Sanity Studio

### 4.1 Deploy to Sanity Cloud

```bash
cd studio
npm run deploy
```

Follow the prompts to choose a studio hostname (e.g., `manna-church`)

Your studio will be available at: `https://manna-church.sanity.studio`

## Step 5: Add Initial Content

### 5.1 Access Your Studio

Go to your deployed studio URL or run `npm run dev` in the `studio/` folder

### 5.2 Create Homepage Content

1. Click **"Homepage"** in the sidebar
2. Fill in the fields:
   - **Hero Title**: "A VISION TO CHANGE THE WORLD" (or customize)
   - **Hero Subtitle**: "Our mission is to glorify God..."
   - **Hero Background Image**: Upload a hero image
3. Scroll to **"Three Things Section"**:
   - Fill in title and description
   - Add exactly 3 cards with eyebrow, title, and body
4. Scroll to **"App Section"**:
   - Fill in app title and subtitle
   - Add 3-6 features
   - Upload app mockup image (optional)
   - Add App Store/Play Store URLs (optional)
5. Click **"Publish"** (top right)

### 5.3 Add Locations

1. Click **"Locations"** > **"Create new"**
2. Fill in:
   - **Location Name**: e.g., "Manna Fayetteville"
   - **Slug**: Click "Generate"
   - **Location Type**: Multi-site or Single-site
   - **City & State**
   - **Featured Image**: Upload location photo
   - **Service Times**: Add service day/time pairs
   - **Pastor, Phone, Email** (optional)
3. Click **"Publish"**
4. Repeat for all locations (you have 8 total)

### 5.4 Configure Site Settings

1. Click **"Site Settings"** in sidebar
2. Fill in:
   - **Site Name**: Manna Church
   - **Site URL**: Your production URL
   - **Main Phone/Email**
   - Upload logos (regular and white version)
3. Add social media URLs
4. Configure footer text and links
5. Click **"Publish"**

## Step 6: Test Locally

### 6.1 Run Both Studio and Astro Site

**Terminal 1 - Astro Site:**
```bash
npm run dev
```
Site runs at http://localhost:4321

**Terminal 2 - Studio (optional for testing Presentation mode):**
```bash
cd studio
npm run dev
```
Studio runs at http://localhost:3333

### 6.2 Test Visual Editing

1. Open Studio at http://localhost:3333
2. Click **"Homepage"** or any **Location**
3. Click the **"Presentation"** tab (top)
4. You should see a live preview of your site
5. Click any text on the preview to jump to that field
6. Make edits and see them update in real-time!

## Step 7: Deploy to Vercel

### 7.1 Push to GitHub

```bash
git add .
git commit -m "Add Sanity CMS integration with visual editing"
git push origin main
```

### 7.2 Connect to Vercel

1. Go to https://vercel.com
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Astro
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 7.3 Add Environment Variables

In Vercel project settings, add:

```
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-viewer-token
```

### 7.4 Deploy

Click "Deploy" and wait for build to complete

### 7.5 Update Studio Preview URL

Once deployed, update your studio `.env`:

```env
SANITY_STUDIO_PREVIEW_URL=https://your-site.vercel.app
```

Then redeploy the studio:

```bash
cd studio
npm run deploy
```

## Step 8: Share with Client

### Your client will have access to:

1. **Sanity Studio**: `https://manna-church.sanity.studio`
   - Clean, organized interface
   - Helpful field descriptions
   - Visual editing with click-to-edit
   - Live preview of changes

2. **Website**: `https://your-site.vercel.app`
   - Fast, modern church website
   - Automatically updates when content is published

## 🎉 You're Done!

Your client now has a premium content management experience with:

- ✅ Visual editing (click-to-edit interface)
- ✅ Live preview (see changes before publishing)
- ✅ Organized schemas (grouped fields with help text)
- ✅ Beautiful, fast website
- ✅ Automatic deployments (Vercel rebuilds on publish)

## 💡 Tips for Your Client

### Publishing Changes

1. Make edits in any document
2. Changes are saved as drafts automatically
3. Click **"Publish"** when ready to go live
4. Website updates automatically (may take 30-60 seconds)

### Visual Editing Mode

1. Select any document (Homepage or Location)
2. Click **"Presentation"** tab
3. Click elements on the preview to edit them
4. See changes update live as you type

### Adding New Locations

1. Click **"Locations"** > **"Create new"**
2. Fill in all required fields (marked with asterisk)
3. Click "Generate" next to Slug field
4. Upload a featured image
5. Publish!

## 🚨 Troubleshooting

### Studio not loading?
- Check that PROJECT_ID and DATASET are correct in `studio/.env`
- Ensure dataset exists in Sanity dashboard
- Clear browser cache and hard refresh

### Website not showing content?
- Check that content is **published** (not just saved as draft)
- Verify env variables in Vercel match your Sanity project
- Check Vercel deployment logs for errors

### Preview mode not working?
- Ensure SANITY_API_TOKEN has "Viewer" permission
- Check that token is added to Vercel environment variables
- Verify preview URL in `studio/.env` matches your deployed site

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Astro Documentation](https://docs.astro.build)
- [Vercel Documentation](https://vercel.com/docs)

## Need Help?

- Sanity Support: https://www.sanity.io/help
- Vercel Support: https://vercel.com/support
