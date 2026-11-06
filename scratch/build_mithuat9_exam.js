const fs = require('fs');

const examQuestions = [
  {
    q: "Khái niệm 'Nguyên mẫu' trong thực hành sáng tạo mĩ thuật được hiểu là gì?",
    options: [
      "Bức tranh đã được đóng khung hoàn chỉnh",
      "Vật mẫu, hình mẫu trong đời sống thực tế làm căn cứ để quan sát, nghiên cứu và sáng tạo nghệ thuật",
      "Dụng cụ gọt bút chì",
      "Mẫu chữ kí của tác giả"
    ],
    answer: 1,
    explain: "Nguyên mẫu (Original model/prototype) là vật thể, con người, cảnh quan có thật trong đời sống mà từ đó người nghệ sĩ khai thác, cách điệu và chuyển hoá thành tác phẩm."
  },
  {
    q: "Trong nghệ thuật tạo hình, 'Hoà sắc' (Color harmony) đóng vai trò gì?",
    options: [
      "Làm cho bức tranh có càng nhiều màu sắc lộn xộn càng tốt",
      "Tạo nên mối liên kết thống nhất, hài hoà giữa các màu sắc và bộc lộ sắc thái biểu cảm của tác phẩm",
      "Chỉ dùng một màu duy nhất",
      "Tẩy trắng toàn bộ khung tranh"
    ],
    answer: 1,
    explain: "Hoà sắc là sự phối hợp tương quan giữa các gam màu (nóng, lạnh, trầm, tươi...) tạo nên thể thống nhất thẩm mĩ và truyền tải tâm trạng của tác phẩm."
  },
  {
    q: "Tác phẩm điêu khắc thuộc thể loại 'Tượng tròn' có đặc điểm không gian nào sau đây?",
    options: [
      "Chỉ quan sát được từ duy nhất một mặt phẳng phía trước",
      "Là hình khối không gian ba chiều hoàn chỉnh, người xem có thể đi vòng quanh chiêm ngưỡng từ mọi góc nhìn (360 độ)",
      "Được dán phẳng lên mặt kính",
      "Được in trên giấy mỏng"
    ],
    answer: 1,
    explain: "Tượng tròn (Sculpture in the round) có cấu trúc 3 chiều độc lập trong không gian vật lí, cho phép người xem thưởng ngoạn từ 360 độ xung quanh."
  },
  {
    q: "Nghệ thuật 'Phù điêu' (Relief) khác với 'Tượng tròn' ở điểm cốt lõi nào?",
    options: [
      "Phù điêu được tạo hình bằng màu nước",
      "Phù điêu là hình khối nổi hoặc chìm gắn liền trên một mặt phẳng nền",
      "Phù điêu không có hình khối",
      "Phù điêu chỉ được làm từ kim cương"
    ],
    answer: 1,
    explain: "Phù điêu là sự kết hợp độc đáo giữa hội hoạ và điêu khắc: các khối hình nhô lên hoặc lõm xuống gắn liền với một mặt phẳng nền nâng đỡ."
  },
  {
    q: "Trào lưu Pop Art (Nghệ thuật đại chúng) nổi bật với nguồn đề tài và ngôn ngữ thị giác nào?",
    options: [
      "Tranh khắc gỗ kinh thánh thời Trung cổ",
      "Hình ảnh quảng cáo, truyện tranh, bao bì sản phẩm công nghiệp với màu sắc tương phản rực rỡ và kĩ thuật lặp hình",
      "Nghệ thuật thư pháp chữ Hán",
      "Chỉ vẽ tranh tĩnh vật cổ điển mờ tối"
    ],
    answer: 1,
    explain: "Pop Art xuất hiện vào thập niên 1950–1960 tại Anh và Mỹ, lấy cảm hứng trực tiếp từ văn hoá đại chúng tiêu dùng, đồ hộp, truyện tranh và màu sắc chói lọi."
  },
  {
    q: "Trong nghệ thuật sắp đặt (Installation Art), phương tiện biểu đạt chủ đạo của nghệ sĩ là gì?",
    options: [
      "Một tờ giấy A4 vẽ chì",
      "Tổ chức, bố trí các vật thể, ánh sáng, âm thanh trong một không gian 3 chiều cụ thể để tạo trải nghiệm tương tác ý niệm cho công chúng",
      "Chỉ dùng một chiếc cọ vẽ duy nhất",
      "Bức ảnh chụp chân dung đen trắng"
    ],
    answer: 1,
    explain: "Nghệ thuật sắp đặt biến đổi toàn bộ không gian phòng trưng bày hoặc môi trường tự nhiên thành một tác phẩm nghệ thuật đa giác quan."
  },
  {
    q: "Thành phần nào giữ vai trò then chốt nhất trên bìa 1 (bìa trước) của cuốn sách theo nguyên tắc phân cấp thị giác?",
    options: [
      "Tên nhà xuất bản",
      "Tên cuốn sách (Title)",
      "Mã vạch và giá tiền",
      "Lời cảm ơn của ban biên tập"
    ],
    answer: 1,
    explain: "Tên sách luôn là thông tin có kích thước lớn nhất, vị trí trang trọng nhất để dẫn dắt ánh mắt bạn đọc từ cái nhìn đầu tiên."
  },
  {
    q: "Khi thiết kế một sản phẩm phụ kiện thời trang thủ công, hai yếu tố nào bắt buộc phải kết hợp nhuần nhuyễn?",
    options: [
      "Tính thẩm mĩ độc đáo và công năng sử dụng tiện ích",
      "Giá thành đắt đỏ và sự cồng kềnh",
      "Chỉ cần đẹp mắt trên bản vẽ mà không cần đeo được",
      "Càng nhiều màu sắc rực rỡ càng tốt bất chấp hoàn cảnh"
    ],
    answer: 0,
    explain: "Mĩ thuật ứng dụng thời trang luôn đòi hỏi sự kết hợp hữu cơ giữa vẻ đẹp thị giác bên ngoài và công năng thoải mái, tiện dụng cho người mang."
  },
  {
    q: "Góc nghiêng công thái học (Ergonomics) chuẩn của mặt đỡ điện thoại giúp học sinh ngồi học không bị đau mỏi cổ vai gáy là bao nhiêu?",
    options: [
      "0 độ (nằm sát mặt bàn)",
      "Khoảng 45 độ đến 60 độ so với mặt bàn ngang",
      "90 độ (thẳng đứng dễ đổ)",
      "120 độ (ngửa hẳn ra sau)"
    ],
    answer: 1,
    explain: "Góc nghiêng 45° - 60° giúp tầm mắt hạ tự nhiên 15° - 20° so với phương ngang, giảm tối đa áp lực tải trọng lên các đốt sống cổ."
  },
  {
    q: "Logo (Biểu trưng) của một thương hiệu thành công phải thoả mãn 4 tiêu chí vàng nào sau đây?",
    options: [
      "Phức tạp, nhiều chi tiết li ti, nhiều màu sắc và khó sao chép",
      "Đơn giản, dễ nhớ, độc đáo và dễ ứng dụng thu phóng ở mọi kích cỡ",
      "Sao chép nguyên si thương hiệu quốc tế",
      "Chỉ vẽ bằng bút chì đen"
    ],
    answer: 1,
    explain: "Bốn tiêu chuẩn vàng của thiết kế logo quốc tế là: Đơn giản (Simple), Dễ nhớ (Memorable), Độc đáo (Unique) và Linh hoạt (Versatile)."
  },
  {
    q: "Phương pháp tạo hình cơ bản nhất khi bắt đầu vẽ một nhóm tĩnh vật đồ vật phức tạp là gì?",
    options: [
      "Vẽ ngay các hoa văn trang trí nhỏ",
      "Quy các vật mẫu về hệ hình khối kỉ hà cơ bản (khối hộp, cầu, trụ, nón)",
      "Đo bằng thước kẻ từng milimet chi tiết",
      "Nhắm mắt vẽ theo trực giác mơ hồ"
    ],
    answer: 1,
    explain: "Quy phức tạp về đơn giản bằng hệ hình khối cơ bản giúp người vẽ nắm bắt chính xác cấu trúc không gian và tỉ lệ tổng thể của mẫu vật."
  },
  {
    q: "Nghệ thuật múa rối nước Việt Nam ra đời vào khoảng thời gian nào và gắn liền với nền văn minh nào?",
    options: [
      "Thế kỉ XXI gắn với công nghệ số",
      "Khoảng thế kỉ XI thời nhà Lý gắn liền với nền văn minh lúa nước sông Hồng",
      "Thời kì nguyên thuỷ đồ đá cũ",
      "Thời Pháp thuộc"
    ],
    answer: 1,
    explain: "Múa rối nước ra đời từ thế kỉ XI dưới triều Lý (được ghi chép trên bia tháp Sùng Thiện Diên Linh năm 1121), gắn bó mật thiết với nông nghiệp lúa nước."
  },
  {
    q: "Gian nhà kiến trúc cổ kính nổi trên mặt nước dùng làm buồng trò biểu diễn rối nước được gọi là gì?",
    options: [
      "Thủy đình (Nhà rối)",
      "Đình làng",
      "Văn miếu",
      "Chùa Một Cột"
    ],
    answer: 0,
    explain: "Thủy đình là công trình kiến trúc đặc thù trên mặt hồ ao, nơi che giấu các nghệ nhân lội nước điều khiển con rối phía sau tấm mành tre."
  },
  {
    q: "Vì sao các nghệ nhân truyền thống luôn ưu tiên chọn gỗ cây sung để tạc tượng con rối nước?",
    options: [
      "Vì gỗ sung rất nặng làm con rối chìm",
      "Vì gỗ sung có tính xốp nhẹ, nổi bềnh bồng trên mặt nước, thớ dẻo dễ đục đẽo và bền bỉ khi ngâm nước",
      "Vì gỗ sung có màu vàng lấp lánh",
      "Vì cây sung chỉ mọc ở thành phố"
    ],
    answer: 1,
    explain: "Gỗ sung có khối lượng riêng nhẹ hơn nước, không bị nứt toác hay cong vênh khi thường xuyên ngâm mình dưới nước hồ."
  },
  {
    q: "Nhân vật dẫn chuyện tiêu biểu, có khuôn mặt rạng rỡ phúc hậu, cởi trần đóng khố trong nghệ thuật rối nước là ai?",
    options: [
      "Bá Kiến",
      "Chú Tễu",
      "Thị Màu",
      "Chí Phèo"
    ],
    answer: 1,
    explain: "Chú Tễu là biểu tượng của sự lạc quan, tiếng cười trào lộng sảng khoái và lòng nhân hậu của người nông dân Việt Nam."
  },
  {
    q: "Khái niệm 'Upcycling' trong trào lưu Thiết kế xanh (Green Design) có nghĩa là gì?",
    options: [
      "Vứt bỏ đồ cũ ra bãi rác",
      "Tái chế nâng cấp: biến các phế liệu bỏ đi thành sản phẩm mới có giá trị thẩm mĩ, công năng và chất lượng cao hơn vật phẩm gốc ban đầu",
      "Chôn lấp rác thải nhựa xuống lòng đất",
      "Đốt cháy phế liệu lấy nhiệt năng"
    ],
    answer: 1,
    explain: "Upcycling (tái chế nâng cấp giá trị) là đỉnh cao của sáng tạo tuần hoàn: tái sinh rác thải thành những tác phẩm nghệ thuật gia dụng tinh tế."
  },
  {
    q: "Kĩ thuật độc đáo làm nên danh tiếng quốc tế của nghệ thuật tranh Sơn mài truyền thống Việt Nam là gì?",
    options: [
      "Phun sơn xịt một lớp duy nhất",
      "Quy trình vẽ nhiều lớp chất liệu quý (then, son, bạc dán, vỏ trứng...) rồi mài phẳng trong nước bằng than củi để màu ẩn hiện huyền ảo",
      "Dùng bút lông vẽ tranh thuỷ mặc",
      "Dán ảnh chụp lên tấm gỗ"
    ],
    answer: 1,
    explain: "Sơn mài Việt Nam (Sơn ta) kết hợp độc sáng giữa hội hoạ và kĩ thuật mài nước, tạo nên chiều sâu thăm thẳm và vẻ đẹp biến ảo vô song."
  },
  {
    q: "Ngành nghề nào trong Mĩ thuật ứng dụng chịu trách nhiệm tạo dáng hình thức và tối ưu công năng cho đồ gia dụng, xe máy, đồ chơi?",
    options: [
      "Thiết kế tạo dáng công nghiệp (Industrial / Product Design)",
      "Thiết kế trang phục biểu diễn tuồng chèo",
      "Nghệ nhân thêu ren tay",
      "Hoạ sĩ vẽ tranh lụa cổ điển"
    ],
    answer: 0,
    explain: "Thiết kế công nghiệp / tạo dáng sản phẩm là ngành chuyên sáng tạo mẫu mã và công năng cơ học cho các sản phẩm sản xuất công nghiệp hàng loạt."
  },
  {
    q: "Ngành UI/UX Design trong kỉ nguyên số tập trung vào nhiệm vụ chuyên môn nào?",
    options: [
      "May đo trang phục thắt lưng da",
      "Thiết kế giao diện thị giác (UI) và tối ưu hoá hành trình trải nghiệm người dùng (UX) trên ứng dụng điện thoại và website",
      "Sơn tường nhà cao tầng",
      "Nặn tượng đài kỉ niệm bằng đá hoa cương"
    ],
    answer: 1,
    explain: "UI/UX Design định hình giao diện thẩm mĩ và sự thuận tiện trong từng cú chạm lướt của người dùng trên môi trường phần mềm kĩ thuật số."
  },
  {
    q: "Tài liệu trực quan quan trọng nhất của một nhà thiết kế chứng minh năng lực sáng tạo và phong cách cá nhân khi ứng tuyển là gì?",
    options: [
      "Bản sao chứng minh nhân dân",
      "Hồ sơ năng lực cá nhân (Portfolio) tập hợp các dự án và tác phẩm xuất sắc nhất",
      "Giấy khen học sinh giỏi môn Thể dục",
      "Biên lai thu học phí"
    ],
    answer: 1,
    explain: "Portfolio là 'hộ chiếu nghệ thuật' khẳng định tài năng thực tế, tư duy giải quyết vấn đề và phong cách sáng tạo riêng của nhà thiết kế."
  },
  {
    q: "Quy chuẩn đạo đức nghề nghiệp tối thượng bắt buộc của người làm nghề sáng tạo mĩ thuật là gì?",
    options: [
      "Sao chép nguyên si sản phẩm nước ngoài rồi gắn nhãn của mình",
      "Tôn trọng quyền sở hữu trí tuệ, trung thực sáng tạo và tuyệt đối không đạo nhái ý tưởng",
      "Tìm mọi cách gièm pha đồng nghiệp",
      "Sử dụng vật liệu độc hại để giảm chi phí"
    ],
    answer: 1,
    explain: "Liêm chính học thuật và bảo vệ bản quyền tác giả là nền tảng đạo đức sống còn của mọi nền công nghiệp sáng tạo văn minh."
  },
  {
    q: "Tư duy thiết kế lấy người dùng làm trung tâm (Human-Centered Design) bắt đầu từ bước nào?",
    options: [
      "Bán sản phẩm ra siêu thị",
      "Thấu cảm (Empathize): nghiên cứu, lắng nghe và thấu hiểu sâu sắc nhu cầu, khó khăn của người sử dụng",
      "Vẽ ngay bản vẽ kĩ thuật mà không cần hỏi ai",
      "Tăng giá bán sản phẩm lên gấp đôi"
    ],
    answer: 1,
    explain: "Thấu cảm là viên gạch đầu tiên của tư duy thiết kế, giúp giải pháp tạo hình thực sự chạm tới nỗi đau và sự kì vọng của người dùng."
  },
  {
    q: "Chiều cao tiêu chuẩn tính từ mặt sàn đến tâm bức tranh khi treo trưng bày triển lãm ngang tầm mắt người xem là bao nhiêu?",
    options: [
      "Khoảng 50 cm sát nền đất",
      "Khoảng 1.45 m đến 1.55 m",
      "Treo sát mép trần nhà 3 mét",
      "Đặt nghiêng dưới gầm bàn"
    ],
    answer: 1,
    explain: "Khoảng cách 1.45m - 1.55m là tiêu chuẩn trưng bày bảo tàng quốc tế (Eye-level standard) giúp mắt quan sát không bị mỏi."
  },
  {
    q: "Nghệ thuật hỗn hợp (Mixed Media) trong mĩ thuật đương đại cho phép người nghệ sĩ làm điều gì?",
    options: [
      "Chỉ được dùng duy nhất 1 chất liệu chì đen",
      "Tự do kết hợp đồng thời nhiều chất liệu và kĩ thuật khác nhau (sơn acrylic, giấy báo, vải, cát, vỏ cây, ảnh chụp) trên cùng tác phẩm",
      "Bắt buộc phải vẽ tranh trên kính cường lực",
      "Không được phép dùng màu vẽ"
    ],
    answer: 1,
    explain: "Mixed Media mở toang cánh cửa sáng tạo, giải phóng nghệ sĩ khỏi những quy chuẩn chất liệu đơn lẻ truyền thống."
  },
  {
    q: "Mục tiêu cốt lõi của môn học Mĩ thuật trong chương trình giáo dục phổ thông cấp THCS là gì?",
    options: [
      "Bắt buộc tất cả mọi học sinh đều phải trở thành hoạ sĩ chuyên nghiệp kiếm sống bằng tranh vẽ",
      "Hình thành và phát triển năng lực thẩm mĩ, nuôi dưỡng tình yêu cái đẹp, tư duy sáng tạo và kĩ năng ứng dụng nghệ thuật vào đời sống muôn màu",
      "Học thuộc lòng ngày tháng năm sinh của các hoạ sĩ cổ đại",
      "Chỉ để chấm điểm xếp loại học kì"
    ],
    answer: 1,
    explain: "Mĩ thuật giáo dục con người toàn diện về tâm hồn, thị hiếu thẩm mĩ cao đẹp, lòng nhân văn và tư duy giải quyết vấn đề sáng tạo trong cuộc sống."
  }
];

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/mithuat9_exam.json', JSON.stringify(examQuestions, null, 2), 'utf8');
console.log('Successfully saved 25 Trạng Nguyên exam questions to mithuat9_exam.json');
