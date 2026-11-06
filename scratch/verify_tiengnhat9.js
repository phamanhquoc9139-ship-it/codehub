const fs = require('fs');

const f1Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/tiengnhat_9.html';
const f2Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/japanese_9.html';

const html1 = fs.readFileSync(f1Path, 'utf8');
const html2 = fs.readFileSync(f2Path, 'utf8');

console.log('tiengnhat_9.html size:', html1.length);
console.log('japanese_9.html size:', html2.length);
console.log('Synchronized:', html1 === html2);

// Check literal bad tokens
console.log('Literal undefined:', html1.includes('undefined'));
console.log('Literal NaN:', html1.includes('NaN'));
console.log('Literal [object Object]:', html1.includes('[object Object]'));

// Check sections
const expectedSections = [
  'bai-1', 'bai-2', 'bai-3', 'on-tap-1',
  'bai-4', 'bai-5', 'bai-6', 'on-tap-2',
  'bai-7', 'bai-8', 'bai-9', 'on-tap-3',
  'bai-10', 'bai-11', 'on-tap-4', 'bai-12', 'bai-13'
];

let allSecs = true;
expectedSections.forEach(sec => {
  const hasSec = html1.includes(`id="${sec}"`);
  if (!hasSec) {
    console.log(`MISSING Section: #${sec}`);
    allSecs = false;
  }
});
if (allSecs) console.log('All 17 sections present: YES (bai-1..bai-13, on-tap-1..on-tap-4)');

// Check SVGs
const svgCount = (html1.match(/<svg/g) || []).length;
console.log('Total SVGs in page:', svgCount);

// Check modals
console.log('Glossary modal (glossaryModal):', html1.includes('id="glossaryModal"'));
console.log('Handbook modal (handbookModal):', html1.includes('id="handbookModal"'));
console.log('Exam modal (examModal):', html1.includes('id="examModal"'));

// Check audio speak function
console.log('Audio pronunciation (speakJapanese):', html1.includes('speakJapanese'));

// Check Kanji Matrix
console.log('Kanji Matrix present:', html1.includes('id="tab-kanji"') && html1.includes('Bảng 57 Kanji'));
