const fs = require("fs");
const path = require("path");

const files = [
    "index.html",
    "style.css",
    "script.js"
];

const dist = "dist";

// Remove old dist folder
if (fs.existsSync(dist)) {
    fs.rmSync(dist, { recursive: true, force: true });
}

// Create dist folder
fs.mkdirSync(dist);

// Copy application files
for (const file of files) {
    fs.copyFileSync(file, path.join(dist, file));
    console.log(`Built: ${file}`);
}

console.log("Build completed successfully!");
