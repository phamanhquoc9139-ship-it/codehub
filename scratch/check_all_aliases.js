const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses';
const files = fs.readdirSync(dir);

console.log('Hoa 12 files:', files.filter(f => f.includes('hoa') && f.includes('12')));
console.log('Dia 12 files:', files.filter(f => f.includes('dia') && f.includes('12')));
console.log('GDQP 12 files:', files.filter(f => (f.includes('gdqp') || f.includes('quocphong')) && f.includes('12')));

// Check content comparison between aliases
function checkAliases(fileList) {
  for (const f of fileList) {
    const p = path.join(dir, f);
    const content = fs.readFileSync(p, 'utf8');
    const hasKiếnThức1 = content.includes('1. Kiến thức trọng tâm phần 1');
    const hasDashes = content.includes('<li>---</li>') || content.includes('>---<');
    const hasEmptyDothi = content.includes('Hai mặt của đô thị hóa') && content.includes('<div class="space-y-2.5 mt-2">\n        </div>');
    console.log(f, {
      size: fs.statSync(p).size,
      mtime: fs.statSync(p).mtime,
      hasKiếnThức1,
      hasDashes,
      hasEmptyDothi
    });
  }
}

console.log('\n--- Checking Hoa 12 files ---');
checkAliases(files.filter(f => f.includes('hoa') && f.includes('12')));

console.log('\n--- Checking Dia 12 files ---');
checkAliases(files.filter(f => f.includes('dia') && f.includes('12')));
