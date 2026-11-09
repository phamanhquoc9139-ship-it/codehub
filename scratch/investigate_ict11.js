const fs = require('fs');

const f = 'courses/chuyende_tinhoc_11_ict.html';
if (fs.existsSync(f)) {
  const c = fs.readFileSync(f, 'utf8');
  console.log("Size:", c.length);
  const bàiMatches = c.match(/Bài \d+/g);
  console.log("Bài matches:", [...new Set(bàiMatches)]);
} else {
  console.log("File not found!");
}
