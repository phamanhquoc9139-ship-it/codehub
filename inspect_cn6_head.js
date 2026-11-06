const fs = require('fs');

const an6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/amnhac_6.html', 'utf8');
const cn6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');

console.log('--- CN6 HEAD SCRIPT ---');
console.log(cn6.slice(0, 1500));
