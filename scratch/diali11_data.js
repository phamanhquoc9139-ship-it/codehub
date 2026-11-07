// scratch/diali11_data.js
// Tổng hợp dữ liệu toàn diện Địa lí 11 - Kết nối tri thức với cuộc sống
// Đủ 2 phần, 31 bài học + Phần Công cụ & Kỹ năng địa lí

const part1 = require('./diali11_data_part1.js');
const part2 = require('./diali11_data_part2.js');
const part3 = require('./diali11_data_part3.js');
const { toolsAndSkills, arena_exam_20 } = require('./diali11_tools_skills.js');
const svgs = require('./diali11_svgs.js');

const allLessons = {};
for (let i = 1; i <= 10; i++) {
  if (part1[i]) allLessons[i] = part1[i];
}
for (let i = 11; i <= 20; i++) {
  if (part2[i]) allLessons[i] = part2[i];
}
for (let i = 21; i <= 31; i++) {
  if (part3[i]) allLessons[i] = part3[i];
}

const courseMeta = {
  subject: "Địa lí 11",
  bookSeries: "Kết nối tri thức với cuộc sống",
  parts: [
    {
      title: "Phần I. Một số vấn đề về kinh tế – xã hội thế giới",
      lessons: [1, 2, 3, 4, 5]
    },
    {
      title: "Phần II. Địa lí khu vực và quốc gia",
      subsections: [
        { name: "Khu vực Mỹ La tinh", lessons: [6, 7, 8] },
        { name: "Liên minh châu Âu (EU)", lessons: [9, 10] },
        { name: "Khu vực Đông Nam Á", lessons: [11, 12, 13, 14] },
        { name: "Khu vực Tây Nam Á", lessons: [15, 16, 17] },
        { name: "Hợp chúng quốc Hoa Kỳ", lessons: [18, 19] },
        { name: "Liên bang Nga", lessons: [20, 21, 22] },
        { name: "Nhật Bản", lessons: [23, 24, 25] },
        { name: "Trung Quốc", lessons: [26, 27, 28] },
        { name: "Ô-xtrây-li-a", lessons: [29] },
        { name: "Cộng hoà Nam Phi", lessons: [30, 31] }
      ]
    },
    {
      title: "Công cụ và kỹ năng địa lí",
      type: "tools"
    }
  ]
};

module.exports = {
  lessons: allLessons,
  toolsAndSkills,
  arena_exam: arena_exam_20,
  svgs,
  meta: courseMeta
};
