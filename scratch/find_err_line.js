const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengphap_7.html', 'utf8');
const scriptMatches = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
const script1 = scriptMatches[1][1];

// Find exact error line
try {
  new vm.Script(script1);
} catch (err) {
  console.log('Error message:', err.message);
  console.log('Stack:', err.stack);
}
