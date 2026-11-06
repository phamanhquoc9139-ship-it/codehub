const fs = require('fs');
const cn6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');

const idx = cn6.indexOf('function toggleDarkMode');
console.log(cn6.slice(idx - 100, idx + 500));
