// scratch/hdtnhn10_data_p2.js
// Hoạt động trải nghiệm, hướng nghiệp 10 – Bộ Kết nối tri thức với cuộc sống (Chủ đề 7 – 11 + Bản đồ sản phẩm & Thuật ngữ)

const fs = require('fs');
const path = require('path');
const { streams, topicsP1 } = require('./hdtnhn10_data_p1.js');

const topicsP2 = {
  7: {
    num: 7,
    title: "Bảo tồn cảnh quan thiên nhiên",
    stream: "Hướng đến tự nhiên",
    color: "teal",
    pages: "tr. 46–50",
    subtitle: "Nhận xét, đánh giá hành vi của tổ chức và cá nhân đối với cảnh quan thiên nhiên; lập và thực hiện kế hoạch tuyên truyền kêu gọi bảo vệ cảnh quan địa phương",
    diagramCaption: "Sơ đồ Nhận diện – Đánh giá hành vi đối với cảnh quan thiên nhiên & Quy trình 4 bước tổ chức chương trình tuyên truyền bảo tồn cảnh quan",
    objectives: [
      "Nhận xét, đánh giá được những hành vi, việc làm của các tổ chức, cá nhân trong việc bảo tồn cảnh quan thiên nhiên tại địa phương.",
      "Xây dựng và thực hiện được kế hoạch tuyên truyền, kêu gọi mọi người cùng chung tay bảo vệ cảnh quan thiên nhiên.",
      "Tích cực tham gia các hoạt động chăm sóc, gìn giữ vẻ đẹp cảnh quan thiên nhiên trong đời sống hằng ngày."
    ],
    activities: [
      {
        step: "Hoạt động 1 (Khám phá – Kết nối)",
        name: "Tìm hiểu, nhận xét và đánh giá hành vi bảo tồn cảnh quan thiên nhiên",
        goal: "Phân biệt rõ những việc làm đúng đắn cần nhân rộng và những hành vi xâm hại cảnh quan cần lên án, ngăn chặn.",
        process: [
          "Khảo sát các danh lam thắng cảnh, khu bảo tồn, công viên, hồ nước, đồi rừng hoặc bờ biển tại địa phương.",
          "Lập bảng phân loại và đánh giá <strong>ít nhất 5 hành vi</strong> của tổ chức/cá nhân đối với cảnh quan:<br>• <strong>Hành vi phù hợp (tích cực):</strong> Quy hoạch lối đi sinh thái hài hòa tự nhiên; đặt thùng rác phân loại và biển chỉ dẫn văn minh; trồng cây bản địa phủ xanh; thu gom rác sau khi dã ngoại; khai thác du lịch gắn với bảo tồn.<br>• <strong>Hành vi chưa phù hợp (tiêu cực):</strong> Khắc tên, vẽ bậy lên vách đá/thân cây cổ thụ/di tích; bẻ cành, hái hoa, săn bắt chim thú hoang dã; xả rác nhựa xuống hồ/biển; xây dựng bê tông hóa trái phép phá vỡ cảnh quan tự nhiên.<br>• <strong>Việc làm học sinh có thể tham gia ngay:</strong> Không xả rác, không viết vẽ bậy; tham gia thu gom rác thải nhựa; thiết kế biển báo thân thiện nhắc nhở du khách."
        ],
        product: "Bảng nhận xét, đánh giá ít nhất 5 hành vi của tổ chức/cá nhân đối với cảnh quan thiên nhiên (kèm lí do)."
      },
      {
        step: "Hoạt động 2 & 3 (Rèn luyện)",
        name: "Thiết kế và lập Kế hoạch chi tiết tuyên truyền bảo vệ cảnh quan thiên nhiên",
        goal: "Biết lập kế hoạch truyền thông hoàn chỉnh từ thông điệp, kịch bản đến phân công hậu cần.",
        process: [
          "<strong>Bước 1 – Xác định khung chương trình tuyên truyền:</strong> Tên cảnh quan cần bảo vệ; Mục tiêu (nêu bật giá trị vật chất, tinh thần, du lịch của cảnh quan và trách nhiệm của người dân); Đối tượng tuyên truyền; Thông điệp chính; Hình thức (triển lãm ảnh trước/sau, thuyết trình, tiểu phẩm, phát tờ rơi); Thời gian & Địa điểm; Đơn vị phối hợp (Đoàn xã/phường, Ban quản lý khu di tích/cảnh quan).",
          "<strong>Bước 2 – Phân công nhiệm vụ chi tiết trong nhóm:</strong><br>• Nhóm 1: Xây dựng kịch bản chương trình và viết bài tuyên truyền.<br>• Nhóm 2: Sưu tầm hình ảnh, thiết kế pano, áp phích, khẩu hiệu.<br>• Nhóm 3: Tập luyện tiết mục văn nghệ / tiểu phẩm mở màn.<br>• Nhóm 4: Liên hệ địa điểm, chuẩn bị âm thanh, máy chiếu và phiếu thu thập phản hồi."
        ],
        product: "Bản kế hoạch chi tiết chương trình tuyên truyền kêu gọi bảo vệ cảnh quan thiên nhiên và bộ sản phẩm truyền thông."
      },
      {
        step: "Hoạt động 4 & 5 (Rèn luyện – Vận dụng)",
        name: "Thực hiện tuyên truyền, thu thập phản hồi & Vận dụng bảo vệ cảnh quan",
        goal: "Tổ chức buổi tuyên truyền thực tế, lắng nghe ý kiến người dân để rút kinh nghiệm và duy trì hành động bảo tồn.",
        process: [
          "Tổ chức buổi tuyên truyền theo kịch bản đã chuẩn bị; phát phiếu khảo sát ngắn hoặc phỏng vấn nhanh người tham dự về cảm nhận, mức độ đồng tình và cam kết hành động.",
          "Viết báo cáo tổng kết: số lượng người tham dự, hiệu quả đạt được, bài học kinh nghiệm; đồng thời đăng tải hình ảnh đẹp của cảnh quan địa phương lên trang truyền thông của lớp/trường."
        ],
        product: "Báo cáo kết quả buổi tuyên truyền kèm ý kiến phản hồi của người tham dự."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 7: Đánh giá Hành vi & Kế hoạch Tuyên truyền Bảo tồn Cảnh quan",
      fields: [
        { label: "1. Tên cảnh quan thiên nhiên tại địa phương em chọn tìm hiểu", placeholder: "VD: Hồ nước trung tâm / Bãi biển / Rừng thông / Danh thắng núi đá tại địa phương..." },
        { label: "2. Năm hành vi đã quan sát (3 hành vi tích cực & 2 hành vi tiêu cực cần chấn chỉnh)", placeholder: "VD: Tích cực: Trồng cây, đặt thùng rác, dọn vệ sinh; Tiêu cực: Xả vỏ chai nhựa, khắc tên lên cây/đá..." },
        { label: "3. Thông điệp kêu gọi bảo vệ cảnh quan & Hình thức tuyên truyền", placeholder: "VD: 'Giữ màu xanh cảnh quan – Giữ niềm tự hào quê hương' (Triển lãm ảnh + Thuyết trình dưới cờ)..." },
        { label: "4. Phân công nhiệm vụ chính & Sản phẩm truyền thông dự kiến", placeholder: "VD: Thiết kế 5 poster infographic, 1 bài thuyết trình 5 phút và 1 video ngắn giới thiệu vẻ đẹp cảnh quan..." }
      ]
    },
    application: [
      "Thực hiện nguyên tắc 'Không để lại gì ngoài những dấu chân, không lấy đi gì ngoài những bức ảnh' khi đi tham quan, dã ngoại tại các cảnh quan thiên nhiên.",
      "Chủ động nhắc nhở lịch sự khi thấy bạn bè hoặc du khách có hành vi xả rác, bẻ cành cây tại khu danh thắng."
    ],
    evaluationCriteria: [
      "Liệt kê được ít nhất 5 hành vi của tổ chức, cá nhân liên quan đến cảnh quan thiên nhiên.",
      "Nhận xét, đánh giá được tính đúng/sai và tác động của ít nhất 5 hành vi đối với cảnh quan thiên nhiên.",
      "Xây dựng được ít nhất 1 kế hoạch tuyên truyền bảo vệ cảnh quan thiên nhiên đầy đủ các mục.",
      "Trực tiếp tham gia ít nhất 1 hoạt động tuyên truyền, bảo vệ cảnh quan thiên nhiên tại trường hoặc địa phương."
    ]
  },

  8: {
    num: 8,
    title: "Bảo vệ môi trường tự nhiên",
    stream: "Hướng đến tự nhiên",
    color: "emerald",
    pages: "tr. 51–56",
    subtitle: "Khảo sát thực trạng môi trường đất – nước – không khí tại địa phương, phân tích tác động của con người, thuyết trình ý nghĩa và thực hiện ít nhất 3 giải pháp bảo vệ môi trường",
    diagramCaption: "Sơ đồ Quy trình 5 bước Nghiên cứu & Hành động Bảo vệ môi trường tự nhiên (Khảo sát thực trạng → Phân tích tác động → Đề xuất giải pháp → Thuyết trình → Thực hiện & Báo cáo)",
    objectives: [
      "Khảo sát và phân tích được thực trạng môi trường tự nhiên (đất, nước, không khí, sinh vật) tại địa phương và tác động hai chiều (tích cực, tiêu cực) của con người tới môi trường.",
      "Thuyết trình được trước tập thể về ý nghĩa và sự cần thiết của việc bảo vệ môi trường tự nhiên.",
      "Đề xuất và trực tiếp thực hiện được các giải pháp thiết thực nhằm bảo vệ môi trường tự nhiên ở địa phương."
    ],
    activities: [
      {
        step: "Hoạt động 1 & 2 (Khám phá – Kết nối)",
        name: "Khảo sát thực trạng môi trường địa phương & Đánh giá tác động của con người",
        goal: "Thu thập số liệu, hình ảnh thực tế về môi trường đất, nước, không khí và chỉ rõ nguyên nhân từ hoạt động sản xuất, sinh hoạt.",
        process: [
          "<strong>Bước 1 – Lập phiếu khảo sát thực trạng môi trường:</strong> Chọn 1 thành phần môi trường trọng tâm tại địa phương (ví dụ: <em>Môi trường đất canh tác</em> hoặc <em>Môi trường nước kênh rạch/sông hồ</em>). Ghi rõ: Địa điểm khảo sát, Thời gian, Biểu hiện quan sát được (màu nước, mùi, rác thải, độ tơi xốp của đất...) và hình ảnh minh chứng.",
          "<strong>Bước 2 – Phân tích tác động tích cực và tiêu cực của con người (Ví dụ chuẩn SGK):</strong><br>• <em>Đối với môi trường đất:</em> Luân canh, xen canh, bón phân hữu cơ ви sinh giúp tăng độ phì nhiêu (<strong>tích cực</strong>); ngược lại, lạm dụng phân bón hóa học, thuốc trừ sâu hóa học và vứt túi ni-lông khó phân hủy làm đất chai cứng, thoái hóa, ô nhiễm (<strong>tiêu cực</strong>).<br>• <em>Đối với môi trường nước:</em> Xây dựng hệ thống xử lí nước thải sinh hoạt/chăn nuôi bằng hầm biogas đạt chuẩn trước khi xả ra ngoài (<strong>tích cực</strong>); xả trực tiếp nước thải chăn nuôi, hóa chất công nghiệp, dầu mỡ sinh hoạt và rác thải xuống ao hồ, kênh mương làm ô nhiễm nguồn nước (<strong>tiêu cực</strong>)."
        ],
        product: "Phiếu khảo sát thực trạng môi trường địa phương và Bảng phân tích tác động Tích cực – Tiêu cực của con người."
      },
      {
        step: "Hoạt động 3 (Rèn luyện)",
        name: "Đề xuất các giải pháp bảo vệ môi trường gắn chặt với từng nguyên nhân",
        goal: "Đưa ra giải pháp đúng trúng nguyên nhân, khả thi với điều kiện học sinh và người dân địa phương.",
        process: [
          "Từ nguyên nhân đã khảo sát, đề xuất hệ thống giải pháp cụ thể:<br>1. <strong>Nhóm giải pháp giảm thiểu ô nhiễm nguồn nước:</strong> Không đổ dầu mỡ thừa, hóa chất tẩy rửa mạnh trực tiếp xuống cống thoát nước; không vứt rác, xác động vật xuống sông hồ; tiết kiệm nước sạch; vận động các hộ chăn nuôi dùng đệm lót sinh học / hầm biogas.<br>2. <strong>Nhóm giải pháp bảo vệ môi trường đất & giảm rác thải nhựa:</strong> Hạn chế sử dụng túi ni-lông và đồ nhựa dùng một lần (thay bằng túi vải, bình nước cá nhân); phân loại rác tại nguồn (ủ rác hữu cơ làm phân compost); trồng cây xanh chống xói mòn đất.<br>3. <strong>Nhóm giải pháp tuyên truyền & kiến nghị:</strong> Tuyên truyền tại khu dân cư và kiến nghị chính quyền địa phương xử lý các điểm tập kết rác tự phát."
        ],
        product: "Bảng đề xuất ít nhất 3 giải pháp bảo vệ môi trường tự nhiên (Nguyên nhân – Giải pháp – Người thực hiện – Cách theo dõi)."
      },
      {
        step: "Hoạt động 4, 5 & 6 (Rèn luyện – Vận dụng)",
        name: "Thuyết trình ý nghĩa bảo vệ môi trường (5–7 phút) & Triển khai giải pháp thực tế",
        goal: "Nâng cao kỹ năng thuyết trình thuyết phục trước cộng đồng và biến giải pháp trên giấy thành kết quả thực tế.",
        process: [
          "<strong>Chuẩn bị và trình bày Bài thuyết trình (độ dài tối đa 1 trang A4, thời lượng 5–7 phút):</strong> Cấu trúc 4 phần: (1) Vai trò sống còn của môi trường tự nhiên đối với sức khỏe và sinh kế; (2) Thực trạng và hình ảnh khảo sát thực tế tại địa phương; (3) Nguyên nhân do tác động của con người; (4) Thông điệp kêu gọi và các giải pháp hành động ngay.",
          "<strong>Triển khai giải pháp & Lập báo cáo có minh chứng:</strong> Thực hiện ít nhất 3 giải pháp đã chọn (như phân loại rác tại nguồn, thu gom pin cũ/nhựa tái chế, trồng cây, làm nước rửa chén sinh học từ vỏ cam/bồ hòn) và ghi báo cáo kèm hình ảnh trước – sau."
        ],
        product: "Bài thuyết trình (1 trang A4 / 5–7 phút) và Báo cáo kết quả thực hiện giải pháp bảo vệ môi trường kèm ảnh minh chứng."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 8: Phiếu Khảo sát Môi trường & Đề cương Thuyết trình (5–7 phút)",
      fields: [
        { label: "1. Vấn đề môi trường địa phương đã khảo sát & Thực trạng ghi nhận", placeholder: "VD: Nguồn nước kênh/hồ tại địa phương còn tình trạng rác thải nhựa nổi ven bờ và nước thải sinh hoạt..." },
        { label: "2. Tác động tích cực & tiêu cực của con người tới vấn đề đó", placeholder: "VD: Tích cực: Có đội thu gom rác định kỳ; Tiêu cực: Một số hộ dân vẫn bỏ túi ni-lông và đổ dầu mỡ xuống cống..." },
        { label: "3. Ba giải pháp thiết thực em và nhóm trực tiếp thực hiện", placeholder: "VD: 1. Phân loại rác hữu cơ/vô cơ tại nhà; 2. Dùng bình nước cá nhân & túi vải; 3. Ra quân Ngày Chủ nhật xanh..." },
        { label: "4. Dàn ý ngắn bài thuyết trình 5–7 phút (Mở đầu – Thực trạng – Giải pháp – Thông điệp kết)", placeholder: "VD: Mở đầu bằng câu hỏi gợi mở → Chiếu 3 ảnh khảo sát thực tế → Nêu 3 hành động xanh → Kêu gọi cam kết..." }
      ]
    },
    application: [
      "Duy trì lối sống xanh hằng ngày: tắt điện khi ra khỏi phòng, khóa vòi nước, phân loại rác tại gia đình, hạn chế tối đa đồ nhựa dùng một lần.",
      "Tích cực tham gia các phong trào 'Đổi rác lấy cây', 'Thu gom pin cũ', 'Ngày Chủ nhật xanh' do Đoàn trường và địa phương phát động."
    ],
    evaluationCriteria: [
      "Khảo sát và phân tích được thực trạng môi trường tự nhiên cùng nguyên nhân do tác động của con người tại địa phương.",
      "Thực hiện được bài thuyết trình (5–7 phút) về ý nghĩa của việc bảo vệ môi trường tự nhiên cho ít nhất 1 nhóm đối tượng.",
      "Đề xuất và trực tiếp thực hiện được ít nhất 3 giải pháp thiết thực để bảo vệ môi trường tự nhiên."
    ]
  },

  9: {
    num: 9,
    title: "Tìm hiểu nghề nghiệp",
    stream: "Hướng nghiệp",
    color: "blue",
    pages: "tr. 57–62",
    subtitle: "Phân loại các hoạt động Sản xuất – Kinh doanh – Dịch vụ ở địa phương, phương pháp tìm hiểu thông tin nghề, điều kiện an toàn – sức khỏe nghề nghiệp và trải nghiệm thực tế nghề",
    diagramCaption: "Sơ đồ Phân loại 3 lĩnh vực nghề nghiệp (Sản xuất – Kinh doanh – Dịch vụ) & 6 yếu tố trong Hồ sơ Tìm hiểu và Trải nghiệm Nghề nghiệp",
    objectives: [
      "Xác định và phân loại được các hoạt động sản xuất, kinh doanh, dịch vụ hiện có ở địa phương.",
      "Nêu được cách tìm hiểu các thông tin cơ bản về nghề/nhóm nghề mình quan tâm từ các nguồn đáng tin cậy.",
      "Phân tích được các yêu cầu về năng lực, phẩm chất và điều kiện đảm bảo an toàn, sức khỏe nghề nghiệp thông qua hoạt động tìm hiểu và trải nghiệm thực tế nghề."
    ],
    activities: [
      {
        step: "Hoạt động 1 (Khám phá – Kết nối)",
        name: "Tìm hiểu và phân loại các hoạt động Sản xuất, Kinh doanh, Dịch vụ ở địa phương",
        goal: "Hiểu rõ bản chất và căn cứ phân biệt 3 lĩnh vực hoạt động kinh tế – nghề nghiệp chính tại địa phương.",
        process: [
          "<strong>Căn cứ phân loại 3 nhóm hoạt động nghề nghiệp chuẩn SGK:</strong><br>1. <strong>Hoạt động Sản xuất:</strong> Tạo ra sản phẩm vật chất trực tiếp (nông sản, thực phẩm, hàng thủ công, máy móc, vật liệu xây dựng...). <em>Ví dụ:</em> Trồng lúa/cây ăn quả, nuôi trồng thủy sản, chế biến gỗ, may mặc, sản xuất gốm sứ, cơ khí.<br>2. <strong>Hoạt động Kinh doanh (Thương mại):</strong> Tổ chức mua bán, phân phối, trao đổi hàng hóa/sản phẩm nhằm mục đích sinh lợi. <em>Ví dụ:</em> Cửa hàng tạp hóa, siêu thị, đại lý vật tư nông nghiệp, kinh doanh thương mại điện tử.<br>3. <strong>Hoạt động Dịch vụ:</strong> Phục vụ trực tiếp các nhu cầu đa dạng về tinh thần, tri thức, sức khỏe, đi lại của con người, có tổ chức và được trả công. <em>Ví dụ:</em> Dịch vụ y tế, giáo dục, du lịch – khách sạn, ngân hàng, vận tải, bưu chính viễn thông, sửa chữa điện tử.",
          "Lập danh mục các nghề đang phát triển mạnh tại địa phương vào đúng 3 cột: <em>Sản xuất – Kinh doanh – Dịch vụ</em>."
        ],
        product: "Bảng phân loại các hoạt động Sản xuất – Kinh doanh – Dịch vụ tại địa phương kèm căn cứ phân loại."
      },
      {
        step: "Hoạt động 2, 3 & 4 (Khám phá – Rèn luyện)",
        name: "Cách thu thập thông tin nghề, Yêu cầu năng lực – phẩm chất & An toàn – Sức khỏe nghề nghiệp",
        goal: "Biết thu thập đủ 6 nhóm thông tin cốt lõi của một nghề, đặc biệt chú trọng điều kiện an toàn và sức khỏe nghề nghiệp.",
        process: [
          "<strong>6 nội dung thông tin cơ bản cần tìm hiểu về một nghề/nhóm nghề:</strong> (1) Tên nghề và đối tượng lao động; (2) Mục đích và các công việc chính của nghề; (3) Công cụ, phương tiện lao động; (4) Môi trường và điều kiện làm việc; (5) Yêu cầu về <strong>Năng lực chuyên môn & Phẩm chất đạo đức</strong>; (6) <strong>Nguy cơ tai nạn/bệnh nghề nghiệp và biện pháp đảm bảo An toàn – Sức khỏe nghề nghiệp</strong>.",
          "<strong>4 Cách thu thập thông tin nghề đáng tin cậy:</strong><br>• Khảo sát, quan sát trực tiếp tại cơ sở sản xuất, kinh doanh, dịch vụ.<br>• Phỏng vấn trực tiếp người đang làm nghề, nghệ nhân hoặc nhà tuyển dụng.<br>• Tra cứu cổng thông tin hướng nghiệp chính thống của Bộ GD&ĐT, Bộ LĐ-TB&XH, bản mô tả công việc (Job Description).<br>• Trải nghiệm làm thử một số công việc an toàn, vừa sức dưới sự hướng dẫn của người phụ trách."
        ],
        product: "Phiếu thông tin chi tiết về 1 nghề/nhóm nghề quan tâm (bao gồm mục An toàn & Sức khỏe nghề nghiệp)."
      },
      {
        step: "Hoạt động 5, 6 & 7 (Rèn luyện – Vận dụng)",
        name: "Lập kế hoạch, Thực hiện trải nghiệm nghề thực tế & Báo cáo kết quả",
        goal: "Trực tiếp quan sát/làm thử công việc thực tế để cảm nhận rõ yêu cầu của nghề và tự rèn luyện bản thân.",
        process: [
          "<strong>Lập Kế hoạch trải nghiệm nghề:</strong> Xác định tên nghề trải nghiệm, mục tiêu, thời gian, địa điểm, các công việc sẽ quan sát/làm thử (tuân thủ tuyệt đối quy định an toàn của cơ sở), người hướng dẫn và sản phẩm thu hoạch.",
          "<strong>Báo cáo kết quả trải nghiệm nghề:</strong> Trình bày bằng bài thuyết trình, slide ảnh, video hoặc trưng bày sản phẩm làm thử; nêu rõ cảm nhận cá nhân và những phẩm chất, năng lực bản thân cần rèn luyện thêm."
        ],
        product: "Bản kế hoạch trải nghiệm nghề, Báo cáo thu hoạch sau trải nghiệm và Kế hoạch tự rèn luyện phẩm chất/năng lực."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 9: Hồ sơ Tìm hiểu & Báo cáo Trải nghiệm Nghề nghiệp",
      fields: [
        { label: "1. Phân loại 3 hoạt động nghề tiêu biểu tại địa phương (Sản xuất / Kinh doanh / Dịch vụ)", placeholder: "VD: Sản xuất: Trồng cây ăn quả, cơ khí; Kinh doanh: Siêu thị mini; Dịch vụ: Du lịch sinh thái, công nghệ thông tin..." },
        { label: "2. Tên nghề em chọn tìm hiểu sâu & Các công việc, công cụ lao động chính", placeholder: "VD: Kỹ sư phần mềm / Bác sĩ / Thiết kế đồ họa / Đầu bếp – Công việc chính & công cụ sử dụng..." },
        { label: "3. Yêu cầu về Năng lực & Phẩm chất của người làm nghề đó (Ít nhất 4 yêu cầu)", placeholder: "VD: Năng lực chuyên môn, ngoại ngữ, giải quyết vấn đề; Phẩm chất: Kiên trì, tỉ mỉ, trung thực, trách nhiệm..." },
        { label: "4. Điều kiện làm việc & Biện pháp đảm bảo An toàn – Sức khỏe nghề nghiệp", placeholder: "VD: Nguy cơ mỏi mắt, đau cột sống hoặc tiếp xúc máy móc → Biện pháp: Tư thế chuẩn, nghỉ giải lao, trang bị bảo hộ..." }
      ]
    },
    application: [
      "Chủ động quan sát và trò chuyện với bố mẹ, người thân về công việc, niềm vui và những vất vả, quy tắc an toàn trong nghề nghiệp của họ.",
      "Tham gia các buổi tham quan hướng nghiệp tại doanh nghiệp, làng nghề truyền thống do nhà trường tổ chức."
    ],
    evaluationCriteria: [
      "Xác định và phân biệt đúng các hoạt động sản xuất, kinh doanh, dịch vụ ở địa phương.",
      "Nêu được ít nhất 4 thông tin cơ bản về nghề/nhóm nghề mà bản thân quan tâm.",
      "Trình bày được ít nhất 3 cách thu thập thông tin nghề nghiệp đáng tin cậy.",
      "Phân tích được ít nhất 4 yêu cầu về phẩm chất và năng lực của người làm nghề.",
      "Trình bày rõ điều kiện làm việc và biện pháp đảm bảo an toàn, sức khỏe nghề nghiệp của nghề đã tìm hiểu."
    ]
  },

  10: {
    num: 10,
    title: "Hiểu bản thân để chọn nghề phù hợp",
    stream: "Hướng nghiệp",
    color: "amber",
    pages: "tr. 63–67",
    subtitle: "Tập hợp dữ liệu đặc điểm bản thân, đối chiếu với yêu cầu của nhóm nghề dự định chọn, đánh giá mức độ phù hợp và thực hiện kế hoạch rèn luyện rút ngắn khoảng cách năng lực",
    diagramCaption: "Sơ đồ Ma trận Đối chiếu 4 yếu tố Bản thân (Sở thích – Năng lực – Tính cách – Sức khỏe/Điều kiện) với Yêu cầu Nhóm nghề để chọn nghề phù hợp",
    objectives: [
      "Giải thích được vì sao phải chọn nghề phù hợp với đặc điểm cá nhân và nhu cầu thực tế của xã hội.",
      "Đánh giá được mức độ phù hợp của bản thân (sở thích, năng lực, tính cách, sức khỏe, điều kiện gia đình) với nhóm nghề định lựa chọn dựa trên dữ liệu cụ thể.",
      "Lựa chọn được cách rèn luyện phù hợp về phẩm chất và năng lực để đáp ứng yêu cầu của nhóm nghề dự định."
    ],
    activities: [
      {
        step: "Hoạt động 1 & 2 (Khám phá – Kết nối)",
        name: "Ý nghĩa của việc chọn nghề phù hợp & Tập hợp hồ sơ dữ liệu về bản thân",
        goal: "Hiểu rõ hậu quả của việc chọn nghề theo cảm tính/trào lưu và tổng hợp đầy đủ dữ liệu khách quan về chính mình.",
        process: [
          "<strong>Vì sao cần chọn nghề phù hợp?</strong> Chọn nghề phù hợp giúp phát huy tối đa tiềm năng, tạo hứng thú say mê làm việc lâu dài, đảm bảo sức khỏe và mang lại giá trị cho xã hội; tránh tình trạng chán nản, bỏ dở giữa chừng hoặc làm việc kém hiệu quả khi chọn nghề chỉ theo phong trào hay áp đặt.",
          "<strong>Tập hợp dữ liệu bản thân (Kết nối kết quả từ Chủ đề 2 và Chủ đề 9):</strong><br>1. <em>Sở thích nghề nghiệp:</em> Thích làm việc với con người, với dữ liệu/con số, với máy móc kỹ thuật hay với nghệ thuật sáng tạo?<br>2. <em>Năng lực học tập & Năng lực đặc thù:</em> Các môn học vượt trội, kỹ năng giao tiếp, ngoại ngữ, tin học, tư duy logic.<br>3. <em>Đặc điểm tính cách:</em> Hướng nội hay hướng ngoại, cẩn thận tỉ mỉ hay linh hoạt năng động?<br>4. <em>Sức khỏe, thể lực & Điều kiện hoàn cảnh gia đình.</em>"
        ],
        product: "Hồ sơ dữ liệu tổng hợp về đặc điểm bản thân phục vụ định hướng nghề nghiệp."
      },
      {
        step: "Hoạt động 3 (Rèn luyện)",
        name: "Đối chiếu đặc điểm bản thân với yêu cầu của nhóm nghề & Tranh biện quan điểm chọn nghề",
        goal: "Xác định chính xác những điểm đã phù hợp và những khoảng trống năng lực cần bù đắp.",
        process: [
          "Lập <strong>Bảng đối chiếu 4 cột</strong> chuẩn SGK: <em>(1) Yêu cầu của nghề/nhóm nghề định chọn – (2) Đặc điểm hiện tại của bản thân – (3) Đánh giá mức độ phù hợp (Phù hợp cao / Khá phù hợp / Chưa phù hợp) – (4) Những phẩm chất, năng lực cần rèn luyện thêm</em>.",
          "Thực hành tranh biện có căn cứ về các quan điểm chọn nghề phổ biến: (1) <em>'Chỉ nên chọn nghề đang hot, lương cao'</em>; (2) <em>'Chọn nghề theo truyền thống gia đình là an toàn nhất'</em>; (3) <em>'Sở thích có thể thay đổi nhưng năng lực cốt lõi mới quyết định sự gắn bó lâu dài'</em>."
        ],
        product: "Bảng đối chiếu 'Đặc điểm bản thân – Yêu cầu nghề – Mức độ phù hợp – Điều cần rèn luyện'."
      },
      {
        step: "Hoạt động 4 & 5 (Rèn luyện – Vận dụng)",
        name: "Ra quyết định lựa chọn nhóm nghề dự kiến & Thực hiện kế hoạch rèn luyện",
        goal: "Đưa ra lựa chọn nhóm nghề có cơ sở khoa học và bắt tay vào rèn luyện qua hoạt động thực tế.",
        process: [
          "Từ bảng đối chiếu, xác định nhóm nghề phù hợp nhất với bản thân ở thời điểm hiện tại.",
          "Lựa chọn các hoạt động trong và ngoài nhà trường (câu lạc bộ chuyên môn, dự án khoa học kỹ thuật, hoạt động thiện nguyện, làm thử việc thực tế) để vừa rèn luyện phẩm chất, năng lực còn thiếu, vừa kiểm nghiệm lại mức độ phù hợp của bản thân với nghề."
        ],
        product: "Kế hoạch rèn luyện phẩm chất, năng lực theo nhóm nghề đã chọn và Nhật ký cập nhật kết quả tự đánh giá."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 10: Bảng Đối chiếu Đặc điểm Bản thân với Yêu cầu Nhóm nghề",
      fields: [
        { label: "1. Nhóm nghề / Nghề cụ thể em dự định lựa chọn", placeholder: "VD: Nhóm nghề Công nghệ thông tin / Y Dược / Kinh tế - Marketing / Sư phạm / Kỹ thuật cơ điện tử..." },
        { label: "2. Những đặc điểm của bản thân ĐÃ PHÙ HỢP với yêu cầu nghề", placeholder: "VD: Yêu thích môn Toán - Tin, tư duy logic tốt, kiên trì giải quyết bài khó, sức khỏe tốt..." },
        { label: "3. Những điểm bản thân CÒN THIẾU hoặc chưa phù hợp cần cải thiện", placeholder: "VD: Kỹ năng giao tiếp tiếng Anh và thuyết trình trước đám đông còn hạn chế; đôi khi làm việc chưa khoa học..." },
        { label: "4. Biện pháp rèn luyện cụ thể để rút ngắn khoảng cách năng lực", placeholder: "VD: Luyện nghe nói tiếng Anh 30 phút/ngày, tham gia CLB truyền thông/tin học của trường..." }
      ]
    },
    application: [
      "Định kỳ mỗi học kỳ cập nhật lại Bảng đối chiếu bản thân – nghề nghiệp khi phát hiện thêm năng khiếu mới hoặc có thêm thông tin trải nghiệm thực tế.",
      "Tích cực tham gia các bài trắc nghiệm khám phá sở thích nghề nghiệp (như mật mã Holland) kết hợp với kết quả học tập thực tế để có góc nhìn toàn diện."
    ],
    evaluationCriteria: [
      "Phân tích và giải thích được lựa chọn nghề/nhóm nghề của bản thân dựa trên dữ liệu đối chiếu cụ thể.",
      "Chỉ ra được rõ ràng những điểm phù hợp và những hạn chế/khoảng cách năng lực của bản thân so với yêu cầu nghề.",
      "Xây dựng và thực hiện được các biện pháp rèn luyện phẩm chất, năng lực phù hợp với định hướng nghề nghiệp."
    ]
  },

  11: {
    num: 11,
    title: "Lập kế hoạch học tập, rèn luyện theo định hướng nghề nghiệp",
    stream: "Hướng nghiệp",
    color: "indigo",
    pages: "tr. 68–72",
    subtitle: "Tìm hiểu hệ thống các trường đào tạo liên quan đến nghề dự định, thực hành tham vấn thầy cô – gia đình – bạn bè và lập kế hoạch học tập, rèn luyện toàn diện",
    diagramCaption: "Sơ đồ Quy trình 4 bước Chủ đề 11: Tìm hiểu Hệ thống trường đào tạo → Tham vấn Hướng nghiệp → Lập Kế hoạch Học tập & Rèn luyện → Thực hiện & Điều chỉnh",
    objectives: [
      "Thu thập và trình bày được các thông tin cơ bản về hệ thống các trường đào tạo (đại học, cao đẳng, trung cấp, trường nghề) liên quan đến nghề/nhóm nghề dự định lựa chọn.",
      "Biết cách chuẩn bị câu hỏi và thực hiện tham vấn ý kiến của thầy cô, gia đình, bạn bè về việc chọn nghề và định hướng học tập.",
      "Xây dựng và thực hiện được bản kế hoạch học tập, rèn luyện cụ thể của bản thân theo nhóm nghề đã lựa chọn."
    ],
    activities: [
      {
        step: "Hoạt động 1 (Khám phá – Kết nối)",
        name: "Tìm hiểu thông tin cơ bản về hệ thống các trường đào tạo nghề liên quan",
        goal: "Nắm được bức tranh toàn diện về các con đường đào tạo sau THPT và yêu cầu tuyển sinh của từng trường/ngành.",
        process: [
          "<strong>5 Thông tin cơ bản bắt buộc cần tìm hiểu về trường đào tạo:</strong><br>1. Tên trường đào tạo (Đại học, Học viện, Cao đẳng, Trung cấp chuyên nghiệp hoặc Trung tâm GDNN) và địa chỉ.<br>2. Các ngành/nghề đào tạo có liên quan đến định hướng của bản thân.<br>3. Phương thức tuyển sinh, tổ hợp môn xét tuyển và điểm chuẩn/yêu cầu đầu vào các năm gần đây.<br>4. Thời gian đào tạo, chương trình học, học phí và chính sách học bổng/hỗ trợ sinh viên.<br>5. Chuẩn đầu ra và cơ hội việc làm sau khi tốt nghiệp.",
          "<strong>Nguồn tra cứu chính thống:</strong> Đề án tuyển sinh trên website chính thức của trường, cổng thông tin tuyển sinh của Bộ GD&ĐT, Tổng cục Giáo dục nghề nghiệp, ngày hội tư vấn tuyển sinh – hướng nghiệp và phỏng vấn cựu sinh viên."
        ],
        product: "Báo cáo tổng hợp ít nhất 5 thông tin cơ bản về hệ thống trường đào tạo liên quan đến nghề lựa chọn."
      },
      {
        step: "Hoạt động 2 (Rèn luyện)",
        name: "Thực hành Tham vấn ý kiến thầy cô, gia đình và bạn bè về chọn nghề – hướng học",
        goal: "Biết lắng nghe góc nhìn giàu kinh nghiệm từ thầy cô, bố mẹ để hoàn thiện quyết định hướng nghiệp.",
        process: [
          "<strong>Quy trình 4 bước thực hiện Tham vấn hướng nghiệp hiệu quả:</strong><br>• <em>Bước 1 (Chuẩn bị trước buổi tham vấn):</em> Xác định rõ vấn đề còn băn khoăn (chọn tổ hợp môn nào, trường nào phù hợp học lực và kinh tế gia đình?); tóm tắt hồ sơ năng lực bản thân và chuẩn bị sẵn 3–5 câu hỏi trọng tâm.<br>• <em>Bước 2 (Tiến hành trao đổi):</em> Trình bày lễ phép, rõ ràng nguyện vọng và lí do chọn nghề của mình; đặt câu hỏi với thầy cô (giáo viên chủ nhiệm, giáo viên bộ môn, cán bộ tư vấn tâm lý), bố mẹ và bạn bè.<br>• <em>Bước 3 (Lắng nghe & Ghi chép):</em> Chăm chú lắng nghe, ghi chép đầy đủ các lời khuyên, phân tích thuận lợi – thách thức từ người tham vấn với thái độ cầu thị.<br>• <em>Bước 4 (Cân nhắc & Điều chỉnh):</em> Tổng hợp các ý kiến tham vấn để hoàn thiện kế hoạch học tập, rèn luyện.",
          "Thực hành đóng vai trên lớp: Người xin tham vấn (học sinh) và Người tham vấn (thầy cô / phụ huynh)."
        ],
        product: "Phiếu chuẩn bị câu hỏi và Biên bản ghi chép ý kiến tham vấn từ ít nhất 2 thầy cô hoặc người thân."
      },
      {
        step: "Hoạt động 3, 4, 5 & 6 (Rèn luyện – Vận dụng)",
        name: "Xây dựng, thực hiện và báo cáo Kế hoạch học tập, rèn luyện theo định hướng nghề nghiệp",
        goal: "Thiết lập bản kế hoạch hành động cụ thể cho các môn học xét tuyển và các phẩm chất – năng lực nghề nghiệp.",
        process: [
          "<strong>Cấu trúc Bản kế hoạch học tập và rèn luyện theo định hướng nghề nghiệp (Mẫu chuẩn SGK):</strong><br>• Thông tin chung: Họ tên, lớp, nghề/nhóm nghề lựa chọn, trường đào tạo mục tiêu.<br>• Tóm tắt yêu cầu của nghề & trường đào tạo đối chiếu với điểm mạnh/hạn chế hiện tại của bản thân.<br>• <strong>Kế hoạch học tập các môn văn hóa (đặc biệt là các môn trong tổ hợp xét tuyển):</strong> Mục tiêu điểm số từng học kỳ, thời gian biểu tự học mỗi ngày, phương pháp ôn luyện, hỏi bài thầy cô.<br>• <strong>Kế hoạch rèn luyện phẩm chất và năng lực nghề nghiệp:</strong> Rèn tính chăm chỉ, kỷ luật, kỹ năng giao tiếp, ngoại ngữ, công nghệ thông tin, thể lực (qua đọc sách chuyên ngành, viết nhật ký, tham gia CLB, làm việc nhóm và phụ việc gia đình).",
          "Triển khai thực hiện kế hoạch, định kỳ đối chiếu kết quả và báo cáo tổng kết trước lớp."
        ],
        product: "Bản kế hoạch học tập, rèn luyện theo định hướng nghề nghiệp hoàn chỉnh và Báo cáo tổng kết cuối năm học."
      }
    ],
    interactiveTemplate: {
      title: "Biểu mẫu thực hành Chủ đề 11: Kế hoạch Học tập & Rèn luyện theo Định hướng Nghề nghiệp",
      fields: [
        { label: "1. Nghề dự định chọn & Trường đào tạo mục tiêu (Tên trường, Ngành, Tổ hợp xét tuyển)", placeholder: "VD: Ngành Khoa học máy tính / Kinh tế đối ngoại / Y khoa – Tổ hợp xét tuyển A00 / A01 / D01 / B00..." },
        { label: "2. Ý kiến tham vấn quan trọng nhận được từ Thầy cô & Gia đình (Ít nhất 2 người)", placeholder: "VD: Cô chủ nhiệm khuyên cần nâng điểm môn Tiếng Anh lên 8.5+; Bố mẹ ủng hộ và khuyên rèn thêm sức khỏe..." },
        { label: "3. Kế hoạch nâng cao kết quả các môn học phục vụ định hướng nghề", placeholder: "VD: Dành 2 giờ/tối giải bài tập Toán - Lý - Anh; lập sổ tay từ vựng học thuật và hỏi thầy cô ngay phần chưa rõ..." },
        { label: "4. Kế hoạch rèn luyện phẩm chất & kỹ năng mềm hằng tuần", placeholder: "VD: Đọc 1 cuốn sách kỹ năng/tháng, rèn chạy bộ 3 buổi/tuần, chủ động nhận việc nhóm để rèn kỹ năng lãnh đạo..." }
      ]
    },
    application: [
      "Dán Bản kế hoạch học tập – rèn luyện tại góc học tập cá nhân để nhắc nhở bản thân kiên trì thực hiện mỗi ngày.",
      "Chủ động cập nhật thông tin tuyển sinh và chương trình đào tạo của các trường đại học, cao đẳng qua từng năm học lớp 10, 11, 12."
    ],
    evaluationCriteria: [
      "Trình bày được ít nhất 5 thông tin cơ bản về hệ thống trường đào tạo liên quan đến nghề dự định lựa chọn.",
      "Biết cách chuẩn bị câu hỏi và thực hiện xin ý kiến tham vấn từ ít nhất 2 thầy cô hoặc người thân trong gia đình.",
      "Xây dựng được bản kế hoạch học tập và rèn luyện đầy đủ, khả thi theo định hướng nghề/nhóm nghề đã chọn.",
      "Bước đầu thực hiện nghiêm túc kế hoạch và có ghi chép kết quả, điều chỉnh phù hợp."
    ]
  }
};

// BẢN ĐỒ SẢN PHẨM HỌC TẬP 11 CHỦ ĐỀ (DÙNG TRÊN WEBSITE)
const productMapTable = [
  { topicNum: 1, title: "Phát huy truyền thống nhà trường", focus: "Nội quy, truyền thống, thu hút bạn tham gia", deliverables: "Bảng nội quy – biện pháp; Hồ sơ 3 truyền thống trường; Kế hoạch sự kiện giáo dục truyền thống" },
  { topicNum: 2, title: "Khám phá bản thân", focus: "Tính cách, tư duy tích cực, quan điểm sống", deliverables: "Phiếu tự khám phá 3 nét tính cách; Sơ đồ tư duy tích cực; Kế hoạch rèn luyện tính cách" },
  { topicNum: 3, title: "Rèn luyện bản thân", focus: "Trách nhiệm, tự chủ, phản biện, tài chính", deliverables: "Bài lập luận phản biện đa chiều; Bản kế hoạch tài chính cá nhân (VD mục tiêu 5 triệu đồng) & Sổ thu chi" },
  { topicNum: 4, title: "Chủ động, tự tin trong học tập và giao tiếp", focus: "Chủ động học tập, tự tin, giao tiếp văn minh", deliverables: "Phương án xử lý tình huống tương tác; Nhật ký hành vi chủ động ở lớp – nhà – CLB" },
  { topicNum: 5, title: "Trách nhiệm với gia đình", focus: "Chăm sóc người thân, lao động, kinh tế hộ", deliverables: "Cách xử lý 4 tình huống gia đình; Kế hoạch việc nhà hằng tuần; Phương án đóng góp kinh tế hộ gia đình" },
  { topicNum: 6, title: "Tham gia xây dựng cộng đồng", focus: "Quan hệ xã hội, văn hóa ứng xử, cộng đồng", deliverables: "Danh sách 4 biện pháp thu hút cộng đồng; Kế hoạch tuyên truyền văn hóa ứng xử; Báo cáo hoạt động" },
  { topicNum: 7, title: "Bảo tồn cảnh quan thiên nhiên", focus: "Đánh giá hành vi, tuyên truyền bảo tồn cảnh quan", deliverables: "Bảng đánh giá 5 hành vi với cảnh quan; Kế hoạch chi tiết & Ấn phẩm tuyên truyền bảo tồn cảnh quan" },
  { topicNum: 8, title: "Bảo vệ môi trường tự nhiên", focus: "Khảo sát môi trường địa phương, thuyết trình, giải pháp", deliverables: "Phiếu khảo sát đất/nước; Đề xuất 3 giải pháp gắn nguyên nhân; Bài thuyết trình 5–7 phút; Báo cáo minh chứng" },
  { topicNum: 9, title: "Tìm hiểu nghề nghiệp", focus: "Nghề sản xuất – kinh doanh – dịch vụ, trải nghiệm, an toàn", deliverables: "Bảng phân loại nghề địa phương; Hồ sơ nghề & An toàn – sức khỏe nghề nghiệp; Báo cáo trải nghiệm nghề" },
  { topicNum: 10, title: "Hiểu bản thân để chọn nghề phù hợp", focus: "Đánh giá độ phù hợp bản thân – yêu cầu nghề", deliverables: "Bảng đối chiếu 4 cột (Yêu cầu nghề – Đặc điểm bản thân – Mức độ phù hợp – Điều cần rèn luyện)" },
  { topicNum: 11, title: "Lập kế hoạch học tập, rèn luyện hướng nghiệp", focus: "Trường đào tạo, tham vấn hướng nghiệp, kế hoạch", deliverables: "Báo cáo 5 thông tin trường đào tạo; Biên bản tham vấn (≥ 2 người); Bản kế hoạch học tập – rèn luyện" }
];

// TỪ ĐIỂN THUẬT NGỮ CHÍNH TRONG SÁCH (TRANG 73 SGK)
const glossaryTerms = [
  {
    term: "1. Dịch vụ (Service)",
    def: "Công việc phục vụ trực tiếp nhu cầu nhất định của nhiều người (về y tế, giáo dục, du lịch, vận tải, tài chính, thông tin...), được tổ chức chuyên nghiệp và được trả công."
  },
  {
    term: "2. Kế hoạch tài chính cá nhân",
    def: "Tập hợp các quyết định có tính toán về thu nhập, chi tiêu, tiết kiệm và đầu tư của cá nhân theo từng giai đoạn (ngắn hạn, trung hạn, dài hạn) nhằm đạt được mục tiêu tài chính hợp lí."
  },
  {
    term: "3. Kịch tương tác (Interactive Drama)",
    def: "Hình thức diễn kịch mở cho phép khán giả tham gia trực tiếp góp ý, đối thoại hoặc lên sân khấu cùng nhập vai diễn để thử nghiệm các phương án giải quyết tình huống thực tế."
  },
  {
    term: "4. Kinh doanh (Business)",
    def: "Việc tổ chức các hoạt động sản xuất, buôn bán hàng hóa hoặc cung ứng dịch vụ trên thị trường nhằm mục đích sinh lợi hợp pháp."
  },
  {
    term: "5. Năng lực (Competence)",
    def: "Khả năng, điều kiện chủ quan hoặc tự nhiên sẵn có (kết hợp kiến thức, kỹ năng và kinh nghiệm rèn luyện) để thực hiện một hoạt động nhất định đạt kết quả hiệu quả."
  },
  {
    term: "6. Phẩm chất (Character / Virtue)",
    def: "Tư cách đạo đức, giá trị cốt lõi bên trong của con người được thể hiện nhất quán qua thái độ, lời nói, hành vi và hành động ứng xử hằng ngày."
  },
  {
    term: "7. Phát triển cộng đồng (Community Development)",
    def: "Các hoạt động có tổ chức nhằm làm thay đổi theo hướng tốt đẹp, tiến bộ và bền vững hơn những giá trị chính trị, kinh tế, văn hóa, xã hội và môi trường của một cộng đồng dân cư."
  },
  {
    term: "8. Quan điểm sống & Tư duy tích cực",
    def: "Quan điểm sống là hệ thống niềm tin định hướng lối sống và hành động. Tư duy tích cực là cách nhìn nhận sự việc khách quan, đa chiều, hướng tới giải pháp xây dựng thay vì bi quan hay suy diễn tiêu cực."
  }
];

const allTopics = { ...topicsP1, ...topicsP2 };

const fullData = {
  streams,
  topics: allTopics,
  productMapTable,
  glossaryTerms
};

const outPath = path.join(__dirname, 'hdtnhn10_data.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(fullData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/hdtnhn10_data.js! Total topics:', Object.keys(allTopics).length);
