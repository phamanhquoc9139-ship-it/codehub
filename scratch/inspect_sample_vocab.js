const path = require('path');
const data = require(path.join(__dirname, 'tienganh10_data.js'));

console.log('Unit 1 vocab sample:', data.units['1'].vocab[0]);
console.log('Unit 1 quiz sample:', data.units['1'].quiz[0]);
console.log('Unit 1 skills keys:', Object.keys(data.units['1'].skills));
