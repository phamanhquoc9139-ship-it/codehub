const fs = require('fs');
const path = require('path');

// Toàn bộ 16 bài học chuẩn CTGDPT 2018 Ngoại ngữ 2 Tiếng Trung 6 (Kết nối tri thức)
const lessonsData = [
  // ================= CHỦ ĐIỂM 1 =================
  {
    id: 1,
    lessonNum: "Bài 1",
    themeId: 1,
    theme: "Chủ điểm 1: Cộng đồng của chúng ta (我们的社团)",
    titleCn: "教学楼前面有一个小花园",
    titlePy: "Jiàoxué lóu qiánmian yǒu yí gè xiǎo huāyuán",
    titleVn: "Phía trước tòa nhà học có một vườn hoa nhỏ",
    grammar: {
      title: "Cách dùng từ chỉ phương vị & Câu tồn tại (有 / 是 / 在)",
      rule: "1. Từ chỉ phương vị: 上 (trên), 下 (dưới), 前 (trước), 后 (sau), 里 (trong), 外 (ngoài), 中间 (giữa), 旁边 (bên cạnh).\n2. Câu tồn tại biểu thị nơi nào có cái gì:\n   - Nơi chốn / Phương vị từ + 有 + Danh từ: 墙上有一张地图。(Trên tường có một tấm bản đồ).\n   - Nơi chốn / Phương vị từ + 是 + Danh từ (xác định duy nhất): 教学楼后面是运动场。\n   - Đối tượng + 在 + Nơi chốn: 运动场在教学楼后面。(Sân vận động ở sau tòa nhà học)."
    },
    vocab: [
      { hanzi: "办公楼", pinyin: "bàngōnglóu", meaning: "tòa nhà văn phòng, khu hiệu bộ" },
      { hanzi: "图书馆", pinyin: "túshūguǎn", meaning: "thư viện trường học" },
      { hanzi: "运动场", pinyin: "yùndòngchǎng", meaning: "sân vận động, sân thể thao" },
      { hanzi: "食堂", pinyin: "shítáng", meaning: "nhà ăn, căng tin" },
      { hanzi: "前面", pinyin: "qiánmian", meaning: "phía trước, đằng trước" },
      { hanzi: "后面", pinyin: "hòumian", meaning: "phía sau, đằng sau" },
      { hanzi: "中间", pinyin: "zhōngjiān", meaning: "ở giữa, trung tâm" },
      { hanzi: "整齐", pinyin: "zhěngqí", meaning: "ngăn nắp, gọn gàng, trật tự" }
    ],
    sentences: [
      { hanzi: "墙上有一张地图。", pinyin: "Qiáng shàng yǒu yì zhāng dìtú.", meaning: "Trên tường có một tấm bản đồ." },
      { hanzi: "运动场在教学楼后面。", pinyin: "Yùndòngchǎng zài jiàoxué lóu hòumian.", meaning: "Sân vận động ở phía sau tòa nhà học." },
      { hanzi: "食堂很大，里面很整齐。", pinyin: "Shítáng hěn dà, lǐmian hěn zhěngqí.", meaning: "Nhà ăn rất lớn, bên trong rất ngăn nắp." }
    ],
    quizzes: [
      {
        q: "Chọn từ phương vị thích hợp điền vào chỗ trống: '书在桌子 ______。' (Sách ở trên bàn)",
        options: ["(Recommended) 上 (shàng)", "下 (xià)", "里 (lǐ)", "中间 (zhōngjiān)"],
        ans: 0,
        expl: "Vị trí 'trên bàn' trong tiếng Trung dùng '桌子上' (hoặc 桌子上边/面)."
      },
      {
        q: "Câu 'Sân vận động ở phía sau tòa nhà học' được dịch chuẩn xác là:",
        options: [
          "(Recommended) 运动场在教学楼后面。",
          "教学楼在运动场后面。",
          "运动场有教学楼后面。",
          "教学楼是运动场后面。"
        ],
        ans: 0,
        expl: "Cấu trúc Đối tượng + 在 + Nơi chốn + Phương vị từ: 运动场 + 在 + 教学楼 + 后面."
      }
    ]
  },
  {
    id: 2,
    lessonNum: "Bài 2",
    themeId: 1,
    theme: "Chủ điểm 1: Cộng đồng của chúng ta (我们的社团)",
    titleCn: "我做完作业会教你剪纸",
    titlePy: "Wǒ zuò wán zuòyè huì jiāo nǐ jiǎnzhǐ",
    titleVn: "Làm xong bài tập tớ sẽ dạy cậu cắt giấy",
    grammar: {
      title: "Bổ ngữ kết quả (到 / 完 / 好) & Năng nguyện 要",
      rule: "1. Bổ ngữ kết quả: Động từ + 到 / 完 / 好 biểu thị hành động đạt được mục đích, hoàn thành hoặc hoàn thành tốt đẹp.\n   - 我买到纸了。(Tôi mua được giấy rồi).\n   - 做完作业 (Làm xong bài tập).\n2. Thể phủ định và câu hỏi chính phản:\n   - 没有 + Động từ + Bổ ngữ kết quả: 我还没做完。(Tôi vẫn chưa làm xong).\n   - ...了没有?: 你做完作业了没有？(Cậu đã làm xong bài tập chưa?)\n3. Động từ năng nguyện 要 biểu thị mong muốn hoặc yêu cầu cần làm."
    },
    vocab: [
      { hanzi: "作业", pinyin: "zuòyè", meaning: "bài tập về nhà" },
      { hanzi: "剪纸", pinyin: "jiǎnzhǐ", meaning: "nghệ thuật cắt giấy, cắt giấy" },
      { hanzi: "邻居", pinyin: "línjū", meaning: "hàng xóm, láng giềng" },
      { hanzi: "踢足球", pinyin: "tī zúqiú", meaning: "đá bóng, đá banh" },
      { hanzi: "做完", pinyin: "zuò wán", meaning: "làm xong, hoàn thành" },
      { hanzi: "买到", pinyin: "mǎi dào", meaning: "mua được, sắm được" }
    ],
    sentences: [
      { hanzi: "我买到纸了。", pinyin: "Wǒ mǎi dào zhǐ le.", meaning: "Tôi mua được giấy rồi." },
      { hanzi: "你做完作业了没有？", pinyin: "Nǐ zuò wán zuòyè le méiyǒu?", meaning: "Cậu đã làm xong bài tập chưa?" },
      { hanzi: "我做完作业会教你剪纸。", pinyin: "Wǒ zuò wán zuòyè huì jiāo nǐ jiǎnzhǐ.", meaning: "Tớ làm xong bài tập sẽ dạy cậu cắt giấy." }
    ],
    quizzes: [
      {
        q: "Chọn câu hỏi chính phản đúng cho câu: 'Cậu đã làm xong bài tập chưa?'",
        options: [
          "(Recommended) 你做完作业了没有？",
          "你做完作业了不？",
          "你做作业完了吗？",
          "你没做完作业吗？"
        ],
        ans: 0,
        expl: "Câu hỏi chính phản của bổ ngữ kết quả dùng đuôi '...了没有?'."
      },
      {
        q: "Từ '剪纸' (jiǎnzhǐ) có nghĩa là gì?",
        options: ["(Recommended) Cắt giấy (nghệ thuật dân gian)", "Vẽ tranh", "Làm thơ", "Gấp hạc giấy"],
        ans: 0,
        expl: "剪纸 (jiǎnzhǐ) là nghệ thuật cắt giấy truyền thống."
      }
    ]
  },
  {
    id: 3,
    lessonNum: "Bài 3",
    themeId: 1,
    theme: "Chủ điểm 1: Cộng đồng của chúng ta (我们的社团)",
    titleCn: "我们要送上一份爱心",
    titlePy: "Wǒmen yào sòng shàng yí fèn àixīn",
    titleVn: "Chúng ta hãy gửi trao một tấm lòng nhân ái",
    grammar: {
      title: "Kết cấu Động từ + 上 & Trợ từ ngữ khí 吧",
      rule: "1. Động từ + 上 (送上, 爱上, 写上) biểu thị đạt đến kết quả, tiếp xúc hoặc hướng tới đối tượng tiếp nhận.\n   - 我们要送上一份爱心。(Chúng ta cần trao gửi một tấm lòng yêu thương).\n2. Trợ từ ngữ khí 吧 ở cuối câu cầu khiến, đề nghị thân mật, rủ rê: 我们去游泳吧！(Chúng mình cùng đi bơi đi!)."
    },
    vocab: [
      { hanzi: "捐赠", pinyin: "juānzèng", meaning: "quyên góp, ủng hộ thiện nguyện" },
      { hanzi: "爱心", pinyin: "àixīn", meaning: "lòng nhân ái, tình yêu thương" },
      { hanzi: "活动", pinyin: "huódòng", meaning: "hoạt động, sự kiện" },
      { hanzi: "意义", pinyin: "yìyì", meaning: "ý nghĩa, giá trị" },
      { hanzi: "困难", pinyin: "kùnnan", meaning: "khó khăn, trở ngại" },
      { hanzi: "游泳", pinyin: "yóuyǒng", meaning: "bơi lội" }
    ],
    sentences: [
      { hanzi: "我们要送上一份爱心。", pinyin: "Wǒmen yào sòng shàng yí fèn àixīn.", meaning: "Chúng ta cần trao gửi một tấm lòng yêu thương." },
      { hanzi: "我们去游泳吧！", pinyin: "Wǒmen qù yóuyǒng ba!", meaning: "Chúng mình cùng đi bơi đi!" },
      { hanzi: "这个活动很有意义。", pinyin: "Zhège huódòng hěn yǒu yìyì.", meaning: "Hoạt động này rất có ý nghĩa." }
    ],
    quizzes: [
      {
        q: "Điền trợ từ ngữ khí thích hợp để tạo câu rủ rê: '我们一起走______！'",
        options: ["(Recommended) 吧 (ba)", "吗 (ma)", "呢 (ne)", "了 (le)"],
        ans: 0,
        expl: "Trợ từ 吧 đặt cuối câu biểu thị sự đề nghị, rủ rê thân mật: 'Chúng mình cùng đi thôi!'."
      },
      {
        q: "Cụm từ '送上一份爱心' có nghĩa là:",
        options: [
          "(Recommended) Gửi trao một tấm lòng nhân ái",
          "Nhận một món quà",
          "Mua một tấm thiệp",
          "Yêu thích thể thao"
        ],
        ans: 0,
        expl: "送上 = trao gửi, 爱心 = tấm lòng yêu thương/nhân ái."
      }
    ]
  },
  {
    id: 4,
    lessonNum: "Bài 4",
    themeId: 1,
    theme: "Chủ điểm 1: Cộng đồng của chúng ta (我们的社团)",
    titleCn: "复习一：社团生活与校园",
    titlePy: "Fùxí yī: Shètuán shēnghuó yǔ xiàoyuán",
    titleVn: "Ôn tập 1: Sinh hoạt câu lạc bộ & Khuôn viên trường học",
    grammar: {
      title: "Tổng hợp Ngữ pháp Chủ điểm 1: Phương vị, Bổ ngữ kết quả & Câu cầu khiến",
      rule: "1. Tổng kết hệ thống từ chỉ phương vị (上, 下, 前, 后, 里, 外, 中间, 旁边) và câu chỉ vị trí tồn tại: [Địa điểm] + 有/是/在 + [Đối tượng].\n2. Hệ thống hóa Bổ ngữ kết quả: [Động từ] + 到 / 完 / 好 (买到, 做完, 准备好).\n3. Câu rủ rê, đề nghị: [Chủ ngữ] + [Hành động] + 吧！\n4. Luyện tập khả năng diễn đạt tổng hợp về hoạt động câu lạc bộ và miêu tả khuôn viên nhà trường."
    },
    vocab: [
      { hanzi: "复习", pinyin: "fùxí", meaning: "ôn tập, ôn lại kiến thức" },
      { hanzi: "社团", pinyin: "shètuán", meaning: "câu lạc bộ, đoàn thể" },
      { hanzi: "校园", pinyin: "xiàoyuán", meaning: "khuôn viên trường học" },
      { hanzi: "旁边", pinyin: "pángbiān", meaning: "bên cạnh, bên lề" },
      { hanzi: "准备", pinyin: "zhǔnbèi", meaning: "chuẩn bị, sẵn sàng" },
      { hanzi: "做好", pinyin: "zuò hǎo", meaning: "làm xong xuôi, chuẩn bị tốt" },
      { hanzi: "参加", pinyin: "cānjiā", meaning: "tham gia, gia nhập" },
      { hanzi: "互相", pinyin: "hùxiāng", meaning: "lẫn nhau, cùng nhau" }
    ],
    sentences: [
      { hanzi: "我们在校园里参加了有意义的社团活动。", pinyin: "Wǒmen zài xiàoyuán lǐ cānjiā le yǒu yìyì de shètuán huódòng.", meaning: "Chúng tớ tham gia hoạt động câu lạc bộ rất có ý nghĩa trong khuôn viên trường." },
      { hanzi: "图书馆旁边是新建的体育馆。", pinyin: "Túshūguǎn pángbiān shì xīn jiàn de tǐyùguǎn.", meaning: "Bên cạnh thư viện là nhà thể thao mới xây." },
      { hanzi: "我们互相帮助，把作业做好了。", pinyin: "Wǒmen hùxiāng bāngzhù, bǎ zuòyè zuò hǎo le.", meaning: "Chúng mình giúp đỡ lẫn nhau, hoàn thành bài tập thật tốt rồi." }
    ],
    quizzes: [
      {
        q: "Điền từ thích hợp vào chỗ trống: '图书馆的 ______ 是一个大花园。' (Bên cạnh thư viện là một vườn hoa lớn)",
        options: ["(Recommended) 旁边 (pángbiān)", "中间 (zhōngjiān)", "里面 (lǐmian)", "上面 (shàngmian)"],
        ans: 0,
        expl: "旁边 (pángbiān) nghĩa là 'bên cạnh', phù hợp mô tả vị trí liền kề."
      },
      {
        q: "Chọn câu có bổ ngữ kết quả diễn đạt 'Tôi đã chuẩn bị bài tập xong xuôi rồi':",
        options: [
          "(Recommended) 我把作业准备好了。",
          "我准备作业在了。",
          "我作业好准备了。",
          "我准备作业吧。"
        ],
        ans: 0,
        expl: "Động từ + 好 (准备好) biểu thị sự hoàn thành chu đáo, hoàn tất."
      }
    ]
  },

  // ================= CHỦ ĐIỂM 2 =================
  {
    id: 5,
    lessonNum: "Bài 5",
    themeId: 2,
    theme: "Chủ điểm 2: Di sản của chúng ta (我们的文化遗产)",
    titleCn: "越南教师节",
    titlePy: "Yuènán Jiàoshī Jié",
    titleVn: "Ngày Nhà giáo Việt Nam",
    grammar: {
      title: "Phó từ 一起 (cùng nhau) & Phó từ 就 (liền, ngay)",
      rule: "1. Phó từ 一起 biểu thị cùng nhau thực hiện hành động:\n   - Cấu trúc: A 和 / 跟 B 一起 + Động từ: 明英和同学们一起学习中文。(Minh Anh cùng các bạn học tiếng Trung).\n2. Phó từ 就 biểu thị hành động diễn ra nối tiếp ngay sau một mốc thời gian hoặc hành động khác, hoặc dùng nhấn mạnh sự khẳng định:\n   - 那时候，我就给你们照相。(Lúc đó, cô/thầy sẽ chụp ảnh cho các em).\n3. Câu chúc mừng: 祝您 + [Ngày lễ] + 快乐！"
    },
    vocab: [
      { hanzi: "教师节", pinyin: "Jiàoshī Jié", meaning: "ngày Nhà giáo (20/11)" },
      { hanzi: "庆祝", pinyin: "qìngzhù", meaning: "chúc mừng, kỷ niệm" },
      { hanzi: "礼物", pinyin: "lǐwù", meaning: "món quà, quà tặng" },
      { hanzi: "一束花", pinyin: "yí shù huā", meaning: "một bó hoa tươi" },
      { hanzi: "表演", pinyin: "biǎoyǎn", meaning: "biểu diễn, trình diễn" },
      { hanzi: "节目", pinyin: "jiémù", meaning: "tiết mục, chương trình" }
    ],
    sentences: [
      { hanzi: "明英和同学们一起学习中文。", pinyin: "Míngyīng hé tóngxuémen yìqǐ xuéxí Zhōngwén.", meaning: "Minh Anh cùng các bạn học tiếng Trung." },
      { hanzi: "那时候，我就给你们照相。", pinyin: "Nà shíhou, wǒ jiù gěi nǐmen zhào xiàng.", meaning: "Lúc đó, cô/thầy sẽ chụp ảnh cho các em." },
      { hanzi: "祝您教师节快乐！", pinyin: "Zhù nín Jiàoshī Jié kuàilè!", meaning: "Chúc thầy/cô ngày Nhà giáo vui vẻ!" }
    ],
    quizzes: [
      {
        q: "Chọn cấu trúc chuẩn biểu thị 'Tôi cùng bạn bè học tập':",
        options: [
          "(Recommended) 我和朋友一起学习。",
          "我和朋友学习一起。",
          "我一起和朋友学习。",
          "我和一起朋友学习。"
        ],
        ans: 0,
        expl: "Cấu trúc chuẩn: A 和 B 一起 + Động từ."
      },
      {
        q: "Câu chúc '祝您教师节快乐！' thường được nói vào ngày nào ở Việt Nam?",
        options: ["(Recommended) Ngày 20 tháng 11", "Ngày 8 tháng 3", "Ngày 1 tháng 6", "Ngày Tết Nguyên đán"],
        ans: 0,
        expl: "Ngày Nhà giáo Việt Nam là ngày 20/11."
      }
    ]
  },
  {
    id: 6,
    lessonNum: "Bài 6",
    themeId: 2,
    theme: "Chủ điểm 2: Di sản của chúng ta (我们的文化遗产)",
    titleCn: "你喜欢什么节日",
    titlePy: "Nǐ xǐhuan shénme jiérì",
    titleVn: "Cậu thích ngày lễ nào?",
    grammar: {
      title: "Cấu trúc so sánh ngang bằng (跟……一样) & Khoảng cách (离)",
      rule: "1. Cấu trúc so sánh ngang bằng:\n   - Khẳng định: A 跟 B 一样 (+ Tính từ): 这个月饼跟那个月饼一样大。(Cái bánh này to bằng cái bánh kia).\n   - Phủ định: A 跟 B 不一样 (+ Tính từ): 我跟他不一样，我喜欢水果。(Tôi không giống cậu ấy, tôi thích hoa quả).\n2. Biểu thị khoảng cách: Địa điểm A + 离 + Địa điểm B + [Khoảng cách]: 商店离这儿一公里。(Cửa hàng cách đây 1 km)."
    },
    vocab: [
      { hanzi: "节日", pinyin: "jiérì", meaning: "ngày lễ, ngày tết" },
      { hanzi: "中秋节", pinyin: "Zhōngqiū Jié", meaning: "tết Trung thu (Rằm tháng 8)" },
      { hanzi: "月饼", pinyin: "yuèbing", meaning: "bánh Trung thu" },
      { hanzi: "热闹", pinyin: "rènao", meaning: "náo nhiệt, nhộn nhịp" },
      { hanzi: "圣诞节", pinyin: "Shèngdàn Jié", meaning: "lễ Giáng sinh (Noel)" },
      { hanzi: "巧克力", pinyin: "qiǎokèlì", meaning: "kẹo sô-cô-la" },
      { hanzi: "公里", pinyin: "gōnglǐ", meaning: "ki-lô-mét (km)" }
    ],
    sentences: [
      { hanzi: "这个月饼跟那个月饼一样大。", pinyin: "Zhège yuèbing gēn nàge yuèbing yíyàng dà.", meaning: "Cái bánh Trung thu này to bằng cái bánh Trung thu kia." },
      { hanzi: "我跟他不一样，我喜欢水果。", pinyin: "Wǒ gēn tā bù yíyàng, wǒ xǐhuan shuǐguǒ.", meaning: "Tôi không giống cậu ấy, tôi thích hoa quả." },
      { hanzi: "商店离这儿一公里。", pinyin: "Shāngdiàn lí zhèr yì gōnglǐ.", meaning: "Cửa hàng cách đây một cây số." }
    ],
    quizzes: [
      {
        q: "Điền từ thích hợp vào câu so sánh bằng: '我的爱好 ______ 他的爱好一样。'",
        options: ["(Recommended) 跟 (gēn)", "比 (bǐ)", "有 (yǒu)", "把 (bǎ)"],
        ans: 0,
        expl: "Cấu trúc so sánh bằng là 'A 跟 B 一样'."
      },
      {
        q: "Câu 'Trường học cách nhà tôi 2 km' được dịch là:",
        options: [
          "(Recommended) 学校离我家两公里。",
          "学校和我家两公里。",
          "学校往我家两公里。",
          "学校在两公里我家。"
        ],
        ans: 0,
        expl: "Biểu thị khoảng cách: A + 离 + B + Khoảng cách."
      }
    ]
  },
  {
    id: 7,
    lessonNum: "Bài 7",
    themeId: 2,
    theme: "Chủ điểm 2: Di sản của chúng ta (我们的文化遗产)",
    titleCn: "春节",
    titlePy: "Chūnjié",
    titleVn: "Tết Nguyên đán",
    grammar: {
      title: "Câu điều kiện giả thiết: 如果 / 要是 …… 的话，就 ……",
      rule: "1. Cấu trúc câu điều kiện giả thiết:\n   - Nếu / Giả sử: 如果 / 要是 …… (的话)，就 ……\n   - Ví dụ: 如果明天不下雨，我们就去河内看桃花。(Nếu ngày mai trời không mưa, chúng mình sẽ đi Hà Nội ngắm hoa đào).\n2. Từ vựng phong tục ngày Tết truyền thống phương Đông: gói bánh chưng (包粽子), chúc Tết (拜年), nhận lì xì (红包)."
    },
    vocab: [
      { hanzi: "春节", pinyin: "Chūnjié", meaning: "tết Nguyên đán, tết Âm lịch" },
      { hanzi: "包粽子", pinyin: "bāo zòngzi", meaning: "gói bánh chưng, bánh tét" },
      { hanzi: "桃花", pinyin: "táohuā", meaning: "hoa đào mùa xuân" },
      { hanzi: "大年初一", pinyin: "dànián chūyī", meaning: "mùng một Tết" },
      { hanzi: "红包", pinyin: "hóngbāo", meaning: "bao lì xì, tiền mừng tuổi" },
      { hanzi: "拜年", pinyin: "bài nián", meaning: "chúc Tết, thăm hỏi đầu năm" }
    ],
    sentences: [
      { hanzi: "如果明天不下雨，我们就去河内看桃花。", pinyin: "Rúguǒ míngtiān bú xià yǔ, wǒmen jiù qù Hénèi kàn táohuā.", meaning: "Nếu ngày mai trời không mưa, chúng mình sẽ đi Hà Nội ngắm hoa đào." },
      { hanzi: "除夕那天，全家一起包粽子。", pinyin: "Chúxī nà tiān, quánjiā yìqǐ bāo zòngzi.", meaning: "Hôm 30 Tết, cả nhà cùng nhau gói bánh chưng." },
      { hanzi: "大年初一，孩子们给爷爷奶奶拜年。", pinyin: "Dànián chūyī, háizimen gěi yéye nǎinai bài nián.", meaning: "Mùng 1 Tết, các bạn nhỏ chúc Tết ông bà." }
    ],
    quizzes: [
      {
        q: "Điền từ thích hợp vào câu giả thiết: '______ 天气好，我们 ______ 去公园。'",
        options: [
          "(Recommended) 要是 …… 就 ……",
          "虽然 …… 但是 ……",
          "因为 …… 所以 ……",
          "不但 …… 而且 ……"
        ],
        ans: 0,
        expl: "Cặp liên từ giả thiết: 要是……就…… (Nếu... thì...)."
      },
      {
        q: "Hoạt động '包粽子' (bāo zòngzi) có nghĩa là:",
        options: ["(Recommended) Gói bánh chưng", "Mua hoa đào", "Đi chúc Tết", "Phát lì xì"],
        ans: 0,
        expl: "包粽子 (bāo zòngzi) là gói bánh chưng/bánh tét dịp Tết."
      }
    ]
  },
  {
    id: 8,
    lessonNum: "Bài 8",
    themeId: 2,
    theme: "Chủ điểm 2: Di sản của chúng ta (我们的文化遗产)",
    titleCn: "复习二：传统节日与文化",
    titlePy: "Fùxí èr: Chuántǒng jiérì yǔ wénhuà",
    titleVn: "Ôn tập 2: Lễ hội truyền thống & Di sản văn hóa",
    grammar: {
      title: "Tổng hợp Ngữ pháp Chủ điểm 2: Cùng nhau (一起), So sánh bằng & Câu điều kiện",
      rule: "1. Tổng kết cấu trúc cùng thực hiện hành động: A 和/跟 B 一起 + Động từ.\n2. Tổng kết cấu trúc so sánh bằng và khác biệt: A 跟 B 一样 / 不一样 (+ Tính từ).\n3. Tổng kết cấu trúc điều kiện giả định: 如果 / 要是……(的话)，就……\n4. Hệ thống hóa từ vựng về các ngày lễ lớn: Tết Nhà giáo, Tết Trung thu, Tết Nguyên đán, phong tục chúc mừng và ẩm thực truyền thống."
    },
    vocab: [
      { hanzi: "传统", pinyin: "chuántǒng", meaning: "truyền thống" },
      { hanzi: "文化", pinyin: "wénhuà", meaning: "văn hóa" },
      { hanzi: "团圆", pinyin: "tuányuán", meaning: "đoàn viên, sum họp gia đình" },
      { hanzi: "庆祝", pinyin: "qìngzhù", meaning: "chúc mừng, chào mừng" },
      { hanzi: "拜年", pinyin: "bài nián", meaning: "chúc Tết đầu năm" },
      { hanzi: "相同", pinyin: "xiāngtóng", meaning: "giống nhau, tương đồng" },
      { hanzi: "精彩", pinyin: "jīngcǎi", meaning: "đặc sắc, xuất sắc" },
      { hanzi: "如果", pinyin: "rúguǒ", meaning: "nếu như, giả sử" }
    ],
    sentences: [
      { hanzi: "春节是越南和中国最重要的传统节日。", pinyin: "Chūnjié shì Yuènán hé Zhōngguó zuì zhòngyào de chuántǒng jiérì.", meaning: "Tết Nguyên đán là lễ hội truyền thống quan trọng nhất của Việt Nam và Trung Quốc." },
      { hanzi: "要是春节回家，我们全家就一起吃团圆饭。", pinyin: "Yàoshi Chūnjié huí jiā, wǒmen quánjiā jiù yìqǐ chī tuányuán fàn.", meaning: "Nếu Tết về nhà, cả gia đình chúng tớ sẽ cùng nhau ăn bữa cơm đoàn viên." },
      { hanzi: "这个节日的习俗跟那个节日一样丰富。", pinyin: "Zhège jiérì de xísú gēn nàge jiérì yíyàng fēngfù.", meaning: "Phong tục của ngày lễ này cũng phong phú như ngày lễ kia." }
    ],
    quizzes: [
      {
        q: "Chọn câu so sánh bằng chính xác theo ngữ pháp:",
        options: [
          "(Recommended) 这个月饼跟那个月饼一样大。",
          "这个月饼和那个月饼大一样。",
          "这个月饼比那个月饼一样大。",
          "这个月饼跟那个月饼大得很。"
        ],
        ans: 0,
        expl: "Cấu trúc chuẩn: A 跟 B 一样 + Tính từ."
      },
      {
        q: "Từ nào đồng nghĩa với '要是' trong câu điều kiện giả thiết?",
        options: ["(Recommended) 如果 (rúguǒ)", "虽然 (suīrán)", "因为 (yīnwèi)", "不但 (búdàn)"],
        ans: 0,
        expl: "如果 và 要是 đều mang nghĩa là 'nếu, nếu như'."
      }
    ]
  },

  // ================= CHỦ ĐIỂM 3 =================
  {
    id: 9,
    lessonNum: "Bài 9",
    themeId: 3,
    theme: "Chủ điểm 3: Thế giới của chúng ta (我们的世界)",
    titleCn: "踢足球还是下国际象棋",
    titlePy: "Tī zúqiú háishì xià guójì xiàngqí",
    titleVn: "Đá bóng hay chơi cờ vua",
    grammar: {
      title: "Câu hỏi lựa chọn (还是) & Động thái hành động liền kề (……了……就……)",
      rule: "1. Câu hỏi lựa chọn với 还是 (hay là): Dùng trong câu nghi vấn để yêu cầu người nghe chọn một trong hai phương án.\n   - Cấu trúc: A 还是 B ?\n   - Ví dụ: 你想踢足球还是下国际象棋？(Cậu muốn đá bóng hay là chơi cờ vua?)\n2. Cấu trúc biểu thị hai động tác diễn ra liên tiếp:\n   - Động từ 1 + 了 + ... + 就 + Động từ 2: 我们吃了饭就一起下国际象棋。(Chúng mình ăn cơm xong liền cùng nhau đánh cờ vua)."
    },
    vocab: [
      { hanzi: "游戏", pinyin: "yóuxì", meaning: "trò chơi, game" },
      { hanzi: "国际象棋", pinyin: "guójì xiàngqí", meaning: "cờ vua quốc tế" },
      { hanzi: "电子游戏", pinyin: "diànzǐ yóuxì", meaning: "trò chơi điện tử" },
      { hanzi: "影响", pinyin: "yǐngxiǎng", meaning: "ảnh hưởng, tác động" },
      { hanzi: "视力", pinyin: "shìlì", meaning: "thị lực, tầm nhìn" },
      { hanzi: "眼睛", pinyin: "yǎnjing", meaning: "đôi mắt" }
    ],
    sentences: [
      { hanzi: "你想踢足球还是下国际象棋？", pinyin: "Nǐ xiǎng tī zúqiú háishì xià guójì xiàngqí?", meaning: "Cậu muốn đá bóng hay chơi cờ vua?" },
      { hanzi: "长时间玩电子游戏会影响你的眼睛。", pinyin: "Cháng shíjiān wán diànzǐ yóuxì huì yǐngxiǎng nǐ de yǎnjing.", meaning: "Chơi trò chơi điện tử thời gian dài sẽ ảnh hưởng đến mắt của cậu." },
      { hanzi: "我们吃了饭就一起下国际象棋。", pinyin: "Wǒmen chī le fàn jiù yìqǐ xià guójì xiàngqí.", meaning: "Chúng mình ăn cơm xong liền cùng nhau đánh cờ vua." }
    ],
    quizzes: [
      {
        q: "Chọn từ điền vào câu hỏi lựa chọn: '你喝茶 ______ 喝咖啡？' (Cậu uống trà hay uống cà phê?)",
        options: ["(Recommended) 还是 (háishì)", "或者 (huòzhě)", "并且 (bìngqiě)", "而且 (érqiě)"],
        ans: 0,
        expl: "Trong câu hỏi lựa chọn, tiếng Trung bắt buộc dùng '还是'."
      },
      {
        q: "Ý nghĩa của cấu trúc '吃了饭就去' là:",
        options: [
          "(Recommended) Ăn cơm xong liền đi ngay",
          "Vừa ăn cơm vừa đi",
          "Chưa ăn cơm đã đi",
          "Không ăn cơm cũng đi"
        ],
        ans: 0,
        expl: "Động từ 1 + 了 + 就 + Động từ 2 biểu thị hành động 2 diễn ra ngay sau hành động 1."
      }
    ]
  },
  {
    id: 10,
    lessonNum: "Bài 10",
    themeId: 3,
    theme: "Chủ điểm 3: Thế giới của chúng ta (我们的世界)",
    titleCn: "运动的好处",
    titlePy: "Yùndòng de hǎochù",
    titleVn: "Lợi ích của thể thao",
    grammar: {
      title: "Đại từ 别人 (người khác), Số lượng 一些 & Nghi vấn 哪些",
      rule: "1. Đại từ 别人 chỉ người khác / người ngoài: 别人都去游泳了，我们也去游泳吧。(Mọi người đều đi bơi rồi, chúng mình cũng đi bơi đi).\n2. Từ chỉ số lượng không xác định 一些 (một vài, một số): 我买了一些水果。\n3. Đại từ nghi vấn 哪些 (những cái nào): 你会做哪些运动？(Cậu biết chơi những môn thể thao nào?)."
    },
    vocab: [
      { hanzi: "好处", pinyin: "hǎochù", meaning: "lợi ích, điểm tốt, tác dụng tích cực" },
      { hanzi: "跑步", pinyin: "pǎo bù", meaning: "chạy bộ rèn luyện sức bền" },
      { hanzi: "羽毛球", pinyin: "yǔmáoqiú", meaning: "môn cầu lông" },
      { hanzi: "乒乓球", pinyin: "pīngpāngqiú", meaning: "môn bóng bàn" },
      { hanzi: "合适", pinyin: "héshì", meaning: "phù hợp, thích hợp" },
      { hanzi: "锻炼身体", pinyin: "duànliàn shēntǐ", meaning: "rèn luyện thân thể, tập thể dục" }
    ],
    sentences: [
      { hanzi: "运动有很多好处。", pinyin: "Yùndòng yǒu hěn duō hǎochù.", meaning: "Tập thể thao có rất nhiều lợi ích." },
      { hanzi: "别人都去游泳了，我们也去游泳吧。", pinyin: "Biéren dōu qù yóuyǒng le, wǒmen yě qù yóuyǒng ba.", meaning: "Mọi người đều đi bơi rồi, chúng mình cũng đi bơi đi." },
      { hanzi: "你会做哪些运动？", pinyin: "Nǐ huì zuò nǎxiē yùndòng?", meaning: "Cậu biết chơi những môn thể thao nào?" }
    ],
    quizzes: [
      {
        q: "Điền đại từ nghi vấn hỏi về số nhiều: '你喜欢 ______ 运动？' (Cậu thích những môn thể thao nào?)",
        options: ["(Recommended) 哪些 (nǎxiē)", "哪个 (nǎge)", "哪里 (nǎlǐ)", "怎么 (zěnme)"],
        ans: 0,
        expl: "哪些 (nǎxiē) dùng để hỏi về danh sách các đối tượng (những cái nào)."
      },
      {
        q: "Từ '锻炼身体' (duànliàn shēntǐ) có nghĩa là:",
        options: [
          "(Recommended) Rèn luyện thân thể, tập thể thao",
          "Chữa bệnh cứu người",
          "Đi tham quan dã ngoại",
          "Ăn uống dinh dưỡng"
        ],
        ans: 0,
        expl: "锻炼身体 = rèn luyện thân thể, nâng cao sức khỏe."
      }
    ]
  },
  {
    id: 11,
    lessonNum: "Bài 11",
    themeId: 3,
    theme: "Chủ điểm 3: Thế giới của chúng ta (我们的世界)",
    titleCn: "学校运动会",
    titlePy: "Xuéxiào yùndònghuì",
    titleVn: "Đại hội thể dục thể thao trường học",
    grammar: {
      title: "Câu khuyên can (不要……了 / 别……了) & Phó từ chỉ mức độ cao nhất (最)",
      rule: "1. Câu khuyên ngăn, can ngăn:\n   - Đừng ... nữa: 不要 …… 了 / 别 …… 了\n   - Ví dụ: 你不要怕了，我明天跟你一起跑步。(Cậu đừng sợ nữa, ngày mai tớ chạy cùng cậu).\n2. Phó từ chỉ mức độ cao nhất:\n   - 最 + Tính từ / Động từ tâm lý (nhất):\n   - Ví dụ: 我最喜欢跑步。(Tớ thích chạy bộ nhất).\n3. Lời cổ vũ, khích lệ tinh thần: 我们一起努力，加油！(Chúng mình cùng nhau nỗ lực, cố lên!)."
    },
    vocab: [
      { hanzi: "运动会", pinyin: "yùndònghuì", meaning: "hội thao, đại hội thể thao trường" },
      { hanzi: "比赛", pinyin: "bǐsài", meaning: "cuộc thi, trận đấu, thi đấu" },
      { hanzi: "努力", pinyin: "nǔlì", meaning: "nỗ lực, cố gắng hết mình" },
      { hanzi: "加油", pinyin: "jiāyóu", meaning: "cố lên! nạp năng lượng" },
      { hanzi: "机会", pinyin: "jīhuì", meaning: "cơ hội, thời cơ" },
      { hanzi: "交流", pinyin: "jiāoliú", meaning: "giao lưu, trao đổi học hỏi" }
    ],
    sentences: [
      { hanzi: "你不要怕了，我明天跟你一起跑步。", pinyin: "Nǐ bú yào pà le, wǒ míngtiān gēn nǐ yìqǐ pǎo bù.", meaning: "Cậu đừng sợ nữa, ngày mai tớ chạy cùng cậu." },
      { hanzi: "我最喜欢跑步。", pinyin: "Wǒ zuì xǐhuan pǎo bù.", meaning: "Tớ thích chạy bộ nhất." },
      { hanzi: "我们一起努力，加油！", pinyin: "Wǒmen yìqǐ nǔlì, jiāyóu!", meaning: "Chúng mình cùng nhau cố gắng, cố lên!" }
    ],
    quizzes: [
      {
        q: "Điền phó từ biểu thị mức độ cao nhất: '在所有运动中，我 ______ 喜欢踢足球。'",
        options: ["(Recommended) 最 (zuì)", "很 (hěn)", "非常 (fēicháng)", "太 (tài)"],
        ans: 0,
        expl: "最 (zuì) mang nghĩa 'nhất', biểu thị mức độ tuyệt đối trong tập hợp so sánh."
      },
      {
        q: "Lời khuyên can 'Cậu đừng lo lắng nữa' dịch sang tiếng Trung là:",
        options: [
          "(Recommended) 你别担心了 / 你不要担心了。",
          "你很担心了。",
          "你担心最了。",
          "你没有担心了。"
        ],
        ans: 0,
        expl: "Cấu trúc khuyên ngăn: 别……了 hoặc 不要……了."
      }
    ]
  },
  {
    id: 12,
    lessonNum: "Bài 12",
    themeId: 3,
    theme: "Chủ điểm 3: Thế giới của chúng ta (我们的世界)",
    titleCn: "复习三：健康生活与体育",
    titlePy: "Fùxí sān: Jiànkāng shēnghuó yǔ tǐyù",
    titleVn: "Ôn tập 3: Nếp sống lành mạnh & Thể dục thể thao",
    grammar: {
      title: "Tổng hợp Ngữ pháp Chủ điểm 3: Câu hỏi lựa chọn, Khuyên can & Hành động nối tiếp",
      rule: "1. Tổng kết câu hỏi lựa chọn: A 还是 B ? (phân biệt với 或者 dùng trong câu trần thuật).\n2. Tổng kết hai hành động liên tiếp: Động từ 1 + 了 + 就 + Động từ 2.\n3. Cấu trúc khuyên can dừng hành động: 不要……了 / 别……了.\n4. Phó từ mức độ cao nhất: 最 + Tính từ/Tâm lý (最喜欢, 最好, 跑得最快).\n5. Ôn tập từ vựng các bộ môn thể thao và lợi ích của việc rèn luyện sức khỏe."
    },
    vocab: [
      { hanzi: "健康", pinyin: "jiànkāng", meaning: "sức khỏe, khỏe mạnh" },
      { hanzi: "习惯", pinyin: "xíguàn", meaning: "thói quen, tập quán" },
      { hanzi: "坚持", pinyin: "jiānchí", meaning: "kiên trì, bền bỉ" },
      { hanzi: "力量", pinyin: "lìliang", meaning: "sức mạnh, thể lực" },
      { hanzi: "冠军", pinyin: "guànjūn", meaning: "quán quân, vô địch" },
      { hanzi: "合作", pinyin: "hézuò", meaning: "hợp tác, phối hợp đồng đội" },
      { hanzi: "平时", pinyin: "píngshí", meaning: "ngày thường, bình thường" },
      { hanzi: "锻炼", pinyin: "duànliàn", meaning: "rèn luyện, tập luyện" }
    ],
    sentences: [
      { hanzi: "你喜欢打羽毛球还是踢足球？", pinyin: "Nǐ xǐhuan dǎ yǔmáoqiú háishì tī zúqiú?", meaning: "Cậu thích chơi cầu lông hay đá bóng?" },
      { hanzi: "我们下了课就一起去运动场锻炼身体。", pinyin: "Wǒmen xià le kè jiù yìqǐ qù yùndòngchǎng duànliàn shēntǐ.", meaning: "Tan học xong là chúng tớ liền cùng nhau ra sân vận động tập thể dục." },
      { hanzi: "坚持运动对身体健康有很大的好处。", pinyin: "Jiānchí yùndòng duì shēntǐ jiànkāng yǒu hěn dà de hǎochù.", meaning: "Kiên trì tập thể thao có lợi ích rất lớn đối với sức khỏe cơ thể." }
    ],
    quizzes: [
      {
        q: "Chọn liên từ thích hợp điền vào câu hỏi trần thuật lựa chọn: '周末你想去跑步 ______ 去打乒乓球？'",
        options: ["(Recommended) 还是 (háishì)", "因为 (yīnwèi)", "所以 (suǒyǐ)", "如果 (rúguǒ)"],
        ans: 0,
        expl: "Trong câu hỏi lựa chọn giữa hai phương án dùng '还是'."
      },
      {
        q: "Câu 'Tan học xong tớ liền về nhà' được dịch chuẩn xác là:",
        options: [
          "(Recommended) 我下了课就回家。",
          "我下课了回家就。",
          "我就下课了回家。",
          "我下课了和回家。"
        ],
        ans: 0,
        expl: "Cấu trúc Động từ 1 + 了 + 就 + Động từ 2: 下了课就回家."
      }
    ]
  },

  // ================= CHỦ ĐIỂM 4 =================
  {
    id: 13,
    lessonNum: "Bài 13",
    themeId: 4,
    theme: "Chủ điểm 4: Tầm nhìn của chúng ta (我们的未来)",
    titleCn: "你以后的房子是什么样的",
    titlePy: "Nǐ yǐhòu de fángzi shì shénme yàng de",
    titleVn: "Ngôi nhà tương lai của bạn như thế nào?",
    grammar: {
      title: "Cụm danh từ chữ 的 lược bỏ trung tâm ngữ & Động từ lặp lại (AA)",
      rule: "1. Cụm từ mang trợ từ kết cấu 的 lược bỏ danh từ trung tâm:\n   - Cấu trúc: Danh từ / Đại từ + 的 (đại diện cho vật sở hữu đã rõ ngữ cảnh).\n   - Ví dụ: 这个房间是我弟弟的 [房间]。(Căn phòng này là của em trai tớ).\n2. Hình thức lặp lại của động từ đơn âm tiết (AA):\n   - Biểu thị động tác diễn ra trong thời gian ngắn, thử làm hoặc giọng điệu nhẹ nhàng, lịch sự.\n   - Ví dụ: 看看 (xem xem), 听听 (nghe nghe), 问问 (hỏi thử).\n   - 我想在客厅里听听音乐。(Tớ muốn nghe chút âm nhạc ở phòng khách)."
    },
    vocab: [
      { hanzi: "以后", pinyin: "yǐhòu", meaning: "sau này, tương lai về sau" },
      { hanzi: "房子", pinyin: "fángzi", meaning: "ngôi nhà, căn nhà" },
      { hanzi: "客厅", pinyin: "kètīng", meaning: "phòng khách" },
      { hanzi: "书房", pinyin: "shūfáng", meaning: "phòng đọc sách, phòng làm việc" },
      { hanzi: "沙发", pinyin: "shāfā", meaning: "ghế sô-pha, ghế đệm êm" },
      { hanzi: "幸福", pinyin: "xìngfú", meaning: "hạnh phúc, an vui" }
    ],
    sentences: [
      { hanzi: "你看看，这是我以后的房子。", pinyin: "Nǐ kànkan, zhè shì wǒ yǐhòu de fángzi.", meaning: "Cậu xem xem, đây là ngôi nhà sau này của tớ." },
      { hanzi: "这个房间是我弟弟的。", pinyin: "Zhège fángjiān shì wǒ dìdi de.", meaning: "Căn phòng này là của em trai tớ." },
      { hanzi: "我想在客厅里听听音乐。", pinyin: "Wǒ xiǎng zài kètīng lǐ tīngting yīnyuè.", meaning: "Tớ muốn nghe chút âm nhạc ở phòng khách." }
    ],
    quizzes: [
      {
        q: "Trong câu '这本书是我的。', từ '我的' thực chất đã lược bỏ từ nào?",
        options: ["(Recommended) 书 (shū - cuốn sách)", "人 (rén)", "家 (jiā)", "买 (mǎi)"],
        ans: 0,
        expl: "Cụm '我的' là viết tắt của '我的书' (sách của tôi), lược bỏ trung tâm ngữ đã biết."
      },
      {
        q: "Hình thức động từ trùng điệp '听听' (tīngting) biểu thị ý nghĩa gì?",
        options: [
          "(Recommended) Nghe một chút, nghe thử (thư giãn nhẹ nhàng)",
          "Bắt buộc phải nghe",
          "Nghe liên tục không ngừng",
          "Không muốn nghe"
        ],
        ans: 0,
        expl: "Động từ trùng điệp AA biểu thị động tác ngắn, thư thái, thử nghiệm."
      }
    ]
  },
  {
    id: 14,
    lessonNum: "Bài 14",
    themeId: 4,
    theme: "Chủ điểm 4: Tầm nhìn của chúng ta (我们的未来)",
    titleCn: "我们的梦想",
    titlePy: "Wǒmen de mèngxiǎng",
    titleVn: "Ước mơ của chúng ta",
    grammar: {
      title: "Liên từ tăng tiến (不但……，而且……) & Liên từ nhượng bộ (虽然……，但是……)",
      rule: "1. Cặp liên từ tăng tiến:\n   - Không những ..., mà còn ...: 不但 ……，而且 ……\n   - Ví dụ: 她不但漂亮，而且很聪明。(Cô ấy không những xinh đẹp mà còn rất thông minh).\n2. Cặp liên từ nhượng bộ chuyển ý:\n   - Tuy rằng ..., nhưng mà ...: 虽然 ……，但是 ……\n   - Ví dụ: 虽然太空旅行很辛苦，但是很有意思。(Tuy du hành vũ trụ rất vất vả, nhưng rất thú vị)."
    },
    vocab: [
      { hanzi: "梦想", pinyin: "mèngxiǎng", meaning: "ước mơ, hoài bão, khát vọng" },
      { hanzi: "汽车", pinyin: "qìchē", meaning: "xe ô tô" },
      { hanzi: "太空", pinyin: "tàikōng", meaning: "không gian vũ trụ" },
      { hanzi: "旅行", pinyin: "lǚxíng", meaning: "du lịch, khám phá thế giới" },
      { hanzi: "辛苦", pinyin: "xīnkǔ", meaning: "vất vả, cực nhọc, gian lao" },
      { hanzi: "开玩笑", pinyin: "kāi wánxiào", meaning: "nói đùa, bông đùa" }
    ],
    sentences: [
      { hanzi: "她不但漂亮，而且很聪明。", pinyin: "Tā búdàn piàoliang, érqiě hěn cōngming.", meaning: "Cô ấy không những xinh đẹp mà còn rất thông minh." },
      { hanzi: "虽然太空旅行很辛苦，但是很有意思。", pinyin: "Suīrán tàikōng lǚxíng hěn xīnkǔ, dànshì hěn yǒu yìsi.", meaning: "Tuy du hành vũ trụ rất vất vả, nhưng rất thú vị." },
      { hanzi: "虽然奶茶很好喝，但是很贵。", pinyin: "Suīrán nǎichá hěn hǎohē, dànshì hěn guì.", meaning: "Tuy trà sữa rất ngon nhưng lại rất đắt." }
    ],
    quizzes: [
      {
        q: "Điền cặp liên từ tăng tiến: '汉语 ______ 有用，______ 很有趣。'",
        options: [
          "(Recommended) 不但 …… 而且 ……",
          "虽然 …… 但是 ……",
          "因为 …… 所以 ……",
          "如果 …… 就 ……"
        ],
        ans: 0,
        expl: "Cặp liên từ tăng tiến '不但……而且……' có nghĩa là 'không những... mà còn...'."
      },
      {
        q: "Cặp từ '虽然……但是……' dùng để biểu thị quan hệ ngữ pháp nào?",
        options: ["(Recommended) Nhượng bộ - Chuyển ý (Tuy... nhưng...)", "Nguyên nhân - Kết quả", "Điều kiện - Giả thiết", "Lựa chọn"],
        ans: 0,
        expl: "虽然……但是…… biểu thị sự nhượng bộ và chuyển tiếp ý tương phản."
      }
    ]
  },
  {
    id: 15,
    lessonNum: "Bài 15",
    themeId: 4,
    theme: "Chủ điểm 4: Tầm nhìn của chúng ta (我们的未来)",
    titleCn: "你以后想做什么工作",
    titlePy: "Nǐ yǐhòu xiǎng zuò shénme gōngzuò",
    titleVn: "Sau này cậu muốn làm công việc gì?",
    grammar: {
      title: "Bổ ngữ trạng thái mức độ (Tính từ + 得很) & Cảm thán (Tính từ + 极了)",
      rule: "1. Bổ ngữ mức độ Tính từ + 得很: Biểu thị tính chất hoặc trạng thái đạt mức độ rất cao.\n   - Ví dụ: 医生的工作辛苦得很。(Công việc của bác sĩ vất vả lắm / vất vả cực kỳ).\n2. Cấu trúc cảm thán biểu thị mức độ tột cùng: Tính từ + 极了 (Cực kỳ, vô cùng):\n   - Ví dụ: 这个颜色好看极了。(Màu sắc này đẹp cực kỳ).\n3. Câu hỏi về nguyện vọng nghề nghiệp: 长大以后你想做什么工作？(Lớn lên sau này cậu muốn làm nghề gì?)."
    },
    vocab: [
      { hanzi: "工作", pinyin: "gōngzuò", meaning: "công việc, làm việc" },
      { hanzi: "医生", pinyin: "yīshēng", meaning: "bác sĩ, thầy thuốc" },
      { hanzi: "老师", pinyin: "lǎoshī", meaning: "giáo viên, thầy cô giáo" },
      { hanzi: "看病", pinyin: "kàn bìng", meaning: "khám bệnh, chữa bệnh" },
      { hanzi: "帮助", pinyin: "bāngzhù", meaning: "giúp đỡ, tương trợ" },
      { hanzi: "成为", pinyin: "chéngwéi", meaning: "trở thành, biến thành" }
    ],
    sentences: [
      { hanzi: "医生的工作辛苦得很。", pinyin: "Yīshēng de gōngzuò xīnkǔ dehěn.", meaning: "Công việc của bác sĩ vất vả lắm." },
      { hanzi: "这个颜色好看极了。", pinyin: "Zhège yánsè hǎokàn jí le.", meaning: "Màu sắc này đẹp cực kỳ." },
      { hanzi: "长大以后你想做什么工作？", pinyin: "Zhǎngdà yǐhòu nǐ xiǎng zuò shénme gōngzuò?", meaning: "Lớn lên sau này cậu muốn làm nghề gì?" }
    ],
    quizzes: [
      {
        q: "Điền kết cấu mức độ biểu thị 'vui mừng vô cùng': '听说要去旅行，他高兴 ______。'",
        options: ["(Recommended) 极了 (jí le)", "很 (hěn)", "非常 (fēicháng)", "不大 (bú dà)"],
        ans: 0,
        expl: "Cấu trúc Tính từ + 极了 (高兴极了) biểu thị mức độ cao tột bậc."
      },
      {
        q: "Câu 'Tôi muốn trở thành một bác sĩ giỏi để giúp đỡ người khác' dịch chuẩn là:",
        options: [
          "(Recommended) 我想成为一名好医生帮助别人。",
          "我想做医生成为好看极了。",
          "我成为医生辛苦得很。",
          "我是医生和别人帮助。"
        ],
        ans: 0,
        expl: "Cấu trúc: 想成为 + Danh từ nghề nghiệp + Động từ mục đích."
      }
    ]
  },
  {
    id: 16,
    lessonNum: "Bài 16",
    themeId: 4,
    theme: "Chủ điểm 4: Tầm nhìn của chúng ta (我们的未来)",
    titleCn: "复习四：美好未来与人生理想",
    titlePy: "Fùxí sì: Měihǎo wèilái yǔ rénshēng lǐxiǎng",
    titleVn: "Ôn tập 4: Tương lai tươi đẹp & Lý tưởng cuộc đời",
    grammar: {
      title: "Tổng kết Toàn diện Chương trình Tiếng Trung 6 (4 Chủ điểm • 16 Bài học)",
      rule: "1. Tổng kết cấu trúc cụm chữ 的 giản lược: Danh từ/Đại từ + 的.\n2. Tổng kết động từ lặp lại AA: 看看, 听听, 问问, 想想.\n3. Tổng kết cặp liên từ tăng tiến (不但……而且……) và nhượng bộ (虽然……但是……).\n4. Tổng kết bổ ngữ mức độ: Tính từ + 得很 / Tính từ + 极了.\n5. Tự tin giao tiếp và ứng dụng toàn diện 16 bài học tiếng Trung lớp 6 vào thực tế đời sống và học tập."
    },
    vocab: [
      { hanzi: "理想", pinyin: "lǐxiǎng", meaning: "lý tưởng, hoài bão tương lai" },
      { hanzi: "未来", pinyin: "wèilái", meaning: "tương lai, mai sau" },
      { hanzi: "工程师", pinyin: "gōngchéngshī", meaning: "kỹ sư công nghệ / xây dựng" },
      { hanzi: "科学家", pinyin: "kēxuéjiā", meaning: "nhà khoa học" },
      { hanzi: "实现", pinyin: "shíxiàn", meaning: "hiện thực hóa, đạt được" },
      { hanzi: "精彩", pinyin: "jīngcǎi", meaning: "tuyệt vời, rực rỡ, xuất sắc" },
      { hanzi: "创造", pinyin: "chuàngzào", meaning: "sáng tạo, kiến tạo thế giới" },
      { hanzi: "飞翔", pinyin: "fēixiáng", meaning: "bay lượn, vươn cao vươn xa" }
    ],
    sentences: [
      { hanzi: "他不但学习刻苦，而且乐于帮助别人。", pinyin: "Tā búdàn xuéxí kèkǔ, érqiě lèyú bāngzhù biéren.", meaning: "Bạn ấy không những học hành chăm chỉ, mà còn thích giúp đỡ người khác." },
      { hanzi: "虽然追求梦想很不容易，但是我们从不放弃。", pinyin: "Suīrán zhuīqiú mèngxiǎng hěn bù róngyì, dànshì wǒmen cóng bù fàngqì.", meaning: "Tuy theo đuổi ước mơ không hề dễ dàng, nhưng chúng tớ không bao giờ bỏ cuộc." },
      { hanzi: "我们未来的生活一定会美好极了！", pinyin: "Wǒmen wèilái de shēnghuó yídìng huì měihǎo jí le!", meaning: "Cuộc sống tương lai của chúng ta nhất định sẽ tuyệt vời vô cùng!" }
    ],
    quizzes: [
      {
        q: "Chọn câu diễn đạt cảm thán mức độ cao nhất cho 'Cuộc sống tương lai đẹp tuyệt vời':",
        options: [
          "(Recommended) 未来的生活美好极了！",
          "未来的生活虽然美好。",
          "未来的生活不但美好。",
          "未来的生活美好吗？"
        ],
        ans: 0,
        expl: "Tính từ + 极了 (美好极了) biểu thị cảm thán mức độ tột cùng."
      },
      {
        q: "Điền cặp liên từ thích hợp: '______ 学习很辛苦，______ 我觉得很有意义。'",
        options: [
          "(Recommended) 虽然 …… 但是 ……",
          "因为 …… 所以 ……",
          "不但 …… 而且 ……",
          "如果 …… 就 ……"
        ],
        ans: 0,
        expl: "Cặp liên từ nhượng bộ '虽然……但是……' (Tuy... nhưng...)."
      }
    ]
  }
];

// Hàm tạo Sơ đồ tư duy Vector SVG cho từng bài học (đủ 16 bài)
function generateChineseUnitSVG(lessonId) {
  const styles = [
    { bg: "#e11d48", grad: ["#e11d48", "#be123c"], tag: "VỊ TRÍ & TỒN TẠI", sub: "方 位 词 与 存 在 句" },
    { bg: "#2563eb", grad: ["#2563eb", "#1d4ed8"], tag: "BỔ NGỮ KẾT QUẢ", sub: "动 词 + 到 / 完 / 好" },
    { bg: "#059669", grad: ["#059669", "#047857"], tag: "YÊU THƯƠNG & 吧", sub: "动 词 + 上 与 祈 使 句" },
    { bg: "#7c3aed", grad: ["#7c3aed", "#5b21b6"], tag: "ÔN TẬP CHỦ ĐIỂM 1", sub: "社 团 生 活 与 综 合 运 用" },
    { bg: "#d97706", grad: ["#d97706", "#b45309"], tag: "CÙNG NHAU & 就", sub: "副 词 一 起 与 就" },
    { bg: "#6366f1", grad: ["#6366f1", "#4338ca"], tag: "SO SÁNH BẰNG", sub: "跟 …… 一 样 / 不 一 样" },
    { bg: "#dc2626", grad: ["#dc2626", "#991b1b"], tag: "ĐIỀU KIỆN NẾU", sub: "如 果 / 要 是 …… 就 ……" },
    { bg: "#0891b2", grad: ["#0891b2", "#0e7490"], tag: "ÔN TẬP CHỦ ĐIỂM 2", sub: "传 统 节 日 与 文 化 遗 产" },
    { bg: "#0284c7", grad: ["#0284c7", "#0369a1"], tag: "LỰA CHỌN & 了...就...", sub: "还 是 与 动 态 承 接" },
    { bg: "#16a34a", grad: ["#16a34a", "#15803d"], tag: "LỢI ÍCH & 哪些", sub: "代 词 别 人 与 哪 些" },
    { bg: "#ea580c", grad: ["#ea580c", "#c2410c"], tag: "KHUYÊN CAN & 最", sub: "不 要 …… 了 与 最 高 级" },
    { bg: "#0d9488", grad: ["#0d9488", "#0f766e"], tag: "ÔN TẬP CHỦ ĐIỂM 3", sub: "健 康 生 活 与 体 育 运 动" },
    { bg: "#4f46e5", grad: ["#4f46e5", "#3730a3"], tag: "CỤM CHỮ 的 & LẶP ĐỘNG TỪ", sub: "助 词 的 与 动 词 重 叠 AA" },
    { bg: "#be185d", grad: ["#be185d", "#9d174d"], tag: "TĂNG TIẾN & NHƯỢNG BỘ", sub: "不 但 …… 而 且 / 虽 然 …… 但 是" },
    { bg: "#b45309", grad: ["#b45309", "#78350f"], tag: "MỨC ĐỘ 得很 / 极了", sub: "程 度 补 语 与 感 叹 句" },
    { bg: "#9333ea", grad: ["#9333ea", "#6b21a8"], tag: "TỔNG KẾT TOÀN DIỆN 6", sub: "美 好 未 来 与 人 生 理 想" }
  ];
  const s = styles[(lessonId - 1) % styles.length];

  return `
    <svg viewBox="0 0 650 130" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="zh_g_${lessonId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${s.grad[0]}"/>
          <stop offset="100%" stop-color="${s.grad[1]}"/>
        </linearGradient>
      </defs>

      <!-- Node 1: Hanzi & Pinyin -->
      <rect x="15" y="20" width="185" height="90" rx="12" fill="url(#zh_g_${lessonId})" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="107" y="52" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle" font-family="'PingFang SC','Microsoft YaHei',sans-serif">BÀI HỌC CỐT LÕI</text>
      <text x="107" y="74" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">${s.tag}</text>
      <text x="107" y="93" fill="#e2e8f0" font-size="10" text-anchor="middle">${s.sub}</text>

      <!-- Connection Arrow 1 -> 2 -->
      <path d="M 200 65 L 240 65" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/>
      <polygon points="242,65 234,60 234,70" fill="#94a3b8"/>

      <!-- Node 2: Core Grammar & Structure -->
      <rect x="245" y="20" width="185" height="90" rx="12" fill="#ffffff" stroke="${s.bg}" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
      <text x="337" y="48" fill="${s.bg}" font-size="13" font-weight="bold" text-anchor="middle">NGỮ PHÁP TRỌNG TÂM</text>
      <text x="337" y="70" fill="#334155" font-size="11" font-weight="600" text-anchor="middle">Quy tắc & Cấu trúc mẫu</text>
      <text x="337" y="90" fill="#64748b" font-size="10" text-anchor="middle">Web Speech API phát âm</text>

      <!-- Connection Arrow 2 -> 3 -->
      <path d="M 430 65 L 470 65" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/>
      <polygon points="472,65 464,60 464,70" fill="#94a3b8"/>

      <!-- Node 3: Communication & Practice -->
      <rect x="475" y="20" width="160" height="90" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))"/>
      <text x="555" y="48" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">VẬN DỤNG GIAO TIẾP</text>
      <text x="555" y="70" fill="#059669" font-size="11" font-weight="bold" text-anchor="middle">Trắc nghiệm & Hội thoại</text>
      <text x="555" y="90" fill="#64748b" font-size="10" text-anchor="middle">Trạng Nguyên (60:00)</text>
    </svg>
  `;
}

module.exports = { lessonsData, generateChineseUnitSVG };
console.log('Tiếng Trung 6 lessonsData (Đủ 16 bài học) ready.');
