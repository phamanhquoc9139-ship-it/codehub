const fs = require('fs');

const docXml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_docx/word/document.xml', 'utf8');

function getNodeText(xmlSnippet) {
  return [...xmlSnippet.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => m[1]).join('').trim();
}

function extractCleanTables(xml) {
  const tblMatches = [...xml.matchAll(/<w:tbl\b[\s\S]*?<\/w:tbl>/g)];
  return tblMatches.map(tbl => {
    const rowMatches = [...tbl[0].matchAll(/<w:tr\b[\s\S]*?<\/w:tr>/g)];
    return rowMatches.map(row => {
      const cellMatches = [...row[0].matchAll(/<w:tc\b[\s\S]*?<\/w:tc>/g)];
      return cellMatches.map(c => getNodeText(c[0]));
    });
  });
}

const tables = extractCleanTables(docXml);
console.log('Tables found:', tables.length);
tables.forEach((t, idx) => {
  console.log(`Table ${idx + 1}: ${t.length} rows`);
  console.log(`Table ${idx + 1} header:`, t[0].join(' | '));
});

// Extract paragraphs
const pMatches = [...docXml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)];
const paragraphs = pMatches.map(p => getNodeText(p[0])).filter(t => t.length > 0);
console.log('Total text paragraphs:', paragraphs.length);

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_tables.json', JSON.stringify(tables, null, 2), 'utf8');
