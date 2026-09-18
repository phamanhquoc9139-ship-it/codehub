const quizzesData = {
    // -----------------------------------------
    // TIỂU HỌC
    // -----------------------------------------
    "grade_3": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 3",
        questions: [
            {
                id: 1,
                question: "Bộ phận nào của máy tính giúp em nhìn thấy chữ và hình ảnh?",
                options: ["Bàn phím", "Chuột", "Màn hình", "Thùng máy"],
                correctAnswer: 2,
                explanation: "Màn hình giống như chiếc ti vi, giúp hiển thị thông tin để em nhìn thấy."
            },
            {
                id: 2,
                question: "Để gõ chữ vào máy tính, em sử dụng thiết bị nào?",
                options: ["Loa", "Bàn phím", "Màn hình", "Chuột"],
                correctAnswer: 1,
                explanation: "Bàn phím chứa các phím chữ và số giúp em nhập thông tin vào máy tính."
            },
            {
                id: 3,
                question: "Internet giống như cái gì?",
                options: ["Một cái tivi", "Một cuốn sổ", "Một thư viện khổng lồ", "Một cái máy tính"],
                correctAnswer: 2,
                explanation: "Internet giống như một thư viện khổng lồ chứa hàng tỷ thông tin, video và bài viết."
            }
        ]
    },
    "grade_4": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 4",
        questions: [
            {
                id: 1,
                question: "Phần mềm nào sau đây KHÔNG dùng để soạn thảo văn bản hoặc trình chiếu?",
                options: ["Microsoft Word", "Microsoft PowerPoint", "Tux Paint", "Màn hình máy tính"],
                correctAnswer: 3,
                explanation: "Màn hình máy tính là phần cứng, không phải phần mềm."
            },
            {
                id: 2,
                question: "Để tìm kiếm thông tin trên Internet, em cần dùng gì?",
                options: ["Từ khóa (Keyword)", "Mật khẩu", "Chuột", "Bàn phím"],
                correctAnswer: 0,
                explanation: "Sử dụng 'Từ khóa' giúp công cụ tìm kiếm hiểu được em đang muốn tìm gì trên mạng."
            },
            {
                id: 3,
                question: "Em tự tạo ra một bức tranh trên máy tính, bức tranh đó thuộc quyền gì?",
                options: ["Bản quyền của em", "Của nhà trường", "Của phần mềm", "Không của ai cả"],
                correctAnswer: 0,
                explanation: "Sản phẩm em tự sáng tạo ra sẽ thuộc Bản quyền tác giả (Copyright) của em."
            }
        ]
    },
    "grade_5": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 5",
        questions: [
            {
                id: 1,
                question: "Trong Scratch, khối lệnh 'Lặp lại 10 lần' dùng để làm gì?",
                options: ["Xóa nhân vật", "Làm nhân vật biến mất", "Thực hiện một việc 10 lần", "Đổi hình nền"],
                correctAnswer: 2,
                explanation: "Cấu trúc lặp giúp máy tính tự động thực hiện lại một chuỗi lệnh nhiều lần để tiết kiệm công sức."
            },
            {
                id: 2,
                question: "Trong phần mềm Word, phím BACKSPACE có tác dụng gì?",
                options: ["Bôi đen chữ", "Lên dòng", "Xóa ký tự ngay bên phải con trỏ", "Xóa ký tự ngay bên trái con trỏ"],
                correctAnswer: 3,
                explanation: "Backspace xóa lùi (bên trái), trong khi Delete xóa tiến (bên phải)."
            },
            {
                id: 3,
                question: "Máy tính không thể tự làm công việc nào sau đây?",
                options: ["Lưu trữ hình ảnh", "Tự nghĩ ra một câu chuyện cổ tích", "Tô màu văn bản", "Phát một đoạn nhạc"],
                correctAnswer: 1,
                explanation: "Máy tính chỉ thực hiện các lệnh do con người lập trình, không có tính sáng tạo cảm xúc."
            }
        ]
    },

    // -----------------------------------------
    // THCS
    // -----------------------------------------
    "grade_6": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 6",
        questions: [
            {
                id: 1,
                question: "Dữ liệu (Data) là gì?",
                options: ["Ý nghĩa của thông tin", "Là các con số, văn bản, hình ảnh... được lưu trữ", "Là máy tính", "Là CPU"],
                correctAnswer: 1,
                explanation: "Dữ liệu là hình thức ban đầu, dạng vật lý của thông tin, ví dụ: 25, 'Hà Nội', video."
            },
            {
                id: 2,
                question: "Thiết bị nào sau đây là bộ nhớ ngoài?",
                options: ["RAM", "ROM", "Ổ cứng (HDD/SSD)", "CPU"],
                correctAnswer: 2,
                explanation: "Ổ cứng, USB, thẻ nhớ là bộ nhớ ngoài, giúp lưu trữ lâu dài kể cả khi tắt máy."
            },
            {
                id: 3,
                question: "Phần mềm độc hại (Malware) lây lan chủ yếu qua đâu?",
                options: ["Ổ cắm điện", "Màn hình", "Mạng Internet và USB", "Bàn phím"],
                correctAnswer: 2,
                explanation: "Virus và mã độc phát tán thông qua việc click vào link lạ trên mạng hoặc cắm USB bị nhiễm."
            }
        ]
    },
    "grade_7": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 7",
        questions: [
            {
                id: 1,
                question: "Trong MS Excel, công thức nào sau đây để tính Tổng các ô từ A1 đến A5?",
                options: ["=MAX(A1:A5)", "=SUM(A1:A5)", "=AVERAGE(A1:A5)", "=MIN(A1:A5)"],
                correctAnswer: 1,
                explanation: "Hàm SUM được sử dụng để tính tổng các giá trị trong một dải ô."
            },
            {
                id: 2,
                question: "Kí tự nào luôn bắt đầu trong một công thức Excel?",
                options: ["Dấu cộng (+)", "Dấu bằng (=)", "Dấu sao (*)", "Dấu ngoặc ()"],
                correctAnswer: 1,
                explanation: "Excel nhận diện một ô chứa công thức (thay vì văn bản thường) nhờ dấu '=' ở đầu."
            },
            {
                id: 3,
                question: "Quyền tác giả phần mềm (Copyright) bảo hiểm cho việc gì?",
                options: ["Chữa máy tính hỏng", "Chép lậu game miễn phí", "Bảo vệ tài sản trí tuệ của người tạo ra phần mềm", "Cài đặt ứng dụng dọn rác"],
                correctAnswer: 2,
                explanation: "Bản quyền nhằm ngăn chặn việc ăn cắp và sao chép phần mềm khi chưa có sự cho phép."
            }
        ]
    },
    "grade_8": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 8",
        questions: [
            {
                id: 1,
                question: "Thuật toán tìm kiếm tuần tự (Linear Search) hoạt động thế nào?",
                options: ["Chia đôi danh sách liên tục", "Tìm ngẫu nhiên", "Kiểm tra từng phần tử từ đầu đến cuối", "Sắp xếp trước rồi mới tìm"],
                correctAnswer: 2,
                explanation: "Tuần tự nghĩa là duyệt từ phần tử đầu tiên đến phần tử cuối cùng để tìm ra đối sánh."
            },
            {
                id: 2,
                question: "Khi nào nên dùng tìm kiếm nhị phân (Binary Search)?",
                options: ["Luôn luôn", "Khi danh sách đã được SẮP XẾP", "Khi danh sách trống", "Khi danh sách chưa được sắp xếp"],
                correctAnswer: 1,
                explanation: "Binary Search chỉ hoạt động khi mảng đã được sắp xếp (ví dụ: chia đôi từ điển để tìm chữ)."
            },
            {
                id: 3,
                question: "Hành vi nào vi phạm đạo đức số?",
                options: ["Tham gia học trực tuyến", "Cài phần mềm diệt Virus", "Đăng ảnh chế giễu bạn cùng lớp lên Facebook", "Tra cứu Wikipedia"],
                correctAnswer: 2,
                explanation: "Bắt nạt trên không gian mạng (Cyberbullying) là hành vi thiếu văn hóa và vi phạm chuẩn mực."
            }
        ]
    },
    "grade_9": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 9",
        questions: [
            {
                id: 1,
                question: "Mạng LAN là gì?",
                options: ["Mạng di động 5G", "Mạng diện rộng toàn thế giới", "Mạng cục bộ (trong một tòa nhà, phòng máy)", "Mạng cáp quang biển"],
                correctAnswer: 2,
                explanation: "LAN (Local Area Network) là mạng kết nối các máy tính trong phạm vi hẹp."
            },
            {
                id: 2,
                question: "Internet kết nối thiết bị với nhau chủ yếu bằng giao thức nào?",
                options: ["TCP/IP", "USB", "HDMI", "Bluetooth"],
                correctAnswer: 0,
                explanation: "TCP/IP là bộ quy tắc chuẩn giúp các hệ thống khác nhau có thể truyền nhận dữ liệu trên Internet."
            },
            {
                id: 3,
                question: "Lợi ích của việc nén tệp (Zip/Rar)?",
                options: ["Làm tệp đẹp hơn", "Giảm dung lượng tệp và dễ dàng gửi qua mail", "Thay đổi định dạng video", "Diệt virus"],
                correctAnswer: 1,
                explanation: "Nén tệp giúp gộp nhiều tệp lại và thu nhỏ kích thước bộ nhớ chúng chiếm dụng."
            }
        ]
    },

    // -----------------------------------------
    // THPT
    // -----------------------------------------
    "grade_10": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 10",
        questions: [
            {
                id: 1,
                question: "Thiết bị thông minh (Smart device) khác thiết bị điện tử thường ở điểm nào?",
                options: ["Dùng điện 220V", "Có khả năng nhận biết môi trường, xử lý thông tin tự động và kết nối mạng", "Có khối lượng nặng hơn", "Làm bằng kim loại"],
                correctAnswer: 1,
                explanation: "Thiết bị thông minh thường được tích hợp cảm biến (sensor), chip xử lý và có Wi-Fi/Bluetooth."
            },
            {
                id: 2,
                question: "Hệ điều hành Windows thuộc loại phần mềm nào?",
                options: ["Phần mềm ứng dụng", "Phần mềm độc hại", "Phần mềm hệ thống", "Phần mềm đồ họa"],
                correctAnswer: 2,
                explanation: "Hệ điều hành (OS) là phần mềm nền tảng, quản lý phần cứng và làm cầu nối cho phần mềm ứng dụng."
            },
            {
                id: 3,
                question: "Trí tuệ nhân tạo (AI) giúp máy tính có khả năng gì?",
                options: ["Chống nước", "Hành động và tư duy mô phỏng con người", "Bật nguồn nhanh", "Thay thế hoàn toàn con người"],
                correctAnswer: 1,
                explanation: "AI là nhánh khoa học máy tính hướng tới việc tự động hóa tư duy học máy, nhận diện."
            }
        ]
    },
    "grade_11": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 11",
        questions: [
            {
                id: 1,
                question: "Vì sao phải thiết kế cơ sở dữ liệu (Database)?",
                options: ["Để máy chiếu sáng hơn", "Để lưu trữ dữ liệu có cấu trúc, tránh dư thừa, chống mất chuẩn", "Để vẽ đồ họa 3D", "Để lướt web nhanh hơn"],
                correctAnswer: 1,
                explanation: "CSDL giúp chuẩn hóa dữ liệu, đảm bảo tính nhất quán và toàn vẹn khi hệ quản trị truy vấn."
            },
            {
                id: 2,
                question: "Khóa chính (Primary Key) trong bảng (Table) có đặc điểm gì?",
                options: ["Các giá trị có thể trùng nhau", "Luôn là kiểu số", "Định danh duy nhất một bản ghi (row) và không được NULL", "Chỉ chứa 1 kí tự"],
                correctAnswer: 2,
                explanation: "Khóa chính dùng để phân biệt các dòng với nhau (VD: Mã số sinh viên, CCCD)."
            },
            {
                id: 3,
                question: "Nghề Quản trị cơ sở dữ liệu (DBA) có nhiệm vụ gì?",
                options: ["Cài hệ điều hành", "Cấu hình mạng LAN", "Thiết kế, bảo mật, sao lưu và khôi phục hệ thống cơ sở dữ liệu", "Thiết kế logo"],
                correctAnswer: 2,
                explanation: "DBA chịu trách nhiệm hiệu năng, cấp quyền và đảm bảo CSDL công ty luôn an toàn."
            }
        ]
    },
    "grade_12": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 12 (ICT)",
        questions: [
            {
                id: 1,
                question: "Trong kết nối mạng máy tính và Internet, thiết bị nào thường đóng vai trò cấp phát địa chỉ IP động cho các thiết bị trong mạng?",
                options: ["Switch", "Access Point", "Router (Bộ định tuyến)", "Modem quang"],
                correctAnswer: 2,
                explanation: "Router thường được tích hợp dịch vụ DHCP để cấp phát IP động tự động cho các thiết bị."
            },
            {
                id: 2,
                question: "Theo định hướng ICT, khi tạo trang web bằng Google Sites, thao tác nào cho phép nhúng video từ YouTube?",
                options: ["Sử dụng tính năng 'Bộ chia'", "Chèn 'Khối nội dung'", "Vào tab Chèn -> chọn 'YouTube' hoặc 'Nhúng'", "Vào cài đặt xuất bản trang web"],
                correctAnswer: 2,
                explanation: "Google Sites có sẵn công cụ YouTube và công cụ Nhúng (Embed) trong tab Chèn để chèn video."
            },
            {
                id: 3,
                question: "Tính nhân văn trong không gian mạng KHÔNG bao gồm hành vi nào dưới đây?",
                options: ["Tôn trọng sự khác biệt", "Bắt nạt qua mạng (Cyberbullying)", "Lan tỏa những điều tích cực", "Sử dụng ngôn từ lịch sự"],
                correctAnswer: 1,
                explanation: "Bắt nạt trực tuyến là hành vi xấu, đi ngược lại giá trị đạo đức và tính nhân văn số."
            }
        ]
    },

    // -----------------------------------------
    // ACTIVITIES & EXTRA COURSES
    // -----------------------------------------
    "python_basics": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Python Cơ Bản",
        questions: [
            {
                id: 1,
                question: "Để in chữ 'Hello World' ra màn hình console trong Python, em dùng lệnh gì?",
                options: ["echo 'Hello World'", "console.log('Hello World')", "print('Hello World')", "printf('Hello World')"],
                correctAnswer: 2,
                explanation: "Hàm print() là hàm tiêu chuẩn trong Python để xuất đầu ra."
            },
            {
                id: 2,
                question: "Kiểu dữ liệu của x = 10.5 là gì?",
                options: ["int", "float", "str", "bool"],
                correctAnswer: 1,
                explanation: "Số có dấu thập phân (10.5) thuộc kiểu số thực (float)."
            },
            {
                id: 3,
                question: "Ký hiệu nào dùng để viết chú thích (Comment) trong Python?",
                options: ["//", "/* ... */", "<!-- -->", "#"],
                correctAnswer: 3,
                explanation: "Python sử dụng dấu thăng (#) cho các chú thích trên từng dòng."
            }
        ]
    },
    "hdtnhn_10": {
        title: "Bài Kiểm Tra: HĐTN & HN 10",
        questions: [
            {
                id: 1,
                question: "Trong hoạt động hướng nghiệp, yếu tố nào bên trong cá nhân là quan trọng nhất khi chọn nghề?",
                options: ["Ý kiến của bạn bè", "Mức lương", "Sự phù hợp giữa sở thích, sở trường và đam mê", "Nghề đó đang hot"],
                correctAnswer: 2,
                explanation: "Đam mê và năng lực cá nhân mới quyết định em có thể gắn bó và phát triển bền vững hay không."
            },
            {
                id: 2,
                question: "Lập kế hoạch tài chính cá nhân mang lại lợi ích gì?",
                options: ["Có nhiều tiền ngay lập tức", "Biết cách quản lý thu - chi hợp lý, chuẩn bị cho tương lai", "Không bao giờ gặp rủi ro", "Chỉ để làm vui"],
                correctAnswer: 1,
                explanation: "Quản lý tài chính giúp kiểm soát được thói quen tiêu xài, đảm bảo mục tiêu lâu dài."
            }
        ]
    },
    "hdtnhn_11": {
        title: "Bài Kiểm Tra: HĐTN & HN 11",
        questions: [
            {
                id: 1,
                question: "Cách tốt nhất để tự bảo vệ bản thân khi sử dụng mạng xã hội?",
                options: ["Công khai mọi số điện thoại, địa chỉ", "Chấp nhận tất cả lời mời kết bạn", "Cài đặt bảo mật (Private), suy nghĩ trước khi đăng bài (Think before you post)", "Tham gia mọi hội nhóm nhóm bóc phốt"],
                correctAnswer: 2,
                explanation: "Kỹ năng tự phản vệ trên không gian số yêu cầu ý thức bảo mật dữ liệu cá nhân cao."
            },
            {
                id: 2,
                question: "Trong bối cảnh hướng nghiệp lớp 11, em nên làm gì để đánh giá trường Đại học/Cao đẳng mục tiêu?",
                options: ["Chỉ nghe theo phong trào", "Chờ đến lớp 12 mới suy nghĩ", "Tham gia ngày hội tư vấn tuyển sinh, so sánh điểm chuẩn, chương trình đào tạo", "Chọn đại một trường"],
                correctAnswer: 2,
                explanation: "Việc thu thập thông tin và đối chiếu sớm vào năm lớp 11 giúp tạo động lực học tập."
            }
        ]
    }
};
