// Audit script for GDQP 11 files
const fs = require('fs');

const files = [
  'courses/gdqp_11.html',
  'courses/quocphong_11.html',
  'courses/gdqp11.html',
  'courses/quocphong11.html'
];

console.log("=== 1. AUDIT FILE SIZES & IDENTICAL BYTES ===");
const contents = files.map(f => {
  if (!fs.existsSync(f)) {
    console.error("Missing file:", f);
    process.exit(1);
  }
  return fs.readFileSync(f);
});

const baseLen = contents[0].length;
console.log(`Base file size: ${baseLen} bytes (${(baseLen / 1024).toFixed(1)} KB)`);

for (let i = 1; i < files.length; i++) {
  if (contents[i].length !== baseLen) {
    console.error(`Size mismatch in ${files[i]}: ${contents[i].length} vs ${baseLen}`);
    process.exit(1);
  }
  if (!contents[i].equals(contents[0])) {
    console.error(`Content mismatch between ${files[0]} and ${files[i]}`);
    process.exit(1);
  }
}
console.log("PASS: All 4 files are 100% byte-for-byte identical!");

console.log("\n=== 2. AUDIT CODE INTEGRITY ===");
const text = contents[0].toString('utf8');

const forbiddenPatterns = [
  { name: "undefined", regex: /\bundefined\b/g },
  { name: "NaN", regex: /\bNaN\b/g },
  { name: "[object Object]", regex: /\[object Object\]/g },
  { name: "Empty card description placeholder", regex: /Nội dung đang được cập nhật/g }
];

let issues = 0;
forbiddenPatterns.forEach(p => {
  const matches = text.match(p.regex);
  if (matches) {
    console.error(`FAIL: Found ${matches.length} occurrences of '${p.name}'`);
    issues++;
  } else {
    console.log(`PASS: Zero occurrences of '${p.name}'`);
  }
});

console.log("\n=== 3. AUDIT LESSON STRUCTURE (10 LESSONS) ===");
for (let i = 1; i <= 10; i++) {
  const hasCard = text.includes(`id="bai-${i}"`);
  const hasA = text.includes(`id="b${i}-cong-thuc"`);
  const hasB = text.includes(`id="b${i}-noi-dung"`);
  const hasC = text.includes(`id="b${i}-so-do"`);
  const hasD = text.includes(`id="b${i}-tinh-huong"`);
  const hasE = text.includes(`id="b${i}-trac-nghiem"`);

  if (!hasCard || !hasA || !hasB || !hasC || !hasD || !hasE) {
    console.error(`FAIL: Lesson ${i} is missing parts! Card: ${hasCard}, A: ${hasA}, B: ${hasB}, C: ${hasC}, D: ${hasD}, E: ${hasE}`);
    issues++;
  } else {
    console.log(`PASS: Lesson ${i} has complete A, B, C, D, E sections.`);
  }
}

console.log("\n=== 4. AUDIT QUIZ & ARENA EXAM ===");
const quizBtnMatches = text.match(/class="quiz-btn/g);
console.log(`Quiz buttons count: ${quizBtnMatches ? quizBtnMatches.length : 0} (expected: 10 lessons * 3 questions * 4 options = 120 buttons)`);
if (!quizBtnMatches || quizBtnMatches.length !== 120) {
  console.error("FAIL: Quiz button count mismatch!");
  issues++;
} else {
  console.log("PASS: Exactly 120 inline quiz buttons present.");
}

const arenaCardMatches = text.match(/id="arena-q-/g);
console.log(`Arena questions count: ${arenaCardMatches ? arenaCardMatches.length : 0} (expected: 20)`);
if (!arenaCardMatches || arenaCardMatches.length !== 20) {
  console.error("FAIL: Arena questions count mismatch!");
  issues++;
} else {
  console.log("PASS: Exactly 20 Arena exam questions present.");
}

const hasTable = text.includes('id="review-table"');
const hasChecklist = text.includes('id="diagram-checklist"');
const hasSafety = text.includes('id="safety-rules"');

console.log(`Review Table: ${hasTable ? "OK" : "MISSING"}`);
console.log(`Diagram Checklist: ${hasChecklist ? "OK" : "MISSING"}`);
console.log(`5 Safety Rules: ${hasSafety ? "OK" : "MISSING"}`);

if (!hasTable || !hasChecklist || !hasSafety) {
  console.error("FAIL: Missing end-of-course review sections!");
  issues++;
}

if (issues > 0) {
  console.error(`\nFAILED with ${issues} issue(s).`);
  process.exit(1);
} else {
  console.log("\nALL AUDIT CHECKS PASSED WITH 100% SUCCESS!");
}
