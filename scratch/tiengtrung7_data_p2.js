// Dữ liệu Tiếng Trung Quốc 7 - Phần 2: Chủ điểm 3 & Chủ điểm 4 và Bảng Ngữ pháp, Trợ từ, Pinyin
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const themesPart2 = [
  // CHỦ ĐIỂM 3
  {
    themeId: "theme-3",
    themeNum: 3,
    title: "Chủ điểm 3: 我们的世界",
    subtitle: "Thế giới của chúng ta",
    badge: "Thành phố, Bảo tàng & Giao thông đô thị",
    lessons: [
      // Bài 9
      {
        id: "bai-9",
        num: 9,
        title: "第9课：胡志明市在哪儿",
        pinyin: "Dì jiǔ kè: Húzhìmíng Shì zài nǎr",
        vnTitle: "Thành phố Hồ Chí Minh ở đâu?",
        goal: "Giới thiệu vị trí địa lí và đặc điểm của một thành phố; động lượng từ chỉ số lần 次 và 遍; động từ kết hợp 一下.",
        vocab: [
          { zh: "城市", py: "chéngshì", vn: "Thành phố, đô thị", type: "Danh từ" },
          { zh: "在哪儿", py: "zài nǎr", vn: "Ở đâu", type: "Cụm nghi vấn" },
          { zh: "胡志明市", py: "Húzhìmíng Shì", vn: "Thành phố Hồ Chí Minh", type: "Danh từ riêng" },
          { zh: "岘港", py: "Xiàngǎng", vn: "Đà Nẵng", type: "Danh từ riêng" },
          { zh: "地方", py: "dìfang", vn: "Địa điểm, nơi chốn", type: "Danh từ" },
          { zh: "旅行", py: "lǚxíng", vn: "Du lịch", type: "Động từ/Danh từ" },
          { zh: "参观", py: "cānguān", vn: "Tham quan", type: "Động từ" },
          { zh: "介绍", py: "jièshào", vn: "Giới thiệu", type: "Động từ" },
          { zh: "次", py: "cì", vn: "Lần (số lần xảy ra)", type: "Động lượng từ" },
          { zh: "遍", py: "biàn", vn: "Lượt (trọn vẹn từ đầu đến cuối)", type: "Động lượng từ" }
        ],
        grammar: {
          title: "Động từ + 一下 (Thử làm một chút) & Động lượng từ 次 và 遍",
          formula: "1. V + 一下: Lời đề nghị nhẹ nhàng, thử làm một chút (介绍一下, 看一下)\n2. Động lượng từ:\n- 次: Đếm số lần sự việc diễn ra (去了三次)\n- 遍: Đếm trọn vẹn một lượt từ đầu đến cuối (读了两遍课文)",
          usage: "一下 đặt sau động từ giúp câu nói thêm tự nhiên, lịch sự. 次 nhấn mạnh tần suất lặp lại, còn 遍 nhấn mạnh toàn bộ quá trình đọc, viết, nghe hay xem từ đầu đến cuối.",
          examples: [
            "请你介绍一下胡志明市著名的景点。(Xin bạn hãy giới thiệu đôi nét về các điểm tham quan nổi tiếng ở TP.HCM.)",
            "我去过两次胡志明市，那座城市非常现代化。(Tôi từng đến TP.HCM hai lần, thành phố đó rất hiện đại.)",
            "这篇课文很难，我读了三遍才懂。(Bài khóa này khá khó, tôi đọc 3 lượt mới hiểu.)"
          ]
        },
        dialogue: {
          situation: "Hỏi thăm về vị trí và chuyến du lịch phương Nam",
          lines: [
            { spk: "Tiểu Minh", text: "李华，你去过越南南部的胡志明市吗？" },
            { spk: "Lý Hoa", text: "去过一次。胡志明市在越南南部，是一座非常热闹的大城市。" },
            { spk: "Tiểu Minh", text: "你在那里参观了什么地方？" },
            { spk: "Lý Hoa", text: "我参观了滨城市场，还去阮惠步行街散步呢！" }
          ]
        },
        quiz: [
          {
            q: "Điền động lượng từ thích hợp cho việc đọc hết bài văn từ đầu đến cuối: '这本生词，请你再读一 (____)。'",
            options: ["A. 次", "B. 遍", "C. 个", "D. 座"],
            a: 1,
            exp: "Đọc/nghe/xem trọn vẹn từ đầu đến cuối dùng động lượng từ '遍' (biàn)."
          },
          {
            q: "Cụm từ '请介绍一下' mang ý nghĩa lịch sự là:",
            options: ["A. Xin hãy giới thiệu đôi nét / một chút", "B. Không được giới thiệu", "C. Giới thiệu nhiều lần", "D. Tự mình giới thiệu"],
            a: 0,
            exp: "V + 一下 biểu thị hành động diễn ra nhanh, ngắn hoặc lời đề nghị nhã nhặn."
          }
        ]
      },

      // Bài 10
      {
        id: "bai-10",
        num: 10,
        title: "第10课：博物馆里摆着很多文物",
        pinyin: "Dì shí kè: Bówùguǎn lǐ bǎizhe hěnduō wénwù",
        vnTitle: "Trong bảo tàng bày nhiều hiện vật",
        goal: "Nói về không gian bảo tàng, bố cục trưng bày hiện vật; câu tồn hiện với động từ + 着; bổ ngữ 出来 và mức độ 极了.",
        vocab: [
          { zh: "博物馆", py: "bówùguǎn", vn: "Bảo tàng", type: "Danh từ" },
          { zh: "文物", py: "wénwù", vn: "Hiện vật, di vật lịch sử", type: "Danh từ" },
          { zh: "摆", py: "bǎi", vn: "Bày biện, sắp đặt", type: "Động từ" },
          { zh: "花盆", py: "huāpén", vn: "Chậu hoa", type: "Danh từ" },
          { zh: "开花", py: "kāi huā", vn: "Nở hoa", type: "Cụm động từ" },
          { zh: "五颜六色", py: "wǔyán-liùsè", vn: "Muôn màu muôn vẻ, sặc sỡ", type: "Thành ngữ" },
          { zh: "极了", py: "jíle", vn: "Vô cùng, cực kì", type: "Trợ từ mức độ" },
          { zh: "出来", py: "chūlai", vn: "Ra, hiện ra", type: "Bổ ngữ xu hướng" },
          { zh: "里 / 前面", py: "lǐ / qiánmiàn", vn: "Bên trong / Phía trước", type: "Danh từ chỉ vị trí" }
        ],
        grammar: {
          title: "Câu tồn hiện miêu tả trạng thái (V + 着) & Trợ từ mức độ 极了",
          formula: "1. Câu tồn hiện: Nơi chốn + Động từ + 着 + Số lượng / Danh từ\n2. Cực độ tính từ: Tính từ + 极了 (Không thêm 很)",
          usage: "Động từ + 着 diễn tả trạng thái của sự vật đang được duy trì liên tục tại một địa điểm (ví dụ: đang bày, đang treo, đang đặt). Tính từ + 极了 diễn tả cảm thán ở mức độ cao nhất.",
          examples: [
            "历史博物馆里摆着很多古代文物。(Trong bảo tàng lịch sử đang trưng bày rất nhiều hiện vật cổ đại.)",
            "桌子上放着几本中文书。(Trên bàn đang để vài cuốn sách tiếng Trung.)",
            "那件传统服装漂亮极了！(Bộ trang phục truyền thống kia đẹp vô cùng!)",
            "院子里的花全都开出来了。(Hoa trong sân đều đã nở rộ bung ra rồi.)"
          ]
        },
        dialogue: {
          situation: "Đi thăm bảo tàng Lịch sử Quốc gia",
          lines: [
            { spk: "Lan", text: "王老师，这个大厅里摆着很多古代陶瓷器呢！" },
            { spk: "Thầy Vương", text: "是的，墙上还挂着很多历史地图和老照片。" },
            { spk: "Lan", text: "这些文物的颜色和花纹漂亮极了！" },
            { spk: "Thầy Vương", text: "它们展示了古代人民高超的制作技艺。" }
          ]
        },
        quiz: [
          {
            q: "Chọn trợ từ điền vào câu tồn hiện: '墙上挂 (____) 一张世界地图。'",
            options: ["A. 着", "B. 了", "C. 过", "D. 得"],
            a: 0,
            exp: "Miêu tả trạng thái tĩnh đang treo trên tường dùng 'V + 着' -> 挂着 (đang treo)."
          },
          {
            q: "Cụm từ biểu đạt mức độ cao nhất 'đẹp vô cùng':",
            options: ["A. 很漂亮极了", "B. 漂亮极了", "C. 太漂亮极了", "D. 非常漂亮极了"],
            a: 1,
            exp: "Cấu trúc chuẩn: 'Tính từ + 极了' (không đi kèm 很, 太, 非常) -> 漂亮极了."
          }
        ]
      },

      // Bài 11
      {
        id: "bai-11",
        num: 11,
        title: "第11课：我坐上河内的城铁了",
        pinyin: "Dì shíyī kè: Wǒ zuòshang Hénèi de chéngtiě le",
        vnTitle: "Tôi đã đi tuyến đường sắt đô thị Hà Nội",
        goal: "Nói về trải nghiệm đi lại trên phương tiện giao thông công cộng mới; câu cảm thán 多么……啊！; từ liệt kê 等.",
        vocab: [
          { zh: "城铁", py: "chéngtiě", vn: "Đường sắt đô thị, tàu trên cao", type: "Danh từ" },
          { zh: "地铁", py: "dìtiě", vn: "Tàu điện ngầm", type: "Danh từ" },
          { zh: "公共汽车", py: "gōnggòng qìchē", vn: "Xe buýt công cộng", type: "Danh từ" },
          { zh: "摩托车", py: "mótuōchē", vn: "Xe máy", type: "Danh từ" },
          { zh: "交通工具", py: "jiāotōng gōngjù", vn: "Phương tiện giao thông", type: "Danh từ" },
          { zh: "空调", py: "kōngtiáo", vn: "Máy điều hòa nhiệt độ", type: "Danh từ" },
          { zh: "舒服", py: "shūfu", vn: "Thoải mái, dễ chịu", type: "Tính từ" },
          { zh: "拥挤", py: "yōngjǐ", vn: "Đông đúc, chen chúc", type: "Tính từ" },
          { zh: "多么", py: "duōme", vn: "Biết bao, xiết bao (cảm thán)", type: "Phó từ" },
          { zh: "等", py: "děng", vn: "Vân vân, các... khác (liệt kê)", type: "Trợ từ" }
        ],
        grammar: {
          title: "Câu cảm thán 多么……啊！& Trợ từ liệt kê 等",
          formula: "1. Cảm thán: 多么 + Tính từ + 啊！(Biết bao!)\n2. Liệt kê: Danh từ 1, Danh từ 2, Danh từ 3 + 等 + Danh từ tổng quát",
          usage: "多么……啊 dùng để bộc lộ cảm xúc khen ngợi, ngạc nhiên mãnh liệt. 等 đặt cuối danh sách liệt kê mang nghĩa 'vân vân', tương đương với 'v.v.' trong tiếng Việt.",
          examples: [
            "车里有空调，多么舒服啊！(Trên tàu có điều hòa, thoải mái biết bao!)",
            "在河内，市民经常乘坐公共汽车、城铁、摩托车等交通工具。(Tại Hà Nội, người dân thường đi các phương tiện như xe buýt, đường sắt đô thị, xe máy v.v.)",
            "我坐上现代化的城铁了！(Tôi đã được ngồi trên chuyến tàu đô thị hiện đại rồi!)"
          ]
        },
        dialogue: {
          situation: "Chia sẻ cảm xúc khi lần đầu trải nghiệm tuyến tàu điện Cát Linh - Hà Đông",
          lines: [
            { spk: "Nam", text: "大卫，你坐过河内的吉灵—河东线城铁吗？" },
            { spk: "David", text: "上个周末我和爸爸坐上城铁了！车站宽敞，车里多么干净啊！" },
            { spk: "Nam", text: "而且城铁速度很快，不用担心路上堵车。" },
            { spk: "David", text: "对啊，坐城铁又快捷又舒服，环保极了！" }
          ]
        },
        quiz: [
          {
            q: "Hoàn thiện câu cảm thán: '这里的风景 (____) 优美啊！'",
            options: ["A. 多么", "B. 怎么", "C. 什么", "D. 哪个"],
            a: 0,
            exp: "Cấu trúc cảm thán: 多么 + tính từ + 啊 (Đẹp biết bao!)."
          },
          {
            q: "Từ '等' trong câu '桌子上有苹果、香蕉、橙子等水果' có nghĩa là:",
            options: ["A. Chờ đợi", "B. Vân vân, các loại khác", "C. Cấp bậc", "D. Tương đương"],
            a: 1,
            exp: "Đặt sau chuỗi liệt kê danh từ, 等 có nghĩa là 'vân vân'."
          }
        ]
      },

      // Ôn tập 3
      {
        id: "on-tap-3",
        num: 11.5,
        title: "复习三：回顾第9–11课",
        pinyin: "Fùxí sān: Huígù dì 9–11 kè",
        vnTitle: "Ôn tập 3: Củng cố kiến thức Chủ điểm 3",
        isReview: true,
        summary: "Hệ thống hóa các chủ điểm: Động từ + 一下; động lượng từ 次 và 遍; câu tồn hiện trạng thái V + 着; bổ ngữ 出来; phó từ cực độ 极了; câu cảm thán 多么……啊！; từ liệt kê 等. Từ vựng đô thị, bảo tàng, đường sắt đô thị.",
        quiz: [
          {
            q: "Chọn câu tồn hiện đúng ngữ pháp:",
            options: [
              "A. 房间里摆着一张大桌子。",
              "B. 房间里摆一张大桌子着。",
              "C. 一张大桌子摆着房间里。",
              "D. 房间里一张大桌子摆着。"
            ],
            a: 0,
            exp: "Cấu trúc tồn hiện: Nơi chốn (房间里) + V (摆) + 着 + Danh từ (一张大桌子)."
          },
          {
            q: "Phân biệt 次 và 遍: khi nói về số lần đi du lịch một thành phố, ta dùng:",
            options: ["A. 遍", "B. 次", "C. 张", "D. 块"],
            a: 1,
            exp: "Đếm số lần đến một nơi dùng động lượng từ '次' (去了一次)."
          }
        ]
      }
    ]
  },

  // CHỦ ĐIỂM 4
  {
    themeId: "theme-4",
    themeNum: 4,
    title: "Chủ điểm 4: 我们的未来",
    subtitle: "Tầm nhìn tương lai & Môi trường xanh",
    badge: "Bảo vệ môi trường & Bổ ngữ trạng thái 得",
    lessons: [
      // Bài 13
      {
        id: "bai-13",
        num: 13,
        title: "第13课：绿色世界",
        pinyin: "Dì shísān kè: Lǜsè shìjiè",
        vnTitle: "Thế giới xanh",
        goal: "Nói về hành động trồng cây và bảo vệ môi trường; mẫu câu so sánh hơn với 比 và so sánh không bằng với 没有; lượng từ 棵 cho cây cối.",
        vocab: [
          { zh: "绿色", py: "lǜsè", vn: "Màu xanh lá cây, 'xanh' môi trường", type: "Danh từ" },
          { zh: "树", py: "shù", vn: "Cây xanh", type: "Danh từ" },
          { zh: "种树", py: "zhòng shù", vn: "Trồng cây", type: "Cụm động từ" },
          { zh: "棵", py: "kē", vn: "Cây, ngọn (lượng từ cho thảo mộc)", type: "Lượng từ" },
          { zh: "保护", py: "bǎohù", vn: "Bảo vệ", type: "Động từ" },
          { zh: "环境", py: "huánjìng", vn: "Môi trường", type: "Danh từ" },
          { zh: "周围", py: "zhōuwéi", vn: "Xung quanh", type: "Danh từ" },
          { zh: "比", py: "bǐ", vn: "Hơn (từ so sánh)", type: "Giới từ so sánh" },
          { zh: "没有", py: "méiyǒu", vn: "Không bằng (so sánh)", type: "Phó từ so sánh" },
          { zh: "长", py: "zhǎng", vn: "Lớn lên, phát triển", type: "Động từ" }
        ],
        grammar: {
          title: "Câu so sánh hơn với 比 & So sánh không bằng với 没有",
          formula: "1. So sánh hơn: A + 比 + B + Tính từ (Lưu ý: Không dùng '很' trước tính từ)\n2. So sánh không bằng: A + 没有 + B + Tính từ (A không bằng B)",
          usage: "比 dùng để so sánh mức độ vượt trội của A đối với B. Trong câu có 比, tuyệt đối không chèn '很' vào trước tính từ. 没有 biểu thị A không đạt đến mức độ tính chất như B.",
          examples: [
            "爸爸比妈妈忙。(Bố bận hơn mẹ.)",
            "这棵树没有那棵树高。(Cây này không cao bằng cây kia.)",
            "我们班种的树比其他班多十棵。(Cây lớp chúng mình trồng nhiều hơn các lớp khác 10 cây.)"
          ]
        },
        dialogue: {
          situation: "Tham gia ngày hội trồng cây đầu xuân quanh trường",
          lines: [
            { spk: "Linh", text: "王芳，你们小组今天种了多少棵树？" },
            { spk: "Vương Phương", text: "我们种了十五棵小树。你们小组呢？" },
            { spk: "Linh", text: "我们小组没有你们种得多，只种了十二棵。" },
            { spk: "Vương Phương", text: "没关系，多一棵树，我们的学校就比以前更绿更美！" }
          ]
        },
        quiz: [
          {
            q: "Chọn câu so sánh đúng ngữ pháp tiếng Trung:",
            options: [
              "A. 今天比昨天很热。",
              "B. 今天比昨天热。",
              "C. 今天很比昨天热。",
              "D. 今天比昨天非常热。"
            ],
            a: 1,
            exp: "Trong câu so sánh 'A 比 B + tính từ', không được thêm 很, 非常 trước tính từ -> 今天比昨天热."
          },
          {
            q: "Lượng từ dùng cho cây xanh (树) là:",
            options: ["A. 座", "B. 棵", "C. 本", "D. 张"],
            a: 1,
            exp: "Lượng từ dùng cho cây cối là '棵' (kē) -> 一棵树."
          }
        ]
      },

      // Bài 14
      {
        id: "bai-14",
        num: 14,
        title: "第14课：学会垃圾分类",
        pinyin: "Dì shísì kè: Xuéhuì lājī fēnlèi",
        vnTitle: "Học cách phân loại rác",
        goal: "Nói về việc phân loại rác, bảo vệ môi trường; bổ ngữ trạng thái với trợ từ 得 (V + 得 + Tính từ/Bổ ngữ).",
        vocab: [
          { zh: "垃圾", py: "lājī", vn: "Rác thải", type: "Danh từ" },
          { zh: "垃圾分类", py: "lājī fēnlèi", vn: "Phân loại rác", type: "Cụm danh từ" },
          { zh: "垃圾箱", py: "lājīxiāng", vn: "Thùng đựng rác", type: "Danh từ" },
          { zh: "纸杯", py: "zhǐbēi", vn: "Cốc giấy", type: "Danh từ" },
          { zh: "塑料", py: "sùliào", vn: "Chất dẻo, nhựa", type: "Danh từ" },
          { zh: "电池", py: "diànchí", vn: "Pin, ắc quy", type: "Danh từ" },
          { zh: "扔", py: "rēng", vn: "Vứt, ném bỏ", type: "Động từ" },
          { zh: "处理", py: "chǔlǐ", vn: "Xử lí, giải quyết", type: "Động từ" },
          { zh: "对 / 错", py: "duì / cuò", vn: "Đúng / Sai", type: "Tính từ" },
          { zh: "得", py: "de", vn: "Trợ từ bổ ngữ trạng thái", type: "Trợ từ" }
        ],
        grammar: {
          title: "Bổ ngữ trạng thái (情态补语) với trợ từ 得",
          formula: "1. Khẳng định: Chủ ngữ + Động từ + 得 + Tính từ / Cụm miêu tả\n2. Khi có tân ngữ: S + V + O + V + 得 + Tính từ (hoặc: S + O + V + 得 + Tính từ)\n3. Phủ định: V + 得 + 不 + Tính từ",
          usage: "Dùng để đánh giá, nhận xét về phương thức, mức độ hoặc kết quả của một hành động đã diễn ra thường xuyên hoặc vừa kết thúc.",
          examples: [
            "他说得对，我们应该做好垃圾分类。(Bạn ấy nói đúng, chúng ta nên làm tốt việc phân loại rác.)",
            "王芳汉语说得很好。(Vương Phương nói tiếng Trung rất tốt.)",
            "同学们今天打扫得非常干净。(Các bạn học sinh hôm nay quét dọn vô cùng sạch sẽ.)"
          ]
        },
        dialogue: {
          situation: "Hướng dẫn nhau bỏ rác đúng thùng phân loại tại trường",
          lines: [
            { spk: "Minh", text: "李华，这个废旧电池应该扔进哪个垃圾箱？" },
            { spk: "Lý Hoa", text: "电池属于有害垃圾，不能扔进可回收箱，要放进红色有害垃圾箱。" },
            { spk: "Minh", text: "你说得很对！分好类，环保工作才能做得更好。" }
          ]
        },
        quiz: [
          {
            q: "Điền trợ từ bổ ngữ trạng thái: '他做 (____) 很好。'",
            options: ["A. 的", "B. 得", "C. 地", "D. 了"],
            a: 1,
            exp: "Đứng sau động từ để dẫn xuất bổ ngữ trạng thái đánh giá kết quả: dùng '得' (de)."
          },
          {
            q: "Chọn câu phủ định bổ ngữ trạng thái đúng ngữ pháp:",
            options: [
              "A. 他跑得不快。",
              "B. 他不跑得快。",
              "C. 他跑不得快。",
              "D. 他没有跑得快。"
            ],
            a: 0,
            exp: "Phủ định bổ ngữ trạng thái đặt '不' ngay trước tính từ bổ ngữ: V + 得 + 不 + tính từ (跑得不快)."
          }
        ]
      },

      // Bài 15
      {
        id: "bai-15",
        num: 15,
        title: "第15课：学校的环境变得漂亮了",
        pinyin: "Dì shíwǔ kè: Xuéxiào de huánjìng biànde piàoliang le",
        vnTitle: "Môi trường trường học đã trở nên đẹp hơn",
        goal: "Miêu tả sự đổi thay tích cực của khuôn viên; câu hỏi bổ ngữ trạng thái (V + 得 + Tính từ + 吗 / 不); kết cấu 变得 + Tính từ.",
        vocab: [
          { zh: "学校", py: "xuéxiào", vn: "Trường học", type: "Danh từ" },
          { zh: "环境", py: "huánjìng", vn: "Môi trường, khung cảnh", type: "Danh từ" },
          { zh: "干净", py: "gānjìng", vn: "Sạch sẽ", type: "Tính từ" },
          { zh: "打扫", py: "dǎsǎo", vn: "Quét dọn, dọn dẹp", type: "Động từ" },
          { zh: "捡垃圾", py: "jiǎn lājī", vn: "Nhặt rác", type: "Cụm động từ" },
          { zh: "快 / 慢", py: "kuài / màn", vn: "Nhanh / Chậm", type: "Tính từ" },
          { zh: "跑", py: "pǎo", vn: "Chạy", type: "Động từ" },
          { zh: "流利", py: "liúlì", vn: "Lưu loát, trôi chảy", type: "Tính từ" },
          { zh: "变得", py: "biànde", vn: "Trở nên, biến đổi thành", type: "Động từ" },
          { zh: "心情", py: "xīnqíng", vn: "Tâm trạng, cảm xúc", type: "Danh từ" }
        ],
        grammar: {
          title: "Câu hỏi bổ ngữ trạng thái & Kết cấu 变得 + Tính từ (Trở nên...)",
          formula: "1. Câu hỏi xác nhận: V + 得 + Tính từ + 吗？(他跑得快吗？)\n2. Câu hỏi chính phản: V + 得 + Tính từ + 不 + Tính từ？(他跑得快不快？)\n3. Biến đổi trạng thái: Chủ ngữ + 变得 + (更) + Tính từ + 了",
          usage: "Dùng để hỏi thăm và đánh giá chi tiết cách thức/mức độ của hành động. '变得' diễn tả sự chuyển biến sang một trạng thái mới tốt hơn hoặc khác đi.",
          examples: [
            "大家一起打扫后，学校的环境变得更漂亮了。(Sau khi mọi người cùng quét dọn, môi trường trường học đã trở nên đẹp hơn.)",
            "他汉语说得流利不流利？— 他说得很流利。(Bạn ấy nói tiếng Trung trôi chảy không? — Nói rất lưu loát.)",
            "看到干净的教室，大家的心情变得很愉快。(Nhìn thấy lớp học sạch sẽ, tâm trạng của mọi người trở nên rất vui vẻ.)"
          ]
        },
        dialogue: {
          situation: "Nhìn lại thành quả sau buổi lao động làm đẹp trường lớp",
          lines: [
            { spk: "Thầy giáo", text: "同学们，今天大家劳动得非常认真！" },
            { spk: "Học sinh", text: "老师，我们把操场上的垃圾都捡干净了！" },
            { spk: "Thầy giáo", text: "真棒！你们看，校园里的花园变得多美啊！" },
            { spk: "Học sinh", text: "在这么美丽的环境里学习，我们感觉心情好极了！" }
          ]
        },
        quiz: [
          {
            q: "Chọn câu hỏi chính phản bổ ngữ trạng thái đúng:",
            options: [
              "A. 他写得好不好？",
              "B. 他写得好吗好？",
              "C. 他不写得好？",
              "D. 他写好不好得？"
            ],
            a: 0,
            exp: "Câu hỏi chính phản bổ ngữ trạng thái: V + 得 + tính từ + 不 + tính từ -> 他写得好不好？"
          },
          {
            q: "Điền cụm từ chuyển biến trạng thái: '秋天来了，天气 (____) 凉快了。'",
            options: ["A. 变成", "B. 变得", "C. 变化", "D. 变得了"],
            a: 1,
            exp: "Chuyển biến sang một trạng thái tính chất mới: 变得 + tính từ -> 变得凉快了 (trở nên mát mẻ)."
          }
        ]
      },

      // Ôn tập 4
      {
        id: "on-tap-4",
        num: 15.5,
        title: "复习四：回顾第13–15课",
        pinyin: "Fùxí sì: Huígù dì 13–15 kè",
        vnTitle: "Ôn tập 4: Củng cố kiến thức Chủ điểm 4",
        isReview: true,
        summary: "Hệ thống hóa toàn bộ: Câu so sánh hơn 比 và so sánh không bằng 没有; lượng từ 棵; bổ ngữ trạng thái V + 得 + tính từ; câu hỏi V得...吗 và V得...不...; kết cấu 变得 + tính từ. Từ vựng môi trường, trồng cây, phân loại rác, trường học sạch đẹp.",
        quiz: [
          {
            q: "Chọn câu so sánh 'không bằng' đúng ngữ pháp:",
            options: [
              "A. 这棵树不比那棵树高。",
              "B. 这棵树没有那棵树高。",
              "C. 这棵树没那棵树高很高。",
              "D. 这棵树比那棵树没有高。"
            ],
            a: 1,
            exp: "So sánh không bằng: A 没有 B + tính từ -> 这棵树没有那棵树高."
          },
          {
            q: "Từ '垃圾分类' có nghĩa tiếng Việt là gì?",
            options: ["A. Đổ rác", "B. Phân loại rác", "C. Thùng rác", "D. Túi rác"],
            a: 1,
            exp: "垃圾分类 = Phân loại rác."
          }
        ]
      }
    ]
  }
];

// BẢNG NGỮ PHÁP TOÀN SÁCH
const grammarMatrix = [
  { bài: "Bài 1", trọngĐiểm: "Số lớn 万 / 亿; Động từ năng nguyện 应该 / 不应该", cáchDùng: "Đọc số theo đơn vị vạn (10.000) và ức (100.000.000); khuyên nhủ nên/không nên làm gì." },
  { bài: "Bài 2", trọngĐiểm: "Bổ ngữ thời lượng (时量补语); 多长时间", cáchDùng: "V + O + V + 了 + thời lượng; nói hành động kéo dài trong bao lâu." },
  { bài: "Bài 3", trọngĐiểm: "Cấu trúc 都……了; Cụm định ngữ có 的", cáchDùng: "Nhấn mạnh thời gian đã trễ / tình huống đã xảy ra; nối cụm bổ nghĩa với danh từ." },
  { bài: "Bài 5", trọngĐiểm: "Liên từ 又……又……; Số ước lượng & Lượng từ 座", cáchDùng: "Nối hai tính chất song hành của sự vật; lượng từ cho núi non công trình lớn." },
  { bài: "Bài 6", trọngĐiểm: "Phân biệt phó từ 就 và 才", cáchDùng: "就 biểu thị nhanh, sớm, dễ dàng; 才 biểu thị muộn, lâu, tốn nhiều thời gian." },
  { bài: "Bài 7", trọngĐiểm: "Liên từ 一边……一边……; Phó từ 非常", cáchDùng: "Hai hành động diễn ra song song cùng lúc; phó từ nhấn mạnh mức độ cao." },
  { bài: "Bài 9", trọngĐiểm: "Động từ + 一下; Động lượng từ 次 và 遍", cáchDùng: "Thử làm việc gì một chút nhẹ nhàng; 次 đếm số lần, 遍 đếm lượt trọn vẹn từ đầu đến cuối." },
  { bài: "Bài 10", trọngĐiểm: "Câu tồn hiện V + 着; Bổ ngữ 出来; Phó từ 极了", cáchDùng: "Trạng thái đang duy trì tại địa điểm; bổ ngữ xuất hiện; cảm thán cực độ." },
  { bài: "Bài 11", trọngĐiểm: "Cảm thán 多么……啊！; Liệt kê 等; Trợ từ 了", cáchDùng: "Cảm thán ngợi ca; đặt cuối danh sách 'vân vân'; trải nghiệm đã xảy ra." },
  { bài: "Bài 13", trọngĐiểm: "Câu so sánh hơn 比 & So sánh không bằng 没有", cáchDùng: "A 比 B + tính từ (không dùng 很); A 没有 B + tính từ; lượng từ 棵 cho cây." },
  { bài: "Bài 14", trọngĐiểm: "Bổ ngữ trạng thái V + 得 + Tính từ / Bổ ngữ", cáchDùng: "Đánh giá cách thức, kết quả hoặc mức độ của hành động (他说得对)." },
  { bài: "Bài 15", trọngĐiểm: "Câu hỏi bổ ngữ V得…吗 / V得…不…; 变得 + Tính từ", cáchDùng: "Hỏi về mức độ hành động; diễn tả trạng thái chuyển biến sang nét mới." }
];

// BẢNG TRỢ TỪ VÀ LƯỢNG TỪ CỐT LÕI
const particlesAndMeasureWords = [
  { từ: "的 (de)", loại: "Trợ từ kết cấu định ngữ", cáchDùng: "Đứng sau định ngữ bổ nghĩa cho danh từ: 表演时的表情 (Nét mặt lúc biểu diễn)." },
  { từ: "得 (de)", loại: "Trợ từ bổ ngữ trạng thái", cáchDùng: "Đứng sau động từ dẫn xuất bổ ngữ miêu tả mức độ/kết quả: 跑得很快, 说得对." },
  { từ: "着 (zhe)", loại: "Trợ từ động thái trạng thái", cáchDùng: "Đứng sau động từ chỉ trạng thái đang được duy trì liên tục: 摆着文物 (đang bày hiện vật)." },
  { từ: "了 (le)", loại: "Trợ từ ngữ khí / động thái", cáchDùng: "Đánh dấu hành động hoàn thành, trải nghiệm đã qua hoặc sự chuyển đổi tình huống." },
  { từ: "次 (cì)", loại: "Động lượng từ chỉ số lần", cáchDùng: "Đếm số lần một sự việc diễn ra: 去过一次 (từng đi một lần), 看了三次 (đã xem ba lần)." },
  { từ: "遍 (biàn)", loại: "Động lượng từ chỉ lượt", cáchDùng: "Đếm lượt hoàn tất trọn vẹn một quy trình đọc/nghe/xem từ đầu đến cuối: 读了两遍." },
  { từ: "座 (zuò)", loại: "Danh lượng từ", cáchDùng: "Dùng cho núi non, cầu cống, công trình to lớn: 一座山, 两座桥." },
  { từ: "棵 (kē)", loại: "Danh lượng từ", cáchDùng: "Dùng cho cây cối, thảo mộc: 一棵树 (một cái cây)." }
];

// BẢNG QUY TẮC BIẾN ĐIỆU PINYIN
const pinyinRules = [
  { quyTắc: "Biến điệu của 不 (bù)", giảiThích: "Bình thường đọc thanh 4 (bù). Khi đứng trước một âm tiết mang thanh 4, 不 biến điệu thành thanh 2 (bú).", víDụ: "不对 (bú duì), 不是 (bú shì), 不要 (bú yào); nhưng 不好 (bù hǎo - thanh 3)." },
  { quyTắc: "Biến điệu của 一 (yī)", giảiThích: "Đọc đơn lẻ là thanh 1 (yī). Đứng trước thanh 4 đổi thành thanh 2 (yí). Đứng trước thanh 1, 2, 3 đổi thành thanh 4 (yì).", víDụ: "一次 (yí cì - trước thanh 4); 一天 (yì tiān - trước thanh 1), 一起 (yì qǐ - trước thanh 3)." },
  { quyTắc: "Biến điệu hai thanh 3 đi liền nhau", giảiThích: "Khi hai âm tiết thanh 3 đi liền kề nhau, âm tiết thứ nhất biến điệu thành thanh 2 khi phát âm.", víDụ: "你好 (nǐ + hǎo -> ní hǎo), 表演 (biǎo + yǎn -> biáo yǎn)." },
  { quyTắc: "Thanh nhẹ (轻声 - Qīngshēng)", giảiThích: "Một số trợ từ và hậu tố đọc ngắn, nhẹ, không mang dấu thanh điệu.", víDụ: "的 (de), 了 (le), 着 (zhe), 吗 (ma), 呢 (ne), 极了 (jíle)." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    themesPart2,
    grammarMatrix,
    particlesAndMeasureWords,
    pinyinRules
  };
}
