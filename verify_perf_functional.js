const fs = require('fs');
const vm = require('vm');
const path = require('path');

const base = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const html = fs.readFileSync(path.join(base, 'index.html'), 'utf8');

let errors = 0;
function check(label, cond) {
  if (!cond) { console.error('FAIL:', label); errors++; }
  else console.log('PASS:', label);
}

// 1. Validate all inline scripts in index.html
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
scripts.forEach((m, i) => {
  const code = m[1].trim();
  if (!code) return;
  try {
    new vm.Script(code);
  } catch (e) {
    console.error('FAIL: Inline script #' + (i + 1) + ' syntax error:', e.message);
    errors++;
  }
});
console.log('Checked', scripts.length, 'script tags in index.html.');

// 2. Validate external JS files in vm / syntax check & evaluate courses-data.js
const ctx = { window: {} };
vm.createContext(ctx);
const coursesJs = fs.readFileSync(path.join(base, 'scripts', 'courses-data.js'), 'utf8');
vm.runInContext(coursesJs, ctx);

const courses = ctx.window.CODEHUB_COURSES;
check('CODEHUB_COURSES count === 281', Array.isArray(courses) && courses.length === 281);

let tokenLeftovers = 0;
let missingLinks = 0;
courses.forEach((c) => {
  const rendered = ctx.window.renderCodeHubCard(c);
  if (/~\d+~/.test(rendered)) tokenLeftovers++;
  if (!c.l || c.l === '#') missingLinks++;
});
check('Zero leftover compression tokens across 281 cards', tokenLeftovers === 0);
check('Zero missing href links across 281 cards', missingLinks === 0);

// 3. Check specific courses are present in exact order
check('First course is Luyện Thi IC3 - GS3', courses[0].t === 'Luyện Thi IC3 - GS3');
check('Contains Dịch Vụ Mạng', courses.some(c => c.l === 'courses/dich_vu_mang.html'));
check('Contains Cisco CCNA & CCNP', courses.some(c => c.l === 'courses/ccna.html') && courses.some(c => c.l === 'courses/ccnp.html'));
check('Contains Tiếng Anh 10', courses.some(c => c.l === 'courses/tienganh_10.html'));

// 4. Verify DOM structure improvements
check('Has <main id="main-content">', html.includes('<main id="main-content">') && html.includes('</main>'));
check('Has meta description', html.includes('name="description"'));
check('Has canonical link', html.includes('rel="canonical"'));
check('Has inline SVG favicon', html.includes('rel="icon"'));
check('Removed broken styles/index.css', !html.includes('styles/index.css'));
check('Removed eager pyodide.js', !html.includes('full/pyodide.js'));
check('Removed eager jszip.min.js', !html.includes('jszip.min.js'));
check('Removed cdn.tailwindcss.com', !html.includes('cdn.tailwindcss.com'));
check('Uses styles/home.min.css', html.includes('styles/home.min.css'));
check('App.js lazy-loads pyodide', fs.readFileSync(path.join(base, 'scripts', 'app.js'), 'utf8').includes('ensurePyodide'));
check('PPTX presenter lazy-loads jszip', fs.readFileSync(path.join(base, 'scripts', 'pptx-presenter.js'), 'utf8').includes('ensureJSZip'));

if (errors === 0) {
  console.log('\nALL FUNCTIONAL & STRUCTURAL CHECKS PASSED!');
} else {
  console.error('\nFailed with', errors, 'errors.');
  process.exit(1);
}
