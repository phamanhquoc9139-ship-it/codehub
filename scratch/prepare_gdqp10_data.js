const fs = require('fs');

const raw = fs.readFileSync('scratch/user_gdqp10_prompt.txt', 'utf8').replace('<USER_REQUEST>', '').trim();

// Lesson metadata
const lessonMeta = [
  { num: 1, title: 'Lịch sử, truyền thống của lực lượng vũ trang nhân dân Việt Nam', badge: 'Lực lượng VTND' },
  { num: 2, title: 'Nội dung cơ bản một số luật về quốc phòng và an ninh Việt Nam', badge: 'Pháp luật QP-AN' },
  { num: 3, title: 'Ma tuý, tác hại của ma tuý', badge: 'Phòng chống tệ nạn' },
  { num: 4, title: 'Phòng, chống vi phạm pháp luật về trật tự an toàn giao thông', badge: 'An toàn giao thông' },
  { num: 5, title: 'Bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội', badge: 'An ninh quốc gia' },
  { num: 6, title: 'Một số hiểu biết về an ninh mạng', badge: 'An ninh mạng' },
  { num: 7, title: 'Thường thức phòng tránh bom, mìn, đạn, vũ khí hoá học, vũ khí sinh học, vũ khí công nghệ cao, thiên tai, dịch bệnh và cháy nổ', badge: 'Phòng tránh bom mìn' },
  { num: 8, title: 'Một số nội dung Điều lệnh Quản lí bộ đội, Điều lệnh Công an nhân dân', badge: 'Điều lệnh QĐ-CA' },
  { num: 9, title: 'Đội ngũ từng người không có súng', badge: 'Đội ngũ cá nhân' },
  { num: 10, title: 'Đội ngũ tiểu đội', badge: 'Đội ngũ tiểu đội' },
  { num: 11, title: 'Các tư thế, động tác cơ bản vận động trong chiến đấu', badge: 'Vận động chiến đấu' },
  { num: 12, title: 'Kĩ thuật cấp cứu và chuyển thương', badge: 'Cấp cứu chuyển thương' }
];

const lessonContents = {};
for (let i = 1; i <= 12; i++) {
  const startPattern = `## Bài ${i}.`;
  const nextPattern = i < 12 ? `## Bài ${i + 1}.` : '## Bảng ôn tập nhanh';
  const startIdx = raw.indexOf(startPattern);
  const endIdx = raw.indexOf(nextPattern);

  if (startIdx !== -1 && endIdx !== -1) {
    const lessonBlock = raw.slice(startIdx, endIdx).trim();
    const firstLineEnd = lessonBlock.indexOf('\n');
    const titleLine = lessonBlock.slice(0, firstLineEnd).trim();
    const title = titleLine.replace(`## Bài ${i}.`, '').trim();
    let body = lessonBlock.slice(firstLineEnd).trim();

    // Strip divider lines `---`
    body = body.split('\n').filter(line => line.trim() !== '---').join('\n').trim();

    lessonContents[i] = { num: i, title, body };
    console.log(`Bài ${i}: ${title} (${body.length} chars)`);
  } else {
    console.error(`Could not locate boundaries for Bài ${i}`);
  }
}

// Extract Appendix
const reviewStart = raw.indexOf('## Bảng ôn tập nhanh');
const termsStart = raw.indexOf('## Thuật ngữ trong sách');
const guideStart = raw.indexOf('## Gợi ý tổ chức nội dung trên web');
const sourceStart = raw.indexOf('**Nguồn biên soạn:**');

const reviewText = raw.slice(reviewStart, termsStart).trim();
const termsText = raw.slice(termsStart, guideStart).trim();
const guideText = raw.slice(guideStart, sourceStart).trim();
const sourceText = raw.slice(sourceStart).trim();

fs.writeFileSync('scratch/gdqp10_parsed_raw.json', JSON.stringify({
  lessonMeta,
  lessonContents,
  reviewText,
  termsText,
  guideText,
  sourceText
}, null, 2), 'utf8');

console.log('Saved scratch/gdqp10_parsed_raw.json');
