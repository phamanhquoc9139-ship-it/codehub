const fs = require('fs');
const index = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx = index.indexOf('courses/gdtc_8.html');
const startCard = index.lastIndexOf('<div class="bg-white dark:bg-gray-700', idx);
const endCard = index.indexOf('</div>\n                    </div>', idx) + 26;
console.log(index.slice(startCard, endCard));
