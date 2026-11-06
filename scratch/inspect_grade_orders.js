const fs = require('fs');
const path = require('path');

const index = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// List courses in Grade 6, 7, 8, 9
const grades = [6, 7, 8, 9];
grades.forEach(g => {
  const start = index.indexOf(`<!-- ==================== KHỐI LỚP ${g} ==================== -->`);
  const next = index.indexOf(`<!-- ==================== KHỐI LỚP ${g+1} ==================== -->`);
  if (start > -1 && next > -1) {
    const chunk = index.substring(start, next);
    const reg = /<!-- Course Card:\s*(.*?)\s*-->/g;
    let m;
    const cards = [];
    while ((m = reg.exec(chunk)) !== null) {
      cards.push(m[1]);
    }
    console.log(`\n=== GRADE ${g} (${cards.length} cards) ===`);
    console.log(cards.join(' -> '));
  }
});
