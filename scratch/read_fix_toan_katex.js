const fs = require('fs');
if (fs.existsSync('scratch/fix_toan_katex.js')) {
  console.log(fs.readFileSync('scratch/fix_toan_katex.js', 'utf8'));
}
