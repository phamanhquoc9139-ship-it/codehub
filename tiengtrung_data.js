// tiengtrung_data.js - Dữ liệu chi tiết Khóa học Tiếng Trung Lớp 5 (GDPT 2018)
// Trọn bộ 16 bài học qua 4 Chủ điểm (Tập 1 & Tập 2) + 25 câu hỏi Trạng Nguyên Hán Ngữ 5

const topics = [
  {
    id: 1,
    book: 1,
    name: "Chủ điểm 1: Em và bạn bè của em (我和我的朋友)",
    desc: "Làm quen, giới thiệu bạn mới, hỏi số điện thoại, sở thích cá nhân và nhờ giúp đỡ."
  },
  {
    id: 2,
    book: 1,
    name: "Chủ điểm 2: Em và trường học của em (我和我的学校)",
    desc: "Giới thiệu thầy cô giáo, các hoạt động học tập đang diễn ra, thời tiết và dự định đi chơi."
  },
  {
    id: 3,
    book: 2,
    name: "Chủ điểm 3: Em và gia đình em (我和我的家庭)",
    desc: "Sinh hoạt hằng ngày, mua sắm hoa quả và tiền tệ, thăm hỏi ông bà nội ngoại."
  },
  {
    id: 4,
    book: 2,
    name: "Chủ điểm 4: Em và thế giới quanh em (我和周围的世界)",
    desc: "Phương tiện giao thông, cách di chuyển, hỏi đường chỉ đường và mua sắm đồ dùng học tập tại siêu thị."
  }
];

const lessons = [
  // ==================== TẬP 1 – CHỦ ĐIỂM 1 ====================
  {
    num: 1,
    book: 1,
    topicId: 1,
    titleCn: "我想给你介绍我的新朋友",
    pinyin: "Wǒ xiǎng gěi nǐ jièshào wǒ de xīn péngyou",
    titleVi: "Mình muốn giới thiệu với cậu người bạn mới của mình",
    target: "Biết cách giới thiệu bạn mới cho người khác, hỏi và nói số điện thoại, hỏi thời gian rảnh và bày tỏ sự vui mừng khi làm quen bằng tiếng Trung.",
    vocab: [
      { cn: "给", py: "gěi", vi: "cho, đối với, với", type: "Giới từ / Động từ" },
      { cn: "介绍", py: "jièshào", vi: "giới thiệu", type: "Động từ" },
      { cn: "新", py: "xīn", vi: "mới", type: "Tính từ" },
      { cn: "朋友", py: "péngyou", vi: "bạn bè", type: "Danh từ" },
      { cn: "认识", py: "rènshi", vi: "quen biết, nhận biết", type: "Động từ" },
      { cn: "时间", py: "shíjiān", vi: "thời gian", type: "Danh từ" },
      { cn: "电话", py: "diànhuà", vi: "điện thoại", type: "Danh từ" },
      { cn: "电话号码", py: "diànhuà hàomǎ", vi: "số điện thoại", type: "Cụm danh từ" },
      { cn: "想", py: "xiǎng", vi: "muốn, nhớ, nghĩ", type: "Động từ năng nguyện" },
      { cn: "出发", py: "chūfā", vi: "xuất phát, khởi hành", type: "Động từ" },
      { cn: "告诉", py: "gàosu", vi: "nói cho biết, bảo", type: "Động từ" },
      { cn: "手机", py: "shǒujī", vi: "điện thoại di động", type: "Danh từ" }
    ],
    grammar: {
      title: "Cấu trúc giới thiệu: 给……介绍…… (Giới thiệu... cho ai) & Giới từ 给",
      desc: "Trong tiếng Trung, giới từ 给 (gěi) đứng trước đối tượng tiếp nhận hành động để diễn đạt 'làm gì cho ai / với ai'. Khi giới thiệu người hoặc vật cho ai đó, ta dùng: A + 给 + B + 介绍 + Đối tượng.",
      formula: "Chủ ngữ + 给 + Đối tượng + 介绍 + Người / Vật",
      examples: [
        { cn: "我给你介绍一个新同学。", py: "Wǒ gěi nǐ jièshào yí ge xīn tóngxué.", vi: "Mình giới thiệu với cậu một bạn học mới." },
        { cn: "你有时间给我打电话吗？", py: "Nǐ yǒu shíjiān gěi wǒ dǎ diànhuà ma?", vi: "Cậu có thời gian gọi điện thoại cho mình không?" }
      ]
    },
    dialogue: [
      { spk: "Lan", cn: "Minh, 你有时间吗？我想给你介绍我的新朋友。", py: "Minh, nǐ yǒu shíjiān ma? Wǒ xiǎng gěi nǐ jièshào wǒ de xīn péngyou.", vi: "Minh, cậu có thời gian không? Mình muốn giới thiệu với cậu người bạn mới của mình." },
      { spk: "Minh", cn: "太好了！他是谁？", py: "Tài hǎo le! Tā shì shéi?", vi: "Tuyệt quá! Cậu ấy là ai thế?" },
      { spk: "Lan", cn: "这是大卫，他是我们班的新同学。", py: "Zhè shì Dàwèi, tā shì wǒmen bān de xīn tóngxué.", vi: "Đây là David, cậu ấy là bạn học mới lớp mình." },
      { spk: "David", cn: "你好，Minh！很高兴认识你！你的电话号码是多少？", py: "Nǐ hǎo, Minh! Hěn gāoxìng rènshi nǐ! Nǐ de diànhuà hàomǎ shì duōshao?", vi: "Chào Minh! Rất vui được làm quen với cậu! Số điện thoại của cậu là bao nhiêu?" },
      { spk: "Minh", cn: "我也很高兴认识你！我的手机号码是 0988-123-456。", py: "Wǒ yě hěn gāoxìng rènshi nǐ! Wǒ de shǒujī hàomǎ shì líng-jiǔ-bā-bā-yāo-èr-sān-sì-wǔ-liù.", vi: "Mình cũng rất vui được làm quen với cậu! Số di động của mình là 0988-123-456." }
    ],
    phonetics: "Cách đọc số điện thoại trong tiếng Trung: Chữ số 1 thường đọc là yāo (thay vì yī) để tránh nhầm với số 7 (qī). Thanh nhẹ (轻声) trong từ '朋友' (péngyou), '认识' (rènshi).",
    hanziPractice: [
      { char: "给", pinyin: "gěi", strokes: 9, radical: "纟(Mịch)", meaning: "Cho, với", order: "Phẩy gập, phẩy gập, hất, phẩy, mác, ngang, sổ, ngang gập, ngang" },
      { char: "新", pinyin: "xīn", strokes: 13, radical: "斤(Cân)", meaning: "Mới", order: "Chấm, ngang, chấm, phẩy, ngang, sổ, phẩy, phẩy gập, phẩy, phẩy, ngang, ngang, sổ" },
      { char: "电", pinyin: "diàn", strokes: 5, radical: "丨(Sổ)", meaning: "Điện", order: "Sổ, ngang gập, ngang, ngang, sổ cong móc" }
    ],
    quiz: {
      q: "Để hỏi số điện thoại của bạn bè bằng tiếng Trung, câu chuẩn xác là:",
      options: [
        "你的电话号码是多少？",
        "你叫什么名字？",
        "你几岁了？",
        "你在哪儿买手机？"
      ],
      ans: 0,
      exp: "'你的电话号码是多少？' (Nǐ de diànhuà hàomǎ shì duōshao?) có nghĩa là Số điện thoại của bạn là bao nhiêu?"
    }
  },
  {
    num: 2,
    book: 1,
    topicId: 1,
    titleCn: "你的爱好是什么？",
    pinyin: "Nǐ de àihào shì shénme?",
    titleVi: "Sở thích của cậu là gì?",
    target: "Nói về các sở thích cá nhân (đọc sách, xem phim, vẽ tranh, đá bóng), diễn đạt cảm xúc cực độ với '太……了' và giải thích nguyên nhân - kết quả với '为什么……？因为……，所以……'.",
    vocab: [
      { cn: "爱好", py: "àihào", vi: "sở thích", type: "Danh từ" },
      { cn: "看书", py: "kànshū", vi: "đọc sách", type: "Động từ" },
      { cn: "看电影", py: "kàn diànyǐng", vi: "xem phim", type: "Động từ" },
      { cn: "画画儿", py: "huà huàr", vi: "vẽ tranh", type: "Động từ" },
      { cn: "踢足球", py: "tī zúqiú", vi: "đá bóng", type: "Động từ" },
      { cn: "游泳", py: "yóuyǒng", vi: "bơi lội", type: "Động từ" },
      { cn: "太……了", py: "tài... le", vi: "quá, lắm", type: "Phó từ biểu cảm" },
      { cn: "为什么", py: "wèishénme", vi: "tại sao, vì sao", type: "Đại từ nghi vấn" },
      { cn: "因为", py: "yīnwèi", vi: "bởi vì", type: "Liên từ" },
      { cn: "所以", py: "suǒyǐ", vi: "cho nên, vì vậy", type: "Liên từ" },
      { cn: "有意思", py: "yǒu yìsi", vi: "thú vị, hay", type: "Tính từ" },
      { cn: "运动", py: "yùndòng", vi: "thể thao, vận động", type: "Danh từ / Động từ" }
    ],
    grammar: {
      title: "Cấu trúc cảm thán 太……了 & Cặp liên từ nguyên nhân - kết quả 因为……所以……",
      desc: "1. '太 + Tính từ + 了': Diễn tả mức độ cao, biểu cảm khen ngợi hoặc phàn nàn (ví dụ: 太好了 - tốt quá rồi).\n2. '为什么……？': Dùng để hỏi nguyên nhân. Câu trả lời dùng '因为……，所以……' (Bởi vì... cho nên...).",
      formula: "太 + Tính từ + 了 | 因为 + [Nguyên nhân], 所以 + [Kết quả]",
      examples: [
        { cn: "踢足球太有意思了！", py: "Tī zúqiú tài yǒu yìsi le!", vi: "Đá bóng thú vị quá đi mất!" },
        { cn: "因为我喜欢运动，所以每天都跑步。", py: "Yīnwèi wǒ xǐhuan yùndòng, suǒyǐ měitiān dōu pǎobù.", vi: "Bởi vì mình thích thể thao, cho nên ngày nào cũng chạy bộ." }
      ]
    },
    dialogue: [
      { spk: "Đại Vệ", cn: "Minh, 你的爱好是什么？", py: "Minh, nǐ de àihào shì shénme?", vi: "Minh, sở thích của cậu là gì?" },
      { spk: "Minh", cn: "我喜欢看书和画画儿。你呢？", py: "Wǒ xǐhuan kànshū hé huà huàr. Nǐ ne?", vi: "Mình thích đọc sách và vẽ tranh. Còn cậu thì sao?" },
      { spk: "Đại Vệ", cn: "我最喜欢踢足球。踢足球太有意思了！", py: "Wǒ zuì xǐhuan tī zúqiú. Tī zúqiú tài yǒu yìsi le!", vi: "Mình thích nhất là đá bóng. Đá bóng thú vị quá đi!" },
      { spk: "Minh", cn: "你为什么喜欢踢足球？", py: "Nǐ wèishénme xǐhuan tī zúqiú?", vi: "Tại sao cậu lại thích đá bóng?" },
      { spk: "Đại Vệ", cn: "因为踢足球很健康，所以我和朋友们常去球场。", py: "Yīnwèi tī zúqiú hěn jiànkāng, suǒyǐ wǒ hé péngyoumen cháng qù qiúchǎng.", vi: "Bởi vì đá bóng rất khỏe mạnh, nên mình và các bạn thường ra sân bóng." }
    ],
    phonetics: "Âm cuốn lưỡi (儿化音) trong '画画儿' (huà huàr) - uốn đầu lưỡi lên khi phát âm vần 'ar'. Phân biệt âm bật hơi [tʰ] trong '太' (tài) và không bật hơi [t] trong '大' (dà).",
    hanziPractice: [
      { char: "爱", pinyin: "ài", strokes: 10, radical: "爫(Trảo)", meaning: "Yêu, thích", order: "Phẩy, chấm, chấm, phẩy, ngang phẩy, chấm, ngang gập cong móc, phẩy, mác" },
      { char: "画", pinyin: "huà", strokes: 8, radical: "田(Điền)", meaning: "Vẽ, bức tranh", order: "Ngang, sổ, ngang gập, ngang, sổ, ngang, ngang gập cong móc, ngang" },
      { char: "太", pinyin: "tài", strokes: 4, radical: "大(Đại)", meaning: "Quá, lắm", order: "Ngang, phẩy, mác, chấm" }
    ],
    quiz: {
      q: "Điền cặp liên từ thích hợp vào chỗ trống: '……我喜欢画画儿，……我想当画家。'",
      options: [
        "因为……所以……",
        "太……了……",
        "虽然……但是……",
        "要是……就……"
      ],
      ans: 0,
      exp: "'因为……所以……' (Bởi vì... cho nên...) diễn tả mối quan hệ nguyên nhân - kết quả: Bởi vì mình thích vẽ tranh, cho nên mình muốn làm họa sĩ."
    }
  },
  {
    num: 3,
    book: 1,
    topicId: 1,
    titleCn: "你能帮我吗？",
    pinyin: "Nǐ néng bāng wǒ ma?",
    titleVi: "Bạn có thể giúp mình không?",
    target: "Biết cách dùng động từ năng nguyện '能' (có thể), mẫu câu lịch sự '请' (mời/xin vui lòng) và câu hỏi chính phản '……不……？' để đề nghị, nhờ vả người khác giúp đỡ.",
    vocab: [
      { cn: "帮", py: "bāng", vi: "giúp, giúp đỡ", type: "Động từ" },
      { cn: "帮助", py: "bāngzhù", vi: "sự giúp đỡ / giúp đỡ", type: "Danh từ / Động từ" },
      { cn: "能", py: "néng", vi: "có thể (năng lực/hoàn cảnh)", type: "Động từ năng nguyện" },
      { cn: "可以", py: "kěyǐ", vi: "có thể (được phép)", type: "Động từ năng nguyện" },
      { cn: "请", py: "qǐng", vi: "mời, xin vui lòng", type: "Động từ lịch sự" },
      { cn: "借", py: "jiè", vi: "mượn, vay", type: "Động từ" },
      { cn: "铅笔", py: "qiānbǐ", vi: "bút chì", type: "Danh từ" },
      { cn: "橡皮", py: "xiàngpí", vi: "cục tẩy", type: "Danh từ" },
      { cn: "题", py: "tí", vi: "câu hỏi, bài tập", type: "Danh từ" },
      { cn: "难", py: "nán", vi: "khó", type: "Tính từ" },
      { cn: "没问题", py: "méi wèntí", vi: "không vấn đề gì", type: "Cụm cố định" },
      { cn: "谢谢", py: "xièxie", vi: "cảm ơn", type: "Động từ" }
    ],
    grammar: {
      title: "Câu hỏi chính phản (A不A?) & Mẫu câu cầu khiến lịch sự 请……",
      desc: "1. Câu hỏi chính phản ghép hình thức khẳng định và phủ định của vị ngữ: 'V + 不 + V ?' hoặc 'Adj + 不 + Adj ?' (ví dụ: 能不能 - có thể không, 好不好 - được không).\n2. Dùng '请' ở đầu câu để tạo lời mời hoặc nhờ cậy lịch sự: '请 + Động từ + Tân ngữ'.",
      formula: "Chủ ngữ + 能不能 / 会不会 / 好不好 + V...? | 请 + Bạn / Các bạn + Hành động",
      examples: [
        { cn: "这道题难不难？你能帮我吗？", py: "Zhè dào tí nán bu nán? Nǐ néng bāng wǒ ma?", vi: "Câu này có khó không? Cậu giúp mình được không?" },
        { cn: "请给我借一下橡皮，好吗？", py: "Qǐng gěi wǒ jiè yíxià xiàngpí, hǎo ma?", vi: "Xin vui lòng cho mình mượn cục tẩy một lát được không?" }
      ]
    },
    dialogue: [
      { spk: "Hoa", cn: "Lan, 这道汉语题太难了，你想不想看一看？", py: "Lan, zhè dào Hànyǔ tí tài nán le, nǐ xiǎng bu xiǎng kàn yí kàn?", vi: "Lan ơi, câu tiếng Trung này khó quá, cậu có muốn xem một chút không?" },
      { spk: "Lan", cn: "我看看。这道题不太难。", py: "Wǒ kànkan. Zhè dào tí bú tài nán.", vi: "Để mình xem nào. Câu này không khó lắm đâu." },
      { spk: "Hoa", cn: "你能帮我讲一讲吗？", py: "Nǐ néng bāng wǒ jiǎng yì jiǎng ma?", vi: "Cậu có thể giảng cho mình một chút được không?" },
      { spk: "Lan", cn: "没问题！请坐这儿，我们一起做。", py: "Méi wèntí! Qǐng zuò zhèr, wǒmen yìqǐ zuò.", vi: "Không vấn đề gì! Mời cậu ngồi đây, chúng mình cùng làm." },
      { spk: "Hoa", cn: "太感谢你了！", py: "Tài gǎnxiè nǐ le!", vi: "Cảm ơn cậu nhiều lắm!" }
    ],
    phonetics: "Biến điệu của '不' (bù): Khi đứng trước âm tiết mang thanh 4 thì đọc thành thanh 2 'bú' (ví dụ: 不太 bú tài). Trong câu hỏi chính phản '想不想' (xiǎng bu xiǎng), chữ '不' phát âm nhẹ và ngắn.",
    hanziPractice: [
      { char: "帮", pinyin: "bāng", strokes: 9, radical: "巾(Cân)", meaning: "Giúp", order: "Ngang, phẩy, ngang, ngang, phẩy, sổ, ngang gập gập phẩy, sổ, sổ" },
      { char: "能", pinyin: "néng", strokes: 10, radical: "月(Nguyệt)", meaning: "Có thể", order: "Phẩy, ngang gập câu, ngang, ngang, phẩy gập cong câu, phẩy, phẩy, phẩy gập cong câu, phẩy, phẩy" },
      { char: "请", pinyin: "qǐng", strokes: 10, radical: "讠(Ngôn)", meaning: "Mời", order: "Chấm, ngang gập hất, ngang, ngang, sổ, ngang, sổ, ngang gập câu, ngang, ngang" }
    ],
    quiz: {
      q: "Đáp lại lời nhờ giúp đỡ '你能帮我吗？' một cách nhiệt tình và thân thiện:",
      options: [
        "没问题，我很乐意！",
        "我不认识你。",
        "太难了，不行。",
        "明天不去学校。"
      ],
      ans: 0,
      exp: "'没问题，我很乐意！' (Méi wèntí, wǒ hěn lèyì!) có nghĩa là 'Không vấn đề gì, mình rất sẵn lòng!'."
    }
  },
  {
    num: 4,
    book: 1,
    topicId: 1,
    titleCn: "复习一：我和我的朋友",
    pinyin: "Fùxí yī: Wǒ hé wǒ de péngyou",
    titleVi: "Ôn tập 1: Em và bạn bè của em",
    isReview: true,
    target: "Củng cố toàn bộ từ vựng, mẫu câu và hội thoại từ Bài 1 đến Bài 3: Giới thiệu người khác, hỏi số điện thoại, sở thích thể thao, câu hỏi chính phản và nhờ giúp đỡ.",
    vocab: [
      { cn: "复习", py: "fùxí", vi: "ôn tập", type: "Động từ" },
      { cn: "大家", py: "dàjiā", vi: "mọi người", type: "Đại từ" },
      { cn: "同学", py: "tóngxué", vi: "bạn cùng học", type: "Danh từ" },
      { cn: "互相", py: "hùxiāng", vi: "lẫn nhau, cùng nhau", type: "Phó từ" },
      { cn: "快乐", py: "kuàilè", vi: "vui vẻ, hạnh phúc", type: "Tính từ" },
      { cn: "一起", py: "yìqǐ", vi: "cùng nhau", type: "Phó từ" }
    ],
    grammar: {
      title: "Tổng kết cụm cấu trúc Chủ điểm 1",
      desc: "1. A + 给 + B + 介绍 + C (A giới thiệu C cho B).\n2. 为什么……？因为……所以…… (Hỏi và trả lời nguyên nhân).\n3. 太 + Tính từ + 了 (Mức độ cao, biểu cảm).\n4. V/Adj + 不 + V/Adj (Câu hỏi chính phản).",
      formula: "Hệ thống mẫu câu giao tiếp cơ bản giữa bạn bè",
      examples: [
        { cn: "同学们互相帮助，大家都很快乐。", py: "Tóngxuémen hùxiāng bāngzhù, dàjiā dōu hěn kuàilè.", vi: "Các bạn học sinh giúp đỡ lẫn nhau, mọi người đều rất vui vẻ." }
      ]
    },
    dialogue: [
      { spk: "Minh", cn: "大家好！我给你们介绍，这是我的好朋友大卫。", py: "Dàjiā hǎo! Wǒ gěi nǐmen jièshào, zhè shì wǒ de hǎo péngyou Dàwèi.", vi: "Chào mọi người! Mình giới thiệu với các bạn, đây là bạn tốt của mình - David." },
      { spk: "Cả lớp", cn: "大卫，你好！很高兴认识你！", py: "Dàwèi, nǐ hǎo! Hěn gāoxìng rènshi nǐ!", vi: "Chào David! Rất vui được làm quen với cậu!" },
      { spk: "David", cn: "你们好！我的爱好是踢足球，你们周末想不想一起踢球？", py: "Nǐmen hǎo! Wǒ de àihào shì tī zúqiú, nǐmen zhōumò xiǎng bu xiǎng yìqǐ tī qiú?", vi: "Chào các bạn! Sở thích của mình là đá bóng, cuối tuần các bạn có muốn cùng đá bóng không?" },
      { spk: "Minh", cn: "太好了！周六下午见！", py: "Tài hǎo le! Zhōuliù xiàwǔ jiàn!", vi: "Tuyệt quá! Hẹn gặp chiều thứ Bảy nhé!" }
    ],
    phonetics: "Ôn tập 4 thanh điệu cơ bản (Thanh 1: bā, Thanh 2: bá, Thanh 3: bǎ, Thanh 4: bà) và thanh nhẹ. Quy tắc biến điệu hai thanh 3 đi liền nhau (ví dụ: '你好' nǐ hǎo đọc thành 'ní hǎo').",
    hanziPractice: [
      { char: "复", pinyin: "fù", strokes: 9, radical: "夂(Truy)", meaning: "Lại, ôn lại", order: "Phẩy, ngang, khẩu (sổ, ngang gập, ngang), phẩy gập cong móc, phẩy, mác" },
      { char: "习", pinyin: "xí", strokes: 3, radical: "乙(Ất)", meaning: "Học tập", order: "Gập móc, chấm, đề (hất)" },
      { char: "友", pinyin: "yǒu", strokes: 4, radical: "又(Hựu)", meaning: "Bạn bè", order: "Ngang, phẩy, ngang phẩy, mác" }
    ],
    quiz: {
      q: "Khi hai âm tiết cùng mang thanh 3 đi liền nhau (ví dụ: '你好'), âm tiết thứ nhất sẽ biến điệu như thế nào?",
      options: [
        "Đọc thành thanh 2",
        "Đọc thành thanh 1",
        "Đọc thành thanh 4",
        "Đọc thành thanh nhẹ"
      ],
      ans: 0,
      exp: "Quy tắc ngữ âm tiếng Trung: Hai thanh 3 đi liền nhau thì thanh 3 đầu tiên biến điệu đọc thành thanh 2 (nǐ hǎo -> ní hǎo)."
    }
  },

  // ==================== TẬP 1 – CHỦ ĐIỂM 2 ====================
  {
    num: 5,
    book: 1,
    topicId: 2,
    titleCn: "我们的汉语老师",
    pinyin: "Wǒmen de Hànyǔ lǎoshī",
    titleVi: "Giáo viên tiếng Trung Quốc của chúng mình",
    target: "Biết cách giới thiệu thầy cô giáo bộ môn, miêu tả tính cách và hoạt động giảng dạy, sử dụng cấu trúc '已经……了' (đã... rồi) để nói về sự việc đã diễn ra trong khoảng thời gian nhất định.",
    vocab: [
      { cn: "老师", py: "lǎoshī", vi: "thầy giáo, cô giáo", type: "Danh từ" },
      { cn: "汉语", py: "Hànyǔ", vi: "tiếng Trung Quốc, Hán ngữ", type: "Danh từ" },
      { cn: "教", py: "jiāo", vi: "dạy, giảng dạy", type: "Động từ" },
      { cn: "已经……了", py: "yǐjīng... le", vi: "đã... rồi", type: "Cấu trúc thời gian" },
      { cn: "年", py: "nián", vi: "năm", type: "Lượng từ / Danh từ" },
      { cn: "热情", py: "rèqíng", vi: "nhiệt tình", type: "Tính từ" },
      { cn: "认真", py: "rènzhēn", vi: "nghiêm túc, chăm chỉ", type: "Tính từ" },
      { cn: "生动", py: "shēngdòng", vi: "sinh động", type: "Tính từ" },
      { cn: "课", py: "kè", vi: "tiết học, bài học", type: "Danh từ" },
      { cn: "讲", py: "jiǎng", vi: "nói, giảng giải", type: "Động từ" },
      { cn: "故事", py: "gùshi", vi: "câu chuyện", type: "Danh từ" },
      { cn: "喜欢", py: "xǐhuan", vi: "thích", type: "Động từ" }
    ],
    grammar: {
      title: "Cấu trúc thời thái hoàn thành: 已经……了 (Đã... rồi)",
      desc: "'已经 (yǐjīng)' là phó từ chỉ hành động hoặc trạng thái đã xảy ra, hoàn tất hoặc đạt đến một mức độ nào đó; cuối câu thường đi kèm trợ từ ngữ khí '了 (le)'.",
      formula: "Chủ ngữ + 已经 + V / Thời gian / Trạng thái + 了",
      examples: [
        { cn: "王老师已经教我们两年汉语了。", py: "Wáng lǎoshī yǐjīng jiāo wǒmen liǎng nián Hànyǔ le.", vi: "Cô Vương đã dạy chúng mình tiếng Trung được 2 năm rồi." },
        { cn: "我已经做完今天的作业了。", py: "Wǒ yǐjīng zuò wán jīntiān de zuòyè le.", vi: "Mình đã làm xong bài tập hôm nay rồi." }
      ]
    },
    dialogue: [
      { spk: "Lan", cn: "Minh, 这是你们的汉语老师吗？", py: "Minh, zhè shì nǐmen de Hànyǔ lǎoshī ma?", vi: "Minh, đây là cô giáo dạy tiếng Trung của các cậu à?" },
      { spk: "Minh", cn: "对，这是王老师。她已经教我们两年了。", py: "Duì, zhè shì Wáng lǎoshī. Tā yǐjīng jiāo wǒmen liǎng nián le.", vi: "Đúng rồi, đây là cô Vương. Cô đã dạy lớp mình được hai năm rồi." },
      { spk: "Lan", cn: "王老师教得怎么样？", py: "Wáng lǎoshī jiāo de zěnmeyàng?", vi: "Cô Vương dạy thế nào?" },
      { spk: "Minh", cn: "王老师非常热情，课讲得很生动，大家都非常喜欢她！", py: "Wáng lǎoshī fēicháng rèqíng, kè jiǎng de hěn shēngdòng, dàjiā dōu fēicháng xǐhuan tā!", vi: "Cô Vương rất nhiệt tình, giảng bài rất sinh động, ai cũng vô cùng yêu mến cô!" }
    ],
    phonetics: "Phân biệt phụ âm đầu uốn lưỡi zh, ch, sh, r với phụ âm đầu z, c, s. Âm '师' (shī) và '生' (shēng) uốn lưỡi, khác với '四' (sì) răng khép thẳng.",
    hanziPractice: [
      { char: "老", pinyin: "lǎo", strokes: 6, radical: "老(Lão)", meaning: "Già, thầy", order: "Ngang, sổ, ngang, phẩy, phẩy gập, muôi" },
      { char: "师", pinyin: "shī", strokes: 6, radical: "巾(Cân)", meaning: "Thầy giáo", order: "Sổ gập, phẩy, ngang, sổ, ngang gập móc, sổ" },
      { char: "已", pinyin: "yǐ", strokes: 3, radical: "己(Kỷ)", meaning: "Đã", order: "Ngang gập, ngang, sổ cong móc (chú ý nét sổ hở nửa)" }
    ],
    quiz: {
      q: "Điền từ vào chỗ trống: '王老师……教了我们三年汉语……。'",
      options: [
        "已经……了",
        "正在……呢",
        "太……了",
        "要是……就"
      ],
      ans: 0,
      exp: "'已经……了' diễn đạt hành động đã diễn ra trong một khoảng thời gian: Cô Vương đã dạy chúng mình tiếng Trung được 3 năm rồi."
    }
  },
  {
    num: 6,
    book: 1,
    topicId: 2,
    titleCn: "我正在学汉语呢",
    pinyin: "Wǒ zhèngzài xué Hànyǔ ne",
    titleVi: "Mình đang học tiếng Trung Quốc",
    target: "Diễn đạt một hành động đang diễn ra tại thời điểm nói bằng phó từ '在 / 正在……呢' và giới từ công cụ '用' (dùng... để làm gì).",
    vocab: [
      { cn: "在 / 正在", py: "zài / zhèngzài", vi: "đang", type: "Phó từ" },
      { cn: "学", py: "xué", vi: "học", type: "Động từ" },
      { cn: "呢", py: "ne", vi: "nhé, đấy (trợ từ cuối câu)", type: "Trợ từ ngữ khí" },
      { cn: "用", py: "yòng", vi: "dùng, sử dụng", type: "Giới từ / Động từ" },
      { cn: "电脑", py: "diànnǎo", vi: "máy vi tính", type: "Danh từ" },
      { cn: "写", py: "xiě", vi: "viết", type: "Động từ" },
      { cn: "汉字", py: "Hànzì", vi: "chữ Hán", type: "Danh từ" },
      { cn: "听", py: "tīng", vi: "nghe", type: "Động từ" },
      { cn: "录音", py: "lùyīn", vi: "ghi âm / bản thu âm", type: "Danh từ / Động từ" },
      { cn: "读", py: "dú", vi: "đọc", type: "Động từ" },
      { cn: "课文", py: "kèwén", vi: "bài khóa, bài đọc", type: "Danh từ" },
      { cn: "现在", py: "xiànzài", vi: "bây giờ, hiện tại", type: "Danh từ thời gian" }
    ],
    grammar: {
      title: "Hành động tiếp diễn: 在 / 正在……呢 & Giới từ phương tiện: 用……",
      desc: "1. '正在 + Động từ (+ Tân ngữ) + 呢': Diễn tả hành động đang diễn ra (có thể giản lược thành '在' hoặc chỉ dùng '呢' cuối câu).\n2. '用 + Công cụ / Phương tiện + Động từ': Làm việc gì bằng phương tiện hoặc công cụ gì.",
      formula: "Chủ ngữ + (正/在/正在) + V + (Tân ngữ) + (呢) | Chủ ngữ + 用 + Công cụ + V",
      examples: [
        { cn: "大卫正在听汉语录音呢。", py: "Dàwèi zhèngzài tīng Hànyǔ lùyīn ne.", vi: "David đang nghe file ghi âm tiếng Trung đấy." },
        { cn: "我们用毛笔练习写汉字。", py: "Wǒmen yòng máobǐ liànxí xiě Hànzì.", vi: "Chúng mình dùng bút lông để luyện viết chữ Hán." }
      ]
    },
    dialogue: [
      { spk: "Mẹ", cn: "Minh, 你在做什么呢？", py: "Minh, nǐ zài zuò shénme ne?", vi: "Minh ơi, con đang làm gì đấy?" },
      { spk: "Minh", cn: "妈妈，我正在学汉语呢！", py: "Māma, wǒ zhèngzài xué Hànyǔ ne!", vi: "Mẹ ơi, con đang học tiếng Trung ạ!" },
      { spk: "Mẹ", cn: "你在看书还是在写字？", py: "Nǐ zài kànshū háishi zài xiězì?", vi: "Con đang đọc sách hay đang viết chữ?" },
      { spk: "Minh", cn: "我用电脑查生词，然后练习读课文。", py: "Wǒ yòng diànnǎo chá shēngcí, ránhòu liànxí dú kèwén.", vi: "Con dùng máy tính tra từ mới, sau đó luyện đọc bài khóa ạ." }
    ],
    phonetics: "Phân biệt phụ âm tắc xát thanh j, q, x với các nguyên âm hẹp i, ü. Chú ý nguyên âm ü khi đi với j, q, x thì bỏ hai dấu chấm trên đầu (nhưng vẫn đọc là [y]): '学习' (xuéxí).",
    hanziPractice: [
      { char: "正", pinyin: "zhèng", strokes: 5, radical: "止(Chỉ)", meaning: "Chính, đang", order: "Ngang, sổ, ngang, sổ, ngang" },
      { char: "用", pinyin: "yòng", strokes: 5, radical: "用(Dụng)", meaning: "Dùng", order: "Phẩy, ngang gập câu, ngang, ngang, sổ" },
      { char: "字", pinyin: "zì", strokes: 6, radical: "宀(Miên)", meaning: "Chữ", order: "Chấm, chấm, ngang móc, ngang gập cong móc, ngang" }
    ],
    quiz: {
      q: "Câu nào dưới đây diễn đạt chính xác hành động đang xảy ra tại thời điểm nói?",
      options: [
        "他正在听音乐呢。",
        "他已经听音乐了。",
        "他太喜欢听音乐了。",
        "他想去听音乐。"
      ],
      ans: 0,
      exp: "'正在……呢' là cấu trúc chỉ hành động đang diễn ra: Cậu ấy đang nghe nhạc đấy."
    }
  },
  {
    num: 7,
    book: 1,
    topicId: 2,
    titleCn: "要是不下雨，我们就去公园玩儿",
    pinyin: "Yàoshi bú xià yǔ, wǒmen jiù qù gōngyuán wánr",
    titleVi: "Nếu trời không mưa, nhà mình sẽ đi công viên chơi",
    target: "Nói về thời tiết, bày tỏ dự định và kế hoạch thông qua cấu trúc câu điều kiện giả định '要是……就……' và '如果……就……' (Nếu... thì...).",
    vocab: [
      { cn: "要是 / 如果", py: "yàoshi / rúguǒ", vi: "nếu, giả sử", type: "Liên từ" },
      { cn: "就", py: "jiù", vi: "thì, liền", type: "Phó từ" },
      { cn: "下雨", py: "xià yǔ", vi: "mưa, trời đổ mưa", type: "Động từ" },
      { cn: "晴天", py: "qíngtiān", vi: "ngày nắng, trời trong", type: "Danh từ" },
      { cn: "阴天", py: "yīntiān", vi: "ngày nhiều mây, râm mát", type: "Danh từ" },
      { cn: "刮风", py: "guā fēng", vi: "gió thổi", type: "Động từ" },
      { cn: "公园", py: "gōngyuán", vi: "công viên", type: "Danh từ" },
      { cn: "玩儿", py: "wánr", vi: "chơi", type: "Động từ" },
      { cn: "天气", py: "tiānqì", vi: "thời tiết", type: "Danh từ" },
      { cn: "冷", py: "lěng", vi: "lạnh", type: "Tính từ" },
      { cn: "热", py: "rè", vi: "nóng", type: "Tính từ" },
      { cn: "打算", py: "dǎsuàn", vi: "dự định, tính toán", type: "Động từ / Danh từ" }
    ],
    grammar: {
      title: "Câu điều kiện giả thuyết: 要是……就…… / 如果……就……",
      desc: "Trong tiếng Trung, để đưa ra điều kiện hoặc giả thiết xảy ra trong tương lai, phân câu thứ nhất dùng '要是' hoặc '如果', phân câu thứ hai dùng phó từ '就' trước động từ để chỉ kết quả tương ứng.",
      formula: "要是 / 如果 + [Điều kiện / Giả thiết], + (Chủ ngữ) + 就 + [Kết quả]",
      examples: [
        { cn: "要是明天天气好，我们就去踢足球。", py: "Yàoshi míngtiān tiānqì hǎo, wǒmen jiù qù tī zúqiú.", vi: "Nếu ngày mai thời tiết đẹp, chúng mình sẽ đi đá bóng." },
        { cn: "如果下大雨，我就在家里看书。", py: "Rúguǒ xià dàyǔ, wǒ jiù zài jiālǐ kànshū.", vi: "Nếu trời mưa to, mình sẽ ở nhà đọc sách." }
      ]
    },
    dialogue: [
      { spk: "Lan", cn: "Minh, 周末你有什么打算？", py: "Minh, zhōumò nǐ yǒu shénme dǎsuàn?", vi: "Minh ơi, cuối tuần này cậu có dự định gì không?" },
      { spk: "Minh", cn: "要是不下雨，我们全家就去公园玩儿。", py: "Yàoshi bú xià yǔ, wǒmen quánjiā jiù qù gōngyuán wánr.", vi: "Nếu trời không mưa, cả nhà mình sẽ đi công viên chơi." },
      { spk: "Lan", cn: "要是下雨呢？", py: "Yàoshi xià yǔ ne?", vi: "Còn nếu trời mưa thì sao?" },
      { spk: "Minh", cn: "要是下雨，我就在家用电脑看电影。你来我家玩儿吧！", py: "Yàoshi xià yǔ, wǒ jiù zài jiā yòng diànnǎo kàn diànyǐng. Nǐ lái wǒ jiā wánr ba!", vi: "Nếu trời mưa, mình sẽ ở nhà dùng máy tính xem phim. Cậu đến nhà mình chơi nhé!" }
    ],
    phonetics: "Phát âm thanh nhẹ trong từ '玩儿' (wánr - âm uốn lưỡi cuốn nhẹ), và trọng âm câu đặt vào từ kết quả đứng sau phó từ '就' (jiù).",
    hanziPractice: [
      { char: "如", pinyin: "rú", strokes: 6, radical: "女(Nữ)", meaning: "Như, nếu", order: "Phẩy chấm, phẩy, ngang, sổ, ngang gập, ngang" },
      { char: "雨", pinyin: "yǔ", strokes: 8, radical: "雨(Vũ)", meaning: "Mưa", order: "Ngang, sổ, ngang gập câu, sổ, chấm, chấm, chấm, chấm" },
      { char: "就", pinyin: "jiù", strokes: 12, radical: "尢(Uông)", meaning: "Thì, liền", order: "Chấm, ngang, khẩu, tiểu, ngang, phẩy, cong câu" }
    ],
    quiz: {
      q: "Chọn liên từ thích hợp điền vào chỗ trống: '……明天是晴天，我们……去爬山。'",
      options: [
        "如果……就……",
        "因为……所以……",
        "虽然……但是……",
        "不仅……而且……"
      ],
      ans: 0,
      exp: "'如果……就……' (Nếu... thì...) biểu thị giả thiết và kết quả tương ứng: Nếu ngày mai là ngày nắng, chúng mình sẽ đi leo núi."
    }
  },
  {
    num: 8,
    book: 1,
    topicId: 2,
    titleCn: "复习二：我和我的学校",
    pinyin: "Fùxí èr: Wǒ hé wǒ de xuéxiào",
    titleVi: "Ôn tập 2: Em và trường học của em",
    isReview: true,
    target: "Củng cố kiến thức từ Bài 5 đến Bài 7: Miêu tả giáo viên, thời gian đã học (已经……了), hành động đang tiếp diễn (正在……呢), và lập kế hoạch với câu điều kiện (要是……就……).",
    vocab: [
      { cn: "学校", py: "xuéxiào", vi: "trường học", type: "Danh từ" },
      { cn: "努力", py: "nǔlì", vi: "nỗ lực, cố gắng", type: "Tính từ / Động từ" },
      { cn: "进步", py: "jìnbù", vi: "tiến bộ", type: "Động từ / Tính từ" },
      { cn: "活动", py: "huódòng", vi: "hoạt động", type: "Danh từ" },
      { cn: "教室", py: "jiàoshì", vi: "phòng học", type: "Danh từ" },
      { cn: "操场", py: "cāochǎng", vi: "sân thể dục, sân trường", type: "Danh từ" }
    ],
    grammar: {
      title: "Tổng kết các cấu trúc ngữ pháp trọng tâm Chủ điểm 2",
      desc: "1. 已经 + V + Khoảng thời gian + 了 (Đã làm gì được bao lâu).\n2. 正在 + V + Tân ngữ + 呢 (Đang làm gì).\n3. 用 + Phương tiện + V (Làm gì bằng cái gì).\n4. 要是 / 如果……就…… (Nếu... thì...).",
      formula: "Tổng hợp các mẫu câu miêu tả hoạt động học tập và sinh hoạt tại trường",
      examples: [
        { cn: "我们已经学了八课汉语，大家都进步了。", py: "Wǒmen yǐjīng xué le bā kè Hànyǔ, dàjiā dōu jìnbù le.", vi: "Chúng mình đã học được 8 bài tiếng Trung, mọi người đều tiến bộ rồi." }
      ]
    },
    dialogue: [
      { spk: "David", cn: "Minh, 你们班同学正在教室做什么呢？", py: "Minh, nǐmen bān tóngxué zhèngzài jiàoshì zuò shénme ne?", vi: "Minh ơi, các bạn lớp cậu đang làm gì trong phòng học thế?" },
      { spk: "Minh", cn: "大家正在准备汉语歌唱比赛呢！", py: "Dàjiā zhèngzài zhǔnbèi Hànyǔ gēchàng bǐsài ne!", vi: "Mọi người đang chuẩn bị cho cuộc thi hát tiếng Trung đấy!" },
      { spk: "David", cn: "要是你们得了第一名，打算怎么庆祝？", py: "Yàoshi nǐmen dé le dì-yī míng, dǎsuàn zěnme qìngzhù?", vi: "Nếu các cậu đạt giải nhất thì dự định ăn mừng thế nào?" },
      { spk: "Minh", cn: "王老师说，要是我们拿了第一，她就请全班喝奶茶！", py: "Wáng lǎoshī shuō, yàoshi wǒmen ná le dì-yī, tā jiù qǐng quán bān hē nǎichá!", vi: "Cô Vương bảo, nếu chúng mình giành giải nhất, cô sẽ mời cả lớp uống trà sữa!" }
    ],
    phonetics: "Ôn tập và phân biệt các vận mẫu kép: ai, ei, ao, ou, an, en, ang, eng, ong. Chú ý luồng hơi khi phát âm vận mẫu mũi sau 'eng', 'ong'.",
    hanziPractice: [
      { char: "校", pinyin: "xiào", strokes: 10, radical: "木(Mộc)", meaning: "Trường", order: "Ngang, sổ, phẩy, chấm, chấm, ngang, phẩy, phẩy gập, phẩy, mác" },
      { char: "步", pinyin: "bù", strokes: 7, radical: "止(Chỉ)", meaning: "Bước, tiến bộ", order: "Sổ, ngang, sổ, ngang, phẩy, phẩy gập cong, chấm" },
      { char: "场", pinyin: "chǎng", strokes: 6, radical: "土(Thổ)", meaning: "Sân, bãi", order: "Ngang, sổ, hất, ngang gập câu, phẩy, phẩy" }
    ],
    quiz: {
      q: "Điền từ thích hợp vào câu: '同学们……操场踢足球呢。'",
      options: [
        "正在……在",
        "在……在",
        "正在……（省略）",
        "已经……了"
      ],
      ans: 2,
      exp: "'同学们正在操场踢足球呢' (Các bạn học sinh đang đá bóng ở sân trường đấy) sử dụng đúng cấu trúc tiếp diễn '正在……呢'."
    }
  },

  // ==================== TẬP 2 – CHỦ ĐIỂM 3 ====================
  {
    num: 9,
    book: 2,
    topicId: 3,
    titleCn: "下午你做什么？",
    pinyin: "Xiàwǔ nǐ zuò shénme?",
    titleVi: "Buổi chiều em làm gì?",
    target: "Kể về các sinh hoạt hằng ngày trong gia đình, các mốc thời gian trong ngày và sử dụng phó từ '又' (lại) cùng cấu trúc thời gian '……的时候' (lúc/khi...).",
    vocab: [
      { cn: "下午", py: "xiàwǔ", vi: "buổi chiều", type: "Danh từ thời gian" },
      { cn: "上午", py: "shàngwǔ", vi: "buổi sáng", type: "Danh từ thời gian" },
      { cn: "晚上", py: "wǎnshang", vi: "buổi tối", type: "Danh từ thời gian" },
      { cn: "又", py: "yòu", vi: "lại (hành động đã lặp lại)", type: "Phó từ" },
      { cn: "……的时候", py: "... de shíhou", vi: "lúc……, khi……", type: "Cụm thời gian" },
      { cn: "做家务", py: "zuò jiāwù", vi: "làm việc nhà", type: "Động từ" },
      { cn: "洗碗", py: "xǐ wǎn", vi: "rửa bát", type: "Động từ" },
      { cn: "扫地", py: "sǎo dì", vi: "quét nhà", type: "Động từ" },
      { cn: "打扫", py: "dǎsǎo", vi: "dọn dẹp", type: "Động từ" },
      { cn: "房间", py: "fángjiān", vi: "căn phòng", type: "Danh từ" },
      { cn: "做饭", py: "zuò fàn", vi: "nấu cơm", type: "Động từ" },
      { cn: "帮忙", py: "bāngmáng", vi: "giúp đỡ", type: "Động từ" }
    ],
    grammar: {
      title: "Phó từ lặp lại 又 & Cấu trúc thời điểm ……的时候",
      desc: "1. '又 (yòu)' biểu thị hành động hoặc tình huống lặp lại đã xảy ra trong quá khứ hoặc quy luật thường nhật (khác với '再' là hành động sẽ lặp lại trong tương lai).\n2. 'Động từ / Mệnh đề + 的时候': Biểu thị tại thời điểm hành động đó diễn ra.",
      formula: "Chủ ngữ + 又 + V + 了 | [Hành động / Sự việc] + 的时候，[Mệnh đề chính]",
      examples: [
        { cn: "今天下午他又帮妈妈做家务了。", py: "Jīntiān xiàwǔ tā yòu bāng māma zuò jiāwù le.", vi: "Chiều nay cậu ấy lại giúp mẹ làm việc nhà rồi." },
        { cn: "妈妈做饭的时候，我帮妈妈洗菜。", py: "Māma zuòfàn de shíhou, wǒ bāng māma xǐ cài.", vi: "Lúc mẹ nấu cơm, em giúp mẹ rửa rau." }
      ]
    },
    dialogue: [
      { spk: "Lan", cn: "Minh, 昨天下午你做什么了？", py: "Minh, zuótiān xiàwǔ nǐ zuò shénme le?", vi: "Minh ơi, chiều hôm qua cậu đã làm gì?" },
      { spk: "Minh", cn: "昨天下午我又帮爸爸妈妈打扫房间了。", py: "Zuótiān xiàwǔ wǒ yòu bāng bàba māma dǎsǎo fángjiān le.", vi: "Chiều hôm qua mình lại giúp bố mẹ dọn dẹp phòng ốc rồi." },
      { spk: "Lan", cn: "你真勤劳！你都做什么了？", py: "Nǐ zhēn qínláo! Nǐ dōu zuò shénme le?", vi: "Cậu chăm chỉ thật đấy! Cậu đã làm những việc gì?" },
      { spk: "Minh", cn: "妈妈做饭的时候，我扫地、洗碗。晚上我还复习了汉语。", py: "Māma zuòfàn de shíhou, wǒ sǎo dì, xǐ wǎn. Wǎnshang wǒ hái fùxí le Hànyǔ.", vi: "Lúc mẹ nấu cơm, mình quét nhà, rửa bát. Buổi tối mình còn ôn bài tiếng Trung nữa." }
    ],
    phonetics: "Phân biệt phát âm giữa '又' (yòu - thanh 4 dứt khoát) và '有' (yǒu - thanh 3 trầm xuống rồi lên). Trợ từ '的' trong '的时候' phát âm thanh nhẹ [de].",
    hanziPractice: [
      { char: "又", pinyin: "yòu", strokes: 2, radical: "又(Hựu)", meaning: "Lại", order: "Ngang phẩy, mác" },
      { char: "候", pinyin: "hòu", strokes: 10, radical: "亻(Nhân)", meaning: "Lúc, khí hậu", order: "Phẩy, sổ, sổ, ngang gập câu, phẩy, sổ gập, ngang, ngang, phẩy, mác" },
      { char: "房", pinyin: "fáng", strokes: 8, radical: "户(Hộ)", meaning: "Nhà, phòng", order: "Chấm, ngang gập, ngang, phẩy, ngang phẩy, ngang, ngang, sổ gập câu" }
    ],
    quiz: {
      q: "Điền cụm từ chỉ thời gian vào câu: '我写作业……，请不要大声说话。'",
      options: [
        "的时候",
        "已经……了",
        "正在……呢",
        "太……了"
      ],
      ans: 0,
      exp: "'我写作业的时候' (Lúc mình đang làm bài tập) dùng cấu trúc '……的时候' chỉ mốc thời gian của hành động."
    }
  },
  {
    num: 10,
    book: 2,
    topicId: 3,
    titleCn: "橙子多少钱一盒？",
    pinyin: "Chéngzi duōshao qián yì hé?",
    titleVi: "Cam bao nhiêu tiền một hộp?",
    target: "Thực hành mua bán hoa quả, hỏi giá tiền và số lượng với '多少钱' (bao nhiêu tiền), các đơn vị tiền tệ (块/元, 毛/角, 分) và phân biệt phó từ '有点儿' (hơi/hơi quá - tiêu cực) với '一点儿' (một chút - số lượng).",
    vocab: [
      { cn: "橙子", py: "chéngzi", vi: "quả cam", type: "Danh từ" },
      { cn: "多少钱", py: "duōshao qián", vi: "bao nhiêu tiền", type: "Cụm nghi vấn" },
      { cn: "盒", py: "hé", vi: "hộp", type: "Lượng từ" },
      { cn: "斤", py: "jīn", vi: "cân (nửa ký Trung Quốc = 500g)", type: "Lượng từ" },
      { cn: "块 / 元", py: "kuài / yuán", vi: "đồng (đơn vị tiền tệ)", type: "Lượng từ tiền tệ" },
      { cn: "毛 / 角", py: "máo / jiǎo", vi: "hào (1/10 đồng)", type: "Lượng từ tiền tệ" },
      { cn: "苹果", py: "píngguǒ", vi: "quả táo", type: "Danh từ" },
      { cn: "香蕉", py: "xiāngjiāo", vi: "quả chuối", type: "Danh từ" },
      { cn: "有点儿", py: "yǒudiǎnr", vi: "hơi, hơi có chút (phàn nàn)", type: "Phó từ" },
      { cn: "一点儿", py: "yìdiǎnr", vi: "một chút, một ít", type: "Cụm số lượng" },
      { cn: "贵", py: "guì", vi: "đắt", type: "Tính từ" },
      { cn: "便宜", py: "piányi", vi: "rẻ", type: "Tính từ" }
    ],
    grammar: {
      title: "Hỏi giá tiền 多少钱 & Phân biệt 有点儿 (hơi) vs 一点儿 (một chút)",
      desc: "1. Mẫu hỏi giá: 'Sản phẩm + 多少钱 + (Lượng từ)?' (ví dụ: 橙子多少钱一盒?).\n2. '有点儿 + Tính từ': Đứng trước tính từ biểu thị mức độ hơi quá, không vừa ý (ví dụ: 有点儿贵 - hơi đắt).\n3. 'Tính từ / Động từ + 一点儿': Đứng sau để chỉ mức độ nhỏ hoặc xin giảm bớt (ví dụ: 便宜一点儿 - rẻ hơn một chút).",
      formula: "Chủ ngữ + 多少钱 + Lượng từ? | 有点儿 + Adj | Adj + 一点儿",
      examples: [
        { cn: "这种橙子二十块钱一盒，有点儿贵。", py: "Zhè zhǒng chéngzi èrshí kuài qián yì hé, yǒudiǎnr guì.", vi: "Loại cam này 20 đồng một hộp, hơi đắt một chút." },
        { cn: "老板，能便宜一点儿吗？", py: "Lǎobǎn, néng piányi yìdiǎnr ma?", vi: "Ông chủ ơi, có thể rẻ hơn một chút được không?" }
      ]
    },
    dialogue: [
      { spk: "David", cn: "阿姨，请问橙子多少钱一盒？", py: "Āyí, qǐngwèn chéngzi duōshao qián yì hé?", vi: "Dì ơi, xin hỏi cam bao nhiêu tiền một hộp ạ?" },
      { spk: "Người bán", cn: "二十五块钱一盒，很新鲜！", py: "Èrshíwǔ kuài qián yì hé, hěn xīnxiān!", vi: "Hai mươi lăm đồng một hộp, tươi ngon lắm cháu!" },
      { spk: "David", cn: "有点儿贵，能便宜一点儿吗？", py: "Yǒudiǎnr guì, néng piányi yìdiǎnr ma?", vi: "Hơi đắt một chút ạ, có thể bớt rẻ hơn một chút được không dì?" },
      { spk: "Người bán", cn: "买两盒给你四十块，好不好？", py: "Mǎi liǎng hé gěi nǐ sìshí kuài, hǎo bu hǎo?", vi: "Mua 2 hộp dì để cho cháu 40 đồng, được không?" },
      { spk: "David", cn: "太好了！我买两盒，给您钱。", py: "Tài hǎo le! Wǒ mǎi liǎng hé, gěi nín qián.", vi: "Tuyệt quá ạ! Cháu mua hai hộp, cháu gửi tiền dì ạ." }
    ],
    phonetics: "Cách biến điệu của chữ '一' (yī): Đứng trước thanh 1, 2, 3 đọc thành thanh 4 'yì' (yì hé, yìdiǎnr); đứng trước thanh 4 đọc thành thanh 2 'yí' (yí kuài).",
    hanziPractice: [
      { char: "钱", pinyin: "qián", strokes: 10, radical: "钅(Kim)", meaning: "Tiền", order: "Phẩy, ngang, ngang, ngang, hất, ngang, ngang, sổ, mác, phẩy, chấm" },
      { char: "贵", pinyin: "guì", strokes: 9, radical: "贝(Bối)", meaning: "Đắt, quý", order: "Sổ, ngang gập, ngang, ngang, sổ, ngang, sổ, ngang gập, phẩy, chấm" },
      { char: "点", pinyin: "diǎn", strokes: 9, radical: "灬(Hỏa)", meaning: "Chút, điểm", order: "Sổ, ngang gập, ngang, sổ, ngang, chấm, chấm, chấm, chấm" }
    ],
    quiz: {
      q: "Điền từ đúng vào chỗ trống: '这件衣服很好看，但是……长，有没有短……的？'",
      options: [
        "有点儿……一点儿",
        "一点儿……有点儿",
        "太……了",
        "因为……所以"
      ],
      ans: 0,
      exp: "Quy tắc: '有点儿' đứng trước tính từ biểu thị phàn nàn (有点儿长 - hơi dài); '一点儿' đứng sau tính từ biểu thị sự biến đổi mức độ mong muốn (短一点儿 - ngắn hơn một chút)."
    }
  },
  {
    num: 11,
    book: 2,
    topicId: 3,
    titleCn: "我们上午去看爷爷奶奶",
    pinyin: "Wǒmen shàngwǔ qù kàn yéye nǎinai",
    titleVi: "Chúng con đi thăm ông bà nội vào buổi sáng",
    target: "Nói về các thành viên trong gia đình họ hàng (ông bà nội ngoại, cô chú bác), diễn đạt sự nhấn mạnh thời gian với cấu trúc '是……的 (1)' và từ láy tính từ dạng 'AA 的' (rực rỡ, vui tươi, đỏ au).",
    vocab: [
      { cn: "爷爷", py: "yéye", vi: "ông nội", type: "Danh từ" },
      { cn: "奶奶", py: "nǎinai", vi: "bà nội", type: "Danh từ" },
      { cn: "姥爷 / 外公", py: "lǎoye / wàigōng", vi: "ông ngoại", type: "Danh từ" },
      { cn: "姥姥 / 外婆", py: "lǎolao / wàipó", vi: "bà ngoại", type: "Danh từ" },
      { cn: "叔叔", py: "shūshu", vi: "chú", type: "Danh từ" },
      { cn: "阿姨", py: "āyí", vi: "cô, dì", type: "Danh từ" },
      { cn: "是……的", py: "shì... de", vi: "chính là... (nhấn mạnh)", type: "Cấu trúc nhấn mạnh" },
      { cn: "红红的", py: "hónghóng de", vi: "đỏ au, đỏ rực", type: "Tính từ láy AA" },
      { cn: "大大的", py: "dàdà de", vi: "to to, to tròn", type: "Tính từ láy AA" },
      { cn: "高兴", py: "gāoxìng", vi: "vui mừng", type: "Tính từ" },
      { cn: "带", py: "dài", vi: "mang theo, dẫn đi", type: "Động từ" },
      { cn: "礼物", py: "lǐwù", vi: "món quà", type: "Danh từ" }
    ],
    grammar: {
      title: "Cấu trúc nhấn mạnh thời gian 是……的 (1) & Tính từ láy dạng AA 的",
      desc: "1. '是……的': Nhấn mạnh thời gian diễn ra của một hành động đã xảy ra trong quá khứ. Cụm thời gian đặt giữa '是' và '的'.\n2. 'AA 的': Lặp lại tính từ đơn âm tiết để tăng mức độ sinh động, miêu tả đặc điểm dễ thương, nổi bật của sự vật.",
      formula: "Chủ ngữ + 是 + [Thời gian] + Động từ + 的 | Tính từ láy AA + 的 + Danh từ",
      examples: [
        { cn: "我们是上午八点出发去看爷爷奶奶的。", py: "Wǒmen shì shàngwǔ bā diǎn chūfā qù kàn yéye nǎinai de.", vi: "Chúng con xuất phát đi thăm ông bà nội chính là vào lúc 8 giờ sáng." },
        { cn: "桌子上放着红红的苹果。", py: "Zhuōzi shang fàngzhe hónghóng de píngguǒ.", vi: "Trên bàn đặt những quả táo đỏ au." }
      ]
    },
    dialogue: [
      { spk: "Bà nội", cn: "Minh, 你们是什么时候来的？", py: "Minh, nǐmen shì shénme shíhou lái de?", vi: "Minh à, bố mẹ và con đến từ lúc nào thế?" },
      { spk: "Minh", cn: "奶奶，我们是上午九点坐车来的！", py: "Nǎinai, wǒmen shì shàngwǔ jiǔ diǎn zuò chē lái de!", vi: "Bà nội ơi, cả nhà con đi xe đến lúc 9 giờ sáng đấy ạ!" },
      { spk: "Bà nội", cn: "哎呀，真乖！快尝尝奶奶买的红红的大草莓！", py: "Āiyā, zhēn guāi! Kuài chángchang nǎinai mǎi de hónghóng de dà cǎoméi!", vi: "Chà, ngoan quá! Mau nếm thử dâu tây đỏ au to đùng bà mới mua này!" },
      { spk: "Minh", cn: "谢谢奶奶！草莓甜甜的，太好吃了！", py: "Xièxie nǎinai! Cǎoméi tiántián de, tài hǎochī le!", vi: "Cháu cảm ơn bà! Dâu tây ngọt lịm, ngon quá bà ạ!" }
    ],
    phonetics: "Hiện tượng thanh nhẹ trong các từ xưng hô gia đình lặp lại: 爷爷 (yéye), 奶奶 (nǎinai), 叔叔 (shūshu), 妈妈 (māma). Âm tiết thứ hai đều đọc nhẹ và ngắn.",
    hanziPractice: [
      { char: "爷", pinyin: "yé", strokes: 6, radical: "父(Phụ)", meaning: "Ông", order: "Phẩy, chấm, phẩy, mác, ngang gập gập cong móc, sổ" },
      { char: "奶", pinyin: "nǎi", strokes: 5, radical: "女(Nữ)", meaning: "Bà, sữa", order: "Phẩy chấm, phẩy, ngang, ngang gập gập câu, phẩy" },
      { char: "红", pinyin: "hóng", strokes: 6, radical: "纟(Mịch)", meaning: "Đỏ", order: "Phẩy gập, phẩy gập, hất, ngang, sổ, ngang" }
    ],
    quiz: {
      q: "Câu nào dưới đây dùng đúng cấu trúc nhấn mạnh thời gian '是……的'?",
      options: [
        "我是昨天买这个礼物的。",
        "我正在买这个礼物的。",
        "我想买这个礼物的。",
        "我不买这个礼物的。"
      ],
      ans: 0,
      exp: "'我是昨天买这个礼物的' (Món quà này chính là tôi mua vào ngày hôm qua) nhấn mạnh thời gian diễn ra hành động trong quá khứ."
    }
  },
  {
    num: 12,
    book: 2,
    topicId: 3,
    titleCn: "复习三：我和我的家庭",
    pinyin: "Fùxí sān: Wǒ hé wǒ de jiātíng",
    titleVi: "Ôn tập 3: Em và gia đình em",
    isReview: true,
    target: "Củng cố kiến thức từ Bài 9 đến Bài 11: Việc nhà hằng ngày, mua sắm hoa quả và thanh toán tiền, thăm hỏi ông bà và các mẫu câu trọng tâm (又, ……的时候, 多少钱, 有点儿/一点儿, 是……的, AA的).",
    vocab: [
      { cn: "家庭", py: "jiātíng", vi: "gia đình", type: "Danh từ" },
      { cn: "幸福", py: "xìngfú", vi: "hạnh phúc", type: "Tính từ" },
      { cn: "亲切", py: "qīnqiè", vi: "thân thiết, ân cần", type: "Tính từ" },
      { cn: "周末", py: "zhōumò", vi: "cuối tuần", type: "Danh từ" },
      { cn: "准备", py: "zhǔnbèi", vi: "chuẩn bị", type: "Động từ" },
      { cn: "团聚", py: "tuánjù", vi: "đoàn tụ, quây quần", type: "Động từ" }
    ],
    grammar: {
      title: "Tổng hợp ngữ pháp Chủ điểm 3",
      desc: "1. 又 + V (Lặp lại việc nhà, thói quen sinh hoạt).\n2. ……的时候 (Thời điểm làm gì).\n3. 多少钱 + Lượng từ (Hỏi giá cả mua sắm).\n4. 有点儿 + Adj vs Adj + 一点儿.\n5. 是……的 (Nhấn mạnh thời gian quá khứ).\n6. Tính từ láy AA 的 (Miêu tả tính chất nổi bật).",
      formula: "Hệ thống hóa từ vựng và ngữ pháp về chủ đề Gia đình & Đời sống",
      examples: [
        { cn: "周末全家人团聚的时候，家里总是热热闹闹的。", py: "Zhōumò quán jiā rén tuánjù de shíhou, jiālǐ zǒngshì rèrènàonào de.", vi: "Lúc cuối tuần cả nhà quây quần đoàn tụ, trong nhà lúc nào cũng rộn ràng vui vẻ." }
      ]
    },
    dialogue: [
      { spk: "Minh", cn: "David, 周末你打算做什么？", py: "David, zhōumò nǐ dǎsuàn zuò shénme?", vi: "David, cuối tuần này cậu định làm gì?" },
      { spk: "David", cn: "我们家是周六上午去超市买东西的。我想买一些甜甜的水果。", py: "Wǒmen jiā shì zhōuliù shàngwǔ qù chāoshì mǎi dōngxi de. Wǒ xiǎng mǎi yìxiē tiántián de shuǐguǒ.", vi: "Nhà mình đi siêu thị mua đồ vào sáng thứ Bảy. Mình muốn mua một ít trái cây ngọt lịm." },
      { spk: "Minh", cn: "周六下午呢？", py: "Zhōuliù xiàwǔ ne?", vi: "Thế chiều thứ Bảy thì sao?" },
      { spk: "David", cn: "下午我又去爷爷家帮爷爷浇花儿。每次去爷爷都很高兴！", py: "Xiàwǔ wǒ yòu qù yéye jiā bāng yéye jiāo huār. Měicì qù yéye dōu hěn gāoxìng!", vi: "Buổi chiều mình lại sang nhà ông nội giúp ông tưới hoa. Lần nào sang ông cũng rất vui mừng!" }
    ],
    phonetics: "Luyện tập ngữ điệu câu hỏi có đại từ nghi vấn (多少钱, 什么时候) với ngữ điệu xuống ở cuối câu, khác với câu hỏi Yes/No với '吗' có ngữ điệu hơi nâng nhẹ.",
    hanziPractice: [
      { char: "福", pinyin: "fú", strokes: 13, radical: "礻(Thị)", meaning: "Phúc, may mắn", order: "Chấm, ngang phẩy, sổ, chấm, ngang, khẩu (ngang gập, ngang), điền" },
      { char: "聚", pinyin: "jù", strokes: 14, radical: "耳(Nhĩ)", meaning: "Tụ họp, đoàn tụ", order: "Ngang, sổ, sổ, ngang, ngang, hất, phẩy, ngang phẩy, mác, phẩy, phẩy, phẩy" },
      { char: "甜", pinyin: "tián", strokes: 11, radical: "甘(Cam)", meaning: "Ngọt", order: "Ngang, sổ, sổ, ngang, ngang, phẩy, ngang, ngang, sổ, phẩy, mác" }
    ],
    quiz: {
      q: "Cụm từ nào biểu thị tâm trạng phàn nàn 'hơi đắt một chút'?",
      options: [
        "有点儿贵",
        "贵一点儿",
        "太便宜了",
        "没有钱"
      ],
      ans: 0,
      exp: "'有点儿贵' (hơi đắt) dùng '有点儿' đứng trước tính từ biểu thị sự không hài lòng."
    }
  },

  // ==================== TẬP 2 – CHỦ ĐIỂM 4 ====================
  {
    num: 13,
    book: 2,
    topicId: 4,
    titleCn: "他们坐火车来的",
    pinyin: "Tāmen zuò huǒchē lái de",
    titleVi: "Họ đến bằng tàu hoả",
    target: "Nói về các phương tiện giao thông (máy bay, tàu hỏa, xe buýt, xe đạp), hỏi cách thức di chuyển bằng '怎么', cấu trúc nhấn mạnh phương thức '是……的 (2)' và khoảng cách '……离……'.",
    vocab: [
      { cn: "坐", py: "zuò", vi: "ngồi, đi (tàu, xe, máy bay)", type: "Động từ" },
      { cn: "骑", py: "qí", vi: "cưỡi, đạp (xe đạp, xe máy)", type: "Động từ" },
      { cn: "火车", py: "huǒchē", vi: "tàu hỏa", type: "Danh từ" },
      { cn: "飞机", py: "fēijī", vi: "máy bay", type: "Danh từ" },
      { cn: "公共汽车", py: "gōnggòng qìchē", vi: "xe buýt", type: "Danh từ" },
      { cn: "自行车", py: "zìxíngchē", vi: "xe đạp", type: "Danh từ" },
      { cn: "怎么", py: "zěnme", vi: "như thế nào, bằng cách nào", type: "Đại từ nghi vấn" },
      { cn: "离", py: "lí", vi: "cách (khoảng cách)", type: "Giới từ" },
      { cn: "远", py: "yuǎn", vi: "xa", type: "Tính từ" },
      { cn: "近", py: "jìn", vi: "gần", type: "Tính từ" },
      { cn: "分钟", py: "fēnzhōng", vi: "phút", type: "Lượng từ thời gian" },
      { cn: "小时", py: "xiǎoshí", vi: "giờ, tiếng đồng hồ", type: "Danh từ thời gian" }
    ],
    grammar: {
      title: "Hỏi cách thức 怎么 & Nhấn mạnh phương tiện 是……的 (2) & Giới từ khoảng cách 离",
      desc: "1. '怎么 + Động từ?': Hỏi cách thức di chuyển (ví dụ: 怎么去? - Đi bằng cách nào?).\n2. 'Chủ ngữ + 是 + Phương tiện + Đến/Đi + 的': Nhấn mạnh phương tiện di chuyển trong quá khứ.\n3. 'A + 离 + B + (不)远 / (不)近 / [Khoảng cách]': Diễn tả khoảng cách giữa hai địa điểm.",
      formula: "A 离 B 很远 / 很近 | 主语 + 是 + 坐/骑 + Phương tiện + 来/去 + 的",
      examples: [
        { cn: "他们是坐高铁来河内的。", py: "Tāmen shì zuò gāotiě lái Hénèi de.", vi: "Họ đến Hà Nội bằng tàu cao tốc đấy." },
        { cn: "我家离学校不远，骑自行车十分钟就到了。", py: "Wǒ jiā lí xuéxiào bù yuǎn, qí zìxíngchē shí fēnzhōng jiù dào le.", vi: "Nhà mình cách trường không xa, đạp xe 10 phút là tới rồi." }
      ]
    },
    dialogue: [
      { spk: "Lan", cn: "Minh, 你的中国朋友们怎么来河内的？", py: "Minh, nǐ de Zhōngguó péngyoumen zěnme lái Hénèi de?", vi: "Minh ơi, các bạn Trung Quốc của cậu đến Hà Nội bằng cách nào thế?" },
      { spk: "Minh", cn: "他们是坐火车来的。", py: "Tāmen shì zuò huǒchē lái de.", vi: "Các bạn ấy đi tàu hỏa đến đấy." },
      { spk: "Lan", cn: "火车站离你家远不远？", py: "Huǒchēzhàn lí nǐ jiā yuǎn bu yuǎn?", vi: "Ga tàu hỏa cách nhà cậu có xa không?" },
      { spk: "Minh", cn: "不太远，坐公共汽车十五分钟就到了。", py: "Bú tài yuǎn, zuò gōnggòng qìchē shíwǔ fēnzhōng jiù dào le.", vi: "Không xa lắm đâu, đi xe buýt 15 phút là đến nơi rồi." }
    ],
    phonetics: "Phân biệt động từ '坐' (zuò - ngồi các phương tiện có ghế kín như ô tô, máy bay, tàu hỏa) và '骑' (qí - cưỡi dạng cưỡi ngựa, xe đạp, xe máy có hai chân ở hai bên).",
    hanziPractice: [
      { char: "坐", pinyin: "zuò", strokes: 7, radical: "土(Thổ)", meaning: "Ngồi, đi xe", order: "Phẩy, chấm, phẩy, chấm, ngang, sổ, ngang (hai người ngồi trên đất)" },
      { char: "车", pinyin: "chē", strokes: 4, radical: "车(Xa)", meaning: "Xe", order: "Ngang, ngang gập gập phẩy, ngang, sổ" },
      { char: "离", pinyin: "lí", strokes: 10, radical: "亠(Đầu)", meaning: "Cách, rời", order: "Chấm, ngang, khẩu, phẩy gập cong câu, phẩy, phẩy, mác" }
    ],
    quiz: {
      q: "Để hỏi bạn đi đến trường bằng phương tiện gì, câu tiếng Trung chuẩn là:",
      options: [
        "你每天怎么去学校？",
        "你什么时候去学校？",
        "你在哪儿学汉语？",
        "学校里有什么？"
      ],
      ans: 0,
      exp: "'你每天怎么去学校？' dùng '怎么' đứng trước động từ '去' để hỏi về phương tiện và cách thức đi lại."
    }
  },
  {
    num: 14,
    book: 2,
    topicId: 4,
    titleCn: "你知道胡志明博物馆在哪儿吗？",
    pinyin: "Nǐ zhīdào Hú Zhìmíng Bówùguǎn zài nǎr ma?",
    titleVi: "Bạn biết Bảo tàng Hồ Chí Minh ở đâu không?",
    target: "Hỏi và chỉ đường trong thành phố, nắm vững các từ chỉ phương hướng (đông tây nam bắc, trước sau trái phải) và giới từ chỉ lộ trình '在' (ở), '从' (từ), '往' (hướng về phía).",
    vocab: [
      { cn: "知道", py: "zhīdào", vi: "biết", type: "Động từ" },
      { cn: "博物馆", py: "bówùguǎn", vi: "bảo tàng", type: "Danh từ" },
      { cn: "在哪儿", py: "zài nǎr", vi: "ở đâu", type: "Cụm nghi vấn" },
      { cn: "从", py: "cóng", vi: "từ (điểm xuất phát)", type: "Giới từ" },
      { cn: "往", py: "wǎng", vi: "hướng về, quẹo về", type: "Giới từ" },
      { cn: "拐 / 转", py: "guǎi / zhuǎn", vi: "rẽ, quẹo", type: "Động từ" },
      { cn: "左", py: "zuǒ", vi: "bên trái", type: "Danh từ phương vị" },
      { cn: "右", py: "yòu", vi: "bên phải", type: "Danh từ phương vị" },
      { cn: "前", py: "qián", vi: "phía trước", type: "Danh từ phương vị" },
      { cn: "后", py: "hòu", vi: "phía sau", type: "Danh từ phương vị" },
      { cn: "一直走", py: "yìzhí zǒu", vi: "đi thẳng", type: "Cụm động từ" },
      { cn: "十字路口", py: "shízì lùkǒu", vi: "ngã tư đường", type: "Danh từ" }
    ],
    grammar: {
      title: "Hỏi đường và chỉ đường với 从……往……拐 & Giới từ 往 (hướng về)",
      desc: "1. '请问，[Địa điểm] + 在哪儿？': Mẫu câu hỏi đường lịch sự nhất.\n2. '从 + Địa điểm xuất phát + 往 + Hướng + Động từ': Chỉ lộ trình di chuyển (ví dụ: 从这儿往前走 - Từ đây đi thẳng về phía trước; 往右拐 - rẽ phải).",
      formula: "请问 + [Địa điểm] + 在哪儿？ | 从 + [A] + 往 + [Hướng] + 走/拐",
      examples: [
        { cn: "从这个十字路口往右拐，就是胡志明博物馆。", py: "Cóng zhè ge shízì lùkǒu wǎng yòu guǎi, jiù shì Hú Zhìmíng Bówùguǎn.", vi: "Từ ngã tư này rẽ về bên phải là đến Bảo tàng Hồ Chí Minh." },
        { cn: "一直往前走，银行就在超市对面。", py: "Yìzhí wǎng qián zǒu, yínháng jiù zài chāoshì duìmiàn.", vi: "Đi thẳng về phía trước, ngân hàng nằm ngay đối diện siêu thị." }
      ]
    },
    dialogue: [
      { spk: "Du khách", cn: "小朋友，你好！请问胡志明博物馆在哪儿？", py: "Xiǎopéngyou, nǐ hǎo! Qǐngwèn Hú Zhìmíng Bówùguǎn zài nǎr?", vi: "Cháu nhỏ ơi chào cháu! Cho chú hỏi Bảo tàng Hồ Chí Minh ở đâu vậy?" },
      { spk: "Minh", cn: "叔叔好！您从这儿一直往前走，到十字路口往左拐。", py: "Shūshu hǎo! Nín cóng zhèr yìzhí wǎng qián zǒu, dào shízì lùkǒu wǎng zuǒ guǎi.", vi: "Cháu chào chú! Chú từ đây cứ đi thẳng về phía trước, đến ngã tư thì rẽ trái ạ." },
      { spk: "Du khách", cn: "远不远？需要走多长时间？", py: "Yuǎn bu yuǎn? Xūyào zǒu duō cháng shíjiān?", vi: "Có xa không cháu? Cần đi bộ bao lâu?" },
      { spk: "Minh", cn: "很近，走五分钟就到了。就在巴亭广场旁边。", py: "Hěn jìn, zǒu wǔ fēnzhōng jiù dào le. Jiù zài Bātíng Guǎngchǎng pángbiān.", vi: "Gần lắm chú ạ, đi bộ 5 phút là tới nơi rồi. Ngay bên cạnh Quảng trường Ba Đình ạ." },
      { spk: "Du khách", cn: "太感谢你了，小朋友！", py: "Tài gǎnxiè nǐ le, xiǎopéngyou!", vi: "Cảm ơn cháu nhiều nhé, cháu ngoan quá!" }
    ],
    phonetics: "Phân biệt từ hỏi nơi chốn '哪儿' (nǎr - có âm uốn lưỡi '儿') với từ chỉ đại từ '那儿' (nàr - ở đằng kia, thanh 4).",
    hanziPractice: [
      { char: "往", pinyin: "wǎng", strokes: 8, radical: "彳(Xích)", meaning: "Hướng về, đi", order: "Phẩy, phẩy, sổ, chấm, ngang, sổ, ngang, ngang" },
      { char: "左", pinyin: "zuǒ", strokes: 5, radical: "工(Công)", meaning: "Bên trái", order: "Ngang, phẩy, ngang, sổ, ngang" },
      { char: "右", pinyin: "yòu", strokes: 5, radical: "口(Khẩu)", meaning: "Bên phải", order: "Ngang, phẩy, sổ, ngang gập, ngang" }
    ],
    quiz: {
      q: "Cụm từ chỉ đường '一直往前走，往右拐' có nghĩa là:",
      options: [
        "Đi thẳng về phía trước, rồi rẽ phải",
        "Đi lùi về phía sau, rồi rẽ trái",
        "Rẽ trái ngay tại ngã ba",
        "Dừng lại ở trạm xe buýt"
      ],
      ans: 0,
      exp: "'一直往前走' (Đi thẳng về phía trước) + '往右拐' (rẽ phải)."
    }
  },
  {
    num: 15,
    book: 2,
    topicId: 4,
    titleCn: "这个书包是在超市买的",
    pinyin: "Zhè ge shūbāo shì zài chāoshì mǎi de",
    titleVi: "Chiếc cặp này mua ở siêu thị",
    target: "Nói về đồ dùng cá nhân, mua sắm đồ dùng học tập, cấu trúc nhấn mạnh địa điểm '是……的 (3)' và động từ năng nguyện '会' chỉ khả năng qua rèn luyện hoặc phỏng đoán.",
    vocab: [
      { cn: "书包", py: "shūbāo", vi: "cặp sách, ba lô", type: "Danh từ" },
      { cn: "超市", py: "chāoshì", vi: "siêu thị", type: "Danh từ" },
      { cn: "买", py: "mǎi", vi: "mua", type: "Động từ" },
      { cn: "卖", py: "mài", vi: "bán", type: "Động từ" },
      { cn: "是……的", py: "shì... de", vi: "chính là... (nhấn mạnh địa điểm)", type: "Cấu trúc nhấn mạnh" },
      { cn: "会", py: "huì", vi: "biết (qua học tập) / sẽ", type: "Động từ năng nguyện" },
      { cn: "文具", py: "wénjù", vi: "văn phòng phẩm, đồ dùng học tập", type: "Danh từ" },
      { cn: "颜色", py: "yánsè", vi: "màu sắc", type: "Danh từ" },
      { cn: "漂亮", py: "piàoliang", vi: "xinh đẹp, đẹp mắt", type: "Tính từ" },
      { cn: "质量", py: "zhìliàng", vi: "chất lượng", type: "Danh từ" },
      { cn: "商场", py: "shāngchǎng", vi: "trung tâm thương mại", type: "Danh từ" },
      { cn: "结实", py: "jiēshi", vi: "chắc chắn, bền chắc", type: "Tính từ" }
    ],
    grammar: {
      title: "Nhấn mạnh địa điểm với 是……的 (3) & Động từ năng nguyện 会",
      desc: "1. 'Chủ ngữ + 是 + Tại địa điểm + Động từ + 的': Dùng để nhấn mạnh nơi chốn diễn ra hành động (hành động đã hoàn thành trong quá khứ).\n2. '会 + Động từ': Diễn tả kỹ năng có được qua rèn luyện, học tập (ví dụ: 我会说汉语 - Mình biết nói tiếng Trung) hoặc sự việc chắc chắn sẽ xảy ra trong tương lai.",
      formula: "Chủ ngữ + 是在 + [Nơi chốn] + V + 的 | Chủ ngữ + 会 + V",
      examples: [
        { cn: "这个新书包是我和妈妈在超市买的。", py: "Zhè ge xīn shūbāo shì wǒ hé māma zài chāoshì mǎi de.", vi: "Chiếc cặp mới này là mình và mẹ mua ở siêu thị đấy." },
        { cn: "经过努力学习，他现在会写很多汉字了。", py: "Jīngguò nǔlì xuéxí, tā xiànzài huì xiě hěn duō Hànzì le.", vi: "Qua nỗ lực học tập, cậu ấy bây giờ đã biết viết rất nhiều chữ Hán rồi." }
      ]
    },
    dialogue: [
      { spk: "Lan", cn: "Minh, 你的蓝色新书包真漂亮！是在哪儿买的？", py: "Minh, nǐ de lánsè xīn shūbāo zhēn piàoliang! Shì zài nǎr mǎi de?", vi: "Minh ơi, chiếc cặp mới màu xanh dương của cậu đẹp thật đấy! Cậu mua ở đâu vậy?" },
      { spk: "Minh", cn: "谢谢！这个书包是在学校旁边的超市买的。", py: "Xièxie! Zhè ge shūbāo shì zài xuéxiào pángbiān de chāoshì mǎi de.", vi: "Cảm ơn cậu! Chiếc cặp này là mình mua ở siêu thị cạnh trường học đấy." },
      { spk: "Lan", cn: "书包很贵吗？", py: "Shūbāo hěn guì ma?", vi: "Cặp có đắt lắm không?" },
      { spk: "Minh", cn: "不太贵，而且非常结实。你会不会也想买一个？", py: "Bú tài guì, érqiě fēicháng jiēshi. Nǐ huì bu huì yě xiǎng mǎi yí ge?", vi: "Không đắt lắm, hơn nữa lại rất chắc chắn. Cậu có muốn mua một chiếc không?" },
      { spk: "Lan", cn: "下午放学后我也去超市看看！", py: "Xiàwǔ fàngxué hòu wǒ yě qù chāoshì kànkan!", vi: "Chiều tan học mình cũng sẽ ghé siêu thị xem thử!" }
    ],
    phonetics: "Phân biệt cặp từ đồng âm khác thanh điệu dễ nhầm: '买' (mǎi - thanh 3: mua) và '卖' (mài - thanh 4 dứt khoát: bán). Mẹo nhớ: Bán (卖) có thêm dấu thập 十 ở trên đầu.",
    hanziPractice: [
      { char: "包", pinyin: "bāo", strokes: 5, radical: "勹(Bao)", meaning: "Túi, cặp, gói", order: "Phẩy, ngang gập câu, phẩy, sổ gập, ngang gập câu" },
      { char: "超", pinyin: "chāo", strokes: 12, radical: "走(Tẩu)", meaning: "Siêu, vượt", order: "Ngang, sổ, ngang, sổ, ngang, phẩy, mác, khẩu, đao" },
      { char: "市", pinyin: "shì", strokes: 5, radical: "巾(Cân)", meaning: "Chợ, thành phố", order: "Chấm, ngang, sổ, ngang gập câu, sổ" }
    ],
    quiz: {
      q: "Câu nào dưới đây dùng đúng cấu trúc nhấn mạnh địa điểm mua hàng?",
      options: [
        "这本书是在书店买的。",
        "这本书正在书店买呢。",
        "这本书太在书店买了。",
        "这本书要是书店买。"
      ],
      ans: 0,
      exp: "'这本书是在书店买的' (Quyển sách này chính là mua ở hiệu sách) dùng cấu trúc nhấn mạnh địa điểm '是在……买的'."
    }
  },
  {
    num: 16,
    book: 2,
    topicId: 4,
    titleCn: "复习四：我和周围的世界",
    pinyin: "Fùxí sì: Wǒ hé zhōuwéi de shìjiè",
    titleVi: "Ôn tập 4: Em và thế giới quanh em",
    isReview: true,
    isFinalReview: true,
    target: "Tổng kết toàn diện 16 bài học chương trình Tiếng Trung Lớp 5 (Tập 1 & Tập 2): Củng cố kiến thức phương tiện giao thông, hỏi đường, mua sắm và 3 cấu trúc '是……的' (thời gian, phương tiện, địa điểm).",
    vocab: [
      { cn: "世界", py: "shìjiè", vi: "thế giới", type: "Danh từ" },
      { cn: "周围", py: "zhōuwéi", vi: "xung quanh", type: "Danh từ" },
      { cn: "旅行", py: "lǚxíng", vi: "du lịch", type: "Động từ / Danh từ" },
      { cn: "风景", py: "fēngjǐng", vi: "phong cảnh", type: "Danh từ" },
      { cn: "热情", py: "rèqíng", vi: "nhiệt tình, hiếu khách", type: "Tính từ" },
      { cn: "收获", py: "shōuhuò", vi: "thu hoạch, kết quả đạt được", type: "Danh từ" }
    ],
    grammar: {
      title: "Tổng hợp 3 chức năng cốt lõi của cấu trúc 是……的",
      desc: "Cấu trúc '是……的' được sử dụng phổ biến trong tiếng Trung để nhấn mạnh 3 khía cạnh của một sự việc đã xảy ra:\n1. Nhấn mạnh Thời gian: 我是上午来的 (Tôi đến vào buổi sáng).\n2. Nhấn mạnh Phương thức/Phương tiện: 他是坐飞机去的 (Cậu ấy đi bằng máy bay).\n3. Nhấn mạnh Địa điểm: 这件衣服是在北京买的 (Chiếc áo này mua ở Bắc Kinh).",
      formula: "Chủ ngữ + 是 + [Thời gian / Phương thức / Địa điểm] + V + 的",
      examples: [
        { cn: "我们是在小学五年级学会说流利汉语的。", py: "Wǒmen shì zài xiǎoxué wǔ niánjí xuéhuì shuō liúlì Hànyǔ de.", vi: "Chúng mình đã học nói tiếng Trung lưu loát chính là ở năm lớp 5 tiểu học." }
      ]
    },
    dialogue: [
      { spk: "Minh", cn: "David, 五年级马上就要结束了，你汉语学得真好！", py: "David, wǔ niánjí mǎshàng jiù yào jiéshù le, nǐ Hànyǔ xué de zhēn hǎo!", vi: "David ơi, năm học lớp 5 sắp kết thúc rồi, cậu học tiếng Trung giỏi thật đấy!" },
      { spk: "David", cn: "多亏了王老师的教导和大家的帮助。在越南生活我很快乐！", py: "Duōkuī le Wáng lǎoshī de jiàodǎo hé dàjiā de bāngzhù. Zài Yuènán shēnghuó wǒ hěn kuàilè!", vi: "Nhờ có sự chỉ bảo của cô Vương và sự giúp đỡ của các bạn. Sống ở Việt Nam mình rất vui!" },
      { spk: "Minh", cn: "暑假你有什么打算？", py: "Shǔjià nǐ yǒu shénme dǎsuàn?", vi: "Kỳ nghỉ hè cậu có dự định gì?" },
      { spk: "David", cn: "要是爸爸妈妈放假，我们全家就一起去下龙湾旅游！", py: "Yàoshi bàba māma fàngjià, wǒmen quánjiā jiù yìqǐ qù Xiàlóngwān lǚyóu!", vi: "Nếu bố mẹ được nghỉ, cả nhà mình sẽ cùng đi du lịch Vịnh Hạ Long!" }
    ],
    phonetics: "Tổng kết toàn bộ hệ thống ngữ âm Hán ngữ: 21 thanh mẫu (phụ âm đầu), 36 vận mẫu (nguyên âm), 4 thanh điệu chuẩn và quy tắc đặt dấu thanh điệu trên các nguyên âm a, o, e, i, u, ü (a > o > e > i/u).",
    hanziPractice: [
      { char: "世", pinyin: "shì", strokes: 5, radical: "一(Nhất)", meaning: "Đời, thế giới", order: "Ngang, sổ, sổ gập, sổ, ngang" },
      { char: "界", pinyin: "jiè", strokes: 9, radical: "田(Điền)", meaning: "Giới hạn, thế giới", order: "Sổ, ngang gập, ngang, sổ, ngang, phẩy, mác, phẩy, phẩy" },
      { char: "旅", pinyin: "lǚ", strokes: 10, radical: "方(Phương)", meaning: "Du lịch, đi xa", order: "Chấm, ngang, ngang gập câu, phẩy, phẩy, ngang, phẩy, mác, phẩy, phẩy" }
    ],
    quiz: {
      q: "Cấu trúc '他是坐飞机去北京的' dùng '是……的' nhằm nhấn mạnh yếu tố nào?",
      options: [
        "Phương tiện di chuyển (bằng máy bay)",
        "Thời gian khởi hành (buổi sáng)",
        "Địa điểm mua vé (sân bay)",
        "Mục đích chuyến đi (du lịch)"
      ],
      ans: 0,
      exp: "'坐飞机' (đi bằng máy bay) đặt giữa '是' và '的' để nhấn mạnh phương tiện di chuyển."
    }
  }
];

// 25 câu hỏi trắc nghiệm Hội thi Trạng Nguyên Hán Ngữ Lớp 5 (60:00)
const trangNguyenChineseQuizzes = [
  {
    q: "Câu nào dưới đây dùng đúng mẫu câu giới thiệu bạn mới cho người khác?",
    options: [
      "我给你介绍我的新朋友。",
      "我帮你的新朋友介绍。",
      "我想介绍你给朋友。",
      "我的新朋友叫给你。"
    ],
    ans: 0,
    exp: "Cấu trúc chuẩn là: A + 给 + B + 介绍 + Đối tượng (我给你介绍我的新朋友)."
  },
  {
    q: "Để hỏi số điện thoại của bạn, câu tiếng Trung nào sau đây chính xác nhất?",
    options: [
      "你的电话号码是多少？",
      "你的电话多少钱？",
      "你叫什么电话？",
      "你在哪儿买电话？"
    ],
    ans: 0,
    exp: "'你的电话号码是多少？' (Nǐ de diànhuà hàomǎ shì duōshao?) là mẫu câu chuẩn."
  },
  {
    q: "Từ '太……了' trong câu '踢足球太有意思了！' biểu thị ý nghĩa gì?",
    options: [
      "Cảm thán mức độ rất cao, khen ngợi",
      "Phủ định hoàn toàn",
      "Hỏi nguyên nhân",
      "Chỉ hành động trong tương lai"
    ],
    ans: 0,
    exp: "'太……了' diễn tả cảm xúc mức độ cao: Đá bóng thú vị quá đi mất!"
  },
  {
    q: "Điền cặp liên từ phù hợp: '……今天下大雨，……我们不去踢球。'",
    options: [
      "因为……所以……",
      "虽然……但是……",
      "要是……就……",
      "不仅……而且……"
    ],
    ans: 0,
    exp: "'因为……所以……' (Bởi vì... cho nên...) chỉ mối quan hệ nguyên nhân - kết quả."
  },
  {
    q: "Câu hỏi chính phản đúng của câu '你想吃苹果吗？' là:",
    options: [
      "你想不想吃苹果？",
      "你吃不吃不想苹果？",
      "你是不是吃苹果吗？",
      "你很想吃苹果吗？"
    ],
    ans: 0,
    exp: "Hình thức chính phản của động từ '想' là '想不想' (Chủ ngữ + 想不想 + V + Tân ngữ?)."
  },
  {
    q: "Câu '王老师已经教我们两年了' có nghĩa là gì?",
    options: [
      "Cô Vương đã dạy chúng tôi được hai năm rồi.",
      "Cô Vương sắp dạy chúng tôi hai năm nữa.",
      "Cô Vương đang dạy chúng tôi hai năm.",
      "Cô Vương không dạy chúng tôi hai năm."
    ],
    ans: 0,
    exp: "'已经……了' biểu thị hành động đã diễn ra trong khoảng thời gian hai năm."
  },
  {
    q: "Chọn từ điền vào chỗ trống: '大卫正在用电脑……汉字呢。'",
    options: [
      "写",
      "听",
      "吃",
      "骑"
    ],
    ans: 0,
    exp: "Viết chữ Hán dùng động từ '写' (xiě Hànzì)."
  },
  {
    q: "Cấu trúc giả định '要是不下雨，我们就去公园' có nghĩa là:",
    options: [
      "Nếu trời không mưa, chúng mình sẽ đi công viên.",
      "Vì trời mưa, chúng mình không đi công viên.",
      "Mặc dù trời mưa, chúng mình vẫn đi công viên.",
      "Trời đang mưa to ở công viên."
    ],
    ans: 0,
    exp: "'要是……就……' tương đương với 'Nếu... thì...'."
  },
  {
    q: "Trong tiếng Trung, khi đọc số điện thoại, chữ số 1 thường được phát âm là gì?",
    options: [
      "yāo",
      "yī",
      "èr",
      "sān"
    ],
    ans: 0,
    exp: "Chữ số 1 trong số điện thoại, biển số nhà thường đọc là 'yāo' để tránh nhầm với số 7 (qī)."
  },
  {
    q: "Hành động lặp lại đã diễn ra trong quá khứ thường dùng phó từ nào?",
    options: [
      "又 (yòu)",
      "再 (zài)",
      "正在 (zhèngzài)",
      "将 (jiāng)"
    ],
    ans: 0,
    exp: "'又' dùng cho hành động đã lặp lại; '再' dùng cho hành động sẽ lặp lại trong tương lai."
  },
  {
    q: "Điền từ thích hợp vào câu: '妈妈做饭……，我帮妈妈洗菜。'",
    options: [
      "的时候",
      "已经……了",
      "太……了",
      "要是……就"
    ],
    ans: 0,
    exp: "'……的时候' biểu thị mốc thời gian: Lúc mẹ nấu cơm..."
  },
  {
    q: "Phân biệt '有点儿' và '一点儿': Câu nào sau đây đúng ngữ pháp?",
    options: [
      "这件衣服有点儿贵，能便宜一点儿吗？",
      "这件衣服一点儿贵，能便宜有点儿吗？",
      "这件衣服太一点儿贵了。",
      "这件衣服有点儿便宜一点儿。"
    ],
    ans: 0,
    exp: "'有点儿 + Tính từ' (hơi đắt) và 'Tính từ + 一点儿' (rẻ hơn một chút)."
  },
  {
    q: "Cụm từ '红红的苹果' sử dụng dạng từ láy nào?",
    options: [
      "Tính từ láy AA 的",
      "Động từ lặp lại AABB",
      "Danh từ kép",
      "Câu so sánh"
    ],
    ans: 0,
    exp: "'红红的' là dạng láy tính từ 'AA 的' miêu tả quả táo đỏ au, bắt mắt."
  },
  {
    q: "Đơn vị tiền tệ chính thức thông dụng trong khẩu ngữ tiếng Trung là gì?",
    options: [
      "块 (kuài)",
      "分 (fēn)",
      "米 (mǐ)",
      "斤 (jīn)"
    ],
    ans: 0,
    exp: "Trong khẩu ngữ, đồng tiền Trung Quốc thường gọi là '块' (hoặc '元' trong văn viết)."
  },
  {
    q: "Câu '他们是坐火车来的' dùng cấu trúc '是……的' để nhấn mạnh điều gì?",
    options: [
      "Phương thức / Phương tiện di chuyển",
      "Thời gian xuất phát",
      "Địa điểm mua vé",
      "Số lượng người đi"
    ],
    ans: 0,
    exp: "'坐火车' là phương tiện di chuyển được nhấn mạnh giữa '是' và '的'."
  },
  {
    q: "Phương tiện nào sau đây phải dùng động từ '骑' (cưỡi/đạp)?",
    options: [
      "自行车 (xe đạp)",
      "飞机 (máy bay)",
      "火车 (tàu hỏa)",
      "出租车 (xe taxi)"
    ],
    ans: 0,
    exp: "Xe đạp, xe máy dùng động từ '骑' (qí zìxíngchē), các phương tiện có buồng kín ngồi dùng '坐'."
  },
  {
    q: "Giới từ chỉ khoảng cách giữa hai địa điểm trong tiếng Trung là:",
    options: [
      "离 (lí)",
      "在 (zài)",
      "往 (wǎng)",
      "从 (cóng)"
    ],
    ans: 0,
    exp: "Cấu trúc khoảng cách: A + 离 + B + 很远 / 很近."
  },
  {
    q: "Cụm từ chỉ đường '一直往前走，往左拐' có nghĩa là gì?",
    options: [
      "Đi thẳng về phía trước, rẽ sang trái",
      "Đi lùi về phía sau, rẽ sang phải",
      "Đi thẳng về phía trước, rẽ sang phải",
      "Dừng lại ở ngã tư đường"
    ],
    ans: 0,
    exp: "'往前走' = đi về phía trước; '往左拐' = rẽ trái."
  },
  {
    q: "Khi mua hàng, '买' và '卖' khác nhau thế nào về thanh điệu và nghĩa?",
    options: [
      "买 (mǎi - thanh 3: Mua) / 卖 (mài - thanh 4: Bán)",
      "买 (mài - thanh 4: Bán) / 卖 (mǎi - thanh 3: Mua)",
      "Cả hai đều mang thanh 1 và có nghĩa giống nhau",
      "买 là thuê, 卖 là trả lại"
    ],
    ans: 0,
    exp: "买 (mǎi) là Mua (thanh 3), còn 卖 (mài) là Bán (thanh 4)."
  },
  {
    q: "Câu '这个书包是在超市买的' nhấn mạnh yếu tố nào?",
    options: [
      "Địa điểm mua sắm (ở siêu thị)",
      "Thời gian mua sắm",
      "Màu sắc chiếc cặp",
      "Giá tiền chiếc cặp"
    ],
    ans: 0,
    exp: "'在超市' (ở siêu thị) đặt giữa '是' và '的' để nhấn mạnh địa điểm mua hàng."
  },
  {
    q: "Nét cơ bản đầu tiên khi viết chữ Hán '十' (thập - số 10) là nét nào?",
    options: [
      "Nét ngang (Ngang trước sổ sau)",
      "Nét sổ",
      "Nét phẩy",
      "Nét mác"
    ],
    ans: 0,
    exp: "Quy tắc bút thuận cơ bản: Ngang trước sổ sau (先横后竖)."
  },
  {
    q: "Khi hai thanh 3 đi liền nhau (ví dụ: 你好 nǐ hǎo), thanh thứ nhất đọc thế nào?",
    options: [
      "Biến điệu đọc thành thanh 2 (ní hǎo)",
      "Đọc thành thanh 1 (nī hǎo)",
      "Đọc thành thanh 4 (nì hǎo)",
      "Giữ nguyên không đổi"
    ],
    ans: 0,
    exp: "Quy tắc biến điệu thanh 3: Hai thanh 3 đi liền nhau thì thanh thứ nhất biến đổi thành thanh 2."
  },
  {
    q: "Chữ '不' (bù) khi đứng trước một từ mang thanh 4 (ví dụ: 不对, 不大) sẽ biến điệu thành:",
    options: [
      "Thanh 2 (bú)",
      "Thanh 1 (bū)",
      "Thanh 3 (bǔ)",
      "Thanh nhẹ (bu)"
    ],
    ans: 0,
    exp: "Chữ '不' đứng trước âm tiết thanh 4 đọc thành thanh 2 (bú dùi, bú tài)."
  },
  {
    q: "Khẩu ngữ '没问题' (méi wèntí) thường dùng trong tình huống nào?",
    options: [
      "Đồng ý, nhận lời giúp đỡ người khác một cách vui vẻ",
      "Từ chối lời mời của bạn",
      "Khi làm vỡ đồ vật",
      "Khi chào tạm biệt ra về"
    ],
    ans: 0,
    exp: "'没问题' có nghĩa là 'Không vấn đề gì / Chuyện nhỏ!', dùng khi sẵn lòng giúp đỡ."
  },
  {
    q: "Đâu là biểu tượng văn hóa nổi tiếng của Trung Quốc được mệnh danh là 'Kỳ quan thế giới'?",
    options: [
      "Vạn Lý Trường Thành (万里长城)",
      "Tháp Eiffel (埃菲尔铁塔)",
      "Kim Tự Tháp (金字塔)",
      "Tượng Nữ thần Tự do"
    ],
    ans: 0,
    exp: "Vạn Lý Trường Thành (万里长城) là kỳ quan nổi tiếng của đất nước Trung Hoa."
  }
];

module.exports = {
  topics,
  lessons,
  trangNguyenChineseQuizzes
};
