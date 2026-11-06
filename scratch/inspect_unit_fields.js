const path = require('path');
const data = require(path.join(__dirname, 'tienganh10_data.js'));
console.log('Unit 1 keys:', Object.keys(data.units['1']));
console.log('Unit 1 unitId or id:', data.units['1'].id, data.units['1'].unitNum);
console.log('Review 1 keys:', Object.keys(data.units['review-1']));
