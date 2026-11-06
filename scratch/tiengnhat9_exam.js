// tiengnhat9_exam.js
// 25 Master Exam Questions for Đấu Trường Trạng Nguyên Tiếng Nhật 9 (60:00 Timer)

const examQuestions = [
  {
    q: "Câu 1: Chọn trợ từ thích hợp: '私は小学生のとき______ 英語を勉強しています。'",
    options: ["A. まで", "B. から", "C. に", "D. で"],
    answer: 1,
    explain: "Cấu trúc 'N から Vています' diễn tả một hành động bắt đầu từ một mốc thời gian trong quá khứ và hiện vẫn đang tiếp diễn."
  },
  {
    q: "Câu 2: Chọn dạng đúng của động từ: '外国の人と______ のが楽しいです。'",
    options: ["A. 話す", "B. 話します", "C. 話して", "D. 話した"],
    answer: 0,
    explain: "Cấu trúc danh từ hóa động từ 'V thể từ điển + のが + Tính từ' ('話すのが楽しい')."
  },
  {
    q: "Câu 3: Muốn ngỏ ý nhờ bạn cùng nhóm đổi lịch trình thuyết trình, câu nói lịch sự là:",
    options: [
      "A. 予定を変えてほしいです。",
      "B. 予定を変えたいです。",
      "C. 予定を変えると思います。",
      "D. 予定を変えてあげます。"
    ],
    answer: 0,
    explain: "'Vてほしいです' dùng để bày tỏ mong muốn người khác làm việc gì đó giúp mình/cho nhóm."
  },
  {
    q: "Câu 4: Chọn câu đúng để miêu tả bức ảnh: 'Người đang ngồi ở bên cạnh thầy giáo là bạn Hùng':",
    options: [
      "A. 先生のとなりに座っている人はフン君です。",
      "B. 先生のとなりに座ります人はフン君です。",
      "C. 先生のとなりに座ったの人はフン君です。",
      "D. 先生のとなりに座る人はフン君でした。"
    ],
    answer: 0,
    explain: "Định ngữ miêu tả đặc điểm/trạng thái đang diễn ra: Vている + Danh từ ('座っている人')."
  },
  {
    q: "Câu 5: Khi thấy bạn cùng lớp có vẻ mặt buồn rầu, câu hỏi thăm ân cần nhất là:",
    options: [
      "A. どうしたんですか。",
      "B. どうですか。",
      "C. だれですか。",
      "D. どこですか。"
    ],
    answer: 0,
    explain: "'どうしたんですか (Có chuyện gì xảy ra với bạn thế?)' là câu hỏi thăm chuẩn mực khi thấy người khác có dấu hiệu bất thường."
  },
  {
    q: "Câu 6: Điền đuôi câu giải thích lí do: 'バスが遅れた______、遅刻してしまいました。'",
    options: ["A. んで", "B. んです", "C. んですから", "D. なんです"],
    answer: 1,
    explain: "Động từ thể thông thường quá khứ '遅れた' đi trực tiếp với 'んです' để giải thích tình huống cho người nghe."
  },
  {
    q: "Câu 7: 'どこかで財布を落としたかもしれません' có nghĩa là gì?",
    options: [
      "A. Chắc chắn tôi đã đánh rơi ví tiền ở đâu đó",
      "B. Có thể tôi đã đánh rơi ví tiền ở đâu đó",
      "C. Tôi không bao giờ đánh rơi ví tiền",
      "D. Đừng đánh rơi ví tiền ở đâu nhé"
    ],
    answer: 1,
    explain: "'Vたかもしれません' là mẫu câu phỏng đoán chưa chắc chắn: 'có thể là đã...'."
  },
  {
    q: "Câu 8: Chọn liên từ thích hợp: '近くにおいしい店がある______、いっしょに行きませんか。'",
    options: ["A. ので", "B. のに", "C. でも", "D. からは"],
    answer: 0,
    explain: "'〜ので' là liên từ nêu nguyên nhân, lí do khách quan, mang sắc thái lịch sự khi mời rủ."
  },
  {
    q: "Câu 9: Điền dạng đúng của động từ: '出かける______、電気を消してください。'",
    options: ["A. 前に", "B. 後で", "C. から", "D. ときで"],
    answer: 0,
    explain: "Động từ thể từ điển + 前に diễn tả trước khi làm việc gì: '出かける前に' (trước khi đi ra ngoài)."
  },
  {
    q: "Câu 10: Điền dạng đúng của động từ: 'ご飯を______ 後で、宿題をします。'",
    options: ["A. 食べる", "B. 食べた", "C. 食べて", "D. 食べない"],
    answer: 1,
    explain: "Động từ trước '後で' BẮT BUỘC phải chia ở thể quá khứ (Vた + 後で): '食べた後で'."
  },
  {
    q: "Câu 11: Cụm '「おせち」という特別な料理' có nghĩa là:",
    options: [
      "A. Món ăn đặc biệt có tên gọi là Osechi",
      "B. Món ăn nấu từ Osechi",
      "C. Người nấu món Osechi",
      "D. Quán ăn bán món Osechi"
    ],
    answer: 0,
    explain: "Mẫu 'N1 という N2' mang ý nghĩa N2 có tên gọi/được gọi là N1."
  },
  {
    q: "Câu 12: Phân biệt cấu trúc: 'ニュースによると、日本で地震があった______。'",
    options: ["A. そうです", "B. 降りそうです", "C. みたいでした", "D. ようです"],
    answer: 0,
    explain: "Cấu trúc trích dẫn nguồn tin: '〜によると ... Thể thường + そうです' (nghe nói rằng)."
  },
  {
    q: "Câu 13: Điền mẫu câu chỉ mục đích: '被災地の人を助ける______、募金を集めました。'",
    options: ["A. ために", "B. ように", "C. 前に", "D. から"],
    answer: 0,
    explain: "'Vるために' diễn tả mục đích có chủ đích của hành động: 'Để giúp đỡ người dân vùng thiên tai'."
  },
  {
    q: "Câu 14: Chuyển câu chủ động sau sang bị động: '先生が私をほめました。' -> '私は先生______。'",
    options: [
      "A. にほめられました",
      "B. をほめられました",
      "C. でほめました",
      "D. にほめさせました"
    ],
    answer: 0,
    explain: "Trong câu bị động, tác nhân đi với trợ từ 'に' và động từ 'ほめる' đổi thành 'ほめられる': '先生にほめられました'."
  },
  {
    q: "Câu 15: Câu nào diễn đạt sự phỏng đoán dựa trên dấu hiệu trực tiếp nhìn thấy: 'Trời có vẻ sắp mưa'?",
    options: [
      "A. 雨が降りそうです。",
      "B. 雨が降るそうです。",
      "C. 雨が降ったそうです。",
      "D. 雨が降るかもしれませんでした。"
    ],
    answer: 0,
    explain: "Động từ bỏ ます + そうです: '降りそうです' biểu thị phỏng đoán qua dấu hiệu mắt thấy tai nghe."
  },
  {
    q: "Câu 16: Dạng phủ định của '間に合いそうです (có vẻ kịp giờ)' là:",
    options: [
      "A. 間に合わなさそうです",
      "B. 間に合わないそうです",
      "C. 間に合いそうではないです",
      "D. 間に合いませんそうです"
    ],
    answer: 0,
    explain: "Phủ định của V bỏ ます + そうです là: Vない bỏ い + さそうです ('間に合わなさそうです')."
  },
  {
    q: "Câu 17: Chọn câu đúng để diễn đạt sự băn khoăn: 'Tôi lo không biết liệu mình có thể đỗ vào trường cấp 3 hay không':",
    options: [
      "A. 高校に入れるかどうか心配です。",
      "B. 高校に入るかどうか心配です。",
      "C. 高校に入れるので心配です。",
      "D. 高校に入っても心配です。"
    ],
    answer: 0,
    explain: "Thể khả năng '入れる' + かどうか (mệnh đề nghi vấn gián tiếp) + 心配です."
  },
  {
    q: "Câu 18: 'どんなに試験がむずかしくても、最後までがんばります' có nghĩa là:",
    options: [
      "A. Dù kì thi có khó đến mức nào thì tôi vẫn sẽ nỗ lực đến cùng",
      "B. Vì kì thi khó nên tôi không muốn cố gắng nữa",
      "C. Nếu kì thi khó thì tôi sẽ từ bỏ",
      "D. Kì thi này không khó chút nào"
    ],
    answer: 0,
    explain: "Cấu trúc nhượng bộ: '〜ても' mang nghĩa 'cho dù... vẫn...'."
  },
  {
    q: "Câu 19: Chọn cấu trúc diễn đạt năng lực mới hình thành: 'Tôi đã có thể nói chuyện bằng tiếng Nhật':",
    options: [
      "A. 日本語で話せるようになりました。",
      "B. 日本語で話せなくなりました。",
      "C. 日本語で話そうと思っています。",
      "D. 日本語で話すようになりました。"
    ],
    answer: 0,
    explain: "Động từ thể khả năng '話せる' + ようになりました diễn tả năng lực mới đạt được."
  },
  {
    q: "Câu 20: Chuyển động từ '習う (học)' sang thể ý chí để diễn đạt dự định 'Tôi định học lập trình':",
    options: [
      "A. プログラミングを習おうと思っています。",
      "B. プログラミングを習うと思っています。",
      "C. プログラミングを習いたいと思っています。",
      "D. プログラミングを習ようと思っています。"
    ],
    answer: 0,
    explain: "'習う' (nhóm 1) đổi sang thể ý chí là '習おう': 習おうと思っています."
  },
  {
    q: "Câu 21: Chữ Hán '始' (trong 始める) và chữ '終' (trong 終わる) là một cặp từ trái nghĩa, có âm Hán Việt là:",
    options: [
      "A. THỦY — CHUNG",
      "B. LÂM — SÂM",
      "C. VẤN — ĐÁP",
      "D. DÃ — TRÌ"
    ],
    answer: 0,
    explain: "'始' là THỦY (bắt đầu), '終' là CHUNG (kết thúc)."
  },
  {
    q: "Câu 22: Chữ Hán '質' và '問' ghép lại thành từ '質問', đọc là gì?",
    options: ["A. しつもん", "B. もんだい", "C. しけん", "D. あんしん"],
    answer: 0,
    explain: "'質問' đọc là しつもん (câu hỏi, chất vấn)."
  },
  {
    q: "Câu 23: Món 'お赤飯 (xôi đậu đỏ)' của người Nhật mang ý nghĩa tượng trưng cho điều gì?",
    options: [
      "A. Sự may mắn và lời chúc mừng trong những dịp vui trọng đại",
      "B. Nỗi buồn chia tay",
      "C. Cầu xin mưa thuận gió hòa khi hạn hán",
      "D. Món ăn dành riêng cho bệnh nhân cảm sốt"
    ],
    answer: 0,
    explain: "Màu đỏ của xôi đậu đỏ Osekihan tượng trưng cho điềm lành và phúc khí may mắn."
  },
  {
    q: "Câu 24: Khi muốn diễn đạt 'không còn thức khuya nữa (chấm dứt thói quen cũ)', câu nào đúng?",
    options: [
      "A. 夜更かしをしなくなりました。",
      "B. 夜更かしをするようになりました。",
      "C. 夜更かしをしないようになります。",
      "D. 夜更かしをしたいです。"
    ],
    answer: 0,
    explain: "'Vなくなる (しなくなる)' diễn tả sự chấm dứt của một thói quen cũ."
  },
  {
    q: "Câu 25: Lời chúc mừng tốt nghiệp THCS trang trọng và ấm áp nhất gửi đến học sinh lớp 9 là:",
    options: [
      "A. ご卒業おめでとうございます！",
      "B. あけましておめでとうございます！",
      "C. お誕生日おめでとうございます！",
      "D. いただきます！"
    ],
    answer: 0,
    explain: "'ご卒業おめでとうございます (Chúc mừng các em đã tốt nghiệp)' là lời chúc mừng tốt nghiệp chuẩn mực."
  }
];

module.exports = { examQuestions };
