// Dữ liệu Tiếng Nhật 7 - Phần 2: Bài 8 đến Bài 14 và Bảng Ngữ pháp, Động từ, Chữ Hán, Trợ từ
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const lessonsPart2 = [
  // BÀI 8
  {
    id: "bai-8",
    lessonNum: 8,
    title: "私のしゅみはドラマを見ることです",
    romaji: "Watashi no shumi wa dorama o miru koto desu",
    meaning: "Sở thích của tôi là xem phim truyền hình",
    goal: "Nói về sở thích của bản thân/người khác, tần suất và hoạt động cụ thể; phỏng vấn và giới thiệu sở thích của một bạn.",
    badge: "Sở thích & Danh hóa động từ",
    vocab: [
      { jp: "趣味", kana: "しゅみ", romaji: "shumi", mean: "Sở thích", type: "Danh từ" },
      { jp: "ドラマ", kana: "どらま", romaji: "dorama", mean: "Phim truyền hình", type: "Danh từ" },
      { jp: "映画", kana: "えいが", romaji: "eiga", mean: "Phim điện ảnh", type: "Danh từ" },
      { jp: "小説", kana: "しょうせつ", romaji: "shōsetsu", mean: "Tiểu thuyết", type: "Danh từ" },
      { jp: "漫画", kana: "まんが", romaji: "manga", mean: "Truyện tranh Manga", type: "Danh từ" },
      { jp: "クラシック", kana: "くらしっく", romaji: "kurashikku", mean: "Nhạc cổ điển", type: "Danh từ" },
      { jp: "スポーツ", kana: "すぽーつ", romaji: "supōtsu", mean: "Thể thao", type: "Danh từ" },
      { jp: "写真", kana: "しゃしん", romaji: "shashin", mean: "Chụp ảnh", type: "Danh từ" },
      { jp: "動物", kana: "どうぶつ", romaji: "dōbutsu", mean: "Động vật", type: "Danh từ" },
      { jp: "ペットの世話", kana: "ぺっとのせわ", romaji: "petto no sewa", mean: "Chăm sóc thú cưng", type: "Cụm danh từ" }
    ],
    grammar: {
      title: "Mẫu câu danh từ hóa động từ bằng こと: Vることです",
      formula: "[Chủ ngữ / Sở thích] は [Động từ thể từ điển (Vる)] + ことです",
      usage: "Đưa động từ về dạng nguyên thể (thể từ điển - Jisho-kei) rồi thêm 'こと' để biến hành động thành một cụm danh từ mang nghĩa 'việc làm...'.",
      examples: [
        "私の趣味はドラマを見ることです。(Sở thích của tôi là việc xem phim truyền hình.)",
        "趣味は音楽を聴くことと、ピアノを弾くことです。(Sở thích là nghe nhạc và chơi đàn piano.)",
        "あなたの趣味は何ですか。― 本を読むことです。(Sở thích của bạn là gì? ― Là đọc sách.)"
      ],
      rules: "Quy tắc chuyển Vます -> Vる: Nhóm 1 (hàng い -> hàng う: 聞きます -> 聞く, 読みます -> 読む), Nhóm 2 (bỏ ます thêm る: 食べます -> 食べる, 見ます -> 見る), Nhóm 3 (します -> する, 来ます -> くる)."
    },
    kanji: [
      { char: "写", on: "シャ", kun: "うつ・す", mean: "TẢ (chụp, sao chép)", words: "写真 (bức ảnh), 写生 (vẽ phác họa)" },
      { char: "真", on: "シン", kun: "ま / まこと", mean: "CHÂN (chân thật)", words: "写真 (bức ảnh), 真理 (chân lí)" },
      { char: "世", on: "セイ・セ", kun: "よ", mean: "THẾ (thế giới, đời)", words: "世話 (chăm sóc), 世界 (thế giới)" },
      { char: "動", on: "ドウ", kun: "うご・く", mean: "ĐỘNG (hoạt động, chuyển động)", words: "動物 (động vật), 動画 (video)" }
    ],
    dialogue: {
      situation: "Phỏng vấn về sở thích lúc rảnh rỗi",
      lines: [
        { spk: "Kenta", text: "リンさんの趣味は何ですか。" },
        { spk: "Linh", text: "私の趣味は日本の漫画を読むことと、アニメの絵を描くことです。" },
        { spk: "Kenta", text: "へえ、絵を描くことが上手なんですね。" },
        { spk: "Linh", text: "ケンタくんの趣味は何ですか。" },
        { spk: "Kenta", text: "僕はサッカーをすることと、犬の世話をすることですよ。" }
      ]
    },
    culture: "Văn hóa thể thao học đường Nhật Bản: Bóng chày (Yakyu) là môn thể thao vua cực kì được ưa chuộng tại các trường THCS và THPT Nhật Bản với giải đấu Koshien danh giá.",
    quiz: [
      {
        q: "Chuyển động từ '読みます' sang thể từ điển trong mẫu câu sở thích: '私の趣味は本を (____) ことです。'",
        options: ["A. 読む", "B. 読み", "C. 読んだ", "D. 読ま"],
        a: 0,
        exp: "Động từ nhóm 1 '読みます' chuyển sang thể từ điển là '読む' (hàng い đổi thành hàng う)."
      },
      {
        q: "Chữ Hán '動' trong từ '動物' (động vật) ghép với '画' thành từ '動画' có nghĩa là gì?",
        options: ["A. Bức ảnh", "B. Đoạn video / clip", "C. Cuốn sách", "D. Bức tranh"],
        a: 1,
        exp: "動画 (ĐỘNG HỌA) trong tiếng Nhật hiện đại nghĩa là video / clip chuyển động."
      }
    ]
  },

  // BÀI 9
  {
    id: "bai-9",
    lessonNum: 9,
    title: "トイレへ行ってもいいですか",
    romaji: "Toire e itte mo ii desu ka",
    meaning: "Em đi vệ sinh có được không ạ?",
    goal: "Xin phép làm việc gì trong lớp học/trường và các tình huống hằng ngày; hỏi mượn vật dụng, trả lời đồng ý hoặc từ chối lịch sự.",
    badge: "Xin phép & Hỏi mượn đồ",
    vocab: [
      { jp: "トイレ", kana: "といれ", romaji: "toire", mean: "Nhà vệ sinh", type: "Danh từ" },
      { jp: "携帯電話", kana: "けいたいでんわ", romaji: "keitai denwa", mean: "Điện thoại di động", type: "Danh từ" },
      { jp: "鉛筆", kana: "えんぴつ", romaji: "enpitsu", mean: "Bút chì", type: "Danh từ" },
      { jp: "ペン", kana: "ぺん", romaji: "pen", mean: "Bút bi, bút mực", type: "Danh từ" },
      { jp: "消しゴム", kana: "けしごむ", romaji: "keshigomu", mean: "Cục tẩy", type: "Danh từ" },
      { jp: "使います", kana: "つかいます", romaji: "tsukaimasu", mean: "Sử dụng, dùng", type: "Động từ" },
      { jp: "借ります", kana: "かります", romaji: "karimasu", mean: "Mượn", type: "Động từ" },
      { jp: "開けます", kana: "あけます", romaji: "akemasu", mean: "Mở (cửa, sách)", type: "Động từ" },
      { jp: "閉めます", kana: "しめます", romaji: "shimemasu", mean: "Đóng (cửa, sách)", type: "Động từ" },
      { jp: "いいです", kana: "いいです", romaji: "ii desu", mean: "Được / Đồng ý", type: "Cụm phản hồi" },
      { jp: "だめです", kana: "だめです", romaji: "dame desu", mean: "Không được / Cấm", type: "Cụm phản hồi" }
    ],
    grammar: {
      title: "Mẫu câu xin phép lịch sự: Vて + もいいですか",
      formula: "[V thể て] + もいいですか",
      usage: "Dùng để xin phép đối phương cho phép mình làm một hành động nào đó. Trả lời đồng ý: はい、いいですよ。Từ chối lịch sự: すみません、ちょっと… (hoặc いいえ、だめです trong nội quy nghiêm ngặt).",
      examples: [
        "先生、トイレへ行ってもいいですか。(Thưa thầy, em đi vệ sinh có được không ạ?)",
        "このペンを使ってもいいですか。(Mình dùng cây bút này được không?)",
        "窓を開けてもいいですか。(Mình mở cửa sổ ra được không?)"
      ],
      rules: "Lưu ý: Hành động xin phép chỉ được thực hiện sau khi người có thẩm quyền/đối phương đã chấp thuận."
    },
    kanji: [
      { char: "使", on: "シ", kun: "つか・う", mean: "SỬ (sử dụng)", words: "使います (dùng), 使い方 (cách dùng)" },
      { char: "借", on: "シャク", kun: "か・りる", mean: "TÁ (vay, mượn)", words: "借ります (mượn), 借金 (tiền vay)" },
      { char: "消", on: "ショウ", kun: "き・える / け・す", mean: "TIÊU (tẩy, xóa, tắt)", words: "消しゴム (cục tẩy), 消します (tắt)" },
      { char: "開", on: "カイ", kun: "あ・ける / ひら・く", mean: "KHAI (mở ra)", words: "開けます (mở), 開始 (bắt đầu)" },
      { char: "閉", on: "ヘイ", kun: "し・める / と・じる", mean: "BẾ (đóng lại)", words: "閉めます (đóng cửa), 閉会 (bế mạc)" }
    ],
    dialogue: {
      situation: "Xin phép giáo viên trong lớp học",
      lines: [
        { spk: "Học sinh", text: "先生、すみません。ちょっと気分が悪いです。保健室へ行ってもいいですか。" },
        { spk: "Thầy giáo", text: "ええ、いいですよ。気をつけて行ってくださいね。" },
        { spk: "Học sinh", text: "ありがとうございます。" }
      ]
    },
    culture: "Quy tắc ứng xử và xin phép trong trường học Nhật Bản: Học sinh luôn gõ cửa phòng giáo viên 2 hoặc 3 tiếng, nói 'Shitsurei shimasu' (Em xin phép) trước khi bước vào và tuân thủ nghiêm ngặt giờ giấc.",
    quiz: [
      {
        q: "Điền dạng đúng của động từ '行きます' trong mẫu câu xin phép: 'トイレへ (____) もいいですか。'",
        options: ["A. 行きて", "B. 行って", "C. 行いて", "D. 行った"],
        a: 1,
        exp: "'行きます' là ngoại lệ của nhóm 1, chuyển sang thể て thành '行って': 行ってもいいですか."
      },
      {
        q: "Chữ Hán '消' trong '消しゴム' mang nghĩa gì?",
        options: ["A. Cục tẩy / Xóa đi", "B. Mượn sách", "C. Mở cửa", "D. Đóng cửa"],
        a: 0,
        exp: "Chữ 消 (TIÊU) nghĩa là xóa, tẩy, dập tắt (消しゴム = cục tẩy bút chì)."
      }
    ]
  },

  // BÀI 10
  {
    id: "bai-10",
    lessonNum: 10,
    title: "オーアンクアンのしかたを教えてください",
    romaji: "Ōankuwan no shikata o oshiete kudasai",
    meaning: "Xin hãy chỉ cho tôi cách chơi trò Ô ăn quan",
    goal: "Nhờ người khác hướng dẫn cách làm, cách đọc/chơi/nhập môn một hoạt động hoặc cách sử dụng một vật; nói lời nhờ vả lịch sự.",
    badge: "Cách làm & Lời nhờ vả lịch sự",
    vocab: [
      { jp: "しかた／やり方", kana: "しかた／やりかた", romaji: "shikata / yarikata", mean: "Cách làm, phương pháp", type: "Danh từ" },
      { jp: "読み方", kana: "よみかた", romaji: "yomikata", mean: "Cách đọc", type: "Danh từ" },
      { jp: "書き方", kana: "かきかた", romaji: "kakikata", mean: "Cách viết", type: "Danh từ" },
      { jp: "使い方", kana: "つかいかた", romaji: "tsukaikata", mean: "Cách sử dụng", type: "Danh từ" },
      { jp: "漢字", kana: "かんじ", romaji: "kanji", mean: "Chữ Hán Kanji", type: "Danh từ" },
      { jp: "発音", kana: "はつおん", romaji: "hatsuon", mean: "Phát âm", type: "Danh từ" },
      { jp: "盆踊り", kana: "ぼんおどり", romaji: "bon-odori", mean: "Điệu múa Bon truyền thống", type: "Danh từ" },
      { jp: "教えます", kana: "おしえます", romaji: "oshiemasu", mean: "Dạy, chỉ bảo", type: "Động từ" },
      { jp: "分かります", kana: "わかります", romaji: "wakarimasu", mean: "Hiểu, nắm rõ", type: "Động từ" },
      { jp: "できます", kana: "できます", romaji: "dekimasu", mean: "Có thể làm được", type: "Động từ" }
    ],
    grammar: {
      title: "Cấu trúc danh từ chỉ cách làm (V-stem + 方) và nhờ vả (Vてください)",
      formula: "1. Vます-stem + 方 (かた) = Cách làm việc V\n2. [N] を 教えてください = Xin hãy chỉ cho tôi...",
      usage: "Dùng để biểu đạt cách thức thực hiện hành động: 読みます -> 読み方 (cách đọc), 使い方 (cách dùng). Động từ thể て + ください dùng để đưa ra lời nhờ vả lịch sự.",
      examples: [
        "この漢字の読み方を教えてください。(Xin hãy chỉ cho tôi cách đọc chữ Hán này.)",
        "オーアンクアンのしかたを教えてください。(Xin hãy chỉ cho tôi cách chơi Ô ăn quan.)",
        "日本の盆踊りのやり方を教えてください。(Xin hãy chỉ cho tôi cách múa điệu Bon của Nhật Bản.)"
      ]
    },
    kanji: [
      { char: "帰", on: "キ", kun: "かえ・る", mean: "QUY (trở về)", words: "帰ります (về nhà), 帰国 (về nước)" },
      { char: "漢", on: "カン", kun: "-", mean: "HÁN (chữ Hán, người Hán)", words: "漢字 (chữ Hán), 漢文 (hán văn)" },
      { char: "発", on: "ハツ・ホツ", kun: "-", mean: "PHÁT (xuất phát, phát sinh)", words: "発音 (phát âm), 出発 (xuất phát)" },
      { char: "音", on: "オン・イン", kun: "おと・ね", mean: "ÂM (âm thanh)", words: "発音 (phát âm), 音楽 (âm nhạc)" },
      { char: "入", on: "ニュウ", kun: "はい・る / い・れる", mean: "NHẬP (đi vào)", words: "入ります (vào), 入口 (cửa vào)" }
    ],
    dialogue: {
      situation: "Giới thiệu trò chơi dân gian Việt Nam cho bạn người Nhật",
      lines: [
        { spk: "Yuto", text: "アンさん、その木の枠と石は何ですか。" },
        { spk: "An", text: "これはベトナムの伝統的な遊びで、『オーアンクアン』と言います。" },
        { spk: "Yuto", text: "おもしろそうですね！オーアンクアンのしかたを教えてください。" },
        { spk: "An", text: "はい、いいですよ。まず、石を5つずつマスに配りますよ。" }
      ]
    },
    culture: "Điệu múa Bon Odori và trò chơi truyền thống Nhật Bản: Điệu múa Bon Odori diễn ra vào đêm hội Obon mùa hè quanh tháp Yagura nhằm chào đón linh hồn tổ tiên. Trò chơi dân gian Nhật gồm Kendama, Koma (quay cù), Hanetsuki (đánh vợt cầu lông gỗ).",
    quiz: [
      {
        q: "Chuyển cụm 'Cách viết chữ Hán' sang tiếng Nhật:",
        options: ["A. 漢字の書き方", "B. 漢字の読み方", "C. 漢字の使い方", "D. 漢字のしかた"],
        a: 0,
        exp: "Viết là 書きます, bỏ ます thêm 方 thành 書き方 -> 漢字の書き方 (cách viết chữ Hán)."
      },
      {
        q: "Hai chữ Hán '発' và '音' ghép lại thành từ nào?",
        options: ["A. 音楽 (Âm nhạc)", "B. 発音 (Phát âm)", "C. 出発 (Xuất phát)", "D. 漢字 (Chữ Hán)"],
        a: 1,
        exp: "Chữ 発 (PHÁT) và 音 (ÂM) tạo thành từ 発音 (Hatsuon = phát âm)."
      }
    ]
  },

  // ÔN TẬP 3
  {
    id: "on-tap-3",
    lessonNum: 10.5,
    title: "ÔN TẬP 3 (BÀI 8 – 10)",
    romaji: "Fukushū 3 (Dai 8-ka ~ Dai 10-ka)",
    meaning: "Củng cố tổng hợp kiến thức Bài 8, 9, 10",
    goal: "Nói sở thích bằng Vることです, xin phép bằng Vてもいいですか, và nhờ giải thích cách làm bằng V方 / 教えてください.",
    badge: "Tổng hợp kiến thức Chặng 3",
    isReview: true,
    summary: "Ôn tập 3 chuyên đề cốt lõi: (1) Danh từ hóa động từ Vることです; (2) Xin phép Vてもいいですか; (3) Hướng dẫn cách làm V-stem + 方 / Vてください. Chữ Hán: 写, 真, 世, 動, 使, 借, 消, 開, 閉, 帰, 漢, 発, 音, 入.",
    quiz: [
      {
        q: "Chọn câu có cấu trúc xin phép mở cửa sổ đúng ngữ pháp:",
        options: [
          "A. 窓を開けてもいいですか。",
          "B. 窓を開けることですか。",
          "C. 窓を開け方ですか。",
          "D. 窓を開けますもいいですか。"
        ],
        a: 0,
        exp: "Cấu trúc xin phép dùng thể て + もいいですか: 窓を開けてもいいですか."
      },
      {
        q: "Chữ Hán '開' (Mở) có chữ đối lập là chữ nào?",
        options: ["A. 閉 (Đóng)", "B. 入 (Vào)", "C. 出 (Ra)", "D. 帰 (Về)"],
        a: 0,
        exp: "Chữ 開 (KHAI - mở) đối lập với chữ 閉 (BẾ - đóng)."
      }
    ]
  },

  // BÀI 11
  {
    id: "bai-11",
    lessonNum: 11,
    title: "ホアンキエムこよりタイこの方が大きいです",
    romaji: "Hoankiemu-ko yori Tai-ko no hō ga ōkii desu",
    meaning: "Hồ Tây lớn hơn hồ Hoàn Kiếm",
    goal: "So sánh địa hình, khí hậu, khoảng cách, quy mô hoặc đặc điểm giữa hai địa điểm; đọc số liệu/bản đồ/bảng để kiểm tra thông tin.",
    badge: "So sánh hai đối tượng",
    vocab: [
      { jp: "湖", kana: "みずうみ", romaji: "mizuumi", mean: "Hồ nước", type: "Danh từ" },
      { jp: "島", kana: "しま", romaji: "shima", mean: "Hòn đảo", type: "Danh từ" },
      { jp: "洞窟", kana: "どうくつ", romaji: "dōkutsu", mean: "Hang động", type: "Danh từ" },
      { jp: "大きい・小さい", kana: "おおきい・ちいさい", romaji: "ōkii / chiisai", mean: "To lớn / Nhỏ bé", type: "Tính từ đuôi い" },
      { jp: "高い・低い", kana: "たかい・ひくい", romaji: "takai / hikui", mean: "Cao / Thấp", type: "Tính từ đuôi い" },
      { jp: "長い・短い", kana: "ながい・みじかい", romaji: "nagai / mijikai", mean: "Dài / Ngắn", type: "Tính từ đuôi い" },
      { jp: "近い・遠い", kana: "ちかい・とおい", romaji: "chikai / tōi", mean: "Gần / Xa", type: "Tính từ đuôi い" },
      { jp: "多い・少ない", kana: "おおい・すくない", romaji: "ōi / sukunai", mean: "Nhiều / Ít", type: "Tính từ đuôi い" },
      { jp: "世界遺産", kana: "せかいいさん", romaji: "sekai isan", mean: "Di sản thế giới", type: "Danh từ" },
      { jp: "人口", kana: "じんこう", romaji: "jinkō", mean: "Dân số", type: "Danh từ" }
    ],
    grammar: {
      title: "Mẫu câu so sánh hơn giữa hai đối tượng: より ... の方が",
      formula: "1. Câu hỏi: N1 と N2 と どちらが [Tính từ] ですか。\n2. Câu trả lời: N1 より N2 の方が [Tính từ] です。\n3. Ngang bằng: どちらも [Tính từ] です。",
      usage: "Dùng để so sánh tính chất giữa hai đối tượng. 'より' đánh dấu vật làm mốc so sánh (hơn cái gì), 'の方が' đánh dấu đối tượng vượt trội hơn.",
      examples: [
        "ホアンキエム湖よりタイ湖の方が大きいです。(Hồ Tây lớn hơn hồ Hoàn Kiếm.)",
        "ハノイとホーチミン市とどちらが人口が多いですか。(Hà Nội và TP.HCM nơi nào dân số đông hơn?)",
        "富士山よりファンシーパン山の方が高いです。(Đỉnh Fansipan cao hơn núi Phú Sĩ.)"
      ]
    },
    kanji: [
      { char: "島", on: "トウ", kun: "しま", mean: "ĐẢO (hòn đảo)", words: "島 (hòn đảo), フーコック島 (đảo Phú Quốc)" },
      { char: "多", on: "タ", kun: "おお・い", mean: "ĐA (nhiều)", words: "多い (nhiều), 多少 (ít nhiều)" },
      { char: "少", on: "ショウ", kun: "すく・ない / すこ・し", mean: "THIỂU (ít, một chút)", words: "少ない (ít), 少し (một chút)" },
      { char: "近", on: "キン", kun: "ちか・い", mean: "CẬN (gần)", words: "近い (gần), 近所 (hàng xóm)" },
      { char: "市", on: "シ", kun: "いち", mean: "THỊ (thành phố, chợ)", words: "ホーチミン市 (TP. Hồ Chí Minh), 市民 (thị dân)" }
    ],
    dialogue: {
      situation: "So sánh các địa danh du lịch nổi tiếng",
      lines: [
        { spk: "Ken", text: "トゥアンくん、ハロン湾とフォンニャ洞窟とどちらがハノイから近いですか。" },
        { spk: "Tuan", text: "フォンニャ洞窟よりハロン湾の方がずっと近いですよ。" },
        { spk: "Ken", text: "どちらも世界遺産ですね！" },
        { spk: "Tuan", text: "はい、どちらもとても有名で美しい自然遺産ですよ。" }
      ]
    },
    culture: "Di sản thế giới ở Nhật Bản và Việt Nam: Nhật Bản nổi tiếng với núi Phú Sĩ (Fujisan), đền Itsukushima, cố đô Kyoto; Việt Nam tự hào với Vịnh Hạ Long, Quần thể Tràng An và Cố đô Huế.",
    quiz: [
      {
        q: "Điền từ đúng để hoàn chỉnh câu so sánh: '富士山 (____) ファンシーパン山 (____) 高いです。'",
        options: ["A. より / の方が", "B. の方が / より", "C. と / と", "D. で / に"],
        a: 0,
        exp: "Mẫu câu so sánh chuẩn: N1 より N2 の方が + Tính từ (N2 hơn N1)."
      },
      {
        q: "Chữ Hán '多' (Đa - nhiều) đối nghĩa với chữ nào?",
        options: ["A. 少 (Thiểu - ít)", "B. 近 (Cận - gần)", "C. 市 (Thị)", "D. 島 (Đảo)"],
        a: 0,
        exp: "Đa (多 - nhiều) đối nghĩa với Thiểu (少 - ít)."
      }
    ]
  },

  // BÀI 12
  {
    id: "bai-12",
    lessonNum: 12,
    title: "田中さんはとてもやさしくて、親切です",
    romaji: "Tanaka-san wa totemo yasashikute, shinsetsu desu",
    meaning: "Chị Tanaka rất hiền và tốt bụng",
    goal: "Miêu tả bạn bè/người thân qua ảnh, nêu quan hệ, nơi sống, ngoại hình, tính cách, năng lực hoặc sở thích; nối các đặc điểm trong cùng một lượt nói.",
    badge: "Nối tính chất miêu tả tính cách & ngoại hình",
    vocab: [
      { jp: "やさしい", kana: "やさしい", romaji: "yasashii", mean: "Hiền lành, dịu dàng", type: "Tính từ đuôi い" },
      { jp: "親切", kana: "しんせつ", romaji: "shinsetsu", mean: "Tốt bụng, chu đáo", type: "Tính từ đuôi な" },
      { jp: "かっこいい", kana: "かっこいい", romaji: "kakkoii", mean: "Đẹp trai, bảnh bao, ngầu", type: "Tính từ đuôi い" },
      { jp: "きれい", kana: "きれい", romaji: "kirei", mean: "Đẹp, sạch sẽ", type: "Tính từ đuôi な" },
      { jp: "まじめ", kana: "まじめ", romaji: "majime", mean: "Nghiêm túc, chăm chỉ", type: "Tính từ đuôi な" },
      { jp: "明るい", kana: "あかるい", romaji: "akarui", mean: "Vui vẻ, tươi sáng", type: "Tính từ đuôi い" },
      { jp: "おもしろい", kana: "おもしろい", romaji: "omoshiroi", mean: "Thú vị, hài hước", type: "Tính từ đuôi い" },
      { jp: "頭がいい", kana: "あたまがいい", romaji: "atama ga ii", mean: "Thông minh, sáng dạ", type: "Cụm tính từ" },
      { jp: "背が高い", kana: "せがたかい", romaji: "se ga takai", mean: "Dáng người cao", type: "Cụm tính từ" },
      { jp: "住んでいます", kana: "すんでいます", romaji: "sunde imasu", mean: "Đang sống tại...", type: "Động từ" }
    ],
    grammar: {
      title: "Mẫu câu liên kết tính từ và danh từ miêu tả: ～くて / ～で",
      formula: "1. Tính từ đuôi い: Bỏ い + くて\n2. Tính từ đuôi な: Giữ gốc + で\n3. Danh từ: N + で",
      usage: "Dùng để liên kết nối tiếp các đặc điểm, phẩm chất, tính cách hoặc ngoại hình của một người / sự vật trong cùng một câu nói.",
      examples: [
        "田中先生はとてもやさしくて、親切です。(Thầy Tanaka rất hiền từ và tốt bụng.)",
        "あの人は背が高くて、かっこいいです。(Người kia dáng cao ráo và rất phong độ.)",
        "ナムくんはまじめで、頭がいい生徒です。(Bạn Nam là học sinh chăm chỉ và thông minh.)",
        "彼女は私の友だちで、ハノイに住んでいます。(Cô ấy là bạn tôi và hiện đang sống ở Hà Nội.)"
      ]
    },
    kanji: [
      { char: "親", on: "シン", kun: "おや / した・しい", mean: "THÂN (cha mẹ, thân thiết)", words: "親切 (tốt bụng), 両親 (bố mẹ)" },
      { char: "切", on: "セツ・サイ", kun: "き・る", mean: "THIẾT (cắt, khẩn thiết)", words: "親切 (tốt bụng), 切手 (con tem)" },
      { char: "低", on: "テイ", kun: "ひく・い", mean: "ĐÊ (thấp, kém)", words: "低い (thấp), 低下 (suy giảm)" },
      { char: "体", on: "タイ・テイ", kun: "からだ", mean: "THỂ (thân thể, cơ thể)", words: "体 (cơ thể), 体育 (thể dục)" },
      { char: "明", on: "メイ・ミョウ", kun: "あか・るい", mean: "MINH (sáng sủa, thông minh)", words: "明るい (vui vẻ, sáng), 明日 (ngày mai)" }
    ],
    dialogue: {
      situation: "Giới thiệu người bạn thân thiết",
      lines: [
        { spk: "Mai", text: "フオンさん、隣のクラスの田中さんを知っていますか。" },
        { spk: "Phương", text: "ええ、知っていますよ。田中さんは背が高くて、とてもかっこいいですね。" },
        { spk: "Mai", text: "それに、いつもやさしくて、親切ですよ。" },
        { spk: "Phương", text: "そうですね。サッカーもとても上手ですよ。" }
      ]
    },
    culture: "Đức tính Omoiyari (Chu đáo, biết nghĩ cho người khác) của người Nhật: Trong giao tiếp và đối nhân xử thế, người Nhật luôn đặt sự quan tâm, tinh tế, lịch sự và nhường nhịn lên hàng đầu.",
    quiz: [
      {
        q: "Nối tính từ '明るい' (tươi sáng, vui vẻ) với tính từ tiếp theo đúng ngữ pháp:",
        options: ["A. 明るいくて", "B. 明るくて", "C. 明るいで", "D. 明るく"],
        a: 1,
        exp: "Tính từ đuôi い đổi thành 'くて' bằng cách bỏ chữ い: 明るい -> 明るくて."
      },
      {
        q: "Chữ Hán '親切' đọc là gì và mang ý nghĩa gì?",
        options: [
          "A. しんせつ (Tốt bụng, tử tế)",
          "B. やさしい (Hiền từ)",
          "C. まじめ (Chăm chỉ)",
          "D. あたまがいい (Thông minh)"
        ],
        a: 0,
        exp: "親切 đọc là 'shinsetsu' (THÂN THIẾT = tốt bụng, tử tế, chu đáo)."
      }
    ]
  },

  // BÀI 13
  {
    id: "bai-13",
    lessonNum: 13,
    title: "コーバック通りでフーティウを食べることができます",
    romaji: "Kōbakku-tōri de hūtīu o taberu koto ga dekimasu",
    meaning: "Có thể ăn hủ tiếu ở phố Cô Bắc",
    goal: "Giới thiệu địa điểm và hoạt động/đồ ăn/dịch vụ có thể trải nghiệm ở đó; hỏi ở đâu có thể làm một việc khi du lịch.",
    badge: "Khả năng trải nghiệm & Du lịch",
    vocab: [
      { jp: "通り", kana: "とおり", romaji: "tōri", mean: "Con phố, đại lộ", type: "Danh từ" },
      { jp: "市場", kana: "いちば", romaji: "ichiba", mean: "Khu chợ", type: "Danh từ" },
      { jp: "旧市街", kana: "きゅうしがい", romaji: "kyūshigai", mean: "Khu phố cổ", type: "Danh từ" },
      { jp: "100円ショップ", kana: "ひゃくえんしょっぷ", romaji: "hyaku-en shoppu", mean: "Cửa hàng đồng giá 100 yên", type: "Danh từ" },
      { jp: "シクロ", kana: "しくろ", romaji: "shikuro", mean: "Xe xích lô", type: "Danh từ" },
      { jp: "水上人形劇", kana: "すいじょうにんぎょうげき", romaji: "suijō ningyōgeki", mean: "Múa rối nước", type: "Danh từ" },
      { jp: "お土産", kana: "おみやげ", romaji: "omiyage", mean: "Quà lưu niệm", type: "Danh từ" },
      { jp: "習います", kana: "ならいます", romaji: "naraimasu", mean: "Học tập, tiếp thu", type: "Động từ" },
      { jp: "フーティウ", kana: "ふーてぃう", romaji: "hūtīu", mean: "Món hủ tiếu", type: "Danh từ" },
      { jp: "バッチャン焼き", kana: "ばっちゃんやき", romaji: "batchanyaki", mean: "Gốm sứ Bát Tràng", type: "Danh từ" }
    ],
    grammar: {
      title: "Mẫu câu diễn đạt khả năng / trải nghiệm: Vることができます",
      formula: "[Địa điểm] で + [V thể từ điển (Vる)] + ことができます",
      usage: "Dùng để biểu thị khả năng thực tế hoặc cơ hội có thể làm được việc gì đó tại một địa điểm cụ thể. Trợ từ で chỉ địa điểm diễn ra hoạt động.",
      examples: [
        "コーバック通りでフーティウを食べることができます。(Có thể thưởng thức món hủ tiếu trên phố Cô Bắc.)",
        "ハノイの旧市街でシクロに乗ることができます。(Có thể đi xe xích lô ở khu phố cổ Hà Nội.)",
        "どこでお土産を買うことができますか。(Có thể mua quà lưu niệm ở đâu vậy?)"
      ],
      expansion: "Hỏi và trả lời rút gọn: どこでできますか。― [Địa điểm] でできます。"
    },
    kanji: [
      { char: "通", on: "ツウ", kun: "とお・る / かよ・う", mean: "THÔNG (thông qua, đường phố)", words: "通り (con đường), 交通 (giao thông)" },
      { char: "乗", on: "ジョウ", kun: "の・る", mean: "THỪA (lên xe, cưỡi)", words: "乗ります (lên xe), 乗客 (hành khách)" },
      { char: "習", on: "シュウ", kun: "なら・う", mean: "TẬP (học tập, ôn luyện)", words: "習います (học), 練習 (luyện tập)" },
      { char: "桜", on: "オウ", kun: "さくら", mean: "ANH (hoa anh đào)", words: "桜 (hoa anh đào)" },
      { char: "館", on: "カン", kun: "-", mean: "QUÁN (tòa nhà, viện, bảo tàng)", words: "水族館 (thủy cung), 図書館 (thư viện)" }
    ],
    dialogue: {
      situation: "Tư vấn điểm vui chơi ăn uống cho du khách",
      lines: [
        { spk: "Du khách Nhật", text: "すみません、ハノイでおいしいフォーを食べることができますか。" },
        { spk: "Hướng dẫn viên", text: "はい、旧市街のバットダン通りでおいしいフォーを食べることができますよ。" },
        { spk: "Du khách Nhật", text: "水上人形劇はどこで見ることができますか。" },
        { spk: "Hướng dẫn viên", text: "ホアンキエム湖の近くの劇場で見ることができますよ。" }
      ]
    },
    culture: "Cửa hàng 100 Yên (Hyaku-en Shop) tại Nhật Bản: Nổi tiếng với chuỗi Daiso, Seria, Can Do nơi bán vô số mặt hàng chất lượng cao, đồ gia dụng, văn phòng phẩm tiện lợi chỉ với giá 100 yên.",
    quiz: [
      {
        q: "Chuyển câu sau sang tiếng Nhật: 'Có thể đi xe xích lô ở phố cổ':",
        options: [
          "A. 旧市街でシクロに乗ることができます。",
          "B. 旧市街にシクロを乗るのことです。",
          "C. 旧市街でシクロに乗りますことができます。",
          "D. 旧市街へシクロを乗ってできます。"
        ],
        a: 0,
        exp: "Công thức khả năng: Địa điểm で + Vる + ことができます: 旧市街でシクロに乗ることができます."
      },
      {
        q: "Chữ Hán '桜' mang biểu tượng văn hóa nào của Nhật Bản?",
        options: ["A. Núi Phú Sĩ", "B. Hoa anh đào (Sakura)", "C. Trà đạo", "D. Múa Bon"],
        a: 1,
        exp: "Chữ 桜 (ANH) phát âm là Sakura, quốc hoa biểu tượng của đất nước mặt trời mọc."
      }
    ]
  },

  // BÀI 14 - ÔN TẬP TỔNG KẾT CUỐI SÁCH
  {
    id: "bai-14",
    lessonNum: 14,
    title: "ふりかえり — ÔN TẬP CUỐI NĂM LỚP 7",
    romaji: "Furikaeri — Sō-fukushū Dai 1-ka ~ Dai 13-ka",
    meaning: "Hệ thống hóa toàn bộ 13 năng lực cốt lõi Tiếng Nhật 7",
    goal: "Tự đánh giá toàn bộ 13 mục tiêu giao tiếp, biến đổi động từ Vます - Vて - Vる, hệ thống chữ Hán và các mẫu câu trọng tâm cả năm.",
    badge: "Tổng kết toàn khóa Tiếng Nhật 7",
    isReview: true,
    summary: "Hệ thống hóa 13 năng lực giao tiếp: (1) Thời khóa biểu & tần suất chu kì; (2) Mục đích chuyển động; (3) Chuỗi sinh hoạt với thể て; (4) Trao nhận quà tặng; (5) Hiện tượng thời tiết đang diễn ra; (6) Hành động tại địa điểm; (7) Miêu tả trang phục trên người; (8) Nói sở thích với Vること; (9) Xin phép Vてもいいですか; (10) Cách làm V方 và nhờ vả Vてください; (11) So sánh 2 đối tượng より...の方が; (12) Nối tính từ miêu tả tính cách/ngoại hình; (13) Biểu đạt khả năng trải nghiệm Vることができます.",
    quiz: [
      {
        q: "Chọn cặp biến đổi động từ đúng của '行きます' (đi):",
        options: [
          "A. 行きます → 行って → 行く",
          "B. 行きます → 行きて → 行きる",
          "C. 行きます → 行んで → 行く",
          "D. 行きます → 行って → 行ける"
        ],
        a: 0,
        exp: "Ngoại lệ nhóm 1: 行きます (V-masu) → 行って (V-te) → 行く (V-ru thể từ điển)."
      },
      {
        q: "Cụm từ nào biểu thị lời nhờ vả lịch sự 'Xin hãy chỉ cách đọc chữ Hán này'?",
        options: [
          "A. この漢字の読み方を教えてください。",
          "B. この漢字の読み方を教えてもいいですか。",
          "C. この漢字の読み方は教えることです。",
          "D. この漢字の読み方より教えます。"
        ],
        a: 0,
        exp: "Mẫu câu nhờ hướng dẫn cách làm: [N] の [V-stem] 方 を 教えてください."
      }
    ]
  }
];

// BẢNG NGỮ PHÁP TỔNG HỢP 13 BÀI
const grammarSummaryTable = [
  { bài: "Bài 1", mẫu: "Khoảng thời gian + に + số + 回 + Vます", côngDụng: "Nói và hỏi tần suất hoạt động theo chu kì", víDụ: "一週間に2回日本語を勉強します。" },
  { bài: "Bài 2", mẫu: "Địa điểm へ + V-stem + に + 行きます／行きました", côngDụng: "Đi đâu để làm gì; kể chuyến đi kì nghỉ đã qua", víDụ: "山へ写真をとりに行きました。" },
  { bài: "Bài 3", mẫu: "V1て、V2て、... Vます／ました", côngDụng: "Nối chuỗi hành động tuần tự theo thời gian", víDụ: "うちへ帰って、宿題をします。" },
  { bài: "Bài 4", mẫu: "AはBにNをあげます / BはAにNをもらいます", côngDụng: "Nói hành động trao tặng và nhận quà", víDụ: "誕生日に母に時計をもらいました。" },
  { bài: "Bài 5", mẫu: "Địa điểm は今、hiện tượng が Vています", côngDụng: "Mô tả hiện tượng thời tiết đang diễn ra", víDụ: "ハノイは今、雨が降っています。" },
  { bài: "Bài 6", mẫu: "Địa điểm で Vています; Nơi に います", côngDụng: "Nói hành động diễn ra tại địa điểm cụ thể", víDụ: "体育館で歌を歌っています。" },
  { bài: "Bài 7", mẫu: "Nを着ています／はいています／かぶっています", côngDụng: "Miêu tả trạng thái trang phục, phụ kiện mang trên người", víDụ: "チャンさんは赤い帽子をかぶっています。" },
  { bài: "Bài 8", mẫu: "趣味は Vることです", côngDụng: "Danh hóa động từ thể từ điển để nói về sở thích", víDụ: "私の趣味はドラマを見ることです。" },
  { bài: "Bài 9", mẫu: "Vて + もいいですか", côngDụng: "Xin phép làm một hành động; hỏi mượn đồ", víDụ: "トイレへ行ってもいいですか。" },
  { bài: "Bài 10", mẫu: "V-stem + 方; ～を教えてください", côngDụng: "Nói 'cách làm'; đưa ra lời nhờ chỉ dẫn lịch sự", víDụ: "オーアンクアンのしかたを教えてください。" },
  { bài: "Bài 11", mẫu: "N1より N2の方が [Tính từ] です", côngDụng: "So sánh tính chất giữa hai đối tượng", víDụ: "ホアンキエム湖よりタイ湖の方が大きいです。" },
  { bài: "Bài 12", mẫu: "Aい bỏ い + くて; Aな / N + で", côngDụng: "Nối nhiều tính chất miêu tả tính cách, ngoại hình", víDụ: "田中さんはやさしくて、親切です。" },
  { bài: "Bài 13", mẫu: "Địa điểm で + Vることができます", côngDụng: "Nói khả năng hoặc cơ hội trải nghiệm tại một nơi", víDụ: "コーバック通りでフーティウを食べることができます。" }
];

// BẢNG ĐỘNG TỪ Vます → Vて → Vる
const verbConjugationTable = [
  { nhóm: "Nhóm 1 (い・ち・り → って)", masu: "買います (kaimasu)", te: "買って (katte)", ru: "買う (kau)", nghĩa: "Mua sắm" },
  { nhóm: "Nhóm 1 (い・ち・り → って)", masu: "立ちます (tachimasu)", te: "立って (tatte)", ru: "立つ (tatsu)", nghĩa: "Đứng dậy" },
  { nhóm: "Nhóm 1 (い・ち・り → って)", masu: "取ります (torimasu)", te: "取って (totte)", ru: "取る (toru)", nghĩa: "Chụp ảnh / Cầm lấy" },
  { nhóm: "Nhóm 1 (に・び・み → んで)", masu: "遊びます (asobimasu)", te: "遊んで (asonde)", ru: "遊ぶ (asobu)", nghĩa: "Vui chơi" },
  { nhóm: "Nhóm 1 (に・び・み → んで)", masu: "読みます (yomimasu)", te: "読んで (yonde)", ru: "読む (yomu)", nghĩa: "Đọc sách" },
  { nhóm: "Nhóm 1 (き → いて)", masu: "聞きます (kikimasu)", te: "聞いて (kiite)", ru: "聞く (kiku)", nghĩa: "Nghe nhạc" },
  { nhóm: "Nhóm 1 (ぎ → いで)", masu: "泳ぎます (oyogimasu)", te: "泳いで (oyoide)", ru: "泳ぐ (oyogu)", nghĩa: "Bơi lội" },
  { nhóm: "Nhóm 1 (し → して)", masu: "話します (hanashimasu)", te: "話して (hanashite)", ru: "話す (hanasu)", nghĩa: "Nói chuyện" },
  { nhóm: "Ngoại lệ Nhóm 1", masu: "行きます (ikimasu)", te: "行って (itte)", ru: "行く (iku)", nghĩa: "Đi đến" },
  { nhóm: "Nhóm 2 (ます → て / る)", masu: "見ます (mimasu)", te: "見て (mite)", ru: "見る (miru)", nghĩa: "Xem, nhìn" },
  { nhóm: "Nhóm 2 (ます → て / る)", masu: "食べます (tabemasu)", te: "食べて (tabete)", ru: "食べる (taberu)", nghĩa: "Ăn uống" },
  { nhóm: "Nhóm 2 (ます → て / る)", masu: "起きます (okimasu)", te: "起きて (okite)", ru: "起きる (okiru)", nghĩa: "Thức dậy" },
  { nhóm: "Nhóm 3 (Bất quy tắc)", masu: "します (shimasu)", te: "して (shite)", ru: "する (suru)", nghĩa: "Làm, thực hiện" },
  { nhóm: "Nhóm 3 (Bất quy tắc)", masu: "来ます (kimasu)", te: "来て (kite)", ru: "来る (kuru)", nghĩa: "Đến, tới" },
  { nhóm: "Nhóm 3 (Danh từ + します)", masu: "勉強します (benkyō shimasu)", te: "勉強して (benkyō shite)", ru: "勉強する (benkyō suru)", nghĩa: "Học tập" }
];

// BẢNG CHỮ HÁN THEO BÀI
const kanjiMatrix = [
  { bài: "Bài 1", chữ: "回・英・物・地・曜", víDụ: "回数 (số lần), 英語 (tiếng Anh), 物理 (vật lí), 地理 (địa lí), 曜日 (thứ)" },
  { bài: "Bài 2", chữ: "毎・魚・海・好", víDụ: "毎週 (mỗi tuần), 魚 (con cá), 海 (biển), 好き (thích)" },
  { bài: "Bài 3", chữ: "朝・昼・夜・夕・方", víDụ: "朝 (sáng), 昼 (trưa), 夜 (tối/đêm), 夕方 (chiều tối), 方 (cách)" },
  { bài: "Bài 4", chữ: "去・祖・計・族・祝", víDụ: "去年 (năm ngoái), 祖父 (ông), 時計 (đồng hồ), 家族 (gia đình), 祝う (chúc)" },
  { bài: "Bài 5", chữ: "春・夏・秋・冬・出", víDụ: "春 (xuân), 夏 (hạ), 秋 (thu), 冬 (đông), 出る (ra ngoài)" },
  { bài: "Bài 6", chữ: "来・室・門・売・客", víDụ: "来る (đến), 教室 (phòng học), 門 (cổng), 売る (bán), 客 (khách)" },
  { bài: "Bài 7", chữ: "着・制・服・短・赤", víDụ: "着る (mặc), 制服 (đồng phục), 服 (quần áo), 短い (ngắn), 赤い (đỏ)" },
  { bài: "Bài 8", chữ: "写・真・世・動", víDụ: "写真 (ảnh), 世話 (chăm sóc), 動物 (động vật), 動画 (clip)" },
  { bài: "Bài 9", chữ: "使・借・消・開・閉", víDụ: "使う (dùng), 借りる (mượn), 消しゴム (tẩy), 開ける (mở), 閉める (đóng)" },
  { bài: "Bài 10", chữ: "帰・漢・発・音・入", víDụ: "帰る (về), 漢字 (chữ Hán), 発音 (phát âm), 音 (âm), 入る (vào)" },
  { bài: "Bài 11", chữ: "島・多・少・近・市", víDụ: "島 (đảo), 多い (nhiều), 少ない (ít), 近い (gần), 市 (thành phố)" },
  { bài: "Bài 12", chữ: "親・切・低・体・明", víDụ: "親 (cha mẹ), 親切 (tốt bụng), 低い (thấp), 体 (cơ thể), 明るい (sáng)" },
  { bài: "Bài 13", chữ: "通・乗・習・桜・館", víDụ: "通り (phố), 乗る (lên xe), 習う (học), 桜 (hoa anh đào), 館 (tòa nhà)" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    lessonsPart2,
    grammarSummaryTable,
    verbConjugationTable,
    kanjiMatrix
  };
}
