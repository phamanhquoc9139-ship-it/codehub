const fs = require('fs');
const path = require('path');

const filePath = path.resolve('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/amnhac_9.html');
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

console.log('Total lines:', lines.length);

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<article id="bai-')) {
    console.log(`Line ${i + 1}: ${lines[i].trim()}`);
    for (let j = i + 1; j < i + 25 && j < lines.length; j++) {
      if (lines[j].includes('<h3')) {
        console.log(`   Title: ${lines[j].trim()}`);
        if (lines[j + 1]) console.log(`          ${lines[j + 1].trim()}`);
        break;
      }
    }
  }
}
