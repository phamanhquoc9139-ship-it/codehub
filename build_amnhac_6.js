const fs = require('fs');
const path = require('path');

const courseData = {
  grade: 6,
  subject: "Âm Nhạc",
  framework: "Chương trình GDPT 2018 - Cánh Diều / Kết Nối Tri Thức",
  bookName: "Sách giáo khoa Âm Nhạc 6",
  theoryTable: [
    { term: "Cao độ", note: "Độ cao hoặc thấp của âm thanh (trầm hay bổng, do tần số dao động quyết định)" },
    { term: "Trường độ", note: "Độ ngân dài hoặc ngắn của âm thanh (thời gian ngân theo phách)" },
    { term: "Cường độ", note: "Độ mạnh hoặc nhẹ của âm thanh (độ to hay nhỏ, do biên độ dao động quyết định)" },
    { term: "Âm sắc", note: "Đặc điểm giúp phân biệt âm thanh của các giọng hát và nhạc cụ khác nhau" },
    { term: "Kí hiệu Latin", note: "Hệ thống 7 chữ cái Latin chuẩn quốc tế: C (Đô), D (Rê), E (Mi), F (Pha), G (Son), A (La), B (Si)" },
    { term: "Nhịp 4/4", note: "Bốn phách trong một ô nhịp; phách 1 mạnh, phách 2 nhẹ, phách 3 mạnh vừa, phách 4 nhẹ" },
    { term: "Cung và nửa cung", note: "Khoảng cách về cao độ giữa hai âm liền bậc (E-F và B-C là hai cặp nốt tự nhiên cách nhau nửa cung)" },
    { term: "Dấu thăng ♯", note: "Nâng cao độ nốt nhạc lên nửa cung" },
    { term: "Dấu giáng ♭", note: "Hạ cao độ nốt nhạc xuống nửa cung" },
    { term: "Dấu hoàn ♮", note: "Hủy hiệu lực của dấu thăng hoặc dấu giáng theo quy tắc ghi nhạc" },
    { term: "Hát bè", note: "Nhiều bè hát phối hợp tạo sự hòa hợp hoặc đối đáp (bè hòa âm và bè đuổi - canon)" },
    { term: "Hòa tấu", note: "Nhiều nhạc cụ cùng phối hợp biểu diễn một bản nhạc tạo âm thanh phong phú" }
  ],
  competencies: [
    { id: 1, title: "Hát đúng giai điệu, lời ca, nhịp điệu và sắc thái của 8 bài hát", desc: "Thể hiện đúng cảm xúc của 8 bài hát chính khóa: Con đường học trò, Đời sống không già vì có chúng em, Thầy cô là tất cả, Những ước mơ, Mưa rơi, Chỉ có một trên đời, Hãy để mặt trời luôn chiếu sáng, Bác Hồ – Người cho em tất cả." },
    { id: 2, title: "Nghe, nhận biết và nêu cảm nhận về các tác phẩm âm nhạc trong sách", desc: "Cảm thụ và nhận biết phong cách, giai điệu các tác phẩm: Tháng năm học trò, The Blue Danube, Nhớ ơn thầy cô, Giao hưởng số 9 (Ode to Joy), Mừng hội hoa bông, Lullaby, Auld Lang Syne, Việt Nam quê hương tôi." },
    { id: 3, title: "Đọc được 5 bài đọc nhạc, kết hợp gõ đệm hoặc đánh nhịp", desc: "Đọc diễn cảm, chuẩn cao độ, tiết tấu Bài đọc nhạc số 1 (Gam Đô trưởng), Bài đọc nhạc số 2 (Suliko, nhịp 4/4), Bài đọc nhạc số 3, Bài đọc nhạc số 4 (Pê-chi-a) và Bài đọc nhạc số 5 (Dấu hóa)." },
    { id: 4, title: "Nhận biết và sử dụng các kiến thức nhạc lí cơ bản", desc: "Nắm vững 4 thuộc tính âm thanh, ký hiệu Latin (C-D-E-F-G-A-B), nhịp 4/4, khái niệm cung - nửa cung, các loại dấu hóa (♯, ♭, ♮), hình thức hát bè và hòa tấu." },
    { id: 5, title: "Thực hành recorder hoặc kèn phím theo các mẫu âm trong SGK", desc: "Thổi đúng tư thế, luồng hơi và thế bấm recorder (Si, La, Son, Đô 2, Rê 2) hoặc bấm phím kèn phím (gam Đô trưởng, kỹ thuật luồn ngón và vắt ngón)." },
    { id: 6, title: "Biểu diễn nhóm, vận động theo nhạc, sáng tạo tiết tấu và tìm hiểu âm nhạc dân tộc, thế giới", desc: "Tự tin biểu diễn nhóm, thực hành gõ đệm cơ thể (body percussion), tự chế tạo nhạc cụ tiết tấu từ vật liệu tái chế, sáng tạo lời ca mới và tự hào về di sản âm nhạc dân tộc." }
  ],
  topics: [
    {
      id: 1,
      title: "Chủ đề 1. Tuổi học trò",
      pages: "trang 5–12",
      badgeColor: "from-blue-600 to-indigo-600",
      song: {
        title: "Con đường học trò",
        author: "Nguyễn Văn Hiên",
        style: "Vui tươi, trong sáng, hồn nhiên",
        lyrics: `Con đường rợp bóng cây xanh, đưa em tới trường mỗi sớm mai chan hòa ánh nắng.
Từng đàn chim ríu rít hót ca vang, đón chào năm học mới sang rộn ràng tiếng nói cười.
Bạn bè thân thương bên nhau tươi vui, thầy cô dìu dắt bao tháng ngày êm đềm.
Con đường tuổi thơ in đậm dấu chân em, ghi dấu bao kỷ niệm học trò dấu yêu.`,
        guidance: "Học đúng giai điệu, lời ca trong sáng, hát đều nhịp 2/4. Kết hợp gõ đệm bằng thanh phách hoặc vận động cơ thể (vỗ tay theo phách mạnh, giậm chân nhịp nhàng). Thể hiện niềm hân hoan khi bước vào lớp 6 trường THCS."
      },
      listening: {
        title: "Tháng năm học trò",
        author: "Nguyễn Đức Trung",
        desc: "Nhận biết tính chất vui tươi, trong sáng của bài hát. Giai điệu mượt mà, sâu lắng gợi nhắc những tháng năm tuổi thơ cắp sách đến trường, tình cảm bạn bè thân thiết và lòng tri ân mái trường mến yêu."
      },
      appreciation: {
        title: "Thường thức âm nhạc: Đàn Piano (Dương cầm)",
        desc: `Đàn piano (Dương cầm) là 'Vua của các loại nhạc cụ', được Bartolomeo Cristofori phát minh tại Ý vào khoảng năm 1700.
- Hai loại phổ biến:
  + Grand piano (Piano đại/nằm): Dây đàn xếp nằm ngang theo phương ngang của thân đàn, âm thanh vang dội, truyền cảm, thường đặt ở sân khấu thính phòng biểu diễn chuyên nghiệp.
  + Upright piano (Piano đứng): Dây đàn xếp thẳng đứng theo chiều dọc, kích thước gọn gàng, phù hợp cho phòng học và không gian gia đình.
- Cơ chế tạo âm: Sử dụng bàn phím (chuẩn 88 phím gồm 52 phím trắng và 36 phím đen), khi ấn phím búa đàn (hammer) bọc dạ đập vào dây đàn kim loại rung lên tạo âm thanh phong phú. Đàn còn có hệ thống pedal để kéo dài âm hoặc làm âm thanh dịu nhẹ.`
      },
      theory: {
        title: "Lí thuyết: Bốn thuộc tính của âm thanh có tính nhạc",
        desc: `Âm thanh có tính nhạc (khác tiếng ồn) gồm 4 thuộc tính cơ bản:
1. Cao độ (Pitch): Độ cao hoặc thấp (trầm hoặc bổng) của âm thanh. Do tần số dao động quyết định (dao động nhanh tạo âm cao/bổng, dao động chậm tạo âm thấp/trầm). Ví dụ: nốt Đô trầm hơn nốt Son.
2. Trường độ (Duration): Độ ngân dài hoặc ngắn của âm thanh trong thời gian (tính theo phách và hình nốt: nốt tròn = 4 phách, nốt trắng = 2 phách, nốt đen = 1 phách, nốt móc đơn = 1/2 phách).
3. Cường độ (Intensity/Dynamics): Độ mạnh hoặc nhẹ (to hoặc nhỏ) của âm thanh. Do biên độ dao động quyết định (gõ mạnh biên độ lớn kêu to, gõ nhẹ biên độ nhỏ kêu nhỏ). Ký hiệu: p (nhẹ), f (mạnh), mf (mạnh vừa).
4. Âm sắc (Timbre): Màu sắc đặc trưng của âm thanh giúp tai phân biệt được giọng hát của từng người hoặc âm thanh phát ra từ các nhạc cụ khác nhau (tiếng đàn piano khác tiếng đàn guitar, tiếng sáo trúc khác tiếng kèn trumpet).`
      },
      sightReading: {
        title: "Bài đọc nhạc số 1",
        desc: `Gam Đô trưởng (C major): Luyện đọc chuỗi cao độ Đô - Rê - Mi - Pha - Son - La - Si - (Đô 2) và ngược lại.
- Trường độ và tiết tấu: Sử dụng nốt đen, nốt trắng, nốt móc đơn ở nhịp 2/4.
- Luyện tập: Đọc xướng âm chuẩn cao độ kết hợp gõ đệm phách bằng tay hoặc thanh phách.`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Hát nhóm bài 'Con đường học trò' kết hợp vận động cơ thể (Body Percussion: vỗ đùi, vỗ tay, búng tay).
2. Trò chơi 'Đôi tai thính': Nghe các âm thanh mẫu và nhận diện chuẩn xác 4 thuộc tính: Cao độ (cao/thấp), Trường độ (dài/ngắn), Cường độ (to/nhỏ), Âm sắc (loại nhạc cụ nào).`
      },
      quizzes: [
        {
          q: "Bốn thuộc tính của âm thanh có tính nhạc bao gồm những yếu tố nào?",
          options: ["Cao độ, trường độ, cường độ, âm sắc", "Giai điệu, lời ca, hòa âm, phối khí", "Nhịp điệu, tốc độ, phong cách, sắc thái", "Độ vang, độ dội, độ trong, độ ngân"],
          ans: 0,
          exp: "Bốn thuộc tính cơ bản của âm thanh có tính nhạc là Cao độ, Trường độ, Cường độ và Âm sắc."
        },
        {
          q: "Đàn Piano (Dương cầm) có 2 loại phổ biến nhất là gì?",
          options: ["Grand piano (piano nằm) và Upright piano (piano đứng)", "Piano điện tử và Organ", "Piano dây và Piano hơi", "Piano mini và Piano cổ điển"],
          ans: 0,
          exp: "Đàn Piano có hai dạng chính là Grand piano (đại dương cầm/piano nằm) và Upright piano (piano đứng)."
        },
        {
          q: "Bài hát 'Con đường học trò' do nhạc sĩ nào sáng tác?",
          options: ["Nguyễn Văn Hiên", "Nguyễn Đức Trung", "Trịnh Công Sơn", "Bùi Anh Tú"],
          ans: 0,
          exp: "Bài hát 'Con đường học trò' là sáng tác nổi tiếng của nhạc sĩ Nguyễn Văn Hiên."
        },
        {
          q: "Thuộc tính nào giúp ta phân biệt được tiếng đàn Piano với tiếng đàn Guitar khi cùng chơi một nốt nhạc?",
          options: ["Âm sắc", "Cao độ", "Trường độ", "Cường độ"],
          ans: 0,
          exp: "Âm sắc (Timbre) là màu sắc đặc trưng giúp tai phân biệt âm thanh của các nhạc cụ hoặc giọng hát khác nhau."
        }
      ]
    },
    {
      id: 2,
      title: "Chủ đề 2. Cuộc sống tươi đẹp",
      pages: "trang 13–20",
      badgeColor: "from-emerald-600 to-teal-600",
      song: {
        title: "Đời sống không già vì có chúng em",
        author: "Trịnh Công Sơn",
        style: "Vui tươi, hồn nhiên, rộn ràng, lạc quan",
        lyrics: `Đời sống không già vì có chúng em, đời sống vui mừng vì có chúng em.
Như ngàn bông hoa tươi trong nắng sớm, nụ cười rạng rỡ thắm trên môi xinh.
Trái đất này là của chúng em, bầu trời xanh bao la chan hòa tiếng cười.
Ta hát vang đón chào tương lai, cho cuộc đời mãi mãi ngát hương hoa tươi!`,
        guidance: "Hát đúng giai điệu, tiết tấu rộn ràng, thể hiện sự hồn nhiên, tinh thần lạc quan yêu đời. Kết hợp động tác vỗ tay theo nhịp hoặc nhún chân theo phách."
      },
      listening: {
        title: "The Blue Danube (Dòng sông Đa-nuýp xanh)",
        author: "Johann Strauss II",
        desc: "Cảm nhận giai điệu uyển chuyển, trữ tình, nhịp điệu đặc trưng 3/4 của thể loại nhạc Valse (Viennese Waltz). Bản nhạc miêu tả dòng sông Đa-nuýp thơ mộng uốn quanh qua các thành phố châu Âu với những làn sóng dập dềnh lấp lánh ánh mặt trời."
      },
      theory: {
        title: "Lí thuyết: Kí hiệu nốt nhạc bằng chữ cái Latin",
        desc: `Để thuận tiện cho việc ghi chép nốt nhạc quốc tế, ghi tên hợp âm và phím đàn, 7 bậc âm cơ bản được ký hiệu bằng 7 chữ cái in hoa Latin:
- Nốt Đô = chữ C
- Nốt Rê = chữ D
- Nốt Mi = chữ E
- Nốt Pha = chữ F
- Nốt Son = chữ G
- Nốt La = chữ A
- Nốt Si = chữ B
Ghi nhớ theo thứ tự liền bậc: C - D - E - F - G - A - B (tương ứng Đô - Rê - Mi - Pha - Son - La - Si).`
      },
      instruments: {
        title: "Nhạc cụ: Recorder và Kèn phím (Melodica)",
        desc: `- Recorder: Cấu tạo gồm mỏ ngậm thổi, thân sáo với các lỗ bấm và đuôi sáo. Cách cầm: tay trái ở trên (ngón cái bấm lỗ 0 ở phía sau, ngón trỏ lỗ 1, ngón giữa lỗ 2, ngón áp út lỗ 3), tay phải ở dưới. Thổi luồng hơi nhẹ, phát âm 'tu'. Bấm nốt Si (lỗ 0 + 1), nốt La (lỗ 0 + 1 + 2), nốt Son (lỗ 0 + 1 + 2 + 3).
- Kèn phím: Cấu tạo gồm ống ngậm thổi, bàn phím giống piano nhỏ và thân kèn. Cách thổi hơi đều và ngón tay bấm các nốt cơ bản C, D, E, F, G theo đúng ngón số 1, 2, 3, 4, 5 của bàn tay phải.`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Biểu diễn bài hát 'Đời sống không già vì có chúng em' kết hợp động tác múa phụ họa hoặc vỗ tay theo phách.
2. Trò chơi ghép thẻ: Nhìn chữ cái Latin (C, D, E, F, G, A, B) đọc nhanh tên nốt nhạc tiếng Việt và định vị trên phím kèn.`
      },
      quizzes: [
        {
          q: "Kí hiệu nốt nhạc bằng chữ cái Latin của nốt Đô, Rê, Mi, Pha, Son, La, Si lần lượt là gì?",
          options: ["C – D – E – F – G – A – B", "A – B – C – D – E – F – G", "Do – Re – Mi – Fa – Sol – La – Si", "D – E – F – G – A – B – C"],
          ans: 0,
          exp: "Kí hiệu Latin chuẩn quốc tế: C (Đô), D (Rê), E (Mi), F (Pha), G (Son), A (La), B (Si)."
        },
        {
          q: "Bản nhạc 'The Blue Danube' của Johann Strauss II được viết theo nhịp điệu đặc trưng của thể loại nhạc nào?",
          options: ["Nhạc Valse (nhịp 3/4)", "Nhạc Hành khúc (nhịp 2/4)", "Nhạc Tango", "Nhạc Cha-cha-cha"],
          ans: 0,
          exp: "The Blue Danube (Dòng sông Đa-nuýp xanh) là kiệt tác nhạc Valse thành Viên lừng danh của Johann Strauss II."
        },
        {
          q: "Để bấm nốt Si trên sáo Recorder, học sinh dùng tay trái bấm kín những lỗ nào?",
          options: ["Lỗ 0 (phía sau) và lỗ 1 (phía trước)", "Lỗ 1 và lỗ 2", "Lỗ 0, lỗ 1 và lỗ 2", "Bấm kín tất cả các lỗ"],
          ans: 0,
          exp: "Nốt Si trên recorder được tạo ra bằng cách bấm kín lỗ 0 (ngón cái tay trái ở mặt sau) và lỗ 1 (ngón trỏ tay trái)."
        },
        {
          q: "Bài hát 'Đời sống không già vì có chúng em' là sáng tác của nhạc sĩ nào?",
          options: ["Trịnh Công Sơn", "Phạm Tuyên", "Hoàng Long - Hoàng Lân", "Bùi Anh Tú"],
          ans: 0,
          exp: "Bài hát 'Đời sống không già vì có chúng em' do nhạc sĩ Trịnh Công Sơn sáng tác."
        }
      ]
    },
    {
      id: 3,
      title: "Chủ đề 3. Nhớ ơn thầy cô",
      pages: "trang 21–28",
      badgeColor: "from-amber-600 to-orange-600",
      song: {
        title: "Thầy cô là tất cả",
        author: "Bùi Anh Tú",
        style: "Trang nghiêm, xúc động, thiết tha, kính trọng",
        lyrics: `Từng trang sách mở ra chân trời mới, có bóng hình thầy cô tháng năm miệt mài.
Giọt mồ hôi rơi trên trang giáo án, nâng bước chúng em khôn lớn từng ngày.
Thầy cô là vầng trăng soi tỏ đường đời, dìu dắt bao thế hệ bước tới tương lai.
Chúng em khắc ghi ngàn lời tri ân, dâng đóa hoa thơm kính tặng thầy cô.`,
        guidance: "Hát với tình cảm tha thiết, biết ơn sâu sắc, lấy hơi đúng chỗ câu nhạc, phát âm tròn vành rõ chữ, thể hiện lòng kính trọng công ơn dạy dỗ của thầy cô."
      },
      listening: {
        title: "Nhớ ơn thầy cô",
        author: "Nguyễn Ngọc Thiện",
        desc: "Nhận biết giai điệu rộn ràng, tha thiết và dạt dào cảm xúc tri ân. Bài hát gợi lên hình ảnh con đò xưa và bóng dáng người thầy cô tận tụy sớm khuya dìu dắt học trò khôn lớn cập bến tri thức."
      },
      theory: {
        title: "Lí thuyết: Nhịp 4/4 (Nhịp C)",
        desc: `- Khái niệm: Nhịp 4/4 có 4 phách trong một ô nhịp, giá trị mỗi phách bằng một nốt đen. Ký hiệu bằng số 4/4 hoặc chữ in hoa C.
- Tính chất các phách:
  + Phách 1: Mạnh (Strong)
  + Phách 2: Nhẹ (Weak)
  + Phách 3: Mạnh vừa (Medium)
  + Phách 4: Nhẹ (Weak)
- Sơ đồ đánh nhịp 4/4: Phách 1 đánh xuống, phách 2 đánh vào trong (sang trái), phách 3 đánh ra ngoài (sang phải), phách 4 đánh vòng lên trên về vị trí ban đầu.`
      },
      sightReading: {
        title: "Bài đọc nhạc số 2 – Suliko",
        desc: `Bài đọc nhạc số 2 trích đoạn bài dân ca Gruzia 'Suliko'.
- Nhịp 4/4, giai điệu thiết tha, êm đềm.
- Luyện đọc chuẩn cao độ các nốt Đô - Rê - Mi - Son - La, trường độ nốt đen, nốt trắng và nốt trắng chấm dôi.
- Vừa xướng âm vừa vung tay đánh nhịp 4/4 chính xác theo 4 phách.`
      },
      appreciation: {
        title: "Thường thức âm nhạc: Hát bè (Hát hợp xướng)",
        desc: `Hát bè là hình thức biểu diễn thanh nhạc nhiều người cùng hát, trong đó các giọng hát kết hợp với nhau tạo nên sự hòa âm phong phú.
- Hai hình thức hát bè phổ biến:
  1. Hát bè hòa âm: Các bè hát cùng lời, cùng tiết tấu nhưng ở các cao độ khác nhau (thường cách nhau quãng 3, quãng 6), vang lên đồng thời tạo thành các hợp âm hòa quyện êm ái.
  2. Hát bè đuổi (Canon): Các bè hát cùng một giai điệu nhưng vào sau nhau một khoảng thời gian nhất định (sau 1 hoặc 2 ô nhịp), bè sau 'đuổi' theo bè trước tạo nên hiệu ứng đối đáp sinh động.`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Biểu diễn nhóm bài 'Thầy cô là tất cả' kết hợp hát bè hoặc phân chia lĩnh xướng và tốp ca.
2. Chế tạo nhạc cụ tiết tấu từ vật liệu tái chế: Sử dụng lon nước ngọt, nắp chai kim loại, chai nhựa đựng hạt đậu hoặc cát để làm trống lắc (shaker), maracas gõ đệm nhịp 4/4.`
      },
      quizzes: [
        {
          q: "Nhịp 4/4 có tính chất mạnh nhẹ của 4 phách trong một ô nhịp như thế nào?",
          options: ["Phách 1 mạnh, phách 2 nhẹ, phách 3 mạnh vừa, phách 4 nhẹ", "Phách 1 mạnh, phách 2 mạnh vừa, phách 3 nhẹ, phách 4 nhẹ", "Phách 1 nhẹ, phách 2 mạnh, phách 3 nhẹ, phách 4 mạnh", "Cả 4 phách đều mạnh như nhau"],
          ans: 0,
          exp: "Trong nhịp 4/4: phách 1 mạnh, phách 2 nhẹ, phách 3 mạnh vừa, phách 4 nhẹ."
        },
        {
          q: "Hai hình thức hát bè cơ bản được giới thiệu trong SGK Âm nhạc 6 là gì?",
          options: ["Bè hòa âm và Bè đuổi (Canon)", "Bè nam và Bè nữ", "Bè cao và Bè trầm", "Bè đơn và Bè phức"],
          ans: 0,
          exp: "Hai hình thức hát bè cơ bản là Hát bè hòa âm (vang lên cùng lúc ở cao độ khác nhau) và Hát bè đuổi (Canon - vào sau đuổi theo bè trước)."
        },
        {
          q: "Bài đọc nhạc số 2 có tên là gì và trích từ dân ca nước nào?",
          options: ["Suliko – Dân ca Gruzia", "Pê-chi-a – Dân ca Nga", "Auld Lang Syne – Dân ca Scotland", "Mưa rơi – Dân ca Khơ-mú"],
          ans: 0,
          exp: "Bài đọc nhạc số 2 có tên là Suliko, một giai điệu dân ca Gruzia rất nổi tiếng."
        },
        {
          q: "Bài hát 'Thầy cô là tất cả' là sáng tác của ai?",
          options: ["Bùi Anh Tú", "Nguyễn Ngọc Thiện", "Nguyễn Văn Hiên", "Trương Quang Lục"],
          ans: 0,
          exp: "Bài hát 'Thầy cô là tất cả' do nhạc sĩ Bùi Anh Tú sáng tác."
        }
      ]
    },
    {
      id: 4,
      title: "Chủ đề 4. Ước mơ hòa bình",
      pages: "trang 29–36",
      badgeColor: "from-cyan-600 to-blue-600",
      song: {
        title: "Những ước mơ",
        author: "Nguyễn Ngọc Thiện",
        style: "Hào hùng, bay bổng, tràn đầy hy vọng",
        lyrics: `Em ước mơ bay vào không gian xanh, ngắm nhìn trái đất hiền hòa bao la.
Em ước mơ không còn chiến tranh tàn phá, muôn nụ cười trẻ thơ rạng ngời dưới nắng xuân.
Nắm tay nhau ta kết đoàn kết đoàn, vì một thế giới hòa bình và tình thân ái.
Cùng cất cao tiếng hát ước mơ bay xa, cho cuộc đời rạng rỡ ngàn niềm tin yêu!`,
        guidance: "Thể hiện mong muốn cháy bỏng về một thế giới hòa bình, hữu nghị, không còn chiến tranh. Hát với chất giọng vang, khỏe khoắn, truyền cảm."
      },
      listening: {
        title: "Trích đoạn chương IV Giao hưởng số 9 (Ode to Joy - Khúc hoan ca)",
        author: "Ludwig van Beethoven",
        desc: "Cảm nhận kiệt tác vĩ đại nhất lịch sử âm nhạc cổ điển thế giới. Beethoven đã đưa hợp xướng 4 bè cùng dàn nhạc giao hưởng khổng lồ vào chương IV để tấu lên bài ca tình anh em, tự do, nhân ái và hòa bình của nhân loại (phổ thơ Schiller)."
      },
      appreciation: {
        title: "Thường thức âm nhạc: Nhạc sĩ Văn Ký và tác phẩm 'Bài ca hy vọng'",
        desc: `Nhạc sĩ Văn Ký (1928 – 2020), quê quán Nam Định, là một trong những nhạc sĩ tiêu biểu của nền âm nhạc cách mạng Việt Nam, được trao tặng Giải thưởng Nhà nước về Văn học – Nghệ thuật.
- Tác phẩm 'Bài ca hy vọng' (1958): Ra đời trong hoàn cảnh đất nước tạm thời bị chia cắt hai miền Nam - Bắc. Với giai điệu vút cao, bay bổng, dạt dào cảm xúc và lời ca lạc quan: 'Từng đôi chim bay đi tiếng ca rộn ràng... Về phương Nam đón ánh bình minh...', tác phẩm đã trở thành biểu tượng tinh thần kiên cường, cổ vũ niềm tin mãnh liệt vào ngày mai hòa bình, thống nhất non sông.`
      },
      instruments: {
        title: "Nhạc cụ: Luyện Recorder nốt Đô 2 & Kèn phím gam Đô trưởng (Luồn ngón)",
        desc: `- Recorder: Luyện bấm nốt Đô 2 (C5) - ngón cái tay trái mở hoàn toàn lỗ 0 phía sau (hoặc hé một chút), ngón giữa tay trái bấm lỗ 2, các lỗ khác mở. Thổi hơi nhẹ và gom tròn tiếng.
- Kèn phím: Luyện thang âm Đô trưởng (C - D - E - F - G - A - B - C) với kĩ thuật 'Luồn ngón' (Thumb-under): Bấm ngón 1 (Đô), ngón 2 (Rê), ngón 3 (Mi), sau đó luồn ngón cái (ngón 1) sang bấm nốt Pha (F), tiếp tục các ngón 2, 3, 4, 5 cho Son, La, Si, Đô 2.`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Biểu diễn nhóm bài 'Những ước mơ' kết hợp hòa tấu sáo recorder và kèn phím giai điệu bài ca hòa bình.
2. Trình bày cảm nhận cá nhân về thông điệp hòa bình trong trích đoạn Ode to Joy của Beethoven và Bài ca hy vọng của Văn Ký.`
      },
      quizzes: [
        {
          q: "Trích đoạn chương IV trong Giao hưởng số 9 của Ludwig van Beethoven còn được biết đến với tên gọi nổi tiếng nào?",
          options: ["Ode to Joy (Khúc hoan ca)", "The Blue Danube", "Auld Lang Syne", "Suliko"],
          ans: 0,
          exp: "Chương IV bản Giao hưởng số 9 của Beethoven là Ode to Joy (Khúc hoan ca), bài ca ngợi tình hòa bình và đoàn kết nhân loại."
        },
        {
          q: "Tác phẩm 'Bài ca hy vọng' bất hủ do nhạc sĩ nào sáng tác vào năm 1958?",
          options: ["Nhạc sĩ Văn Ký", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Đỗ Nhuận", "Nhạc sĩ Văn Cao"],
          ans: 0,
          exp: "Bài ca hy vọng là kiệt tác của nhạc sĩ Văn Ký sáng tác năm 1958 chan chứa niềm tin đất nước thống nhất."
        },
        {
          q: "Khi chơi thang âm Đô trưởng đi lên trên kèn phím, kĩ thuật nào được dùng để chuyển tiếp ngón từ Mi sang Pha?",
          options: ["Kĩ thuật luồn ngón cái (ngón 1 luồn dưới ngón 3)", "Kĩ thuật vắt ngón 3 qua ngón 1", "Nhảy ngón tay tự do", "Dùng ngón út bấm tiếp"],
          ans: 0,
          exp: "Khi thang âm đi lên, sau nốt Mi (ngón 3), ta dùng kĩ thuật luồn ngón cái (ngón 1) luồn xuống dưới để bấm nốt Pha (F)."
        },
        {
          q: "Bài hát 'Những ước mơ' thể hiện chủ đề tư tưởng cốt lõi gì?",
          options: ["Khát vọng hòa bình, tình hữu nghị và đoàn kết nhân loại", "Kỷ niệm tuổi học trò và mái trường", "Tình mẫu tử thiêng liêng", "Tình yêu thiên nhiên quê hương"],
          ans: 0,
          exp: "Bài hát 'Những ước mơ' của Nguyễn Ngọc Thiện thể hiện khát vọng hòa bình, thế giới không chiến tranh và tình đoàn kết nhân loại."
        }
      ]
    },
    {
      id: 5,
      title: "Chủ đề 5. Giai điệu quê hương",
      pages: "trang 37–44",
      badgeColor: "from-green-600 to-emerald-600",
      song: {
        title: "Mưa rơi",
        author: "Dân ca Khơ-mú (Sưu tầm & ghi âm: GS. Tô Ngọc Thanh)",
        style: "Hồn nhiên, mộc mạc, tươi vui, mang đậm bản sắc vùng cao",
        lyrics: `Mưa rơi cho cây tốt tươi, búp chen lá trên cành mượt mà.
Mưa rơi cho lúa thêm bông, cho nương rẫy thêm xanh bạt ngàn.
Chim hót mừng mùa xuân sang, tiếng khèn reo vang lừng khắp núi rừng.
Bản làng ta đón mùa no ấm, tiếng cười vui rộn rã lưng đồi.`,
        guidance: "Hát với sắc thái tươi vui, luyến láy nhẹ nhàng mang âm hưởng dân ca miền núi phía Bắc. Thể hiện niềm hân hoan khi mùa mưa đến mang lại nguồn nước cho nương rẫy tươi tốt, mùa màng bội thu."
      },
      listening: {
        title: "Hòa tấu nhạc cụ dân tộc 'Mừng hội hoa bông'",
        author: "Âm nhạc cổ truyền Việt Nam",
        desc: "Cảm nhận không khí lễ hội mùa xuân rộn ràng gắn với văn hóa dân gian. Bản hòa tấu kết hợp các nhạc cụ truyền thống dân tộc (trống hội, thanh la, sáo trúc, nhị, nguyệt, tranh) tái hiện không khí ngày hội tưng bừng cầu mong quốc thái dân an, mùa màng trù phú."
      },
      sightReading: {
        title: "Bài đọc nhạc số 3",
        desc: `Bài đọc nhạc viết ở nhịp 2/4 với các nốt Đô, Mi, Son, La, Đô 2.
- Tiết tấu: Nốt đen, nốt trắng và chùm móc đơn rộn rã mang âm hưởng làn điệu dân ca.
- Luyện tập: Đọc chuẩn xác cao độ quãng 3, quãng 4; kết hợp gõ đệm phách bằng song loan hoặc thanh phách.`
      },
      appreciation: {
        title: "Thường thức âm nhạc: Khèn và Sáo trúc",
        desc: `- Khèn (đặc biệt là Khèn Mông): Nhạc cụ hơi độc đáo của đồng bào dân tộc H'Mông và vùng Tây Bắc. Cấu tạo gồm một bầu khèn bằng gỗ và nhiều ống trúc ghép lại, bên trong mỗi ống có lưỡi gà bằng kim loại (đồng). Khèn là nhạc cụ đa âm (phát ra hợp âm), người thổi khèn thường kết hợp các động tác múa khèn nhào lộn điêu luyện trong các dịp chợ phiên, hội xuân Gầu Tào.
- Sáo trúc: Nhạc cụ hơi truyền thống của người Việt, chế tạo từ ống trúc hoặc nứa có khoét một lỗ thổi và 6 lỗ bấm chính. Âm thanh trong trẻo, réo rắt, bay bổng, gắn liền với hình ảnh thôn quê thanh bình, chú bé chăn trâu và cánh diều no gió.`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Hát bài 'Mưa rơi' kết hợp gõ đệm bằng thanh phách và mô phỏng âm thanh tiếng mưa rơi, chim hót.
2. Thuyết trình giới thiệu đặc điểm cây Khèn Mông hoặc Sáo trúc Việt Nam trước lớp.
3. Sáng tạo lời ca mới cho giai điệu Bài đọc nhạc số 3 về chủ đề tình yêu quê hương bản làng.`
      },
      quizzes: [
        {
          q: "Bài hát 'Mưa rơi' là bài dân ca của dân tộc nào và do ai sưu tầm, ghi âm?",
          options: ["Dân ca Khơ-mú – GS. Tô Ngọc Thanh", "Dân ca Thái – GS. Trần Văn Khê", "Dân ca H'Mông – Nhạc sĩ Văn Cao", "Dân ca Tày – Nhạc sĩ Đỗ Nhuận"],
          ans: 0,
          exp: "Bài hát 'Mưa rơi' là dân ca của dân tộc Khơ-mú, do Giáo sư Tô Ngọc Thanh sưu tầm và ghi âm."
        },
        {
          q: "Nhạc cụ hơi truyền thống nào của đồng bào H'Mông có cấu tạo gồm bầu gỗ, nhiều ống trúc và người chơi thường kết hợp vừa thổi vừa múa nhào lộn?",
          options: ["Khèn Mông", "Sáo trúc", "Đàn Đáy", "Đàn Tranh"],
          ans: 0,
          exp: "Cây Khèn (Khèn Mông) là nhạc cụ hơi độc đáo có thể vừa thổi hợp âm vừa biểu diễn động tác múa khèn tài tình."
        },
        {
          q: "Sáo trúc Việt Nam thường được làm từ chất liệu gì và có âm sắc đặc trưng ra sao?",
          options: ["Làm bằng ống trúc/nứa, âm thanh trong trẻo, réo rắt, bay bổng", "Làm bằng kim loại, âm thanh trầm ấm", "Làm bằng vỏ gỗ lim, âm thanh đanh thép", "Làm bằng nhựa, âm thanh khô cứng"],
          ans: 0,
          exp: "Sáo trúc làm từ thân tre, trúc, nứa, phát ra âm thanh trong sáng, réo rắt, thanh thoát."
        },
        {
          q: "Tác phẩm nghe nhạc 'Mừng hội hoa bông' thuộc thể loại biểu diễn nào?",
          options: ["Hòa tấu nhạc cụ dân tộc", "Đơn ca thanh nhạc", "Hợp xướng phương Tây", "Độc tấu đàn Piano"],
          ans: 0,
          exp: "Mừng hội hoa bông là bản hòa tấu nhạc cụ cổ truyền dân tộc Việt Nam tái hiện không khí lễ hội dân gian tưng bừng."
        }
      ]
    },
    {
      id: 6,
      title: "Chủ đề 6. Mẹ trong trái tim em",
      pages: "trang 45–52",
      badgeColor: "from-rose-600 to-pink-600",
      song: {
        title: "Chỉ có một trên đời",
        author: "Nhạc: Trương Quang Lục – Lời: phỏng thơ Nga",
        style: "Trữ tình, ngọt ngào, êm dịu, dạt dào tình mẫu tử",
        lyrics: `Trời cao trong xanh bao la, muôn vì sao lấp lánh đêm đêm.
Nhưng mặt trời chỉ có một mà thôi, soi sáng muôn loài sưởi ấm thế gian.
Và mẹ hiền của em cũng thế, như vầng trăng soi bước em đi.
Dù mai sau đi khắp bốn phương trời, mẹ kính yêu chỉ có một trên đời.`,
        guidance: "Hát với tình cảm tha thiết, ấm áp, sâu lắng, thể hiện lòng biết ơn vô hạn đối với mẹ. Hát đúng cao độ các nốt luyến, ngắt câu đúng chỗ."
      },
      appreciation: {
        title: "Thường thức âm nhạc: Johannes Brahms và tác phẩm 'Lullaby' (Bài hát ru)",
        desc: `Johannes Brahms (1833 – 1897) là nhà soạn nhạc, nghệ sĩ dương cầm vĩ đại người Đức thời kỳ Lãng mạn (cùng với J.S. Bach và Beethoven tạo nên bộ ba '3 chữ B' huyền thoại của âm nhạc cổ điển phương Tây).
- Tác phẩm 'Lullaby' (Wiegenlied, Op. 49 No. 4): Bản hát ru kinh điển nổi tiếng khắp thế giới. Giai điệu dịu êm, đằm thắm, nhịp điệu dập dềnh như nhịp nôi đưa, vỗ về giấc ngủ bình yên cho trẻ thơ trong vòng tay ấm áp chở che của người mẹ.`
      },
      theory: {
        title: "Lí thuyết: Cung và Nửa cung",
        desc: `- Khái niệm: Cung (Whole tone) và Nửa cung (Semitone) là đơn vị đo khoảng cách về cao độ giữa hai âm thanh liền bậc trong thang âm. 1 cung = 2 nửa cung. Nửa cung là khoảng cách nhỏ nhất trong hệ thống âm nhạc cổ điển phương Tây.
- Thang âm tự nhiên Đô trưởng:
  + C - D: 1 cung
  + D - E: 1 cung
  + E - F: 1/2 CUNG (Nửa cung)
  + F - G: 1 cung
  + G - A: 1 cung
  + A - B: 1 cung
  + B - C: 1/2 CUNG (Nửa cung)
- Quy tắc ghi nhớ: Có 2 cặp âm liền bậc tự nhiên cách nhau nửa cung là: Mi - Pha (E - F) và Si - Đô (B - C). Tất cả các cặp âm liền bậc tự nhiên còn lại đều cách nhau 1 cung.`
      },
      sightReading: {
        title: "Bài đọc nhạc số 4 – Pê-chi-a",
        desc: `Bài đọc nhạc số 4 mang tên 'Pê-chi-a'.
- Viết ở nhịp 4/4, luyện đọc chính xác các khoảng cách 1 cung và nửa cung (nhất là quãng Mi - Pha và Si - Đô).
- Luyện tập: Xướng âm kết hợp đánh nhịp 4/4 đều đặn, chú ý phách mạnh, nhẹ.`
      },
      instruments: {
        title: "Nhạc cụ: Luyện Recorder nốt Rê 2 & Kèn phím kỹ thuật Vắt ngón",
        desc: `- Recorder: Bấm nốt Rê 2 (D5) - ngón cái tay trái mở hoàn toàn lỗ 0, ngón trỏ buông, chỉ bấm lỗ 2 bằng ngón giữa tay trái, các lỗ khác mở. Thổi nhẹ nhàng luồng hơi thẳng.
- Kèn phím: Luyện gam Đô trưởng đi xuống với kỹ thuật 'Vắt ngón' (Finger-crossing): Đô (ngón 5), Si (ngón 4), Son (ngón 3), Pha (ngón 2), Mi (ngón 1), sau đó vắt ngón 3 qua ngón cái để bấm nốt Rê (D) rồi ngón 2 hoặc ngón 1 bấm nốt Đô (C).`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Biểu diễn bài 'Chỉ có một trên đời' dành tặng mẹ và cô giáo nhân ngày Quốc tế Phụ nữ 8/3 hoặc 20/10.
2. Thực hành hòa âm nhạc cụ tiết tấu tự làm gõ đệm cho bài hát ru Lullaby.`
      },
      quizzes: [
        {
          q: "Trong 7 bậc âm tự nhiên (C - D - E - F - G - A - B - C), hai cặp âm liền bậc nào có khoảng cách là NỬA CUNG?",
          options: ["E – F (Mi – Pha) và B – C (Si – Đô)", "C – D và G – A", "D – E và F – G", "A – B và C – D"],
          ans: 0,
          exp: "Trong hệ thống 7 âm tự nhiên, chỉ có 2 cặp âm liền bậc cách nhau nửa cung là Mi – Pha (E – F) và Si – Đô (B – C)."
        },
        {
          q: "Nhà soạn nhạc người Đức Johannes Brahms nổi tiếng thế giới với bản hát ru nào?",
          options: ["Lullaby (Wiegenlied)", "Ode to Joy", "The Blue Danube", "Suliko"],
          ans: 0,
          exp: "Johannes Brahms là tác giả bản hát ru bất hủ Lullaby (Wiegenlied)."
        },
        {
          q: "Khi chơi thang âm Đô trưởng đi xuống trên kèn phím, kĩ thuật nào được dùng để chuyển tiếp ngón từ Mi sang Rê?",
          options: ["Kĩ thuật vắt ngón 3 qua ngón 1", "Kĩ thuật luồn ngón cái", "Nhấc toàn bộ bàn tay", "Bấm bằng ngón út"],
          ans: 0,
          exp: "Khi thang âm đi xuống, ta dùng kĩ thuật vắt ngón (vắt ngón 3 qua ngón cái ngón 1) để tiếp tục bấm các nốt thấp hơn."
        },
        {
          q: "Bài hát 'Chỉ có một trên đời' do nhạc sĩ Trương Quang Lục phổ nhạc từ thơ nước nào?",
          options: ["Phỏng thơ Nga", "Phỏng thơ Pháp", "Phỏng thơ Đức", "Phỏng thơ Ba Lan"],
          ans: 0,
          exp: "Bài hát 'Chỉ có một trên đời' do nhạc sĩ Trương Quang Lục sáng tác, phỏng theo một bài thơ Nga cảm động về mẹ."
        }
      ]
    },
    {
      id: 7,
      title: "Chủ đề 7. Âm nhạc nước ngoài",
      pages: "trang 53–58",
      badgeColor: "from-purple-600 to-indigo-600",
      song: {
        title: "Hãy để mặt trời luôn chiếu sáng",
        author: "Nhạc: Arkady Ostrovsky – Lời: Lev Oshanin",
        style: "Vui tươi, rộn ràng, trong sáng, đầy sức sống",
        lyrics: `Mặt trời luôn chiếu sáng, bầu trời xanh ngát xanh.
Em bé luôn vẽ bức tranh tươi màu.
Ghi dòng chữ dưới bức tranh:
Luôn có mặt trời, luôn có trời xanh, luôn có mẹ hiền, luôn có em tôi!
Luôn có mặt trời, luôn có trời xanh, luôn có mẹ hiền, luôn có nụ cười em thơ!`,
        guidance: "Hát với sắc thái trong sáng, tự tin, rạng rỡ. Bài hát là thông điệp hòa bình bất diệt của tuổi thơ toàn cầu, thể hiện mong muốn được sống dưới bầu trời hòa bình, bên mẹ cha và ánh nắng chan hòa."
      },
      listening: {
        title: "Auld Lang Syne",
        author: "Dân ca Scotland (Lời thơ: Robert Burns)",
        desc: "Cảm nhận bài hát truyền thống bất hủ của đất nước Scotland. Với giai điệu tha thiết, ấm áp, bài hát tôn vinh tình bạn chân thành và thường được vang lên trong đêm Giao thừa Tết Dương lịch hoặc các dịp sum họp, chia tay lưu luyến."
      },
      theory: {
        title: "Lí thuyết: Các bậc chuyển hóa và Dấu hóa (♯, ♭, ♮)",
        desc: `- Khái niệm: Dấu hóa là ký hiệu dùng để làm thay đổi cao độ của các bậc âm tự nhiên.
- Ba loại dấu hóa cơ bản:
  1. Dấu thăng (♯ - Sharp): Có tác dụng nâng cao độ của nốt nhạc lên nửa cung.
  2. Dấu giáng (♭ - Flat): Có tác dụng hạ cao độ của nốt nhạc xuống nửa cung.
  3. Dấu hoàn (♮ - Natural): Hủy bỏ hiệu lực của dấu thăng hoặc dấu giáng trước đó, đưa nốt nhạc trở về cao độ tự nhiên vốn có.
- Vị trí đặt dấu hóa:
  + Dấu hóa theo khóa (Hóa biểu): Đặt ở đầu khuông nhạc sau khóa nhạc, có tác dụng lên tất cả các nốt cùng tên trong toàn bộ bản nhạc.
  + Dấu hóa bất thường: Đặt trực tiếp trước một nốt nhạc cụ thể, chỉ có hiệu lực cho nốt đó và các nốt cùng tên trong cùng một ô nhịp.`
      },
      sightReading: {
        title: "Bài đọc nhạc số 5",
        desc: `Bài đọc nhạc số 5 giúp học sinh làm quen với các nốt có xuất hiện dấu hóa chuyển bậc (dấu thăng ♯ hoặc dấu giáng ♭).
- Luyện đọc: Cảm nhận sự thay đổi màu sắc cao độ khi có dấu hóa xuất hiện.
- Tiết tấu: Kết hợp đọc các quãng 2, quãng 3 nhảy bậc và gõ đệm nhịp nhàng.`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Quan sát một bản nhạc và tìm nhanh các nốt có dấu hóa bất thường hoặc hóa biểu theo khóa.
2. Hát bài 'Hãy để mặt trời luôn chiếu sáng' kết hợp múa động tác hòa bình và vỗ tay theo tiết tấu rộn ràng.`
      },
      quizzes: [
        {
          q: "Tác dụng của Dấu thăng (♯) trong âm nhạc là gì?",
          options: ["Nâng cao độ nốt nhạc lên nửa cung", "Hạ cao độ nốt nhạc xuống nửa cung", "Hủy bỏ hiệu lực của dấu giáng", "Làm nốt nhạc ngân dài gấp đôi"],
          ans: 0,
          exp: "Dấu thăng (♯) có tác dụng nâng cao độ của nốt nhạc lên nửa cung."
        },
        {
          q: "Tác dụng của Dấu hoàn (♮) là gì?",
          options: ["Hủy hiệu lực của dấu thăng hoặc dấu giáng, đưa nốt nhạc về cao độ tự nhiên", "Hạ cao độ nốt nhạc xuống 1 cung", "Tăng âm lượng bản nhạc lên gấp đôi", "Kéo dài trường độ nốt nhạc"],
          ans: 0,
          exp: "Dấu hoàn (♮) hủy bỏ hiệu lực của dấu thăng hoặc dấu giáng đặt trước đó."
        },
        {
          q: "Bài hát nổi tiếng 'Auld Lang Syne' là bài dân ca gắn liền với tình bạn của quốc gia nào?",
          options: ["Scotland", "Anh", "Pháp", "Nga"],
          ans: 0,
          exp: "Auld Lang Syne là bài dân ca truyền thống nổi tiếng của Scotland tôn vinh tình bạn và hoài niệm."
        },
        {
          q: "Bài hát thiếu nhi quốc tế 'Hãy để mặt trời luôn chiếu sáng' do nhạc sĩ nào sáng tác phần âm nhạc?",
          options: ["Arkady Ostrovsky", "Johann Strauss II", "Johannes Brahms", "Ludwig van Beethoven"],
          ans: 0,
          exp: "Hãy để mặt trời luôn chiếu sáng do nhạc sĩ Arkady Ostrovsky viết nhạc và Lev Oshanin viết lời."
        }
      ]
    },
    {
      id: 8,
      title: "Chủ đề 8. Bác Hồ với thiếu nhi",
      pages: "trang 59–65",
      badgeColor: "from-red-600 to-rose-600",
      song: {
        title: "Bác Hồ – Người cho em tất cả",
        author: "Hoàng Long – Hoàng Lân",
        style: "Hân hoan, tha thiết, dạt dào lòng kính yêu và biết ơn",
        lyrics: `Cho ánh nắng ban mai là mẹ và là cha, cho câu hát quê hương là thầy và là cô.
Cho em tất cả là Bác Hồ kính yêu!
Bác như vầng thái dương rạng ngời soi bước em đi.
Đời đời em ghi nhớ ngàn công ơn Người, phấn đấu học chăm ngoan xứng danh cháu ngoan Bác Hồ!`,
        guidance: "Hát với tình cảm kính yêu, biết ơn vô bờ bến đối với Bác Hồ muôn vàn kính yêu. Thể hiện niềm hạnh phúc, tự hào của thiếu nhi Việt Nam được sống trong hòa bình độc lập dưới ánh sáng của Đảng và Bác Hồ."
      },
      listening: {
        title: "Việt Nam quê hương tôi",
        author: "Đỗ Nhuận",
        desc: "Cảm nhận bài hát ca ngợi vẻ đẹp non sông gấm vóc, con người hiền hòa mến khách và tinh thần kiên cường bất khuất của dân tộc Việt Nam. Giai điệu mượt mà, sâu lắng như lời mời gọi tha thiết bạn bè năm châu đến với dải đất hình chữ S tươi đẹp."
      },
      appreciation: {
        title: "Thường thức âm nhạc: Bài hát 'Như có Bác trong ngày đại thắng'",
        desc: `Bài hát bất hủ của nhạc sĩ Phạm Tuyên.
- Hoàn cảnh ra đời lịch sử: Đêm ngày 28/4/1975, khi nghe tin chiến dịch Hồ Chí Minh lịch sử sắp toàn thắng giải phóng miền Nam, nhạc sĩ Phạm Tuyên đã xúc động viết trọn vẹn bài hát trong vòng chưa đầy hai tiếng đồng hồ. Trưa ngày 30/4/1975, khi lá cờ giải phóng tung bay trên nóc Dinh Độc Lập, bài hát đã được phát sóng truyền đi khắp cả nước và thế giới qua làn sóng Đài Tiếng nói Việt Nam.
- Ý nghĩa: Với giai điệu rộn ràng, khúc chiết, lời ca cô đọng: 'Như có Bác Hồ trong ngày vui đại thắng, lời Bác nay đã thành chiến thắng huy hoàng...', bài hát đã trở thành khúc khải hoàn ca của toàn dân tộc Việt Nam, biểu tượng thiêng liêng của ngày non sông thu về một mối.`
      },
      instruments: {
        title: "Nhạc cụ: Luyện hòa tấu Recorder, Kèn phím và Nhạc cụ tiết tấu",
        desc: `Thực hành hòa tấu liên khúc các giai điệu quen thuộc:
- Bè 1: Recorder thổi giai điệu chính.
- Bè 2: Kèn phím đệm hòa âm các hợp âm C, F, G.
- Bè 3: Trống nhỏ, thanh phách, tambourine gõ đệm tiết tấu nhịp nhàng.`
      },
      practice: {
        title: "Vận dụng – Sáng tạo",
        desc: `1. Đệm nhạc, biểu diễn tốp ca mừng ngày sinh nhật Bác Hồ kính yêu (19/5).
2. Sưu tầm tranh ảnh, câu chuyện và giới thiệu các ca khúc bất hủ viết về tình cảm sâu nặng giữa Bác Hồ với thiếu niên, nhi đồng.`
      },
      quizzes: [
        {
          q: "Bài hát 'Bác Hồ – Người cho em tất cả' do cặp nhạc sĩ song sinh nào sáng tác?",
          options: ["Hoàng Long và Hoàng Lân", "Văn Cao và Văn Ký", "Phạm Tuyên và Đỗ Nhuận", "Bùi Anh Tú và Trương Quang Lục"],
          ans: 0,
          exp: "Bài hát 'Bác Hồ – Người cho em tất cả' là sáng tác của hai anh em nhạc sĩ Hoàng Long và Hoàng Lân."
        },
        {
          q: "Bài hát 'Như có Bác trong ngày đại thắng' của nhạc sĩ Phạm Tuyên được sáng tác trong sự kiện lịch sử trọng đại nào?",
          options: ["Đại thắng mùa xuân 30/4/1975 giải phóng hoàn toàn miền Nam", "Cách mạng Tháng Tám năm 1945", "Chiến thắng Điện Biên Phủ năm 1954", "Ngày thành lập Đoàn TNCS Hồ Chí Minh"],
          ans: 0,
          exp: "Bài hát ra đời đêm 28/4/1975 và vang lên rộn rã đúng trưa ngày 30/4/1975 chào mừng non sông thống nhất."
        },
        {
          q: "Tác phẩm nghe nhạc 'Việt Nam quê hương tôi' do nhạc sĩ tiêu biểu nào sáng tác?",
          options: ["Đỗ Nhuận", "Nguyễn Văn Hiên", "Nguyễn Đức Trung", "Trịnh Công Sơn"],
          ans: 0,
          exp: "Bài hát ca ngợi quê hương đất nước 'Việt Nam quê hương tôi' do nhạc sĩ Đỗ Nhuận sáng tác."
        },
        {
          q: "Trong dàn hòa tấu học đường gồm Recorder, Kèn phím và Nhạc cụ gõ, vai trò chính của Recorder là gì?",
          options: ["Diễn tấu giai điệu chính", "Giữ nhịp phách mạnh", "Đệm hợp âm nền trầm", "Tạo hiệu ứng tiếng động"],
          ans: 0,
          exp: "Sáo Recorder thường đảm nhiệm diễn tấu giai điệu chính trong trẻo của bản nhạc."
        }
      ]
    }
  ],
  trangNguyenQuestions: [
    {
      q: "Bốn thuộc tính của âm thanh có tính nhạc gồm có những yếu tố nào?",
      options: ["Cao độ, trường độ, cường độ, âm sắc", "Nhịp độ, tiết tấu, hòa âm, phối khí", "Độ ngân, độ vang, độ trong, độ trầm", "Giai điệu, lời ca, tốc độ, sắc thái"],
      ans: 0,
      exp: "Bốn thuộc tính âm nhạc cơ bản: Cao độ (Pitch), Trường độ (Duration), Cường độ (Intensity) và Âm sắc (Timbre)."
    },
    {
      q: "Đàn Piano (Dương cầm) thuộc họ nhạc cụ nào và cơ chế phát âm chủ yếu là gì?",
      options: ["Nhạc cụ bàn phím có búa gõ vào dây kim loại", "Nhạc cụ hơi thổi bằng luồng khí", "Nhạc cụ dây gảy bằng móng", "Nhạc cụ gõ màng da"],
      ans: 0,
      exp: "Đàn piano có bàn phím kết nối với búa gõ (hammer) đập vào dây đàn kim loại để phát ra âm thanh."
    },
    {
      q: "Kí hiệu nốt nhạc bằng chữ cái Latin của nốt Mi và nốt La lần lượt là chữ gì?",
      options: ["E và A", "D và G", "C và F", "F và B"],
      ans: 0,
      exp: "Theo chuẩn quốc tế: C = Đô, D = Rê, E = Mi, F = Pha, G = Son, A = La, B = Si. Do đó Mi = E và La = A."
    },
    {
      q: "Trong nhịp 4/4 (Nhịp C), mỗi ô nhịp gồm mấy phách và phách nào có tính chất 'Mạnh vừa'?",
      options: ["Gồm 4 phách; phách 3 là phách mạnh vừa", "Gồm 4 phách; phách 2 là phách mạnh vừa", "Gồm 2 phách; phách 1 mạnh vừa", "Gồm 3 phách; phách 3 mạnh vừa"],
      ans: 0,
      exp: "Nhịp 4/4 có 4 phách: Phách 1 mạnh, phách 2 nhẹ, phách 3 mạnh vừa, phách 4 nhẹ."
    },
    {
      q: "Trong hệ thống 7 bậc âm tự nhiên, hai cặp âm liền bậc nào có khoảng cách là NỬA CUNG?",
      options: ["Mi – Pha (E – F) và Si – Đô (B – C)", "Đô – Rê và Son – La", "Rê – Mi và Pha – Son", "La – Si và Đô – Rê"],
      ans: 0,
      exp: "Hai cặp âm tự nhiên cách nhau nửa cung là E-F (Mi-Pha) và B-C (Si-Đô)."
    },
    {
      q: "Dấu thăng (♯) có tác dụng gì đối với cao độ của nốt nhạc?",
      options: ["Nâng cao độ nốt nhạc lên nửa cung", "Hạ cao độ nốt nhạc xuống nửa cung", "Hủy bỏ dấu giáng", "Làm nốt nhạc dài gấp đôi"],
      ans: 0,
      exp: "Dấu thăng (♯) nâng cao độ của nốt nhạc lên nửa cung."
    },
    {
      q: "Dấu giáng (♭) có tác dụng gì đối với cao độ của nốt nhạc?",
      options: ["Hạ cao độ nốt nhạc xuống nửa cung", "Nâng cao độ nốt nhạc lên nửa cung", "Đưa nốt nhạc về cao độ tự nhiên", "Làm nốt nhạc hát nhanh hơn"],
      ans: 0,
      exp: "Dấu giáng (♭) có tác dụng hạ cao độ nốt nhạc xuống nửa cung."
    },
    {
      q: "Dấu hoàn (♮) có tác dụng gì theo quy tắc ghi nhạc?",
      options: ["Hủy hiệu lực của dấu thăng hoặc dấu giáng trước đó", "Tăng cao độ lên 1 cung", "Giảm âm lượng về mức nhỏ nhất", "Báo hiệu kết thúc bài hát"],
      ans: 0,
      exp: "Dấu hoàn (♮) hủy bỏ hiệu lực của dấu thăng hoặc dấu giáng, trả lại cao độ tự nhiên cho nốt nhạc."
    },
    {
      q: "Hình thức biểu diễn nhiều bè trong đó một bè hát trước và bè sau vào sau lặp lại giai điệu đuổi theo bè trước gọi là gì?",
      options: ["Hát bè đuổi (Canon)", "Hát bè hòa âm", "Hát lĩnh xướng", "Hát đơn ca"],
      ans: 0,
      exp: "Hát bè đuổi (Canon) là hình thức các bè hát cùng một giai điệu nhưng vào sau nhau đuổi theo nhau."
    },
    {
      q: "Nhiều nhạc cụ cùng phối hợp biểu diễn chung một bản nhạc được gọi là gì?",
      options: ["Hòa tấu", "Hợp xướng", "Đơn tấu", "Độc tấu"],
      ans: 0,
      exp: "Hòa tấu là hình thức nhiều nhạc cụ cùng phối hợp biểu diễn một tác phẩm âm nhạc."
    },
    {
      q: "Bài hát 'Con đường học trò' là sáng tác của nhạc sĩ nào?",
      options: ["Nguyễn Văn Hiên", "Bùi Anh Tú", "Trương Quang Lục", "Phạm Tuyên"],
      ans: 0,
      exp: "Bài hát 'Con đường học trò' do nhạc sĩ Nguyễn Văn Hiên sáng tác."
    },
    {
      q: "Bài hát 'Đời sống không già vì có chúng em' do nhạc sĩ tài hoa nào sáng tác?",
      options: ["Trịnh Công Sơn", "Văn Cao", "Đỗ Nhuận", "Lưu Hữu Phước"],
      ans: 0,
      exp: "Bài hát 'Đời sống không già vì có chúng em' do nhạc sĩ Trịnh Công Sơn sáng tác."
    },
    {
      q: "Bản nhạc 'The Blue Danube' (Dòng sông Đa-nuýp xanh) là kiệt tác của nhà soạn nhạc nào?",
      options: ["Johann Strauss II", "Ludwig van Beethoven", "Johannes Brahms", "W.A. Mozart"],
      ans: 0,
      exp: "The Blue Danube là kiệt tác nhạc Valse của 'Vua nhạc Valse' Johann Strauss II."
    },
    {
      q: "Bài hát 'Thầy cô là tất cả' thể hiện tình cảm gì của học sinh?",
      options: ["Lòng biết ơn và kính trọng thầy cô giáo", "Tình bạn bè tuổi học trò", "Tình mẫu tử thiêng liêng", "Tình yêu quê hương đất nước"],
      ans: 0,
      exp: "Bài hát 'Thầy cô là tất cả' của Bùi Anh Tú thể hiện sâu sắc lòng biết ơn và tri ân thầy cô giáo."
    },
    {
      q: "Trích đoạn chương IV trong Giao hưởng số 9 của Beethoven có tên gọi là gì?",
      options: ["Ode to Joy (Khúc hoan ca)", "Lullaby", "The Blue Danube", "Auld Lang Syne"],
      ans: 0,
      exp: "Chương IV Giao hưởng số 9 của Beethoven là Ode to Joy (Khúc hoan ca) ca ngợi tình anh em và tự do nhân loại."
    },
    {
      q: "Nhạc sĩ Văn Ký sáng tác tác phẩm bất hủ 'Bài ca hy vọng' vào năm nào?",
      options: ["Năm 1958", "Năm 1975", "Năm 1945", "Năm 1954"],
      ans: 0,
      exp: "Tác phẩm 'Bài ca hy vọng' được nhạc sĩ Văn Ký sáng tác vào năm 1958."
    },
    {
      q: "Bài hát 'Mưa rơi' là bài dân ca của đồng bào dân tộc nào?",
      options: ["Dân tộc Khơ-mú", "Dân tộc Thái", "Dân tộc Mường", "Dân tộc Ba Na"],
      ans: 0,
      exp: "Bài hát 'Mưa rơi' là bài dân ca truyền thống của đồng bào Khơ-mú vùng Tây Bắc."
    },
    {
      q: "Cây Khèn Mông có đặc điểm diễn tấu nổi bật nào dưới đây?",
      options: ["Là nhạc cụ hơi đa âm và người chơi thường kết hợp vừa thổi vừa múa nhào lộn", "Chỉ dùng để gõ nhịp", "Chỉ phát ra một cao độ duy nhất", "Được gảy bằng móng tay"],
      ans: 0,
      exp: "Khèn Mông là nhạc cụ hơi đa âm độc đáo mà nghệ nhân vừa thổi vừa thực hiện các động tác múa điêu luyện."
    },
    {
      q: "Bài hát 'Chỉ có một trên đời' do Trương Quang Lục phổ nhạc ca ngợi tình cảm thiêng liêng nào?",
      options: ["Tình mẫu tử của người mẹ kính yêu", "Tình thầy trò", "Tình anh em bè bạn", "Tình yêu thiên nhiên"],
      ans: 0,
      exp: "Bài hát 'Chỉ có một trên đời' gửi trọn lòng kính yêu và biết ơn vô bờ bến đến người mẹ kính yêu."
    },
    {
      q: "Tác phẩm hát ru kinh điển thế giới 'Lullaby' (Wiegenlied) là của nhà soạn nhạc nào?",
      options: ["Johannes Brahms", "Johann Strauss II", "Ludwig van Beethoven", "J.S. Bach"],
      ans: 0,
      exp: "Lullaby là tác phẩm hát ru nổi tiếng của nhà soạn nhạc người Đức Johannes Brahms."
    },
    {
      q: "Bài hát 'Hãy để mặt trời luôn chiếu sáng' là ca khúc thiếu nhi nổi tiếng của quốc gia nào?",
      options: ["Nước Nga", "Nước Pháp", "Nước Anh", "Nước Mỹ"],
      ans: 0,
      exp: "Hãy để mặt trời luôn chiếu sáng là bài hát thiếu nhi bất hủ của nước Nga (nhạc Arkady Ostrovsky, lời Lev Oshanin)."
    },
    {
      q: "Bài hát dân ca Scotland thường được ngân vang vào đêm Giao thừa Tết Dương lịch là gì?",
      options: ["Auld Lang Syne", "Suliko", "Lullaby", "Ode to Joy"],
      ans: 0,
      exp: "Auld Lang Syne là bài dân ca Scotland bất hủ ca ngợi tình bạn tri âm tri kỷ trong đêm Giao thừa."
    },
    {
      q: "Bài hát 'Bác Hồ – Người cho em tất cả' do hai nhạc sĩ nào sáng tác?",
      options: ["Hoàng Long và Hoàng Lân", "Văn Cao và Văn Ký", "Nguyễn Văn Hiên và Bùi Anh Tú", "Phạm Tuyên và Đỗ Nhuận"],
      ans: 0,
      exp: "Bài hát 'Bác Hồ – Người cho em tất cả' do hai nhạc sĩ sinh đôi Hoàng Long và Hoàng Lân sáng tác."
    },
    {
      q: "Ca khúc 'Như có Bác trong ngày đại thắng' được nhạc sĩ Phạm Tuyên sáng tác trong đêm nào?",
      options: ["Đêm 28 tháng 4 năm 1975", "Đêm 30 tháng 4 năm 1975", "Đêm 2 tháng 9 năm 1945", "Đêm 7 tháng 5 năm 1954"],
      ans: 0,
      exp: "Nhạc sĩ Phạm Tuyên sáng tác bài hát trong đêm 28/4/1975 và phát sóng rộng khắp đúng trưa ngày 30/4/1975."
    },
    {
      q: "Khi luyện tập sáo Recorder, để thổi nốt Son (G), người chơi cần bấm kín những lỗ nào?",
      options: ["Lỗ 0 (phía sau) và các lỗ 1, 2, 3 (tay trái)", "Chỉ bấm lỗ 0 và lỗ 1", "Bấm tất cả các lỗ của sáo", "Không bấm lỗ nào cả"],
      ans: 0,
      exp: "Nốt Son (G) trên recorder được tạo thành khi bấm kín lỗ 0 ở mặt sau và các lỗ 1, 2, 3 ở mặt trước bằng tay trái."
    }
  ]
};

function generateHTML() {
  const t = courseData;

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Âm Nhạc Lớp 6 (8 Chủ Đề • Nhạc Lí • Nhạc Cụ Ảo • Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            },
            music: {
              primary: '#0891B2',
              cyan: '#06B6D4',
              teal: '#0D9488',
              rose: '#E11D48',
              indigo: '#4F46E5',
              amber: '#D97706'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <meta name="codehub-activity-name" content="Khóa Học Âm Nhạc Lớp 6">
  <meta name="description" content="Chương trình Âm nhạc Lớp 6 GDPT 2018: Trọn bộ 8 Chủ đề (Hát, Nghe nhạc, Thường thức âm nhạc, Lí thuyết, Đọc nhạc, Nhạc cụ & Vận dụng), Bảng tổng hợp lí thuyết ghi nhớ, 6 Năng lực thực hành, Kèn phím Piano ảo Web Audio và Đấu trường Trạng Nguyên Âm Nhạc 60:00.">

  <style>
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #0891B2; border-radius: 9999px; }
    .hero-music-bg {
      background: radial-gradient(circle at 15% 20%, rgba(8, 145, 178, 0.2) 0%, transparent 45%),
                  radial-gradient(circle at 85% 80%, rgba(79, 70, 229, 0.18) 0%, transparent 45%);
    }
    .piano-key-white {
      height: 140px;
      width: 40px;
      background: white;
      border: 1px solid #cbd5e1;
      border-radius: 0 0 6px 6px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      transition: all 0.08s ease;
      position: relative;
      cursor: pointer;
      user-select: none;
    }
    .piano-key-white:active, .piano-key-white.active {
      background: #e2e8f0;
      transform: translateY(2px);
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
    }
    .piano-key-black {
      height: 90px;
      width: 26px;
      background: #1e293b;
      position: absolute;
      top: 0;
      border-radius: 0 0 4px 4px;
      z-index: 10;
      box-shadow: 0 3px 5px rgba(0,0,0,0.4);
      transition: all 0.08s ease;
      cursor: pointer;
      user-select: none;
    }
    .piano-key-black:active, .piano-key-black.active {
      background: #0f172a;
      transform: translateY(2px);
      box-shadow: inset 0 2px 3px rgba(255,255,255,0.2);
    }
    .recorder-hole {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid #0891b2;
      transition: all 0.2s ease;
    }
    .recorder-hole.filled {
      background-color: #0891b2;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
    }
  </style>
</head>

<body class="bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawerBackdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/60 z-40 lg:hidden hidden transition-opacity duration-300"></div>

  <!-- Mobile Drawer Navigation -->
  <aside id="mobileDrawer" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-dark-surface z-50 lg:hidden transform -translate-x-full transition-transform duration-300 shadow-2xl flex flex-col">
    <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600 text-white">
      <div class="flex items-center gap-2 font-bold text-sm">
        <i class="fa-solid fa-music"></i>
        <span>Mục Lục Âm Nhạc 6</span>
      </div>
      <button onclick="toggleDrawer()" class="p-1.5 rounded-lg hover:bg-white/20 text-white transition">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>
    <div class="p-4 overflow-y-auto custom-scrollbar flex-1 text-xs space-y-3">
      <div class="text-[11px] font-black uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">8 Chủ Đề Chính Khóa</div>
      ${t.topics.map(tp => `
        <a href="#chude-${tp.id}" onclick="toggleDrawer()" class="block p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold transition">
          <i class="fa-solid fa-compact-disc mr-1.5 text-cyan-500"></i> ${tp.title}
        </a>
      `).join('')}
      <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
        <a href="#bang-ly-thuyet" onclick="toggleDrawer()" class="block p-2 rounded-xl font-bold text-teal-600 dark:text-teal-400">
          <i class="fa-solid fa-book mr-1.5"></i> Bảng Lý Thuyết Cần Ghi Nhớ
        </a>
        <a href="#nang-luc-thuc-hanh" onclick="toggleDrawer()" class="block p-2 rounded-xl font-bold text-indigo-600 dark:text-indigo-400">
          <i class="fa-solid fa-list-check mr-1.5"></i> 6 Năng Lực Thực Hành
        </a>
        <a href="#nhac-cu-ao" onclick="toggleDrawer()" class="block p-2 rounded-xl font-bold text-rose-600 dark:text-rose-400">
          <i class="fa-solid fa-keyboard mr-1.5"></i> Kèn Phím Piano &amp; Sáo Recorder Ảo
        </a>
        <button onclick="toggleDrawer(); openTrangNguyenModal();" class="w-full text-left py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold flex items-center justify-between shadow-sm">
          <span>Hội Thi Trạng Nguyên 60:00</span>
          <i class="fa-solid fa-award"></i>
        </button>
      </div>
    </div>
  </aside>

  <!-- Sticky Navbar -->
  <header class="sticky top-0 z-30 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button onclick="toggleDrawer()" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden" aria-label="Mục lục">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400 font-black text-lg sm:text-xl tracking-tight">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-600/20">
            <i class="fa-solid fa-music text-base"></i>
          </div>
          <span class="text-slate-900 dark:text-white">CodeHub</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-200 dark:border-cyan-800">Âm Nhạc 6</span>
        </a>
      </div>

      <div class="flex-1 max-w-md hidden md:block">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input type="text" id="topicSearchInput" oninput="filterTopics()" placeholder="Tìm kiếm bài hát, tác giả, nhạc lý (cung, nhịp 4/4, dấu thăng...)" class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-dark-card border-none focus:ring-2 focus:ring-cyan-500 dark:text-white placeholder-slate-400 transition">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <a href="#nhac-cu-ao" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition">
          <i class="fa-solid fa-keyboard text-cyan-500"></i>
          <span>Kèn Phím Ảo</span>
        </a>
        <button onclick="openTrangNguyenModal()" class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 hover:opacity-95 transition transform hover:-translate-y-0.5">
          <i class="fa-solid fa-award text-yellow-200"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>
        <button onclick="toggleDarkMode()" class="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-yellow-400"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-music-bg border-b border-slate-200 dark:border-slate-800 relative overflow-hidden py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-center lg:text-left space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 text-xs font-bold border border-cyan-200 dark:border-cyan-800">
            <span class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span>Chương trình Giáo dục Phổ thông 2018 &bull; Cấp THCS</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Khóa Học <span class="bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-500 bg-clip-text text-transparent">Âm Nhạc Lớp 6</span>
          </h1>
          <p class="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Hệ thống hóa toàn diện <strong>8 Chủ đề</strong> theo chuẩn chương trình: Hát &bull; Nghe nhạc &bull; Thường thức âm nhạc &bull; Lí thuyết âm nhạc &bull; Đọc nhạc &bull; Nhạc cụ (Recorder, Kèn phím) &bull; Vận dụng sáng tạo &bull; Bảng lý thuyết cần ghi nhớ &bull; 6 Năng lực thực hành &bull; Đấu trường Trạng Nguyên Âm Nhạc 60 phút.
          </p>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            <a href="#chude-1" class="px-3.5 py-1.5 rounded-xl bg-cyan-600 text-white font-bold text-xs hover:bg-cyan-700 shadow-md shadow-cyan-600/20 transition">
              <i class="fa-solid fa-play mr-1.5"></i> Bắt đầu học 8 Chủ đề
            </a>
            <a href="#bang-ly-thuyet" class="px-3.5 py-1.5 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 shadow-md shadow-teal-600/20 transition">
              <i class="fa-solid fa-book mr-1.5"></i> Bảng Lý Thuyết
            </a>
            <a href="#nang-luc-thuc-hanh" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition">
              <i class="fa-solid fa-list-check mr-1.5"></i> 6 Năng Lực
            </a>
            <a href="#nhac-cu-ao" class="px-3.5 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-md shadow-rose-600/20 transition">
              <i class="fa-solid fa-keyboard mr-1.5"></i> Kèn Phím Ảo
            </a>
            <button onclick="openTrangNguyenModal()" class="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-900 font-black text-xs hover:bg-amber-400 shadow-md shadow-amber-500/20 transition">
              <i class="fa-solid fa-trophy mr-1.5"></i> Thi Trạng Nguyên 60:00
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto text-center">
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400">8</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Chủ Đề Toàn Diện</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400">8</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Bài Hát Cốt Lõi</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">5</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Bài Đọc Nhạc</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-rose-500">12</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Lý Thuyết Ghi Nhớ</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-purple-500">6</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Năng Lực Thực Hành</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-xl sm:text-2xl font-black text-amber-500">25</div>
            <div class="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Câu Trạng Nguyên</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content Area -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

      <!-- Desktop Sidebar -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 space-y-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 class="text-xs font-black uppercase text-cyan-700 dark:text-cyan-400 tracking-wider flex items-center gap-2 mb-3">
              <i class="fa-solid fa-list-check"></i>
              <span>Chương Trình Âm Nhạc 6</span>
            </h3>
            <div class="space-y-1.5 overflow-y-auto max-h-[70vh] custom-scrollbar pr-1 text-xs">
              ${t.topics.map(tp => `
                <a href="#chude-${tp.id}" class="block p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-300 font-bold transition truncate" title="${tp.title}">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block mr-1.5"></span>
                  ${tp.title}
                </a>
              `).join('')}
              <div class="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <a href="#bang-ly-thuyet" class="block p-2 rounded-xl font-bold text-teal-600 dark:text-teal-400 hover:underline">
                  <i class="fa-solid fa-book mr-1"></i> Bảng Lý Thuyết Ghi Nhớ
                </a>
                <a href="#nang-luc-thuc-hanh" class="block p-2 rounded-xl font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                  <i class="fa-solid fa-list-check mr-1"></i> 6 Năng Lực Cốt Lõi
                </a>
                <a href="#nhac-cu-ao" class="block p-2 rounded-xl font-bold text-rose-600 dark:text-rose-400 hover:underline">
                  <i class="fa-solid fa-keyboard mr-1"></i> Kèn Phím Piano Ảo
                </a>
                <button onclick="openTrangNguyenModal()" class="w-full text-left py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold flex items-center justify-between shadow-sm mt-2">
                  <span>Trạng Nguyên Âm Nhạc</span>
                  <i class="fa-solid fa-award text-yellow-200"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Units & Sections -->
      <div class="lg:col-span-3 space-y-10">

        <!-- II. BẢNG TỔNG HỢP KIẾN THỨC LÍ THUYẾT CẦN GHI NHỚ -->
        <section id="bang-ly-thuyet" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 font-black text-xs border border-teal-200 dark:border-teal-800">
                  <i class="fa-solid fa-bookmark mr-1"></i> Phần II SGK Âm Nhạc 6
                </span>
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">12 Điểm Nhạc Lí Cốt Lõi</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                Bảng Tổng Hợp Kiến Thức Lí Thuyết Cần Ghi Nhớ
              </h2>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr class="bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 uppercase text-[11px] font-black border-b border-slate-200 dark:border-slate-700">
                  <th class="py-3 px-4 rounded-l-xl">Kiến thức</th>
                  <th class="py-3 px-4 rounded-r-xl">Nội dung cốt lõi cần ghi nhớ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                ${t.theoryTable.map((row, idx) => `
                  <tr class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                    <td class="py-3 px-4 font-bold text-cyan-700 dark:text-cyan-300 whitespace-nowrap">
                      <span class="w-2 h-2 rounded-full bg-cyan-500 inline-block mr-2"></span>${row.term}
                    </td>
                    <td class="py-3 px-4 text-slate-700 dark:text-slate-300 leading-relaxed">${row.note}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

        <!-- III. CÁC NĂNG LỰC THỰC HÀNH KHÔNG ĐƯỢC LƯỢC BỎ -->
        <section id="nang-luc-thuc-hanh" class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 font-black text-xs border border-indigo-200 dark:border-indigo-800">
                  <i class="fa-solid fa-award mr-1"></i> Phần III SGK Âm Nhạc 6
                </span>
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">Chuẩn Đầu Ra GDPT 2018</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                Các Năng Lực Thực Hành Không Được Lược Bỏ
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${t.competencies.map(c => `
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-slate-800 space-y-2">
                <div class="flex items-start gap-2.5">
                  <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${c.id}</span>
                  <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">${c.title}</h4>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-8">${c.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- NHẠC CỤ ẢO: KÈN PHÍM PIANO & RECORDER INTERACTIVE -->
        <section id="nhac-cu-ao" class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-black text-xs border border-cyan-500/30">
                <i class="fa-solid fa-wand-magic-sparkles mr-1"></i> Phòng Thực Hành Âm Nhạc Trực Tuyến
              </div>
              <h2 class="text-xl sm:text-2xl font-black mt-1 text-white">
                Kèn Phím Piano Ảo &amp; Thế Bấm Sáo Recorder
              </h2>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="playMetronomeClick()" id="metronomeBtn" class="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition flex items-center gap-1.5">
                <i class="fa-solid fa-stopwatch text-amber-400"></i>
                <span id="metronomeText">Máy đập nhịp: Bật (80 BPM)</span>
              </button>
            </div>
          </div>

          <!-- Virtual Piano / Melodica -->
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-slate-300">
              <span class="font-bold"><i class="fa-solid fa-keyboard mr-1 text-cyan-400"></i> Bàn phím Kèn phím (Melodica) / Piano (Gam Đô trưởng &amp; Kí hiệu Latin C-D-E-F-G-A-B):</span>
              <span class="text-[11px] text-slate-400 hidden sm:inline">Nhấn chuột hoặc gõ phím để phát âm Web Audio</span>
            </div>

            <div class="overflow-x-auto pb-4">
              <div class="relative inline-flex bg-slate-800 p-3 rounded-2xl border border-white/10 shadow-inner select-none" id="pianoKeyboard">
                <!-- White Keys -->
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="261.63" data-name="C4"><span>C4</span><span class="text-[9px] text-cyan-600">Đô</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="293.66" data-name="D4"><span>D4</span><span class="text-[9px] text-cyan-600">Rê</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="329.63" data-name="E4"><span>E4</span><span class="text-[9px] text-cyan-600">Mi</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="349.23" data-name="F4"><span>F4</span><span class="text-[9px] text-cyan-600">Pha</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="392.00" data-name="G4"><span>G4</span><span class="text-[9px] text-cyan-600">Son</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="440.00" data-name="A4"><span>A4</span><span class="text-[9px] text-cyan-600">La</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="493.88" data-name="B4"><span>B4</span><span class="text-[9px] text-cyan-600">Si</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="523.25" data-name="C5"><span>C5</span><span class="text-[9px] text-indigo-600">Đô2</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="587.33" data-name="D5"><span>D5</span><span class="text-[9px] text-indigo-600">Rê2</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="659.25" data-name="E5"><span>E5</span><span class="text-[9px] text-indigo-600">Mi2</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="698.46" data-name="F5"><span>F5</span><span class="text-[9px] text-indigo-600">Pha2</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="783.99" data-name="G5"><span>G5</span><span class="text-[9px] text-indigo-600">Son2</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="880.00" data-name="A5"><span>A5</span><span class="text-[9px] text-indigo-600">La2</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="987.77" data-name="B5"><span>B5</span><span class="text-[9px] text-indigo-600">Si2</span></div>
                <div class="piano-key-white flex flex-col justify-end items-center pb-2 text-[10px] font-bold text-slate-700" data-note="1046.50" data-name="C6"><span>C6</span><span class="text-[9px] text-rose-600">Đô3</span></div>

                <!-- Black Keys (Accidentals) -->
                <div class="piano-key-black" style="left: 39px;" data-note="277.18" data-name="C#4"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">C#</span></div>
                <div class="piano-key-black" style="left: 79px;" data-note="311.13" data-name="D#4"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">D#</span></div>
                <div class="piano-key-black" style="left: 159px;" data-note="369.99" data-name="F#4"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">F#</span></div>
                <div class="piano-key-black" style="left: 199px;" data-note="415.30" data-name="G#4"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">G#</span></div>
                <div class="piano-key-black" style="left: 239px;" data-note="466.16" data-name="A#4"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">A#</span></div>
                <div class="piano-key-black" style="left: 319px;" data-note="554.37" data-name="C#5"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">C#</span></div>
                <div class="piano-key-black" style="left: 359px;" data-note="622.25" data-name="D#5"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">D#</span></div>
                <div class="piano-key-black" style="left: 439px;" data-note="739.99" data-name="F#5"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">F#</span></div>
                <div class="piano-key-black" style="left: 479px;" data-note="830.61" data-name="G#5"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">G#</span></div>
                <div class="piano-key-black" style="left: 519px;" data-note="932.33" data-name="A#5"><span class="text-[8px] text-slate-300 absolute bottom-1.5 left-1/2 -translate-x-1/2">A#</span></div>
              </div>
            </div>
          </div>

          <!-- Recorder Fingering Visualizer -->
          <div class="p-4 rounded-2xl bg-slate-800/80 border border-white/10 space-y-3">
            <h4 class="font-bold text-xs sm:text-sm text-cyan-300 flex items-center gap-2">
              <i class="fa-solid fa-circle-nodes"></i>
              <span>Mô Phỏng Thế Bấm Sáo Recorder Lớp 6 (Si, La, Son, Đô 2, Rê 2)</span>
            </h4>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
              <div onclick="playTone(493.88); showRecorderDemo('B4')" class="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 cursor-pointer transition">
                <div class="font-black text-cyan-400 text-sm">Nốt Si (B4)</div>
                <div class="text-[10px] text-slate-400 mt-1">Lỗ 0 + Lỗ 1</div>
                <div class="text-[10px] text-cyan-300 mt-1">Ấn để nghe thử ♫</div>
              </div>
              <div onclick="playTone(440.00); showRecorderDemo('A4')" class="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 cursor-pointer transition">
                <div class="font-black text-cyan-400 text-sm">Nốt La (A4)</div>
                <div class="text-[10px] text-slate-400 mt-1">Lỗ 0 + Lỗ 1 + Lỗ 2</div>
                <div class="text-[10px] text-cyan-300 mt-1">Ấn để nghe thử ♫</div>
              </div>
              <div onclick="playTone(392.00); showRecorderDemo('G4')" class="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 cursor-pointer transition">
                <div class="font-black text-cyan-400 text-sm">Nốt Son (G4)</div>
                <div class="text-[10px] text-slate-400 mt-1">Lỗ 0 + Lỗ 1 + 2 + 3</div>
                <div class="text-[10px] text-cyan-300 mt-1">Ấn để nghe thử ♫</div>
              </div>
              <div onclick="playTone(523.25); showRecorderDemo('C5')" class="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/30 hover:border-indigo-400 cursor-pointer transition">
                <div class="font-black text-indigo-400 text-sm">Nốt Đô 2 (C5)</div>
                <div class="text-[10px] text-slate-400 mt-1">Lỗ 0 + Lỗ 2</div>
                <div class="text-[10px] text-indigo-300 mt-1">Ấn để nghe thử ♫</div>
              </div>
              <div onclick="playTone(587.33); showRecorderDemo('D5')" class="p-3 rounded-xl bg-slate-900/90 border border-rose-500/30 hover:border-rose-400 cursor-pointer transition">
                <div class="font-black text-rose-400 text-sm">Nốt Rê 2 (D5)</div>
                <div class="text-[10px] text-slate-400 mt-1">Chỉ bấm Lỗ 2 (Lỗ 0 mở)</div>
                <div class="text-[10px] text-rose-300 mt-1">Ấn để nghe thử ♫</div>
              </div>
            </div>
            <div id="recorderFingeringBox" class="p-3 rounded-xl bg-slate-900 text-center text-xs text-slate-300 border border-white/5">
              💡 Bấm vào các nốt Si, La, Son, Đô 2, Rê 2 phía trên để nghe mẫu âm chuẩn và xem hướng dẫn chi tiết ngón bấm.
            </div>
          </div>
        </section>

        <!-- I. KIẾN THỨC THEO 8 CHỦ ĐỀ CHÍNH KHÓA -->
        <div class="space-y-8" id="topicsContainer">
          ${t.topics.map(tp => `
            <!-- ==================== ${tp.title} ==================== -->
            <article id="chude-${tp.id}" class="topic-card p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <!-- Topic Header -->
              <div class="p-6 rounded-2xl bg-gradient-to-r ${tp.badgeColor} text-white shadow-md space-y-2">
                <div class="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span class="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur">${tp.pages}</span>
                  <span class="bg-black/20 px-2.5 py-1 rounded-full"><i class="fa-solid fa-music mr-1"></i>Chủ đề ${tp.id}/8</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-black">${tp.title}</h3>
              </div>

              <!-- 1. Hát (Song) -->
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-black text-sm uppercase tracking-wide">
                  <i class="fa-solid fa-microphone-lines text-base"></i>
                  <span>1. Hát: ${tp.song.title} – ${tp.song.author}</span>
                </div>
                <div class="p-4 sm:p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/40 space-y-3">
                  <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span class="font-bold text-slate-800 dark:text-slate-200">Sắc thái: <span class="text-cyan-700 dark:text-cyan-300 italic font-medium">${tp.song.style}</span></span>
                    <button onclick="playSongDemo('${tp.song.title}')" class="px-3 py-1 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs transition flex items-center gap-1 shadow-sm">
                      <i class="fa-solid fa-play"></i> Nghe giai điệu mẫu
                    </button>
                  </div>
                  <div class="p-3.5 rounded-xl bg-white dark:bg-dark-surface border border-cyan-100 dark:border-cyan-900/30 font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic whitespace-pre-line">
                    ${tp.song.lyrics}
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    <strong><i class="fa-solid fa-circle-check text-cyan-600 mr-1"></i> Hướng dẫn thực hiện:</strong> ${tp.song.guidance}
                  </p>
                </div>
              </div>

              <!-- 2. Nghe nhạc (Listening) -->
              ${tp.listening ? `
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-black text-sm uppercase tracking-wide">
                    <i class="fa-solid fa-headphones text-base"></i>
                    <span>2. Nghe nhạc: ${tp.listening.title} – ${tp.listening.author}</span>
                  </div>
                  <div class="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    ${tp.listening.desc}
                  </div>
                </div>
              ` : ''}

              <!-- 3. Thường thức âm nhạc (Appreciation) -->
              ${tp.appreciation ? `
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-black text-sm uppercase tracking-wide">
                    <i class="fa-solid fa-landmark text-base"></i>
                    <span>3. ${tp.appreciation.title}</span>
                  </div>
                  <div class="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    ${tp.appreciation.desc}
                  </div>
                </div>
              ` : ''}

              <!-- 4. Lí thuyết âm nhạc (Theory) -->
              ${tp.theory ? `
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-black text-sm uppercase tracking-wide">
                    <i class="fa-solid fa-book-open text-base"></i>
                    <span>4. ${tp.theory.title}</span>
                  </div>
                  <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    ${tp.theory.desc}
                  </div>
                </div>
              ` : ''}

              <!-- 5. Đọc nhạc (Sight Reading) -->
              ${tp.sightReading ? `
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-black text-sm uppercase tracking-wide">
                    <i class="fa-solid fa-music text-base"></i>
                    <span>5. Đọc nhạc: ${tp.sightReading.title}</span>
                  </div>
                  <div class="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    ${tp.sightReading.desc}
                  </div>
                </div>
              ` : ''}

              <!-- 6. Nhạc cụ (Instruments) -->
              ${tp.instruments ? `
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-black text-sm uppercase tracking-wide">
                    <i class="fa-solid fa-guitar text-base"></i>
                    <span>6. ${tp.instruments.title}</span>
                  </div>
                  <div class="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    ${tp.instruments.desc}
                  </div>
                </div>
              ` : ''}

              <!-- 7. Vận dụng - Sáng tạo (Practice) -->
              ${tp.practice ? `
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-sm uppercase tracking-wide">
                    <i class="fa-solid fa-hands-clapping text-base"></i>
                    <span>7. ${tp.practice.title}</span>
                  </div>
                  <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    ${tp.practice.desc}
                  </div>
                </div>
              ` : ''}

              <!-- Trắc nghiệm tự đánh giá từng chủ đề -->
              <div class="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center justify-between">
                  <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-question text-cyan-600"></i>
                    <span>Kiểm Tra Nhanh Chủ Đề ${tp.id} (4 Câu Trắc Nghiệm Tương Tác)</span>
                  </h4>
                  <span class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400">Tự động chấm điểm</span>
                </div>

                <div class="space-y-4">
                  ${tp.quizzes.map((q, qI) => `
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-slate-800 space-y-3">
                      <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
                        <span class="px-2 py-0.5 rounded-md bg-cyan-600 text-white font-black text-xs shrink-0">${qI + 1}</span>
                        <span>${q.q}</span>
                      </div>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        ${q.options.map((opt, optI) => `
                          <label class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-card transition text-xs text-slate-700 dark:text-slate-300">
                            <input type="radio" name="topic_${tp.id}_q_${qI}" value="${optI}" class="text-cyan-600 focus:ring-cyan-500">
                            <span>${opt}</span>
                          </label>
                        `).join('')}
                      </div>
                      <div class="flex items-center justify-between pt-1">
                        <button onclick="checkTopicSingleQuiz(${tp.id}, ${qI}, ${q.ans}, '${q.exp.replace(/'/g, "\\'")}')" class="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-sm transition">
                          Kiểm tra đáp án
                        </button>
                      </div>
                      <div id="topic_res_${tp.id}_${qI}" class="hidden p-3 rounded-xl text-xs"></div>
                    </div>
                  `).join('')}
                </div>
              </div>

            </article>
          `).join('')}
        </div>

      </div>
    </div>
  </main>

  <!-- Interactive Modal: Trạng Nguyên Âm Nhạc 6 (60:00) -->
  <div id="trangNguyenModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-4">
    <div class="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-dark-surface rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
      
      <!-- Modal Header -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-inner">
            <i class="fa-solid fa-award text-yellow-200"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg">Hội Thi Trạng Nguyên Âm Nhạc Lớp 6 (Đấu Trường 60 Phút)</h3>
            <p class="text-xs text-slate-100">Bộ 25 câu hỏi trắc nghiệm toàn diện 8 Chủ đề &bull; Bảng Lý Thuyết &bull; 6 Năng Lực</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-black/30 font-mono font-black text-yellow-300 text-sm flex items-center gap-1.5">
            <i class="fa-solid fa-clock"></i>
            <span id="contestTimer">60:00</span>
          </div>
          <button onclick="closeTrangNguyenModal()" class="p-2 rounded-xl hover:bg-white/20 text-white transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body (Questions) -->
      <div id="contestBody" class="p-5 sm:p-7 overflow-y-auto custom-scrollbar flex-1 space-y-6 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/40 text-cyan-900 dark:text-cyan-200 leading-relaxed">
          <strong><i class="fa-solid fa-circle-info mr-1"></i> Quy chế thi Trạng Nguyên:</strong> Thí sinh chọn 1 đáp án chính xác nhất cho mỗi câu hỏi. Sau khi hoàn thành toàn bộ 25 câu, bấm <strong>'Nộp bài &amp; Xem xếp hạng'</strong> để hệ thống tự động chấm điểm, phân tích lời giải chi tiết và vinh danh danh hiệu Trạng Nguyên, Bảng Nhãn hoặc Thám Hoa!
        </div>

        <form id="trangNguyenForm" class="space-y-5">
          ${t.trangNguyenQuestions.map((q, idx) => `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-start gap-2">
                <span class="px-2 py-0.5 rounded-md bg-cyan-600 text-white font-black text-xs shrink-0">Câu ${idx + 1}</span>
                <span>${q.q}</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                ${q.options.map((opt, optI) => `
                  <label class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500 cursor-pointer flex items-center gap-2.5 bg-white dark:bg-dark-surface transition text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <input type="radio" name="tn_q_${idx}" value="${optI}" class="text-cyan-600 focus:ring-cyan-500">
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
              <div id="tn_exp_${idx}" class="hidden p-3 rounded-xl bg-slate-100 dark:bg-dark-surface text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"></div>
            </div>
          `).join('')}
        </form>

        <div id="contestResultArea" class="hidden p-6 rounded-2xl bg-white dark:bg-dark-card border border-cyan-200 dark:border-cyan-900 shadow-md text-center space-y-4">
          <div id="contestBadge" class="w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h4 id="contestRank" class="text-2xl font-black text-slate-900 dark:text-white">Trạng Nguyên Âm Nhạc</h4>
            <p id="contestScore" class="text-sm font-bold text-cyan-600 dark:text-cyan-400 mt-1">Đạt 25/25 điểm (100%)</p>
            <p id="contestComment" class="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">Tuyệt đỉnh âm nhạc! Bạn đã làm chủ toàn diện 8 chủ đề, lý thuyết và nhạc cụ Lớp 6!</p>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 bg-slate-100 dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
        <button onclick="closeTrangNguyenModal()" class="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-300 dark:hover:bg-slate-700 transition">
          Đóng
        </button>
        <button id="btnSubmitContest" onclick="submitContest()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white font-black text-xs shadow-md shadow-amber-500/20 hover:opacity-95 transition">
          <i class="fa-solid fa-paper-plane mr-1.5"></i> Nộp Bài &amp; Xem Xếp Hạng
        </button>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 py-8 text-xs text-slate-500 text-center">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">Khóa Học Âm Nhạc Lớp 6 &bull; CodeHub CS Learning Platform</p>
      <p>Biên soạn bám sát Chương trình Giáo dục Phổ thông 2018 cấp THCS &bull; 8 Chủ đề &bull; Bảng Lý Thuyết &bull; 6 Năng Lực</p>
      <p class="text-[11px] text-slate-400">&copy; 2026 CodeHub. Vững nền tảng - Sáng tương lai.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Audio Context for Virtual Piano & Recorder
    let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playTone(freq, duration = 0.5, type = 'sine') {
      try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Envelope
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (e) {
        console.error('Audio play error:', e);
      }
    }

    // Initialize Piano Keys
    document.addEventListener('DOMContentLoaded', () => {
      const keys = document.querySelectorAll('#pianoKeyboard .piano-key-white, #pianoKeyboard .piano-key-black');
      keys.forEach(k => {
        k.addEventListener('mousedown', () => {
          const freq = parseFloat(k.dataset.note);
          if (freq) {
            playTone(freq, 0.6, 'triangle');
            k.classList.add('active');
          }
        });
        k.addEventListener('mouseup', () => k.classList.remove('active'));
        k.addEventListener('mouseleave', () => k.classList.remove('active'));
      });
    });

    // Metronome Simulation
    let metronomeInterval = null;
    let metronomeRunning = false;
    function playMetronomeClick() {
      const btn = document.getElementById('metronomeBtn');
      const txt = document.getElementById('metronomeText');
      if (metronomeRunning) {
        clearInterval(metronomeInterval);
        metronomeRunning = false;
        txt.innerText = 'Máy đập nhịp: Tắt';
        btn.classList.remove('bg-amber-500/40', 'border-amber-400');
      } else {
        metronomeRunning = true;
        txt.innerText = 'Máy đập nhịp: Đang chạy (80 BPM)';
        btn.classList.add('bg-amber-500/40', 'border-amber-400');
        let beat = 1;
        metronomeInterval = setInterval(() => {
          const ctx = getAudioContext();
          const freq = (beat === 1) ? 1000 : 700; // Phách 1 cao hơn
          playTone(freq, 0.08, 'sine');
          beat = (beat % 4) + 1; // Nhịp 4/4
        }, 750); // 80 BPM = 750ms/beat
      }
    }

    // Recorder Fingering Guide Demo
    function showRecorderDemo(note) {
      const box = document.getElementById('recorderFingeringBox');
      const guideMap = {
        'B4': '<strong>Nốt Si (B4):</strong> Tay trái bịt kín lỗ 0 (mặt sau) và lỗ 1 (mặt trước). Tay phải đỡ thân sáo.',
        'A4': '<strong>Nốt La (A4):</strong> Tay trái bịt kín lỗ 0 (mặt sau), lỗ 1 và lỗ 2 (mặt trước).',
        'G4': '<strong>Nốt Son (G4):</strong> Tay trái bịt kín lỗ 0 (mặt sau), lỗ 1, 2 và 3 (mặt trước).',
        'C5': '<strong>Nốt Đô 2 (C5):</strong> Tay trái bịt kín lỗ 0 (mặt sau) và lỗ 2. Lỗ 1 buông hở!',
        'D5': '<strong>Nốt Rê 2 (D5):</strong> Tay trái chỉ bấm duy nhất lỗ 2. Lỗ 0 và lỗ 1 hoàn toàn buông hở!'
      };
      box.innerHTML = guideMap[note] || '';
    }

    // Song melody demo simulation
    function playSongDemo(title) {
      alert('Đang phát giai điệu bài hát mẫu: \"' + title + '\" bằng bộ đệm Web Audio!');
      const melodyNotes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 523.25];
      let delay = 0;
      melodyNotes.forEach(f => {
        setTimeout(() => playTone(f, 0.4, 'sine'), delay);
        delay += 300;
      });
    }

    // Dark Mode Toggle
    function toggleDarkMode() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Mobile Drawer Toggle
    function toggleDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      const backdrop = document.getElementById('drawerBackdrop');
      if (drawer.classList.contains('-translate-x-full')) {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Single Topic Quiz Checker
    function checkTopicSingleQuiz(topicId, qIdx, correctVal, explanation) {
      const radios = document.getElementsByName('topic_' + topicId + '_q_' + qIdx);
      let selected = null;
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selected = parseInt(radios[i].value, 10);
          break;
        }
      }

      const resBox = document.getElementById('topic_res_' + topicId + '_' + qIdx);
      if (selected === null) {
        resBox.className = 'p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-xs text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40';
        resBox.innerHTML = '<i class=\"fa-solid fa-triangle-exclamation mr-1.5\"></i> Vui lòng chọn một đáp án trước khi bấm kiểm tra.';
        resBox.classList.remove('hidden');
        return;
      }

      if (selected === correctVal) {
        resBox.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
        resBox.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-500 mr-1.5\"></i><strong>Chính xác! Rất giỏi!</strong> ' + explanation;
      } else {
        resBox.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        resBox.innerHTML = '<i class=\"fa-solid fa-circle-xmark text-rose-500 mr-1.5\"></i><strong>Chưa chính xác rồi!</strong> ' + explanation;
      }
      resBox.classList.remove('hidden');
    }

    // Search filter for topics
    function filterTopics() {
      const query = (document.getElementById('topicSearchInput')?.value || '').trim().toLowerCase();
      const cards = document.querySelectorAll('.topic-card');
      cards.forEach(c => {
        const text = c.innerText.toLowerCase();
        if (!query || text.includes(query)) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    }

    // Contest Trạng Nguyên Âm Nhạc Logic (60:00)
    let contestInterval = null;
    let contestSeconds = 60 * 60;
    const contestTotal = 25;
    const contestAnswers = ${JSON.stringify(t.trangNguyenQuestions.map(q => q.ans))};
    const contestExplanations = ${JSON.stringify(t.trangNguyenQuestions.map(q => q.exp))};

    function openTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.remove('hidden');
      if (!contestInterval) {
        startContestTimer();
      }
    }

    function closeTrangNguyenModal() {
      document.getElementById('trangNguyenModal').classList.add('hidden');
    }

    function startContestTimer() {
      const timerEl = document.getElementById('contestTimer');
      contestInterval = setInterval(() => {
        if (contestSeconds <= 0) {
          clearInterval(contestInterval);
          alert('Đã hết thời gian 60 phút làm bài! Hệ thống tự động nộp bài.');
          submitContest();
          return;
        }
        contestSeconds--;
        const m = Math.floor(contestSeconds / 60);
        const s = contestSeconds % 60;
        timerEl.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }, 1000);
    }

    function submitContest() {
      clearInterval(contestInterval);
      let score = 0;
      for (let i = 0; i < contestTotal; i++) {
        const radios = document.getElementsByName('tn_q_' + i);
        let val = null;
        for (let j = 0; j < radios.length; j++) {
          if (radios[j].checked) {
            val = parseInt(radios[j].value, 10);
            break;
          }
        }
        const expEl = document.getElementById('tn_exp_' + i);
        if (expEl) {
          expEl.classList.remove('hidden');
          if (val === contestAnswers[i]) {
            score++;
            expEl.className = 'p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
            expEl.innerHTML = '<i class=\"fa-solid fa-check text-emerald-500 mr-1.5\"></i><strong>Chính xác!</strong> ' + contestExplanations[i];
          } else {
            expEl.className = 'p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
            expEl.innerHTML = '<i class=\"fa-solid fa-xmark text-rose-500 mr-1.5\"></i><strong>Đáp án đúng: ' + (contestAnswers[i] + 1) + '.</strong> ' + contestExplanations[i];
          }
        }
      }

      const resArea = document.getElementById('contestResultArea');
      resArea.classList.remove('hidden');
      const scoreEl = document.getElementById('contestScore');
      const rankEl = document.getElementById('contestRank');
      const badgeEl = document.getElementById('contestBadge');
      const commentEl = document.getElementById('contestComment');

      const pct = Math.round((score / contestTotal) * 100);
      scoreEl.innerText = 'Đạt ' + score + '/' + contestTotal + ' câu (' + pct + '%)';

      if (score >= 23) {
        rankEl.innerText = 'Trạng Nguyên Âm Nhạc (Thủ Khoa Đất Việt)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-slate-900 flex items-center justify-center text-3xl shadow-lg ring-4 ring-amber-200 dark:ring-amber-800';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-crown text-amber-900\"></i>';
        commentEl.innerText = 'Xuất sắc tuyệt đỉnh! Bạn là bậc thầy cảm thụ âm nhạc, nhạc lý và nhạc cụ Lớp 6!';
      } else if (score >= 19) {
        rankEl.innerText = 'Bảng Nhãn Âm Nhạc (Tài Năng Tỏa Sáng)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-cyan-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-cyan-200 dark:ring-cyan-800';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-medal text-white\"></i>';
        commentEl.innerText = 'Rất đáng khen ngợi! Bạn nắm rất vững các chủ đề, nhạc cụ và bài hát trong chương trình!';
      } else if (score >= 14) {
        rankEl.innerText = 'Thám Hoa Âm Nhạc (Hiếu Học Tiến Bộ)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-indigo-500 text-white flex items-center justify-center text-3xl shadow-lg ring-4 ring-indigo-200 dark:ring-indigo-800';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-award text-white\"></i>';
        commentEl.innerText = 'Khá tốt! Bạn đã hoàn thành bài thi và giải đúng nhiều câu hỏi lý thuyết quan trọng!';
      } else {
        rankEl.innerText = 'Sĩ Tử Cần Cù (Tiếp Tục Rèn Luyện)';
        badgeEl.className = 'w-16 h-16 mx-auto rounded-3xl bg-slate-400 text-white flex items-center justify-center text-3xl shadow-lg';
        badgeEl.innerHTML = '<i class=\"fa-solid fa-book-open-reader text-white\"></i>';
        commentEl.innerText = 'Hãy xem lại Bảng Lý Thuyết và thực hành thêm các bài đọc nhạc, nhạc cụ nhé. Cố lên!';
      }

      resArea.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('btnSubmitContest').classList.add('hidden');
    }
  </script>
</body>
</html>`;
}

// Write to courses/amnhac_6.html & courses/music_6.html
const htmlContent = generateHTML();
const outPath1 = path.join(__dirname, 'cs-learning-platform', 'courses', 'amnhac_6.html');
const outPath2 = path.join(__dirname, 'cs-learning-platform', 'courses', 'music_6.html');

fs.writeFileSync(outPath1, htmlContent, 'utf8');
console.log(`Generated ${outPath1} (${htmlContent.length} bytes)`);

fs.writeFileSync(outPath2, htmlContent, 'utf8');
console.log(`Generated alias ${outPath2}`);

// Update index.html course card description
const indexPath = path.join(__dirname, 'cs-learning-platform', 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

const oldCardDescRegex = /(<!-- Course Card: Âm Nhạc 6 -->[\s\S]*?<p class="text-sm text-gray-500 dark:text-gray-300 line-clamp-3" title=")[^"]*(">\s*)([\s\S]*?)(<\/p>)/;

const newTitle = "GDPT 2018 (SGK Âm nhạc 6): Trọn bộ 8 chủ đề (Tuổi học trò, Cuộc sống tươi đẹp, Nhớ ơn thầy cô, Ước mơ hòa bình, Giai điệu quê hương, Mẹ trong trái tim em, Âm nhạc nước ngoài, Bác Hồ với thiếu nhi); Bảng lí thuyết ghi nhớ, 6 Năng lực thực hành, Kèn phím & Recorder ảo, Trạng Nguyên 25 câu.";
const newCardText = "GDPT 2018 (SGK Âm nhạc 6): 8 chủ đề cốt lõi (Tuổi học trò, Cuộc sống tươi đẹp, Nhớ ơn thầy cô, Ước mơ hòa bình, Giai điệu quê hương, Mẹ trong trái tim em, Âm nhạc nước ngoài, Bác Hồ với thiếu nhi). Bảng lí thuyết, 6 Năng lực thực hành, Kèn phím ảo & Trạng Nguyên 60:00.";

if (oldCardDescRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldCardDescRegex, `$1${newTitle}$2${newCardText}$4`);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log(`Updated index.html Course Card description for Âm Nhạc 6!`);
} else {
  console.log(`Warning: Could not match exact card pattern in index.html, checking generic match...`);
}
