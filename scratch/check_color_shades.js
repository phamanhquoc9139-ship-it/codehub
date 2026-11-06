const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const regex = /gray-850/g;
let count = 0;
while (regex.exec(content) !== null) count++;
console.log('gray-850 count in congnghe_7.html:', count);

// Check if any other -850 or -750 or custom classes exist
const customRegex = /(gray|slate|zinc|neutral|emerald|teal|amber|rose|blue)-([0-9]{3})/g;
const foundColors = new Set();
let cm;
while ((cm = customRegex.exec(content)) !== null) {
  foundColors.add(cm[0]);
}
console.log('All 3-digit color shades:', Array.from(foundColors));
