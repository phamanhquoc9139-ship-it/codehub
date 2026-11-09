// scratch/ktpl11_data_master.js
// Tổng hợp toàn bộ 21 bài học KTPL 11 + Công cụ & Bảng tra cứu + Đấu trường 45 phút + SVGs

const p1 = require('./ktpl11_data_kinhte.js');
const p2 = require('./ktpl11_data_phapluat.js');
const { reviewTable, coreFormulas, arenaQuestions } = require('./ktpl11_tools_arena.js');
const svgs = require('./ktpl11_svgs.js');

const lessons = {};
for (let i = 1; i <= 8; i++) lessons[i] = p1[i];
for (let i = 9; i <= 21; i++) lessons[i] = p2[i];

const parts = [
  {
    num: 1,
    title: "Phần I. Giáo dục kinh tế",
    badge: "Bài 1 – 8 (6 Chủ đề)",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    num: 2,
    title: "Phần II. Giáo dục pháp luật",
    badge: "Bài 9 – 21 (3 Chủ đề)",
    lessons: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  }
];

const svgMap = {
  1: { key: 'svg1_canhtranh', title: 'Cơ chế cạnh tranh & Động lực kinh tế thị trường' },
  2: { key: 'svg2_cung_cau', title: 'Đồ thị cung – cầu và điểm cân bằng thị trường' },
  3: { key: 'svg3_lamphat', title: '3 Mức độ lạm phát & Công thức đo lường theo CPI' },
  4: { key: 'svg4_thatnghiep_vieclam', title: 'Phân loại thất nghiệp & Tác động thị trường' },
  5: { key: 'svg4_thatnghiep_vieclam', title: 'Mô hình kết nối thị trường lao động và thị trường việc làm' },
  6: { key: 'svg5_swot_kinhdoanh', title: 'Ma trận SWOT đánh giá ý tưởng & cơ hội kinh doanh' },
  7: { key: 'svg6_daoduc_kinhdoanh', title: '5 Chuẩn mực đạo đức kinh doanh' },
  8: { key: 'svg6_daoduc_kinhdoanh', title: 'Văn hóa tiêu dùng xanh & Bền vững' },
  9: { key: 'svg7_binhdang_phapluat', title: 'Trụ cột bình đẳng về quyền, nghĩa vụ và trách nhiệm pháp lí' },
  10: { key: 'svg7_binhdang_phapluat', title: 'Bình đẳng giới trong 5 lĩnh vực đời sống xã hội' },
  11: { key: 'svg7_binhdang_phapluat', title: 'Bình đẳng giữa các dân tộc trên lãnh thổ Việt Nam' },
  12: { key: 'svg7_binhdang_phapluat', title: 'Bình đẳng giữa các tôn giáo trước pháp luật' },
  13: { key: 'svg8_cay_quyen_congdan', title: 'Quyền và nghĩa vụ tham gia quản lí nhà nước và xã hội' },
  14: { key: 'svg8_cay_quyen_congdan', title: 'Quyền bầu cử & ứng cử với 4 nguyên tắc vàng' },
  15: { key: 'svg8_cay_quyen_congdan', title: 'Phân biệt quyền khiếu nại và quyền tố cáo' },
  16: { key: 'svg8_cay_quyen_congdan', title: 'Quyền và nghĩa vụ về bảo vệ Tổ quốc' },
  17: { key: 'svg8_cay_quyen_congdan', title: 'Quyền bất khả xâm phạm thân thể, tính mạng, danh dự' },
  18: { key: 'svg8_cay_quyen_congdan', title: 'Quyền bất khả xâm phạm về chỗ ở của công dân' },
  19: { key: 'svg8_cay_quyen_congdan', title: 'Bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín' },
  20: { key: 'svg8_cay_quyen_congdan', title: 'Quyền tự do ngôn luận, báo chí và tiếp cận thông tin' },
  21: { key: 'svg8_cay_quyen_congdan', title: 'Quyền và nghĩa vụ về tự do tín ngưỡng, tôn giáo' }
};

module.exports = {
  lessons,
  parts,
  svgMap,
  reviewTable,
  coreFormulas,
  arenaQuestions,
  svgs
};
