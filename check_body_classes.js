const fs = require('fs');

const cn6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');
const an6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/amnhac_6.html', 'utf8');

console.log('--- CN6 BODY TAG ---');
console.log(cn6.match(/<body[^>]*>/));

console.log('--- AN6 BODY TAG ---');
console.log(an6.match(/<body[^>]*>/));
