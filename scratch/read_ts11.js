const fs = require('fs');
const ts = fs.readFileSync('scratch/diali11_tools_skills.js', 'utf8');
console.log(ts.slice(0, 1500));
