const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/hdtn_6.html', 'utf8');

// 1. Check $0
const dollar0 = (html.match(/\$0/g) || []).length;
console.log('Dollar zero count:', dollar0);

// 2. Check scripts syntax
const scriptTags = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Found script tags:', scriptTags.length);
let scriptError = false;
scriptTags.forEach((match, idx) => {
  const code = match[1];
  if (!code.trim()) return;
  try {
    new vm.Script(code);
    console.log(`Script ${idx + 1} syntax: OK`);
  } catch (err) {
    console.error(`Script ${idx + 1} SYNTAX ERROR:`, err.message);
    scriptError = true;
  }
});

// 3. Check lesson IDs
for (let i = 1; i <= 30; i++) {
  if (!html.includes(`id="lesson-${i}"`)) {
    console.error(`Missing lesson-${i}`);
  }
}
console.log('Lesson id check completed.');

// 4. Check dark mode
console.log('Includes toggleDarkMode:', html.includes('toggleDarkMode'));
console.log('Includes localStorage.theme:', html.includes('localStorage.theme'));
