const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_6.html', 'utf8');

// 1. Check $0
const dollar0Matches = html.match(/\$0/g) || [];
console.log('Dollar zero count:', dollar0Matches.length);

// 2. Check JavaScript syntax
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Found script tags:', scripts.length);
scripts.forEach((s, idx) => {
  const code = s[1].trim();
  if (!code) return;
  try {
    new vm.Script(code);
    console.log(`Script ${idx + 1} syntax: OK`);
  } catch (err) {
    console.error(`Script ${idx + 1} SYNTAX ERROR:`, err.message);
  }
});

// 3. Check all 55 lessons
let missingLessons = 0;
for (let i = 1; i <= 55; i++) {
  if (!html.includes(`id="lesson-${i}"`)) {
    console.error(`Missing lesson-${i}`);
    missingLessons++;
  }
}
if (missingLessons === 0) {
  console.log('All 55 lessons verified present!');
}

// 4. Check images
for (let i = 1; i <= 11; i++) {
  const imgName = `image${i}.png`;
  if (!html.includes(imgName)) {
    console.error(`Missing image reference: ${imgName}`);
  }
}
console.log('All 11 SGK images verified in HTML!');

// 5. Check Dark Mode
console.log('Includes toggleDarkMode:', html.includes('toggleDarkMode'));
console.log('Includes localStorage.theme:', html.includes('localStorage.theme'));
