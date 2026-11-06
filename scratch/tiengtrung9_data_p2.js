// tiengtrung9_data_p2.js
// Data for Tiếng Trung Quốc 9 - Part 2: Chủ điểm 3 & Chủ điểm 4, Grammar Summary & Communication

const themesPart2 = [
  {
    themeId: "theme-3",
    themeNum: "Chủ điểm 3",
    chineseTitle: "我们的世界",
    vietTitle: "Thế giới của chúng ta",
    themeDesc: "Quê hương Lào Cai, sự so sánh giữa thành thị và nông thôn, ước mơ du lịch khám phá thế giới, chuẩn bị hành lý, đài truyền hình và các chương trình khám phá tri thức, câu phản vấn với 谁/怎么, các mẫu câu chữ 把 toàn diện.",
    lessons: [
      {
        id: "bai-9",
        lessonNum: "Bài 9",
        title: "我家乡在老街",
        pinyin: "Wǒ jiāxiāng zài Lǎojiē",
        vietTitle: "Quê tôi ở Lào Cai",
        target: "Giới thiệu quê hương, vị trí địa lý, đặc điểm vùng núi và thành thị; so sánh môi trường sống giữa thành phố và nông thôn; sử dụng câu phản vấn với 谁 và 怎么 để nhấn mạnh ý kiến.",
        vocab: [
          { cn: "家乡", py: "jiāxiāng", vi: "quê hương, quê nhà", ex: "我的家乡在越南北部。", viEx: "Quê hương của tôi ở miền Bắc Việt Nam." },
          { cn: "老街", py: "Lǎojiē", vi: "Lào Cai (tỉnh biên giới Việt Nam)", ex: "老街有很多著名的旅游景点。", viEx: "Lào Cai có rất nhiều điểm du lịch nổi tiếng." },
          { cn: "山区", py: "shānqū", vi: "vùng núi, miền núi", ex: "那里的山区风景秀丽。", viEx: "Vùng núi ở đó phong cảnh tươi đẹp." },
          { cn: "省市", py: "shěngshì", vi: "tỉnh thành, tỉnh và thành phố", ex: "老街是越南的一个重要省份。", viEx: "Lào Cai là một tỉnh quan trọng của Việt Nam." },
          { cn: "高楼", py: "gāolóu", vi: "nhà cao tầng", ex: "大城市里到处都是高楼大厦。", viEx: "Trong thành phố lớn đâu đâu cũng là nhà cao tầng chọc trời." },
          { cn: "交通工具", py: "jiāotōng gōngjù", vi: "phương tiện giao thông", ex: "我们出门常使用各种交通工具。", viEx: "Chúng ta ra ngoài thường sử dụng các loại phương tiện giao thông." },
          { cn: "地铁", py: "dìtiě", vi: "tàu điện ngầm", ex: "坐地铁出行既快又方便。", viEx: "Đi tàu điện ngầm vừa nhanh vừa thuận tiện." },
          { cn: "农村", py: "nóngcūn", vi: "nông thôn, làng quê", ex: "农村的空气十分新鲜。", viEx: "Không khí ở nông thôn vô cùng trong lành." },
          { cn: "大城市", py: "dà chéngshì", vi: "thành phố lớn", ex: "大城市的生活节奏很快。", viEx: "Nhịp sống ở thành phố lớn rất nhanh." },
          { cn: "人口", py: "rénkǒu", vi: "dân số", ex: "大城市人口多，交通容易拥挤。", viEx: "Thành phố lớn đông dân, giao thông dễ bị ùn tắc." },
          { cn: "平静", py: "píngjìng", vi: "yên bình, thanh bình", ex: "我喜欢农村平静的生活。", viEx: "Tôi thích cuộc sống thanh bình ở nông thôn." },
          { cn: "接近大自然", py: "jiējìn dàzìrán", vi: "gần gũi thiên nhiên", ex: "住在乡村可以更好地接近大自然。", viEx: "Sống ở làng quê có thể gần gũi thiên nhiên tốt hơn." }
        ],
        dialogue: [
          { speaker: "小明", cn: "阿龙，你的家乡在哪里？", py: "Ālóng, nǐ de jiāxiāng zài nǎlǐ?", vi: "A Long, quê bạn ở đâu vậy?" },
          { speaker: "阿龙", cn: "我家乡在老街。那里山清水秀，沙坝（Sapa）十分凉爽。", py: "Wǒ jiāxiāng zài Lǎojiē. Nàlǐ shānqīng-shuǐxiù, Shābà shífēn liángshuǎng.", vi: "Quê mình ở Lào Cai. Nơi đó non xanh nước biếc, Sa Pa vô cùng mát mẻ." },
          { speaker: "小明", cn: "听说那里的风景非常迷人，是吗？", py: "Tīngshuō nàlǐ de fēngjǐng fēicháng mírén, shì ma?", vi: "Nghe nói phong cảnh ở đó cực kỳ quyến rũ, có đúng không?" },
          { speaker: "阿龙", cn: "那当然！谁不知道老街的美景呢？去过的人都赞不绝口！", py: "Nà dāngrán! Shéi bù zhīdào Lǎojiē de měijǐng ne? Qù guo de rén dōu zànbùjuékǒu!", vi: "Đương nhiên rồi! Ai mà chẳng biết cảnh đẹp Lào Cai chứ? Ai đến rồi cũng khen nức nở!" }
        ],
        grammar: {
          title: "Câu phản vấn với 谁 và 怎么 (Câu hỏi tu từ nhấn mạnh)",
          rules: [
            {
              pattern: "1. 谁 + Động từ / Cụm từ + 呢？",
              desc: "Dùng hình thức hỏi với '谁' nhưng mang ý khẳng định tuyệt đối (Ai mà không biết = Ai cũng biết).",
              example: "谁说下龙湾的风景不漂亮啊？ (Ai bảo phong cảnh Hạ Long không đẹp chứ? &rarr; Cực kỳ đẹp!)"
            },
            {
              pattern: "2. 怎么 + Động từ / Cụm từ + 呢？",
              desc: "Dùng 'sao có thể... chứ' để khẳng định ý muốn làm hoặc phủ định điều vô lý.",
              example: "好朋友请我吃饭，我怎么能不去呢？ (Bạn tốt mời cơm, sao tôi có thể không đi chứ? &rarr; Nhất định tôi sẽ đi!)"
            }
          ]
        },
        culture: "Cảnh sắc quê hương Lào Cai & Sa Pa: Cổng trời Hoàng Liên Sơn, đỉnh Fansipan hùng vĩ, ruộng bậc thang Mù Cang Chải và phiên chợ tình vùng cao giàu bản sắc các dân tộc Tày, H'Mông, Dao.",
        quiz: [
          { q: "Câu phản vấn '谁不知道老街的美景呢？' mang ý nghĩa gì?", options: ["Không ai biết cảnh đẹp Lào Cai", "Mọi người ai cũng biết cảnh đẹp Lào Cai", "Chỉ có một người biết", "Cảnh Lào Cai không đẹp"], ans: 1, exp: "Câu phản vấn với '谁 bù biết' mang ý khẳng định: 'Ai cũng đều biết rõ'." },
          { q: "Từ nào có nghĩa là 'gần gũi thiên nhiên'?", options: ["接近大自然", "交通拥挤", "交通工具", "高楼大厦"], ans: 0, exp: "'接近大自然' (jiējìn dàzìrán) là gần gũi thiên nhiên." },
          { q: "Phương tiện giao thông nào chạy dưới lòng đất?", options: ["公交车", "地铁", "飞机", "轮船"], ans: 1, exp: "'地铁' (dìtiě) là tàu điện ngầm." },
          { q: "Câu '好朋友有困难，我怎么能不帮呢？' có ngụ ý là:", options: ["Tôi không muốn giúp", "Tôi nhất định sẽ giúp bạn", "Tôi không có tiền", "Tôi không biết bạn gặp khó khăn"], ans: 1, exp: "'Sao có thể không giúp chứ' ngụ ý là tôi nhất định sẽ ra tay giúp đỡ bạn." }
        ]
      },
      {
        id: "bai-10",
        lessonNum: "Bài 10",
        title: "走遍全世界的梦想",
        pinyin: "Zǒubiàn quán shìjiè de mèngxiǎng",
        vietTitle: "Ước mơ đi khắp thế giới & Chuẩn bị hành lý",
        target: "Nói về ước mơ du lịch; kỹ năng thu dọn hành lý, ba lô, mang theo ô dù; giới thiệu các danh thắng thế giới (Vạn Lý Trường Thành, Cố Cung, Binh mã dũng Tây An); sử dụng câu chữ 把 cơ bản (1, 2).",
        vocab: [
          { cn: "梦想", py: "mèngxiǎng", vi: "ước mơ, khát vọng", ex: "我的梦想是当一名飞行员。", viEx: "Ước mơ của tôi là trở thành một phi công." },
          { cn: "走遍", py: "zǒubiàn", vi: "đi khắp, đi hết", ex: "他想走遍全世界的名胜古迹。", viEx: "Cậu ấy muốn đi khắp các danh lam thắng cảnh trên thế giới." },
          { cn: "旅行", py: "lǚxíng", vi: "du lịch, chuyến đi", ex: "旅行可以开阔我们的眼界。", viEx: "Đi du lịch có thể mở rộng tầm mắt của chúng ta." },
          { cn: "行李", py: "xíngli", vi: "hành lý", ex: "出发前请收拾好行李。", viEx: "Trước khi khởi hành xin hãy thu dọn hành lý cẩn thận." },
          { cn: "收拾", py: "shōushi", vi: "thu dọn, sắp xếp", ex: "我已经把房间收拾干净了。", viEx: "Tôi đã thu dọn phòng ốc sạch sẽ rồi." },
          { cn: "背包", py: "bèibāo", vi: "ba lô", ex: "他背着一个黑色的背包。", viEx: "Anh ấy đeo một chiếc ba lô màu đen." },
          { cn: "雨伞", py: "yǔsǎn", vi: "ô, dù che mưa", ex: "出门记得带雨伞。", viEx: "Ra ngoài nhớ mang theo ô che mưa." },
          { cn: "长城", py: "Chángchéng", vi: "Vạn Lý Trường Thành", ex: "不到长城非好汉。", viEx: "Bất đáo Trường Thành phi hảo hán (Chưa đến Trường Thành chưa phải trang anh hào)." },
          { cn: "故宫", py: "Gùgōng", vi: "Cố Cung (Tử Cấm Thành Bắc Kinh)", ex: "故宫是中国古代皇宫。", viEx: "Cố Cung là hoàng cung cổ đại của Trung Quốc." },
          { cn: "兵马俑", py: "bīngmǎyǒng", vi: "Binh mã dũng (Tượng đội quân đất nung Tây An)", ex: "秦始皇兵马俑是世界奇迹。", viEx: "Binh mã dũng Tần Thủy Hoàng là kỳ quan thế giới." },
          { cn: "古都", py: "gǔdū", vi: "cố đô, thủ đô cổ", ex: "西安是一座著名的历史古都。", viEx: "Tây An là một cố đô lịch sử nổi tiếng." }
        ],
        dialogue: [
          { speaker: "大卫", cn: "明天就要去中国旅游了，你把行李收拾好了没有？", py: "Míngtiān jiù yào qù Zhōngguó lǚyóu le, nǐ bǎ xíngli shōushi hǎo le méiyǒu?", vi: "Ngày mai là đi du lịch Trung Quốc rồi, cậu đã thu dọn xong hành lý chưa?" },
          { speaker: "张伟", cn: "我把衣服和相机都放进背包里了。你看天气预报了吗？", py: "Wǒ bǎ yīfu hé xiàngjī dōu fàng jìn bèibāo lǐ le. Nǐ kàn tiānqì yùbào le ma?", vi: "Mình đã bỏ quần áo và máy ảnh vào trong ba lô rồi. Cậu xem dự báo thời tiết chưa?" },
          { speaker: "大卫", cn: "看了，北京明天可能下雨，你一定要把雨伞带上！", py: "Kàn le, Běijīng míngtiān kěnéng xiàyǔ, nǐ yídìng yào bǎ yǔsǎn dài shang!", vi: "Xem rồi, Bắc Kinh mai có thể mưa, cậu nhất định phải mang ô theo đấy!" }
        ],
        grammar: {
          title: "Câu chữ 把 (1), (2) - Kết cấu xử lý đối tượng",
          rules: [
            {
              pattern: "Chủ ngữ + 把 + Tân ngữ xác định + Động từ + Thành phần kết quả / Nơi chốn / Hướng",
              desc: "Nhấn mạnh cách thức xử lý hoặc kết quả tác động lên một tân ngữ đã được xác định trước.",
              example: "王老师把那本书放在桌子上了。 (Thầy Vương đã đặt quyển sách đó lên bàn rồi.)"
            },
            {
              pattern: "Chủ ngữ + 把 + Tân ngữ + Động từ + jìn / shàng / xià...",
              desc: "Đưa vật vào một vị trí cụ thể (phương hướng).",
              example: "我把雨伞放进背包里了。 (Tôi đã bỏ ô vào trong ba lô rồi.)"
            },
            {
              pattern: "Động từ năng nguyện đứng TRƯỚC chữ 把",
              desc: "Các từ như 想, 要, 可以, 应该, 必须 phải đặt trước '把'.",
              example: "你应该把作业写完。 (Cậu nên làm cho xong bài tập.)"
            }
          ]
        },
        culture: "Kỳ quan Trung Hoa: Vạn Lý Trường Thành uốn lượn hàng vạn dặm, Cố Cung Bắc Kinh với hơn 8.000 gian phòng dát ngói lưu ly vàng, và Binh mã dũng Tây An nghìn năm trầm mặc dưới lòng đất.",
        quiz: [
          { q: "Sắp xếp đúng câu chữ 把: '桌子上 / 把 / 放在 / 弟弟 / 书 / 了'", options: ["弟弟把书放在桌子上了。", "弟弟书把放在桌子上了。", "桌子上弟弟把书放了。", "把弟弟放在桌子上书了。"], ans: 0, exp: "Khung câu chữ 把: S + 把 + O + V + 在 + địa điểm: '弟弟把书放在桌子上了'." },
          { q: "Động từ năng nguyện '应该' (nên) đứng ở vị trí nào trong câu chữ 把?", options: ["Đứng sau động từ", "Đứng sau tân ngữ", "Đứng trước chữ '把'", "Đứng cuối câu"], ans: 2, exp: "Động từ năng nguyện luôn đứng TRƯỚC chữ 把 (ví dụ: '你应该把...')." },
          { q: "Thành phố nào được mệnh danh là 'cố đô lịch sử' nổi tiếng với Binh mã dũng?", options: ["Thượng Hải", "Quảng Châu", "Tây An (西安)", "Thâm Quyến"], ans: 2, exp: "Tây An (西安) là cố đô lịch sử nổi tiếng với di tích lăng mộ Tần Thủy Hoàng và Binh mã dũng." },
          { q: "Từ '走遍' (zǒubiàn) có nghĩa là gì?", options: ["Đi chậm chạp", "Đi khắp, đi hết", "Không muốn đi", "Đi lạc đường"], ans: 1, exp: "'走遍' nghĩa là đi khắp mọi nơi (走遍全世界 = đi khắp thế giới)." }
        ]
      },
      {
        id: "bai-11",
        lessonNum: "Bài 11",
        title: "看电视了解世界",
        pinyin: "Kàn diànshì liǎojiě shìjiè",
        vietTitle: "Xem truyền hình để tìm hiểu thế giới",
        target: "Nói về các kênh, chương trình truyền hình yêu thích (tin tức, du lịch, giáo dục, thể thao); trình bày kiến thức thu nhận được; sử dụng câu chữ 把 (3, 4) và mẫu 把 A 当/看成 B (xem A là B).",
        vocab: [
          { cn: "电视", py: "diànshì", vi: "ti vi, truyền hình", ex: "看电视可以增长见识。", viEx: "Xem truyền hình có thể mở mang hiểu biết." },
          { cn: "频道", py: "píndào", vi: "kênh truyền hình", ex: "中央电视台有很多电视频道。", viEx: "Đài truyền hình Trung ương có rất nhiều kênh truyền hình." },
          { cn: "电视台", py: "diànshìtái", vi: "đài truyền hình", ex: "他在省电视台工作。", viEx: "Anh ấy làm việc ở đài truyền hình tỉnh." },
          { cn: "新闻", py: "xīnwén", vi: "tin tức, thời sự", ex: "每天晚上七点爸爸都看新闻。", viEx: "Mỗi tối lúc 7 giờ bố đều xem thời sự." },
          { cn: "旅游", py: "lǚyóu", vi: "du lịch", ex: "旅游频道介绍了各国的风俗。", viEx: "Kênh du lịch giới thiệu phong tục các nước." },
          { cn: "教育", py: "jiàoyù", vi: "giáo dục", ex: "教育节目对学生很有帮助。", viEx: "Chương trình giáo dục rất có ích đối với học sinh." },
          { cn: "体育", py: "tǐyù", vi: "thể thao", ex: "体育频道正在直播足球比赛。", viEx: "Kênh thể thao đang phát sóng trực tiếp trận bóng đá." },
          { cn: "世界遗产", py: "shìjiè yíchǎn", vi: "di sản thế giới", ex: "下龙湾被列为世界自然遗产。", viEx: "Vịnh Hạ Long được công nhận là Di sản Thiên nhiên Thế giới." },
          { cn: "收看", py: "shōukàn", vi: "đón xem, xem đài", ex: "欢迎大家收看本期节目。", viEx: "Hoan nghênh quý khán giả đón xem chương trình kỳ này." },
          { cn: "了解", py: "liǎojiě", vi: "tìm hiểu, thấu hiểu", ex: "看纪录片可以了解历史。", viEx: "Xem phim tài liệu có thể tìm hiểu lịch sử." },
          { cn: "知识", py: "zhīshi", vi: "tri thức, kiến thức", ex: "我们在书本和电视里学到很多知识。", viEx: "Chúng ta học được rất nhiều kiến thức trong sách vở và truyền hình." },
          { cn: "名胜古迹", py: "míngshèng gǔjì", vi: "danh lam thắng cảnh, di tích lịch sử", ex: "中国有数不清的名胜古迹。", viEx: "Trung Quốc có vô số danh lam thắng cảnh và di tích cổ." }
        ],
        dialogue: [
          { speaker: "林林", cn: "浩然，你平时喜欢看哪个电视频道？", py: "Hàorán, nǐ píngshí xǐhuan kàn nǎ ge diànshì píndào?", vi: "Hạo Nhiên, ngày thường bạn thích xem kênh truyền hình nào?" },
          { speaker: "浩然", cn: "我最喜欢收看地理探索频道和新闻频道。", py: "Wǒ zuì xǐhuan shōukàn dìlǐ tànsuǒ píndào hé xīnwén píndào.", vi: "Mình thích đón xem kênh khám phá địa lý và kênh thời sự nhất." },
          { speaker: "林林", cn: "为什么呢？看动画片不是更有趣吗？", py: "Wèishénme ne? Kàn dònghuàpiān bú shì gèng yǒuqù ma?", vi: "Tại sao thế? Xem hoạt hình không phải thú vị hơn sao?" },
          { speaker: "浩然", cn: "因为看纪录片能把书本上的知识和真实的世界联系起来！我把电视当成了看世界的窗口。", py: "Yīnwèi kàn jìlùpiān néng bǎ shūběn shang de zhīshi hé zhēnshí de shìjiè liánxì qǐlái! Wǒ bǎ diànshì dàngchéng le kàn shìjiè de chuāngkǒu.", vi: "Bởi vì xem phim tài liệu có thể kết nối kiến thức sách vở với thế giới thực tế! Mình coi truyền hình là cánh cửa sổ để ngắm nhìn thế giới." }
        ],
        grammar: {
          title: "Câu chữ 把 (3), (4) - Mẫu 把 A 当/看成 B & Dạng phủ định",
          rules: [
            {
              pattern: "1. Chủ ngữ + 把 A + 当成 / 看成 + B",
              desc: "Biểu thị xem/coi đối tượng A là hoặc như là B.",
              example: "我把电视当成了学习的工具。 (Tôi coi truyền hình là công cụ học tập.) / 如果你不把别人当朋友，别人也不会把你当朋友。 (Nếu bạn không coi người khác là bạn bè, người khác cũng sẽ không coi bạn là bạn.)"
            },
            {
              pattern: "2. Phủ định của câu chữ 把: 没(有) + 把 + Tân ngữ + V + Thành phần khác",
              desc: "Từ phủ định '没有' hoặc '别' bắt buộc phải đứng TRƯỚC chữ 把.",
              example: "弟弟没有把牛奶喝完。 (Em trai chưa uống hết cốc sữa.) / 你别把秘密告诉别人。 (Cậu đừng đem bí mật kể cho người khác.)"
            }
          ]
        },
        culture: "Kênh truyền hình khám phá & Đài Truyền hình Trung ương (CCTV): Các chương trình như 'Khám phá thế giới' (探索·发现), 'Đọc sách' và các phim tài liệu 'Vị giác Trung Hoa' (舌尖上的中国) nổi tiếng toàn cầu.",
        quiz: [
          { q: "Điền từ phủ định đúng: '他______把今天的作业做完。'", options: ["不", "没", "别", "未"], ans: 1, exp: "Phủ định hành động chưa hoàn thành trong câu chữ 把 dùng '没(有)' đứng trước '把'." },
          { q: "Mẫu câu '把 A 当成 B' có nghĩa là:", options: ["Đổi A lấy B", "Xem / Coi A như là B", "Bỏ rơi cả A và B", "Ghét cả A và B"], ans: 1, exp: "'把 A 当成 B' có nghĩa là xem/coi A như là B." },
          { q: "Từ nào có nghĩa là 'danh lam thắng cảnh và di tích lịch sử'?", options: ["世界遗产", "名胜古迹", "电视频道", "天气预报"], ans: 1, exp: "'名胜古迹' (míngshèng gǔjì) là danh lam thắng cảnh và di tích lịch sử." },
          { q: "Câu nào dưới đây viết đúng ngữ pháp?", options: ["我把书没有放好。", "我没有把书放好。", "把书我没有放好。", "我把没有书放好。"], ans: 1, exp: "Từ phủ định '没有' bắt buộc phải đứng TRƯỚC chữ 把: '我没有把书放好'." }
        ]
      },
      {
        id: "on-tap-3",
        lessonNum: "Ôn tập 3",
        title: "复习三 (Ôn tập Chủ điểm 3)",
        pinyin: "Fùxí sān",
        vietTitle: "Hệ thống hóa Chủ điểm 3: Khám phá thế giới",
        target: "Củng cố câu phản vấn với 谁/怎么; nắm vững toàn diện câu chữ 把 (kết quả, phương hướng, 把 A 当成 B, phủ định với 没); vận dụng giới thiệu quê hương và ước mơ du lịch.",
        vocab: [
          { cn: "奇迹", py: "qíjì", vi: "kỳ tích, kỳ quan", ex: "长城是人类建筑史上的奇迹。", viEx: "Vạn Lý Trường Thành là kỳ tích trong lịch sử kiến trúc nhân loại." },
          { cn: "探索", py: "tànsuǒ", vi: "khám phá, tìm tòi", ex: "人类不断探索未知的宇宙。", viEx: "Loài người không ngừng khám phá vũ trụ chưa biết." },
          { cn: "广阔", py: "guǎngkuò", vi: "rộng lớn, bao la", ex: "世界如此广阔，我想去看看。", viEx: "Thế giới bao la như vậy, tôi muốn đi ngắm nhìn." }
        ],
        summary: "Tổng kết: Câu phản vấn (谁/怎么……呢?) dùng để khẳng định mạnh mẽ; Cấu trúc câu chữ 把 với các bổ ngữ kết quả, bổ ngữ xu hướng và mẫu '把 A 当成 B'; Vị trí của phó từ phủ định và động từ năng nguyện luôn đứng TRƯỚC chữ 把.",
        quiz: [
          { q: "Chọn vị trí đúng của '想' trong câu: '(A) 哥哥 (B) 把 (C) 电脑 (D) 修好。'", options: ["Vị trí (A)", "Vị trí (B)", "Vị trí (C)", "Vị trí (D)"], ans: 1, exp: "Động từ năng nguyện '想' đứng trước chữ 把: '哥哥想把电脑修好'." },
          { q: "Câu phản vấn '这道题这么简单，谁不会做呢？' có nghĩa là:", options: ["Không ai biết làm", "Chỉ một bạn biết làm", "Ai cũng đều biết làm", "Đề bài quá khó"], ans: 2, exp: "Ý phản vấn: Bài tập dễ thế này, ai mà chẳng biết làm (= ai cũng biết làm)." },
          { q: "Điền cụm từ: '我们应该把老师______自己的朋友。'", options: ["当成", "看到", "拿来", "走遍"], ans: 0, exp: "'把...当成...' = coi... là/như là..." },
          { q: "Từ '行李' có nghĩa là gì?", options: ["Xe cộ", "Hành lý", "Thời tiết", "Bản đồ"], ans: 1, exp: "'行李' (xíngli) là hành lý." }
        ]
      }
    ]
  },
  {
    themeId: "theme-4",
    themeNum: "Chủ điểm 4",
    chineseTitle: "我们的未来",
    vietTitle: "Tương lai của chúng ta",
    themeDesc: "Ước mơ nghề nghiệp hướng dẫn viên du lịch, phương pháp học tốt ngoại ngữ, vai trò và thói quen sử dụng điện thoại thông minh hợp lý, lượng từ lặp lại (AA, 一AA), cụm chủ vị làm định ngữ với 的, trạng ngữ chỉ cách thức với 地, phân biệt 的、地、得.",
    lessons: [
      {
        id: "bai-13",
        lessonNum: "Bài 13",
        title: "我喜欢当一名导游",
        pinyin: "Wǒ xǐhuan dāng yì míng dǎoyóu",
        vietTitle: "Tôi thích làm một hướng dẫn viên du lịch",
        target: "Giới thiệu tính cách, sở thích, ước mơ nghề nghiệp tương lai; miêu tả công việc hướng dẫn viên; lựa chọn phương tiện giao thông và tối ưu chi phí; sử dụng lượng từ lặp lại (个个、张张、一件件...).",
        vocab: [
          { cn: "导游", py: "dǎoyóu", vi: "hướng dẫn viên du lịch", ex: "当导游可以去很多好玩的地方。", viEx: "Làm hướng dẫn viên có thể đi nhiều nơi vui vẻ thú vị." },
          { cn: "印象", py: "yìnxiàng", vi: "ấn tượng", ex: "北京给我留下了深刻的印象。", viEx: "Bắc Kinh để lại cho tôi ấn tượng sâu sắc." },
          { cn: "开朗", py: "kāilǎng", vi: "cởi mở, hoạt bát, vui vẻ", ex: "她的性格很开朗，容易交朋友。", viEx: "Tính cách cô ấy rất cởi mở, dễ kết giao bạn bè." },
          { cn: "当地", py: "dāngdì", vi: "địa phương, bản xứ", ex: "导游向我们介绍了当地的风俗。", viEx: "Hướng dẫn viên giới thiệu cho chúng tôi phong tục địa phương." },
          { cn: "风俗习惯", py: "fēngsú xíguàn", vi: "phong tục tập quán", ex: "各民族有不同的风俗习惯。", viEx: "Các dân tộc có phong tục tập quán khác nhau." },
          { cn: "性格", py: "xìnggé", vi: "tính cách", ex: "开朗的性格很适合做接待工作。", viEx: "Tính cách cởi mở rất phù hợp làm công tác đón tiếp." },
          { cn: "适合", py: "shìhé", vi: "phù hợp, thích hợp", ex: "这件衣服很适合你。", viEx: "Bộ quần áo này rất hợp với bạn." },
          { cn: "费用", py: "fèiyòng", vi: "chi phí, lệ phí", ex: "坐火车可以节省一部分旅行费用。", viEx: "Đi tàu hỏa có thể tiết kiệm một phần chi phí du lịch." },
          { cn: "长途汽车", py: "chángtú qìchē", vi: "xe khách đường dài", ex: "乘长途汽车去老街很方便。", viEx: "Đi xe khách đường dài lên Lào Cai rất thuận tiện." },
          { cn: "火车", py: "huǒchē", vi: "tàu hỏa", ex: "火车穿过了美丽的山丘。", viEx: "Đoàn tàu hỏa băng qua những ngọn đồi xinh đẹp." },
          { cn: "飞机", py: "fēijī", vi: "máy bay", ex: "坐飞机速度最快。", viEx: "Đi máy bay tốc độ nhanh nhất." },
          { cn: "节省", py: "jiéshěng", vi: "tiết kiệm", ex: "我们要节省用水用电。", viEx: "Chúng ta cần tiết kiệm nước và điện." }
        ],
        dialogue: [
          { speaker: "小敏", cn: "亮亮，你将来想从事什么职业？", py: "Liàngliang, nǐ jiānglái xiǎng cóngshì shénme zhíyè?", vi: "Lượng Lượng, tương lai bạn muốn làm nghề gì?" },
          { speaker: "亮亮", cn: "我喜欢旅行，性格又开朗，所以我想当一名优秀的中文导游。", py: "Wǒ xǐhuan lǚxíng, xìnggé yòu kāilǎng, suǒyǐ wǒ xiǎng dāng yì míng yōuxiù de Zhōngwén dǎoyóu.", vi: "Mình thích du lịch, tính cách lại cởi mở, cho nên mình muốn làm một hướng dẫn viên tiếng Trung xuất sắc." },
          { speaker: "小敏", cn: "当导游很棒！可以认识来自世界各地的朋友，向他们介绍我们美丽的祖国。", py: "Dāng dǎoyóu hěn bàng! Kěyǐ rènshi láizì shìjiè gèdì de péngyou, xiàng tāmen jièshào wǒmen měilì de zǔguó.", vi: "Làm hướng dẫn viên tuyệt lắm! Có thể quen biết bạn bè từ khắp nơi trên thế giới, giới thiệu với họ về tổ quốc tươi đẹp của chúng ta." },
          { speaker: "亮亮", cn: "对！看着游客一张张开心的笑脸，我心里就特别高兴。", py: "Duì! Kànzhe yóukè yì zhāngzhāng kāixīn de xiàoliǎn, wǒ xīnlǐ jiù tèbié gāoxìng.", vi: "Đúng thế! Nhìn từng nụ cười rạng rỡ của du khách, trong lòng mình lại thấy vô cùng vui sướng." }
        ],
        dialoguePart2: [],
        grammar: {
          title: "Lượng từ lặp lại (个个、张张、一件件...)",
          rules: [
            {
              pattern: "Dạng AA: Lượng từ + Lượng từ + 都 + Vị ngữ",
              desc: "Nhấn mạnh tính toàn thể, 'từng người/từng cái đều...'.",
              example: "同学们个个都很努力。 (Các bạn học ai nấy đều rất nỗ lực.) / 这里的菜样样都好吃。 (Món ăn ở đây món nào cũng ngon.)"
            },
            {
              pattern: "Dạng 一AA: 一 + Lượng từ + Lượng từ + Danh từ",
              desc: "Nhấn mạnh sự liên tiếp, từng cái từng cái một nối đuôi nhau.",
              example: "一张张照片记录了美好的回忆。 (Từng tấm ảnh ghi lại những kỷ niệm đẹp đẽ.) / 一件件衣服整整齐齐。 (Từng bộ quần áo ngay ngắn phẳng phiu.)"
            }
          ]
        },
        culture: "Nghề hướng dẫn viên du lịch & Sứ giả văn hóa: Hướng dẫn viên không chỉ dẫn đường mà còn là cầu nối quảng bá văn hóa, ẩm thực, phong tục truyền thống của quê hương đến với bạn bè quốc tế.",
        quiz: [
          { q: "Cụm từ lặp lượng từ '个个都很努力' mang ý nghĩa gì?", options: ["Không ai cố gắng", "Chỉ vài người cố gắng", "Tất cả mọi người ai nấy đều rất cố gắng", "Một người cố gắng"], ans: 2, exp: "Lượng từ lặp lại '个个' mang nghĩa là 'tất cả mọi người / ai nấy đều'." },
          { q: "Từ nào có nghĩa là 'tính cách cởi mở, hoạt bát'?", options: ["开朗", "紧张", "节省", "平静"], ans: 0, exp: "'开朗' (kāilǎng) là cởi mở, hoạt bát, vui vẻ." },
          { q: "Điền lượng từ lặp lại thích hợp: '看着台下______笑脸，他高兴极了。'", options: ["一本本", "一张张", "一条条", "一件件"], ans: 1, exp: "Khuôn mặt, bức ảnh dùng lượng từ '张', lặp lại là '一张张'." },
          { q: "Nghề nghiệp nào chuyên đưa khách đi tham quan và thuyết minh văn hóa?", options: ["导游", "主持人", "研究员", "医生"], ans: 0, exp: "'导游' (dǎoyóu) là hướng dẫn viên du lịch." }
        ]
      },
      {
        id: "bai-14",
        lessonNum: "Bài 14",
        title: "我要学好外语",
        pinyin: "Wǒ yào xuéhǎo wàiyǔ",
        vietTitle: "Tôi muốn học thật tốt ngoại ngữ",
        target: "Nói về lợi ích của việc học ngoại ngữ và phương pháp học tập; chia sẻ khó khăn và cách vượt qua; rèn luyện đều 4 kỹ năng nghe, nói, đọc, viết; sử dụng cụm chủ vị làm định ngữ với trợ từ 的.",
        vocab: [
          { cn: "外语", py: "wàiyǔ", vi: "ngoại ngữ", ex: "学习外语很有用。", viEx: "Học ngoại ngữ rất hữu ích." },
          { cn: "语法", py: "yǔfǎ", vi: "ngữ pháp", ex: "中文语法的词序很重要。", viEx: "Trật tự từ trong ngữ pháp tiếng Trung rất quan trọng." },
          { cn: "生词", py: "shēngcí", vi: "từ mới", ex: "学完课文后要复习生词。", viEx: "Học xong bài đọc cần ôn tập từ mới." },
          { cn: "方法", py: "fāngfǎ", vi: "phương pháp, cách thức", ex: "找到好的学习方法事半功倍。", viEx: "Tìm được phương pháp học tốt thì làm ít công nhiều." },
          { cn: "复习", py: "fùxí", vi: "ôn tập", ex: "温故而知新，我们要经常复习。", viEx: "Ôn cố tri tân, chúng ta cần thường xuyên ôn tập." },
          { cn: "克服困难", py: "kèfú kùnnan", vi: "khắc phục khó khăn, vượt khó", ex: "我们要勇于克服学习中的困难。", viEx: "Chúng ta cần dũng cảm khắc phục khó khăn trong học tập." },
          { cn: "提高", py: "tígāo", vi: "nâng cao, cải thiện", ex: "多听多说能提高听力能力。", viEx: "Nghe nhiều nói nhiều có thể nâng cao khả năng nghe." },
          { cn: "听、说、读、写", py: "tīng, shuō, dú, xiě", vi: "nghe, nói, đọc, viết (4 kỹ năng)", ex: "学外语要兼顾听说读写。", viEx: "Học ngoại ngữ cần chú trọng cả nghe, nói, đọc, viết." },
          { cn: "认为", py: "rènwéi", vi: "cho rằng, nhận định rằng", ex: "我认为多练习是最好的方法。", viEx: "Tôi cho rằng luyện tập nhiều là phương pháp tốt nhất." },
          { cn: "能力", py: "nénglì", vi: "năng lực, khả năng", ex: "他的口语表达能力很强。", viEx: "Khả năng diễn đạt khẩu ngữ của anh ấy rất giỏi." }
        ],
        dialogue: [
          { speaker: "文英", cn: "建国，你学中文有什么好方法吗？我觉得汉字真难记！", py: "Jiànguó, nǐ xué Zhōngwén yǒu shénme hǎo fāngfǎ ma? Wǒ juéde Hànzì zhēn nán jì!", vi: "Kiến Quốc, bạn học tiếng Trung có bí quyết gì hay không? Mình thấy chữ Hán thật khó nhớ!" },
          { speaker: "建国", cn: "我每天都坚持读半个小时。我能听懂中国人说的话，是因为我经常看中文视频。", py: "Wǒ měi tiān dōu jiānchí dú bàn ge xiǎoshí. Wǒ néng tīngdǒng Zhōngguórén shuō de huà, shì yīnwèi wǒ jīngcháng kàn Zhōngwén shìpín.", vi: "Mỗi ngày mình đều kiên trì đọc nửa tiếng. Mình có thể nghe hiểu lời người Trung Quốc nói là vì mình thường xuyên xem video tiếng Trung." },
          { speaker: "文英", cn: "妈妈做的菜固然好吃，但学习语言需要自己努力！", py: "Māma zuò de cài gùrán hǎochī, dàn xuéxí yǔyán xūyào zìjǐ nǔlì!", vi: "Món ăn mẹ nấu dẫu ngon miệng, nhưng học ngôn ngữ thì cần tự thân nỗ lực!" },
          { speaker: "建国", cn: "对！只要掌握了科学的方法，听说读写的能力都能很快提高。", py: "Duì! Zhǐyào zhǎngwò le kēxué de fāngfǎ, tīng shuō dú xiě de nénglì dōu néng hěn kuài tígāo.", vi: "Đúng thế! Chỉ cần nắm vững phương pháp khoa học, năng lực nghe nói đọc viết đều có thể nâng cao rất nhanh." }
        ],
        grammar: {
          title: "Cụm chủ vị làm định ngữ với trợ từ 的",
          rules: [
            {
              pattern: "[Cụm chủ vị / Mệnh đề mô tả] + 的 + Danh từ trung tâm",
              desc: "Một cụm chủ ngữ - vị ngữ hoàn chỉnh đứng trước trợ từ '的' để bổ nghĩa cho danh từ đứng sau.",
              example: "我能听懂中国人说的话。 (Tôi có thể nghe hiểu lời người Trung Quốc nói. &rarr; '中国人说' là cụm chủ vị bổ nghĩa cho '话'.)"
            },
            {
              pattern: "Ví dụ mở rộng",
              desc: "Cụm chủ vị mô tả người, sự vật hoặc địa điểm.",
              example: "妈妈做的菜很好吃。 (Món ăn mẹ nấu rất ngon.) / 你们去参观的博物馆远吗？ (Bảo tàng mà các bạn đi tham quan có xa không?)"
            }
          ]
        },
        culture: "Phương pháp học tiếng Trung hiệu quả: Vận dụng phương pháp chiết tự chữ Hán, tìm hiểu bộ thủ biểu ý, học từ vựng theo trường nghĩa và thực hành giao tiếp thực tế với người bản ngữ.",
        quiz: [
          { q: "Trong câu '这是妈妈做的菜', thành phần nào là định ngữ?", options: ["这是", "妈妈做", "菜", "很好吃"], ans: 1, exp: "'妈妈做' là cụm chủ vị đứng trước '的' làm định ngữ bổ nghĩa cho '菜'." },
          { q: "Thành ngữ '温故而知新' khuyên chúng ta điều gì?", options: ["Ăn uống điều độ", "Ôn tập kiến thức cũ để hiểu thêm điều mới", "Chơi thể thao thường xuyên", "Đi du lịch nhiều nơi"], ans: 1, exp: "'温故而知新' có nghĩa là ôn lại cái cũ để biết thêm cái mới." },
          { q: "Bốn kỹ năng cốt lõi khi học ngoại ngữ là:", options: ["Chạy, nhảy, bơi, lặn", "Nghe, nói, đọc, viết (听说读写)", "Hát, múa, đàn, vẽ", "Cắt, dán, gấp, may"], ans: 1, exp: "4 kỹ năng ngoại ngữ là '听、说、读、写' (Nghe, Nói, Đọc, Viết)." },
          { q: "Điền trợ từ đúng: '中国朋友送______礼物我很喜欢。'", options: ["的", "地", "得", "过"], ans: 0, exp: "Nối cụm định ngữ chủ vị '中国朋友送' với danh từ '礼物' dùng trợ từ '的'." }
        ]
      },
      {
        id: "bai-15",
        lessonNum: "Bài 15",
        title: "我们生活中的智能手机",
        pinyin: "Wǒmen shēnghuó zhōng de zhìnéng shǒujī",
        vietTitle: "Điện thoại thông minh trong đời sống",
        target: "Nêu các chức năng của smartphone; phân tích hai mặt lợi ích và tác hại; đề xuất thói quen sử dụng hợp lý; dùng trạng ngữ chỉ cách thức với trợ từ kết cấu 地; phân biệt chính xác bộ ba 的、地、得.",
        vocab: [
          { cn: "智能手机", py: "zhìnéng shǒujī", vi: "điện thoại thông minh (smartphone)", ex: "智能手机改变了人们的生活方式。", viEx: "Điện thoại thông minh đã thay đổi phương thức sống của con người." },
          { cn: "功能", py: "gōngnéng", vi: "chức năng, tính năng", ex: "这部手机有很多实用的功能。", viEx: "Chiếc điện thoại này có rất nhiều chức năng thực dụng." },
          { cn: "操作", py: "cāozuò", vi: "thao tác, sử dụng", ex: "这款软件操作起来很简单。", viEx: "Phần mềm này thao tác rất đơn giản." },
          { cn: "浏览网页", py: "liúlǎn wǎngyè", vi: "duyệt trang web, lướt web", ex: "他正在手机上浏览网页查资料。", viEx: "Cậu ấy đang lướt web trên điện thoại để tra cứu tài liệu." },
          { cn: "速度", py: "sùdù", vi: "tốc độ", ex: "5G网络的速度非常快。", viEx: "Tốc độ mạng 5G cực kỳ nhanh." },
          { cn: "软件", py: "ruǎnjiàn", vi: "phần mềm, ứng dụng (app)", ex: "你可以下载这个学习软件。", viEx: "Bạn có thể tải phần mềm học tập này về." },
          { cn: "下载", py: "xiàzài", vi: "tải xuống, download", ex: "下载文件需要连接无线网络。", viEx: "Tải tệp tin cần kết nối mạng không dây." },
          { cn: "便利", py: "biànlì", vi: "tiện lợi, tiện ích", ex: "移动支付给大家带来了极大的便利。", viEx: "Thanh toán di động mang lại sự tiện lợi to lớn cho mọi người." },
          { cn: "过度", py: "guòdù", vi: "quá mức, thái quá", ex: "过度用眼会导致视力下降。", viEx: "Dùng mắt quá mức sẽ dẫn đến giảm thị lực." },
          { cn: "依赖", py: "yīlài", vi: "phụ thuộc, ỷ lại", ex: "我们不能过度依赖电子产品。", viEx: "Chúng ta không được ỷ lại quá mức vào đồ điện tử." },
          { cn: "合理使用", py: "hélǐ shǐyòng", vi: "sử dụng hợp lý", ex: "我们要学会合理使用智能手机。", viEx: "Chúng ta cần học cách sử dụng điện thoại thông minh hợp lý." },
          { cn: "面对面", py: "miànduìmiàn", vi: "mặt đối mặt, trực tiếp", ex: "多和朋友面对面交流。", viEx: "Giao lưu mặt đối mặt nhiều hơn với bạn bè." }
        ],
        dialogue: [
          { speaker: "老师", cn: "同学们，智能手机给我们的生活带来了哪些改变？", py: "Tóngxuémen, zhìnéng shǒujī gěi wǒmen de shēnghuó dài lái le nǎxiē gǎibiàn?", vi: "Các em học sinh, điện thoại thông minh đã mang lại những thay đổi gì cho cuộc sống của chúng ta?" },
          { speaker: "小东", cn: "手机功能很多，我们可以查字典、看新闻、联系朋友，十分便利！", py: "Shǒujī gōngnéng hěn duō, wǒmen kěyǐ chá zìdiǎn, kàn xīnwén, liánxì péngyou, shífēn biànlì!", vi: "Điện thoại có rất nhiều chức năng, chúng em có thể tra từ điển, đọc tin tức, liên lạc với bạn bè, vô cùng tiện lợi ạ!" },
          { speaker: "小丽", cn: "但是如果过度依赖手机，会影响健康和学习。我们要认真地管理时间，合理使用手机。", py: "Dànshì rúguǒ guòdù yīlài shǒujī, huì yǐngxiǎng jiànkāng hé xuéxí. Wǒmen yào rènzhēn de guǎnlǐ shíjiān, hélǐ shǐyòng shǒujī.", vi: "Nhưng nếu phụ thuộc quá mức vào điện thoại sẽ ảnh hưởng đến sức khỏe và học tập. Chúng em cần chăm chỉ quản lý thời gian, sử dụng điện thoại một cách hợp lý." }
        ],
        grammar: {
          title: "Trạng ngữ với trợ từ 地 & Phân biệt bộ ba 的、地、得",
          rules: [
            {
              pattern: "Chủ ngữ + [Tính từ / Cụm miêu tả] + 地 + Động từ",
              desc: "Trợ từ '地' đứng sau thành phần miêu tả cách thức và đứng TRƯỚC động từ chính.",
              example: "他们认真地学习中文。 (Họ học tiếng Trung một cách chăm chỉ.) / 他愉快地参加了活动。 (Cậu ấy vui vẻ tham gia hoạt động.)"
            },
            {
              pattern: "Bảng phân biệt bộ ba trợ từ kết cấu 的、地、得",
              desc: "Mẹo nhớ: '的' nối với Danh từ (định ngữ); '地' nối với Động từ (trạng ngữ); '得' đứng sau Động từ/Tính từ (bổ ngữ).",
              example: "认真学习的同学 (học sinh học chăm) &bull; 认真地学习 (học một cách chăm chỉ) &bull; 学得很好 (học rất giỏi)"
            }
          ]
        },
        culture: "Kỷ nguyên số & Cuộc sống thông minh (智慧生活): Thanh toán bằng mã QR (微信支付、支付宝), xe đạp công cộng quét mã và học tập trực tuyến đang định hình diện mạo xã hội hiện đại.",
        quiz: [
          { q: "Điền trợ từ thích hợp: '同学们认真______听老师讲课。'", options: ["的", "地", "得", "了"], ans: 1, exp: "Đứng trước động từ '听' chỉ cách thức hành động dùng trợ từ trạng ngữ '地'." },
          { q: "Chọn câu dùng đúng trợ từ '得':", options: ["他说得很流利。", "他得说很流利。", "他流利得说。", "他得认真学习。"], ans: 0, exp: "Đứng sau động từ '说' dẫn bổ ngữ trạng thái dùng trợ từ '得': '他说得很流利'." },
          { q: "Từ '依赖' (yīlài) có nghĩa là:", options: ["Tự lập", "Phụ thuộc, ỷ lại", "Từ chối", "Giúp đỡ"], ans: 1, exp: "'依赖' có nghĩa là phụ thuộc, ỷ lại vào ai/cái gì." },
          { q: "Cụm từ nào biểu thị việc sử dụng điện thoại một cách đúng đắn, khoa học?", options: ["过度依赖", "沉迷游戏", "合理使用", "整天玩手机"], ans: 2, exp: "'合理使用' (hélǐ shǐyòng) là sử dụng một cách hợp lý." }
        ]
      },
      {
        id: "on-tap-4",
        lessonNum: "Ôn tập 4",
        title: "复习四 (Ôn tập Chủ điểm 4)",
        pinyin: "Fùxí sì",
        vietTitle: "Hệ thống hóa Chủ điểm 4: Tương lai & Kỷ nguyên số",
        target: "Củng cố lượng từ lặp lại; định ngữ chủ vị với 的; trạng ngữ cách thức với 地; phân biệt 的、地、得; tổng kết chủ đề ước mơ nghề nghiệp và công nghệ thông minh.",
        vocab: [
          { cn: "未来", py: "wèilái", vi: "tương lai", ex: "未来掌握在我们自己手中。", viEx: "Tương lai nằm trong tay chính chúng ta." },
          { cn: "创造", py: "chuàngzào", vi: "sáng tạo", ex: "我们要努力创造美好的明天。", viEx: "Chúng ta cần nỗ lực sáng tạo một ngày mai tươi đẹp." },
          { cn: "前途", py: "qiántú", vi: "tiền đồ, tương lai xán lạn", ex: "青年人的前途一片光明。", viEx: "Tiền đồ của người trẻ tuổi tràn đầy ánh sáng." }
        ],
        summary: "Tổng kết: Lượng từ lặp lại (AA, 一AA); Định ngữ cụm chủ vị ([Chủ-Vị] + 的 + Danh từ); Trạng ngữ chỉ cách thức ([Tính từ] + 地 + Động từ); Phân biệt 的 (Danh) - 地 (Động) - 得 (Bổ ngữ).",
        quiz: [
          { q: "Hoàn thành câu: '大明高兴______对大家笑了笑。'", options: ["的", "地", "得", "过"], ans: 1, exp: "Bổ nghĩa cách thức trước động từ '对大家笑了笑' dùng '地'." },
          { q: "Chọn câu có cấu trúc định ngữ đúng:", options: ["这是我昨天买的手机。", "这是我昨天买地手机。", "这是我昨天买得手机。", "这是我昨天买手机的。"], ans: 0, exp: "Bổ nghĩa cho danh từ '手机' dùng trợ từ kết cấu '的'." },
          { q: "Từ '面对面' trong câu '面对面交流' có nghĩa là:", options: ["Nói chuyện qua điện thoại", "Giao tiếp mặt đối mặt, trực tiếp", "Nhắn tin trên mạng", "Gửi thư điện tử"], ans: 1, exp: "'面对面' là mặt đối mặt, giao tiếp trực tiếp." },
          { q: "Cặp cụm từ nào thể hiện đúng sự khác biệt 的 và 得?", options: ["美丽的话 / 跑的快", "美丽得花 / 跑地快", "美丽的花 / 跑得快", "美丽地花 / 跑的花"], ans: 2, exp: "'美丽的花' (cành hoa đẹp - 的 + danh từ) và '跑得快' (chạy nhanh - V + 得 + bổ ngữ)." }
        ]
      }
    ]
  }
];

// Grammar summary table (14 points + 3 particles)
const grammarSummary14 = [
  { pt: "Trải nghiệm 过", formula: "V + 过 / 没(有) + V + 过 / V + 过…吗/没有？", func: "Nói về kinh nghiệm, trải nghiệm từng có / chưa từng có trong quá khứ", ex: "我学过中文。 / 我没去过北京。" },
  { pt: "Điều kiện cần", formula: "只有 + điều kiện cần，才 + kết quả", func: "Chỉ có... thì mới... (điều kiện bắt buộc duy nhất)", ex: "只有大家合作，才能完成任务。" },
  { pt: "Vừa đúng / đúng lúc", formula: "正好 + động từ / tính từ / số lượng / kích cỡ", func: "Vừa đúng lúc, vừa khớp, vừa khéo", ex: "我正好要去超市。 / 这双鞋大小正好。" },
  { pt: "Điều kiện đủ", formula: "只要 + điều kiện đủ，就 + kết quả", func: "Chỉ cần... thì... (chỉ cần điều kiện đó là đủ)", ex: "只要不下雨，我们就去踢足球。" },
  { pt: "Giới hạn", formula: "只 + động từ / cụm động từ", func: "Chỉ, chỉ có (giới hạn phạm vi, hành động, số lượng)", ex: "时间不够，我只能看一个景点。" },
  { pt: "Lặp lại tương lai", formula: "再 + động từ", func: "Làm lại / thêm lần nữa trong tương lai", ex: "请再说一遍。 / 明年我还想再去看。" },
  { pt: "Mức độ cao", formula: "十分 + tính từ / động từ tâm lý", func: "Rất, vô cùng (tương đương 非常)", ex: "今天的表演十分精彩。" },
  { pt: "Nối tiếp nhanh", formula: "一 + hành động 1，就 + hành động 2 / kết quả", func: "Vừa... là liền... (hai hành động nối tiếp rất nhanh)", ex: "我一回家就做作业。" },
  { pt: "Nguyên nhân nhấn mạnh", formula: "之所以 + kết quả，是因为 + nguyên nhân", func: "Sở dĩ... là vì... (nhấn mạnh giải thích nguyên nhân)", ex: "她之所以成功，是因为她努力。" },
  { pt: "Câu phản vấn", formula: "谁 / 怎么 + … + 呢？", func: "Câu hỏi tu từ dùng để khẳng định / phủ định điều hiển nhiên", ex: "谁不知道老街的美景呢？" },
  { pt: "Câu chữ 把 (1, 2)", formula: "S + 把 + O xác định + V + bổ ngữ / nơi chốn / hướng", func: "Nêu cách xử lý, tác động lên tân ngữ xác định", ex: "王老师把书放在桌子上了。" },
  { pt: "Câu chữ 把 (3, 4)", formula: "把 A 当/看成 B | 没(有) + 把 + O + V + kết quả", func: "Coi A là B; dạng phủ định của câu chữ 把", ex: "我把电视当成了看世界的窗口。" },
  { pt: "Lượng từ lặp", formula: "AA / 一AA + 都 / danh từ", func: "Nhấn mạnh từng người/vật, tính toàn thể 'ai nấy đều'", ex: "同学们个个都很努力。 / 一张张照片" },
  { pt: "Định ngữ chủ vị", formula: "[Cụm chủ vị] + 的 + Danh từ trung tâm", func: "Cụm chủ vị bổ nghĩa cho danh từ trung tâm đứng sau", ex: "我能听懂中国人说的话。" }
];

const deDiDeTable = [
  { particle: "的 (de)", pos: "Sau định ngữ, trước danh từ", rule: "Định ngữ + 的 + Danh từ", func: "Nối phần mô tả với danh từ trung tâm", ex: "妈妈做的菜 (Món mẹ nấu) &bull; 美丽的花" },
  { particle: "地 (de)", pos: "Sau trạng ngữ, trước động từ", rule: "Trạng ngữ + 地 + Động từ", func: "Nêu phương thức, cách thức hành động diễn ra", ex: "认真地学习 (Học một cách chăm chỉ) &bull; 愉快地生活" },
  { particle: "得 (de)", pos: "Sau động từ hoặc tính từ", rule: "Động từ / Tính từ + 得 + Bổ ngữ", func: "Dẫn bổ ngữ mức độ, trạng thái hoặc khả năng", ex: "跑得很快 (Chạy rất nhanh) &bull; 说得好" }
];

const communicationPhrases = [
  {
    cat: "Hỏi trải nghiệm",
    list: [
      { cn: "你参加过才艺表演吗？", py: "Nǐ cānjiā guo cáiyì biǎoyǎn ma?", vi: "Bạn từng tham gia biểu diễn tài năng chưa?" },
      { cn: "你做过志愿活动没有？", py: "Nǐ zuò guo zhìyuàn huódòng méiyǒu?", vi: "Bạn từng làm tình nguyện chưa?" },
      { cn: "我没有去过北京。", py: "Wǒ méiyǒu qù guo Běijīng.", vi: "Tôi chưa từng đến Bắc Kinh." }
    ]
  },
  {
    cat: "Nêu nguyên nhân và kết quả",
    list: [
      { cn: "之所以……，是因为……", py: "Zhīsuǒyǐ..., shì yīnwèi...", vi: "Sở dĩ… là vì…" },
      { cn: "因为……，所以……", py: "Yīnwèi..., suǒyǐ...", vi: "Bởi vì… cho nên…" },
      { cn: "只要……，就……", py: "Zhǐyào..., jiù...", vi: "Chỉ cần… thì…" },
      { cn: "只有……，才……", py: "Zhǐyǒu..., cái...", vi: "Chỉ có… thì mới…" }
    ]
  },
  {
    cat: "Hỏi lựa chọn và nêu ý kiến",
    list: [
      { cn: "你喜欢传统艺术还是现代艺术？", py: "Nǐ xǐhuan chuántǒng yìshù háishi xiàndài yìshù?", vi: "Bạn thích nghệ thuật truyền thống hay hiện đại?" },
      { cn: "我喜欢……，因为……", py: "Wǒ xǐhuan..., yīnwèi...", vi: "Tôi thích…, bởi vì…" },
      { cn: "我觉得…… / 在我看来……", py: "Wǒ juéde... / Zài wǒ kànlái...", vi: "Tôi thấy rằng… / Theo tôi…" }
    ]
  },
  {
    cat: "Miêu tả và trình bày",
    list: [
      { cn: "我家乡在老街。", py: "Wǒ jiāxiāng zài Lǎojiē.", vi: "Quê tôi ở Lào Cai." },
      { cn: "我将来想当一名导游。", py: "Wǒ jiānglái xiǎng dāng yì míng dǎoyóu.", vi: "Tương lai tôi muốn làm một hướng dẫn viên." },
      { cn: "首先……然后……最后……", py: "Shǒuxiān..., ránhòu..., zuìhòu...", vi: "Trước tiên…, sau đó…, cuối cùng…" },
      { cn: "我认为合理使用手机很重要。", py: "Wǒ rènwéi hélǐ shǐyòng shǒujī hěn zhòngyào.", vi: "Tôi cho rằng sử dụng điện thoại hợp lý rất quan trọng." }
    ]
  }
];

module.exports = { themesPart2, grammarSummary14, deDiDeTable, communicationPhrases };
