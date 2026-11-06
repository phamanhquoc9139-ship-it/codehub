const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_docx/word/document.xml', 'utf8');

function extractTableRows(tblXml) {
  const rows = [...tblXml.matchAll(/<w:tr\b[\s\S]*?<\/w:tr>/g)];
  return rows.map(r => {
    const cells = [...r[0].matchAll(/<w:tc\b[\s\S]*?<\/w:tc>/g)];
    return cells.map(c => {
      return [...c[0].matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('').trim();
    });
  });
}

const tblMatches = [...docXml.matchAll(/<w:tbl\b[\s\S]*?<\/w:tbl>/g)];
const tablesData = tblMatches.map(m => extractTableRows(m[0]));

console.log('Table 2 sample:', tablesData[1].slice(0, 3));
console.log('Table 3 sample:', tablesData[2].slice(0, 3));
console.log('Table 4 sample:', tablesData[3].slice(0, 3));

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/khtn6_tables.json', JSON.stringify(tablesData, null, 2), 'utf8');
