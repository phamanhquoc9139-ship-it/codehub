const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const gdcd7Idx = indexHtml.indexOf('courses/gdcd_7.html');
console.log('GDCD 7 index:', gdcd7Idx);
if (gdcd7Idx !== -1) {
  // find the end of the GDCD 7 card
  const endCard = indexHtml.indexOf('</div>\n                    </div>', gdcd7Idx);
  console.log('End of GDCD 7 card found at:', endCard);
  console.log(indexHtml.substring(gdcd7Idx - 100, endCard + 30));
}
