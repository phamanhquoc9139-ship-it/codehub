const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/mithuat_8.html', 'utf8');

const idx = content.indexOf('dau-truong-trang-nguyen');
if (idx !== -1) {
  const nextIdx = content.indexOf('dau-truong-trang-nguyen', idx + 30);
  console.log(content.substring(nextIdx, nextIdx + 2000));
}
