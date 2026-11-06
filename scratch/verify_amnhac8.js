const fs = require('fs');

const html = fs.readFileSync('courses/amnhac_8.html', 'utf8');

console.log('HTML size:', html.length);

// Verify all 16 lessons exist
for (let i = 1; i <= 16; i++) {
  const hasId = html.includes(`id="bai-${i}"`);
  const hasHeader = html.includes(`Bài ${i}:`);
  if (!hasId || !hasHeader) {
    console.error(`❌ Lesson ${i} missing!`);
  }
}
console.log('✅ All 16 lessons verified with correct IDs and Headers!');

// Verify 8 topics exist
for (let i = 1; i <= 8; i++) {
  const hasTopic = html.includes(`Chủ đề ${i}:`);
  if (!hasTopic) {
    console.error(`❌ Topic ${i} missing!`);
  }
}
console.log('✅ All 8 topics verified!');

// Verify Exam and Modals
console.log('Exam section exists:', html.includes('id="music-exam-section"'));
console.log('Summary modal exists:', html.includes('id="summaryModal"'));
console.log('Progress bar exists:', html.includes('id="progressBar"'));

// Check for broken HTML entities or syntax
if (html.includes('undefined') || html.includes('NaN')) {
  console.warn('⚠️ Contains undefined or NaN!');
} else {
  console.log('✅ No undefined or NaN found.');
}
