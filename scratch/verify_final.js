const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

console.log('Tiếng Đức 6 in index.html:', indexHtml.includes('courses/tiengduc_6.html'));
console.log('Giáo Dục Thể Chất 7 in index.html:', indexHtml.includes('courses/gdtc_7.html'));
