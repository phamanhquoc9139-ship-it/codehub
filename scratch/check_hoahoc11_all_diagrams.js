const fs = require('fs');
const s = fs.readFileSync('courses/hoahoc_11.html', 'utf8');
const svgCount = (s.match(/<svg/g) || []).length;
console.log('Total SVGs in hoahoc_11:', svgCount);

// Check if hoahoc_11 has diagrams or illustrations in other lessons
const lessonSvgIds = [];
for (let i = 1; i <= 25; i++) {
  if (s.includes(`id="mo-hinh-phan-ung-${i}"`)) lessonSvgIds.push(i);
}
console.log('Reaction models in hoahoc_11:', lessonSvgIds);

// Are there other diagrams in hoahoc_11?
const diagramMatches = s.match(/id="diagram-[^"]+"/g) || [];
console.log('Diagram matches:', diagramMatches.length);
