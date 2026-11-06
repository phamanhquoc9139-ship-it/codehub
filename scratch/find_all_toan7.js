const fs = require('fs');
const path = require('path');

function findFiles(dir, pattern, results = []) {
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // ignore node_modules, .git, AppData (except gemini)
          if (file === 'node_modules' || file === '.git' || (file === 'AppData' && !dir.includes('.gemini'))) continue;
          findFiles(fullPath, pattern, results);
        } else if (stat.isFile()) {
          if (pattern.test(file)) {
            results.push({ path: fullPath, size: stat.size, mtime: stat.mtime });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

const res = findFiles('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform', /(toan|math).*7.*\.html$/i);
console.log('Results in cs-learning-platform:', res);

const res2 = findFiles('C:/Users/ADMIN/Desktop', /(toan|math).*7.*\.html$/i);
console.log('Results in Desktop:', res2);

const res3 = findFiles('C:/Users/ADMIN/Downloads', /(toan|math).*7.*\.html$/i);
console.log('Results in Downloads:', res3);
