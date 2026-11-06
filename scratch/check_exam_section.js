const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_congnghe_8_page.js', 'utf8');

const idxExam = content.indexOf('trạng nguyên');
if (idxExam !== -1) {
  console.log(content.substring(idxExam - 200, idxExam + 400));
} else {
  const idxExam2 = content.indexOf('examTimer');
  console.log(content.substring(idxExam2 - 200, idxExam2 + 400));
}
