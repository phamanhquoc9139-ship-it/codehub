const fs = require('fs');
const code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/build_vatly10_toan9_theme.js', 'utf8');
const vm = require('vm');
const start = code.indexOf('const lessonQuizzes = {');
const end = code.indexOf('};', start) + 2;
const snippet = code.substring(start, end) + '; lessonQuizzes;';
const res = vm.runInNewContext(snippet);
console.log('Total quizzes defined:', Object.keys(res).length);
