/**
 * Image optimization script.
 * Run: node scripts/optimize-images.mjs
 *
 * Reads all images from public/photos/<folder>/
 * Compresses them in-place (replaces originals with optimized versions)
 * Also outputs a WebP copy alongside each JPEG/PNG
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PHOTOS_DIR = join(ROOT, "public", "photos");

// Quality / resize settings per folder name (partial match)
const PROFILES = {
  hero:          { width: 1920, quality: 82, webp: true },
  rooms:         { width: 1200, quality: 80, webp: true },
  gallery:       { width: 1100, quality: 78, webp: true },
  about:         { width: 1100, quality: 80, webp: true },
  experience:    { width: 1200, quality: 80, webp: true },
  location:      { width: 1100, quality: 80, webp: true },
  logos:         { width: null, quality: 90, webp: false }, // don't resize logos
  default:       { width: 1200, quality: 80, webp: true },
};

function getProfile(folderName) {
  const lower = folderName.toLowerCase();
  for (const [key, profile] of Object.entries(PROFILES)) {
    if (lower.includes(key)) return profile;
  }
  return PROFILES.default;
}

async function collectImages(dir) {
  const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".tiff", ".tif"]);
  const results = [];

  async function walk(current) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (exts.has(extname(entry.name).toLowerCase())) {
        // Skip files that are already WebP copies we generated
        if (entry.name.endsWith(".webp") && entry.name.includes("__opt")) continue;
        results.push(full);
      }
    }
  }

  await walk(dir);
  return results;
}

function folderName(filePath) {
  // Return the immediate parent folder relative to PHOTOS_DIR
  const rel = filePath.replace(PHOTOS_DIR + "\\", "").replace(PHOTOS_DIR + "/", "");
  return rel.split(/[\\/]/)[0];
}

function formatBytes(bytes) {
  return bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(0)} KB`
    : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function optimizeImage(filePath) {
  const folder = folderName(filePath);
  const profile = getProfile(folder);
  const ext = extname(filePath).toLowerCase();
  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;

  // Read metadata with a separate instance so the processing pipeline isn't consumed
  let pipeline = sharp(filePath);

  if (profile.width) {
    const meta = await sharp(filePath).metadata();
    if (meta.width && meta.width > profile.width) {
      pipeline = pipeline.resize({ width: profile.width, withoutEnlargement: true });
    }
  }

  // Re-encode the original format in-place
  let optimized;
  if (ext === ".jpg" || ext === ".jpeg") {
    optimized = await pipeline.jpeg({ quality: profile.quality, mozjpeg: true }).toBuffer();
  } else if (ext === ".png") {
    optimized = await pipeline.png({ compressionLevel: 8, quality: profile.quality }).toBuffer();
  } else if (ext === ".webp") {
    optimized = await pipeline.webp({ quality: profile.quality }).toBuffer();
  } else {
    // TIFF → convert to JPEG
    const newPath = filePath.replace(/\.(tiff|tif)$/i, ".jpg");
    optimized = await pipeline.jpeg({ quality: profile.quality, mozjpeg: true }).toBuffer();
    const { writeFile } = await import("fs/promises");
    await writeFile(newPath, optimized);
    const saved = originalSize - optimized.byteLength;
    console.log(`  ✓ ${basename(filePath)} → ${basename(newPath)}  ${formatBytes(originalSize)} → ${formatBytes(optimized.byteLength)}  (saved ${formatBytes(Math.max(0,saved))})`);
    return { path: newPath, originalSize, newSize: optimized.byteLength };
  }

  const { writeFile } = await import("fs/promises");
  await writeFile(filePath, optimized);

  // Also write WebP copy if requested (e.g. hero.jpg → hero.webp)
  if (profile.webp && ext !== ".webp") {
    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const webpBuf = await sharp(optimized).webp({ quality: profile.quality }).toBuffer();
    await writeFile(webpPath, webpBuf);
  }

  const saved = originalSize - optimized.byteLength;
  console.log(`  ✓ ${basename(filePath).padEnd(40)} ${formatBytes(originalSize).padStart(8)} → ${formatBytes(optimized.byteLength).padStart(8)}  (saved ${formatBytes(Math.max(0,saved))})`);
  return { path: filePath, originalSize, newSize: optimized.byteLength };
}

async function main() {
  console.log("\n🖼  Villa Romantica — Image Optimizer\n");

  let images;
  try {
    images = await collectImages(PHOTOS_DIR);
  } catch {
    console.error(`❌  Could not find: ${PHOTOS_DIR}`);
    console.error("    Create public/photos/<folder>/ and place images inside.\n");
    process.exit(1);
  }

  if (images.length === 0) {
    console.log("No images found in public/photos/. Drop your photos in and re-run.\n");
    process.exit(0);
  }

  console.log(`Found ${images.length} image(s) to optimize.\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  const results = [];

  // Group by folder for readable output
  const byFolder = {};
  for (const img of images) {
    const f = folderName(img);
    if (!byFolder[f]) byFolder[f] = [];
    byFolder[f].push(img);
  }

  for (const [folder, imgs] of Object.entries(byFolder)) {
    console.log(`📁  ${folder}/`);
    for (const img of imgs) {
      try {
        const r = await optimizeImage(img);
        totalOriginal += r.originalSize;
        totalNew += r.newSize;
        results.push(r);
      } catch (err) {
        console.error(`  ✗ ${basename(img)}: ${err.message}`);
      }
    }
    console.log();
  }

  const savedTotal = totalOriginal - totalNew;
  const pct = ((savedTotal / totalOriginal) * 100).toFixed(1);
  console.log(`\n✅  Done. ${results.length} images processed.`);
  console.log(`   Total: ${formatBytes(totalOriginal)} → ${formatBytes(totalNew)} (saved ${formatBytes(savedTotal)}, ${pct}%)\n`);
}

main();
