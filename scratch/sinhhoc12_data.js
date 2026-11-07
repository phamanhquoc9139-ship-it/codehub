// scratch/sinhhoc12_data.js
// Tổng hợp toàn bộ dữ liệu Sinh học 12 Kết nối tri thức: 8 chương, 35 bài
const lessonsP1 = require('./sinhhoc12_data_p1.js');
const { lessonsP2, formulaTable, subjectSummaryCards, arenaBank } = require('./sinhhoc12_data_p2.js');

const chapters = [
  {
    num: 1,
    title: "Chương 1. Di truyền phân tử",
    shortTitle: "Chương 1: Di truyền phân tử",
    icon: "fa-dna",
    lessons: [1, 2, 3, 4, 5, 6]
  },
  {
    num: 2,
    title: "Chương 2. Di truyền nhiễm sắc thể",
    shortTitle: "Chương 2: Di truyền NST",
    icon: "fa-microscope",
    lessons: [7, 8, 9, 10, 11, 12, 13, 14]
  },
  {
    num: 3,
    title: "Chương 3. Mở rộng học thuyết di truyền nhiễm sắc thể",
    shortTitle: "Chương 3: Mở rộng học thuyết di truyền",
    icon: "fa-seedling",
    lessons: [15, 16, 17]
  },
  {
    num: 4,
    title: "Chương 4. Di truyền quần thể",
    shortTitle: "Chương 4: Di truyền quần thể",
    icon: "fa-users-viewfinder",
    lessons: [18]
  },
  {
    num: 5,
    title: "Chương 5. Bằng chứng và các học thuyết tiến hóa",
    shortTitle: "Chương 5: Tiến hóa sinh giới",
    icon: "fa-tree",
    lessons: [19, 20, 21, 22]
  },
  {
    num: 6,
    title: "Chương 6. Môi trường và sinh thái học quần thể",
    shortTitle: "Chương 6: Môi trường & Quần thể",
    icon: "fa-chart-area",
    lessons: [23, 24, 25]
  },
  {
    num: 7,
    title: "Chương 7. Sinh thái học quần xã",
    shortTitle: "Chương 7: Quần xã & Hệ sinh thái",
    icon: "fa-network-wired",
    lessons: [26, 27, 28, 29, 30, 31, 32]
  },
  {
    num: 8,
    title: "Chương 8. Sinh thái học phục hồi, bảo tồn và phát triển bền vững",
    shortTitle: "Chương 8: Bảo tồn & Phát triển bền vững",
    icon: "fa-earth-americas",
    lessons: [33, 34, 35]
  }
];

const lessons = {};
for (let i = 1; i <= 17; i++) {
  lessons[i] = lessonsP1[i];
}
for (let i = 18; i <= 35; i++) {
  lessons[i] = lessonsP2[i];
}

module.exports = {
  chapters,
  lessons,
  formulaTable,
  subjectSummaryCards,
  arenaBank
};
