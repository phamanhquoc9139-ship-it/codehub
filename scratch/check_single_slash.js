const fs = require('fs');
let code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_toan7_perfect_katex.js', 'utf8');

// Tìm các bài trong lessonMathContent có single backslash trước (, ), [, ], triangle, rightarrow
const lines = code.split('\n');
let singleSlashCount = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Kiểm tra nếu có \( mà không phải \\(
  if (/(?<!\\)\\\([^\\]/.test(line) || /(?<!\\)\\\[[^\\]/.test(line)) {
    singleSlashCount++;
    if (singleSlashCount < 10) {
      console.log(`Line ${i+1}: ${line.trim()}`);
    }
  }
}
console.log("Total single-backslash lines found:", singleSlashCount);
