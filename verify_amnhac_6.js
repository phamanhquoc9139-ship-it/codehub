const fs = require('fs');

const path = 'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/amnhac_6.html';
const content = fs.readFileSync(path, 'utf8');

console.log('File size:', content.length, 'bytes');

// Check all 8 topics
const missingTopics = [];
for (let i = 1; i <= 8; i++) {
  if (!content.includes('id="chude-' + i + '"')) missingTopics.push(i);
}
console.log('Missing topics (1..8):', missingTopics.length ? missingTopics : 'None (All 8 topics present!)');

// Check songs
const requiredSongs = [
  "Con đường học trò",
  "Đời sống không già vì có chúng em",
  "Thầy cô là tất cả",
  "Những ước mơ",
  "Mưa rơi",
  "Chỉ có một trên đời",
  "Hãy để mặt trời luôn chiếu sáng",
  "Bác Hồ – Người cho em tất cả"
];
const missingSongs = requiredSongs.filter(s => !content.includes(s));
console.log('Missing songs:', missingSongs.length ? missingSongs : 'None (All 8 songs present!)');

// Check listening pieces
const requiredListening = [
  "Tháng năm học trò",
  "The Blue Danube",
  "Nhớ ơn thầy cô",
  "Ode to Joy",
  "Mừng hội hoa bông",
  "Lullaby",
  "Auld Lang Syne",
  "Việt Nam quê hương tôi"
];
const missingListening = requiredListening.filter(l => !content.includes(l));
console.log('Missing listening:', missingListening.length ? missingListening : 'None (All 8 listening pieces present!)');

// Check sight-reading pieces
const requiredSightReading = [
  "Bài đọc nhạc số 1",
  "Bài đọc nhạc số 2",
  "Suliko",
  "Bài đọc nhạc số 3",
  "Bài đọc nhạc số 4",
  "Pê-chi-a",
  "Bài đọc nhạc số 5"
];
const missingSightReading = requiredSightReading.filter(sr => !content.includes(sr));
console.log('Missing sight reading:', missingSightReading.length ? missingSightReading : 'None (All 5 sight readings present!)');

// Check section II theory table items
const theoryItems = [
  "Cao độ", "Trường độ", "Cường độ", "Âm sắc",
  "Kí hiệu Latin", "Nhịp 4/4", "Cung và nửa cung",
  "Dấu thăng ♯", "Dấu giáng ♭", "Dấu hoàn ♮",
  "Hát bè", "Hòa tấu"
];
const missingTheory = theoryItems.filter(t => !content.includes(t));
console.log('Missing theory items:', missingTheory.length ? missingTheory : 'None (All 12 theory items present!)');

// Check section III competencies
const missingComp = [];
for (let i = 1; i <= 6; i++) {
  if (!content.includes('Năng Lực')) missingComp.push(i);
}
console.log('Section III Competencies present:', content.includes('Các Năng Lực Thực Hành Không Được Lược Bỏ'));

// Check Trạng Nguyên questions
const tnQuestions = content.match(/name="tn_q_\d+"/g) || [];
console.log('Trạng Nguyên question inputs:', tnQuestions.length, '(expected 100 for 25 questions * 4 options)');

// Check images
const imgMatches = content.match(/<img\b/gi) || [];
console.log('Img tags count:', imgMatches.length, '(expected 0)');

// Check alias
const aliasContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/music_6.html', 'utf8');
console.log('Alias music_6.html identical:', content === aliasContent);

// Check index.html
const indexContent = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/index.html', 'utf8');
console.log('Index.html links amnhac_6.html:', indexContent.includes('courses/amnhac_6.html'));
console.log('Index.html mentions 8 chủ đề:', indexContent.includes('Tuổi học trò, Cuộc sống tươi đẹp, Nhớ ơn thầy cô'));
