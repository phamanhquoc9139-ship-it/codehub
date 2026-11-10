const fs = require('fs');
const path = require('path');

const base = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform';
const html = fs.readFileSync(path.join(base, 'index.html'), 'utf8');

console.log('=== 1. HTML / LANDMARKS / SEO / META AUDIT ===');
console.log('Has <main>:', /<main[\s>]/i.test(html));
console.log('Has <meta name="description">:', /<meta[^>]*name=["']description["']/i.test(html));
console.log('Has <meta name="robots">:', /<meta[^>]*name=["']robots["']/i.test(html));
console.log('Has <link rel="canonical">:', /<link[^>]*rel=["']canonical["']/i.test(html));
console.log('Has <h1:', (html.match(/<h1[\s>]/gi) || []).length);
console.log('Has viewport user-scalable=no:', /user-scalable\s*=\s*no|maximum-scale\s*=\s*1(\.0)?/i.test(html));

// Check heading hierarchy
const headings = [...html.matchAll(/<(h[1-6])[^>]*>/gi)].map(m => m[1].toLowerCase());
const hCounts = {};
headings.forEach(h => hCounts[h] = (hCounts[h] || 0) + 1);
console.log('Heading counts:', hCounts);

// Check first 10 headings in order (excluding #courses-grid cards)
const beforeGrid = html.substring(0, html.indexOf('id="courses-grid"'));
const topHeadings = [...beforeGrid.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => `${m[1]}: ${m[2].replace(/<[^>]+>/g, '').trim().substring(0, 60)}`);
console.log('Headings before #courses-grid:', topHeadings);

const afterGrid = html.substring(html.indexOf('<!-- Playground Section -->'));
const bottomHeadings = [...afterGrid.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => `${m[1]}: ${m[2].replace(/<[^>]+>/g, '').trim().substring(0, 60)}`);
console.log('Headings after #courses-grid:', bottomHeadings);

console.log('\n=== 2. ACCESSIBILITY AUDIT ===');
// Images without alt
const imgs = [...html.matchAll(/<img[^>]*>/gi)].map(m => m[0]);
const imgsNoAlt = imgs.filter(img => !/\balt=/i.test(img));
console.log('Total <img>:', imgs.length, 'Missing alt:', imgsNoAlt.length);

// Buttons without accessible name (icon-only buttons without aria-label or text)
const btns = [...html.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/gi)];
const badBtns = [];
for (const b of btns) {
  const attrs = b[1];
  const inner = b[2].replace(/<[^>]+>/g, '').trim();
  if (!inner && !/aria-label=/i.test(attrs) && !/title=/i.test(attrs)) {
    badBtns.push(b[0].substring(0, 120));
  } else if (!inner && !/aria-label=/i.test(attrs)) {
    badBtns.push('[has title, no aria-label] ' + b[0].substring(0, 120));
  }
}
console.log('Buttons without text/aria-label (' + badBtns.length + '):', badBtns);

// Clickable divs with onclick in #courses-grid (nested interactive / non-accessible div onclick)
const divOnclicks = (html.match(/<div[^>]*onclick=/gi) || []).length;
console.log('<div> with onclick= count:', divOnclicks);

// Form inputs / contenteditable without label or aria-label
const inputs = [...html.matchAll(/<input[^>]*>/gi)].map(m => m[0]);
console.log('Inputs:', inputs);
const editables = [...html.matchAll(/contenteditable[^>]*>/gi)].map(m => m[0]);
console.log('Contenteditable count:', editables.length);

// Check role="listbox" without role="option" or aria-expanded
console.log('role="listbox" matches:', (html.match(/role="listbox"/g) || []).length);

console.log('\n=== 3. DEPRECATED APIs / CONSOLE / RESOURCE ERRORS ===');
// Check broken relative src/href
const localRefs = [...html.matchAll(/(?:src|href)=["']([^"':#]+)["']/gi)].map(m => m[1]);
const uniqueLocal = [...new Set(localRefs)];
const missingLocal = [];
for (const ref of uniqueLocal) {
  const cleanRef = ref.split('?')[0];
  if (!fs.existsSync(path.join(base, cleanRef))) {
    missingLocal.push(ref);
  }
}
console.log('Missing local files referenced in index.html:', missingLocal);

// Check Tailwind CDN usage & inline scripts
console.log('Uses cdn.tailwindcss.com:', html.includes('cdn.tailwindcss.com'));
console.log('Uses cdn.jsdelivr.net/pyodide:', html.includes('pyodide.js'));
console.log('Uses cdn.jsdelivr.net/npm/jszip:', html.includes('jszip.min.js'));
console.log('Uses unpkg/deprecated APIs:', /document\.write|unload|DOMSubtreeModified|webkitRequestFullscreen/i.test(html));
