const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const s15 = t7.indexOf('id="lesson-15"');
const svg15 = t7.substring(s15, s15 + 2000);
console.log('SVG 15:\n', svg15.substring(svg15.indexOf('<svg'), svg15.indexOf('</svg>') + 6));

const s16 = t7.indexOf('id="lesson-16"');
const svg16 = t7.substring(s16, s16 + 2000);
console.log('SVG 16:\n', svg16.substring(svg16.indexOf('<svg'), svg16.indexOf('</svg>') + 6));
