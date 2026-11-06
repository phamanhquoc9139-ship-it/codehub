// Data for Tiếng Trung Quốc 10 - Ngoại ngữ 1 (Bộ Kết nối tri thức với cuộc sống)
// 4 Chủ điểm, 10 Bài học, 4 Bài Ôn tập, 29 Cấu trúc ngữ pháp tra cứu

const topics = [
  {
    id: 1,
    title_cn: "我们的生活",
    title_vi: "Cuộc sống của chúng ta",
    desc: "Kì nghỉ hè, bãi biển, hoạt động giải trí, cân bằng giữa học và nghỉ ngơi, khoảng cách thế hệ và giao tiếp gia đình.",
    badge: "Chủ điểm 1",
    icon: "fa-umbrella-beach",
    color: "from-rose-600 to-amber-600"
  },
  {
    id: 2,
    title_cn: "我们的社会",
    title_vi: "Xã hội của chúng ta",
    desc: "Trí tuệ IQ và trí tuệ cảm xúc EQ, tâm lí cảm xúc, phương pháp học tập tích cực, hoạt động ngoại khóa và tự tin.",
    badge: "Chủ điểm 2",
    icon: "fa-users",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 3,
    title_cn: "我们的环境",
    title_vi: "Môi trường của chúng ta",
    desc: "Bảo vệ môi trường tự nhiên, phân loại rác, tiết kiệm tài nguyên, chống ô nhiễm thông tin trên mạng và thực phẩm xanh.",
    badge: "Chủ điểm 3",
    icon: "fa-seedling",
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: 4,
    title_cn: "我们的未来",
    title_vi: "Tương lai của chúng ta",
    desc: "Thành phố tương lai, giao thông thông minh, quy luật cuộc sống, sức khỏe, thói quen sinh hoạt và tuổi thọ con người.",
    badge: "Chủ điểm 4",
    icon: "fa-city",
    color: "from-purple-600 to-pink-600"
  }
];

const lessons = {
  1: {
    num: 1,
    topicId: 1,
    title_cn: "快乐的假期",
    title_pinyin: "Kuàilè de jiàqī",
    title_vi: "Kì nghỉ vui vẻ",
    goals: [
      "Kể lại chi tiết về một chuyến đi nghỉ đã qua (nơi đến, phương tiện, chỗ ở, món ăn đặc sản).",
      "Hỏi và mô tả cảnh vật thiên nhiên (bình minh, bãi cát, bờ biển), cảm xúc và ấn tượng nổi bật.",
      "Sử dụng thành thạo cấu trúc liên từ '不但……还……' để bổ sung thông tin.",
      "Sử dụng giới từ '向' chỉ phương hướng của hành động và phó từ '特别' để nhấn mạnh mức độ/sở thích."
    ],
    vocab: [
      { hz: "假期", py: "jiàqī", type: "danh từ", vn: "kì nghỉ, kì nghỉ lễ", eg: "这个假期你打算去哪儿？", eg_py: "Zhège jiàqī nǐ dǎsuàn qù nǎr?", eg_vn: "Kì nghỉ này bạn dự định đi đâu?" },
      { hz: "度假", py: "dùjià", type: "động từ", vn: "đi nghỉ dưỡng, nghỉ mát", eg: "我们全家去海边度假了。", eg_py: "Wǒmen quánjiā qù hǎibiān dùjià le.", eg_vn: "Cả nhà chúng tôi đã đi nghỉ mát ở bờ biển." },
      { hz: "度假村", py: "dùjiàcūn", type: "danh từ", vn: "khu nghỉ dưỡng, resort", eg: "那个度假村的环境非常优美。", eg_py: "Nàge dùjiàcūn de huánjìng fēicháng yōuměi.", eg_vn: "Khu nghỉ dưỡng đó môi trường rất đẹp." },
      { hz: "海边", py: "hǎibiān", type: "danh từ", vn: "bờ biển, ven biển", eg: "晚上在海边散步很舒服。", eg_py: "Wǎnshang zài hǎibiān sànbù hěn shūfu.", eg_vn: "Buổi tối đi dạo bờ biển rất dễ chịu." },
      { hz: "沙滩", py: "shātān", type: "danh từ", vn: "bãi cát", eg: "孩子们在沙滩上玩耍。", eg_py: "Háizimen zài shātān shang wánshuǎ.", eg_vn: "Bọn trẻ đang chơi đùa trên bãi cát." },
      { hz: "日出", py: "rìchū", type: "danh từ", vn: "bình minh, mặt trời mọc", eg: "早晨我们五点起来看日出。", eg_py: "Zǎochén wǒmen wǔ diǎn qǐlái kàn rìchū.", eg_vn: "Sáng sớm chúng tôi dậy lúc 5 giờ để ngắm bình minh." },
      { hz: "海鲜", py: "hǎixiān", type: "danh từ", vn: "hải sản", eg: "这里的海鲜不但新鲜，而且便宜。", eg_py: "Zhèlǐ de hǎixiān búdàn xīnxiān, érqiě piányi.", eg_vn: "Hải sản ở đây không những tươi mà còn rẻ." },
      { hz: "渔民", py: "yúmín", type: "danh từ", vn: "ngư dân", eg: "清晨渔民们满载而归。", eg_py: "Qīngchén yúmínmen mǎnzài ér guī.", eg_vn: "Sáng sớm các ngư dân trở về đầy thuyền cá tôm." },
      { hz: "市场", py: "shìchǎng", type: "danh từ", vn: "chợ, thị trường", eg: "我们去海鲜市场买了许多鱼虾。", eg_py: "Wǒmen qù hǎixiān shìchǎng mǎi le xǔduō yú xiā.", eg_vn: "Chúng tôi đến chợ hải sản mua rất nhiều cá tôm." },
      { hz: "星星", py: "xīngxing", type: "danh từ", vn: "ngôi sao", eg: "夜空中闪烁着无数的星星。", eg_py: "Yèkōng zhōng shǎnshuò zhe wúshù de xīngxing.", eg_vn: "Trên bầu trời đêm lấp lánh vô số vì sao." },
      { hz: "特别", py: "tèbié", type: "phó từ / tính từ", vn: "đặc biệt, rất", eg: "我特别喜欢听海浪的声音。", eg_py: "Wǒ tèbié xǐhuan tīng hǎilàng de shēngyīn.", eg_vn: "Tôi đặc biệt thích nghe tiếng sóng biển." },
      { hz: "向", py: "xiàng", type: "giới từ", vn: "hướng về, theo hướng", eg: "向东看就能看到大海。", eg_py: "Xiàng dōng kàn jiù néng kàndào dàhǎi.", eg_vn: "Nhìn về hướng đông là có thể thấy biển cả." }
    ],
    dialogue: {
      title: "谈论暑假旅行 (Nói về chuyến du lịch hè)",
      roles: ["明兰 (Minh Lan)", "王力 (Vương Lực)"],
      lines: [
        { role: "明兰", hz: "王力，听说你暑假去海边度假了，玩得怎么样？", py: "Wáng Lì, tīngshuō nǐ shǔjià qù hǎibiān dùjià le, wán de zěnmeyàng?", vn: "Vương Lực, nghe nói kì nghỉ hè bạn đi biển nghỉ mát, chơi thế nào?" },
        { role: "王力", hz: "太棒了！我们全家住在一个美丽的度假村，推开窗户就能看到大海。", py: "Tài bàng le! Wǒmen quánjiā zhù zài yí ge měilì de dùjiàcūn, tuīkāi chuānghu jiù néng kàndào dàhǎi.", vn: "Tuyệt lắm! Cả nhà tớ ở một khu nghỉ dưỡng rất đẹp, mở cửa sổ ra là nhìn thấy biển lớn." },
        { role: "明兰", hz: "那你们在海边做了哪些活动呢？", py: "Nà nǐmen zài hǎibiān zuò le nǎxiē huódòng ne?", vn: "Vậy các bạn đã làm những hoạt động gì ở bờ biển thế?" },
        { role: "王力", hz: "我们清晨向东走去看日出，下午在沙滩上晒太阳。那里的海鲜不但新鲜，还特别便宜！", py: "Wǒmen qīngchén xiàng dōng zǒu qù kàn rìchū, xiàwǔ zài shātān shang shài tàiyáng. Nàlǐ de hǎixiān búdàn xīnxiān, hái tèbié piányi!", vn: "Tụi mình sáng sớm đi về hướng đông ngắm bình minh, chiều nằm phơi nắng trên bãi cát. Hải sản ở đó không những tươi mà còn đặc biệt rẻ!" },
        { role: "明兰", hz: "真羡慕你！晚上海边的风景怎么样？", py: "Zhēn xiànmù nǐ! Wǎnshang hǎibiān de fēngjǐng zěnmeyàng?", vn: "Ghen tị với bạn thật đấy! Buổi tối phong cảnh bờ biển thế nào?" },
        { role: "王力", hz: "夜晚抬头能看到满天的星星，听着海浪声，我感觉所有的压力都没有了。明年暑假我还想再去一次！", py: "Yèwǎn táitóu néng kàndào mǎntiān de xīngxing, tīng zhe hǎilàng shēng, wǒ gǎnjué suǒyǒu de yālì dōu méiyǒu le. Míngnián shǔjià wǒ hái xiǎng zài qù yí cì!", vn: "Đêm ngẩng đầu lên là thấy đầy trời sao, nghe tiếng sóng vỗ, tớ cảm thấy mọi áp lực đều tan biến. Hè sang năm tớ vẫn muốn đi lần nữa!" }
      ],
      checkQuestion: {
        q: "王力在海边度假时觉得那里的海鲜怎么样？",
        options: ["不但新鲜，还特别便宜", "很贵但是非常好吃", "种类很少，不太新鲜", "味道一般，价格便宜"],
        ans: 0,
        exp: "Trong bài đối thoại, Vương Lực nói rõ: '那里的海鲜不但新鲜，还特别便宜！'"
      }
    },
    grammar: [
      {
        name: "Cấu trúc liên từ: 不但……还…… (Không những… mà còn…)",
        desc: "Dùng để liên kết hai vế câu đẳng lập nhằm bổ sung hoặc nâng cao mức độ thông tin. Vế sau nhấn mạnh hoặc bổ sung thêm đặc điểm, tính chất cho vế trước.",
        formula: "Chủ ngữ + 不但 + Vị ngữ 1, 还 + Vị ngữ 2\n(Nếu hai vế chung chủ ngữ, chủ ngữ đứng trước '不但')",
        examples: [
          { hz: "他不但会说汉语，还会说英语。", py: "Tā búdàn huì shuō Hànyǔ, hái huì shuō Yīngyǔ.", vn: "Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Anh." },
          { hz: "那里的水果不但新鲜，还特别甜。", py: "Nàlǐ de shuǐguǒ búdàn xīnxiān, hái tèbié tián.", vn: "Hoa quả ở đó không những tươi mà còn rất ngọt." }
        ],
        mistakeCheck: {
          wrong: "不但他会唱歌，还会跳舞。(Sai vị trí chủ ngữ khi cùng 1 chủ ngữ)",
          right: "他不但会唱歌，还会跳舞。(Chủ ngữ '他' phải đứng trước '不但')",
          note: "Chỉ khi hai vế có hai chủ ngữ khác nhau thì mới đặt '不但' trước chủ ngữ 1: '不但明兰喜欢海边，王力也喜欢。'"
        }
      },
      {
        name: "Giới từ chỉ phương hướng: 向 + Phương vị / Đối tượng + Động từ",
        desc: "Giới từ '向' (xiàng) biểu thị hướng di chuyển của hành động hoặc đối tượng mà hành động hướng tới (về phía, hướng tới).",
        formula: "向 + Danh từ phương hướng / Địa điểm / Người + Động từ",
        examples: [
          { hz: "向南走五分钟就到了。", py: "Xiàng nán zǒu wǔ fēnzhōng jiù dào le.", vn: "Đi về hướng nam năm phút là tới." },
          { hz: "清晨，我们向东望去，太阳正慢慢升起。", py: "Qīngchén, wǒmen xiàng dōng wàng qù, tàiyáng zhèng mànmàn shēngqǐ.", vn: "Sáng sớm, chúng tôi nhìn về hướng đông, mặt trời đang từ từ nhô lên." },
          { hz: "我们要虚心向老师和同学学习。", py: "Wǒmen yào xūxīn xiàng lǎoshī hé tóngxué xuéxí.", vn: "Chúng ta cần khiêm tốn học hỏi từ thầy cô và bạn bè." }
        ]
      },
      {
        name: "Phó từ mức độ: 特别 (Đặc biệt / Rất)",
        desc: "Phó từ '特别' (tèbié) đứng trước tính từ hoặc động từ tâm lí để biểu thị mức độ cao vượt trội, mang sắc thái nhấn mạnh sự yêu thích hoặc nét riêng biệt.",
        formula: "特别 + Tính từ / Động từ tâm lí (喜欢, 想要, 感谢...)",
        examples: [
          { hz: "我特别喜欢海边日出的景色。", py: "Wǒ tèbié xǐhuan hǎibiān rìchū de jǐngsè.", vn: "Tôi đặc biệt thích phong cảnh bình minh trên biển." },
          { hz: "这次旅行大家感到特别开心。", py: "Zhè cì lǚxíng dàjiā gǎndào tèbié kāixīn.", vn: "Chuyến du lịch lần này mọi người cảm thấy rất vui vẻ." }
        ]
      }
    ],
    skills: {
      listening: "Nghe đoạn ghi âm về chuyến đi của bạn học để nắm bắt 4 thông tin cốt lõi: Địa điểm đến (目的地), Phương tiện đi lại (交通工具), Chỗ ở (住宿), Món ăn đặc sản (特色美食).",
      speaking: "Luyện nói theo cặp: Một bạn đóng vai người vừa đi du lịch về, một bạn hỏi thăm. Vận dụng tối thiểu 3 câu có chứa '不但……还……', '向', '特别'.",
      reading: "Đọc hiểu đoạn văn ngắn (120 chữ) mô tả kì nghỉ tại thành phố biển Tam Á (Sanya) hoặc Đà Nẵng, trả lời các câu hỏi về cảm xúc và dự định tương lai.",
      writing: "Viết đoạn văn ngắn 5–7 câu kể lại kì nghỉ hè đáng nhớ nhất của em, có sử dụng trợ từ '了' biểu thị hành động đã hoàn thành."
    },
    culture: {
      title: "文化驿站: Chữ Hán '期' (Kì / Thời hạn) & Văn hóa nghỉ ngơi",
      content: "Chữ **期** (qī) gồm bộ '其' (kí - hài âm) và bộ '月' (nguyệt - chỉ thời gian, chu kì tuần trăng). Ban đầu chữ '期' có nghĩa là tròn một tháng hoặc một chu kì thời gian nhất định, sau này mở rộng thành 'kì hạn', 'kì vọng' (mong đợi tới ngày hẹn). Trong văn hóa hiện đại Trung Quốc, các kì nghỉ lớn như Quốc khánh (1/10) hay Tết Nguyên Đán được gọi là '黄金周' (Tuần lễ vàng), là dịp người dân cùng gia đình đi du lịch, về quê sum họp và nạp lại năng lượng cho cuộc sống."
    },
    quiz: [
      {
        q: "Chọn từ thích hợp điền vào chỗ trống: '海边的海鲜______新鲜，______便宜。'",
        options: ["不但……还……", "虽然……但是……", "因为……所以……", "如果……就……"],
        ans: 0,
        exp: "'不但……还……' dùng để bổ sung hai đặc điểm tích cực cùng lúc (vừa tươi vừa rẻ)."
      },
      {
        q: "Câu nào dưới đây sử dụng đúng giới từ '向'?",
        options: [
          "向南走两百米就是海鲜市场。",
          "走两百米向南就是海鲜市场。",
          "向在南走两百米是海鲜市场。",
          "南向走两百米就是海鲜市场。"
        ],
        ans: 0,
        exp: "Giới từ '向' kết hợp với từ chỉ phương hướng '南' đứng trước động từ '走': '向南走'."
      },
      {
        q: "Từ nào đồng nghĩa gần nhất với '特别' trong câu: '我特别喜欢看日出。'?",
        options: ["非常", "一般", "平常", "偶尔"],
        ans: 0,
        exp: "'特别' ở đây đóng vai trò phó từ chỉ mức độ cao, tương đương với '非常' (vô cùng, rất)."
      }
    ]
  },

  2: {
    num: 2,
    topicId: 1,
    title_cn: "劳逸结合",
    title_pinyin: "Láo yì jiéhé",
    title_vi: "Kết hợp học/làm và nghỉ ngơi",
    goals: [
      "Trao đổi về lịch học tập, kế hoạch ôn thi và các hoạt động giải trí lành mạnh.",
      "Nêu khó khăn trong học tập và đề xuất giải pháp, lời khuyên cho bạn bè.",
      "Nắm vững và vận dụng thành thạo Bổ ngữ khả năng (Động từ + 得/不 + Bổ ngữ kết quả/hướng).",
      "Sử dụng liên từ chuyển ý '不过', cấu trúc mục đích '为了' và phó từ tần suất '常常'."
    ],
    vocab: [
      { hz: "考试", py: "kǎoshì", type: "danh từ / động từ", vn: "kì thi; thi cử", eg: "下个星期我们就要期末考试了。", eg_py: "Xià ge xīngqī wǒmen jiù yào qīmò kǎoshì le.", eg_vn: "Tuần sau chúng tôi phải thi học kì rồi." },
      { hz: "复习", py: "fùxí", type: "động từ", vn: "ôn tập", eg: "每天晚上我都复习今天学的生词。", eg_py: "Měitiān wǎnshang wǒ dōu fùxí jīntiān xué de shēngcí.", eg_vn: "Mỗi tối tôi đều ôn lại từ mới học hôm nay." },
      { hz: "练习", py: "liànxí", type: "động từ / danh từ", vn: "luyện tập; bài tập", eg: "多做练习能提高听力水平。", eg_py: "Duō zuò liànxí néng tígāo tīnglì shuǐpíng.", eg_vn: "Làm nhiều bài tập có thể nâng cao trình độ nghe." },
      { hz: "交流", py: "jiāoliú", type: "động từ", vn: "giao lưu, trao đổi", eg: "多跟中国朋友交流对学汉语很有帮助。", eg_py: "Duō gēn Zhōngguó péngyou jiāoliú duì xué Hànyǔ hěn yǒu bāngzhù.", eg_vn: "Giao lưu nhiều với bạn Trung Quốc rất có ích cho việc học tiếng Trung." },
      { hz: "提高", py: "tígāo", type: "động từ", vn: "nâng cao, cải thiện", eg: "他的汉语水平提高得很快。", eg_py: "Tā de Hànyǔ shuǐpíng tígāo de hěn kuài.", eg_vn: "Trình độ tiếng Trung của anh ấy tiến bộ rất nhanh." },
      { hz: "水平", py: "shuǐpíng", type: "danh từ", vn: "trình độ, mức độ", eg: "我想提高自己的口语水平。", eg_py: "Wǒ xiǎng tígāo zìjǐ de kǒuyǔ shuǐpíng.", eg_vn: "Tôi muốn nâng cao trình độ khẩu ngữ của mình." },
      { hz: "娱乐", py: "yúlè", type: "danh từ / động từ", vn: "giải trí", eg: "学习之余，我们也需要适当的娱乐。", eg_py: "Xuéxí zhīyú, wǒmen yě xūyào shìdàng de yúlè.", eg_vn: "Sau giờ học tập, chúng ta cũng cần giải trí thích hợp." },
      { hz: "演唱会", py: "yǎnchànghuì", type: "danh từ", vn: "buổi biểu diễn ca nhạc, concert", eg: "周末有一场精彩的演唱会。", eg_py: "Zhōumò yǒu yì chǎng jīngcǎi de yǎnchànghuì.", eg_vn: "Cuối tuần có một buổi diễn ca nhạc đặc sắc." },
      { hz: "抢票", py: "qiǎng piào", type: "cụm động từ", vn: "săn vé, giành mua vé nhanh", eg: "大家都在网上抢周杰伦演唱会的门票。", eg_py: "Dàjiā dōu zài wǎngshang qiǎng Zhōu Jiélún yǎnchànghuì de ménpiào.", eg_vn: "Mọi người đều lên mạng săn vé concert của Châu Kiệt Luân." },
      { hz: "劳逸结合", py: "láo yì jiéhé", type: "thành ngữ", vn: "kết hợp lao động/học tập và nghỉ ngơi", eg: "学习要注意劳逸结合，不要太累。", eg_py: "Xuéxí yào zhùyì láo yì jiéhé, bú yào tài lèi.", eg_vn: "Học tập cần chú ý kết hợp làm và nghỉ ngơi, đừng quá mệt." },
      { hz: "常常", py: "chángcháng", type: "phó từ", vn: "thường xuyên, hay", eg: "他常常去图书馆看书。", eg_py: "Tā chángcháng qù túshūguǎn kànshū.", eg_vn: "Anh ấy thường xuyên đến thư viện đọc sách." },
      { hz: "为了", py: "wèile", type: "giới từ", vn: "để, nhằm mục đích", eg: "为了考好期末考试，他每天都努力复习。", eg_py: "Wèile kǎohǎo qīmò kǎoshì, tā měitiān dōu nǔlì fùxí.", eg_vn: "Để thi tốt kì thi học kì, ngày nào bạn ấy cũng chăm chỉ ôn tập." }
    ],
    dialogue: {
      title: "备考与放松 (Chuẩn bị thi và thư giãn)",
      roles: ["小华 (Tiểu Hoa)", "大卫 (David)"],
      lines: [
        { role: "小华", hz: "大卫，马上就要期末考试了，你复习得怎么样了？", py: "Dàwèi, mǎshàng jiù yào qīmò kǎoshì le, nǐ fùxí de zěnmeyàng le?", vn: "David, sắp thi học kì rồi, cậu ôn tập thế nào rồi?" },
        { role: "大卫", hz: "我每天都在背生词、做练习，不过生词太多了，我记不住。", py: "Wǒ měitiān dōu zài bèi shēngcí, zuò liànxí, búguò shēngcí tài duō le, wǒ jì bu zhù.", vn: "Ngày nào tớ cũng học thuộc từ mới, làm bài tập, nhưng mà từ mới nhiều quá, tớ không nhớ nổi." },
        { role: "小华", hz: "你看得懂阅读理解的文章吗？", py: "Nǐ kàn de dǒng yuèdú lǐjiě de wénzhāng ma?", vn: "Cậu có đọc hiểu được bài đọc hiểu không?" },
        { role: "大卫", hz: "借助生词表能看得懂。我常常觉得头疼，感觉压力好大。", py: "Jièzhù shēngcíbiǎo néng kàn de dǒng. Wǒ chángcháng juéde tóuténg, gǎnjué yālì hǎo dà.", vn: "Nhờ vào bảng từ mới thì đọc hiểu được. Tớ thường cảm thấy đau đầu, áp lực lớn quá." },
        { role: "小华", hz: "学习一定要注意劳逸结合！为了提高学习效率，今晚要不我们去听一场校园音乐会放松一下？", py: "Xuéxí yídìng yào zhùyì láo yì jiéhé! Wèile tígāo xuéxí xiàolǜ, jīnwǎn yàobu wǒmen qù tīng yì chǎng xiàoyuán yīnyuèhuì fàngsōng yíxià?", vn: "Học tập nhất định phải kết hợp nghỉ ngơi! Để nâng cao hiệu quả học tập, hay tối nay chúng mình đi nghe buổi hòa nhạc trường để thư giãn chút đi?" },
        { role: "大卫", hz: "太好了！劳逸结合才能更有精神复习！", py: "Tài hǎo le! Láo yì jiéhé cái néng gèng yǒu jīngshén fùxí!", vn: "Tốt quá! Phải kết hợp nghỉ ngơi thì mới có tinh thần ôn tập tốt hơn được!" }
      ],
      checkQuestion: {
        q: "大卫在复习时遇到了什么困难？",
        options: ["生词太多，记不住，压力大", "听不懂老师讲课", "抢不到演唱会门票", "不想去参加考试"],
        ans: 0,
        exp: "Trong bài, David nói: '生词太多了，我记不住……感觉压力好大。'"
      }
    },
    grammar: [
      {
        name: "Bổ ngữ khả năng (可能补语 1): V + 得/不 + Bổ ngữ kết quả/hướng",
        desc: "Dùng để biểu thị trong điều kiện khách quan hoặc chủ quan nhất định có thể (hoặc không thể) đạt được kết quả hay thực hiện hành động theo phương hướng nào đó.",
        formula: "Khẳng định: Động từ + 得 + Bổ ngữ (kết quả / hướng)\nPhủ định: Động từ + 不 + Bổ ngữ (kết quả / hướng)\nNghi vấn: V + 得 + Bổ ngữ + V + 不 + Bổ ngữ? hoặc V + 得 + Bổ ngữ + 吗?",
        examples: [
          { hz: "这篇文章你生词多，你读得懂吗？—— 我看得懂 / 我看不懂。", py: "Zhè piān wénzhāng shēngcí duō, nǐ dú de dǒng ma? —— Wǒ kàn de dǒng / Wǒ kàn bu dǒng.", vn: "Bài văn này từ mới nhiều, bạn đọc hiểu được không? —— Tôi đọc hiểu được / Tôi không đọc hiểu được." },
          { hz: "演唱会的门票太抢手了，我们买不到。", py: "Yǎnchànghuì de ménpiào tài qiǎngshǒu le, wǒmen mǎi bu dào.", vn: "Vé concert đắt hàng quá, chúng tôi không mua được." },
          { hz: "这些汉字太多了，我记不住。", py: "Zhèxiē hànzì tài duō le, wǒ jì bu zhù.", vn: "Những chữ Hán này nhiều quá, tôi không nhớ nổi." }
        ],
        mistakeCheck: {
          wrong: "我不能看得懂这篇文章。(Sai lầm khi dùng đồng thời 能 và bổ ngữ khả năng dạng khẳng định)",
          right: "我看得到这篇文章 / 我能看懂这篇文章。",
          note: "Không dùng '不 + V + 得 + Bổ ngữ'. Phủ định của bổ ngữ khả năng luôn là 'V + 不 + Bổ ngữ'."
        }
      },
      {
        name: "Liên từ chuyển tiếp: 不过 (Tuy nhiên / Nhưng)",
        desc: "Dùng ở đầu phân câu thứ hai để biểu thị sự chuyển ý nhẹ nhàng, giới hạn hoặc bổ sung cho nhận xét ở phân câu trước.",
        formula: "Phân câu 1, 不过 + Phân câu 2",
        examples: [
          { hz: "学汉语很有趣，不过汉字有点儿难写。", py: "Xué Hànyǔ hěn yǒuqù, búguò hànzì yǒudiǎnr nán xiě.", vn: "Học tiếng Trung rất thú vị, tuy nhiên chữ Hán hơi khó viết." },
          { hz: "我很想去听演唱会，不过我抢不到票。", py: "Wǒ hěn xiǎng qù tīng yǎnchànghuì, búguò wǒ qiǎng bu dào piào.", vn: "Tôi rất muốn đi nghe ca nhạc, nhưng mà tôi không săn được vé." }
        ]
      },
      {
        name: "Giới từ chỉ mục đích: 为了…… (Để / Nhằm)",
        desc: "Giới từ '为了' (wèile) đứng ở đầu câu hoặc trước chủ ngữ để nêu mục đích của hành động theo sau.",
        formula: "为了 + Mục đích, Chủ ngữ + Hành động",
        examples: [
          { hz: "为了提高汉语水平，我常常练习听力和口语。", py: "Wèile tígāo Hànyǔ shuǐpíng, wǒ chángcháng liànxí tīnglì hé kǒuyǔ.", vn: "Để nâng cao trình độ tiếng Trung, tôi thường xuyên luyện nghe và nói." },
          { hz: "为了健康，我们每天应该锻炼身体。", py: "Wèile jiànkāng, wǒmen měitiān yīnggāi duànliàn shēntǐ.", vn: "Vì sức khỏe, mỗi ngày chúng ta nên rèn luyện thân thể." }
        ]
      }
    ],
    skills: {
      listening: "Nghe đoạn chia sẻ của một thủ khoa về thời gian biểu học tập và nghỉ ngơi hợp lí; điền từ còn thiếu vào bảng kế hoạch.",
      speaking: "Thảo luận nhóm: 'Sau kì thi, bạn thích tham gia hoạt động giải trí nào để xả stress?'. Vận dụng các mẫu câu '为了……', '常常', '要不……'.",
      reading: "Đọc bài viết về xu hướng giới trẻ tham gia các câu lạc bộ ngoại khóa nghệ thuật, thể thao để cân bằng cuộc sống; trả lời câu hỏi trắc nghiệm.",
      writing: "Lập bảng kế hoạch ôn thi tuần tới cho bản thân, trong đó ghi rõ thời gian học từng môn và thời gian nghỉ ngơi thư giãn."
    },
    culture: {
      title: "文化驿站: Thành ngữ '劳逸结合' (Lao dật kết hợp) trong triết lí sống Á Đông",
      content: "Thành ngữ **劳逸结合** (láo yì jiéhé) xuất phát từ tư tưởng biện chứng của triết học Trung Hoa cổ đại. '劳' là lao động, bỏ ra công sức; '逸' là an nhàn, nghỉ ngơi. Kinh Lễ có câu: 'Trương nhi bất trì, Văn Vũ bất năng dã; trì nhi bất trương, Văn Vũ bất vi dã; nhất trương nhất trì, Văn Vũ chi đạo dã' (Giương cung mãi mà không chùng dây thì thánh vương cũng không làm nổi; một căng một chùng mới là đạo trị quốc và dưỡng sinh). Học sinh hiện đại cần biết cân bằng giữa áp lực học tập và các thú vui giải trí tích cực để phát triển toàn diện."
    },
    quiz: [
      {
        q: "Chọn dạng phủ định đúng của bổ ngữ khả năng trong câu: '字太小了，我______。'",
        options: ["看不清", "看不清楚", "没看清", "不能看清楚"],
        ans: 1,
        exp: "Dạng phủ định chuẩn của bổ ngữ khả năng là 'V + 不 + Bổ ngữ kết quả' -> '看不清' hoặc '看不清楚'."
      },
      {
        q: "Điền liên từ thích hợp: '这道题很难，______多思考一会儿就能做出来。'",
        options: ["不过", "而且", "因为", "所以"],
        ans: 0,
        exp: "'不过' dùng để chuyển ý nhẹ nhàng: bài này khó, tuy nhiên suy nghĩ thêm một lát thì sẽ làm ra."
      },
      {
        q: "Trong câu: '为了考上好大学，小李每天努力读书。', cụm từ '为了考上好大学' biểu thị điều gì?",
        options: ["Mục đích của hành động", "Nguyên nhân kết quả", "Thời gian xảy ra", "Phương thức thực hiện"],
        ans: 0,
        exp: "Giới từ '为了' luôn dùng để biểu thị mục đích mà hành động hướng tới."
      }
    ]
  },

  3: {
    num: 3,
    topicId: 1,
    title_cn: "代沟",
    title_pinyin: "Dàigōu",
    title_vi: "Khoảng cách thế hệ",
    goals: [
      "Trình bày những khác biệt trong suy nghĩ, thói quen giữa cha mẹ và con cái.",
      "Kể lại sự việc vừa mới xảy ra bằng phó từ thời gian '刚才'.",
      "Sử dụng cấu trúc '拿……来说' để đưa ra ví dụ cụ thể minh họa cho quan điểm.",
      "Vận dụng phó từ '只好' (đành phải) và phó từ so sánh tăng cấp '更 / 更加'."
    ],
    vocab: [
      { hz: "代沟", py: "dàigōu", type: "danh từ", vn: "khoảng cách thế hệ", eg: "父母和孩子之间常常存在代沟。", eg_py: "Fùmǔ hé háizi zhījiān chángcháng cúnzài dàigōu.", eg_vn: "Giữa cha mẹ và con cái thường tồn tại khoảng cách thế hệ." },
      { hz: "父母", py: "fùmǔ", type: "danh từ", vn: "cha mẹ, phụ mẫu", eg: "我们应该多理解父母的心情。", eg_py: "Wǒmen yīnggāi duō lǐjiě fùmǔ de xīnqíng.", eg_vn: "Chúng ta nên thấu hiểu tâm trạng của cha mẹ nhiều hơn." },
      { hz: "想法", py: "xiǎngfǎ", type: "danh từ", vn: "suy nghĩ, cách nghĩ, quan điểm", eg: "年轻人和老年人的想法不太一样。", eg_py: "Niánqīngrén hé lǎoniánrén de xiǎngfǎ bú tài yíyàng.", eg_vn: "Suy nghĩ của người trẻ và người già không hoàn toàn giống nhau." },
      { hz: "沟通", py: "gōutōng", type: "động từ / danh từ", vn: "giao tiếp, trao đổi, kết nối", eg: "多沟通能化解许多误会。", eg_py: "Duō gōutōng néng huàjiě xǔduō wùhuì.", eg_vn: "Giao tiếp nhiều có thể hóa giải nhiều hiểu lầm." },
      { hz: "理解", py: "lǐjiě", type: "động từ / danh từ", vn: "thấu hiểu, hiểu", eg: "相互理解是家庭幸福的基础。", eg_py: "Xiānghù lǐjiě shì jiātíng xìngfú de jīchǔ.", eg_vn: "Thấu hiểu lẫn nhau là nền tảng của hạnh phúc gia đình." },
      { hz: "选择", py: "xuǎnzé", type: "động từ / danh từ", vn: "lựa chọn", eg: "这是我自己的选择，请父母放心。", eg_py: "Zhè shì wǒ zìjǐ de xuǎnzé, qǐng fùmǔ fàngxīn.", eg_vn: "Đây là lựa chọn của chính con, xin bố mẹ yên tâm." },
      { hz: "刚才", py: "gāngcái", type: "danh từ thời gian", vn: "vừa nãy, vừa mới", eg: "刚才我和妈妈谈了谈选专业的事。", eg_py: "Gāngcái wǒ hé māma tán le tan xuǎn zhuānyè de shì.", eg_vn: "Vừa nãy tôi đã nói chuyện với mẹ về việc chọn chuyên ngành." },
      { hz: "拿……来说", py: "ná… lái shuō", type: "cụm cố định", vn: "lấy… mà nói, lấy… làm ví dụ", eg: "拿穿衣服来说，我就和妈妈眼光不同。", eg_py: "Ná chuān yīfu lái shuō, wǒ jiù hé māma yǎnguāng bùtóng.", eg_vn: "Lấy việc mặc quần áo mà nói, gu của tôi và mẹ đã không giống nhau rồi." },
      { hz: "只好", py: "zhǐhǎo", type: "phó từ", vn: "đành phải, đành", eg: "外边下大雨，我只好呆在家里。", eg_py: "Wàibiān xià dàyǔ, wǒ zhǐhǎo dāi zài jiālǐ.", eg_vn: "Bên ngoài mưa to quá, tôi đành phải ở trong nhà." },
      { hz: "更/更加", py: "gèng/gèngjiā", type: "phó từ", vn: "càng, càng thêm, hơn nữa", eg: "沟通让我们与父母的关系更加亲近。", eg_py: "Gōutōng ràng wǒmen yǔ fùmǔ de guānxì gèngjiā qīnjìn.", eg_vn: "Giao tiếp giúp mối quan hệ giữa chúng ta và cha mẹ càng thêm gần gũi." }
    ],
    dialogue: {
      title: "两代人的沟通 (Sự giao tiếp giữa hai thế hệ)",
      roles: ["李强 (Lý Cường)", "王老师 (Thầy Vương)"],
      lines: [
        { role: "李强", hz: "王老师，刚才我和妈妈吵架了，我觉得我们之间有代沟。", py: "Wáng lǎoshī, gāngcái wǒ hé māma chǎojià le, wǒ juéde wǒmen zhījiān yǒu dàigōu.", vn: "Thầy Vương ơi, vừa nãy em với mẹ cãi nhau, em cảm thấy giữa chúng em có khoảng cách thế hệ." },
        { role: "王老师", hz: "怎么了李强？能跟老师说说具体的事吗？", py: "Zěnme le Lǐ Qiáng? Néng gēn lǎoshī shuōshuo jùtǐ de shì ma?", vn: "Sao thế Lý Cường? Có thể kể cụ thể cho thầy nghe được không?" },
        { role: "李强", hz: "拿选课来说吧，我想选电脑编程，妈妈却想让我选音乐。她不理解我的想法，我只好生闷气。", py: "Ná xuǎnkè lái shuō ba, wǒ xiǎng xuǎn diànnǎo biānchéng, māma què xiǎng ràng wǒ xuǎn yīnyuè. Tā bù lǐjiě wǒ de xiǎngfǎ, wǒ zhǐhǎo shēng mènqì.", vn: "Lấy chuyện chọn môn học mà nói, em muốn chọn lập trình máy tính, mẹ lại muốn em chọn âm nhạc. Mẹ không hiểu suy nghĩ của em, em đành phải giận dỗi một mình." },
        { role: "王老师", hz: "其实父母也是为了你好。你可以心平气和地向父母说明你的理由，沟通能让彼此更加理解。", py: "Qíshí fùmǔ yě shì wèile nǐ hǎo. Nǐ kěyǐ xīnpíngqìhé de xiàng fùmǔ shuōmíng nǐ de lǐyóu, gōutōng néng ràng bǐcǐ gèngjiā lǐjiě.", vn: "Thực ra bố mẹ cũng là vì muốn tốt cho em thôi. Em có thể bình tĩnh giải thích lí do với bố mẹ, giao tiếp sẽ làm hai bên càng thấu hiểu nhau hơn." },
        { role: "李强", hz: "老师说得对，我今晚回去主动跟妈妈谈谈。", py: "Lǎoshī shuō de duì, wǒ jīnwǎn huíqù zhǔdòng gēn māma tán tan.", vn: "Thầy nói đúng ạ, tối nay về em sẽ chủ động nói chuyện lại với mẹ." }
      ],
      checkQuestion: {
        q: "李强为什么和妈妈产生矛盾？",
        options: ["在选课的想法上两人不一致", "李强考试成绩不理想", "妈妈不让李强用电脑", "李强晚上不肯按时回家"],
        ans: 0,
        exp: "Lý Cường giải thích: '拿选课来说吧，我想选电脑编程，妈妈却想让我选音乐。'"
      }
    },
    grammar: [
      {
        name: "Phó từ thời gian: 刚才 (Vừa nãy / Vừa mới)",
        desc: "'刚才' (gāngcái) là danh từ chỉ thời gian gần đây nhất, chỉ dùng cho quá khứ ngay trước thời điểm nói. Thường đứng trước hoặc sau chủ ngữ.",
        formula: "刚才 + Chủ ngữ + Động từ... HOẶC Chủ ngữ + 刚才 + Động từ...",
        examples: [
          { hz: "刚才我去老师办公室了。", py: "Gāngcái wǒ qù lǎoshī bàngōngshì le.", vn: "Vừa nãy tôi đi đến văn phòng thầy giáo." },
          { hz: "你刚才说什么？我没听清。", py: "Nǐ gāngcái shuō shénme? Wǒ méi tīng qīng.", vn: "Vừa nãy bạn nói gì cơ? Tôi chưa nghe rõ." }
        ],
        mistakeCheck: {
          wrong: "刚才我会去图书馆。(Không dùng 刚才 cho tương lai)",
          right: "我一会儿去图书馆。(Dùng 一会儿 hoặc 马上 cho tương lai gần)",
          note: "Phân biệt 刚才 (danh từ thời gian, có thể làm định ngữ: 刚才的事) với 刚 / 刚刚 (phó từ, chỉ đứng trước động từ)."
        }
      },
      {
        name: "Cấu trúc đưa ví dụ: 拿……来说 (Lấy… mà nói / Lấy… làm ví dụ)",
        desc: "Dùng để dẫn chứng một trường hợp cụ thể nhằm làm sáng tỏ một vấn đề hoặc nhận định tổng quát.",
        formula: "拿 + Đối tượng / Ví dụ cụ thể + 来说，Phân câu nêu nhận định / thực tế",
        examples: [
          { hz: "拿我家来说，周末大家常常一起吃晚饭、聊天儿。", py: "Ná wǒ jiā lái shuō, zhōumò dàjiā chángcháng yìqǐ chī wǎnfàn, liáotiānr.", vn: "Lấy nhà tôi mà nói, cuối tuần mọi người thường ăn tối và trò chuyện cùng nhau." },
          { hz: "拿学习汉语来说，多说多练是最有效的方法。", py: "Ná xuéxí Hànyǔ lái shuō, duō shuō duō liàn shì zuì yǒuxiào de fāngfǎ.", vn: "Lấy việc học tiếng Trung làm ví dụ, nói nhiều luyện nhiều là phương pháp hiệu quả nhất." }
        ]
      },
      {
        name: "Phó từ biểu thị lựa chọn duy nhất: 只好 (Đành phải)",
        desc: "'只好' (zhǐhǎo) biểu thị trong hoàn cảnh bắt buộc, không còn cách nào khác tốt hơn nên đành phải chấp nhận làm điều đó.",
        formula: "Chủ ngữ + 只好 + Động từ...",
        examples: [
          { hz: "公交车还没来，我们只好走路去学校。", py: "Gōngjiāochē hái méi lái, wǒmen zhǐhǎo zǒulù qù xuéxiào.", vn: "Xe buýt chưa tới, chúng tôi đành phải đi bộ đến trường." },
          { hz: "没有买到今天的票，他只好明天再走。", py: "Méiyǒu mǎidào jīntiān de piào, tā zhǐhǎo míngtiān zài zǒu.", vn: "Không mua được vé hôm nay, anh ấy đành phải mai mới đi." }
        ]
      }
    ],
    skills: {
      listening: "Nghe câu chuyện tâm sự của hai bạn trẻ về sự bất đồng với cha mẹ trong việc sử dụng điện thoại thông minh; xác định đúng/sai.",
      speaking: "Đóng vai tình huống: Một bạn đóng vai phụ huynh muốn con tập trung học, một bạn đóng vai con muốn tham gia câu lạc bộ bóng rổ; cùng tìm tiếng nói chung.",
      reading: "Đọc bài khảo sát về 'Những nguyên nhân chính gây ra khoảng cách thế hệ trong gia đình hiện đại'; tóm tắt 3 giải pháp được chuyên gia khuyên dùng.",
      writing: "Viết một bức thư ngắn (80–100 chữ) gửi cho cha mẹ để bày tỏ suy nghĩ thật lòng về ước mơ nghề nghiệp tương lai của bản thân."
    },
    culture: {
      title: "文化驿站: Chữ '孝' (Hiếu) và văn hóa giao tiếp trong gia đình Á Đông",
      content: "Chữ **孝** (xiào - hiếu thảo) trong chữ Hán tượng hình được cấu tạo bởi chữ '老' (lão - người già) ở trên và chữ '子' (tử - người con) ở dưới, tượng trưng cho hình ảnh người con hiếu nghĩa cõng và phụng dưỡng cha mẹ khi về già. Khái niệm 'Hiếu' trong xã hội hiện đại không đơn thuần là phục tùng tuyệt đối, mà là sự tôn kính, bầu bạn và lắng nghe. Khoảng cách thế hệ (代沟) là hiện tượng tự nhiên do khác biệt về bối cảnh trưởng thành; chìa khóa vàng để thu hẹp khoảng cách này chính là sự kiên nhẫn '沟通' (giao tiếp chân thành) và '理解' (thấu hiểu lẫn nhau)."
    },
    quiz: [
      {
        q: "Chọn từ điền vào chỗ trống: '下雨了，我没带伞，______在学校等雨停。'",
        options: ["只好", "才好", "正好", "爱好"],
        ans: 0,
        exp: "'只好' biểu thị tình huống không có sự lựa chọn nào khác ngoài việc đành phải đợi tạnh mưa."
      },
      {
        q: "Cấu trúc '拿……来说' dùng để làm gì trong văn bản?",
        options: ["Dẫn ra một ví dụ cụ thể để minh họa", "So sánh hai sự vật đối lập", "Biểu thị nguyên nhân kết quả", "Hỏi phương hướng địa điểm"],
        ans: 0,
        exp: "'拿……来说' mang nghĩa 'lấy... làm ví dụ để nói'."
      },
      {
        q: "Xác định từ loại của '刚才' trong câu: '刚才你去哪儿了？'",
        options: ["Danh từ thời gian", "Phó từ phương thức", "Động từ năng nguyện", "Liên từ"],
        ans: 0,
        exp: "'刚才' là danh từ chỉ thời gian vừa trôi qua, có thể đứng trước hoặc sau chủ ngữ."
      }
    ]
  },

  // Review Unit 1
  "r1": {
    num: "r1",
    isReview: true,
    topicId: 1,
    title_cn: "复习一",
    title_pinyin: "Fùxí yī",
    title_vi: "Ôn tập Chủ điểm 1",
    goals: [
      "Hệ thống hóa toàn bộ từ vựng về kì nghỉ (度假, 海鲜, 日出), học tập giải trí (考试, 劳逸结合) và quan hệ gia đình (代沟, 沟通).",
      "Ôn tập và làm chủ 10 điểm ngữ pháp trọng tâm: 不但……还……, 向, 特别, Bổ ngữ khả năng (得/不), 不过, 为了, 常常, 刚才, 拿……来说, 只好, 更/更加.",
      "Thực hiện bài kiểm tra tổng hợp 4 kĩ năng: Nghe hội thoại, Nói thuyết trình kế hoạch cá nhân, Đọc hiểu văn bản và Viết đoạn văn."
    ],
    contentSummary: `
### 1. Tổng kết cấu trúc ngữ pháp Chủ điểm 1
- **Liên từ bổ sung:** $A$ 不但……还 $B$…… (Nhấn mạnh sự gia tăng tính chất hoặc hành động).
- **Chỉ phương hướng:** 向 + Phương hướng / Địa điểm / Đối tượng + V (Hướng về phía...).
- **Phó từ mức độ & tần suất:** 特别 (rất/đặc biệt), 常常 (thường xuyên), 更/更加 (càng thêm).
- **Bổ ngữ khả năng:** V + 得 / 不 + Bổ ngữ (Khả năng thực hiện và đạt kết quả trong điều kiện thực tế).
- **Thời gian & Chuyển tiếp:** 刚才 (vừa nãy - chỉ quá khứ), 不过 (tuy nhiên), 为了 (để - mục đích), 只好 (đành phải).
- **Đưa dẫn chứng:** 拿 + Đối tượng + 来说 (Lấy... làm ví dụ minh họa).
    `,
    quiz: [
      {
        q: "Chọn câu có ngữ pháp CHÍNH XÁC nhất:",
        options: [
          "他不但会讲汉语，还会写汉字。",
          "不但他会讲汉语，还会写汉字。",
          "他不但会讲汉语，还会不会写汉字？",
          "他会讲汉语不但，还会写汉字。"
        ],
        ans: 0,
        exp: "Khi cùng chủ ngữ '他', chủ ngữ đứng trước liên từ '不但'."
      },
      {
        q: "Từ nào KHÔNG THỂ dùng làm bổ ngữ khả năng trong cấu trúc '看______'?",
        options: ["不懂", "得清", "不到", "经常"],
        ans: 3,
        exp: "'经常' là phó từ tần suất, không thể làm bổ ngữ kết quả/hướng trong bổ ngữ khả năng."
      },
      {
        q: "Thành ngữ nào khuyên chúng ta nên cân đối việc học tập và nghỉ ngơi?",
        options: ["劳逸结合", "能者为师", "丰富多彩", "千方百计"],
        ans: 0,
        exp: "'劳逸结合' nghĩa là kết hợp hài hòa giữa làm việc/học tập và nghỉ ngơi giải trí."
      }
    ]
  },

  4: {
    num: 4,
    topicId: 2,
    title_cn: "智商与情商",
    title_pinyin: "Zhìshāng yǔ qíngshāng",
    title_vi: "Trí tuệ và trí tuệ cảm xúc",
    goals: [
      "Miêu tả đặc điểm của người có chỉ số trí tuệ (IQ) và chỉ số cảm xúc (EQ) cao.",
      "Nói về cảm xúc bản thân, cách xử lí tình huống xung đột và thái độ tích cực trong cuộc sống.",
      "Nắm vững cách dùng giới từ '对' chỉ đối tượng hướng tới.",
      "Phân biệt tính từ và phó từ '原来' (vốn dĩ / hóa ra) và vận dụng Bổ ngữ khả năng mở rộng."
    ],
    vocab: [
      { hz: "智商", py: "zhìshāng", type: "danh từ", vn: "chỉ số thông minh (IQ)", eg: "智商高的人学数学往往很快。", eg_py: "Zhìshāng gāo de rén xué shùxué wǎngwǎng hěn kuài.", eg_vn: "Người có IQ cao học toán thường rất nhanh." },
      { hz: "情商", py: "qíngshāng", type: "danh từ", vn: "chỉ số cảm xúc (EQ)", eg: "情商高的人更容易与他人合作。", eg_py: "Qíngshāng gāo de rén gèng róngyì yǔ tārén hézuò.", eg_vn: "Người có EQ cao dễ hợp tác với người khác hơn." },
      { hz: "情绪", py: "qíngxù", type: "danh từ", vn: "cảm xúc, tâm trạng", eg: "学会管理自己的情绪非常重要。", eg_py: "Xuéhuì guǎnlǐ zìjǐ de qíngxù fēicháng zhòngyào.", eg_vn: "Học được cách quản lí cảm xúc của mình là rất quan trọng." },
      { hz: "处理", py: "chǔlǐ", type: "động từ", vn: "xử lí, giải quyết", eg: "他处理人际关系很有经验。", eg_py: "Tā chǔlǐ rénjì guānxì hěn yǒu jīngyàn.", eg_vn: "Anh ấy xử lí các mối quan hệ rất có kinh nghiệm." },
      { hz: "积极", py: "jījí", type: "tính từ", vn: "tích cực, hăng hái", eg: "我们要以积极的心态面对困难。", eg_py: "Wǒmen yào yǐ jījí de xīntài miànduì kùnnan.", eg_vn: "Chúng ta cần đối mặt với khó khăn bằng tâm thái tích cực." },
      { hz: "观点", py: "guāndiǎn", type: "danh từ", vn: "quan điểm, góc nhìn", eg: "每个人对成功都有不同的观点。", eg_py: "Měi ge rén duì chénggōng dōu yǒu bùtóng de guāndiǎn.", eg_vn: "Mỗi người đều có quan điểm khác nhau về thành công." },
      { hz: "原来", py: "yuánlái", type: "phó từ / tính từ", vn: "hóa ra; ban đầu, vốn dĩ", eg: "原来你也对心理学感兴趣啊！", eg_py: "Yuánlái nǐ yě duì xīnlǐxué gǎn xìngqù a!", eg_vn: "Hóa ra bạn cũng có hứng thú với tâm lí học à!" },
      { hz: "对", py: "duì", type: "giới từ", vn: "đối với, về phía", eg: "运动对身体健康很有好处。", eg_py: "Yùndòng duì shēntǐ jiànkāng hěn yǒu hǎochu.", eg_vn: "Vận động rất có lợi đối với sức khỏe." },
      { hz: "认为", py: "rènwéi", type: "động từ", vn: "cho rằng, nhận định", eg: "我认为情商在工作中起着关键作用。", eg_py: "Wǒ rènwéi qíngshāng zài gōngzuò zhōng qǐ zhe guānjiàn zuòyòng.", eg_vn: "Tôi cho rằng EQ đóng vai trò then chốt trong công việc." },
      { hz: "能力", py: "nénglì", type: "danh từ", vn: "năng lực, khả năng", eg: "解决问题的能力需要不断培养。", eg_py: "Jiějué wèntí de nénglì xūyào búduàn péiyǎng.", eg_vn: "Năng lực giải quyết vấn đề cần được rèn luyện không ngừng." }
    ],
    dialogue: {
      title: "智商重要还是情商重要？ (IQ hay EQ quan trọng hơn?)",
      roles: ["安娜 (Anna)", "张伟 (Trương Vĩ)"],
      lines: [
        { role: "安娜", hz: "张伟，你觉得一个人要想成功，智商重要还是情商重要？", py: "Zhāng Wěi, nǐ juéde yí ge rén yào xiǎng chénggōng, zhìshāng zhòngyào háishi qíngshāng zhòngyào?", vn: "Trương Vĩ, bạn thấy một người muốn thành công thì IQ hay EQ quan trọng hơn?" },
        { role: "张伟", hz: "我认为两样都很重要。以前我以为智商高就能做好一切，后来发现并非如此。", py: "Wǒ rènwéi liǎng yàng dōu hěn zhòngyào. Yǐqián wǒ yǐwéi zhìshāng gāo jiù néng zuò hǎo yíqiè, hòulái fāxiàn bìng fēi rúcǐ.", vn: "Tớ cho rằng cả hai đều quan trọng. Trước đây tớ cứ tưởng IQ cao là làm tốt mọi việc, sau này phát hiện không hẳn như vậy." },
        { role: "安娜", hz: "对！情商高的人特别懂得照顾别人的情绪，遇到矛盾时处理得很好。", py: "Duì! Qíngshāng gāo de rén tèbié dǒngde zhàogu biérén de qíngxù, yù dào máodùn shí chǔlǐ de hěn hǎo.", vn: "Đúng thế! Người có EQ cao đặc biệt biết quan tâm cảm xúc người khác, khi gặp mâu thuẫn giải quyết rất êm thấm." },
        { role: "张伟", hz: "原来情商高并不是天生的，而是可以通过学习和反思来提高的。", py: "Yuánlái qíngshāng gāo bìng bú shì tiānshēng de, érshì kěyǐ tōngguò xuéxí hé fǎnsī lái tígāo de.", vn: "Hóa ra EQ cao không phải bẩm sinh, mà có thể nâng cao thông qua học hỏi và tự ngẫm." },
        { role: "安娜", hz: "没错，学会积极面对失败，对我们以后的发展大有好处。", py: "Méi cuò, xuéhuì jījí miànduì shībài, duì wǒmen yǐhòu de fāzhǎn dàyǒu hǎochu.", vn: "Không sai, học được cách đối diện tích cực với thất bại sẽ rất có lợi cho tương lai chúng ta." }
      ],
      checkQuestion: {
        q: "根据对话，情商可以通过什么方式提高？",
        options: ["通过学习和反思", "只靠天生遗传", "多做数学练习", "不与他人交流"],
        ans: 0,
        exp: "Trương Vĩ kết luận: '原来情商高并不是天生的，而是可以通过学习和反思来提高的。'"
      }
    },
    grammar: [
      {
        name: "Giới từ: 对 + Đối tượng + Vị ngữ (Đối với / Về)",
        desc: "Dùng để giới thiệu đối tượng chịu tác động hoặc phạm vi được nhận xét, đánh giá.",
        formula: "Chủ ngữ + 对 + Đối tượng + Động từ / Tính từ",
        examples: [
          { hz: "老师对我非常关心。", py: "Lǎoshī duì wǒ fēicháng guānxīn.", vn: "Thầy cô rất quan tâm đến tôi." },
          { hz: "多听录音对提高听力很有帮助。", py: "Duō tīng lùyīn duì tígāo tīnglì hěn yǒu bāngzhù.", vn: "Nghe nhiều băng ghi âm rất có ích cho việc nâng cao kĩ năng nghe." }
        ]
      },
      {
        name: "Phó từ / Tính từ: 原来 (Hóa ra / Vốn dĩ)",
        desc: "1. Làm phó từ: '原来' biểu thị sự phát hiện ra sự thật mà trước đó mình chưa biết ('hóa ra').\n2. Làm tính từ: biểu thị trạng thái hoặc tình huống ban đầu ('vốn dĩ').",
        formula: "Phó từ: 原来 + Phân câu biểu thị sự thật\nTính từ: 原来的 + Danh từ (kế hoạch ban đầu, nơi ở cũ)",
        examples: [
          { hz: "原来这道题这么简单！", py: "Yuánlái zhè dào tí zhème jiǎndān!", vn: "Hóa ra bài tập này đơn giản thế này!" },
          { hz: "按原来的计划，我们明天出发。", py: "Àn yuánlái de jìhuà, wǒmen míngtiān chūfā.", vn: "Theo kế hoạch ban đầu, ngày mai chúng tôi xuất phát." }
        ]
      },
      {
        name: "Bổ ngữ khả năng mở rộng (可能补语 2)",
        desc: "Tiếp tục vận dụng V + 得/不 + Bổ ngữ kết quả: 解决得了/解决不了 (giải quyết được/không được), 说得清楚/说不清楚 (nói rõ được/không rõ).",
        formula: "Động từ + 得 / 不 + 了 (liǎo) / 清楚 / 完 / 动...",
        examples: [
          { hz: "这个问题太复杂了，我一个人解决不了。", py: "Zhège wèntí tài fùzá le, wǒ yí ge rén jiějué bu liǎo.", vn: "Vấn đề này phức tạp quá, một mình tôi không giải quyết nổi." },
          { hz: "电话里的声音很小，我听不清楚。", py: "Diànhuà lǐ de shēngyīn hěn xiǎo, wǒ tīng bu qīngchu.", vn: "Âm thanh trong điện thoại bé quá, tôi nghe không rõ." }
        ]
      }
    ],
    skills: {
      listening: "Nghe bài nói chuyện của chuyên gia tâm lí học đường về cách kiềm chế cơn giận; điền các bước xử lí cảm xúc.",
      speaking: "Tranh biện cặp đôi: 'Trong công việc hiện đại, IQ hay EQ quyết định thành công nhiều hơn?'. Sử dụng mẫu câu '我认为……', '对……来说'.",
      reading: "Đọc trích đoạn về bài học tự nhận thức cảm xúc của Daniel Goleman; trả lời câu hỏi tìm ý chính.",
      writing: "Viết đoạn văn ngắn 80 chữ nêu quan điểm của em về một người có EQ cao trong lớp học."
    },
    culture: {
      title: "文化驿站: Thành ngữ '能者为师' (Người tài giỏi có thể làm thầy)",
      content: "Thành ngữ **能者为师** (néng zhě wéi shī) có nghĩa là ai có tài năng, hiểu biết ở một lĩnh vực nào đó thì đều có thể trở thành người thầy để chúng ta học hỏi, không phân biệt tuổi tác hay địa vị. Trong văn hóa Trung Hoa, sự kết hợp giữa tri thức tài năng (IQ) và đức tính khiêm tốn, biết tôn trọng và lắng nghe người khác (EQ) chính là cảnh giới ứng xử cao nhất của người quân tử."
    },
    quiz: [
      {
        q: "Chọn từ thích hợp: '昨天敲门的是小明，我还以为是小王呢，______是他！'",
        options: ["原来", "本钱", "从前", "经常"],
        ans: 0,
        exp: "'原来' dùng khi nhận ra một sự thật bất ngờ mà trước đó mình chưa biết: 'hóa ra là cậu ấy'."
      },
      {
        q: "Cấu trúc bổ ngữ khả năng nào mang nghĩa 'không thể giải quyết được'?",
        options: ["解决不了", "解决得好", "没有解决", "不解决"],
        ans: 0,
        exp: "'解决不了' (jiějué bu liǎo) là thể phủ định của bổ ngữ khả năng chỉ việc không giải quyết được."
      },
      {
        q: "Câu nào dưới đây sử dụng đúng giới từ '对'?",
        options: [
          "多吃蔬菜对健康有好处。",
          "对多吃蔬菜健康有好处。",
          "多吃蔬菜健康对有好处。",
          "健康对多吃蔬菜有好处。"
        ],
        ans: 0,
        exp: "Giới từ '对' đứng trước danh từ '健康' (đối với sức khỏe): '对健康有好处'."
      }
    ]
  },

  5: {
    num: 5,
    topicId: 2,
    title_cn: "我学习，我快乐",
    title_pinyin: "Wǒ xuéxí, wǒ kuàilè",
    title_vi: "Tôi học tập, tôi vui",
    goals: [
      "Thuyết trình về các hoạt động học tập trong và ngoài lớp học, tham gia hội thảo chuyên đề.",
      "Nêu quan điểm cá nhân bằng cấu trúc '在……看来' (theo quan điểm của...).",
      "Sử dụng phó từ '马上' diễn đạt hành động sẽ xảy ra tức thì.",
      "Phân biệt chính xác giữa '以为' (tưởng rằng - thực tế không phải) và '认为' (cho rằng - nhận định khách quan)."
    ],
    vocab: [
      { hz: "学习", py: "xuéxí", type: "động từ / danh từ", vn: "học tập, học hỏi", eg: "终身学习是现代人必备的能力。", eg_py: "Zhōngshēn xuéxí shì xiàndàirén bìbèi de nénglì.", eg_vn: "Học tập suốt đời là năng lực cần có của con người hiện đại." },
      { hz: "课外活动", py: "kèwài huódòng", type: "cụm danh từ", vn: "hoạt động ngoại khóa", eg: "参加课外活动能丰富我们的校园生活。", eg_py: "Cānjiā kèwài huódòng néng fēngfù wǒmen de xiàoyuán shēnghuó.", eg_vn: "Tham gia hoạt động ngoại khóa làm phong phú cuộc sống học đường của chúng ta." },
      { hz: "讲座", py: "jiǎngzuò", type: "danh từ", vn: "buổi tọa đàm, chuyên đề, bài giảng", eg: "明天下午图书馆有一个关于人工智能的讲座。", eg_py: "Míngtiān xiàwǔ túshūguǎn yǒu yí ge guānyú réngōng zhìnéng de jiǎngzuò.", eg_vn: "Chiều mai ở thư viện có một buổi tọa đàm về trí tuệ nhân tạo." },
      { hz: "参加", py: "cānjiā", type: "động từ", vn: "tham gia", eg: "我积极参加学校的汉语演讲比赛。", eg_py: "Wǒ jījí cānjiā xuéxiào de Hànyǔ yǎnjiǎng bǐsài.", eg_vn: "Tôi tích cực tham gia cuộc thi hùng biện tiếng Trung của trường." },
      { hz: "认为", py: "rènwéi", type: "động từ", vn: "cho rằng, nhận định", eg: "我认为自主学习最有效。", eg_py: "Wǒ rènwéi zìzhǔ xuéxí zuì yǒuxiào.", eg_vn: "Tôi cho rằng tự chủ học tập là hiệu quả nhất." },
      { hz: "以为", py: "yǐwéi", type: "động từ", vn: "tưởng rằng (thực tế ngược lại)", eg: "我以为讲座在三点，其实是两点半。", eg_py: "Wǒ yǐwéi jiǎngzuò zài sān diǎn, qíshí shì liǎng diǎn bàn.", eg_vn: "Tôi tưởng tọa đàm lúc 3 giờ, thực ra là 2 rưỡi." },
      { hz: "马上", py: "mǎshàng", type: "phó từ", vn: "ngay lập tức, lập tức", eg: "听到上课铃声，大家马上走进了教室。", eg_py: "Tīngdào shàngkè língshēng, dàjiā mǎshàng zǒujìn le jiàoshì.", eg_vn: "Nghe thấy tiếng chuông vào lớp, mọi người lập tức bước vào phòng học." },
      { hz: "在……看来", py: "zài… kànlái", type: "cụm giới từ", vn: "theo cách nhìn của…, theo quan điểm của…", eg: "在我看来，多读书能让人更加智慧。", eg_py: "Zài wǒ kànlái, duō dúshū néng ràng rén gèngjiā zhìhuì.", eg_vn: "Theo quan điểm của tôi, đọc nhiều sách giúp con người thêm thông tuệ." },
      { hz: "丰富", py: "fēngfù", type: "tính từ", vn: "phong phú, dồi dào", eg: "他的课外生活非常丰富多彩。", eg_py: "Tā de kèwài shēnghuó fēicháng fēngfù duōcǎi.", eg_vn: "Cuộc sống ngoài giờ của bạn ấy rất phong phú đa dạng." },
      { hz: "自信", py: "zìxìn", type: "tính từ / danh từ", vn: "tự tin", eg: "通过努力，他变得越来越自信了。", eg_py: "Tōngguò nǔlì, tā biàn de yuèláiyuè zìxìn le.", eg_vn: "Qua sự nỗ lực, bạn ấy ngày càng trở nên tự tin." }
    ],
    dialogue: {
      title: "有趣的课外讲座 (Buổi tọa đàm ngoại khóa thú vị)",
      roles: ["陈明 (Trần Minh)", "林娜 (Lina)"],
      lines: [
        { role: "陈明", hz: "林娜，下午学校有关于传统文化的讲座，你参加吗？", py: "Lín Nà, xiàwǔ xuéxiào yǒu guānyú chuántǒng wénhuà de jiǎngzuò, nǐ cānjiā ma?", vn: "Lina, chiều nay trường có buổi tọa đàm về văn hóa truyền thống, cậu có tham gia không?" },
        { role: "林娜", hz: "我参加！我以前以为讲座都很枯燥，后来去听了一次才发现特别生动有趣。", py: "Wǒ cānjiā! Wǒ yǐqián yǐwéi jiǎngzuò dōu hěn kūzào, hòulái qù tīng le yí cì cái fāxiàn tèbié shēngdòng yǒuqù.", vn: "Tớ tham gia chứ! Trước đây tớ cứ tưởng tọa đàm khô khan lắm, sau này đi nghe thử một lần mới thấy cực kì sinh động và thú vị." },
        { role: "陈明", hz: "在老师看来，参加课外活动能拓展我们的视野，让我们在快乐中学习。", py: "Zài lǎoshī kànlái, cānjiā kèwài huódòng néng tuòzhǎn wǒmen de shìyě, ràng wǒmen zài kuàilè zhōng xuéxí.", vn: "Theo góc nhìn của thầy cô, tham gia hoạt động ngoại khóa giúp mở rộng tầm mắt, giúp chúng mình vừa học vừa vui." },
        { role: "林娜", hz: "快两点了，讲座马上就要开始了，我们赶紧走吧！", py: "Kuài liǎng diǎn le, jiǎngzuò mǎshàng jiù yào kāishǐ le, wǒmen gǎnjǐn zǒu ba!", vn: "Gần 2 giờ rồi, buổi tọa đàm sắp bắt đầu ngay rồi, chúng mình mau đi thôi!" }
      ],
      checkQuestion: {
        q: "林娜以前对讲座有什么看法？",
        options: ["以为讲座很枯燥", "以为讲座很有趣", "一直非常喜欢讲座", "以为讲座在晚上举行"],
        ans: 0,
        exp: "Lina chia sẻ: '我以前以为讲座都很枯燥，后来去听了一次才发现特别生动有趣。'"
      }
    },
    grammar: [
      {
        name: "Cấu trúc nêu quan điểm: 在 + Người + 看来 (Theo quan điểm của...)",
        desc: "Dùng để đóng khung và giới thiệu góc nhìn, cách đánh giá của một cá nhân hoặc tập thể về một sự việc.",
        formula: "在 + Danh từ / Đại từ + 看来，Phân câu nêu nhận định",
        examples: [
          { hz: "在我看来，掌握一门外语就多了一扇看世界的窗户。", py: "Zài wǒ kànlái, zhǎngwò yì mén wàiyǔ jiù duō le yí shàn kàn shìjiè de chuānghu.", vn: "Theo tôi thấy, nắm vững một ngoại ngữ là có thêm một cánh cửa sổ nhìn ra thế giới." },
          { hz: "在大家看来，他是一个既聪明又热心的人。", py: "Zài dàjiā kànlái, tā shì yí ge jì cōngmíng yòu rèxīn de rén.", vn: "Trong mắt mọi người, cậu ấy là một người vừa thông minh vừa nhiệt tình." }
        ]
      },
      {
        name: "Phó từ thời gian: 马上 (Lập tức / Ngay)",
        desc: "Đứng trước động từ biểu thị hành động sắp xảy ra ngay lập tức trong thời gian cực ngắn.",
        formula: "Chủ ngữ + 马上 + Động từ... / 马上就要……了",
        examples: [
          { hz: "请稍等，我马上就来。", py: "Qǐng shāoděng, wǒ mǎshàng jiù lái.", vn: "Xin đợi một chút, tôi đến ngay đây." },
          { hz: "电影马上就要开始了。", py: "Diànyǐng mǎshàng jiù yào kāishǐ le.", vn: "Bộ phim sắp sửa bắt đầu ngay rồi." }
        ]
      },
      {
        name: "Phân biệt 以为 (tưởng rằng) và 认为 (cho rằng)",
        desc: "1. 以为 (yǐwéi): Thường dùng khi người nói cho là đúng trong quá khứ nhưng thực tế sự thật lại hoàn toàn khác hoặc ngược lại.\n2. 认为 (rènwéi): Nêu ý kiến, quan điểm, nhận định chắc chắn, khách quan mang tính phân tích.",
        formula: "以为: 我以为……，其实/后来……\n认为: 我认为 + Quan điểm",
        examples: [
          { hz: "我以为今天星期日，原来是星期六。", py: "Wǒ yǐwéi jīntiān xīngqīrì, yuánlái shì xīngqīliù.", vn: "Tôi cứ tưởng hôm nay là chủ nhật, hóa ra là thứ bảy." },
          { hz: "我们认为这个学习方案很合理。", py: "Wǒmen rènwéi zhège xuéxí fāng'àn hěn hélǐ.", vn: "Chúng tôi cho rằng phương án học tập này rất hợp lí." }
        ]
      }
    ],
    skills: {
      listening: "Nghe bài phỏng vấn một học sinh đoạt giải cuộc thi nghiên cứu khoa học kỹ thuật về niềm vui học tập; ghi lại 3 phương pháp bạn ấy áp dụng.",
      speaking: "Thuyết trình cá nhân 2 phút: 'Niềm vui lớn nhất của em trong môn tiếng Trung là gì?'. Ứng dụng '我认为', '在……看来'.",
      reading: "Đọc bài viết về phương pháp học tập tương tác đảo ngược (Flipped Classroom); nối từ vựng với định nghĩa phù hợp.",
      writing: "Viết đoạn văn 80–100 chữ kể về một lần em 'tưởng rằng' (以为) điều gì đó khó khăn nhưng khi bắt tay vào làm lại thấy rất thú vị."
    },
    culture: {
      title: "文化驿站: Khổng Tử và quan niệm 'Học nhi thời tập chi, bất diệc duyệt hồ'",
      content: "Câu mở đầu trong sách Luận Ngữ của Khổng Tử: '学而时习之，不亦说乎？' (Học mà thường xuyên ôn tập và thực hành, chẳng cũng vui sao?). Người xưa coi học tập không phải là gánh nặng ép buộc mà là niềm vui sướng nội tại khi trí óc được mở mang và hoàn thiện nhân cách. Tinh thần '我学习，我快乐' (Học tập mang lại niềm vui) chính là kế thừa tư tưởng hiếu học ngàn đời của văn hóa phương Đông."
    },
    quiz: [
      {
        q: "Chọn từ điền vào câu: '我______今天是晴天，没想到出门就下雨了。'",
        options: ["以为", "认为", "看见", "认识"],
        ans: 0,
        exp: "Sự việc thực tế trái ngược với suy đoán ban đầu, do đó bắt buộc phải dùng '以为' (tưởng rằng)."
      },
      {
        q: "Cụm từ '在我看来' có ý nghĩa tương đương với cách diễn đạt nào?",
        options: ["我认为", "我看见", "我在看", "看我"],
        ans: 0,
        exp: "'在我看来' nghĩa là 'theo quan điểm của tôi', đồng nghĩa với '我认为'."
      },
      {
        q: "Điền phó từ: '铃声响了，同学们______坐好准备上课。'",
        options: ["马上", "刚才", "经常", "往往"],
        ans: 0,
        exp: "'马上' biểu thị hành động diễn ra ngay lập tức sau khi có tín hiệu chuông reo."
      }
    ]
  },

  // Review Unit 2
  "r2": {
    num: "r2",
    isReview: true,
    topicId: 2,
    title_cn: "复习二",
    title_pinyin: "Fùxí èr",
    title_vi: "Ôn tập Chủ điểm 2",
    goals: [
      "Ôn tập từ vựng về trí tuệ cảm xúc (智商, 情商, 情绪, 积极) và học tập xã hội (讲座, 课外活动, 自信).",
      "Củng cố hệ thống ngữ pháp: Giới từ 对, 原来 (tính từ/phó từ), Bổ ngữ khả năng mở rộng, 在……看来, 马上, và cặp từ 以为 vs. 认为.",
      "Tích hợp chủ điểm 1 và 2: Viết bài luận ngắn về 'Cách người trẻ rèn luyện EQ để cân bằng giữa học tập và cuộc sống'."
    ],
    contentSummary: `
### 1. Tổng kết cấu trúc ngữ pháp Chủ điểm 2
- **Chỉ đối tượng tác động:** 对 + Đối tượng + V/Adj (Ví dụ: 对健康有好处, 对我很关心).
- **Phát hiện sự thật:** 原来 (Hóa ra: 原来是他! / Ban đầu: 原来的计划).
- **Bổ ngữ khả năng:** V + 得/不 + 了 (liǎo) / 清楚 / 动 (Biểu thị có đủ năng lực, điều kiện để hoàn thành hay không).
- **Trình bày quan điểm:** 在 + Người + 看来…… (Theo góc nhìn của ai).
- **Thời gian khẩn trương:** 马上 + V (Lập tức hành động).
- **Phân biệt nhận thức:** 以为 (Tưởng sai thực tế) vs. 认为 (Nhận định có căn cứ).
    `,
    quiz: [
      {
        q: "Điền từ: '经常跑步______心脏健康很有好处。'",
        options: ["对", "向", "在", "从"],
        ans: 0,
        exp: "Cấu trúc cố định: '对……有好处' (có lợi đối với...)."
      },
      {
        q: "Cặp từ nào thể hiện đúng sự đối lập giữa 'suy đoán sai' và 'nhận định thật'?",
        options: ["以为 —— 认为", "特别 —— 经常", "马上 —— 刚才", "向 —— 对"],
        ans: 0,
        exp: "'以为' chỉ ngộ nhận sai sự thật, còn '认为' là quan điểm nhận định khách quan."
      },
      {
        q: "Câu nào dưới đây thể hiện việc 'không thể nói rõ ràng được'?",
        options: ["说不清楚", "说得清楚", "不说明白", "没说清楚"],
        ans: 0,
        exp: "Bổ ngữ khả năng dạng phủ định là 'V + 不 + Bổ ngữ' -> '说不清楚'."
      }
    ]
  },

  6: {
    num: 6,
    topicId: 3,
    title_cn: "让环保成为一种习惯",
    title_pinyin: "Ràng huánbǎo chéngwéi yì zhǒng xíguàn",
    title_vi: "Biến bảo vệ môi trường thành thói quen",
    goals: [
      "Trao đổi về lối sống xanh, thói quen thân thiện với môi trường, phân loại rác và tiết kiệm năng lượng.",
      "Sử dụng câu kiêm ngữ với động từ cầu khiến '让' (làm cho, khiến cho, để cho).",
      "Vận dụng động từ năng nguyện '得' (děi - phải, cần phải) để đưa ra khuyến nghị hành động cấp thiết.",
      "Sử dụng phó từ '本来' (vốn dĩ) và cấu trúc giới hạn góc nhìn '对……来说'."
    ],
    vocab: [
      { hz: "环保", py: "huánbǎo", type: "danh từ / tính từ", vn: "bảo vệ môi trường, thân thiện môi trường", eg: "我们应该选择环保的生活方式。", eg_py: "Wǒmen yīnggāi xuǎnzé huánbǎo de shēnghuó fāngshì.", eg_vn: "Chúng ta nên lựa chọn lối sống thân thiện với môi trường." },
      { hz: "环境", py: "huánjìng", type: "danh từ", vn: "môi trường", eg: "保护自然环境是每个人的责任。", eg_py: "Bǎohù zìrán huánjìng shì měi ge rén de zérèn.", eg_vn: "Bảo vệ môi trường tự nhiên là trách nhiệm của mỗi người." },
      { hz: "习惯", py: "xíguàn", type: "danh từ / động từ", vn: "thói quen; quen với", eg: "随手关灯是一个好习惯。", eg_py: "Suíshǒu guāndēng shì yí ge hǎo xíguàn.", eg_vn: "Tiện tay tắt đèn là một thói quen tốt." },
      { hz: "保护", py: "bǎohù", type: "động từ", vn: "bảo vệ", eg: "我们要保护好绿水青山。", eg_py: "Wǒmen yào bǎohù hǎo lǜshuǐ qīngshān.", eg_vn: "Chúng ta cần bảo vệ tốt núi xanh nước biếc." },
      { hz: "节约", py: "jiéyuē", type: "động từ", vn: "tiết kiệm", eg: "在生活中，我们要节约用水、用电。", eg_py: "Zài shēnghuó zhōng, wǒmen yào jiéyuē yòngshuǐ, yòngdiàn.", eg_vn: "Trong cuộc sống, chúng ta phải tiết kiệm nước, tiết kiệm điện." },
      { hz: "垃圾", py: "lājī", type: "danh từ", vn: "rác, rác thải", eg: "请把垃圾扔进分类垃圾桶里。", eg_py: "Qǐng bǎ lājī rēng jìn fēnlèi lājītǒng lǐ.", eg_vn: "Xin hãy vứt rác vào đúng thùng rác phân loại." },
      { hz: "分类", py: "fēnlèi", type: "động từ / danh từ", vn: "phân loại", eg: "垃圾分类能促进资源的回收利用。", eg_py: "Lājī fēnlèi néng cùjìn zīyuán de huíshōu lìyòng.", eg_vn: "Phân loại rác có thể thúc đẩy việc tái chế tài nguyên." },
      { hz: "本来", py: "běnlái", type: "phó từ / tính từ", vn: "vốn dĩ, ban đầu", eg: "地球本来是非常干净美丽的。", eg_py: "Dìqiú běnlái shì fēicháng gānjìng měilì de.", eg_vn: "Trái Đất vốn dĩ rất sạch sẽ và tươi đẹp." },
      { hz: "得", py: "děi", type: "động từ năng nguyện", vn: "phải, cần phải", eg: "时间不早了，我们得马上出发。", eg_py: "Shíjiān bù zǎo le, wǒmen děi mǎshàng chūfā.", eg_vn: "Thời gian không còn sớm nữa, chúng ta phải xuất phát ngay." },
      { hz: "对……来说", py: "duì… lái shuō", type: "cụm cố định", vn: "đối với… mà nói", eg: "对学生来说，少用塑料袋是举手之劳。", eg_py: "Duì xuésheng lái shuō, shǎo yòng sùliàodài shì jǔshǒuzhīláo.", eg_vn: "Đối với học sinh, giảm dùng túi nilon là việc dễ dàng trong tầm tay." }
    ],
    dialogue: {
      title: "校园垃圾分类行动 (Chiến dịch phân loại rác học đường)",
      roles: ["李雷 (Lý Lôi)", "韩梅梅 (Hàn Mai Mai)"],
      lines: [
        { role: "李雷", hz: "梅梅，看我手里这个塑料瓶，该扔到哪个垃圾桶呢？", py: "Méimei, kàn wǒ shǒulǐ zhège sùliàopíng, gāi rēng dào nǎge lājītǒng ne?", vn: "Mai Mai ơi, nhìn cái chai nhựa trong tay tớ này, nên vứt vào thùng rác nào nhỉ?" },
        { role: "韩梅梅", hz: "塑料瓶属于可回收物，得扔进蓝色的可回收垃圾桶里。", py: "Sùliàopíng shǔyú kě huíshōuwù, děi rēng jìn lánsè de kě huíshōu lājītǒng lǐ.", vn: "Chai nhựa thuộc loại rác tái chế, phải vứt vào thùng rác tái chế màu xanh dương." },
        { role: "李雷", hz: "原来扔垃圾也有这么多学问！我本来以为随手扔掉就行了。", py: "Yuánlái rēng lājī yě yǒu zhème duō xuéwen! Wǒ běnlái yǐwéi suíshǒu rēng diào jiù xíng le.", vn: "Hóa ra vứt rác cũng có nhiều kiến thức thế! Ban đầu tớ cứ tưởng tiện tay vứt đi là được rồi." },
        { role: "韩梅梅", hz: "对我们中学生来说，保护环境要从小事做起。少用一次性饭盒，出门自备水杯，让环保成为一种日常习惯！", py: "Duì wǒmen zhōngxuéshēng lái shuō, bǎohù huánjìng yào cóng xiǎoshì zuòqǐ. Shǎo yòng yícìxìng fànhé, chūmén zìbèi shuǐbēi, ràng huánbǎo chéngwéi yì zhǒng rìcháng xíguàn!", vn: "Đối với học sinh chúng mình, bảo vệ môi trường phải làm từ việc nhỏ. Ít dùng hộp xốp một lần, ra ngoài tự mang bình nước, hãy biến bảo vệ môi trường thành một thói quen hằng ngày!" },
        { role: "李雷", hz: "你说得太对了，我们一起号召全班同学行动起来！", py: "Nǐ shuō de tài duì le, wǒmen yìqǐ hàozhào quánbān tóngxué xíngdòng qǐlai!", vn: "Cậu nói chuẩn quá, chúng mình cùng nhau kêu gọi cả lớp hành động đi!" }
      ],
      checkQuestion: {
        q: "韩梅梅建议塑料瓶应该扔到什么颜色的垃圾桶？",
        options: ["蓝色的可回收垃圾桶", "红色的有害垃圾桶", "绿色的厨余垃圾桶", "灰色的其他垃圾桶"],
        ans: 0,
        exp: "Hàn Mai Mai nhắc: '塑料瓶属于可回收物，得扔进蓝色的可回收垃圾桶里。'"
      }
    },
    grammar: [
      {
        name: "Câu kiêm ngữ với động từ cầu khiến: 让 (Khiến cho / Để cho / Biến thành)",
        desc: "Động từ '让' biểu thị sự thúc đẩy, cho phép, yêu cầu hoặc làm cho đối tượng đạt đến một trạng thái hay thực hiện một hành động.",
        formula: "Chủ ngữ + 让 + Tân ngữ (kiêm Chủ ngữ 2) + Động từ / Tính từ",
        examples: [
          { hz: "让环保成为一种习惯。", py: "Ràng huánbǎo chéngwéi yì zhǒng xíguàn.", vn: "Hãy biến việc bảo vệ môi trường thành một thói quen." },
          { hz: "绿色校园让我们感到很自豪。", py: "Lǜsè xiàoyuán ràng wǒmen gǎndào hěn zìháo.", vn: "Khuôn viên trường học xanh làm chúng tôi cảm thấy rất tự hào." }
        ]
      },
      {
        name: "Động từ năng nguyện: 得 (děi - Phải / Cần phải)",
        desc: "Đọc là 'děi', đứng trước động từ để biểu thị sự tất yếu, bắt buộc theo lẽ thường hoặc quy định. Lưu ý phân biệt với trợ từ kết cấu '得' (de) trong bổ ngữ trạng thái.",
        formula: "Chủ ngữ + 得 (děi) + Động từ + Tân ngữ",
        examples: [
          { hz: "我们得节约每一滴水。", py: "Wǒmen děi jiéyuē měi yì dī shuǐ.", vn: "Chúng ta cần phải tiết kiệm từng giọt nước." },
          { hz: "要想考出好成绩，你得加倍努力。", py: "Yào xiǎng kǎochū hǎo chéngjì, nǐ děi jiābèi nǔlì.", vn: "Muốn thi đạt thành tích tốt, bạn phải nỗ lực gấp bội." }
        ],
        mistakeCheck: {
          wrong: "跑得 (děi) 很快。(Sai cách phát âm và chức năng)",
          right: "跑得 (de) 很快 / 今天我得 (děi) 早起。",
          note: "Khi đứng sau động từ để liên kết bổ ngữ thì đọc là 'de'; khi đứng trước động từ mang nghĩa 'phải' thì đọc là 'děi'."
        }
      },
      {
        name: "Cấu trúc giới hạn nhận định: 对……来说 (Đối với... mà nói)",
        desc: "Đứng ở đầu câu nhằm nhấn mạnh phát biểu từ góc độ, hoàn cảnh hoặc đối tượng cụ thể.",
        formula: "对 + Đối tượng + 来说，Phân câu nhận định",
        examples: [
          { hz: "对大家来说，节约资源是一件很容易做到的事。", py: "Duì dàjiā lái shuō, jiéyuē zīyuán shì yí jiàn hěn róngyì zuòdào de shì.", vn: "Đối với mọi người mà nói, tiết kiệm tài nguyên là việc rất dễ làm được." },
          { hz: "对他来说，早起跑步是每天的必修课。", py: "Duì tā lái shuō, zǎoqǐ pǎobù shì měitiān de bìxiūkè.", vn: "Đối với anh ấy mà nói, dậy sớm chạy bộ là bài học bắt buộc mỗi ngày." }
        ]
      }
    ],
    skills: {
      listening: "Nghe hướng dẫn phân loại 4 nhóm rác thải chính tại các đô thị (Rác tái chế, rác nhà bếp, rác nguy hại, rác khác); nối đúng đồ vật với màu thùng rác.",
      speaking: "Thảo luận đôi: 'Lớp học của chúng ta có thể làm gì để tiết kiệm điện và giảm thiểu rác thải nhựa?'. Sử dụng mẫu câu '我们得……', '让……'.",
      reading: "Đọc hiểu áp phích tuyên truyền về 'Giờ Trái Đất' (地球一小时); trả lời câu hỏi về thời gian, ý nghĩa và thông điệp hành động.",
      writing: "Soạn thảo một khẩu hiệu bảo vệ môi trường ngắn gọn (từ 10–15 chữ Hán) để dán tại hành lang lớp học."
    },
    culture: {
      title: "文化驿站: Tư tưởng 'Thiên nhân hợp nhất' (天人合一) và bảo vệ môi trường",
      content: "Triết học cổ đại Trung Hoa coi con người và giới tự nhiên là một thể thống nhất hữu cơ, gọi là **天人合一** (Tiān rén hé yī). Trang Tử viết: 'Thiên địa dữ ngã tịnh sinh, vạn vật dữ ngã vi nhất' (Trời đất cùng sinh với ta, vạn vật cùng ta là một). Sống hòa hợp với thiên nhiên, không tàn phá cạn kiệt tài nguyên rừng và nguồn nước chính là truyền thống đạo đức sinh thái lâu đời. Ngày nay, Trung Quốc đẩy mạnh chiến lược 'Lục thủy thanh sơn tựu thị kim sơn ngân sơn' (Núi xanh nước biếc chính là núi vàng núi bạc), khẳng định phát triển kinh tế phải đi đôi với bảo tồn môi trường."
    },
    quiz: [
      {
        q: "Trong câu: '保护地球，人人______负责。', từ nào điền vào mang nghĩa 'phải/cần'?",
        options: ["得 (děi)", "得 (de)", "在", "被"],
        ans: 0,
        exp: "Động từ năng nguyện '得' (děi) đứng trước vị ngữ mang nghĩa bắt buộc: 'mỗi người đều phải chịu trách nhiệm'."
      },
      {
        q: "Điền từ thích hợp: '______中学生来说，垃圾分类是一件很有意义的事。'",
        options: ["对", "向", "为", "从"],
        ans: 0,
        exp: "Cấu trúc định hình quan điểm: '对……来说' (Đối với... mà nói)."
      },
      {
        q: "Đâu là một hành động thiết thực của lối sống '环保'?",
        options: [
          "出门自带环保水杯，少用塑料袋",
          "每次去超市都买很多一次性餐具",
          "洗手时不关水龙头",
          "把电池和厨余垃圾混在一起扔"
        ],
        ans: 0,
        exp: "Tự mang cốc nước, hạn chế túi nilon là hành động cụ thể để bảo vệ môi trường."
      }
    ]
  },

  7: {
    num: 7,
    topicId: 3,
    title_cn: "信息污染与社会环境保护",
    title_pinyin: "Xìnxī wūrǎn yǔ shèhuì huánjìng bǎohù",
    title_vi: "Ô nhiễm thông tin và bảo vệ môi trường xã hội",
    goals: [
      "Nhận diện hiện tượng quá tải thông tin, tin giả, tin rác trên không gian mạng và ảnh hưởng tiêu cực của chúng.",
      "Sử dụng giới từ '由' biểu thị chủ thể thực hiện hoặc nguồn gốc phát sinh.",
      "Vận dụng phó từ / động từ '比较' biểu thị mức độ tương đối ('khá') hoặc so sánh.",
      "Sử dụng đại từ '每' kết hợp lượng từ để khái quát từng đơn vị; nắm quy trình kiểm chứng nguồn tin."
    ],
    vocab: [
      { hz: "信息", py: "xìnxī", type: "danh từ", vn: "thông tin", eg: "互联网上有海量的信息。", eg_py: "Hùliánwǎng shang yǒu hǎiliàng de xìnxī.", eg_vn: "Trên mạng Internet có lượng thông tin khổng lồ." },
      { hz: "污染", py: "wūrǎn", type: "danh từ / động từ", vn: "ô nhiễm; làm ô nhiễm", eg: "网络虚假信息也是一种信息污染。", eg_py: "Wǎngluò xūjiǎ xìnxī yě shì yì zhǒng xìnxī wūrǎn.", eg_vn: "Thông tin giả trên mạng cũng là một dạng ô nhiễm thông tin." },
      { hz: "社会", py: "shèhuì", type: "danh từ", vn: "xã hội", eg: "营造健康的社会文化环境很重要。", eg_py: "Yíngzào jiànkāng de shèhuì wénhuà huánjìng hěn zhòngyào.", eg_vn: "Xây dựng môi trường văn hóa xã hội lành mạnh là rất quan trọng." },
      { hz: "环境保护", py: "huánjìng bǎohù", type: "cụm danh từ", vn: "bảo vệ môi trường", eg: "社会环境保护包括网络空间的净化。", eg_py: "Shèhuì huánjìng bǎohù bāokuò wǎngluò kōngjiān de jìnghuà.", eg_vn: "Bảo vệ môi trường xã hội bao gồm cả việc làm sạch không gian mạng." },
      { hz: "网络", py: "wǎngluò", type: "danh từ", vn: "mạng Internet, không gian mạng", eg: "我们在网络上要文明发言。", eg_py: "Wǒmen zài wǎngluò shang yào wénmíng fāyán.", eg_vn: "Chúng ta cần phát ngôn văn minh trên mạng Internet." },
      { hz: "由", py: "yóu", type: "giới từ", vn: "do, bởi; từ", eg: "这次活动由学生会负责组织。", eg_py: "Zhè cì huódòng yóu xuéshēnghuì fùzé zǔzhī.", eg_vn: "Hoạt động lần này do hội học sinh chịu trách nhiệm tổ chức." },
      { hz: "比较", py: "bǐjiào", type: "phó từ / động từ", vn: "khá, tương đối; so sánh", eg: "这条新闻的可靠性比较高。", eg_py: "Zhè tiáo xīnwén de kěkàoxìng bǐjiào gāo.", eg_vn: "Độ tin cậy của bản tin này tương đối cao." },
      { hz: "每", py: "měi", type: "đại từ", vn: "mỗi, mọi", eg: "每个人都应该对自己的网上言论负责。", eg_py: "Měi ge rén dōu yīnggāi duì zìjǐ de wǎngshang yánlùn fùzé.", eg_vn: "Mỗi người đều nên chịu trách nhiệm với phát ngôn trên mạng của mình." },
      { hz: "来源", py: "láiyuán", type: "danh từ / động từ", vn: "nguồn, nguồn gốc", eg: "转发消息前要核实信息的来源。", eg_py: "Zhuǎnfā xiāoxi qián yào héshí xìnxī de láiyuán.", eg_vn: "Trước khi chuyển tiếp tin tức cần xác minh nguồn tin." },
      { hz: "事实", py: "shìshí", type: "danh từ", vn: "sự thật, dữ kiện thực tế", eg: "我们要以事实为依据，不信谣不传谣。", eg_py: "Wǒmen yào yǐ shìshí wéi yījù, bù xìnyáo bù chuányáo.", eg_vn: "Chúng ta cần dựa trên sự thật, không tin tin đồn, không lan truyền tin đồn." }
    ],
    dialogue: {
      title: "辨别网络真假消息 (Phân biệt tin tức thật giả trên mạng)",
      roles: ["小静 (Tiểu Tĩnh)", "张强 (Trương Cường)"],
      lines: [
        { role: "小静", hz: "张强，你看到朋友圈发的那条关于明天停水的通知了吗？", py: "Zhāng Qiáng, nǐ kàndào péngyouquān fā de nà tiáo guānyú míngtiān tíngshuǐ de tōngzhī le ma?", vn: "Trương Cường, cậu đã thấy thông báo ngày mai cúp nước đăng trên vòng bạn bè chưa?" },
        { role: "张强", hz: "我看到了，不过我觉得这则消息来源比较可疑，没有任何官方盖章。", py: "Wǒ kàndào le, búguò wǒ juéde zhè zé xiāoxi láiyuán bǐjiào kěyí, méiyǒu rènhé guānfāng gàizhāng.", vn: "Tớ thấy rồi, nhưng tớ thấy nguồn tin này khá đáng ngờ, không hề có đóng dấu chính thức nào cả." },
        { role: "小静", hz: "那我们该怎么核实呢？", py: "Nà wǒmen gāi zěnme héshí ne?", vn: "Thế chúng mình phải xác minh bằng cách nào?" },
        { role: "张强", hz: "官方消息通常由供水公司或政府公众号发布。我们得先查阅官方网站，弄清楚事实，千万不要随意转发谣言。", py: "Guānfāng xiāoxi tōngcháng yóu gōngshuǐ gōngsī huò zhèngfǔ gōngzhònghào fābù. Wǒmen děi xiān cháyuè guānfāng wǎngzhàn, nòng qīngchu shìshí, qiānwàn bú yào suíyì zhuǎnfā yáoyán.", vn: "Tin chính thức thường do công ty cấp nước hoặc tài khoản công chúng chính phủ công bố. Chúng mình phải tra cứu trang web chính thức trước, làm rõ sự thật, tuyệt đối không tùy tiện chia sẻ tin đồn." },
        { role: "小静", hz: "你说得对，网络环境也需要我们每个人共同维护！", py: "Nǐ shuō de duì, wǎngluò huánjìng yě xūyào wǒmen měi ge rén gòngtóng wéihù!", vn: "Cậu nói đúng lắm, môi trường mạng cũng cần mỗi người chúng ta cùng nhau gìn giữ!" }
      ],
      checkQuestion: {
        q: "张强建议如何核实停水消息的真假？",
        options: ["查阅供水公司官方网站核实事实", "立刻转发给所有亲戚朋友", "马上打电话向警察报警", "不管真假，直接在网上留言批评"],
        ans: 0,
        exp: "Trương Cường nêu rõ: '官方消息通常由供水公司……发布。我们得先查阅官方网站，弄清楚事实。'"
      }
    },
    grammar: [
      {
        name: "Giới từ: 由 (Do / Bởi / Từ... phát sinh)",
        desc: "Dùng để giới thiệu chủ thể đảm đương, phụ trách hoặc nguồn gốc của công việc.",
        formula: "Sự việc + 由 + Người / Cơ quan + Động từ (phụ trách / tổ chức / quyết định)",
        examples: [
          { hz: "这个调查报告由我们小组负责完成。", py: "Zhège diàochá bàogào yóu wǒmen xiǎozǔ fùzé wánchéng.", vn: "Báo cáo khảo sát này do nhóm chúng tôi chịu trách nhiệm hoàn thành." },
          { hz: "信息由网络平台向社会公开发布。", py: "Xìnxī yóu wǎngluò píngtái xiàng shèhuì gōngkāi fābù.", vn: "Thông tin được nền tảng mạng công bố công khai tới xã hội." }
        ]
      },
      {
        name: "Phó từ mức độ: 比较 (Khá / Tương đối)",
        desc: "Đứng trước tính từ hoặc động từ tâm lí để biểu thị mức độ tương đối cao nhưng không quá tuyệt đối.",
        formula: "Chủ ngữ + 比较 + Tính từ / Động từ tâm lí",
        examples: [
          { hz: "这个网站发布的新闻比较可靠。", py: "Zhège wǎngzhàn fābù de xīnwén bǐjiào kěkào.", vn: "Tin tức do trang web này công bố tương đối đáng tin cậy." },
          { hz: "他最近学习比较忙。", py: "Tā zuìjìn xuéxí bǐjiào máng.", vn: "Dạo gần đây bạn ấy học tập khá bận rộn." }
        ]
      },
      {
        name: "Đại từ chỉ từng đơn vị: 每 + Lượng từ / Danh từ thời gian",
        desc: "Dùng để chỉ từng cá thể trong một tập thể, vế sau thường đi kèm phó từ '都' để khái quát hóa toàn bộ.",
        formula: "每 + Lượng từ + Danh từ + 都 + Vị ngữ",
        examples: [
          { hz: "每个人都要遵守网络道德。", py: "Měi ge rén dōu yào zūnshǒu wǎngluò dàodé.", vn: "Mỗi người đều phải tuân thủ đạo đức mạng." },
          { hz: "他每天都浏览官方新闻。", py: "Tā měitiān dōu liúlǎn guānfāng xīnwén.", vn: "Mỗi ngày anh ấy đều xem lướt tin tức chính thức." }
        ]
      }
    ],
    skills: {
      listening: "Nghe bản tin cảnh báo về các thủ đoạn lừa đảo qua mạng xã hội; ghi lại 3 khuyến cáo an toàn thông tin.",
      speaking: "Thảo luận nhóm: 'Làm thế nào để xây dựng một văn hóa bình luận tích cực trên mạng xã hội?'. Dùng '比较', '由……负责'.",
      reading: "Đọc bài viết phân tích khái niệm 'Ô nhiễm thông tin' (信息污染); lập bảng so sánh giữa tin tức dựa trên sự thật (事实) và tin giả (谣言).",
      writing: "Viết cẩm nang 4 bước kiểm chứng tin tức online (Check-list kiểm tra tính xác thực của bài viết)."
    },
    culture: {
      title: "文化驿站: Cổ huấn 'Tin đồn dừng lại ở người thông thái' (谣言止于智者)",
      content: "Câu danh ngôn cổ **谣言止于智者** (Yáoyán zhǐ yú zhìzhě) xuất xứ từ sách *Tuân Tử: Đại lược*: 'Lưu ngôn chỉ vu trí giả' (Lời đồn đại vô căn cứ truyền đến người có trí tuệ và hiểu biết thì sẽ tự khắc dừng lại). Trong kỉ nguyên số với hàng tỉ luồng thông tin tràn ngập mỗi giây, việc giữ cho tâm trí tỉnh táo, có tư duy phản biện, luôn đối chiếu với '事实' (sự thật khách quan) chính là phẩm chất 'Trí giả' hiện đại, giúp làm sạch môi trường sinh thái xã hội."
    },
    quiz: [
      {
        q: "Chọn từ điền vào chỗ trống: '班级的新闻小报______宣传委员负责编辑。'",
        options: ["由", "从", "向", "为"],
        ans: 0,
        exp: "Giới từ '由' chỉ chủ thể chịu trách nhiệm: 'do ủy viên tuyên truyền phụ trách'."
      },
      {
        q: "Câu nào dưới đây dùng đúng đại từ '每'?",
        options: [
          "每个公民都应该遵守法律。",
          "每公民应该遵守法律。",
          "每个公民都应该遵守法律每。",
          "每个都公民应该遵守法律。"
        ],
        ans: 0,
        exp: "Sau '每' bắt buộc phải có lượng từ '个' trước danh từ '公民': '每个公民'."
      },
      {
        q: "Thành ngữ '谣言止于智者' khuyên chúng ta điều gì trong môi trường thông tin số?",
        options: [
          "Không tin và không lan truyền tin đồn thất thiệt",
          "Thấy tin lạ phải chuyển tiếp ngay lập tức",
          "Không bao giờ đọc tin tức trên mạng",
          "Chỉ tin vào tin tức của bạn bè gửi riêng"
        ],
        ans: 0,
        exp: "'Tin đồn dừng lại ở người thông thái' khuyên con người biết tỉnh táo phân biệt thật giả, không phát tán tin thất thiệt."
      }
    ]
  },

  8: {
    num: 8,
    topicId: 3,
    title_cn: "绿色食品",
    title_pinyin: "Lǜsè shípǐn",
    title_vi: "Thực phẩm xanh",
    goals: [
      "Hỏi và trình bày về nguồn gốc, quy trình sản xuất sạch và tiêu chuẩn an toàn thực phẩm.",
      "Sử dụng phó từ '究竟' (rốt cuộc, thực ra) để nhấn mạnh sự truy tìm bản chất trong câu hỏi.",
      "Vận dụng lượng từ số lần đi lại '趟' (tàng - chuyến, lượt).",
      "Sử dụng giới từ '为' biểu thị đối tượng phục vụ hoặc mục đích hành động."
    ],
    vocab: [
      { hz: "绿色食品", py: "lǜsè shípǐn", type: "cụm danh từ", vn: "thực phẩm xanh, thực phẩm hữu cơ sạch", eg: "购买绿色食品有助于身体健康。", eg_py: "Gòumǎi lǜsè shípǐn yǒuzhùyú shēntǐ jiànkāng.", eg_vn: "Mua thực phẩm xanh có lợi cho sức khỏe thể chất." },
      { hz: "食品", py: "shípǐn", type: "danh từ", vn: "thực phẩm, đồ ăn thức uống", eg: "食品安全是全社会关注的热点。", eg_py: "Shípǐn ānquán shì quán shèhuì guānzhù de rèdiǎn.", eg_vn: "An toàn thực phẩm là tâm điểm chú ý của toàn xã hội." },
      { hz: "新鲜", py: "xīnxiān", type: "tính từ", vn: "tươi, tươi mới", eg: "这些蔬菜刚从菜园摘下来，非常新鲜。", eg_py: "Zhèxiē shūcài gāng cóng càiyuán zhāi xiàlai, fēicháng xīnxiān.", eg_vn: "Chỗ rau này vừa hái từ vườn về, vô cùng tươi non." },
      { hz: "健康", py: "jiànkāng", type: "tính từ / danh từ", vn: "khỏe mạnh; sức khỏe", eg: "少吃油炸食品能保持身体健康。", eg_py: "Shǎo chī yóuzhà shípǐn néng bǎochí shēntǐ jiànkāng.", eg_vn: "Bớt ăn đồ chiên rán có thể giữ gìn sức khỏe." },
      { hz: "质量", py: "zhìliàng", type: "danh từ", vn: "chất lượng", eg: "这家有机农场的产品质量很过硬。", eg_py: "Zhè jiā yǒujī nóngchǎng de chǎnpǐn zhìliàng hěn guòyìng.", eg_vn: "Chất lượng sản phẩm nông trại hữu cơ này rất đảm bảo." },
      { hz: "选择", py: "xuǎnzé", type: "động từ / danh từ", vn: "lựa chọn", eg: "选购蔬菜要看是否有绿色认证标志。", eg_py: "Xuǎngòu shūcài yào kàn shìfǒu yǒu lǜsè rènzhèng biāozhì.", eg_vn: "Chọn mua rau củ cần xem có nhãn chứng nhận thực phẩm xanh hay không." },
      { hz: "究竟", py: "jiūjìng", type: "phó từ", vn: "rốt cuộc, thực chất", eg: "绿色食品究竟有哪些严格标准？", eg_py: "Lǜsè shípǐn jiūjìng yǒu nǎxiē yángé biāozhǔn?", eg_vn: "Thực phẩm xanh rốt cuộc có những tiêu chuẩn khắt khe nào?" },
      { hz: "趟", py: "tàng", type: "lượng từ", vn: "lượt, chuyến (đi và về)", eg: "为了调查农产品，他亲自去了一趟农村。", eg_py: "Wèile diàochá nóngchǎnpǐn, tā qīnzì qù le yí tàng nóngcūn.", eg_vn: "Để khảo sát nông sản, anh ấy đã đích thân đi một chuyến về nông thôn." },
      { hz: "为", py: "wèi", type: "giới từ", vn: "vì, cho, nhằm", eg: "学校食堂为师生提供绿色营养午餐。", eg_py: "Xuéxiào shítáng wèi shīshēng tígōng lǜsè yíngyǎng wǔcān.", eg_vn: "Nhà ăn trường học cung cấp bữa trưa dinh dưỡng sạch cho thầy trò." },
      { hz: "购买", py: "gòumǎi", type: "động từ", vn: "mua, chọn mua (trang trọng)", eg: "消费者可以通过手机扫描二维码购买原产地农产品。", eg_py: "Xiāofèizhě kěyǐ tōngguò shǒujī sǎomiáo èrwéimǎ gòumǎi yuánchǎndì nóngchǎnpǐn.", eg_vn: "Người tiêu dùng có thể quét mã QR qua điện thoại để mua nông sản tận nguồn." }
    ],
    dialogue: {
      title: "探访有机绿色农场 (Chuyến thăm nông trại hữu cơ xanh)",
      roles: ["小雨 (Tiểu Vũ)", "农场主 (Chủ trang trại)"],
      lines: [
        { role: "小雨", hz: "叔叔您好，市场上常说绿色食品，这究竟是什么意思呢？", py: "Shūshu nǐhǎo, shìchǎng shang cháng shuō lǜsè shípǐn, zhè jiūjìng shì shénme yìsi ne?", vn: "Chào chú ạ, ngoài chợ thường nhắc đến thực phẩm xanh, điều này rốt cuộc có nghĩa là gì ạ?" },
        { role: "农场主", hz: "哈哈，绿色食品可不是指颜色是绿色的！它指的是无污染、安全、优质的营养类食品。", py: "Hāhā, lǜsè shípǐn kě bú shì zhǐ yánsè shì lǜsè de! Tā zhǐ de shì wú wūrǎn, ānquán, yōuzhì de yíngyǎng lèi shípǐn.", vn: "Haha, thực phẩm xanh không phải nói màu sắc xanh lá cây đâu cháu! Nó chỉ các loại thực phẩm dinh dưỡng an toàn, không ô nhiễm và chất lượng cao." },
        { role: "小雨", hz: "那种植过程中有什么特殊要求吗？", py: "Nà zhòngzhí guòchéng zhōng yǒu shénme tèshū yāoqiú ma?", vn: "Vậy trong quá trình trồng trọt có yêu cầu đặc biệt gì không chú?" },
        { role: "农场主", hz: "土壤、空气和水源都得经过严格检验，不使用化学农药。为了保证质量，农业专家每个月都来我们农场好几趟呢！", py: "Tǔrǎng, kōngqì hé shuǐyuán dōu děi jīngguò yángé jiǎnyàn, bù shǐyòng huàxué nóngyào. Wèile bǎozhèng zhìliàng, nóngyè zhuānjiā měi ge yuè dōu lái wǒmen nóngchǎng hǎojǐ tàng ne!", vn: "Đất đai, không khí và nguồn nước đều phải qua kiểm nghiệm ngặt nghèo, không dùng thuốc trừ sâu hóa học. Để đảm bảo chất lượng, các chuyên gia nông nghiệp mỗi tháng đều đến nông trại chúng tôi mấy chuyến đấy!" },
        { role: "小雨", hz: "太棒了！只有这样严格生产出来的食品，才能为广大消费者的健康保驾护航。", py: "Tài bàng le! Zhǐyǒu zhèyàng yángé shēngchǎn chūlái de shípǐn, cái néng wèi guǎngdà xiāofèizhě de jiànkāng bǎojiàhùháng.", vn: "Tuyệt quá ạ! Chỉ có thực phẩm sản xuất nghiêm ngặt thế này mới có thể bảo vệ sức khỏe cho đông đảo người tiêu dùng." }
      ],
      checkQuestion: {
        q: "“绿色食品”的真正含义是什么？",
        options: ["无污染、安全、优质的营养食品", "颜色必须是绿色的蔬菜", "价格最便宜的农产品", "所有进口的外国食品"],
        ans: 0,
        exp: "Chủ trang trại giải thích: '它指的是无污染、安全、优质的营养类食品。'"
      }
    },
    grammar: [
      {
        name: "Phó từ nhấn mạnh câu hỏi: 究竟 (Rốt cuộc / Thực chất)",
        desc: "Dùng trong câu hỏi có đại từ nghi vấn (谁, 什么, 怎么) hoặc câu hỏi lựa chọn (A 还是 B) để nhấn mạnh sự truy vấn đến cùng sự thật.",
        formula: "Chủ ngữ + 究竟 + Đại từ nghi vấn / Cụm nghi vấn?",
        examples: [
          { hz: "这件事究竟是谁做的？", py: "Zhè jiàn shì jiūjìng shì shéi zuò de?", vn: "Chuyện này rốt cuộc là ai làm?" },
          { hz: "你究竟去还是不去？", py: "Nǐ jiūjìng qù háishi bú qù?", vn: "Cậu rốt cuộc đi hay là không đi?" }
        ]
      },
      {
        name: "Lượng từ động lượng: 趟 (Lượt / Chuyến)",
        desc: "'趟' (tàng) dùng để đếm số lần của hành động di chuyển khứ hồi (đi và trở về trọn vẹn).",
        formula: "Động từ di chuyển (去, 来, 走, 跑) + Số từ + 趟",
        examples: [
          { hz: "我昨天去了一趟超市买新鲜水果。", py: "Wǒ zuótiān qù le yí tàng chāoshì mǎi xīnxiān shuǐguǒ.", vn: "Hôm qua tôi đã đi một chuyến siêu thị mua hoa quả tươi." },
          { hz: "上个月他回了老家两趟。", py: "Shàng ge yuè tā huí le lǎojiā liǎng tàng.", vn: "Tháng trước anh ấy đã về quê hai chuyến." }
        ]
      },
      {
        name: "Giới từ: 为 (Vì / Cho / Nhằm phục vụ)",
        desc: "Đọc thanh 4 'wèi', đứng trước đối tượng được thụ hưởng hoặc mục đích của hành động.",
        formula: "Chủ ngữ + 为 + Đối tượng + Động từ + Tân ngữ",
        examples: [
          { hz: "这家公司为学校提供绿色食品。", py: "Zhè jiā gōngsī wèi xuéxiào tígōng lǜsè shípǐn.", vn: "Công ty này cung cấp thực phẩm sạch cho trường học." },
          { hz: "全心全意为人民服务。", py: "Quánxīnquányì wèi rénmín fúwù.", vn: "Hết lòng hết sức phục vụ nhân dân." }
        ]
      }
    ],
    skills: {
      listening: "Nghe bài giới thiệu về tiêu chuẩn 3 cấp thực phẩm an toàn tại Trung Quốc (Vô công hại - Không chất độc hại, Thực phẩm Xanh, Thực phẩm Hữu cơ); phân loại đúng biểu tượng nhãn mác.",
      speaking: "Đóng vai người bán hàng và khách mua tại chợ nông sản hữu cơ; khách hỏi về nguồn gốc sản phẩm sử dụng '究竟', người bán giải thích dùng '为'.",
      reading: "Đọc hiểu nhãn thành phần dinh dưỡng và hướng dẫn truy xuất nguồn gốc trên bao bì sản phẩm nông sản sạch.",
      writing: "Viết đoạn văn ngắn 80 chữ giới thiệu một loại nông sản hoặc món ăn đặc sản tươi ngon tại địa phương em."
    },
    culture: {
      title: "文化驿站: Triết lí ẩm thực 'Dân dĩ thực vi thiên' (民以食为天) và văn hóa ẩm thực dưỡng sinh",
      content: "Câu thành ngữ nổi tiếng **民以食为天** (Mín yǐ shí wéi tiān - Dân lấy cái ăn làm trời, xem ăn uống là trọng nhất) ghi nhận vị trí tối thượng của lương thực đối với sự ấm no và ổn định xã hội. Ẩm thực truyền thống Trung Hoa coi trọng 'Dược thực đồng nguyên' (Thuốc và thức ăn cùng chung nguồn cội). Chọn thực phẩm sạch, theo mùa ('Bất thời, bất thực' - không đúng mùa thì không ăn) chính là cách bảo vệ sức khỏe thuận theo quy luật tự nhiên."
    },
    quiz: [
      {
        q: "Điền lượng từ phù hợp: '为了买到真正的有机蔬菜，妈妈亲自去了一______郊区的农场。'",
        options: ["趟", "本", "位", "张"],
        ans: 0,
        exp: "'趟' (tàng) là lượng từ động lượng chuyên dùng cho hành trình đi lại: '去了一趟' (đi một chuyến)."
      },
      {
        q: "Từ '究竟' trong câu: '他究竟去哪儿了？' có tác dụng gì?",
        options: ["Nhấn mạnh sự thắc mắc, truy hỏi bản chất vấn đề", "Biểu thị hành động đã kết thúc", "Chỉ phương hướng di chuyển", "Biểu thị nguyên nhân kết quả"],
        ans: 0,
        exp: "'究竟' đứng trong câu nghi vấn để nhấn mạnh thắc mắc rốt cuộc là sự tình ra sao."
      },
      {
        q: "Chọn giới từ thích hợp: '志愿者们正在______灾区群众准备救灾物资。'",
        options: ["为", "在", "向", "从"],
        ans: 0,
        exp: "'为' biểu thị hành động làm vì/cho đối tượng thụ hưởng: 'chuẩn bị đồ cứu trợ cho quần chúng vùng thiên tai'."
      }
    ]
  },

  // Review Unit 3
  "r3": {
    num: "r3",
    isReview: true,
    topicId: 3,
    title_cn: "复习三",
    title_pinyin: "Fùxí sān",
    title_vi: "Ôn tập Chủ điểm 3",
    goals: [
      "Tổng kết toàn bộ vốn từ vựng về sinh thái, bảo vệ môi trường, xã hội thông tin và thực phẩm an toàn.",
      "Làm chủ 9 cấu trúc ngữ pháp then chốt: Động từ cầu khiến 让, Động từ năng nguyện 得 (děi), 对……来说, Giới từ 由, Phó từ 比较, Lượng từ 每, Phó từ nghi vấn 究竟, Lượng từ 趟, Giới từ 为.",
      "Dự án tích hợp: Thiết kế áp phích tuyên truyền song ngữ Trung - Việt về 'Hành động xanh vì Trái Đất và Môi trường số lành mạnh'."
    ],
    contentSummary: `
### 1. Tổng kết cấu trúc ngữ pháp Chủ điểm 3
- **Cầu khiến & Mệnh lệnh:** 让 + Tân ngữ + V/Adj (Biến thành, làm cho...: 让环保成为一种习惯).
- **Tính cấp thiết:** 得 (děi) + V (Phải làm gì: 我们得节约每一滴水).
- **Phạm vi nhận định:** 对……来说 (Xét đối với ai: 对学生来说).
- **Chủ thể gánh vác:** 由 + Người + V (Do ai làm: 由学生会组织).
- **Mức độ & Phổ quát:** 比较 (Khá/Tương đối), 每……都…… (Mỗi cá thể).
- **Nhấn mạnh nghi vấn:** 究竟……？ (Rốt cuộc/Thực ra: 究竟是怎么回事？).
- **Động lượng & Mục đích:** Số từ + 趟 (Lượt chuyến), 为……服务 / 提供 (Vì/Cho).
    `,
    quiz: [
      {
        q: "Chọn câu có trật tự từ ĐÚNG:",
        options: [
          "这个环保活动由学校团委组织。",
          "学校团委由这个环保活动组织。",
          "由这个环保活动学校团委组织。",
          "这个环保活动学校团委由组织。"
        ],
        ans: 0,
        exp: "Cấu trúc chuẩn: Sự việc + 由 + Chủ thể đảm nhiệm + Vị ngữ."
      },
      {
        q: "Từ '得' trong câu nào dưới đây đọc là 'děi'?",
        options: [
          "时间不早了，我们得走了。",
          "他跑得非常快。",
          "汉字写得很漂亮。",
          "你觉得汉语难不难？"
        ],
        ans: 0,
        exp: "Trong câu 'chúng ta phải đi thôi', '得' đóng vai trò động từ năng nguyện đọc là 'děi'."
      },
      {
        q: "Thành ngữ '天人合一' phản ánh tư tưởng truyền thống nào của phương Đông?",
        options: [
          "Con người và tự nhiên sống hòa hợp gắn bó",
          "Con người phải chinh phục và khai thác thiên nhiên",
          "Con người tách biệt hoàn toàn với môi trường",
          "Thiên nhiên chỉ có ý nghĩa đối với nông dân"
        ],
        ans: 0,
        exp: "'Thiên nhân hợp nhất' là tư tưởng con người hòa hợp cùng giới tự nhiên như một thể thống nhất."
      }
    ]
  },

  9: {
    num: 9,
    topicId: 4,
    title_cn: "未来城市",
    title_pinyin: "Wèilái chéngshì",
    title_vi: "Thành phố tương lai",
    goals: [
      "Miêu tả diện mạo thành phố tương lai: giao thông thông minh, tàu điện ngầm, nhà ở sinh thái, dịch vụ công nghệ số.",
      "Nắm vững đặc điểm ngữ pháp của Từ li hợp (离合词) và quy tắc chèn thành phần vào giữa cụm động tân.",
      "Phân biệt chính xác giữa phó từ tần suất '经常' (thường xuyên) và '往往' (thường thường - quy luật có xu hướng trong điều kiện nhất định).",
      "Sử dụng các trạng từ chỉ tương lai '将来 / 以后' và cấu trúc tiến triển '越来越……'."
    ],
    vocab: [
      { hz: "未来", py: "wèilái", type: "danh từ", vn: "tương lai", eg: "科技将改变我们未来的生活。", eg_py: "Kējì jiāng gǎibiàn wǒmen wèilái de shēnghuó.", eg_vn: "Khoa học công nghệ sẽ thay đổi cuộc sống tương lai của chúng ta." },
      { hz: "城市", py: "chéngshì", type: "danh từ", vn: "thành phố, đô thị", eg: "未来的城市将更加智能化和生态化。", eg_py: "Wèilái de chéngshì jiāng gèngjiā zhìnénghuà hé shēngtàihuà.", eg_vn: "Thành phố tương lai sẽ thông minh hơn và thân thiện với sinh thái hơn." },
      { hz: "交通", py: "jiāotōng", type: "danh từ", vn: "giao thông", eg: "智能交通系统能有效减少堵车现象。", eg_py: "Zhìnéng jiāotōng xìtǒng néng yǒuxiào jiǎnshǎo dǔchē xiànxiàng.", eg_vn: "Hệ thống giao thông thông minh có thể giảm bớt hiện tượng tắc xe một cách hiệu quả." },
      { hz: "地铁", py: "dìtiě", type: "danh từ", vn: "tàu điện ngầm", eg: "乘坐地铁出行又快又环保。", eg_py: "Chéngzuò dìtiě chūxíng yòu kuài yòu huánbǎo.", eg_vn: "Đi lại bằng tàu điện ngầm vừa nhanh vừa thân thiện môi trường." },
      { hz: "公共交通", py: "gōnggòng jiāotōng", type: "cụm danh từ", vn: "giao thông công cộng", eg: "政府鼓励大家多利用公共交通。", eg_py: "Zhèngfǔ gǔlì dàjiā duō lìyòng gōnggòng jiāotōng.", eg_vn: "Chính phủ khuyến khích mọi người tận dụng nhiều hơn phương tiện công cộng." },
      { hz: "智能", py: "zhìnéng", type: "tính từ", vn: "thông minh (smart / AI)", eg: "智能家居让生活变得更加便捷。", eg_py: "Zhìnéng jiājū ràng shēnghuó biàn de gèngjiā biànjié.", eg_vn: "Nhà thông minh giúp cuộc sống trở nên tiện lợi hơn." },
      { hz: "方便", py: "fāngbiàn", type: "tính từ", vn: "thuận tiện, tiện lợi", eg: "手机扫码支付非常方便。", eg_py: "Shǒujī sǎomǎ zhīfù fēicháng fāngbiàn.", eg_vn: "Thanh toán quét mã bằng điện thoại cực kì thuận tiện." },
      { hz: "经常", py: "jīngcháng", type: "phó từ", vn: "thường xuyên, hay", eg: "他经常坐地铁去图书馆。", eg_py: "Tā jīngcháng zuò dìtiě qù túshūguǎn.", eg_vn: "Anh ấy thường xuyên đi tàu điện ngầm tới thư viện." },
      { hz: "往往", py: "wǎngwǎng", type: "phó từ", vn: "thường thường, có xu hướng (theo quy luật)", eg: "交通便利的城市往往发展得更快。", eg_py: "Jiāotōng biànlì de chéngshì wǎngwǎng fāzhǎn de gèng kuài.", eg_vn: "Các thành phố giao thông thuận tiện thường có xu hướng phát triển nhanh hơn." },
      { hz: "生活", py: "shēnghuó", type: "danh từ / động từ", vn: "cuộc sống; sinh sống", eg: "绿色低碳的生活越来越受到人们的推崇。", eg_py: "Lǜsè dītàn de shēnghuó yuèláiyuè shòudào rénmen de tuīchóng.", eg_vn: "Cuộc sống xanh giảm phát thải carbon ngày càng được mọi người đề cao." },
      { hz: "发展", py: "fāzhǎn", type: "động từ / danh từ", vn: "phát triển", eg: "城市的发展离不开科技的进步。", eg_py: "Chéngshì de fāzhǎn lí bù kāi kējì de jìnbù.", eg_vn: "Sự phát triển của đô thị không thể tách rời sự tiến bộ của khoa học công nghệ." }
    ],
    dialogue: {
      title: "畅想2050年的智慧城市 (Tưởng tượng về thành phố thông minh năm 2050)",
      roles: ["王鹏 (Vương Bằng)", "李丽 (Lý Lệ)"],
      lines: [
        { role: "王鹏", hz: "李丽，你想象过三十年后的未来城市会是什么样子吗？", py: "Lǐ Lì, nǐ xiǎngxiàng guo sānshí nián hòu de wèilái chéngshì huì shì shénme yàngzi ma?", vn: "Lý Lệ, cậu từng tưởng tượng thành phố tương lai 30 năm sau sẽ thế nào chưa?" },
        { role: "李丽", hz: "我想象中的未来城市到处都是绿树，地面上几乎没有汽车，大家都坐无人驾驶的空中轨道列车和地下高铁。", py: "Wǒ xiǎngxiàng zhōng de wèilái chéngshì dàochù dōu shì lǜshù, dìmiàn shang jīhū méiyǒu qìchē, dàjiā dōu zuò wúrén jiàshǐ de kōngzhōng guǐdào lièchē hé dìxià gāotiě.", vn: "Thành phố tương lai trong tưởng tượng của tớ đâu đâu cũng rợp bóng cây xanh, mặt đất hầu như không có ô tô, mọi người đều đi tàu điện trên không không người lái và tàu cao tốc dưới lòng đất." },
        { role: "王鹏", hz: "智能科技也会融入生活的方方面面。比如智能管家会帮我们打理家务，垃圾也会自动回收转化为清洁能源。", py: "Zhìnéng kējì yě huì róngrù shēnghuó de fāngfāngmiànmiàn. Bǐrú zhìnéng guǎnjiā huì bāng wǒmen dǎlǐ jiāwù, lājī yě huì zìdòng huíshōu zhuǎnhuà wéi qīngjié néngyuán.", vn: "Công nghệ thông minh cũng sẽ len lỏi vào từng ngóc ngách đời sống. Ví dụ quản gia AI sẽ giúp làm việc nhà, rác thải tự động tái chế thành năng lượng sạch." },
        { role: "李丽", hz: "高科技往往能带来高效与便利，不过我们经常也要警惕过度依赖机器，人与人面对面的交流依然最宝贵。", py: "Gāo kējì wǎngwǎng néng dài lái gāoxiào yǔ biànlì, búguò wǒmen jīngcháng yě yào jǐngtì guòdù yīlài jīqì, rén yǔ rén miànduìmiàn de jiāoliú yīrán zuì bǎoguì.", vn: "Công nghệ cao thường mang lại hiệu suất và tiện lợi, tuy nhiên chúng mình cũng phải thường xuyên cảnh giác việc phụ thuộc quá mức vào máy móc, giao tiếp trực tiếp giữa người với người vẫn là quý giá nhất." },
        { role: "王鹏", hz: "说得太棒了！科技让城市更美好，而爱让生活更温暖。", py: "Shuō de tài bàng le! Kējì ràng chéngshì gèng měihǎo, ér ài ràng shēnghuó gèng wēnnuǎn.", vn: "Nói tuyệt vời lắm! Công nghệ làm thành phố tươi đẹp hơn, còn tình yêu thương làm cuộc sống ấm áp hơn." }
      ],
      checkQuestion: {
        q: "李丽认为在高科技时代，什么依然最宝贵？",
        options: ["人与人面对面的真实交流", "功能最强大的智能手机", "无人驾驶的高铁列车", "豪华的地下建筑"],
        ans: 0,
        exp: "Lý Lệ nhấn mạnh: '人与人面对面的交流依然最宝贵。'"
      }
    },
    grammar: [
      {
        name: "Hiện tượng ngữ pháp đặc thù: Từ li hợp (离合词)",
        desc: "Từ li hợp là những từ có cấu tạo 'Động từ + Tân ngữ' (như 见面, 睡觉, 洗澡, 帮/忙, 散/步). Khi muốn thêm trợ từ (了, 过), từ chỉ thời lượng hoặc số lượng, PHẢI chèn vào GIỮA hai thành phần, tuyệt đối không đặt sau toàn bộ cụm.",
        formula: "见面 (jiànmiàn) -> 见了一次面 (jiàn le yí cì miàn)\n睡觉 (shuìjiào) -> 睡了一个好觉 (shuì le yí ge hǎo jiào)\n散步 (sànbù) -> 散了一会儿步 (sàn le yíhuìr bù)",
        examples: [
          { hz: "昨天我和老朋友见了一面。", py: "Zuótiān wǒ hé lǎo péngyou jiàn le yí miàn.", vn: "Hôm qua tôi và người bạn cũ đã gặp mặt một lần." },
          { hz: "他在公园里散了半个小时步。", py: "Tā zài gōngyuán lǐ sàn le bàn ge xiǎoshí bù.", vn: "Anh ấy đã đi dạo nửa tiếng đồng hồ trong công viên." }
        ],
        mistakeCheck: {
          wrong: "我和他见面了。(Sai trật tự khi có bổ ngữ số lượng) / 我见面了他两次。",
          right: "我和他见了两次面。",
          note: "Không bao giờ mang tân ngữ trực tiếp sau từ li hợp (không nói 见面他, mà nói 跟他见面)."
        }
      },
      {
        name: "Phân biệt phó từ: 经常 (Thường xuyên) vs. 往往 (Thường có xu hướng)",
        desc: "1. 经常 (jīngcháng): Chỉ tần suất lặp lại đơn thuần của hành động, có thể dùng cho quá khứ, hiện tại và tương lai; có thể dùng trong câu phủ định (不经常).\n2. 往往 (wǎngwǎng): Nhấn mạnh quy luật thường tất yếu xảy ra trong một điều kiện, hoàn cảnh nhất định đã đúc kết được trong quá khứ; không dùng cho tương lai và không có dạng 不往往.",
        formula: "经常: Chủ ngữ + 经常 + V\n往往: Trong điều kiện X, Sự việc + 往往 + Kết quả Y",
        examples: [
          { hz: "假期里他经常去图书馆自习。", py: "Jiàqī lǐ tā jīngcháng qù túshūguǎn zìxí.", vn: "Trong kì nghỉ bạn ấy thường xuyên đến thư viện tự học." },
          { hz: "遇到困难时，乐观的人往往能更快找到解决办法。", py: "Yù dào kùnnan shí, lèguān de rén wǎngwǎng néng gèng kuài zhǎodào jiějué bànfǎ.", vn: "Khi gặp khó khăn, người lạc quan thường có xu hướng tìm ra cách giải quyết nhanh hơn." }
        ]
      }
    ],
    skills: {
      listening: "Nghe bài thuyết minh giới thiệu về mô hình thành phố sinh thái thông minh Hùng An (Xiongan New Area); đánh dấu các tiện ích công nghệ xuất hiện.",
      speaking: "Hùng biện 3 phút: 'Thiết kế một giải pháp giao thông xanh cho đô thị tương lai'. Áp dụng cấu trúc '越来越……', '往往'.",
      reading: "Đọc bài luận khoa học viễn tưởng ngắn về một ngày sinh hoạt của học sinh năm 2050; trả lời câu hỏi đọc hiểu chi tiết.",
      writing: "Viết đoạn văn 100 chữ miêu tả ngôi nhà thông minh tương lai mà em mơ ước được sống."
    },
    culture: {
      title: "文化驿站: Khái niệm 'Thành phố tương lai' và quy hoạch đô thị Trung Quốc hiện đại",
      content: "Các đại đô thị hiện đại của Trung Quốc như Thượng Hải, Thâm Quyến, Hàng Châu đang tiên phong ứng dụng công nghệ 5G, dữ liệu lớn (Big Data) và trí tuệ nhân tạo (AI) vào quản lí đô thị: hệ thống xe buýt tự lái, thanh toán nhận diện khuôn mặt, lưới điện xanh giảm phát thải ròng. Khu đô thị mới Hùng An (Khu Hùng An - Hà Bắc) được mệnh danh là 'Thành phố của tương lai' với 100% điện sạch và hệ thống hạ tầng ngầm 3 tầng hiện đại, hiện thực hóa ước mơ phát triển bền vững."
    },
    quiz: [
      {
        q: "Chọn câu có cách dùng từ li hợp ĐÚNG:",
        options: [
          "我和小王昨天见了一次面。",
          "我昨天见面了小王一次。",
          "我和小王昨天见面一次了。",
          "我见面小王了。"
        ],
        ans: 0,
        exp: "'见面' là từ li hợp, bổ ngữ số lần '一次' phải chèn vào giữa: '见了一次面'."
      },
      {
        q: "Điền phó từ phù hợp: '早睡早起的人，身体素质______比较好。'",
        options: ["往往", "刚刚", "只好", "本来"],
        ans: 0,
        exp: "'往往' chỉ một quy luật, xu hướng mang tính tất yếu rút ra từ kinh nghiệm trong một điều kiện nhất định."
      },
      {
        q: "Từ '地铁' trong tiếng Trung Quốc có nghĩa là gì?",
        options: ["Tàu điện ngầm", "Tàu hỏa chạy bằng than", "Xe buýt nhanh", "Tàu thủy đường sông"],
        ans: 0,
        exp: "'地铁' (dìtiě) là viết tắt của '地下铁道' tức hệ thống tàu điện ngầm đô thị."
      }
    ]
  },

  10: {
    num: 10,
    topicId: 4,
    title_cn: "健康与寿命",
    title_pinyin: "Jiànkāng yǔ shòumìng",
    title_vi: "Sức khoẻ và tuổi thọ",
    goals: [
      "Nói về sức khỏe, tuổi thọ, lối sống lành mạnh, giấc ngủ và chế độ vận động thể chất.",
      "Làm chủ cách đọc và tính toán các con số lớn bằng đơn vị '万' (vạn = 10.000) và '亿' (ức = 100.000.000).",
      "Sử dụng danh từ thời lượng '一会儿' (một lát, một lúc).",
      "Vận dụng phó từ tổng hợp '一共' (tổng cộng) trong thống kê và giao tiếp hàng ngày."
    ],
    vocab: [
      { hz: "健康", py: "jiànkāng", type: "tính từ / danh từ", vn: "sức khỏe, khỏe mạnh", eg: "保持身心健康是人生的第一财富。", eg_py: "Bǎochí shēnxīn jiànkāng shì rénshēng de dì-yī cáifù.", eg_vn: "Giữ gìn sức khỏe thân tâm là của cải số một của đời người." },
      { hz: "寿命", py: "shòumìng", type: "danh từ", vn: "tuổi thọ", eg: "现代医疗水平的提高使人类平均寿命延长了。", eg_py: "Xiàndài yīliáo shuǐpíng de tígāo shǐ rénlèi píngjūn shòumìng yáncháng le.", eg_vn: "Trình độ y tế hiện đại nâng cao làm cho tuổi thọ trung bình của nhân loại kéo dài hơn." },
      { hz: "运动", py: "yùndòng", type: "động từ / danh từ", vn: "vận động, thể thao", eg: "生命在于运动。", eg_py: "Shēngmìng zàiyú yùndòng.", eg_vn: "Sự sống nằm ở sự vận động." },
      { hz: "生活习惯", py: "shēnghuó xíguàn", type: "cụm danh từ", vn: "thói quen sinh hoạt", eg: "良好的生活习惯能预防许多慢性疾病。", eg_py: "Liánghǎo de shēnghuó xíguàn néng yùfáng xǔduō mànxìng jíbìng.", eg_vn: "Thói quen sinh hoạt tốt có thể phòng ngừa nhiều căn bệnh mãn tính." },
      { hz: "睡眠", py: "shuìmián", type: "danh từ", vn: "giấc ngủ", eg: "保证充足的睡眠对青少年非常重要。", eg_py: "Bǎozhèng chōngzú de shuìmián duì qīngshàonián fēicháng zhòngyào.", eg_vn: "Bảo đảm giấc ngủ đầy đủ rất quan trọng đối với thanh thiếu niên." },
      { hz: "时间", py: "shíjiān", type: "danh từ", vn: "thời gian", eg: "合理安排时间才能学得轻松、活得健康。", eg_py: "Hélǐ ānpái shíjiān cái néng xué de qīngsōng, huó de jiànkāng.", eg_vn: "Sắp xếp thời gian hợp lí mới có thể học nhẹ nhàng, sống khỏe mạnh." },
      { hz: "一会儿", py: "yíhuìr", type: "danh từ thời gian", vn: "một lát, một chốc", eg: "学累了就站起来活动一会儿。", eg_py: "Xué lèi le jiù zhàn qǐlai huódòng yíhuìr.", eg_vn: "Học mệt rồi thì đứng dậy vận động một lát." },
      { hz: "亿", py: "yì", type: "số từ", vn: "một trăm triệu (100.000.000)", eg: "中国人口超过十四亿。", eg_py: "Zhōngguó rénkǒu chāoguò shísì yì.", eg_vn: "Dân số Trung Quốc vượt quá 1,4 tỉ người (14 ức)." },
      { hz: "一共", py: "yígòng", type: "phó từ", vn: "tổng cộng", eg: "这些水果一共花了五十块钱。", eg_py: "Zhèxiē shuǐguǒ yígòng huā le wǔshí kuài qián.", eg_vn: "Chỗ hoa quả này tổng cộng hết 50 tệ." },
      { hz: "保持", py: "bǎochí", type: "động từ", vn: "duy trì, giữ gìn", eg: "每天保持愉快的心情也是长寿的秘诀。", eg_py: "Měitiān bǎochí yúkuài de xīnqíng yě shì chángshòu de mìjué.", eg_vn: "Mỗi ngày duy trì tâm trạng vui vẻ cũng là bí quyết trường thọ." }
    ],
    dialogue: {
      title: "长寿村的健康秘诀 (Bí quyết sức khỏe của ngôi làng trường thọ)",
      roles: ["记者 (Phóng viên)", "百岁老人 (Cụ già trăm tuổi)"],
      lines: [
        { role: "记者", hz: "老爷爷您好，听说村里一共有一百多位九十岁以上的老人，您今年高寿呀？", py: "Lǎoyéye nǐhǎo, tīngshuō cūnlǐ yígòng yǒu yìbǎi duō wèi jiǔshí suì yǐshàng de lǎorén, nǐ jīnnián gāoshòu ya?", vn: "Kính chào cụ ạ, nghe nói trong làng tổng cộng có hơn một trăm cụ trên 90 tuổi, năm nay cụ bao nhiêu tuổi rồi ạ?" },
        { role: "百岁老人", hz: "我今年刚好一百零二岁啦！身子骨还硬朗着呢！", py: "Wǒ jīnnián gānghǎo yìbǎi líng èr suì la! Shēnzigu hái yìnglang zhe ne!", vn: "Năm nay tôi vừa tròn 102 tuổi rồi! Xương cốt vẫn còn rắn rỏi lắm!" },
        { role: "记者", hz: "太令人羡慕了！请问您每天的生活习惯是怎样的呢？", py: "Tài lìng rén xiànmù le! Qǐngwèn nín měitiān de shēnghuó xíguàn shì zěnyàng de ne?", vn: "Đáng ngưỡng mộ quá cụ ơi! Xin hỏi thói quen sinh hoạt hằng ngày của cụ như thế nào ạ?" },
        { role: "百岁老人", hz: "我每天清晨五点就起床散步，吃新鲜蔬菜，中午睡一会儿午觉。更重要的是保持好心态，不多管闲事，心里乐呵呵的。", py: "Wǒ měitiān qīngchén wǔ diǎn jiù qǐchuáng sànbù, chī xīnxiān shūcài, zhōngwǔ shuì yíhuìr wǔjiào. Gèng zhòngyào de shì bǎochí hǎo xīntài, bù duō guǎn xiánshì, xīn lǐ lèhēhē de.", vn: "Mỗi sáng sớm 5 giờ tôi đã dậy đi dạo, ăn rau tươi, trưa ngủ một lát. Quan trọng hơn là giữ tâm thái tốt, không bận tâm chuyện thị phi, lòng lúc nào cũng vui vẻ tươi cười." },
        { role: "记者", hz: "原来健康和寿命的秘诀就藏在每天规律的生活习惯和开朗的心境里！", py: "Yuánlái jiànkāng hé shòumìng de mìjué jiù cáng zài měitiān guīlǜ de shēnghuó xíguàn hé kāilǎng de xīnjìng lǐ!", vn: "Hóa ra bí quyết của sức khỏe và tuổi thọ ẩn chứa ngay trong thói quen sinh hoạt quy củ và tâm trạng lạc quan mỗi ngày!" }
      ],
      checkQuestion: {
        q: "根据对话，百岁老人长寿的关键秘诀是什么？",
        options: ["早起散步、饮食清淡、睡午觉并保持好心态", "只吃名贵的滋补药品", "天天躺在床上不运动", "从来不睡午觉"],
        ans: 0,
        exp: "Cụ già chia sẻ: '清晨五点起床散步，吃新鲜蔬菜，中午睡一会儿午觉。更重要的是保持好心态……'"
      }
    },
    grammar: [
      {
        name: "Quy tắc đọc số lớn trong tiếng Trung: 万 (10.000) và 亿 (100.000.000)",
        desc: "Tiếng Việt và phương Tây nhóm số theo 3 chữ số (hàng nghìn - ngàn, triệu, tỉ), nhưng tiếng Trung nhóm số theo 4 CHỮ SỐ (hàng 万 = 10⁴ và hàng 亿 = 10⁸).\n- 10.000 = 一万 (yí wàn)\n- 100.000 = 十万 (shí wàn)\n- 1.000.000 = 一百万 (yìbǎi wàn)\n- 10.000.000 = 一千万 (yìqiān wàn)\n- 100.000.000 = 一亿 (yí yì)\n- 1.000.000.000 = 十亿 (shí yì)",
        formula: "Cách đổi: Lấy số đếm chia nhóm 4 chữ số từ phải qua trái. Ví dụ:\n140.000.000 -> 1,4000,0000 -> 1.4 亿 (一点四亿)\n80.000 -> 8,0000 -> 8 万 (八万)",
        examples: [
          { hz: "全球人口已经突破了八十亿。", py: "Quánqiú rénkǒu yǐjīng tūpò le bāshí yì.", vn: "Dân số toàn cầu đã vượt mốc 8 tỉ người (80 ức)." },
          { hz: "全国一共有五千万名中学生。", py: "Quánguó yígòng yǒu wǔqiān wàn míng zhōngxuéshēng.", vn: "Cả nước tổng cộng có 50 triệu học sinh trung học (5000 vạn)." }
        ]
      },
      {
        name: "Danh từ thời lượng: 一会儿 (Một lát / Một lúc)",
        desc: "Dùng sau động từ chỉ hành động diễn ra trong khoảng thời gian rất ngắn, hoặc dùng lặp '一会儿……一会儿……' biểu thị sự luân phiên thay đổi.",
        formula: "Động từ + 一会儿\n(一会儿 A, 一会儿 B: chốc thì A, chốc lại B)",
        examples: [
          { hz: "请在这里坐一会儿，老师马上就来。", py: "Qǐng zài zhèlǐ zuò yíhuìr, lǎoshī mǎshàng jiù lái.", vn: "Xin hãy ngồi đây một lát, thầy giáo đến ngay bây giờ." },
          { hz: "天气真怪，一会儿晴，一会儿雨。", py: "Tiānqì zhēn guài, yíhuìr qíng, yíhuìr yǔ.", vn: "Thời tiết lạ thật, lúc thì nắng, chốc lại mưa." }
        ]
      },
      {
        name: "Phó từ tổng cộng: 一共 (Tổng cộng)",
        desc: "Đứng trước số từ hoặc cụm vị ngữ để tổng kết toàn bộ số lượng hay đối tượng.",
        formula: "Chủ ngữ + 一共 + Số lượng + Lượng từ + Danh từ",
        examples: [
          { hz: "我们班一共有四十个学生。", py: "Wǒmen bān yígòng yǒu sìshí ge xuésheng.", vn: "Lớp chúng tôi tổng cộng có 40 học sinh." },
          { hz: "这本书我一共读了三遍。", py: "Zhè běn shū wǒ yígòng dú le sān biàn.", vn: "Cuốn sách này tôi tổng cộng đã đọc ba lần." }
        ]
      }
    ],
    skills: {
      listening: "Nghe bài phát thanh hướng dẫn 8 nguyên tắc vàng dưỡng sinh cho học sinh mùa thi; điền số giờ ngủ khuyến nghị và lượng nước uống.",
      speaking: "Phỏng vấn người thân trong gia đình về thói quen ăn uống, ngủ nghỉ; báo cáo kết quả trước lớp sử dụng các số đếm lớn và '一共'.",
      reading: "Đọc bảng số liệu thống kê về tuổi thọ bình quân của các quốc gia trên thế giới; thực hành đọc chuẩn các con số hàng '万' và '亿'.",
      writing: "Viết cam kết rèn luyện sức khỏe cá nhân (健康生活承诺书) gồm 5 điều em quyết tâm thực hiện trong học kì này."
    },
    culture: {
      title: "文化驿站: Nghệ thuật dưỡng sinh truyền thống Thái Cực Quyền (太极拳) và Bát Đoạn Cẩm",
      content: "Văn hóa Trung Hoa coi trọng thuật 'Dưỡng sinh' (养生 - nuôi dưỡng sinh mệnh) thông qua các bài tập vận động nhu hòa như **太极拳** (Thái Cực Quyền) và **八段锦** (Bát Đoạn Cẩm). Khác với các môn thể thao đối kháng mạnh bạo, dưỡng sinh phương Đông chú trọng 'Dĩ nhu khắc cương' (Lấy nhu thắng cương), điều hòa hơi thở sâu, giúp khí huyết lưu thông, tâm thần an tĩnh. Nhiều nghiên cứu khoa học hiện đại đã chứng minh luyện tập Thái Cực Quyền thường xuyên giúp cải thiện giấc ngủ, tăng cường hệ miễn dịch và kéo dài tuổi thọ đáng kể."
    },
    quiz: [
      {
        q: "Con số '300.000.000' (300 triệu) trong tiếng Trung được đọc chuẩn là:",
        options: ["三亿", "三千万", "三十万", "三百万"],
        ans: 0,
        exp: "Trong tiếng Trung, 1 ức (亿) = 100.000.000 (100 triệu), do đó 300 triệu là '三亿'."
      },
      {
        q: "Điền từ thích hợp: '跑完全程后，运动员们停下来休息了______。'",
        options: ["一会儿", "一边", "一共", "一直"],
        ans: 0,
        exp: "'一会儿' (yíhuìr) chỉ một khoảng thời gian ngắn: 'nghỉ ngơi một lát'."
      },
      {
        q: "Trong câu: '全校参加运动会的同学______有五百人。', từ nào mang nghĩa 'tổng cộng'?",
        options: ["一共", "特别", "原来", "本来"],
        ans: 0,
        exp: "'一共' (yígòng) là phó từ chỉ tổng số lượng."
      }
    ]
  },

  // Review Unit 4
  "r4": {
    num: "r4",
    isReview: true,
    topicId: 4,
    title_cn: "复习四",
    title_pinyin: "Fùxí sì",
    title_vi: "Ôn tập Chủ điểm 4 & Tổng kết toàn sách",
    goals: [
      "Hệ thống hóa từ vựng về đô thị tương lai (未来, 智能, 交通, 地铁) và sức khỏe trường thọ (寿命, 睡眠, 运动).",
      "Ôn tập điểm ngữ pháp then chốt: Từ li hợp (离合词), phân biệt 经常 vs. 往往, danh từ thời gian 一会儿, đơn vị số đếm 万 & 亿, phó từ 一共.",
      "Thực hiện bài kiểm tra toàn diện cuối sách: Giao tiếp, dịch thuật và đọc hiểu tổng hợp."
    ],
    contentSummary: `
### 1. Tổng kết cấu trúc ngữ pháp Chủ điểm 4
- **Từ li hợp (离合词):** Cụm Động-Tân tách được. Quy tắc: Chèn trợ từ (了, 过), số lượng, thời lượng vào giữa (Ví dụ: 散了半个小时步, 见了一次面, 睡了一个好觉).
- **Phân biệt tần suất & quy luật:**
  - 经常: Thường xuyên (Tần suất đơn thuần, dùng được cho tương lai và phủ định 不经常).
  - 往往: Thường thường có xu hướng (Quy luật tất yếu trong hoàn cảnh nhất định rút từ quá khứ).
- **Số đếm lớn nhóm 4 chữ số:** 万 = 10.000; 亿 = 100.000.000 (Ví dụ: 14 亿 = 1,4 tỉ).
- **Khoảng thời gian ngắn:** V + 一会儿 (Một lát).
- **Tổng cộng:** 一共 + Số lượng (Tổng cộng tất cả).
    `,
    quiz: [
      {
        q: "Câu nào dưới đây bị SAI quy tắc sử dụng từ li hợp?",
        options: [
          "我和老师见面了三次。(Sai)",
          "我和老师见了三次面。(Đúng)",
          "昨天我睡了一个好觉。(Đúng)",
          "他去公园散了一会儿步。(Đúng)"
        ],
        ans: 0,
        exp: "Từ li hợp '见面' không thể mang trực tiếp trạng ngữ số lượng phía sau '见面了三次', mà phải tách ra: '见了三次面'."
      },
      {
        q: "Một tỉ (1.000.000.000) trong tiếng Trung Quốc là bao nhiêu '亿'?",
        options: ["十亿", "一亿", "一百亿", "一万亿"],
        ans: 0,
        exp: "1 ức (亿) = 100 triệu, do đó 1 tỉ = 10 ức = '十亿'."
      },
      {
        q: "Thành ngữ nào phản ánh sự tương quan giữa công nghệ và văn minh nhân loại?",
        options: ["科技让生活更美好", "民以食为天", "天人合一", "能者为师"],
        ans: 0,
        exp: "'科技让生活更美好' (Khoa học công nghệ làm cho cuộc sống tốt đẹp hơn) là khẩu hiệu tiêu biểu của thành phố thông minh tương lai."
      }
    ]
  }
};

// 29 Core Grammar Structures for Cheatsheet Modal
const grammarCheatsheet = [
  { id: 1, structure: "不但……还……", function: "Không những… mà còn… (liên từ tăng tiến)", example: "他不但会说汉语，还会说英语。" },
  { id: 2, structure: "向 + Hướng/Đối tượng + V", function: "Chỉ phương hướng của hành động hoặc đối tượng hướng tới", example: "向前走五分钟就到了。" },
  { id: 3, structure: "特别 + Vị ngữ", function: "Nhấn mạnh mức độ cao hoặc sở thích vượt trội (đặc biệt/rất)", example: "我特别喜欢海边的日出。" },
  { id: 4, structure: "V + 得/不 + Bổ ngữ kết quả/hướng", function: "Bổ ngữ khả năng: có/không thể đạt kết quả", example: "看得懂 / 看不懂；抢得到票吗？" },
  { id: 5, structure: "不过", function: "Liên từ chuyển ý nhẹ nhàng (tuy nhiên / nhưng mà)", example: "题目有点儿难，不过他做出来了。" },
  { id: 6, structure: "为了 + Mục đích", function: "Giới từ nêu mục đích của hành động (để / nhằm)", example: "为了提高汉语水平，他每天都练习。" },
  { id: 7, structure: "常常", function: "Phó từ tần suất: thường xuyên lặp lại hành động", example: "周末他常常去图书馆。" },
  { id: 8, structure: "刚才", function: "Danh từ thời gian: vừa nãy (vừa mới trôi qua)", example: "刚才你去哪儿了？" },
  { id: 9, structure: "拿……来说", function: "Đưa ra ví dụ cụ thể để làm sáng tỏ vấn đề (lấy... mà nói)", example: "拿我家来说，周末大家常常一起吃饭。" },
  { id: 10, structure: "只好 + V", function: "Phó từ biểu thị sự bất đắc dĩ (đành phải)", example: "没有公交车了，我们只好走路回家。" },
  { id: 11, structure: "更 / 更加 + Tính từ/Động từ", function: "Phó từ so sánh hơn, tăng cấp mức độ (càng / hơn nữa)", example: "沟通让我们与父母的关系更加亲近。" },
  { id: 12, structure: "对 + Đối tượng + V/Adj", function: "Giới từ chỉ đối tượng chịu tác động hoặc được nhận xét", example: "运动对身体健康很有好处。" },
  { id: 13, structure: "原来 (phó từ / tính từ)", function: "Hóa ra (phát hiện mới); vốn dĩ / ban đầu", example: "原来你也在这里！/ 按原来的计划办。" },
  { id: 14, structure: "在……看来", function: "Theo cách nhìn, quan điểm của ai", example: "在我看来，多读书能让人更加智慧。" },
  { id: 15, structure: "马上 + V", function: "Phó từ chỉ hành động diễn ra ngay lập tức", example: "请稍等，我马上就来。" },
  { id: 16, structure: "以为 vs. 认为", function: "Tưởng rằng (thực tế sai) vs. Cho rằng (nhận định khách quan)", example: "我以为是星期天，其实是星期六；我认为这个方案好。" },
  { id: 17, structure: "让 + Đối tượng + V/Adj", function: "Câu kiêm ngữ cầu khiến: làm cho, để cho, biến thành", example: "让环保成为一种习惯。" },
  { id: 18, structure: "得 (děi) + V", function: "Động từ năng nguyện: phải, cần phải", example: "我们得节约每一滴水。" },
  { id: 19, structure: "本来", function: "Phó từ: vốn dĩ, ban đầu (trạng thái gốc)", example: "地球本来是非常干净美丽的。" },
  { id: 20, structure: "对……来说", function: "Cụm định khung: xét đối với đối tượng cụ thể", example: "对中学生来说，少用塑料袋是举手之劳。" },
  { id: 21, structure: "由 + Chủ thể + V", function: "Giới từ chỉ người đảm nhận hoặc nguồn gốc phát sinh", example: "这个活动由学生会负责组织。" },
  { id: 22, structure: "比较 + Tính từ", function: "Phó từ mức độ: khá, tương đối", example: "这条新闻的可靠性比较高。" },
  { id: 23, structure: "每 + Lượng từ + Đều", function: "Đại từ chỉ từng cá thể trong một tập thể", example: "每个人都应该保护环境。" },
  { id: 24, structure: "究竟 + Câu hỏi", function: "Phó từ truy vấn đến cùng sự thật (rốt cuộc, thực ra)", example: "绿色食品究竟是什么意思？" },
  { id: 25, structure: "Số từ + 趟 + V di chuyển", function: "Lượng từ động lượng chỉ chuyến đi khứ hồi trọn vẹn", example: "我去过那家农场两趟。" },
  { id: 26, structure: "为 + Đối tượng + V", function: "Giới từ: vì, cho, nhằm phục vụ ai", example: "这家公司为学校提供绿色食品。" },
  { id: 27, structure: "离合词 (Từ li hợp)", function: "Cụm động-tân tách được: chèn trợ từ/thời lượng vào giữa", example: "见面 -> 见了一面；睡觉 -> 睡了一个好觉。" },
  { id: 28, structure: "经常 vs. 往往", function: "Tần suất thường xuyên vs. Quy luật có xu hướng trong điều kiện", example: "他经常去图书馆；乐观的人往往能更快解决困难。" },
  { id: 29, structure: "一会儿 / 万与亿 / 一共", function: "Thời lượng ngắn (một lát) / Nhóm số 4 chữ số / Tổng cộng", example: "休息一会儿；中国人口超十四亿；一共五十块。" }
];

module.exports = {
  topics,
  lessons,
  grammarCheatsheet
};
