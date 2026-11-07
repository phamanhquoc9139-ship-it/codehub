// Dữ liệu Lịch sử 11 - Bộ sách Kết nối tri thức với cuộc sống
// Phần 2: Chủ đề 4, 5, 6 (Bài 7 -> Bài 13)

const part2Lessons = {
  7: {
    num: 7,
    topicNum: 4,
    topicTitle: "Chiến tranh bảo vệ Tổ quốc và chiến tranh giải phóng dân tộc trong lịch sử Việt Nam",
    title: "Khái quát về chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam",
    summary: "Nắm vững vị trí địa chiến lược của Việt Nam, bảng tổng hợp các cuộc kháng chiến thắng lợi oanh liệt, nguyên nhân thắng lợi, phân tích các cuộc kháng chiến không thành công (Âu Lạc, Nhà Hồ, Triều Nguyễn) và bài học lịch sử vô giá về chiến tranh nhân dân.",
    sections: [
      {
        heading: "1. Vị trí địa chiến lược của Việt Nam và vai trò của chiến tranh bảo vệ Tổ quốc",
        type: "list",
        items: [
          {
            title: "Vị trí địa chiến lược trọng yếu",
            desc: "Nằm ở trung tâm khu vực Đông Nam Á, trên ngã tư đường hàng hải và hàng không quốc tế kết nối Ấn Độ Dương với Thái Bình Dương, là cầu nối giữa Trung Quốc với Đông Nam Á và giữa Đông Nam Á lục địa với Đông Nam Á hải đảo. Nguồn tài nguyên trù phú và vị trí yết hầu khiến nước ta luôn là mục tiêu nhòm ngó, xâm lược của các thế lực đế chế hùng mạnh."
          },
          {
            title: "Vai trò sống còn của chiến tranh bảo vệ Tổ quốc",
            desc: "Quyết định sự tồn vong của dân tộc, bảo vệ vững chắc nền độc lập, chủ quyền và toàn vẹn lãnh thổ; giữ gìn bản sắc văn hóa cội nguồn; đồng thời hun đúc nên lòng yêu nước nồng nàn, tinh thần đại đoàn kết và nghệ thuật quân sự độc đáo của dân tộc Việt Nam."
          }
        ]
      },
      {
        heading: "2. Các cuộc kháng chiến thắng lợi tiêu biểu (Trước 1945)",
        type: "table",
        headers: ["Cuộc kháng chiến", "Thời gian", "Người lãnh đạo tiêu biểu", "Chiến thắng / Địa bàn tiêu biểu"],
        rows: [
          ["Chống quân Nam Hán", "Năm 938", "Ngô Quyền", "Trận địa cọc ngầm trên sông Bạch Đằng, đập tan mộng xâm lược của quân Nam Hán"],
          ["Chống quân Tống (Lê)", "Năm 981", "Lê Hoàn (Lê Đại Hành)", "Các trận chiến quyết định trên sông Bạch Đằng và Ải Chi Lăng"],
          ["Chống quân Tống (Lý)", "1075–1077", "Lý Thường Kiệt", "Tiên phát chế nhân tập kích Ung Châu (1075); Chiến tuyến sông Như Nguyệt (1077)"],
          ["Chống Mông – Nguyên", "1258, 1285, 1287–1288", "Trần Thánh Tông, Trần Nhân Tông, Trần Quốc Tuấn", "Đông Bộ Đầu (1258); Tây Kết, Hàm Tử, Chương Dương, Thăng Long (1285); Bạch Đằng (1288)"],
          ["Chống quân Xiêm", "Năm 1785", "Nguyễn Huệ", "Trận phục kích thủy chiến sấm sét Rạch Gầm – Xoài Mút (Tiền Giang)"],
          ["Chống quân Thanh", "Năm 1789", "Quang Trung (Nguyễn Huệ)", "Hành quân thần tốc, đại phá 29 vạn quân Thanh tại Ngọc Hồi – Đống Đa"]
        ]
      },
      {
        heading: "3. Nguyên nhân thắng lợi của các cuộc kháng chiến",
        type: "list",
        items: [
          {
            title: "Tính chất chính nghĩa thiêng liêng",
            desc: "Là cuộc chiến tranh tự vệ chính nghĩa bảo vệ độc lập, giang sơn bờ cõi và cuộc sống hòa bình của nhân dân, quy tụ sức mạnh quật cường của toàn dân tộc."
          },
          {
            title: "Khối đại đoàn kết toàn dân tộc",
            desc: "Tinh thần 'vua tôi đồng lòng, anh em hòa mục, cả nước góp sức'; tiêu biểu là Hội nghị Bình Than (1282), Hịch tướng sĩ của Hưng Đạo Vương Trần Quốc Tuấn và Hội nghị Diên Hồng (1285) nơi các bô lão đồng thanh hô 'Đánh!'."
          },
          {
            title: "Nghệ thuật quân sự độc đáo và sáng tạo",
            desc: "Biết lấy ít địch nhiều, lấy yếu thắng mạnh; chủ động 'tiên phát chế nhân' (Lý Thường Kiệt); kế sách 'thanh dã' (vườn không nhà trống) và các trận quyết chiến chiến lược thủy chiến (Trần Quốc Tuấn); nghệ thuật hành quân thần tốc bất ngờ 'đánh nhanh thắng nhanh' (Quang Trung)."
          },
          {
            title: "Tài năng mưu lược của các anh hùng dân tộc",
            desc: "Đội ngũ tướng lĩnh kiệt xuất, tận trung vì nước, văn võ song toàn: Ngô Quyền, Lê Hoàn, Lý Thường Kiệt, Trần Hưng Đạo, Nguyễn Huệ."
          }
        ]
      },
      {
        heading: "4. Các cuộc kháng chiến không thành công và bài học lịch sử",
        type: "grid",
        items: [
          {
            badge: "Kháng chiến không thành",
            title: "Ba bài học thất bại đau xót trong lịch sử",
            points: [
              "Kháng chiến chống Triệu Đà của Âu Lạc (179 TCN): An Dương Vương mất cảnh giác trước âm mưu gián điệp cầu hòa của Triệu Đà, nội bộ chia rẽ, phòng thủ lơi lỏng dẫn tới mất nước.",
              "Kháng chiến chống quân Minh của Nhà Hồ (1406–1407): Hồ Quý Ly và Hồ Hán Thương quá ỷ lại vào thành lũy kiên cố (thành Tây Đô, Đa Bang), không tranh thủ được sự ủng hộ của lòng dân; đúng như Hồ Nguyên Trừng than thở: 'Thần không sợ đánh, chỉ sợ lòng dân không theo'.",
              "Kháng chiến chống thực dân Pháp của Triều Nguyễn (1858–1884): Triều đình nặng tư tưởng chủ hòa, đường lối tác chiến bị động, bỏ lỡ nhiều thời cơ phản công, đàn áp phong trào kháng chiến của nhân dân; lần lượt kí các hiệp ước đầu hàng (1862, 1874, 1883, 1884 Pa-tơ-nốt) chấm dứt sự tồn tại của nhà nước phong kiến độc lập."
            ]
          },
          {
            badge: "Bài học lịch sử",
            title: "Giá trị trường tồn đối với sự nghiệp bảo vệ Tổ quốc",
            points: [
              "Bài học 'Lấy dân làm gốc': Xây dựng khối đại đoàn kết toàn dân tộc; lòng dân là pháo đài vững chắc nhất bảo vệ bờ cõi.",
              "Đường lối quân sự đúng đắn: Chủ động chuẩn bị thế trận quốc phòng toàn dân từ sớm, từ xa, không để bị động bất ngờ.",
              "Kết hợp kiên quyết bảo vệ chủ quyền với đối sách ngoại giao khôn khéo, mềm dẻo để giữ gìn hòa bình."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Hội nghị nào trong lịch sử kháng chiến chống Mông – Nguyên thể hiện tinh thần dân chủ và ý chí quyết chiến của toàn thể nhân dân Đại Việt?",
        options: [
          "A. Hội nghị Bình Than (1282)",
          "B. Hội nghị Diên Hồng (1285)",
          "C. Hội thề Lũng Nhai (1416)",
          "D. Hội thề Đông Quan (1427)"
        ],
        answer: 1,
        explain: "Năm 1285, Thượng hoàng Trần Thánh Tông triệu tập Hội nghị Diên Hồng tập hợp các bậc phụ lão cả nước để trưng cầu ý dân, muôn người đồng thanh hô 'Đánh!'."
      },
      {
        q: "Nguyên nhân then chốt dẫn đến thất bại nhanh chóng của triều Hồ trước cuộc xâm lược của nhà Minh năm 1407 là gì?",
        options: [
          "A. Thiếu vũ khí hiện đại và thành lũy",
          "B. Không quy tụ được lòng dân và quá ỷ lại vào công sự phòng thủ cô lập",
          "C. Do quân đội quá ít",
          "D. Vua Hồ đầu hàng ngay từ trận đầu"
        ],
        answer: 1,
        explain: "Nhà Hồ thất bại do chính sách cải cách chưa được lòng dân, không phát động được chiến tranh nhân dân mà quá thiên về phòng ngự thụ động nơi thành lũy."
      },
      {
        q: "Hiệp ước nào được kí kết năm 1884 đánh dấu sự đầu hàng hoàn toàn của triều đình nhà Nguyễn trước thực dân Pháp?",
        options: [
          "A. Hiệp ước Nhâm Tuất (1862)",
          "B. Hiệp ước Giáp Tuất (1874)",
          "C. Hiệp ước Hác-măng (1883)",
          "D. Hiệp ước Pa-tơ-nốt (1884)"
        ],
        answer: 3,
        explain: "Hiệp ước Pa-tơ-nốt kí ngày 6-6-1884 chính thức chấm dứt sự tồn tại của nhà nước phong kiến độc lập, biến Việt Nam thành nước thuộc địa nửa phong kiến."
      }
    ]
  },

  8: {
    num: 8,
    topicNum: 4,
    topicTitle: "Chiến tranh bảo vệ Tổ quốc và chiến tranh giải phóng dân tộc trong lịch sử Việt Nam",
    title: "Một số cuộc khởi nghĩa và chiến tranh giải phóng trong lịch sử Việt Nam",
    summary: "Hệ thống hóa các cuộc khởi nghĩa tiêu biểu thời Bắc thuộc (Hai Bà Trưng, Bà Triệu, Lý Bí, Phùng Hưng, Ngô Quyền), thắng lợi oanh liệt của cuộc Khởi nghĩa Lam Sơn (1418–1427), phong trào Tây Sơn (1771–1789) và đúc kết 3 bài học lịch sử lớn về xây dựng lực lượng, đại đoàn kết và nghệ thuật quân sự.",
    sections: [
      {
        heading: "1. Các cuộc khởi nghĩa tiêu biểu thời kì Bắc thuộc (Đến thế kỉ X)",
        type: "table",
        headers: ["Cuộc khởi nghĩa", "Thời gian", "Người lãnh đạo", "Diễn biến chính và kết quả"],
        rows: [
          ["Hai Bà Trưng", "Năm 40–43", "Trưng Trắc, Trưng Nhị", "Khởi nghĩa bùng nổ tại Hát Môn, giải phóng Mê Linh, Cổ Loa, Luy Lâu; Thái thú Tô Định cắt tóc cạo râu trốn về nước; Trưng Trắc lên làm vua, xưng Trưng Nữ Vương."],
          ["Bà Triệu", "Năm 248", "Triệu Thị Trinh", "Khởi nghĩa chống quân Ngô tại Căn cứ Căn Điền (Thanh Hóa); Bà Triệu khẳng định khí phách: 'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông'."],
          ["Lý Bí (Nước Vạn Xuân)", "Năm 542–602", "Lý Bí, Triệu Quang Phục", "Khởi nghĩa lật đổ ách đô hộ nhà Lương; năm 544 lập nước Vạn Xuân độc lập, đóng đô ở cửa sông Tô Lịch. Triệu Quang Phục dùng chiến thuật du kích ở đầm Dạ Trạch đánh tan quân Lương."],
          ["Phùng Hưng", "Cuối thế kỉ VIII", "Phùng Hưng (Bố Cái Đại Vương)", "Khởi nghĩa từ Đường Lâm, bao vây và hạ phủ thành Tống Bình, quản lí đất nước trong nhiều năm."],
          ["Ngô Quyền (Chiến thắng Bạch Đằng)", "Năm 938", "Ngô Quyền", "Bố trí trận địa cọc ngầm nhử thuyền giặc Nam Hán vào cửa biển lúc thủy triều lên rồi tổng phản công; giết chết Hoằng Tháo, chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỉ nguyên độc lập tự chủ lâu dài."]
        ]
      },
      {
        heading: "2. Cuộc khởi nghĩa Lam Sơn (1418–1427): Từ khởi nghĩa địa phương đến chiến tranh giải phóng",
        type: "list",
        items: [
          {
            title: "Bối cảnh lịch sử",
            desc: "Năm 1407, sau khi nhà Hồ thất bại, nhà Minh đặt ách thống trị tàn bạo trên đất nước ta (đổi tên thành quận Giao Chỉ, đặt hàng trăm thứ thuế, vơ vét của cải, triệt phá di sản văn hóa Đại Việt). Hào trưởng Lê Lợi tập hợp hiền tài tại Lam Sơn (Thanh Hóa)."
          },
          {
            title: "Hội thề Lũng Nhai (Năm 1416)",
            desc: "Lê Lợi cùng 18 nghĩa sĩ ưu tú (Nguyễn Trãi, Lê Lai, Trần Nguyên Hãn...) tổ chức lễ kết nghĩa thề sống chết vì sự nghiệp cứu nước, hình thành bộ chỉ huy nòng cốt của nghĩa quân."
          },
          {
            title: "Diễn biến qua ba giai đoạn quyết định",
            desc: "• Giai đoạn 1 (1418–1423): Khởi nghĩa bùng nổ ở vùng núi Lam Sơn; nghĩa quân gặp muôn vàn gian khổ, ba lần bị vây ngặt nghèo ở núi Chí Linh (gương hi sinh cứu chúa của Lê Lai), tạm hòa hoãn với giặc để củng cố thế trận.\n• Giai đoạn 2 (1424–1425): Thực hiện kế sách mưu lược của Nguyễn Chích, nghĩa quân bất ngờ tiến quân vào Nghệ An, mở rộng căn cứ giải phóng vùng đất rộng lớn từ Thanh Hóa đến đèo Hải Vân.\n• Giai đoạn 3 (1426–1427): Tổng phản công giải phóng miền Bắc; đại thắng Tốt Động – Chúc Động (1426); đại phá đạo viện binh Liễu Thăng ở Chi Lăng – Xương Giang (1427)."
          },
          {
            title: "Hội thề Đông Quan (12-1427) và Ý nghĩa",
            desc: "Lê Lợi chủ động mở đường hiếu sinh, tổ chức Hội thề Đông Quan với Vương Thông; cấp ngựa, cấp thuyền và lương thảo cho 10 vạn quân Minh rút về nước trong danh dự. Chấm dứt hoàn toàn 20 năm đô hộ tàn bạo của nhà Minh, mở ra triều đại Hậu Lê hưng thịnh."
          }
        ]
      },
      {
        heading: "3. Phong trào nông dân Tây Sơn (1771–1789): Thống nhất đất nước và bảo vệ toàn vẹn lãnh thổ",
        type: "list",
        items: [
          {
            title: "Bùng nổ và lật đổ các tập đoàn phong kiến cát cứ",
            desc: "Năm 1771, ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ phất cờ khởi nghĩa ở Tây Sơn thượng đạo. Năm 1777, lật đổ tập đoàn phong kiến chúa Nguyễn ở Đàng Trong. Năm 1786, tiến quân ra Bắc lật đổ tập đoàn chúa Trịnh ở Đàng Ngoài, xóa bỏ tình trạng chia cắt đất nước kéo dài hơn 2 thế kỉ."
          },
          {
            title: "Chiến thắng Rạch Gầm – Xoài Mút (Năm 1785)",
            desc: "Nguyễn Huệ đem quân thủy bộ vào Gia Định nhử 5 vạn quân Xiêm vào trận địa mai phục trên sông Tiền (đoạn từ Rạch Gầm đến Xoài Mút), tiêu diệt gần như toàn bộ quân giặc, bảo vệ trọn vẹn chủ quyền phía Nam."
          },
          {
            title: "Đại thắng mùa Xuân Kỷ Dậu (Năm 1789)",
            desc: "Nhận được tin 29 vạn quân Mãn Thanh tràn sang xâm lược, Nguyễn Huệ lên ngôi Hoàng đế tại núi Bân (Huế), lấy niên hiệu Quang Trung rồi hành quân thần tốc ra Bắc. Đêm mùng 4 rạng sáng mùng 5 Tết Kỷ Dậu, đại phá các đồn lũy Ngọc Hồi, Khương Thượng, đập tan quân Thanh, Tôn Sĩ Nghị hoảng loạn vượt cầu phao tháo chạy."
          }
        ]
      },
      {
        heading: "4. Bài học lịch sử quý báu",
        type: "grid",
        items: [
          {
            badge: "Xây dựng lực lượng",
            title: "Bộ chỉ huy sáng suốt & Nghĩa quân kỉ luật",
            points: [
              "Lam Sơn: Hội thề Lũng Nhai tạo lập bộ tham mưu đoàn kết keo sơn; chính sách quân đội 'phụ tử chi binh'.",
              "Tây Sơn: Tuyển quân thần tốc trên đường tiến quân ra Bắc (tại Nghệ An, Thanh Hóa), trực tiếp huấn luyện và động viên tinh thần chiến đấu quả cảm."
            ]
          },
          {
            badge: "Nghệ thuật tác chiến",
            title: "Linh hoạt, bất ngờ, đánh nhanh thắng nhanh",
            points: [
              "Nắm vững thời cơ chiến lược: Biết kết hợp đánh du kích tiêu hao địch với các trận đánh công kiên quy mô lớn.",
              "Chiến thuật thần tốc bất ngờ: Nghệ thuật hành quân ngày đêm, công đồn hiệp đồng thủy bộ điêu luyện của Hoàng đế Quang Trung."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Kế sách chuyển quân vào Nghệ An mở rộng căn cứ trong cuộc khởi nghĩa Lam Sơn (1424) là do tướng lĩnh tài ba nào đề xuất?",
        options: [
          "A. Nguyễn Trãi",
          "B. Nguyễn Chích",
          "C. Trần Nguyên Hãn",
          "D. Lê Lai"
        ],
        answer: 1,
        explain: "Tướng Nguyễn Chích đã hiến kế cho Lê Lợi bỏ đất hiểm Lam Sơn, đánh chiếm Nghệ An làm đất đứng chân để xoay chuyển hoàn toàn cục diện chiến tranh."
      },
      {
        q: "Thắng lợi lịch sử nào của phong trào Tây Sơn đã đập tan 5 vạn quân xâm lược Xiêm vào đầu năm 1785?",
        options: [
          "A. Trận Bạch Đằng",
          "B. Trận Rạch Gầm – Xoài Mút",
          "C. Trận Ngọc Hồi – Đống Đa",
          "D. Trận Chi Lăng – Xương Giang"
        ],
        answer: 1,
        explain: "Đêm 19 rạng sáng 20-1-1785, Nguyễn Huệ đã chỉ huy trận phục kích thủy chiến chôn vùi 5 vạn quân Xiêm trên sông Tiền đoạn Rạch Gầm - Xoài Mút."
      },
      {
        q: "Sự kiện lịch sử nào đánh dấu sự kết thúc hoàn toàn của cuộc khởi nghĩa Lam Sơn và nền độc lập của Đại Việt được khôi phục?",
        options: [
          "A. Hội thề Lũng Nhai (1416)",
          "B. Chiến thắng Tốt Động – Chúc Động (1426)",
          "C. Hội thề Đông Quan và quân Minh rút về nước (12-1427)",
          "D. Lê Lợi xưng Bình Định Vương (1418)"
        ],
        answer: 2,
        explain: "Tháng 12-1427, Hội thề Đông Quan diễn ra, Vương Thông cam kết rút toàn bộ quân đội về nước, hòa bình được lập lại trên đất nước Đại Việt."
      }
    ]
  },

  9: {
    num: 9,
    topicNum: 5,
    topicTitle: "Một số cuộc cải cách lớn trong lịch sử Việt Nam (Trước năm 1858)",
    title: "Cuộc cải cách của Hồ Quý Ly và Triều Hồ",
    summary: "Phân tích bối cảnh khủng hoảng trầm trọng cuối thời Trần, hệ thống các chính sách cải cách táo bạo của Hồ Quý Ly (hạn điền, hạn nô, phát hành tiền giấy, quân sự, chữ Nôm) và đánh giá khách quan mặt tiến bộ lẫn hạn chế lịch sử.",
    sections: [
      {
        heading: "1. Bối cảnh lịch sử cuối thời Trần",
        type: "list",
        items: [
          {
            title: "Khủng hoảng chính trị - xã hội",
            desc: "Nửa sau thế kỉ XIV, nhà Trần suy thoái nghiêm trọng; triều đình mục ruỗng, vua tôi ăn chơi sa đọa. Tầng lớp quý tộc đại địa chủ bao chiếm ruộng đất, lập điền trang rộng lớn khiến nông dân mất đất trở thành nô tì bần cùng; mâu thuẫn xã hội bùng nổ thành các cuộc khởi nghĩa nông dân (Ngô Bệ, Phạm Sư Ôn)."
          },
          {
            title: "Nguy cơ xâm lược từ bên ngoài",
            desc: "Ở phía Nam, quân Chiêm Thành liên tục tấn công cướp phá kinh thành Thăng Long. Ở phía Bắc, nhà Minh chuẩn bị mưu đồ thôn tính Đại Việt."
          },
          {
            title: "Hồ Quý Ly lập Triều Hồ (Năm 1400)",
            desc: "Là quý tộc có tài thao lược và nắm giữ đại quyền triều đình, năm 1400 Hồ Quý Ly phế truất vua Trần, lập ra nhà Hồ, đổi quốc hiệu là Đại Ngu (mong ước thái bình thịnh trị) và tiến hành cuộc đại cải cách sâu rộng."
          }
        ]
      },
      {
        heading: "2. Nội dung cải cách của Hồ Quý Ly và Triều Hồ",
        type: "grid",
        items: [
          {
            badge: "Kinh tế & Tài chính",
            title: "Chính sách Hạn điền & Phát hành Tiền giấy",
            points: [
              "Chính sách Hạn điền: Hạn chế tối đa diện tích sở hữu ruộng đất của vương hầu quý tộc (trừ đại vương và trưởng công chúa, thứ dân chỉ được sở hữu tối đa 10 mẫu); ruộng đất thừa bị sung công giao cho nhà nước quản lí.",
              "Phát hành tiền giấy Thông bảo hội sao (1396): Thu hồi tiền đồng đúc súng đạn, cải cách hệ thống thuế khóa và thống nhất đơn vị đo lường toàn quốc."
            ]
          },
          {
            badge: "Xã hội & Quân sự",
            title: "Chính sách Hạn nô & Quốc phòng kiên cố",
            points: [
              "Chính sách Hạn nô: Giới hạn số lượng gia nô của quý tộc theo phẩm cấp, số gia nô vượt mức quy định phải nộp thuế hoặc sung vào bộ máy nhà nước.",
              "Quân sự: Tăng cường quân thường trực, lập sổ hộ tịch thống kê nhân khẩu từ 2 tuổi để tuyển quân; xây dựng thành lũy hiểm trở (thành Tây Đô, thành Đa Bang), phát minh súng thần cơ và đóng thuyền chiến Cổ Lâu hai tầng."
            ]
          },
          {
            badge: "Văn hóa & Giáo dục",
            title: "Đề cao chữ Nôm & Chấn chỉnh Nho giáo",
            points: [
              "Hạn chế thế lực Phật giáo: Buộc các nhà sư dưới 50 tuổi không vượt qua sát hạch phải hoàn tục.",
              "Đề cao quốc âm (chữ Nôm): Tự tay dịch sách Kinh Thư sang chữ Nôm để dạy hậu phi và cung nhân; đưa chữ Nôm vào các kì thi quốc gia.",
              "Mở rộng thi cử: Tổ chức các kì thi tuyển chọn được gần 200 hiền tài đỗ đạt phục vụ đất nước."
            ]
          }
        ]
      },
      {
        heading: "3. Đánh giá kết quả, ý nghĩa và hạn chế",
        type: "list",
        items: [
          {
            title: "Mặt tiến bộ và ý nghĩa",
            desc: "Là cuộc cải cách toàn diện, táo bạo và đi trước thời đại; làm suy yếu thế lực quý tộc bảo thủ dòng họ Trần, củng cố chế độ quân chủ trung ương tập quyền, tăng cường nguồn thu thuế và tiềm lực quốc phòng đất nước."
          },
          {
            title: "Hạn chế lịch sử",
            desc: "Các biện pháp cải cách mang tính nóng vội, cưỡng chế gắt gao; việc phát hành tiền giấy không được nhân dân tin dùng; chưa giải quyết triệt để nhu cầu ruộng đất của nông dân nghèo; làm mất lòng tầng lớp sĩ phu trung quân ái quốc, dẫn tới tình trạng mất đoàn kết khi quân Minh tràn sang xâm lược."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Chính sách ruộng đất nổi bật nhất do Hồ Quý Ly ban hành nhằm hạn chế sở hữu điền trang của quý tộc nhà Trần có tên là gì?",
        options: [
          "A. Chính sách Quân điền",
          "B. Chính sách Hạn điền",
          "C. Chính sách Tịch điền",
          "D. Chính sách Lộc điền"
        ],
        answer: 1,
        explain: "Chính sách Hạn điền quy định diện tích ruộng đất tư hữu tối đa (thứ dân tối đa 10 mẫu), phần dư thừa bị sung công vào quỹ ruộng đất nhà nước."
      },
      {
        q: "Năm 1396, Hồ Quý Ly đã cho ban hành loại tiền tệ đặc biệt nào lần đầu tiên xuất hiện trong lịch sử tiền tệ Việt Nam?",
        options: [
          "A. Tiền giấy Thông bảo hội sao",
          "B. Tiền vàng lá",
          "C. Tiền kẽm",
          "D. Tiền đồng Thái Bình hưng bảo"
        ],
        answer: 0,
        explain: "Hồ Quý Ly phát hành tiền giấy Thông bảo hội sao năm 1396 để thu hồi toàn bộ tiền đồng trong dân nhằm đúc vũ khí chống ngoại xâm."
      },
      {
        q: "Trong lĩnh vực văn hóa và giáo dục, đóng góp tiến bộ mang tính dân tộc của Hồ Quý Ly là gì?",
        options: [
          "A. Bãi bỏ hoàn toàn chữ Hán",
          "B. Đề cao và khuyến khích sử dụng chữ Nôm, dịch sách kinh điển sang chữ Nôm",
          "C. Cấm đoán thi cử",
          "D. Xóa bỏ trường học ở các châu, huyện"
        ],
        answer: 1,
        explain: "Hồ Quý Ly rất coi trọng chữ Nôm, đích thân dịch sách Kinh Thư sang chữ Nôm và đưa vào nội dung thi cử nhằm nâng cao vị thế tiếng mẹ đẻ."
      }
    ]
  },

  10: {
    num: 10,
    topicNum: 5,
    topicTitle: "Một số cuộc cải cách lớn trong lịch sử Việt Nam (Trước năm 1858)",
    title: "Cuộc cải cách của Lê Thánh Tông (thế kỉ XV)",
    summary: "Hệ thống hóa cuộc cải cách hành chính - tư pháp - quân sự - kinh tế quy mô và hoàn thiện bậc nhất lịch sử phong kiến Việt Nam: củng cố chế độ quân chủ tập quyền, tổ chức Lục Bộ - Lục Tự - Lục Khoa, chia cả nước thành 13 thừa tuyên, ban hành Quốc triều hình luật (Luật Hồng Đức) và chế độ quân điền.",
    sections: [
      {
        heading: "1. Bối cảnh lịch sử và mục tiêu cải cách",
        type: "list",
        items: [
          {
            title: "Bối cảnh triều Lê sơ giữa thế kỉ XV",
            desc: "Năm 1460, vua Lê Thánh Tông lên ngôi. Đất nước đã hòa bình, kinh tế phục hồi nhưng bộ máy nhà nước bộc lộ nhiều kẽ hở: Quyền lực ở trung ương bị chi phối bởi các đại thần công thần lộng quyền; ở địa phương cả nước chỉ chia thành 5 đạo quá rộng lớn, tiềm ẩn nguy cơ cát cứ."
          },
          {
            title: "Mục tiêu cải cách",
            desc: "Tập trung tuyệt đối quyền lực vào tay Hoàng đế, xóa bỏ tình trạng lộng quyền, xây dựng bộ máy hành chính quan liêu pháp trị quy củ, chặt chẽ từ trung ương đến tận làng xã."
          }
        ]
      },
      {
        heading: "2. Nội dung cải cách toàn diện của Hoàng đế Lê Thánh Tông",
        type: "grid",
        items: [
          {
            badge: "Hành chính Trung ương",
            title: "Xóa bỏ quyền thần & Hoàn thiện Lục Bộ",
            points: [
              "Bãi bỏ các chức quan trung gian quyền lực lớn (Tể tướng, Đại tư mã...); Hoàng đế trực tiếp điều hành quốc gia và các cơ quan chuyên môn.",
              "Hoàn thiện Lục Bộ (Lại, Hộ, Lễ, Binh, Hình, Công) phụ trách 6 lĩnh vực chủ chốt của quốc gia.",
              "Thành lập Lục Tự (hỗ trợ thực thi) và Lục Khoa (chuyên trách giám sát, thanh tra chéo hoạt động của Lục Bộ), tạo cơ chế kiểm soát quyền lực chặt chẽ."
            ]
          },
          {
            badge: "Hành chính Địa phương",
            title: "Phân chia 13 Thừa tuyên thống nhất",
            points: [
              "Năm 1466: Bãi bỏ 5 đạo cũ, chia cả nước thành 12 thừa tuyên và phủ Trung Đô. Năm 1471, thành lập thừa tuyên thứ 13 là Quảng Nam.",
              "Cơ cấu lãnh đạo tam ty: Mỗi thừa tuyên có 3 ty độc lập cùng phụ trách gồm Đô ty (quân sự), Thừa ty (hành chính, tư pháp), Hiến ty (thanh tra, giám sát).",
              "Dưới thừa tuyên là các cấp: Phủ -> Huyện (hoặc Châu) -> Xã."
            ]
          },
          {
            badge: "Pháp luật & Quân đội",
            title: "Luật Hồng Đức & Tổ chức Cấm binh",
            points: [
              "Năm 1483: Ban hành bộ Quốc triều hình luật (Luật Hồng Đức) gồm 722 điều; bộ luật tiến bộ bậc nhất thời phong kiến, có nhiều điều khoản bảo vệ người già, trẻ em, phụ nữ và phát triển nông nghiệp.",
              "Quân đội: Tổ chức thành Cấm binh (thân binh bảo vệ kinh thành) và Ngoại binh (bảo vệ các đạo thừa tuyên); quy định duyệt binh hàng năm và 3 năm khảo võ nghệ một lần."
            ]
          },
          {
            badge: "Kinh tế & Giáo dục",
            title: "Chính sách Quân điền & Nở rộ khoa cử",
            points: [
              "Lộc điền: Cấp ruộng đất làm bổng lộc cho quý tộc và quan lại từ tứ phẩm trở lên.",
              "Quân điền: Định kì chia ruộng đất công làng xã theo định suất cho quan lại cấp dưới và mọi tầng lớp nhân dân (kể cả cô nhi, quả phụ, người tàn tật).",
              "Giáo dục: Mở rộng trường học, dựng bia tiến sĩ tại Văn Miếu (1484) để tôn vinh hiền tài; tổ chức 12 khoa thi Hội, tuyển chọn được hơn 500 vị tiến sĩ tài năng."
            ]
          }
        ]
      },
      {
        heading: "3. Kết quả và ý nghĩa lịch sử",
        type: "list",
        items: [
          {
            title: "Xây dựng nhà nước pháp quyền Nho giáo đỉnh cao",
            desc: "Tạo lập nên một bộ máy nhà nước quân chủ chuyên chế trung ương tập quyền cao độ, quy củ, chặt chẽ và hoạt động hiệu quả nhất trong toàn bộ lịch sử chế độ phong kiến Việt Nam."
          },
          {
            title: "Đưa Đại Việt bước vào kỉ nguyên Hoàng kim",
            desc: "Kinh tế nông nghiệp phồn vinh, an ninh biên cương vững vàng, văn hóa và giáo dục phát triển rực rỡ, đưa Vương triều Lê sơ đạt tới đỉnh cao thịnh trị (thời kì Hồng Đức thịnh thế)."
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Dưới triều vua Lê Thánh Tông, cả nước Đại Việt được chia lại thành bao nhiêu thừa tuyên?",
        options: [
          "A. 5 đạo",
          "B. 10 đạo",
          "C. 13 thừa tuyên",
          "D. 30 tỉnh"
        ],
        answer: 2,
        explain: "Năm 1466 Lê Thánh Tông chia cả nước thành 12 thừa tuyên, đến năm 1471 thành lập thêm thừa tuyên Quảng Nam, tổng cộng là 13 thừa tuyên."
      },
      {
        q: "Bộ luật đồ sộ và tiến bộ bậc nhất của lịch sử pháp luật phong kiến Việt Nam được ban hành dưới thời Lê Thánh Tông có tên là gì?",
        options: [
          "A. Hình thư thời Lý",
          "B. Quốc triều hình luật (Luật Hồng Đức)",
          "C. Hoàng Việt luật lệ (Luật Gia Long)",
          "D. Luật hình thế kỉ XVIII"
        ],
        answer: 1,
        explain: "Năm 1483, bộ Quốc triều hình luật (thường gọi là Luật Hồng Đức) gồm 722 điều được ban hành, là đỉnh cao lập pháp thời phong kiến."
      },
      {
        q: "Mỗi thừa tuyên dưới thời vua Lê Thánh Tông được quản lí bởi hệ thống cơ quan nào sau đây?",
        options: [
          "A. Tổng đốc và Tuần phủ",
          "B. Tam ty: Đô ty (quân sự), Thừa ty (hành chính) và Hiến ty (thanh tra)",
          "C. Thị lang và Thượng thư",
          "D. Lục Bộ và Lục Tự"
        ],
        answer: 1,
        explain: "Ở mỗi thừa tuyên, Lê Thánh Tông đặt ra 3 cơ quan độc lập kiểm soát lẫn nhau gọi là Tam ty: Đô ty, Thừa ty và Hiến ty."
      }
    ]
  },

  11: {
    num: 11,
    topicNum: 5,
    topicTitle: "Một số cuộc cải cách lớn trong lịch sử Việt Nam (Trước năm 1858)",
    title: "Cuộc cải cách của Minh Mạng (nửa đầu thế kỉ XIX)",
    summary: "Hệ thống hóa cuộc đại cải cách hành chính thời vua Minh Mạng: cơ cấu lại cơ quan trung ương (thành lập Nội các, Cơ mật viện, củng cố Lục Bộ), cải cách địa phương mang tính đột phá (bãi bỏ Bắc Thành và Gia Định Thành, chia cả nước thành 30 tỉnh và phủ Thừa Thiên), siết chặt chế độ hồi tỵ và so sánh 3 cuộc cải cách lớn trong lịch sử.",
    sections: [
      {
        heading: "1. Bối cảnh lịch sử và yêu cầu cải cách",
        type: "list",
        items: [
          {
            title: "Tình hình đất nước thời đầu triều Nguyễn",
            desc: "Năm 1802, triều Nguyễn thành lập, cai quản lãnh thổ rộng lớn thống nhất từ Mục Nam Quan đến Mũi Cà Mau. Tuy nhiên dưới thời Gia Long, quyền lực còn phân tán: Miền Bắc do Bắc Thành cai quản (11 trấn), miền Nam do Gia Định Thành cai quản (5 trấn), triều đình ở Phú Xuân chỉ trực tiếp quản lí 7 trấn miền Trung. Đứng đầu các Thành là Tổng trấn nắm trọn quyền sinh sát, cơ cấu thiếu đồng nhất."
          },
          {
            title: "Minh Mạng lên ngôi (1820)",
            desc: "Ý thức sâu sắc sự bất cập của chế độ phân quyền và nguy cơ ly tâm, vua Minh Mạng quyết tâm tiến hành công cuộc cải cách toàn diện nhằm xây dựng nhà nước quân chủ trung ương tập quyền cao độ."
          }
        ]
      },
      {
        heading: "2. Nội dung cải cách của vua Minh Mạng",
        type: "grid",
        items: [
          {
            badge: "Hành chính Trung ương",
            title: "Thành lập Nội các & Cơ mật viện",
            points: [
              "Năm 1829: Thành lập Nội các thay thế Văn thư phòng, giữ chức năng cơ quan hành chính đầu não giúp vua xử lí, dự thảo văn bản và lưu trữ công văn mật.",
              "Năm 1834: Thành lập Cơ mật viện gồm 4 đại thần thân tín, là cơ quan tham vấn tối cao cho hoàng đế về quân sự, an ninh quốc gia và ngoại giao.",
              "Hoàn thiện thể chế Lục Bộ; sử dụng Đô sát viện và Lục Khoa để kiểm tra, thanh tra chéo toàn bộ quan lại."
            ]
          },
          {
            badge: "Hành chính Địa phương",
            title: "Xóa bỏ Thành & Chia thành 30 tỉnh",
            points: [
              "Bãi bỏ hoàn toàn các chức Tổng trấn; xóa bỏ Bắc Thành (1831) và Gia Định Thành (1832).",
              "Chia cả nước thành 30 tỉnh và một phủ Thừa Thiên (kinh sư): Năm 1831 chia miền Bắc thành 18 tỉnh; năm 1832 chia miền Nam thành 12 tỉnh.",
              "Mỗi tỉnh đặt dưới sự quản lí của Tổng đốc (phụ trách 2 tỉnh) hoặc Tuần phủ; dưới tỉnh là phủ, huyện, châu, tổng, xã.",
              "Đổi các sách, động vùng cao thành xã, xóa bỏ thế lực tù trưởng cha truyền con nối, cử quan lại triều đình trực tiếp cai quản."
            ]
          },
          {
            badge: "Kỉ luật Quan lại",
            title: "Chế độ Hồi tỵ nghiêm ngặt",
            points: [
              "Chế độ Hồi tỵ: Quy định nghiêm cấm quan lại không được nhậm chức, làm giám khảo thi cử hay xử án tại chính quê hương mình, quê vợ hoặc nơi có người thân thích đang làm quan.",
              "Mục đích: Ngăn chặn triệt để tệ nạn ô dù, cục bộ địa phương, bè phái gia đình và tham nhũng trong quan trường."
            ]
          }
        ]
      },
      {
        heading: "3. Kết quả, ý nghĩa và bảng so sánh 3 cuộc cải cách lớn",
        type: "table",
        headers: ["Nội dung so sánh", "Cải cách Hồ Quý Ly (1400–1407)", "Cải cách Lê Thánh Tông (thế kỉ XV)", "Cải cách Minh Mạng (từ 1820)"],
        rows: [
          ["Bối cảnh", "Khủng hoảng trầm trọng cuối Trần; nguy cơ ngoại xâm Minh đe dọa", "Bộ máy quan thần lộng quyền, địa phương phân tán rộng lớn", "Đất nước thống nhất nhưng hành chính Bắc - Nam phân quyền phức tạp"],
          ["Trọng tâm", "Kinh tế - xã hội (hạn điền, hạn nô), tiền giấy, quân sự", "Tổ chức hành chính trung ương - địa phương (13 thừa tuyên), luật pháp, giáo dục", "Tổ chức hành chính (xóa Bắc Thành/Gia Định Thành, lập 30 tỉnh), chế độ hồi tỵ"],
          ["Mức độ tập quyền", "Trung ương tập quyền bước đầu nhưng còn nhiều mâu thuẫn nội bộ", "Quân chủ chuyên chế trung ương tập quyền Nho giáo đỉnh cao", "Quân chủ chuyên chế trung ương tập quyền cao độ, vua nắm tuyệt đối mọi quyền lực"],
          ["Kết quả chính", "Nhiều chính sách tiến bộ đi trước thời đại nhưng thất bại nhanh chóng trước quân Minh", "Bộ máy quy củ, đưa Đại Việt bước vào thời kì thịnh thế rực rỡ nhất phong kiến", "Hoàn thành thống nhất hành chính quốc gia; mô hình tỉnh để lại dấu ấn lịch sử đến tận ngày nay"]
        ]
      }
    ],
    quiz: [
      {
        q: "Trọng tâm cải cách hành chính địa phương mang tính đột phá của vua Minh Mạng trong những năm 1831–1832 là gì?",
        options: [
          "A. Chia cả nước thành 5 đạo",
          "B. Xóa bỏ Bắc Thành, Gia Định Thành và chia cả nước thành 30 tỉnh cùng phủ Thừa Thiên",
          "C. Chia cả nước thành 13 thừa tuyên",
          "D. Cho các địa phương tự trị"
        ],
        answer: 1,
        explain: "Năm 1831–1832, Minh Mạng xóa bỏ Bắc Thành và Gia Định Thành, phân chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên."
      },
      {
        q: "Cơ quan đầu não được vua Minh Mạng thành lập năm 1834 làm nhiệm vụ tham vấn tối cao về quân sự và an ninh cho hoàng đế là:",
        options: [
          "A. Văn thư phòng",
          "B. Nội các",
          "C. Cơ mật viện",
          "D. Đô sát viện"
        ],
        answer: 2,
        explain: "Năm 1834, vua Minh Mạng cho lập Cơ mật viện làm cơ quan tư vấn tối cao về các vấn đề cơ mật quân sự và quốc phòng."
      },
      {
        q: "Quy định nào dưới thời vua Minh Mạng cấm quan lại không được làm việc tại quê hương, quê vợ hoặc nơi có người thân làm quan?",
        options: [
          "A. Luật Quân điền",
          "B. Chế độ Hồi tỵ",
          "C. Luật Hạn nô",
          "D. Phép Lộc điền"
        ],
        answer: 1,
        explain: "Chế độ Hồi tỵ quy định việc tránh né quan hệ thân tộc nhằm ngăn chặn tham nhũng, bè phái và tư lợi trong quản lí nhà nước."
      }
    ]
  },

  12: {
    num: 12,
    topicNum: 6,
    topicTitle: "Lịch sử bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
    title: "Vị trí và tầm quan trọng của Biển Đông",
    summary: "Nắm vững vị trí, quy mô (diện tích 3,5 triệu km²), đặc điểm địa lí tự nhiên, tầm quan trọng chiến lược về giao thông hàng hải quốc tế (eo biển Ma-lắc-ca), vị trí địa chính trị - quân sự, tiềm năng tài nguyên sinh vật và khoáng sản dầu khí phong phú cùng hệ thống đảo, quần đảo Hoàng Sa và Trường Sa.",
    sections: [
      {
        heading: "1. Vị trí, quy mô và đặc điểm tự nhiên của Biển Đông",
        type: "list",
        items: [
          {
            title: "Vị trí địa lí và quy mô",
            desc: "Nằm ở rìa tây Thái Bình Dương, trải dài từ khoảng 3°B đến 26°B và từ 100°Đ đến 121°Đ; có diện tích khoảng 3,5 triệu km² (biển lớn thứ hai ở Thái Bình Dương và thứ tư trên thế giới, lớn gấp 1,5 lần Địa Trung Hải và gấp 8 lần Biển Đen)."
          },
          {
            title: "Đặc điểm hình thái biển",
            desc: "Trải dài gần 3.000 km theo trục đông bắc – tây nam, nối liền Thái Bình Dương với Ấn Độ Dương. Là vùng biển tương đối kín, bao bọc bởi 9 quốc gia ven biển (Việt Nam, Trung Quốc, Phi-lip-pin, In-đô-nê-xi-a, Bru-nây, Ma-lai-xi-a, Xin-ga-po, Thái Lan, Cam-pu-chia) và vùng lãnh thổ Đài Loan."
          },
          {
            title: "Đặc điểm khí hậu và hải văn",
            desc: "Độ sâu trung bình khoảng 1.140 m, nơi sâu nhất đạt hơn 5.000 m. Nằm trọn trong vùng nhiệt đới gió mùa, là nơi hình thành và hoạt động thường xuyên của các cơn bão và áp thấp nhiệt đới."
          }
        ]
      },
      {
        heading: "2. Tầm quan trọng chiến lược của Biển Đông",
        type: "grid",
        items: [
          {
            badge: "Giao thông Hàng hải",
            title: "Huyết mạch thương mại thế giới",
            points: [
              "Tuyến hàng hải quốc tế nhộn nhịp thứ hai thế giới: Nối liền châu Âu, Trung Đông, Nam Á với khu vực Đông Á và châu Mỹ.",
              "5 trong 10 tuyến đường vận tải biển quốc tế quan trọng nhất hành tinh đi qua Biển Đông; phần lớn lượng dầu thô vận chuyển từ Trung Đông sang Đông Á đều qua đây.",
              "Hệ thống eo biển yết hầu: Eo biển Đài Loan, Ba-si, Ca-ri-ma-ta và đặc biệt là eo biển Ma-lắc-ca - yết hầu hàng hải điều tiết lưu lượng thương mại khổng lồ toàn cầu."
            ]
          },
          {
            badge: "Địa bàn Chiến lược",
            title: "Ý nghĩa An ninh - Quốc phòng",
            points: [
              "Vị trí địa chính trị đặc biệt quan trọng đối với các cường quốc khu vực châu Á - Thái Bình Dương.",
              "Chuỗi cảng nước sâu trung chuyển quốc tế sầm uất: Xin-ga-po, Ku-an-tan, Ma-ni-la, Hồng Công, Đà Nẵng, Cam Ranh."
            ]
          },
          {
            badge: "Nguồn Tài nguyên",
            title: "Kho báu sinh vật & Dầu khí",
            points: [
              "Tài nguyên sinh vật trù phú: Trên 12.000 loài sinh vật biển, gồm khoảng 2.040 loài cá, 350 loài san hô, 662 loài rong biển và nhiều loài quý hiếm.",
              "Trữ lượng khoáng sản dầu khí khổng lồ: Là một trong 5 bồn trũng dầu khí lớn nhất thế giới, cung cấp tiềm năng năng lượng và khoáng sản chiến lược cho sự phát triển bền vững."
            ]
          }
        ]
      },
      {
        heading: "3. Hai quần đảo Hoàng Sa và Trường Sa",
        type: "table",
        headers: ["Đặc điểm", "Quần đảo Hoàng Sa", "Quần đảo Trường Sa"],
        rows: [
          ["Vị trí tọa độ", "Phía bắc Biển Đông; khoảng 15°45′B – 17°15′B và 111°Đ – 113°Đ", "Phía đông nam Biển Đông; khoảng 6°30′B – 12°B và 111°30′Đ – 117°20′Đ"],
          ["Quy mô cấu tạo", "Hơn 37 đảo, đá, bãi cạn và rạn san hô", "Hơn 100 đảo, đá, cồn cát, bãi ngầm san hô trải rộng"],
          ["Các đảo tiêu biểu", "Đảo Phú Lâm, Linh Côn, Tri Tôn, Hoàng Sa, Cây, Đá Lồi", "Đảo Trường Sa, Song Tử Tây (cao nhất), Ba Bình (diện tích lớn nhất), Nam Yết, Sinh Tồn"],
          ["Cụm đảo chính", "Gồm 2 nhóm: Nhóm An Vĩnh và Nhóm Lưỡi Liềm (Trăng Khuyết)", "Gồm 8 cụm: Song Tử, Thị Tứ, Loại Ta, Nam Yết, Sinh Tồn, Trường Sa, Thám Hiểm, Bình Nguyên"],
          ["Ý nghĩa chiến lược", "Vị trí tiền tiêu bảo vệ vùng trời, vùng biển miền Trung; kiểm soát các tuyến hàng hải phía Bắc", "Tuyến lá chắn tiền tiêu phía Nam; trạm hậu cần nghề cá, khai thác dầu khí và nghiên cứu hải dương học"]
        ]
      }
    ],
    quiz: [
      {
        q: "Biển Đông có diện tích khoảng bao nhiêu và giữ vị trí thứ mấy trong số các biển trên thế giới?",
        options: [
          "A. Khoảng 1,5 triệu km², lớn thứ mười",
          "B. Khoảng 3,5 triệu km², lớn thứ tư thế giới",
          "C. Khoảng 5 triệu km², lớn nhất thế giới",
          "D. Khoảng 800 nghìn km², lớn thứ hai"
        ],
        answer: 1,
        explain: "Biển Đông có diện tích khoảng 3,5 triệu km², là vùng biển lớn thứ hai ở Thái Bình Dương và lớn thứ tư trên thế giới."
      },
      {
        q: "Eo biển yết hầu chiến lược nào kết nối Biển Đông với Ấn Độ Dương, giữ vai trò điều tiết giao thông hàng hải quốc tế hàng đầu thế giới?",
        options: [
          "A. Eo biển Bơ-rinh (Bering)",
          "B. Eo biển Ma-lắc-ca (Malacca)",
          "C. Eo biển Bo-xpo-rút (Bosphorus)",
          "D. Eo biển Man-sơ (English Channel)"
        ],
        answer: 1,
        explain: "Eo biển Ma-lắc-ca là điểm điều tiết hàng hải trọng yếu kết nối Ấn Độ Dương với Thái Bình Dương và Biển Đông."
      },
      {
        q: "Quần đảo Trường Sa của Việt Nam bao gồm bao nhiêu cụm đảo chính theo sách giáo khoa Lịch sử 11?",
        options: [
          "A. 2 cụm đảo",
          "B. 4 cụm đảo",
          "C. 8 cụm đảo",
          "D. 12 cụm đảo"
        ],
        answer: 2,
        explain: "Quần đảo Trường Sa gồm 8 cụm đảo chính: Song Tử, Thị Tứ, Loại Ta, Nam Yết, Sinh Tồn, Trường Sa, Thám Hiểm và Bình Nguyên."
      }
    ]
  },

  13: {
    num: 13,
    topicNum: 6,
    topicTitle: "Lịch sử bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
    title: "Việt Nam và Biển Đông",
    summary: "Làm rõ vai trò đặc biệt của Biển Đông đối với an ninh quốc phòng và phát triển kinh tế của Việt Nam (bờ biển dài 3.260 km), quá trình xác lập và thực thi chủ quyền liên tục đối với hai quần đảo Hoàng Sa và Trường Sa qua các thời kì lịch sử (trước 1884, 1884-1975, 1975 đến nay), các sự kiện đấu tranh anh dũng (1974, 1988 Gạc Ma) và chủ trương giải quyết tranh chấp bằng biện pháp hòa bình trên cơ sở luật pháp quốc tế (UNCLOS 1982, DOC 2002).",
    sections: [
      {
        heading: "1. Tầm quan trọng của Biển Đông đối với Việt Nam",
        type: "grid",
        items: [
          {
            badge: "Quốc phòng & An ninh",
            title: "Lá chắn tiền tiêu bảo vệ Tổ quốc",
            points: [
              "Việt Nam có đường bờ biển dài khoảng 3.260 km trải dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang).",
              "Biển Đông là tuyến phòng thủ chiến lược hướng đông; các đảo và quần đảo tạo thành hệ thống tiền tiêu vững chắc kiểm soát không gian sinh tồn của đất nước."
            ]
          },
          {
            badge: "Phát triển Kinh tế",
            title: "Trụ cột phát triển kinh tế biển",
            points: [
              "Khai thác hải sản: Trữ lượng cá có khả năng khai thác hàng năm khoảng 2,3 triệu tấn.",
              "Dầu khí và khoáng sản: Trữ lượng dầu khí xác minh đạt gần 550 triệu tấn; nhiều mỏ sa khoáng titan, thiếc, đất hiếm quý giá ven biển.",
              "Hệ thống cảng biển sầm uất: Cảng nước sâu Cái Lân, Nghi Sơn, Dung Quất, Vân Phong, Cam Ranh, Vũng Tàu...",
              "Du lịch biển tráng lệ: Hạ Long (kì quan thế giới), Cửa Lò, Lăng Cô, Nha Trang, Phú Quốc..."
            ]
          }
        ]
      },
      {
        heading: "2. Quá trình xác lập, quản lí và thực thi chủ quyền Hoàng Sa – Trường Sa",
        type: "list",
        items: [
          {
            title: "Giai đoạn trước năm 1884 (Thời kì các triều đại phong kiến độc lập)",
            desc: "• Các bản đồ cổ: 'Toản tập Thiên Nam tứ chí lộ đồ thư' (1686), 'Giáp Ngọ niên bình Nam đồ' (1774), 'Đại Nam nhất thống toàn đồ' (1838) và bản đồ phương Tây 'An Nam đại quốc họa đồ' (1838) đều khẳng định Hoàng Sa, Vạn lí Trường Sa thuộc chủ quyền Việt Nam.\n• Các thư tịch lịch sử: 'Phủ biên tạp lục' của Lê Quý Đôn, 'Đại Nam thực lục', 'Đại Nam nhất thống chí' ghi chép chi tiết cương vực và hoạt động của nhà nước.\n• Đội Hoàng Sa và Đội Bắc Hải: Tổ chức từ thế kỉ XVII dưới thời các chúa Nguyễn; hàng năm vượt sóng ra Hoàng Sa, Trường Sa đo vẽ hải trình, thu lượm sản vật, cứu nạn tàu bè.\n• Dưới triều Nguyễn (Gia Long, Minh Mạng): Hàng năm cử thủy quân ra đảo đo đạc, vẽ bản đồ, cắm cột mốc chủ quyền, dựng bia, trồng cây và lập miếu thờ (năm 1835). Hoàng Sa trực thuộc phủ Quảng Nghĩa (tỉnh Quảng Ngãi)."
          },
          {
            title: "Giai đoạn 1884–1975 (Thời kì Pháp thuộc và hai miền chia cắt)",
            desc: "• Chính quyền thực dân Pháp (đại diện ngoại giao cho triều Nguyễn): Khẳng định chủ quyền, dựng cột mốc, ngọn hải đăng, trạm khí tượng và trạm vô tuyến trên quần đảo Hoàng Sa và Trường Sa (từ thập niên 1930).\n• Năm 1939: Pháp chính thức phản đối việc Nhật Bản tuyên bố kiểm soát một số đảo ở Trường Sa.\n• Tháng 9-1951: Tại Hội nghị Hòa bình Xan Phran-xi-xcô (Mỹ) với 51 quốc gia tham dự, Trưởng đoàn đại biểu Việt Nam tuyên bố chủ quyền lịch sử của Việt Nam đối với Hoàng Sa và Trường Sa mà không gặp bất kì sự phản đối nào.\n• Giai đoạn 1954–1975: Chính quyền Việt Nam Cộng hoà thực hiện quản lí hành chính liên tục; cử quân đồn trú, dựng bia chủ quyền. Tháng 4-1975, Quân Giải phóng miền Nam tiếp quản và giải phóng quần đảo Trường Sa."
          },
          {
            title: "Giai đoạn từ năm 1975 đến nay (Nước CHXHCN Việt Nam thống nhất)",
            desc: "• Thành lập các đơn vị hành chính quản lí chuyên trách: Năm 1982, thành lập huyện đảo Hoàng Sa (thuộc tỉnh Quảng Nam – Đà Nẵng, nay thuộc TP Đà Nẵng) và huyện đảo Trường Sa (thuộc tỉnh Đồng Nai, nay thuộc tỉnh Khánh Hòa).\n• Từ tháng 7-2025, định hướng tổ chức thành đặc khu Hoàng Sa (Đà Nẵng) và đặc khu Trường Sa (Khánh Hòa) nhằm nâng cao năng lực quản trị biển đảo hiện đại."
          }
        ]
      },
      {
        heading: "3. Cuộc đấu tranh bảo vệ chủ quyền và chủ trương giải quyết tranh chấp",
        type: "grid",
        items: [
          {
            badge: "Khúc tráng ca giữ đảo",
            title: "Sự hi sinh anh dũng bảo vệ biển đảo",
            points: [
              "Tháng 1-1974: Quân đội Việt Nam Cộng hòa đã chiến đấu anh dũng bảo vệ quần đảo Hoàng Sa trước cuộc tấn công xâm chiếm trái phép của quân đội Trung Quốc.",
              "Tháng 3-1988: Sự kiện Gạc Ma - 64 chiến sĩ Hải quân Nhân dân Việt Nam anh dũng ngã xuống, nắm chặt lá cờ Tổ quốc tạo nên 'Vòng tròn bất tử' tại các đảo Gạc Ma, Cô Lin, Len Đao để giữ vững chủ quyền thiêng liêng của dân tộc."
            ]
          },
          {
            badge: "Biện pháp Pháp lí & Hòa bình",
            title: "Kiên định luật pháp quốc tế",
            points: [
              "Chủ trương nhất quán: Giải quyết mọi tranh chấp, bất đồng trên Biển Đông bằng biện pháp hòa bình, trên tinh thần tôn trọng lẫn nhau và tuân thủ luật pháp quốc tế.",
              "Công ước Liên hợp quốc về Luật Biển năm 1982 (UNCLOS): Việt Nam là thành viên tích cực, tuân thủ nghiêm túc các quy định về lãnh hải, vùng đặc quyền kinh tế và thềm lục địa.",
              "Luật Biển Việt Nam năm 2012: Xác lập hành lang pháp lí vững chắc khẳng định chủ quyền biển đảo Tổ quốc.",
              "Tuyên bố về ứng xử của các bên ở Biển Đông (DOC, 2002): Kí kết giữa ASEAN và Trung Quốc, cam kết giải quyết hòa bình, không đe dọa vũ lực; hướng tới Bộ Quy tắc ứng xử ở Biển Đông (COC) có hiệu lực thực chất."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Tổ chức nào được các chúa Nguyễn thành lập từ thế kỉ XVII nhằm thực thi chủ quyền hàng năm tại quần đảo Hoàng Sa?",
        options: [
          "A. Đội Cần Vương",
          "B. Đội Hoàng Sa và Đội Bắc Hải",
          "C. Đội Nghĩa quân Tây Sơn",
          "D. Đội Thủy binh Lam Sơn"
        ],
        answer: 1,
        explain: "Từ thế kỉ XVII, chính quyền chúa Nguyễn đã lập Đội Hoàng Sa và Đội Bắc Hải để hàng năm đi thuyền ra đo vẽ, khai thác và thực thi chủ quyền ở Hoàng Sa, Trường Sa."
      },
      {
        q: "Tại Hội nghị Hòa bình San Francisco (tháng 9-1951), tuyên bố khẳng định chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa nhận được thái độ thế nào từ 51 quốc gia tham dự?",
        options: [
          "A. Bị tất cả các nước phản đối",
          "B. Hoàn toàn không có bất kì quốc gia nào lên tiếng phản đối",
          "C. Bị trì hoãn không công nhận",
          "D. Phải chia đôi vùng biển"
        ],
        answer: 1,
        explain: "Tại Hội nghị San Francisco năm 1951, phái đoàn Việt Nam tuyên bố chủ quyền đối với hai quần đảo Hoàng Sa và Trường Sa mà không một quốc gia nào phản đối."
      },
      {
        q: "Văn kiện quốc tế mang tính bước ngoặt được kí kết giữa ASEAN và Trung Quốc năm 2002 về ứng xử hòa bình trên Biển Đông có tên viết tắt là gì?",
        options: [
          "A. UNCLOS",
          "B. DOC (Declaration on the Conduct of Parties in the South China Sea)",
          "C. COC",
          "D. WTO"
        ],
        answer: 1,
        explain: "Tuyên bố về ứng xử của các bên ở Biển Đông (DOC) được kí kết năm 2002 tại Cam-pu-chia giữa các nước ASEAN và Trung Quốc."
      }
    ]
  }
};

module.exports = part2Lessons;
