const fs = require('fs');
const idxHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
const idxMatches = idxHtml.match(/courses\/[^\"]*hoa[^\"]*/g);
console.log('index.html hoahoc matches:', idxMatches);

const g12Html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/grade_12.html', 'utf8');
const g12Matches = g12Html.match(/[^\"]*hoa[^\"]*12[^\"]*/g);
console.log('grade_12.html matches:', g12Matches);
