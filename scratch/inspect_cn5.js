const fs = require('fs');
const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_7.html', 'utf8');

const idx = cn.indexOf('DANH MỤC BÀI HỌC');
console.log('--- AROUND DANH MUC BAI HOC ---');
console.log(cn.substring(idx - 400, idx + 400));
