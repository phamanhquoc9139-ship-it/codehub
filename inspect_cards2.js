const fs = require('fs');
const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const pos = indexHtml.indexOf('gdtc_6.html');
if (pos !== -1) {
  console.log('Context around gdtc_6.html:\n', indexHtml.substring(pos - 400, pos + 400));
} else {
  console.log('gdtc_6.html not found, checking pe_6:');
  const pos2 = indexHtml.indexOf('pe_6');
  console.log(pos2 !== -1 ? indexHtml.substring(pos2 - 200, pos2 + 200) : 'not found');
}
