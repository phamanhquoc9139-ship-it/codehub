// Data expanded for Tieng Nga 6 (English 6 UI clone)
const { themesData } = require('./data_tiengnga6.js');

// Add 2nd quiz question for each of the 16 uroks
const secondQuizQuestions = [
  // Urok 1
  {
    q: "Động từ 'ждать' (chờ đợi) trong câu 'Я жду сестру около школы' đòi hỏi danh từ ở Cách mấy?",
    options: ["Cách 4 (Akkusativ)", "Cách 3 (Dativ)", "Cách 6 (Predlozhnyy)", "Cách 5 (Tvoritel'nyy)"],
    ans: 0,
    explain: "Động từ 'ждать' đòi hỏi tân ngữ trực tiếp ở Cách 4: ждать сестру (chờ em gái)."
  },
  // Urok 2
  {
    q: "Đại từ chỉ định 'этот' đi với danh từ giống cái 'школа' ở Cách 6 ('в ... школе') là:",
    options: ["этой", "эту", "этом", "этих"],
    ans: 0,
    explain: "Danh từ giống cái 'школа' ở Cách 6 là 'в этой школе' (trong ngôi trường này)."
  },
  // Urok 3
  {
    q: "Từ 'осень' (mùa thu) trong tiếng Nga thuộc giống gì?",
    options: ["Giống cái (Feminine)", "Giống đực (Masculine)", "Giống trung (Neuter)", "Số nhiều (Plural)"],
    ans: 0,
    explain: "'осень' có tận cùng bằng dấu mềm -ь nhưng là danh từ giống cái (она)."
  },
  // Urok 4
  {
    q: "Đại từ sở hữu 'наш' đi với danh từ giống đực 'класс' ở Cách 1 là:",
    options: ["наш", "наша", "наше", "наши"],
    ans: 0,
    explain: "'класс' là danh từ giống đực số ít, đại từ sở hữu là 'наш класс'."
  },
  // Urok 5
  {
    q: "Trong câu 'Мой папа работает _____ (инженер)', danh từ 'инженер' chia ở Cách 5 là:",
    options: ["инженером", "инженера", "инженеру", "инженере"],
    ans: 0,
    explain: "Cấu trúc nghề nghiệp 'работать кем (Cách 5)': работает инженером."
  },
  // Urok 6
  {
    q: "Tính từ ngắn đuôi diễn tả 'đang bận rộn' dành cho bạn nữ là:",
    options: ["занята", "занят", "занято", "заняты"],
    ans: 0,
    explain: "Tính từ ngắn đuôi giống cái: 'занята' (ví dụ: Анна сегодня занята)."
  },
  // Urok 7
  {
    q: "Động từ 'находиться' (nằm ở, tọa lạc) đòi hỏi giới từ và cách nào để chỉ vị trí?",
    options: ["в / на + Cách 6 (Giới cách)", "в / на + Cách 4", "к + Cách 3", "из + Cách 2"],
    ans: 0,
    explain: "'находиться где' luôn đi với Cách 6: находится в европейской части."
  },
  // Urok 8
  {
    q: "Từ chỉ phương hướng 'miền nam' ở vị trí Cách 6 là:",
    options: ["на юге", "в юге", "к югу", "из юга"],
    ans: 0,
    explain: "Từ chỉ 4 phương hướng luôn đi với giới từ 'на' ở Cách 6: на севере, на юге, на востоке, на западе."
  },
  // Urok 9
  {
    q: "Câu hỏi 'Bảo tàng này tên là gì?' trong tiếng Nga là:",
    options: ["Как называется этот музей?", "Где этот музей?", "Кто этот музей?", "Чей этот музей?"],
    ans: 0,
    explain: "Cấu trúc hỏi tên địa danh, đồ vật: 'Как называется что?'."
  },
  // Urok 10
  {
    q: "Cụm từ chỉ tần suất 'mỗi buổi sáng' ở Cách 4 không dùng giới từ là:",
    options: ["каждое утро", "в каждое утро", "на каждом утре", "с каждого утра"],
    ans: 0,
    explain: "Cụm từ chỉ thời gian lặp lại ở Cách 4 không dùng giới từ: каждое утро, каждый день."
  },
  // Urok 11
  {
    q: "Tiền tố 'при-' trong động từ 'приехать' mang ý nghĩa gì?",
    options: ["Đến nơi bằng phương tiện xe cộ", "Rời khỏi nơi xuất phát", "Bắt đầu khởi hành", "Đi vòng quanh"],
    ans: 0,
    explain: "Tiền tố 'при-' biểu thị sự đến nơi, xuất hiện tại điểm đích."
  },
  // Urok 12
  {
    q: "Cấp so sánh hơn của tính từ 'холодный' (lạnh) là:",
    options: ["холоднее", "более холодный", "самый холодный", "холодно"],
    ans: 0,
    explain: "'холодный' thêm đuôi -ее thành dạng so sánh hơn 'холоднее' (lạnh hơn)."
  },
  // Urok 13
  {
    q: "Động từ thể chưa hoàn thành (НСВ) 'объяснять' tập trung diễn tả điều gì?",
    options: ["Quá trình hành động đang diễn ra", "Kết quả trọn vẹn của hành động", "Hành động đã hoàn tất", "Hành động chỉ diễn ra 1 lần duy nhất"],
    ans: 0,
    explain: "Thể НСВ (Chưa hoàn thành) nhấn mạnh vào quá trình hoặc hành động kéo dài, thường xuyên lặp lại."
  },
  // Urok 14
  {
    q: "Từ nào trong tiếng Nga có nghĩa là môn 'Lịch sử'?",
    options: ["история", "литература", "математика", "информатика"],
    ans: 0,
    explain: "'история' là môn Lịch sử."
  },
  // Urok 15
  {
    q: "Liên từ nào dùng để diễn đạt quan hệ nguyên nhân 'bởi vì' trong câu phức?",
    options: ["потому что / так как", "поэтому", "хотя", "если"],
    ans: 0,
    explain: "'потому что' hoặc 'так как' mang nghĩa 'bởi vì' trong câu chỉ nguyên nhân."
  },
  // Urok 16
  {
    q: "Dự án thực hành cuối năm học lớp 6 có chủ đề là gì?",
    options: ["Giới thiệu bản thân và cẩm nang du lịch Nga - Việt", "Nấu ăn các món phương Tây", "Lập trình website", "Thi đấu thể thao"],
    ans: 0,
    explain: "Dự án tổng hợp 'О себе и о моей Родине' hướng dẫn học sinh giới thiệu bản thân và giao lưu văn hóa du lịch Nga - Việt."
  }
];

// Attach 2 questions to each urok
let urokIdx = 0;
themesData.forEach(t => {
  t.uroks.forEach(u => {
    u.quizzes = [
      u.quiz, // first question
      secondQuizQuestions[urokIdx] // second question
    ];
    urokIdx++;
  });
});

module.exports = { themesData };
console.log("Attached 2 quizzes per urok for all 16 uroks (Total:", urokIdx * 2, "questions).");
