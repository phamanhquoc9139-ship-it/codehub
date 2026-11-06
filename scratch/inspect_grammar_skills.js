const path = require('path');
const data = require(path.join(__dirname, 'tienganh10_data.js'));

console.log('Unit 1 grammar sample:', JSON.stringify(data.units['1'].grammar[0], null, 2));
console.log('Unit 1 skills sample reading:', JSON.stringify(data.units['1'].skills.reading, null, 2));
console.log('Review 1 contentSummary sample:', JSON.stringify(data.units['review-1'].contentSummary, null, 2));
