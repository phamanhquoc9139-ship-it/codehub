const fs = require('fs');
const path = require('path');

console.log("Generating Am Nhac Lop 7 (Music 7) with exact new structure...");

// 8 Topics Data + Terms based on the user's provided structure
const topicsData = [
  {
    num: 1,
    id: "chu-de-1",
    term: "Học kì 1",
    termTag: "HK1",
    title: "Ngày khai trường",
    subtitle: "Rộn rã niềm vui tựu trường, nhịp lấy đà, Đọc nhạc số 1 và Nhạc sĩ Trịnh Công Sơn",
    svgNodes: [
      { title: "BÀI HÁT", desc: "Khai trường (Nhạc: Quỳnh Hợp, Lời: Dương Xuân Linh)", color: "#7c3aed" },
      { title: "LÍ THUYẾT & ĐỌC NHẠC", desc: "Nhịp lấy đà & Bài đọc nhạc số 1 (Nhạc Đức)", color: "#4f46e5" },
      { title: "THƯỜNG THỨC", desc: "Nhạc sĩ Trịnh Công Sơn & Tuổi đời mênh mông", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Khai trường",
        credit: "Nhạc: Quỳnh Hợp &bull; Lời thơ: Dương Xuân Linh",
        details: [
          "<strong>Tính chất:</strong> Vui tươi, hồn nhiên, rộn ràng; diễn tả niềm hân hoan, náo nức ngày tựu trường gặp lại thầy cô, bạn bè của lứa tuổi học trò.",
          "<strong>Cấu trúc:</strong> Bài hát gồm 2 đoạn rõ rệt:",
          "&bull; <em>Đoạn 1:</em> Từ đầu đến 'như đi xa về nhà' (âm điệu nhịp nhàng, diễn tả bước chân rộn rã trên đường tới trường).",
          "&bull; <em>Đoạn 2:</em> Từ 'Khăn đỏ tung trong gió' đến hết (âm vực mở rộng, giai điệu ngân vang tươi sáng thể hiện ước mơ bay cao)."
        ]
      },
      {
        type: "lythuyet",
        badge: "Lí thuyết âm nhạc",
        badgeColor: "bg-indigo-600",
        title: "Nhịp lấy đà (Anacrusis / Auftakt)",
        details: [
          "<strong>Khái niệm:</strong> Nhịp lấy đà là ô nhịp đầu tiên trong bài hát hoặc bản nhạc không đủ số phách theo quy định của chỉ số nhịp.",
          "<strong>Đặc điểm nhận biết:</strong>",
          "&bull; Ô nhịp mở đầu thiếu phách (chỉ có phách nhẹ hoặc phần sau của phách).",
          "&bull; Những tác phẩm mở đầu bằng nhịp lấy đà thường kết thúc bằng một ô nhịp không đầy đủ để bổ sung phách cho nhịp lấy đà (tổng số phách của ô nhịp đầu và ô nhịp cuối sẽ bằng một ô nhịp hoàn chỉnh theo số chỉ nhịp)."
        ]
      },
      {
        type: "docnhac",
        badge: "Đọc nhạc",
        badgeColor: "bg-blue-600",
        title: "Bài đọc nhạc số 1",
        credit: "Nhạc Đức",
        details: [
          "Viết ở giọng <strong>Đô trưởng</strong>, nhịp <strong>2/4</strong>, giai điệu vừa phải, nhịp nhàng.",
          "<strong>Yêu cầu luyện tập:</strong> Luyện đọc chuẩn cao độ thang âm Đô trưởng (Đồ - Rê - Mi - Pha - Son - La - Si - Đố), các bước nhảy quãng 3 và kết hợp chính xác các hình nốt: móc đơn, nốt đen, nốt trắng."
        ]
      },
      {
        type: "thuongthuc",
        badge: "Thường thức âm nhạc",
        badgeColor: "bg-teal-600",
        title: "Nhạc sĩ Trịnh Công Sơn và ca khúc 'Tuổi đời mênh mông'",
        details: [
          "<strong>Nhạc sĩ Trịnh Công Sơn (1939 – 2001):</strong> Quê gốc ở Thừa Thiên Huế (nay là TP. Huế), sinh sống nhiều năm tại TP. Hồ Chí Minh. Ông là một trong những nhạc sĩ lớn nhất của tân nhạc Việt Nam, sáng tác hơn 600 ca khúc đậm chất trữ tình, nhân văn và giàu tính triết lí.",
          "<strong>Tác phẩm tiêu biểu:</strong> <em>Nhớ mùa thu Hà Nội, Nối vòng tay lớn, Huyền thoại mẹ, Em là bông hồng nhỏ, Hạ trắng, Diễm xưa,...</em>",
          "<strong>Ca khúc Tuổi đời mênh mông:</strong> Giai điệu thiết tha, trong sáng, ngợi ca vẻ đẹp bình dị của thiên nhiên, tình yêu quê hương đất nước gắn liền với ước mơ và khát vọng vươn xa của tuổi học trò."
        ]
      }
    ],
    quizzes: [
      {
        q: "Thế nào là nhịp lấy đà trong âm nhạc?",
        opts: ["Ô nhịp đầu tiên không đủ số phách theo quy định của số chỉ nhịp", "Ô nhịp có tốc độ nhanh gấp đôi bình thường", "Ô nhịp có chứa nhiều dấu lặng nhất", "Ô nhịp cuối cùng của bài hát"],
        ans: 0,
        explain: "Nhịp lấy đà là ô nhịp mở đầu thiếu phách, phách mạnh đầu tiên sẽ rơi vào ô nhịp tiếp theo."
      },
      {
        q: "Ca khúc thiếu nhi nổi tiếng nào sau đây là sáng tác của nhạc sĩ Trịnh Công Sơn?",
        opts: ["Em là bông hồng nhỏ", "Đi học", "Bụi phấn", "Khi tóc thầy bạc trắng"],
        ans: 0,
        explain: "Nhạc sĩ Trịnh Công Sơn là tác giả của các ca khúc thiếu nhi kinh điển như 'Em là bông hồng nhỏ', 'Tuổi đời mênh mông', 'Mẹ đi vắng'..."
      }
    ]
  },
  {
    num: 2,
    id: "chu-de-2",
    term: "Học kì 1",
    termTag: "HK1",
    title: "Môi trường xanh",
    subtitle: "Chung tay bảo vệ màu xanh sự sống, kiệt tác Alouette, nhạc cụ và Nhạc sĩ Hoàng Việt",
    svgNodes: [
      { title: "BÀI HÁT & NGHE NHẠC", desc: "Vì cuộc sống tươi đẹp & Tác phẩm Alouette (Paul Mauriat)", color: "#7c3aed" },
      { title: "NHẠC CỤ", desc: "Recorder (Đô 2, Rê 2) & Kèn phím (Bài hát Ireland)", color: "#4f46e5" },
      { title: "THƯỜNG THỨC", desc: "Nhạc sĩ Hoàng Việt & Ca khúc Nhạc rừng (1953)", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Vì cuộc sống tươi đẹp",
        credit: "Nhạc: Bùi Anh Tú &bull; Lời thơ: Nguyễn Trọng Hoàn",
        details: [
          "<strong>Tính chất:</strong> Sôi nổi, rộn ràng, giàu tính hành động.",
          "<strong>Ý nghĩa:</strong> Truyền tải thông điệp mạnh mẽ kêu gọi mọi người cùng chung tay giữ gìn màu xanh của rừng cây, bảo vệ nguồn nước sạch và môi trường sinh thái để sự sống trên Trái Đất mãi tươi đẹp."
        ]
      },
      {
        type: "nghenhac",
        badge: "Nghe nhạc",
        badgeColor: "bg-emerald-600",
        title: "Tác phẩm Alouette (Tiếng chim sơn ca)",
        credit: "Nhạc sĩ Ariel Ramírez (Argentina) &bull; Dàn dựng: Paul Mauriat",
        details: [
          "Nguyên tác là khúc ca <em>La peregrinación</em> trích trong vở cantata dân gian của nhạc sĩ Argentina Ariel Ramírez.",
          "Năm 1968, nhạc trưởng lừng danh người Pháp <strong>Paul Mauriat</strong> đã chuyển soạn cho dàn nhạc thính phòng theo phong cách bán cổ điển (kết hợp đàn dây giao hưởng với nhạc cụ điện tử và trống jazz hiện đại).",
          "Tác phẩm nổi tiếng toàn cầu và được chọn làm bản nhạc nền bất hủ của chương trình truyền hình <em>Thế giới động vật</em>."
        ]
      },
      {
        type: "nhaccu",
        badge: "Nhạc cụ",
        badgeColor: "bg-amber-600",
        title: "Thực hành Recorder & Kèn phím",
        details: [
          "<strong>Recorder:</strong> Ôn tập thế bấm các nốt cao Đô 2 (ngón cái bịt lỗ 0, ngón giữa bịt lỗ 2) và Rê 2 (chỉ bịt lỗ 2, mở lỗ ngón cái); luyện tập trích đoạn <em>Hướng tới niềm vui</em> (chủ đề trong Giao hưởng số 9 của Ludwig van Beethoven).",
          "<strong>Kèn phím (Melodica):</strong> Luyện ngón theo gam Đô trưởng, thực hành diễn tấu giai điệu <em>Bài hát Ireland</em> với nhịp điệu uyển chuyển."
        ]
      },
      {
        type: "thuongthuc",
        badge: "Thường thức âm nhạc",
        badgeColor: "bg-teal-600",
        title: "Nhạc sĩ Hoàng Việt và ca khúc 'Nhạc rừng'",
        details: [
          "<strong>Nhạc sĩ Hoàng Việt (1928 – 1967):</strong> Tên thật là Lê Chí Trực, quê ở Cái Bè (Tiền Giang, nay thuộc tỉnh Tiền Giang/Đồng Tháp). Ông là tác giả của bản giao hưởng <em>Quê hương</em> – bản giao hưởng nhiều chương đầu tiên của nền âm nhạc hàn lâm Việt Nam. Các ca khúc bất hủ: <em>Lên ngàn, Lá xanh, Tình ca,...</em> Ông được Đảng và Nhà nước truy tặng Giải thưởng Hồ Chí Minh về Văn học – Nghệ thuật (1996).",
          "<strong>Ca khúc Nhạc rừng (1953):</strong> Sáng tác tại chiến khu miền Đông Nam Bộ trong kháng chiến chống Pháp. Bài hát viết ở nhịp <strong>3/4</strong>, giai điệu trong sáng, bay bổng, mô phỏng tiếng chim hót véo von, tiếng suối reo hòa cùng tiếng cười của các chiến sĩ trẻ đầy lạc quan yêu đời."
        ]
      }
    ],
    quizzes: [
      {
        q: "Bản giao hưởng nhiều chương đầu tiên của nền âm nhạc Việt Nam mang tên 'Quê hương' là tác phẩm của nhạc sĩ nào?",
        opts: ["Nhạc sĩ Hoàng Việt", "Nhạc sĩ Trịnh Công Sơn", "Nhạc sĩ Văn Cao", "Nhạc sĩ Đỗ Nhuận"],
        ans: 0,
        explain: "Nhạc sĩ Hoàng Việt là tác giả bản giao hưởng 'Quê hương' gồm 4 chương sáng tác năm 1960."
      },
      {
        q: "Ca khúc 'Nhạc rừng' của nhạc sĩ Hoàng Việt được viết ở nhịp mấy?",
        opts: ["Nhịp 3/4", "Nhịp 2/4", "Nhịp 4/4", "Nhịp 6/8"],
        ans: 0,
        explain: "Ca khúc 'Nhạc rừng' được viết ở nhịp 3/4 với tiết tấu valse uyển chuyển, tươi vui."
      }
    ]
  },
  {
    num: 3,
    id: "chu-de-3",
    term: "Học kì 1",
    termTag: "HK1",
    title: "Thầy cô và mái trường",
    subtitle: "Tri ân thầy cô giáo, dấu nhắc lại, dấu quay lại %, khung thay đổi và các thể loại ca khúc",
    svgNodes: [
      { title: "BÀI HÁT", desc: "Nhớ ơn thầy cô (Nhạc & lời: Nguyễn Ngọc Thiện)", color: "#7c3aed" },
      { title: "LÍ THUYẾT & ĐỌC NHẠC", desc: "Dấu nhắc lại, Dấu quay lại %, Khung thay đổi 1-2 & BĐN số 2", color: "#4f46e5" },
      { title: "THƯỜNG THỨC", desc: "Giới thiệu 4 thể loại ca khúc (Hành khúc, Trữ tình, Ru, Nghi lễ)", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Nhớ ơn thầy cô",
        credit: "Nhạc và lời: Nguyễn Ngọc Thiện",
        details: [
          "<strong>Tính chất:</strong> Vui tươi, tha thiết, xúc động và dạt dào tình cảm.",
          "<strong>Nội dung:</strong> Bày tỏ tấm lòng tri ân sâu sắc, niềm bồi hồi nhớ thương của các thế hệ học trò khi trở về thăm lại mái trường thân yêu và những người thầy, người cô đã tận tụy dìu dắt bao tháng ngày."
        ]
      },
      {
        type: "lythuyet",
        badge: "Lí thuyết âm nhạc",
        badgeColor: "bg-indigo-600",
        title: "Dấu nhắc lại, Dấu quay lại và Khung thay đổi",
        details: [
          "<strong>Dấu nhắc lại (hai dấu chấm cạnh vạch đôi):</strong> Dùng để đánh dấu một câu nhạc hoặc một đoạn nhạc cần được diễn tấu lặp lại một lần nữa.",
          "<strong>Dấu quay lại (% - Segno):</strong> Dùng để chuyển quay về trình bày lại từ vị trí có kí hiệu tương ứng đối với đoạn nhạc dài hoặc toàn bộ bài hát (thường kết hợp với chữ <em>Al Segno</em> hoặc <em>Dal Segno</em>).",
          "<strong>Khung thay đổi:</strong> Đặt phía trên khuông nhạc (ô nhịp khung 1 và khung 2) tại vị trí nhắc lại. Khi diễn tấu lần thứ nhất, thực hiện ô nhịp trong khung 1; khi nhắc lại ở lần thứ hai, người biểu diễn sẽ bỏ qua khung 1 và nhảy thẳng sang diễn tấu khung 2."
        ]
      },
      {
        type: "docnhac",
        badge: "Đọc nhạc",
        badgeColor: "bg-blue-600",
        title: "Bài đọc nhạc số 2",
        credit: "Nhạc: Hoàng Long",
        details: [
          "Viết ở nhịp <strong>2/4</strong>, nhịp độ vừa phải, giai điệu tươi sáng.",
          "<strong>Ứng dụng nhạc lý:</strong> Bài tập thực hành trực tiếp việc chuyển tiếp qua dấu nhắc lại và chuyển đổi chính xác giữa khung thay đổi 1 và khung thay đổi 2."
        ]
      },
      {
        type: "thuongthuc",
        badge: "Thường thức âm nhạc",
        badgeColor: "bg-teal-600",
        title: "Giới thiệu một số thể loại ca khúc phổ biến",
        details: [
          "<strong>1. Ca khúc hành khúc:</strong> Nhịp độ vừa phải hoặc hơi nhanh, tiết tấu rõ ràng, thôi thúc, phù hợp với bước chân diễu hành; tính chất hào hùng, khoẻ khoắn (Ví dụ: <em>Hành khúc Đội thiếu niên tiền phong, Tiến bước dưới quân kì, Năm anh em trên một chiếc xe tăng</em>).",
          "<strong>2. Ca khúc trữ tình:</strong> Giai điệu mượt mà, giàu cảm xúc, tha thiết, êm dịu; thường ca ngợi tình yêu quê hương đất nước, tình thầy trò, bè bạn (Ví dụ: <em>Việt Nam quê hương tôi, Tình ca, Cho con</em>).",
          "<strong>3. Ca khúc hát ru:</strong> Âm điệu nhẹ nhàng, đằm thắm, ngân nga; lời ca thường nói về tình mẫu tử thiêng liêng và ước mơ cho con (Ví dụ: <em>Mẹ yêu con, Lời ru trên nương, Ru con mùa đông</em>).",
          "<strong>4. Ca khúc nghi lễ, nghi thức:</strong> Tính chất trang nghiêm, tôn kính, sử dụng trong các nghi lễ lớn, lễ chào cờ của đất nước và đoàn thể (Ví dụ: <em>Quốc ca Việt Nam, Đội ca, Thanh niên làm theo lời Bác</em>)."
        ]
      }
    ],
    quizzes: [
      {
        q: "Kí hiệu âm nhạc nào sau đây dùng để yêu cầu bỏ qua ô nhịp ở lần diễn tấu thứ hai?",
        opts: ["Khung thay đổi 1 và 2", "Dấu nối", "Dấu chấm dôi", "Dấu hóa bất thường"],
        ans: 0,
        explain: "Khi nhắc lại ở lần thứ hai, người diễn tấu sẽ bỏ qua khung 1 để diễn tấu thẳng sang khung 2."
      },
      {
        q: "Bài hát 'Quốc ca Việt Nam' (Tiến quân ca) thuộc thể loại ca khúc nào?",
        opts: ["Ca khúc nghi lễ, nghi thức", "Ca khúc hát ru", "Ca khúc hoạt cảnh", "Ca khúc trữ tình dân gian"],
        ans: 0,
        explain: "Quốc ca là bài hát thiêng liêng thuộc thể loại ca khúc nghi lễ, nghi thức của quốc gia."
      }
    ]
  },
  {
    num: 4,
    id: "chu-de-4",
    term: "Học kì 1",
    termTag: "HK1",
    title: "Giai điệu quê hương",
    subtitle: "Dân ca các vùng miền Việt Nam, hát xướng - xô, Lí kéo chài và Bài đọc nhạc Inh lả ơi",
    svgNodes: [
      { title: "BÀI HÁT", desc: "Lí kéo chài (Dân ca Nam Bộ, Lời mới: Hoàng Lân)", color: "#7c3aed" },
      { title: "THƯỜNG THỨC", desc: "Dân ca các vùng miền: Bắc Bộ, Trung Bộ, Tây Nguyên, Nam Bộ", color: "#4f46e5" },
      { title: "ĐỌC NHẠC & NHẠC CỤ", desc: "BĐN số 3 - Inh lả ơi; Recorder (Mi 1) & Kèn phím", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Lí kéo chài",
        credit: "Dân ca Nam Bộ &bull; Đặt lời mới: Hoàng Lân",
        details: [
          "<strong>Đặc điểm nghệ thuật:</strong> Sử dụng hình thức <strong>hát xướng – xô</strong> đặc trưng của dân ca lao động sông nước phương Nam (một người lĩnh xướng đi đầu câu hát, cả tập thể đồng thanh hát 'xô' đáp lời).",
          "<strong>Không khí:</strong> Thể hiện nhịp sống khẩn trương, khỏe khoắn, tinh thần đoàn kết vượt sóng gió để đánh bắt tôm cá đầy thuyền."
        ]
      },
      {
        type: "thuongthuc",
        badge: "Thường thức âm nhạc",
        badgeColor: "bg-teal-600",
        title: "Dân ca một số vùng miền đặc sắc của Việt Nam",
        details: [
          "<strong>Dân ca miền núi phía Bắc (Thái, Tày, Nùng, H'Mông...):</strong> Giai điệu trong trẻo, mộc mạc, mô phỏng tiếng sáo, tiếng khèn gắn liền với núi rừng và đời sống nương rẫy (<em>Xoè hoa, Mưa rơi, Gà gáy</em>).",
          "<strong>Dân ca trung du và đồng bằng Bắc Bộ:</strong> Trữ tình, duyên dáng, thiết tha, mang hơi thở nền văn minh lúa nước sông Hồng (<em>Dân ca Quan họ Bắc Ninh, hát Xoan Phú Thọ, Trống quân, hát Đúm, đồng dao</em>).",
          "<strong>Dân ca Trung Bộ:</strong> Đa dạng theo dải đất duyên hải miền Trung, gắn liền với sông nước và lao động (<em>Đi cấy, các điệu Hò biển, điệu Lí, hát Ví, Giặm Nghệ Tĩnh</em>).",
          "<strong>Dân ca Tây Nguyên (Nam Trung Bộ):</strong> Lúc rộn rã, hùng tráng bên tiếng cồng chiêng lửa trại, khi lại tha thiết trữ tình (<em>Hát mừng, Ru em</em>).",
          "<strong>Dân ca Nam Bộ:</strong> Mang phong vị phóng khoáng, hào sảng của vùng châu thổ kênh rạch sông ngòi qua các điệu lí mộc mạc (<em>Hò Đồng Tháp, Lí con sáo, Lí cây bông</em>)."
        ]
      },
      {
        type: "docnhac",
        badge: "Đọc nhạc",
        badgeColor: "bg-blue-600",
        title: "Bài đọc nhạc số 3 – Inh lả ơi",
        credit: "Dân ca Thái &bull; Nhịp 2/4",
        details: [
          "Sử dụng thang <strong>5 âm (ngũ cung)</strong> truyền thống vùng cao Tây Bắc, viết ở nhịp <strong>2/4</strong>, giai điệu vui tươi, rộn rã đón xuân sang."
        ]
      },
      {
        type: "nhaccu",
        badge: "Nhạc cụ",
        badgeColor: "bg-amber-600",
        title: "Thực hành Recorder & Kèn phím",
        details: [
          "<strong>Recorder:</strong> Thực hành thế bấm nốt <strong>Mi 1</strong> (ngón tay cái bịt lỗ 0, tay trái bịt kín lỗ 1-2-3, tay phải bịt lỗ 4-5).",
          "<strong>Kèn phím:</strong> Thực hành thế bấm vị trí tay trên phím đàn và diễn tấu hoàn chỉnh giai điệu bài <em>Inh lả ơi</em>."
        ]
      }
    ],
    quizzes: [
      {
        q: "Hình thức biểu diễn nào đặc trưng trong bài dân ca 'Lí kéo chài'?",
        opts: ["Hát xướng – xô", "Hát bè đuổi", "Đơn ca không nhạc đệm", "Hát nói thính phòng"],
        ans: 0,
        explain: "Hình thức 'xướng - xô' là một người hát mở đầu (xướng) và tập thể cùng hòa giọng đáp lại (xô) tạo khí thế lao động hăng say."
      },
      {
        q: "Làn điệu 'Inh lả ơi' là bài dân ca của dân tộc nào ở vùng Tây Bắc?",
        opts: ["Dân tộc Thái", "Dân tộc Mường", "Dân tộc Ê-đê", "Dân tộc Chăm"],
        ans: 0,
        explain: "'Inh lả ơi' là bài dân ca quen thuộc, rộn ràng của đồng bào dân tộc Thái."
      }
    ]
  },
  {
    num: 5,
    id: "chu-de-5",
    term: "Học kì 2",
    termTag: "HK2",
    title: "Nhịp điệu mùa xuân",
    subtitle: "Rộn ràng ngày xuân, Cồng chiêng & Đàn T'rưng Tây Nguyên, các kí hiệu tăng trường độ",
    svgNodes: [
      { title: "BÀI HÁT & NGHE NHẠC", desc: "Mùa xuân ơi & Sông Đakrông mùa xuân về (Tố Hải)", color: "#7c3aed" },
      { title: "THƯỜNG THỨC", desc: "Cồng chiêng (UNESCO) & Đàn T'rưng Tây Nguyên", color: "#4f46e5" },
      { title: "LÍ THUYẾT & ĐỌC NHẠC", desc: "Dấu nối, Dấu chấm dôi, Dấu miễn nhịp & BĐN số 4", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Mùa xuân ơi",
        credit: "Nhạc và lời: Nguyễn Ngọc Thiện",
        details: [
          "<strong>Tính chất:</strong> Rộn ràng, tươi vui, mang ngập tràn sắc xuân ấm áp.",
          "<strong>Ý nghĩa:</strong> Khắc họa không khí đoàn viên sum họp của ngày Tết cổ truyền và gửi gắm những lời chúc an lành, thịnh vượng đến mọi gia đình."
        ]
      },
      {
        type: "nghenhac",
        badge: "Nghe nhạc",
        badgeColor: "bg-emerald-600",
        title: "Ca khúc Sông Đakrông mùa xuân về",
        credit: "Nhạc và lời: Tố Hải",
        details: [
          "Giai điệu tha thiết, hùng tráng, mang đậm âm hưởng và tinh thần kiên cường của đồng bào các dân tộc miền đất đỏ bazan Tây Nguyên trong công cuộc bảo vệ và xây dựng quê hương."
        ]
      },
      {
        type: "thuongthuc",
        badge: "Thường thức âm nhạc",
        badgeColor: "bg-teal-600",
        title: "Giới thiệu nhạc cụ dân tộc: Cồng chiêng và Đàn T'rưng",
        details: [
          "<strong>Cồng chiêng:</strong> Nhạc cụ tự thân vang thuộc bộ gõ bằng hợp kim đồng thau, hình tròn. Cồng có núm ở giữa, chiêng không có núm; đánh bằng dùi bọc vải hoặc nắm tay. Cồng chiêng là nhạc cụ thiêng gắn bó máu thịt với đời sống tâm linh, lễ hội; <em>Không gian văn hóa Cồng chiêng Tây Nguyên</em> được UNESCO vinh danh là <strong>Kiệt tác Di sản văn hoá phi vật thể đại diện của nhân loại (2005)</strong>.",
          "<strong>Đàn T'rưng:</strong> Nhạc cụ tự thân vang thuộc bộ gõ của các dân tộc Gia-rai, Ba-na. Đàn được cấu tạo từ các ống nứa/tre rỗng có kích thước dài ngắn khác nhau ghép thành dàn dốc hình cánh cung. Âm sắc đàn thánh thót, giòn giã, mô phỏng tiếng suối reo, thác đổ của đại ngàn."
        ]
      },
      {
        type: "lythuyet",
        badge: "Lí thuyết âm nhạc",
        badgeColor: "bg-indigo-600",
        title: "Các kí hiệu tăng trường độ",
        details: [
          "<strong>1. Dấu nối:</strong> Hình vòng cung liên kết hai hoặc nhiều nốt nhạc có <strong>cùng cao độ</strong>, có tác dụng cộng gộp trường độ của các nốt đó lại thành một âm thanh liền mạch duy nhất.",
          "<strong>2. Dấu chấm dôi:</strong> Là dấu chấm nhỏ đặt ngay bên phải nốt nhạc, làm tăng thêm <strong>một nửa giá trị trường độ</strong> của nốt đứng trước nó (Ví dụ: Nốt trắng chấm dôi = Nốt trắng + Nốt đen = 3 phách).",
          "<strong>3. Dấu miễn nhịp (Dấu ngân tự do - Fermata):</strong> Kí hiệu hình nửa vòng tròn có chấm ở giữa đặt trên hoặc dưới nốt nhạc/dấu lặng, cho phép người biểu diễn ngân dài hoặc nghỉ tự do tuỳ thuộc cảm xúc và sự chỉ huy."
        ]
      },
      {
        type: "docnhac",
        badge: "Đọc nhạc",
        badgeColor: "bg-blue-600",
        title: "Bài đọc nhạc số 4 – Mùa xuân trong rừng",
        credit: "Nhạc Ba Lan &bull; Đặt lời: Hoàng Long",
        details: [
          "Viết ở nhịp <strong>3/4</strong>, nhịp nhàng, có ứng dụng dấu nhắc lại, khung thay đổi, dấu nối và dấu miễn nhịp."
        ]
      }
    ],
    quizzes: [
      {
        q: "Dấu chấm dôi đặt bên phải một nốt nhạc có giá trị trường độ bằng bao nhiêu?",
        opts: ["Bằng một nửa giá trị của nốt đứng trước nó", "Bằng gấp đôi giá trị nốt đứng trước", "Bằng đúng 1 phách cố định", "Làm giảm một nửa trường độ"],
        ans: 0,
        explain: "Dấu chấm dôi tăng thêm 1/2 giá trị trường độ của nốt đứng trước nó (ví dụ nốt đen chấm dôi = 1 + 0.5 = 1.5 phách)."
      },
      {
        q: "Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là Di sản vào năm nào?",
        opts: ["Năm 2005", "Năm 2000", "Năm 2010", "Năm 2018"],
        ans: 0,
        explain: "Năm 2005, Không gian văn hoá Cồng chiêng Tây Nguyên được UNESCO công nhận là Kiệt tác Di sản phi vật thể của nhân loại."
      }
    ]
  },
  {
    num: 6,
    id: "chu-de-6",
    term: "Học kì 2",
    termTag: "HK2",
    title: "Âm nhạc nước ngoài",
    subtitle: "Khúc ca Santa Lucia, thuật ngữ Tempo & Dynamics, kĩ thuật Cello và Contrabass",
    svgNodes: [
      { title: "BÀI HÁT", desc: "Santa Lucia (Dân ca Ý, Lời dịch: Hồ Bắc, nhịp 3/4)", color: "#7c3aed" },
      { title: "LÍ THUYẾT & NHẠC CỤ", desc: "Thuật ngữ Tempo & Sắc thái Dynamics; Recorder Rê 1", color: "#4f46e5" },
      { title: "THƯỜNG THỨC", desc: "Bộ dây dàn nhạc giao hưởng: Đàn Cello & Contrabass", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Santa Lucia",
        credit: "Dân ca Ý &bull; Phỏng dịch: Hồ Bắc",
        details: [
          "Viết ở nhịp <strong>3/4</strong>, nhịp độ hơi chậm (<em>Andante</em>), giai điệu du dương, tha thiết.",
          "Khắc họa khung cảnh biển đêm trăng thanh bình, lãng mạn tại bến cảng Santa Lucia thuộc vùng vịnh Napoli xinh đẹp của miền Nam nước Ý."
        ]
      },
      {
        type: "lythuyet",
        badge: "Lí thuyết âm nhạc",
        badgeColor: "bg-indigo-600",
        title: "Thuật ngữ về nhịp độ (Tempo) và sắc thái cường độ (Dynamics)",
        details: [
          "<strong>1. Thuật ngữ nhịp độ (Tempo - Tốc độ bản nhạc):</strong>",
          "&bull; <em>Chậm:</em> <strong>Lento</strong> (rất chậm), <strong>Adagio</strong> (chậm chạp), <strong>Andante</strong> (hơi chậm, thong thả).",
          "&bull; <em>Vừa:</em> <strong>Andantino</strong> (nhanh hơn Andante), <strong>Moderato</strong> (vừa phải), <strong>Allegretto</strong> (hơi nhanh).",
          "&bull; <em>Nhanh:</em> <strong>Allegro</strong> (nhanh, tươi vui), <strong>Vivace</strong> (nhanh, hoạt bát), <strong>Presto</strong> (rất nhanh, hối hả).",
          "<strong>2. Sắc thái cường độ (Dynamics - Độ to nhỏ của âm thanh):</strong>",
          "&bull; <strong>p (piano):</strong> Nhỏ, khẽ khàng.",
          "&bull; <strong>mp (mezzo piano):</strong> Nhỏ vừa, vừa phải.",
          "&bull; <strong>mf (mezzo forte):</strong> Hơi to, mạnh vừa.",
          "&bull; <strong>f (forte):</strong> To, mạnh mẽ.",
          "&bull; <strong>Dấu < (crescendo):</strong> To dần lên &bull; <strong>Dấu > (decrescendo / diminuendo):</strong> Nhỏ dần đi.",
          "&bull; <strong>Dấu > trên/dưới nốt (Accent):</strong> Nhấn mạnh riêng biệt nốt nhạc đó."
        ]
      },
      {
        type: "nhaccu",
        badge: "Nhạc cụ",
        badgeColor: "bg-amber-600",
        title: "Thực hành Recorder & Kèn phím",
        details: [
          "<strong>Recorder:</strong> Thực hành thế bấm nốt <strong>Rê 1</strong> (bịt kín 7 lỗ ngón tay từ 0 đến 6); luyện tập trích đoạn dân ca nổi tiếng <em>Five hundred miles</em>.",
          "<strong>Kèn phím:</strong> Thực hành kĩ thuật luyến âm (Legato) qua bản nhạc luyện ngón <em>Cầu trượt</em>."
        ]
      },
      {
        type: "thuongthuc",
        badge: "Thường thức âm nhạc",
        badgeColor: "bg-teal-600",
        title: "Giới thiệu đàn Cello và đàn Contrabass",
        details: [
          "Cả hai nhạc cụ đều thuộc <strong>bộ dây vĩ</strong> của dàn nhạc giao hưởng, sử dụng cây vĩ (archet) có căng lông đuôi ngựa kéo ngang dây đàn để phát ra âm thanh.",
          "<strong>Cello (Violoncelle / Trung hồ cầm):</strong> Kích thước lớn hơn violin, nghệ sĩ khi chơi phải ngồi trên ghế và kẹp đàn giữa hai đầu gối; âm sắc ấm áp, đượm buồn, truyền cảm và rất gần với giọng hát nam trung.",
          "<strong>Contrabass (Double bass / Đại hồ cầm):</strong> Cây đàn có kích thước đồ sộ nhất và âm vực trầm nhất trong họ đàn dây. Nghệ sĩ phải đứng hoặc ngồi trên ghế cao để chơi; giữ vai trò cột trụ bè trầm vững chắc cho toàn bộ dàn nhạc giao hưởng."
        ]
      }
    ],
    quizzes: [
      {
        q: "Thuật ngữ âm nhạc nào chỉ sắc thái 'nhỏ, khẽ khàng' trong bản nhạc?",
        opts: ["p (piano)", "f (forte)", "mf (mezzo forte)", "Allegro"],
        ans: 0,
        explain: "Chữ cái 'p' là viết tắt của tiếng Ý 'piano', nghĩa là hát hoặc diễn tấu nhỏ nhẹ."
      },
      {
        q: "Nhạc cụ nào có kích thước lớn nhất và âm vực trầm nhất trong bộ dây vĩ của dàn nhạc giao hưởng?",
        opts: ["Đàn Contrabass", "Đàn Cello", "Đàn Viola", "Đàn Violin"],
        ans: 0,
        explain: "Contrabass (Double bass) là cây đàn khổng lồ nhất họ đàn dây, đảm nhiệm bè trầm sâu thẳm."
      }
    ]
  },
  {
    num: 7,
    id: "chu-de-7",
    term: "Học kì 2",
    termTag: "HK2",
    title: "Cuộc sống tươi đẹp",
    subtitle: "Đời cho em những nốt nhạc vui, kiệt tác Chèo thuyền của Tchaikovsky, BĐN số 5",
    svgNodes: [
      { title: "BÀI HÁT", desc: "Đời cho em những nốt nhạc vui (Nhạc & lời: Tường Vy)", color: "#7c3aed" },
      { title: "THƯỜNG THỨC", desc: "P. I. Tchaikovsky & Khúc nhạc Chèo thuyền (Barcarolle)", color: "#4f46e5" },
      { title: "ĐỌC NHẠC", desc: "Bài đọc nhạc số 5 (Dân ca Ukraina, nhịp 2/4, có Si giáng)", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Đời cho em những nốt nhạc vui",
        credit: "Nhạc và lời: Tường Vy",
        details: [
          "<strong>Tính chất:</strong> Tươi sáng, hơi nhanh, sôi nổi, ngập tràn sức sống.",
          "<strong>Nội dung:</strong> Diễn tả niềm vui sướng, tình yêu đời hồn nhiên và tấm lòng biết ơn cuộc đời, công ơn thầy cô, cha mẹ đã cho em những giai điệu âm nhạc tuyệt diệu để chắp cánh ước mơ."
        ]
      },
      {
        type: "thuongthuc",
        badge: "Thường thức âm nhạc",
        badgeColor: "bg-teal-600",
        title: "Nhạc sĩ Pyotr Ilyich Tchaikovsky và khúc nhạc 'Chèo thuyền'",
        details: [
          "<strong>P. I. Tchaikovsky (1840 – 1893):</strong> Đại diện kiệt xuất của nền âm nhạc cổ điển Nga thế kỉ XIX. Di sản âm nhạc đồ sộ gồm: 6 bản giao hưởng lừng danh, nhạc kịch <em>Evgeny Onegin</em>, và các vở vũ kịch kinh điển bất hủ của nhân loại: <em>Hồ thiên nga, Người đẹp ngủ trong rừng, Kẹp hạt dẻ,...</em>",
          "<strong>Khúc nhạc Chèo thuyền (Barcarolle):</strong> Trích từ tổ khúc piano nổi tiếng <em>Bốn mùa (The Seasons)</em> gồm 12 khúc nhạc tượng trưng cho 12 tháng trong năm. Khúc nhạc viết về tháng sáu, giai điệu êm ả, thơ mộng, gợi tả nhịp chèo nhẹ nhàng khua nước trên dòng sông Nga êm đềm trong chiều hè thanh vắng."
        ]
      },
      {
        type: "docnhac",
        badge: "Đọc nhạc",
        badgeColor: "bg-blue-600",
        title: "Bài đọc nhạc số 5",
        credit: "Dân ca Ukraina &bull; Nhịp 2/4",
        details: [
          "Viết ở nhịp <strong>2/4</strong>, tốc độ vừa phải (<em>Moderato</em>).",
          "<strong>Đặc điểm cao độ:</strong> Thang âm có xuất hiện nốt <strong>Si giáng (B♭)</strong> – dấu hóa bất thường giúp mở rộng màu sắc âm thanh đượm chất dân ca Đông Âu trữ tình."
        ]
      }
    ],
    quizzes: [
      {
        q: "Tổ khúc piano 'Bốn mùa' miêu tả 12 tháng trong năm là tác phẩm của nhạc sĩ nào?",
        opts: ["P. I. Tchaikovsky", "L. v. Beethoven", "W. A. Mozart", "J. S. Bach"],
        ans: 0,
        explain: "P. I. Tchaikovsky là tác giả của tổ khúc 'Bốn mùa' (The Seasons, Op. 37a)."
      },
      {
        q: "Khúc nhạc 'Chèo thuyền' (Barcarolle) của Tchaikovsky được viết tượng trưng cho tháng mấy trong năm?",
        opts: ["Tháng Sáu", "Tháng Giêng", "Tháng Mười", "Tháng Mười Hai"],
        ans: 0,
        explain: "Khúc nhạc 'Chèo thuyền' (Barcarolle) là bản nhạc số 6 trong tổ khúc Bốn mùa, viết về tháng Sáu mùa hè."
      }
    ]
  },
  {
    num: 8,
    id: "chu-de-8",
    term: "Học kì 2",
    termTag: "HK2",
    title: "Mùa hè của em",
    subtitle: "Khúc ca Mưa hè rộn rã, hợp xướng Hè về của Hùng Lân, hòa tấu nhạc cụ và tổng kết",
    svgNodes: [
      { title: "BÀI HÁT", desc: "Mưa hè (Nhạc & lời: Lê Quốc Thắng, nhịp điệu trẻ trung)", color: "#7c3aed" },
      { title: "NGHE NHẠC", desc: "Hè về (Hùng Lân) - Hợp xướng nhiều bè hoành tráng", color: "#4f46e5" },
      { title: "NHẠC CỤ", desc: "Hòa tấu Recorder & Kèn phím đệm điệp khúc Mưa hè", color: "#059669" }
    ],
    sections: [
      {
        type: "hat",
        badge: "Hát",
        badgeColor: "bg-purple-600",
        title: "Bài hát Mưa hè",
        credit: "Nhạc và lời: Lê Quốc Thắng",
        details: [
          "<strong>Tính chất:</strong> Trẻ trung, tình cảm, giai điệu tươi tắn, trong sáng.",
          "<strong>Nội dung:</strong> Khắc họa những cơn mưa rào đầu hạ tưới mát cành phượng vĩ và gợi nhắc những kỉ niệm thân thương, bịn rịn của thời cắp sách tới trường trước kì nghỉ hè."
        ]
      },
      {
        type: "nghenhac",
        badge: "Nghe nhạc",
        badgeColor: "bg-emerald-600",
        title: "Bài hát Hè về (Trình diễn Hợp xướng)",
        credit: "Nhạc và lời: Hùng Lân",
        details: [
          "Tác phẩm âm nhạc kinh điển về mùa hè viết cho hình thức <strong>hợp xướng nhiều bè</strong>.",
          "Giai điệu tưng bừng, rực rỡ, phỏng thanh tiếng ve ngân và ánh nắng chói chang, truyền cảm hứng vui tươi, phấn khởi cho tuổi trẻ."
        ]
      },
      {
        type: "nhaccu",
        badge: "Nhạc cụ",
        badgeColor: "bg-amber-600",
        title: "Thực hành đệm Recorder & Kèn phím",
        details: [
          "Ứng dụng hòa tấu nhạc cụ: Sử dụng recorder hoặc kèn phím thực hành đệm bè giai điệu trích đoạn điệp khúc bài hát <em>Mưa hè</em> kết hợp gõ đệm thanh phách nhịp nhàng."
        ]
      }
    ],
    quizzes: [
      {
        q: "Bài hát 'Hè về' của nhạc sĩ Hùng Lân được trình diễn dưới hình thức âm nhạc nào?",
        opts: ["Hợp xướng nhiều bè", "Đơn ca không nhạc đệm", "Hát ru truyền thống", "Độc tấu kèn đồng"],
        ans: 0,
        explain: "Bài hát 'Hè về' được biên soạn và trình diễn theo thể loại hợp xướng nhiều bè hoành tráng."
      },
      {
        q: "Ca khúc 'Mưa hè' là sáng tác của nhạc sĩ nào?",
        opts: ["Nhạc sĩ Lê Quốc Thắng", "Nhạc sĩ Hoàng Long", "Nhạc sĩ Quỳnh Hợp", "Nhạc sĩ Tường Vy"],
        ans: 0,
        explain: "Nhạc sĩ Lê Quốc Thắng là tác giả của ca khúc tuổi học trò nổi tiếng 'Mưa hè'."
      }
    ]
  }
];

// Glossary of Terms (Trang 67)
const termsData = [
  {
    name: "Hợp xướng (Choir / Chorus)",
    icon: "fa-users-line",
    desc: "Thể loại nhạc hát gồm nhiều giọng bè khác nhau cùng hòa tấu giọng, mỗi bè do một nhóm ca sĩ đảm nhiệm (như hợp xướng nam, hợp xướng nữ, hợp xướng thiếu nhi hoặc hợp xướng hỗn hợp 4 bè Soprano - Alto - Tenor - Bass). Hợp xướng có thể biểu diễn cùng dàn nhạc đệm hoặc hát không có nhạc đệm (A cappella)."
  },
  {
    name: "Làn điệu (Folk Melody / Tune)",
    icon: "fa-water",
    desc: "Thuật ngữ âm nhạc truyền thống chỉ những bài dân ca, điệu hát chèo, hát tuồng tuy có tên bài và lời ca thơ khác nhau nhưng lại mang chung một cấu trúc giai điệu, phong cách và tính chất âm nhạc đặc trưng của một vùng miền (Ví dụ: làn điệu Con gà gáy, làn điệu Lưu không...)."
  },
  {
    name: "Liên khúc (Medley / Potpourri)",
    icon: "fa-link",
    desc: "Thể loại âm nhạc kết hợp nối tiếp một số bài hát hoặc đoạn nhạc có nội dung độc lập với nhau nhưng cùng thống nhất hướng về một chủ đề chung (Ví dụ: Liên khúc các bài hát về ngày khai trường, Liên khúc ca ngợi quê hương đất nước)."
  },
  {
    name: "Nhạc kịch (Opera)",
    icon: "fa-masks-theater",
    desc: "Thể loại nghệ thuật sân khấu tổng hợp quy mô lớn xuất phát từ phương Tây (đặc biệt là nước Ý), kết hợp hoàn hảo giữa ca hát (hát đơn ca Aria, hát đối đáp Recitativo, hợp xướng), nghệ thuật diễn xuất kịch nghệ, phục trang sân khấu và phần đệm hoành tráng của toàn bộ dàn nhạc giao hưởng."
  },
  {
    name: "Vũ kịch (Ballet)",
    icon: "fa-shoe-prints",
    desc: "Thể loại kịch múa bác học không dùng lời thoại diễn xuất thông thường; toàn bộ cốt truyện, tính cách và cảm xúc của nhân vật được biểu đạt hoàn toàn thông qua ngôn ngữ nghệ thuật múa ba-lê điêu luyện kết hợp với âm nhạc giao hưởng (tiêu biểu như các vở vũ kịch Hồ thiên nga, Kẹp hạt dẻ của Tchaikovsky)."
  }
];

// 40 questions for Trang Nguyen Music 7 Competition
const examQuestions = [
  { q: "Ca khúc 'Khai trường' trong Chủ đề 1 do nhạc sĩ nào phổ nhạc?", opts: ["Quỳnh Hợp", "Nguyễn Ngọc Thiện", "Hoàng Việt", "Trịnh Công Sơn"], ans: 0 },
  { q: "Nhịp lấy đà là gì trong lí thuyết âm nhạc?", opts: ["Ô nhịp đầu tiên không đủ số phách quy định của số chỉ nhịp", "Ô nhịp có tốc độ nhanh nhất bài", "Ô nhịp cuối cùng của bài hát", "Ô nhịp có nhiều nốt lặng nhất"], ans: 0 },
  { q: "Bài đọc nhạc số 1 trong chương trình Âm nhạc 7 là giai điệu dân ca nước nào?", opts: ["Nhạc Đức", "Nhạc Ý", "Nhạc Pháp", "Nhạc Nga"], ans: 0 },
  { q: "Nhạc sĩ Trịnh Công Sơn quê gốc ở tỉnh/thành phố nào?", opts: ["Thừa Thiên Huế (TP. Huế)", "Hà Nội", "Quảng Nam", "TP. Hồ Chí Minh"], ans: 0 },
  { q: "Ca khúc 'Vì cuộc sống tươi đẹp' mang thông điệp cốt lõi gì?", opts: ["Chung tay bảo vệ môi trường và màu xanh sự sống", "Ca ngợi tình bạn tuổi học trò", "Tình yêu quê hương biển đảo", "Tri ân thầy cô giáo cũ"], ans: 0 },
  { q: "Bản nhạc hòa tấu bất hủ 'Alouette' (Tiếng chim sơn ca) nổi tiếng thế giới qua bản chuyển soạn của nhạc trưởng nào?", opts: ["Paul Mauriat", "Ludwig van Beethoven", "Richard Clayderman", "Johann Strauss"], ans: 0 },
  { q: "Để thổi nốt Đô 2 trên kèn Recorder, ngón tay cần bịt lỗ nào?", opts: ["Ngón cái bịt lỗ 0 và ngón giữa bịt lỗ 2", "Bịt kín tất cả các lỗ", "Mở toàn bộ các lỗ ngón tay", "Chỉ bịt lỗ ngón út"], ans: 0 },
  { q: "Bản giao hưởng nhiều chương đầu tiên của nền âm nhạc Việt Nam có tên là gì?", opts: ["Quê hương (Hoàng Việt)", "Đồng khởi (Nguyễn Văn Thương)", "Mẹ Việt Nam", "Điện Biên Phủ"], ans: 0 },
  { q: "Ca khúc 'Nhạc rừng' nổi tiếng của nhạc sĩ Hoàng Việt được sáng tác vào năm nào?", opts: ["Năm 1953", "Năm 1945", "Năm 1975", "Năm 1986"], ans: 0 },
  { q: "Bài hát 'Nhớ ơn thầy cô' là sáng tác của nhạc sĩ nào?", opts: ["Nguyễn Ngọc Thiện", "Hoàng Lân", "Bùi Anh Tú", "Hùng Lân"], ans: 0 },
  { q: "Kí hiệu hai dấu chấm đặt cạnh vạch nhịp đôi trong khuông nhạc gọi là gì?", opts: ["Dấu nhắc lại", "Dấu nối", "Dấu lặng", "Dấu hồi"], ans: 0 },
  { q: "Kí hiệu '%' (Segno) trong bản nhạc dùng để làm gì?", opts: ["Dấu quay lại", "Dấu kết thúc bài hát", "Dấu ngân tự do", "Dấu tăng cường độ"], ans: 0 },
  { q: "Khi diễn tấu bài hát có khung thay đổi 1 và 2, ở lần nhắc lại thứ hai ta phải:", opts: ["Bỏ qua khung 1 và diễn tấu thẳng sang khung 2", "Lặp lại khung 1 hai lần rồi dừng", "Chơi cả khung 1 lẫn khung 2", "Bỏ qua cả hai khung"], ans: 0 },
  { q: "Ca khúc có tính chất hào hùng, khỏe khoắn, phù hợp với bước đi diễu hành thuộc thể loại nào?", opts: ["Ca khúc hành khúc", "Ca khúc trữ tình", "Ca khúc hát ru", "Ca khúc nghi lễ"], ans: 0 },
  { q: "Bài hát 'Tiến bước dưới quân kì' thuộc thể loại ca khúc nào?", opts: ["Ca khúc hành khúc", "Ca khúc hát ru", "Ca khúc hài hước", "Ca khúc trữ tình đồng quê"], ans: 0 },
  { q: "Hình thức biểu diễn dân gian độc đáo trong bài 'Lí kéo chài' là:", opts: ["Hát xướng – xô", "Hát nói cổ nhạc", "Hát bè đuổi", "Đơn ca thính phòng"], ans: 0 },
  { q: "Bài dân ca Thái nổi tiếng 'Inh lả ơi' được xây dựng trên thang âm nào?", opts: ["Thang 5 âm (ngũ cung)", "Thang 7 âm phương Tây", "Thang âm nửa cung", "Thang âm Si giáng"], ans: 0 },
  { q: "Để bấm nốt Mi 1 trên Recorder, học sinh cần bịt kín các lỗ ngón tay nào?", opts: ["Lỗ 0 đến lỗ 5", "Chỉ bịt lỗ 0 và 1", "Bịt tất cả từ lỗ 0 đến lỗ 7", "Mở toàn bộ"], ans: 0 },
  { q: "Bài hát mùa xuân kinh điển 'Mùa xuân ơi' có câu mở đầu là:", opts: ["Xuân xuân ơi xuân đã về", "Mùa xuân nho nhỏ", "Lắng nghe mùa xuân về", "Hoa đào nở rộ đón xuân"], ans: 0 },
  { q: "Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là Di sản vào năm nào?", opts: ["Năm 2005", "Năm 2000", "Năm 2015", "Năm 1993"], ans: 0 },
  { q: "Đàn T'rưng của các dân tộc Tây Nguyên được làm từ nguyên liệu gì?", opts: ["Các ống tre, nứa rỗng", "Đồng thau", "Gỗ mít và dây tơ", "Kim loại inox"], ans: 0 },
  { q: "Kí hiệu vòng cung liên kết hai nốt nhạc có CÙNG cao độ gọi là gì?", opts: ["Dấu nối", "Dấu luyến", "Dấu chấm dôi", "Dấu miễn nhịp"], ans: 0 },
  { q: "Dấu chấm dôi làm tăng thêm bao nhiêu giá trị trường độ của nốt đứng trước nó?", opts: ["Một nửa giá trị trường độ", "Gấp đôi trường độ", "Một phần tư trường độ", "Ba phách"], ans: 0 },
  { q: "Dấu miễn nhịp (Fermata) cho phép người biểu diễn:", opts: ["Ngân dài hoặc nghỉ tự do tuỳ cảm xúc", "Chơi nốt nhạc nhanh hơn", "Chuyển giọng ngay lập tức", "Lặp lại bài hát"], ans: 0 },
  { q: "Ca khúc 'Santa Lucia' là bài dân ca nổi tiếng của quốc gia nào?", opts: ["Nước Ý (Italia)", "Nước Pháp", "Nước Nga", "Nước Đức"], ans: 0 },
  { q: "Thuật ngữ nhịp độ 'Andante' trong âm nhạc có nghĩa là:", opts: ["Hơi chậm, thong thả", "Rất nhanh", "Hối hả", "Rất chậm chạp"], ans: 0 },
  { q: "Thuật ngữ nhịp độ nào sau đây chỉ tốc độ 'rất nhanh, hối hả'?", opts: ["Presto", "Lento", "Adagio", "Moderato"], ans: 0 },
  { q: "Kí hiệu sắc thái 'f' (forte) trong bản nhạc chỉ dẫn diễn tấu như thế nào?", opts: ["To, mạnh", "Nhỏ, khẽ", "Nhỏ vừa", "Mạnh vừa"], ans: 0 },
  { q: "Kí hiệu dấu '<' (crescendo) yêu cầu người biểu diễn:", opts: ["Hát hoặc chơi nhạc to dần lên", "Nhỏ dần đi", "Dừng lại đột ngột", "Hát ngắt giọng"], ans: 0 },
  { q: "Đàn Cello (Violoncelle) thuộc bộ nhạc cụ nào trong dàn nhạc giao hưởng?", opts: ["Bộ dây vĩ", "Bộ hơi kim loại", "Bộ gõ", "Bộ phím"], ans: 0 },
  { q: "Cây đàn nào giữ vai trò nền tảng bè trầm sâu nhất trong bộ dây giao hưởng?", opts: ["Contrabass", "Violin", "Viola", "Cello"], ans: 0 },
  { q: "Bài hát 'Đời cho em những nốt nhạc vui' do nhạc sĩ nào sáng tác?", opts: ["Tường Vy", "Phạm Tuyên", "Hoàng Long", "Trịnh Công Sơn"], ans: 0 },
  { q: "Nhạc sĩ P. I. Tchaikovsky là đại diện lỗi lạc của nền âm nhạc nước nào?", opts: ["Nước Nga", "Nước Áo", "Nước Đức", "Nước Ba Lan"], ans: 0 },
  { q: "Vở vũ kịch nổi tiếng thế giới nào sau đây là kiệt tác của Tchaikovsky?", opts: ["Hồ thiên nga (Swan Lake)", "Carmen", "Cây sáo thần", "La Traviata"], ans: 0 },
  { q: "Khúc nhạc 'Chèo thuyền' (Barcarolle) của Tchaikovsky nằm trong tổ khúc piano nào?", opts: ["Bốn mùa (The Seasons)", "Romeo và Juliet", "Kẹp hạt dẻ", "Trẻ thơ"], ans: 0 },
  { q: "Bài đọc nhạc số 5 (Dân ca Ukraina) có xuất hiện dấu hóa bất thường nào?", opts: ["Nốt Si giáng (B♭)", "Nốt Fa thăng (F#)", "Nốt Đô thăng", "Nốt Son thăng"], ans: 0 },
  { q: "Ca khúc 'Hè về' của nhạc sĩ Hùng Lân được trình diễn theo thể loại nào?", opts: ["Hợp xướng nhiều bè", "Đơn ca nữ", "Song ca nam nữ", "Hát dân ca cải lương"], ans: 0 },
  { q: "Thể loại nhạc kịch tổng hợp giữa ca hát opera, diễn xuất kịch và dàn nhạc giao hưởng gọi là:", opts: ["Nhạc kịch (Opera)", "Vũ kịch (Ballet)", "Liên khúc", "Hợp xướng"], ans: 0 },
  { q: "Thể loại kịch diễn xuất hoàn toàn bằng nghệ thuật múa ba-lê và dàn nhạc mà không dùng lời thoại là:", opts: ["Vũ kịch (Ballet)", "Nhạc kịch (Opera)", "Kịch nói", "Hát chèo"], ans: 0 },
  { q: "Thể loại nhạc hát có nhiều bè giọng, có thể hát cùng dàn nhạc hoặc hát không nhạc đệm (A cappella) gọi là:", opts: ["Hợp xướng", "Làn điệu", "Liên khúc", "Hát đồng ca 1 bè"], ans: 0 }
];

// Helper to generate SVG Mindmap
function generateMindmapSvg(topic) {
  const n1 = topic.svgNodes[0];
  const n2 = topic.svgNodes[1];
  const n3 = topic.svgNodes[2];

  return `
    <svg viewBox="0 0 650 130" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g_${topic.id}_1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n1.color}"/>
          <stop offset="100%" stop-color="#4c1d95"/>
        </linearGradient>
        <linearGradient id="g_${topic.id}_2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n2.color}"/>
          <stop offset="100%" stop-color="#1e1b4b"/>
        </linearGradient>
        <linearGradient id="g_${topic.id}_3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n3.color}"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
      </defs>
      
      <!-- Node 1 -->
      <rect x="15" y="20" width="185" height="90" rx="12" fill="url(#g_${topic.id}_1)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="107" y="44" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">${n1.title}</text>
      <text x="107" y="64" fill="#ddd6fe" font-size="8.5" text-anchor="middle">${n1.desc.substring(0, 32)}</text>
      <text x="107" y="82" fill="#ede9fe" font-size="8" text-anchor="middle">${n1.desc.substring(32, 60) || "Giai điệu & Lời ca"}</text>

      <!-- Arrow 1 -->
      <path d="M 205 65 L 235 65" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="235,60 243,65 235,70" fill="#7c3aed"/>

      <!-- Node 2 -->
      <rect x="245" y="20" width="200" height="90" rx="12" fill="url(#g_${topic.id}_2)" stroke="${n2.color}" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="345" y="44" fill="#facc15" font-size="10.5" font-weight="bold" text-anchor="middle">${n2.title}</text>
      <text x="345" y="64" fill="#ffffff" font-size="8.5" text-anchor="middle">${n2.desc.substring(0, 33)}</text>
      <text x="345" y="82" fill="#cbd5e1" font-size="8" text-anchor="middle">${n2.desc.substring(33, 62) || "Kĩ năng thực hành"}</text>

      <!-- Arrow 2 -->
      <path d="M 450 65 L 480 65" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="480,60 488,65 480,70" fill="#7c3aed"/>

      <!-- Node 3 -->
      <rect x="490" y="20" width="145" height="90" rx="12" fill="url(#g_${topic.id}_3)" stroke="${n3.color}" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="562" y="44" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">${n3.title}</text>
      <text x="562" y="64" fill="#ffffff" font-size="8.5" text-anchor="middle">${n3.desc.substring(0, 24)}</text>
      <text x="562" y="82" fill="#a7f3d0" font-size="8" text-anchor="middle">${n3.desc.substring(24, 46) || "Cảm thụ âm nhạc"}</text>
    </svg>
  `;
}

// Render All Topics HTML
function renderTopics() {
  let quizGlobalIdx = 0;

  return topicsData.map(topic => {
    // Sections
    const sectionsHtml = topic.sections.map(sec => `
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/80 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white ${sec.badgeColor}">${sec.badge}</span>
            <h5 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">${sec.title}</h5>
          </div>
          ${sec.credit ? `<span class="text-[11px] text-gray-500 dark:text-gray-400 italic">${sec.credit}</span>` : ''}
        </div>
        <div class="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
          ${sec.details.map(d => `<p class="leading-relaxed">&bull; ${d}</p>`).join('')}
        </div>
      </div>
    `).join('');

    // Quizzes
    const quizzesHtml = topic.quizzes.map(q => {
      const qId = quizGlobalIdx++;
      return `
        <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-900/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question text-amber-500"></i> Câu hỏi củng cố Chủ đề ${topic.num}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Tự chấm điểm</span>
          </div>
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">${q.q}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="quiz-options-${qId}">
            ${q.opts.map((opt, oIdx) => `
              <button onclick="checkQuizAnswer(${qId}, ${oIdx}, ${q.ans}, '${q.explain.replace(/'/g, "\\'")}')" 
                      class="quiz-btn-${qId} text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-purple-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">${String.fromCharCode(65 + oIdx)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="quiz-feedback-${qId}" class="hidden p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    }).join('');

    const termBadgeColor = topic.termTag === 'HK1' ? 'bg-indigo-600' : 'bg-purple-600';

    return `
      <!-- ==================== CHỦ ĐỀ ${topic.num}: ${topic.title} ==================== -->
      <section id="${topic.id}" class="topic-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md mb-8" data-term="${topic.termTag}">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg ${termBadgeColor} text-white font-black text-xs uppercase tracking-wider">${topic.term}</span>
            <span class="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-semibold text-xs border border-purple-200 dark:border-purple-800">
              CHỦ ĐỀ ${topic.num}
            </span>
          </div>
          <span class="text-xs font-bold text-gray-400">Chủ đề ${topic.num} / 8</span>
        </div>

        <div class="mb-3">
          <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-music text-purple-600 dark:text-purple-400"></i> Chủ đề ${topic.num}: ${topic.title}
          </h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 italic mt-0.5">${topic.subtitle}</p>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-4 p-4 rounded-xl bg-gradient-to-br from-purple-50/40 via-indigo-50/20 to-violet-50/30 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border border-purple-100 dark:border-purple-900/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy cốt lõi • Chủ đề ${topic.num}: ${topic.title}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Âm nhạc 7 • KNTT</span>
          </div>
          <div class="w-full overflow-x-auto py-1">
            ${generateMindmapSvg(topic)}
          </div>
        </div>

        <!-- Nội dung kiến thức -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-headphones text-purple-600"></i> Nội Dung Học Tập &amp; Thực Hành
          </h4>
          ${sectionsHtml}
        </div>

        <!-- Trắc nghiệm củng cố -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-circle-check text-emerald-500"></i> Bài Tập Củng Cố Kiến Thức
          </h4>
          ${quizzesHtml}
        </div>

      </section>
    `;
  }).join('');
}

// Render Glossary Section (Trang 67)
function renderGlossarySection() {
  const cardsHtml = termsData.map(t => `
    <div class="p-4 rounded-xl bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs font-bold">
          <i class="fa-solid ${t.icon}"></i>
        </div>
        <h5 class="text-sm font-bold text-gray-900 dark:text-white">${t.name}</h5>
      </div>
      <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${t.desc}</p>
    </div>
  `).join('');

  return `
    <!-- ==================== GIẢI THÍCH THUẬT NGỮ ÂM NHẠC TRỌNG TÂM (TRANG 67) ==================== -->
    <section id="thuat-ngu-trang-67" class="topic-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border-2 border-purple-300 dark:border-purple-800 shadow-md mb-8" data-term="Glossary">
      
      <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200 dark:border-gray-700">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs uppercase tracking-wider">CHUYÊN ĐỀ ĐẶC BIỆT</span>
          <span class="text-xs font-bold text-purple-700 dark:text-purple-300">SGK Âm nhạc 7 &bull; Trang 67</span>
        </div>
        <span class="text-xs font-bold text-gray-400">5 Thuật ngữ cốt lõi</span>
      </div>

      <div class="mb-4">
        <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-book-bookmark text-purple-600 dark:text-purple-400"></i> GIẢI THÍCH THUẬT NGỮ ÂM NHẠC TRỌNG TÂM
        </h3>
        <p class="text-xs text-gray-500 dark:text-gray-400 italic mt-0.5">Hệ thống hóa toàn bộ các thuật ngữ âm nhạc then chốt quy định tại trang 67 SGK Kết nối tri thức.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-4">
        ${cardsHtml}
      </div>

    </section>
  `;
}

// Sidebar Navigation
function renderSidebarNav() {
  const topicsNav = topicsData.map(t => {
    return `
      <a href="#${t.id}" class="nav-topic-item flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group" data-term="${t.termTag}">
        <div class="flex items-center gap-2 overflow-hidden">
          <span class="w-8 h-6 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 text-[10px] font-black flex items-center justify-center flex-shrink-0">
            CĐ.${t.num}
          </span>
          <span class="truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">${t.title}</span>
        </div>
        <span class="text-[10px] font-mono text-gray-400 flex-shrink-0">${t.termTag}</span>
      </a>
    `;
  }).join('');

  const glossaryNav = `
    <a href="#thuat-ngu-trang-67" class="nav-topic-item flex items-center justify-between p-2.5 rounded-xl bg-purple-50/70 hover:bg-purple-100 dark:bg-purple-950/40 dark:hover:bg-purple-900/40 text-xs font-bold text-purple-800 dark:text-purple-300 transition border border-purple-200 dark:border-purple-800" data-term="Glossary">
      <div class="flex items-center gap-2 overflow-hidden">
        <span class="w-8 h-6 rounded-md bg-purple-600 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0">
          S.67
        </span>
        <span class="truncate">Thuật ngữ trang 67</span>
      </div>
      <i class="fa-solid fa-star text-amber-500 text-[10px]"></i>
    </a>
  `;

  return topicsNav + glossaryNav;
}

// Client-side script string
const clientScript = `
  let totalQuizzes = 16;
  let answeredQuizzes = new Set();

  // Filter topics by Term
  function filterNavTerm(term) {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active', 'bg-purple-600', 'text-white');
      b.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');
    });
    event.target.classList.add('active', 'bg-purple-600', 'text-white');
    event.target.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');

    document.querySelectorAll('.nav-topic-item').forEach(item => {
      if (term === 'all' || item.getAttribute('data-term') === term || item.getAttribute('data-term') === 'Glossary') {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    document.querySelectorAll('.topic-section').forEach(sec => {
      if (term === 'all' || sec.getAttribute('data-term') === term || sec.getAttribute('data-term') === 'Glossary') {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  }

  // Check Quiz Answer
  function checkQuizAnswer(qId, selectedIdx, correctIdx, explanation) {
    const optionsContainer = document.getElementById('quiz-options-' + qId);
    const feedbackBox = document.getElementById('quiz-feedback-' + qId);
    const buttons = optionsContainer.querySelectorAll('.quiz-btn-' + qId);

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove('hover:border-purple-400');
      if (idx === correctIdx) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300', 'font-bold');
      } else if (idx === selectedIdx) {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
      }
    });

    feedbackBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200', 'bg-rose-50', 'text-rose-800', 'border-rose-200');
    feedbackBox.classList.add('border');

    if (selectedIdx === correctIdx) {
      feedbackBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-800', 'dark:text-emerald-300', 'border-emerald-200', 'dark:border-emerald-800');
      feedbackBox.innerHTML = '<strong><i class=\"fa-solid fa-circle-check text-emerald-600 mr-1\"></i> Chính xác!</strong> ' + explanation;
    } else {
      feedbackBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-800', 'dark:text-rose-300', 'border-rose-200', 'dark:border-rose-800');
      feedbackBox.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Chưa đúng!</strong> ' + explanation;
    }

    if (!answeredQuizzes.has(qId)) {
      answeredQuizzes.add(qId);
      const percent = Math.min(100, Math.round((answeredQuizzes.size / totalQuizzes) * 100));
      document.getElementById('progress-bar').style.width = percent + '%';
      document.getElementById('progress-percent').textContent = percent + '%';
      document.getElementById('answered-count').textContent = answeredQuizzes.size;
    }
  }

  // Modals Handling
  function openTheoryModal() {
    document.getElementById('theoryModal').classList.remove('hidden');
  }
  function closeTheoryModal() {
    document.getElementById('theoryModal').classList.add('hidden');
  }

  function openTermsModal() {
    document.getElementById('termsModal').classList.remove('hidden');
  }
  function closeTermsModal() {
    document.getElementById('termsModal').classList.add('hidden');
  }

  // Exam Logic (40 questions, 60 minutes)
  const examData = ${JSON.stringify(examQuestions)};
  let examTimerInterval = null;
  let examTimeRemaining = 3600; // 60 mins
  let userAnswers = {};

  function openExamModal() {
    document.getElementById('examModal').classList.remove('hidden');
    renderExamQuestions();
    startExamTimer();
  }

  function closeExamModal() {
    document.getElementById('examModal').classList.add('hidden');
    clearInterval(examTimerInterval);
  }

  function startExamTimer() {
    clearInterval(examTimerInterval);
    examTimeRemaining = 3600;
    updateTimerDisplay();
    examTimerInterval = setInterval(() => {
      examTimeRemaining--;
      updateTimerDisplay();
      if (examTimeRemaining <= 0) {
        clearInterval(examTimerInterval);
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    document.getElementById('exam-timer').textContent = 
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }

  function renderExamQuestions() {
    userAnswers = {};
    const container = document.getElementById('exam-questions-list');
    document.getElementById('exam-result-view').classList.add('hidden');
    container.classList.remove('hidden');
    document.getElementById('exam-submit-btn').classList.remove('hidden');

    container.innerHTML = examData.map((item, idx) => {
      return '<div class=\"p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2\">' +
        '<div class=\"font-bold text-gray-900 dark:text-white text-xs sm:text-sm flex items-start gap-2\">' +
          '<span class=\"px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 text-xs font-black\">Câu ' + (idx + 1) + '</span>' +
          '<span>' + item.q + '</span>' +
        '</div>' +
        '<div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1\">' +
          item.opts.map((opt, oIdx) => {
            return '<label class=\"exam-opt flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 cursor-pointer hover:border-purple-400 text-xs text-gray-700 dark:text-gray-300\">' +
              '<input type=\"radio\" name=\"exam_q_' + idx + '\" value=\"' + oIdx + '\" onchange=\"recordExamAnswer(' + idx + ', ' + oIdx + ')\" class=\"accent-purple-600\">' +
              '<span>' + opt + '</span>' +
            '</label>';
          }).join('') +
        '</div>' +
      '</div>';
    }).join('');
    updateExamStatus();
  }

  function recordExamAnswer(qIdx, optIdx) {
    userAnswers[qIdx] = optIdx;
    updateExamStatus();
  }

  function updateExamStatus() {
    const answered = Object.keys(userAnswers).length;
    document.getElementById('exam-status-text').textContent = 'Đã chọn ' + answered + '/' + examData.length + ' câu';
  }

  function submitExam() {
    clearInterval(examTimerInterval);
    let correctCount = 0;
    examData.forEach((item, idx) => {
      if (userAnswers[idx] === item.ans) {
        correctCount++;
      }
    });

    const score = (correctCount / examData.length) * 10;
    document.getElementById('exam-questions-list').classList.add('hidden');
    document.getElementById('exam-submit-btn').classList.add('hidden');

    const resultView = document.getElementById('exam-result-view');
    resultView.classList.remove('hidden');
    document.getElementById('exam-final-score').innerHTML = 
      'Điểm số của bạn: <span class=\"text-2xl font-black text-purple-600 dark:text-purple-400\">' + score.toFixed(1) + ' / 10</span> (' + correctCount + '/' + examData.length + ' câu đúng)';
    
    let rank = 'Khá';
    if (score >= 9) rank = 'Trạng Nguyên Âm Nhạc 7 Xuất Sắc';
    else if (score >= 8) rank = 'Bảng Nhãn Âm Nhạc 7 Giỏi';
    else if (score >= 6.5) rank = 'Thám Hoa Âm Nhạc 7 Tiên Tiến';
    document.getElementById('exam-final-rank').textContent = rank;
  }

  // Live search
  document.getElementById('topicSearchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.topic-section').forEach(sec => {
      const text = sec.innerText.toLowerCase();
      if (!term || text.includes(term)) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });

  // Dark mode toggle
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('codehub_theme', isDark ? 'dark' : 'light');
  }

  // Restore dark mode
  if (localStorage.getItem('codehub_theme') === 'dark' || (!localStorage.getItem('codehub_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
`;

// Full HTML Document
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Âm Nhạc 7 (KNTT - GDPT 2018: 8 Chủ Đề &bull; Nhạc Cụ &bull; Thuật Ngữ S.67 &bull; Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            purple: {
              50: '#faf5ff',
              100: '#f3e8ff',
              200: '#e9d5ff',
              300: '#d8b4fe',
              400: '#c084fc',
              500: '#a855f7',
              600: '#9333ea',
              700: '#7e22ce',
              800: '#6b21a8',
              900: '#581c87',
              950: '#3b0764'
            },
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0b0f19'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Âm Nhạc Lớp 7">

  <style>
    body { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.4); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.6); }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen antialiased transition-colors duration-200">

  <!-- ==================== STICKY HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button (Về trang chính) -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 text-white flex items-center justify-center shadow-md shadow-purple-500/20 font-black text-sm group-hover:scale-105 transition">
            <i class="fa-solid fa-music text-base"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              ÂM NHẠC 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; Kết Nối Tri Thức &bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Sổ Tay Nhạc Lý Modal Button -->
        <button onclick="openTheoryModal()" class="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-guitar text-purple-600 dark:text-purple-400"></i>
          <span class="hidden md:inline">Sổ Tay Nhạc Lý</span>
        </button>

        <!-- Thuật Ngữ S.67 Modal Button -->
        <button onclick="openTermsModal()" class="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-book-bookmark text-indigo-600 dark:text-indigo-400"></i>
          <span class="hidden md:inline">Thuật Ngữ S.67</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-black shadow-md shadow-purple-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 text-white py-10 sm:py-14 border-b border-purple-900/40">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="absolute -right-20 -top-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wide">
            <i class="fa-solid fa-star text-amber-400"></i>
            <span>GDPT 2018 &bull; KẾT NỐI TRI THỨC VỚI CUỘC SỐNG &bull; 8 CHỦ ĐỀ CỐT LÕI</span>
          </div>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Khóa Học Âm Nhạc Lớp 7 Toàn Diện
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            Chuẩn hóa toàn bộ 8 Chủ đề SGK Âm nhạc 7 Kết nối tri thức: Học hát, Lí thuyết âm nhạc, Đọc nhạc, Nhạc cụ Recorder &amp; Kèn phím, Nghe nhạc, Thường thức âm nhạc và Bảng giải thích thuật ngữ cốt lõi trang 67. Tích hợp 8 sơ đồ tư duy trực quan SVG, ngân hàng trắc nghiệm tự chấm điểm và Đấu trường Trạng Nguyên 60:00.
          </p>
          
          <!-- Chips -->
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-music text-purple-400 mr-1"></i> 8 Chủ đề SGK KNTT
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-diagram-project text-cyan-400 mr-1"></i> 8 Sơ đồ tư duy SVG
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-guitar text-pink-400 mr-1"></i> Recorder &amp; Kèn phím
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-book-bookmark text-amber-400 mr-1"></i> Thuật ngữ Trang 67
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-circle-check text-emerald-400 mr-1"></i> 16 Trắc nghiệm tự chấm
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <i class="fa-solid fa-award mr-1"></i> Đấu trường 60:00
            </span>
          </div>
        </div>

        <!-- Quick Term Summary Cards -->
        <div class="grid grid-cols-2 gap-3 w-full lg:w-80 flex-shrink-0">
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
            <span class="text-[10px] font-black uppercase text-indigo-400">HỌC KÌ 1</span>
            <div class="text-sm font-bold text-white">Chủ đề 1 &ndash; 4</div>
            <p class="text-[11px] text-gray-400">Khai trường, Môi trường xanh, Thầy cô, Giai điệu quê hương</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
            <span class="text-[10px] font-black uppercase text-purple-400">HỌC KÌ 2</span>
            <div class="text-sm font-bold text-white">Chủ đề 5 &ndash; 8</div>
            <p class="text-[11px] text-gray-400">Mùa xuân, Âm nhạc nước ngoài, Cuộc sống tươi đẹp, Mùa hè</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTAINER ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ==================== LEFT STICKY SIDEBAR ==================== -->
      <aside class="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-20 space-y-5">
        <div class="bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          
          <!-- Search box -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="topicSearchInput" placeholder="Tìm bài hát, nhạc lý, tác giả..." class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition">
          </div>

          <!-- Tiến độ bài học -->
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-gray-700 dark:text-gray-300">Tiến độ củng cố</span>
              <span id="progress-percent" class="font-mono font-bold text-purple-600 dark:text-purple-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-purple-600 to-indigo-500 w-0 transition-all duration-300"></div>
            </div>
            <div class="flex justify-between text-[11px] text-gray-500 dark:text-gray-400">
              <span>Đã làm: <b id="answered-count">0</b>/16 câu</span>
              <span>8 chủ đề</span>
            </div>
          </div>

          <!-- Bộ lọc kì học -->
          <div class="space-y-1.5">
            <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Bộ Lọc Chương Trình</div>
            <div class="grid grid-cols-3 gap-1 text-[11px]">
              <button onclick="filterNavTerm('all')" class="filter-btn active py-1.5 rounded-lg bg-purple-600 text-white font-bold transition">Tất cả</button>
              <button onclick="filterNavTerm('HK1')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Học kì 1</button>
              <button onclick="filterNavTerm('HK2')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Học kì 2</button>
            </div>
          </div>

          <!-- Danh sách chủ đề -->
          <div class="space-y-1 max-h-[45vh] overflow-y-auto custom-scrollbar pr-1" id="sidebar-nav-list">
            ${renderSidebarNav()}
          </div>

          <!-- CTA Trạng Nguyên 60:00 -->
          <div class="p-3.5 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 text-white text-center space-y-2 shadow-md">
            <div class="text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-trophy text-amber-300"></i> Đấu Trường Trạng Nguyên
            </div>
            <p class="text-[11px] text-purple-100 leading-tight">40 câu trắc nghiệm tổng hợp &bull; Thời gian làm bài 60:00</p>
            <button onclick="openExamModal()" class="w-full py-1.5 rounded-lg bg-white text-purple-700 hover:bg-purple-50 text-xs font-black shadow transition">
              Vào Thi Ngay
            </button>
          </div>

        </div>
      </aside>

      <!-- ==================== MAIN CONTENT: 8 TOPICS + GLOSSARY ==================== -->
      <div class="flex-1 min-w-0 space-y-6">
        ${renderTopics()}
        ${renderGlossarySection()}
      </div>

    </div>
  </main>

  <!-- ==================== MODALS ==================== -->

  <!-- Modal 1: Sổ Tay Nhạc Lý 7 -->
  <div id="theoryModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-purple-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-guitar"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base">SỔ TAY LÍ THUYẾT ÂM NHẠC LỚP 7</h3>
            <p class="text-[11px] text-purple-100">Hệ thống hóa toàn bộ kiến thức nhạc lý SGK Kết nối tri thức</p>
          </div>
        </div>
        <button onclick="closeTheoryModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 space-y-2">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 flex items-center gap-2">
            <i class="fa-solid fa-drum"></i> 1. Nhịp Lấy Đà (Anacrusis)
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; Ô nhịp đầu tiên không đủ số phách theo quy định của chỉ số nhịp.<br>
            &bull; Kết thúc bài thường là một ô nhịp không đầy đủ để bù trừ phách cho nhịp lấy đà.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900 space-y-2">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
            <i class="fa-solid fa-repeat"></i> 2. Dấu Nhắc Lại, Dấu Quay Lại (%) &amp; Khung Thay Đổi
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>Dấu nhắc lại:</strong> Đánh dấu đoạn nhạc lặp lại một lần.<br>
            &bull; <strong>Dấu quay lại (%):</strong> Quay về vị trí có kí hiệu tương ứng đối với đoạn nhạc dài.<br>
            &bull; <strong>Khung thay đổi (1 và 2):</strong> Khi lặp lại ở lần hai, bỏ qua khung 1 nhảy thẳng sang khung 2.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-2">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
            <i class="fa-solid fa-hourglass-half"></i> 3. Các Kí Hiệu Tăng Trường Độ
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; <strong>Dấu nối:</strong> Nối 2 hay nhiều nốt <em>cùng cao độ</em> để cộng gộp trường độ.<br>
            &bull; <strong>Dấu chấm dôi:</strong> Tăng thêm <em>1/2 giá trị trường độ</em> của nốt đứng trước nó.<br>
            &bull; <strong>Dấu miễn nhịp (Fermata):</strong> Ngân nghỉ tự do tùy cảm xúc biểu diễn.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900 space-y-2">
          <h4 class="font-bold text-teal-900 dark:text-teal-300 flex items-center gap-2">
            <i class="fa-solid fa-gauge-high"></i> 4. Bảng Thuật Ngữ Tempo &amp; Dynamics (Ý)
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-2 rounded bg-white dark:bg-gray-800">
              <strong>Nhịp độ (Tempo):</strong><br>
              - Lento / Adagio: Rất chậm / Chậm<br>
              - Andante: Hơi chậm, thong thả<br>
              - Moderato: Vừa phải<br>
              - Allegro: Nhanh, tươi vui<br>
              - Presto: Rất nhanh, hối hả
            </div>
            <div class="p-2 rounded bg-white dark:bg-gray-800">
              <strong>Cường độ (Dynamics):</strong><br>
              - p: Nhỏ (piano) | pp: Rất nhỏ<br>
              - mp: Nhỏ vừa | mf: To vừa<br>
              - f: To (forte) | ff: Rất to<br>
              - < (crescendo): To dần<br>
              - > (decrescendo): Nhỏ dần
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 2: Thuật Ngữ Âm Nhạc Trang 67 -->
  <div id="termsModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-indigo-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-book-bookmark"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base">GIẢI THÍCH THUẬT NGỮ ÂM NHẠC TRỌNG TÂM (TRANG 67)</h3>
            <p class="text-[11px] text-indigo-100">Bảng tra cứu chuẩn SGK Âm nhạc 7 Kết nối tri thức</p>
          </div>
        </div>
        <button onclick="closeTermsModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
        ${termsData.map(t => `
          <div class="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900 space-y-1">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
              <i class="fa-solid ${t.icon} text-purple-600"></i> ${t.name}
            </h4>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${t.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- Modal 3: Hội Thi Trạng Nguyên Âm Nhạc 7 (60:00) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Exam Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-award text-amber-300 text-lg"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black tracking-tight">HỘI THI TRẠNG NGUYÊN ÂM NHẠC 7</h3>
            <p class="text-[11px] text-purple-100">40 câu hỏi trắc nghiệm &bull; Thời gian: 60:00 &bull; GDPT 2018</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1 rounded-xl bg-black/20 font-mono font-bold text-xs" id="exam-timer">
            60:00
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="flex-1 overflow-y-auto p-5 space-y-4 text-xs sm:text-sm">
        <div id="exam-questions-list" class="space-y-4"></div>

        <!-- Exam Result Certificate -->
        <div id="exam-result-view" class="hidden text-center py-6 space-y-4">
          <div class="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">Chúc Mừng Bạn Đã Hoàn Thành Bài Thi!</h4>
          <p id="exam-final-score" class="text-base font-bold text-purple-600 dark:text-purple-400"></p>
          <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-w-md mx-auto text-xs space-y-1">
            <p><strong>Danh hiệu:</strong> <span id="exam-final-rank" class="text-amber-500 font-bold">Trạng Nguyên Âm Nhạc 7 Xuất Sắc</span></p>
            <p class="text-gray-500 dark:text-gray-400">Chứng nhận hoàn thành chương trình Âm Nhạc 7 chuẩn GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-850">
        <span id="exam-status-text" class="text-xs text-gray-500">Đã chọn 0/40 câu</span>
        <button id="exam-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition">
          Nộp bài thi
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 transition-colors">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <div class="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
          <i class="fa-solid fa-music"></i>
        </div>
        <span class="font-bold text-gray-700 dark:text-gray-300">CodeHub - Nền Tảng Học Tập Số Hóa GDPT 2018</span>
      </div>
      <p>Chương trình Âm Nhạc 7: 8 Chủ đề cốt lõi &bull; Nhạc cụ Recorder &amp; Kèn phím &bull; Thuật ngữ Trang 67 &bull; Giao diện chuẩn Tiếng Anh 6.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
${clientScript}
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/amnhac_7.html', fullHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/music_7.html', fullHtml, 'utf8');

console.log("Successfully rebuilt courses/amnhac_7.html and courses/music_7.html! Size:", fullHtml.length);
