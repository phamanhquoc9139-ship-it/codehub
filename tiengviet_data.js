// tiengviet_data.js - Dữ liệu chi tiết Khóa học Tiếng Việt Lớp 5 (GDPT 2018)
// Bao quát trọn vẹn 8 Chủ điểm (Tập 1 & Tập 2 • 62 bài học) + Sổ tay Ngữ pháp & Viết văn + 25 câu Trạng Nguyên Tiếng Việt 5

const topics = [
  // ==================== TẬP MỘT ====================
  {
    id: 1,
    book: 1,
    name: "Chủ điểm 1: Thế giới tuổi thơ (Bài 1 – 8)",
    desc: "Khám phá thế giới tuổi thơ trong sáng, giàu tưởng tượng; phân biệt Danh từ - Động từ - Tính từ; Đại từ; Viết bài văn kể chuyện sáng tạo; Viết báo cáo công việc.",
    lessons: [
      {
        num: 1,
        title: "Bài 1. Thanh âm của gió",
        pages: "Trang 8–12",
        target: "Đọc hiểu câu chuyện về lắng nghe tiếng gió và niềm vui tuổi thơ; phân biệt chính xác 3 từ loại: Danh từ, Động từ, Tính từ; tìm hiểu cách viết bài văn kể chuyện sáng tạo.",
        reading: {
          title: "Thanh âm của gió",
          author: "Văn Thành Lê",
          excerpt: "Gió thổi qua cánh đồng mênh mông, mang theo hương lúa thơm ngào ngạt. Bọn trẻ chúng tôi nằm ngửa trên bãi cỏ, nhắm nghiền mắt lại để lắng nghe tiếng gió. Gió vi vu qua ngọn thông già, rào rạt luồn qua lũy tre làng, rúc rích nô đùa nơi vòm lá bưởi. Mỗi ngọn gió như mang một bản nhạc riêng, khi thì sôi nổi reo vang, khi lại thì thầm như lời mẹ hát ru thuở nào...",
          mainIdea: "Vẻ đẹp của thiên nhiên đồng quê qua âm thanh của tiếng gió và thế giới tâm hồn nhạy cảm, giàu trí tưởng tượng của tuổi thơ.",
          characters: "Nhóm bạn nhỏ trên đồng cỏ quê hương.",
          message: "Hãy biết mở rộng lòng mình để lắng nghe những thanh âm kỳ diệu của cuộc sống quanh ta."
        },
        grammar: {
          title: "Phân biệt ba từ loại: Danh từ, Động từ, Tính từ",
          concept: "1. Danh từ (DT): Từ chỉ sự vật (người, con vật, đồ vật, cây cối), hiện tượng tự nhiên (mưa, gió, sấm chớp), khái niệm (đạo đức, hòa bình) hoặc thời gian (ngày, tháng, mùa xuân).\n2. Động từ (ĐT): Từ chỉ hoạt động (chạy, nhảy, đọc, viết) hoặc trạng thái (ngủ, thức, vui, buồn, phát triển) của sự vật.\n3. Tính từ (TT): Từ chỉ đặc điểm (màu sắc, hình dáng, kích thước, âm thanh) hoặc tính chất (thông minh, dũng cảm, chăm chỉ) của sự vật, hoạt động, trạng thái.",
          formula: "Danh từ (Sự vật) | Động từ (Hoạt động/Trạng thái) | Tính từ (Đặc điểm/Tính chất)",
          examples: [
            { word: "gió, đồng lúa, lũy tre, trẻ con", type: "Danh từ (DT)" },
            { word: "thổi, lắng nghe, reo vang, nô đùa", type: "Động từ (ĐT)" },
            { word: "mênh mông, ngào ngạt, già, rúc rích, sôi nổi", type: "Tính từ (TT)" }
          ]
        },
        writing: {
          title: "Tìm hiểu cách viết bài văn kể chuyện sáng tạo",
          steps: "Kể chuyện sáng tạo là dựa vào một câu chuyện đã đọc/đã nghe để kể lại nhưng có thêm những yếu tố mới mẻ do chính người viết tưởng tượng ra:\n1. Thêm chi tiết miêu tả ngoại hình, cảnh vật, âm thanh sống động.\n2. Bổ sung lời thoại sinh động giữa các nhân vật.\n3. Thay đổi ngôi kể (đóng vai một nhân vật trong truyện để kể lại theo ngôi thứ nhất: 'tôi/em').\n4. Sáng tạo thêm phần kết thúc mới bất ngờ, ý nghĩa.",
          outline: "- Mở bài: Giới thiệu câu chuyện định kể và nhân vật sẽ đồng hành.\n- Thân bài: Kể lại diễn biến câu chuyện theo trình tự thời gian, lồng ghép chi tiết sáng tạo (lời thoại, suy nghĩ nội tâm, hành động độc đáo).\n- Kết bài: Nêu cảm nghĩ, bài học sâu sắc rút ra từ câu chuyện."
        },
        speakingListening: "Kể lại một trải nghiệm tuổi thơ đáng nhớ trên cánh đồng, dòng sông hoặc sân trường cùng bè bạn; lắng nghe và góp ý cho bạn bè.",
        readingExtension: "Tìm đọc các tác phẩm viết về thế giới tuổi thơ (ví dụ: 'Cho tôi xin một vé đi tuổi thơ' - Nguyễn Nhật Ánh; 'Vừa nhắm mắt vừa mở cửa sổ' - Nguyễn Ngọc Thuần) và ghi vào Phiếu đọc sách.",
        quiz: {
          q: "Trong câu: 'Gió vi vu qua ngọn thông già, rào rạt luồn qua lũy tre làng', từ nào là tính từ?",
          options: ["gió, ngọn thông", "luồn, thổi", "vi vu, già, rào rạt", "lũy tre, làng"],
          ans: 2,
          exp: "'vi vu', 'già', 'rào rạt' là các tính từ chỉ đặc điểm âm thanh và tính chất của sự vật."
        }
      },
      {
        num: 2,
        title: "Bài 2. Đại từ và Bài văn kể chuyện sáng tạo",
        pages: "Trang 13–19",
        target: "Nắm vững bản chất của đại từ (đại từ xưng hô, đại từ thay thế, đại từ nghi vấn); thực hành đóng vai nhân vật để viết bài văn kể chuyện sáng tạo.",
        reading: {
          title: "Cánh đồng tuổi thơ",
          author: "Nguyễn Quang Thiều",
          excerpt: "Đêm mùa gặt, cánh đồng làng tôi ngập tràn ánh trăng vàng vằng vặc. Tôi và thằng Thơm rủ nhau chạy đuổi theo những chú dế mèn béo múp. Chúng tôi nằm áp tai xuống đất thơm mùi rơm rạ mới, thấy lòng mình lâng lâng như đang bay lượn giữa ngàn vì sao.",
          mainIdea: "Kỷ niệm êm đềm, gắn bó máu thịt với đồng quê và tình bạn tuổi thơ chân chất.",
          characters: "Tôi và bạn Thơm.",
          message: "Tình yêu quê hương bắt đầu từ những kỷ niệm bình dị, thân thương thuở thiếu thời."
        },
        grammar: {
          title: "Đại từ (Đại từ xưng hô, thay thế, để hỏi)",
          concept: "Đại từ là từ dùng để xưng hô hay để thay thế danh từ, động từ, tính từ (hoặc cụm từ) trong câu cho khỏi lặp lại các từ ấy.\n- Đại từ xưng hô: tôi, chúng tôi, mày, chúng mày, nó, họ, chúng nó; hoặc từ chỉ quan hệ gia đình: anh, chị, em, chú, bác.\n- Đại từ thay thế: thế, vậy, đó, đấy (thay thế cho hoạt động, tính chất đã nêu).\n- Đại từ để hỏi: ai, gì, nào, bao nhiêu, mấy, sao, thế nào.",
          formula: "Đại từ = Từ xưng hô / Từ thay thế chống lặp / Từ để hỏi",
          examples: [
            { word: "chúng tôi, tôi, nó", type: "Đại từ xưng hô" },
            { word: "thế, vậy (Tôi cũng nghĩ thế)", type: "Đại từ thay thế" },
            { word: "ai, gì, bao nhiêu", type: "Đại từ nghi vấn" }
          ]
        },
        writing: {
          title: "Viết bài văn kể chuyện sáng tạo (Đổi ngôi kể sang ngôi thứ nhất)",
          steps: "Thực hành chuyển đổi câu chuyện cổ tích (như Cây khế, Tấm Cám, Thạch Sanh) từ ngôi thứ ba sang ngôi thứ nhất (đóng vai một nhân vật): sử dụng đại từ 'tôi', bộc lộ cảm xúc và góc nhìn chân thực của nhân vật đó.",
          outline: "- Mở bài: Hóa thân vào nhân vật (Tôi là người em trong truyện Cây khế...).\n- Thân bài: Kể lại biến cố theo mạch cảm xúc và góc nhìn của nhân vật 'tôi'.\n- Kết bài: Lời nhắn nhủ, bài học đạo đức nhân quả."
        },
        speakingListening: "Đóng vai nhân vật trong truyện cổ tích để giới thiệu về bản thân và giãi bày tâm sự trước lớp.",
        readingExtension: "Đọc truyện cổ tích Việt Nam hoặc truyện đồng thoại Tô Hoài, ghi chép tên nhân vật và đại từ xưng hô độc đáo.",
        quiz: {
          q: "Trong câu: 'Bố tôi bảo: Ngày mai cả nhà đi thăm bà ngoại. Nghe vậy, tôi reo lên vui sướng.', từ 'vậy' là đại từ thuộc nhóm nào?",
          options: [
            "Đại từ thay thế cho việc ngày mai đi thăm bà ngoại",
            "Đại từ xưng hô chỉ người nghe",
            "Đại từ nghi vấn để hỏi nguyên nhân",
            "Đại từ chỉ địa điểm"
          ],
          ans: 0,
          exp: "'vậy' ở đây thay thế cho toàn bộ lời thông báo của bố ở câu trước ('Ngày mai cả nhà đi thăm bà ngoại') để tránh lặp từ."
        }
      },
      {
        num: 3,
        title: "Bài 3. Viết báo cáo công việc và Rèn luyện từ loại",
        pages: "Trang 20–26",
        target: "Hiểu mục đích, quy cách của văn bản báo cáo công việc; rèn luyện khả năng xác định danh từ, động từ, tính từ và đại từ trong ngữ cảnh văn bản thực tế.",
        reading: {
          title: "Báo cáo công tác Sao Nhi đồng tháng 9",
          author: "Chi đội trưởng Trần Minh",
          excerpt: "Kính gửi Ban Chỉ huy Liên đội trường Tiểu học Kim Đồng. Tình hình học tập: 100% đội viên hoàn thành tốt nhiệm vụ, 15 bạn đạt điểm 10 trong tuần lễ thi đua. Hoạt động phong trào: tham gia chăm sóc bồn hoa măng non, quyên góp được 120 cuốn sách thiếu nhi ủng hộ thư viện...",
          mainIdea: "Báo cáo tổng kết trung thực, rõ ràng kết quả học tập và phong trào của phân đội trong tháng.",
          characters: "Chi đội trưởng và các đội viên thiếu niên.",
          message: "Tính trung thực, tinh thần trách nhiệm và tác phong khoa học trong công việc tập thể."
        },
        grammar: {
          title: "Quy tắc xác định từ loại trong ngữ cảnh biến đổi",
          concept: "Một từ có thể thay đổi từ loại tùy vào vị trí và ngữ cảnh trong câu:\n- Ví dụ: 'suy nghĩ' trong 'Em đang suy nghĩ' là Động từ; nhưng trong 'Những suy nghĩ của em' có từ chỉ số lượng 'những' đứng trước nên trở thành Danh từ.\n- Khi kết hợp với các từ: những, các, một, mỗi, từng... ở phía trước thì từ đó thường là Danh từ.",
          formula: "những/các/một + Từ &rarr; Danh từ hóa",
          examples: [
            { word: "ước mơ (ĐT: Tôi ước mơ; DT: Những ước mơ đẹp)", type: "Chuyển loại từ vựng" }
          ]
        },
        writing: {
          title: "Cấu trúc chuẩn của một Báo cáo công việc (Văn bản nhật dụng)",
          steps: "Báo cáo công việc phải trình bày theo đúng bố cục 3 phần chuẩn tắc:\n1. Tiêu ngữ, địa điểm, thời gian, tiêu đề báo cáo.\n2. Nơi nhận báo cáo (Kính gửi...).\n3. Nội dung báo cáo: Nêu rõ mục đích, thời gian thực hiện, kết quả đạt được (kèm số liệu dẫn chứng cụ thể), ưu điểm, tồn tại và đề xuất.\n4. Người viết báo cáo ký và ghi rõ họ tên.",
          outline: "- Quốc hiệu / Tên tổ chức: Đội TNTP Hồ Chí Minh - Liên đội Tiểu học...\n- Tên văn bản: BÁO CÁO KẾT QUẢ THỰC HIỆN PHONG TRÀO...\n- Nội dung: 1. Học tập; 2. Nề nếp; 3. Lao động, vệ sinh.\n- Chữ ký người đại diện."
        },
        speakingListening: "Trình bày báo cáo trước cuộc họp tổ hoặc đại hội chi đội; lắng nghe và tiếp thu câu hỏi của thầy cô, bạn bè.",
        readingExtension: "Tìm đọc các bài báo trên báo Thiếu niên Tiền phong, Khăn quàng đỏ để học cách viết báo cáo, tin vắn.",
        quiz: {
          q: "Phần nội dung chính của một bản báo cáo công việc bắt buộc phải có yếu tố nào sau đây?",
          options: [
            "Số liệu và kết quả cụ thể công việc đã làm",
            "Lời kể chuyện cổ tích hư cấu",
            "Đoạn thơ cảm thán về thiên nhiên",
            "Những câu hỏi đố vui dí dỏm"
          ],
          ans: 0,
          exp: "Báo cáo công việc đòi hỏi tính trung thực, chính xác, nêu rõ các kết quả đã làm được kèm số liệu minh chứng cụ thể."
        }
      }
    ]
  },
  {
    id: 2,
    book: 1,
    name: "Chủ điểm 2: Thiên nhiên kì thú (Bài 9 – 16)",
    desc: "Khám phá vẻ đẹp kỳ vĩ của núi rừng, biển cả và thế giới tự nhiên; Bản chất của Từ đa nghĩa; Luyện tập đại từ; Viết bài văn tả phong cảnh; Giới thiệu danh lam thắng cảnh.",
    lessons: [
      {
        num: 9,
        title: "Bài 9. Kì diệu rừng xanh và Từ đa nghĩa",
        pages: "Trang 40–46",
        target: "Cảm nhận vẻ đẹp huyền ảo, kỳ thú của rừng nguyên sinh; phân biệt Từ đồng âm và Từ đa nghĩa; nắm vững kỹ thuật quan sát trong văn tả phong cảnh.",
        reading: {
          title: "Kì diệu rừng xanh",
          author: "Mai Văn Tạo",
          excerpt: "Nắng trưa đã rọi xuống đỉnh đầu mà rừng sâu vẫn ẩm lạnh, ánh nắng dội vào lá chuối rực rỡ như những ngọn đuốc hoa. Những cụm nấm rừng như một thành phố tí hon muôn màu muôn vẻ mọc chen chúc dưới bóng cổ thụ. Vượn bạc má đu đưa thoăn thoắt trên cành cao, đàn khỉ chuyền cành ríu rít như đang biểu diễn xiếc...",
          mainIdea: "Bức tranh thiên nhiên rừng già nhiệt đới tràn đầy sức sống nguyên sơ, kỳ ảo và thơ mộng.",
          characters: "Tác giả khám phá khu rừng và muông thú.",
          message: "Tình yêu thiên nhiên hoang dã và ý thức gìn giữ, bảo vệ lá phổi xanh của Trái Đất."
        },
        grammar: {
          title: "Bản chất của Từ đa nghĩa (Phân biệt với Từ đồng âm)",
          concept: "1. Từ đa nghĩa là từ có một nghĩa gốc và một hay một số nghĩa chuyển. Các nghĩa của từ đa nghĩa luôn có mối liên hệ mật thiết với nhau (về hình dáng, vị trí, tính chất, chức năng).\n- Ví dụ: 'Mắt' (mắt người - nghĩa gốc) &rarr; 'mắt na', 'mắt mía', 'mắt lưới' (nghĩa chuyển: đều chỉ hình dáng tròn lồi ra giống mắt người).\n2. Phân biệt với Từ đồng âm: Từ đồng âm chỉ giống nhau về mặt âm thanh (cách đọc, cách viết) nhưng hoàn toàn khác nhau về nghĩa, không có mối liên hệ nào (ví dụ: 'đường kính' ăn với 'đường đi').",
          formula: "Nghĩa gốc (Gốc rễ ban đầu) &rarr; Nghĩa chuyển (Liên hệ tương đồng về hình dáng, công dụng)",
          examples: [
            { word: "Chân: Chân người (gốc) &rarr; Chân bàn, chân núi, chân cầu (chuyển: phần dưới cùng nâng đỡ)", type: "Từ đa nghĩa" },
            { word: "Bàn: Bàn học (đồ vật) vs Bàn bạc (hoạt động thảo luận)", type: "Từ đồng âm" }
          ]
        },
        writing: {
          title: "Quan sát và Lập dàn ý bài văn tả phong cảnh",
          steps: "Muốn tả cảnh sinh động, cần:\n1. Quan sát bằng nhiều giác quan (thị giác, thính giác, khứu giác, xúc giác).\n2. Miêu tả theo trình tự hợp lý: Trình tự thời gian (sáng - trưa - chiều - tối; xuân - hạ - thu - đông) hoặc Trình tự không gian (từ xa đến gần, từ cao xuống thấp, từ bao quát đến cụ thể).\n3. Lựa chọn những nét đặc trưng tiêu biểu nhất của cảnh vật để làm nổi bật cái hồn của cảnh sắc.",
          outline: "- Mở bài: Giới thiệu bao quát cảnh đẹp (vịnh Hạ Long, đồi chè Sa Pa, bãi biển Nha Trang...).\n- Thân bài: Tả từng phần của cảnh vật theo trình tự thời gian hoặc không gian.\n- Kết bài: Nêu cảm nghĩ, niềm tự hào và tình yêu với cảnh sắc quê hương."
        },
        speakingListening: "Đóng vai hướng dẫn viên du lịch tí hon giới thiệu một danh lam thắng cảnh tiêu biểu của đất nước Việt Nam.",
        readingExtension: "Tìm đọc các tác phẩm ký, tản văn miêu tả thiên nhiên của Nguyễn Tuân, Tô Hoài, Vũ Bằng.",
        quiz: {
          q: "Trong các câu sau, câu nào từ 'mũi' được dùng với nghĩa chuyển?",
          options: [
            "Con thuyền rẽ sóng hướng mũi về phía đảo xa.",
            "Bé Nam có chiếc mũi dọc dừa rất thanh tú.",
            "Mũi bạn ấy bị nghẹt vì thời tiết thay đổi.",
            "Chú hề gắn một quả bóng đỏ tròn xoe lên mũi."
          ],
          ans: 0,
          exp: "'Mũi thuyền' dùng với nghĩa chuyển (bộ phận nhọn nhô ra phía trước thuyền, tương đồng hình dáng với mũi người)."
        }
      }
    ]
  },
  {
    id: 3,
    book: 1,
    name: "Chủ điểm 3: Trên con đường học tập (Bài 17 – 24)",
    desc: "Ý chí rèn luyện tri thức, tấm gương vượt khó học giỏi; Kỹ năng tra cứu từ điển; Viết đoạn văn giới thiệu nhân vật trong sách; Thể hiện tình cảm, cảm xúc về câu chuyện đã đọc.",
    lessons: [
      {
        num: 17,
        title: "Bài 17. Người thầy đầu tiên và Kỹ năng sử dụng từ điển",
        pages: "Trang 72–78",
        target: "Cảm nhận tấm lòng cao cả của người thầy gieo mầm tri thức; nắm vững cấu trúc và cách tra cứu từ điển tiếng Việt; viết đoạn văn giới thiệu nhân vật truyền cảm hứng.",
        reading: {
          title: "Người thầy đầu tiên (Trích)",
          author: "Trin-ghi-dơ Ai-tơ-ma-tốp",
          excerpt: "Thầy Đuy-sen bế từng em nhỏ qua con suối buốt giá mùa đông để các em được đến lớp học chữ. Thầy lấy đá xếp thành những lối đi khô ráo, thầy nhặt củi khô sưởi ấm cho học trò nghèo nơi bản làng heo hút. Ánh mắt thầy rạng ngời niềm tin vào tương lai của những đứa trẻ vùng cao...",
          mainIdea: "Tấm lòng nhân hậu, sự hy sinh thầm lặng và đức hy sinh vô bờ bến của người thầy giáo vì tương lai học sinh.",
          characters: "Thầy Đuy-sen và cô bé An-tư-nai.",
          message: "Lòng biết ơn sâu sắc đối với những người thầy, người cô đã tận tụy nâng bước em vào đời."
        },
        grammar: {
          title: "Kỹ năng tra cứu từ điển tiếng Việt và giải nghĩa từ",
          concept: "Từ điển giải nghĩa từ theo trật tự chữ cái A-B-C. Khi tra từ điển:\n1. Xác định chữ cái đầu tiên của từ (thanh mẫu/âm đầu).\n2. Tìm đến mục từ chính, đọc kỹ từ loại (danh từ, động từ, tính từ...), nghĩa gốc và các nghĩa phái sinh kèm ví dụ.\n3. Giải nghĩa từ bằng 2 cách chính: Đưa ra khái niệm ngắn gọn hoặc Dùng từ đồng nghĩa/trái nghĩa để giải thích.",
          formula: "Tra theo vần A-B-C &rarr; Nhận diện từ loại &rarr; Đọc nghĩa gốc & ví dụ",
          examples: [
            { word: "Cần cù (TT): Chăm chỉ, chịu khó làm việc một cách đều đặn, bền bỉ.", type: "Giải thích khái niệm" },
            { word: "Bình yên: Trạng thái yên ổn, không có biến động hay nguy hiểm.", type: "Giải nghĩa từ điển" }
          ]
        },
        writing: {
          title: "Viết đoạn văn giới thiệu nhân vật trong cuốn sách em đã đọc",
          steps: "Đoạn văn giới thiệu nhân vật gồm 3 phần:\n1. Mở đoạn: Giới thiệu tên nhân vật, tên cuốn sách và tác giả.\n2. Thân đoạn: Miêu tả ngoại hình đặc trưng, hành động, phẩm chất nổi bật của nhân vật khiến em khâm phục.\n3. Kết đoạn: Nêu cảm xúc, sự gắn bó và bài học em học tập được từ nhân vật đó.",
          outline: "- Mở đoạn: Giới thiệu thầy Đuy-sen trong truyện 'Người thầy đầu tiên'.\n- Thân đoạn: Tấm lòng yêu thương học trò, hành động bế học trò qua suối băng.\n- Kết đoạn: Thể hiện lòng kính trọng và biết ơn nghề giáo."
        },
        speakingListening: "Thảo luận nhóm về đức tính kiên trì và tự học: 'Học thầy không tày học bạn', 'Có công mài sắt, có ngày nên kim'.",
        readingExtension: "Tìm đọc các cuốn sách viết về danh nhân học tập: 'Búp sen xanh' (Sơn Tùng), 'Tuổi thơ dữ dội' (Phùng Quán).",
        quiz: {
          q: "Để tra nghĩa của từ 'Kiên định' trong từ điển tiếng Việt, bước đầu tiên cần làm là gì?",
          options: [
            "Tìm phần chữ cái 'K' theo thứ tự bảng chữ cái",
            "Tìm từ cuối cuốn từ điển",
            "Tìm theo số nét viết của chữ",
            "Đoán nghĩa trước rồi mới mở sách"
          ],
          ans: 0,
          exp: "Từ điển tiếng Việt sắp xếp theo thứ tự bảng chữ cái ngữ âm A-B-C, do đó từ 'Kiên định' bắt đầu bằng chữ cái 'K'."
        }
      }
    ]
  },
  {
    id: 4,
    book: 1,
    name: "Chủ điểm 4: Nghệ thuật muôn màu (Bài 25 – 32)",
    desc: "Vẻ đẹp của âm nhạc, hội họa, điện ảnh và văn chương; Biện pháp tu từ Điệp từ, điệp ngữ; Kết từ (từ nối); Viết đoạn văn thể hiện tình cảm, cảm xúc về bài thơ; Giới thiệu nhân vật hoạt hình.",
    lessons: [
      {
        num: 25,
        title: "Bài 25. Tiếng đàn Ba-la-lai-ca trên sông Đà và Điệp từ, điệp ngữ",
        pages: "Trang 105–111",
        target: "Cảm nhận vẻ đẹp thơ mộng, hòa hợp giữa con người và thiên nhiên trên công trình thủy điện; nhận biết và phân tích tác dụng của biện pháp Điệp từ, điệp ngữ; Kết từ.",
        reading: {
          title: "Tiếng đàn Ba-la-lai-ca trên sông Đà",
          author: "Quang Huy",
          excerpt: "Trên sông Đà / Một đêm trăng chơi vơi / Đêm nay sông Đà ngủ say / Chỉ có tiếng đàn Ba-la-lai-ca / Ngân nga dưới ánh trăng ngần... / Ngày mai / Chiếc đập lớn nối liền hai bờ vách đá / Biển sẽ ngỡ ngàng nằm giữa lòng cao nguyên / Sông Đà chia ánh sáng đi muôn ngả / Từ công trình vĩ đại nghìn năm...",
          mainIdea: "Bức tranh đêm trăng sông Đà thơ mộng, kỳ vĩ và niềm tin tương lai tươi sáng khi dòng điện thắp sáng mọi miền Tổ quốc.",
          characters: "Cô gái Nga chơi đàn và dòng sông Đà đang xây dựng công trình thủy điện.",
          message: "Tình hữu nghị quốc tế và sự kỳ diệu của lao động dựng xây đất nước."
        },
        grammar: {
          title: "Biện pháp tu từ Điệp từ, điệp ngữ & Kết từ (Từ nối)",
          concept: "1. Điệp từ, điệp ngữ: Là biện pháp lặp lại một từ hoặc một cụm từ nhiều lần trong câu thơ, câu văn nhằm nhấn mạnh cảm xúc, ý nghĩa hoặc tạo nhịp điệu gợi cảm, sinh động.\n- Ví dụ: 'Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công'.\n2. Kết từ (Quan hệ từ / Từ nối): Là từ dùng để nối các từ ngữ hoặc các câu nhằm thể hiện mối quan hệ cú pháp giữa chúng: và, với, hay, hoặc, nhưng, mà, thì, của, ở, tại, vì, nếu, tuy...",
          formula: "Điệp từ &rarr; Nhấn mạnh cảm xúc & Nhịp điệu | Kết từ &rarr; Nối kết ngữ nghĩa",
          examples: [
            { word: "Điệp từ: Trông trời, trông đất, trông mây / Trông mưa, trông gió, trông ngày, trông đêm", type: "Điệp từ nhấn mạnh nỗi mong mỏi" },
            { word: "và, nhưng, vì, nếu, tuy... nhưng...", type: "Kết từ biểu thị quan hệ" }
          ]
        },
        writing: {
          title: "Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ",
          steps: "Các bước viết đoạn cảm thụ thơ:\n1. Mở đoạn: Giới thiệu nhan đề bài thơ, tác giả và ấn tượng bao quát nhất.\n2. Thân đoạn: Trích dẫn những câu thơ hoặc hình ảnh đẹp nhất; chỉ ra từ ngữ đắt giá, biện pháp tu từ (so sánh, nhân hóa, điệp từ); bộc lộ cảm xúc rung động của bản thân.\n3. Kết đoạn: Khẳng định giá trị nghệ thuật của bài thơ và thông điệp gửi gắm.",
          outline: "- Mở đoạn: Giới thiệu bài thơ 'Tiếng đàn Ba-la-lai-ca trên sông Đà'.\n- Thân đoạn: Cảm nhận tiếng đàn ngân nga giữa đêm trăng tĩnh lặng.\n- Kết đoạn: Cảm phục những người thợ xây dựng công trình thủy điện."
        },
        speakingListening: "Giới thiệu một bài hát, bản nhạc hoặc bộ phim hoạt hình em yêu thích; trình bày cảm xúc khi thưởng thức tác phẩm nghệ thuật đó.",
        readingExtension: "Tìm đọc các tập thơ thiếu nhi đoạt giải của Trần Đăng Khoa, Định Hải, Xuân Quỳnh.",
        quiz: {
          q: "Tác dụng chính của biện pháp điệp từ, điệp ngữ trong văn học là gì?",
          options: [
            "Nhấn mạnh ý nghĩa, cảm xúc và tạo nhịp điệu âm vang cho câu văn, câu thơ",
            "Làm cho câu văn trở nên dài dòng và khó hiểu hơn",
            "Chỉ dùng để đếm số lượng từ ngữ trong câu",
            "Thay thế hoàn toàn cho danh từ và tính từ"
          ],
          ans: 0,
          exp: "Điệp từ, điệp ngữ được sử dụng có chủ đích nhằm nhấn mạnh tâm trạng, cảm xúc, khẳng định ý chí và tạo nhạc tính dạt dào cho lời thơ, ý văn."
        }
      }
    ]
  },

  // ==================== TẬP HAI ====================
  {
    id: 5,
    book: 2,
    name: "Chủ điểm 5: Vẻ đẹp cuộc sống (Bài 1 – 8)",
    desc: "Tôn vinh vẻ đẹp lao động, phẩm chất con người; Phân biệt Câu đơn và Câu ghép; Các cách nối các vế câu ghép; Viết bài văn tả người hoàn chỉnh.",
    lessons: [
      {
        num: 33,
        title: "Bài 33. Người gác rừng tí hon và Câu ghép",
        pages: "Tập 2, Trang 8–15",
        target: "Cảm phục sự mưu trí, dũng cảm của cậu bé bảo vệ rừng; phân biệt rạch ròi Câu đơn và Câu ghép; nắm vững các cách nối vế câu ghép; viết bài văn tả người giàu cảm xúc.",
        reading: {
          title: "Người gác rừng tí hon",
          author: "Nguyễn Thị Cẩm Châu",
          excerpt: "Theo dấu chân bọn lâm tặc lén lút vào rừng sâu, cậu bé phát hiện hơn chục cây gỗ chò vĩ đại vừa bị cưa hạ đổ ngổn ngang. Cậu nhanh trí đạp xe ra trạm gác biên phòng gần nhất, báo cho các chú bộ đội đón lõng xe chở gỗ lậu ở khúc quanh ven suối. Nhờ sự gan dạ của cậu, cả cánh rừng gỗ quý đã được giải cứu trong gang tấc...",
          mainIdea: "Ca ngợi tinh thần trách nhiệm, lòng dũng cảm và sự thông minh của chú bé con người gác rừng bảo vệ môi trường.",
          characters: "Cậu bé gác rừng tí hon, bọn lâm tặc và các chú công an biên phòng.",
          message: "Tuổi nhỏ làm việc nhỏ, mỗi chúng ta đều có trách nhiệm gìn giữ tài nguyên thiên nhiên của quê hương."
        },
        grammar: {
          title: "Câu đơn, Câu ghép và Các cách nối vế câu ghép",
          concept: "1. Câu đơn: Là câu do một cụm Chủ ngữ - Vị ngữ (C-V) nòng cốt tạo thành.\n- Ví dụ: 'Mặt trời (C) // tỏa ánh nắng ấm áp (V).'\n2. Câu ghép: Là câu do nhiều vế câu ghép lại, mỗi vế câu thường có cấu tạo như một câu đơn (đầy đủ C-V) và biểu thị một ý có quan hệ chặt chẽ với nhau.\n3. Các cách nối vế câu ghép:\n- Nối trực tiếp: Dùng dấu phẩy (,), dấu chấm phẩy (;), dấu hai chấm (:).\n- Nối bằng từ nối (Kết từ): và, rồi, nhưng, mà, thì...\n- Nối bằng cặp từ hô ứng / cặp quan hệ từ: Vì... nên...; Nếu... thì...; Tuy... nhưng...; Càng... càng...; Vừa... đã...",
          formula: "Câu đơn = 1 cụm C-V | Câu ghép = Vế 1 (C1-V1) + [Từ nối / Dấu câu] + Vế 2 (C2-V2)",
          examples: [
            { word: "Trời mưa to (Vế 1) và sấm sét đùng đoàng (Vế 2).", type: "Nối bằng kết từ 'và'" },
            { word: "Tuy trời mưa to (Vế 1) nhưng chúng em vẫn đi học đúng giờ (Vế 2).", type: "Nối bằng cặp từ 'Tuy... nhưng...'" },
            { word: "Mặt trời mọc (Vế 1), chim chóc hót líu lo (Vế 2).", type: "Nối trực tiếp bằng dấu phẩy" }
          ]
        },
        writing: {
          title: "Cấu tạo và Kỹ năng viết bài văn Tả người",
          steps: "Bài văn tả người gồm 3 phần:\n1. Mở bài: Giới thiệu người định tả (ông bà, bố mẹ, thầy cô, người gác rừng, bác nông dân...).\n2. Thân bài:\n- Tả ngoại hình: Tầm vóc, khuôn mặt, mái tóc, nụ cười, đôi bàn tay lao động, trang phục quen thuộc.\n- Tả tính tình và hoạt động: Lời nói, cử chỉ, tác phong khi làm việc, sự tận tụy, quan tâm đến mọi người xung quanh.\n3. Kết bài: Nêu tình cảm gắn bó, sự kính trọng, yêu thương và ước muốn noi gương.",
          outline: "- Mở bài: Giới thiệu mẹ kính yêu.\n- Thân bài: Tả dáng người gầy guộc, đôi bàn tay chai sần vì vất vả, giọng nói dịu dàng âu yếm; tả cảnh mẹ nấu cơm tối ấm cúng.\n- Kết bài: Lòng biết ơn vô bờ và lời hứa luôn chăm ngoan để mẹ vui lòng."
        },
        speakingListening: "Kể về một người lao động tốt bụng, cần mẫn quanh em (bác lao công, chú thợ điện, cô bảo vệ trường học).",
        readingExtension: "Tìm đọc các tác phẩm truyện ngắn viết về tình mẫu tử, tình thầy trò giàu tính nhân văn.",
        quiz: {
          q: "Trong các câu sau, câu nào là câu ghép được nối bằng cặp quan hệ từ?",
          options: [
            "Vì thời tiết thuận lợi nên vụ mùa năm nay bội thu.",
            "Mùa thu đến, hoa cúc vàng nở rộ khắp vườn.",
            "Cậu bé thông minh và gan dạ ấy đã cứu cả khu rừng.",
            "Những bông hoa hồng thơm ngát dưới ánh nắng ban mai."
          ],
          ans: 0,
          exp: "'Vì thời tiết thuận lợi (C1-V1) nên vụ mùa năm nay bội thu (C2-V2)' là câu ghép có hai vế đầy đủ C-V nối với nhau bằng cặp quan hệ từ chỉ nguyên nhân - kết quả: 'Vì... nên...'."
        }
      }
    ]
  },
  {
    id: 6,
    book: 2,
    name: "Chủ điểm 6: Hương sắc trăm miền (Bài 9 – 16)",
    desc: "Bản sắc văn hóa các vùng miền, lễ hội dân gian; Biện pháp liên kết câu (Lặp từ ngữ, Thay thế từ ngữ, Dùng từ nối); Viết đoạn văn thể hiện tình cảm về sự việc; Viết chương trình hoạt động.",
    lessons: [
      {
        num: 41,
        title: "Bài 41. Hội thổi cơm thi ở Đồng Vân và Liên kết câu",
        pages: "Tập 2, Trang 42–49",
        target: "Cảm nhận nét đẹp văn hóa truyền thống của lễ hội dân gian vùng đồng bằng Bắc Bộ; làm chủ các phép liên kết câu trong đoạn văn; rèn kỹ năng viết chương trình hoạt động tập thể.",
        reading: {
          title: "Hội thổi cơm thi ở Đồng Vân",
          author: "Bùi Ngọc Sơn",
          excerpt: "Hội thổi cơm thi ở làng Đồng Vân (xã Đồng Tháp, huyện Đan Phượng) bắt đầu bằng hiệu lệnh trống giòn giã. Các chàng trai thoăn thoắt leo lên cây chuối bôi mỡ lấy que diêm, rồi nhóm lửa trong gió lộng. Từng nồi cơm niêu nhỏ xíu treo lủng lẳng dưới cần tre, người dự thi vừa đi vòng quanh vừa đảo đũa nhanh thoăn thoắt. Nồi cơm nào chín dẻo, thơm phức, trắng ngần sẽ giành giải Trạng nguyên...",
          mainIdea: "Tái hiện không khí sôi nổi, tài hoa, khéo léo của người lao động trong lễ hội dân gian độc đáo của dân tộc.",
          characters: "Các đội thi nấu cơm tài ba và dân làng cổ vũ rộn ràng.",
          message: "Lòng tự hào và ý thức giữ gìn, phát huy các giá trị văn hóa cổ truyền của cha ông."
        },
        grammar: {
          title: "Các phép liên kết câu trong đoạn văn (Phép lặp, Phép thế, Phép nối)",
          concept: "Các câu trong đoạn văn phải liên kết chặt chẽ với nhau về nội dung và hình thức:\n1. Phép lặp từ ngữ: Lặp lại ở câu sau những từ ngữ đã xuất hiện ở câu trước để duy trì chủ đề.\n- Ví dụ: 'Đền Thượng nằm chót vót trên đỉnh núi. Đền được xây dựng nguy nga...'\n2. Phép thay thế từ ngữ (Phép thế): Dùng đại từ hoặc từ đồng nghĩa thay thế cho từ ngữ đã dùng ở câu trước để tránh lặp từ.\n- Ví dụ: 'Nguyễn Du là đại thi hào dân tộc. Tác giả Truyện Kiều đã để lại kho tàng văn học đồ sộ...'\n3. Phép nối: Dùng kết từ hoặc các từ nối (nhưng, tuy nhiên, bởi vậy, hơn nữa, tóm lại) ở đầu câu để liên kết với câu trước.",
          formula: "Liên kết câu = Phép lặp (Lặp từ) + Phép thế (Đại từ/Đồng nghĩa) + Phép nối (Từ nối)",
          examples: [
            { word: "Lễ hội thổi cơm thi rất vui. Lễ hội này thu hút đông đảo du khách.", type: "Phép lặp từ ngữ (Lễ hội)" },
            { word: "Hoa sen tỏa hương thơm ngát. Loài hoa thanh khiết ấy mọc giữa bùn lầy.", type: "Phép thay thế từ ngữ (Loài hoa thanh khiết ấy)" }
          ]
        },
        writing: {
          title: "Kỹ năng lập Chương trình hoạt động tập thể",
          steps: "Chương trình hoạt động là văn bản kế hoạch tổ chức một sự kiện nhằm phân công cụ thể, khoa học:\n1. Mục đích: Nêu rõ hoạt động nhằm mục đích gì (gây quỹ, thi đua, rèn luyện).\n2. Phân công chuẩn bị: Ai chuẩn bị dụng cụ, trang phục, tiết mục văn nghệ, địa điểm.\n3. Tiến trình thực hiện: Các mốc giờ cụ thể và nội dung công việc tương ứng.\n4. Dự kiến kinh phí và tổng kết đánh giá.",
          outline: "- Tiêu đề: CHƯƠNG TRÌNH HỘI THI KỂ CHUYỆN LỊCH SỬ\n- I. Mục đích\n- II. Thời gian & Địa điểm\n- III. Phân công chuẩn bị\n- IV. Tiến trình tổ chức"
        },
        speakingListening: "Đóng vai người dẫn chương trình (MC) điều hành một hoạt động tập thể trong lớp hoặc lễ kỷ niệm ngày 20/11.",
        readingExtension: "Tìm hiểu các lễ hội truyền thống: Lễ hội Đền Hùng, Hội Gióng, Hội đua ghe Ngo, Lễ hội Cồng chiêng Tây Nguyên.",
        quiz: {
          q: "Trong hai câu: 'Bác Hồ vô vàn kính yêu của chúng ta. Người đã cống hiến trọn đời mình cho độc lập dân tộc.', phép liên kết nào đã được sử dụng?",
          options: [
            "Phép thay thế từ ngữ (dùng đại từ 'Người' thay thế cho 'Bác Hồ')",
            "Phép lặp từ ngữ",
            "Phép đối lập hoàn toàn",
            "Không sử dụng phép liên kết nào"
          ],
          ans: 0,
          exp: "Câu thứ hai dùng đại từ 'Người' để thay thế cho cụm từ 'Bác Hồ' ở câu thứ nhất, thể hiện phép thế đại từ tránh lặp và bày tỏ lòng tôn kính."
        }
      }
    ]
  },
  {
    id: 7,
    book: 2,
    name: "Chủ điểm 7: Tiếp bước cha ông (Bài 17 – 24)",
    desc: "Truyền thống yêu nước chống giặc ngoại xâm; Ôn tập sâu sắc Từ đồng nghĩa, Từ đa nghĩa, Đại từ, Kết từ; Viết đoạn văn nêu ý kiến tán thành hiện tượng đời sống; Viết bài văn tả cảnh lịch sử.",
    lessons: [
      {
        num: 49,
        title: "Bài 49. Phong cảnh đền Hùng và Từ đồng nghĩa",
        pages: "Tập 2, Trang 75–82",
        target: "Bồi đắp lòng tự hào về cội nguồn non sông Đất Tổ; làm chủ hệ thống Từ đồng nghĩa hoàn toàn và không hoàn toàn; viết đoạn văn nghị luận bày tỏ ý kiến tán thành việc làm tốt đẹp.",
        reading: {
          title: "Phong cảnh đền Hùng",
          author: "Đoàn Minh Tuấn",
          excerpt: "Đền Thượng nằm chót vót trên đỉnh núi Nghĩa Lĩnh. Trước đền, những khóm hải đường đâm bông rực đỏ, cánh bướm dập dờn bay lượn như những cánh hoa biết bay. Đứng ở đây, nhìn ra xa, phong cảnh thật là ngoạn mục: dãy Tam Đảo như bức trường thành xanh sừng sững, núi Ba Vì vòi vọi ngút ngàn, ngã ba Hạc như dải lụa mềm vắt qua đồng lúa phì nhiêu...",
          mainIdea: "Vẻ đẹp uy nghiêm, tráng lệ của quần thể Đền Hùng và phong cảnh hùng vĩ của Đất Tổ thiêng liêng.",
          characters: "Đoàn người hành hương về nguồn tưởng nhớ các Vua Hùng.",
          message: "'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba' - Đạo lý uống nước nhớ nguồn của dân tộc."
        },
        grammar: {
          title: "Hệ thống Từ đồng nghĩa (Đồng nghĩa hoàn toàn & không hoàn toàn)",
          concept: "1. Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau.\n- Từ đồng nghĩa hoàn toàn: Có thể thay thế cho nhau trong lời nói mà không làm thay đổi sắc thái ý nghĩa (ví dụ: mẹ - má - u; hổ - cọp - hùm; máy bay - tàu bay).\n- Từ đồng nghĩa không hoàn toàn: Mang sắc thái ý cảm xúc, thái độ hoặc mức độ khác nhau, cần cân nhắc kỹ khi sử dụng:\n  + Biểu thị thái độ: chết - hy sinh (cao cả) - toi mạng (khinh bỉ).\n  + Biểu thị mức độ: cuồn cuộn - cuộn - lăn tăn.\n  + Biểu thị hành động cụ thể: mang - vác - khiêng - xách - đèo.",
          formula: "Từ đồng nghĩa hoàn toàn (Thay thế tự do) vs Không hoàn toàn (Khác sắc thái tình cảm)",
          examples: [
            { word: "Tổ quốc - Giang sơn - Đất nước - Non sông", type: "Từ đồng nghĩa biểu thị khái niệm quê hương" },
            { word: "Chăm chỉ - Cần cù - Siêng năng - Chịu khó", type: "Từ đồng nghĩa chỉ phẩm chất lao động" }
          ]
        },
        writing: {
          title: "Viết đoạn văn Nêu ý kiến tán thành một hiện tượng, việc làm tốt",
          steps: "Đoạn văn nêu ý kiến tán thành gồm 3 phần:\n1. Mở đoạn: Nêu rõ hiện tượng, việc làm mà em tán thành (ví dụ: phong trào đọc sách, giúp đỡ bạn nghèo, dọn rác bãi biển).\n2. Thân đoạn: Đưa ra 2-3 lí lẽ chặt chẽ và dẫn chứng thực tế xác thực để chứng minh lợi ích to lớn của việc làm đó.\n3. Kết đoạn: Khẳng định lại ý kiến tán thành và rút ra hành động thiết thực của bản thân.",
          outline: "- Mở đoạn: Em hoàn toàn tán thành việc lập 'Tủ sách lớp học'.\n- Thân đoạn: Lí lẽ 1: Giúp nâng cao hiểu biết; Lí lẽ 2: Rèn thói quen tự học; Dẫn chứng: Các bạn trong lớp chăm đọc sách đều tiến bộ.\n- Kết đoạn: Kêu gọi cả lớp cùng chung tay đóng góp thêm nhiều cuốn sách hay."
        },
        speakingListening: "Thuyết trình về truyền thống 'Uống nước nhớ nguồn' hoặc giới thiệu một di tích lịch sử cách mạng tại địa phương.",
        readingExtension: "Đọc các tác phẩm lịch sử: 'Lá cờ thêu sáu chữ vàng' (Nguyễn Huy Tưởng), 'Đất rừng phương Nam' (Đoàn Giỏi).",
        quiz: {
          q: "Nhóm từ nào dưới đây gồm các từ đồng nghĩa hoàn toàn, có thể thay thế cho nhau trong mọi ngữ cảnh?",
          options: [
            "xe lửa - tàu hỏa - hỏa xa",
            "chết - hy sinh - từ trần",
            "ăn - xơi - tọng",
            "vác - gánh - xách"
          ],
          ans: 0,
          exp: "'xe lửa', 'tàu hỏa', 'hỏa xa' là các từ đồng nghĩa hoàn toàn chỉ cùng một phương tiện đường sắt, không phân biệt sắc thái tình cảm."
        }
      }
    ]
  },
  {
    id: 8,
    book: 2,
    name: "Chủ điểm 8: Thế giới của chúng ta (Bài 25 – 30)",
    desc: "Tình hữu nghị năm châu, giữ gìn hòa bình Trái Đất; Quy tắc viết tên người, tên địa lí nước ngoài; Công dụng của Dấu gạch ngang; Viết đoạn văn nêu ý kiến phản đối; Ôn tập cuối năm.",
    lessons: [
      {
        num: 57,
        title: "Bài 57. Hạt gạo làng ta và Quy tắc viết tên riêng nước ngoài",
        pages: "Tập 2, Trang 112–119",
        target: "Thấu hiểu giá trị hạt gạo mồ hôi nước mắt của người nông dân thời chiến; nắm vững quy tắc viết hoa tên người, tên địa lí nước ngoài và công dụng dấu gạch ngang; viết đoạn văn phản đối hành vi sai trái.",
        reading: {
          title: "Hạt gạo làng ta",
          author: "Trần Đăng Khoa",
          excerpt: "Hạt gạo làng ta / Có vị phù sa / Của sông Kinh Thầy / Có hương sen thơm / Trong hồ nước đầy / Có lời mẹ hát / Ngọt bùi đắng cay... / Hạt gạo làng ta / Có bão tháng bảy / Có mưa tháng ba / Giọt mồ hôi sa / Những trưa tháng sáu / Nước như ai nấu / Chết cả cá cờ / Cua ngoi lên bờ / Mẹ em xuống cấy...",
          mainIdea: "Ngợi ca giá trị thiêng liêng của hạt gạo được kết tinh từ mồ hôi, công sức của mẹ và người nông dân nơi hậu phương.",
          characters: "Người mẹ tảo tần trên đồng cấy và các bạn nhỏ làm nghìn việc tốt.",
          message: "Trân trọng từng hạt cơm, thấu hiểu nỗi nhọc nhằn của người lao động và yêu quê hương đất nước."
        },
        grammar: {
          title: "Quy tắc viết hoa tên riêng nước ngoài & Công dụng của Dấu gạch ngang",
          concept: "1. Quy tắc viết tên người, tên địa lí nước ngoài:\n- Trường hợp phiên âm trực tiếp không qua Hán Việt: Viết hoa chữ cái đầu của mỗi bộ phận tạo thành tên đó; nếu bộ phận gồm nhiều tiếng thì giữa các tiếng có gạch nối.\n  + Ví dụ tên người: Lép Tôn-xtôi, Luy-i Pao-xtơ, Tô-mát Ê-đi-xơn.\n  + Ví dụ tên địa lí: Pa-ri, Mát-xcơ-va, Luân Đôn, Đa-nuýp.\n- Trường hợp phiên âm qua âm Hán Việt: Viết hoa như tên riêng Việt Nam (không có gạch nối).\n  + Ví dụ: Bắc Kinh, Luân Đôn, Niu Oóc, Thái Lan, Nhật Bản.\n2. Tác dụng của Dấu gạch ngang (-):\n- Đánh dấu chỗ bắt đầu lời nói của nhân vật trong đối thoại.\n- Đánh dấu phần chú thích, giải thích thêm trong câu.\n- Đánh dấu các ý trong một danh sách liệt kê.\n- Đặt giữa các từ để chỉ một liên danh, tuyến đường (Hà Nội - Hải Phòng).",
          formula: "Tên phiên âm: Viết hoa chữ cái đầu mỗi bộ phận + gạch nối | Hán Việt: Viết hoa từng tiếng",
          examples: [
            { word: "Vích-to Huy-gô, An-be Anh-xtanh, Đan Mạch, Ma-lay-xi-a", type: "Viết hoa tên người, địa lí phiên âm" },
            { word: "- Đánh dấu lời thoại / - Chú thích trong câu", type: "Công dụng dấu gạch ngang" }
          ]
        },
        writing: {
          title: "Viết đoạn văn Nêu ý kiến phản đối một hiện tượng, hành vi chưa đúng",
          steps: "Đoạn văn nêu ý kiến phản đối gồm 3 phần:\n1. Mở đoạn: Nêu rõ hiện tượng tiêu cực mà em không đồng tình (lãng phí đồ ăn, xả rác bừa bãi, bạo lực học đường, lạm dụng trò chơi điện tử).\n2. Thân đoạn: Phân tích 2-3 tác hại nguy hiểm của hiện tượng đó đối với cá nhân, gia đình và cộng đồng; đưa ra dẫn chứng xác thực.\n3. Kết đoạn: Khẳng định lại sự phản đối và đề xuất giải pháp khắc phục, kêu gọi mọi người cùng chung tay bài trừ.",
          outline: "- Mở đoạn: Em cực lực phản đối hành vi lãng phí thức ăn trong bữa ăn bán trú.\n- Thân đoạn: Tác hại 1: Lãng phí công sức người nông dân; Tác hại 2: Tốn kém tiền bạc cha mẹ; Tác hại 3: Ô nhiễm môi trường.\n- Kết đoạn: Lời kêu gọi hãy ăn hết phần cơm của mình để trân trọng hạt gạo làng ta."
        },
        speakingListening: "Thảo luận về vấn đề bảo vệ môi trường toàn cầu: 'Nói không với rác thải nhựa', 'Bảo vệ nguồn nước sạch'.",
        readingExtension: "Tìm đọc các tác phẩm văn học thiếu nhi thế giới: 'Hoàng tử bé' (Antoine de Saint-Exupéry), 'Không gia đình' (Hector Malot).",
        quiz: {
          q: "Tên người nước ngoài nào dưới đây được viết hoa đúng chính tả tiếng Việt?",
          options: [
            "Vích-to Huy-gô",
            "vích-to huy-gô",
            "Vích-To Huy-Gô",
            "Vích to Huy gô"
          ],
          ans: 0,
          exp: "Quy tắc: Viết hoa chữ cái đầu của mỗi bộ phận tạo thành tên đó ('V' trong Vích-to và 'H' trong Huy-gô), giữa các tiếng trong cùng bộ phận có dấu gạch nối."
        }
      }
    ]
  }
];

// Sổ tay Quy tắc Ngữ pháp & Chính tả Tiếng Việt Lớp 5
const handbookRules = [
  {
    category: "Từ loại cốt lõi",
    title: "1. Danh từ, Động từ, Tính từ, Đại từ, Kết từ",
    summary: "Hệ thống 5 từ loại cơ bản nhất của bậc Tiểu học: Danh từ (chỉ thực thể sự vật), Động từ (chỉ hành động, trạng thái), Tính từ (chỉ phẩm chất, đặc điểm), Đại từ (xưng hô, thay thế, hỏi), Kết từ (liên kết cú pháp)."
  },
  {
    category: "Cấu tạo từ vựng",
    title: "2. Từ đồng nghĩa, Từ trái nghĩa, Từ đồng âm, Từ đa nghĩa",
    summary: "Nắm vững ranh giới giữa Từ đa nghĩa (chung nguồn gốc, có mối liên hệ nghĩa) với Từ đồng âm (chỉ trùng âm đọc ngẫu nhiên, nghĩa hoàn toàn khác nhau); Từ đồng nghĩa hoàn toàn và không hoàn toàn."
  },
  {
    category: "Cú pháp câu",
    title: "3. Câu đơn, Câu ghép & Cách nối các vế câu ghép",
    summary: "Câu ghép gồm 2 hay nhiều vế câu C-V độc lập. Nối bằng: Dấu câu trực tiếp (phẩy, hai chấm, chấm phẩy); Kết từ (và, nhưng, thì); Cặp quan hệ từ (Vì... nên..., Tuy... nhưng..., Nếu... thì...); Cặp từ hô ứng (Vừa... đã..., Càng... càng...)."
  },
  {
    category: "Văn bản & Đoạn văn",
    title: "4. Các phép liên kết câu trong đoạn văn",
    summary: "3 phép liên kết trọng tâm: Phép lặp từ ngữ (duy trì chủ đề); Phép thay thế từ ngữ (dùng đại từ hoặc từ đồng nghĩa để tránh đơn điệu); Phép nối (sử dụng quan hệ từ, cụm từ nối ở đầu câu)."
  },
  {
    category: "Quy tắc chính tả",
    title: "5. Viết hoa tên người, tên địa lí Việt Nam & Nước ngoài",
    summary: "Tên riêng VN: Viết hoa chữ cái đầu của tất cả các tiếng. Tên riêng nước ngoài: Viết hoa chữ cái đầu mỗi bộ phận, giữa các tiếng cùng bộ phận dùng gạch nối (phiên âm trực tiếp); hoặc viết hoa như tên VN nếu phiên âm Hán Việt."
  },
  {
    category: "Dấu câu & Tu từ",
    title: "6. Dấu gạch ngang & Biện pháp tu từ Điệp từ, điệp ngữ",
    summary: "Dấu gạch ngang dùng để đánh dấu lời đối thoại, chú thích trong câu, liệt kê danh sách. Điệp từ điệp ngữ tạo nhịp điệu dạt dào, nhấn mạnh tình cảm, ý chí kiên định."
  }
];

// 25 câu hỏi trắc nghiệm Hội thi Trạng Nguyên Tiếng Việt Lớp 5 (60:00)
const trangNguyenVietnameseQuizzes = [
  {
    q: "Trong các nhóm từ sau, nhóm từ nào toàn là danh từ?",
    options: [
      "sách vở, học sinh, lòng yêu nước, cơn mưa",
      "chạy nhảy, chăm chỉ, trường học, vui vẻ",
      "nhanh nhẹn, hoa hồng, suy nghĩ, hát ca",
      "thông minh, con đường, bay lượn, mùa xuân"
    ],
    ans: 0,
    exp: "'sách vở', 'học sinh', 'lòng yêu nước', 'cơn mưa' đều là danh từ chỉ đồ vật, người, khái niệm và hiện tượng tự nhiên."
  },
  {
    q: "Trong câu: 'Mặt trời mọc, chim chóc cất tiếng hót líu lo', hai vế câu ghép được nối với nhau bằng cách nào?",
    options: [
      "Nối trực tiếp bằng dấu phẩy",
      "Nối bằng kết từ 'và'",
      "Nối bằng cặp quan hệ từ 'Vì... nên...'",
      "Nối bằng đại từ thay thế"
    ],
    ans: 0,
    exp: "Hai vế câu 'Mặt trời mọc' và 'chim chóc cất tiếng hót líu lo' được nối trực tiếp với nhau bằng dấu phẩy (,)."
  },
  {
    q: "Từ 'chân' trong cụm từ 'chân núi Nghĩa Lĩnh' được dùng với nghĩa gì?",
    options: [
      "Nghĩa chuyển (chỉ phần dưới cùng tiếp giáp với mặt đất)",
      "Nghĩa gốc (chỉ bộ phận nâng đỡ cơ thể người)",
      "Từ đồng âm ngẫu nhiên",
      "Từ trái nghĩa"
    ],
    ans: 0,
    exp: "'Chân núi' là nghĩa chuyển của từ 'chân', tương đồng với chân người ở vị trí dưới cùng nâng đỡ sự vật."
  },
  {
    q: "Trong câu: 'Tuy trời mưa to nhưng các bạn học sinh vẫn đến lớp đúng giờ', cặp quan hệ từ biểu thị mối quan hệ gì?",
    options: [
      "Tương phản, nhượng bộ",
      "Nguyên nhân - kết quả",
      "Điều kiện - kết quả",
      "Tăng tiến"
    ],
    ans: 0,
    exp: "Cặp từ 'Tuy... nhưng...' biểu thị mối quan hệ tương phản, nhượng bộ giữa hai vế câu."
  },
  {
    q: "Cặp từ nào dưới đây là cặp từ đồng âm?",
    options: [
      "Đường (đường đi) - Đường (đường ăn ngọt)",
      "Chân (chân người) - Chân (chân bàn)",
      "Ăn (ăn cơm) - Xơi (xơi cơm)",
      "Chăm chỉ - Siêng năng"
    ],
    ans: 0,
    exp: "'Đường đi' và 'đường ăn ngọt' đồng âm nhưng hoàn toàn khác nhau về nghĩa, không có mối liên hệ nào."
  },
  {
    q: "Biện pháp tu từ nào được sử dụng trong câu thơ: 'Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công'?",
    options: [
      "Điệp từ, điệp ngữ",
      "So sánh",
      "Nhân hóa",
      "Ẩn dụ chuyển đổi cảm giác"
    ],
    ans: 0,
    exp: "Lặp lại có chủ đích các từ 'đoàn kết', 'thành công' tạo nên điệp từ, điệp ngữ nhấn mạnh tinh thần đại đoàn kết."
  },
  {
    q: "Từ 'vậy' trong câu: 'Bác bảo ngày mai trời sẽ nắng ấm. Nghe vậy, ai nấy đều hân hoan.' có tác dụng gì?",
    options: [
      "Đại từ thay thế cho lời thông báo ở câu trước để liên kết câu",
      "Kết từ nối hai vế trong câu đơn",
      "Tính từ miêu tả cảm xúc",
      "Danh từ chỉ thời gian"
    ],
    ans: 0,
    exp: "'Vậy' là đại từ thay thế cho toàn bộ nội dung 'ngày mai trời sẽ nắng ấm' ở câu trước để tránh lặp từ và tạo liên kết hình thức."
  },
  {
    q: "Dấu gạch ngang (-) trong câu: 'Hà Nội - Thủ đô ngàn năm văn hiến - là trái tim của cả nước.' có tác dụng gì?",
    options: [
      "Đánh dấu bộ phận chú thích, giải thích thêm trong câu",
      "Đánh dấu lời nói trực tiếp của nhân vật",
      "Đánh dấu các ý trong danh sách liệt kê",
      "Nối các từ trong một liên danh"
    ],
    ans: 0,
    exp: "Dấu gạch ngang ở đây dùng để kẹp phần chú thích 'Thủ đô ngàn năm văn hiến' giải thích rõ hơn cho danh từ 'Hà Nội'."
  },
  {
    q: "Tên địa lí nước ngoài nào sau đây được viết hoa đúng quy tắc chính tả tiếng Việt?",
    options: [
      "Xanh Pê-téc-bua",
      "xanh pê-téc-bua",
      "Xanh Pê Téc Bua",
      "Xanh-pê-téc-bua"
    ],
    ans: 0,
    exp: "Tên riêng nước ngoài gồm hai bộ phận: 'Xanh' và 'Pê-téc-bua', viết hoa chữ cái đầu mỗi bộ phận và dùng gạch nối giữa các tiếng trong bộ phận."
  },
  {
    q: "Câu nào dưới đây là câu ghép có sử dụng cặp từ hô ứng?",
    options: [
      "Nắng vừa lên, sương mù đã tan biến khắp thung lũng.",
      "Mặt trời chiếu những tia nắng vàng rực rỡ xuống dòng sông.",
      "Bởi vì chăm chỉ nên Lan đạt danh hiệu học sinh xuất sắc.",
      "Hoa sen mọc trong đầm và tỏa hương ngào ngạt."
    ],
    ans: 0,
    exp: "Cặp từ 'vừa... đã...' là cặp từ hô ứng nối hai vế câu ghép 'Nắng vừa lên' và 'sương mù đã tan biến khắp thung lũng'."
  },
  {
    q: "Trong đoạn văn tả cảnh, thứ tự miêu tả 'từ xa đến gần, từ bao quát đến cụ thể' là miêu tả theo trình tự nào?",
    options: [
      "Trình tự không gian",
      "Trình tự thời gian",
      "Trình tự tâm lý",
      "Trình tự ngẫu nhiên"
    ],
    ans: 0,
    exp: "Miêu tả theo vị trí từ xa đến gần, từ cao xuống thấp là theo trình tự không gian."
  },
  {
    q: "Tác phẩm 'Kì diệu rừng xanh' là của tác giả nào?",
    options: [
      "Mai Văn Tạo",
      "Tô Hoài",
      "Trần Đăng Khoa",
      "Quang Huy"
    ],
    ans: 0,
    exp: "Bài văn miêu tả thiên nhiên nổi tiếng 'Kì diệu rừng xanh' là của nhà văn Mai Văn Tạo."
  },
  {
    q: "Phép liên kết câu bằng cách lặp lại từ ngữ ở câu sau đã có ở câu trước gọi là gì?",
    options: [
      "Phép lặp từ ngữ",
      "Phép thay thế từ ngữ",
      "Phép nối",
      "Phép đảo ngữ"
    ],
    ans: 0,
    exp: "Lặp lại nguyên vẹn từ ngữ chủ đề giữa các câu kế tiếp nhau là phép lặp từ ngữ."
  },
  {
    q: "Trong bài thơ 'Hạt gạo làng ta', nhà thơ Trần Đăng Khoa đã so sánh nước ở ruộng lúa tháng sáu nóng như thế nào?",
    options: [
      "Nước như ai nấu / Chết cả cá cờ",
      "Nước như dòng suối trong",
      "Nước như giọt sương mai",
      "Nước như dòng sữa mẹ"
    ],
    ans: 0,
    exp: "Câu thơ nguyên văn: 'Những trưa tháng sáu / Nước như ai nấu / Chết cả cá cờ / Cua ngoi lên bờ / Mẹ em xuống cấy'."
  },
  {
    q: "Phần Mở bài trong bài văn kể chuyện sáng tạo đóng vai nhân vật thường giới thiệu điều gì?",
    options: [
      "Hóa thân thành nhân vật, xưng 'tôi' và giới thiệu bối cảnh câu chuyện",
      "Kể ngay kết thúc câu chuyện",
      "Đưa ra các số liệu thống kê khoa học",
      "Liệt kê các từ điển đã tra cứu"
    ],
    ans: 0,
    exp: "Mở bài kể chuyện sáng tạo đóng vai nhân vật bắt đầu bằng việc nhân vật tự giới thiệu bản thân mình bằng đại từ 'tôi'."
  },
  {
    q: "Từ nào sau đây là kết từ (quan hệ từ)?",
    options: [
      "nhưng",
      "quyển sách",
      "chạy nhanh",
      "rực rỡ"
    ],
    ans: 0,
    exp: "'nhưng' là kết từ (quan hệ từ) biểu thị quan hệ tương phản."
  },
  {
    q: "Thành ngữ nào dưới đây ca ngợi truyền thống đoàn kết, tương thân tương ái của dân tộc ta?",
    options: [
      "Lá lành đùm lá rách",
      "Qua cầu rút ván",
      "Nước đến chân mới nhảy",
      "Đứng núi này trông núi nọ"
    ],
    ans: 0,
    exp: "'Lá lành đùm lá rách' là thành ngữ tiêu biểu ca ngợi tinh thần đùm bọc, tương thân tương ái."
  },
  {
    q: "Từ 'ngọt' trong câu nào dưới đây được dùng với nghĩa chuyển?",
    options: [
      "Cô giáo có giọng nói ngọt ngào, truyền cảm.",
      "Quả xoài chín vàng này ăn rất ngọt.",
      "Bát chè đỗ đen mẹ nấu vừa ngọt vừa thơm.",
      "Cây mía này có vị ngọt lịm."
    ],
    ans: 0,
    exp: "'Giọng nói ngọt ngào' là nghĩa chuyển cảm nhận bằng thính giác (chuyển đổi cảm giác từ vị giác sang thính giác)."
  },
  {
    q: "Văn bản nào dưới đây thuộc thể loại văn bản nhật dụng hành chính?",
    options: [
      "Báo cáo công việc / Chương trình hoạt động",
      "Bài thơ lục bát",
      "Truyện cổ tích thần kỳ",
      "Bài văn tả phong cảnh"
    ],
    ans: 0,
    exp: "Báo cáo công việc và chương trình hoạt động là các văn bản nhật dụng có khuôn mẫu tổ chức cụ thể."
  },
  {
    q: "Khi viết đoạn văn nêu ý kiến phản đối một hiện tượng tiêu cực, người viết cần đưa ra yếu tố nào?",
    options: [
      "Lí lẽ sắc bén và dẫn chứng thực tế chứng minh tác hại của hiện tượng đó",
      "Khen ngợi hiện tượng đó nhiệt tình",
      "Chỉ kể lại một câu chuyện cổ tích",
      "Trích dẫn các bài thơ tình yêu thiên nhiên"
    ],
    ans: 0,
    exp: "Viết đoạn văn phản đối đòi hỏi phải nêu rõ quan điểm, chỉ ra các tác hại khôn lường bằng lí lẽ và dẫn chứng thuyết phục."
  },
  {
    q: "Trong các từ sau, từ nào viết SAI chính tả quy tắc tên người nước ngoài?",
    options: [
      "Lu-y pao-xtơ",
      "Luy-i Pao-xtơ",
      "An-be Anh-xtanh",
      "Tô-mát Ê-đi-xơn"
    ],
    ans: 0,
    exp: "'Lu-y pao-xtơ' sai vì không viết hoa chữ cái đầu của mỗi bộ phận ('L' và 'P')."
  },
  {
    q: "Chủ ngữ trong câu: 'Dưới bóng tre xanh của ngàn xưa, người dân cày Việt Nam dựng nhà, dựng cửa, vỡ ruộng, khai hoang.' là gì?",
    options: [
      "người dân cày Việt Nam",
      "Dưới bóng tre xanh của ngàn xưa",
      "dựng nhà, dựng cửa",
      "tre xanh"
    ],
    ans: 0,
    exp: "'Dưới bóng tre xanh của ngàn xưa' là trạng ngữ chỉ nơi chốn, chủ ngữ là 'người dân cày Việt Nam'."
  },
  {
    q: "Câu 'Sông Đà chia ánh sáng đi muôn ngả' gợi nhớ đến công trình vĩ đại nào của đất nước?",
    options: [
      "Nhà máy Thủy điện Hòa Bình",
      "Cầu Long Biên",
      "Đường hầm Hải Vân",
      "Tòa nhà Landmark 81"
    ],
    ans: 0,
    exp: "Hình ảnh sông Đà chia ánh sáng gắn liền với công trình Thủy điện Hòa Bình ngăn sông Đà thế kỷ XX."
  },
  {
    q: "Đại từ xưng hô nào thể hiện sự khiêm tốn, lịch sự khi nói chuyện với người lớn tuổi?",
    options: [
      "cháu / em / con",
      "mày / tao",
      "hắn / nó",
      "chúng nó"
    ],
    ans: 0,
    exp: "Xưng hô 'cháu/em/con' thể hiện sự lễ phép, kính trọng và khiêm nhường đối với bề trên."
  },
  {
    q: "Câu ca dao: 'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba' nhắc nhở chúng ta về lễ hội nào?",
    options: [
      "Lễ hội Đền Hùng (Phú Thọ)",
      "Lễ hội Chùa Hương (Hà Nội)",
      "Lễ hội Côn Sơn (Hải Dương)",
      "Lễ hội Núi Bà Đen (Tây Ninh)"
    ],
    ans: 0,
    exp: "Ngày Giỗ Tổ mùng mười tháng ba âm lịch là ngày hội tưởng nhớ công đức các Vua Hùng tại Đền Hùng, tỉnh Phú Thọ."
  }
];

module.exports = {
  topics,
  handbookRules,
  trangNguyenVietnameseQuizzes
};
