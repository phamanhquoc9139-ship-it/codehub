// update_lesson_ids.js
const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, 'gdtc9_data.js');
let content = fs.readFileSync(dataPath, 'utf8');

const mapping = [
  { match: "lessonTitle: '1. Không khí & Tắm không khí'", id: 'bai-ktc-1' },
  { match: "lessonTitle: '2. Nước lạnh & Rèn luyện thích ứng'", id: 'bai-ktc-2' },
  { match: "lessonTitle: '3. Ánh nắng mặt trời & Tổng hợp Vitamin D'", id: 'bai-ktc-3' },
  { match: "lessonTitle: '4. Nước và địa hình trong rèn luyện thể chất'", id: 'bai-ktc-4' },
  { match: "lessonTitle: '5. Dinh dưỡng theo 4 mục tiêu vận động'", id: 'bai-ktc-5' },
  { match: "lessonTitle: 'Bài 1. Củng cố kĩ thuật xuất phát thấp và chạy lao sau xuất phát'", id: 'bai-chay-100m-1' },
  { match: "lessonTitle: 'Bài 2. Củng cố kĩ thuật chạy giữa quãng và về đích'", id: 'bai-chay-100m-2' },
  { match: "lessonTitle: 'Bài 1. Kĩ thuật giậm nhảy và chạy đà kết hợp giậm nhảy'", id: 'bai-nhay-cao-1' },
  { match: "lessonTitle: 'Bài 1. Củng cố xuất phát và tăng tốc sau xuất phát'", id: 'bai-chay-tb-1' },
  { match: "lessonTitle: 'Bài 2. Củng cố chạy giữa quãng, vượt \"cực điểm\" và về đích'", id: 'bai-chay-tb-2' },
  { match: "lessonTitle: 'Bài 1. Bài thể dục nhịp điệu (phần 1: Động tác 1 đến 4)'", id: 'bai-the-duc-1' },
  { match: "lessonTitle: 'Bài 2. Bài thể dục nhịp điệu (phần 2: Động tác 5 đến 8 & Ghép nhạc)'", id: 'bai-the-duc-2' },
  { match: "lessonTitle: 'Bài 1. Bật nhảy đánh cầu cao tay bên phải'", id: 'bai-cau-long-1' },
  { match: "lessonTitle: 'Bài 2. Bật nhảy đập cầu thuận tay (Smash)'", id: 'bai-cau-long-2' },
  { match: "lessonTitle: 'Bài 3. Kĩ thuật bỏ nhỏ (Drop shot) & Luật thi đấu'", id: 'bai-cau-long-3' },
  { match: "lessonTitle: 'Bài 1. Đá bóng bằng mu giữa bàn chân và tại chỗ ném biên'", id: 'bai-bong-da-1' },
  { match: "lessonTitle: 'Bài 2. Dừng bóng bổng bằng mu giữa bàn chân'", id: 'bai-bong-da-2' },
  { match: "lessonTitle: 'Bài 3. Dẫn bóng bằng mu ngoài bàn chân'", id: 'bai-bong-da-3' },
  { match: "lessonTitle: 'Bài 1. Tại chỗ và dẫn bóng đột phá bước thuận'", id: 'bai-bong-ro-1' },
  { match: "lessonTitle: 'Bài 2. Đột phá bước chéo (Cross-step Drive)'", id: 'bai-bong-ro-2' },
  { match: "lessonTitle: 'Bài 3. Tại chỗ chuyền bóng một tay trên vai & Luật bóng ngoài biên'", id: 'bai-bong-ro-3' }
];

let replaced = 0;
mapping.forEach(m => {
  if (content.includes(m.match)) {
    content = content.replace(m.match, "id: '" + m.id + "',\n          " + m.match);
    replaced++;
  } else {
    console.error('Match not found for:', m.match);
  }
});

fs.writeFileSync(dataPath, content, 'utf8');
console.log(`Updated gdtc9_data.js! Successfully injected ${replaced}/${mapping.length} lesson IDs.`);
