const fs = require('fs');

const vatlyPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html';
const vatly = fs.readFileSync(vatlyPath, 'utf8');

console.log('=== VAT LY 10 ===');
console.log('Size:', vatly.length);
console.log('Includes "Bài undefined":', vatly.includes('Bài undefined'));
const undefinedCount = (vatly.match(/Bài undefined/g) || []).length;
console.log('Undefined count in HTML:', undefinedCount);

// Find where "Bài undefined" or template interpolation failed
const lines = vatly.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('undefined')) {
    console.log(`Line ${idx + 1}: ${l.trim().slice(0, 100)}`);
  }
});

// Check triple bar or vector glyphs in vatly
const tripleBar = vatly.includes('≡');
console.log('Includes triple bar ≡:', tripleBar);
if (tripleBar) {
  const matches = vatly.match(/.{0,30}≡.{0,30}/g);
  console.log('Triple bar occurrences (first 5):', matches ? matches.slice(0, 5) : []);
}

// Check markdown quotes in vatly
const rawQuotes = vatly.match(/>\s*[^<\n]+/g);
console.log('Raw markdown quote count:', rawQuotes ? rawQuotes.length : 0);
if (rawQuotes) {
  console.log('Sample raw quotes:', rawQuotes.slice(0, 3));
}

console.log('\n=== TOAN 10 ===');
const toanPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_10.html';
const toan = fs.readFileSync(toanPath, 'utf8');
console.log('Size:', toan.length);
console.log('KaTeX script tags in toan_10:');
const scriptMatches = toan.match(/<script[\s\S]*?<\/script>/gi) || [];
scriptMatches.forEach(s => {
  if (s.includes('katex') || s.includes('renderMath')) {
    console.log('Found katex/render script:', s.slice(0, 150));
  }
});
console.log('Check if dollar delimiters are configured for KaTeX in toan_10:');
const katexConfigMatch = toan.match(/renderMathInElement[\s\S]*?\);/);
if (katexConfigMatch) {
  console.log('renderMathInElement call:', katexConfigMatch[0]);
} else {
  console.log('renderMathInElement call NOT FOUND!');
}
