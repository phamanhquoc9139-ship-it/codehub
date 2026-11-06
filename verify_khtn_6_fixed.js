const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/khtn_6.html', 'utf8');

// Check $0
const dollar0 = (html.match(/\$0/g) || []).length;
console.log('Dollar zero count:', dollar0);

// Check raw $\rightarrow$
const arrowMatches = (html.match(/\\\rightarrow/g) || []).length;
console.log('Raw \\rightarrow count:', arrowMatches);

// Check scripts syntax
const scriptTags = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Found script tags:', scriptTags.length);
scriptTags.forEach((match, idx) => {
  const code = match[1];
  if (!code.trim()) return;
  try {
    new vm.Script(code);
    console.log(`Script ${idx + 1} syntax: OK`);
  } catch (err) {
    console.error(`Script ${idx + 1} SYNTAX ERROR:`, err.message);
  }
});

// Check lesson 7 content in html
const pos7 = html.indexOf('id="lesson-7"');
if (pos7 !== -1) {
  console.log('Lesson 7 snippet:\n', html.substring(pos7, pos7 + 1200));
}
