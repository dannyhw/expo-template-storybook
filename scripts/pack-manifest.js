// Strips repo-only fields from package.json while `npm pack`/`npm publish`
// builds the tarball, then restores the original file afterwards.
//
// `packageManager` pins pnpm for developing this repo, but the published
// template is copied verbatim by create-expo-app. Shipping it would make tools
// in an npm/yarn/bun project (e.g. Storybook, Corepack) act as if the project
// used pnpm, so it is removed from the packed manifest.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const manifestPath = path.join(root, "package.json");
const backupPath = path.join(root, "package.json.bak");

const mode = process.argv[2];

if (mode === "strip") {
  const original = fs.readFileSync(manifestPath, "utf8");
  fs.writeFileSync(backupPath, original);

  const manifest = JSON.parse(original);
  delete manifest.packageManager;
  delete manifest.scripts.prepack;
  delete manifest.scripts.postpack;
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
} else if (mode === "restore") {
  if (fs.existsSync(backupPath)) {
    fs.renameSync(backupPath, manifestPath);
  }
} else {
  console.error("Usage: node scripts/pack-manifest.js <strip|restore>");
  process.exit(1);
}
