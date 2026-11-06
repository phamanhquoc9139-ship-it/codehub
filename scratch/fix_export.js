const fs = require('fs');

const fp = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/generate_perfect_gdtc8.js';
let content = fs.readFileSync(fp, 'utf8');
content += '\nmodule.exports = { getLessonSvg };\n';
fs.writeFileSync(fp, content, 'utf8');
console.log('Added export to generate_perfect_gdtc8.js');
