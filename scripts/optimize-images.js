/**
 * Image Optimization Script
 *
 * This script helps optimize images for the website by:
 * 1. Converting images to WebP format
 * 2. Compressing images to reduce file size
 * 3. Generating responsive image variants
 *
 * Usage:
 *   npm install --save-dev sharp
 *   node scripts/optimize-images.js
 *
 * Requirements:
 *   - sharp (npm package for image processing)
 */

import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

// Check if sharp is available
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (error) {
  console.error('❌ Sharp is not installed. Please run: npm install --save-dev sharp');
  process.exit(1);
}

// Configuration
const CONFIG = {
  inputDir: './public/images',
  outputDir: './public/images/optimized',
  formats: ['.jpg', '.jpeg', '.png'],
  quality: {
    webp: 80,
    jpeg: 85,
    png: 90,
  },
  // Responsive sizes for different screen sizes
  sizes: [
    { width: 1920, suffix: '-xl' }, // Desktop large
    { width: 1280, suffix: '-lg' }, // Desktop
    { width: 768, suffix: '-md' },  // Tablet
    { width: 480, suffix: '-sm' },  // Mobile
  ],
};

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputDir) {
  const ext = extname(inputPath).toLowerCase();
  const name = basename(inputPath, ext);

  console.log(`\n🔄 Processing: ${basename(inputPath)}`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`   Original: ${metadata.width}x${metadata.height}, ${(metadata.size / 1024).toFixed(2)}KB`);

    // Convert to WebP (best compression)
    const webpPath = join(outputDir, `${name}.webp`);
    await image
      .webp({ quality: CONFIG.quality.webp })
      .toFile(webpPath);

    const webpSize = (await sharp(webpPath).metadata()).size;
    console.log(`   ✅ WebP: ${(webpSize / 1024).toFixed(2)}KB (${((1 - webpSize / metadata.size) * 100).toFixed(1)}% smaller)`);

    // Generate responsive variants
    for (const size of CONFIG.sizes) {
      if (metadata.width > size.width) {
        const responsivePath = join(outputDir, `${name}${size.suffix}.webp`);
        await sharp(inputPath)
          .resize(size.width, null, { withoutEnlargement: true })
          .webp({ quality: CONFIG.quality.webp })
          .toFile(responsivePath);

        const responsiveSize = (await sharp(responsivePath).metadata()).size;
        console.log(`   ✅ ${size.width}px: ${(responsiveSize / 1024).toFixed(2)}KB`);
      }
    }

    return true;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return false;
  }
}

async function processDirectory(dir, outputDir) {
  await ensureDir(outputDir);

  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = join(dir, file.name);

    if (file.isDirectory()) {
      // Recursively process subdirectories
      const subOutputDir = join(outputDir, file.name);
      await processDirectory(filePath, subOutputDir);
    } else if (CONFIG.formats.includes(extname(file.name).toLowerCase())) {
      await optimizeImage(filePath, outputDir);
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📂 Input directory: ${CONFIG.inputDir}`);
  console.log(`📂 Output directory: ${CONFIG.outputDir}\n`);

  const startTime = Date.now();

  await processDirectory(CONFIG.inputDir, CONFIG.outputDir);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\n✨ Optimization complete! (${duration}s)`);
  console.log('\n📋 Next steps:');
  console.log('   1. Review optimized images in ./public/images/optimized');
  console.log('   2. Replace original images with optimized versions');
  console.log('   3. Update image paths to use .webp extension');
  console.log('   4. Test the website to ensure all images load correctly\n');
}

main().catch(console.error);
