// Script to generate complete, high-quality courses/tiengnga_6.html and courses/russian_6.html
const fs = require('fs');
const path = require('path');

console.log("Generating Tieng Nga 6 course...");

const themesData = [
  {
    themeNum: 1,
    part: "Tập Một",
    themeTitleRu: "ТЕМА 1: ДОБРОЕ СЛОВО И КОШКЕ ПРИЯТНО",
    themeTitleVi: "Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau",
    themeDesc: "Giao tiếp lịch sự qua điện thoại, đồ dùng học tập, số thứ tự và cảnh sắc thiên nhiên mùa thu.",
    uroks: [
      {
        num: 1,
        titleRu: "Доброе слово лучше большого подарка",
        titleVi: "Lời nói chân thành quý hơn quà tặng lớn",
        grammar: "Giao tiếp qua điện thoại (thân mật & lịch sự); động từ звонить, позвонить, перезвонить кому (Cách 3 - Dativ); động từ ждать кого (Cách 4 - Akkusativ); hệ thống ngữ điệu ИК-1 đến ИК-5.",
        vocab: [
          { ru: "звонить", phonetic: "zva-neet'", vi: "gọi điện thoại (chưa hoàn thành thể НСВ)" },
          { ru: "позвонить", phonetic: "pa-zva-neet'", vi: "gọi điện thoại (hoàn thành thể СВ)" },
          { ru: "перезвонить", phonetic: "pe-re-zva-neet'", vi: "gọi điện thoại lại" },
          { ru: "ждать", phonetic: "zhdat'", vi: "chờ, đợi (+ Cách 4)" },
          { ru: "учебный год", phonetic: "u-cheb-nyy got", vi: "năm học mới" },
          { ru: "занят / занята", phonetic: "za-nyat / za-nya-ta", vi: "đang bận (nam / nữ)" },
          { ru: "позже", phonetic: "poz-zhe", vi: "muộn hơn, lát sau" },
          { ru: "Будьте добры", phonetic: "Bud'-te dab-ry", vi: "Làm ơn, xin vui lòng (lịch sự)" }
        ],
        sentences: [
          { ru: "Будьте добры, Антон дома?", vi: "Làm ơn cho hỏi, Anton có nhà không ạ?" },
          { ru: "Извините, сейчас я занят. Я перезвоню позже.", vi: "Xin lỗi, bây giờ tớ bận rồi. Tớ sẽ gọi lại sau." },
          { ru: "Я жду сестру около школы.", vi: "Tôi đang đợi em gái ở gần trường." },
          { ru: "Алло! Здравствуй, это говорит Максим.", vi: "A-lô! Chào bạn, Maxim đang nói đây." }
        ],
        dialogue: [
          { speaker: "Антон", text: "Алло! Я слушаю." },
          { speaker: "Максим", text: "Здравствуй, Антон! Это Максим. Ты свободен сейчас?" },
          { speaker: "Антон", text: "Привет, Максим! Извини, сейчас я помогаю папе. Я перезвоню тебе через двадцать минут, хорошо?" },
          { speaker: "Максим", text: "Договорились! Буду ждать твоего звонка." }
        ],
        phoneticsRule: "Ngữ điệu ИК-1 (hạ giọng cuối câu trần thuật: 'Я перезвоню позже.\') và ИК-3 (lên giọng ở từ trọng tâm câu hỏi không có từ để hỏi: 'Антон дома?').",
        quiz: {
          q: "Trong câu giao tiếp qua điện thoại: 'Я перезвоню _____ (ты) позже', đại từ 'ты' chia ở Cách 3 (Dativ) là gì?",
          options: ["тебе", "тебя", "тобой", "о тебе"],
          ans: 0,
          explain: "Động từ 'перезвонить' luôn đòi hỏi bổ ngữ Cách 3 (Dativ): перезвонить кому -> перезвонить тебе (gọi lại cho bạn)."
        }
      },
      {
        num: 2,
        titleRu: "Учиться без книги – что удить рыбу без крючка",
        titleVi: "Học mà không có sách như câu cá không có lưỡi câu",
        grammar: "Từ vựng đồ dùng học tập; biến đổi số thứ tự (первый, второй, третий... шестой) theo giống, số và cách; đại từ chỉ định этот, эта, это, эти ở các cách số ít.",
        vocab: [
          { ru: "учебник", phonetic: "u-cheb-nik", vi: "sách giáo khoa" },
          { ru: "тетрадь", phonetic: "tet-rat'", vi: "quyển vở ghi" },
          { ru: "ручка", phonetic: "ruch-ka", vi: "bút mực, bút bi" },
          { ru: "линейка", phonetic: "li-ney-ka", vi: "thước kẻ" },
          { ru: "карандаш", phonetic: "ka-ran-dash", vi: "bút chì" },
          { ru: "ластик", phonetic: "las-tik", vi: "cục tẩy" },
          { ru: "калькулятор", phonetic: "kal'-ku-lya-tar", vi: "máy tính bỏ túi" },
          { ru: "полка", phonetic: "pol-ka", vi: "giá sách, tầng kệ" }
        ],
        sentences: [
          { ru: "Учебники для шестого класса находятся на четвёртой полке.", vi: "Sách giáo khoa lớp 6 nằm ở trên tầng giá thứ tư." },
          { ru: "Я учусь в шестом классе этой школы.", vi: "Tôi học ở lớp 6 của ngôi trường này." },
          { ru: "Дай мне, пожалуйста, эту синюю ручку.", vi: "Làm ơn cho mình mượn chiếc bút mực màu xanh này." },
          { ru: "В моём рюкзаке лежат новые учебники и тетради.", vi: "Trong ba lô của tớ có sách giáo khoa và vở mới." }
        ],
        dialogue: [
          { speaker: "Анна", text: "Лена, ты не знаешь, где лежит мой калькулятор?" },
          { speaker: "Лена", text: "Посмотри на второй полке около словаря!" },
          { speaker: "Анна", text: "Ах, вот он! Спасибо большое." }
        ],
        phoneticsRule: "Quy tắc đọc số thứ tự: 'шестой' (thứ sáu), 'шестом классе' (lớp 6 - Cách 6 đuôi -ом). Chữ 'г' trong đuôi -ого/-его đọc là /v/ (шестого = she-sto-va).",
        quiz: {
          q: "Chọn dạng đúng của số thứ tự: 'Мы учимся в _____ (шестой) классе.'",
          options: ["шестом", "шестой", "шестого", "шестому"],
          ans: 0,
          explain: "Giới từ 'в' chỉ vị trí trả lời câu hỏi 'В каком классе?' đi với Cách 6 (Giới cách): trong lớp thứ sáu -> 'в шестом классе'."
        }
      },
      {
        num: 3,
        titleRu: "После дела и погулять хорошо",
        titleVi: "Làm xong xuôi việc rồi đi dạo mới vui",
        grammar: "Miêu tả thiên nhiên và công viên mùa thu; quy tắc biến cách của tính từ đuôi mềm (синий, свежий, осенний) và tính từ đuôi cứng ở các cách số ít.",
        vocab: [
          { ru: "осень", phonetic: "o-sen'", vi: "mùa thu (giống cái)" },
          { ru: "прохладный", phonetic: "prakh-lad-nyy", vi: "mát mẻ, se lạnh" },
          { ru: "свежий воздух", phonetic: "sve-zhiy voz-dukh", vi: "không khí trong lành" },
          { ru: "памятник", phonetic: "pa-myat-nik", vi: "tượng đài kỷ niệm" },
          { ru: "фонтан", phonetic: "fan-tan", vi: "đài phun nước" },
          { ru: "листопад", phonetic: "lis-ta-pad", vi: "hiện tượng lá rụng mùa thu" },
          { ru: "отдыхать", phonetic: "at-dy-khat'", vi: "nghỉ ngơi, thư giãn" },
          { ru: "золотая осень", phonetic: "za-la-ta-ya o-sen'", vi: "mùa thu vàng nước Nga" }
        ],
        sentences: [
          { ru: "Осенью в парке очень красиво.", vi: "Vào mùa thu trong công viên rất đẹp." },
          { ru: "Я очень люблю отдыхать на свежем воздухе.", vi: "Tôi rất thích nghỉ ngơi ở nơi không khí trong lành." },
          { ru: "Около красивого фонтана гуляют дети.", vi: "Gần đài phun nước tuyệt đẹp có nhiều em nhỏ đang dạo chơi." },
          { ru: "Деревья надели свой жёлтый и красный наряд.", vi: "Cây cối đã khoác lên mình bộ trang phục rực rỡ sắc vàng và đỏ." }
        ],
        dialogue: [
          { speaker: "Виктор", text: "Какая сегодня замечательная осенняя погода!" },
          { speaker: "Май", text: "Да, воздух такой свежий и прохладный. Пойдём в парк к фонтану?" },
          { speaker: "Виктор", text: "С удовольствием! Осенью в городском парке очень живописно." }
        ],
        quiz: {
          q: "Tính từ đuôi mềm 'свежий' khi đi với giới từ 'на' trong 'на _____ воздухе' (Cách 6) biến đổi thành dạng nào?",
          options: ["свежем", "свежим", "свежего", "свежему"],
          ans: 0,
          explain: "Ở Cách 6 giống đực số ít, tính từ đuôi mềm nhận đuôi -ем: на свежем воздухе (nơi không khí trong lành)."
        }
      }
    ]
  },
  {
    themeNum: 2,
    part: "Tập Một",
    themeTitleRu: "ТЕМА 2: С ТОБОЙ МНЕ ВСЕГДА ХОРОШО",
    themeTitleVi: "Có bạn ở bên lòng tôi luôn thấy ấm áp",
    themeDesc: "Miêu tả ngoại hình và tính cách bạn bè, cấu trúc so sánh giống ai, nghề nghiệp gia đình và sở thích giải trí.",
    uroks: [
      {
        num: 4,
        titleRu: "Дружбу за деньги не купишь",
        titleVi: "Tình bạn không mua được bằng tiền",
        grammar: "Miêu tả tính cách con người; cấu trúc biểu thị sự giống nhau: Кто (1) + похож / похожа / похожи + на кого (4); biến đổi đại từ sở hữu наш, ваш ở các cách.",
        vocab: [
          { ru: "умный", phonetic: "um-nyy", vi: "thông minh, sáng dạ" },
          { ru: "добрый", phonetic: "dob-ryy", vi: "tốt bụng, nhân hậu" },
          { ru: "дружелюбный", phonetic: "dru-zhe-lyub-nyy", vi: "thân thiện, cởi mở" },
          { ru: "активный", phonetic: "ak-tiv-nyy", vi: "năng động, tích cực" },
          { ru: "честный", phonetic: "chest-nyy", vi: "trung thực, thật thà" },
          { ru: "весёлый", phonetic: "ve-syo-lyy", vi: "vui vẻ, hoạt bát" },
          { ru: "близнецы", phonetic: "bliz-ne-tsy", vi: "cặp song sinh" },
          { ru: "похож на", phonetic: "pa-khozh na", vi: "giống với (+ Cách 4)" }
        ],
        sentences: [
          { ru: "Она умная, дружелюбная и весёлая.", vi: "Bạn ấy thông minh, thân thiện và vui vẻ." },
          { ru: "Ты очень похожа на своего брата.", vi: "Bạn rất giống anh trai của bạn." },
          { ru: "Наш класс очень дружный и активный.", vi: "Lớp học của chúng tôi rất đoàn kết và năng động." },
          { ru: "Настоящий друг познаётся в беде.", vi: "Bạn tốt là người bạn giúp nhau khi hoạn nạn." }
        ],
        dialogue: [
          { speaker: "Сергей", text: "Миша, кто твой лучший друг в классе?" },
          { speaker: "Миша", text: "Мой лучший друг – Антон. Он очень честный, умный и всегда готов помочь." },
          { speaker: "Сергей", text: "А внешне он похож на кого-нибудь?" },
          { speaker: "Миша", text: "Да, он очень похож на своего старшего брата!" }
        ],
        phoneticsRule: "Phát âm cụm phụ âm câm 'стн' trong 'честный' đọc là /чесный/ (âm 'т' không phát âm).",
        quiz: {
          q: "Cấu trúc nào diễn đạt đúng câu 'Cô ấy rất giống mẹ của mình'?",
          options: [
            "Она очень похожа на свою маму.",
            "Она очень похожа своей маме.",
            "Она очень похожа о своей маме.",
            "Она очень похожа на своей маме."
          ],
          ans: 0,
          explain: "Cấu trúc chuẩn là 'похож/похожа на кого (Cách 4 - Akkusativ)': похожа на свою маму."
        }
      },
      {
        num: 5,
        titleRu: "Вся семья вместе, так и душа на месте",
        titleVi: "Cả nhà sum vầy lòng dạ mới an yên",
        grammar: "Nói về nghề nghiệp các thành viên gia đình (работает кем - Cách 5); cách dùng và biến cách của đại từ sở hữu phản thân 'свой' (của mình) thay thế cho мой, твой, его, её, наш, ваш, их khi cùng chủ ngữ.",
        vocab: [
          { ru: "инженер", phonetic: "in-zhe-ner", vi: "kỹ sư" },
          { ru: "повар", phonetic: "po-var", vi: "đầu bếp" },
          { ru: "врач", phonetic: "vrach", vi: "bác sĩ y khoa" },
          { ru: "дружная семья", phonetic: "druzh-na-ya sem'-ya", vi: "gia đình hòa thuận, gắn kết" },
          { ru: "старший брат", phonetic: "star-shiy brat", vi: "anh trai" },
          { ru: "младшая сестра", phonetic: "mlat-sha-ya ses-tra", vi: "em gái" },
          { ru: "свой / своя / своё / свои", phonetic: "svoy / sva-ya", vi: "của chính mình" },
          { ru: "гордиться", phonetic: "gar-dit'-sya", vi: "tự hào về (+ Cách 5)" }
        ],
        sentences: [
          { ru: "Мой папа инженер, а мама работает поваром.", vi: "Bố tôi là kỹ sư, còn mẹ làm đầu bếp." },
          { ru: "Я очень люблю свою семью.", vi: "Tôi rất yêu quý gia đình của mình." },
          { ru: "Каждый вечер мы собираемся за своим круглым столом.", vi: "Mỗi tối gia đình tôi đều quây quần bên chiếc bàn tròn của mình." },
          { ru: "Антон гордится своей старшей сестрой.", vi: "Anton rất tự hào về người chị gái của mình." }
        ],
        dialogue: [
          { speaker: "Наташа", text: "Расскажи, пожалуйста, о своей семье, Нам!" },
          { speaker: "Нам", text: "С удовольствием! Наша семья большая: бабушка, родители, я и младшая сестра. Мой папа – врач, он работает в больнице." },
          { speaker: "Наташа", text: "А кем работает твоя мама?" },
          { speaker: "Нам", text: "Моя мама работает учительницей в школе. Мы очень любим свою семью!" }
        ],
        phoneticsRule: "Quy tắc dùng đại từ 'свой': Chỉ dùng khi người sở hữu chính là chủ ngữ của câu. 'Я люблю свою маму' (Tôi yêu mẹ tôi). Nếu nói 'Он любит его маму' nghĩa là 'Cậu ấy yêu mẹ của người khác'.",
        quiz: {
          q: "Điền đại từ phản thân thích hợp: 'Антон помогает _____ (свой) отцу в саду.'",
          options: ["своему", "своим", "своего", "своей"],
          ans: 0,
          explain: "Động từ 'помогать' đòi hỏi Cách 3 (Dativ). 'отец' là danh từ giống đực nên biến đổi thành 'своему отцу'."
        }
      },
      {
        num: 6,
        titleRu: "На цвет и вкус товарищей нет",
        titleVi: "Chín người mười ý, mỗi người một sở thích",
        grammar: "Sở thích và thời gian rảnh rỗi; hai cấu trúc tương đương: [Кто (1) любит + Động từ nguyên thể / Danh từ (4)] và [Кому (3) нравится / нравятся + Động từ nguyên thể / Danh từ (1)]; tính từ ngắn đuôi 'свободен', 'занят'.",
        vocab: [
          { ru: "свободное время", phonetic: "sva-bod-na-ye vre-mya", vi: "thời gian rảnh rỗi" },
          { ru: "мультфильм", phonetic: "mul't-fil'm", vi: "phim hoạt hình" },
          { ru: "свободен / свободна", phonetic: "sva-bo-den / sva-bod-na", vi: "đang rảnh rỗi (nam / nữ)" },
          { ru: "занят / занята", phonetic: "za-nyat / za-nya-ta", vi: "đang bận việc (nam / nữ)" },
          { ru: "договорились", phonetic: "da-ga-va-ri-lis'", vi: "nhất trí, đồng ý thế nhé" },
          { ru: "нравиться", phonetic: "nra-vit'-sya", vi: "thích (đi với Cách 3)" },
          { ru: "национальное блюдо", phonetic: "na-tsya-nal'-na-ye blyu-da", vi: "món ăn truyền thống dân tộc" },
          { ru: "вкусный", phonetic: "vkus-nyy", vi: "ngon miệng" }
        ],
        sentences: [
          { ru: "Я люблю слушать музыку и смотреть фильмы.", vi: "Tôi thích nghe nhạc và xem phim." },
          { ru: "Мне очень нравятся вьетнамские блюда.", vi: "Tôi rất thích các món ăn Việt Nam." },
          { ru: "Сегодня я занят, а завтра вечером я свободен.", vi: "Hôm nay tớ bận, nhưng tối mai tớ rảnh." },
          { ru: "Тебе нравится русская кухня? – Да, особенно борщ и блины!", vi: "Cậu có thích ẩm thực Nga không? – Có, nhất là món súp củ cải đỏ và bánh xèo blini!" }
        ],
        dialogue: [
          { speaker: "Ольга", text: "Что ты любишь делать в свободное время, Май?" },
          { speaker: "Май", text: "Мне очень нравится рисовать и слушать русскую музыку. А тебе?" },
          { speaker: "Ольга", text: "Я больше люблю читать книги о путешествиях и готовить вкусные блюда." }
        ],
        phoneticsRule: "Cặp cấu trúc: 'Я люблю музыку (Akkusativ)' = 'Мне (Dativ) нравится музыка (Nominativ)'. Nếu tân ngữ số nhiều: 'Мне нравятся фильмы'.",
        quiz: {
          q: "Chọn dạng đúng của động từ trong câu: 'Мне очень _____ (нравиться) русские народные сказки.'",
          options: ["нравятся", "нравится", "любит", "нравилась"],
          ans: 0,
          explain: "Chủ ngữ ngữ pháp ở đây là 'русские народные сказки' (những câu chuyện cổ tích - số nhiều), do đó động từ chia là 'нравятся'."
        }
      }
    ]
  },
  {
    themeNum: 3,
    part: "Tập Một",
    themeTitleRu: "ТЕМА 3: МИР НАЧИНАЕТСЯ С УЛЫБКИ",
    themeTitleVi: "Thế giới khởi nguồn từ một nụ cười",
    themeDesc: "Đất nước và danh thắng Liên bang Nga, biểu tượng Tổ quốc Việt Nam, bốn phương trời và du lịch trải nghiệm.",
    uroks: [
      {
        num: 7,
        titleRu: "Русь – богатырская",
        titleVi: "Nước Nga hùng vĩ tráng lệ",
        grammar: "Địa lý, quốc kỳ, quốc ca và các biểu tượng nước Nga; động từ находиться где (Cách 6); đại từ quan hệ который, которая, которое, которые ở Cách 1.",
        vocab: [
          { ru: "столица", phonetic: "sta-li-tsa", vi: "thủ đô" },
          { ru: "Российская Федерация", phonetic: "Ras-siy-ska-ya Fe-de-ra-tsi-ya", vi: "Liên bang Nga" },
          { ru: "государственный гимн", phonetic: "ga-su-dar-stven-nyy gimn", vi: "quốc ca" },
          { ru: "природные ресурсы", phonetic: "pri-rod-nye re-sur-sy", vi: "tài nguyên thiên nhiên" },
          { ru: "находиться", phonetic: "na-kha-dit'-sya", vi: "tọa lạc, nằm ở" },
          { ru: "озеро Байкал", phonetic: "o-ze-ra Bay-kal", vi: "hồ Baikal huyền thoại" },
          { ru: "глубокий", phonetic: "glu-bo-kiy", vi: "sâu thẳm" },
          { ru: "территория", phonetic: "ter-ri-to-ri-ya", vi: "lãnh thổ, diện tích" }
        ],
        sentences: [
          { ru: "Москва – столица России, которая находится в европейской части.", vi: "Moskva là thủ đô của Nga, nằm ở phần lãnh thổ châu Âu." },
          { ru: "Байкал – это самое глубокое озеро в мире.", vi: "Baikal là hồ nước sâu nhất trên thế giới." },
          { ru: "Россия – самое большое по территории государство на планете.", vi: "Nước Nga là quốc gia có diện tích lãnh thổ lớn nhất hành tinh." },
          { ru: "Государственный флаг России состоит из трёх цветов: белого, синего и красного.", vi: "Quốc kỳ Nga gồm 3 màu: trắng, xanh dương và đỏ." }
        ],
        dialogue: [
          { speaker: "Учитель", text: "Ребята, кто знает, какое озеро в России самое глубокое в мире?" },
          { speaker: "Ученик", text: "Это знаменитое озеро Байкал! Там очень чистая и прозрачная вода." },
          { speaker: "Учитель", text: "Правильно, молодец! Байкал – это настоящее чудо природы." }
        ],
        phoneticsRule: "Đại từ quan hệ 'который' hòa hợp về giống và số với danh từ đứng trước trong mệnh đề chính: 'Москва (giống cái) -> которая находится...'.",
        quiz: {
          q: "Chọn đại từ quan hệ phù hợp: 'Россия – это великая страна, _____ имеет богатую историю.'",
          options: ["которая", "который", "которое", "которые"],
          ans: 0,
          explain: "'страна' là danh từ giống cái (feminine) số ít, do đó đại từ quan hệ thay thế là 'которая'."
        }
      },
      {
        num: 8,
        titleRu: "На чужой стороне Родина милей вдвойне",
        titleVi: "Đi xa mới thấu quê nhà thân thương",
        grammar: "Địa lý và danh thắng Việt Nam; 4 phương hướng (север, юг, восток, запад; на севере, на юге...); cấu trúc Кому (3) можно + Động từ nguyên thể; cấu trúc đồng nghĩa: [Кто/Что является кем/чем - Cách 5].",
        vocab: [
          { ru: "Родина", phonetic: "Ro-di-na", vi: "Tổ quốc, quê hương" },
          { ru: "достопримечательность", phonetic: "das-ta-pri-me-cha-tel'-nast'", vi: "danh lam thắng cảnh" },
          { ru: "север / юг / восток / запад", phonetic: "se-ver / yug / vas-tok / za-pad", vi: "bắc / nam / đông / tây" },
          { ru: "пещера Шондонг", phonetic: "pe-shche-ra Shon-dong", vi: "hang Sơn Đoòng kỳ vĩ" },
          { ru: "являться", phonetic: "yav-lyat'-sya", vi: "là, đóng vai trò là (+ Cách 5)" },
          { ru: "Юго-Восточная Азия", phonetic: "Yu-ga Vas-toch-na-ya A-zi-ya", vi: "khu vực Đông Nam Á" },
          { ru: "побережье", phonetic: "pa-be-rezh'-ye", vi: "bờ biển dài" },
          { ru: "гостеприимный", phonetic: "gas-te-pri-im-nyy", vi: "hiếu khách" }
        ],
        sentences: [
          { ru: "Вьетнам находится в Юго-Восточной Азии.", vi: "Việt Nam nằm ở khu vực Đông Nam Á." },
          { ru: "Ханой является столицей Вьетнама.", vi: "Hà Nội là thủ đô của Việt Nam." },
          { ru: "На севере Вьетнама находятся высокие горы и живописные рисовые террасы.", vi: "Ở miền bắc Việt Nam có núi cao và ruộng bậc thang đẹp như tranh vẽ." },
          { ru: "В заливе Халонг туристам можно плавать на лодках и любоваться островами.", vi: "Tại vịnh Hạ Long du khách có thể chèo thuyền ngắm cảnh các hòn đảo." }
        ],
        dialogue: [
          { speaker: "Иван", text: "Май, расскажи мне о самых известных достопримечательностях Вьетнама!" },
          { speaker: "Май", text: "В нашей стране много удивительных мест: залив Халонг, старинный город Хойан и гигантская пещера Шондонг." },
          { speaker: "Иван", text: "Я мечтаю однажды приехать во Вьетнам и увидеть всё своими глазами!" }
        ],
        phoneticsRule: "Từ chỉ phương hướng ở Cách 6 chỉ nơi chốn luôn dùng giới từ 'на': на севере (ở miền bắc), на юге (ở miền nam), на востоке (ở miền đông), на западе (ở miền tây).",
        quiz: {
          q: "Trong cấu trúc 'Ханой является _____ (столица) Вьетнама', danh từ 'столица' chia ở Cách 5 (Công cụ cách) là gì?",
          options: ["столицей", "столицу", "столице", "столицы"],
          ans: 0,
          explain: "Động từ 'являться' luôn đòi hỏi bổ ngữ Cách 5 (Tvoritel'nyy): являться кем/чем -> является столицей."
        }
      },
      {
        num: 9,
        titleRu: "Кто путешествует, тот познает",
        titleVi: "Đi một ngày đàng học một sàng khôn",
        grammar: "Chủ đề du lịch; cấu trúc tương đương: [Кто был / бывал где (Cách 6) = Кто ходил / ездил куда (Cách 4)]; cấu trúc đặt tên: [Как называется что? / Что называется чем (Cách 5)].",
        vocab: [
          { ru: "путешествовать", phonetic: "pu-te-she-stva-vat'", vi: "đi du lịch" },
          { ru: "Красная площадь", phonetic: "Kras-na-ya plosh'-shat'", vi: "Quảng trường Đỏ" },
          { ru: "пешеходная улица", phonetic: "pe-she-khod-na-ya u-li-tsa", vi: "tuyến phố đi bộ" },
          { ru: "морепродукты", phonetic: "mo-re-pra-duk-ty", vi: "hải sản tươi ngon" },
          { ru: "называться", phonetic: "na-zy-vat'-sya", vi: "được mang tên là (+ Cách 5)" },
          { ru: "залив Халонг", phonetic: "za-lif Kha-long", vi: "vịnh Hạ Long" },
          { ru: "сердце города", phonetic: "ser-tse go-ra-da", vi: "trái tim của thành phố" },
          { ru: "экскурсия", phonetic: "eks-kur-si-ya", vi: "chuyến tham quan có hướng dẫn viên" }
        ],
        sentences: [
          { ru: "Летом я со своей семьёй ездил в залив Халонг.", vi: "Mùa hè tôi cùng gia đình đi vịnh Hạ Long." },
          { ru: "Озеро Хоанкием называется сердцем Ханоя.", vi: "Hồ Hoàn Kiếm được gọi là trái tim của Hà Nội." },
          { ru: "Как называется эта красивая старинная башня?", vi: "Tòa tháp cổ kính tuyệt đẹp này có tên gọi là gì thế?" },
          { ru: "В прошлом году наш класс побывал в Санкт-Петербурге.", vi: "Năm ngoái lớp chúng tôi đã từng đến thăm thành phố Sankt-Peterburg." }
        ],
        dialogue: [
          { speaker: "Алексей", text: "Где вы отдыхали прошлым летом?" },
          { speaker: "Лам", text: "Мы ездили в приморский город Дананг. Мы купались в море и пробовали вкусные морепродукты." },
          { speaker: "Алексей", text: "А как называется знаменитый мост в Дананге?" },
          { speaker: "Лам", text: "Он называется Золотым мостом. Его держат две гигантские каменные руки!" }
        ],
        phoneticsRule: "Hỏi tên vật: 'Как называется этот музей?' (Bảo tàng này tên là gì?). Trả lời: 'Он называется Государственным Эрмитажем' (Cách 5).",
        quiz: {
          q: "Cặp câu nào dưới đây diễn đạt ý nghĩa hoàn toàn tương đương nhau?",
          options: [
            "Летом я был в Москве. = Летом я ездил в Москву.",
            "Летом я был в Москве. = Летом я уехал из Москвы.",
            "Летом я был в Москве. = Летом я буду жить в Москве.",
            "Летом я был в Москве. = Летом я не видел Москву."
          ],
          ans: 0,
          explain: "'был где (Cách 6)' và 'ездил куда (Cách 4)' đều biểu thị hành động đã từng đi đến đó và trở về."
        }
      }
    ]
  },
  {
    themeNum: 4,
    part: "Tập Hai",
    themeTitleRu: "ТЕМА 4: ОДНА У ЧЕЛОВЕКА МАТЬ, ОДНА У НЕГО И РОДИНА",
    themeTitleVi: "Mỗi người chỉ có một người Mẹ, cũng như chỉ có một Tổ quốc",
    themeDesc: "Các ngày lễ lớn, lời chúc tụng, động từ chuyển động có tiền tố po-, pri-, u- và thời tiết 4 mùa.",
    uroks: [
      {
        num: 10,
        titleRu: "Всякая душа празднику рада",
        titleVi: "Lòng ai chẳng rộn ràng khi ngày hội đến",
        grammar: "Các ngày lễ lớn (Tết, 8/3, Ngày Nhà giáo 20/11, Ngày Chiến thắng 9/5); từ chỉ tần suất ở Cách 4: каждый день, каждую неделю, каждое утро, каждый год; mẫu câu chúc mừng: [Поздравлять кого (4) с чем (5)] và [Желать кому (3) чего (2)].",
        vocab: [
          { ru: "праздник", phonetic: "praz-nik", vi: "ngày lễ, ngày hội" },
          { ru: "поздравлять / поздравить", phonetic: "paz-drav-lyat' / paz-dra-vit'", vi: "chúc mừng (+ Cách 4 + с Cách 5)" },
          { ru: "желать / пожелать", phonetic: "zhe-lat' / pa-zhe-lat'", vi: "cầu chúc (+ Cách 3 + Cách 2)" },
          { ru: "здоровье", phonetic: "zda-rov'-ye", vi: "sức khỏe dồi dào" },
          { ru: "счастье", phonetic: "shchas-t'ye", vi: "hạnh phúc ngập tràn" },
          { ru: "открытка", phonetic: "at-kryt-ka", vi: "tấm bưu thiếp, thiệp chúc mừng" },
          { ru: "Новый год", phonetic: "No-vyy got", vi: "Năm mới, Tết" },
          { ru: "подарок", phonetic: "pa-da-rak", vi: "món quà tặng" }
        ],
        sentences: [
          { ru: "Поздравляю тебя с праздником!", vi: "Chúc mừng bạn nhân ngày lễ!" },
          { ru: "От всей души желаю тебе крепкого здоровья и счастья!", vi: "Từ tận đáy lòng, chúc bạn dồi dào sức khỏe và hạnh phúc!" },
          { ru: "Каждый год родители дарят мне интересную книгу.", vi: "Mỗi năm bố mẹ đều tặng tôi một cuốn sách hay." },
          { ru: "Дорогие учителя, поздравляем вас с Днём учителя!", vi: "Kính thưa các thầy cô giáo, chúng em xin chúc mừng thầy cô nhân Ngày Nhà giáo!" }
        ],
        dialogue: [
          { speaker: "Дима", text: "Май, поздравляю тебя с наступающим Новым годом!" },
          { speaker: "Май", text: "Спасибо большое, Дима! И тебя тоже с праздником! Что ты желаешь своим друзьям?" },
          { speaker: "Дима", text: "Я желаю всем отличных успехов в учёбе, крепкого здоровья и радости!" }
        ],
        phoneticsRule: "Âm câm trong từ 'праздник' đọc là /празник/ (chữ 'д' không phát âm). 'счастье' đọc là /щастье/ (phụ âm 'сч' đọc thành /щ/).",
        quiz: {
          q: "Cấu trúc lời chúc 'Желать кому (3) чего (2)': 'Желаю тебе крепкого _____ (здоровье) и огромного _____ (счастье)!' điền đúng là:",
          options: ["здоровья, счастья", "здоровью, счастью", "здоровьем, счастьем", "здоровье, счастье"],
          ans: 0,
          explain: "Động từ 'желать' đòi hỏi danh từ ở Cách 2 (Roditel'nyy): желать здоровья (n.) và счастья (n.)."
        }
      },
      {
        num: 11,
        titleRu: "Где кто родился, там и пригодился",
        titleVi: "Nơi chôn rau cắt rốn, đất lành chim đậu",
        grammar: "Giới thiệu TP. Hồ Chí Minh và đô thị hiện đại; hệ thống động từ chuyển động có tiền tố cơ bản: по- (bắt đầu đi/sắp đi: пойти, поехать), при- (đến nơi, xuất hiện: прийти, приехать), у- (rời khỏi, đi xa: уйти, уехать).",
        vocab: [
          { ru: "современный город", phonetic: "sav-re-men-nyy go-rat", vi: "thành phố hiện đại" },
          { ru: "рынок Бентхань", phonetic: "ry-nak Ben-tkhan'", vi: "chợ Bến Thành lịch sử" },
          { ru: "небоскрёб", phonetic: "ne-bas-kryop", vi: "tòa nhà chọc trời cao tầng" },
          { ru: "пойти / поехать", phonetic: "pay-ti / pa-ye-khat'", vi: "bắt đầu đi (bộ / bằng xe)" },
          { ru: "прийти / приехать", phonetic: "priy-ti / pri-ye-khat'", vi: "đến nơi (bộ / bằng xe)" },
          { ru: "уйти / уехать", phonetic: "uy-ti / u-ye-khat'", vi: "rời khỏi, đi vắng (bộ / bằng xe)" },
          { ru: "достопримечательность", phonetic: "das-ta-pri-me-cha-tel'-nast'", vi: "thắng cảnh nổi tiếng" },
          { ru: "население", phonetic: "na-se-le-ni-ye", vi: "dân số đô thị" }
        ],
        sentences: [
          { ru: "Город Хошимин называют городом, который никогда не спит.", vi: "Thành phố Hồ Chí Minh được mệnh danh là thành phố không bao giờ ngủ." },
          { ru: "Вчера он ушёл на стадион, а вечером он придёт домой в пять часов.", vi: "Hôm qua cậu ấy đi ra sân vận động, và chiều tối sẽ về nhà lúc 5 giờ." },
          { ru: "Завтра наша семья поедет на экскурсию в древний город Хюэ.", vi: "Ngày mai gia đình chúng tôi sẽ đi tham quan cố đô Huế bằng ô tô." },
          { ru: "Самолёт из Москвы прилетит в аэропорт Нойбай ровно в полдень.", vi: "Chuyến bay từ Moskva sẽ hạ cánh xuống sân bay Nội Bài đúng vào buổi trưa." }
        ],
        dialogue: [
          { speaker: "Турист", text: "Скажите, пожалуйста, как доехать до рынка Бентхань?" },
          { speaker: "Житель", text: "Вы можете поехать на автобусе номер один или пойти пешком прямо по этой улице." },
          { speaker: "Турист", text: "А сколько времени займёт дорога пешком?" },
          { speaker: "Житель", text: "Примерно пятнадцать минут. Счастливого пути!" }
        ],
        phoneticsRule: "Quy tắc 3 tiền tố chuyển động cốt lõi: 'по-' = bắt đầu khởi hành / sẽ đi; 'при-' = đã đến nơi đích; 'у-' = rời khỏi điểm xuất phát đi xa.",
        quiz: {
          q: "Chọn động từ phù hợp chỉ hành động 'đã rời khỏi nhà đi vắng': 'Антона сейчас нет дома, он _____ в библиотеку.'",
          options: ["ушёл", "пришёл", "пошёл", "дошёл"],
          ans: 0,
          explain: "Tiền tố 'у-' biểu thị hành động rời khỏi nơi xuất phát: 'ушёл в библиотеку' (đã đi vắng đến thư viện rồi)."
        }
      },
      {
        num: 12,
        titleRu: "У природы нет плохой погоды",
        titleVi: "Thời tiết bốn mùa, mùa nào cũng đẹp",
        grammar: "Thời tiết và 4 mùa trong năm; quy tắc dùng danh từ 'градус' theo số đếm: 1 градус; 2, 3, 4 градуса; 5-20 градусов; cấp so sánh hơn của tính từ (đuôi -ее / -е hoặc bất quy tắc: лучше, хуже, больше, меньше, теплее, холоднее).",
        vocab: [
          { ru: "погода", phonetic: "pa-go-da", vi: "thời tiết" },
          { ru: "время года", phonetic: "vre-mya go-da", vi: "mùa trong năm" },
          { ru: "температура", phonetic: "tem-pe-ra-tu-ra", vi: "nhiệt độ không khí" },
          { ru: "градус", phonetic: "gra-dus", vi: "độ C (đơn vị nhiệt độ)" },
          { ru: "теплее / холоднее", phonetic: "tep-le-ye / kha-lad-ne-ye", vi: "ấm áp hơn / lạnh giá hơn" },
          { ru: "жаркий / морозный", phonetic: "zhar-kiy / ma-roz-nyy", vi: "nắng nóng oi bức / rét buốt" },
          { ru: "прогноз погоды", phonetic: "prag-noz pa-go-dy", vi: "dự báo thời tiết" },
          { ru: "солнечно / дождливо", phonetic: "sol-nech-na / dazhd-li-va", vi: "có nắng / có mưa" }
        ],
        sentences: [
          { ru: "Сегодня температура днём плюс восемь градусов.", vi: "Hôm nay nhiệt độ ban ngày là dương 8 độ." },
          { ru: "Весной день длиннее, чем зимой, а погода теплее.", vi: "Vào mùa xuân ngày dài hơn mùa đông và thời tiết ấm áp hơn." },
          { ru: "Летом в Ханое значительно жарче, чем в Москве.", vi: "Mùa hè ở Hà Nội nóng hơn đáng kể so với ở Moskva." },
          { ru: "По прогнозу погоды завтра будет плюс двадцать два градуса тепла.", vi: "Theo dự báo thời tiết ngày mai sẽ là dương 22 độ C." }
        ],
        dialogue: [
          { speaker: "Олег", text: "Какая температура сегодня на улице в Ханое?" },
          { speaker: "Нам", text: "Сейчас двадцать пять градусов тепла, светит солнце." },
          { speaker: "Олег", text: "А у нас в Сибири сегодня минус пятнадцать градусов и идёт пушистый снег!" }
        ],
        phoneticsRule: "Quy tắc chia đuôi từ 'градус': 1 градус (Cách 1); 2, 3, 4 градуса (Cách 2 số ít); 5 đến 20 градусов (Cách 2 số nhiều).",
        quiz: {
          q: "Dạng danh từ đúng đi sau số '4' trong câu nhiệt độ 'Сегодня на улице плюс 24 _____':",
          options: ["градуса", "градусов", "градус", "градусам"],
          ans: 0,
          explain: "Số tận cùng là 2, 3, 4 (24 kết thúc bằng 4) đi với danh từ giống đực ở Cách 2 số ít: '24 градуса'."
        }
      }
    ]
  },
  {
    themeNum: 5,
    part: "Tập Hai",
    themeTitleRu: "ТЕМА 5: ЗНАНИЕ – ОПОРА В ЖИЗНИ",
    themeTitleVi: "Tri thức là điểm tựa vững chắc của cuộc đời",
    themeDesc: "Trường lớp, thể động từ НСВ/СВ, các môn học, câu gián tiếp, nghề nghiệp ước mơ và bài ôn tập tổng kết.",
    uroks: [
      {
        num: 13,
        titleRu: "В классе учиться – с обществом сдружиться",
        titleVi: "Đến lớp học hay, cùng bạn dựng xây tình bạn",
        grammar: "Sinh hoạt lớp học và nề nếp kỷ luật; cặp thể của động từ: Chưa hoàn thành thể (НСВ - quá trình, thói quen lặp lại) và Hoàn thành thể (СВ - kết quả, một lần); cấu trúc hành động đồng thời: [Когда + НСВ...] và hành động nối tiếp: [Сначала СВ..., потом СВ...].",
        vocab: [
          { ru: "объяснять / объяснить", phonetic: "ab-yas-nyat' / ab-yas-nit'", vi: "giảng bài, giải thích bài" },
          { ru: "делать / сделать упражнения", phonetic: "de-lat' / sde-lat'", vi: "làm bài tập" },
          { ru: "столовая", phonetic: "sta-lo-va-ya", vi: "nhà ăn, căng tin trường học" },
          { ru: "сначала", phonetic: "sna-cha-la", vi: "thoạt đầu, trước tiên" },
          { ru: "потом", phonetic: "pa-tom", vi: "sau đó, tiếp theo" },
          { ru: "внимательно слушать", phonetic: "vni-ma-tel'-na slu-shat'", vi: "chăm chú lắng nghe" },
          { ru: "дежурный", phonetic: "de-zhur-nyy", vi: "học sinh trực nhật nhật" },
          { ru: "перемена", phonetic: "pe-re-me-na", vi: "giờ ra chơi giữa các tiết" }
        ],
        sentences: [
          { ru: "Когда учитель объясняет урок, мы внимательно слушаем.", vi: "Khi thầy giáo giảng bài, chúng tôi chăm chú lắng nghe." },
          { ru: "Сначала я сделаю домашнее задание, потом я пойду гулять.", vi: "Trước tiên tớ sẽ làm bài tập về nhà, sau đó tớ mới đi chơi." },
          { ru: "На перемене ученики отдыхают и ходят в школьную столовую.", vi: "Vào giờ ra chơi các học sinh nghỉ ngơi và đi xuống nhà ăn trường." },
          { ru: "Вчера ученики повторили все правила и сдали тест на отлично.", vi: "Hôm qua các bạn học sinh đã ôn tập lại mọi quy tắc và nộp bài kiểm tra đạt điểm xuất sắc." }
        ],
        dialogue: [
          { speaker: "Учитель", text: "Здравствуйте, ребята! Кто сегодня дежурный по классу?" },
          { speaker: "Дежурный", text: "Я дежурный. Доска чистая, мел готов, все ученики на месте." },
          { speaker: "Учитель", text: "Прекрасно! Откройте тетради, сначала мы проверим домашнюю работу." }
        ],
        phoneticsRule: "Hành động đồng thời dùng 2 động từ thể НСВ: 'Когда учитель объясняет (НСВ), мы слушаем (НСВ)'. Hành động tuần tự dùng thể СВ: 'Сначала сделаю (СВ), потом пойду (СВ)'.",
        quiz: {
          q: "Chọn động từ hoàn thành thể (СВ) phù hợp chỉ kết quả hoàn tất bài tập: 'Сначала я _____ (làm xong) все уроки, потом посмотрел фильм.'",
          options: ["сделал", "делал", "делаю", "буду делать"],
          ans: 0,
          explain: "'сделал' là động từ thể hoàn thành (СВ) biểu thị hành động đã hoàn tất trọn vẹn kết quả trước khi hành động tiếp theo diễn ra."
        }
      },
      {
        num: 14,
        titleRu: "Ученье – свет, неученье – тьма",
        titleVi: "Học là ánh sáng, không học là bóng đêm",
        grammar: "Các môn học phổ thông và thời khóa biểu học tập; chuyển đổi câu trực tiếp sang câu gián tiếp với các động từ dẫn dắt: сказать, спросить, ответить (rằng = что, liệu có = ли, từ để hỏi giữ nguyên).",
        vocab: [
          { ru: "расписание", phonetic: "ras-pi-sa-ni-ye", vi: "thời khóa biểu lớp học" },
          { ru: "математика", phonetic: "ma-te-ma-ti-ka", vi: "môn Toán học" },
          { ru: "литература", phonetic: "li-te-ra-tu-ra", vi: "môn Ngữ văn" },
          { ru: "история", phonetic: "is-to-ri-ya", vi: "môn Lịch sử" },
          { ru: "информатика", phonetic: "in-far-ma-ti-ka", vi: "môn Tin học" },
          { ru: "спросить / отвечать", phonetic: "spra-sit' / at-ve-chat'", vi: "hỏi / trả lời" },
          { ru: "трудный / лёгкий", phonetic: "trud-nyy / lyokh-kiy", vi: "khó / dễ" },
          { ru: "любимый предмет", phonetic: "lyu-bi-myy pred-met", vi: "môn học yêu thích nhất" }
        ],
        sentences: [
          { ru: "Маша спросила Антона, какой предмет он любит.", vi: "Masha đã hỏi Anton thích môn học nào." },
          { ru: "Антон ответил, что ему нравится математика.", vi: "Anton trả lời rằng cậu ấy thích môn Toán." },
          { ru: "По расписанию в понедельник у нас четыре урока.", vi: "Theo thời khóa biểu, vào thứ Hai chúng tôi có bốn tiết học." },
          { ru: "Учитель сказал, что завтра будет контрольная работа.", vi: "Thầy giáo đã thông báo rằng ngày mai sẽ có bài kiểm tra." }
        ],
        dialogue: [
          { speaker: "Аня", text: "Максим, какой твой самый любимый предмет в школе?" },
          { speaker: "Максим", text: "Больше всего я люблю информатику и математику, потому что они развивают логику." },
          { speaker: "Аня", text: "А я предпочитаю литературу и иностранные языки." }
        ],
        phoneticsRule: "Khi chuyển câu hỏi gián tiếp có từ để hỏi: từ để hỏi làm từ nối: 'Маша спросила, какой предмет он любит'. Nếu là câu trần thuật: dùng liên từ 'что': 'Он ответил, что...'.",
        quiz: {
          q: "Câu gián tiếp nào chuyển đổi chính xác từ câu trực tiếp: 'Антон сказал: \"Я люблю русский язык\"'?",
          options: [
            "Антон сказал, что он любит русский язык.",
            "Антон сказал, потому что он любит русский язык.",
            "Антон сказал, какой он любит русский язык.",
            "Антон сказал, где он любит русский язык."
          ],
          ans: 0,
          explain: "Câu trần thuật trực tiếp được chuyển sang câu gián tiếp bằng liên từ 'что' (rằng)."
        }
      },
      {
        num: 15,
        titleRu: "Всякий человек по делу узнаётся",
        titleVi: "Nhìn việc biết người, nhìn tài đoán đức",
        grammar: "Nghề nghiệp tương lai và năng khiếu bản thân; động từ [увлекаться чем - Cách 5] (đam mê, say mê cái gì); động từ [стать кем - Cách 5] (trở thành ai/làm nghề gì); câu phức chỉ nguyên nhân với liên từ 'так как' / 'потому что'.",
        vocab: [
          { ru: "профессия", phonetic: "pra-fes-si-ya", vi: "nghề nghiệp chuyên môn" },
          { ru: "программист", phonetic: "prag-ram-mist", vi: "kỹ sư lập trình viên" },
          { ru: "переводчик", phonetic: "pe-re-vod-chik", vi: "biên dịch / phiên dịch viên" },
          { ru: "увлекаться", phonetic: "uv-le-kat'-sya", vi: "say mê, đam mê (+ Cách 5)" },
          { ru: "стать", phonetic: "stat'", vi: "trở thành, làm nghề (+ Cách 5)" },
          { ru: "архитектор", phonetic: "ar-khi-tek-tar", vi: "kiến trúc sư" },
          { ru: "талантливый", phonetic: "ta-lant-li-vyy", vi: "tài năng, có năng khiếu" },
          { ru: "мечта", phonetic: "mech-ta", vi: "ước mơ hoài bão" }
        ],
        sentences: [
          { ru: "Когда я вырасту, я хочу стать хорошим врачом.", vi: "Khi lớn lên, tôi muốn trở thành một bác sĩ giỏi." },
          { ru: "Я увлекаюсь информатикой, поэтому хочу стать программистом.", vi: "Tôi đam mê tin học, vì thế tôi muốn trở thành một lập trình viên." },
          { ru: "Она увлекается иностранными языками и мечтает стать переводчиком.", vi: "Bạn ấy đam mê ngoại ngữ và ước mơ trở thành một biên dịch viên." },
          { ru: "Все профессии важны, все профессии нужны.", vi: "Mọi nghề nghiệp đều quan trọng, nghề nào cũng cần thiết cho xã hội." }
        ],
        dialogue: [
          { speaker: "Учитель", text: "Кем ты мечтаешь стать в будущем, Виктор?" },
          { speaker: "Виктор", text: "Я серьёзно увлекаюсь физикой и космосом, поэтому мечтаю стать инженером-конструктором." },
          { speaker: "Учитель", text: "Прекрасная цель! Для этого нужно усердно учиться." }
        ],
        phoneticsRule: "Động từ 'стать' (trở thành) và 'увлекаться' (đam mê) luôn đòi hỏi danh từ ở Cách 5 (Công cụ cách): стать врачом, стать переводчиком, увлекаться музыкой.",
        quiz: {
          q: "Điền dạng đúng của danh từ ở Cách 5: 'Мой брат мечтает стать известным _____ (программист).'",
          options: ["программистом", "программиста", "программисту", "программисте"],
          ans: 0,
          explain: "Sau động từ 'стать кем' danh từ giống đực nhận đuôi -ом ở Cách 5: стать известным программистом."
        }
      },
      {
        num: 16,
        titleRu: "Повторение – мать успеха",
        titleVi: "Ôn tập là mẹ của thành công",
        grammar: "Tổng kết toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết chương trình Tiếng Nga 6; dự án thực hành: 'Tôi và đất nước tôi' (Giới thiệu bản thân và cẩm nang du lịch Nga - Việt).",
        vocab: [
          { ru: "повторение", phonetic: "pav-ta-re-ni-ye", vi: "sự ôn tập củng cố" },
          { ru: "будущее", phonetic: "bu-du-shche-ye", vi: "tương lai tươi sáng" },
          { ru: "успех", phonetic: "us-pekh", vi: "thành công rực rỡ" },
          { ru: "о себе", phonetic: "a se-be", vi: "về bản thân mình" },
          { ru: "проект", phonetic: "pra-yekt", vi: "dự án học tập" },
          { ru: "презентация", phonetic: "pre-zen-ta-tsi-ya", vi: "bài thuyết trình báo cáo" },
          { ru: "знания", phonetic: "zna-ni-ya", vi: "hành trang tri thức" },
          { ru: "отлично", phonetic: "at-lich-na", vi: "xuất sắc, điểm 10" }
        ],
        sentences: [
          { ru: "Повторение – мать учения.", vi: "Ôn tập là mẹ của thành công / Học đi đôi với hành." },
          { ru: "Каждый день я помогаю маме готовить вкусные блюда.", vi: "Mỗi ngày tôi đều giúp mẹ nấu các món ăn ngon." },
          { ru: "Мы подготовили замечательный проект о культурных традициях России и Вьетнама.", vi: "Chúng tôi đã chuẩn bị một dự án tuyệt vời về truyền thống văn hóa Nga và Việt Nam." },
          { ru: "Знания открывают перед нами все двери в будущее.", vi: "Tri thức mở ra trước mắt chúng ta mọi cánh cửa bước vào tương lai." }
        ],
        dialogue: [
          { speaker: "Учитель", text: "Поздравляю вас, ребята! Мы успешно завершили курс русского языка шестого класса." },
          { speaker: "Ученики", text: "Спасибо вам, учитель! Русский язык очень красивый, богатый и интересный!" }
        ],
        phoneticsRule: "Tổng kết câu châm ngôn kinh điển: 'Повторение – мать учения' (Lặp đi lặp lại và rèn luyện là nền móng của sự uyên bác).",
        quiz: {
          q: "Câu ngạn ngữ nổi tiếng của nước Nga 'Повторение – мать учения' mang ý nghĩa gì?",
          options: [
            "Học đi đôi với hành, ôn tập thường xuyên là chìa khóa của thành công",
            "Học một lần là nhớ suốt đời",
            "Không cần phải làm lại bài tập",
            "Môn học nào cũng khó như nhau"
          ],
          ans: 0,
          explain: "'Повторение – мать учения' khẳng định việc ôn luyện kiên trì là yếu tố quyết định để tiếp thu kiến thức vững chắc."
        }
      }
    ]
  }
];

module.exports = { themesData };
console.log("Themes data prepared successfully!");
