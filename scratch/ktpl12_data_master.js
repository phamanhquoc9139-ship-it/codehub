// scratch/ktpl12_data_master.js
// Tổng hợp toàn bộ 16 bài học KTPL 12 + Công cụ & Bảng tra cứu + Đấu trường 45 phút + SVGs

const p1 = require('./ktpl12_data_kinhte.js');
const p2 = require('./ktpl12_data_phapluat.js');
const { glossaryTable, interactiveTools, arenaQuestions } = require('./ktpl12_tools_arena.js');
const svgs = require('./ktpl12_svgs.js');

const lessons = {};
for (let i = 1; i <= 7; i++) lessons[i] = p1[i];
for (let i = 8; i <= 16; i++) lessons[i] = p2[i];

const parts = [
  {
    num: 1,
    title: "Phần Một. Giáo dục kinh tế",
    badge: "Bài 1 – 7",
    lessons: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    num: 2,
    title: "Phần Hai. Giáo dục pháp luật",
    badge: "Bài 8 – 16",
    lessons: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  }
];

const svgMap = {
  1: svgs.svg1_gdp_flow,
  4: svgs.svg4_ansinh,
  5: svgs.svg5_kehoach_kd,
  6: svgs.svg3_csr_pyramid,
  9: svgs.svg6_sohuu,
  15: svgs.svg7_vungbien,
  16: svgs.svg8_wto
};

module.exports = {
  lessons,
  parts,
  svgMap,
  glossaryTable,
  interactiveTools,
  arenaQuestions,
  svgs
};
