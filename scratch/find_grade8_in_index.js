const fs = require('fs');

const idx = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');

['gdcd_8', 'amnhac_8', 'congnghe_8', 'tinhoc_8', 'van_8', 'toan_8'].forEach(m => {
  const pos = idx.indexOf(m);
  console.log(`Match for ${m}: pos=${pos}`);
  if (pos !== -1) {
    console.log(idx.substring(pos - 300, pos + 400));
  }
});
