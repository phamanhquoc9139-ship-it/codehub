const fs = require('fs');

const html7 = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/toan_7.html', 'utf8');

// Kiểm tra xem trong file có script nào thao tác DOM hoặc KaTeX render lặp lại không
const scripts = html7.match(/<script[\s\S]*?<\/script>/g);
console.log("Found", scripts.length, "scripts");
scripts.forEach((s, i) => {
  console.log(`--- SCRIPT ${i} (length: ${s.length}) ---`);
  if (s.length < 1500) {
    console.log(s);
  } else {
    console.log(s.substring(0, 300) + ' ... [TRUNCATED] ... ' + s.substring(s.length - 300));
  }
});
