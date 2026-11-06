const fs = require('fs');

const t7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

// Tìm tất cả các thẻ style trong toan_7
const styleRegex = /<style[\s\S]*?<\/style>/gi;
let match;
while ((match = styleRegex.exec(t7)) !== null) {
  console.log('STYLE TAG:\n', match[0]);
}

// Kiểm tra font family và body class
const bodyIdx = t7.indexOf('<body');
console.log('BODY TAG:\n', t7.substring(bodyIdx, bodyIdx + 200));
