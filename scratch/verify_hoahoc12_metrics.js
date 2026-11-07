const fs = require('fs');
const s = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hoahoc_12.html', 'utf8');
console.log('File size:', s.length, 'bytes');
console.log('Title tag:', s.match(/<title>(.*?)<\/title>/)[1]);
console.log('Chapters count:', (s.match(/id="chuong-\d+"/g) || []).length);
console.log('Lessons count in body:', (s.match(/id="bai-\d+"/g) || []).length);
console.log('SVG count in body:', (s.match(/<svg/g) || []).length);
console.log('Quiz options count:', (s.match(/quiz-option-btn/g) || []).length);
console.log('Arena questions in bank:', (s.match(/arena_q_/g) || []).length);
