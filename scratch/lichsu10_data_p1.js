// scratch/lichsu10_data_p1.js
// Lịch Sử 10 - Bộ Kết nối tri thức với cuộc sống (Chủ đề 1 - 4: Bài 1 - Bài 7)

const topics = [
  {
    num: 1,
    title: "Chủ đề 1. Lịch sử và Sử học",
    shortTitle: "Chủ đề 1: Lịch sử & Sử học",
    icon: "fa-scroll",
    lessons: [1, 2]
  },
  {
    num: 2,
    title: "Chủ đề 2. Vai trò của Sử học",
    shortTitle: "Chủ đề 2: Vai trò của Sử học",
    icon: "fa-landmark-dome",
    lessons: [3]
  },
  {
    num: 3,
    title: "Chủ đề 3. Một số nền văn minh thế giới thời cổ – trung đại",
    shortTitle: "Chủ đề 3: Văn minh thế giới cổ – trung đại",
    icon: "fa-monument",
    lessons: [4, 5]
  },
  {
    num: 4,
    title: "Chủ đề 4. Các cuộc cách mạng công nghiệp trong lịch sử thế giới",
    shortTitle: "Chủ đề 4: Cách mạng công nghiệp thế giới",
    icon: "fa-gears",
    lessons: [6, 7]
  },
  {
    num: 5,
    title: "Chủ đề 5. Văn minh Đông Nam Á thời cổ – trung đại",
    shortTitle: "Chủ đề 5: Văn minh Đông Nam Á",
    icon: "fa-dharmachakra",
    lessons: [8]
  },
  {
    num: 6,
    title: "Chủ đề 6. Một số nền văn minh trên đất nước Việt Nam (trước năm 1858)",
    shortTitle: "Chủ đề 6: Văn minh Việt Nam (trước 1858)",
    icon: "fa-dragon",
    lessons: [9, 10]
  },
  {
    num: 7,
    title: "Chủ đề 7. Cộng đồng các dân tộc Việt Nam",
    shortTitle: "Chủ đề 7: Cộng đồng các dân tộc Việt Nam",
    icon: "fa-people-group",
    lessons: [11, 12, 13]
  }
];

const lessonsP1 = {
  1: {
    num: 1,
    topic: 1,
    title: "Hiện thực lịch sử và lịch sử được con người nhận thức",
    subtitle: "Khái niệm Lịch sử, Sử học, chức năng – nhiệm vụ của Sử học và các nguồn Sử liệu",
    openingQuestion: "Vì sao cùng một sự kiện đã xảy ra trong quá khứ (như nhà nước Âu Lạc hay trận Mác-tan năm 1521), nhưng các tài liệu lịch sử, truyền thuyết và bia tưởng niệm lại có những cách ghi chép, đánh giá khác nhau?",
    diagramCaption: "Sơ đồ phân biệt Hiện thực lịch sử (khách quan, duy nhất) với Lịch sử được con người nhận thức (đa dạng, bổ sung qua sử liệu) & Chức năng của Sử học",
    concepts: [
      {
        term: "Lịch sử & Lịch sử loài người",
        definition: "<strong>Lịch sử</strong> là tất cả những gì đã diễn ra trong quá khứ. <strong>Lịch sử loài người</strong> bao gồm toàn bộ hoạt động của con người từ khi xuất hiện đến nay, trong mối quan hệ với tự nhiên và quan hệ xã hội với nhau."
      },
      {
        term: "Hiện thực lịch sử vs Lịch sử được con người nhận thức",
        definition: "• <strong>Hiện thực lịch sử:</strong> Tất cả những gì đã thực sự diễn ra trong quá khứ; tồn tại hoàn toàn khách quan, độc lập, không phụ thuộc vào ý muốn chủ quan của con người và không thể thay đổi.<br>• <strong>Lịch sử được con người nhận thức:</strong> Toàn bộ những hiểu biết và cách con người trình bày, tái hiện hiện thực lịch sử thông qua kể chuyện, ghi chép, nghiên cứu khoa học, trình diễn nghệ thuật, tưởng niệm, nghi lễ, phong tục...<br>• <em>Mối quan hệ:</em> Hai khái niệm gắn bó nhưng <strong>không đồng nhất</strong>. Do sử liệu có thể thiếu hụt, hư hỏng hoặc góc nhìn người chép sử khác nhau nên nhận thức lịch sử luôn được bổ sung, điều chỉnh khi phát hiện tư liệu và phương pháp mới."
      },
      {
        term: "Sử học (Đối tượng, Lịch đại & Đồng đại)",
        definition: "<strong>Sử học</strong> là khoa học nghiên cứu quá khứ của loài người (từ cá nhân, nhóm người, cộng đồng, quốc gia đến toàn nhân loại). Sử học tái hiện các sự kiện, quá trình, nhân vật trong mối liên hệ <strong>lịch đại</strong> (theo trục thời gian trước – sau) và <strong>đồng đại</strong> (cùng thời điểm, đặt trong bối cảnh không gian liên quan)."
      },
      {
        term: "Sử liệu (Nguồn tư liệu lịch sử)",
        definition: "Những hình thức tư liệu chứa đựng thông tin về quá khứ: <em>sử liệu hiện vật/khảo cổ, sử liệu chữ viết (thành văn), sử liệu truyền khẩu, sử liệu hình ảnh, phim, âm thanh, công trình kiến trúc, phong tục tập quán và tư liệu điện tử</em>."
      }
    ],
    sections: [
      {
        heading: "1. Chức năng và nhiệm vụ của Sử học",
        items: [
          "<strong>Chức năng nhận thức:</strong> Cung cấp tri thức khoa học giúp con người hiểu rõ những gì đã diễn ra trong quá khứ, nắm bắt bản chất và quy luật vận động của các quá trình lịch sử.",
          "<strong>Chức năng giáo dục:</strong> Góp phần hình thành tư tưởng, tình cảm, đạo đức nhân văn; bồi dưỡng lòng yêu nước, niềm tự hào dân tộc, ý thức cộng đồng, trách nhiệm công dân và thái độ trân trọng di sản.",
          "<strong>Nhiệm vụ của Sử học:</strong> Cung cấp tri thức khoa học, khách quan và có hệ thống; khôi phục, miêu tả và giải thích sự kiện/quá trình lịch sử; tổng kết bài học kinh nghiệm từ quá khứ để phục vụ hiện tại, dự báo tương lai và bảo tồn các giá trị văn hoá tốt đẹp."
        ]
      },
      {
        heading: "2. Phân loại và nguyên tắc khai thác Sử liệu",
        items: [
          "<strong>Phân biệt chứng tích và nhận thức:</strong> Một hiện vật khảo cổ (như trống đồng, mũi tên đồng) là <em>chứng tích trực tiếp</em> của quá khứ; còn câu chuyện kể, bài viết hay bức vẽ về hiện vật đó là <em>hình thức con người nhận thức và diễn giải</em> chứng tích ấy.",
          "<strong>Nguyên tắc phê phán sử liệu:</strong> Khi tiếp cận một sử liệu, cần đặt câu hỏi: <em>Ai là người tạo ra tư liệu? Tạo ra vào thời điểm nào? Trong hoàn cảnh và nhằm mục đích gì?</em> Phải đối chiếu chéo nhiều nguồn tư liệu khác nhau để kiểm chứng độ xác thực, độ tin cậy, giới hạn và giá trị thông tin."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Khai thác Tư liệu & Ví dụ điển hình trong SGK",
      cases: [
        {
          name: "Hiện vật Cổ Loa & Lịch sử Âu Lạc",
          detail: "Hàng vạn mũi tên đồng ba cạnh và khuôn đúc tìm thấy tại Cầu Vực (Cổ Loa, Đông Anh, Hà Nội) là <strong>chứng tích vật chất xác thực</strong> về trình độ kĩ thuật quân sự thời An Dương Vương; còn truyền thuyết <em>Mỵ Châu – Trọng Thuỷ</em> và các vở kịch, tranh vẽ là những <strong>hình thức nhận thức, tái hiện</strong> lịch sử Âu Lạc của đời sau."
        },
        {
          name: "Trận Mác-tan (Mactan) ngày 27/4/1521 tại Philippines",
          detail: "Sự kiện đoàn thám hiểm của Ma-gien-lăng (Magellan) giao chiến với cư dân đảo Mác-tan do tù trưởng La-pu-la-pu chỉ huy và Ma-gien-lăng tử trận là <strong>hiện thực lịch sử duy nhất</strong>. Tuy nhiên, trên tấm bia tưởng niệm tại đảo Mác-tan có hai mặt ghi hai góc nhìn khác nhau: người Tây Ban Nha xem Ma-gien-lăng là nhà thám hiểm vĩ đại hy sinh trong chuyến đi vòng quanh thế giới, còn người Philippines tôn vinh La-pu-la-pu là người anh hùng đầu tiên đánh đuổi kẻ xâm lược châu Âu."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Ý nghĩa phương pháp luận:</strong> Giúp người học có tư duy phản biện khi đọc sách báo, xem phim lịch sử hoặc tiếp nhận thông tin trên mạng: luôn phân biệt rõ <em>sự kiện khách quan đã diễn ra</em> với <em>cách kể lại, tưởng niệm hoặc bình luận</em> về sự kiện đó.",
      "<strong>Liên hệ thực tiễn:</strong> Khi tìm hiểu một nhân vật hoặc sự kiện lịch sử địa phương, cần kết hợp khảo sát hiện vật tại bảo tàng, văn bia tại di tích với chính sử thay vì chỉ nghe theo lời đồn đại một chiều."
    ]
  },

  2: {
    num: 2,
    topic: 1,
    title: "Tri thức lịch sử và cuộc sống",
    subtitle: "Học tập lịch sử suốt đời, kết nối lịch sử với đương đại và quy trình 5 bước xử lí sử liệu",
    openingQuestion: "Vì sao việc học tập và khám phá lịch sử không dừng lại khi rời ghế nhà trường phổ thông mà là một hành trình suốt đời của mỗi con người và xã hội?",
    diagramCaption: "Quy trình 5 bước sưu tầm, thu thập và xử lí sử liệu khoa học & Mạng lưới kết nối tri thức lịch sử với cuộc sống hiện đại",
    concepts: [
      {
        term: "Nhu cầu tìm hiểu cội nguồn",
        definition: "Từ thuở xa xưa, con người luôn có nhu cầu tự nhiên tìm hiểu cội nguồn của bản thân, gia đình, dòng họ, làng xã và dân tộc; lưu giữ kí ức và kinh nghiệm qua đồ vật, hình khắc trên đá, sử thi, nghi lễ, gia phả và thư tịch."
      },
      {
        term: "Sưu tầm, thu thập sử liệu vs Xử lí sử liệu",
        definition: "• <strong>Sưu tầm / thu thập sử liệu:</strong> Quá trình tìm kiếm, phát hiện và tập hợp các nguồn tư liệu liên quan đến vấn đề nghiên cứu.<br>• <strong>Xử lí sử liệu:</strong> Quá trình phân loại, đối chiếu, đánh giá, thẩm định độ tin cậy và khai thác thông tin từ các tư liệu đã thu thập được."
      }
    ],
    sections: [
      {
        heading: "1. Vì sao cần học tập và khám phá lịch sử suốt đời?",
        items: [
          "<strong>Hiểu hiện tại và định hướng tương lai:</strong> Mọi vấn đề của xã hội hiện tại đều có cội rễ từ quá khứ. Tri thức lịch sử giúp con người nhận diện nguyên nhân của vấn đề, đúc kết bài học thành công – thất bại để tránh lặp lại sai lầm và hoạch định tương lai có căn cứ.",
          "<strong>Lấp đầy khoảng trống nhận thức:</strong> Quá khứ nhân loại vẫn còn nhiều bí ẩn và khoảng trống chưa được giải mã. Sự phát hiện các nguồn sử liệu mới (khảo cổ học, tài liệu giải mật), công nghệ phân tích mới (đồng vị carbon C14, ADN cổ, viễn thám) và góc nhìn mới đòi hỏi chúng ta phải cập nhật tri thức lịch sử suốt đời.",
          "<strong>Động lực cho công nghiệp văn hoá và nghề nghiệp:</strong> Tri thức lịch sử – văn hoá là chất liệu vô giá cho bảo tàng, điện ảnh, văn học, thiết kế game, kiến trúc, ngoại giao và du lịch."
        ]
      },
      {
        heading: "2. Các con đường kết nối lịch sử với cuộc sống",
        items: [
          "<strong>Đa dạng không gian học tập:</strong> Không chỉ qua sách giáo khoa và tiết học trên lớp mà còn qua bảo tàng, di tích lịch sử, gia phả dòng họ, kí ức nhân chứng lịch sử, phim tài liệu, tác phẩm nghệ thuật và hoạt động trải nghiệm thực địa.",
          "<strong>Những 'chứng nhân lịch sử' quanh ta:</strong> Mỗi ngôi nhà cổ, con phố, tên đường, ngôi đình, mái chùa, chiếc cầu hay địa danh làng bản đều ẩn chứa câu chuyện lịch sử của cộng đồng.",
          "<strong>Nguyên tắc vận dụng bài học lịch sử vào thời sự:</strong> Khi vận dụng kinh nghiệm quá khứ (như bài học đại đoàn kết, giữ vững chủ quyền, ngoại giao mềm dẻo) vào giải quyết vấn đề hôm nay, cần <em>so sánh kĩ sự tương đồng và khác biệt của bối cảnh lịch sử</em>, tuyệt đối không áp dụng máy móc, giáo điều."
        ]
      },
      {
        heading: "3. Quy trình 5 bước sưu tầm, thu thập và xử lí sử liệu",
        items: [
          "<strong>Bước 1 – Xác định vấn đề và phạm vi:</strong> Nêu rõ câu hỏi cần tìm hiểu (về sự kiện, nhân vật, di tích nào; trong khoảng thời gian và không gian nào).",
          "<strong>Bước 2 – Lập danh mục và tìm nguồn sử liệu:</strong> Xác định các loại sử liệu cần tìm (chữ viết, hiện vật, hình ảnh, phỏng vấn nhân chứng), tiếp cận nhiều nguồn khác nhau và ghi chép đầy đủ xuất xứ.",
          "<strong>Bước 3 – Thu thập và bảo quản thông tin:</strong> Ghi chép, chụp ảnh, sao chụp tư liệu cẩn thận, tôn trọng nguyên trạng và phân loại sơ bộ.",
          "<strong>Bước 4 – Phân loại, đánh giá và thẩm định (Xử lí sử liệu):</strong> Kiểm tra tác giả, thời điểm ra đời, mục đích của tư liệu; đối chiếu chéo để xác định tính xác thực, giá trị và những hạn chế/thiên lệch của nguồn.",
          "<strong>Bước 5 – Giải thích và trình bày kết quả:</strong> Dựa trên sử liệu đã kiểm chứng để tái hiện và lí giải vấn đề một cách khách quan, trung thực; phân biệt rõ dữ kiện sử liệu với suy luận cá nhân."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Tư liệu & Thực hành kết nối lịch sử",
      cases: [
        {
          name: "Tìm hiểu lịch sử qua tên đường phố và di tích địa phương",
          detail: "Khi đi qua một con đường mang tên danh nhân hoặc một di tích lịch sử tại địa phương, học sinh có thể áp dụng quy trình 5 bước: Đặt câu hỏi về nhân vật/di tích → Tìm văn bia, sách địa chí, hỏi người cao tuổi → Đối chiếu thông tin → Viết bài thuyết minh hoặc infographic giới thiệu."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Hình thành năng lực tự học lịch sử:</strong> Biến người học từ chỗ thụ động ghi nhớ sự kiện sang chủ động khám phá, thẩm định thông tin như một nhà nghiên cứu trẻ.",
      "<strong>Liên hệ công nghiệp văn hoá hiện đại:</strong> Nhiều bộ phim cổ trang, dự án phục dựng cổ phục, tour đêm Hoàng thành Thăng Long hay Hỏa Lò thành công vang dội nhờ nền tảng nghiên cứu sử liệu nghiêm túc."
    ]
  },

  3: {
    num: 3,
    topic: 2,
    title: "Vai trò của Sử học",
    subtitle: "Mối quan hệ hai chiều giữa Sử học với công tác bảo tồn, phát huy di sản và phát triển du lịch bền vững",
    openingQuestion: "Sử học đóng vai trò gì trong việc bảo vệ tính xác thực của các di sản văn hoá trước nguy cơ mai một hoặc biến dạng do thương mại hoá du lịch?",
    diagramCaption: "Lược đồ mối quan hệ tương hỗ hai chiều: Sử học nghiên cứu di sản ↔ Bảo tồn & Phát huy giá trị di sản ↔ Phát triển du lịch văn hoá bền vững",
    concepts: [
      {
        term: "Di sản văn hoá vật thể",
        definition: "Các sản phẩm vật chất có giá trị lịch sử, văn hoá, khoa học gồm: <em>công trình kiến trúc, thành quách (Hoàng thành Thăng Long, Thành nhà Hồ), lăng tẩm, đình, đền, chùa, tháp (Mỹ Sơn), nhà cổ (phố cổ Hội An), cổ vật, bảo vật quốc gia...</em> Đặc điểm: dễ bị hư hại, xuống cấp bởi thời gian, khí hậu và tác động của con người."
      },
      {
        term: "Di sản văn hoá phi vật thể",
        definition: "Các sản phẩm tinh thần có giá trị lịch sử, văn hoá, khoa học được lưu truyền bằng trí nhớ, chữ viết hoặc truyền khẩu, trình diễn gồm: <em>tiếng nói, chữ viết, ngữ văn dân gian, nghệ thuật trình diễn (Nhã nhạc cung đình Huế, Dân ca Quan họ, Không gian văn hoá Cồng chiêng Tây Nguyên), tập quán xã hội, lễ hội truyền thống, nghề thủ công truyền thống và tri thức dân gian</em>. Nguy cơ: dễ bị mai một, thất truyền hoặc làm sai lệch khi môi trường diễn xướng và nghệ nhân thay đổi."
      },
      {
        term: "Di sản thiên nhiên & Di sản hỗn hợp",
        definition: "<strong>Di sản thiên nhiên</strong> (như Vịnh Hạ Long, Vườn quốc gia Phong Nha – Kẻ Bàng) mang giá trị sinh thái, địa chất, địa mạo và cảnh quan đặc sắc. <strong>Di sản hỗn hợp</strong> (như Quần thể danh thắng Tràng An) kết hợp cả giá trị văn hoá lịch sử và giá trị thiên nhiên."
      }
    ],
    sections: [
      {
        heading: "1. Sử học với công tác bảo tồn và phát huy giá trị di sản",
        items: [
          "<strong>Cung cấp cơ sở khoa học cho việc nhận diện và xếp hạng:</strong> Sử học nghiên cứu nguồn gốc, niên đại, bối cảnh ra đời, quá trình biến đổi và giá trị lịch sử – văn hoá của di sản để lập hồ sơ khoa học công nhận di sản cấp quốc gia hoặc UNESCO.",
          "<strong>Đảm bảo tính xác thực và tính toàn vẹn khi trùng tu:</strong> Mọi hoạt động bảo quản, tu bổ, phục dựng di tích hay phục hồi lễ hội đều phải dựa trên tư liệu sử học và khảo cổ học chính xác; tuyệt đối tránh việc 'làm mới' tuỳ tiện hoặc thương mại hoá làm biến dạng yếu tố gốc của di sản.",
          "<strong>Phát huy giá trị di sản trong đời sống đương đại:</strong> Đưa di sản vào giáo dục học đường, nghiên cứu khoa học, sáng tạo văn hoá nghệ thuật và sinh hoạt cộng đồng, tôn trọng vai trò chủ thể của cộng đồng cư dân sở hữu di sản."
        ]
      },
      {
        heading: "2. Mối quan hệ hai chiều giữa Sử học, Di sản và Du lịch",
        items: [
          "<strong>Sử học và Di sản đối với Du lịch:</strong> Di sản lịch sử – văn hoá (di tích, lễ hội, ẩm thực, làng nghề, khảo cổ) là tài nguyên cốt lõi tạo nên sức hấp dẫn đặc trưng của du lịch văn hoá. Sử học cung cấp nội dung thuyết minh chính xác, xây dựng câu chuyện điểm đến, thiết kế tuyến tham quan và ấn phẩm quảng bá có chiều sâu.",
          "<strong>Tác động tích cực của Du lịch trở lại Sử học và Bảo tồn:</strong> Nhu cầu tham quan, tìm hiểu của du khách thúc đẩy chính quyền và cộng đồng quan tâm nghiên cứu, gìn giữ di sản; doanh thu từ du lịch tạo nguồn lực tài chính trực tiếp để tái đầu tư cho công tác tu bổ di tích, hỗ trợ nghệ nhân và tạo sinh kế cho người dân địa phương.",
          "<strong>Thách thức và yêu cầu phát triển du lịch bền vững:</strong> Nếu khai thác quá tải, thiếu quy hoạch sẽ gây ô nhiễm môi trường, xâm hại cảnh quan và làm biến tướng lễ hội. Vì vậy phải <em>kết hợp hài hoà giữa bảo tồn và khai thác, giới hạn sức chứa hợp lí và đặt lợi ích bảo tồn lâu dài lên hàng đầu</em>."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Nghiên cứu tình huống bảo tồn & phát huy di sản tại Việt Nam",
      cases: [
        {
          name: "Quần thể danh thắng Tràng An (Ninh Bình) & Phố cổ Hội An (Quảng Nam)",
          detail: "Tại Tràng An và Hội An, các kết quả khảo cổ học (dấu tích người tiền sử trong hang động Tràng An, thương cảng Hội An thế kỉ XVI–XVIII) đã trở thành nền tảng xây dựng các tuyến du lịch di sản xanh, nơi người dân địa phương trực tiếp tham gia bảo vệ cảnh quan và hưởng lợi từ du lịch."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Trách nhiệm của thế hệ trẻ:</strong> Khi tham quan di tích lịch sử và danh lam thắng cảnh, cần giữ gìn vệ sinh, không khắc tên/vẽ bậy lên hiện vật, tôn trọng không gian tâm linh và tích cực lan toả thông tin lịch sử chính xác trên các nền tảng số."
    ]
  },

  4: {
    num: 4,
    topic: 3,
    title: "Khái niệm văn minh. Một số nền văn minh phương Đông thời cổ – trung đại",
    subtitle: "Phân biệt Văn hoá – Văn minh & Thành tựu 4 nền văn minh lớn: Ai Cập, Lưỡng Hà, Ấn Độ, Trung Hoa",
    openingQuestion: "Văn minh khác văn hoá ở điểm nào? Vì sao các nền văn minh đầu tiên của nhân loại ở phương Đông (Ai Cập, Lưỡng Hà, Ấn Độ, Trung Hoa) đều hình thành trên lưu vực các dòng sông lớn?",
    diagramCaption: "Sơ đồ so sánh Văn hoá – Văn minh và Bảng hệ thống thành tựu 4 nền văn minh phương Đông (Ai Cập, Lưỡng Hà, Ấn Độ, Trung Hoa)",
    concepts: [
      {
        term: "Văn hoá (Culture)",
        definition: "Tổng thể những giá trị vật chất và tinh thần do con người sáng tạo ra trong quá trình lịch sử (tri thức, lối sống, tín ngưỡng, phong tục, nghệ thuật, cách ứng xử...). <strong>Văn hoá xuất hiện đồng thời với sự xuất hiện của loài người</strong>."
      },
      {
        term: "Văn minh (Civilization)",
        definition: "Trạng thái phát triển cao của nền văn hoá và xã hội loài người khi đã vượt qua thời kì nguyên thuỷ; thường gắn liền với sự ra đời của <strong>nhà nước, đô thị, sự phân công lao động xã hội, chữ viết và hệ thống thành tựu vật chất – tinh thần rực rỡ</strong>.<br>• <em>So sánh:</em> Văn hoá có bề dày lịch sử lâu đời hơn (ra đời cùng loài người); còn văn minh chỉ xuất hiện khi xã hội phát triển đến trình độ nhất định (có nhà nước và chữ viết)."
      }
    ],
    sections: [
      {
        heading: "1. Văn minh Ai Cập cổ đại (Lưu vực sông Nin – Đông Bắc châu Phi)",
        items: [
          "<strong>Điều kiện hình thành:</strong> Gắn liền với dòng sông Nin bồi đắp phù sa màu mỡ; nhu cầu trị thuỷ, làm thuỷ lợi và đo đạc ruộng đất thúc đẩy sự ra đời sớm của nhà nước quân chủ chuyên chế đứng đầu là <strong>Pha-ra-ông (Pharaoh)</strong>.",
          "<strong>Chữ viết:</strong> Sáng tạo ra <strong>chữ tượng hình</strong> từ hơn 3.000 năm TCN, viết trên giấy Pa-pi-rút (Papyrus) hoặc khắc trên đá. Về sau người Phê-ni-xi kế thừa để phát triển bảng chữ cái. Chữ Ai Cập cổ được giải mã nhờ đối chiếu văn bản trên <strong>bia đá Rosetta</strong>.",
          "<strong>Tín ngưỡng & Kiến trúc – Điêu khắc:</strong> Sùng bái đa thần, tin vào sự bất tử của linh hồn nên phát triển kĩ thuật ướp xác và xây dựng lăng mộ đồ sộ: <strong>Kim tự tháp Ghi-da (Giza, tiêu biểu là kim tự tháp Kê-ốp), Tượng Nhân sư (Sphinx), tượng bán thân hoàng hậu Nê-phéc-ti-ti, mặt nạ vàng vua Tu-tan-kha-mun</strong>.",
          "<strong>Khoa học tự nhiên:</strong> Toán học giỏi về <strong>hình học</strong> (tính diện tích tam giác, hình cầu, tìm ra số $\\pi \\approx 3,16$); Thiên văn học lập <strong>Nông lịch (Dương lịch cổ)</strong> 1 năm có 365 ngày chia 12 tháng; Y học nắm vững cấu tạo giải phẫu cơ thể người qua tục ướp xác."
        ]
      },
      {
        heading: "2. Văn minh Lưỡng Hà cổ đại (Lưu vực sông Ti-grơ và Ơ-phơ-rát – Tây Á)",
        items: [
          "<strong>Điều kiện hình thành:</strong> Vùng đất giữa hai con sông Ti-grơ và Ơ-phơ-rát bằng phẳng, phì nhiêu, thuận lợi cho nông nghiệp tưới tiêu và giao thương đường bộ – đường thuỷ; nơi lập quốc của người Xu-me (Sumer), Ác-cát, Ba-bi-lon...",
          "<strong>Chữ viết & Văn học – Luật pháp:</strong> Người Xu-me sáng tạo <strong>chữ hình nêm (chữ tiết hình)</strong> dùng que vót nhọn viết trên bảng đất sét ướt rồi đem nung khô. Thành tựu văn học nổi bật là <strong>sử thi Gin-ga-mét (Gilgamesh)</strong>; luật pháp có <strong>Bộ luật Ha-mu-ra-bi (Hammurabi)</strong> – bộ luật thành văn hoàn chỉnh sớm nhất thế giới cổ đại.",
          "<strong>Toán học, Thiên văn & Kiến trúc:</strong> Giỏi về số học, phát minh <strong>hệ đếm lục thập phân (lấy số 60 làm cơ sở)</strong> – ngày nay vẫn ứng dụng để chia 1 giờ = 60 phút, 1 phút = 60 giây, vòng tròn $360^\\circ$; lập Âm lịch. Kiến trúc bằng gạch tiêu biểu có <strong>Đền tháp bậc cấp Ziggurat</strong> và <strong>Thành Ba-bi-lon / Vườn treo Ba-bi-lon</strong>."
        ]
      },
      {
        heading: "3. Văn minh Ấn Độ thời cổ – trung đại (Lưu vực sông Ấn và sông Hằng)",
        items: [
          "<strong>Tôn giáo & Triết học (Quê hương của các tôn giáo lớn):</strong><br>• <em>Bà La Môn giáo – Hin-đu giáo (Ấn Độ giáo):</em> Tôn giáo bản địa lớn nhất, thờ thần sáng tạo Brahma, thần bảo hộ Vishnu, thần huỷ diệt Shiva; gắn với chế độ đẳng cấp Varna.<br>• <em>Phật giáo:</em> Do Xít-đác-ta Gô-ta-ma (Thích Ca Mâu Ni) sáng lập vào giữa thiên niên kỉ I TCN, đề cao lòng từ bi, bình đẳng, luật nhân quả; lan truyền mạnh mẽ khắp châu Á.",
          "<strong>Chữ viết & Văn học:</strong> Chữ ব্রাহ্মী (Brahmi) phát triển thành <strong>chữ Phạn (Sanskrit)</strong> và chữ Pali. Văn học có bộ kinh <em>Vê-đa (Veda)</em>, hai bộ sử thi đồ sộ <strong>Ma-ha-bha-ra-ta (Mahabharata)</strong> và <strong>Ra-ma-ya-na (Ramayana)</strong>, kịch thơ <em>Sơ-cun-tơ-la</em> của Ka-li-đa-sa.",
          "<strong>Khoa học tự nhiên:</strong> Sáng tạo ra <strong>10 chữ số (từ 0 đến 9, đặc biệt là số 0)</strong> và hệ thập phân (sau được người Ả Rập truyền sang châu Âu nên quen gọi là chữ số Ả Rập); tính được $\\pi \\approx 3,1416$; phát triển y dược học và phẫu thuật.",
          "<strong>Kiến trúc & Điêu khắc:</strong> Cột đá A-sô-ca, <strong>chùa hang A-gian-ta (Ajanta), đại bảo tháp San-chi</strong> (Phật giáo), đền tháp Hin-đu và <strong>Lăng Ta-giơ Ma-han (Taj Mahal)</strong> thời vương triều Hồi giáo Mô-gôn. Văn minh Ấn Độ lan toả hoà bình sâu rộng sang khu vực Đông Nam Á."
        ]
      },
      {
        heading: "4. Văn minh Trung Hoa thời cổ – trung đại (Lưu vực Hoàng Hà và Trường Giang)",
        items: [
          "<strong>Chữ viết:</strong> Từ <strong>chữ Giáp cốt</strong> (khắc trên mai rùa, xương thú thời Thương), chữ Kim văn đến chữ Tiểu triện (thời Tần) và hoàn chỉnh thành <strong>chữ Hán (chữ Lệ, chữ Khải)</strong>; phát triển nghệ thuật thư pháp và truyền bá sang Nhật Bản, Triều Tiên, Việt Nam.",
          "<strong>Tư tưởng & Tôn giáo:</strong> Thời Xuân Thu – Chiến Quốc hình thành 'Bách gia chư tử':<br>• <em>Nho gia (Khổng Tử, Mạnh Tử):</em> Đề cao chữ Nhân, Lễ, Nghĩa, Trí, Tín và đường lối 'Đức trị'; trở thành hệ tư tưởng chính thống của chế độ quân chủ từ thời Hán Vũ Đế.<br>• <em>Đạo gia (Lão Tử, Trang Tử):</em> Đề cao thuyết 'Vô vi', sống thuận theo tự nhiên; cùng với <em>Pháp gia (Hàn Phi Tử)</em> và <em>Mặc gia (Mặc Tử)</em>; tiếp nhận và phát triển Phật giáo.",
          "<strong>Văn học, Sử học & Nghệ thuật:</strong> Kinh Thi, Sở Từ; đỉnh cao <strong>Thơ Đường</strong> (Lý Bạch, Đỗ Phủ, Bạch Cư Dị) và <strong>Tiểu thuyết chương hồi thời Minh – Thanh</strong> (<em>Tam quốc diễn nghĩa</em> – La Quán Trung, <em>Thuỷ hử</em> – Thi Nại Am, <em>Tây du kí</em> – Ngô Thừa Ân, <em>Hồng lâu mộng</em> – Tào Tuyết Cần). Sử học có <em>Sử ký</em> của Tư Mã Thiên. Kiến trúc có Vạn Lý Trường Thành, Tử Cấm Thành.",
          "<strong>Khoa học – Kĩ thuật:</strong> Toán học có sách <em>Cửu chương toán thuật</em>, Tổ Xung Chi tính số $\\pi$ đến 7 chữ số thập phân; Y dược có Hoa Đà, Lý Thời Trân (<em>Bản thảo cương mục</em>). Đặc biệt là <strong>Tứ đại phát minh về kĩ thuật: Kĩ thuật làm giấy (Thái Luân), Kĩ thuật in (in khắc gỗ và in chữ rời của Tất Thăng), La bàn và Thuốc súng</strong> – đóng góp to lớn cho tiến trình văn minh nhân loại."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Phương pháp đối sánh các nền văn minh phương Đông",
      cases: [
        {
          name: "Mối liên hệ giữa Điều kiện tự nhiên → Nhu cầu thực tiễn → Thành tựu khoa học",
          detail: "Ví dụ: Do nước sông Nin dâng cao làm xoá nhoà ranh giới ruộng đất hằng năm nên người Ai Cập phải đo đạc lại diện tích → thúc đẩy <strong>Hình học</strong> phát triển sớm; nhu cầu theo dõi chu kì nước lũ sông Nin để gieo trồng → thúc đẩy <strong>Thiên văn học và Nông lịch</strong> ra đời."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Ý nghĩa lịch sử:</strong> Phương Đông là cái nôi văn minh sớm nhất của nhân loại; những thành tựu về chữ viết, chữ số (0–9), hệ đếm 60, các tôn giáo lớn và Tứ đại phát minh của Trung Hoa vẫn được ứng dụng trực tiếp trong đời sống hiện đại hôm nay."
    ]
  },

  5: {
    num: 5,
    topic: 3,
    title: "Một số nền văn minh phương Tây thời cổ – trung đại",
    subtitle: "Văn minh Hy Lạp – La Mã cổ đại và Phong trào Văn hoá Phục hưng ở Tây Âu",
    openingQuestion: "Vì sao nền văn minh Hy Lạp – La Mã cổ đại và Phong trào Văn hoá Phục hưng được coi là hai bệ phóng trực tiếp định hình diện mạo văn minh phương Tây cận – hiện đại?",
    diagramCaption: "Sơ đồ thành tựu Văn minh Hy Lạp – La Mã cổ đại (Nền tảng châu Âu) và Phong trào Văn hoá Phục hưng (Chủ nghĩa nhân văn & Khoa học thực nghiệm)",
    concepts: [
      {
        term: "Thể chế Thành bang (Polis) & Nền dân chủ cổ đại",
        definition: "Ở Hy Lạp cổ đại (tiêu biểu là A-ten) và La Mã thời Cộng hoà, điều kiện địa lí ven biển Địa Trung Hải bị chia cắt đã thúc đẩy kinh tế thủ công nghiệp, thương mại hàng hải và sự hình thành các <strong>nhà nước thành bang dân chủ chủ nô</strong>, tạo không gian tự do cho triết học, khoa học và nghệ thuật nở rộ."
      },
      {
        term: "Phong trào Văn hoá Phục hưng (Renaissance, thế kỉ XIV – XVII)",
        definition: "Phong trào văn hoá – tư tưởng lớn của giai cấp tư sản đang lên, khởi đầu từ <strong>I-ta-li-a (Ý)</strong> rồi lan khắp Tây Âu. Trên danh nghĩa khôi phục lại những giá trị tinh hoa của văn minh Hy Lạp – La Mã cổ đại, Phục hưng thực chất là cuộc cách mạng tư tưởng đề cao <strong>Chủ nghĩa nhân văn (Humanism)</strong>: tôn vinh giá trị con người, lí trí, tự do cá nhân và tinh thần khoa học thực nghiệm, lên án sự kìm hãm của Giáo hội Trung cổ và chế độ phong kiến."
      }
    ],
    sections: [
      {
        heading: "1. Thành tựu tiêu biểu của văn minh Hy Lạp – La Mã cổ đại",
        items: [
          "<strong>Chữ viết:</strong> Sáng tạo hệ thống <strong>bảng chữ cái Hy Lạp và bảng chữ cái La-tinh (Latin)</strong> gồm các nguyên âm và phụ âm đơn giản, linh hoạt – trở thành mẫu tự của hầu hết các ngôn ngữ phương Tây hiện đại và chữ Quốc ngữ Việt Nam; cùng hệ thống <strong>chữ số La Mã (I, V, X, L, C, D, M)</strong>.",
          "<strong>Văn học:</strong> Hệ thống Thần thoại Hy Lạp – La Mã đồ sộ; hai bộ sử thi bất hủ <strong>I-li-át và Ô-đi-xê</strong> của Hô-me-rơ (Homer); kịch bi – hài kịch cổ điển của E-sin (Aeschylus), Xô-phô-clơ (Sophocles), Ơ-ri-pít (Euripides).",
          "<strong>Triết học & Tư tưởng – Tôn giáo:</strong> Là quê hương của triết học phương Tây với hai trường phái <em>duy vật</em> (Ta-lét, Hê-ra-clít, Đê-mô-crít) và <em>duy tâm</em> (Xô-crát, Pla-tôn, A-ri-xtốt). Về tôn giáo: từ đa thần giáo cổ đại, đến thế kỉ I Công nguyên <strong>Cơ Đốc giáo (Kitô giáo)</strong> ra đời ở Đế quốc La Mã rồi trở thành tôn giáo lớn của châu Âu và thế giới.",
          "<strong>Khoa học tự nhiên & Sử học – Luật pháp:</strong> Toán học, Vật lí có <strong>Ta-lét (Thales), Pi-ta-go (Pythagoras), Ơ-clít (Euclid – hình học phẳng), Ác-si-mét (Archimedes – nguyên lí đòn bẩy, lực đẩy thuỷ tĩnh)</strong>; Y học có <strong>Hi-pô-crát (Hippocrates – 'cha đẻ của y học phương Tây')</strong>; Sử học có Hê-rô-đốt, Tuy-xi-đít; Thiên văn – Lịch pháp có <strong>Lịch Giu-li-an (Julian)</strong> (365 ngày 1/4). Luật pháp La Mã (Luật 12 bảng) đặt nền móng cho luật học châu Âu.",
          "<strong>Kiến trúc, Điêu khắc & Thể thao:</strong> Đền Pác-tê-nông (Parthenon – A-ten), Đấu trường Cô-li-dê (Colosseum – Rô-ma), Khải hoàn môn, cầu dẫn nước; tượng <em>Người ném đĩa</em> (My-rông), <em>Thần Vệ Nữ Mi-lô</em>, <em>Tượng nữ thần A-tê-na</em>. Thể thao có <strong>Đại hội Olympic cổ đại tại Ô-lim-pi-a từ năm 776 TCN</strong> (4 năm/lần) đề cao hoà bình và vẻ đẹp thể chất."
        ]
      },
      {
        heading: "2. Thành tựu của Phong trào Văn hoá Phục hưng (Thế kỉ XIV – XVII)",
        items: [
          "<strong>Văn học nhân văn:</strong> Thơ ca của Đan-tê (<em>Thần khúc</em>), tiểu thuyết trào phúng của Xéc-van-tét (<em>Đôn Ki-hô-tê</em> – Tây Ban Nha), đặc biệt là đỉnh cao kịch nghệ của <strong>Uy-li-am Sếch-xpia (William Shakespeare – Anh)</strong> với <em>Rô-mê-ô và Giu-li-ét, Hăm-lét, Ô-ten-lô</em>.",
          "<strong>Hội hoạ, Điêu khắc & Kiến trúc ('Thời đại của những người khổng lồ'):</strong><br>• <strong>Lê-ô-na đờ Vanh-xi (Leonardo da Vinci):</strong> Danh hoạ kiêm nhà bác học thiên tài với kiệt tác <em>Mô-na Li-sa (Mona Lisa)</em>, <em>Bữa tiệc cuối cùng</em>.<br>• <strong>Mi-ken-lăng-giơ (Michelangelo):</strong> Tượng <em>Đa-vít (David)</em>, <em>Đức Mẹ sầu bi (Pietà)</em>, bích hoạ vòm Nhà nguyện Xi-xtin.<br>• <strong>Ra-pha-en (Raphael):</strong> Bức <em>Trường học A-ten</em>, <em>Đức Mẹ Xi-xtin</em>. Nghệ thuật Phục hưng đột phá về luật phối cảnh xa gần, tỉ lệ giải phẫu cơ thể người và biểu cảm nội tâm sống động.",
          "<strong>Khoa học tự nhiên & Thiên văn học (Cuộc cách mạng nhận thức vũ trụ):</strong><br>• <strong>Ni-cô-lai Cô-péc-ních (Copernicus):</strong> Đưa ra <strong>Thuyết Nhật tâm</strong> (Mặt Trời là trung tâm, Trái Đất quay quanh Mặt Trời), đánh đổ thuyết Địa tâm của Giáo hội.<br>• <strong>Giordano Bruno</strong> và <strong>Ga-li-lê-ô Ga-li-lê (Galileo Galilei):</strong> Bảo vệ và chứng minh thuyết Nhật tâm bằng kính thiên văn, đặt nền móng cho khoa học thực nghiệm hiện đại."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Khai thác Tư liệu Nghệ thuật & Khoa học phương Tây",
      cases: [
        {
          name: "So sánh tượng Điêu khắc cổ điển Hy Lạp – Phục hưng với nghệ thuật Trung cổ",
          detail: "Nếu nghệ thuật nhà thờ Trung cổ gò bó cơ thể con người trong những khuôn mẫu khắc khổ, thần bí thì tượng <em>Người ném đĩa</em> (Hy Lạp cổ đại) và tượng <em>Đa-vít</em> của Mi-ken-lăng-giơ (Phục hưng) lại tôn vinh vẻ đẹp khoẻ khoắn, cân đối, tràn đầy sức sống và trí tuệ của con người trần thế."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Ý nghĩa lịch sử:</strong> Văn minh Hy Lạp – La Mã là cơ sở hình thành văn minh phương Tây; còn Văn hoá Phục hưng là cuộc cách mạng tư tưởng giải phóng con người khỏi đêm trường Trung cổ, mở đường trực tiếp cho Triết học Ánh sáng và các cuộc Cách mạng công nghiệp thời cận đại."
    ]
  },

  6: {
    num: 6,
    topic: 4,
    title: "Các cuộc cách mạng công nghiệp thời cận đại",
    subtitle: "Cách mạng công nghiệp lần thứ nhất (Nửa sau TK XVIII – giữa TK XIX) & Cách mạng công nghiệp lần thứ hai (Nửa sau TK XIX – 1914)",
    openingQuestion: "Những phát minh kĩ thuật nào đã tạo nên bước nhảy vọt từ lao động thủ công sang sản xuất cơ khí bằng máy hơi nước (CMCN lần 1) và sang thời đại điện khí hoá, sản xuất dây chuyền hàng loạt (CMCN lần 2)?",
    diagramCaption: "Sơ đồ so sánh Cách mạng công nghiệp lần thứ nhất (Cơ khí hoá – Hơi nước – Than đá) và Cách mạng công nghiệp lần thứ hai (Điện khí hoá – Thép – Dầu mỏ – Ô tô/Máy bay)",
    concepts: [
      {
        term: "Cách mạng công nghiệp (Industrial Revolution)",
        definition: "Bước phát triển nhảy vọt về chất của tư liệu lao động, chuyển từ <strong>sản xuất nhỏ thủ công sang sản xuất lớn bằng máy móc cơ khí</strong>, làm thay đổi căn bản năng suất lao động, cơ cấu kinh tế và diện mạo xã hội loài người."
      },
      {
        term: "Tiền đề bùng nổ tại nước Anh (Nửa sau thế kỉ XVIII)",
        definition: "Cách mạng công nghiệp lần thứ nhất khởi đầu ở <strong>Anh</strong> vì hội tụ đủ các điều kiện: Cách mạng tư sản nổ ra sớm xác lập thể chế chính trị thuận lợi; nguồn vốn tư bản dồi dào từ thương mại và thuộc địa; lực lượng lao động làm thuê đông đảo (do phong trào 'rào đất cướp ruộng'); tài nguyên than đá, quặng sắt phong phú và truyền thống kĩ thuật cơ khí."
      }
    ],
    sections: [
      {
        heading: "1. Thành tựu của Cách mạng công nghiệp lần thứ nhất (Nửa sau TK XVIII – giữa TK XIX)",
        items: [
          "<strong>Ngành Dệt (Ngành khởi đầu):</strong><br>• Năm <strong>1764</strong>, <strong>Giêm Ha-gri-vơ (James Hargreaves)</strong> chế tạo <strong>máy kéo sợi Gien-ni (Spinning Jenny)</strong> giúp một người thợ kéo được 16–18 cọc suốt cùng lúc.<br>• Năm <strong>1769</strong>, <strong>Ri-chác Ác-crai (Richard Arkwright)</strong> phát minh máy kéo sợi chạy bằng sức nước (dẫn tới sự ra đời của công xưởng đầu tiên).<br>• Năm <strong>1785</strong>, <strong>Ét-mơn Các-rai (Edmund Cartwright)</strong> chế tạo <strong>máy dệt chạy bằng sức nước/hơi nước</strong> làm năng suất dệt tăng gấp gần <strong>40 lần</strong>.",
          "<strong>Động lực học – Phát minh trung tâm (Máy hơi nước):</strong> Năm <strong>1784</strong>, <strong>Giêm Oát (James Watt)</strong> hoàn thiện và nhận bằng sáng chế <strong>máy hơi nước đơn và kép</strong> sử dụng nhiên liệu than đá. Ý nghĩa: Giải phóng nhà máy khỏi sự phụ thuộc vào vị trí bờ sông/sức nước, cho phép xây dựng nhà máy ở bất cứ đâu và thúc đẩy mọi ngành công nghiệp.",
          "<strong>Luyện kim & Giao thông vận tải:</strong><br>• Năm <strong>1784</strong>, <strong>Hen-ri Cót (Henry Cort)</strong> phát minh <strong>phương pháp 'pút-đinh' (Puddling)</strong> luyện gang thành sắt rèn chất lượng cao.<br>• Năm <strong>1804</strong>, <strong>Ri-chác Tơ-rê-vi-thích (Richard Trevithick)</strong> chế tạo đầu máy xe lửa chạy bằng hơi nước đầu tiên trên đường ray; năm 1814 Xti-phen-xơn (Stephenson) hoàn thiện đầu máy xe lửa.<br>• Năm <strong>1807</strong>, <strong>Rô-bớt Phơn-tơn (Robert Fulton – Mỹ)</strong> chế tạo thành công <strong>tàu thuỷ chạy bằng hơi nước</strong> thương mại đầu tiên."
        ]
      },
      {
        heading: "2. Thành tựu của Cách mạng công nghiệp lần thứ hai (Nửa sau TK XIX – 1914)",
        items: [
          "<strong>Năng lượng Điện ('Thời đại Điện khí hoá'):</strong><br>• Dựa trên khám phá cảm ứng điện từ của <strong>Mai-cơn Pha-ra-đây (Michael Faraday, 1821/1831)</strong>, máy phát điện và động cơ điện một chiều/xoay chiều (Nikola Tesla) ra đời.<br>• Năm <strong>1879</strong>, <strong>Tô-mát Ê-đi-xơn (Thomas Edison – Mỹ)</strong> phát minh <strong>bóng đèn điện sợi đốt</strong> thương mại và xây dựng nhà máy điện chiếu sáng đô thị.",
          "<strong>Luyện thép & Công nghiệp Hoá chất:</strong> Năm <strong>1856</strong>, <strong>Hen-ri Bê-sê-mơ (Henry Bessemer)</strong> phát minh <strong>lò cao luyện thép Bessemer</strong> chuyển gang lỏng thành thép nhanh, rẻ và bền chắc; tiếp đó là lò luyện thép Mác-tanh (Martin). Ngành hoá học sản xuất phân bón nhân tạo, thuốc nhuộm tổng hợp, dược phẩm, chất nổ.",
          "<strong>Động cơ đốt trong, Dầu mỏ, Ô tô & Hàng không:</strong><br>• Năm <strong>1860</strong>, <strong>G. Lơ-noa (Lenoir)</strong> chế tạo động cơ đốt trong chạy bằng khí đốt; sau đó hoàn thiện động cơ chạy bằng xăng và dầu đi-ê-zen, thúc đẩy ngành <strong>khai thác và lọc dầu mỏ</strong>.<br>• Năm <strong>1886</strong>, <strong>Các Ben (Karl Benz – Đức)</strong> chế tạo chiếc <strong>ô tô chạy bằng động cơ xăng</strong> thực tế đầu tiên. Năm <strong>1908</strong>, <strong>Hen-ri Pho (Henry Ford – Mỹ)</strong> áp dụng dây chuyền lắp ráp hàng loạt cho dòng xe <strong>Model T</strong>.<br>• Năm <strong>1903</strong>, <strong>hai anh em nhà Rai (Wilbur và Orville Wright – Mỹ)</strong> thử nghiệm thành công <strong>máy bay có động cơ chạy xăng</strong> đầu tiên.",
          "<strong>Thông tin liên lạc:</strong> Năm <strong>1876</strong>, <strong>A-lếch-xan-đơ Gra-ham Beo (Alexander Graham Bell)</strong> phát minh <strong>điện thoại</strong>; năm <strong>1897</strong>, <strong>Gu-li-ê-li-nô Mác-cô-ni (Guglielmo Marconi)</strong> phát minh hệ thống <strong>vô tuyến điện (Radio)</strong>."
        ]
      },
      {
        heading: "3. Ý nghĩa và tác động đa chiều (Kinh tế – Xã hội – Văn hoá)",
        items: [
          "<strong>Về kinh tế:</strong> Thay thế lao động thủ công bằng cơ khí hoá và điện khí hoá; hình thành các trung tâm công nghiệp lớn, hệ thống đường sắt xuyên lục địa, tàu thuỷ vượt đại dương và thúc đẩy thị trường thế giới thống nhất.",
          "<strong>Về xã hội:</strong> Thúc đẩy đô thị hoá mạnh mẽ; hình thành hai giai cấp cơ bản của xã hội tư bản là <strong>giai cấp tư sản công nghiệp</strong> và <strong>giai cấp vô sản (công nhân công nghiệp)</strong>. Mặt trái: Tình trạng bóc lột sức lao động nặng nề (đặc biệt là phụ nữ và trẻ em làm việc 12–16 giờ/ngày), phân hoá giàu nghèo và các cuộc chiến tranh xâm lược giành giật thuộc địa.",
          "<strong>Về văn hoá & môi trường:</strong> Nâng cao tiện nghi sinh hoạt, mở rộng giao lưu văn hoá qua điện thoại, điện báo, điện ảnh; nhưng đồng thời gây <strong>ô nhiễm khói bụi than đá, dầu mỏ và suy thoái môi trường tự nhiên</strong>."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Đối sánh nhanh CMCN lần thứ nhất và CMCN lần thứ hai",
      cases: [
        {
          name: "Trục chuyển dịch Năng lượng – Vật liệu – Động cơ – Tổ chức sản xuất",
          detail: "• <strong>CMCN lần 1 (1760s – 1840s):</strong> Than đá + Sắt + Máy hơi nước (James Watt) + Công xưởng cơ khí (khởi đầu từ Anh).<br>• <strong>CMCN lần 2 (1870s – 1914):</strong> Điện năng & Dầu mỏ + Thép (Bessemer) & Hoá chất + Động cơ điện & Động cơ đốt trong + Dây chuyền sản xuất hàng loạt (tiêu biểu ở Mỹ, Đức)."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Bài học phát triển bền vững:</strong> Từ hệ luỵ ô nhiễm môi trường của thời đại than đá và dầu mỏ trong CMCN lần 1 và 2, thế giới hiện nay đang quyết liệt chuyển dịch sang năng lượng tái tạo (điện gió, điện mặt trời, xe điện) và kinh tế tuần hoàn."
    ]
  },

  7: {
    num: 7,
    topic: 4,
    title: "Các cuộc cách mạng công nghiệp thời hiện đại",
    subtitle: "Cách mạng công nghiệp lần thứ ba (Nửa sau TK XX) & Cách mạng công nghiệp lần thứ tư (Đầu TK XXI)",
    openingQuestion: "Sự ra đời của máy tính điện tử, Internet (CMCN lần 3) và sự hội tụ của Trí tuệ nhân tạo AI, Internet vạn vật IoT, Dữ liệu lớn Big Data (CMCN lần 4) đã biến đổi xã hội loài người như thế nào?",
    diagramCaption: "Sơ đồ thành tựu Cách mạng công nghiệp lần thứ ba (Máy tính – Internet – Tự động hoá – Vũ trụ) và Cách mạng công nghiệp lần thứ tư (AI – IoT – Big Data – In 3D – Công nghệ sinh học/Nano)",
    concepts: [
      {
        term: "Cách mạng công nghiệp lần thứ ba (Cách mạng khoa học – kĩ thuật / kĩ thuật số)",
        definition: "Diễn ra từ những năm 40 của thế kỉ XX (khởi đầu ở Mỹ rồi lan sang Liên Xô, Nhật Bản, Tây Âu), dựa trên nền tảng <strong>điện tử học, máy tính điện tử, công nghệ thông tin (Internet) và tự động hoá sản xuất</strong>, đưa nhân loại chuyển từ văn minh công nghiệp sang <strong>văn minh thông tin / kinh tế tri thức</strong>."
      },
      {
        term: "Cách mạng công nghiệp lần thứ tư (Công nghiệp 4.0 – Đầu thế kỉ XXI)",
        definition: "Bắt đầu từ đầu thế kỉ XXI, đặc trưng bởi <strong>sự hội tụ và dung hợp giữa 3 lĩnh vực: Công nghệ kĩ thuật số (Digital), Vật lí (Physical) và Sinh học (Biological)</strong>; xoá mờ ranh giới giữa thế giới thực và thế giới ảo thông qua kết nối thông minh vạn vật."
      }
    ],
    sections: [
      {
        heading: "1. Thành tựu cốt lõi của Cách mạng công nghiệp lần thứ ba (Nửa sau thế kỉ XX)",
        items: [
          "<strong>Máy tính điện tử (Computer):</strong> Năm <strong>1946</strong>, chiếc máy tính điện tử đầu tiên <strong>ENIAC</strong> ra đời tại Mỹ (nặng gần 30 tấn, dùng bóng đèn điện tử chân không). Sau đó nhờ phát minh chất bán dẫn và vi mạch tích hợp (IC), máy tính cá nhân (PC) và máy tính xách tay phát triển vượt bậc về tốc độ tính toán và lưu trữ.",
          "<strong>Mạng Internet & World Wide Web (WWW):</strong> Từ mạng ARPANET (1969) của Mỹ phát triển thành mạng Internet toàn cầu. Năm <strong>1990</strong>, nhà khoa học người Anh <strong>Tim Béc-nơ-Li (Tim Berners-Lee)</strong> phát minh hệ thống <strong>World Wide Web (WWW)</strong>; năm <strong>1996</strong> công nghệ <strong>mạng không dây Wi-Fi</strong> được cấp bằng sáng chế, tạo cuộc cách mạng kết nối thông tin toàn cầu.",
          "<strong>Tự động hoá, Robot, Vật liệu mới & Năng lượng mới:</strong> Dây chuyền tự động điều khiển bằng máy tính và người máy công nghiệp (Robot) thay thế con người trong các khâu nặng nhọc, độc hại; sản xuất vật liệu pô-li-me, vật liệu siêu dẫn, năng lượng nguyên tử, năng lượng mặt trời.",
          "<strong>Công nghệ sinh học & Cách mạng xanh:</strong> Giải mã cấu trúc ADN, công nghệ di truyền, nuôi cấy mô tế bào, nhân bản vô tính (cừu Dolly, 1996) và tạo các giống cây trồng năng suất cao ('Cách mạng xanh' trong nông nghiệp).",
          "<strong>Chinh phục vũ trụ:</strong> Năm <strong>1957</strong>, Liên Xô phóng thành công vệ tinh nhân tạo đầu tiên <strong>Xpút-ních 1 (Sputnik 1)</strong>; năm 1961 I-u-ri Ga-ga-rin bay vào vũ trụ; năm <strong>1969</strong>, tàu Apollo 11 của Mỹ đưa <strong>Nin Am-strong (Neil Armstrong)</strong> đặt chân lên Mặt Trăng."
        ]
      },
      {
        heading: "2. Thành tựu cốt lõi của Cách mạng công nghiệp lần thứ tư (Đầu thế kỉ XXI)",
        items: [
          "<strong>Trí tuệ nhân tạo (Artificial Intelligence – AI) & Robot thông minh:</strong> Hệ thống máy tính có khả năng tự học (Machine Learning), nhận diện hình ảnh/giọng nói, xử lí ngôn ngữ tự nhiên và hỗ trợ ra quyết định phức tạp. (Ví dụ SGK: Năm <strong>2017</strong>, <strong>Robot Xô-phi-a – Sophia</strong> trở thành robot đầu tiên được Ả Rập Xê-út cấp quyền công dân).",
          "<strong>Internet kết nối vạn vật (Internet of Things – IoT):</strong> Mạng lưới kết nối hàng tỉ thiết bị, máy móc, phương tiện giao thông, cảm biến nhà thông minh và nhà máy thông minh để tự động thu thập và trao đổi dữ liệu theo thời gian thực.",
          "<strong>Dữ liệu lớn (Big Data) & Điện toán đám mây (Cloud Computing):</strong> Lưu trữ và phân tích khối lượng dữ liệu khổng lồ trên hạ tầng đám mây phục vụ dự báo kinh tế, y tế, giao thông và quản trị xã hội.",
          "<strong>Công nghệ In 3D (Additive Manufacturing), Công nghệ Nano & Sinh học thế hệ mới:</strong><br>• <em>In 3D:</em> Đắp lớp vật liệu theo thiết kế số để tạo ra chi tiết máy, bộ phận y tế giả, thậm chí in nhà ở giúp tiết kiệm nhân lực và giảm phế thải.<br>• <em>Công nghệ Nano:</em> Điều khiển cấu trúc vật chất ở quy mô nanomet ($10^{-9}\\text{ m}$) ứng dụng trong y học đích và điện tử.<br>• <em>Công nghệ sinh học 4.0:</em> Chỉnh sửa gene (CRISPR), y học cá thể hoá và sinh học tổng hợp."
        ]
      },
      {
        heading: "3. Tác động toàn diện và Trách nhiệm công dân số",
        items: [
          "<strong>Tác động tích cực:</strong> Hình thành nhà máy thông minh, chính phủ số, kinh tế số, thương mại điện tử, y tế từ xa và học tập trực tuyến suốt đời; giải phóng sức lao động và nâng cao chất lượng sống.",
          "<strong>Thách thức & Hệ luỵ:</strong> Nguy cơ mất việc làm ở các ngành lao động giản đơn do tự động hoá và AI thay thế; gia tăng khoảng cách số (bất bình đẳng công nghệ); nguy cơ <strong>rò rỉ dữ liệu cá nhân, xâm phạm quyền riêng tư, tội phạm mạng, tin giả (fake news), lừa đảo trực tuyến và chứng nghiện công nghệ</strong>.",
          "<strong>Quy tắc ứng xử có trách nhiệm trên không gian mạng:</strong> Khi tiếp nhận thông tin chưa kiểm chứng trên Internet, tuyệt đối không vội vàng bình luận hay chia sẻ; cần kiểm tra nguồn gốc, tác giả, thời điểm đăng và đối chiếu với các cơ quan thông tấn chính thống; tuân thủ Luật An ninh mạng và chuẩn mực đạo đức số."
        ]
      }
    ],
    sourceAnalysis: {
      title: "Phân biệt bản chất CMCN 3.0 và CMCN 4.0",
      cases: [
        {
          name: "Từ Tự động hoá cơ học – điện tử (3.0) đến Hệ thống Thực – Ảo thông minh tự học (4.0)",
          detail: "Nếu trong CMCN lần thứ ba, máy tính và robot chỉ thực hiện lặp đi lặp lại theo các câu lệnh lập trình cố định sẵn của con người, thì trong CMCN lần thứ tư, sự kết hợp giữa IoT + Big Data + AI giúp hệ thống máy móc có khả năng tự thu thập dữ liệu, tự học hỏi và tự tối ưu hoá quy trình."
        }
      ]
    },
    significanceAndConnection: [
      "<strong>Hành trang cho học sinh THPT:</strong> Để thích ứng với kỷ nguyên AI và CMCN 4.0, học sinh cần trang bị tư duy phản biện, năng lực số, ngoại ngữ, khả năng sáng tạo, trí tuệ cảm xúc (EQ) và ý thức tự học suốt đời."
    ]
  }
};

module.exports = { topics, lessonsP1 };
