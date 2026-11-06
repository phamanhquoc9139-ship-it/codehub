const fs = require('fs');
const vm = require('vm');

const html1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengnhat_7.html', 'utf8');
const html2 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/japanese_7.html', 'utf8');

console.log('tiengnhat_7.html size:', html1.length);
console.log('japanese_7.html size:', html2.length);

// Extract all <script> tags
const scriptMatches = [...html1.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Found inline scripts:', scriptMatches.length);

scriptMatches.forEach((m, idx) => {
  try {
    new vm.Script(m[1]);
    console.log('Script ' + idx + ': Syntax VALID');
  } catch (err) {
    console.error('Script ' + idx + ' SYNTAX ERROR:', err.message);
  }
});

const sections = [...html1.matchAll(/<section id="([^"]+)"/g)].map(m => m[1]);
console.log('Total sections in tiengnhat_7.html:', sections.length, sections);

const audioBtns = [...html1.matchAll(/speakJapanese\(/g)].length;
console.log('Audio pronunciation buttons count:', audioBtns);

console.log('Contains Exam Modal (Trạng Nguyên):', html1.includes('Đấu Trường Trạng Nguyên Tiếng Nhật 7'));
console.log('Contains Kanji Studio Modal:', html1.includes('Kanji Studio'));
console.log('Contains Verb Handbook Modal:', html1.includes('Sổ Tay Biến Đổi Động Từ'));

// Check index.html
const index = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
console.log('index.html contains tiengnhat_7.html:', index.includes('courses/tiengnhat_7.html'));
