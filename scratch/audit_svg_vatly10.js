const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

console.log('=== AUDIT OF DIAGRAMS IN VATLY_10.HTML ===');
console.log('File size:', html.length, 'bytes');

const svgCount = (html.match(/<svg/g) || []).length;
console.log('Total SVG elements in file:', svgCount);

const undefinedCount = (html.match(/undefined/g) || []).length;
console.log('Undefined count in file:', undefinedCount);

// Check diagrams inside each lesson
let lessonsWithoutDiagram = [];
for (let i = 1; i <= 34; i++) {
  const start = html.indexOf(`id="bai-${i}"`);
  const nextStart = i < 34 ? html.indexOf(`id="bai-${i+1}"`) : html.indexOf('</main>');
  const lessonChunk = html.substring(start, nextStart);
  if (!lessonChunk.includes('<svg')) {
    lessonsWithoutDiagram.push(i);
  }
}

console.log('Lessons missing diagrams:', lessonsWithoutDiagram.length ? lessonsWithoutDiagram : 'NONE! (All 34 lessons have rich vector diagrams!)');
console.log('=== AUDIT COMPLETE ===');
