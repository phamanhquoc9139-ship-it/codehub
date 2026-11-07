const fs = require('fs');
const s = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/sinhhoc_12.html', 'utf8');
const m = s.match(/id=['"]bai-\d+['"]/g);
console.log('Total id=bai-X count:', m ? m.length : 0);
if (m) console.log(m.slice(0, 15));

const titles = s.match(/<h[23][^>]*>Bài \d+[^<]*<\/h[23]>/g);
console.log('Total Bài header count:', titles ? titles.length : 0);
if (titles) console.log(titles.slice(0, 10));
