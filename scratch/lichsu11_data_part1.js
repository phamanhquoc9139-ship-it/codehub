// Dữ liệu Lịch sử 11 - Bộ sách Kết nối tri thức với cuộc sống
// Phần 1: Chủ đề 1, 2, 3 (Bài 1 -> Bài 6)

const part1Lessons = {
  1: {
    num: 1,
    topicNum: 1,
    topicTitle: "Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản",
    title: "Một số vấn đề chung về cách mạng tư sản",
    summary: "Nắm vững khái niệm, tiền đề bốn mặt (kinh tế, chính trị, xã hội, tư tưởng), mục tiêu, nhiệm vụ, giai cấp lãnh đạo, động lực và ý nghĩa lịch sử sâu sắc của các cuộc cách mạng tư sản thời cận đại.",
    sections: [
      {
        heading: "1. Khái niệm và bối cảnh chung",
        type: "list",
        items: [
          {
            title: "Khái niệm cách mạng tư sản",
            desc: "Là cuộc cách mạng do nhiều lực lượng lãnh đạo (tư sản, quý tộc mới, chủ nô...) nhằm chống chế độ phong kiến chuyên chế hoặc ách thống trị thực dân, thiết lập nhà nước tư sản và mở đường thông thoáng cho chủ nghĩa tư bản phát triển."
          },
          {
            title: "Thời gian bùng nổ và thắng lợi",
            desc: "Diễn ra và thắng lợi chủ yếu trong khoảng thời gian từ giữa thế kỉ XVI đến đầu thế kỉ XX trên phạm vi châu Âu và Bắc Mỹ, tạo bước ngoặt chuyển dịch lịch sử từ xã hội phong kiến sang thời kì tư bản chủ nghĩa."
          },
          {
            title: "Quy luật hình thành tiền đề",
            desc: "Các cuộc cách mạng tư sản bùng nổ không mang tính ngẫu nhiên mà là kết quả tất yếu từ sự tích tụ và đan xen chín muồi của bốn tiền đề căn bản: Kinh tế, Chính trị, Xã hội và Tư tưởng."
          }
        ]
      },
      {
        heading: "2. Các tiền đề của cách mạng tư sản",
        type: "grid",
        items: [
          {
            badge: "Tiền đề Kinh tế",
            title: "Sự nảy sinh và lớn mạnh của kinh tế TBCN",
            points: [
              "Kinh tế tư bản chủ nghĩa ra đời, phát triển mạnh mẽ ngay trong lòng xã hội phong kiến hoặc chính thể thuộc địa; xuất hiện nhiều công trường thủ công, xí nghiệp luyện kim, dệt, khai khoáng và thương nghiệp quốc tế.",
              "Tại Anh: Từ giữa thế kỉ XVI, nông nghiệp chuyển mạnh sang sản xuất hàng hoá (hiện tượng 'cừu ăn thịt người'); luyện kim, đóng tàu phát triển vượt bậc. Trước năm 1640, sản lượng than của Anh chiếm tới 4/5 tổng sản lượng toàn châu Âu.",
              "Tại 13 thuộc địa Anh ở Bắc Mỹ: Kinh tế đồn điền và công trường thủ công phát triển mạnh; chính quốc Anh ra sức kìm hãm: cấm mở nhà máy, cấm di dân sang miền Tây, độc quyền ngoại thương và ban hành thuế ngặt nghèo (thuế tem, thuế trà).",
              "Tại Pháp: Đến cuối thế kỉ XVIII, nông nghiệp vẫn duy trì lối canh tác lạc hậu nhưng công thương nghiệp tăng trưởng thần tốc; việc ứng dụng máy móc trong khai mỏ, dệt sợi khẳng định xu thế sản xuất mới.",
              "Rào cản gay gắt: Chế độ thuế khóa tùy tiện, phường hội phong kiến bảo thủ và các đạo luật kìm hãm của thực dân bóp nghẹt thị trường tự do, đòi hỏi phải lật đổ để giải phóng sức sản xuất."
            ]
          },
          {
            badge: "Tiền đề Chính trị",
            title: "Sự suy đồi của chế độ quân chủ chuyên chế & ách thống trị thực dân",
            points: [
              "Tại Anh: Vua Charles I duy trì quyền lực độc đoán, tự tiện đặt ra thuế mới mà không thông qua Nghị viện, đàn áp khốc liệt người theo đạo Thanh giáo và phe đối lập.",
              "Tại Bắc Mỹ: Thực dân Anh áp đặt các đạo luật hà khắc, tước bỏ quyền tự quản dân chủ của nhân dân 13 thuộc địa, duy trì bộ máy quan chức cai trị thực dân tham lam và tàn bạo.",
              "Tại Pháp: Vua Louis XVI nắm quyền lực tuyệt đối, quản lí đất nước bằng chế độ đẳng cấp độc tài; các 'mật lệnh có ấn vua' (lettre de cachet) cho phép bắt bớ, bỏ ngục bất kì công dân nào mà không cần xét xử."
            ]
          },
          {
            badge: "Tiền đề Xã hội",
            title: "Phân hóa giai cấp sâu sắc & Mâu thuẫn xã hội gay gắt",
            points: [
              "Sự xuất hiện của các giai cấp, tầng lớp mới: Giai cấp tư sản, quý tộc mới (Anh) và chủ nô (Bắc Mỹ) có tiềm lực kinh tế lớn mạnh nhưng hoàn toàn không có địa vị chính trị tương xứng.",
              "Tại Anh: Phong trào rào đất cướp ruộng của quý tộc mới biến hàng vạn nông dân thành kẻ trắng tay, buộc phải lưu vong hoặc bán sức lao động rẻ mạt trong các công trường thủ công.",
              "Tại Bắc Mỹ: Mâu thuẫn giữa toàn thể nhân dân 13 thuộc địa (tư sản, chủ nô, nông dân, thợ thủ công, nô lệ da đen) với ách thống trị của thực dân Anh ngày càng lên đỉnh điểm.",
              "Tại Pháp: Xã hội chia thành Ba Đẳng cấp. Tăng lữ (Đẳng cấp 1) và Quý tộc (Đẳng cấp 2) chiếm chưa đầy 2% dân số nhưng nắm mọi đặc quyền, miễn thuế. Đẳng cấp thứ Ba (Tư sản, Nông dân, Bình dân thành thị) chiếm 98% phải chịu mọi thứ thuế khóa, lao dịch nặng nề.",
              "Quần chúng nhân dân (nông dân, công nhân, thợ thủ công) là động lực cơ bản quyết định quy mô, tiến trình và tính chất triệt để của cách mạng."
            ]
          },
          {
            badge: "Tiền đề Tư tưởng",
            title: "Phong trào Khai sáng & Triết học Ánh sáng dọn đường",
            points: [
              "Vũ khí lí luận: Các nhà tư tưởng tiến bộ kịch liệt phê phán giáo lí phong kiến lỗi thời, chế độ chuyên chế thần quyền; đề cao tự do, bình đẳng, quyền con người và quyền làm chủ của nhân dân.",
              "Mông-te-xki-ơ (Montesquieu, 1689–1755): Đề xuất thuyết 'Tam quyền phân lập' (Lập pháp, Hành pháp, Tư pháp) nhằm kiềm chế quyền lực độc đoán của nhà vua, bảo đảm tự do công dân.",
              "Vôn-te (Voltaire, 1694–1778): Triết gia kiệt xuất đả kích kịch liệt giáo hội và phong kiến hủ bại; bảo vệ quyền tự do tín ngưỡng, quyền tư hữu và đề cao một chính quyền cộng hòa sáng suốt.",
              "Rút-xô (Rousseau, 1712–1778): Đưa ra thuyết 'Khế ước xã hội', chủ trương xóa bỏ triệt để nền quân chủ chuyên chế, thiết lập chính thể cộng hòa dân chủ thuộc về nhân dân."
            ]
          }
        ]
      },
      {
        heading: "3. Mục tiêu, nhiệm vụ, giai cấp lãnh đạo và động lực cách mạng",
        type: "table",
        headers: ["Tiêu chí so sánh", "Cách mạng tư sản Anh (1642–1689)", "Chiến tranh giành độc lập 13 thuộc địa (1773–1783)", "Cách mạng tư sản Pháp (1789–1799)"],
        rows: [
          ["Mục tiêu chung", "Lật đổ chế độ phong kiến chuyên chế, mở đường cho CNTB phát triển", "Lật đổ ách thống trị thực dân Anh, lập quốc gia độc lập", "Xóa bỏ triệt để phong kiến chuyên chế, xác lập nền dân chủ tư sản"],
          ["Nhiệm vụ Dân tộc", "Thống nhất thị trường nội địa, hòa hợp dân tộc", "Giành độc lập dân tộc, giải phóng lãnh thổ khỏi chính quốc", "Bảo vệ nền độc lập Tổ quốc trước sự can thiệp của liên minh phong kiến châu Âu"],
          ["Nhiệm vụ Dân chủ", "Xác lập quyền lực tối cao của Nghị viện, chế độ quân chủ lập hiến", "Ban hành Hiến pháp 1787, xác lập nền cộng hòa liên bang tư sản", "Xóa bỏ đẳng cấp phong kiến, chia ruộng đất cho nông dân, ban hành Tuyên ngôn Nhân quyền & Dân quyền"],
          ["Lãnh đạo", "Liên minh giữa giai cấp Tư sản và Quý tộc mới (Cromwell)", "Liên minh giữa giai cấp Tư sản và tầng lớp Chủ nô miền Nam (Washington)", "Giai cấp Tư sản đóng vai trò lãnh đạo duy nhất (phái Lập hiến -> Girondins -> Jacobins)"],
          ["Động lực cách mạng", "Quần chúng nông dân, thợ thủ công, bình dân thành thị", "Toàn thể nhân dân các thuộc địa (nông dân, công nhân, chủ trại, nô lệ da đen)", "Đông đảo quần chúng nhân dân (nông dân, sans-culottes) đóng vai trò quyết định đỉnh cao cách mạng"]
        ]
      },
      {
        heading: "4. Kết quả, ý nghĩa lịch sử và sơ đồ vận dụng",
        type: "list",
        items: [
          {
            title: "Ý nghĩa Cách mạng tư sản Anh",
            desc: "Lật đổ chế độ quân chủ chuyên chế của dòng họ Stuart, thiết lập chế độ Quân chủ lập hiến; mở đường cho sự phát triển của chủ nghĩa tư bản ở Anh và mở đầu thời cận đại trong lịch sử nhân loại."
          },
          {
            title: "Ý nghĩa Chiến tranh giành độc lập Bắc Mỹ",
            desc: "Giải phóng 13 thuộc địa khỏi ách kìm kẹp của đế quốc Anh, khai sinh Hợp chúng quốc Hoa Kỳ (USA); cổ vũ mạnh mẽ phong trào giải phóng dân tộc ở khu vực Mỹ La-tinh và thế giới."
          },
          {
            title: "Ý nghĩa Cách mạng tư sản Pháp (Đại cách mạng)",
            desc: "Được coi là cuộc cách mạng tư sản triệt để nhất thời cận đại vì đã đập tan chế độ phong kiến đến tận gốc rễ, giải quyết vấn đề ruộng đất cho nông dân, mở đường cho CNTB phát triển bão táp; tư tưởng Tự do - Bình đẳng - Bác ái lan rộng khắp châu Âu."
          },
          {
            title: "Hình ảnh biểu tượng cần khai thác",
            desc: "Bức tranh ngày phá ngục Ba-xti (14-7-1789): Biểu tượng quật khởi của quần chúng nhân dân tấn công vào pháo đài chuyên chế bạo tàn, mở màn cho thắng lợi của Cách mạng Pháp, về sau trở thành ngày Quốc khánh của nước Pháp."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Hai nhiệm vụ cơ bản mà mọi cuộc cách mạng tư sản thời cận đại đều phải giải quyết là gì?",
        options: [
          "A. Nhiệm vụ kinh tế và nhiệm vụ chính trị",
          "B. Nhiệm vụ dân tộc và nhiệm vụ dân chủ",
          "C. Nhiệm vụ giải phóng thuộc địa và phát triển công nghiệp",
          "D. Nhiệm vụ mở rộng lãnh thổ và truyền bá tôn giáo"
        ],
        answer: 1,
        explain: "Cách mạng tư sản giải quyết hai nhiệm vụ cơ bản: Dân tộc (thống nhất thị trường, giành độc lập) và Dân chủ (xóa bỏ chuyên chế, xác lập quyền tự do dân chủ)."
      },
      {
        q: "Điểm khác biệt nổi bật về giai cấp lãnh đạo của Cách mạng tư sản Anh so với Cách mạng tư sản Pháp là gì?",
        options: [
          "A. Ở Anh do giai cấp vô sản lãnh đạo, ở Pháp do nông dân lãnh đạo",
          "B. Ở Anh có sự liên minh giữa tư sản với quý tộc mới, còn ở Pháp do giai cấp tư sản độc quyền lãnh đạo",
          "C. Ở Anh do địa chủ phong kiến lãnh đạo, ở Pháp do chủ nô lãnh đạo",
          "D. Ở Anh và Pháp đều do tầng lớp Tăng lữ chỉ huy"
        ],
        answer: 1,
        explain: "Cách mạng Anh có đặc trưng độc đáo là liên minh giữa tư sản và quý tộc mới (tầng lớp quý tộc phong kiến nhưng kinh doanh theo phương thức TBCN)."
      },
      {
        q: "Sự kiện lịch sử nào vào ngày 14-7-1789 đã trở thành biểu tượng mở đầu thắng lợi của Cách mạng tư sản Pháp?",
        options: [
          "A. Vua Louis XVI triệu tập Hội nghị ba đẳng cấp",
          "B. Quần chúng nhân dân Pa-ri tấn công và phá ngục Ba-xti (Bastille)",
          "C. Phái Jacobins ban hành Hiến pháp mới",
          "D. Napoleon Bonaparte tiến hành cuộc đảo chính tháng Sương Mù"
        ],
        answer: 1,
        explain: "Cuộc phá ngục Ba-xti ngày 14-7-1789 là đòn giáng sấm sét vào thành trì phong kiến chuyên chế, đánh dấu bước mở màn của Đại cách mạng Pháp."
      }
    ]
  },

  2: {
    num: 2,
    topicNum: 1,
    topicTitle: "Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản",
    title: "Sự xác lập và phát triển của chủ nghĩa tư bản",
    summary: "Hệ thống hóa quá trình xác lập CNTB ở châu Âu và Bắc Mỹ, sự bành trướng xâm lược thuộc địa toàn cầu, bước chuyển biến từ tự do cạnh tranh sang giai đoạn độc quyền (đế quốc chủ nghĩa) và những tiềm năng, thách thức của CNTB hiện đại.",
    sections: [
      {
        heading: "1. Sự xác lập của chủ nghĩa tư bản ở châu Âu và Bắc Mỹ",
        type: "list",
        items: [
          {
            title: "Làn sóng cách mạng công nghiệp (từ thập niên 1760)",
            desc: "Khởi đầu từ nước Anh với phát minh máy hơi nước của James Watt, nhanh chóng lan sang Pháp, Đức, Mỹ. Máy móc thay thế lao động thủ công, các đại công xưởng ra đời làm biến đổi toàn diện diện mạo kinh tế, xã hội và củng cố vững chắc địa vị thống trị của CNTB."
          },
          {
            title: "Các cuộc đấu tranh thống nhất quốc gia (1860–1870)",
            desc: "Cuộc đấu tranh thống nhất I-ta-li-a dưới sự dẫn dắt của Garibaldi và Cavour; cuộc đấu tranh thống nhất nước Đức bằng 'sắt và máu' do Thủ tướng Bismarck tiến hành đã dẹp bỏ sự phân tán phong kiến, hình thành thị trường dân tộc thống nhất."
          },
          {
            title: "Mốc xác lập toàn cầu (thập niên 1870)",
            desc: "Đến đầu thập niên 1870, chủ nghĩa tư bản đã hoàn toàn được xác lập trên phạm vi châu Âu và Bắc Mỹ, trở thành hệ thống kinh tế - chính trị thống trị thế giới."
          }
        ]
      },
      {
        heading: "2. Mở rộng, xâm lược thuộc địa và bành trướng toàn cầu",
        type: "grid",
        items: [
          {
            badge: "Chủ nghĩa Đế quốc",
            title: "Bản chất xâm lược thuộc địa",
            points: [
              "Nhu cầu khổng lồ về nguồn nguyên liệu dồi dào, thị trường tiêu thụ rộng lớn, nguồn nhân công rẻ mạt và nơi đầu tư tư bản sinh lời cao đã thúc đẩy các nước tư bản tăng cường xâm chiếm thuộc địa.",
              "Cuối thế kỉ XIX - đầu thế kỉ XX, các nước tư bản chuyển từ tự do cạnh tranh sang giai đoạn đế quốc chủ nghĩa.",
              "Đế quốc Anh: Trở thành 'Đế quốc mà Mặt Trời không bao giờ lặn'. Đến năm 1914, hệ thống thuộc địa của Anh trải rộng tới 33 triệu km² với hơn 400 triệu dân (chiếm 1/4 diện tích và dân số thế giới)."
            ]
          },
          {
            badge: "Mỹ La-tinh & Châu Á",
            title: "Các biến động tư sản lớn",
            points: [
              "Mỹ La-tinh: Nửa đầu thế kỉ XIX, các cuộc nổi dậy quật khởi đã quét sạch ách thống trị của thực dân Tây Ban Nha và Bồ Đào Nha, khai sinh hàng loạt quốc gia tư sản độc lập.",
              "Duy tân Minh Trị (Nhật Bản, từ 1868): Thiên hoàng Minh Trị tiến hành cải cách toàn diện trên các mặt chính trị, kinh tế, quân sự, giáo dục; đưa Nhật thoát khỏi nguy cơ thuộc địa, trở thành cường quốc tư bản công nghiệp và chuyển sang chủ nghĩa đế quốc.",
              "Cách mạng Tân Hợi (Trung Quốc, 1911): Dưới sự lãnh đạo của Tôn Trung Sơn, phong trào đã lật đổ triều đình Mãn Thanh hủ bại, chấm dứt hơn 2000 năm phong kiến chuyên chế, khai sinh Trung Hoa Dân quốc và mở đường cho kinh tế TBCN."
            ]
          }
        ]
      },
      {
        heading: "3. Chuyển biến từ tự do cạnh tranh sang chủ nghĩa tư bản độc quyền",
        type: "list",
        items: [
          {
            title: "Nguyên nhân hình thành độc quyền",
            desc: "Cuối thế kỉ XIX - đầu thế kỉ XX, những tiến bộ vượt bậc của khoa học kĩ thuật (điện năng, động cơ đốt trong, hóa chất) thúc đẩy sản xuất tập trung với quy mô cực lớn. Sự cạnh tranh khốc liệt khiến các doanh nghiệp vừa và nhỏ bị thâu tóm hoặc phá sản."
          },
          {
            title: "Khái niệm Tổ chức Độc quyền",
            desc: "Là sự liên minh giữa các nhà tư bản kếch xù để nắm phần lớn việc sản xuất và tiêu thụ một hoặc nhiều loại hàng hóa, nhằm thao túng thị trường và thu lợi nhuận độc quyền cao nhất."
          },
          {
            title: "Các hình thức độc quyền tiêu biểu",
            desc: "Các-ten (Cartel) và Xanh-đi-ca (Syndicate) phổ biến ở Đức và Pháp; Tơ-rớt (Trust) phát triển điển hình ở Mỹ (như Vua dầu mỏ Rockefeller, Vua thép Morgan). Đầu thế kỉ XX, dù chỉ chiếm khoảng 1% tổng số xí nghiệp nhưng các tổ chức độc quyền nắm giữ phần lớn máy móc, thợ thuyền và của cải xã hội."
          }
        ]
      },
      {
        heading: "4. Chủ nghĩa tư bản hiện đại: Khái niệm, tiềm năng và thách thức",
        type: "table",
        headers: ["Tiêu chí", "Nội dung trọng tâm theo SGK Lịch sử 11"],
        rows: [
          ["Khái niệm CNTB hiện đại", "Giai đoạn phát triển của CNTB từ sau Chiến tranh thế giới thứ hai đến nay; đặc trưng mới nổi bật là sự dung hợp chặt chẽ giữa sức mạnh kinh tế của các tổ chức độc quyền tư nhân với sức mạnh chính trị của bộ máy nhà nước tư sản (chủ nghĩa tư bản độc quyền nhà nước)."],
          ["Tiềm năng phát triển", "1. Năng lực kinh tế và tài chính khổng lồ, kiểm soát các trung tâm tài chính toàn cầu (nhóm G7, thành lập 1976).\n2. Đi đầu trong cuộc Cách mạng công nghiệp lần thứ tư (công nghệ bán dẫn, AI, điện toán đám mây, năng lượng mới).\n3. Trình độ quản trị hiện đại, lực lượng lao động có kĩ năng cao và khả năng tự điều chỉnh thể chế linh hoạt."],
          ["Thách thức gay gắt", "1. Khủng hoảng chu kì: Khủng hoảng kinh tế, tài chính mang tính toàn cầu (như khủng hoảng dầu mỏ 1973, khủng hoảng tài chính 2008).\n2. Vấn đề chính trị - xã hội: Tội phạm, phân biệt chủng tộc, xả súng, bất ổn sắc tộc.\n3. Bất bình đẳng giàu nghèo sâu sắc: Phong trào 'Chiếm lấy phố Uôn' (Occupy Wall Street, Mỹ 2011) bùng nổ phản kháng khoảng cách tột cùng giữa 1% giới tài phiệt siêu giàu và 99% dân chúng nghèo khổ."]
        ]
      }
    ],
    quiz: [
      {
        q: "Hình thức tổ chức độc quyền nào sau đây phát triển phổ biến và đặc trưng nhất ở nước Mỹ cuối thế kỉ XIX - đầu thế kỉ XX?",
        options: [
          "A. Các-ten (Cartel)",
          "B. Xanh-đi-ca (Syndicate)",
          "C. Tơ-rớt (Trust)",
          "D. Công xã nông thôn"
        ],
        answer: 2,
        explain: "Ở Mỹ, hình thức tổ chức độc quyền phát triển mạnh mẽ và phổ biến nhất là Tơ-rớt (Trust), tiêu biểu như Trust Dầu mỏ Standard Oil của Rockefeller, Trust Thép của Morgan."
      },
      {
        q: "Nét mới nổi bật nhất của Chủ nghĩa tư bản hiện đại (từ sau Chiến tranh thế giới thứ hai đến nay) là gì?",
        options: [
          "A. Xóa bỏ hoàn toàn sở hữu tư nhân về tư liệu sản xuất",
          "B. Sự kết hợp giữa sức mạnh kinh tế của các tổ chức độc quyền tư nhân với sức mạnh chính trị của nhà nước tư sản",
          "C. Không còn các cuộc khủng hoảng kinh tế chu kì",
          "D. Đóng cửa thị trường tài chính quốc tế"
        ],
        answer: 1,
        explain: "CNTB hiện đại đặc trưng bởi sự dung hợp quyền lực kinh tế của các tập đoàn độc quyền với quyền lực chính trị của bộ máy nhà nước (CNTB độc quyền nhà nước)."
      },
      {
        q: "Phong trào 'Chiếm lấy phố Uôn' (Occupy Wall Street) bùng nổ tại Mỹ năm 2011 nhằm phản kháng vấn đề nhức nhối nào của CNTB?",
        options: [
          "A. Thiếu hụt tài nguyên năng lượng dầu mỏ",
          "B. Tình trạng bất bình đẳng giàu nghèo gay gắt giữa 1% nhóm giàu nhất và 99% dân cư còn lại",
          "C. Nạn mù chữ ở các bang miền Nam",
          "D. Tranh chấp biên giới giữa các bang"
        ],
        answer: 1,
        explain: "Phong trào Occupy Wall Street giương cao khẩu hiệu 'Chúng tôi là 99%' để phản đối sự tích tụ tài sản bất công vào tay 1% nhóm tài phiệt siêu giàu."
      }
    ]
  },

  3: {
    num: 3,
    topicNum: 2,
    topicTitle: "Chủ nghĩa xã hội từ năm 1917 đến nay",
    title: "Sự hình thành Liên bang Cộng hoà xã hội chủ nghĩa Xô viết",
    summary: "Hệ thống hóa bước ngoặt lịch sử từ Cách mạng tháng Mười Nga 1917, cuộc chiến giữ vững chính quyền Xô viết, quá trình hợp nhất 4 nước cộng hòa đầu tiên vào ngày 30-12-1922 và ý nghĩa to lớn trong nước lẫn quốc tế.",
    sections: [
      {
        heading: "1. Từ Cách mạng tháng Mười đến yêu cầu thành lập liên bang",
        type: "list",
        items: [
          {
            title: "Cách mạng tháng Mười Nga năm 1917",
            desc: "Ngày 25-10-1917 (lịch cũ, tức 7-11-1917 lịch mới), Đại hội Xô viết toàn Nga lần thứ hai khai mạc trọng thể tại Điện Xmônưi (Petrograd). V.I. Lê-nin tuyên bố thành lập Chính quyền Xô viết - nhà nước kiểu mới của giai cấp công nhân và nhân dân lao động."
          },
          {
            title: "Cuộc chiến đấu chống thù trong giặc ngoài (1918–1921)",
            desc: "14 nước đế quốc câu kết với lực lượng phản động nội bộ (bạch vệ) bao vây hòng bóp chết nước Nga Xô viết. Các nước cộng hòa Xô viết đã liên minh quân sự - kinh tế chặt chẽ để đánh bại kẻ thù, bảo vệ vững chắc thành quả cách mạng."
          },
          {
            title: "Yêu cầu lịch sử cấp bách",
            desc: "Sau chiến tranh, đất nước bị tàn phá nặng nề. Nhiệm vụ khôi phục kinh tế, chống bao vây phong tỏa tư bản và xây dựng chủ nghĩa xã hội đòi hỏi phải hợp nhất các nước cộng hòa thành một nhà nước liên bang thống nhất, tập trung nguồn lực."
          }
        ]
      },
      {
        heading: "2. Quá trình thành lập Liên bang Xô viết (USSR)",
        type: "list",
        items: [
          {
            title: "Tư tưởng chỉ đạo của V.I. Lê-nin",
            desc: "Xây dựng nhà nước liên bang trên nguyên tắc: Hoàn toàn bình đẳng giữa các dân tộc, tôn trọng quyền dân tộc tự quyết và tình hữu nghị đoàn kết anh em của các dân tộc tự nguyện gia nhập."
          },
          {
            title: "Ngày thành lập lịch sử: 30-12-1922",
            desc: "Đại hội lần thứ nhất các Xô viết toàn Liên bang họp tại Mát-xcơ-va, chính thức thông qua Bản Tuyên ngôn và Bản Hiệp ước thành lập Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (gọi tắt là Liên Xô - USSR)."
          },
          {
            title: "Bốn nước Cộng hòa đầu tiên tham gia sáng lập",
            desc: "1. Nước Cộng hòa XHCN Xô viết Liên bang Nga (RSFSR)\n2. Nước Cộng hòa XHCN Xô viết U-crai-na (Ukraine)\n3. Nước Cộng hòa XHCN Xô viết Bê-lô-rút-xi-a (Belarus)\n4. Nước Cộng hòa XHCN Xô viết Ngoại Cáp-ca-dơ (gồm Gruzia, Armenia, Azerbaijan)."
          },
          {
            title: "Hiến pháp đầu tiên (Tháng 1-1924)",
            desc: "Đại hội Xô viết toàn Liên bang lần thứ hai đã thông qua bản Hiến pháp đầu tiên, hoàn tất quá trình tổ chức bộ máy nhà nước liên bang. Đến năm 1940, Liên Xô đã phát triển thành một liên bang gồm 15 nước cộng hòa vững mạnh."
          }
        ]
      },
      {
        heading: "3. Ý nghĩa lịch sử của việc thành lập Liên Xô",
        type: "grid",
        items: [
          {
            badge: "Ý nghĩa Trong nước",
            title: "Sức mạnh khối đoàn kết toàn dân tộc",
            points: [
              "Giải quyết đúng đắn vấn đề dân tộc: Xóa bỏ tình trạng bất bình đẳng, áp bức dân tộc của chế độ Sa hoàng, xây dựng cộng đồng bình đẳng, tôn trọng và tương trợ lẫn nhau.",
              "Tạo điều kiện tập trung tối đa các nguồn tài nguyên, nhân lực và trí tuệ to lớn để tiến hành công nghiệp hóa xã hội chủ nghĩa và hiện đại hóa đất nước.",
              "Củng cố sức mạnh phòng thủ quốc gia, nâng cao uy tín và vị thế của Liên Xô trên trường quốc tế."
            ]
          },
          {
            badge: "Ý nghĩa Quốc tế",
            title: "Chỗ dựa vững chắc của phong trào cách mạng",
            points: [
              "Trở thành ngọn cờ cổ vũ vô song và chỗ dựa vật chất, tinh thần vững chắc cho phong trào giải phóng dân tộc ở các nước thuộc địa châu Á, châu Phi và Mỹ La-tinh.",
              "Chứng minh tính hiện thực sinh động của học thuyết Mác - Lê-nin về khả năng nhân dân lao động tự tay làm chủ vận mệnh và xây dựng xã hội mới.",
              "Đặt nền tảng và tiền đề lịch sử quan trọng cho sự hình thành hệ thống các nước xã hội chủ nghĩa trên thế giới sau này."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Bản Tuyên ngôn và Hiệp ước thành lập Liên bang Xô viết (Liên Xô) được thông qua vào ngày tháng năm nào?",
        options: [
          "A. 25-10-1917",
          "B. 30-12-1922",
          "C. 21-1-1924",
          "D. 2-9-1945"
        ],
        answer: 1,
        explain: "Ngày 30-12-1922, Đại hội lần thứ nhất các Xô viết toàn Liên bang họp tại Mát-xcơ-va đã thông qua quyết định thành lập Liên Xô."
      },
      {
        q: "Bốn nước Cộng hòa đầu tiên tham gia sáng lập Liên bang Xô viết năm 1922 bao gồm:",
        options: [
          "A. Nga, Ba Lan, Tiệp Khắc, Hung-ga-ri",
          "B. Nga, U-crai-na, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ",
          "C. Nga, Cu-ba, Trung Quốc, Triều Tiên",
          "D. Nga, Bun-ga-ri, Ru-ma-ni, An-ba-ni"
        ],
        answer: 1,
        explain: "4 nước cộng hòa sáng lập Liên Xô năm 1922 là: Nga, U-crai-na, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ."
      },
      {
        q: "Nguyên tắc cốt lõi nào do V.I. Lê-nin đề ra khi thành lập Liên bang Cộng hòa xã hội chủ nghĩa Xô viết?",
        options: [
          "A. Nước Nga nắm toàn quyền chi phối và quyết định thay cho các nước nhỏ",
          "B. Bình đẳng giữa các dân tộc, quyền dân tộc tự quyết và sự tự nguyện của các nước cộng hòa",
          "C. Bắt buộc các nước xung quanh phải sáp nhập vô điều kiện",
          "D. Duy trì chế độ quân chủ liên bang"
        ],
        answer: 1,
        explain: "Lê-nin chủ trương xây dựng Liên bang Xô viết trên cơ sở hoàn toàn bình đẳng giữa các dân tộc, quyền tự quyết và sự hợp tác hữu nghị tự nguyện."
      }
    ]
  },

  4: {
    num: 4,
    topicNum: 2,
    topicTitle: "Chủ nghĩa xã hội từ năm 1917 đến nay",
    title: "Sự phát triển của chủ nghĩa xã hội từ sau Chiến tranh thế giới thứ hai đến nay",
    summary: "Nắm vững quá trình mở rộng của CNXH sang Đông Âu, Châu Á, Mỹ La-tinh (từ một nước trở thành hệ thống liên lục địa), nguyên nhân sụp đổ mô hình ở Liên Xô và Đông Âu (1989-1991), công cuộc đổi mới ở Việt Nam, Lào, Cuba và đại thành tựu cải cách mở cửa của Trung Quốc.",
    sections: [
      {
        heading: "1. Sự mở rộng của CNXH sau Chiến tranh thế giới thứ hai",
        type: "grid",
        items: [
          {
            badge: "Khu vực Đông Âu",
            title: "Thành lập các nhà nước Dân chủ nhân dân",
            points: [
              "Nhờ thắng lợi quyết định của Hồng quân Liên Xô trước chủ nghĩa phát xít, nhân dân các nước Đông Âu nổi dậy giành chính quyền: Ba Lan, Ru-ma-ni (1944); Tiệp Khắc, Hung-ga-ri, Nam Tư (1945); An-ba-ni, Bun-ga-ri (1946); CHDC Đức (1949).",
              "Giai đoạn 1945–1949: Hoàn thành cuộc cách mạng dân tộc dân chủ nhân dân (cải cách ruộng đất, quốc hữu hóa xí nghiệp của tư sản, ban hành quyền tự do dân chủ).",
              "Giai đoạn 1949–giữa thập niên 1970: Tiến hành công nghiệp hóa, điện khí hóa với sự tương trợ của Liên Xô, biến các nước nghèo thành những quốc gia có nền công - nông nghiệp phát triển."
            ]
          },
          {
            badge: "Khu vực Châu Á & Mỹ La-tinh",
            title: "Bước ngoặt mang tính liên lục địa",
            points: [
              "Trung Quốc: Ngày 1-10-1949, nước Cộng hoà Nhân dân Trung Hoa tuyên bố thành lập, chọn con đường xã hội chủ nghĩa, nối liền hậu phương CNXH từ Âu sang Á.",
              "Việt Nam: Sau chiến thắng Điện Biên Phủ 1954, miền Bắc xây dựng CNXH; sau đại thắng mùa Xuân 1975 và thống nhất đất nước 1976, cả nước đi lên CNXH.",
              "Lào: Tháng 12-1975, nước CHDCND Lào thành lập, vững bước trên con đường phát triển CNXH.",
              "Cu-ba: Cách mạng thắng lợi năm 1959. Năm 1961, Fidel Castro tuyên bố Cu-ba bước vào thời kì xây dựng CNXH, trở thành 'ngọn hải đăng CNXH' kiên cường tại Tây bán cầu dù chịu cấm vận tàn khốc."
            ]
          }
        ]
      },
      {
        heading: "2. Khủng hoảng và sự sụp đổ của chế độ XHCN ở Đông Âu và Liên Xô",
        type: "list",
        items: [
          {
            title: "Diễn biến khủng hoảng và tan vỡ (1989–1991)",
            desc: "Từ nửa sau thập niên 1970, kinh tế Liên Xô và Đông Âu suy giảm. Thập niên 1980 rơi vào khủng hoảng trầm trọng. Năm 1989, bức tường Béc-lin sụp đổ, chế độ XHCN ở Đông Âu lần lượt tan rã. Tháng 12-1991, Nhà nước Liên bang Xô viết chính thức giải thể sau 74 năm tồn tại."
          },
          {
            title: "Bốn nguyên nhân cơ bản dẫn đến sụp đổ (Theo SGK Lịch sử 11)",
            desc: "1. Đường lối lãnh đạo chủ quan duy ý chí, duy trì quá lâu cơ chế tập trung quan liêu bao cấp, chậm đổi mới kinh tế thị trường.\n2. Chậm ứng dụng các thành tựu của cách mạng khoa học - công nghệ, khiến năng suất lao động giảm sút, kinh tế trì trệ và làm suy giảm lòng tin của quần chúng nhân dân.\n3. Tiến hành cải tổ phạm nhiều sai lầm nghiêm trọng về đường lối (thực hiện đa nguyên chính trị, từ bỏ vai trò lãnh đạo của Đảng Cộng sản làm tình hình hỗn loạn cực độ).\n4. Hoạt động 'diễn biến hòa bình' chống phá quyết liệt từ các thế lực thù địch bên ngoài kết hợp với phần tử phản bội bên trong."
          }
        ]
      },
      {
        heading: "3. Chủ nghĩa xã hội từ năm 1991 đến nay",
        type: "list",
        items: [
          {
            title: "Việt Nam",
            desc: "Bắt đầu công cuộc Đổi mới từ năm 1986 do Đảng Cộng sản Việt Nam khởi xướng; phát triển kinh tế thị trường định hướng XHCN, giữ vững ổn định chính trị, nâng cao đời sống nhân dân và hội nhập quốc tế sâu rộng."
          },
          {
            title: "Lào",
            desc: "Thực hiện đường lối đổi mới toàn diện từ năm 1986; đẩy mạnh công nghiệp hóa, hiện đại hóa, củng cố an ninh quốc phòng và nâng cao vị thế khu vực."
          },
          {
            title: "Cu-ba",
            desc: "Kiên định con đường XHCN; thực hiện chính sách 'cập nhật hóa mô hình kinh tế'; đạt nhiều thành tựu vượt bậc về y tế, công nghệ sinh học, giáo dục miễn phí toàn dân."
          }
        ]
      },
      {
        heading: "4. Thành tựu cải cách mở cửa của Trung Quốc (từ tháng 12-1978)",
        type: "grid",
        items: [
          {
            badge: "Kinh tế vượt bậc",
            title: "Vươn lên vị trí thứ 2 thế giới",
            points: [
              "Quy mô GDP: Tăng vọt từ 367,9 tỉ nhân dân tệ (1978) lên hơn 114 nghìn tỉ nhân dân tệ (năm 2021).",
              "Tốc độ tăng trưởng bình quân đạt khoảng 9,5%/năm trong giai đoạn 1980–2017 (vượt xa mức trung bình thế giới là 2,9%).",
              "Từ vị trí thứ 8 thế giới năm 1978, Trung Quốc đã vượt qua Nhật Bản để trở thành nền kinh tế lớn thứ hai toàn cầu kể từ năm 2010."
            ]
          },
          {
            badge: "Khoa học - Đô thị",
            title: "Đột phá công nghệ & Hạ tầng hiện đại",
            points: [
              "Chinh phục không gian: Đưa tàu vũ trụ Thần Châu bay vào quỹ đạo, xây dựng trạm không gian Thiên Cung, phát triển hệ thống định vị vệ tinh Bắc Đẩu.",
              "Hạ tầng: Sở hữu mạng lưới đường sắt cao tốc dài nhất thế giới, đi đầu trong mạng viễn thông 5G, trí tuệ nhân tạo (AI).",
              "Biểu tượng Thâm Quyến: Từ một làng chài ven biển nghèo nàn trở thành siêu đô thị công nghệ cao, đặc khu kinh tế hàng đầu thế giới."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Công cuộc Cải cách - Mở cửa của Trung Quốc bắt đầu từ thời điểm nào?",
        options: [
          "A. Tháng 10-1949",
          "B. Tháng 12-1978",
          "C. Tháng 1-1986",
          "D. Tháng 12-1991"
        ],
        answer: 1,
        explain: "Tháng 12-1978, Trung ương Đảng Cộng sản Trung Quốc dưới sự khởi xướng của Đặng Tiểu Bình đã quyết định thực hiện đường lối Cải cách - Mở cửa."
      },
      {
        q: "Nguyên nhân mang tính trực tiếp và quyết định làm sụp đổ chế độ xã hội chủ nghĩa ở Liên Xô năm 1991 là gì?",
        options: [
          "A. Sự cấm vận kinh tế kéo dài của Mỹ",
          "B. Sai lầm nghiêm trọng trong đường lối cải tổ, xóa bỏ vai trò lãnh đạo của Đảng Cộng sản",
          "C. Chiến tranh thế giới thứ ba bùng nổ",
          "D. Thiên tai và hạn hán kéo dài"
        ],
        answer: 1,
        explain: "Sai lầm nghiêm trọng trong cải tổ (thực hiện đa nguyên, từ bỏ vai trò lãnh đạo độc tôn của Đảng) là nguyên nhân trực tiếp dẫn tới sự tan rã của Liên Xô."
      },
      {
        q: "Thành tựu kinh tế nổi bật nhất khẳng định vị thế quốc tế của Trung Quốc sau hơn 40 năm cải cách mở cửa là gì?",
        options: [
          "A. Trở thành nước có thu nhập bình quân đầu người cao nhất thế giới",
          "B. Vươn lên trở thành nền kinh tế lớn thứ hai thế giới từ năm 2010",
          "C. Hoàn toàn xóa bỏ khu vực kinh tế tư nhân",
          "D. Độc quyền toàn bộ thương mại đường biển châu Á"
        ],
        answer: 1,
        explain: "Từ năm 2010, Trung Quốc đã vượt Nhật Bản để giữ vị trí nền kinh tế có quy mô GDP lớn thứ hai thế giới (sau Hoa Kỳ)."
      }
    ]
  },

  5: {
    num: 5,
    topicNum: 3,
    topicTitle: "Quá trình giành độc lập dân tộc của các quốc gia Đông Nam Á",
    title: "Quá trình xâm lược và cai trị của chủ nghĩa thực dân ở Đông Nam Á",
    summary: "Khái quát quá trình xâm lược kéo dài nhiều thế kỉ của chủ nghĩa thực dân phương Tây ở Đông Nam Á (hải đảo và lục địa), hệ thống chính sách cai trị chia để trị thâm độc và bài học giữ vững độc lập qua cải cách của Xiêm (Thái Lan).",
    sections: [
      {
        heading: "1. Quá trình xâm lược Đông Nam Á của thực dân phương Tây",
        type: "list",
        items: [
          {
            title: "Khởi đầu và bối cảnh xâm nhập (từ thế kỉ XVI)",
            desc: "Phương Tây xâm nhập thông qua hoạt động giao thương và truyền giáo; lập thương điếm rồi chuẩn bị lực lượng. Bối cảnh thuận lợi là chế độ phong kiến ở phần lớn Đông Nam Á đang khủng hoảng, suy thoái trầm trọng, mâu thuẫn xã hội bùng nổ."
          },
          {
            title: "Xâm lược Đông Nam Á hải đảo (kéo dài gần 4 thế kỉ)",
            desc: "Năm 1511: Bồ Đào Nha đánh chiếm Ma-lắc-ca (cửa ngõ biển chiến lược).\nGiữa thế kỉ XVI: Tây Ban Nha xâm lược Phi-lip-pin (sau năm 1898 rơi vào tay Mỹ sau chiến tranh Mỹ - Tây Ban Nha).\nCuối thế kỉ XVI: Hà Lan xâm nhập In-đô-nê-xi-a, đến giữa thế kỉ XIX kiểm soát hoàn toàn.\nĐầu thế kỉ XX: Anh hoàn thành thâu tóm Ma-lai-xi-a, Xin-ga-po và Bru-nây."
          },
          {
            title: "Xâm lược Đông Nam Á lục địa (chủ yếu trong thế kỉ XIX)",
            desc: "Anh tiến hành ba cuộc chiến tranh (1824–1885) để chiếm trọn Miến Điện (Mi-an-ma).\nPháp tiến hành chiến tranh xâm lược ba nước Đông Dương (Việt Nam, Lào, Cam-pu-chia) trong gần nửa thế kỉ (1858–1893)."
          },
          {
            title: "Trường hợp ngoại lệ duy nhất: Xiêm (Thái Lan)",
            desc: "Xiêm là quốc gia duy nhất ở Đông Nam Á giữ được nền độc lập về mặt danh nghĩa, khôn khéo trở thành 'vùng đệm' địa chính trị giữa hai thế lực đế quốc Anh và Pháp."
          }
        ]
      },
      {
        heading: "2. Chính sách cai trị thâm độc của chủ nghĩa thực dân",
        type: "grid",
        items: [
          {
            badge: "Chính trị & An ninh",
            title: "Thâu tóm quyền lực & 'Chia để trị'",
            points: [
              "Bộ máy thực dân nắm độc quyền lập pháp, hành pháp, tư pháp, quân sự và ngoại giao; duy trì tầng lớp phong kiến tay sai làm bù nhìn đàn áp nhân dân.",
              "Chính sách 'Chia để trị': Cố tình chia cắt các vùng miền, kích động hằn thù sắc tộc, tôn giáo và địa phương để làm suy yếu khối đoàn kết dân tộc.",
              "Tuyển mộ thanh niên bản địa vào quân đội thuộc địa để 'dùng người bản xứ đánh người bản xứ'."
            ]
          },
          {
            badge: "Kinh tế & Xã hội",
            title: "Bóc lột tàn bạo & Nô dịch văn hóa",
            points: [
              "Vơ vét tài nguyên: Chiếm đoạt ruộng đất lập đồn điền cao su, chè, cà phê; bòn rút khoáng sản (thiếc, than đá, dầu mỏ); đánh thuế thân, thuế muối, thuế rượu ngặt nghèo.",
              "Biến thuộc địa thành thị trường tiêu thụ hàng hóa độc quyền và nơi cung cấp nguyên liệu thô rẻ mạt cho chính quốc.",
              "Văn hóa 'ngu dân': Hạn chế tối đa mở trường học, duy trì tệ nạn mù chữ và hủ tục; đầu độc người dân bằng rượu cồn và thuốc phiện (năm 1926 tại Việt Nam hơn 90% dân số mù chữ; năm 1931 tại Mã Lai chỉ 8,5% dân số biết chữ)."
            ]
          }
        ]
      },
      {
        heading: "3. Cuộc cải cách lịch sử của Xiêm (Thái Lan)",
        type: "list",
        items: [
          {
            title: "Vua Ra-ma IV (trị vì 1851–1868)",
            desc: "Khởi xướng chính sách mở cửa giao thương với phương Tây, từng bước tiếp thu khoa học kĩ thuật hiện đại để thoát thế cô lập."
          },
          {
            title: "Vua Ra-ma V (Chu-la-long-con, trị vì 1868–1910)",
            desc: "Tiến hành cuộc đại cải cách toàn diện trên các lĩnh vực:\n• Kinh tế: Khuyến khích đầu tư công nghiệp, đường sắt; giảm/miễn thuế nông nghiệp (1874); hiện đại hóa quản lí ruộng đất.\n• Hành chính: Tổ chức chính phủ theo mô hình nội các phương Tây (1892), bãi bỏ lệ nông nô và nô lệ.\n• Giáo dục: Công bố chương trình giáo dục hiện đại đầu tiên (1898), cử thanh niên ưu tú du học phương Tây.\n• Ngoại giao mềm dẻo ('cây tre'): Chấp nhận nhượng một số vùng phụ thuộc ở Lào, Cam-pu-chia cho Pháp và ở Mã Lai cho Anh để giữ vững chủ quyền cốt lõi của vương quốc."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Quốc gia nào ở Đông Nam Á là nước duy nhất giữ được nền độc lập tương đối trước làn sóng xâm lược của thực dân phương Tây?",
        options: [
          "A. Phi-lip-pin",
          "B. Xiêm (Thái Lan)",
          "C. Miến Điện (Myanmar)",
          "D. In-đô-nê-xi-a"
        ],
        answer: 1,
        explain: "Nhờ chính sách ngoại giao mềm dẻo khôn khéo và công cuộc cải cách toàn diện của các vua Ra-ma IV, Ra-ma V, Xiêm giữ được độc lập và trở thành vùng đệm giữa Anh và Pháp."
      },
      {
        q: "Thực dân Anh đã hoàn thành việc thôn tính Miến Điện (Myanmar) thông qua bao nhiêu cuộc chiến tranh xâm lược?",
        options: [
          "A. Một cuộc chiến tranh",
          "B. Hai cuộc chiến tranh",
          "C. Ba cuộc chiến tranh (1824–1885)",
          "D. Bốn cuộc chiến tranh"
        ],
        answer: 2,
        explain: "Anh tiến hành ba cuộc chiến tranh xâm lược kéo dài từ năm 1824 đến 1885 để biến Miến Điện thành một tỉnh thuộc thuộc địa Ấn Độ của Anh."
      },
      {
        q: "Chính sách chính trị thâm độc bậc nhất mà chủ nghĩa thực dân áp dụng tại tất cả các nước thuộc địa Đông Nam Á là gì?",
        options: [
          "A. Xây dựng nền cộng hòa dân chủ",
          "B. Chính sách 'Chia để trị' nhằm phá vỡ khối đoàn kết dân tộc",
          "C. Khuyến khích tự do ngôn luận",
          "D. Bình đẳng sắc tộc tuyệt đối"
        ],
        answer: 1,
        explain: "Chính sách 'Chia để trị' nhằm khoét sâu mâu thuẫn sắc tộc, tôn giáo và địa phương để làm suy yếu khả năng đoàn kết chống thực dân của nhân dân bản xứ."
      }
    ]
  },

  6: {
    num: 6,
    topicNum: 3,
    topicTitle: "Quá trình giành độc lập dân tộc của các quốc gia Đông Nam Á",
    title: "Hành trình đi đến độc lập dân tộc ở Đông Nam Á",
    summary: "Hệ thống hóa phong trào kháng chiến chống xâm lược ban đầu, 3 giai đoạn của phong trào giải phóng dân tộc (cuối XIX-1920, 1920-1945, 1945-1975), tác động nặng nề của di sản thực dân và con đường tái thiết phát triển kinh tế (từ thay thế nhập khẩu sang hướng về xuất khẩu) cùng sự ra đời của ASEAN (1967).",
    sections: [
      {
        heading: "1. Phong trào chống thực dân xâm lược ban đầu",
        type: "grid",
        items: [
          {
            badge: "Khu vực Hải đảo",
            title: "Khởi nghĩa kiên cường",
            points: [
              "In-đô-nê-xi-a: Khởi nghĩa của Hoàng tử Đi-pô-nê-gô-rô (1825–1830) trên đảo Gia-va lôi cuốn đông đảo quý tộc và nhân dân tham gia, gây tổn thất kinh hoàng cho quân đội thực dân Hà Lan.",
              "Phi-lip-pin: Cuộc đấu tranh chống Tây Ban Nha kéo dài hơn 3 thế kỉ; tiêu biểu là cuộc khởi nghĩa Da-ga-ho ở đảo Bô-hô kéo dài suốt 85 năm (1744–1829)."
            ]
          },
          {
            badge: "Khu vực Lục địa",
            title: "Kháng chiến bền bỉ",
            points: [
              "Miến Điện: Sau khi triều đình đầu hàng năm 1885, phong trào chiến tranh du kích của nhân dân Miến Điện tiếp tục bùng cháy dữ dội hơn 10 năm sau đó.",
              "Việt Nam: Cuộc kháng chiến chống Pháp bùng nổ từ năm 1858 tại Đà Nẵng, lan rộng khắp Nam Kì và Bắc Kì; thực dân Pháp phải mất 26 năm (1858–1884) mới đặt được ách đô hộ.",
              "Cam-pu-chia: Khởi nghĩa của Si-vô-tha (1861–1892), A-cha Xoa (1863–1866) và Pu-côm-bô (1866–1867) tạo nên liên minh chiến đấu chặt chẽ giữa nhân dân Việt Nam và Cam-pu-chia."
            ]
          }
        ]
      },
      {
        heading: "2. Ba giai đoạn đấu tranh giành độc lập dân tộc",
        type: "list",
        items: [
          {
            title: "Giai đoạn 1: Cuối thế kỉ XIX đến năm 1920",
            desc: "Bước chuyển từ ý thức hệ phong kiến sang xu hướng tư sản; các phong trào cải cách và bạo động cách mạng tư sản xuất hiện. Tiêu biểu là cuộc cách mạng 1896–1898 ở Phi-lip-pin khai sinh nền cộng hòa đầu tiên."
          },
          {
            title: "Giai đoạn 2: Từ năm 1920 đến năm 1945",
            desc: "Giai cấp vô sản bước lên vũ đài lịch sử, phong trào theo khuynh hướng vô sản phát triển mạnh mẽ; các Đảng Cộng sản lần lượt thành lập: In-đô-nê-xi-a (1920), Việt Nam, Mã Lai, Xiêm, Phi-lip-pin (thập niên 1930)."
          },
          {
            title: "Giai đoạn 3: Từ năm 1945 đến năm 1975",
            desc: "Làn sóng phi thực dân hóa dâng cao mạnh mẽ: Năm 1945, nhân cơ hội Nhật đầu hàng, ba nước In-đô-nê-xi-a (17-8), Việt Nam (2-9) và Lào (12-10) chớp thời cơ tuyên bố độc lập. Tiếp đó Phi-lip-pin (1946), Miến Điện (1948), Mã Lai (1957) giành độc lập. Đến năm 1975, các nước Đông Dương toàn thắng. Năm 1984, Bru-nây tuyên bố độc lập."
          }
        ]
      },
      {
        heading: "3. Tái thiết và chiến lược phát triển kinh tế",
        type: "list",
        items: [
          {
            title: "Chiến lược Công nghiệp hóa thay thế nhập khẩu",
            desc: "Áp dụng từ giữa thập niên 1950 tại các nước sáng lập ASEAN: Chú trọng sản xuất hàng tiêu dùng nội địa thay thế hàng nhập khẩu, bảo hộ mậu dịch nhằm xây dựng nền kinh tế tự chủ; hạn chế: thiếu vốn, kĩ thuật và thị trường hạn hẹp."
          },
          {
            title: "Chiến lược Công nghiệp hóa hướng về xuất khẩu",
            desc: "Chuyển đổi từ thập niên 1960–1970: Mở cửa kinh tế, thu hút vốn FDI, đẩy mạnh sản xuất hàng xuất khẩu làm động lực then chốt, tạo ra bước nhảy vọt kinh tế của các 'con hổ kinh tế' Đông Nam Á."
          },
          {
            title: "Sự ra đời của Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
            desc: "Ngày 8-8-1967, Tuyên bố Băng Cốc (Thái Lan) được kí kết, thành lập ASEAN với 5 nước sáng lập (In-đô-nê-xi-a, Ma-lai-xi-a, Phi-lip-pin, Xin-ga-po, Thái Lan); ngày nay phát triển thành một cộng đồng thịnh vượng, đoàn kết gồm 11 quốc gia."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Năm 1945, những quốc gia nào ở Đông Nam Á đã chớp thời cơ Nhật Bản đầu hàng Đồng minh để tuyên bố độc lập?",
        options: [
          "A. In-đô-nê-xi-a, Việt Nam và Lào",
          "B. Miến Điện, Mã Lai và Bru-nây",
          "C. Thái Lan, Phi-lip-pin và Xin-ga-po",
          "D. Cam-pu-chia, Đông Ti-mo và Mi-an-ma"
        ],
        answer: 0,
        explain: "Tháng 8 - 10 năm 1945, ba quốc gia ở Đông Nam Á đã chớp thời cơ giải phóng và tuyên bố độc lập là In-đô-nê-xi-a (17-8), Việt Nam (2-9) và Lào (12-10)."
      },
      {
        q: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào ngày tháng năm nào và tại đâu?",
        options: [
          "A. 8-8-1967 tại Băng Cốc (Thái Lan)",
          "B. 2-9-1945 tại Hà Nội (Việt Nam)",
          "C. 1-1-1995 tại Gia-các-ta (In-đô-nê-xi-a)",
          "D. 24-4-1955 tại Băng-đung (In-đô-nê-xi-a)"
        ],
        answer: 0,
        explain: "Ngày 8-8-1967, đại diện 5 quốc gia sáng lập đã kí Tuyên bố Băng Cốc thành lập Hiệp hội các quốc gia Đông Nam Á (ASEAN)."
      },
      {
        q: "Trong quá trình công nghiệp hóa sau độc lập, các nước sáng lập ASEAN đã chuyển từ chiến lược nào sang chiến lược nào?",
        options: [
          "A. Từ kinh tế bao cấp sang kinh tế tư bản",
          "B. Từ công nghiệp hóa thay thế nhập khẩu sang công nghiệp hóa hướng về xuất khẩu",
          "C. Từ nông nghiệp lúa nước sang thuần khai khoáng",
          "D. Từ mở cửa tự do sang bế quan tỏa cảng"
        ],
        answer: 1,
        explain: "Các nước sáng lập ASEAN ban đầu thực hiện công nghiệp hóa thay thế nhập khẩu, sau đó chuyển sang chiến lược công nghiệp hóa hướng về xuất khẩu."
      }
    ]
  }
};

module.exports = part1Lessons;
