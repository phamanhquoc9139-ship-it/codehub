const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tinhoc_10.html', 'utf8');

console.log('SVG count in tinhoc_10:', (content.match(/<svg/g) || []).length);
console.log('Quizzes count:', (content.match(/quiz-btn|quiz-card|quiz-item/g) || []).length);
console.log('Modal formulas:', content.includes('id="modal-formulas"') || content.includes('id="modal-python"'));
console.log('Modal exam:', content.includes('id="modal-exam"'));
console.log('Check dark mode classes:', content.includes('dark:bg-slate-850'));
