const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const marker = 'KHỐI LỚP 9';
const idx = indexHtml.indexOf(marker);
const nextMarker = indexHtml.indexOf('KHỐI LỚP 10', idx);
const k9Text = indexHtml.substring(idx, nextMarker !== -1 ? nextMarker : idx + 10000);

const cardMatches = k9Text.match(/Course Card:[^\n]+/g) || [];
console.log('Cards in Grade 9:');
cardMatches.forEach(c => console.log('  ', c));
