const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js', 'utf8');

// Truncate everything after buildHtml();
const idx = code.indexOf('buildHtml();');
const cleanCode = code.slice(0, idx + 'buildHtml();\n'.length);

// Now let's see where checkLessonQuiz should go:
// Find function renderMath() inside the script
console.log('Has checkLessonQuiz inside fullHtml?', cleanCode.includes('function checkLessonQuiz'));
console.log('Has renderMath inside fullHtml?', cleanCode.includes('function renderMath'));

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan10.js', cleanCode, 'utf8');
console.log('Cleaned trailing junk after buildHtml()');
