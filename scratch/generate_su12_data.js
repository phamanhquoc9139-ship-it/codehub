// scratch/generate_su12_data.js
const fs = require('fs');

const lessonThemes = {
  1: "Bối cảnh ra đời, mục tiêu, nguyên tắc hoạt động, cơ cấu tổ chức và vai trò quốc tế của Liên hợp quốc (1945 đến nay).",
  2: "Sự hình thành trật tự hai cực I-an-ta, các biểu hiện đối đầu trong Chiến tranh lạnh và nguyên nhân, hệ quả sụp đổ năm 1991.",
  3: "Cục diện quan hệ quốc tế sau Chiến tranh lạnh, xu thế đa cực, hợp tác và phát triển cùng những thách thức an ninh toàn cầu.",
  4: "Bối cảnh thành lập ASEAN (1967), quá trình mở rộng từ ASEAN 5 thành ASEAN 10 và các chặng đường phát triển khu vực.",
  5: "Ý tưởng xây dựng Cộng đồng ASEAN (2015), ba trụ cột hợp tác (APSC, AEC, ASCC), thời cơ và thách thức đối với công dân khu vực.",
  6: "Thời cơ ngàn năm có một, diễn biến khởi nghĩa tại Hà Nội, Huế, Sài Gòn và ý nghĩa lập nước Việt Nam Dân chủ Cộng hòa (1945).",
  7: "Đường lối kháng chiến toàn dân, toàn diện, trường kì; các chiến dịch Việt Bắc (1947), Biên giới (1950) đến Điện Biên Phủ (1954).",
  8: "Đánh bại các chiến lược chiến tranh của Mỹ: từ Chiến tranh đặc biệt, Cục bộ, Việt Nam hóa chiến tranh đến Đại thắng mùa Xuân 1975.",
  9: "Các cuộc chiến đấu bảo vệ Tổ quốc ở biên giới Tây Nam (1979), biên giới phía Bắc (1979-1989) và chủ quyền biển đảo thiêng liêng.",
  10: "Bối cảnh khủng hoảng trước 1986, Đại hội VI khởi xướng đường lối Đổi mới toàn diện và các giai đoạn phát triển đến nay.",
  11: "Những thành tựu vĩ đại về kinh tế, chính trị, xã hội, quốc phòng và hội nhập quốc tế cùng 4 bài học kinh nghiệm sâu sắc.",
  12: "Hoạt động đối ngoại của Phan Bội Châu, Phan Châu Trinh và Nguyễn Ái Quốc; kết nối cách mạng Việt Nam với thế giới.",
  13: "Nghệ thuật kết hợp đấu tranh quân sự và đàm phán ngoại giao: Hiệp định Sơ bộ 1946, Hiệp định Giơ-ne-vơ 1954 và Pa-ri 1973.",
  14: "Đổi mới tư duy đối ngoại: phá thế bao vây cấm vận, đa phương hóa, đa dạng hóa, nâng cao vị thế quốc tế của Việt Nam.",
  15: "Quê hương, gia đình, các mốc tiểu sử và tiến trình hoạt động cách mạng vẻ vang của Chủ tịch Hồ Chí Minh (1890-1969).",
  16: "Vai trò lịch sử của Hồ Chí Minh: tìm con đường cứu nước, chuẩn bị thành lập Đảng, lãnh đạo Tổng khởi nghĩa và hai cuộc kháng chiến.",
  17: "Sự tôn vinh của UNESCO (1987), dấu ấn của Người trong lòng nhân dân thế giới và trách nhiệm thế hệ trẻ trong học tập di sản."
};

// 51 Mini-quizzes (3 questions x 17 lessons)
const lessonQuizzes = {
  1: [
    {
      q: "Hiến chương Liên hợp quốc chính thức có hiệu lực vào ngày nào, đánh dấu sự ra đời của tổ chức?",
      options: ["25-4-1945", "26-6-1945", "24-10-1945", "2-9-1945"],
      answer: 2,
      explanation: "Ngày 24-10-1945, Hiến chương Liên hợp quốc chính thức có hiệu lực sau khi được các nước phê chuẩn, được lấy làm Ngày Liên hợp quốc.",
      takeaway: "24-10-1945 = Ngày thành lập Liên hợp quốc (Hiến chương có hiệu lực)."
    },
    {
      q: "Cơ quan nào của Liên hợp quốc chịu trách nhiệm chính trong việc duy trì hòa bình và an ninh quốc tế?",
      options: ["Đại hội đồng", "Hội đồng Bảo an", "Ban Thư kí", "Tòa án Công lí Quốc tế"],
      answer: 1,
      explanation: "Hội đồng Bảo an là cơ quan duy nhất chịu trách nhiệm chính về duy trì hòa bình, an ninh quốc tế và các quyết định có tính cưỡng chế pháp lí.",
      takeaway: "Hội đồng Bảo an = Giữ gìn hòa bình & an ninh quốc tế (5 ủy viên thường trực có quyền phủ quyết)."
    },
    {
      q: "Năm nước thành viên thường trực của Hội đồng Bảo an Liên hợp quốc gồm:",
      options: [
        "Mỹ, Anh, Pháp, Nga, Trung Quốc",
        "Mỹ, Anh, Pháp, Đức, Nhật Bản",
        "Mỹ, Liên Xô, Anh, Pháp, Đức",
        "Mỹ, Nga, Trung Quốc, Ấn Độ, Nhật Bản"
      ],
      answer: 0,
      explanation: "Năm ủy viên thường trực Hội đồng Bảo an gồm: Mỹ, Liên bang Nga (kế thừa Liên Xô), Anh, Pháp và Trung Quốc.",
      takeaway: "5 nước thường trực HĐBA = Mỹ, Nga, Anh, Pháp, Trung Quốc."
    }
  ],
  2: [
    {
      q: "Trật tự thế giới hai cực I-an-ta được định hình trên cơ sở thỏa thuận của các cường quốc nào?",
      options: [
        "Mỹ, Liên Xô, Pháp",
        "Liên Xô, Mỹ, Anh",
        "Mỹ, Anh, Trung Quốc",
        "Liên Xô, Đức, Nhật Bản"
      ],
      answer: 1,
      explanation: "Tại Hội nghị I-an-ta (2-1945), ba nguyên thủ của Liên Xô, Mỹ, Anh đã thỏa thuận phân chia phạm vi ảnh hưởng ở châu Âu và châu Á.",
      takeaway: "Hội nghị I-an-ta (2-1945) = Liên Xô, Mỹ, Anh phân chia phạm vi ảnh hưởng."
    },
    {
      q: "Sự kiện nào đánh dấu sự tan rã hoàn toàn của Trật tự thế giới hai cực I-an-ta?",
      options: [
        "Khủng hoảng tên lửa Cu-ba (1962)",
        "Hiệp định Pa-ri về Việt Nam (1973)",
        "Bức tường Béc-lin sụp đổ (1989)",
        "Sự sụp đổ của Liên bang Xô viết (12-1991)"
      ],
      answer: 3,
      explanation: "Tháng 12-1991, Liên Xô tan rã, cực Liên Xô không còn tồn tại, trật tự hai cực I-an-ta chính thức sụp đổ.",
      takeaway: "12-1991 Liên Xô tan rã = Chấm dứt trật tự hai cực I-an-ta và Chiến tranh lạnh."
    },
    {
      q: "Đặc trưng nổi bật nhất của Chiến tranh lạnh (1947 - 1989) là gì?",
      options: [
        "Các cuộc xung đột trực tiếp bằng vũ khí hạt nhân giữa Mỹ và Liên Xô",
        "Tình trạng đối đầu căng thẳng, toàn diện giữa hai phe TBCN và XHCN nhưng không nổ ra chiến tranh thế giới trực tiếp",
        "Sự thống trị tuyệt đối của một siêu cường duy nhất",
        "Chiến tranh diễn ra thuần túy trên lĩnh vực thể thao và âm nhạc"
      ],
      answer: 1,
      explanation: "Chiến tranh lạnh là đối đầu toàn diện (chính trị, quân sự, kinh tế, ý thức hệ) giữa Mỹ và Liên Xô, không trực tiếp giao chiến nhưng có chiến tranh cục bộ.",
      takeaway: "Chiến tranh lạnh = Đối đầu toàn diện Mỹ - Xô không nổ ra Thế chiến thứ ba."
    }
  ],
  3: [
    {
      q: "Sau khi Chiến tranh lạnh kết thúc, trật tự thế giới mới đang dần hình thành theo xu thế nào?",
      options: ["Đơn cực tuyệt đối", "Đa cực, nhiều trung tâm", "Hai cực mới", "Vô chính phủ toàn cầu"],
      answer: 1,
      explanation: "Xu thế trật tự thế giới mới sau 1991 là xu thế đa cực, với sự vươn lên của nhiều trung tâm quyền lực như Mỹ, EU, Trung Quốc, Nga, Nhật Bản, Ấn Độ...",
      takeaway: "Sau 1991 = Xu thế đa cực, nhiều trung tâm quyền lực cùng cạnh tranh và hợp tác."
    },
    {
      q: "Xu thế chủ đạo trong quan hệ quốc tế từ sau Chiến tranh lạnh đến nay là:",
      options: [
        "Chạy đua vũ trang và chuẩn bị chiến tranh hạt nhân",
        "Hòa bình, hợp tác và cùng phát triển",
        "Phân chia thế giới thành các phe khối quân sự đóng kín",
        "Cô lập hoàn toàn các nước đang phát triển"
      ],
      answer: 1,
      explanation: "Hòa bình, ổn định, hợp tác và phát triển kinh tế trở thành nguyện vọng lớn nhất và xu thế chủ đạo của các quốc gia trên thế giới.",
      takeaway: "Xu thế chủ đạo sau 1991 = Hòa bình, hợp tác và phát triển."
    },
    {
      q: "Yếu tố nào ngày càng đóng vai trò quyết định sức mạnh tổng hợp quốc gia trong trật tự thế giới hiện nay?",
      options: [
        "Sức mạnh kinh tế, khoa học - công nghệ",
        "Quy mô quân đội đánh bộ truyền thống",
        "Số lượng tài nguyên khoáng sản thô",
        "Khả năng mở rộng thuộc địa ra nước ngoài"
      ],
      answer: 0,
      explanation: "Trong bối cảnh cách mạng công nghệ và toàn cầu hóa, sức mạnh kinh tế và khoa học - công nghệ là thước đo sức mạnh hàng đầu của một quốc gia.",
      takeaway: "Thước đo sức mạnh hiện đại = Kinh tế + Khoa học công nghệ."
    }
  ],
  4: [
    {
      q: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập tại đâu vào ngày 8-8-1967?",
      options: ["Gia-các-ta (Indonesia)", "Băng Cốc (Thái Lan)", "Ma-ni-la (Philippines)", "Kua-la Lăm-pơ (Malaysia)"],
      answer: 1,
      explanation: "Ngày 8-8-1967, tại thủ đô Băng Cốc (Thái Lan), 5 nước sáng lập đã kí Tuyên bố Băng Cốc thành lập ASEAN.",
      takeaway: "8-8-1967 tại Băng Cốc = Tuyên bố thành lập ASEAN."
    },
    {
      q: "Việt Nam chính thức trở thành thành viên thứ 7 của ASEAN vào năm nào?",
      options: ["1984", "1995", "1997", "1999"],
      answer: 1,
      explanation: "Ngày 28-7-1995, Việt Nam chính thức gia nhập ASEAN tại Hội nghị Ngoại trưởng ASEAN lần thứ 28 tại Bru-nây.",
      takeaway: "28-7-1995 = Việt Nam gia nhập ASEAN (thành viên thứ 7)."
    },
    {
      q: "Văn kiện nào đặt nền tảng pháp lí và nguyên tắc ứng xử quan trọng hàng đầu trong lịch sử ASEAN?",
      options: [
        "Tuyên bố Băng Cốc (1967)",
        "Hiệp ước Thân thiện và Hợp tác ở Đông Nam Á (Hiệp ước Bali, 1976)",
        "Tuyên bố về khu vực hòa bình tự do và trung lập (ZOPFAN, 1971)",
        "Tuyên bố Manila (1992)"
      ],
      answer: 1,
      explanation: "Hiệp ước Bali (1976) xác định các nguyên tắc quan hệ cơ bản: tôn trọng độc lập chủ quyền, không can thiệp nội bộ, giải quyết hòa bình bất đồng.",
      takeaway: "Hiệp ước Bali (1976) = Nền tảng pháp lí và nguyên tắc ứng xử cốt lõi của ASEAN."
    }
  ],
  5: [
    {
      q: "Cộng đồng ASEAN (ASEAN Community) chính thức được tuyên bố thành lập vào ngày nào?",
      options: ["8-8-2007", "31-12-2015", "1-1-2020", "28-7-1995"],
      answer: 1,
      explanation: "Cộng đồng ASEAN chính thức ra đời ngày 31-12-2015, hiện thực hóa ước mơ liên kết sâu rộng của nhân dân Đông Nam Á.",
      takeaway: "31-12-2015 = Cộng đồng ASEAN chính thức hình thành."
    },
    {
      q: "Cộng đồng ASEAN được xây dựng dựa trên 3 trụ cột vững chắc nào?",
      options: [
        "Chính trị - An ninh (APSC), Kinh tế (AEC), Văn hóa - Xã hội (ASCC)",
        "Quân sự chung, Đồng tiền chung, Ngoại giao chung",
        "An ninh biên giới, Nông nghiệp xuất khẩu, Du lịch",
        "Giáo dục đại học, Khoa học công nghệ, Thể thao khu vực"
      ],
      answer: 0,
      explanation: "Ba trụ cột của Cộng đồng ASEAN là: APSC (Chính trị - An ninh), AEC (Kinh tế) và ASCC (Văn hóa - Xã hội).",
      takeaway: "Ba trụ cột Cộng đồng ASEAN = APSC + AEC + ASCC."
    },
    {
      q: "Nguyên tắc ra quyết định mang tính đặc trưng hàng đầu của ASEAN là:",
      options: [
        "Bỏ phiếu theo đa số quá bán (51%)",
        "Quyền phủ quyết tuyệt đối của nước chủ tịch",
        "Hiệp thương và Đồng thuận (Consensus)",
        "Tuân theo phán quyết của Tòa án quốc tế"
      ],
      answer: 2,
      explanation: "Nguyên tắc đồng thuận (consensus) và tham vấn (consultation) là cốt lõi của 'Phương cách ASEAN', đảm bảo tôn trọng lợi ích mọi thành viên.",
      takeaway: "Phương cách ASEAN = Đồng thuận & Tham vấn bình đẳng."
    }
  ],
  6: [
    {
      q: "Sự kiện quốc tế nào trực tiếp tạo thời cơ khách quan thuận lợi cho Cách mạng tháng Tám năm 1945 ở Việt Nam?",
      options: [
        "Phát xít Đức đầu hàng Liên Xô và Đồng minh (5-1945)",
        "Nhật đảo chính Pháp tại Đông Dương (9-3-1945)",
        "Chính phủ phát xít Nhật tuyên bố đầu hàng Đồng minh không điều kiện (15-8-1945)",
        "Liên hợp quốc thông qua bản Hiến chương (6-1945)"
      ],
      answer: 2,
      explanation: "Ngày 15-8-1945, Nhật tuyên bố đầu hàng Đồng minh, quân Nhật ở Đông Dương tê liệt, chính quyền bù nhìn Trần Trọng Kim rệu rã, tạo thời cơ chín muồi.",
      takeaway: "15-8-1945 Nhật đầu hàng = Thời cơ ngàn năm có một bùng nổ Tổng khởi nghĩa."
    },
    {
      q: "Ba thắng lợi quyết định ở các đô thị lớn trong Tổng khởi nghĩa tháng Tám 1945 diễn ra theo thứ tự thời gian nào?",
      options: [
        "Hà Nội (19-8) → Huế (23-8) → Sài Gòn (25-8)",
        "Huế (19-8) → Hà Nội (23-8) → Sài Gòn (25-8)",
        "Hà Nội (16-8) → Sài Gòn (19-8) → Huế (23-8)",
        "Sài Gòn (19-8) → Huế (23-8) → Hà Nội (25-8)"
      ],
      answer: 0,
      explanation: "Thắng lợi vang dội ở Hà Nội (19-8), Huế (23-8), Sài Gòn (25-8) có ý nghĩa quyết định thắng lợi trên phạm vi cả nước.",
      takeaway: "Trục thắng lợi then chốt = Hà Nội (19-8) → Huế (23-8) → Sài Gòn (25-8)."
    },
    {
      q: "Ý nghĩa lịch sử trọng đại nhất của Cách mạng tháng Tám năm 1945 là:",
      options: [
        "Buộc quân đội các nước Đồng minh không được tiến vào miền Bắc",
        "Lật đổ ách thống trị của thực dân - phát xít, xóa bỏ chế độ quân chủ, lập nên nước Việt Nam Dân chủ Cộng hòa",
        "Hoàn thành trọn vẹn công cuộc xây dựng chủ nghĩa xã hội",
        "Đưa Việt Nam trở thành quốc gia phát triển nhất châu Á"
      ],
      answer: 1,
      explanation: "Cách mạng tháng Tám đập tan xiềng xích thực dân gần 1 thế kỉ và chế độ phong kiến ngàn năm, mở ra kỉ nguyên độc lập tự do cho dân tộc.",
      takeaway: "CM Tháng Tám 1945 = Lật đổ thực dân phong kiến + Khai sinh nước VNDCCH."
    }
  ],
  7: [
    {
      q: "Đường lối kháng chiến chống thực dân Pháp (1945 - 1954) của Đảng được xác định là:",
      options: [
        "Đánh nhanh thắng nhanh, dựa hoàn toàn vào viện trợ quốc tế",
        "Toàn dân, toàn diện, trường kì, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế",
        "Thuần túy đấu tranh chính trị và đàm phán ngoại giao",
        "Tập trung toàn bộ lực lượng ở các đô thị lớn"
      ],
      answer: 1,
      explanation: "Đường lối kháng chiến của Đảng là: Toàn dân, toàn diện, trường kì, tự lực cánh sinh và tranh thủ ủng hộ quốc tế (Lời kêu gọi toàn quốc kháng chiến và tác phẩm Kháng chiến nhất định thắng lợi).",
      takeaway: "Đường lối kháng chiến chống Pháp = Toàn dân + Toàn diện + Trường kì + Tự lực cánh sinh."
    },
    {
      q: "Chiến dịch nào đã giúp quân ta giành thế chủ động chiến lược trên chiến trường chính Bắc Bộ năm 1950?",
      options: ["Chiến dịch Việt Bắc thu - đông 1947", "Chiến dịch Biên giới thu - đông 1950", "Chiến dịch Hòa Bình 1951", "Chiến dịch Điện Biên Phủ 1954"],
      answer: 1,
      explanation: "Chiến dịch Biên giới 1950 khai thông đường liên lạc với các nước XHCN, phá vỡ vòng vây của địch và giành quyền chủ động chiến lược trên chiến trường chính.",
      takeaway: "Chiến dịch Biên giới 1950 = Giành thế chủ động chiến lược trên chiến trường chính."
    },
    {
      q: "Chiến thắng Điện Biên Phủ (7-5-1954) có tác động trực tiếp như thế nào đến mặt trận ngoại giao?",
      options: [
        "Buộc Mỹ phải trực tiếp kí Hiệp định Pa-ri rút quân về nước",
        "Đập tan kế hoạch Na-va, giáng đòn quyết định buộc Pháp phải kí Hiệp định Giơ-ne-vơ về Đông Dương",
        "Khiến Liên hợp quốc ra nghị quyết trừng phạt nước Pháp",
        "Lập tức thống nhất đất nước về mặt nhà nước"
      ],
      answer: 1,
      explanation: "Thắng lợi Điện Biên Phủ là đòn quân sự quyết định làm sụp đổ hoàn toàn ý chí xâm lược của Pháp, dẫn tới việc kí kết Hiệp định Giơ-ne-vơ tháng 7-1954.",
      takeaway: "Điện Biên Phủ (7-5-1954) = Buộc Pháp kí Hiệp định Giơ-ne-vơ lập lại hòa bình."
    }
  ],
  8: [
    {
      q: "Phong trào 'Đồng khởi' (1959 - 1960) ở miền Nam có ý nghĩa bước ngoặt lịch sử nào?",
      options: [
        "Chấm dứt hoàn toàn sự can thiệp quân sự của đế quốc Mỹ",
        "Chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công, dẫn đến sự ra đời của Mặt trận Dân tộc Giải phóng miền Nam",
        "Đánh bại hoàn toàn chiến lược 'Chiến tranh cục bộ'",
        "Buộc Mỹ phải chấp nhận ngồi vào bàn đàm phán tại Pa-ri"
      ],
      answer: 1,
      explanation: "Đồng khởi (bắt đầu từ Bến Tre) đã chuyển cách mạng miền Nam sang thế tiến công mạnh mẽ, giải phóng nhiều vùng nông thôn rộng lớn.",
      takeaway: "Đồng khởi (1959-1960) = Chuyển cách mạng từ giữ gìn lực lượng sang thế tiến công."
    },
    {
      q: "Thắng lợi nào đã làm phá sản chiến lược 'Chiến tranh cục bộ' và buộc Mỹ phải tuyên bố phi Mỹ hóa chiến tranh?",
      options: [
        "Chiến thắng Ấp Bắc (1963)",
        "Tổng tiến công và nổi dậy Tết Mậu Thân (1968)",
        "Chiến dịch Đường 9 - Nam Lào (1971)",
        "Chiến thắng 'Điện Biên Phủ trên không' (1972)"
      ],
      answer: 1,
      explanation: "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 giáng đòn bất ngờ vào ý chí xâm lược của Mỹ, buộc Mỹ ngừng ném bom miền Bắc và chấp nhận đàm phán ở Pa-ri.",
      takeaway: "Tết Mậu Thân 1968 = Đánh sụp ý chí xâm lược của Mỹ, buộc Mỹ ngồi vào bàn đàm phán."
    },
    {
      q: "Chiến dịch quyết chiến chiến lược nào đã kết thúc thắng lợi trọn vẹn cuộc kháng chiến chống Mỹ, giải phóng miền Nam ngày 30-4-1975?",
      options: [
        "Chiến dịch Tây Nguyên",
        "Chiến dịch Huế - Đà Nẵng",
        "Chiến dịch Hồ Chí Minh",
        "Chiến dịch Đường 14 - Phước Long"
      ],
      answer: 2,
      explanation: "Chiến dịch Hồ Chí Minh (26-4 đến 30-4-1975) là đỉnh cao của cuộc Tổng tiến công và nổi dậy mùa Xuân 1975, giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
      takeaway: "Chiến dịch Hồ Chí Minh (30-4-1975) = Toàn thắng, non sông thu về một mối."
    }
  ],
  9: [
    {
      q: "Việt Nam phối hợp cùng lực lượng cách mạng Campuchia lật đổ chế độ diệt chủng Pôn Pốt vào ngày nào?",
      options: ["30-4-1977", "22-12-1978", "7-1-1979", "17-2-1979"],
      answer: 2,
      explanation: "Ngày 7-1-1979, thủ đô Phnôm Pênh được giải phóng, chế độ diệt chủng Pôn Pốt bị lật đổ, cứu nhân dân Campuchia khỏi thảm họa diệt chủng.",
      takeaway: "7-1-1979 = Giải phóng Phnôm Pênh, lật đổ chế độ diệt chủng Pôn Pốt."
    },
    {
      q: "Cuộc chiến đấu bảo vệ biên giới phía Bắc của quân dân Việt Nam bùng nổ vào ngày nào?",
      options: ["17-2-1979", "5-3-1979", "14-3-1988", "12-5-1977"],
      answer: 0,
      explanation: "Sáng ngày 17-2-1979, quân đội Trung Quốc mở cuộc tiến công xâm phạm chủ quyền trên toàn tuyến biên giới phía Bắc của Việt Nam.",
      takeaway: "17-2-1979 = Bùng nổ cuộc chiến đấu bảo vệ biên giới phía Bắc."
    },
    {
      q: "Việt Nam chính thức phê chuẩn Công ước của Liên hợp quốc về Luật Biển (UNCLOS 1982) vào năm nào?",
      options: ["1977", "1982", "1994", "2012"],
      answer: 2,
      explanation: "Năm 1994, Quốc hội Việt Nam đã phê chuẩn UNCLOS 1982, trở thành quốc gia thứ 63 phê chuẩn công ước quốc tế quan trọng này.",
      takeaway: "Năm 1994 = Việt Nam phê chuẩn UNCLOS 1982 (quốc gia thứ 63)."
    }
  ],
  10: [
    {
      q: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng (12-1986) đã khởi xướng đường lối Đổi mới với nội dung đột phá trước hết là:",
      options: [
        "Đổi mới tư duy và đổi mới kinh tế",
        "Thay đổi toàn bộ hệ thống chính trị đa đảng",
        "Từ bỏ ngay lập tức kinh tế quốc doanh",
        "Ưu tiên phát triển công nghiệp quốc phòng"
      ],
      answer: 0,
      explanation: "Đại hội VI xác định trước hết phải đổi mới tư duy, đặc biệt là tư duy kinh tế, nhìn thẳng vào sự thật, tháo gỡ cơ chế tập trung quan liêu bao cấp.",
      takeaway: "Đại hội VI (12-1986) = Khởi xướng Đổi mới, trước hết là tư duy và kinh tế."
    },
    {
      q: "Đặc điểm cơ bản của mô hình kinh tế được Việt Nam xây dựng trong công cuộc Đổi mới là:",
      options: [
        "Kinh tế tập trung quan liêu bao cấp",
        "Kinh tế thị trường tự do tư bản chủ nghĩa hoàn toàn",
        "Kinh tế thị trường định hướng xã hội chủ nghĩa với nhiều thành phần kinh tế",
        "Kinh tế tự cung tự cấp khép kín"
      ],
      answer: 2,
      explanation: "Việt Nam phát triển nền kinh tế thị trường định hướng XHCN, vận hành theo quy luật thị trường có sự quản lí của Nhà nước pháp quyền XHCN.",
      takeaway: "Kinh tế Đổi mới = Kinh tế thị trường định hướng XHCN nhiều thành phần."
    },
    {
      q: "Sự kiện ngoại giao quan trọng năm 1995 đánh dấu bước chuyển lớn trong tiến trình hội nhập khu vực của Việt Nam là:",
      options: [
        "Gia nhập Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
        "Gia nhập Tổ chức Thương mại Thế giới (WTO)",
        "Tham gia Diễn đàn Hợp tác Kinh tế châu Á - Thái Bình Dương (APEC)",
        "Kí Hiệp định Thương mại song phương với Mỹ"
      ],
      answer: 0,
      explanation: "Tháng 7-1995, Việt Nam chính thức gia nhập ASEAN, mở ra trang mới trong hội nhập khu vực và quốc tế.",
      takeaway: "Tháng 7-1995 = Việt Nam gia nhập ASEAN."
    }
  ],
  11: [
    {
      q: "Thành tựu kinh tế nổi bật hàng đầu của Việt Nam sau gần 40 năm Đổi mới (1986 đến nay) là gì?",
      options: [
        "Từ một nước thiếu ăn, khủng hoảng trở thành nước đang phát triển có thu nhập trung bình và xuất khẩu nông sản hàng đầu thế giới",
        "Trở thành quốc gia có thu nhập bình quân đầu người cao nhất thế giới",
        "Xóa bỏ hoàn toàn khoảng cách giàu nghèo trong xã hội",
        "Không còn chịu bất kì tác động nào từ khủng hoảng kinh tế toàn cầu"
      ],
      answer: 0,
      explanation: "Từ tình trạng lạm phát phi mã và thiếu đói trước 1986, Việt Nam đã thoát khủng hoảng, quy mô kinh tế tăng vượt bậc, an ninh lương thực vững chắc.",
      takeaway: "Thành tựu Đổi mới = Thoát khủng hoảng + Đạt thu nhập trung bình + Xuất khẩu nông sản hàng đầu."
    },
    {
      q: "Bài học kinh nghiệm nào của công cuộc Đổi mới nhấn mạnh vai trò quyết định của nhân dân?",
      options: [
        "Kiên trì mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        "Đổi mới vì lợi ích nhân dân, dựa vào nhân dân, quán triệt quan điểm 'dân là gốc'",
        "Ưu tiên phát triển kinh tế đối ngoại bằng mọi giá",
        "Chỉ tiếp thu khoa học công nghệ từ các nước phát triển"
      ],
      answer: 1,
      explanation: "Đảng khẳng định mọi chủ trương đều phải vì nhân dân, phát huy quyền làm chủ của nhân dân theo phương châm 'dân biết, dân bàn, dân làm, dân kiểm tra'.",
      takeaway: "Bài học then chốt = Quán triệt sâu sắc quan điểm 'Dân là gốc'."
    },
    {
      q: "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO) vào năm nào?",
      options: ["1995", "1998", "2007", "2015"],
      answer: 2,
      explanation: "Ngày 11-1-2007, Việt Nam chính thức trở thành thành viên thứ 150 của WTO, mở rộng cánh cửa hội nhập kinh tế toàn cầu.",
      takeaway: "Năm 2007 = Việt Nam gia nhập WTO (thành viên thứ 150)."
    }
  ],
  12: [
    {
      q: "Chủ trương cứu nước và hoạt động đối ngoại của cụ Phan Bội Châu đầu thế kỉ XX gắn liền với phong trào nào?",
      options: [
        "Phong trào Duy Tân ở Trung Kì",
        "Phong trào Đông Du sang Nhật Bản (1905 - 1908)",
        "Phong trào Cần Vương kháng chiến",
        "Phong trào Chấn hưng nội hóa"
      ],
      answer: 1,
      explanation: "Năm 1905, Phan Bội Châu sang Nhật Bản cầu viện và tổ chức phong trào Đông Du đưa thanh niên yêu nước sang Nhật học tập.",
      takeaway: "Phan Bội Châu = Phong trào Đông Du (1905) cầu viện Nhật Bản."
    },
    {
      q: "Bản 'Yêu sách của nhân dân An Nam' do Nguyễn Ái Quốc gửi tới Hội nghị Véc-xai vào năm nào?",
      options: ["1911", "1917", "1919", "1920"],
      answer: 2,
      explanation: "Tháng 6-1919, thay mặt Hội những người Việt Nam yêu nước tại Pháp, Nguyễn Ái Quốc gửi bản Yêu sách 8 điểm tới Hội nghị Véc-xai.",
      takeaway: "Năm 1919 = Nguyễn Ái Quốc gửi Yêu sách của nhân dân An Nam tới Hội nghị Véc-xai."
    },
    {
      q: "Trong giai đoạn 1941 - 1945, Mặt trận Việt Minh đã có sự hợp tác đối ngoại với lực lượng Đồng minh nào chống phát xít Nhật?",
      options: [
        "Cơ quan Tình báo Chiến lược Mỹ (OSS)",
        "Quân đội phát xít Đức",
        "Chính phủ bù nhìn Nam Kinh",
        "Bộ chỉ huy quân đội Anh ở Miến Điện"
      ],
      answer: 0,
      explanation: "Mặt trận Việt Minh đã tích cực cứu phi công Mỹ, cung cấp tin tức tình báo và phối hợp với OSS (tiền thân CIA) để cùng chống quân phiệt Nhật.",
      takeaway: "1945 = Việt Minh phối hợp cùng OSS (Mỹ) chống phát xít Nhật."
    }
  ],
  13: [
    {
      q: "Hiệp định Sơ bộ ngày 6-3-1946 giữa Chính phủ VNDCCH và Pháp thể hiện sách lược ngoại giao tài tình nào của Chủ tịch Hồ Chí Minh?",
      options: [
        "Đánh bại hoàn toàn quân Pháp ngay tại Hà Nội",
        "Nhân nhượng có nguyên tắc, 'hòa hoãn với Pháp để đuổi nhanh 20 vạn quân Tưởng' về nước",
        "Từ bỏ hoàn toàn chủ quyền dân tộc",
        "Kêu gọi các nước phương Tây can thiệp quân sự"
      ],
      answer: 1,
      explanation: "Hiệp định Sơ bộ 6-3 là bước lùi chiến lược sáng suốt: tạm hòa hoãn với Pháp để đuổi quân Tưởng về nước, tránh đối đầu hai kẻ thù cùng lúc.",
      takeaway: "Hiệp định Sơ bộ (6-3-1946) = 'Hòa để tiến', nhân nhượng có nguyên tắc."
    },
    {
      q: "Hiệp định Pa-ri về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được chính thức kí kết vào ngày:",
      options: ["27-1-1973", "2-9-1969", "21-7-1954", "30-4-1975"],
      answer: 0,
      explanation: "Ngày 27-1-1973, Hiệp định Pa-ri được kí kết sau gần 5 năm đàm phán kiên cường, buộc quân đội Mỹ và đồng minh phải rút khỏi Việt Nam.",
      takeaway: "27-1-1973 = Kí Hiệp định Pa-ri, Mỹ cam kết tôn trọng độc lập chủ quyền Việt Nam."
    },
    {
      q: "Ý nghĩa to lớn nhất của thắng lợi trên bàn đàm phán Hiệp định Pa-ri năm 1973 là:",
      options: [
        "Khiến Liên Xô và Trung Quốc trực tiếp cử quân đội vào miền Nam",
        "Buộc Mỹ phải rút hết quân viễn chinh về nước, tạo so sánh lực lượng có lợi cho cách mạng giải phóng miền Nam",
        "Khiến chính quyền Sài Gòn tuyên bố đầu hàng ngay lập tức",
        "Thống nhất ngay lập tức hai miền Nam - Bắc"
      ],
      answer: 1,
      explanation: "Hiệp định Pa-ri hoàn thành mục tiêu 'đánh cho Mỹ cút', tạo thời cơ chiến lược mang tính quyết định để tiến lên 'đánh cho Ngụy nhào' năm 1975.",
      takeaway: "Hiệp định Pa-ri 1973 = Đánh cho Mỹ cút, mở đường giải phóng hoàn toàn miền Nam."
    }
  ],
  14: [
    {
      q: "Đường lối đối ngoại của Việt Nam trong thời kì Đổi mới (từ 1986 đến nay) được xác định là:",
      options: [
        "Chỉ duy trì quan hệ ngoại giao với các nước trong khối XHCN",
        "Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển; đa phương hóa, đa dạng hóa quan hệ quốc tế",
        "Liên minh quân sự chặt chẽ với một siêu cường duy nhất",
        "Đóng cửa kinh tế để bảo hộ toàn bộ thị trường trong nước"
      ],
      answer: 1,
      explanation: "Chính sách đối ngoại Đổi mới: Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế.",
      takeaway: "Ngoại giao Đổi mới = Độc lập, tự chủ, đa phương hóa, đa dạng hóa, hội nhập sâu rộng."
    },
    {
      q: "Sự kiện ngoại giao quan trọng năm 1995 đánh dấu bước đột phá bình thường hóa quan hệ giữa Việt Nam và một cựu thù phương Tây là:",
      options: [
        "Bình thường hóa quan hệ ngoại giao với Mỹ (11-7-1995)",
        "Thiết lập quan hệ với Vương quốc Anh",
        "Kí kết hiệp ước tương trợ quân sự với Pháp",
        "Gia nhập Liên minh châu Âu"
      ],
      answer: 0,
      explanation: "Ngày 11-7-1995, Việt Nam và Hoa Kỳ chính thức tuyên bố bình thường hóa quan hệ ngoại giao, khép lại quá khứ chiến tranh đau thương.",
      takeaway: "11-7-1995 = Bình thường hóa quan hệ ngoại giao Việt Nam - Hoa Kỳ."
    },
    {
      q: "Hình tượng nào được Tổng Bí thư Nguyễn Phú Trọng dùng để đúc kết trường phái đối ngoại đặc sắc của Việt Nam hiện nay?",
      options: [
        "Ngoại giao Cây sồi cứng rắn",
        "Ngoại giao Cây tre Việt Nam: gốc vững, thân chắc, cành uyển chuyển",
        "Ngoại giao Bàn cờ chiến lược",
        "Ngoại giao Cửa mở tuyệt đối"
      ],
      answer: 1,
      explanation: "Trường phái Ngoại giao Cây tre Việt Nam kết hợp nhuần nhuyễn giữa tính kiên định về nguyên tắc lợi ích quốc gia và tính linh hoạt, uyển chuyển về sách lược.",
      takeaway: "Ngoại giao Cây tre = Gốc vững, thân chắc, cành uyển chuyển."
    }
  ],
  15: [
    {
      q: "Chủ tịch Hồ Chí Minh sinh ngày, tháng, năm nào và tại quê hương nào?",
      options: [
        "19-5-1890 tại Nam Đàn, Nghệ An",
        "5-6-1911 tại Sài Gòn",
        "2-9-1890 tại Hương Sơn, Hà Tĩnh",
        "3-2-1930 tại Cao Bằng"
      ],
      answer: 0,
      explanation: "Bác Hồ sinh ngày 19-5-1890 tại làng Hoàng Trù, quê mẹ và lớn lên tại làng Kim Liên, quê cha (xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An).",
      takeaway: "19-5-1890 = Ngày sinh Chủ tịch Hồ Chí Minh tại Nam Đàn, Nghệ An."
    },
    {
      q: "Ngày 5-6-1911, từ bến cảng Nhà Rồng (Sài Gòn), người thanh niên Nguyễn Tất Thành đã ra đi với mục đích gì?",
      options: [
        "Sang Pháp để làm quan chức cho triều đình Huế",
        "Sang các nước phương Tây tìm hiểu thực chất và tìm con đường cứu nước đúng đắn cho dân tộc",
        "Đi du lịch vòng quanh thế giới",
        "Cầu viện vũ khí của chính phủ Pháp"
      ],
      answer: 1,
      explanation: "Nguyễn Tất Thành muốn sang phương Tây để xem họ làm thế nào rồi trở về giúp đồng bào, tìm con đường cứu nước khác với các bậc tiền bối.",
      takeaway: "5-6-1911 từ Cảng Nhà Rồng = Ra đi tìm đường cứu nước."
    },
    {
      q: "Tổ chức cách mạng tiền thân do Nguyễn Ái Quốc sáng lập tại Quảng Châu (Trung Quốc) vào tháng 6-1925 là:",
      options: [
        "Việt Nam Quang phục hội",
        "Hội Việt Nam Cách mạng Thanh niên",
        "Đông Dương Cộng sản Đảng",
        "Tân Việt Cách mạng Đảng"
      ],
      answer: 1,
      explanation: "Tháng 6-1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên, trực tiếp mở các lớp đào tạo cán bộ và xuất bản báo Thanh niên.",
      takeaway: "Tháng 6-1925 = Thành lập Hội Việt Nam Cách mạng Thanh niên."
    }
  ],
  16: [
    {
      q: "Bước ngoặt quyết định trong nhận thức cứu nước của Nguyễn Ái Quốc năm 1920 là khi Người đọc tác phẩm nào?",
      options: [
        "Tuyên ngôn Độc lập của nước Mỹ",
        "Bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lê-nin",
        "Tuyên ngôn của Đảng Cộng sản của C. Mác và Ph. Ăng-ghen",
        "Khế ước xã hội của Rút-xô"
      ],
      answer: 1,
      explanation: "Tháng 7-1920, đọc Luận cương của Lê-nin, Nguyễn Ái Quốc tìm thấy con đường giải phóng duy nhất cho dân tộc: Con đường cách mạng vô sản.",
      takeaway: "Tháng 7-1920 = Đọc Luận cương của Lê-nin, xác định con đường Cách mạng vô sản."
    },
    {
      q: "Hội nghị Trung ương 8 (5-1941) do Nguyễn Ái Quốc chủ trì tại Pác Bó (Cao Bằng) có quyết sách lịch sử nào?",
      options: [
        "Quyết định phát động ngay lập tức cuộc Toàn quốc kháng chiến",
        "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu và thành lập Mặt trận Việt Minh",
        "Hòa hoãn vô điều kiện với chính quyền Pháp - Nhật",
        "Chuyển toàn bộ cơ quan đầu não sang Liên Xô"
      ],
      answer: 1,
      explanation: "Hội nghị Trung ương 8 hoàn chỉnh chuyển hướng chỉ đạo chiến lược, giương cao ngọn cờ giải phóng dân tộc và lập Mặt trận Việt Minh.",
      takeaway: "Hội nghị TƯ 8 (5-1941) = Đặt giải phóng dân tộc lên trên hết, thành lập Mặt trận Việt Minh."
    },
    {
      q: "Câu nói bất hủ thể hiện ý chí quyết tâm sắt đá của Chủ tịch Hồ Chí Minh trong kháng chiến chống Mỹ là:",
      options: [
        "'Không có gì quý hơn độc lập, tự do!'",
        "'Hòa bình bằng bất cứ giá nào'",
        "'Chúng ta muốn hòa bình, chúng ta phải nhượng bộ'",
        "'Thực túc binh cường'"
      ],
      answer: 0,
      explanation: "Ngày 17-7-1966, trong lời kêu gọi đồng bào và chiến sĩ cả nước, Bác Hồ khẳng định chân lí thời đại: 'Không có gì quý hơn độc lập, tự do!'.",
      takeaway: "'Không có gì quý hơn độc lập, tự do!' = Chân lí thời đại của Bác Hồ."
    }
  ],
  17: [
    {
      q: "Tổ chức Giáo dục, Khoa học và Văn hóa của Liên hợp quốc (UNESCO) vinh danh Chủ tịch Hồ Chí Minh vào năm nào?",
      options: ["1945", "1969", "1987", "2010"],
      answer: 2,
      explanation: "Năm 1987, Đại hội đồng UNESCO tại Paris đã thông qua Nghị quyết số 24C/18.65 vinh danh Chủ tịch Hồ Chí Minh nhân dịp 100 năm ngày sinh của Người.",
      takeaway: "Năm 1987 = UNESCO ra Nghị quyết vinh danh Chủ tịch Hồ Chí Minh."
    },
    {
      q: "Danh hiệu cao quý nào được UNESCO ghi nhận trong Nghị quyết vinh danh Chủ tịch Hồ Chí Minh?",
      options: [
        "Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam",
        "Nhà tư tưởng quân sự vĩ đại nhất thế giới",
        "Chính khách xuất sắc nhất của châu Á",
        "Nhà ngoại giao tài ba nhất của phong trào Không liên kết"
      ],
      answer: 0,
      explanation: "UNESCO ghi nhận Hồ Chí Minh là: 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam'.",
      takeaway: "UNESCO vinh danh = Anh hùng giải phóng dân tộc & Nhà văn hóa kiệt xuất."
    },
    {
      q: "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh đối với thế hệ trẻ ngày nay được thể hiện thiết thực nhất qua:",
      options: [
        "Học thuộc lòng các bài diễn văn mà không cần hành động thực tế",
        "Rèn luyện tinh thần tự học, trách nhiệm công dân, lối sống giản dị, liêm chính và cống hiến vì cộng đồng",
        "Chỉ tham gia phong trào khi có khen thưởng vật chất lớn",
        "Đăng tải các khẩu hiệu trên mạng xã hội mà không thực hành"
      ],
      answer: 1,
      explanation: "Học tập Bác là hành động thiết thực trong cuộc sống hằng ngày: chăm chỉ học tập, trung thực, giản dị, tương thân tương ái và cống hiến cho xã hội.",
      takeaway: "Học tập Bác Hồ = Tự học + Trách nhiệm + Liêm chính + Giản dị + Cống hiến."
    }
  ]
};

// 20 Exam Arena Questions
const examQuestions = [
  {
    id: 1,
    lesson: 1,
    q: "Nguyên tắc hoạt động nào của Liên hợp quốc thể hiện rõ nét nhất quyền bình đẳng của các quốc gia thành viên?",
    options: [
      "Bình đẳng về chủ quyền giữa tất cả các quốc gia thành viên",
      "Quyền phủ quyết tuyệt đối của 5 nước lớn",
      "Ưu tiên các nước đóng góp tài chính nhiều nhất",
      "Can thiệp vào công việc nội bộ của các nước nhỏ"
    ],
    answer: 0,
    explain: "Điều 2 Hiến chương Liên hợp quốc xác định nguyên tắc bình đẳng về chủ quyền của mọi quốc gia thành viên, không phân biệt lớn nhỏ hay chế độ chính trị."
  },
  {
    id: 2,
    lesson: 2,
    q: "Bản chất của Trật tự thế giới hai cực I-an-ta là gì?",
    options: [
      "Sự hợp tác hữu nghị tuyệt đối giữa hai hệ thống chính trị đối lập",
      "Sự phân chia phạm vi ảnh hưởng và địa bàn đóng quân giữa hai siêu cường Liên Xô và Mỹ",
      "Sự thống trị độc tôn của chủ nghĩa tư bản phương Tây",
      "Sự sụp đổ của tất cả các cường quốc thực dân châu Âu"
    ],
    answer: 1,
    explain: "Trật tự I-an-ta phản ánh tương quan lực lượng sau Thế chiến II, chia thế giới thành hai cực chịu ảnh hưởng chi phối của Mỹ và Liên Xô."
  },
  {
    id: 3,
    lesson: 3,
    q: "Điểm khác biệt căn bản giữa trật tự thế giới đa cực ngày nay so với trật tự hai cực I-an-ta là:",
    options: [
      "Không còn bất kì xung đột hay chiến tranh cục bộ nào xảy ra",
      "Có nhiều trung tâm quyền lực cùng tồn tại, vừa hợp tác vừa cạnh tranh, không chịu sự áp đặt độc tôn của một hoặc hai siêu cường",
      "Liên hợp quốc đã giải thể và không còn vai trò gì",
      "Kinh tế các nước hoàn toàn cô lập và tự cấp tự túc"
    ],
    answer: 1,
    explain: "Cục diện đa cực phân bổ quyền lực cho nhiều quốc gia và khối liên kết, tạo thế cân bằng linh hoạt hơn so với sự đối đầu căng thẳng hai cực."
  },
  {
    id: 4,
    lesson: 4,
    q: "Năm quốc gia sáng lập ASEAN năm 1967 gồm:",
    options: [
      "Indonesia, Malaysia, Philippines, Singapore, Thái Lan",
      "Việt Nam, Lào, Campuchia, Thái Lan, Myanmar",
      "Indonesia, Malaysia, Brunei, Singapore, Philippines",
      "Thái Lan, Singapore, Việt Nam, Malaysia, Indonesia"
    ],
    answer: 0,
    explain: "Năm nước thành viên sáng lập (ASEAN 5) kí Tuyên bố Băng Cốc ngày 8-8-1967 là: Indonesia, Malaysia, Philippines, Singapore và Thái Lan."
  },
  {
    id: 5,
    lesson: 5,
    q: "Trụ cột nào trong Cộng đồng ASEAN hướng tới mục tiêu xây dựng một thị trường và cơ sở sản xuất chung thống nhất?",
    options: [
      "Cộng đồng Chính trị - An ninh (APSC)",
      "Cộng đồng Kinh tế ASEAN (AEC)",
      "Cộng đồng Văn hóa - Xã hội (ASCC)",
      "Cộng đồng Khoa học Công nghệ (ASTC)"
    ],
    answer: 1,
    explain: "AEC (Cộng đồng Kinh tế ASEAN) thúc đẩy tự do lưu chuyển hàng hóa, dịch vụ, đầu tư, vốn và lao động kĩ năng trong toàn khối."
  },
  {
    id: 6,
    lesson: 6,
    q: "Khẩu hiệu đấu tranh nào được Đảng ta đề ra trong Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta' (12-3-1945)?",
    options: [
      "'Đánh đổ đế quốc và phong kiến tay sai'",
      "'Phá kho thóc của Nhật để giải quyết nạn đói'",
      "'Ủng hộ quân Đồng minh giải giáp phát xít'",
      "'Thực hiện người cày có ruộng'"
    ],
    answer: 1,
    explain: "Phong trào 'Phá kho thóc Nhật cứu đói' đáp ứng đúng nguyện vọng cấp bách của nhân dân, dấy lên cao trào kháng Nhật cứu nước sôi sục."
  },
  {
    id: 7,
    lesson: 6,
    q: "Ngày 2-9-1945 đi vào lịch sử dân tộc Việt Nam với sự kiện vĩ đại nào?",
    options: [
      "Tổng khởi nghĩa giành chính quyền thắng lợi ở Hà Nội",
      "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa",
      "Vua Bảo Đại nộp ấn kiếm thoái vị",
      "Ủy ban Dân tộc Giải phóng ra đời"
    ],
    answer: 1,
    explain: "Bản Tuyên ngôn Độc lập do Bác Hồ tuyên đọc ngày 2-9-1945 đã tuyên bố trước quốc dân và thế giới nền độc lập tự do của Tổ quốc."
  },
  {
    id: 8,
    lesson: 7,
    q: "Ý nghĩa chiến lược của chiến thắng Việt Bắc thu - đông năm 1947 là:",
    options: [
      "Đánh bại hoàn toàn ý đồ 'đánh nhanh thắng nhanh' của thực dân Pháp, bảo vệ an toàn căn cứ địa kháng chiến",
      "Buộc thực dân Pháp phải kí Hiệp định Giơ-ne-vơ",
      "Giúp ta giành quyền chủ động trên chiến trường chính Bắc Bộ",
      "Giải phóng hoàn toàn các đô thị miền Bắc"
    ],
    answer: 0,
    explain: "Chiến thắng Việt Bắc 1947 bẻ gãy cuộc tiến công quy mô lớn của Pháp, bảo vệ cơ quan đầu não và buộc Pháp chuyển sang đánh lâu dài."
  },
  {
    id: 9,
    lesson: 7,
    q: "Phương châm tác chiến được Đại tướng Võ Nguyên Giáp thay đổi mang tính quyết định tại chiến trường Điện Biên Phủ (1954) là:",
    options: [
      "Từ 'Đánh du kích' sang 'Đánh trận địa'",
      "Từ 'Đánh nhanh, thắng nhanh' sang 'Đánh chắc, tiến chắc'",
      "Từ 'Phòng ngự chiều sâu' sang 'Tổng phản công'",
      "Từ 'Đánh chắc, tiến chắc' sang 'Tập kích thần tốc'"
    ],
    answer: 1,
    explain: "Quyết định chuyển từ 'đánh nhanh thắng nhanh' sang 'đánh chắc tiến chắc' ngày 26-1-1954 là quyết định sáng suốt bậc nhất bảo đảm toàn thắng cho Điện Biên Phủ."
  },
  {
    id: 10,
    lesson: 8,
    q: "Chiến lược 'Chiến tranh đặc biệt' (1961 - 1965) của đế quốc Mỹ ở miền Nam được tiến hành theo công thức nào?",
    options: [
      "Quân đội viễn chinh Mỹ giữ vai trò nòng cốt kết hợp không quân",
      "Quân đội tay sai Sài Gòn dưới sự chỉ huy của cố vấn quân sự Mỹ cùng vũ khí, phương tiện chiến tranh của Mỹ",
      "Quân đội các nước chư hầu của Mỹ trực tiếp tham chiến",
      "Chỉ sử dụng phong tỏa hải quân và cấm vận kinh tế"
    ],
    answer: 1,
    explain: "'Chiến tranh đặc biệt' dùng quân đội ngụy tay sai làm lực lượng chiến đấu chính, ấp chiến lược làm 'quốc sách' dưới sự chỉ đạo của cố vấn Mỹ."
  },
  {
    id: 11,
    lesson: 8,
    q: "Trận quyết chiến trên không 12 ngày đêm cuối năm 1972 ở Hà Nội và các tỉnh miền Bắc được ngợi ca là:",
    options: [
      "Chiến thắng Đường 9 - Khe Sanh",
      "Trận 'Điện Biên Phủ trên không'",
      "Chiến dịch Hồ Chí Minh",
      "Trận phản kích Vạn Tường"
    ],
    answer: 1,
    explain: "Chiến thắng 'Điện Biên Phủ trên không' đập tan cuộc tập kích chiến lược bằng B-52 của Mỹ, buộc Mỹ phải kí Hiệp định Pa-ri rút quân về nước."
  },
  {
    id: 12,
    lesson: 9,
    q: "Ý nghĩa quốc tế cao cả của cuộc chiến đấu bảo vệ biên giới Tây Nam (1977 - 1979) là:",
    options: [
      "Mở rộng biên giới hành chính của Việt Nam",
      "Giúp nhân dân Campuchia thoát khỏi thảm họa diệt chủng tàn bạo của tập đoàn Pôn Pốt - Iêng Xa-ri",
      "Thiết lập căn cứ quân sự thường trực tại Đông Dương",
      "Gia nhập ngay lập tức các tổ chức phòng thủ khu vực"
    ],
    answer: 1,
    explain: "Quân tình nguyện Việt Nam đã thực hiện nghĩa vụ quốc tế cao đẹp, cùng lực lượng cứu nước Campuchia hồi sinh đất nước Chùa Tháp khỏi nạn diệt chủng."
  },
  {
    id: 13,
    lesson: 10,
    q: "Khâu đột phá đầu tiên mở đường cho công cuộc Đổi mới toàn diện đất nước năm 1986 là:",
    options: [
      "Đổi mới trong lĩnh vực nông nghiệp (Khoán 10, công nhận kinh tế hộ gia đình)",
      "Đổi mới hệ thống tiền tệ",
      "Cải cách thủ tục hành chính tư pháp",
      "Tư nhân hóa toàn bộ doanh nghiệp nhà nước"
    ],
    answer: 0,
    explain: "Đổi mới nông nghiệp (Khoán 100 rồi Chỉ thị Khoán 10 năm 1988) đã cởi trói sức sản xuất nông dân, giải quyết triệt để nạn thiếu đói kinh niên."
  },
  {
    id: 14,
    lesson: 11,
    q: "Thành tựu giảm nghèo của Việt Nam trong thời kì Đổi mới được cộng đồng quốc tế đánh giá là:",
    options: [
      "Một trong những điểm sáng ấn tượng nhất về thực hiện Mục tiêu Thiên niên kỉ của Liên hợp quốc",
      "Chưa đạt được bất kì kết quả thực chất nào",
      "Chỉ tập trung giảm nghèo tại hai đô thị lớn Hà Nội và TP.HCM",
      "Hoàn toàn phụ thuộc vào nguồn cứu trợ nhân đạo nước ngoài"
    ],
    answer: 0,
    explain: "Việt Nam đưa tỉ lệ hộ nghèo từ trên 60% xuống dưới 3%, được Liên hợp quốc vinh danh là điểm sáng toàn cầu về xóa đói giảm nghèo."
  },
  {
    id: 15,
    lesson: 12,
    q: "Điểm mới tiến bộ nhất trong tư duy cứu nước của Nguyễn Ái Quốc so với các nhà yêu nước tiền bối là:",
    options: [
      "Không dựa vào sự giúp đỡ của bất kì nước đế quốc nào, mà đi vào quần chúng nhân dân và gắn cách mạng Việt Nam với cách mạng thế giới",
      "Tìm kiếm viện trợ tài chính từ triều đình Mãn Thanh",
      "Vận động vua Khải Định ban hành cải cách hiến pháp",
      "Chỉ tổ chức khởi nghĩa vũ trang ở các đô thị lớn"
    ],
    answer: 0,
    explain: "Nguyễn Ái Quốc nhìn rõ bản chất thực dân, sang phương Tây tìm hiểu và kết nối cuộc đấu tranh của dân tộc Việt Nam với phong trào vô sản quốc tế."
  },
  {
    id: 16,
    lesson: 13,
    q: "Bài học cốt lõi từ các cuộc đàm phán ngoại giao (Giơ-ne-vơ 1954, Pa-ri 1973) của dân tộc ta là:",
    options: [
      "Ngoại giao phụ thuộc hoàn toàn vào lập trường của các nước đồng minh lớn",
      "Ngoại giao phải dựa trên thực lực chiến trường, kiên định nguyên tắc độc lập chủ quyền nhưng linh hoạt về sách lược",
      "Chấp nhận mọi điều kiện thỏa hiệp để tránh xung đột quân sự",
      "Không bao giờ đàm phán khi chiến tranh chưa kết thúc"
    ],
    answer: 1,
    explain: "Bác Hồ đúc kết: 'Thực lực là cái chiêng mà ngoại giao là cái tiếng, chiêng có to thì tiếng mới vang'. Đấu tranh ngoại giao luôn gắn liền với thắng lợi quân sự."
  },
  {
    id: 17,
    lesson: 14,
    q: "Thành tựu ngoại giao lớn của Việt Nam trong việc giải quyết hòa bình các vấn đề biên giới lãnh thổ là:",
    options: [
      "Hoàn thành phân giới cắm mốc trên đất liền với Trung Quốc, Lào, Campuchia và phân định Vịnh Bắc Bộ",
      "Từ bỏ chủ quyền tại các vùng biển xa để giữ hòa khí",
      "Chỉ áp dụng thỏa thuận miệng không cần văn bản pháp lí",
      "Chuyển toàn bộ quyền quản lí biên giới cho các tổ chức quốc tế"
    ],
    answer: 0,
    explain: "Việt Nam đã đàm phán kí kết Hiệp ước biên giới trên đất liền với Trung Quốc (1999), Lào, Campuchia và Hiệp định phân định Vịnh Bắc Bộ (2000)."
  },
  {
    id: 18,
    lesson: 15,
    q: "Chủ tịch Hồ Chí Minh đã tiếp thu những giá trị văn hóa nào để hình thành nhân cách và tư tưởng của mình?",
    options: [
      "Thuần túy sao chép văn hóa cổ điển Trung Hoa",
      "Kế thừa truyền thống văn hóa tốt đẹp của dân tộc kết hợp tinh hoa văn hóa phương Đông và phương Tây",
      "Chỉ tiếp nhận tư tưởng công nghiệp hiện đại của Mỹ",
      "Xa lánh mọi giá trị văn hóa truyền thống phương Đông"
    ],
    answer: 1,
    explain: "Người kết tinh truyền thống yêu nước nhân ái của dân tộc với triết lí Phật giáo, Nho giáo tiến bộ và tư tưởng tự do bình đẳng bác ái của nhân loại."
  },
  {
    id: 19,
    lesson: 16,
    q: "Công lao to lớn đầu tiên và có ý nghĩa quyết định nhất của Nguyễn Ái Quốc đối với lịch sử dân tộc là:",
    options: [
      "Thành lập Mặt trận Liên Việt",
      "Tìm ra con đường cứu nước đúng đắn cho dân tộc - Con đường cách mạng vô sản",
      "Tổ chức phong trào Đông Du đưa du học sinh sang Nhật Bản",
      "Chỉ huy trực tiếp chiến dịch Điện Biên Phủ"
    ],
    answer: 1,
    explain: "Tìm ra con đường cứu nước vô sản là công lao số 1 của Người, chấm dứt cuộc khủng hoảng sâu sắc về đường lối cứu nước kéo dài nửa thế kỉ."
  },
  {
    id: 20,
    lesson: 17,
    q: "Nghị quyết của UNESCO năm 1987 ghi nhận di sản Hồ Chí Minh là:",
    options: [
      "Một đóng góp quan trọng vào cuộc đấu tranh chung của các dân tộc vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội",
      "Chỉ có ý nghĩa trong phạm vi khu vực Đông Nam Á",
      "Thuần túy là di sản văn học nghệ thuật",
      "Một tác phẩm nghiên cứu lịch sử cổ đại"
    ],
    answer: 0,
    explain: "UNESCO khẳng định sự nghiệp của Người là biểu tượng kiệt xuất của khát vọng giải phóng con người và đóng góp to lớn cho nền hòa bình thế giới."
  }
];

// Write dataset
const fullData = {
  lessonThemes,
  lessonQuizzes,
  examQuestions
};

fs.writeFileSync(
  'C:/Users/ADMIN/.gemini/antigravity/scratch/su12_interactive_data.js',
  'module.exports = ' + JSON.stringify(fullData, null, 2),
  'utf8'
);

console.log('Saved su12_interactive_data.js successfully!');
