// Dữ liệu Tiếng Nhật 8 - Phần 1: Bài 1 đến Bài 7 và các bài Ôn tập 1 & 2
// Sách giáo khoa Kết nối tri thức với cuộc sống (GDPT 2018)

const lessonsPart1 = [
  // BÀI 1
  {
    id: "bai-1",
    lessonNum: 1,
    title: "休みの日",
    romaji: "Yasumi no hi",
    meaning: "Ngày nghỉ",
    goal: "Nói về các hoạt động thường làm vào ngày nghỉ hoặc thời gian rảnh; trình bày sở thích và bạn đồng hành; sử dụng mẫu liệt kê hành động tiêu biểu.",
    badge: "Sinh hoạt & Ngày nghỉ",
    vocab: [
      { jp: "買い物に行く", kana: "かいものにいく", romaji: "kaimono ni iku", mean: "Đi mua sắm", type: "Cụm động từ" },
      { jp: "スポーツをする", kana: "すぽーつをする", romaji: "supōtsu o suru", mean: "Chơi thể thao", type: "Cụm động từ" },
      { jp: "アニメを見る", kana: "あにめをみる", romaji: "anime o miru", mean: "Xem anime (phim hoạt hình)", type: "Cụm động từ" },
      { jp: "本を読む", kana: "ほんをよむ", romaji: "hon o yomu", mean: "Đọc sách", type: "Cụm động từ" },
      { jp: "散歩する", kana: "さんぽする", romaji: "sanpo suru", mean: "Đi dạo", type: "Động từ" },
      { jp: "料理を作る", kana: "りょうりをつくる", romaji: "ryōri o tsukuru", mean: "Nấu ăn", type: "Cụm động từ" },
      { jp: "音楽を聴く", kana: "おんがくをきく", romaji: "ongaku o kiku", mean: "Nghe nhạc", type: "Cụm động từ" },
      { jp: "掃除をする", kana: "そうじをする", romaji: "sōji o suru", mean: "Dọn dẹp phòng/nhà", type: "Cụm động từ" },
      { jp: "友達と遊ぶ", kana: "ともだちとあそぶ", romaji: "tomodachi to asobu", mean: "Đi chơi với bạn", type: "Cụm động từ" },
      { jp: "のんびりする", kana: "のんびりする", romaji: "nonbiri suru", mean: "Thư thái, thong thả nghỉ ngơi", type: "Phó từ / Động từ" },
      { jp: "休みの日", kana: "やすみのひ", romaji: "yasumi no hi", mean: "Ngày nghỉ", type: "Danh từ" },
      { jp: "暇な時", kana: "ひまなとき", romaji: "hima na toki", mean: "Khi rảnh rỗi", type: "Cụm từ" }
    ],
    grammar: {
      title: "1. Liệt kê hành động tiêu biểu: Vたり、Vたりします / 2. Thích làm V: Vるのが好きです",
      formula: "① V1(thể た) + り、V2(thể た) + り します\n② V(thể từ điển - る) + のが好きです\n③ N1 とか N2 とか",
      usage: "Mẫu ① dùng để liệt kê một vài hành động tiêu biểu trong số nhiều việc mình làm (không theo thứ tự thời gian bắt buộc, khác với chuỗi Vて). Mẫu ② danh từ hóa động từ bằng trợ từ の để nói thích hành động nào đó. Mẫu ③ liệt kê các danh từ làm ví dụ ('như là... chẳng hạn...').",
      examples: [
        "友だちと買い物に行ったり、スポーツをしたりします。(Tôi đi mua sắm cùng bạn, chơi thể thao chẳng hạn.)",
        "休みの日には、本を読んだり、音楽を聴いたりします。(Vào ngày nghỉ tôi đọc sách, nghe nhạc.)",
        "家でゆっくりアニメを見るのが好きです。(Tôi thích thong thả xem anime ở nhà.)",
        "休みの日はサッカーとかテニスとかのスポーツをします。(Ngày nghỉ tôi chơi các môn như bóng đá, quần vợt.)"
      ],
      rules: "Động từ chia về thể Quá khứ (thể た) rồi gắn đuôi り. Động từ cuối câu luôn kết thúc bằng します (hiện tại/thói quen) hoặc しました (quá khứ)."
    },
    kanji: [
      { char: "覚", on: "カク", kun: "おぼ・える / さ・める", mean: "GIÁC (nhớ, tỉnh giấc)", words: "覚える (oboeru - ghi nhớ), 目覚まし (mezamashi - đồng hồ báo thức)" },
      { char: "前", on: "ゼン", kun: "まえ", mean: "TIỀN (trước)", words: "前 (mae - phía trước), 午前 (gozen - buổi sáng), 名前 (namae - tên)" },
      { char: "大", on: "ダイ・タイ", kun: "おお・きい", mean: "ĐẠI (to lớn)", words: "大きい (ookii - lớn), 大学 (daigaku - đại học), 大切 (taisetsu - quan trọng)" },
      { char: "特", on: "トク", kun: "-", mean: "ĐẶC (đặc biệt)", words: "特別 (tokubetsu - đặc biệt), 特に (toku ni - đặc biệt là)" },
      { char: "考", on: "コウ", kun: "かんが・える", mean: "KHẢO (suy nghĩ, nghiên cứu)", words: "考える (kangaeru - suy nghĩ), 考え (kangae - ý kiến, ý nghĩ)" }
    ],
    dialogue: {
      situation: "Hai bạn học sinh hỏi thăm nhau về cách tận hưởng ngày nghỉ cuối tuần",
      lines: [
        { spk: "Mai", text: "けんたくんは、休みの日に何をしますか。" },
        { spk: "Kenta", text: "僕は友だちとサッカーをしたり、ゲームをしたりします。マイさんは？" },
        { spk: "Mai", text: "私は家でのんびりアニメを見るのが好きです。たまに料理を作ったりもしますよ。" },
        { spk: "Kenta", text: "へえ、いいですね！料理を作るのが上手なんですか。" },
        { spk: "Mai", text: "まだ練習中ですが、クッキーとかケーキとかを作ります。" }
      ]
    },
    culture: "読書習慣 (Thói quen đọc sách ở Nhật): Tại Nhật, phong trào 'Asadoku' (朝の読書 - 10 phút đọc sách mỗi buổi sáng trước giờ học) được áp dụng tại hàng nghìn trường học giúp học sinh rèn luyện khả năng tập trung, mở rộng vốn từ và hình thành tình yêu tri thức; đối chiếu với các hoạt động đọc sách thư viện của học sinh Việt Nam.",
    quiz: [
      {
        q: "Điền dạng đúng của động từ: 休みの日には本を (____)、散歩をしたりします。",
        options: ["A. 読んで", "B. 読んだり", "C. 読む", "D. 読みました"],
        a: 1,
        exp: "Cấu trúc liệt kê hành động tiêu biểu: V(thể た) + り -> 読む (nhóm 1: 読んだ) + り = 読んだり."
      },
      {
        q: "Chữ Hán '特' trong từ '特別' có âm Hán Việt là gì?",
        options: ["A. GIÁC", "B. TIỀN", "C. ĐẶC", "D. KHẢO"],
        a: 2,
        exp: "'特' có âm Hán Việt là ĐẶC (trong đặc biệt, đặc sắc)."
      }
    ]
  },

  // BÀI 2
  {
    id: "bai-2",
    lessonNum: 2,
    title: "イベントの計画",
    romaji: "Ibento no keikaku",
    meaning: "Lập kế hoạch sự kiện",
    goal: "Trao đổi, thảo luận và đưa ra quyết định về kế hoạch tổ chức sự kiện lớp/trường; giải thích lý do lựa chọn bằng liên từ và trợ từ phù hợp.",
    badge: "Kế hoạch & Đưa ý kiến",
    vocab: [
      { jp: "イベント", kana: "いべんと", romaji: "ibento", mean: "Sự kiện (Event)", type: "Danh từ" },
      { jp: "計画", kana: "けいかく", romaji: "keikaku", mean: "Kế hoạch", type: "Danh từ" },
      { jp: "文化祭", kana: "ぶんかさい", romaji: "bunkasai", mean: "Lễ hội văn hóa trường học", type: "Danh từ" },
      { jp: "発表", kana: "はっぴょう", romaji: "happyō", mean: "Thuyết trình, biểu diễn", type: "Danh từ / Động từ" },
      { jp: "劇", kana: "げき", romaji: "geki", mean: "Vở kịch", type: "Danh từ" },
      { jp: "ダンス", kana: "だんす", romaji: "dansu", mean: "Điệu nhảy, khiêu vũ (Dance)", type: "Danh từ" },
      { jp: "歌", kana: "うた", romaji: "uta", mean: "Bài hát", type: "Danh từ" },
      { jp: "出し物", kana: "だしもの", romaji: "dashimono", mean: "Tiết mục biểu diễn", type: "Danh từ" },
      { jp: "参加する", kana: "さんかする", romaji: "sanka suru", mean: "Tham gia", type: "Động từ" },
      { jp: "相談する", kana: "そうだんする", romaji: "sōdan suru", mean: "Bàn bạc, trao đổi ý kiến", type: "Động từ" },
      { jp: "黒板", kana: "こくばん", romaji: "kokuban", mean: "Bảng đen", type: "Danh từ" },
      { jp: "意見", kana: "いけん", romaji: "iken", mean: "Ý kiến", type: "Danh từ" }
    ],
    grammar: {
      title: "1. Đưa ý kiến: ～がいいと思います / 2. Quyết định: ～にしましょう / 3. Nêu lý do: ～し、～ですから",
      formula: "① N が いいと思います (Tôi nghĩ là N thì tốt/phù hợp)\n② N にしましょう (Chúng ta hãy chọn/quyết định N nhé)\n③ [Thể ngắn] し、[Thể ngắn] し、[Thể lịch sự/ngắn] から (Vừa... vừa... nên là...)",
      usage: "Cấu trúc ① dùng để bày tỏ quan điểm, đề xuất phương án một cách lịch sự, khiêm tốn. Cấu trúc ② dùng để đưa ra quyết định chung sau khi đã thảo luận. Cấu trúc ③ dùng để liệt kê nhiều lý do, tính chất bổ trợ cho nhận định.",
      examples: [
        "文化祭の出し物は、劇がいいと思います。(Tôi nghĩ tiết mục lễ hội văn hóa thì diễn kịch là phù hợp.)",
        "じゃ、クラスの出し物はダンスにしましょう。(Vậy thì tiết mục của lớp mình hãy chọn nhảy nhé.)",
        "みんなで楽しく練習できるし、面白いですから、歌にしましょう。(Vừa có thể cùng nhau luyện tập vui vẻ, vừa thú vị nữa nên hãy chọn ca hát nhé.)"
      ],
      rules: "し đi sau thể thông thường (thể ngắn). Khi là danh từ hoặc tính từ đuôi な, dùng だし: 便利だし、有名だし."
    },
    kanji: [
      { char: "主", on: "シュ・ス", kun: "ぬし / おも", mean: "CHỦ (chủ nhân, chủ yếu)", words: "主な (omona - chủ yếu, chính), ご主人 (goshujin - người chồng)" },
      { char: "黒", on: "コク", kun: "くろ・い", mean: "HẮC (màu đen)", words: "黒い (kuroi - đen), 黒板 (kokuban - bảng đen)" },
      { char: "白", on: "ハク・ビャク", kun: "しろ・い", mean: "BẠCH (màu trắng)", words: "白い (shiroi - trắng), 面白い (omoshiroi - thú vị)" },
      { char: "黄", on: "コウ・オウ", kun: "き / こ", mean: "HOÀNG (màu vàng)", words: "黄色 (kiiro - màu vàng), 黄色い (kiiroi - có màu vàng)" },
      { char: "色", on: "ショク・シキ", kun: "いろ", mean: "SẮC (màu sắc)", words: "色 (iro - màu), 色々 (iroiro - đa dạng), 景色 (keshiki - phong cảnh)" }
    ],
    dialogue: {
      situation: "Nhóm học sinh bàn bạc chọn tiết mục cho ngày hội văn hóa",
      lines: [
        { spk: "Linh", text: "文化祭の出し物は何がいいと思いますか。" },
        { spk: "Nam", text: "私は日本の昔話の劇がいいと思います。" },
        { spk: "Linh", text: "どうしてですか。" },
        { spk: "Nam", text: "みんなで役割を分担できるし、日本語の勉強にもなりますから。" },
        { spk: "Linh", text: "賛成です！じゃ、劇にしましょう。" }
      ]
    },
    culture: "文化祭 (Bunkasai - Lễ hội văn hóa trường học): Một sự kiện trọng đại trong đời sống học sinh Nhật Bản, thường tổ chức vào mùa thu. Cả lớp cùng trang trí phòng học, dựng gian hàng đồ ăn (mì yakisoba, bánh takoyaki) hoặc biểu diễn kịch, ca múa nhạc để đón tiếp phụ huynh và bạn bè trường ngoài.",
    quiz: [
      {
        q: "Khi cả nhóm đồng thuận đưa ra quyết định chọn món quà, ta dùng mẫu câu nào?",
        options: ["A. このプレゼントがいいと思います", "B. このプレゼントにしましょう", "C. このプレゼントがあります", "D. このプレゼントをあげます"],
        a: 1,
        exp: "Mẫu câu 'Nにしましょう' dùng để chốt quyết định lựa chọn sau khi thảo luận nhóm."
      },
      {
        q: "Chữ Hán '黒' trong từ '黒板' (bảng đen) có âm Hán Việt là gì?",
        options: ["A. BẠCH", "B. HẮC", "C. HOÀNG", "D. SẮC"],
        a: 1,
        exp: "'黒' có âm Hán Việt là HẮC (nghĩa là màu đen)."
      }
    ]
  },

  // BÀI 3
  {
    id: "bai-3",
    lessonNum: 3,
    title: "イベントのじゅんび",
    romaji: "Ibento no junbi",
    meaning: "Chuẩn bị sự kiện",
    goal: "Hỏi và báo cáo tiến độ chuẩn bị công việc (đã xong / chưa xong); phân công nhiệm vụ và đưa ra lời yêu cầu lịch sự.",
    badge: "Tiến độ & Nhờ vả lịch sự",
    vocab: [
      { jp: "準備", kana: "じゅんび", romaji: "junbi", mean: "Sự chuẩn bị", type: "Danh từ / Động từ" },
      { jp: "看板", kana: "かんばん", romaji: "kanban", mean: "Biển hiệu, bảng thông báo", type: "Danh từ" },
      { jp: "ポスター", kana: "ぽすたー", romaji: "posutā", mean: "Áp phích quảng cáo (Poster)", type: "Danh từ" },
      { jp: "机", kana: "つくえ", romaji: "tsukue", mean: "Bàn học/làm việc", type: "Danh từ" },
      { jp: "椅子", kana: "いす", romaji: "isu", mean: "Ghế ngồi", type: "Danh từ" },
      { jp: "並べる", kana: "ならべる", romaji: "naraberu", mean: "Sắp xếp, xếp thành hàng", type: "Động từ" },
      { jp: "運ぶ", kana: "はこぶ", romaji: "hakobu", mean: "Vận chuyển, mang vác", type: "Động từ" },
      { jp: "貼る", kana: "はる", romaji: "haru", mean: "Dán lên", type: "Động từ" },
      { jp: "もう", kana: "もう", romaji: "mō", mean: "Đã... rồi", type: "Phó từ" },
      { jp: "まだ", kana: "まだ", romaji: "mada", mean: "Vẫn chưa", type: "Phó từ" },
      { jp: "終わる", kana: "おわる", romaji: "owaru", mean: "Kết thúc, hoàn thành", type: "Động từ" },
      { jp: "手伝う", kana: "てつだう", romaji: "tetsudau", mean: "Giúp đỡ", type: "Động từ" }
    ],
    grammar: {
      title: "1. Hỏi việc đã hoàn thành: もう Vましたか / 2. Chưa hoàn thành: まだ Vていません / 3. Nhờ vả: Vてください",
      formula: "① もう + Vましたか\n② はい、もう Vました ／ いいえ、まだ Vていません\n③ V(thể て) + ください",
      usage: "Cấu trúc ① và ② dùng để kiểm tra và báo cáo tiến độ hành động. Lưu ý trong câu phủ định của 'もう...ましたか', tiếng Nhật dùng 'まだVていません' (vẫn chưa làm) chứ không dùng 'Vませんでした'. Cấu trúc ③ dùng để yêu cầu, nhờ ai đó thực hiện việc gì một cách lịch sự.",
      examples: [
        "看板はもう作りましたか。― はい、もう作りました。(Đã làm bảng hiệu chưa? ― Vâng, đã làm rồi.)",
        "ポスターはもう貼りましたか。― いいえ、まだ貼っていません。(Đã dán áp phích chưa? ― Chưa, vẫn chưa dán.)",
        "字を大きく書いてください。(Xin hãy viết chữ to và rõ ràng.)",
        "机と椅子を並べてください。(Xin hãy xếp bàn và ghế ngay ngắn.)"
      ],
      rules: "Phân biệt: Vました (đã hoàn thành xong) >< まだVていません (hiện tại vẫn chưa thực hiện, có thể đang hoặc chuẩn bị làm)."
    },
    kanji: [
      { char: "正", on: "セイ・ショウ", kun: "ただ・しい / まさ", mean: "CHÍNH (đúng đắn, chính đáng)", words: "正しい (tadashii - đúng), 正月 (shōgatsu - Tết), 正門 (seimon - cổng chính)" },
      { char: "細", on: "サイ", kun: "ほそ・い / こま・かい", mean: "TẾ (nhỏ, gầy, chi tiết)", words: "細い (hosoi - thon gầy), 細かい (komakai - chi tiết, tỉ mỉ)" },
      { char: "早", on: "ソウ・サッ", kun: "はや・い", mean: "TẢO (sớm)", words: "早い (hayai - sớm), 早起き (hayaoki - việc dậy sớm)" },
      { char: "起", on: "キ", kun: "お・きる / お・こす", mean: "KHỞI (thức dậy, khởi đầu)", words: "起きる (okiru - thức dậy), 起こす (okosu - đánh thức ai)" }
    ],
    dialogue: {
      situation: "Kiểm tra tiến độ chuẩn bị sự kiện phòng học trước giờ khai mạc",
      lines: [
        { spk: "Trưởng nhóm", text: "皆さん、じゅんびの進み具合はどうですか。ポスターはもう貼りましたか。" },
        { spk: "Mai", text: "はい、廊下に貼りました。" },
        { spk: "Trưởng nhóm", text: "プログラムの印刷はもう終わりましたか。" },
        { spk: "Nam", text: "いいえ、まだ終わっていません。今コピーしています。" },
        { spk: "Trưởng nhóm", text: "わかりました。急いで印刷してくださいね。" }
      ]
    },
    culture: "日本の学校における音楽 (Âm nhạc trong trường học Nhật Bản): Âm nhạc giữ vai trò rất lớn trong giáo dục nhân cách tại trường Nhật. Hằng năm đều diễn ra Hội thi hợp xướng (Gasshōkon - 合唱コンクール), các học sinh tự bầu nhạc trưởng (chỉ huy) và người đệm đàn piano, luyện tập hăng say sau giờ học để thể hiện tinh thần đoàn kết.",
    quiz: [
      {
        q: "Trả lời cho câu hỏi: '宿題はもう出しましたか。' khi bạn chưa nộp bài:",
        options: [
          "A. いいえ、まだ出しませんでした。",
          "B. いいえ、まだ出していません。",
          "C. はい、もう出しません。",
          "D. いいえ、もう出しました。"
        ],
        a: 1,
        exp: "Phủ định của 'もうVましたか' diễn tả việc chưa hoàn tất là 'いいえ、まだVていません'."
      },
      {
        q: "Chữ Hán '早' trong từ '早起き' có nghĩa là gì?",
        options: ["A. Đúng đắn", "B. Chi tiết", "C. Sớm", "D. Khởi đầu"],
        a: 2,
        exp: "'早' (TẢO) có nghĩa là sớm, '早起き' nghĩa là dậy sớm."
      }
    ]
  },

  // BÀI 4
  {
    id: "bai-4",
    lessonNum: 4,
    title: "プレゼント",
    romaji: "Purezento",
    meaning: "Quà tặng",
    goal: "Nói về món quà được người khác tặng và món đồ bản thân mong muốn có; hỏi về ý thích và thay thế danh từ bằng đại từ 'の'.",
    badge: "Quà biếu & Ước muốn",
    vocab: [
      { jp: "プレゼント", kana: "ぷれぜんと", romaji: "purezento", mean: "Quà tặng (Present)", type: "Danh từ" },
      { jp: "贈り物", kana: "おくりもの", romaji: "okurimono", mean: "Món quà biếu/tặng", type: "Danh từ" },
      { jp: "誕生日", kana: "たんじょうび", romaji: "tanjōbi", mean: "Sinh nhật", type: "Danh từ" },
      { jp: "時計", kana: "とけい", romaji: "tokei", mean: "Đồng hồ", type: "Danh từ" },
      { jp: "スニーカー", kana: "すにーかー", romaji: "sunīkā", mean: "Giày thể thao (Sneakers)", type: "Danh từ" },
      { jp: "鞄", kana: "かばん", romaji: "kaban", mean: "Cặp sách, ba lô, túi xách", type: "Danh từ" },
      { jp: "財布", kana: "さいふ", romaji: "saifu", mean: "Ví tiền", type: "Danh từ" },
      { jp: "自転車", kana: "じてんしゃ", romaji: "jitensha", mean: "Xe đạp", type: "Danh từ" },
      { jp: "くれる", kana: "くれる", romaji: "kureru", mean: "Tặng cho (tôi / người phe tôi)", type: "Động từ" },
      { jp: "もらう", kana: "もらう", romaji: "morau", mean: "Nhận được từ ai", type: "Động từ" },
      { jp: "あげる", kana: "あげる", romaji: "ageru", mean: "Tặng, biếu ai", type: "Động từ" },
      { jp: "かっこいい", kana: "かっこいい", romaji: "kakkoii", mean: "Ngầu, đẹp mắt", type: "Tính từ đuôi い" }
    ],
    grammar: {
      title: "1. Người khác tặng cho tôi: N(người) が N(vật) をくれました / 2. Muốn có vật gì: N がほしいです / 3. Thay thế danh từ bằng の",
      formula: "① N (người tặng) が [私に] N (món quà) をくれました\n② どんな N がほしいですか\n③ N がほしいです ／ [Tính từ] のがほしいです",
      usage: "Cấu trúc ① diễn tả ai đó đã trao tặng quà cho chính người nói hoặc người thuộc nhóm/gia đình người nói. Cấu trúc ② và ③ dùng để hỏi và bày tỏ mong muốn sở hữu một sự vật cụ thể. Trợ từ 'の' được dùng làm đại từ thay thế danh từ đã được nhắc tới trước đó để tránh lặp lại từ vựng.",
      examples: [
        "たん生日に父が新しい時計をくれました。(Bố đã tặng tôi một chiếc đồng hồ mới vào ngày sinh nhật.)",
        "誕生日にどんなプレゼントがほしいですか。(Sinh nhật bạn muốn nhận món quà như thế nào?)",
        "スニーカーがほしいです。青くて、かっこいいのがほしいです。(Tôi muốn có một đôi giày thể thao. Tôi muốn đôi màu xanh và ngầu.)"
      ],
      rules: "くれました dùng khi người nhận là '私' (người nói) hoặc người thân trong gia đình. Muốn sở hữu danh từ dùng [N + がほしいです], muốn làm hành động dùng [V-stem + たいです]."
    },
    kanji: [
      { char: "新", on: "シン", kun: "あたら・しい / あら・た", mean: "TÂN (mới)", words: "新しい (atarashii - mới), 新聞 (shinbun - tờ báo), 新幹線 (shinkansen - tàu shinkansen)" },
      { char: "自", on: "ジ・シ", kun: "みずか・ら", mean: "TỰ (bản thân, tự mình)", words: "自分 (jibun - bản thân), 自由 (jiyū - tự do), 自動 (jidō - tự động)" },
      { char: "転", on: "テン", kun: "ころ・がる / ころ・ぶ", mean: "CHUYỂN (lăn, chuyển động, xoay)", words: "自転車 (jitensha - xe đạp), 運転 (unten - lái xe)" },
      { char: "車", on: "シャ", kun: "くるま", mean: "XA (xe cộ)", words: "車 (kuruma - ô tô/xe), 電車 (densha - tàu điện), 自動車 (jidōsha - xe hơi)" },
      { char: "百", on: "ヒャク・ビャク", kun: "もも", mean: "BÁCH (một trăm)", words: "百 (hyaku - một trăm), 八百屋 (yaoya - tiệm bán rau quả)" }
    ],
    dialogue: {
      situation: "Hai bạn tâm sự về quà sinh nhật vừa qua và ước muốn sắp tới",
      lines: [
        { spk: "Hana", text: "マイさん、その鞄はとてもかわいいですね。" },
        { spk: "Mai", text: "ありがとうございます。先週の誕生日に母がくれたんです。" },
        { spk: "Hana", text: "へえ、素敵ですね！ハナさんは次の誕生日に何がほしいですか。" },
        { spk: "Mai", text: "私は新しいスニーカーがほしいです。軽くて、走りやすいのがほしいです。" }
      ]
    },
    culture: "お中元 (Ochūgen) & お歳暮 (Oseibo): Văn hóa tặng quà định kỳ của người Nhật thể hiện lòng tri ân sâu sắc tới thầy cô, cấp trên, khách hàng và đối tác. Ochūgen diễn ra vào giữa năm (khoảng tháng 7–8) với các món giải nhiệt (trái cây, trà, thạch). Oseibo diễn ra vào cuối năm (tháng 12) với thực phẩm bồi bổ, đồ hộp mừng năm mới; đối chiếu nét tương đồng với phong tục biếu quà Tết ở Việt Nam.",
    quiz: [
      {
        q: "Điền trợ từ thích hợp: 誕生日に兄 (____) おもしろい本をくれました。",
        options: ["A. に", "B. が", "C. を", "D. で"],
        a: 1,
        exp: "Trong cấu trúc người khác tặng cho mình quà: [Người tặng] が (私に) [Vật] を くれました."
      },
      {
        q: "Chọn câu có đại từ 'の' thay thế đúng nghĩa 'Tôi muốn một chiếc túi màu đen':",
        options: [
          "A. 黒いの鞄がほしいです。",
          "B. 黒いのがほしいです。",
          "C. 黒い鞄のがほしいです。",
          "D. 黒いのをあげます。"
        ],
        a: 1,
        exp: "'の' thay thế cho danh từ 鞄 (kaban), câu chuẩn là: 黒いのがほしいです."
      }
    ]
  },

  // ふくしゅう 1 — ÔN TẬP 1 (BÀI 1–4)
  {
    id: "on-tap-1",
    isReview: true,
    badge: "ÔN TẬP 1",
    title: "ふくしゅう 1 (Bài 1 – 4)",
    romaji: "Fukushū ichi",
    meaning: "Củng cố tổng hợp kiến thức Bài 1 đến Bài 4",
    summary: "Hệ thống hóa toàn bộ các hoạt động ngày nghỉ, kế hoạch tổ chức sự kiện, phân công chuẩn bị và trao tặng quà tặng: Mẫu câu Vたり、Vたりする (liệt kê hành động); Vるのが好き (thích làm gì); ～がいいと思う (nêu ý kiến); ～にしよう (chốt quyết định); ～し、～から (nêu nhiều lý do); もうVましたか (hỏi tiến độ); まだVていません (chưa hoàn tất); Vてください (nhờ vả lịch sự); Nがくれました (ai tặng mình món quà); Nがほしい / [Tính từ] のがほしい (nói mong muốn sở hữu).",
    quiz: [
      {
        q: "Câu nào sau đây diễn tả việc liệt kê vài hành động tiêu biểu vào ngày nghỉ?",
        options: [
          "A. 休みの日には、映画を見て、買い物をします。",
          "B. 休みの日には、映画を見たり、買い物をしたりします。",
          "C. 休みの日には、映画を見ながら、買い物をします。",
          "D. 休みの日には、映画を見ることができません。"
        ],
        a: 1,
        exp: "Mẫu câu Vたり、Vたりします dùng để liệt kê một vài hành động tiêu biểu không bắt buộc theo thứ tự."
      },
      {
        q: "Khi bạn bè đang phân vân chọn tiết mục lễ hội, em đề xuất 'Tôi nghĩ múa kịch là tốt nhất', nói thế nào?",
        options: [
          "A. 劇にしましょう。",
          "B. 劇がいいと思います。",
          "C. 劇が好きです。",
          "D. 劇をしてください。"
        ],
        a: 1,
        exp: "'～がいいと思います' dùng để bày tỏ quan điểm, đề xuất phương án mình cho là phù hợp."
      },
      {
        q: "Điền dạng đúng: まだ教室の掃除を (____)。",
        options: ["A. していません", "B. しませんでした", "C. しました", "D. するでしょう"],
        a: 0,
        exp: "Chưa hoàn tất một hành động tính tới hiện tại ta dùng: まだ + Vていません."
      },
      {
        q: "Chữ Hán nào ghép từ 'Tự' (bản thân) và 'Xa' (xe cộ) để chỉ 'Xe đạp'?",
        options: ["A. 電車", "B. 自動車", "C. 自転車", "D. 新幹線"],
        a: 2,
        exp: "自転車 (Tự Chuyển Xa) = Xe đạp."
      }
    ]
  },

  // BÀI 5
  {
    id: "bai-5",
    lessonNum: 5,
    title: "道あんない",
    romaji: "Michi annai",
    meaning: "Chỉ đường",
    goal: "Chỉ đường đi qua giao lộ, hướng rẽ, vỉa hè; hiểu và nhắc lại lộ trình trên bản đồ; sử dụng lý do an toàn khi đưa ra hướng dẫn.",
    badge: "Chỉ đường & Giao thông",
    vocab: [
      { jp: "道", kana: "みち", romaji: "michi", mean: "Con đường", type: "Danh từ" },
      { jp: "案内する", kana: "あんないする", romaji: "annai suru", mean: "Hướng dẫn, chỉ đường", type: "Động từ" },
      { jp: "交差点", kana: "こうさてん", romaji: "kōsaten", mean: "Ngã tư, giao lộ", type: "Danh từ" },
      { jp: "信号", kana: "しんごう", romaji: "shingō", mean: "Đèn tín hiệu giao thông", type: "Danh từ" },
      { jp: "角", kana: "かど", romaji: "kado", mean: "Góc phố, khúc quanh", type: "Danh từ" },
      { jp: "まっすぐ", kana: "まっすぐ", romaji: "massugu", mean: "Đi thẳng", type: "Phó từ" },
      { jp: "曲がる", kana: "まがる", romaji: "magaru", mean: "Rẽ, quẹo (hướng)", type: "Động từ" },
      { jp: "渡る", kana: "わたる", romaji: "wataru", mean: "Băng qua (đường, cầu)", type: "Động từ" },
      { jp: "歩道", kana: "ほどう", romaji: "hodō", mean: "Vỉa hè, lối đi bộ", type: "Danh từ" },
      { jp: "1つ目", kana: "ひとつめ", romaji: "hitotsume", mean: "Cái thứ nhất / điểm thứ nhất", type: "Từ đếm thứ tự" },
      { jp: "駅", kana: "えき", romaji: "eki", mean: "Nhà ga xe lửa/tàu điện", type: "Danh từ" },
      { jp: "本屋", kana: "ほんや", romaji: "hon'ya", mean: "Hiệu sách", type: "Danh từ" }
    ],
    grammar: {
      title: "1. Từng bước chỉ đường: Vてください / 2. Nêu lí do cho chỉ dẫn: ～から / 3. Lượng từ thứ tự: [Số đếm] つ目",
      formula: "① [Địa điểm/Mốc] を／へ + V(thể て) + ください\n② ～から、[Lời khuyên/hướng dẫn] てください\n③ [Số] つ目の [Giao lộ/Góc phố] を [Trái/Phải] に曲がってください",
      usage: "Cấu trúc ① dùng để chỉ dẫn các bước di chuyển: đi thẳng (まっすぐ行ってください), rẽ trái/phải (左／右に曲がってください), băng qua đường (道を渡ってください). Cấu trúc ② dùng 'から' giải thích lý do an toàn hoặc thuận tiện.",
      examples: [
        "1つ目の交差点を左に曲がってください。(Đến ngã tư thứ nhất thì rẽ sang trái nhé.)",
        "車がたくさん通りますから、歩道を歩いてください。(Vì xe cộ qua lại rất đông nên hãy đi trên vỉa hè.)",
        "信号を渡って、まっすぐ行ってください。(Băng qua đèn đỏ rồi tiếp tục đi thẳng.)",
        "駅から2つ目の角を右に曲がると、本屋があります。(Từ nhà ga rẽ phải ở góc phố thứ hai sẽ có hiệu sách.)"
      ],
      rules: "Qua đường / đi trên đường dùng trợ từ を: 道を渡る、歩道を歩く. Hướng rẽ dùng trợ từ に: 左に曲がる、右に曲がる."
    },
    kanji: [
      { char: "左", on: "サ", kun: "ひだり", mean: "TẢ (bên trái)", words: "左 (hidari - bên trái), 左折 (sasetsu - việc rẽ trái), 左手 (hidarite - tay trái)" },
      { char: "右", on: "ウ・ユウ", kun: "みぎ", mean: "HỮU (bên phải)", words: "右 (migi - bên phải), 右折 (usetsu - việc rẽ phải), 右手 (migite - tay phải)" },
      { char: "歩", on: "ホ・ブ", kun: "ある・く / あゆ・む", mean: "BỘ (đi bộ, bước)", words: "歩く (aruku - đi bộ), 歩道 (hodō - vỉa hè), 散歩 (sanpo - tản bộ)" },
      { char: "屋", on: "オク", kun: "や", mean: "ỐC (ngôi nhà, cửa hàng)", words: "本屋 (hon'ya - hiệu sách), 部屋 (heya - căn phòng), 屋上 (okujō - sân thượng)" },
      { char: "駅", on: "エキ", kun: "-", mean: "DỊCH (nhà ga)", words: "駅 (eki - ga tàu), 駅員 (ekiin - nhân viên ga), 駅前 (ekimae - khu vực trước ga)" }
    ],
    dialogue: {
      situation: "Hỏi thăm đường từ cổng trường tới nhà ga gần nhất",
      lines: [
        { spk: "Du khách", text: "すみません、さくら駅へはどう行けばいいですか。" },
        { spk: "Học sinh", text: "この道をまっすぐ行ってください。1つ目の信号を右に曲がってください。" },
        { spk: "Du khách", text: "1つ目の信号を右ですね。" },
        { spk: "Học sinh", text: "ええ。車が多いですから、気をつけて歩道を歩いてくださいね。角に本屋があって、その隣が駅です。" },
        { spk: "Du khách", text: "どうもありがとうございました！" }
      ]
    },
    culture: "点字ブロック (Tenji burokku - Lối đi lát gạch xúc giác): Một phát minh đầy nhân văn của Nhật Bản vào năm 1965 bởi ông Seiichi Miyake nhằm giúp người khiếm thị đi lại an toàn trên đường phố và nhà ga. Gạch có 2 dạng: đường gờ sọc (chỉ hướng đi thẳng) và nốt tròn nổi (báo hiệu điểm dừng, ngã rẽ hay bậc thang). Quy tắc ứng xử văn minh: tuyệt đối không đứng chặn hoặc để xe đạp, chướng ngại vật lên vạch này.",
    quiz: [
      {
        q: "Chọn trợ từ đúng trong câu: '交差点を左 (____) 曲がってください。'",
        options: ["A. を", "B. で", "C. に", "D. が"],
        a: 2,
        exp: "Chỉ hướng rẽ ta dùng trợ từ に: 左に曲がる (rẽ trái), 右に曲がる (rẽ phải)."
      },
      {
        q: "Lối đi gạch nổi màu vàng '点字ブロック' trên đường phố Nhật Bản có công dụng gì?",
        options: [
          "A. Trang trí mỹ thuật đô thị",
          "B. Hướng dẫn đường đi an toàn cho người khiếm thị",
          "C. Dành riêng cho làn xe đạp chạy nhanh",
          "D. Đánh dấu vị trí bán hàng rong"
        ],
        a: 1,
        exp: "Tenji burokku là vạch gạch xúc giác dành cho người khiếm thị nhận diện đường đi bằng gậy dò hoặc bàn chân."
      }
    ]
  },

  // BÀI 6
  {
    id: "bai-6",
    lessonNum: 6,
    title: "観光地",
    romaji: "Kankōchi",
    meaning: "Địa điểm tham quan",
    goal: "Nói về kinh nghiệm đã từng trải nghiệm điều gì trong quá khứ và bày tỏ ước muốn được thử trải nghiệm trong tương lai; giới thiệu món ăn và địa danh.",
    badge: "Kinh nghiệm & Trải nghiệm",
    vocab: [
      { jp: "観光地", kana: "かんこうち", romaji: "kankōchi", mean: "Địa điểm tham quan du lịch", type: "Danh từ" },
      { jp: "お城", kana: "おしろ", romaji: "oshiro", mean: "Thành quách, lâu đài", type: "Danh từ" },
      { jp: "フォー", kana: "ふぉー", romaji: "fō", mean: "Phở (món ăn Việt Nam)", type: "Danh từ" },
      { jp: "ブンチャー", kana: "ぶんちゃー", romaji: "bunchā", mean: "Bún chả (Việt Nam)", type: "Danh từ" },
      { jp: "刺身", kana: "さしみ", romaji: "sashimi", mean: "Món gỏi cá sống Sashimi", type: "Danh từ" },
      { jp: "温泉", kana: "おんせん", romaji: "onsen", mean: "Suối nước nóng Onsen", type: "Danh từ" },
      { jp: "富士山", kana: "ふじさん", romaji: "fujisan", mean: "Núi Phú Sĩ", type: "Danh từ riêng" },
      { jp: "登る", kana: "のぼる", romaji: "noboru", mean: "Leo (núi), trèo lên", type: "Động từ" },
      { jp: "一度", kana: "いちど", romaji: "ichido", mean: "Một lần", type: "Phó từ / Số lần" },
      { jp: "海鮮", kana: "かいせん", romaji: "kaisen", mean: "Hải sản tươi sống", type: "Danh từ" },
      { jp: "歴史", kana: "れきし", romaji: "rekishi", mean: "Lịch sử", type: "Danh từ" },
      { jp: "有名な", kana: "ゆうめいな", romaji: "yūmei na", mean: "Nổi tiếng", type: "Tính từ đuôi な" }
    ],
    grammar: {
      title: "1. Đã từng trải nghiệm: Vたことがあります / 2. Muốn thử trải nghiệm: Vてみたいです",
      formula: "① V (thể た) + ことがあります (Đã từng làm V)\n② V (thể て) + みたいです (Muốn thử làm V)",
      usage: "Cấu trúc ① dùng để diễn đạt kinh nghiệm, trải nghiệm bản thân đã từng làm trong quá khứ (không dùng cho những việc thường nhật như ăn cơm, thức dậy). Cấu trúc ② dùng để diễn tả mong muốn, khao khát được thử trải nghiệm một điều mới mẻ mà mình chưa từng làm bao giờ.",
      examples: [
        "私は日本のお城へ行ったことがあります。(Tôi đã từng đến tham quan lâu đài cổ của Nhật Bản.)",
        "ベトナムのフォーを食べたことがありますか。(Bạn đã từng ăn món phở của Việt Nam chưa?)",
        "一度富士山に登ってみたいです。(Tôi muốn thử một lần leo núi Phú Sĩ.)",
        "ハノイで本場のブンチャーを食べてみたいです。(Tôi muốn thử ăn món bún chả chính gốc ở Hà Nội.)"
      ],
      rules: "Phân biệt: Vたことがあります (xác nhận kinh nghiệm đã có) >< Vてみたいです (ước muốn thử hành động trong tương lai)."
    },
    kanji: [
      { char: "観", on: "カン", kun: "み・る", mean: "QUAN (quan sát, ngắm cảnh)", words: "観光 (kankō - tham quan), 観光客 (kankōkyaku - du khách), 観客 (kankyaku - khán giả)" },
      { char: "光", on: "コウ", kun: "ひかり / ひか・る", mean: "QUANG (ánh sáng)", words: "光 (hikari - ánh sáng), 観光 (kankō - du lịch), 日光 (nikkō - ánh nắng/địa danh Nikko)" },
      { char: "場", on: "ジョウ", kun: "ば", mean: "TRƯỜNG (nơi chốn, địa điểm)", words: "場所 (basho - nơi chốn), 広場 (hiroba - quảng trường), 工場 (kōjō - nhà máy)" },
      { char: "肉", on: "ニク", kun: "-", mean: "NHỤC (thịt)", words: "牛肉 (gyūniku - thịt bò), 豚肉 (butaniku - thịt heo), 鳥肉 (toriniku - thịt gà)" },
      { char: "苦", on: "ク", kun: "くる・しい / にが・い", mean: "KHỔ (đắng, gian khổ, vất vả)", words: "苦い (nigai - vị đắng), 苦労 (kurō - khó nhọc, gian lao)" }
    ],
    dialogue: {
      situation: "Bạn học sinh Nhật và Việt Nam trò chuyện về trải nghiệm du lịch",
      lines: [
        { spk: "Kenta", text: "リンさんは、日本へ行ったことがありますか。" },
        { spk: "Linh", text: "いいえ、まだ行ったことがありません。でも、いつか日本のお城を見てみたいです。" },
        { spk: "Kenta", text: "姫路城は白くて本当に美しいですよ。ベトナムの料理は何がおすすめですか。" },
        { spk: "Linh", text: "フォーはもう食べましたか。" },
        { spk: "Kenta", text: "フォーは食べたことがありますが、ブンチャーはまだです。ぜひ食べてみたいですね！" }
      ]
    },
    culture: "日本のお城 (Lâu đài và thành quách Nhật Bản): Biểu tượng kiến trúc lịch sử độc đáo từ thời Chiến Quốc. Tiêu biểu là thành Himeji (姫路城 - được mệnh danh là 'Lâu đài Hạc trắng' vì tường trát vôi trắng tinh khôi), thành Matsumoto, thành Osaka. Mỗi lâu đài có cấu trúc tháp Tenshukaku (天守閣) kiên cố, hào nước sâu và tường đá Isigaki khổng lồ; cần tránh quan niệm rập khuôn rằng mọi lâu đài đều giống hệt nhau.",
    quiz: [
      {
        q: "Chọn câu diễn đạt: 'Tôi đã từng ngắm hoa anh đào ở Tokyo':",
        options: [
          "A. 東京で桜を見たことがあります。",
          "B. 東京で桜を見てみたいです。",
          "C. 東京で桜を見るでしょう。",
          "D. 東京で桜を見なければなりません。"
        ],
        a: 0,
        exp: "Diễn đạt kinh nghiệm trong quá khứ dùng cấu trúc: V(thể た) + ことがあります -> 見たことがあります."
      },
      {
        q: "Chữ Hán ghép từ 'Quan' và 'Quang' để chỉ 'Du lịch tham quan' là:",
        options: ["A. 観光", "B. 観察", "C. 光線", "D. 広場"],
        a: 0,
        exp: "観光 (Kankō) gồm chữ 観 (QUAN) và 光 (QUANG) mang nghĩa là du lịch tham quan."
      }
    ]
  },

  // BÀI 7
  {
    id: "bai-7",
    lessonNum: 7,
    title: "観光客への注意",
    romaji: "Kankōkyaku e no chūi",
    meaning: "Lưu ý dành cho khách du lịch",
    goal: "Hiểu và đưa ra các lời nhắc nhở, nội quy cấm đoán tại điểm tham quan; truyền đạt lại thông điệp bằng cách trích dẫn lời nói.",
    badge: "Nội quy & Trích dẫn",
    vocab: [
      { jp: "観光客", kana: "かんこうきゃく", romaji: "kankōkyaku", mean: "Khách du lịch", type: "Danh từ" },
      { jp: "注意", kana: "ちゅうい", romaji: "chūi", mean: "Chú ý, nhắc nhở", type: "Danh từ / Động từ" },
      { jp: "規則", kana: "きそく", romaji: "kisoku", mean: "Quy tắc, nội quy", type: "Danh từ" },
      { jp: "触る", kana: "さわる", romaji: "sawaru", mean: "Sờ, chạm tay vào", type: "Động từ" },
      { jp: "写真を撮る", kana: "しゃしんをとる", romaji: "shashin o toru", mean: "Chụp ảnh", type: "Cụm động từ" },
      { jp: "案内板", kana: "あんないばん", romaji: "annaiban", mean: "Bảng chỉ dẫn/nội quy", type: "Danh từ" },
      { jp: "大声", kana: "おおごえ", romaji: "ōgoe", mean: "Nói lớn tiếng, tiếng to", type: "Danh từ" },
      { jp: "ゴミを捨てる", kana: "ごみをすてる", romaji: "gomi o suteru", mean: "Vứt rác", type: "Cụm động từ" },
      { jp: "セール", kana: "せーる", romaji: "sēru", mean: "Đợt giảm giá (Sale)", type: "Danh từ" },
      { jp: "修学旅行", kana: "しゅうがくりょこう", romaji: "shūgaku ryokō", mean: "Chuyến du lịch học tập", type: "Danh từ" }
    ],
    grammar: {
      title: "1. Yêu cầu không làm gì: Vないでください / 2. Trích dẫn lời nói: 「…」と言いました",
      formula: "① V (thể ない) + でください (Xin vui lòng đừng làm V)\n② 「Nội dung trích dẫn」 + と言いました (Đã nói rằng '...')",
      usage: "Cấu trúc ① dùng để nhắc nhở, yêu cầu ai đó một cách lịch sự không được thực hiện một hành động nào đó (thường gặp ở biển báo bảo tàng, di tích). Cấu trúc ② dùng để thuật lại chính xác hoặc truyền đạt lại nội dung thông báo, lời nhắc nhở của người khác.",
      examples: [
        "展示品に手を触らないでください。(Xin đừng chạm tay vào đồ vật trưng bày.)",
        "ここでフラッシュを使って写真を撮らないでください。(Xin đừng bật đèn flash khi chụp ảnh tại đây.)",
        "係の人は「今、2階の店でセールをしています」と言いました。(Nhân viên đã thông báo rằng: 'Hiện nay cửa hàng tầng hai đang có đợt giảm giá'.)",
        "先生は「静かに歩いてください」と言いました。(Thầy giáo đã nhắc nhở rằng: 'Xin hãy đi lại nhẹ nhàng trật tự'.)"
      ],
      rules: "Động từ thể ない: Nhóm 1 chuyển hàng い sang hàng あ + ない (書く -> 書かない); Nhóm 2 bỏ ます + ない (食べる -> 食べない); Nhóm 3: くる -> こない, する -> しない."
    },
    kanji: [
      { char: "分", on: "ブン・フン・ブ", kun: "わ・ける / わ・かる", mean: "PHÂN (phần, phút, hiểu)", words: "分かる (wakaru - hiểu), 半分 (hanbun - một nửa), 10分 (juppun - 10 phút)" },
      { char: "半", on: "ハン", kun: "なか・ば", mean: "BÁN (một nửa)", words: "半分 (hanbun - một nửa), 8時半 (hachijihan - 8 giờ rưỡi), 半年 (hantoshi - nửa năm)" },
      { char: "意", on: "イ", kun: "-", mean: "Ý (ý nghĩa, ý kiến)", words: "意見 (iken - ý kiến), 意味 (imi - ý nghĩa), 注意 (chūi - chú ý)" },
      { char: "品", on: "ヒン", kun: "しな", mean: "PHẨM (sản phẩm, vật phẩm)", words: "作品 (sakuhin - tác phẩm), お土産品 (omiyagehin - quà lưu niệm), 商品 (shōhin - hàng hóa)" },
      { char: "注", on: "チュウ", kun: "そそ・ぐ", mean: "CHÚ (rót, chú ý)", words: "注意 (chūi - chú ý), 注文 (chūmon - gọi món/đặt hàng), 注目 (chūmoku - chú mục/quan tâm)" }
    ],
    dialogue: {
      situation: "Hướng dẫn viên nhắc nhở học sinh trong chuyến tham quan bảo tàng",
      lines: [
        { spk: "Hướng dẫn viên", text: "皆さん、館内では大声で話さないでください。" },
        { spk: "Học sinh", text: "写真を撮ってもいいですか。" },
        { spk: "Hướng dẫn viên", text: "写真は撮ってもいいですが、貴重な品物に触らないでくださいね。" },
        { spk: "Học sinh", text: "はい、分かりました！気をつけて見学します。" }
      ]
    },
    culture: "修学旅行 (Shūgaku ryokō - Chuyến đi trải nghiệm/du lịch học tập): Hoạt động giáo dục truyền thống lâu đời của trường học Nhật Bản. Học sinh cấp 2 thường đi Kyoto, Nara hoặc Tokyo từ 3-4 ngày theo nhóm (Han), tự tìm hiểu văn hóa lịch sử, học cách đi xe công cộng và chấp hành nghiêm kỷ luật tập thể.",
    quiz: [
      {
        q: "Chọn câu nhắc nhở khách tham quan: 'Xin đừng vứt rác ở đây':",
        options: [
          "A. ここにゴミを捨ててください。",
          "B. ここにゴミを捨てないでください。",
          "C. ここにゴミを捨てることがあります。",
          "D. ここにゴミを捨てたいです。"
        ],
        a: 1,
        exp: "Mẫu câu yêu cầu lịch sự không làm việc gì: V(thể ない) + でください -> 捨てないでください."
      },
      {
        q: "Chữ Hán '半' trong từ '半分' (hanbun) mang ý nghĩa gì?",
        options: ["A. Một phần ba", "B. Một nửa", "C. Toàn bộ", "D. Gấp đôi"],
        a: 1,
        exp: "'半' (BÁN) có nghĩa là một nửa, ví dụ '半分' là một nửa, '8時半' là 8 giờ rưỡi."
      }
    ]
  },

  // ふくしゅう 2 — ÔN TẬP 2 (BÀI 5–7)
  {
    id: "on-tap-2",
    isReview: true,
    badge: "ÔN TẬP 2",
    title: "ふくしゅう 2 (Bài 5 – 7)",
    romaji: "Fukushū ni",
    meaning: "Củng cố tổng hợp kiến thức Bài 5 đến Bài 7",
    summary: "Hệ thống hóa năng lực chỉ đường, kể trải nghiệm du lịch và lưu ý nội quy tại điểm tham quan: Mẫu câu Vてください (chỉ dẫn hướng đi); ～から (nêu căn cứ lí do an toàn); Vたことがあります (kể kinh nghiệm từng trải); Vてみたいです (ước muốn thử nghiệm); Vないでください (yêu cầu không làm gì); 「…」と言いました (trích dẫn lời nói, thông báo).",
    quiz: [
      {
        q: "Khi chỉ đường: 'Đến ngã tư thứ hai thì rẽ sang phải', câu tiếng Nhật chuẩn là:",
        options: [
          "A. 2つ目の交差点を右に曲がってください。",
          "B. 2つ目の交差点に右を曲がってください。",
          "C. 2つ目の交差点で右へ曲がりません。",
          "D. 2つ目の交差点から右に行きたいです。"
        ],
        a: 0,
        exp: "[Mốc qua] を [Hướng] に曲がってください -> 2つ目の交差点を右に曲がってください."
      },
      {
        q: "Câu nào dưới đây thể hiện mong muốn được thử leo núi Phú Sĩ?",
        options: [
          "A. 富士山に登ったことがあります。",
          "B. 富士山に登ってみたいです。",
          "C. 富士山に登らないでください。",
          "D. 富士山に登るでしょう。"
        ],
        a: 1,
        exp: "Mong muốn thử làm việc gì: V(thể て) + みたいです -> 登ってみたいです."
      },
      {
        q: "Để truyền đạt lại: 'Thầy giáo đã nói rằng bài thi rất khó', ta dùng mẫu câu nào?",
        options: [
          "A. 先生は「テストは難しいです」と言いました。",
          "B. 先生は「テストは難しいです」と聞きました。",
          "C. 先生は「テストは難しいです」と書きました。",
          "D. 先生は「テストは難しいです」と話しません。"
        ],
        a: 0,
        exp: "Trích dẫn lời nói của ai đó: 「...」と言いました."
      },
      {
        q: "Chữ Hán '屋' trong từ '本屋' mang âm Hán Việt là gì?",
        options: ["A. DỊCH", "B. QUAN", "C. ỐC", "D. BỘ"],
        a: 2,
        exp: "'屋' có âm Hán Việt là ỐC (chỉ cửa hàng, căn nhà, như 本屋 - tiệm sách, 部屋 - căn phòng)."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { lessonsPart1 };
}
