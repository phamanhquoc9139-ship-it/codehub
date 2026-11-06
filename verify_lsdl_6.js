const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_6.html', 'utf8');

console.log('HTML size:', html.length);
console.log('Contains "$0":', html.includes('$0'));
console.log('Contains "\\rightarrow":', html.includes('\\rightarrow'));

// Check images referenced
const imgMatches = [...html.matchAll(/assets\/img\/lsdl6\/(image\d+\.png)/g)].map(m => m[1]);
const uniqueImages = [...new Set(imgMatches)];
console.log('Unique images found in HTML:', uniqueImages.length, uniqueImages);

// Check if all image files exist on disk
uniqueImages.forEach(img => {
  const p = `C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/assets/img/lsdl6/${img}`;
  if (!fs.existsSync(p)) {
    console.error('MISSING IMAGE:', p);
  }
});

// Check scripts syntax
const scripts = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Found inline scripts:', scripts.length);
scripts.forEach((s, idx) => {
  try {
    new vm.Script(s[1]);
    console.log(`Script #${idx + 1} valid!`);
  } catch (err) {
    console.error(`Script #${idx + 1} syntax error:`, err.message);
  }
});
