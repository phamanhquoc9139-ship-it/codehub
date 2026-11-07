// scratch/sinhhoc11_data.js
// Tổng hợp toàn bộ dữ liệu Sinh học 11 - Phần 3: Sinh học cơ thể (29 bài học)
const p1_lessons = require('./sinhhoc11_data_p1.js');
const { p2_lessons, diagramGroupsInfo, labChecklist, arenaQuestions } = require('./sinhhoc11_data_p2.js');

const chapters = [
  {
    num: 1,
    title: "Chương 1: Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
    shortTitle: "Chương 1: Trao đổi chất & Năng lượng",
    icon: "fa-bolt",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  },
  {
    num: 2,
    title: "Chương 2: Cảm ứng ở sinh vật",
    shortTitle: "Chương 2: Cảm ứng",
    icon: "fa-brain",
    lessons: [14, 15, 16, 17, 18]
  },
  {
    num: 3,
    title: "Chương 3: Sinh trưởng và phát triển ở sinh vật",
    shortTitle: "Chương 3: Sinh trưởng & Phát triển",
    icon: "fa-seedling",
    lessons: [19, 20, 21, 22, 23]
  },
  {
    num: 4,
    title: "Chương 4: Sinh sản ở sinh vật",
    shortTitle: "Chương 4: Sinh sản",
    icon: "fa-dna",
    lessons: [24, 25, 26, 27]
  },
  {
    num: 5,
    title: "Chương 5: Quan hệ giữa các quá trình sinh lí trong cơ thể sinh vật và ngành nghề liên quan",
    shortTitle: "Chương 5: Tính thống nhất & Nghề nghiệp",
    icon: "fa-network-wired",
    lessons: [28, 29]
  }
];

const lessons = {};
for (let i = 1; i <= 18; i++) {
  lessons[i] = p1_lessons[i];
}
for (let i = 19; i <= 29; i++) {
  lessons[i] = p2_lessons[i];
}

module.exports = {
  chapters,
  lessons,
  diagramGroupsInfo,
  labChecklist,
  arenaQuestions
};
