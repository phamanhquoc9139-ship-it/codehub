const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const target = '<!-- Course Card: Tin học 8 -->';
const pos = content.indexOf(target);
console.log('Snippet before Tin học 8:\n', content.substring(pos - 200, pos));
