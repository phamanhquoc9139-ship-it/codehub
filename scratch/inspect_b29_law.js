const fs = require('fs');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/vatly_10.html', 'utf8');

const idx = html.indexOf('id="bai-29"');
const idxEnd = html.indexOf('id="bai-30"');
const b29 = html.substring(idx, idxEnd);

const lawIdx = b29.indexOf('Phát biểu định luật');
console.log('=== BÀI 29 LAW BLOCK ===');
console.log(b29.substring(lawIdx - 150, lawIdx + 900));

// Check if any raw "> " exists in text
const rawGt = html.match(/<div[^>]*>\s*&gt;\s*[^<]+/g) || [];
console.log('=== RAW > CARDS COUNT IN HTML ===:', rawGt.length, rawGt);
