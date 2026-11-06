const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/document.xml', 'utf8');

// Match each paragraph <w:p ...</w:p>
const pMatches = [...docXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)];
let lastPText = '';
pMatches.forEach((p, idx) => {
  const pStr = p[0];
  const text = [...pStr.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('');
  const blips = [...pStr.matchAll(/<a:blip[^>]*r:embed="([^"]+)"/g)].map(m => m[1]);
  if (blips.length > 0) {
    console.log(`P #${idx} has blips:`, blips, `Previous P text: "${lastPText}"`, `Current P text: "${text}"`);
  }
  if (text.trim()) {
    lastPText = text.trim();
  }
});
