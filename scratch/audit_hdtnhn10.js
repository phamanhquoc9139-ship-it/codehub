const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'courses', 'hdtnhn_10.html');
const html = fs.readFileSync(filePath, 'utf8');

let errors = 0;
function check(cond, msg) {
  if (!cond) {
    console.error('❌ FAIL:', msg);
    errors++;
  } else {
    console.log('✅ PASS:', msg);
  }
}

// 1. Check all 11 topics and 5 sub-sections each
for (let i = 1; i <= 11; i++) {
  check(html.includes(`id="chude-${i}"`), `Topic ${i} card (#chude-${i}) exists`);
  check(html.includes(`id="cd${i}-muc-tieu"`), `Topic ${i} Section A (#cd${i}-muc-tieu) exists`);
  check(html.includes(`id="cd${i}-hoat-dong"`), `Topic ${i} Section B (#cd${i}-hoat-dong) exists`);
  check(html.includes(`id="cd${i}-so-do"`), `Topic ${i} Section C (#cd${i}-so-do) exists`);
  check(html.includes(`id="cd${i}-san-pham"`), `Topic ${i} Section D (#cd${i}-san-pham) exists`);
  check(html.includes(`id="cd${i}-trac-nghiem"`), `Topic ${i} Section E (#cd${i}-trac-nghiem) exists`);
  check(html.includes(`id="portfolio-${i}-0"`), `Topic ${i} interactive portfolio input exists`);
  check(html.includes(`id="crit-dat-${i}-0"`), `Topic ${i} Đạt/Chưa đạt self-assessment buttons exist`);
}

// 2. Check SVG count & Quiz cards count
const svgCount = (html.match(/<svg[\s>]/g) || []).length;
check(svgCount >= 11, `Contains ${svgCount} SVG diagrams (expected >= 11)`);

const quizCardCount = (html.match(/class="quiz-card /g) || []).length;
check(quizCardCount === 44, `Contains ${quizCardCount} situational quiz cards (expected 44)`);

// 3. Check Product Map & Glossary section
check(html.includes('id="ban-do-san-pham-va-thuat-ngu"'), 'Final Product Map & Glossary section exists');
check(html.includes('Kịch tương tác') && html.includes('Kế hoạch tài chính cá nhân'), 'Glossary terms (Trang 73) present');

// 4. Check sticky sidebar classes
check(html.includes('lg:col-span-4 sticky top-20 h-[calc(100vh-5.5rem)] max-h-[calc(100vh-5.5rem)] flex-col overflow-hidden'), 'Sidebar sticky flex container classes present');
check(html.includes('id="sidebar-nav" class="custom-scrollbar overflow-y-auto pr-1.5 flex-1 min-h-0'), 'Sidebar nav scrollable classes present');

// 5. Check no undefined / NaN / null leaks
check(!/\bundefined\b/.test(html), 'No literal "undefined" leaked in HTML');
check(!/\bNaN\b/.test(html), 'No literal "NaN" leaked in HTML');

// 6. Verify inline script syntax
const scriptBlocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
scriptBlocks.forEach((m, idx) => {
  try {
    new Function(m[1]);
    console.log(`✅ PASS: Inline script block #${idx + 1} has valid JS syntax`);
  } catch (e) {
    console.error(`❌ FAIL: Inline script block #${idx + 1} syntax error:`, e.message);
    errors++;
  }
});

console.log(errors === 0 ? '\n🎉 ALL AUDIT CHECKS PASSED (0 ERRORS)!' : `\n⚠️ FOUND ${errors} ERRORS`);
process.exit(errors === 0 ? 0 : 1);
