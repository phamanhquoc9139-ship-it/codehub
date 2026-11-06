const path = require('path');
const data = require(path.join(__dirname, 'tienganh10_data.js'));

for (const k in data.units) {
  const u = data.units[k];
  if (u.pronunciation) {
    console.log(`Unit ${k} pronunciation:`, typeof u.pronunciation.examples, u.pronunciation.examples);
  }
}
