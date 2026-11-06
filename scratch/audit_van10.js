const fs = require('fs');
const path = require('path');
const vm = require('vm');

const htmlPath = path.join(__dirname, '..', 'courses', 'van_10.html');
const html = fs.readFileSync(htmlPath, 'utf8');

console.log('=== AUDIT: courses/van_10.html ===');
console.log('File size:', (html.length / 1024).toFixed(1) + ' KB');

let missingLessons = [];
let missingActivities = [];
const actSuffixes = ['trithuc', 'vanban', 'tiengviet', 'viet', 'noinghe', 'sodo', 'tracnghiem'];

for (let i = 1; i <= 9; i++) {
  if (!html.includes(`id="bai-${i}"`) || !html.includes(`href="#bai-${i}"`)) {
    missingLessons.push(`Bài ${i}`);
  }
  for (const suf of actSuffixes) {
    if (!html.includes(`id="bai-${i}-${suf}"`)) {
      missingActivities.push(`#bai-${i}-${suf}`);
    }
  }
}

console.log('Missing lessons (1..9):', missingLessons.length === 0 ? 'NONE (All 9 present)' : missingLessons.join(', '));
console.log('Missing activity sections (9 x 7 = 63):', missingActivities.length === 0 ? 'NONE (All 63 present)' : missingActivities.join(', '));
console.log('Shared knowledge & Genre map present:', html.includes('id="kien-thuc-dung-chung"') && html.includes('href="#kien-thuc-dung-chung"'));

const svgCount = (html.match(/<svg[\s>]/g) || []).length;
const quizCount = (html.match(/class="quiz-item\b/g) || []).length;
console.log('Total <svg> elements:', svgCount, '(expected 10)');
console.log('Total .quiz-item elements:', quizCount, '(expected 45 = 9 * 5)');

const badTokens = html.match(/\bundefined\b|\bNaN\b/g) || [];
console.log('Undefined/NaN occurrences:', badTokens.length);

// Check Sidebar scroll classes
const hasFlexAside = html.includes('hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col');
const hasMinH0Nav = html.includes('id="sidebar-nav" class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0');
console.log('Sidebar flex scroll constraints:', { hasFlexAside, hasMinH0Nav });
