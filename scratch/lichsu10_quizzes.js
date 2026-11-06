// scratch/lichsu10_quizzes.js
// 65 Câu hỏi trắc nghiệm Lịch sử 10 (5 câu/bài x 13 bài) có đáp án và giải thích chi tiết

const quizzes = {
  1: [
    {
      q: "Đặc điểm cơ bản nhất giúp phân biệt 'Hiện thực lịch sử' với 'Lịch sử được con người nhận thức' là gì?",
      options: [
        "Hiện thực lịch sử tồn tại hoàn toàn khách quan, duy nhất và không thể thay đổi; còn nhận thức lịch sử mang cả yếu tố khách quan lẫn chủ quan và có thể được bổ sung, điều chỉnh",
        "Hiện thực lịch sử luôn thay đổi theo ý muốn của người viết sử, còn nhận thức lịch sử là bất biến",
        "Hiện thực lịch sử chỉ có trong truyện thần thoại, còn nhận thức lịch sử là các hiện vật dưới lòng đất",
        "Hai khái niệm này hoàn toàn đồng nhất với nhau trong mọi trường hợp"
      ],
      ans: 0,
      exp: "Hiện thực lịch sử là những gì đã diễn ra trong quá khứ, tồn tại khách quan, độc lập và không thể thay đổi; còn lịch sử được con người nhận thức phụ thuộc vào nguồn sử liệu, phương pháp, góc nhìn và mục đích của người tái hiện."
    },
    {
      q: "Khi nghiên cứu một sự kiện lịch sử trong mối liên hệ với các sự kiện khác diễn ra cùng thời điểm và không gian liên quan, nhà sử học đang vận dụng phương pháp tiếp cận nào?",
      options: [
        "Tiếp cận lịch đại (theo trục thời gian trước – sau)",
        "Tiếp cận đồng đại (cùng thời điểm / bối cảnh)",
        "Tiếp cận viễn tưởng",
        "Tiếp cận truyền khẩu dân gian"
      ],
      ans: 1,
      exp: "Sử học tái hiện sự kiện trong mối liên hệ lịch đại (theo dòng thời gian) và đồng đại (xét các sự kiện, hiện tượng diễn ra cùng thời điểm trong mối tương quan bối cảnh)."
    },
    {
      q: "Hàng vạn mũi tên đồng ba cạnh và khuôn đúc được các nhà khảo cổ tìm thấy tại Cầu Vực (Cổ Loa, Đông Anh, Hà Nội) thuộc loại nguồn sử liệu nào?",
      options: [
        "Sử liệu truyền khẩu",
        "Sử liệu chữ viết (thành văn)",
        "Sử liệu hiện vật (khảo cổ)",
        "Sử liệu điện tử"
      ],
      ans: 2,
      exp: "Mũi tên đồng và khuôn đúc Cổ Loa là những di vật vật chất của cư dân thời Âu Lạc còn lưu giữ lại, thuộc nhóm sử liệu hiện vật (khảo cổ) – chứng tích trực tiếp của quá khứ."
    },
    {
      q: "Ví dụ về tấm bia tưởng niệm hai mặt tại đảo Mác-tan (Philippines) viết về trận chiến ngày 27/4/1521 giữa La-pu-la-pu và Ma-gien-lăng minh chứng cho điều gì?",
      options: [
        "Trận Mác-tan năm 1521 chưa từng xảy ra trong hiện thực lịch sử",
        "Cùng một hiện thực lịch sử duy nhất nhưng có thể có những nhận thức, đánh giá khác nhau tuỳ thuộc vào góc nhìn và lập trường của chủ thể nhận thức",
        "Sử học không cần sử dụng sử liệu khi nghiên cứu quá khứ",
        "Hiện thực lịch sử có thể tự thay đổi sau mỗi thế kỉ"
      ],
      ans: 1,
      exp: "Trận Mác-tan (1521) là hiện thực lịch sử duy nhất, nhưng mặt bia của người Philippines tôn vinh La-pu-la-pu chống ngoại xâm, còn mặt bia của người Tây Ban Nha ghi nhận Ma-gien-lăng hy sinh trong chuyến thám hiểm vòng quanh thế giới."
    },
    {
      q: "Hai chức năng cơ bản của khoa học Lịch sử (Sử học) là gì?",
      options: [
        "Chức năng nhận thức và chức năng giáo dục",
        "Chức năng giải trí và chức năng thương mại",
        "Chức năng dự báo thời tiết và chức năng địa chất",
        "Chức năng sáng tác hư cấu và chức năng biểu diễn"
      ],
      ans: 0,
      exp: "Sử học có hai chức năng cơ bản gắn bó chặt chẽ: Chức năng nhận thức (khôi phục, làm rõ bản chất và quy luật quá khứ) và Chức năng giáo dục (bồi dưỡng tư tưởng, lòng yêu nước, đạo đức, bài học kinh nghiệm)."
    }
  ],

  2: [
    {
      q: "Vì sao con người cần phải học tập và khám phá lịch sử suốt đời?",
      options: [
        "Vì các sự kiện trong quá khứ luôn tự biến mất mỗi ngày",
        "Vì quá khứ còn nhiều khoảng trống, bí ẩn và việc phát hiện sử liệu mới, phương pháp mới giúp nhận thức lịch sử liên tục được bổ sung, đồng thời giúp hiểu hiện tại và định hướng tương lai",
        "Vì chỉ có người cao tuổi mới được phép đọc sách lịch sử",
        "Vì lịch sử chỉ phục vụ duy nhất cho các kì thi trong nhà trường phổ thông"
      ],
      ans: 1,
      exp: "Tri thức lịch sử gắn liền với cuộc sống, trong khi quá khứ còn nhiều bí ẩn và nguồn sử liệu/phương pháp mới liên tục xuất hiện, đòi hỏi con người phải tìm tòi, học tập suốt đời."
    },
    {
      q: "Khi vận dụng các bài học kinh nghiệm từ lịch sử vào giải quyết những vấn đề của cuộc sống hiện tại, nguyên tắc quan trọng nhất cần tuân thủ là gì?",
      options: [
        "Sao chép và áp dụng máy móc nguyên xi cách làm của người xưa cho mọi hoàn cảnh mới",
        "Phải đặt bài học lịch sử trong sự đối chiếu, so sánh cụ thể về bối cảnh thời đại, tránh áp dụng máy móc, giáo điều",
        "Bỏ qua toàn bộ dữ kiện lịch sử để tự suy diễn theo ý thích",
        "Chỉ áp dụng các sự kiện lịch sử nước ngoài, bỏ qua lịch sử dân tộc"
      ],
      ans: 1,
      exp: "Mỗi sự kiện quá khứ đều gắn với điều kiện lịch sử cụ thể; khi vận dụng bài học lịch sử vào hiện tại phải phân tích, so sánh bối cảnh để vận dụng sáng tạo, phù hợp."
    },
    {
      q: "Trong quy trình 5 bước sưu tầm, thu thập và xử lí sử liệu, khâu 'Phân loại, đánh giá, thẩm định độ tin cậy và giá trị thông tin của các nguồn tư liệu' thuộc hoạt động nào?",
      options: [
        "Xử lí sử liệu",
        "Tưởng tượng lịch sử",
        "Hư cấu văn học",
        "Trùng tu kiến trúc"
      ],
      ans: 0,
      exp: "Sưu tầm/thu thập là tìm kiếm và tập hợp tư liệu; còn xử lí sử liệu là phân loại, đánh giá, thẩm định, đối chiếu nguồn để xác định độ xác thực và giá trị thông tin."
    },
    {
      q: "Trình tự đúng của quy trình sưu tầm, thu thập và xử lí sử liệu là gì?",
      options: [
        "Trình bày kết quả → Xác định vấn đề → Thu thập tư liệu → Xử lí sử liệu",
        "Xác định câu hỏi/vấn đề và phạm vi → Lập danh mục & tìm nguồn sử liệu → Thu thập, bảo quản thông tin → Phân loại, đánh giá, thẩm định (xử lí) → Giải thích và trình bày kết quả",
        "Phân loại tư liệu → Viết báo cáo → Đặt câu hỏi nghiên cứu",
        "Chỉ cần tìm một nguồn duy nhất trên mạng xã hội rồi chép lại"
      ],
      ans: 1,
      exp: "Quy trình nghiên cứu sử liệu khoa học đi qua 5 bước chặt chẽ từ xác định câu hỏi/phạm vi, lập danh mục nguồn, thu thập, thẩm định xử lí đến trình bày kết quả khách quan."
    },
    {
      q: "Ngành công nghiệp văn hoá (điện ảnh, trò chơi điện tử, bảo tàng, du lịch, kiến trúc) có mối liên hệ như thế nào với tri thức lịch sử?",
      options: [
        "Hoàn toàn tách biệt, không sử dụng bất kì chất liệu lịch sử nào",
        "Lịch sử và văn hoá là nguồn cảm hứng, chất liệu cốt lõi giúp tạo ra các sản phẩm công nghiệp văn hoá giàu bản sắc và giá trị kinh tế – giáo dục",
        "Công nghiệp văn hoá chỉ được phép sao chép nguyên văn sách giáo khoa",
        "Chỉ có ngành khảo cổ học mới cần đến kiến thức lịch sử"
      ],
      ans: 1,
      exp: "Tri thức lịch sử và di sản văn hoá là nguồn chất liệu vô tận nuôi dưỡng sáng tạo trong điện ảnh, văn học, du lịch, thiết kế, bảo tàng và truyền thông."
    }
  ],

  3: [
    {
      q: "Loại hình di sản nào sau đây thuộc nhóm 'Di sản văn hoá phi vật thể'?",
      options: [
        "Hoàng thành Thăng Long và Thành nhà Hồ",
        "Khu đền tháp Mỹ Sơn và Phố cổ Hội An",
        "Nhã nhạc cung đình Huế, Không gian văn hoá Cồng chiêng Tây Nguyên và Dân ca Quan họ Bắc Ninh",
        "Trống đồng Ngọc Lũ và Cửu đỉnh Huế"
      ],
      ans: 2,
      exp: "Nhã nhạc cung đình Huế, Cồng chiêng Tây Nguyên, Dân ca Quan họ là các nghệ thuật trình diễn, tập quán, tri thức dân gian thuộc Di sản văn hoá phi vật thể."
    },
    {
      q: "Vai trò quan trọng nhất của Sử học đối với công tác bảo tồn và trùng tu các di tích lịch sử – văn hoá là gì?",
      options: [
        "Thay thế toàn bộ vật liệu cổ bằng bê tông cốt thép hiện đại để tiết kiệm chi phí",
        "Cung cấp căn cứ khoa học xác thực về nguồn gốc, niên đại, cấu trúc và giá trị di sản để bảo vệ tính nguyên gốc, tính toàn vẹn, tránh làm biến dạng di tích",
        "Cho phép thương mại hoá tuỳ tiện mọi không gian tâm linh của di tích",
        "Xoá bỏ các lễ hội truyền thống gắn với di tích"
      ],
      ans: 1,
      exp: "Sử học nghiên cứu lịch sử hình thành, cấu trúc và ý nghĩa của di sản, cung cấp cơ sở khoa học để trùng tu đúng nguyên trạng, giữ gìn tính xác thực và toàn vẹn."
    },
    {
      q: "Du lịch văn hoá tác động tích cực trở lại đối với Sử học và công tác bảo tồn di sản như thế nào?",
      options: [
        "Tạo ra nguồn lực tài chính tái đầu tư cho việc tu bổ, tôn tạo di sản, tạo sinh kế cho cộng đồng và thúc đẩy nhu cầu tìm hiểu, gìn giữ giá trị lịch sử",
        "Làm cho tất cả các di tích cổ đều không cần bảo vệ nữa",
        "Giúp thay thế hoàn toàn công việc nghiên cứu của các nhà sử học",
        "Xoá bỏ vai trò của cộng đồng cư dân địa phương"
      ],
      ans: 0,
      exp: "Du lịch tạo nguồn thu kinh tế hỗ trợ trùng tu di tích, quảng bá giá trị lịch sử ra thế giới và nâng cao ý thức bảo vệ di sản của chính quyền cùng cộng đồng."
    },
    {
      q: "Nguy cơ lớn nhất đối với di sản văn hoá khi phát triển du lịch thiếu quy hoạch và quản lí kém là gì?",
      options: [
        "Khách du lịch hiểu biết thêm về lịch sử địa phương",
        "Tình trạng quá tải gây xuống cấp di tích, ô nhiễm môi trường và thương mại hoá làm sai lệch, biến dạng bản sắc văn hoá gốc",
        "Tăng nguồn thu hợp pháp cho quỹ bảo tồn di sản",
        "Các nghệ nhân dân gian được truyền dạy nghề cho thế hệ trẻ"
      ],
      ans: 1,
      exp: "Nếu chạy theo lợi nhuận trước mắt mà buông lỏng quản lí, lượng khách quá tải và xây dựng xâm lấn sẽ làm hư hại cảnh quan, biến tướng lễ hội và phá huỷ di sản."
    },
    {
      q: "Để phát huy giá trị di sản văn hoá một cách bền vững trong đời sống hiện tại, giải pháp nào sau đây là ĐÚNG?",
      options: [
        "Đóng cửa tuyệt đối mọi di tích, không cho bất kì ai tiếp cận hay nghiên cứu",
        "Kết hợp hài hoà giữa bảo tồn và khai thác có trách nhiệm, tôn trọng cộng đồng chủ thể sở hữu di sản, gắn di sản với giáo dục trải nghiệm và giới hạn sức chứa hợp lí",
        "Phá bỏ các nhà cổ xuống cấp để xây trung tâm thương mại cao tầng",
        "Sửa đổi toàn bộ nội dung lễ hội truyền thống theo thị hiếu giải trí nhất thời"
      ],
      ans: 1,
      exp: "Phát huy bền vững đòi hỏi đặt bảo tồn tính xác thực lên hàng đầu, tôn trọng cộng đồng chủ thể và gắn kết với giáo dục, du lịch có trách nhiệm."
    }
  ],

  4: [
    {
      q: "Điểm khác biệt cơ bản giữa hai khái niệm 'Văn hoá' và 'Văn minh' là gì?",
      options: [
        "Văn minh xuất hiện cùng lúc với sự xuất hiện của loài người, còn văn hoá chỉ mới xuất hiện ở thế kỉ XX",
        "Văn hoá là toàn bộ giá trị vật chất và tinh thần do con người sáng tạo ra từ khi xuất hiện; còn văn minh là trạng thái phát triển cao của văn hoá khi xã hội đã có nhà nước, đô thị và chữ viết",
        "Văn hoá chỉ bao gồm các công trình kiến trúc bằng đá, còn văn minh chỉ bao gồm âm nhạc dân gian",
        "Chỉ có phương Tây mới có văn minh, còn phương Đông chỉ có văn hoá"
      ],
      ans: 1,
      exp: "Văn hoá ra đời cùng với loài người (từ thời nguyên thuỷ); khi xã hội phát triển đến trình độ cao (xuất hiện nhà nước, chữ viết, đô thị, phân công lao động) thì hình thành văn minh."
    },
    {
      q: "Người Ai Cập cổ đại đã sáng tạo ra loại chữ viết nào và viết trên chất liệu chủ yếu nào?",
      options: [
        "Chữ hình nêm viết trên các tấm đất sét ướt",
        "Chữ tượng hình viết trên giấy Pa-pi-rút (Papyrus) hoặc khắc trên đá",
        "Chữ Giáp cốt khắc trên mai rùa và xương thú",
        "Bảng chữ cái La-tinh in trên giấy bông"
      ],
      ans: 1,
      exp: "Từ hơn 3.000 năm TCN, cư dân Ai Cập cổ đại sáng tạo chữ tượng hình viết trên giấy làm từ thân cây Pa-pi-rút mọc ven sông Nin hoặc khắc trên đá (giải mã nhờ bia Rosetta)."
    },
    {
      q: "Thành tựu nào sau đây thuộc về nền văn minh Lưỡng Hà cổ đại?",
      options: [
        "Kim tự tháp Ghi-da và Tượng Nhân sư",
        "Chữ hình nêm trên đất sét, Bộ luật thành văn Ha-mu-ra-bi, hệ đếm lục thập phân (cơ số 60) và đền tháp Ziggurat",
        "Tứ đại phát minh (giấy, in, la bàn, thuốc súng) và Vạn Lý Trường Thành",
        "Đấu trường Cô-li-dê và Đại hội thể thao Olympic"
      ],
      ans: 1,
      exp: "Cư dân Lưỡng Hà (Sumer, Babylon) sáng tạo chữ hình nêm, ban hành bộ luật Ha-mu-ra-bi, phát minh hệ đếm 60 (chia 1 giờ = 60 phút, vòng tròn 360 độ) và xây đền tháp Ziggurat."
    },
    {
      q: "Đóng góp vĩ đại nhất của cư dân Ấn Độ cổ – trung đại cho ngành Toán học thế giới là gì?",
      options: [
        "Phát minh ra hệ đếm cơ số 60",
        "Sáng tạo ra 10 chữ số (từ 0 đến 9, đặc biệt là chữ số 0) và hệ thập phân",
        "Lập ra định lí Pi-ta-go và tiên đề hình học Ơ-clít",
        "Chế tạo ra bàn tính gảy bằng gỗ đầu tiên"
      ],
      ans: 1,
      exp: "Người Ấn Độ cổ đại đã sáng tạo ra 10 chữ số (0–9, đặc biệt là số 0 mang ý nghĩa toán học cách mạng) sau đó được người Ả Rập truyền sang châu Âu."
    },
    {
      q: "'Tứ đại phát minh' về kĩ thuật của nền văn minh Trung Hoa thời cổ – trung đại bao gồm những thành tựu nào?",
      options: [
        "Máy hơi nước, đầu máy xe lửa, bóng đèn điện và máy tính",
        "Kĩ thuật làm giấy, kĩ thuật in, la bàn và thuốc súng",
        "Kĩ thuật ướp xác, đóng tàu biển, luyện thép và dệt thảm",
        "Kính thiên văn, nhiệt kế, áp kế và máy phát điện"
      ],
      ans: 1,
      exp: "Bốn phát minh kĩ thuật vĩ đại của Trung Hoa cổ – trung đại là: Kĩ thuật làm giấy (Thái Luân), Kĩ thuật in (Tất Thăng), La bàn và Thuốc súng."
    }
  ],

  5: [
    {
      q: "Hệ thống chữ viết nào của cư dân Hy Lạp – La Mã cổ đại đã trở thành nền tảng cho phần lớn các ngôn ngữ phương Tây hiện đại và chữ Quốc ngữ Việt Nam?",
      options: [
        "Chữ tượng hình Ai Cập cổ đại",
        "Chữ hình nêm Lưỡng Hà",
        "Hệ thống bảng chữ cái Hy Lạp và bảng chữ cái La-tinh (Latin)",
        "Chữ Phạn (Sanskrit) và chữ Hán"
      ],
      ans: 2,
      exp: "Bảng chữ cái Hy Lạp và La-tinh dùng các kí hiệu nguyên âm, phụ âm đơn giản, linh hoạt để ghi âm, đặt nền tảng cho chữ viết phương Tây và chữ Quốc ngữ."
    },
    {
      q: "Những nhà khoa học kiệt xuất nào sau đây là đại diện tiêu biểu của nền Toán học, Vật lí và Y học Hy Lạp cổ đại?",
      options: [
        "Thái Luân, Tất Thăng, Tổ Xung Chi, Hoa Đà",
        "Ta-lét, Pi-ta-go, Ơ-clít, Ác-si-mét và Hi-pô-crát",
        "Giêm Oát, Tô-mát Ê-đi-xơn, Hen-ri Pho",
        "Cô-péc-ních, Ga-li-lê, Lê-ô-na đờ Vanh-xi"
      ],
      ans: 1,
      exp: "Khoa học tự nhiên Hy Lạp cổ đại rực rỡ với Ta-lét, Pi-ta-go, Ơ-clít (hình học), Ác-si-mét (vật lí, nguyên lí đòn bẩy, lực đẩy thuỷ tĩnh) và Hi-pô-crát (y học)."
    },
    {
      q: "Phong trào Văn hoá Phục hưng (thế kỉ XIV – XVII) khởi đầu tại quốc gia nào trước khi lan rộng khắp Tây Âu?",
      options: [
        "Nước Anh",
        "I-ta-li-a (Ý)",
        "Nước Đức",
        "Tây Ban Nha"
      ],
      ans: 1,
      exp: "Phong trào Văn hoá Phục hưng khởi đầu ở I-ta-li-a – nơi lưu giữ nhiều di sản văn minh La Mã cổ đại và có các thành thị thương mại tư bản chủ nghĩa phát triển sớm."
    },
    {
      q: "Nội dung tư tưởng cốt lõi của Phong trào Văn hoá Phục hưng là gì?",
      options: [
        "Bảo vệ tuyệt đối thần quyền của Giáo hội Công giáo và trật tự phong kiến Trung cổ",
        "Đề cao Chủ nghĩa nhân văn: tôn vinh giá trị con người, lí trí, quyền tự do cá nhân và tinh thần khám phá khoa học thực nghiệm; phê phán sự kìm hãm của Giáo hội và phong kiến",
        "Kêu gọi con người từ bỏ cuộc sống trần thế để ẩn cư nơi rừng núi",
        "Phủ nhận toàn bộ di sản văn học nghệ thuật Hy Lạp – La Mã cổ đại"
      ],
      ans: 1,
      exp: "Chủ nghĩa nhân văn (Humanism) là ngọn cờ tư tưởng của Phục hưng: giải phóng con người và khoa học khỏi sự trói buộc của thần học Trung cổ."
    },
    {
      q: "Trong lĩnh vực Thiên văn học thời Phục hưng, nhà bác học Ni-cô-lai Cô-péc-ních (Copernicus) đã đưa ra học thuyết cách mạng nào làm lung lay quan niệm thần học của Giáo hội?",
      options: [
        "Thuyết Địa tâm (Trái Đất đứng yên ở trung tâm vũ trụ)",
        "Thuyết Nhật tâm (Mặt Trời là trung tâm của hệ hành tinh, Trái Đất tự quay quanh trục và quay quanh Mặt Trời)",
        "Thuyết Vạn vật hấp dẫn của Niu-tơn",
        "Thuyết Tương đối rộng của Anh-xtanh"
      ],
      ans: 1,
      exp: "Thuyết Nhật tâm của Cô-péc-ních (được Bruno và Ga-li-lê tiếp tục bảo vệ, chứng minh) đã lật đổ thuyết Địa tâm của Giáo hội, mở đầu cuộc cách mạng khoa học tự nhiên."
    }
  ],

  6: [
    {
      q: "Cách mạng công nghiệp lần thứ nhất bắt đầu từ nửa sau thế kỉ XVIII tại quốc gia nào và khởi đầu trong ngành sản xuất nào?",
      options: [
        "Bắt đầu ở Mỹ trong ngành chế tạo ô tô",
        "Bắt đầu ở Anh trong ngành công nghiệp Dệt",
        "Bắt đầu ở Đức trong ngành công nghiệp Hoá chất",
        "Bắt đầu ở Pháp trong ngành hàng không"
      ],
      ans: 1,
      exp: "Cách mạng công nghiệp lần thứ nhất khởi đầu ở nước Anh từ những năm 60 của thế kỉ XVIII, trước hết trong ngành Dệt (máy kéo sợi Jenny 1764, máy kéo sợi sức nước 1769, máy dệt 1785)."
    },
    {
      q: "Phát minh nào năm 1784 của Giêm Oát (James Watt) được coi là thành tựu trung tâm của Cách mạng công nghiệp lần thứ nhất, tạo nguồn động lực mới cho các ngành công nghiệp và giao thông?",
      options: [
        "Động cơ điện xoay chiều",
        "Máy hơi nước chạy bằng nhiên liệu than đá",
        "Động cơ đốt trong chạy bằng xăng",
        "Lò phản ứng hạt nhân"
      ],
      ans: 1,
      exp: "Máy hơi nước của Giêm Oát (1784) giải phóng nhà máy khỏi sự phụ thuộc vào sức nước ven sông, cung cấp động lực cơ khí cho công nghiệp dệt, khai mỏ, luyện kim, tàu thuỷ và xe lửa."
    },
    {
      q: "Những thành tựu nào sau đây là biểu tượng tiêu biểu của cuộc Cách mạng công nghiệp lần thứ hai (nửa sau thế kỉ XIX – đầu thế kỉ XX)?",
      options: [
        "Máy kéo sợi Jenny, phương pháp luyện sắt Pút-đinh và đầu máy xe lửa hơi nước",
        "Lò luyện thép Bessemer, bóng đèn điện Edison, điện thoại Bell, vô tuyến điện Marconi, động cơ đốt trong, ô tô (Karl Benz, Henry Ford) và máy bay (anh em nhà Wright)",
        "Máy tính điện tử ENIAC, mạng Internet và vệ tinh nhân tạo Sputnik 1",
        "Trí tuệ nhân tạo AI, công nghệ in 3D và Internet vạn vật IoT"
      ],
      ans: 1,
      exp: "Cách mạng công nghiệp lần thứ hai gắn liền với Điện khí hoá, Thép Bessemer, Hoá chất, Dầu mỏ, Động cơ đốt trong, Ô tô, Máy bay và Điện thoại/Vô tuyến điện."
    },
    {
      q: "Về mặt xã hội, hai cuộc cách mạng công nghiệp thời cận đại đã dẫn đến sự hình thành hai giai cấp cơ bản nào trong xã hội tư bản?",
      options: [
        "Giai cấp chủ nô và giai cấp nô lệ",
        "Giai cấp địa chủ phong kiến và giai cấp nông dân lĩnh canh",
        "Giai cấp tư sản công nghiệp và giai cấp vô sản (công nhân công nghiệp)",
        "Tầng lớp quý tộc tăng lữ và tầng lớp nông nô"
      ],
      ans: 2,
      exp: "Sự phát triển của nền đại công nghiệp cơ khí đã làm xuất hiện hai giai cấp cơ bản đối kháng về lợi ích là giai cấp tư sản công nghiệp và giai cấp vô sản công nghiệp."
    },
    {
      q: "Bên cạnh việc làm tăng vọt năng suất lao động và thúc đẩy đô thị hoá, hai cuộc cách mạng công nghiệp thời cận đại đã để lại hệ luỵ tiêu cực nào?",
      options: [
        "Làm cho giao thông vận tải đường bộ và đường thuỷ bị đình trệ",
        "Tình trạng bóc lột sức lao động nặng nề (nhất là phụ nữ và trẻ em), gia tăng chênh lệch giàu nghèo, ô nhiễm môi trường và thúc đẩy các cuộc chiến tranh xâm lược thuộc địa",
        "Khiến dân số ở các thành thị giảm mạnh do di cư hết về nông thôn",
        "Làm biến mất hoàn toàn thương mại quốc tế"
      ],
      ans: 1,
      exp: "Mặt trái của CMCN thời cận đại là điều kiện lao động khắc nghiệt của công nhân, bóc lột lao động trẻ em/phụ nữ, ô nhiễm khói than/dầu mỏ và việc các nước đế quốc đẩy mạnh xâm chiếm thuộc địa."
    }
  ],

  7: [
    {
      q: "Cuộc Cách mạng công nghiệp lần thứ ba (diễn ra từ nửa sau thế kỉ XX) được khởi đầu bằng sự ra đời của thành tựu đột phá nào vào năm 1946 tại Mỹ?",
      options: [
        "Đầu máy xe lửa chạy hơi nước",
        "Máy tính điện tử đầu tiên (ENIAC)",
        "Máy bay chạy bằng động cơ xăng của anh em nhà Wright",
        "Bóng đèn điện sợi đốt của Thomas Edison"
      ],
      ans: 1,
      exp: "Năm 1946, máy tính điện tử đầu tiên ENIAC ra đời tại Mỹ, mở đầu cho kỷ nguyên điện tử học, tin học và tự động hoá của Cách mạng công nghiệp lần thứ ba."
    },
    {
      q: "Nhà khoa học nào đã phát minh ra hệ thống mạng toàn cầu World Wide Web (WWW) vào năm 1990, thúc đẩy sự bùng nổ của Internet trong cuộc Cách mạng công nghiệp lần thứ ba?",
      options: [
        "Tim Béc-nơ-Li (Tim Berners-Lee)",
        "A-lếch-xan-đơ Gra-ham Beo (Alexander Graham Bell)",
        "Hen-ri Bê-sê-mơ (Henry Bessemer)",
        "Giêm Ha-gri-vơ (James Hargreaves)"
      ],
      ans: 0,
      exp: "Năm 1990, nhà khoa học người Anh Tim Berners-Lee phát minh World Wide Web (WWW), giúp người dùng khắp thế giới dễ dàng truy cập và chia sẻ thông tin trên Internet."
    },
    {
      q: "Trong lĩnh vực chinh phục vũ trụ thuộc Cách mạng công nghiệp lần thứ ba, hai cột mốc lịch sử năm 1957 và năm 1969 gắn liền với những sự kiện nào?",
      options: [
        "Chế tạo khinh khí cầu (1957) và thử nghiệm máy bay cánh quạt (1969)",
        "Liên Xô phóng thành công vệ tinh nhân tạo đầu tiên Xpút-ních 1 (1957) và tàu Apollo 11 của Mỹ đưa Nin Am-strong đặt chân lên Mặt Trăng (1969)",
        "Phát minh ra kính thiên văn (1957) và công bố thuyết Nhật tâm (1969)",
        "Xây dựng trạm thuỷ điện đầu tiên (1957) và cáp quang biển (1969)"
      ],
      ans: 1,
      exp: "Năm 1957 Liên Xô phóng vệ tinh Sputnik 1 mở kỷ nguyên vũ trụ; năm 1969 Neil Armstrong đặt bước chân đầu tiên của nhân loại lên Mặt Trăng."
    },
    {
      q: "Những công nghệ trụ cột nào sau đây tạo nên bản chất của cuộc Cách mạng công nghiệp lần thứ tư (Công nghiệp 4.0)?",
      options: [
        "Máy hơi nước, lò luyện sắt Pút-đinh và máy kéo sợi Jenny",
        "Trí tuệ nhân tạo (AI), Internet kết nối vạn vật (IoT), Dữ liệu lớn (Big Data), Điện toán đám mây, In 3D, Công nghệ Nano và Công nghệ sinh học",
        "Động cơ hơi nước và điện báo Morse",
        "Canh tác nông nghiệp thủ công bằng sức kéo động vật"
      ],
      ans: 1,
      exp: "CMCN 4.0 là sự hội tụ giữa công nghệ số, vật lí và sinh học với các trụ cột: AI, IoT, Big Data, Cloud Computing, In 3D, Nano và Công nghệ sinh học hiện đại."
    },
    {
      q: "Trước nguy cơ lan truyền tin giả (fake news) và lừa đảo trên không gian mạng trong thời đại Cách mạng công nghiệp 4.0, hành vi ứng xử nào sau đây là có trách nhiệm?",
      options: [
        "Lập tức chia sẻ ngay mọi bài viết giật gân khi chưa kiểm tra nguồn gốc để câu tương tác",
        "Không vội chia sẻ thông tin chưa kiểm chứng; kiểm tra tác giả, nguồn phát hành, ngày đăng, đối chiếu với các nguồn chính thống và tuân thủ pháp luật an ninh mạng",
        "Cung cấp toàn bộ mật khẩu và dữ liệu cá nhân cho các đường link lạ",
        "Sử dụng trí tuệ nhân tạo để tạo tin đồn thất thiệt công kích người khác"
      ],
      ans: 1,
      exp: "Vận dụng tư duy phê phán sử liệu vào môi trường số: luôn kiểm chứng nguồn tin, tác giả, thời điểm và bằng chứng trước khi tin tưởng hay chia sẻ."
    }
  ],

  8: [
    {
      q: "Trong hành trình phát triển của văn minh Đông Nam Á thời cổ – trung đại, giai đoạn từ thế kỉ VII đến cuối thế kỉ XV có đặc điểm nổi bật là gì?",
      options: [
        "Mới bắt đầu xuất hiện các bộ lạc nguyên thuỷ dùng công cụ đá thô sơ",
        "Là thời kì hình thành và phát triển thịnh đạt của hàng loạt quốc gia phong kiến, văn minh khu vực toả sáng rực rỡ với bản sắc riêng",
        "Là thời kì tất cả các nước Đông Nam Á đã hoàn toàn trở thành thuộc địa của thực dân phương Tây",
        "Là thời kì văn minh Đông Nam Á bị gián đoạn hoàn toàn, không có công trình kiến trúc nào"
      ],
      ans: 1,
      exp: "Từ thế kỉ VII đến cuối thế kỉ XV là giai đoạn phát triển rực rỡ nhất của các vương quốc phong kiến Đông Nam Á (Đại Việt, Chăm-pa, Ăng-co, Pa-gan, Sri Vi-giay-a, Ma-gia-pa-hít...)."
    },
    {
      q: "Trước khi tiếp nhận các tôn giáo lớn từ bên ngoài (Phật giáo, Hin-đu giáo, Hồi giáo, Công giáo), cư dân Đông Nam Á đã có hệ thống tín ngưỡng bản địa chung gồm những hình thức nào?",
      options: [
        "Tín ngưỡng sùng bái tự nhiên, tín ngưỡng phồn thực và tín ngưỡng thờ cúng tổ tiên / người có công",
        "Chỉ thờ duy nhất các vị thần trên đỉnh Ô-lem-pơ của Hy Lạp",
        "Hoàn toàn không có bất kì hình thức tín ngưỡng nào",
        "Chỉ thờ các pharaoh Ai Cập cổ đại"
      ],
      ans: 0,
      exp: "Gắn với nền nông nghiệp lúa nước, cư dân Đông Nam Á có 3 mạch tín ngưỡng bản địa bền vững: sùng bái tự nhiên (thần Lúa, thần Sông, thần Núi), phồn thực (cầu sinh sôi) và thờ cúng tổ tiên."
    },
    {
      q: "Điểm sáng tạo độc đáo của các dân tộc Đông Nam Á trong lĩnh vực chữ viết thời cổ – trung đại được thể hiện ở việc gì?",
      options: [
        "Chỉ sao chép nguyên xi chữ tượng hình Ai Cập mà không thay đổi gì",
        "Từ việc tiếp thu chữ Phạn, chữ Pali (Ấn Độ) và chữ Hán (Trung Hoa), các dân tộc Đông Nam Á đã sáng tạo ra hệ thống chữ viết riêng để ghi tiếng mẹ đẻ (chữ Chăm cổ, Khmer cổ, Thái cổ, Mã Lai cổ, chữ Nôm...)",
        "Cấm sử dụng mọi loại chữ viết trong hành chính và văn học",
        "Chỉ sử dụng duy nhất chữ hình nêm trên đất sét"
      ],
      ans: 1,
      exp: "Tinh thần tự chủ văn hoá của cư dân Đông Nam Á thể hiện rõ ở việc cải biến chữ Phạn, chữ Hán để sáng tạo chữ viết bản địa riêng của dân tộc mình."
    },
    {
      q: "Tác phẩm văn học viết nổi tiếng 'Riêm-kê' của Campuchia và 'Ra-ma-kiên' của Thái Lan được sáng tạo trên cơ sở tiếp biến bộ sử thi nào của Ấn Độ?",
      options: [
        "Sử thi Gin-ga-mét (Lưỡng Hà)",
        "Sử thi I-li-át và Ô-đi-xê (Hy Lạp)",
        "Sử thi Ra-ma-ya-na (Ramayana – Ấn Độ)",
        "Tiểu thuyết Tam quốc diễn nghĩa (Trung Hoa)"
      ],
      ans: 2,
      exp: "Cư dân Campuchia và Thái Lan đã tiếp thu cốt truyện sử thi Ramayana của Ấn Độ nhưng bản địa hoá sâu sắc để tạo nên kiệt tác dân tộc Riêm-kê và Ra-ma-kiên."
    },
    {
      q: "Những công trình kiến trúc nào sau đây là biểu tượng tiêu biểu của văn minh Đông Nam Á thời cổ – trung đại?",
      options: [
        "Kim tự tháp Ghi-da, Đền Pác-tê-nông và Đấu trường Cô-li-dê",
        "Đền Bô-rô-bu-đua (Indonesia), Quần thể Ăng-co Vát / Ăng-co Thom (Campuchia), Thạt Luổng (Lào), Chùa Phật Ngọc (Thái Lan) và Thánh địa Mỹ Sơn (Việt Nam)",
        "Vạn Lý Trường Thành, Tử Cấm Thành và Đền tháp Ziggurat",
        "Nhà thờ Đức Bà Pa-ri và Tháp nghiêng Pi-da"
      ],
      ans: 1,
      exp: "Borobudur, Angkor Wat/Angkor Thom, Thạt Luổng, Chùa Phật Ngọc, Mỹ Sơn là những kỳ quan kiến trúc tôn giáo kết hợp tinh hoa Ấn Độ giáo/Phật giáo với tài năng sáng tạo bản địa Đông Nam Á."
    }
  ],

  9: [
    {
      q: "Nền văn minh Văn Lang – Âu Lạc (văn minh sông Hồng) được hình thành trực tiếp trên đỉnh cao của nền văn hoá khảo cổ nào và gắn với hoạt động kinh tế nền tảng nào?",
      options: [
        "Văn hoá Sa Huỳnh – Kinh tế thương mại biển là chủ đạo",
        "Văn hoá Đông Sơn – Kinh tế nông nghiệp trồng lúa nước kết hợp kĩ thuật luyện đồng phát triển cao",
        "Văn hoá Óc Eo – Kinh tế cảng thị quốc tế",
        "Văn hoá Sông Ấn – Kinh tế du mục thảo nguyên"
      ],
      ans: 1,
      exp: "Văn minh Văn Lang – Âu Lạc phát triển trên cơ sở văn hoá Đông Sơn ở lưu vực sông Hồng, sông Mã, sông Cả với nông nghiệp lúa nước và đỉnh cao đúc trống đồng Đông Sơn."
    },
    {
      q: "Những yếu tố khách quan nào đã thúc đẩy các công xã nông thôn (chiềng, chạ) của người Việt cổ liên kết lại để hình thành nhà nước Văn Lang và Âu Lạc?",
      options: [
        "Nhu cầu đi xâm lược mở rộng lãnh thổ sang các châu lục khác",
        "Yêu cầu liên kết đắp đê trị thuỷ, làm thuỷ lợi phục vụ nông nghiệp lúa nước và đoàn kết đấu tranh chống giặc ngoại xâm",
        "Nhu cầu xây dựng các kim tự tháp bằng đá khổng lồ",
        "Sự áp đặt của các thương nhân phương Tây"
      ],
      ans: 1,
      exp: "Đặc điểm lũ lụt của hệ thống sông Hồng và nguy cơ ngoại xâm từ phương Bắc đòi hỏi cư dân Việt cổ sớm liên kết làng xã để trị thuỷ và giữ nước, thúc đẩy nhà nước Văn Lang – Âu Lạc ra đời sớm."
    },
    {
      q: "Nền văn minh Chăm-pa ở vùng duyên hải miền Trung được hình thành trên cơ sở văn hoá khảo cổ nào và gắn liền với sự kiện lập quốc nào vào năm 192?",
      options: [
        "Văn hoá Đông Sơn – An Dương Vương xây thành Cổ Loa",
        "Văn hoá Sa Huỳnh – Khu Liên lãnh đạo nhân dân Tượng Lâm nổi dậy chống nhà Hán, lập ra nước Lâm Ấp (sau gọi là Chăm-pa)",
        "Văn hoá Óc Eo – hình thành cảng thị Óc Eo ở Nam Bộ",
        "Văn hoá Bắc Sơn – cư dân sống trong hang động"
      ],
      ans: 1,
      exp: "Văn minh Chăm-pa bắt nguồn từ văn hoá đồng sắt Sa Huỳnh; năm 192 Khu Liên lãnh đạo nhân dân huyện Tượng Lâm giành độc lập, lập nước Lâm Ấp (tiền thân vương quốc Chăm-pa)."
    },
    {
      q: "Thành tựu nổi bật của văn minh Chăm-pa về chữ viết và kiến trúc – điêu khắc là gì?",
      options: [
        "Sáng tạo chữ Nôm và xây dựng Văn Miếu – Quốc Tử Giám",
        "Tiếp thu chữ Phạn để sáng tạo chữ Chăm cổ; xây dựng hệ thống đền tháp bằng gạch nung đặc sắc (tiêu biểu là Thánh địa Mỹ Sơn, Phật viện Đồng Dương)",
        "Sáng tạo chữ hình nêm trên đất sét và xây đền Ziggurat",
        "Chỉ sử dụng chữ La-tinh và xây dựng các đấu trường bằng đá cẩm thạch"
      ],
      ans: 1,
      exp: "Người Chăm sớm sáng tạo chữ Chăm cổ trên cơ sở chữ Phạn Ấn Độ và đạt đỉnh cao nghệ thuật xây tháp gạch nung không mạch vữa cùng phù điêu đá tại Mỹ Sơn, Đồng Dương."
    },
    {
      q: "Đặc điểm nổi bật nhất về kinh tế của nền văn minh Phù Nam (thế kỉ I – VII) ở vùng Nam Bộ là gì?",
      options: [
        "Nền kinh tế hoàn toàn khép kín, tự cấp tự túc trên vùng núi đá cao",
        "Kết hợp nông nghiệp lúa nước, thủ công nghiệp chế tác vàng bạc đá quý với thương mại đường biển cực kì phồn thịnh qua cảng thị quốc tế Óc Eo",
        "Chỉ sống bằng nghề săn bắt thú rừng trên thảo nguyên",
        "Chỉ giao thương duy nhất bằng đường bộ qua sa mạc"
      ],
      ans: 1,
      exp: "Gắn với văn hoá Óc Eo và vị trí cửa ngõ hàng hải Nam Bộ, Phù Nam phát triển mạnh kinh tế nông – thương nghiệp cảng thị, kết nối giao thương với Ấn Độ, Trung Hoa, Ba Tư, La Mã."
    }
  ],

  10: [
    {
      q: "Bộ luật thành văn hoàn chỉnh và tiến bộ nhất của nhà nước phong kiến Đại Việt, gồm 722 điều được ban hành dưới thời Lê sơ (thế kỉ XV), có tên gọi là gì?",
      options: [
        "Bộ Hình thư (thời Lý)",
        "Bộ Hình luật (thời Trần)",
        "Bộ Quốc triều hình luật (Luật Hồng Đức – thời Lê sơ)",
        "Bộ Hoàng Việt luật lệ (Luật Gia Long – thời Nguyễn)"
      ],
      ans: 2,
      exp: "Quốc triều hình luật (Luật Hồng Đức) gồm 722 điều được hoàn chỉnh dưới thời Lê Thánh Tông là đỉnh cao pháp luật Đại Việt, bảo vệ chủ quyền, trật tự xã hội và quyền lợi một số mặt của phụ nữ."
    },
    {
      q: "Sự kiện nào dưới vương triều Lý (thế kỉ XI) đã đặt nền móng cho nền giáo dục đại học và khoa cử Nho học chính quy của văn minh Đại Việt?",
      options: [
        "Xây dựng Thành nhà Hồ ở Thanh Hoá (1397)",
        "Dựng Văn Miếu (1070), mở khoa thi Nho học đầu tiên (1075) và thành lập Quốc Tử Giám (1076) tại kinh thành Thăng Long",
        "Đúc Cửu đỉnh tại kinh thành Huế (thế kỉ XIX)",
        "Ban hành tiền giấy Thông bảo hội sao (1396)"
      ],
      ans: 1,
      exp: "Văn Miếu (1070) và Quốc Tử Giám (1076) là trường đại học quốc gia đầu tiên của Đại Việt; đến thời Lê sơ nhà nước định lệ dựng Bia Tiến sĩ để vinh danh người đỗ đạt."
    },
    {
      q: "Trong giai đoạn thế kỉ XVI – XVIII, bên cạnh kinh thành Thăng Long – Kẻ Chợ (36 phố phường), những đô thị và thương cảng nào của Đại Việt đã phát triển sầm uất, thu hút nhiều thương nhân nước ngoài?",
      options: [
        "Phố Hiến (Hưng Yên), Thanh Hà (Thừa Thiên Huế) và Hội An (Quảng Nam)",
        "Chỉ có duy nhất cảng thị Óc Eo cổ đại",
        "Phong Châu và Cổ Loa",
        "Hoa Lư và Lam Kinh"
      ],
      ans: 0,
      exp: "Thế kỉ XVI–XVIII là thời kì hưng khởi của đô thị và ngoại thương Đại Việt với câu ca 'Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến' ở Đàng Ngoài cùng cảng thị Hội An, Thanh Hà, Gia Định ở Đàng Trong."
    },
    {
      q: "Những công trình khoa học nào sau đây thuộc lĩnh vực Sử học, Địa lí, Toán học và Quân sự tiêu biểu của văn minh Đại Việt?",
      options: [
        "Sử ký Tư Mã Thiên, Cửu chương toán thuật và Bản thảo cương mục",
        "Đại Việt sử ký toàn thư (Ngô Sĩ Liên), Dư địa chí (Nguyễn Trãi), Đại thành toán pháp (Lương Thế Vinh), Lập thành toán pháp (Vũ Hữu), Binh thư yếu lược (Trần Quốc Tuấn) và Hổ trướng khu cơ (Đào Duy Từ)",
        "Bộ luật Ha-mu-ra-bi và Sử thi Gin-ga-mét",
        "Thuyết Nhật tâm và Hình học Ơ-clít"
      ],
      ans: 1,
      exp: "Đây là những bộ trước tác tiêu biểu khẳng định trình độ học thuật độc lập và toàn diện của các học giả Đại Việt trên các lĩnh vực Sử học, Địa lí, Toán học và Quân sự."
    },
    {
      q: "Tư tưởng cốt lõi nào xuyên suốt nền văn minh Đại Việt được Trần Quốc Tuấn đúc kết trong câu 'Khoan thư sức dân để làm kế sâu rễ bền gốc' và Nguyễn Trãi khẳng định 'Việc nhân nghĩa cốt ở yên dân'?",
      options: [
        "Tư tưởng bá quyền mở rộng xâm lược các nước láng giềng",
        "Tư tưởng yêu nước gắn liền với nhân nghĩa, thương dân và lấy dân làm gốc",
        "Tư tưởng coi thường nông nghiệp, chỉ phát triển quân sự",
        "Tư tưởng đóng cửa tuyệt đối không giao lưu văn hoá với bên ngoài"
      ],
      ans: 1,
      exp: "Yêu nước, đoàn kết và tư tưởng 'lấy dân làm gốc' (thân dân, yên dân) là sợi chỉ đỏ xuyên suốt tạo nên sức sống trường tồn của văn minh Đại Việt."
    }
  ],

  11: [
    {
      q: "Theo phân loại khoa học được trình bày trong sách giáo khoa Lịch sử 10, cộng đồng 54 dân tộc trên đất nước Việt Nam thuộc mấy ngữ hệ và mấy nhóm ngôn ngữ?",
      options: [
        "Thuộc 3 ngữ hệ và 5 nhóm ngôn ngữ",
        "Thuộc 5 ngữ hệ và 8 nhóm ngôn ngữ",
        "Thuộc 8 ngữ hệ và 12 nhóm ngôn ngữ",
        "Tất cả 54 dân tộc đều thuộc cùng 1 nhóm ngôn ngữ duy nhất"
      ],
      ans: 1,
      exp: "54 dân tộc Việt Nam được phân chia vào 5 ngữ hệ lớn (Nam Á, Thái – Ka-đai, Mông – Dao, Nam Đảo, Hán – Tạng) với 8 nhóm ngôn ngữ."
    },
    {
      q: "Các dân tộc Kinh (Việt), Mường, Thổ, Chứt thuộc nhóm ngôn ngữ nào và ngữ hệ nào?",
      options: [
        "Nhóm Tày – Thái thuộc ngữ hệ Thái – Ka-đai",
        "Nhóm Việt – Mường thuộc ngữ hệ Nam Á",
        "Nhóm Ma-lay-ô – Pô-li-nê-di thuộc ngữ hệ Nam Đảo",
        "Nhóm Tạng – Miến thuộc ngữ hệ Hán – Tạng"
      ],
      ans: 1,
      exp: "Bốn dân tộc Kinh, Mường, Thổ, Chứt cùng thuộc nhóm ngôn ngữ Việt – Mường nằm trong ngữ hệ Nam Á."
    },
    {
      q: "Năm dân tộc Chăm, Gia Rai, Ê Đê, Raglai, Chu Ru ở khu vực duyên hải Nam Trung Bộ và Tây Nguyên thuộc ngữ hệ nào?",
      options: [
        "Ngữ hệ Nam Đảo (nhóm Ma-lay-ô – Pô-li-nê-di)",
        "Ngữ hệ Mông – Dao",
        "Ngữ hệ Hán – Tạng",
        "Ngữ hệ Thái – Ka-đai"
      ],
      ans: 0,
      exp: "Các dân tộc Chăm, Gia Rai, Ê Đê, Raglai, Chu Ru thuộc nhóm ngôn ngữ Ma-lay-ô – Pô-li-nê-di của ngữ hệ Nam Đảo."
    },
    {
      q: "Đặc điểm nổi bật nhất về sự phân bố cư trú của các dân tộc trên lãnh thổ Việt Nam hiện nay là gì?",
      options: [
        "Mỗi dân tộc đều sống trong một lãnh thổ khép kín, tách biệt hoàn toàn với các dân tộc khác",
        "Các dân tộc phân bố rộng khắp nhưng cư trú đan xen ('xen canh, xen cư'), sống hoà hợp và gắn bó lâu đời trên khắp các vùng miền đất nước",
        "Tất cả 53 dân tộc thiểu số chỉ sinh sống ở vùng ven biển đồng bằng sông Cửu Long",
        "Người Kinh chỉ sinh sống duy nhất ở vùng núi cao biên giới phía Bắc"
      ],
      ans: 1,
      exp: "Các dân tộc Việt Nam có lịch sử thiên di và giao lưu lâu dài nên cư trú đan xen, không có lãnh thổ tộc người biệt lập, tạo điều kiện thuận lợi cho giao lưu văn hoá và đoàn kết dân tộc."
    },
    {
      q: "Khi tìm hiểu bảng phân loại các dân tộc theo ngữ hệ, nhận thức nào sau đây là ĐÚNG và khoa học?",
      options: [
        "Hai dân tộc cùng chung một ngữ hệ thì chắc chắn có phong tục, trang phục và lễ hội giống hệt nhau 100%",
        "Ngữ hệ phản ánh quan hệ nguồn gốc lịch sử về ngôn ngữ, không đồng nghĩa với việc các dân tộc cùng ngữ hệ đều có phong tục hay bản sắc văn hoá giống hệt nhau",
        "Dân tộc nào có số dân đông hơn thì ngôn ngữ có giá trị cao hơn dân tộc ít người",
        "Cần xoá bỏ tiếng nói riêng của các dân tộc thiểu số"
      ],
      ans: 1,
      exp: "Phân loại ngữ hệ dựa trên tiêu chí ngôn ngữ học; mỗi dân tộc dù cùng ngữ hệ vẫn có lịch sử cư trú, sinh thái và bản sắc văn hoá riêng cần được tôn trọng bình đẳng."
    }
  ],

  12: [
    {
      q: "Bên cạnh canh tác lúa nước ở thung lũng và làm nương rẫy, đồng bào các dân tộc thiểu số vùng núi cao phía Bắc (như Mông, Dao, Hà Nhì, La Chí) đã sáng tạo ra hình thức canh tác nông nghiệp độc đáo nào thích ứng với địa hình dốc?",
      options: [
        "Canh tác trên hệ thống ruộng bậc thang dọc các sườn núi",
        "Canh tác trên các ốc đảo giữa sa mạc cát",
        "Đánh bắt cá voi trên đại dương",
        "Xây dựng các đồn điền trồng lúa mì cơ giới hoá quy mô lớn"
      ],
      ans: 0,
      exp: "Ruộng bậc thang (như ở Mù Cang Chải, Hoàng Su Phì, Sa Pa) là kiệt tác canh tác nông nghiệp lúa nước trên đất dốc của đồng bào các dân tộc miền núi phía Bắc."
    },
    {
      q: "Cơ cấu bữa ăn truyền thống lâu đời của người Việt (Kinh) gắn liền với môi trường nông nghiệp lúa nước và sông biển là gì?",
      options: [
        "Bánh mì – Bơ sữa – Thịt cừu nướng",
        "Cơm – Rau – Cá (thủy sản)",
        "Ngô – Khoai tây – Phô mai",
        "Chỉ dùng thực phẩm đóng hộp công nghiệp"
      ],
      ans: 1,
      exp: "Thích ứng với hệ sinh thái nhiệt đới gió mùa nhiều sông ngòi, bữa ăn truyền thống của người Kinh lấy Cơm tẻ làm chủ đạo kết hợp Rau xanh và Cá/thuỷ sản."
    },
    {
      q: "Vì sao đa số các dân tộc thiểu số ở miền núi phía Bắc, Trường Sơn và Tây Nguyên truyền thống thường dựng 'nhà sàn' để sinh sống?",
      options: [
        "Để dễ dàng tháo dỡ mang đi du mục trên mặt biển",
        "Để thích ứng với địa hình đồi núi dốc, khí hậu ẩm thấp, tránh lũ quét và phòng tránh thú dữ, côn trùng, đồng thời tận dụng nguồn nguyên liệu gỗ, tre, nứa tại chỗ",
        "Do quy định bắt buộc của các thương nhân châu Âu",
        "Vì đồng bào không biết sử dụng đất và đá"
      ],
      ans: 1,
      exp: "Kiến trúc nhà sàn là sự thích ứng thông minh với điều kiện tự nhiên rừng núi nhiệt đới ẩm (tránh ẩm thấp, ngập nước, thú dữ) và gắn với không gian sinh hoạt văn hoá cộng đồng (như nhà Rông, nhà Dài)."
    },
    {
      q: "Trong đời sống tinh thần của cộng đồng các dân tộc Việt Nam, các lễ hội truyền thống như Lễ hội Lồng tồng (Tày, Nùng), Lễ mừng cơm mới, Lễ hội xuống đồng gắn liền với chu kì nào?",
      options: [
        "Chu kì canh tác sản xuất nông nghiệp (cầu mùa màng mưa thuận gió hoà, tạ ơn thần nông/tổ tiên)",
        "Chu kì hoạt động thương mại chứng khoán",
        "Chu kì thi đấu thể thao Olympic quốc tế",
        "Chu kì khai thác dầu khí ngoài khơi"
      ],
      ans: 0,
      exp: "Hầu hết các lễ hội truyền thống của các dân tộc Việt Nam đều bắt nguồn từ chu kì canh tác nông nghiệp (mở đầu vụ gieo cấy hoặc mừng thu hoạch mùa màng) và tưởng nhớ tổ tiên, anh hùng."
    },
    {
      q: "Khi tìm hiểu và giới thiệu về văn hoá vật chất, tinh thần của các dân tộc Việt Nam, thái độ nào sau đây là đúng đắn?",
      options: [
        "Lấy văn hoá của một dân tộc làm chuẩn mực duy nhất để chê bai phong tục của dân tộc khác",
        "Trân trọng sự đa dạng văn hoá trong tính thống nhất của quốc gia, tìm hiểu văn hoá trong mối liên hệ với môi trường sống và tránh rập khuôn, định kiến",
        "Coi mọi sự khác biệt về trang phục và ẩm thực là lạc hậu cần xoá bỏ ngay",
        "Cho rằng văn hoá các dân tộc không bao giờ giao lưu hay biến đổi"
      ],
      ans: 1,
      exp: "Mỗi sắc thái văn hoá dân tộc là một tài sản quý báu đóng góp vào vườn hoa văn hoá Việt Nam thống nhất trong đa dạng; cần tôn trọng bình đẳng và tránh khuôn mẫu hoá."
    }
  ],

  13: [
    {
      q: "Những nhân tố lịch sử căn bản nào đã sớm gắn kết cộng đồng các dân tộc trên đất nước Việt Nam thành một khối đại đoàn kết bền chặt?",
      options: [
        "Yêu cầu cùng chung sức trị thuỷ, khai phá đất đai phục vụ sản xuất, giao lưu kinh tế – văn hoá và đặc biệt là sát cánh chống lại các thế lực ngoại xâm lớn mạnh để bảo vệ Tổ quốc",
        "Do sự áp đặt từ các hiệp ước quốc tế thời cận đại",
        "Do các dân tộc không có bất kì sự giao tiếp nào với nhau trong lịch sử",
        "Chỉ mới xuất hiện từ cuối thế kỉ XX nhờ mạng Internet"
      ],
      ans: 0,
      exp: "Lịch sử chung lưng đấu cật cải tạo thiên nhiên, trao đổi kinh tế miền xuôi – miền ngược và cùng đổ máu chống ngoại xâm qua hàng nghìn năm đã đúc kết nên truyền thống đại đoàn kết Việt Nam."
    },
    {
      q: "Trong lịch sử thời phong kiến độc lập (Lý, Trần, Lê sơ), chính sách 'nhu viễn' (gả công chúa cho các tù trưởng, phong chức tước cho thủ lĩnh dân tộc thiểu số vùng biên cương) nhằm mục đích gì?",
      options: [
        "Tách rời vùng miền núi biên giới ra khỏi lãnh thổ Đại Việt",
        "Thắt chặt mối quan hệ gắn bó giữa triều đình trung ương với các dân tộc miền núi, củng cố khối đoàn kết để cùng quản lí và bảo vệ vững chắc biên cương Tổ quốc",
        "Xoá bỏ hoàn toàn phong tục tập quán của cư dân miền núi",
        "Miễn trừ nghĩa vụ bảo vệ đất nước cho các vùng biên giới"
      ],
      ans: 1,
      exp: "Chính sách 'nhu viễn' thể hiện tầm nhìn chính trị khôn khéo của các triều đại Đại Việt nhằm đoàn kết các thủ lĩnh và đồng bào dân tộc thiểu số cùng trấn giữ phên dậu quốc gia."
    },
    {
      q: "Bước ngoặt lớn trong việc củng cố và phát huy sức mạnh khối đại đoàn kết toàn dân tộc Việt Nam trong thế kỉ XX gắn liền với sự kiện nào vào năm 1930?",
      options: [
        "Đảng Cộng sản Việt Nam ra đời (1930) và xây dựng Mặt trận Dân tộc Thống nhất (Việt Minh, Liên Việt, Mặt trận Tổ quốc Việt Nam)",
        "Sự bùng nổ của cuộc Cách mạng công nghiệp lần thứ ba",
        "Việc ban hành bộ Hoàng Việt luật lệ",
        "Sự kiện thành lập Hiệp hội các quốc gia Đông Nam Á (ASEAN)"
      ],
      ans: 0,
      exp: "Từ năm 1930, dưới ngọn cờ của Đảng Cộng sản Việt Nam và Chủ tịch Hồ Chí Minh, khối đại đoàn kết toàn dân tộc được tổ chức chặt chẽ trong các hình thức Mặt trận, làm nên thắng lợi năm 1945, 1954, 1975."
    },
    {
      q: "Quan điểm, nguyên tắc cốt lõi nhất quán trong Chính sách dân tộc của Đảng và Nhà nước Việt Nam hiện nay là gì?",
      options: [
        "Ưu tiên phát triển duy nhất vùng đồng bằng và đô thị lớn",
        "Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
        "Đồng hoá văn hoá tất cả các dân tộc thiểu số theo một khuôn mẫu duy nhất",
        "Tách biệt hoạt động kinh tế giữa các dân tộc"
      ],
      ans: 1,
      exp: "Hiến pháp và chính sách của Đảng, Nhà nước Việt Nam khẳng định nguyên tắc xuyên suốt: 'Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển'."
    },
    {
      q: "Chính sách dân tộc của Đảng và Nhà nước Việt Nam hiện nay được triển khai toàn diện trên những lĩnh vực trọng tâm nào?",
      options: [
        "Chỉ tập trung duy nhất vào lĩnh vực sưu tầm văn học dân gian",
        "Toàn diện trên cả 4 lĩnh vực: Kinh tế (phát triển miền núi, giảm chênh lệch vùng miền), Văn hoá (giữ gìn bản sắc), Xã hội (giáo dục, y tế, an sinh) và Quốc phòng – An ninh (bảo vệ biên giới, chủ quyền)",
        "Chỉ tập trung vào việc di dời toàn bộ cư dân miền núi xuống các thành phố lớn",
        "Chỉ đầu tư cho lĩnh vực du lịch thương mại"
      ],
      ans: 1,
      exp: "Chính sách dân tộc hiện nay mang tính toàn diện và đồng bộ trên cả 4 trụ cột: Kinh tế, Văn hoá, Xã hội và Quốc phòng – An ninh, gắn với sự tham gia chủ động của cộng đồng."
    }
  ]
};

module.exports = quizzes;
