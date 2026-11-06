const fs = require('fs');
const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const pos = content.indexOf('tienganh_8.html');
console.log('tienganh_8 position:', pos);
if (pos !== -1) {
  // Let's print out the next 800 characters after tienganh_8 card
  const endOfCard = content.indexOf('</div>\n                    </div>', pos);
  console.log('End of card pos:', endOfCard);
  console.log('Snippet after card:\n', content.substring(pos, pos + 1200));
}
