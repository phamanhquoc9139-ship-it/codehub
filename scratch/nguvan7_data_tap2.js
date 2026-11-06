// Data for Ngữ Văn 7 - Tập 2 (Bài 6 -> Bài 10) + Phụ lục & Bảng tổng kết
// Bộ Kết nối tri thức với cuộc sống

const tap2Data = [
  {
    id: "bai-6",
    unit: "BÀI 6",
    volume: "TẬP HAI",
    title: "Bài học cuộc sống",
    theme: "Chiêm nghiệm trí tuệ dân gian qua truyện ngụ ngôn, tục ngữ và truyện truyền kì",
    color: "amber",
    readTheory: {
      intro: "Học truyện ngụ ngôn, tục ngữ và truyện truyền kì để suy ngẫm về kinh nghiệm sống, tính khiêm tốn, sự kiên định và lòng biết ơn.",
      texts: [
        {
          name: "Đẽo cày giữa đường",
          author: "Truyện ngụ ngôn Việt Nam",
          type: "Truyện ngụ ngôn",
          summary: "Một bác thợ mộc dốc vốn mua gỗ đẽo cày. Mỗi khi có người đi qua khuyên phải đẽo to hơn, nhỏ hơn, cao hơn hay to gấp đôi cho voi cày, bác đều răm rắp nghe theo. Cuối cùng, gỗ hỏng hết, vốn liếng tiêu tan thành con số không.",
          keyPoints: [
            "Bài học đắt giá: Cần có chính kiến, kiên định với mục tiêu và biết lắng nghe lời khuyên một cách tỉnh táo, có chọn lọc.",
            "Tiếng cười châm biếm thói ba phải, nhẹ dạ cả tin và thiếu hiểu biết chuyên môn."
          ]
        },
        {
          name: "Ếch ngồi đáy giếng",
          author: "Trang Tử",
          type: "Truyện ngụ ngôn",
          summary: "Con ếch sống lâu ngày trong giếng cạn, ngỡ bầu trời chỉ bé bằng chiếc vung và bản thân nó là chúa tể. Khi mưa ngập đưa nó ra ngoài biển lớn, giẫm bẹp bởi một con rùa biển khổng lồ, nó mới bàng hoàng nhận ra sự nông cạn của mình.",
          keyPoints: [
            "Ý nghĩa triết lí: Không gian sống hạn hẹp dễ sinh thói tự phụ, kiêu ngạo; con người phải luôn khiêm tốn, mở rộng tầm nhìn để hòa nhập thế giới rộng lớn."
          ]
        },
        {
          name: "Con mối và con kiến",
          author: "Nam Hương",
          type: "Truyện ngụ ngôn thơ",
          summary: "Cuộc đối thoại giữa con mối chỉ biết ăn bám đục khoét gỗ lim sống hưởng thụ và con kiến chăm chỉ cần cù tha mồi tích lũy cho mùa mưa rét.",
          keyPoints: [
            "Tôn vinh giá trị của lao động chân chính và lên án thói ăn bám, lười nhác hưởng lạc."
          ]
        },
        {
          name: "Một số câu tục ngữ Việt Nam",
          author: "Văn học dân gian",
          type: "Tục ngữ",
          summary: "Tuyển tập những câu đúc kết kinh nghiệm quý báu về thời tiết, sản xuất nông nghiệp, lao động và cách ứng xử trong xã hội (Chuồn chuồn bay thấp..., Mau sao thì nắng..., Đói cho sạch, rách cho thơm...).",
          keyPoints: [
            "Đặc trưng tục ngữ: Ngắn gọn, có vần lưng/chân nhịp nhàng, giàu hình ảnh và phép đối xứng."
          ]
        },
        {
          name: "Con hổ có nghĩa",
          author: "Vũ Trinh",
          type: "Truyện truyền kì / Trung đại",
          summary: "Chuyện con hổ trắng đền ơn bà đỡ Trần đã đỡ đẻ cho hổ cái và một con hổ khác đền đáp người tiều phu đã nhổ khúc xương hóc trong họng nó bằng những con mồi tươi ngon.",
          keyPoints: [
            "Đề cao đạo lí 'uống nước nhớ nguồn', trọng tình trọng nghĩa ngay cả ở loài thú dữ dữ tợn."
          ]
        },
        {
          name: "Thiên nga, cá măng và tôm hùm",
          author: "Ivan Krylov",
          type: "Truyện ngụ ngôn thơ / Thực hành đọc",
          summary: "Cả ba cùng hăm hở kéo chiếc xe nhưng thiên nga kéo bổng lên trời, cá măng kéo tọt xuống nước, tôm hùm lại bò giật lùi, khiến chiếc xe vẫn nằm trơ trơ một chỗ.",
          keyPoints: [
            "Bài học về tinh thần đoàn kết, đồng thuận mục tiêu và cách tổ chức hiệp đồng trong tập thể."
          ]
        }
      ],
      concepts: [
        {
          term: "Truyện ngụ ngôn",
          desc: "Tác phẩm tự sự ngắn bằng văn xuôi hoặc thơ, nhân vật thường là con vật/đồ vật được nhân hóa hoặc con người; mượn chuyện loài vật để bóng gió khuyên nhủ bài học đạo lí sống."
        },
        {
          term: "Tục ngữ",
          desc: "Thể loại văn học dân gian đúc kết tri thức, kinh nghiệm sống dưới dạng câu nói ngắn gọn, nhịp nhàng, có vần điệu."
        },
        {
          term: "Thành ngữ",
          desc: "Cụm từ cố định có tính biểu trưng và nghĩa bóng bẩy, không thể suy ra bằng cách cộng gộp nghĩa cơ học của từng từ riêng lẻ (ếch ngồi đáy giếng, đẽo cày giữa đường...)."
        },
        {
          term: "Biện pháp Nói quá (Phóng đại)",
          desc: "Biện pháp tu từ phóng đại quy mô, tính chất của sự vật hiện tượng nhằm nhấn mạnh, gây ấn tượng mạnh mẽ hoặc tạo tiếng cười."
        }
      ]
    },
    vietnameseLang: {
      topic: "Thành ngữ và Biện pháp tu từ Nói quá",
      content: "Nhận biết ý nghĩa biểu trưng của thành ngữ và phân biệt biện pháp nói quá với hành vi nói khoác lác bịa đặt.",
      examples: [
        {
          original: "Anh ấy suy nghĩ rất cẩn thận trước khi đưa ra quyết định.",
          expanded: "Anh ấy luôn 'cân đo đong đếm', 'nghĩ chín thì nói mười' chứ không hành động vội vàng.",
          note: "Thành ngữ tăng sức gợi hình ảnh và tính triết lí dân gian."
        },
        {
          original: "Bác ấy rất khỏe, làm việc không biết mệt.",
          expanded: "Sức khỏe của bác ấy 'ăn như rồng cuốn, uống như rồng leo, làm như hổ vồ'.",
          note: "Nói quá nhằm ngợi ca sức mạnh lao động phi thường, không mang tính định lượng tuyệt đối."
        }
      ],
      rules: [
        "Phân biệt nói quá (nghệ thuật phóng đại có chủ đích tích cực) với nói khoác (nói dối nhằm lừa mị, khoe khoang vô căn cứ)."
      ]
    },
    writing: {
      type: "Viết bài văn nghị luận về một vấn đề đời sống (Thể hiện ý kiến tán thành)",
      steps: [
        "1. Mở bài: Nêu vấn đề đời sống cần bàn luận (ví dụ: Tinh thần tự học, lòng khiêm tốn, bảo vệ lẽ phải); bày tỏ rõ ràng ý kiến tán thành.",
        "2. Thân bài: Triển khai từ 2 đến 3 luận điểm với lí lẽ sắc bén và bằng chứng thực tế tiêu biểu.",
        "   - Luận điểm 1: Giải thích bản chất của vấn đề và vì sao nó đúng đắn.",
        "   - Luận điểm 2: Phân tích các lợi ích to lớn mà vấn đề mang lại cho bản thân và cộng đồng.",
        "   - Bác bỏ các biểu hiện lệch lạc, suy nghĩ phiến diện đối lập.",
        "3. Kết bài: Khẳng định tính đúng đắn của ý kiến và rút ra bài học hành động thiết thực."
      ]
    },
    speakingListening: {
      topic: "Kể lại một truyện ngụ ngôn bằng lời văn của em",
      guide: "Nhập tâm vào cốt truyện, diễn đạt mạch lạc, dùng ngữ điệu và cử chỉ tự nhiên; rút ra bài học triết lí sâu sắc ở phần kết."
    },
    quiz: [
      {
        question: "Hành động nào của con hổ trong truyện 'Con hổ có nghĩa' thể hiện rõ nhất phẩm chất biết ơn sâu nặng?",
        options: [
          "Gầm vang khắp rừng xanh thị uy sức mạnh chúa tể",
          "Mang một con hươu béo tốt đến trước cửa nhà bà đỡ Trần và nằm phục bên mộ người tiều phu khi ông qua đời",
          "Cho phép người tiều phu chặt hết cây gỗ trong rừng",
          "Dẫn theo bầy hổ con đến học chữ ở làng"
        ],
        answer: 1,
        explain: "Con hổ mang mồi đến trả ơn bà đỡ và sau đó than khóc, cúng tế bên mộ bác tiều phu là minh chứng cảm động cho lòng tri ân sâu nặng."
      },
      {
        question: "Câu nào dưới đây sử dụng biện pháp tu từ Nói quá?",
        options: [
          "Cơm sôi bớt lửa, con nhỏ đỡ đau",
          "Bàn tay ta làm nên tất cả / Có sức người sỏi đá cũng thành cơm",
          "Trời nắng chang chang tiếng ve kêu râm ran",
          "Sông sâu sóng cả chớ ngã tay chèo"
        ],
        answer: 1,
        explain: "Hình ảnh 'sỏi đá cũng thành cơm' phóng đại sức mạnh lao động của con người có thể cải tạo cả sỏi đá khô cằn thành ruộng đồng trù phú."
      }
    ]
  },
  {
    id: "bai-7",
    unit: "BÀI 7",
    volume: "TẬP HAI",
    title: "Thế giới viễn tưởng",
    theme: "Chắp cánh trí tưởng tượng khoa học, khám phá tương lai và những bí ẩn của vũ trụ",
    color: "cyan",
    readTheory: {
      intro: "Khám phá thể loại truyện khoa học viễn tưởng với những cỗ máy tương lai, đại dương sâu thẳm và hành trình xuyên vũ trụ kì vĩ.",
      texts: [
        {
          name: "Cuộc chạm trán trên đại dương (Trích 'Hai vạn dặm dưới biển')",
          author: "Jules Verne",
          type: "Tiểu thuyết khoa học viễn tưởng",
          summary: "Đoàn thám hiểm của giáo sư A-rôn-nắc truy tìm con 'quái vật biển khổng lồ' và phát hiện ra đó thực chất là chiếc tàu ngầm hiện đại tối tân Nô-ti-lớt (Nautilus) do thuyền trưởng Nê-mô bí ẩn chế tạo trước thời đại hàng trăm năm.",
          keyPoints: [
            "Yếu tố khoa học viễn tưởng: Dự báo chuẩn xác về tàu ngầm chạy bằng điện năng, vũ khí phát quang, vỏ thép kiên cố.",
            "Tình huống li kì, kịch tính, kết hợp kiến thức hải dương học và sức tưởng tượng thiên tài của Jules Verne."
          ]
        },
        {
          name: "Đường vào trung tâm vũ trụ (Trích 'Thiên Mã')",
          author: "Hà Thủy Nguyên",
          type: "Truyện viễn tưởng Việt Nam",
          summary: "Cuộc du hành kì thú của nhóm bạn trẻ cưỡi trên con Thiên Mã vượt qua không gian đa chiều, thâm nhập vào 'Tâm vũ trụ' – nơi lưu giữ bảo tàng gen sống của muôn loài sinh vật cổ xưa.",
          keyPoints: [
            "Sáng tạo không gian viễn tưởng: Sự kết hợp giữa huyền thoại phương Đông và khoa học hiện đại (công nghệ gen, lỗ giun vũ trụ)."
          ]
        },
        {
          name: "Dấu ấn Hồ Khanh",
          author: "Nhật Văn",
          type: "Văn bản thông tin thực tế",
          summary: "Kể về hành trình kiên trì phi thường của người tiều phu Hồ Khanh ở Quảng Bình trong việc phát hiện và dẫn đường cho đoàn thám hiểm Hoàng gia Anh khám phá ra Sơn Đoòng – hang động tự nhiên lớn nhất thế giới.",
          keyPoints: [
            "Đối chiếu thực tế: Khám phá kỳ quan thực tế của con người tạo nguồn cảm hứng cho những trang viết viễn tưởng."
          ]
        },
        {
          name: "Chiếc đũa thần (Trích 'Tĩnh vân Tiên Nữ')",
          author: "Ivan Efremov",
          type: "Truyện viễn tưởng / Thực hành đọc",
          summary: "Cuộc sống tương lai khi loài người làm chủ những nguồn năng lượng nguyên tử mới và ứng dụng các thiết bị điều khiển vật chất siêu việt để cải tạo các thiên hà xa xôi.",
          keyPoints: [
            "Tầm nhìn nhân văn của văn học viễn tưởng: Khoa học phục vụ sự phồn vinh và hòa bình của vũ trụ."
          ]
        }
      ],
      concepts: [
        {
          term: "Truyện khoa học viễn tưởng (Sci-Fi)",
          desc: "Tác phẩm hư cấu dựa trên những giả thuyết khoa học tiến bộ, dự đoán về sự phát triển của công nghệ, thám hiểm không gian, đại dương hoặc du hành thời gian trong tương lai."
        },
        {
          term: "Mạch lạc và Liên kết",
          desc: "Mạch lạc là sự thống nhất xuyên suốt về chủ đề và trình tự triển khai logic nội dung. Liên kết là các dấu hiệu hình thức ngôn ngữ kết nối các câu, các đoạn (phép lặp, phép thế, phép nối, phép liên tưởng)."
        },
        {
          term: "Dấu chấm lửng (…)",
          desc: "Dấu câu dùng để biểu thị lời nói ngập ngừng/ngắt quãng; biểu thị phần liệt kê chưa hết; hoặc tạo khoảng lặng cảm xúc gợi nhiều suy ngẫm."
        }
      ]
    },
    vietnameseLang: {
      topic: "Mạch lạc, Liên kết trong văn bản và Công dụng của Dấu chấm lửng",
      content: "Hiểu bản chất của tính mạch lạc (logic nội dung) kết hợp với các phương tiện liên kết hình thức và cách dùng dấu ba chấm.",
      examples: [
        {
          original: "Chiếc tàu ngầm lao vút đi trong màn đêm... Tiếng động cơ gầm rú... Và rồi... một luồng sáng chói lòa bùng lên!",
          expanded: "Dấu chấm lửng tạo cảm giác hồi hộp, ngắt quãng thời gian, biểu thị sự bất ngờ choáng ngợp trước hiện tượng bí ẩn.",
          note: "Tạo nhịp điệu dồn dập cho các cảnh tượng phiêu lưu kịch tính."
        }
      ],
      rules: [
        "Không dùng dấu chấm lửng bừa bãi khi câu văn đã diễn đạt trọn vẹn và không có chủ ý tạo khoảng lặng nghệ thuật."
      ]
    },
    writing: {
      type: "Viết bài văn kể lại một sự việc có thật liên quan đến nhân vật hoặc sự kiện lịch sử",
      steps: [
        "1. Chọn sự việc có thật có xuất xứ lịch sử rõ ràng (ví dụ: Cuộc khởi nghĩa Hai Bà Trưng, trận Bạch Đằng 938, Bác Hồ đọc Tuyên ngôn Độc lập).",
        "2. Giới thiệu bối cảnh thời gian, không gian, nhân vật lịch sử trung tâm.",
        "3. Kể lại diễn biến tuần tự theo trình tự thời gian nguyên nhân - kết quả.",
        "4. Sử dụng chi tiết xác thực có thể kiểm chứng được, kết hợp miêu tả và bình luận ý nghĩa lịch sử.",
        "5. Tuyệt đối không hư cấu làm sai lệch bản chất lịch sử hoặc bịa đặt lời thoại bừa bãi."
      ]
    },
    speakingListening: {
      topic: "Thảo luận về vai trò và thách thức của công nghệ trong đời sống tương lai",
      guide: "Phân tích 2 mặt của trí tuệ nhân tạo (AI), tự động hóa, robot: nâng cao năng suất nhưng cũng tiềm ẩn nguy cơ lệ thuộc công nghệ và suy giảm tương tác thực giữa người với người."
    },
    quiz: [
      {
        question: "Cơ sở khoa học nào giúp nhà văn Jules Verne viết nên cuốn tiểu thuyết 'Hai vạn dặm dưới biển' từ thế kỉ XIX?",
        options: [
          "Ông đã mua được một chiếc tàu ngầm thật để đi thám hiểm vòng quanh thế giới",
          "Dựa trên những phát minh sơ khai về điện năng, tàu lặn quân sự và trí tưởng tượng khoa học thiên tài kết hợp kiến thức vật lí, sinh học biển phong phú",
          "Nhờ vào những câu chuyện cổ tích dân gian về quái vật biển",
          "Chép lại hồi kí của các thủy thủ hải quân hoàng gia"
        ],
        answer: 1,
        explain: "Jules Verne là bậc thầy khoa học viễn tưởng; ông nắm bắt xu hướng công nghệ điện năng và hải dương học đương thời để dự phóng trước tương lai hàng trăm năm."
      },
      {
        question: "Trong câu: 'Những cánh rừng đại ngàn, những dòng sông xanh biếc, những ngọn núi hùng vĩ… tất cả đã làm nên hồn thiêng sông núi', dấu chấm lửng có tác dụng gì?",
        options: [
          "Biểu thị lời nói của người phát ngôn bị ngập ngừng do xúc động",
          "Biểu thị bộ phận liệt kê chưa hết các cảnh đẹp của đất nước",
          "Báo hiệu một câu hỏi tu từ hóc búa",
          "Dùng để ngắt dòng câu thơ"
        ],
        answer: 1,
        explain: "Dấu chấm lửng đặt sau các cảnh quan thiên nhiên cho thấy đất nước còn rất nhiều cảnh đẹp khác chưa thể kể xiết (biểu thị phần liệt kê chưa hết)."
      }
    ]
  },
  {
    id: "bai-8",
    unit: "BÀI 8",
    volume: "TẬP HAI",
    title: "Trải nghiệm để trưởng thành",
    theme: "Hành trình tự hoàn thiện nhân cách, văn hóa đọc và sức mạnh của cội nguồn",
    color: "teal",
    readTheory: {
      intro: "Tìm hiểu văn bản nghị luận đời sống sâu sắc về việc tự tìm kiếm hướng đi, rèn luyện văn hóa đọc sách và tình cảm gia đình thiêng liêng.",
      texts: [
        {
          name: "Bản đồ dẫn đường",
          author: "Daniel Gottlieb",
          type: "Văn bản nghị luận",
          summary: "Bức thư của người ông thông thái gửi đứa cháu trai mắc chứng tự kỉ, bàn về ý nghĩa của 'tấm bản đồ cuộc đời'. Tác giả chỉ ra rằng bản đồ của người khác chỉ để tham khảo, mỗi cá nhân phải tự vẽ nên tấm bản đồ cho chính mình bằng trải nghiệm thực tế.",
          keyPoints: [
            "Hình tượng ẩn dụ 'tấm bản đồ': Những chỉ dẫn, định hướng giá trị của gia đình, xã hội.",
            "Bài học tự chủ: Dũng cảm đi con đường của riêng mình, chấp nhận sai lầm để trưởng thành."
          ]
        },
        {
          name: "Hãy cầm lấy và đọc",
          author: "Huỳnh Như Phương",
          type: "Nghị luận văn hóa",
          summary: "Khẳng định vai trò sống còn của sách và văn hóa đọc đối với sự khai phóng tâm hồn, trau dồi tri thức và hoàn thiện nhân cách của mỗi con người trong thời đại số.",
          keyPoints: [
            "Lí lẽ đanh thép: Sách là kho tàng bất tử của nhân loại; đọc sách là cuộc đối thoại vượt thời gian giữa người đọc với các bậc vĩ nhân.",
            "Thông điệp hành động: Hãy biến việc đọc sách thành thói quen thường nhật, tự giác và say mê."
          ]
        },
        {
          name: "Nói với con",
          author: "Y Phương",
          type: "Thơ tự do",
          summary: "Lời tâm tình ấm áp của người cha dân tộc Tày dặn dò con về cội nguồn sinh dưỡng (gia đình đầm ấm, quê hương 'người đồng mình' cần cù tài hoa), nhắc nhở con vững bước vào đời với lòng tự hào và khí phách kiên cường.",
          keyPoints: [
            "Hình ảnh 'người đồng mình': Đan lờ cài nan hoa, vách nhà ken câu hát; sống mộc mạc mà giàu chí lớn, 'tự đục đá kê cao quê hương'.",
            "Lời nhắn nhủ tha thiết: 'Con ơi tuy thô sơ da thịt / Lên đường không bao giờ nhỏ bé được nghe con'."
          ]
        },
        {
          name: "Câu chuyện về con đường",
          author: "Đoàn Công Lê Huy",
          type: "Nghị luận / Thực hành đọc",
          summary: "Chiêm nghiệm về con đường vật lí và con đường đời: những ngã rẽ, sự gập ghềnh và ý nghĩa của việc kiên định bước đi.",
          keyPoints: [
            "Sức mạnh của ý chí vượt khó và tinh thần dấn thân trải nghiệm."
          ]
        }
      ],
      concepts: [
        {
          term: "Văn bản nghị luận đời sống",
          desc: "Bàn về một tư tưởng, đạo lí hoặc hiện tượng đời sống xã hội; có hệ thống Luận điểm rõ ràng, Lí lẽ xác đáng và Bằng chứng chân thực, thuyết phục."
        },
        {
          term: "Phép liên kết câu và đoạn văn",
          desc: "Các biện pháp hình thức nối kết các câu/đoạn: Phép lặp (lặp từ ngữ then chốt), Phép thế (dùng đại từ hoặc từ đồng nghĩa thay thế), Phép nối (dùng quan hệ từ: nhưng, tuy nhiên, do đó, bởi vậy...)."
        },
        {
          term: "Thuật ngữ",
          desc: "Từ ngữ biểu thị khái niệm khoa học, kĩ thuật, công nghệ chuyên ngành (chứng tự kỉ, gen di truyền, ẩn dụ, ADN...). Nghĩa của thuật ngữ mang tính ổn định, chính xác trong lĩnh vực đó."
        }
      ]
    },
    vietnameseLang: {
      topic: "Các phép liên kết câu và Thuật ngữ khoa học",
      content: "Nhận diện và sử dụng linh hoạt phép lặp, phép thế, phép nối; tra cứu và giải thích đúng thuật ngữ.",
      examples: [
        {
          original: "Đọc sách là một nhu cầu thiết yếu. Đọc sách giúp ta mở rộng tầm nhìn.",
          expanded: "Phép lặp từ ngữ: 'Đọc sách' lặp lại ở đầu câu 2 để nhấn mạnh đối tượng bàn luận.",
          note: "Tạo sự gắn kết chặt chẽ về mặt hình thức giữa 2 câu văn."
        },
        {
          original: "Daniel Gottlieb là một nhà tâm lí học. Ông đã dành cả đời để chữa lành tâm hồn cho người khác.",
          expanded: "Phép thế: 'Ông' thay thế cho 'Daniel Gottlieb' ở câu trước để tránh lặp từ thô thiển.",
          note: "Giữ mạch văn lưu loát, tự nhiên."
        }
      ],
      rules: [
        "Tránh lặp từ máy móc vụng về khiến câu văn nặng nề; tránh dùng từ nối sai quan hệ logic (như dùng 'tuy nhiên' cho mối quan hệ nguyên nhân - kết quả)."
      ]
    },
    writing: {
      type: "Viết bài văn nghị luận về một vấn đề đời sống (Thể hiện ý kiến phản đối)",
      steps: [
        "1. Mở bài: Nêu rõ quan niệm hoặc hiện tượng sai trái mà em muốn phản đối (ví dụ: Quan niệm học vẹt chỉ vì điểm số, thói ỷ lại vào cha mẹ, thói quen lãng phí thời gian trên mạng xã hội).",
        "2. Thân bài:",
        "   - Luận điểm 1: Phân tích vì sao quan niệm/hành vi đó là sai lầm, phiến diện.",
        "   - Luận điểm 2: Chỉ ra những tác hại khôn lường đối với bản thân, gia đình và xã hội bằng bằng chứng thực tế sinh động.",
        "   - Thừa nhận mặt đúng/điều kiện khách quan (nếu có) để bài viết có chiều sâu khách quan.",
        "3. Kết bài: Khẳng định thái độ kiên quyết phản đối và đề xuất giải pháp khắc phục, hướng đi đúng đắn."
      ]
    },
    speakingListening: {
      topic: "Trình bày ý kiến về một vấn đề đời sống gợi ra từ trải nghiệm bản thân",
      guide: "Xác định rõ quan điểm, cấu trúc bài nói mạch lạc từ thực trạng -> nguyên nhân -> giải pháp; tự tin tương tác và phản hồi câu hỏi của người nghe."
    },
    quiz: [
      {
        question: "Thông điệp cốt lõi mà người cha muốn gửi gắm tới đứa con trong bài thơ 'Nói với con' của Y Phương là gì?",
        options: [
          "Khuyên con nên tìm đường sang thành phố giàu có để lập nghiệp",
          "Tự hào về cội nguồn gia đình, vẻ đẹp phẩm chất mộc mạc mà kiên cường của 'người đồng mình', không bao giờ được nhỏ bé, hèn kém khi bước vào đời",
          "Dạy con cách đan lờ cài nan hoa thật đẹp để bán",
          "Dặn con phải luôn tích trữ thật nhiều vàng bạc của cải"
        ],
        answer: 1,
        explain: "Người cha nhắc con khắc ghi tình yêu quê hương, niềm tự hào về truyền thống 'người đồng mình' bền bỉ kiên cường để tự tin vững bước trên đường đời."
      },
      {
        question: "Từ nào in hoa trong câu sau đóng vai trò là một Thuật ngữ chuyên ngành: 'Các nhà khoa học đã giải mã thành công bản đồ HỆ GEN của sinh vật'?",
        options: [
          "Các",
          "Nhà khoa học",
          "HỆ GEN",
          "Sinh vật"
        ],
        answer: 2,
        explain: "'Hệ gen' (Genome) là thuật ngữ sinh học chuyên biệt chỉ toàn bộ tập hợp vật chất di truyền của một cơ thể sinh vật."
      }
    ]
  },
  {
    id: "bai-9",
    unit: "BÀI 9",
    volume: "TẬP HAI",
    title: "Hòa điệu với tự nhiên",
    theme: "Quan hệ giữa con người với môi trường sống, biến đổi khí hậu và phong tục cộng đồng",
    color: "blue",
    readTheory: {
      intro: "Luyện đọc văn bản thông tin hiện đại, nhận diện cách thức tổ chức dữ kiện theo quan hệ nhân quả và thuyết minh quy tắc trò chơi, hoạt động cộng đồng.",
      texts: [
        {
          name: "Thủy tiên tháng Một",
          author: "Thomas L. Friedman",
          type: "Văn bản thông tin / Báo chí",
          summary: "Tác giả chỉ ra hiện tượng bất thường: hoa thủy tiên nở sớm vào giữa tháng Một mùa đông buốt giá ở Washington do hiện tượng nóng lên toàn cầu, gióng lên hồi chuông cảnh báo khẩn cấp về khủng hoảng khí hậu do chính con người gây ra.",
          keyPoints: [
            "Cách triển khai dữ kiện: Trình bày theo quan hệ nhân quả rõ ràng (khí thải công nghiệp -> nhiệt độ tăng -> xáo trộn nhịp sinh học tự nhiên).",
            "Sức nặng của dẫn chứng: Dữ liệu đo đạc khoa học kết hợp hình ảnh cụ thể, trực quan."
          ]
        },
        {
          name: "Lễ rửa làng của người Lô Lô",
          author: "Phạm Thùy Dung",
          type: "Văn bản thuyết minh phong tục",
          summary: "Mô tả tỉ mỉ nghi lễ rửa làng định kì của đồng bào Lô Lô ở Hà Giang: nguồn gốc tín ngưỡng, lễ vật, đoàn người rước lễ tẩy rửa những điều xui xẻo, cầu mong làng bản sạch sẽ, mưa thuận gió hòa và gắn kết cộng đồng.",
          keyPoints: [
            "Trình tự thông tin theo thời gian và không gian rước lễ mạch lạc, tôn trọng bản sắc văn hóa dân tộc."
          ]
        },
        {
          name: "Bản tin về hoa anh đào",
          author: "Nguyễn Vĩnh Nguyên",
          type: "Tản văn / Báo chí",
          summary: "Cảm nhận tinh tế về sắc hoa mai anh đào nở rộ báo xuân ở Đà Lạt; sự tương tác ân cần giữa con người với vẻ đẹp thiên nhiên hoa cỏ của phố núi.",
          keyPoints: [
            "Sự hòa quyện giữa ngôn ngữ thông tin thời sự và giọng điệu trữ tình sâu lắng."
          ]
        },
        {
          name: "Thân thiện với môi trường",
          author: "Nguyễn Hữu Quỳnh Hương",
          type: "Văn bản thông tin / Thực hành đọc",
          summary: "Hướng dẫn các giải pháp thực tế sống xanh: giảm thiểu rác thải nhựa, tái chế rác hữu cơ và lựa chọn tiêu dùng bền vững.",
          keyPoints: [
            "Kĩ năng đọc thông tin: Nắm bắt nhanh các chỉ dẫn thực hành và đánh giá tính khả thi."
          ]
        }
      ],
      concepts: [
        {
          term: "Văn bản thông tin",
          desc: "Văn bản cung cấp thông tin, dữ liệu có thật về các sự kiện, hiện tượng tự nhiên hoặc quy tắc hoạt động. Tổ chức dữ kiện có thể theo trật tự thời gian, quan hệ nhân - quả hoặc so sánh đối chiếu."
        },
        {
          term: "Cước chú (Footnote)",
          desc: "Phần chú thích ngắn gọn đặt ở chân trang hoặc cuối văn bản nhằm giải thích nghĩa của từ ngữ khó, bối cảnh lịch sử hoặc ghi nguồn gốc trích dẫn."
        },
        {
          term: "Yếu tố Hán Việt",
          desc: "Tiếng (hình vị) gốc Hán dùng để tạo nên từ ghép, từ láy Hán Việt (ví dụ: 'thủy' = nước, 'tiên' = trước, 'biến' = đổi, 'hậu' = khí trời...). Hiểu đúng yếu tố Hán Việt giúp mở rộng vốn từ chính xác."
        }
      ]
    },
    vietnameseLang: {
      topic: "Cách dùng Cước chú và Giải nghĩa Yếu tố Hán Việt",
      content: "Nhận biết kí hiệu đánh dấu cước chú (số mũ 1, 2... hoặc dấu sao *) và vận dụng phương pháp ghép nghĩa yếu tố Hán Việt.",
      examples: [
        {
          original: "Khí hậu toàn cầu đang có những biến đổi dị thường¹.",
          expanded: "Cước chú chân trang: ¹ Dị thường: khác hẳn với mức độ bình thường, hiếm gặp.",
          note: "Cước chú giúp người đọc hiểu thấu đáo thuật ngữ mà không làm gián đoạn mạch đọc chính."
        },
        {
          original: "Các từ có yếu tố 'Thủy': Thủy điện (điện nước), Thủy lộ (đường nước), Thủy cung (cung điện dưới nước), Thủy triều (nước dâng lên xuống).",
          expanded: "Yếu tố 'Thủy' có nghĩa gốc là nước.",
          note: "Tra cứu từ điển khi gặp từ Hán Việt đồng âm khác nghĩa (như 'thủy' trong 'thủy chung' nghĩa là bắt đầu)."
        }
      ],
      rules: [
        "Ghi cước chú chuẩn xác, ngắn gọn, đặt đúng vị trí từ cần giải thích."
      ]
    },
    writing: {
      type: "Thuyết minh về quy tắc, luật lệ của một trò chơi hoặc hoạt động",
      steps: [
        "1. Chọn trò chơi/hoạt động quen thuộc: Kéo co, nhảy bao bố, cờ vua, trò chơi dân gian ném còn, hoạt động cắm trại dã ngoại.",
        "2. Nêu tên trò chơi, mục đích ý nghĩa và đối tượng người tham gia.",
        "3. Chuẩn bị: Dụng cụ, sân bãi, số lượng thành viên mỗi đội.",
        "4. Trình tự tiến hành: Các bước từ lúc bắt đầu, diễn biến đến khi kết thúc; luật phân định thắng thua; các quy định xử phạt vi phạm.",
        "5. Lưu ý an toàn và lời khuyên để có trải nghiệm vui tươi, bổ ích.",
        "6. Dùng câu mệnh lệnh rõ ràng, từ ngữ chỉ thứ tự (Trước tiên, tiếp theo, sau đó, cuối cùng); có thể vẽ sơ đồ minh họa."
      ]
    },
    speakingListening: {
      topic: "Giải thích quy tắc hoặc luật lệ của một trò chơi/hoạt động bằng lời nói",
      guide: "Nói to, rõ ràng, phân chia các bước mạch lạc; thị phạm hoặc dùng cử chỉ tay mô phỏng động tác; dành thời gian giải đáp thắc mắc của người tham dự."
    },
    quiz: [
      {
        question: "Trong văn bản 'Thủy tiên tháng Một', hiện tượng hoa thủy tiên nở sớm vào giữa mùa đông báo hiệu điều gì?",
        options: [
          "Mùa xuân năm đó sẽ kéo dài hơn bình thường",
          "Hồi chuông cảnh báo về tình trạng biến đổi khí hậu và sự nóng lên toàn cầu do con người gây ra",
          "Giống hoa thủy tiên mới được lai tạo thành công",
          "Đất đai ở Washington màu mỡ hơn trước"
        ],
        answer: 1,
        explain: "Thomas Friedman mượn hình ảnh nghịch lí hoa nở giữa mùa đông buốt giá để gióng lên hồi chuông cảnh báo hiện tượng nóng lên toàn cầu."
      },
      {
        question: "Cước chú (Footnote) trong một văn bản thường có vai trò quan trọng nhất là gì?",
        options: [
          "Trang trí cho lề trang sách thêm đẹp mắt",
          "Giải thích các từ ngữ khó, thuật ngữ chuyên ngành hoặc dẫn nguồn tài liệu tham khảo chính xác",
          "Tóm tắt toàn bộ nội dung của cuốn sách",
          "Ghi cảm xúc riêng của người in sách"
        ],
        answer: 1,
        explain: "Cước chú giúp độc giả hiểu rõ nghĩa của từ ngữ, sự kiện chuyên môn hoặc tra cứu nguồn tư liệu xác thực."
      }
    ]
  },
  {
    id: "bai-10",
    unit: "BÀI 10",
    volume: "TẬP HAI",
    title: "Trang sách và cuộc sống — Dự án đọc sách",
    theme: "Kết nối trang sách văn học với đời sống, sáng tạo sản phẩm đọc và phân tích nhân vật",
    color: "rose",
    readTheory: {
      intro: "Tổng kết năm học với Dự án đọc sách đa dạng hình thức sáng tạo và kĩ năng viết bài văn nghị luận phân tích nhân vật văn học.",
      texts: [
        {
          name: "Dự án đọc sách: Trang sách và cuộc sống",
          author: "Dự án trải nghiệm Ngữ Văn 7",
          type: "Dự án học tập",
          summary: "Học sinh tự chọn tác phẩm văn học yêu thích, thực hiện chuỗi hoạt động khám phá: lập kế hoạch đọc, ghi nhật kí đọc sách, thiết kế sản phẩm sáng tạo (poster, sơ đồ tư duy, mô hình, kịch bản, video giới thiệu) và tham gia Ngày hội sách kết nối tri thức.",
          keyPoints: [
            "7 bước thực hiện dự án đọc bài bản và khoa học.",
            "Tự đánh giá năng lực đọc hiểu và khả năng chuyển hóa tri thức thành hành động."
          ]
        }
      ],
      concepts: [
        {
          term: "Nghị luận phân tích tác phẩm văn học",
          desc: "Kiểu bài nghị luận dùng lí lẽ và bằng chứng trích xuất từ tác phẩm để làm rõ đặc điểm nội dung tư tưởng, vẻ đẹp nghệ thuật hoặc hình tượng nhân vật trung tâm."
        },
        {
          term: "Hệ thống Lí lẽ và Bằng chứng",
          desc: "Lí lẽ là nhận định, đánh giá của người viết; Bằng chứng là các chi tiết, sự việc, lời thoại, câu văn/thơ trích dẫn trực tiếp từ tác phẩm để chứng minh cho lí lẽ."
        },
        {
          term: "Hình tượng nhân vật văn học",
          desc: "Con người được nhà văn sáng tạo bằng ngôn từ; mang dấu ấn thẩm mĩ, tư tưởng của tác giả; không đồng nhất máy móc với người thật ngoài đời."
        }
      ]
    },
    vietnameseLang: {
      topic: "Cách trích dẫn bằng chứng và xây dựng hệ thống lí lẽ trong văn nghị luận",
      content: "Nắm vững kĩ thuật trích dẫn trực tiếp (đặt trong dấu ngoặc kép) và trích dẫn gián tiếp (thuật lại ý); tránh xuyên tạc lời văn tác phẩm.",
      examples: [
        {
          original: "Trích dẫn trực tiếp: Khi bầy chim non cất cánh, 'hai anh em Mon và Mên đã khóc từ lúc nào'.",
          expanded: "Dùng dấu ngoặc kép trích nguyên văn lời của tác giả Nguyễn Quang Thiều.",
          note: "Là bằng chứng xác thực chứng minh cho lòng trắc ẩn của hai đứa trẻ."
        }
      ],
      rules: [
        "Bằng chứng phải tiêu biểu, xác thực và luôn đi kèm lời phân tích, bình luận của người viết."
      ]
    },
    writing: {
      type: "Viết bài văn phân tích một nhân vật văn học em yêu thích",
      steps: [
        "1. Mở bài: Giới thiệu tác phẩm, tác giả và nhân vật (Ví dụ: Thầy Đuy-sen trong 'Người thầy đầu tiên', người lính trong 'Đồng dao mùa xuân', cậu bé An trong 'Đi lấy mật'). Nêu ấn tượng sâu sắc nhất.",
        "2. Thân bài: Phân tích các luận điểm về phẩm chất của nhân vật:",
        "   - Luận điểm 1: Hoàn cảnh xuất thân và ngoại hình, cử chỉ.",
        "   - Luận điểm 2: Hành động, lời nói và thế giới nội tâm qua các tình huống thử thách.",
        "   - Luận điểm 3: Mối quan hệ với các nhân vật khác và sự tác động đến cốt truyện.",
        "   - Luận điểm 4: Đánh giá nghệ thuật xây dựng nhân vật (ngôi kể, ngôn ngữ, tương phản).",
        "3. Kết bài: Khẳng định sức sống của hình tượng nhân vật và bài học nhân sinh gửi tới người đọc."
      ]
    },
    speakingListening: {
      topic: "Ngày hội sách: Thuyết trình giới thiệu cuốn sách yêu thích và sản phẩm dự án",
      guide: "Trình bày tự tin, kết hợp sản phẩm trực quan (áp phích, mô hình nhân vật, bản đồ tư duy); giải thích lí do chọn sách và điều cuốn sách đã làm thay đổi nhận thức bản thân."
    },
    quiz: [
      {
        question: "Quy trình thực hiện Dự án đọc sách gồm có mấy bước cơ bản?",
        options: [
          "3 bước",
          "5 bước",
          "7 bước (Chọn sách -> Lập kế hoạch -> Đọc chủ động -> Chọn sản phẩm -> Tạo sản phẩm -> Chia sẻ ngày hội sách -> Tự đánh giá)",
          "10 bước"
        ],
        answer: 2,
        explain: "Quy trình dự án đọc chuẩn mực gồm 7 bước chặt chẽ giúp học sinh rèn luyện tư duy tự chủ và kĩ năng sáng tạo."
      },
      {
        question: "Trong bài văn nghị luận phân tích nhân vật văn học, thao tác nào sau đây là SAI LẦM cần tránh?",
        options: [
          "Trích dẫn chi tiết tiêu biểu làm bằng chứng",
          "Kể lại toàn bộ cốt truyện từ đầu đến cuối như một bản tóm tắt mà không hề đưa ra lí lẽ phân tích",
          "Bình luận về tư tưởng mà nhà văn gửi gắm qua nhân vật",
          "Liên hệ phẩm chất nhân vật với bài học cuộc sống hôm nay"
        ],
        answer: 1,
        explain: "Sai lầm phổ biến là sa đà vào kể lại truyện (tóm tắt) thay vì đưa ra luận điểm, lí lẽ để phân tích nét tính cách và nghệ thuật xây dựng nhân vật."
      }
    ]
  }
];

// Bảng hệ thống 10 bài
const summaryTable = [
  { bài: "Bài 1. Bầu trời tuổi thơ", mạch: "Truyện, đề tài, chi tiết, tính cách nhân vật, tóm tắt", tiếngViệt: "Mở rộng thành phần chính/trạng ngữ bằng cụm từ", viết: "Tóm tắt theo yêu cầu độ dài khác nhau", nóiNghe: "Trao đổi vấn đề đời sống quan tâm" },
  { bài: "Bài 2. Khúc nhạc tâm hồn", mạch: "Thơ bốn/năm chữ, vần, nhịp, hình ảnh, cảm xúc", tiếngViệt: "Nói giảm nói tránh", viết: "Làm thơ; đoạn ghi cảm xúc về thơ", nóiNghe: "Trình bày vấn đề đời sống gợi từ tác phẩm" },
  { bài: "Bài 3. Cội nguồn yêu thương", mạch: "Người kể chuyện, nhân vật, tình cảm gia đình/thầy trò", tiếngViệt: "Số từ, phó từ", viết: "Phân tích đặc điểm nhân vật", nóiNghe: "Ý kiến về vấn đề đời sống gợi từ nhân vật" },
  { bài: "Bài 4. Giai điệu đất nước", mạch: "Thơ trữ tình, hình ảnh, cảm xúc, nhịp, ngữ cảnh", tiếngViệt: "Ngữ cảnh, nghĩa của từ; Từ láy", viết: "Bài văn biểu cảm về người/sự việc", nóiNghe: "Ý kiến về hoạt động thiện nguyện cộng đồng" },
  { bài: "Bài 5. Màu sắc trăm miền", mạch: "Tùy bút, tản văn, cái tôi, văn hóa vùng miền", tiếngViệt: "Từ ngữ địa phương (Phương ngữ)", viết: "Văn bản tường trình", nóiNghe: "Ý kiến về bảo tồn văn hóa truyền thống" },
  { bài: "Bài 6. Bài học cuộc sống", mạch: "Ngụ ngôn, tục ngữ, thành ngữ, truyện truyền kì", tiếngViệt: "Thành ngữ, Biện pháp Nói quá", viết: "Nghị luận đời sống - ý kiến tán thành", nóiNghe: "Kể lại truyện ngụ ngôn" },
  { bài: "Bài 7. Thế giới viễn tưởng", mạch: "Truyện khoa học viễn tưởng, giả thuyết khoa học", tiếngViệt: "Mạch lạc, liên kết câu/đoạn; Dấu chấm lửng", viết: "Kể sự việc có thật liên quan nhân vật lịch sử", nóiNghe: "Thảo luận về vai trò của công nghệ" },
  { bài: "Bài 8. Trải nghiệm để trưởng thành", mạch: "Văn bản nghị luận đời sống, luận điểm, bằng chứng", tiếngViệt: "Phép liên kết (lặp, thế, nối); Thuật ngữ", viết: "Nghị luận đời sống - ý kiến phản đối", nóiNghe: "Trình bày ý kiến về vấn đề trải nghiệm" },
  { bài: "Bài 9. Hòa điệu với tự nhiên", mạch: "Văn bản thông tin, cách triển khai dữ kiện, quy tắc", tiếngViệt: "Cước chú; Yếu tố Hán Việt", viết: "Thuyết minh luật lệ/quy tắc trò chơi", nóiNghe: "Giải thích luật lệ/quy tắc trò chơi bằng lời" },
  { bài: "Bài 10. Trang sách và cuộc sống", mạch: "Dự án đọc sách, nghị luận phân tích văn học", tiếngViệt: "Lí lẽ, bằng chứng, trích dẫn chuẩn xác", viết: "Phân tích nhân vật văn học yêu thích", nóiNghe: "Ngày hội sách - Thuyết trình sản phẩm dự án" }
];

module.exports = { tap2Data, summaryTable };
