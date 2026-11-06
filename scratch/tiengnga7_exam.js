// Bộ 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Tiếng Nga 7 (60:00)
// Chuẩn chương trình SGK Tiếng Nga 7 - Tập 1 & Tập 2 (GDPT 2018)

const tiengNga7ExamQuestions = [
  // PHẦN 1: NGỮ ÂM & TRỌNG ÂM TIẾNG NGA (Câu 1 - 6)
  {
    q: "Trong từ 'молоко' (sữa), chữ cái 'о' ở hai âm tiết đầu không mang trọng âm (trọng âm rơi vào 'о' cuối) sẽ được phát âm thành âm gì?",
    options: [
      "Âm [а] nhẹ (hiện tượng thoái hóa nguyên âm Аканье: [малакó])",
      "Âm [у]",
      "Âm [и]",
      "Giữ nguyên đọc rõ là âm [о]"
    ],
    answer: 0,
    explain: "Quy tắc ngữ âm tiếng Nga: Nguyên âm 'О' khi không mang trọng âm sẽ bị thoái hóa và phát âm thành âm [а] lướt nhẹ."
  },
  {
    q: "Phụ âm hữu thanh 'д' khi đứng ở cuối từ như trong từ 'город' (thành phố) sẽ bị biến đổi phát âm thành phụ âm vô thanh nào?",
    options: [
      "Biến đổi phát âm thành âm [т] ([гóрат])",
      "Biến đổi phát âm thành âm [д] nguyên vẹn",
      "Biến đổi phát âm thành âm [с]",
      "Không phát âm (âm câm)"
    ],
    answer: 0,
    explain: "Quy tắc vô thanh hóa: Các phụ âm hữu thanh (б, в, г, д, ж, з) khi đứng ở tận cùng của từ đều bị phát âm thành phụ âm vô thanh tương ứng (д -> т)."
  },
  {
    q: "Từ 'друг' (người bạn) khi phát âm, phụ âm cuối 'г' được đọc thành âm vô thanh nào?",
    options: [
      "Âm [к] ([друк])",
      "Âm [х]",
      "Âm [г]",
      "Âm [в]"
    ],
    answer: 0,
    explain: "Phụ âm hữu thanh 'г' đứng cuối từ bị vô thanh hóa thành âm [к]: друг đọc là [друк]."
  },
  {
    q: "Trong từ 'язык' (ngôn ngữ), chữ cái 'я' đứng ở vị trí không mang trọng âm (trọng âm ở âm tiết 'ы') được phát âm thành âm gì?",
    options: [
      "Âm lướt gần giống [и] (hiện tượng Иканье: [изы́к])",
      "Âm [а]",
      "Âm [у]",
      "Âm [о]"
    ],
    answer: 0,
    explain: "Hiện tượng Иканье: Nguyên âm 'е' và 'я' ở âm tiết không mang trọng âm trước trọng âm phát âm lướt thành âm [и]."
  },
  {
    q: "Trong từ 'автобус' (xe buýt), phụ âm hữu thanh 'в' đứng trước phụ âm vô thanh 'т' bị biến đổi phát âm thành:",
    options: [
      "Âm vô thanh [ф] ([афтóбус])",
      "Âm [б]",
      "Âm [п]",
      "Giữ nguyên âm [в]"
    ],
    answer: 0,
    explain: "Hiện tượng đồng hóa phụ âm vô thanh: Khi phụ âm hữu thanh đứng trước phụ âm vô thanh (т), nó bị vô thanh hóa thành [ф]."
  },
  {
    q: "Dấu trọng âm trong tiếng Nga có đặc điểm nào sau đây?",
    options: [
      "Trọng âm tự do, có thể rơi vào bất kì âm tiết nào và có thể thay đổi vị trí khi biến cách",
      "Luôn cố định rơi vào âm tiết đầu tiên của từ",
      "Luôn cố định rơi vào âm tiết cuối cùng của từ",
      "Không làm thay đổi cách phát âm của các nguyên âm trong từ"
    ],
    answer: 0,
    explain: "Trọng âm tiếng Nga mang tính tự do và di động, quyết định ngữ nghĩa và cách phát âm của các nguyên âm trong từ."
  },

  // PHẦN 2: HỆ THỐNG 6 CÁCH TIẾNG NGA (Câu 7 - 22)
  {
    q: "Để diễn đạt 'Vào tuần trước chúng tôi đã đi thư viện', cụm từ thời gian nào sau đây đúng chuẩn ngữ pháp?",
    options: [
      "На прошлой неделе (Cách 6 với giới từ 'на')",
      "В прошлую неделю",
      "На прошлую неделю",
      "Через прошлую неделю"
    ],
    answer: 0,
    explain: "Trạng ngữ chỉ thời gian trong tuần: giới từ 'на' đi với tính từ và danh từ ở Cách 6 (Tiền cách): на прошлой неделе."
  },
  {
    q: "Để diễn đạt 'Sau hai ngày nữa chúng tôi sẽ đi dã ngoại', ta dùng cấu trúc thời gian nào với giới từ 'через'?",
    options: [
      "Через два дня (через + Cách 4 chỉ thời gian)",
      "Два дня назад",
      "В два дня",
      "На два дня"
    ],
    answer: 0,
    explain: "Giới từ 'через' (sau... nữa trong tương lai) đi với danh từ chỉ thời gian ở Cách 4: через два дня."
  },
  {
    q: "Cụm từ 'четыре дня назад' có nghĩa tiếng Việt là gì?",
    options: [
      "Cách đây 4 ngày",
      "Sau 4 ngày nữa",
      "Trong vòng 4 ngày",
      "Mỗi 4 ngày một lần"
    ],
    answer: 0,
    explain: "Cấu trúc '[Thời gian Cách 4] + назад' dùng để diễn đạt mốc thời gian cách đây bao lâu trong quá khứ."
  },
  {
    q: "Để nói 'Tôi bị đau đầu' trong tiếng Nga, câu nào sau đây chuẩn xác?",
    options: [
      "У меня болит голова.",
      "Я болит голова.",
      "У меня болят голова.",
      "Моя голова больная."
    ],
    answer: 0,
    explain: "Cấu trúc diễn tả đau ốm: У + [Đại từ Cách 2: меня] + болит + [Bộ phận cơ thể số ít: голова]."
  },
  {
    q: "Khi bị đau nhiều chiếc răng (зубы - số nhiều), động từ 'болеть' được chia ở dạng nào?",
    options: [
      "У меня болят зубы. (болят - ngôi thứ 3 số nhiều)",
      "У меня болит зубы.",
      "У меня болит зуб.",
      "Я болею зубы."
    ],
    answer: 0,
    explain: "Khi danh từ bộ phận cơ thể ở số nhiều (зубы, ноги, глаза), động từ chia ở số nhiều: болят."
  },
  {
    q: "Sau từ chỉ số lượng 'много' (nhiều), danh từ 'овощи' (rau củ) và 'фрукты' (hoa quả) được chia ở cách mấy?",
    options: [
      "Cách 2 số nhiều (много овощей и фруктов)",
      "Cách 1 số nhiều",
      "Cách 4 số ít",
      "Cách 5 số nhiều"
    ],
    answer: 0,
    explain: "Sau các từ chỉ lượng như много, мало, danh từ bắt buộc phải chia ở Cách 2 số nhiều (Родительный падеж): много овощей и фруктов."
  },
  {
    q: "Dạng Cách 2 số nhiều của từ 'ученик' (học sinh) là gì?",
    options: [
      "учеников (много учеников)",
      "ученики",
      "ученикам",
      "учениках"
    ],
    answer: 0,
    explain: "Danh từ giống đực tận cùng bằng phụ âm cứng khi sang Cách 2 số nhiều có đuôi -ов: ученик -> учеников."
  },
  {
    q: "Trong câu 'Учителю – радость, ученику – удача', các danh từ 'учителю' và 'ученику' được chia ở cách mấy?",
    options: [
      "Cách 3 (Дательный падеж - Dữ cách)",
      "Cách 2 (Родительный падеж)",
      "Cách 4 (Винительный падеж)",
      "Cách 6 (Предложный падеж)"
    ],
    answer: 0,
    explain: "Danh từ giống đực đuôi -у (учителю, ученику) ở Cách 3 chỉ đối tượng tiếp nhận niềm vui, sự may mắn."
  },
  {
    q: "Động từ 'помогать' (giúp đỡ) trong câu 'Волонтёры помогают пожилым людям' đòi hỏi danh từ ở cách mấy?",
    options: [
      "Cách 3 (Дательный падеж: помогать кому?)",
      "Cách 4 (Винительный падеж)",
      "Cách 2 (Родительный падеж)",
      "Cách 5 (Творительный падеж)"
    ],
    answer: 0,
    explain: "Quy tắc kết hợp từ: помогать + кому? (Cách 3) -> помогать пожилым людям, помогать другу."
  },
  {
    q: "Để diễn đạt vị trí 'ở thủ đô Moskva', ta dùng giới từ và cách nào?",
    options: [
      "в Москве (в + Cách 6)",
      "в Москву (в + Cách 4)",
      "на Москве",
      "около Москве"
    ],
    answer: 0,
    explain: "Chỉ vị trí ở đâu (Где?): giới từ 'в' đi với danh từ ở Cách 6 (Tiền cách): в Москве."
  },
  {
    q: "Sau giới từ vị trí 'около' (gần, bên cạnh), danh từ 'школа' được chia ở cách mấy?",
    options: [
      "Cách 2 (около школы)",
      "Cách 6 (около школе)",
      "Cách 4 (около школу)",
      "Cách 5 (около школой)"
    ],
    answer: 0,
    explain: "Giới từ 'около' (bên cạnh, gần) luôn đòi hỏi danh từ ở Cách 2 (Родительный падеж): около школы."
  },
  {
    q: "Sau giới từ 'напротив' (đối diện), danh từ 'Кремль' (Điện Kremlin) biến đổi như thế nào?",
    options: [
      "напротив Кремля (Cách 2 giống đực đuôi -я)",
      "напротив Кремле",
      "напротив Кремлю",
      "напротив Кремлём"
    ],
    answer: 0,
    explain: "Giới từ 'напротив' đòi hỏi Cách 2: danh từ giống đực đuôi dấu mềm 'Кремль' chuyển thành 'Кремля'."
  },
  {
    q: "Động từ 'пользоваться' (sử dụng) trong câu 'Я пользуюсь Интернетом' đòi hỏi danh từ ở cách mấy?",
    options: [
      "Cách 5 (Творительный падеж - Công cụ cách)",
      "Cách 4 (Винительный падеж)",
      "Cách 2 (Родительный падеж)",
      "Cách 6 (Предложный падеж)"
    ],
    answer: 0,
    explain: "Động từ 'пользоваться' (dùng, sử dụng) luôn đi kèm danh từ ở Cách 5: пользоваться Интернетом, телефоном."
  },
  {
    q: "Để nói về đề tài 'kể về trường học' (о школе), ta dùng giới từ 'о' đi với cách mấy?",
    options: [
      "Cách 6 (Предложный падеж: о ком? о чём?)",
      "Cách 2 (Родительный падеж)",
      "Cách 3 (Дательный падеж)",
      "Cách 4 (Винительный падеж)"
    ],
    answer: 0,
    explain: "Giới từ о/об chỉ đối tượng, chủ đề bàn luận luôn đi với Cách 6: рассказывать о школе."
  },
  {
    q: "Điền dạng đúng của từ 'среда' (thứ Tư) vào câu: '___ мы пойдём в театр.' (Vào thứ Tư...)",
    options: [
      "В среду (В + Cách 4 giống cái)",
      "В среде",
      "На среду",
      "Через среду"
    ],
    answer: 0,
    explain: "Chỉ thời gian vào thứ mấy trong tuần: giới từ 'в' + Cách 4 (среда -> в среду)."
  },
  {
    q: "Khi đi với danh từ số nhiều 'книги', tính từ 'интересный' biến đổi thành:",
    options: [
      "интересные (интересные книги)",
      "интересная",
      "интересный",
      "интересное"
    ],
    answer: 0,
    explain: "Tính từ số nhiều đuôi -ые/-ие: интересные книги (những cuốn sách thú vị)."
  },

  // PHẦN 3: ĐỘNG TỪ, THỂ & CÚ PHÁP (Câu 23 - 34)
  {
    q: "Chủ ngữ là 'Она' (giống cái), động từ 'читать' ở thì quá khứ được chia là:",
    options: [
      "читала (đuôi -ла)",
      "читал",
      "читало",
      "читали"
    ],
    answer: 0,
    explain: "Đuôi quá khứ giống cái là -ла: Она читала интересную книгу."
  },
  {
    q: "Phân biệt thể động từ НСВ (chưa hoàn thành) và СВ (hoàn thành): Câu 'Я уже сделал домашнее задание' biểu thị điều gì?",
    options: [
      "Hành động đã hoàn thành trọn vẹn, có kết quả xong xuôi (thể hoàn thành СВ)",
      "Hành động đang diễn ra tại thời điểm nói",
      "Hành động lặp đi lặp lại như một thói quen hằng ngày",
      "Hành động sẽ không bao giờ xảy ra"
    ],
    answer: 0,
    explain: "Thể hoàn thành (СВ) với động từ 'сделал' nhấn mạnh kết quả hoàn tất công việc."
  },
  {
    q: "Phân biệt động từ chuyển động 'прийти' và 'приехать':",
    options: [
      "'прийти' là đi bộ đến nơi; 'приехать' là đi bằng phương tiện xe cộ đến nơi",
      "'прийти' chỉ dùng cho quá khứ, 'приехать' dùng cho tương lai",
      "Cả hai từ hoàn toàn đồng nghĩa và thay thế nhau tùy ý",
      "'приехать' chỉ dùng cho đường thủy"
    ],
    answer: 0,
    explain: "Trong tiếng Nga, gốc идти/прийти chỉ việc đi bộ; gốc ехать/приехать chỉ việc đi bằng phương tiện."
  },
  {
    q: "Điền đại từ quan hệ 'который' vào chỗ trống: 'Это музей, в ___ хранятся древние картины.'",
    options: [
      "котором (музей là giống đực số ít, đứng sau giới từ в ở Cách 6)",
      "которой",
      "которое",
      "которых"
    ],
    answer: 0,
    explain: "'Музей' là danh từ giống đực số ít, trong mệnh đề phụ đứng sau giới từ 'в' nên chia ở Cách 6 giống đực: в котором."
  },
  {
    q: "Dạng so sánh hơn ghép của tính từ 'красивый' (đẹp) là:",
    options: [
      "более красивый (hoặc красивее)",
      "самый красивый",
      "красиво",
      "очень красивый"
    ],
    answer: 0,
    explain: "So sánh hơn ghép trong tiếng Nga: более + Tính từ nguyên mẫu (ví dụ: более красивый город)."
  },
  {
    q: "Để nói 'Thành phố đẹp nhất' (город - giống đực), ta dùng hình thức so sánh nhất nào?",
    options: [
      "самый красивый город",
      "самая красивая город",
      "самое красивое город",
      "самые красивые город"
    ],
    answer: 0,
    explain: "So sánh nhất hòa hợp theo giống và số: 'город' là giống đực số ít nên dùng 'самый красивый'."
  },
  {
    q: "Để nói 'Hồ nước lớn nhất' (озеро - giống trung), ta dùng hình thức so sánh nhất nào?",
    options: [
      "самое большое озеро",
      "самый большой озеро",
      "самая большая озеро",
      "самые большие озеро"
    ],
    answer: 0,
    explain: "'Озеро' là danh từ giống trung số ít, từ so sánh nhất chia ở giống trung: самое большое озеро."
  },
  {
    q: "Cấu trúc chỉ mục đích: 'Я учу русский язык, ___ свободно общаться с друзьями.' (Tôi học tiếng Nga để...)",
    options: [
      "чтобы (+ động từ nguyên thể)",
      "потому что",
      "но",
      "или"
    ],
    answer: 0,
    explain: "Để diễn đạt mục đích khi cùng chủ ngữ, dùng liên từ 'чтобы' đi với động từ nguyên thể: чтобы общаться."
  },
  {
    q: "Hình thức mệnh lệnh khuyên can bạn bè: 'Hãy làm xong việc rồi mới đi chơi!' là:",
    options: [
      "Сделай дело – гуляй смело!",
      "Делал дело",
      "Делать дело",
      "Сделаешь дело"
    ],
    answer: 0,
    explain: "Mệnh lệnh cách của động từ thể hoàn thành 'сделать' với ngôi 'ты' là 'сделай'."
  },
  {
    q: "Để dặn một người bạn 'Đừng quên mang theo sách nhé!', câu mệnh lệnh nào đúng?",
    options: [
      "Не забудь взять книгу!",
      "Не забыл взять книгу",
      "Забудь взять книгу",
      "Забудешь взять книгу"
    ],
    answer: 0,
    explain: "Mệnh lệnh phủ định nhắc nhở: Не забудь + Động từ nguyên thể (Не забудь взять книгу)."
  },
  {
    q: "Chuyển câu trực tiếp sau sang câu gián tiếp: Учитель сказал: «Учите новые слова каждый день!»",
    options: [
      "Учитель сказал, чтобы мы учили новые слова каждый день.",
      "Учитель сказал что учить слова.",
      "Учитель сказал потому что слова.",
      "Учитель учил слова каждый день."
    ],
    answer: 0,
    explain: "Khi truyền đạt lại mệnh lệnh, câu gián tiếp dùng liên từ 'чтобы' đi với động từ ở dạng quá khứ (учили)."
  },
  {
    q: "Thành ngữ 'Одно «сейчас» лучше трёх «потом»' khuyên chúng ta bài học đạo đức nào?",
    options: [
      "Hãy làm ngay công việc được giao, không nên chần chừ và trì hoãn",
      "Nên đợi đến ngày mai mới làm",
      "Chỉ làm việc khi có người nhắc nhở",
      "Làm việc càng chậm càng tốt"
    ],
    answer: 0,
    explain: "Ý nghĩa câu tục ngữ: Một việc hoàn thành ngay lúc này quý hơn ba lần hứa hẹn để sau này mới làm."
  },

  // PHẦN 4: VĂN HÓA, DU LỊCH & AN TOÀN SỐ (Câu 35 - 40)
  {
    q: "Vị anh hùng lập nên thành phố Moskva vào năm 1147 được lịch sử ghi nhận là ai?",
    options: [
      "Князь Юрий Долгорукий (Hoàng thân Yuri Dolgorukiy)",
      "Пётр Первый (Pyotr Đại đế)",
      "Александр Пушкин (Đại thi hào Pushkin)",
      "Михаил Ломоносов (Nhà bác học Lomonosov)"
    ],
    answer: 0,
    explain: "Theo biên niên sử nước Nga, Hoàng thân Yuri Dolgorukiy đã sáng lập nên thành phố Moskva vào năm 1147."
  },
  {
    q: "Công trình kiến trúc tôn giáo biểu tượng nổi tiếng với 9 mái vòm củ hành rực rỡ tọa lạc trên Quảng trường Đỏ là:",
    options: [
      "Собор Василия Блаженного (Nhà thờ Thánh Basil)",
      "Большой театр",
      "Зимний дворец",
      "Казанский собор"
    ],
    answer: 0,
    explain: "Nhà thờ Thánh Basil (Собор Василия Блаженного) là kiệt tác kiến trúc độc nhất vô nhị trên Quảng trường Đỏ."
  },
  {
    q: "Trung tâm thương mại bách hóa cổ kính và lộng lẫy nằm đối diện với tháp Spasskaya trên Quảng trường Đỏ có tên là gì?",
    options: [
      "ГУМ (GUM)",
      "ЦУМ",
      "Эрмитаж",
      "Третьяковка"
    ],
    answer: 0,
    explain: "ГУМ (Главный универсальный магазин) là trung tâm bách hóa lịch sử nổi tiếng nằm đối diện Điện Kremlin."
  },
  {
    q: "Hồ nước lịch sử ngàn năm gắn liền với truyền thuyết vua Lê Lợi trả gươm thần tại trung tâm thủ đô Hà Nội là:",
    options: [
      "Озеро Возвращённого Меча (Hồ Hoàn Kiếm / Hồ Gươm)",
      "Западное озеро (Hồ Tây)",
      "Озеро Трукбать",
      "Озеро Байкал"
    ],
    answer: 0,
    explain: "Озеро Возвращённого Меча (Hồ Hoàn Kiếm) là trái tim ngàn năm của thủ đô Hà Nội."
  },
  {
    q: "Trường đại học đầu tiên của Việt Nam tọa lạc tại Hà Nội được nhắc đến trong bài học tiếng Nga là:",
    options: [
      "Храм Литературы (Văn Miếu - Quốc Tử Giám)",
      "Ханойский университет",
      "Оперный театр",
      "Музей истории"
    ],
    answer: 0,
    explain: "Храм Литературы (Văn Miếu - Quốc Tử Giám) được xây dựng từ thế kỉ XI dưới thời nhà Lý, là trường đại học đầu tiên của Việt Nam."
  },
  {
    q: "Để bảo vệ an toàn thông tin cá nhân trên mạng xã hội, hành động nào sau đây là ĐÚNG ĐẮN?",
    options: [
      "Đặt mật khẩu mạnh, bảo mật và không bao giờ chia sẻ mật khẩu cho người lạ trên mạng",
      "Đăng số điện thoại và địa chỉ nhà công khai lên mạng",
      "Gửi ảnh chụp thẻ học sinh và căn cước cho người lạ trong game",
      "Bấm vào mọi đường link quà tặng lạ gửi qua tin nhắn"
    ],
    answer: 0,
    explain: "Quy tắc an toàn số: Luôn bảo mật mật khẩu, không công khai thông tin cá nhân và cảnh giác với các liên kết độc hại."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tiengNga7ExamQuestions };
}
