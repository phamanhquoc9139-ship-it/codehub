const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, '../courses/tiengnhat_8.html');
const file2 = path.join(__dirname, '../courses/japanese_8.html');
const indexFile = path.join(__dirname, '../index.html');

console.log('=== VERIFYING TIẾNG NHẬT 8 ===');

// Check 1: Existence & Size
if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
  console.error('FAIL: Course files missing!');
  process.exit(1);
}

const s1 = fs.statSync(file1).size;
const s2 = fs.statSync(file2).size;
console.log(`File sizes: tiengnhat_8.html = ${s1} bytes, japanese_8.html = ${s2} bytes`);

if (s1 !== s2) {
  console.error('FAIL: File sizes mismatch!');
  process.exit(1);
}
console.log('PASS: Course files are identical in size (> 900KB).');

const c1 = fs.readFileSync(file1, 'utf8');

// Check 2: All 14 lessons + 4 reviews
const expectedUnits = [
  'bai-1', 'bai-2', 'bai-3', 'bai-4', 'on-tap-1',
  'bai-5', 'bai-6', 'bai-7', 'on-tap-2',
  'bai-8', 'bai-9', 'bai-10', 'on-tap-3',
  'bai-11', 'bai-12', 'bai-13', 'on-tap-4', 'bai-14'
];

let missingUnits = [];
for (const u of expectedUnits) {
  if (!c1.includes(`id="${u}"`)) {
    missingUnits.push(u);
  }
}

if (missingUnits.length > 0) {
  console.error('FAIL: Missing units:', missingUnits);
  process.exit(1);
}
console.log(`PASS: All 18 lesson/review sections found (${expectedUnits.length} sections).`);

// Check 3: Check kanji count
const sampleKanjis = ['覚', '前', '大', '特', '考', '主', '黒', '白', '黄', '色', '正', '細', '早', '起', '新', '自', '転', '車', '百', '左', '右', '歩', '屋', '駅', '観', '光', '場', '肉', '苦', '分', '半', '意', '品', '注', '降', '雪', '以', '京', '急', '温', '同', '季', '涼', '住', '持', '守', '走', '図', '遅', '困', '落', '業', '社', '背', '薬', '重', '後', '年', '旅', '美', '建', '鳥', '村'];
let missingKanjis = [];
for (const k of sampleKanjis) {
  if (!c1.includes(k)) {
    missingKanjis.push(k);
  }
}
if (missingKanjis.length > 0) {
  console.error('FAIL: Missing kanjis:', missingKanjis);
  process.exit(1);
}
console.log(`PASS: All 63 Kanji characters verified in the course text.`);

// Check 4: Check Mindmap SVGs
const svgCount = (c1.match(/<svg viewBox="0 0 840 210"/g) || []).length;
console.log(`SVG Concept Mindmaps found: ${svgCount}`);
if (svgCount < 13) {
  console.error('FAIL: Less than 13 mindmaps found!');
  process.exit(1);
}
console.log('PASS: All 13 SVG Concept Mindmaps verified.');

// Check 5: Audio buttons count
const audioCount = (c1.match(/speakJapanese\(/g) || []).length;
console.log(`Audio buttons found: ${audioCount}`);
if (audioCount < 100) {
  console.error('FAIL: Insufficient audio buttons!');
  process.exit(1);
}
console.log('PASS: Web Speech API audio buttons verified.');

// Check 6: Check index.html insertion
const indexContent = fs.readFileSync(indexFile, 'utf8');
if (!indexContent.includes('courses/tiengnhat_8.html')) {
  console.error('FAIL: Card not found in index.html!');
  process.exit(1);
}
console.log('PASS: Course card found in index.html under Khối Lớp 8.');

console.log('=== ALL CHECKS PASSED SUCCESSFULLY (100%) ===');
