const fs = require('fs');
const path = require('path');

const files = [
  'courses/vatly_10.html',
  'courses/toan_10.html',
  'courses/tinhoc_10.html',
  'courses/grade_10.html',
  'courses/tienganh_10.html',
  'courses/tiengtrung_10.html'
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const has2Pow10 = content.includes('2^10');
    const hasTripleBar = content.includes('\u2261') || content.includes('≡');
    const hasCombiningArrow = content.includes('\u20D7');
    console.log(`${f}: 2^10=${has2Pow10}, ≡=${hasTripleBar}, \\u20D7=${hasCombiningArrow}, size=${content.length}`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
}
