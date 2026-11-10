const fs = require('fs');
const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const gridIdIdx = html.indexOf('id="courses-grid"');
const gridOpenEnd = html.indexOf('>', gridIdIdx) + 1;
const noCoursesIdx = html.indexOf('<div class="hidden text-center py-16', gridOpenEnd);
const gridContent = html.substring(gridOpenEnd, noCoursesIdx).replace(/<\/div>\s*$/, '').trim();

const cards = [];
let depth = 0;
let start = -1;
const tagRegex = /<\/?div\b[^>]*>/gi;
let m;
while ((m = tagRegex.exec(gridContent)) !== null) {
  const tag = m[0];
  if (tag.startsWith('</')) {
    depth--;
    if (depth === 0 && start !== -1) {
      cards.push(gridContent.substring(start, m.index + tag.length));
      start = -1;
    }
  } else {
    if (depth === 0) start = m.index;
    depth++;
  }
}

console.log('Extracted top-level cards count:', cards.length);
console.log('Remaining depth:', depth);
console.log('First card title:', cards[0]?.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1].trim());
console.log('Last card title:', cards[cards.length - 1]?.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1].trim());
