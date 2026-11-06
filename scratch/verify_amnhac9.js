const fs = require('fs');
const path = require('path');

const amnhac9Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/amnhac_9.html';
const music9Path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/music_9.html';

console.log('--- VERIFYING AM NHAC 9 & MUSIC 9 ---');

const amnhac9 = fs.readFileSync(amnhac9Path, 'utf8');
const music9 = fs.readFileSync(music9Path, 'utf8');

let errors = 0;
function assert(cond, msg) {
  if (cond) {
    console.log(`[PASS] ${msg}`);
  } else {
    console.error(`[FAIL] ${msg}`);
    errors++;
  }
}

// 1. Identical files
assert(amnhac9 === music9, 'amnhac_9.html and music_9.html are 100% identical');

// 2. Check 16 lessons
for (let i = 1; i <= 16; i++) {
  assert(amnhac9.includes(`id="bai-${i}"`), `Lesson bai-${i} exists in HTML`);
}

// 3. Check 8 Topics
const expectedTopics = [
  'Nối vòng tay lớn',
  'Khát vọng tuổi trẻ',
  'Kỉ niệm dưới mái trường',
  'Giai điệu quê hương',
  'Trái Đất xanh',
  'Tiếng hát hoà bình',
  'Âm nhạc nước ngoài',
  'Một thời để nhớ'
];

expectedTopics.forEach((t, idx) => {
  assert(amnhac9.includes(t), `Topic ${idx + 1} (${t}) found in HTML`);
});

// 4. Check essential SGK elements
const essentialTerms = [
  'Chiếc cầu Luân Đôn',
  'Zoltán Kodály',
  'Bài ca thiên nga',
  'Bài hát cổ nước Pháp',
  'Lưu thuỷ – Kim tiền',
  'Khi tóc thầy bạc trắng',
  'Đường chúng ta đi',
  'Thời thanh niên sôi nổi',
  'Bảy sắc cầu vồng',
  'Ngôi nhà của chúng ta',
  'Donna Donna',
  'Serenade',
  'Đàn đá',
  'Đàn đáy',
  'kèn oboe',
  'kèn cor',
  'Dịch giọng',
  'Quãng',
  'Hợp âm ba'
];

essentialTerms.forEach(term => {
  const regex = new RegExp(term, 'i');
  assert(regex.test(amnhac9), `Contains essential term: "${term}"`);
});

// 5. Check no broken implies or raw placeholder entities
assert(!amnhac9.includes('&implies;'), 'No broken &implies; entity');
assert(!amnhac9.includes('undefined'), 'No accidental undefined in generated text');
assert(!amnhac9.includes('NaN'), 'No NaN in generated text');

// 6. Check interactive components
assert(amnhac9.includes('checkLessonQuiz'), 'Lesson quiz handler present');
assert(amnhac9.includes('openTermModal'), 'Term modal handler present');
assert(amnhac9.includes('openExamModal'), 'Exam modal handler present');
assert(amnhac9.includes('playLessonMelody'), 'Web Audio API melody handler present');

// 7. Check 16 Sheet Music Staves with Notes
for (let i = 1; i <= 16; i++) {
  assert(amnhac9.includes(`staff-bai${i}`), `Sheet music staff-bai${i} exists with notes and audio trigger`);
}
assert(amnhac9.includes('playStaffAudio'), 'playStaffAudio function exists');
assert(amnhac9.includes('G Clef path'), 'G Clef path vector exists on staves');

console.log(`\nVerification finished with ${errors} errors.`);
process.exit(errors === 0 ? 0 : 1);
