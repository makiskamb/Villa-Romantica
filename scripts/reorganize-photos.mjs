/**
 * Reorganize & rename all photos to clean, web-safe filenames.
 * Run: node scripts/reorganize-photos.mjs
 *
 * Then run: npm run optimize
 */

import { readdir, rename, mkdir, copyFile } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PHOTOS = join(ROOT, "public", "photos");

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function sortedFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter(e => e.isFile() && /\.(jpe?g|png|webp)$/i.test(e.name))
    .map(e => e.name)
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || "0");
      const numB = parseInt(b.match(/\d+/)?.[0] || "0");
      return numA - numB;
    });
}

async function renameAll(srcDir, destDir, prefix) {
  await ensureDir(destDir);
  const files = await sortedFiles(srcDir);
  for (let i = 0; i < files.length; i++) {
    const ext = extname(files[i]).toLowerCase().replace(".jpeg", ".jpg");
    const src = join(srcDir, files[i]);
    const dest = join(destDir, `${prefix}-${i + 1}${ext}`);
    await rename(src, dest);
    console.log(`  ${files[i]} → ${prefix}-${i + 1}${ext}`);
  }
  return files.length;
}

async function main() {
  console.log("\n📁  Villa Romantica — Photo Reorganizer\n");

  // ── Hero ──────────────────────────────────────────────
  console.log("hero/");
  await renameAll(join(PHOTOS, "hero"), join(PHOTOS, "hero"), "hero");

  // ── Gallery ───────────────────────────────────────────
  console.log("\ngallery/");
  await renameAll(join(PHOTOS, "gallery"), join(PHOTOS, "gallery"), "gallery");

  // ── Experience ────────────────────────────────────────
  console.log("\nexperience/");
  await renameAll(join(PHOTOS, "experience"), join(PHOTOS, "experience"), "experience");

  // ── Rooms — each subfolder → flat rooms/<name>/ ───────
  const roomMap = [
    { folder: "Aphrodite_OUR Content x Villa Romantica Room 4", name: "aphrodite" },
    { folder: "ArtemisOUR Content x Villa Romantica Room 6",    name: "artemis"  },
    { folder: "Athina_OUR Content x Villa Romantica Room 1",    name: "athina"   },
    { folder: "Ira_OUR Content x Villa Romantica Room 3",       name: "ira"      },
    { folder: "Posidon_OUR Content x Villa Romantica Room 2",   name: "posidon"  },
    { folder: "Zeus_OUR Content x Villa Romantica Room 5",      name: "zeus"     },
  ];

  const interiorDir = join(PHOTOS, "rooms", "Interior_Rooms");

  for (const { folder, name } of roomMap) {
    const src = join(interiorDir, folder);
    const dest = join(PHOTOS, "rooms", name);
    console.log(`\nrooms/${name}/`);
    try {
      await renameAll(src, dest, name);
    } catch (err) {
      console.error(`  ✗ ${err.message}`);
    }
  }

  // Clean up empty Interior_Rooms folder
  try {
    const { rm } = await import("fs/promises");
    await rm(interiorDir, { recursive: true, force: true });
    console.log("\n🗑  Removed Interior_Rooms/ (now empty)");
  } catch {}

  console.log("\n✅  Reorganization complete. Now run: npm run optimize\n");
}

main();
