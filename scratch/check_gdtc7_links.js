const fs = require('fs');

const f1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdtc_7.html', 'utf8');
console.log('GDTC 7 index.html back button:', f1.includes('href="../index.html"'));
console.log('GDTC 7 has subjects.html:', f1.includes('subjects.html'));
