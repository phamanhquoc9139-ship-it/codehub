const fs = require('fs');

const c = fs.readFileSync('courses/ktpl_10.html', 'utf8');
const tableLines = c.match(/\|[^|\n]+\|/g) || [];
console.log('Remaining unrendered table row matches:', tableLines.length);
if (tableLines.length > 0) {
  tableLines.slice(0, 10).forEach(l => console.log('  ', l));
}

const starMatches = c.match(/\*\*[^*]+\*\*/g) || [];
console.log('Remaining unrendered bold matches:', starMatches.length);
if (starMatches.length > 0) {
  starMatches.forEach(l => console.log('  ', l));
}
