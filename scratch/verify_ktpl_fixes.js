const fs = require('fs');
const html = fs.readFileSync('courses/ktpl_10.html', 'utf8');

function getSection(id) {
  const start = html.indexOf(`id="${id}"`);
  if (start === -1) return 'NOT FOUND';
  const end = html.indexOf('</article>', start);
  return html.slice(start, end !== -1 ? end : start + 3000);
}

console.log('--- KTPL 10 BAI 9 SAMPLE ---');
console.log(getSection('bai-9').slice(0, 1500));

console.log('\n--- KTPL 10 BAI 19 SAMPLE ---');
console.log(getSection('bai-19').slice(0, 1500));
