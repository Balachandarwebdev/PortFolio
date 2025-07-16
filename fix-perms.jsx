// fix-perms.js

const fs = require('fs');
const path = require('path');

const viteBin = path.join(__dirname, 'node_modules', '.bin', 'vite');

try {
  fs.chmodSync(viteBin, 0o755);
  console.log("✅ Fixed vite binary permissions.");
} catch (err) {
  console.warn("⚠️ Skipped chmod or already executable:", err.message);
}
