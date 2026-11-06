const fs = require('fs');

const path = 'courses/gdqp_10.html';
const html = fs.readFileSync(path, 'utf8');

console.log('=== VERIFYING GDQP 10 HTML ===');
console.log('Total file size:', html.length, 'bytes');

// 1. Check all 12 lessons exist
const missingLessons = [];
for (let i = 1; i <= 12; i++) {
  if (!html.includes(`id="bai-${i}"`)) {
    missingLessons.push(`id="bai-${i}"`);
  }
  if (!html.includes(`href="#bai-${i}"`)) {
    missingLessons.push(`href="#bai-${i}"`);
  }
}
console.log('Missing lesson IDs / Links:', missingLessons.length === 0 ? 'NONE (All 12 found)' : missingLessons);

// 2. Check for unrendered markdown
const rawAsterisks = (html.match(/\*\*[^*]+\*\*/g) || []);
console.log('Unrendered **bold** markdown tags:', rawAsterisks.length);
if (rawAsterisks.length > 0) {
  console.log('Sample raw asterisks:', rawAsterisks.slice(0, 5));
}

const rawTablePipes = (html.match(/\|[\s-]+\|/g) || []);
console.log('Unrendered markdown table dividers (|---|):', rawTablePipes.length);

const rawLatex = (html.match(/\$[a-zA-Z\\]+\$/g) || []);
console.log('Raw LaTeX patterns:', rawLatex.length);

// 3. Check for HTML tables
const tableCount = (html.match(/<table[\s>]/g) || []).length;
console.log('HTML <table> elements rendered:', tableCount);

// 4. Check for SVG diagrams
const svgMatches = html.match(/<svg[\s\S]*?<\/svg>/g) || [];
console.log('Rendered SVG diagrams:', svgMatches.length);

// 5. Check sidebar structure
const sidebarItems = html.match(/<a href="#bai-\d+"[^>]*>[\s\S]*?<\/a>/g) || [];
console.log('Sidebar lesson links count:', sidebarItems.length);
let hasTruncateInTitle = false;
sidebarItems.forEach((item, idx) => {
  if (item.includes('truncate') && item.includes('leading-snug')) {
    hasTruncateInTitle = true;
    console.log(`Warning: Item ${idx+1} has truncate on title!`);
  }
});
if (!hasTruncateInTitle) {
  console.log('Sidebar titles: CLEAN (no truncate class on titles, leading-snug wrap applied)');
}

// 6. Check Mini-Quizzes
const quizHeaders = (html.match(/Mini-Quiz Củng Cố Bài \d+/g) || []);
console.log('Mini-Quiz headers found:', quizHeaders.length);

// 7. Check exam questions
const examMatch = html.match(/const questions = (\[[\s\S]*?\]);/);
if (examMatch) {
  try {
    const examQuestions = JSON.parse(examMatch[1]);
    console.log('Exam modal questions loaded:', examQuestions.length);
  } catch(e) {
    console.log('Exam questions JSON parse status: (defined as JS literal)');
  }
}

// 8. Check review table and terms
console.log('Has bang-on-tap section?', html.includes('id="bang-on-tap-nhanh"'));
console.log('Has thuat-ngu section?', html.includes('id="thuat-ngu-trong-sach"'));

// 9. Check safety alerts
console.log('Has safety alert callouts?', html.includes('border-amber-500') || html.includes('border-rose-500'));

// 10. Check identical quocphong_10.html
const htmlQP = fs.readFileSync('courses/quocphong_10.html', 'utf8');
console.log('quocphong_10.html === gdqp_10.html ?', htmlQP === html);
