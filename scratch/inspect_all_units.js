const fs = require('fs');

const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'utf8');

const sections = [
  'start', 'unit-1', 'unit-2', 'unit-3', 'plattform-1',
  'unit-4', 'unit-5', 'plattform-2', 'unit-6', 'unit-7',
  'unit-8', 'plattform-3', 'unit-9', 'unit-10', 'plattform-4'
];

sections.forEach(s => {
  const match = content.match(new RegExp(`<section id="${s}"[\\s\\S]*?<\\/section>`));
  if (match) {
    const text = match[0];
    const h4s = text.match(/<h4[^>]*>[\s\S]*?<\/h4>/g) || [];
    console.log(`=== ${s} (length: ${text.length}, h4s: ${h4s.length}) ===`);
    h4s.forEach(h => console.log('  *', h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
  } else {
    console.log(`=== ${s} NOT FOUND ===`);
  }
});
