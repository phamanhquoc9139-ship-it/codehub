// tiengnhat8_exam.js
// 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Tiếng Nhật 8 (Thời gian: 60:00)
// Phân bố toàn diện chuẩn SGK Kết nối tri thức với cuộc sống

const examQuestions = [
  // --- PHẦN 1: CHỮ HÁN KANJI (Câu 1 - 10) ---
  {
    id: 1,
    cat: "Chữ Hán",
    q: "Chữ Hán '覚' trong từ '覚える' (oboeru - ghi nhớ) có âm Hán Việt là gì?",
    options: ["A. TIỀN", "B. GIÁC", "C. KHẢO", "D. ĐẶC"],
    a: 1,
    exp: "'覚' có âm Hán Việt là GIÁC (trong tri giác, cảm giác, ghi nhớ)."
  },
  {
    id: 2,
    cat: "Chữ Hán",
    q: "Từ '黒板' (bảng đen trong lớp học) được ghép bởi hai chữ Hán nào?",
    options: ["A. Bạch Bản", "B. Hắc Bản", "C. Hoàng Bản", "D. Sắc Bản"],
    a: 1,
    exp: "'黒板' gồm chữ 黒 (HẮC - đen) và 板 (BẢN - tấm bảng), nghĩa là bảng đen."
  },
  {
    id: 3,
    cat: "Chữ Hán",
    q: "Chữ Hán nào dưới đây mang âm Hán Việt là 'TẢO' và có nghĩa là 'sớm'?",
    options: ["A. 正", "B. 細", "C. 早", "D. 起"],
    a: 2,
    exp: "'早' (TẢO) nghĩa là sớm, ví dụ '早い' (hayai - sớm), '早起き' (hayaoki - dậy sớm)."
  },
  {
    id: 4,
    cat: "Chữ Hán",
    q: "Từ '自転車' (xe đạp) có chữ '転' mang âm Hán Việt là gì?",
    options: ["A. TÂN", "B. TỰ", "C. CHUYỂN", "D. XA"],
    a: 2,
    exp: "'転' có âm Hán Việt là CHUYỂN (lăn, xoay chuyển). 自転車 = Tự Chuyển Xa."
  },
  {
    id: 5,
    cat: "Chữ Hán",
    q: "Từ '歩道' (vỉa hè, lối đi bộ) có chữ '歩' mang âm Hán Việt là:",
    options: ["A. BỘ", "B. TẢ", "C. HỮU", "D. DỊCH"],
    a: 0,
    exp: "'歩' là BỘ (đi bộ, bước đi). 歩道 = Bộ Đạo (lối đi bộ, vỉa hè)."
  },
  {
    id: 6,
    cat: "Chữ Hán",
    q: "Chữ Hán '観' trong từ '観光' (tham quan du lịch) có âm Hán Việt là:",
    options: ["A. QUANG", "B. QUAN", "C. TRƯỜNG", "D. KHỔ"],
    a: 1,
    exp: "'観' là QUAN (quan sát, ngắm cảnh), ghép với 光 (QUANG) thành 観光 (tham quan)."
  },
  {
    id: 7,
    cat: "Chữ Hán",
    q: "Từ '注意' (chú ý, nhắc nhở) bao gồm 2 chữ Hán nào?",
    options: ["A. Phân Ý", "B. Bán Phẩm", "C. Chú Ý", "D. Phẩm Chú"],
    a: 2,
    exp: "'注意' gồm chữ 注 (CHÚ) và 意 (Ý)."
  },
  {
    id: 8,
    cat: "Chữ Hán",
    q: "Chữ Hán '降' trong câu '雪が降る' (tuyết rơi) có âm Hán Việt là gì?",
    options: ["A. TUYẾT", "B. DĨ", "C. GIÁNG", "D. CẤP"],
    a: 2,
    exp: "'降' có âm Hán Việt là GIÁNG (hoặc HÀNG), nghĩa là rơi xuống, rụng xuống."
  },
  {
    id: 9,
    cat: "Chữ Hán",
    q: "Từ '図書館' (thư viện) có chữ '図' mang âm Hán Việt là:",
    options: ["A. TRÌ", "B. THỦ", "C. TẨU", "D. ĐỒ"],
    a: 3,
    exp: "'図' có âm Hán Việt là ĐỒ (trong bản đồ, đồ thư, tranh vẽ)."
  },
  {
    id: 10,
    cat: "Chữ Hán",
    q: "Chữ Hán '薬' trong từ '薬を飲む' (uống thuốc) có âm Hán Việt là:",
    options: ["A. BỐI", "B. DƯỢC", "C. TRỌNG", "D. NIÊN"],
    a: 1,
    exp: "'薬' có âm Hán Việt là DƯỢC (thuốc men)."
  },

  // --- PHẦN 2: TỪ VỰNG & NGỮ NGHĨA (Câu 11 - 18) ---
  {
    id: 11,
    cat: "Từ vựng",
    q: "Cụm từ nào biểu đạt hoạt động 'chơi thể thao'?",
    options: [
      "A. 買い物に行く",
      "B. スポーツをする",
      "C. アニメを見る",
      "D. 本を読む"
    ],
    a: 1,
    exp: "スポーツをする (supōtsu o suru) = Chơi thể thao."
  },
  {
    id: 12,
    cat: "Từ vựng",
    q: "Từ nào dùng để chỉ 'lễ hội văn hóa' được tổ chức hàng năm tại các trường học Nhật Bản?",
    options: ["A. イベント", "B. 文化祭", "C. 出し物", "D. 準備"],
    a: 1,
    exp: "文化祭 (Bunkasai) = Lễ hội văn hóa trường học."
  },
  {
    id: 13,
    cat: "Từ vựng",
    q: "Từ '交差点' (kōsaten) trong bài chỉ đường mang nghĩa là gì?",
    options: ["A. Con đường thẳng", "B. Ngã tư / Giao lộ", "C. Cây cầu đi bộ", "D. Ga tàu điện"],
    a: 1,
    exp: "交差点 (kōsaten) = Ngã tư, giao lộ giao nhau của các tuyến đường."
  },
  {
    id: 14,
    cat: "Từ vựng",
    q: "Món ăn truyền thống của Việt Nam được nhắc tới trong Bài 6 là gì?",
    options: [
      "A. フォー và ブンチャー",
      "B. スシ và サシミ",
      "C. ラーメン và うどん",
      "D. カレー và ピザ"
    ],
    a: 0,
    exp: "Trong SGK Bài 6: フォー (Phở) và ブンチャー (Bún chả) là 2 món ăn đặc sắc của Việt Nam."
  },
  {
    id: 15,
    cat: "Từ vựng",
    q: "Từ '天気予報' (tenki yohō) có nghĩa là gì?",
    options: ["A. Dự báo thời tiết", "B. Hiện tượng biến đổi khí hậu", "C. Bốn mùa trong năm", "D. Diễn tập thiên tai"],
    a: 0,
    exp: "天気予報 (tenki yohō) = Bản tin dự báo thời tiết."
  },
  {
    id: 16,
    cat: "Từ vựng",
    q: "Học sinh được phân công làm 'nhiệm vụ trực nhật trong ngày' tại trường Nhật gọi là gì?",
    options: ["A. 校則", "B. 日直", "C. 制服", "D. 係員"],
    a: 1,
    exp: "日直 (Nitchoku) = Ban cán sự trực nhật luân phiên trong ngày."
  },
  {
    id: 17,
    cat: "Từ vựng",
    q: "Từ '寝坊する' (nebō suru) trong tình huống xin lỗi mang nghĩa là gì?",
    options: ["A. Bị đi muộn", "B. Ngủ quên / Dậy muộn", "C. Quên mang đồ", "D. Làm rơi đồ"],
    a: 1,
    exp: "寝坊する (nebō suru) = Ngủ quên, ngủ nướng quá giờ."
  },
  {
    id: 18,
    cat: "Từ vựng",
    q: "Địa danh nào ở Việt Nam được khen ngợi trong Bài 13 là có 'tự nhiên rất trù phú' (自然が豊か)?",
    options: ["A. ハノイ", "B. ニンビン", "C. ニャチャン", "D. ダナン"],
    a: 1,
    exp: "Trong SGK Bài 13: 'ニンビンは自然が豊かです' (Ninh Bình có thiên nhiên rất phong phú)."
  },

  // --- PHẦN 3: NGỮ PHÁP & BIẾN ĐỔI THỂ ĐỘNG TỪ (Câu 19 - 32) ---
  {
    id: 19,
    cat: "Ngữ pháp",
    q: "Chọn dạng đúng để hoàn thiện câu liệt kê hành động tiêu biểu: 休みの日はアニメを (____)、買い物をしたりします。",
    options: ["A. 見て", "B. 見たり", "C. 見た", "D. 見る"],
    a: 1,
    exp: "Cấu trúc Vたり、Vたりします: Động từ chia thể た + り -> 見る -> 見た -> 見たり."
  },
  {
    id: 20,
    cat: "Ngữ pháp",
    q: "Điền trợ từ thích hợp vào câu diễn đạt sở thích: 家で本を読む (____) が好きです。",
    options: ["A. の", "B. を", "C. に", "D. と"],
    a: 0,
    exp: "Danh từ hóa động từ nói sở thích: V(thể từ điển) + の + が好きです."
  },
  {
    id: 21,
    cat: "Ngữ pháp",
    q: "Khi bày tỏ quan điểm cá nhân: 'Tôi nghĩ tiết mục ca hát thì phù hợp', ta nói:",
    options: [
      "A. 歌がいいと思います。",
      "B. 歌にしましょう。",
      "C. 歌が好きですから。",
      "D. 歌を歌ってください。"
    ],
    a: 0,
    exp: "Mẫu câu đưa ý kiến: [N] が いいと思います."
  },
  {
    id: 22,
    cat: "Ngữ pháp",
    q: "Sau khi thảo luận, cả nhóm đồng thuận đưa ra quyết định: 'Chúng ta hãy chọn diễn kịch nhé!', ta nói:",
    options: [
      "A. 劇がいいと思います。",
      "B. 劇にしましょう。",
      "C. 劇をしますか。",
      "D. 劇を見たいです。"
    ],
    a: 1,
    exp: "Chốt quyết định chung sau bàn bạc: [N] にしましょう."
  },
  {
    id: 23,
    cat: "Ngữ pháp",
    q: "Trả lời cho câu hỏi: 'ポスターはもう貼りましたか。' khi bạn chưa hoàn thành việc:",
    options: [
      "A. はい、まだ貼っていません。",
      "B. いいえ、もう貼りました。",
      "C. いいえ、まだ貼っていません。",
      "D. いいえ、貼りませんでした。"
    ],
    a: 2,
    exp: "Chưa hoàn tất hành động tính đến hiện tại: いいえ、まだ + Vていません."
  },
  {
    id: 24,
    cat: "Ngữ pháp",
    q: "Điền trợ từ đúng: たん生日に父が新しい時計 (____) くれました。",
    options: ["A. に", "B. を", "C. で", "D. は"],
    a: 1,
    exp: "Cấu trúc ai tặng mình món quà: [Người] が (私に) [Vật] を くれました."
  },
  {
    id: 25,
    cat: "Ngữ pháp",
    q: "Thay thế danh từ '鞄' (kaban) bằng 'の' để nói: 'Tôi muốn chiếc túi màu xanh':",
    options: [
      "A. 青い鞄がほしいです。",
      "B. 青いのがほしいです。",
      "C. 青い鞄のがほしいです。",
      "D. 青いの鞄がほしいです。"
    ],
    a: 1,
    exp: "Đại từ 'の' thay thế danh từ đã biết tránh lặp từ: 青いのがほしいです."
  },
  {
    id: 26,
    cat: "Ngữ pháp",
    q: "Điền trợ từ chỉ hướng rẽ: 1つ目の交差点を左 (____) 曲がってください。",
    options: ["A. を", "B. に", "C. で", "D. から"],
    a: 1,
    exp: "Chỉ hướng rẽ: [Hướng] に曲がる -> 左に曲がってください."
  },
  {
    id: 27,
    cat: "Ngữ pháp",
    q: "Câu nào dưới đây diễn tả trải nghiệm: 'Tôi đã từng ăn món Phở của Việt Nam'?",
    options: [
      "A. ベトナムのフォーを食べてみたいです。",
      "B. ベトナムのフォーを食べたことがあります。",
      "C. ベトナムのフォーを食べるでしょう。",
      "D. ベトナムのフォーを食べないでください。"
    ],
    a: 1,
    exp: "Kinh nghiệm từng trải trong quá khứ: V(thể た) + ことがあります -> 食べたことがあります."
  },
  {
    id: 28,
    cat: "Ngữ pháp",
    q: "Câu nhắc nhở tại bảo tàng: 'Xin đừng sờ tay vào hiện vật' được viết là:",
    options: [
      "A. 展示品に触ってください。",
      "B. 展示品に触らないでください。",
      "C. 展示品に触ってもいいです。",
      "D. 展示品に触るでしょう。"
    ],
    a: 1,
    exp: "Yêu cầu lịch sự không làm việc gì: V(thể ない) + でください -> 触らないでください."
  },
  {
    id: 29,
    cat: "Ngữ pháp",
    q: "Dự đoán thời tiết có cơ sở khoa học: 'Ngày mai ở Tokyo có lẽ trời sẽ nắng ráo từ sáng':",
    options: [
      "A. 明日の東京は朝から晴れるでしょう。",
      "B. 明日の東京は朝から晴れはじめます。",
      "C. 明日の東京は朝から晴れなければなりません。",
      "D. 明日の東京は朝から晴れてはいけません。"
    ],
    a: 0,
    exp: "Dự đoán khách quan theo bản tin dự báo: V/A/N + でしょう -> 晴れるでしょう."
  },
  {
    id: 30,
    cat: "Ngữ pháp",
    q: "Biến đổi tính từ đuôi い '暖かい' trong câu: 'Sang tháng 2 trời ấm dần lên':",
    options: [
      "A. 暖かくになります",
      "B. 暖かくなります",
      "C. 暖かいになります",
      "D. 暖かくします"
    ],
    a: 1,
    exp: "Tính từ đuôi い bỏ い + くなります -> 暖かくなります."
  },
  {
    id: 31,
    cat: "Ngữ pháp",
    q: "Cụm từ nào biểu đạt quy định cấm: 'Không được chạy nhảy ở hành lang'?",
    options: [
      "A. 廊下を走らなければなりません。",
      "B. 廊下を走ってはいけません。",
      "C. 廊下を走りたいです。",
      "D. 廊下を走ったことがあります。"
    ],
    a: 1,
    exp: "Cấm đoán nghiêm khắc: V(thể て) + はいけません -> 走ってはいけません."
  },
  {
    id: 32,
    cat: "Ngữ pháp",
    q: "Chuyển động từ '行きます' (ikimasu - nhóm 1) sang thể khả năng (có thể đi):",
    options: ["A. 行かれる", "B. 行ける", "C. 行きられる", "D. 行きできる"],
    a: 1,
    exp: "Động từ nhóm 1 chuyển cột 'い' thành cột 'え' + る -> 行きます -> 行ける."
  },

  // --- PHẦN 4: ĐỌC HIỂU, ỨNG XỬ & VĂN HÓA (Câu 33 - 40) ---
  {
    id: 33,
    cat: "Giao tiếp",
    q: "Khi đi học muộn do ngủ quên, em cần nói câu nào đầu tiên khi vào lớp gặp thầy cô?",
    options: [
      "A. おはようございます。元気ですか。",
      "B. 先生、遅くなって、すみません！",
      "C. 先生、早く寝たほうがいいですよ。",
      "D. 宿題を出さなければなりませんか。"
    ],
    a: 1,
    exp: "Lời xin lỗi chân thành khi đến muộn: [Vて] すみません -> 遅くなって、すみません!"
  },
  {
    id: 34,
    cat: "Giao tiếp",
    q: "Thấy bạn mình sắc mặt tái nhợt và mệt mỏi, câu nói thể hiện sự quan tâm đúng ngữ pháp là:",
    options: [
      "A. ぐあいが悪そうですね。大丈夫ですか。",
      "B. ぐあいが悪いそうです。大丈夫ですか。",
      "C. ぐあいが悪いですから、走ってください。",
      "D. ぐあいが悪くありません。"
    ],
    a: 0,
    exp: "Quan sát diện mạo bên ngoài: Tính từ đuôi い bỏ い + そうです -> 悪そうですね."
  },
  {
    id: 35,
    cat: "Giao tiếp",
    q: "Khuyên bạn đang bị sốt không nên uống nước đá lạnh:",
    options: [
      "A. 冷たい水を飲んだほうがいいですよ。",
      "B. 冷たい水を飲まないほうがいいですよ。",
      "C. 冷たい水を飲まなければなりません。",
      "D. 冷たい水を飲みたいです。"
    ],
    a: 1,
    exp: "Khuyên không nên làm điều gì bất lợi: V(thể ない) + ほうがいいですよ."
  },
  {
    id: 36,
    cat: "Giao tiếp",
    q: "Bạn hỏi: 'ベトナムで美しい自然を見るなら、どこがいいですか。' - Em gợi ý Ninh Bình:",
    options: [
      "A. ニンビンへ行ってはいけません。",
      "B. ニンビンがおすすめです。",
      "C. ニンビンは海がありませんから。",
      "D. ニンビンを見たことがありません。"
    ],
    a: 1,
    exp: "Cấu trúc đưa ra gợi ý tiêu biểu: [Địa danh] が おすすめです."
  },
  {
    id: 37,
    cat: "Văn hóa",
    q: "Hoạt động 'Asadoku' (朝読書) tại các trường học Nhật Bản là gì?",
    options: [
      "A. 10 phút tập thể dục nhịp điệu buổi sáng",
      "B. 10 phút đọc sách tĩnh lặng đầu ngày học",
      "C. Giờ kiểm tra miệng 15 phút hằng ngày",
      "D. Giờ ăn sáng tập thể tại căng-tin"
    ],
    a: 1,
    exp: "Asadoku (朝の読書) là hoạt động 10 phút đọc sách tự chọn vào mỗi buổi sáng tại các trường học Nhật."
  },
  {
    id: 38,
    cat: "Văn hóa",
    q: "Văn hóa tặng quà tri ân 'Ochūgen' (お中元) của người Nhật thường diễn ra vào thời gian nào?",
    options: [
      "A. Đầu năm mới (tháng 1)",
      "B. Giữa năm vào mùa hè (khoảng tháng 7 - 8)",
      "C. Cuối năm vào mùa đông (tháng 12)",
      "D. Dịp Tết Trung thu"
    ],
    a: 1,
    exp: "Ochūgen tặng vào giữa năm (tháng 7-8), còn Oseibo tặng vào cuối năm (tháng 12)."
  },
  {
    id: 39,
    cat: "Văn hóa",
    q: "Lâu đài cổ nào của Nhật Bản được mệnh danh là 'Lâu đài Hạc trắng' nhờ tường vôi trắng tinh khôi?",
    options: [
      "A. Thành Himeji (姫路城)",
      "B. Thành Osaka (大阪城)",
      "C. Thành Matsumoto (松本城)",
      "D. Thành Edo (江戸城)"
    ],
    a: 0,
    exp: "Thành Himeji (姫路城) được UNESCO công nhận là Di sản Thế giới, nổi tiếng với biệt danh Lâu đài Hạc trắng (Shirasagi-jō)."
  },
  {
    id: 40,
    cat: "Văn hóa",
    q: "Hòn đảo lớn phía Bắc Nhật Bản nổi tiếng với hoa oải hương mùa hè và lễ hội tuyết Sapporo mùa đông là:",
    options: ["A. Honshu", "B. Kyushu", "C. Shikoku", "D. Hokkaido"],
    a: 3,
    exp: "Hokkaido (北海道) là hòn đảo lớn nhất ở phía Bắc Nhật Bản."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { examQuestions };
}
