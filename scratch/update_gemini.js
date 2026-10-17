const fs = require('fs');
let c = fs.readFileSync('courses/gemini_google.html', 'utf8');
if (!c.includes('antigravity.html')) {
  c = c.replace(
    'href="ai_12.html"',
    'href="antigravity.html"><i class="fa-solid fa-robot"></i> Antigravity</a><a class="px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1" href="ai_12.html"'
  );
  fs.writeFileSync('courses/gemini_google.html', c, 'utf8');
  console.log('Updated gemini_google.html successfully!');
} else {
  console.log('Already contains antigravity.html');
}
