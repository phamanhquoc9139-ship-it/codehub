// Dữ liệu Tiếng Nga 7 - Phần 2: Chủ điểm 4, Chủ điểm 5 (Bài 10 -> Bài 16)
// Kèm Bảng ngữ pháp 6 cách & Quy tắc phát âm tiếng Nga
// Theo SGK Tiếng Nga 7 - Tập 2 (GDPT 2018)

const themesPart2 = [
  // ==================== CHỦ ĐIỂM 4 ====================
  {
    themeNum: 4,
    title: "Chủ điểm 4: Родной край – это сердцу рай",
    vnTitle: "Quê hương là miền yêu dấu",
    desc: "Khám phá thủ đô Moskva, Quảng trường Đỏ, Điện Kremlin và thủ đô Hà Nội ngàn năm văn hiến; mệnh đề quan hệ который và các cấp so sánh.",
    lessons: [
      // Bài 10
      {
        id: "bai-10",
        num: 10,
        title: "Урок 10. Кто в Москве не бывал, красоты не видал",
        vnTitle: "Ai chưa đến Moskva thì chưa thấy vẻ đẹp",
        goal: "Giới thiệu thủ đô Moskva; hỏi đường và vị trí các công trình danh thắng; sử dụng mệnh đề quan hệ который hòa hợp giống/số/cách.",
        vocab: [
          { ru: "столица", stress: "столи́ца", vn: "Thủ đô", type: "Danh từ (giống cái)" },
          { ru: "Кремль", stress: "Кремль", vn: "Điện Kremlin (tòa thành cổ Moskva)", type: "Danh từ (giống đực)" },
          { ru: "Красная площадь", stress: "Крáсная плóщадь", vn: "Quảng trường Đỏ", type: "Cụm danh từ" },
          { ru: "собор Василия Блаженного", stress: "собóр Васи́лия Блажéнного", vn: "Nhà thờ Thánh Basil", type: "Cụm danh từ" },
          { ru: "Большой театр", stress: "Большóй теáтр", vn: "Nhà hát Lớn Bolshoi", type: "Cụm danh từ" },
          { ru: "Третьяковская галерея", stress: "Третьякóвская галерéя", vn: "Bảo tàng Tretyakov", type: "Cụm danh từ" },
          { ru: "Московский университет", stress: "Москóвский университéт", vn: "Đại học Tổng hợp Quốc gia Moskva (MGU)", type: "Cụm danh từ" },
          { ru: "который", stress: "котóрый", vn: "Mà, người mà (đại từ quan hệ)", type: "Đại từ" },
          { ru: "памятник", stress: "пáмятник", vn: "Tượng đài (памятник Пушкину)", type: "Danh từ" },
          { ru: "достопримечательность", stress: "достопримечáтельность", vn: "Danh lam thắng cảnh, điểm tham quan", type: "Danh từ" }
        ],
        grammar: {
          title: "Mệnh đề quan hệ với Đại từ КОТОРЫЙ & Cách 6 vị trí trong thành phố",
          formula: "1. Đại từ который hòa hợp GIỐNG và SỐ với danh từ đứng trước nó:\n   - Giống đực số ít: который\n   - Giống cái số ít: которая\n   - Giống trung số ít: которое\n   - Số nhiều: которые\n2. CÁCH của который phụ thuộc vào vai trò ngữ pháp của nó trong mệnh đề phụ:\n   - в котором / в которой / в которых (ở nơi mà... - Cách 6)\n   - с которым (cùng với người mà... - Cách 5)",
          usage: "Dùng để mở rộng và bổ nghĩa chi tiết cho các địa danh, công trình hoặc nhân vật.",
          examples: [
            "Это известный музей, в котором хранятся шедевры искусства. (Đây là viện bảo tàng nổi tiếng, nơi lưu giữ các kiệt tác nghệ thuật.)",
            "Москва – это красивый город, который основал князь Юрий Долгорукий. (Moskva là một thành phố xinh đẹp mà Hoàng thân Yuri Dolgorukiy đã sáng lập.)",
            "Школа, в которой мы учимся, очень современная. (Ngôi trường nơi chúng tôi đang học tập rất hiện đại.)"
          ]
        },
        dialogue: {
          situation: "Học sinh Việt Nam chia sẻ với bạn Nga về ước mơ được đến thăm Moskva",
          lines: [
            { spk: "Минь", text: "Олег, русская пословица говорит: «Кто в Москве не бывал, красоты не видал». Это правда?" },
            { spk: "Олег", text: "Абсолютная правда! Москва – это огромный и сказочно красивый город." },
            { spk: "Минь", text: "Что ты советуешь мне обязательно посмотреть в первую очередь?" },
            { spk: "Олег", text: "Обязательно начни с Красной площади и Кремля. А потом посети Третьяковскую галерею." },
            { spk: "Минь", text: "Я мечтаю увидеть собор Василия Блаженного, о котором читал в учебнике!" },
            { spk: "Олег", text: "Добро пожаловать в Россию! Ты будешь в восторге." }
          ]
        },
        quiz: [
          {
            q: "Chọn dạng đúng của đại từ 'который' điền vào chỗ trống: 'Это знаменитая школа, в ___ учатся мои друзья.'",
            options: ["A. которой (giống cái Cách 6 sau giới từ 'в')", "B. котором", "C. которая", "D. которых"],
            a: 0,
            exp: "'Школа' là danh từ giống cái số ít, trong mệnh đề phụ đứng sau giới từ 'в' chỉ vị trí nên chia ở Cách 6 giống cái: в которой."
          },
          {
            q: "Nhà thờ Thánh Basil với các mái vòm củ hành rực rỡ sắc màu nằm ở địa điểm nào?",
            options: ["A. На Красной площади в Москве (Trên Quảng trường Đỏ)", "B. В Санкт-Петербурге", "C. В Киеве", "D. В Сочи"],
            a: 0,
            exp: "Собор Василия Блаженного là biểu tượng kiến trúc thế giới tọa lạc ngay trên Quảng trường Đỏ tại Moskva."
          }
        ]
      },

      // Bài 11
      {
        id: "bai-11",
        num: 11,
        title: "Урок 11. На Красной площади – встреча культур и историй",
        vnTitle: "Ở Quảng trường Đỏ: nơi gặp gỡ văn hóa và lịch sử",
        goal: "Mô tả cảnh quan, hoạt động văn hóa tại Quảng trường Đỏ; sử dụng thành thạo các cấu trúc chỉ phương hướng và vị trí tương đối.",
        vocab: [
          { ru: "напротив", stress: "напрóтив", vn: "Đối diện (đi với Cách 2)", type: "Giới từ" },
          { ru: "слева от", stress: "слéва от", vn: "Ở bên trái của... (đi với Cách 2)", type: "Cụm giới từ" },
          { ru: "справа от", stress: "спрáва от", vn: "Ở bên phải của... (đi với Cách 2)", type: "Cụm giới từ" },
          { ru: "в центре", stress: "в цéнтре", vn: "Ở trung tâm", type: "Trạng ngữ" },
          { ru: "Спасская башня", stress: "Спáсская бáшня", vn: "Tháp Spasskaya (tháp đồng hồ Kremlin)", type: "Cụm danh từ" },
          { ru: "куранты", stress: "курáнты", vn: "Đồng hồ chuông lớn trên tháp Spasskaya", type: "Danh từ số nhiều" },
          { ru: "Исторический музей", stress: "Истори́ческий музéй", vn: "Bảo tàng Lịch sử Quốc gia", type: "Cụm danh từ" },
          { ru: "ГУМ", stress: "ГУМ", vn: "Trung tâm thương mại bách hóa GUM", type: "Danh từ viết tắt" },
          { ru: "экскурсия", stress: "экскýрсия", vn: "Chuyến tham quan dã ngoại có hướng dẫn", type: "Danh từ" }
        ],
        grammar: {
          title: "Cấu trúc định vị không gian: слева от / справа от / напротив + Cách 2",
          formula: "1. Vị trí đối diện: Напротив + [Danh từ ở Cách 2] (напротив Кремля)\n2. Vị trí bên trái/bên phải: Слева от / Справа от + [Danh từ ở Cách 2] (слева от собора)\n3. Chuyển động tới nơi: идти / поехать + на площадь / в музей (Cách 4)",
          usage: "Chỉ dẫn đường đi và thuyết minh vị trí các công trình kiến trúc trên sa bàn hoặc bản đồ.",
          examples: [
            "Напротив Спасской башни находится знаменитый универмаг ГУМ. (Đối diện với tháp Spasskaya là trung tâm thương mại GUM nổi tiếng.)",
            "Справа от Исторического музея мы видим Никольскую башню. (Ở bên phải của Bảo tàng Lịch sử chúng ta nhìn thấy tháp Nikolskaya.)",
            "Каждый день тысячи туристов приходят на Красную площадь. (Mỗi ngày hàng ngàn du khách đổ về Quảng trường Đỏ.)"
          ]
        },
        dialogue: {
          situation: "Hướng dẫn viên du lịch giới thiệu các công trình xung quanh Quảng trường Đỏ",
          lines: [
            { spk: "Гид", text: "Здравствуйте, дорогие друзья! Мы находимся в сердце России – на Красной площади." },
            { spk: "Турист", text: "Какая великолепная панорама! А что это за красное здание напротив нас?" },
            { spk: "Гид", text: "Это Государственный исторический музей, в котором хранятся миллионы экспонатов." },
            { spk: "Турист", text: "А знаменитые часы-куранты находятся на башне слева?" },
            { spk: "Гид", text: "Совершенно верно, это Спасская башня Кремля. Их бой слышит вся страна в Новый год!" }
          ]
        },
        quiz: [
          {
            q: "Điền dạng đúng của từ 'Кремль' (Điện Kremlin) vào câu: 'Напротив ___ находится универмаг ГУМ.'",
            options: ["A. Кремля (Cách 2 sau giới từ напротив)", "B. Кремле", "C. Кремлю", "D. Кремлём"],
            a: 0,
            exp: "Giới từ 'напротив' (đối diện) bắt buộc đi với danh từ ở Cách 2 (Родительный падеж): напротив Кремля."
          },
          {
            q: "Đồng hồ chuông lớn 'куранты' vang lên trên ngọn tháp nào của Điện Kremlin?",
            options: ["A. Спасская башня (Tháp Spasskaya)", "B. Троицкая башня", "C. Боровицкая башня", "D. Никольская башня"],
            a: 0,
            exp: "Những hồi chuông đồng hồ 'куранты' nổi tiếng được đặt trên tháp Spasskaya của Điện Kremlin."
          }
        ]
      },

      // Bài 12
      {
        id: "bai-12",
        num: 12,
        title: "Урок 12. В сердце Ханоя мы находим спокойствие",
        vnTitle: "Trong lòng Hà Nội, ta tìm thấy bình yên",
        goal: "Giới thiệu thủ đô Hà Nội và quê hương; sử dụng cấu trúc so sánh hơn (более... чем) và so sánh nhất (самый...); mô tả vẻ đẹp bình yên.",
        vocab: [
          { ru: "родной город", stress: "роднóй гóрод", vn: "Thành phố quê hương, quê nhà", type: "Cụm danh từ" },
          { ru: "озеро Возвращённого Меча", stress: "óзеро Возвращённого Мечá", vn: "Hồ Hoàn Kiếm (Hồ Gươm)", type: "Cụm danh từ" },
          { ru: "Старый квартал", stress: "Стáрый квартáл", vn: "Khu phố cổ (36 phố phường Hà Nội)", type: "Cụm danh từ" },
          { ru: "Храм Литературы", stress: "Храм Литератýры", vn: "Văn Miếu - Quốc Tử Giám", type: "Cụm danh từ" },
          { ru: "спокойствие", stress: "спокóйствие", vn: "Sự bình yên, thanh tịnh", type: "Danh từ" },
          { ru: "более красивый, чем...", stress: "бóлее краси́вый, чем...", vn: "Đẹp hơn so với... (so sánh hơn)", type: "Cấu trúc so sánh" },
          { ru: "самый красивый", stress: "сáмый краси́вый", vn: "Đẹp nhất (so sánh nhất giống đực)", type: "Cấu trúc so sánh" },
          { ru: "самая интересная", stress: "сáмая интерéсная", vn: "Thú vị nhất (so sánh nhất giống cái)", type: "Cấu trúc so sánh" },
          { ru: "традиционное блюдо", stress: "традициóнное блю́до", vn: "Món ăn truyền thống (như Phở, Bún chả)", type: "Cụm danh từ" }
        ],
        grammar: {
          title: "Cấp so sánh của Tính từ: So sánh hơn (более + tính từ) & So sánh nhất (самый + tính từ)",
          formula: "1. So sánh hơn ghép:\n   более + [Tính từ nguyên mẫu] + чем + [Danh từ đem so sánh]\n   Ví dụ: Hà Nội có nhịp sống cổ kính hơn: более древний город, чем...\n2. So sánh nhất ghép:\n   самый / самая / самое / самые + [Tính từ nguyên mẫu] (hòa hợp theo Giống và Số)\n   - Giống đực: самый красивый город\n   - Giống cái: самая мирная столица\n   - Giống trung: самое большое озеро\n   - Số nhiều: самые добрые жители",
          usage: "Dùng để so sánh đặc điểm, danh lam thắng cảnh và ca ngợi vẻ đẹp độc đáo của các thành phố.",
          examples: [
            "Ханой – это самый красивый и зелёный город Вьетнама. (Hà Nội là thành phố đẹp và xanh nhất của Việt Nam.)",
            "Озеро Возвращённого Меча – самое мирное место в центре столицы. (Hồ Hoàn Kiếm là nơi bình yên nhất ở trung tâm thủ đô.)",
            "Этот старинный храм более древний, чем тот театр. (Ngôi đền cổ này cổ kính hơn nhà hát kia.)"
          ]
        },
        dialogue: {
          situation: "Học sinh Việt Nam giới thiệu các nét đẹp ngàn năm văn hiến của thủ đô Hà Nội với bạn bè quốc tế",
          lines: [
            { spk: "Таня", text: "Лан, расскажи мне о своём родном городе Ханое!" },
            { spk: "Лан", text: "Ханой – это столица Вьетнама с более чем тысячелетней историей." },
            { spk: "Таня", text: "Какое место в Ханое самое известное и любимое?" },
            { spk: "Лан", text: "Конечно, озеро Возвращённого Меча. Там приятно гулять под сенью деревьев." },
            { spk: "Таня", text: "А вьетнамская кухня? Что самое вкусное?" },
            { spk: "Лan", text: "Суп фо – самое знаменитое блюдо, обязательно попробуй его!" }
          ]
        },
        quiz: [
          {
            q: "Để nói 'Thành phố đẹp nhất' (город - giống đực), cấu trúc so sánh nhất nào đúng?",
            options: ["A. самый красивый город", "B. самая красивый город", "C. самое красивый город", "D. самые красивый город"],
            a: 0,
            exp: "'Город' là danh từ giống đực số ít, do đó từ so sánh nhất đi kèm phải là 'самый': самый красивый город."
          },
          {
            q: "Địa danh nào sau đây được xem là trường đại học đầu tiên của Việt Nam trong lòng Hà Nội?",
            options: ["A. Храм Литературы (Ван Мьеу - Văn Miếu Quốc Tử Giám)", "B. Озеро Хоанкием", "C. Пагода Чанкуок", "D. Мост Лонгбьен"],
            a: 0,
            exp: "Храм Литературы (Văn Miếu - Quốc Tử Giám) được thành lập năm 1070/1076, là trường đại học đầu tiên của Việt Nam."
          }
        ]
      }
    ]
  },

  // ==================== CHỦ ĐIỂM 5 ====================
  {
    themeNum: 5,
    title: "Chủ điểm 5: Учёба и труд к победам ведут",
    vnTitle: "Học tập và lao động dẫn tới thành công",
    desc: "Phương pháp học ngoại ngữ, sử dụng thiết bị số có trách nhiệm, văn hóa mạng Internet an toàn và lập kế hoạch học tập khoa học.",
    lessons: [
      // Bài 13
      {
        id: "bai-13",
        num: 13,
        title: "Урок 13. Выучите новый язык и получите новую душу",
        vnTitle: "Học một ngôn ngữ mới để có thêm một tâm hồn mới",
        goal: "Trình bày lý do và mục đích học ngoại ngữ; hỏi đáp về phương pháp học tiếng Nga hiệu quả; sử dụng cấu trúc mục đích чтобы.",
        vocab: [
          { ru: "изучать язык", stress: "изучáть язы́к", vn: "Học, nghiên cứu một ngôn ngữ", type: "Cụm động từ" },
          { ru: "иностранный язык", stress: "инострáнный язы́к", vn: "Tiếng nước ngoài, ngoại ngữ", type: "Cụm danh từ" },
          { ru: "родной язык", stress: "роднóй язы́к", vn: "Tiếng mẹ đẻ", type: "Cụm danh từ" },
          { ru: "учить новые слова", stress: "учи́ть нóвые словá", vn: "Học các từ vựng mới", type: "Cụm động từ" },
          { ru: "говорить по-русски", stress: "говори́ть по-рýсски", vn: "Nói bằng tiếng Nga", type: "Cụm từ" },
          { ru: "на русском языке", stress: "на рýсском языкé", vn: "Bằng tiếng Nga (sách báo, phim ảnh)", type: "Cụm giới từ" },
          { ru: "произношение", stress: "произношéние", vn: "Cách phát âm", type: "Danh từ" },
          { ru: "смотреть фильмы", stress: "смотрéть фи́льмы", vn: "Xem phim có phụ đề", type: "Cụm động từ" },
          { ru: "чтобы", stress: "чтóбы", vn: "Để mà (nêu mục đích hành động)", type: "Liên từ" }
        ],
        grammar: {
          title: "Cấu trúc chỉ Mục đích với ЧТОБЫ & Cách diễn đạt nói tiếng Nga (по-русски)",
          formula: "1. Hai vế cùng một chủ thể hành động:\n   [Chủ ngữ] + [Động từ] + чтобы + [Động từ nguyên thể]\n   Ví dụ: Я учу русский язык, чтобы читать сказки в оригинале.\n2. Hỏi lý do/mục đích:\n   - Зачем ты изучаешь русский язык? -> Чтобы общаться с друзьями.\n3. Ngôn ngữ giao tiếp: говорить / понимать / читать + по-русски (có gạch nối, đuôi -и)",
          usage: "Chia sẻ động lực học tập, xây dựng kế hoạch rèn luyện 4 kỹ năng ngôn ngữ mỗi ngày.",
          examples: [
            "Я изучаю русский язык, чтобы путешествовать по России. (Tôi học tiếng Nga để đi du lịch khắp nước Nga.)",
            "Мы смотрим мультфильмы, чтобы улучшить понимание на слух. (Chúng tôi xem hoạt hình để cải thiện khả năng nghe hiểu.)",
            "Мой друг хорошо говорит по-русски и по-английски. (Bạn tôi nói tiếng Nga và tiếng Anh rất tốt.)"
          ]
        },
        dialogue: {
          situation: "Học sinh trao đổi kinh nghiệm học từ vựng và luyện phát âm tiếng Nga",
          lines: [
            { spk: "Михаил", text: "Аня, зачем ты каждый день учишь по десять русских слов?" },
            { spk: "Аня", text: "Я учу слова, чтобы свободно говорить по-русски и читать интересные книги." },
            { spk: "Михаил", text: "А как ты тренируешь правильное произношение?" },
            { spk: "Аня", text: "Я слушаю аудиозаписи дикторов, повторяю вслух и пою русские песни." },
            { spk: "Михаил", text: "Отличный метод! Изучая язык, мы открываем для себя новый мир." }
          ]
        },
        quiz: [
          {
            q: "Để diễn đạt 'Tôi học tiếng Nga ĐỂ đọc sách', câu nào sau đây chuẩn ngữ pháp?",
            options: ["A. Я учу русский язык, чтобы читать книги.", "B. Я учу русский язык, потому что читать книги.", "C. Я учу русский язык, но читать книги.", "D. Я учу русский язык, если читать книги."],
            a: 0,
            exp: "Cấu trúc chỉ mục đích hành động khi cùng chủ ngữ dùng liên từ 'чтобы' đi với động từ nguyên thể: чтобы читать книги."
          },
          {
            q: "Cách viết trạng từ chỉ phương thức 'nói bằng tiếng Nga' chuẩn xác là:",
            options: ["A. говорить по-русски (có dấu gạch nối)", "B. говорить по русски", "C. говорить русский", "D. говорить русском"],
            a: 0,
            exp: "Trạng từ chỉ ngôn ngữ có tiền tố по- và hậu tố -ски bắt buộc phải có dấu gạch nối: по-русски."
          }
        ]
      },

      // Bài 14
      {
        id: "bai-14",
        num: 14,
        title: "Урок 14. Внимание к экрану – это упущенные моменты жизни",
        vnTitle: "Chú ý quá nhiều vào màn hình là bỏ lỡ những khoảnh khắc cuộc sống",
        goal: "Gọi tên các thiết bị số thông minh; thảo luận về mặt tích cực và tác hại khi lạm dụng màn hình; đưa ra lời khuyên cân bằng công nghệ.",
        vocab: [
          { ru: "смартфон", stress: "смартфóн", vn: "Điện thoại thông minh", type: "Danh từ" },
          { ru: "компьютер", stress: "компью́тер", vn: "Máy vi tính", type: "Danh từ" },
          { ru: "планшет", stress: "планшéт", vn: "Máy tính bảng", type: "Danh từ" },
          { ru: "умные часы", stress: "ýмные часы́", vn: "Đồng hồ thông minh smartwatch", type: "Cụm danh từ" },
          { ru: "экран", stress: "экрáн", vn: "Màn hình thiết bị số", type: "Danh từ" },
          { ru: "наушники", stress: "наýшники", vn: "Tai nghe", type: "Danh từ số nhiều" },
          { ru: "приложение", stress: "приложéние", vn: "Ứng dụng di động (app)", type: "Danh từ" },
          { ru: "полезный / вредный", stress: "полéзный / врéдный", vn: "Hữu ích / có hại", type: "Tính từ" },
          { ru: "усталость глаз", stress: "устáлость глаз", vn: "Mỏi mắt, căng thẳng thị giác", type: "Cụm danh từ" },
          { ru: "Я согласен / согласна", stress: "Я соглáсен / соглáсна", vn: "Tôi đồng ý (nam / nữ)", type: "Mẫu câu" }
        ],
        grammar: {
          title: "Đại từ КОТОРЫЙ mô tả chức năng thiết bị & Cấu trúc nêu quan điểm (Я думаю, что...)",
          formula: "1. Mô tả công dụng thiết bị:\n   - компьютер, который помогает мне учиться (chiếc máy tính giúp tôi học tập)\n   - смартфон, на котором можно читать книги (chiếc điện thoại mà trên đó có thể đọc sách)\n2. Bày tỏ ý kiến cá nhân:\n   - Я думаю, что... (Tôi nghĩ rằng...)\n   - Я согласен / согласна с тобой. (Tôi đồng tình với bạn.)\n   - Я против того, чтобы... (Tôi phản đối việc...)",
          usage: "Tranh luận văn minh về vai trò của công nghệ và đề xuất giải pháp bảo vệ sức khỏe.",
          examples: [
            "Компьютер – это полезный инструмент, который помогает нам находить нужную информацию. (Máy tính là công cụ hữu ích giúp chúng ta tìm kiếm thông tin cần thiết.)",
            "Я согласна, что долго смотреть в экран вредно для зрения. (Tôi đồng ý rằng nhìn quá lâu vào màn hình có hại cho thị lực.)",
            "Нужно делать перерывы каждые сорок минут. (Cần phải nghỉ giải lao sau mỗi 40 phút sử dụng thiết bị.)"
          ]
        },
        dialogue: {
          situation: "Hai bạn cùng bàn luận về thời lượng sử dụng điện thoại thông minh hợp lý mỗi ngày",
          lines: [
            { spk: "Кирилл", text: "Соня, сколько часов в день ты проводишь перед экраном смартфона?" },
            { spk: "Соня", text: "Около четырёх часов. Я смотрю видео, переписываюсь и играю." },
            { spk: "Кирилл", text: "Это слишком много! Внимание к экрану – это упущенные моменты жизни." },
            { spk: "Соня", text: "Ты прав, в последнее thời gian у меня часто болят глаза и голова." },
            { spk: "Кирилл", text: "Давай лучше пойдём в парк и покатаемся на велосипедах на свежем воздухе!" },
            { spk: "Соня", text: "С удовольствием! Оставлю телефон дома." }
          ]
        },
        quiz: [
          {
            q: "Để diễn đạt 'Tôi nghĩ rằng máy tính rất hữu ích', câu tiếng Nga nào đúng?",
            options: ["A. Я думаю, что компьютер очень полезен.", "B. Я думаю чтобы компьютер.", "C. Я думал компьютер полезно.", "D. Компьютер думаю что."],
            a: 0,
            exp: "Cấu trúc nêu ý kiến cá nhân: Я думаю, что... + Mệnh đề phụ."
          },
          {
            q: "Lời khuyên nào sau đây giúp học sinh bảo vệ thị lực khi học trực tuyến trên máy tính?",
            options: ["A. Делать перерыв каждые 30-40 минут и гимнастику для глаз (Nghỉ 30-40 phút và tập thể dục cho mắt)", "B. Ngồi thật sát màn hình", "C. Tắt hết đèn trong phòng khi nhìn màn hình", "D. Nhìn liên tục 5 tiếng không chớp mắt"],
            a: 0,
            exp: "Khoa học khuyến cáo nên nghỉ ngơi sau mỗi 30-40 phút và luyện tập mắt để chống căng mỏi mắt."
          }
        ]
      },

      // Bài 15
      {
        id: "bai-15",
        num: 15,
        title: "Урок 15. Интернет – это окно в мир",
        vnTitle: "Internet là cửa sổ nhìn ra thế giới",
        goal: "Nói về mạng xã hội và không gian số; sử dụng Cách 5 sau động từ пользоваться; thiết lập các quy tắc an toàn bảo mật trên Internet.",
        vocab: [
          { ru: "пользоваться Интернетом", stress: "пóльзоваться Интернéтом", vn: "Sử dụng mạng Internet (Cách 5)", type: "Cụm động từ" },
          { ru: "социальные сети", stress: "социáльные сéти", vn: "Mạng xã hội (như VK, Facebook)", type: "Danh từ số nhiều" },
          { ru: "личная информация", stress: "ли́чная информáция", vn: "Thông tin cá nhân, quyền riêng tư", type: "Cụm danh từ" },
          { ru: "пароль", stress: "парóль", vn: "Mật khẩu bảo mật", type: "Danh từ (giống đực)" },
          { ru: "безопасность в сети", stress: "безопáсность в сети́", vn: "An toàn trên không gian mạng", type: "Cụm danh từ" },
          { ru: "публиковать фото", stress: "публиковáть фóто", vn: "Đăng tải hình ảnh lên mạng", type: "Cụm động từ" },
          { ru: "нельзя делиться", stress: "нельзя́ дели́ться", vn: "Không được chia sẻ (thông tin nhạy cảm)", type: "Cụm từ" },
          { ru: "он сказал, что...", stress: "он сказáл, что...", vn: "Anh ấy đã nói rằng... (lời gián tiếp)", type: "Mẫu câu dẫn" }
        ],
        grammar: {
          title: "Cách 5 sau động từ ПОЛЬЗОВАТЬСЯ & Mệnh lệnh cách & Câu gián tiếp",
          formula: "1. Động từ пользоваться đòi hỏi Cách 5 (Творительный падеж):\n   - пользоваться Интернетом (dùng Internet)\n   - пользоваться телефоном (dùng điện thoại)\n2. Thể mệnh lệnh khuyên can / chỉ dẫn:\n   - Будь осторожен! / Будьте осторожны! (Hãy cẩn thận!)\n   - Не сообщай свой пароль никому! (Đừng tiết lộ mật khẩu cho bất kì ai!)\n3. Chuyển lời trực tiếp sang gián tiếp:\n   - Учитель сказал: «Будьте внимательны!» -> Учитель сказал, чтобы мы были внимательны.",
          usage: "Bảo vệ bản thân trên không gian mạng, không cung cấp thông tin cá nhân cho người lạ.",
          examples: [
            "Я часто пользуюсь Интернетом для подготовки домашних заданий. (Tôi thường xuyên sử dụng Internet để chuẩn bị bài tập về nhà.)",
            "Никогда не публикуйте свои пароли и адрес в социальных сетях! (Đừng bao giờ đăng mật khẩu và địa chỉ của bạn lên mạng xã hội!)",
            "Он сказал, что безопасность в сети зависит от каждого из нас. (Anh ấy nói rằng an toàn trên mạng phụ thuộc vào mỗi người chúng ta.)"
          ]
        },
        dialogue: {
          situation: "Cô giáo hướng dẫn học sinh các quy tắc vàng bảo mật thông tin trên mạng Internet",
          lines: [
            { spk: "Учительница", text: "Ребята, Интернет – это окно в мир, но там есть и опасности. Как защитить себя?" },
            { spk: "Борис", text: "Нужно использовать сложные пароли и никому их не говорить." },
            { spk: "Светлана", text: "Нельзя открывать подозрительные ссылки от незнакомых людей." },
            { spk: "Учительница", text: "Правильно! А если кто-то в сети вас пугает или угрожает?" },
            { spk: "Борис", text: "Нужно сразу рассказать родителям или учителю!" },
            { spk: "Учительница", text: "Молодцы, соблюдайте эти правила всегда!" }
          ]
        },
        quiz: [
          {
            q: "Sau động từ 'пользоваться' (sử dụng), từ 'Интернет' được chia ở cách mấy?",
            options: ["A. Cách 5 (пользоваться Интернетом)", "B. Cách 4 (пользоваться Интернет)", "C. Cách 2 (пользоваться Интернета)", "D. Cách 6 (пользоваться Интернете)"],
            a: 0,
            exp: "Động từ 'пользоваться' luôn đi với danh từ ở Cách 5 (Творительный падеж): пользоваться Интернетом."
          },
          {
            q: "Hành động nào sau đây là NGUY HIỂM khi tham gia mạng xã hội?",
            options: ["A. Chia sẻ công khai mật khẩu tài khoản và địa chỉ nhà cho người lạ", "B. Sử dụng mật khẩu mạnh gồm chữ và số", "C. Hỏi ý kiến cha mẹ trước khi đăng ảnh tập thể", "D. Không bấm vào các đường link lừa đảo lạ"],
            a: 0,
            exp: "Tuyệt đối không chia sẻ mật khẩu, địa chỉ riêng tư hoặc số điện thoại công khai trên mạng xã hội."
          }
        ]
      },

      // Bài 16
      {
        id: "bai-16",
        num: 16,
        title: "Урок 16. Сделай дело – гуляй смело",
        vnTitle: "Làm xong việc rồi vui chơi thảnh thơi",
        goal: "Lập thời khóa biểu học tập và sinh hoạt khoa học; trao đổi về lợi ích/thách thức của học trực tuyến; hoàn thành dứt điểm mục tiêu.",
        vocab: [
          { ru: "сделай дело", stress: "сдéлай дéло", vn: "Làm xong công việc (thể hoàn thành)", type: "Thành ngữ" },
          { ru: "гуляй смело", stress: "гуля́й смéло", vn: "Vui chơi thảnh thơi, tự tin", type: "Thành ngữ" },
          { ru: "расписание уроков", stress: "расписáние урóков", vn: "Thời khóa biểu các tiết học", type: "Cụm danh từ" },
          { ru: "онлайн-обучение", stress: "онлáйн-обучéние", vn: "Học tập trực tuyến, học từ xa", type: "Danh từ" },
          { ru: "выполнить задачу", stress: "вы́полнить задáчу", vn: "Hoàn thành nhiệm vụ học tập", type: "Cụm động từ" },
          { ru: "не забудь", stress: "не забýдь", vn: "Đừng quên (lời dặn dò)", type: "Mệnh lệnh" },
          { ru: "подготовиться к уроку", stress: "подготóвиться к урóку", vn: "Chuẩn bị sẵn sàng cho bài học", type: "Cụm động từ" },
          { ru: "успех", stress: "успéх", vn: "Thành công, thắng lợi (к победам ведут)", type: "Danh từ" }
        ],
        grammar: {
          title: "Mệnh lệnh cách (Повелительное наклонение) & Thể động từ hoàn tất nhiệm vụ",
          formula: "1. Thể mệnh lệnh khẳng định & phủ định:\n   - Сделай! / Сделайте! (Hãy làm xong đi!)\n   - Прочитай! / Прочитайте! (Hãy đọc xong đi!)\n   - Не забудь! / Не забудьте! (Đừng quên nhé!)\n2. Thể động từ СВ chỉ sự hoàn tất dứt điểm:\n   - Я выполнил все задания и теперь могу отдыхать. (Tôi đã hoàn thành xong mọi bài tập và giờ có thể nghỉ ngơi.)\n3. Trình tự ưu tiên: Сначала главное, потом развлечения.",
          usage: "Quản lý thời gian, nâng cao ý thức tự giác kỷ luật trong học tập trực tiếp và trực tuyến.",
          examples: [
            "Сделай дело – гуляй смело: сначала уроки, потом футбол. (Làm xong việc rồi chơi thảnh thơi: bài tập trước, đá bóng sau.)",
            "Не забудьте выключить микрофон во время онлайн-урока, когда говорит учитель. (Đừng quên tắt mic trong giờ học trực tuyến khi thầy cô đang giảng bài.)",
            "Учёба и труд всегда ведут нас к большим победам. (Học tập và lao động nhất định sẽ đưa chúng ta tới những thắng lợi lớn.)"
          ]
        },
        dialogue: {
          situation: "Học sinh kiểm tra lại thời khóa biểu và danh sách bài tập đã hoàn thành trong ngày",
          lines: [
            { spk: "Андрей", text: "Ура! Я закончил писать проект по географии и выучил диалог по-русски!" },
            { spk: "Мама", text: "Молодец, Андрей! Сделай дело – гуляй смело." },
            { spk: "Андрей", text: "Теперь я могу пойти на стадион побегать с друзьями?" },
            { spk: "Мама", text: "Конечно, ты отлично поработал сегодня. Свежий воздух пойдёт на пользу!" },
            { spk: "Андрей", text: "Спасибо, мама! Вечером я только проверю расписание на завтра." }
          ]
        },
        quiz: [
          {
            q: "Thành ngữ 'Сделай дело – гуляй смело' khuyên chúng ta điều gì trong học tập?",
            options: ["A. Hoàn thành xong nhiệm vụ học tập rồi hãy thảnh thơi vui chơi giải trí", "B. Vừa học vừa chơi cùng lúc", "C. Cứ chơi thoải mái rồi mai làm bài tập sau", "D. Không cần làm bài tập"],
            a: 0,
            exp: "Ý nghĩa câu tục ngữ: Hãy làm xong việc của mình một cách dứt điểm, rồi sau đó mới có thể thoải mái nghỉ ngơi, vui chơi mà không lo lắng."
          },
          {
            q: "Để dặn dò một người bạn 'Đừng quên làm bài tập nhé!', ta dùng hình thức mệnh lệnh nào?",
            options: ["A. Не забудь сделать домашнее задание!", "B. Не забыл сделать", "C. Забывай сделать", "D. Забудешь сделать"],
            a: 0,
            exp: "Mệnh lệnh cách phủ định nhắc nhở với một người bạn thân mật: Не забудь + Động từ nguyên thể."
          }
        ]
      }
    ]
  }
];

// Bảng hệ thống 6 Cách trong tiếng Nga (Tra cứu nhanh)
const russianCasesMatrix = [
  {
    caseNum: "Cách 1",
    nameRu: "Именительный падеж",
    nameVn: "Danh cách",
    questions: "Кто? Что?",
    functions: "Làm chủ ngữ trong câu, định danh sự vật, người hoặc đối tượng chính.",
    examples: "Ученик читает книгу. Москва – столица России."
  },
  {
    caseNum: "Cách 2",
    nameRu: "Родительный падеж",
    nameVn: "Sinh cách",
    questions: "Кого? Чего? Откуда? Сколько?",
    functions: "Sở hữu (nhà của ai); phủ định нет; sau số lượng (много, 2, 5...); sau giới từ vị trí (около, недалеко от, напротив, из).",
    examples: "около музея, много фруктов, книга учителя, напротив Кремля."
  },
  {
    caseNum: "Cách 3",
    nameRu: "Дательный падеж",
    nameVn: "Dữ cách",
    questions: "Кому? Чему? Куда? (với к)",
    functions: "Chỉ người nhận sự giúp đỡ (помогать кому?), người trải nghiệm cảm xúc (мне нравится), hướng chuyển động đến gần (к врачу).",
    examples: "помогать детям, мне нравится русский язык, учителю – радость."
  },
  {
    caseNum: "Cách 4",
    nameRu: "Винительный падеж",
    nameVn: "Đối cách",
    questions: "Кого? Что? Куда?",
    functions: "Bổ ngữ trực tiếp của ngoại động từ; chỉ đích đến của hành động chuyển động (в/на + Cách 4: идти в школу); thời gian (через неделю, в среду).",
    examples: "читать книгу, идти на Красную площадь, через четыре дня."
  },
  {
    caseNum: "Cách 5",
    nameRu: "Творительный падеж",
    nameVn: "Công cụ cách",
    questions: "Кем? Чем? С кем? С чем?",
    functions: "Phương tiện, công cụ; người đồng hành (с другом); sau động từ пользоваться, заниматься, быть.",
    examples: "пользоваться Интернетом, заниматься спортом, писать ручкой."
  },
  {
    caseNum: "Cách 6",
    nameRu: "Предложный падеж",
    nameVn: "Tiền cách",
    questions: "О ком? О чём? Где? В чём? На чём?",
    functions: "Vị trí ở đâu (в/на + Cách 6: в Москве, на площади); chủ đề bàn luận (о/об + Cách 6: о школе, о друге); thời gian (на прошлой неделе).",
    examples: "в Москве, на прошлой неделе, думать о будущем, в театре."
  }
];

// Bảng quy tắc phát âm & Ngữ âm tiếng Nga
const russianPhoneticsRules = [
  {
    rule: "Hiện tượng thoái hóa nguyên âm 'О' không nhấn (Аканье)",
    desc: "Nguyên âm 'О' khi không mang trọng âm sẽ được phát âm nhẹ thành âm [а]. Khi mang trọng âm đọc rõ là [о].",
    example: "молокó [малакó] (sữa), хорошó [харашó] (tốt, giỏi), головá [галавá] (đầu)."
  },
  {
    rule: "Hiện tượng thoái hóa nguyên âm 'Е/Я' không nhấn (Иканье)",
    desc: "Nguyên âm 'Е' hoặc 'Я' khi đứng ở âm tiết không mang trọng âm thường được phát âm lướt gần như âm [и].",
    example: "язы́к [изы́к] (ngôn ngữ), часы́ [чисы́] (đồng hồ), сестрá [систpá] (chị/em gái)."
  },
  {
    rule: "Hiện tượng vô thanh hóa phụ âm hữu thanh ở cuối từ",
    desc: "Các phụ âm hữu thanh (б, в, г, д, ж, з) khi đứng ở cuối từ sẽ bị biến đổi phát âm thành các phụ âm vô thanh tương ứng (п, ф, к, т, ш, с).",
    example: "город [гóрат] (thành phố), друг [друк] (người bạn), зуб [зуп] (chiếc răng)."
  },
  {
    rule: "Hiện tượng đồng hóa phụ âm (hữu thanh & vô thanh)",
    desc: "Khi phụ âm hữu thanh đứng trước phụ âm vô thanh thì bị vô thanh hóa. Ngược lại, phụ âm vô thanh đứng trước phụ âm hữu thanh (trừ в) thì bị hữu thanh hóa.",
    example: "автобус [афтóбус] (xe buýt), сказка [скáска] (truyện cổ tích), вокзал [вагзáл] (nhà ga)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { themesPart2, russianCasesMatrix, russianPhoneticsRules };
}
