const fs = require('fs');

const nv7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/nguvan_7.html', 'utf8');
console.log('Size:', Buffer.byteLength(nv7, 'utf8'), 'bytes');
console.log('Lessons count:', (nv7.match(/id="bai-\d+"/g) || []).length);
console.log('Mindmap count:', (nv7.match(/viewBox="0 0 840 210"/g) || []).length);
console.log('Summary table:', nv7.includes('BẢNG HỆ THỐNG 10 BÀI HỌC'));
console.log('Appendix:', nv7.includes('PHỤ LỤC: QUY TRÌNH'));
console.log('Handbook modal:', nv7.includes('handbookModal'));
console.log('Project modal:', nv7.includes('projectModal'));
console.log('Exam modal:', nv7.includes('examModal'));
console.log('Dark fallback present:', nv7.includes('Bulletproof Dark/Light Mode Fallbacks'));

const lit7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/literature_7.html', 'utf8');
console.log('literature_7.html identical to nguvan_7.html:', nv7 === lit7);
