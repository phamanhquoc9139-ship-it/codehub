const fs = require('fs');

const files = [
  'courses/grade_10.html',
  'courses/tinhoc_10.html',
  'courses/vatly_10.html',
  'courses/toan_10.html',
  'courses/tienganh_10.html',
  'courses/tiengtrung_10.html'
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes('2^10')) {
      console.log(`FOUND 2^10 in ${f}`);
    } else {
      console.log(`CLEAN (no 2^10) in ${f}`);
    }
  }
}
