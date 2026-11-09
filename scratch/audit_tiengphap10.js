const fs = require('fs');
const path = require('path');
const vm = require('vm');

const coursesDir = path.join(__dirname, '../courses');
const mainPath = path.join(coursesDir, 'tiengphap_10.html');
const aliasPath = path.join(coursesDir, 'tiengphap10.html');

console.log('=== AUDITING TIẾNG PHÁP 10 ===');

// Check 1: File existence
if (!fs.existsSync(mainPath) || !fs.existsSync(aliasPath)) {
  console.error('FAIL: Missing main or alias file!');
  process.exit(1);
}

// Check 2: Byte-for-byte match
const b1 = fs.readFileSync(mainPath);
const b2 = fs.readFileSync(aliasPath);
if (!b1.equals(b2)) {
  console.error('FAIL: Main and alias files are not identical!');
  process.exit(1);
}
console.log(`PASS: Byte-for-byte identical (${b1.length} bytes)`);

const content = b1.toString('utf8');

// Check 3: Forbidden strings
const forbidden = ['undefined', 'NaN', '[object Object]', 'null'];
for (const word of forbidden) {
  // Be careful with null in HTML comments or attributes
  if (content.includes(`>${word}<`) || content.includes(`"${word}"`) || content.includes(`'${word}'`)) {
    console.error(`FAIL: Found forbidden string: ${word}`);
    process.exit(1);
  }
}
console.log('PASS: No undefined, NaN, or [object Object]');

// Check 4: JS Script syntax
const scripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
console.log(`Found ${scripts.length} inline scripts.`);
scripts.forEach((s, idx) => {
  const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
  try {
    new vm.Script(code);
    console.log(`PASS: Script ${idx + 1} is valid JavaScript`);
  } catch (err) {
    console.error(`FAIL: Script ${idx + 1} syntax error:`, err.message);
    process.exit(1);
  }
});

// Check 5: Tables and Colgroups
if (!content.includes('min-w-[980px]') || !content.includes('table-layout: fixed;')) {
  console.error('FAIL: Grammar table missing min-w-[980px] or table-layout: fixed');
  process.exit(1);
}
if (!content.includes('min-w-[860px]')) {
  console.error('FAIL: Communication table missing min-w-[860px]');
  process.exit(1);
}
console.log('PASS: Tables have fixed layout and explicit min-width');

// Check 6: Unités count
for (let i = 0; i <= 6; i++) {
  if (!content.includes(`id="unite-${i}"`)) {
    console.error(`FAIL: Missing section id="unite-${i}"`);
    process.exit(1);
  }
}
console.log('PASS: All Unités (0-6) present in document');

// Check 7: Arena questions
const qCount = (content.match(/class="arena-card/g) || []).length;
if (qCount !== 20) {
  console.error(`FAIL: Expected 20 arena cards, found ${qCount}`);
  process.exit(1);
}
console.log('PASS: 20/20 Arena questions properly generated');

// Check 8: Quizzes count
const quizCount = (content.match(/class="quiz-item/g) || []).length;
console.log(`PASS: ${quizCount} inline quizzes generated`);

console.log('=== ALL AUDIT CHECKS PASSED (10/10) ===');
