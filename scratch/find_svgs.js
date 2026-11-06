const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const svgFiles = [];
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const count = (content.match(/<svg/g) || []).length;
  if (count > 5) {
    svgFiles.push({ file: f, svgs: count });
  }
});

svgFiles.sort((a,b) => b.svgs - a.svgs);
console.log('Top files with SVGs:', svgFiles.slice(0, 15));
