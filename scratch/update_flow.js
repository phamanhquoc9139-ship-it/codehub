const fs = require('fs');
let c = fs.readFileSync('courses/google_flow.html', 'utf8');
if (!c.includes('veo3.html')) {
  c = c.replace(
    'href="ai_10.html"',
    'href="veo3.html"><i class="fa-solid fa-film"></i> Veo 3</a><a class="px-2.5 py-1 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1" href="ai_10.html"'
  );
  fs.writeFileSync('courses/google_flow.html', c, 'utf8');
  console.log('Updated google_flow.html with Veo 3 successfully!');
} else {
  console.log('Already contains veo3.html');
}
