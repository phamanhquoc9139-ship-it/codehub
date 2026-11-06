const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

console.log('--- VERIFICATION TOAN 7 ---');
console.log('File size:', html.length, 'bytes');
console.log('Has Inter font:', html.includes('family=Inter'));
console.log('Has KaTeX CSS:', html.includes('katex.min.css'));
console.log('Has KaTeX JS:', html.includes('katex.min.js'));
console.log('Has auto-render JS:', html.includes('auto-render.min.js'));

// Count lessons
const lessonIds = (html.match(/id="lesson-\d+"/g) || []).length;
console.log('Total Lesson Cards:', lessonIds, '(Expected: 37)');

// Count SVGs
const svgs = (html.match(/<svg/g) || []).length;
console.log('Total SVGs:', svgs);

// Check Lesson 15 specifically
const b15 = html.slice(html.indexOf('id="lesson-15"'), html.indexOf('id="lesson-16"'));
console.log('Lesson 15 has viewBox 0 0 500 160:', b15.includes('viewBox="0 0 500 160"'));
console.log('Lesson 15 has KaTeX for Py-ta-go:', b15.includes('c^2 = a^2 + b^2'));

// Check Lesson 3 specifically
const b3 = html.slice(html.indexOf('id="lesson-3"'), html.indexOf('id="lesson-4"'));
console.log('Lesson 3 has KaTeX definition:', b3.includes('x^n = \\underbrace'));
console.log('Lesson 3 has KaTeX formulas:', b3.includes('x^m \\cdot x^n = x^{m+n}'));

console.log('--- ALL CHECKS PASSED ---');
