// scratch/van10_data_p2.js
// Ngữ Văn 10 - Bộ Kết nối tri thức với cuộc sống (Tập 2: Bài 6 - Bài 9 + Kiến thức dùng chung)

const fs = require('fs');
const path = require('path');
const { volumes, lessonsP1 } = require('./van10_data_p1.js');

const lessonsP2 = {
  6: {
    num: 6,
    volume: 2,
    title: "Nguyễn Trãi – “Dành còn để trợ dân này”",
    subtitle: "Văn chính luận Bình Ngô đại cáo, Thơ chữ Hán & Thơ Nôm Quốc âm thi tập",
    genreFocus: "Văn học trung đại Việt Nam (Thể Cáo, Thơ Nôm Đường luật thất ngôn xen lục ngôn, Thơ chữ Hán)",
    vietnameseFocus: "Sử dụng từ Hán Việt (tiếp theo)",
    writingFocus: "Viết văn bản nghị luận về một vấn đề xã hội",
    speakingFocus: "Thảo luận về một vấn đề xã hội có ý kiến khác nhau",
    diagramCaption: "Sơ đồ tư tưởng Nhân nghĩa – Yên dân – Độc lập dân tộc và hệ thống sáng tác chữ Hán – chữ Nôm của Đại thi hào Nguyễn Trãi",
    triThucNguVan: [
      {
        term: "Văn học trung đại Việt Nam (Thế kỉ X – hết thế kỉ XIX)",
        definition: "Hình thành và phát triển trong xã hội phong kiến, bao gồm hai bộ phận: <strong>văn học chữ Hán</strong> và <strong>văn học chữ Nôm</strong>. Văn học viết trung đại vừa kế thừa truyền thống văn học dân gian bản địa vừa tiếp thu có chọn lọc tinh hoa văn hoá trong khu vực (đặc biệt là văn học cổ điển Trung Hoa) theo tinh thần dân tộc hoá."
      },
      {
        term: "Bối cảnh lịch sử & Sự nghiệp Nguyễn Trãi (1380 – 1442)",
        definition: "Nguyễn Trãi (hiệu Ức Trai) là anh hùng dân tộc, danh nhân văn hoá thế giới, người có công lớn trong cuộc khởi nghĩa Lam Sơn chống quân Minh và công cuộc kiến thiết triều Lê sơ. Đọc tác phẩm của ông cần đặt trong mối liên hệ với <strong>tư tưởng nhân nghĩa gắn liền yêu nước, thương dân ('yên dân', 'trừ bạo')</strong> và vẻ đẹp tâm hồn thanh cao, giao hoà với thiên nhiên của bậc đại trí thức thời trung đại."
      },
      {
        term: "Văn nghị luận trung đại & Thể Cáo",
        definition: "• <strong>Thể Cáo:</strong> Thể văn nghị luận chính trị cổ, thường do vua chúa hoặc thủ lĩnh dùng để trình bày một chủ trương, sự nghiệp lớn hoặc tuyên bố một sự kiện trọng đại cho toàn dân biết.<br>• <strong>Đặc điểm nghệ thuật:</strong> Viết bằng văn xuôi hoặc <em>văn biền ngẫu</em> (các vế câu sóng đôi, nhịp nhàng), kết hợp lập luận đanh thép, bằng chứng lịch sử xác thực với hình ảnh hùng tráng, điển cố và cảm xúc mãnh liệt."
      },
      {
        term: "Thơ Nôm Đường luật Nguyễn Trãi (Quốc âm thi tập)",
        definition: "<em>Quốc âm thi tập</em> (254 bài) đặt nền móng cho thơ tiếng Việt (chữ Nôm). Sáng tạo độc đáo nhất của Nguyễn Trãi là thể thơ <strong>thất ngôn xen lục ngôn</strong> (xen câu 6 chữ vào bài thơ 7 chữ Đường luật), sử dụng ngôn ngữ đời thường, tục ngữ, thành ngữ dân gian để diễn tả thiên nhiên bình dị và nỗi niềm ưu quốc ái dân."
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Bình Ngô đại cáo (Đại cáo bình Ngô)",
        author: "Nguyễn Trãi (viết thay lời Lê Lợi, đầu năm 1428)",
        genre: "Thể Cáo (Văn chính luận trung đại – Văn biền ngẫu)",
        isPracticeReading: false,
        summary: [
          "<strong>Phần 1 – Nêu luận đề chính nghĩa:</strong> Khẳng định cốt lõi tư tưởng nhân nghĩa là 'yên dân', 'trừ bạo' và xác lập chân lí độc lập chủ quyền của nước Đại Việt qua 5 yếu tố: văn hiến lâu đời, cương vực lãnh thổ riêng, phong tục tập quán Bắc – Nam khác biệt, lịch sử các triều đại (Triệu, Đinh, Lý, Trần) sánh ngang phương Bắc và hào kiệt đời nào cũng có.",
          "<strong>Phần 2 – Bản cáo trạng tội ác giặc Minh:</strong> Vạch trần âm mưu thôn tính và tội ác tàn bạo 'trúc Nam Sơn không ghi hết tội, nước Đông Hải không rửa sạch mùi' của giặc Minh đối với nhân dân và môi trường sống.",
          "<strong>Phần 3 – Quá trình khởi nghĩa Lam Sơn & Toàn thắng:</strong> Tái hiện những năm tháng gian khổ nơi núi Lam Sơn, tinh thần đồng cam cộng khổ 'tướng sĩ một lòng phụ tử', rồi phản công thần tốc từ Bồ Đằng, Trà Lân đến Chi Lăng, Mã Yên, Xương Giang buộc Vương Thông, Liễu Thăng thảm bại nhưng vẫn mở đường hiếu sinh tha chết cho quân đầu hàng.",
          "<strong>Phần 4 – Tuyên bố độc lập & Mở nền thái bình:</strong> Khẳng định xã tắc từ đây vững bền, giang sơn đổi mới, kết hợp sức mạnh thời thế và truyền thống tổ tông."
        ],
        analysis: [
          "<strong>Giá trị tư tưởng ('Bản tuyên ngôn độc lập thứ hai'):</strong> Đưa tư tưởng nhân nghĩa Nho giáo gắn chặt với độc lập dân tộc và hạnh phúc của nhân dân; thể hiện tầm nhìn nhân đạo và khát vọng hoà bình bền vững.",
          "<strong>Nghệ thuật chính luận bậc thầy ('Thiên cổ hùng văn'):</strong> Kết cấu 4 phần chặt chẽ; kết hợp lí lẽ sắc bén với thực tiễn lịch sử; nghệ thuật đối sánh tương phản; giọng điệu linh hoạt (khi trang trọng đanh thép, khi căm phẫn uất nghẹn, khi hào sảng sấm sét) và nhịp văn biền ngẫu biến hoá."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Bảo kính cảnh giới (Gương báu răn mình) – Bài 43",
        author: "Nguyễn Trãi (trích Quốc âm thi tập)",
        genre: "Thơ Nôm Đường luật thất ngôn xen lục ngôn",
        isPracticeReading: false,
        summary: [
          "<strong>Câu 1 (Tư thế đón nhận cảnh vật):</strong> 'Rồi hóng mát thuở ngày trường' (câu 6 chữ) – Khoảnh khắc nhàn rỗi hiếm hoi của nhà thơ để mở rộng tâm hồn đón nhận thiên nhiên.",
          "<strong>Câu 2 – 6 (Bức tranh ngày hè tràn đầy sinh khí):</strong> Cây hoè lục đùn đùn tán rợp giương, hoa lựu đầu tường phun thức đỏ, sen hồng trong hồ tiễn mùi hương; hoà cùng âm thanh lao động 'lao xao chợ cá làng ngư phủ' và 'dắng dỏi cầm ve lầu tịch dương'.",
          "<strong>Câu 7 – 8 (Khát vọng nhân nghĩa vì dân):</strong> 'Dẽ có Ngu cầm đàn một tiếng / Dân giàu đủ khắp đòi phương' (câu 6 chữ) – Từ cảnh hè rộn rã, tâm hồn Ức Trai hướng trọn về ước nguyện muôn dân được ấm no, hạnh phúc như thời đại vua Thuấn."
        ],
        analysis: [
          "<strong>Vẻ đẹp tâm hồn Nguyễn Trãi:</strong> Tình yêu thiên nhiên tha thiết, tinh tế gắn liền với tấm lòng ưu ái, lúc nào cũng canh cánh nỗi lo cho dân ('Dành còn để trợ dân này').",
          "<strong>Nghệ thuật thơ Nôm độc đáo:</strong> Ngắt nhịp phá cách (1/2/3 ở câu 1; 3/4 ở câu 3–4); dùng động từ mạnh (<em>đùn đùn, giương, phun, tiễn</em>) và từ láy thuần Việt (<em>lao xao, dắng dỏi</em>); kết bài bằng câu lục ngôn cô đọng tư tưởng toàn bài."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Dục Thuý sơn (Núi Dục Thuý)",
        author: "Nguyễn Trãi (trích Ức Trai thi tập)",
        genre: "Thơ chữ Hán ngũ ngôn luật thi",
        isPracticeReading: false,
        summary: [
          "<strong>Cảnh đẹp thần tiên của núi Dục Thuý (Ninh Bình):</strong> Ngọn núi nơi cửa biển hiện lên như cảnh tiên rơi xuống trần gian; bóng tháp soi mặt nước như chiếc trâm ngọc xanh cài trên mái tóc, sóng nước in bóng núi như gương sáng soi vẻ đẹp mỹ nhân.",
          "<strong>Suy ngẫm lịch sử và hoài niệm:</strong> Dấu xưa của tiền nhân Trương Hán Siêu khắc bia trên đá nay đã phủ rêu mờ theo năm tháng, gợi niềm bùi ngùi, tri âm của Nguyễn Trãi trước dòng chảy thời gian và di sản văn hoá dân tộc."
        ],
        analysis: [
          "<strong>Nghệ thuật chữ Hán hàm súc:</strong> Hình ảnh ẩn dụ, liên tưởng mĩ lệ, thanh khiết (<em>bông sen nổi trên nước, trâm ngọc xanh, gương sáng</em>); sự hoà quyện giữa cái nhìn mĩ học tinh tế với chiều sâu hoài cổ và tâm thức văn hiến."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Ngôn chí (Bài 3) & Bạch Đằng hải khẩu (Cửa biển Bạch Đằng)",
        author: "Nguyễn Trãi",
        genre: "Thơ Nôm & Thơ chữ Hán",
        isPracticeReading: true,
        summary: [
          "• <strong>Ngôn chí (Bài 3):</strong> Cuộc sống thanh bần, giản dị nơi Côn Sơn (am trúc, dưa muối, áo vải, ao rửa chân, bầu rượu, thơ ca) toát lên nhân cách thanh cao, vượt lên danh lợi tầm thường.<br>• <strong>Bạch Đằng hải khẩu:</strong> Cảnh cửa biển Bạch Đằng hiểm trở, hùng vĩ với ngọn sóng kình, giáo gươm trầm tích gợi niềm tự hào kiêu hãnh về chiến công oanh liệt của cha ông và suy tư trước lịch sử."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Đối chiếu vẻ đẹp bình dị, hóm hỉnh trong thơ Nôm (<em>Ngôn chí 3</em>) với khí phách hào hùng, trầm mặc trong thơ chữ Hán (<em>Bạch Đằng hải khẩu</em>) để nhận diện trọn vẹn tầm vóc văn chương Nguyễn Trãi."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Sử dụng từ Hán Việt (tiếp theo)",
      concepts: [
        "<strong>Sắc thái biểu cảm của từ Hán Việt trong văn bản trung đại:</strong> Trong <em>Bình Ngô đại cáo</em> và thơ chữ Hán/Nôm Nguyễn Trãi, hệ thống từ Hán Việt (<em>nhân nghĩa, điếu phạt, độc lập, xã tắc, giang sơn, hào kiệt, nguyên khí...</em>) tạo nên sắc thái trang trọng, cổ kính, khái quát và uy nghiêm.",
        "<strong>Hiện tượng biến đổi nghĩa của từ Hán Việt:</strong> Có những từ Hán Việt trong văn bản cổ mang nghĩa gốc khác với cách dùng hiện đại, hoặc nghĩa của cả từ ghép không đơn thuần là phép cộng cơ học của từng yếu tố. Vì vậy cần dựa vào ngữ cảnh lịch sử – văn bản và cước chú để giải nghĩa chính xác."
      ],
      examples: [
        {
          wrong: "Từ 'nhân nghĩa' trong Bình Ngô đại cáo chỉ có nghĩa là cư xử tử tế giữa cá nhân với cá nhân.",
          right: "Trong Bình Ngô đại cáo, Nguyễn Trãi mở rộng nội hàm từ 'nhân nghĩa': gắn liền với việc 'yên dân' (làm cho dân được an hưởng thái bình) và 'trừ bạo' (tiêu diệt quân xâm lược bạo tàn).",
          note: "Hiểu nghĩa từ Hán Việt đặt trong hệ tư tưởng và ngữ cảnh cụ thể của văn bản lịch sử."
        }
      ]
    },
    viet: {
      title: "Viết văn bản nghị luận về một vấn đề xã hội",
      requirements: [
        "Lựa chọn một vấn đề xã hội có ý nghĩa thiết thực (lòng yêu nước, trách nhiệm công dân với đất nước, giữ gìn bản sắc văn hoá, lối sống cống hiến của giới trẻ...).",
        "Trình bày rõ quan điểm cá nhân; triển khai hệ thống luận điểm mạch lạc (Giải thích vấn đề → Phân tích các khía cạnh/ý nghĩa → Bằng chứng thực tế xưa và nay → Bàn luận mở rộng/phản đề → Bài học nhận thức và hành động).",
        "Không khẳng định chung chung hay sáo rỗng; kết hợp dẫn chứng lịch sử (như tấm gương Nguyễn Trãi) với dẫn chứng đời sống đương đại."
      ],
      steps: [
        {
          step: "Bước 1: Chuẩn bị viết",
          detail: "Xác định vấn đề xã hội cần nghị luận, thu thập các dẫn chứng tiêu biểu, xác thực cả trong lịch sử lẫn thời sự hiện nay."
        },
        {
          step: "Bước 2: Tìm ý và lập dàn ý",
          detail: "Xây dựng luận đề xuyên suốt; sắp xếp các luận điểm theo trình tự tăng tiến từ giải thích khái niệm, phân tích nguyên nhân/biểu hiện/vai trò đến phản biện các biểu hiện lệch lạc và rút ra giải pháp."
        },
        {
          step: "Bước 3: Viết bài",
          detail: "Mỗi luận điểm viết thành một đoạn văn có câu chủ đề rõ ràng; sử dụng từ ngữ chính xác, giàu sức thuyết phục."
        },
        {
          step: "Bước 4: Kiểm tra và chỉnh sửa",
          detail: "Rà soát sự cân đối giữa lí lẽ và bằng chứng; kiểm tra lỗi dùng từ Hán Việt và tính liên kết giữa các đoạn."
        }
      ]
    },
    noiVaNghe: {
      title: "Thảo luận về một vấn đề xã hội có ý kiến khác nhau",
      speakerTasks: [
        "Trình bày rõ luận điểm của mình, phân biệt rạch ròi giữa sự kiện khách quan với nhận định, đánh giá chủ quan.",
        "Sử dụng dẫn chứng thuyết phục và sẵn sàng điều chỉnh, bổ sung quan điểm khi người đối thoại đưa ra bằng chứng xác đáng."
      ],
      listenerTasks: [
        "Tập trung lắng nghe lập luận của người nói, ghi nhận những điểm đồng thuận và những điểm còn khác biệt để trao đổi văn minh, tôn trọng."
      ]
    },
    cungCoMoRong: [
      "Hệ thống hoá di sản văn chương Nguyễn Trãi trên cả hai mảng chữ Hán (<em>Bình Ngô đại cáo, Quân trung từ mệnh tập, Ức Trai thi tập</em>) và chữ Nôm (<em>Quốc âm thi tập</em>) để làm sáng tỏ nhận định của Lê Thánh Tông: 'Ức Trai tâm thượng quang khuê tảo' (Lòng Ức Trai sáng tựa sao Khuê).",
      "Liên hệ tư tưởng 'việc nhân nghĩa cốt ở yên dân' với trách nhiệm phụng sự cộng đồng trong thời đại ngày nay."
    ]
  },

  7: {
    num: 7,
    volume: 2,
    title: "Quyền năng của người kể chuyện",
    subtitle: "Ngôi kể, Điểm nhìn nghệ thuật, Lời người kể chuyện & Chêm xen, liệt kê",
    genreFocus: "Truyện văn xuôi hiện đại (Tiểu thuyết lãng mạn, Truyện ngắn trữ tình, Truyện ngắn tâm lí)",
    vietnameseFocus: "Biện pháp chêm xen và biện pháp liệt kê",
    writingFocus: "Viết bài văn nghị luận phân tích, đánh giá chủ đề và nhân vật trong một tác phẩm truyện",
    speakingFocus: "Thảo luận về một vấn đề văn học có ý kiến khác nhau",
    diagramCaption: "Sơ đồ Quyền năng của người kể chuyện (Ngôi thứ nhất vs Ngôi thứ ba; Điểm nhìn bên ngoài/bên trong; Dịch chuyển điểm nhìn & Giọng điệu)",
    triThucNguVan: [
      {
        term: "Người kể chuyện ngôi thứ nhất",
        definition: "Người kể chuyện xưng <strong>“tôi”</strong> (hoặc một đại từ tương đương), trực tiếp xuất hiện trong tác phẩm với tư cách nhân vật chính, nhân vật phụ hoặc người chứng kiến/người nghe kể lại. Ngôi kể thứ nhất tạo ấn tượng chân thực, gần gũi và thuận lợi cho việc bộc lộ chiều sâu tâm tư, nhưng thường bị giới hạn trong phạm vi những gì nhân vật 'tôi' trực tiếp biết và trải nghiệm."
      },
      {
        term: "Người kể chuyện ngôi thứ ba",
        definition: "Người kể chuyện <strong>giấu mình</strong> (không xưng 'tôi' như một nhân vật trong truyện), gọi tên các nhân vật bằng chính tên của họ. Người kể ngôi thứ ba có thể là <em>người kể chuyện toàn tri</em> (biết hết mọi sự việc ở nhiều không gian, thời gian và thấu suốt mọi suy nghĩ thầm kín của các nhân vật) hoặc <em>người kể chuyện hạn tri</em> (chỉ gắn điểm nhìn theo sát một nhân vật nhất định)."
      },
      {
        term: "Điểm nhìn nghệ thuật & Sự dịch chuyển điểm nhìn",
        definition: "<strong>Điểm nhìn</strong> là vị trí, khoảng cách và góc độ mà từ đó người kể chuyện quan sát, cảm nhận và trần thuật các sự việc, nhân vật (điểm nhìn của người kể chuyện vs điểm nhìn của nhân vật; điểm nhìn bên ngoài vs điểm nhìn bên trong nội tâm). Trong một tác phẩm hiện đại, điểm nhìn có thể <strong>dịch chuyển linh hoạt</strong> giữa người kể chuyện và các nhân vật để tạo tính đa thanh và chiều sâu tâm lí."
      },
      {
        term: "Lời người kể chuyện & Lời nhân vật",
        definition: "Sự đan xen, cộng hưởng hoặc tạo khoảng cách giữa <strong>lời người kể chuyện</strong> với <strong>lời nhân vật</strong> (đối thoại, độc thoại nội tâm, lời nửa trực tiếp) giúp bộc lộ thái độ đánh giá ngầm ẩn, sự mỉa mai, niềm thương cảm hoặc sự mơ hồ đa nghĩa của văn bản."
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Người cầm quyền khôi phục uy quyền",
        author: "Vích-to Huy-gô (trích tiểu thuyết Những người khốn khổ)",
        genre: "Tiểu thuyết lãng mạn Pháp thế kỉ XIX",
        isPracticeReading: false,
        summary: [
          "<strong>Sự xuất hiện hung hãn của Gia-ve:</strong> Tại bệnh viện nơi Phăng-tin đang hấp hối và chờ ông thị trưởng Ma-đơ-len đưa con gái Cô-dét về, thanh tra Gia-ve xuất hiện với thái độ lạnh lùng, tàn nhẫn, lột mặt nạ ông Ma-đơ-len chính là tù khổ sai vượt ngục Giăng Van-giăng.",
          "<strong>Cái chết thương tâm của Phăng-tin:</strong> Kinh hoàng trước sự hung bạo của Gia-ve và cú sốc sự thật, Phăng-tin ngã đập đầu tắt thở trên giường bệnh.",
          "<strong>Sự đảo chiều uy quyền đạo đức:</strong> Giăng Van-giăng bẻ gãy chiếc giường sắt nát vụn cầm làm vũ khí khiến Gia-ve phải lùi bước, sau đó ông bình thản đến bên giường thì thầm lời hứa với linh hồn Phăng-tin, chỉnh trang gương mặt người đã khuất rồi dõng dạc bảo Gia-ve: 'Giờ thì ông muốn làm gì tôi thì làm'. Uy quyền thật sự thuộc về tình thương và lương tri."
        ],
        analysis: [
          "<strong>Quyền năng người kể chuyện toàn tri (Ngôi thứ ba):</strong> Người kể chuyện không chỉ miêu tả sắc nét diện mạo, cử chỉ đối lập giữa Gia-ve ('bộ mặt thú dữ') và Giăng Van-giăng ('vẻ thánh thiện rạng ngời') mà còn trực tiếp bình luận, dẫn dắt người đọc cảm nhận sức mạnh tối thượng của lòng nhân ái trước pháp luật vô cảm."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Dưới bóng hoàng lan",
        author: "Thạch Lam",
        genre: "Truyện ngắn trữ tình Việt Nam (1930 – 1945)",
        isPracticeReading: false,
        summary: [
          "<strong>Trở về không gian kí ức bình yên:</strong> Bước qua cánh cổng gỗ vào khu vườn quê mát rượi dưới bóng cây hoàng lan cổ thụ, Thanh cảm thấy mọi ồn ào, mệt mỏi nơi phố thị tan biến hết.",
          "<strong>Tình bà cháu ấm áp và rung động đầu đời:</strong> Sự chăm sóc ân cần, hiền từ của người bà mái tóc bạc phơ và sự xuất hiện dịu dàng của Nga – cô hàng xóm thuở nhỏ cùng nhặt hoa hoàng lan cài trên mái tóc – đánh thức trong lòng Thanh cảm xúc trong trẻo, êm đềm trước khi chàng lại phải lên đường đi làm."
        ],
        analysis: [
          "<strong>Điểm nhìn bên trong & Bút pháp truyện ngắn trữ tình:</strong> Tuy kể ở ngôi thứ ba nhưng điểm nhìn được đặt sát vào cảm nhận tinh vi của nhân vật Thanh (thị giác, khứu giác với hương hoàng lan thoang thoảng, thính giác với tiếng chim và bước chân nhẹ). Cốt truyện hầu như không có biến cố gay cấn nhưng làm bừng sáng vẻ đẹp thuần hậu của tình thân và quê hương."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Một chuyện đùa nho nhỏ",
        author: "An-tôn Sê-khốp",
        genre: "Truyện ngắn tâm lí Nga",
        isPracticeReading: false,
        summary: [
          "<strong>Trò đùa trên đỉnh dốc trượt tuyết:</strong> Một buổi chiều mùa đông nắng đẹp, nhân vật 'tôi' rủ cô gái nhút nhát Na-đi-a trượt xe từ đỉnh dốc cao xuống. Giữa tiếng gió rít gào khi xe lao vun vút, 'tôi' khẽ nói: 'Na-đi-a, tôi yêu em!'.",
          "<strong>Sự lặp lại và nỗi khao khát tình yêu của Na-đi-a:</strong> Câu nói lửng lơ khiến Na-đi-a băn khoăn không biết đó là lời tỏ tình của chàng trai hay chỉ là tiếng gió. Bất chấp nỗi sợ hãi tột cùng, cô liên tục đòi trượt lại nhiều lần, thậm chí một mình trượt xuống để kiểm chứng nhưng không nghe thấy nữa.",
          "<strong>Cái kết mùa xuân và hồi ức nhiều năm sau:</strong> Trước khi đi Pê-téc-bua, 'tôi' nấp sau hàng rào nhờ làn gió xuân gửi lời ấy một lần cuối khiến gương mặt Na-đi-a rạng rỡ hạnh phúc. Nhiều năm sau, khi Na-đi-a đã lấy chồng và có ba con, kí ức ấy trở thành kỉ niệm đẹp nhất đời nàng, còn 'tôi' giờ đã đứng tuổi vẫn tự hỏi vì sao ngày ấy mình lại đùa như thế."
        ],
        analysis: [
          "<strong>Ngôi kể thứ nhất & Sự chuyển hoá giọng điệu:</strong> Người kể chuyện xưng 'tôi' nắm giữ toàn bộ bí mật của trò đùa, tạo khoảng cách nhận thức với Na-đi-a; giọng điệu chuyển dần từ bông đùa, tinh nghịch sang trầm lắng, suy tư và day dứt về khát vọng hạnh phúc của con người."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Con khướu sổ lồng",
        author: "Nguyễn Quang Sáng",
        genre: "Truyện ngắn hiện đại Việt Nam",
        isPracticeReading: true,
        summary: [
          "Câu chuyện về con chim khướu hót hay của gia đình nhân vật 'tôi': lần đầu sổ lồng bay ra bầu trời rộng lớn, nó sợ hãi và tự quay về chiếc lồng quen thuộc; nhưng lần thứ hai, khi nghe tiếng hót gọi bầy của chim mái tự do trên vòm cây, nó đã vỗ cánh bay đi mãi mãi."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Phân tích ngôi kể thứ nhất của người cha, điểm nhìn nhân văn và ý nghĩa triết lí về khát vọng tự do đích thực cùng tình yêu đích thực không thể bị cầm tù trong chiếc lồng êm ấm."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Biện pháp chêm xen và biện pháp liệt kê",
      concepts: [
        "<strong>Biện pháp chêm xen (Thành phần phụ chú):</strong> Đưa thêm vào câu một từ, cụm từ hoặc một câu nhỏ nhằm <em>bổ sung thông tin giải thích, chú thích hoặc bộc lộ thái độ, cảm xúc đánh giá của người viết</em>. Bộ phận chêm xen thường được tách biệt với nòng cốt câu bằng <strong>hai dấu phẩy, dấu gạch ngang <code>– ... –</code> hoặc dấu ngoặc đơn <code>(...)</code></strong>.",
        "<strong>Biện pháp liệt kê:</strong> Sắp xếp nối tiếp hàng loạt từ hay cụm từ cùng loại để <em>diễn tả đầy đủ, toàn diện các khía cạnh của sự vật, hiện tượng hoặc nhấn mạnh cảm xúc, tư tưởng</em>. Cần đảm bảo các thành phần liệt kê có cấu trúc ngữ pháp tương đồng và sắp xếp theo trình tự hợp lí (tăng tiến hoặc theo nhóm nghĩa)."
      ],
      examples: [
        {
          wrong: "Chàng cảm thấy trên ngực một sự đè nén nhẹ nhàng, của mùi hoa hoàng lan, của bóng cây râm mát.",
          right: "Cô-dét – đứa con gái nhỏ tội nghiệp mà Phăng-tin ngày đêm thương nhớ – chính là điểm tựa duy nhất giữ người mẹ bất hạnh ở lại với cõi đời.",
          note: "Bộ phận đặt giữa hai dấu gạch ngang là thành phần chêm xen vừa giải thích rõ lai lịch Cô-dét vừa bộc lộ niềm xót thương của người viết."
        }
      ]
    },
    viet: {
      title: "Viết bài văn nghị luận phân tích, đánh giá chủ đề và nhân vật trong một tác phẩm truyện",
      requirements: [
        "Xác định chính xác mối quan hệ hữu cơ giữa <strong>chủ đề tư tưởng</strong> của truyện và <strong>hình tượng nhân vật trung tâm</strong>.",
        "Phân tích nhân vật không chỉ dừng ở tính cách, số phận mà phải làm rõ <strong>nghệ thuật xây dựng nhân vật gắn với quyền năng của người kể chuyện</strong>: ngôi kể, điểm nhìn (bên ngoài/bên trong), sự dịch chuyển điểm nhìn, ngoại hình, hành động, ngôn ngữ đối thoại/độc thoại và giọng điệu trần thuật.",
        "Mỗi nhận định đánh giá đều phải đi kèm dẫn chứng tiêu biểu trích từ văn bản và lời bình giải sâu sắc."
      ],
      steps: [
        {
          step: "Bước 1: Chuẩn bị viết",
          detail: "Chọn một truyện ngắn hoặc đoạn trích tiểu thuyết (như <em>Người cầm quyền khôi phục uy quyền</em>, <em>Dưới bóng hoàng lan</em>, <em>Một chuyện đùa nho nhỏ</em>); xác định chủ đề và nhân vật trung tâm."
        },
        {
          step: "Bước 2: Tìm ý và lập dàn ý",
          detail: "Mở bài: Giới thiệu tác giả, tác phẩm, nhân vật và chủ đề. Thân bài: (1) Phân tích chủ đề của truyện; (2) Phân tích đặc điểm, phẩm chất, tâm lí nhân vật; (3) Phân tích nghệ thuật khắc hoạ nhân vật (vai trò của ngôi kể, điểm nhìn, chi tiết nghệ thuật, giọng điệu) làm sáng tỏ chủ đề như thế nào. Kết bài: Khẳng định sức sống của hình tượng nhân vật."
        },
        {
          step: "Bước 3: Viết bài",
          detail: "Vận dụng biện pháp chêm xen và liệt kê hợp lí trong câu văn nghị luận để câu văn giàu sức biểu cảm và lập luận chặt chẽ."
        },
        {
          step: "Bước 4: Kiểm tra và chỉnh sửa",
          detail: "Đảm bảo bài viết không tách rời phần chủ đề và phần nhân vật thành hai mảng biệt lập mà cho thấy nhân vật chính là linh hồn thể hiện chủ đề."
        }
      ]
    },
    noiVaNghe: {
      title: "Thảo luận về một vấn đề văn học có ý kiến khác nhau",
      speakerTasks: [
        "Nêu rõ cách hiểu và đánh giá của cá nhân về một vấn đề văn học (ví dụ: 'Hành động đùa của nhân vật tôi trong Một chuyện đùa nho nhỏ là vô tâm hay mang lại hạnh phúc cho Na-đi-a?').",
        "Đưa ra bằng chứng trực tiếp từ chi tiết, lời văn, điểm nhìn trong tác phẩm để bảo vệ cách đọc của mình."
      ],
      listenerTasks: [
        "Tôn trọng tính đa nghĩa của tác phẩm văn chương; phân biệt giữa cách cắt nghĩa có căn cứ văn bản với sự suy diễn tuỳ tiện ngoài văn bản."
      ]
    },
    cungCoMoRong: [
      "Lập bảng so sánh <strong>Ngôi kể, Điểm nhìn và Giọng điệu trần thuật</strong> trong 3 văn bản: <em>Người cầm quyền khôi phục uy quyền</em> (Huy-gô), <em>Dưới bóng hoàng lan</em> (Thạch Lam) và <em>Một chuyện đùa nho nhỏ</em> (Sê-khốp).",
      "Thử tập viết lại một đoạn ngắn trong <em>Dưới bóng hoàng lan</em> bằng ngôi thứ nhất (nhân vật Thanh hoặc Nga xưng 'tôi') để cảm nhận sự thay đổi của điểm nhìn."
    ]
  },

  8: {
    num: 8,
    volume: 2,
    title: "Thế giới đa dạng của thông tin",
    subtitle: "Văn bản thông tin tổng hợp, Bản tin, Phương tiện phi ngôn ngữ & Nội quy công cộng",
    genreFocus: "Văn bản thông tin (Văn bản phổ biến khoa học, Văn bản khảo cứu văn hoá, Bản tin báo chí)",
    vietnameseFocus: "Sử dụng phương tiện phi ngôn ngữ trong văn bản thông tin",
    writingFocus: "Viết một văn bản nội quy hoặc văn bản hướng dẫn nơi công cộng",
    speakingFocus: "Thảo luận về một văn bản nội quy hoặc hướng dẫn nơi công cộng",
    diagramCaption: "Sơ đồ cấu trúc Văn bản thông tin tổng hợp (Dữ kiện khách quan vs Ý kiến đánh giá; Phương tiện ngôn ngữ & Phi ngôn ngữ; Đánh giá Bản tin)",
    triThucNguVan: [
      {
        term: "Văn bản thông tin & Văn bản thông tin tổng hợp",
        definition: "• <strong>Văn bản thông tin:</strong> Loại văn bản có mục đích chính là cung cấp thông tin khách quan, chính xác, có thể kiểm chứng (qua tên người, địa điểm, thời gian, số liệu thực tế) bằng ngôn ngữ sáng rõ, tường minh.<br>• <strong>Văn bản thông tin tổng hợp:</strong> Bên cạnh phương thức thuyết minh chủ đạo, người viết có thể <em>lồng ghép các yếu tố miêu tả, tự sự, biểu cảm hoặc nghị luận</em> để thông tin trở nên sinh động, hấp dẫn hơn nhưng tuyệt đối không được làm sai lệch dữ kiện."
      },
      {
        term: "Phân biệt Dữ kiện (Sự kiện) và Ý kiến (Quan điểm)",
        definition: "• <strong>Dữ kiện (Fact):</strong> Những thông tin khách quan, số liệu, sự việc đã xảy ra trên thực tế, có thể kiểm chứng đúng/sai.<br>• <strong>Ý kiến/Quan điểm (Opinion):</strong> Cách nhìn nhận, đánh giá, suy luận hoặc thái độ chủ quan của người viết trước dữ kiện đó."
      },
      {
        term: "Phương tiện ngôn ngữ & Phương tiện phi ngôn ngữ",
        definition: "• <strong>Phương tiện ngôn ngữ:</strong> Hệ thống nhan đề, sa-pô (đoạn dẫn), các đề mục in đậm, từ ngữ chuyên ngành, câu văn.<br>• <strong>Phương tiện phi ngôn ngữ:</strong> Hình ảnh chụp, bản đồ, sơ đồ, biểu đồ, bảng số liệu, infographic, kí hiệu và cách trình bày font chữ/màu sắc nhằm trực quan hoá, so sánh hoặc định lượng thông tin."
      },
      {
        term: "Bản tin báo chí & Đánh giá độ tin cậy",
        definition: "Khi đọc một bản tin cần kiểm tra: <strong>Nguồn phát hành</strong> có uy tín không? <strong>Thời gian</strong> đưa tin có cập nhật không? Cách <strong>chọn lọc và sắp xếp chi tiết</strong> (thường theo mô hình tháp ngược: quan trọng nhất lên đầu) có khách quan hay thiên kiến? Tiêu đề và lời trích dẫn có trung thực với nội dung không?"
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Sự sống và cái chết",
        author: "Trịnh Xuân Thuận (trích Từ điển yêu thích bầu trời và các vì sao)",
        genre: "Văn bản thông tin phổ biến khoa học",
        isPracticeReading: false,
        summary: [
          "<strong>Sự sống nhìn từ lịch sử vũ trụ và Trái Đất:</strong> Tác giả dẫn người đọc ngược dòng thời gian 3,8 tỉ năm kể từ khi sự sống xuất hiện trên Trái Đất; phân biệt các vật vô sinh (đá, nước, nguyên tử) với các sinh vật sống có khả năng tự sao chép ADN, trao đổi chất và tiến hoá.",
          "<strong>Ý nghĩa tiến hoá của cái chết và sự tuyệt chủng:</strong> Qua các đợt đại tuyệt chủng trong lịch sử địa chất (như sự biến mất của khủng long 65 triệu năm trước do thiên thạch va chạm), cái chết và sự tuyệt chủng không chỉ là sự huỷ diệt mà còn mở đường cho sự đa dạng sinh học mới phát triển, dẫn tới sự ra đời của loài người."
        ],
        analysis: [
          "<strong>Đặc sắc văn bản khoa học – suy tưởng:</strong> Kết hợp các số liệu thiên văn, cổ sinh vật học chính xác với lối diễn đạt giàu hình ảnh và những suy ngẫm triết học sâu sắc về quy luật sinh – tử trong vũ trụ."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Nghệ thuật truyền thống của người Việt",
        author: "Nguyễn Văn Huyên (trích Văn minh Việt Nam)",
        genre: "Văn bản thông tin khảo cứu văn hoá",
        isPracticeReading: false,
        summary: [
          "<strong>Tầm vóc tâm hồn và thẩm mĩ của người Việt trong nghệ thuật:</strong> Nghệ thuật truyền thống Việt Nam gắn bó mật thiết với tín ngưỡng tôn giáo và môi trường thiên nhiên.",
          "<strong>Khảo sát các lĩnh vực tiêu biểu:</strong> Từ <em>kiến trúc</em> (chùa Một Cột, đình làng, lăng tẩm Huế hài hoà với cảnh quan, phát triển theo chiều ngang hơn chiều cao), <em>điêu khắc</em> (gỗ, đá, tượng Phật chùa Tây Phương đạt tới đỉnh cao tả thực nội tâm) đến <em>đồ đồng, gốm sứ, sơn mài, khảm xà cừ</em> tinh xảo."
        ],
        analysis: [
          "<strong>Phương pháp trình bày khảo cứu:</strong> Phân loại hệ thống theo từng ngành nghệ thuật; kết hợp nhận định khái quát với việc miêu tả chi tiết các hiện vật tiêu biểu và hình ảnh minh hoạ cụ thể."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Phục hồi tầng ozone: Thành công hiếm hoi của nỗ lực toàn cầu",
        author: "Lê My",
        genre: "Bản tin / Bài báo khoa học – môi trường",
        isPracticeReading: false,
        summary: [
          "<strong>Thông tin chính từ báo cáo Liên Hợp Quốc:</strong> Nhờ Nghị định thư Montreal (1987) loại bỏ 99% các chất làm suy giảm tầng ozone (như CFC), lỗ thủng tầng ozone đang phục hồi rõ rệt và dự kiến khôi phục hoàn toàn vào năm 2040 (trên toàn cầu) và năm 2066 (tại Nam Cực).",
          "<strong>Bài học cho cuộc chiến chống biến đổi khí hậu:</strong> Sự đồng thuận giữa các nhà khoa học, chính phủ và doanh nghiệp toàn cầu trong việc cứu tầng ozone là minh chứng sống động cho thấy nhân loại hoàn toàn có thể hợp tác giải quyết các khủng hoảng môi trường."
        ],
        analysis: [
          "<strong>Cấu trúc bản tin hiện đại:</strong> Nhan đề nêu bật kết quả tích cực; sa-pô tóm tắt thông tin cốt lõi; thân bài dẫn nguồn báo cáo của WMO/LHQ, mốc thời gian cụ thể và đồ thị/hình ảnh vệ tinh NASA minh hoạ diện tích lỗ thủng ozone qua các năm."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Tính cách của cây",
        author: "Pê-tơ Vô-lê-lê-ben (trích Đời sống bí ẩn của cây)",
        genre: "Văn bản thông tin sinh thái học",
        isPracticeReading: true,
        summary: [
          "Quan sát ba cây sồi mọc cạnh nhau trong cùng điều kiện đất đai, ánh sáng nhưng mỗi cây lại có thời điểm rụng lá mùa thu và cách phản ứng trước gió bão, sâu bệnh khác nhau, cho thấy thực vật cũng có khả năng cảm nhận, ghi nhớ và 'tính cách' sinh học riêng biệt."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Nhận diện cách tác giả kết hợp tri thức lâm nghiệp chính xác với thủ pháp nhân hoá, miêu tả gần gũi để khơi dậy tình yêu và ý thức bảo vệ rừng."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Sử dụng phương tiện phi ngôn ngữ trong văn bản thông tin",
      concepts: [
        "<strong>Các loại phương tiện phi ngôn ngữ thường dùng:</strong><br>• <em>Hình ảnh chụp / Tranh vẽ:</em> Minh hoạ trực quan diện mạo hiện vật, cảnh quan.<br>• <em>Sơ đồ / Bản đồ:</em> Thể hiện vị trí không gian hoặc quy trình, cấu trúc hệ thống.<br>• <em>Bảng biểu / Đồ thị / Infographic:</em> Tổng hợp và so sánh số liệu định lượng nhanh chóng.",
        "<strong>Nguyên tắc sử dụng hiệu quả:</strong><br>1. Phương tiện phi ngôn ngữ phải gắn trực tiếp với nội dung đoạn văn bên cạnh, có <strong>số hiệu, tên hình/biểu đồ, chú giải kí hiệu, đơn vị đo và ghi rõ nguồn trích dẫn</strong>.<br>2. Lời văn đi kèm dùng để phân tích, rút ra nhận xét từ hình/bảng chứ không chép lặp lại máy móc toàn bộ con số đã có trong bảng."
      ],
      examples: [
        {
          wrong: "Đưa một biểu đồ diện tích tầng ozone vào bài viết nhưng không có tên biểu đồ, không ghi đơn vị đo và không có dòng nào trong bài nhắc tới biểu đồ đó.",
          right: "Đặt 'Hình 1: Biến động diện tích lỗ thủng tầng ozone tại Nam Cực giai đoạn 1979 – 2022 (Nguồn: NASA)' ngay sau đoạn phân tích kết quả Nghị định thư Montreal và chỉ rõ xu hướng thu hẹp trên đồ thị.",
          note: "Đảm bảo sự kết nối chặt chẽ giữa phương tiện ngôn ngữ và phương tiện phi ngôn ngữ."
        }
      ]
    },
    viet: {
      title: "Viết một văn bản nội quy hoặc văn bản hướng dẫn nơi công cộng",
      requirements: [
        "Xác định rõ địa điểm áp dụng (thư viện trường học, phòng thí nghiệm, bảo tàng, khu di tích lịch sử, công viên...) và đối tượng thực hiện.",
        "Trình bày khoa học theo các đề mục hoặc đánh số thứ tự rõ ràng (những điều cần làm / được phép làm và những điều không được làm; hoặc các bước thực hiện theo trình tự thao tác).",
        "Ngôn ngữ chuẩn mực, hành chính – công vụ: câu văn ngắn gọn, đơn nghĩa, dùng từ ngữ chỉ quy định nhất quán (<em>Đề nghị, Yêu cầu, Nghiêm cấm, Tuyệt đối không...</em>); kết hợp biển báo/biểu tượng trực quan (icons) nếu phù hợp."
      ],
      steps: [
        {
          step: "Bước 1: Chuẩn bị viết",
          detail: "Chọn không gian công cộng cần soạn nội quy/hướng dẫn; liệt kê các hành vi cần điều chỉnh để đảm bảo an toàn, trật tự, vệ sinh và văn minh."
        },
        {
          step: "Bước 2: Xây dựng bố cục văn bản",
          detail: "Gồm 3 phần: (1) Phần đầu: Tên cơ quan/đơn vị quản lí, tiêu đề lớn (NỘI QUY THƯ VIỆN / HƯỚNG DẪN THAM QUAN...), mục đích chung; (2) Phần nội dung chính: Các điều khoản đánh số 1, 2, 3... sắp xếp từ quy định chung đến quy định cụ thể; (3) Phần cuối: Trách nhiệm thi hành và xử lí vi phạm."
        },
        {
          step: "Bước 3: Soạn thảo văn bản & Thiết kế trực quan",
          detail: "Viết câu văn dứt khoát, rõ ràng; sử dụng chữ in đậm cho từ khoá và biểu tượng phi ngôn ngữ minh hoạ."
        },
        {
          step: "Bước 4: Kiểm tra và chỉnh sửa",
          detail: "Rà soát xem có quy định nào mơ hồ, trùng lặp hoặc thiếu khả thi không."
        }
      ]
    },
    noiVaNghe: {
      title: "Thảo luận về một văn bản nội quy hoặc hướng dẫn nơi công cộng",
      speakerTasks: [
        "Trình bày bản dự thảo nội quy/hướng dẫn, giải thích lí do đưa ra từng điều khoản và cách bố trí các kí hiệu trực quan.",
        "Tiếp thu các góp ý hợp lí để chỉnh sửa điều khoản cho ngắn gọn, khả thi và dễ thực hiện hơn."
      ],
      listenerTasks: [
        "Đánh giá bản nội quy theo các tiêu chí: Đã bao quát đủ các tình huống thực tế chưa? Câu chữ có dễ hiểu không? Các biểu tượng phi ngôn ngữ có rõ nghĩa không?"
      ]
    },
    cungCoMoRong: [
      "So sánh mục đích viết và cách sử dụng ngôn ngữ trong 3 văn bản: <em>Sự sống và cái chết</em> (khoa học vũ trụ – sinh học), <em>Nghệ thuật truyền thống của người Việt</em> (khảo cứu văn hoá) và <em>Phục hồi tầng ozone</em> (bản tin môi trường).",
      "Thực hành thiết kế một bản Infographic kết hợp nội quy và hướng dẫn sử dụng Phòng thực hành Tin học hoặc Thư viện số của nhà trường."
    ]
  },

  9: {
    num: 9,
    volume: 2,
    title: "Hành trang cuộc sống",
    subtitle: "Vị thế con người trong vũ trụ, Sự lựa chọn đường đời & Bài luận về bản thân",
    genreFocus: "Văn bản nghị luận – khoa học suy tưởng, Thơ triết lí hiện đại, Tự truyện/Hồi kí & Nhật kí",
    vietnameseFocus: "Sử dụng phương tiện phi ngôn ngữ: Biểu đồ, sơ đồ (Biểu đồ tròn, Sơ đồ Venn, Biểu đồ thời gian, Sơ đồ cây)",
    writingFocus: "Viết bài luận về bản thân",
    speakingFocus: "Thuyết trình về một vấn đề xã hội có sử dụng kết hợp phương tiện ngôn ngữ và phương tiện phi ngôn ngữ",
    diagramCaption: "Sơ đồ 4 loại Biểu đồ/Sơ đồ thông dụng (Tròn – Venn – Thời gian – Cây) và Cấu trúc Bài luận về bản thân (Trải nghiệm → Suy ngẫm → Giá trị sống)",
    triThucNguVan: [
      {
        term: "Các loại Biểu đồ & Sơ đồ thông dụng",
        definition: "• <strong>Biểu đồ tròn (Pie chart):</strong> Thể hiện cơ cấu, tỉ lệ phần trăm (%) của các thành phần trong một tổng thể.<br>• <strong>Sơ đồ Venn (Venn diagram):</strong> Sử dụng các vòng tròn giao nhau để so sánh điểm giống nhau (phần giao) và khác nhau giữa hai hay nhiều đối tượng.<br>• <strong>Biểu đồ thời gian (Timeline):</strong> Thể hiện tiến trình diễn biến của các sự kiện theo trục thời gian.<br>• <strong>Sơ đồ cây (Tree diagram):</strong> Thể hiện cấu trúc phân cấp thứ bậc hoặc quan hệ nguyên nhân – hệ quả nhiều nhánh."
      },
      {
        term: "Bài luận về bản thân (Personal Essay / Statement)",
        definition: "Kiểu văn bản nghị luận trong đó người viết thể hiện <strong>quan điểm, kiến giải, giá trị sống và cá tính của chính mình</strong> dựa trên những trải nghiệm thực tế và tri thức đã tích luỹ. Lưu ý: Bài luận về bản thân <strong>không phải là bản khai lí lịch hay bảng liệt kê thành tích</strong>, mà là cuộc đối thoại chân thành để trả lời câu hỏi: <em>Mình là ai? Trải nghiệm nào đã làm thay đổi nhận thức của mình? Mình hướng tới giá trị và mục tiêu gì?</em>"
      }
    ],
    vanBanDoc: [
      {
        order: "Văn bản 1",
        title: "Về chính chúng ta",
        author: "Các-lô Rô-ve-li (Carlo Rovelli – trích Bảy bài học hay nhất về vật lí)",
        genre: "Văn bản khoa học – triết luận",
        isPracticeReading: false,
        summary: [
          "<strong>Vị trí thực sự của con người trong vũ trụ:</strong> Tác giả đặt câu hỏi 'Chúng ta giữ vị trí nào trong vũ trụ bao la và kì diệu mà vật lí học hiện đại mô tả?'. Con người không phải trung tâm tách biệt đứng ngoài tự nhiên mà là một bộ phận cấu thành từ chính những nguyên tử và quy luật vật lí của vũ trụ.",
          "<strong>Bản chất ham hiểu biết và giới hạn của loài người:</strong> Loài người là sinh vật tự nhiên duy nhất biết tò mò khám phá vũ trụ, nhưng lại đang tàn phá chính ngôi nhà Trái Đất của mình. Sự hiểu biết khoa học dạy chúng ta thái độ khiêm nhường, biết trân trọng sự sống mong manh và gắn kết với tự nhiên."
        ],
        analysis: [
          "<strong>Nghệ thuật lập luận triết lí:</strong> Kết hợp tri thức vật lí lượng tử, vũ trụ học hiện đại với giọng văn trữ tình, giàu chất thơ và những câu hỏi tự vấn sâu sắc về thân phận và trách nhiệm của nhân loại."
        ]
      },
      {
        order: "Văn bản 2",
        title: "Con đường không chọn (The Road Not Taken)",
        author: "Rô-bớt Phơ-rốt (Robert Frost)",
        genre: "Thơ triết lí hiện đại Mỹ",
        isPracticeReading: false,
        summary: [
          "<strong>Tình huống phân vân trước ngã rẽ:</strong> Trong khu rừng lá vàng mùa thu, người lữ hành đứng trước hai con đường rẽ làm đôi, tiếc rằng không thể đi cả hai cùng lúc.",
          "<strong>Quyết định lựa chọn và tính không thể quay lại:</strong> Nhìn kĩ thì hai con đường thực chất mòn tương đương nhau và đều phủ đầy lá chưa in dấu chân đen. Người lữ hành chọn một lối đi với ý nghĩ để dành lối kia cho một ngày khác, dù biết rõ 'đường dẫn nối sang đường' nên chẳng mấy khi có dịp quay lại.",
          "<strong>Khổ cuối – Hồi tưởng trong tương lai:</strong> 'Tôi sẽ kể chuyện này với một tiếng thở dài / Ở đâu đó cách đây nhiều năm và nhiều năm nữa: / Hai con đường rẽ lối trong rừng, và tôi – / Tôi đã chọn con đường ít người đi hơn, / Và điều đó đã làm thay đổi tất cả'."
        ],
        analysis: [
          "<strong>Chiều sâu đa nghĩa của bài thơ:</strong> Không nên giản lược bài thơ thành khẩu hiệu đơn giản 'hãy luôn chọn lối đi khác biệt'. Điểm tinh tế nhất của Frost nằm ở chỗ: hai con đường lúc chọn gần như giống hệt nhau, nhưng khi đã bước đi thì không thể quay đầu, và con người thường nhìn lại quá khứ bằng cả niềm kiêu hãnh lẫn tiếng thở dài nuối tiếc về con đường mình đã không chọn."
        ]
      },
      {
        order: "Văn bản 3",
        title: "Một đời như kẻ tìm đường",
        author: "Phan Văn Trường",
        genre: "Văn bản nghị luận / Tự sự trải nghiệm",
        isPracticeReading: false,
        summary: [
          "<strong>Hành trình 'không chọn mà hoá ra chọn':</strong> Nhìn lại cuộc đời làm việc qua nhiều châu lục và lĩnh vực khác nhau, tác giả chia sẻ những ngã rẽ mà ban đầu ông tưởng là bị hoàn cảnh đưa đẩy.",
          "<strong>Chiêm nghiệm về chiếc la bàn nội tâm:</strong> Thực chất, chính thái độ sống tận tâm, không ngừng học hỏi, dám đón nhận thử thách, trọng chữ tín và tình người đã trở thành 'chiếc la bàn' dẫn lối. Cuộc đời không có con đường trải sẵn hoàn hảo; hạnh phúc nằm ngay trên hành trình tìm đường với tâm thế chủ động và cống hiến."
        ],
        analysis: [
          "<strong>Sức thuyết phục từ trải nghiệm thực tế:</strong> Giọng văn tâm tình, chân thực, kết nối tự nhiên những câu chuyện đời riêng của một chuyên gia quốc tế với bài học định hướng nghề nghiệp và nhân sinh cho thế hệ trẻ."
        ]
      },
      {
        order: "Thực hành đọc",
        title: "Mãi mãi tuổi hai mươi",
        author: "Nguyễn Văn Thạc (trích nhật kí Mãi mãi tuổi hai mươi)",
        genre: "Nhật kí thời chiến",
        isPracticeReading: true,
        summary: [
          "Những trang nhật kí viết trên đường hành quân ra chiến trường của người lính trẻ – cựu sinh viên khoa Toán Đại học Tổng hợp Hà Nội: vừa chan chứa nỗi nhớ Hà Nội, nhớ gia đình, khát khao học tập vừa rực cháy lí tưởng hiến dâng tuổi hai mươi đẹp nhất cho ngày thống nhất đất nước."
        ],
        analysis: [
          "<strong>Hướng tự đọc & Vận dụng:</strong> Cảm nhận vẻ đẹp chân thực của thể loại nhật kí; đặt những rung động cá nhân trong bối cảnh lịch sử chống Mỹ cứu nước để hiểu sự lựa chọn lí tưởng cao đẹp của thế hệ thanh niên Việt Nam."
        ]
      }
    ],
    thucHanhTiengViet: {
      title: "Đọc hiểu và sử dụng Biểu đồ, Sơ đồ trong văn bản và bài thuyết trình",
      concepts: [
        "<strong>Quy trình 4 bước đọc hiểu một biểu đồ/sơ đồ:</strong><br>1. Đọc <em>nhan đề</em> để xác định đối tượng, không gian và phạm vi thời gian của dữ liệu.<br>2. Đọc <em>chú giải, đơn vị tính</em> (%, triệu người, năm...) và các trục toạ độ/nhánh sơ đồ.<br>3. Nhận diện <em>xu hướng chính, tỉ lệ lớn nhất/nhỏ nhất</em> hoặc mối quan hệ giao nhau/phân cấp.<br>4. Rút ra thông điệp cốt lõi kết nối với phần lời văn (không suy diễn vượt quá phạm vi dữ liệu biểu đồ cung cấp).",
        "<strong>Lựa chọn đúng loại sơ đồ khi viết và thuyết trình:</strong> Muốn so sánh hai tác phẩm văn học -> dùng <em>Sơ đồ Venn</em>; muốn tóm tắt cuộc đời Nguyễn Trãi -> dùng <em>Biểu đồ thời gian (Timeline)</em>; muốn phân loại hệ thống thể loại -> dùng <em>Sơ đồ cây</em>; muốn biểu diễn tỉ lệ thời gian tự học trong ngày -> dùng <em>Biểu đồ tròn</em>."
      ],
      examples: [
        {
          wrong: "Dùng biểu đồ tròn để trình bày diễn biến các mốc lịch sử khởi nghĩa Lam Sơn từ năm 1418 đến năm 1427.",
          right: "Dùng biểu đồ thời gian (trục niên biểu Timeline) để trình bày diễn biến các mốc lịch sử khởi nghĩa Lam Sơn từ năm 1418 đến năm 1427.",
          note: "Biểu đồ tròn dùng cho cơ cấu tỉ lệ %; diễn biến theo năm tháng phải dùng biểu đồ/trục thời gian."
        }
      ]
    },
    viet: {
      title: "Viết bài luận về bản thân",
      requirements: [
        "Xác định một thông điệp hoặc câu hỏi trọng tâm làm trục xuyên suốt bài luận (một trải nghiệm đáng nhớ, một thất bại giúp trưởng thành, một giá trị sống cốt lõi, hoặc một ước mơ/lựa chọn hướng đi tương lai).",
        "Kể lại trải nghiệm cá nhân một cách chân thực, chọn lọc chi tiết có sức gợi, từ đó phân tích sâu sắc sự chuyển biến trong nhận thức, suy nghĩ và hành động của bản thân.",
        "Giọng văn chân thành, khiêm tốn nhưng thể hiện rõ bản sắc cá nhân và tư duy độc lập; không phô trương thành tích hay sao chép văn mẫu."
      ],
      steps: [
        {
          step: "Bước 1: Tự khám phá và xác định chủ đề",
          detail: "Tự hỏi: Khoảnh khắc, thử thách hay quyết định nào đã định hình con người mình hôm nay? Mình muốn người đọc (hội đồng tuyển sinh, thầy cô, bạn bè) hiểu điều gì nhất về giá trị sống của mình?"
        },
        {
          step: "Bước 2: Lập dàn ý theo mạch 'Trải nghiệm – Suy ngẫm – Trưởng thành'",
          detail: "Mở bài: Khơi gợi bằng một tình huống, hình ảnh ẩn dụ hoặc câu hỏi cá nhân độc đáo. Thân bài: (1) Tái hiện trải nghiệm/thử thách thực tế; (2) Phân tích những trăn trở, bài học nhận ra từ trải nghiệm ấy; (3) Khẳng định giá trị sống hiện tại và định hướng hành động cho tương lai. Kết bài: Đúc kết thông điệp mang dấu ấn riêng."
        },
        {
          step: "Bước 3: Viết bài luận",
          detail: "Kết hợp nhuần nhuyễn yếu tố tự sự, biểu cảm với lập luận nghị luận; để sự việc tự nói lên phẩm chất thay vì dùng tính từ tự khen chung chung."
        },
        {
          step: "Bước 4: Đọc lại và hoàn thiện",
          detail: "Kiểm tra sự kết nối mạch lạc giữa câu chuyện trải nghiệm và triết lí rút ra; chỉnh sửa câu chữ cho tự nhiên, truyền cảm hứng."
        }
      ]
    },
    noiVaNghe: {
      title: "Thuyết trình về một vấn đề xã hội có sử dụng kết hợp phương tiện ngôn ngữ và phi ngôn ngữ",
      speakerTasks: [
        "Xây dựng bài thuyết trình có luận đề rõ ràng về một vấn đề hành trang tuổi trẻ (chọn nghề, kĩ năng tự học, trách nhiệm môi trường, văn hoá đọc...).",
        "Thiết kế slide tinh gọn (ít chữ, giàu tính trực quan), lồng ghép hợp lí biểu đồ, sơ đồ Venn/sơ đồ cây có ghi nguồn số liệu rõ ràng để minh chứng cho luận điểm.",
        "Kết hợp ngôn ngữ nói truyền cảm với giao tiếp bằng ánh mắt, cử chỉ và tương tác trực tiếp với người nghe."
      ],
      listenerTasks: [
        "Quan sát đồng thời lập luận của người nói và thông tin trên sơ đồ/biểu đồ để đánh giá tính thuyết phục.",
        "Đặt câu hỏi trao đổi về ý nghĩa số liệu và tính khả thi của các giải pháp được đề xuất."
      ]
    },
    cungCoMoRong: [
      "Tổng kết hành trình 9 bài học Ngữ Văn 10 qua việc tự thiết kế một <strong>Sơ đồ tư duy (Mindmap)</strong> tổng hợp các thể loại văn học, văn bản nghị luận, văn bản thông tin và các kiểu bài viết đã rèn luyện.",
      "Viết hoàn chỉnh một Bài luận về bản thân (khoảng 600 – 800 chữ) như một hồ sơ hành trang bước vào ngưỡng cửa trưởng thành."
    ]
  }
};

// KIẾN THỨC DÙNG CHUNG CHO CẢ HAI TẬP & BẢN ĐỒ THỂ LOẠI – SẢN PHẨM HỌC TẬP
const sharedKnowledge = {
  literaryAnalysisSteps: [
    {
      step: 1,
      title: "Xác định thể loại, bối cảnh & tình huống/mạch cảm xúc",
      desc: "Nhận diện đúng thể loại (thần thoại, truyền kì, sử thi, chèo, tuồng, thơ hai-cư, thơ Đường luật, thơ mới, truyện ngắn hiện đại...), bối cảnh lịch sử – văn hoá và tình huống truyện hoặc mạch vận động cảm xúc."
    },
    {
      step: 2,
      title: "Tìm chủ đề / luận đề và thông điệp tư tưởng",
      desc: "Xác định vấn đề trung tâm và tư tưởng, thông điệp mà văn bản gửi gắm; lưu ý không đồng nhất chủ đề toàn tác phẩm với một chi tiết đơn lẻ."
    },
    {
      step: 3,
      title: "Phân tích bằng chứng nghệ thuật trong văn bản",
      desc: "Khảo sát các yếu tố hình thức cụ thể: từ ngữ, hình ảnh, kết cấu, sự kiện, lời thoại, vần, nhịp, ngôi kể, điểm nhìn, nhân vật và các chi tiết nghệ thuật đắt giá."
    },
    {
      step: 4,
      title: "Giải thích tác dụng của lựa chọn nghệ thuật",
      desc: "Chỉ rõ vì sao tác giả chọn hình thức nghệ thuật ấy và nó góp phần làm nổi bật chủ đề, tư tưởng, cảm xúc như thế nào (không chỉ gọi tên biện pháp tu từ rồi dừng lại)."
    },
    {
      step: 5,
      title: "Kết nối bối cảnh & Trải nghiệm tiếp nhận của người đọc",
      desc: "Đặt tác phẩm trong bối cảnh lịch sử – văn hoá thời đại và liên hệ với suy ngẫm, trải nghiệm của bản thân, nhưng không suy diễn tuỳ tiện vượt quá bằng chứng văn bản."
    }
  ],
  writingAndResearchRules: [
    {
      title: "Cấu trúc một đoạn văn lập luận chuẩn",
      icon: "fa-Paragraph",
      content: "Gồm 5 thành tố liên kết chặt chẽ: <strong>(1) Câu chủ đề nêu luận điểm/ý chính → (2) Lí lẽ giải thích, phân tích → (3) Bằng chứng (dẫn chứng/trích dẫn) cụ thể → (4) Phân tích tác dụng/ý nghĩa của bằng chứng → (5) Câu kết/chuyển đoạn</strong>."
    },
    {
      title: "Phân biệt Bài nghị luận cảm nhận & Báo cáo nghiên cứu",
      icon: "fa-scale-balanced",
      content: "• <strong>Bài nghị luận phân tích, đánh giá:</strong> Bộc lộ góc nhìn cảm thụ và đánh giá thẩm mĩ của người viết về chủ đề, nghệ thuật tác phẩm hoặc vấn đề xã hội.<br>• <strong>Báo cáo nghiên cứu:</strong> Mang tính khách quan, học thuật; bắt buộc có câu hỏi/phạm vi nghiên cứu, phương pháp, nguồn tư liệu, trình bày phát hiện theo đề mục và kết luận dựa trên bằng chứng."
    },
    {
      title: "Nguyên tắc liêm chính học thuật & Phòng tránh đạo văn",
      icon: "fa-shield-halved",
      content: "Khi trích nguyên văn phải đặt trong dấu ngoặc kép <code>“...”</code>, dùng dấu <code>[...]</code> nếu tỉnh lược và ghi rõ tác giả/nguồn. Ngay cả khi diễn giải lại ý tưởng hay số liệu của người khác bằng lời văn của mình (trích dẫn gián tiếp) cũng bắt buộc phải dẫn nguồn minh bạch."
    }
  ],
  speakingAndListeningRules: [
    {
      role: "Người nói / Người thuyết trình",
      icon: "fa-microphone-lines",
      points: [
        "Xác định rõ mục đích nói và đối tượng người nghe để chọn giọng điệu, ngôn từ phù hợp.",
        "Tổ chức bài nói thành 3 phần (Mở đầu – Triển khai luận điểm & bằng chứng – Kết luận) với các từ ngữ chuyển tiếp mạch lạc.",
        "Chỉ sử dụng phương tiện phi ngôn ngữ (slide, hình ảnh, biểu đồ, âm thanh) khi thực sự làm sáng tỏ nội dung; không để slide nhiều chữ thay thế lời nói."
      ]
    },
    {
      role: "Người nghe / Người thảo luận",
      icon: "fa-ear-listen",
      points: [
        "Tập trung lắng nghe, ghi chép nhanh các luận điểm chính, bằng chứng đắt giá và những câu hỏi cần làm rõ.",
        "Phản hồi và tranh biện dựa trên căn cứ, bằng chứng khoa học/văn bản; tuyệt đối không công kích cá nhân hay chỉ nhận xét hình thức bên ngoài.",
        "Tôn trọng lượt lời và sự khác biệt trong cách cảm thụ văn học cũng như góc nhìn xã hội."
      ]
    }
  ],
  curriculumMap: [
    {
      bai: 1,
      tap: "Tập 1",
      title: "Sức hấp dẫn của truyện kể",
      readingFocus: "Truyện kể, thần thoại, truyền kì, truyện ngắn hiện đại (Thần Trụ Trời, Tản Viên từ Phán sự lục, Chữ người tử tù)",
      vietnameseFocus: "Sử dụng từ Hán Việt; cốt truyện, người kể chuyện, nhân vật",
      writingProduct: "Nghị luận phân tích, đánh giá một tác phẩm truyện",
      speakingListening: "Giới thiệu, đánh giá nội dung và nghệ thuật của một truyện"
    },
    {
      bai: 2,
      tap: "Tập 1",
      title: "Vẻ đẹp của thơ ca",
      readingFocus: "Thơ trữ tình, thơ hai-cư Nhật Bản, thơ Đường luật (Thu hứng), Thơ mới (Mùa xuân chín), phê bình thơ",
      vietnameseFocus: "Sửa lỗi dùng từ, lỗi trật tự từ; nhân vật trữ tình, hình ảnh, vần, nhịp, đối, thi luật",
      writingProduct: "Nghị luận phân tích, đánh giá một tác phẩm thơ",
      speakingListening: "Giới thiệu, đánh giá nội dung và nghệ thuật của một bài thơ"
    },
    {
      bai: 3,
      tap: "Tập 1",
      title: "Nghệ thuật thuyết phục trong văn nghị luận",
      readingFocus: "Văn nghị luận trung đại và hiện đại (Hiền tài là nguyên khí của quốc gia, Yêu và đồng cảm, Chữ bầu lên nhà thơ)",
      vietnameseFocus: "Mạch lạc và liên kết trong văn bản; luận đề, luận điểm, lí lẽ, bằng chứng",
      writingProduct: "Bài luận thuyết phục người khác từ bỏ một thói quen hay một quan niệm",
      speakingListening: "Thảo luận về một vấn đề xã hội có ý kiến khác nhau"
    },
    {
      bai: 4,
      tap: "Tập 1",
      title: "Sức sống của sử thi",
      readingFocus: "Sử thi / anh hùng ca (Héc-to từ biệt Ăng-đrô-mác – I-li-át, Đăm Săn đi bắt Nữ Thần Mặt Trời – Đăm Săn)",
      vietnameseFocus: "Trích dẫn, cước chú và kí hiệu đánh dấu phần tỉnh lược [...]",
      writingProduct: "Báo cáo nghiên cứu về một vấn đề",
      speakingListening: "Trình bày báo cáo kết quả nghiên cứu"
    },
    {
      bai: 5,
      tap: "Tập 1",
      title: "Tích trò sân khấu dân gian",
      readingFocus: "Chèo cổ (Xúy Vân giả dại), Tuồng đồ (Huyện đường), văn bản thông tin Múa rối nước",
      vietnameseFocus: "Tích trò, vai diễn, lời thoại, chỉ dẫn sân khấu, tính ước lệ và diễn xướng dân gian",
      writingProduct: "Báo cáo nghiên cứu về một vấn đề văn hoá truyền thống Việt Nam",
      speakingListening: "Lắng nghe và phản hồi về một báo cáo kết quả nghiên cứu"
    },
    {
      bai: 6,
      tap: "Tập 2",
      title: "Nguyễn Trãi – “Dành còn để trợ dân này”",
      readingFocus: "Văn học trung đại, tác gia Nguyễn Trãi (Bình Ngô đại cáo, Bảo kính cảnh giới 43, Dục Thuý sơn)",
      vietnameseFocus: "Sử dụng từ Hán Việt (tiếp theo); thể Cáo, thơ Nôm Đường luật thất ngôn xen lục ngôn",
      writingProduct: "Nghị luận về một vấn đề xã hội",
      speakingListening: "Thảo luận về một vấn đề xã hội có ý kiến khác nhau"
    },
    {
      bai: 7,
      tap: "Tập 2",
      title: "Quyền năng của người kể chuyện",
      readingFocus: "Truyện văn xuôi và quyền năng người kể chuyện (Người cầm quyền khôi phục uy quyền, Dưới bóng hoàng lan, Một chuyện đùa nho nhỏ)",
      vietnameseFocus: "Biện pháp chêm xen và liệt kê; ngôi kể thứ nhất/thứ ba, điểm nhìn nghệ thuật",
      writingProduct: "Nghị luận phân tích, đánh giá chủ đề và nhân vật trong một tác phẩm truyện",
      speakingListening: "Thảo luận về một vấn đề văn học có ý kiến khác nhau"
    },
    {
      bai: 8,
      tap: "Tập 2",
      title: "Thế giới đa dạng của thông tin",
      readingFocus: "Văn bản thông tin tổng hợp, khảo cứu, bản tin (Sự sống và cái chết, Nghệ thuật truyền thống của người Việt, Phục hồi tầng ozone)",
      vietnameseFocus: "Sử dụng phương tiện phi ngôn ngữ (hình ảnh, số liệu, đồ thị); phân biệt dữ kiện và ý kiến",
      writingProduct: "Viết một văn bản nội quy hoặc văn bản hướng dẫn nơi công cộng",
      speakingListening: "Thảo luận về một văn bản nội quy hoặc hướng dẫn nơi công cộng"
    },
    {
      bai: 9,
      tap: "Tập 2",
      title: "Hành trang cuộc sống",
      readingFocus: "Văn bản khoa học suy tưởng, thơ triết lí, tự sự trải nghiệm (Về chính chúng ta, Con đường không chọn, Một đời như kẻ tìm đường)",
      vietnameseFocus: "Biểu đồ/sơ đồ (Biểu đồ tròn, Sơ đồ Venn, Biểu đồ thời gian, Sơ đồ cây); phương tiện phi ngôn ngữ",
      writingProduct: "Viết bài luận về bản thân",
      speakingListening: "Thuyết trình vấn đề xã hội có kết hợp phương tiện ngôn ngữ và phi ngôn ngữ"
    }
  ]
};

const allLessons = { ...lessonsP1, ...lessonsP2 };

const fullData = {
  volumes,
  lessons: allLessons,
  sharedKnowledge
};

const outPath = path.join(__dirname, 'van10_data.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(fullData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/van10_data.js! Total lessons:', Object.keys(allLessons).length);
