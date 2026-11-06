const fs = require('fs');
const vm = require('vm');

const html1 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengphap_7.html', 'utf8');
const html2 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/french_7.html', 'utf8');

console.log('tiengphap_7.html size:', html1.length);
console.log('french_7.html size:', html2.length);

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
console.log('Total sections in tiengphap_7.html:', sections.length, sections);

const audioBtns = [...html1.matchAll(/speakFrench\(/g)].length;
console.log('Audio pronunciation buttons count:', audioBtns);

console.log('Contains Exam Modal (Le Lauréat):', html1.includes('Le Lauréat'));
console.log('Contains Audio Studio Modal:', html1.includes('Phonétique Studio'));
console.log('Contains Conjugation Handbook Modal:', html1.includes('Sổ Tay Chia Động Từ'));

// Check index.html
const index = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
console.log('index.html contains tiengphap_7.html:', index.includes('courses/tiengphap_7.html'));
