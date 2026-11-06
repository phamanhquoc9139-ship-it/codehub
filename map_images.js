const fs = require('fs');
const path = require('path');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/document.xml', 'utf8');
const relsXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/_rels/document.xml.rels', 'utf8');

// Parse rels
const relMatches = [...relsXml.matchAll(/Id="([^"]+)"[^>]*Target="media\/([^"]+)"/g)];
const rIdMap = {};
relMatches.forEach(m => {
  rIdMap[m[1]] = m[2];
});
console.log('rId map:', rIdMap);

// Scan through document.xml to find text around blip r:embed="rIdX"
const blipMatches = [...docXml.matchAll(/(?:<w:t[^>]*>([^<]+)<\/w:t>[\s\S]{0,300})?<a:blip[^>]*r:embed="([^"]+)"/g)];
blipMatches.forEach(m => {
  const precedingText = m[1] || '(no text)';
  const rId = m[2];
  const file = rIdMap[rId];
  console.log(`Image: ${file} (rId: ${rId}) - near text: "${precedingText}"`);
});
