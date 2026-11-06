// Bộ 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Tiếng Nhật 7 (60 phút)
// Bao quát 13 bài học và chuyên đề ngữ pháp SGK Tiếng Nhật 7

const examQuestions = [
  // PHẦN 1: TRỢ TỪ & CHU KÌ (Câu 1 - 8)
  {
    q: "Điền trợ từ đúng: '一週間 (____) 2回、日本語を勉強します。'",
    options: ["A. で", "B. に", "C. を", "D. へ"],
    answer: 1,
    explain: "Mẫu câu chỉ tần suất theo chu kì: [Khoảng thời gian] + に + [Số lần] 回: 一週間に2回."
  },
  {
    q: "Điền trợ từ đúng: '夏休みに山 (____) 写真をとりに行きました。'",
    options: ["A. で", "B. に", "C. へ", "D. を"],
    answer: 2,
    explain: "Phương hướng chuyển động đến địa điểm dùng trợ từ 'へ' (hoặc 'に'): 山へ写真をとりに行きました."
  },
  {
    q: "Điền trợ từ đúng: '図書館へ本を借り (____) 行きます。'",
    options: ["A. に", "B. で", "C. を", "D. と"],
    answer: 0,
    explain: "Mục đích chuyển động: V-stem (bỏ ます) + に + 行きます: 借りに行きます."
  },
  {
    q: "Điền trợ từ đúng: '誕生日に母 (____) きれいな花をもらいました。'",
    options: ["A. を", "B. に", "C. で", "D. へ"],
    answer: 1,
    explain: "Trong mẫu câu nhận quà (もらいます), người trao tặng được đánh dấu bằng 'に' (hoặc 'から')."
  },
  {
    q: "Điền trợ từ đúng: 'ハノイは今、雨 (____) 降っています。'",
    options: ["A. を", "B. が", "C. に", "D. で"],
    answer: 1,
    explain: "Hiện tượng thiên nhiên tự thân diễn ra dùng trợ từ 'が': 雨が降っています."
  },
  {
    q: "Điền trợ từ đúng: '生徒たちは教室 (____) 歌を歌っています。'",
    options: ["A. に", "B. で", "C. へ", "D. が"],
    answer: 1,
    explain: "Địa điểm diễn ra một hành động cụ thể (hát, học, đọc sách) dùng trợ từ 'で'."
  },
  {
    q: "Điền trợ từ đúng: 'ホアンキエム湖 (____) タイ湖の方が大きいです。'",
    options: ["A. より", "B. の方が", "C. と", "D. から"],
    answer: 0,
    explain: "Trong mẫu so sánh hơn, đối tượng làm mốc so sánh đi với 'より': N1 より N2 の方が A です."
  },
  {
    q: "Điền trợ từ đúng: '旧市街 (____) シクロに乗ることができます。'",
    options: ["A. に", "B. で", "C. を", "D. へ"],
    answer: 1,
    explain: "Địa điểm có thể thực hiện một hoạt động trải nghiệm dùng trợ từ 'で': 旧市街で."
  },

  // PHẦN 2: THỂ ĐỘNG TỪ & BIẾN ĐỔI (Câu 9 - 18)
  {
    q: "Động từ '行きます' (nhóm 1 ngoại lệ) chuyển sang thể て là:",
    options: ["A. 行きて", "B. 行って", "C. 行いで", "D. 行んで"],
    answer: 1,
    explain: "Động từ '行きます' là ngoại lệ nhóm 1: 行きます → 行って."
  },
  {
    q: "Động từ '食べます' (nhóm 2) chuyển sang thể từ điển (Vる) là:",
    options: ["A. 食べる", "B. 食べす", "C. 食べつ", "D. 食べむ"],
    answer: 0,
    explain: "Động từ nhóm 2 bỏ 'ます' thêm 'る': 食べます → 食べる."
  },
  {
    q: "Động từ '話します' (nhóm 1) chuyển sang thể て là:",
    options: ["A. 話して", "B. 話って", "C. 話いで", "D. 話んで"],
    answer: 0,
    explain: "Động từ nhóm 1 tận cùng 'します' đổi thành 'して': 話します → 話して."
  },
  {
    q: "Động từ '読みます' (nhóm 1) chuyển sang thể て là:",
    options: ["A. 読いて", "B. 読んで", "C. 読って", "D. 読して"],
    answer: 1,
    explain: "Động từ nhóm 1 tận cùng 'みます' đổi thành 'んで': 読みます → 読んで."
  },
  {
    q: "Động từ '来ます' (nhóm 3 bất quy tắc) chuyển sang thể từ điển là:",
    options: ["A. くる (来る)", "B. きる", "C. こる", "D. くす"],
    answer: 0,
    explain: "Động từ nhóm 3 '来ます' chuyển sang thể từ điển là 'くる' (viết Hán tự là 来る)."
  },
  {
    q: "Điền dạng đúng của động từ: '朝起きて、顔を (____)、朝ごはんを食べます。'",
    options: ["A. 洗います", "B. 洗って", "C. 洗う", "D. 洗いに"],
    answer: 1,
    explain: "Nối chuỗi hành động theo thứ tự dùng thể て: 洗って (rửa mặt rồi...)."
  },
  {
    q: "Điền dạng đúng trong mẫu câu sở thích: '私の趣味は音楽を (____) ことです。'",
    options: ["A. 聴きます", "B. 聴く", "C. 聴いて", "D. 聴いた"],
    answer: 1,
    explain: "Cấu trúc danh từ hóa động từ nói về sở thích: V thể từ điển (Vる) + ことです: 聴くことです."
  },
  {
    q: "Mẫu câu xin phép 'Em mượn cây bút này có được không ạ?':",
    options: [
      "A. このペンを借りてもいいですか。",
      "B. このペンを借りるのことですか。",
      "C. このペンを借りに行きますか。",
      "D. このペンを借りますもいいですか。"
    ],
    answer: 0,
    explain: "Mẫu câu xin phép: V thể て + もいいですか: 借りてもいいですか."
  },
  {
    q: "Mẫu câu nhờ hướng dẫn cách làm: 'Xin hãy chỉ cho tôi cách đọc chữ Hán này':",
    options: [
      "A. この漢字の読み方を教えてください。",
      "B. この漢字の読み方を教えてもいいですか。",
      "C. この漢字の読み方は教えることです。",
      "D. この漢字の読み方より教えます。"
    ],
    answer: 0,
    explain: "Vます-stem + 方 (cách làm) + を教えてください (xin hãy chỉ giúp)."
  },
  {
    q: "Cụm từ biểu đạt 'cách sử dụng' máy tính / điện thoại là:",
    options: ["A. 使い方 (tsukaikata)", "B. 読み方 (yomikata)", "C. 書き方 (kakikata)", "D. 行き方 (ikikata)"],
    answer: 0,
    explain: "使います (dùng) bỏ ます thêm 方 thành 使い方 (cách sử dụng)."
  },

  // PHẦN 3: TỪ VỰNG & GIAO TIẾP (Câu 19 - 28)
  {
    q: "Động từ thích hợp khi nói về việc 'đội mũ' (帽子):",
    options: ["A. 着ます (kimasu)", "B. はきます (hakimasu)", "C. かぶります (kaburimasu)", "D. かけます (kakemasu)"],
    answer: 2,
    explain: "Đội mũ trên đầu dùng động từ 'かぶります' (kaburimasu)."
  },
  {
    q: "Động từ thích hợp khi nói về việc 'mặc quần' (ズボン) hoặc 'đi giày' (靴):",
    options: ["A. はきます (hakimasu)", "B. 着ます (kimasu)", "C. かぶります (kaburimasu)", "D. かけます (kakemasu)"],
    answer: 0,
    explain: "Trang phục từ thắt lưng trở xuống (quần, váy, tất, giày) dùng động từ 'はきます'."
  },
  {
    q: "Động từ thích hợp khi nói về việc 'đeo kính' (めがね):",
    options: ["A. かけます (kakemasu)", "B. 着ます (kimasu)", "C. かぶります (kaburimasu)", "D. はきます (hakimasu)"],
    answer: 0,
    explain: "Đeo kính mắt dùng động từ 'かけます' -> めがねをかけています."
  },
  {
    q: "Môn học '理科' (rika) trong chương trình THCS có nghĩa là gì?",
    options: ["A. Khoa học tự nhiên", "B. Khoa học xã hội", "C. Mĩ thuật", "D. Tin học"],
    answer: 0,
    explain: "理科 (Khoa học tự nhiên), còn 社会 là Khoa học xã hội."
  },
  {
    q: "Từ '放課後' (hōkago) mang ý nghĩa chỉ khoảng thời gian nào?",
    options: ["A. Giờ ra chơi", "B. Trước giờ vào lớp", "C. Sau giờ học (tan trường)", "D. Giờ nghỉ trưa"],
    answer: 2,
    explain: "放課後 (Phóng khóa hậu) nghĩa là sau khi tan học ở trường."
  },
  {
    q: "Khi đối phương hỏi '窓を開けてもいいですか' và bạn đồng ý, bạn sẽ đáp:",
    options: ["A. はい、いいですよ。", "B. いいえ、だめです。", "C. どういたしまして。", "D. いただきます。"],
    answer: 0,
    explain: "Đồng ý lời xin phép: 'はい、いいですよ' (Vâng, được chứ ạ)."
  },
  {
    q: "Nối tính từ 'やさしい' (hiền dịu) với '親切' (tốt bụng) theo đúng ngữ pháp:",
    options: ["A. やさしくて、親切です。", "B. やさしいで、親切です。", "C. やさしくで、親切です。", "D. やさしいくて、親切です。"],
    answer: 0,
    explain: "Tính từ đuôi い bỏ い + くて: やさしい → やさしくて、親切です."
  },
  {
    q: "Nối tính từ đuôi な 'まじめ' (chăm chỉ) với '頭がいい' (thông minh):",
    options: ["A. まじめで、頭がいいです。", "B. まじめくて、頭がいいです。", "C. まじめなで、頭がいいです。", "D. まじめに、頭がいいです。"],
    answer: 0,
    explain: "Tính từ đuôi な liên kết bằng 'で': まじめで、頭がいいです."
  },
  {
    q: "Cửa hàng đồng giá nổi tiếng ở Nhật bán đồ gia dụng 100 yên gọi là:",
    options: ["A. 100円ショップ (Hyaku-en shoppu)", "B. デパート (Depāto)", "C. スーパー (Sūpā)", "D. コンビニ (Konbini)"],
    answer: 0,
    explain: "100円ショップ là chuỗi cửa hàng đồng giá 100 yên cực kì phổ biến tại Nhật Bản."
  },
  {
    q: "Điệu múa truyền thống nổi tiếng của Nhật Bản trong lễ hội Obon mùa hè là:",
    options: ["A. 盆踊り (Bon-odori)", "B. 歌舞伎 (Kabuki)", "C. 能 (Noh)", "D. 茶道 (Sadō)"],
    answer: 0,
    explain: "Điệu múa Bon Odori là điệu múa cộng đồng trong lễ Vu Lan Obon của Nhật Bản."
  },

  // PHẦN 4: CHỮ HÁN KANJI LỚP 7 (Câu 29 - 34)
  {
    q: "Chữ Hán nào dưới đây chỉ 'Biển' trong tiếng Nhật?",
    options: ["A. 海", "B. 魚", "C. 毎", "D. 好"],
    answer: 0,
    explain: "Chữ 海 (HẢI) phát âm là 'umi' mang nghĩa là biển."
  },
  {
    q: "Chữ Hán '朝' trong '朝ごはん' có âm Hán Việt là gì?",
    options: ["A. TRIÊU", "B. TRÚ", "C. DẠ", "D. TỊCH"],
    answer: 0,
    explain: "Chữ 朝 có âm Hán Việt là TRIÊU (buổi sáng). 昼 là TRÚ, 夜 là DẠ, 夕 là TỊCH."
  },
  {
    q: "Chữ Hán '去年' đọc là gì và có nghĩa là gì?",
    options: ["A. きょねん (Năm ngoái)", "B. ことし (Năm nay)", "C. らいねん (Năm sau)", "D. まいとし (Mỗi năm)"],
    answer: 0,
    explain: "去年 đọc là 'きょねん' (KHỨ NIÊN = năm ngoái)."
  },
  {
    q: "Bốn chữ Hán chỉ bốn mùa Xuân - Hạ - Thu - Đông lần lượt là:",
    options: ["A. 春・夏・秋・冬", "B. 夏・春・冬・秋", "C. 冬・秋・夏・春", "D. 秋・冬・春・夏"],
    answer: 0,
    explain: "Bốn mùa: 春 (Haru) - 夏 (Natsu) - 秋 (Aki) - 冬 (Fuyu)."
  },
  {
    q: "Chữ Hán '教室' (phòng học) gồm hai chữ Hán nào ghép lại?",
    options: ["A. GIÁO và THẤT", "B. GIÁO và MÔN", "C. THẤT và KHÁCH", "D. LAI và THẤT"],
    answer: 0,
    explain: "教室 gồm chữ 教 (GIÁO) và 室 (THẤT - căn phòng)."
  },
  {
    q: "Chữ Hán '桜' phát âm trong tiếng Nhật là gì?",
    options: ["A. さくら (Sakura)", "B. はな (Hana)", "C. うみ (Umi)", "D. やま (Yama)"],
    answer: 0,
    explain: "桜 (ANH) phát âm là Sakura (hoa anh đào Nhật Bản)."
  },

  // PHẦN 5: ĐỌC HIỂU & VẬN DỤNG TỔNG HỢP (Câu 35 - 40)
  {
    q: "Đọc câu: '私は一週間に2回、プールへ泳ぎに行きます。' Câu này có nghĩa là:",
    options: [
      "A. Một tuần tôi đến hồ bơi bơi lội hai lần.",
      "B. Một tháng tôi đi bơi hai lần ở biển.",
      "C. Tôi thích bơi lội vào thứ Hai hằng tuần.",
      "D. Tôi bơi ở hồ bơi mỗi ngày hai tiếng."
    ],
    answer: 0,
    explain: "一週間に2回 = một tuần 2 lần; プールへ泳ぎに行きます = đến hồ bơi để bơi."
  },
  {
    q: "Đọc câu: 'ホーチミン市はハノイより人口が多いです。' Nơi nào có dân số đông hơn?",
    options: [
      "A. Thành phố Hồ Chí Minh đông dân hơn Hà Nội.",
      "B. Hà Nội đông dân hơn Thành phố Hồ Chí Minh.",
      "C. Hai thành phố có dân số bằng nhau.",
      "D. Cả hai thành phố đều có dân số ít."
    ],
    answer: 0,
    explain: "ハノイより (so với Hà Nội) thì ホーチミン市の方が人口が多い (TP.HCM đông dân hơn)."
  },
  {
    q: "Đọc câu: 'コーバック通りでフーティウを食べることができます。' Bạn có thể làm gì ở phố Cô Bắc?",
    options: [
      "A. Có thể thưởng thức món hủ tiếu.",
      "B. Có thể đi xe buýt tham quan.",
      "C. Có thể mua gốm sứ Bát Tràng.",
      "D. Có thể xem múa rối nước."
    ],
    answer: 0,
    explain: "フーティウを食べることができます = có thể thưởng thức món hủ tiếu."
  },
  {
    q: "Câu nào dưới đây miêu tả đúng: 'Chị Tanaka là giáo viên tiếng Nhật, rất hiền và tốt bụng'?",
    options: [
      "A. 田中先生は日本語の先生で、やさしくて、親切です。",
      "B. 田中先生は日本語の先生に、やさしいで、親切です。",
      "C. 田中先生は日本語の先生を、やさしくて、親切なです。",
      "D. 田中先生は日本語の先生が、やさしいくて、親切でした。"
    ],
    answer: 0,
    explain: "Nối danh từ bằng 'で', tính từ đuôi い bằng 'くて': 先生で、やさしくて、親切です."
  },
  {
    q: "Khi muốn hỏi 'Tháng này bạn đi xem phim mấy lần?', câu tiếng Nhật chuẩn là:",
    options: [
      "A. 今月、何回映画を見ますか。",
      "B. 今月、何時映画を見ますか。",
      "C. 今月、何曜日映画を見ますか。",
      "D. 今月、何人映画を見ますか。"
    ],
    answer: 0,
    explain: "Hỏi số lần dùng '何回' (nankai): 何回映画を見ますか."
  },
  {
    q: "Ý nghĩa của việc so sánh di sản thế giới giữa Nhật Bản và Việt Nam trong bài học là gì?",
    options: [
      "A. Nâng cao hiểu biết đa văn hóa và tình yêu gìn giữ cảnh quan thiên nhiên của hai dân tộc.",
      "B. Để chứng minh cảnh quan một nước đẹp hơn nước kia.",
      "C. Để bắt buộc học sinh phải đi du lịch nước ngoài.",
      "D. Để ghi nhớ số liệu diện tích tuyệt đối."
    ],
    answer: 0,
    explain: "Mục tiêu giáo dục môn học giúp học sinh mở rộng hiểu biết văn hóa, tôn trọng sự đa dạng và có ý thức giữ gìn di sản thiên nhiên."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { examQuestions };
}
