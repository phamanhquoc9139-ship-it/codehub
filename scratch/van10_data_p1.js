// scratch/van10_data_p1.js
// Ngữ Văn 10 - Bộ Kết nối tri thức với cuộc sống (Tập 1: Bài 1 - Bài 5)

const volumes = [
  {
    num: 1,
    title: "TẬP MỘT",
    subtitle: "Truyện kể, Thơ ca, Văn nghị luận, Sử thi & Sân khấu dân gian",
    icon: "fa-book-open-reader",
    lessons: [1, 2, 3, 4, 5]
  },
  {
    num: 2,
    title: "TẬP HAI",
    subtitle: "Thơ văn Nguyễn Trãi, Quyền năng người kể chuyện, Văn bản thông tin & Hành trang cuộc sống",
    icon: "fa-feather-pointed",
    lessons: [6, 7, 8, 9]
  }
];

const lessonsP1 = {
  1: {
    num: 1,
    volume: 1,
    title: "Sức hấp dẫn của truyện kể",
    subtitle: "Thần thoại, Truyện truyền kì, Truyện ngắn hiện đại & Từ Hán Việt",
    genreFocus: "Truyện kể, Thần thoại, Truyền kì, Truyện ngắn",
    vietnameseFocus: "Sử dụng từ Hán Việt",
    writingFocus: "Nghị luận phân tích, đánh giá một tác phẩm truyện",
    speakingFocus: "Giới thiệu, đánh giá về nội dung và nghệ thuật của một tác phẩm truyện",
    diagramCaption: "Sơ đồ cấu trúc tự sự (Cốt truyện – Người kể chuyện – Nhân vật) và đối sánh 3 mạch văn bản trong Bài 1",
    triThucNguVan: [
      {
        term: "Cốt truyện & Sự kiện",
        definition: "<strong>Cốt truyện</strong> là hệ thống sự kiện hoặc chuỗi sự kiện được tổ chức theo mạch nhất định tạo nên tác phẩm tự sự hoặc kịch. <strong>Sự kiện</strong> là việc xảy ra dẫn đến những thay đổi có ý nghĩa hoặc tạo bước ngoặt trong thế giới nghệ thuật và số phận nhân vật."
      },
      {
        term: "Truyện kể",
        definition: "Các sự kiện không tồn tại rời rạc mà được triển khai theo một <strong>mạch kể</strong>, kết hợp nhuần nhuyễn với chi tiết nghệ thuật, lời kể, lời tả, lời bình luận để tạo thành một câu chuyện hoàn chỉnh có sức hấp dẫn."
      },
      {
        term: "Người kể chuyện & Lời văn tự sự",
        definition: "<strong>Người kể chuyện</strong> là vai kể do tác giả tạo ra để dẫn dắt người đọc vào thế giới tác phẩm (cần phân biệt rõ người kể chuyện với tác giả ngoài đời). <strong>Lời người kể chuyện</strong> dùng để kể, tả, bình luận, dẫn dắt; còn <strong>lời nhân vật</strong> (đối thoại, độc thoại) thể hiện trực tiếp tính cách, cảm xúc, quan hệ và xung đột."
      },
      {
        term: "Nhân vật văn học",
        definition: "Hình tượng con người (hoặc thần linh, loài vật, đồ vật được nhân cách hoá) được khắc hoạ bằng chất liệu ngôn từ nghệ thuật. Qua nhân vật, tác phẩm khám phá và lí giải đời sống con người. Khi phân tích nhân vật cần chú ý: <em>ngoại hình, hành động, lời nói, suy nghĩ nội tâm, mối quan hệ với nhân vật khác và sự biến đổi tính cách</em>."
      },
      {
        term: "Thần thoại (Suy nguyên & Sáng tạo)",
        definition: "Thể loại truyện kể dân gian ra đời sớm nhất, kể về thế giới thần linh nhằm giải thích vũ trụ, hiện tượng tự nhiên và đời sống theo quan niệm cổ xưa. Chia làm hai nhóm chính:<br>• <strong>Thần thoại suy nguyên:</strong> lí giải nguồn gốc vũ trụ, muôn loài và con người.<br>• <strong>Thần thoại sáng tạo:</strong> kể về công cuộc chinh phục tự nhiên và sáng tạo văn hoá của con người.<br><strong>Đặc trưng nghệ thuật:</strong> cốt truyện đơn giản, đơn tuyến; thời gian phiếm chỉ/cổ sơ; không gian vũ trụ bao la; nhân vật thần có vóc dáng khổng lồ và năng lực phi thường, gửi gắm niềm tin, khát vọng chinh phục tự nhiên của cộng đồng tối cổ."
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Truyện về các vị thần sáng tạo thế giới",
        author: "Thần thoại Việt Nam (Thần Trụ Trời, Thần Sét, Thần Gió)",
        genre: "Thần thoại suy nguyên",
        isPracticeReading: false,
        summary: [
          "<strong>Thần Trụ Trời:</strong> Vị thần khổng lồ xuất hiện thuở hỗn mang, dùng sức vóc phi thường đội trời lên cao rồi đào đất, đập đá đắp cột chống trời, phân tách trời – đất. Khi cột đã vững, thần phá cột ném đất đá đi khắp nơi tạo thành núi, đảo, gò đồi; chỗ đào đất trũng xuống thành biển rộng.",
          "<strong>Thần Sét:</strong> Danh hiệu Thiên Lôi (ông Sấm), mặt mũi nanh ác, tiếng quát tháo dữ dội, chuyên thi hành luật pháp nhà trời bằng lưỡi búa đá. Thần tính nóng nảy nên có lúc đánh nhầm người, vật vô tội và bị Ngọc Hoàng phạt nằm im dưới gốc cây (lí giải mùa đông ít sấm sét).",
          "<strong>Thần Gió:</strong> Hình dạng kì quặc (không có đầu), bảo bối là chiếc quạt mầu nhiệm tạo gió nhỏ hay bão lớn. Đứa con của thần nghịch quạt làm đổ gạo của người trần nên bị phạt đi chăn trâu, hoá thành cây ngải gió báo hiệu mưa bão."
        ],
        analysis: [
          "<strong>Chủ đề & Nhận thức cổ sơ:</strong> Thể hiện trí tưởng tượng hồn nhiên, bay bổng của người Việt cổ nhằm giải thích sự hình thành địa hình, trời đất và các hiện tượng khí tượng (sấm sét, mưa giông, gió bão).",
          "<strong>Nghệ thuật đặc sắc:</strong> Nhân cách hoá các lực lượng tự nhiên thành các vị thần có công việc, tính khí gần gũi với đời sống con người; phóng đại kích thước, sức mạnh kì ảo trong không gian vũ trụ và thời gian phiếm chỉ.",
          "<strong>Hướng đọc hiểu:</strong> Xác định từng truyện giải thích hiện tượng tự nhiên nào, chỉ ra công việc – tính khí của từng vị thần và yếu tố kì ảo. Lưu ý: xem đây là cách hình dung thế giới bằng tư duy thần thoại của người xưa, không đồng nhất với kiến thức khoa học hiện đại."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Tản Viên từ Phán sự lục (Chuyện chức Phán sự đền Tản Viên)",
        author: "Nguyễn Dữ (trích Truyền kì mạn lục)",
        genre: "Truyện truyền kì trung đại",
        isPracticeReading: false,
        summary: [
          "<strong>Khởi đầu & Hành động đốt đền:</strong> Ngô Tử Văn (tên là Soạn, người huyện Yên Dũng, đất Lạng Giang) vốn là kẻ sĩ khảng khái, nóngảy, thấy sự tà gian thì không chịu được. Tức giận trước việc hồn ma viên tướng giặc phương Bắc (họ Thôi) chiếm giữ đền thiêng và tác oai tác quái hại dân, chàng tắm gội sạch sẽ, khấn trời rồi châm lửa đốt đền.",
          "<strong>Đối mặt thử thách & Đấu tranh dưới âm phủ:</strong> Sau khi đốt đền, Tử Văn lên cơn sốt, gặp tên tướng giặc đe doạ và được Thổ công kể rõ sự tình. Bị quỷ sứ bắt xuống Minh ti trước mặt Diêm Vương, dù bị vu cáo và đe doạ ném vào vạc dầu, Tử Văn vẫn kiên cường kêu oan, đối chất đanh thép và xin đem tư giấy đến đền Tản Viên xác minh.",
          "<strong>Kết cục chiến thắng của chính nghĩa:</strong> Lời tấu của Tử Văn được chứng thực, Diêm Vương trừng trị tên tướng giặc họ Thôi và trách phạt phán quan ăn của đút. Tử Văn được sống lại và sau đó được Thổ công tiến cử giữ chức Phán sự ở đền Tản Viên."
        ],
        analysis: [
          "<strong>Phẩm chất nhân vật & Chủ đề:</strong> Ca ngợi khí phách cương trực, dũng cảm, kiên quyết bảo vệ chính nghĩa và tinh thần dân tộc của kẻ sĩ Ngô Tử Văn; đồng thời phơi bày, phê phán lũ gian tà giả mạo, tệ tham nhũng nhận hối lộ nơi quan trường và khẳng định niềm tin 'tà không thể thắng chính'.",
          "<strong>Nghệ thuật truyền kì:</strong> Kết hợp nhuần nhuyễn hiện thực đời sống với thế giới kì ảo (hồn ma, Thổ công, Minh ti, Diêm Vương); tạo xung đột kịch tính tăng cấp qua các màn đối thoại và tranh biện; khắc hoạ nhân vật sắc nét qua hành động quyết liệt và ngôn từ đanh thép; kết thúc có hậu kèm lời bình giàu ý nghĩa giáo huấn."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Chữ người tử tù",
        author: "Nguyễn Tuân (trích tập Vang bóng một thời)",
        genre: "Truyện ngắn hiện đại",
        isPracticeReading: false,
        summary: [
          "<strong>Tình huống truyện éo le:</strong> Cuộc gặp gỡ kì lạ giữa Huấn Cao – người đứng đầu cuộc khởi nghĩa chống triều đình bị kết án tử hình nhưng nổi tiếng viết chữ vuông đẹp, có khí phách hiên ngang – với viên Quản ngục – người đại diện cho trật tự nhà tù nhưng lại có tâm hồn biệt nhỡn liên tài, khao khát xin được chữ Huấn Cao.",
          "<strong>Sự chuyển biến thái độ của Huấn Cao:</strong> Ban đầu Huấn Cao khinh bạc, lạnh lùng xua đuổi vì tưởng Quản ngục là kẻ tiểu nhân thị uy; nhưng khi hiểu tấm lòng 'biết giá người, biết trọng người ngay' của Quản ngục qua lời thơ lại, Huấn Cao xúc động nhận lời cho chữ vì 'ta nhất sinh không vì vàng ngọc hay quyền thế mà ép mình viết câu đối bao giờ'.",
          "<strong>Cảnh cho chữ chưa từng có:</strong> Đêm cuối cùng trước khi Huấn Cao ra pháp trường, trong buồng giam chật hẹp, ẩm ướt, tối tăm, dưới ánh đuốc tẩm dầu rực sáng, người tử tù cổ đeo gông, chân vướng xiềng đang dậm tô nét chữ trên tấm lụa trắng tinh, rồi đỡ viên Quản ngục dậy với lời khuyên từ bỏ chốn bùn nhơ để giữ lấy 'thiên lương'."
        ],
        analysis: [
          "<strong>Chủ đề tư tưởng:</strong> Khẳng định sự chiến thắng bất diệt của cái Đẹp, cái Thiện, tài hoa và thiên lương trong sáng trước cái xấu xa, tàn bạo và bóng tối nhà tù; tôn vinh truyền thống trọng chữ nghĩa, nhân cách cao quý của dân tộc.",
          "<strong>Nghệ thuật đặc sắc:</strong> Xây dựng tình huống truyện độc đáo, giàu kịch tính; thủ pháp đối lập – tương phản bậc thầy (ánh sáng – bóng tối, hương thơm mực thỏi – mùi hôi ẩm nhà ngục, tự do tinh thần – xiềng xích thể xác); đảo ngược vị thế quyền lực; ngôn ngữ cổ kính, giàu tính tạo hình và nhịp điệu trang trọng."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Tê-đê (Theseus)",
        author: "Trích Thần thoại Hy Lạp – Edith Hamilton kể",
        genre: "Thần thoại anh hùng Hy Lạp",
        isPracticeReading: true,
        summary: [
          "Kể về hành trình của người anh hùng Tê-đê – con trai vua Ê-giê xứ A-ten: tự nguyện vượt đường bộ đầy cướp bóc để đến gặp cha, tình nguyện làm vật hiến tế vào mê cung trên đảo Crét, tiêu diệt quái vật đầu bò mình người Mi-nô-tơ nhờ cuộn chỉ của công chúa A-ri-an và trở thành vị vua anh minh, thiết lập nền dân chủ cho A-ten."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Nhận diện cốt truyện thử thách – kì tích của người anh hùng cổ đại; kết hợp yếu tố kì ảo (mê cung, quái vật Mi-nô-tơ) với khát vọng xây dựng xã hội công bằng, văn minh, trọng trí tuệ và lòng quả cảm của người Hy Lạp cổ."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Sử dụng từ Hán Việt",
      concepts: [
        "<strong>Nhận diện yếu tố Hán Việt:</strong> Nhiều từ ghép Hán Việt được cấu tạo từ các yếu tố có nghĩa xác định (đẳng lập hoặc chính phụ). Cần hiểu đúng nghĩa của từng yếu tố và nghĩa tổng hợp của cả từ trong ngữ cảnh cụ thể.",
        "<strong>Nguyên tắc sử dụng:</strong> Chọn từ Hán Việt đúng nghĩa, đúng sắc thái biểu cảm (trang trọng, cổ kính, khái quát) và phù hợp phong cách văn bản.",
        "<strong>Các lỗi thường gặp cần tránh:</strong><br>1. <em>Dùng từ gần âm nhưng sai nghĩa:</em> Nhầm <strong>tri thức</strong> (hiểu biết, kiến thức) với <strong>trí thức</strong> (người lao động trí óc có trình độ cao); nhầm <strong>yếu điểm</strong> (điểm quan trọng nhất, trọng yếu) với <strong>điểm yếu</strong> (nhược điểm, hạn chế); nhầm <strong>ẩn dật</strong> với <strong>ẩn nấp</strong>.<br>2. <em>Lạm dụng từ Hán Việt:</em> Dùng từ Hán Việt cầu kì khi đã có từ thuần Việt giản dị, tự nhiên tương đương.<br>3. <em>Suy diễn nghĩa tuỳ tiện:</em> Không tách rời một yếu tố Hán Việt rồi đoán mò nghĩa khi chưa đối chiếu từ điển hoặc ngữ cảnh."
      ],
      examples: [
        {
          wrong: "Anh ấy đã nhận ra yếu điểm của bản thân để khắc phục trong kì thi tới.",
          right: "Anh ấy đã nhận ra điểm yếu (hoặc nhược điểm) của bản thân để khắc phục trong kì thi tới.",
          note: "'Yếu điểm' có nghĩa là điểm trọng yếu, quan trọng nhất; muốn chỉ thiếu sót phải dùng 'điểm yếu' hoặc 'nhược điểm'."
        },
        {
          wrong: "Kho tàng trí thức của nhân loại vô cùng rộng lớn.",
          right: "Kho tàng tri thức của nhân loại vô cùng rộng lớn.",
          note: "'Tri thức' là hệ thống hiểu biết; 'trí thức' là tầng lớp người làm việc trí óc."
        }
      ]
    },
    viet: {
      title: "Viết bài văn nghị luận phân tích, đánh giá một tác phẩm truyện",
      requirements: [
        "Giới thiệu ngắn gọn tên tác phẩm, tác giả, xuất xứ và nêu nhận định khái quát về giá trị của truyện.",
        "Tóm tắt cốt truyện vừa đủ làm cơ sở cho phần phân tích (không biến bài nghị luận thành bài kể lại truyện).",
        "Phân tích làm sáng tỏ <strong>chủ đề</strong> (tư tưởng, thông điệp nhân sinh) và những <strong>nét đặc sắc về hình thức nghệ thuật</strong> (cốt truyện, tình huống truyện, nghệ thuật xây dựng nhân vật, ngôi kể, điểm nhìn, lời kể/lời thoại, chi tiết tiêu biểu, kết thúc...).",
        "Lập luận chặt chẽ; mỗi luận điểm đều gắn với dẫn chứng trích từ văn bản và phân tích tác dụng nghệ thuật."
      ],
      steps: [
        {
          step: "Bước 1: Chuẩn bị viết",
          detail: "Chọn một tác phẩm truyện (thần thoại, truyền kì, truyện ngắn...). Đọc kĩ lại văn bản, xác định chủ đề chính và 2–3 phương diện nghệ thuật nổi bật nhất của truyện."
        },
        {
          step: "Bước 2: Tìm ý và lập dàn ý",
          detail: "Đặt câu hỏi tìm ý: Truyện viết về đề tài gì? Tình huống/xung đột nào là bước ngoặt? Nhân vật hiện lên qua những chi tiết nào? Ngôi kể và giọng điệu tạo hiệu quả gì? Lập dàn ý 3 phần: Mở bài (dẫn dắt, nêu tác phẩm & nhận định chung) – Thân bài (tóm tắt ngắn; phân tích chủ đề; phân tích các đặc sắc nghệ thuật gắn với chủ đề) – Kết bài (khẳng định giá trị tác phẩm & bài học tiếp nhận)."
        },
        {
          step: "Bước 3: Viết bài",
          detail: "Triển khai từng luận điểm thành các đoạn văn mạch lạc. Kết hợp lí lẽ phân tích với trích dẫn chi tiết, lời thoại ngắn gọn, chuẩn xác; luôn giải thích 'chi tiết/nghệ thuật đó góp phần thể hiện chủ đề như thế nào'."
        },
        {
          step: "Bước 4: Kiểm tra và chỉnh sửa",
          detail: "Đối chiếu với yêu cầu kiểu bài: Đã đủ luận điểm về cả chủ đề và nghệ thuật chưa? Có đoạn nào sa vào kể lể cốt truyện không? Kiểm tra cách dùng từ Hán Việt, chính tả và phương tiện liên kết câu."
        }
      ]
    },
    noiVaNghe: {
      title: "Giới thiệu, đánh giá về nội dung và nghệ thuật của một tác phẩm truyện",
      speakerTasks: [
        "Mở đầu: Chào hỏi, giới thiệu tên tác phẩm truyện, tác giả và lí do lựa chọn tác phẩm để chia sẻ.",
        "Triển khai: Trình bày tóm tắt cốt truyện ngắn gọn; lần lượt nêu các luận điểm đánh giá về chủ đề và đặc sắc nghệ thuật kèm dẫn chứng tiêu biểu.",
        "Kết thúc: Khẳng định lại sức hấp dẫn của truyện và mời người nghe trao đổi. Sử dụng từ ngữ chuyển tiếp tự nhiên, điều chỉnh giọng điệu và dùng slide/hình ảnh minh hoạ vừa đủ."
      ],
      listenerTasks: [
        "Theo dõi và ghi chép nhanh các luận điểm chính, những chi tiết đắt giá hoặc điểm còn băn khoăn trong bài nói.",
        "Nhận xét trên tinh thần xây dựng, có căn cứ từ văn bản; đặt câu hỏi trao đổi ngắn gọn và tôn trọng góc nhìn cảm thụ khác biệt của người nói."
      ]
    },
    cungCoMoRong: [
      "Lập bảng đối sánh 3 văn bản đọc chính (<em>Truyện về các vị thần sáng tạo thế giới</em>, <em>Tản Viên từ Phán sự lục</em>, <em>Chữ người tử tù</em>) theo các tiêu chí: Thể loại, Không gian – Thời gian, Nhân vật trung tâm, Yếu tố kì ảo/Tình huống truyện và Chủ đề.",
      "Tập đọc thêm các truyện thần thoại Việt Nam, truyện trong <em>Truyền kì mạn lục</em> (Nguyễn Dữ) và tập <em>Vang bóng một thời</em> (Nguyễn Tuân)."
    ]
  },

  2: {
    num: 2,
    volume: 1,
    title: "Vẻ đẹp của thơ ca",
    subtitle: "Thơ hai-cư Nhật Bản, Thơ Đường luật, Thơ mới & Nhạc điệu ngôn từ",
    genreFocus: "Thơ trữ tình (Haiku, Đường luật thất ngôn bát cú, Thơ mới, Phê bình thơ)",
    vietnameseFocus: "Sửa lỗi dùng từ và lỗi về trật tự từ",
    writingFocus: "Viết văn bản nghị luận phân tích, đánh giá một tác phẩm thơ",
    speakingFocus: "Giới thiệu, đánh giá về nội dung và nghệ thuật của một tác phẩm thơ",
    diagramCaption: "Sơ đồ cấu trúc bài thơ trữ tình (Nhân vật trữ tình – Hình ảnh – Nhạc điệu/Thi luật – Cấu tứ) và đối sánh Haiku – Đường luật – Thơ mới",
    triThucNguVan: [
      {
        term: "Nhân vật trữ tình (Chủ thể trữ tình)",
        definition: "Người trực tiếp bộc lộ rung động, tâm tư, cảm xúc, suy ngẫm trong bài thơ. Nhân vật trữ tình có mối liên hệ mật thiết với tác giả nhưng <strong>không mặc nhiên đồng nhất</strong> hoàn toàn với tác giả ngoài đời."
      },
      {
        term: "Hình ảnh thơ",
        definition: "Các sự vật, hiện tượng, trạng thái đời sống được tái tạo một cách cụ thể, sống động bằng ngôn từ nghệ thuật, khơi gợi cảm giác (đặc biệt là thị giác) đồng thời hàm chứa những ý nghĩa tinh thần, biểu tượng sâu sắc."
      },
      {
        term: "Vần, Nhịp điệu & Nhạc điệu",
        definition: "• <strong>Vần:</strong> Sự cộng hưởng, hoà âm giữa các tiếng ở cuối dòng (vần chân) hoặc giữa dòng (vần lưng), có tác dụng liên kết các dòng thơ và tạo âm hưởng.<br>• <strong>Nhịp điệu:</strong> Những điểm ngắt, ngừng có quy luật hoặc biến hoá do cách tổ chức ngôn từ, tạo cảm giác vận động của cảm xúc.<br>• <strong>Nhạc điệu:</strong> Âm hưởng chung của bài thơ được tạo nên từ sự phối hợp tổng hoà giữa vần, nhịp, điệp từ/ngữ và sự luân phiên thanh bằng (B) – trắc (T)."
      },
      {
        term: "Đối, Thi luật & Thể thơ",
        definition: "• <strong>Đối:</strong> Cách tổ chức hai vế câu cân xứng, sóng đôi nhau cả về từ loại, cú pháp lẫn ý nghĩa (đối tương đồng hoặc đối tương phản), đặc biệt phổ biến trong thơ Đường luật (câu 3–4 và câu 5–6).<br>• <strong>Thi luật:</strong> Toàn bộ quy tắc tổ chức hình thức thơ như gieo vần, ngắt nhịp, hoà thanh (luật bằng trắc, niêm), phép đối, số tiếng/số dòng.<br>• <strong>Thể thơ:</strong> Sự thống nhất giữa một mô hình thi luật nhất định với loại hình nội dung biểu đạt trong lịch sử văn học (như thơ hai-cư, thất ngôn bát cú Đường luật, lục bát, tự do...)."
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Chùm thơ hai-cư (Haiku) Nhật Bản",
        author: "Matsuo Basho, Chiyo, Kobayashi Issa",
        genre: "Thơ hai-cư (Haiku) cổ điển Nhật Bản",
        isPracticeReading: false,
        summary: [
          "<strong>Bài 1 (Basho):</strong> <em>Trên cành khô / cánh quạ đậu / chiều thu</em> – Bức tranh thu tối giản như bức tranh thuỷ mặc với nét chấm phá của cánh quạ đen trên cành khô giữa hoàng hôn tĩnh lặng, cô tịch.",
          "<strong>Bài 2 (Chiyo):</strong> <em>Ôi hoa triêu nhan! / Dây gầu vương hoa bên giếng / Đành xin nước nhà bên</em> – Khoảnh khắc dừng lại đầy trân trọng, nâng niu trước sự sống mong manh và cái đẹp tinh khôi của đoá hoa bìm bìm (triêu nhan) quấn quanh dây gầu buổi sớm.",
          "<strong>Bài 3 (Issa):</strong> <em>Chậm rì, chậm rì / kìa con ốc nhỏ / trèo núi Fuji</em> – Sự tương phản thú vị giữa chú ốc sên nhỏ bé, chậm chạp với ngọn núi Phú Sĩ hùng vĩ, gợi suy ngẫm về hành trình kiên nhẫn và sự bình đẳng của muôn loài trong vũ trụ."
        ],
        analysis: [
          "<strong>Đặc trưng thể loại:</strong> Thơ hai-cư nguyên tác tiếng Nhật gồm 3 dòng (5–7–5 âm tiết), có <em>quý ngữ</em> (từ chỉ mùa: chiều thu, hoa triêu nhan mùa hạ, ốc sên mùa hạ). Khi đọc bản dịch tiếng Việt, không máy móc đếm âm tiết Nhật mà cần cảm nhận sự cô đọng, hàm súc, khoảng lặng ('chân không') và sức gợi mở liên tưởng.",
          "<strong>Vẻ đẹp tư tưởng:</strong> Tinh thần Thiền tông, sự giao cảm tĩnh tại, trân trọng từng khoảnh khắc nhỏ bé của thiên nhiên và vạn vật."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Thu hứng (Cảm xúc mùa thu – Bài 1)",
        author: "Đỗ Phủ (Bản dịch thơ: Nguyễn Công Trứ)",
        genre: "Thơ thất ngôn bát cú Đường luật",
        isPracticeReading: false,
        summary: [
          "<strong>Hai câu đề & thực (Cảnh thu hùng vĩ mà bi tráng):</strong> Rừng phong tiêu điều dưới sương móc trắng xoá, núi Vu kẹp Vu Giáp khí thu hiu hắt; sóng vọt tận lưng trời giữa lòng sông, mây sa sầm mặt đất đùn nơi cửa ải – bức tranh thiên nhiên dữ dội, chao đảo như chính thời cuộc loạn li.",
          "<strong>Hai câu luận & kết (Tình thu cô đơn, đau đáu nỗi nhớ quê):</strong> Khóm cúc nở hoa hai lần làm tuôn dòng lệ cũ, con thuyền lẻ loi buộc chặt mối tình nhà; nơi thành Bạch Đế chiều tối rộn tiếng chày đập vải may áo rét càng thôi thúc nỗi lòng người tha hương nơi đất khách."
        ],
        analysis: [
          "<strong>Chủ đề:</strong> Nỗi buồn thương tha hương, nỗi cô đơn tuổi già và tấm lòng ưu thời mẫn thế (lo cho đất nước, thương nhớ quê hương) của 'Thi thánh' Đỗ Phủ.",
          "<strong>Nghệ thuật Đường luật mẫu mực:</strong> Kết cấu 4 phần (Đề – Thực – Luận – Kết) chặt chẽ; phép đối chỉnh trang ở cặp câu thực (3–4: <em>Giang gian ba lãng kiêm thiên dũng / Tái thượng phong vân tiếp địa âm</em>) và cặp câu luận (5–6: <em>Tùng cúc lưỡng khai tha nhật lệ / Cô chu nhất hệ cố viên tâm</em>); bút pháp tả cảnh ngụ tình chuyển từ điểm nhìn cao – rộng sang gần – sâu lắng."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Mùa xuân chín",
        author: "Hàn Mặc Tử",
        genre: "Thơ mới (7 chữ)",
        isPracticeReading: false,
        summary: [
          "<strong>Khổ 1 & 2 (Khung cảnh xuân tươi mới, rạo rực):</strong> Ánh nắng mới ửng lên trong làn khói, mái nhà tranh lấm tấm vàng, bóng xuân gợn trên giàn thiên lí; làn nắng ửng cùng cỏ xanh non và tiếng hát vắt vẻo trên sườn núi của đám cô thôn nữ.",
          "<strong>Khổ 3 & 4 (Độ 'chín' của mùa xuân và niềm bâng khuâng nuối tiếc):</strong> Tiếng ca vắt vẻo lưng chừng núi, lời hát như ngây như dại; khách xa chợt nhớ quê làng với hình ảnh 'chị ấy năm nay còn gánh thóc / dọc bờ sông trắng nắng chang chang'."
        ],
        analysis: [
          "<strong>Ý nghĩa nhan đề 'Mùa xuân chín':</strong> Từ 'chín' gợi trạng thái mùa xuân đang ở độ viên mãn, căng tràn sức sống nhất, đồng thời ẩn chứa dự cảm về sự phôi pha của thời gian và nỗi khao khát giao cảm thiết tha với cuộc đời của thi sĩ.",
          "<strong>Nghệ thuật:</strong> Kết hợp hài hoà chất cổ điển và hiện đại; ngôn từ giàu tính tạo hình và chuyển đổi cảm giác (<em>nắng ửng, khói mơ tan, tiếng ca vắt vẻo, xuân chín</em>); cách ngắt nhịp linh hoạt theo dòng cảm xúc của nhân vật trữ tình."
        ]
      },
      {
        order: "Văn bản 4",
        title: "Bản hoà âm ngôn từ trong Tiếng thu của Lưu Trọng Lư",
        author: "Chu Văn Sơn",
        genre: "Văn bản nghị luận / Phê bình thơ",
        isPracticeReading: false,
        summary: [
          "Nhà phê bình Chu Văn Sơn đi sâu giải mã sức quyến rũ của bài thơ <em>Tiếng thu</em> (Lưu Trọng Lư) từ góc độ nhạc tính ngôn từ: sự hoà điệu giữa 'tiếng thu' của造 vật (tiếng trăng thổn thức, tiếng lá thu xào xạc, tiếng nai vàng ngơ ngác) với 'tiếng lòng' xao động của thi nhân và 'tiếng thơ' (nhịp thơ ngũ ngôn, hệ thống thanh bằng – trắc, từ láy tượng thanh/tượng hình)."
        ],
        analysis: [
          "<strong>Giá trị phương pháp đọc thơ:</strong> Cho thấy hình thức âm thanh, nhịp điệu và tổ chức ngôn từ trong thơ không phải lớp vỏ trang trí bên ngoài mà chính là sự hoá thân trực tiếp của cảm xúc và tâm hồn thi sĩ."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Cánh đồng",
        author: "Ngân Hoa",
        genre: "Thơ tự do hiện đại",
        isPracticeReading: true,
        summary: [
          "Từ một đoá cúc nhỏ cắm trong bình gốm, nhân vật trữ tình lắng nghe và mở rộng liên tưởng tới cả cánh đồng mùa xuân bao la với tiếng dế, đất ẩm, sương đêm và sự vận động âm thầm, mãnh liệt của sự sống tự nhiên."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Theo dõi câu thơ tự do dài ngắn linh hoạt, hệ thống điệp cấu trúc, sự dịch chuyển điểm nhìn từ không gian hẹp (chiếc bình gốm) ra không gian rộng (cánh đồng đêm xuân) để cảm nhận tình yêu sự sống tinh tế."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Sửa lỗi dùng từ và lỗi về trật tự từ",
      concepts: [
        "<strong>Các lỗi dùng từ phổ biến:</strong><br>• <em>Lặp từ:</em> dùng lặp lại một từ nhiều lần không có mục đích tu từ làm câu văn nặng nề.<br>• <em>Dùng từ không đúng nghĩa:</em> do không nắm vững nghĩa của từ (đặc biệt là từ Hán Việt hoặc từ gần âm).<br>• <em>Dùng từ không đúng khả năng kết hợp:</em> kết hợp từ trái quy tắc ngữ nghĩa – ngữ pháp tiếng Việt.<br>• <em>Dùng từ không phù hợp phong cách:</em> đưa từ khẩu ngữ suồng sã vào văn bản nghị luận trang trọng.",
        "<strong>Lỗi về trật tự từ:</strong> Sắp xếp các từ/cụm từ trong câu trái quy tắc ngữ pháp tiếng Việt, gây mơ hồ nghĩa hoặc không làm nổi bật được trọng tâm thông tin cần nhấn mạnh.",
        "<strong>Cách khắc phục:</strong> Xác định chính xác ý cần biểu đạt -> kiểm tra nghĩa và khả năng kết hợp của từ -> lược bỏ từ thừa, thay thế từ đúng nghĩa hoặc đảo lại vị trí các thành phần câu cho tự nhiên, sáng rõ."
      ],
      examples: [
        {
          wrong: "Nhà thơ Đỗ Phủ đã khắc hoạ một bức tranh mùa thu vô cùng rực rỡ và thê lương.",
          right: "Nhà thơ Đỗ Phủ đã khắc hoạ một bức tranh mùa thu vô cùng hùng vĩ mà bi tráng, thê lương.",
          note: "Từ 'rực rỡ' mang sắc thái tươi vui, không hợp với bức tranh thu u ám, bi thương trong 'Thu hứng'."
        },
        {
          wrong: "Bài thơ đã thể hiện của tác giả nỗi nhớ quê hương da diết.",
          right: "Bài thơ đã thể hiện nỗi nhớ quê hương da diết của tác giả.",
          note: "Lỗi trật tự từ: cụm định ngữ sở hữu 'của tác giả' cần đặt sau danh từ trung tâm 'nỗi nhớ quê hương da diết'."
        }
      ]
    },
    viet: {
      title: "Viết văn bản nghị luận phân tích, đánh giá một tác phẩm thơ",
      requirements: [
        "Giới thiệu rõ tên bài thơ, tác giả, hoàn cảnh sáng tác (nếu có) và nêu ấn tượng, đánh giá khái quát về vẻ đẹp của bài thơ.",
        "Phân tích sự thống nhất giữa <strong>nội dung cảm xúc / chủ đề</strong> với <strong>các yếu tố hình thức nghệ thuật đặc trưng của thơ</strong>: thể thơ, cấu tứ, nhân vật trữ tình, hệ thống hình ảnh, vần, nhịp, nhạc điệu, ngôn từ và biện pháp tu từ.",
        "Tuyệt đối tránh lối liệt kê biện pháp tu từ rời rạc hoặc chỉ diễn xuôi ý thơ; luôn chỉ rõ: <em>yếu tố hình thức ấy mang lại hiệu quả thẩm mĩ gì và khơi gợi cảm xúc nào</em>."
      ],
      steps: [
        {
          step: "Bước 1: Chuẩn bị viết",
          detail: "Chọn bài thơ yêu thích; đọc diễn cảm nhiều lần để cảm nhận âm hưởng, xác định thể thơ, mạch cảm xúc của nhân vật trữ tình và những hình ảnh/nhịp điệu đắt giá."
        },
        {
          step: "Bước 2: Tìm ý và lập dàn ý",
          detail: "Có thể tổ chức thân bài theo bố cục bài thơ (theo mạch vận động cảm xúc từ khổ đầu đến khổ cuối) hoặc theo hai phương diện lớn (vẻ đẹp nội dung cảm xúc và vẻ đẹp nghệ thuật ngôn từ)."
        },
        {
          step: "Bước 3: Viết bài",
          detail: "Phân tích sâu các 'nhãn tự' (từ mắt thơ), cách ngắt nhịp, phối thanh bằng – trắc, phép đối (nếu là thơ Đường luật) hoặc khoảng lặng (nếu là thơ hai-cư/thơ hiện đại)."
        },
        {
          step: "Bước 4: Kiểm tra và chỉnh sửa",
          detail: "Rà soát lỗi dùng từ, lỗi trật tự từ (vận dụng ngay phần Thực hành tiếng Việt vừa học); kiểm tra tính chính xác của các câu thơ trích dẫn."
        }
      ]
    },
    noiVaNghe: {
      title: "Giới thiệu, đánh giá về nội dung và nghệ thuật của một tác phẩm thơ",
      speakerTasks: [
        "Mở đầu bằng việc đọc diễn cảm bài thơ (hoặc một khổ thơ ấn tượng) để dẫn dắt người nghe vào không gian cảm xúc của tác phẩm.",
        "Trình bày rõ ràng hệ thống luận điểm về vẻ đẹp tâm hồn của nhân vật trữ tình và sự tinh tế trong cách dùng từ, dựng ảnh, tạo nhạc điệu.",
        "Kết hợp trình chiếu văn bản bài thơ trên slide để người nghe dễ theo dõi từng câu chữ được phân tích."
      ],
      listenerTasks: [
        "Lắng nghe cách người nói cảm thụ âm điệu và giải mã hình ảnh thơ.",
        "Ghi lại những phát hiện mới mẻ của người nói và trao đổi thêm những cách hiểu đa chiều về các hình ảnh ẩn dụ, biểu tượng trong bài thơ."
      ]
    },
    cungCoMoRong: [
      "So sánh cách cảm nhận thiên nhiên và biểu đạt cảm xúc trong thơ hai-cư Nhật Bản (cô đọng, gợi mở khoảng lặng), thơ Đường luật (đăng đối, hàm súc, tả cảnh ngụ tình) và Thơ mới (cảm xúc cá nhân dạt dào, ngôn từ giàu nhạc tính hiện đại).",
      "Học thuộc lòng bản phiên âm, dịch thơ của <em>Thu hứng</em> và bài thơ <em>Mùa xuân chín</em>."
    ]
  },

  3: {
    num: 3,
    volume: 1,
    title: "Nghệ thuật thuyết phục trong văn nghị luận",
    subtitle: "Luận đề – Luận điểm – Lí lẽ – Bằng chứng & Mạch lạc, liên kết",
    genreFocus: "Văn bản nghị luận (Văn chính luận trung đại, Nghị luận xã hội, Nghị luận văn học)",
    vietnameseFocus: "Sử dụng phương tiện liên kết để tạo tính mạch lạc và liên kết trong văn bản",
    writingFocus: "Viết bài luận thuyết phục người khác từ bỏ một thói quen hay một quan niệm",
    speakingFocus: "Thảo luận về một vấn đề xã hội có ý kiến khác nhau",
    diagramCaption: "Sơ đồ cấu trúc hình tháp lập luận trong văn nghị luận (Luận đề → Luận điểm → Lí lẽ & Bằng chứng) cùng mạng lưới Mạch lạc – Liên kết",
    triThucNguVan: [
      {
        term: "Văn bản nghị luận",
        definition: "Loại văn bản nhằm <strong>thuyết phục người đọc/người nghe</strong> về một tư tưởng, quan điểm nào đó bằng hệ thống luận điểm, lí lẽ và bằng chứng được tổ chức chặt chẽ. Đề tài nghị luận rất rộng: chính trị, xã hội, đạo đức, văn hoá, triết học, văn học nghệ thuật."
      },
      {
        term: "Luận đề, Luận điểm, Lí lẽ & Bằng chứng",
        definition: "• <strong>Luận đề:</strong> Vấn đề, tư tưởng hoặc quan điểm bao quát xuyên suốt toàn bộ văn bản (mỗi văn bản thường có một luận đề chính).<br>• <strong>Luận điểm:</strong> Các ý chính được triển khai nhằm cụ thể hoá và làm sáng tỏ luận đề.<br>• <strong>Lí lẽ:</strong> Những lời giải thích, phân tích, suy luận logic để chứng minh cho luận điểm.<br>• <strong>Bằng chứng (dẫn chứng):</strong> Các sự kiện thực tế, số liệu, trích dẫn, trường hợp cụ thể có căn cứ xác thực dùng để củng cố lí lẽ."
      },
      {
        term: "Yếu tố biểu cảm, tự sự trong văn nghị luận",
        definition: "Để tăng sức hấp dẫn và tác động tới cả lí trí lẫn tình cảm người đọc, văn nghị luận có thể kết hợp yếu tố <strong>biểu cảm</strong> (bộc lộ nhiệt huyết, thái độ) và <strong>tự sự</strong> (kể câu chuyện nhỏ làm bằng chứng). Tuy nhiên, các yếu tố này phải phục vụ cho lập luận chứ không thay thế hệ thống lí lẽ."
      },
      {
        term: "Mạch lạc và Liên kết",
        definition: "• <strong>Mạch lạc (bên trong):</strong> Tất cả các câu, các đoạn đều cùng hướng về chủ đề/luận đề chung và được sắp xếp theo một trình tự hợp lí (nguyên nhân – hệ quả, khái quát – cụ thể, vấn đề – giải pháp...).<br>• <strong>Liên kết (bên ngoài):</strong> Sự nối kết hình thức giữa các câu, các đoạn bằng các phép liên kết như <em>phép lặp, phép thế, phép nối, phép liên tưởng/đồng nghĩa – trái nghĩa</em>."
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Hiền tài là nguyên khí của quốc gia",
        author: "Thân Nhân Trung (trích Bài kí đề danh tiến sĩ khoa Nhâm Tuất 1442)",
        genre: "Văn bia nghị luận trung đại",
        isPracticeReading: false,
        summary: [
          "<strong>Mở đầu – Khẳng định mệnh đề bất hủ:</strong> 'Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp'. Vì vậy các đấng thánh đế minh vương đều coi việc bồi dưỡng, kén chọn, đãi ngộ hiền tài là việc đầu tiên.",
          "<strong>Triển khai – Ý nghĩa của việc dựng bia tiến sĩ:</strong> Dù triều đình đã ban ân rất hậu nhưng danh tiếng một thời có thể phai mờ; việc khắc bia đá đặt ở cửa Hiền Quan giúp lưu danh muôn đời.",
          "<strong>Kết luận – Tác dụng răn dạy & khích lệ:</strong> Người xem bia sẽ 'kẻ ác lấy đó làm răn, người thiện theo đó mà gắng', kẻ sĩ rèn danh tiết, dốc sức giúp vua giúp nước, làm cho nguyên khí quốc gia bền vững."
        ],
        analysis: [
          "<strong>Nghệ thuật lập luận:</strong> Cấu trúc lập luận theo quan hệ <em>nguyên nhân – hệ quả</em> và <em>phản đề – chính đề</em> vô cùng chặt chẽ; lời văn cô đọng, trang trọng, giàu nhịp điệu sóng đôi; kết hợp lí lẽ chính trị sâu sắc với tâm huyết chấn hưng đất nước."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Yêu và đồng cảm",
        author: "Phong Tử Khải (trích Sống vốn đơn thuần)",
        genre: "Nghị luận văn hoá – nghệ thuật và nhân sinh",
        isPracticeReading: false,
        summary: [
          "<strong>Câu chuyện mở đầu:</strong> Người viết quan sát một cậu bé năm tuổi xót thương những bông hoa bị cắt rời và luôn muốn đặt mọi đồ vật sóng đôi, có bầu có bạn như con người.",
          "<strong>Triển khai luận điểm về 'Đồng cảm':</strong> Hoạ sĩ phải đặt tâm hồn mình vào đối tượng mới vẽ được thần thái sự vật; trẻ em vốn có lòng đồng cảm tự nhiên với vạn vật (chó mèo, hoa cỏ, đồ vật), còn người lớn vì mưu sinh và định kiến thực dụng nên dần đánh mất tấm lòng ấy.",
          "<strong>Khẳng định giá trị:</strong> Người nghệ sĩ giữ được tấm lòng đồng cảm hồn nhiên như trẻ thơ để yêu thương, sẻ chia bình đẳng với muôn loài trong vũ trụ."
        ],
        analysis: [
          "<strong>Nghệ thuật thuyết phục:</strong> Dẫn dắt tự nhiên từ câu chuyện đời thường (yếu tố tự sự) sang triết lí thẩm mĩ và nhân sinh sâu sắc; ngôn từ nhẹ nhàng, giàu hình ảnh so sánh và thấm đẫm cảm xúc nhân văn."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Chữ bầu lên nhà thơ",
        author: "Lê Đạt",
        genre: "Tiểu luận phê bình văn học",
        isPracticeReading: false,
        summary: [
          "<strong>Phản biện các quan niệm cực đoan:</strong> Tác giả bác bỏ định kiến cho rằng thơ chỉ gắn với 'cơn bốc đồng' cảm xúc nhất thời hoặc coi thường sự khổ luyện chữ nghĩa.",
          "<strong>Phân biệt ngôn ngữ văn xuôi và chữ trong thơ:</strong> Chữ trong văn xuôi giống như 'phu chữ' chở ý xong thì biến mất; còn chữ trong thơ vừa có 'nghĩa tiêu dùng' vừa có 'nghĩa tự vị' đa chiều, đòi hỏi nhà thơ phải lao động nghiêm túc như một 'phu chữ'.",
          "<strong>Kết luận:</strong> Không có chức nhà thơ suốt đời; mỗi bài thơ là một cuộc bầu cử mới mà ở đó 'chữ bầu lên nhà thơ'."
        ],
        analysis: [
          "<strong>Nghệ thuật lập luận:</strong> Lối viết tiểu luận sắc sảo, giàu tính đối thoại – tranh biện; sử dụng ẩn dụ độc đáo ('phu chữ', 'bầu cử của chữ'); kết hợp lí lẽ lí luận với dẫn chứng thơ ca Đông – Tây để đề cao trách nhiệm sáng tạo ngôn từ."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Thế giới mạng & tôi",
        author: "Nguyễn Thị Hậu",
        genre: "Nghị luận xã hội hiện đại",
        isPracticeReading: true,
        summary: [
          "Từ trải nghiệm sử dụng mạng xã hội của một nhà khoa học, tác giả bàn về hai mặt của thế giới ảo: vừa là không gian kết nối tri thức, sẻ chia nhân ái, vừa tiềm ẩn nguy cơ phát tán tin giả, phán xét đám đông và sự cô đơn thực tại nếu thiếu bản lĩnh văn hoá."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Nhận diện luận đề, hệ thống luận điểm hai chiều (tích cực – tiêu cực) và cách kết hợp trải nghiệm cá nhân với cái nhìn khách quan về văn hoá ứng xử trên không gian mạng."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Nhận diện và sửa lỗi mạch lạc, liên kết trong đoạn văn và văn bản",
      concepts: [
        "<strong>Kiểm tra tính mạch lạc:</strong> Xem các câu trong đoạn và các đoạn trong bài có cùng phục vụ cho luận đề không; trật tự sắp xếp các luận điểm (trước – sau, nguyên nhân – kết quả, tổng – phân – hợp) có hợp lí không; có câu nào lạc chủ đề hoặc lặp lại ý đã nói không.",
        "<strong>Kiểm tra tính liên kết hình thức:</strong> Xem xét việc sử dụng các phương tiện liên kết giữa các câu/đoạn:<br>• <em>Phép lặp từ ngữ:</em> lặp lại từ khoá có chủ đích để duy trì chủ đề.<br>• <em>Phép thế:</em> dùng đại từ (<em>đó, vậy, họ, điều này...</em>) hoặc từ đồng nghĩa để tránh lặp từ nặng nề.<br>• <em>Phép nối:</em> dùng quan hệ từ, tổ hợp từ chuyển tiếp (<em>vì vậy, tuy nhiên, hơn nữa, mặt khác, tóm lại...</em>) đúng quan hệ logic."
      ],
      examples: [
        {
          wrong: "Lòng đồng cảm giúp con người xích lại gần nhau hơn. Tuy nhiên, nhờ có lòng đồng cảm mà xã hội trở nên nhân ái, tốt đẹp hơn.",
          right: "Lòng đồng cảm giúp con người xích lại gần nhau hơn. Hơn thế nữa (hoặc Nhờ vậy), xã hội cũng trở nên nhân ái, tốt đẹp hơn.",
          note: "Hai câu có quan hệ bổ sung/tăng tiến thuận chiều nên dùng từ nối 'Tuy nhiên' (chỉ quan hệ tương phản) là sai liên kết logic."
        }
      ]
    },
    viet: {
      title: "Viết bài luận thuyết phục người khác từ bỏ một thói quen hay một quan niệm",
      requirements: [
        "Nêu rõ thói quen hoặc quan niệm cần thuyết phục từ bỏ và xác định rõ đối tượng người đọc mà bài luận hướng tới.",
        "Phân tích khách quan nguyên nhân dẫn đến thói quen/quan niệm đó, chỉ rõ những tác hại, hệ luỵ đối với cá nhân và cộng đồng bằng lí lẽ và bằng chứng thuyết phục.",
        "Nêu lợi ích thiết thực khi từ bỏ thói quen/quan niệm ấy và đề xuất các giải pháp, bước hành động cụ thể, khả thi.",
        "Giọng điệu chân thành, tôn trọng, chia sẻ, dự liệu được phản hồi của người đọc; tuyệt đối không miệt thị hay áp đặt."
      ],
      steps: [
        {
          step: "Bước 1: Chuẩn bị viết",
          detail: "Chọn một thói quen xấu phổ biến (như trì hoãn công việc, lệ thuộc điện thoại, xả rác bừa bãi, nói tục...) hoặc quan niệm lệch lạc (như coi nhẹ việc đọc sách, học vẹt đối phó...)."
        },
        {
          step: "Bước 2: Tìm ý và lập dàn ý",
          detail: "Mở bài: Nêu thói quen/quan niệm và lí do viết bài thuyết phục. Thân bài: (1) Biểu hiện & nguyên nhân tồn tại; (2) Phân tích tác hại bằng dẫn chứng thực tế; (3) Lợi ích khi thay đổi; (4) Giải pháp từng bước để từ bỏ thành công. Kết bài: Khẳng định niềm tin vào sự thay đổi tích cực của người đọc."
        },
        {
          step: "Bước 3: Viết bài",
          detail: "Sử dụng linh hoạt các phép liên kết câu/đoạn; kết hợp lí lẽ sắc bén với sự thấu cảm tâm lí người đọc."
        },
        {
          step: "Bước 4: Kiểm tra và chỉnh sửa",
          detail: "Kiểm tra tính mạch lạc giữa các luận điểm, độ xác thực của bằng chứng và sắc thái lịch sự, thuyết phục của câu văn."
        }
      ]
    },
    noiVaNghe: {
      title: "Thảo luận về một vấn đề xã hội có ý kiến khác nhau",
      speakerTasks: [
        "Nêu rõ quan điểm cá nhân về vấn đề thảo luận và trình bày hệ thống lí lẽ, bằng chứng làm căn cứ.",
        "Khi phản biện ý kiến trái chiều, tập trung phân tích vào điểm chưa hợp lí của luận điểm/bằng chứng, giữ thái độ điềm tĩnh, lịch sự, không công kích cá nhân."
      ],
      listenerTasks: [
        "Lắng nghe trọn vẹn lượt lời của người khác để hiểu đúng lí do và góc nhìn của họ.",
        "Sẵn sàng tiếp nhận những điểm hợp lí từ phía đối thoại để bổ sung, hoàn thiện nhận thức chung."
      ]
    },
    cungCoMoRong: [
      "Vẽ sơ đồ cây lập luận của 3 văn bản: <em>Hiền tài là nguyên khí của quốc gia</em>, <em>Yêu và đồng cảm</em>, <em>Chữ bầu lên nhà thơ</em> để thấy sự đa dạng của các kiểu lập luận (diễn dịch, quy nạp, bác bỏ, so sánh).",
      "Thực hành viết đoạn văn nghị luận xã hội 150 chữ có sử dụng ít nhất 3 phép liên kết khác nhau."
    ]
  },

  4: {
    num: 4,
    volume: 1,
    title: "Sức sống của sử thi",
    subtitle: "Sử thi Hy Lạp I-li-át, Sử thi Ê-đê Đăm Săn & Báo cáo nghiên cứu",
    genreFocus: "Sử thi (Anh hùng ca cổ đại & Sử thi dân gian các dân tộc)",
    vietnameseFocus: "Sử dụng trích dẫn, cước chú và các kí hiệu đánh dấu phần bị tỉnh lược trong văn bản",
    writingFocus: "Viết báo cáo nghiên cứu về một vấn đề",
    speakingFocus: "Trình bày báo cáo kết quả nghiên cứu về một vấn đề",
    diagramCaption: "Sơ đồ đặc trưng thể loại Sử thi (Không gian cộng đồng – Thời gian quá khứ thiêng liêng – Người anh hùng sử thi) và đối sánh Héc-to với Đăm Săn",
    triThucNguVan: [
      {
        term: "Sử thi (Anh hùng ca)",
        definition: "Thể loại tự sự dân gian (hoặc văn học cổ đại) có dung lượng đồ sộ, ra đời vào buổi bình minh của lịch sử các dân tộc; cốt truyện xoay quanh những <strong>biến cố trọng đại liên quan đến vận mệnh của cả cộng đồng</strong> (như chiến tranh bảo vệ bộ tộc/thành bang hoặc công cuộc chinh phục tự nhiên, mở rộng bờ cõi)."
      },
      {
        term: "Nhân vật người anh hùng sử thi",
        definition: "Hiện thân cho sức mạnh thể chất, trí tuệ, lòng dũng cảm, phẩm chất lí tưởng và khát vọng chung của cả cộng đồng. Mọi hành động của người anh hùng đều gắn liền với danh dự, bổn phận và tương lai của tập thể."
      },
      {
        term: "Không gian & Thời gian sử thi",
        definition: "• <strong>Không gian sử thi:</strong> Kì vĩ, rộng lớn, mang tính cộng đồng và vũ trụ, thường bao gồm cả không gian trần thế (chiến trường, buôn làng) lẫn không gian thần linh.<br>• <strong>Thời gian sử thi:</strong> Thuộc về quá khứ thiêng liêng, xa xưa, một thời đại hoàng kim được cộng đồng ngưỡng vọng và truyền tụng."
      },
      {
        term: "Lời văn & Bút pháp sử thi",
        definition: "Giọng điệu trang trọng, hào hùng, thành kính; nhịp kể chậm rãi; sử dụng dày đặc các biện pháp <strong>so sánh trùng điệp, phóng đại (ngoại hiện), định ngữ cố định và phép lặp cấu trúc</strong>. Lời người kể chuyện và lời nhân vật đều mang âm hưởng ngợi ca."
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Héc-to từ biệt Ăng-đrô-mác",
        author: "Hô-me-rơ (trích sử thi I-li-át)",
        genre: "Sử thi anh hùng cổ đại Hy Lạp",
        isPracticeReading: false,
        summary: [
          "<strong>Bối cảnh bi tráng nơi cổng thành Xkê:</strong> Quân Hy Lạp đang tấn công dữ dội thành Tơ-roa. Hoàng tử Héc-to – trụ cột bảo vệ thành Tơ-roa – quay về thành và gặp người vợ hiền Ăng-đrô-mác đang bế con thơ A-xti-a-nắc trên tháp canh.",
          "<strong>Lời van nài của Ăng-đrô-mác:</strong> Nàng khóc thương kể lại nỗi đau mất cha mẹ, anh em và cầu xin Héc-to ở lại trên tháp canh phòng thủ để vợ không thành goá phụ, con không mồ côi.",
          "<strong>Lựa chọn danh dự của Héc-to & Cảnh ôm con:</strong> Dù thấu hiểu ngày thành Tơ-roa sụp đổ và xót thương vợ con hơn ai hết, Héc-to không thể hèn nhát lẩn tránh trận tiền. Chàng tháo mũ đồng sáng loáng đặt xuống đất để bế con trai, cầu chúc cho con và động viên vợ trước khi bước ra chiến trường."
        ],
        analysis: [
          "<strong>Chiều sâu nhân văn của hình tượng Héc-to:</strong> Kết hợp hài hoà giữa vẻ đẹp của một người chồng, người cha giàu tình thương yêu với lí tưởng anh hùng đặt nghĩa vụ bảo vệ thành bang và danh dự lên trên tính mạng cá nhân.",
          "<strong>Nghệ thuật cổ điển Hô-me-rơ:</strong> Khắc hoạ tâm lí qua lời đối thoại dài, trang trọng kết hợp những chi tiết đời thường tinh tế (cậu bé sợ chùm bờm ngựa trên mũ đồng, nụ cười trong nước mắt của vợ chồng Héc-to)."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Đăm Săn đi bắt Nữ Thần Mặt Trời",
        author: "Trích sử thi Đăm Săn (Sử thi dân gian dân tộc Ê-đê)",
        genre: "Sử thi anh hùng Tây Nguyên",
        isPracticeReading: false,
        summary: [
          "<strong>Khát vọng chinh phục khác thường:</strong> Sau khi đã trở thành tù trưởng giàu mạnh và đánh thắng Mtao Grư, Mtao Mxây, Đăm Săn tiếp tục một mình cưỡi ngựa vượt rừng rậm đến nhà Đăm Par Kvây rồi tiến thẳng tới nhà Nữ Thần Mặt Trời để cầu hôn nàng làm vợ hai.",
          "<strong>Cuộc đối thoại tại nhà Nữ Thần Mặt Trời:</strong> Dù được bạn can ngăn và chính Nữ Thần Mặt Trời từ chối vì nếu nàng bước chân đi thì vạn vật trần gian sẽ cháy khô, chết chóc, Đăm Săn vẫn kiêu hãnh tuyên bố không lùi bước nhưng đành tức giận quay về khi Mặt Trời bắt đầu lên cao.",
          "<strong>Bi kịch tại rừng sáp đen và sự tái sinh:</strong> Trên đường về, ánh nắng dữ dội làm rừng sáp đen chảy nhão thành bùn nhấn chìm người và ngựa Đăm Săn; nhưng hồn chàng biến thành con ruồi bay vào miệng chị gái Hơ-Âng để đầu thai thành Đăm Săn cháu tiếp nối con đường của ông cậu."
        ],
        analysis: [
          "<strong>Ý nghĩa biểu tượng:</strong> Ca ngợi khát vọng chinh phục tự nhiên, ý chí tự do, kiêu hãnh vượt giới hạn của con người Tây Nguyên; đồng thời gửi gắm bài học nhận thức sâu sắc: sức mạnh cá nhân dù phi thường cũng không thể bất chấp quy luật khách quan của tự nhiên và lợi ích sinh tồn của cộng đồng.",
          "<strong>Nghệ thuật sử thi Ê-đê:</strong> Ngôn ngữ giàu hình ảnh phóng đại, so sánh trùng điệp (<em>tiếng chân bước như sấm, cầu thang như cầu vồng</em>), đối thoại giàu kịch tính và mô-típ chết – tái sinh bất tử."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Ra-ma buộc tội",
        author: "Van-mi-ki (trích sử thi Ra-ma-ya-na – Ấn Độ)",
        genre: "Sử thi cổ đại Ấn Độ",
        isPracticeReading: true,
        summary: [
          "Sau khi tiêu diệt quỷ vương Ra-va-na cứu Xita, trước mặt toàn quân tại đảo Lan-ka, hoàng tử Ra-ma buộc phải nén nỗi đau riêng để nói lời nghi ngờ sự trong sạch của Xita nhằm giữ danh dự dòng tộc; nàng Xita kiên quyết bước lên giàn lửa (Lễ hoả tế) để thần Lửa A-gni chứng giám lòng chung thuỷ tuyệt đối."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Phân tích xung đột bi kịch giữa bổn phận/danh dự cộng đồng của người anh hùng sử thi với tình yêu cá nhân; vẻ đẹp phẩm hạnh kiên trung của người phụ nữ Ấn Độ cổ đại."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Sử dụng trích dẫn, cước chú và các kí hiệu đánh dấu phần bị tỉnh lược",
      concepts: [
        "<strong>Trích dẫn (Trực tiếp & Gián tiếp):</strong><br>• <em>Trích dẫn trực tiếp:</em> Nêu nguyên văn lời nói/câu viết của người khác, bắt buộc đặt trong dấu ngoặc kép <code>“...”</code> và ghi rõ nguồn/tác giả.<br>• <em>Trích dẫn gián tiếp:</em> Diễn đạt lại ý tưởng của người khác bằng lời văn của mình, không đặt trong ngoặc kép nhưng vẫn phải nêu rõ tên tác giả/tài liệu tham khảo để tôn trọng bản quyền trí tuệ (tránh đạo văn).",
        "<strong>Cước chú (Chú thích chân trang):</strong> Phần giải thích từ ngữ khó, điển tích, hoặc cung cấp thông tin xuất xứ đặt ở cuối trang (đánh số thứ tự hoặc kí hiệu hoa thị <code>*</code>) giúp người đọc hiểu sâu mà không làm đứt mạch văn bản chính.",
        "<strong>Kí hiệu đánh dấu phần tỉnh lược <code>[...]</code> hoặc <code>(...)</code>:</strong> Đặt trong văn bản trích dẫn để báo hiệu một số từ, câu hoặc đoạn đã được lược bớt. Lưu ý: việc lược bỏ không được làm biến dạng hay sai lệch ý nghĩa vốn có của nguồn trích."
      ],
      examples: [
        {
          wrong: "Trong sử thi Đăm Săn có câu Đăm Săn rung khiên múa, một lần xốc tới vượt một đồi tranh.",
          right: "Trong sử thi <em>Đăm Săn</em>, tác giả dân gian miêu tả: “Chàng múa trên cao, gió như bão. Chàng múa dưới thấp, gió như lốc [...] Một lần xốc tới, chàng vượt một đồi tranh”.",
          note: "Sử dụng đúng dấu ngoặc kép cho lời trích trực tiếp và dấu [...] để đánh dấu phần câu văn ở giữa đã được tỉnh lược."
        }
      ]
    },
    viet: {
      title: "Viết báo cáo nghiên cứu về một vấn đề",
      requirements: [
        "Xác định rõ đề tài và câu hỏi nghiên cứu có phạm vi phù hợp (ví dụ: hình tượng người anh hùng trong sử thi, trang phục hoặc không gian văn hoá Tây Nguyên trong sử thi <em>Đăm Săn</em>...).",
        "Bố cục chuẩn mực của báo cáo khoa học: <strong>Nhan đề → Đặt vấn đề (lí do, mục tiêu, câu hỏi nghiên cứu) → Giải quyết vấn đề (các luận điểm trình bày kết quả nghiên cứu dựa trên tư liệu, trích dẫn, bảng biểu) → Kết luận → Danh mục tài liệu tham khảo</strong>.",
        "Phân biệt rạch ròi giữa dữ liệu/trích dẫn từ nguồn tham khảo với nhận xét, đánh giá của người viết; tuân thủ quy chuẩn trích dẫn và cước chú."
      ],
      steps: [
        {
          step: "Bước 1: Chuẩn bị & Thu thập tư liệu",
          detail: "Chọn đề tài hẹp, khả thi; tìm kiếm sách chuyên khảo, bài báo khoa học, văn bản sử thi đáng tin cậy; ghi chép thông tin thư mục (tác giả, năm xuất bản, tên sách, nhà xuất bản, số trang)."
        },
        {
          step: "Bước 2: Xử lí tư liệu & Lập đề cương",
          detail: "Phân loại các dẫn chứng theo từng khía cạnh của câu hỏi nghiên cứu; thiết kế hệ thống đề mục đánh số rõ ràng (1, 1.1, 1.2, 2...)."
        },
        {
          step: "Bước 3: Viết báo cáo",
          detail: "Dùng ngôn ngữ khách quan, chính xác; lồng ghép trích dẫn trực tiếp/gián tiếp, cước chú, dấu tỉnh lược [...] và bảng đối sánh khi cần thiết."
        },
        {
          step: "Bước 4: Kiểm tra và hoàn thiện",
          detail: "Đối chiếu các trích dẫn với danh mục tài liệu tham khảo cuối bài; đảm bảo kết luận trả lời trực tiếp cho câu hỏi nghiên cứu ban đầu."
        }
      ]
    },
    noiVaNghe: {
      title: "Trình bày báo cáo kết quả nghiên cứu về một vấn đề",
      speakerTasks: [
        "Tóm lược ngắn gọn câu hỏi nghiên cứu, phương pháp tiếp cận và các phát hiện chính thay vì đọc nguyên văn bản báo cáo dài.",
        "Sử dụng slide trình chiếu có sơ đồ, bảng tổng hợp dữ liệu và trích dẫn ngắn để minh hoạ trực quan cho kết quả nghiên cứu."
      ],
      listenerTasks: [
        "Theo dõi mối liên hệ giữa câu hỏi nghiên cứu, tư liệu bằng chứng và kết luận của người báo cáo.",
        "Đặt câu hỏi phản biện học thuật về độ tin cậy của nguồn tư liệu hoặc cách lí giải dữ liệu."
      ]
    },
    cungCoMoRong: [
      "So sánh hình tượng người anh hùng Héc-to (<em>I-li-át</em>) và Đăm Săn (<em>Đăm Săn</em>) về động cơ hành động, phẩm chất nổi bật và mối quan hệ với cộng đồng.",
      "Sưu tầm thêm các sử thi tiêu biểu của Việt Nam như <em>Đẻ đất đẻ nước</em> (Mường), <em>Đam Noi</em> (Ba-na), <em>Cây nêu thần</em> (Mơ-nông)."
    ]
  },

  5: {
    num: 5,
    volume: 1,
    title: "Tích trò sân khấu dân gian",
    subtitle: "Chèo cổ, Tuồng đồ, Múa rối nước & Báo cáo văn hoá truyền thống",
    genreFocus: "Kịch bản sân khấu dân gian (Chèo, Tuồng) & Văn bản thông tin văn hoá",
    vietnameseFocus: "Đặc điểm ngôn ngữ kịch bản sân khấu dân gian (Tích trò, vai diễn, lời thoại, chỉ dẫn sân khấu)",
    writingFocus: "Viết báo cáo nghiên cứu về một vấn đề văn hoá truyền thống Việt Nam",
    speakingFocus: "Lắng nghe và phản hồi về một bài thuyết trình kết quả nghiên cứu",
    diagramCaption: "Sơ đồ đặc trưng Sân khấu dân gian Việt Nam (Chèo – Tuồng – Múa rối nước: Tích trò, Tính ước lệ, Vai diễn & Không gian diễn xướng)",
    triThucNguVan: [
      {
        term: "Chèo cổ (Sân khấu dân gian Bắc Bộ)",
        definition: "Loại hình kịch hát dân gian phổ biến ở đồng bằng Bắc Bộ, gắn liền với sân đình và lễ hội nông nghiệp. Nghệ thuật chèo <strong>mang tính tổng hợp cao</strong>: kết hợp chặt chẽ giữa <em>nói, hát (các làn điệu chèo), múa, âm nhạc dân tộc và đạo cụ</em> trên nền một <strong>tích trò</strong> có sẵn, phản ánh đời sống nhân dân với sự hoà quyện giữa bi và hài."
      },
      {
        term: "Tuồng (Hát bội – Tuồng thầy & Tuồng đồ)",
        definition: "Loại hình sân khấu cổ truyền có tính <strong>ước lệ, cách điệu và quy phạm</strong> rất cao về hoá trang (mặt nạ màu sắc biểu trưng tính cách), phục trang, vũ đạo và giọng hát. Chia làm hai nhánh:<br>• <em>Tuồng pho (tuồng thầy/tuồng cung đình):</em> đề cao lí tưởng trung quân ái quốc, tiết nghĩa anh hùng (như <em>Sơn Hậu</em>).<br>• <em>Tuồng đồ (tuồng hài dân gian):</em> châm biếm, đả kích thói hư tật xấu của tầng lớp thống trị và thế thái nhân tình (như <em>Nghêu, Sò, Ốc, Hến</em>)."
      },
      {
        term: "Tích trò, Tính ước lệ & Tính cộng đồng",
        definition: "• <strong>Tích trò:</strong> Cốt truyện dân gian hoặc lịch sử làm sườn cho vở diễn.<br>• <strong>Tính ước lệ, tượng trưng:</strong> Dùng một chi tiết, đạo cụ tối giản (chiếc quạt, mái chèo, ngọn roi ngựa) kết hợp động tác hình thể để gợi ra cả không gian, thời gian rộng lớn.<br>• <strong>Vai diễn kiểu mẫu:</strong> Trong chèo có <em>Đào (đào chín, đào lệch/đào lẳng), Kép, Lão, Mụ, Hề</em>; trong tuồng có <em>Đào, Kép, Tướng, Nịnh, Hề</em>."
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Xúy Vân giả dại",
        author: "Trích chèo cổ Kim Nham",
        genre: "Chèo cổ truyền thống",
        isPracticeReading: false,
        summary: [
          "<strong>Hoàn cảnh trớ trêu của Xúy Vân:</strong> Xúy Vân là con gái viên huyện Tể, lấy học trò nghèo Kim Nham. Khi chàng lên kinh trọ học suốt nhiều năm, nàng ở nhà cô đơn, bị gã lái buôn Trần Phương tán tỉnh và xúi nàng 'giả điên' để Kim Nham trả tự do cho nàng.",
          "<strong>Lớp trò giả dại đầy bi kịch:</strong> Xuất hiện trên sân khấu với đầu tóc rũ rượi, tiếng cười điên dại, Xúy Vân hát hàng loạt làn điệu (<em>quá giang, con gà rừng, sắp, ngược...</em>) và múa xe tơ, bắt bướm. Đằng sau những câu hát tưởng như lộn xộn, vô nghĩa là tiếng thở dài uất nghẹn về thân phận cô đơn ('chờ cho bông lúa chín vàng'), ước mơ gia đình sum họp giản dị ('chàng đi cày, thiếp bưng cơm') và nỗi ân hận, bế tắc khi biết mình lầm lỡ."
        ],
        analysis: [
          "<strong>Giá trị nhân đạo sâu sắc:</strong> Vừa phê phán sự phụ bạc lễ giáo phong kiến vừa bày tỏ niềm cảm thông sâu sắc với khát vọng hạnh phúc lứa đôi, nỗi cô đơn và bi kịch tâm hồn của người phụ nữ trong xã hội xưa.",
          "<strong>Đỉnh cao nghệ thuật chèo:</strong> Kết hợp nhuần nhuyễn lời thoại 'nửa tỉnh nửa điên' đa nghĩa với hệ thống làn điệu chèo biến hoá và vũ đạo cách điệu giàu sức biểu cảm nội tâm."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Huyện đường",
        author: "Trích tuồng đồ Nghêu, Sò, Ốc, Hến",
        genre: "Tuồng đồ (Tuồng hài dân gian)",
        isPracticeReading: false,
        summary: [
          "<strong>Chân dung tự bộc lộ của Tri huyện và Đề lại:</strong> Tại huyện đường, nhân lúc vắng người, quan Tri huyện và thầy Đề lại thẳng thừng bàn bạc mánh khoé vơ vét tiền đút lót của dân kiện tụng ('cứ mặt nào nhiều tiền thời ta xử cho thắng').",
          "<strong>Màn xử kiện lố bịch:</strong> Khi Lý trưởng giải vụ kiện 'ăn trộm ốc' của Trùm Sò đến và dẫn theo Thị Hến xinh đẹp, cả quan Tri huyện lẫn thầy Đề lập tức mê mệt nhan sắc Thị Hến, tìm mọi cách bênh vực nàng và doạ nạt các bên để mưu lợi cá nhân."
        ],
        analysis: [
          "<strong>Tiếng cười trào phúng dân gian:</strong> Lột trần bản chất tham nhũng, dốt nát, háo sắc, bất công của bộ máy quan lại phong kiến từ Tri huyện, Đề lại đến Lý trưởng.",
          "<strong>Nghệ thuật tuồng đồ:</strong> Khắc hoạ nhân vật qua ngôn ngữ tự giới thiệu (xưng danh) đầy mâu thuẫn giữa vẻ ngoài đạo mạo với tâm địa đen tối; đối thoại sắc sảo, nhịp điệu dồn dập và hành động sân khấu hài hước."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Múa rối nước – hiện đại soi bóng tiền nhân",
        author: "Phạm Thuỳ Dung",
        genre: "Văn bản thông tin giới thiệu di sản văn hoá",
        isPracticeReading: false,
        summary: [
          "<strong>Nguồn gốc và không gian biểu diễn:</strong> Nghệ thuật múa rối nước ra đời từ nền văn minh lúa nước đồng bằng châu thổ sông Hồng từ thời Lý; lấy mặt nước (ao làng, thuỷ đình) làm sân khấu.",
          "<strong>Đặc trưng kĩ thuật và hình tượng:</strong> Con rối làm bằng gỗ sung nhẹ, sơn ta chống thấm; nghệ nhân đứng sau bức mành điều khiển bằng hệ thống sào và dây ngầm dưới nước tạo nên chú Tễu hóm hỉnh cùng các tích trò cày cấy, chèo thuyền, múa rồng, đánh cáo bắt vịt.",
          "<strong>Sự tiếp nối hiện đại:</strong> Múa rối nước vươn ra sân khấu thế giới, kết hợp ánh sáng, âm thanh hiện đại nhưng vẫn giữ hồn cốt văn hoá dân tộc."
        ],
        analysis: [
          "<strong>Cách đọc văn bản thông tin văn hoá:</strong> Nhận diện hệ thống đề mục, cách kết hợp thông tin lịch sử – kĩ thuật với miêu tả sinh động và hình ảnh minh hoạ."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Hồn thiêng đưa đường",
        author: "Trích tuồng Sơn Hậu",
        genre: "Tuồng pho (Tuồng thầy cổ điển)",
        isPracticeReading: true,
        summary: [
          "Đêm tối giữa rừng sâu, lão tướng Khương Linh Tá đã bị giặc chém đứt đầu nhưng hồn thiêng vẫn hoá thành ngọn đuốc dẫn đường cho Đổng Kim Lân bế hoàng tử vượt khỏi vòng vây quân phản loạn về thành Sơn Hậu."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Cảm nhận vẻ đẹp bi tráng của lí tưởng trung nghĩa, tình bạn sinh tử và tính ước lệ cao độ của vũ đạo, ca từ trong tuồng cổ điển."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Ngôn ngữ kịch bản sân khấu dân gian & Quy chuẩn trình bày báo cáo văn hoá",
      concepts: [
        "<strong>Ngôn ngữ trong kịch bản chèo, tuồng:</strong> Gồm <em>chỉ dẫn sân khấu</em> (in nghiêng, đặt trong ngoặc đơn chỉ cử chỉ, điệu bộ, làn điệu) và <em>lời nhân vật</em> (nói thường, nói lệch, nói vỉa, hát theo làn điệu chèo/tuồng).",
        "<strong>Sử dụng thuật ngữ văn hoá truyền thống:</strong> Khi viết báo cáo về nghệ thuật dân gian cần giải thích chuẩn xác các thuật ngữ chuyên ngành (<em>tích trò, thuỷ đình, buồng trò, đào lệch, đào chín, nói lối, hát khách, hát nam...</em>) kèm cước chú rõ ràng."
      ],
      examples: [
        {
          wrong: "Trong vở kịch Xúy Vân giả dại, tác giả đã miêu tả tâm trạng nhân vật qua đoạn văn rất hay.",
          right: "Trong lớp chèo 'Xúy Vân giả dại', nghệ nhân dân gian đã khắc hoạ bi kịch nội tâm của nhân vật qua sự đan cài giữa lời thoại đa nghĩa, các làn điệu hát (quá giang, con gà rừng) và vũ đạo cách điệu.",
          note: "Sử dụng đúng thuật ngữ đặc trưng của kịch bản sân khấu chèo ('lớp chèo', 'nghệ nhân dân gian', 'lời thoại', 'làn điệu', 'vũ đạo') thay cho thuật ngữ truyện văn xuôi."
        }
      ]
    },
    viet: {
      title: "Viết báo cáo nghiên cứu về một vấn đề văn hoá truyền thống Việt Nam",
      requirements: [
        "Chọn một đề tài văn hoá truyền thống cụ thể, gần gũi (một loại hình sân khấu dân gian, một lễ hội truyền thống, một làng nghề thủ công, trang phục hoặc ẩm thực cổ truyền...).",
        "Trình bày rõ câu hỏi nghiên cứu, nguồn gốc lịch sử, đặc trưng văn hoá – nghệ thuật và giải pháp bảo tồn, phát huy giá trị trong đời sống đương đại.",
        "Kết hợp phương tiện ngôn ngữ với hình ảnh, sơ đồ minh hoạ có ghi nguồn và chú thích đầy đủ."
      ],
      steps: [
        {
          step: "Bước 1: Xác định đề tài và câu hỏi nghiên cứu",
          detail: "Ví dụ: 'Nghệ thuật hoá trang mặt nạ trong sân khấu Tuồng truyền thống' hoặc 'Hình tượng chú Tễu trong nghệ thuật Múa rối nước Việt Nam'."
        },
        {
          step: "Bước 2: Thu thập tư liệu và lập đề cương",
          detail: "Tổng hợp tư liệu từ sách văn hoá, bảo tàng, bài viết chuyên ngành; chia đề cương thành các mục: Nguồn gốc – Đặc điểm cốt lõi – Giá trị văn hoá – Thực trạng & Giải pháp bảo tồn."
        },
        {
          step: "Bước 3: Viết báo cáo có trích dẫn và minh hoạ",
          detail: "Trình bày khách quan, khoa học, dùng trích dẫn và cước chú đúng quy cách; chèn sơ đồ hoặc hình ảnh minh hoạ có chú thích ngay bên dưới."
        },
        {
          step: "Bước 4: Kiểm tra và chỉnh sửa",
          detail: "Đảm bảo bài viết không sao chép nguyên văn nguồn tư liệu và có phần kết luận đúc kết rõ ràng."
        }
      ]
    },
    noiVaNghe: {
      title: "Lắng nghe và phản hồi về một bài thuyết trình kết quả nghiên cứu",
      speakerTasks: [
        "Trình bày tóm tắt kết quả nghiên cứu văn hoá truyền thống một cách mạch lạc, kết hợp hình ảnh/video trích đoạn biểu diễn ngắn để tăng tính trực quan.",
        "Lắng nghe câu hỏi của người nghe, giải đáp dựa trên tư liệu đã khảo sát và thẳng thắn ghi nhận những khía cạnh cần nghiên cứu sâu hơn."
      ],
      listenerTasks: [
        "Ghi chép cấu trúc bài báo cáo: Câu hỏi nghiên cứu là gì? Bằng chứng tư liệu có xác thực không? Kết luận có thuyết phục không?",
        "Đưa ra nhận xét cụ thể về cả nội dung học thuật lẫn cách trình bày bằng thái độ tôn trọng, cầu thị."
      ]
    },
    cungCoMoRong: [
      "Lập bảng phân biệt 3 loại hình nghệ thuật truyền thống: <strong>Chèo</strong>, <strong>Tuồng</strong> và <strong>Múa rối nước</strong> (Không gian diễn xướng, Nhân vật tiêu biểu, Đặc trưng biểu diễn, Giá trị tư tưởng).",
      "Tìm xem các trích đoạn video biểu diễn <em>Xúy Vân giả dại</em>, <em>Nghêu, Sò, Ốc, Hến</em> và <em>Múa rối nước</em> để cảm nhận sự sống động của kịch bản khi lên sân khấu."
    ]
  }
};

module.exports = { volumes, lessonsP1 };
