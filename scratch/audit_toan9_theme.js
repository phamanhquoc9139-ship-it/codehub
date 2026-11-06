const fs = require('fs');

const fileContent = fs.readFileSync('courses/vatly_10.html', 'utf8');

console.log('=== AUDIT OF courses/vatly_10.html (Toan 9 Theme) ===');
console.log('1. Size:', fileContent.length, 'bytes');

// 2. All 34 lessons
let missingLessons = [];
for (let i = 1; i <= 34; i++) {
  if (!fileContent.includes(`id="bai-${i}"`)) {
    missingLessons.push(i);
  }
}
console.log('2. Lesson IDs check:', missingLessons.length === 0 ? 'ALL 34 PRESENT (bai-1 to bai-34)' : 'MISSING: ' + missingLessons.join(', '));

// 3. Chapters
const chapters = ['Chương I', 'Chương II', 'Chương III', 'Chương IV', 'Chương V', 'Chương VI', 'Chương VII'];
const chResults = chapters.map(c => ({ name: c, found: fileContent.includes(c) }));
console.log('3. Chapters check:', chResults.every(c => c.found) ? 'ALL 7 CHAPTERS FOUND' : chResults);

// 4. Modals
const modals = ['modal-formulas', 'modal-mistakes', 'modal-exam', 'modal-search'];
const modalResults = modals.map(m => ({ id: m, found: fileContent.includes(`id="${m}"`) }));
console.log('4. Modals check:', modalResults.every(m => m.found) ? 'ALL 4 MODALS PRESENT' : modalResults);

// 5. Special sections
console.log('5. Bảng công thức tra cứu:', fileContent.includes('id="bang-cong-thuc"'));
console.log('   Đơn vị & thuật ngữ:', fileContent.includes('id="thuat-ngu-vat-ly"'));

// 6. Sidebar truncate check
const sidebarMatch = fileContent.match(/<aside[\s\S]*?<\/aside>/);
const sidebarTruncateCount = sidebarMatch ? (sidebarMatch[0].match(/truncate/g) || []).length : 0;
console.log('6. Truncate count in sidebar:', sidebarTruncateCount);

// 7. Markdown leak check
console.log('7. Contains |---|:', fileContent.includes('|---|'));
console.log('   Contains raw **:', (fileContent.match(/\*\*[^*]+\*\*/g) || []).length);

// 8. SVGs validation
const svgs = fileContent.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log('8. Total SVGs found:', svgs.length);
let badSvgTextTags = 0;
const textTags = fileContent.match(/<text[^>]*>([\s\S]*?)<\/text>/gi) || [];
textTags.forEach((t, idx) => {
  const inner = t.replace(/^<text[^>]*>/i, '').replace(/<\/text>$/i, '');
  const childTags = inner.match(/<[^>]+>/g) || [];
  const invalid = childTags.filter(tag => !tag.startsWith('<tspan') && !tag.startsWith('</tspan>'));
  if (invalid.length > 0) {
    badSvgTextTags++;
    console.log(`Bad tag in text #${idx}:`, invalid);
  }
});
console.log('   Invalid non-tspan HTML inside SVG text:', badSvgTextTags);

// 9. Interactive elements
console.log('9. checkLessonQuiz count:', (fileContent.match(/checkLessonQuiz/g) || []).length);
console.log('   toggleTheme exists:', fileContent.includes('toggleTheme()'));
console.log('   startExam exists:', fileContent.includes('startExam()'));
console.log('   submitExam exists:', fileContent.includes('submitExam()'));
console.log('   toggleBookmark exists:', fileContent.includes('toggleBookmark('));

console.log('=== AUDIT COMPLETE ===');
