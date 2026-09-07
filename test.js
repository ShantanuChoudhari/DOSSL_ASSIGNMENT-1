const fs = require('fs');

console.log("Running project tests...");

if (!fs.existsSync('index.html')) {
    throw new Error("index.html is missing");
}

if (!fs.existsSync('style.css')) {
    throw new Error("style.css is missing");
}

if (!fs.existsSync('script.js')) {
    throw new Error("script.js is missing");
}

console.log("All required project files are present.");
console.log("Tests passed!");
