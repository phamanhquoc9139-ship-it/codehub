const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.split('$360^\\circ$').join('360°');
  content = content.split('$360^\\circ$').join('360°');
  content = content.replace(/\$360[^\$]*\$/g, '360°');
  content = content.replace('(chiều rộng $x$, chiều cao $y$) và thời gian (chiều thời gian $t$)', '(chiều rộng x, chiều cao y) và thời gian (chiều thời gian t)');
  fs.writeFileSync(filePath, content, 'utf8');
}

fixFile('C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\9168c62b-8394-4661-a83f-694947522547\\scratch\\create_veo3_course.js');
fixFile('C:\\Users\\ADMIN\\.gemini\\antigravity\\scratch\\cs-learning-platform\\courses\\veo3.html');

console.log('Fixed both files!');
