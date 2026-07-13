/**
 * Push the current DESIGN copy into the Sanity `homepage` document so the page
 * looks identical to today, but every string now comes from the CMS (which is
 * what makes Presentation click-to-edit overlays light up).
 *
 * Only patches the fields whose design copy differs from what's stored; images,
 * collage, video and app fields are left untouched.
 *
 * Run: node scripts/push-design-copy.js
 */
import { createClient } from '@sanity/client';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

function tokenFromEnvFile() {
  try {
    const env = fs.readFileSync(join(__dirname, '../.env'), 'utf-8');
    const line = env
      .split('\n')
      .find((l) => l.startsWith('SANITY_API_READ_TOKEN='));
    return line ? line.split('=').slice(1).join('=').trim() : undefined;
  } catch {
    return undefined;
  }
}

const token = process.env.SANITY_AUTH_TOKEN || tokenFromEnvFile();

const client = createClient({
  projectId: '0o0tjt6s',
  dataset: 'production',
  token,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const patch = {
  heroTitle: 'A Vision to Change the World',
  heroSubtitle:
    'Our mission is to glorify God by equipping His people to change their world and by planting churches with the same world-changing vision.',
  threeThingsTitle: 'We Do Three Things',
  threeThingsDescription:
    'Everything we do ladders to three simple commitments. These are not programs - they are the heartbeat of who we are as a church.',
  threeThingsCards: [
    {
      _key: 'card-1',
      eyebrow: '01',
      title: 'Love God',
      body: 'We strive to provide inspiring worship experiences. We call them experiences because our goal is to passionately pursue the Presence of God and make much of His glory. Though we are one church that meets in many locations, each of our experiences is designed to meet this goal.',
    },
    {
      _key: 'card-2',
      eyebrow: '02',
      title: 'Love Each Other',
      body: 'We believe that the church of Jesus Christ is not a building or a location or even just a weekend experience. We believe that the church is people, and people were created to be in relationship. Our church engages in relationship and discipleship through our small group system.',
    },
    {
      _key: 'card-3',
      eyebrow: '03',
      title: 'Love The World',
      body: "We believe we're called to change the world, and we prioritize an intentional outreach strategy by equipping believers to serve our community and the places they live and work. For Manna, serving is an incredible opportunity to show people the love of Jesus, no strings attached.",
    },
  ],
};

async function run() {
  console.log('Patching homepage design copy...');
  const res = await client.patch('homepage').set(patch).commit();
  console.log('✓ Updated homepage:', res._id, 'rev', res._rev);
}

run().catch((err) => {
  console.error('Failed to patch homepage:', err.message);
  process.exit(1);
});
