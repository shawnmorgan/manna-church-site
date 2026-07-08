/**
 * Upload hero collage images to Sanity
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

// 12 collage images currently used in Hero.tsx
const collageImageFiles = [
  'imgi_11_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F9b7ed43dbd1349a39d0ede0d7f190aa2.jpg',
  'imgi_12_IMG_0053-1-scaled.jpg',
  'imgi_14_Feb19Outreach-45_websize.jpg',
  'imgi_15_Header.jpg',
  'imgi_18_IMG_0132-scaled.jpg',
  'imgi_23_Jenny-Fillinger-ServeDay_March2022_Jenny-77-scaled-1-2048x1366.jpg',
  'imgi_26_4Y1A1714-scaled.jpg',
  'imgi_38_NZ7_6135-scaled.jpg',
  // 4 smaller images
  'imgi_2_mkids.jpg',
  'imgi_4_2021-3.jpeg',
  'imgi_37_NZ7_6091-scaled.jpg',
  'imgi_50_Manna-9.24.24-32_websize.jpg',
];

async function uploadCollageImages() {
  console.log('Uploading hero collage images...\n');

  const uploadedImages = [];

  try {
    for (let i = 0; i < collageImageFiles.length; i++) {
      const filename = collageImageFiles[i];
      const filepath = join(__dirname, '../public/assets/images/collage/', filename);

      console.log(`Uploading ${i + 1}/${collageImageFiles.length}: ${filename}`);

      const buffer = fs.readFileSync(filepath);
      const asset = await client.assets.upload('image', buffer, {
        filename: filename,
      });

      uploadedImages.push({
        _type: 'image',
        _key: `collage-${i}`,
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      });

      console.log(`✓ Uploaded`);
    }

    // Update homepage with collage images
    console.log('\nUpdating homepage with collage images...');
    await client
      .patch('homepage')
      .set({
        heroCollageImages: uploadedImages,
      })
      .commit();

    console.log('✓ Homepage updated with collage images');
    console.log(`\n✅ All ${collageImageFiles.length} collage images uploaded! 🎉`);
  } catch (error) {
    console.error('Error uploading collage images:', error);
    process.exit(1);
  }
}

uploadCollageImages();
