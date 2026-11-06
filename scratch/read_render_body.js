const fs = require('fs');

const builder = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/build_gdtc_7_page.js', 'utf8');

const lines = builder.split('\n');
console.log(lines.slice(570, 660).join('\n'));
