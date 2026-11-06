const fs = require('fs');

function searchAll(dir, text) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = dir + '/' + item;
    try {
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        searchAll(full, text);
      } else if (stat.isFile()) {
        const c = fs.readFileSync(full, 'utf8');
        if (c.includes(text)) {
          console.log('MATCH:', full);
        }
      }
    } catch(e){}
  }
}

searchAll('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform', 'Các trường hợp bằng nhau đặc biệt của hai tam giác vuông');
searchAll('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform', 'Huyền - Áp dụng trực tiếp định lí Py-ta-go');
