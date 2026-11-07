const fs = require('fs');

const chem = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc12.html', 'utf8');
const idx3 = chem.indexOf('id="bai-3"');
console.log('=== BAI 3 IN HOAHOC12.HTML ===');
console.log(chem.substring(idx3, idx3 + 3000));

const geo = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/diali_12.html', 'utf8');
const idxGeo = geo.indexOf('Hai mặt của đô thị hóa');
console.log('=== DIALI 12 HAI MAT CUA DO THI HOA ===');
console.log(geo.substring(idxGeo - 100, idxGeo + 1500));
