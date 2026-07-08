import fs from 'fs';
import { parseString } from 'xml2js';

const xmlPath = '/Users/shawnmorgan/Desktop/Projects/Manna Church/mannachurch.WordPress.2026-07-08.xml';
const xmlContent = fs.readFileSync(xmlPath, 'utf8');

parseString(xmlContent, (err, result) => {
  if (err) {
    console.error('Error parsing XML:', err);
    return;
  }

  const items = result.rss.channel[0].item || [];
  const locations = [];

  items.forEach((item) => {
    // Check if this is a church post type
    const postType = item['wp:post_type']?.[0];
    const status = item['wp:status']?.[0];

    if (postType === 'church' && status === 'publish') {
      const title = item.title?.[0];
      const link = item.link?.[0];

      // Extract church type from categories
      const categories = item.category || [];
      let churchType = 'unknown';

      categories.forEach((cat) => {
        if (cat.$ && cat.$.domain === 'church-type') {
          churchType = cat._;
        }
      });

      // Skip image entries
      if (title && !title.includes('.svg') && !title.includes('SK2')) {
        locations.push({
          title: title.replace(/\[CDATA\[|\]\]/g, '').trim(),
          type: churchType,
          link: link
        });
      }
    }
  });

  // Separate into Sites and Micro-Sites
  const sites = locations.filter(loc => loc.type === 'Site');
  const microSites = locations.filter(loc => loc.type === 'Micro-Site');

  console.log('\n=== SITES (Church Buildings) ===');
  console.log(`Total: ${sites.length}`);
  sites.forEach((site, i) => {
    console.log(`${i + 1}. ${site.title}`);
  });

  console.log('\n=== MICRO-SITES (Cities) ===');
  console.log(`Total: ${microSites.length}`);
  microSites.forEach((site, i) => {
    console.log(`${i + 1}. ${site.title}`);
  });

  // Save to JSON for next step
  fs.writeFileSync(
    '/Users/shawnmorgan/Desktop/Projects/Manna Church/manna-church-site/scripts/locations-data.json',
    JSON.stringify({ sites, microSites }, null, 2)
  );

  console.log('\n✅ Locations data saved to scripts/locations-data.json');
});
