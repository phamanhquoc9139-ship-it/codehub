const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/document.xml', 'utf8');

// Extract all paragraphs
const pMatches = [...docXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)];
const paragraphs = [];
pMatches.forEach(p => {
  const pStr = p[0];
  const text = [...pStr.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('').trim();
  if (text) {
    paragraphs.push(text);
  }
});

console.log('Total non-empty paragraphs:', paragraphs.length);
console.log('First 15 paragraphs:\n', paragraphs.slice(0, 15).join('\n---\n'));
console.log('\nLast 15 paragraphs:\n', paragraphs.slice(-15).join('\n---\n'));
