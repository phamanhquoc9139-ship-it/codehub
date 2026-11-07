const fs = require('fs');
const data = require('./hoahoc10_data.js');

console.log('quickFormulaTable rows:', data.quickFormulaTable ? data.quickFormulaTable.length : 0);
console.log('safetyGuidelines count:', data.safetyGuidelines ? data.safetyGuidelines.length : 0);
if (data.quickFormulaTable) console.log('Sample formula:', data.quickFormulaTable[0]);
