// Dữ liệu Tiếng Nga 7 - Phần 1: Chủ điểm 1, Chủ điểm 2, Chủ điểm 3 (Bài 1 -> Bài 9)
// Theo SGK Tiếng Nga 7 - Tập 1 (GDPT 2018)

const themesPart1 = [
  // ==================== CHỦ ĐIỂM 1 ====================
  {
    themeNum: 1,
    title: "Chủ điểm 1: Живое слово дороже мёртвой буквы",
    vnTitle: "Lời nói chân thành quý hơn lời sáo rỗng",
    desc: "Giao tiếp lịch sự, chào hỏi thăm hỏi, diễn đạt thời gian trong quá khứ/tương lai, chăm sóc sức khỏe và lối sống lành mạnh.",
    lessons: [
      // Bài 1
      {
        id: "bai-1",
        num: 1,
        title: "Урок 1. Ласковое слово – ключ к сердцу",
        vnTitle: "Lời nói dịu dàng là chìa khóa mở trái tim",
        goal: "Chào hỏi lịch sự, hỏi thăm sức khỏe và việc học; kể việc đã làm trong tuần qua; hẹn gặp và đề xuất hoạt động chung.",
        vocab: [
          { ru: "Здравствуйте!", stress: "Здрáвствуйте!", vn: "Xin chào! (trang trọng, lịch sự)", type: "Thán từ" },
          { ru: "Привет!", stress: "Привéт!", vn: "Chào bạn! (thân mật)", type: "Thán từ" },
          { ru: "Как дела?", stress: "Как делá?", vn: "Dạo này thế nào? Mọi việc ra sao?", type: "Mẫu câu" },
          { ru: "Как ты себя чувствуешь?", stress: "Как ты себя́ чýвствуешь?", vn: "Bạn cảm thấy trong người thế nào?", type: "Mẫu câu" },
          { ru: "У меня всё хорошо.", stress: "У меня́ всё хорошó.", vn: "Tôi mọi việc đều tốt đẹp.", type: "Mẫu câu" },
          { ru: "неделя", stress: "недéля", vn: "Tuần lễ", type: "Danh từ (giống cái)" },
          { ru: "на прошлой неделе", stress: "на прóшлой недéле", vn: "Vào tuần trước", type: "Trạng ngữ chỉ thời gian" },
          { ru: "на этой неделе", stress: "на э́той недéле", vn: "Vào tuần này", type: "Trạng ngữ chỉ thời gian" },
          { ru: "на следующей неделе", stress: "на слéдующей недéле", vn: "Vào tuần sau", type: "Trạng ngữ chỉ thời gian" },
          { ru: "в выходные", stress: "в выходны́е", vn: "Vào những ngày cuối tuần", type: "Trạng ngữ" },
          { ru: "четыре дня назад", stress: "четы́ре дня назáд", vn: "Cách đây 4 ngày", type: "Trạng ngữ" },
          { ru: "через неделю", stress: "чéрез недéлю", vn: "Sau một tuần nữa", type: "Trạng ngữ" }
        ],
        grammar: {
          title: "Trạng ngữ thời gian (Cách 6) & Thì quá khứ của động từ & Cấu trúc назад / через",
          formula: "1. Thời gian với Cách 6: на прошлой / на этой / на следующей неделе\n2. Thì quá khứ: Động từ bỏ -ть + -л (giống đực), -ла (giống cái), -ло (giống trung), -ли (số nhiều)\n3. Trước/sau: [Thời gian Cách 4] + назад (cách đây) | через + [Thời gian Cách 4] (sau... nữa)",
          usage: "Dùng để xác định thời điểm diễn ra sự việc trong tuần, kể các hành động đã làm trong quá khứ và lên lịch hẹn trong tương lai.",
          examples: [
            "На прошлой неделе мы ходили в библиотеку. (Tuần trước chúng tôi đã đi thư viện.)",
            "Анна читала интересную книгу вчера вечером. (Anna đã đọc cuốn sách thú vị tối hôm qua.)",
            "Три дня назад я встретил друга в парке. (Cách đây 3 ngày tôi đã gặp bạn trong công viên.)",
            "Через два дня мы поедем на экскурсию. (Sau 2 ngày nữa chúng tôi sẽ đi dã ngoại.)"
          ]
        },
        dialogue: {
          situation: "Hai bạn học sinh gặp lại nhau đầu tuần và hẹn lịch cùng học tập cuối tuần",
          lines: [
            { spk: "Антон", text: "Привет, Лена! Как дела? Как ты себя чувствуешь?" },
            { spk: "Лена", text: "Привет, Антон! Спасибо, у меня всё отлично. А у тебя?" },
            { spk: "Антон", text: "Тоже хорошо. Что ты делала на прошлой неделе?" },
            { spk: "Лена", text: "Я много занималась и ходила в бассейн. А в выходные читала книгу." },
            { spk: "Антон", text: "Давай встретимся в субботу и вместе подготовим проект!" },
            { spk: "Лена", text: "Отличная идея! Во сколько? Договорились!" }
          ]
        },
        quiz: [
          {
            q: "Để diễn đạt 'Vào tuần trước', cụm từ tiếng Nga nào sau đây đúng ngữ pháp?",
            options: ["A. на прошлой неделе", "B. на прошлой неделю", "C. в прошлую неделю", "D. через прошлую неделю"],
            a: 0,
            exp: "Cụm danh từ chỉ thời gian trong tuần dùng giới từ 'на' đi với Cách 6 (Tiền cách): на прошлой неделе."
          },
          {
            q: "Chủ ngữ là 'Она' (giống cái), đuôi của động từ thì quá khứ chia như thế nào?",
            options: ["A. Thêm đuôi -ла (ví dụ: читáла, ходи́ла)", "B. Thêm đuôi -л", "C. Thêm đuôi -ли", "D. Giữ nguyên đuôi -ть"],
            a: 0,
            exp: "Thì quá khứ tiếng Nga theo giống: giống đực đuôi -л, giống cái đuôi -ла, giống trung -ло, số nhiều -ли."
          }
        ]
      },

      // Bài 2
      {
        id: "bai-2",
        num: 2,
        title: "Урок 2. Здоровье дороже золота",
        vnTitle: "Sức khỏe quý hơn vàng",
        goal: "Gọi tên các bộ phận cơ thể; hỏi thăm và mô tả triệu chứng bệnh; đưa ra lời khuyên chăm sóc người ốm đơn giản.",
        vocab: [
          { ru: "голова", stress: "головá", vn: "Đầu (bộ phận cơ thể)", type: "Danh từ" },
          { ru: "горло", stress: "гóрло", vn: "Cổ họng", type: "Danh từ" },
          { ru: "зуб / зубы", stress: "зуб / зýбы", vn: "Răng / những chiếc răng", type: "Danh từ" },
          { ru: "глаз / глаза", stress: "глаз / глазá", vn: "Mắt / đôi mắt", type: "Danh từ" },
          { ru: "рука / ноги", stress: "рукá / нóги", vn: "Tay / đôi chân", type: "Danh từ" },
          { ru: "живот", stress: "живóт", vn: "Bụng", type: "Danh từ" },
          { ru: "температура", stress: "температýра", vn: "Nhiệt độ cơ thể, cơn sốt", type: "Danh từ" },
          { ru: "врач", stress: "врач", vn: "Bác sĩ", type: "Danh từ" },
          { ru: "лекарство", stress: "лекáрство", vn: "Thuốc uống", type: "Danh từ" },
          { ru: "аптека", stress: "аптéка", vn: "Hiệu thuốc", type: "Danh từ" },
          { ru: "болеть", stress: "болéть", vn: "Đau, bị ốm", type: "Động từ" },
          { ru: "отдыхать", stress: "отдыхáть", vn: "Nghỉ ngơi", type: "Động từ" }
        ],
        grammar: {
          title: "Động từ болеть & Cấu trúc miêu tả đau ốm (У меня болит / болят)",
          formula: "1. Đau một bộ phận (số ít): У + [người Cách 2] + болит + [bộ phận Cách 1]\n2. Đau nhiều bộ phận (số nhiều): У + [người Cách 2] + болят + [bộ phận số nhiều Cách 1]\n3. Lời khuyên/yêu cầu: Нужно / Надо + Động từ nguyên thể (Нужно отдыхать)",
          usage: "Diễn đạt triệu chứng khi bị ốm hoặc hỏi thăm người khác. Khi có triệu chứng sốt cao cần đến gặp bác sĩ.",
          examples: [
            "У меня болит голова и горло. (Tôi bị đau đầu và đau họng.)",
            "У него болят зубы, нужно идти к врачу. (Bạn ấy bị đau răng, cần phải đi khám bác sĩ.)",
            "У неё высокая температура, ей нужно пить тёплый чай. (Cô ấy bị sốt cao, cô ấy cần uống trà ấm.)",
            "Принимай лекарство вовремя! (Hãy uống thuốc đúng giờ nhé!)"
          ]
        },
        dialogue: {
          situation: "Học sinh hỏi thăm bạn cùng lớp bị ốm phải nghỉ học ở nhà",
          lines: [
            { spk: "Максим", text: "Алло, Виктор! Почему ты сегодня не пришёл в школу?" },
            { spk: "Виктор", text: "Привет, Максим. Я заболел. У меня болит горло и высокая температура." },
            { spk: "Максим", text: "Бедный! Ты уже вызвал врача?" },
            { spk: "Виктор", text: "Да, врач приходил, выписал лекарства и сказал много отдыхать." },
            { spk: "Максим", text: "Принимай лекарства и выздоравливай скорее! Я помогу тебе с уроками." },
            { spk: "Виктор", text: "Большое спасибо за заботу, Максим!" }
          ]
        },
        quiz: [
          {
            q: "Để nói 'Tôi bị đau răng' (nhiều chiếc răng - зубы), câu nào sau đây là chính xác?",
            options: ["A. У меня болят зубы.", "B. У меня болит зубы.", "C. Я болит зубы.", "D. У меня есть зуб."],
            a: 0,
            exp: "Khi danh từ bộ phận ở số nhiều (зубы, глаза), động từ болеть chia ở ngôi thứ 3 số nhiều: болят -> У меня болят зубы."
          },
          {
            q: "Cấu trúc khuyên nhủ 'Bạn cần phải nghỉ ngơi nhiều' dùng cấu trúc nào?",
            options: ["A. Тебе нужно много отдыхать.", "B. Ты отдыхаешь много.", "C. Нельзя отдыхать.", "D. У тебя отдых."],
            a: 0,
            exp: "Cấu trúc cần thiết: Нужно / Надо + Động từ nguyên thể (отдыхать)."
          }
        ]
      },

      // Bài 3
      {
        id: "bai-3",
        num: 3,
        title: "Урок 3. Здоров будешь, всё добудешь",
        vnTitle: "Khỏe mạnh thì làm được mọi việc",
        goal: "Nói về chế độ ăn uống, thói quen vận động lành mạnh; đưa lời khuyên bảo vệ sức khỏe và giải thích lý do bằng потому что.",
        vocab: [
          { ru: "полезный", stress: "полéзный", vn: "Có ích, tốt cho sức khỏe", type: "Tính từ" },
          { ru: "вредный", stress: "врéдный", vn: "Có hại cho sức khỏe", type: "Tính từ" },
          { ru: "овощи и фрукты", stress: "óвощи и фрýкты", vn: "Rau củ và hoa quả", type: "Cụm danh từ" },
          { ru: "заниматься спортом", stress: "занимáться спóртом", vn: "Tập luyện thể thao", type: "Cụm động từ" },
          { ru: "гулять на свежем воздухе", stress: "гуля́ть на свéжем вóздухе", vn: "Đi dạo ngoài không khí trong lành", type: "Cụm động từ" },
          { ru: "ложиться спать вовремя", stress: "ложи́ться спать вóвремя", vn: "Đi ngủ đúng giờ", type: "Cụm động từ" },
          { ru: "потому что", stress: "потомý что", vn: "Bởi vì (nêu nguyên nhân)", type: "Liên từ" },
          { ru: "чтобы", stress: "чтóбы", vn: "Để, cốt để (nêu mục đích)", type: "Liên từ" },
          { ru: "много фруктов", stress: "мнóго фрýктов", vn: "Nhiều hoa quả (Cách 2 số nhiều)", type: "Cụm lượng từ" },
          { ru: "сильный / слабый", stress: "си́льный / слáбый", vn: "Khỏe mạnh / yếu ớt", type: "Tính từ" }
        ],
        grammar: {
          title: "Cấu trúc mục đích Чтобы быть здоровым & Liên từ nguyên nhân Потому что",
          formula: "1. Mục đích: Чтобы быть здоровым(ой), нужно / надо + Động từ nguyên thể\n2. Cấm đoán / khuyên can: Нельзя + Động từ nguyên thể (không được làm gì)\n3. Nguyên nhân: Mệnh đề 1 + , потому что + Mệnh đề 2 (chỉ lý do)\n4. Lượng từ: много / немного + Danh từ ở Cách 2 số nhiều (много овощей и фруктов)",
          usage: "Xây dựng thói quen sinh hoạt khoa học, giải thích nguyên nhân và đưa ra lời khuyên cho bạn bè.",
          examples: [
            "Чтобы быть здоровым, нужно делать утреннюю зарядку. (Để khỏe mạnh, cần tập thể dục buổi sáng.)",
            "Нельзя сидеть за компьютером слишком долго. (Không được ngồi trước máy tính quá lâu.)",
            "Я рано ложусь спать, потому что завтра рано вставать. (Tôi đi ngủ sớm bởi vì ngày mai phải dậy sớm.)",
            "Врачи советуют есть много свежих фруктов. (Các bác sĩ khuyên nên ăn nhiều hoa quả tươi.)"
          ]
        },
        dialogue: {
          situation: "Thảo luận về thực đơn và thói quen rèn luyện thể chất hằng ngày",
          lines: [
            { spk: "Мария", text: "Денис, как ты думаешь, что нужно делать, чтобы не болеть?" },
            { spk: "Денис", text: "Я думаю, самое главное – это правильный режим дня и спорт." },
            { spk: "Мария", text: "А какую еду ты считаешь самой полезной?" },
            { spk: "Денис", text: "Нужно есть много овощей, рыбы и фруктов, и пить чистую воду." },
            { spk: "Мария", text: "Согласна! А фастфуд и сладкую газировку пить нельзя, это вредно." }
          ]
        },
        quiz: [
          {
            q: "Điền liên từ thích hợp: 'Я пью тёплый чай, ___ у меня болит горло.'",
            options: ["A. потому что (bởi vì)", "B. чтобы (để)", "C. но (nhưng)", "D. или (hoặc)"],
            a: 0,
            exp: "Vế sau nêu nguyên nhân lý do đau họng nên dùng liên từ 'потому что' (bởi vì)."
          },
          {
            q: "Sau cụm từ 'Чтобы быть здоровым, нужно...' động từ tiếp theo ở dạng nào?",
            options: ["A. Động từ nguyên thể (инфинитив)", "B. Động từ chia thì quá khứ", "C. Danh từ giống cái", "D. Tính từ ngắn đuôi"],
            a: 0,
            exp: "Sau нужно / надо bắt buộc dùng động từ nguyên thể (ví dụ: делать зарядку, много спать)."
          }
        ]
      }
    ]
  },

  // ==================== CHỦ ĐIỂM 2 ====================
  {
    themeNum: 2,
    title: "Chủ điểm 2: Береги платье снову, а честь смолоду",
    vnTitle: "Giữ gìn danh dự từ khi còn trẻ",
    desc: "Miêu tả ngoại hình và phẩm chất đạo đức con người, học tập tấm gương Bác Hồ, quản lý thời gian và rèn luyện thói quen tốt từ sớm.",
    lessons: [
      // Bài 4
      {
        id: "bai-4",
        num: 4,
        title: "Урок 4. Люди, как звёзды: чем дальше, тем ярче",
        vnTitle: "Con người như những vì sao: càng xa càng sáng",
        goal: "Mô tả ngoại hình, tính cách; giới thiệu người em kính trọng, yêu quý; tìm hiểu phẩm chất cao quý của Chủ tịch Hồ Chí Minh.",
        vocab: [
          { ru: "добрый", stress: "дóбрый", vn: "Tốt bụng, nhân hậu", type: "Tính từ" },
          { ru: "умный", stress: "ýмный", vn: "Thông minh, sáng dạ", type: "Tính từ" },
          { ru: "трудолюбивый", stress: "трудолюби́вый", vn: "Chăm chỉ, cần cù", type: "Tính từ" },
          { ru: "скромный", stress: "скрóмный", vn: "Khiêm tốn, giản dị", type: "Tính từ" },
          { ru: "смелый", stress: "смéлый", vn: "Dũng cảm, quả cảm", type: "Tính từ" },
          { ru: "талантливый", stress: "талáнтливый", vn: "Tài năng, có năng khiếu", type: "Tính từ" },
          { ru: "великий человек", stress: "вели́кий человéк", vn: "Vĩ nhân, con người vĩ đại", type: "Cụm danh từ" },
          { ru: "глаза", stress: "глазá", vn: "Đôi mắt (добрые глаза - đôi mắt hiền từ)", type: "Danh từ" },
          { ru: "улыбка", stress: "улы́бка", vn: "Nụ cười (тёплая улыбка - nụ cười ấm áp)", type: "Danh từ" },
          { ru: "Хо Ши Мин", stress: "Хо Ши Мин", vn: "Chủ tịch Hồ Chí Minh", type: "Danh từ riêng" }
        ],
        grammar: {
          title: "Hòa hợp Tính từ - Danh từ theo Giống/Số & Cấu trúc sở hữu У него / У неё добрые глаза",
          formula: "1. Đuôi tính từ: Giống đực (-ый/-ий), Giống cái (-ая/-яя), Giống trung (-ое/-ее), Số nhiều (-ые/-ие)\n2. Miêu tả đặc điểm ngoại hình: У + [Đại từ Cách 2] + [Tính từ] + [Danh từ bộ phận]\n3. Giới thiệu tiểu sử trong quá khứ: Он был / Она была + [Tính từ / Danh từ]",
          usage: "Khắc họa chân dung người thân, thầy cô hoặc các vĩ nhân lịch sử với thái độ kính trọng.",
          examples: [
            "Хо Ши Мин был великим и скромным лидером. (Hồ Chí Minh là một vị lãnh tụ vĩ đại và giản dị.)",
            "У дедушки седые волосы и очень добрые глаза. (Ông nội có mái tóc bạc và đôi mắt rất hiền từ.)",
            "Моя учительница – умная и терпеливая женщина. (Cô giáo của tôi là một người phụ nữ thông minh và kiên nhẫn.)"
          ]
        },
        dialogue: {
          situation: "Học sinh giới thiệu về người thầy giáo mà mình vô cùng ngưỡng mộ",
          lines: [
            { spk: "Алексей", text: "Линь, о ком ты пишешь сочинение?" },
            { spk: "Линь", text: "Я пишу о моём дедушке. Он ветеран и учитель математики." },
            { spk: "Алексей", text: "Какой он человек? Расскажи о нём." },
            { spk: "Линь", text: "Он очень мудрый, трудолюбивый и скромный. У него светлая улыбка." },
            { spk: "Алексей", text: "Замечательно! Такие люди вдохновляют нас учиться лучше." }
          ]
        },
        quiz: [
          {
            q: "Tính từ 'добрый' khi đi với danh từ số nhiều 'глаза' (đôi mắt) biến đổi như thế nào?",
            options: ["A. добрые (добрые глаза)", "B. добрая", "C. доброе", "D. добрый"],
            a: 0,
            exp: "Danh từ 'глаза' ở dạng số nhiều, do đó tính từ bổ nghĩa phải chia ở số nhiều đuôi -ые/-ие: добрые глаза."
          },
          {
            q: "Để nói 'Chủ tịch Hồ Chí Minh là một vĩ nhân giản dị', câu nào chuẩn ngữ pháp?",
            options: ["A. Президент Хо Ши Мин был скромным и великим человеком.", "B. Хо Ши Мин была скромная.", "C. Хо Ши Мин есть скромно.", "D. Хо Ши Мин скромные люди."],
            a: 0,
            exp: "Chủ ngữ là giống đực, quá khứ dùng 'был', tính từ hòa hợp giống đực."
          }
        ]
      },

      // Bài 5
      {
        id: "bai-5",
        num: 5,
        title: "Урок 5. Одно «сейчас» лучше трёх «потом»",
        vnTitle: "Một việc làm ngay hơn ba lần hẹn sau",
        goal: "Kể thời gian biểu và các hoạt động hằng ngày; phân biệt hành động đang làm (НСВ) và đã hoàn thành xong (СВ); tránh thói quen trì hoãn.",
        vocab: [
          { ru: "сначала ... потом", stress: "сначáла ... потóм", vn: "Trước tiên ... sau đó (thứ tự hành động)", type: "Trạng từ" },
          { ru: "вовремя", stress: "вóвремя", vn: "Đúng giờ, kịp thời", type: "Trạng từ" },
          { ru: "делать / сделать", stress: "дéлать / сдéлать", vn: "Làm (НСВ) / Làm xong, hoàn thành (СВ)", type: "Cặp động từ thể" },
          { ru: "читать / прочитать", stress: "читáть / FRA: прочита́ть", vn: "Đọc (НСВ) / Đọc hết, đọc xong (СВ)", type: "Cặp động từ thể" },
          { ru: "писать / написать", stress: "писáть / написáть", vn: "Viết (НСВ) / Viết xong (СВ)", type: "Cặp động từ thể" },
          { ru: "учить уроки", stress: "учи́ть урóки", vn: "Học bài, làm bài tập về nhà", type: "Cụm động từ" },
          { ru: "помогать родителям", stress: "помогáть роди́телям", vn: "Giúp đỡ cha mẹ việc nhà", type: "Cụm động từ" },
          { ru: "в понедельник", stress: "в понедéльник", vn: "Vào thứ Hai (Cách 4)", type: "Trạng ngữ" },
          { ru: "в среду", stress: "в срéду", vn: "Vào thứ Tư (Cách 4 giống cái)", type: "Trạng ngữ" }
        ],
        grammar: {
          title: "Thể của động từ (НСВ vs. СВ) & Trình tự hành động сначала - потом",
          formula: "1. Thể chưa hoàn thành (НСВ): chỉ quá trình, thói quen thường xuyên lặp lại\n2. Thể hoàn thành (СВ): chỉ kết quả trọn vẹn của hành động, đã làm xong\n3. Trình tự thời gian: Сначала я сделал уроки, а потом пошёл гулять.",
          usage: "Diễn tả tính dứt điểm và thói quen hoàn thành bài tập ngay khi được giao, không để dồn việc.",
          examples: [
            "Я уже сделал домашнее задание. (Tôi đã làm xong bài tập về nhà rồi.)",
            "Сначала закончи работу, а потом отдыхай. (Trước tiên hãy hoàn thành công việc, rồi sau đó mới nghỉ ngơi.)",
            "Каждый день я делаю зарядку в семь утра. (Mỗi ngày tôi đều tập thể dục lúc 7 giờ sáng - thói quen lặp lại НСВ)."
          ]
        },
        dialogue: {
          situation: "Bạn bè nhắc nhở nhau làm xong bài tập trước khi đi đá bóng",
          lines: [
            { spk: "Сергей", text: "Иван, пойдём во двор играть в футбол!" },
            { spk: "Иван", text: "Я очень хочу, но сначала мне нужно решить задачи по математике." },
            { spk: "Сергей", text: "Ты можешь решить их вечером после игры." },
            { spk: "Иван", text: "Нет, одно «сейчас» лучше трёх «потом». Я быстро сделаю и выйду!" },
            { spk: "Сергей", text: "Молодец, правильный подход. Я подожду тебя." }
          ]
        },
        quiz: [
          {
            q: "Để diễn đạt 'Tôi đã làm xong bài tập về nhà (kết quả trọn vẹn)', ta chọn động từ thể nào?",
            options: ["A. сделал (thể hoàn thành СВ)", "B. делал (thể chưa hoàn thành НСВ)", "C. делать", "D. делаю"],
            a: 0,
            exp: "Khi nhấn mạnh kết quả hoàn tất công việc, bắt buộc dùng thể hoàn thành СВ: сделал домашнее задание."
          },
          {
            q: "Thứ Tư trong tiếng Nga là 'среда'. Khi nói 'Vào thứ Tư', ta biến đổi thành:",
            options: ["A. в среду (Cách 4 giống cái)", "B. в среде", "C. на среду", "D. в средуя"],
            a: 0,
            exp: "Chỉ thời gian vào các ngày trong tuần: в + Cách 4 (среда đổi thành в среду)."
          }
        ]
      },

      // Bài 6
      {
        id: "bai-6",
        num: 6,
        title: "Урок 6. Береги платье снову, а здоровье смолоду",
        vnTitle: "Giữ áo từ khi mới, giữ sức khỏe từ thuở trẻ",
        goal: "Phân loại thói quen tốt/xấu; lập kế hoạch ăn uống và rèn luyện thể chất; khuyên bạn chăm sóc sức khỏe ngay từ khi còn trẻ.",
        vocab: [
          { ru: "смолоду", stress: "смóлоду", vn: "Từ thuở nhỏ, từ khi còn trẻ", type: "Trạng từ" },
          { ru: "привычка", stress: "привы́чка", vn: "Thói quen (хорошая / плохая привычка)", type: "Danh từ" },
          { ru: "режим дня", stress: "режи́м дня", vn: "Thời gian biểu, chế độ sinh hoạt", type: "Cụm danh từ" },
          { ru: "правильное питание", stress: "прáвильное питáние", vn: "Chế độ dinh dưỡng hợp lý", type: "Cụm danh từ" },
          { ru: "яблоко / яблок", stress: "я́блоко / я́блок", vn: "Quả táo / nhiều quả táo (Cách 2 số nhiều)", type: "Danh từ" },
          { ru: "ученик / учеников", stress: "учени́к / ученикóв", vn: "Học sinh / nhiều học sinh", type: "Danh từ" },
          { ru: "стараться", stress: "старáться", vn: "Cố gắng, nỗ lực (Я стараюсь...)", type: "Động từ" },
          { ru: "свежий воздух", stress: "свéжий вóздух", vn: "Không khí trong lành", type: "Cụm danh từ" }
        ],
        grammar: {
          title: "Cách 2 số nhiều sau từ chỉ số lượng (много / мало) & Biến đổi đặc biệt",
          formula: "1. Sau много / мало / số đếm: Danh từ ở Cách 2 số nhiều\n2. Đuôi Cách 2 số nhiều danh từ:\n   - Giống đực: -ов/-ев (учеников, месяцев)\n   - Giống cái & trung bỏ đuôi: яблоко -> яблок, книга -> книг\n3. Lời khuyên: Я стараюсь + Động từ nguyên thể (Tôi cố gắng...)",
          usage: "Nói về số lượng dinh dưỡng thực phẩm và rèn luyện thói quen kiên trì.",
          examples: [
            "Каждый день нужно съедать несколько яблок. (Mỗi ngày nên ăn vài quả táo.)",
            "В нашей школе учится много талантливых учеников. (Ở trường chúng tôi có nhiều học sinh tài năng.)",
            "Я стараюсь пить больше чистой воды и меньше сладостей. (Tôi cố gắng uống nhiều nước lọc và ít đồ ngọt hơn.)"
          ]
        },
        dialogue: {
          situation: "Hai bạn cùng thảo luận về việc từ bỏ thói quen thức khuya nghịch điện thoại",
          lines: [
            { spk: "Ольга", text: "Николай, почему ты выглядишь таким усталым?" },
            { spk: "Николай", text: "Я поздно лёг спать, потому что долго играл на телефоне." },
            { spk: "Ольга", text: "Это очень плохая привычка! Здоровье нужно беречь смолоду." },
            { spk: "Николай", text: "Ты права. Глаза болят, и голова кружится." },
            { spk: "Ольга", text: "Давай установим правило: выключать телефон за час до сна!" },
            { spk: "Николай", text: "Договорились! Буду стараться соблюдать режим." }
          ]
        },
        quiz: [
          {
            q: "Dạng Cách 2 số nhiều của từ 'яблоко' (quả táo) sau từ 'много' là:",
            options: ["A. яблок (много яблок)", "B. яблоков", "C. яблоках", "D. яблоками"],
            a: 0,
            exp: "Danh từ giống trung đuôi -о như 'яблоко' sang Cách 2 số nhiều bị rơi nguyên âm đuôi: яблок (много яблок)."
          },
          {
            q: "Thành ngữ 'Береги платье снову, а здоровье смолоду' mang thông điệp gì?",
            options: ["A. Khuyên con người biết quý trọng và rèn luyện sức khỏe ngay từ khi còn trẻ", "B. Khuyên nên mua nhiều quần áo mới", "C. Chỉ cần tập thể dục khi về già", "D. Ăn mặc đẹp quan trọng hơn sức khỏe"],
            a: 0,
            exp: "Ý nghĩa câu tục ngữ: Giữ áo từ khi còn mới, giữ gìn sức khỏe và danh dự ngay từ thuở trẻ."
          }
        ]
      }
    ]
  },

  // ==================== CHỦ ĐIỂM 3 ====================
  {
    themeNum: 3,
    title: "Chủ điểm 3: В культуре нет границ, только новые горизонты",
    vnTitle: "Văn hóa không biên giới, mở ra chân trời mới",
    desc: "Môi trường học đường, lòng biết ơn thầy cô; khám phá các thành phố lịch sử nước Nga và tinh thần cống hiến vì cộng đồng.",
    lessons: [
      // Bài 7
      {
        id: "bai-7",
        num: 7,
        title: "Урок 7. Ученику – удача, учителю – радость",
        vnTitle: "Học trò thành công, thầy cô vui lòng",
        goal: "Nói về trường lớp, thầy cô và môn học yêu thích; bày tỏ lòng biết ơn đối với thầy cô giáo; sử dụng Cách 3 chỉ người nhận cảm xúc.",
        vocab: [
          { ru: "учитель / учительница", stress: "учи́тель / учи́тельница", vn: "Thầy giáo / Cô giáo", type: "Danh từ" },
          { ru: "ученик / ученица", stress: "учени́к / учени́ца", vn: "Học sinh nam / Học sinh nữ", type: "Danh từ" },
          { ru: "предмет", stress: "предмéт", vn: "Môn học (любимый предмет - môn yêu thích)", type: "Danh từ" },
          { ru: "урок", stress: "урóк", vn: "Tiết học, bài học", type: "Danh từ" },
          { ru: "домашнее задание", stress: "домáшнее задáние", vn: "Bài tập về nhà", type: "Cụm danh từ" },
          { ru: "радость", stress: "рáдость", vn: "Niềm vui, sự hân hoan", type: "Danh từ (giống cái)" },
          { ru: "удача", stress: "удáча", vn: "Sự may mắn, thành công", type: "Danh từ" },
          { ru: "мне нравится", stress: "мне нрáвится", vn: "Tôi thích... (Cách 3)", type: "Cấu trúc" },
          { ru: "о школе", stress: "о шкóле", vn: "Về trường học (Cách 6 với о/об)", type: "Cụm giới từ" }
        ],
        grammar: {
          title: "Cách 3 (Дательный падеж) chỉ Người nhận/Hưởng thụ & Cấu trúc Мне нравится",
          formula: "1. Cấu trúc yêu thích: [Người ở Cách 3] + нравится + [Danh từ số ít Cách 1]\n                      [Người ở Cách 3] + нравятся + [Danh từ số nhiều Cách 1]\n2. Biến đổi đại từ Cách 3: я -> мне, ты -> тебе, он -> ему, она -> ей, мы -> нам, они -> им\n3. Chủ đề bàn luận: о / об + Danh từ ở Cách 6 (о школе, об учителе)",
          usage: "Bày tỏ cảm xúc, sở thích với các môn học và nói về sự tận tụy của thầy cô.",
          examples: [
            "Мне очень нравится русский язык и литература. (Tôi rất thích môn tiếng Nga và văn học.)",
            "Ученику – удача, учителю – радость. (Học trò đạt thành tích là niềm vui lớn của người thầy.)",
            "Мы часто рассказываем родителям о нашей любимой школе. (Chúng tôi thường kể cho bố mẹ nghe về ngôi trường thân yêu.)"
          ]
        },
        dialogue: {
          situation: "Hai bạn cùng trao đổi về môn học yêu thích và chuẩn bị thiệp chúc mừng thầy cô",
          lines: [
            { spk: "Даша", text: "Дима, какой твой самый любимый предмет в школе?" },
            { spk: "Дима", text: "Мне больше всего нравятся история и география. А тебе?" },
            { spk: "Даша", text: "А мне нравится русский язык. Наш учитель объясняет уроки очень интересно." },
            { spk: "Дима", text: "Скоро День учителя. Давай вместе нарисуем красивую стенгазету!" },
            { spk: "Даша", text: "С удовольствием! Учителю будет большая радость." }
          ]
        },
        quiz: [
          {
            q: "Để diễn đạt 'Tôi thích môn lịch sử', đại từ 'я' chuyển sang Cách 3 như thế nào?",
            options: ["A. Мне нравится история.", "B. Я нравится история.", "C. Меня нравится история.", "D. Мной нравится история."],
            a: 0,
            exp: "Cấu trúc 'нравится' đòi hỏi chủ thể cảm nhận ở Cách 3 (Дательный падеж): я -> мне."
          },
          {
            q: "Sau giới từ 'о' (về...) khi nói về trường học (школа), từ được chia ở cách mấy?",
            options: ["A. Cách 6 (о школе)", "B. Cách 2 (о школы)", "C. Cách 4 (о школу)", "D. Cách 5 (о школой)"],
            a: 0,
            exp: "Giới từ о/об chỉ đối tượng bàn luận đi với Cách 6 (Предложный падеж): о школе."
          }
        ]
      },

      // Bài 8
      {
        id: "bai-8",
        num: 8,
        title: "Урок 8. Лучше один раз увидеть, чем сто раз услышать",
        vnTitle: "Thà thấy một lần còn hơn nghe trăm lần",
        goal: "Giới thiệu các địa danh, thành phố nổi tiếng của Nga; hỏi và chỉ vị trí bằng Cách 6 và Cách 2; tìm hiểu lịch sử thành lập Moskva.",
        vocab: [
          { ru: "город", stress: "гóрод", vn: "Thành phố", type: "Danh từ" },
          { ru: "столица", stress: "столи́ца", vn: "Thủ đô", type: "Danh từ" },
          { ru: "площадь", stress: "плóщадь", vn: "Quảng trường (на площади)", type: "Danh từ (giống cái)" },
          { ru: "музей", stress: "музéй", vn: "Bảo tàng", type: "Danh từ" },
          { ru: "театр", stress: "теáтр", vn: "Nhà hát", type: "Danh từ" },
          { ru: "основать", stress: "основáть", vn: "Sáng lập, lập nên (thành phố)", type: "Động từ" },
          { ru: "Юрий Долгорукий", stress: "Ю́рий Долгорýкий", vn: "Hoàng thân Yuri Dolgorukiy (người lập Moskva)", type: "Tên riêng" },
          { ru: "в Москве", stress: "в Москвé", vn: "Ở Moskva (Cách 6)", type: "Trạng ngữ địa điểm" },
          { ru: "в Санкт-Петербурге", stress: "в Сáнкт-Петербýрге", vn: "Ở Saint Petersburg (Cách 6)", type: "Trạng ngữ địa điểm" },
          { ru: "недалеко от", stress: "недалекó от", vn: "Không xa nơi nào đó (đi với Cách 2)", type: "Cụm giới từ" }
        ],
        grammar: {
          title: "Cách 6 chỉ Địa điểm (в / на) & Cách 2 sau giới từ vị trí (около, недалеко от) & Năm thành lập",
          formula: "1. Vị trí ở đâu (Где?): в / на + Danh từ ở Cách 6 (в городе, на площади, в театре)\n2. Vị trí tương đối: около / недалеко от + Danh từ ở Cách 2 (около музея, недалеко от парка)\n3. Nói năm diễn ra sự kiện: в + [Số thứ tự Cách 6] + году (в 1147 году - vào năm 1147)",
          usage: "Mô tả các công trình kiến trúc, danh lam thắng cảnh và mốc lịch sử văn hóa.",
          examples: [
            "Москва находится в европейской части России. (Moskva nằm ở phần lãnh thổ châu Âu của nước Nga.)",
            "Князь Юрий Долгорукий основал Москву в 1147 году. (Hoàng thân Yuri Dolgorukiy đã lập nên Moskva vào năm 1147.)",
            "Наш отель находится недалеко от Красной площади. (Khách sạn của chúng tôi nằm không xa Quảng trường Đỏ.)"
          ]
        },
        dialogue: {
          situation: "Khách du lịch hỏi thăm người dân về các điểm tham quan nổi tiếng ở Saint Petersburg",
          lines: [
            { spk: "Турист", text: "Скажите, пожалуйста, где находится Эрмитаж?" },
            { spk: "Житель", text: "Эрмитаж находится на Дворцовой площади, в самом центре города." },
            { spk: "Турист", text: "Это далеко отсюда? Как лучше добраться?" },
            { spk: "Житель", text: "Нет, совсем близко. Вы можете дойти пешком за десять минут." },
            { spk: "Турист", text: "Большое спасибо! Говорят, лучше один раз увидеть, чем сто раз услышать." },
            { spk: "Житель", text: "Верно! Приятной вам прогулки по нашему городу!" }
          ]
        },
        quiz: [
          {
            q: "Thủ đô Moskva được Hoàng thân Yuri Dolgorukiy sáng lập vào năm nào?",
            options: ["A. Năm 1147 (в 1147 году)", "B. Năm 1242", "C. Năm 1703", "D. Năm 1945"],
            a: 0,
            exp: "Theo lịch sử ghi chép trong biên niên sử, Moskva được nhắc đến lần đầu và sáng lập vào năm 1147."
          },
          {
            q: "Sau cụm từ 'недалеко от' (không xa nơi nào), danh từ tiếp theo phải chia ở cách mấy?",
            options: ["A. Cách 2 (Родительный падеж)", "B. Cách 4 (Винительный падеж)", "C. Cách 6 (Предложный падеж)", "D. Cách 1 (Именительный падеж)"],
            a: 0,
            exp: "Giới từ 'от' (từ / xa khỏi) luôn đòi hỏi danh từ theo sau ở Cách 2 (Родительный падеж)."
          }
        ]
      },

      // Bài 9
      {
        id: "bai-9",
        num: 9,
        title: "Урок 9. Без добрых дел нет доброго имени",
        vnTitle: "Không có việc tốt thì không có danh tiếng tốt",
        goal: "Nói về hoạt động tình nguyện, việc tốt giúp đỡ cộng đồng; đọc hiểu áp phích, thông báo sự kiện từ thiện và rút trích thông tin.",
        vocab: [
          { ru: "доброе дело", stress: "дóброе дéло", vn: "Việc thiện, việc làm tốt", type: "Cụm danh từ" },
          { ru: "волонтёр", stress: "волонтёр", vn: "Tình nguyện viên", type: "Danh từ" },
          { ru: "помогать / помочь", stress: "помогáть / помóчь", vn: "Giúp đỡ (đi với Cách 3)", type: "Cặp động từ" },
          { ru: "детям", stress: "дéтям", vn: "Cho các em nhỏ (Cách 3 số nhiều)", type: "Danh từ" },
          { ru: "пожилые люди", stress: "пожилы́е лю́ди", vn: "Người già, người cao tuổi", type: "Cụm danh từ" },
          { ru: "мероприятие", stress: "мероприýтие", vn: "Sự kiện, hoạt động", type: "Danh từ" },
          { ru: "благотворительный концерт", stress: "благотвори́тельный концéрт", vn: "Buổi hòa nhạc từ thiện", type: "Cụm danh từ" },
          { ru: "прийти / приехать", stress: "прийти́ / приéхать", vn: "Đến nơi bằng đi bộ / bằng phương tiện", type: "Động từ chuyển động" }
        ],
        grammar: {
          title: "Động từ chuyển động có tiền tố (прийти / приехать) & Động từ Помогать + Cách 3",
          formula: "1. Tiền tố при- chỉ sự đến nơi:\n   - прийти (đi bộ đến)\n   - приехать (đi bằng xe cộ đến)\n2. Cấu trúc giúp đỡ: Помогать + [Người nhận ở Cách 3] (помогать детям, помогать другу)\n3. Đọc thông tin áp phích: Ngày giờ (когда?), Địa điểm (где?), Mục đích (зачем?)",
          usage: "Tuyên truyền các hoạt động thiện nguyện, đóng góp xây dựng xã hội văn minh giàu lòng nhân ái.",
          examples: [
            "Каждую субботу волонтёры помогают пожилым людям. (Mỗi thứ Bảy các tình nguyện viên đều giúp đỡ người cao tuổi.)",
            "Мы приехали в детский дом, чтобы привезти книги и игрушки. (Chúng tôi đã đến trại trẻ để mang sách và đồ chơi tới.)",
            "Без добрых дел нет доброго имени. (Không làm việc tốt thì chẳng thể có danh thơm tiếng tốt.)"
          ]
        },
        dialogue: {
          situation: "Học sinh trao đổi về việc tham gia chiến dịch quyên góp sách cho trẻ em vùng cao",
          lines: [
            { spk: "Наташа", text: "Артём, ты видел объявление о благотворительной ярмарке?" },
            { spk: "Артём", text: "Да, читал! В пятницу в актовом зале пройдёт сбор книг для сельской школы." },
            { spk: "Наташа", text: "Я хочу принести русские сказки и учебники. Кому мы передадим их?" },
            { spk: "Артём", text: "Мы передадим их волонтёрам движения «Доброе сердце»." },
            { spk: "Наташа", text: "Прекрасно! Помогать другим – это долг каждого из нас." }
          ]
        },
        quiz: [
          {
            q: "Động từ 'помогать' (giúp đỡ) đòi hỏi danh từ chỉ người được giúp đỡ ở cách mấy?",
            options: ["A. Cách 3 (Дательный падеž - кому?)", "B. Cách 4 (Винительный падеж)", "C. Cách 2 (Родительный падеж)", "D. Cách 5 (Творительный падеж)"],
            a: 0,
            exp: "Quy tắc ngữ pháp tiếng Nga: помогать + кому? (Cách 3: помогать детям, другу)."
          },
          {
            q: "Phân biệt giữa 'прийти' và 'приехать':",
            options: ["A. 'прийти' là đi bộ đến nơi; 'приехать' là đi bằng phương tiện xe cộ đến", "B. Cả hai từ hoàn toàn giống nhau", "C. 'приехать' chỉ dùng cho máy bay", "D. 'прийти' chỉ dùng cho quá khứ"],
            a: 0,
            exp: "Động từ chuyển động tiếng Nga phân biệt rõ: идти/прийти (bằng chân, đi bộ) và ехать/приехать (bằng phương tiện xe cộ)."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { themesPart1 };
}
