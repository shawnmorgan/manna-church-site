# 🚀 Next Steps - Quick Checklist

Follow these steps in order to get your site live for client review.

## ✅ Immediate Actions (30 minutes)

### 1. Create Sanity Account & Project (5 min)
- [ ] Go to https://www.sanity.io/manage
- [ ] Create account if needed
- [ ] Create new project: "Manna Church"
- [ ] Copy the **Project ID**
- [ ] Create dataset: `production` (public)
- [ ] Create API token with "Viewer" permission
- [ ] Save Project ID and Token somewhere safe

### 2. Configure Studio (2 min)
```bash
cd studio
cp .env.template .env
# Edit .env and add your Project ID and dataset
```

Your `studio/.env` should look like:
```env
SANITY_STUDIO_PROJECT_ID=abc123xyz
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_PREVIEW_URL=http://localhost:4321
```

### 3. Deploy Sanity Studio (3 min)
```bash
cd studio
npm install  # if not already done
npm run deploy
```

Choose a hostname like `manna-church`

Your studio URL will be: `https://manna-church.sanity.studio`

### 4. Add Content to Studio (10 min)
- [ ] Open your studio URL
- [ ] Click "Homepage" and fill in all fields
- [ ] Add at least 1-2 locations for testing
- [ ] Publish everything

### 5. Configure Astro Site (2 min)
```bash
# From project root
cp .env.example .env
# Edit .env and add your credentials
```

Your `.env` should look like:
```env
PUBLIC_SANITY_PROJECT_ID=abc123xyz
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token-here
```

### 6. Test Locally (3 min)
```bash
npm run dev
```

Open http://localhost:4321 - you should see your content from Sanity!

### 7. Deploy to Vercel (5 min)
- [ ] Push code to GitHub
- [ ] Go to https://vercel.com
- [ ] Import your GitHub repo
- [ ] Add environment variables (same as .env)
- [ ] Deploy!

### 8. Share with Client 🎉
Send them:
- Studio URL: `https://manna-church.sanity.studio`
- Website URL: `https://your-site.vercel.app`
- Login credentials (they can create Sanity account)

---

## 📖 Need Detailed Instructions?

See `SETUP.md` for step-by-step guide with screenshots and troubleshooting.

## 🎯 What Your Client Gets

### Sanity Studio Features:
✨ **Visual Editing** - Click any element on the preview to edit it
✨ **Live Preview** - See changes before publishing
✨ **Organized Fields** - Helpful labels and descriptions everywhere
✨ **Grouped Content** - Tabs like "Content", "Details", "SEO"
✨ **Smart Validation** - Required fields, character limits, helpful errors

### Website Features:
⚡ **Fast** - Astro-powered static site
⚡ **Beautiful** - Pixel-perfect design with animations
⚡ **Auto-Updates** - Publishes trigger Vercel rebuilds
⚡ **SEO-Ready** - Meta tags and structured data

## ⏱️ Time Estimate

- **First-time setup**: ~30 minutes
- **Adding all 8 locations**: ~20 minutes
- **Total to client-ready**: ~50 minutes

## 🆘 Common Issues

**"Studio won't load"**
- Check Project ID in `studio/.env`
- Make sure dataset exists in Sanity dashboard

**"Website shows no content"**
- Did you publish in Studio? (not just save as draft)
- Check environment variables in Vercel

**"Preview mode not working"**
- Verify API token has "Viewer" permission
- Check token is in Vercel environment variables

---

## 🎊 Ready to Start?

Follow the checklist above, or see `SETUP.md` for detailed walkthrough!
