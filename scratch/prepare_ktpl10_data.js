const fs = require('fs');

const raw = fs.readFileSync('scratch/user_ktpl10_prompt.txt', 'utf8').replace('<USER_REQUEST>', '').trim();

// Topic metadata
const topicMeta = [
  { num: 1, title: 'Nền kinh tế và các chủ thể của nền kinh tế', part: 1, partTitle: 'Phần một. Giáo dục kinh tế', lessons: [1, 2], badge: 'Chủ đề 1' },
  { num: 2, title: 'Thị trường và cơ chế thị trường', part: 1, partTitle: 'Phần một. Giáo dục kinh tế', lessons: [3, 4], badge: 'Chủ đề 2' },
  { num: 3, title: 'Ngân sách nhà nước và thuế', part: 1, partTitle: 'Phần một. Giáo dục kinh tế', lessons: [5, 6], badge: 'Chủ đề 3' },
  { num: 4, title: 'Sản xuất kinh doanh và các mô hình sản xuất kinh doanh', part: 1, partTitle: 'Phần một. Giáo dục kinh tế', lessons: [7], badge: 'Chủ đề 4' },
  { num: 5, title: 'Tín dụng và cách sử dụng các dịch vụ tín dụng trong đời sống', part: 1, partTitle: 'Phần một. Giáo dục kinh tế', lessons: [8, 9], badge: 'Chủ đề 5' },
  { num: 6, title: 'Lập kế hoạch tài chính cá nhân', part: 1, partTitle: 'Phần một. Giáo dục kinh tế', lessons: [10], badge: 'Chủ đề 6' },
  { num: 7, title: 'Pháp luật nước Cộng hoà xã hội chủ nghĩa Việt Nam', part: 2, partTitle: 'Phần hai. Giáo dục pháp luật', lessons: [11, 12, 13], badge: 'Chủ đề 7' },
  { num: 8, title: 'Hiến pháp nước Cộng hoà xã hội chủ nghĩa Việt Nam', part: 2, partTitle: 'Phần hai. Giáo dục pháp luật', lessons: [14, 15, 16, 17], badge: 'Chủ đề 8' },
  { num: 9, title: 'Hệ thống chính trị nước Cộng hoà xã hội chủ nghĩa Việt Nam', part: 2, partTitle: 'Phần hai. Giáo dục pháp luật', lessons: [18, 19, 20, 21], badge: 'Chủ đề 9' }
];

// Clean lesson bodies:
const lessonContents = {};
for (let i = 1; i <= 21; i++) {
  const startPattern = `### Bài ${i}.`;
  const startIdx = raw.indexOf(startPattern);
  
  // The end is the next `### Bài`, or `## Chủ đề`, or `# Phần`, or `# Bảng`
  let endIdx = -1;
  if (i < 21) {
    endIdx = raw.indexOf(`### Bài ${i + 1}.`);
  } else {
    endIdx = raw.indexOf('# Bảng phân biệt và kỹ năng vận dụng');
    if (endIdx === -1) endIdx = raw.indexOf('## Các cặp khái niệm dễ nhầm');
  }

  if (startIdx !== -1 && endIdx !== -1) {
    let lessonBlock = raw.slice(startIdx, endIdx).trim();
    const firstLineEnd = lessonBlock.indexOf('\n');
    const titleLine = lessonBlock.slice(0, firstLineEnd).trim();
    const title = titleLine.replace(`### Bài ${i}.`, '').trim();
    let body = lessonBlock.slice(firstLineEnd).trim();

    // Strip any trailing `## Chủ đề` or `# Phần` or divider lines `---`
    body = body.split('\n').filter(line => {
      const t = line.trim();
      return !t.startsWith('## Chủ đề') && !t.startsWith('# Phần') && t !== '---';
    }).join('\n').trim();

    lessonContents[i] = { num: i, title, body };
  }
}

console.log('Cleaned lesson contents for 21 lessons.');

// Also extract table and appendix sections
const compStart = raw.indexOf('## Các cặp khái niệm dễ nhầm');
const econFrameStart = raw.indexOf('## Khung xử lí tình huống kinh tế');
const legalFrameStart = raw.indexOf('## Khung nhận diện vấn đề pháp luật');
const glossaryStart = raw.indexOf('## Thuật ngữ cốt lõi');
const notesStart = raw.indexOf('## Gợi ý cấu trúc chuyển thành bài học web');

const compText = raw.slice(compStart, econFrameStart).trim();
const econFrameText = raw.slice(econFrameStart, legalFrameStart).trim();
const legalFrameText = raw.slice(legalFrameStart, glossaryStart).trim();
const glossaryText = raw.slice(glossaryStart, notesStart).trim();

fs.writeFileSync('scratch/ktpl10_parsed_raw.json', JSON.stringify({
  topicMeta,
  lessonContents,
  compText,
  econFrameText,
  legalFrameText,
  glossaryText
}, null, 2), 'utf8');

console.log('Updated scratch/ktpl10_parsed_raw.json successfully!');
