const fs = require("fs");

console.log("Running project tests...");

const requiredFiles = [
    "index.html",
    "style.css",
    "wrong.js",
    "package.json"
];

let allFilesPresent = true;

for (const file of requiredFiles) {
    if (fs.existsSync(file)) {
        console.log(`✓ ${file} exists`);
    } else {
        console.log(`✗ ${file} is missing`);
        allFilesPresent = false;
    }
}

if (!allFilesPresent) {
    console.error("Tests failed!");
    process.exit(1);
}

console.log("All required project files are present.");
console.log("Tests passed!");
