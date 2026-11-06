const fs = require('fs');

const files = fs.readdirSync('courses').filter(f => 
  f.includes('quoc') || f.includes('phong') || f.includes('gdqp') || f.includes('qp') || f.includes('anninh')
);
console.log('Matching courses files:', files);

const indexContent = fs.readFileSync('index.html', 'utf8');
const lines = indexContent.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('quoc') || l.includes('phong') || l.includes('gdqp') || l.includes('qp') || l.includes('Quốc phòng') || l.includes('An ninh')) {
    console.log(`Line ${idx + 1}: ${l.trim()}`);
  }
});
