// scratch/diali12_data_master.js
// Tổng hợp 35 bài học Địa lí 12 + Công cụ kỹ năng + Đấu trường 45 phút + SVGs

const p1 = require('./diali12_data_part1.js');
const p2 = require('./diali12_data_part2.js');
const p3 = require('./diali12_data_part3.js');
const { toolsAndSkills, arena_exam } = require('./diali12_tools_skills.js');
const svgs = require('./diali12_svgs_grade11_style.js');

const lessons = {};
for (let i = 1; i <= 10; i++) lessons[i] = p1[i];
for (let i = 11; i <= 23; i++) lessons[i] = p2[i];
for (let i = 24; i <= 35; i++) lessons[i] = p3[i];

// Sắp xếp các phần chương mục cho Sidebar
const parts = [
  { num: 1, title: "Phần I. Địa lí tự nhiên", lessons: [1, 2, 3, 4, 5, 6] },
  { num: 2, title: "Phần II. Địa lí dân cư", lessons: [7, 8, 9, 10] },
  { num: 3, title: "Phần III. Địa lí các ngành kinh tế", lessons: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
  { num: 4, title: "Phần IV. Địa lí các vùng kinh tế", lessons: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] },
  { num: 5, title: "Phần V. Địa lí địa phương", lessons: [35] }
];

// Bản đồ gắn SVG vào các bài học tương ứng
const svgMap = {
  1: svgs.svg1_vitri,
  2: svgs.svg2_giomua,
  5: svgs.svg3_mientunhien,
  7: svgs.svg4_danso,
  11: svgs.svg5_coccaukt,
  13: svgs.svg6_nongnghiep,
  18: svgs.svg7_congnghiep
};

module.exports = {
  lessons,
  parts,
  svgMap,
  toolsAndSkills,
  arena_exam,
  svgs
};
