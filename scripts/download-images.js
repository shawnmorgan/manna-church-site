import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the locations data
const locationsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'locations-data.json'), 'utf8')
);

// Unsplash Access Key (free tier)
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY_HERE';

// Create output directory
const outputDir = path.join(__dirname, '../public/assets/images/locations');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Function to search Unsplash
async function searchUnsplash(query) {
  return new Promise((resolve, reject) => {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&client_id=${UNSPLASH_ACCESS_KEY}`;

    https.get(url, (response) => {
      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results.length > 0) {
            resolve(json.results[0].urls.regular);
          } else {
            resolve(null);
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

// Helper to create safe filename
function createSafeFilename(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function processLocations() {
  const results = {
    sites: [],
    microSites: []
  };

  console.log('\n🔍 Processing SITES (Church Buildings)...\n');

  for (const site of locationsData.sites) {
    const query = `${site.title} manna church building`;
    const filename = `${createSafeFilename(site.title)}.jpg`;
    const filepath = path.join(outputDir, filename);

    console.log(`Searching for: ${site.title}`);
    console.log(`  Query: ${query}`);

    try {
      const imageUrl = await searchUnsplash(query);
      if (imageUrl) {
        console.log(`  ✅ Found image, downloading...`);
        await downloadImage(imageUrl, filepath);
        console.log(`  💾 Saved to: ${filename}\n`);
        results.sites.push({
          ...site,
          imageFile: filename,
          imagePath: `/assets/images/locations/${filename}`
        });
      } else {
        console.log(`  ❌ No image found\n`);
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}\n`);
    }
  }

  console.log('\n🔍 Processing MICRO-SITES (Cities)...\n');

  for (const site of locationsData.microSites) {
    const cityName = site.title.replace(/Ft\.|Fort/gi, '').trim();
    const query = `${cityName} city landscape`;
    const filename = `${createSafeFilename(site.title)}.jpg`;
    const filepath = path.join(outputDir, filename);

    console.log(`Searching for: ${site.title}`);
    console.log(`  Query: ${query}`);

    try {
      const imageUrl = await searchUnsplash(query);
      if (imageUrl) {
        console.log(`  ✅ Found image, downloading...`);
        await downloadImage(imageUrl, filepath);
        console.log(`  💾 Saved to: ${filename}\n`);
        results.microSites.push({
          ...site,
          imageFile: filename,
          imagePath: `/assets/images/locations/${filename}`
        });
      } else {
        console.log(`  ❌ No image found\n`);
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}\n`);
    }
  }

  // Save updated locations data
  fs.writeFileSync(
    path.join(__dirname, 'locations-with-images.json'),
    JSON.stringify(results, null, 2)
  );

  console.log('\n✅ Complete! Results saved to locations-with-images.json');
  console.log(`\nSummary:`);
  console.log(`  Sites processed: ${results.sites.length}/${locationsData.sites.length}`);
  console.log(`  Micro-Sites processed: ${results.microSites.length}/${locationsData.microSites.length}`);
}

// Check if API key is set
if (UNSPLASH_ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY_HERE') {
  console.error('\n❌ ERROR: Please set your Unsplash Access Key in the script');
  console.log('\n📝 Get a free API key at: https://unsplash.com/developers');
  console.log('   Then replace YOUR_UNSPLASH_ACCESS_KEY_HERE in this script\n');
  process.exit(1);
}

processLocations().catch(console.error);
