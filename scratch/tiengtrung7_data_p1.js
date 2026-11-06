// Dữ liệu Tiếng Trung Quốc 7 - Phần 1: Chủ điểm 1 & Chủ điểm 2
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const themesPart1 = [
  // CHỦ ĐIỂM 1
  {
    themeId: "theme-1",
    themeNum: 1,
    title: "Chủ điểm 1: 我们的社团",
    subtitle: "Câu lạc bộ / Cộng đồng của chúng ta",
    badge: "Sở thích & Hợp tác nhóm",
    lessons: [
      // Bài 1
      {
        id: "bai-1",
        num: 1,
        title: "第1课：我喜欢看中文短视频",
        pinyin: "Dì yī kè: Wǒ xǐhuan kàn Zhōngwén duǎn shìpín",
        vnTitle: "Tôi thích xem video ngắn tiếng Trung",
        goal: "Nói về nội dung video ngắn yêu thích; trao đổi việc luyện nghe/nói tiếng Trung, đưa lời khuyên học tập với 应该/不应该 và hiểu con số lớn trong lượt xem (万/亿).",
        vocab: [
          { zh: "中文短视频", py: "Zhōngwén duǎn shìpín", vn: "Video ngắn tiếng Trung", type: "Danh từ" },
          { zh: "舞蹈", py: "wǔdǎo", vn: "Múa, khiêu vũ", type: "Danh từ" },
          { zh: "音乐", py: "yīnyuè", vn: "Âm nhạc", type: "Danh từ" },
          { zh: "知识", py: "zhīshi", vn: "Kiến thức, tri thức", type: "Danh từ" },
          { zh: "听力", py: "tīnglì", vn: "Kĩ năng nghe", type: "Danh từ" },
          { zh: "口语", py: "kǒuyǔ", vn: "Kĩ năng nói, khẩu ngữ", type: "Danh từ" },
          { zh: "练习", py: "liànxí", vn: "Luyện tập, bài tập", type: "Động từ/Danh từ" },
          { zh: "应该", py: "yīnggāi", vn: "Nên (làm gì)", type: "Động từ năng nguyện" },
          { zh: "不应该", py: "bù yīnggāi", vn: "Không nên", type: "Cụm phó từ" },
          { zh: "有意思", py: "yǒu yìsi", vn: "Thú vị, có ý nghĩa", type: "Tính từ" }
        ],
        grammar: {
          title: "Số lớn với 万 (wàn), 亿 (yì) & Động từ năng nguyện 应该 / 不应该",
          formula: "1. Đơn vị số lớn: 万 (10.000), 十万 (100.000), 百万 (1.000.000), 千万 (10.000.000), 亿 (100.000.000)\n2. Khuyên nhủ: Chủ ngữ + 应该 / 不应该 + Động từ",
          usage: "Tiếng Trung đọc số theo từng nhóm 4 chữ số (vạn, ức), khác với tiếng Việt và tiếng Anh chia theo nhóm 3 chữ số (nghìn, triệu, tỉ). 应该/不应该 đặt trước động từ chính để đưa ra lời khuyên chân thành.",
          examples: [
            "这个中文短视频的播放量有三万零五百次。(Lượt xem của video ngắn tiếng Trung này là 30.500 lần.)",
            "你应该每天练习听力和口语。(Bạn nên luyện nghe và nói mỗi ngày.)",
            "我们不应该看手机视频太长时间。(Chúng ta không nên xem video trên điện thoại quá lâu.)"
          ]
        },
        dialogue: {
          situation: "Hai bạn cùng thảo luận về cách học tiếng Trung qua mạng xã hội",
          lines: [
            { spk: "Minh", text: "王芳，你平时在网上喜欢看什么视频？" },
            { spk: "Vương Phương", text: "我喜欢看中文短视频，特别是教中文口语和中国传统舞蹈的视频。" },
            { spk: "Minh", text: "看这些视频对学习汉语有帮助吗？" },
            { spk: "Vương Phương", text: "很有帮助！你应该每天看十几分钟，这样听力会越来越好。" }
          ]
        },
        quiz: [
          {
            q: "Con số '30.500' trong tiếng Trung được đọc chuẩn xác là:",
            options: ["A. 三万零五百", "B. 三十千五百", "C. 三千零五十", "D. 三万五"],
            a: 0,
            exp: "30.500 = 3 vạn (三万) + lẻ 0 (零) + 5 trăm (五百) -> 三万零五百."
          },
          {
            q: "Chọn từ điền vào chỗ trống: '为了学好口语，你 (____) 多跟中国朋友交流。'",
            options: ["A. 应该", "B. 不应该", "C. 没有", "D. 极了"],
            a: 0,
            exp: "Đưa ra lời khuyên tích cực để nói tốt: 应该 (nên) nhiều chuyện trò cùng bạn bè."
          }
        ]
      },

      // Bài 2
      {
        id: "bai-2",
        num: 2,
        title: "第2课：我喜欢在家里过生日",
        pinyin: "Dì èr kè: Wǒ xǐhuan zài jiālǐ guò shēngrì",
        vnTitle: "Tôi thích tổ chức sinh nhật ở nhà",
        goal: "Mô tả việc chuẩn bị sinh nhật, thời lượng làm một việc với bổ ngữ thời lượng, tặng quà và chúc mừng.",
        vocab: [
          { zh: "过生日", py: "guò shēngrì", vn: "Đón / Tổ chức sinh nhật", type: "Động từ" },
          { zh: "生日蛋糕", py: "shēngrì dàngāo", vn: "Bánh sinh nhật", type: "Danh từ" },
          { zh: "许愿", py: "xǔyuàn", vn: "Ước nguyện, cầu nguyện", type: "Động từ" },
          { zh: "吹蜡烛", py: "chuī làzhú", vn: "Thổi nến", type: "Cụm động từ" },
          { zh: "礼物", py: "lǐwù", vn: "Món quà", type: "Danh từ" },
          { zh: "送给", py: "sònggěi", vn: "Tặng cho", type: "Động từ" },
          { zh: "多长时间", py: "duō cháng shíjiān", vn: "Bao lâu (thời lượng)", type: "Đại từ nghi vấn" },
          { zh: "分钟", py: "fēnzhōng", vn: "Phút", type: "Lượng từ thời gian" },
          { zh: "小时", py: "xiǎoshí", vn: "Tiếng đồng hồ, giờ", type: "Danh từ thời gian" },
          { zh: "大家", py: "dàjiā", vn: "Mọi người", type: "Đại từ" }
        ],
        grammar: {
          title: "Bổ ngữ thời lượng (时量补语)",
          formula: "1. V + O + V + 了 + Khoảng thời gian\n2. V + 了 + Khoảng thời gian + (的) + Danh từ",
          usage: "Dùng để diễn tả một hành động đã diễn ra và kéo dài trong bao lâu. Khi động từ có tân ngữ mang theo, ta có thể lặp lại động từ hoặc đặt thời lượng trước danh từ.",
          examples: [
            "我写汉字写了二十分钟。(Tôi đã viết chữ Hán trong suốt 20 phút.)",
            "妈妈做了两个小时的生日蛋糕。(Mẹ đã làm bánh sinh nhật trong 2 tiếng đồng hồ.)",
            "昨天你们在家里玩了多长时间？(Hôm qua các bạn đã chơi ở nhà bao lâu?)"
          ]
        },
        dialogue: {
          situation: "Kể về bữa tiệc sinh nhật ấm cúng tại nhà",
          lines: [
            { spk: "Lan", text: "大卫，你昨天过生日过得怎么样？" },
            { spk: "David", text: "非常开心！我和朋友们一起吹蜡烛、吃蛋糕，玩了三个小时。" },
            { spk: "Lan", text: "你收到了什么生日礼物？" },
            { spk: "David", text: "朋友们送给我一本非常漂亮的中文画册。" }
          ]
        },
        quiz: [
          {
            q: "Chọn câu có bổ ngữ thời lượng đúng ngữ pháp:",
            options: [
              "A. 我学汉语学了两个小时。",
              "B. 我学了汉语两个小时学。",
              "C. 我两个小时学汉语了。",
              "D. 我学汉语两个小时了学。"
            ],
            a: 0,
            exp: "Cấu trúc lặp động từ: V (学) + O (汉语) + V (学) + 了 + thời lượng (两个小时)."
          },
          {
            q: "Để hỏi 'Bạn đã đọc sách trong bao lâu?', cụm từ để hỏi là:",
            options: ["A. 什么时候", "B. 几点", "C. 多长时间", "D. 哪儿"],
            a: 2,
            exp: "Hỏi về khoảng thời gian kéo dài (bao lâu) dùng '多长时间'."
          }
        ]
      },

      // Bài 3
      {
        id: "bai-3",
        num: 3,
        title: "第3课：我们还要跟她们合作",
        pinyin: "Dì sān kè: Wǒmen hái yào gēn tāmen hézuò",
        vnTitle: "Chúng ta còn phải hợp tác với các bạn ấy",
        goal: "Trình bày cách chuẩn bị tiết mục nhóm, cấu trúc nhấn mạnh 都……了, học thuộc lời thoại và hợp tác tích cực.",
        vocab: [
          { zh: "小组", py: "xiǎozǔ", vn: "Tổ, nhóm học tập", type: "Danh từ" },
          { zh: "合作", py: "hézuò", vn: "Hợp tác, phối hợp", type: "Động từ/Danh từ" },
          { zh: "排练", py: "páiliàn", vn: "Tập dượt, khớp kịch bản", type: "Động từ" },
          { zh: "表演", py: "biǎoyǎn", vn: "Biểu diễn", type: "Động từ/Danh từ" },
          { zh: "台词", py: "táicí", vn: "Lời thoại nhân vật", type: "Danh từ" },
          { zh: "背", py: "bèi", vn: "Học thuộc lòng", type: "Động từ" },
          { zh: "熟", py: "shú", vn: "Thuộc, nhuần nhuyễn", type: "Tính từ" },
          { zh: "表情", py: "biǎoqíng", vn: "Biểu cảm khuôn mặt", type: "Danh từ" },
          { zh: "准备", py: "zhǔnbèi", vn: "Chuẩn bị", type: "Động từ" },
          { zh: "问题", py: "wèntí", vn: "Vấn đề, câu hỏi", type: "Danh từ" }
        ],
        grammar: {
          title: "Cấu trúc nhấn mạnh 都……了 (Đã... rồi) & Cụm định ngữ có 的",
          formula: "1. 都 + Thời gian / Tình huống + 了 (Nhấn mạnh thời gian đã trễ/tình huống đã diễn ra)\n2. Định ngữ (Thời gian / Hành động) + 的 + Trung tâm ngữ",
          usage: "都……了 mang sắc thái cảm thán hoặc nhắc nhở hành động cần khẩn trương. Cụm định ngữ với 的 dùng để bổ nghĩa chi tiết cho danh từ phía sau.",
          examples: [
            "都星期五了，我们的戏剧台词还没背熟呢。(Đã thứ Sáu rồi mà lời thoại kịch của chúng mình vẫn chưa thuộc đấy.)",
            "我背了两天的台词，现在完全记住了。(Tôi đã học lời thoại trong 2 ngày, giờ đã nhớ hoàn toàn.)",
            "表演时的表情非常自然。(Biểu cảm lúc diễn xuất rất tự nhiên.)"
          ]
        },
        dialogue: {
          situation: "Phân công và tập dượt cho buổi diễn kịch văn nghệ",
          lines: [
            { spk: "Tiểu Lệ", text: "大家都准备好了吗？都八点半了，我们要开始排练了。" },
            { spk: "Hải", text: "我的台词已经背熟了，但是我们还要跟舞蹈小组合作。" },
            { spk: "Tiểu Lệ", text: "没问题，排练的时候大家多注意眼神和表情。" },
            { spk: "Hải", text: "好的，大家一起努力，演出一定很精彩！" }
          ]
        },
        quiz: [
          {
            q: "Điền từ vào câu nhấn mạnh: '都已经十一点 (____)，快去睡觉吧。'",
            options: ["A. 的", "B. 了", "C. 着", "D. 得"],
            a: 1,
            exp: "Cấu trúc nhấn mạnh thời gian: 都……了 (Đã 11 giờ rồi, mau đi ngủ thôi)."
          },
          {
            q: "Cụm từ 'Nét mặt lúc biểu diễn' diễn đạt bằng tiếng Trung là:",
            options: ["A. 表演时的表情", "B. 表情时的表演", "C. 表演的表情时", "D. 表情表演的"],
            a: 0,
            exp: "Định ngữ chỉ thời gian đứng trước '的' + trung tâm ngữ: 表演时的 (lúc biểu diễn) + 表情 (nét mặt)."
          }
        ]
      },

      // Ôn tập 1
      {
        id: "on-tap-1",
        num: 3.5,
        title: "复习一：回顾第1–3课",
        pinyin: "Fùxí yī: Huígù dì 1–3 kè",
        vnTitle: "Ôn tập 1: Củng cố kiến thức Chủ điểm 1",
        isReview: true,
        summary: "Hệ thống hóa các chủ điểm: Đọc số lớn với 万 và 亿; lời khuyên 应该 / 不应该; bổ ngữ thời lượng (V + O + V + 了 + thời lượng); cấu trúc nhấn mạnh 都……了; cụm định ngữ có 的. Từ vựng câu lạc bộ, sinh nhật, chuẩn bị biểu diễn.",
        quiz: [
          {
            q: "Chọn câu diễn đạt đúng: 'Tôi đã nghe nhạc trong nửa tiếng':",
            options: [
              "A. 我听音乐听了半个小时。",
              "B. 我听了音乐半个小时听。",
              "C. 我听音乐半个小时了。",
              "D. 我半个小时听音乐了。"
            ],
            a: 0,
            exp: "Cấu trúc chuẩn: 我听音乐听了半个小时 (Lặp lại động từ 听)."
          },
          {
            q: "Từ '一亿' tương đương với bao nhiêu chữ số 0 sau số 1?",
            options: ["A. 100.000.000 (8 chữ số 0)", "B. 10.000.000 (7 chữ số 0)", "C. 1.000.000 (6 chữ số 0)", "D. 10.000 (4 chữ số 0)"],
            a: 0,
            exp: "一亿 (yí yì) = 100.000.000 (100 triệu trong tiếng Việt, có 8 chữ số 0)."
          }
        ]
      }
    ]
  },

  // CHỦ ĐIỂM 2
  {
    themeId: "theme-2",
    themeNum: 2,
    title: "Chủ điểm 2: 我们的文化遗产",
    subtitle: "Di sản văn hóa của chúng ta",
    badge: "Cảnh quan, Di sản & Nghệ thuật",
    lessons: [
      // Bài 5
      {
        id: "bai-5",
        num: 5,
        title: "第5课：下龙湾的风景太漂亮了",
        pinyin: "Dì wǔ kè: Xiàlóngwān de fēngjǐng tài piàoliang le",
        vnTitle: "Phong cảnh Vịnh Hạ Long đẹp quá",
        goal: "Miêu tả cảnh quan thiên nhiên và di sản thế giới; liên từ nối hai đặc điểm 又……又……; lượng từ 座 cho núi và số ước lượng.",
        vocab: [
          { zh: "风景", py: "fēngjǐng", vn: "Phong cảnh", type: "Danh từ" },
          { zh: "漂亮", py: "piàoliang", vn: "Đẹp đẽ, xinh đẹp", type: "Tính từ" },
          { zh: "下龙湾", py: "Xiàlóngwān", vn: "Vịnh Hạ Long", type: "Danh từ riêng" },
          { zh: "长城", py: "Chángchéng", vn: "Vạn Lý Trường Thành", type: "Danh từ riêng" },
          { zh: "世界遗产", py: "shìjiè yíchǎn", vn: "Di sản thế giới", type: "Danh từ" },
          { zh: "座", py: "zuò", vn: "Ngọn, tòa (lượng từ cho núi/công trình)", type: "Lượng từ" },
          { zh: "高 / 长", py: "gāo / cháng", vn: "Cao / Dài", type: "Tính từ" },
          { zh: "山 / 海", py: "shān / hǎi", vn: "Núi / Biển", type: "Danh từ" }
        ],
        grammar: {
          title: "Liên từ 又……又…… (Vừa... vừa...) & Số ước lượng",
          formula: "1. 又 + Tính từ 1 + 又 + Tính từ 2 (Nối hai đặc điểm song hành)\n2. Số ước lượng: 七八百 (700-800), 三四个 (3-4 cái), 几 + Lượng từ + Danh từ",
          usage: "Dùng 又……又…… để miêu tả hai đặc điểm tính chất cùng tốt hoặc cùng xấu của sự vật. Lượng từ 座 dùng cho các công trình đồ sộ, núi non hùng vĩ.",
          examples: [
            "下龙湾的山又高又美。(Núi ở Vịnh Hạ Long vừa cao vừa đẹp.)",
            "海上有七八百座大大小小的山。(Trên biển có khoảng bảy tám trăm ngọn núi lớn nhỏ.)",
            "万里长城又长又壮观。(Vạn Lý Trường Thành vừa dài vừa hùng vĩ.)"
          ]
        },
        dialogue: {
          situation: "Giới thiệu Vịnh Hạ Long cho du khách nước ngoài",
          lines: [
            { spk: "Hướng dẫn viên", text: "各位朋友，前面就是世界自然遗产下龙湾。" },
            { spk: "Du khách", text: "哇，这里的海水又绿又清，风景太漂亮了！" },
            { spk: "Hướng dẫn viên", text: "下龙湾有一千多座绿色的岛屿，像一幅巨大的山水画。" }
          ]
        },
        quiz: [
          {
            q: "Điền lượng từ phù hợp cho ngọn núi: '海上有两千 (____) 山。'",
            options: ["A. 个", "B. 座", "C. 本", "D. 棵"],
            a: 1,
            exp: "Lượng từ dùng cho núi non, cầu cống, công trình lớn là '座' (zuò)."
          },
          {
            q: "Mẫu câu nối hai đặc điểm 'vừa cao vừa đẹp' là:",
            options: ["A. 也高也漂亮", "B. 又高又漂亮", "C. 都高都漂亮", "D. 就高才漂亮"],
            a: 1,
            exp: "Cấu trúc '又 + tính từ + 又 + tính từ' biểu thị hai đặc tính song hành."
          }
        ]
      },

      // Bài 6
      {
        id: "bai-6",
        num: 6,
        title: "第6课：顺化是我们的古都",
        pinyin: "Dì liù kè: Shùnhuà shì wǒmen de gǔdū",
        vnTitle: "Huế là cố đô của chúng ta",
        goal: "Giới thiệu cố đô Huế và địa danh lịch sử; nói về phương tiện và thời gian di chuyển; phân biệt cặp phó từ 就 và 才.",
        vocab: [
          { zh: "古都", py: "gǔdū", vn: "Cố đô", type: "Danh từ" },
          { zh: "顺化", py: "Shùnhuà", vn: "Thành phố Huế", type: "Danh từ riêng" },
          { zh: "皇城", py: "Huángchéng", vn: "Đại nội, hoàng thành", type: "Danh từ" },
          { zh: "景点", py: "jǐngdiǎn", vn: "Điểm tham quan du lịch", type: "Danh từ" },
          { zh: "火车", py: "huǒchē", vn: "Tàu hỏa", type: "Danh từ" },
          { zh: "坐车", py: "zuò chē", vn: "Đi xe, ngồi xe", type: "Cụm động từ" },
          { zh: "到", py: "dào", vn: "Đến nơi", type: "Động từ" },
          { zh: "就", py: "jiù", vn: "Là, đã (nhanh/sớm hơn mong đợi)", type: "Phó từ" },
          { zh: "才", py: "cái", vn: "Mới (muộn/lâu hơn mong đợi)", type: "Phó từ" }
        ],
        grammar: {
          title: "Phân biệt phó từ 就 (sớm/nhanh) và 才 (muộn/lâu)",
          formula: "1. Thời gian ngắn / sớm: Khoảng thời gian + 就 + Động từ (坐十分钟车就到了)\n2. Thời gian dài / muộn: Khoảng thời gian + 才 + Động từ (坐了十几个小时火车才到)",
          usage: "就 diễn tả hành động diễn ra nhanh chóng, sớm, thuận lợi. 才 diễn tả hành động xảy ra muộn, tốn nhiều thời gian hoặc khó khăn hơn dự kiến.",
          examples: [
            "从这里去文庙，坐车十分钟就到了。(Từ đây đi Văn Miếu, đi xe 10 phút là tới rồi.)",
            "昨天火车晚点，我们晚上十点才到顺化。(Hôm qua tàu trễ chuyến, 10 giờ đêm chúng tôi mới đến Huế.)",
            "七点半上课，他七点就来了。(7 rưỡi vào học, cậu ấy 7 giờ đã đến rồi.)"
          ]
        },
        dialogue: {
          situation: "Hỏi đường và thời gian đi thăm Đại nội Huế",
          lines: [
            { spk: "Du khách", text: "请问，从这里去顺化皇城远不远？" },
            { spk: "Người dân", text: "不远，坐出租车五分钟就到了。" },
            { spk: "Du khách", text: "太好了！听说皇城非常古老而且壮观。" },
            { spk: "Người dân", text: "是的，顺化是越南著名的古都，值得好好参观！" }
          ]
        },
        quiz: [
          {
            q: "Điền phó từ biểu thị sự nhanh chóng: '学校很近，我走五分钟 (____) 到了。'",
            options: ["A. 才", "B. 就", "C. 还", "D. 又"],
            a: 1,
            exp: "Diễn tả việc diễn ra nhanh, thuận lợi (5 phút là tới): dùng '就'."
          },
          {
            q: "Điền phó từ biểu thị sự muộn màng: '你怎么十一点 (____) 来？大家都等急了。'",
            options: ["A. 就", "B. 才", "C. 都", "D. 极"],
            a: 1,
            exp: "Diễn tả việc xảy ra muộn hơn mong đợi (11 giờ mới tới): dùng '才'."
          }
        ]
      },

      // Bài 7
      {
        id: "bai-7",
        num: 7,
        title: "第7课：我喜欢越南的民间艺术",
        pinyin: "Dì qī kè: Wǒ xǐhuan Yuènán de mínjiān yìshù",
        vnTitle: "Tôi thích nghệ thuật dân gian Việt Nam",
        goal: "Nói về các loại hình nghệ thuật dân gian (múa rối nước, tranh Đông Hồ, quan họ); hành động đồng thời 一边……一边…… và phó từ mức độ 非常.",
        vocab: [
          { zh: "民间艺术", py: "mínjiān yìshù", vn: "Nghệ thuật dân gian", type: "Danh từ" },
          { zh: "水上木偶戏", py: "shuǐshàng mù'ǒuxì", vn: "Múa rối nước", type: "Danh từ" },
          { zh: "东胡画", py: "Dōnghú huà", vn: "Tranh Đông Hồ", type: "Danh từ riêng" },
          { zh: "官贺民歌", py: "Guānhè míngē", vn: "Dân ca Quan họ", type: "Danh từ" },
          { zh: "京剧", py: "jīngjù", vn: "Kinh kịch Trung Quốc", type: "Danh từ" },
          { zh: "演员", py: "yǎnyuán", vn: "Diễn viên", type: "Danh từ" },
          { zh: "唱歌", py: "chànggē", vn: "Ca hát", type: "Động từ" },
          { zh: "好听", py: "hǎotīng", vn: "Hay (âm thanh, giọng hát)", type: "Tính từ" },
          { zh: "非常", py: "fēicháng", vn: "Vô cùng, rất", type: "Phó từ mức độ" }
        ],
        grammar: {
          title: "Cấu trúc hành động đồng thời 一边……一边…… & Phó từ 非常",
          formula: "1. 一边 + Hành động 1 + 一边 + Hành động 2 (Vừa làm việc 1 vừa làm việc 2)\n2. 非常 + Tính từ / Tâm lí động từ (Rất, vô cùng)",
          usage: "Dùng để diễn tả hai hành động diễn ra song song cùng lúc do cùng một chủ thể thực hiện. 非常 đứng trước tính từ để nhấn mạnh mức độ cao.",
          examples: [
            "演员们一边表演一边唱歌。(Các diễn viên vừa biểu diễn vừa ca hát.)",
            "我喜欢一边喝茶一边欣赏民歌。(Tôi thích vừa uống trà vừa thưởng thức dân ca.)",
            "越南的水上木偶戏非常神奇，有几百年的历史了。(Múa rối nước Việt Nam rất kì diệu, đã có lịch sử hàng trăm năm.)"
          ]
        },
        dialogue: {
          situation: "Đi xem biểu diễn múa rối nước tại Nhà hát Thăng Long",
          lines: [
            { spk: "Mary", text: "你看，木偶在水上跳舞呢！真不可思议！" },
            { spk: "An", text: "是的，演员在水帘后面一边操纵木偶，一边配合音乐表演。" },
            { spk: "Mary", text: "音乐听起来非常有特色，我太喜欢这项民间艺术了！" }
          ]
        },
        quiz: [
          {
            q: "Điền liên từ diễn tả hai việc cùng lúc: '他喜欢 (____) 听音乐 (____) 做作业。'",
            options: [
              "A. 一边……一边……",
              "B. 又……又……",
              "C. 就……才……",
              "D. 应该……不应该……"
            ],
            a: 0,
            exp: "Nối hai hành động diễn ra đồng thời dùng '一边……一边……'."
          },
          {
            q: "Cụm từ nào chỉ 'Múa rối nước' trong tiếng Trung?",
            options: ["A. 京剧", "B. 官贺民歌", "C. 水上木偶戏", "D. 东胡画"],
            a: 2,
            exp: "水上木偶戏 (Thủy thượng mộc ngẫu hí) = Múa rối nước."
          }
        ]
      },

      // Ôn tập 2
      {
        id: "on-tap-2",
        num: 7.5,
        title: "复习二：回顾第5–7课",
        pinyin: "Fùxí èr: Huígù dì 5–7 kè",
        vnTitle: "Ôn tập 2: Củng cố kiến thức Chủ điểm 2",
        isReview: true,
        summary: "Hệ thống hóa các điểm ngôn ngữ: Liên từ 又……又……; lượng từ 座 và số ước lượng; phân biệt phó từ 就 và 才; cấu trúc hành động đồng thời 一边……一边……; phó từ nhấn mạnh 非常 và cảm thán 太……了. Từ vựng di sản thiên nhiên và nghệ thuật dân gian.",
        quiz: [
          {
            q: "Chọn câu diễn đạt đúng ngữ pháp:",
            options: [
              "A. 这座山又高又大。",
              "B. 这座山又高又大山。",
              "C. 这个山又高又座大。",
              "D. 这棵山又高又大。"
            ],
            a: 0,
            exp: "Lượng từ cho núi là 座, kết hợp với 又……又…… -> 这座山又高又大."
          },
          {
            q: "Từ '古都' có phiên âm chuẩn là:",
            options: ["A. gǔdū", "B. gǔdōu", "C. kǔdū", "D. gǔtū"],
            a: 0,
            exp: "古都 có phiên âm là 'gǔdū' nghĩa là cố đô."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { themesPart1 };
}
