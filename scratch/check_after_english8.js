const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const pos = content.indexOf('<!-- Course Card: Tiếng Anh 8 -->');
console.log('tienganh_8 comment pos:', pos);
if (pos !== -1) {
  const nextCommentPos = content.indexOf('<!-- Course Card:', pos + 30);
  console.log('Next card comment pos:', nextCommentPos);
  if (nextCommentPos !== -1) {
    console.log('Next card header:\n', content.substring(nextCommentPos, nextCommentPos + 100));
  } else {
    // maybe end of section
    console.log('End section around pos + 1500:\n', content.substring(pos + 1200, pos + 1700));
  }
}
