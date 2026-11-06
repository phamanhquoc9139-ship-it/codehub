const fs = require('fs');

const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');
const cn6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');
const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

console.log('--- GDCD DARK MODE BUTTON ---');
const btnMatchGdcd = gdcd.match(/<button onclick="toggleDarkMode\(\)"[\s\S]*?<\/button>/);
if (btnMatchGdcd) console.log(btnMatchGdcd[0]);

console.log('--- CN6 DARK MODE BUTTON ---');
const btnMatchCn6 = cn6.match(/<button onclick="toggleDarkMode\(\)"[\s\S]*?<\/button>/);
if (btnMatchCn6) console.log(btnMatchCn6[0]);

console.log('--- GDCD DARK MODE SCRIPT ---');
const jsMatchGdcd = gdcd.match(/function toggleDarkMode[\s\S]*?initTheme\(\);/);
if (jsMatchGdcd) console.log(jsMatchGdcd[0]);

console.log('--- CN6 DARK MODE SCRIPT ---');
const jsMatchCn6 = cn6.match(/function toggleDarkMode[\s\S]*?initTheme\(\);/);
if (jsMatchCn6) console.log(jsMatchCn6[0]);
