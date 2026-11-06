const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html';
const content = fs.readFileSync(path, 'utf8');

const regex = /<section id="([^"]+)" class="unit-section[^"]*">([\s\S]*?)<\/h2>/g;
let m;
const units = [];
while ((m = regex.exec(content)) !== null) {
  const title = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  units.push({ id: m[1], title });
}

console.log('Total units found:', units.length);
units.forEach(u => console.log(`- ${u.id}: ${u.title}`));

// Check index.html link
const indexLinks = content.match(/href="[^"]*index\.html"/g);
console.log('index.html links count:', indexLinks ? indexLinks.length : 0);

// Check if subjects.html link exists anywhere
const subjectsLinks = content.match(/subjects\.html/g);
console.log('subjects.html links count:', subjectsLinks ? subjectsLinks.length : 0);
