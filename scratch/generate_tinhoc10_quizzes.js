// scratch/generate_tinhoc10_quizzes.js
const fs = require('fs');
const path = require('path');

const quizzes = {
  // Bài 1: Thông tin và xử lí thông tin
  1: [
    {
      q: "Phát biểu nào sau đây phân biệt chính xác nhất giữa 'Thông tin' và 'Dữ liệu'?",
      options: [
        "Dữ liệu là cách biểu diễn thông tin để máy tính có thể lưu trữ và xử lí, còn thông tin là những hiểu biết con người rút ra được.",
        "Dữ liệu và thông tin là hai từ đồng nghĩa hoàn toàn trong tin học.",
        "Thông tin chỉ tồn tại dưới dạng số nhị phân, còn dữ liệu tồn tại trong tự nhiên.",
        "Dữ liệu luôn luôn đúng, còn thông tin có thể sai lệch."
      ],
      ans: 0,
      exp: "Thông tin đem lại hiểu biết cho con người, còn dữ liệu là các kí hiệu, con số, hình ảnh biểu diễn thông tin để xử lí trên máy tính."
    },
    {
      q: "Quy trình xử lí thông tin cơ bản của máy tính diễn ra theo trình tự nào?",
      options: [
        "Tiếp nhận dữ liệu (Input) ⟶ Xử lí dữ liệu (Process) ⟶ Xuất kết quả / Lưu trữ (Output)",
        "Xử lí dữ liệu ⟶ Tiếp nhận dữ liệu ⟶ Xuất kết quả",
        "Tiếp nhận dữ liệu ⟶ Xuất kết quả ⟶ Xử lí dữ liệu",
        "Xuất kết quả ⟶ Xử lí dữ liệu ⟶ Tiếp nhận dữ liệu"
      ],
      ans: 0,
      exp: "Mô hình xử lí thông tin chuẩn của mọi hệ thống tính toán là Vào (Input) ⟶ Xử lí (Process) ⟶ Ra (Output)."
    },
    {
      q: "Một tệp tài liệu văn bản có dung lượng $2\\text{ MB}$ tương đương với bao nhiêu Kilobyte (KB)?",
      options: ["$2048\\text{ KB}$", "$2000\\text{ KB}$", "$1024\\text{ KB}$", "$4096\\text{ KB}$"],
      ans: 0,
      exp: "Theo chuẩn nhị phân trong máy tính, $1\\text{ MB} = 1024\\text{ KB}$ nên $2\\text{ MB} = 2 \\times 1024 = 2048\\text{ KB}$."
    }
  ],

  // Bài 2: Thiết bị thông minh
  2: [
    {
      q: "Đặc điểm cốt lõi nào giúp phân biệt một 'Thiết bị thông minh' (Smart Device) với một thiết bị điện tử truyền thống?",
      options: [
        "Khả năng tự động thu nhận, xử lí dữ liệu và kết nối mạng để trao đổi thông tin độc lập",
        "Có kích thước nhỏ gọn hơn và dùng màn hình cảm ứng",
        "Có giá tiền đắt hơn nhiều so với thiết bị thông thường",
        "Chỉ hoạt động được khi có dây nối điện trực tiếp"
      ],
      ans: 0,
      exp: "Thiết bị thông minh kết hợp bộ vi xử lí, cảm biến và kết nối mạng (IoT) để tự động thu thập và xử lí thông tin."
    },
    {
      q: "Thuật ngữ IoT là viết tắt của cụm từ tiếng Anh nào?",
      options: ["Internet of Things", "Internet of Technology", "Information of Things", "Input Output Technology"],
      ans: 0,
      exp: "IoT là viết tắt của 'Internet of Things' - Mạng lưới vạn vật kết nối Internet."
    },
    {
      q: "Hành vi nào dưới đây thể hiện việc sử dụng thiết bị thông minh có trách nhiệm?",
      options: [
        "Bảo mật tài khoản cá nhân và kiểm chứng thông tin trước khi chia sẻ lên mạng",
        "Sử dụng điện thoại liên tục 12 tiếng mỗi ngày không nghỉ",
        "Chia sẻ công khai mật khẩu và số CCCD lên các nhóm mạng xã hội",
        "Tải về các ứng dụng bẻ khóa không rõ nguồn gốc"
      ],
      ans: 0,
      exp: "Người dùng có trách nhiệm cần bảo vệ dữ liệu cá nhân, hạn chế phụ thuộc thiết bị và kiểm chứng tin tức."
    }
  ],

  // Bài 3: Dữ liệu văn bản
  3: [
    {
      q: "Bảng mã ASCII chuẩn ban đầu sử dụng bao nhiêu bit để mã hóa một kí tự?",
      options: ["$7\\text{ bit}$", "$8\\text{ bit}$", "$16\\text{ bit}$", "$32\\text{ bit}$"],
      ans: 0,
      exp: "Bảng mã ASCII chuẩn sử dụng 7 bit để mã hóa 128 kí tự cơ bản (từ 0 đến 127)."
    },
    {
      q: "Tại sao chuẩn mã hóa Unicode (đặc biệt là UTF-8) lại trở thành tiêu chuẩn toàn cầu hiện nay?",
      options: [
        "Vì có khả năng mã hóa tất cả các kí tự của mọi ngôn ngữ trên thế giới",
        "Vì nó chỉ dùng cho tiếng Việt",
        "Vì dung lượng luôn nhẹ hơn ASCII trong mọi trường hợp",
        "Vì không cần cài đặt phông chữ vẫn hiển thị được hình ảnh"
      ],
      ans: 0,
      exp: "Unicode giải quyết triệt để hạn chế của các bảng mã cục bộ, hỗ trợ hiển thị thống nhất văn bản đa ngôn ngữ."
    },
    {
      q: "Hiện tượng một tệp văn bản tiếng Việt bị lỗi hiển thị các dấu câu ('vỡ font') thường do nguyên nhân nào?",
      options: [
        "Chọn sai bảng mã hiển thị hoặc hệ thống thiếu phông chữ tương thích",
        "Do máy tính bị đứt dây mạng Internet",
        "Do máy tính bị hết pin",
        "Do người dùng lưu tệp dưới định dạng nhị phân"
      ],
      ans: 0,
      exp: "Mã hóa kí tự quy định con số đại diện, còn phông chữ quy định hình dáng hiển thị. Chọn sai một trong hai sẽ gây lỗi hiển thị."
    }
  ],

  // Bài 4: Hệ nhị phân và số nguyên
  4: [
    {
      q: "Số nhị phân $1011_2$ khi chuyển đổi sang hệ thập phân có giá trị bằng bao nhiêu?",
      options: ["$11$", "$13$", "$9$", "$15$"],
      ans: 0,
      exp: "$1011_2 = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 8 + 0 + 2 + 1 = 11$."
    },
    {
      q: "Kết quả của phép cộng nhị phân $110_2 + 011_2$ bằng:",
      options: ["$1001_2$", "$1010_2$", "$1111_2$", "$1000_2$"],
      ans: 0,
      exp: "$110_2 (6) + 011_2 (3) = 1001_2 (9)$."
    },
    {
      q: "Trong kiến trúc máy tính, phương pháp nào phổ biến nhất để biểu diễn số nguyên có dấu?",
      options: ["Mã bù hai (Two's Complement)", "Mã dấu lượng", "Mã ASCII", "Hệ thập lục phân (Hex)"],
      ans: 0,
      exp: "Mã bù hai giúp phần cứng thực hiện phép trừ thông qua mạch cộng và chỉ có một biểu diễn duy nhất cho số 0."
    }
  ],

  // Bài 5: Dữ liệu logic
  5: [
    {
      q: "Biểu thức logic $(1 \\text{ AND } 0) \\text{ OR } (\\text{NOT } 0)$ có giá trị chân lí là:",
      options: ["$1\\text{ (True)}$", "$0\\text{ (False)}$", "Không xác định", "Cả 0 và 1"],
      ans: 0,
      exp: "$1 \\text{ AND } 0 = 0$; $\\text{NOT } 0 = 1$; ta có $0 \\text{ OR } 1 = 1$."
    },
    {
      q: "Phép toán logic XOR (HOẶC loại trừ) trả về giá trị Đúng (1) khi nào?",
      options: [
        "Khi hai giá trị đầu vào khác nhau (một Đúng, một Sai)",
        "Khi cả hai giá trị đầu vào cùng Đúng",
        "Khi cả hai giá trị đầu vào cùng Sai",
        "Trong mọi trường hợp"
      ],
      ans: 0,
      exp: "Phép XOR: $1 \\oplus 0 = 1$ và $0 \\oplus 1 = 1$; còn $1 \\oplus 1 = 0$ và $0 \\oplus 0 = 0$."
    },
    {
      q: "Trong các mạch điện tử của máy tính, cổng logic đóng vai trò là:",
      options: [
        "Các phần tử cơ sở cấu tạo nên bộ xử lí trung tâm (ALU / CPU)",
        "Nguồn cung cấp điện áp cao",
        "Dây truyền tín hiệu Internet",
        "Màn hình hiển thị kết quả"
      ],
      ans: 0,
      exp: "Hàng tỉ cổng logic bán dẫn kết hợp lại tạo thành các mạch tính toán số học và điều khiển trong vi xử lí."
    }
  ],

  // Bài 6: Âm thanh và hình ảnh
  6: [
    {
      q: "Hai công đoạn cốt lõi của quá trình số hóa âm thanh là:",
      options: ["Lấy mẫu (Sampling) và Lượng tử hóa (Quantization)", "Ghi âm và Phát loa", "Nén dữ liệu và Giải nén", "Vẽ sóng và Đổi đơn vị"],
      ans: 0,
      exp: "Lấy mẫu đo tín hiệu theo chu kì thời gian; lượng tử hóa làm tròn biên độ và mã hóa thành bit."
    },
    {
      q: "Ưu điểm vượt trội của đồ họa vector so với ảnh raster (bitmap) là:",
      options: [
        "Có thể phóng to thu nhỏ tùy ý mà không bao giờ bị vỡ nét hay mờ hình",
        "Hiển thị ảnh chụp phong cảnh chân thực hơn",
        "Dung lượng luôn nặng hơn ảnh raster",
        "Không thể chỉnh sửa màu sắc sau khi vẽ"
      ],
      ans: 0,
      exp: "Đồ họa vector lưu trữ đối tượng bằng công thức toán học nên giữ nguyên độ sắc nét ở mọi độ phóng đại."
    },
    {
      q: "Định dạng tệp nào dưới đây thuộc nhóm nén dữ liệu KHÔNG mất dữ liệu (Lossless)?",
      options: ["PNG", "JPEG", "MP3", "MP4"],
      ans: 0,
      exp: "PNG nén không mất thông tin, giữ nguyên chất lượng ảnh gốc và hỗ trợ nền trong suốt (transparency)."
    }
  ],

  // Bài 7: Thiết bị số thông dụng
  7: [
    {
      q: "Hệ thống quản lí tệp trên thiết bị di động thông minh được tổ chức theo cấu trúc nào?",
      options: ["Cấu trúc cây thư mục phân cấp", "Cấu trúc danh sách ngẫu nhiên", "Cấu trúc vòng tròn", "Cấu trúc bảng một chiều"],
      ans: 0,
      exp: "Tệp và thư mục được tổ chức theo mô hình cây phân cấp từ thư mục gốc đến các thư mục con."
    },
    {
      q: "Lợi ích nổi bật của việc đồng bộ hóa dữ liệu di động với dịch vụ lưu trữ đám mây là:",
      options: [
        "Tự động sao lưu và dễ dàng truy cập dữ liệu từ nhiều thiết bị khác nhau",
        "Làm tăng dung lượng pin của điện thoại",
        "Tăng tốc độ xử lí của CPU điện thoại gấp 2 lần",
        "Xóa vĩnh viễn dữ liệu trên bộ nhớ trong"
      ],
      ans: 0,
      exp: "Đồng bộ đám mây (Cloud Sync) giúp bảo vệ an toàn dữ liệu khi thiết bị hỏng hoặc mất."
    },
    {
      q: "Thao tác nào dưới đây tiềm ẩn rủi ro mất dữ liệu vĩnh viễn trên thiết bị?",
      options: [
        "Xóa tệp không sao lưu và dọn dẹp thư mục hệ thống khi không nắm rõ tác dụng",
        "Sao chép tệp từ thẻ nhớ sang bộ nhớ trong",
        "Đổi tên một tệp ảnh cá nhân",
        "Xem thuộc tính dung lượng bộ nhớ"
      ],
      ans: 0,
      exp: "Cần thận trọng trước khi xóa tệp và luôn duy trì bản sao lưu cho các tài liệu quan trọng."
    }
  ],

  // Bài 8: Mạng máy tính
  8: [
    {
      q: "Mạng máy tính kết nối các máy tính trong phạm vi một trường học hoặc một tòa nhà được gọi là:",
      options: ["Mạng cục bộ (LAN)", "Mạng diện rộng (WAN)", "Mạng Internet toàn cầu", "Mạng đô thị (MAN)"],
      ans: 0,
      exp: "LAN (Local Area Network) là mạng cục bộ hoạt động trong phạm vi địa lí nhỏ hẹp."
    },
    {
      q: "Thiết bị mạng nào có chức năng định tuyến và chuyển tiếp các gói tin giữa các mạng khác nhau?",
      options: ["Bộ định tuyến (Router)", "Bộ chuyển mạch (Switch)", "Dây cáp mạng LAN", "Card mạng (NIC)"],
      ans: 0,
      exp: "Router kết nối các mạng khác nhau và tìm đường đi tối ưu cho gói tin trên mạng WAN/Internet."
    },
    {
      q: "Mô hình điện toán đám mây (Cloud Computing) đem lại lợi ích gì cho người dùng?",
      options: [
        "Sử dụng phần mềm và lưu trữ dữ liệu từ xa qua Internet mà không cần đầu tư máy chủ đắt tiền",
        "Giúp máy tính cá nhân không cần dùng điện vẫn chạy được",
        "Tự động thay thế hoàn toàn con người trong mọi công việc",
        "Ngăn chặn 100% tất cả các loại virus máy tính"
      ],
      ans: 0,
      exp: "Điện toán đám mây cung cấp tài nguyên điện toán linh hoạt, tiện lợi theo nhu cầu."
    }
  ],

  // Bài 9: An toàn không gian mạng
  9: [
    {
      q: "Hình thức tấn công mạng mà kẻ xấu giả mạo email ngân hàng để lừa nạn nhân nhập mật khẩu gọi là:",
      options: ["Phishing (Tấn công giả mạo)", "DDoS (Tấn công từ chối dịch vụ)", "Man-in-the-middle", "SQL Injection"],
      ans: 0,
      exp: "Phishing là chiêu thức lừa đảo xã hội bằng thông điệp giả mạo nhằm chiếm đoạt tài khoản nhạy cảm."
    },
    {
      q: "Mật khẩu nào dưới đây đạt chuẩn an toàn cao nhất?",
      options: ["\`VatLy@TinHoc#2026!\`", "\`12345678\`", "\`nguyenvana123\`", "\`password\`"],
      ans: 0,
      exp: "Mật khẩu mạnh cần dài trên 12 kí tự, kết hợp chữ hoa, chữ thường, chữ số và kí tự đặc biệt."
    },
    {
      q: "Cơ chế xác thực hai yếu tố (2FA) bảo vệ tài khoản bằng cách:",
      options: [
        "Yêu cầu thêm một mã xác minh gửi về điện thoại hoặc ứng dụng ngoài mật khẩu",
        "Bắt buộc người dùng phải gõ mật khẩu hai lần liên tiếp",
        "Đổi mật khẩu tự động sau mỗi 5 phút",
        "Khóa tài khoản vĩnh viễn khi có người đăng nhập"
      ],
      ans: 0,
      exp: "2FA kết hợp giữa thứ bạn biết (mật khẩu) và thứ bạn sở hữu (điện thoại/thiết bị nhận mã OTP)."
    }
  ],

  // Bài 10: Khai thác tài nguyên Internet
  10: [
    {
      q: "Để tìm kiếm chính xác cụm từ 'tin học 10 kết nối tri thức' trên Google, ta nên dùng cú pháp nào?",
      options: [
        "\"tin học 10 kết nối tri thức\"",
        "tin học 10 kết nối tri thức",
        "-tin học 10 kết nối tri thức",
        "site:tin học 10 kết nối tri thức"
      ],
      ans: 0,
      exp: "Đặt từ khóa trong cặp dấu ngoặc kép \`\"...\"\` giúp tìm kiếm chính xác tuyệt đối cụm từ."
    },
    {
      q: "Cú pháp tìm kiếm nào giúp bạn chỉ tìm các tệp giáo án định dạng PDF trên Google?",
      options: ["filetype:pdf", "format:pdf", "ext:doc", "site:pdf"],
      ans: 0,
      exp: "Toán tử \`filetype:pdf\` giới hạn kết quả tìm kiếm chỉ trả về các tệp có phần mở rộng .pdf."
    },
    {
      q: "Khi đọc một thông tin bất ngờ trên mạng xã hội, hành động thông minh nhất của học sinh là:",
      options: [
        "Kiểm tra chéo nguồn tin trên các báo chính thống và trang web uy tín trước khi tin hoặc chia sẻ",
        "Lập tức bấm chia sẻ ngay để bạn bè cùng biết",
        "Tin tưởng ngay vì bài viết có nhiều lượt thích (like)",
        "Bình luận công kích tác giả bài viết"
      ],
      ans: 0,
      exp: "Cần đánh giá nguồn tin, tác giả, bằng chứng và kiểm tra chéo trước khi chia sẻ thông tin."
    }
  ],

  // Bài 11: Ứng xử số & Bản quyền
  11: [
    {
      q: "Khái niệm 'Dấu chân kĩ thuật số' (Digital Footprint) cảnh báo điều gì cho người dùng Internet?",
      options: [
        "Mọi hành vi, bài đăng, hình ảnh trên mạng đều lưu lại vết tích lâu dài và khó xóa bỏ hoàn toàn",
        "Thiết bị điện tử bị bẩn sau khi sử dụng",
        "Tốc độ truy cập mạng bị giảm theo thời gian",
        "Hệ thống định vị GPS theo dõi bước chân chạy bộ"
      ],
      ans: 0,
      exp: "Dấu vết số tồn tại lâu dài và có thể ảnh hưởng trực tiếp đến hình ảnh cá nhân và tương lai của bạn."
    },
    {
      q: "Hành vi nào dưới đây vi phạm nghiêm trọng luật sở hữu trí tuệ và bản quyền phần mềm?",
      options: [
        "Cài đặt và sử dụng phần mềm bẻ khóa (crack) cho mục đích thương mại",
        "Sử dụng phần mềm mã nguồn mở Linux hoàn toàn miễn phí",
        "Trích dẫn một đoạn văn ngắn và ghi rõ tên tác giả, nguồn gốc",
        "Mua bản quyền sử dụng phần mềm chính hãng từ nhà sản xuất"
      ],
      ans: 0,
      exp: "Bẻ khóa phần mềm vi phạm bản quyền tác giả và tiềm ẩn nguy cơ nhiễm mã độc nghiêm trọng."
    },
    {
      q: "Kí hiệu giấy phép Creative Commons 'CC-BY' cho phép người khác sử dụng tác phẩm với điều kiện gì?",
      options: ["Phải ghi nhận và nêu rõ tên tác giả gốc", "Không được sửa đổi tác phẩm", "Chỉ được dùng cho mục đích phi thương mại", "Không được chia sẻ lại"],
      ans: 0,
      exp: "Điều kiện BY (Attribution) yêu cầu người sử dụng bắt buộc phải trích dẫn tên tác giả gốc."
    }
  ],

  // Bài 12: Inkscape & Đồ họa
  12: [
    {
      q: "Phần mềm Inkscape sử dụng định dạng tệp chuẩn mở nào để lưu trữ đồ họa vector?",
      options: ["SVG (.svg)", "PNG (.png)", "JPEG (.jpg)", "BMP (.bmp)"],
      ans: 0,
      exp: "SVG (Scalable Vector Graphics) là định dạng vector chuẩn quốc tế của Inkscape."
    },
    {
      q: "Phím tắt để kích hoạt công cụ chọn và biến đổi đối tượng (Select Tool) trong Inkscape là:",
      options: ["F1 (hoặc phím S)", "F4 (hoặc phím R)", "F5 (hoặc phím E)", "F8 (hoặc phím T)"],
      ans: 0,
      exp: "Công cụ Select Tool dùng phím F1 hoặc phím S để chọn, di chuyển, co giãn và xoay hình."
    },
    {
      q: "Để vẽ một hình vuông hoàn hảo hoặc hình tròn đều trong Inkscape, ta giữ phím nào khi kéo chuột?",
      options: ["Ctrl", "Shift", "Alt", "Tab"],
      ans: 0,
      exp: "Giữ phím Ctrl khóa tỉ lệ khung hình 1:1, giúp vẽ hình vuông hoặc hình tròn chuẩn xác."
    }
  ],

  // Bài 13: Bổ sung đối tượng & Path
  13: [
    {
      q: "Trong Inkscape, thuộc tính Fill và Stroke lần lượt quy định điều gì của đối tượng?",
      options: [
        "Màu tô bên trong (Fill) và Màu/kiểu nét của đường viền (Stroke)",
        "Độ trong suốt và Chiều cao của hình",
        "Tọa độ X và Tọa độ Y của hình",
        "Phông chữ và Cỡ chữ"
      ],
      ans: 0,
      exp: "Fill là màu phủ diện tích bên trong; Stroke là thuộc tính của đường bao ngoài đối tượng."
    },
    {
      q: "Phép toán ghép hình nào trong thực đơn Path giúp gộp hai hình chồng lên nhau thành một hình duy nhất?",
      options: ["Union (Hợp - Ctrl + +)", "Difference (Hiệu - Ctrl + -)", "Intersection (Giao - Ctrl + *)", "Division (Chia)"],
      ans: 0,
      exp: "Phép Union hợp nhất các đối tượng thành một hình bao phủ toàn bộ diện tích chung và riêng."
    },
    {
      q: "Khi thực hiện phép Difference (Hiệu) giữa hai hình, thứ tự lớp (Z-order) có vai trò như thế nào?",
      options: [
        "Hình ở lớp trên sẽ cắt và trừ đi diện tích của hình ở lớp dưới",
        "Hình ở lớp dưới sẽ cắt hình ở lớp trên",
        "Hai hình tự động đổi chỗ cho nhau",
        "Thứ tự lớp không ảnh hưởng đến kết quả"
      ],
      ans: 0,
      exp: "Phép Difference lấy hình đáy trừ đi phần giao nhau với hình đỉnh; hình đỉnh sẽ biến mất."
    }
  ],

  // Bài 14: Đường Bézier & Văn bản
  14: [
    {
      q: "Công cụ nào trong Inkscape chuyên dùng để vẽ các đường cong Bézier tự do?",
      options: ["Bút vẽ Bézier (Shift + F6 / phím B)", "Công cụ hình chữ nhật (F4)", "Công cụ văn bản (F8)", "Công cụ tẩy xóa"],
      ans: 0,
      exp: "Công cụ Bézier (Draw Bezier Curves) cho phép tạo các đường gấp khúc hoặc uốn lượn qua các điểm neo."
    },
    {
      q: "Để nắn chỉnh độ cong mượt mà của một đoạn cong Bézier, ta sử dụng công cụ nào?",
      options: [
        "Công cụ chỉnh nút neo (Edit paths by nodes - F2 / phím N)",
        "Công cụ xoay hình",
        "Công cụ đổ màu thùng sơn",
        "Công cụ phóng to kính lúp"
      ],
      ans: 0,
      exp: "Công cụ Node Tool (F2) cho phép kéo các tay nắm tiếp tuyến (Handles) để tinh chỉnh độ cong."
    },
    {
      q: "Tính năng nào cho phép uốn lượn dòng chữ chạy dọc theo một đường cong trong Inkscape?",
      options: ["Text ⟶ Put on Path", "Path ⟶ Object to Path", "Object ⟶ Group", "Edit ⟶ Duplicate"],
      ans: 0,
      exp: "Chọn đồng thời chữ và đường cong rồi vào Text ⟶ Put on Path để tạo hiệu ứng chữ theo đường dẫn."
    }
  ],

  // Bài 15: Hoàn thiện hình ảnh đồ họa
  15: [
    {
      q: "Độ phân giải chuẩn khuyến nghị khi xuất tệp ảnh PNG từ Inkscape để in ấn chất lượng cao là:",
      options: ["$300\\text{ DPI}$", "$72\\text{ DPI}$", "$96\\text{ DPI}$", "$150\\text{ DPI}$"],
      ans: 0,
      exp: "Chuẩn in ấn sắc nét yêu cầu độ phân giải từ 300 DPI trở lên; màn hình web thường dùng 96 DPI."
    },
    {
      q: "Tại sao nhà thiết kế luôn bắt buộc phải lưu giữ tệp nguồn gốc định dạng .SVG?",
      options: [
        "Để có thể chỉnh sửa lại các lớp, đối tượng và văn bản bất kì lúc nào mà không suy giảm chất lượng",
        "Vì tệp SVG không thể xuất ra ảnh PNG",
        "Vì máy tính không cho phép xóa tệp SVG",
        "Vì tệp SVG chỉ xem được bằng trình duyệt web"
      ],
      ans: 0,
      exp: "Tệp SVG lưu toàn bộ thông số vector, lớp vẽ và đối tượng gốc phục vụ chỉnh sửa lâu dài."
    },
    {
      q: "Bảng điều khiển Align and Distribute (Ctrl + Shift + A) có chức năng gì?",
      options: [
        "Căn lề (thẳng hàng trái, phải, giữa) và phân bố khoảng cách đều đặn giữa các đối tượng",
        "Tô màu gradient chuyển tiếp",
        "Xuất ảnh ra máy in",
        "Kiểm tra lỗi chính tả văn bản"
      ],
      ans: 0,
      exp: "Align and Distribute giúp căn chỉnh vị trí các đối tượng thẳng hàng và khoảng cách hài hòa chuẩn xác."
    }
  ],

  // Bài 16: Ngôn ngữ bậc cao & Python
  16: [
    {
      q: "Ưu điểm vượt trội của ngôn ngữ lập trình bậc cao (như Python) so với ngôn ngữ máy là:",
      options: [
        "Gần gũi với ngôn ngữ tự nhiên của con người, dễ đọc, dễ viết và độc lập với phần cứng",
        "Máy tính có thể chạy trực tiếp không cần chương trình dịch",
        "Chỉ có thể viết được trên hệ điều hành Windows",
        "Tốc độ chạy luôn nhanh hơn mã máy 10 lần"
      ],
      ans: 0,
      exp: "Ngôn ngữ bậc cao dùng từ khóa tiếng Anh và kí hiệu toán học giúp con người dễ dàng xây dựng thuật toán."
    },
    {
      q: "Trong ngôn ngữ Python, kí tự nào được dùng để bắt đầu một dòng chú thích (comment)?",
      options: ["#", "//", "/*", "--"],
      ans: 0,
      exp: "Kí tự \`#\` bắt đầu dòng chú thích; trình thông dịch Python sẽ bỏ qua dòng này khi thực thi."
    },
    {
      q: "Phần mở rộng chuẩn của tệp mã nguồn chương trình Python là:",
      options: [".py", ".pt", ".python", ".exe"],
      ans: 0,
      exp: "Tệp mã nguồn Python được lưu với phần mở rộng \`.py\` (ví dụ: \`bai_tap.py\`)."
    }
  ],

  // Bài 17: Biến và lệnh gán
  17: [
    {
      q: "Tên biến nào dưới đây là HỢP LỆ theo quy tắc của ngôn ngữ Python?",
      options: ["\`diem_so_1\`", "\`1_diem_so\`", "\`diem so\`", "\`for\`"],
      ans: 0,
      exp: "Tên biến không được bắt đầu bằng chữ số, không chứa khoảng trắng và không trùng từ khóa \`for\`."
    },
    {
      q: "Kết quả của biểu thức \`17 // 5\` và \`17 % 5\` trong Python lần lượt là:",
      options: ["\`3\` và \`2\`", "\`3.4\` và \`2\`", "\`2\` và \`3\`", "\`3\` và \`0\`"],
      ans: 0,
      exp: "\`//\` chia lấy phần nguyên: $17 // 5 = 3$; \`%\` chia lấy phần dư: $17 \\% 5 = 2$."
    },
    {
      q: "Sau khi thực hiện đoạn lệnh sau: \`x = 5; x = x + 3; x = x * 2\`, giá trị của biến \`x\` là:",
      options: ["\`16\`", "\`8\`", "\`10\`", "\`13\`"],
      ans: 0,
      exp: "Ban đầu $x = 5$; sau đó $x = 5 + 3 = 8$; cuối cùng $x = 8 \\times 2 = 16$."
    }
  ],

  // Bài 18: Lệnh vào ra
  18: [
    {
      q: "Hàm \`input()\` trong Python luôn trả về dữ liệu thuộc kiểu nào?",
      options: ["Kiểu chuỗi kí tự (str)", "Kiểu số nguyên (int)", "Kiểu số thực (float)", "Kiểu logic (bool)"],
      ans: 0,
      exp: "Dữ liệu nhập từ bàn phím qua \`input()\` luôn luôn là xâu chuỗi kí tự (\`str\`)."
    },
    {
      q: "Để nhập một số nguyên từ bàn phím và gán cho biến \`n\`, câu lệnh nào sau đây là ĐÚNG?",
      options: [
        "\`n = int(input())\`",
        "\`n = input(int)\`",
        "\`n = float(input())\`",
        "\`int n = input()\`"
      ],
      ans: 0,
      exp: "Cần bọc hàm \`int()\` bên ngoài hàm \`input()\` để ép kiểu chuỗi vừa nhập sang số nguyên."
    },
    {
      q: "Đoạn lệnh \`print(\"A\", \"B\", sep=\"-\", end=\"!\")\` sẽ in ra màn hình kết quả gì?",
      options: ["\`A-B!\`", "\`A B!\`", "\`A-B\`", "\`A B\`"],
      ans: 0,
      exp: "Tham số \`sep=\"-\"\` chèn dấu gạch ngang giữa các giá trị, \`end=\"!\"\` kết thúc dòng bằng dấu chấm than."
    }
  ],

  // Bài 19: Rẽ nhánh if
  19: [
    {
      q: "Toán tử so sánh 'bằng nhau' trong câu lệnh điều kiện của Python là:",
      options: ["\`==\`", "\`=\`", "\`:=\`", "\`===\`"],
      ans: 0,
      exp: "\`==\` dùng để so sánh bằng nhau; \`=\` là phép gán giá trị."
    },
    {
      q: "Python sử dụng yếu tố nào để xác định phạm vi các câu lệnh thuộc cùng một khối lệnh?",
      options: [
        "Quy tắc thụt lề thống nhất (Indentation)",
        "Cặp dấu ngoặc nhọn \`{ ... }\`",
        "Từ khóa \`begin\` và \`end\`",
        "Dấu chấm phẩy \`;\` ở cuối dòng"
      ],
      ans: 0,
      exp: "Python dùng thụt lề (thường là 4 dấu cách) sau dấu hai chấm \`:\` để phân định khối lệnh."
    },
    {
      q: "Cho đoạn mã sau. Màn hình sẽ in ra kết quả gì?\n\`x = 7\`\n\`if x > 10: print(\"A\")\`\n\`elif x > 5: print(\"B\")\`\n\`else: print(\"C\")\`",
      options: ["\`B\`", "\`A\`", "\`C\`", "\`A và B\`"],
      ans: 0,
      exp: "Vì $x = 7$, điều kiện $x > 10$ sai; nhánh \`elif x > 5\` đúng nên in ra \`B\` và kết thúc."
    }
  ],

  // Bài 20: Vòng lặp for
  20: [
    {
      q: "Biểu thức \`range(2, 8, 2)\` trong Python sẽ sinh ra dãy số gồm các phần tử nào?",
      options: ["\`2, 4, 6\`", "\`2, 4, 6, 8\`", "\`2, 3, 4, 5, 6, 7, 8\`", "\`4, 6, 8\`"],
      ans: 0,
      exp: "Bắt đầu từ 2, bước nhảy tăng 2, dừng trước 8 nên chỉ gồm các số 2, 4, 6."
    },
    {
      q: "Đoạn lệnh sau thực hiện bao nhiêu lần lặp?\n\`for i in range(10): print(i)\`",
      options: ["$10\\text{ lần}$", "$9\\text{ lần}$", "$11\\text{ lần}$", "$0\\text{ lần}$"],
      ans: 0,
      exp: "\`range(10)\` sinh ra các số từ 0 đến 9, tổng cộng có 10 giá trị tương ứng 10 lần lặp."
    },
    {
      q: "Kết quả của biến \`s\` sau khi chạy đoạn mã sau là:\n\`s = 0\`\n\`for i in range(1, 5): s += i\`",
      options: ["\`10\`", "\`15\`", "\`4\`", "\`5\`"],
      ans: 0,
      exp: "$s = 1 + 2 + 3 + 4 = 10$ (giá trị stop là 5 nên vòng lặp dừng ở 4)."
    }
  ],

  // Bài 21: Vòng lặp while
  21: [
    {
      q: "Vòng lặp \`while\` phù hợp nhất trong tình huống bài toán nào dưới đây?",
      options: [
        "Bài toán lặp với số lần lặp chưa biết trước mà phụ thuộc vào điều kiện dừng",
        "Bài toán duyệt qua danh sách gồm đúng 100 học sinh",
        "Bài toán in ra các số từ 1 đến 50",
        "Bài toán chỉ thực hiện đúng 1 lần"
      ],
      ans: 0,
      exp: "Dùng \`while\` khi số lần lặp phụ thuộc vào điều kiện tính toán biến động chưa xác định trước."
    },
    {
      q: "Nguyên nhân dẫn đến lỗi 'Vòng lặp vô hạn' (Infinite Loop) trong câu lệnh \`while\` là:",
      options: [
        "Điều kiện lặp luôn luôn nhận giá trị True và không bao giờ chuyển sang False",
        "Do mạng Internet bị ngắt",
        "Do đặt tên biến quá dài",
        "Do người dùng nhấn phím Enter"
      ],
      ans: 0,
      exp: "Nếu biến kiểm soát không được cập nhật bên trong vòng lặp thì điều kiện sẽ luôn đúng và lặp mãi."
    },
    {
      q: "Đoạn mã sau in ra giá trị cuối cùng của \`x\` là bao nhiêu?\n\`x = 1\`\n\`while x < 8: x *= 2\`",
      options: ["\`8\`", "\`4\`", "\`16\`", "\`7\`"],
      ans: 0,
      exp: "Lần 1: $x = 2$; Lần 2: $x = 4$; Lần 3: $x = 8$. Khi $x = 8$, điều kiện $x < 8$ sai ⟶ dừng vòng lặp."
    }
  ],

  // Bài 22: Danh sách list
  22: [
    {
      q: "Cho danh sách \`a = [10, 20, 30, 40, 50]\`. Giá trị của \`a[-1]\` và \`a[1]\` lần lượt là:",
      options: ["\`50\` và \`20\`", "\`10\` và \`20\`", "\`50\` và \`10\`", "\`40\` và \`30\`"],
      ans: 0,
      exp: "Chỉ số $-1$ là phần tử cuối cùng (50); chỉ số 1 là phần tử thứ hai (20)."
    },
    {
      q: "Hàm nào dùng để tính số lượng phần tử có trong danh sách \`a\`?",
      options: ["\`len(a)\`", "\`count(a)\`", "\`size(a)\`", "\`length(a)\`"],
      ans: 0,
      exp: "Hàm \`len(a)\` (length) trả về số lượng phần tử của danh sách."
    },
    {
      q: "Lát cắt \`a[1:4]\` trên danh sách \`a = [\"a\", \"b\", \"c\", \"d\", \"e\"]\`, kết quả thu được là:",
      options: ["\`['b', 'c', 'd']\`", "\`['b', 'c', 'd', 'e']\`", "\`['a', 'b', 'c']\`", "\`['c', 'd']\`"],
      ans: 0,
      exp: "Lát cắt lấy từ vị trí 1 đến vị trí $4 - 1 = 3$, tương ứng các phần tử tại chỉ số 1, 2, 3 là \`['b', 'c', 'd']\`."
    }
  ],

  // Bài 23: Lệnh danh sách
  23: [
    {
      q: "Phương thức nào dùng để thêm một phần tử mới vào cuối danh sách?",
      options: ["\`a.append(x)\`", "\`a.insert(x)\`", "\`a.add(x)\`", "\`a.push(x)\`"],
      ans: 0,
      exp: "\`append(x)\` thêm phần tử $x$ vào vị trí cuối cùng của danh sách."
    },
    {
      q: "Lệnh \`a.remove(20)\` trên danh sách \`a = [10, 20, 30, 20]\` sẽ làm gì?",
      options: [
        "Chỉ xóa phần tử có giá trị 20 xuất hiện đầu tiên trong danh sách",
        "Xóa tất cả các số 20 có trong danh sách",
        "Xóa phần tử ở vị trí chỉ số 20",
        "Báo lỗi cú pháp"
      ],
      ans: 0,
      exp: "\`remove(x)\` chỉ xóa phần tử đầu tiên có giá trị bằng $x$, kết quả còn \`[10, 30, 20]\`."
    },
    {
      q: "Toán tử nào giúp kiểm tra giá trị \`x\` có nằm trong danh sách \`a\` hay không?",
      options: ["\`x in a\`", "\`x has a\`", "\`x of a\`", "\`x is a\`"],
      ans: 0,
      exp: "\`x in a\` trả về \`True\` nếu $x$ có trong danh sách $a$, ngược lại trả về \`False\`."
    }
  ],

  // Bài 24: Xâu kí tự
  24: [
    {
      q: "Đặc điểm nào dưới đây là ĐÚNG về kiểu dữ liệu xâu kí tự (str) trong Python?",
      options: [
        "Xâu kí tự là bất biến (immutable), không thể thay đổi từng kí tự bằng lệnh gán \`s[i] = ...\`",
        "Xâu kí tự có thể sửa đổi từng kí tự tùy ý",
        "Xâu kí tự chỉ chứa được chữ cái, không chứa được chữ số",
        "Xâu kí tự không có chỉ số âm"
      ],
      ans: 0,
      exp: "Xâu trong Python có tính bất biến; việc gán \`s[0] = 'H'\` sẽ gây lỗi \`TypeError\`."
    },
    {
      q: "Toán tử \`+\` và \`*\` khi áp dụng trên xâu kí tự thể hiện phép toán nào?",
      options: ["Nối xâu (+) và Lặp lại xâu (*)", "Cộng mã ASCII và Nhân số học", "Tách xâu và Đảo xâu", "Xóa xâu"],
      ans: 0,
      exp: "\`\"Abc\" + \"123\"\` cho \`\"Abc123\"\`; \`\"A\" * 3\` cho \`\"AAA\"\`."
    },
    {
      q: "Với xâu \`s = \"Python\"\`, giá trị của \`s[2]\` là kí tự nào?",
      options: ["\`'t'\`", "\`'y'\`", "\`'h'\`", "\`'P'\`"],
      ans: 0,
      exp: "Chỉ số tính từ 0: s[0]='P', s[1]='y', s[2]='t'."
    }
  ],

  // Bài 25: Lệnh xâu kí tự
  25: [
    {
      q: "Phương thức \`s.split()\` không truyền đối số sẽ mặc định tách xâu theo:",
      options: ["Các kí tự khoảng trắng (dấu cách, tab, xuống dòng)", "Dấu phẩy", "Dấu gạch ngang", "Mọi kí tự"],
      ans: 0,
      exp: "\`s.split()\` mặc định tách xâu tại các khoảng trắng và gom lại thành một danh sách các từ."
    },
    {
      q: "Phương thức \`\"-\".join([\"2026\", \"11\", \"04\"])\` cho kết quả là:",
      options: ["\`\"2026-11-04\"\`", "\`\"2026 11 04\"\`", "\`\"2026,11,04\"\`", "\`['2026-11-04']\`"],
      ans: 0,
      exp: "\`join()\` ghép các chuỗi trong danh sách bằng kí tự nối chỉ định \`\"-\"\`."
    },
    {
      q: "Hàm \`s.find(\"abc\")\` trả về giá trị gì nếu xâu con \"abc\" KHÔNG xuất hiện trong \`s\`?",
      options: ["\`-1\`", "\`0\`", "\`False\`", "\`None\`"],
      ans: 0,
      exp: "Theo quy ước của Python, \`find()\` trả về $-1$ khi không tìm thấy xâu con."
    }
  ],

  // Bài 26: Hàm trong Python
  26: [
    {
      q: "Từ khóa nào được sử dụng để bắt đầu khai báo định nghĩa một hàm trong Python?",
      options: ["\`def\`", "\`function\`", "\`func\`", "\`define\`"],
      ans: 0,
      exp: "Từ khóa \`def\` (define) báo hiệu bắt đầu khai báo một hàm."
    },
    {
      q: "Từ khóa \`return\` trong thân hàm có vai trò gì?",
      options: [
        "Trả kết quả về cho nơi gọi hàm và lập tức kết thúc hàm",
        "Khởi động lại hàm từ đầu",
        "In kết quả ra màn hình",
        "Xóa sạch các biến trong hàm"
      ],
      ans: 0,
      exp: "\`return\` chuyển giao giá trị tính toán về cho câu lệnh gọi hàm và thoát khỏi hàm."
    },
    {
      q: "Một hàm nếu không có lệnh \`return\` thì giá trị trả về mặc định của nó là:",
      options: ["\`None\`", "\`0\`", "\`False\`", "\`\"\"\`"],
      ans: 0,
      exp: "Hàm không có return sẽ ngầm định trả về đối tượng đặc biệt \`None\`."
    }
  ],

  // Bài 27: Tham số của hàm
  27: [
    {
      q: "Khái niệm 'Tham số' (Parameter) và 'Đối số' (Argument) phân biệt nhau như thế nào?",
      options: [
        "Tham số được khai báo trong định nghĩa hàm; Đối số là giá trị thực tế truyền vào khi gọi hàm",
        "Tham số và đối số hoàn toàn là một",
        "Đối số viết trong hàm, tham số viết khi gọi",
        "Tham số luôn là số nguyên, đối số là chuỗi"
      ],
      ans: 0,
      exp: "Tham số là biến hình thức lúc viết hàm; đối số là giá trị thực tế lúc gọi hàm chạy."
    },
    {
      q: "Một hàm trong Python có thể trả về nhiều giá trị cùng lúc không?",
      options: [
        "Có thể, các giá trị được đóng gói trả về dưới dạng một bộ (tuple)",
        "Hoàn toàn không thể, chỉ được trả về đúng 1 số",
        "Chỉ trả về được tối đa 2 giá trị",
        "Chỉ trả về được danh sách rỗng"
      ],
      ans: 0,
      exp: "Lệnh \`return a, b\` trong Python sẽ trả về một bộ dữ liệu tuple \`(a, b)\`."
    },
    {
      q: "Khi gọi một hàm có 2 tham số bắt buộc mà ta chỉ truyền vào 1 đối số thì điều gì sẽ xảy ra?",
      options: ["Báo lỗi \`TypeError\` do thiếu đối số", "Chương trình tự điền số 0", "Hàm không chạy nhưng không báo lỗi", "Máy tính tự động tắt"],
      ans: 0,
      exp: "Python yêu cầu số lượng đối số truyền vào phải khớp chính xác với số tham số định nghĩa."
    }
  ],

  // Bài 28: Phạm vi của biến
  28: [
    {
      q: "Biến được tạo ra bên trong một thân hàm được gọi là:",
      options: ["Biến cục bộ (Local variable)", "Biến toàn cục (Global variable)", "Hằng số", "Biến vô danh"],
      ans: 0,
      exp: "Biến trong thân hàm là biến cục bộ, chỉ tồn tại và sử dụng được trong phạm vi của hàm đó."
    },
    {
      q: "Để có thể thay đổi giá trị của một biến toàn cục bên trong thân hàm, ta phải dùng từ khóa nào?",
      options: ["\`global\`", "\`local\`", "\`public\`", "\`static\`"],
      ans: 0,
      exp: "Từ khóa \`global ten_bien\` báo cho Python biết ta muốn thao tác trực tiếp trên biến toàn cục."
    },
    {
      q: "Hai hàm khác nhau có thể sử dụng cùng một tên biến cục bộ mà không ảnh hưởng đến nhau không?",
      options: [
        "Có thể, vì mỗi hàm có một không gian tên (namespace) cục bộ hoàn toàn độc lập",
        "Không thể, vì tên biến trong chương trình phải là duy nhất",
        "Chỉ được nếu kiểu dữ liệu khác nhau",
        "Sẽ gây ra lỗi cú pháp"
      ],
      ans: 0,
      exp: "Không gian tên cục bộ của các hàm độc lập với nhau, tên biến trùng nhau không bị xung đột."
    }
  ],

  // Bài 29: Nhận biết lỗi chương trình
  29: [
    {
      q: "Lỗi viết thiếu dấu hai chấm \`:\` sau câu lệnh \`if\` thuộc loại lỗi nào?",
      options: ["Lỗi cú pháp (SyntaxError)", "Lỗi khi chạy (RuntimeError)", "Lỗi logic (LogicError)", "Lỗi phần cứng"],
      ans: 0,
      exp: "Vi phạm quy tắc ngữ pháp của Python là lỗi cú pháp \`SyntaxError\`, làm chương trình không thể khởi chạy."
    },
    {
      q: "Lỗi chia cho 0 (\`ZeroDivisionError\`) khi đang tính toán dữ liệu người dùng nhập thuộc loại lỗi nào?",
      options: ["Lỗi khi chạy (RuntimeError)", "Lỗi cú pháp", "Lỗi phần mềm", "Lỗi logic"],
      ans: 0,
      exp: "Lỗi phát sinh khi mã lệnh đang thực thi với dữ liệu thực tế gọi là lỗi khi chạy (Exception/Runtime error)."
    },
    {
      q: "Chương trình tính diện tích hình chữ nhật nhưng người viết gõ nhầm công thức thành \`s = a + b\` thuộc loại lỗi nào?",
      options: ["Lỗi logic (Ngữ nghĩa)", "Lỗi cú pháp", "Lỗi khi chạy", "Lỗi bộ nhớ"],
      ans: 0,
      exp: "Chương trình chạy bình thường không báo lỗi nhưng cho kết quả sai lệch so với bài toán là lỗi logic."
    }
  ],

  // Bài 30: Kiểm thử và gỡ lỗi
  30: [
    {
      q: "Mục đích chính của việc xây dựng các ca kiểm thử (Test cases) là gì?",
      options: [
        "Phát hiện các lỗi tiềm ẩn của chương trình trong các trường hợp dữ liệu khác nhau",
        "Làm tăng tốc độ chạy của chương trình",
        "Trang trí mã nguồn đẹp hơn",
        "Tự động viết code thay cho lập trình viên"
      ],
      ans: 0,
      exp: "Kiểm thử giúp rà soát và đảm bảo tính đúng đắn, kiên cố của phần mềm trước khi phát hành."
    },
    {
      q: "Khi xây dựng bộ test case cho hàm giải phương trình, ca kiểm thử nào dưới đây là 'ca kiểm thử biên'?",
      options: ["Hệ số $a = 0$ hoặc biệt thức $\\Delta = 0$", "Hệ số $a = 1, b = -5, c = 6$", "Hệ số $a = 2, b = 5, c = 2$", "Nhập chuỗi kí tự"],
      ans: 0,
      exp: "Các giá trị làm thay đổi bản chất phương trình (như $a = 0$ chuyển về bậc nhất) là các giá trị biên quan trọng."
    },
    {
      q: "Kĩ thuật gỡ lỗi đơn giản và thông dụng nhất cho người mới bắt đầu học lập trình là:",
      options: [
        "Chèn các lệnh \`print()\` để in giá trị biến trung gian tại từng bước thực thi",
        "Xóa toàn bộ mã nguồn viết lại từ đầu",
        "Tắt máy tính khởi động lại",
        "Bỏ qua không kiểm tra"
      ],
      ans: 0,
      exp: "In biến trung gian giúp theo dõi luồng dữ liệu và phát hiện chính xác vị trí phát sinh sai sót."
    }
  ],

  // Bài 31: Thực hành viết chương trình
  31: [
    {
      q: "Bước đầu tiên và quan trọng nhất khi giải quyết một bài toán lập trình là gì?",
      options: [
        "Xác định bài toán: Làm rõ dữ liệu đầu vào (Input), kết quả đầu ra (Output) và ràng buộc",
        "Mở máy tính lên và gõ code ngay lập tức",
        "Thiết kế giao diện đồ họa",
        "Viết tài liệu hướng dẫn sử dụng"
      ],
      ans: 0,
      exp: "Phải hiểu rõ bài toán và xác định Input/Output trước khi tiến hành thiết kế thuật toán và viết mã."
    },
    {
      q: "Tại sao nên chia chương trình lớn thành nhiều hàm con chuyên biệt?",
      options: [
        "Giúp mã nguồn dễ hiểu, dễ kiểm tra sửa lỗi và có thể tái sử dụng các module",
        "Làm cho chương trình dài hơn",
        "Để máy tính chạy tốn nhiều RAM hơn",
        "Bắt buộc bởi hệ điều hành"
      ],
      ans: 0,
      exp: "Nguyên lí module hóa giúp giảm độ phức tạp và tăng khả năng bảo trì phần mềm."
    },
    {
      q: "Phong cách đặt tên biến \`snake_case\` chuẩn trong Python có dạng như thế nào?",
      options: ["\`tong_tien_thanh_toan\`", "\`TongTienThanhToan\`", "\`tongTienThanhToan\`", "\`TONGTIEN\`"],
      ans: 0,
      exp: "Python khuyến nghị đặt tên biến và hàm bằng chữ thường nối nhau bằng dấu gạch dưới \`snake_case\`."
    }
  ],

  // Bài 32: Ôn tập lập trình Python
  32: [
    {
      q: "Trong Python, ba cấu trúc điều khiển cơ bản của mọi thuật toán là:",
      options: ["Cấu trúc tuần tự, Cấu trúc rẽ nhánh, Cấu trúc lặp", "Cấu trúc vào, Cấu trúc ra, Cấu trúc in", "Cấu trúc số nguyên, Cấu trúc chuỗi, Cấu trúc danh sách", "Cấu trúc hàm, Cấu trúc module, Cấu trúc lớp"],
      ans: 0,
      exp: "Mọi thuật toán đều có thể biểu diễn bằng 3 cấu trúc điều khiển nền tảng: Tuần tự, Rẽ nhánh và Lặp."
    },
    {
      q: "Đoạn mã sau thực hiện thuật toán gì?\n\`m = a[0]\`\n\`for x in a:\`\n\`    if x > m: m = x\`",
      options: ["Tìm giá trị lớn nhất trong danh sách a", "Tìm giá trị nhỏ nhất trong danh sách a", "Tính tổng các phần tử của a", "Đếm số phần tử dương"],
      ans: 0,
      exp: "Biến \`m\` lưu giá trị lớn nhất tạm thời; nếu gặp phần tử nào lớn hơn thì cập nhật lại \`m\`."
    },
    {
      q: "Biểu thức điều kiện kiểm tra một số nguyên \`n\` có phải là số chẵn dương hay không là:",
      options: ["\`n > 0 and n % 2 == 0\`", "\`n > 0 or n % 2 == 0\`", "\`n >= 0 and n // 2 == 0\`", "\`n % 2 != 0\`"],
      ans: 0,
      exp: "\`n > 0\` bảo đảm số dương, \`n % 2 == 0\` bảo đảm chia hết cho 2 (số chẵn)."
    }
  ],

  // Bài 33: Nghề thiết kế đồ họa
  33: [
    {
      q: "Sản phẩm nào dưới đây KHÔNG thuộc phạm vi công việc chính của Nhà thiết kế đồ họa máy tính?",
      options: ["Sửa chữa phần cứng bảng mạch điện tử máy tính", "Thiết kế bộ nhận diện thương hiệu (Logo, Namecard)", "Thiết kế ấn phẩm truyền thông (Poster, Banner)", "Thiết kế giao diện ứng dụng di động (UI)"],
      ans: 0,
      exp: "Nhà thiết kế đồ họa sáng tạo các sản phẩm thị giác; việc sửa chữa phần cứng là của kĩ thuật viên điện tử."
    },
    {
      q: "Yếu tố quan trọng nhất giúp một Nhà thiết kế đồ họa ứng tuyển việc làm thành công là:",
      options: [
        "Hồ sơ năng lực (Portfolio) tập hợp các dự án thực tế đã thiết kế",
        "Có máy tính cấu hình đắt tiền nhất",
        "Biết nhiều ngôn ngữ lập trình",
        "Khả năng gõ bàn phím 10 ngón cực nhanh"
      ],
      ans: 0,
      exp: "Portfolio phản ánh chân thực tư duy thẩm mĩ, kĩ năng phần mềm và năng lực sáng tạo của nhà thiết kế."
    },
    {
      q: "Đạo đức nghề nghiệp quan trọng hàng đầu của người làm thiết kế đồ họa là:",
      options: [
        "Tôn trọng bản quyền tác giả, không sao chép hoặc đạo nhái tác phẩm của người khác",
        "Luôn nhận giá thiết kế rẻ nhất thị trường",
        "Chỉ sử dụng 1 phông chữ duy nhất cho mọi dự án",
        "Từ chối lắng nghe ý kiến của khách hàng"
      ],
      ans: 0,
      exp: "Tôn trọng bản quyền và đạo đức nghề nghiệp là nguyên tắc sống còn trong ngành công nghiệp sáng tạo."
    }
  ],

  // Bài 34: Nghề phát triển phần mềm
  34: [
    {
      q: "Vòng đời phát triển phần mềm chuẩn (SDLC) diễn ra theo chu trình nào dưới đây?",
      options: [
        "Khảo sát yêu cầu ⟶ Thiết kế ⟶ Lập trình ⟶ Kiểm thử ⟶ Triển khai & Bảo trì",
        "Lập trình ⟶ Triển khai ⟶ Khảo sát yêu cầu ⟶ Kiểm thử",
        "Thiết kế ⟶ Bán hàng ⟶ Lập trình ⟶ Bảo trì",
        "Kiểm thử ⟶ Lập trình ⟶ Thiết kế ⟶ Phát hành"
      ],
      ans: 0,
      exp: "Quy trình SDLC chuẩn bắt đầu từ hiểu yêu cầu, thiết kế kiến trúc, viết mã, kiểm thử chất lượng đến phát hành."
    },
    {
      q: "Trong một dự án phần mềm, vai trò của Chuyên viên kiểm thử (QA/QC Tester) là gì?",
      options: [
        "Thiết kế các kịch bản kiểm thử để tìm kiếm và phát hiện các lỗi của phần mềm trước khi phát hành",
        "Trực tiếp viết toàn bộ mã nguồn của phần mềm",
        "Gặp khách hàng để thu tiền dự án",
        "Cài đặt hệ điều hành cho văn phòng"
      ],
      ans: 0,
      exp: "Tester chịu trách nhiệm bảo đảm chất lượng, tìm ra các lỗi phát sinh để lập trình viên sửa chữa."
    },
    {
      q: "Năng lực cốt lõi nào quyết định sự phát triển lâu dài của một Kĩ sư phần mềm?",
      options: [
        "Tư duy logic, khả năng tự học công nghệ mới liên tục và kĩ năng làm việc nhóm",
        "Khả năng ghi nhớ thuộc lòng mọi dòng code",
        "Chỉ cần thành thạo một ngôn ngữ duy nhất và không cần học thêm",
        "Làm việc độc lập và không cần giao tiếp với đồng nghiệp"
      ],
      ans: 0,
      exp: "Công nghệ CNTT thay đổi liên tục; tư duy giải quyết vấn đề và năng lực tự học bền bỉ là chìa khóa thành công."
    }
  ]
};

const outPath = path.join(__dirname, 'tinhoc10_quizzes.js');
const content = '// scratch/tinhoc10_quizzes.js\n// Trọn bộ 102 câu hỏi ôn tập củng cố (3 câu/bài) cho 34 bài Tin học 10\nmodule.exports = ' + JSON.stringify(quizzes, null, 2) + ';\n';

fs.writeFileSync(outPath, content, 'utf8');
console.log('Successfully generated 102 quizzes in tinhoc10_quizzes.js!');
