const fs = require('fs');
const files = fs.readdirSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses').filter(f => f.endsWith('.html'));

const imageSources = [];
files.forEach(f => {
  const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/' + f, 'utf8');
  const matches = content.match(/<img[^>]+src=["']([^"']+)["']/g);
  if (matches) {
    matches.forEach(m => {
      const srcMatch = m.match(/src=["']([^"']+)["']/);
      if (srcMatch && !imageSources.includes(srcMatch[1])) {
        imageSources.push({ course: f, src: srcMatch[1] });
      }
    });
  }
});

console.log('Total unique image sources:', imageSources.length);
imageSources.slice(0, 15).forEach(s => console.log(s.course, '->', s.src));
