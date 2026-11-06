const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/lsdl_8.html', 'utf8');

const idx = content.indexOf('handbookModal');
if (idx !== -1) {
  console.log('--- FOUND handbookModal ---');
  console.log(content.substring(idx - 100, idx + 2500));
} else {
  console.log('handbookModal not found');
}
