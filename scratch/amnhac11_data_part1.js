// scratch/amnhac11_data_part1.js
// Âm nhạc 11 - Bộ sách Kết nối tri thức với cuộc sống
// Phần kiến thức chung: 4 Chủ đề, 16 bài học chi tiết

const general_themes = [
  {
    themeId: 1,
    themeTitle: "Chủ đề 1. Khúc ca mùa xuân",
    themeDesc: "Khám phá giọng Pha trưởng, kĩ thuật liền tiếng (legato), ca khúc mùa xuân và nghệ thuật âm nhạc thính phòng",
    lessons: [
      {
        id: "c1_b1",
        num: 1,
        title: "Bài 1. Lí thuyết âm nhạc: Giọng Pha trưởng; đọc nhạc số 1",
        badge: "Lí thuyết & Đọc nhạc",
        objectives: [
          "Nhận biết được hoá biểu, âm chủ, hàng âm và các âm ổn định của giọng Pha trưởng.",
          "Phân tích được tính chất tươi sáng đặc trưng của điệu thức Pha trưởng trong tác phẩm.",
          "Thực hiện đọc đúng cao độ, trường độ, nhịp độ và sắc thái Bài đọc nhạc số 1 kết hợp gõ đệm."
        ],
        sections: [
          {
            heading: "1. Lí thuyết âm nhạc: Giọng Pha trưởng (F major)",
            type: "list",
            items: [
              "<strong>Hoá biểu:</strong> Có một dấu giáng Si♭ (dấu giáng thứ nhất theo vòng bậc năm), được đặt cố định tại vị trí nốt Si trên dòng kẻ thứ ba của khuông nhạc khoá Son.",
              "<strong>Hàng âm (Gam Pha trưởng):</strong> Gồm chuỗi 7 âm liền bậc: <strong>Pha – Son – La – Si♭ – Đô – Rê – Mi – Pha</strong> (F – G – A – B♭ – C – D – E – F). Âm chủ (bậc I) là nốt Pha.",
              "<strong>Cấu trúc cung và nửa cung:</strong> Cung – Cung – Nửa cung – Cung – Cung – Cung – Nửa cung (1 – 1 – 1/2 – 1 – 1 – 1 – 1/2). Khoảng cách nửa cung nằm giữa bậc III - IV (La - Si♭) và bậc VII - I (Mi - Pha).",
              "<strong>Các âm ổn định:</strong> Bậc I (Pha), bậc III (La), bậc V (Đô) tạo thành hợp âm ba chủ (F). Các bậc còn lại (Son, Si♭, Rê, Mi) là các âm không ổn định, có xu hướng giải về âm ổn định.",
              "<strong>Tính chất âm nhạc:</strong> Giọng Pha trưởng thường mang sắc thái trong sáng, tươi vui, thanh thoát, ấm áp và giàu chất thơ.",
              "<strong>Nguyên tắc nhận diện giọng:</strong> Cần quan sát đồng bộ: (1) Hoá biểu có 1 dấu Si♭; (2) Âm chủ và nốt kết bài thường là nốt Pha; (3) Hợp âm chủ F vang lên ở các điểm tựa giai điệu; không chỉ nhìn đơn thuần vào một dấu hoá riêng lẻ."
            ]
          },
          {
            heading: "2. Thực hành: Bài đọc nhạc số 1, giọng Pha trưởng",
            type: "list",
            items: [
              "<strong>Quy trình 6 bước luyện đọc:</strong> (1) Đọc gam Pha trưởng đi lên, đi xuống và đọc trục âm ổn định (Pha – La – Đô); (2) Luyện các quãng hai liền bậc theo âm hình tiết tấu chuẩn; (3) Đọc tên nốt nhạc theo đúng tiết tấu không cao độ; (4) Khởi xướng cao độ từng nốt; (5) Ghép từng tiết nhạc ở tốc độ chậm; (6) Hoàn thiện đúng nhịp độ, sắc thái quy định.",
              "<strong>Kí hiệu sắc thái & Nhịp độ:</strong> Chú ý các chỉ dẫn cường độ (p - nhỏ, mf - vừa phải, f - mạnh), chỉ dẫn tốc độ (Moderato - vừa phải, Allegretto - hơi nhanh) và các dấu luyến, dấu nối.",
              "<strong>Ứng dụng & Gõ đệm:</strong> Sử dụng thanh phách, trống con gõ theo phách hoặc gõ tiết tấu đệm cho nét nhạc mùa xuân."
            ]
          }
        ],
        quiz: [
          {
            q: "Hoá biểu của giọng Pha trưởng (F major) có đặc điểm nào dưới đây?",
            options: [
              "Có duy nhất một dấu giáng Si♭ đặt tại vị trí nốt Si",
              "Có duy nhất một dấu thăng Pha♯ đặt tại vị trí nốt Pha",
              "Có hai dấu giáng gồm Si♭ và Mi♭",
              "Không có dấu thăng hoặc dấu giáng nào"
            ],
            ans: 0,
            explain: "Giọng Pha trưởng có hoá biểu gồm đúng 1 dấu giáng duy nhất là Si giáng (B♭) đặt trên dòng kẻ thứ ba của khuông nhạc khoá Son."
          },
          {
            q: "Trong gam Pha trưởng, các bậc âm ổn định lần lượt là các nốt nào?",
            options: [
              "Bậc I (Pha), bậc III (La), bậc V (Đô)",
              "Bậc I (Pha), bậc II (Son), bậc IV (Si♭)",
              "Bậc I (Đô), bậc III (Mi), bậc V (Son)",
              "Bậc II (Son), bậc IV (Si♭), bậc VI (Rê)"
            ],
            ans: 0,
            explain: "Các âm ổn định của mọi giọng trưởng luôn là bậc I, III, V; đối với giọng Pha trưởng đó là các nốt Pha - La - Đô tạo nên hợp âm ba chủ F."
          },
          {
            q: "Khi xác định một bản nhạc có phải viết ở giọng Pha trưởng hay không, học sinh cần căn cứ vào:",
            options: [
              "Hoá biểu 1 dấu Si♭ kết hợp âm chủ, nốt kết và giai điệu xoay quanh nốt Pha",
              "Chỉ cần nhìn thấy có 1 dấu Si giáng ở đầu khuông nhạc là đủ",
              "Chỉ cần bản nhạc có nhịp 2/4 và tốc độ nhanh",
              "Bản nhạc có sử dụng nhiều nốt hoa mĩ"
            ],
            ans: 0,
            explain: "Cần phối hợp cả hoá biểu (1 Si♭) cùng âm chủ, nốt kết bài (nốt Pha) và cấu trúc hoà âm, tránh nhầm lẫn với giọng Rê thứ song song (cũng có 1 Si♭ nhưng âm chủ là Rê)."
          }
        ]
      },
      {
        id: "c1_b2",
        num: 2,
        title: "Bài 2. Hát: Dâng Người tiếng hát mùa xuân",
        badge: "Thanh nhạc ca khúc",
        objectives: [
          "Hát đúng cao độ, trường độ, lời ca và thể hiện tình cảm thành kính trong ca khúc 'Dâng Người tiếng hát mùa xuân'.",
          "Nắm vững kĩ thuật chuẩn bị hơi thở, thả lỏng cơ thể và phát âm rõ lời.",
          "Biết biểu diễn ca khúc dưới các hình thức: đơn ca, song ca, tốp ca kết hợp động tác phụ hoạ."
        ],
        sections: [
          {
            heading: "1. Tìm hiểu tác phẩm & Tác giả",
            type: "list",
            items: [
              "<strong>Tác giả:</strong> Nhạc sĩ <strong>Nguyễn Văn Thương</strong> (1919 – 2002), một trong những cánh chim đầu đàn của nền tân nhạc Việt Nam, tác giả của nhiều tuyệt phẩm nổi tiếng như 'Đêm đông', 'Bình minh Nguyên Hồng'...",
              "<strong>Nội dung & Tính chất:</strong> Ca khúc 'Dâng Người tiếng hát mùa xuân' thể hiện lòng kính yêu vô hạn và niềm tri ân sâu sắc của đồng bào cả nước đối với Chủ tịch Hồ Chí Minh vĩ đại; giai điệu vừa phải, trữ tình, trong sáng, tha thiết và dạt dào tình cảm mùa xuân.",
              "<strong>Cấu trúc ca khúc:</strong> Đoạn 1 mang tính tự sự, êm dịu, mở ra không gian mùa xuân đất trời dâng lên Bác; Đoạn 2 cao trào, ngân vang niềm tự hào, giai điệu phát triển bay bổng."
            ]
          },
          {
            heading: "2. Kĩ thuật thanh nhạc & Hướng dẫn tập hát",
            type: "list",
            items: [
              "<strong>Thả lỏng cơ thể:</strong> Thả lỏng toàn bộ khớp vai, cổ, quai hàm và cơ mặt; đứng thẳng tự nhiên, trọng lượng cơ thể phân bố đều hai chân.",
              "<strong>Khởi động giọng (Vocalise):</strong> Luyện các mẫu âm ngắn 'Mi - Mê - Ma - Mô - Mu' liền bậc đi lên và đi xuống nửa cung trong âm vực thoải mái để mở khẩu hình và làm ấm dây thanh quản.",
              "<strong>Điều tiết hơi thở:</strong> Lấy hơi sâu bằng cơ hoành (bụng phình nhẹ), giữ hơi và đẩy hơi đều đặn; lấy hơi đúng các vị trí ngắt câu, ngắt ý theo văn bản lời ca.",
              "<strong>Nhả chữ và sắc thái:</strong> Phát âm tròn vành rõ chữ; nhấn nhẹ vào phách mạnh đầu ô nhịp; thể hiện sắc thái tha thiết, trang trọng."
            ]
          }
        ],
        quiz: [
          {
            q: "Ca khúc 'Dâng Người tiếng hát mùa xuân' là sáng tác của nhạc sĩ nào?",
            options: [
              "Nhạc sĩ Nguyễn Văn Thương",
              "Nhạc sĩ Văn Cao",
              "Nhạc sĩ Phạm Tuyên",
              "Nhạc sĩ Hoàng Vân"
            ],
            ans: 0,
            explain: "Ca khúc 'Dâng Người tiếng hát mùa xuân' là một tác phẩm thanh nhạc tiêu biểu của nhạc sĩ tài hoa Nguyễn Văn Thương."
          },
          {
            q: "Trước khi bắt đầu thực hành bài hát, ca sĩ/học sinh cần thực hiện thao tác nào để bảo vệ thanh quản và hát chuẩn cao độ?",
            options: [
              "Thả lỏng cơ mặt, khớp hàm và khởi động giọng bằng mẫu âm vocalise phù hợp",
              "Hát ngay ở cường độ cực mạnh để mở rộng âm vực",
              "Uống nước đá lạnh để làm dịu cổ họng",
              "Nín thở thật lâu để tăng dung tích phổi"
            ],
            ans: 0,
            explain: "Thả lỏng cơ thể (cổ, hàm, vai) và khởi động giọng bằng các mẫu âm luyện thanh nhẹ nhàng là nguyên tắc bắt buộc để chuẩn bị dây thanh quản và bộ máy phát âm."
          },
          {
            q: "Để thể hiện đúng tinh thần của ca khúc 'Dâng Người tiếng hát mùa xuân', người hát cần đạt sắc thái gì?",
            options: [
              "Trữ tình, tha thiết, trong sáng và kính yêu",
              "Sôi động, dồn dập, gắt gao như hành khúc chiến trận",
              "Hóm hỉnh, dí dỏm, nghịch ngợm",
              "Trầm buồn, bi luỵ, sầu thảm"
            ],
            ans: 0,
            explain: "Bài hát viết về Bác Hồ và mùa xuân đất nước, mang tính chất trữ tình, trong sáng, ấm áp và chứa chan lòng biết ơn kính yêu."
          }
        ]
      },
      {
        id: "c1_b3",
        num: 3,
        title: "Bài 3. Nhạc cụ: Bài nhạc cụ số 1, giọng Pha trưởng",
        badge: "Thực hành nhạc cụ",
        objectives: [
          "Thể hiện đúng cao độ, trường độ, nhịp độ và sắc thái trên nhạc cụ giai điệu (recorder, kèn phím, sáo trúc...).",
          "Rèn luyện kĩ thuật liền tiếng (legato) và kĩ thuật kiểm soát luồng hơi/ngón bấm sạch sẽ.",
          "Phối hợp hoà tấu nhóm nhịp nhàng, luân phiên bè và giữ vững nhịp độ."
        ],
        sections: [
          {
            heading: "1. Yêu cầu kĩ thuật & Luyện tập tiết tấu",
            type: "list",
            items: [
              "<strong>Kĩ thuật liền tiếng (Legato):</strong> Nối các âm mượt mà, âm thanh ngân trọn vẹn trường độ từ nốt trước đến nốt sau mà không bị ngắt quãng đột ngột hay đứt hơi.",
              "<strong>Luyện mẫu âm riêng:</strong> Chú ý bấm chính xác nốt Si giáng (B♭) trên nhạc cụ đang học (vị trí thế bấm ngón đặc thù).",
              "<strong>Quy trình tập nhạc cụ:</strong> (1) Gõ và đọc tiết tấu riêng; (2) Luyện thế bấm ngón không thổi hơi; (3) Thổi/chơi từng tiết nhạc ngắn ở tốc độ chậm; (4) Ghép toàn bộ bài theo đúng nhịp độ."
            ]
          },
          {
            heading: "2. Hoà tấu nhóm & Nhận xét đánh giá",
            type: "list",
            items: [
              "<strong>Diễn tấu luân phiên:</strong> Chia nhóm học sinh luân phiên diễn tấu câu 1 và câu 2 nối tiếp nhịp nhàng, không bị hẫng nhịp ở điểm chuyển giao.",
              "<strong>Gõ đệm phụ hoạ:</strong> Kết hợp nhạc cụ gõ (tam âm, tambourine, thanh phách) gõ đệm phách mạnh hoặc theo âm hình tiết tấu được chỉ dẫn trong SGK.",
              "<strong>Đánh giá:</strong> Lắng nghe độ chuẩn xác về cao độ nốt Si♭, độ đều của nhịp và sự hoà quyện âm sắc giữa các nhạc cụ."
            ]
          }
        ],
        quiz: [
          {
            q: "Kĩ thuật diễn tấu 'liền tiếng' (legato) trên nhạc cụ đòi hỏi người chơi phải đạt được điều gì?",
            options: [
              "Nối âm thanh từ nốt này sang nốt khác liên tục, mượt mà và không bị đứt đoạn",
              "Ngắt các nốt thật ngắn, giật mạnh và dứt khoát",
              "Chơi thật to ở tất cả các nốt nhạc",
              "Rung tay liên tục để tạo âm thanh nhòe mờ"
            ],
            ans: 0,
            explain: "Legato trong âm nhạc có nghĩa là chơi/hát liền tiếng, nối kết các âm thanh một cách êm ái, trơn tru, nốt trước vừa dứt thì nốt sau ngân vang ngay."
          },
          {
            q: "Khi chơi Bài nhạc cụ số 1 ở giọng Pha trưởng, nốt nhạc nào cần chú ý bấm đúng thế ngón dấu hoá?",
            options: [
              "Nốt Si giáng (B♭)",
              "Nốt Pha thăng (F♯)",
              "Nốt Đô thăng (C♯)",
              "Nốt Son thăng (G♯)"
            ],
            ans: 0,
            explain: "Giọng Pha trưởng có hoá biểu nốt Si giáng, do đó mọi nốt Si trong bài đều phải bấm ở thế ngón Si giáng (B♭)."
          },
          {
            q: "Trong hoạt động hoà tấu nhóm nhạc cụ, yếu tố then chốt nhất để bản nhạc không bị rối loạn là:",
            options: [
              "Giữ đều nhịp độ chung, lắng nghe bạn diễn và phối hợp ăn khớp ở điểm nối câu",
              "Mỗi người chơi ở tốc độ nhanh nhất có thể theo sở thích",
              "Nhạc cụ gõ phải đánh to nhất át hết các nhạc cụ giai điệu",
              "Chỉ nhìn vào bài của mình, không quan tâm đến người bên cạnh"
            ],
            ans: 0,
            explain: "Hoà tấu âm nhạc đề cao tính kỉ luật và khả năng lắng nghe tập thể để giữ vững một nhịp độ thống nhất và cân bằng âm lượng."
          }
        ]
      },
      {
        id: "c1_b4",
        num: 4,
        title: "Bài 4. Thường thức âm nhạc: Sơ lược về âm nhạc thính phòng",
        badge: "Thường thức & Thưởng thức",
        objectives: [
          "Trình bày được khái niệm, nguồn gốc, không gian biểu diễn và đặc trưng của âm nhạc thính phòng.",
          "Nhận biết được các biên chế nhạc cụ thính phòng phổ biến (tam tấu, tứ tấu dây, ngũ tấu...).",
          "Cảm nhận và phân tích được vẻ đẹp của tác phẩm Sonata số 5 cho violin và piano của Beethoven."
        ],
        sections: [
          {
            heading: "1. Khái niệm & Đặc trưng của âm nhạc thính phòng",
            type: "list",
            items: [
              "<strong>Nguồn gốc tên gọi:</strong> 'Thính phòng' (Chamber music) bắt nguồn từ tiếng Ý 'Musica da camera', nghĩa là âm nhạc biểu diễn trong không gian khán phòng nhỏ, ấm cúng (phòng khách quý tộc hoặc hội trường nhỏ), khác với không gian nhà hát lớn của nhạc kịch hay dàn nhạc giao hưởng khổng lồ.",
              "<strong>Biên chế biểu diễn:</strong> Thường được viết cho một nhóm nhỏ nhạc cụ hoà tấu (từ 2 đến 8 nhạc cụ), mỗi nhạc cụ đảm nhận một bè độc lập và không có nhạc trưởng chỉ huy. Đôi khi có kết hợp giọng hát.",
              "<strong>Các nhạc cụ thông dụng:</strong> Nhạc cụ dây (Violin, Viola, Cello, Contrabass), Nhạc cụ hơi gỗ (Flute, Oboe, Clarinet, Bassoon), Kèn đồng (Trumpet, Horn) và đặc biệt là Đàn Piano.",
              "<strong>Đặc trưng nghệ thuật:</strong> Đề cao tính tinh tế, trí tuệ, sự hoà quyện âm sắc hoàn hảo và sự thấu hiểu tương tác nội tâm sâu sắc giữa các nhạc công.",
              "<strong>Các thể loại thường gặp:</strong> Sonata (viết cho 1-2 nhạc cụ), Tam tấu (Trio), Tứ tấu dây (String Quartet: 2 violin, viola, cello), Ngũ tấu (Quintet), Khúc hoà nhạc ban đêm (Serenade)..."
            ]
          },
          {
            heading: "2. Thưởng thức âm nhạc: Sonata số 5 cho violin và piano (L. V. Beethoven)",
            type: "list",
            items: [
              "<strong>Tác giả:</strong> <strong>Ludwig van Beethoven</strong> (1770 – 1827) - thiên tài âm nhạc vĩ đại người Đức, cầu nối rực rỡ giữa thời kì Cổ điển và Lãng mạn.",
              "<strong>Tác phẩm:</strong> <strong>Sonata số 5, giọng Pha trưởng, Op. 24</strong> (thường được gọi là bản Sonata 'Mùa xuân' - Spring Sonata). Tác phẩm gồm 4 chương.",
              "<strong>Cảm thụ Chương I (Allegro):</strong> Mở đầu với chủ đề giai điệu violin vô cùng trong trẻo, trữ tình, mềm mại, được nâng đỡ bởi tiếng đàn piano rải hợp âm êm ái, gợi liên tưởng đến khung cảnh một buổi sáng mùa xuân ngập tràn ánh nắng và hoa lá tốt tươi.",
              "<strong>Nét đặc sắc:</strong> Sự đối đáp, hoán đổi vai trò bình đẳng giữa cây đàn violin và piano: khi violin cất tiếng hát thì piano đệm lấp lánh, rồi ngay sau đó piano lại lĩnh xướng chủ đề chính để violin phụ hoạ."
            ]
          }
        ],
        quiz: [
          {
            q: "Đặc điểm cơ bản nhất phân biệt âm nhạc thính phòng (Chamber music) với âm nhạc giao hưởng là:",
            options: [
              "Biểu diễn trong không gian phòng hoà nhạc nhỏ với nhóm ít nhạc cụ, mỗi bè một người chơi không có nhạc trưởng",
              "Chỉ được chơi bằng các loại nhạc cụ gõ dân gian",
              "Có dàn nhạc khổng lồ hàng trăm người và hợp xướng biểu diễn ngoài trời",
              "Luôn luôn phải có một ca sĩ solo hát chính suốt buổi"
            ],
            ans: 0,
            explain: "Âm nhạc thính phòng được sáng tác cho nhóm nhỏ nhạc cụ (2-8 người), mỗi nhạc cụ chơi một bè riêng trong không gian phòng hoà nhạc nhỏ ấm cúng."
          },
          {
            q: "Bản Sonata số 5 cho violin và piano của Beethoven còn được người đời đặt tên thân thuộc là gì?",
            options: [
              "Sonata Mùa xuân (Spring Sonata)",
              "Sonata Ánh trăng (Moonlight Sonata)",
              "Sonata Bi tráng (Pathétique)",
              "Sonata Khúc hoan ca"
            ],
            ans: 0,
            explain: "Bản Sonata số 5 cho violin và piano ở giọng Pha trưởng, Op. 24 của Beethoven nổi tiếng thế giới với tên gọi Sonata Mùa xuân (Spring Sonata)."
          },
          {
            q: "Biên chế tứ tấu dây (String Quartet) tiêu chuẩn trong âm nhạc cổ điển bao gồm 4 nhạc cụ nào?",
            options: [
              "2 Violin, 1 Viola, 1 Cello",
              "1 Violin, 1 Flute, 1 Cello, 1 Piano",
              "1 Guitar, 1 Trống, 1 Bass, 1 Organ",
              "2 Kèn Trumpet, 1 Trombone, 1 Tuba"
            ],
            ans: 0,
            explain: "Tứ tấu dây cổ điển tiêu chuẩn luôn gồm 4 cây đàn dây họ violin: 2 đàn Violin (Violin I và Violin II), 1 đàn Viola và 1 đàn Cello."
          }
        ]
      }
    ]
  },

  {
    themeId: 2,
    themeTitle: "Chủ đề 2. Cuộc sống muôn màu",
    themeDesc: "Các hợp âm giọng Pha trưởng, đọc nhạc 2 bè, ca khúc kinh điển Mùa xuân của Tchaikovsky và tác phẩm Divertimento của Mozart",
    lessons: [
      {
        id: "c2_b1",
        num: 5,
        title: "Bài 1. Lí thuyết âm nhạc: Các hợp âm của giọng Pha trưởng",
        badge: "Hoà âm ứng dụng",
        objectives: [
          "Xác định được công thức, tên gọi và tính chất của các hợp âm ba chính, hợp âm ba phụ trong giọng Pha trưởng.",
          "Hiểu cấu tạo và chức năng giải tỏa của hợp âm bảy át (C7).",
          "Biết cách đặt hợp âm đệm cho ca khúc viết ở giọng Pha trưởng."
        ],
        sections: [
          {
            heading: "1. Cấu tạo hợp âm ba trên các bậc âm giọng Pha trưởng",
            type: "list",
            items: [
              "<strong>Khái niệm hợp âm ba:</strong> Được tạo thành bằng cách chồng hai quãng ba liên tiếp lên nhau tính từ âm gốc. Khoảng cách giữa các âm thành phần quyết định chất lượng (trưởng, thứ, tăng, giảm).",
              "<strong>Ba hợp âm ba chính (Bậc I, IV, V):</strong> Đều là các <strong>hợp âm trưởng</strong>, tạo cảm giác sáng sủa, khoẻ khoắn, vững chãi:\n• Bậc I: Hợp âm Pha trưởng (<strong>F</strong>: Pha - La - Đô)\n• Bậc IV: Hợp âm Si giáng trưởng (<strong>B♭</strong>: Si♭ - Rê - Pha)\n• Bậc V: Hợp âm Đô trưởng (<strong>C</strong>: Đô - Mi - Son).",
              "<strong>Bốn hợp âm ba phụ (Bậc II, III, VI, VII):</strong>\n• Bậc II: Hợp âm Son thứ (<strong>Gm</strong>: Son - Si♭ - Rê) - Hợp âm thứ êm dịu\n• Bậc III: Hợp âm La thứ (<strong>Am</strong>: La - Đô - Mi) - Hợp âm thứ mềm mại\n• Bậc VI: Hợp âm Rê thứ (<strong>Dm</strong>: Rê - Pha - La) - Hợp âm thứ sâu lắng\n• Bậc VII: Hợp âm Si giảm (<strong>Bdim</strong> hoặc <strong>B°</strong>: Si - Rê - Pha) - Hợp âm giảm tạo sự căng thẳng, chông chênh."
            ]
          },
          {
            heading: "2. Hợp âm bảy át (Dominant 7th - C7) & Ứng dụng đặt hợp âm",
            type: "list",
            items: [
              "<strong>Cấu tạo hợp âm C7:</strong> Được xây dựng trên bậc V của giọng Pha trưởng (nốt Đô) bằng cách chồng thêm một quãng ba nhỏ lên trên hợp âm Đô trưởng: <strong>Đô – Mi – Son – Si♭</strong> (gồm hợp âm ba trưởng C cộng thêm quãng bảy thứ Đô - Si♭).",
              "<strong>Công năng hoà âm:</strong> Hợp âm C7 có tính nghịch và sức căng rất mạnh, luôn có xu hướng thôi thúc mãnh liệt giải về hợp âm chủ F.",
              "<strong>Quy tắc đặt hợp âm cơ bản:</strong> Đầu bài và kết bài đặt hợp âm chủ F. Các nốt nhấn giai điệu rơi vào âm nào của hợp âm nào thì ưu tiên chọn hợp âm đó (ví dụ: giai điệu có Si♭ - Rê chọn B♭ hoặc Gm; giai điệu có Mi - Son chọn C hoặc C7)."
            ]
          }
        ],
        quiz: [
          {
            q: "Ba hợp âm ba chính của giọng Pha trưởng được xây dựng trên các bậc âm nào và là loại hợp âm gì?",
            options: [
              "Bậc I (F), bậc IV (B♭), bậc V (C) và đều là hợp âm trưởng",
              "Bậc I (Dm), bậc IV (Gm), bậc V (Am) và đều là hợp âm thứ",
              "Bậc II (Gm), bậc III (Am), bậc VI (Dm) và là hợp âm thứ",
              "Bậc I (F), bậc III (Am), bậc V (C) và là hợp âm giảm"
            ],
            ans: 0,
            explain: "Ba hợp âm chính của mọi giọng trưởng luôn nằm ở các bậc I, IV, V và đều là các hợp âm ba trưởng: F (Pha trưởng), B♭ (Si giáng trưởng) và C (Đô trưởng)."
          },
          {
            q: "Hợp âm bảy át của giọng Pha trưởng có tên gọi và thành phần các nốt là:",
            options: [
              "Hợp âm C7, gồm các nốt: Đô – Mi – Son – Si♭",
              "Hợp âm F7, gồm các nốt: Pha – La – Đô – Mi♭",
              "Hợp âm G7, gồm các nốt: Son – Si – Rê – Pha",
              "Hợp âm D7, gồm các nốt: Rê – Pha♯ – La – Đô"
            ],
            ans: 0,
            explain: "Hợp âm bảy át xây dựng trên bậc V (Đô) của Pha trưởng là C7, gồm các nốt Đô - Mi - Son - Si giáng."
          },
          {
            q: "Hợp âm xây dựng trên bậc VI của giọng Pha trưởng là hợp âm gì?",
            options: [
              "Hợp âm Rê thứ (Dm: Rê – Pha – La)",
              "Hợp âm Son thứ (Gm)",
              "Hợp âm La thứ (Am)",
              "Hợp âm Si giảm (Bdim)"
            ],
            ans: 0,
            explain: "Bậc VI của Pha trưởng là nốt Rê, hợp âm ba xây dựng trên bậc này là Rê thứ (Dm: Rê - Pha - La)."
          }
        ]
      },
      {
        id: "c2_b2",
        num: 6,
        title: "Bài 2. Đọc nhạc: Bài đọc nhạc số 2, giọng Pha trưởng",
        badge: "Đọc nhạc hai bè",
        objectives: [
          "Luyện tập quãng ba đi lên, đi xuống và các âm ổn định giọng Pha trưởng.",
          "Thực hành đọc xướng âm bài đọc nhạc 2 bè hoà quyện, đúng cao độ và trường độ.",
          "Biết gõ đệm tiết tấu và sáng tạo câu nhạc ngắn giọng Pha trưởng."
        ],
        sections: [
          {
            heading: "1. Khởi động & Luyện quãng ba",
            type: "list",
            items: [
              "<strong>Đọc gam & Trục âm:</strong> Xướng âm gam Pha trưởng từ F4 lên F5 và ngược lại. Đọc trục âm ba F - A - C.",
              "<strong>Luyện quãng ba nối tiếp:</strong> Pha - La, Son - Si♭, La - Đô, Si♭ - Rê... giúp đôi tai nhạy bén với cấu trúc hợp âm ba và tạo sự chuẩn xác khi vào bài đọc nhạc 2 bè."
            ]
          },
          {
            heading: "2. Kĩ thuật ghép 2 bè hoà tấu",
            type: "list",
            items: [
              "<strong>Luyện riêng từng bè:</strong> Bè 1 (bè trên, giai điệu chính bay bổng); Bè 2 (bè dưới, giai điệu trầm ấm đi bè quãng ba hoặc quãng sáu song song). Mỗi nhóm tập thật nhuần nhuyễn bè của mình.",
              "<strong>Ghép bè chậm:</strong> Cả hai nhóm lắng nghe nhau, bè dưới không được hát to át bè trên; giữ vững nhịp độ, nghe được sự cộng hưởng hoà âm khi hai nốt vang lên cùng lúc.",
              "<strong>Gõ đệm tiết tấu:</strong> Phối hợp gõ phách bằng thanh phách hoặc xúc xắc theo mô hình nhịp 2/4."
            ]
          }
        ],
        quiz: [
          {
            q: "Khi đọc nhạc hai bè, yêu cầu quan trọng nhất về mặt âm lượng là:",
            options: [
              "Cân bằng âm lượng giữa hai bè, lắng nghe nhau để tạo sự hoà quyện mà không lấn át bè giai điệu chính",
              "Bè trầm phải hát thật to át hoàn toàn bè cao",
              "Bè cao phải hát gào thét để không ai nghe thấy bè dưới",
              "Hai bè hát ở hai nhịp độ hoàn toàn khác nhau"
            ],
            ans: 0,
            explain: "Đọc nhạc hai bè đòi hỏi tai nghe nhạy bén và kiểm soát âm lượng để hai giọng hòa quyện thành các hợp âm chuẩn mà không bên nào lấn át bên nào."
          },
          {
            q: "Khoảng cách giữa hai nốt Pha (F) và La (A) trong gam Pha trưởng là quãng mấy?",
            options: [
              "Quãng 3 trưởng (2 cung)",
              "Quãng 3 thứ (1,5 cung)",
              "Quãng 2 trưởng (1 cung)",
              "Quãng 4 đúng (2,5 cung)"
            ],
            ans: 0,
            explain: "Khoảng cách từ Pha đến La gồm 2 cung (Pha-Son 1 cung, Son-La 1 cung), đây là một quãng 3 trưởng."
          },
          {
            q: "Bè 2 trong một bài đọc nhạc hai bè thường có vai trò gì?",
            options: [
              "Tạo nền hoà âm (thường đi quãng 3 hoặc quãng 6 song song với bè 1)",
              "Chỉ hát một nốt duy nhất suốt bài",
              "Chỉ đọc lời văn xuôi không có cao độ",
              "Thay thế hoàn toàn nhạc cụ gõ"
            ],
            ans: 0,
            explain: "Bè 2 đóng vai trò hòa thanh phụ họa, thường di chuyển quãng 3 hoặc quãng 6 tương ứng với bè 1 để tạo màu sắc đa âm phong phú."
          }
        ]
      },
      {
        id: "c2_b3",
        num: 7,
        title: "Bài 3. Hát: Mùa xuân (P. I. Tchaikovsky)",
        badge: "Thanh nhạc cổ điển thế giới",
        objectives: [
          "Hát đúng cao độ, trường độ giai điệu ca khúc cổ điển 'Mùa xuân' của danh hoạ âm nhạc P. I. Tchaikovsky.",
          "Kiểm soát các bước nhảy quãng rộng và điều tiết hơi thở thanh thoát.",
          "Phối hợp hát 2 bè hoà hợp và thể hiện nét tươi sáng, lãng mạn của thiên nhiên."
        ],
        sections: [
          {
            heading: "1. Tác giả & Hoàn cảnh ra đời tác phẩm",
            type: "list",
            items: [
              "<strong>Tác giả:</strong> <strong>Pyotr Ilyich Tchaikovsky</strong> (1840 – 1893), đại thụ âm nhạc cổ điển Nga thế kỉ XIX, tác giả của các vở ba lê kinh điển thế giới như 'Hồ thiên nga', 'Kẹp hạt dẻ', 'Người đẹp ngủ trong rừng'...",
              "<strong>Tác phẩm 'Mùa xuân':</strong> Bài hát được phỏng dịch lời Việt bởi NSND Trung Kiên; giai điệu mang phong cách lãng mạn châu Âu thế kỉ XIX, mô tả bức tranh cỏ cây đâm chồi nảy lộc, chim hót ríu rít khi nàng xuân gõ cửa.",
              "<strong>Tính chất âm nhạc:</strong> Trong sáng, nhịp nhàng, thanh nhã, vui tươi và dạt dào niềm yêu đời."
            ]
          },
          {
            heading: "2. Kĩ thuật thanh nhạc bài hát cổ điển",
            type: "list",
            items: [
              "<strong>Kiểm soát bước nhảy quãng:</strong> Ca khúc có những bước nhảy quãng 4, quãng 5 và quãng 6; người hát cần chuẩn bị vị trí âm thanh ở hàm trên (đặt âm thanh vào xoang trán) trước khi cất tiếng hát nốt cao để không bị chênh phô.",
              "<strong>Hát hai bè:</strong> Một số câu hát kết đoạn được phối hai bè; cần giữ hơi thật sâu, nhả chữ nhẹ nhàng, kết hợp ngân dài đủ số phách quy định."
            ]
          }
        ],
        quiz: [
          {
            q: "Tác giả của ca khúc kinh điển 'Mùa xuân' được dịch lời Việt bởi NSND Trung Kiên là nhạc sĩ nổi tiếng nào?",
            options: [
              "P. I. Tchaikovsky (Nga)",
              "W. A. Mozart (Áo)",
              "L. V. Beethoven (Đức)",
              "F. Chopin (Ba Lan)"
            ],
            ans: 0,
            explain: "Ca khúc 'Mùa xuân' là sáng tác của nhà soạn nhạc vĩ đại người Nga Pyotr Ilyich Tchaikovsky."
          },
          {
            q: "Để hát chuẩn xác các nốt có bước nhảy quãng rộng trong ca khúc cổ điển, người hát cần chú ý kĩ thuật gì?",
            options: [
              "Chuẩn bị vị trí âm thanh cao (khoang cộng minh) và điều tiết hơi thở ổn định trước khi phát âm",
              "Gồng cứng cổ họng và hát thật mạnh để đẩy nốt lên",
              "Hát lướt qua thật nhanh để người nghe không phát hiện nốt phô",
              "Hạ thấp cằm sát ngực"
            ],
            ans: 0,
            explain: "Hát các bước nhảy quãng đòi hỏi định hình vị trí âm thanh trong khoang cộng minh đầu và chuẩn bị luồng hơi vững vàng từ cơ hoành."
          },
          {
            q: "Sắc thái chủ đạo của bài hát 'Mùa xuân' của Tchaikovsky là:",
            options: [
              "Trong sáng, thanh nhã, lãng mạn và tràn đầy sức sống tươi mới",
              "Hùng tráng, dữ dội, căm thù giặc",
              "U sầu, tang tóc, cô đơn",
              "Hối hả, gấp gáp, ma mị"
            ],
            ans: 0,
            explain: "Bài hát miêu tả mùa xuân thiên nhiên tươi đẹp với giai điệu lãng mạn cổ điển trong sáng và tràn trề nhựa sống."
          }
        ]
      },
      {
        id: "c2_b4",
        num: 8,
        title: "Bài 4. Nhạc cụ số 2; nghe Divertimento của Mozart",
        badge: "Nhạc cụ & Thưởng thức",
        objectives: [
          "Diễn tấu thuần thục Bài nhạc cụ số 2 giọng Pha trưởng với hai bè giai điệu hoà quyện.",
          "Nắm bắt được thể loại Divertimento và cấu trúc tứ tấu dây thời kì Cổ điển.",
          "Cảm nhận được tính chất giải trí thanh lịch, tươi vui trong Divertimento số 3 của Mozart."
        ],
        sections: [
          {
            heading: "1. Diễn tấu Bài nhạc cụ số 2 (Hai bè giọng Pha trưởng)",
            type: "list",
            items: [
              "<strong>Phân bè nhạc cụ:</strong> Bè 1 giữ chủ đề chính, bè 2 đi giai điệu đệm hoà âm.",
              "<strong>Kĩ thuật liền tiếng & Nhả ngón:</strong> Ngón tay bấm dứt khoát trên lỗ bấm/phím đàn nhưng chuyển ngón mềm mại; giữ trường độ các nốt đen và nốt móc đơn đều đặn.",
              "<strong>Chuyển soạn:</strong> Thử nghiệm chuyển một câu giai điệu trong ca khúc 'Mùa xuân' của Tchaikovsky sang nhạc cụ đang học."
            ]
          },
          {
            heading: "2. Thưởng thức âm nhạc: Divertimento số 3, giọng Pha trưởng (W. A. Mozart)",
            type: "list",
            items: [
              "<strong>Khái niệm Divertimento:</strong> Là thể loại âm nhạc thính phòng phổ biến ở thế kỉ XVIII, mang tính chất giải trí nhẹ nhàng, vui vẻ, duyên dáng, thường được biểu diễn trong các buổi tiệc hoặc lễ hội quý tộc.",
              "<strong>Tác giả:</strong> <strong>Wolfgang Amadeus Mozart</strong> (1756 – 1791) - thiên tài âm nhạc kiệt xuất người Áo thuộc trường phái Cổ điển Vienna.",
              "<strong>Tác phẩm:</strong> <strong>Divertimento số 3, K. 138, giọng Pha trưởng</strong>, viết cho tứ tấu dây (Violin I, Violin II, Viola, Cello).",
              "<strong>Đặc điểm Chương I (Allegro):</strong> Tốc độ nhanh, giai điệu lấp lánh như những giọt nước mùa xuân, thể hiện sự đối đáp cực kì hóm hỉnh và ăn ý giữa các cây đàn dây."
            ]
          }
        ],
        quiz: [
          {
            q: "Thể loại âm nhạc 'Divertimento' trong lịch sử âm nhạc cổ điển phương Tây mang tính chất chủ đạo là gì?",
            options: [
              "Âm nhạc giải trí nhẹ nhàng, tươi vui, thanh lịch và duyên dáng",
              "Âm nhạc tang lễ trang nghiêm, u uất",
              "Âm nhạc tôn giáo huyền bí dùng trong nhà thờ",
              "Âm nhạc kịch tính dữ dội mô tả thảm hoạ thiên tai"
            ],
            ans: 0,
            explain: "Divertimento (bắt nguồn từ tiếng Ý nghĩa là giải trí/tiêu khiển) là thể loại nhạc thính phòng có giai điệu vui tươi, trang nhã, thường được chơi trong các buổi dạ tiệc."
          },
          {
            q: "Tác phẩm Divertimento số 3, giọng Pha trưởng (K. 138) của Mozart được viết cho dàn nhạc cụ nào?",
            options: [
              "Tứ tấu dây (2 Violin, Viola, Cello)",
              "Dàn hợp xướng thiếu nhi và organ",
              "Dàn nhạc kèn quân đội",
              "Độc tấu đàn Piano"
            ],
            ans: 0,
            explain: "Tác phẩm Divertimento số 3, K. 138 của Mozart được sáng tác cho biên chế tứ tấu dây gồm Violin I, Violin II, Viola và Cello."
          },
          {
            q: "Tốc độ của Chương I bản Divertimento số 3 là Allegro, nghĩa là biểu diễn ở tốc độ nào?",
            options: [
              "Nhanh, vui vẻ và hoạt bát",
              "Rất chậm rãi, buồn bã",
              "Tốc độ vừa phải như bước đi thong thả",
              "Cực kì chậm và kéo dài lê thê"
            ],
            ans: 0,
            explain: "Thuật ngữ âm nhạc Allegro trong tiếng Ý chỉ tốc độ nhanh, vui vẻ, linh hoạt và rộn rã."
          }
        ]
      }
    ]
  },

  {
    themeId: 3,
    themeTitle: "Chủ đề 3. Việt Nam quê hương tôi",
    themeDesc: "Lí thuyết giọng Rê thứ tự nhiên và hoà thanh, dân ca Nam Bộ Lí qua kêu, lịch sử âm nhạc Việt Nam và Aria Cô Sao",
    lessons: [
      {
        id: "c3_b1",
        num: 9,
        title: "Bài 1. Lí thuyết âm nhạc: Giọng Rê thứ; đọc nhạc số 3",
        badge: "Lí thuyết & Đọc nhạc",
        objectives: [
          "Xác định được hoá biểu, âm chủ, hàng âm và phân biệt Rê thứ tự nhiên với Rê thứ hoà thanh.",
          "Nhận biết được dấu hoá bất thường Đô thăng (C♯) ở bậc VII trong giọng Rê thứ hoà thanh.",
          "Đọc chính xác Bài đọc nhạc số 3 ở giọng Rê thứ kết hợp gõ đệm phách."
        ],
        sections: [
          {
            heading: "1. Giọng Rê thứ tự nhiên & Rê thứ hoà thanh (D minor)",
            type: "list",
            items: [
              "<strong>Hoá biểu & Âm chủ:</strong> Hoá biểu có một dấu giáng Si♭ (giống giọng Pha trưởng song song); âm chủ (bậc I) là nốt <strong>Rê</strong>.",
              "<strong>Gam Rê thứ tự nhiên:</strong> Gồm chuỗi âm: <strong>Rê – Mi – Pha – Son – La – Si♭ – Đô – Rê</strong> (D – E – F – G – A – B♭ – C – D). Các âm ổn định là bậc I (Rê), bậc III (Pha), bậc V (La) tạo thành hợp âm ba chủ Dm.",
              "<strong>Gam Rê thứ hoà thanh (D harmonic minor):</strong> Được hình thành bằng cách <strong>nâng bậc VII (nốt Đô) lên nửa cung thành Đô thăng (C♯)</strong> bằng một dấu thăng bất thường trong bài.\nHàng âm: <strong>Rê – Mi – Pha – Son – La – Si♭ – Đô♯ – Rê</strong>.",
              "<strong>Khoảng cách đặc biệt:</strong> Xuất hiện quãng hai tăng (Si♭ - Đô♯ = 1,5 cung) giữa bậc VI và bậc VII, tạo nên màu sắc phương Đông huyền bí, sâu lắng và sức hút mãnh liệt của bậc VII (Đô♯) về âm chủ Rê.",
              "<strong>Tính chất âm nhạc:</strong> Trữ tình, tha thiết, đượm buồn, mềm mại, sâu lắng hoặc kịch tính."
            ]
          },
          {
            heading: "2. Thực hành: Bài đọc nhạc số 3, giọng Rê thứ",
            type: "list",
            items: [
              "<strong>Tiến trình luyện đọc:</strong> (1) Xướng âm gam Rê thứ tự nhiên và Rê thứ hoà thanh; (2) So sánh cao độ giữa nốt Đô thường và Đô thăng (C♯); (3) Đọc âm hình tiết tấu có móc đơn, nốt đen chấm dôi; (4) Ghép cao độ từng câu từ chậm đến nhanh dần.",
              "<strong>Gõ đệm:</strong> Thực hành gõ tiết tấu theo mẫu sách giáo khoa, giữ nhịp đều đặn."
            ]
          }
        ],
        quiz: [
          {
            q: "Điểm khác biệt cốt lõi giữa gam Rê thứ hoà thanh so với gam Rê thứ tự nhiên là gì?",
            options: [
              "Bậc VII (nốt Đô) được nâng lên nửa cung thành Đô thăng (C♯)",
              "Hoá biểu có thêm dấu Fa thăng",
              "Âm chủ đổi từ nốt Rê sang nốt Pha",
              "Bỏ đi dấu Si giáng ở đầu khuông nhạc"
            ],
            ans: 0,
            explain: "Điệu thức thứ hoà thanh luôn nâng âm bậc VII lên nửa cung bằng dấu hoá bất thường; đối với Rê thứ thì nốt Đô được nâng thành Đô♯."
          },
          {
            q: "Các âm ổn định bậc I, III, V của giọng Rê thứ lần lượt là những nốt nào?",
            options: [
              "Rê – Pha – La",
              "Rê – Pha♯ – La",
              "Pha – La – Đô",
              "Son – Si♭ – Rê"
            ],
            ans: 0,
            explain: "Các bậc I, III, V của giọng Rê thứ là Rê, Pha, La tạo nên hợp âm ba chủ Rê thứ (Dm)."
          },
          {
            q: "Quảng khoảng cách giữa bậc VI (Si♭) và bậc VII (Đô♯) trong Rê thứ hoà thanh có độ lớn là bao nhiêu?",
            options: [
              "1,5 cung (Quãng 2 tăng)",
              "0,5 cung (Nửa cung)",
              "1 cung (Quãng 2 trưởng)",
              "2 cung (Quãng 3 trưởng)"
            ],
            ans: 0,
            explain: "Khoảng cách từ Si♭ lên Đô♯ có độ lớn bằng 1,5 cung, là quãng hai tăng (augmented second) đặc trưng tạo màu sắc âm thanh quyến rũ của giọng thứ hoà thanh."
          }
        ]
      },
      {
        id: "c3_b2",
        num: 10,
        title: "Bài 2. Hát: Lí qua kêu",
        badge: "Dân ca Nam Bộ",
        objectives: [
          "Hát đúng giai điệu, tiết tấu và thể hiện được tính chất hóm hỉnh, mộc mạc của bài dân ca Nam Bộ 'Lí qua kêu'.",
          "Thực hiện chuẩn xác các nét luyến láy dân ca và phát âm tự nhiên ngữ điệu phương Nam.",
          "Sáng tạo đặt lời mới cho bài Lí theo chủ đề thầy cô, mái trường hoặc quê hương."
        ],
        sections: [
          {
            heading: "1. Xuất xứ & Màu sắc văn hoá dân gian Nam Bộ",
            type: "list",
            items: [
              "<strong>Thể loại:</strong> 'Lí' là một trong những làn điệu dân ca độc đáo, phong phú bậc nhất của vùng đất Nam Bộ trù phú, phản ánh cuộc sống lao động, tâm tư tình cảm giản dị, chân chất của người dân miền sông nước.",
              "<strong>Tác phẩm:</strong> Dân ca Nam Bộ 'Lí qua kêu' (kí âm Hoa Sim); giai điệu rộn ràng, vui tươi, lời ca dí dỏm, mượn hình ảnh tiếng chim quạ kêu ('quạ' đọc chệch thành 'qua') để chuyện trò, gửi gắm tình cảm thân thương.",
              "<strong>Từ ngữ địa phương đặc sắc:</strong> 'Dìa' nghĩa là 'về' ('Trưa trật trưa trầy em hổng chịu dìa...'); 'Trưa trật trưa trầy' chỉ thời điểm đã quá trưa."
            ]
          },
          {
            heading: "2. Hướng dẫn kĩ thuật hát dân ca & Vận dụng",
            type: "list",
            items: [
              "<strong>Luyến láy dân ca:</strong> Chú ý các nốt luyến 2 nốt, 3 nốt mềm mại, đúng cao độ, không luyến thô thiển làm biến dạng thanh điệu tiếng Việt.",
              "<strong>Khẩu hình & Ngữ điệu:</strong> Phát âm tự nhiên, khuôn mặt tươi tắn, ánh mắt hóm hỉnh.",
              "<strong>Gõ đệm & Đặt lời mới:</strong> Sử dụng thanh phách, mõ tre hoặc gõ tay theo phách; thực hành đặt lời mới 4 câu lục bát hoặc song thất lục bát ca ngợi tình bạn, quê hương."
            ]
          }
        ],
        quiz: [
          {
            q: "Bài hát 'Lí qua kêu' thuộc thể loại âm nhạc dân gian của vùng miền nào trên đất nước ta?",
            options: [
              "Dân ca Nam Bộ",
              "Dân ca Quan họ Bắc Ninh",
              "Dân ca Ví, Giặm Nghệ Tĩnh",
              "Dân ca Tây Nguyên"
            ],
            ans: 0,
            explain: "'Lí qua kêu' là làn điệu dân ca nổi tiếng mang đậm phong vị mộc mạc, dí dỏm của người dân Nam Bộ."
          },
          {
            q: "Từ ngữ địa phương 'dìa' trong câu hát 'sao hổng chịu dìa' của bài dân ca có nghĩa là gì?",
            options: [
              "Về",
              "Đi",
              "Đến",
              "Ăn"
            ],
            ans: 0,
            explain: "Trong phương ngữ Nam Bộ, từ 'dìa' chính là từ 'về' trong tiếng Việt toàn dân."
          },
          {
            q: "Yêu cầu biểu cảm nổi bật nhất khi trình bày bài hát 'Lí qua kêu' là:",
            options: [
              "Vui tươi, hóm hỉnh, mộc mạc và chân tình",
              "Bi tráng, căm thù giặc xâm lăng",
              "Buồn bã, xót xa, ai oán",
              "Nghiêm trang, kính cẩn như nghi lễ"
            ],
            ans: 0,
            explain: "Làn điệu Lí qua kêu có tính chất tươi vui, rộn ràng, hóm hỉnh và đậm chất tiếu lâm dân gian thân thuộc."
          }
        ]
      },
      {
        id: "c3_b3",
        num: 11,
        title: "Bài 3. Nhạc cụ số 3, giọng Rê thứ",
        badge: "Thực hành nhạc cụ",
        objectives: [
          "Diễn tấu chính xác cao độ, trường độ Bài nhạc cụ số 3 ở giọng Rê thứ với tốc độ nhanh vừa phải.",
          "Xử lí tinh tế các dấu hoá bất thường (như Đô thăng C♯) và kĩ thuật legato.",
          "Phối hợp chơi tiếp sức nhóm nhạc cụ và dùng nhạc cụ gõ đệm nhịp nhàng."
        ],
        sections: [
          {
            heading: "1. Kĩ thuật luyện tập bài nhạc cụ giọng Rê thứ",
            type: "list",
            items: [
              "<strong>Xử lí dấu hoá bất thường:</strong> Trong bài xuất hiện nốt Đô thăng (C♯), người chơi cần ghi nhớ chính xác thế bấm ngón riêng biệt của Đô♯ trên recorder/kèn phím.",
              "<strong>Kiểm soát ngón và nhịp:</strong> Giữ ngón tay cong tự nhiên, ngón bấm không dính sát phím gây rè tiếng; duy trì nhịp độ Allegretto ổn định từ đầu đến cuối bài."
            ]
          },
          {
            heading: "2. Hoạt động biểu diễn tiếp sức",
            type: "list",
            items: [
              "<strong>Chia nhóm chơi tiếp sức:</strong> Nhóm 1 chơi câu 1, nhóm 2 chơi câu 2; chuyển giao nhịp nhàng ở phách lấy đà.",
              "<strong>Đệm gõ phụ hoạ:</strong> Dùng trống lục lạc (tambourine) hoặc phách tre gõ theo tiết tấu nốt đen - móc đơn."
            ]
          }
        ],
        quiz: [
          {
            q: "Khi chơi Bài nhạc cụ số 3 ở giọng Rê thứ hoà thanh, nốt hoá bất thường cần đặc biệt lưu ý thế ngón là:",
            options: [
              "Nốt Đô thăng (C♯)",
              "Nốt Sol thăng (G♯)",
              "Nốt Si thăng (B♯)",
              "Nốt Rê giáng (D♭)"
            ],
            ans: 0,
            explain: "Trong giọng Rê thứ hoà thanh, nốt Đô thăng (C♯) ở bậc VII là nốt có dấu thăng bất thường cần chú ý thế bấm ngón chính xác."
          },
          {
            q: "Phương pháp chơi nhạc cụ 'tiếp sức' giữa hai nhóm học sinh nhằm mục đích rèn luyện kĩ năng gì?",
            options: [
              "Khả năng giữ nhịp độ liên tục và chuyển tiếp nhịp nhàng giữa các câu nhạc",
              "Xem nhóm nào thổi to hơn để chiến thắng",
              "Để một nhóm được nghỉ ngơi không cần tập luyện",
              "Thay đổi tông giọng bất kì giữa chừng"
            ],
            ans: 0,
            explain: "Diễn tấu tiếp sức giúp rèn luyện khả năng lắng nghe tập thể, phản xạ vào phách đúng lúc và giữ vững tốc độ bản nhạc không bị ngắt quãng."
          },
          {
            q: "Tư thế ngón tay chuẩn khi chơi nhạc cụ bấm ngón (như recorder, keyboard) là:",
            options: [
              "Các ngón tay hơi cong tự nhiên, phần thịt đầu ngón tiếp xúc bịt kín lỗ bấm hoặc phím đàn",
              "Các ngón tay duỗi thẳng đơ và gồng cứng",
              "Dùng móng tay bấm mạnh vào lỗ nhạc cụ",
              "Chỉ dùng một ngón tay trỏ duy nhất để chơi tất cả các nốt"
            ],
            ans: 0,
            explain: "Tư thế ngón tay cong tự nhiên hình vòm giúp linh hoạt khi di chuyển ngón và bịt kín lỗ bấm nhẹ nhàng, không gây mỏi cơ."
          }
        ]
      },
      {
        id: "c3_b4",
        num: 12,
        title: "Bài 4. Thường thức âm nhạc: Lịch sử âm nhạc Việt Nam & Aria Cô Sao",
        badge: "Lịch sử & Nhạc kịch",
        objectives: [
          "Trình bày được 3 thời kì lớn của lịch sử âm nhạc Việt Nam và các thành tựu, nhạc cụ, tác phẩm tiêu biểu.",
          "Hiểu khái niệm thể loại Aria trong nghệ thuật nhạc kịch (Opera).",
          "Phân tích hoàn cảnh ra đời, nội dung và vẻ đẹp xúc động của Aria Cô Sao (Đỗ Nhuận)."
        ],
        sections: [
          {
            heading: "1. Ba thời kì lớn trong lịch sử âm nhạc Việt Nam",
            type: "list",
            items: [
              "<strong>Thời kì 1: Dựng nước và giữ nước đến đầu thế kỉ X:</strong>\n• Âm nhạc gắn liền với lao động sản xuất, tín ngưỡng và nghi lễ sinh hoạt cộng đồng.\n• Thời Văn Lang – Âu Lạc để lại di sản vô giá: <strong>Trống đồng Đông Sơn, Đàn đá, Cồng chiêng, Khèn, Tù và, Trống da</strong>.\n• Thời kì Bắc thuộc: Giao lưu âm nhạc Việt – Hán và tiếp thu ảnh hưởng văn hoá Ấn Độ ở phía Nam (văn hoá Chăm-pa).",
              "<strong>Thời kì 2: Thời kì phong kiến độc lập tự chủ (Thế kỉ X – giữa XIX):</strong>\n• Phát triển song hành rực rỡ giữa <strong>Âm nhạc dân gian</strong> (hát chèo, tuồng, quan họ, ca trù, hát xoan) và <strong>Âm nhạc cung đình</strong> chuyên nghiệp.\n• Thời Lý – Trần: Hình thành dàn nhạc cung đình và nghệ thuật Chèo.\n• Thời Hậu Lê – Nguyễn: Đỉnh cao của <strong>Nhã nhạc cung đình Huế</strong> (Di sản văn hoá phi vật thể nhân loại), dàn Bát âm, dàn Ngũ âm, ca Huế.",
              "<strong>Thời kì 3: Từ giữa thế kỉ XIX đến nay (Hiện đại hoá & Kháng chiến):</strong>\n• Tiếp thu hệ thống lí thuyết và nhạc cụ phương Tây; ra đời phong trào <strong>Tân nhạc</strong> (ca khúc cải cách) kết hợp điệu thức dân tộc với hoà âm phương Tây.\n• Giai đoạn trước 1945: 'Cùng nhau đi hồng binh' (Đinh Nhu), 'Tiếng gọi thanh niên' (Lưu Hữu Phước), 'Du kích ca' (Đỗ Nhuận)...\n• Giai đoạn kháng chiến 1945 – 1975: Âm nhạc cách mạng bùng nổ đỉnh cao với 'Trường ca Sông Lô' (Văn Cao), 'Hò kéo pháo' (Hoàng Vân), 'Giải phóng Điện Biên' (Đỗ Nhuận)...\n• Giai đoạn sau 1975 đến nay: Âm nhạc phát triển đa dạng (giao hưởng, hợp xướng, nhạc nhẹ); năm 1980 nghệ sĩ Đặng Thái Sơn đoạt giải Nhất cuộc thi Piano quốc tế Chopin."
            ]
          },
          {
            heading: "2. Thưởng thức âm nhạc: Aria Cô Sao trong vở opera 'Cô Sao' (Đỗ Nhuận)",
            type: "list",
            items: [
              "<strong>Khái niệm Aria:</strong> Khúc hát độc tấu của nhân vật chính trong vở nhạc kịch (Opera), có dàn nhạc đệm, nhằm bộc lộ chiều sâu nội tâm, thế giới cảm xúc và tâm trạng phức tạp của nhân vật tại một khúc quanh bi kịch.",
              "<strong>Vở nhạc kịch 'Cô Sao':</strong> Là vở <strong>Opera đầu tiên của Việt Nam</strong> do nhạc sĩ <strong>Đỗ Nhuận</strong> sáng tác, ra mắt năm 1965 (gồm 3 màn), kể về cuộc đời đau khổ nhưng kiên cường của cô gái dân tộc Thái tên là A Sao dưới ách áp bức của phong kiến thực dân, sau đó được giác ngộ cách mạng.",
              "<strong>Aria Cô Sao:</strong> Trích đoạn nhân vật A Sao khi bị giam cầm trong rừng sâu, cất tiếng hát nghẹn ngào, day dứt, nhớ thương bản làng và khao khát tự do; âm nhạc giàu chất liệu dân ca Tây Bắc, lúc chậm rãi tự sự, lúc nghẹn ngào uất nghẹn dâng trào."
            ]
          }
        ],
        quiz: [
          {
            q: "Nhạc cụ cổ truyền nào là biểu tượng rực rỡ cho nền văn minh nông nghiệp lúa nước thời kì Văn Lang - Âu Lạc?",
            options: [
              "Trống đồng Đông Sơn và Đàn đá",
              "Đàn Guitar điện và Kèn Saxophone",
              "Đàn Piano và Đàn Cello",
              "Đàn Accordion"
            ],
            ans: 0,
            explain: "Trống đồng (tiêu biểu là trống đồng Đông Sơn, Ngọc Lũ) và Đàn đá là những nhạc cụ cổ sơ thiêng liêng biểu trưng cho thời kì dựng nước Văn Lang - Âu Lạc."
          },
          {
            q: "Vở nhạc kịch (Opera) đầu tiên của nền âm nhạc bác học hiện đại Việt Nam là tác phẩm nào, do ai sáng tác?",
            options: [
              "Vở nhạc kịch 'Cô Sao' của nhạc sĩ Đỗ Nhuận",
              "Vở nhạc kịch 'Lá đỏ' của nhạc sĩ Đỗ Hồng Quân",
              "Vở kịch thơ 'Vũ Như Tô' của Nguyễn Huy Tưởng",
              "Vở ca kịch 'Trương Chi' của Văn Cao"
            ],
            ans: 0,
            explain: "Vở nhạc kịch 'Cô Sao' (công diễn lần đầu năm 1965) của nhạc sĩ Đỗ Nhuận là tác phẩm nhạc kịch Opera đầu tiên của nền âm nhạc Việt Nam."
          },
          {
            q: "Trong nghệ thuật nhạc kịch (Opera), thuật ngữ 'Aria' dùng để chỉ:",
            options: [
              "Khúc hát đơn ca độc lập của nhân vật chính nhằm diễn tả sâu sắc tâm trạng nội tâm",
              "Đoạn nhạc dạo đầu do dàn kèn gõ biểu diễn trước khi mở màn",
              "Màn múa tập thể của các diễn viên phụ hoạ",
              "Lời nói thoại nhanh không có giai điệu giữa các nhân vật"
            ],
            ans: 0,
            explain: "Aria là khúc hát solo độc lập dành cho một giọng ca trong nhạc kịch, nơi nhân vật trải lòng và biểu đạt những cung bậc cảm xúc thầm kín sâu sắc nhất."
          }
        ]
      }
    ]
  },

  {
    themeId: 4,
    themeTitle: "Chủ đề 4. Giai điệu kí ức",
    themeDesc: "Hợp âm giọng Rê thứ, kiệt tác Trường ca Sông Lô, đọc nhạc 2 bè, hát hợp xướng Cho tôi yêu và kĩ thuật nảy tiếng nhạc cụ",
    lessons: [
      {
        id: "c4_b1",
        num: 13,
        title: "Bài 1. Lí thuyết: Các hợp âm giọng Rê thứ; nghe Trường ca Sông Lô",
        badge: "Hoà âm & Trường ca",
        objectives: [
          "Xác định được các hợp âm ba chính, hợp âm ba phụ trong điệu thức Rê thứ tự nhiên và Rê thứ hoà thanh.",
          "Hiểu rõ sự biến đổi của hợp âm bậc V từ thứ (Am) sang trưởng (A) và hợp âm bảy át (A7).",
          "Nắm được đặc điểm thể loại Trường ca và cảm thụ thiên anh hùng ca 'Trường ca Sông Lô' của Văn Cao."
        ],
        sections: [
          {
            heading: "1. Các hợp âm của giọng Rê thứ (Dm)",
            type: "list",
            items: [
              "<strong>Ba hợp âm chính trong Rê thứ tự nhiên:</strong>\n• Bậc I: Hợp âm Rê thứ (<strong>Dm</strong>: Rê - Pha - La)\n• Bậc IV: Hợp âm Son thứ (<strong>Gm</strong>: Son - Si♭ - Rê)\n• Bậc V: Hợp âm La thứ (<strong>Am</strong>: La - Đô - Mi). Cả 3 hợp âm đều là hợp âm thứ, mang màu sắc êm dịu, mềm mại.",
              "<strong>Biến đổi trong Rê thứ hoà thanh (có nốt Đô♯):</strong>\n• Hợp âm bậc V chuyển thành <strong>hợp âm La trưởng (A: La – Đô♯ – Mi)</strong>.\n• Xuất hiện <strong>hợp âm bảy át A7 (La – Đô♯ – Mi – Son)</strong> với sức căng hút cực mạnh về hợp âm chủ Dm.",
              "<strong>Các hợp âm ba phụ trong hàng âm tự nhiên:</strong>\n• Bậc II: Hợp âm Mi giảm (<strong>E°</strong> hoặc <strong>Edim</strong>: Mi - Son - Si♭)\n• Bậc III: Hợp âm Pha trưởng (<strong>F</strong>: Pha - La - Đô)\n• Bậc VI: Hợp âm Si giáng trưởng (<strong>B♭</strong>: Si♭ - Rê - Pha)\n• Bậc VII: Hợp âm Đô trưởng (<strong>C</strong>: Đô - Mi - Son trong thể tự nhiên; khi sang hoà thanh bậc VII có Đô♯ biến thành hợp âm C♯dim)."
            ]
          },
          {
            heading: "2. Thưởng thức âm nhạc: Trường ca Sông Lô (Văn Cao)",
            type: "list",
            items: [
              "<strong>Khái niệm Trường ca:</strong> Là tác phẩm thanh nhạc quy mô lớn gồm nhiều đoạn nhạc có tính chất, hình tượng, tiết tấu và tốc độ tương phản nhưng thống nhất trong một mạch cốt truyện và chủ đề tư tưởng xuyên suốt.",
              "<strong>Hoàn cảnh sáng tác:</strong> Nhạc sĩ thiên tài <strong>Văn Cao</strong> (1923 – 1995) sáng tác kiệt tác này vào cuối năm 1947 sau chiến thắng vang dội trên sông Lô (thuộc chiến dịch Việt Bắc thu đông 1947).",
              "<strong>Cấu trúc 6 đoạn:</strong> Tác phẩm mở đầu bằng giai điệu mênh mang, trầm hùng miêu tả cảnh sông Lô tráng lệ; tiếp đến là nhịp điệu dồn dập tái hiện trận đánh thây giặc trôi trên dòng nước; rồi chuyển sang khúc hoan ca khải hoàn rộn rã của người dân dựng lại nhà cửa sau chiến thắng; kết thúc bằng niềm tin tất thắng vào tương lai tươi sáng của dân tộc.",
              "<strong>Ý nghĩa:</strong> Đỉnh cao chói lọi của nền tân nhạc Việt Nam, tác phẩm khí nhạc - thanh nhạc mẫu mực đạt tầm vóc kinh điển."
            ]
          }
        ],
        quiz: [
          {
            q: "Trong điệu thức Rê thứ hoà thanh, hợp âm xây dựng trên bậc V chuyển biến thành hợp âm nào dưới đây?",
            options: [
              "Hợp âm La trưởng (A) và hợp âm bảy át (A7)",
              "Hợp âm La thứ (Am)",
              "Hợp âm Son trưởng (G)",
              "Hợp âm Si giáng trưởng (B♭)"
            ],
            ans: 0,
            explain: "Do bậc VII được nâng lên thành Đô♯, hợp âm bậc V (La - Đô♯ - Mi) trở thành hợp âm La trưởng (A) và khi chồng thêm quãng bảy thành hợp âm bảy át A7."
          },
          {
            q: "Tác phẩm 'Trường ca Sông Lô' được nhạc sĩ Văn Cao sáng tác gắn liền với sự kiện lịch sử nào?",
            options: [
              "Chiến thắng Sông Lô trong chiến dịch Việt Bắc Thu - Đông năm 1947",
              "Chiến thắng Điện Biên Phủ năm 1954",
              "Khởi nghĩa Nam Kì năm 1940",
              "Chiến dịch Hồ Chí Minh năm 1975"
            ],
            ans: 0,
            explain: "Văn Cao sáng tác 'Trường ca Sông Lô' năm 1947 ngay sau khi quân dân ta đánh tan đoàn tàu chiến của thực dân Pháp trên dòng sông Lô lịch sử."
          },
          {
            q: "Đặc điểm cơ bản của thể loại 'Trường ca' trong nghệ thuật thanh nhạc là:",
            options: [
              "Tác phẩm quy mô lớn gồm nhiều đoạn mang hình tượng, tính chất khác nhau liên kết theo một chủ đề câu chuyện",
              "Chỉ gồm đúng 2 câu nhạc ngắn lặp đi lặp lại",
              "Một bài hát không có lời ca chỉ dùng cho dàn kèn",
              "Khúc hát ru em bé ngủ"
            ],
            ans: 0,
            explain: "Trường ca là bản anh hùng ca thanh nhạc nhiều phần đoạn với cấu trúc âm nhạc đa dạng, diễn tả những biến cố lịch sử và cảm xúc hào hùng của dân tộc."
          }
        ]
      },
      {
        id: "c4_b2",
        num: 14,
        title: "Bài 2. Đọc nhạc: Bài đọc nhạc số 4, giọng Rê thứ",
        badge: "Đọc nhạc hai bè",
        objectives: [
          "Ôn tập gam Rê thứ, đọc nhuần nhuyễn các âm ổn định và bước nhảy quãng ba.",
          "Thể hiện chính xác Bài đọc nhạc số 4 có hai bè giọng Rê thứ.",
          "Biết lắng nghe sự hoà hợp bè và gõ đệm tiết tấu linh hoạt."
        ],
        sections: [
          {
            heading: "1. Khởi động giọng & Nhận diện giai điệu",
            type: "list",
            items: [
              "<strong>Đọc thang âm Rê thứ:</strong> Đọc chuỗi nốt Rê - Mi - Pha - Son - La - Si♭ - Đô - Rê. Đọc trục âm ba Dm (Rê - Pha - La).",
              "<strong>Luyện riêng 2 bè:</strong> Bè 1 giữ nhịp điệu giai điệu tha thiết; Bè 2 hỗ trợ các nốt hoà thanh ở các phách quan trọng."
            ]
          },
          {
            heading: "2. Hoà quyện hai bè & Gõ phách",
            type: "list",
            items: [
              "<strong>Ghép bè theo cặp:</strong> Ghép từng ô nhịp chậm để học sinh cảm nhận sự giao thoa hoà âm quãng 3 và quãng 6.",
              "<strong>Ứng dụng:</strong> Chọn một câu nhạc trong bài chuyển soạn cho nhạc cụ gõ đệm hoặc nhạc cụ giai điệu biểu diễn."
            ]
          }
        ],
        quiz: [
          {
            q: "Trong Bài đọc nhạc số 4 giọng Rê thứ, âm chủ đóng vai trò kết bài là nốt nào?",
            options: [
              "Nốt Rê (D)",
              "Nốt Pha (F)",
              "Nốt La (A)",
              "Nốt Đô (C)"
            ],
            ans: 0,
            explain: "Âm chủ của giọng Rê thứ là nốt Rê (D), là trung tâm ổn định nhất của toàn bộ bản nhạc."
          },
          {
            q: "Khi hai bè cùng đọc nốt Rê (ở bè dưới) và nốt Pha (ở bè trên), hai nốt này tạo thành quãng gì?",
            options: [
              "Quãng 3 thứ (1,5 cung)",
              "Quãng 3 trưởng (2 cung)",
              "Quãng 4 đúng (2,5 cung)",
              "Quãng 5 đúng (3,5 cung)"
            ],
            ans: 0,
            explain: "Khoảng cách từ nốt Rê lên nốt Pha gồm 1,5 cung (Rê-Mi 1 cung, Mi-Pha 0,5 cung), tạo nên quãng 3 thứ (minor third)."
          },
          {
            q: "Để gõ đệm chính xác cho bài đọc nhạc nhịp 3/4, học sinh cần nhấn mạnh vào phách nào?",
            options: [
              "Nhấn mạnh vào phách 1, phách 2 và 3 gõ nhẹ",
              "Nhấn mạnh vào cả 3 phách như nhau",
              "Chỉ gõ ở phách 3",
              "Gõ tự do không theo phách"
            ],
            ans: 0,
            explain: "Tính chất nhịp 3/4 gồm 3 phách trong một ô nhịp: Phách 1 mạnh, phách 2 nhẹ, phách 3 nhẹ."
          }
        ]
      },
      {
        id: "c4_b3",
        num: 15,
        title: "Bài 3. Hát hợp xướng: Cho tôi yêu",
        badge: "Hợp xướng học đường",
        objectives: [
          "Trình bày bài hát hợp xướng 'Cho tôi yêu' với tình cảm trong sáng, tự hào về tuổi học trò và thầy cô bè bạn.",
          "Phối hợp các bè giọng hát nhịp nhàng, kiểm soát tốt các chỗ đảo phách và dấu lặng.",
          "Thực hiện kĩ thuật lấy hơi đồng bộ và cân bằng âm lượng bè lĩnh xướng và bè hoà thanh."
        ],
        sections: [
          {
            heading: "1. Tác phẩm & Ý nghĩa ca từ",
            type: "list",
            items: [
              "<strong>Tác giả:</strong> Nhạc Hoàng Đạm – Lời thơ Hoàng Yến; chuyển soạn hợp xướng bởi nhạc sĩ Xuân Cung.",
              "<strong>Nội dung:</strong> Khúc ca gợi lại những kí ức tuổi thơ tươi đẹp dưới mái trường mến yêu, công ơn dạy dỗ của thầy cô và tình cảm bạn bè trong sáng, thánh thiện; giai điệu bay bổng, tràn đầy sức sống thanh xuân."
            ]
          },
          {
            heading: "2. Kĩ thuật hát hợp xướng nhiều bè",
            type: "list",
            items: [
              "<strong>Xử lí đảo phách & Dấu lặng:</strong> Ca khúc có nhiều âm hình đảo phách (nốt bắt đầu từ phách nhẹ ngân qua phách mạnh); học sinh cần giữ nhịp bên trong chắc chắn, không bị lôi cuốn làm đẩy nhanh tốc độ.",
              "<strong>Thống nhất hơi thở:</strong> Toàn bộ thành viên trong cùng một bè phải lấy hơi tại cùng một vị trí quy định để tạo thành một dải âm thanh liền mạch, dày dặn.",
              "<strong>Dàn dựng biểu diễn:</strong> Phân chia bè nam (trầm) và bè nữ (cao); có thể kết hợp solo lĩnh xướng ở đoạn 1 và toàn bộ hợp xướng bùng nổ ở điệp khúc."
            ]
          }
        ],
        quiz: [
          {
            q: "Ca khúc hợp xướng học đường 'Cho tôi yêu' được chuyển soạn bởi nhạc sĩ nào?",
            options: [
              "Nhạc sĩ Xuân Cung",
              "Nhạc sĩ Hoàng Vân",
              "Nhạc sĩ Trịnh Công Sơn",
              "Nhạc sĩ Lưu Hữu Phước"
            ],
            ans: 0,
            explain: "Bài hát 'Cho tôi yêu' (nhạc Hoàng Đạm, thơ Hoàng Yến) được chuyển soạn hợp xướng công phu bởi nhạc sĩ Xuân Cung."
          },
          {
            q: "Hiện tượng 'đảo phách' (syncopation) trong âm nhạc xuất hiện khi nào?",
            options: [
              "Khi một âm bắt đầu vang lên ở phách nhẹ (hoặc phần nhẹ của phách) và ngân dài qua phách mạnh tiếp theo",
              "Khi người hát quên lời và dừng lại",
              "Khi tất cả các nốt đều rơi đúng vào phách mạnh đầu ô nhịp",
              "Khi bài hát chuyển từ giọng trưởng sang giọng thứ"
            ],
            ans: 0,
            explain: "Đảo phách là thủ pháp tiết tấu trong đó trọng âm bị dịch chuyển từ phách mạnh sang phách nhẹ, tạo cảm giác nhún nhảy, bất ngờ."
          },
          {
            q: "Trong nghệ thuật hát hợp xướng, yêu cầu quan trọng nhất đối với từng thành viên là:",
            options: [
              "Ý thức hoà nhập tập thể: lấy hơi đồng bộ, hát đúng cao độ bè mình và hòa quyện âm lượng chung",
              "Cố gắng hát thật to nổi trội hẳn lên để khán giả nhận ra giọng mình",
              "Mỗi người tự ngắt hơi ở bất kì chỗ nào cảm thấy mệt",
              "Hát tuỳ tiện lệch cao độ bè bạn"
            ],
            ans: 0,
            explain: "Hợp xướng là nghệ thuật tập thể đòi hỏi sự hòa âm tuyệt đối, thống nhất điểm lấy hơi, giữ nhịp và nhả chữ đồng đều."
          }
        ]
      },
      {
        id: "c4_b4",
        num: 16,
        title: "Bài 4. Nhạc cụ số 4, giọng Rê thứ",
        badge: "Thực hành nhạc cụ tổng hợp",
        objectives: [
          "Thể hiện nhuần nhuyễn kĩ thuật kết hợp liền tiếng (legato) và nảy tiếng (staccato) trên nhạc cụ.",
          "Phối hợp hai bè nhạc cụ nhịp nhàng, xử lí chính xác các dấu hoá và kí hiệu biểu cảm.",
          "Biết chuyển soạn một nét giai điệu bài hát học đường sang nhạc cụ biểu diễn."
        ],
        sections: [
          {
            heading: "1. Kết hợp kĩ thuật liền tiếng và nảy tiếng",
            type: "list",
            items: [
              "<strong>Phân biệt kĩ thuật:</strong> Nốt có gạch vòm cung chơi <em>legato</em> (liền tiếng mềm mại); nốt có dấu chấm trên/dưới đầu nốt chơi <em>staccato</em> (bật âm ngắn, dứt khoát, nảy tiếng rộn rã).",
              "<strong>Luyện tập từng bè:</strong> Bè 1 chơi giai điệu bay bổng, bè 2 điểm xuyết các nốt nảy tiếng tạo nhịp điệu sinh động."
            ]
          },
          {
            heading: "2. Hoà tấu & Sáng tạo biểu diễn",
            type: "list",
            items: [
              "<strong>Đổi vai trò giữa hai bè:</strong> Các nhóm đổi bè cho nhau để hiểu được cả chức năng lĩnh xướng và chức năng đệm bè.",
              "<strong>Chuyển soạn:</strong> Chọn một câu hát trong bài 'Cho tôi yêu' để tấu trên nhạc cụ, kết hợp gõ đệm phụ hoạ."
            ]
          }
        ],
        quiz: [
          {
            q: "Dấu chấm nhỏ đặt ngay phía trên hoặc phía dưới đầu nốt nhạc là kí hiệu của kĩ thuật nào?",
            options: [
              "Kĩ thuật nảy tiếng (Staccato)",
              "Kĩ thuật liền tiếng (Legato)",
              "Dấu ngắt hơi (Breath mark)",
              "Dấu kéo dài tự do (Fermata)"
            ],
            ans: 0,
            explain: "Dấu chấm trên/dưới đầu nốt là kí hiệu staccato (nảy tiếng), yêu cầu diễn tấu nốt đó ngắn bằng một nửa trường độ thực tế, bật tiếng dứt khoát."
          },
          {
            q: "Khi diễn tấu hai bè nhạc cụ trong đó một bè đi liền tiếng (legato) và một bè đi nảy tiếng (staccato), hiệu quả âm thanh mang lại là:",
            options: [
              "Tạo sự tương phản âm sắc sinh động, phong phú và làm nổi bật tính chất nhịp điệu",
              "Làm cho bản nhạc trở nên lộn xộn và không nghe thấy gì",
              "Bắt buộc người chơi phải ngừng thổi",
              "Hai nhạc cụ tự triệt tiêu âm thanh của nhau"
            ],
            ans: 0,
            explain: "Sự kết hợp giữa legato và staccato tạo nên sự tương phản nghệ thuật tuyệt đẹp giữa nét mềm mại của giai điệu và nét rộn rã của phần đệm."
          },
          {
            q: "Trong quá trình luyện tập hoà tấu nhạc cụ, sau khi hoàn thành ở tốc độ chậm, bước tiếp theo là:",
            options: [
              "Tăng dần tốc độ từng chút một cho đến khi đạt tốc độ quy định của tác phẩm",
              "Ngừng tập ngay lập tức",
              "Chơi với tốc độ nhanh gấp 10 lần ngay lập tức",
              "Bỏ qua các nốt khó để chơi cho nhanh"
            ],
            ans: 0,
            explain: "Nguyên tắc luyện tập nhạc cụ là tập chậm chuẩn xác, sau đó dùng máy đập nhịp (metronome) tăng dần tốc độ từng nấc cho đến khi đạt tốc độ chuẩn."
          }
        ]
      }
    ]
  }
];

module.exports = general_themes;
