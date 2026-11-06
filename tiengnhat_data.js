// Data for Tieng Nhat Lop 5
const lessons = [
  // TẬP 1 (BÀI 1 - BÀI 8 + 3 BÀI ÔN TẬP)
  {
    num: 1,
    book: 1,
    titleJp: '6じに おきます',
    titleRomaji: 'Rokuji ni okimasu',
    titleVi: 'Mình thức dậy lúc 6 giờ',
    topic: 'Sinh hoạt hằng ngày, giờ giấc; nói giờ thức dậy, ăn cơm, đến trường, đi ngủ',
    target: 'Học sinh biết hỏi và trả lời chính xác về thời gian diễn ra các hoạt động sinh hoạt trong ngày (thức dậy, ăn sáng, đi học, đi ngủ) sử dụng trợ từ thời gian "に". Nhận biết và viết đúng 3 chữ Hán cơ bản: 一、二、三.',
    vocab: [
      { jp: 'おきます', romaji: 'okimasu', vi: 'thức dậy', type: 'Động từ', kanji: '起きます' },
      { jp: 'ねます', romaji: 'nemasu', vi: 'đi ngủ', type: 'Động từ', kanji: '寝ます' },
      { jp: 'あさごはん', romaji: 'asagohan', vi: 'bữa ăn sáng', type: 'Danh từ', kanji: '朝ご飯' },
      { jp: 'ひるごはん', romaji: 'hirugohan', vi: 'bữa ăn trưa', type: 'Danh từ', kanji: '昼ご飯' },
      { jp: 'ばんごはん', romaji: 'bangohan', vi: 'bữa ăn tối', type: 'Danh từ', kanji: '晩ご飯' },
      { jp: 'たべます', romaji: 'tabemasu', vi: 'ăn', type: 'Động từ', kanji: '食べます' },
      { jp: 'がっこうへ いきます', romaji: 'gakkou e ikimasu', vi: 'đến trường', type: 'Cụm ĐT', kanji: '学校へ行きます' },
      { jp: 'べんきょうします', romaji: 'benkyoushimasu', vi: 'học bài', type: 'Động từ', kanji: '勉強します' },
      { jp: 'いま', romaji: 'ima', vi: 'bây giờ', type: 'Danh từ', kanji: '今' },
      { jp: 'なんじ', romaji: 'nanji', vi: 'mấy giờ', type: 'Từ để hỏi', kanji: '何時' },
      { jp: '～じ', romaji: '~ji', vi: 'giờ (1じ, 2じ...)', type: 'Đơn vị', kanji: '～時' },
      { jp: '～ふん / ぷん', romaji: '~fun / pun', vi: 'phút', type: 'Đơn vị', kanji: '～分' },
      { jp: 'はん', romaji: 'han', vi: 'rưỡi (30 phút)', type: 'Danh từ', kanji: '半' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu hỏi và trả lời giờ giấc sinh hoạt: なんじに ～ますか',
        desc: 'Trợ từ「に」(ni) đi sau danh từ chỉ thời gian có con số cụ thể để xác định thời điểm thực hiện hành động.',
        formula: 'Câu hỏi: [Chủ ngữ]は なんじに [Động từ]ますか。\nCâu trả lời: [Thời gian]に [Động từ]ます。',
        examples: [
          { jp: 'まいあさ なんじに おきますか。 - 6じに おきます。', vi: 'Mỗi sáng cậu thức dậy lúc mấy giờ? - Mình dậy lúc 6 giờ.' },
          { jp: '7じはんに がっこうへ いきます。', vi: 'Mình đến trường lúc 7 giờ rưỡi.' },
          { jp: 'よる 10じに ねます。', vi: 'Mình đi ngủ lúc 10 giờ đêm.' }
        ],
        tip: 'Lưu ý: Các từ chỉ thời gian tương đối như きょう (hôm nay), あした (ngày mai), いま (bây giờ), まいあさ (mỗi sáng) KHÔNG đi với trợ từ に.'
      },
      {
        title: '2. Cách đếm giờ và phút trong tiếng Nhật',
        desc: 'Đếm giờ dùng số đếm + じ (ji). Lưu ý các giờ đặc biệt: 4 giờ là よじ (yoji - không đọc là yonji), 7 giờ là しちじ (shichiji), 9 giờ là くじ (kuji - không đọc là kyuji).',
        formula: '[Số đếm] + じ (Giờ)  /  [Số đếm] + ふん・ぷん (Phút)',
        examples: [
          { jp: '1じ (ichiji), 4じ (yoji), 7じ (shichiji), 9じ (kuji)', vi: '1 giờ, 4 giờ, 7 giờ, 9 giờ' },
          { jp: '6じはん (rokuji han = 6じ30ぷん)', vi: '6 giờ rưỡi' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'さくら (Sakura)',
      speaker2: 'ナム (Nam)',
      lines: [
        { spk: 'さくら', jp: 'ナムさん、まいあさ なんじに おきますか。', vi: 'Nam ơi, mỗi sáng cậu thức dậy lúc mấy giờ vậy?' },
        { spk: 'ナム', jp: 'わたしは 6じに おきます。さくらさんは？', vi: 'Mình thức dậy lúc 6 giờ. Còn Sakura thì sao?' },
        { spk: 'さくら', jp: 'わたしは 6じはんに おきます。あさごはんは なんじですか。', vi: 'Mình dậy lúc 6 giờ rưỡi. Cậu ăn sáng lúc mấy giờ?' },
        { spk: 'ナム', jp: '7じに あさごはんを たべます。そして 7じ15ふんに がっこうへ いきます。', vi: 'Mình ăn sáng lúc 7 giờ. Sau đó 7 giờ 15 phút mình đến trường.' }
      ]
    },
    kanjiList: [
      { char: '一', on: 'イチ (ichi)', kun: 'ひと (hito)', strokes: 1, mean: 'NHẤT (Số một)', word: '一 (いち - một), 一日 (ついたち - mùng một)' },
      { char: '二', on: 'ニ (ni)', kun: 'ふた (futa)', strokes: 2, mean: 'NHỊ (Số hai)', word: '二 (に - hai), 二月 (にがつ - tháng hai)' },
      { char: '三', on: 'サン (san)', kun: 'みっ (mit)', strokes: 3, mean: 'TAM (Số ba)', word: '三 (さん - ba), 三日 (みっか - ngày 3)' }
    ],
    skills: {
      listening: 'Luyện nghe các mốc thời gian thức dậy, ăn sáng, đi học và đi ngủ của bạn học sinh.',
      speaking: 'Thực hành hỏi đáp với bạn cùng bàn: "なんじに おきますか - [Giờ]に おきます".',
      reading: 'Đoạn văn ngắn: "ナムさんの いちにち (Một ngày của Nam): わたしは 6じに おきます。7じに あさごはんを たべます。7じはんに がっこうへ いきます。よる 10じに ねます。"',
      writing: 'Viết thời gian biểu sinh hoạt một ngày của bản thân bằng tiếng Nhật.'
    },
    culture: {
      title: 'Văn hóa đúng giờ và Lời chào buổi sáng của học sinh Nhật Bản',
      content: 'Người Nhật vô cùng coi trọng sự đúng giờ (Jikan Genshu - 時間厳守). Học sinh tiểu học Nhật Bản luôn tự giác thức dậy sớm, tự chuẩn bị cặp sách Randoseru và đi bộ theo hàng đến trường. Khi gặp thầy cô và bạn bè, các em luôn khoanh tay cúi đầu chào thật to và tươi vui: "おはようございます!" (Ohayou gozaimasu!).'
    },
    quizzes: [
      { q: 'Điền trợ từ thích hợp: "わたしは 6じ____ おきます。"', options: ['に', 'へ', 'を', 'で'], ans: 0, exp: 'Trợ từ "に" đi sau mốc thời gian cụ thể (6じ) chỉ thời điểm hành động diễn ra.' },
      { q: '"4 giờ" và "9 giờ" trong tiếng Nhật đọc chính xác là:', options: ['よんじ, きゅうじ', 'よじ, くじ', 'よじ, きゅうじ', 'しじ, くじ'], ans: 1, exp: '4 giờ đọc là "よじ" (yoji) và 9 giờ đọc là "くじ" (kuji).' },
      { q: 'Chữ Hán nào có nghĩa là số "Ba" (TAM)?', options: ['一', '二', '三', '四'], ans: 2, exp: 'Chữ 三 có 3 nét ngang, nghĩa là số 3 (TAM).' },
      { q: 'Câu "7じはんに がっこうへ いきます" có nghĩa là gì?', options: ['Tôi đến trường lúc 7 giờ.', 'Tôi đến trường lúc 7 giờ rưỡi.', 'Tôi ăn sáng lúc 7 giờ rưỡi.', 'Tôi ngủ lúc 7 giờ.'], ans: 1, exp: '"7じはん" nghĩa là 7 giờ rưỡi (7:30), "がっこうへ いきます" là đi đến trường.' }
    ]
  },

  {
    num: 2,
    book: 1,
    titleJp: 'すいようびに からてきょうしつへ いきます',
    titleRomaji: 'Suiyoubi ni karate-kyoushitsu e ikimasu',
    titleVi: 'Mình đi học lớp karate vào thứ Tư',
    topic: 'Các ngày trong tuần, hoạt động ngoại khóa, thể thao; mẫu ～ようびに ～へ いきます, nói khoảng thời gian từ ngày nào đến ngày nào',
    target: 'Học sinh nói thành thạo 7 ngày trong tuần, kể về các lớp năng khiếu, câu lạc bộ thể thao; sử dụng mẫu câu đi đâu vào thứ mấy và diễn đạt khoảng thời gian "từ... đến..." (~から ~まで). Nhận biết chữ Hán: 四、五、六.',
    vocab: [
      { jp: 'げつようび', romaji: 'getsuyoubi', vi: 'thứ Hai', type: 'Danh từ', kanji: '月曜日' },
      { jp: 'かようび', romaji: 'kayoubi', vi: 'thứ Ba', type: 'Danh từ', kanji: '火曜日' },
      { jp: 'すいようび', romaji: 'suiyoubi', vi: 'thứ Tư', type: 'Danh từ', kanji: '水曜日' },
      { jp: 'もくようび', romaji: 'mokuyoubi', vi: 'thứ Năm', type: 'Danh từ', kanji: '木曜日' },
      { jp: 'きんようび', romaji: 'kinyoubi', vi: 'thứ Sáu', type: 'Danh từ', kanji: '金曜日' },
      { jp: 'どようび', romaji: 'doyoubi', vi: 'thứ Bảy', type: 'Danh từ', kanji: '土曜日' },
      { jp: 'にちようび', romaji: 'nichiyoubi', vi: 'Chủ nhật', type: 'Danh từ', kanji: '日曜日' },
      { jp: 'からて', romaji: 'karate', vi: 'môn võ Karate', type: 'Danh từ', kanji: '空手' },
      { jp: 'じゅうどう', romaji: 'juudou', vi: 'môn võ Judo', type: 'Danh từ', kanji: '柔道' },
      { jp: 'サッカー', romaji: 'sakkaa', vi: 'môn bóng đá', type: 'Danh từ', kanji: '' },
      { jp: 'すいえい', romaji: 'suiei', vi: 'môn bơi lội', type: 'Danh từ', kanji: '水泳' },
      { jp: 'きょうしつ', romaji: 'kyoushitsu', vi: 'lớp học / phòng học', type: 'Danh từ', kanji: '教室' },
      { jp: '～から ～まで', romaji: '~kara ~made', vi: 'từ ~ đến ~', type: 'Cấu trúc', kanji: '' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu đi đâu vào thứ mấy: [Thứ]に [Địa điểm]へ いきます',
        desc: 'Trợ từ「へ」(đọc là e) chỉ hướng di chuyển đến một địa điểm.',
        formula: '[Thứ]に [Địa điểm]へ いきます。',
        examples: [
          { jp: 'すいようびに からてきょうしつへ いきます。', vi: 'Mình đi đến lớp học Karate vào thứ Tư.' },
          { jp: 'どようびに プールへ いきます。', vi: 'Mình đi đến bể bơi vào thứ Bảy.' }
        ]
      },
      {
        title: '2. Cấu trúc khoảng thời gian: [Mốc 1]から [Mốc 2]まで',
        desc: 'Dùng để diễn tả khoảng thời gian từ thứ mấy đến thứ mấy hoặc từ mấy giờ đến mấy giờ.',
        formula: '[Thời gian 1]から [Thời gian 2]まで',
        examples: [
          { jp: 'げつようびから きんようびまで がっこうへ いきます。', vi: 'Mình đi học từ thứ Hai đến thứ Sáu.' },
          { jp: '8じから 11じはんまで べんきょうします。', vi: 'Mình học từ 8 giờ đến 11 giờ rưỡi.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'ケン (Ken)',
      speaker2: 'マイ (Mai)',
      lines: [
        { spk: 'ケン', jp: 'マイさんは すいようびに なにを しますか。', vi: 'Mai ơi, cậu làm gì vào thứ Tư thế?' },
        { spk: 'マイ', jp: 'すいようびに からてきょうしつへ いきます。', vi: 'Thứ Tư mình đi đến lớp học Karate.' },
        { spk: 'ケン', jp: 'なんじから なんじまでですか。', vi: 'Từ mấy giờ đến mấy giờ vậy cậu?' },
        { spk: 'マイ', jp: '오후 5じから 6じはんまでです。ケンさんは？', vi: 'Từ 5 giờ đến 6 giờ rưỡi chiều. Còn Ken thì sao?' },
        { spk: 'ケン', jp: 'わたしは どようびに サッカーを します。', vi: 'Mình thì đá bóng vào thứ Bảy.' }
      ]
    },
    kanjiList: [
      { char: '四', on: 'シ (shi)', kun: 'よん / よ (yon / yo)', strokes: 5, mean: 'TỨ (Số bốn)', word: '四 (よん / よ - bốn), 四月 (しがつ - tháng tư)' },
      { char: '五', on: 'ゴ (go)', kun: 'いつ (itsu)', strokes: 4, mean: 'NGŨ (Số năm)', word: '五 (ご - năm), 五月 (ごがつ - tháng năm)' },
      { char: '六', on: 'ロク (roku)', kun: 'むっ (mut)', strokes: 4, mean: 'LỤC (Số sáu)', word: '六 (ろく - sáu), 六月 (ろくがつ - tháng sáu)' }
    ],
    skills: {
      listening: 'Nghe nhận biết các thứ trong tuần và các môn thể thao ngoại khóa tương ứng.',
      speaking: 'Hỏi bạn về thời khóa biểu tuần: "げつようびに なにを しますか".',
      reading: 'Đọc thời khóa biểu ngoại khóa của lớp và trả lời câu hỏi tìm ngày học năng khiếu.',
      writing: 'Viết các thứ trong tuần bằng Hiragana và hoàn thiện câu nói về sở thích thể thao.'
    },
    culture: {
      title: 'Võ đạo Karate và Câu lạc bộ thể thao (Bukatsu) trường học Nhật',
      content: 'Karate (空手 - Không thủ, nghĩa là tay không) là môn võ cổ truyền nổi tiếng xuất xứ từ vùng Okinawa. Ở trường học Nhật Bản, các câu lạc bộ (Bukatsu) như Karate, Judo, bóng đá, bóng chày giúp học sinh rèn luyện thể lực phi thường, tinh thần kỷ luật và sự tôn trọng đối thủ.'
    },
    quizzes: [
      { q: '"Thứ Tư" trong tiếng Nhật là từ nào?', options: ['かようび', 'すいようび', 'もくようび', 'きんようび'], ans: 1, exp: '"すいようび" (Thủy diệu nhật) là thứ Tư.' },
      { q: 'Trợ từ chỉ hướng di chuyển "đi đến đâu" trong câu "がっこう____ いきます" là:', options: ['へ', 'に', 'を', 'で'], ans: 0, exp: 'Trợ từ "へ" (đọc là e) đi với động từ di chuyển ikimasu để chỉ hướng đi.' },
      { q: 'Chữ Hán "六" có âm đọc và nghĩa là gì?', options: ['TỨ (số 4)', 'NGŨ (số 5)', 'LỤC (số 6)', 'THẤT (số 7)'], ans: 2, exp: 'Chữ 六 là LỤC, nghĩa là số 6.' },
      { q: 'Cấu trúc "từ thứ Hai đến thứ Sáu" viết là:', options: ['げつようびから きんようびまで', 'げつようびまで きんようびから', 'げつようびに きんようびへ', 'げつようびと きんようび'], ans: 0, exp: 'Mẫu [Thời gian 1]から [Thời gian 2]まで: げつようびから きんようびまで.' }
    ]
  },

  {
    num: 3,
    book: 1,
    titleJp: 'よく まんがを よみます',
    titleRomaji: 'Yoku manga o yomimasu',
    titleVi: 'Mình thường đọc truyện tranh',
    topic: 'Hoạt động ngoài giờ học, đọc truyện, xem tivi, sử dụng Internet; mức độ thường xuyên như よく, ときどき, あまり, ぜんぜん',
    target: 'Học sinh biết dùng phó từ chỉ mức độ tần suất (thường, thỉnh thoảng, không... lắm, hoàn toàn không) để nói về sở thích giải trí lúc rảnh rỗi. Nhận biết và viết chữ Hán: 七、八、九、十.',
    vocab: [
      { jp: 'よく', romaji: 'yoku', vi: 'thường xuyên / rất hay', type: 'Phó từ', kanji: '' },
      { jp: 'ときどき', romaji: 'tokidoki', vi: 'thỉnh thoảng / đôi khi', type: 'Phó từ', kanji: '時々' },
      { jp: 'あまり', romaji: 'amari', vi: 'không... lắm (đi với phủ định)', type: 'Phó từ', kanji: '' },
      { jp: 'ぜんぜん', romaji: 'zenzen', vi: 'hoàn toàn không (đi với phủ định)', type: 'Phó từ', kanji: '全然' },
      { jp: 'まんが', romaji: 'manga', vi: 'truyện tranh', type: 'Danh từ', kanji: '漫画' },
      { jp: 'アニメ', romaji: 'anime', vi: 'phim hoạt hình', type: 'Danh từ', kanji: '' },
      { jp: 'テレビ', romaji: 'terebi', vi: 'ti vi / truyền hình', type: 'Danh từ', kanji: '' },
      { jp: 'インターネット', romaji: 'intaanetto', vi: 'mạng internet', type: 'Danh từ', kanji: '' },
      { jp: 'おんがく', romaji: 'ongaku', vi: 'âm nhạc', type: 'Danh từ', kanji: '音楽' },
      { jp: 'ゲーム', romaji: 'geemu', vi: 'trò chơi điện tử', type: 'Danh từ', kanji: '' },
      { jp: 'よみます', romaji: 'yomimasu', vi: 'đọc', type: 'Động từ', kanji: '読みます' },
      { jp: 'みます', romaji: 'mimasu', vi: 'xem / nhìn', type: 'Động từ', kanji: '見ます' },
      { jp: 'ききます', romaji: 'kikimasu', vi: 'nghe', type: 'Động từ', kanji: '聞きます' },
      { jp: 'します', romaji: 'shimasu', vi: 'chơi / làm', type: 'Động từ', kanji: '' }
    ],
    grammarNotes: [
      {
        title: '1. Thang mức độ tần suất trong tiếng Nhật',
        desc: 'Xếp theo mức độ từ cao đến thấp:',
        formula: 'よく (Thường xuyên ~80%) > ときどき (Thỉnh thoảng ~50%) > あまり...ません (Không... lắm ~20%) > ぜんぜん...ません (Hoàn toàn không 0%)',
        examples: [
          { jp: 'よく まんがを よみます。', vi: 'Mình thường xuyên đọc truyện tranh.' },
          { jp: 'ときどき テレビを みます。', vi: 'Thỉnh thoảng mình xem tivi.' },
          { jp: 'あまり ゲームを しません。', vi: 'Mình không chơi game mấy (hiếm khi chơi).' },
          { jp: 'ぜんぜん おんがくを ききません。', vi: 'Mình hoàn toàn không nghe nhạc.' }
        ],
        tip: 'Quy tắc bắt buộc: "あまり" và "ぜんぜん" luôn đi với đuôi động từ PHỦ ĐỊNH (~ません).'
      },
      {
        title: '2. Trợ từ tân ngữ「を」(o)',
        desc: 'Đứng giữa danh từ chỉ đối tượng tiếp nhận và động từ tác động.',
        formula: '[Danh từ]を [Động từ]ます',
        examples: [
          { jp: 'ほんを よみます。', vi: 'Đọc sách.' },
          { jp: 'テレビを みます。', vi: 'Xem ti vi.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'ハナ (Hana)',
      speaker2: 'リン (Linh)',
      lines: [
        { spk: 'ハナ', jp: 'リンさんは うちで なにを しますか。', vi: 'Linh ơi, ở nhà cậu làm gì thế?' },
        { spk: 'リン', jp: 'わたしは よく まんがを よみます。ハナさんは？', vi: 'Mình thường đọc truyện tranh. Còn Hana thì sao?' },
        { spk: 'ハナ', jp: 'わたしは ときどき アニメを みます。ゲームを しますか。', vi: 'Mình thỉnh thoảng xem phim hoạt hình. Cậu có chơi game không?' },
        { spk: 'リン', jp: 'いいえ、あまり しません。べんきょうが いそがしいですから。', vi: 'Không, mình không chơi game mấy. Vì mình bận học bài mà.' }
      ]
    },
    kanjiList: [
      { char: '七', on: 'シチ (shichi)', kun: 'なな (nana)', strokes: 2, mean: 'THẤT (Số bảy)', word: '七 (なな / しち - bảy), 七月 (しちがつ - tháng bảy)' },
      { char: '八', on: 'ハチ (hachi)', kun: 'やっ (yat)', strokes: 2, mean: 'BÁT (Số tám)', word: '八 (はち - tám), 八月 (はちがつ - tháng tám)' },
      { char: '九', on: 'キュウ / ク (kyuu / ku)', kun: 'ここの (kokono)', strokes: 2, mean: 'CỬU (Số chín)', word: '九 (きゅう / く - chín), 九月 (くがつ - tháng chín)' },
      { char: '十', on: 'ジュウ (juu)', kun: 'とお (too)', strokes: 2, mean: 'THẬP (Số mười)', word: '十 (じゅう - mười), 十月 (じゅうがつ - tháng mười)' }
    ],
    skills: {
      listening: 'Nghe phân biệt các mức độ thường xuyên của người nói trong đoạn ghi âm.',
      speaking: 'Phỏng vấn bạn: "よく まんがを よみますか" và trả lời theo thói quen bản thân.',
      reading: 'Đọc đoạn văn miêu tả thói quen giải trí ngày nghỉ của học sinh tiểu học Tokyo.',
      writing: 'Viết câu sử dụng đúng cặp từ "あまり...ません" và "ぜんぜん...ません".'
    },
    culture: {
      title: 'Văn hóa Manga và Anime Nhật Bản - Cửa sổ sáng tạo',
      content: 'Manga (truyện tranh) và Anime (hoạt hình) là niềm tự hào văn hóa đại chúng của đất nước Mặt trời mọc. Những tác phẩm kinh điển như Doraemon, Thám tử lừng danh Conan, Pokemon không chỉ mang lại tiếng cười giải trí mà còn giáo dục lòng nhân ái, tình bạn keo sơn và tinh thần khoa học cho trẻ em toàn thế giới.'
    },
    quizzes: [
      { q: 'Phó từ nào bắt buộc phải đi với đuôi phủ định (~ません)?', options: ['よく', 'ときどき', 'いつも', 'あまり'], ans: 3, exp: '"あまり" và "ぜんぜん" luôn đi cùng đuôi phủ định (~ません).' },
      { q: 'Câu "ぜんぜん ゲームを しません" có nghĩa là gì?', options: ['Tôi thường chơi game.', 'Tôi thỉnh thoảng chơi game.', 'Tôi hoàn toàn không chơi game.', 'Tôi rất thích chơi game.'], ans: 2, exp: '"ぜんぜん...ません" nghĩa là hoàn toàn không làm việc gì.' },
      { q: 'Chữ Hán "十" tượng trưng cho số mấy?', options: ['Số 7', 'Số 8', 'Số 9', 'Số 10'], ans: 3, exp: 'Chữ 十 (THẬP) nghĩa là số 10.' },
      { q: 'Trợ từ thích hợp trong câu "テレビ____ みます" là:', options: ['を', 'に', 'へ', 'で'], ans: 0, exp: 'Trợ từ "を" đánh dấu đối tượng chịu tác động của hành động xem (みます).' }
    ]
  },

  // ÔN TẬP 1
  {
    num: 'review_1',
    isReview: true,
    book: 1,
    titleJp: 'おさらい 1 (Ôn tập 1)',
    titleVi: 'Củng cố giờ giấc, lịch sinh hoạt, hoạt động trong tuần và thói quen',
    summary: 'Tổng hợp kiến thức trọng tâm từ Bài 1 đến Bài 3: Cách nói giờ, phút; các ngày trong tuần (げつようび ~ にちようび); cấu trúc từ... đến... (~から ~まで); thang phó từ tần suất (よく, ときどき, あまり, ぜんぜん) và 10 chữ Hán số đếm từ 1 đến 10 (一 ~ 十).',
    quizzes: [
      { q: '"Mỗi sáng tôi thức dậy lúc 6 giờ rưỡi":', options: ['まいあさ 6じに おきます。', 'まいあさ 6じはんに おきます。', 'まいあさ 6じはんに ねます。', 'まいあさ 6じを おきます。'], ans: 1, exp: '6 giờ rưỡi là "6じはん", thức dậy là "おきます".' },
      { q: 'Chữ Hán ghép "四月" đọc là gì?', options: ['よんがつ', 'しがつ', 'よがつ', 'よっがつ'], ans: 1, exp: 'Tháng 4 đọc theo âm On đặc biệt là "しがつ".' },
      { q: 'Thứ Ba và thứ Năm lần lượt là:', options: ['かようび / もくようび', 'すいようび / きんようび', 'げつようび / どようび', 'かようび / すいようび'], ans: 0, exp: 'Thứ Ba là かようび (Hỏa), thứ Năm là もくようび (Mộc).' },
      { q: 'Hoàn thành câu: "わたしは ぜんぜん コーヒーを ____。"', options: ['のみます', 'のみません', 'のみたいです', 'のんで'], ans: 1, exp: '"ぜんぜん" đi với đuôi phủ định "のみません" (hoàn toàn không uống).' }
    ]
  },

  {
    num: 4,
    book: 1,
    titleJp: 'ボールが ほしいです',
    titleRomaji: 'Booru ga hoshii desu',
    titleVi: 'Mình muốn có một quả bóng',
    topic: 'Nói về đồ vật mình muốn có; mẫu ～が ほしいです, hỏi người khác muốn gì',
    target: 'Học sinh biết biểu đạt mong muốn sở hữu một đồ vật nào đó với mẫu "~が ほしいです", hỏi nguyện vọng của bạn bè và nắm vững 5 chữ Hán các ngày trong tuần: 日、月、火、水、木.',
    vocab: [
      { jp: 'ほしい', romaji: 'hoshii', vi: 'muốn có (đồ vật)', type: 'Tính từ đuôi i', kanji: '欲しい' },
      { jp: 'ボール', romaji: 'booru', vi: 'quả bóng', type: 'Danh từ', kanji: '' },
      { jp: 'じてんしゃ', romaji: 'jitensha', vi: 'xe đạp', type: 'Danh từ', kanji: '自転車' },
      { jp: 'にんぎょう', romaji: 'ningyou', vi: 'búp bê', type: 'Danh từ', kanji: '人形' },
      { jp: 'ほん', romaji: 'hon', vi: 'sách', type: 'Danh từ', kanji: '本' },
      { jp: 'カメラ', romaji: 'kamera', vi: 'máy ảnh', type: 'Danh từ', kanji: '' },
      { jp: 'とけい', romaji: 'tokei', vi: 'đồng hồ', type: 'Danh từ', kanji: '時計' },
      { jp: 'ぼうし', romaji: 'boushi', vi: 'mũ / nón', type: 'Danh từ', kanji: '帽子' },
      { jp: 'ゲームき', romaji: 'geemuki', vi: 'máy chơi game', type: 'Danh từ', kanji: 'ゲーム機' },
      { jp: 'プレゼント', romaji: 'purezento', vi: 'món quà tặng', type: 'Danh từ', kanji: '' },
      { jp: 'なに / なん', romaji: 'nani / nan', vi: 'cái gì', type: 'Từ để hỏi', kanji: '何' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu bày tỏ mong muốn có đồ vật: [Danh từ]が ほしいです',
        desc: 'Dùng trợ từ「が」(ga) trước tính từ「ほしい」để chỉ đồ vật mà người nói muốn có được.',
        formula: '[Đồ vật]が ほしいです。 (Tôi muốn có N)\n[Đồ vật]は ほしくないです。 (Tôi không muốn có N)',
        examples: [
          { jp: 'わたしは あたらしい じてんしゃが ほしいです。', vi: 'Mình muốn có một chiếc xe đạp mới.' },
          { jp: 'ボールが ほしいです。', vi: 'Mình muốn có một quả bóng.' }
        ],
        tip: 'Lưu ý: "~が ほしいです" CHỈ DÙNG CHO DANH TỪ (đồ vật). Khi muốn làm hành động (động từ) ta sẽ dùng mẫu "~たいです" ở bài 15.'
      },
      {
        title: '2. Mẫu câu hỏi mong muốn của người khác: なにが ほしいですか',
        desc: 'Dùng khi hỏi ai đó muốn có món quà gì hoặc đồ vật gì.',
        formula: '[Người]は なにが ほしいですか。',
        examples: [
          { jp: 'たんじょうびに なにが ほしいですか。 - カメラが ほしいです。', vi: 'Sinh nhật cậu muốn có quà gì? - Mình muốn có máy ảnh.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'おとうさん (Bố)',
      speaker2: 'たけし (Takeshi)',
      lines: [
        { spk: 'おとうさん', jp: 'たけし、もうすぐ たんじょうびだね。なにが ほしい？', vi: 'Takeshi này, sắp đến sinh nhật con rồi đó. Con muốn có gì nào?' },
        { spk: 'たけし', jp: 'ぼくは サッカーの ボールが ほしいです。', vi: 'Con muốn có một quả bóng đá bố ạ.' },
        { spk: 'おとうさん', jp: 'ボールだね。どんな ボールが ほしいですか。', vi: 'Quả bóng đá hả con. Con muốn quả bóng như thế nào?' },
        { spk: 'たけし', jp: 'あおくて かっこいい ボールが ほしいです！', vi: 'Con muốn quả bóng màu xanh dương thật ngầu ạ!' }
      ]
    },
    kanjiList: [
      { char: '日', on: 'ニチ / ジツ (nichi / jitsu)', kun: 'ひ / び (hi / bi)', strokes: 4, mean: 'NHẬT (mặt trời, ngày)', word: '日曜日 (にちようび - Chủ nhật), 日本 (にほん - Nhật Bản)' },
      { char: '月', on: 'ゲツ / ガツ (getsu / gatsu)', kun: 'つき (tsuki)', strokes: 4, mean: 'NGUYỆT (mặt trăng, tháng)', word: '月曜日 (げつようび - thứ Hai), 一月 (いちがつ - tháng 1)' },
      { char: '火', on: 'カ (ka)', kun: 'ひ (hi)', strokes: 4, mean: 'HỎA (lửa)', word: '火曜日 (かようび - thứ Ba), 火 (ひ - ngọn lửa)' },
      { char: '水', on: 'スイ (sui)', kun: 'みず (mizu)', strokes: 4, mean: 'THỦY (nước)', word: '水曜日 (すいようび - thứ Tư), 水 (みず - nước)' },
      { char: '木', on: 'モク / ボク (moku / boku)', kun: 'き (ki)', strokes: 4, mean: 'MỘC (cây)', word: '木曜日 (もくようび - thứ Năm), 木 (き - cái cây)' }
    ],
    skills: {
      listening: 'Nghe đoạn hội thoại chọn đúng đồ vật mà các bạn nhỏ mong muốn trong ngày sinh nhật.',
      speaking: 'Phỏng vấn bạn bè: "たんじょうびに なにが ほしいですか" và ghi lại danh sách quà tặng.',
      reading: 'Đọc bức thư điều ước gửi ông già Noel của một bạn nhỏ Nhật Bản.',
      writing: 'Tập viết 5 chữ Hán các thứ: 日、月、火、水、木 đúng thứ tự nét bút.'
    },
    culture: {
      title: 'Nghệ thuật gói quà Furoshiki (風呂敷) tinh tế của người Nhật',
      content: 'Furoshiki là mảnh vải vuông truyền thống dùng để gói đồ vật hoặc bọc quà tặng. Người Nhật tin rằng việc tự tay bọc quà bằng Furoshiki thể hiện sự trân trọng và gói ghém tình cảm chân thành nhất trao gửi đến người nhận. Sau khi nhận quà, tấm vải có thể gấp gọn tái sử dụng nhiều lần để bảo vệ môi trường.'
    },
    quizzes: [
      { q: 'Trợ từ đi cùng tính từ "ほしい" là trợ từ nào?', options: ['を', 'が', 'に', 'へ'], ans: 1, exp: 'Mẫu câu mong muốn đồ vật luôn dùng trợ từ "が": [Đồ vật]が ほしいです.' },
      { q: 'Chữ Hán "水" có nghĩa là gì?', options: ['Lửa (Hỏa)', 'Nước (Thủy)', 'Cây (Mộc)', 'Mặt trăng (Nguyệt)'], ans: 1, exp: 'Chữ 水 là THỦY, nghĩa là nước (みず).' },
      { q: 'Để hỏi "Bạn muốn có cái gì?", câu hỏi đúng là:', options: ['どこが ほしいですか。', 'だれが ほしいですか。', 'なにが ほしいですか。', 'いつが ほしいですか。'], ans: 2, exp: '"なにが ほしいですか" dùng để hỏi bạn muốn có đồ vật gì.' },
      { q: 'Từ nào sau đây có nghĩa là "xe đạp"?', options: ['じてんしゃ', 'くるま', 'ひこうき', 'ふね'], ans: 0, exp: '"じてんしゃ" (tự chuyển xa) là xe đạp.' }
    ]
  },

  {
    num: 5,
    book: 1,
    titleJp: 'この ボールは どうですか',
    titleRomaji: 'Kono booru wa dou desu ka',
    titleVi: 'Quả bóng này thì thế nào?',
    topic: 'Lựa chọn đồ vật, đưa ra gợi ý và nhận xét khi mua quà; mẫu この ～は どうですか',
    target: 'Học sinh biết chỉ định đồ vật bằng từ chỉ định (この, その, あの), đưa ra gợi ý, lời khuyên và nhận xét đặc điểm (to, nhỏ, mới, đẹp, màu sắc) khi chọn quà. Học 3 chữ Hán: 木、金、土.',
    vocab: [
      { jp: 'この', romaji: 'kono', vi: 'này (đi trước danh từ)', type: 'Chỉ định từ', kanji: '' },
      { jp: 'その', romaji: 'sono', vi: 'đó (gần người nghe)', type: 'Chỉ định từ', kanji: '' },
      { jp: 'あの', romaji: 'ano', vi: 'kia (xa cả hai người)', type: 'Chỉ định từ', kanji: '' },
      { jp: 'どう', romaji: 'dou', vi: 'như thế nào', type: 'Từ để hỏi', kanji: '' },
      { jp: 'いい', romaji: 'ii', vi: 'tốt / đẹp / được', type: 'Tính từ đuôi i', kanji: '良い' },
      { jp: 'かわいい', romaji: 'kawaii', vi: 'dễ thương / xinh xắn', type: 'Tính từ đuôi i', kanji: '' },
      { jp: 'かっこいい', romaji: 'kakkoii', vi: 'ngầu / bảnh bao', type: 'Tính từ đuôi i', kanji: '' },
      { jp: 'おおきい', romaji: 'ookii', vi: 'to lớn', type: 'Tính từ đuôi i', kanji: '大きい' },
      { jp: 'ちいさい', romaji: 'chiisai', vi: 'nhỏ bé', type: 'Tính từ đuôi i', kanji: '小さい' },
      { jp: 'あたらしい', romaji: 'atarashii', vi: 'mới', type: 'Tính từ đuôi i', kanji: '新しい' },
      { jp: 'あかい', romaji: 'akai', vi: 'màu đỏ', type: 'Tính từ đuôi i', kanji: '赤い' },
      { jp: 'あおい', romaji: 'aoi', vi: 'màu xanh dương', type: 'Tính từ đuôi i', kanji: '青い' },
      { jp: 'きいろい', romaji: 'kiiroi', vi: 'màu vàng', type: 'Tính từ đuôi i', kanji: '黄色い' }
    ],
    grammarNotes: [
      {
        title: '1. Nhóm từ chỉ định bổ nghĩa cho danh từ: この / その / あの',
        desc: 'Luôn phải có danh từ đi liền kề ngay sau:',
        formula: 'この [Danh từ]: Cái N này (ở gần người nói)\nその [Danh từ]: Cái N đó (ở gần người nghe)\nあの [Danh từ]: Cái N kia (ở xa cả hai)',
        examples: [
          { jp: 'この ボールは あかいです。', vi: 'Quả bóng này màu đỏ.' },
          { jp: 'その 本は おもしろいです。', vi: 'Quyển sách đó hay lắm.' }
        ]
      },
      {
        title: '2. Mẫu câu gợi ý, xin ý kiến: この [Danh từ]は どうですか',
        desc: 'Dùng khi muốn đề xuất một đồ vật cho ai đó lựa chọn.',
        formula: 'この/その/あの [Danh từ]は どうですか。',
        examples: [
          { jp: 'この ぼうしは どうですか。 - わあ、かわいいですね！', vi: 'Chiếc mũ này thì thế nào? - Oa, dễ thương quá nhỉ!' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'エミ (Emi)',
      speaker2: 'アン (An)',
      lines: [
        { spk: 'エミ', jp: 'アンさん、妹の プレゼントを えらびましょう。', vi: 'An ơi, chúng mình cùng chọn quà cho em gái tớ nhé.' },
        { spk: 'アン', jp: 'この あかい にんぎょうは どうですか。', vi: 'Con búp bê màu đỏ này thì thế nào cậu?' },
        { spk: 'エミ', jp: 'かわいいですね！でも、ちょっと おおきいです。', vi: 'Dễ thương quá nhỉ! Nhưng hơi to một chút.' },
        { spk: 'アン', jp: 'じゃ、あの ちいさい にんぎょうは どうですか。', vi: 'Vậy thì con búp bê nhỏ đằng kia thì sao?' },
        { spk: 'エミ', jp: 'とても いいですね！これに します。', vi: 'Rất tuyệt đó! Mình sẽ lấy con này.' }
      ]
    },
    kanjiList: [
      { char: '金', on: 'キン (kin)', kun: 'かね (kane)', strokes: 8, mean: 'KIM (vàng, tiền, thứ Sáu)', word: '金曜日 (きんようび - thứ Sáu), お金 (おかね - tiền bạc)' },
      { char: '土', on: 'ド / ト (do / to)', kun: 'つち (tsuchi)', strokes: 3, mean: 'THỔ (đất, thứ Bảy)', word: '土曜日 (どようび - thứ Bảy), 土地 (とち - đất đai)' }
    ],
    skills: {
      listening: 'Nghe đoạn chọn quà và đánh dấu vào đồ vật được quyết định mua.',
      speaking: 'Đóng vai người mua quà cùng bạn: "この [Đồ vật]は どうですか - いいですね".',
      reading: 'Đọc mẩu hội thoại ngắn ở tiệm quà lưu niệm và tìm tính từ miêu tả món đồ.',
      writing: 'Viết câu miêu tả màu sắc và kích thước của các đồ dùng học tập.'
    },
    culture: {
      title: 'Búp bê gỗ Kokeshi và Nghệ thuật gấp giấy Origami',
      content: 'Kokeshi (こけし) là loại búp bê gỗ thủ công mộc mạc nổi tiếng vùng Đông Bắc Nhật Bản, được xem là biểu tượng mang lại may mắn và bình an cho trẻ nhỏ. Cùng với đó là Origami (折り紙) - nghệ thuật gấp giấy biến những mảnh giấy vuông màu sắc thành chim hạc, bông hoa, chiếc thuyền kỳ diệu.'
    },
    quizzes: [
      { q: 'Từ chỉ định nào dùng cho đồ vật ở gần người nghe?', options: ['この', 'その', 'あの', 'どの'], ans: 1, exp: '"その" dùng cho đồ vật ở gần phía người nghe.' },
      { q: '"Quả bóng này thì thế nào?" dịch sang tiếng Nhật là:', options: ['この ボールは なんですか。', 'この ボールは いくらですか。', 'この ボールは どうですか。', 'この ボールは どこですか。'], ans: 2, exp: '"どうですか" mang nghĩa là "như thế nào?".' },
      { q: 'Tính từ "おおきい" có nghĩa trái ngược với từ nào?', options: ['ちいさい', 'あたらしい', 'かわいい', 'あかい'], ans: 0, exp: '"おおきい" (to lớn) đối nghĩa với "ちいさい" (nhỏ bé).' },
      { q: 'Chữ Hán "金" trong "金曜日" mang nghĩa là gì?', options: ['Mộc (cây)', 'Thổ (đất)', 'Kim (vàng, tiền, thứ Sáu)', 'Thủy (nước)'], ans: 2, exp: 'Chữ 金 là KIM, tượng trưng cho kim loại, vàng, tiền bạc và thứ Sáu.' }
    ]
  },

  {
    num: 6,
    book: 1,
    titleJp: 'いくらですか',
    titleRomaji: 'Ikura desu ka',
    titleVi: 'Bao nhiêu tiền ạ?',
    topic: 'Hỏi giá, mua hàng, sử dụng số tiền và cách nói giá cả; chữ Hán 花、大、小、円',
    target: 'Học sinh biết hỏi giá tiền hàng hóa, đếm các mệnh giá hàng trăm, hàng nghìn Yên (円) và thực hành mua bán đơn giản tại cửa hàng. Học 4 chữ Hán: 花、大、小、円.',
    vocab: [
      { jp: 'いくら', romaji: 'ikura', vi: 'bao nhiêu tiền', type: 'Từ để hỏi', kanji: '' },
      { jp: '～えん', romaji: '~en', vi: 'đồng Yên (tiền Nhật)', type: 'Đơn vị tiền', kanji: '～円' },
      { jp: 'ひゃく', romaji: 'hyaku', vi: '100 (một trăm)', type: 'Số đếm', kanji: '百' },
      { jp: 'さんびゃく', romaji: 'sanbyaku', vi: '300 (ba trăm)', type: 'Số đếm', kanji: '三百' },
      { jp: 'ろっぴゃく', romaji: 'roppyaku', vi: '600 (sáu trăm)', type: 'Số đếm', kanji: '六百' },
      { jp: 'はっぴゃく', romaji: 'happyaku', vi: '800 (tám trăm)', type: 'Số đếm', kanji: '八百' },
      { jp: 'せん', romaji: 'sen', vi: '1.000 (một nghìn)', type: 'Số đếm', kanji: '千' },
      { jp: 'さんぜん', romaji: 'sanzen', vi: '3.000 (ba nghìn)', type: 'Số đếm', kanji: '三千' },
      { jp: 'いちまん', romaji: 'ichiman', vi: '10.000 (mười nghìn / một vạn)', type: 'Số đếm', kanji: '一万' },
      { jp: 'おかね', romaji: 'okane', vi: 'tiền bạc', type: 'Danh từ', kanji: 'お金' },
      { jp: 'みせ', romaji: 'mise', vi: 'cửa hàng / tiệm', type: 'Danh từ', kanji: '店' },
      { jp: 'ください', romaji: 'kudasai', vi: 'xin hãy bán cho tôi / cho tôi cái này', type: 'Mẫu câu', kanji: '' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu hỏi và trả lời giá tiền: これは いくらですか',
        desc: 'Hỏi giá của đồ vật đang xem.',
        formula: 'Câu hỏi: [Đồ vật]は いくらですか。\nCâu trả lời: [Số tiền]えんです。',
        examples: [
          { jp: 'この ぼうしは いくらですか。 - 800えんです。', vi: 'Chiếc mũ này bao nhiêu tiền ạ? - 800 yên ạ.' },
          { jp: 'これは 1,500えんです。', vi: 'Cái này 1.500 yên (sen gohyaku en).' }
        ]
      },
      {
        title: '2. Mẫu câu quyết định mua hàng: これを ください',
        desc: 'Dùng khi muốn yêu cầu người bán hàng lấy món đồ mình đã chọn.',
        formula: '[Đồ vật]を ください。',
        examples: [
          { jp: 'この あおい ボールを ください。', vi: 'Xin lấy cho cháu quả bóng màu xanh này ạ.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'てんいん (Người bán hàng)',
      speaker2: 'リン (Linh)',
      lines: [
        { spk: 'てんいん', jp: 'いらっしゃいませ！', vi: 'Kính chào quý khách!' },
        { spk: 'リン', jp: 'すみません。この ノートは いくらですか。', vi: 'Xin lỗi, quyển vở này bao nhiêu tiền ạ?' },
        { spk: 'てんいん', jp: 'それは 200えんです。', vi: 'Quyển đó giá 200 yên ạ.' },
        { spk: 'リン', jp: 'じゃ、この えんぴつは いくらですか。', vi: 'Thế còn chiếc bút chì này bao nhiêu tiền ạ?' },
        { spk: 'てんいん', jp: 'えんぴつは 100えんです。', vi: 'Bút chì giá 100 yên ạ.' },
        { spk: 'リン', jp: 'ノートと えんぴつを ください。 - ありがとう ございます！', vi: 'Cho cháu lấy quyển vở và chiếc bút chì ạ. - Cảm ơn cháu!' }
      ]
    },
    kanjiList: [
      { char: '花', on: 'カ (ka)', kun: 'はな (hana)', strokes: 7, mean: 'HOA (bông hoa)', word: '花 (はな - hoa), 花火 (はなび - pháo hoa)' },
      { char: '大', on: 'ダイ / タイ (dai / tai)', kun: 'おお (oo)', strokes: 3, mean: 'ĐẠI (to lớn)', word: '大きい (おおきい - to lớn), 大学 (だいがく - đại học)' },
      { char: '小', on: 'ショウ (shou)', kun: 'ちい / こ (chii / ko)', strokes: 3, mean: 'TIỂU (nhỏ bé)', word: '小さい (ちいさい - nhỏ bé), 小学校 (しょうがっこう - trường tiểu học)' },
      { char: '円', on: 'エン (en)', kun: 'まる (maru)', strokes: 4, mean: 'VIÊN (đồng Yên, hình tròn)', word: '100円 (ひゃくえん - 100 yên), 円 (えん - đồng Yên)' }
    ],
    skills: {
      listening: 'Luyện nghe các mức giá tiền (300 yên, 500 yên, 1200 yên) và ghi lại con số.',
      speaking: 'Thực hành đóng vai đi chợ mua đồ lưu niệm: "いくらですか - [Số tiền]えんです".',
      reading: 'Đọc bảng giá thực đơn đơn giản ở tiệm bánh ngọt Nhật Bản.',
      writing: 'Tập viết các chữ Hán: 花 (Hoa), 大 (Đại), 小 (Tiểu), 円 (Viên).'
    },
    culture: {
      title: 'Đồng tiền Yên Nhật (円) và các mệnh giá tiền xu',
      content: 'Đơn vị tiền tệ chính thức của Nhật Bản là Yên (Yen - kí hiệu ¥, chữ Hán là 円). Nước Nhật sử dụng rất phổ biến tiền xu với 6 mệnh giá: 1 yên (nhôm rất nhẹ), 5 yên (có lỗ tròn may mắn), 10 yên (đồng), 50 yên (có lỗ), 100 yên và 500 yên. Học sinh tiểu học Nhật Bản thường có một chiếc ví nhỏ đựng tiền xu để tự mua văn phòng phẩm.'
    },
    quizzes: [
      { q: '"300 yên" trong tiếng Nhật được phát âm là:', options: ['さんひゃくえん', 'さんびゃくえん', 'さんぴゃくえん', 'さんえん'], ans: 1, exp: 'Số 300 có biến âm đọc là "さんびゃくえん" (sanbyaku en).' },
      { q: 'Mẫu câu nào dùng để hỏi giá tiền?', options: ['どこですか。', 'いつですか。', 'いくらですか。', 'だれですか。'], ans: 2, exp: '"いくらですか" nghĩa là "Bao nhiêu tiền ạ?".' },
      { q: 'Chữ Hán "円" có nghĩa là gì?', options: ['Bông hoa', 'Đồng Yên Nhật', 'To lớn', 'Nhỏ bé'], ans: 1, exp: 'Chữ 円 (VIÊN) là đơn vị tiền Yên của Nhật Bản.' },
      { q: 'Khi muốn nói "Lấy cho tôi cái này", người Nhật nói:', options: ['これです。', 'これを ください。', 'これですか。', 'これが あります。'], ans: 1, exp: '"これを ください" dùng để yêu cầu lấy món đồ mình chọn mua.' }
    ]
  },

  // ÔN TẬP 2
  {
    num: 'review_2',
    isReview: true,
    book: 1,
    titleJp: 'おさらい 2 (Ôn tập 2)',
    titleVi: 'Củng cố cách nói mong muốn, lựa chọn đồ vật, mua sắm và hỏi giá',
    summary: 'Hệ thống hóa kiến thức trọng tâm Bài 4 đến Bài 6: Mẫu câu mong muốn (~が ほしいです), từ chỉ định và gợi ý (この/その/あの ～は どうですか), hỏi giá tiền (いくらですか), hệ thống số đếm tiền trăm, tiền nghìn Yên và các chữ Hán: 日、月、火、水、木、金、土、花、大、小、円.',
    quizzes: [
      { q: '"Tôi muốn có một chiếc máy ảnh":', options: ['カメラが ほしいです。', 'カメラを かいます。', 'カメラは どうですか。', 'カメラが あります。'], ans: 0, exp: 'Cấu trúc mong muốn có đồ vật là [Đồ vật]が ほしいです.' },
      { q: 'Chữ Hán ghép "小学校" có nghĩa là gì?', options: ['Trường đại học', 'Trường tiểu học', 'Trường cấp 2', 'Bệnh viện'], ans: 1, exp: '"小学校" (Tiểu học hiệu) nghĩa là trường tiểu học.' },
      { q: '500 yên đọc là:', options: ['ごひゃくえん', 'ごびゃくえん', 'ごせんえん', 'ごえん'], ans: 0, exp: '500 yên đọc là "ごひゃくえん" (gohyaku en).' },
      { q: 'Để khen món quà "Đẹp và dễ thương nhỉ!", ta nói:', options: ['かわいいですね！', 'まずいですね！', 'たかいですね！', 'わるいですね！'], ans: 0, exp: '"かわいいですね" mang nghĩa dễ thương/xinh xắn nhỉ.' }
    ]
  },

  {
    num: 7,
    book: 1,
    titleJp: 'あしたの てんきは どうですか',
    titleRomaji: 'Ashita no tenki wa dou desu ka',
    titleVi: 'Thời tiết ngày mai thế nào?',
    topic: 'Thời tiết, dự báo thời tiết, cách hỏi và trả lời về thời tiết; chữ Hán 今、雨、天、気',
    target: 'Học sinh biết hỏi và trả lời về thời tiết (nắng, mưa, nhiều mây, tuyết), nắm được các tính từ cảm giác nhiệt độ bốn mùa (ấm, nóng, mát, lạnh). Học 4 chữ Hán: 今、雨、天、気.',
    vocab: [
      { jp: 'てんき', romaji: 'tenki', vi: 'thời tiết', type: 'Danh từ', kanji: '天気' },
      { jp: 'てんきよほう', romaji: 'tenkiyohou', vi: 'dự báo thời tiết', type: 'Danh từ', kanji: '天気予報' },
      { jp: 'はれ', romaji: 'hare', vi: 'trời nắng / quang đãng', type: 'Danh từ', kanji: '晴れ' },
      { jp: 'あめ', romaji: 'ame', vi: 'mưa', type: 'Danh từ', kanji: '雨' },
      { jp: 'くもり', romaji: 'kumori', vi: 'nhiều mây / âm u', type: 'Danh từ', kanji: '曇り' },
      { jp: 'ゆき', romaji: 'yuki', vi: 'tuyết', type: 'Danh từ', kanji: '雪' },
      { jp: 'かぜ', romaji: 'kaze', vi: 'gió', type: 'Danh từ', kanji: '風' },
      { jp: 'きょう', romaji: 'kyou', vi: 'hôm nay', type: 'Danh từ', kanji: '今日' },
      { jp: 'あした', romaji: 'ashita', vi: 'ngày mai', type: 'Danh từ', kanji: '明日' },
      { jp: 'きのう', romaji: 'kinou', vi: 'hôm qua', type: 'Danh từ', kanji: '昨日' },
      { jp: 'あたたかい', romaji: 'atatakai', vi: 'ấm áp', type: 'Tính từ đuôi i', kanji: '暖かい' },
      { jp: 'あつい', romaji: 'atsui', vi: 'nóng bức', type: 'Tính từ đuôi i', kanji: '暑い' },
      { jp: 'すずしい', romaji: 'suzushii', vi: 'mát mẻ', type: 'Tính từ đuôi i', kanji: '涼しい' },
      { jp: 'さむい', romaji: 'samui', vi: 'lạnh giá', type: 'Tính từ đuôi i', kanji: '寒い' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu hỏi và trả lời thời tiết: [Thời gian]の てんきは どうですか',
        desc: 'Hỏi tình hình thời tiết vào một ngày cụ thể.',
        formula: 'Câu hỏi: [Thời gian]の てんきは どうですか。\nCâu trả lời: [Hiện tượng thời tiết]です。 / [Tính từ nhiệt độ]です。',
        examples: [
          { jp: 'きょうの てんきは どうですか。 - はれです。あたたかいです。', vi: 'Thời tiết hôm nay thế nào? - Trời nắng và ấm áp.' },
          { jp: 'あしたの てんきは あめです。すずしいです。', vi: 'Ngày mai trời mưa và mát mẻ.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'アナウンサー (Phát thanh viên)',
      speaker2: 'ケン (Ken)',
      lines: [
        { spk: 'アナウンサー', jp: 'あしたの てんきよほうです。とうきょうは はれでしょう。', vi: 'Bản tin dự báo thời tiết ngày mai: Tokyo trời sẽ nắng quang đãng.' },
        { spk: 'ケン', jp: 'おとうさん、あしたの てんきは はれですよ。あたたかいです。', vi: 'Bố ơi, thời tiết ngày mai trời nắng đấy ạ. Trời sẽ ấm áp.' },
        { spk: 'おとうさん', jp: 'そうか。じゃ、あした こうえんへ あそびに 行こうね！', vi: 'Vậy hả con. Thế thì ngày mai cả nhà mình cùng đi công viên chơi nhé!' }
      ]
    },
    kanjiList: [
      { char: '今', on: 'コン / キン (kon / kin)', kun: 'いま (ima)', strokes: 4, mean: 'KIM (bây giờ, nay)', word: '今 (いま - bây giờ), 今日 (きょう - hôm nay)' },
      { char: '雨', on: 'ウ (u)', kun: 'あめ / あま (ame / ama)', strokes: 8, mean: 'VŨ (mưa)', word: '雨 (あめ - trời mưa), 大雨 (おおあめ - mưa to)' },
      { char: '天', on: 'テン (ten)', kun: 'あめ / あま (ame / ama)', strokes: 4, mean: 'THIÊN (trời)', word: '天気 (てんき - thời tiết), 天国 (てんごく - thiên đường)' },
      { char: '気', on: 'キ (ki)', kun: '', strokes: 6, mean: 'KHÍ (khí chất, tinh thần)', word: '天気 (てんき - thời tiết), 元気 (げんき - khỏe mạnh)' }
    ],
    skills: {
      listening: 'Nghe bản tin dự báo thời tiết ở các thành phố Tokyo, Kyoto, Sapporo và đánh dấu ký hiệu thời tiết.',
      speaking: 'Đóng vai phát thanh viên nhí thông báo thời tiết ngày mai ở Hà Nội / TP.HCM.',
      reading: 'Đọc bảng biểu thời tiết 7 ngày trong tuần trên báo thiếu nhi.',
      writing: 'Viết 4 chữ Hán: 今 (Kim), 雨 (Vũ), 天 (Thiên), 気 (Khí).'
    },
    culture: {
      title: 'Búp bê cầu nắng Teru Teru Bozu (てるてる坊主)',
      content: 'Teru Teru Bozu là búp bê làm bằng giấy hoặc vải trắng nhỏ có vẽ mặt cười ngộ nghĩnh, được trẻ em Nhật Bản treo ngược bên cửa sổ trước những chuyến đi dã ngoại hay ngày hội thao để cầu mong ngày mai trời nắng đẹp không mưa.'
    },
    quizzes: [
      { q: '"Trời nhiều mây, âm u" trong tiếng Nhật là:', options: ['はれ', 'あめ', 'くもり', 'ゆき'], ans: 2, exp: '"くもり" có nghĩa là trời nhiều mây, âm u.' },
      { q: 'Chữ Hán ghép "天気" đọc là:', options: ['てんき', 'あめき', 'いまき', 'きょうき'], ans: 0, exp: 'Chữ 天氣 đọc là "てんき" (tenki - thời tiết).' },
      { q: 'Tính từ nào miêu tả cảm giác "ấm áp"?', options: ['あつい', 'さむい', 'すずしい', 'あたたかい'], ans: 3, exp: '"あたたかい" có nghĩa là ấm áp.' },
      { q: 'Chữ Hán "雨" mang ý nghĩa gì?', options: ['Trời nắng', 'Trời mưa', 'Gió lớn', 'Tuyết rơi'], ans: 1, exp: 'Chữ 雨 (VŨ) nghĩa là mưa (あめ).' }
    ]
  },

  {
    num: 8,
    book: 1,
    titleJp: 'にちようびに なにを しますか',
    titleRomaji: 'Nichiyoubi ni nani o shimasu ka',
    titleVi: 'Chủ nhật cậu sẽ làm gì?',
    topic: 'Dự định cuối tuần, nói sẽ làm gì, rủ bạn cùng tham gia hoạt động; chữ Hán 何、休、見、来',
    target: 'Học sinh biết chia sẻ kế hoạch cuối tuần, rủ bạn bè cùng tham gia hoạt động bằng mẫu câu rủ rê lịch sự "~ませんか", đáp lại lời mời. Học 4 chữ Hán: 何、休、見、来.',
    vocab: [
      { jp: 'しゅうまつ', romaji: 'shuumatsu', vi: 'cuối tuần', type: 'Danh từ', kanji: '週末' },
      { jp: 'いっしょに', romaji: 'isshoni', vi: 'cùng nhau', type: 'Phó từ', kanji: '' },
      { jp: 'いいですね', romaji: 'ii desu ne', vi: 'được đấy nhỉ / đồng ý', type: 'Mẫu câu', kanji: '' },
      { jp: 'ちょっと...', romaji: 'chotto...', vi: 'hơi tiếc... (từ chối khéo)', type: 'Mẫu câu', kanji: '' },
      { jp: 'こうえん', romaji: 'kouen', vi: 'công viên', type: 'Danh từ', kanji: '公園' },
      { jp: 'プール', romaji: 'puuru', vi: 'bể bơi / hồ bơi', type: 'Danh từ', kanji: '' },
      { jp: 'どうぶつえん', romaji: 'doubutsuen', vi: 'vườn bách thú / sở thú', type: 'Danh từ', kanji: '動物園' },
      { jp: 'えいがかん', romaji: 'eigakan', vi: 'rạp chiếu phim', type: 'Danh từ', kanji: '映画館' },
      { jp: 'あそびます', romaji: 'asobimasu', vi: 'chơi đùa', type: 'Động từ', kanji: '遊びます' },
      { jp: 'やすみます', romaji: 'yasumimasu', vi: 'nghỉ ngơi', type: 'Động từ', kanji: '休みます' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu hỏi dự định: [Thời gian]に なにを しますか',
        desc: 'Hỏi đối phương sẽ làm gì vào một mốc thời gian sắp tới.',
        formula: 'Câu hỏi: [Thời gian]に なにを しますか。\nCâu trả lời: [Hành động]ます。',
        examples: [
          { jp: 'にちようびに なにを しますか。 - ともだちと サッカーを します。', vi: 'Chủ nhật cậu sẽ làm gì? - Mình sẽ đá bóng cùng bạn.' }
        ]
      },
      {
        title: '2. Mẫu câu rủ rê, mời mọc lịch sự: いっしょに [Động từ thể ます bỏ ます]ませんか',
        desc: 'Dùng để rủ ai đó cùng tham gia một hoạt động.',
        formula: 'いっしょに [Động từ]ませんか。\n- Đồng ý: いいですね。いきましょう！\n- Từ chối khéo: すみません、ちょっと...',
        examples: [
          { jp: 'いっしょに えいがを みませんか。 - いいですね！', vi: 'Cậu cùng xem phim với mình không? - Hay quá, cùng xem nhé!' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'マイ (Mai)',
      speaker2: 'さくら (Sakura)',
      lines: [
        { spk: 'マイ', jp: 'さくらさん、にちようびに なにを しますか。', vi: 'Sakura ơi, Chủ nhật này cậu sẽ làm gì thế?' },
        { spk: 'さくら', jp: 'うーん、まだ なにも わかりません。マイさんは？', vi: 'Ừm, mình cũng chưa có kế hoạch gì. Còn Mai?' },
        { spk: 'マイ', jp: 'わたしは どうぶつえんへ いきます。いっしょに 行きませんか。', vi: 'Mình sẽ đi sở thú. Cậu đi cùng mình không?' },
        { spk: 'さくら', jp: 'いいですね！ぜひ いっしょに 行きましょう！', vi: 'Được đấy nhỉ! Nhất định mình sẽ đi cùng cậu!' }
      ]
    },
    kanjiList: [
      { char: '何', on: 'カ (ka)', kun: 'なに / なん (nani / nan)', strokes: 7, mean: 'HÀ (cái gì)', word: '何 (なに / なん - cái gì), 何時 (なんじ - mấy giờ)' },
      { char: '休', on: 'キュウ (kyuu)', kun: 'やす (yasu)', strokes: 6, mean: 'HƯU (nghỉ ngơi)', word: '休み (やすみ - ngày nghỉ), 休日 (きゅうじつ - ngày lễ nghỉ)' },
      { char: '見', on: 'ケン (ken)', kun: 'み (mi)', strokes: 7, mean: 'KIẾN (nhìn, xem)', word: '見ます (みます - xem, nhìn), 見学 (けんがく - tham quan học tập)' },
      { char: '来', on: 'ライ (rai)', kun: 'く / き / こ (ku / ki / ko)', strokes: 7, mean: 'LAI (đến)', word: '来ます (きます - đến), 来週 (らいしゅう - tuần sau)' }
    ],
    skills: {
      listening: 'Nghe đoạn rủ rê và xác định người nghe đồng ý hay từ chối.',
      speaking: 'Thực hành rủ bạn: "いっしょに こうえんへ 行きませんか - いいですね".',
      reading: 'Đọc đoạn nhật ký kể về ngày nghỉ cuối tuần ở Tokyo.',
      writing: 'Tập viết các chữ Hán: 何 (Hà), 休 (Hưu), 見 (Kiến), 来 (Lai).'
    },
    culture: {
      title: 'Hoạt động dã ngoại cuối tuần và Lễ hội Hanami ngắm hoa',
      content: 'Vào cuối tuần, các gia đình Nhật Bản thường cùng nhau chuẩn bị hộp cơm bento xinh xắn đi dã ngoại ở công viên. Đặc biệt vào mùa xuân tháng 4, mọi người tụ tập dưới những tán hoa anh đào rực rỡ để thưởng ngoạn lễ hội Hanami (花見 - ngắm hoa), ca hát và tận hưởng thiên nhiên tươi đẹp.'
    },
    quizzes: [
      { q: 'Đuôi câu rủ rê "Cùng làm... không?" trong tiếng Nhật là:', options: ['～ましょう', '～ませんか', '～たいです', '～ています'], ans: 1, exp: 'Đuôi "~ませんか" là câu hỏi rủ rê, mời mọc lịch sự.' },
      { q: 'Khi muốn từ chối khéo một lời rủ rê, người Nhật thường nói:', options: ['だめです！', 'いいえ、きらいです。', 'すみません、ちょっと...', 'わかりません。'], ans: 2, exp: 'Người Nhật luôn lịch sự tránh từ chối trực diện, thay vào đó dùng "すみません、ちょっと...".' },
      { q: 'Chữ Hán "休" có nghĩa là gì?', options: ['Nghỉ ngơi (HƯU)', 'Đến (LAI)', 'Xem (KIẾN)', 'Cái gì (HÀ)'], ans: 0, exp: 'Chữ 休 gồm bộ Nhân (người) dựa vào Mộc (cây), nghĩa là nghỉ ngơi.' },
      { q: 'Từ nào có nghĩa là "công viên"?', options: ['どうぶつえん', 'こうえん', 'えいがかん', 'プール'], ans: 1, exp: '"こうえん" (công viên) là nơi vui chơi xanh mát.' }
    ]
  },

  // ÔN TẬP 3
  {
    num: 'review_3',
    isReview: true,
    book: 1,
    titleJp: 'おさらい 3 (Ôn tập 3)',
    titleVi: 'Củng cố thời tiết và kế hoạch cuối tuần',
    summary: 'Củng cố kiến thức Bài 7 & Bài 8: Mẫu câu hỏi và miêu tả thời tiết, các hiện tượng tự nhiên và tính từ nhiệt độ; kế hoạch cuối tuần và lời rủ rê lịch sự (~ませんか); hệ thống chữ Hán: 今、雨、天、気、何、休、見、来.',
    quizzes: [
      { q: '"Thời tiết ngày mai trời mưa và lạnh":', options: ['あしたの てんきは あめです。さむいです。', 'あしたの てんきは はれです。あついです。', 'あしたの てんきは ゆきです。すずしいです。', 'あしたの てんきは くもりです。あたたかいです。'], ans: 0, exp: 'Mưa là "あめ", lạnh là "さむい".' },
      { q: 'Chữ Hán ghép "花見" có âm đọc và nghĩa là gì?', options: ['はなみ (ngắm hoa anh đào)', 'てんき (thời tiết)', 'きゅうじつ (ngày nghỉ)', 'らいしゅう (tuần sau)'], ans: 0, exp: '花 (hoa) + 見 (ngắm) = はなみ (lễ hội ngắm hoa).' },
      { q: '"いっしょに サッカーを しませんか" - Hãy chọn câu đồng ý thích hợp:', options: ['いいですね。しましょう！', 'ちょっと...', 'しません。', 'だめです。'], ans: 0, exp: '"いいですね。しましょう！" là câu đồng ý hào hứng và lịch sự.' },
      { q: 'Chữ Hán nào sau đây có âm On là "ライ", âm Kun là "く/き/こ" (đến)?', options: ['見', '休', '来', '何'], ans: 2, exp: 'Chữ 来 là LAI, nghĩa là đến (きます).' }
    ]
  },

  // TẬP 2 (BÀI 9 - BÀI 16 + 3 BÀI ÔN TẬP + TỔNG ÔN)
  {
    num: 9,
    book: 2,
    titleJp: 'テト休みに どこへ 行きますか',
    titleRomaji: 'Teto-yasumi ni doko e ikimasu ka',
    titleVi: 'Kỳ nghỉ Tết cậu sẽ đi đâu?',
    topic: 'Hỏi và trả lời về địa điểm đi chơi trong kỳ nghỉ, đi với ai, đi đâu; mẫu ～に どこへ 行きますか, ～と ～へ 行きます; chữ Hán 山、川、田、行',
    target: 'Học sinh biết hỏi và trả lời về kỳ nghỉ, nơi muốn đi và người đồng hành bằng trợ từ「と」(cùng với). Học 4 chữ Hán chủ đề thiên nhiên và di chuyển: 山、川、田、行.',
    vocab: [
      { jp: 'テトやすみ', romaji: 'Teto-yasumi', vi: 'kỳ nghỉ Tết', type: 'Danh từ', kanji: 'テト休み' },
      { jp: 'なつやすみ', romaji: 'natsuyasumi', vi: 'kỳ nghỉ hè', type: 'Danh từ', kanji: '夏休み' },
      { jp: 'ふゆやすみ', romaji: 'fuyuyasumi', vi: 'kỳ nghỉ đông', type: 'Danh từ', kanji: '冬休み' },
      { jp: 'どこ', romaji: 'doko', vi: 'ở đâu / đâu', type: 'Từ để hỏi', kanji: '' },
      { jp: '～と', romaji: '~to', vi: 'với / cùng với (người)', type: 'Trợ từ', kanji: '' },
      { jp: 'かぞく', romaji: 'kazoku', vi: 'gia đình', type: 'Danh từ', kanji: '家族' },
      { jp: 'ともだち', romaji: 'tomodachi', vi: 'bạn bè', type: 'Danh từ', kanji: '友達' },
      { jp: 'うみ', romaji: 'umi', vi: 'biển', type: 'Danh từ', kanji: '海' },
      { jp: 'やま', romaji: 'yama', vi: 'núi', type: 'Danh từ', kanji: '山' },
      { jp: 'かわ', romaji: 'kawa', vi: 'sông', type: 'Danh từ', kanji: '川' },
      { jp: 'ふるさと', romaji: 'furusato', vi: 'quê hương', type: 'Danh từ', kanji: '故郷' },
      { jp: 'りょこう', romaji: 'ryokou', vi: 'du lịch', type: 'Danh từ', kanji: '旅行' },
      { jp: 'いきます', romaji: 'ikimasu', vi: 'đi', type: 'Động từ', kanji: '行きます' },
      { jp: 'きます', romaji: 'kimasu', vi: 'đến', type: 'Động từ', kanji: '来ます' },
      { jp: 'かえります', romaji: 'kaerimasu', vi: 'về', type: 'Động từ', kanji: '帰ります' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu hỏi đi đâu trong kỳ nghỉ: [Kỳ nghỉ]に どこへ 行きますか',
        desc: 'Hỏi về địa điểm dự định đến thăm.',
        formula: 'Câu hỏi: [Kỳ nghỉ]に どこへ 行きますか。\nCâu trả lời: [Địa điểm]へ 行きます。',
        examples: [
          { jp: 'テト休みに どこへ 行きますか。 - ダナンへ 行きます。', vi: 'Kỳ nghỉ Tết cậu đi đâu? - Mình đi Đà Nẵng.' }
        ]
      },
      {
        title: '2. Mẫu câu chỉ người đồng hành: [Người]と [Địa điểm]へ 行きます',
        desc: 'Trợ từ「と」(to) mang nghĩa là "cùng với ai đó".',
        formula: '[Người]と [Địa điểm]へ 行きます。',
        examples: [
          { jp: 'かぞくと うみへ 行きます。', vi: 'Mình đi biển cùng với gia đình.' },
          { jp: 'ともだちと やまへ 行きます。', vi: 'Mình đi leo núi cùng bạn bè.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'ナム (Nam)',
      speaker2: 'ケン (Ken)',
      lines: [
        { spk: 'ナム', jp: 'ケンさん、もうすぐ テト休みですね。どこへ 行きますか。', vi: 'Ken ơi, sắp đến kỳ nghỉ Tết rồi nhỉ. Cậu sẽ đi đâu thế?' },
        { spk: 'ケン', jp: 'わたしは かぞくと ふるさとへ かえります。ナムさんは？', vi: 'Mình sẽ về quê cùng với gia đình. Còn Nam thì sao?' },
        { spk: 'ナム', jp: 'わたしは ともだちと フエへ りょこうに 行きます。', vi: 'Mình sẽ đi du lịch Huế cùng với bạn bè.' },
        { spk: 'ケン', jp: 'いいですね！たのしい 休みに なると いいですね。', vi: 'Tuyệt quá! Chúc cậu có một kỳ nghỉ thật vui vẻ nhé.' }
      ]
    },
    kanjiList: [
      { char: '山', on: 'サン (san)', kun: 'やま (yama)', strokes: 3, mean: 'SƠN (núi)', word: '山 (やま - ngọn núi), 富士山 (ふじさん - núi Phú Sĩ)' },
      { char: '川', on: 'セン (sen)', kun: 'かわ (kawa)', strokes: 3, mean: 'XUYÊN (sông)', word: '川 (かわ - dòng sông), 小川 (おがわ - con suối nhỏ)' },
      { char: '田', on: 'デン (den)', kun: 'た (ta)', strokes: 5, mean: 'ĐIỀN (ruộng đồng)', word: '田んぼ (たんぼ - đồng ruộng), 山田 (やまだ - họ Yamada)' },
      { char: '行', on: 'コウ / ギョウ (kou / gyou)', kun: 'い / ゆ (i / yu)', strokes: 6, mean: 'HÀNH (đi)', word: '行きます (いきます - đi), 旅行 (りょこう - du lịch)' }
    ],
    skills: {
      listening: 'Nghe đoạn hội thoại và nối đúng tên bạn học sinh với địa điểm du lịch tương ứng.',
      speaking: 'Hỏi đáp với bạn: "やすみに どこへ 行きますか - [Người]と [Nơi]へ 行きます".',
      reading: 'Đọc đoạn văn ngắn giới thiệu về kỳ nghỉ Tết cổ truyền ở Việt Nam.',
      writing: 'Viết 4 chữ Hán: 山 (Sơn), 川 (Xuyên), 田 (Điền), 行 (Hành).'
    },
    culture: {
      title: 'Núi Phú Sĩ (Fuji-san - 富士山) - Biểu tượng hùng vĩ của nước Nhật',
      content: 'Núi Phú Sĩ là ngọn núi cao nhất Nhật Bản (3.776 mét), quanh năm tuyết trắng bao phủ đỉnh núi. Đây là Di sản Văn hóa Thế giới được UNESCO công nhận và là nguồn cảm hứng bất tận trong thi ca, hội họa và tinh thần kiên cường của người dân xứ Phù Tang.'
    },
    quizzes: [
      { q: 'Trợ từ mang nghĩa "cùng với ai" trong câu "かぞく____ 行きます" là:', options: ['と', 'へ', 'に', 'を'], ans: 0, exp: 'Trợ từ "と" biểu thị người cùng thực hiện hành động.' },
      { q: 'Chữ Hán ghép "富士山" đọc là:', options: ['ふじかわ', 'ふじやま', 'ふじさん', 'ふじでん'], ans: 2, exp: 'Núi Phú Sĩ đọc là "ふじさん" (Fuji-san).' },
      { q: '"Tôi về quê cùng với gia đình":', options: ['かぞくと ふるさとへ かえります。', 'かぞくへ ふるさとと かえります。', 'かぞくに ふるさとを いきます。', 'かぞくと ふるさとで みます。'], ans: 0, exp: 'Cấu trúc [Người]と [Nơi]へ かえります: かぞくと ふるさとへ かえります.' },
      { q: 'Chữ Hán "川" tượng trưng cho hình ảnh thiên nhiên nào?', options: ['Ngọn núi', 'Dòng sông', 'Cánh đồng', 'Bầu trời'], ans: 1, exp: 'Chữ 川 (XUYÊN) là 3 nét tượng hình mô phỏng dòng sông chảy.' }
    ]
  },

  {
    num: 10,
    book: 2,
    titleJp: 'れっしゃで 行きます',
    titleRomaji: 'Ressha de ikimasu',
    titleVi: 'Mình đi bằng tàu hỏa',
    topic: 'Phương tiện giao thông, thời gian di chuyển; mẫu ～で 行きます, 何じかんぐらいですか; chữ Hán 父、母、友、人',
    target: 'Học sinh biết nói các loại phương tiện giao thông (tàu hỏa, xe buýt, máy bay, taxi), sử dụng trợ từ phương tiện「で」, hỏi và trả lời về thời gian di chuyển. Học 4 chữ Hán: 父、母、友、人.',
    vocab: [
      { jp: 'れっしゃ', romaji: 'ressha', vi: 'xe lửa / tàu hỏa', type: 'Danh từ', kanji: '列車' },
      { jp: 'でんしゃ', romaji: 'densha', vi: 'tàu điện', type: 'Danh từ', kanji: '電車' },
      { jp: 'しんかんせん', romaji: 'shinkansen', vi: 'tàu siêu tốc Shinkansen', type: 'Danh từ', kanji: '新幹線' },
      { jp: 'バス', romaji: 'basu', vi: 'xe buýt', type: 'Danh từ', kanji: '' },
      { jp: 'ひこうき', romaji: 'hikouki', vi: 'máy bay', type: 'Danh từ', kanji: '飛行機' },
      { jp: 'タクシー', romaji: 'takushii', vi: 'xe taxi', type: 'Danh từ', kanji: '' },
      { jp: 'ふね', romaji: 'fune', vi: 'tàu thủy / thuyền', type: 'Danh từ', kanji: '船' },
      { jp: 'あるいて', romaji: 'aruite', vi: 'đi bộ', type: 'Phó từ', kanji: '歩いて' },
      { jp: 'なんじかん', romaji: 'nanjikan', vi: 'mấy tiếng / mấy giờ đồng hồ', type: 'Từ để hỏi', kanji: '何時間' },
      { jp: 'ぐらい', romaji: 'gurai', vi: 'khoảng chừng', type: 'Phó từ', kanji: '' },
      { jp: 'かかります', romaji: 'kakarimasu', vi: 'mất bao lâu (thời gian / tiền)', type: 'Động từ', kanji: '' }
    ],
    grammarNotes: [
      {
        title: '1. Trợ từ chỉ phương tiện giao thông「で」(bằng xe gì)',
        desc: 'Đứng sau danh từ chỉ phương tiện di chuyển.',
        formula: '[Phương tiện]で 行きます / きます / かえります',
        examples: [
          { jp: 'れっしゃで 行きます。', vi: 'Đi bằng tàu hỏa.' },
          { jp: 'ひこうきで ハノイへ 行きます。', vi: 'Đi đến Hà Nội bằng máy bay.' }
        ],
        tip: 'Lưu ý: Khi đi bộ, dùng cụm từ "あるいて 行きます" (KHÔNG dùng あるいてで).'
      },
      {
        title: '2. Mẫu câu hỏi và trả lời thời gian di chuyển: 何じかんぐらいですか',
        desc: 'Hỏi khoảng thời gian đi từ điểm A đến điểm B.',
        formula: 'Câu hỏi: 何じかんぐらい かかりますか。\nCâu trả lời: [Số giờ]じかんぐらい かかります。',
        examples: [
          { jp: 'ハノイから ダナンまで ひこうきで 1じかんぐらい かかります。', vi: 'Từ Hà Nội đến Đà Nẵng đi bằng máy bay mất khoảng 1 tiếng.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'アン (An)',
      speaker2: 'マイ (Mai)',
      lines: [
        { spk: 'アン', jp: 'マイさん、テトに ふるさとへ かえりますね。なにで 行きますか。', vi: 'Mai ơi, dịp Tết cậu về quê nhỉ. Cậu đi bằng gì thế?' },
        { spk: 'マイ', jp: 'れっしゃで 行きます。', vi: 'Mình đi bằng tàu hỏa.' },
        { spk: 'アン', jp: 'ふるさとまで 何じかんぐらい かかりますか。', vi: 'Về đến quê mất khoảng mấy tiếng vậy cậu?' },
        { spk: 'マイ', jp: '3じかんぐらい かかります。', vi: 'Mất khoảng 3 tiếng.' }
      ]
    },
    kanjiList: [
      { char: '父', on: 'フ (fu)', kun: 'ちち / とう (chichi / tou)', strokes: 4, mean: 'PHỤ (cha, bố)', word: '父 (ちち - bố tôi), お父さん (おとうさん - bố bạn)' },
      { char: '母', on: 'ボ (bo)', kun: 'はは / かあ (haha / kaa)', strokes: 5, mean: 'MẪU (mẹ)', word: '母 (はは - mẹ tôi), お母さん (おかあさん - mẹ bạn)' },
      { char: '友', on: 'ユウ (yuu)', kun: 'とも (tomo)', strokes: 4, mean: 'HỮU (bạn bè)', word: '友達 (ともだち - bạn bè), 友人 (ゆうじん - bạn thân)' },
      { char: '人', on: 'ジン / ニン (jin / nin)', kun: 'ひと (hito)', strokes: 2, mean: 'NHÂN (người)', word: '人 (ひと - con người), 日本人 (にほんじん - người Nhật)' }
    ],
    skills: {
      listening: 'Nghe phương tiện và thời gian di chuyển để điền vào bảng khảo sát.',
      speaking: 'Hỏi bạn cách đi đến trường và thời gian: "なにで がっこうへ 行きますか".',
      reading: 'Đọc thông tin giới thiệu về mạng lưới tàu điện Shinkansen tốc hành ở Nhật.',
      writing: 'Viết 4 chữ Hán: 父 (Phụ), 母 (Mẫu), 友 (Hữu), 人 (Nhân).'
    },
    culture: {
      title: 'Tàu cao tốc Shinkansen (新幹線) - Biểu tượng công nghệ tàu hỏa Nhật Bản',
      content: 'Shinkansen (tàu viên đạn) là niềm tự hào của ngành giao thông Nhật Bản với vận tốc lên tới hơn 300 km/h. Từ khi khánh thành năm 1964 đến nay, Shinkansen chưa từng xảy ra một vụ tai nạn chết người nào, luôn chạy chuẩn xác đến từng giây và đem lại cảm giác êm ái tuyệt đối cho hành khách.'
    },
    quizzes: [
      { q: 'Trợ từ dùng để chỉ phương tiện giao thông là:', options: ['で', 'へ', 'に', 'を'], ans: 0, exp: 'Trợ từ "で" chỉ phương tiện/công cụ thực hiện hành động.' },
      { q: 'Khi nói "đi bộ đến trường", cách diễn đạt chuẩn là:', options: ['あるいてで がっこうへ 行きます。', 'あるいて がっこうへ 行きます。', 'あしで がっこうへ 行きます。', 'あるくに がっこうへ 行きます。'], ans: 1, exp: 'Đi bộ dùng cụm từ "あるいて 行きます", không thêm trợ từ で.' },
      { q: 'Chữ Hán ghép "友達" đọc là:', options: ['ともだち', 'ちちだち', 'ははだち', 'ひとだち'], ans: 0, exp: 'Chữ 友達 đọc là "ともだち" (tomodachi - bạn bè).' },
      { q: '"Mất khoảng 2 tiếng đồng hồ" được nói là:', options: ['2じです。', '2じかんぐらい かかります。', '2ふんです。', '2にちです。'], ans: 1, exp: 'Thời lượng là "2じかん", khoảng chừng là "ぐらい", mất là "かかります".' }
    ]
  },

  // ÔN TẬP 4
  {
    num: 'review_4',
    isReview: true,
    book: 2,
    titleJp: 'おさらい 4 (Ôn tập 4)',
    titleVi: 'Củng cố địa điểm du lịch, người đi cùng, phương tiện và thời gian di chuyển',
    summary: 'Củng cố tổng thể Bài 9 & Bài 10: Hỏi và trả lời về kỳ nghỉ, trợ từ chỉ người cùng đi (~と), trợ từ phương tiện di chuyển (~で), mẫu câu hỏi thời gian di chuyển (何じかんぐらいですか) và 8 chữ Hán: 山、川、田、行、父、母、友、人.',
    quizzes: [
      { q: '"Tôi đi biển cùng với mẹ bằng xe buýt":', options: ['母と バスで うみへ 行きます。', '母で バスと うみへ 行きます。', '母に バスを うみへ 行きます。', '母と バスへ うみで 行きます。'], ans: 0, exp: '[Người]と [Phương tiện]で [Địa điểm]へ 行きます.' },
      { q: 'Chữ Hán nào có nghĩa là người mẹ (MẪU)?', options: ['父', '母', '友', '人'], ans: 1, exp: 'Chữ 母 là MẪU, nghĩa là người mẹ.' },
      { q: 'Trợ từ nào chỉ hướng đi tới một địa điểm?', options: ['で', 'へ', 'と', 'を'], ans: 1, exp: 'Trợ từ "へ" (đọc là e) chỉ hướng di chuyển đến địa điểm.' },
      { q: '"しんかんせん" là loại phương tiện nào?', options: ['Tàu siêu tốc Shinkansen', 'Xe buýt công cộng', 'Máy bay phản lực', 'Thuyền buồm'], ans: 0, exp: '"しんかんせん" là tàu cao tốc Shinkansen nổi tiếng của Nhật.' }
    ]
  },

  {
    num: 11,
    book: 2,
    titleJp: 'かおりさんは おもしろい 人です',
    titleRomaji: 'Kaori-san wa omoshiroi hito desu',
    titleVi: 'Kaori là một người rất thú vị',
    topic: 'Giới thiệu và miêu tả tính cách một người; các tính từ chỉ đặc điểm, mẫu ～は ～人です; chữ Hán 兄、弟、姉、妹',
    target: 'Học sinh biết miêu tả ngoại hình và tính cách của bạn bè, người thân bằng các tính từ bổ nghĩa cho danh từ 人 (người). Học 4 chữ Hán về anh chị em ruột: 兄、弟、姉、妹.',
    vocab: [
      { jp: 'おもしろい', romaji: 'omoshiroi', vi: 'thú vị / hài hước', type: 'Tính từ đuôi i', kanji: '面白い' },
      { jp: 'やさしい', romaji: 'yasashii', vi: 'hiền từ / tốt bụng', type: 'Tính từ đuôi i', kanji: '優しい' },
      { jp: 'あたまが いい', romaji: 'atama ga ii', vi: 'thông minh', type: 'Cụm tính từ', kanji: '頭がいい' },
      { jp: 'しんせつ（な）', romaji: 'shinsetsu(na)', vi: 'thân thiện / nhiệt tình', type: 'Tính từ đuôi na', kanji: '親切' },
      { jp: 'げんき（な）', romaji: 'genki(na)', vi: 'khỏe mạnh / năng động', type: 'Tính từ đuôi na', kanji: '元気' },
      { jp: 'せが たかい', romaji: 'se ga takai', vi: 'dáng người cao', type: 'Cụm tính từ', kanji: '背が高い' },
      { jp: 'せが ひくい', romaji: 'se ga hikui', vi: 'dáng người thấp', type: 'Cụm tính từ', kanji: '背が低い' },
      { jp: 'かみ', romaji: 'kami', vi: 'mái tóc', type: 'Danh từ', kanji: '髪' },
      { jp: 'ながい', romaji: 'nagai', vi: 'dài', type: 'Tính từ đuôi i', kanji: '長い' },
      { jp: 'みじかい', romaji: 'mijikai', vi: 'ngắn', type: 'Tính từ đuôi i', kanji: '短い' },
      { jp: 'ひと', romaji: 'hito', vi: 'người', type: 'Danh từ', kanji: '人' }
    ],
    grammarNotes: [
      {
        title: '1. Cách dùng tính từ bổ nghĩa cho danh từ「人」(hito)',
        desc: 'Tính từ đứng trước danh từ「人」để miêu tả đặc điểm, tính cách của một người.',
        formula: '- Tính từ đuôi i: [Tính từ -i] + 人 (おもしろい 人, やさしい 人)\n- Tính từ đuôi na: [Tính từ -na] + な + 人 (しんせつな 人, げんきな 人)',
        examples: [
          { jp: 'かおりさんは おもしろい 人です。', vi: 'Bạn Kaori là một người rất thú vị / hài hước.' },
          { jp: 'たけしさんは しんせつな 人です。', vi: 'Bạn Takeshi là một người rất tốt bụng.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'リン (Linh)',
      speaker2: 'ハナ (Hana)',
      lines: [
        { spk: 'リン', jp: 'ハナさん、あそこに いる 人は だれですか。', vi: 'Hana ơi, bạn đang ở đằng kia là ai vậy?' },
        { spk: 'ハナ', jp: 'あ、かおりさんですよ。わたしの 友達です。', vi: 'À, bạn Kaori đấy. Bạn của mình.' },
        { spk: 'リン', jp: 'かおりさんは どんな 人ですか。', vi: 'Kaori là người như thế nào thế?' },
        { spk: 'ハナ', jp: 'かおりさんは とても おもしろい 人です。そして、あたまが いいですよ！', vi: 'Kaori là một người rất thú vị, hài hước. Và cậu ấy thông minh lắm đó!' }
      ]
    },
    kanjiList: [
      { char: '兄', on: 'ケイ / キョウ (kei / kyou)', kun: 'あに / にい (ani / nii)', strokes: 5, mean: 'HUYNH (anh trai)', word: '兄 (あに - anh tôi), お兄さん (おにいさん - anh bạn)' },
      { char: '弟', on: 'テイ / ダイ (tei / dai)', kun: 'おとうと (otouto)', strokes: 7, mean: 'ĐỆ (em trai)', word: '弟 (おとうと - em trai tôi), 兄弟 (きょうだい - anh em)' },
      { char: '姉', on: 'シ (shi)', kun: 'あね / ねえ (ane / nee)', strokes: 8, mean: 'TỶ (chị gái)', word: '姉 (あね - chị tôi), お姉さん (おねえさん - chị bạn)' },
      { char: '妹', on: 'マイ (mai)', kun: 'いもうと (imouto)', strokes: 8, mean: 'MUỘI (em gái)', word: '妹 (いもうと - em gái tôi), 姉妹 (しまい - chị em gái)' }
    ],
    skills: {
      listening: 'Nghe miêu tả đặc điểm ngoại hình và tính cách để đoán tên nhân vật.',
      speaking: 'Giới thiệu về bạn thân hoặc người trong gia đình: "[Tên]は [Tính từ] 人です".',
      reading: 'Đọc bài văn ngắn giới thiệu về các thành viên trong gia đình của bạn học sinh.',
      writing: 'Viết 4 chữ Hán xưng hô anh chị em: 兄 (Huynh), 弟 (Đệ), 姉 (Tỷ), 妹 (Muội).'
    },
    culture: {
      title: 'Cách xưng hô khiêm nhường trong gia đình Nhật Bản',
      content: 'Trong văn hóa Nhật, khi nói về người nhà mình với người ngoài, người Nhật luôn giữ thái độ khiêm tốn (Uchi - trong nhà): gọi bố mình là Chichi (父), mẹ mình là Haha (母), anh trai là Ani (兄), chị gái là Ane (姉). Còn khi nói về người thân của người khác, họ luôn dùng kính ngữ tôn trọng (Soto - bên ngoài): Otousan (お父さん), Okaasan (お母さん), Oniisan (お兄さん), Oneesan (お姉さん).'
    },
    quizzes: [
      { q: 'Tính từ đuôi na "しんせつ" khi bổ nghĩa cho danh từ "人" sẽ là:', options: ['しんせつ 人', 'しんせつな 人', 'しんせつい 人', 'しんせつの 人'], ans: 1, exp: 'Tính từ đuôi na khi bổ nghĩa cho danh từ phải giữ "な" -> しんせつな 人.' },
      { q: 'Chữ Hán "兄" có nghĩa là gì?', options: ['Em trai', 'Anh trai', 'Chị gái', 'Em gái'], ans: 1, exp: 'Chữ 兄 (HUYNH) nghĩa là anh trai.' },
      { q: 'Cụm từ "せが たかい" miêu tả đặc điểm gì?', options: ['Tóc dài', 'Dáng người cao ráo', 'Thông minh', 'Hiền từ'], ans: 1, exp: '"せが たかい" nghĩa là dáng người cao ráo.' },
      { q: 'Để hỏi "Kaori là người như thế nào?", câu hỏi chuẩn là:', options: ['かおりさんは なにですか。', 'かおりさんは どんな 人ですか。', 'かおりさんは だれですか。', 'かおりさんは どこですか。'], ans: 1, exp: '"どんな 人ですか" dùng để hỏi về tính cách, đặc điểm của một người.' }
    ]
  },

  {
    num: 12,
    book: 2,
    titleJp: 'ガンさんは 日本語が じょうずです',
    titleRomaji: 'Gan-san wa nihongo ga jouzu desu',
    titleVi: 'Bạn Giang rất giỏi tiếng Nhật',
    topic: 'Giới thiệu sở trường, sở đoản; cách nói giỏi hoặc chưa giỏi một việc; chữ Hán 男、女、子、話',
    target: 'Học sinh biết khen ngợi sở trường của người khác (じょうず), nói về điểm chưa giỏi (へた/にがて) một cách khiêm tốn. Học 4 chữ Hán: 男、女、子、話.',
    vocab: [
      { jp: 'じょうず（な）', romaji: 'jouzu(na)', vi: 'giỏi / khéo léo', type: 'Tính từ đuôi na', kanji: '上手' },
      { jp: 'へた（な）', romaji: 'heta(na)', vi: 'dở / kém (vụng về)', type: 'Tính từ đuôi na', kanji: '下手' },
      { jp: 'とくい（な）', romaji: 'tokui(na)', vi: 'sở trường / tự tin', type: 'Tính từ đuôi na', kanji: '得意' },
      { jp: 'にがて（な）', romaji: 'nigate(na)', vi: 'sở đoản / không giỏi', type: 'Tính từ đuôi na', kanji: '苦手' },
      { jp: 'にほんご', romaji: 'nihongo', vi: 'tiếng Nhật', type: 'Danh từ', kanji: '日本語' },
      { jp: 'ベトナムご', romaji: 'betonamugo', vi: 'tiếng Việt', type: 'Danh từ', kanji: 'ベトナム語' },
      { jp: 'えいご', romaji: 'eigo', vi: 'tiếng Anh', type: 'Danh từ', kanji: '英語' },
      { jp: 'え', romaji: 'e', vi: 'tranh vẽ', type: 'Danh từ', kanji: '絵' },
      { jp: 'うた', romaji: 'uta', vi: 'bài hát', type: 'Danh từ', kanji: '歌' },
      { jp: 'りょうり', romaji: 'ryouri', vi: 'nấu ăn / món ăn', type: 'Danh từ', kanji: '料理' },
      { jp: 'すうがく', romaji: 'suugaku', vi: 'môn Toán', type: 'Danh từ', kanji: '数学' },
      { jp: 'はなします', romaji: 'hanashimasu', vi: 'nói chuyện', type: 'Động từ', kanji: '話します' },
      { jp: 'うたいます', romaji: 'utaimasu', vi: 'hát', type: 'Động từ', kanji: '歌います' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu khen ngợi sở trường: [Người]は [Lĩnh vực]が じょうずです',
        desc: 'Dùng trợ từ「が」trước tính từ じょうず (giỏi) để chỉ kỹ năng hoặc môn học mà người đó làm tốt.',
        formula: '[Người]は [Lĩnh vực]が じょうずです。',
        examples: [
          { jp: 'ガンさんは 日本語が じょうずですね！', vi: 'Bạn Giang giỏi tiếng Nhật quá nhỉ!' },
          { jp: 'ケンさんは サッカーが じょうずです。', vi: 'Bạn Ken đá bóng rất giỏi.' }
        ],
        tip: 'Văn hóa khiêm nhường: Người Nhật KHÔNG TỰ KHEN MÌNH là じょうず. Khi nói về bản thân, nếu giỏi người ta dùng とくい (tokui), nếu chưa giỏi thì dùng へた (heta) hoặc にがて (nigate).'
      },
      {
        title: '2. Cách đáp lại lời khen: いいえ、まだまだです (Chưa đâu ạ, mình còn phải học nhiều)',
        desc: 'Câu cửa miệng khiêm tốn khi được người khác khen ngợi.',
        formula: 'いいえ、まだまだです。',
        examples: [
          { jp: '日本語が じょうずですね。 - いいえ、まだまだです。', vi: 'Tiếng Nhật của bạn giỏi quá nhỉ! - Chưa đâu ạ, mình còn phải cố gắng nhiều.' }
        ]
      }
    ],
    dialogue: {
      speaker1: 'さくら (Sakura)',
      speaker2: 'ガン (Giang)',
      lines: [
        { spk: 'さくら', jp: 'ガンさん、きょうの スピーチは とても すばらしかったです。', vi: 'Giang ơi, bài phát biểu hôm nay của cậu tuyệt vời lắm.' },
        { spk: 'ガン', jp: 'ありがとう ございます、さくらさん。', vi: 'Cảm ơn cậu nhiều nhé, Sakura.' },
        { spk: 'さくら', jp: 'ガンさんは 日本語の はつおんが 本当に じょうずですね！', vi: 'Giang phát âm tiếng Nhật thật sự rất chuẩn và giỏi đó!' },
        { spk: 'ガン', jp: 'いいえ、まだまだです。もっと べんきょうします！', vi: 'Dạ chưa đâu ạ, mình còn phải rèn luyện nhiều hơn nữa!' }
      ]
    },
    kanjiList: [
      { char: '男', on: 'ダン / ナン (dan / nan)', kun: 'おとこ (otoko)', strokes: 7, mean: 'NAM (con trai, đàn ông)', word: '男の子 (おとこのこ - bé trai), 男の人 (おとこのひと - người đàn ông)' },
      { char: '女', on: 'ジョ (jo)', kun: 'おんな / め (onna / me)', strokes: 3, mean: 'NỮ (con gái, phụ nữ)', word: '女の子 (おんなのこ - bé gái), 女の人 (おんなのひと - người phụ nữ)' },
      { char: '子', on: 'シ / ス (shi / su)', kun: 'こ (ko)', strokes: 3, mean: 'TỬ (đứa trẻ, con cái)', word: '子ども (こども - trẻ em), 男の子 (おとこのこ - bé trai)' },
      { char: '話', on: 'ワ (wa)', kun: 'はな / はなし (hana / hanashi)', strokes: 13, mean: 'THOẠI (nói chuyện, câu chuyện)', word: '話します (はなします - nói chuyện), 電話 (でんわ - điện thoại)' }
    ],
    skills: {
      listening: 'Nghe đoạn phỏng vấn về môn học yêu thích và sở trường của các bạn học sinh.',
      speaking: 'Khen ngợi bạn bè: "[Tên]さんは [Môn]が じょうずですね" và đáp lại bằng sự khiêm tốn.',
      reading: 'Đọc giới thiệu câu lạc bộ năng khiếu nghệ thuật và thể thao của trường.',
      writing: 'Viết 4 chữ Hán: 男 (Nam), 女 (Nữ), 子 (Tử), 話 (Thoại).'
    },
    culture: {
      title: 'Nghệ thuật Thư pháp Shodou (書道) và Đức tính khiêm tốn',
      content: 'Thư pháp Shodou (nghĩa là Đạo của chữ viết) là môn nghệ thuật truyền thống dùng bút lông chấm mực tàu mài trên nghiên đá để viết các chữ Hán lên giấy dó Washi. Qua từng nét chữ thanh đậm, người Nhật rèn luyện sự tĩnh tâm, kiên nhẫn và đức tính khiêm nhường (Henson) luôn hướng về phía trước.'
    },
    quizzes: [
      { q: 'Khi được người khác khen "日本語が じょうずですね", câu đáp lại lịch sự khiêm tốn nhất là:', options: ['はい、じょうずです！', 'いいえ、まだまだです。', 'だめです。', 'そうです。'], ans: 1, exp: '"いいえ、まだまだです" thể hiện đức tính khiêm tốn chuẩn mực của người Nhật.' },
      { q: 'Chữ Hán ghép "男の子" có nghĩa là:', options: ['Bé gái', 'Bé trai', 'Người lớn', 'Thầy giáo'], ans: 1, exp: '男 (Nam) + 子 (Tử) = 男の子 (bé trai).' },
      { q: 'Trợ từ đi trước tính từ "じょうず" là:', options: ['が', 'を', 'に', 'へ'], ans: 0, exp: 'Mẫu chỉ sở trường luôn dùng trợ từ が: [Lĩnh vực]が じょうずです.' },
      { q: 'Chữ Hán "話" trong "電話" (denwa) có nghĩa là gì?', options: ['THOẠI (nói chuyện)', 'NGÔN (ngôn ngữ)', 'VĂN (văn hóa)', 'SINH (sống)'], ans: 0, exp: 'Chữ 話 là THOẠI, nghĩa là nói chuyện, câu chuyện.' }
    ]
  },

  {
    num: 13,
    book: 2,
    titleJp: '日本語の きょうしつが としょかんに あります',
    titleRomaji: 'Nihongo no kyoushitsu ga toshokan ni arimasu',
    titleVi: 'Phòng học tiếng Nhật nằm ở trong thư viện',
    topic: 'Giới thiệu các địa điểm trong trường học, vị trí và sự tồn tại của địa điểm; mẫu ～に あります; chữ Hán 上、下、中、外',
    target: 'Học sinh biết giới thiệu các phòng chức năng trong khuôn viên trường học và miêu tả vị trí chính xác (trên, dưới, trong, ngoài, trước, sau, tầng mấy) với mẫu câu tồn tại "~に あります". Học 4 chữ Hán phương vị: 上、下、中、外.',
    vocab: [
      { jp: 'きょうしつ', romaji: 'kyoushitsu', vi: 'phòng học / lớp học', type: 'Danh từ', kanji: '教室' },
      { jp: 'としょかん', romaji: 'toshokan', vi: 'thư viện', type: 'Danh từ', kanji: '図書館' },
      { jp: 'たいいくかん', romaji: 'taiikukan', vi: 'nhà thể chất / nhà thi đấu', type: 'Danh từ', kanji: '体育館' },
      { jp: 'しょくいんしつ', romaji: 'shokuinshitsu', vi: 'phòng giáo viên', type: 'Danh từ', kanji: '職員室' },
      { jp: 'おんがくしつ', romaji: 'ongakushitsu', vi: 'phòng âm nhạc', type: 'Danh từ', kanji: '音楽室' },
      { jp: 'トイレ', romaji: 'toire', vi: 'nhà vệ sinh', type: 'Danh từ', kanji: '' },
      { jp: 'こうてい', romaji: 'koutei', vi: 'sân trường', type: 'Danh từ', kanji: '校庭' },
      { jp: 'うえ', romaji: 'ue', vi: 'phía trên / bên trên', type: 'Danh từ vị trí', kanji: '上' },
      { jp: 'した', romaji: 'shita', vi: 'phía dưới / bên dưới', type: 'Danh từ vị trí', kanji: '下' },
      { jp: 'なか', romaji: 'naka', vi: 'bên trong', type: 'Danh từ vị trí', kanji: '中' },
      { jp: 'そと', romaji: 'soto', vi: 'bên ngoài', type: 'Danh từ vị trí', kanji: '外' },
      { jp: 'まえ / うしろ', romaji: 'mae / ushiro', vi: 'phía trước / phía sau', type: 'Danh từ vị trí', kanji: '前 / 後ろ' },
      { jp: 'となり', romaji: 'tonari', vi: 'bên cạnh', type: 'Danh từ vị trí', kanji: '隣' },
      { jp: '～かい', romaji: '~kai', vi: 'tầng (1かい, 2かい...)', type: 'Đơn vị', kanji: '～階' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu chỉ sự tồn tại của phòng ốc / đồ vật: [Vật/Phòng]は [Vị trí]に あります',
        desc: 'Động từ「あります」(arimasu) dùng cho đồ vật, địa điểm, phòng ốc bất động (vật vô tri vô giác).',
        formula: '[Địa điểm]は [Vị trí]に あります。',
        examples: [
          { jp: '日本語の きょうしつは 2かいに あります。', vi: 'Phòng học tiếng Nhật ở trên tầng 2.' },
          { jp: 'としょかんの なかに あります。', vi: 'Nằm ở bên trong thư viện.' }
        ]
      },
      {
        title: '2. Cách nói vị trí kết hợp: [Địa điểm A]の [Từ vị trí] (ví dụ: としょかんの まえ)',
        desc: 'Dùng trợ từ「の」kết nối danh từ mốc và từ chỉ vị trí.',
        formula: '[Danh từ A]の [うえ / した / なか / まえ / となり]に あります',
        examples: [
          { jp: 'しょくいんしつは きょうしつの となりに あります。', vi: 'Phòng giáo viên nằm ở bên cạnh lớp học.' }
        ]
      }
    ],
    dialogue: {
      speaker1: '転校生 (Học sinh mới chuyển trường)',
      speaker2: 'たけし (Takeshi)',
      lines: [
        { spk: '転校生', jp: 'すみません。日本語の きょうしつは どこですか。', vi: 'Xin lỗi bạn, phòng học tiếng Nhật ở đâu vậy?' },
        { spk: 'たけし', jp: 'あ、日本語の きょうしつは としょかんの なかに ありますよ。', vi: 'À, phòng học tiếng Nhật nằm ở bên trong thư viện đó bạn.' },
        { spk: '転校生', jp: 'としょかんは どこに ありますか。', vi: 'Thế thư viện nằm ở đâu vậy?' },
        { spk: 'たけし', jp: 'たいいくかんの となりです。2かいに あります。いっしょに 行きましょう！', vi: 'Ở bên cạnh nhà thể chất. Trên tầng 2 đó. Cùng đi nhé!' }
      ]
    },
    kanjiList: [
      { char: '上', on: 'ジョウ (jou)', kun: 'うえ / あ (ue / a)', strokes: 3, mean: 'THƯỢNG (trên)', word: '上 (うえ - bên trên), 上手 (じょうず - giỏi)' },
      { char: '下', on: 'カ / ゲ (ka / ge)', kun: 'した / さ (shita / sa)', strokes: 3, mean: 'HẠ (dưới)', word: '下 (した - bên dưới), 下手 (へた - dở/kém)' },
      { char: '中', on: 'チュウ (chuu)', kun: 'なか (naka)', strokes: 4, mean: 'TRUNG (trong, giữa)', word: '中 (なか - bên trong), 一日中 (いちにちじゅう - suốt cả ngày)' },
      { char: '外', on: 'ガイ / ゲ (gai / ge)', kun: 'そと (soto)', strokes: 5, mean: 'NGOẠI (ngoài)', word: '外 (そと - bên ngoài), 外国 (がいこく - nước ngoài)' }
    ],
    skills: {
      listening: 'Nghe sơ đồ trường học và đánh dấu vị trí các phòng: thư viện, phòng nhạc, nhà thể chất.',
      speaking: 'Đóng vai hướng dẫn viên giới thiệu ngôi trường của mình cho khách tham quan.',
      reading: 'Đọc bảng sơ đồ các tầng (Floor guide) của một trường tiểu học Nhật Bản.',
      writing: 'Tập viết 4 chữ Hán vị trí: 上 (Thượng), 下 (Hạ), 中 (Trung), 外 (Ngoại).'
    },
    culture: {
      title: 'Giờ tự giác dọn dẹp trường lớp (Souji - 掃除) của học sinh Nhật Bản',
      content: 'Ở các trường học Nhật Bản không có lao công quét dọn lớp học. Thay vào đó, sau giờ ăn trưa, toàn bộ học sinh và thầy cô cùng tham gia giờ Souji (掃除 - dọn dẹp vệ sinh) trong 15 phút: tự tay lau sàn, quét lớp, lau bảng, dọn sân trường. Hoạt động này rèn luyện tính tự lập, tinh thần trách nhiệm và lòng yêu quý không gian học tập chung.'
    },
    quizzes: [
      { q: 'Động từ chỉ sự tồn tại của đồ vật, phòng ốc (vật vô tri) là:', options: ['います', 'あります', 'いきます', 'します'], ans: 1, exp: '"あります" dùng cho đồ vật, phòng ốc, địa điểm bất động.' },
      { q: '"Phòng giáo viên ở bên cạnh lớp học":', options: ['しょくいんしつは きょうしつの となりに あります。', 'しょくいんしつは きょうしつの うえに あります。', 'しょくいんしつは きょうしつの なかに あります。', 'しょくいんしつは きょうしつの したに あります。'], ans: 0, exp: '"となり" nghĩa là bên cạnh.' },
      { q: 'Chữ Hán "中" có nghĩa là gì?', options: ['Bên trên', 'Bên dưới', 'Bên trong / ở giữa', 'Bên ngoài'], ans: 2, exp: 'Chữ 中 (TRUNG) nghĩa là bên trong, ở giữa.' },
      { q: '"Tầng 2" trong tiếng Nhật đọc là:', options: ['2かい (nikai)', '2じ (niji)', '2にち (futsuka)', '2えん (nien)'], ans: 0, exp: 'Tầng dùng đơn vị đếm là "かい": 2かい (nikai).' }
    ]
  },

  // ÔN TẬP 5
  {
    num: 'review_5',
    isReview: true,
    book: 2,
    titleJp: 'おさらい 5 (Ôn tập 5)',
    titleVi: 'Củng cố miêu tả con người, năng lực và vị trí các địa điểm trong trường',
    summary: 'Tổng hợp kiến thức trọng tâm Bài 11 đến Bài 13: Miêu tả tính cách con người (~人です), năng lực sở trường (~が じょうずです), sự tồn tại vị trí phòng ốc trong trường (~に あります) và 12 chữ Hán: 兄、弟、姉、妹、男、女、子、話、上、下、中、外.',
    quizzes: [
      { q: '"Bạn Minh là một người rất tốt bụng và thông minh":', options: ['ミンさんは しんせつで あたまが いい 人です。', 'ミンさんは おもしろい 人です。', 'ミンさんは せが ひくい 人です。', 'ミンさんは げんきな 人です。'], ans: 0, exp: '"しんせつ" (tốt bụng) và "あたまが いい" (thông minh).' },
      { q: 'Chữ Hán ghép "外国" đọc là:', options: ['そとくに', 'がいこく', 'なかくに', 'うえこく'], ans: 1, exp: '外 (ngoại) + 国 (quốc) đọc là "がいこく" (gaikoku - nước ngoài).' },
      { q: '"Thư viện ở tầng 3":', options: ['としょかんは 3かいに あります。', 'としょかんは 3じに あります。', 'としょかんは 3にちに あります。', 'としょかんは 3えんに あります。'], ans: 0, exp: 'Tầng 3 là "3かい", vị trí tồn tại là "に あります".' },
      { q: 'Chữ Hán "妹" mang nghĩa là:', options: ['Chị gái (TỶ)', 'Em gái (MUỘI)', 'Anh trai (HUYNH)', 'Em trai (ĐỆ)'], ans: 1, exp: 'Chữ 妹 là MUỘI, nghĩa là em gái.' }
    ]
  },

  {
    num: 14,
    book: 2,
    titleJp: '日本語の 先生に なりたいです',
    titleRomaji: 'Nihongo no sensei ni naritai desu',
    titleVi: 'Mình muốn trở thành giáo viên tiếng Nhật',
    topic: 'Nghề nghiệp mong muốn trong tương lai; mẫu ～に なりたいです; chữ Hán 先、生、文、化',
    target: 'Học sinh biết nói về các nghề nghiệp phổ biến và diễn đạt ước mơ nghề nghiệp tương lai với cấu trúc "~に なりたいです". Học 4 chữ Hán: 先、生、文、化.',
    vocab: [
      { jp: 'せんせい', romaji: 'sensei', vi: 'giáo viên / thầy cô', type: 'Danh từ', kanji: '先生' },
      { jp: 'いしゃ', romaji: 'isha', vi: 'bác sĩ', type: 'Danh từ', kanji: '医者' },
      { jp: 'かんごし', romaji: 'kangoshi', vi: 'y tá / điều dưỡng', type: 'Danh từ', kanji: '看護師' },
      { jp: 'けいさつかん', romaji: 'keisatsukan', vi: 'cảnh sát / chú công an', type: 'Danh từ', kanji: '警察官' },
      { jp: 'パイロット', romaji: 'pairotto', vi: 'phi công', type: 'Danh từ', kanji: '' },
      { jp: 'かしゅ', romaji: 'kashu', vi: 'ca sĩ', type: 'Danh từ', kanji: '歌手' },
      { jp: 'がか', romaji: 'gaka', vi: 'họa sĩ', type: 'Danh từ', kanji: '画家' },
      { jp: 'サッカーせんしゅ', romaji: 'sakkaa senshu', vi: 'cầu thủ bóng đá', type: 'Danh từ', kanji: 'サッカー選手' },
      { jp: 'エンジニア', romaji: 'enjinia', vi: 'kỹ sư', type: 'Danh từ', kanji: '' },
      { jp: 'なりたい', romaji: 'naritai', vi: 'muốn trở thành', type: 'Động từ thể tai', kanji: '' },
      { jp: 'しょうらい', romaji: 'shourai', vi: 'tương lai', type: 'Danh từ', kanji: '将来' },
      { jp: 'ゆめ', romaji: 'yume', vi: 'ước mơ', type: 'Danh từ', kanji: '夢' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu ước mơ nghề nghiệp: [Nghề nghiệp]に なりたいです',
        desc: 'Động từ「なります」(trở thành) chia sang thể mong muốn là「なりたい」(muốn trở thành), đi cùng trợ từ「に」.',
        formula: 'Câu khẳng định: [Nghề nghiệp]に なりたいです。\nCâu hỏi: しょうらい なにに なりたいですか。',
        examples: [
          { jp: 'わたしは 日本語の 先生に なりたいです。', vi: 'Mình muốn trở thành giáo viên tiếng Nhật.' },
          { jp: 'しょうらい いしゃに なりたいです。', vi: 'Tương lai mình muốn trở thành bác sĩ.' }
        ]
      }
    ],
    dialogue: {
      speaker1: '先生 (Thầy giáo)',
      speaker2: 'ケン (Ken)',
      lines: [
        { spk: '先生', jp: 'みなさん、しょうらいの ゆめは なんですか。', vi: 'Các em ơi, ước mơ tương lai của các em là gì nào?' },
        { spk: 'ケン', jp: '先生、ぼくは サッカーせんしゅに なりたいです！', vi: 'Thưa thầy, em muốn trở thành một cầu thủ bóng đá ạ!' },
        { spk: '先生', jp: 'すばらしいですね。マイさんは なにに なりたいですか。', vi: 'Tuyệt vời lắm. Còn Mai thì muốn trở thành gì em?' },
        { spk: 'マイ', jp: 'わたしは びょうきの人を たすける いしゃに なりたいです。', vi: 'Em muốn trở thành bác sĩ chữa bệnh giúp đỡ mọi người ạ.' }
      ]
    },
    kanjiList: [
      { char: '先', on: 'セン (sen)', kun: 'さき (saki)', strokes: 6, mean: 'TIÊN (trước)', word: '先生 (せんせい - giáo viên), 先週 (せんしゅう - tuần trước)' },
      { char: '生', on: 'セイ / ショウ (sei / shou)', kun: 'い / う (i / u)', strokes: 5, mean: 'SINH (sống, sinh ra)', word: '先生 (せんせい - giáo viên), 学生 (がくせい - học sinh)' },
      { char: '文', on: 'ブン / モン (bun / mon)', kun: 'ふみ (fumi)', strokes: 4, mean: 'VĂN (văn học, chữ nghĩa)', word: '文化 (ぶんか - văn hóa), 作文 (さくぶん - bài tập làm văn)' },
      { char: '化', on: 'カ / ケ (ka / ke)', kun: 'ば (ba)', strokes: 4, mean: 'HÓA (biến hóa, thay đổi)', word: '文化 (ぶんか - văn hóa), 化学 (かがく - hóa học)' }
    ],
    skills: {
      listening: 'Nghe đoạn phỏng vấn ước mơ nghề nghiệp của các bạn học sinh và nối đúng tranh nghề.',
      speaking: 'Phỏng vấn bạn bè: "しょうらい なにに なりたいですか - [Nghề]に なりたいです".',
      reading: 'Đọc bài văn "Ước mơ tương lai của em" viết bằng chữ Hiragana và Kanji cơ bản.',
      writing: 'Viết 4 chữ Hán: 先 (Tiên), 生 (Sinh), 文 (Văn), 化 (Hóa).'
    },
    culture: {
      title: 'Hoạt động trải nghiệm nghề nghiệp (Shigoto Taiken) của học sinh Nhật',
      content: 'Tại Nhật Bản có những khu vui chơi trải nghiệm hướng nghiệp nổi tiếng như KidZania, nơi các bạn nhỏ được mặc đồng phục thật và tự tay làm bác sĩ phẫu thuật, lính cứu hỏa dập lửa, phi công lái mô phỏng máy bay, đầu bếp làm bánh... Hoạt động này giúp học sinh sớm thấu hiểu giá trị của lao động và nuôi dưỡng ước mơ cao đẹp từ tấm bé.'
    },
    quizzes: [
      { q: 'Trợ từ đi cùng mẫu câu "muốn trở thành..." là:', options: ['に', 'を', 'へ', 'で'], ans: 0, exp: 'Mẫu trở thành nghề nghiệp luôn dùng trợ từ に: [Nghề]に なりたいです.' },
      { q: 'Chữ Hán ghép "先生" đọc là gì và có nghĩa là gì?', options: ['せんせい (giáo viên)', 'がくせい (học sinh)', 'いしゃ (bác sĩ)', 'かしゅ (ca sĩ)'], ans: 0, exp: '先生 đọc là "せんせい" (sensei - giáo viên).' },
      { q: '"Tôi muốn trở thành bác sĩ":', options: ['いしゃに なりたいです。', 'いしゃを します。', 'いしゃが ほしいです。', 'いしゃへ いきます。'], ans: 0, exp: '"いしゃに なりたいです" nghĩa là muốn trở thành bác sĩ.' },
      { q: 'Chữ Hán ghép "文化" có âm đọc và nghĩa là:', options: ['ぶんか (Văn hóa)', 'かがく (Hóa học)', 'さくぶん (Tập làm văn)', 'がくせい (Học sinh)'], ans: 0, exp: '文 (Văn) + 化 (Hóa) = ぶんか (Văn hóa).' }
    ]
  },

  {
    num: 15,
    book: 2,
    titleJp: 'しょうらい 日本語を おしえたいです',
    titleRomaji: 'Shourai nihongo o oshietai desu',
    titleVi: 'Tương lai mình muốn dạy tiếng Nhật',
    topic: 'Việc muốn làm trong tương lai, ước mơ nghề nghiệp; mẫu ～たいです; chữ Hán 食、飲、買、年',
    target: 'Học sinh biết chia động từ sang thể mong muốn hành động "~たいです" (muốn làm V), nói về những việc mình khát khao thực hiện trong tương lai. Học 4 chữ Hán sinh hoạt: 食、飲、買、年.',
    vocab: [
      { jp: 'おしえます', romaji: 'oshiemasu', vi: 'dạy học / chỉ dạy', type: 'Động từ', kanji: '教えます' },
      { jp: 'はたらきます', romaji: 'hatarakimasu', vi: 'làm việc / lao động', type: 'Động từ', kanji: '働きます' },
      { jp: 'つくります', romaji: 'tsukurimasu', vi: 'chế tạo / nấu ăn / làm ra', type: 'Động từ', kanji: '作ります' },
      { jp: 'たすけます', romaji: 'tasukemasu', vi: 'cứu giúp / giúp đỡ', type: 'Động từ', kanji: '助けます' },
      { jp: 'りょこうします', romaji: 'ryokoushimasu', vi: 'đi du lịch', type: 'Động từ', kanji: '旅行します' },
      { jp: 'にほんへ 行きます', romaji: 'nihon e ikimasu', vi: 'đi Nhật Bản', type: 'Cụm ĐT', kanji: '日本へ行きます' },
      { jp: 'たべます', romaji: 'tabemasu', vi: 'ăn', type: 'Động từ', kanji: '食べます' },
      { jp: 'のみます', romaji: 'nomimasu', vi: 'uống', type: 'Động từ', kanji: '飲みます' },
      { jp: 'かいます', romaji: 'kaimasu', vi: 'mua sắm', type: 'Động từ', kanji: '買います' },
      { jp: 'とし / ねん', romaji: 'toshi / nen', vi: 'năm / tuổi', type: 'Danh từ', kanji: '年' }
    ],
    grammarNotes: [
      {
        title: '1. Mẫu câu mong muốn thực hiện hành động: [Động từ thể ます bỏ ます] + たいです',
        desc: 'Diễn tả ước muốn làm một hành động nào đó của người nói.',
        formula: 'Thân Động từ (bỏ ます) + たいです (muốn làm V)\nThân Động từ (bỏ ます) + たくないです (không muốn làm V)',
        examples: [
          { jp: 'おしえます -> おしえたいです (muốn dạy học)', vi: 'しょうらい 日本語を おしえたいです。 (Tương lai mình muốn dạy tiếng Nhật.)' },
          { jp: '行きます -> 行きたいです (muốn đi)', vi: 'いつか 日本へ 行きたいです。 (Một ngày nào đó mình muốn đi Nhật.)' },
          { jp: 'たべます -> たべたいです (muốn ăn)', vi: 'おいしい おすしを たべたいです。 (Mình muốn ăn món sushi ngon.)' }
        ],
        tip: 'Phân biệt rõ: "~が ほしいです" (muốn có ĐỒ VẬT) vs "~たいです" (muốn thực hiện HÀNH ĐỘNG).'
      }
    ],
    dialogue: {
      speaker1: 'アン (An)',
      speaker2: 'ガン (Giang)',
      lines: [
        { spk: 'アン', jp: 'ガンさんは しょうらい なにを したいですか。', vi: 'Giang ơi, tương lai cậu muốn làm việc gì?' },
        { spk: 'ガン', jp: 'わたしは ベトナムで 子どもたちに 日本語を おしえたいです。', vi: 'Mình muốn dạy tiếng Nhật cho các em nhỏ ở Việt Nam.' },
        { spk: 'アン', jp: 'すばらしい ゆめですね！日本へ 行きたいですか。', vi: 'Ước mơ tuyệt vời quá! Cậu có muốn đi Nhật Bản không?' },
        { spk: 'ガン', jp: 'はい！大学で べんきょうするために 日本へ 行きたいです。', vi: 'Có chứ! Mình muốn đi Nhật để học đại học nữa.' }
      ]
    },
    kanjiList: [
      { char: '食', on: 'ショク (shoku)', kun: 'た / く (ta / ku)', strokes: 9, mean: 'THỰC (ăn, thực phẩm)', word: '食べます (たべます - ăn), 食事 (しょくじ - bữa ăn)' },
      { char: '飲', on: 'イン (in)', kun: 'の (no)', strokes: 12, mean: 'ẨM (uống)', word: '飲みます (のみます - uống), 飲み物 (のみもの - đồ uống)' },
      { char: '買', on: 'バイ (bai)', kun: 'か (ka)', strokes: 12, mean: 'MÃI (mua sắm)', word: '買います (かいます - mua), 買い物 (かいもの - mua sắm)' },
      { char: '年', on: 'ネン (nen)', kun: 'とし (toshi)', strokes: 6, mean: 'NIÊN (năm, tuổi)', word: '今年 (ことし - năm nay), 来年 (らいねん - năm sau)' }
    ],
    skills: {
      listening: 'Nghe đoạn ghi âm ước mơ của bạn bè và đánh dấu vào bảng hoạt động tương lai.',
      speaking: 'Trình bày trước lớp về ước mơ tương lai của mình bằng mẫu câu "~たいです".',
      reading: 'Đọc bức thư gửi tương lai 10 năm sau của học sinh Nhật Bản.',
      writing: 'Viết 4 chữ Hán: 食 (Thực), 飲 (Ẩm), 買 (Mãi), 年 (Niên).'
    },
    culture: {
      title: 'Lễ Trưởng thành (Seijin no Hi - 成人の日) và Nuôi dưỡng ước mơ',
      content: 'Vào ngày thứ Hai tuần thứ hai của tháng 1 hằng năm, đất nước Nhật Bản tưng bừng tổ chức Lễ Trưởng thành (Seijin no Hi) cho các bạn trẻ bước sang tuổi 20 (hoặc 18 theo luật mới). Các cô gái mặc bộ kimono Furisode lộng lẫy, các chàng trai mặc vest trang trọng đến đền thờ tuyên thệ sống có trách nhiệm, độc lập và cống hiến thực hiện ước mơ cho xã hội.'
    },
    quizzes: [
      { q: 'Chia động từ "行きます" (đi) sang thể muốn đi là:', options: ['行きたいです', '行きますたいです', '行きたくない', '行きてです'], ans: 0, exp: 'Bỏ "ます" thêm "たいです": 行き + たいです = 行きたいです.' },
      { q: 'Điểm khác nhau giữa "~が ほしいです" và "~たいです" là gì?', options: ['~ほしいです đi với Động từ, ~たいです đi với Danh từ', '~ほしいです đi với Danh từ (đồ vật), ~たいです đi với Động từ (hành động)', 'Cả hai đều đi với Tính từ', 'Không có điểm khác biệt'], ans: 1, exp: 'ほしい đi cùng Danh từ (muốn có đồ vật), còn たい kết hợp Động từ (muốn làm hành động).' },
      { q: 'Chữ Hán ghép "飲み物" có nghĩa là:', options: ['Đồ ăn', 'Đồ uống', 'Mua sắm', 'Năm mới'], ans: 1, exp: '飲 (uống) + 物 (vật) = のみもの (đồ uống).' },
      { q: 'Chữ Hán "年" trong "来年" có nghĩa là:', options: ['Tháng', 'Ngày', 'Năm (NIÊN)', 'Giờ'], ans: 2, exp: 'Chữ 年 là NIÊN, nghĩa là năm (らいねん: năm sau).' }
    ]
  },

  // ÔN TẬP 6
  {
    num: 'review_6',
    isReview: true,
    book: 2,
    titleJp: 'おさらい 6 (Ôn tập 6)',
    titleVi: 'Củng cố nghề nghiệp, dự định và ước mơ tương lai',
    summary: 'Tổng hợp trọng tâm Bài 14 & Bài 15: Nói về nghề nghiệp ước mơ (~に なりたいです), hành động muốn thực hiện trong tương lai (~たいです) và 8 chữ Hán: 先、生、文、化、食、飲、買、年.',
    quizzes: [
      { q: '"Tương lai mình muốn trở thành giáo viên và dạy tiếng Nhật":', options: ['先生に なりたいです。そして 日本語を おしえたいです。', '先生が ほしいです。そして 日本語を べんきょうします。', '先生へ いきます。そして 日本語を みます。', '先生は どうですか。そして 日本語を かいます。'], ans: 0, exp: 'Trở thành giáo viên: 先生に なりたいです; muốn dạy tiếng Nhật: 日本語を おしえたいです.' },
      { q: 'Chữ Hán ghép "今年" đọc là:', options: ['きょねん', 'ことし', 'らいねん', 'まいねん'], ans: 1, exp: '今年 là một từ đọc âm Kun đặc biệt: "ことし" (kotoshi - năm nay).' },
      { q: 'Thể phủ định của "たべたいです" (muốn ăn) là:', options: ['たべたくないです', 'たべません', 'たべないです', 'たべませんでした'], ans: 0, exp: 'Thể phủ định của ~たい là ~たくない: たべたくないです (không muốn ăn).' },
      { q: 'Từ nào có nghĩa là "phi công"?', options: ['パイロット', 'エンジニア', 'かんごし', 'けいさつかん'], ans: 0, exp: '"パイロット" là phi công lái máy bay.' }
    ]
  },

  // BÀI 16: ふりかえり (TỔNG ÔN TOÀN KHÓA BÀI 1 - BÀI 15)
  {
    num: 16,
    isFinalReview: true,
    book: 2,
    titleJp: '16. ふりかえり (Tổng ôn tập kiến thức toàn khóa Bài 1 – Bài 15)',
    titleRomaji: 'Furikaeri',
    titleVi: 'Ôn tập tổng kết toàn bộ chương trình Tiếng Nhật Lớp 5',
    topic: 'Hệ thống hóa toàn bộ kiến thức ngữ pháp, từ vựng, chữ Hán và kỹ năng giao tiếp từ bài 1 đến bài 15',
    target: 'Củng cố vững chắc toàn diện 15 chủ đề: sinh hoạt hằng ngày, thứ ngày tháng, tần suất, đồ vật mong muốn, mua sắm hỏi giá, thời tiết, rủ rê cuối tuần, du lịch, phương tiện, miêu tả con người, sở trường năng lực, trường học và ước mơ nghề nghiệp. Tổng ôn 40 chữ Hán trọng tâm cấp tiểu học.',
    summary: 'Trọng tâm tổng ôn toàn khóa: 15 cấu trúc ngữ pháp cốt lõi, bảng 40 chữ Hán thường gặp, 6 bài ôn tập tích hợp và chuẩn bị sẵn sàng cho Hội thi Trạng Nguyên Tiếng Nhật Lớp 5.',
    kanjiList: [
      { char: '1-10', on: '', kun: '', strokes: 0, mean: 'Chữ Hán số đếm', word: '一、二、三、四、五、六、七、八、九、十' },
      { char: 'Thứ/Ngày', on: '', kun: '', strokes: 0, mean: 'Chữ Hán lịch biểu', word: '日、月、火、水、木、金、土' },
      { char: 'Đời sống', on: '', kun: '', strokes: 0, mean: 'Chữ Hán mua sắm, thời tiết', word: '花、大、小、円、今、雨、天、気' },
      { char: 'Giao tiếp', on: '', kun: '', strokes: 0, mean: 'Chữ Hán hoạt động, gia đình', word: '何、休、見、来、山、川、田、行、父、母、友、人' },
      { char: 'Xã hội', on: '', kun: '', strokes: 0, mean: 'Chữ Hán miêu tả, vị trí, tương lai', word: '兄、弟、姉、妹、男、女、子、話、上、下、中、外、先、生、文、化、食、飲、買、年' }
    ],
    quizzes: [
      { q: 'Tổng kết: Mẫu câu nào dùng để diễn đạt "muốn làm một hành động"?', options: ['[Danh từ]が ほしいです', '[Động từ thể ます bỏ ます] + たいです', '[Danh từ]に なります', '[Động từ]てください'], ans: 1, exp: 'Muốn làm hành động dùng [V bỏ ます] + たいです.' },
      { q: 'Trợ từ nào sau đây đánh dấu PHƯƠNG TIỆN di chuyển?', options: ['へ', 'に', 'で', 'を'], ans: 2, exp: 'Trợ từ "で" chỉ phương tiện di chuyển (xe buýt, tàu hỏa...).' },
      { q: 'Cặp từ trái nghĩa "To lớn" và "Nhỏ bé" trong chữ Hán là:', options: ['大 <-> 小', '上 <-> 下', '先 <-> 生', '男 <-> 女'], ans: 0, exp: '大 (Đại - to) đối nghĩa với 小 (Tiểu - nhỏ).' },
      { q: 'Câu "日本語の 先生に なりたいです" có nghĩa là:', options: ['Tôi muốn học tiếng Nhật cùng thầy.', 'Tôi muốn trở thành giáo viên tiếng Nhật.', 'Tôi thích thầy giáo tiếng Nhật.', 'Thầy giáo muốn tôi học tiếng Nhật.'], ans: 1, exp: '"先生に なりたいです" mang nghĩa muốn trở thành giáo viên.' }
    ]
  }
];

const trangNguyenJapaneseQuizzes = [
  { q: 'Mỗi sáng thức dậy lúc 6 giờ: "まいあさ 6じ____ おきます。"', options: ['に', 'へ', 'を', 'で'], ans: 0, exp: 'Trợ từ "に" đi sau mốc thời gian cụ thể.' },
  { q: 'Chữ Hán "三" có nghĩa là số mấy?', options: ['Số 1', 'Số 2', 'Số 3', 'Số 4'], ans: 2, exp: 'Chữ 三 là TAM, nghĩa là số 3.' },
  { q: '"Thứ Tư" trong tiếng Nhật là:', options: ['かようび', 'すいようび', 'もくようび', 'きんようび'], ans: 1, exp: '"すいようび" (Thủy diệu nhật) là thứ Tư.' },
  { q: 'Cấu trúc diễn đạt khoảng thời gian "từ... đến..." là:', options: ['から ... まで', 'まで ... から', 'に ... へ', 'と ... で'], ans: 0, exp: '[Thời gian 1]から [Thời gian 2]まで.' },
  { q: 'Phó từ nào bắt buộc đi với đuôi động từ phủ định (~ません)?', options: ['よく', 'ときどき', 'いつも', 'あまり'], ans: 3, exp: '"あまり" và "ぜんぜん" luôn đi cùng đuôi phủ định.' },
  { q: 'Chữ Hán nào tượng trưng cho số 10 (THẬP)?', options: ['七', '八', '九', '十'], ans: 3, exp: 'Chữ 十 có 2 nét giao nhau, nghĩa là số 10.' },
  { q: 'Trợ từ đi trước tính từ mong muốn "ほしい" là:', options: ['を', 'が', 'に', 'で'], ans: 1, exp: 'Mẫu câu: [Đồ vật]が ほしいです.' },
  { q: 'Chữ Hán "水" có âm Kun và ý nghĩa là:', options: ['ひ (lửa)', 'みず (nước)', 'き (cây)', 'つち (đất)'], ans: 1, exp: 'Chữ 水 là THỦY, nghĩa là nước (みず).' },
  { q: 'Từ chỉ định nào dùng cho đồ vật ở gần người nghe?', options: ['この', 'その', 'あの', 'どの'], ans: 1, exp: '"その" dùng cho đồ vật ở gần phía người nghe.' },
  { q: 'Hỏi giá tiền một món đồ: "これは ____ですか。"', options: ['いくら', 'どこ', 'なんじ', 'だれ'], ans: 0, exp: '"いくらですか" nghĩa là bao nhiêu tiền.' },
  { q: 'Chữ Hán "円" là đơn vị tiền tệ nào?', options: ['Đồng Won', 'Đồng Đô la', 'Đồng Yên Nhật', 'Đồng Bảng'], ans: 2, exp: 'Chữ 円 (VIÊN) là đồng Yên Nhật Bản.' },
  { q: 'Hiện tượng thời tiết "あめ" có nghĩa là:', options: ['Trời nắng', 'Trời mưa', 'Nhiều mây', 'Tuyết rơi'], ans: 1, exp: '"あめ" (雨) là trời mưa.' },
  { q: 'Chữ Hán "今" trong "今日" có nghĩa là:', options: ['Bây giờ, nay (KIM)', 'Mưa (VŨ)', 'Trời (THIÊN)', 'Khí (KHÍ)'], ans: 0, exp: 'Chữ 今 là KIM, nghĩa là hiện tại, bây giờ.' },
  { q: 'Mẫu câu rủ rê bạn bè lịch sự là:', options: ['～ましょう', '～ませんか', '～たいです', '～てください'], ans: 1, exp: 'Đuôi "~ませんか" là câu rủ rê, mời mọc lịch sự.' },
  { q: 'Trợ từ chỉ người cùng thực hiện hành động (với ai) là:', options: ['と', 'へ', 'で', 'に'], ans: 0, exp: 'Trợ từ "と" mang nghĩa là "cùng với".' },
  { q: 'Chữ Hán "山" trong "富士山" có nghĩa là:', options: ['Sông', 'Núi (SƠN)', 'Ruộng', 'Đồng cỏ'], ans: 1, exp: 'Chữ 山 là SƠN, nghĩa là ngọn núi.' },
  { q: 'Trợ từ chỉ phương tiện giao thông (đi bằng xe gì) là:', options: ['で', 'へ', 'に', 'を'], ans: 0, exp: 'Trợ từ "で" chỉ phương tiện/công cụ di chuyển.' },
  { q: 'Chữ Hán "父" có nghĩa là:', options: ['Người cha (PHỤ)', 'Người mẹ (MẪU)', 'Bạn bè (HỮU)', 'Con người (NHÂN)'], ans: 0, exp: 'Chữ 父 là PHỤ, nghĩa là người cha.' },
  { q: 'Tính từ đuôi na "しんせつ" khi bổ nghĩa cho danh từ "人" viết là:', options: ['しんせつ 人', 'しんせつな 人', 'しんせつい 人', 'しんせつの 人'], ans: 1, exp: 'Tính từ đuôi na phải có "な" khi đứng trước danh từ.' },
  { q: 'Chữ Hán "兄" trong gia đình nghĩa là:', options: ['Em trai', 'Anh trai (HUYNH)', 'Chị gái', 'Em gái'], ans: 1, exp: 'Chữ 兄 là HUYNH, nghĩa là anh trai.' },
  { q: 'Người Nhật đáp lại lời khen ngợi một cách khiêm tốn bằng câu:', options: ['はい、じょうずです！', 'いいえ、まだまだです。', 'そうです。', 'ありがとう。'], ans: 1, exp: '"いいえ、まだまだです" thể hiện đức tính khiêm nhường chuẩn mực.' },
  { q: 'Động từ chỉ sự tồn tại của phòng ốc, đồ vật (vật vô tri) là:', options: ['います', 'あります', 'いきます', 'します'], ans: 1, exp: '"あります" dùng cho đồ vật, phòng ốc.' },
  { q: 'Chữ Hán "上" và "下" là cặp từ trái nghĩa:', options: ['Trước <-> Sau', 'Trên <-> Dưới', 'Trong <-> Ngoài', 'To <-> Nhỏ'], ans: 1, exp: '上 (Thượng - trên) và 下 (Hạ - dưới).' },
  { q: 'Muốn nói "Tương lai tôi muốn trở thành giáo viên", ta dùng mẫu:', options: ['先生が ほしいです', '先生に なりたいです', '先生を かいます', '先生へ いきます'], ans: 1, exp: 'Mẫu [Nghề nghiệp]に なりたいです.' },
  { q: 'Động từ "食べます" (ăn) khi chuyển sang "muốn ăn" sẽ là:', options: ['食べたいです', '食べますたいです', '食べないです', '食べたくない'], ans: 0, exp: 'Bỏ ます thêm たいです: 食べたいです.' }
];

module.exports = { lessons, trangNguyenJapaneseQuizzes };
