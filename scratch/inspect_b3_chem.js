const fs = require('fs');

const chem = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc12.html', 'utf8');
const idx = chem.indexOf('id="b3-noi-dung"');
console.log(chem.substring(idx, idx + 2500));
