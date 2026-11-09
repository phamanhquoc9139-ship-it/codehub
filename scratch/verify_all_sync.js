const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, '../courses');

function compareFiles(f1, f2) {
  const b1 = fs.readFileSync(path.join(coursesDir, f1));
  const b2 = fs.readFileSync(path.join(coursesDir, f2));
  console.log(`${f1} vs ${f2}: ${b1.equals(b2) ? 'IDENTICAL BYTE-FOR-BYTE (' + b1.length + ' bytes)' : 'DIFFERENT'}`);
}

compareFiles('chuyende_toan_10.html', 'chuyende_toan10.html');
compareFiles('chuyende_vatli_11.html', 'chuyende_vatly_11.html');
compareFiles('chuyende_vatli_11.html', 'chuyende_ly_11.html');
compareFiles('chuyende_hoahoc_10.html', 'chuyende_hoahoc10.html');
compareFiles('chuyende_hoahoc_10.html', 'chuyende_hoa_10.html');
