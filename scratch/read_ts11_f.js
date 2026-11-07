const fs = require('fs');
const ts = fs.readFileSync('scratch/diali11_tools_skills.js', 'utf8');
const p = ts.indexOf('formulas');
console.log(ts.slice(p, p + 2000));
