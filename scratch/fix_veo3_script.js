const fs = require('fs');

let scriptContent = fs.readFileSync('C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\9168c62b-8394-4661-a83f-694947522547\\scratch\\create_veo3_course.js', 'utf8');

// Replace $360^\circ$ and $360^\\circ$ with 360°
scriptContent = scriptContent.replace(/\$360\\+(\^\\circ|\^circ)\$/g, '360°');
scriptContent = scriptContent.replace(/\$360\^\\circ\$/g, '360°');
scriptContent = scriptContent.replace(/\$360\^\{\\circ\}\$/g, '360°');

// Replace $x$, $y$, $t$
scriptContent = scriptContent.replace('(chiều rộng $x$, chiều cao $y$) và thời gian (chiều thời gian $t$)', '(chiều rộng x, chiều cao y) và thời gian (chiều thời gian t)');

fs.writeFileSync('C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\9168c62b-8394-4661-a83f-694947522547\\scratch\\create_veo3_course.js', scriptContent, 'utf8');
console.log('Updated create_veo3_course.js successfully!');
