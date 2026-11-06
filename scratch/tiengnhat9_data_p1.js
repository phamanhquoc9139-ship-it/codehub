// tiengnhat9_data_p1.js
// Data for Tiếng Nhật 9 - Part 1: Lessons 1 to 6 + Reviews 1 & 2

const lessonsPart1 = [
  // ==========================================
  // BÀI 1: 外国語の勉強 — HỌC NGOẠI NGỮ
  // ==========================================
  {
    id: "bai-1",
    lessonNum: "BÀI 1",
    title: "外国語の勉強",
    romaji: "Gaikokugo no benkyou",
    meaning: "Học ngoại ngữ",
    badge: "Chủ đề 1",
    goal: "Nói về trải nghiệm học ngoại ngữ, thời điểm bắt đầu, tần suất học, cảm nghĩ về điều khó/thú vị và những việc bản thân có thể làm được.",
    vocab: [
      { jp: "外国語", kana: "がいこくご", romaji: "gaikokugo", mean: "ngoại ngữ", type: "Danh từ" },
      { jp: "小学生", kana: "しょうがくせい", romaji: "shougakusei", mean: "học sinh tiểu học", type: "Danh từ" },
      { jp: "始める", kana: "はじめる", romaji: "hajimeru", mean: "bắt đầu", type: "Động từ nhóm 2" },
      { jp: "続ける", kana: "つづける", romaji: "tsuzukeru", mean: "tiếp tục, duy trì", type: "Động từ nhóm 2" },
      { jp: "やめる", kana: "やめる", romaji: "yameru", mean: "ngừng, bỏ dở", type: "Động từ nhóm 2" },
      { jp: "プログラミング", kana: "ぷろぐらみんぐ", romaji: "puroguramingu", mean: "lập trình máy tính", type: "Danh từ" },
      { jp: "楽器", kana: "がっき", romaji: "gakki", mean: "nhạc cụ", type: "Danh từ" },
      { jp: "覚える", kana: "おぼえる", romaji: "oboeru", mean: "ghi nhớ, học thuộc", type: "Động từ nhóm 2" },
      { jp: "話せる", kana: "はなせる", romaji: "hanaseru", mean: "có thể nói (thể khả năng)", type: "Động từ khả năng" },
      { jp: "楽しい", kana: "たのしい", romaji: "tanoshii", mean: "vui vẻ, thú vị", type: "Tính từ đuôi い" }
    ],
    grammar: [
      {
        pattern: "N から Vています",
        meaning: "Đã làm việc gì từ một mốc thời gian trong quá khứ và hiện tại vẫn đang tiếp tục",
        note: "Mốc thời gian thường là danh từ chỉ thời kì hoặc sự kiện (ví dụ: 小学生のとき - hồi tiểu học, 去年 - năm ngoái).",
        examples: [
          { jp: "小学生のときから英語を勉強しています。", vi: "Tôi học tiếng Anh từ hồi còn là học sinh tiểu học." },
          { jp: "子どものときからピアノを習っています。", vi: "Tôi đã học piano từ hồi còn nhỏ." }
        ]
      },
      {
        pattern: "Vてから",
        meaning: "Sau khi làm việc gì thì...",
        note: "Hành động sau diễn ra nối tiếp sau khi hành động trước đã hoàn thành.",
        examples: [
          { jp: "ベトナムに来てから、ベトナム語を勉強しています。", vi: "Sau khi đến Việt Nam, tôi học tiếng Việt." }
        ]
      },
      {
        pattern: "Khoảng thời gian + Vています",
        meaning: "Đã làm việc gì trong một khoảng thời gian và hiện vẫn đang tiếp tục làm",
        note: "Khoảng thời gian đi trực tiếp không cần trợ từ (六年間, 三か月, 二週間).",
        examples: [
          { jp: "六年間日本語を勉強しています。", vi: "Tôi đã học tiếng Nhật được 6 năm rồi." }
        ]
      },
      {
        pattern: "V thể từ điển + のが むずかしい／楽しい",
        meaning: "Việc làm gì đó thì khó / thú vị (Danh từ hóa động từ)",
        note: "Thêm trợ từ 'の' sau thể từ điển (Vる) để biến cụm động từ thành một danh từ làm chủ ngữ.",
        examples: [
          { jp: "漢字を覚えるのがむずかしいと思います。", vi: "Tôi nghĩ việc nhớ chữ Hán (Kanji) rất khó." },
          { jp: "外国の人と話すのが楽しいです。", vi: "Việc trò chuyện với người nước ngoài rất thú vị." }
        ]
      }
    ],
    kanji: [
      { char: "林", onyomi: "リン (rin)", kunyomi: "はやし (hayashi)", strokes: 8, mean: "Rừng thưa, rặng cây (LÂM)", examples: [{ word: "林", reading: "はやし", mean: "rừng cây nhỏ" }, { word: "森林", reading: "しんりん", mean: "rừng rậm" }] },
      { char: "始", onyomi: "シ (shi)", kunyomi: "はじ・める (haji-meru)", strokes: 8, mean: "Bắt đầu (THỦY)", examples: [{ word: "始まる", reading: "はじまる", mean: "bắt đầu (tự V)" }, { word: "年始", reading: "ねんし", mean: "đầu năm" }] },
      { char: "思", onyomi: "シ (shi)", kunyomi: "おも・う (omo-u)", strokes: 9, mean: "Nghĩ, suy nghĩ (TƯ)", examples: [{ word: "思う", reading: "おもう", mean: "nghĩ rằng" }, { word: "思い出", reading: "おもいで", mean: "kỉ niệm" }] },
      { char: "堂", onyomi: "ドウ (dou)", kunyomi: "-", strokes: 11, mean: "Tòa nhà lớn, hội trường (ĐƯỜNG)", examples: [{ word: "食堂", reading: "しょくどう", mean: "nhà ăn" }, { word: "講堂", reading: "こうどう", mean: "giảng đường" }] },
      { char: "身", onyomi: "シン (shin)", kunyomi: "み (mi)", strokes: 7, mean: "Bản thân, thân thể (THÂN)", examples: [{ word: "自分自身", reading: "じぶんじしん", mean: "bản thân mình" }, { word: "出身", reading: "しゅっしん", mean: "xuất thân, quê quán" }] }
    ],
    dialogue: {
      title: "Hội thoại: Bạn bắt đầu học tiếng Nhật từ khi nào?",
      situation: "Nam và bạn học sinh trao đổi người Nhật Tanaka nói chuyện về quá trình học ngoại ngữ tại trường.",
      lines: [
        { speaker: "Tanaka", jp: "ナムさんはいつから日本語を勉強していますか。", vi: "Bạn Nam học tiếng Nhật từ khi nào vậy?" },
        { speaker: "Nam", jp: "中学一年生のときから勉強しています。もう三年になります。", vi: "Tớ học từ hồi lớp 6 (năm nhất THCS). Đã được 3 năm rồi." },
        { speaker: "Tanaka", jp: "日本語はどうですか。話せますか。", vi: "Tiếng Nhật thế nào? Cậu nói được nhiều chưa?" },
        { speaker: "Nam", jp: "日常会話は少し話せます。でも、漢字を覚えるのがむずかしいと思います。", vi: "Hội thoại hàng ngày thì tớ nói được chút ít. Nhưng tớ nghĩ việc nhớ chữ Hán rất khó." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Giáo dục ngoại ngữ ở Nhật Bản",
      content: "Ở Nhật Bản, tiếng Anh là môn học ngoại ngữ bắt buộc phổ biến nhất từ bậc tiểu học lên THCS và THPT. Ngoài ra, nhiều trường THPT và đại học tại Nhật Bản cũng giảng dạy các ngôn ngữ châu Á như tiếng Trung, tiếng Hàn và tiếng Việt. Học sinh Nhật chú trọng cả 4 kĩ năng và các hoạt động câu lạc bộ giao lưu quốc tế.",
      comparison: "Ở Việt Nam, tiếng Anh là ngoại ngữ 1 phổ biến nhất, bên cạnh các ngoại ngữ như tiếng Nhật, tiếng Pháp, tiếng Đức, tiếng Hàn, tiếng Nga và tiếng Trung Quốc."
    },
    quiz: [
      {
        q: "Điền trợ từ thích hợp: '小学生のとき______ 英語を勉強しています。'",
        options: ["A. まで", "B. から", "C. に", "D. で"],
        answer: 1,
        explain: "Cấu trúc 'N から Vています' diễn tả mốc thời gian bắt đầu một hành động kéo dài đến nay ('từ hồi tiểu học')."
      },
      {
        q: "Chọn dạng đúng của động từ: '漢字を______ のがむずかしいです。'",
        options: ["A. 覚えます", "B. 覚える", "C. 覚えて", "D. 覚えた"],
        answer: 1,
        explain: "Cấu trúc danh từ hóa động từ 'Vる + のが + tính từ' yêu cầu động từ ở thể từ điển ('覚える')."
      },
      {
        q: "Chữ Hán '始' trong từ '始める' có nghĩa Hán Việt là gì?",
        options: ["A. THỦY (bắt đầu)", "B. TƯ (suy nghĩ)", "C. THÂN (bản thân)", "D. ĐƯỜNG (nhà to)"],
        answer: 0,
        explain: "'始' có âm Hán Việt là THỦY, nghĩa là bắt đầu, khởi đầu."
      },
      {
        q: "Khi muốn nói 'Tôi đã học tiếng Nhật được 3 năm rồi', câu nào đúng?",
        options: [
          "A. 三年間日本語を勉強しています。",
          "B. 三年間で日本語を勉強します。",
          "C. 三年間に日本語を勉強しました。",
          "D. 三年間から日本語を勉強しています。"
        ],
        answer: 0,
        explain: "Khoảng thời gian đi trực tiếp với Vています để nói về hành động kéo dài trong một khoảng thời gian và vẫn tiếp tục."
      }
    ]
  },

  // ==========================================
  // BÀI 2: 発表の準備 — CHUẨN BỊ BÀI PHÁT BIỂU
  // ==========================================
  {
    id: "bai-2",
    lessonNum: "BÀI 2",
    title: "発表の準備",
    romaji: "Happyou no junbi",
    meaning: "Chuẩn bị bài phát biểu/thuyết trình",
    badge: "Chủ đề 2",
    goal: "Nêu quan điểm trong làm việc nhóm; thảo luận phân công nhiệm vụ, chuẩn bị tài liệu/slide và đề nghị điều chỉnh lịch làm việc phù hợp.",
    vocab: [
      { jp: "発表", kana: "はっぴょう", romaji: "happyou", mean: "bài thuyết trình, phát biểu", type: "Danh từ / Động từ nhóm 3" },
      { jp: "準備", kana: "じゅんび", romaji: "junbi", mean: "sự chuẩn bị", type: "Danh từ / Động từ nhóm 3" },
      { jp: "集める", kana: "あつめる", romaji: "atsumeru", mean: "thu thập, gom lại", type: "Động từ nhóm 2" },
      { jp: "スライド", kana: "すらいど", romaji: "suraido", mean: "slide trình chiếu", type: "Danh từ" },
      { jp: "原稿", kana: "げんこう", romaji: "genkou", mean: "bản thảo bài viết/bài nói", type: "Danh từ" },
      { jp: "説明する", kana: "せつめいする", romaji: "setsumei suru", mean: "giải thích, thuyết minh", type: "Động từ nhóm 3" },
      { jp: "担当", kana: "たんとう", romaji: "tantou", mean: "đảm nhiệm, phụ trách", type: "Danh từ / Động từ nhóm 3" },
      { jp: "借りる", kana: "かりる", romaji: "kariru", mean: "mượn (từ ai)", type: "Động từ nhóm 2" },
      { jp: "予定", kana: "よてい", romaji: "yotei", mean: "dự định, lịch trình", type: "Danh từ" },
      { jp: "助ける", kana: "たすける", romaji: "tasukeru", mean: "giúp đỡ, tương trợ", type: "Động từ nhóm 2" }
    ],
    grammar: [
      {
        pattern: "Khả năng + と思います",
        meaning: "Nghĩ rằng / Dự đoán rằng có thể làm được việc gì",
        note: "Dùng để nêu ý kiến khiếm tốn, mềm mỏng trong thảo luận nhóm.",
        examples: [
          { jp: "父のパソコンが借りられると思います。", vi: "Tôi nghĩ là mình có thể mượn được máy tính của bố." },
          { jp: "明日までに資料が集められると思います。", vi: "Tôi nghĩ có thể thu thập đủ tài liệu trước ngày mai." }
        ]
      },
      {
        pattern: "〜けど",
        meaning: "Nhưng mà... / Về việc... (chuyển ý, mở lời lịch sự, thân mật)",
        note: "Đặt ở cuối mệnh đề mở đầu để giới thiệu chủ đề cần bàn luận.",
        examples: [
          { jp: "発表の準備ですけど、だれが何をしますか。", vi: "Về việc chuẩn bị bài thuyết trình, ai sẽ làm việc gì thế?" }
        ]
      },
      {
        pattern: "Vてほしいです",
        meaning: "Muốn ai đó làm việc gì cho mình / cho nhóm",
        note: "Người được mong muốn làm hành động đi với trợ từ に (N に Vてほしい).",
        examples: [
          { jp: "予定を変えてほしいです。", vi: "Tôi muốn bạn điều chỉnh lại lịch trình một chút." },
          { jp: "スライドの作成を手伝ってほしいです。", vi: "Tôi muốn bạn giúp một tay làm slide trình chiếu." }
        ]
      }
    ],
    kanji: [
      { char: "集", onyomi: "シュウ (shuu)", kunyomi: "あつ・まる / あつ・める", strokes: 12, mean: "Tập hợp, gom lại (TẬP)", examples: [{ word: "集める", reading: "あつめる", mean: "thu thập (tha V)" }, { word: "集合", reading: "しゅうごう", mean: "tập hợp lại" }] },
      { char: "説", onyomi: "セツ (setsu)", kunyomi: "と・く", strokes: 14, mean: "Giải thích, thuyết phục (THUYẾT)", examples: [{ word: "説明", reading: "せつめい", mean: "sự giải thích" }, { word: "小説", reading: "しょうせつ", mean: "tiểu thuyết" }] },
      { char: "貸", onyomi: "タイ (tai)", kunyomi: "か・す (ka-su)", strokes: 12, mean: "Cho mượn, cho vay (THẢI)", examples: [{ word: "貸す", reading: "かす", mean: "cho mượn" }, { word: "賃貸", reading: "ちんたい", mean: "cho thuê" }] },
      { char: "待", onyomi: "タイ (tai)", kunyomi: "ま・つ (ma-tsu)", strokes: 9, mean: "Chờ đợi (ĐÃI)", examples: [{ word: "待つ", reading: "まつ", mean: "chờ đợi" }, { word: "招待", reading: "しょうたい", mean: "chiêu đãi, mời" }] },
      { char: "助", onyomi: "ジョ (jo)", kunyomi: "たす・ける", strokes: 7, mean: "Giúp đỡ, tương trợ (TRỢ)", examples: [{ word: "助ける", reading: "たすける", mean: "cứu giúp, hỗ trợ" }, { word: "助手", reading: "じょしゅ", mean: "trợ thủ, phụ tá" }] }
    ],
    dialogue: {
      title: "Hội thoại: Phân công chuẩn bị bài thuyết trình",
      situation: "Nhóm 3 bạn học sinh thảo luận làm bài báo cáo về Lễ hội truyền thống.",
      lines: [
        { speaker: "Lan", jp: "来週の発表ですけど、だれが何をしますか。", vi: "Về bài thuyết trình tuần sau, ai sẽ làm việc gì đây?" },
        { speaker: "Ken", jp: "ぼくがインターネットで写真と情報を集めます。", vi: "Tớ sẽ thu thập hình ảnh và thông tin trên Internet." },
        { speaker: "Lan", jp: "じゃ、私がスライドを作ります。パソコンが使えますから。", vi: "Thế thì tớ sẽ làm slide, vì tớ dùng được máy tính." },
        { speaker: "Ken", jp: "助かります。原稿ができたら、一度読んでほしいです。", vi: "May quá cảm ơn cậu. Khi viết xong bản thảo, tớ muốn cậu đọc thử một lần nhé." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Hoạt động trải nghiệm ở trường THCS Nhật Bản",
      content: "Học sinh THCS Nhật Bản thường tham gia các hoạt động ngoại khóa thực địa (校外学習 - Kougai gakushuu) và chuyến du lịch học tập (修学旅行 - Shuugaku ryokou). Sau chuyến đi, học sinh lập nhóm phân tích số liệu, làm bảng tin hoặc thuyết trình bằng slide trước lớp để rèn luyện kĩ năng hợp tác và nói trước đám đông.",
      comparison: "Tại Việt Nam, các trường THCS cũng đẩy mạnh hoạt động trải nghiệm, hướng nghiệp và dự án học tập STEM tích hợp."
    },
    quiz: [
      {
        q: "Muốn nhờ bạn đổi lịch trình làm việc nhóm, câu nào đúng ngữ pháp?",
        options: [
          "A. 予定を変えてほしいです。",
          "B. 予定を変えたいです。",
          "C. 予定を変えると思います。",
          "D. 予定を変えてくださいません。"
        ],
        answer: 0,
        explain: "Cấu trúc 'Vてほしいです' dùng để ngỏ ý muốn người khác thực hiện một hành động nào đó cho mình."
      },
      {
        q: "Động từ '集める' thuộc nhóm động từ nào?",
        options: ["A. Nhóm 1", "B. Nhóm 2", "C. Nhóm 3 (bất quy tắc)", "D. Tính từ"],
        answer: 1,
        explain: "'集める (あつめる)' kết thúc bằng âm 'e' + る (thuộc nhóm 2, thể ます là 集めます)."
      },
      {
        q: "Chữ Hán '説' xuất hiện trong từ nào sau đây?",
        options: ["A. 説明 (せつめい)", "B. 質問 (しつもん)", "C. 発表 (はっぴょう)", "D. 予定 (よてい)"],
        answer: 0,
        explain: "'説明' (giải thích) ghép từ chữ '説' (thuyết) và chữ '明' (minh)."
      },
      {
        q: "Để mở đầu câu chuyện một cách mềm mại: '発表の準備______、だれが何をしますか。'",
        options: ["A. から", "B. ですけど", "C. ので", "D. でも"],
        answer: 1,
        explain: "'〜ですけど' dùng để mở lời nhẹ nhàng, nêu chủ đề cần thảo luận tiếp theo."
      }
    ]
  },

  // ==========================================
  // BÀI 3: 写真の説明 — MIÊU TẢ ẢNH
  // ==========================================
  {
    id: "bai-3",
    lessonNum: "BÀI 3",
    title: "写真の説明",
    romaji: "Shashin no setsumei",
    meaning: "Miêu tả ảnh",
    badge: "Chủ đề 3",
    goal: "Miêu tả đặc điểm người và vật trong ảnh bằng mệnh đề bổ nghĩa đứng trước danh từ; hỏi về vị trí, trang phục và quan hệ giữa các nhân vật.",
    vocab: [
      { jp: "写真", kana: "しゃしん", romaji: "shashin", mean: "bức ảnh", type: "Danh từ" },
      { jp: "撮る", kana: "とる", romaji: "toru", mean: "chụp (ảnh)", type: "Động từ nhóm 1" },
      { jp: "座る", kana: "すわる", romaji: "suwaru", mean: "ngồi", type: "Động từ nhóm 1" },
      { jp: "立つ", kana: "たつ", romaji: "tatsu", mean: "đứng", type: "Động từ nhóm 1" },
      { jp: "となり", kana: "となり", romaji: "tonari", mean: "bên cạnh (cùng loại)", type: "Danh từ" },
      { jp: "真ん中", kana: "まんなか", romaji: "mannaka", mean: "chính giữa, trung tâm", type: "Danh từ" },
      { jp: "着る", kana: "きる", romaji: "kiru", mean: "mặc (áo, váy)", type: "Động từ nhóm 2" },
      { jp: "眼鏡をかける", kana: "めがねをかける", romaji: "megane o kakeru", mean: "đeo kính mắt", type: "Cụm động từ" },
      { jp: "思い出", kana: "おもいで", romaji: "omoide", mean: "kỉ niệm đẹp", type: "Danh từ" },
      { jp: "SNS", kana: "エスエヌエス", romaji: "esu-enu-esu", mean: "mạng xã hội (Social Media)", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Mệnh đề bổ nghĩa cho danh từ (Định ngữ thể thường + N)",
        meaning: "Mệnh đề đứng ngay trước danh từ để bổ nghĩa, tiếng Nhật KHÔNG dùng đại từ quan hệ",
        note: "Động từ trong mệnh đề bổ nghĩa luôn ở thể thông thường (thể ngắn): Vる, Vた, Vない, Vている.",
        examples: [
          { jp: "これはきのう食べたケーキです。", vi: "Đây là chiếc bánh tôi đã ăn ngày hôm qua." },
          { jp: "みんなで撮った写真を見せます。", vi: "Tôi sẽ cho bạn xem bức ảnh đã chụp cùng mọi người." }
        ]
      },
      {
        pattern: "Vている + N",
        meaning: "Mô tả trạng thái đang diễn ra hoặc đặc điểm nhận diện của người/vật",
        note: "Rất hay dùng để nhận diện người trong ảnh bằng vị trí hoặc trang phục.",
        examples: [
          { jp: "となりに座っている人はだれですか。", vi: "Người đang ngồi bên cạnh là ai thế?" },
          { jp: "赤いシャツを着ている人は兄です。", vi: "Người đang mặc chiếc áo màu đỏ là anh trai tôi." },
          { jp: "眼鏡をかけている人は田中先生です。", vi: "Người đang đeo kính là thầy giáo Tanaka." }
        ]
      }
    ],
    kanji: [
      { char: "所", onyomi: "ショ (sho)", kunyomi: "ところ (tokoro)", strokes: 8, mean: "Nơi chốn, địa điểm (SỞ)", examples: [{ word: "場所", reading: "ばしょ", mean: "địa điểm" }, { word: "近所", reading: "きんじょ", mean: "hàng xóm lân cận" }] },
      { char: "立", onyomi: "リツ (ritsu)", kunyomi: "た・つ (ta-tsu)", strokes: 5, mean: "Đứng lên, dựng lập (LẬP)", examples: [{ word: "立つ", reading: "たつ", mean: "đứng (tự V)" }, { word: "国立", reading: "こくりつ", mean: "quốc lập, công lập" }] },
      { char: "箱", onyomi: "-", kunyomi: "はこ (hako)", strokes: 15, mean: "Cái hộp, thùng (TƯƠNG)", examples: [{ word: "箱", reading: "はこ", mean: "cái hộp" }, { word: "ゴミ箱", reading: "ごみばこ", mean: "thùng rác" }] },
      { char: "知", onyomi: "チ (chi)", kunyomi: "し・る (shi-ru)", strokes: 8, mean: "Biết, hiểu biết (TRI)", examples: [{ word: "知る", reading: "しる", mean: "biết" }, { word: "知り合い", reading: "しりあい", mean: "người quen biết" }] },
      { char: "終", onyomi: "シュウ (shuu)", kunyomi: "お・わる (o-waru)", strokes: 11, mean: "Kết thúc, chấm dứt (CHUNG)", examples: [{ word: "終わる", reading: "おわる", mean: "kết thúc" }, { word: "終点", reading: "しゅうてん", mean: "điểm cuối cùng" }] }
    ],
    dialogue: {
      title: "Hội thoại: Xem ảnh kỉ niệm chuyến tham quan",
      situation: "Mai chỉ cho bạn Yuka xem bức ảnh chụp chuyến đi dã ngoại lớp.",
      lines: [
        { speaker: "Yuka", jp: "いい写真ですね。真ん中に立っている人はだれですか。", vi: "Bức ảnh đẹp quá. Người đang đứng ở chính giữa là ai thế?" },
        { speaker: "Mai", jp: "日本語を教えてくれている鈴木先生ですよ。", vi: "Là thầy Suzuki, người đang dạy tiếng Nhật cho bọn tớ đấy." },
        { speaker: "Yuka", jp: "先生のとなりに座っている男の子は？", vi: "Thế bạn nam đang ngồi bên cạnh thầy giáo là ai?" },
        { speaker: "Mai", jp: "あ、眼鏡をかけている人はクラスメイトのフン君です。", vi: "À, người đang đeo kính là bạn Hùng cùng lớp tớ." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Học sinh Nhật Bản và mạng xã hội (SNS)",
      content: "Tại Nhật Bản, học sinh sử dụng các ứng dụng mạng xã hội (như LINE, Instagram) rất nhiều để kết nối với bạn bè. Tuy nhiên, các trường học Nhật Bản giáo dục rất kĩ lưỡng về quy tắc bảo vệ quyền riêng tư (プライバシー): không tự ý đăng ảnh rõ mặt người khác khi chưa được cho phép, và không để lộ thông tin trường lớp, địa chỉ nhà riêng lên mạng công cộng.",
      comparison: "Học sinh Việt Nam cũng ngày càng quan tâm hơn đến kĩ năng số và quy tắc ứng xử an toàn, văn minh trên không gian mạng."
    },
    quiz: [
      {
        q: "Chọn cụm từ đúng để miêu tả: 'Người đang ngồi ở hàng ghế đầu':",
        options: [
          "A. 前の席に座っている人",
          "B. 前の席に座ります人",
          "C. 前の席に座ったの人",
          "D. 前の席に座って人"
        ],
        answer: 0,
        explain: "Mệnh đề bổ nghĩa cho danh từ dùng động từ thể ngắn: '座っている人' (người đang ngồi)."
      },
      {
        q: "Từ '真ん中 (まんなか)' có nghĩa là gì?",
        options: ["A. Bên cạnh", "B. Chính giữa", "C. Đằng sau", "D. Phía trên"],
        answer: 1,
        explain: "'真ん中' chỉ vị trí trung tâm, chính giữa."
      },
      {
        q: "Chữ Hán '知' trong từ '知る (biết)' có âm Hán Việt là gì?",
        options: ["A. SỞ", "B. TRI", "C. CHUNG", "D. LẬP"],
        answer: 1,
        explain: "'知' có âm Hán Việt là TRI, nghĩa là biết, tri thức."
      },
      {
        q: "Câu nào dùng đúng ngữ pháp tiếng Nhật để nói: 'Đây là cuốn sách tôi mua hôm qua'?",
        options: [
          "A. これはきのう買った本です。",
          "B. これはきのう買いました本です。",
          "C. これは本がきのう買ったです。",
          "D. これはきのう買うの本です。"
        ],
        answer: 0,
        explain: "Hành động đã hoàn thành bổ nghĩa danh từ dùng thể quá khứ ngắn (Vた + N): 'きのう買った本'."
      }
    ]
  },

  // ==========================================
  // ÔN TẬP 1 — BÀI 1 ĐẾN BÀI 3
  // ==========================================
  {
    id: "on-tap-1",
    lessonNum: "ÔN TẬP 1",
    title: "ふりかえり 1 (第1課〜第3課)",
    romaji: "Furikaeri 1 (Dai 1 ka - Dai 3 ka)",
    meaning: "Ôn tập 1 (Bài 1 – Bài 3)",
    badge: "Ôn tập 1",
    goal: "Hệ thống hóa toàn bộ kiến thức 3 bài đầu: Trải nghiệm học ngoại ngữ (NからVています, Vてから), thảo luận làm việc nhóm (Vてほしい, 〜と思います, 〜けど), miêu tả người và đồ vật trong ảnh (VたN, VているN). Ôn 15 chữ Hán từ Bài 1 đến Bài 3.",
    vocab: [
      { jp: "復習", kana: "ふくしゅう", romaji: "fukushuu", mean: "ôn tập, rà soát kiến thức", type: "Danh từ" },
      { jp: "自己紹介", kana: "じこしょうかい", romaji: "jikoshoukai", mean: "tự giới thiệu bản thân", type: "Danh từ" },
      { jp: "チームワーク", kana: "ちーむわーく", romaji: "chiimawaaku", mean: "tinh thần làm việc nhóm", type: "Danh từ" },
      { jp: "プライバシー", kana: "ぷらいばしー", romaji: "puraibashii", mean: "quyền riêng tư cá nhân", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Tổng kết Ngữ pháp Ôn tập 1",
        meaning: "Trọng tâm 3 bài đầu sách Lớp 9",
        note: "1. Nから Vています / Khoảng thời gian + Vています (Bắt đầu từ quá khứ, tiếp diễn hiện tại).\n2. Vてから (Sau khi làm A thì làm B).\n3. Vるのが + Tính từ (Danh từ hóa động từ: 覚えるのがむずかしい).\n4. Vてほしいです (Muốn người khác làm gì cho mình).\n5. Định ngữ bổ nghĩa danh từ: VたN (việc đã xảy ra), VているN (đặc điểm nhận diện/hành động đang diễn ra).",
        examples: [
          { jp: "中学に入ってから、日本のアニメを見るのが好きになりました。", vi: "Sau khi vào cấp 2, tôi trở nên thích xem anime Nhật Bản." },
          { jp: "発表で使う資料をだれか集めてほしいです。", vi: "Tớ muốn có ai đó thu thập tài liệu dùng cho buổi thuyết trình." }
        ]
      }
    ],
    kanji: [
      { char: "林", onyomi: "リン", kunyomi: "はやし", strokes: 8, mean: "LÂM (rừng thưa)", examples: [{ word: "小林さん", reading: "こばやしさん", mean: "bạn Kobayashi" }] },
      { char: "始", onyomi: "シ", kunyomi: "はじ・める", strokes: 8, mean: "THỦY (bắt đầu)", examples: [{ word: "開始", reading: "かいし", mean: "khai mạc, bắt đầu" }] },
      { char: "思", onyomi: "シ", kunyomi: "おも・う", strokes: 9, mean: "TƯ (suy nghĩ)", examples: [{ word: "不思議", reading: "ふしぎ", mean: "kì lạ, kì diệu" }] },
      { char: "集", onyomi: "シュウ", kunyomi: "あつ・める", strokes: 12, mean: "TẬP (thu thập)", examples: [{ word: "集中", reading: "しゅうちゅう", mean: "tập trung" }] },
      { char: "所", onyomi: "ショ", kunyomi: "ところ", strokes: 8, mean: "SỞ (nơi chốn)", examples: [{ word: "住所", reading: "じゅうしょ", mean: "địa chỉ nhà" }] }
    ],
    dialogue: {
      title: "Hội thoại tổng hợp: Giới thiệu câu lạc bộ văn hóa",
      situation: "Nam giới thiệu hoạt động câu lạc bộ tiếng Nhật của trường mình.",
      lines: [
        { speaker: "Nam", jp: "これは去年みんなで作ったクラブのアルバムです。", vi: "Đây là cuốn album câu lạc bộ mà năm ngoái bọn tớ đã cùng nhau làm." },
        { speaker: "Ken", jp: "写真に写っている着物を着ている人はだれですか。", vi: "Người mặc kimono xuất hiện trong bức ảnh này là ai thế?" },
        { speaker: "Nam", jp: "日本から来た留学生のサクラさんですよ。折り紙の折り方を教えてくれました。", vi: "Là bạn Sakura, du học sinh từ Nhật sang đấy. Bạn ấy đã chỉ cho bọn tớ cách gấp Origami." }
      ]
    },
    culture: {
      title: "Góc văn hóa tổng hợp: Tinh thần tập thể (チームワーク) trong trường học Nhật",
      content: "Các trường học Nhật Bản rất chú trọng rèn luyện tính tự giác và tinh thần làm việc nhóm cho học sinh thông qua hoạt động trực nhật (日直 - Nicchoku), dọn vệ sinh trường lớp chung (掃除 - Souji) và các bài thuyết trình nhóm.",
      comparison: "Học sinh Việt Nam cũng rèn luyện tinh thần đoàn kết, giúp đỡ nhau trong học tập qua mô hình 'Đôi bạn cùng tiến' và các phong trào Đội Thiếu niên Tiền phong."
    },
    quiz: [
      {
        q: "Điền trợ từ phù hợp: '大学を卒業し______ から、日本で働きたいです。'",
        options: ["A. て", "B. た", "C. ない", "D. る"],
        answer: 0,
        explain: "Cấu trúc 'Vてから' mang nghĩa sau khi làm xong việc gì: '卒業してから' (sau khi tốt nghiệp)."
      },
      {
        q: "Muốn nói 'Tôi nghĩ việc nói tiếng Nhật trước mọi người rất thú vị':",
        options: [
          "A. みんなの前で日本語を話すのが楽しいと思います。",
          "B. みんなの前で日本語を話しますのが楽しいと思います。",
          "C. みんなの前で日本語を話してのが楽しいと思います。",
          "D. みんなの前で日本語を話したのが楽しいと思います。"
        ],
        answer: 0,
        explain: "Động từ thể từ điển (話す) + のが + tính từ (楽しい) + と思います."
      },
      {
        q: "Chữ Hán nào sau đây có nghĩa là 'chờ đợi'?",
        options: ["A. 貸", "B. 待", "C. 特", "D. 持"],
        answer: 1,
        explain: "'待' (ĐÃI - 待つ: chờ đợi). '貸' là cho mượn, '持' là cầm/mang."
      },
      {
        q: "Từ nào đồng nghĩa với 'bên cạnh'?",
        options: ["A. となり", "B. まんなか", "C. うしろ", "D. まえ"],
        answer: 0,
        explain: "'となり' nghĩa là bên cạnh."
      }
    ]
  },

  // ==========================================
  // BÀI 4: 困ったこと — VIỆC KHÓ KHĂN / RẮC RỐI
  // ==========================================
  {
    id: "bai-4",
    lessonNum: "BÀI 4",
    title: "困ったこと",
    romaji: "Komatta koto",
    meaning: "Việc khó khăn/rắc rối",
    badge: "Chủ đề 4",
    goal: "Hỏi thăm người đang buồn/lo lắng (どうしたんですか); giải thích tình huống rắc rối bằng 〜んです; phỏng đoán nguyên nhân với Vたかもしれません và ngỏ ý giúp đỡ.",
    vocab: [
      { jp: "困る", kana: "こまる", romaji: "komaru", mean: "gặp khó khăn, rắc rối", type: "Động từ nhóm 1" },
      { jp: "さいふ", kana: "さいふ", romaji: "saifu", mean: "cái ví tiền", type: "Danh từ" },
      { jp: "落とす", kana: "おとす", romaji: "otosu", mean: "đánh rơi, làm rớt", type: "Động từ nhóm 1" },
      { jp: "探す", kana: "さがす", romaji: "sagasu", mean: "tìm kiếm", type: "Động từ nhóm 1" },
      { jp: "ポケット", kana: "ぽけっと", romaji: "poketto", mean: "túi áo, túi quần", type: "Danh từ" },
      { jp: "点数", kana: "てんすう", romaji: "tensuu", mean: "điểm số", type: "Danh từ" },
      { jp: "試験", kana: "しけん", romaji: "shiken", mean: "kì thi, bài kiểm tra", type: "Danh từ" },
      { jp: "安心する", kana: "あんしんする", romaji: "anshin suru", mean: "yên tâm, an lòng", type: "Động từ nhóm 3" },
      { jp: "駅員", kana: "えきいん", romaji: "ekiin", mean: "nhân viên nhà ga", type: "Danh từ" },
      { jp: "交番", kana: "こうばん", romaji: "kouban", mean: "đồn cảnh sát khu phố", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "どうしたんですか。",
        meaning: "Có chuyện gì thế? / Bạn làm sao vậy?",
        note: "Dùng để ân cần hỏi thăm khi nhận thấy đối phương có vẻ mặt buồn, lo âu hoặc có dấu hiệu bất thường.",
        examples: [
          { jp: "暗い顔をしていますね。どうしたんですか。", vi: "Mặt cậu trông ủ rũ thế. Có chuyện gì xảy ra vậy?" }
        ]
      },
      {
        pattern: "Thể thông thường + んです / なんです",
        meaning: "Giải thích lí do, nhấn mạnh tình cảnh người nghe đang quan tâm",
        note: "Động từ/Tính từ đuôi い đi trực tiếp với んです. Tính từ đuôi な và Danh từ thêm な + んです.",
        examples: [
          { jp: "さいふがないんです。", vi: "Tớ không thấy ví tiền đâu cả / Tớ bị mất ví rồi." },
          { jp: "テストの点数が悪かったんです。", vi: "Điểm bài kiểm tra của tớ kém quá." }
        ]
      },
      {
        pattern: "Vたかもしれません",
        meaning: "Có thể là đã... (phỏng đoán chưa chắc chắn về quá khứ)",
        note: "Diễn tả khả năng sự việc đã xảy ra theo suy luận cá nhân (khoảng 50% khả năng).",
        examples: [
          { jp: "どこかでさいふを落としたかもしれません。", vi: "Có thể tôi đã đánh rơi ví ở đâu đó rồi." }
        ]
      },
      {
        pattern: "N も N も",
        meaning: "Cả... lẫn... / Cả... và...",
        note: "Nhấn mạnh tìm kiếm khắp mọi nơi hoặc phủ định toàn bộ.",
        examples: [
          { jp: "かばんの中もポケットの中も探しました。", vi: "Tôi đã tìm kiếm cả trong cặp sách lẫn trong túi áo rồi." }
        ]
      },
      {
        pattern: "〜てあげましょうか / 〜ましょうか",
        meaning: "Tôi làm giúp bạn nhé? (Đề nghị hỗ trợ)",
        note: "Dùng khi muốn chủ động đề nghị giúp đỡ người đang gặp khó khăn.",
        examples: [
          { jp: "いっしょに探してあげましょうか。", vi: "Để tớ tìm cùng cậu nhé?" }
        ]
      }
    ],
    kanji: [
      { char: "点", onyomi: "テン (ten)", kunyomi: "-", strokes: 9, mean: "Điểm số, dấu chấm (ĐIỂM)", examples: [{ word: "点数", reading: "てんすう", mean: "điểm số" }, { word: "満点", reading: "まんてん", mean: "điểm tuyệt đối (100 điểm)" }] },
      { char: "試", onyomi: "シ (shi)", kunyomi: "こころ・みる / ため・す", strokes: 13, mean: "Thử nghiệm, thi cử (THÍ)", examples: [{ word: "試合", reading: "しあい", mean: "trận đấu" }, { word: "試す", reading: "ためす", mean: "thử làm" }] },
      { char: "験", onyomi: "ケン (ken)", kunyomi: "-", strokes: 18, mean: "Kiểm nghiệm, trải nghiệm (NGHIỆM)", examples: [{ word: "試験", reading: "しけん", mean: "kì thi" }, { word: "経験", reading: "けいけん", mean: "kinh nghiệm" }] },
      { char: "安", onyomi: "アン (an)", kunyomi: "やす・い (yasu-i)", strokes: 6, mean: "Yên tâm, an toàn, rẻ (AN)", examples: [{ word: "安心", reading: "あんしん", mean: "an tâm" }, { word: "安全", reading: "あんぜん", mean: "an toàn" }] },
      { char: "員", onyomi: "イン (in)", kunyomi: "-", strokes: 10, mean: "Thành viên, nhân viên (VIÊN)", examples: [{ word: "店員", reading: "てんいん", mean: "nhân viên bán hàng" }, { word: "全員", reading: "ぜんいん", mean: "toàn thể thành viên" }] }
    ],
    dialogue: {
      title: "Hội thoại: Đánh rơi ví tiền trên xe buýt",
      situation: "Nam hớt hải tìm ví và được bạn hỏi thăm, giúp đỡ.",
      lines: [
        { speaker: "Bạn", jp: "ナムさん、どうしたんですか。何か探しているんですか。", vi: "Nam ơi, có chuyện gì thế? Cậu đang tìm kiếm cái gì à?" },
        { speaker: "Nam", jp: "さいふがないんです。バスの中で落としたかもしれません。", vi: "Tớ không thấy ví tiền đâu cả. Có thể tớ đã đánh rơi trên xe buýt rồi." },
        { speaker: "Bạn", jp: "かばんの中も探しましたか。", vi: "Cậu đã tìm kĩ cả trong cặp sách chưa?" },
        { speaker: "Nam", jp: "ええ、かばんの中もポケットも全部探しましたが見つかりません。", vi: "Rồi, tớ tìm cả trong cặp lẫn trong túi áo hết rồi mà không thấy." },
        { speaker: "Bạn", jp: "たいへんですね。バス会社に電話してあげましょうか。", vi: "Gay go nhỉ. Để tớ gọi điện cho công ty xe buýt giúp cậu nhé?" }
      ]
    },
    culture: {
      title: "Góc văn hóa: Văn hóa hỏi thăm và đồn cảnh sát khu phố (Kouban) tại Nhật",
      content: "Ở Nhật Bản, khi thấy ai đó gặp chuyện khó khăn, người Nhật thường mở lời bằng '大丈夫ですか (Bạn có sao không?)' hoặc '手伝いましょうか (Để tôi giúp nhé?)'. Nếu bị rơi đồ, người dân sẽ đến '交番 (Kouban - đồn công an khu phố)' để trình báo. Tỉ lệ tìm lại được đồ thất lạc (kể cả ví tiền có tiền mặt) ở Nhật Bản cao hàng đầu thế giới nhờ tính trung thực và hệ thống lưu trữ đồ rơi xuất sắc.",
      comparison: "Ở Việt Nam, khi nhặt được của rơi, người dân cũng thường đem nộp cho công an phường/xã hoặc đăng tin tìm chủ nhân trên mạng xã hội."
    },
    quiz: [
      {
        q: "Khi thấy bạn mình đang bối rối tìm kiếm đồ vật, câu hỏi thăm thích hợp nhất là:",
        options: [
          "A. どうしたんですか。",
          "B. どうですか。",
          "C. いくらですか。",
          "D. だれですか。"
        ],
        answer: 0,
        explain: "'どうしたんですか' là câu hỏi thăm chuẩn mực khi thấy người khác có chuyện bất thường/rắc rối."
      },
      {
        q: "Điền đuôi câu giải thích: 'バスが遅れた______、遅刻しました。'",
        options: ["A. んですから", "B. んだから", "C. んで", "D. んです"],
        answer: 3,
        explain: "Dùng '〜んです' để giải thích nguyên nhân/tình huống cho người nghe."
      },
      {
        q: "Từ '落としたかもしれません' diễn đạt ý nghĩa gì?",
        options: [
          "A. Chắc chắn không đánh rơi",
          "B. Có thể là đã đánh rơi",
          "C. Không được đánh rơi",
          "D. Hãy đánh rơi đi"
        ],
        answer: 1,
        explain: "'Vたかもしれません' diễn tả phỏng đoán chưa chắc chắn: 'có thể đã...'."
      },
      {
        q: "Chữ Hán ghép '安心' có cách đọc là gì?",
        options: ["A. あんしん", "B. あんぜん", "C. やすこころ", "D. しけん"],
        answer: 0,
        explain: "'安心' đọc là あんしん (an tâm, yên lòng)."
      }
    ]
  },

  // ==========================================
  // BÀI 5: 料理の食べ方 — CÁCH ĂN MÓN ĂN
  // ==========================================
  {
    id: "bai-5",
    lessonNum: "BÀI 5",
    title: "料理の食べ方",
    romaji: "Ryouri no tabekata",
    meaning: "Cách ăn một món ăn",
    badge: "Chủ đề 5",
    goal: "Nói lí do mời rủ hoặc từ chối (〜ので); hỏi về món kiêng kị/dị ứng; giải thích trình tự chế biến hoặc cách thưởng thức một món ăn (Vてください).",
    vocab: [
      { jp: "料理", kana: "りょうり", romaji: "ryouri", mean: "món ăn, nấu ăn", type: "Danh từ / Động từ nhóm 3" },
      { jp: "牛肉", kana: "ぎゅうにく", romaji: "gyuuniku", mean: "thịt bò", type: "Danh từ" },
      { jp: "野菜", kana: "やさい", romaji: "yasai", mean: "rau củ", type: "Danh từ" },
      { jp: "たれ", kana: "たれ", romaji: "tare", mean: "nước chấm, nước sốt", type: "Danh từ" },
      { jp: "つける", kana: "つける", romaji: "tsukeru", mean: "chấm (nước sốt), gắn vào", type: "Động từ nhóm 2" },
      { jp: "混ぜる", kana: "まぜる", romaji: "mazeru", mean: "trộn đều, khuấy", type: "Động từ nhóm 2" },
      { jp: "アレルギー", kana: "あれるぎー", romaji: "arerugii", mean: "dị ứng (thực phẩm)", type: "Danh từ" },
      { jp: "お赤飯", kana: "おせきはん", romaji: "osekihan", mean: "xôi đậu đỏ (món ăn may mắn)", type: "Danh từ" },
      { jp: "すき焼き", kana: "すきやき", romaji: "sukiyaki", mean: "món lẩu Sukiyaki", type: "Danh từ" },
      { jp: "生卵", kana: "なまたまご", romaji: "namatamago", mean: "trứng gà sống", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Câu thể thông thường + ので",
        meaning: "Vì... nên... (Nêu nguyên nhân, lí do một cách lịch sự, khách quan)",
        note: "Động từ, Tính từ đuôi い đi trực tiếp với ので. Tính từ đuôi な và Danh từ chuyển thành な + ので.",
        examples: [
          { jp: "近くにおいしい店があるので、そこへ行きませんか。", vi: "Vì ở gần đây có quán ăn rất ngon nên chúng mình cùng đến đó nhé?" },
          { jp: "今日は暑いので、冷たいフォーを食べたいです。", vi: "Hôm nay trời nóng nên tôi muốn ăn món phở nguội/thanh mát." }
        ]
      },
      {
        pattern: "Vてください",
        meaning: "Hãy làm việc gì (Hướng dẫn trình tự, thao tác)",
        note: "Dùng để chỉ dẫn các bước ăn hoặc chế biến món ăn theo thứ tự.",
        examples: [
          { jp: "このたれをつけて食べてください。", vi: "Hãy chấm vào loại nước sốt này rồi thưởng thức nhé." },
          { jp: "よく混ぜてから飲んでください。", vi: "Hãy khuấy đều rồi hãy uống." }
        ]
      },
      {
        pattern: "V thể khả năng phủ định + もの",
        meaning: "Món đồ / Thức ăn không thể...",
        note: "Dùng để hỏi về món ăn kiêng hoặc dị ứng của khách/bạn bè.",
        examples: [
          { jp: "食べられないものがありますか。", vi: "Có món ăn nào bạn không ăn được (do kiêng/dị ứng) không?" }
        ]
      }
    ],
    kanji: [
      { char: "牛", onyomi: "ギュウ (gyuu)", kunyomi: "うし (ushi)", strokes: 4, mean: "Con bò (NGƯU)", examples: [{ word: "牛肉", reading: "ぎゅうにく", mean: "thịt bò" }, { word: "牛乳", reading: "ぎゅうにゅう", mean: "sữa bò" }] },
      { char: "野", onyomi: "ヤ (ya)", kunyomi: "の (no)", strokes: 11, mean: "Cánh đồng, hoang dã (DÃ)", examples: [{ word: "野菜", reading: "やさい", mean: "rau củ" }, { word: "分野", reading: "ぶんや", mean: "lĩnh vực" }] },
      { char: "暑", onyomi: "ショ (sho)", kunyomi: "あつ・い (atsu-i)", strokes: 12, mean: "Nóng (thời tiết) (THỬ)", examples: [{ word: "暑い", reading: "あつい", mean: "nóng bức" }, { word: "残暑", reading: "ざんしょ", mean: "cái nóng cuối hè" }] },
      { char: "電", onyomi: "デン (den)", kunyomi: "-", strokes: 13, mean: "Điện khí, tia chớp (ĐIỆN)", examples: [{ word: "電車", reading: "でんしゃ", mean: "tàu điện" }, { word: "電気", reading: "でんき", mean: "điện, đèn điện" }] },
      { char: "池", onyomi: "チ (chi)", kunyomi: "いけ (ike)", strokes: 6, mean: "Cái ao, hồ nước nhỏ (TRÌ)", examples: [{ word: "池", reading: "いけ", mean: "cái ao" }, { word: "電池", reading: "でんち", mean: "cục pin" }] }
    ],
    dialogue: {
      title: "Hội thoại: Hướng dẫn ăn món lẩu Sukiyaki",
      situation: "Bạn người Nhật hướng dẫn học sinh Việt Nam cách ăn Sukiyaki.",
      lines: [
        { speaker: "Tanaka", jp: "ナムさん、食べられないものがありますか。", vi: "Nam ơi, cậu có món nào không ăn được không?" },
        { speaker: "Nam", jp: "いいえ、何でも食べられます。", vi: "Không, món gì tớ cũng ăn được hết." },
        { speaker: "Tanaka", jp: "すき焼きの肉ができましたよ。生卵をといて、つけて食べてください。", vi: "Thịt sukiyaki chín rồi nè. Cậu đánh tan quả trứng sống rồi chấm thịt vào ăn nhé." },
        { speaker: "Nam", jp: "生卵につけるんですか。わあ、まろやかでおいしいですね！", vi: "Chấm vào trứng sống ư? Oa, ngậy béo và ngon quá!" }
      ]
    },
    culture: {
      title: "Góc văn hóa: Món xôi đậu đỏ (お赤飯 - Osekihan) mang lại may mắn",
      content: "Ở Nhật Bản, màu đỏ được coi là màu xua đuổi tà ma và mang lại phúc lành. Người Nhật thường nấu món 'お赤飯 (Osekihan - gạo nếp nấu cùng đậu đỏ azuki)' vào những dịp trọng đại và vui mừng như: lễ thôi nôi trẻ sơ sinh, ngày nhập học, tốt nghiệp, sinh nhật hoặc mừng thọ.",
      comparison: "Ở Việt Nam, món xôi gấc với màu đỏ rực rỡ cũng luôn xuất hiện trong mâm cỗ ngày Tết, cưới hỏi, mừng thọ để cầu chúc bình an và may mắn."
    },
    quiz: [
      {
        q: "Điền liên từ thích hợp: 'おいしい店がある______、いっしょに行きませんか。'",
        options: ["A. ので", "B. のに", "C. でも", "D. からは"],
        answer: 0,
        explain: "'〜ので' dùng để nêu nguyên nhân, lí do một cách khách quan, lịch sự khi mời rủ."
      },
      {
        q: "Khi muốn hỏi đối phương có bị dị ứng hay kiêng món gì không, người Nhật nói:",
        options: [
          "A. 食べられないものがありますか。",
          "B. 食べたいものがありますか。",
          "C. 食べるものがありませんか。",
          "D. 食べなければなりませんか。"
        ],
        answer: 0,
        explain: "'食べられないものがありますか' là câu hỏi lịch thiệp về đồ ăn kiêng/dị ứng."
      },
      {
        q: "Chữ Hán '牛' ghép với '肉' đọc là gì?",
        options: ["A. うしにく", "B. ぎゅうにく", "C. とりにく", "D. ぶたにく"],
        answer: 1,
        explain: "'牛肉' đọc theo âm On là ぎゅうにく (thịt bò)."
      },
      {
        q: "Người Nhật thường ăn món 'お赤飯 (xôi đậu đỏ)' vào dịp nào?",
        options: [
          "A. Ngày có chuyện buồn",
          "B. Dịp vui mừng, chúc tụng may mắn",
          "C. Khi bị cảm sốt",
          "D. Giờ giải lao ở trường"
        ],
        answer: 1,
        explain: "Xôi đậu đỏ Osekihan tượng trưng cho may mắn, ăn vào các dịp chúc mừng trọng đại."
      }
    ]
  },

  // ==========================================
  // BÀI 6: 特別な日 — NGÀY ĐẶC BIỆT
  // ==========================================
  {
    id: "bai-6",
    lessonNum: "BÀI 6",
    title: "特別な日",
    romaji: "Tokubetsu na hi",
    meaning: "Ngày đặc biệt",
    badge: "Chủ đề 6",
    goal: "Nói về trình tự các hành động trước – sau trong ngày lễ (Vる前に, Vた後で); định nghĩa món ăn hoặc khái niệm bằng NというN; hỏi về ý nghĩa món ăn truyền thống.",
    vocab: [
      { jp: "特別", kana: "とくべつ", romaji: "tokubetsu", mean: "đặc biệt", type: "Tính từ đuôi な" },
      { jp: "初詣", kana: "はつもうで", romaji: "hatsumoude", mean: "tục đi lễ chùa đầu năm mới", type: "Danh từ" },
      { jp: "おせち料理", kana: "おせちりょうり", romaji: "osechi ryouri", mean: "món ăn ngày Tết truyền thống Nhật", type: "Danh từ" },
      { jp: "お正月", kana: "おしょうがつ", romaji: "oshougatsu", mean: "ngày Tết năm mới", type: "Danh từ" },
      { jp: "神社", kana: "じんじゃ", romaji: "jinja", mean: "đền thờ Thần đạo", type: "Danh từ" },
      { jp: "お参りする", kana: "おまいりする", romaji: "omairi suru", mean: "viếng đền, cầu nguyện", type: "Động từ nhóm 3" },
      { jp: "バイン・チュン", kana: "ばいんちゅん", romaji: "bain chun", mean: "bánh chưng truyền thống", type: "Danh từ" },
      { jp: "親戚", kana: "しんせき", romaji: "shinseki", mean: "họ hàng, người thân", type: "Danh từ" },
      { jp: "意味", kana: "いみ", romaji: "imi", mean: "ý nghĩa", type: "Danh từ" },
      { jp: "健康", kana: "けんこう", romaji: "kenkou", mean: "sức khỏe dồi dào", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Vる + 前に",
        meaning: "Trước khi làm hành động V thì...",
        note: "Động từ đứng trước 前に LUÔN LUÔN ở thể từ điển (Vる), bất kể thì của câu là quá khứ hay tương lai.",
        examples: [
          { jp: "初詣に行く前に、おせち料理を食べます。", vi: "Trước khi đi viếng đền đầu năm, chúng tôi ăn món Osechi." },
          { jp: "寝る前に、日本語の単語を覚えます。", vi: "Trước khi đi ngủ, tôi học từ vựng tiếng Nhật." }
        ]
      },
      {
        pattern: "Vた + 後で",
        meaning: "Sau khi làm hành động V thì...",
        note: "Động từ đứng trước 後で LUÔN LUÔN chia ở thể quá khứ (Vた). Danh từ thì đi với の (N の後で).",
        examples: [
          { jp: "家に帰った後で、おせち料理を食べます。", vi: "Sau khi về đến nhà, chúng tôi thưởng thức các món ăn ngày Tết Osechi." },
          { jp: "食事の後で、初詣に行きます。", vi: "Sau bữa ăn, cả nhà đi viếng đền đầu năm." }
        ]
      },
      {
        pattern: "N1 という N2",
        meaning: "N2 có tên là N1 / N2 gọi là N1",
        note: "Dùng để giới thiệu, giải thích tên gọi của một món ăn, sự vật, phong tục mới cho người chưa biết.",
        examples: [
          { jp: "ベトナムには「バイン・チュン」という伝統料理があります。", vi: "Ở Việt Nam có một món ăn truyền thống gọi là 'Bánh chưng'." },
          { jp: "「おせち」という特別な料理を食べます。", vi: "Chúng tôi ăn món ăn đặc biệt có tên là 'Osechi'." }
        ]
      }
    ],
    kanji: [
      { char: "別", onyomi: "ベツ (betsu)", kunyomi: "わか・れる", strokes: 7, mean: "Phân biệt, chia tay, đặc biệt (BIỆT)", examples: [{ word: "特別", reading: "とくべつ", mean: "đặc biệt" }, { word: "別れる", reading: "わかれる", mean: "chia tay" }] },
      { char: "米", onyomi: "ベイ / マイ", kunyomi: "こめ (kome)", strokes: 6, mean: "Gạo, nước Mỹ (MỄ)", examples: [{ word: "お米", reading: "おこめ", mean: "hạt gạo" }, { word: "新米", reading: "しんまい", mean: "gạo mới / người mới" }] },
      { char: "老", onyomi: "ロウ (rou)", kunyomi: "お・いる", strokes: 6, mean: "Già, người cao tuổi (LÃO)", examples: [{ word: "老人", reading: "ろうじん", mean: "người già" }, { word: "敬老の日", reading: "けいろうのひ", mean: "Ngày kính lão" }] },
      { char: "草", onyomi: "ソウ (sou)", kunyomi: "くさ (kusa)", strokes: 9, mean: "Cỏ cây (THẢO)", examples: [{ word: "草", reading: "くさ", mean: "cỏ" }, { word: "草原", reading: "そうげん", mean: "thảo nguyên" }] },
      { char: "王", onyomi: "オウ (ou)", kunyomi: "-", strokes: 4, mean: "Vua, người đứng đầu (VƯƠNG)", examples: [{ word: "国王", reading: "こくおう", mean: "quốc vương" }, { word: "女王", reading: "じょおう", mean: "nữ hoàng" }] },
      { char: "千", onyomi: "セン (sen)", kunyomi: "ち", strokes: 3, mean: "Một nghìn (THIÊN)", examples: [{ word: "千", reading: "せん", mean: "1.000" }, { word: "三千", reading: "さんぜん", mean: "3.000" }] }
    ],
    dialogue: {
      title: "Hội thoại: Món ăn ngày Tết của hai nước",
      situation: "Nam kể cho bạn Nhật nghe về Tết Nguyên Đán và Bánh chưng.",
      lines: [
        { speaker: "Tanaka", jp: "ナムさん、ベトナムのお正月には何をしますか。", vi: "Nam ơi, vào ngày Tết ở Việt Nam thì mọi người thường làm gì?" },
        { speaker: "Nam", jp: "親戚の家へ行く前に、家族で「バイン・チュン」という料理を食べます。", vi: "Trước khi đi chúc Tết họ hàng, cả nhà tớ ăn món ăn có tên là 'Bánh chưng'." },
        { speaker: "Tanaka", jp: "「バイン・チュン」ですか。それはどんな料理ですか。", vi: "'Bánh chưng' ư? Đó là món ăn như thế nào?" },
        { speaker: "Nam", jp: "もち米や豚肉で作った料理です。四角くて、とてもおいしいですよ。", vi: "Là món làm từ gạo nếp và thịt lợn. Bánh hình vuông và ngon lắm." }
      ]
    },
    culture: {
      title: "Góc văn hóa: Món ăn ngày Tết Osechi (おせち料理) của người Nhật",
      content: "Món Osechi gồm nhiều món ăn nhỏ được xếp trang trọng trong những chiếc hộp gỗ sơn mài nhiều tầng gọi là '重箱 (Juubako)'. Mỗi món đều mang một ý nghĩa tốt lành cho năm mới: Tôm (sống lâu đến còng lưng), Trứng cá trích Kazunoko (con cháu sum vầy đông đúc), Đậu đen Kuromame (chăm chỉ, sức khỏe dồi dào), Rong biển cuộn Kombu (vui vẻ, hạnh phúc).",
      comparison: "Tại Việt Nam, mâm cỗ Tết với bánh chưng, giò lụa, dưa hành, thịt kho tàu cũng hàm chứa ước vọng ấm no, đủ đầy và vạn sự như ý."
    },
    quiz: [
      {
        q: "Chọn dạng đúng của động từ: '出かける______、鍵をかけました。'",
        options: ["A. 前に", "B. 後で", "C. ときで", "D. から"],
        answer: 0,
        explain: "Cấu trúc 'Vる前に' diễn tả trước khi làm việc gì: '出かける前に' (trước khi đi ra ngoài)."
      },
      {
        q: "Chọn dạng đúng của động từ: 'ご飯を______ 後で、薬を飲みます。'",
        options: ["A. 食べる", "B. 食べた", "C. 食べて", "D. 食べない"],
        answer: 1,
        explain: "Cấu trúc 'Vた後で' yêu cầu động từ đứng trước phải chia ở thể quá khứ '食べた'."
      },
      {
        q: "Cụm '「フォー」という料理' có nghĩa là gì?",
        options: [
          "A. Món ăn nấu từ phở",
          "B. Món ăn có tên gọi là 'Phở'",
          "C. Quán ăn bán phở",
          "D. Người thích ăn phở"
        ],
        answer: 1,
        explain: "Cấu trúc 'N1 という N2' có nghĩa là N2 có tên là N1."
      },
      {
        q: "Chữ Hán '米' đọc là gì khi đứng một mình?",
        options: ["A. こめ (kome)", "B. べい (bei)", "C. まい (mai)", "D. ぎゅう (gyuu)"],
        answer: 0,
        explain: "Chữ '米' (MỄ - hạt gạo) đứng một mình đọc là こめ (hoặc お米: okome)."
      }
    ]
  },

  // ==========================================
  // ÔN TẬP 2 — BÀI 4 ĐẾN BÀI 6
  // ==========================================
  {
    id: "on-tap-2",
    lessonNum: "ÔN TẬP 2",
    title: "ふりかえり 2 (第4課〜第6課)",
    romaji: "Furikaeri 2 (Dai 4 ka - Dai 6 ka)",
    meaning: "Ôn tập 2 (Bài 4 – Bài 6)",
    badge: "Ôn tập 2",
    goal: "Rà soát toàn diện các cấu trúc hỏi thăm rắc rối (どうしたんですか, 〜んです, Vたかもしれません), nguyên nhân lịch sự (〜ので), hướng dẫn cách ăn (Vてください, 食べられないもの), trình tự thời gian (Vる前に, Vた後で), định nghĩa tên gọi (NというN) và 16 chữ Hán từ Bài 4 đến Bài 6.",
    vocab: [
      { jp: "伝統文化", kana: "でんとうぶんか", romaji: "dentou bunka", mean: "văn hóa truyền thống", type: "Danh từ" },
      { jp: "年中行事", kana: "ねんじゅうぎょうじ", romaji: "nenjuu gyouji", mean: "các sự kiện/lễ hội trong năm", type: "Danh từ" },
      { jp: "食材", kana: "しょくざい", romaji: "shokuzai", mean: "nguyên liệu thực phẩm", type: "Danh từ" },
      { jp: "解決", kana: "かいけつ", romaji: "kaiketsu", mean: "giải quyết vấn đề", type: "Danh từ" }
    ],
    grammar: [
      {
        pattern: "Tổng kết Ngữ pháp Ôn tập 2",
        meaning: "Hệ thống cấu trúc từ Bài 4 đến Bài 6",
        note: "1. どうしたんですか / Thể thường + んです (Hỏi thăm & giải thích tình huống).\n2. Vたかもしれません (Phỏng đoán có thể đã làm gì).\n3. Câu thường + ので (Nêu nguyên nhân khách quan, lịch sự).\n4. Vる前に (Trước khi làm A) vs. Vた後で (Sau khi làm A).\n5. N1 という N2 (Định nghĩa: N2 có tên là N1).",
        examples: [
          { jp: "風邪をひいたので、病院へ行った後で薬を飲みました。", vi: "Vì bị cảm nên sau khi đi khám ở bệnh viện về tôi đã uống thuốc." },
          { jp: "どこかで傘を忘れたかもしれません。", vi: "Có thể tôi đã để quên chiếc ô ở đâu đó rồi." }
        ]
      }
    ],
    kanji: [
      { char: "試", onyomi: "シ", kunyomi: "ため・す", strokes: 13, mean: "THÍ (thi cử, thử làm)", examples: [{ word: "試作", reading: "しさく", mean: "làm thử" }] },
      { char: "験", onyomi: "ケン", kunyomi: "-", strokes: 18, mean: "NGHIỆM (kiểm tra)", examples: [{ word: "受験", reading: "じゅけん", mean: "dự thi" }] },
      { char: "牛", onyomi: "ギュウ", kunyomi: "うし", strokes: 4, mean: "NGƯU (con bò)", examples: [{ word: "牛丼", reading: "ぎゅうどん", mean: "cơm thịt bò" }] },
      { char: "野", onyomi: "ヤ", kunyomi: "の", strokes: 11, mean: "DÃ (cánh đồng)", examples: [{ word: "野球", reading: "やきゅう", mean: "bóng chày" }] },
      { char: "別", onyomi: "ベツ", kunyomi: "わか・れる", strokes: 7, mean: "BIỆT (đặc biệt)", examples: [{ word: "別に", reading: "べつに", mean: "không có gì đặc biệt" }] },
      { char: "米", onyomi: "ベイ", kunyomi: "こめ", strokes: 6, mean: "MỄ (gạo)", examples: [{ word: "米作", reading: "べいさく", mean: "trồng lúa gạo" }] }
    ],
    dialogue: {
      title: "Hội thoại: Giới thiệu món ăn may mắn ngày lễ",
      situation: "Hai bạn cùng làm bài tập nhóm về văn hóa ẩm thực.",
      lines: [
        { speaker: "Lan", jp: "日本の特別な日には「おせち」という料理を食べるんですね。", vi: "Vào ngày đặc biệt của Nhật Bản mọi người ăn món ăn gọi là 'Osechi' nhỉ." },
        { speaker: "Tanaka", jp: "ええ、健康や幸せを願う意味があるんです。ベトナムの赤飯も同じですか。", vi: "Đúng vậy, nó mang ý nghĩa cầu chúc sức khỏe và hạnh phúc. Xôi gấc của Việt Nam cũng tương tự thế chứ?" },
        { speaker: "Lan", jp: "はい、赤い色は幸運の意味があるので、お正月や結婚式でよく食べますよ。", vi: "Vâng, vì màu đỏ mang ý nghĩa may mắn nên rất hay được ăn vào ngày Tết và lễ cưới đấy." }
      ]
    },
    culture: {
      title: "Góc văn hóa tổng hợp: Nét tương đồng trong mâm cỗ truyền thống Á Đông",
      content: "Cả Việt Nam và Nhật Bản đều thuộc nền văn minh lúa nước, coi trọng hạt gạo ('ngọc thực') và sự sum họp gia đình trong các ngày lễ tết lớn. Những món ăn truyền thống không chỉ để no bụng mà còn là biểu tượng tinh thần gửi gắm lời chúc lành cho tương lai.",
      comparison: "Sự tinh tế trong cách sắp xếp món Osechi của Nhật Bản tương đồng với mâm ngũ quả và mâm cỗ Tết đầy ắp sắc màu may mắn của người Việt."
    },
    quiz: [
      {
        q: "Điền từ thích hợp: '日本へ行く______、パスポートを作らなければなりません。'",
        options: ["A. 前に", "B. 後で", "C. から", "D. ので"],
        answer: 0,
        explain: "Phải làm hộ chiếu TRƯỚC KHI đi Nhật -> 'Vる前に' (行く前に)."
      },
      {
        q: "Chữ Hán nào ghép với chữ '菜' để thành từ 'rau củ (やさい)'?",
        options: ["A. 野", "B. 牛", "C. 点", "D. 池"],
        answer: 0,
        explain: "'野菜 (やさい)' gồm chữ DÃ (野) và THẢO/THÁI (菜)."
      },
      {
        q: "Câu nào dưới đây diễn đạt lí do lịch sự nhất?",
        options: [
          "A. 時間がないので、急ぎましょう。",
          "B. 時間がないから、急ごう。",
          "C. 時間がないけど、急ぎましょう。",
          "D. 時間がないのに、急ぎました。"
        ],
        answer: 0,
        explain: "'〜ので' là liên từ nêu nguyên nhân khách quan, chuẩn mực và lịch sự nhất."
      },
      {
        q: "Từ '落としたかもしれません' thuộc cấu trúc diễn đạt nào?",
        options: [
          "A. Phỏng đoán không chắc chắn (có thể đã)",
          "B. Ra lệnh bắt buộc (hãy làm)",
          "C. Mong muốn bản thân (muốn làm)",
          "D. Xin phép người khác (có được phép)"
        ],
        answer: 0,
        explain: "'Vたかもしれません' dùng để suy đoán về khả năng xảy ra của một sự việc trong quá khứ."
      }
    ]
  }
];

module.exports = { lessonsPart1 };
