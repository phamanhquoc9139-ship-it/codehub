const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';
const files = fs.readdirSync(dir).filter(f => (f.includes('tienganh') || f.includes('english')) && f.includes('10'));
console.log('Files:', files);

const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const regex = /courses\/[a-zA-Z0-9_\-\.]*(tienganh|english)[a-zA-Z0-9_\-\.]*/gi;
let m;
const links = new Set();
while ((m = regex.exec(idx)) !== null) {
  if (m[0].includes('10')) links.add(m[0]);
}
console.log('Links in index.html:', Array.from(links));

for (const f of files) {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  console.log('\n--- ' + f + ' (' + c.length + ' bytes) ---');
  const asideMatch = c.match(/<aside[^>]*>/i);
  const sidebarMatch = c.match(/<(div|aside)[^>]*(sidebar|toc|drawer|sticky|fixed)[^>]*>/gi);
  console.log('aside tag:', asideMatch ? asideMatch[0] : 'none');
  console.log('sidebar/toc/sticky/fixed tags:', sidebarMatch ? sidebarMatch.slice(0, 6) : 'none');
}
