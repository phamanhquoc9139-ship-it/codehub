// scratch/fix_isotopes.js
const fs = require('fs');

function fixFile(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  
  // Replace unanchored isotope patterns
  // Pattern 1: (?<![a-zA-Z0-9\}])\^\{([A-Za-z0-9\+\-]+)\}_\{([A-Za-z0-9\+\-]+)\}
  c = c.replace(/(?<![a-zA-Z0-9\}])\^\{([A-Za-z0-9\+\-]+)\}_\{([A-Za-z0-9\+\-]+)\}/g, '{}^{$1}_{$2}');
  
  // Pattern 2: (?<![a-zA-Z0-9\}])\^\{([A-Za-z0-9\+\-]+)\}([A-Za-z])
  c = c.replace(/(?<![a-zA-Z0-9\}])\^\{([A-Za-z0-9\+\-]+)\}([A-Za-z])/g, '{}^{$1}$2');
  
  // Pattern 3: \to ^{...} or + ^{...} or 3\,^{...}
  c = c.replace(/\\to\s*\{?\^/g, '\\to {}^{');
  c = c.replace(/\+\s*\{?\^/g, '+ {}^{');
  c = c.replace(/3\\,\s*\{?\^/g, '3\\,{}^{');
  
  // Clean up any double braces
  c = c.replace(/\{\{\}\^/g, '{}^');
  c = c.replace(/\{\{\}\^/g, '{}^');

  fs.writeFileSync(filePath, c, 'utf8');
  console.log('Fixed', filePath);
}

fixFile('scratch/generate_cd_hoahoc10_data.js');
fixFile('scratch/generate_cd_hoahoc10_review_arena.js');
