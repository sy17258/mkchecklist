const fs = require('fs');
const path = require('path');

// Path to the built index.html
const indexPath = path.join(__dirname, 'dist', 'index.html');

console.log('Reading index.html...');
let html = fs.readFileSync(indexPath, 'utf8');

// Remove any module type attributes
console.log('Removing type="module" from script tags...');
html = html.replace(/type="module"/g, '');

// Fix script tags
console.log('Adjusting script tags...');
html = html.replace(/<script /g, '<script type="text/javascript" ');

// Fix preload links if they exist
console.log('Checking for preload links...');
html = html.replace(/<link rel="modulepreload"/g, '<link rel="preload"');

// Write the fixed file
console.log('Writing fixed index.html...');
fs.writeFileSync(indexPath, html);

console.log('✅ index.html has been fixed for non-module-compatible servers.');
console.log('Now upload your dist folder to your hosting.'); 