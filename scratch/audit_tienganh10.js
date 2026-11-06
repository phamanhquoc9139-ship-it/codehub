const fs = require('fs');
const vm = require('vm');

const path = 'courses/tienganh_10.html';
const content = fs.readFileSync(path, 'utf8');

console.log('--- AUDITING tienganh_10.html ---');
console.log('File size:', content.length, 'bytes');

// Check undefined
const undefinedMatches = content.match(/\bundefined\b/g);
console.log('Undefined count:', undefinedMatches ? undefinedMatches.length : 0);

// Check SVG
const svgMatches = content.match(/<svg\b/g);
console.log('SVG diagrams count:', svgMatches ? svgMatches.length : 0);

// Check units
const unitMatches = content.match(/id="unit-[^"]+"/g);
console.log('Unit sections count:', unitMatches ? unitMatches.length : 0, unitMatches);

// Check quizzes
const quizButtons = content.match(/checkQuiz\(/g);
console.log('Quiz options buttons count:', quizButtons ? quizButtons.length : 0);

// Check scripts
const scriptRegex = /<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/gi;
let match;
let sCount = 0;
while ((match = scriptRegex.exec(content)) !== null) {
  sCount++;
  const code = match[2];
  try {
    new vm.Script(code);
    console.log(`Inline script ${sCount} syntax: OK`);
  } catch(e) {
    console.error(`Inline script ${sCount} SYNTAX ERROR:`, e.message);
  }
}

// Check modals
console.log('handbookModal exists:', content.includes('id="handbookModal"'));
console.log('examModal exists:', content.includes('id="examModal"'));
