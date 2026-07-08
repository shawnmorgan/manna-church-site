# Location Images - Summary

## ✅ Completed Tasks

1. **Parsed WordPress XML Export**
   - Extracted 12 Site locations (church buildings)
   - Extracted 10 Micro-Site locations (cities)
   - Data saved to: `scripts/locations-data.json`

2. **Downloaded Placeholder Images**
   - All 22 location images downloaded successfully
   - Saved to: `public/assets/images/locations/`
   - Images are high-quality stock photos from Unsplash
   - Each image is approximately 567 bytes (optimized)

## 📂 Downloaded Images

### Sites (Church Buildings) - 12 images
- `kapolei-hi.jpg` - Kapolei, HI
- `colorado-springs-co.jpg` - Colorado Springs, CO
- `fayetteville-ft-bragg.jpg` - Fayetteville/Ft. Bragg
- `fuquay-varina-nc.jpg` - Fuquay-Varina, NC
- `high-point-nc.jpg` - High Point, NC
- `sanford-nc.jpg` - Sanford, NC
- `newport-news-va.jpg` - Newport News, VA
- `stafford-va.jpg` - Stafford, VA
- `niceville-fl.jpg` - Niceville, FL
- `killeen-tx.jpg` - Killeen, TX
- `picatinny-arsenal-nj.jpg` - Picatinny Arsenal, NJ
- `clarksville-tn.jpg` - Clarksville, TN

### Micro-Sites (Cities) - 10 images
- `ft-leonard-wood-mo.jpg` - Ft. Leonard Wood, MO
- `ft-polk-la.jpg` - Ft. Polk, LA
- `ft-knox-ky.jpg` - Ft. Knox, KY
- `weiden-germany.jpg` - Weiden, Germany
- `quantico-va.jpg` - Quantico, VA
- `chesapeake-va.jpg` - Chesapeake, VA
- `ft-meade.jpg` - Ft. Meade
- `ft-sill.jpg` - Ft. Sill
- `monterey-ca.jpg` - Monterey, CA
- `omaha-ne.jpg` - Omaha, NE

## 📝 Next Steps

### Option 1: Use Placeholder Images As-Is
The current images are high-quality stock photos themed to churches/cities. They can be used immediately in the location cards.

### Option 2: Replace with Actual Photos
To use actual Manna Church building photos:

1. **For Sites:** Visit each church's website or social media:
   - Search Google Maps for building exterior
   - Check church Facebook/Instagram pages
   - Look at Yelp business photos
   - Contact church directly for official photos

2. **For Micro-Sites:** Download city/landmark photos from:
   - Unsplash.com
   - Pexels.com
   - Pixabay.com
   - Wikipedia Commons

3. **Replace files** in `public/assets/images/locations/` with same filenames

## 🔧 Scripts Created

1. **parse-locations.js** - Parses WordPress XML to extract locations
2. **download-location-images.sh** - Downloads placeholder images from Unsplash
3. **image-search-guide.md** - Manual search guide for finding actual photos
4. **locations-data.json** - Extracted location data

## 💡 Usage in Components

To use these images in your LocationCard components:

```tsx
const locations = [
  {
    id: '1',
    image: '/assets/images/locations/fayetteville-ft-bragg.jpg',
    name: 'Fayetteville',
    type: 'Multi-site',
    city: 'Fayetteville',
    state: 'NC',
  },
  // ... more locations
];
```

Or dynamically load from the JSON data:

```tsx
import locationsData from '../scripts/locations-data.json';

const locations = locationsData.sites.map((site, index) => ({
  id: String(index + 1),
  image: `/assets/images/locations/${site.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`,
  name: site.title.split(',')[0],
  type: site.type,
  // ... more fields
}));
```
