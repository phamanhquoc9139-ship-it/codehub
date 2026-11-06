// tiengtrung9_data_p1.js
// Data for Tiếng Trung Quốc 9 - Part 1: Chủ điểm 1 & Chủ điểm 2

const themesPart1 = [
  {
    themeId: "theme-1",
    themeNum: "Chủ điểm 1",
    chineseTitle: "我们的社团",
    vietTitle: "Cộng đồng và hoạt động tập thể của chúng ta",
    themeDesc: "Các hoạt động biểu diễn tài năng học đường, phong trào người tốt việc tốt, hoạt động thiện nguyện xã hội cuối tuần, trợ từ động thái 过, cấu trúc điều kiện 只有……才……, 只要……就……, phó từ 正好 và 只.",
    lessons: [
      {
        id: "bai-1",
        lessonNum: "Bài 1",
        title: "才艺表演",
        pinyin: "Cáiyì biǎoyǎn",
        vietTitle: "Biểu diễn tài năng học đường",
        target: "Nói về buổi biểu diễn tài năng; giới thiệu tiết mục, người biểu diễn; kể trải nghiệm đã từng làm hoặc chưa từng làm với trợ từ 过; chia sẻ cảm xúc hồi hộp, vui mừng và tự hào.",
        vocab: [
          { cn: "才艺表演", py: "cáiyì biǎoyǎn", vi: "biểu diễn tài năng", ex: "学校下周举行才艺表演。", viEx: "Trường tuần sau tổ chức biểu diễn tài năng." },
          { cn: "主持人", py: "zhǔchírén", vi: "người dẫn chương trình (MC)", ex: "大明是这次表演的主持人。", viEx: "Đại Minh là người dẫn chương trình lần này." },
          { cn: "节目", py: "jiémù", vi: "tiết mục; chương trình", ex: "今天的节目丰富多彩。", viEx: "Tiết mục hôm nay rất phong phú đa dạng." },
          { cn: "上台", py: "shàngtái", vi: "lên sân khấu", ex: "第一次上台表演，我很紧张。", viEx: "Lần đầu tiên lên sân khấu biểu diễn, tôi rất căng thẳng." },
          { cn: "表演", py: "biǎoyǎn", vi: "biểu diễn; buổi diễn", ex: "她表演了弹吉他。", viEx: "Cô ấy biểu diễn đàn ghi-ta." },
          { cn: "紧张", py: "jǐnzhāng", vi: "hồi hộp, căng thẳng", ex: "别紧张，放松一点儿！", viEx: "Đừng căng thẳng, hãy thả lỏng một chút!" },
          { cn: "歌词", py: "gēcí", vi: "lời bài hát", ex: "他把这首歌的歌词记住了。", viEx: "Cậu ấy đã ghi nhớ lời bài hát này." },
          { cn: "分享", py: "fēnxiǎng", vi: "chia sẻ", ex: "我想跟大家分享我的经历。", viEx: "Tôi muốn chia sẻ trải nghiệm của mình với mọi người." },
          { cn: "鼓励", py: "gǔlì", vi: "khích lệ, động viên", ex: "老师经常鼓励我们展现自己。", viEx: "Thầy cô thường động viên chúng tôi thể hiện bản thân." },
          { cn: "期待", py: "qīdài", vi: "mong đợi, kỳ vọng", ex: "大家都很期待明天的才艺表演。", viEx: "Mọi người đều rất mong đợi buổi diễn tài năng ngày mai." }
        ],
        dialogue: [
          { speaker: "兰兰", cn: "大明，你参加过学校的才艺表演吗？", py: "Dàmíng, nǐ cānjiā guo xuéxiào de cáiyì biǎoyǎn ma?", vi: "Đại Minh, bạn từng tham gia biểu diễn tài năng của trường chưa?" },
          { speaker: "大明", cn: "我参加过一次，那时候我弹吉他，心里特别紧张。", py: "Wǒ cānjiā guo yí cì, nà shíhou wǒ tán jítā, xīnlǐ tèbié jǐnzhāng.", vi: "Mình từng tham gia một lần, lúc đó mình gảy đàn ghi-ta, trong lòng cực kỳ hồi hộp." },
          { speaker: "兰兰", cn: "你唱中文歌了吗？", py: "Nǐ chàng Zhōngwén gē le ma?", vi: "Bạn có hát bài hát tiếng Trung không?" },
          { speaker: "大明", cn: "唱了！同学们一直鼓励我，最后大家都给我鼓掌！", py: "Chàng le! Tóngxuémen yìzhí gǔlì wǒ, zuìhòu dàjiā dōu gěi wǒ gǔzhǎng!", vi: "Có hát chứ! Các bạn học liên tục cổ vũ mình, cuối cùng ai cũng vỗ tay khen ngợi!" }
        ],
        grammar: {
          title: "Trợ từ động thái 过 (Diễn tả trải nghiệm)",
          rules: [
            {
              pattern: "Khẳng định: Chủ ngữ + Động từ + 过 + Tân ngữ",
              desc: "Nhấn mạnh đã từng có trải nghiệm hoặc kinh nghiệm nào đó trong quá khứ.",
              example: "我参加过才艺表演。 (Tôi từng tham gia biểu diễn tài năng.) / 我学过书法。 (Tôi từng học thư pháp.)"
            },
            {
              pattern: "Phủ định: 没(有) + Động từ + 过",
              desc: "Chưa từng có trải nghiệm đó. Chú ý không dùng '不' trước động từ khi có '过'.",
              example: "我没有上台表演过。 (Tôi chưa từng lên sân khấu biểu diễn.) / 他没去过北京。 (Anh ấy chưa từng đi Bắc Kinh.)"
            },
            {
              pattern: "Nghi vấn: Động từ + 过 + … + 吗 / 没有？",
              desc: "Hỏi đối phương đã từng làm việc gì chưa.",
              example: "你学过太极拳吗？ / 你吃过北京烤鸭没有？ (Bạn từng học Thái Cực Quyền chưa? / Ăn vịt quay Bắc Kinh chưa?)"
            }
          ]
        },
        culture: "Hoạt động câu lạc bộ học đường (社团活动): Tại các trường THCS Trung Quốc và Việt Nam, các ngày hội văn hóa nghệ thuật là sân chơi rèn luyện sự tự tin, kỹ năng làm việc nhóm và tinh thần đoàn kết.",
        quiz: [
          { q: "Chọn câu phủ định đúng của '我学过中文':", options: ["我不学过中文。", "我没学过中文。", "我不要学中文。", "我学不过中文。"], ans: 1, exp: "Phủ định của động thái '过' là '没(有) + V + 过'." },
          { q: "Từ nào có nghĩa là 'người dẫn chương trình'?", options: ["表演者", "主持人", "志愿者", "运动员"], ans: 1, exp: "'主持人' (zhǔchírén) là người dẫn chương trình / MC." },
          { q: "Điền trợ từ thích hợp: '你去______北京没有？'", options: ["了", "着", "过", "得"], ans: 2, exp: "Hỏi về kinh nghiệm, trải nghiệm dùng cấu trúc 'V + 过... 没有?'." },
          { q: "Thành ngữ '丰富多彩' (fēngfù duōcǎi) có nghĩa là gì?", options: ["Một màu đơn điệu", "Nhiều khó khăn", "Phong phú đa dạng", "Vô cùng căng thẳng"], ans: 2, exp: "'丰富多彩' có nghĩa là muôn màu muôn vẻ, phong phú đa dạng." }
        ]
      },
      {
        id: "bai-2",
        lessonNum: "Bài 2",
        title: "好人好事",
        pinyin: "Hǎorén hǎoshì",
        vietTitle: "Người tốt, việc tốt quanh ta",
        target: "Kể việc tốt đã chứng kiến hoặc thực hiện (giúp người già qua đường, nhường chỗ trên xe buýt); dùng cấu trúc điều kiện cần 只有……才……; vận dụng phó từ/tính từ 正好 để biểu đạt sự vừa đúng/đúng lúc.",
        vocab: [
          { cn: "好人好事", py: "hǎorén hǎoshì", vi: "người tốt việc tốt", ex: "学校表扬了许多好人好事。", viEx: "Nhà trường đã biểu dương nhiều tấm gương người tốt việc tốt." },
          { cn: "帮助", py: "bāngzhù", vi: "giúp đỡ; sự giúp đỡ", ex: "帮助别人是一件快乐的事。", viEx: "Giúp đỡ người khác là một điều vui vẻ." },
          { cn: "助人为乐", py: "zhù rén wéi lè", vi: "lấy việc giúp người làm niềm vui", ex: "他是一个助人为乐的好学生。", viEx: "Cậu ấy là một học sinh tốt luôn lấy việc giúp người làm niềm vui." },
          { cn: "老人", py: "lǎorén", vi: "người cao tuổi, người già", ex: "我们要尊敬老人。", viEx: "Chúng ta cần phải kính trọng người cao tuổi." },
          { cn: "扶", py: "fú", vi: "đỡ, dìu", ex: "少先队员扶老爷爷过马路。", viEx: "Đội viên thiếu niên dìu ông cụ qua đường." },
          { cn: "过马路", py: "guò mǎlù", vi: "sang đường, qua đường", ex: "过马路时要注意安全。", viEx: "Khi qua đường cần chú ý an toàn." },
          { cn: "爱心专座", py: "àixīn zhuānzuò", vi: "ghế ưu tiên (trên xe buýt)", ex: "公共汽车上设有爱心专座。", viEx: "Trên xe buýt có bố trí ghế ưu tiên." },
          { cn: "孕妇", py: "yùnfù", vi: "phụ nữ mang thai", ex: "请给孕妇让座。", viEx: "Xin vui lòng nhường chỗ cho phụ nữ có thai." },
          { cn: "正好", py: "zhènghǎo", vi: "vừa đúng, vừa khéo, đúng lúc", ex: "我正好有两张票，一起去吧！", viEx: "Mình vừa khéo có 2 vé, cùng đi nhé!" },
          { cn: "值得", py: "zhíde", vi: "đáng, xứng đáng", ex: "这种精神值得我们学习。", viEx: "Tinh thần này rất xứng đáng để chúng ta học tập." }
        ],
        dialogue: [
          { speaker: "明华", cn: "昨天放学回家，在公共汽车上你做了什么好事？", py: "Zuótiān fàngxué huí jiā, zài gōnggòng qìchē shang nǐ zuò le shénme hǎoshì?", vi: "Hôm qua tan học về nhà, trên xe buýt bạn đã làm việc tốt gì thế?" },
          { speaker: "小丽", cn: "车上人很多，我正好坐在爱心专座旁边。看到一位抱着小孩的阿姨上车，我就主动给她让座了。", py: "Chē shang rén hěn duō, wǒ zhènghǎo zuò zài àixīn zhuānzuò pángbiān. Kàndào yí wèi bàozhe xiǎohái de āyí shàng chē, wǒ jiù zhǔdòng gěi tā ràngzuò le.", vi: "Trên xe rất đông người, mình vừa khéo ngồi cạnh ghế ưu tiên. Thấy một cô bế em bé lên xe, mình liền chủ động nhường chỗ." },
          { speaker: "明华", cn: "你做得真棒！只有大家都互相帮助，社会才会更温暖。", py: "Nǐ zuò de zhēn bàng! Zhǐyǒu dàjiā dōu hùxiāng bāngzhù, shèhuì cái huì gèng wēnnuǎn.", vi: "Bạn làm tuyệt lắm! Chỉ khi mọi người đều giúp đỡ lẫn nhau thì xã hội mới ấm áp hơn." }
        ],
        grammar: {
          title: "Cấu trúc 只有……才…… & Phó từ 正好",
          rules: [
            {
              pattern: "1. 只有 + Điều kiện cần, 才 + Kết quả",
              desc: "Nhấn mạnh điều kiện duy nhất, bắt buộc phải có để đạt được kết quả (Chỉ có... thì mới...).",
              example: "只有参加过社会活动，我们才了解别人的困难。 (Chỉ khi từng tham gia hoạt động xã hội, chúng ta mới thấu hiểu khó khăn của người khác.)"
            },
            {
              pattern: "2. Phó từ / Tính từ 正好",
              desc: "Biểu thị thời gian, địa điểm, số lượng hoặc kích cỡ 'vừa đúng/vừa khớp/đúng lúc'.",
              example: "我正好要去图书馆。 (Tôi vừa khéo cũng định đi thư viện.) / 这双鞋大小正好。 (Đôi giày này cỡ vừa khít.)"
            }
          ]
        },
        culture: "Tinh thần Lôi Phong (雷锋精神) và phong trào 'Ngày người tốt việc tốt': Tấm gương giúp người không màng danh lợi là nét đẹp nhân văn sâu sắc được giáo dục trong các nhà trường tại Trung Quốc và Việt Nam.",
        quiz: [
          { q: "Cấu trúc nào biểu thị điều kiện cần thiết duy nhất?", options: ["只要……就……", "虽然……但是……", "只有……才……", "因为……所以……"], ans: 2, exp: "'只有……才……' dùng để biểu thị điều kiện cần (chỉ có... thì mới...)." },
          { q: "Điền từ thích hợp: '我______要出门，他就来找我了。'", options: ["正好", "才艺", "歌词", "扶"], ans: 0, exp: "'正好' (vừa đúng lúc) bổ nghĩa cho hành động 'vừa định ra ngoài'." },
          { q: "Từ '爱心专座' trên xe buýt dành cho đối tượng nào?", options: ["Học sinh cấp 2", "Người già, người khuyết tật, phụ nữ mang thai", "Người lái xe", "Người bán vé"], ans: 1, exp: "'爱心专座' là ghế ưu tiên dành cho người cao tuổi, phụ nữ có thai, người tàn tật." },
          { q: "Chọn câu viết đúng ngữ pháp:", options: ["只要努力，才会成功。", "只有努力，才会成功。", "虽然努力，就要成功。", "因为努力，才是成功。"], ans: 1, exp: "Cặp liên từ chuẩn là '只有……才……'." }
        ]
      },
      {
        id: "bai-3",
        lessonNum: "Bài 3",
        title: "周末的社会活动",
        pinyin: "Zhōumò de shèhuì huódòng",
        vietTitle: "Hoạt động xã hội cuối tuần",
        target: "Kể về các hoạt động tình nguyện tại viện dưỡng lão, trung tâm bảo trợ trẻ em; dùng cấu trúc điều kiện đủ 只要……就……; phân biệt với 只有……才……; dùng phó từ giới hạn 只.",
        vocab: [
          { cn: "社会活动", py: "shèhuì huódòng", vi: "hoạt động xã hội", ex: "学校组织了周末社会活动。", viEx: "Trường đã tổ chức hoạt động xã hội cuối tuần." },
          { cn: "志愿活动", py: "zhìyuàn huódòng", vi: "hoạt động tình nguyện", ex: "参加志愿活动很有意义。", viEx: "Tham gia hoạt động tình nguyện rất có ý nghĩa." },
          { cn: "志愿者", py: "zhìyuànzhě", vi: "tình nguyện viên", ex: "很多中学生成为了青年志愿者。", viEx: "Nhiều học sinh THCS đã trở thành tình nguyện viên thanh niên." },
          { cn: "养老院", py: "yǎnglǎoyuàn", vi: "viện dưỡng lão", ex: "我们去养老院看望老人。", viEx: "Chúng tôi đến viện dưỡng lão thăm các cụ già." },
          { cn: "福利院", py: "fúlìyuàn", vi: "cơ sở bảo trợ xã hội/phúc lợi", ex: "志愿者们去福利院教小朋友画画。", viEx: "Các tình nguyện viên đến cơ sở phúc lợi dạy các em nhỏ vẽ tranh." },
          { cn: "照顾", py: "zhàogù", vi: "chăm sóc, săn sóc", ex: "我们要学会照顾别人。", viEx: "Chúng ta cần học cách chăm sóc người khác." },
          { cn: "陪", py: "péi", vi: "ở bên, cùng, bầu bạn", ex: "星期天我陪爷爷散步。", viEx: "Chủ nhật tôi cùng ông dạo bộ." },
          { cn: "责任", py: "zérèn", vi: "trách nhiệm", ex: "保护环境是每个人的责任。", viEx: "Bảo vệ môi trường là trách nhiệm của mỗi người." },
          { cn: "有意义", py: "yǒu yìyì", vi: "có ý nghĩa", ex: "这是一次非常有意义的体验。", viEx: "Đây là một trải nghiệm vô cùng có ý nghĩa." },
          { cn: "只", py: "zhǐ", vi: "chỉ (phó từ giới hạn)", ex: "时间不够，我只能去一个小时。", viEx: "Không đủ thời gian, tôi chỉ có thể đi một tiếng." }
        ],
        dialogue: [
          { speaker: "李明", cn: "王芳，这个周末你去哪儿参加志愿活动了？", py: "Wáng Fāng, zhège zhōumò nǐ qù nǎr cānjiā zhìyuàn huódòng le?", vi: "Vương Phương, cuối tuần này bạn đi đâu tham gia hoạt động tình nguyện thế?" },
          { speaker: "王芳", cn: "我和同班同学去了社区养老院。我们陪老爷爷老奶奶聊天，还给他们表演了唱歌。", py: "Wǒ hé tóngbān tóngxué qù le shèqū yǎnglǎoyuàn. Wǒmen péi lǎoyéye lǎonǎinai liáotiān, hái gěi tāmen biǎoyǎn le chànggē.", vi: "Mình và các bạn cùng lớp đến viện dưỡng lão của khu phố. Tụi mình cùng trò chuyện với các ông bà, còn biểu diễn ca hát cho ông bà nghe." },
          { speaker: "李明", cn: "真棒！只要大家都献出一份爱心，世界就会变得更美好。", py: "Zhēn bàng! Zhǐyào dàjiā dōu xiànchū yí fèn àixīn, shìjiè jiù huì biàn de gèng měihǎo.", vi: "Tuyệt quá! Chỉ cần mỗi người đều góp một tấm lòng yêu thương thì thế giới sẽ trở nên tươi đẹp hơn." }
        ],
        grammar: {
          title: "Cấu trúc 只要……就…… & Phó từ giới hạn 只",
          rules: [
            {
              pattern: "1. 只要 + Điều kiện đủ, 就 + Kết quả",
              desc: "Chỉ cần đáp ứng điều kiện nêu ra là tự khắc có kết quả tương ứng (Chỉ cần... thì...).",
              example: "只要注意公共场所的卫生，就能保护大家的健康。 (Chỉ cần chú ý vệ sinh nơi công cộng thì có thể bảo vệ sức khỏe mọi người.)"
            },
            {
              pattern: "2. Phân biệt 只有……才…… vs 只要……就……",
              desc: "'只有...才...' là điều kiện cần (bắt buộc duy nhất); '只要...就...' là điều kiện đủ (chỉ cần điều đó là đủ đạt kết quả).",
              example: "只有努力，才能成功 (điều kiện cần) vs 只要不下雨，我们就去踢足球 (điều kiện đủ)."
            },
            {
              pattern: "3. Phó từ 只 (Chỉ)",
              desc: "Đứng trước động từ hoặc cụm động từ để giới hạn hành động, phạm vi hoặc số lượng.",
              example: "时间不多了，我们只能看一个景点。 (Không còn nhiều thời gian, chúng tôi chỉ có thể tham quan một điểm.)"
            }
          ]
        },
        culture: "Hoạt động thiện nguyện cuối tuần (社区志愿服务): Văn hóa chung tay vì cộng đồng, tham gia các hoạt động công ích, quét dọn đường phố, chăm sóc cây xanh và giúp đỡ người già neo đơn.",
        quiz: [
          { q: "Điền liên từ thích hợp: '______明天不下雨，我们______去爬山。'", options: ["只有……才……", "只要……就……", "虽然……但是……", "因为……所以……"], ans: 1, exp: "Điều kiện đủ: '只要……就……' (Chỉ cần mai không mưa thì chúng tôi sẽ đi leo núi)." },
          { q: "Từ '志愿者' (zhìyuànzhě) trong tiếng Việt có nghĩa là gì?", options: ["Người cao tuổi", "Bác sĩ", "Tình nguyện viên", "Học sinh giỏi"], ans: 2, exp: "'志愿者' là tình nguyện viên." },
          { q: "Phó từ '只' trong câu '我只做完两个练习' có tác dụng gì?", options: ["Chỉ sự lặp lại", "Chỉ sự phủ định", "Giới hạn số lượng (chỉ làm được 2 bài)", "Chỉ điều kiện cần"], ans: 2, exp: "'只' đứng trước động từ để biểu thị sự giới hạn (chỉ làm xong 2 bài)." },
          { q: "Chọn câu có cặp liên từ chuẩn xác:", options: ["只有合作，就能成功。", "只要合作，才能成功。", "只要大家合作，就能完成任务。", "虽然合作，才能成功。"], ans: 2, exp: "Cặp liên từ đi đôi chuẩn xác là '只要……就……'." }
        ]
      },
      {
        id: "on-tap-1",
        lessonNum: "Ôn tập 1",
        title: "复习一 (Ôn tập Chủ điểm 1)",
        pinyin: "Fùxí yī",
        vietTitle: "Hệ thống hóa Chủ điểm 1: Hoạt động tập thể & Việc tốt",
        target: "Củng cố trợ từ động thái 过 (từng / chưa từng); phân biệt 只有……才…… và 只要……就……; ôn luyện phó từ 正好, 只; tổng kết từ vựng hoạt động xã hội.",
        vocab: [
          { cn: "曾经", py: "céngjīng", vi: "đã từng (phó từ thường đi kèm với 过)", ex: "我曾经参加过志愿者活动。", viEx: "Tôi đã từng tham gia hoạt động tình nguyện." },
          { cn: "经历", py: "jīnglì", vi: "trải nghiệm, kinh nghiệm từng trải", ex: "这是一次难忘的经历。", viEx: "Đây là một trải nghiệm khó quên." },
          { cn: "献爱心", py: "xiàn àixīn", vi: "góp tình yêu thương, làm từ thiện", ex: "大家一起为灾区献爱心。", viEx: "Mọi người cùng quyên góp tình yêu thương cho vùng thiên tai." },
          { cn: "收获", py: "shōuhuò", vi: "thu hoạch, thành quả thu được", ex: "通过这次活动，我们收获很大。", viEx: "Thông qua hoạt động lần này, chúng tôi thu hoạch được rất nhiều." }
        ],
        summary: "Tổng kết: Trợ từ 过 (V + 过 / 没 + V + 过 / V + 过...吗?); Cấu trúc điều kiện 只有……才…… (điều kiện cần) đối chiếu với 只要……就…… (điều kiện đủ); Vận dụng linh hoạt 正好 (vừa đúng lúc/vừa vặn) và 只 (chỉ).",
        quiz: [
          { q: "Hoàn thành câu: '你______过北京烤鸭吗？'", options: ["吃", "喝", "看", "说"], ans: 0, exp: "'吃过' = từng ăn (vịt quay Bắc Kinh)." },
          { q: "Điền cặp liên từ: '______认真复习，______能取得好成绩。'", options: ["只要……才……", "只有……才……", "虽然……就……", "因为……才……"], ans: 1, exp: "Điều kiện cần thiết để có thành tích tốt: '只有……才……'." },
          { q: "Câu nào dưới đây dùng đúng '正好'?", options: ["我正好去图书馆，一起走吧。", "他正好不学习。", "衣服好正好。", "正好你做完作业。"], ans: 0, exp: "'我正好去图书馆' = Tôi vừa khéo cũng định đi thư viện." },
          { q: "Từ '助人为乐' khuyên răn con người điều gì?", options: ["Chăm chỉ học tập", "Lấy việc giúp đỡ người khác làm niềm vui", "Tập thể dục đều đặn", "Tiết kiệm tiền bạc"], ans: 1, exp: "'助人为乐' là lấy việc giúp người làm niềm vui." }
        ]
      }
    ]
  },
  {
    themeId: "theme-2",
    themeNum: "Chủ điểm 2",
    chineseTitle: "我们的文化遗产",
    vietTitle: "Di sản văn hóa của chúng ta",
    themeDesc: "Phong tục đón Tết cổ truyền Việt - Trung, vẻ đẹp Áo dài Việt Nam và Sườn xám Trung Quốc, nghệ thuật truyền thống và hiện đại, phó từ 再, 十分, liên từ 一……就……, cấu trúc nguyên nhân 之所以……是因为…… và lượng từ 条, 套.",
    lessons: [
      {
        id: "bai-5",
        lessonNum: "Bài 5",
        title: "跟越南朋友过春节",
        pinyin: "Gēn Yuènán péngyou guò Chūnjié",
        vietTitle: "Đón Tết cổ truyền cùng bạn Việt Nam",
        target: "So sánh phong tục đón Tết ở Việt Nam và Trung Quốc (dọn dẹp, bữa cơm đoàn viên, lì xì, thăm họ hàng); dùng phó từ 再 (1) biểu thị lặp lại hành động trong tương lai; dùng phó từ chỉ mức độ cao 十分.",
        vocab: [
          { cn: "春节", py: "Chūnjié", vi: "Tết Nguyên Đán, Tết Xuân", ex: "春节是中国和越南最重要的传统节日。", viEx: "Tết Nguyên Đán là ngày lễ truyền thống quan trọng nhất ở Trung Quốc và Việt Nam." },
          { cn: "除夕", py: "chúxī", vi: "đêm giao thừa", ex: "除夕夜，全家人一起吃团圆饭。", viEx: "Đêm giao thừa, cả nhà cùng ăn bữa cơm đoàn viên." },
          { cn: "大扫除", py: "dà sǎochú", vi: "tổng vệ sinh (trước Tết)", ex: "春节前家家户户都要大扫除。", viEx: "Trước Tết nhà nào cũng làm tổng vệ sinh." },
          { cn: "团圆饭", py: "tuányuánfàn", vi: "bữa cơm tất niên / đoàn viên", ex: "年夜饭也叫团圆饭。", viEx: "Cơm đêm giao thừa còn được gọi là bữa cơm đoàn viên." },
          { cn: "压岁钱", py: "yāsuìqián", vi: "tiền lì xì / mừng tuổi", ex: "长辈给孩子们发压岁钱。", viEx: "Người lớn mừng tuổi tiền lì xì cho trẻ nhỏ." },
          { cn: "拜年", py: "bàinián", vi: "chúc Tết", ex: "初一早上，我们去给爷爷奶奶拜年。", viEx: "Sáng mùng một, chúng tôi đi chúc Tết ông bà." },
          { cn: "亲戚", py: "qīnqi", vi: "bà con, họ hàng", ex: "春节期间大家去走亲戚。", viEx: "Dịp Tết mọi người đi thăm bà con họ hàng." },
          { cn: "烟花", py: "yānhuā", vi: "pháo hoa", ex: "除夕夜的天空盛开着美丽的烟花。", viEx: "Bầu trời đêm giao thừa rực rỡ những chùm pháo hoa tuyệt đẹp." },
          { cn: "饺子", py: "jiǎozi", vi: "bánh sủi cảo", ex: "北方人在除夕夜吃饺子。", viEx: "Người miền Bắc Trung Quốc ăn sủi cảo vào đêm giao thừa." },
          { cn: "粽子", py: "zòngzi", vi: "bánh chưng / bánh nếp gói lá", ex: "越南朋友春节吃方粽（Bánh chưng）。", viEx: "Các bạn Việt Nam đón Tết ăn bánh chưng vuông." },
          { cn: "舞龙", py: "wǔlóng", vi: "múa rồng", ex: "庙会上表演舞龙舞狮。", viEx: "Hội chợ biểu diễn múa rồng múa lân." },
          { cn: "十分", py: "shífēn", vi: "rất, vô cùng (phó từ mức độ)", ex: "今天的节目十分精彩。", viEx: "Tiết mục hôm nay vô cùng đặc sắc." }
        ],
        dialogue: [
          { speaker: "李芳", cn: "阿强，你在越南是怎么过春节的？", py: "Āqiáng, nǐ zài Yuènán shì zěnme guò Chūnjié de?", vi: "A Cường, bạn đón Tết ở Việt Nam như thế nào?" },
          { speaker: "阿强", cn: "春节前我们全家一起大扫除，除夕吃团圆饭，初一去长辈家拜年。我们还吃美味的方形粽子！", py: "Chūnjié qián wǒmen quánjiā yìqǐ dà sǎochú, chúxī chī tuányuánfàn, chūyī qù zhǎngbèi jiā bàinián. Wǒmen hái chī měiwèi de fāngxíng zòngzi!", vi: "Trước Tết cả nhà mình cùng tổng vệ sinh, giao thừa ăn cơm đoàn viên, mùng một đi chúc Tết người lớn. Tụi mình còn ăn bánh chưng vuông rất ngon!" },
          { speaker: "李芳", cn: "在中国，我们除夕包饺子、看春晚。今年我还想再去河内过一次春节！", py: "Zài Zhōngguó, wǒmen chúxī bāo jiǎozi, kàn chūnwǎn. Jīnnián wǒ hái xiǎng zài qù Hénèi guò yí cì Chūnjié!", vi: "Ở Trung Quốc, tụi mình gói sủi cảo, xem liên hoan truyền hình Xuân. Năm nay mình vẫn muốn đến Hà Nội đón Tết một lần nữa!" }
        ],
        grammar: {
          title: "Phó từ 再 (Lặp lại trong tương lai) & Phó từ 十分",
          rules: [
            {
              pattern: "1. 再 + Động từ (Hành động sẽ lặp lại)",
              desc: "Dùng để diễn tả một hành động sẽ được thực hiện lại một lần nữa trong tương lai (khác với '又' là hành động đã lặp lại trong quá khứ).",
              example: "请再说一遍。 (Xin hãy nói lại một lần nữa.) / 明年我还想再去越南旅游。 (Năm sau tôi vẫn muốn đến Việt Nam du lịch lần nữa.)"
            },
            {
              pattern: "2. Phó từ chỉ mức độ 十分",
              desc: "Đứng trước tính từ hoặc động từ tâm lý để biểu thị mức độ cực kỳ cao (tương đương với 非常).",
              example: "今天的表演十分精彩。 (Buổi biểu diễn hôm nay vô cùng đặc sắc.) / 孩子们十分开心。 (Bọn trẻ vô cùng vui vẻ.)"
            }
          ]
        },
        culture: "Nét tương đồng và dị biệt Tết Việt - Trung: Người Trung Quốc đêm giao thừa ăn sủi cảo (饺子 - mang ý nghĩa đón phúc, đổi năm) và mì trường thọ; người Việt Nam gói bánh chưng, bánh tét, bày mâm ngũ quả cầu chúc năm mới 'cầu vừa đủ xài'.",
        quiz: [
          { q: "Từ nào trong tiếng Trung có nghĩa là 'tiền lì xì / mừng tuổi'?", options: ["压岁钱", "团圆饭", "除夕", "春卷"], ans: 0, exp: "'压岁钱' (yāsuìqián) là tiền lì xì ngày Tết." },
          { q: "Chọn phó từ thích hợp để nói 'Xin hãy nói lại lần nữa':", options: ["请又说一遍。", "请再说一遍。", "请还说一遍。", "请都说一遍。"], ans: 1, exp: "Hành động lặp lại hướng về tương lai dùng '再 + V': '请再说一遍'." },
          { q: "Món ăn truyền thống đặc trưng Tết miền Bắc Trung Quốc là gì?", options: ["Sủi cảo (饺子)", "Bánh chưng vuông (方粽)", "Nem cuốn (春卷)", "Bánh trôi nước"], ans: 0, exp: "Người miền Bắc Trung Quốc có phong tục đón giao thừa ăn sủi cảo (饺子)." },
          { q: "Từ '十分' trong câu '十分热闹' đồng nghĩa với từ nào?", options: ["有一点儿", "非常", "不太", "只"], ans: 1, exp: "'十分' là phó từ chỉ mức độ cao, đồng nghĩa với '非常' (rất, vô cùng)." }
        ]
      },
      {
        id: "bai-6",
        lessonNum: "Bài 6",
        title: "越南的奥黛和中国的旗袍都很漂亮",
        pinyin: "Yuènán de àodài hé Zhōngguó de qípáo dōu hěn piàoliang",
        vietTitle: "Áo dài Việt Nam và sườn xám Trung Quốc đều rất đẹp",
        target: "Giới thiệu trang phục truyền thống; so sánh nét thanh nhã của Áo dài và Sườn xám; sử dụng cấu trúc nối tiếp nhanh 一……就……; dùng đúng lượng từ 条 (cho vật dài, quần, váy) và 套 (cho bộ trang phục).",
        vocab: [
          { cn: "奥黛", py: "àodài", vi: "áo dài Việt Nam", ex: "越南女学生穿白色奥黛很美丽。", viEx: "Nữ sinh Việt Nam mặc áo dài trắng rất xinh đẹp." },
          { cn: "旗袍", py: "qípáo", vi: "sườn xám (xường xám)", ex: "旗袍是中国女性的传统服装。", viEx: "Sườn xám là trang phục truyền thống của phụ nữ Trung Quốc." },
          { cn: "传统服装", py: "chuántǒng fúzhuāng", vi: "trang phục truyền thống", ex: "每个民族都有自己的传统服装。", viEx: "Mỗi dân tộc đều có trang phục truyền thống của riêng mình." },
          { cn: "文化特色", py: "wénhuà tèsè", vi: "nét đặc sắc văn hóa", ex: "服装体现了一个国家的文化特色。", viEx: "Trang phục thể hiện nét đặc sắc văn hóa của một quốc gia." },
          { cn: "代表", py: "dàibiǎo", vi: "đại diện, tiêu biểu", ex: "奥黛代表了越南女性的温柔。", viEx: "Áo dài đại diện cho vẻ dịu dàng của người phụ nữ Việt Nam." },
          { cn: "体现", py: "tǐxiàn", vi: "thể hiện", ex: "旗袍体现了东方女性的高雅气质。", viEx: "Sườn xám thể hiện khí chất thanh nhã của người phụ nữ phương Đông." },
          { cn: "东方文化", py: "dōngfāng wénhuà", vi: "văn hóa phương Đông", ex: "两国文化都属于东方文化。", viEx: "Văn hóa hai nước đều thuộc về văn hóa phương Đông." },
          { cn: "气质", py: "qìzhì", vi: "khí chất, phong thái", ex: "穿上这件衣服，她显得很有气质。", viEx: "Mặc bộ quần áo này vào, cô ấy trông rất có khí chất." },
          { cn: "高雅", py: "gāoyǎ", vi: "thanh nhã, quý phái", ex: "旗袍的设计十分高雅。", viEx: "Thiết kế của sườn xám vô cùng thanh nhã." },
          { cn: "场合", py: "chǎnghé", vi: "dịp, hoàn cảnh", ex: "在重大的场合，人们常穿传统服装。", viEx: "Vào các dịp trọng đại, mọi người thường mặc trang phục truyền thống." },
          { cn: "套", py: "tào", vi: "bộ (lượng từ quần áo, sách)", ex: "我买了一套新的衣服。", viEx: "Tôi đã mua một bộ quần áo mới." },
          { cn: "条", py: "tiáo", vi: "chiếc, cái (lượng từ vật dài/quần/váy)", ex: "这条裤子颜色很好看。", viEx: "Chiếc quần này màu sắc rất đẹp." }
        ],
        dialogue: [
          { speaker: "小红", cn: "你看，这张照片里的越南女孩穿的衣服叫什么？", py: "Nǐ kàn, zhè zhāng zhàopiàn lǐ de Yuènán nǚhái chuān de yīfu jiào shénme?", vi: "Cậu nhìn xem, bộ trang phục cô gái Việt Nam trong bức ảnh này mặc gọi là gì?" },
          { speaker: "梅梅", cn: "这是越南的奥黛。中国朋友一看见奥黛，就非常喜欢！", py: "Zhè shì Yuènán de àodài. Zhōngguó péngyou yí kànjiàn àodài, jiù fēicháng xǐhuan!", vi: "Đây là áo dài Việt Nam. Bạn bè Trung Quốc vừa nhìn thấy áo dài là thích mê ngay!" },
          { speaker: "小红", cn: "中国的旗袍和越南的奥黛虽然剪裁不同，但都体现了东方女性的高雅美丽。", py: "Zhōngguó de qípáo hé Yuènán de àodài suīrán jiǎncái bù tóng, dàn dōu tǐxiàn le dōngfāng nǚxìng de gāoyǎ měilì.", vi: "Sườn xám của Trung Quốc và áo dài của Việt Nam tuy đường cắt may khác nhau, nhưng đều thể hiện vẻ đẹp thanh nhã của người phụ nữ phương Đông." }
        ],
        grammar: {
          title: "Cấu trúc 一……就…… & Lượng từ 条, 套",
          rules: [
            {
              pattern: "1. 一 + Hành động 1, 就 + Hành động 2 / Kết quả",
              desc: "Diễn tả hai hành động diễn ra liên tiếp rất nhanh (vừa... là liền...); hoặc một điều kiện vừa xảy ra thì kết quả lập tức tới.",
              example: "我一回家就做作业。 (Tôi vừa về nhà là làm bài tập ngay.) / 老师一进教室，同学们就安静下来。 (Thầy giáo vừa vào lớp, học sinh liền trật tự ngay.)"
            },
            {
              pattern: "2. Lượng từ 套 (bộ) & 条 (chiếc/cái cho vật thon dài)",
              desc: "Dùng '一套服装' (một bộ trang phục), '一套书' (một bộ sách); dùng '一条裙子' (một chiếc váy), '一条裤子' (một chiếc quần), '一条河' (một con sông).",
              example: "妈妈送给我一套漂亮的传统服装。 (Mẹ tặng tôi một bộ trang phục truyền thống tuyệt đẹp.)"
            }
          ]
        },
        culture: "Tôn vinh trang phục dân tộc: Áo dài Việt Nam thường được may bằng lụa mềm mại với hai tà bay bổng kết hợp quần lụa dài; Sườn xám (旗袍) Thượng Hải có cổ cao, cài nút bướm tinh xảo, xẻ tà quyến rũ.",
        quiz: [
          { q: "Chọn liên từ thích hợp: '他______听见音乐，______想跳舞。'", options: ["只有……才……", "只要……就……", "一……就……", "不但……而且……"], ans: 2, exp: "Hành động xảy ra nối tiếp nhanh: '一……就……' (Vừa nghe thấy âm nhạc là muốn nhảy múa ngay)." },
          { q: "Lượng từ phù hợp cho từ '裤子' (quần dài) là:", options: ["本", "件", "条", "张"], ans: 2, exp: "Quần dài, váy, sông suối dùng lượng từ '条' (tiáo)." },
          { q: "Từ '旗袍' trong tiếng Việt đọc là:", options: ["Áo bà ba", "Sườn xám", "Áo dài", "Váy dạ hội"], ans: 1, exp: "'旗袍' (qípáo) là sườn xám." },
          { q: "Lượng từ phù hợp cho cụm từ '______西装' (bộ com-lê) là:", options: ["一套", "一条", "一本", "一张"], ans: 0, exp: "Bộ com-lê / trang phục cả bộ dùng lượng từ '套' (tào)." }
        ]
      },
      {
        id: "bai-7",
        lessonNum: "Bài 7",
        title: "你喜欢传统艺术还是现代艺术？",
        pinyin: "Nǐ xǐhuan chuántǒng yìshù háishi xiàndài yìshù?",
        vietTitle: "Bạn thích nghệ thuật truyền thống hay hiện đại?",
        target: "Hỏi và đưa ra lựa chọn với 还是; giới thiệu các loại hình nghệ thuật tiêu biểu (Kinh kịch, Chèo, Thư pháp, Cắt giấy, Múa rối nước); sử dụng cấu trúc giải thích nguyên nhân 之所以……是因为…….",
        vocab: [
          { cn: "传统艺术", py: "chuántǒng yìshù", vi: "nghệ thuật truyền thống", ex: "中国有很多优秀的传统艺术。", viEx: "Trung Quốc có rất nhiều môn nghệ thuật truyền thống đặc sắc." },
          { cn: "现代艺术", py: "xiàndài yìshù", vi: "nghệ thuật hiện đại", ex: "年轻人也很喜欢现代艺术。", viEx: "Người trẻ tuổi cũng rất yêu thích nghệ thuật hiện đại." },
          { cn: "朝剧", py: "cháojù", vi: "nghệ thuật chèo (sân khấu Việt Nam)", ex: "朝剧是越南著名的传统戏曲。", viEx: "Chèo là loại hình sân khấu truyền thống nổi tiếng của Việt Nam." },
          { cn: "京剧", py: "jīngjù", vi: "Kinh kịch (quốc bảo hí kịch Trung Quốc)", ex: "京剧的脸谱色彩鲜艳。", viEx: "Mặt nạ Kinh kịch màu sắc rất rực rỡ." },
          { cn: "相声", py: "xiàngsheng", vi: "tấu hài, đối thoại hài kịch", ex: "听相声让人哈哈大笑。", viEx: "Nghe tấu hài khiến người ta cười vui sảng khoái." },
          { cn: "书法", py: "shūfǎ", vi: "thư pháp", ex: "练习书法需要耐心和毅力。", viEx: "Luyện thư pháp đòi hỏi sự kiên nhẫn và nghị lực." },
          { cn: "剪纸", py: "jiǎnzhǐ", vi: "nghệ thuật cắt giấy", ex: "春节时人们把红色剪纸贴在窗户上。", viEx: "Dịp Tết mọi người dán giấy cắt màu đỏ lên cửa sổ." },
          { cn: "水上木偶", py: "shuǐshàng mù'ǒu", vi: "múa rối nước (Việt Nam)", ex: "外国游客非常喜欢看水上木偶戏。", viEx: "Du khách nước ngoài rất thích xem múa rối nước." },
          { cn: "民歌", py: "míngē", vi: "dân ca", ex: "越南的官贺民歌非常动听。", viEx: "Dân ca Quan họ của Việt Nam nghe rất êm tai." },
          { cn: "受欢迎", py: "shòu huānyíng", vi: "được yêu thích, được hoan nghênh", ex: "这种艺术形式很受群众欢迎。", viEx: "Hình thức nghệ thuật này rất được quần chúng hoan nghênh." }
        ],
        dialogue: [
          { speaker: "王伟", cn: "安南，你喜欢传统艺术还是现代艺术？", py: "Ānnán, nǐ xǐhuan chuántǒng yìshù háishi xiàndài yìshù?", vi: "An Nam, bạn thích nghệ thuật truyền thống hay hiện đại?" },
          { speaker: "安南", cn: "我两种都喜欢。但我最喜欢越南的水上木偶和中国的京剧。", py: "Wǒ liǎng zhǒng dōu xǐhuan. Dàn wǒ zuì xǐhuan Yuènán de shuǐshàng mù'ǒu hé Zhōngguó de jīngjù.", vi: "Mình thích cả hai. Nhưng mình thích nhất múa rối nước Việt Nam và Kinh kịch Trung Quốc." },
          { speaker: "王伟", cn: "水上木偶戏之所以这么受欢迎，是因为它生动地体现了越南农村的生活。", py: "Shuǐshàng mù'ǒu xì zhīsuǒyǐ zhème shòu huānyíng, shì yīnwèi tā shēngdòng de tǐxiàn le Yuènán nóngcūn de shēnghuó.", vi: "Múa rối nước sở dĩ được yêu thích đến vậy là vì nó thể hiện sinh động cuộc sống nông thôn Việt Nam." }
        ],
        grammar: {
          title: "Cấu trúc 之所以……是因为…… (Sở dĩ... là vì...)",
          rules: [
            {
              pattern: "Chủ ngữ / Kết quả + 之所以 + Vị ngữ，是因为 + Nguyên nhân",
              desc: "Dùng để nhấn mạnh nguyên nhân dẫn đến kết quả; nêu kết quả trước để gây sự chú ý rồi giải thích lý do thuyết phục phía sau.",
              example: "她之所以能取得好成绩，是因为她平时认真学习。 (Sở dĩ cô ấy có thể đạt thành tích tốt là vì ngày thường cô ấy học tập nghiêm túc.)"
            },
            {
              pattern: "Hỏi lựa chọn: A 还是 B？",
              desc: "Dùng trong câu hỏi lựa chọn giữa hai phương án A hoặc B.",
              example: "你喜欢喝茶还是喝咖啡？ (Bạn thích uống trà hay uống cà phê?)"
            }
          ]
        },
        culture: "Di sản văn hóa phi vật thể: Kinh kịch (京剧 - UNESCO 2010), Múa rối nước Việt Nam và Dân ca Quan họ Bắc Ninh (2009) là những viên ngọc quý trong kho tàng nghệ thuật truyền thống phương Đông.",
        quiz: [
          { q: "Cấu trúc nào dùng để nhấn mạnh nguyên nhân của một kết quả đã biết?", options: ["不但……而且……", "之所以……是因为……", "虽然……但是……", "只要……就……"], ans: 1, exp: "'之所以……是因为……' (Sở dĩ... là vì...) dùng để nhấn mạnh giải thích nguyên nhân." },
          { q: "Loại hình nghệ thuật sân khấu dân gian biểu diễn trên mặt nước của Việt Nam gọi là:", options: ["京剧", "相声", "水上木偶", "剪纸"], ans: 2, exp: "'水上木偶' (shuǐshàng mù'ǒu) là múa rối nước." },
          { q: "Trong câu hỏi lựa chọn 'Bạn đi xe đạp hay đi bộ?', từ nào được dùng để nối?", options: ["或者", "还是", "而且", "所以"], ans: 1, exp: "Trong câu nghi vấn hỏi lựa chọn, ta dùng liên từ '还是' (háishi)." },
          { q: "Môn nghệ thuật dùng kéo hoặc dao khắc trên giấy đỏ trang trí ngày lễ gọi là:", options: ["书法", "剪纸", "朝剧", "民歌"], ans: 1, exp: "'剪纸' (jiǎnzhǐ) là nghệ thuật cắt giấy truyền thống." }
        ]
      },
      {
        id: "on-tap-2",
        lessonNum: "Ôn tập 2",
        title: "复习二 (Ôn tập Chủ điểm 2)",
        pinyin: "Fùxí èr",
        vietTitle: "Hệ thống hóa Chủ điểm 2: Di sản văn hóa & Nghệ thuật",
        target: "Củng cố phó từ 再, 十分; lượng từ 条, 套; cấu trúc nối tiếp 一……就……; cấu trúc giải thích nguyên nhân 之所以……是因为……; rèn luyện khả năng giới thiệu văn hóa bằng tiếng Trung.",
        vocab: [
          { cn: "文化遗产", py: "wénhuà yíchǎn", vi: "di sản văn hóa", ex: "我们要保护两国的文化遗产。", viEx: "Chúng ta cần bảo tồn di sản văn hóa của hai nước." },
          { cn: "世界闻名", py: "shìjiè wénmíng", vi: "nổi tiếng thế giới", ex: "下龙湾是世界闻名的风景区。", viEx: "Vịnh Hạ Long là thắng cảnh nổi tiếng thế giới." },
          { cn: "交流", py: "jiāoliú", vi: "giao lưu", ex: "加强中越两国青少年的文化交流。", viEx: "Tăng cường giao lưu văn hóa giữa thanh thiếu niên hai nước Trung - Việt." }
        ],
        summary: "Tổng kết: Cách dùng 再 (hành động lặp lại ở tương lai); liên từ 一……就…… (vừa... là liền...); cấu trúc 之所以……是因为…… (sở dĩ... là vì...); lượng từ chuẩn xác cho trang phục (一套衣服、一条裙子).",
        quiz: [
          { q: "Điền cặp liên từ: '他______下课，______跑去操场踢球。'", options: ["只有……才……", "一……就……", "虽然……但是……", "因为……所以……"], ans: 1, exp: "Hành động liên tiếp nhanh: '一……就……' (Vừa tan học là chạy ra sân bóng ngay)." },
          { q: "Chọn câu có cấu trúc đúng:", options: ["之所以他生病，是因为天气冷。", "他之所以生病，是因为没穿暖和。", "是因为他没穿暖和，之所以生病。", "虽然他生病，是因为天气冷。"], ans: 1, exp: "Cấu trúc chuẩn: 'Chủ ngữ + 之所以...，是因为...'." },
          { q: "Món ăn nào không thể thiếu trong mâm cơm đoàn viên đêm 30 Tết ở miền Bắc Trung Quốc?", options: ["春卷", "饺子", "米粉", "面包"], ans: 1, exp: "Sủi cảo (饺子) là món ăn biểu tượng của đêm giao thừa miền Bắc Trung Quốc." },
          { q: "Lượng từ cho '两______旗袍' là:", options: ["本", "件", "件/套", "张"], ans: 2, exp: "Sườn xám có thể dùng lượng từ '件' hoặc '套' (nếu may theo bộ)." }
        ]
      }
    ]
  }
];

module.exports = { themesPart1 };
