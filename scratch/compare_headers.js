const fs = require('fs');

const eng = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/english_6.html', 'utf8');
const deu = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengduc_6.html', 'utf8');

console.log('=== English 6 header lines ===');
console.log(eng.substring(eng.indexOf('<header'), eng.indexOf('</header>') + 9));

console.log('=== Tiếng Đức 6 header lines ===');
console.log(deu.substring(deu.indexOf('<header'), deu.indexOf('</header>') + 9));
