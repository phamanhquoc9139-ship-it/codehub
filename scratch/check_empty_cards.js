const fs = require('fs');
const path = require('path');

const dir = 'courses';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let emptyCards = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  // Check for empty space-y-2.5 or card without bullet items
  // Look for card containers
  const cardRegex = /<div class="[^"]*rounded-2xl[^"]*border[^"]*">\s*<h4[^>]*>([\s\S]*?)<\/h4>\s*<div class="space-y-2\.5[^"]*">\s*<\/div>\s*<\/div>/g;
  let m;
  while ((m = cardRegex.exec(content)) !== null) {
    emptyCards.push({ file, header: m[1].replace(/<[^>]+>/g, '').trim() });
  }

  // Also check if any card has no text after h4
  const cardRegex2 = /<div class="[^"]*rounded-2xl[^"]*border[^"]*">\s*<h4[^>]*>([\s\S]*?)<\/h4>\s*<\/div>/g;
  while ((m = cardRegex2.exec(content)) !== null) {
    emptyCards.push({ file, header: m[1].replace(/<[^>]+>/g, '').trim() });
  }
}

console.log('Empty cards found:', emptyCards.length);
if (emptyCards.length > 0) {
  console.log(JSON.stringify(emptyCards.slice(0, 20), null, 2));
}
