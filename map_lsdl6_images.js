const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_docx/word/document.xml', 'utf8');

const pMatches = [...docXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)];
let lastPText = '';
pMatches.forEach((p, idx) => {
  const pStr = p[0];
  const text = [...pStr.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('');
  const blips = [...pStr.matchAll(/<a:blip[^>]*r:embed="([^"]+)"/g)].map(m => m[1]);
  if (blips.length > 0) {
    console.log(`P #${idx} has blips:`, blips, `Previous text: "${lastPText}"`);
  }
  if (text.trim()) {
    lastPText = text.trim();
  }
});

const relsXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_docx/word/_rels/document.xml.rels', 'utf8');
const relMatches = [...relsXml.matchAll(/Id="([^"]+)"[^>]*Target="media\/([^"]+)"/g)];
const rIdMap = {};
relMatches.forEach(m => {
  rIdMap[m[1]] = m[2];
});
console.log('rId map:', rIdMap);
