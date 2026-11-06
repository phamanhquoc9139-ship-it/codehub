// Dữ liệu Tiếng Nhật 8 - Phần 2: Bài 8 đến Bài 14, Ôn tập 3 & 4, Bảng tra nhanh, Động từ, Chữ Hán Matrix
// Sách giáo khoa Kết nối tri thức với cuộc sống (GDPT 2018)

const lessonsPart2 = [
  // BÀI 8
  {
    id: "bai-8",
    lessonNum: 8,
    title: "天気よほう",
    romaji: "Tenki yohō",
    meaning: "Dự báo thời tiết",
    goal: "Hiểu bản tin dự báo thời tiết; đưa ra dự đoán về thời tiết, nhiệt độ trong ngày; miêu tả hiện tượng thiên nhiên bắt đầu diễn ra.",
    badge: "Thời tiết & Dự đoán",
    vocab: [
      { jp: "天気予報", kana: "てんきよほう", romaji: "tenki yohō", mean: "Dự báo thời tiết", type: "Danh từ" },
      { jp: "晴れる", kana: "はれる", romaji: "hareru", mean: "Nắng ráo, trời quang", type: "Động từ" },
      { jp: "雨が降る", kana: "あめがふる", romaji: "ame ga furu", mean: "Mưa rơi", type: "Cụm động từ" },
      { jp: "雪が降る", kana: "ゆきがふる", romaji: "yuki ga furu", mean: "Tuyết rơi", type: "Cụm động từ" },
      { jp: "曇る", kana: "くもる", romaji: "kumoru", mean: "Nhiều mây, u ám", type: "Động từ" },
      { jp: "台風", kana: "たいふう", romaji: "taifū", mean: "Cơn bão nhiệt đới", type: "Danh từ" },
      { jp: "気温", kana: "きおん", romaji: "kion", mean: "Nhiệt độ không khí", type: "Danh từ" },
      { jp: "強い風", kana: "つよいかぜ", romaji: "tsuyoi kaze", mean: "Gió mạnh", type: "Cụm danh từ" },
      { jp: "急に", kana: "きゅうに", romaji: "kyū ni", mean: "Đột nhiên, bất ngờ", type: "Phó từ" },
      { jp: "朝から", kana: "あさから", romaji: "asa kara", mean: "Từ buổi sáng", type: "Cụm từ" },
      { jp: "夕方", kana: "ゆうがた", romaji: "yūgata", mean: "Chiều muộn, hoàng hôn", type: "Danh từ" },
      { jp: "地震", kana: "じしん", romaji: "jishin", mean: "Động đất", type: "Danh từ" }
    ],
    grammar: {
      title: "1. Dự đoán thời tiết: V／A／N でしょう / 2. Bắt đầu làm gì: Vます-stem + はじめます",
      formula: "① [Động từ/Tính từ/Danh từ thể thông thường] + でしょう (Có lẽ sẽ... / Chắc là...)\n② V(bỏ ます) + はじめます (Bắt đầu làm V / bắt đầu diễn ra...)",
      usage: "Cấu trúc ① thường xuất hiện trong các bản tin thời tiết hoặc khi phán đoán có cơ sở khoa học, số liệu (phát âm hạ giọng ở cuối câu 'しょう' để thể hiện sự dự đoán khách quan). Cấu trúc ② gắn sau thân động từ (Vます bỏ ます) để miêu tả thời điểm một hành động hoặc hiện tượng tự nhiên bắt đầu khởi phát.",
      examples: [
        "明日は朝から晴れるでしょう。(Ngày mai trời có lẽ sẽ nắng ráo từ sáng.)",
        "東京は午後から雨が降るでしょう。(Ở Tokyo từ chiều có lẽ sẽ có mưa rơi.)",
        "空が暗くなって、雨が降りはじめました。(Trời tối sầm lại và những hạt mưa bắt đầu rơi.)",
        "12月になると、雪が降りはじめます。(Cứ sang tháng 12 là tuyết bắt đầu rơi.)"
      ],
      rules: "Lưu ý đuôi でしょう: Khi dự đoán khách quan thì xuống giọng; khi hỏi để tìm kiếm sự đồng tình thì lên giọng."
    },
    kanji: [
      { char: "降", on: "コウ", kun: "お・りる / ふ・る", mean: "GIÁNG (rơi, xuống xe)", words: "降る (furu - mưa/tuyết rơi), 降ります (orimasu - xuống xe), 降雨 (kōu - lượng mưa)" },
      { char: "雪", on: "セツ", kun: "ゆき", mean: "TUYẾT (băng tuyết)", words: "雪 (yuki - tuyết), 大雪 (ōyuki - bão tuyết lớn), 雪だるま (yukidaruma - người tuyết)" },
      { char: "以", on: "イ", kun: "-", mean: "DĨ (lấy làm mốc)", words: "以上 (ijō - trở lên), 以下 (ika - trở xuống), 以前 (izen - trước đây)" },
      { char: "京", on: "キョウ・ケイ", kun: "みやこ", mean: "KINH (kinh đô, thủ đô)", words: "東京 (Tōkyō - Tokyo), 京都 (Kyōto - Kyoto), 上京 (jōkyō - lên thủ đô)" },
      { char: "急", on: "キュウ", kun: "いそ・ぐ", mean: "CẤP (gấp, khẩn cấp, nhanh)", words: "急ぐ (isogu - vội vã), 急に (kyū ni - đột nhiên), 急行 (kyūkō - tàu tốc hành)" }
    ],
    dialogue: {
      situation: "Theo dõi bản tin dự báo thời tiết cho chuyến dã ngoại cuối tuần",
      lines: [
        { spk: "Bản tin", text: "明日の東京の天気です。朝は晴れるでしょう。しかし、午後から強い風が吹き、雨が降りはじめるでしょう。" },
        { spk: "Nam", text: "明日は午後から雨ですね。傘を持って行ったほうがいいですね。" },
        { spk: "Mai", text: "ええ、気温も下がるでしょうから、上着も忘れないでくださいね。" }
      ]
    },
    culture: "防災教育・防災訓練 (Giáo dục & Diễn tập phòng chống thiên tai): Nhật Bản là quốc gia chịu nhiều thiên tai (động đất, sóng thần, bão lũ), do đó học sinh được huấn luyện phản xạ an toàn ngay từ tiểu học: quy tắc 'O-Ka-Shi-Mo' (押さない - Không xô đẩy, 駆けない - Không chạy loạn, 喋らない - Không nói chuyện ồn ào, 戻らない - Không quay lại lấy đồ) khi sơ tán.",
    quiz: [
      {
        q: "Điền mẫu câu thích hợp: 空が暗くなって、雨が (____)。",
        options: ["A. 降りはじめました", "B. 降るでしょう", "C. 降ったことがあります", "D. 降らないでください"],
        a: 0,
        exp: "Miêu tả hiện tượng vừa bắt đầu xảy ra: V-stem + はじめます -> 降りはじめました."
      },
      {
        q: "Chữ Hán '降' trong từ '雨が降る' mang âm Hán Việt là gì?",
        options: ["A. TUYẾT", "B. DĨ", "C. GIÁNG", "D. KINH"],
        a: 2,
        exp: "'降' có âm Hán Việt là GIÁNG (hoặc HÀNG), nghĩa là rơi xuống, giáng trần."
      }
    ]
  },

  // BÀI 9
  {
    id: "bai-9",
    lessonNum: 9,
    title: "気こうの変化",
    romaji: "Kikō no henka",
    meaning: "Biến đổi khí hậu / Thời tiết và mùa",
    goal: "Miêu tả sự thay đổi của thời tiết và cảnh sắc thiên nhiên theo từng mùa tại địa phương; biểu đạt tính chất dễ chịu hoặc thuận lợi của khí hậu.",
    badge: "Khí hậu & Chuyển mùa",
    vocab: [
      { jp: "気候", kana: "きこう", romaji: "kikō", mean: "Khí hậu", type: "Danh từ" },
      { jp: "季節", kana: "きせつ", romaji: "kisetsu", mean: "Mùa trong năm", type: "Danh từ" },
      { jp: "変化", kana: "へんか", romaji: "henka", mean: "Sự thay đổi, biến đổi", type: "Danh từ" },
      { jp: "暖かい", kana: "あたたかい", romaji: "atatakai", mean: "Ấm áp", type: "Tính từ đuôi い" },
      { jp: "涼しい", kana: "すずしい", romaji: "suzushii", mean: "Mát mẻ", type: "Tính từ đuôi い" },
      { jp: "蒸し暑い", kana: "むしあつい", romaji: "mushiatsui", mean: "Oi bức, nóng ẩm", type: "Tính từ đuôi い" },
      { jp: "寒い", kana: "さむい", romaji: "samui", mean: "Lạnh buốt", type: "Tính từ đuôi い" },
      { jp: "少しずつ", kana: "すこしずつ", romaji: "sukoshizutsu", mean: "Từng chút một, dần dần", type: "Phó từ" },
      { jp: "過ごす", kana: "すごす", romaji: "sugosu", mean: "Trải qua, sống qua (thời gian)", type: "Động từ" },
      { jp: "紅葉", kana: "こうよう / もみじ", romaji: "kōyō / momiji", mean: "Lá đỏ mùa thu", type: "Danh từ" },
      { jp: "咲く", kana: "さく", romaji: "saku", mean: "Nở (hoa)", type: "Động từ" },
      { jp: "四季", kana: "しき", romaji: "shiki", mean: "Bốn mùa (xuân, hạ, thu, đông)", type: "Danh từ" }
    ],
    grammar: {
      title: "1. Trở nên/biến đổi: ～くなります／になります / 2. Dễ làm việc gì: Vます-stem + やすい / 3. Phó từ: 少しずつ",
      formula: "① Tính từ đuôi い (bỏ い) + くなります\n② Tính từ đuôi な / Danh từ + になります\n③ V(bỏ ます) + やすい (Dễ làm V, dễ chịu...)\n④ 少しずつ + [Biến đổi]",
      usage: "Mẫu ① và ② dùng để diễn tả sự thay đổi trạng thái theo thời gian. Mẫu ③ gắn vào thân động từ mang ý nghĩa 'dễ thực hiện V' hoặc tạo thành tính từ chỉ đặc điểm dễ chịu (ví dụ: 過ごしやすい - dễ chịu để trải qua, 覚えやすい - dễ nhớ). Phó từ '少しずつ' biểu thị sự chuyển biến từ từ, từng bước một.",
      examples: [
        "2月になると、少しずつあたたかくなります。(Cứ sang tháng 2 là trời ấm dần lên từng chút một.)",
        "秋になると、木の葉が赤くなります。(Khi sang mùa thu, lá cây chuyển sang màu đỏ.)",
        "11月は涼しくて、とても過ごしやすいです。(Tháng 11 trời mát mẻ nên vô cùng dễ chịu.)",
        "この日本語のテキストは分かりやすくて、勉強しやすいです。(Cuốn sách giáo trình tiếng Nhật này rất dễ hiểu và dễ học.)"
      ],
      rules: "Đối lập với Vやすい (dễ làm) là Vにくい (khó làm): 読みやすい (dễ đọc) >< 読みにくい (khó đọc)."
    },
    kanji: [
      { char: "温", on: "オン", kun: "あたた・かい / あたた・まる", mean: "ÔN (ấm áp, ôn hòa)", words: "温かい (atatakai - ấm áp), 気温 (kion - nhiệt độ), 温泉 (onsen - suối nước nóng)" },
      { char: "同", on: "ドウ", kun: "おな・じ", mean: "ĐỒNG (cùng, giống nhau)", words: "同じ (onaji - giống nhau), 同時 (dōji - đồng thời), 同級生 (dōkyūsei - bạn cùng khối)" },
      { char: "季", on: "キ", kun: "-", mean: "QUÝ (mùa, thời vụ)", words: "季節 (kisetsu - các mùa), 四季 (shiki - bốn mùa trong năm)" },
      { char: "涼", on: "リョウ", kun: "すず・しい / すず・む", mean: "LƯƠNG (mát mẻ)", words: "涼しい (suzushii - mát mẻ), 涼風 (ryōfū - cơn gió mát)" },
      { char: "住", on: "ジュウ", kun: "す・む / す・まう", mean: "TRÚ (cư trú, sinh sống)", words: "住む (sumu - sinh sống), 住所 (jūsho - địa chỉ cư trú)" }
    ],
    dialogue: {
      situation: "Hai bạn trao đổi về khí hậu bốn mùa ở Hà Nội và Tokyo",
      lines: [
        { spk: "Mai", text: "東京の秋はどうですか。" },
        { spk: "Kenta", text: "10月になると涼しくなって、山は紅葉でとてもきれいですよ。" },
        { spk: "Mai", text: "ハノイの秋も風が涼しくて、過ごしやすい季節です。" },
        { spk: "Kenta", text: "冬はどうですか。" },
        { spk: "Mai", text: "12月からは少しずつ寒くなりますが、雪は降りません。" }
      ]
    },
    culture: "紅葉 (Kōyō / Momiji - Phong tục ngắm lá đỏ mùa thu): Vào mùa thu (từ tháng 9 ở Hokkaido kéo dài đến tháng 12 ở Kyushu), khắp rừng núi và công viên Nhật Bản khoác lên mình sắc đỏ thắm, vàng rực rỡ của lá phong và ngân hạnh. Người Nhật có thú vui 'Momijigari' (thưởng ngoạn lá thu) cùng gia đình, chụp ảnh và thưởng thức bánh bao Momiji manju.",
    quiz: [
      {
        q: "Biến đổi tính từ '暖かい' sang cấu trúc biểu thị sự ấm lên dần dần:",
        options: ["A. 暖かくになります", "B. 暖かくなります", "C. 暖かいになります", "D. 暖かくします"],
        a: 1,
        exp: "Tính từ đuôi い bỏ い thêm くなります -> 暖かくなります (trở nên ấm áp)."
      },
      {
        q: "Chữ Hán '住' trong từ '住所' (địa chỉ) có âm Hán Việt là gì?",
        options: ["A. ÔN", "B. ĐỒNG", "C. LƯƠNG", "D. TRÚ"],
        a: 3,
        exp: "'住' có âm Hán Việt là TRÚ (trong cư trú, trú ngụ)."
      }
    ]
  },

  // BÀI 10
  {
    id: "bai-10",
    lessonNum: 10,
    title: "校そく",
    romaji: "Kōsoku",
    meaning: "Nội quy trường học",
    goal: "Hiểu và phát biểu các quy định bắt buộc phải tuân theo và những điều bị nghiêm cấm ở trường học; xây dựng nội quy lớp học văn minh.",
    badge: "Quy tắc & Kỷ luật",
    vocab: [
      { jp: "校則", kana: "こうそく", romaji: "kōsoku", mean: "Nội quy nhà trường", type: "Danh từ" },
      { jp: "規則", kana: "きそく", romaji: "kisoku", mean: "Quy tắc, điều lệ", type: "Danh từ" },
      { jp: "守る", kana: "まもる", romaji: "mamoru", mean: "Tuân thủ, giữ gìn", type: "Động từ" },
      { jp: "赤いスカーフ", kana: "あかいすかーふ", romaji: "akai sukāfu", mean: "Khăn quàng đỏ học sinh", type: "Cụm danh từ" },
      { jp: "制服", kana: "せいふく", romaji: "seifuku", mean: "Bộ đồng phục học sinh", type: "Danh từ" },
      { jp: "漫画", kana: "まんが", romaji: "manga", mean: "Truyện tranh Manga", type: "Danh từ" },
      { jp: "携帯電話", kana: "けいたいでんわ", romaji: "keitai denwa", mean: "Điện thoại di động", type: "Danh từ" },
      { jp: "走る", kana: "はしる", romaji: "hashiru", mean: "Chạy nhảy", type: "Động từ" },
      { jp: "廊下", kana: "ろうか", romaji: "rōka", mean: "Hành lang lớp học", type: "Danh từ" },
      { jp: "日直", kana: "にっちょく", romaji: "nitchoku", mean: "Trực nhật trong ngày", type: "Danh từ" },
      { jp: "図書室", kana: "としょしつ", romaji: "toshoshitsu", mean: "Phòng đọc thư viện", type: "Danh từ" },
      { jp: "持ってくる", kana: "もってくる", romaji: "motte kuru", mean: "Mang đến", type: "Động từ" }
    ],
    grammar: {
      title: "1. Bắt buộc phải làm: Vなければなりません / 2. Nghiêm cấm: Vてはいけません",
      formula: "① V(thể ない bỏ い) + ければなりません (Phải làm V / Nghĩa vụ bắt buộc)\n② V(thể て) + はいけません (Không được phép làm V / Nghiêm cấm)",
      usage: "Cấu trúc ① diễn đạt nghĩa vụ, bổn phận hoặc việc bắt buộc theo luật lệ, nội quy phải thực hiện. Cấu trúc ② dùng để ban bố lệnh cấm đoán nghiêm khắc, không cho phép ai làm hành động gì trong không gian chung.",
      examples: [
        "学校へ行く時、赤いスカーフをつけなければなりません。(Khi đến trường, học sinh phải đeo khăn quàng đỏ.)",
        "授業中、携帯電話を使ってはいけません。(Trong giờ học, tuyệt đối không được sử dụng điện thoại.)",
        "廊下を走ってはいけません。(Không được chạy nhảy ngoài hành lang.)",
        "学校に漫画を持ってきてはいけません。(Không được mang truyện tranh đến trường.)"
      ],
      rules: "Cách chia Vなければなりません: Nhóm 1: 書く -> 書かない -> 書かなければなりません; Nhóm 2: 食べる -> 食べない -> 食べなければなりません; Nhóm 3: する -> しなければなりません, くる -> こなければなりません."
    },
    kanji: [
      { char: "持", on: "ジ", kun: "も・つ", mean: "TRÌ (cầm, giữ, mang theo)", words: "持つ (motsu - cầm/nắm), 気持ち (kimochi - tâm trạng/cảm giác), お金持ち (okanemochi - người giàu)" },
      { char: "守", on: "シュ・ス", kun: "まも・る / もり", mean: "THỦ (bảo vệ, tuân thủ)", words: "守る (mamoru - bảo vệ/tuân thủ quy định), お守り (omamori - bùa may mắn bình an)" },
      { char: "走", on: "ソウ", kun: "はし・る", mean: "TẨU (chạy)", words: "走る (hashiru - chạy bộ), ごちそう (gochisō - bữa tiệc thịnh soạn)" },
      { char: "図", on: "ズ・ト", kun: "はか・る", mean: "ĐỒ (bản đồ, đồ họa)", words: "図書館 (toshokan - thư viện), 地図 (chizu - bản đồ), 図画 (zuga - tranh vẽ)" }
    ],
    dialogue: {
      situation: "Học sinh mới tìm hiểu nội quy trường lớp",
      lines: [
        { spk: "Học sinh mới", text: "先生、学校の校則について教えてください。" },
        { spk: "Thầy giáo", text: "毎朝、8時までに教室に入らなければなりません。そして制服を着てください。" },
        { spk: "Học sinh mới", text: "スマートフォンを持ってきてもいいですか。" },
        { spk: "Thầy giáo", text: "持ってきてもいいですが、授業中に使ってはいけませんよ。" }
      ]
    },
    culture: "日直 (Nitchoku - Chế độ trực nhật luân phiên của học sinh Nhật Bản): Ở trường Nhật không thuê lao công dọn dẹp phòng học mà mỗi ngày sẽ có 2 học sinh đảm nhiệm vai trò 'Nitchoku'. Nhiệm vụ: viết nhật ký lớp, hô khẩu lệnh chào đầu/cuối giờ (Kiritsu, Rei), lau bảng đen, tưới cây và tổ chức chia phần ăn trưa (Kyūshoku) cho cả lớp.",
    quiz: [
      {
        q: "Chọn câu diễn đạt: 'Học sinh phải nộp bài tập về nhà trước ngày mai':",
        options: [
          "A. 明日までに宿題を出さなければなりません。",
          "B. 明日までに宿題を出してはいけません。",
          "C. 明日までに宿題を出したいです。",
          "D. 明日までに宿題を出すでしょう。"
        ],
        a: 0,
        exp: "Bắt buộc phải làm gì: Vなければなりません -> 出さなければなりません."
      },
      {
        q: "Chữ Hán '守' trong từ '校則を守る' (tuân thủ nội quy) có âm Hán Việt là gì?",
        options: ["A. TRÌ", "B. THỦ", "C. TẨU", "D. ĐỒ"],
        a: 1,
        exp: "'守' có âm Hán Việt là THỦ (trong thủ hộ, tuân thủ quy tắc)."
      }
    ]
  },

  // ふくしゅう 3 — ÔN TẬP 3 (BÀI 8–10)
  {
    id: "on-tap-3",
    isReview: true,
    badge: "ÔN TẬP 3",
    title: "ふくしゅう 3 (Bài 8 – 10)",
    romaji: "Fukushū san",
    meaning: "Củng cố tổng hợp kiến thức Bài 8 đến Bài 10",
    summary: "Hệ thống hóa toàn bộ kiến thức về thời tiết, khí hậu bốn mùa và quy định nội quy học đường: Mẫu câu ～でしょう (dự đoán thời tiết); ～はじめます (bắt đầu hiện tượng gì); ～く／になります (biến đổi trạng thái); ～やすい (dễ chịu, dễ thực hiện); ～なければなりません (nghĩa vụ bắt buộc); ～てはいけません (cấm đoán).",
    quiz: [
      {
        q: "Khi đưa ra dự báo: 'Ngày mai ở Hà Nội trời có lẽ sẽ nắng', câu chuẩn là:",
        options: [
          "A. 明日のハノイは晴れるでしょう。",
          "B. 明日のハノイは晴れはじめます。",
          "C. 明日のハノイは晴れなければなりません。",
          "D. 明日のハノイは晴れてはいけません。"
        ],
        a: 0,
        exp: "Dự đoán thời tiết khách quan: V/A/N + でしょう -> 晴れるでしょう."
      },
      {
        q: "Cụm từ nào biểu đạt lệnh cấm: 'Không được chạy ở hành lang'?",
        options: [
          "A. 廊下を走らなければなりません。",
          "B. 廊下を走ってはいけません。",
          "C. 廊下を走りはじめます。",
          "D. 廊下を走るのが好きです。"
        ],
        a: 1,
        exp: "Lệnh cấm đoán nghiêm khắc: V(thể て) + はいけません -> 走ってはいけません."
      },
      {
        q: "Biến đổi tính từ '涼しい' thành thể biểu đạt sự thay đổi trạng thái:",
        options: ["A. 涼しくなります", "B. 涼しいになります", "C. 涼しになります", "D. 涼しくてになります"],
        a: 0,
        exp: "Tính từ đuôi い bỏ い + くなります -> 涼しくなります."
      },
      {
        q: "Chữ Hán nào ghép từ 'Đồ' (bản đồ, tranh vẽ) và 'Thư quán' để chỉ Thư viện?",
        options: ["A. 図書館", "B. 地図", "C. 映画館", "D. 体育館"],
        a: 0,
        exp: "図書館 (Toshokan) = Thư viện."
      }
    ]
  },

  // BÀI 11
  {
    id: "bai-11",
    lessonNum: 11,
    title: "あやまる",
    romaji: "Ayamaru",
    meaning: "Xin lỗi và nêu lí do",
    goal: "Bày tỏ lời xin lỗi chân thành trong các tình huống (đi muộn, ngủ quên, quên bài tập, làm đổ hỏng đồ vật); giải thích nguyên nhân và đề xuất hướng sửa chữa.",
    badge: "Ứng xử & Xin lỗi",
    vocab: [
      { jp: "謝る", kana: "あやまる", romaji: "ayamaru", mean: "Xin lỗi, tạ lỗi", type: "Động từ" },
      { jp: "すみません", kana: "すみません", romaji: "sumimasen", mean: "Xin lỗi / Cảm ơn", type: "Thành ngữ giao tiếp" },
      { jp: "ごめんなさい", kana: "ごめんなさい", romaji: "gomennasai", mean: "Xin lỗi (thân mật)", type: "Thành ngữ giao tiếp" },
      { jp: "遅れる", kana: "おくれる", romaji: "okureru", mean: "Bị muộn, trễ giờ", type: "Động từ" },
      { jp: "寝坊する", kana: "ねぼうする", romaji: "nebō suru", mean: "Ngủ quên, dậy muộn", type: "Động từ" },
      { jp: "忘れる", kana: "わすれる", romaji: "wasureru", mean: "Quên mất", type: "Động từ" },
      { jp: "落とす", kana: "おとす", romaji: "otosu", mean: "Làm rơi, đánh rơi", type: "Động từ" },
      { jp: "壊す", kana: "こわす", romaji: "kowasu", mean: "Làm hỏng, đánh vỡ", type: "Động từ" },
      { jp: "困る", kana: "こまる", romaji: "komaru", mean: "Gặp rắc rối, bối rối", type: "Động từ" },
      { jp: "宿題", kana: "しゅくだい", romaji: "shukudai", mean: "Bài tập về nhà", type: "Danh từ" },
      { jp: "遅刻", kana: "ちこく", romaji: "chikoku", mean: "Việc đi muộn", type: "Danh từ" },
      { jp: "理由", kana: "りゆう", romaji: "riyū", mean: "Lý do, nguyên nhân", type: "Danh từ" }
    ],
    grammar: {
      title: "1. Xin lỗi vì đã...: Vて、すみません / 2. Nối nguyên nhân - kết quả: V1て、V2ました / 3. Lỡ làm việc đáng tiếc: Vてしまいました",
      formula: "① V(thể て) + すみません (Xin lỗi vì đã...)\n② V1(thể て)、V2(quá khứ)ました (Vì làm V1 nên đã dẫn tới V2)\n③ V(thể て) + しまいました (Đã lỡ/hoàn tất ngoài ý muốn với sắc thái tiếc nuối)",
      usage: "Cấu trúc ① dùng để bày tỏ lời tạ lỗi trực tiếp gắn với hành động cụ thể gây phiền hà. Cấu trúc ② dùng thể て làm cầu nối chỉ nguyên nhân tự nhiên dẫn tới hệ quả khách quan. Cấu trúc ③ diễn tả sự tiếc nuối, hối hận khi một việc lỡ xảy ra hoặc nhận lỗi về sơ suất của mình.",
      examples: [
        "遅くなって、すみません。(Em xin lỗi vì đã đến muộn ạ.)",
        "今朝寝坊して、遅刻してしまいました。(Sáng nay em lỡ ngủ quên nên đã bị đi học muộn ạ.)",
        "宿題を家に忘れてしまいました。(Em lỡ để quên bài tập ở nhà mất rồi ạ.)",
        "友達のペンを落として、壊してしまいました。(Tớ lỡ làm rơi chiếc bút của bạn nên làm hỏng mất rồi.)"
      ],
      rules: "Lời xin lỗi chân thành chuẩn mực tiếng Nhật gồm 3 yếu tố: Nói rõ việc sơ suất -> Bày tỏ tạ lỗi nhận trách nhiệm -> Đưa ra giải pháp sửa chữa/hứa không tái phạm."
    },
    kanji: [
      { char: "遅", on: "チ", kun: "おく・れる / おそ・い", mean: "TRÌ (chậm chạp, muộn)", words: "遅れる (okureru - bị muộn), 遅い (osoi - chậm/muộn), 遅刻 (chikoku - sự đi muộn)" },
      { char: "困", on: "コン", kun: "こま・る", mean: "KHỐN (khó khăn, khốn đốn)", words: "困る (komaru - gặp rắc rối/khó xử), 困難 (konnan - gian khổ)" },
      { char: "落", on: "ラク", kun: "お・ちる / お・とす", mean: "LẠC (rơi rớt, rụng)", words: "落とす (otosu - làm rơi), 落ちる (ochiru - bị rơi), 落第 (rakudai - thi trượt)" },
      { char: "業", on: "ギョウ・ゴウ", kun: "わざ", mean: "NGHIỆP (nghề nghiệp, bài học)", words: "授業 (jugyō - tiết học), 宿題 (shukudai - bài tập), 卒業 (sotsugyō - tốt nghiệp)" },
      { char: "社", on: "シャ", kun: "やしろ", mean: "XÃ (công ty, xã hội, đền miếu)", words: "会社 (kaisha - công ty), 社会 (shakai - xã hội), 神社 (jinja - đền thần đạo)" }
    ],
    dialogue: {
      situation: "Học sinh đến lớp muộn vào buổi sáng và xin lỗi giáo viên",
      lines: [
        { spk: "Học sinh", text: "先生、遅くなって、すみません！" },
        { spk: "Thầy giáo", text: "どうしたんですか。" },
        { spk: "Học sinh", text: "目覚まし時計が鳴らなくて、今朝寝坊してしまいました。" },
        { spk: "Thầy giáo", text: "そうですか。次は気をつけて早く寝てくださいね。席に着いてください。" },
        { spk: "Học sinh", text: "はい、本当にすみませんでした！" }
      ]
    },
    culture: "Văn hóa từ ngữ 「すみません」 (Sumimasen): Là một trong những từ đa nghĩa tinh tế bậc nhất của người Nhật. Tùy ngữ cảnh, nó có thể là lời xin lỗi (I'm sorry), lời cảm ơn sâu sắc khi làm phiền người khác giúp mình (Thank you), hoặc lời mở đầu lịch sự để gọi phục vụ, nhờ vả người lạ (Excuse me). Thể hiện nét văn hóa khiêm nhường, luôn nghĩ cho cảm xúc của người đối diện (Omoiyari).",
    quiz: [
      {
        q: "Chọn câu tạ lỗi phù hợp khi bạn vô tình để quên bài tập ở nhà:",
        options: [
          "A. 宿題を忘れてしまいました。すみません。",
          "B. 宿題を忘れなければなりません。",
          "C. 宿題を忘れるでしょう。",
          "D. 宿題を忘れてみたいです。"
        ],
        a: 0,
        exp: "Lỡ làm việc sơ suất ngoài ý muốn mang sắc thái tiếc nuối: Vてしまいました + すみません."
      },
      {
        q: "Chữ Hán '遅' trong từ '遅刻' (chikoku - đi muộn) có âm Hán Việt là gì?",
        options: ["A. KHỐN", "B. LẠC", "C. TRÌ", "D. NGHIỆP"],
        a: 2,
        exp: "'遅' có âm Hán Việt là TRÌ (trong trì hoãn, chậm trễ)."
      }
    ]
  },

  // BÀI 12
  {
    id: "bai-12",
    lessonNum: 12,
    title: "友だちへのアドバイス",
    romaji: "Tomodachi e no adobaisu",
    meaning: "Lời khuyên cho bạn bè",
    goal: "Nhận biết dấu hiệu trạng thái bên ngoài của người khác qua quan sát; đưa ra lời khuyên nên làm gì hoặc không nên làm gì một cách tế nhị, hữu ích.",
    badge: "Quan tâm & Lời khuyên",
    vocab: [
      { jp: "アドバイス", kana: "あどばいす", romaji: "adobaisu", mean: "Lời khuyên (Advice)", type: "Danh từ / Động từ" },
      { jp: "具合", kana: "ぐあい", romaji: "guai", mean: "Tình trạng sức khỏe", type: "Danh từ" },
      { jp: "疲れる", kana: "つかれる", romaji: "tsukareru", mean: "Mệt mỏi, kiệt sức", type: "Động từ" },
      { jp: "熱がある", kana: "ねつがある", romaji: "netsu ga aru", mean: "Bị phát sốt", type: "Cụm từ" },
      { jp: "薬", kana: "くすり", romaji: "kusuri", mean: "Thuốc thang", type: "Danh từ" },
      { jp: "早く寝る", kana: "はやくねる", romaji: "hayaku neru", mean: "Đi ngủ sớm", type: "Cụm động từ" },
      { jp: "病院", kana: "びょういん", romaji: "byōin", mean: "Bệnh viện", type: "Danh từ" },
      { jp: "無理をする", kana: "むりをする", romaji: "muri o suru", mean: "Gắng sức quá mức", type: "Cụm động từ" },
      { jp: "元気な", kana: "げんきな", romaji: "genki na", mean: "Khỏe khoắn, tươi tắn", type: "Tính từ đuôi な" },
      { jp: "背", kana: "せ", romaji: "se", mean: "Lưng, chiều cao vóc dáng", type: "Danh từ" },
      { jp: "重い", kana: "おもい", romaji: "omoi", mean: "Nặng nề", type: "Tính từ đuôi い" },
      { jp: "平均寿命", kana: "へいきんじゅみょう", romaji: "heikin jumyō", mean: "Tuổi thọ trung bình", type: "Danh từ" }
    ],
    grammar: {
      title: "1. Có vẻ như (quan sát bên ngoài): ～そうです / 2. Khuyên nên: Vたほうがいいです / 3. Khuyên không nên: Vないほうがいいです",
      formula: "① Tính từ đuôi い (bỏ い) / Tính từ đuôi な (bỏ な) + そうです (Trông có vẻ...)\n② V(thể た) + ほうがいいです (Nên làm V)\n③ V(thể ない) + ほうがいいです (Không nên làm V)",
      usage: "Cấu trúc ① dùng để miêu tả ấn tượng trực tiếp khi quan sát diện mạo bên ngoài của đối tượng (khác với nghe đồn). Cấu trúc ② và ③ dùng để đưa ra lời khuyên chân thành cho bạn bè khi họ gặp khó khăn hay đau ốm.",
      examples: [
        "顔色が悪いですね。ぐあいが悪そうですね。(Sắc mặt bạn tái quá. Trông có vẻ bạn không được khỏe.)",
        "今日は無理をしないで、早くねたほうがいいですよ。(Hôm nay cậu đừng gắng sức quá, nên đi ngủ sớm đi nhé.)",
        "熱がありますから、冷たい水を飲まないほうがいいです。(Vì đang bị sốt nên bạn không nên uống nước lạnh đâu.)",
        "この鞄は重そうですね。手伝いましょうか。(Chiếc cặp này trông có vẻ nặng quá nhỉ. Để mình giúp một tay nhé.)"
      ],
      rules: "Lưu ý cấu trúc ～そうです (vẻ ngoài): いい -> よさそうです (trông có vẻ tốt); ない -> なさそうです (trông có vẻ không có)."
    },
    kanji: [
      { char: "背", on: "ハイ", kun: "せ / せい / そむ・く", mean: "BỐI (lưng, chiều cao)", words: "背 (se - chiều cao), 背中 (senaka - tấm lưng), 背景 (haikei - bối cảnh)" },
      { char: "薬", on: "ヤク", kun: "くすり", mean: "DƯỢC (thuốc men)", words: "薬 (kusuri - thuốc thang), 薬局 (yakkyoku - nhà thuốc tây), 目薬 (megusuri - thuốc nhỏ mắt)" },
      { char: "重", on: "ジュウ・チョウ", kun: "おも・い / かさ・なる", mean: "TRỌNG (nặng, quan trọng)", words: "重い (omoi - nặng), 重要 (jūyō - trọng yếu), 体重 (taijū - thể trọng/cân nặng)" },
      { char: "後", on: "ゴ・コウ", kun: "のち / うし・ろ / あと", mean: "HẬU (sau, phía sau)", words: "後ろ (ushiro - đằng sau), 後で (ato de - sau đó), 午後 (gogo - buổi chiều)" },
      { char: "年", on: "ネン", kun: "とし", mean: "NIÊN (năm, tuổi)", words: "今年 (kotoshi - năm nay), 来年 (rainen - sang năm), 年齢 (nenrei - độ tuổi)" }
    ],
    dialogue: {
      situation: "Học sinh quan sát bạn cùng bàn mệt mỏi và đưa ra lời khuyên",
      lines: [
        { spk: "Mai", text: "ナムくん、咳が出ていますね。ぐあいが悪そうですが、大丈夫ですか。" },
        { spk: "Nam", text: "ええ、少し頭が痛くて、熱もあるみたいです。" },
        { spk: "Mai", text: "大変ですね！今日は部活を休んで、病院へ行ったほうがいいですよ。" },
        { spk: "Nam", text: "ありがとう。帰ったら薬を飲んで、早く寝ます。" },
        { spk: "Mai", text: "お大事にね！" }
      ]
    },
    culture: "日本人の平均寿命 (Tuổi thọ trung bình của người Nhật): Nhật Bản nhiều năm liền giữ vị trí nhóm đầu thế giới về tuổi thọ trung bình (nữ khoảng 87 tuổi, nam khoảng 81 tuổi). Bí quyết nằm ở chế độ ăn truyền thống 'Washoku' nhiều cá, đậu nành, ít dầu mỡ, thói quen đi bộ hằng ngày và hệ thống khám sức khỏe định kỳ nghiêm ngặt tại học đường và nơi làm việc.",
    quiz: [
      {
        q: "Chọn câu khuyên bạn nên đi ngủ sớm khi bạn đang bị sốt:",
        options: [
          "A. 早く寝たほうがいいですよ。",
          "B. 早く寝ないほうがいいですよ。",
          "C. 早く寝なければなりません。",
          "D. 早く寝てはいけません。"
        ],
        a: 0,
        exp: "Lời khuyên nên làm việc gì có lợi cho sức khỏe: V(thể た) + ほうがいいです -> 寝たほうがいいですよ."
      },
      {
        q: "Khi thấy gói hàng có vẻ rất nặng, ta dùng cấu trúc miêu tả vẻ ngoài nào?",
        options: ["A. 重いそうです", "B. 重そうです", "C. 重くそうです", "D. 重いでしょう"],
        a: 1,
        exp: "Tính từ đuôi い bỏ い + そうです để chỉ vẻ ngoài quan sát được -> 重そうです (trông có vẻ nặng)."
      }
    ]
  },

  // BÀI 13
  {
    id: "bai-13",
    lessonNum: 13,
    title: "おすすめの場所",
    romaji: "Osusume no basho",
    meaning: "Địa điểm được đề xuất",
    goal: "Miêu tả đặc điểm nổi bật của các địa danh, thành phố; sử dụng thể khả năng để nói về điều có thể trải nghiệm; giới thiệu điểm đến hấp dẫn bằng cấu trúc gợi ý.",
    badge: "Giới thiệu & Gợi ý điểm đến",
    vocab: [
      { jp: "おすすめ", kana: "おすすめ", romaji: "osusume", mean: "Sự gợi ý, đề xuất", type: "Danh từ" },
      { jp: "場所", kana: "ばしょ", romaji: "basho", mean: "Địa điểm, nơi chốn", type: "Danh từ" },
      { jp: "自然", kana: "しぜん", romaji: "shizen", mean: "Tự nhiên, thiên nhiên", type: "Danh từ" },
      { jp: "豊か", kana: "ゆたか", romaji: "yutaka", mean: "Phong phú, trù phú", type: "Tính từ đuôi な" },
      { jp: "海岸", kana: "かいがん", romaji: "kaigan", mean: "Bờ biển, bãi biển", type: "Danh từ" },
      { jp: "波", kana: "なみ", romaji: "nami", mean: "Con sóng biển", type: "Danh từ" },
      { jp: "景色", kana: "けしき", romaji: "keshiki", mean: "Phong cảnh thiên nhiên", type: "Danh từ" },
      { jp: "ニンビン", kana: "にんびん", romaji: "Ninbin", mean: "Tỉnh Ninh Bình", type: "Địa danh" },
      { jp: "ニャチャン", kana: "にゃちゃん", romaji: "Nyachan", mean: "Thành phố Nha Trang", type: "Địa danh" },
      { jp: "北海道", kana: "ほっかいどう", romaji: "Hokkaidō", mean: "Đảo Hokkaido (Nhật Bản)", type: "Địa danh" },
      { jp: "食べられる", kana: "たべられる", romaji: "taberareru", mean: "Có thể ăn được (thể khả năng)", type: "Động từ khả năng" },
      { jp: "泳げる", kana: "およげる", romaji: "oyogeru", mean: "Có thể bơi được (thể khả năng)", type: "Động từ khả năng" }
    ],
    grammar: {
      title: "1. Đặc điểm nổi bật: N1はN2が[Tính từ]です / 2. Thể khả năng: 可能形 / 3. Gợi ý: N/Vる + なら、～がおすすめです",
      formula: "① N1 は N2 が [Tính từ] です (N1 có đặc điểm N2 thì...)\n② Thể khả năng: Nhóm 1 (đổi đuôi u sang e + る: 行く -> 行ける); Nhóm 2 (bỏ る thêm られる: 食べる -> 食べられる); Nhóm 3 (する -> できる, くる -> こられる)\n③ N / Vる + なら、[Địa điểm/Món ăn] がおすすめです",
      usage: "Cấu trúc ① miêu tả nét đặc trưng tiêu biểu của một vùng đất. Cấu trúc ② biểu thị năng lực cá nhân hoặc điều kiện cho phép thực hiện hành động tại nơi đó (trợ từ を thường đổi thành が: 魚が食べられる). Cấu trúc ③ đưa ra lời khuyên/đề xuất phù hợp nhất với mong muốn của người nghe.",
      examples: [
        "ニンビンは自然が豊かです。(Ninh Bình thiên nhiên rất phong phú, tươi đẹp.)",
        "ニャチャンは海がとてもきれいです。おいしい海鮮が食べられます。(Nha Trang biển rất đẹp. Ở đó có thể ăn được hải sản thơm ngon.)",
        "ベトナムの歴史的な場所を見るなら、古都フエがおすすめです。(Nếu muốn ngắm nhìn những địa danh lịch sử Việt Nam thì cố đô Huế là gợi ý tuyệt vời.)",
        "ニャチャンは海が美しいですが、波が高い日もありますから注意してください。(Nha Trang biển đẹp nhưng cũng có hôm sóng cao nên hãy cẩn thận nhé.)"
      ],
      rules: "Liên từ 'ですが' mang sắc thái tương phản ('nhưng mà'), dùng khi vừa khen ngợi vừa đưa ra lưu ý khách quan cho du khách."
    },
    kanji: [
      { char: "旅", on: "リョ", kun: "たび", mean: "LỮ (chuyến đi, du lịch)", words: "旅行 (ryokō - du lịch), 旅 (tabi - chuyến đi), 旅人 (tabibito - lữ khách)" },
      { char: "美", on: "ビ・ミ", kun: "うつく・しい", mean: "MĨ (xinh đẹp, mỹ lệ)", words: "美しい (utsukushii - xinh đẹp), 美術 (bijutsu - mĩ thuật), 美味しい (oishii - ngon miệng)" },
      { char: "建", on: "ケン・コン", kun: "た・てる / た・つ", mean: "KIẾN (xây dựng, kiến tạo)", words: "建てる (tateru - xây cất), 建物 (tatemono - tòa nhà/công trình), 建設 (kensetsu - kiến thiết)" },
      { char: "鳥", on: "チョウ", kun: "とり", mean: "ĐIỂU (con chim)", words: "鳥 (tori - loài chim), 鳥肉 (toriniku - thịt gà), 小鳥 (kotori - chú chim non)" },
      { char: "村", on: "ソン", kun: "むら", mean: "THÔN (ngôi làng, nông thôn)", words: "村 (mura - ngôi làng quê), 農村 (nōson - nông thôn), 村人 (murabito - dân làng)" }
    ],
    dialogue: {
      situation: "Giới thiệu địa điểm du lịch Việt Nam cho du khách Nhật Bản",
      lines: [
        { spk: "Kenta", text: "リンさん、今度の休みにベトナムの自然を見に行きたいんですが、どこがいいですか。" },
        { spk: "Linh", text: "美しい自然を満喫するなら、ニンビンがおすすめです！" },
        { spk: "Kenta", text: "ニンビンでは何ができますか。" },
        { spk: "Linh", text: "船に乗って川沿いの山や洞窟を見ることができますよ。それにヤギの肉料理も食べられます。" },
        { spk: "Kenta", text: "わあ、面白そうですね！ぜひ行ってみたいです。" }
      ]
    },
    culture: "北海道 (Hokkaidō - Hòn đảo cực Bắc Nhật Bản): Nổi tiếng với thiên nhiên hoang sơ tráng lệ, suối nước nóng Noboribetsu, những cánh đồng hoa oải hương ngút ngàn tại Furano vào mùa hè và Lễ hội Băng tuyết Sapporo (Sapporo Snow Festival) vào mùa đông với những bức tượng tuyết khổng lồ thu hút hàng triệu du khách.",
    quiz: [
      {
        q: "Chuyển động từ '泳ぎます' (oyogimasu - bơi) sang thể khả năng:",
        options: ["A. 泳がれる", "B. 泳げる", "C. 泳ぎられる", "D. 泳ぎできる"],
        a: 1,
        exp: "Động từ nhóm 1 chuyển cột 'い' thành cột 'え' + る -> 泳ぎます -> 泳げる (có thể bơi)."
      },
      {
        q: "Chữ Hán nào mang nghĩa 'Tòa nhà / Công trình kiến trúc'?",
        options: ["A. 建物", "B. 旅行", "C. 美術", "D. 農村"],
        a: 0,
        exp: "建物 (Tatemono) ghép từ 建 (KIẾN) và 物 (VẬT) mang nghĩa là tòa nhà."
      }
    ]
  },

  // ふくしゅう 4 — ÔN TẬP 4 (BÀI 11–13)
  {
    id: "on-tap-4",
    isReview: true,
    badge: "ÔN TẬP 4",
    title: "ふくしゅう 4 (Bài 11 – 13)",
    romaji: "Fukushū yon",
    meaning: "Củng cố tổng hợp kiến thức Bài 11 đến Bài 13",
    summary: "Hệ thống hóa toàn bộ các mẫu câu ứng xử xin lỗi, khuyên nhủ bạn bè và giới thiệu địa danh: Vて、すみません (xin lỗi vì sơ suất); V1て、V2ました (nguyên nhân - hệ quả); Vてしまいました (lỡ làm việc đáng tiếc); ～そうです (nhận định vẻ ngoài qua quan sát); Vたほうがいい (khuyên nên làm); Vないほうがいい (khuyên tránh làm); N1はN2がTính từ (đặc trưng nổi bật); Thể khả năng (có thể làm gì); ～なら、～がおすすめ (gợi ý điểm đến tối ưu).",
    quiz: [
      {
        q: "Khi bạn mình bị ho và mệt, câu khuyên bảo phù hợp là:",
        options: [
          "A. 病院へ行ったほうがいいですよ。",
          "B. 病院へ行ってはいけません。",
          "C. 病院へ行かなければなりません。",
          "D. 病院へ行きたいです。"
        ],
        a: 0,
        exp: "Khuyên bạn nên đi khám: V(thể た) + ほうがいいですよ -> 行ったほうがいいですよ."
      },
      {
        q: "Để gợi ý: 'Nếu ăn đồ Nhật thì món Sushi là gợi ý số một', ta nói:",
        options: [
          "A. 日本料理を食べるなら、寿司がおすすめです。",
          "B. 日本料理を食べたなら、寿司があります。",
          "C. 日本料理を食べるから、寿司を食べません。",
          "D. 日本料理を食べれば、寿司をあげます。"
        ],
        a: 0,
        exp: "Cấu trúc đưa ra gợi ý tiêu biểu: [Vる/N] なら、[Món] がおすすめです."
      },
      {
        q: "Động từ '食べます' chuyển sang thể khả năng là:",
        options: ["A. 食べられる", "B. 食べれる", "C. 食べさせる", "D. 食べたい"],
        a: 0,
        exp: "Động từ nhóm 2 bỏ ます thêm られる -> 食べられる (có thể ăn)."
      },
      {
        q: "Chữ Hán '美' trong từ '美しい' (utsukushii) có âm Hán Việt là gì?",
        options: ["A. LỮ", "B. KIẾN", "C. MĨ", "D. THÔN"],
        a: 2,
        exp: "'美' có âm Hán Việt là MĨ (nghĩa là đẹp, xinh xắn)."
      }
    ]
  },

  // BÀI 14: TỔNG ÔN HỌC KỲ
  {
    id: "bai-14",
    lessonNum: 14,
    title: "ふりかえり",
    romaji: "Furikaeri",
    meaning: "Tổng ôn tập toàn diện Bài 1 đến Bài 13",
    goal: "Hệ thống hóa toàn diện năng lực giao tiếp, hệ thống biến đổi động từ (thể て, thể た, thể ない, thể từ điển Vる, thể Khả năng), 63 chữ Hán trọng tâm và các nét văn hóa đặc sắc Nhật - Việt.",
    badge: "Tổng kết & Đánh giá",
    isReview: true,
    summary: "Bài 14 là bài học tổng ôn toàn diện chương trình Tiếng Nhật 8 theo định hướng SGK Kết nối tri thức với cuộc sống. Học sinh được củng cố toàn bộ 13 chủ đề giao tiếp thực tiễn, rèn luyện kỹ năng phân biệt các dạng biến đổi động từ, vận dụng từ vựng linh hoạt và tự đánh giá năng lực đạt chuẩn A1.2 - đầu A2 theo Khung tham chiếu chung châu Âu (CEFR).",
    quiz: [
      {
        q: "Cặp mẫu câu nào dùng để diễn tả: 'Liệt kê hành động tiêu biểu' và 'Kể kinh nghiệm từng trải'?",
        options: [
          "A. Vたり、Vたりする & Vたことがある",
          "B. Vてください & Vてはいけない",
          "C. Vなければならない & Vてみたい",
          "D. Vるのが好き & Vてしまう"
        ],
        a: 0,
        exp: "Vたり、Vたりする (liệt kê hành động tiêu biểu) và Vたことがある (đã từng làm gì trong quá khứ)."
      },
      {
        q: "Động từ '行きます' chuyển sang các thể: Thể て, Thể た, Thể ない, Thể Khả năng lần lượt là:",
        options: [
          "A. 行って - 行った - 行かない - 行ける",
          "B. 行きて - 行きた - 行かない - 行かれる",
          "C. 行んで - 行んだ - 行きない - 行ける",
          "D. 行って - 行った - 行きません - 行きられる"
        ],
        a: 0,
        exp: "Điểm bất quy tắc nhóm 1 của '行きます': 行って - 行った - 行かない - 行ける."
      },
      {
        q: "Trong các tình huống giao tiếp, từ 「すみません」 KHÔNG dùng trong trường hợp nào?",
        options: [
          "A. Lời xin lỗi khi đến muộn hoặc gây phiền",
          "B. Lời cảm ơn chân thành khi ai đó giúp đỡ mình",
          "C. Lời chúc mừng sinh nhật vui vẻ",
          "D. Lời mở đầu lịch sự khi gọi phục vụ quán ăn"
        ],
        a: 2,
        exp: "Chúc mừng sinh nhật tiếng Nhật là 'お誕生日おめでとうございます', không dùng 'すみません'."
      },
      {
        q: "Lối đi gạch nổi xúc giác '点字ブロック' (Tenji burokku) được phát minh tại quốc gia nào?",
        options: ["A. Nhật Bản", "B. Việt Nam", "C. Anh", "D. Pháp"],
        a: 0,
        exp: "Tenji burokku do ông Seiichi Miyake phát minh tại Nhật Bản năm 1965."
      }
    ]
  }
];

// BẢNG TRA NHANH 14 BÀI HỌC CỐT LÕI TIẾNG NHẬT 8
const grammarSummaryTable = [
  { bài: "Bài 1. 休みの日", chủĐiểm: "Hoạt động ngày nghỉ", mẫuCâu: "Vたり、Vたりする; Vるのが好き; NとかNとか", chữHán: "覚・前・大・特・考", vănHóa: "Thói quen đọc sách (朝読書)" },
  { bài: "Bài 2. イベントの計画", chủĐiểm: "Lập kế hoạch, nêu lí do", mẫuCâu: "～がいいと思う; ～にしよう; ～し、～から", chữHán: "主・黒・白・黄・色", vănHóa: "Lễ hội văn hóa (文化祭)" },
  { bài: "Bài 3. イベントのじゅんび", chủĐiểm: "Tiến độ và phân công", mẫuCâu: "もうVましたか; まだVていない; Vてください", chữHán: "正・細・早・起", vănHóa: "Âm nhạc trường học (合唱コンクール)" },
  { bài: "Bài 4. プレゼント", chủĐiểm: "Quà tặng, mong muốn", mẫuCâu: "NがNをくれる; どんなNがほしい; [Tính từ] のがほしい", chữHán: "新・自・転・車・百", vănHóa: "Phong tục お中元・お歳暮" },
  { bài: "Bài 5. 道あんない", chủĐiểm: "Chỉ đường, an toàn giao thông", mẫuCâu: "Vてください; ～から; [Số]つ目の交差点を曲がる", chữHán: "左・右・歩・屋・駅", vănHóa: "Lối đi xúc giác (点字ブロック)" },
  { bài: "Bài 6. 観光地", chủĐiểm: "Kinh nghiệm, điều muốn thử", mẫuCâu: "Vたことがある; Vてみたい", chữHán: "観・光・場・肉・苦", vănHóa: "Lâu đài Nhật Bản (日本のお城)" },
  { bài: "Bài 7. 観光客への注意", chủĐiểm: "Nội quy du lịch, trích dẫn", mẫuCâu: "Vないでください; 「…」と言いました", chữHán: "分・半・意・品・注", vănHóa: "Chuyến du lịch học tập (修学旅行)" },
  { bài: "Bài 8. 天気よほう", chủĐiểm: "Dự báo thời tiết, hiện tượng", mẫuCâu: "V/A/N でしょう; V-stem + はじめます", chữHán: "降・雪・以・京・急", vănHóa: "Diễn tập thiên tai (防災訓練)" },
  { bài: "Bài 9. 気こうの変化", chủĐiểm: "Thời tiết, mùa và khí hậu", mẫuCâu: "～く／になる; V-stem + やすい; 少しずつ", chữHán: "温・同・季・涼・住", vănHóa: "Thưởng ngoạn lá đỏ (紅葉・もみじ狩り)" },
  { bài: "Bài 10. 校そく", chủĐiểm: "Nội quy trường học", mẫuCâu: "Vなければならない; Vてはいけない", chữHán: "持・守・走・図", vănHóa: "Trực nhật luân phiên (日直)" },
  { bài: "Bài 11. あやまる", chủĐiểm: "Xin lỗi, nêu lí do", mẫuCâu: "Vてすみません; V1てV2ました; Vてしまう", chữHán: "遅・困・落・業・社", vănHóa: "Sắc thái văn hóa từ 「すみません」" },
  { bài: "Bài 12. 友だちへのアドバイス", chủĐiểm: "Lời khuyên sức khỏe, quan sát", mẫuCâu: "～そう (vẻ ngoài); Vたほうがいい; Vないほうがいい", chữHán: "背・薬・重・後・年", vănHóa: "Tuổi thọ trung bình (平均寿命)" },
  { bài: "Bài 13. おすすめの場所", chủĐiểm: "Giới thiệu địa điểm, thể khả năng", mẫuCâu: "N1はN2がTính từ; Thể khả năng; ～なら～がおすすめ", chữHán: "旅・美・建・鳥・村", vănHóa: "Đảo Hokkaido (北海道)" },
  { bài: "Bài 14. ふりかえり", chủĐiểm: "Tổng ôn toàn diện", mẫuCâu: "Củng cố toàn bộ các dạng biến đổi & mẫu câu", chữHán: "Tổng ôn 63 chữ Hán", vănHóa: "Tự đánh giá năng lực ngôn ngữ" }
];

// BẢNG BIẾN ĐỔI ĐỘNG TỪ TOÀN DIỆN (TIẾNG NHẬT 8)
const verbConjugationTable = [
  { nhóm: "Nhóm 1 (い・ち・り → って)", masu: "買います (kaimasu)", te: "買って (katte)", ta: "買った (katta)", nai: "買わない (kawanai)", kanou: "買える (kaeru)", nghĩa: "Mua sắm" },
  { nhóm: "Nhóm 1 (い・ち・り → って)", masu: "立ちます (tachimasu)", te: "立って (tatte)", ta: "立った (tatta)", nai: "立たない (tatanai)", kanou: "立てる (tateru)", nghĩa: "Đứng dậy" },
  { nhóm: "Nhóm 1 (い・ち・り → って)", masu: "取ります (torimasu)", te: "取って (totte)", ta: "取った (totta)", nai: "取らない (toranai)", kanou: "取れる (toreru)", nghĩa: "Chụp ảnh / Cầm lấy" },
  { nhóm: "Nhóm 1 (に・び・み → んで)", masu: "遊びます (asobimasu)", te: "遊んで (asonde)", ta: "遊んだ (asonda)", nai: "遊ばない (asobanai)", kanou: "遊べる (asoberu)", nghĩa: "Đi chơi" },
  { nhóm: "Nhóm 1 (に・び・み → んで)", masu: "読みます (yomimasu)", te: "読んで (yonde)", ta: "読んだ (yonda)", nai: "読まない (yomanai)", kanou: "読める (yomeru)", nghĩa: "Đọc sách" },
  { nhóm: "Nhóm 1 (き → いて)", masu: "書きます (kakimasu)", te: "書いて (kaite)", ta: "書いた (kaita)", nai: "書かない (kakanai)", kanou: "書ける (kakeru)", nghĩa: "Viết lách" },
  { nhóm: "Nhóm 1 (ぎ → いで)", masu: "泳ぎます (oyogimasu)", te: "泳いで (oyoide)", ta: "泳いだ (oyoida)", nai: "泳がない (oyoganai)", kanou: "泳げる (oyogeru)", nghĩa: "Bơi lội" },
  { nhóm: "Nhóm 1 (し → して)", masu: "話します (hanashimasu)", te: "話して (hanashite)", ta: "話した (hanashita)", nai: "話さない (hanasanai)", kanou: "話せる (hanaseru)", nghĩa: "Trò chuyện" },
  { nhóm: "Nhóm 1 (Ngoại lệ)", masu: "行きます (ikimasu)", te: "行って (itte)", ta: "行った (itta)", nai: "行かない (ikanai)", kanou: "行ける (ikeru)", nghĩa: "Đi đến" },
  { nhóm: "Nhóm 2 (bỏ ます)", masu: "見ます (mimasu)", te: "見て (mite)", ta: "見た (mita)", nai: "見ない (minai)", kanou: "見られる (mirareru)", nghĩa: "Xem, nhìn" },
  { nhóm: "Nhóm 2 (bỏ ます)", masu: "食べます (tabemasu)", te: "食べて (tabete)", ta: "食べた (tabeta)", nai: "食べない (tabenai)", kanou: "食べられる (taberareru)", nghĩa: "Ăn uống" },
  { nhóm: "Nhóm 2 (bỏ ます)", masu: "起きます (okimasu)", te: "起きて (okite)", ta: "起きた (okita)", nai: "起きない (okinai)", kanou: "起きられる (okirareru)", nghĩa: "Thức dậy" },
  { nhóm: "Nhóm 2 (bỏ ます)", masu: "寝ます (nemasu)", te: "寝て (nete)", ta: "寝た (neta)", nai: "寝ない (nenai)", kanou: "寝られる (nerareru)", nghĩa: "Đi ngủ" },
  { nhóm: "Nhóm 3 (Bất quy tắc)", masu: "します (shimasu)", te: "して (shite)", ta: "した (shita)", nai: "しない (shinai)", kanou: "できる (dekiru)", nghĩa: "Làm, thực hiện" },
  { nhóm: "Nhóm 3 (Bất quy tắc)", masu: "来ます (kimasu)", te: "来て (kite)", ta: "来た (kita)", nai: "こない (konai)", kanou: "こられる (korareru)", nghĩa: "Đến, tới" }
];

// BẢNG TỔNG HỢP 63 CHỮ HÁN TRỌNG TÂM TIẾNG NHẬT 8
const kanjiMatrix = [
  { bài: "Bài 1", chữ: "覚・前・大・特・考", víDụ: "覚える (nhớ), 午前 (buổi sáng), 大きい (to lớn), 特別 (đặc biệt), 考える (suy nghĩ)" },
  { bài: "Bài 2", chữ: "主・黒・白・黄・色", víDụ: "主な (chính), 黒板 (bảng đen), 面白い (thú vị), 黄色 (màu vàng), 景色 (phong cảnh)" },
  { bài: "Bài 3", chữ: "正・細・早・起", víDụ: "正しい (đúng), 細かい (chi tiết), 早起き (dậy sớm), 起きる (thức dậy)" },
  { bài: "Bài 4", chữ: "新・自・転・車・百", víDụ: "新しい (mới), 自分 (bản thân), 自転車 (xe đạp), 電車 (tàu điện), 百 (một trăm)" },
  { bài: "Bài 5", chữ: "左・右・歩・屋・駅", víDụ: "左 (bên trái), 右 (bên phải), 歩道 (vỉa hè), 本屋 (hiệu sách), 駅 (nhà ga)" },
  { bài: "Bài 6", chữ: "観・光・場・肉・苦", víDụ: "観光 (tham quan), 光 (ánh sáng), 場所 (địa điểm), 牛肉 (thịt bò), 苦い (đắng)" },
  { bài: "Bài 7", chữ: "分・半・意・品・注", víDụ: "分かる (hiểu), 半分 (một nửa), 意見 (ý kiến), 作品 (tác phẩm), 注意 (chú ý)" },
  { bài: "Bài 8", chữ: "降・雪・以・京・急", víDụ: "降る (mưa rơi), 大雪 (tuyết lớn), 以上 (trở lên), 東京 (Tokyo), 急ぐ (vội vã)" },
  { bài: "Bài 9", chữ: "温・同・季・涼・住", víDụ: "温かい (ấm áp), 同じ (giống nhau), 季節 (mùa), 涼しい (mát mẻ), 住む (sinh sống)" },
  { bài: "Bài 10", chữ: "持・守・走・図", víDụ: "持つ (cầm/giữ), 守る (tuân thủ), 走る (chạy), 図書館 (thư viện)" },
  { bài: "Bài 11", chữ: "遅・困・落・業・社", víDụ: "遅れる (muộn), 困る (khó xử), 落とす (làm rơi), 授業 (tiết học), 会社 (công ty)" },
  { bài: "Bài 12", chữ: "背・薬・重・後・年", víDụ: "背 (chiều cao), 薬 (thuốc), 重い (nặng), 後ろ (phía sau), 今年 (năm nay)" },
  { bài: "Bài 13", chữ: "旅・美・建・鳥・村", víDụ: "旅行 (du lịch), 美しい (xinh đẹp), 建物 (tòa nhà), 鳥肉 (thịt gà), 農村 (nông thôn)" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    lessonsPart2,
    grammarSummaryTable,
    verbConjugationTable,
    kanjiMatrix
  };
}
