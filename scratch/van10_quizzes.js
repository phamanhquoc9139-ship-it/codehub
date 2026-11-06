// scratch/van10_quizzes.js
// 45 Câu hỏi trắc nghiệm Ngữ Văn 10 (5 câu/bài x 9 bài) có đáp án và giải thích chi tiết

const quizzes = {
  1: [
    {
      q: "Trong Tri thức ngữ văn Bài 1, thần thoại được chia thành hai nhóm khái quát nào?",
      options: [
        "Thần thoại suy nguyên và thần thoại sáng tạo",
        "Thần thoại cổ đại và thần thoại trung đại",
        "Thần thoại truyền kì và thần thoại hiện đại",
        "Thần thoại tự nhiên và thần thoại lịch sử"
      ],
      ans: 0,
      exp: "Thần thoại được chia thành hai nhóm: Thần thoại suy nguyên (lí giải nguồn gốc vũ trụ, con người, muôn loài) và Thần thoại sáng tạo (kể về cuộc chinh phục tự nhiên và sáng tạo văn hoá)."
    },
    {
      q: "Hành động đốt đền tà của Ngô Tử Văn trong 'Tản Viên từ Phán sự lục' (Nguyễn Dữ) thể hiện phẩm chất nổi bật nào của nhân vật?",
      options: [
        "Tính cách bốc đồng, thích thể hiện uy quyền cá nhân trước dân làng",
        "Khí phách cương trực, dũng cảm, kiên quyết trừ tà bảo vệ chính nghĩa và dân lành",
        "Sự mê tín dị đoan và nỗi sợ hãi trước thế lực thần linh âm phủ",
        "Mong muốn được tiến cử làm quan dưới triều đình phong kiến"
      ],
      ans: 1,
      exp: "Ngô Tử Văn tắm gội sạch sẽ, khấn trời rồi đốt đền một cách đàng hoàng vì tức giận trước việc hồn ma tên tướng giặc họ Thôi làm yêu làm quái hại dân, thể hiện khí phách cương trực và chính nghĩa."
    },
    {
      q: "Trong truyện ngắn 'Chữ người tử tù' (Nguyễn Tuân), vì sao Huấn Cao lại đồng ý cho chữ viên Quản ngục?",
      options: [
        "Vì Huấn Cao sợ uy quyền cai ngục và muốn được giảm án tử hình",
        "Vì Quản ngục hứa tặng Huấn Cao nhiều vàng ngọc quý giá",
        "Vì Huấn Cao cảm nhận được tấm lòng 'biệt nhỡn liên tài', biết trọng người ngay và thiên lương trong sáng của Quản ngục",
        "Vì thầy Thơ lại ép buộc Huấn Cao phải viết chữ trước khi ra pháp trường"
      ],
      ans: 2,
      exp: "Huấn Cao khẳng định 'Ta nhất sinh không vì vàng ngọc hay quyền thế mà ép mình viết câu đối bao giờ', ông chỉ cho chữ khi thấu hiểu sở thích cao quý và tấm lòng biệt nhỡn liên tài của Quản ngục."
    },
    {
      q: "Câu nào sau đây mắc lỗi dùng từ Hán Việt sai nghĩa?",
      options: [
        "Cảnh cho chữ là một cảnh tượng xưa nay chưa từng có trong lịch sử văn học.",
        "Sự thiếu tự tin khi giao tiếp trước đám đông chính là yếu điểm lớn nhất mà bạn ấy cần khắc phục.",
        "Ngô Tử Văn là bậc trí thức có tinh thần khảng khái, chính trực.",
        "Kho tàng tri thức văn học dân gian Việt Nam vô cùng phong phú."
      ],
      ans: 1,
      exp: "Từ 'yếu điểm' có nghĩa là điểm trọng yếu, quan trọng nhất. Muốn chỉ thiếu sót, hạn chế cần khắc phục thì phải dùng 'điểm yếu' hoặc 'nhược điểm'."
    },
    {
      q: "Khi viết bài văn nghị luận phân tích, đánh giá một tác phẩm truyện, yêu cầu nào sau đây là ĐÚNG?",
      options: [
        "Chỉ cần chép lại thật chi tiết toàn bộ cốt truyện từ đầu đến cuối thay cho phân tích",
        "Đồng nhất hoàn toàn người kể chuyện trong tác phẩm với tác giả ngoài đời",
        "Tóm tắt truyện vừa đủ, kết hợp phân tích chủ đề và những nét đặc sắc nghệ thuật bằng dẫn chứng cụ thể",
        "Không cần trích dẫn bất kì chi tiết hay lời thoại nào trong văn bản truyện"
      ],
      ans: 2,
      exp: "Bài nghị luận về một tác phẩm truyện cần tóm tắt vừa đủ và tập trung lập luận làm rõ chủ đề cùng các nét đặc sắc nghệ thuật (tình huống, nhân vật, ngôi kể, chi tiết...) kèm dẫn chứng xác thực."
    }
  ],

  2: [
    {
      q: "Điểm đặc trưng nổi bật nhất về hình thức và nghệ thuật của thể thơ hai-cư (haiku) truyền thống Nhật Bản là gì?",
      options: [
        "Dung lượng đồ sộ hàng nghìn câu, kể về các cuộc chiến tranh bộ tộc",
        "Gồm 8 câu, mỗi câu 7 chữ, bắt buộc đối xứng chặt chẽ ở các câu 3–4 và 5–6",
        "Hình thức cực kì ngắn gọn, hàm súc, thường có quý ngữ chỉ mùa, ghi lại một khoảnh khắc thiên nhiên và mở ra khoảng lặng liên tưởng",
        "Sử dụng vần lưng lục bát liên hoàn và nhiều điển cố lịch sử phức tạp"
      ],
      ans: 2,
      exp: "Thơ hai-cư truyền thống Nhật Bản nổi bật bởi sự ngắn gọn, cô đọng (nguyên tác 3 dòng 5-7-5 âm tiết), có từ chỉ mùa (quý ngữ) và khơi gợi liên tưởng sâu lắng qua khoảng lặng."
    },
    {
      q: "Trong bài thơ 'Thu hứng' (Cảm xúc mùa thu) của Đỗ Phủ, hình ảnh 'Cô chu nhất hệ cố viên tâm' (Con thuyền lẻ loi buộc chặt mối tình nhà) nằm ở phần nào của kết cấu Đường luật?",
      options: [
        "Hai câu đề (câu 1 – 2)",
        "Hai câu thực (câu 3 – 4)",
        "Hai câu luận (câu 5 – 6)",
        "Hai câu kết (câu 7 – 8)"
      ],
      ans: 2,
      exp: "Cặp câu 5–6 ('Tùng cúc lưỡng khai tha nhật lệ / Cô chu nhất hệ cố viên tâm') là hai câu luận, đối xứng chỉnh trang để trực tiếp giãi bày nỗi lòng nhớ quê da diết của nhà thơ."
    },
    {
      q: "Từ 'chín' trong nhan đề bài thơ 'Mùa xuân chín' của Hàn Mặc Tử gợi lên ý nghĩa thẩm mĩ nào?",
      options: [
        "Gợi trạng thái mùa xuân đang ở độ viên mãn, căng tràn sức sống, đồng thời ẩn chứa cảm giác thời gian trôi, sự mong manh và nỗi nhớ",
        "Chỉ thời điểm mùa hạ nắng gắt đã hoàn toàn thay thế mùa xuân",
        "Chỉ cảnh thu hoạch trái cây chín rộ trong khu vườn miền nhiệt đới",
        "Thể hiện sự già nua, héo úa của cảnh vật thiên nhiên"
      ],
      ans: 0,
      exp: "Nhan đề 'Mùa xuân chín' vừa gợi vẻ đẹp viên mãn, rạo rực nhất của sắc xuân, tình xuân, vừa gợi dự cảm bâng khuâng trước bước đi của thời gian và nỗi niềm thương nhớ quê làng."
    },
    {
      q: "Theo nhà phê bình Chu Văn Sơn trong văn bản 'Bản hoà âm ngôn từ trong Tiếng thu của Lưu Trọng Lư', sức hấp dẫn của bài thơ 'Tiếng thu' được tạo nên từ sự hoà hợp nào?",
      options: [
        "Sự kết hợp giữa thơ chữ Hán và thơ chữ Nôm",
        "Sự hoà hợp giữa 'tiếng thu' của cảnh vật thiên nhiên với 'tiếng lòng' thổn thức của thi nhân và 'tiếng thơ' (nhạc điệu ngôn từ)",
        "Sự đối lập gay gắt giữa âm thanh chiến trường và cuộc sống hậu phương",
        "Việc tuân thủ nghiêm ngặt luật bằng trắc của thơ thất ngôn bát cú"
      ],
      ans: 1,
      exp: "Chu Văn Sơn chứng minh rằng nhạc điệu, nhịp điệu và cách tổ chức ngôn từ ('tiếng thơ') đã hoà quyện trọn vẹn với âm thanh thiên nhiên ('tiếng thu') và tâm trạng ('tiếng lòng')."
    },
    {
      q: "Khi phân tích các biện pháp tu từ và hình thức nghệ thuật trong bài nghị luận về một tác phẩm thơ, người viết cần tránh lỗi nào sau đây?",
      options: [
        "Chỉ gọi tên, liệt kê biện pháp tu từ mà không phân tích tác dụng biểu đạt cảm xúc và chủ đề của chúng",
        "Phân tích mối quan hệ giữa vần, nhịp, nhạc điệu với mạch cảm xúc của nhân vật trữ tình",
        "Chọn trích dẫn những câu thơ, từ ngữ ('nhãn tự') tiêu biểu",
        "Nêu cảm nhận khái quát về cấu tứ và vẻ đẹp tư tưởng của bài thơ"
      ],
      ans: 0,
      exp: "Khi viết nghị luận thơ, tuyệt đối không dừng ở việc liệt kê tên biện pháp tu từ mà phải giải thích lựa chọn nghệ thuật ấy làm nổi bật cảm xúc và chủ đề như thế nào."
    }
  ],

  3: [
    {
      q: "Trong văn bản nghị luận, yếu tố nào đóng vai trò là vấn đề, tư tưởng hoặc quan điểm bao quát xuyên suốt toàn bộ bài viết?",
      options: [
        "Bằng chứng (dẫn chứng)",
        "Luận đề",
        "Cước chú",
        "Yếu tố tự sự phụ trợ"
      ],
      ans: 1,
      exp: "Luận đề là vấn đề, tư tưởng, quan điểm bao quát được tập trung bàn luận xuyên suốt văn bản; luận đề được triển khai qua hệ thống các luận điểm, lí lẽ và bằng chứng."
    },
    {
      q: "Trong văn bản 'Hiền tài là nguyên khí của quốc gia', Thân Nhân Trung khẳng định mục đích cao cả của việc khắc bia tiến sĩ là gì?",
      options: [
        "Chỉ để trang trí cho khu Quốc Tử Giám thêm uy nghiêm, cổ kính",
        "Để tôn vinh người tài đức muôn đời, đồng thời khiến kẻ ác lấy đó làm răn, người thiện theo đó mà gắng, góp phần làm hưng thịnh quốc gia",
        "Để thay thế hoàn toàn việc ban phẩm tước và bổng lộc của triều đình",
        "Để ghi chép lại lịch sử các cuộc chiến tranh chống ngoại xâm"
      ],
      ans: 1,
      exp: "Thân Nhân Trung chỉ rõ việc dựng bia đá lưu danh hiền tài vừa báo đáp người hiền, vừa khích lệ kẻ sĩ rèn luyện danh tiết, giúp vua giúp nước và răn đe kẻ ác."
    },
    {
      q: "Trong văn bản 'Yêu và đồng cảm', tác giả Phong Tử Khải mở đầu bài nghị luận bằng cách nào để tạo sức thuyết phục tự nhiên?",
      options: [
        "Trích dẫn hàng loạt số liệu thống kê kinh tế học",
        "Kể câu chuyện đời thường về cậu bé năm tuổi biết xót thương hoa cỏ và muốn mọi đồ vật đều có đôi có bạn",
        "Đưa ra một định nghĩa triết học trừu tượng bằng thuật ngữ chuyên ngành",
        "Phê phán gay gắt những người không biết vẽ tranh"
      ],
      ans: 1,
      exp: "Phong Tử Khải kết hợp yếu tố tự sự (kể chuyện cậu bé 5 tuổi) để dẫn dắt tự nhiên, giàu cảm xúc vào luận điểm về tấm lòng đồng cảm trong sáng tạo nghệ thuật và nhân sinh."
    },
    {
      q: "Quan điểm trung tâm của nhà thơ Lê Đạt trong tiểu luận 'Chữ bầu lên nhà thơ' là gì?",
      options: [
        "Nhà thơ chỉ cần dựa vào cơn bốc đồng cảm xúc, không cần quan tâm đến việc chọn lọc ngôn từ",
        "Chữ trong thơ chỉ là phương tiện truyền đạt có sẵn giống hệt văn xuôi thông thường",
        "Lao động thơ trước hết là sự khổ luyện chữ nghĩa ('phu chữ'); chính sự sáng tạo ngôn từ tạo nên phẩm chất và bầu lên nhà thơ",
        "Một người đã nổi tiếng một lần thì nghiễm nhiên là nhà thơ suốt đời không cần sáng tác thêm"
      ],
      ans: 2,
      exp: "Lê Đạt đề cao trách nhiệm lao động chữ nghĩa nghiêm túc của người làm thơ: chữ trong thơ đa nghĩa, hàm súc và chính chữ nghĩa định hình tầm vóc, bản sắc nhà thơ."
    },
    {
      q: "Sự nối kết hình thức giữa các câu, các đoạn trong văn bản bằng phép lặp, phép thế, phép nối, phép liên tưởng được gọi là gì?",
      options: [
        "Liên kết văn bản",
        "Cước chú văn bản",
        "Tỉnh lược văn bản",
        "Điểm nhìn trần thuật"
      ],
      ans: 0,
      exp: "Liên kết là sự nối kết hình thức giữa các câu, các đoạn bằng các phương tiện từ vựng/ngữ pháp (lặp, thế, nối, liên tưởng) nhằm thể hiện và củng cố tính mạch lạc bên trong."
    }
  ],

  4: [
    {
      q: "Nhân vật trung tâm của thể loại sử thi (anh hùng ca) mang những đặc điểm cốt lõi nào?",
      options: [
        "Là những con người nhỏ bé, đời thường chỉ quan tâm đến lợi ích kinh tế cá nhân",
        "Là người anh hùng đại diện cho sức mạnh, phẩm chất lí tưởng và khát vọng của cả cộng đồng, hành động vì danh dự và vận mệnh tập thể",
        "Là những vị thần tối cổ tạo ra đất trời khi chưa có loài người",
        "Là các nhân vật hài hước chuyên châm biếm thói hư tật xấu nơi huyện đường"
      ],
      ans: 1,
      exp: "Nhân vật anh hùng sử thi là hiện thân cho sức mạnh thể chất, lòng quả cảm và lí tưởng chung của cộng đồng thị tộc/thành bang trong các biến cố trọng đại."
    },
    {
      q: "Trong đoạn trích 'Héc-to từ biệt Ăng-đrô-mác' (sử thi I-li-át – Hô-me-rơ), quyết định ra trận của Héc-to được thúc đẩy bởi điều gì?",
      options: [
        "Sự thờ ơ, lạnh nhạt đối với nỗi đau của vợ và đứa con thơ",
        "Ý thức sâu sắc về bổn phận bảo vệ thành Tơ-roa, danh dự của người chiến binh và phẩm chất anh hùng đặt nghĩa vụ cộng đồng lên trên sự an nguy cá nhân",
        "Mong muốn đi chinh phục vùng đất mới để cướp bóc của cải",
        "Sự ép buộc của các vị thần trên đỉnh Ô-lem-pơ"
      ],
      ans: 1,
      exp: "Dù vô cùng yêu thương và xót xa cho vợ con, Héc-to không thể hèn nhát đứng nhìn thành Tơ-roa lâm nguy; chàng chọn ra trận vì danh dự và trách nhiệm với cộng đồng."
    },
    {
      q: "Chi tiết Đăm Săn bị chìm xuống rừng sáp đen nhưng hồn chàng biến thành con ruồi bay vào miệng chị gái Hơ-Âng để tái sinh thành Đăm Săn cháu mang ý nghĩa gì?",
      options: [
        "Khẳng định sự thất bại vĩnh viễn và sự diệt vong của thị tộc Ê-đê",
        "Biểu trưng cho sức sống bất diệt, sự kế tục không ngừng của truyền thống và khát vọng anh hùng trong cộng đồng Ê-đê",
        "Giải thích nguồn gốc loài ruồi trong tự nhiên",
        "Chứng tỏ Đăm Săn là một nhân vật phản diện bị thần linh trừng phạt"
      ],
      ans: 1,
      exp: "Mô-típ chết – tái sinh ở cuối tác phẩm khẳng định người anh hùng Đăm Săn và khát vọng hùng cường của cộng đồng Ê-đê là bất tử, thế hệ sau luôn tiếp nối thế hệ trước."
    },
    {
      q: "Khi trích dẫn trực tiếp một đoạn văn bản trong báo cáo nghiên cứu và muốn lược bỏ một vài câu ở giữa, người viết cần dùng kí hiệu nào?",
      options: [
        "Dấu chấm hỏi đặt trong ngoặc kép “?”",
        "Dấu ba chấm đặt trong ngoặc vuông [...] hoặc ngoặc đơn (...)",
        "Dấu gạch chéo kép //",
        "Dấu hoa thị kép **"
      ],
      ans: 1,
      exp: "Kí hiệu [...] (hoặc (...)) trong phần trích dẫn cho người đọc biết có một bộ phận văn bản nguồn đã được tỉnh lược nhưng không làm sai lệch ý chính của nguồn."
    },
    {
      q: "Điểm khác biệt căn bản giữa một 'Báo cáo nghiên cứu' và một 'Bài văn nghị luận cảm nhận văn học thông thường' là gì?",
      options: [
        "Báo cáo nghiên cứu chỉ dùng cảm xúc cá nhân, không cần dẫn nguồn tài liệu",
        "Báo cáo nghiên cứu phải có câu hỏi/phạm vi nghiên cứu, phương pháp, nguồn tư liệu minh bạch, trình bày phát hiện khách quan theo đề mục và có danh mục tài liệu tham khảo",
        "Báo cáo nghiên cứu bắt buộc viết bằng thể thơ lục bát",
        "Báo cáo nghiên cứu không được phép sử dụng bảng biểu hay trích dẫn"
      ],
      ans: 1,
      exp: "Báo cáo nghiên cứu mang tính khoa học, khách quan: phải xác lập câu hỏi nghiên cứu, thu thập tư liệu có trích dẫn/cước chú rõ ràng và kết luận dựa trên bằng chứng."
    }
  ],

  5: [
    {
      q: "Nhận định nào sau đây nêu ĐÚNG đặc trưng của nghệ thuật Chèo truyền thống Việt Nam?",
      options: [
        "Là kịch nói hiện đại du nhập từ phương Tây thế kỉ XX, chỉ sử dụng đối thoại văn xuôi",
        "Là kịch hát dân gian phổ biến ở đồng bằng Bắc Bộ, gắn với sân đình, kết hợp tổng hợp nói – hát – múa – nhạc trên nền một tích trò có sẵn",
        "Là nghệ thuật điều khiển con rối gỗ trên mặt nước ao làng bằng hệ thống sào dây",
        "Là loại hình kịch cung đình chỉ dùng tiếng Hán cổ, tuyệt đối không có yếu tố hài hước"
      ],
      ans: 1,
      exp: "Chèo là kịch hát dân gian đồng bằng Bắc Bộ, mang tính tổng hợp và tính ước lệ cao, kết hợp nói, hát các làn điệu chèo, múa và nhạc cụ dân tộc dựa trên tích trò."
    },
    {
      q: "Trong trích đoạn chèo 'Xúy Vân giả dại' (trích vở Kim Nham), đằng sau những lời hát tưởng như điên loạn, lộn xộn của Xúy Vân là tâm sự gì?",
      options: [
        "Niềm vui sướng hả hê khi lừa dối được Kim Nham",
        "Nỗi cô đơn lẻ bóng, niềm khao khát hạnh phúc gia đình sum vầy giản dị ('chờ cho bông lúa chín vàng', 'chàng đi cày, thiếp bưng cơm') và bi kịch bế tắc, ân hận",
        "Khát vọng làm quan lớn trong triều đình phong kiến",
        "Sự thờ ơ, vô cảm trước mọi lời dị nghị của hàng xóm láng giềng"
      ],
      ans: 1,
      exp: "Qua các điệu hát quá giang, con gà rừng, hát ngược, Xúy Vân bộc lộ nỗi đau thân phận phụ nữ lẻ loi, ước mơ gia đình đầm ấm bị tan vỡ và sự giằng xé nội tâm bi kịch."
    },
    {
      q: "Trong trích đoạn tuồng đồ 'Huyện đường' (trích Nghêu, Sò, Ốc, Hến), tiếng cười trào phúng của tác giả dân gian bật ra chủ yếu từ thủ pháp nào?",
      options: [
        "Từ sự mâu thuẫn giữa vẻ ngoài công đường uy nghiêm với lời tự thú trắng trợn về thói tham nhũng, ăn tiền đút lót và mê muội trước nhan sắc Thị Hến của Tri huyện, Đề lại",
        "Từ những phép thuật biến hoá kì ảo của các vị thần tiên",
        "Từ những câu thơ Đường luật thất ngôn bát cú trang trọng",
        "Từ chiến công đánh giặc ngoại xâm oanh liệt của viên Tri huyện"
      ],
      ans: 0,
      exp: "Lời tự xưng danh và đối thoại giữa Tri huyện với Đề lại đã tự lột trần bộ mặt tham lam, bất công, háo sắc nơi cửa quan, tạo nên tiếng cười châm biếm sâu sắc."
    },
    {
      q: "Theo văn bản thông tin 'Múa rối nước – hiện đại soi bóng tiền nhân' (Phạm Thuỳ Dung), yếu tố nào tạo nên sự độc đáo riêng biệt của sân khấu múa rối nước Việt Nam?",
      options: [
        "Sân khấu là mặt nước (thuỷ đình), con rối làm bằng gỗ sung sơn ta do nghệ nhân đứng sau bức mành điều khiển qua hệ thống máy sào và dây ngầm dưới nước",
        "Nghệ nhân trực tiếp hoá trang mặt nạ bước ra sân khấu biểu diễn võ thuật",
        "Con rối được điều khiển hoàn toàn bằng phần mềm máy tính tự động từ thời cổ đại",
        "Biểu diễn trong nhà hát kín không sử dụng âm nhạc dân gian"
      ],
      ans: 0,
      exp: "Múa rối nước gắn với văn minh lúa nước: lấy mặt nước làm sân khấu, buồng trò (thuỷ đình) che kín nghệ nhân điều khiển rối gỗ bằng hệ thống sào/dây dưới nước kết hợp âm nhạc chèo."
    },
    {
      q: "Khi lắng nghe và phản hồi một bài thuyết trình báo cáo nghiên cứu văn hoá truyền thống, người nghe cần ưu tiên điều gì?",
      options: [
        "Chỉ nhận xét về trang phục và giọng nói của người thuyết trình, bỏ qua nội dung",
        "Xác định câu hỏi nghiên cứu, phương pháp, bằng chứng tư liệu và kết luận của báo cáo để đặt câu hỏi và phản hồi lịch sự, có căn cứ",
        "Ngắt lời người nói ngay khi họ vừa bắt đầu trình bày",
        "Bắt buộc người nói phải thay đổi toàn bộ đề tài theo sở thích riêng của mình"
      ],
      ans: 1,
      exp: "Người nghe cần bám sát nội dung học thuật (câu hỏi nghiên cứu, tư liệu, bằng chứng, kết luận), ghi điểm cần hỏi và phản hồi cụ thể, lịch sự, có căn cứ."
    }
  ],

  6: [
    {
      q: "Hạt nhân tư tưởng xuyên suốt trong sự nghiệp văn chương và chính trị của Nguyễn Trãi ('Bình Ngô đại cáo', 'Quốc âm thi tập') là gì?",
      options: [
        "Tư tưởng thoát tục, hoàn toàn quay lưng lại với cuộc sống nhân dân và thời cuộc",
        "Tư tưởng nhân nghĩa gắn liền với 'yên dân', 'trừ bạo', bảo vệ độc lập chủ quyền dân tộc và khát vọng thái bình, ấm no cho muôn dân",
        "Chủ nghĩa cá nhân hưởng lạc nơi cung đình",
        "Tư tưởng chỉ coi trọng văn học chữ Hán, phủ nhận giá trị tiếng Việt (chữ Nôm)"
      ],
      ans: 1,
      exp: "Tư tưởng nhân nghĩa của Nguyễn Trãi lấy dân làm gốc ('Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo'), suốt đời 'dành còn để trợ dân này'."
    },
    {
      q: "Trong phần mở đầu 'Bình Ngô đại cáo', Nguyễn Trãi đã xác lập nền tảng độc lập, chủ quyền của nước Đại Việt dựa trên những yếu tố nào?",
      options: [
        "Nền văn hiến lâu đời, cương vực lãnh thổ riêng, phong tục tập quán riêng, lịch sử các triều đại độc lập (Triệu, Đinh, Lý, Trần) và hào kiệt đời nào cũng có",
        "Chỉ dựa vào diện tích lãnh thổ và số lượng quân đội thường trực",
        "Sự công nhận sắc phong của các triều đại phong kiến phương Bắc",
        "Các truyền thuyết thần thoại về Thần Trụ Trời và Thần Sét"
      ],
      ans: 0,
      exp: "Nguyễn Trãi hoàn chỉnh quan niệm về quốc gia độc lập bằng 5 yếu tố: văn hiến, lãnh thổ, phong tục, lịch sử triều đại riêng sánh ngang phương Bắc và nhân tài hào kiệt."
    },
    {
      q: "Bài thơ 'Bảo kính cảnh giới' (Gương báu răn mình) – bài 43 của Nguyễn Trãi được sáng tác theo thể thơ nào?",
      options: [
        "Thơ lục bát dân gian truyền thống",
        "Thơ chữ Hán ngũ ngôn tứ tuyệt",
        "Thơ Nôm Đường luật thất ngôn xen lục ngôn (kết hợp câu 7 chữ và câu 6 chữ ở câu 1 và câu 8)",
        "Thơ tự do hiện đại không vần"
      ],
      ans: 2,
      exp: "Bài 43 thuộc 'Quốc âm thi tập', tiêu biểu cho sáng tạo thể thơ Nôm Đường luật thất ngôn xen lục ngôn của Nguyễn Trãi (câu 1: 'Rồi hóng mát thuở ngày trường' và câu 8: 'Dân giàu đủ khắp đòi phương' gồm 6 chữ)."
    },
    {
      q: "Hai câu kết trong bài 'Bảo kính cảnh giới' bài 43 ('Dẽ có Ngu cầm đàn một tiếng / Dân giàu đủ khắp đòi phương') thể hiện vẻ đẹp gì trong tâm hồn Nguyễn Trãi?",
      options: [
        "Mong muốn trở thành một nghệ sĩ gảy đàn nổi tiếng khắp thiên hạ",
        "Dù đang thưởng ngoạn cảnh ngày hè rực rỡ nhưng tấm lòng Ức Trai vẫn luôn hướng về nhân dân, khát khao cuộc sống ấm no, hạnh phúc cho trăm họ",
        "Nỗi buồn chán muốn từ bỏ cõi trần để đi tìm tiên giới",
        "Sự nuối tiếc những chiến công quân sự trong quá khứ"
      ],
      ans: 1,
      exp: "Điểm kết tụ của bức tranh thiên nhiên và âm thanh đời sống ngày hè không phải là sự hưởng thụ cá nhân mà là ước nguyện 'dân giàu đủ khắp đòi phương'."
    },
    {
      q: "Trong bài thơ chữ Hán 'Dục Thuý sơn' (Núi Dục Thuý), Nguyễn Trãi đã dùng những hình ảnh ẩn dụ, so sánh nào để khắc hoạ vẻ đẹp của ngọn núi?",
      options: [
        "So sánh ngọn núi với thanh kiếm sắc bén chọc thủng bầu trời",
        "Ví ngọn núi như đoá sen nổi trên mặt nước, bóng tháp soi xuống dòng nước như chiếc trâm ngọc xanh cài trên mái tóc mỹ nhân",
        "Ví ngọn núi như bức tường thành bằng sắt ngăn sóng biển dữ dội",
        "So sánh ngọn núi với con thuyền lẻ loi giữa dòng sông Thu Bồn"
      ],
      ans: 1,
      exp: "Nguyễn Trãi miêu tả núi Dục Thuý bằng bút pháp mĩ lệ, thanh khiết: 'Liên hoa phù thuỷ thượng' (đoá sen nổi trên mặt nước), 'Tháp ảnh trâm thanh ngọc' (bóng tháp như trâm ngọc xanh)."
    }
  ],

  7: [
    {
      q: "Điểm khác biệt cơ bản giữa 'Người kể chuyện ngôi thứ nhất' và 'Người kể chuyện ngôi thứ ba' là gì?",
      options: [
        "Ngôi thứ nhất chỉ dùng trong thần thoại, còn ngôi thứ ba chỉ dùng trong truyện ngắn hiện đại",
        "Ngôi thứ nhất xưng 'tôi' và trực tiếp xuất hiện như một nhân vật trong truyện; còn ngôi thứ ba giấu mình, gọi tên các nhân vật và có thể kể toàn tri hoặc hạn tri",
        "Ngôi thứ nhất biết hết mọi suy nghĩ thầm kín của tất cả nhân vật, còn ngôi thứ ba không biết gì về nội tâm nhân vật",
        "Ngôi thứ nhất không có điểm nhìn, chỉ có ngôi thứ ba mới có điểm nhìn nghệ thuật"
      ],
      ans: 1,
      exp: "Người kể ngôi thứ nhất xưng 'tôi' (trực tiếp tham gia hoặc chứng kiến câu chuyện), còn người kể ngôi thứ ba ẩn mình, đứng ngoài quan sát và có thể có cái nhìn toàn tri hoặc hạn tri."
    },
    {
      q: "Trong đoạn trích 'Người cầm quyền khôi phục uy quyền' (Những người khốn khổ – Vích-to Huy-gô), quyền năng của người kể chuyện ngôi thứ ba được thể hiện rõ nhất ở điểm nào?",
      options: [
        "Chỉ ghi chép lạnh lùng như một biên bản toà án, không bộc lộ bất kì thái độ nào",
        "Bao quát toàn bộ khung cảnh, thấu suốt nội tâm cả Gia-ve, Phăng-tin và Giăng Van-giăng, đồng thời trực tiếp bình luận ngợi ca sức mạnh của lòng nhân ái",
        "Chỉ nhìn sự việc qua con mắt của viên thanh tra Gia-ve",
        "Xưng 'tôi' để kể lại kỉ niệm tuổi thơ của mình với Cô-dét"
      ],
      ans: 1,
      exp: "Người kể chuyện toàn tri trong tiểu thuyết của Huy-gô vừa khắc hoạ tương phản ngoại hình, hành động của các nhân vật, vừa thấu tỏ thế giới tâm linh và trực tiếp bình luận đầy xúc động."
    },
    {
      q: "Trong truyện ngắn 'Dưới bóng hoàng lan' của Thạch Lam, điểm nhìn trần thuật chủ yếu được đặt ở đâu và mang lại hiệu quả gì?",
      options: [
        "Đặt ở điểm nhìn bên trong, bám sát cảm nhận tinh tế của nhân vật Thanh, giúp làm nổi bật vẻ đẹp bình yên của khu vườn quê, tình bà cháu và rung động đầu đời trong trẻo",
        "Đặt hoàn toàn ở điểm nhìn bên ngoài của những người hàng xóm xa lạ",
        "Đặt ở điểm nhìn của một nhà sử học đang khảo cứu kiến trúc ngôi nhà cổ",
        "Liên tục thay đổi giữa hàng chục nhân vật phụ để tạo kịch tính gay cấn"
      ],
      ans: 0,
      exp: "Tuy viết ở ngôi thứ ba nhưng Thạch Lam đặt điểm nhìn sát với tâm hồn và giác quan của Thanh, khiến cảnh vật (bóng nắng, hương hoàng lan) thấm đẫm cảm xúc nội tâm."
    },
    {
      q: "Trong truyện ngắn 'Một chuyện đùa nho nhỏ' (An-tôn Sê-khốp), việc kể chuyện từ ngôi thứ nhất ('tôi') đóng vai trò gì trong việc thể hiện chủ đề?",
      options: [
        "Giúp người đọc thấy rõ khoảng cách giữa trò đùa ban đầu của nhân vật 'tôi' với niềm tin tha thiết của Na-đi-a, đồng thời bộc lộ sự chuyển biến từ bông đùa sang day dứt, suy tư lúc về già",
        "Chứng minh nhân vật 'tôi' hoàn toàn không biết ai đã nói câu 'Tôi yêu em' với Na-đi-a",
        "Biến câu chuyện thành một bản cáo trạng hình sự nghiêm khắc",
        "Xoá bỏ hoàn toàn yếu tố trữ tình và tâm lí trong tác phẩm"
      ],
      ans: 0,
      exp: "Chỉ nhân vật 'tôi' mới biết rõ câu nói trên dốc trượt tuyết là trò đùa của mình; sự đối sánh giữa cái biết của 'tôi' và khát vọng tình yêu của Na-đi-a tạo nên dư âm vừa hóm hỉnh vừa xót xa."
    },
    {
      q: "Trong câu văn: 'Bà cụ – người bà hiền từ đã nuôi Thanh khôn lớn từ thuở nhỏ – nhìn cháu bằng ánh mắt âu yếm', bộ phận đặt giữa hai dấu gạch ngang sử dụng biện pháp tu từ cú pháp nào?",
      options: [
        "Biện pháp liệt kê",
        "Biện pháp chêm xen (thành phần phụ chú)",
        "Biện pháp nói quá (phóng đại)",
        "Biện pháp tỉnh lược"
      ],
      ans: 1,
      exp: "Cụm từ đặt giữa hai dấu gạch ngang bổ sung thông tin giải thích và bộc lộ tình cảm đối với 'Bà cụ', đó chính là biện pháp chêm xen."
    }
  ],

  8: [
    {
      q: "Đặc điểm quan trọng nhất giúp phân biệt 'Dữ kiện' (Fact) với 'Ý kiến/Quan điểm' (Opinion) trong văn bản thông tin là gì?",
      options: [
        "Dữ kiện luôn được viết bằng thơ, còn ý kiến được viết bằng văn xuôi",
        "Dữ kiện là thông tin khách quan (số liệu, thời gian, địa điểm, sự việc thực tế) có thể kiểm chứng được; còn ý kiến là nhận định, đánh giá chủ quan của người viết",
        "Dữ kiện luôn ngắn hơn ý kiến",
        "Dữ kiện không bao giờ chứa con số, còn ý kiến luôn chứa con số"
      ],
      ans: 1,
      exp: "Dữ kiện mang tính khách quan và kiểm chứng được tính xác thực; còn ý kiến thể hiện góc nhìn, thái độ hoặc suy luận đánh giá của người viết trước dữ kiện."
    },
    {
      q: "Trong văn bản 'Sự sống và cái chết' (Trịnh Xuân Thuận), tác giả nhìn nhận vai trò của cái chết và các đợt tuyệt chủng trong lịch sử sinh giới Trái Đất như thế nào?",
      options: [
        "Là dấu chấm hết tuyệt đối khiến Trái Đất trở thành hành tinh chết hoàn toàn từ 65 triệu năm trước",
        "Không chỉ là sự huỷ diệt mà còn là động lực mở đường cho sự tiến hoá và đa dạng sinh học mới nảy nở (như sự phát triển của động vật có vú sau khi khủng long tuyệt chủng)",
        "Là hiện tượng không liên quan gì đến quy luật tự nhiên và vũ trụ",
        "Là một câu chuyện thần thoại không có bất kì bằng chứng địa chất nào"
      ],
      ans: 1,
      exp: "Trịnh Xuân Thuận kết hợp tri thức khoa học với suy tưởng triết lí để chỉ ra rằng trong lịch sử tiến hoá, sự tuyệt chủng của loài cũ đã tạo không gian sinh thái cho các loài mới (trong đó có tổ tiên loài người) phát triển."
    },
    {
      q: "Trong văn bản 'Nghệ thuật truyền thống của người Việt', học giả Nguyễn Văn Huyên đã làm sáng tỏ đặc trưng thẩm mĩ của người Việt qua những lĩnh vực khảo cứu nào?",
      options: [
        "Kiến trúc, điêu khắc (gỗ, đá, tượng chùa Tây Phương), đúc đồng, gốm sứ, sơn mài và khảm xà cừ",
        "Chỉ khảo cứu duy nhất nghệ thuật thơ hai-cư và kịch cổ điển Pháp",
        "Công nghệ chế tạo tàu vũ trụ và vật lí hạt nhân",
        "Nghệ thuật trượt tuyết mùa đông"
      ],
      ans: 0,
      exp: "Nguyễn Văn Huyên phân loại và khảo sát hệ thống các ngành nghệ thuật tạo hình truyền thống (kiến trúc đình chùa, lăng tẩm, điêu khắc tượng Phật, đồ đồng, sơn mài...) gắn với tâm thức tôn giáo Việt Nam."
    },
    {
      q: "Trong bản tin 'Phục hồi tầng ozone: Thành công hiếm hoi của nỗ lực toàn cầu' (Lê My), phương tiện phi ngôn ngữ (biểu đồ/hình ảnh vệ tinh diện tích lỗ thủng ozone qua các năm) có tác dụng gì?",
      options: [
        "Chỉ dùng để lấp chỗ trống trên trang báo, không liên quan đến nội dung",
        "Trực quan hoá và cung cấp bằng chứng định lượng xác thực cho thông tin về sự thu hẹp của lỗ thủng tầng ozone nhờ Nghị định thư Montreal",
        "Thay thế hoàn toàn phần nhan đề và tên tác giả của bài báo",
        "Chứng minh tầng ozone đang bị phá huỷ nhanh hơn bao giờ hết"
      ],
      ans: 1,
      exp: "Hình ảnh vệ tinh và đồ thị biến động diện tích lỗ thủng tầng ozone giúp trực quan hoá số liệu khoa học, củng cố độ tin cậy cho thông điệp của bản tin."
    },
    {
      q: "Khi soạn thảo một 'Văn bản nội quy hoặc hướng dẫn nơi công cộng', người viết cần tuân thủ yêu cầu nào về ngôn ngữ và bố cục?",
      options: [
        "Dùng nhiều ẩn dụ đa nghĩa, câu văn dài dòng giàu chất tiểu thuyết lãng mạn",
        "Chia đề mục/đánh số rõ ràng, câu văn ngắn gọn, đơn nghĩa, dùng từ ngữ chỉ quy định nhất quán (Yêu cầu, Nghiêm cấm...) kết hợp kí hiệu trực quan dễ hiểu",
        "Viết dưới dạng một bức tâm thư kể lể chuyện cá nhân",
        "Không cần nêu tên địa điểm hay đối tượng áp dụng"
      ],
      ans: 1,
      exp: "Nội quy/hướng dẫn công cộng đòi hỏi tính chuẩn mực, ngắn gọn, rõ ràng, khả thi, đánh số thứ tự mạch lạc để mọi người dễ đọc và thực hiện ngay."
    }
  ],

  9: [
    {
      q: "Muốn so sánh trực quan những điểm giống nhau (phần giao) và khác nhau giữa hai thể loại Thần thoại và Sử thi, người viết nên chọn loại sơ đồ nào?",
      options: [
        "Biểu đồ tròn (Pie chart)",
        "Sơ đồ Venn (Venn diagram)",
        "Biểu đồ thời gian (Timeline)",
        "Bản đồ địa hình"
      ],
      ans: 1,
      exp: "Sơ đồ Venn sử dụng các vòng tròn giao nhau rất tối ưu để hiển thị phần đặc điểm chung (phần giao ở giữa) và đặc điểm riêng (phần không giao) của hai hay nhiều đối tượng."
    },
    {
      q: "Thông điệp cốt lõi mà nhà vật lí Các-lô Rô-ve-li gửi gắm trong văn bản 'Về chính chúng ta' là gì?",
      options: [
        "Con người là chúa tể tuyệt đối đứng ngoài mọi quy luật tự nhiên nên có quyền khai thác cạn kiệt Trái Đất",
        "Con người là một bộ phận máu thịt của tự nhiên và vũ trụ; hiểu biết khoa học nhắc nhở chúng ta sống khiêm nhường và có trách nhiệm bảo vệ ngôi nhà chung Trái Đất",
        "Khoa học vật lí đã giải đáp xong mọi bí ẩn nên con người không cần tò mò khám phá nữa",
        "Trái Đất là hành tinh duy nhất trong vũ trụ không chịu tác động của các định luật vật lí"
      ],
      ans: 1,
      exp: "Carlo Rovelli chỉ ra con người được cấu tạo từ chính các nguyên tử và quy luật của vũ trụ, từ đó thức tỉnh thái độ khiêm nhường và trách nhiệm sinh thái trước thiên nhiên."
    },
    {
      q: "Khi đọc hiểu bài thơ 'Con đường không chọn' (The Road Not Taken) của Robert Frost, cách tiếp cận nào sau đây là sâu sắc và chuẩn xác nhất?",
      options: [
        "Chỉ coi bài thơ như một khẩu hiệu quảng cáo đơn giản khuyên người ta làm ngược lại đám đông bằng mọi giá",
        "Nhận ra sự tương đồng của hai lối rẽ lúc lựa chọn, tính chất một đi không trở lại của đường đời, cùng sắc thái vừa kiêu hãnh vừa bâng khuâng nuối tiếc trong tiếng thở dài hồi tưởng",
        "Hiểu bài thơ đơn thuần là bản hướng dẫn địa lí cho người đi bộ trong rừng mùa thu",
        "Cho rằng nhân vật trữ tình đã đi trọn vẹn cả hai con đường trong cùng một buổi sáng"
      ],
      ans: 1,
      exp: "Bài thơ của Frost giàu tính triết lí đa nghĩa: hai con đường thực chất mòn ngang nhau, nhưng khi đã chọn một lối thì không thể quay lại, để lại tiếng thở dài suy ngẫm về sự lựa chọn và số phận."
    },
    {
      q: "Trong văn bản 'Một đời như kẻ tìm đường', tác giả Phan Văn Trường đúc kết điều gì đã giúp ông định hướng giữa những ngã rẽ cuộc đời?",
      options: [
        "Một bản kế hoạch chi tiết không bao giờ thay đổi từ lúc mới sinh ra",
        "Thái độ sống tận tâm, không ngừng học hỏi, cởi mở đón nhận thử thách và trọng tình người – đó chính là 'chiếc la bàn nội tâm' dẫn lối",
        "Sự may mắn ngẫu nhiên mà không cần bất kì nỗ lực lao động nào",
        "Việc né tránh mọi công việc khó khăn ở nước ngoài"
      ],
      ans: 1,
      exp: "Tác giả khẳng định dù không chọn trước mọi ngã rẽ nhưng chính tâm thế sống tích cực, tận hiến và ham học hỏi đã dẫn dắt con người tìm thấy con đường ý nghĩa."
    },
    {
      q: "Yêu cầu quan trọng nhất khi viết một 'Bài luận về bản thân' (Personal Essay) là gì?",
      options: [
        "Liệt kê càng nhiều giấy khen, giải thưởng và điểm số học bạ càng tốt như một bản lí lịch trích ngang",
        "Sao chép những câu danh ngôn khuôn sáo trên mạng mà không cần trải nghiệm cá nhân",
        "Từ những trải nghiệm chân thực và chi tiết có ý nghĩa của bản thân, lập luận sâu sắc để làm nổi bật nhận thức, giá trị sống, cá tính và hướng đi của chính mình",
        "Kể lể những thông tin đời tư vụn vặt không mang lại bài học hay thông điệp gì"
      ],
      ans: 2,
      exp: "Bài luận về bản thân là văn bản nghị luận kết hợp trải nghiệm thật và suy ngẫm sâu sắc để trả lời câu hỏi 'Mình là ai, mình trân trọng giá trị gì và trưởng thành như thế nào'."
    }
  ]
};

module.exports = quizzes;
