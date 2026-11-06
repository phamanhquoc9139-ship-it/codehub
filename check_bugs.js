const fs = require('fs');

try {
  const cn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/congnghe_6.html', 'utf8');
  console.log('congnghe_6.html has "$0":', cn.includes('$0'));
  if (cn.includes('$0')) {
    const matches = cn.match(/\$0/g);
    console.log('Occurrences of "$0" in congnghe_6:', matches ? matches.length : 0);
  }
} catch (e) {
  console.log('congnghe error:', e.message);
}

try {
  const khtn = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_6.html', 'utf8');
  console.log('khtn_6.html has "\\\\rightarrow":', khtn.includes('\\rightarrow'));
  if (khtn.includes('\\rightarrow')) {
    const matches = khtn.match(/\\rightarrow/g);
    console.log('Occurrences of "\\\\rightarrow" in khtn_6:', matches ? matches.length : 0);
  }
} catch (e) {
  console.log('khtn error:', e.message);
}

try {
  const gdcd = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_6.html', 'utf8');
  console.log('gdcd_6.html length:', gdcd.length);
  // check dark mode toggle in gdcd
  console.log('gdcd has toggleDarkMode:', gdcd.includes('toggleDarkMode'));
} catch (e) {
  console.log('gdcd error:', e.message);
}
