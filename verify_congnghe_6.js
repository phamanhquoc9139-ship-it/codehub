const fs = require('fs');

const filePath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html';
const content = fs.readFileSync(filePath, 'utf8');

console.log('File size:', content.length, 'bytes');

// Check 4 chapters
const missingChapters = [];
for (let i = 1; i <= 4; i++) {
  if (!content.includes('id="chuong-' + i + '"')) missingChapters.push(i);
}
console.log('Missing chapters (1..4):', missingChapters.length ? missingChapters : 'None (All 4 chapters present!)');

// Check 14 lessons
const missingLessons = [];
for (let i = 1; i <= 14; i++) {
  if (!content.includes('id="bai-' + i + '"')) missingLessons.push(i);
}
console.log('Missing lessons (1..14):', missingLessons.length ? missingLessons : 'None (All 14 lessons present!)');

// Check 7 sections in lessons
console.log('Mục tiêu headers count:', (content.match(/1\. Mục tiêu cần đạt/g) || []).length);
console.log('Kiến thức headers count:', (content.match(/2\. Kiến thức trọng tâm/g) || []).length);
console.log('Ghi nhớ headers count:', (content.match(/4\. Ghi nhớ cốt lõi/g) || []).length);
console.log('Luyện tập headers count:', (content.match(/5\. Câu hỏi luyện tập/g) || []).length);
console.log('Vận dụng headers count:', (content.match(/6\. Vận dụng đời sống/g) || []).length);
console.log('Trắc nghiệm headers count:', (content.match(/7\. Kiểm tra nhanh kiến thức/g) || []).length);

// Check SVG diagrams count
const svgMatches = content.match(/<svg\b/gi) || [];
console.log('SVG diagrams count:', svgMatches.length);

// Check 0 img tags
const imgMatches = content.match(/<img\b/gi) || [];
console.log('External img tags count:', imgMatches.length, '(expected 0)');

// Check Interactive Calculators
console.log('Calorie calculator present:', content.includes('calculateMealCalories'));
console.log('Electricity calculator present:', content.includes('calculateElectricity'));

// Check Trạng Nguyên questions
const tnQuestions = content.match(/name="tn_q_\d+"/g) || [];
console.log('Trạng Nguyên question inputs:', tnQuestions.length, '(expected 100 for 25 questions * 4 options)');

// Check alias
const aliasContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/technology_6.html', 'utf8');
console.log('Alias technology_6.html identical:', content === aliasContent);

// Check index.html
const indexContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
console.log('Index.html links congnghe_6.html:', indexContent.includes('courses/congnghe_6.html'));
console.log('Index.html card mentions Công Nghệ 6:', indexContent.includes('Công Nghệ 6</h3>'));
