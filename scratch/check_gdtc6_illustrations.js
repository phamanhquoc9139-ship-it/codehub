const fs = require('fs');

const f6 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_6.html', 'utf8');

const matches = f6.match(/.{0,50}(?:minh ho|sơ đồ|hinh|mô phỏng).{0,50}/gi) || [];
console.log('Matches in gdtc_6:');
matches.slice(0, 15).forEach(m => console.log('---', m.replace(/\s+/g, ' ')));
