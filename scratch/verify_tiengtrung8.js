const fs = require('fs');
const path = require('path');

const basePath = path.resolve(__dirname, '..');
const file1 = path.join(basePath, 'courses/tiengtrung_8.html');
const file2 = path.join(basePath, 'courses/chinese_8.html');
const indexFile = path.join(basePath, 'index.html');

console.log('=== VERIFYING TIẾNG TRUNG 8: TOÀN BỘ 16 BÀI HỌC (BÀI 1 — BÀI 16) ===\n');

let allPassed = true;

function assert(condition, message) {
  if (condition) {
    console.log('  [PASS]', message);
  } else {
    console.error('  [FAIL]', message);
    allPassed = false;
  }
}

// 1. Check existence & size
assert(fs.existsSync(file1), 'tiengtrung_8.html exists');
assert(fs.existsSync(file2), 'chinese_8.html exists');

const size1 = fs.statSync(file1).size;
const size2 = fs.statSync(file2).size;
console.log(`  Size of tiengtrung_8.html: ${(size1 / 1024).toFixed(2)} KB`);
console.log(`  Size of chinese_8.html: ${(size2 / 1024).toFixed(2)} KB`);
assert(size1 > 700 * 1024, 'tiengtrung_8.html > 700 KB');
assert(size2 > 700 * 1024, 'chinese_8.html > 700 KB');
assert(size1 === size2, 'Both files are identical in size');

const c1 = fs.readFileSync(file1, 'utf8');
const c2 = fs.readFileSync(file2, 'utf8');
assert(c1 === c2, 'Content is 100% synchronized between tiengtrung_8.html and chinese_8.html');

// 2. Verify all 16 lessons exist
const expectedLessons = [
  'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
  'Bài 5', 'Bài 6', 'Bài 7', 'Bài 8',
  'Bài 9', 'Bài 10', 'Bài 11', 'Bài 12',
  'Bài 13', 'Bài 14', 'Bài 15', 'Bài 16'
];

expectedLessons.forEach(b => {
  assert(c1.includes(`>${b}<`) || c1.includes(`${b}:`) || c1.includes(`${b} `), `Contains ${b}`);
});

// Check specific Bài 4, Bài 8, Bài 12, Bài 16
assert(c1.includes('Bài 4') && c1.includes('复习一'), 'Bài 4: 复习一 (Ôn tập 1) present');
assert(c1.includes('Bài 8') && c1.includes('复习二'), 'Bài 8: 复习二 (Ôn tập 2) present');
assert(c1.includes('Bài 12') && c1.includes('复习三'), 'Bài 12: 复习三 (Ôn tập 3) present');
assert(c1.includes('Bài 16') && c1.includes('复习四'), 'Bài 16: 复习四 (Ôn tập 4) present');

// 3. Audio buttons
const audioMatches = c1.match(/speakChinese\(/g) || [];
console.log(`  Total audio trigger points (speakChinese): ${audioMatches.length}`);
assert(audioMatches.length >= 200, 'Audio trigger points >= 200');

// 4. Hanzi Manual
const hanziChars = ['日', '明', '旦', '人', '从', '众', '动', '加', '努', '学', '孙', '孩'];
const missingHanzi = hanziChars.filter(ch => !c1.includes(ch));
assert(missingHanzi.length === 0, `All required Hanzi present: ${hanziChars.join(', ')}`);

// 5. Grammar Summary points
const trMatches = c1.match(/<td class="p-3 font-mono text-center font-bold text-blue-600">/g) || [];
console.log(`  Total grammar summary points: ${trMatches.length}`);
assert(trMatches.length === 17, 'Total 17 grammar points in summary table');

// 6. Exam questions
const examCards = c1.match(/id="exam-card-\d+"/g) || [];
console.log(`  Total exam cards: ${examCards.length}`);
assert(examCards.length === 40, 'Exam contains exactly 40 questions');
assert(c1.includes('60:00'), 'Exam countdown timer set to 60:00');

// 7. index.html card check
const indexContent = fs.readFileSync(indexFile, 'utf8');
assert(indexContent.includes('courses/tiengtrung_8.html'), 'index.html contains link to courses/tiengtrung_8.html');
assert(indexContent.includes('Tiếng Trung 8'), 'index.html contains "Tiếng Trung 8" heading');

console.log('\n=== VERIFICATION RESULT ===');
if (allPassed) {
  console.log('ALL CHECKS PASSED WITH FLYING COLORS! 🚀');
} else {
  console.error('SOME CHECKS FAILED. Please review output above.');
}
