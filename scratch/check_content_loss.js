const fs = require('fs');
const html = fs.readFileSync('courses/gdqp_10.html', 'utf8');
const raw = JSON.parse(fs.readFileSync('scratch/gdqp10_parsed_raw.json', 'utf8'));

for (let i = 1; i <= 12; i++) {
  const start = html.indexOf(`id="bai-${i}"`);
  const next = i < 12 ? html.indexOf(`id="bai-${i+1}"`) : html.indexOf('id="section-tra-cuu"');
  const piece = html.slice(start, next !== -1 ? next : start + 10000);
  console.log(`Bài ${i}: HTML len=${piece.length}, raw len=${raw.lessonContents[i].body.length}`);
}
