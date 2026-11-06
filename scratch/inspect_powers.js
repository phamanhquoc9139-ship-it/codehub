const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/grade_10.html';
const content = fs.readFileSync(path, 'utf8');

const matches = content.match(/.{0,40}\d+\^\d+.{0,40}/g);
console.log('Matches for pow in grade_10.html:', matches);
