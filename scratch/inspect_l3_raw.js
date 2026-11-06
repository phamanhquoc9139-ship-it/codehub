const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

const start = t7.indexOf('id="lesson-3"');
const end = t7.indexOf('id="lesson-4"');
const snippet = t7.substring(start, end);

const matches = snippet.match(/[^\n]{0,30}[a-z0-9]\^[0-9a-z][^\n]{0,30}/g) || [];
console.log('Matches in Lesson 3:');
matches.forEach((m, idx) => console.log(`${idx + 1}: ${m.trim()}`));
