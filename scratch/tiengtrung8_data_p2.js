// Tiếng Trung Quốc 8 - Data Part 2: Chủ điểm 3, Chủ điểm 4, Sổ tay Chữ Hán & Bảng Ngữ Pháp
module.exports = {
  theme3: {
    id: 'theme-3',
    code: 'Chủ điểm 3',
    chinese: '我们的世界',
    pinyin: 'Wǒmen de shìjiè',
    title: 'Thế giới của chúng ta',
    desc: 'Bốn mùa biến chuyển, muông thú sở thú, câu bị động 被/叫/让 và hình tượng thần tượng truyền cảm hứng.',
    color: 'sky',
    icon: 'fa-globe-asia',
    lessons: [
      {
        id: 'lesson-9',
        unit: 'Bài 9',
        title: '一年四季',
        pinyin: 'Yì Nián Sìjì',
        meaning: 'Bốn mùa trong năm',
        goals: 'Miêu tả thời tiết, cảnh sắc và mùa yêu thích; so sánh mùa ở Hà Nội và Bắc Kinh; dùng câu bị động với 被 diễn tả biến đổi chịu tác động.',
        vocab: [
          { hanzi: '春天', pinyin: 'chūntiān', hv: 'xuân thiên', meaning: 'mùa xuân', eg: '春天百花盛开，万物复苏。' },
          { hanzi: '夏天', pinyin: 'xiàtiān', hv: 'hạ thiên', meaning: 'mùa hè', eg: '夏天天气炎热，我们喜欢去游泳。' },
          { hanzi: '秋天', pinyin: 'qiūtiān', hv: 'thu thiên', meaning: 'mùa thu', eg: '秋天是北京最舒服的季节。' },
          { hanzi: '冬天', pinyin: 'dōngtiān', hv: 'đông thiên', meaning: 'mùa đông', eg: '冬天下雪的时候，景色非常美。' },
          { hanzi: '天气', pinyin: 'tiānqì', hv: 'thiên khí', meaning: 'thời tiết', eg: '今天天气晴朗，凉爽宜人。' },
          { hanzi: '太阳', pinyin: 'tàiyáng', hv: 'thái dương', meaning: 'mặt trời', eg: '红红的太阳从东方升起来了。' },
          { hanzi: '风', pinyin: 'fēng', hv: 'phong', meaning: 'gió', eg: '微风吹在脸上很舒服。' },
          { hanzi: '下雪', pinyin: 'xià xuě', hv: 'hạ tuyết', meaning: 'tuyết rơi', eg: '北方冬天常常下大雪。' },
          { hanzi: '暖和', pinyin: 'nuǎnhuo', hv: 'noãn hòa', meaning: 'ấm áp', eg: '春天的阳光照在身上很暖和。' },
          { hanzi: '白色', pinyin: 'báisè', hv: 'bạch sắc', meaning: 'màu trắng', eg: '雪花把大地变成了白色的世界。' },
          { hanzi: '大地', pinyin: 'dàdì', hv: 'đại địa', meaning: 'mặt đất, đất trời', eg: '白雪覆盖了整个大地。' },
          { hanzi: '覆盖', pinyin: 'fùgài', hv: 'phúc cái', meaning: 'bao phủ, che phủ', eg: '地面被厚厚的积雪覆盖了。' },
          { hanzi: '外地', pinyin: 'wàidì', hv: 'ngoại địa', meaning: 'nơi khác, ngoại tỉnh', eg: '很多外地游客来到河内旅游。' }
        ],
        grammar: [
          {
            title: 'Câu bị động với 被 (Bèi) — 被字句',
            structure: 'Đối tượng chịu tác động + 被 (+ Tác nhân gây ra) + Động từ + Thành phần khác',
            content: 'Dùng khi muốn đưa đối tượng chịu ảnh hưởng của hành động lên làm chủ ngữ nổi bật:',
            rules: [
              '<strong>Công thức khẳng định:</strong> Chủ ngữ (vật/người chịu tác động) + 被 + Tác nhân (có thể lược bỏ) + Động từ + Bổ ngữ/kết quả (VD: 我的自行车被他骑走了 — Xe đạp của tôi bị anh ấy đi mất rồi; 树叶被风吹落了 — Lá cây bị gió thổi rụng).',
              '<strong>Lược bỏ tác nhân:</strong> Khác với 叫/让, sau "被" có thể không cần nêu tác nhân nếu không rõ hoặc không muốn nói (VD: 妹妹的书包被拿走了 — Cặp sách của em gái bị lấy mất rồi).',
              '<strong>Dạng phủ định:</strong> Đặt <strong>没(有)</strong> đứng TRƯỚC "被", tuyệt đối không dùng 不 (VD: 我的车没有被他骑走 — Xe tôi không bị anh ấy đi mất).',
              '<strong>Sắc thái nghĩa:</strong> Trong khẩu ngữ thường mang nghĩa bất lợi, nhưng trong văn học hoặc khoa học câu 被 có thể mang nghĩa trung tính/tích cực (VD: 大地被白雪覆盖了 — Đất trời được bao phủ bởi tuyết trắng).'
            ],
            mindmapRef: 'map-passive-bei',
            examples: [
              { zh: '秋天的黄叶被秋风吹落了一地。', py: 'Qiūtiān de huángyè bèi qiūfēng chuīluò le yí dì.', vi: 'Những chiếc lá vàng mùa thu bị gió thu thổi rụng đầy đất.' },
              { zh: '小偷被勇敢的警察抓住了。', py: 'Xiǎotōu bèi yǒnggǎn de jǐngchá zhuāzhù le.', vi: 'Tên trộm đã bị chú cảnh sát dũng cảm bắt giữ.' },
              { zh: '放心吧，桌上的文件没有被人动过。', py: 'Fàngxīn ba, zhuō shang de wénjiàn méiyǒu bèi rén dòng guò.', vi: 'Yên tâm đi, tài liệu trên bàn chưa bị ai động vào đâu.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Minh', role: 'Học sinh Hà Nội', zh: '王鹏，北京一年四季的天气怎么样？', py: 'Wáng Péng, Běijīng yì nián sìjì de tiānqì zěnmeyàng?', vi: 'Vương Bằng, thời tiết bốn mùa ở Bắc Kinh thế nào?' },
          { speaker: 'Vương Bằng', role: 'Học sinh Bắc Kinh', zh: '北京春短秋爽，夏天很热，冬天很冷，有时候大地会被厚厚的白雪覆盖。', py: 'Běijīng chūn duǎn qiū shuǎng, xiàtiān hěn rè, dōngtiān hěn lěng, yǒushíhou dàdì huì bèi hòuhòu de bái xuě fùgài.', vi: 'Bắc Kinh mùa xuân ngắn mùa thu mát mẻ, mùa hè rất nóng, mùa đông rất lạnh, có khi mặt đất sẽ được bao phủ bởi tuyết trắng dày đặc.' },
          { speaker: 'Minh', role: 'Học sinh Hà Nội', zh: '河内的冬天不会下雪，但有时吹冷风，温度也会降得很低。', py: 'Hénèi de dōngtiān bú huì xià xuě, dàn yǒushí chuī lěngfēng, wēndù yě huì jiàng de hěn dī.', vi: 'Mùa đông Hà Nội không có tuyết rơi, nhưng thỉnh thoảng gió mùa lạnh về, nhiệt độ cũng xuống rất thấp.' },
          { speaker: 'Vương Bằng', role: 'Học sinh Bắc Kinh', zh: '河内的秋天最舒服吧！金黄色的树叶在阳光下真漂亮。', py: 'Hénèi de qiūtiān zuì shūfu ba! Jīnhuángsè de shùyè zài yángguāng xià zhēn piàoliang.', vi: 'Mùa thu Hà Nội là dễ chịu nhất nhỉ! Lá vàng óng dưới ánh nắng thật là đẹp.' }
        ],
        practice: [
          {
            q: 'Chọn câu bị động phủ định ĐÚNG theo ngữ pháp tiếng Trung:',
            opts: ['我的书包没有被人拿走。', '我的书包不被人拿走。', '我的书包被人不拿走。', '我的书包被人没有拿走。'],
            ans: 0,
            explain: 'Phủ định câu chữ 被 dùng "没(有)" và đặt ngay TRƯỚC chữ 被: [Chủ ngữ + 没有 + 被 + Tác nhân + Động từ].'
          },
          {
            q: 'Sau từ nào trong câu bị động bắt buộc PHẢI CÓ tác nhân gây ra hành động?',
            opts: ['叫 và 让', '被', '把', '给'],
            ans: 0,
            explain: 'Trong câu bị động khẩu ngữ với 叫 và 让, bắt buộc phải có tác nhân đứng sau; còn 被 có thể lược bỏ tác nhân.'
          }
        ]
      },
      {
        id: 'lesson-10',
        unit: 'Bài 10',
        title: '游客的苹果让猴子抢走了',
        pinyin: 'Yóukè de Píngguǒ Ràng Hóuzi Qiǎngzǒu Le',
        meaning: 'Táo của du khách bị khỉ cướp mất',
        goals: 'Kể việc ở sở thú, nói con vật ăn/lấy/đuổi/bắt được gì; giới thiệu động vật và dùng câu bị động với 叫 và 让.',
        vocab: [
          { hanzi: '动物园', pinyin: 'dòngwùyuán', hv: 'động vật viên', meaning: 'vườn bách thú, sở thú', eg: '周末很多家长带孩子去动物园玩。' },
          { hanzi: '熊猫', pinyin: 'xióngmāo', hv: 'hùng miêu', meaning: 'gấu trúc (quốc bảo Trung Hoa)', eg: '大熊猫憨态可掬，十分惹人喜爱。' },
          { hanzi: '竹子', pinyin: 'zhúzi', hv: 'trúc tử', meaning: 'cây tre, cây trúc', eg: '熊猫最喜欢吃鲜嫩的竹子。' },
          { hanzi: '狮子', pinyin: 'shīzi', hv: 'sư tử', meaning: 'con sư tử', eg: '狮子被称为百兽之王。' },
          { hanzi: '老虎', pinyin: 'lǎohǔ', hv: 'lão hổ', meaning: 'con hổ', eg: '东北虎是国家一级保护动物。' },
          { hanzi: '长颈鹿', pinyin: 'chángjǐnglù', hv: 'trường cảnh lộc', meaning: 'hươu cao cổ', eg: '长颈鹿伸长脖子吃树顶上的嫩叶。' },
          { hanzi: '斑马', pinyin: 'bānmǎ', hv: 'ban mã', meaning: 'ngựa vằn', eg: '斑马身上有一道道黑白相间的条纹。' },
          { hanzi: '骆驼', pinyin: 'luòtuo', hv: 'lạc đà', meaning: 'con lạc đà', eg: '骆驼被称为“沙漠之舟”。' },
          { hanzi: '海洋馆', pinyin: 'hǎiyángguǎn', hv: 'hải dương quán', meaning: 'thủy cung', eg: '我们在海洋馆观看了精彩的海豚表演。' },
          { hanzi: '海豚', pinyin: 'hǎitún', hv: 'hải đồn', meaning: 'cá heo', eg: '海豚非常聪明，是人类的好朋友。' },
          { hanzi: '游客', pinyin: 'yóukè', hv: 'du khách', meaning: 'du khách, khách tham quan', eg: '动物园里到处都是拍照的游客。' },
          { hanzi: '亲眼看见', pinyin: 'qīnyǎn kànjiàn', hv: 'thân nhãn khán kiến', meaning: 'tận mắt chứng kiến/thấy', eg: '我亲眼看见小猴子剥香蕉吃。' },
          { hanzi: '抢走', pinyin: 'qiǎngzǒu', hv: 'cướp tẩu', meaning: 'cướp mất, giật lấy đi', eg: '顽皮的猴子把苹果抢走了。' }
        ],
        grammar: [
          {
            title: 'Câu bị động khẩu ngữ với 叫 (Jiào) và 让 (Ràng)',
            structure: 'Đối tượng chịu tác động + 叫 / 让 + Tác nhân (bắt buộc) + Động từ + Kết quả',
            content: 'Trong khẩu ngữ hằng ngày của người Trung Quốc, 叫 và 让 được dùng rất phổ biến thay cho 被:',
            rules: [
              '<strong>Cấu trúc:</strong> [Đối tượng chịu tác động + 叫 / 让 + Tác nhân cụ thể + Động từ + Bổ ngữ kết quả/xu hướng].',
              '<strong>Điểm khác biệt quan trọng với 被:</strong> Sau 叫 và 让 <strong>BẮT BUỘC PHẢI CÓ TÁC NHÂN</strong>, tuyệt đối không được để trống (VD: 苹果让猴子抢走了 — ĐÚNG; 苹果让抢走了 — SAI). Nếu không rõ tác nhân thì phải dùng 被 (苹果被抢走了) hoặc thêm đại từ chung chung "叫人 / 让人".',
              '<strong>Phủ định:</strong> Dùng <strong>没(有) + 叫/让</strong> (VD: 苹果没有让猴子抢走 — Táo không bị khỉ cướp mất).',
              '<strong>Chú ý đa nghĩa của 让:</strong> Chữ 让 còn có nghĩa sai khiến "bảo, để, cho phép" (VD: 妈妈让我写作业). Cần căn cứ ngữ cảnh câu xem có kết quả bị động hay không.'
            ],
            mindmapRef: 'map-passive-jiao-rang',
            examples: [
              { zh: '游客的苹果让调皮的猴子抢走了！', py: 'Yóukè de píngguǒ ràng tiáopí de hóuzi qiǎngzǒu le!', vi: 'Táo của du khách đã bị chú khỉ tinh nghịch giật cướp mất rồi!' },
              { zh: '新鲜的嫩竹子叫大熊猫吃光了。', py: 'Xīnxiān de nèn zhúzi jiào dàxióngmāo chīguāng le.', vi: 'Trúc non tươi rói đã bị chú gấu trúc ăn sạch bách.' },
              { zh: '小羊没有让大灰狼抓走，真是太幸运了。', py: 'Xiǎoyáng méiyǒu ràng dàhuīláng zhuāzǒu, zhēn shì tài xìngyùn le.', vi: 'Chú cừu con không bị chó sói bắt đi, thật là quá may mắn.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Lan', role: 'Du khách', zh: '刚才猴山那边怎么那么热闹？', py: 'Gāngcái hóushān nàbiān zěnme nàme rènao?', vi: 'Vừa nãy bên đảo khỉ sao mà ồn ào náo nhiệt thế?' },
          { speaker: 'Bình', role: 'Du khách', zh: '哈哈，一位游客拿苹果拍照，结果让一只大猴子抢走了！', py: 'Hāhā, yí wèi yóukè ná píngguǒ pāizhào, jiéguǒ ràng yì zhī dà hóuzi qiǎngzǒu le!', vi: 'Haha, một du khách cầm quả táo chụp ảnh, kết quả bị một con khỉ to nhảy ra cướp mất!' },
          { speaker: 'Lan', role: 'Du khách', zh: '哎呀，猴子动作太快了！那边的竹子也被熊猫吃光了吧？', py: 'Āiyā, hóuzi dòngzuò tài kuài le! Nàbiān de zhúzi yě bèi xióngmāo chīguāng le ba?', vi: 'Úi chà, khỉ động tác nhanh quá! Đống trúc bên kia cũng bị gấu trúc ăn sạch rồi à?' },
          { speaker: 'Bình', role: 'Du khách', zh: '对，大熊猫胃口真好，一捆竹子一会儿就叫它啃完了。', py: 'Duì, dàxióngmāo wèikǒu zhēn hǎo, yì kǔn zhúzi yíhuìr jiù jiào tā kěn wán le.', vi: 'Đúng vậy, gấu trúc ăn khỏe thật, một bó tre một loáng đã bị nó gặm xong rồi.' }
        ],
        practice: [
          {
            q: 'Câu nào dưới đây mắc lỗi ngữ pháp?',
            opts: ['钱包让偷走了。', '钱包让小偷偷走了。', '钱包叫小偷偷走了。', '钱包被偷走了。'],
            ans: 0,
            explain: 'Sau "让" bắt buộc phải có tác nhân cụ thể ("小偷"). Để trống tác nhân như câu A là sai ngữ pháp, trường hợp đó phải dùng "被偷走了".'
          },
          {
            q: 'Điền từ bị động khẩu ngữ thích hợp: "桌上的蛋糕____小猫吃掉了。"',
            opts: ['叫', '给', '打', '往'],
            ans: 0,
            explain: '"叫" đóng vai trò từ bị động khẩu ngữ tương đương 被 và 让, sau có tác nhân "小猫".'
          }
        ]
      },
      {
        id: 'lesson-11',
        unit: 'Bài 11',
        title: '我心中的偶像',
        pinyin: 'Wǒ Xīnzhōng de Ǒuxiàng',
        meaning: 'Thần tượng trong lòng tôi',
        goals: 'Giới thiệu thần tượng, nói về tài năng, ngoại hình, việc làm ý nghĩa; phân biệt trợ từ 着 và phó từ 正在; dùng đại từ 自己.',
        vocab: [
          { hanzi: '偶像', pinyin: 'ǒuxiàng', hv: 'ngẫu tượng', meaning: 'thần tượng', eg: '袁隆平爷爷是我心中最崇敬的偶像。' },
          { hanzi: '歌手', pinyin: 'gēshǒu', hv: 'ca thủ', meaning: 'ca sĩ', eg: '他不仅是一位出色的歌手，还热心公益。' },
          { hanzi: '演员', pinyin: 'yǎnyuán', hv: 'diễn viên', meaning: 'diễn viên', eg: '优秀演员的表演真实动人。' },
          { hanzi: '粉丝', pinyin: 'fěnsī', hv: 'phấn ti', meaning: 'người hâm mộ, fan', eg: '他在全国拥有成千上万的粉丝。' },
          { hanzi: '粉丝会', pinyin: 'fěnsīhuì', hv: 'phấn ti hội', meaning: 'buổi họp mặt người hâm mộ', eg: '周末粉丝们举办了温馨的粉丝会。' },
          { hanzi: '专业', pinyin: 'zhuānyè', hv: 'chuyên nghiệp', meaning: 'chuyên môn, chuyên nghiệp', eg: '他的发音和舞台表现十分专业。' },
          { hanzi: '崇拜', pinyin: 'chóngbài', hv: 'sùng bái', meaning: 'ngưỡng mộ, sùng bái', eg: '我很崇拜那些为国家作出贡献的科学家。' },
          { hanzi: '收集照片', pinyin: 'shōují zhàopiàn', hv: 'thu tập chiếu phiến', meaning: 'sưu tầm ảnh', eg: '我喜欢收集偶像参加公益活动的照片。' },
          { hanzi: '贴', pinyin: 'tiē', hv: 'thiếp', meaning: 'dán', eg: '墙上贴着一张励志海报。' },
          { hanzi: '捐赠', pinyin: 'juānzèng', hv: 'quyên tặng', meaning: 'quyên góp, ủng hộ', eg: '他们向灾区捐赠了大量图书和衣物。' },
          { hanzi: '自己', pinyin: 'zìjǐ', hv: 'tự kỷ', meaning: 'bản thân, tự mình', eg: '自己的事情要自己做。' },
          { hanzi: '长得……', pinyin: 'zhǎng de…', hv: 'trưởng đắc...', meaning: 'trông có ngoại hình...', eg: '她长得既端庄又美丽。' },
          { hanzi: '演得……', pinyin: 'yǎn de…', hv: 'diễn đắc...', meaning: 'diễn xuất như thế nào...', eg: '主角演得非常感人。' }
        ],
        grammar: [
          {
            title: 'Phân biệt Trợ từ động thái 着 (Zhe) và Phó từ 正 / 正在 / 在 (Zhèngzài)',
            structure: 'Động từ + 着 (Trạng thái) vs 正/正在/在 + Động từ (Hành động tiến trình)',
            content: 'Rất nhiều học sinh nhầm lẫn giữa hai cấu trúc này, cần phân biệt rõ bản chất ngữ nghĩa:',
            rules: [
              '<strong>Động từ + 着:</strong> Nhấn mạnh <strong>TRẠNG THÁI</strong> tồn tại tĩnh hoặc tư thế đang duy trì (VD: 墙上贴着一张照片 — Trên tường đang dán một bức ảnh; 门开着呢 — Cửa đang mở; 他站着看书 — Anh ấy đứng đọc sách).',
              '<strong>正 / 正在 / 在 + Động từ (+ 呢):</strong> Nhấn mạnh <strong>TIẾN TRÌNH HÀNH ĐỘNG</strong> đang diễn ra sống động tại thời điểm nói (VD: 我正在看电影呢 — Tôi đang xem phim; 老师在讲课 — Thầy giáo đang giảng bài).',
              '<strong>Đại từ 自己 (Zìjǐ):</strong> Biểu thị "bản thân, tự mình". Có thể đứng sau chủ ngữ để nhấn mạnh tự thân làm việc (VD: 这件事是我自己做的 — Việc này do chính tôi làm), hoặc làm định ngữ: [自己的 + Danh từ] (VD: 用自己的努力取得好成绩 — Dùng nỗ lực của chính mình đạt thành tích tốt).'
            ],
            mindmapRef: 'map-zhe-vs-zhengzai',
            examples: [
              { zh: '房间的墙上贴着几张我偶像的照片。', py: 'Fángjiān de qiáng shang tiē zhe jǐ zhāng wǒ ǒuxiàng de zhàopiàn.', vi: 'Trên tường phòng có dán mấy tấm ảnh thần tượng của tôi.' },
              { zh: '别吵，哥哥正在书房里认真复习功课呢。', py: 'Bié chǎo, gēge zhèngzài shūfáng lǐ rènzhēn fùxí gōngkè ne.', vi: 'Đừng ồn, anh trai đang chăm chỉ ôn bài trong phòng sách đấy.' },
              { zh: '我们要学会用自己的双手创造幸福的生活。', py: 'Wǒmen yào xuéhuì yòng zìjǐ de shuāngshǒu chuàngzào xìngfú de shēnghuó.', vi: 'Chúng ta phải học cách dùng đôi bàn tay của chính mình tạo nên cuộc sống hạnh phúc.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Linh', role: 'Học sinh', zh: '小华，你书桌前贴着谁的照片呀？', py: 'Xiǎo Huá, nǐ shūzhuō qián tiē zhe shéi de zhàopiàn ya?', vi: 'Tiểu Hoa, trước bàn học của bạn dán ảnh của ai thế?' },
          { speaker: 'Tiểu Hoa', role: 'Học sinh', zh: '这是科学家屠呦呦奶奶的照片，她是我心中的偶像！', py: 'Zhè shì kēxuéjiā Tú Yōuyōu nǎinai de zhàopiàn, tā shì wǒ xīnzhōng de ǒuxiàng!', vi: 'Đây là ảnh của bà Đồ U U, nhà khoa học và là thần tượng trong lòng mình!' },
          { speaker: 'Linh', role: 'Học sinh', zh: '你真棒！别人都在追娱乐明星，你却崇拜科学家。', py: 'Nǐ zhēn bàng! Biérén dōu zài zhuī yúlè míngxīng, nǐ què chóngbài kēxuéjiā.', vi: 'Bạn giỏi thật! Người khác đều đang theo đuổi ngôi sao giải trí, bạn lại ngưỡng mộ nhà khoa học.' },
          { speaker: 'Tiểu Hoa', role: 'Học sinh', zh: '她用自己的智慧发明了青蒿素，拯救了无数人的生命，值得我们永远学习。', py: 'Tā yòng zìjǐ de zhìhuì fāmíng le qīnghāosù, zhěngjiù le wúshù rén de shēngmìng, zhídé wǒmen yǒngyuǎn xuéxí.', vi: 'Bà ấy đã dùng trí tuệ của chính mình phát minh ra chất artemisinin, cứu sống vô số sinh mạng, rất xứng đáng để chúng mình noi gương mãi mãi.' }
        ],
        practice: [
          {
            q: 'Câu nào diễn đạt hành động ĐANG DIỄN RA tại thời điểm nói?',
            opts: ['他正在操场上打羽毛球呢。', '门开着。', '墙上挂着一张地图。', '桌上放着词典。'],
            ans: 0,
            explain: '"正在……呢" diễn tả tiến trình hành động đang diễn ra sôi nổi (đang đánh cầu lông trên sân).'
          },
          {
            q: 'Điền từ thích hợp: "这篇课文是我____写的，没请任何人帮忙。"',
            opts: ['自己', '别人', '他们', '大家'],
            ans: 0,
            explain: '"自己" mang nghĩa tự mình, tự thân làm lấy.'
          }
        ]
      },
      {
        id: 'lesson-12',
        unit: 'Bài 12',
        title: '复习三 (Ôn tập 3)',
        pinyin: 'Fùxí Sān',
        meaning: 'Ôn tập tổng kết Chủ điểm 3: Thế giới tự nhiên & Thần tượng',
        goals: 'Hệ thống hóa toàn diện kiến thức Chủ điểm 3: Câu bị động với 被, 叫, 让; Quy tắc bắt buộc có tác nhân sau 叫/让; Dạng phủ định 没有被 / 没有叫/让; Phân biệt trợ từ 着 (trạng thái tĩnh) vs 正在 (tiến trình động); Đại từ 自己; Bộ thủ 力 trong 动, 加, 努.',
        summary: [
          '<strong>Câu bị động chữ 被:</strong> Dùng cho cả văn viết trang trọng và khẩu ngữ. Tác nhân có thể lược bỏ (书包被拿走了). Dạng phủ định đặt 没有 trước 被 (没有被拿走).',
          '<strong>Câu bị động khẩu ngữ 叫 / 让:</strong> Mang đậm phong cách khẩu ngữ đời thường. BẮT BUỘC phải có tác nhân đứng sau (苹果让猴子抢走了, 竹子叫熊猫吃光了). Phủ định: 没有叫/让.',
          '<strong>着 vs 正在:</strong> Động từ + 着 diễn tả trạng thái tồn tại tĩnh kéo dài (贴着照片, 挂着画, 坐着); 正在/在 + Động từ diễn tả tiến trình hành động đang diễn ra sôi nổi tại thời điểm nói (正在看电影, 在做作业).',
          '<strong>Đại từ 自己 & Bộ thủ:</strong> 自己 nhấn mạnh tự thân làm việc (自己做) hoặc sở hữu (自己的努力). Bộ [力] (sức mạnh) trong các chữ 动 (vận động), 加 (thêm sức), 努 (nỗ lực).'
        ],
        tasks: [
          'Thảo luận so sánh đặc trưng 4 mùa ở Việt Nam và Trung Quốc, sử dụng ít nhất 2 câu bị động (大地被积雪覆盖, 树叶被风吹落).',
          'Viết bài giới thiệu ngắn về một người truyền cảm hứng/thần tượng mà em noi theo, nói rõ việc làm tốt và những nỗ lực tự thân của họ.'
        ]
      }
    ]
  },
  theme4: {
    id: 'theme-4',
    code: 'Chủ điểm 4',
    chinese: '我们的未来',
    pinyin: 'Wǒmen de wèilái',
    title: 'Tương lai của chúng ta',
    desc: 'Đào tạo kỹ năng mềm, các hoạt động ngoại khóa, hành vi sắp xảy ra và các câu hỏi tu từ phản vấn.',
    color: 'indigo',
    icon: 'fa-rocket',
    lessons: [
      {
        id: 'lesson-13',
        unit: 'Bài 13',
        title: '软技能的培训',
        pinyin: 'Ruǎnjìnéng de Péixùn',
        meaning: 'Buổi đào tạo kỹ năng mềm',
        goals: 'Trao đổi về khóa đào tạo kỹ năng mềm, thời gian/địa điểm tham gia và ích lợi; dùng cấu trúc 快/快要……了 và 要/就要……了.',
        vocab: [
          { hanzi: '软技能', pinyin: 'ruǎn jìnéng', hv: 'nhuyễn kỹ năng', meaning: 'kỹ năng mềm', eg: '现代社会非常重视青少年的软技能。' },
          { hanzi: '培训班', pinyin: 'péixùnbān', hv: 'bồi huấn ban', meaning: 'lớp đào tạo, khóa tập huấn', eg: '学校周末开办了人际沟通培训班。' },
          { hanzi: '沟通能力', pinyin: 'gōutōng nénglì', hv: 'câu thông năng lực', meaning: 'năng lực giao tiếp', eg: '良好的沟通能力有助于团队合作。' },
          { hanzi: '团队合作', pinyin: 'tuánduì hézuò', hv: 'đoàn đội hợp tác', meaning: 'hợp tác nhóm', eg: '大家在团队合作中学会了包容与信任。' },
          { hanzi: '时间管理', pinyin: 'shíjiān guǎnlǐ', hv: 'thời gian quản lý', meaning: 'quản lý thời gian', eg: '做好时间管理能大大提高学习效率。' },
          { hanzi: '解决问题', pinyin: 'jiějué wèntí', hv: 'giải quyết vấn đề', meaning: 'giải quyết vấn đề', eg: '遇到困难时要冷静地思考如何解决问题。' },
          { hanzi: '技巧', pinyin: 'jìqiǎo', hv: 'kỹ xảo', meaning: 'kỹ xảo, mẹo, kỹ năng', eg: '老师向我们分享了演讲技巧。' },
          { hanzi: '经验', pinyin: 'jīngyàn', hv: 'kinh nghiệm', meaning: 'kinh nghiệm thực tế', eg: '多实践才能积累丰富的经验。' },
          { hanzi: '获得', pinyin: 'huòdé', hv: 'hoạch đắc', meaning: 'đạt được, nhận được', eg: '通过努力，我们获得了大家的认可。' },
          { hanzi: '通知', pinyin: 'tōngzhī', hv: 'thông tri', meaning: 'thông báo', eg: '班长刚刚发出了明天的培训通知。' },
          { hanzi: '礼堂', pinyin: 'lǐtáng', hv: 'lễ đường', meaning: 'hội trường', eg: '培训将在学校大礼堂举行。' },
          { hanzi: '举办', pinyin: 'jǔbàn', hv: 'cử biện', meaning: 'tổ chức', eg: '本周六将举办青少年辩论赛。' }
        ],
        grammar: [
          {
            title: 'Biểu thị sự việc sắp xảy ra: 快 / 快要……了 và 要 / 就要……了',
            structure: '快 / 快要 / 要 / 就要 + Động từ/Cụm vị ngữ + 了',
            content: 'Dùng để diễn tả một hành động, sự biến đổi sắp sửa xảy ra trong tương lai rất gần:',
            rules: [
              '<strong>快 / 快要……了:</strong> Nhấn mạnh thời điểm hành động diễn ra đã cận kề, không kèm mốc thời gian cụ thể (VD: 天快黑了 — Trời sắp tối rồi; 我们快要放假了 — Chúng ta sắp được nghỉ rồi).',
              '<strong>要 / 就要……了:</strong> Có thể kết hợp với trạng ngữ chỉ thời gian cụ thể (VD: 运动会三月二十六号开始，今天二十四号，运动会就要开始了 — Đại hội thể thao 26/3 bắt đầu, hôm nay 24/3 rồi, đại hội sắp sửa bắt đầu).',
              '<strong>Lưu ý đặc biệt:</strong> Khi trong câu có trạng ngữ thời gian cụ thể (như 明天, 下周, 8点), CHỈ ĐƯỢC DÙNG "就要……了" hoặc "要……了", KHÔNG ĐƯỢC DÙNG "快要……了" (VD: 我们明天就要出发了 — ĐÚNG; 我们明天快要出发了 — SAI).'
            ],
            mindmapRef: 'map-imminent-future',
            examples: [
              { zh: '培训班下周一就要开课了，你报名了吗？', py: 'Péixùnbān xià zhōuyī jiù yào kāikè le, nǐ bàomíng le ma?', vi: 'Khóa tập huấn thứ Hai tuần tới sẽ khai giảng rồi, bạn đã đăng ký chưa?' },
              { zh: '快跑，电影快要开始了！', py: 'Kuài pǎo, diànyǐng kuài yào kāishǐ le!', vi: 'Chạy nhanh lên, phim sắp chiếu rồi!' },
              { zh: '火车就要进站了，请大家拿好行李。', py: 'Huǒchē jiù yào jìnzhàn le, qǐng dàjiā ná hǎo xíngli.', vi: 'Tàu hỏa sắp vào ga rồi, xin mời quý khách cầm chắc hành lý.' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Thầy Trần', role: 'Giáo viên phụ trách', zh: '同学们，青少年软技能培训班下周六就要在礼堂举办了。', py: 'Tóngxuémen, qīngshàonián ruǎnjìnéng péixùnbān xià zhōuliù jiù yào zài lǐtáng jǔbàn le.', vi: 'Các em học sinh, lớp tập huấn kỹ năng mềm cho thanh thiếu niên thứ Bảy tuần tới sẽ được tổ chức ở hội trường.' },
          { speaker: 'Học sinh', role: 'Đại diện lớp', zh: '老师，培训班主要培训哪些内容呢？', py: 'Lǎoshī, péixùnbān zhǔyào péixùn nǎxiē nèiróng ne?', vi: 'Thưa thầy, lớp tập huấn chủ yếu đào tạo những nội dung gì ạ?' },
          { speaker: 'Thầy Trần', role: 'Giáo viên phụ trách', zh: '主要包括沟通能力、团队合作技巧和时间管理。报名快要截止了，想参加的同学抓紧时间。', py: 'Zhǔyào bāokuò gōutōng nénglì, tuánduì hézuò jìqiǎo hé shíjiān guǎnlǐ. Bàomíng kuài yào jiézhǐ le, xiǎng cānjiā de tóngxué zhuājǐn shíjiān.', vi: 'Chủ yếu bao gồm năng lực giao tiếp, kỹ năng làm việc nhóm và quản lý thời gian. Đăng ký sắp kết thúc rồi, em nào muốn tham gia hãy khẩn trương nhé.' },
          { speaker: 'Học sinh', role: 'Đại diện lớp', zh: '太好了！我们几个同学今天下午就去报名。', py: 'Tài hǎo le! Wǒmen jǐ gè tóngxué jīntiān xiàwǔ jiù qù bàomíng.', vi: 'Tuyệt quá ạ! Mấy bạn chúng em chiều nay sẽ đi đăng ký ngay.' }
        ],
        practice: [
          {
            q: 'Câu nào dùng cấu trúc thời gian ĐÚNG quy tắc?',
            opts: ['我们明天就要出发去北京了。', '我们明天快要出发去北京了。', '我们快明天要出发去北京了。', '我们就要出发去北京了明天。'],
            ans: 0,
            explain: 'Khi có trạng ngữ thời gian cụ thể ("明天"), chỉ được dùng "就要……了", không dùng "快要……了".'
          },
          {
            q: 'Điền từ thích hợp: "天阴下来了，____下雨了，快收衣服吧！"',
            opts: ['快要', '已经', '过去', '刚才'],
            ans: 0,
            explain: '"快要……了" diễn tả việc sắp diễn ra trong tích tắc (trời sắp mưa rồi).'
          }
        ]
      },
      {
        id: 'lesson-14',
        unit: 'Bài 14',
        title: '课外活动',
        pinyin: 'Kèwài Huódòng',
        meaning: 'Hoạt động ngoại khóa',
        goals: 'Nói về chuẩn bị đi tham quan/hoạt động ngoại khóa, nhắc mang đồ, nêu lịch trình; phân biệt 快要 vs 就要 vs 将要.',
        vocab: [
          { hanzi: '课外活动', pinyin: 'kèwài huódòng', hv: 'khóa ngoại hoạt động', meaning: 'hoạt động ngoại khóa', eg: '积极参加课外活动能开阔视野。' },
          { hanzi: '数码相机', pinyin: 'shùmǎ xiàngjī', hv: 'số mã tương cơ', meaning: 'máy ảnh kỹ thuật số', eg: '他带了一台数码相机记录美好瞬间。' },
          { hanzi: '安排', pinyin: 'ānpái', hv: 'an bài', meaning: 'sắp xếp, kế hoạch', eg: '老师为这次参访作了周密的安排。' },
          { hanzi: '提醒', pinyin: 'tíxǐng', hv: 'đề tỉnh', meaning: 'nhắc nhở', eg: '妈妈提醒我出门要带好雨伞。' },
          { hanzi: '详细介绍', pinyin: 'xiángxì jièshào', hv: 'tường tế giới thiệu', meaning: 'giới thiệu chi tiết', eg: '导游向大家详细介绍了故宫的历史。' },
          { hanzi: '话剧演出', pinyin: 'huàjù yǎnchū', hv: 'thoại kịch diễn xuất', meaning: 'buổi biểu diễn kịch nói', eg: '学校戏剧社今晚有一场话剧演出。' },
          { hanzi: '演讲比赛', pinyin: 'yǎnjiǎng bǐsài', hv: 'diễn giảng bỉ tái', meaning: 'cuộc thi hùng biện', eg: '他在全校中文演讲比赛中获得了一等奖。' },
          { hanzi: '表达能力', pinyin: 'biǎodá nénglì', hv: 'biểu đạt năng lực', meaning: 'năng lực diễn đạt, biểu cảm', eg: '通过演讲，他的口头表达能力大大提高了。' },
          { hanzi: '跨文化交流', pinyin: 'kuà wénhuà jiāoliú', hv: 'khóa văn hóa giao lưu', meaning: 'giao lưu liên văn hóa', eg: '夏令营是一次难忘的跨文化交流。' },
          { hanzi: '护照', pinyin: 'hùzhào', hv: 'hộ chiếu', meaning: 'hộ chiếu (passport)', eg: '出国前一定要检查护照有效期。' },
          { hanzi: '门票', pinyin: 'ménpiào', hv: 'môn phiếu', meaning: 'vé vào cửa', eg: '我们提前在网上预订了博物馆的门票。' }
        ],
        grammar: [
          {
            title: 'So sánh bộ ba sắp xảy ra: 快要……了 vs 就要……了 vs 将要……了',
            structure: 'Phân định ngữ cảnh và sắc thái biểu đạt',
            content: 'Ba cấu trúc đều biểu thị sự việc sắp xảy ra nhưng mang các sắc thái phong cách khác biệt:',
            rules: [
              '<strong>快要……了:</strong> Thời điểm diễn ra rất gần kề, mang tính cảm nhận khách quan của người nói, KHÔNG ĐI KÈM thời gian cụ thể (VD: 火车快要开走了 — Tàu sắp chạy mất rồi).',
              '<strong>就要……了:</strong> Có thể kết hợp trạng ngữ thời gian cụ thể, biểu thị sự việc theo đúng kế hoạch ấn định (VD: 我们明天下午两点就要出发了 — Hai giờ chiều mai chúng tôi sẽ xuất phát).',
              '<strong>将要……了:</strong> Mang phong cách <strong>VĂN VIẾT / TRANG TRỌNG</strong>, hay dùng trong tin tức, thông báo chính thức, bài phát biểu (VD: 代表团将要访问北京 — Đoàn đại biểu sắp thăm chính thức Bắc Kinh).'
            ],
            mindmapRef: 'map-three-future',
            examples: [
              { zh: '下个月，两国青年将要举行跨文化交流大会。', py: 'Xià gè yuè, liǎng guó qīngnián jiāng yào jǔxíng kuà wénhuà jiāoliú dàhuì.', vi: 'Tháng sau, thanh niên hai nước sẽ tổ chức đại hội giao lưu liên văn hóa (văn phong trang trọng).' },
              { zh: '大家快整理好书包，车子马上就要到了。', py: 'Dàjiā kuài zhěnglǐ hǎo shūbāo, chēzi mǎshàng jiù yào dào le.', vi: 'Mọi người nhanh chóng thu dọn cặp sách, xe sắp đến nơi rồi.' },
              { zh: '演讲比赛快要开始了，大家都准备好了吗？', py: 'Yǎnjiǎng bǐsài kuài yào kāishǐ le, dàjiā dōu zhǔnbèi hǎo le ma?', vi: 'Cuộc thi hùng biện sắp bắt đầu rồi, mọi người đã sẵn sàng chưa?' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Lớp trưởng', role: 'Học sinh', zh: '同学们请注意，明天上午八点我们就要坐大巴去博物馆参加课外活动了！', py: 'Tóngxuémen qǐng zhùyì, míngtiān shàngwǔ bā diǎn wǒmen jiù yào zuò dàbā qù bówùguǎn cānjiā kèwài huódòng le!', vi: 'Các bạn xin chú ý, 8 giờ sáng mai chúng mình sẽ đi xe buýt đến bảo tàng tham gia hoạt động ngoại khóa rồi nhé!' },
          { speaker: 'Hải', role: 'Học sinh', zh: '我们需要带什么物品呢？', py: 'Wǒmen xūyào dài shénme wùpǐn ne?', vi: 'Chúng mình cần mang theo những đồ dùng gì thế?' },
          { speaker: 'Lớp trưởng', role: 'Học sinh', zh: '老师提醒大家带好笔记本、数码相机和水壶。门票学校已经为大家提前订好了。', py: 'Lǎoshī tíxǐng dàjiā dài hǎo bǐjìběn, shùmǎ xiàngjī hé shuǐhú. Ménpiào xuéxiào yǐjīng wèi dàjiā tíqián dìng hǎo le.', vi: 'Thầy nhắc mọi người mang theo sổ ghi chép, máy ảnh số và bình nước. Vé vào cửa nhà trường đã đặt trước cho mọi người rồi.' },
          { speaker: 'Hải', role: 'Học sinh', zh: '太好了，听说馆长还将要为我们作一场关于古代丝绸之路的详细介绍呢。', py: 'Tài hǎo le, tīngshuō guǎnzhǎng hái jiāng yào wèi wǒmen zuò yì chǎng guānyú gǔdài Sīchóu zhī Lù de xiángxì jièshào ne.', vi: 'Tuyệt quá, nghe nói giám đốc bảo tàng còn sẽ có một buổi giới thiệu chi tiết cho chúng mình về Con đường Tơ lụa cổ đại nữa đấy.' }
        ],
        practice: [
          {
            q: 'Câu thông báo nào phù hợp với văn phong bản tin trang trọng?',
            opts: ['夏令营代表团将要启程前往北京。', '夏令营代表团快要走啦。', '夏令营代表团马上就溜了。', '夏令营代表团要快跑了。'],
            ans: 0,
            explain: '"将要……" mang sắc thái trang trọng, lịch sự, rất thích hợp trong văn bản tin tức hoặc thông báo chính thức.'
          },
          {
            q: 'Cặp từ nào dùng đúng trong câu: "明天早晨____出发了。"',
            opts: ['就要……了', '快要……了', '刚才……了', '正在……呢'],
            ans: 0,
            explain: 'Có trạng ngữ thời gian cụ thể "明天早晨", bắt buộc dùng "就要……了".'
          }
        ]
      },
      {
        id: 'lesson-15',
        unit: 'Bài 15',
        title: '早睡早起身体好',
        pinyin: 'Zǎo Shuì Zǎo Qǐ Shēntǐ Hǎo',
        meaning: 'Ngủ sớm, dậy sớm tốt cho sức khỏe',
        goals: 'Nói về thói quen sinh hoạt tốt/xấu, sửa thói quen, quan tâm đến gia đình, sức khỏe, môi trường; nắm vững câu hỏi tu từ 不是……吗 và 难道……吗.',
        vocab: [
          { hanzi: '一般', pinyin: 'yìbān', hv: 'nhất ban', meaning: 'thông thường, bình thường', eg: '我一般早上六点起床跑步。' },
          { hanzi: '按时', pinyin: 'ànshí', hv: 'án thời', meaning: 'đúng giờ', eg: '按时作息对身体健康很有好处。' },
          { hanzi: '养成习惯', pinyin: 'yǎngchéng xíguàn', hv: 'dưỡng thành tập quán', meaning: 'hình thành thói quen', eg: '我们要养成早睡早起的好习惯。' },
          { hanzi: '早睡早起', pinyin: 'zǎo shuì zǎo qǐ', hv: 'tảo thụy tảo khởi', meaning: 'ngủ sớm dậy sớm', eg: '早睡早起使人精力充沛。' },
          { hanzi: '挑食', pinyin: 'tiāoshí', hv: 'khiêu thực', meaning: 'kén ăn, kén chọn món', eg: '小孩子挑食容易缺乏营养。' },
          { hanzi: '改掉', pinyin: 'gǎidiào', hv: 'cải điệu', meaning: 'bỏ, sửa đổi (thói xấu)', eg: '下定决心改掉经常熬夜的坏毛病。' },
          { hanzi: '主动', pinyin: 'zhǔdòng', hv: 'chủ động', meaning: 'chủ động', eg: '在学习上我们要主动思考。' },
          { hanzi: '乐于助人', pinyin: 'lèyú zhùrén', hv: 'lạc vu trợ nhân', meaning: 'vui lòng giúp đỡ người khác', eg: '他性格开朗，平时乐于助人。' },
          { hanzi: '孝敬父母', pinyin: 'xiàojìng fùmǔ', hv: 'hiếu kính phụ mẫu', meaning: 'hiếu kính cha mẹ', eg: '孝敬父母是中华民族的传统美德。' },
          { hanzi: '节约用水/能源', pinyin: 'jiéyuē yòngshuǐ/néngyuán', hv: 'tiết ước dụng thủy/năng nguyên', meaning: 'tiết kiệm nước / năng lượng', eg: '人人都要节约用水，保护地球家园。' },
          { hanzi: '水龙头', pinyin: 'shuǐlóngtóu', hv: 'thủy long đầu', meaning: 'vòi nước', eg: '用完水后请随手关紧水龙头。' },
          { hanzi: '积极发言', pinyin: 'jījí fāyán', hv: 'tích cực phát ngôn', meaning: 'tích cực phát biểu', eg: '课堂上大家都要积极发言。' },
          { hanzi: '尊重', pinyin: 'zūnzhòng', hv: 'tôn trọng', meaning: 'tôn trọng', eg: '我们要学会尊重他人的意见和习惯。' }
        ],
        grammar: [
          {
            title: 'Câu hỏi tu từ phản vấn: 不是……吗？ và 难道……吗？',
            structure: '不是……吗？ (Nhắc nhở khẳng định) vs 难道……吗？ (Chẳng lẽ, ngạc nhiên chất vấn)',
            content: 'Câu phản vấn không cần người nghe trả lời thông tin mà dùng hình thức hỏi để khẳng định mạnh mẽ:',
            rules: [
              '<strong>不是……吗？ (Chẳng phải là... sao?):</strong> Dùng để nhắc nhở đối phương về một sự thật hiển nhiên hoặc quan điểm mà người nói cho là đúng (VD: 他不是你的同班同学吗？ — Chẳng phải cậu ấy là bạn cùng lớp cậu sao? [= Cậu ấy chính là bạn cùng lớp cậu]; 早睡早起不是对身体很好吗？ — Ngủ sớm dậy sớm chẳng phải rất tốt cho sức khỏe sao?).',
              '<strong>难道……吗？ (Chẳng lẽ... sao?):</strong> Biểu thị sự ngạc nhiên tột độ, nghi ngờ hoặc chất vấn phản bác mãnh liệt (VD: 难道你忘了明天有考试吗？ — Chẳng lẽ bạn quên ngày mai có bài thi sao? [Hàm ý trách bạn không nên quên]; 难道节约用水不重要吗？ — Chẳng lẽ việc tiết kiệm nước không quan trọng sao?).'
            ],
            mindmapRef: 'map-rhetorical-questions',
            examples: [
              { zh: '你今天脸色不太好，昨晚不是又熬夜玩手机了吧？', py: 'Nǐ jīntiān liǎnsè bú tài hǎo, zuówǎn bú shì yòu áoyè wán shǒujī le ba?', vi: 'Hôm nay sắc mặt bạn không tốt lắm, tối qua chẳng phải lại thức khuya chơi điện thoại đấy chứ?' },
              { zh: '难道你不明白早睡早起的重要性吗？', py: 'Nándào nǐ bù míngbai zǎo shuì zǎo qǐ de zhòngyàoxìng ma?', vi: 'Chẳng lẽ bạn không hiểu được tầm quan trọng của việc ngủ sớm dậy sớm sao?' },
              { zh: '洗完手关紧水龙头，这不是举手之劳吗？', py: 'Xǐ wán shǒu guān jǐn shuǐlóngtóu, zhè bú shì jǔshǒu zhī láo ma?', vi: 'Rửa tay xong vặn chặt vòi nước, việc này chẳng phải rất dễ dàng hay sao?' }
            ]
          }
        ],
        dialogue: [
          { speaker: 'Mẹ', role: 'Phụ huynh', zh: '小明，都晚上十一点了，你怎么还在玩电脑？', py: 'Xiǎo Míng, dōu wǎnshang shíyī diǎn le, nǐ zěnme hái zài wán diànnǎo?', vi: 'Tiểu Minh, đã 11 giờ đêm rồi, sao con vẫn còn đang chơi máy tính thế?' },
          { speaker: 'Tiểu Minh', role: 'Con trai', zh: '妈，我查完这个资料就去睡。', py: 'Mā, wǒ chá wán zhè gè zīliào jiù qù shuì.', vi: 'Mẹ, con tra cứu nốt tài liệu này rồi đi ngủ ngay ạ.' },
          { speaker: 'Mẹ', role: 'Phụ huynh', zh: '明天早上不是有演讲比赛吗？难道你想迟到吗？快去睡觉！', py: 'Míngtiān zǎoshang bú shì yǒu yǎnjiǎng bǐsài ma? Nándào nǐ xiǎng chídào ma? Kuài qù shuìjiào!', vi: 'Sáng mai chẳng phải có cuộc thi hùng biện sao? Chẳng lẽ con muốn bị muộn à? Mau đi ngủ đi!' },
          { speaker: 'Tiểu Minh', role: 'Con trai', zh: '对不起妈妈，我马上关电脑。我一定改掉熬夜的坏毛病，养成早睡早起的好习惯。', py: 'Duìbuqǐ māma, wǒ mǎshàng guān diànnǎo. Wǒ yídìng gǎidiào áoyè de huài máobìng, yǎngchéng zǎo shuì zǎo qǐ de hǎo xíguàn.', vi: 'Con xin lỗi mẹ, con tắt máy tính ngay đây ạ. Con nhất định sẽ bỏ tật xấu thức khuya, rèn luyện thói quen ngủ sớm dậy sớm.' }
        ],
        practice: [
          {
            q: 'Câu nào mang sắc thái ngạc nhiên và chất vấn phản bác mạnh mẽ nhất?',
            opts: ['难道你不知道随手关灯是节约能源吗？', '你不知道要关灯吗？', '你想关灯还是开灯？', '我们可以关灯吗？'],
            ans: 0,
            explain: '"难道……吗？" mang ngữ điệu chất vấn mạnh và nhấn mạnh điều hiển nhiên ai cũng nên biết.'
          },
          {
            q: 'Từ "不是……吗" trong câu "这道题老师不是讲过了吗？" biểu thị ý gì?',
            opts: ['Nhắc nhở người nghe điều thầy đã giảng rồi', 'Hỏi xem thầy đã giảng chưa', 'Phủ định lời của thầy', 'Yêu cầu thầy giảng lại'],
            ans: 0,
            explain: '"不是……吗" dùng để nhắc lại điều hiển nhiên: thầy giáo đã từng giảng qua câu này rồi.'
          }
        ]
      },
      {
        id: 'lesson-16',
        unit: 'Bài 16',
        title: '复习四 (Ôn tập 4)',
        pinyin: 'Fùxí Sì',
        meaning: 'Ôn tập tổng kết Chủ điểm 4: Tương lai & Kế hoạch cuộc sống',
        goals: 'Hệ thống hóa toàn diện kiến thức Chủ điểm 4: Các mẫu câu diễn tả sự việc sắp xảy ra 快/快要……了, 要/就要……了, 将要……了; Làm chủ hai dạng câu hỏi tu từ phản vấn 不是……吗 và 难道……吗; Rèn luyện kỹ năng mềm, nếp sống lành mạnh; Thành tố 子 trong 学, 孙, 孩.',
        summary: [
          '<strong>Hành động sắp diễn ra:</strong> 快要……了 (thời điểm rất cận kề, không kèm mốc cụ thể); 就要……了 (kế hoạch ấn định, có mốc thời gian rõ ràng như 明天, 下周); 将要……了 (văn phong trang trọng, thông báo chính thức).',
          '<strong>Câu hỏi tu từ phản vấn:</strong> 不是……吗？ (nhắc nhở khẳng định điều người nói cho là đúng/đã biết); 难道……吗？ (nghi vấn mạnh mẽ, ngạc nhiên chất vấn, hàm ý trái ngược).',
          '<strong>Nếp sống & Kỹ năng tương lai:</strong> Kỹ năng mềm (giao tiếp, hợp tác nhóm, quản lý thời gian, giải quyết vấn đề), hoạt động ngoại khóa, bảo vệ môi trường, tiết kiệm tài nguyên và sửa đổi thói quen xấu.',
          '<strong>Thành tố cấu tạo chữ:</strong> Thành tố [子] (đứa trẻ, con) trong các chữ 学 (học sinh dưới mái trường), 孙 (con cháu đời sau), 孩 (trẻ em, hài nhi).'
        ],
        tasks: [
          'Khảo sát và lập bảng "5 thói quen tốt & 5 thói quen xấu" của học sinh trong lớp (ngủ muộn, kén ăn, lãng phí nước sạch, v.v.).',
          'Thiết kế bài thuyết trình về một khóa rèn luyện kỹ năng mềm hoặc một hoạt động ngoại khóa mà em mong muốn nhà trường tổ chức.'
        ]
      }
    ]
  },

  hanziManual: [
    {
      char: '日',
      pinyin: 'rì',
      hv: 'nhật',
      meaning: 'mặt trời, ngày',
      origin: 'Chữ tượng hình cổ vẽ hình tròn có chấm sáng ở giữa mặt trời (⊙), sau tiến hóa thành hình khối chữ nhật vuông vức 日.',
      derivations: [
        { char: '明', pinyin: 'míng', explain: 'Hội ý: Chữ [日] (mặt trời) kết hợp chữ [月] (mặt trăng) tạo thành nguồn sáng rực rỡ, nghĩa là sáng sủa, minh bạch, ngày mai (明天).' },
        { char: '旦', pinyin: 'dàn', explain: 'Chỉ sự: Chữ [日] (mặt trời) nằm ngay phía trên nét ngang [一] (đường chân trời lúc bình minh), nghĩa là sáng sớm, ngày đầu tiên (元旦 - Tết Dương lịch).' }
      ]
    },
    {
      char: '人',
      pinyin: 'rén',
      hv: 'nhân',
      meaning: 'con người',
      origin: 'Chữ tượng hình vẽ dáng một người đang đứng nghiêng nhìn từ cạnh bên, hai chân sải bước.',
      derivations: [
        { char: '从', pinyin: 'cóng', explain: 'Hội ý: Hai người [人] đứng nối tiếp nhau người trước kẻ sau, mang nghĩa "đi theo, theo sau, tuân theo, từ đâu đến" (从……到……).' },
        { char: '众', pinyin: 'zhòng', explain: 'Hội ý: Ba chữ [人] xếp chồng lên nhau hình tam giác, biểu thị số đông, quần chúng, đám đông nhân dân (大众, 观众).' }
      ]
    },
    {
      char: '力',
      pinyin: 'lì',
      hv: 'lực',
      meaning: 'sức mạnh, sức lực',
      origin: 'Chữ tượng hình cổ vẽ hình cái cày bằng gỗ dùng sức người hoặc cơ bắp cánh tay đang gồng sức, làm bộ thủ cho các chữ liên quan đến hành động cần dùng sức.',
      derivations: [
        { char: '动', pinyin: 'dòng', explain: 'Chữ [云] (mây bay chuyển động) + bộ [力] (sức lực): Tạo thành chữ "chuyển động, vận động, hoạt động" (活动, 动作).' },
        { char: '加', pinyin: 'jiā', explain: 'Chữ [力] (dốc sức) + bộ [口] (miệng hô hào cổ vũ): Nghĩa là thêm vào, gia tăng, cộng thêm (参加, 加油).' },
        { char: '努', pinyin: 'nǔ', explain: 'Chữ [奴] + bộ [力] (dốc hết toàn lực): Nghĩa là gắng sức, nỗ lực phấn đấu (努力学习).' }
      ]
    },
    {
      char: '子',
      pinyin: 'zǐ',
      hv: 'tử',
      meaning: 'con, đứa trẻ, thế hệ sau',
      origin: 'Chữ tượng hình vẽ đứa trẻ sơ sinh với chiếc đầu tròn, hai tay vươn lên đón bố mẹ và hai chân quấn trong tã.',
      derivations: [
        { char: '学', pinyin: 'xué', explain: 'Phía trên là mái nhà và bàn tay dẫn dắt, phía dưới là chữ [子] (đứa trẻ): Đứa trẻ dưới mái trường học đạo lý, tri thức (学习, 学校).' },
        { char: '孙', pinyin: 'sūn', explain: 'Chữ [子] (con) + chữ [系] (sợi dây nối tiếp dòng giống): Thế hệ con cháu kế thừa huyết thống đời sau (孙子, 子孙).' },
        { char: '孩', pinyin: 'hái', explain: 'Chữ [子] (trẻ con) + chữ [亥]: Chỉ hài nhi, trẻ em ngây thơ hồn nhiên (孩子, 小孩).' }
      ]
    }
  ],

  grammarSummary: [
    { no: 1, point: '能 vs 可以', formula: '能 (năng lực, điều kiện) vs 可以 (được phép, xin phép)', lesson: 'Bài 1', eg: '我能说汉语 / 这里可以拍照吗？' },
    { no: 2, point: 'Bổ ngữ xu hướng đơn 来 / 去', formula: 'Động từ + 来 (lại gần) / 去 (đi xa) [+ Nơi chốn + 来/去]', lesson: 'Bài 2', eg: '进来 / 他回家去了' },
    { no: 3, point: 'Bổ ngữ xu hướng phức hợp', formula: 'Động từ + 上/下/进/出/回/过/起 + 来/去', lesson: 'Bài 3', eg: '跳上桌子来 / 跑出教室去' },
    { no: 4, point: 'Ôn tập Chủ điểm 1', formula: 'Tổng kết ngữ pháp 能/可以, Bổ ngữ xu hướng đơn & phức hợp', lesson: 'Bài 4', eg: '复习一: 团队合作 / 逛超市 / 宠物' },
    { no: 5, point: '或者 vs 还是', formula: '或者 (câu trần thuật) vs 还是 (câu hỏi lựa chọn ?)', lesson: 'Bài 5', eg: '喝茶或者咖啡 / 你去还是他去？' },
    { no: 6, point: 'Cụm ĐT làm Định ngữ', formula: 'Động từ / Cụm động từ + 的 + Danh từ', lesson: 'Bài 5', eg: '今天吃的菜 / 会做饭的人' },
    { no: 7, point: 'Phó từ 好像', formula: '好像 + Cụm từ/Mệnh đề (có vẻ như, dường như)', lesson: 'Bài 6', eg: '他好像感冒了 / 电影好像很有名' },
    { no: 8, point: 'Lượng từ 段', formula: 'Số từ + 段 + Danh từ (thời gian, đường, âm nhạc, video)', lesson: 'Bài 6', eg: '一段时间 / 一段路 / 一段音乐' },
    { no: 9, point: 'Trợ từ động thái 着', formula: 'Nơi chốn + ĐT + 着 + Tân ngữ / ĐT1 + 着 + ĐT2', lesson: 'Bài 7', eg: '墙上挂着画 / 笑着说话' },
    { no: 10, point: '一边……一边…… & Ôn tập CĐ 2', formula: '一边 + ĐT1 + 一边 + ĐT2 / Tổng kết ẩm thực & phim ảnh', lesson: 'Bài 7, Bài 8', eg: '复习二: 边吃边聊 / 挂着画 / 好像' },
    { no: 11, point: 'Câu bị động với 被', formula: 'Chủ ngữ + 被 (+ Tác nhân) + Động từ + Kết quả', lesson: 'Bài 9', eg: '自行车被他骑走了 / 没被偷' },
    { no: 12, point: 'Câu bị động khẩu ngữ 叫 / 让', formula: 'Chủ ngữ + 叫/让 + Tác nhân (bắt buộc) + Động từ + KQ', lesson: 'Bài 10', eg: '苹果让猴子抢走了 / 竹子叫熊猫吃了' },
    { no: 13, point: 'Trợ từ 着 vs 正/正在/在', formula: '着 (trạng thái tĩnh kéo dài) vs 正在 (hành động đang diễn ra)', lesson: 'Bài 11', eg: '贴着照片 (tĩnh) vs 正在看书 (động)' },
    { no: 14, point: 'Đại từ 自己 & Ôn tập CĐ 3', formula: 'Chủ ngữ + 自己 + ĐT / Tổng kết bị động 被, 叫, 让', lesson: 'Bài 11, Bài 12', eg: '复习三: 自己做 / 苹果让猴子抢走了' },
    { no: 15, point: '快 / 快要……了', formula: '快 / 快要 + Động từ + 了 (thời điểm rất cận kề, không kèm mốc cụ thể)', lesson: 'Bài 13', eg: '天快黑了 / 我们快要放假了' },
    { no: 16, point: '要 / 就要……了 vs 将要……了', formula: '就要……了 (kèm mốc cụ thể) vs 将要……了 (trang trọng)', lesson: 'Bài 13, 14', eg: '明天就要出发了 / 代表团将要访问' },
    { no: 17, point: 'Câu hỏi tu từ & Tổng kết CĐ 4', formula: '不是……吗？ (nhắc nhở) / 难道……吗？ (chất vấn mạnh)', lesson: 'Bài 15, Bài 16', eg: '复习四: 不是……吗 / 难道……吗' }
  ]
};
