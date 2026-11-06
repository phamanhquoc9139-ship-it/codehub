const fs = require('fs');

const text = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_all_text.txt', 'utf8');
const lines = text.split('\n\n').map(l => l.trim()).filter(l => l.length > 0);

// We need to parse:
// 1. History (Phần Lịch sử): Lessons 1 to 20 across Chapters 1 to 5
// 2. Geography (Phần Địa lí): Bài mở đầu + Lessons 1 to 30 across Chapters 1 to 7
// 3. Timeline table (Bảng niên đại)
// 4. Formulas table (Công thức và quy tắc Địa lí)
// 5. Diagrams list (Hình bản đồ và sơ đồ quan trọng)
// 6. Local field study framework (Khung báo cáo tìm hiểu địa phương)

const data = {
  historyChapters: [],
  geoChapters: [],
  timeline: [],
  formulas: [],
  diagrams: [],
  localStudy: [],
  allLessons: []
};

// First let's find the main section indices
let historyStart = lines.findIndex(l => l === 'Phần Lịch sử');
let geoStart = lines.findIndex(l => l === 'Phần Địa lí');
let timelineStart = lines.findIndex(l => l.startsWith('Bảng niên đại Việt Nam'));
let formulasStart = lines.findIndex(l => l.startsWith('Công thức và quy tắc Địa lí'));
let diagramsStart = lines.findIndex(l => l.startsWith('Hình bản đồ và sơ đồ quan trọng'));
let localStudyStart = lines.findIndex(l => l.startsWith('Khung báo cáo tìm hiểu địa phương'));

console.log('Section indices:', {
  historyStart,
  geoStart,
  timelineStart,
  formulasStart,
  diagramsStart,
  localStudyStart,
  totalLines: lines.length
});

// Let's parse History lessons (from historyStart to geoStart)
let curPart = 'history';
let curChapter = null;
let curLesson = null;

for (let i = historyStart + 1; i < geoStart; i++) {
  const line = lines[i];
  if (line.startsWith('Chương ')) {
    curChapter = {
      title: line,
      lessons: []
    };
    data.historyChapters.push(curChapter);
  } else if (line.startsWith('Bài ')) {
    curLesson = {
      id: 'history_b' + (data.allLessons.length + 1),
      part: 'history',
      chapter: curChapter ? curChapter.title : '',
      title: line,
      sgk: '',
      sections: [],
      images: []
    };
    if (curChapter) curChapter.lessons.push(curLesson);
    data.allLessons.push(curLesson);
  } else if (line.startsWith('SGK trang')) {
    if (curLesson) curLesson.sgk = line;
  } else {
    if (curLesson) {
      curLesson.sections.push(line);
    }
  }
}

// Parse Geography lessons (from geoStart to timelineStart)
curChapter = null;
curLesson = null;

for (let i = geoStart + 1; i < timelineStart; i++) {
  const line = lines[i];
  if (line === 'Bài mở đầu' || (line.startsWith('Bài ') && !line.startsWith('Bài mở đầu'))) {
    const isOpening = line === 'Bài mở đầu';
    curLesson = {
      id: isOpening ? 'geo_intro' : 'geo_b' + (data.allLessons.filter(l => l.part === 'geo' && l.id !== 'geo_intro').length + 1),
      part: 'geo',
      chapter: curChapter ? curChapter.title : 'Bài Mở Đầu',
      title: isOpening ? 'Bài mở đầu: Nắm cách học môn Địa lí' : line,
      sgk: '',
      sections: [],
      images: []
    };
    if (curChapter) {
      curChapter.lessons.push(curLesson);
    } else {
      // Intro chapter
      curChapter = {
        title: 'Mở đầu: Phương pháp học Địa lí',
        lessons: [curLesson]
      };
      data.geoChapters.push(curChapter);
    }
    data.allLessons.push(curLesson);
  } else if (line.startsWith('Chương ')) {
    curChapter = {
      title: line,
      lessons: []
    };
    data.geoChapters.push(curChapter);
  } else if (line.startsWith('SGK trang')) {
    if (curLesson) curLesson.sgk = line;
  } else {
    if (curLesson) {
      curLesson.sections.push(line);
    }
  }
}

console.log('History chapters:', data.historyChapters.length, 'Lessons:', data.allLessons.filter(l => l.part === 'history').length);
console.log('Geo chapters:', data.geoChapters.length, 'Lessons:', data.allLessons.filter(l => l.part === 'geo').length);

// Assign 12 images
const imgMap = [
  { part: 'history', lessonNum: 14, img: 'image1.png', title: 'Tổ chức Nhà nước Văn Lang', page: 'trang 61', note: 'Đọc từ trung ương tới bộ rồi chiềng chạ; phân biệt chức danh với cấp quản lí.' },
  { part: 'history', lessonNum: 18, img: 'image2.png', title: 'Lược đồ trận Bạch Đằng năm 938', page: 'trang 84', note: 'Đọc bãi cọc, đường tiến của địch, hướng nhử địch, phục kích và phản công; gắn với lúc triều lên và rút.' },
  { part: 'geo', lessonNum: 1, img: 'image3.png', title: 'Đọc toạ độ trên quả Địa Cầu', page: 'trang 103', note: 'Xác định A, B, C theo vĩ độ rồi kinh độ; B nằm trên chí tuyến Bắc.' },
  { part: 'geo', lessonNum: 8, img: 'image4.png', title: 'Trái Đất chuyển động quanh Mặt Trời', page: 'trang 122', note: 'Theo mũi tên, góc nghiêng và hướng trục; giải thích mùa hai bán cầu trái ngược.' },
  { part: 'geo', lessonNum: 10, img: 'image5.png', title: 'Cấu tạo bên trong Trái Đất', page: 'trang 129', note: 'So sánh độ dày, trạng thái, nhiệt độ; phân biệt nhân ngoài lỏng và nhân trong rắn.' },
  { part: 'geo', lessonNum: 14, img: 'image6.png', title: 'Đường đồng mức và sườn dốc', page: 'trang 139', note: 'Khoảng cao đều 100 m; sườn D1–A2 thoải hơn D2–A2 do các đường thưa hơn.' },
  { part: 'geo', lessonNum: 14, img: 'image7.png', title: 'Đọc lát cắt địa hình Bạch Mã – Phan Thiết', page: 'trang 140', note: 'Đọc lần lượt dạng địa hình và đỉnh Ngọc Linh khoảng 2 500 m theo hình; đây là giá trị đọc từ lát cắt khái quát.' },
  { part: 'geo', lessonNum: 15, img: 'image8.png', title: 'Các đai khí áp và gió thường xuyên trên Trái Đất', page: 'trang 144', note: 'Theo vĩ độ từ 0° tới 90°; gió đi từ áp cao về thấp và lệch hướng theo bán cầu.' },
  { part: 'geo', lessonNum: 18, img: 'image9.png', title: 'Biểu đồ nhiệt độ lượng mưa trạm Láng (Hà Nội)', page: 'trang 153', note: 'Đường đỏ dùng trục °C bên trái, cột xanh dùng trục mm bên phải; nhiệt độ trung bình 23,8°C, mưa năm 1 684 mm theo hình.' },
  { part: 'geo', lessonNum: 19, img: 'image10.png', title: 'Vòng tuần hoàn lớn của nước', page: 'trang 157', note: 'Chỉ các nhánh bốc hơi, ngưng tụ, mưa, thấm, dòng mặt và dòng ngầm; nêu nguồn năng lượng.' },
  { part: 'geo', lessonNum: 22, img: 'image11.png', title: 'Các tầng đất chính', page: 'trang 168', note: 'Đọc tầng chứa mùn, tầng tích tụ, tầng đá mẹ; liên hệ độ phì và bảo vệ lớp đất mặt.' },
  { part: 'geo', lessonNum: 29, img: 'image12.png', title: 'Khai thác thông minh tài nguyên vì phát triển bền vững', page: 'trang 188', note: 'Khoáng sản cần tiết kiệm và vật liệu thay thế; đất và sinh vật cần phục hồi; nước và không khí cần tránh ô nhiễm.' }
];

imgMap.forEach(item => {
  const lesson = data.allLessons.find(l => {
    if (item.part === 'history') {
      return l.part === 'history' && l.title.startsWith(`Bài ${item.lessonNum} `);
    } else {
      return l.part === 'geo' && l.title.startsWith(`Bài ${item.lessonNum} `);
    }
  });
  if (lesson) {
    lesson.images.push(item);
  }
  data.diagrams.push(item);
});

// Parse Tables from lsdl6_tables.json
const rawTables = require('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_tables.json');
// Table 2 is timeline: rows 1..12
data.timeline = rawTables[1].slice(1).map(row => ({
  time: row[0].replace(/<[^>]+>/g, '').trim(),
  event: row[1].replace(/<[^>]+>/g, '').trim(),
  meaning: row[2].replace(/<[^>]+>/g, '').trim()
}));

// Table 3 is formulas: rows 1..8
data.formulas = rawTables[2].slice(1).map(row => ({
  name: row[0].replace(/<[^>]+>/g, '').trim(),
  calc: row[1].replace(/<[^>]+>/g, '').trim(),
  note: row[2].replace(/<[^>]+>/g, '').trim()
}));

// Parse local study framework
for (let i = localStudyStart + 1; i < lines.length - 2; i += 2) {
  if (lines[i] && lines[i + 1]) {
    data.localStudy.push({
      heading: lines[i],
      content: lines[i + 1]
    });
  }
}

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl6_parsed_data.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Saved lsdl6_parsed_data.json successfully!');
console.log('Total diagrams mapped:', data.diagrams.length);
console.log('Timeline items:', data.timeline.length);
console.log('Formulas items:', data.formulas.length);
console.log('Local study items:', data.localStudy.length);
