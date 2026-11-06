const fs = require('fs');
const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_docx/word/document.xml', 'utf8');

function cleanXml(str) {
  return str.replace(/<[^>]+>/g, '')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .trim();
}

// Check paragraphs with blips (images)
const pMatches = [...docXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)];
const lines = [];
const imagePositions = [];

pMatches.forEach((p, idx) => {
  const pStr = p[0];
  const text = cleanXml(pStr);
  const blips = [...pStr.matchAll(/<a:blip[^>]*r:embed="([^"]+)"/g)].map(m => m[1]);
  if (blips.length > 0) {
    imagePositions.push({ idx, blips, surroundingText: text || (lines[lines.length - 1] || '') });
  }
  if (text) {
    lines.push({ idx, text });
  }
});

console.log('Total non-empty paragraphs:', lines.length);
console.log('Image positions:', JSON.stringify(imagePositions, null, 2));

// Save all text lines to file
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_all_text.txt', lines.map(l => l.text).join('\n\n'), 'utf8');
console.log('Saved lsdl6_all_text.txt');
