const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idxK8 = indexHtml.indexOf('<!-- ==================== KHỐI LỚP 8 ==================== -->');
const idxK9 = indexHtml.indexOf('<!-- ==================== KHỐI LỚP 9', idxK8);
console.log("Khối 8 block:");
console.log(indexHtml.substring(idxK8, idxK9));
