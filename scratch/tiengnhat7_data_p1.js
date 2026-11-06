// Dữ liệu Tiếng Nhật 7 - Phần 1: Bài 1 đến Bài 7 và các bài Ôn tập 1 & 2
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const lessonsPart1 = [
  // BÀI 1
  {
    id: "bai-1",
    lessonNum: 1,
    title: "一週間に2回日本語を勉強します",
    romaji: "Isshūkan ni nikai nihongo o benkyō shimasu",
    meaning: "Một tuần tôi học tiếng Nhật hai lần",
    goal: "Nói môn học yêu thích, thời khóa biểu và số lần học một môn trong tuần; hỏi bạn học môn gì, học vào khi nào và bao nhiêu lần.",
    badge: "Thời khóa biểu & Tần suất",
    vocab: [
      { jp: "国語", kana: "こくご", romaji: "kokugo", mean: "Quốc ngữ (Tiếng Nhật)", type: "Danh từ" },
      { jp: "数学", kana: "すうがく", romaji: "sūgaku", mean: "Toán học", type: "Danh từ" },
      { jp: "英語", kana: "えいご", romaji: "eigo", mean: "Tiếng Anh", type: "Danh từ" },
      { jp: "理科", kana: "りか", romaji: "rika", mean: "Khoa học tự nhiên", type: "Danh từ" },
      { jp: "社会", kana: "しゃかい", romaji: "shakai", mean: "Khoa học xã hội", type: "Danh từ" },
      { jp: "地理", kana: "ちり", romaji: "chiri", mean: "Địa lí", type: "Danh từ" },
      { jp: "歴史", kana: "れきし", romaji: "rekishi", mean: "Lịch sử", type: "Danh từ" },
      { jp: "体育", kana: "たいいく", romaji: "taiiku", mean: "Thể dục", type: "Danh từ" },
      { jp: "音楽", kana: "おんがく", romaji: "ongaku", mean: "Âm nhạc", type: "Danh từ" },
      { jp: "美術", kana: "びじゅつ", romaji: "bijutsu", mean: "Mĩ thuật", type: "Danh từ" },
      { jp: "技術", kana: "ぎじゅつ", romaji: "gijutsu", mean: "Công nghệ", type: "Danh từ" },
      { jp: "情報", kana: "じょうほう", romaji: "jōhō", mean: "Tin học", type: "Danh từ" },
      { jp: "一週間", kana: "いっしゅうかん", romaji: "isshūkan", mean: "Một tuần", type: "Cụm thời gian" },
      { jp: "毎週", kana: "まいしゅう", romaji: "maishū", mean: "Mỗi tuần / Hằng tuần", type: "Phó từ" },
      { jp: "何回", kana: "なんかい", romaji: "nankai", mean: "Mấy lần", type: "Từ hỏi" }
    ],
    grammar: {
      title: "Mẫu câu chỉ tần suất: Khoảng thời gian + に + Số lần + 回",
      formula: "N (khoảng thời gian) に [Số đếm] 回 + Động từ (Vます)",
      usage: "Dùng để diễn đạt tần suất thực hiện một hành động trong một khoảng thời gian nhất định (chu kì). Trợ từ に đánh dấu mốc chu kì, 回 (kai) là lượng từ đếm số lần.",
      examples: [
        "一週間に二回、日本語を勉強します。(Một tuần tôi học tiếng Nhật hai lần.)",
        "一日に三回、歯をみがきます。(Một ngày tôi đánh răng ba lần.)",
        "一か月に何回、映画を見ますか。(Một tháng bạn đi xem phim mấy lần?)"
      ],
      expansion: "Mở rộng nói về môn yêu thích và năng lực: Nが好きです (Thích N), Nが得意です (Giỏi N), Nが苦手です (Kém/Không giỏi N)."
    },
    kanji: [
      { char: "回", on: "カイ", kun: "まわ・る", mean: "HỒI (lần, vòng quanh)", words: "回数 (số lần), 何回 (mấy lần)" },
      { char: "英", on: "エイ", kun: "-", mean: "ANH (ưu tú, nước Anh)", words: "英語 (tiếng Anh), 英国 (nước Anh)" },
      { char: "物", on: "ブツ・モツ", kun: "もの", mean: "VẬT (sự vật, đồ vật)", words: "物理 (vật lí), 食べ物 (đồ ăn)" },
      { char: "地", on: "チ・ジ", kun: "-", mean: "ĐỊA (đất đai, vị trí)", words: "地理 (địa lí), 地下 (dưới hầm)" },
      { char: "曜", on: "ヨウ", kun: "-", mean: "DIỆU (ngày trong tuần)", words: "曜日 (thứ trong tuần), 月曜日 (thứ Hai)" }
    ],
    dialogue: {
      situation: "Hai bạn học sinh trao đổi về thời khóa biểu tuần mới",
      lines: [
        { spk: "Mai", text: "ナムくんは、何の科目が好きですか。" },
        { spk: "Nam", text: "僕は数学と英語が好きです。マイさんは？" },
        { spk: "Mai", text: "私は日本語が好きです。一週間に2回勉強します。" },
        { spk: "Nam", text: "いつ勉強しますか。何曜日にありますか。" },
        { spk: "Mai", text: "火曜日と金曜日にありますよ。" }
      ]
    },
    culture: "Tìm hiểu thời khóa biểu của học sinh THCS Nhật Bản: Học sinh Nhật thường học 6 tiết/ngày, có giờ sinh hoạt chủ nhiệm (SHR - Short Home Room) đầu và cuối ngày, sau giờ học tham gia các câu lạc bộ (Bukatsu).",
    quiz: [
      {
        q: "Điền trợ từ thích hợp: 一週間 (____) 2回、プールへ泳ぎに行きます。",
        options: ["A. で", "B. に", "C. を", "D. へ"],
        a: 1,
        exp: "Trong mẫu câu chỉ tần suất theo chu kì thời gian, ta dùng trợ từ 'に': [Khoảng thời gian] + に + [Số lần] 回."
      },
      {
        q: "Chữ Hán '曜' trong từ '日曜日' có âm Hán Việt là gì?",
        options: ["A. DIỆU", "B. HỒI", "C. ĐỊA", "D. VẬT"],
        a: 0,
        exp: "'曜' có âm Hán Việt là DIỆU (nghĩa là ngày/ánh sáng tinh tú, trong 曜日 - các thứ trong tuần)."
      }
    ]
  },

  // BÀI 2
  {
    id: "bai-2",
    lessonNum: 2,
    title: "山へ写真をとりに行きました",
    romaji: "Yama e shashin o tori ni ikimashita",
    meaning: "Tôi đã lên núi chụp ảnh",
    goal: "Kể hoặc hỏi về nơi đã đến và mục đích chuyến đi trong kì nghỉ; nói hoạt động du lịch, vui chơi, trải nghiệm.",
    badge: "Kì nghỉ & Mục đích chuyển động",
    vocab: [
      { jp: "海", kana: "うみ", romaji: "umi", mean: "Biển", type: "Danh từ" },
      { jp: "山", kana: "やま", romaji: "yama", mean: "Núi", type: "Danh từ" },
      { jp: "川", kana: "かわ", romaji: "kawa", mean: "Sông", type: "Danh từ" },
      { jp: "水族館", kana: "すいぞくかん", romaji: "suizokukan", mean: "Thủy cung", type: "Danh từ" },
      { jp: "遊園地", kana: "ゆうえんち", romaji: "yūenchi", mean: "Công viên giải trí", type: "Danh từ" },
      { jp: "キャンプ", kana: "きゃんぷ", romaji: "kyanpu", mean: "Cắm trại (Camping)", type: "Danh từ" },
      { jp: "写真", kana: "しゃしん", romaji: "shashin", mean: "Bức ảnh", type: "Danh từ" },
      { jp: "景色", kana: "けしき", romaji: "keshiki", mean: "Phong cảnh", type: "Danh từ" },
      { jp: "泳ぎます", kana: "およぎます", romaji: "oyogimasu", mean: "Bơi lội", type: "Động từ" },
      { jp: "乗ります", kana: "のります", romaji: "norimasu", mean: "Lên xe / Cưỡi", type: "Động từ" }
    ],
    grammar: {
      title: "Mẫu câu mục đích chuyển động: Địa điểm へ Vます-stem に 行きます／行きました",
      formula: "[Địa điểm] へ + [V-stem (bỏ ます)] に + 行きます／来ます／帰ります",
      usage: "Diễn tả việc đi / đến / về một nơi nào đó nhằm mục đích thực hiện hành động V. V-stem là phần động từ sau khi đã lược bỏ đuôi 'ます'.",
      examples: [
        "夏休みに山へ写真をとりに行きました。(Vào kì nghỉ hè tôi đã lên núi để chụp ảnh.)",
        "海へ魚を食べに行きます。(Tôi đi ra biển để ăn cá.)",
        "図書館へ本を借りに行きました。(Tôi đã đến thư viện để mượn sách.)"
      ],
      expansion: "Câu hỏi: どこへ何をしに行きましたか。(Bạn đã đi đâu để làm gì?)"
    },
    kanji: [
      { char: "毎", on: "マイ", kun: "-", mean: "MỖI (hằng, mỗi)", words: "毎日 (mỗi ngày), 毎週 (mỗi tuần)" },
      { char: "魚", on: "ギョ", kun: "さかな・うお", mean: "NGƯ (con cá)", words: "魚 (con cá), 金魚 (cá vàng)" },
      { char: "海", on: "カイ", kun: "うみ", mean: "HẢI (biển)", words: "海 (biển), 海水 (nước biển)" },
      { char: "好", on: "コウ", kun: "す・く / す・き", mean: "HẢO (thích, tốt)", words: "好き (thích), 大好物 (món rất thích)" }
    ],
    dialogue: {
      situation: "Kể về chuyến đi nghỉ hè vừa qua",
      lines: [
        { spk: "Lan", text: "ケンくん、夏休みにどこかへ行きましたか。" },
        { spk: "Ken", text: "はい、家族とダナンへ行きました。" },
        { spk: "Lan", text: "ダナンへ何をしに行きましたか。" },
        { spk: "Ken", text: "海で泳いで、きれいな写真をたくさんとりに行きました。" },
        { spk: "Lan", text: "いいですね！景色はどうでしたか。" },
        { spk: "Ken", text: "とてもきれいでしたよ。" }
      ]
    },
    culture: "Văn hóa du lịch mùa hè ở Nhật Bản: Vào kì nghỉ hè (Natsuyasumi), người Nhật thường đi leo núi Phú Sĩ (Fujisan), tắm biển, ngắm pháo hoa (Hanabi) và tham gia lễ hội Obon truyền thống.",
    quiz: [
      {
        q: "Chuyển động từ '食べます' sang dạng mục đích đi để ăn: '... (____) に行きます'.",
        options: ["A. 食べます", "B. 食べ", "C. 食べて", "D. 食べる"],
        a: 1,
        exp: "Quy tắc mục đích chuyển động: Động từ thể ます bỏ đuôi 'ます' thành V-stem -> 食べ + に行きます."
      },
      {
        q: "Chữ Hán nào mang nghĩa là 'Biển' trong tiếng Nhật?",
        options: ["A. 魚", "B. 山", "C. 海", "D. 毎"],
        a: 2,
        exp: "Chữ 海 (HẢI) phát âm là 'umi' mang nghĩa là biển."
      }
    ]
  },

  // BÀI 3
  {
    id: "bai-3",
    lessonNum: 3,
    title: "うちへ帰って、しゅくだいをします",
    romaji: "Uchi e kaette, shukudai o shimasu",
    meaning: "Tôi về nhà rồi làm bài tập",
    goal: "Nói các việc thường làm trong một ngày theo thứ tự: buổi sáng, ban ngày, sau giờ học, buổi tối; nêu thời gian và thói quen sinh hoạt.",
    badge: "Trình tự hành động & Thể て",
    vocab: [
      { jp: "起きます", kana: "おきます", romaji: "okimasu", mean: "Thức dậy", type: "Động từ" },
      { jp: "歯をみがきます", kana: "はをみがきます", romaji: "ha o migakimasu", mean: "Đánh răng", type: "Cụm động từ" },
      { jp: "朝ごはん", kana: "あさごはん", romaji: "asagohan", mean: "Bữa sáng", type: "Danh từ" },
      { jp: "昼食", kana: "ちゅうしょく", romaji: "chūshoku", mean: "Bữa trưa", type: "Danh từ" },
      { jp: "夕食", kana: "ゆうしょく", romaji: "yūshoku", mean: "Bữa tối", type: "Danh từ" },
      { jp: "学校へ行きます", kana: "がっこうへいきます", romaji: "gakkō e ikimasu", mean: "Đi học", type: "Cụm động từ" },
      { jp: "うちへ帰ります", kana: "うちへかえります", romaji: "uchi e kaerimasu", mean: "Về nhà", type: "Cụm động từ" },
      { jp: "宿題をします", kana: "しゅくだいをします", romaji: "shukudai o shimasu", mean: "Làm bài tập về nhà", type: "Cụm động từ" },
      { jp: "風呂に入ります", kana: "ふろにはいります", romaji: "furo ni hairimasu", mean: "Tắm bồn / Tắm rửa", type: "Cụm động từ" },
      { jp: "放課後", kana: "ほうかご", romaji: "hōkago", mean: "Sau giờ học (tan trường)", type: "Danh từ" }
    ],
    grammar: {
      title: "Mẫu câu nối hành động theo trình tự thời gian bằng thể て",
      formula: "V1て、V2て、... V cuối cùng (ます / ました)",
      usage: "Nối hai hay nhiều hành động theo thứ tự diễn ra trước - sau. Thì của cả chuỗi hành động và độ lịch sự được quyết định bởi động từ ở cuối câu.",
      examples: [
        "朝起きて、顔を洗って、朝ごはんを食べます。(Buổi sáng tôi thức dậy, rửa mặt rồi ăn sáng.)",
        "うちへ帰って、宿題をします。(Tôi về nhà rồi làm bài tập.)",
        "昨日の夜、お風呂に入って、本を読んで寝ました。(Tối qua tôi tắm bồn, đọc sách rồi đi ngủ.)"
      ],
      expansion: "Lưu ý quy tắc chia thể て: Nhóm 1 (いて, いで, って, んで, して; ngoại lệ 行きます -> 行って), Nhóm 2 (bỏ ます thêm て), Nhóm 3 (します -> して, 来ます -> きて)."
    },
    kanji: [
      { char: "朝", on: "チョウ", kun: "あさ", mean: "TRIÊU (buổi sáng)", words: "朝 (buổi sáng), 朝ごはん (bữa sáng)" },
      { char: "昼", on: "チュウ", kun: "ひる", mean: "TRÚ (buổi trưa)", words: "昼 (buổi trưa), 昼食 (bữa trưa)" },
      { char: "夜", on: "ヤ", kun: "よる・よ", mean: "DẠ (buổi tối, đêm)", words: "夜 (ban đêm), 今夜 (tối nay)" },
      { char: "夕", on: "セキ", kun: "ゆう", mean: "TỊCH (chiều tối)", words: "夕方 (chiều tà), 夕食 (bữa tối)" },
      { char: "方", on: "ホウ", kun: "かた", mean: "PHƯƠNG (hướng, phía, cách)", words: "夕方 (chiều tối), 読み方 (cách đọc)" }
    ],
    dialogue: {
      situation: "Hỏi bạn về sinh hoạt sau giờ học",
      lines: [
        { spk: "Hoa", text: "フンくん、放課後はいつも何をしますか。" },
        { spk: "Hung", text: "サッカーをしてから、うちへ帰ります。" },
        { spk: "Hoa", text: "うちへ帰ってから何をしますか。" },
        { spk: "Hung", text: "シャワーを浴びて、宿題をして、ご飯を食べます。" },
        { spk: "Hoa", text: "忙しいですね！何時に寝ますか。" },
        { spk: "Hung", text: "10時半ごろ寝ますよ。" }
      ]
    },
    culture: "Thói quen tắm bồn (Ofuro) của người Nhật: Người Nhật thường tắm vòi hoa sen làm sạch cơ thể trước rồi mới ngâm mình trong bồn nước nóng để thư giãn cơ bắp sau một ngày học tập và làm việc căng thẳng.",
    quiz: [
      {
        q: "Chia động từ '帰ります' (nhóm 1) sang thể て đúng quy tắc:",
        options: ["A. 帰りて", "B. 帰って", "C. 帰んで", "D. 帰して"],
        a: 1,
        exp: "Động từ nhóm 1 đuôi 'ります' chuyển thành 'って': 帰ります -> 帰って (ngoại lệ nhóm 1)."
      },
      {
        q: "Chữ Hán '昼' trong '昼食' có nghĩa là buổi nào trong ngày?",
        options: ["A. Buổi sáng", "B. Buổi trưa", "C. Chiều tối", "D. Đêm khuya"],
        a: 1,
        exp: "Chữ 昼 (TRÚ) nghĩa là buổi trưa (昼食 = bữa trưa)."
      }
    ]
  },

  // ÔN TẬP 1
  {
    id: "on-tap-1",
    lessonNum: 3.5,
    title: "ÔN TẬP 1 (BÀI 1 – 3)",
    romaji: "Fukushū 1 (Dai 1-ka ~ Dai 3-ka)",
    meaning: "Củng cố tổng hợp kiến thức Bài 1, 2, 3",
    goal: "Hệ thống hóa mẫu câu chỉ tần suất học tập, mục đích chuyển động và chuỗi hành động thường nhật bằng thể て.",
    badge: "Tổng hợp kiến thức Chặng 1",
    isReview: true,
    summary: "Ôn tập 3 chuyên đề cốt lõi: (1) Tần suất [Thời gian] に [Số] 回 Vます; (2) Mục đích [Địa điểm] へ V-stem に 行きます; (3) Nối chuỗi hành động V1て、V2て、V3ます. Hệ thống chữ Hán: 回, 英, 物, 地, 曜, 毎, 魚, 海, 好, 朝, 昼, 夜, 夕, 方.",
    quiz: [
      {
        q: "Câu nào dưới đây diễn đạt đúng ngữ pháp 'Đi siêu thị để mua hoa quả'?",
        options: [
          "A. スーパーへ果物を買いますに行きます。",
          "B. スーパーへ果物を買いに行きます。",
          "C. スーパーで果物を買ってに行きます。",
          "D. スーパーに果物を買うに行きます。"
        ],
        a: 1,
        exp: "Cấu trúc mục đích chuyển động: Địa điểm へ + V-stem (bỏ ます) + に行きます: スーパーへ果物を買いに行きます."
      },
      {
        q: "Từ nào đọc là 'まいしゅう' trong chữ Hán?",
        options: ["A. 毎日", "B. 毎週", "C. 毎月", "D. 毎年"],
        a: 1,
        exp: "毎週 (MỖI CHU) phát âm là 'maishū' (hằng tuần)."
      }
    ]
  },

  // BÀI 4
  {
    id: "bai-4",
    lessonNum: 4,
    title: "誕生日にチャンさんにハンカチをもらいました",
    romaji: "Tanjōbi ni Chan-san ni hankachi o moraimashita",
    meaning: "Vào ngày sinh nhật, tôi đã nhận khăn tay từ bạn Trang",
    goal: "Nói về quà mình tặng/người khác tặng hoặc mình nhận vào sinh nhật, ngày kỉ niệm và dịp đặc biệt; nêu ai cho ai vật gì.",
    badge: "Hành động cho và nhận quà",
    vocab: [
      { jp: "誕生日", kana: "たんじょうび", romaji: "tanjōbi", mean: "Ngày sinh nhật", type: "Danh từ" },
      { jp: "プレゼント", kana: "ぷれぜんと", romaji: "purezento", mean: "Món quà", type: "Danh từ" },
      { jp: "ハンカチ", kana: "はんかち", romaji: "hankachi", mean: "Khăn tay", type: "Danh từ" },
      { jp: "カード", kana: "かーど", romaji: "kādo", mean: "Thiệp chúc mừng", type: "Danh từ" },
      { jp: "イヤホン", kana: "いやほん", romaji: "iyahon", mean: "Tai nghe", type: "Danh từ" },
      { jp: "キーホルダー", kana: "きーほるだー", romaji: "kīhorudā", mean: "Móc khóa", type: "Danh từ" },
      { jp: "花", kana: "はな", romaji: "hana", mean: "Bông hoa", type: "Danh từ" },
      { jp: "あげます", kana: "あげます", romaji: "agemasu", mean: "Tặng / Cho ai", type: "Động từ" },
      { jp: "もらいます", kana: "もらいます", romaji: "moraimasu", mean: "Nhận từ ai", type: "Động từ" },
      { jp: "祖父・祖母", kana: "そふ・そぼ", romaji: "sofu / sobo", mean: "Ông / Bà (của mình)", type: "Danh từ" }
    ],
    grammar: {
      title: "Mẫu câu trao và nhận đồ vật: あげます & もらいます",
      formula: "1. A は B に N を あげます (A tặng N cho B)\n2. B は A に／から N を もらいます (B nhận N từ A)",
      usage: "Trợ từ に đánh dấu người nhận (đối với あげます) hoặc người trao (đối với もらいます). Trợ từ を đánh dấu tân ngữ là món quà được trao nhận.",
      examples: [
        "私は妹に本をあげました。(Tôi đã tặng em gái một quyển sách.)",
        "誕生日に母に時計をもらいました。(Vào ngày sinh nhật, tôi đã nhận chiếc đồng hồ từ mẹ.)",
        "だれに何をあげましたか。(Bạn đã tặng ai cái gì?)"
      ],
      expansion: "Phân biệt: Khi nhận quà từ tổ chức, cơ quan hoặc người ngoài, ta có thể dùng trợ từ から thay cho に."
    },
    kanji: [
      { char: "去", on: "キョ・コ", kun: "さ・る", mean: "KHỨ (đã qua)", words: "去年 (năm ngoái), 過去 (quá khứ)" },
      { char: "祖", on: "ソ", kun: "-", mean: "TỔ (ông bà, tổ tiên)", words: "祖父 (ông), 祖母 (bà)" },
      { char: "計", on: "ケイ", kun: "はか・る", mean: "KẾ (kế hoạch, đo lường)", words: "時計 (đồng hồ), 計画 (kế hoạch)" },
      { char: "族", on: "ゾク", kun: "-", mean: "TỘC (gia tộc, nhóm)", words: "家族 (gia đình), 民族 (dân tộc)" },
      { char: "祝", on: "シュク", kun: "いわ・う", mean: "CHÚC (chúc mừng)", words: "祝います (chúc mừng), お祝い (lời chúc mừng)" }
    ],
    dialogue: {
      situation: "Khoe món quà sinh nhật nhận được",
      lines: [
        { spk: "Nam", text: "リンさん、そのキーホルダーはとてもかわいいですね。" },
        { spk: "Linh", text: "ありがとうございます。誕生日にフオンさんにもらいました。" },
        { spk: "Nam", text: "そうですか。フオンさんはリンさんに何をあげましたか。" },
        { spk: "Linh", text: "この猫のキーホルダーとバースデーカードをくれましたよ。" }
      ]
    },
    culture: "Văn hóa tặng quà của người Nhật (Omiyage & Zōtō): Quà tặng ở Nhật luôn được bọc giấy gói cẩn thận, trang nhã. Người Nhật rất chú trọng sự tinh tế, thường kiêng tặng khăn tay trắng (vì liên tưởng chia ly) và số 4, 9.",
    quiz: [
      {
        q: "Chọn trợ từ đúng: '私は田中さん (____) ペンをもらいました。'",
        options: ["A. を", "B. に", "C. で", "D. へ"],
        a: 1,
        exp: "Người trao tặng trong mẫu câu 'もらいます' được đánh dấu bằng trợ từ 'に' (hoặc 'から')."
      },
      {
        q: "Từ '去年' đọc là gì và có nghĩa là gì?",
        options: ["A. きょねん (Năm ngoái)", "B. まいとし (Mỗi năm)", "C. らいねん (Năm sau)", "D. ことし (Năm nay)"],
        a: 0,
        exp: "去年 đọc là 'きょねん' (KHỨ NIÊN = năm ngoái)."
      }
    ]
  },

  // BÀI 5
  {
    id: "bai-5",
    lessonNum: 5,
    title: "ハノイは今、雨がふっています",
    romaji: "Hanoi wa ima, ame ga futte imasu",
    meaning: "Hà Nội bây giờ trời đang mưa",
    goal: "Hỏi/nói thời tiết hiện tại hoặc theo mùa ở một địa điểm; nêu hiện tượng đang diễn ra và đặc điểm khí hậu cơ bản.",
    badge: "Thời tiết & Trạng thái hiện tại",
    vocab: [
      { jp: "天気", kana: "てんき", romaji: "tenki", mean: "Thời tiết", type: "Danh từ" },
      { jp: "雨", kana: "あめ", romaji: "ame", mean: "Mưa", type: "Danh từ" },
      { jp: "雪", kana: "ゆき", romaji: "yuki", mean: "Tuyết", type: "Danh từ" },
      { jp: "晴れています", kana: "はれています", romaji: "harete imasu", mean: "Trời đang nắng / quang đãng", type: "Động từ" },
      { jp: "くもっています", kana: "くもっています", romaji: "kumotte imasu", mean: "Trời nhiều mây / âm u", type: "Động từ" },
      { jp: "降っています", kana: "ふっています", romaji: "futte imasu", mean: "Đang rơi (mưa/tuyết)", type: "Động từ" },
      { jp: "暑い", kana: "あつい", romaji: "atsui", mean: "Nóng", type: "Tính từ đuôi い" },
      { jp: "寒い", kana: "さむい", romaji: "samui", mean: "Lạnh", type: "Tính từ đuôi い" },
      { jp: "暖かい", kana: "あたたかい", romaji: "atatakai", mean: "Ấm áp", type: "Tính từ đuôi い" },
      { jp: "涼しい", kana: "すずしい", romaji: "suzushii", mean: "Mát mẻ", type: "Tính từ đuôi い" }
    ],
    grammar: {
      title: "Mẫu câu miêu tả hiện tượng thời tiết: ～ています",
      formula: "[Địa điểm] は 今、[Hiện tượng] が Vています",
      usage: "Dùng để miêu tả các hiện tượng tự nhiên, thời tiết đang diễn ra ngay tại thời điểm nói. Trợ từ が đi với hiện tượng (雨が, 雪が).",
      examples: [
        "ハノイは今、雨が降っています。(Hà Nội bây giờ trời đang mưa.)",
        "東京は今、雪が降っていますか。(Tokyo bây giờ có đang có tuyết rơi không?)",
        "今日は晴れていて、とても暖かいです。(Hôm nay trời nắng và rất ấm áp.)"
      ],
      expansion: "Hỏi tình hình thời tiết: 今日の天気はどうですか。(Thời tiết hôm nay thế nào?)"
    },
    kanji: [
      { char: "春", on: "シュン", kun: "はる", mean: "XUÂN (mùa xuân)", words: "春 (mùa xuân), 春休み (kì nghỉ xuân)" },
      { char: "夏", on: "カ・ゲ", kun: "なつ", mean: "HẠ (mùa hè)", words: "夏 (mùa hè), 夏休み (kì nghỉ hè)" },
      { char: "秋", on: "シュウ", kun: "あき", mean: "THU (mùa thu)", words: "秋 (mùa thu), 秋風 (gió thu)" },
      { char: "冬", on: "トウ", kun: "ふゆ", mean: "ĐÔNG (mùa đông)", words: "冬 (mùa đông), 冬休み (kì nghỉ đông)" },
      { char: "出", on: "シュツ", kun: "で・る / だ・す", mean: "XUẤT (ra ngoài, xuất hiện)", words: "出かけます (ra ngoài), 出口 (lối ra)" }
    ],
    dialogue: {
      situation: "Gọi điện hỏi thăm thời tiết giữa hai thành phố",
      lines: [
        { spk: "Minh", text: "もしもし、さくらさん。東京の天気はどうですか。" },
        { spk: "Sakura", text: "東京は今、雪が降っていて、とても寒いですよ。" },
        { spk: "Minh", text: "そうですか。ハノイは今、雨が降っていますが、寒くないです。" },
        { spk: "Sakura", text: "いいですね。風邪をひかないように気をつけてくださいね。" }
      ]
    },
    culture: "Bốn mùa rõ rệt ở Nhật Bản (Shiki): Mùa xuân có hoa anh đào (Sakura), mùa hè lễ hội pháo hoa, mùa thu ngắm lá phong đỏ (Momiji), mùa đông trượt tuyết và ngắm tuyết trắng ở Hokkaido.",
    quiz: [
      {
        q: "Điền trợ từ đúng: '今、雨 (____) 降っています。'",
        options: ["A. を", "B. が", "C. に", "D. で"],
        a: 1,
        exp: "Hiện tượng tự nhiên xảy ra tự thân dùng trợ từ 'が' trước động từ: 雨が降っています."
      },
      {
        q: "Bốn chữ Hán chỉ bốn mùa theo thứ tự Xuân - Hạ - Thu - Đông là:",
        options: ["A. 春・夏・秋・冬", "B. 夏・春・冬・秋", "C. 冬・秋・夏・春", "D. 秋・冬・春・夏"],
        a: 0,
        exp: "Thứ tự 4 mùa: 春 (Haru) - 夏 (Natsu) - 秋 (Aki) - 冬 (Fuyu)."
      }
    ]
  },

  // BÀI 6
  {
    id: "bai-6",
    lessonNum: 6,
    title: "ガンさんは今、たいいくかんで歌を歌っています",
    romaji: "Ngan-san wa ima, taiikukan de uta o utatte imasu",
    meaning: "Bạn Ngân đang hát ở nhà thể chất",
    goal: "Hỏi/nói người nào đang làm gì ở đâu: hoạt động sân khấu, trường học, câu lạc bộ, địa điểm công cộng.",
    badge: "Hành động đang diễn ra tại địa điểm",
    vocab: [
      { jp: "体育館", kana: "たいいくかん", romaji: "taiikukan", mean: "Nhà thi đấu thể chất", type: "Danh từ" },
      { jp: "教室", kana: "きょうしつ", romaji: "kyōshitsu", mean: "Phòng học", type: "Danh từ" },
      { jp: "門", kana: "もん", romaji: "mon", mean: "Cổng trường", type: "Danh từ" },
      { jp: "ステージ", kana: "すてーじ", romaji: "sutēji", mean: "Sân khấu (Stage)", type: "Danh từ" },
      { jp: "歌を歌います", kana: "うたをうたいます", romaji: "uta o utaimasu", mean: "Hát bài hát", type: "Cụm động từ" },
      { jp: "ギターをひきます", kana: "ぎたーをひきます", romaji: "gitā o hikimasu", mean: "Chơi đàn ghi-ta", type: "Cụm động từ" },
      { jp: "話します", kana: "はなします", romaji: "hanashimasu", mean: "Nói chuyện", type: "Động từ" },
      { jp: "売ります", kana: "うります", romaji: "urimasu", mean: "Bán đồ", type: "Động từ" },
      { jp: "客", kana: "きゃく", romaji: "kyaku", mean: "Khách hàng", type: "Danh từ" },
      { jp: "生徒", kana: "せいと", romaji: "seito", mean: "Học sinh", type: "Danh từ" }
    ],
    grammar: {
      title: "Mẫu câu hành động đang tiếp diễn tại địa điểm: で Vています",
      formula: "[Chủ ngữ] は [Địa điểm] で [Vて] います",
      usage: "Diễn tả một người đang thực hiện hành động tại một địa điểm cụ thể. Trợ từ で đánh dấu địa điểm diễn ra hành động, Vています diễn tả hành động đang tiếp diễn.",
      examples: [
        "ガンさんは今、体育館で歌を歌っています。(Bạn Ngân bây giờ đang hát trong nhà thể chất.)",
        "生徒たちは教室で日本語を勉強しています。(Các bạn học sinh đang học tiếng Nhật trong phòng học.)",
        "田中先生は職員室で本を読んでいます。(Thầy Tanaka đang đọc sách trong phòng hội đồng giáo viên.)"
      ],
      expansion: "Phân biệt: Địa điểm に います (chỉ sự tồn tại/vị trí có mặt) khác với Địa điểm で Vています (địa điểm diễn ra hành động)."
    },
    kanji: [
      { char: "来", on: "ライ", kun: "く・る / き・ます", mean: "LAI (đến, tới)", words: "来ます (đến), 来年 (năm sau)" },
      { char: "室", on: "シツ", kun: "-", mean: "THẤT (căn phòng)", words: "教室 (phòng học), 図書室 (phòng thư viện)" },
      { char: "門", on: "モン", kun: "かど", mean: "MÔN (cánh cổng)", words: "校門 (cổng trường), 正門 (cổng chính)" },
      { char: "売", on: "バイ", kun: "う・る", mean: "MẠI (bán ra)", words: "売ります (bán), 売店 (quầy bán đồ)" },
      { char: "客", on: "キャク", kun: "-", mean: "KHÁCH (khách khứa)", words: "お客さん (quý khách), 乗客 (hành khách)" }
    ],
    dialogue: {
      situation: "Tìm bạn trong ngày hội trường Bunkasai",
      lines: [
        { spk: "An", text: "すみません、ガンさんは今どこにいますか。" },
        { spk: "Bình", text: "ガンさんなら、体育館にいますよ。" },
        { spk: "An", text: "体育館で何をしていますか。" },
        { spk: "Bình", text: "ステージで歌を歌っています。見に行きましょう！" }
      ]
    },
    culture: "Lễ hội văn hóa trường học ở Nhật (Bunkasai): Mỗi lớp học và câu lạc bộ tự chuẩn bị các tiết mục kịch nghệ, ca hát, quán ăn nhỏ hoặc triển lãm tranh để đón phụ huynh và bạn bè đến thưởng thức.",
    quiz: [
      {
        q: "Điền trợ từ đúng: 'ナムさんは図書室 (____) 本を読んでいます。'",
        options: ["A. に", "B. で", "C. を", "D. へ"],
        a: 1,
        exp: "Nơi diễn ra hành động (đọc sách) phải dùng trợ từ 'で'."
      },
      {
        q: "Chữ Hán '室' ghép với '教' thành từ '教室' đọc là gì?",
        options: ["A. きょうしつ", "B. たいいくかん", "C. しょくいんしつ", "D. としょしつ"],
        a: 0,
        exp: "教室 đọc là 'kyōshitsu' nghĩa là phòng học."
      }
    ]
  },

  // BÀI 7
  {
    id: "bai-7",
    lessonNum: 7,
    title: "チャンさんは赤いぼうしをかぶっています",
    romaji: "Chan-san wa akai bōshi o kabutte imasu",
    meaning: "Bạn Trang đang đội chiếc mũ màu đỏ",
    goal: "Nhận dạng và miêu tả trang phục/ngoại hình của người trong ảnh; hỏi người nào, mặc đồ gì, màu gì.",
    badge: "Trang phục & Miêu tả người",
    vocab: [
      { jp: "服", kana: "ふく", romaji: "fuku", mean: "Quần áo", type: "Danh từ" },
      { jp: "制服", kana: "せいふく", romaji: "seifuku", mean: "Đồng phục học sinh", type: "Danh từ" },
      { jp: "シャツ", kana: "しゃつ", romaji: "shatsu", mean: "Áo sơ mi", type: "Danh từ" },
      { jp: "ズボン", kana: "ずぼん", romaji: "zubon", mean: "Quần dài", type: "Danh từ" },
      { jp: "帽子", kana: "ぼうし", romaji: "bōshi", mean: "Mũ / Nón", type: "Danh từ" },
      { jp: "かぶります", kana: "かぶります", romaji: "kaburimasu", mean: "Đội (mũ)", type: "Động từ" },
      { jp: "着ます", kana: "きます", romaji: "kimasu", mean: "Mặc (áo, váy, cả bộ)", type: "Động từ" },
      { jp: "はきます", kana: "はきます", romaji: "hakimasu", mean: "Xỏ, mặc (quần, giày, tất)", type: "Động từ" },
      { jp: "かけます", kana: "かけます", romaji: "kakemasu", mean: "Đeo (kính)", type: "Động từ" },
      { jp: "赤い", kana: "あかい", romaji: "akai", mean: "Màu đỏ", type: "Tính từ đuôi い" }
    ],
    grammar: {
      title: "Mẫu câu trạng thái trang phục mang trên người: Vています",
      formula: "[Chủ ngữ] は [Tính từ / Màu sắc] [Đồ dùng] を [Vて] います",
      usage: "Diễn tả trạng thái một người đang mặc, đội, mang trang phục hoặc phụ kiện trên người.",
      rules: [
        "Đội mũ: 帽子をかぶっています (kabutte imasu)",
        "Mặc áo / váy / đồng phục: シャツ／制服を着ています (kite imasu)",
        "Mặc quần / xỏ giày: ズボン／靴をはいています (haite imasu)",
        "Đeo kính: めがねをかけています (kakete imasu)"
      ],
      examples: [
        "チャンさんは赤い帽子をかぶっています。(Bạn Trang đang đội mũ đỏ.)",
        "あの青いシャツを着ている人はだれですか。(Người đang mặc áo sơ mi xanh kia là ai thế?)",
        "田中先生は黒いめがねをかけています。(Thầy Tanaka đang đeo kính đen.)"
      ]
    },
    kanji: [
      { char: "着", on: "チャク", kun: "き・る / つ・く", mean: "TRƯỚC (mặc áo, đến nơi)", words: "着ます (mặc), 上着 (áo khoác ngoài)" },
      { char: "制", on: "セイ", kun: "-", mean: "CHẾ (chế độ, kiểm soát)", words: "制服 (đồng phục), 制度 (chế độ)" },
      { char: "服", on: "フク", kun: "-", mean: "PHỤC (quần áo, phục tùng)", words: "服 (quần áo), 洋服 (âu phục)" },
      { char: "短", on: "タン", kun: "みじか・い", mean: "ĐOẢN (ngắn)", words: "短い (ngắn), 短期 (ngắn hạn)" },
      { char: "赤", on: "セキ", kun: "あか / あか・い", mean: "XÍCH (màu đỏ)", words: "赤い (đỏ), 赤ちゃん (em bé)" }
    ],
    dialogue: {
      situation: "Chỉ bạn mình trong bức ảnh chụp chung",
      lines: [
        { spk: "Mai", text: "フオンさん、この写真の中でチャンさんはどの人ですか。" },
        { spk: "Phương", text: "チャンさんですか。赤い帽子をかぶっている人ですよ。" },
        { spk: "Mai", text: "ああ、白いシャツを着て、めがねをかけている人ですね。" },
        { spk: "Phương", text: "はい、そうです。笑顔がかわいいですね。" }
      ]
    },
    culture: "Đồng phục học sinh Nhật Bản (Seifuku): Gồm đồng phục áo thủy thủ (Sailor fuku) hoặc áo vest Gakuran lịch lãm. Học sinh tuân thủ nghiêm túc nội quy trang phục, giày và cặp sách đúng quy chuẩn.",
    quiz: [
      {
        q: "Chọn động từ phù hợp đi với '靴' (giày): '靴を (____) います。'",
        options: ["A. 着て", "B. かぶって", "C. はいて", "D. かけて"],
        a: 2,
        exp: "Giày, tất, quần (phần từ thắt lưng trở xuống) dùng động từ 'はきます' -> 靴をはいています."
      },
      {
        q: "Chữ Hán '短' trong '短い' (ngắn) đối lập với tính từ nào?",
        options: ["A. 長い (Dài)", "B. 高い (Cao)", "C. 赤い (Đỏ)", "D. 白い (Trắng)"],
        a: 0,
        exp: "短 (Đoản - ngắn) đối nghĩa với 長 (Trường - dài)."
      }
    ]
  },

  // ÔN TẬP 2
  {
    id: "on-tap-2",
    lessonNum: 7.5,
    title: "ÔN TẬP 2 (BÀI 4 – 7)",
    romaji: "Fukushū 2 (Dai 4-ka ~ Dai 7-ka)",
    meaning: "Củng cố tổng hợp kiến thức Bài 4, 5, 6, 7",
    goal: "Hệ thống hóa cấu trúc cho nhận quà, thời tiết, hành động đang diễn ra và miêu tả trang phục.",
    badge: "Tổng hợp kiến thức Chặng 2",
    isReview: true,
    summary: "Ôn tập 4 chuyên đề trọng tâm: (1) Cho nhận あげます／もらいます; (2) Thời tiết diễn tiến [Địa điểm] は今 [Hiện tượng] が Vています; (3) Hành động tại địa điểm [Địa điểm] で Vています; (4) Trang phục trên người 着ています／はいています／かぶっています／かけています. Chữ Hán: 去, 祖, 計, 族, 祝, 春, 夏, 秋, 冬, 出, 来, 室, 門, 売, 客, 着, 制, 服, 短, 赤.",
    quiz: [
      {
        q: "Chọn câu mô tả đúng: 'Trời đang mưa và bạn Nam đang đeo kính':",
        options: [
          "A. 雨が降っていて、ナムさんはめがねをかけています。",
          "B. 雨が降って、ナムさんはめがねを着ています。",
          "C. 雨を降っています、ナムさんはめがねをはいています。",
          "D. 雨で降っています、ナムさんはめがねをかぶっています。"
        ],
        a: 0,
        exp: "Mưa rơi là '雨が降っています' và đeo kính là 'めがねをかけています'."
      },
      {
        q: "Chữ Hán '祝' trong '祝います' có âm Hán Việt là:",
        options: ["A. CHÚC", "B. TỔ", "C. KHỨ", "D. THẤT"],
        a: 0,
        exp: "Chữ 祝 có âm Hán Việt là CHÚC (chúc mừng)."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { lessonsPart1 };
}
