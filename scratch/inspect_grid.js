const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const gridLines = lines.slice(279, 3563);
const gridContent = gridLines.join('\n');

// Let's count direct div children of #courses-grid
// In static HTML, each top-level card starts with `<div class="bg-white dark:bg-gray-700`
const cardRegex = /<div class="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer/g;
let count = 0;
while (cardRegex.exec(gridContent) !== null) {
  count++;
}
console.log('Total card containers matching exact class:', count);

// Let's count all `<div class="bg-white dark:bg-gray-700` in grid
const cardRegex2 = /<div class="bg-white dark:bg-gray-700/g;
let count2 = 0;
while (cardRegex2.exec(gridContent) !== null) {
  count2++;
}
console.log('Total divs with bg-white dark:bg-gray-700 in grid:', count2);
