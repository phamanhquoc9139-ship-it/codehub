const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.resolve(__dirname, '../courses/tienganh_11.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== AUDIT REPORT FOR courses/tienganh_11.html ===');
console.log('File size:', (Buffer.byteLength(content, 'utf8') / 1024).toFixed(1), 'KB');

// 1. Check undefined and NaN leaks
const undefMatches = content.match(/\bundefined\b/g);
console.log('Undefined count:', undefMatches ? undefMatches.length : 0);
const nanMatches = content.match(/\bNaN\b/g);
console.log('NaN count:', nanMatches ? nanMatches.length : 0);

// 2. Check SVGs
const svgMatches = content.match(/<svg\b/g);
console.log('SVG diagrams count:', svgMatches ? svgMatches.length : 0);

// 3. Check Units
const unitMatches = content.match(/id="unit-[^"]+"/g);
console.log('Unit sections count:', unitMatches ? unitMatches.length : 0);

// 4. Check Quizzes
const quizBtns = content.match(/checkQuiz\(/g);
console.log('Quiz option buttons count:', quizBtns ? quizBtns.length : 0);

// 5. Check Modals
console.log('Has searchModal:', content.includes('id="searchModal"'));
console.log('Has examModal:', content.includes('id="examModal"'));

// 6. Check Dark Mode
console.log('Has theme-toggle btn:', content.includes('id="theme-toggle"'));
console.log('Has toggleDarkMode fn:', content.includes('function toggleDarkMode()'));
console.log('Has darkMode class config:', content.includes("darkMode: 'class'"));
const darkClassCount = (content.match(/dark:/g) || []).length;
console.log('Dark class count:', darkClassCount);

// 7. Check Text-to-Speech
console.log('Has speakWord fn:', content.includes('function speakWord(text)'));
const speakCalls = (content.match(/speakWord\(/g) || []).length;
console.log('Audio pronunciation buttons count:', speakCalls);

// 8. Check Glossary
const glossaryRows = (content.match(/class="glossary-row/g) || []).length;
console.log('Glossary words count:', glossaryRows);

// 9. Check Syntax of inline scripts
const scriptRegex = /<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/gi;
let match;
let sCount = 0;
let errors = 0;
while ((match = scriptRegex.exec(content)) !== null) {
  sCount++;
  const code = match[2];
  try {
    new vm.Script(code);
    console.log(`Inline script #${sCount} syntax: OK`);
  } catch(e) {
    errors++;
    console.error(`Inline script #${sCount} SYNTAX ERROR:`, e.message);
  }
}

console.log('Total Script Errors:', errors);
if (errors === 0 && (!undefMatches || undefMatches.length === 0) && svgMatches && svgMatches.length === 14 && unitMatches && unitMatches.length === 14) {
  console.log('>>> ALL CHECKS PASSED PERFECTLY! <<<');
} else {
  console.log('>>> SOME CHECKS NEED ATTENTION! <<<');
}
