// tiengnhat9_data_p2.js
// Data for Tiếng Nhật 9 - Part 2: Lessons 7 to 13 + Reviews 3 & 4 + Fast Grammar Table + Common Pitfalls + Kanji Matrix

const lessonsPart2 = [
  // ==========================================
  // BÀI 7: 自然災害 — THIÊN TAI
  // ==========================================
  {
    id: "bai-7",
    lessonNum: "BÀI 7",
    title: "自然災害",
    romaji: "Shizen saigai",
    meaning: "Thiên tai và phòng chống",
    badge: "Chủ đề 7",
    goal: "Thuật lại thông tin nghe/đọc được bằng Câu thường + そうです; trích dẫn nguồn tin bằng 〜によると; đề xuất mục đích hỗ trợ cứu trợ thiên tai bằng Vるために.",
    vocab: [
      { jp: "自然災害", kana: "しぜんさいがい", romaji: "shizen saigai", mean: "thiên tai tự nhiên", type: "Danh từ" },
      { jp: "地震", kana: "じしん", romaji: "jishin", mean: "động đất", type: "Danh từ" },
      { jp: "台風", kana: "たいふう", romaji: "taifuu", mean: "bão nhiệt đới", type: "Danh từ" },
      { jp: "大雨", kana: "おおあめ", romaji: "ooame", mean: "mưa lớn, mưa to", type: "Danh từ" },
      { jp: "避難する", kana: "ひなんする", romaji: "hinan suru", mean: "sơ tán lánh nạn", type: "Động từ nhóm 3" },
      { jp: "被害", kana: "ひがい", romaji: "higai", mean: "thiệt hại", type: "Danh từ" },
      { jp: "集める", kana: "あつめる", romaji: "atsumeru", mean: "quyên góp, gom lại", type: "Động từ nhóm 2" },
      { jp: "ボランティア", kana: "ぼらんてぃあ", romaji: "borantia", mean: "hoạt động tình nguyện", type: "Danh từ" },
      { jp: "ニュース", kana: "にゅーす", romaji: "nyuusu", mean: "bản tin thời sự, tin tức", type: "Danh từ" },
      { jp: "寄付する", kana: "きふする", romaji: "kifu suru", mean: "quyên góp, ủng hộ tiền/vật phẩm", type: "Động từ nhóm 3" }
    ],
    grammar: [
      {
        pattern: "Câu thể thông thường + そうです",
        meaning: "Nghe nói rằng... (Thuật lại thông tin nghe được từ người khác hoặc báo đài)",
        note: "Đứng sau câu ở thể thông thường (Vる, Vた, Vない; Tính từ và Danh từ chia thể ngắn).",
        examples: [
          { jp: "日本で大きな地震があったそうです。", vi: "Nghe nói ở Nhật Bản đã xảy ra một trận động đất lớn." },
          { jp: "明日は大雨になるそうです。", vi: "Nghe nói ngày mai trời sẽ mưa rất to." }
        ]
      },
      {
        pattern: "〜によると",
        meaning: "Theo như nguồn tin...",
        note: "Đặt ở đầu câu để nêu rõ nguồn gốc thông tin (báo chí, thời sự, dự báo thời tiết). Vế sau thường kết hợp với 〜そうです.",
        examples: [
          { jp: "ニュースによると、たくさんの人が避難したそうです。", vi: "Theo bản tin thời sự, nghe nói có rất nhiều người đã đi sơ tán." },
          { jp: "天気予報によると、台風が近づいているそうです。", vi: "Theo dự báo thời tiết, nghe nói cơn bão đang tiến lại gần." }
        ]
      },
      {
        pattern: "Vる + ために",
        meaning: "Để... / Nhằm mục đích...",
        note: "Động từ đứng trước ために luôn ở thể từ điển, biểu thị hành động có chủ đích của con người.",
        examples: [
          { jp: "水や食べ物を送るために、お金を集めませんか。", vi: "Chúng mình quyên góp tiền để gửi nước uống và lương thực nhé?" },
          { jp: "被災地の人を助けるために、ボランティア活動に参加します。", vi: "Tôi tham gia hoạt động tình nguyện để giúp đỡ người dân vùng bị nạn." }
        ]
      }
    ],
    kanji: [
      { char: "心", onyomi: "シン (shin)", kunyomi: "こころ (kokoro)", strokes: 4, mean: "Trái tim, tấm lòng, tâm trí (TÂM)", examples: [{ word: "心配", reading: "しんぱい", mean: "lo lắng" }, { word: "安心", reading: "あんしん", mean: "yên tâm" }] },
      { char: "送", onyomi: "ソウ (sou)", kunyomi: "おく・る (oku-ru)", strokes: 9, mean: "Gửi đi, tiễn biệt (TỐNG)", examples: [{ word: "送る", reading: "おくる", mean: "gửi quà/thư" }, { word: "放送", reading: "ほうそう", mean: "phát sóng" }] },
      { char: "死", onyomi: "シ (shi)", kunyomi: "し・ぬ (shi-nu)", strokes: 6, mean: "Chết, qua đời (TỬ)", examples: [{ word: "死ぬ", reading: "しぬ", mean: "chết" }, { word: "死者", reading: "ししゃ", mean: "người thiệt mạng" }] },
      { char: "洋", onyomi: "ヨウ (you)", kunyomi: "-", strokes: 9, mean: "Đại dương, phương Tây (DƯƠNG)", examples: [{ word: "太平洋", reading: "たいへいよう", mean: "Thái Bình Dương" }, { word: "西洋", reading: "せいよう", mean: "phương Tây" }] },
      { char: "貧", onyomi: "ヒン (hin)", kunyomi: "まず・しい", strokes: 11, mean: "Nghèo khó, thiếu thốn (BẦN)", examples: [{ word: "貧しい", reading: "まずしい", mean: "nghèo nàn" }, { word: "貧富", reading: "ひんぷ", mean: "giàu nghèo" }] },
      { char: "石", onyomi: "セキ (seki)", kunyomi: "いし (ishi)", strokes: 5, mean: "Hòn đá (THẠCH)", examples: [{ word: "小石", reading: "こいし", mean: "viên sỏi nhỏ" }, { word: "化石", reading: "かせき", mean: "hóa thạch" }] }
    ],
    dialogue: {
      title: "Hội thoại: Thuật lại tin tức động đất và kêu gọi quyên góp",
      situation: "Lan đọc báo thấy tin động đất ở Nhật Bản và rủ bạn cùng quyên góp ủng hộ.",
      lines: [
        { speaker: "Lan", jp: "ケンさん、ニュースを見ましたか。日本の東北地方で大きな地震があったそうですよ。", vi: "Ken ơi, cậu xem thời sự chưa? Nghe nói ở vùng Đông Bắc Nhật Bản vừa có một trận động đất lớn đấy." },
        { speaker: "Ken", jp: "えっ、本当ですか。被害は出ていますか。", vi: "Hả, thật thế sao? Có thiệt hại gì nhiều không?" },
        { speaker: "Lan", jp: "ニュースによると、家が倒れて避難所で生活している人が大勢いるそうです。", vi: "Theo bản tin, nghe nói có nhà bị sập và nhiều người đang phải sinh hoạt ở khu sơ tán." },
        { speaker: "Ken", jp: "たいへんですね。被災地へ支援物資を送るために、学校で募金を集めませんか。", vi: "Khổ quá nhỉ. Hay là chúng mình phát động quyên góp tiền ở trường để gửi hàng cứu trợ đến vùng thiên tai nhé?" }
      ]
    },
    culture: {
      title: "Góc văn hóa: Động đất và cách ứng phó khẩn cấp tại Nhật Bản",
      content: "Do nằm trên vành đai lửa Thái Bình Dương, Nhật Bản thường xuyên phải đối mặt với các trận động đất. Người dân và học sinh Nhật Bản được rèn luyện kĩ năng ứng phó từ nhỏ: chui xuống gầm bàn bảo vệ đầu khi rung lắc, tắt van ga, chuẩn bị sẵn 'Balo sơ tán khẩn cấp (非常持ち出し袋 - Hijou mochidashi bukuro)' chứa lương khô, nước uống, còi cứu hộ, đèn pin và bộ đàm.",
      comparison: "Ở Việt Nam, người dân miền Trung và ven biển cũng có nhiều kinh nghiệm kiên cường phòng chống và ứng phó với bão lũ hàng năm."
    },
    quiz: [
      {
        q: "Điền mẫu câu truyền tin thích hợp: 'ニュースによると、大雨が降る______。'",
        options: ["A. そうです", "B. ようです", "C. らしいです", "D. だからです"],
        answer: 0,
        explain: "Cấu trúc 'Nによると ... そうです' là mẫu câu chuẩn mực để thuật lại nguồn tin tức nghe/đọc được."
      },
      {
        q: "Chọn dạng đúng của động từ để chỉ mục đích: 'お金を集める______、ポスターを作りました。'",
        options: ["A. ために", "B. ように", "C. 前に", "D. から"],
        answer: 0,
        explain: "Cấu trúc 'Vるために' diễn tả mục đích hành động có chủ đích: 'Để quyên góp tiền'."
      },
      {
        q: "Chữ Hán '送' trong từ '送る (gửi)' có âm Hán Việt là gì?",
        options: ["A. TỐNG", "B. TỬ", "C. DƯƠNG", "D. THẠCH"],
        answer: 0,
        explain: "'送' có âm Hán Việt là TỐNG, nghĩa là gửi đi, tiễn đưa."
      },
      {
        q: "Khi xảy ra động đất ở Nhật Bản, hành động đầu tiên cần làm là:",
        options: [
          "A. Chạy ngay ra ban công",
          "B. Chui xuống gầm bàn chắc chắn để bảo vệ đầu",
          "C. Đi thang máy xuống đất",
          "D. Đứng cạnh cửa kính lớn"
        ],
        answer: 1,
        explain: "Quy tắc an toàn cơ bản nhất là bảo vệ vùng đầu dưới gầm bàn vững chắc."
      }
    ]
  },

  // ==========================================
  // BÀI 8: トラブル — RẮC RỐI
  // ==========================================
  {
    id: "bai-8",
    lessonNum: "BÀI 8",
    title: "トラブル",
    romaji: "Toraburu",
    meaning: "Rắc rối, việc phiền toái",
    badge: "Chủ đề 8",
    goal: "Sử dụng thể bị động (受身形 - Ukemikei) để nói về việc bản thân được khen ngợi hoặc bị phê bình, rắc rối gặp phải và xác định rõ tác nhân bằng trợ từ に.",
    vocab: [
      { jp: "トラブル", kana: "とらぶる", romaji: "toraburu", mean: "sự cố, phiền toái, rắc rối", type: "Danh từ" },
      { jp: "ほめる", kana: "ほめる", romaji: "homeru", mean: "khen ngợi", type: "Động từ nhóm 2" },
      { jp: "しかる", kana: "しかる", romaji: "shikaru", mean: "mắng, mắng mỏ, phê bình", type: "Động từ nhóm 1" },
      { jp: "さそう", kana: "さそう", romaji: "sasou", mean: "rủ rê, mời mọc", type: "Động từ nhóm 1" },
      { jp: "踏む", kana: "ふむ", romaji: "fumu", mean: "giẫm lên, đạp lên", type: "Động từ nhóm 1" },
      { jp: "盗む", kana: "ぬすむ", romaji: "nusumu", mean: "ăn trộm, lấy cắp", type: "Động từ nhóm 1" },
      { jp: "壊す", kana: "こわす", romaji: "kowasu", mean: "làm hỏng, phá vỡ", type: "Động từ nhóm 1" },
      { jp: "頼む", kana: "たのむ", romaji: "tanomu", mean: "nhờ vả, yêu cầu", type: "Động từ nhóm 1" },
      { jp: "迷惑", kana: "めいわく", romaji: "meiwaku", mean: "sự làm phiền, phiền toái", type: "Danh từ / Tính từ đuôi な" },
      { jp: "理由", kana: "りゆう", romaji: "riyuu", mean: "lí do, nguyên cớ", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Thể bị động (受身形 - Ukemikei): Quy tắc chia động từ",
        meaning: "Quy tắc biến đổi động từ sang thể bị động",
        note: "• Nhóm 1: Đổi đuôi hàng 'u' sang hàng 'a' + れる (しかる -> しかられる, ふむ -> ふまれる, さそう -> さそわれる).\n• Nhóm 2: Bỏ る + られる (ほめる -> ほめられる, たべる -> たべられる).\n• Nhóm 3: する -> される, くる -> こられる.",
        examples: [
          { jp: "しかる → しかられる", vi: "mắng → bị mắng" },
          { jp: "ほめる → ほめられる", vi: "khen → được khen" },
          { jp: "さそう → さそわれる", vi: "rủ → được rủ/mời" }
        ]
      },
      {
        pattern: "N1 (người nhận) は N2 (tác nhân) に V-bị động",
        meaning: "N1 được / bị N2 tác động làm việc gì",
        note: "Người thực hiện hành động luôn đi với trợ từ に.",
        examples: [
          { jp: "私は先生にほめられました。", vi: "Tôi đã được thầy giáo khen ngợi." },
          { jp: "宿題を忘れて、母にしかられました。", vi: "Vì quên làm bài tập nên tôi đã bị mẹ mắng." },
          { jp: "友だちに文化祭にさそわれました。", vi: "Tôi được bạn bè mời tham gia lễ hội văn hóa." }
        ]
      },
      {
        pattern: "Thể bị động phiền toái (Hại bị động)",
        meaning: "Diễn tả sự việc không may ảnh hưởng tiêu cực đến người nói",
        note: "Dùng để diễn tả nỗi phiền toái: N1 は N2 に N3 (vật của N1) を V-bị động.",
        examples: [
          { jp: "電車の中でだれかに足を踏まれました。", vi: "Trên tàu điện tôi đã bị ai đó giẫm vào chân." },
          { jp: "弟に大切な漫画を汚されました。", vi: "Tôi bị đứa em trai làm bẩn cuốn truyện tranh quý giá." }
        ]
      }
    ],
    kanji: [
      { char: "質", onyomi: "シツ (shitsu)", kunyomi: "-", strokes: 15, mean: "Chất lượng, câu hỏi (CHẤT)", examples: [{ word: "質問", reading: "しつもん", mean: "câu hỏi" }, { word: "品質", reading: "ひんしつ", mean: "chất lượng" }] },
      { char: "問", onyomi: "モン (mon)", kunyomi: "と・う", strokes: 11, mean: "Hỏi han, vấn đề (VẤN)", examples: [{ word: "問題", reading: "もんだい", mean: "vấn đề, bài tập" }, { word: "問い合わせ", reading: "といあわせ", mean: "hỏi đáp thông tin" }] },
      { char: "用", onyomi: "ヨウ (you)", kunyomi: "もち・いる", strokes: 5, mean: "Dùng, sự việc, việc bận (DỤNG)", examples: [{ word: "用事", reading: "ようじ", mean: "việc bận" }, { word: "利用", reading: "りよう", mean: "sử dụng" }] },
      { char: "止", onyomi: "シ (shi)", kunyomi: "と・まる / と・める", strokes: 4, mean: "Dừng lại, ngăn cản (CHỈ)", examples: [{ word: "止まる", reading: "とまる", mean: "dừng lại (tự V)" }, { word: "中止", reading: "ちゅうし", mean: "hủy bỏ, đình chỉ" }] },
      { char: "良", onyomi: "リョウ (ryou)", kunyomi: "よ・い (yo-i)", strokes: 7, mean: "Tốt lành, lương thiện (LƯƠNG)", examples: [{ word: "良い", reading: "よい", mean: "tốt" }, { word: "良好", reading: "りょうこう", mean: "tốt đẹp, khả quan" }] }
    ],
    dialogue: {
      title: "Hội thoại: Một ngày vừa vui vừa phiền toái",
      situation: "Mai kể cho bạn nghe về những việc xảy ra trong ngày của mình.",
      lines: [
        { speaker: "Lan", jp: "マイさん、今日はなんだかうれしそうな顔ですね。", vi: "Mai ơi, hôm nay trông cậu có vẻ vui tươi thế." },
        { speaker: "Mai", jp: "ええ、日本語のスピーチコンテストで優勝して、先生にほめられたんです！", vi: "Ừ, tớ vừa đoạt giải nhất cuộc thi hùng biện tiếng Nhật và được thầy giáo khen đấy!" },
        { speaker: "Lan", jp: "すごいですね！おめでとうございます。", vi: "Tuyệt vời quá! Chúc mừng cậu nhé." },
        { speaker: "Mai", jp: "でも、今朝バスの中で足を踏まれたりして、ちょっと災難もありましたよ。", vi: "Nhưng mà sáng nay trên xe buýt tớ cũng bị người ta giẫm vào chân, hơi bị xui xẻo tí." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Văn hóa khen ngợi (ほめる文化) của người Nhật",
      content: "Người Nhật rất coi trọng sự khích lệ và ghi nhận nỗ lực của người khác. Khi khen ngợi, người Nhật thường không chỉ khen chung chung 'Giỏi quá (すごい)' mà nêu rõ điểm tốt cụ thể (ví dụ: 'Cách bạn phát âm chữ R rất tự nhiên', 'Bản thảo của bạn trình bày rất rõ ràng'). Đáp lại lời khen, người Nhật thường tỏ ra khiêm tốn: 'まだまだです (Tôi vẫn còn phải học hỏi nhiều lắm)'.",
      comparison: "Văn hóa Việt Nam cũng đề cao sự khiêm tốn ('học nữa, học mãi') khi đón nhận những lời tán thưởng từ thầy cô và bạn bè."
    },
    quiz: [
      {
        q: "Chuyển động từ 'しかる (mắng)' sang thể bị động:",
        options: ["A. しかられる", "B. しからせる", "C. しかられる", "D. しかられます"],
        answer: 0,
        explain: "'しかる' là động từ nhóm 1, chuyển hàng u sang a + れる: しかられる (bị mắng)."
      },
      {
        q: "Điền trợ từ chỉ tác nhân: '私は先生______ ほめられました。'",
        options: ["A. を", "B. に", "C. で", "D. が"],
        answer: 1,
        explain: "Trong câu bị động, người thực hiện hành động luôn đi với trợ từ 'に'."
      },
      {
        q: "Chữ Hán ghép '質問' có nghĩa là gì?",
        options: ["A. Câu hỏi, chất vấn", "B. Vấn đề khó khăn", "C. Việc bận cá nhân", "D. Lời khen ngợi"],
        answer: 0,
        explain: "'質問 (しつもん)' nghĩa là câu hỏi."
      },
      {
        q: "Câu nào diễn tả việc 'Tôi bị người khác giẫm vào chân trên tàu điện'?",
        options: [
          "A. 電車で足を誰かに踏まれました。",
          "B. 電車で足を踏みました。",
          "C. 電車で足を踏んであげました。",
          "D. 電車で足を踏みたいです。"
        ],
        answer: 0,
        explain: "Cấu trúc bị động phiền toái: '足を誰かに踏まれました' (bị ai đó giẫm vào chân)."
      }
    ]
  },

  // ==========================================
  // BÀI 9: 待ち合わせ — HẸN GẶP
  // ==========================================
  {
    id: "bai-9",
    lessonNum: "BÀI 9",
    title: "待ち合わせ",
    romaji: "Machiawase",
    meaning: "Hẹn gặp và phỏng đoán",
    badge: "Chủ đề 9",
    goal: "Hẹn gặp địa điểm/giờ giấc; phỏng đoán điều sắp xảy ra dựa trên dấu hiệu quan sát trực tiếp (V bỏ ます + そうです) hoặc tình huống (みたいです); phân biệt với そうです truyền tin.",
    vocab: [
      { jp: "待ち合わせ", kana: "まちあわせ", romaji: "machiawase", mean: "sự hẹn gặp nhau", type: "Danh từ" },
      { jp: "満員電車", kana: "まんいんでんしゃ", romaji: "man'in densha", mean: "tàu điện chật cứng người", type: "Danh từ" },
      { jp: "ラッシュアワー", kana: "らっしゅあわー", romaji: "rasshu awaa", mean: "giờ cao điểm giao thông", type: "Danh từ" },
      { jp: "間に合う", kana: "まにあう", romaji: "maniau", mean: "kịp giờ", type: "Động từ nhóm 1" },
      { jp: "遅れる", kana: "おくれる", romaji: "okureru", mean: "bị trễ, muộn giờ", type: "Động từ nhóm 2" },
      { jp: "降る", kana: "ふる", romaji: "furu", mean: "rơi (mưa, tuyết)", type: "Động từ nhóm 1" },
      { jp: "アニメ", kana: "あにめ", romaji: "anime", mean: "hoạt hình Nhật Bản", type: "Danh từ" },
      { jp: "イベント", kana: "いべんと", romaji: "ibento", mean: "sự kiện, chương trình", type: "Danh từ" },
      { jp: "改札口", kana: "かいさつぐち", romaji: "kaisatsuguchi", mean: "cửa soát vé nhà ga", type: "Danh từ" },
      { jp: "混雑", kana: "こんざつ", romaji: "konzatsu", mean: "sự hỗn loạn, đông nghẹt", type: "Danh từ / Động từ nhóm 3" }
    ],
    grammar: [
      {
        pattern: "V (bỏ ます) + そうです",
        meaning: "Trông có vẻ sắp... (Phỏng đoán sự việc sắp xảy ra ngay trước mắt dựa trên dấu hiệu trực giác)",
        note: "Bỏ đuôi ます rồi gắn trực tiếp với そうです. Phủ định của V là Vない bỏ い + さそうです (間に合わなさそうです - có vẻ không kịp).",
        examples: [
          { jp: "空が暗いです。雨が降りそうです。", vi: "Bầu trời tối sầm lại rồi. Trông có vẻ trời sắp mưa." },
          { jp: "道が混んでいますから、時間に間に合わなさそうです。", vi: "Đường đông nghẹt thế này nên có vẻ không kịp giờ mất rồi." }
        ]
      },
      {
        pattern: "N / Vている + みたいです",
        meaning: "Có vẻ như... / Dường như... (Suy đoán từ những gì mắt thấy tai nghe)",
        note: "Nối trực tiếp với Danh từ hoặc Vている (không thêm だ).",
        examples: [
          { jp: "あそこでアニメのイベントをしているみたいですね。", vi: "Có vẻ như đằng kia đang diễn ra sự kiện Anime nhỉ." },
          { jp: "駅の前に大勢の人が並んでいるみたいです。", vi: "Dường như trước cửa ga có rất đông người đang xếp hàng." }
        ]
      },
      {
        pattern: "Phân biệt 2 cấu trúc SOUDESU",
        meaning: "Phân biệt そうです truyền tin và そうです phỏng đoán",
        note: "• Thể thông thường + そうです = 'Nghe nói rằng...' (Bài 7 - truyền tin từ báo đài, người khác).\n• V (bỏ ます) + そうです = 'Trông có vẻ sắp...' (Bài 9 - phỏng đoán qua dấu hiệu mắt thấy tai nghe).",
        examples: [
          { jp: "雨が降るそうです。", vi: "(Truyền tin): Nghe dự báo thời tiết nói là trời sẽ mưa." },
          { jp: "雨が降りそうです。", vi: "(Phỏng đoán): Trông mây đen thế kia có vẻ trời sắp mưa đấy." }
        ]
      }
    ],
    kanji: [
      { char: "事", onyomi: "ジ (ji)", kunyomi: "こと (koto)", strokes: 8, mean: "Sự việc, công việc (SỰ)", examples: [{ word: "仕事", reading: "しごと", mean: "công việc" }, { word: "大事", reading: "だいじ", mean: "việc quan trọng" }] },
      { char: "工", onyomi: "コウ / ク", kunyomi: "-", strokes: 3, mean: "Công nhân, xây dựng (CÔNG)", examples: [{ word: "工事", reading: "こうじ", mean: "công trình thi công" }, { word: "工夫", reading: "くふう", mean: "công phu, tìm tòi" }] },
      { char: "暗", onyomi: "アン (an)", kunyomi: "くら・い (kura-i)", strokes: 13, mean: "Tối tăm, mờ mịt (ÁM)", examples: [{ word: "暗い", reading: "くらい", mean: "tối trời, u ám" }, { word: "暗記", reading: "あんき", mean: "học thuộc lòng" }] },
      { char: "若", onyomi: "ジャク", kunyomi: "わか・い (waka-i)", strokes: 8, mean: "Trẻ trung, thanh xuân (NHƯỢC)", examples: [{ word: "若い", reading: "わかい", mean: "trẻ tuổi" }, { word: "若者", reading: "わかもの", mean: "giới trẻ" }] },
      { char: "界", onyomi: "カイ (kai)", kunyomi: "-", strokes: 9, mean: "Ranh giới, thế giới (GIỚI)", examples: [{ word: "世界", reading: "せかい", mean: "thế giới" }, { word: "限界", reading: "げんかい", mean: "giới hạn" }] }
    ],
    dialogue: {
      title: "Hội thoại: Hẹn gặp trước cửa soát vé nhà ga",
      situation: "Nam và bạn liên lạc qua điện thoại vì tàu bị hoãn giờ cao điểm.",
      lines: [
        { speaker: "Nam", jp: "もしもし、ケンさん、今どこですか。改札口に着きましたよ。", vi: "Alo Ken ơi, cậu đang ở đâu thế? Tớ đến cửa soát vé rồi nè." },
        { speaker: "Ken", jp: "すみません、ナムさん。ラッシュアワーで電車がすごく混んでいて、少し遅れそうです。", vi: "Xin lỗi Nam nhé. Giờ cao điểm tàu điện đông nghẹt quá, chắc tớ có vẻ sẽ bị trễ một chút." },
        { speaker: "Nam", jp: "大丈夫ですよ。空が暗くなって雨が降りそうだから、駅のカフェで待っていますね。", vi: "Không sao đâu. Trời tối dần trông có vẻ sắp mưa rồi, nên tớ sẽ ngồi đợi cậu ở quán cà phê trong ga nhé." },
        { speaker: "Ken", jp: "ありがとうございます！急いで行きますね。", vi: "Cảm ơn cậu nhiều! Tớ sẽ khẩn trương đến ngay đây." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Tàu điện giờ cao điểm (ラッシュアワー) ở các đô thị Nhật Bản",
      content: "Các chuyến tàu điện giờ cao điểm sáng ở Tokyo hay Osaka nổi tiếng với cảnh tượng chật kín người (満員電車 - Man'in densha), thậm chí có nhân viên nhà ga (Oshiya) chuyên hỗ trợ đẩy hành khách lên tàu an toàn trước khi cửa đóng. Hành khách Nhật luôn giữ yên lặng tuyệt đối trên tàu: tắt chuông điện thoại, không gọi điện to và không làm phiền người xung quanh.",
      comparison: "Tại các thành phố lớn ở Việt Nam, giờ cao điểm thường gắn liền với cảnh tượng dòng xe máy tấp nập trên các tuyến đường phố."
    },
    quiz: [
      {
        q: "Chọn dạng đúng để diễn đạt 'Trời có vẻ sắp mưa':",
        options: [
          "A. 雨が降りそうです。",
          "B. 雨が降るそうです。",
          "C. 雨が降ったそうです。",
          "D. 雨が降るみたいでした。"
        ],
        answer: 0,
        explain: "Phỏng đoán dấu hiệu trực tiếp: V bỏ ます + そうです ('降りそうです'). '降るそうです' là truyền tin (nghe nói trời sẽ mưa)."
      },
      {
        q: "Dạng phủ định của '間に合いそうです (có vẻ kịp)' là gì?",
        options: [
          "A. 間に合わなさそうです",
          "B. 間に合いそうではありません",
          "C. 間に合わないそうです",
          "D. 間に合いませんそうです"
        ],
        answer: 0,
        explain: "Phủ định của V bỏ ます + そうです là: Vない bỏ い + さそうです ('間に合わなさそうです')."
      },
      {
        q: "Chữ Hán '界' trong từ '世界 (thế giới)' có âm Hán Việt là gì?",
        options: ["A. GIỚI", "B. SỰ", "C. CÔNG", "D. ÁM"],
        answer: 0,
        explain: "'界' có âm Hán Việt là GIỚI (trong thế giới, giới hạn)."
      },
      {
        q: "Khi đến điểm hẹn trễ, câu nói xin lỗi lịch sự là:",
        options: [
          "A. 遅れてすみません。",
          "B. 早く来てください。",
          "C. どういたしまして。",
          "D. おかげさまで。"
        ],
        answer: 0,
        explain: "'遅れてすみません (Xin lỗi vì tôi đến trễ)' là lời xin lỗi đúng chuẩn khi muộn hẹn."
      }
    ]
  },

  // ==========================================
  // ÔN TẬP 3 — BÀI 7 ĐẾN BÀI 9
  // ==========================================
  {
    id: "on-tap-3",
    lessonNum: "ÔN TẬP 3",
    title: "ふりかえり 3 (第7課〜第9課)",
    romaji: "Furikaeri 3 (Dai 7 ka - Dai 9 ka)",
    meaning: "Ôn tập 3 (Bài 7 – Bài 9)",
    badge: "Ôn tập 3",
    goal: "Hệ thống hóa truyền tin (〜によると, Câu thường + そうです), mục đích (Vるために), câu bị động chỉ tác động/phiền toái (N1 は N2 に V-bị động), phỏng đoán dấu hiệu trực tiếp (V bỏ ます + そうです, みたいです) và 16 chữ Hán từ Bài 7 đến Bài 9.",
    vocab: [
      { jp: "情報伝達", kana: "じょうほうでんたつ", romaji: "jouhou dentatsu", mean: "sự truyền đạt thông tin", type: "Danh từ" },
      { jp: "助け合い", kana: "たすけあい", romaji: "tasukeai", mean: "tương thân tương ái, giúp đỡ nhau", type: "Danh từ" },
      { jp: "マナー", kana: "まなー", romaji: "manaa", mean: "văn hóa ứng xử, phép lịch sự", type: "Danh từ" },
      { jp: "公共交通", kana: "こうきょうこうつう", romaji: "koukyou koutsuu", mean: "giao thông công cộng", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Tổng kết Ngữ pháp Ôn tập 3",
        meaning: "Hệ thống ngữ pháp Bài 7 đến Bài 9",
        note: "1. Câu thường + そうです (Nghe nói rằng - truyền tin).\n2. 〜によると (Theo nguồn tin...).\n3. Vるために (Để thực hiện mục đích).\n4. Thể bị động (受身形): Nhóm 1 đổi a+れる; Nhóm 2 bỏ る+られる; する->される, くる->こられる.\n5. N1 は N2 に V-bị động (Được/bị tác nhân N2 làm gì).\n6. V bỏ ます + そうです (Trông có vẻ sắp - phỏng đoán trực tiếp).\n7. N / Vている + みたいです (Có vẻ như - suy đoán từ quan sát).",
        examples: [
          { jp: "ニュースによると、明日は台風が来るそうですから、外出しないほうがいいです。", vi: "Theo bản tin thời sự, nghe nói ngày mai có bão nên không nên ra ngoài." },
          { jp: "先生にほめられて、とてもうれしかったです。", vi: "Tôi đã rất vui khi được thầy giáo khen ngợi." }
        ]
      }
    ],
    kanji: [
      { char: "送", onyomi: "ソウ", kunyomi: "おく・る", strokes: 9, mean: "TỐNG (gửi đi)", examples: [{ word: "送金", reading: "そうきん", mean: "chuyển tiền" }] },
      { char: "心", onyomi: "シン", kunyomi: "こころ", strokes: 4, mean: "TÂM (trái tim)", examples: [{ word: "熱心", reading: "ねっしん", mean: "nhiệt tình" }] },
      { char: "質", onyomi: "シツ", kunyomi: "-", strokes: 15, mean: "CHẤT (chất lượng)", examples: [{ word: "物質", reading: "ぶっしつ", mean: "vật chất" }] },
      { char: "問", onyomi: "モン", kunyomi: "と・う", strokes: 11, mean: "VẤN (câu hỏi)", examples: [{ word: "学問", reading: "がくもん", mean: "học vấn" }] },
      { char: "事", onyomi: "ジ", kunyomi: "こと", strokes: 8, mean: "SỰ (công việc)", examples: [{ word: "事故", reading: "じこ", mean: "sự cố, tai nạn" }] },
      { char: "界", onyomi: "カイ", kunyomi: "-", strokes: 9, mean: "GIỚI (thế giới)", examples: [{ word: "境界", reading: "きょうかい", mean: "ranh giới" }] }
    ],
    dialogue: {
      title: "Hội thoại: Kể lại trải nghiệm trên chuyến tàu điện",
      situation: "Hai bạn cùng trao đổi về một sự cố nhỏ trên đường đến trường.",
      lines: [
        { speaker: "Lan", jp: "今朝の満員電車、たいへんだったみたいですね。", vi: "Chuyến tàu đông nghẹt sáng nay có vẻ vất vả ghê nhỉ." },
        { speaker: "Ken", jp: "ええ、誰かに足を踏まれたり、傘を落としそうになったりしましたよ。", vi: "Ừ, tớ vừa bị ai đó giẫm vào chân, lại suýt nữa đánh rơi cả cái ô đấy." },
        { speaker: "Lan", jp: "でも、無事に時間通りに着いてよかったですね。", vi: "Nhưng mà cậu đã đến nơi bình an đúng giờ là tốt rồi." }
      ]
    },
    culture: {
      title: "Góc văn hóa tổng hợp: Tinh thần tương thân tương ái và ý thức công cộng",
      content: "Dù trong hoàn cảnh thiên tai khắc nghiệt hay trong những không gian chật hẹp của phương tiện giao thông công cộng, người Nhật luôn giữ bình tĩnh, tuân thủ hàng lối và giúp đỡ người già, trẻ nhỏ một cách trật tự.",
      comparison: "Tinh thần 'Lá lành đùm lá rách' của dân tộc Việt Nam cũng luôn tỏa sáng qua những chuyến xe thiện nguyện cứu trợ đồng bào trong bão lũ thiên tai."
    },
    quiz: [
      {
        q: "Phân biệt nghĩa giữa '雨が降るそうです' và '雨が降りそうです':",
        options: [
          "A. Câu 1: Nghe nói trời mưa | Câu 2: Trời có vẻ sắp mưa",
          "B. Câu 1: Trời có vẻ sắp mưa | Câu 2: Nghe nói trời mưa",
          "C. Cả hai câu đều có nghĩa là trời đang mưa to",
          "D. Cả hai câu đều có nghĩa là trời đã tạnh mưa"
        ],
        answer: 0,
        explain: "Thể thông thường + そうです = nghe nói (truyền tin); V bỏ ます + そうです = có vẻ sắp (phỏng đoán)."
      },
      {
        q: "Chuyển động từ 'ほめる (khen)' sang thể bị động:",
        options: ["A. ほまれる", "B. ほめられる", "C. ほめさせる", "D. ほめられた"],
        answer: 1,
        explain: "'ほめる' là động từ nhóm 2, bỏ る thêm られる -> ほめられる (được khen)."
      },
      {
        q: "Chữ Hán '心' đọc là 'こころ' khi đứng một mình có nghĩa là gì?",
        options: ["A. Bàn tay", "B. Trái tim, tấm lòng", "C. Con mắt", "D. Nơi chốn"],
        answer: 1,
        explain: "'心 (こころ)' nghĩa là trái tim, tấm lòng, tâm hồn."
      },
      {
        q: "Từ nào đồng nghĩa với 'kịp giờ' trong tiếng Nhật?",
        options: ["A. 間に合う", "B. 遅れる", "C. 止まる", "D. 待つ"],
        answer: 0,
        explain: "'間に合う (まにあう)' nghĩa là kịp giờ."
      }
    ]
  },

  // ==========================================
  // BÀI 10: そうだん — TƯ VẤN, TRAO ĐỔI Ý KIẾN
  // ==========================================
  {
    id: "bai-10",
    lessonNum: "BÀI 10",
    title: "そうだん",
    romaji: "Soudan",
    meaning: "Tư vấn, trao đổi ý kiến",
    badge: "Chủ đề 10",
    goal: "Bày tỏ băn khoăn về định hướng tương lai bằng mệnh đề nghi vấn gián tiếp (〜かどうか); diễn đạt sự quyết tâm bất chấp khó khăn với 〜ても; hỏi xin lời khuyên và đưa ra gợi ý chân thành.",
    vocab: [
      { jp: "そうだん", kana: "そうだん", romaji: "soudan", mean: "sự tư vấn, bàn bạc", type: "Danh từ / Động từ nhóm 3" },
      { jp: "高校", kana: "こうこう", romaji: "koukou", mean: "trường trung học phổ thông (cấp 3)", type: "Danh từ" },
      { jp: "入試", kana: "にゅうし", romaji: "nyuushi", mean: "kì thi tuyển sinh đầu vào", type: "Danh từ" },
      { jp: "心配", kana: "しんぱい", romaji: "shinpai", mean: "sự lo lắng, băn khoăn", type: "Tính từ đuôi な / Danh từ" },
      { jp: "迷う", kana: "まよう", romaji: "mayou", mean: "phân vân, do dự, lạc lối", type: "Động từ nhóm 1" },
      { jp: "決める", kana: "きめる", romaji: "kimeru", mean: "quyết định", type: "Động từ nhóm 2" },
      { jp: "部活", kana: "ぶかつ", romaji: "bukatsu", mean: "hoạt động câu lạc bộ trường học", type: "Danh từ" },
      { jp: "がんばる", kana: "がんばる", romaji: "ganbaru", mean: "cố gắng, nỗ lực hết mình", type: "Động từ nhóm 1" },
      { jp: "アドバイス", kana: "あどばいす", romaji: "adobaisu", mean: "lời khuyên hữu ích", type: "Danh từ" },
      { jp: "将来", kana: "しょうらい", romaji: "shourai", mean: "tương lai", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Thể thông thường + かどうか",
        meaning: "Liệu có... hay không (Mệnh đề nghi vấn gián tiếp Yes/No)",
        note: "Động từ và Tính từ đuôi い đi trực tiếp với かどうか. Tính từ đuôi な và Danh từ bỏ だ rồi gắn trực tiếp với かどうか.",
        examples: [
          { jp: "ホアセン高校に入れるかどうか心配です。", vi: "Tôi lo lắng không biết liệu mình có thể đỗ vào trường THPT Hoa Sen hay không." },
          { jp: "高校生活が楽しいかどうか知りたいです。", vi: "Tôi muốn biết cuộc sống ở trường cấp 3 liệu có vui hay không." },
          { jp: "明日雨が降るかどうか分かりません。", vi: "Tôi không biết liệu ngày mai trời có mưa hay không." }
        ]
      },
      {
        pattern: "〜ても / 〜でも",
        meaning: "Dù / Cho dù... thì vẫn...",
        note: "Động từ chia thể て + も (Vても); Tính từ đuôi い đổi thành くても; Tính từ đuôi な và Danh từ đổi thành でも.",
        examples: [
          { jp: "試験がむずかしくても、最後までがんばります。", vi: "Cho dù kì thi tuyển sinh có khó khăn, tôi vẫn sẽ nỗ lực đến cùng." },
          { jp: "雨が降っても、高校の見学に行きます。", vi: "Dù trời có mưa, tôi vẫn sẽ đi tham quan trường THPT." }
        ]
      }
    ],
    kanji: [
      { char: "不", onyomi: "フ / ブ", kunyomi: "-", strokes: 4, mean: "Bất, không (phủ định) (BẤT)", examples: [{ word: "不安", reading: "ふあん", mean: "bất an, lo lắng" }, { word: "不便", reading: "ふべん", mean: "bất tiện" }] },
      { char: "仕", onyomi: "シ (shi)", kunyomi: "つか・える", strokes: 5, mean: "Làm việc, phục vụ (SĨ)", examples: [{ word: "仕事", reading: "しごと", mean: "công việc" }, { word: "仕方", reading: "しかた", mean: "cách làm" }] },
      { char: "約", onyomi: "ヤク (yaku)", kunyomi: "-", strokes: 9, mean: "Ước lượng, ước hẹn (ƯỚC)", examples: [{ word: "約束", reading: "やくそく", mean: "lời hứa, cuộc hẹn" }, { word: "予約", reading: "よやく", mean: "đặt trước" }] },
      { char: "答", onyomi: "トウ (tou)", kunyomi: "こた・える / こたえ", strokes: 12, mean: "Trả lời, đáp án (ĐÁP)", examples: [{ word: "答える", reading: "こたえる", mean: "trả lời" }, { word: "答え", reading: "こたえ", mean: "đáp án" }] },
      { char: "運", onyomi: "ウン (un)", kunyomi: "はこ・ぶ (hako-bu)", strokes: 12, mean: "Vận chuyển, may mắn, số phận (VẬN)", examples: [{ word: "運動", reading: "うんどう", mean: "vận động, thể thao" }, { word: "運転", reading: "うんてん", mean: "lái xe" }] }
    ],
    dialogue: {
      title: "Hội thoại: Tư vấn chọn trường THPT sau khi tốt nghiệp cấp 2",
      situation: "Nam xin lời khuyên của thầy giáo về việc đăng kí trường THPT.",
      lines: [
        { speaker: "Nam", jp: "先生、高校の進路についてそうだんしたいんですが、よろしいですか。", vi: "Thưa thầy, em muốn xin thầy tư vấn về định hướng chọn trường cấp 3 được không ạ?" },
        { speaker: "Thầy", jp: "ええ、いいですよ。どの高校にするか決めましたか。", vi: "Được chứ em. Em đã quyết định chọn trường nào chưa?" },
        { speaker: "Nam", jp: "第１志望の高校に入れるかどうかとても心配なんです。", vi: "Em rất lo lắng không biết liệu mình có thể đỗ vào trường nguyện vọng 1 hay không ạ." },
        { speaker: "Thầy", jp: "試験がむずかしくても、毎日計画的に勉強すればきっと合格できますよ。", vi: "Dù kì thi có khó, nhưng nếu em học tập có kế hoạch mỗi ngày thì nhất định sẽ đỗ thôi." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Kì thi tuyển sinh vào THPT (高校入試 - Koukou nyuushi) tại Nhật",
      content: "Ở Nhật Bản, học sinh lớp 9 phải trải qua kì thi tuyển sinh THPT rất căng thẳng vào khoảng tháng 2 – tháng 3. Các em phải làm bài thi các môn cơ bản (Toán, Quốc ngữ, Tiếng Anh, Xã hội, Khoa học) và trải qua phỏng vấn trực tiếp (面接 - Mensetsu). Học sinh Nhật Bản rất chú trọng việc chọn trường phù hợp với sở thích câu lạc bộ và định hướng nghề nghiệp tương lai.",
      comparison: "Ở Việt Nam, kì thi tuyển sinh vào lớp 10 cũng là mốc bước ngoặt quan trọng, đòi hỏi sự kiên trì và nỗ lực rất lớn của các em học sinh THCS."
    },
    quiz: [
      {
        q: "Điền mẫu câu nghi vấn gián tiếp: '合格できる______ 心配です。'",
        options: ["A. かどうか", "B. のに", "C. から", "D. ように"],
        answer: 0,
        explain: "Cấu trúc 'Vるかどうか' diễn tả sự băn khoăn: 'liệu có thể đỗ hay không'."
      },
      {
        q: "Điền liên từ chỉ sự nhượng bộ: '雨が降っ______、サッカーの練習をします。'",
        options: ["A. ても", "B. たら", "C. のに", "D. ので"],
        answer: 0,
        explain: "Cấu trúc 'Vても' mang nghĩa 'cho dù... vẫn...': 'Dù trời mưa vẫn luyện tập'."
      },
      {
        q: "Chữ Hán '答' trong từ '答え (đáp án)' có âm Hán Việt là gì?",
        options: ["A. ĐÁP", "B. BẤT", "C. SĨ", "D. ƯỚC"],
        answer: 0,
        explain: "'答' có âm Hán Việt là ĐÁP (trong đáp án, trả lời)."
      },
      {
        q: "Từ '進路 (しんろ)' trong tư vấn học đường có nghĩa là gì?",
        options: ["A. Định hướng tương lai / con đường học lên", "B. Đường đi dạo", "C. Lịch thi đấu", "D. Điểm kiểm tra"],
        answer: 0,
        explain: "'進路' là hướng đi tương lai, con đường học lên cấp trên hoặc nghề nghiệp."
      }
    ]
  },

  // ==========================================
  // BÀI 11: しょう来の計画 — KẾ HOẠCH TƯƠNG LAI
  // ==========================================
  {
    id: "bai-11",
    lessonNum: "BÀI 11",
    title: "しょう来の計画",
    romaji: "Shourai no keikaku",
    meaning: "Kế hoạch tương lai",
    badge: "Chủ đề 11",
    goal: "Nói về sự thay đổi thói quen và năng lực mới hình thành (Vるようになる / Vなくなる); diễn đạt kế hoạch và dự định tương lai bằng Vようと思っています.",
    vocab: [
      { jp: "将来", kana: "しょうらい", romaji: "shourai", mean: "tương lai (cá nhân)", type: "Danh từ" },
      { jp: "計画", kana: "けいかく", romaji: "keikaku", mean: "kế hoạch, dự định", type: "Danh từ / Động từ nhóm 3" },
      { jp: "習慣", kana: "しゅうかん", romaji: "shuukan", mean: "thói quen, tập quán", type: "Danh từ" },
      { jp: "目標", kana: "もくひょう", romaji: "mokuhyou", mean: "mục tiêu phấn đấu", type: "Danh từ" },
      { jp: "プログラミング", kana: "ぷろぐらみんぐ", romaji: "puroguramingu", mean: "lập trình phần mềm", type: "Danh từ" },
      { jp: "通う", kana: "かよう", romaji: "kayou", mean: "đi lại thường xuyên (đi học/làm)", type: "Động từ nhóm 1" },
      { jp: "昼寝", kana: "ひるね", romaji: "hirune", mean: "ngủ trưa", type: "Danh từ / Động từ nhóm 3" },
      { jp: "研究する", kana: "けんきゅうする", romaji: "kenkyuu suru", mean: "nghiên cứu khoa học", type: "Động từ nhóm 3" },
      { jp: "自転車通学", kana: "じてんしゃつうがく", romaji: "jitensha tsuugaku", mean: "đi học bằng xe đạp", type: "Danh từ" },
      { jp: "IT企業", kana: "あいてぃーきぎょう", romaji: "aitii kigyou", mean: "doanh nghiệp công nghệ thông tin", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Vる ようになりました",
        meaning: "Đã trở nên có thể làm được / Đã hình thành thói quen thường làm...",
        note: "Diễn tả sự thay đổi về năng lực hoặc một thói quen tích cực mới được hình thành theo thời gian.",
        examples: [
          { jp: "毎日の生活について日本語で話せるようになりました。", vi: "Tôi đã có thể nói chuyện về sinh hoạt hàng ngày bằng tiếng Nhật rồi." },
          { jp: "毎朝六時に起きるようになりました。", vi: "Tôi đã tạo được thói quen dậy lúc 6 giờ mỗi sáng." }
        ]
      },
      {
        pattern: "Vなくなる (Vなくなりました)",
        meaning: "Không còn làm việc gì nữa / Thói quen cũ đã chấm dứt",
        note: "Đổi Vない thành Vなくなる để diễn tả một thói quen hoặc hành động trước đây thường làm nay không còn làm nữa.",
        examples: [
          { jp: "中学三年生になって、昼寝をしなくなりました。", vi: "Lên lớp 9 rồi, tôi không còn ngủ trưa nữa." },
          { jp: "スマホを使うようになって、テレビをあまり見なくなりました。", vi: "Từ khi dùng điện thoại thông minh, tôi không còn xem ti vi nhiều nữa." }
        ]
      },
      {
        pattern: "V thể ý chí + と思っています (Vようと思っています)",
        meaning: "Đang dự định / Đang nghĩ sẽ làm gì trong tương lai",
        note: "• Động từ nhóm 1: đổi hàng 'u' sang hàng 'o' + う (習う -> 習おう, 行く -> 行こう).\n• Nhóm 2: bỏ る + よう (食べる -> 食べよう, 始める -> 始めよう).\n• Nhóm 3: する -> しよう, くる -> こよう.\nThể hiện dự định đã nhen nhóm và đang tiếp tục suy nghĩ thực hiện.",
        examples: [
          { jp: "夏休みにプログラミングを習おうと思っています。", vi: "Tôi đang dự định học lập trình vào kì nghỉ hè." },
          { jp: "将来はIT企業で働こうと思っています。", vi: "Trong tương lai, tôi định sẽ làm việc tại một công ty công nghệ thông tin." }
        ]
      }
    ],
    kanji: [
      { char: "万", onyomi: "マン / バン", kunyomi: "-", strokes: 3, mean: "Mười nghìn (VẠN)", examples: [{ word: "一万", reading: "いちまん", mean: "10.000" }, { word: "万一", reading: "まんいち", mean: "vạn nhất, chẳng may" }] },
      { char: "力", onyomi: "リョク / リキ", kunyomi: "ちから (chikara)", strokes: 2, mean: "Sức mạnh, năng lực (LỰC)", examples: [{ word: "能力", reading: "のうりょく", mean: "năng lực" }, { word: "力", reading: "ちから", mean: "sức lực" }] },
      { char: "研", onyomi: "ケン (ken)", kunyomi: "と・ぐ", strokes: 9, mean: "Mài dũa, nghiên cứu (NGHIÊN)", examples: [{ word: "研究", reading: "けんきゅう", mean: "nghiên cứu" }, { word: "研修", reading: "けんしゅう", mean: "tu nghiệp, đào tạo" }] },
      { char: "究", onyomi: "キュウ (kyuu)", kunyomi: "きわ・める", strokes: 7, mean: "Tìm hiểu tận cùng (CỨU)", examples: [{ word: "研究所", reading: "けんきゅうじょ", mean: "viện nghiên cứu" }, { word: "究明", reading: "きゅうめい", mean: "làm sáng tỏ" }] },
      { char: "森", onyomi: "シン (shin)", kunyomi: "もり (mori)", strokes: 12, mean: "Rừng rậm rạp (SÂM)", examples: [{ word: "森", reading: "もり", mean: "khu rừng rậm" }, { word: "森林", reading: "しんりん", mean: "rừng rậm (sâm lâm)" }] }
    ],
    dialogue: {
      title: "Hội thoại: Kế hoạch kì nghỉ hè và ước mơ tương lai",
      situation: "Hai bạn cùng lớp chia sẻ về kế hoạch sau khi thi chuyển cấp.",
      lines: [
        { speaker: "Lan", jp: "中学を卒業したら、どんな高校生活を送りたいですか。", vi: "Sau khi tốt nghiệp cấp 2, cậu muốn có một cuộc sống cấp 3 như thế nào?" },
        { speaker: "Nam", jp: "自転車で通学するようになって、もっと体力をつけたいです。", vi: "Tớ muốn bắt đầu tự đi học bằng xe đạp để rèn luyện thêm thể lực." },
        { speaker: "Lan", jp: "いいですね。将来の夢は何ですか。", vi: "Hay quá. Ước mơ tương lai của cậu là gì?" },
        { speaker: "Nam", jp: "大学で人工知能を研究して、役に立つロボットを作ろうと思っています。", vi: "Tớ đang dự định lên đại học sẽ nghiên cứu trí tuệ nhân tạo và chế tạo những chú robot hữu ích." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Trường THPT Nhật Bản và hoạt động câu lạc bộ (部活動)",
      content: "Đời sống học sinh THPT Nhật Bản rất phong phú với các câu lạc bộ (Bukatsu) thể thao (bóng chày, bóng đá, kendo) và văn hóa (ban nhạc kèn đồng, thư pháp, cờ Shogi). Nhiều học sinh xác định rõ hướng đi nghề nghiệp từ cấp 3 thông qua các trường THPT chuyên ngành kĩ thuật, thương mại hoặc trường dạy nghề chuyên nghiệp.",
      comparison: "Tại Việt Nam, học sinh sau khi tốt nghiệp THCS cũng có nhiều lựa chọn phong phú: học tiếp THPT công lập/tư thục hoặc theo học các trường trung cấp nghề để sớm lập thân."
    },
    quiz: [
      {
        q: "Cụm '日本語が話せるようになりました' có nghĩa là:",
        options: [
          "A. Đã trở nên có thể nói được tiếng Nhật",
          "B. Không thể nói được tiếng Nhật nữa",
          "C. Muốn nói tiếng Nhật",
          "D. Đang học nói tiếng Nhật"
        ],
        answer: 0,
        explain: "'Vるようになりました' diễn tả năng lực mới hình thành (đã có thể làm được)."
      },
      {
        q: "Chuyển động từ '働く (làm việc)' sang thể ý chí:",
        options: ["A. 働こう", "B. 働よう", "C. 働きたい", "D. 働こうか"],
        answer: 0,
        explain: "'働く' là động từ nhóm 1, chuyển âm hàng u sang o + う: 働こう."
      },
      {
        q: "Chữ Hán nào ghép từ 3 chữ Mộc (木) tạo thành?",
        options: ["A. 林", "B. 森", "C. 本", "D. 休"],
        answer: 1,
        explain: "'森 (もり - SÂM)' gồm 3 chữ Mộc chồng lên nhau, nghĩa là rừng rậm rạp."
      },
      {
        q: "Để diễn đạt 'Tôi không còn thức khuya nữa', câu nào đúng?",
        options: [
          "A. 夜更かしをしなくなりました。",
          "B. 夜更かしをするようになりました。",
          "C. 夜更かしをしないようになります。",
          "D. 夜更かしをしました。"
        ],
        answer: 0,
        explain: "'Vなくなる (しなくなる)' diễn tả thói quen xấu trước kia nay đã chấm dứt."
      }
    ]
  },

  // ==========================================
  // ÔN TẬP 4 — BÀI 10 ĐẾN BÀI 11
  // ==========================================
  {
    id: "on-tap-4",
    lessonNum: "ÔN TẬP 4",
    title: "ふりかえり 4 (第10課〜第11課)",
    romaji: "Furikaeri 4 (Dai 10 ka - Dai 11 ka)",
    meaning: "Ôn tập 4 (Bài 10 – Bài 11)",
    badge: "Ôn tập 4",
    goal: "Hệ thống hóa mệnh đề nghi vấn gián tiếp (〜かどうか), nhượng bộ (〜ても), biến đổi năng lực & thói quen (Vるようになる, Vなくなる), dự định tương lai (Vようと思っています) và 10 chữ Hán từ Bài 10 đến Bài 11.",
    vocab: [
      { jp: "自己実現", kana: "じこじつげん", romaji: "jiko jitsugen", mean: "hoàn thiện bản thân", type: "Danh từ" },
      { jp: "進学", kana: "しんがく", romaji: "shingaku", mean: "học lên bậc học cao hơn", type: "Danh từ / Động từ nhóm 3" },
      { jp: "将来像", kana: "しょうらいぞう", romaji: "shouraizou", mean: "hình mẫu tương lai", type: "Danh từ" },
      { jp: "自立", kana: "じりつ", romaji: "jiritsu", mean: "tính tự lập, tự chủ", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Tổng kết Ngữ pháp Ôn tập 4",
        meaning: "Hệ thống cấu trúc Bài 10 & 11",
        note: "1. Thể thông thường + かどうか (Liệu có... hay không).\n2. 〜ても / 〜でも (Dù... vẫn...).\n3. Vるようになる (Đã trở nên có thể làm / hình thành thói quen mới).\n4. Vなくなる (Không còn làm gì nữa / bỏ thói quen cũ).\n5. V thể ý chí + と思っています (Đang dự định làm gì).",
        examples: [
          { jp: "高校に入れるかどうか心配ですが、どんなにむずかしくてもあきらめないつもりです。", vi: "Dù lo không biết có đỗ cấp 3 hay không, nhưng dù khó thế nào tôi cũng quyết không bỏ cuộc." },
          { jp: "毎日自分で起きて、朝ご飯を作るようになりました。", vi: "Tôi đã tạo được thói quen tự thức dậy và tự nấu bữa sáng mỗi ngày." }
        ]
      }
    ],
    kanji: [
      { char: "不", onyomi: "フ", kunyomi: "-", strokes: 4, mean: "BẤT (không)", examples: [{ word: "不可能", reading: "ふかのう", mean: "bất khả thi" }] },
      { char: "仕", onyomi: "シ", kunyomi: "つか・える", strokes: 5, mean: "SĨ (phục vụ)", examples: [{ word: "仕上がり", reading: "しあがり", mean: "hoàn thiện" }] },
      { char: "約", onyomi: "ヤク", kunyomi: "-", strokes: 9, mean: "ƯỚC (ước hẹn)", examples: [{ word: "条約", reading: "じょうやく", mean: "điều ước" }] },
      { char: "万", onyomi: "マン", kunyomi: "-", strokes: 3, mean: "VẠN (mười nghìn)", examples: [{ word: "万国", reading: "ばんこく", mean: "muôn nước" }] },
      { char: "力", onyomi: "リョク", kunyomi: "ちから", strokes: 2, mean: "LỰC (sức mạnh)", examples: [{ word: "協力", reading: "きょうりょく", mean: "hợp lực" }] },
      { char: "研", onyomi: "ケン", kunyomi: "と・ぐ", strokes: 9, mean: "NGHIÊN (mài giũa)", examples: [{ word: "研究者", reading: "けんきゅうしゃ", mean: "nhà nghiên cứu" }] }
    ],
    dialogue: {
      title: "Hội thoại: Quyết tâm trước kì thi chuyển cấp",
      situation: "Các bạn cùng động viên nhau chuẩn bị cho kì thi tốt nghiệp THCS.",
      lines: [
        { speaker: "Lan", jp: "もうすぐ中学生活も終わりですね。高校へ行っても連絡を取り合おうね。", vi: "Cuộc sống cấp 2 sắp kết thúc rồi nhỉ. Lên cấp 3 tụi mình vẫn giữ liên lạc với nhau nhé." },
        { speaker: "Nam", jp: "うん、絶対だよ。将来自分の夢を叶えるために、お互いがんばろう！", vi: "Ừ, chắc chắn rồi. Để thực hiện ước mơ tương lai, chúng mình cùng cố gắng nhé!" }
      ]
    },
    culture: {
      title: "Góc văn hóa tổng hợp: Ý chí vươn lên (がんばる精神) của thế hệ trẻ",
      content: "Từ 'がんばる (Ganbaru - nỗ lực hết mình)' là một trong những nét tính cách tiêu biểu nhất của người Nhật. Học sinh Nhật Bản khi bước vào kì thi thường được gia đình tặng bùa may mắn 'お守り (Omamori)' hoặc ăn món thịt tẩm bột chiên 'カツ丼 (Katsudon)' vì chữ 'Katsu' đồng âm với từ 'Chiến thắng (勝つ)'.",
      comparison: "Học sinh Việt Nam trước kì thi cũng thường chúc nhau 'vượt vũ môn thành công' và mang theo niềm tin, kì vọng của thầy cô, cha mẹ."
    },
    quiz: [
      {
        q: "Điền dạng đúng của động từ: '将来、医者にな______ と思っています。'",
        options: ["A. ろう", "B. ろうか", "C. りたい", "D. る"],
        answer: 0,
        explain: "'なる' (nhóm 1) đổi sang thể ý chí là 'なろう': なろうと思っています (định trở thành bác sĩ)."
      },
      {
        q: "Chữ Hán '力' đọc là gì khi đứng một mình?",
        options: ["A. ちから (chikara)", "B. りょく (ryoku)", "C. りき (riki)", "D. か (ka)"],
        answer: 0,
        explain: "Chữ '力' đứng một mình đọc theo âm Kun là ちから (sức mạnh, năng lực)."
      },
      {
        q: "Ý nghĩa của câu 'どんなに忙しくても、毎日日本語を勉強します':",
        options: [
          "A. Dù bận đến mấy thì mỗi ngày tôi vẫn học tiếng Nhật",
          "B. Vì bận quá nên tôi không học tiếng Nhật nữa",
          "C. Nếu không bận thì tôi mới học tiếng Nhật",
          "D. Tôi muốn bận rộn để học tiếng Nhật"
        ],
        answer: 0,
        explain: "'どんなに〜ても' diễn tả ý nhượng bộ: 'Dù có thế nào đi chăng nữa thì vẫn...'."
      },
      {
        q: "Cấu trúc nào diễn tả sự chấm dứt của một thói quen cũ?",
        options: ["A. Vなくなる", "B. Vるようになる", "C. Vようと思う", "D. Vてから"],
        answer: 0,
        explain: "'Vなくなる' có nghĩa là không còn làm việc gì nữa (chấm dứt thói quen cũ)."
      }
    ]
  },

  // ==========================================
  // BÀI 12: ふりかえり — ÔN TẬP NỘI DUNG BÀI 1–11
  // ==========================================
  {
    id: "bai-12",
    lessonNum: "BÀI 12",
    title: "ふりかえり（第1課〜第11課）",
    romaji: "Furikaeri (Dai 1 ka - Dai 11 ka)",
    meaning: "Hệ thống hóa toàn bộ nội dung Lớp 9",
    badge: "Tổng kết Lớp 9",
    goal: "Hệ thống lại toàn diện 11 bài chủ đề, 18 mẫu câu cốt lõi và 57 chữ Hán của sách Tiếng Nhật 9. Học sinh tự đánh giá theo 3 mức độ: Làm tốt (よくできた), Đang rèn luyện (もう少し), Cần cố gắng thêm (がんばろう).",
    vocab: [
      { jp: "自己評価", kana: "じこひょうか", romaji: "jiko hyouka", mean: "tự đánh giá năng lực", type: "Danh từ" },
      { jp: "到達度", kana: "とうたつど", romaji: "toutatsudo", mean: "mức độ đạt được mục tiêu", type: "Danh từ" },
      { jp: "総合演習", kana: "そうごうえんしゅう", romaji: "sougou enshuu", mean: "luyện tập tổng hợp", type: "Danh từ" },
      { jp: "達成感", kana: "たっせいかん", romaji: "tasseikan", mean: "cảm giác thành tựu khi hoàn thành", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Bảng tổng duyệt 18 Mẫu câu Lớp 9",
        meaning: "Toàn bộ cấu trúc then chốt chương trình Tiếng Nhật 9",
        note: "1. Nから Vています (Bắt đầu từ mốc nào)\n2. Vてから (Sau khi làm A thì làm B)\n3. Khoảng thời gian + Vています (Kéo dài bao lâu)\n4. Vるのが + Tính từ (Danh từ hóa)\n5. Vてほしいです (Muốn ai làm gì)\n6. VたN / VているN (Định ngữ bổ nghĩa danh từ)\n7. どうしたんですか / 〜んです (Hỏi thăm & giải thích)\n8. Vたかもしれません (Phỏng đoán có thể đã)\n9. Câu thường + ので (Nguyên nhân lịch sự)\n10. Vる前に / Vた後で (Trước / Sau khi)\n11. N1 という N2 (Định nghĩa tên gọi)\n12. Câu thường + そうです / 〜によると (Truyền tin nghe nói)\n13. Vるために (Mục đích hành động)\n14. N1 は N2 に V-bị động (Câu bị động)\n15. V bỏ ます + そうです (Trông có vẻ sắp)\n16. みたいです (Có vẻ như)\n17. Thể thường + かどうか (Liệu có... hay không)\n18. Vるようになる / Vなくなる / Vようと思っています (Thay đổi & dự định)",
        examples: [
          { jp: "九年生の日本語をすべて復習しました。", vi: "Chúng em đã ôn tập toàn bộ kiến thức Tiếng Nhật lớp 9." }
        ]
      }
    ],
    kanji: [
      { char: "始", onyomi: "シ", kunyomi: "はじ・める", strokes: 8, mean: "THỦY", examples: [{ word: "開始", reading: "かいし", mean: "bắt đầu" }] },
      { char: "集", onyomi: "シュウ", kunyomi: "あつ・める", strokes: 12, mean: "TẬP", examples: [{ word: "文集", reading: "ぶんしゅう", mean: "tập văn tuyển" }] },
      { char: "試", onyomi: "シ", kunyomi: "ため・す", strokes: 13, mean: "THÍ", examples: [{ word: "試験", reading: "しけん", mean: "kì thi" }] },
      { char: "心", onyomi: "シン", kunyomi: "こころ", strokes: 4, mean: "TÂM", examples: [{ word: "心理", reading: "しんり", mean: "tâm lí" }] },
      { char: "質", onyomi: "シツ", kunyomi: "-", strokes: 15, mean: "CHẤT", examples: [{ word: "質問", reading: "しつもん", mean: "câu hỏi" }] },
      { char: "研", onyomi: "ケン", kunyomi: "と・ぐ", strokes: 9, mean: "NGHIÊN", examples: [{ word: "研究", reading: "けんきゅう", mean: "nghiên cứu" }] }
    ],
    dialogue: {
      title: "Hội thoại: Tự đánh giá năng lực cuối năm lớp 9",
      situation: "Nam và Lan cùng nhìn lại chặng đường học tập suốt năm học.",
      lines: [
        { speaker: "Lan", jp: "ナムさん、中学三年間の日本語の勉強はどうでしたか。", vi: "Nam ơi, việc học tiếng Nhật trong 3 năm cấp 2 của cậu thế nào rồi?" },
        { speaker: "Nam", jp: "最初は難しかったですが、今はいろいろなテーマについて自分の意見を話せるようになりました。", vi: "Lúc đầu thì khó thật, nhưng bây giờ tớ đã có thể trình bày ý kiến của mình về nhiều chủ đề rồi." },
        { speaker: "Lan", jp: "私もです！日本の文化もたくさん学べて楽しかったですね。", vi: "Tớ cũng thế! Bọn mình còn được học rất nhiều về văn hóa Nhật Bản nữa, vui thật đấy." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Lễ tốt nghiệp (卒業式 - Sotsugyoushiki) đầy xúc động tại Nhật",
      content: "Tháng 3 là mùa hoa anh đào nở và cũng là mùa tốt nghiệp tại Nhật Bản. Lễ tốt nghiệp THCS là nghi lễ rất trang nghiêm: học sinh mặc đồng phục chỉnh tề, hát bài hát tốt nghiệp 'Tabidachi no hi ni (Vào ngày cất cánh bay)', nhận bằng tốt nghiệp từ thầy hiệu trưởng và nói lời tri ân cha mẹ, thầy cô.",
      comparison: "Lễ bế giảng và ra trường của học sinh lớp 9 tại Việt Nam vào tháng 5 rợp sắc hoa phượng đỏ cũng đong đầy những kỉ niệm và lưu luyến tuổi học trò."
    },
    quiz: [
      {
        q: "Sách giáo khoa Tiếng Nhật 9 gồm bao nhiêu bài chủ đề chính?",
        options: ["A. 11 bài", "B. 10 bài", "C. 14 bài", "D. 12 bài"],
        answer: 0,
        explain: "Chương trình Tiếng Nhật 9 gồm 11 bài chủ đề (Bài 1 đến Bài 11), 4 bài ôn tập và 2 bài tổng kết (Bài 12 và 13)."
      },
      {
        q: "Mẫu câu nào dùng để tường thuật lại thông tin nghe/đọc được từ báo đài?",
        options: ["A. Câu thường + そうです", "B. V bỏ ます + そうです", "C. Vる前に", "D. Vてほしい"],
        answer: 0,
        explain: "Thể thông thường + そうです mang nghĩa 'Nghe nói rằng...' (truyền tin)."
      },
      {
        q: "Chữ Hán nào dưới đây mang nghĩa 'thế giới'?",
        options: ["A. 界", "B. 質", "C. 問", "D. 事"],
        answer: 0,
        explain: "'界' (GIỚI) trong 世界 (thế giới)."
      },
      {
        q: "Mẫu câu 'Vるようになりました' biểu thị điều gì?",
        options: [
          "A. Năng lực mới hình thành hoặc thói quen mới được tạo lập",
          "B. Thói quen cũ đã bị bỏ",
          "C. Đang dự định làm gì trong tương lai",
          "D. Bị người khác ép buộc làm gì"
        ],
        answer: 0,
        explain: "'Vるようになる' diễn tả sự hình thành năng lực hoặc thói quen mới."
      }
    ]
  },

  // ==========================================
  // BÀI 13: 中学のまとめ — TỔNG KẾT TOÀN BỘ CHƯƠNG TRÌNH THCS
  // ==========================================
  {
    id: "bai-13",
    lessonNum: "BÀI 13",
    title: "中学のまとめ",
    romaji: "Chuugaku no matome",
    meaning: "Tổng kết chương trình Tiếng Nhật THCS (Lớp 6, 7, 8, 9)",
    badge: "Tổng kết THCS",
    goal: "Liên kết vốn kiến thức nền tảng từ Tiếng Nhật 6, 7, 8 với hệ thống Lớp 9; tự tin giao tiếp, đọc hiểu và viết đoạn văn tiếng Nhật cơ bản hướng tới kì thi vào THPT.",
    vocab: [
      { jp: "中学校", kana: "ちゅうがっこう", romaji: "chuugakkou", mean: "trường trung học cơ sở (cấp 2)", type: "Danh từ" },
      { jp: "卒業", kana: "そつぎょう", romaji: "sotsugyou", mean: "tốt nghiệp", type: "Danh từ / Động từ nhóm 3" },
      { jp: "成長", kana: "せいちょう", romaji: "seichou", mean: "sự trưởng thành, khôn lớn", type: "Danh từ / Động từ nhóm 3" },
      { jp: "感謝", kana: "かんしゃ", romaji: "kansha", mean: "lòng biết ơn sâu sắc", type: "Danh từ / Động từ nhóm 3" },
      { jp: "国際交流", kana: "こくさいこうりゅう", romaji: "kokusai kouryuu", mean: "giao lưu quốc tế", type: "Danh từ" },
      { jp: "架け橋", kana: "かけはし", romaji: "kakehashi", mean: "cầu nối nhịp cầu hữu nghị", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Trục phát triển năng lực ngôn ngữ THCS",
        meaning: "Tổng kết 4 năm học Tiếng Nhật THCS",
        note: "• Lớp 6: Bảng chữ cái Hiragana/Katakana, chào hỏi, số đếm, gia đình, thời gian, Desu/Masu.\n• Lớp 7: Thể て, Vています, xin phép (てもいい), cấm đoán (てはいけない), so sánh, rủ rê.\n• Lớp 8: Thể ngắn (thông thường), thể ない (phải làm/không cần làm), thể từ điển (có thể làm), sở thích, kinh nghiệm (Vたことがある), liệt kê (たり〜たり).\n• Lớp 9: Mệnh đề quan hệ bổ nghĩa danh từ, thể bị động, câu tường thuật, phỏng đoán, biến đổi năng lực & thói quen (ようになる), dự định tương lai.",
        examples: [
          { jp: "四年間でたくさんの日本語と日本文化を学びました。", vi: "Trong 4 năm, chúng em đã học được rất nhiều tiếng Nhật và văn hóa Nhật Bản." }
        ]
      }
    ],
    kanji: [
      { char: "学", onyomi: "ガク", kunyomi: "まな・ぶ", strokes: 8, mean: "HỌC (học tập)", examples: [{ word: "学生", reading: "がくせい", mean: "học sinh" }] },
      { char: "校", onyomi: "コウ", kunyomi: "-", strokes: 10, mean: "HIỆU (trường học)", examples: [{ word: "学校", reading: "がっこう", mean: "trường học" }] },
      { char: "友", onyomi: "ユウ", kunyomi: "とも", strokes: 4, mean: "HỮU (bạn bè)", examples: [{ word: "友達", reading: "ともだち", mean: "bạn bè" }] },
      { char: "先", onyomi: "セン", kunyomi: "さき", strokes: 6, mean: "TIÊN (trước)", examples: [{ word: "先生", reading: "せんせい", mean: "thầy cô" }] },
      { char: "生", onyomi: "セイ / ショウ", kunyomi: "い・きる / う・まれる", strokes: 5, mean: "SINH (sinh sống)", examples: [{ word: "生活", reading: "せいかつ", mean: "sinh hoạt" }] }
    ],
    dialogue: {
      title: "Hội thoại: Lời chào tạm biệt và lời hứa tương lai",
      situation: "Học sinh cùng thầy giáo người Nhật chụp ảnh kỉ niệm ngày ra trường.",
      lines: [
        { speaker: "Học sinh", jp: "先生、四年間日本語を教えてくださって、本当にありがとうございました！", vi: "Thưa thầy, chúng em cảm ơn thầy rất nhiều vì đã tận tình dạy dỗ chúng em suốt 4 năm qua ạ!" },
        { speaker: "Thầy giáo", jp: "皆さん、卒業おめでとうございます。高校へ行っても日本語の勉強を続けてくださいね。", vi: "Chúc mừng các em đã tốt nghiệp. Lên cấp 3 các em hãy tiếp tục nuôi dưỡng niềm đam mê tiếng Nhật nhé." },
        { speaker: "Cả lớp", jp: "はい！ベトナムと日本の架け橋になれるようにがんばります！", vi: "Vâng ạ! Chúng em sẽ nỗ lực để trở thành những nhịp cầu hữu nghị kết nối Việt Nam và Nhật Bản!" }
      ]
    },
    culture: {
      title: "Góc văn hóa: Mối quan hệ hữu nghị và giao lưu thanh thiếu niên Việt Nam – Nhật Bản",
      content: "Quan hệ Việt Nam – Nhật Bản là 'Đối tác chiến lược toàn diện vì hòa bình và thịnh vượng tại châu Á và trên thế giới'. Việc học tiếng Nhật không chỉ giúp các em học sinh mở rộng cánh cửa học vấn, du học và cơ hội nghề nghiệp mà còn giúp các em trở thành những đại sứ văn hóa trẻ, thắt chặt thêm tình bạn tốt đẹp giữa nhân dân hai nước.",
      comparison: "Học sinh Việt Nam học tiếng Nhật tự tin mang bản sắc văn hóa Việt Nam đến với bạn bè quốc tế."
    },
    quiz: [
      {
        q: "Từ '架け橋 (かけはし)' mang ý nghĩa biểu tượng gì?",
        options: [
          "A. Cây cầu bắc qua sông",
          "B. Nhịp cầu hữu nghị kết nối hai quốc gia",
          "C. Con đường đi bộ",
          "D. Tòa nhà cao tầng"
        ],
        answer: 1,
        explain: "'架け橋' nghĩa bóng là nhịp cầu hữu nghị gắn kết hai đất nước, hai dân tộc."
      },
      {
        q: "Lời chúc tốt nghiệp trang trọng bằng tiếng Nhật là:",
        options: [
          "A. ご卒業おめでとうございます！",
          "B. お誕生日おめでとうございます！",
          "C. あけましておめでとうございます！",
          "D. ごちそうさまでした！"
        ],
        answer: 0,
        explain: "'ご卒業おめでとうございます' là lời chúc mừng tốt nghiệp chuẩn mực."
      },
      {
        q: "Chữ Hán nào dưới đây có nghĩa là 'nghiên cứu'?",
        options: ["A. 研", "B. 究", "C. Cả A và B ghép lại thành 研究", "D. 死"],
        answer: 2,
        explain: "Chữ NGHIÊN (研) và CỨU (究) ghép lại thành từ '研究 (nghiên cứu)'."
      },
      {
        q: "Để nói lời cảm ơn sâu sắc tới thầy cô khi ra trường, câu nói nào chân thành nhất?",
        options: [
          "A. 先生、いろいろ教えてくださってありがとうございました。",
          "B. 先生、さようなら。",
          "C. 先生、お元気ですか。",
          "D. 先生、すみません。"
        ],
        answer: 0,
        explain: "Lời tri ân sâu sắc: 'Cảm ơn thầy đã dạy dỗ em rất nhiều điều'."
      }
    ]
  }
];

// Bảng tra cứu nhanh 18 mẫu ngữ pháp Lớp 9 chuẩn SGK
const grammarSummaryTable = [
  { pattern: "N から Vています / Khoảng thời gian + Vています", functionVi: "Bắt đầu từ mốc nào / đã làm bao lâu và vẫn tiếp tục", example: "小学生のときから英語を勉強しています。" },
  { pattern: "Vてから", functionVi: "Sau khi làm A thì làm B", example: "ベトナムに来てから、ベトナム語を勉強しています。" },
  { pattern: "V khả năng + と思います", functionVi: "Nêu suy nghĩ rằng mình hoặc ai đó có thể làm gì", example: "漢字を覚えるのがむずかしいと思います。" },
  { pattern: "Vるのが + むずかしい／楽しい", functionVi: "Danh từ hóa động từ (việc làm gì đó thì khó/vui)", example: "外国の人と話すのが楽しいです。" },
  { pattern: "Vてほしいです", functionVi: "Mong muốn người khác làm việc gì cho mình", example: "予定を変えてほしいです。" },
  { pattern: "VたN / VているN", functionVi: "Mệnh đề động từ bổ nghĩa đứng trước danh từ", example: "みんなで撮った写真 / となりに座っている人" },
  { pattern: "どうしたんですか / 〜んです", functionVi: "Hỏi thăm khi có dấu hiệu lạ, giải thích lí do/tình huống", example: "さいふがないんです。" },
  { pattern: "Vたかもしれません", functionVi: "Phỏng đoán có thể đã làm gì trong quá khứ", example: "どこかでさいふを落としたかもしれません。" },
  { pattern: "Câu thường + ので", functionVi: "Nêu nguyên nhân, lí do khách quan và lịch sự", example: "近くにおいしい店があるので、そこへ行きませんか。" },
  { pattern: "Vる前に / Vた後で", functionVi: "Trình bày thứ tự trước - sau của hai hành động", example: "初詣に行く前に、おせちを食べます。" },
  { pattern: "N1 という N2", functionVi: "N2 có tên gọi là N1 / định nghĩa khái niệm", example: "「バイン・チュン」という伝統料理" },
  { pattern: "Câu thường + そうです / 〜によると", functionVi: "Thuật lại thông tin nghe/đọc được; 'theo nguồn tin...'", example: "ニュースによると、地震があったそうです。" },
  { pattern: "Vるために", functionVi: "Để thực hiện mục đích hành động có chủ ý", example: "被災地へ物資を送るために、お金を集めます。" },
  { pattern: "N1 は N2 に V-bị động (受身形)", functionVi: "Nêu người/vật chịu tác động; chỉ tác nhân bằng に", example: "先生にほめられました / 足を踏まれました。" },
  { pattern: "V (bỏ ます) + そうです", functionVi: "Phỏng đoán từ dấu hiệu trực giác: có vẻ sắp...", example: "空が暗いです。雨が降りそうです。" },
  { pattern: "N / Vている + みたいです", functionVi: "Có vẻ như... (suy đoán từ điều quan sát/biết được)", example: "イベントをしているみたいですね。" },
  { pattern: "Thể thường + かどうか", functionVi: "Liệu có... hay không (mệnh đề nghi vấn gián tiếp)", example: "高校に入れるかどうか心配です。" },
  { pattern: "〜ても", functionVi: "Dù / cho dù... thì vẫn...", example: "試験がむずかしくても、がんばります。" },
  { pattern: "Vるようになる / Vなくなる", functionVi: "Năng lực hoặc thói quen mới hình thành / chấm dứt", example: "日本語で話せるようになりました。" },
  { pattern: "Vようと思っています", functionVi: "Đang dự định / có ý định làm gì trong tương lai", example: "夏休みにプログラミングを習おうと思っています。" }
];

// Ghi chú ngữ pháp cần tránh nhầm lẫn (7 Cautions from prompt)
const grammarNotesTable = [
  { item: "1. Phân biệt SOUDESU truyền tin vs. phỏng đoán", note: "そうです truyền tin đứng sau câu thể thường (降るそうです = nghe nói trời mưa). そうです phỏng đoán đứng sau V bỏ ます (降りそうです = trời có vẻ sắp mưa)." },
  { item: "2. Quy tắc trước 前に và 後で", note: "Trước 前に LUÔN dùng thể từ điển (Vる前に). Trước 後で LUÔN dùng thể quá khứ (Vた後で)." },
  { item: "3. Cách dùng 〜んです đúng ngữ cảnh", note: "Dùng để giải thích hoặc làm rõ điều người nghe đang tò mò/quan tâm. Tránh lạm dụng trong câu trần thuật thông thường để không gây cảm giác nhấn mạnh quá mức." },
  { item: "4. Vị trí mệnh đề bổ nghĩa danh từ", note: "Mệnh đề bổ nghĩa LUÔN đứng trực tiếp trước danh từ (định ngữ): きのう食べたケーキ (chiếc bánh hôm qua đã ăn). Tuyệt đối không dùng đại từ quan hệ như tiếng Anh." },
  { item: "5. Trợ từ trong câu bị động", note: "Người chịu tác động là chủ đề (đi với は). Tác nhân thực hiện hành động đi với trợ từ に (先生にほめられました)." },
  { item: "6. Mệnh đề gián tiếp かどうか", note: "Biến câu hỏi Yes/No thành nội dung lồng ghép: 行きますか → 行くかどうか (liệu có đi hay không)." },
  { item: "7. Phân biệt ようになる vs. ようと思う", note: "Vるようになる diễn tả sự thay đổi năng lực/thói quen khách quan. Vようと思っています diễn tả ý chí dự định chủ quan của bản thân." }
];

// 57 Kanji Matrix for Grade 9
const kanjiMatrix = [
  // Bài 1 (5)
  { char: "林", onyomi: "リン", kunyomi: "はやし", mean: "LÂM (rừng thưa)", lesson: "Bài 1" },
  { char: "始", onyomi: "シ", kunyomi: "はじ・める", mean: "THỦY (bắt đầu)", lesson: "Bài 1" },
  { char: "思", onyomi: "シ", kunyomi: "おも・う", mean: "TƯ (suy nghĩ)", lesson: "Bài 1" },
  { char: "堂", onyomi: "ドウ", kunyomi: "-", mean: "ĐƯỜNG (nhà to, hội trường)", lesson: "Bài 1" },
  { char: "身", onyomi: "シン", kunyomi: "み", mean: "THÂN (bản thân)", lesson: "Bài 1" },
  // Bài 2 (5)
  { char: "集", onyomi: "シュウ", kunyomi: "あつ・める", mean: "TẬP (thu thập)", lesson: "Bài 2" },
  { char: "説", onyomi: "セツ", kunyomi: "と・く", mean: "THUYẾT (giải thích)", lesson: "Bài 2" },
  { char: "貸", onyomi: "タイ", kunyomi: "か・す", mean: "THẢI (cho mượn)", lesson: "Bài 2" },
  { char: "待", onyomi: "タイ", kunyomi: "ま・つ", mean: "ĐÃI (chờ đợi)", lesson: "Bài 2" },
  { char: "助", onyomi: "ジョ", kunyomi: "たす・ける", mean: "TRỢ (giúp đỡ)", lesson: "Bài 2" },
  // Bài 3 (5)
  { char: "所", onyomi: "ショ", kunyomi: "ところ", mean: "SỞ (nơi chốn)", lesson: "Bài 3" },
  { char: "立", onyomi: "リツ", kunyomi: "た・つ", mean: "LẬP (đứng lên)", lesson: "Bài 3" },
  { char: "箱", onyomi: "-", kunyomi: "はこ", mean: "TƯƠNG (cái hộp)", lesson: "Bài 3" },
  { char: "知", onyomi: "チ", kunyomi: "し・る", mean: "TRI (hiểu biết)", lesson: "Bài 3" },
  { char: "終", onyomi: "シュウ", kunyomi: "お・わる", mean: "CHUNG (kết thúc)", lesson: "Bài 3" },
  // Bài 4 (5)
  { char: "点", onyomi: "テン", kunyomi: "-", mean: "ĐIỂM (điểm số)", lesson: "Bài 4" },
  { char: "試", onyomi: "シ", kunyomi: "ため・す", mean: "THÍ (thi cử, thử)", lesson: "Bài 4" },
  { char: "験", onyomi: "ケン", kunyomi: "-", mean: "NGHIỆM (kiểm tra)", lesson: "Bài 4" },
  { char: "安", onyomi: "アン", kunyomi: "やす・い", mean: "AN (yên tâm, rẻ)", lesson: "Bài 4" },
  { char: "員", onyomi: "イン", kunyomi: "-", mean: "VIÊN (nhân viên)", lesson: "Bài 4" },
  // Bài 5 (5)
  { char: "牛", onyomi: "ギュウ", kunyomi: "うし", mean: "NGƯU (con bò)", lesson: "Bài 5" },
  { char: "野", onyomi: "ヤ", kunyomi: "の", mean: "DÃ (cánh đồng)", lesson: "Bài 5" },
  { char: "暑", onyomi: "ショ", kunyomi: "あつ・い", mean: "THỬ (nóng nực)", lesson: "Bài 5" },
  { char: "電", onyomi: "デン", kunyomi: "-", mean: "ĐIỆN (điện lực)", lesson: "Bài 5" },
  { char: "池", onyomi: "チ", kunyomi: "いけ", mean: "TRÌ (cái ao)", lesson: "Bài 5" },
  // Bài 6 (6)
  { char: "別", onyomi: "ベツ", kunyomi: "わか・れる", mean: "BIỆT (đặc biệt, chia tay)", lesson: "Bài 6" },
  { char: "米", onyomi: "ベイ / マイ", kunyomi: "こめ", mean: "MỄ (gạo)", lesson: "Bài 6" },
  { char: "老", onyomi: "ロウ", kunyomi: "お・いる", mean: "LÃO (người già)", lesson: "Bài 6" },
  { char: "草", onyomi: "ソウ", kunyomi: "くさ", mean: "THẢO (cỏ)", lesson: "Bài 6" },
  { char: "王", onyomi: "オウ", kunyomi: "-", mean: "VƯƠNG (vua)", lesson: "Bài 6" },
  { char: "千", onyomi: "セン", kunyomi: "ち", mean: "THIÊN (nghìn)", lesson: "Bài 6" },
  // Bài 7 (6)
  { char: "心", onyomi: "シン", kunyomi: "こころ", mean: "TÂM (trái tim)", lesson: "Bài 7" },
  { char: "送", onyomi: "ソウ", kunyomi: "おく・る", mean: "TỐNG (gửi đi)", lesson: "Bài 7" },
  { char: "死", onyomi: "シ", kunyomi: "し・ぬ", mean: "TỬ (qua đời)", lesson: "Bài 7" },
  { char: "洋", onyomi: "ヨウ", kunyomi: "-", mean: "DƯƠNG (đại dương)", lesson: "Bài 7" },
  { char: "貧", onyomi: "ヒン", kunyomi: "まず・しい", mean: "BẦN (nghèo)", lesson: "Bài 7" },
  { char: "石", onyomi: "セキ", kunyomi: "いし", mean: "THẠCH (hòn đá)", lesson: "Bài 7" },
  // Bài 8 (5)
  { char: "質", onyomi: "シツ", kunyomi: "-", mean: "CHẤT (chất lượng)", lesson: "Bài 8" },
  { char: "問", onyomi: "モン", kunyomi: "と・う", mean: "VẤN (câu hỏi)", lesson: "Bài 8" },
  { char: "用", onyomi: "ヨウ", kunyomi: "もち・いる", mean: "DỤNG (sử dụng, việc)", lesson: "Bài 8" },
  { char: "止", onyomi: "シ", kunyomi: "と・まる", mean: "CHỈ (dừng lại)", lesson: "Bài 8" },
  { char: "良", onyomi: "リョウ", kunyomi: "よ・い", mean: "LƯƠNG (tốt lành)", lesson: "Bài 8" },
  // Bài 9 (5)
  { char: "事", onyomi: "ジ", kunyomi: "こと", mean: "SỰ (công việc)", lesson: "Bài 9" },
  { char: "工", onyomi: "コウ / ク", kunyomi: "-", mean: "CÔNG (công trình)", lesson: "Bài 9" },
  { char: "暗", onyomi: "アン", kunyomi: "くら・い", mean: "ÁM (tối tăm)", lesson: "Bài 9" },
  { char: "若", onyomi: "ジャク", kunyomi: "わか・い", mean: "NHƯỢC (trẻ tuổi)", lesson: "Bài 9" },
  { char: "界", onyomi: "カイ", kunyomi: "-", mean: "GIỚI (thế giới)", lesson: "Bài 9" },
  // Bài 10 (5)
  { char: "不", onyomi: "フ / ブ", kunyomi: "-", mean: "BẤT (không)", lesson: "Bài 10" },
  { char: "仕", onyomi: "シ", kunyomi: "つか・える", mean: "SĨ (phục vụ)", lesson: "Bài 10" },
  { char: "約", onyomi: "ヤク", kunyomi: "-", mean: "ƯỚC (ước hẹn)", lesson: "Bài 10" },
  { char: "答", onyomi: "トウ", kunyomi: "こた・える", mean: "ĐÁP (trả lời)", lesson: "Bài 10" },
  { char: "運", onyomi: "ウン", kunyomi: "はこ・ぶ", mean: "VẬN (vận chuyển, may mắn)", lesson: "Bài 10" },
  // Bài 11 (5)
  { char: "万", onyomi: "マン", kunyomi: "-", mean: "VẠN (mười nghìn)", lesson: "Bài 11" },
  { char: "力", onyomi: "リョク", kunyomi: "ちから", mean: "LỰC (sức lực)", lesson: "Bài 11" },
  { char: "研", onyomi: "ケン", kunyomi: "と・ぐ", mean: "NGHIÊN (nghiên cứu)", lesson: "Bài 11" },
  { char: "究", onyomi: "キュウ", kunyomi: "きわ・める", mean: "CỨU (tìm hiểu)", lesson: "Bài 11" },
  { char: "森", onyomi: "シン", kunyomi: "もり", mean: "SÂM (rừng rậm)", lesson: "Bài 11" }
];

module.exports = {
  lessonsPart2,
  grammarSummaryTable,
  grammarNotesTable,
  kanjiMatrix
};
