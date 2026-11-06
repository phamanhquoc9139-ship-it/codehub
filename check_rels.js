const fs = require('fs');
const relsXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_docx/word/_rels/document.xml.rels', 'utf8');
const relMatches = [...relsXml.matchAll(/Id="([^"]+)"[^>]*Target="media\/([^"]+)"/g)];
const rIdMap = {};
relMatches.forEach(m => {
  rIdMap[m[1]] = m[2];
  console.log(`${m[1]} -> ${m[2]}`);
});
