const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/document.xml', 'utf8');

// Also tables exist in docXml: <w:tbl>...</w:tbl>
const tblMatches = [...docXml.matchAll(/<w:tbl\b[\s\S]*?<\/w:tbl>/g)];
console.log('Total tables found in document:', tblMatches.length);

tblMatches.forEach((tbl, idx) => {
  const rows = [...tbl[0].matchAll(/<w:tr\b[\s\S]*?<\/w:tr>/g)];
  console.log(`Table ${idx + 1}: ${rows.length} rows`);
  const firstRowCells = [...rows[0][0].matchAll(/<w:tc\b[\s\S]*?<\/w:tc>/g)].map(tc => {
    return [...tc[0].matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('').trim();
  });
  console.log(`Table ${idx + 1} header:`, firstRowCells.join(' | '));
});
