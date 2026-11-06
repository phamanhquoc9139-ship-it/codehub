// Tiếng Trung Quốc 8 - Data Part 1: Chủ điểm 1 & Chủ điểm 2
module.exports = {
  theme1: {
    id: 'theme-1',
    code: 'Chủ điểm 1',
    chinese: '我们的社团',
    pinyin: 'Wǒmen de shètuán',
    title: 'Cộng đồng / Câu lạc bộ của chúng ta',
    desc: 'Trải nghiệm trại hè thanh thiếu niên, mua sắm siêu thị, chăm sóc thú cưng và kỹ năng làm việc nhóm.',
    color: 'emerald',
    icon: 'fa-users',
    lessons: [
      {
        id: 'lesson-1',
        unit: 'Bài 1',
        title: '北京夏令营',
        pinyin: 'Běijīng Xiàlìngyíng',
        meaning: 'Trại hè Bắc Kinh',
        goals: 'Nói về trải nghiệm trại hè, hoạt động giao lưu giữa học sinh Việt Nam và Trung Quốc, làm việc nhóm, điều có thể/được phép làm và ích lợi của trại hè.',
        vocab: [
          { hanzi: '夏令营', pinyin: 'xiàlìngyíng', hv: 'hạ lệnh doanh', meaning: 'trại hè', eg: '我们报名参加了北京夏令营。' },
          { hanzi: '活动', pinyin: 'huódòng', hv: 'hoạt động', meaning: 'hoạt động', eg: '夏令营有很多有意义的活动。' },
          { hanzi: '团队', pinyin: 'tuánduì', hv: 'đoàn đội', meaning: 'đội ngũ, nhóm', eg: '团队合作是非常重要的技能。' },
          { hanzi: '合作', pinyin: 'hézuò', hv: 'hợp tác', meaning: 'hợp tác, cùng làm việc', eg: '大家分工合作，完成了任务。' },
          { hanzi: '配合', pinyin: 'pèihé', hv: 'phối hợp', meaning: 'phối hợp, ăn ý', eg: '我们互相配合得很好。' },
          { hanzi: '分享', pinyin: 'fēnxiǎng', hv: 'phân hưởng', meaning: 'chia sẻ', eg: '大家一起分享学习经验。' },
          { hanzi: '文化意义', pinyin: 'wénhuà yìyì', hv: 'văn hóa ý nghĩa', meaning: 'ý nghĩa văn hóa', eg: '这次交流活动有很深的文化意义。' },
          { hanzi: '经验', pinyin: 'jīngyàn', hv: 'kinh nghiệm', meaning: 'kinh nghiệm', eg: '通过活动，我学到了很多宝贵的经验。' },
          { hanzi: '技能', pinyin: 'jìnéng', hv: 'kỹ năng', meaning: 'kỹ năng', eg: '夏令营培养了同学们的沟通技能。' },
          { hanzi: '进步', pinyin: 'jìnbù', hv: 'tiến bộ', meaning: 'tiến bộ, phát triển', eg: '他的汉语口语有了很大进步。' },
          { hanzi: '有意思', pinyin: 'yǒu yìsi', hv: 'hữu ý tư', meaning: 'thú vị, có ý nghĩa', eg: '今天的民俗体验真有意思！' }
        ],
        grammar: [
          {
            title: 'Động từ năng nguyện: 能 (Néng) và 可以 (Kěyǐ)',
            structure: 'Chủ ngữ + 能 / 可以 + Động từ + Tân ngữ',
            content: 'Cả hai động từ năng nguyện đều đứng trước động từ vị ngữ nhưng có sự phân biệt rõ về bản chất:',
            rules: [
              '<strong>能 + Động từ:</strong> Biểu thị năng lực bản thân, điều kiện khách quan hoặc khả năng đạt được một mức độ nào đó (VD: 我能说两种外语 — Tôi có thể nói 2 ngoại ngữ; 每天能走一万步).',
              '<strong>可以 + Động từ:</strong> Biểu thị sự cho phép (được phép làm gì), phù hợp với quy định hoặc dùng để hỏi xin phép lịch sự (VD: 我可以参加夏令营吗？ — Tôi có thể/được phép tham gia trại hè không?).',
              '<strong>Phủ định 不能:</strong> Không có năng lực, không đủ điều kiện (VD: 弟弟还小，不能做饭 — Em trai còn nhỏ, chưa thể nấu cơm).',
              '<strong>Phủ định 不可以:</strong> Không được phép, bị cấm đoán (VD: 图书馆里不可以吃东西 — Trong thư viện không được ăn đồ ăn).',
              '<strong>Câu hỏi chính phản:</strong> 能不能 / 可不可以 + Động từ (VD: 你能不能再说一遍？ — Bạn có thể nói lại một lần nữa không?).'
            ],
            mindmapRef: 'map-neng-keyi',
            examples: [
              { zh: '我能说流利的普通话。', py: 'Wǒ néng shuō liúlì de pǔtōnghuà.', vi: 'Tôi có thể nói tiếng phổ thông lưu loát.' },
              { zh: '请问，这里可以拍照吗？', py: 'Qǐngwèn, zhèlǐ kěyǐ pāizhào ma?', vi: 'Xin hỏi, ở đây có được phép chụp ảnh không?' },
              { zh: '生病了就不能去爬长城了。', py: 'Shēngbìng le jiù bù néng qù pá Chángchéng le.', vi: 'Bị ốm rồi thì không thể đi leo Vạn Lý Trường Thành nữa.' },
              { zh: '老师，我们可以进教室吗？', py: 'Lǎoshī, wǒmen kěyǐ jìn jiàoshì ma?', vi: 'Thưa cô, chúng em có thể vào lớp được không ạ?' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Minh', role: 'Học sinh Việt Nam', zh: '王明，你觉得这次北京夏令营怎么样？', py: 'Wáng Míng, nǐ juéde zhè cì Běijīng xiàlìngyíng zěnmeyàng?', vi: 'Vương Minh, bạn thấy trại hè Bắc Kinh lần này thế nào?' },
          { speaker: 'Vương Minh', role: 'Học sinh Trung Quốc', zh: '太有意思了！我们不仅能学汉语，还可以体验中国传统文化。', py: 'Tài yǒu yìsi le! Wǒmen bùjǐn néng xué hànyǔ, hái kěyǐ tǐyàn Zhōngguó chuántǒng wénhuà.', vi: 'Thú vị lắm! Chúng mình không những có thể học tiếng Trung mà còn được trải nghiệm văn hóa truyền thống Trung Hoa.' },
          { speaker: 'Minh', role: 'Học sinh Việt Nam', zh: '明天下午的团队合作游戏，每个人都能参加吗？', py: 'Míngtiān xiàwǔ de tuánduì hézuò yóuxì, měi gè rén dōu néng cānjiā ma?', vi: 'Trò chơi hợp tác nhóm chiều mai, tất cả mọi người đều có thể tham gia chứ?' },
          { speaker: 'Vương Minh', role: 'Học sinh Trung Quốc', zh: '当然可以！大家一起分享经验，互相配合，一定能取得好成绩！', py: 'Dāngrán kěyǐ! Dàjiā yìqǐ fēnxiǎng jīngyàn, hùxiāng pèihé, yídìng néng qǔdé hǎo chéngjì!', vi: 'Đương nhiên được chứ! Mọi người cùng chia sẻ kinh nghiệm, phối hợp với nhau, nhất định sẽ đạt thành tích tốt!' }
        ],
        practice: [
          {
            q: 'Trong câu "图书馆里____大声喧哗", từ nào thể hiện đúng quy định cấm đoán?',
            opts: ['不可以', '能', '可能', '可以'],
            ans: 0,
            explain: '"不可以" nhấn mạnh quy tắc không được phép/bị cấm (Không được làm ồn ào trong thư viện).'
          },
          {
            q: 'Câu nào biểu thị năng lực cá nhân?',
            opts: ['我能说两种外语。', '我可以进来看书吗？', '这里不可以停自行车。', '你可以借我一支笔吗？'],
            ans: 0,
            explain: '"能说两种外语" biểu thị khả năng/năng lực ngoại ngữ của bản thân.'
          }
        ]
      },
      {
        id: 'lesson-2',
        unit: 'Bài 2',
        title: '逛超市',
        pinyin: 'Guàng Chāoshì',
        meaning: 'Đi dạo / mua sắm ở siêu thị',
        goals: 'Hỏi vị trí hàng hóa, nói về mua sắm, thanh toán và thói quen mua hàng ở siêu thị/cửa hàng tiện lợi.',
        vocab: [
          { hanzi: '超市', pinyin: 'chāoshì', hv: 'siêu thị', meaning: 'siêu thị', eg: '周末妈妈常带我逛超市。' },
          { hanzi: '商品', pinyin: 'shāngpǐn', hv: 'thương phẩm', meaning: 'hàng hóa', eg: '超市里的商品种类很齐全。' },
          { hanzi: '国内/国外', pinyin: 'guónèi/guówài', hv: 'quốc nội/quốc ngoại', meaning: 'trong nước / nước ngoài', eg: '既有国内的商品，也有国外的进口货。' },
          { hanzi: '食品区', pinyin: 'shípǐn qū', hv: 'thực phẩm khu', meaning: 'khu thực phẩm', eg: '我们先去食品区买面包。' },
          { hanzi: '水果区', pinyin: 'shuǐguǒ qū', hv: 'thủy quả khu', meaning: 'khu trái cây', eg: '水果区有新鲜的西瓜和苹果。' },
          { hanzi: '收银台', pinyin: 'shōuyíntái', hv: 'thu ngân đài', meaning: 'quầy thu ngân', eg: '请您到二号收银台结账。' },
          { hanzi: '结账', pinyin: 'jiézhàng', hv: 'kết trướng', meaning: 'thanh toán, tính tiền', eg: '我们去结账吧，排队的人不多。' },
          { hanzi: '扫码', pinyin: 'sǎomǎ', hv: 'tảo mã', meaning: 'quét mã (QR/mã vạch)', eg: '在中国可以用手机扫码支付。' },
          { hanzi: '连锁店', pinyin: 'liánsuǒdiàn', hv: 'liên tỏa điếm', meaning: 'chuỗi cửa hàng', eg: '这家超市在全国有几百家连锁店。' },
          { hanzi: '便利店', pinyin: 'biànlìdiàn', hv: 'tiện lợi điếm', meaning: 'cửa hàng tiện lợi 24/7', eg: '学校门口新开了一家便利店。' },
          { hanzi: '网购', pinyin: 'wǎnggòu', hv: 'võng cấu', meaning: 'mua sắm trực tuyến', eg: '越来越多的年轻人喜欢网购。' },
          { hanzi: '日用品', pinyin: 'rìyòngpǐn', hv: 'nhật dụng phẩm', meaning: 'đồ dùng hằng ngày', eg: '毛巾、牙刷都是日常日用品。' },
          { hanzi: '快递员', pinyin: 'kuàidìyuán', hv: 'khoái đệ viên', meaning: 'nhân viên giao hàng / shipper', eg: '快递员把包裹送到了家门口。' }
        ],
        grammar: [
          {
            title: 'Bổ ngữ xu hướng đơn giản: 来 (Lái) và 去 (Qù)',
            structure: 'Động từ + 来 / 去 hoặc Động từ + Nơi chốn + 来 / 去',
            content: '來 và 去 đứng sau động từ biểu thị hướng chuyển động so với người nói hoặc điểm quy chiếu:',
            rules: [
              '<strong>来 (Lái):</strong> Hướng về phía người nói/điểm quy chiếu (VD: 进来 — vào đây; 出来 — ra đây; 回来 — về đây; 过来 — qua đây).',
              '<strong>去 (Qù):</strong> Hướng rời xa người nói/điểm quy chiếu (VD: 进去 — vào đó; 出去 — ra đó; 回去 — về đó; 过去 — qua đó).',
              '<strong>Vị trí khi tân ngữ là nơi chốn:</strong> Bắt buộc phải đặt trước 来/去 theo cấu trúc [Động từ + Nơi chốn + 来/去] (VD: 他到超市去了 — Anh ấy đến siêu thị rồi; 我们回家去吧 — Chúng ta về nhà đi).',
              '<strong>Vị trí khi tân ngữ là vật cụ thể:</strong> Có thể đặt trước hoặc sau 来/去 (VD: 他带了一本书来 / 他带来了一本书 — Cậu ấy mang đến một cuốn sách).'
            ],
            mindmapRef: 'map-simple-direction',
            examples: [
              { zh: '请大家快点儿进来吧！', py: 'Qǐng dàjiā kuàidiǎnr jìnlái ba!', vi: 'Mời mọi người nhanh chóng vào đây đi!' },
              { zh: '外面下大雨了，你不要跑出去。', py: 'Wàimiàn xià dàyǔ le, nǐ bú yào pǎo chūqù.', vi: 'Bên ngoài đang mưa to, bạn đừng chạy ra ngoài đó.' },
              { zh: '王老师已经回办公室去了。', py: 'Wáng lǎoshī yǐjīng huí bàngōngshì qù le.', vi: 'Thầy Vương đã trở về văn phòng rồi.' },
              { zh: '你明天来我家时，请带几张照片来。', py: 'Nǐ míngtiān lái wǒ jiā shí, qǐng dài jǐ zhāng zhàopiàn lái.', vi: 'Ngày mai khi đến nhà tôi, bạn hãy mang theo vài tấm ảnh nhé.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Lan', role: 'Học sinh', zh: '阿姨，请问食品区在哪儿？', py: 'Āyí, qǐngwèn shípǐn qū zài nǎr?', vi: 'Dì ơi, xin hỏi khu thực phẩm ở đâu ạ?' },
          { speaker: 'Nhân viên', role: 'Nhân viên siêu thị', zh: '食品区在一楼左边，从这里直走过去就是。', py: 'Shípǐn qū zài yī lóu zuǒbiān, cóng zhèlǐ zhí zǒu guòqù jiù shì.', vi: 'Khu thực phẩm ở bên trái tầng một, từ đây đi thẳng qua là tới.' },
          { speaker: 'Lan', role: 'Học sinh', zh: '好的，我想买一些越南特产带回学校去。', py: 'Hǎo de, wǒ xiǎng mǎi yìxiē Yuènán tèchǎn dài huí xuéxiào qù.', vi: 'Vâng ạ, cháu muốn mua một ít đặc sản Việt Nam mang về trường.' },
          { speaker: 'Nhân viên', role: 'Nhân viên siêu thị', zh: '挑好商品后，请您到那边的收银台扫码结账。', py: 'Tiāo hǎo shāngpǐn hòu, qǐng nín dào nàbiān de shōuyíntái sǎomǎ jiézhàng.', vi: 'Chọn đồ xong, xin mời cháu ra quầy thu ngân đằng kia quét mã tính tiền nhé.' }
        ],
        practice: [
          {
            q: 'Câu nào sắp xếp vị trí tân ngữ nơi chốn ĐÚNG theo ngữ pháp tiếng Trung?',
            opts: ['他回中国去了。', '他回去中国了。', '他去回中国了。', '他中国回去了。'],
            ans: 0,
            explain: 'Khi tân ngữ là nơi chốn (中国), bắt buộc đặt giữa động từ (回) và bổ ngữ xu hướng (去): [Động từ + Nơi chốn + 去].'
          },
          {
            q: 'Người nói đang ở trong phòng học và gọi bạn ngoài hành lang vào, câu nào đúng?',
            opts: ['快进来！', '快进去！', '快出去！', '快回来！'],
            ans: 0,
            explain: 'Người nói ở trong phòng, hành động di chuyển về phía người nói dùng "进 + 来" (vào đây).'
          }
        ]
      },
      {
        id: 'lesson-3',
        unit: 'Bài 3',
        title: '我家的宠物',
        pinyin: 'Wǒ Jiā de Chǒngwù',
        meaning: 'Thú cưng nhà tôi',
        goals: 'Miêu tả thú cưng, tính nết, thói quen hoạt động và hướng di chuyển; viết nhật ký quan sát hoặc giới thiệu con vật yêu thích.',
        vocab: [
          { hanzi: '宠物', pinyin: 'chǒngwù', hv: 'sủng vật', meaning: 'thú cưng', eg: '小猫是我最喜欢的宠物。' },
          { hanzi: '猫', pinyin: 'māo', hv: 'miêu', meaning: 'con mèo', eg: '我家养了一只白色的波斯猫。' },
          { hanzi: '狗', pinyin: 'gǒu', hv: 'cẩu', meaning: 'con chó', eg: '小狗看到主人就摇尾巴。' },
          { hanzi: '调皮', pinyin: 'tiáopí', hv: 'điều bì', meaning: 'nghịch ngợm, hiếu động', eg: '这只小猴子非常调皮。' },
          { hanzi: '温顺', pinyin: 'wēnshùn', hv: 'ôn thuận', meaning: 'hiền lành, ngoan ngoãn', eg: '小白兔性格很温顺。' },
          { hanzi: '友善', pinyin: 'yǒushàn', hv: 'hữu thiện', meaning: 'thân thiện', eg: '它对客人十分友善。' },
          { hanzi: '尾巴', pinyin: 'wěiba', hv: 'vĩ ba', meaning: 'cái đuôi', eg: '松鼠有一条毛茸茸的大尾巴。' },
          { hanzi: '户外活动', pinyin: 'hùwài huódòng', hv: 'hộ ngoại hoạt động', meaning: 'hoạt động ngoài trời', eg: '每天下午我都带狗狗做户外活动。' },
          { hanzi: '皮球', pinyin: 'píqiú', hv: 'bì cầu', meaning: 'quả bóng da/cao su', eg: '小狗咬着皮球跑来跑去。' },
          { hanzi: '拿', pinyin: 'ná', hv: 'nã', meaning: 'cầm, lấy', eg: '请你把桌上的书拿过来。' },
          { hanzi: '迎接', pinyin: 'yíngjiē', hv: 'nghênh tiếp', meaning: 'đón, chào đón', eg: '每天放学回家，它都跑到门口迎接我。' },
          { hanzi: '爬树', pinyin: 'pá shù', hv: 'bà thụ', meaning: 'trèo cây', eg: '小猫动作灵活，很会爬树。' }
        ],
        grammar: [
          {
            title: 'Bổ ngữ xu hướng phức hợp (复合趋向补语)',
            structure: 'Động từ + 上/下/进/出/回/过/起 + 来/去',
            content: 'Kết hợp một động từ cơ bản với hai thành tố xu hướng chỉ hướng di chuyển không gian 3 chiều và điểm quy chiếu:',
            rules: [
              '<strong>Các cặp xu hướng cơ bản:</strong> 上来/上去 (lên đây/lên đó), 下来/下去 (xuống đây/xuống đó), 进来/进去 (vào đây/vào đó), 出来/出去 (ra đây/ra đó), 回来/回去 (về đây/về đó), 过来/过去 (qua đây/qua đó), 起来 (hướng lên trên hoặc bắt đầu).',
              '<strong>Vị trí tân ngữ nơi chốn:</strong> Bắt buộc nằm giữa thành tố 1 và 来/去 (VD: 跳上沙发来 — nhảy lên ghế sofa; 跑进房间去 — chạy vào trong phòng).',
              '<strong>Vị trí tân ngữ chỉ vật cụ thể:</strong> Có thể đặt linh hoạt: [Động từ + Bổ ngữ + Tân ngữ] hoặc [Động từ + Thành tố 1 + Tân ngữ + 来/去] (VD: 拿出一本书来 / 拿出来一本书 — Lấy ra một quyển sách).'
            ],
            mindmapRef: 'map-complex-direction',
            examples: [
              { zh: '小狗看见我，高兴地从院子里跑出来了。', py: 'Xiǎogǒu kànjiàn wǒ, gāoxìng de cóng yuànzi lǐ pǎo chūlái le.', vi: 'Chú cún thấy tôi, vui mừng chạy từ trong sân ra đây.' },
              { zh: '调皮的小猫一下子跳上桌子去了。', py: 'Tiáopí de xiǎomāo yíxiàzi tiào shàng zhuōzi qù le.', vi: 'Chú mèo nghịch ngợm thoắt cái đã nhảy tót lên bàn rồi.' },
              { zh: '请大家把作业本拿出来。', py: 'Qǐng dàjiā bǎ zuòyèběn ná chūlái.', vi: 'Xin mời cả lớp lấy vở bài tập ra.' },
              { zh: '他从书包里拿出来一个红色的皮球。', py: 'Tā cóng shūbāo lǐ ná chūlái yí gè hóngsè de píqiú.', vi: 'Cậu ấy lấy từ trong cặp ra một quả bóng màu đỏ.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Bình', role: 'Bạn học', zh: '你家的宠物真可爱！它叫什么名字？', py: 'Nǐ jiā de chǒngwù zhēn kě’ài! Tā jiào shénme míngzi?', vi: 'Thú cưng nhà bạn đáng yêu quá! Nó tên là gì thế?' },
          { speaker: 'Hoa', role: 'Chủ nuôi', zh: '它叫“雪球”，是一只调皮的小猫。你看，它又爬上树去了！', py: 'Tā jiào “Xuěqiú”, shì yì zhī tiáopí de xiǎomāo. Nǐ kàn, tā yòu pá shàng shù qù le!', vi: 'Nó tên là "Tuyết Cầu", là chú mèo rất tinh nghịch. Cậu xem, nó lại trèo lên cây rồi kìa!' },
          { speaker: 'Bình', role: 'Bạn học', zh: '哈哈，雪球快下来吧！我带了小皮球来找你玩呢。', py: 'Hāhā, Xuěqiú kuài xiàlái ba! Wǒ dài le xiǎo píqiú lái zhǎo nǐ wán ne.', vi: 'Haha, Tuyết Cầu mau trèo xuống đây đi! Tớ mang bóng nhỏ đến chơi với cậu nè.' },
          { speaker: 'Hoa', role: 'Chủ nuôi', zh: '平时它很温顺，只要我拿出一块鱼肉来，它就马上跑过来了。', py: 'Píngshí tā hěn wēnshùn, zhǐyào wǒ ná chū yí kuài yúròu lái, tā jiù mǎshàng pǎo guòlái le.', vi: 'Bình thường nó ngoan lắm, chỉ cần tớ lấy một miếng thịt cá ra là nó chạy tót lại ngay.' }
        ],
        practice: [
          {
            q: 'Điền bổ ngữ xu hướng phức hợp: "小猫从树上跳____ (xuống đây)".',
            opts: ['下来', '下去', '出来', '进去'],
            ans: 0,
            explain: 'Từ trên cao xuống dưới đất và hướng về phía người nói đứng bên dưới thì dùng "下来".'
          },
          {
            q: 'Câu nào diễn đạt đúng khi mang vật lấy ra khỏi túi?',
            opts: ['他从口袋里拿出一支笔来。', '他从口袋里拿一支笔出来来。', '他拿出来从口袋里一支笔。', '他拿从口袋里一支笔去。'],
            ans: 0,
            explain: 'Cấu trúc chuẩn: [Từ đâu + Động từ + Thành tố 1 (出) + Tân ngữ vật (一支笔) + 来].'
          }
        ]
      },
      {
        id: 'lesson-4',
        unit: 'Bài 4',
        title: '复习一 (Ôn tập 1)',
        pinyin: 'Fùxí Yī',
        meaning: 'Ôn tập tổng kết Chủ điểm 1: Cộng đồng và Cuộc sống',
        goals: 'Hệ thống hóa toàn diện kiến thức Chủ điểm 1: Động từ năng nguyện 能/可以/不能/不可以; Bổ ngữ xu hướng đơn giản và phức hợp; Các chủ đề giao tiếp về trại hè, siêu thị, thú cưng và chiết tự chữ Hán 日, 明, 旦.',
        summary: [
          '<strong>Động từ năng nguyện:</strong> 能 (năng lực tự thân, điều kiện khách quan) vs 可以 (được phép theo quy định, xin phép lịch sự); 不能 (không thể/không đủ năng lực) vs 不可以 (không được phép/bị cấm).',
          '<strong>Bổ ngữ xu hướng đơn giản:</strong> Động từ + 来 (tiến lại gần người nói) / 去 (rời xa người nói). Chú ý tân ngữ nơi chốn bắt buộc đặt trước 来/去: [Động từ + Nơi chốn + 来/去] (VD: 回家去, 进教室来).',
          '<strong>Bổ ngữ xu hướng phức hợp:</strong> Động từ + [上/下/进/出/回/过/起] + [来/去]. Miêu tả chính xác phương hướng di chuyển 3 chiều trong không gian.',
          '<strong>Văn hóa & Chữ Hán:</strong> Sự biến đổi chữ tượng hình 日 (mặt trời) tạo nên chữ hội ý 明 (ngày mai, sáng sủa) và chữ chỉ sự 旦 (mặt trời trên đường chân trời - sáng sớm, Tết Nguyên đán).'
        ],
        tasks: [
          'Thiết kế Poster Trại hè Thanh thiếu niên Việt - Trung: Giới thiệu 3 hoạt động hấp dẫn, kỹ năng rèn luyện được và quy định tham gia.',
          'Viết đoạn văn ngắn 80-100 chữ miêu tả một con vật nuôi yêu thích, sử dụng ít nhất 2 câu có bổ ngữ xu hướng phức hợp (跳上来, 跑过去, 拿出来...).'
        ]
      }
    ]
  },
  theme2: {
    id: 'theme-2',
    code: 'Chủ điểm 2',
    chinese: '我们的文化遗产',
    pinyin: 'Wǒmen de wénhuà yíchǎn',
    title: 'Di sản văn hóa của chúng ta',
    desc: 'Khám phá tinh hoa ẩm thực Việt - Trung, thế giới nghệ thuật điện ảnh, không gian nhà hàng và cách diễn đạt trạng thái tồn tại.',
    color: 'rose',
    icon: 'fa-landmark',
    lessons: [
      {
        id: 'lesson-5',
        unit: 'Bài 5',
        title: '我想吃中国菜',
        pinyin: 'Wǒ Xiǎng Chī Zhōngguó Cài',
        meaning: 'Tôi muốn ăn món Trung Quốc',
        goals: 'Giới thiệu đặc sản Việt Nam/Trung Quốc, nói muốn ăn món nào, rủ bạn đi ăn và trao đổi về khẩu vị, thói quen ăn uống.',
        vocab: [
          { hanzi: '特产', pinyin: 'tèchǎn', hv: 'đặc sản', meaning: 'đặc sản địa phương', eg: '河内春卷是很有名的特产。' },
          { hanzi: '美食', pinyin: 'měishí', hv: 'mỹ thực', meaning: 'món ăn ngon, ẩm thực', eg: '中国各个省市都有独特的美食。' },
          { hanzi: '春卷', pinyin: 'chūnjuǎn', hv: 'xuân quyển', meaning: 'nem rán, chả giò / gỏi cuốn', eg: '越南春卷酥脆可口。' },
          { hanzi: '河粉', pinyin: 'héfěn', hv: 'hà phấn', meaning: 'phở (Việt Nam)', eg: '我早餐最喜欢吃牛肉河粉。' },
          { hanzi: '北京烤鸭', pinyin: 'Běijīng kǎoyā', hv: 'Bắc Kinh khảo áp', meaning: 'vịt quay Bắc Kinh', eg: '到了北京一定要品尝北京烤鸭。' },
          { hanzi: '四川火锅', pinyin: 'Sìchuān huǒguō', hv: 'Tứ Xuyên hỏa oa', meaning: 'lẩu Tứ Xuyên cay nồng', eg: '四川火锅又麻又辣，味道浓郁。' },
          { hanzi: '味道', pinyin: 'wèidào', hv: 'vị đạo', meaning: 'hương vị, mùi vị', eg: '这道菜的味道非常清淡鲜美。' },
          { hanzi: '习惯', pinyin: 'xíguàn', hv: 'tập quán', meaning: 'thói quen, quen với', eg: '我已经习惯了用筷子吃饭。' },
          { hanzi: '产品', pinyin: 'chǎnpǐn', hv: 'sản phẩm', meaning: 'sản phẩm', eg: '越南农产品在国际市场上很受欢迎。' },
          { hanzi: '质量', pinyin: 'zhìliàng', hv: 'chất lượng', meaning: 'chất lượng', eg: '这里的食品质量非常好。' },
          { hanzi: '出口', pinyin: 'chūkǒu', hv: 'xuất khẩu', meaning: 'xuất khẩu', eg: '越南优质大米大量出口到国外。' },
          { hanzi: '一边……一边……', pinyin: 'yìbiān…yìbiān…', hv: 'nhất biên... nhất biên...', meaning: 'vừa… vừa… (làm 2 việc cùng lúc)', eg: '我们一边吃饭，一边聊天。' }
        ],
        grammar: [
          {
            title: 'Phân biệt liên từ lựa chọn: 或者 (Huòzhě) và 还是 (Háishì)',
            structure: 'Câu trần thuật dùng 或者; Câu hỏi lựa chọn dùng 还是',
            content: 'Cả hai đều mang nghĩa "hoặc, hay là", nhưng phạm vi sử dụng hoàn toàn khác nhau:',
            rules: [
              '<strong>或者 (Huòzhě):</strong> Dùng trong câu khẳng định/trần thuật để đưa ra các lựa chọn khả dĩ (VD: 星期天我去图书馆或者去书店 — Chủ nhật tôi đi thư viện hoặc đi hiệu sách; 我喝咖啡或者绿茶都可以 — Tôi uống cà phê hoặc trà xanh đều được).',
              '<strong>还是 (Háishì):</strong> Thường dùng trong câu nghi vấn/hỏi lựa chọn A hay B (VD: 你喜欢吃米饭还是吃面条？ — Bạn thích ăn cơm hay ăn mì sợi?).',
              '<strong>Trả lời câu hỏi lựa chọn:</strong> Có thể chọn 1 trong 2 vế, hoặc dùng "都可以" (đều được), "哪个都行" nếu không kén chọn.'
            ],
            mindmapRef: 'map-huozhe-haishi',
            examples: [
              { zh: '你明天去看电影还是去逛超市？', py: 'Nǐ míngtiān qù kàn diànyǐng háishì qù guàng chāoshì?', vi: 'Ngày mai bạn đi xem phim hay đi siêu thị?' },
              { zh: '下课后，我常常去打篮球或者跑步。', py: 'Xiàkè hòu, wǒ chángcháng qù dǎ lánqiú huòzhě pǎobù.', vi: 'Sau giờ học, tôi thường đi chơi bóng rổ hoặc chạy bộ.' },
              { zh: '你想喝橙汁还是奶茶？—— 都可以。', py: 'Nǐ xiǎng hē chéngzhī háishì nǎichá? —— Dōu kěyǐ.', vi: 'Bạn muốn uống nước cam hay trà sữa? —— Cái nào cũng được.' }
            ]
          },
          {
            title: 'Động từ / Cụm động từ làm Định ngữ với 的 (De)',
            structure: 'Động từ / Cụm động từ + 的 + Danh từ trung tâm ngữ',
            content: 'Dùng hành động hoặc trạng thái để bổ nghĩa, phân loại cụ thể cho danh từ đứng sau 的:',
            rules: [
              'Cụm động từ đứng trước "的", danh từ cần bổ nghĩa đứng sau "的".',
              'VD: <strong>今天吃的菜</strong> (món ăn ăn hôm nay), <strong>会做饭的人</strong> (người biết nấu cơm), <strong>在门口等你的朋友</strong> (người bạn đang đợi bạn ở cửa).',
              'Khi dịch sang tiếng Việt, thường dịch danh từ trước rồi mới đến vế bổ nghĩa "mà / do / được...".'
            ],
            mindmapRef: 'map-attributive-v',
            examples: [
              { zh: '这是妈妈昨天买的新茶。', py: 'Zhè shì māma zuótiān mǎi de xīn chá.', vi: 'Đây là trà mới mẹ mua ngày hôm qua.' },
              { zh: '坐在窗户旁边的那个人是我哥哥。', py: 'Zuò zài chuānghu pángbiān de nà gè rén shì wǒ gēge.', vi: 'Người ngồi bên cạnh cửa sổ là anh trai tôi.' },
              { zh: '中国留学生做的春卷真地道！', py: 'Zhōngguó liúxuéshēng zuò de chūnjuǎn zhēn dìdao!', vi: 'Nem cuốn do lưu học sinh Trung Quốc làm thật là chuẩn vị!' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Lý Phong', role: 'Bạn học Trung Quốc', zh: '阮兰，今天中午我们去学校旁边那家餐厅吃饭吧！', py: 'Ruǎn Lán, jīntiān zhōngwǔ wǒmen qù xuéxiào pángbiān nà jiā cāntīng chīfàn ba!', vi: 'Nguyễn Lan, trưa nay chúng mình ra nhà hàng cạnh trường ăn cơm đi!' },
          { speaker: 'Nguyễn Lan', role: 'Học sinh Việt Nam', zh: '好啊，你想吃中国菜还是越南菜？', py: 'Hǎo a, nǐ xiǎng chī Zhōngguó cài háishì Yuènán cài?', vi: 'Được chứ, bạn muốn ăn món Trung Quốc hay món Việt Nam?' },
          { speaker: 'Lý Phong', role: 'Bạn học Trung Quốc', zh: '我想尝尝他们做的越南春卷和牛肉河粉，听说味道很地道。', py: 'Wǒ xiǎng chángchang tāmen zuò de Yuènán chūnjuǎn hé niúròu héfěn, tīngshuō wèidào hěn dìdao.', vi: 'Mình muốn nếm thử nem cuốn và phở bò do họ làm, nghe nói hương vị chuẩn lắm.' },
          { speaker: 'Nguyễn Lan', role: 'Học sinh Việt Nam', zh: '太棒了！我们还可以点一壶茉莉花茶，一边喝茶一边聊夏令营的事。', py: 'Tài bàng le! Wǒmen hái kěyǐ diǎn yì hú mòlìhuā chá, yìbiān hē chá yìbiān liáo xiàlìngyíng de shì.', vi: 'Tuyệt quá! Chúng mình còn có thể gọi một ấm trà hoa nhài, vừa uống trà vừa trò chuyện về chuyện trại hè.' }
        ],
        practice: [
          {
            q: 'Chọn liên từ thích hợp: "你喜欢喝热茶____冰水？"',
            opts: ['还是', '或者', '也是', '但是'],
            ans: 0,
            explain: 'Câu hỏi có dấu "?" và yêu cầu lựa chọn giữa 2 đối tượng nên dùng "还是".'
          },
          {
            q: 'Dịch cụm từ "Món ăn tôi thích nhất" sang tiếng Trung:',
            opts: ['我最喜欢的菜', '我最喜欢菜的', '最喜欢我菜', '菜我最喜欢的'],
            ans: 0,
            explain: 'Cụm động từ làm định ngữ: [我最喜欢] + 的 + [菜].'
          }
        ]
      },
      {
        id: 'lesson-6',
        unit: 'Bài 6',
        title: '我们都喜欢看电影',
        pinyin: 'Wǒmen Dōu Xǐhuan Kàn Diànyǐng',
        meaning: 'Chúng tôi đều thích xem phim',
        goals: 'Nói về thể loại/phim yêu thích, giới thiệu phim Việt Nam hoặc Trung Quốc, nhận xét phim và chia sẻ lợi ích của việc xem phim.',
        vocab: [
          { hanzi: '电影', pinyin: 'diànyǐng', hv: 'điện ảnh', meaning: 'bộ phim', eg: '周末我和同学一起去看电影。' },
          { hanzi: '动画片', pinyin: 'dònghuàpiàn', hv: 'động họa phiến', meaning: 'phim hoạt hình', eg: '弟弟特别喜欢看中国动画片《大闹天宫》。' },
          { hanzi: '连续剧', pinyin: 'liánxùjù', hv: 'liên tục kịch', meaning: 'phim truyền hình nhiều tập', eg: '这部历史连续剧拍得很精彩。' },
          { hanzi: '资料', pinyin: 'zīliào', hv: 'tư liệu', meaning: 'tài liệu, tư liệu', eg: '老师给我们找了很多电影资料。' },
          { hanzi: '内容', pinyin: 'nèiróng', hv: 'nội dung', meaning: 'nội dung', eg: '这部电影的内容十分感人。' },
          { hanzi: '情感', pinyin: 'qínggǎn', hv: 'tình cảm', meaning: 'tình cảm, cảm xúc', eg: '影片表达了深厚的家庭情感。' },
          { hanzi: '精彩', pinyin: 'jīngcǎi', hv: 'tinh thải', meaning: 'đặc sắc, xuất sắc', eg: '武打场面非常精彩！' },
          { hanzi: '丰富', pinyin: 'fēngfù', hv: 'phong phú', meaning: 'phong phú, dồi dào', eg: '剧情丰富，引人入胜。' },
          { hanzi: '团结', pinyin: 'tuánjié', hv: 'đoàn kết', meaning: 'đoàn kết', eg: '大家团结一致，战胜了困难。' },
          { hanzi: '精神', pinyin: 'jīngshén', hv: 'tinh thần', meaning: 'tinh thần, khí chất', eg: '我们要学习他们勇敢拼搏的精神。' },
          { hanzi: '段', pinyin: 'duàn', hv: 'đoạn', meaning: 'lượng từ: đoạn, khoảng', eg: '电影里有一段非常动听的音乐。' }
        ],
        grammar: [
          {
            title: 'Phó từ 好像 (Hǎoxiàng) và Lượng từ 段 (Duàn)',
            structure: '好像 + Cụm từ/Mệnh đề & Số từ + 段 + Danh từ',
            content: 'Diễn tả phỏng đoán cảm nhận và đơn vị phân đoạn:',
            rules: [
              '<strong>好像 (Hǎoxiàng):</strong> Có vẻ như, dường như, hình như. Thể hiện sự phỏng đoán dựa trên cảm nhận hoặc dấu hiệu khách quan (VD: 这部电影好像很有意思 — Bộ phim này có vẻ rất thú vị; 他好像感冒了 — Hình như anh ấy bị cảm rồi).',
              '<strong>Lượng từ 段 (Duàn):</strong> Dùng cho một đoạn/khoảng được xem như một chỉnh thể:',
              '• Thời gian: 一段时间 (một khoảng thời gian).',
              '• Không gian/khoảng cách: 一段路 (một đoạn đường).',
              '• Tác phẩm nghệ thuật/ngôn từ: 一段音乐 (một đoạn nhạc), 一段视频 (một đoạn clip), 一段话 (một đoạn lời nói/văn).'
            ],
            mindmapRef: 'map-haoxiang-duan',
            examples: [
              { zh: '那部新的动画片好像明天就要上映了。', py: 'Nà bù xīn de dònghuàpiàn hǎoxiàng míngtiān jiù yào shàngyìng le.', vi: 'Bộ phim hoạt hình mới đó hình như ngày mai công chiếu rồi.' },
              { zh: '在前一段路，风景特别美丽。', py: 'Zài qián yí duàn lù, fēngjǐng tèbié měilì.', vi: 'Ở đoạn đường phía trước, phong cảnh đặc biệt tươi đẹp.' },
              { zh: '电影里那一段传统的京剧音乐深深吸引了我。', py: 'Diànyǐng lǐ nà yí duàn chuántǒng de jīngjù yīnyuè shēnshēn xīyǐn le wǒ.', vi: 'Đoạn nhạc kinh kịch truyền thống trong phim đã thu hút tôi sâu sắc.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Hải', role: 'Học sinh', zh: '张伟，你看了最近很火的那部历史电影了吗？', py: 'Zhāng Wěi, nǐ kàn le zuìjìn hěn huǒ de nà bù lìshǐ diànyǐng le ma?', vi: 'Trương Vĩ, bạn đã xem bộ phim lịch sử đang rất sốt dạo gần đây chưa?' },
          { speaker: 'Trương Vĩ', role: 'Học sinh', zh: '看了！电影里的内容非常丰富，展现了人民团结互助的精神。', py: 'Kàn le! Diànyǐng lǐ de nèiróng fēicháng fēngfù, zhǎnxiàn le rénmín tuánjié hùzhù de jīngshén.', vi: 'Xem rồi chứ! Nội dung phim phong phú lắm, tái hiện tinh thần đoàn kết giúp đỡ lẫn nhau của nhân dân.' },
          { speaker: 'Hải', role: 'Học sinh', zh: '我也听说评价很高，里面的插曲好像是一段很有名的古曲。', py: 'Wǒ yě tīngshuō píngjià hěn gāo, lǐmiàn de chāqǔ hǎoxiàng shì yí duàn hěn yǒumíng de gǔqǔ.', vi: 'Mình cũng nghe nói đánh giá cao lắm, bài hát trong phim hình như là một đoạn nhạc cổ rất nổi tiếng.' },
          { speaker: 'Trương Vĩ', role: 'Học sinh', zh: '没错，有一段时间网上大家都在模仿那段音乐呢！', py: 'Méicuò, yǒu yí duàn shíjiān wǎngshang dàjiā dōu zài mófǎng nà duàn yīnyuè ne!', vi: 'Đúng vậy, có một dạo trên mạng mọi người đều mô phỏng lại đoạn nhạc ấy đấy!' }
        ],
        practice: [
          {
            q: 'Lượng từ nào thích hợp điền vào chỗ trống: "听到这一____优美的音乐，大家都安静了下来。"',
            opts: ['段', '张', '本', '双'],
            ans: 0,
            explain: 'Với âm nhạc, lời nói, thời gian thì lượng từ chuẩn là "段" (một đoạn nhạc: 一段音乐).'
          },
          {
            q: 'Từ "好像" trong câu "他好像有点儿累" thể hiện ý nghĩa gì?',
            opts: ['Phỏng đoán, cảm nhận chưa khẳng định 100%', 'Bắt buộc làm gì đó', 'Hành động trong quá khứ', 'So sánh tuyệt đối'],
            ans: 0,
            explain: '"好像" nghĩa là "dường như, hình như", biểu thị phỏng đoán nhẹ nhàng.'
          }
        ]
      },
      {
        id: 'lesson-7',
        unit: 'Bài 7',
        title: '我想尝尝越南春卷',
        pinyin: 'Wǒ Xiǎng Chángchang Yuènán Chūnjuǎn',
        meaning: 'Tôi muốn nếm thử nem cuốn Việt Nam',
        goals: 'Gọi món, giới thiệu nhà hàng/món ăn, hỏi nhà hàng còn mở không và miêu tả đồ vật/trạng thái trong không gian với trợ từ 着.',
        vocab: [
          { hanzi: '餐厅', pinyin: 'cāntīng', hv: 'xan thính', meaning: 'nhà hàng, quán ăn', eg: '这家越南餐厅环境很优雅。' },
          { hanzi: '餐厅环境', pinyin: 'cāntīng huánjìng', hv: 'nhà hàng hoàn cảnh', meaning: 'không gian nhà hàng', eg: '餐厅环境优美，放着轻柔的音乐。' },
          { hanzi: '服务员', pinyin: 'fúwùyuán', hv: 'phục vụ viên', meaning: 'nhân viên phục vụ', eg: '服务员热情地为客人端茶倒水。' },
          { hanzi: '顾客', pinyin: 'gùkè', hv: 'cố khách', meaning: 'khách hàng', eg: '店里坐满了来品尝美食的顾客。' },
          { hanzi: '菜单', pinyin: 'càidān', hv: 'thái đơn', meaning: 'thực đơn / menu', eg: '请拿菜单给我看一下。' },
          { hanzi: '点菜', pinyin: 'diǎn cài', hv: 'điểm thái', meaning: 'gọi món', eg: '我们先点菜，你想吃什么？' },
          { hanzi: '营业', pinyin: 'yíngyè', hv: 'doanh nghiệp', meaning: 'kinh doanh, mở cửa phục vụ', eg: '这家餐厅营业到晚上十点。' },
          { hanzi: '布置', pinyin: 'bùzhì', hv: 'bố trí', meaning: 'bài trí, trang trí', eg: '墙上布置得很具有越南文化特色。' },
          { hanzi: '热情', pinyin: 'rèqíng', hv: 'nhiệt tình', meaning: 'nhiệt tình, hiếu khách', eg: '服务员的态度既周到又热情。' },
          { hanzi: '清淡', pinyin: 'qīngdàn', hv: 'thanh đạm', meaning: 'thanh nhạt, ít dầu mỡ', eg: '南方菜口味偏清淡。' },
          { hanzi: '品尝', pinyin: 'pǐncháng', hv: 'phẩm thường', meaning: 'thưởng thức, nếm thử', eg: '大家一起来品尝地道的美食。' },
          { hanzi: '特色菜', pinyin: 'tèsè cài', hv: 'đặc sắc thái', meaning: 'món ăn đặc trưng/đặc sản của quán', eg: '炸春卷和烤肉米线是这里的特色菜。' }
        ],
        grammar: [
          {
            title: 'Trợ từ động thái 着 (Zhe) biểu thị trạng thái tồn tại và cách thức',
            structure: '1. Nơi chốn + Động từ + 着 + Tân ngữ / 2. Động từ 1 + 着 + Động từ 2',
            content: 'Trợ từ 着 đặt ngay sau động từ để biểu thị sự duy trì của trạng thái:',
            rules: [
              '<strong>Mô tả trạng thái tồn tại trong không gian:</strong> [Nơi chốn + Động từ + 着 + Danh từ tồn tại] (VD: 门开着 — Cửa đang mở; 墙上挂着一幅中国画 — Trên tường đang treo một bức tranh Trung Quốc; 桌子上放着几本书 — Trên bàn đang để mấy cuốn sách).',
              '<strong>Mô tả phương thức/tư thế đi kèm hành động chính:</strong> [Động từ 1 + 着 + Động từ 2] (VD: 他笑着跟我说话 — Anh ấy cười nói chuyện với tôi; 老师站着讲课 — Thầy giáo đứng giảng bài).',
              '<strong>Kết hợp 一边……一边……:</strong> Diễn đạt hai hành động diễn ra song song (VD: 一边品尝美食，一边听音乐 — Vừa thưởng thức đồ ngon vừa nghe nhạc).',
              '<strong>Phân biệt 着 và 正在:</strong> "着" nhấn mạnh TRẠNG THÁI tồn tại/tư thế duy trì; "正在" nhấn mạnh TIẾN TRÌNH hành động đang diễn ra.'
            ],
            mindmapRef: 'map-aspect-zhe',
            examples: [
              { zh: '餐厅的墙上挂着红灯笼，桌上摆着鲜花。', py: 'Cāntīng de qiáng shang guà zhe hóng dēnglong, zhuō shang bǎi zhe xiānhuā.', vi: 'Trên tường nhà hàng treo đèn lồng đỏ, trên bàn bày hoa tươi.' },
              { zh: '服务员微笑着走过来为客人点菜。', py: 'Fúwùyuán wēixiào zhe zǒu guòlái wèi kèrén diǎn cài.', vi: 'Người phục vụ mỉm cười bước lại gần gọi món cho khách.' },
              { zh: '外面下着雨，店里坐着许多避雨的顾客。', py: 'Wàimiàn xià zhe yǔ, diàn lǐ zuò zhe xǔduō bìyǔ de gùkè.', vi: 'Bên ngoài trời đang mưa, trong quán có nhiều khách đang ngồi tránh mưa.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Lưu Đức', role: 'Khách hàng', zh: '服务员，请问现在还营业吗？', py: 'Fúwùyuán, qǐngwèn xiànzài hái yíngyè ma?', vi: 'Phục vụ ơi, xin hỏi quán bây giờ còn mở cửa không ạ?' },
          { speaker: 'Phục vụ', role: 'Nhân viên nhà hàng', zh: '我们营业到晚上十点呢，请进！里边靠窗的桌子空着。', py: 'Wǒmen yíngyè dào wǎnshang shí diǎn ne, qǐng jìn! Lǐbian kào chuāng de zhuōzi kòng zhe.', vi: 'Quán em mở cửa đến 10 giờ tối ạ, mời vào! Bàn bên trong cạnh cửa sổ đang trống đấy ạ.' },
          { speaker: 'Lưu Đức', role: 'Khách hàng', zh: '环境真不错！墙上挂着越南风景画，让人觉得很温馨。', py: 'Huánjìng zhēn búcuò! Qiáng shang guà zhe Yuènán fēngjǐng huà, ràng rén juéde hěn wēnxīn.', vi: 'Không gian đẹp quá! Trên tường treo tranh phong cảnh Việt Nam, làm người ta thấy rất ấm cúng.' },
          { speaker: 'Phục vụ', role: 'Nhân viên nhà hàng', zh: '这是菜单，我们店的特色菜是越南春卷，您想尝尝吗？', py: 'Zhè shì càidān, wǒmen diàn de tèsè cài shì Yuènán chūnjuǎn, nín xiǎng chángchang ma?', vi: 'Đây là thực đơn ạ, món đặc trưng của quán em là nem cuốn Việt Nam, anh có muốn nếm thử không ạ?' }
        ],
        practice: [
          {
            q: 'Câu nào mô tả đúng trạng thái đồ vật tồn tại trên tường?',
            opts: ['墙上挂着一张大地图。', '墙上正在挂一张大地图。', '一张大地图墙上挂。', '挂着一张大地图在墙。'],
            ans: 0,
            explain: 'Mẫu câu tồn hiện: [Nơi chốn (墙上) + Động từ (挂) + 着 + Tân ngữ (一张大地图)].'
          },
          {
            q: 'Điền từ thích hợp: "老师____讲课，同学们认真听讲。"',
            opts: ['站着', '站了', '站过', '站去'],
            ans: 0,
            explain: '"站着" (đang đứng) mô tả tư thế/trạng thái duy trì khi thực hiện hành động chính "讲课".'
          }
        ]
      },
      {
        id: 'lesson-8',
        unit: 'Bài 8',
        title: '复习二 (Ôn tập 2)',
        pinyin: 'Fùxí Èr',
        meaning: 'Ôn tập tổng kết Chủ điểm 2: Di sản văn hóa & Ẩm thực',
        goals: 'Hệ thống hóa toàn diện kiến thức Chủ điểm 2: Phân biệt 或者 vs 还是; Cụm động từ làm định ngữ (V + 的 + N); Phó từ 好像 và lượng từ 段; Trợ từ động thái 着 và liên từ 一边……一边……; Nhận biết cấu tạo chữ tượng hình & hội ý 人, 从, 众.',
        summary: [
          '<strong>Hoặc / Hay là:</strong> 或者 dùng trong câu trần thuật khẳng định nêu phương án khả dĩ; 还是 bắt buộc dùng trong câu hỏi lựa chọn nghi vấn (?).',
          '<strong>Cụm động từ làm định ngữ:</strong> [Cụm động từ + 的 + Danh từ trung tâm], bổ nghĩa làm rõ thuộc tính của danh từ (VD: 今天吃的菜, 会做饭的人, 挂着的画).',
          '<strong>好像 & Lượng từ 段:</strong> 好像 biểu thị phỏng đoán nhẹ nhàng, cảm nhận chủ quan; 段 là lượng từ đặc trưng chỉ khoảng thời gian (一段时间), quãng đường (一段路), đoạn âm nhạc/video (一段音乐/视频).',
          '<strong>Trợ từ động thái 着:</strong> Biểu thị sự tiếp diễn của trạng thái tồn tại tĩnh (墙上挂着画, 桌上放着书) hoặc tư thế/phương thức đi kèm hành động chính (笑着说, 站着讲课).'
        ],
        tasks: [
          'Giới thiệu một món đặc sản truyền thống của quê hương em (nguyên liệu, hương vị thanh đạm hay cay nồng, cách ăn).',
          'Thiết kế áp-phích quảng cáo cho một nhà hàng hoặc bộ phim em yêu thích, sử dụng cấu trúc "着" và cụm động từ làm định ngữ.'
        ]
      }
    ]
  }
};
