const fs = require('fs');
const helper = fs.readFileSync('scratch/vatly10_parser_helper.js', 'utf8');

console.log('vatly10_parser_helper preview:');
console.log(helper.substring(0, 1500));
