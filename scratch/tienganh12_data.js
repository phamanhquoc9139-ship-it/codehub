// Tiếng Anh 12 - Global Success: Combined Master Data

const part1 = require('./tienganh12_data_part1.js');
const part2 = require('./tienganh12_data_part2.js');

const units = {
  ...part1.units,
  ...part2.unitsPart2
};

module.exports = {
  meta: {
    title: "TIẾNG ANH 12 — GLOBAL SUCCESS",
    subtitle: "Tổng Hợp Kiến Thức Đầy Đủ Theo Unit & Ôn Luyện Đột Phá",
    curriculum: "Chương trình Giáo dục phổ thông mới 2018 — Bộ sách Global Success (Nhà xuất bản Giáo dục Việt Nam)",
    scope: "Đủ 10 Unit học tập chính khóa và 4 bài Ôn tập tổng hợp (Reviews), kèm Ngân hàng giao tiếp, Kỹ năng viết, Bảng ngữ pháp tra nhanh và Đấu trường 20 câu 45 phút.",
    features: [
      "100% Khung chuẩn SGK: Phát âm, Từ vựng, Ngữ pháp, 5 Kỹ năng, Giao tiếp hàng ngày, Văn hóa/CLIL, Dự án và Mini-quizzes.",
      "10 Sơ đồ tư duy trực quan SVG vector minh họa trực tiếp từng Unit.",
      "Ngân hàng giao tiếp đàm thoại & Bảng tổng kết 10 sản phẩm viết học thuật.",
      "Bảng tra nhanh 10 chuyên đề ngữ pháp trọng tâm thi tốt nghiệp THPT.",
      "Đấu trường luyện thi 20 câu chuẩn ma trận đề thi mới có đồng hồ đếm ngược 45 phút và chấm điểm tức thì."
    ]
  },
  units,
  communicationBank: part2.communicationBank,
  grammarQuickRef: part2.grammarQuickRef,
  arenaExam: part2.arenaExam
};
