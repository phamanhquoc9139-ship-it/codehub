// scratch/diali11_data_part3.js
// Địa lí 11 - Bộ sách Kết nối tri thức với cuộc sống
// Phần II (tiếp theo): Bài 21 đến Bài 31
// Mỗi bài đầy đủ: Mục tiêu, Kiến thức trọng tâm (các mục), và 3 câu hỏi trắc nghiệm kèm giải thích

const part3_lessons = {
  21: {
    num: 21,
    title: "Kinh tế Liên bang Nga",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Liên bang Nga",
    badge: "Kinh tế cường quốc",
    objectives: [
      "Trình bày và giải thích được tình hình phát triển kinh tế chung của Liên bang Nga qua các giai đoạn.",
      "Phân tích được các ngành kinh tế trọng điểm: công nghiệp khai khoáng - năng lượng, luyện kim, chế tạo máy và nông nghiệp lúa mì.",
      "Nêu được đặc điểm phân hoá kinh tế theo 4 vùng lãnh thổ trọng điểm: Trung ương, Trung tâm Đất đen, U-ran và Viễn Đông."
    ],
    sections: [
      {
        title: "1. Tình hình phát triển kinh tế chung",
        type: "list",
        items: [
          "<strong>Giai đoạn trước năm 2000:</strong> Sau khi Liên Xô tan rã (1991), kinh tế Nga rơi vào khủng hoảng trầm trọng, GDP sụt giảm mạnh, lạm phát phi mã và đời sống nhân dân khó khăn.",
          "<strong>Giai đoạn từ năm 2000 đến nay:</strong> Nhờ các chính sách cải cách kinh tế đúng đắn, tăng cường vai trò điều tiết của Nhà nước, kinh tế Nga dần phục hồi và phát triển ổn định, thanh toán hết nợ nước ngoài và tích luỹ dự trữ ngoại hối lớn.",
          "<strong>Quy mô kinh tế:</strong> Nằm trong nhóm nền kinh tế lớn của thế giới, thành viên của G20 và BRICS. Cơ cấu GDP chuyển dịch theo hướng tăng tỉ trọng dịch vụ (khoảng 54%), công nghiệp - xây dựng (khoảng 32%) và nông nghiệp (khoảng 4%)."
        ]
      },
      {
        title: "2. Các ngành kinh tế then chốt",
        type: "grid",
        items: [
          {
            title: "Công nghiệp năng lượng & khai khoáng",
            desc: "Là trụ cột xương sống của nền kinh tế. Nga đứng hàng đầu thế giới về sản lượng và xuất khẩu dầu mỏ, khí tự nhiên và than đá. Các mỏ lớn tập trung ở Tây Xi-bia, Vôn-ga - U-ran và Đông Xi-bia. Nền công nghiệp luyện kim đen, luyện kim màu và hoá chất rất phát triển."
          },
          {
            title: "Công nghiệp chế tạo & quốc phòng",
            desc: "Nổi tiếng thế giới với công nghiệp quốc phòng, chế tạo máy bay quân sự, tên lửa, tàu vũ trụ và năng lượng hạt nhân. Các trung tâm công nghiệp quy mô lớn tập trung dày đặc ở phần lãnh thổ châu Âu như Mát-xcơ-va, Xanh Pê-téc-bua, Ni-giơ-ni Nốp-gô-rốt."
          },
          {
            title: "Nông nghiệp (Cường quốc lúa mì)",
            desc: "Sản lượng lương thực tăng mạnh, trở thành quốc gia xuất khẩu lúa mì hàng đầu thế giới. Vùng nông nghiệp trù phú nhất là dải đất đen ở đồng bằng Đông Âu, lưu vực sông Vôn-ga và phía nam Tây Xi-bia. Chăn nuôi bò sữa, bò thịt, lợn và cừu lấy lông."
          },
          {
            title: "Dịch vụ & Giao thông vận tải",
            desc: "Giao thông vận tải phát triển đa dạng với mạng lưới đường sắt xuyên Xi-bia (Trans-Siberian) dài nhất thế giới nối châu Âu với Thái Bình Dương. Hệ thống đường ống dẫn dầu và khí đốt khổng lồ kết nối với châu Âu, Trung Quốc và khu vực châu Á - Thái Bình Dương."
          }
        ]
      },
      {
        title: "3. Các vùng kinh tế trọng điểm của Liên bang Nga",
        type: "list",
        items: [
          "<strong>Vùng Trung ương (quanh Mát-xcơ-va):</strong> Vùng kinh tế lâu đời, phát triển nhất và tập trung mật độ dân cư cao nhất. Nổi bật với công nghiệp chế tạo máy móc chính xác, hoá chất, dệt may và các trung tâm nghiên cứu khoa học đầu ngành.",
          "<strong>Vùng Trung tâm Đất đen:</strong> Có dải đất đen màu mỡ bậc nhất hành tinh, là vựa lúa mì, củ cải đường, hướng dương và chăn nuôi đại gia súc quy mô lớn của nước Nga.",
          "<strong>Vùng U-ran:</strong> Giàu tài nguyên khoáng sản bậc nhất (sắt, kim loại màu, bô-xít, muối mỏ); công nghiệp luyện kim, cơ khí nặng và khai khoáng chiếm vị trí then chốt.",
          "<strong>Vùng Viễn Đông:</strong> Giàu tài nguyên rừng, khoáng sản, thuỷ hải sản và dầu khí thềm lục địa (đảo Xa-kha-lin). Là cửa ngõ giao lưu kinh tế rộng mở của Nga với toàn bộ khu vực châu Á - Thái Bình Dương sôi động."
        ]
      }
    ],
    quiz: [
      {
        q: "Ngành công nghiệp nào đóng vai trò trụ cột xương sống và mang lại nguồn thu ngoại tệ lớn nhất cho Liên bang Nga?",
        options: [
          "Công nghiệp năng lượng (dầu mỏ và khí tự nhiên)",
          "Công nghiệp dệt may và da giày",
          "Công nghiệp chế biến thực phẩm",
          "Công nghiệp điện tử và linh kiện bán dẫn"
        ],
        answer: 0,
        explanation: "Nga sở hữu trữ lượng dầu mỏ và khí đốt hàng đầu thế giới, là ngành kinh tế trụ cột đóng góp tỉ trọng lớn vào ngân sách và kim ngạch xuất khẩu."
      },
      {
        q: "Tuyến đường sắt huyết mạch dài nhất thế giới kết nối thủ đô Mát-xcơ-va với cảng Vla-đi-vô-xtốc bên bờ Thái Bình Dương là:",
        options: [
          "Đường sắt xuyên Xi-bia (Trans-Siberian)",
          "Đường sắt Ba-can – A-mua (BAM)",
          "Đường sắt xuyên lục địa Á - Âu",
          "Đường sắt Thổ Nhĩ Kỳ - Trung Á"
        ],
        answer: 0,
        explanation: "Tuyến đường sắt xuyên Xi-bia (Trans-Siberian) dài hơn 9.200 km, là tuyến đường sắt dài nhất thế giới, giữ vai trò huyết mạch kết nối phần châu Âu và vùng Viễn Đông Nga."
      },
      {
        q: "Vùng kinh tế nào của Liên bang Nga có dải đất đen màu mỡ và là vựa sản xuất lương thực lớn nhất?",
        options: [
          "Vùng Trung tâm Đất đen",
          "Vùng Viễn Đông",
          "Vùng U-ran",
          "Vùng Bắc Băng Dương"
        ],
        answer: 0,
        explanation: "Vùng Trung tâm Đất đen nằm ở phía nam đồng bằng Đông Âu với tầng đất đen dày và màu mỡ, là trung tâm sản xuất trù phú cây lương thực và cây công nghiệp."
      }
    ]
  },

  22: {
    num: 22,
    title: "Thực hành: Tìm hiểu sự phát triển công nghiệp dầu khí của Liên bang Nga",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Liên bang Nga",
    badge: "Thực hành chuyên sâu",
    objectives: [
      "Vẽ và nhận xét biểu đồ sản lượng khai thác và xuất khẩu dầu khí của Liên bang Nga.",
      "Phân tích mạng lưới đường ống dẫn dầu khí chiến lược của Nga đến các thị trường tiêu thụ chính.",
      "Đánh giá tác động địa - chính trị và kinh tế của công nghiệp dầu khí đối với vị thế nước Nga."
    ],
    sections: [
      {
        title: "1. Tiềm năng và sản lượng khai thác dầu khí",
        type: "list",
        items: [
          "<strong>Trữ lượng:</strong> Nga nằm trong top 3 thế giới về trữ lượng dầu mỏ đã xác minh (khoảng 80 tỉ thùng) và đứng thứ 1-2 thế giới về trữ lượng khí tự nhiên (khoảng 47.800 tỉ m³).",
          "<strong>Địa bàn khai thác trọng điểm:</strong> Bồn trũng Tây Xi-bia (chiếm trên 60% sản lượng dầu khí toàn quốc), bể dầu khí Vôn-ga - U-ran, khu vực Đông Xi-bia và thềm lục địa biển Ô-khốt (dự án Sakhalin-1, Sakhalin-2).",
          "<strong>Sản lượng:</strong> Duy trì mức khai thác ấn tượng trên 500 triệu tấn dầu thô/năm và trên 600 - 700 tỉ m³ khí tự nhiên/năm, cung cấp nguồn năng lượng khổng lồ cho thị trường nội địa và quốc tế."
        ]
      },
      {
        title: "2. Mạng lưới đường ống dẫn dầu khí chiến lược",
        type: "grid",
        items: [
          {
            title: "Hệ thống đường ống Druzhba (Hữu nghị)",
            desc: "Một trong những hệ thống đường ống dẫn dầu dài nhất thế giới, vận chuyển dầu thô từ vùng Vôn-ga và Tây Xi-bia sang các nước Đông Âu và Trung Âu."
          },
          {
            title: "Đường ống ESPO (Đông Xi-bia - Thái Bình Dương)",
            desc: "Tuyến ống dẫn dầu thô chiến lược dài hơn 4.800 km đưa dầu từ Đông Xi-bia tới cảng Kozmino trên bờ biển Thái Bình Dương để xuất khẩu sang Trung Quốc, Nhật Bản và Hàn Quốc."
          },
          {
            title: "Đường ống Power of Siberia (Sức mạnh Xi-bia)",
            desc: "Hệ thống đường ống dẫn khí đốt khổng lồ vận chuyển khí tự nhiên từ các mỏ Chayandinskoye và Kovyktinskoye ở Đông Xi-bia cung cấp thẳng cho vùng đông bắc Trung Quốc."
          },
          {
            title: "Chuyển dịch thị trường năng lượng",
            desc: "Trước các lệnh trừng phạt kinh tế từ phương Tây, Nga đã chủ động và nhanh chóng chuyển dịch dòng chảy xuất khẩu dầu khí từ thị trường châu Âu truyền thống sang các thị trường lớn ở châu Á như Trung Quốc, Ấn Độ."
          }
        ]
      },
      {
        title: "3. Kỹ năng vẽ biểu đồ và viết báo cáo địa lí",
        type: "list",
        items: [
          "<strong>Dạng biểu đồ thích hợp:</strong> Khi thể hiện tình hình khai thác (sản lượng dầu thô hoặc khí tự nhiên) qua chuỗi các năm, sử dụng biểu đồ CỘT ĐƠN hoặc ĐƯỜNG biểu diễn.",
          "<strong>Nhận xét:</strong> Cần chỉ ra tốc độ tăng/giảm sản lượng, các năm đạt đỉnh cao nhất, nguyên nhân gắn liền với nhu cầu tiêu thụ toàn cầu và sự đầu tư thăm dò khai thác công nghệ mới."
        ]
      }
    ],
    quiz: [
      {
        q: "Khu vực nào chiếm trên 60% sản lượng khai thác dầu mỏ và khí đốt tự nhiên của Liên bang Nga?",
        options: [
          "Bồn trũng Tây Xi-bia",
          "Bán đảo Côm-sát-ca",
          "Đồng bằng ven biển Ban-tích",
          "Vùng núi Cáp-ca"
        ],
        answer: 0,
        explanation: "Bồn trũng Tây Xi-bia là trung tâm khai thác dầu khí lớn nhất của Liên bang Nga với hàng loạt mỏ dầu và khí đốt khổng lồ."
      },
      {
        q: "Tuyến đường ống dẫn dầu nào đưa dầu thô từ Đông Xi-bia tới cảng biển Thái Bình Dương để xuất sang châu Á?",
        options: [
          "Đường ống ESPO",
          "Đường ống Druzhba",
          "Đường ống Nord Stream",
          "Đường ống Dòng chảy phương Nam"
        ],
        answer: 0,
        explanation: "ESPO (Eastern Siberia–Pacific Ocean oil pipeline) là tuyến ống dẫn dầu chiến lược từ Đông Xi-bia tới Thái Bình Dương."
      },
      {
        q: "Tuyến đường ống dẫn khí đốt tự nhiên quy mô lớn của Nga sang thị trường Trung Quốc có tên là:",
        options: [
          "Power of Siberia (Sức mạnh Xi-bia)",
          "Blue Stream",
          "TurkStream",
          "Trans-Balkan Pipeline"
        ],
        answer: 0,
        explanation: "Power of Siberia (Sức mạnh Xi-bia) là đường ống dẫn khí đốt chiến lược liên kết các mỏ khí Đông Xi-bia với thị trường Trung Quốc."
      }
    ]
  },

  23: {
    num: 23,
    title: "Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Nhật Bản",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Nhật Bản",
    badge: "Đất nước mặt trời mọc",
    objectives: [
      "Xác định được vị trí địa lí, phạm vi lãnh thổ trên 4 đảo lớn và ý nghĩa đối với phát triển kinh tế biển.",
      "Phân tích đặc điểm tự nhiên: địa hình núi đồi hiểm trở, khí hậu gió mùa, thiên tai (động đất, sóng thần) và nghèo tài nguyên khoáng sản.",
      "Đánh giá tác động sâu sắc của cơ cấu dân số già, suy giảm sinh và các giá trị văn hoá truyền thống tới kinh tế - xã hội Nhật Bản."
    ],
    sections: [
      {
        title: "1. Vị trí địa lí và phạm vi lãnh thổ",
        type: "list",
        items: [
          "<strong>Vị trí:</strong> Là một quốc gia quần đảo hình cánh cung ở Đông Á, nằm trải dài trên biển Thái Bình Dương, biển Nhật Bản, biển Ô-khốt và biển Hoa Đông.",
          "<strong>Bốn đảo lớn (từ bắc xuống nam):</strong> Hô-cai-đô (Hokkaido), Hôn-su (Honshu - đảo lớn nhất, tập trung phần lớn dân cư và đô thị), Xi-cô-cư (Shikoku) và Kiu-xiu (Kyushu).",
          "<strong>Ý nghĩa:</strong> Dễ dàng giao thương đường biển với thế giới; nguồn lợi hải sản dồi dào nhờ nơi giao thoa của dòng biển nóng Cư-rô-si-vô và dòng biển lạnh Ô-ya-si-vô tạo nên các ngư trường lớn bậc nhất."
        ]
      },
      {
        title: "2. Điều kiện tự nhiên và tài nguyên",
        type: "grid",
        items: [
          {
            title: "Địa hình & Sông ngòi",
            desc: "Khoảng 80% diện tích là đồi núi dốc, các đồng bằng nhỏ hẹp ven biển (lớn nhất là đồng bằng Căng-tô quanh vịnh Tô-ky-ô). Sông ngòi ngắn, dốc, có giá trị thuỷ điện lớn nhưng tiềm ẩn nguy cơ lũ quét."
          },
          {
            title: "Khí hậu gió mùa phân hoá",
            desc: "Phía bắc có khí hậu ôn đới gió mùa, mùa đông tuyết rơi dày; phía nam mang khí hậu cận nhiệt đới ẩm, mùa hè nóng ẩm mưa nhiều. Lượng mưa hàng năm cao."
          },
          {
            title: "Vành đai lửa Thái Bình Dương",
            desc: "Nằm trên giao điểm của 4 mảng kiến tạo, thường xuyên hứng chịu động đất, núi lửa hoạt động (như núi Phú Sĩ) và hiểm hoạ sóng thần (tsunami) tàn phá."
          },
          {
            title: "Khoáng sản rất nghèo nàn",
            desc: "Rất nghèo tài nguyên khoáng sản, chỉ có một ít than đá và đồng; hầu hết dầu mỏ, khí đốt, quặng sắt đều phải nhập khẩu từ nước ngoài."
          }
        ]
      },
      {
        title: "3. Dân cư và các vấn đề xã hội",
        type: "list",
        items: [
          "<strong>Quy mô và già hoá dân số:</strong> Dân số khoảng 125 triệu người (2021) và đang có xu hướng giảm liên tục do mức sinh rất thấp. Tỉ lệ người trên 65 tuổi chiếm trên 28% (dân số siêu già), gây thiếu hụt lao động nghiêm trọng và gia tăng chi phí an sinh xã hội.",
          "<strong>Phân bố dân cư & Đô thị hoá:</strong> Tỉ lệ dân thành thị rất cao (91,8%). Dân cư tập trung đông đúc ở dải đô thị ven bờ Thái Bình Dương thuộc đảo Hôn-su, hình thành siêu vùng đô thị Tô-ky-ô với hơn 37 triệu người.",
          "<strong>Văn hoá và nguồn nhân lực:</strong> Người lao động Nhật Bản có trình độ học vấn và tay nghề rất cao, nổi tiếng thế giới về tính kỉ luật, tinh thần trách nhiệm, lòng trung thành và ý thức cộng đồng vượt khó phi thường."
        ]
      }
    ],
    quiz: [
      {
        q: "Đảo nào có diện tích lớn nhất, tập trung đông dân nhất và là đầu tàu kinh tế của Nhật Bản?",
        options: [
          "Đảo Hôn-su (Honshu)",
          "Đảo Hô-cai-đô (Hokkaido)",
          "Đảo Kiu-xiu (Kyushu)",
          "Đảo Xi-cô-cư (Shikoku)"
        ],
        answer: 0,
        explanation: "Hôn-su là đảo lớn nhất của Nhật Bản, nơi toạ lạc các đô thị lớn nhất như Tô-ky-ô, Ô-xa-ca, Na-gôi-a, Ki-ô-tô."
      },
      {
        q: "Đặc điểm nổi bật nhất của cơ cấu dân số Nhật Bản hiện nay là:",
        options: [
          "Cơ cấu dân số già, tỉ lệ sinh giảm và thiếu hụt lực lượng lao động",
          "Cơ cấu dân số trẻ, gia tăng dân số tự nhiên rất cao",
          "Tỉ lệ dân số nông thôn chiếm đa số",
          "Dân số tăng nhanh nhờ lượng người nhập cư ồ ạt"
        ],
        answer: 0,
        explanation: "Nhật Bản thuộc nhóm nước có dân số siêu già với người trên 65 tuổi chiếm tới trên 28% và mức sinh giảm khiến dân số liên tục sụt giảm."
      },
      {
        q: "Ngư trường cá biển dồi dào của Nhật Bản được hình thành chủ yếu do:",
        options: [
          "Sự giao nhau giữa dòng biển nóng Cư-rô-si-vô và dòng biển lạnh Ô-ya-si-vô",
          "Nhiều đầm phá và rừng ngập mặn bao quanh bờ biển",
          "Diện tích thềm lục địa nước nông mở rộng ra tận Bắc Cực",
          "Khí hậu khô hạn ít bão gió"
        ],
        answer: 0,
        explanation: "Nơi gặp gỡ giữa dòng biển nóng Cư-rô-si-vô và dòng biển lạnh Ô-ya-si-vô tạo nên dòng nước trồi mang nhiều sinh vật phù du, hình thành ngư trường hải sản giàu có bậc nhất."
      }
    ]
  },

  24: {
    num: 24,
    title: "Kinh tế Nhật Bản",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Nhật Bản",
    badge: "Công nghiệp công nghệ cao",
    objectives: [
      "Trình bày tình hình phát triển kinh tế Nhật Bản qua các giai đoạn: phát triển thần kì 1955-1972 và tái cấu trúc nền kinh tế sau 1992.",
      "Phân tích thế mạnh nổi bật của các ngành kinh tế: công nghiệp công nghệ cao, dịch vụ tài chính - thương mại và nông nghiệp thâm canh hiệu quả cao.",
      "Trình bày đặc điểm nổi bật của 4 vùng kinh tế gắn với 4 hòn đảo chính."
    ],
    sections: [
      {
        title: "1. Khái quát tình hình phát triển kinh tế",
        type: "list",
        items: [
          "<strong>Giai đoạn 1955 - 1972 (Giai đoạn thần kì):</strong> Nhật Bản vươn lên mạnh mẽ với tốc độ tăng trưởng GDP hai con số, trở thành nền kinh tế lớn thứ hai tư bản chủ nghĩa nhờ: coi trọng giáo dục và con người, tập trung hiện đại hoá công nghệ, tích luỹ vốn cao và chi phí quốc phòng thấp.",
          "<strong>Giai đoạn từ 1992 đến nay:</strong> Tốc độ tăng trưởng chậm lại do nổ bong bóng tài sản và già hoá dân số. Nhật Bản chuyển dịch chiến lược sang công nghệ thông tin, trí tuệ nhân tạo, tự động hoá, kinh tế xanh và đầu tư mạnh ra nước ngoài.",
          "<strong>Quy mô kinh tế:</strong> Nằm trong top 4 nền kinh tế hàng đầu thế giới về quy mô GDP danh nghĩa (cùng với Hoa Kỳ, Trung Quốc và Đức)."
        ]
      },
      {
        title: "2. Các ngành kinh tế trụ cột",
        type: "grid",
        items: [
          {
            title: "Công nghiệp chế tạo & Điện tử",
            desc: "Chiếm vị trí hàng đầu thế giới về sản xuất ô tô (Toyota, Honda, Nissan), tàu biển, robot công nghiệp, vật liệu bán dẫn, vi mạch điện tử và máy móc quang học chính xác. Phần lớn trung tâm công nghiệp phân bố dọc bờ vịnh Thái Bình Dương."
          },
          {
            title: "Dịch vụ (Thương mại & Tài chính)",
            desc: "Chiếm trên 70% GDP. Tô-ky-ô là trung tâm tài chính ngân hàng quốc tế lớn của thế giới. Mạng lưới thương mại toàn cầu, đầu tư trực tiếp nước ngoài (FDI) khổng lồ và hệ thống giao thông tàu cao tốc Shinkansen hiện đại bậc nhất."
          },
          {
            title: "Nông nghiệp công nghệ cao",
            desc: "Diện tích đất canh tác rất hạn hẹp (chỉ khoảng 12% lãnh thổ), nông nghiệp phát triển theo hướng thâm canh cao, áp dụng cơ giới hoá cực nhỏ, tự động hoá nhà kính và sinh học. Cây lương thực chính là lúa gạo (đạt chất lượng hảo hạng)."
          },
          {
            title: "Kinh tế biển & Đánh bắt cá",
            desc: "Ngành đánh bắt và nuôi trồng hải sản phát triển rất mạnh với đội tàu đánh bắt xa bờ hiện đại bậc nhất thế giới. Sản phẩm thuỷ sản là nguồn thực phẩm dinh dưỡng cốt lõi trong văn hoá ẩm thực Nhật Bản (Sushi, Sashimi)."
          }
        ]
      },
      {
        title: "3. Bốn vùng kinh tế gắn với các đảo",
        type: "list",
        items: [
          "<strong>Vùng Hôn-su (Honshu):</strong> Vùng kinh tế phát triển toàn diện và vượt trội nhất. Sở hữu các trung tâm công nghiệp khổng lồ: Tô-ky-ô, I-ô-cô-ha-ma, Ô-xa-ca, Na-gôi-a, Ki-ô-tô tạo thành chuỗi đô thị - công nghiệp Thái Bình Dương.",
          "<strong>Vùng Kiu-xiu (Kyushu):</strong> Phát triển công nghiệp nặng (luyện kim, hoá chất) và được mệnh danh là 'Đảo Silicon' của Nhật Bản nhờ tập trung nhiều nhà máy sản xuất vi mạch, chất bán dẫn.",
          "<strong>Vùng Xi-cô-cư (Shikoku):</strong> Nổi bật với khai khoáng đồng, luyện kim màu, đóng tàu và nông nghiệp trồng cây ăn quả, rau vụ đông.",
          "<strong>Vùng Hô-cai-đô (Hokkaido):</strong> Phát triển công nghiệp khai thác than, gỗ, giấy, chế biến thực phẩm và là vùng chăn nuôi bò sữa, nông sản ôn đới lớn nhất cả nước."
        ]
      }
    ],
    quiz: [
      {
        q: "Yếu tố quyết định hàng đầu tạo nên 'sự phát triển thần kì' của kinh tế Nhật Bản giai đoạn 1955 - 1972 là:",
        options: [
          "Con người và chính sách đầu tư thích đáng cho giáo dục, khoa học kĩ thuật",
          "Nguồn tài nguyên khoáng sản phong phú trong lòng đất",
          "Viện trợ không hoàn lại khổng lồ từ các nước châu Á",
          "Mở rộng tối đa chi tiêu quân sự và quốc phòng"
        ],
        answer: 0,
        explanation: "Con người được coi là vốn quý nhất của Nhật Bản; việc chú trọng đào tạo nguồn nhân lực chất lượng cao, kỉ luật và ứng dụng nhanh khoa học kỹ thuật là động lực then chốt của thần kì kinh tế."
      },
      {
        q: "Đảo Kiu-xiu (Kyushu) của Nhật Bản nổi tiếng thế giới với biệt danh gì nhờ tập trung các nhà máy sản xuất bán dẫn?",
        options: [
          "Đảo Silicon của Nhật Bản",
          "Đảo Thép của Đông Bắc Á",
          "Thủ phủ Ô tô thế giới",
          "Trung tâm Đóng tàu Thái Bình Dương"
        ],
        answer: 0,
        explanation: "Kiu-xiu được mệnh danh là 'Silicon Island' do tập trung hàng loạt nhà máy sản xuất chip bán dẫn và thiết bị điện tử chính xác."
      },
      {
        q: "Vì sao các trung tâm công nghiệp lớn của Nhật Bản tập trung chủ yếu ở dải bờ biển Thái Bình Dương đảo Hôn-su?",
        options: [
          "Thuận lợi cho việc nhập khẩu nguyên nhiên liệu và xuất khẩu sản phẩm bằng đường biển",
          "Khu vực này có nhiều mỏ than đá và quặng sắt lớn nhất",
          "Địa hình bằng phẳng duy nhất của toàn bộ lãnh thổ",
          "Không bao giờ chịu tác động của động đất hay thiên tai"
        ],
        answer: 0,
        explanation: "Do nghèo khoáng sản, Nhật Bản phải nhập khẩu phần lớn nguyên liệu thô và xuất khẩu hàng hoá, nên các nhà máy ven bờ vịnh nước sâu Thái Bình Dương giúp giảm tối đa chi phí vận tải biển."
      }
    ]
  },

  25: {
    num: 25,
    title: "Thực hành: Viết báo cáo về hoạt động kinh tế đối ngoại của Nhật Bản",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Nhật Bản",
    badge: "Thực hành đối ngoại",
    objectives: [
      "Thu thập, phân tích bảng số liệu về ngoại thương, FDI và ODA của Nhật Bản.",
      "Trình bày cấu trúc và định hướng của hoạt động kinh tế đối ngoại Nhật Bản đối với thế giới và Việt Nam.",
      "Rèn luyện kỹ năng viết báo cáo địa lí ngắn gọn, số liệu chính xác và lập luận thuyết phục."
    ],
    sections: [
      {
        title: "1. Hoạt động ngoại thương của Nhật Bản",
        type: "list",
        items: [
          "<strong>Quy mô:</strong> Là một trong những cường quốc thương mại hàng đầu thế giới với tổng kim ngạch xuất nhập khẩu lên tới hàng nghìn tỉ USD mỗi năm.",
          "<strong>Cơ cấu hàng xuất khẩu:</strong> Chiếm ưu thế tuyệt đối là các sản phẩm chế biến công nghệ cao: ô tô, xe máy, linh kiện điện tử, tàu thuỷ, máy móc công nghiệp, hoá chất và thép chất lượng cao.",
          "<strong>Cơ cấu hàng nhập khẩu:</strong> Chủ yếu là nguyên, nhiên liệu thô mà trong nước thiếu hụt nghiêm trọng: dầu mỏ, khí đốt hoá lỏng (LNG), quặng kim loại, thức ăn gia súc và nông sản nhiệt đới.",
          "<strong>Đối tác thương mại chính:</strong> Hoa Kỳ, Trung Quốc, các nước thành viên Liên minh châu Âu (EU) và khu vực ASEAN."
        ]
      },
      {
        title: "2. Hoạt động đầu tư trực tiếp (FDI) và viện trợ phát triển (ODA)",
        type: "grid",
        items: [
          {
            title: "Dòng vốn FDI ra nước ngoài",
            desc: "Nhật Bản luôn thuộc nhóm quốc gia có vốn đầu tư FDI ra nước ngoài lớn nhất thế giới. Các tập đoàn đa quốc gia Nhật Bản lập nhà máy và cơ sở nghiên cứu ở Bắc Mỹ, châu Âu, Trung Quốc và Đông Nam Á để khai thác thị trường và lao động chi phí cạnh tranh."
          },
          {
            title: "Viện trợ phát triển chính thức (ODA)",
            desc: "Nhật Bản là một trong những nhà tài trợ vốn ODA lớn nhất thế giới, ưu tiên cho các nước đang phát triển nhằm xây dựng hạ tầng giao thông (cầu, cảng biển, sân bay, đường sắt), cấp thoát nước và giáo dục đào tạo."
          },
          {
            title: "Mối quan hệ hợp tác Nhật Bản - Việt Nam",
            desc: "Nhật Bản là đối tác chiến lược toàn diện, là nhà cung cấp ODA lớn nhất, đối tác đầu tư FDI hàng đầu và đối tác thương mại lớn thứ 4 của Việt Nam. Nhiều công trình biểu tượng như cầu Nhật Tân, hầm Hải Vân, cảng Cái Mép - Thị Vải, sân bay Nội Bài đều mang đậm dấu ấn hợp tác."
          },
          {
            title: "Hợp tác lao động và giáo dục",
            desc: "Việt Nam là quốc gia dẫn đầu về số lượng thực tập sinh, kĩ sư và lao động làm việc tại Nhật Bản, góp phần giải quyết bài toán thiếu hụt nhân lực cho Nhật và chuyển giao kĩ thuật cho Việt Nam."
          }
        ]
      },
      {
        title: "3. Dàn ý cấu trúc bài báo cáo đối ngoại",
        type: "list",
        items: [
          "<strong>Mở đầu:</strong> Nêu rõ khái quát vị thế kinh tế đối ngoại của Nhật Bản trên trường quốc tế.",
          "<strong>Nội dung chính:</strong> Trình bày số liệu kim ngạch xuất nhập khẩu, cán cân thương mại; phân tích đặc điểm FDI và ODA kèm các dự án tiêu biểu.",
          "<strong>Kết luận:</strong> Rút ra nhận định về vai trò kinh tế đối ngoại đối với sự thịnh vượng của nước Nhật và triển vọng hợp tác sâu rộng với Việt Nam."
        ]
      }
    ],
    quiz: [
      {
        q: "Mặt hàng nào dưới đây chiếm tỉ trọng lớn nhất trong cơ cấu nhập khẩu của Nhật Bản?",
        options: [
          "Nhiên liệu (dầu mỏ, khí tự nhiên) và nguyên liệu khoáng sản thô",
          "Xe hơi chở khách cao cấp",
          "Tàu thuỷ trọng tải lớn và robot công nghiệp",
          "Thiết bị viễn thông và máy bay dân dụng"
        ],
        answer: 0,
        explanation: "Do tài nguyên thiên nhiên cực kì khan hiếm, Nhật Bản bắt buộc phải nhập khẩu khối lượng lớn dầu mỏ, khí đốt và quặng kim loại phục vụ sản xuất và sinh hoạt."
      },
      {
        q: "Trong quan hệ hợp tác kinh tế với Việt Nam, Nhật Bản giữ vị thế số 1 về:",
        options: [
          "Cung cấp nguồn vốn viện trợ phát triển chính thức (ODA)",
          "Thị trường xuất khẩu gạo thô",
          "Thị trường nhập khẩu xe máy nguyên chiếc",
          "Khách du lịch đường sắt"
        ],
        answer: 0,
        explanation: "Nhật Bản là quốc gia tài trợ nguồn vốn ODA lớn nhất cho Việt Nam trong nhiều thập kỉ qua để phát triển hạ tầng giao thông và năng lượng."
      },
      {
        q: "Đặc điểm nổi bật của dòng vốn FDI của Nhật Bản ra toàn cầu là:",
        options: [
          "Ưu tiên vào các ngành công nghiệp chế biến chế tạo, điện tử và cơ sở hạ tầng",
          "Chỉ đầu tư vào các nước kém phát triển ở châu Phi",
          "Hoàn toàn tập trung vào lĩnh vực bất động sản giải trí",
          "Đầu tư phân tán không theo chuỗi giá trị toàn cầu"
        ],
        answer: 0,
        explanation: "Vốn FDI của Nhật Bản hướng trọng tâm vào công nghiệp chế tạo, lắp ráp điện tử ô tô và cơ sở công nghệ cao gắn với các chuỗi cung ứng toàn cầu."
      }
    ]
  },

  26: {
    num: 26,
    title: "Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Trung Quốc",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Trung Quốc",
    badge: "Đất nước tỉ dân",
    objectives: [
      "Xác định được vị trí địa lí, phạm vi lãnh thổ rộng lớn thứ 4 thế giới và ý nghĩa địa - kinh tế.",
      "Phân tích sự tương phản sâu sắc về địa hình, khí hậu, sông ngòi và khoáng sản giữa miền Đông và miền Tây lấy kinh tuyến 105°Đ làm ranh giới.",
      "Đánh giá các vấn đề dân cư: quy mô dân số khổng lồ, sự dịch chuyển chính sách dân số và tốc độ đô thị hoá nhanh chóng."
    ],
    sections: [
      {
        title: "1. Vị trí địa lí và phạm vi lãnh thổ",
        type: "list",
        items: [
          "<strong>Vị trí:</strong> Nằm ở khu vực Đông Á, giáp 14 quốc gia trên đất liền và có đường bờ biển dài khoảng 14.500 km mở ra Thái Bình Dương.",
          "<strong>Quy mô lãnh thổ:</strong> Diện tích khoảng 9,6 triệu km² (đứng thứ 4 thế giới sau Nga, Ca-na-đa, Hoa Kỳ).",
          "<strong>Ý nghĩa:</strong> Lãnh thổ rộng lớn tạo nên cảnh quan thiên nhiên đa dạng, tiềm năng kinh tế dồi dào; vị trí ven biển thuận lợi cho việc hội nhập kinh tế biển quốc tế."
        ]
      },
      {
        title: "2. Sự tương phản sâu sắc giữa miền Đông và miền Tây (Ranh giới 105°Đ)",
        type: "grid",
        items: [
          {
            title: "Miền Đông (Thuận lợi)",
            desc: "Địa hình chủ yếu là các đồng bằng châu thổ rộng lớn phì nhiêu: Đông Bắc, Hoa Bắc, Hoa Trung, Hoa Nam. Khí hậu gió mùa (cận nhiệt đới và ôn đới gió mùa), mưa nhiều. Sông lớn ở hạ lưu: Trường Giang (Dương Tử), Hoàng Hà mang lại nguồn nước và phù sa dồi dào. Giàu khoáng sản kim loại màu, than đá, dầu mỏ ven biển."
          },
          {
            title: "Miền Tây (Hiểm trở, khô hạn)",
            desc: "Địa hình núi non đồ sộ, cao nguyên và sơn nguyên khổng lồ: sơn nguyên Tây Tạng (nóc nhà thế giới), bồn trũng Ta-rim, hoang mạc Tắc-la Ma-can và Gô-bi. Khí hậu lục địa khắc nghiệt, biên độ nhiệt ngày đêm rất lớn, khô hạn quanh năm. Thượng nguồn của các dòng sông lớn, giàu tiềm năng thuỷ điện và khoáng sản (dầu khí, quặng kim loại)."
          }
        ]
      },
      {
        title: "3. Dân cư và các chính sách xã hội",
        type: "list",
        items: [
          "<strong>Quy mô dân số:</strong> Đạt hơn 1,41 tỉ người (2021), thuộc nhóm quốc gia đông dân nhất hành tinh. Có 56 dân tộc anh em, trong đó người Hán chiếm trên 91% dân số.",
          "<strong>Chính sách dân số:</strong> Từ năm 1979 áp dụng chính sách một con triệt để giúp giảm tốc độ tăng dân số nhưng để lại hậu quả nghiêm trọng: già hoá dân số nhanh và mất cân bằng giới tính khi sinh (thừa nam thiếu nữ). Hiện nay đã chuyển sang cho phép sinh 3 con.",
          "<strong>Phân bố dân cư:</strong> Chênh lệch cực độ: hơn 90% dân số tập trung ở miền Đông và các đồng bằng duyên hải trù phú; miền Tây diện tích rộng hơn 50% nhưng chỉ có chưa đầy 10% dân số sinh sống.",
          "<strong>Đô thị hoá:</strong> Diễn ra với tốc độ nhanh chưa từng thấy trong lịch sử; tỉ lệ dân thành thị tăng từ 17,9% (1978) lên trên 64% hiện nay. Hàng loạt siêu đô thị hình thành: Bắc Kinh, Thượng Hải, Quảng Châu, Thâm Quyến, Trùng Khánh."
        ]
      }
    ],
    quiz: [
      {
        q: "Ranh giới tự nhiên tương đối để phân chia lãnh thổ Trung Quốc thành miền Đông và miền Tây là:",
        options: [
          "Kinh tuyến 105°Đ",
          "Kinh tuyến 100°Đ",
          "Vĩ tuyến 20°B",
          "Dãy núi Tần Lĩnh"
        ],
        answer: 0,
        explanation: "Kinh tuyến 105°Đ là ranh giới phân chia tương đối Trung Quốc thành hai miền tự nhiên Đông và Tây có đặc điểm sinh thái, khí hậu và kinh tế hoàn toàn tương phản."
      },
      {
        q: "Đồng bằng nào của Trung Quốc nằm ở hạ lưu sông Trường Giang, đất đai màu mỡ và là vựa lúa gạo lớn nhất?",
        options: [
          "Đồng bằng Hoa Trung",
          "Đồng bằng Đông Bắc",
          "Đồng bằng Hoa Bắc",
          "Bồn trũng Tứ Xuyên"
        ],
        answer: 0,
        explanation: "Đồng bằng Hoa Trung nằm ở trung và hạ lưu sông Trường Giang, khí hậu ấm áp, nước ngọt dồi dào, là vùng nông nghiệp lúa nước trọng điểm."
      },
      {
        q: "Hậu quả xã hội lâu dài và nan giải nhất của chính sách một con trước đây ở Trung Quốc là:",
        options: [
          "Tốc độ già hoá dân số diễn ra nhanh chóng và mất cân bằng tỉ số giới tính khi sinh",
          "Quy mô dân số giảm xuống dưới 500 triệu người",
          "Tỉ lệ đô thị hoá bị đảo ngược về vùng nông thôn",
          "Tỉ lệ người mù chữ tăng vọt ở thành thị"
        ],
        answer: 0,
        explanation: "Chính sách một con kéo dài nhiều thập kỉ đã làm mức sinh giảm sâu, đẩy nhanh tốc độ già hoá dân số và gây tình trạng mất cân bằng giới tính nghiêm trọng."
      }
    ]
  },

  27: {
    num: 27,
    title: "Kinh tế Trung Quốc",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Trung Quốc",
    badge: "Công xưởng thế giới",
    objectives: [
      "Phân tích được những thành tựu vượt bậc của công cuộc cải cách mở cửa từ năm 1978 đến nay.",
      "Trình bày tình hình phát triển và phân bố các ngành công nghiệp then chốt, nông nghiệp toàn diện và thương mại dịch vụ.",
      "Giải thích được nguyên nhân tạo nên sự phân hoá kinh tế mạnh mẽ giữa miền Đông năng động và miền Tây đang phát triển."
    ],
    sections: [
      {
        title: "1. Công cuộc cải cách mở cửa (từ 1978) và thành tựu kinh tế",
        type: "list",
        items: [
          "<strong>Bối cảnh & Đường lối:</strong> Tháng 12/1978, Trung Quốc khởi xướng công cuộc 'Cải cách và mở cửa', chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa, mở rộng thu hút vốn đầu tư nước ngoài (FDI) và khoa học công nghệ.",
          "<strong>Thành tựu tăng trưởng:</strong> Tăng trưởng GDP bình quân liên tục đạt mức cao kỷ lục (trên 9%/năm trong nhiều thập kỉ). Quy mô kinh tế vượt Nhật Bản vào năm 2010 để trở thành nền kinh tế lớn thứ hai thế giới (sau Hoa Kỳ).",
          "<strong>Vị thế quốc tế:</strong> Trở thành 'công xưởng của thế giới', đứng đầu toàn cầu về dự trữ ngoại hối và quy mô thương mại hàng hoá."
        ]
      },
      {
        title: "2. Các ngành kinh tế then chốt",
        type: "grid",
        items: [
          {
            title: "Công nghiệp (Cường quốc chế tạo)",
            desc: "Đứng đầu thế giới về sản lượng nhiều mặt hàng then chốt: thép thô, than đá, xi măng, phân đạm, điện năng, tấm pin năng lượng mặt trời, điện thoại thông minh và xe điện (EV). Chuyển dịch từ gia công thâm dụng lao động sang công nghệ cao, tự chủ bán dẫn và hàng không vũ trụ."
          },
          {
            title: "Nông nghiệp (Bảo đảm an ninh lương thực)",
            desc: "Nuôi sống gần 20% dân số thế giới chỉ với 7% diện tích đất canh tác toàn cầu. Đứng đầu thế giới về sản lượng lúa gạo, lúa mì, ngô, thịt lợn và nuôi trồng thuỷ sản. Miền Đông trồng lúa gạo, cây công nghiệp; miền Tây phát triển chăn nuôi cừu, dê, ngựa, bò Tây Tạng."
          },
          {
            title: "Dịch vụ & Thương mại điện tử",
            desc: "Chiếm trên 53% GDP. Thương mại điện tử phát triển bùng nổ hàng đầu thế giới (Alibaba, JD.com, Pinduoduo). Mạng lưới đường sắt cao tốc dài nhất thế giới (trên 42.000 km). Hệ thống cảng biển khổng lồ với 7 trong số 10 cảng container bận rộn nhất hành tinh."
          },
          {
            title: "Sáng kiến Vành đai và Con đường (BRI)",
            desc: "Chiến lược đối ngoại kết nối cơ sở hạ tầng giao thông, viễn thông và năng lượng từ Trung Quốc xuyên qua Trung Á, Đông Nam Á sang châu Âu và châu Phi."
          }
        ]
      },
      {
        title: "3. Sự phân hoá lãnh thổ kinh tế",
        type: "list",
        items: [
          "<strong>Miền Đông (Vùng động lực chủ đạo):</strong> Tập trung phần lớn các trung tâm kinh tế, khu kinh tế mở, đặc khu và các siêu đô thị hàng đầu (Thượng Hải, Bắc Kinh, Thâm Quyến, Quảng Châu). Đóng góp hơn một nửa tổng GDP cả nước.",
          "<strong>Miền Tây:</strong> Trước đây chậm phát triển, hiện đang được đẩy mạnh qua chiến lược 'Đại khai phá miền Tây' nhằm xây dựng đường cao tốc, đường sắt nối Tây Tạng, khai thác khoáng sản và phát triển du lịch sinh thái."
        ]
      }
    ],
    quiz: [
      {
        q: "Công cuộc 'Cải cách và mở cửa' mang tính bước ngoặt lịch sử của Trung Quốc được bắt đầu từ năm nào?",
        options: [
          "Năm 1978",
          "Năm 1949",
          "Năm 1986",
          "Năm 2000"
        ],
        answer: 0,
        explanation: "Tháng 12/1978, Hội nghị Trung ương Đảng Cộng sản Trung Quốc dưới sự khởi xướng của Đặng Tiểu Bình đã chính thức đề ra đường lối Cải cách và mở cửa."
      },
      {
        q: "Trung Quốc hiện đứng đầu thế giới về quy mô của hệ thống giao thông vận tải nào?",
        options: [
          "Mạng lưới đường sắt cao tốc (trên 40.000 km)",
          "Mạng lưới đường sông đào nhân tạo xuyên sa mạc",
          "Mạng lưới tàu điện ngầm chạy bằng năng lượng gió",
          "Đội tàu bay trực thăng y tế nông thôn"
        ],
        answer: 0,
        explanation: "Trung Quốc sở hữu mạng lưới đường sắt cao tốc dài nhất thế giới (vượt 42.000 km), chiếm hơn 2/3 tổng chiều dài đường sắt cao tốc của toàn nhân loại."
      },
      {
        q: "Vì sao các đặc khu kinh tế đầu tiên của Trung Quốc (như Thâm Quyến, Chu Hải, Sán Đầu) đều được bố trí ở vùng duyên hải phía đông nam?",
        options: [
          "Vị trí ven biển thuận lợi cho việc thu hút đầu tư nước ngoài (FDI) và xuất khẩu hàng hoá",
          "Vùng này tập trung mỏ quặng sắt và than cốc lớn nhất thế giới",
          "Vùng đất duy nhất có địa hình bằng phẳng ở Trung Quốc",
          "Nhằm tránh hoàn toàn sự ảnh hưởng của bão nhiệt đới"
        ],
        answer: 0,
        explanation: "Các tỉnh duyên hải đông nam nằm sát Hồng Kông, Ma-cao, Đài Loan, có cảng biển nước sâu thuận lợi cho việc giao thương, mở cửa đón vốn đầu tư và công nghệ quốc tế."
      }
    ]
  },

  28: {
    num: 28,
    title: "Thực hành: Viết báo cáo về sự thay đổi của kinh tế vùng duyên hải Trung Quốc",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Trung Quốc",
    badge: "Báo cáo duyên hải",
    objectives: [
      "Thu thập, xử lí bảng số liệu và tư liệu về quy mô kinh tế vùng duyên hải Trung Quốc.",
      "Phân tích vai trò hạt nhân của các đặc khu kinh tế (Thâm Quyến, Chu Hải...) và các thành phố cảng mở.",
      "Trình bày được những cơ hội và thách thức phát triển bền vững của dải kinh tế ven biển."
    ],
    sections: [
      {
        title: "1. Vị trí và phạm vi vùng duyên hải",
        type: "list",
        items: [
          "<strong>Phạm vi:</strong> Gồm 11 tỉnh, thành phố và đặc khu trực thuộc trung ương giáp biển (Liêu Ninh, Hà Bắc, Thiên Tân, Sơn Đông, Giang Tô, Thượng Hải, Chiết Giang, Phúc Kiến, Quảng Đông, Quảng Tây, Hải Nam).",
          "<strong>Vị trí chiến lược:</strong> Nằm ở cửa ngõ tiếp xúc trực tiếp với thị trường biển quốc tế, liền kề các tuyến hàng hải sôi động bậc nhất thế giới qua eo biển Đài Loan và Biển Đông."
        ]
      },
      {
        title: "2. Sự thay đổi thần kì về quy mô và cơ cấu kinh tế",
        type: "grid",
        items: [
          {
            title: "Tỉ trọng GDP vượt trội",
            desc: "Dù chỉ chiếm khoảng 14% diện tích và gần 45% dân số cả nước, vùng duyên hải đóng góp trên 53 - 55% tổng GDP và chiếm hơn 70 - 80% tổng kim ngạch xuất nhập khẩu của toàn Trung Quốc."
          },
          {
            title: "Các đặc khu kinh tế biểu tượng",
            desc: "Thâm Quyến từ một làng chài nghèo đã vươn lên thành 'Thung lũng Silicon phần cứng' của châu Á, nơi đặt trụ sở các tập đoàn công nghệ khổng lồ như Huawei, Tencent, DJI, BYD."
          },
          {
            title: "Các cụm siêu đô thị (Cực tăng trưởng)",
            desc: "Ba vùng đô thị - công nghiệp ven biển lớn nhất: Vùng Kinh - Tân - Kế (Bắc Kinh, Thiên Tân, Hà Bắc), Vùng châu thổ sông Trường Giang (Thượng Hải, Hàng Châu, Nam Kinh) và Vùng Vịnh Lớn GBA (Quảng Châu, Thâm Quyến, Hồng Kông, Ma-cao)."
          },
          {
            title: "Thách thức môi trường & Tài nguyên",
            desc: "Áp lực dân số đông đúc, ô nhiễm môi trường nước và không khí ven biển, chi phí nhân công tăng cao đòi hỏi chuyển dịch mạnh sang kinh tế xanh và dịch vụ chất lượng cao."
          }
        ]
      },
      {
        title: "3. Hướng dẫn viết bài báo cáo địa lí",
        type: "list",
        items: [
          "<strong>Bước 1 - Xác định chủ đề:</strong> Đánh giá sự chuyển dịch cơ cấu và quy mô đóng góp của dải duyên hải đối với nền kinh tế Trung Quốc.",
          "<strong>Bước 2 - Phân tích số liệu:</strong> Dùng biểu đồ tròn (thể hiện cơ cấu GDP duyên hải so với phần còn lại) hoặc biểu đồ cột kép (so sánh xuất nhập khẩu).",
          "<strong>Bước 3 - Rút ra kết luận:</strong> Đúc kết bài học về mô hình kinh tế mở, thu hút FDI có chọn lọc và phát triển cảng biển nước sâu cho các nước đang phát triển (như Việt Nam)."
        ]
      }
    ],
    quiz: [
      {
        q: "Thành phố nào từ một làng chài nghèo đã trở thành đặc khu kinh tế kiểu mẫu và thủ phủ công nghệ cao hàng đầu của vùng duyên hải Trung Quốc?",
        options: [
          "Thâm Quyến (Shenzhen)",
          "Thành Đô (Chengdu)",
          "Tây An (Xi'an)",
          "Cáp Nhĩ Tân (Harbin)"
        ],
        answer: 0,
        explanation: "Thâm Quyến được thành lập năm 1980 với tư cách là đặc khu kinh tế đầu tiên của Trung Quốc và nay đã phát triển thành siêu đô thị công nghệ cao hàng đầu thế giới."
      },
      {
        q: "Vùng duyên hải Trung Quốc dù chỉ chiếm 14% diện tích nhưng đóng góp bao nhiêu phần trăm vào tổng GDP cả nước?",
        options: [
          "Trên 53% tổng GDP",
          "Chỉ khoảng 20% tổng GDP",
          "Gần 90% tổng GDP",
          "Chưa đầy 10% tổng GDP"
        ],
        answer: 0,
        explanation: "Vùng duyên hải là đầu tàu kinh tế của Trung Quốc, chiếm tới trên 53 - 55% GDP và chiếm đại đa số giá trị thương mại xuất khẩu."
      },
      {
        q: "Dạng biểu đồ nào thích hợp nhất để thể hiện tỉ trọng đóng góp GDP của vùng duyên hải so với các vùng khác của Trung Quốc trong một năm?",
        options: [
          "Biểu đồ tròn",
          "Biểu đồ đường",
          "Biểu đồ miền qua 20 năm",
          "Biểu đồ thanh ngang chỉ một đối tượng"
        ],
        answer: 0,
        explanation: "Biểu đồ tròn là lựa chọn tối ưu nhất để thể hiện cơ cấu và tỉ trọng (%) của các thành phần trong một tổng thể (100%) tại một thời điểm."
      }
    ]
  },

  29: {
    num: 29,
    title: "Thực hành: Tìm hiểu sự phát triển kinh tế Ô-xtrây-li-a",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Ô-xtrây-li-a",
    badge: "Kinh tế châu Đại Dương",
    objectives: [
      "Trình bày được những nét khái quát về vị trí địa lí, tiềm năng tài nguyên và kinh tế phát triển của Ô-xtrây-li-a.",
      "Phân tích thế mạnh đặc biệt của ngành công nghiệp khai khoáng và nông nghiệp xuất khẩu hàng đầu thế giới.",
      "Vẽ và nhận xét biểu đồ cơ cấu kinh tế hoặc kim ngạch xuất nhập khẩu của Ô-xtrây-li-a."
    ],
    sections: [
      {
        title: "1. Tiềm năng và vị thế kinh tế chung",
        type: "list",
        items: [
          "<strong>Vị thế:</strong> Là quốc gia phát triển duy nhất chiếm trọn một lục địa ở Nam bán cầu. Thuộc nhóm quốc gia có GDP/người rất cao (trên 60.000 USD), chỉ số HDI thuộc nhóm rất cao của thế giới.",
          "<strong>Cơ cấu kinh tế:</strong> Nền kinh tế tri thức hiện đại với ngành dịch vụ chiếm tỉ trọng áp đảo (khoảng 71% GDP), công nghiệp chiếm khoảng 25% và nông nghiệp chiếm gần 4%.",
          "<strong>Hội nhập quốc tế:</strong> Nền kinh tế hướng mạnh ra xuất khẩu, liên kết chặt chẽ với thị trường châu Á - Thái Bình Dương (Trung Quốc, Nhật Bản, Hàn Quốc, ASEAN)."
        ]
      },
      {
        title: "2. Các ngành kinh tế mũi nhọn",
        type: "grid",
        items: [
          {
            title: "Công nghiệp khai khoáng hàng đầu",
            desc: "Được mệnh danh là 'kho báu khoáng sản' của thế giới. Đứng hàng đầu thế giới về trữ lượng và xuất khẩu quặng sắt, bô-xít (nhôm), than đá, vàng, u-ra-ni-um, kim cương và khí tự nhiên hoá lỏng (LNG). Các mỏ lớn nằm ở bang Tây Ô-xtrây-li-a và Quin-xlen."
          },
          {
            title: "Nông nghiệp hiện đại & Quy mô lớn",
            desc: "Nông nghiệp thâm canh cao độ, cơ giới hoá toàn diện. Là quốc gia xuất khẩu lúa mì, thịt bò, thịt cừu, sữa và len cừu hàng đầu hành tinh. Đàn cừu khổng lồ được chăn thả ở các đồng cỏ bán khô hạn nội địa."
          },
          {
            title: "Dịch vụ tài chính, giáo dục & Du lịch",
            desc: "Ngành giáo dục quốc tế là nguồn thu xuất khẩu dịch vụ khổng lồ thu hút hàng trăm nghìn sinh viên toàn cầu. Du lịch sinh thái nổi tiếng với rạn san hô Great Barrier Reef, nhà hát Opera Sydney và các loài động vật bản địa quý hiếm (Chuột túi Kangaroo, Gấu túi Koala)."
          },
          {
            title: "Quan hệ thương mại xuất siêu",
            desc: "Thường xuyên đạt thặng dư thương mại (xuất siêu) lớn nhờ xuất khẩu khối lượng khổng lồ quặng sắt, than đá và nông sản sang các thị trường công nghiệp châu Á."
          }
        ]
      },
      {
        title: "3. Hướng dẫn tính toán và nhận xét số liệu",
        type: "list",
        items: [
          "<strong>Công thức tính Cán cân thương mại:</strong> Cán cân = Giá trị Xuất khẩu - Giá trị Nhập khẩu. (Nếu giá trị dương là Xuất siêu, âm là Nhập siêu).",
          "<strong>Nhận xét:</strong> Phân tích sự tăng trưởng kim ngạch xuất khẩu gắn liền với nhu cầu tiêu thụ quặng sắt và năng lượng của các nước đối tác lớn."
        ]
      }
    ],
    quiz: [
      {
        q: "Mặt hàng khoáng sản nào Ô-xtrây-li-a đứng hàng đầu thế giới về sản lượng xuất khẩu sang thị trường các nước châu Á?",
        options: [
          "Quặng sắt và than đá",
          "Dầu mỏ thô và lưu huỳnh",
          "Đá vôi và phốt pho",
          "Quặng apatit và than bùn"
        ],
        answer: 0,
        explanation: "Ô-xtrây-li-a là cường quốc xuất khẩu quặng sắt (đặc biệt từ vùng Pilbara) và than đá lớn nhất thế giới, cung cấp nguyên liệu cho các ngành thép châu Á."
      },
      {
        q: "Ngành dịch vụ nào mang lại nguồn thu ngoại tệ và xuất khẩu dịch vụ quan trọng bậc nhất cho Ô-xtrây-li-a?",
        options: [
          "Giáo dục quốc tế và du lịch",
          "Vận tải đường sắt xuyên sa mạc",
          "Sửa chữa tàu ngầm quân sự",
          "Dịch vụ truyền hình vệ tinh nông thôn"
        ],
        answer: 0,
        explanation: "Giáo dục quốc tế (thu hút du học sinh) và du lịch là hai ngành dịch vụ xuất khẩu hàng đầu mang lại hàng chục tỉ AUD cho Ô-xtrây-li-a mỗi năm."
      },
      {
        q: "Sản phẩm nông nghiệp xuất khẩu trứ danh lâu đời gắn liền với hình ảnh đàn gia súc Ô-xtrây-li-a là:",
        options: [
          "Len cừu, thịt cừu và thịt bò",
          "Tơ tằm tự nhiên và mủ cao su",
          "Cà phê chè và hạt tiêu",
          "Dầu cọ và sợi đay"
        ],
        answer: 0,
        explanation: "Ô-xtrây-li-a nổi tiếng thế giới với ngành chăn nuôi cừu lấy len hảo hạng (len cừu Merino) và xuất khẩu thịt bò, thịt cừu chất lượng cao."
      }
    ]
  },

  30: {
    num: 30,
    title: "Vị trí địa lí, điều kiện tự nhiên, dân cư và xã hội Cộng hoà Nam Phi",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Cộng hoà Nam Phi",
    badge: "Mũi Hảo Vọng",
    objectives: [
      "Xác định được vị trí địa lí chiến lược ở cực nam lục địa châu Phi án ngữ hai đại dương lớn.",
      "Phân tích đặc điểm tự nhiên: địa hình cao nguyên, khí hậu nhiệt đới - cận nhiệt đới và tài nguyên khoáng sản kim loại quý phong phú bậc nhất hành tinh.",
      "Trình bày đặc điểm dân cư đa chủng tộc, dấu mốc xoá bỏ chế độ phân biệt chủng tộc A-pác-thai (Apartheid)."
    ],
    sections: [
      {
        title: "1. Vị trí địa lí và ý nghĩa chiến lược",
        type: "list",
        items: [
          "<strong>Vị trí:</strong> Nằm ở cực nam châu Phi, bao bọc bởi Đại Tây Dương ở phía tây và Ấn Độ Dương ở phía nam và phía đông.",
          "<strong>Án ngữ tuyến hàng hải quốc tế:</strong> Mũi Hảo Vọng (Cape of Good Hope) là điểm yết hầu trên tuyến hàng hải huyết mạch vòng qua châu Phi nối liền Đại Tây Dương với Ấn Độ Dương.",
          "<strong>Đặc điểm thú vị:</strong> Có 3 thủ đô: Prê-tô-ri-a (Pretoria - thủ đô hành chính), Kê-p-tao (Cape Town - thủ đô lập pháp) và Bhlum-phôn-tên (Bloemfontein - thủ đô tư pháp)."
        ]
      },
      {
        title: "2. Điều kiện tự nhiên và tài nguyên khoáng sản",
        type: "grid",
        items: [
          {
            title: "Địa hình cao nguyên & Núi bao bọc",
            desc: "Phần lớn lãnh thổ là cao nguyên nội địa (Đại sơn nguyên Nam Phi) độ cao trên 1.000 m. Rìa đông và đông nam là dãy núi Đrê-ken-xbéc (Drakensberg) hùng vĩ, chắn gió ẩm từ biển vào. Đồng bằng ven biển nhỏ hẹp."
          },
          {
            title: "Khí hậu phân hoá đa dạng",
            desc: "Chủ yếu là khí hậu nhiệt đới và cận nhiệt đới. Phía tây và tây bắc khô hạn, hình thành hoang mạc Ca-la-ha-ri và bán hoang mạc Na-míp. Vùng tây nam ven Kê-p-tao có khí hậu cận nhiệt Địa Trung Hải mùa đông mưa nhiều, thuận lợi trồng nho và cây ăn quả."
          },
          {
            title: "Kho báu kim loại quý & Kim cương",
            desc: "Là một trong những quốc gia giàu tài nguyên khoáng sản bậc nhất thế giới. Đứng đầu hành tinh về trữ lượng bạch kim (platinum - chiếm trên 80% thế giới), crôm, mangan, vàng, kim cương và quặng sắt."
          },
          {
            title: "Nguồn nước khan hiếm",
            desc: "Sông ngòi ít, sông lớn nhất là sông Ô-ranh-giơ (Orange) và sông Lim-pô-pô. Nguồn nước ngọt là thách thức lớn đối với sinh hoạt và sản xuất nông nghiệp."
          }
        ]
      },
      {
        title: "3. Dân cư và sự tiến bộ xã hội",
        type: "list",
        items: [
          "<strong>Quy mô & Đa sắc tộc:</strong> Dân số khoảng 60 triệu người (2021). Là 'quốc gia cầu vồng' với cơ cấu chủng tộc đa dạng: người da đen gốc Phi (khoảng 80%), người da trắng (khoảng 8%), người gốc Á (Ấn Độ) và người lai.",
          "<strong>Xoá bỏ chế độ Apartheid:</strong> Năm 1994, cuộc bầu cử dân chủ không phân biệt chủng tộc đầu tiên được tổ chức, lãnh tụ Nen-xơn Man-đê-la (Nelson Mandela) đắc cử Tổng thống, chấm dứt hoàn toàn chế độ phân biệt chủng tộc tàn bạo Apartheid kéo dài nhiều thế kỉ.",
          "<strong>Thách thức xã hội:</strong> Tỉ lệ thất nghiệp còn ở mức cao, chênh lệch giàu nghèo sâu sắc, an ninh trật tự xã hội và tỉ lệ nhiễm HIV/AIDS vẫn là những bài toán lớn."
        ]
      }
    ],
    quiz: [
      {
        q: "Mũi đất nổi tiếng ở cực nam Nam Phi án ngữ tuyến đường biển huyết mạch nối Đại Tây Dương với Ấn Độ Dương là:",
        options: [
          "Mũi Hảo Vọng (Cape of Good Hope)",
          "Mũi Horn",
          "Mũi Kim (Cape Agulhas)",
          "Mũi Canaveral"
        ],
        answer: 0,
        explanation: "Mũi Hảo Vọng nằm ở bờ biển tây nam Nam Phi, là hải đăng định hướng và trạm trung chuyển hàng hải lịch sử của nhân loại."
      },
      {
        q: "Khoáng sản kim loại quý nào mà Cộng hoà Nam Phi sở hữu trữ lượng lớn nhất thế giới (chiếm hơn 80% trữ lượng toàn cầu)?",
        options: [
          "Bạch kim (Platinum) và Crôm",
          "Bô-xít nhôm",
          "Than bùn và quặng lưu huỳnh",
          "Muối mỏ và thạch cao"
        ],
        answer: 0,
        explanation: "Nam Phi là quốc gia số 1 thế giới về tài nguyên bạch kim (chiếm tới hơn 80% trữ lượng toàn cầu) và quặng crôm phục vụ công nghiệp công nghệ cao."
      },
      {
        q: "Vị lãnh tụ vĩ đại nào đã dẫn dắt nhân dân Nam Phi đấu tranh thắng lợi xoá bỏ chế độ phân biệt chủng tộc Apartheid và trở thành Tổng thống da đen đầu tiên năm 1994?",
        options: [
          "Nen-xơn Man-đê-la (Nelson Mandela)",
          "Kofi Annan",
          "Mahatma Gandhi",
          "Martin Luther King"
        ],
        answer: 0,
        explanation: "Nelson Mandela là biểu tượng vĩ đại của phong trào đấu tranh vì tự do, bình đẳng chủng tộc, người được trao giải Nobel Hoà bình năm 1993."
      }
    ]
  },

  31: {
    num: 31,
    title: "Kinh tế Cộng hoà Nam Phi",
    part: "Phần II. Địa lí khu vực và quốc gia",
    topic: "Cộng hoà Nam Phi",
    badge: "Đầu tàu châu Phi",
    objectives: [
      "Đánh giá được quy mô, vị thế đầu tàu kinh tế của Cộng hoà Nam Phi tại châu Phi và trên trường quốc tế.",
      "Phân tích cơ cấu và tình hình phát triển các ngành: công nghiệp khai khoáng - luyện kim, nông nghiệp cận nhiệt và dịch vụ tài chính.",
      "Nhận biết được vai trò của các trung tâm kinh tế lớn: Giô-han-ne-xbơ-gơ, Kê-p-tao, Đuốc-ban."
    ],
    sections: [
      {
        title: "1. Vị thế và tình hình phát triển kinh tế chung",
        type: "list",
        items: [
          "<strong>Quy mô & Vị thế:</strong> Là nền kinh tế phát triển và công nghiệp hoá bậc nhất châu Phi; quốc gia duy nhất của lục địa đen là thành viên của nhóm các nền kinh tế lớn G20 và khối BRICS.",
          "<strong>Cơ cấu kinh tế hiện đại:</strong> Ngành dịch vụ chiếm tỉ trọng áp đảo (khoảng 63% GDP), công nghiệp chiếm khoảng 24% và nông nghiệp chiếm gần 3%.",
          "<strong>Cơ sở hạ tầng:</strong> Có hệ thống giao thông đường sắt, đường bộ cao tốc, cảng biển nước sâu và mạng lưới truyền tải điện hiện đại hàng đầu châu Phi."
        ]
      },
      {
        title: "2. Các ngành kinh tế then chốt",
        type: "grid",
        items: [
          {
            title: "Công nghiệp khai khoáng & Luyện kim",
            desc: "Ngành công nghiệp truyền thống thế mạnh bậc nhất. Khai thác quy mô lớn vàng, kim cương, bạch kim, than đá và quặng sắt. Công nghiệp luyện kim đen, luyện kim màu, cơ khí chế tạo và hoá chất phát triển đồng bộ."
          },
          {
            title: "Nông nghiệp cận nhiệt đới xuất khẩu",
            desc: "Chiếm diện tích đất canh tác hạn hẹp nhưng sản xuất hàng hoá hiệu quả cao. Xuất khẩu nổi tiếng: nho và rượu vang Nam Phi (top đầu thế giới), cây ăn quả có múi (cam, chanh), ngô, mía đường và len cừu."
          },
          {
            title: "Dịch vụ tài chính & Ngân hàng",
            desc: "Giô-han-ne-xbơ-gơ là trung tâm tài chính ngân hàng lớn nhất châu Phi với Thị trường Chứng khoán JSE nằm trong top 20 thế giới. Du lịch khám phá thiên nhiên hoang dã (safari) và văn hoá đa sắc màu thu hút hàng triệu du khách."
          },
          {
            title: "Năng lượng & Điện toán",
            desc: "Sản xuất điện chiếm hơn 40% sản lượng điện của toàn châu Phi, bao gồm cả nhà máy điện hạt nhân Koeberg (duy nhất ở châu Phi)."
          }
        ]
      },
      {
        title: "3. Các trung tâm kinh tế lớn",
        type: "list",
        items: [
          "<strong>Giô-han-ne-xbơ-gơ (Johannesburg):</strong> Trung tâm kinh tế, tài chính và thương mại lớn nhất cả nước, khởi nguồn từ thủ phủ khai thác vàng thế giới thế kỉ XIX.",
          "<strong>Kê-p-tao (Cape Town):</strong> Trung tâm du lịch, công nghiệp chế biến, dịch vụ cảng biển và văn hoá quốc tế năng động.",
          "<strong>Đuốc-ban (Durban):</strong> Thành phố cảng biển nước sâu lớn nhất Nam Phi và bận rộn nhất toàn bộ khu vực nam châu Phi bên bờ Ấn Độ Dương."
        ]
      }
    ],
    quiz: [
      {
        q: "Cộng hoà Nam Phi là quốc gia châu Phi duy nhất tham gia vào nhóm diễn đàn kinh tế quốc tế quyền lực nào dưới đây?",
        options: [
          "Nhóm G20 và nhóm các nền kinh tế mới nổi BRICS",
          "Liên minh quân sự NATO",
          "Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
          "Thị trường chung Nam Mỹ (MERCOSUR)"
        ],
        answer: 0,
        explanation: "Nam Phi là đại diện duy nhất của châu lục đen trong nhóm G20 và là một trong những thành viên sáng lập mở rộng của khối BRICS."
      },
      {
        q: "Thành phố nào được coi là trung tâm tài chính, thương mại lớn nhất của Cộng hoà Nam Phi và toàn bộ châu Phi?",
        options: [
          "Giô-han-ne-xbơ-gơ (Johannesburg)",
          "Kê-p-tao (Cape Town)",
          "Bhlum-phôn-tên",
          "Kim-bơ-li"
        ],
        answer: 0,
        explanation: "Giô-han-ne-xbơ-gơ là trung tâm tài chính và công nghiệp lớn nhất cả nước, nơi đặt Sở Giao dịch Chứng khoán JSE."
      },
      {
        q: "Sản phẩm chế biến nông nghiệp nổi tiếng nào của Nam Phi được xuất khẩu rộng rãi khắp toàn cầu?",
        options: [
          "Rượu vang nho và hoa quả cận nhiệt",
          "Chè sen và gạo thơm lài",
          "Dầu ô-liu ép lạnh Bắc Phi",
          "Bơ ca cao và sô-cô-la đen nguyên chất"
        ],
        answer: 0,
        explanation: "Vùng đất xung quanh Kê-p-tao có khí hậu Địa Trung Hải tuyệt vời cho cây nho, đưa Nam Phi vào top các nhà sản xuất rượu vang hàng đầu thế giới."
      }
    ]
  }
};

module.exports = part3_lessons;
