const fs = require('fs');
const indexContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

const idx = indexContent.indexOf('courses/tienganh_10.html');
const startCard = indexContent.lastIndexOf('<div class="bg-white dark:bg-gray-700', idx);
const endCard = indexContent.indexOf('<!-- Course Card: Tin học 10 -->', idx);
console.log(indexContent.slice(startCard, endCard));
