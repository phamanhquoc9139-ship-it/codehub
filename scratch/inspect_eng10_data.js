const path = require('path');
const data = require(path.join(__dirname, 'tienganh10_data.js'));

console.log('typeof units:', typeof data.units, Array.isArray(data.units));
if (typeof data.units === 'object') {
  console.log('Unit keys:', Object.keys(data.units));
}
