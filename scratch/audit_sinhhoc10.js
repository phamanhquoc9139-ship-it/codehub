const fs = require('fs');
const path = require('path');
const vm = require('vm');

const htmlPath = path.join(__dirname, '..', 'courses', 'sinhhoc_10.html');
const html = fs.readFileSync(htmlPath, 'utf8');

console.log('=== AUDIT: courses/sinhhoc_10.html ===');
console.log('File size:', (html.length / 1024).toFixed(1) + ' KB');

// 1. Check 26 lesson articles & sidebar links
let missingArticles = [];
let missingSidebarLinks = [];
for (let i = 1; i <= 26; i++) {
  if (!html.includes(`id="bai-${i}"`)) missingArticles.push(`#bai-${i}`);
  if (!html.includes(`href="#bai-${i}"`)) missingSidebarLinks.push(`href="#bai-${i}"`);
}
console.log('Missing lesson articles:', missingArticles.length === 0 ? 'NONE (All 26 present)' : missingArticles.join(', '));
console.log('Missing sidebar links:', missingSidebarLinks.length === 0 ? 'NONE (All 26 present)' : missingSidebarLinks.join(', '));
console.log('Bảng ôn tập liên kết toàn môn present:', html.includes('id="bang-on-tap-toan-mon"') && html.includes('href="#bang-on-tap-toan-mon"'));

// 2. Check SVG count & Quiz count
const svgCount = (html.match(/<svg[\s>]/g) || []).length;
const quizItems = (html.match(/class="quiz-item\b/g) || []).length;
console.log('Total <svg> elements:', svgCount);
console.log('Total .quiz-item elements:', quizItems, '(expected 78 = 26 * 3)');

// 3. Check Sidebar scroll CSS classes
const hasFlexAside = html.includes('hidden lg:flex lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden');
const hasMinH0Nav = html.includes('id="sidebar-nav"') && html.includes('flex-1 min-h-0');
console.log('Sidebar flex scroll constraints:', { hasFlexAside, hasMinH0Nav });

// 4. Check for undefined / NaN
const badTokens = html.match(/\bundefined\b|\bNaN\b/g) || [];
console.log('Undefined/NaN occurrences:', badTokens.length);

// 5. Validate inline scripts
const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let idx = 0;
while ((match = scriptRegex.exec(html)) !== null) {
  idx++;
  new vm.Script(match[1]);
}
console.log('Validated inline scripts:', idx);

// 6. Check math delimiters balance in main content
const bodyContent = html.split('<main')[1].split('</main>')[0];
const blockMaths = [...bodyContent.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m => m[1]);
const bodyNoBlock = bodyContent.replace(/\$\$[\s\S]*?\$\$/g, '');
const inlineMaths = [...bodyNoBlock.matchAll(/\$([^$\n]+?)\$/g)].map(m => m[1]);
const remainingDollars = (bodyNoBlock.replace(/\$([^$\n]+?)\$/g, '').match(/\$/g) || []).length;

console.log(`KaTeX formulas in <main>: ${blockMaths.length} block, ${inlineMaths.length} inline. Unmatched '$' in <main>: ${remainingDollars}`);
