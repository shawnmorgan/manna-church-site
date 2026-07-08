/**
 * Upload all images and video to Sanity
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const client = createClient({
  projectId: '0o0tjt6s',
  dataset: 'production',
  token: 'skvTrSdZK84Ksj6gSx5xXvuwDIDFhejB7yulcqvHxxm6bZhStZpD41Xd15AohTkaBpu75JZdIorSx8PCQIzNQqC3VLiaijibNlsHXgc5B6W5gkXSmItEWLDYikgPh01Ok68ih2EMxU8V2GwaltXxe6BYvV2av2aTD6GfawgsGqnaamd5ePkO',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const locationsData = JSON.parse(
  fs.readFileSync(join(__dirname, '../src/data/locations.json'), 'utf-8')
);

async function uploadAsset(filePath, filename) {
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload('image', buffer, {
    filename: filename,
  });
  return asset;
}

async function uploadVideo(filePath, filename) {
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload('file', buffer, {
    filename: filename,
  });
  return asset;
}

async function uploadAllAssets() {
  console.log('Starting asset upload...\n');

  try {
    // Upload hero background - using first collage image
    console.log('Uploading hero background...');
    const heroImage = await uploadAsset(
      join(__dirname, '../public/assets/images/collage/imgi_11_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F9b7ed43dbd1349a39d0ede0d7f190aa2.jpg'),
      'hero-background.jpg'
    );
    console.log('✓ Hero background uploaded');

    // Upload logo
    console.log('Uploading hero logo...');
    const heroLogo = await uploadAsset(
      join(__dirname, '../public/assets/icons/logo.svg'),
      'manna-logo.svg'
    );
    console.log('✓ Hero logo uploaded');

    // Upload video
    console.log('Uploading homepage video...');
    const videoAsset = await uploadVideo(
      join(__dirname, '../public/assets/videos/homepage-video.mp4'),
      'homepage-video.mp4'
    );
    console.log('✓ Homepage video uploaded');

    // Update homepage with assets
    console.log('\nUpdating homepage with assets...');
    await client
      .patch('homepage')
      .set({
        heroBackgroundImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: heroImage._id,
          },
        },
        heroLogo: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: heroLogo._id,
          },
        },
        videoUrl: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: videoAsset._id,
          },
        },
      })
      .commit();
    console.log('✓ Homepage updated with assets');

    // Upload location images
    console.log('\nUploading location images...');
    for (const location of locationsData) {
      const imagePath = join(__dirname, `../public${location.image}`);

      if (fs.existsSync(imagePath)) {
        const asset = await uploadAsset(imagePath, `${location.id}.jpg`);

        // Find the location document by slug and update it
        const locations = await client.fetch(
          `*[_type == "location" && slug.current == $slug][0]`,
          { slug: location.id }
        );

        if (locations) {
          await client
            .patch(locations._id)
            .set({
              featuredImage: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: asset._id,
                },
              },
            })
            .commit();
          console.log(`✓ ${location.name} - image uploaded`);
        }
      } else {
        console.log(`⚠ ${location.name} - image not found`);
      }
    }

    console.log('\n✅ All assets uploaded successfully! 🎉');
    console.log('\nYou can now publish the homepage in Sanity Studio.');
  } catch (error) {
    console.error('Error uploading assets:', error);
    process.exit(1);
  }
}

uploadAllAssets();
