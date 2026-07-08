/**
 * Import existing hardcoded content into Sanity
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read locations data
const locationsData = JSON.parse(
  fs.readFileSync(join(__dirname, '../src/data/locations.json'), 'utf-8')
);

const client = createClient({
  projectId: '0o0tjt6s',
  dataset: 'production',
  token: 'skvTrSdZK84Ksj6gSx5xXvuwDIDFhejB7yulcqvHxxm6bZhStZpD41Xd15AohTkaBpu75JZdIorSx8PCQIzNQqC3VLiaijibNlsHXgc5B6W5gkXSmItEWLDYikgPh01Ok68ih2EMxU8V2GwaltXxe6BYvV2av2aTD6GfawgsGqnaamd5ePkO',
  useCdn: false,
  apiVersion: '2024-01-01',
});

// Homepage content
const homepageContent = {
  _id: 'homepage',
  _type: 'siteContent',
  heroTitle: 'One Church, Multiple Locations',
  heroSubtitle: 'Manna Church has been serving military communities for over 40 years. Find a location near you and join us this Sunday.',
  videoText: 'Manna Church has been serving military communities for over 40 years and is strategically planting expressions of Manna Church along the Military Highway. We believe that the Church exists wherever God\'s people gather. An expression of Manna Church could meet in its own designated building, a local school or gym, a home, or even online.',
  threeThingsTitle: 'We Do Three Things',
  threeThingsDescription: 'Everything we do ladders to three simple commitments. These are not programs - they are the heartbeat of who we are as a church.',
  threeThingsCards: [
    {
      _key: 'card-1',
      eyebrow: 'ONE',
      title: 'Love God',
      body: 'We believe that loving God is the foundation of everything we do. It\'s not about religion - it\'s about relationship. We gather weekly to worship, learn, and grow together in our faith.',
    },
    {
      _key: 'card-2',
      eyebrow: 'TWO',
      title: 'Love People',
      body: 'Jesus showed us what it means to love people well. We\'re committed to building authentic community where everyone belongs, serving our local communities, and demonstrating the love of Jesus in practical ways.',
    },
    {
      _key: 'card-3',
      eyebrow: 'THREE',
      title: 'Make Disciples',
      body: 'We believe the best way to make disciples is through multiplication. Every person has a unique calling and gifting. Serving is an incredible opportunity to show people the love of Jesus, no strings attached.',
    },
  ],
  appTitle: 'Manna On the Move',
  appSubtitle: 'Download the Manna Church app and stay connected to your community.',
  appFeatures: [
    { _key: 'feat-1', feature: 'Watch sermons on demand' },
    { _key: 'feat-2', feature: 'Get event reminders' },
    { _key: 'feat-3', feature: 'Connect with your group' },
    { _key: 'feat-4', feature: 'Give online easily' },
  ],
  appStoreUrl: '#',
  playStoreUrl: '#',
};

// Location documents
const locationDocuments = locationsData.map((loc) => ({
  _type: 'location',
  name: loc.name,
  slug: {
    _type: 'slug',
    current: loc.id,
  },
  type: loc.type,
  city: loc.city,
  state: loc.state,
  badge: loc.badge,
  // Note: Images will need to be uploaded separately or via asset upload
}));

async function importData() {
  console.log('Starting import...\n');

  try {
    // Create homepage content
    console.log('Creating homepage content...');
    await client.createOrReplace(homepageContent);
    console.log('✓ Homepage content created\n');

    // Create locations
    console.log(`Creating ${locationDocuments.length} locations...`);
    for (const location of locationDocuments) {
      await client.create(location);
      console.log(`✓ Created: ${location.name}`);
    }
    console.log('\n✓ All locations created\n');

    console.log('Import complete! 🎉');
    console.log('\nNote: You still need to upload images for:');
    console.log('- Hero background image');
    console.log('- Hero logo');
    console.log('- Homepage video');
    console.log('- Location featured images');
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
}

importData();
