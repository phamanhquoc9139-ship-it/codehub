const fs = require('fs');
const path = require('path');

const indexPath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

const oldBadge = `Hotline Cứu Hộ 111-115`;
if (content.includes(oldBadge)) {
  const lines = content.split('\r\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Hotline Cứu Hộ 111-115')) {
      // Line i is the icon line, line i-1 is the span open, line i+1 is span close
      lines[i-1] = lines[i-1].replace('text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60', 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60')
                             .replace('border-rose-200 dark:border-rose-800', 'border-emerald-200 dark:border-emerald-800');
      lines[i] = `                                        <i class="fa-solid fa-book-bookmark"></i> Sổ Tay GDCD 6`;
      console.log('Replaced badge at line', i + 1);
      break;
    }
  }
  fs.writeFileSync(indexPath, lines.join('\r\n'), 'utf-8');
  console.log('Successfully updated index.html badge');
} else {
  console.log('Old badge not found in index.html');
}
